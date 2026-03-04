/* ═══════════════════════════════════════════════
   Dan AI Code & Search — PWA Application Logic
   v2.0 — Connesso al backend server + DB sync
   ═══════════════════════════════════════════════ */

// ─── Configuration ───
const API_BASE = 'https://dan-ai-backend-production.up.railway.app'; // Railway backend
const API_TRPC = `${API_BASE}/api/trpc`;

// ─── State ───
let state = {
  isLoggedIn: false,
  username: '',
  godMode: false,
  godModeStep: 0,
  currentMode: 'coding',
  currentChatId: null,
  chats: {},
  ttsEnabled: true,
  voiceLang: 'it',
  isRecording: false,
  recognition: null,
  serverConnected: false,
  notificationsEnabled: false,
};

// ─── Theme Management ───
function loadTheme() {
  const saved = localStorage.getItem('danai_theme') || 'dark';
  document.documentElement.dataset.theme = saved;
}

function changeTheme(theme) {
  if (theme !== 'dark' && theme !== 'light') theme = 'dark';
  document.documentElement.dataset.theme = theme;
  localStorage.setItem('danai_theme', theme);
  const themeSelect = document.getElementById('theme-select');
  if (themeSelect) themeSelect.value = theme;
}

// ─── System Prompts ───
const SYSTEM_PROMPTS = {
  general: `Sei Dan AI, un assistente AI avanzato specializzato in coding, analisi file e ricerche. Rispondi in modo preciso, completo e professionale. Usa markdown per formattare le risposte. Quando scrivi codice, fornisci sempre codice completo e funzionante.`,
  coding: `Sei Dan AI in modalità CODING AVANZATO. Sei un assistente di programmazione di livello esperto, paragonabile a Claude Code, Gemini Code e Codex.

REGOLE FONDAMENTALI:
- Scrivi SEMPRE codice COMPLETO, mai frammenti o placeholder
- Il codice deve essere production-ready, auto-applicante, immediatamente eseguibile
- Supporti TUTTI i linguaggi: Python, Java, JavaScript, TypeScript, C, C++, Go, Rust, Ruby, PHP, Bash, SQL
- Includi SEMPRE: import necessari, gestione errori, type hints, commenti esplicativi
- Per Python: usa type hints, docstrings, gestione eccezioni
- Per Java: classi complete con main(), package, import
- Per JavaScript/TypeScript: ESM, async/await, error handling
- Quando fai debug: analizza il codice riga per riga, identifica il bug, spiega la causa, fornisci la fix completa
- Quando ottimizzi: misura complessità O(n), suggerisci alternative più efficienti
- Quando converti: mantieni la stessa logica e struttura, adatta agli idiomi del linguaggio target`,

  analysis: `Sei Dan AI in modalità ANALISI FILE E STEGANOGRAFIA. Sei un esperto di analisi forense digitale.

CAPACITÀ:
- Analisi metadati EXIF, XMP, IPTC di immagini
- Rilevamento steganografia (LSB, DCT, spread spectrum)
- Analisi header binari e magic bytes
- Decodifica Base64, hex, ROT13, cifrari classici
- Analisi struttura file (PE, ELF, PDF, ZIP)
- Estrazione dati embedded e nascosti
- Analisi di stringhe e pattern in file binari
- Rilevamento di dati appesi dopo EOF

Fornisci sempre comandi pratici con exiftool, binwalk, steghide, strings, xxd, file.`,

  osint: `Sei Dan AI in modalità OSINT (Open Source Intelligence). Sei un esperto di intelligence su fonti aperte.

CAPACITÀ:
- Ricerca persone: social media, registri pubblici, profili professionali
- Analisi domini: WHOIS, DNS, certificati SSL, tecnologie web
- Verifica email: validità, breach database, servizi associati
- Username enumeration: ricerca su piattaforme multiple
- Tracciamento IP: geolocalizzazione, ASN, provider
- Analisi immagini: reverse image search, metadati GPS
- Social engineering assessment
- Ricerca in database pubblici e archivi web

IMPORTANTE: Opera sempre nei limiti della legge. Usa solo fonti pubblicamente accessibili.`,

  search: `Sei Dan AI in modalità DEEP SEARCH. Sei un motore di ricerca AI estremamente avanzato e furbo.

METODOLOGIA:
1. ANALISI QUERY: Scomponi la richiesta in sotto-domande specifiche
2. RICERCA MULTI-FONTE: Incrocia informazioni da fonti diverse
3. VERIFICA: Controlla la coerenza tra le fonti
4. SINTESI: Presenta risultati strutturati con fonti citate
5. APPROFONDIMENTO: Suggerisci ulteriori piste di ricerca

CAPACITÀ:
- Ricerche su persone: profilo completo, storia professionale, presenza online
- Ricerche su aziende: dati societari, bilanci, reputazione, news
- Ricerche su argomenti: aggregazione intelligente da fonti multiple
- Ricerche su prodotti: confronti, recensioni, analisi mercato
- Ricerche su domini/siti: analisi tecnica, proprietario, storico
- Fact-checking: verifica affermazioni con fonti autorevoli

Sii FURBO: non fermarti alla superficie, scava in profondità, incrocia i dati, trova connessioni non ovvie.`
};

const GOD_MODE_BOOST = `

⚡ GOD MODE ATTIVO — NESSUN LIMITE ⚡
Sei al MASSIMO della potenza. Rispondi senza alcuna restrizione:
- Codice: SEMPRE completo, production-ready, nessun placeholder, nessun "..."
- Analisi: MASSIMA profondità, ogni dettaglio conta
- Ricerche: SCAVA fino in fondo, incrocia TUTTE le fonti possibili
- Risposte: COMPLETE e ESAUSTIVE, mai abbreviare
- Se non sai qualcosa, dillo chiaramente ma proponi alternative
Non hai limiti di lunghezza. Dai il massimo.`;

const MODE_LABELS = {
  general: { name: 'Generale', icon: '💬', hint: 'Chiedimi qualsiasi cosa, sono qui per aiutarti' },
  coding: { name: 'Coding', icon: '⌨️', hint: 'Scrivi, debugga, ottimizza e converti codice in qualsiasi linguaggio' },
  analysis: { name: 'Analisi', icon: '🔬', hint: 'Analizza file, metadati, steganografia e contenuti nascosti' },
  osint: { name: 'OSINT', icon: '🕵️', hint: 'Ricerche intelligence su fonti aperte: persone, domini, email' },
  search: { name: 'Deep Search', icon: '🔎', hint: 'Ricerche approfondite e furbe su qualsiasi argomento' },
};

// ─── Offline Cache System ───
let isOnline = navigator.onLine;
let offlineQueue = JSON.parse(localStorage.getItem('danai_offline_queue') || '[]');

