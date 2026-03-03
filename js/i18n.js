/* ═══════════════════════════════════════════════
   Dan AI Code & Search — Internationalization (i18n)
   6 Languages: IT, EN, FR, DE, ES, AR
   ═══════════════════════════════════════════════ */

const translations = {
  it: {
    // Login
    loginTitle: 'Dan AI',
    loginSubtitle: 'Code & Search — AI Assistant',
    loginFeature1: 'Coding avanzato',
    loginFeature2: 'Analisi file e steganografia',
    loginFeature3: 'Ricerche OSINT su fonti aperte',
    loginFeature4: 'Terminale con sandbox e auto-install',
    loginUsernamePlaceholder: 'Username',
    loginPasswordPlaceholder: 'Password',
    loginButton: 'Accedi',
    loginError: 'Inserisci username e password',
    loginNote: 'Accesso riservato — Dati sincronizzati con il server',

    // Sidebar
    newChat: 'Nuova Chat',
    modeGeneral: 'Generale',
    modeCoding: 'Coding',
    modeAnalysis: 'Analisi',
    modeOsint: 'OSINT',
    modeSearch: 'Deep Search',
    history: 'Cronologia',
    settings: 'Impostazioni',
    terminal: 'Terminale',
    godMode: 'God Mode',
    closeSidebar: 'Chiudi sidebar',

    // Chat
    welcomeSubtitle: 'Modalità: ',
    welcomeHintGeneral: 'Chiedimi qualsiasi cosa, sono qui per aiutarti',
    welcomeHintCoding: 'Scrivi, debugga, ottimizza e converti codice in qualsiasi linguaggio',
    welcomeHintAnalysis: 'Analizza file, metadati, steganografia e contenuti nascosti',
    welcomeHintOsint: 'Ricerche intelligence su fonti aperte: persone, domini, email',
    welcomeHintSearch: 'Ricerche approfondite e furbe su qualsiasi argomento',
    inputPlaceholder: 'Scrivi o parla...',
    voiceInput: 'Input vocale',
    newConversation: 'Nuova conversazione',

    // Quick Actions
    quickPython: 'Codice Python',
    quickFileAnalysis: 'Analisi File',
    quickDomainSearch: 'Ricerca Dominio',
    quickDebug: 'Debug Codice',
    quickPythonPrompt: 'Scrivi una funzione Python per ordinare una lista',
    quickFilePrompt: 'Analizza i metadati di un file immagine',
    quickDomainPrompt: 'Cerca informazioni su un dominio web',
    quickDebugPrompt: 'Fai debug di questo codice JavaScript',

    // Quick Actions Coding
    quickJava: 'Java',
    quickJavaScript: 'JavaScript',
    quickRust: 'Rust',
    quickPythonCoding: 'Scrivi un web scraper completo in Python con requests e BeautifulSoup',
    quickJavaPrompt: 'Scrivi una classe Java per gestire una coda con priorità',
    quickJSPrompt: 'Scrivi un server REST API completo con Express.js',
    quickRustPrompt: 'Scrivi un programma Rust per leggere e parsare un file CSV',

    // Quick Actions Analysis
    quickExif: 'EXIF',
    quickStego: 'Steganografia',
    quickBinwalk: 'Binwalk',
    quickDecode: 'Decodifica',
    quickExifPrompt: "Come estrarre metadati EXIF da un'immagine con exiftool",
    quickStegoPrompt: "Come rilevare steganografia LSB in un'immagine PNG",
    quickBinwalkPrompt: 'Come usare binwalk per analizzare un firmware',
    quickDecodePrompt: 'Decodifica questa stringa Base64: SGVsbG8gV29ybGQ=',

    // Quick Actions OSINT
    quickPerson: 'Persona',
    quickDomain: 'Dominio',
    quickEmail: 'Email',
    quickUsername: 'Username',
    quickPersonPrompt: 'Come fare una ricerca OSINT completa su una persona',
    quickDomainOsintPrompt: 'Analizza il dominio example.com: WHOIS, DNS, tecnologie',
    quickEmailPrompt: 'Verifica questa email e trova informazioni associate',
    quickUsernamePrompt: 'Cerca il username "example" su tutte le piattaforme social',

    // Quick Actions Search
    quickSearchPerson: 'Persona',
    quickSearchCompany: 'Azienda',
    quickSearchNews: 'Notizie',
    quickSearchCompare: 'Confronto',
    quickSearchPersonPrompt: 'Ricerca approfondita su Elon Musk: carriera, aziende, controversie',
    quickSearchCompanyPrompt: 'Ricerca completa su OpenAI: storia, prodotti, finanziamenti, team',
    quickSearchNewsPrompt: "Ultime notizie sull'intelligenza artificiale: sviluppi e impatti",
    quickSearchComparePrompt: 'Confronta Python vs Java: performance, uso, ecosistema, futuro',

    // Tab Bar
    tabChat: 'Chat',
    tabTools: 'Strumenti',
    tabTerminal: 'Terminale',
    tabSettings: 'Impostazioni',

    // Tools Panel
    toolsTitle: 'Strumenti',
    toolsCodingTitle: 'Coding',
    toolsAnalysisTitle: 'Analisi',
    toolsOsintTitle: 'OSINT',
    toolsSearchTitle: 'Deep Search',
    toolGenCode: 'Genera Codice',
    toolDebugCode: 'Debug Codice',
    toolExplainCode: 'Spiega Codice',
    toolConvertCode: 'Converti Codice',
    toolOptimize: 'Ottimizza',
    toolGenTests: 'Genera Test',
    toolAnalyzeFile: 'Analizza File',
    toolExtractMeta: 'Estrai Metadati',
    toolStego: 'Steganografia',
    toolDecode: 'Decodifica',
    toolBinaryAnalysis: 'Analisi Binaria',
    toolSearchPerson: 'Cerca Persona',
    toolAnalyzeDomain: 'Analizza Dominio',
    toolVerifyEmail: 'Verifica Email',
    toolSearchUsername: 'Cerca Username',
    toolTraceIP: 'Traccia IP',
    toolDeepPerson: 'Ricerca Persona',
    toolDeepCompany: 'Ricerca Azienda',
    toolDeepTopic: 'Ricerca Argomento',
    toolCompareProducts: 'Confronta Prodotti',
    toolSearchNews: 'Ricerca Notizie',

    // Tool prompts
    toolGenCodePrompt: 'Genera codice completo per: ',
    toolDebugCodePrompt: 'Fai debug di questo codice:\n',
    toolExplainCodePrompt: 'Spiega questo codice in dettaglio:\n',
    toolConvertCodePrompt: "Converti questo codice da un linguaggio all'altro:\n",
    toolOptimizePrompt: 'Ottimizza questo codice per le performance:\n',
    toolGenTestsPrompt: 'Scrivi i test unitari per:\n',
    toolAnalyzeFilePrompt: 'Analizza questo file in profondità, cerca contenuti nascosti e metadati: ',
    toolExtractMetaPrompt: 'Estrai tutti i metadati da questo file: ',
    toolStegoPrompt: 'Cerca steganografia e dati nascosti in: ',
    toolDecodePrompt: 'Decodifica questo contenuto (base64, hex, binario): ',
    toolBinaryPrompt: 'Analizza gli header e la struttura binaria di: ',
    toolSearchPersonPrompt: 'Cerca informazioni complete su questa persona: ',
    toolAnalyzeDomainPrompt: 'Analizza questo dominio in profondità: ',
    toolVerifyEmailPrompt: 'Verifica questa email e trova informazioni associate: ',
    toolSearchUsernamePrompt: 'Cerca questo username su tutte le piattaforme: ',
    toolTraceIPPrompt: 'Traccia questo indirizzo IP: ',
    toolDeepPersonPrompt: 'Ricerca approfondita su questa persona, incrocia tutte le fonti: ',
    toolDeepCompanyPrompt: 'Ricerca approfondita su questa azienda/organizzazione: ',
    toolDeepTopicPrompt: 'Ricerca approfondita su questo argomento, aggrega tutte le fonti: ',
    toolComparePrompt: 'Ricerca e confronta prodotti/servizi: ',
    toolSearchNewsPrompt: 'Ricerca notizie recenti e analizza: ',

    // Terminal
    terminalTitle: 'Dan AI Terminal',
    terminalClear: 'Clear',
    terminalInputPlaceholder: 'Digita un comando...',
    terminalHelp: `Comandi disponibili:
  help          — Mostra questo aiuto
  clear         — Pulisci il terminale
  tools         — Lista tool disponibili
  export        — Esporta conversazione corrente
  status        — Stato connessione server
  <comando>     — Esegui qualsiasi comando shell

I tool necessari vengono installati automaticamente.`,
    terminalStatus: 'Comando completato',
    terminalExported: 'Conversazione esportata in formato testo.',
    terminalToolsList: `Tool disponibili:
  python3, pip3, node, exiftool, binwalk, steghide,
  strings, file, xxd, curl, whois, nmap, dig, jq,
  gcc, java, go, rustc`,
    terminalError: 'Errore: Server non raggiungibile. Verifica la connessione.',
    terminalGodWelcome: `╔══════════════════════════════════════╗
║  ⚡ Dan AI Terminal — GOD MODE ⚡     ║
║   Sandbox POTENZIATO — No limiti     ║
║   Timeout: 120s | Output: illimitato ║
║   Digita 'help' per i comandi        ║
╚══════════════════════════════════════╝`,
    terminalWelcome: `╔══════════════════════════════════════╗
║   Dan AI Terminal v2.0               ║
║   Sandbox con auto-install tools     ║
║   Connesso al server backend         ║
║   Digita 'help' per i comandi        ║
╚══════════════════════════════════════╝`,

    // Settings
    settingsTitle: 'Impostazioni',
    settingsAdvanced: 'Modalità Avanzata',
    settingsActivateGodMode: 'Attiva God Mode',
    settingsGodModeActive: 'God Mode ATTIVO',
    settingsGodModeOff: 'Disattivato',
    settingsGodModeOn: '⚡ ATTIVO',
    settingsVoice: 'Voce e Lingua',
    settingsVoiceLang: 'Lingua vocale',
    settingsTTS: 'Sintesi vocale (TTS)',
    settingsAppearance: 'Aspetto',
    settingsTheme: 'Tema',
    settingsThemeDark: 'Scuro',
    settingsThemeLight: 'Chiaro',
    settingsUILang: 'Lingua interfaccia',
    settingsPrivacy: 'Privacy e Dati (GDPR)',
    settingsPrivacyInfo: 'Informativa Privacy',
    settingsDeleteAll: 'Cancella tutti i dati',
    settingsExport: 'Esportazione',
    settingsExportTxt: 'Esporta chat corrente (TXT)',
    settingsExportMd: 'Esporta chat corrente (Markdown)',
    settingsExportPdf: 'Esporta chat corrente (PDF)',
    settingsExportJson: 'Esporta chat corrente (JSON)',
    settingsExportAll: 'Esporta TUTTE le conversazioni',
    settingsInfo: 'Info',
    settingsVersion: 'Versione',
    settingsPlatform: 'Piattaforma',
    settingsServer: 'Server',
    settingsServerChecking: 'Verifica...',
    settingsServerConnected: '✅ Connesso',
    settingsServerOffline: '❌ Offline',
    settingsLogout: 'Esci dall\'account',

    // God Mode Dialog
    godModeDialogTitle: 'GOD MODE',
    godModeStep1: 'Inserisci il tuo identificativo',
    godModeStep2: 'Inserisci il codice di conferma',
    godModeUsernamePlaceholder: 'Username',
    godModeCodePlaceholder: 'Codice',
    godModeConfirm: 'Conferma',
    godModeCancel: 'Annulla',
    godModeErrorId: 'Identificativo non riconosciuto',
    godModeErrorCode: 'Codice errato',
    godModeDeactivate: 'Disattivare God Mode?',

    // Privacy Dialog
    privacyTitle: 'Informativa Privacy — GDPR',
    privacyMainTitle: 'INFORMATIVA SULLA PRIVACY — DAN AI CODE & SEARCH',
    privacyRegulation: 'Ai sensi del Regolamento (UE) 2016/679 (GDPR)',
    privacyDataTitle: 'DATI RACCOLTI',
    privacyData1: 'Dati di autenticazione (username)',
    privacyData2: "Conversazioni con l'assistente AI",
    privacyData3: 'Comandi eseguiti nel terminale sandbox',
    privacyRightsTitle: "DIRITTI DELL'INTERESSATO (Artt. 15-22 GDPR)",
    privacyRight1: 'Diritto di accesso ai propri dati',
    privacyRight2: 'Diritto di rettifica',
    privacyRight3: 'Diritto alla cancellazione ("diritto all\'oblio", Art. 17)',
    privacyRight4: 'Diritto alla portabilità dei dati',
    privacyRight5: 'Diritto di revocare il consenso',
    privacyDeletionTitle: 'CANCELLAZIONE DEI DATI',
    privacyDeletionText: 'Puoi cancellare tutti i tuoi dati in qualsiasi momento tramite Impostazioni → Cancella tutti i dati.',
    privacyRetentionTitle: 'CONSERVAZIONE',
    privacyRetentionText: 'I dati sono conservati sia localmente nel browser (localStorage) sia sul server backend per la sincronizzazione tra dispositivi. Puoi cancellare tutti i dati in qualsiasi momento.',
    privacyClose: 'Chiudi',

    // Messages
    copy: 'Copia',
    listen: 'Ascolta',
    export: 'Esporta',
    copied: 'Copiato!',
    codeCopied: '✓ Copiato',
    codeCopy: 'Copia',
    noMessages: 'Nessun messaggio da esportare',
    noConversations: 'Nessuna conversazione da esportare',
    confirmLogout: 'Sei sicuro di voler uscire?',
    confirmDelete: 'Eliminare questa conversazione?',
    confirmDeleteAll: 'Sei sicuro di voler cancellare TUTTI i tuoi dati? Questa azione è irreversibile.',
    confirmDeleteAll2: 'Conferma definitiva: tutti i dati verranno eliminati permanentemente.',
    allDataDeleted: 'Tutti i dati sono stati cancellati',
    exported: 'Esportato: ',
    voiceNotSupported: 'Riconoscimento vocale non supportato',
    errorResponse: 'Mi dispiace, si è verificato un errore. Riprova.',
    offlineTitle: 'Modalità Offline',
    serverTooltipConnected: 'Server connesso',
    serverTooltipOffline: 'Server offline — modalità locale',

    // Guide
    guideTitle: 'Guida Funzionalità',
    guideSubtitle: 'Scopri tutto quello che Dan AI può fare',
    guideChat: 'Chat AI Multimodale',
    guideChatDesc: 'Conversa con un\'intelligenza artificiale avanzata in 5 modalità specializzate. Ogni modalità ha un sistema di istruzioni ottimizzato per il tipo di richiesta. Puoi scrivere o parlare usando il microfono integrato, e Dan AI può leggere le risposte ad alta voce in 6 lingue diverse, ecc.',
    guideCoding: 'Coding Avanzato',
    guideCodingDesc: 'Genera codice completo e production-ready in qualsiasi linguaggio: Python, Java, JavaScript, TypeScript, C, C++, Go, Rust, Ruby, PHP, Bash, SQL. Fai debug, ottimizza, converti tra linguaggi, e ottieni spiegazioni dettagliate, ecc.',
    guideAnalysis: 'Analisi File e Steganografia',
    guideAnalysisDesc: 'Analizza file di qualsiasi tipo: estrai metadati, cerca contenuti nascosti con tecniche di steganografia, decodifica dati embedded, analisi forense digitale, ecc.',
    guideOsint: 'OSINT (Open Source Intelligence)',
    guideOsintDesc: 'Ricerche intelligence su fonti aperte: cerca persone, analizza domini e siti web, verifica indirizzi email, traccia username su più piattaforme, analisi IP e geolocalizzazione, ecc.',
    guideSearch: 'Deep Search',
    guideSearchDesc: 'Motore di ricerca AI avanzato che analizza multiple fonti, incrocia dati, verifica fatti e produce report approfonditi, ecc.',
    guideTerminal: 'Terminale Integrato',
    guideTerminalDesc: 'Terminale stile Termux/VS Code Shell connesso a una sandbox server-side. Esegui comandi reali, compila codice, usa tool di analisi con auto-installazione automatica, ecc.',
    guideMultilang: 'Multilingua',
    guideMultilangDesc: 'Input vocale e sintesi vocale in 6 lingue: Italiano, Inglese, Francese, Tedesco, Spagnolo e Arabo. L\'interfaccia è completamente tradotta in tutte le 6 lingue.',
    guideExport: 'Esportazione',
    guideExportDesc: 'Esporta le tue conversazioni in formato Testo, JSON, Markdown o PDF. Puoi esportare una singola conversazione o tutte insieme. I dati sono sempre tuoi.',
    guideOffline: 'Modalità Offline',
    guideOfflineDesc: 'Le conversazioni vengono salvate localmente e sono accessibili anche senza connessione internet. I messaggi inviati offline vengono sincronizzati automaticamente.',
    guideNotifications: 'Notifiche',
    guideNotificationsDesc: 'Ricevi notifiche quando Dan AI completa una risposta in background o quando un comando nel terminale termina l\'esecuzione.',
    guideTheme: 'Tema Chiaro/Scuro',
    guideThemeDesc: 'Scegli tra il tema Cyber Dark per uso notturno e il tema Chiaro per uso diurno. La scelta viene salvata automaticamente.',
    guidePrivacy: 'Privacy e GDPR',
    guidePrivacyDesc: 'Piena conformità al Regolamento (UE) 2016/679 (GDPR). Diritto alla cancellazione di tutti i dati in qualsiasi momento.',
    guideGodMode: 'God Mode',
    guideGodModeDesc: 'Modalità avanzata riservata: risposte senza limiti, parametri LLM potenziati, sandbox senza restrizioni, output illimitato.',
    guideCrossPlat: 'Cross-Platform',
    guideCrossPlatDesc: 'Disponibile come app nativa per iOS e Android, come PWA installabile, e come sito web. Tutte le piattaforme condividono lo stesso backend, ecc.',
  },

  en: {
    loginTitle: 'Dan AI',
    loginSubtitle: 'Code & Search — AI Assistant',
    loginFeature1: 'Advanced coding',
    loginFeature2: 'File analysis and steganography',
    loginFeature3: 'OSINT research on open sources',
    loginFeature4: 'Terminal with sandbox and auto-install',
    loginUsernamePlaceholder: 'Username',
    loginPasswordPlaceholder: 'Password',
    loginButton: 'Sign In',
    loginError: 'Enter username and password',
    loginNote: 'Restricted access — Data synced with server',
    newChat: 'New Chat',
    modeGeneral: 'General',
    modeCoding: 'Coding',
    modeAnalysis: 'Analysis',
    modeOsint: 'OSINT',
    modeSearch: 'Deep Search',
    history: 'History',
    settings: 'Settings',
    terminal: 'Terminal',
    godMode: 'God Mode',
    closeSidebar: 'Close sidebar',
    welcomeSubtitle: 'Mode: ',
    welcomeHintGeneral: 'Ask me anything, I\'m here to help',
    welcomeHintCoding: 'Write, debug, optimize and convert code in any language',
    welcomeHintAnalysis: 'Analyze files, metadata, steganography and hidden content',
    welcomeHintOsint: 'Open source intelligence: people, domains, emails',
    welcomeHintSearch: 'Deep and smart research on any topic',
    inputPlaceholder: 'Type or speak...',
    voiceInput: 'Voice input',
    newConversation: 'New conversation',
    quickPython: 'Python Code',
    quickFileAnalysis: 'File Analysis',
    quickDomainSearch: 'Domain Search',
    quickDebug: 'Debug Code',
    quickPythonPrompt: 'Write a Python function to sort a list',
    quickFilePrompt: 'Analyze the metadata of an image file',
    quickDomainPrompt: 'Search for information about a web domain',
    quickDebugPrompt: 'Debug this JavaScript code',
    quickJava: 'Java',
    quickJavaScript: 'JavaScript',
    quickRust: 'Rust',
    quickPythonCoding: 'Write a complete web scraper in Python with requests and BeautifulSoup',
    quickJavaPrompt: 'Write a Java class to manage a priority queue',
    quickJSPrompt: 'Write a complete REST API server with Express.js',
    quickRustPrompt: 'Write a Rust program to read and parse a CSV file',
    quickExif: 'EXIF',
    quickStego: 'Steganography',
    quickBinwalk: 'Binwalk',
    quickDecode: 'Decode',
    quickExifPrompt: 'How to extract EXIF metadata from an image with exiftool',
    quickStegoPrompt: 'How to detect LSB steganography in a PNG image',
    quickBinwalkPrompt: 'How to use binwalk to analyze a firmware',
    quickDecodePrompt: 'Decode this Base64 string: SGVsbG8gV29ybGQ=',
    quickPerson: 'Person',
    quickDomain: 'Domain',
    quickEmail: 'Email',
    quickUsername: 'Username',
    quickPersonPrompt: 'How to do a complete OSINT research on a person',
    quickDomainOsintPrompt: 'Analyze the domain example.com: WHOIS, DNS, technologies',
    quickEmailPrompt: 'Verify this email and find associated information',
    quickUsernamePrompt: 'Search for username "example" on all social platforms',
    quickSearchPerson: 'Person',
    quickSearchCompany: 'Company',
    quickSearchNews: 'News',
    quickSearchCompare: 'Compare',
    quickSearchPersonPrompt: 'In-depth research on Elon Musk: career, companies, controversies',
    quickSearchCompanyPrompt: 'Complete research on OpenAI: history, products, funding, team',
    quickSearchNewsPrompt: 'Latest news on artificial intelligence: developments and impacts',
    quickSearchComparePrompt: 'Compare Python vs Java: performance, usage, ecosystem, future',
    tabChat: 'Chat',
    tabTools: 'Tools',
    tabTerminal: 'Terminal',
    tabSettings: 'Settings',
    toolsTitle: 'Tools',
    toolsCodingTitle: 'Coding',
    toolsAnalysisTitle: 'Analysis',
    toolsOsintTitle: 'OSINT',
    toolsSearchTitle: 'Deep Search',
    toolGenCode: 'Generate Code',
    toolDebugCode: 'Debug Code',
    toolExplainCode: 'Explain Code',
    toolConvertCode: 'Convert Code',
    toolOptimize: 'Optimize',
    toolGenTests: 'Generate Tests',
    toolAnalyzeFile: 'Analyze File',
    toolExtractMeta: 'Extract Metadata',
    toolStego: 'Steganography',
    toolDecode: 'Decode',
    toolBinaryAnalysis: 'Binary Analysis',
    toolSearchPerson: 'Search Person',
    toolAnalyzeDomain: 'Analyze Domain',
    toolVerifyEmail: 'Verify Email',
    toolSearchUsername: 'Search Username',
    toolTraceIP: 'Trace IP',
    toolDeepPerson: 'Research Person',
    toolDeepCompany: 'Research Company',
    toolDeepTopic: 'Research Topic',
    toolCompareProducts: 'Compare Products',
    toolSearchNews: 'Search News',
    toolGenCodePrompt: 'Generate complete code for: ',
    toolDebugCodePrompt: 'Debug this code:\n',
    toolExplainCodePrompt: 'Explain this code in detail:\n',
    toolConvertCodePrompt: 'Convert this code from one language to another:\n',
    toolOptimizePrompt: 'Optimize this code for performance:\n',
    toolGenTestsPrompt: 'Write unit tests for:\n',
    toolAnalyzeFilePrompt: 'Analyze this file in depth, search for hidden content and metadata: ',
    toolExtractMetaPrompt: 'Extract all metadata from this file: ',
    toolStegoPrompt: 'Search for steganography and hidden data in: ',
    toolDecodePrompt: 'Decode this content (base64, hex, binary): ',
    toolBinaryPrompt: 'Analyze the headers and binary structure of: ',
    toolSearchPersonPrompt: 'Search for complete information about this person: ',
    toolAnalyzeDomainPrompt: 'Analyze this domain in depth: ',
    toolVerifyEmailPrompt: 'Verify this email and find associated information: ',
    toolSearchUsernamePrompt: 'Search for this username on all platforms: ',
    toolTraceIPPrompt: 'Trace this IP address: ',
    toolDeepPersonPrompt: 'In-depth research on this person, cross-reference all sources: ',
    toolDeepCompanyPrompt: 'In-depth research on this company/organization: ',
    toolDeepTopicPrompt: 'In-depth research on this topic, aggregate all sources: ',
    toolComparePrompt: 'Research and compare products/services: ',
    toolSearchNewsPrompt: 'Search recent news and analyze: ',
    terminalTitle: 'Dan AI Terminal',
    terminalClear: 'Clear',
    terminalInputPlaceholder: 'Type a command...',
    terminalHelp: `Available commands:
  help          — Show this help
  clear         — Clear terminal
  tools         — List available tools
  export        — Export current conversation
  status        — Server connection status
  <command>     — Execute any shell command

Required tools are installed automatically.`,
    terminalStatus: 'Command completed',
    terminalExported: 'Conversation exported as text.',
    terminalToolsList: `Available tools:
  python3, pip3, node, exiftool, binwalk, steghide,
  strings, file, xxd, curl, whois, nmap, dig, jq,
  gcc, java, go, rustc`,
    terminalError: 'Error: Server unreachable. Check your connection.',
    terminalGodWelcome: `╔══════════════════════════════════════╗
║  ⚡ Dan AI Terminal — GOD MODE ⚡     ║
║   ENHANCED Sandbox — No limits       ║
║   Timeout: 120s | Output: unlimited  ║
║   Type 'help' for commands           ║
╚══════════════════════════════════════╝`,
    terminalWelcome: `╔══════════════════════════════════════╗
║   Dan AI Terminal v2.0               ║
║   Sandbox with auto-install tools    ║
║   Connected to backend server        ║
║   Type 'help' for commands           ║
╚══════════════════════════════════════╝`,
    settingsTitle: 'Settings',
    settingsAdvanced: 'Advanced Mode',
    settingsActivateGodMode: 'Activate God Mode',
    settingsGodModeActive: 'God Mode ACTIVE',
    settingsGodModeOff: 'Disabled',
    settingsGodModeOn: '⚡ ACTIVE',
    settingsVoice: 'Voice & Language',
    settingsVoiceLang: 'Voice language',
    settingsTTS: 'Text-to-Speech (TTS)',
    settingsAppearance: 'Appearance',
    settingsTheme: 'Theme',
    settingsThemeDark: 'Dark',
    settingsThemeLight: 'Light',
    settingsUILang: 'Interface language',
    settingsPrivacy: 'Privacy & Data (GDPR)',
    settingsPrivacyInfo: 'Privacy Policy',
    settingsDeleteAll: 'Delete all data',
    settingsExport: 'Export',
    settingsExportTxt: 'Export current chat (TXT)',
    settingsExportMd: 'Export current chat (Markdown)',
    settingsExportPdf: 'Export current chat (PDF)',
    settingsExportJson: 'Export current chat (JSON)',
    settingsExportAll: 'Export ALL conversations',
    settingsInfo: 'Info',
    settingsVersion: 'Version',
    settingsPlatform: 'Platform',
    settingsServer: 'Server',
    settingsServerChecking: 'Checking...',
    settingsServerConnected: '✅ Connected',
    settingsServerOffline: '❌ Offline',
    settingsLogout: 'Sign out',
    godModeDialogTitle: 'GOD MODE',
    godModeStep1: 'Enter your identifier',
    godModeStep2: 'Enter the confirmation code',
    godModeUsernamePlaceholder: 'Username',
    godModeCodePlaceholder: 'Code',
    godModeConfirm: 'Confirm',
    godModeCancel: 'Cancel',
    godModeErrorId: 'Identifier not recognized',
    godModeErrorCode: 'Incorrect code',
    godModeDeactivate: 'Deactivate God Mode?',
    privacyTitle: 'Privacy Policy — GDPR',
    privacyMainTitle: 'PRIVACY POLICY — DAN AI CODE & SEARCH',
    privacyRegulation: 'Pursuant to Regulation (EU) 2016/679 (GDPR)',
    privacyDataTitle: 'DATA COLLECTED',
    privacyData1: 'Authentication data (username)',
    privacyData2: 'Conversations with the AI assistant',
    privacyData3: 'Commands executed in the terminal sandbox',
    privacyRightsTitle: 'DATA SUBJECT RIGHTS (Art. 15-22 GDPR)',
    privacyRight1: 'Right of access to personal data',
    privacyRight2: 'Right to rectification',
    privacyRight3: 'Right to erasure ("right to be forgotten", Art. 17)',
    privacyRight4: 'Right to data portability',
    privacyRight5: 'Right to withdraw consent',
    privacyDeletionTitle: 'DATA DELETION',
    privacyDeletionText: 'You can delete all your data at any time via Settings → Delete all data.',
    privacyRetentionTitle: 'RETENTION',
    privacyRetentionText: 'Data is stored both locally in the browser (localStorage) and on the backend server for cross-device synchronization. You can delete all data at any time.',
    privacyClose: 'Close',
    copy: 'Copy',
    listen: 'Listen',
    export: 'Export',
    copied: 'Copied!',
    codeCopied: '✓ Copied',
    codeCopy: 'Copy',
    noMessages: 'No messages to export',
    noConversations: 'No conversations to export',
    confirmLogout: 'Are you sure you want to sign out?',
    confirmDelete: 'Delete this conversation?',
    confirmDeleteAll: 'Are you sure you want to delete ALL your data? This action is irreversible.',
    confirmDeleteAll2: 'Final confirmation: all data will be permanently deleted.',
    allDataDeleted: 'All data has been deleted',
    exported: 'Exported: ',
    voiceNotSupported: 'Voice recognition not supported',
    errorResponse: 'Sorry, an error occurred. Please try again.',
    offlineTitle: 'Offline Mode',
    serverTooltipConnected: 'Server connected',
    serverTooltipOffline: 'Server offline — local mode',

    // Guide
    guideTitle: 'Feature Guide',
    guideSubtitle: 'Discover everything Dan AI can do',
    guideChat: 'Multimodal AI Chat',
    guideChatDesc: 'Chat with an advanced AI in 5 specialized modes. Each mode has an optimized instruction system. You can type or speak using the built-in microphone, and Dan AI can read responses aloud in 6 different languages, etc.',
    guideCoding: 'Advanced Coding',
    guideCodingDesc: 'Generate complete, production-ready code in any language: Python, Java, JavaScript, TypeScript, C, C++, Go, Rust, Ruby, PHP, Bash, SQL. Debug, optimize, convert between languages, and get detailed explanations, etc.',
    guideAnalysis: 'File Analysis & Steganography',
    guideAnalysisDesc: 'Analyze any file type: extract metadata, search for hidden content with steganography techniques, decode embedded data, digital forensics, etc.',
    guideOsint: 'OSINT (Open Source Intelligence)',
    guideOsintDesc: 'Open source intelligence research: search people, analyze domains and websites, verify email addresses, track usernames across platforms, IP analysis and geolocation, etc.',
    guideSearch: 'Deep Search',
    guideSearchDesc: 'Advanced AI search engine that analyzes multiple sources, cross-references data, fact-checks and produces in-depth reports, etc.',
    guideTerminal: 'Integrated Terminal',
    guideTerminalDesc: 'Termux/VS Code Shell-style terminal connected to a server-side sandbox. Execute real commands, compile code, use analysis tools with automatic auto-installation, etc.',
    guideMultilang: 'Multilingual',
    guideMultilangDesc: 'Voice input and text-to-speech in 6 languages: Italian, English, French, German, Spanish and Arabic. The interface is fully translated in all 6 languages.',
    guideExport: 'Export',
    guideExportDesc: 'Export your conversations in Text, JSON, Markdown or PDF format. Export a single conversation or all of them. Your data is always yours.',
    guideOffline: 'Offline Mode',
    guideOfflineDesc: 'Conversations are saved locally and accessible even without internet. Messages sent offline are automatically synced when connection returns.',
    guideNotifications: 'Notifications',
    guideNotificationsDesc: 'Receive notifications when Dan AI completes a response in the background or when a terminal command finishes execution.',
    guideTheme: 'Light/Dark Theme',
    guideThemeDesc: 'Choose between Cyber Dark theme for night use and Light theme for daytime. Your choice is automatically saved.',
    guidePrivacy: 'Privacy & GDPR',
    guidePrivacyDesc: 'Full compliance with Regulation (EU) 2016/679 (GDPR). Right to delete all data at any time.',
    guideGodMode: 'God Mode',
    guideGodModeDesc: 'Reserved advanced mode: unlimited responses, enhanced LLM parameters, unrestricted sandbox, unlimited output.',
    guideCrossPlat: 'Cross-Platform',
    guideCrossPlatDesc: 'Available as a native app for iOS and Android, as an installable PWA, and as a website. All platforms share the same backend, etc.',
  },

  fr: {
    loginTitle: 'Dan AI',
    loginSubtitle: 'Code & Search — Assistant IA',
    loginFeature1: 'Codage avancé',
    loginFeature2: 'Analyse de fichiers et stéganographie',
    loginFeature3: 'Recherches OSINT sur sources ouvertes',
    loginFeature4: 'Terminal avec sandbox et auto-install',
    loginUsernamePlaceholder: "Nom d'utilisateur",
    loginPasswordPlaceholder: 'Mot de passe',
    loginButton: 'Se connecter',
    loginError: "Entrez le nom d'utilisateur et le mot de passe",
    loginNote: 'Accès restreint — Données synchronisées avec le serveur',
    newChat: 'Nouveau Chat',
    modeGeneral: 'Général',
    modeCoding: 'Codage',
    modeAnalysis: 'Analyse',
    modeOsint: 'OSINT',
    modeSearch: 'Recherche Profonde',
    history: 'Historique',
    settings: 'Paramètres',
    terminal: 'Terminal',
    godMode: 'God Mode',
    closeSidebar: 'Fermer la barre latérale',
    welcomeSubtitle: 'Mode : ',
    welcomeHintGeneral: "Demandez-moi n'importe quoi, je suis là pour vous aider",
    welcomeHintCoding: "Écrivez, déboguez, optimisez et convertissez du code dans n'importe quel langage",
    welcomeHintAnalysis: 'Analysez fichiers, métadonnées, stéganographie et contenus cachés',
    welcomeHintOsint: 'Renseignement sur sources ouvertes : personnes, domaines, emails',
    welcomeHintSearch: "Recherches approfondies et intelligentes sur n'importe quel sujet",
    inputPlaceholder: 'Écrivez ou parlez...',
    voiceInput: 'Entrée vocale',
    newConversation: 'Nouvelle conversation',
    quickPython: 'Code Python',
    quickFileAnalysis: 'Analyse Fichier',
    quickDomainSearch: 'Recherche Domaine',
    quickDebug: 'Debug Code',
    quickPythonPrompt: 'Écris une fonction Python pour trier une liste',
    quickFilePrompt: "Analyse les métadonnées d'un fichier image",
    quickDomainPrompt: "Cherche des informations sur un domaine web",
    quickDebugPrompt: 'Débogue ce code JavaScript',
    quickJava: 'Java',
    quickJavaScript: 'JavaScript',
    quickRust: 'Rust',
    quickPythonCoding: 'Écris un web scraper complet en Python avec requests et BeautifulSoup',
    quickJavaPrompt: 'Écris une classe Java pour gérer une file de priorité',
    quickJSPrompt: 'Écris un serveur REST API complet avec Express.js',
    quickRustPrompt: 'Écris un programme Rust pour lire et parser un fichier CSV',
    quickExif: 'EXIF',
    quickStego: 'Stéganographie',
    quickBinwalk: 'Binwalk',
    quickDecode: 'Décodage',
    quickExifPrompt: "Comment extraire les métadonnées EXIF d'une image avec exiftool",
    quickStegoPrompt: "Comment détecter la stéganographie LSB dans une image PNG",
    quickBinwalkPrompt: 'Comment utiliser binwalk pour analyser un firmware',
    quickDecodePrompt: 'Décode cette chaîne Base64 : SGVsbG8gV29ybGQ=',
    quickPerson: 'Personne',
    quickDomain: 'Domaine',
    quickEmail: 'Email',
    quickUsername: "Nom d'utilisateur",
    quickPersonPrompt: 'Comment faire une recherche OSINT complète sur une personne',
    quickDomainOsintPrompt: 'Analyse le domaine example.com : WHOIS, DNS, technologies',
    quickEmailPrompt: 'Vérifie cet email et trouve les informations associées',
    quickUsernamePrompt: "Cherche le nom d'utilisateur \"example\" sur toutes les plateformes",
    quickSearchPerson: 'Personne',
    quickSearchCompany: 'Entreprise',
    quickSearchNews: 'Actualités',
    quickSearchCompare: 'Comparaison',
    quickSearchPersonPrompt: 'Recherche approfondie sur Elon Musk : carrière, entreprises, controverses',
    quickSearchCompanyPrompt: 'Recherche complète sur OpenAI : histoire, produits, financements, équipe',
    quickSearchNewsPrompt: "Dernières nouvelles sur l'intelligence artificielle : développements et impacts",
    quickSearchComparePrompt: 'Compare Python vs Java : performance, utilisation, écosystème, futur',
    tabChat: 'Chat',
    tabTools: 'Outils',
    tabTerminal: 'Terminal',
    tabSettings: 'Paramètres',
    toolsTitle: 'Outils',
    toolsCodingTitle: 'Codage',
    toolsAnalysisTitle: 'Analyse',
    toolsOsintTitle: 'OSINT',
    toolsSearchTitle: 'Recherche Profonde',
    toolGenCode: 'Générer Code',
    toolDebugCode: 'Déboguer Code',
    toolExplainCode: 'Expliquer Code',
    toolConvertCode: 'Convertir Code',
    toolOptimize: 'Optimiser',
    toolGenTests: 'Générer Tests',
    toolAnalyzeFile: 'Analyser Fichier',
    toolExtractMeta: 'Extraire Métadonnées',
    toolStego: 'Stéganographie',
    toolDecode: 'Décoder',
    toolBinaryAnalysis: 'Analyse Binaire',
    toolSearchPerson: 'Chercher Personne',
    toolAnalyzeDomain: 'Analyser Domaine',
    toolVerifyEmail: 'Vérifier Email',
    toolSearchUsername: "Chercher Nom d'utilisateur",
    toolTraceIP: 'Tracer IP',
    toolDeepPerson: 'Recherche Personne',
    toolDeepCompany: 'Recherche Entreprise',
    toolDeepTopic: 'Recherche Sujet',
    toolCompareProducts: 'Comparer Produits',
    toolSearchNews: 'Recherche Actualités',
    toolGenCodePrompt: 'Génère du code complet pour : ',
    toolDebugCodePrompt: 'Débogue ce code :\n',
    toolExplainCodePrompt: 'Explique ce code en détail :\n',
    toolConvertCodePrompt: "Convertis ce code d'un langage à un autre :\n",
    toolOptimizePrompt: 'Optimise ce code pour les performances :\n',
    toolGenTestsPrompt: 'Écris les tests unitaires pour :\n',
    toolAnalyzeFilePrompt: 'Analyse ce fichier en profondeur, cherche contenus cachés et métadonnées : ',
    toolExtractMetaPrompt: 'Extrais toutes les métadonnées de ce fichier : ',
    toolStegoPrompt: 'Cherche stéganographie et données cachées dans : ',
    toolDecodePrompt: 'Décode ce contenu (base64, hex, binaire) : ',
    toolBinaryPrompt: 'Analyse les en-têtes et la structure binaire de : ',
    toolSearchPersonPrompt: 'Cherche des informations complètes sur cette personne : ',
    toolAnalyzeDomainPrompt: 'Analyse ce domaine en profondeur : ',
    toolVerifyEmailPrompt: 'Vérifie cet email et trouve les informations associées : ',
    toolSearchUsernamePrompt: "Cherche ce nom d'utilisateur sur toutes les plateformes : ",
    toolTraceIPPrompt: 'Trace cette adresse IP : ',
    toolDeepPersonPrompt: 'Recherche approfondie sur cette personne, croise toutes les sources : ',
    toolDeepCompanyPrompt: 'Recherche approfondie sur cette entreprise/organisation : ',
    toolDeepTopicPrompt: 'Recherche approfondie sur ce sujet, agrège toutes les sources : ',
    toolComparePrompt: 'Recherche et compare produits/services : ',
    toolSearchNewsPrompt: 'Recherche actualités récentes et analyse : ',
    terminalTitle: 'Dan AI Terminal',
    terminalClear: 'Effacer',
    terminalInputPlaceholder: 'Tapez une commande...',
    terminalHelp: `Commandes disponibles :
  help          — Afficher cette aide
  clear         — Effacer le terminal
  tools         — Liste des outils disponibles
  export        — Exporter la conversation
  status        — État de la connexion serveur
  <commande>    — Exécuter une commande shell

Les outils nécessaires sont installés automatiquement.`,
    terminalStatus: 'Commande terminée',
    terminalExported: 'Conversation exportée en format texte.',
    terminalToolsList: `Outils disponibles :
  python3, pip3, node, exiftool, binwalk, steghide,
  strings, file, xxd, curl, whois, nmap, dig, jq,
  gcc, java, go, rustc`,
    terminalError: 'Erreur : Serveur inaccessible. Vérifiez la connexion.',
    terminalGodWelcome: `╔══════════════════════════════════════╗
║  ⚡ Dan AI Terminal — GOD MODE ⚡     ║
║   Sandbox AMÉLIORÉ — Sans limites    ║
║   Timeout: 120s | Sortie: illimitée  ║
║   Tapez 'help' pour les commandes    ║
╚══════════════════════════════════════╝`,
    terminalWelcome: `╔══════════════════════════════════════╗
║   Dan AI Terminal v2.0               ║
║   Sandbox avec auto-install outils   ║
║   Connecté au serveur backend        ║
║   Tapez 'help' pour les commandes    ║
╚══════════════════════════════════════╝`,
    settingsTitle: 'Paramètres',
    settingsAdvanced: 'Mode Avancé',
    settingsActivateGodMode: 'Activer God Mode',
    settingsGodModeActive: 'God Mode ACTIF',
    settingsGodModeOff: 'Désactivé',
    settingsGodModeOn: '⚡ ACTIF',
    settingsVoice: 'Voix et Langue',
    settingsVoiceLang: 'Langue vocale',
    settingsTTS: 'Synthèse vocale (TTS)',
    settingsAppearance: 'Apparence',
    settingsTheme: 'Thème',
    settingsThemeDark: 'Sombre',
    settingsThemeLight: 'Clair',
    settingsUILang: "Langue de l'interface",
    settingsPrivacy: 'Confidentialité et Données (RGPD)',
    settingsPrivacyInfo: 'Politique de Confidentialité',
    settingsDeleteAll: 'Supprimer toutes les données',
    settingsExport: 'Exportation',
    settingsExportTxt: 'Exporter chat actuel (TXT)',
    settingsExportMd: 'Exporter chat actuel (Markdown)',
    settingsExportPdf: 'Exporter chat actuel (PDF)',
    settingsExportJson: 'Exporter chat actuel (JSON)',
    settingsExportAll: 'Exporter TOUTES les conversations',
    settingsInfo: 'Info',
    settingsVersion: 'Version',
    settingsPlatform: 'Plateforme',
    settingsServer: 'Serveur',
    settingsServerChecking: 'Vérification...',
    settingsServerConnected: '✅ Connecté',
    settingsServerOffline: '❌ Hors ligne',
    settingsLogout: 'Se déconnecter',
    godModeDialogTitle: 'GOD MODE',
    godModeStep1: 'Entrez votre identifiant',
    godModeStep2: 'Entrez le code de confirmation',
    godModeUsernamePlaceholder: "Nom d'utilisateur",
    godModeCodePlaceholder: 'Code',
    godModeConfirm: 'Confirmer',
    godModeCancel: 'Annuler',
    godModeErrorId: 'Identifiant non reconnu',
    godModeErrorCode: 'Code incorrect',
    godModeDeactivate: 'Désactiver God Mode ?',
    privacyTitle: 'Politique de Confidentialité — RGPD',
    privacyMainTitle: 'POLITIQUE DE CONFIDENTIALITÉ — DAN AI CODE & SEARCH',
    privacyRegulation: 'Conformément au Règlement (UE) 2016/679 (RGPD)',
    privacyDataTitle: 'DONNÉES COLLECTÉES',
    privacyData1: "Données d'authentification (nom d'utilisateur)",
    privacyData2: "Conversations avec l'assistant IA",
    privacyData3: 'Commandes exécutées dans le terminal sandbox',
    privacyRightsTitle: 'DROITS DE LA PERSONNE CONCERNÉE (Art. 15-22 RGPD)',
    privacyRight1: "Droit d'accès aux données personnelles",
    privacyRight2: 'Droit de rectification',
    privacyRight3: "Droit à l'effacement (\"droit à l'oubli\", Art. 17)",
    privacyRight4: 'Droit à la portabilité des données',
    privacyRight5: 'Droit de retirer le consentement',
    privacyDeletionTitle: 'SUPPRESSION DES DONNÉES',
    privacyDeletionText: 'Vous pouvez supprimer toutes vos données à tout moment via Paramètres → Supprimer toutes les données.',
    privacyRetentionTitle: 'CONSERVATION',
    privacyRetentionText: 'Les données sont conservées localement dans le navigateur (localStorage) et sur le serveur backend pour la synchronisation entre appareils. Vous pouvez supprimer toutes les données à tout moment.',
    privacyClose: 'Fermer',
    copy: 'Copier',
    listen: 'Écouter',
    export: 'Exporter',
    copied: 'Copié !',
    codeCopied: '✓ Copié',
    codeCopy: 'Copier',
    noMessages: 'Aucun message à exporter',
    noConversations: 'Aucune conversation à exporter',
    confirmLogout: 'Êtes-vous sûr de vouloir vous déconnecter ?',
    confirmDelete: 'Supprimer cette conversation ?',
    confirmDeleteAll: 'Êtes-vous sûr de vouloir supprimer TOUTES vos données ? Cette action est irréversible.',
    confirmDeleteAll2: 'Confirmation finale : toutes les données seront définitivement supprimées.',
    allDataDeleted: 'Toutes les données ont été supprimées',
    exported: 'Exporté : ',
    voiceNotSupported: 'Reconnaissance vocale non supportée',
    errorResponse: "Désolé, une erreur s'est produite. Veuillez réessayer.",
    offlineTitle: 'Mode Hors Ligne',
    serverTooltipConnected: 'Serveur connecté',
    serverTooltipOffline: 'Serveur hors ligne — mode local',

    guideTitle: 'Guide des fonctionnalités',
    guideSubtitle: 'Découvrez tout ce que Dan AI peut faire',
    guideChat: 'Chat IA Multimodal',
    guideChatDesc: 'Conversez avec une IA avancée en 5 modes spécialisés. Vous pouvez écrire ou parler, et Dan AI peut lire les réponses à voix haute en 6 langues, etc.',
    guideCoding: 'Codage Avancé',
    guideCodingDesc: 'Générez du code complet et prêt pour la production dans n\'importe quel langage. Déboguez, optimisez, convertissez entre langages, etc.',
    guideAnalysis: 'Analyse de Fichiers et Stéganographie',
    guideAnalysisDesc: 'Analysez tout type de fichier : métadonnées, contenu caché, stéganographie, analyse forensique numérique, etc.',
    guideOsint: 'OSINT (Renseignement Open Source)',
    guideOsintDesc: 'Recherches sur sources ouvertes : personnes, domaines, emails, noms d\'utilisateur, analyse IP et géolocalisation, etc.',
    guideSearch: 'Recherche Profonde',
    guideSearchDesc: 'Moteur de recherche IA avancé qui analyse plusieurs sources, croise les données et produit des rapports approfondis, etc.',
    guideTerminal: 'Terminal Intégré',
    guideTerminalDesc: 'Terminal connecté à un sandbox serveur. Exécutez des commandes réelles avec auto-installation des outils, etc.',
    guideMultilang: 'Multilingue',
    guideMultilangDesc: 'Entrée vocale et synthèse vocale en 6 langues. L\'interface est entièrement traduite dans les 6 langues.',
    guideExport: 'Exportation',
    guideExportDesc: 'Exportez vos conversations en Texte, JSON, Markdown ou PDF. Vos données vous appartiennent.',
    guideOffline: 'Mode Hors Ligne',
    guideOfflineDesc: 'Les conversations sont sauvegardées localement. Les messages envoyés hors ligne sont synchronisés automatiquement.',
    guideNotifications: 'Notifications',
    guideNotificationsDesc: 'Recevez des notifications quand Dan AI termine une réponse en arrière-plan.',
    guideTheme: 'Thème Clair/Sombre',
    guideThemeDesc: 'Choisissez entre le thème Cyber Dark et le thème Clair. Votre choix est sauvegardé automatiquement.',
    guidePrivacy: 'Confidentialité et RGPD',
    guidePrivacyDesc: 'Pleine conformité au Règlement (UE) 2016/679 (RGPD). Droit à la suppression de toutes les données.',
    guideGodMode: 'God Mode',
    guideGodModeDesc: 'Mode avancé réservé : réponses illimitées, paramètres LLM améliorés, sandbox sans restrictions.',
    guideCrossPlat: 'Cross-Platform',
    guideCrossPlatDesc: 'Disponible en app native iOS/Android, en PWA installable et en site web, etc.',
  },

  de: {
    loginTitle: 'Dan AI',
    loginSubtitle: 'Code & Search — KI-Assistent',
    loginFeature1: 'Fortgeschrittenes Coding',
    loginFeature2: 'Dateianalyse und Steganographie',
    loginFeature3: 'OSINT-Recherche aus offenen Quellen',
    loginFeature4: 'Terminal mit Sandbox und Auto-Install',
    loginUsernamePlaceholder: 'Benutzername',
    loginPasswordPlaceholder: 'Passwort',
    loginButton: 'Anmelden',
    loginError: 'Benutzername und Passwort eingeben',
    loginNote: 'Eingeschränkter Zugang — Daten mit Server synchronisiert',
    newChat: 'Neuer Chat',
    modeGeneral: 'Allgemein',
    modeCoding: 'Coding',
    modeAnalysis: 'Analyse',
    modeOsint: 'OSINT',
    modeSearch: 'Tiefensuche',
    history: 'Verlauf',
    settings: 'Einstellungen',
    terminal: 'Terminal',
    godMode: 'God Mode',
    closeSidebar: 'Seitenleiste schließen',
    welcomeSubtitle: 'Modus: ',
    welcomeHintGeneral: 'Frag mich alles, ich bin hier um zu helfen',
    welcomeHintCoding: 'Schreibe, debugge, optimiere und konvertiere Code in jeder Sprache',
    welcomeHintAnalysis: 'Analysiere Dateien, Metadaten, Steganographie und versteckte Inhalte',
    welcomeHintOsint: 'Open Source Intelligence: Personen, Domains, E-Mails',
    welcomeHintSearch: 'Tiefgehende und intelligente Recherche zu jedem Thema',
    inputPlaceholder: 'Schreiben oder sprechen...',
    voiceInput: 'Spracheingabe',
    newConversation: 'Neue Unterhaltung',
    quickPython: 'Python Code',
    quickFileAnalysis: 'Dateianalyse',
    quickDomainSearch: 'Domain-Suche',
    quickDebug: 'Code debuggen',
    quickPythonPrompt: 'Schreibe eine Python-Funktion zum Sortieren einer Liste',
    quickFilePrompt: 'Analysiere die Metadaten einer Bilddatei',
    quickDomainPrompt: 'Suche Informationen über eine Web-Domain',
    quickDebugPrompt: 'Debugge diesen JavaScript-Code',
    quickJava: 'Java',
    quickJavaScript: 'JavaScript',
    quickRust: 'Rust',
    quickPythonCoding: 'Schreibe einen vollständigen Web Scraper in Python mit requests und BeautifulSoup',
    quickJavaPrompt: 'Schreibe eine Java-Klasse zur Verwaltung einer Prioritätswarteschlange',
    quickJSPrompt: 'Schreibe einen vollständigen REST API Server mit Express.js',
    quickRustPrompt: 'Schreibe ein Rust-Programm zum Lesen und Parsen einer CSV-Datei',
    quickExif: 'EXIF',
    quickStego: 'Steganographie',
    quickBinwalk: 'Binwalk',
    quickDecode: 'Dekodierung',
    quickExifPrompt: 'Wie man EXIF-Metadaten aus einem Bild mit exiftool extrahiert',
    quickStegoPrompt: 'Wie man LSB-Steganographie in einem PNG-Bild erkennt',
    quickBinwalkPrompt: 'Wie man binwalk zur Firmware-Analyse verwendet',
    quickDecodePrompt: 'Dekodiere diesen Base64-String: SGVsbG8gV29ybGQ=',
    quickPerson: 'Person',
    quickDomain: 'Domain',
    quickEmail: 'E-Mail',
    quickUsername: 'Benutzername',
    quickPersonPrompt: 'Wie man eine vollständige OSINT-Recherche über eine Person durchführt',
    quickDomainOsintPrompt: 'Analysiere die Domain example.com: WHOIS, DNS, Technologien',
    quickEmailPrompt: 'Überprüfe diese E-Mail und finde zugehörige Informationen',
    quickUsernamePrompt: 'Suche den Benutzernamen "example" auf allen sozialen Plattformen',
    quickSearchPerson: 'Person',
    quickSearchCompany: 'Unternehmen',
    quickSearchNews: 'Nachrichten',
    quickSearchCompare: 'Vergleich',
    quickSearchPersonPrompt: 'Tiefgehende Recherche über Elon Musk: Karriere, Unternehmen, Kontroversen',
    quickSearchCompanyPrompt: 'Vollständige Recherche über OpenAI: Geschichte, Produkte, Finanzierung, Team',
    quickSearchNewsPrompt: 'Neueste Nachrichten zur künstlichen Intelligenz: Entwicklungen und Auswirkungen',
    quickSearchComparePrompt: 'Vergleiche Python vs Java: Performance, Nutzung, Ökosystem, Zukunft',
    tabChat: 'Chat',
    tabTools: 'Werkzeuge',
    tabTerminal: 'Terminal',
    tabSettings: 'Einstellungen',
    toolsTitle: 'Werkzeuge',
    toolsCodingTitle: 'Coding',
    toolsAnalysisTitle: 'Analyse',
    toolsOsintTitle: 'OSINT',
    toolsSearchTitle: 'Tiefensuche',
    toolGenCode: 'Code generieren',
    toolDebugCode: 'Code debuggen',
    toolExplainCode: 'Code erklären',
    toolConvertCode: 'Code konvertieren',
    toolOptimize: 'Optimieren',
    toolGenTests: 'Tests generieren',
    toolAnalyzeFile: 'Datei analysieren',
    toolExtractMeta: 'Metadaten extrahieren',
    toolStego: 'Steganographie',
    toolDecode: 'Dekodieren',
    toolBinaryAnalysis: 'Binäranalyse',
    toolSearchPerson: 'Person suchen',
    toolAnalyzeDomain: 'Domain analysieren',
    toolVerifyEmail: 'E-Mail überprüfen',
    toolSearchUsername: 'Benutzername suchen',
    toolTraceIP: 'IP verfolgen',
    toolDeepPerson: 'Person recherchieren',
    toolDeepCompany: 'Unternehmen recherchieren',
    toolDeepTopic: 'Thema recherchieren',
    toolCompareProducts: 'Produkte vergleichen',
    toolSearchNews: 'Nachrichten suchen',
    toolGenCodePrompt: 'Generiere vollständigen Code für: ',
    toolDebugCodePrompt: 'Debugge diesen Code:\n',
    toolExplainCodePrompt: 'Erkläre diesen Code im Detail:\n',
    toolConvertCodePrompt: 'Konvertiere diesen Code von einer Sprache in eine andere:\n',
    toolOptimizePrompt: 'Optimiere diesen Code für Performance:\n',
    toolGenTestsPrompt: 'Schreibe Unit-Tests für:\n',
    toolAnalyzeFilePrompt: 'Analysiere diese Datei gründlich, suche versteckte Inhalte und Metadaten: ',
    toolExtractMetaPrompt: 'Extrahiere alle Metadaten aus dieser Datei: ',
    toolStegoPrompt: 'Suche Steganographie und versteckte Daten in: ',
    toolDecodePrompt: 'Dekodiere diesen Inhalt (base64, hex, binär): ',
    toolBinaryPrompt: 'Analysiere die Header und Binärstruktur von: ',
    toolSearchPersonPrompt: 'Suche vollständige Informationen über diese Person: ',
    toolAnalyzeDomainPrompt: 'Analysiere diese Domain gründlich: ',
    toolVerifyEmailPrompt: 'Überprüfe diese E-Mail und finde zugehörige Informationen: ',
    toolSearchUsernamePrompt: 'Suche diesen Benutzernamen auf allen Plattformen: ',
    toolTraceIPPrompt: 'Verfolge diese IP-Adresse: ',
    toolDeepPersonPrompt: 'Tiefgehende Recherche über diese Person, kreuze alle Quellen: ',
    toolDeepCompanyPrompt: 'Tiefgehende Recherche über dieses Unternehmen/Organisation: ',
    toolDeepTopicPrompt: 'Tiefgehende Recherche zu diesem Thema, aggregiere alle Quellen: ',
    toolComparePrompt: 'Recherchiere und vergleiche Produkte/Dienste: ',
    toolSearchNewsPrompt: 'Suche aktuelle Nachrichten und analysiere: ',
    terminalTitle: 'Dan AI Terminal',
    terminalClear: 'Löschen',
    terminalInputPlaceholder: 'Befehl eingeben...',
    terminalHelp: `Verfügbare Befehle:
  help          — Diese Hilfe anzeigen
  clear         — Terminal löschen
  tools         — Verfügbare Tools auflisten
  export        — Aktuelle Unterhaltung exportieren
  status        — Server-Verbindungsstatus
  <Befehl>      — Beliebigen Shell-Befehl ausführen

Benötigte Tools werden automatisch installiert.`,
    terminalStatus: 'Befehl abgeschlossen',
    terminalExported: 'Unterhaltung als Text exportiert.',
    terminalToolsList: `Verfügbare Tools:
  python3, pip3, node, exiftool, binwalk, steghide,
  strings, file, xxd, curl, whois, nmap, dig, jq,
  gcc, java, go, rustc`,
    terminalError: 'Fehler: Server nicht erreichbar. Überprüfen Sie die Verbindung.',
    terminalGodWelcome: `╔══════════════════════════════════════╗
║  ⚡ Dan AI Terminal — GOD MODE ⚡     ║
║   ERWEITERTE Sandbox — Keine Limits  ║
║   Timeout: 120s | Ausgabe: unbegrenzt║
║   Tippe 'help' für Befehle           ║
╚══════════════════════════════════════╝`,
    terminalWelcome: `╔══════════════════════════════════════╗
║   Dan AI Terminal v2.0               ║
║   Sandbox mit Auto-Install Tools     ║
║   Verbunden mit Backend-Server       ║
║   Tippe 'help' für Befehle           ║
╚══════════════════════════════════════╝`,
    settingsTitle: 'Einstellungen',
    settingsAdvanced: 'Erweiterter Modus',
    settingsActivateGodMode: 'God Mode aktivieren',
    settingsGodModeActive: 'God Mode AKTIV',
    settingsGodModeOff: 'Deaktiviert',
    settingsGodModeOn: '⚡ AKTIV',
    settingsVoice: 'Stimme & Sprache',
    settingsVoiceLang: 'Sprachsprache',
    settingsTTS: 'Sprachsynthese (TTS)',
    settingsAppearance: 'Erscheinungsbild',
    settingsTheme: 'Thema',
    settingsThemeDark: 'Dunkel',
    settingsThemeLight: 'Hell',
    settingsUILang: 'Oberflächensprache',
    settingsPrivacy: 'Datenschutz & Daten (DSGVO)',
    settingsPrivacyInfo: 'Datenschutzerklärung',
    settingsDeleteAll: 'Alle Daten löschen',
    settingsExport: 'Export',
    settingsExportTxt: 'Aktuellen Chat exportieren (TXT)',
    settingsExportMd: 'Aktuellen Chat exportieren (Markdown)',
    settingsExportPdf: 'Aktuellen Chat exportieren (PDF)',
    settingsExportJson: 'Aktuellen Chat exportieren (JSON)',
    settingsExportAll: 'ALLE Unterhaltungen exportieren',
    settingsInfo: 'Info',
    settingsVersion: 'Version',
    settingsPlatform: 'Plattform',
    settingsServer: 'Server',
    settingsServerChecking: 'Überprüfung...',
    settingsServerConnected: '✅ Verbunden',
    settingsServerOffline: '❌ Offline',
    settingsLogout: 'Abmelden',
    godModeDialogTitle: 'GOD MODE',
    godModeStep1: 'Geben Sie Ihren Identifikator ein',
    godModeStep2: 'Geben Sie den Bestätigungscode ein',
    godModeUsernamePlaceholder: 'Benutzername',
    godModeCodePlaceholder: 'Code',
    godModeConfirm: 'Bestätigen',
    godModeCancel: 'Abbrechen',
    godModeErrorId: 'Identifikator nicht erkannt',
    godModeErrorCode: 'Falscher Code',
    godModeDeactivate: 'God Mode deaktivieren?',
    privacyTitle: 'Datenschutzerklärung — DSGVO',
    privacyMainTitle: 'DATENSCHUTZERKLÄRUNG — DAN AI CODE & SEARCH',
    privacyRegulation: 'Gemäß Verordnung (EU) 2016/679 (DSGVO)',
    privacyDataTitle: 'ERHOBENE DATEN',
    privacyData1: 'Authentifizierungsdaten (Benutzername)',
    privacyData2: 'Unterhaltungen mit dem KI-Assistenten',
    privacyData3: 'Im Terminal-Sandbox ausgeführte Befehle',
    privacyRightsTitle: 'RECHTE DER BETROFFENEN PERSON (Art. 15-22 DSGVO)',
    privacyRight1: 'Recht auf Auskunft über persönliche Daten',
    privacyRight2: 'Recht auf Berichtigung',
    privacyRight3: 'Recht auf Löschung ("Recht auf Vergessenwerden", Art. 17)',
    privacyRight4: 'Recht auf Datenübertragbarkeit',
    privacyRight5: 'Recht auf Widerruf der Einwilligung',
    privacyDeletionTitle: 'DATENLÖSCHUNG',
    privacyDeletionText: 'Sie können alle Ihre Daten jederzeit über Einstellungen → Alle Daten löschen entfernen.',
    privacyRetentionTitle: 'AUFBEWAHRUNG',
    privacyRetentionText: 'Daten werden sowohl lokal im Browser (localStorage) als auch auf dem Backend-Server zur geräteübergreifenden Synchronisierung gespeichert. Sie können alle Daten jederzeit löschen.',
    privacyClose: 'Schließen',
    copy: 'Kopieren',
    listen: 'Anhören',
    export: 'Exportieren',
    copied: 'Kopiert!',
    codeCopied: '✓ Kopiert',
    codeCopy: 'Kopieren',
    noMessages: 'Keine Nachrichten zum Exportieren',
    noConversations: 'Keine Unterhaltungen zum Exportieren',
    confirmLogout: 'Sind Sie sicher, dass Sie sich abmelden möchten?',
    confirmDelete: 'Diese Unterhaltung löschen?',
    confirmDeleteAll: 'Sind Sie sicher, dass Sie ALLE Ihre Daten löschen möchten? Diese Aktion ist unwiderruflich.',
    confirmDeleteAll2: 'Endgültige Bestätigung: Alle Daten werden dauerhaft gelöscht.',
    allDataDeleted: 'Alle Daten wurden gelöscht',
    exported: 'Exportiert: ',
    voiceNotSupported: 'Spracherkennung nicht unterstützt',
    errorResponse: 'Entschuldigung, ein Fehler ist aufgetreten. Bitte versuchen Sie es erneut.',
    offlineTitle: 'Offline-Modus',
    serverTooltipConnected: 'Server verbunden',
    serverTooltipOffline: 'Server offline — lokaler Modus',

    guideTitle: 'Funktionsanleitung',
    guideSubtitle: 'Entdecken Sie alles, was Dan AI kann',
    guideChat: 'Multimodale KI-Chat',
    guideChatDesc: 'Chatten Sie mit einer fortschrittlichen KI in 5 spezialisierten Modi. Sie können tippen oder sprechen, und Dan AI kann Antworten in 6 Sprachen vorlesen, usw.',
    guideCoding: 'Fortgeschrittenes Coding',
    guideCodingDesc: 'Generieren Sie vollständigen, produktionsreifen Code in jeder Sprache. Debuggen, optimieren, konvertieren Sie zwischen Sprachen, usw.',
    guideAnalysis: 'Dateianalyse und Steganographie',
    guideAnalysisDesc: 'Analysieren Sie jeden Dateityp: Metadaten, versteckte Inhalte, Steganographie, digitale Forensik, usw.',
    guideOsint: 'OSINT (Open Source Intelligence)',
    guideOsintDesc: 'Open-Source-Recherchen: Personen, Domains, E-Mails, Benutzernamen, IP-Analyse und Geolokalisierung, usw.',
    guideSearch: 'Tiefensuche',
    guideSearchDesc: 'Fortschrittliche KI-Suchmaschine, die mehrere Quellen analysiert und tiefgehende Berichte erstellt, usw.',
    guideTerminal: 'Integriertes Terminal',
    guideTerminalDesc: 'Terminal verbunden mit einer Server-Sandbox. Führen Sie echte Befehle aus mit automatischer Tool-Installation, usw.',
    guideMultilang: 'Mehrsprachig',
    guideMultilangDesc: 'Spracheingabe und Sprachausgabe in 6 Sprachen. Die Oberfläche ist vollständig in alle 6 Sprachen übersetzt.',
    guideExport: 'Export',
    guideExportDesc: 'Exportieren Sie Ihre Gespräche als Text, JSON, Markdown oder PDF. Ihre Daten gehören immer Ihnen.',
    guideOffline: 'Offline-Modus',
    guideOfflineDesc: 'Gespräche werden lokal gespeichert. Offline gesendete Nachrichten werden automatisch synchronisiert.',
    guideNotifications: 'Benachrichtigungen',
    guideNotificationsDesc: 'Erhalten Sie Benachrichtigungen, wenn Dan AI eine Antwort im Hintergrund abschließt.',
    guideTheme: 'Hell/Dunkel-Thema',
    guideThemeDesc: 'Wählen Sie zwischen Cyber Dark und hellem Thema. Ihre Wahl wird automatisch gespeichert.',
    guidePrivacy: 'Datenschutz und DSGVO',
    guidePrivacyDesc: 'Volle Konformität mit der Verordnung (EU) 2016/679 (DSGVO). Recht auf Löschung aller Daten.',
    guideGodMode: 'God Mode',
    guideGodModeDesc: 'Reservierter erweiterter Modus: unbegrenzte Antworten, verbesserte LLM-Parameter, uneingeschränkte Sandbox.',
    guideCrossPlat: 'Cross-Platform',
    guideCrossPlatDesc: 'Verfügbar als native App für iOS/Android, als installierbare PWA und als Website, usw.',
  },

  es: {
    loginTitle: 'Dan AI',
    loginSubtitle: 'Code & Search — Asistente IA',
    loginFeature1: 'Codificación avanzada',
    loginFeature2: 'Análisis de archivos y esteganografía',
    loginFeature3: 'Investigación OSINT en fuentes abiertas',
    loginFeature4: 'Terminal con sandbox y auto-instalación',
    loginUsernamePlaceholder: 'Usuario',
    loginPasswordPlaceholder: 'Contraseña',
    loginButton: 'Iniciar sesión',
    loginError: 'Ingresa usuario y contraseña',
    loginNote: 'Acceso restringido — Datos sincronizados con el servidor',
    newChat: 'Nuevo Chat',
    modeGeneral: 'General',
    modeCoding: 'Codificación',
    modeAnalysis: 'Análisis',
    modeOsint: 'OSINT',
    modeSearch: 'Búsqueda Profunda',
    history: 'Historial',
    settings: 'Configuración',
    terminal: 'Terminal',
    godMode: 'God Mode',
    closeSidebar: 'Cerrar barra lateral',
    welcomeSubtitle: 'Modo: ',
    welcomeHintGeneral: 'Pregúntame lo que quieras, estoy aquí para ayudarte',
    welcomeHintCoding: 'Escribe, depura, optimiza y convierte código en cualquier lenguaje',
    welcomeHintAnalysis: 'Analiza archivos, metadatos, esteganografía y contenidos ocultos',
    welcomeHintOsint: 'Inteligencia de fuentes abiertas: personas, dominios, emails',
    welcomeHintSearch: 'Investigaciones profundas e inteligentes sobre cualquier tema',
    inputPlaceholder: 'Escribe o habla...',
    voiceInput: 'Entrada de voz',
    newConversation: 'Nueva conversación',
    quickPython: 'Código Python',
    quickFileAnalysis: 'Análisis Archivo',
    quickDomainSearch: 'Búsqueda Dominio',
    quickDebug: 'Depurar Código',
    quickPythonPrompt: 'Escribe una función Python para ordenar una lista',
    quickFilePrompt: 'Analiza los metadatos de un archivo de imagen',
    quickDomainPrompt: 'Busca información sobre un dominio web',
    quickDebugPrompt: 'Depura este código JavaScript',
    quickJava: 'Java',
    quickJavaScript: 'JavaScript',
    quickRust: 'Rust',
    quickPythonCoding: 'Escribe un web scraper completo en Python con requests y BeautifulSoup',
    quickJavaPrompt: 'Escribe una clase Java para gestionar una cola de prioridad',
    quickJSPrompt: 'Escribe un servidor REST API completo con Express.js',
    quickRustPrompt: 'Escribe un programa Rust para leer y parsear un archivo CSV',
    quickExif: 'EXIF',
    quickStego: 'Esteganografía',
    quickBinwalk: 'Binwalk',
    quickDecode: 'Decodificar',
    quickExifPrompt: 'Cómo extraer metadatos EXIF de una imagen con exiftool',
    quickStegoPrompt: 'Cómo detectar esteganografía LSB en una imagen PNG',
    quickBinwalkPrompt: 'Cómo usar binwalk para analizar un firmware',
    quickDecodePrompt: 'Decodifica esta cadena Base64: SGVsbG8gV29ybGQ=',
    quickPerson: 'Persona',
    quickDomain: 'Dominio',
    quickEmail: 'Email',
    quickUsername: 'Usuario',
    quickPersonPrompt: 'Cómo hacer una investigación OSINT completa sobre una persona',
    quickDomainOsintPrompt: 'Analiza el dominio example.com: WHOIS, DNS, tecnologías',
    quickEmailPrompt: 'Verifica este email y encuentra información asociada',
    quickUsernamePrompt: 'Busca el usuario "example" en todas las plataformas sociales',
    quickSearchPerson: 'Persona',
    quickSearchCompany: 'Empresa',
    quickSearchNews: 'Noticias',
    quickSearchCompare: 'Comparar',
    quickSearchPersonPrompt: 'Investigación profunda sobre Elon Musk: carrera, empresas, controversias',
    quickSearchCompanyPrompt: 'Investigación completa sobre OpenAI: historia, productos, financiación, equipo',
    quickSearchNewsPrompt: 'Últimas noticias sobre inteligencia artificial: desarrollos e impactos',
    quickSearchComparePrompt: 'Compara Python vs Java: rendimiento, uso, ecosistema, futuro',
    tabChat: 'Chat',
    tabTools: 'Herramientas',
    tabTerminal: 'Terminal',
    tabSettings: 'Configuración',
    toolsTitle: 'Herramientas',
    toolsCodingTitle: 'Codificación',
    toolsAnalysisTitle: 'Análisis',
    toolsOsintTitle: 'OSINT',
    toolsSearchTitle: 'Búsqueda Profunda',
    toolGenCode: 'Generar Código',
    toolDebugCode: 'Depurar Código',
    toolExplainCode: 'Explicar Código',
    toolConvertCode: 'Convertir Código',
    toolOptimize: 'Optimizar',
    toolGenTests: 'Generar Tests',
    toolAnalyzeFile: 'Analizar Archivo',
    toolExtractMeta: 'Extraer Metadatos',
    toolStego: 'Esteganografía',
    toolDecode: 'Decodificar',
    toolBinaryAnalysis: 'Análisis Binario',
    toolSearchPerson: 'Buscar Persona',
    toolAnalyzeDomain: 'Analizar Dominio',
    toolVerifyEmail: 'Verificar Email',
    toolSearchUsername: 'Buscar Usuario',
    toolTraceIP: 'Rastrear IP',
    toolDeepPerson: 'Investigar Persona',
    toolDeepCompany: 'Investigar Empresa',
    toolDeepTopic: 'Investigar Tema',
    toolCompareProducts: 'Comparar Productos',
    toolSearchNews: 'Buscar Noticias',
    toolGenCodePrompt: 'Genera código completo para: ',
    toolDebugCodePrompt: 'Depura este código:\n',
    toolExplainCodePrompt: 'Explica este código en detalle:\n',
    toolConvertCodePrompt: 'Convierte este código de un lenguaje a otro:\n',
    toolOptimizePrompt: 'Optimiza este código para rendimiento:\n',
    toolGenTestsPrompt: 'Escribe tests unitarios para:\n',
    toolAnalyzeFilePrompt: 'Analiza este archivo en profundidad, busca contenidos ocultos y metadatos: ',
    toolExtractMetaPrompt: 'Extrae todos los metadatos de este archivo: ',
    toolStegoPrompt: 'Busca esteganografía y datos ocultos en: ',
    toolDecodePrompt: 'Decodifica este contenido (base64, hex, binario): ',
    toolBinaryPrompt: 'Analiza los headers y la estructura binaria de: ',
    toolSearchPersonPrompt: 'Busca información completa sobre esta persona: ',
    toolAnalyzeDomainPrompt: 'Analiza este dominio en profundidad: ',
    toolVerifyEmailPrompt: 'Verifica este email y encuentra información asociada: ',
    toolSearchUsernamePrompt: 'Busca este usuario en todas las plataformas: ',
    toolTraceIPPrompt: 'Rastrea esta dirección IP: ',
    toolDeepPersonPrompt: 'Investigación profunda sobre esta persona, cruza todas las fuentes: ',
    toolDeepCompanyPrompt: 'Investigación profunda sobre esta empresa/organización: ',
    toolDeepTopicPrompt: 'Investigación profunda sobre este tema, agrega todas las fuentes: ',
    toolComparePrompt: 'Investiga y compara productos/servicios: ',
    toolSearchNewsPrompt: 'Busca noticias recientes y analiza: ',
    terminalTitle: 'Dan AI Terminal',
    terminalClear: 'Limpiar',
    terminalInputPlaceholder: 'Escribe un comando...',
    terminalHelp: `Comandos disponibles:
  help          — Mostrar esta ayuda
  clear         — Limpiar terminal
  tools         — Lista de herramientas disponibles
  export        — Exportar conversación actual
  status        — Estado de conexión del servidor
  <comando>     — Ejecutar cualquier comando shell

Las herramientas necesarias se instalan automáticamente.`,
    terminalStatus: 'Comando completado',
    terminalExported: 'Conversación exportada en formato texto.',
    terminalToolsList: `Herramientas disponibles:
  python3, pip3, node, exiftool, binwalk, steghide,
  strings, file, xxd, curl, whois, nmap, dig, jq,
  gcc, java, go, rustc`,
    terminalError: 'Error: Servidor inalcanzable. Verifica la conexión.',
    terminalGodWelcome: `╔══════════════════════════════════════╗
║  ⚡ Dan AI Terminal — GOD MODE ⚡     ║
║   Sandbox MEJORADO — Sin límites     ║
║   Timeout: 120s | Salida: ilimitada  ║
║   Escribe 'help' para los comandos   ║
╚══════════════════════════════════════╝`,
    terminalWelcome: `╔══════════════════════════════════════╗
║   Dan AI Terminal v2.0               ║
║   Sandbox con auto-instalación       ║
║   Conectado al servidor backend      ║
║   Escribe 'help' para los comandos   ║
╚══════════════════════════════════════╝`,
    settingsTitle: 'Configuración',
    settingsAdvanced: 'Modo Avanzado',
    settingsActivateGodMode: 'Activar God Mode',
    settingsGodModeActive: 'God Mode ACTIVO',
    settingsGodModeOff: 'Desactivado',
    settingsGodModeOn: '⚡ ACTIVO',
    settingsVoice: 'Voz e Idioma',
    settingsVoiceLang: 'Idioma de voz',
    settingsTTS: 'Síntesis de voz (TTS)',
    settingsAppearance: 'Apariencia',
    settingsTheme: 'Tema',
    settingsThemeDark: 'Oscuro',
    settingsThemeLight: 'Claro',
    settingsUILang: 'Idioma de la interfaz',
    settingsPrivacy: 'Privacidad y Datos (RGPD)',
    settingsPrivacyInfo: 'Política de Privacidad',
    settingsDeleteAll: 'Eliminar todos los datos',
    settingsExport: 'Exportación',
    settingsExportTxt: 'Exportar chat actual (TXT)',
    settingsExportMd: 'Exportar chat actual (Markdown)',
    settingsExportPdf: 'Exportar chat actual (PDF)',
    settingsExportJson: 'Exportar chat actual (JSON)',
    settingsExportAll: 'Exportar TODAS las conversaciones',
    settingsInfo: 'Info',
    settingsVersion: 'Versión',
    settingsPlatform: 'Plataforma',
    settingsServer: 'Servidor',
    settingsServerChecking: 'Verificando...',
    settingsServerConnected: '✅ Conectado',
    settingsServerOffline: '❌ Sin conexión',
    settingsLogout: 'Cerrar sesión',
    godModeDialogTitle: 'GOD MODE',
    godModeStep1: 'Ingresa tu identificador',
    godModeStep2: 'Ingresa el código de confirmación',
    godModeUsernamePlaceholder: 'Usuario',
    godModeCodePlaceholder: 'Código',
    godModeConfirm: 'Confirmar',
    godModeCancel: 'Cancelar',
    godModeErrorId: 'Identificador no reconocido',
    godModeErrorCode: 'Código incorrecto',
    godModeDeactivate: '¿Desactivar God Mode?',
    privacyTitle: 'Política de Privacidad — RGPD',
    privacyMainTitle: 'POLÍTICA DE PRIVACIDAD — DAN AI CODE & SEARCH',
    privacyRegulation: 'Conforme al Reglamento (UE) 2016/679 (RGPD)',
    privacyDataTitle: 'DATOS RECOPILADOS',
    privacyData1: 'Datos de autenticación (usuario)',
    privacyData2: 'Conversaciones con el asistente IA',
    privacyData3: 'Comandos ejecutados en el terminal sandbox',
    privacyRightsTitle: 'DERECHOS DEL INTERESADO (Art. 15-22 RGPD)',
    privacyRight1: 'Derecho de acceso a los datos personales',
    privacyRight2: 'Derecho de rectificación',
    privacyRight3: 'Derecho de supresión ("derecho al olvido", Art. 17)',
    privacyRight4: 'Derecho a la portabilidad de los datos',
    privacyRight5: 'Derecho a retirar el consentimiento',
    privacyDeletionTitle: 'ELIMINACIÓN DE DATOS',
    privacyDeletionText: 'Puedes eliminar todos tus datos en cualquier momento a través de Configuración → Eliminar todos los datos.',
    privacyRetentionTitle: 'CONSERVACIÓN',
    privacyRetentionText: 'Los datos se conservan tanto localmente en el navegador (localStorage) como en el servidor backend para la sincronización entre dispositivos. Puedes eliminar todos los datos en cualquier momento.',
    privacyClose: 'Cerrar',
    copy: 'Copiar',
    listen: 'Escuchar',
    export: 'Exportar',
    copied: '¡Copiado!',
    codeCopied: '✓ Copiado',
    codeCopy: 'Copiar',
    noMessages: 'No hay mensajes para exportar',
    noConversations: 'No hay conversaciones para exportar',
    confirmLogout: '¿Estás seguro de que quieres cerrar sesión?',
    confirmDelete: '¿Eliminar esta conversación?',
    confirmDeleteAll: '¿Estás seguro de que quieres eliminar TODOS tus datos? Esta acción es irreversible.',
    confirmDeleteAll2: 'Confirmación final: todos los datos serán eliminados permanentemente.',
    allDataDeleted: 'Todos los datos han sido eliminados',
    exported: 'Exportado: ',
    voiceNotSupported: 'Reconocimiento de voz no soportado',
    errorResponse: 'Lo siento, se ha producido un error. Inténtalo de nuevo.',
    offlineTitle: 'Modo Sin Conexión',
    serverTooltipConnected: 'Servidor conectado',
    serverTooltipOffline: 'Servidor sin conexión — modo local',

    guideTitle: 'Guía de Funcionalidades',
    guideSubtitle: 'Descubre todo lo que Dan AI puede hacer',
    guideChat: 'Chat IA Multimodal',
    guideChatDesc: 'Conversa con una IA avanzada en 5 modos especializados. Puedes escribir o hablar, y Dan AI puede leer las respuestas en voz alta en 6 idiomas, etc.',
    guideCoding: 'Codificación Avanzada',
    guideCodingDesc: 'Genera código completo y listo para producción en cualquier lenguaje. Depura, optimiza, convierte entre lenguajes, etc.',
    guideAnalysis: 'Análisis de Archivos y Esteganografía',
    guideAnalysisDesc: 'Analiza cualquier tipo de archivo: metadatos, contenido oculto, esteganografía, análisis forense digital, etc.',
    guideOsint: 'OSINT (Inteligencia de Fuentes Abiertas)',
    guideOsintDesc: 'Investigaciones en fuentes abiertas: personas, dominios, emails, nombres de usuario, análisis IP y geolocalización, etc.',
    guideSearch: 'Búsqueda Profunda',
    guideSearchDesc: 'Motor de búsqueda IA avanzado que analiza múltiples fuentes y produce informes detallados, etc.',
    guideTerminal: 'Terminal Integrado',
    guideTerminalDesc: 'Terminal conectado a un sandbox del servidor. Ejecuta comandos reales con auto-instalación de herramientas, etc.',
    guideMultilang: 'Multilingüe',
    guideMultilangDesc: 'Entrada de voz y síntesis de voz en 6 idiomas. La interfaz está completamente traducida en los 6 idiomas.',
    guideExport: 'Exportación',
    guideExportDesc: 'Exporta tus conversaciones en Texto, JSON, Markdown o PDF. Tus datos siempre son tuyos.',
    guideOffline: 'Modo Sin Conexión',
    guideOfflineDesc: 'Las conversaciones se guardan localmente. Los mensajes enviados sin conexión se sincronizan automáticamente.',
    guideNotifications: 'Notificaciones',
    guideNotificationsDesc: 'Recibe notificaciones cuando Dan AI completa una respuesta en segundo plano.',
    guideTheme: 'Tema Claro/Oscuro',
    guideThemeDesc: 'Elige entre el tema Cyber Dark y el tema Claro. Tu elección se guarda automáticamente.',
    guidePrivacy: 'Privacidad y RGPD',
    guidePrivacyDesc: 'Pleno cumplimiento del Reglamento (UE) 2016/679 (RGPD). Derecho a eliminar todos los datos.',
    guideGodMode: 'God Mode',
    guideGodModeDesc: 'Modo avanzado reservado: respuestas ilimitadas, parámetros LLM mejorados, sandbox sin restricciones.',
    guideCrossPlat: 'Cross-Platform',
    guideCrossPlatDesc: 'Disponible como app nativa para iOS/Android, como PWA instalable y como sitio web, etc.',
  },

  ar: {
    loginTitle: 'Dan AI',
    loginSubtitle: 'Code & Search — مساعد ذكاء اصطناعي',
    loginFeature1: 'برمجة متقدمة',
    loginFeature2: 'تحليل الملفات والإخفاء الرقمي',
    loginFeature3: 'أبحاث OSINT من مصادر مفتوحة',
    loginFeature4: 'طرفية مع بيئة معزولة وتثبيت تلقائي',
    loginUsernamePlaceholder: 'اسم المستخدم',
    loginPasswordPlaceholder: 'كلمة المرور',
    loginButton: 'تسجيل الدخول',
    loginError: 'أدخل اسم المستخدم وكلمة المرور',
    loginNote: 'وصول مقيد — البيانات متزامنة مع الخادم',
    newChat: 'محادثة جديدة',
    modeGeneral: 'عام',
    modeCoding: 'برمجة',
    modeAnalysis: 'تحليل',
    modeOsint: 'OSINT',
    modeSearch: 'بحث عميق',
    history: 'السجل',
    settings: 'الإعدادات',
    terminal: 'الطرفية',
    godMode: 'God Mode',
    closeSidebar: 'إغلاق الشريط الجانبي',
    welcomeSubtitle: 'الوضع: ',
    welcomeHintGeneral: 'اسألني أي شيء، أنا هنا لمساعدتك',
    welcomeHintCoding: 'اكتب، صحح، حسّن وحوّل الكود بأي لغة',
    welcomeHintAnalysis: 'حلل الملفات والبيانات الوصفية والإخفاء الرقمي والمحتوى المخفي',
    welcomeHintOsint: 'استخبارات المصادر المفتوحة: أشخاص، نطاقات، بريد إلكتروني',
    welcomeHintSearch: 'أبحاث معمقة وذكية حول أي موضوع',
    inputPlaceholder: 'اكتب أو تحدث...',
    voiceInput: 'إدخال صوتي',
    newConversation: 'محادثة جديدة',
    quickPython: 'كود Python',
    quickFileAnalysis: 'تحليل ملف',
    quickDomainSearch: 'بحث نطاق',
    quickDebug: 'تصحيح كود',
    quickPythonPrompt: 'اكتب دالة Python لترتيب قائمة',
    quickFilePrompt: 'حلل البيانات الوصفية لملف صورة',
    quickDomainPrompt: 'ابحث عن معلومات حول نطاق ويب',
    quickDebugPrompt: 'صحح هذا الكود JavaScript',
    quickJava: 'Java',
    quickJavaScript: 'JavaScript',
    quickRust: 'Rust',
    quickPythonCoding: 'اكتب web scraper كامل بـ Python مع requests و BeautifulSoup',
    quickJavaPrompt: 'اكتب فئة Java لإدارة طابور أولويات',
    quickJSPrompt: 'اكتب خادم REST API كامل مع Express.js',
    quickRustPrompt: 'اكتب برنامج Rust لقراءة وتحليل ملف CSV',
    quickExif: 'EXIF',
    quickStego: 'إخفاء رقمي',
    quickBinwalk: 'Binwalk',
    quickDecode: 'فك تشفير',
    quickExifPrompt: 'كيفية استخراج بيانات EXIF من صورة باستخدام exiftool',
    quickStegoPrompt: 'كيفية اكتشاف إخفاء LSB في صورة PNG',
    quickBinwalkPrompt: 'كيفية استخدام binwalk لتحليل firmware',
    quickDecodePrompt: 'فك تشفير هذا النص Base64: SGVsbG8gV29ybGQ=',
    quickPerson: 'شخص',
    quickDomain: 'نطاق',
    quickEmail: 'بريد إلكتروني',
    quickUsername: 'اسم مستخدم',
    quickPersonPrompt: 'كيفية إجراء بحث OSINT كامل عن شخص',
    quickDomainOsintPrompt: 'حلل النطاق example.com: WHOIS، DNS، التقنيات',
    quickEmailPrompt: 'تحقق من هذا البريد الإلكتروني وابحث عن المعلومات المرتبطة',
    quickUsernamePrompt: 'ابحث عن اسم المستخدم "example" على جميع المنصات',
    quickSearchPerson: 'شخص',
    quickSearchCompany: 'شركة',
    quickSearchNews: 'أخبار',
    quickSearchCompare: 'مقارنة',
    quickSearchPersonPrompt: 'بحث معمق عن إيلون ماسك: مسيرة، شركات، جدل',
    quickSearchCompanyPrompt: 'بحث كامل عن OpenAI: تاريخ، منتجات، تمويل، فريق',
    quickSearchNewsPrompt: 'آخر أخبار الذكاء الاصطناعي: تطورات وتأثيرات',
    quickSearchComparePrompt: 'قارن Python مقابل Java: أداء، استخدام، نظام بيئي، مستقبل',
    tabChat: 'محادثة',
    tabTools: 'أدوات',
    tabTerminal: 'طرفية',
    tabSettings: 'إعدادات',
    toolsTitle: 'أدوات',
    toolsCodingTitle: 'برمجة',
    toolsAnalysisTitle: 'تحليل',
    toolsOsintTitle: 'OSINT',
    toolsSearchTitle: 'بحث عميق',
    toolGenCode: 'توليد كود',
    toolDebugCode: 'تصحيح كود',
    toolExplainCode: 'شرح كود',
    toolConvertCode: 'تحويل كود',
    toolOptimize: 'تحسين',
    toolGenTests: 'توليد اختبارات',
    toolAnalyzeFile: 'تحليل ملف',
    toolExtractMeta: 'استخراج بيانات وصفية',
    toolStego: 'إخفاء رقمي',
    toolDecode: 'فك تشفير',
    toolBinaryAnalysis: 'تحليل ثنائي',
    toolSearchPerson: 'بحث عن شخص',
    toolAnalyzeDomain: 'تحليل نطاق',
    toolVerifyEmail: 'التحقق من بريد',
    toolSearchUsername: 'بحث اسم مستخدم',
    toolTraceIP: 'تتبع IP',
    toolDeepPerson: 'بحث عن شخص',
    toolDeepCompany: 'بحث عن شركة',
    toolDeepTopic: 'بحث عن موضوع',
    toolCompareProducts: 'مقارنة منتجات',
    toolSearchNews: 'بحث أخبار',
    toolGenCodePrompt: 'ولّد كود كامل لـ: ',
    toolDebugCodePrompt: 'صحح هذا الكود:\n',
    toolExplainCodePrompt: 'اشرح هذا الكود بالتفصيل:\n',
    toolConvertCodePrompt: 'حوّل هذا الكود من لغة إلى أخرى:\n',
    toolOptimizePrompt: 'حسّن هذا الكود للأداء:\n',
    toolGenTestsPrompt: 'اكتب اختبارات وحدة لـ:\n',
    toolAnalyzeFilePrompt: 'حلل هذا الملف بعمق، ابحث عن محتوى مخفي وبيانات وصفية: ',
    toolExtractMetaPrompt: 'استخرج جميع البيانات الوصفية من هذا الملف: ',
    toolStegoPrompt: 'ابحث عن إخفاء رقمي وبيانات مخفية في: ',
    toolDecodePrompt: 'فك تشفير هذا المحتوى (base64، hex، ثنائي): ',
    toolBinaryPrompt: 'حلل الرؤوس والبنية الثنائية لـ: ',
    toolSearchPersonPrompt: 'ابحث عن معلومات كاملة عن هذا الشخص: ',
    toolAnalyzeDomainPrompt: 'حلل هذا النطاق بعمق: ',
    toolVerifyEmailPrompt: 'تحقق من هذا البريد وابحث عن المعلومات المرتبطة: ',
    toolSearchUsernamePrompt: 'ابحث عن اسم المستخدم هذا على جميع المنصات: ',
    toolTraceIPPrompt: 'تتبع عنوان IP هذا: ',
    toolDeepPersonPrompt: 'بحث معمق عن هذا الشخص، اعبر جميع المصادر: ',
    toolDeepCompanyPrompt: 'بحث معمق عن هذه الشركة/المنظمة: ',
    toolDeepTopicPrompt: 'بحث معمق عن هذا الموضوع، اجمع جميع المصادر: ',
    toolComparePrompt: 'ابحث وقارن منتجات/خدمات: ',
    toolSearchNewsPrompt: 'ابحث عن أخبار حديثة وحلل: ',
    terminalTitle: 'Dan AI طرفية',
    terminalClear: 'مسح',
    terminalInputPlaceholder: 'اكتب أمراً...',
    terminalHelp: `الأوامر المتاحة:
  help          — عرض هذه المساعدة
  clear         — مسح الطرفية
  tools         — قائمة الأدوات المتاحة
  export        — تصدير المحادثة الحالية
  status        — حالة اتصال الخادم
  <أمر>         — تنفيذ أي أمر shell

يتم تثبيت الأدوات المطلوبة تلقائياً.`,
    terminalStatus: 'تم إكمال الأمر',
    terminalExported: 'تم تصدير المحادثة بتنسيق نصي.',
    terminalToolsList: `الأدوات المتاحة:
  python3, pip3, node, exiftool, binwalk, steghide,
  strings, file, xxd, curl, whois, nmap, dig, jq,
  gcc, java, go, rustc`,
    terminalError: 'خطأ: الخادم غير قابل للوصول. تحقق من الاتصال.',
    terminalGodWelcome: `╔══════════════════════════════════════╗
║  ⚡ Dan AI Terminal — GOD MODE ⚡     ║
║   بيئة معزولة محسّنة — بلا حدود     ║
║   المهلة: 120 ثانية | مخرجات: غير محدودة ║
║   اكتب 'help' للأوامر               ║
╚══════════════════════════════════════╝`,
    terminalWelcome: `╔══════════════════════════════════════╗
║   Dan AI Terminal v2.0               ║
║   بيئة معزولة مع تثبيت تلقائي       ║
║   متصل بخادم الواجهة الخلفية        ║
║   اكتب 'help' للأوامر               ║
╚══════════════════════════════════════╝`,
    settingsTitle: 'الإعدادات',
    settingsAdvanced: 'الوضع المتقدم',
    settingsActivateGodMode: 'تفعيل God Mode',
    settingsGodModeActive: 'God Mode نشط',
    settingsGodModeOff: 'معطل',
    settingsGodModeOn: '⚡ نشط',
    settingsVoice: 'الصوت واللغة',
    settingsVoiceLang: 'لغة الصوت',
    settingsTTS: 'تحويل النص إلى كلام (TTS)',
    settingsAppearance: 'المظهر',
    settingsTheme: 'السمة',
    settingsThemeDark: 'داكن',
    settingsThemeLight: 'فاتح',
    settingsUILang: 'لغة الواجهة',
    settingsPrivacy: 'الخصوصية والبيانات (GDPR)',
    settingsPrivacyInfo: 'سياسة الخصوصية',
    settingsDeleteAll: 'حذف جميع البيانات',
    settingsExport: 'التصدير',
    settingsExportTxt: 'تصدير المحادثة الحالية (TXT)',
    settingsExportMd: 'تصدير المحادثة الحالية (Markdown)',
    settingsExportPdf: 'تصدير المحادثة الحالية (PDF)',
    settingsExportJson: 'تصدير المحادثة الحالية (JSON)',
    settingsExportAll: 'تصدير جميع المحادثات',
    settingsInfo: 'معلومات',
    settingsVersion: 'الإصدار',
    settingsPlatform: 'المنصة',
    settingsServer: 'الخادم',
    settingsServerChecking: 'جارٍ التحقق...',
    settingsServerConnected: '✅ متصل',
    settingsServerOffline: '❌ غير متصل',
    settingsLogout: 'تسجيل الخروج',
    godModeDialogTitle: 'GOD MODE',
    godModeStep1: 'أدخل معرّفك',
    godModeStep2: 'أدخل رمز التأكيد',
    godModeUsernamePlaceholder: 'اسم المستخدم',
    godModeCodePlaceholder: 'الرمز',
    godModeConfirm: 'تأكيد',
    godModeCancel: 'إلغاء',
    godModeErrorId: 'المعرّف غير معروف',
    godModeErrorCode: 'رمز خاطئ',
    godModeDeactivate: 'إلغاء تفعيل God Mode؟',
    privacyTitle: 'سياسة الخصوصية — GDPR',
    privacyMainTitle: 'سياسة الخصوصية — DAN AI CODE & SEARCH',
    privacyRegulation: 'وفقاً للائحة (الاتحاد الأوروبي) 2016/679 (GDPR)',
    privacyDataTitle: 'البيانات المجمعة',
    privacyData1: 'بيانات المصادقة (اسم المستخدم)',
    privacyData2: 'المحادثات مع مساعد الذكاء الاصطناعي',
    privacyData3: 'الأوامر المنفذة في طرفية البيئة المعزولة',
    privacyRightsTitle: 'حقوق صاحب البيانات (المواد 15-22 GDPR)',
    privacyRight1: 'حق الوصول إلى البيانات الشخصية',
    privacyRight2: 'حق التصحيح',
    privacyRight3: 'حق المحو ("الحق في النسيان"، المادة 17)',
    privacyRight4: 'حق نقل البيانات',
    privacyRight5: 'حق سحب الموافقة',
    privacyDeletionTitle: 'حذف البيانات',
    privacyDeletionText: 'يمكنك حذف جميع بياناتك في أي وقت عبر الإعدادات → حذف جميع البيانات.',
    privacyRetentionTitle: 'الاحتفاظ',
    privacyRetentionText: 'يتم تخزين البيانات محلياً في المتصفح (localStorage) وعلى خادم الواجهة الخلفية للمزامنة بين الأجهزة. يمكنك حذف جميع البيانات في أي وقت.',
    privacyClose: 'إغلاق',
    copy: 'نسخ',
    listen: 'استماع',
    export: 'تصدير',
    copied: 'تم النسخ!',
    codeCopied: '✓ تم النسخ',
    codeCopy: 'نسخ',
    noMessages: 'لا توجد رسائل للتصدير',
    noConversations: 'لا توجد محادثات للتصدير',
    confirmLogout: 'هل أنت متأكد أنك تريد تسجيل الخروج؟',
    confirmDelete: 'حذف هذه المحادثة؟',
    confirmDeleteAll: 'هل أنت متأكد أنك تريد حذف جميع بياناتك؟ هذا الإجراء لا رجعة فيه.',
    confirmDeleteAll2: 'تأكيد نهائي: سيتم حذف جميع البيانات نهائياً.',
    allDataDeleted: 'تم حذف جميع البيانات',
    exported: 'تم التصدير: ',
    voiceNotSupported: 'التعرف على الصوت غير مدعوم',
    errorResponse: 'عذراً، حدث خطأ. يرجى المحاولة مرة أخرى.',
    offlineTitle: 'وضع عدم الاتصال',
    serverTooltipConnected: 'الخادم متصل',
    serverTooltipOffline: 'الخادم غير متصل — وضع محلي',

    guideTitle: 'دليل الميزات',
    guideSubtitle: 'اكتشف كل ما يمكن لـ Dan AI فعله',
    guideChat: 'دردشة ذكاء اصطناعي متعددة الوسائط',
    guideChatDesc: 'تحدث مع ذكاء اصطناعي متقدم في 5 أوضاع متخصصة. يمكنك الكتابة أو التحدث، ويمكن لـ Dan AI قراءة الردود بصوت عالٍ بـ 6 لغات مختلفة، إلخ.',
    guideCoding: 'برمجة متقدمة',
    guideCodingDesc: 'أنشئ كودًا كاملاً وجاهزًا للإنتاج بأي لغة برمجة. تصحيح الأخطاء والتحسين والتحويل بين اللغات، إلخ.',
    guideAnalysis: 'تحليل الملفات وإخفاء المعلومات',
    guideAnalysisDesc: 'حلل أي نوع من الملفات: البيانات الوصفية والمحتوى المخفي وإخفاء المعلومات والتحليل الجنائي الرقمي، إلخ.',
    guideOsint: 'OSINT (استخبارات المصادر المفتوحة)',
    guideOsintDesc: 'أبحاث على المصادر المفتوحة: الأشخاص والنطاقات والبريد الإلكتروني وأسماء المستخدمين وتحليل IP والموقع الجغرافي، إلخ.',
    guideSearch: 'بحث عميق',
    guideSearchDesc: 'محرك بحث ذكاء اصطناعي متقدم يحلل مصادر متعددة وينتج تقارير معمقة، إلخ.',
    guideTerminal: 'طرفية مدمجة',
    guideTerminalDesc: 'طرفية متصلة بصندوق رمل على الخادم. نفذ أوامر حقيقية مع تثبيت تلقائي للأدوات، إلخ.',
    guideMultilang: 'متعدد اللغات',
    guideMultilangDesc: 'إدخال صوتي وتحويل النص إلى كلام بـ 6 لغات. الواجهة مترجمة بالكامل إلى جميع اللغات الست.',
    guideExport: 'تصدير',
    guideExportDesc: 'صدّر محادثاتك بتنسيق نصي أو JSON أو Markdown أو PDF. بياناتك ملكك دائمًا.',
    guideOffline: 'وضع عدم الاتصال',
    guideOfflineDesc: 'يتم حفظ المحادثات محليًا. تتم مزامنة الرسائل المرسلة بدون اتصال تلقائيًا.',
    guideNotifications: 'الإشعارات',
    guideNotificationsDesc: 'تلقَّ إشعارات عندما يكمل Dan AI ردًا في الخلفية.',
    guideTheme: 'سمة فاتحة/داكنة',
    guideThemeDesc: 'اختر بين سمة Cyber Dark وسمة فاتحة. يتم حفظ اختيارك تلقائيًا.',
    guidePrivacy: 'الخصوصية واللائحة العامة لحماية البيانات',
    guidePrivacyDesc: 'امتثال كامل للائحة (الاتحاد الأوروبي) 2016/679. حق حذف جميع البيانات في أي وقت.',
    guideGodMode: 'God Mode',
    guideGodModeDesc: 'وضع متقدم محجوز: ردود غير محدودة، معلمات LLM محسّنة، صندوق رمل بدون قيود.',
    guideCrossPlat: 'عبر المنصات',
    guideCrossPlatDesc: 'متاح كتطبيق أصلي لـ iOS وAndroid، كـ PWA قابل للتثبيت، وكموقع ويب، إلخ.',
  },
};

