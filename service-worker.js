var cacheName = 'school_hero-v1'
var cacheFiles = [
    'index.html',
    'js/main.js',
    'js/lessons.js',
    'css/main.css',
    'assets/images/icon.png',
    'assets/images/Smiley face_Two Color.svg'
]

self.addEventListener('install', (e)=>{
    console.log('[Service-worker] Install')
    e.waitUntil(
        caches.open(cacheName).then((cache) => {
            console.log('[Service-worker] Caching all the files')
            return cache.addAll(cacheFiles)
        })
    )
})