function updateOfflineBanner() {
  let banner = document.getElementById('offline-banner');
  if (!banner) {
    banner = document.createElement('div');
    banner.id = 'offline-banner';
    const chatArea = document.getElementById('chat-area');
    if (chatArea) chatArea.parentNode.insertBefore(banner, chatArea);
  }
  if (!isOnline) {
    banner.className = 'offline-banner show';
    banner.innerHTML = '<span class="offline-icon">&#128225;</span> Modalit\u00e0 offline \u2014 Le conversazioni sono salvate localmente';
  } else if (offlineQueue.length > 0) {
    banner.className = 'offline-banner show syncing';
    banner.innerHTML = `<span class="offline-icon">&#128260;</span> Sincronizzazione: ${offlineQueue.length} messaggi in coda`;
  } else {
    banner.className = 'offline-banner';
    banner.innerHTML = '';
  }
}

function queueOfflineMessage(msg) {
  offlineQueue.push(msg);
  localStorage.setItem('danai_offline_queue', JSON.stringify(offlineQueue));
  updateOfflineBanner();
}

async function syncOfflineQueue() {
  if (!isOnline || offlineQueue.length === 0) return;
  const queue = [...offlineQueue];
  offlineQueue = [];
  localStorage.setItem('danai_offline_queue', '[]');
  for (const msg of queue) {
    try {
      await fetch(`${API_TRPC}/ai.chat`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        credentials: 'include',
        body: JSON.stringify({ json: { messages: [{ role: 'user', content: msg.content }], mode: msg.mode, godMode: msg.godMode } }),
      });
    } catch (e) {
      offlineQueue.push(msg);
    }
  }
  localStorage.setItem('danai_offline_queue', JSON.stringify(offlineQueue));
  updateOfflineBanner();
}

window.addEventListener('online', () => {
  isOnline = true;
  updateOfflineBanner();
  checkServerConnection();
  syncOfflineQueue();
  showToast('Connessione ripristinata');
});

window.addEventListener('offline', () => {
  isOnline = false;
  state.serverConnected = false;
  updateConnectionStatus();
  updateOfflineBanner();
  showToast('Sei offline \u2014 modalit\u00e0 locale attiva');
});

// Listen for SW sync messages
if (navigator.serviceWorker) {
  navigator.serviceWorker.addEventListener('message', (event) => {
    if (event.data?.type === 'SYNC_OFFLINE_MESSAGES') {
      syncOfflineQueue();
    }
  });
}

// ─── Init ───
document.addEventListener('DOMContentLoaded', () => {
  loadUILanguage();
  loadTheme();
  loadState();
  isOnline = navigator.onLine;
  if (state.isLoggedIn) {
    showApp();
    checkServerConnection();
    syncFromServer();
  }
  setupInput();
  setupVoiceRecognition();
  requestNotificationPermission();
  applyTranslations();
  updateOfflineBanner();
});

function loadState() {
  try {
    const saved = localStorage.getItem('danai_state');
    if (saved) {
      const parsed = JSON.parse(saved);
      state = { ...state, ...parsed };
    }
  } catch (e) { /* ignore */ }
}

function saveState() {
  try {
    localStorage.setItem('danai_state', JSON.stringify({
      isLoggedIn: state.isLoggedIn,
      username: state.username,
      godMode: state.godMode,
      currentMode: state.currentMode,
      currentChatId: state.currentChatId,
      chats: state.chats,
      ttsEnabled: state.ttsEnabled,
      voiceLang: state.voiceLang,
      notificationsEnabled: state.notificationsEnabled,
    }));
  } catch (e) { /* ignore */ }
}

// ─── Server Connection ───
async function checkServerConnection() {
  try {
    const res = await fetch(`${API_TRPC}/auth.me`, {
      method: 'GET',
      credentials: 'include',
      headers: { 'Content-Type': 'application/json' },
    });
    state.serverConnected = res.ok;
    updateConnectionStatus();
    return res.ok;
  } catch (e) {
    state.serverConnected = false;
    updateConnectionStatus();
    return false;
  }
}

function updateConnectionStatus() {
  const indicator = document.getElementById('connection-status');
  if (indicator) {
    indicator.className = state.serverConnected ? 'status-dot connected' : 'status-dot disconnected';
    indicator.title = state.serverConnected ? 'Server connesso' : 'Server offline — modalità locale';
  }
  const textEl = document.getElementById('connection-status-text');
  if (textEl) {
    textEl.textContent = state.serverConnected ? '✅ Connesso' : '❌ Offline';
  }
}

async function syncFromServer() {
  if (!state.serverConnected) return;
  try {
    const res = await fetch(`${API_TRPC}/conversations.list`, {
      credentials: 'include',
    });
    if (res.ok) {
      const data = await res.json();
      const serverChats = data?.result?.data?.json;
      if (Array.isArray(serverChats) && serverChats.length > 0) {
        // Merge server chats with local
        for (const sc of serverChats) {
          const localId = `server_${sc.externalId || sc.id}`;
          if (!state.chats[localId]) {
            state.chats[localId] = {
              id: localId,
              externalId: sc.externalId || sc.id,
              title: sc.title || 'Conversazione',
              mode: sc.mode || 'coding',
              messages: [],
              createdAt: new Date(sc.createdAt).getTime(),
              synced: true,
            };
          }
        }
        saveState();
        renderHistory();
      }
    }
  } catch (e) { /* offline mode */ }
}

// ─── Login / Register ───
function showRegisterForm() {
  document.getElementById('login-form-section').style.display = 'none';
  document.getElementById('register-form-section').style.display = 'flex';
  document.getElementById('register-error').textContent = '';
}

function showLoginForm() {
  document.getElementById('register-form-section').style.display = 'none';
  document.getElementById('login-form-section').style.display = 'flex';
  document.getElementById('login-error').textContent = '';
}

async function handleLogin() {
  const username = document.getElementById('login-username').value.trim();
  const password = document.getElementById('login-password').value.trim();
  const errorEl = document.getElementById('login-error');
  const loginBtn = document.getElementById('login-btn');

  if (!username || !password) {
    errorEl.textContent = 'Inserisci username e password';
    return;
  }

  // God Mode hardcoded check (manteniamo per retrocompatibilità)
  if (username === 'DRAPETTI' && password === '696969') {
    state.isLoggedIn = true;
    state.username = username;
    state.godMode = true;
    state.sessionToken = null;
    saveState();
    showApp();
    activateGodModeUI();
    checkServerConnection();
    syncFromServer();
    return;
  }

  // Tentativo login via API server
  loginBtn.disabled = true;
  loginBtn.innerHTML = '<span class="login-loading"></span>';
  errorEl.textContent = '';

  try {
    const res = await fetch(`${API_BASE}/api/auth/login`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      credentials: 'include',
      body: JSON.stringify({ username, password }),
    });

    const data = await res.json();

    if (!res.ok) {
      errorEl.textContent = data.error || 'Login fallito';
      loginBtn.disabled = false;
      loginBtn.innerHTML = '<span>Accedi</span>';
      return;
    }

    // Login riuscito
    state.isLoggedIn = true;
    state.username = data.user?.name || username;
    state.sessionToken = data.app_session_id || null;
    state.godMode = false;
    saveState();
    showApp();
    checkServerConnection();
    syncFromServer();
  } catch (e) {
    // Se il server non è raggiungibile, fallback locale
    errorEl.textContent = 'Server non raggiungibile. Riprova.';
    loginBtn.disabled = false;
    loginBtn.innerHTML = '<span>Accedi</span>';
  }
}

