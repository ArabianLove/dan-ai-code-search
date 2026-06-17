# Dan AI — Contratto API del Backend

Questo documento descrive **esattamente** ciò che la PWA (`js/app.js`) invia al
backend e ciò che si aspetta di ricevere. Serve a chi costruisce/configura il
server (es. su Railway) per renderlo compatibile **senza toccare il frontend**.

> Regola d'oro: se il backend rispetta questo contratto, l'app funziona. In
> particolare, **God Mode e la qualità delle risposte dipendono dal campo
> `systemPrompt`**: se il server lo ignora, God Mode resta identico al normale.

---

## 1. Configurazione di base

Nel frontend (`js/app.js`):

```js
const API_BASE = 'https://<il-tuo-backend>';   // es. dan-ai-backend-production.up.railway.app
const API_TRPC = `${API_BASE}/api/trpc`;
```

Due famiglie di endpoint:

| Tipo | Prefisso | Stile |
|------|----------|-------|
| Autenticazione | `${API_BASE}/api/auth/...` | REST classico (JSON piatto) |
| Tutto il resto | `${API_BASE}/api/trpc/...` | Envelope stile tRPC (vedi §2) |

### CORS (obbligatorio)

Il frontend chiama **sempre** con `credentials: 'include'` (cookie di sessione).
Il browser quindi richiede header CORS precisi — `*` **non** è ammesso con le
credenziali:

```
Access-Control-Allow-Origin: https://arabianlove.github.io   # l'origine esatta del sito, NON *
Access-Control-Allow-Credentials: true
Access-Control-Allow-Methods: GET, POST, OPTIONS
Access-Control-Allow-Headers: Content-Type
```

Va gestito anche il preflight `OPTIONS` con risposta `204`. Se la PWA gira anche
da altri domini (dominio proprietario, `localhost` in sviluppo), vanno aggiunti
alla allowlist e riflessi dinamicamente nell'header `Allow-Origin`.

---

## 2. Convenzione dell'envelope tRPC

Tutti gli endpoint sotto `/api/trpc` usano questo formato.

**Input** (POST nel body, GET come query `?input=`):

```json
{ "json": { /* i parametri */ } }
```

**Output (successo):**

```json
{ "result": { "data": { "json": { /* il payload */ } } } }
```

**Output (errore):** qualunque status non-2xx; il frontend ricade nel fallback
locale. Per gli endpoint REST `/api/auth`, includere `{ "error": "messaggio" }`.

---

## 3. Endpoint di autenticazione (REST)

### `POST /api/auth/login`

Request:
```json
{ "username": "mario", "password": "segreta" }
```
Response 200:
```json
{ "user": { "name": "mario" }, "app_session_id": "<token-o-null>" }
```
Response errore (es. 401):
```json
{ "error": "Credenziali non valide" }
```
Il server **deve** impostare il cookie di sessione (`Set-Cookie`, `HttpOnly`,
`Secure`, `SameSite=None` perché cross-site).

### `POST /api/auth/register`

Request:
```json
{ "username": "mario", "password": "segreta", "email": "opzionale@mail.it" }
```
Response/cookie: identici a `login`. Validazioni minime (il frontend già le fa,
ma vanno **ripetute lato server**): username 3–32 caratteri `[a-zA-Z0-9_.]`,
password ≥ 6.

### `GET /api/trpc/auth.me`

Usato solo come **health/auth check**: se risponde `2xx` l'app segna "Server
connesso". Può restituire i dati dell'utente o `{}`.

---

## 4. Endpoint AI (i più importanti)

### `POST /api/trpc/ai.chat`

Request:
```json
{
  "json": {
    "messages": [ { "role": "user", "content": "..." }, { "role": "assistant", "content": "..." } ],
    "mode": "coding",            // coding | analysis | osint | search | general
    "godMode": false,
    "systemPrompt": "Sei Dan AI in modalità CODING. ...",
    "conversationExternalId": "chat_1718...   // opzionale"
  }
}
```

Response 200:
```json
{ "result": { "data": { "json": { "content": "## Risposta in **markdown** ..." } } } }
```

**Contratto critico per la potenza:**

1. **Usa `systemPrompt` come istruzione di sistema del modello.** È già costruito
   dal frontend (prompt della modalità + boost God Mode) in `buildSystemPrompt()`.
   Se preferisci costruirlo lato server, fallo, ma allora **fai prevalere quello
   che ti arriva dal client** quando presente.
2. **Quando `godMode === true`, alza i parametri**: `max_output_tokens` molto alto,
   eventuale `temperature` dedicata, nessun troncamento. È ciò che rende God Mode
   davvero diverso dal normale.
