self.addEventListener("install", e => {
  e.waitUntil(
    caches.open("static").then(cache => {
      return cache.addAll(["./", "css/main.css", "js/script.js", "img/logo.png", "img/logo-white.png", "img/about-logo.png", "img/about-logo-white.png", "img/favicon.png", "img/logo-192.png", "img/logo-512.png", "img/m-icon.png"])
    })
  )
});
self.addEventListener("fetch", e => {
  e.respondWith(
    caches.match(e.request).then(response => {
      return response || fetch(e.request);
    })
  )
});