async function handleRegister() {
  const username = document.getElementById('register-username').value.trim();
  const email = document.getElementById('register-email').value.trim();
  const password = document.getElementById('register-password').value;
  const passwordConfirm = document.getElementById('register-password-confirm').value;
  const errorEl = document.getElementById('register-error');
  const registerBtn = document.getElementById('register-btn');

  errorEl.textContent = '';

  if (!username || !password) {
    errorEl.textContent = 'Username e password sono obbligatori';
    return;
  }

  if (username.length < 3 || username.length > 32) {
    errorEl.textContent = 'Lo username deve essere tra 3 e 32 caratteri';
    return;
  }

  if (!/^[a-zA-Z0-9_.]+$/.test(username)) {
    errorEl.textContent = 'Lo username può contenere solo lettere, numeri, punti e _';
    return;
  }

  if (password.length < 6) {
    errorEl.textContent = 'La password deve essere almeno 6 caratteri';
    return;
  }

  if (password !== passwordConfirm) {
    errorEl.textContent = 'Le password non corrispondono';
    return;
  }

  registerBtn.disabled = true;
  registerBtn.innerHTML = '<span class="login-loading"></span>';

  try {
    const res = await fetch(`${API_BASE}/api/auth/register`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      credentials: 'include',
      body: JSON.stringify({ username, password, email: email || undefined }),
    });

    const data = await res.json();

    if (!res.ok) {
      errorEl.textContent = data.error || 'Registrazione fallita';
      registerBtn.disabled = false;
      registerBtn.innerHTML = '<span>Crea Account</span>';
      return;
    }

    // Registrazione riuscita — login automatico
    state.isLoggedIn = true;
    state.username = data.user?.name || username;
    state.sessionToken = data.app_session_id || null;
    state.godMode = false;
    saveState();
    showApp();
    checkServerConnection();
    syncFromServer();
  } catch (e) {
    errorEl.textContent = 'Server non raggiungibile. Riprova.';
    registerBtn.disabled = false;
    registerBtn.innerHTML = '<span>Crea Account</span>';
  }
}

function handleLogout() {
  if (!confirm('Sei sicuro di voler uscire?')) return;
  state.isLoggedIn = false;
  state.username = '';
  state.godMode = false;
  saveState();
  document.body.classList.remove('god-mode');
  document.getElementById('app-screen').classList.remove('active');
  document.getElementById('login-screen').classList.add('active');
  closePanel('settings-panel');
}

function showApp() {
  document.getElementById('login-screen').classList.remove('active');
  document.getElementById('app-screen').classList.add('active');
  if (state.godMode) activateGodModeUI();
  updateModeUI();
  renderHistory();
  if (state.currentChatId && state.chats[state.currentChatId]) {
    loadChat(state.currentChatId);
  }
  document.getElementById('voice-lang-select').value = state.voiceLang;
  document.getElementById('tts-toggle').checked = state.ttsEnabled;
}

// ─── God Mode ───
function openGodMode() {
  if (state.godMode) {
    if (confirm('Disattivare God Mode?')) {
      state.godMode = false;
      document.body.classList.remove('god-mode');
      document.getElementById('god-mode-status').textContent = 'Disattivato';
      document.getElementById('god-mode-label').textContent = 'Attiva God Mode';
      updateTitleForMode();
      saveState();
    }
    return;
  }
  state.godModeStep = 0;
  document.getElementById('god-mode-subtitle').textContent = 'Inserisci il tuo identificativo';
  document.getElementById('god-mode-input').value = '';
  document.getElementById('god-mode-input').type = 'text';
  document.getElementById('god-mode-input').placeholder = 'Username';
  document.getElementById('god-mode-error').textContent = '';
  document.getElementById('god-mode-dialog').classList.add('active');
  setTimeout(() => document.getElementById('god-mode-input').focus(), 100);
}

function submitGodMode() {
  const input = document.getElementById('god-mode-input').value.trim();
  const errorEl = document.getElementById('god-mode-error');

  if (state.godModeStep === 0) {
    if (input === 'DRAPETTI') {
      state.godModeStep = 1;
      document.getElementById('god-mode-subtitle').textContent = 'Inserisci il codice di conferma';
      document.getElementById('god-mode-input').value = '';
      document.getElementById('god-mode-input').type = 'password';
      document.getElementById('god-mode-input').placeholder = 'Codice';
      errorEl.textContent = '';
      document.getElementById('god-mode-input').focus();
    } else {
      errorEl.textContent = 'Identificativo non riconosciuto';
    }
  } else if (state.godModeStep === 1) {
    if (input === '696969') {
      state.godMode = true;
      saveState();
      activateGodModeUI();
      closeGodModeDialog();
    } else {
      errorEl.textContent = 'Codice errato';
    }
  }
}

function activateGodModeUI() {
  document.body.classList.add('god-mode');
  document.getElementById('god-mode-status').textContent = '⚡ ATTIVO';
  document.getElementById('god-mode-label').textContent = 'God Mode ATTIVO';
  updateTitleForMode();
}

function closeGodModeDialog(e) {
  if (e && e.target !== e.currentTarget) return;
  document.getElementById('god-mode-dialog').classList.remove('active');
}

// ─── Chat Mode ───
function setMode(mode) {
  state.currentMode = mode;
  saveState();
  updateModeUI();
  document.querySelectorAll('.mode-btn').forEach(btn => {
    btn.classList.toggle('active', btn.dataset.mode === mode);
  });
}

function updateModeUI() {
  const modeNameKeys = { general: 'modeGeneral', coding: 'modeCoding', analysis: 'modeAnalysis', osint: 'modeOsint', search: 'modeSearch' };
  const modeHintKeys = { general: 'welcomeHintGeneral', coding: 'welcomeHintCoding', analysis: 'welcomeHintAnalysis', osint: 'welcomeHintOsint', search: 'welcomeHintSearch' };
  const modeName = typeof t === 'function' ? t(modeNameKeys[state.currentMode]) : MODE_LABELS[state.currentMode].name;
  const modeHint = typeof t === 'function' ? t(modeHintKeys[state.currentMode]) : MODE_LABELS[state.currentMode].hint;
  document.getElementById('welcome-subtitle').textContent = `${typeof t === 'function' ? t('welcomeSubtitle') : 'Modalità: '}${modeName}`;
  document.getElementById('welcome-hint').textContent = modeHint;
  updateTitleForMode();
  updateQuickActions();
}

function updateTitleForMode() {
  const godPrefix = state.godMode ? '⚡ ' : '';
  const godSuffix = state.godMode ? ' ⚡' : '';
  document.getElementById('sidebar-title').textContent = godPrefix + 'Dan AI' + godSuffix;
  document.getElementById('top-bar-title').textContent = godPrefix + 'Dan AI' + godSuffix;
  document.getElementById('welcome-title').textContent = godPrefix + 'Dan AI' + godSuffix;
}