// ─── i18n Engine ───
let currentUILang = 'it';

function t(key) {
  const lang = translations[currentUILang] || translations.it;
  return lang[key] || translations.it[key] || key;
}

function setUILanguage(lang) {
  if (!translations[lang]) lang = 'it';
  currentUILang = lang;
  localStorage.setItem('danai_ui_lang', lang);

  // Set HTML direction for Arabic
  document.documentElement.dir = lang === 'ar' ? 'rtl' : 'ltr';
  document.documentElement.lang = lang;

  applyTranslations();
}

function loadUILanguage() {
  const saved = localStorage.getItem('danai_ui_lang');
  if (saved && translations[saved]) {
    currentUILang = saved;
  }
  document.documentElement.dir = currentUILang === 'ar' ? 'rtl' : 'ltr';
  document.documentElement.lang = currentUILang;
}

function applyTranslations() {
  // Login screen
  setText('.login-title', t('loginTitle'));
  setText('.login-subtitle', t('loginSubtitle'));
  const features = document.querySelectorAll('.feature-item');
  if (features[0]) features[0].innerHTML = `<span class="feature-icon">⌨️</span> ${t('loginFeature1')}`;
  if (features[1]) features[1].innerHTML = `<span class="feature-icon">🔍</span> ${t('loginFeature2')}`;
  if (features[2]) features[2].innerHTML = `<span class="feature-icon">🌐</span> ${t('loginFeature3')}`;
  if (features[3]) features[3].innerHTML = `<span class="feature-icon">💻</span> ${t('loginFeature4')}`;
  setAttr('#login-username', 'placeholder', t('loginUsernamePlaceholder'));
  setAttr('#login-password', 'placeholder', t('loginPasswordPlaceholder'));
  setText('#login-btn span', t('loginButton'));
  setText('.login-note', t('loginNote'));

  // Sidebar
  setText('.new-chat-btn', `<span>+</span> ${t('newChat')}`);
  const modeBtns = document.querySelectorAll('.mode-btn');
  modeBtns.forEach(btn => {
    const mode = btn.dataset.mode;
    const icons = { general: '💬', coding: '⌨️', analysis: '🔬', osint: '🕵️', search: '🔎' };
    const keys = { general: 'modeGeneral', coding: 'modeCoding', analysis: 'modeAnalysis', osint: 'modeOsint', search: 'modeSearch' };
    btn.textContent = `${icons[mode] || '💬'} ${t(keys[mode] || 'modeGeneral')}`;
  });
  setText('.history-label', t('history'));
  setAttr('.sidebar-toggle', 'title', t('closeSidebar'));

  // Sidebar footer
  const footerBtns = document.querySelectorAll('.sidebar-footer-btn');
  footerBtns.forEach(btn => {
    if (btn.id === 'god-mode-sidebar-btn') {
      btn.textContent = `⚡ ${t('godMode')}`;
    } else if (btn.textContent.includes('Terminal') || btn.textContent.includes('Terminale') || btn.textContent.includes('طرفية') || btn.textContent.includes('Werkzeuge')) {
      btn.textContent = `💻 ${t('terminal')}`;
    } else {
      btn.textContent = `⚙️ ${t('settings')}`;
    }
  });

  // Chat input
  setAttr('#chat-input', 'placeholder', t('inputPlaceholder'));
  setAttr('#voice-btn', 'title', t('voiceInput'));

  // Tab bar
  const tabBtns = document.querySelectorAll('.tab-btn');
  const tabKeys = ['tabChat', 'tabTools', 'tabTerminal', 'tabSettings'];
  tabBtns.forEach((btn, i) => {
    const label = btn.querySelector('.tab-label');
    if (label) label.textContent = t(tabKeys[i]);
  });

  // Tools panel
  setText('#tools-panel .panel-header h3', t('toolsTitle'));
  const toolSections = document.querySelectorAll('.tool-section-title');
  const sectionKeys = ['toolsCodingTitle', 'toolsAnalysisTitle', 'toolsOsintTitle', 'toolsSearchTitle'];
  const sectionIcons = ['⌨️', '🔬', '🕵️', '🔎'];
  toolSections.forEach((el, i) => {
    if (sectionKeys[i]) el.textContent = `${sectionIcons[i]} ${t(sectionKeys[i])}`;
  });

  // Tool buttons
  updateToolButtons();

  // Terminal
  setText('#terminal-title', state.godMode ? `⚡ ${t('terminalTitle')} — GOD MODE ⚡` : `💻 ${t('terminalTitle')}`);
  setAttr('#terminal-input', 'placeholder', t('terminalInputPlaceholder'));
  const clearBtn = document.querySelector('.terminal-action-btn');
  if (clearBtn) clearBtn.textContent = t('terminalClear');

  // Settings
  setText('#settings-panel .panel-header h3', t('settingsTitle'));
  updateSettingsLabels();

  // God Mode Dialog
  setText('.god-mode-title', t('godModeDialogTitle'));
  setText('.god-mode-confirm', t('godModeConfirm'));
  setText('.god-mode-cancel', t('godModeCancel'));

  // Privacy Dialog
  updatePrivacyDialog();

  // Update welcome area
  updateModeUI();

  // Update UI language selector
  const uiLangSelect = document.getElementById('ui-lang-select');
  if (uiLangSelect) uiLangSelect.value = currentUILang;
}

