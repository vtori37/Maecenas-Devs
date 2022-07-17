const CACHE_NAME = 'version-1';
const urlsToCache = [
    './index.html',
    './manifest.json',
    './serviceWorker.js'
];

const self = this;

// Install service worker
self.addEventListener('install', (event) => {
    event.waitUntil(
        caches.open(CACHE_NAME).then(function (cache) {
                console.log('Open cache');
                return cache.addAll(urlsToCache);
            })
    )
});

// Listen for requests
self.addEventListener('fetch', (event) => {
    event.respondWith(
        caches.match(event.request).then((request) => {
            if (request) {
                console.log('responding with cache: ' + event.request.url)
                return request
            } else if ( event.request.mode === 'navigate') {
                return caches.match('./index.html');
            } else {
                console.log('File is not cached, fetching: ' + event.request.url)
                return fetch(event.request)
            }
        })
    )
});

// Activate service worker
self.addEventListener('activate', (event) => {
    const cacheWhitelist = [];
    cacheWhitelist.push(CACHE_NAME);

    event.waitUntil(
        caches.keys().then((cacheNames) => Promise.all(
            cacheNames.map((cacheName) => {
                if(!cacheWhitelist.includes(cacheName)) {
                    return caches.delete(cacheName);
                }
            })
        ))
    )
});