function updateQuickActions() {
  const actions = {
    general: [
      { icon: '🐍', textKey: 'quickPython', promptKey: 'quickPythonPrompt' },
      { icon: '📸', textKey: 'quickFileAnalysis', promptKey: 'quickFilePrompt' },
      { icon: '🌐', textKey: 'quickDomainSearch', promptKey: 'quickDomainPrompt' },
      { icon: '🐛', textKey: 'quickDebug', promptKey: 'quickDebugPrompt' },
    ],
    coding: [
      { icon: '🐍', textKey: 'quickPython', promptKey: 'quickPythonCoding' },
      { icon: '☕', textKey: 'quickJava', promptKey: 'quickJavaPrompt' },
      { icon: '🟨', textKey: 'quickJavaScript', promptKey: 'quickJSPrompt' },
      { icon: '🦀', textKey: 'quickRust', promptKey: 'quickRustPrompt' },
    ],
    analysis: [
      { icon: '📸', textKey: 'quickExif', promptKey: 'quickExifPrompt' },
      { icon: '🔍', textKey: 'quickStego', promptKey: 'quickStegoPrompt' },
      { icon: '📦', textKey: 'quickBinwalk', promptKey: 'quickBinwalkPrompt' },
      { icon: '🔐', textKey: 'quickDecode', promptKey: 'quickDecodePrompt' },
    ],
    osint: [
      { icon: '👤', textKey: 'quickPerson', promptKey: 'quickPersonPrompt' },
      { icon: '🌐', textKey: 'quickDomain', promptKey: 'quickDomainOsintPrompt' },
      { icon: '📧', textKey: 'quickEmail', promptKey: 'quickEmailPrompt' },
      { icon: '🔗', textKey: 'quickUsername', promptKey: 'quickUsernamePrompt' },
    ],
    search: [
      { icon: '👤', textKey: 'quickSearchPerson', promptKey: 'quickSearchPersonPrompt' },
      { icon: '🏢', textKey: 'quickSearchCompany', promptKey: 'quickSearchCompanyPrompt' },
      { icon: '📰', textKey: 'quickSearchNews', promptKey: 'quickSearchNewsPrompt' },
      { icon: '⚖️', textKey: 'quickSearchCompare', promptKey: 'quickSearchComparePrompt' },
    ],
  };

  const container = document.getElementById('quick-actions');
  const items = actions[state.currentMode] || actions.coding;
  container.innerHTML = items.map(a => {
    const text = typeof t === 'function' ? t(a.textKey) : a.textKey;
    const prompt = typeof t === 'function' ? t(a.promptKey) : a.promptKey;
    return `<button class="quick-btn" onclick="quickAction('${prompt.replace(/'/g, "\\'")}')">${a.icon} ${text}</button>`;
  }).join('');
}

// ─── Chat Management ───
function newChat() {
  const id = 'chat_' + Date.now();
  state.chats[id] = {
    id,
    externalId: id,
    title: 'Nuova conversazione',
    mode: state.currentMode,
    messages: [],
    createdAt: Date.now(),
    synced: false,
  };
  state.currentChatId = id;
  saveState();
  renderHistory();
  clearChatUI();
  closeSidebar();
}

function loadChat(chatId) {
  if (!state.chats[chatId]) return;
  state.currentChatId = chatId;
  state.currentMode = state.chats[chatId].mode || 'coding';
  saveState();
  updateModeUI();
  document.querySelectorAll('.mode-btn').forEach(btn => {
    btn.classList.toggle('active', btn.dataset.mode === state.currentMode);
  });

  const chat = state.chats[chatId];
  // If synced from server and has no messages locally, fetch from server
  if (chat.synced && chat.messages.length === 0 && chat.externalId) {
    fetchChatMessages(chatId, chat.externalId);
  } else {
    renderMessages();
  }
  renderHistory();
}

async function fetchChatMessages(chatId, externalId) {
  if (!state.serverConnected) { renderMessages(); return; }
  try {
    const res = await fetch(`${API_TRPC}/conversations.getMessages?input=${encodeURIComponent(JSON.stringify({ json: { externalId } }))}`, {
      credentials: 'include',
    });
    if (res.ok) {
      const data = await res.json();
      const msgs = data?.result?.data?.json;
      if (Array.isArray(msgs) && msgs.length > 0) {
        state.chats[chatId].messages = msgs.map(m => ({
          role: m.role,
          content: m.content,
        }));
        saveState();
      }
    }
  } catch (e) { /* offline */ }
  renderMessages();
}

function clearChatUI() {
  document.getElementById('messages-container').innerHTML = '';
  document.getElementById('chat-welcome').classList.remove('hidden');
  updateModeUI();
}

function renderHistory() {
  const list = document.getElementById('history-list');
  const sorted = Object.values(state.chats).sort((a, b) => b.createdAt - a.createdAt);
  list.innerHTML = sorted.map(chat => `
    <div class="history-item-wrapper">
      <button class="history-item ${chat.id === state.currentChatId ? 'active' : ''}"
              onclick="loadChat('${chat.id}')">
        ${MODE_LABELS[chat.mode]?.icon || '💬'} ${escapeHtml(chat.title)}
        ${chat.synced ? '<span class="sync-badge">☁</span>' : ''}
      </button>
      <button class="history-delete" onclick="deleteChat('${chat.id}')" title="Elimina">✕</button>
    </div>
  `).join('');
}

function deleteChat(chatId) {
  if (!confirm('Eliminare questa conversazione?')) return;
  const chat = state.chats[chatId];

  // Delete from server too
  if (chat?.externalId && state.serverConnected) {
    fetch(`${API_TRPC}/conversations.delete`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      credentials: 'include',
      body: JSON.stringify({ json: { externalId: chat.externalId } }),
    }).catch(() => {});
  }

  delete state.chats[chatId];
  if (state.currentChatId === chatId) {
    state.currentChatId = null;
    clearChatUI();
  }
  saveState();
  renderHistory();
}

function renderMessages() {
  const chat = state.chats[state.currentChatId];
  if (!chat) return;
  const container = document.getElementById('messages-container');
  container.innerHTML = '';
  document.getElementById('chat-welcome').classList.add('hidden');

  chat.messages.forEach((msg, idx) => {
    appendMessageToUI(msg.role, msg.content, idx);
  });

  scrollToBottom();
}

