const cacheSave = 'v1';
const cacheFiles = [
    '/',
    '/index.html',
    '/restaurant.html',
    '/css/styles.css',
    '/js/dbhelper.js',
    '/js/main.js',
    '/js/restaurant_info.js',
    '/data/restaurants.json',
    '/img/1.jpg',
    '/img/2.jpg',
    '/img/3.jpg',
    '/img/4.jpg',
    '/img/5.jpg',
    '/img/6.jpg',
    '/img/7.jpg',
    '/img/8.jpg',
    '/img/9.jpg',
    '/img/10.jpg',
];

/**
 * Add Service Worker Install Event
 */
self.addEventListener('install', e => {
    e.waitUntil(
      caches.open(cacheSave).then(cache => {
            return cache.addAll(cacheFiles);
        })
    );
})

/**
 * Fetch the Service Worker Cached Info.
 */
self.addEventListener('fetch', e => {
    e.respondWith(
        fetch(e.request).catch(() => caches.match(e.request))
    );
});