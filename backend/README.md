# Dan AI — Backend

Backend Node.js/Express che implementa il contratto in [`../BACKEND_API.md`](../BACKEND_API.md).
Motore AI: **Claude (Anthropic)** — Sonnet 4.6 in modalità normale, Opus 4.8 in God Mode.

## Cosa fa
- Autenticazione username/password (hash bcrypt, sessione in cookie JWT)
- `ai.chat` / `ai.generateTitle` (rispetta `systemPrompt` e `godMode`)
- Sincronizzazione conversazioni (Postgres se configurato, altrimenti in memoria)
- GDPR: cancellazione dati
- CORS con credenziali per GitHub Pages
- Terminale sandbox **disattivato** di proposito (vedi nota sicurezza)

## Avvio in locale
```bash
cd backend
cp .env.example .env      # poi inserisci ANTHROPIC_API_KEY e JWT_SECRET
npm install
npm start                 # http://localhost:3000
```

## Deploy su Railway
1. Crea un nuovo progetto Railway puntato a questo repo, **Root Directory = `backend`**.
   Railway rileva Node automaticamente (`npm install` + `npm start`).
2. Aggiungi un database **Postgres** dal pannello Railway: popola in automatico `DATABASE_URL`.
3. Imposta le variabili d'ambiente (vedi `.env.example`):
   - `ANTHROPIC_API_KEY` (obbligatoria)
   - `JWT_SECRET` (stringa lunga e casuale)
   - `ALLOWED_ORIGINS` = `https://arabianlove.github.io` (più l'eventuale dominio proprietario)
4. Dopo il deploy, copia l'URL pubblico (es. `https://dan-ai-backend-production.up.railway.app`)
   e mettilo in `js/app.js` → `API_BASE` del frontend.

## Verifica rapida
```bash
curl https://<tuo-backend>/health           # {"status":"ok"}
```

## Nota di sicurezza — terminale sandbox
`sandbox.execute` è volutamente disattivato: eseguire comandi shell arbitrari
inviati dal client è una RCE sul server. Per abilitarlo servono container
effimeri isolati per sessione (senza segreti, con rete/risorse/timeout limitati).
Vedi `../BACKEND_API.md` §6.

## Cambiare provider AI
Tutta la logica del modello è in `src/ai.js` (due funzioni: `chat`, `generateTitle`).
Per usare Gemini o un altro provider basta riscrivere quel file mantenendo la stessa interfaccia.