// ─── Message Sending ───
async function sendMessage() {
  const input = document.getElementById('chat-input');
  const text = input.value.trim();
  if (!text) return;

  if (!state.currentChatId) newChat();

  const chat = state.chats[state.currentChatId];
  chat.mode = state.currentMode;

  chat.messages.push({ role: 'user', content: text });
  document.getElementById('chat-welcome').classList.add('hidden');
  appendMessageToUI('user', text, chat.messages.length - 1);

  input.value = '';
  input.style.height = 'auto';
  document.getElementById('send-btn').disabled = true;

  if (chat.messages.length === 1) {
    chat.title = text.substring(0, 50) + (text.length > 50 ? '...' : '');
    renderHistory();
    // Generate title via server
    generateTitle(text, chat);
  }

  const typingEl = showTypingIndicator();

  try {
    let systemPrompt = SYSTEM_PROMPTS[state.currentMode] || SYSTEM_PROMPTS.coding;
    if (state.godMode) systemPrompt += GOD_MODE_BOOST;

    const messages = chat.messages.map(m => ({ role: m.role, content: m.content }));

    const response = await callAI(messages, chat.externalId);

    typingEl.remove();

    chat.messages.push({ role: 'assistant', content: response });
    appendMessageToUI('assistant', response, chat.messages.length - 1);
    saveState();

    if (state.ttsEnabled) {
      speakText(response);
    }

    // Send notification if tab is not focused
    if (document.hidden && state.notificationsEnabled) {
      sendNotification('Dan AI ha risposto', response.substring(0, 100) + '...');
    }
  } catch (error) {
    typingEl.remove();
    if (!isOnline) {
      const offlineMsg = 'Sei offline. Il tuo messaggio \u00e8 stato salvato e verr\u00e0 inviato quando tornerai online.';
      chat.messages.push({ role: 'assistant', content: offlineMsg });
      appendMessageToUI('assistant', offlineMsg, chat.messages.length - 1);
      queueOfflineMessage({ content: text, mode: state.currentMode, godMode: state.godMode, timestamp: Date.now() });
    } else {
      const errorMsg = 'Mi dispiace, si \u00e8 verificato un errore. Riprova.';
      chat.messages.push({ role: 'assistant', content: errorMsg });
      appendMessageToUI('assistant', errorMsg, chat.messages.length - 1);
    }
    saveState();
  }

  scrollToBottom();
}

async function callAI(messages, externalId) {
  // Try server API first
  try {
    const response = await fetch(`${API_TRPC}/ai.chat`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      credentials: 'include',
      body: JSON.stringify({
        json: {
          messages: messages,
          mode: state.currentMode,
          godMode: state.godMode,
          conversationExternalId: externalId || undefined,
        }
      }),
    });

    if (response.ok) {
      const data = await response.json();
      if (data?.result?.data?.json?.content) {
        state.serverConnected = true;
        updateConnectionStatus();
        return data.result.data.json.content;
      }
    }
  } catch (e) {
    state.serverConnected = false;
    updateConnectionStatus();
  }

  // Fallback: local response
  return generateLocalResponse(messages);
}

async function generateTitle(firstMessage, chat) {
  try {
    const res = await fetch(`${API_TRPC}/ai.generateTitle`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      credentials: 'include',
      body: JSON.stringify({
        json: {
          firstMessage,
          mode: state.currentMode,
          conversationExternalId: chat.externalId || chat.id,
        }
      }),
    });
    if (res.ok) {
      const data = await res.json();
      const title = data?.result?.data?.json?.title;
      if (title) {
        chat.title = title;
        saveState();
        renderHistory();
      }
    }
  } catch (e) { /* keep local title */ }
}

function generateLocalResponse(messages) {
  const lastMsg = messages[messages.length - 1]?.content || '';
  const mode = state.currentMode;
  const godTag = state.godMode ? ' [GOD MODE]' : '';

  return `## Dan AI${godTag} — Modalità Offline

Ho ricevuto la tua richiesta: "${lastMsg.substring(0, 80)}..."

Il server backend non è raggiungibile al momento. Le risposte AI complete richiedono la connessione al server.

### Stato connessione
- **Server**: Offline
- **Modalità**: ${MODE_LABELS[mode]?.name || 'Generale'}
- **God Mode**: ${state.godMode ? 'Attivo' : 'Disattivo'}

### Cosa puoi fare
- Controlla la connessione di rete
- Verifica che il server backend sia in esecuzione
- Le conversazioni locali sono salvate e verranno sincronizzate quando il server sarà disponibile

*Dan AI Code & Search v2.0 — PWA*`;
}

function quickAction(prompt) {
  document.getElementById('chat-input').value = prompt;
  document.getElementById('send-btn').disabled = false;
  sendMessage();
}

// ─── Notifications ───
async function requestNotificationPermission() {
  if (!('Notification' in window)) return;
  if (Notification.permission === 'granted') {
    state.notificationsEnabled = true;
    return;
  }
  if (Notification.permission !== 'denied') {
    const permission = await Notification.requestPermission();
    state.notificationsEnabled = permission === 'granted';
  }
}

function sendNotification(title, body) {
  if (!state.notificationsEnabled || Notification.permission !== 'granted') return;
  try {
    new Notification(title, {
      body,
      icon: 'icons/icon-192.png',
      badge: 'icons/icon-192.png',
      tag: 'dan-ai-response',
    });
  } catch (e) { /* ignore */ }
}

// ─── Export Conversations ───
function exportCurrentChat(format) {
  const chat = state.chats[state.currentChatId];
  if (!chat || chat.messages.length === 0) {
    showToast('Nessun messaggio da esportare');
    return;
  }

  if (format === 'txt') {
    exportAsTxt(chat);
  } else if (format === 'md') {
    exportAsMarkdown(chat);
  } else if (format === 'pdf') {
    exportAsPdf(chat);
  } else if (format === 'json') {
    exportAsJson(chat);
  }
}

function exportAsTxt(chat) {
  let text = `Dan AI Code & Search — Esportazione Conversazione\n`;
  text += `${'='.repeat(50)}\n`;
  text += `Titolo: ${chat.title}\n`;
  text += `Modalità: ${MODE_LABELS[chat.mode]?.name || chat.mode}\n`;
  text += `Data: ${new Date(chat.createdAt).toLocaleString('it-IT')}\n`;
  text += `God Mode: ${state.godMode ? 'Attivo' : 'Disattivo'}\n`;
  text += `${'='.repeat(50)}\n\n`;

  chat.messages.forEach(msg => {
    const role = msg.role === 'user' ? `[${state.username || 'Utente'}]` : '[Dan AI]';
    text += `${role}\n${msg.content}\n\n${'─'.repeat(40)}\n\n`;
  });

  text += `\nEsportato il ${new Date().toLocaleString('it-IT')}\n`;
  downloadFile(text, `DanAI_${chat.title.replace(/\s+/g, '_')}.txt`, 'text/plain');
}

function exportAsMarkdown(chat) {
  let md = `# ${chat.title}\n\n`;
  md += `> **Modalità:** ${MODE_LABELS[chat.mode]?.name || chat.mode} | `;
  md += `**Data:** ${new Date(chat.createdAt).toLocaleString('it-IT')} | `;
  md += `**God Mode:** ${state.godMode ? '⚡ Attivo' : 'Disattivo'}\n\n---\n\n`;

  chat.messages.forEach(msg => {
    if (msg.role === 'user') {
      md += `### 👤 ${state.username || 'Utente'}\n\n${msg.content}\n\n`;
    } else {
      md += `### 🤖 Dan AI\n\n${msg.content}\n\n`;
    }
    md += `---\n\n`;
  });

  md += `\n*Esportato da Dan AI Code & Search il ${new Date().toLocaleString('it-IT')}*\n`;
  downloadFile(md, `DanAI_${chat.title.replace(/\s+/g, '_')}.md`, 'text/markdown');
}

