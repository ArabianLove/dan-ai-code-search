/* ───────────────────────────────────────────────
   Storage — Postgres se DATABASE_URL è impostata, altrimenti
   un fallback in memoria (i dati si azzerano al riavvio).
   Per la persistenza reale su Railway aggiungi un database
   Postgres e imposta DATABASE_URL.
   ─────────────────────────────────────────────── */

import crypto from 'crypto';

const userandomId = () => crypto.randomBytes(12).toString('hex');

let impl;

if (process.env.DATABASE_URL) {
  const { default: pg } = await import('pg');
  const pool = new pg.Pool({
    connectionString: process.env.DATABASE_URL,
    ssl: process.env.PGSSL === 'disable' ? false : { rejectUnauthorized: false },
  });

  await pool.query(`
    CREATE TABLE IF NOT EXISTS users (
      id TEXT PRIMARY KEY,
      username TEXT UNIQUE NOT NULL,
      email TEXT,
      password_hash TEXT NOT NULL,
      created_at TIMESTAMPTZ DEFAULT now()
    );
    CREATE TABLE IF NOT EXISTS conversations (
      external_id TEXT PRIMARY KEY,
      user_id TEXT NOT NULL REFERENCES users(id) ON DELETE CASCADE,
      title TEXT,
      mode TEXT,
      created_at TIMESTAMPTZ DEFAULT now()
    );
    CREATE TABLE IF NOT EXISTS messages (
      id BIGSERIAL PRIMARY KEY,
      conversation_external_id TEXT NOT NULL REFERENCES conversations(external_id) ON DELETE CASCADE,
      role TEXT NOT NULL,
      content TEXT NOT NULL,
      created_at TIMESTAMPTZ DEFAULT now()
    );
  `);

  impl = {
    async createUser({ username, email, passwordHash }) {
      const id = userandomId();
      await pool.query(
        'INSERT INTO users (id, username, email, password_hash) VALUES ($1,$2,$3,$4)',
        [id, username, email || null, passwordHash]
      );
      return { id, username, email: email || null };
    },
    async findUserByUsername(username) {
      const { rows } = await pool.query('SELECT * FROM users WHERE username=$1', [username]);
      return rows[0] || null;
    },
    async listConversations(userId) {
      const { rows } = await pool.query(
        'SELECT external_id AS "externalId", title, mode, created_at AS "createdAt" FROM conversations WHERE user_id=$1 ORDER BY created_at DESC',
        [userId]
      );
      return rows;
    },
    async getMessages(userId, externalId) {
      const { rows } = await pool.query(
        `SELECT m.role, m.content FROM messages m
         JOIN conversations c ON c.external_id = m.conversation_external_id
         WHERE c.user_id=$1 AND m.conversation_external_id=$2
         ORDER BY m.id ASC`,
        [userId, externalId]
      );
      return rows;
    },
    async appendTurn(userId, externalId, { mode, userMessage, assistantMessage }) {
      await pool.query(
        `INSERT INTO conversations (external_id, user_id, mode)
         VALUES ($1,$2,$3) ON CONFLICT (external_id) DO NOTHING`,
        [externalId, userId, mode || null]
      );
      if (userMessage)
        await pool.query(
          'INSERT INTO messages (conversation_external_id, role, content) VALUES ($1,$2,$3)',
          [externalId, 'user', userMessage]
        );
      if (assistantMessage)
        await pool.query(
          'INSERT INTO messages (conversation_external_id, role, content) VALUES ($1,$2,$3)',
          [externalId, 'assistant', assistantMessage]
        );
    },
    async setTitle(userId, externalId, title) {
      await pool.query(
        'UPDATE conversations SET title=$3 WHERE user_id=$1 AND external_id=$2',
        [userId, externalId, title]
      );
    },
    async deleteConversation(userId, externalId) {
      await pool.query('DELETE FROM conversations WHERE user_id=$1 AND external_id=$2', [
        userId,
        externalId,
      ]);
    },
    async deleteAllData(userId) {
      await pool.query('DELETE FROM conversations WHERE user_id=$1', [userId]);
    },
  };
} else {
  const users = new Map(); // username -> user
  const conversations = new Map(); // externalId -> { externalId, userId, title, mode, createdAt }
  const messages = new Map(); // externalId -> [{role, content}]

  impl = {
    async createUser({ username, email, passwordHash }) {
      const user = { id: userandomId(), username, email: email || null, password_hash: passwordHash };
      users.set(username, user);
      return { id: user.id, username, email: user.email };
    },
    async findUserByUsername(username) {
      return users.get(username) || null;
    },
    async listConversations(userId) {
      return [...conversations.values()]
        .filter((c) => c.userId === userId)
        .sort((a, b) => b.createdAt - a.createdAt);
    },
    async getMessages(userId, externalId) {
      const c = conversations.get(externalId);
      if (!c || c.userId !== userId) return [];
      return messages.get(externalId) || [];
    },
    async appendTurn(userId, externalId, { mode, userMessage, assistantMessage }) {
      let c = conversations.get(externalId);
      if (!c) {
        c = { externalId, userId, title: 'Conversazione', mode: mode || null, createdAt: Date.now() };
        conversations.set(externalId, c);
        messages.set(externalId, []);
      }
      const arr = messages.get(externalId);
      if (userMessage) arr.push({ role: 'user', content: userMessage });
      if (assistantMessage) arr.push({ role: 'assistant', content: assistantMessage });
    },
    async setTitle(userId, externalId, title) {
      const c = conversations.get(externalId);
      if (c && c.userId === userId) c.title = title;
    },
    async deleteConversation(userId, externalId) {
      const c = conversations.get(externalId);
      if (c && c.userId === userId) {
        conversations.delete(externalId);
        messages.delete(externalId);
      }
    },
    async deleteAllData(userId) {
      for (const [k, c] of conversations) {
        if (c.userId === userId) {
          conversations.delete(k);
          messages.delete(k);
        }
      }
    },
  };
}

export default impl;