function updateToolButtons() {
  const toolSections = document.querySelectorAll('.tool-section');
  const toolConfig = [
    // Coding
    [
      { key: 'toolGenCode', promptKey: 'toolGenCodePrompt' },
      { key: 'toolDebugCode', promptKey: 'toolDebugCodePrompt' },
      { key: 'toolExplainCode', promptKey: 'toolExplainCodePrompt' },
      { key: 'toolConvertCode', promptKey: 'toolConvertCodePrompt' },
      { key: 'toolOptimize', promptKey: 'toolOptimizePrompt' },
      { key: 'toolGenTests', promptKey: 'toolGenTestsPrompt' },
    ],
    // Analysis
    [
      { key: 'toolAnalyzeFile', promptKey: 'toolAnalyzeFilePrompt' },
      { key: 'toolExtractMeta', promptKey: 'toolExtractMetaPrompt' },
      { key: 'toolStego', promptKey: 'toolStegoPrompt' },
      { key: 'toolDecode', promptKey: 'toolDecodePrompt' },
      { key: 'toolBinaryAnalysis', promptKey: 'toolBinaryPrompt' },
    ],
    // OSINT
    [
      { key: 'toolSearchPerson', promptKey: 'toolSearchPersonPrompt' },
      { key: 'toolAnalyzeDomain', promptKey: 'toolAnalyzeDomainPrompt' },
      { key: 'toolVerifyEmail', promptKey: 'toolVerifyEmailPrompt' },
      { key: 'toolSearchUsername', promptKey: 'toolSearchUsernamePrompt' },
      { key: 'toolTraceIP', promptKey: 'toolTraceIPPrompt' },
    ],
    // Deep Search
    [
      { key: 'toolDeepPerson', promptKey: 'toolDeepPersonPrompt' },
      { key: 'toolDeepCompany', promptKey: 'toolDeepCompanyPrompt' },
      { key: 'toolDeepTopic', promptKey: 'toolDeepTopicPrompt' },
      { key: 'toolCompareProducts', promptKey: 'toolComparePrompt' },
      { key: 'toolSearchNews', promptKey: 'toolSearchNewsPrompt' },
    ],
  ];

  toolSections.forEach((section, sIdx) => {
    const btns = section.querySelectorAll('.tool-btn');
    const config = toolConfig[sIdx] || [];
    btns.forEach((btn, bIdx) => {
      if (config[bIdx]) {
        btn.textContent = t(config[bIdx].key);
        btn.onclick = () => useTool(t(config[bIdx].promptKey));
      }
    });
  });
}