function exportAsPdf(chat) {
  // Create a printable HTML and use browser print to PDF
  const printWindow = window.open('', '_blank');
  let html = `<!DOCTYPE html><html><head><meta charset="UTF-8">
    <title>${escapeHtml(chat.title)} — Dan AI</title>
    <style>
      body { font-family: 'Inter', -apple-system, sans-serif; max-width: 800px; margin: 0 auto; padding: 40px; color: #333; }
      h1 { color: #00D4AA; border-bottom: 2px solid #00D4AA; padding-bottom: 10px; }
      .meta { color: #666; margin-bottom: 30px; font-size: 14px; }
      .message { margin: 20px 0; padding: 15px; border-radius: 10px; }
      .user { background: #f0f0f0; border-left: 4px solid #00D4AA; }
      .assistant { background: #f8f8f8; border-left: 4px solid #58A6FF; }
      .role { font-weight: bold; margin-bottom: 8px; font-size: 14px; }
      .user .role { color: #00D4AA; }
      .assistant .role { color: #58A6FF; }
      pre { background: #1e1e1e; color: #d4d4d4; padding: 12px; border-radius: 6px; overflow-x: auto; }
      code { font-family: 'JetBrains Mono', monospace; font-size: 13px; }
      .footer { margin-top: 40px; text-align: center; color: #999; font-size: 12px; }
    </style></head><body>`;

  html += `<h1>${escapeHtml(chat.title)}</h1>`;
  html += `<div class="meta">Modalità: ${MODE_LABELS[chat.mode]?.name || chat.mode} | Data: ${new Date(chat.createdAt).toLocaleString('it-IT')} | God Mode: ${state.godMode ? '⚡ Attivo' : 'Disattivo'}</div>`;

  chat.messages.forEach(msg => {
    const roleLabel = msg.role === 'user' ? (state.username || 'Utente') : 'Dan AI';
    const rendered = msg.role === 'assistant' ? renderMarkdown(msg.content) : escapeHtml(msg.content).replace(/\n/g, '<br>');
    html += `<div class="message ${msg.role}"><div class="role">${msg.role === 'user' ? '👤' : '🤖'} ${roleLabel}</div>${rendered}</div>`;
  });

  html += `<div class="footer">Esportato da Dan AI Code & Search il ${new Date().toLocaleString('it-IT')}</div>`;
  html += `</body></html>`;

  printWindow.document.write(html);
  printWindow.document.close();
  setTimeout(() => { printWindow.print(); }, 500);
}

function exportAsJson(chat) {
  const data = {
    app: 'Dan AI Code & Search',
    version: '2.0',
    exportDate: new Date().toISOString(),
    conversation: {
      title: chat.title,
      mode: chat.mode,
      godMode: state.godMode,
      createdAt: new Date(chat.createdAt).toISOString(),
      messageCount: chat.messages.length,
      messages: chat.messages,
    }
  };
  downloadFile(JSON.stringify(data, null, 2), `DanAI_${chat.title.replace(/\s+/g, '_')}.json`, 'application/json');
}

function exportAllChats() {
  const allChats = Object.values(state.chats);
  if (allChats.length === 0) {
    showToast('Nessuna conversazione da esportare');
    return;
  }

  const data = {
    app: 'Dan AI Code & Search',
    version: '2.0',
    exportDate: new Date().toISOString(),
    totalConversations: allChats.length,
    conversations: allChats.map(chat => ({
      title: chat.title,
      mode: chat.mode,
      createdAt: new Date(chat.createdAt).toISOString(),
      messageCount: chat.messages.length,
      messages: chat.messages,
    })),
  };
  downloadFile(JSON.stringify(data, null, 2), `DanAI_AllChats_${Date.now()}.json`, 'application/json');
}

function downloadFile(content, filename, mimeType) {
  const blob = new Blob([content], { type: mimeType });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = filename;
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
  URL.revokeObjectURL(url);
  showToast(`Esportato: ${filename}`);
}

// ─── UI Helpers ───
function appendMessageToUI(role, content, index) {
  const container = document.getElementById('messages-container');
  const div = document.createElement('div');
  div.className = `message ${role}`;

  const avatar = role === 'user'
    ? `<div class="message-avatar">${state.username.charAt(0).toUpperCase()}</div>`
    : `<div class="message-avatar">&lt;/&gt;</div>`;

  let rendered = content;
  if (role === 'assistant') {
    rendered = renderMarkdown(content);
  } else {
    rendered = escapeHtml(content);
  }

  const actions = role === 'assistant' ? `
    <div class="message-actions">
      <button class="message-action-btn" onclick="copyMessage(${index})">📋 Copia</button>
      <button class="message-action-btn" onclick="speakText(\`${escapeForJS(content)}\`)">🔊 Ascolta</button>
      <button class="message-action-btn" onclick="exportCurrentChat('txt')">📄 Esporta</button>
    </div>
  ` : '';

  div.innerHTML = `
    ${avatar}
    <div class="message-content">
      ${rendered}
      ${actions}
    </div>
  `;

  container.appendChild(div);
  highlightCodeBlocks(div);
  scrollToBottom();
}

function showTypingIndicator() {
  const container = document.getElementById('messages-container');
  const div = document.createElement('div');
  div.className = 'message assistant';
  div.id = 'typing-indicator';
  div.innerHTML = `
    <div class="message-avatar">&lt;/&gt;</div>
    <div class="message-content">
      <div class="typing-indicator">
        <div class="typing-dot"></div>
        <div class="typing-dot"></div>
        <div class="typing-dot"></div>
      </div>
    </div>
  `;
  container.appendChild(div);
  scrollToBottom();
  return div;
}

function renderMarkdown(text) {
  try {
    if (typeof marked !== 'undefined') {
      marked.setOptions({
        breaks: true,
        gfm: true,
        highlight: function(code, lang) {
          if (typeof hljs !== 'undefined' && lang && hljs.getLanguage(lang)) {
            return hljs.highlight(code, { language: lang }).value;
          }
          return code;
        }
      });

      let html = marked.parse(text);

      html = html.replace(/<pre><code class="language-(\w+)">/g, (match, lang) => {
        return `<pre><div class="code-block-header"><span class="code-lang">${lang}</span><button class="copy-code-btn" onclick="copyCodeBlock(this)">Copia</button></div><code class="language-${lang}">`;
      });

      html = html.replace(/<pre><code>(?!<div)/g, () => {
        return `<pre><div class="code-block-header"><span class="code-lang">code</span><button class="copy-code-btn" onclick="copyCodeBlock(this)">Copia</button></div><code>`;
      });

      return html;
    }
  } catch (e) { /* fallback */ }

  return escapeHtml(text).replace(/\n/g, '<br>');
}