3. Restituisci **markdown** in `content` (il frontend lo rende con marked +
   DOMPurify + highlight.js).

### `POST /api/trpc/ai.generateTitle`

Request:
```json
{ "json": { "firstMessage": "...", "mode": "coding", "conversationExternalId": "chat_..." } }
```
Response:
```json
{ "result": { "data": { "json": { "title": "Ordinamento di una lista in Python" } } } }
```
Titolo breve (≤ ~50 caratteri). Se assente, il frontend tiene il titolo locale.

---

## 5. Conversazioni (sync multi-dispositivo)

### `GET /api/trpc/conversations.list`

Response:
```json
{ "result": { "data": { "json": [
  { "externalId": "chat_123", "id": "...", "title": "...", "mode": "coding", "createdAt": "2026-06-16T20:00:00Z" }
] } } }
```

### `GET /api/trpc/conversations.getMessages?input=<urlencoded>`

`input` = `encodeURIComponent(JSON.stringify({ json: { externalId } }))`.

Response:
```json
{ "result": { "data": { "json": [ { "role": "user", "content": "..." }, { "role": "assistant", "content": "..." } ] } } }
```

### `POST /api/trpc/conversations.delete`

Request: `{ "json": { "externalId": "chat_123" } }` → qualsiasi 2xx.

---

## 6. Terminale sandbox

### `POST /api/trpc/sandbox.execute`

Request:
```json
{ "json": { "command": "ls -la", "timeout": 30000, "godMode": false } }
```
Response:
```json
{ "result": { "data": { "json": {
  "stdout": "...",
  "stderr": "...",
  "exitCode": 0,
  "installedTools": ["binwalk"]
} } } }
```
`timeout` arriva in ms (30000 normale, 120000 in God Mode).

> ⚠️ **SICUREZZA — la parte più pericolosa dell'app.** Eseguire comandi arbitrari
> lato server è di fatto una RCE concessa all'utente. Va fatto **solo** in:
> - container **effimeri** e isolati (uno per sessione, distrutti dopo l'uso),
> - **senza** credenziali/segreti montati, rete in uscita limitata o assente,
> - con timeout, limiti CPU/RAM e quota disco,
> - utente non-root, filesystem in sola lettura tranne una cartella temporanea.

---

## 7. GDPR

### `POST /api/trpc/gdpr.deleteAllData`

Request: `{ "json": {} }`. Cancella tutti i dati dell'utente autenticato. Il
frontend lo chiama in parallelo alla cancellazione locale.

---

## 8. Sicurezza da sistemare (raccomandazioni)

- **God Mode NON deve dipendere da credenziali hardcoded nel client.** Oggi nel
  frontend ci sono `DRAPETTI` / `696969` in chiaro: vanno rimosse. God Mode va
  deciso dal **server** in base all'utente autenticato (es. un flag `isAdmin` o
  un ruolo), e il server deve **ignorare/validare** il `godMode` ricevuto dal
  client invece di fidarsene ciecamente.
- **Hash delle password** (bcrypt/argon2), mai in chiaro.
- **Rate limiting** su login/register/ai.chat.
- Cookie `HttpOnly` + `Secure` + `SameSite=None`; HTTPS ovunque.

---

## 9. Potenziamenti consigliati (oltre il contratto minimo)

1. **Streaming delle risposte** (Server-Sent Events o chunked) per `ai.chat`:
   è il salto di UX più grande. Richiederà un piccolo aggancio nel frontend
   (lettura dello stream invece di `await res.json()`).
2. **Tool use / function calling reale** per le modalità che oggi "fingono":
   - OSINT/Deep Search → Web Search API + WHOIS/DNS reali, con **fonti citate**;
   - Analisi → esecuzione vera di `exiftool`/`binwalk`/`strings` (riusa la sandbox §6);
   - Coding → esecuzione del codice in sandbox per auto-verifica prima di rispondere.
3. **Scelta del modello** per modalità (e parametri più spinti in God Mode).

---

## 10. Checklist rapida di compatibilità

- [ ] CORS con origine esatta + `Allow-Credentials: true` + preflight `OPTIONS`.
- [ ] Cookie di sessione `Secure`/`HttpOnly`/`SameSite=None`.
- [ ] `auth.me` risponde 2xx se autenticato.
- [ ] `ai.chat` rispetta `systemPrompt` e alza i limiti con `godMode`.
- [ ] Tutte le risposte tRPC nell'envelope `result.data.json`.
- [ ] God Mode deciso lato server, non da credenziali nel client.
- [ ] Sandbox isolata (container effimeri, no segreti, limiti, timeout).