function updateSettingsLabels() {
  const sections = document.querySelectorAll('.settings-section');
  if (sections[0]) sections[0].querySelector('h4').textContent = `⚡ ${t('settingsAdvanced')}`;
  if (sections[1]) sections[1].querySelector('h4').textContent = `🗣️ ${t('settingsVoice')}`;

  // Appearance section is now in HTML (sections[4]), theme/lang selects are set by updateSettingsLabels
  // Set current values for theme and language selects
  const themeSelect = document.getElementById('theme-select');
  if (themeSelect) themeSelect.value = document.documentElement.dataset.theme || 'dark';
  const uiLangSelect2 = document.getElementById('ui-lang-select');
  if (uiLangSelect2) uiLangSelect2.value = currentUILang;

  // Voice & Language labels
  const voiceSection = sections[1];
  if (voiceSection) {
    const items = voiceSection.querySelectorAll('.setting-item');
    if (items[0]) items[0].querySelector('.setting-label').textContent = t('settingsVoiceLang');
    if (items[1]) items[1].querySelector('.setting-label').textContent = t('settingsTTS');
  }

  // Privacy section
  if (sections[2]) {
    sections[2].querySelector('h4').textContent = `🔒 ${t('settingsPrivacy')}`;
    const items = sections[2].querySelectorAll('.setting-item');
    if (items[0]) items[0].querySelector('.setting-label').textContent = t('settingsPrivacyInfo');
    if (items[1]) items[1].querySelector('.setting-label').textContent = t('settingsDeleteAll');
  }

  // Export section
  if (sections[3]) {
    sections[3].querySelector('h4').textContent = `📤 ${t('settingsExport')}`;
    const items = sections[3].querySelectorAll('.setting-item');
    if (items[0]) items[0].querySelector('.setting-label').textContent = t('settingsExportTxt');
    if (items[1]) items[1].querySelector('.setting-label').textContent = t('settingsExportMd');
    if (items[2]) items[2].querySelector('.setting-label').textContent = t('settingsExportPdf');
    if (items[3]) items[3].querySelector('.setting-label').textContent = t('settingsExportJson');
    if (items[4]) items[4].querySelector('.setting-label').textContent = t('settingsExportAll');
  }

  // Appearance section (from HTML)
  if (sections[4]) {
    sections[4].querySelector('h4').textContent = `🎨 ${t('settingsAppearance')}`;
    const items = sections[4].querySelectorAll('.setting-item');
    if (items[0]) items[0].querySelector('.setting-label').textContent = t('settingsTheme');
    if (items[1]) items[1].querySelector('.setting-label').textContent = t('settingsUILang');
  }

  // Guide section
  if (sections[5]) {
    sections[5].querySelector('h4').textContent = `📖 ${t('guideTitle')}`;
    const guideLabel = sections[5].querySelector('.setting-label');
    if (guideLabel) guideLabel.textContent = t('guideSubtitle');
    // If guide is open, refresh its content with new language
    const guideContent = document.getElementById('guide-content');
    if (guideContent && guideContent.style.display !== 'none') {
      if (typeof updateGuideContent === 'function') updateGuideContent();
    }
  }

  // Info section
  if (sections[6]) {
    sections[6].querySelector('h4').textContent = `ℹ️ ${t('settingsInfo')}`;
    const items = sections[6].querySelectorAll('.setting-item');
    if (items[0]) items[0].querySelector('.setting-label').textContent = t('settingsVersion');
    if (items[1]) items[1].querySelector('.setting-label').textContent = t('settingsPlatform');
    if (items[2]) items[2].querySelector('.setting-label').textContent = t('settingsServer');
    if (items[3]) items[3].querySelector('.setting-label').textContent = t('settingsLogout');
  }

  // God Mode settings
  const godLabel = document.getElementById('god-mode-label');
  if (godLabel) godLabel.textContent = state.godMode ? t('settingsGodModeActive') : t('settingsActivateGodMode');
  const godStatus = document.getElementById('god-mode-status');
  if (godStatus) godStatus.textContent = state.godMode ? t('settingsGodModeOn') : t('settingsGodModeOff');
}

