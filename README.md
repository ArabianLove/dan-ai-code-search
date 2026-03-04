<p align="center">
  <img src="icons/icon-192.png" alt="Dan AI Logo" width="120">
</p>

<h1 align="center">Dan AI — Code & Search</h1>

<p align="center">
  <strong>Assistente AI specializzato in coding, analisi file, OSINT e ricerca avanzata.</strong><br>
  Disponibile come PWA, sito web e app Android (APK).
</p>

<p align="center">
  <a href="https://arabianlove.github.io/dan-ai-code-search/">🌐 Apri il Sito</a> &nbsp;·&nbsp;
  <a href="https://github.com/ArabianLove/dan-ai-code-search/releases/download/v1.0.0/DanAI-Code-Search.apk">📱 Scarica APK</a> &nbsp;·&nbsp;
  <a href="https://github.com/ArabianLove/dan-ai-code-search/releases/tag/v1.0.0">📦 Release</a>
</p>

---

## Cos'è Dan AI

Dan AI è un assistente di intelligenza artificiale progettato per professionisti e appassionati di tecnologia. Non è un chatbot generico: è uno strumento specializzato con quattro modalità operative distinte, ciascuna ottimizzata per un compito specifico. L'interfaccia è pensata per l'uso mobile, con supporto vocale in sei lingue, tema chiaro/scuro, terminale integrato e funzionamento offline.

Il motore AI è basato su **Gemini 3 Flash** (Google) come modello primario, con fallback automatico su **Gemini 2.5 Flash** per garantire disponibilità continua.

---

## Le 4 Modalità

| Modalità | Descrizione |
|----------|-------------|
| **Coding** | Programmazione avanzata: scrivere, debuggare, ottimizzare e spiegare codice in qualsiasi linguaggio |
| **Analisi** | Analisi file, steganografia, estrazione metadati, reverse engineering e forensics digitale |
| **OSINT** | Ricerche su fonti aperte, intelligence gathering, aggregazione e correlazione di dati pubblici |
| **Deep Search** | Ricerca approfondita su internet con fonti verificate e risultati strutturati |

Ogni modalità configura il modello AI con un prompt di sistema dedicato, ottimizzando le risposte per il contesto specifico. È inoltre disponibile il **God Mode**, che sblocca limiti estesi di token e ragionamento per analisi particolarmente complesse.

---

## Funzionalità Principali

**Interfaccia multilingua** — L'intera interfaccia è disponibile in sei lingue: Italiano, English, Français, Deutsch, Español e العربية. Il cambio lingua avviene in tempo reale dalle impostazioni, con supporto completo RTL per l'arabo.

**Voce bidirezionale** — Supporto Speech-to-Text (dettatura tramite microfono) e Text-to-Speech (lettura ad alta voce delle risposte) in tutte e sei le lingue. Attivabile e configurabile dalle impostazioni.

**Terminale integrato** — Console interattiva con sandbox per eseguire comandi, installare pacchetti e testare codice direttamente nell'app, senza uscire dalla conversazione.

**Tema chiaro/scuro** — Toggle tra tema Cyber Dark (default) e tema chiaro per uso diurno, con persistenza della preferenza.

**Funzionamento offline** — Cache intelligente delle conversazioni con coda di sincronizzazione automatica. Quando la connessione non è disponibile, l'app continua a funzionare con le risposte locali e sincronizza quando torna online.

**Esportazione dati** — Possibilità di esportare le conversazioni in formato JSON e TXT per backup o analisi esterna.

**GDPR compliance** — Informativa privacy integrata con consenso esplicito al primo accesso.

---

## Come Usare Dan AI

### Dal browser (qualsiasi dispositivo)

Apri il sito e accedi:

```
https://arabianlove.github.io/dan-ai-code-search/
```

Su iPhone puoi installarlo come app: tocca il pulsante di condivisione in Safari e scegli **"Aggiungi a schermata Home"**.

### Su Android

Scarica l'APK dalla pagina Release:

```
https://github.com/ArabianLove/dan-ai-code-search/releases/download/v1.0.0/DanAI-Code-Search.apk
```

Apri il file scaricato e segui le istruzioni di installazione. Potrebbe essere necessario abilitare l'installazione da fonti sconosciute nelle impostazioni del dispositivo.

---

## Stack Tecnologico

| Componente | Tecnologia |
|------------|------------|
| **Frontend mobile** | React Native, Expo SDK 54, TypeScript, NativeWind |
| **Frontend web/PWA** | HTML5, CSS3, JavaScript, Service Worker |
| **Backend** | Node.js, Express, tRPC, Drizzle ORM |
| **Database** | PostgreSQL |
| **AI primario** | Gemini 3 Flash (Google AI API) |
| **AI fallback** | Gemini 2.5 Flash (Manus Forge) |
| **Autenticazione** | OAuth con sessioni sicure |
| **Hosting PWA** | GitHub Pages |

---

## Struttura del Progetto

```
dan-ai-code-search/
├── index.html          # Pagina principale PWA
├── manifest.json       # Manifest PWA (installazione)
├── sw.js               # Service Worker (cache offline)
├── css/
│   ├── style.css       # Stili principali + tema chiaro/scuro
│   ├── chat.css        # Stili chat
│   └── terminal.css    # Stili terminale
├── js/
│   ├── app.js          # Logica applicativa principale
│   └── i18n.js         # Sistema traduzioni (6 lingue)
└── icons/
    ├── icon-192.png    # Icona PWA 192x192
    └── icon-512.png    # Icona PWA 512x512
```

---

## Guida Rapida alle Funzionalità

**Cambiare modalità** — Tocca l'icona del menu laterale (hamburger) e seleziona la modalità desiderata tra Coding, Analisi, OSINT e Deep Search.

**Usare la voce** — Tocca l'icona del microfono accanto al campo di input per dettare il messaggio. Per ascoltare le risposte, attiva il TTS nelle impostazioni.

**Cambiare lingua** — Vai nelle Impostazioni e seleziona la lingua dell'interfaccia dal menu "Lingua UI" e la lingua vocale dal menu "Lingua vocale".

**Usare il terminale** — Tocca l'icona del terminale nella barra laterale per aprire la console. Puoi eseguire comandi shell, installare pacchetti e testare snippet di codice.

**Esportare le conversazioni** — Nelle impostazioni, usa i pulsanti "Esporta JSON" o "Esporta TXT" per salvare le tue conversazioni.

---

## Autore

Sviluppato da **Danilo Rapetti** — [ArabianLove](https://github.com/ArabianLove)

---

## Licenza

Questo progetto è rilasciato con licenza proprietaria. Tutti i diritti riservati.
