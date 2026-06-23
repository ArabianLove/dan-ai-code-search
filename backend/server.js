/* ───────────────────────────────────────────────
   Dan AI — Backend
   Implementa il contratto descritto in ../BACKEND_API.md
   ─────────────────────────────────────────────── */

import express from 'express';
import cors from 'cors';
import cookieParser from 'cookie-parser';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';

import store from './src/store.js';
import { chat, generateTitle } from './src/ai.js';

const app = express();
app.set('trust proxy', 1); // dietro al proxy di Railway: cookie Secure corretti
app.use(express.json({ limit: '2mb' }));
app.use(cookieParser());

// ─── CORS con credenziali ───
const ALLOWED_ORIGINS = (process.env.ALLOWED_ORIGINS ||
  'https://arabianlove.github.io,http://localhost:8080,http://127.0.0.1:8080')
  .split(',')
  .map((s) => s.trim())
  .filter(Boolean);

app.use(
  cors({
    origin(origin, cb) {
      // Richieste senza Origin (curl, app native) sono permesse.
      if (!origin || ALLOWED_ORIGINS.includes(origin)) return cb(null, true);
      return cb(null, false);
    },
    credentials: true,
    methods: ['GET', 'POST', 'OPTIONS'],
    allowedHeaders: ['Content-Type'],
  })
);

// ─── Auth helpers ───
const JWT_SECRET = process.env.JWT_SECRET || 'cambia-questo-secret-in-produzione';
const COOKIE_NAME = 'danai_session';
const COOKIE_OPTS = {
  httpOnly: true,
  secure: true,
  sameSite: 'none', // necessario per il cross-site (GitHub Pages → backend)
  maxAge: 1000 * 60 * 60 * 24 * 30, // 30 giorni
};

function setSession(res, user) {
  const token = jwt.sign({ id: user.id, username: user.username }, JWT_SECRET, {
    expiresIn: '30d',
  });
  res.cookie(COOKIE_NAME, token, COOKIE_OPTS);
}

function readUser(req) {
  const token = req.cookies?.[COOKIE_NAME];
  if (!token) return null;
  try {
    return jwt.verify(token, JWT_SECRET);
  } catch {
    return null;
  }
}

// ─── tRPC envelope helpers ───
const ok = (res, json) => res.json({ result: { data: { json } } });
const trpcInput = (req) => {
  // POST: { json: {...} } nel body. GET: ?input=<urlencoded {json:{...}}>
  if (req.method === 'POST') return req.body?.json || {};
  try {
    return JSON.parse(req.query.input || '{}').json || {};
  } catch {
    return {};
  }
};

// ─── Health ───
app.get('/health', (req, res) => res.json({ status: 'ok' }));
app.get('/', (req, res) => res.json({ service: 'dan-ai-backend', status: 'ok' }));

// ─── Autenticazione (REST) ───
app.post('/api/auth/register', async (req, res) => {
  const { username, password, email } = req.body || {};
  if (!username || !password)
    return res.status(400).json({ error: 'Username e password sono obbligatori' });
  if (username.length < 3 || username.length > 32)
    return res.status(400).json({ error: 'Lo username deve essere tra 3 e 32 caratteri' });
  if (!/^[a-zA-Z0-9_.]+$/.test(username))
    return res.status(400).json({ error: 'Username non valido' });
  if (password.length < 6)
    return res.status(400).json({ error: 'La password deve essere almeno 6 caratteri' });

  if (await store.findUserByUsername(username))
    return res.status(409).json({ error: 'Username già in uso' });

  const passwordHash = await bcrypt.hash(password, 10);
  const user = await store.createUser({ username, email, passwordHash });
  setSession(res, user);
  res.json({ user: { name: user.username }, app_session_id: null });
});

app.post('/api/auth/login', async (req, res) => {
  const { username, password } = req.body || {};
  if (!username || !password)
    return res.status(400).json({ error: 'Inserisci username e password' });

  const user = await store.findUserByUsername(username);
  if (!user || !(await bcrypt.compare(password, user.password_hash)))
    return res.status(401).json({ error: 'Credenziali non valide' });

  setSession(res, user);
  res.json({ user: { name: user.username }, app_session_id: null });
});