function updatePrivacyDialog() {
  const dialog = document.querySelector('.privacy-dialog');
  if (!dialog) return;

  dialog.querySelector('h3').textContent = t('privacyTitle');
  const privacyText = dialog.querySelector('.privacy-text');
  if (privacyText) {
    privacyText.innerHTML = `
      <p><strong>${t('privacyMainTitle')}</strong></p>
      <p>${t('privacyRegulation')}</p>
      <p><strong>${t('privacyDataTitle')}</strong></p>
      <ul>
        <li>${t('privacyData1')}</li>
        <li>${t('privacyData2')}</li>
        <li>${t('privacyData3')}</li>
      </ul>
      <p><strong>${t('privacyRightsTitle')}</strong></p>
      <ul>
        <li>${t('privacyRight1')}</li>
        <li>${t('privacyRight2')}</li>
        <li>${t('privacyRight3')}</li>
        <li>${t('privacyRight4')}</li>
        <li>${t('privacyRight5')}</li>
      </ul>
      <p><strong>${t('privacyDeletionTitle')}</strong></p>
      <p>${t('privacyDeletionText')}</p>
      <p><strong>${t('privacyRetentionTitle')}</strong></p>
      <p>${t('privacyRetentionText')}</p>
    `;
  }
  const closeBtn = dialog.querySelector('.privacy-close-btn');
  if (closeBtn) closeBtn.textContent = t('privacyClose');
}

// ─── Helper Functions ───
function setText(selector, html) {
  const el = document.querySelector(selector);
  if (el) el.innerHTML = html;
}

function setAttr(selector, attr, value) {
  const el = document.querySelector(selector);
  if (el) el.setAttribute(attr, value);
}