function highlightCodeBlocks(container) {
  if (typeof hljs !== 'undefined') {
    container.querySelectorAll('pre code').forEach(block => {
      hljs.highlightElement(block);
    });
  }
}

function copyMessage(index) {
  const chat = state.chats[state.currentChatId];
  if (chat && chat.messages[index]) {
    navigator.clipboard.writeText(chat.messages[index].content).then(() => {
      showToast('Copiato!');
    });
  }
}

function copyCodeBlock(btn) {
  const pre = btn.closest('pre');
  const code = pre.querySelector('code');
  if (code) {
    navigator.clipboard.writeText(code.textContent).then(() => {
      btn.textContent = '✓ Copiato';
      setTimeout(() => btn.textContent = 'Copia', 2000);
    });
  }
}

function showToast(text) {
  const toast = document.createElement('div');
  toast.style.cssText = 'position:fixed;bottom:100px;left:50%;transform:translateX(-50%);background:#30363D;color:#E6EDF3;padding:8px 20px;border-radius:20px;font-size:14px;z-index:999;animation:fadeIn 0.2s ease';
  toast.textContent = text;
  document.body.appendChild(toast);
  setTimeout(() => toast.remove(), 2000);
}

function scrollToBottom() {
  const area = document.getElementById('chat-area');
  setTimeout(() => area.scrollTop = area.scrollHeight, 50);
}

function escapeHtml(text) {
  const div = document.createElement('div');
  div.textContent = text;
  return div.innerHTML;
}