app.get('/api/trpc/auth.me', (req, res) => {
  const u = readUser(req);
  if (!u) return res.status(401).json({ error: 'non autenticato' });
  ok(res, { id: u.id, username: u.username });
});

// ─── AI ───
app.post('/api/trpc/ai.chat', async (req, res) => {
  const { messages, mode, godMode, systemPrompt, conversationExternalId } = trpcInput(req);
  if (!Array.isArray(messages) || messages.length === 0)
    return res.status(400).json({ error: 'messages mancanti' });

  try {
    const content = await chat({ messages, systemPrompt, godMode: !!godMode });

    // Persistenza best-effort se l'utente è autenticato.
    const u = readUser(req);
    if (u && conversationExternalId) {
      const lastUser = [...messages].reverse().find((m) => m.role === 'user');
      store
        .appendTurn(u.id, conversationExternalId, {
          mode,
          userMessage: lastUser ? String(lastUser.content) : null,
          assistantMessage: content,
        })
        .catch(() => {});
    }

    ok(res, { content });
  } catch (e) {
    console.error('ai.chat error:', e?.message || e);
    res.status(502).json({ error: 'Errore del motore AI' });
  }
});

app.post('/api/trpc/ai.generateTitle', async (req, res) => {
  const { firstMessage, conversationExternalId } = trpcInput(req);
  try {
    const title = await generateTitle({ firstMessage });
    const u = readUser(req);
    if (u && conversationExternalId) store.setTitle(u.id, conversationExternalId, title).catch(() => {});
    ok(res, { title });
  } catch (e) {
    console.error('ai.generateTitle error:', e?.message || e);
    res.status(502).json({ error: 'Errore generazione titolo' });
  }
});

// ─── Conversazioni ───
app.get('/api/trpc/conversations.list', async (req, res) => {
  const u = readUser(req);
  if (!u) return ok(res, []);
  ok(res, await store.listConversations(u.id));
});

app.get('/api/trpc/conversations.getMessages', async (req, res) => {
  const u = readUser(req);
  const { externalId } = trpcInput(req);
  if (!u || !externalId) return ok(res, []);
  ok(res, await store.getMessages(u.id, externalId));
});

app.post('/api/trpc/conversations.delete', async (req, res) => {
  const u = readUser(req);
  const { externalId } = trpcInput(req);
  if (u && externalId) await store.deleteConversation(u.id, externalId);
  ok(res, { ok: true });
});

// ─── GDPR ───
app.post('/api/trpc/gdpr.deleteAllData', async (req, res) => {
  const u = readUser(req);
  if (u) await store.deleteAllData(u.id);
  res.clearCookie(COOKIE_NAME, COOKIE_OPTS);
  ok(res, { ok: true });
});

// ─── Terminale sandbox (DISABILITATO per sicurezza) ───
app.post('/api/trpc/sandbox.execute', (req, res) => {
  // Eseguire comandi shell arbitrari inviati dal client è di fatto una RCE
  // sul server. Va abilitato SOLO con un vero isolamento (container effimeri
  // per sessione, senza segreti montati, rete e risorse limitate).
  // Finché non c'è, restiamo disattivati di proposito.
  ok(res, {
    stdout: '',
    stderr:
      'Il terminale sandbox è disattivato sul server per motivi di sicurezza. ' +
      'Va abilitato solo con un isolamento a container dedicato (vedi BACKEND_API.md §6).',
    exitCode: 1,
    installedTools: [],
  });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Dan AI backend in ascolto sulla porta ${PORT}`);
  console.log(`Origini CORS permesse: ${ALLOWED_ORIGINS.join(', ')}`);
  console.log(`Storage: ${process.env.DATABASE_URL ? 'Postgres' : 'in memoria (non persistente)'}`);
});
