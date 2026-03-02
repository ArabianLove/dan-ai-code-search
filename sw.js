const CACHE_NAME = 'danai-v4';
const ASSETS = [
  '/',
  '/index.html',
  '/css/style.css',
  '/css/chat.css',
  '/css/terminal.css',
  '/js/app.js',
  '/js/i18n.js',
  '/manifest.json',
  '/favicon.png',
  '/icons/icon-192.png',
  '/icons/icon-512.png',
];

// CDN assets to cache for full offline support
const CDN_ASSETS = [
  'https://cdnjs.cloudflare.com/ajax/libs/marked/12.0.0/marked.min.js',
  'https://cdnjs.cloudflare.com/ajax/libs/highlight.js/11.9.0/highlight.min.js',
  'https://cdnjs.cloudflare.com/ajax/libs/highlight.js/11.9.0/styles/github-dark.min.css',
  'https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=JetBrains+Mono:wght@400;500&display=swap',
];

// Install: cache core assets + CDN
self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then(async (cache) => {
      await cache.addAll(ASSETS);
      // Cache CDN assets (non-blocking, best-effort)
      for (const url of CDN_ASSETS) {
        try {
          const response = await fetch(url, { mode: 'cors' });
          if (response.ok) {
            await cache.put(url, response);
          }
        } catch (e) {
          // CDN asset caching is best-effort
        }
      }
    })
  );
  self.skipWaiting();
});

// Activate: clean old caches
self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((keys) =>
      Promise.all(keys.filter((k) => k !== CACHE_NAME).map((k) => caches.delete(k)))
    )
  );
  self.clients.claim();
});

// Fetch: network first, fallback to cache (with offline API handling)
self.addEventListener('fetch', (event) => {
  const url = new URL(event.request.url);

  // For API requests: try network, return offline JSON if fails
  if (event.request.url.includes('/api/')) {
    if (event.request.method === 'POST') {
      event.respondWith(
        fetch(event.request.clone()).catch(() => {
          // Return an offline-aware error response
          return new Response(JSON.stringify({
            error: { message: 'offline', code: 'OFFLINE' },
            result: { data: { json: { content: '__OFFLINE__' } } }
          }), {
            status: 503,
            headers: { 'Content-Type': 'application/json' }
          });
        })
      );
      return;
    }
    // GET API requests: just try network
    return;
  }

  // For static assets: network first, fallback to cache
  if (event.request.method !== 'GET') return;

  event.respondWith(
    fetch(event.request)
      .then((response) => {
        const clone = response.clone();
        caches.open(CACHE_NAME).then((cache) => cache.put(event.request, clone));
        return response;
      })
      .catch(() => caches.match(event.request).then((cached) => {
        return cached || new Response('Offline', { status: 503 });
      }))
  );
});

// Listen for sync events (Background Sync API)
self.addEventListener('sync', (event) => {
  if (event.tag === 'sync-messages') {
    event.waitUntil(syncOfflineMessages());
  }
});

async function syncOfflineMessages() {
  // Notify all clients to sync their queued messages
  const clients = await self.clients.matchAll();
  for (const client of clients) {
    client.postMessage({ type: 'SYNC_OFFLINE_MESSAGES' });
  }
}

// Listen for messages from the main thread
self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});