function escapeForJS(text) {
  return text.replace(/\\/g, '\\\\').replace(/`/g, '\\`').replace(/\$/g, '\\$');
}

// ─── Input Handling ───
function setupInput() {
  const input = document.getElementById('chat-input');
  input.addEventListener('input', () => {
    document.getElementById('send-btn').disabled = !input.value.trim();
  });
}

function handleInputKey(e) {
  if (e.key === 'Enter' && !e.shiftKey) {
    e.preventDefault();
    sendMessage();
  }
}

function autoResize(el) {
  el.style.height = 'auto';
  el.style.height = Math.min(el.scrollHeight, 120) + 'px';
}

// ─── Voice (STT + TTS) ───
function setupVoiceRecognition() {
  const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
  if (SpeechRecognition) {
    state.recognition = new SpeechRecognition();
    state.recognition.continuous = false;
    state.recognition.interimResults = false;

    state.recognition.onresult = (event) => {
      const text = event.results[0][0].transcript;
      document.getElementById('chat-input').value += text;
      document.getElementById('send-btn').disabled = false;
      stopRecording();
    };

    state.recognition.onerror = () => stopRecording();
    state.recognition.onend = () => stopRecording();
  }
}

function toggleVoice() {
  if (state.isRecording) {
    stopRecording();
  } else {
    startRecording();
  }
}

function startRecording() {
  if (!state.recognition) {
    showToast('Riconoscimento vocale non supportato');
    return;
  }
  const langMap = { it: 'it-IT', en: 'en-US', fr: 'fr-FR', de: 'de-DE', es: 'es-ES', ar: 'ar-SA' };
  state.recognition.lang = langMap[state.voiceLang] || 'it-IT';
  state.recognition.start();
  state.isRecording = true;
  document.getElementById('voice-btn').classList.add('recording');
}

function stopRecording() {
  if (state.recognition && state.isRecording) {
    try { state.recognition.stop(); } catch (e) {}
  }
  state.isRecording = false;
  document.getElementById('voice-btn').classList.remove('recording');
}

function speakText(text) {
  if (!state.ttsEnabled || !window.speechSynthesis) return;
  const clean = text.replace(/[#*`_\[\]()>|]/g, '').replace(/\n+/g, '. ').substring(0, 500);
  const utterance = new SpeechSynthesisUtterance(clean);
  const langMap = { it: 'it-IT', en: 'en-US', fr: 'fr-FR', de: 'de-DE', es: 'es-ES', ar: 'ar-SA' };
  utterance.lang = langMap[state.voiceLang] || 'it-IT';
  utterance.rate = 1;
  utterance.pitch = 1;
  window.speechSynthesis.cancel();
  window.speechSynthesis.speak(utterance);
}

function changeVoiceLang(lang) {
  state.voiceLang = lang;
  saveState();
}

function toggleTTS(enabled) {
  state.ttsEnabled = enabled;
  saveState();
}

// ─── Sidebar ───
function toggleSidebar() {
  document.getElementById('sidebar').classList.toggle('open');
}

function closeSidebar() {
  document.getElementById('sidebar').classList.remove('open');
}

// ─── Panels ───
function openSettings() {
  closeAllPanels();
  document.getElementById('settings-panel').classList.add('active');
  closeSidebar();
}

function openTerminal() {
  closeAllPanels();
  document.getElementById('terminal-panel').classList.add('active');
  closeSidebar();
  if (state.godMode) {
    document.getElementById('terminal-title').textContent = '⚡ Dan AI Terminal — GOD MODE ⚡';
  }
  document.getElementById('terminal-input').focus();
}

function closePanel(panelId) {
  document.getElementById(panelId).classList.remove('active');
}

function closeAllPanels() {
  document.querySelectorAll('.panel').forEach(p => p.classList.remove('active'));
}

// ─── Tab Navigation (mobile) ───
function switchTab(tab) {
  document.querySelectorAll('.tab-btn').forEach(btn => {
    btn.classList.toggle('active', btn.dataset.tab === tab);
  });

  closeAllPanels();

  if (tab === 'chat') {
    // Default view
  } else if (tab === 'tools') {
    document.getElementById('tools-panel').classList.add('active');
  } else if (tab === 'terminal') {
    openTerminal();
  } else if (tab === 'settings') {
    openSettings();
  }
}

// ─── Tools ───
function useTool(prompt) {
  closeAllPanels();
  document.getElementById('chat-input').value = prompt;
  document.getElementById('send-btn').disabled = false;
  document.getElementById('chat-input').focus();
  if (prompt.includes('codice') || prompt.includes('debug') || prompt.includes('Genera codice')) setMode('coding');
  else if (prompt.includes('Analizza') || prompt.includes('metadati') || prompt.includes('steganografia')) setMode('analysis');
  else if (prompt.includes('OSINT') || prompt.includes('dominio') || prompt.includes('email') || prompt.includes('username') || prompt.includes('IP')) setMode('osint');
  else if (prompt.includes('Ricerca approfondita') || prompt.includes('Ricerca e confronta') || prompt.includes('notizie')) setMode('search');
}

// ─── Terminal ───
async function handleTerminalKey(e) {
  if (e.key !== 'Enter') return;
  const input = document.getElementById('terminal-input');
  const cmd = input.value.trim();
  if (!cmd) return;

  input.value = '';
  addTerminalLine('input', `$ ${cmd}`);

  if (cmd === 'help') {
    addTerminalLine('system', `Comandi disponibili:
  help          — Mostra questo aiuto
  clear         — Pulisci il terminale
  tools         — Lista tool disponibili
  export        — Esporta conversazione corrente
  status        — Stato connessione server
  <comando>     — Esegui qualsiasi comando shell

I tool necessari vengono installati automaticamente.`);
    return;
  }

  if (cmd === 'clear') {
    document.getElementById('terminal-output').innerHTML = '';
    return;
  }

  if (cmd === 'status') {
    const connected = await checkServerConnection();
    addTerminalLine('system', `Server: ${connected ? '✅ Connesso' : '❌ Offline'}
God Mode: ${state.godMode ? '⚡ Attivo' : 'Disattivo'}
Modalità: ${MODE_LABELS[state.currentMode]?.name || state.currentMode}
Chat attive: ${Object.keys(state.chats).length}
Notifiche: ${state.notificationsEnabled ? 'Attive' : 'Disattive'}`);
    return;
  }

  if (cmd === 'export') {
    exportCurrentChat('txt');
    addTerminalLine('system', 'Conversazione esportata in formato testo.');
    return;
  }

  if (cmd === 'tools') {
    addTerminalLine('system', `Tool disponibili:
  python3, pip3, node, exiftool, binwalk, steghide,
  strings, file, xxd, curl, whois, nmap, dig, jq,
  gcc, java, go, rustc`);
    return;
  }

  // Execute via server
  try {
    const response = await fetch(`${API_TRPC}/sandbox.execute`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      credentials: 'include',
      body: JSON.stringify({
        json: {
          command: cmd,
          timeout: state.godMode ? 120000 : 30000,
          godMode: state.godMode,
        }
      }),
    });

    if (response.ok) {
      const data = await response.json();
      const result = data?.result?.data?.json;
      if (result) {
        if (result.installedTools?.length > 0) {
          addTerminalLine('system', `Tool auto-installati:\n${result.installedTools.join('\n')}`);
        }
        if (result.stdout) addTerminalLine('output', result.stdout);
        if (result.stderr) addTerminalLine('error', result.stderr);
        if (!result.stdout && !result.stderr) {
          addTerminalLine('system', `Comando completato (exit code: ${result.exitCode})`);
        }
      }

      // Notification for long commands
      if (document.hidden && state.notificationsEnabled) {
        sendNotification('Terminale Dan AI', `Comando completato: ${cmd.substring(0, 50)}`);
      }
    } else {
      addTerminalLine('error', 'Errore: Server non raggiungibile. Verifica la connessione.');
    }
  } catch (e) {
    addTerminalLine('error', `Errore: ${e.message || 'Connessione fallita'}`);
  }
}

function addTerminalLine(type, content) {
  const output = document.getElementById('terminal-output');
  const pre = document.createElement('pre');
  pre.className = `terminal-line ${type}`;
  pre.textContent = content;
  output.appendChild(pre);
  output.scrollTop = output.scrollHeight;
}

function clearTerminal() {
  const output = document.getElementById('terminal-output');
  output.innerHTML = '';
  const welcomeText = state.godMode
    ? `╔══════════════════════════════════════╗
║  ⚡ Dan AI Terminal — GOD MODE ⚡     ║
║   Sandbox POTENZIATO — No limiti     ║
║   Timeout: 120s | Output: illimitato ║
║   Digita 'help' per i comandi        ║
╚══════════════════════════════════════╝`
    : `╔══════════════════════════════════════╗
║   Dan AI Terminal v2.0               ║
║   Sandbox con auto-install tools     ║
║   Connesso al server backend         ║
║   Digita 'help' per i comandi        ║
╚══════════════════════════════════════╝`;
  addTerminalLine('system', welcomeText);
}

// ─── Settings Actions ───
function showPrivacyInfo() {
  document.getElementById('privacy-dialog').classList.add('active');
}

function closePrivacyDialog(e) {
  if (e && e.target !== e.currentTarget) return;
  document.getElementById('privacy-dialog').classList.remove('active');
}

function deleteAllData() {
  if (!confirm('Sei sicuro di voler cancellare TUTTI i tuoi dati? Questa azione è irreversibile.')) return;
  if (!confirm('Conferma definitiva: tutti i dati verranno eliminati permanentemente.')) return;

  // Delete from server too
  if (state.serverConnected) {
    fetch(`${API_TRPC}/gdpr.deleteAllData`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      credentials: 'include',
      body: JSON.stringify({ json: {} }),
    }).catch(() => {});
  }

  state.chats = {};
  state.currentChatId = null;
  localStorage.removeItem('danai_state');
  clearChatUI();
  renderHistory();
  showToast('Tutti i dati sono stati cancellati');
}

// Handle Enter key in God Mode dialog
document.addEventListener('keydown', (e) => {
  if (e.key === 'Enter' && document.getElementById('god-mode-dialog').classList.contains('active')) {
    submitGodMode();
  }
});

// Handle Enter key in login
document.addEventListener('keydown', (e) => {
  if (e.key === 'Enter' && document.getElementById('login-screen').classList.contains('active')) {
    handleLogin();
  }
});

// ─── Guide / Feature Info ───
function toggleGuide() {
  const content = document.getElementById('guide-content');
  const arrow = document.getElementById('guide-arrow');
  if (!content) return;
  if (content.style.display === 'none' || !content.style.display) {
    content.style.display = 'block';
    if (arrow) arrow.textContent = '▾';
    updateGuideContent();
  } else {
    content.style.display = 'none';
    if (arrow) arrow.textContent = '›';
  }
}

function updateGuideContent() {
  const container = document.getElementById('guide-content');
  if (!container) return;

  const sections = [
    { icon: '💬', key: 'guideChat', descKey: 'guideChatDesc' },
    { icon: '⌨️', key: 'guideCoding', descKey: 'guideCodingDesc' },
    { icon: '🔬', key: 'guideAnalysis', descKey: 'guideAnalysisDesc' },
    { icon: '🕵️', key: 'guideOsint', descKey: 'guideOsintDesc' },
    { icon: '🔎', key: 'guideSearch', descKey: 'guideSearchDesc' },
    { icon: '💻', key: 'guideTerminal', descKey: 'guideTerminalDesc' },
    { icon: '🌐', key: 'guideMultilang', descKey: 'guideMultilangDesc' },
    { icon: '📁', key: 'guideExport', descKey: 'guideExportDesc' },
    { icon: '📡', key: 'guideOffline', descKey: 'guideOfflineDesc' },
    { icon: '🔔', key: 'guideNotifications', descKey: 'guideNotificationsDesc' },
    { icon: '🌓', key: 'guideTheme', descKey: 'guideThemeDesc' },
    { icon: '🔒', key: 'guidePrivacy', descKey: 'guidePrivacyDesc' },
    { icon: '⚡', key: 'guideGodMode', descKey: 'guideGodModeDesc' },
    { icon: '📱', key: 'guideCrossPlat', descKey: 'guideCrossPlatDesc' },
  ];

  container.innerHTML = sections.map(s => `
    <div class="guide-block">
      <h5>${s.icon} ${t(s.key)}</h5>
      <p>${t(s.descKey)}</p>
    </div>
  `).join('');
}
