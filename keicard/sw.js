self.addEventListener("install", (e) => {
    e.waitUntil(
      caches.open("keicard-v1").then((cache) =>
        cache.addAll([
          "/",
          "/index.html",
          "/style.css",
          "/script.js",
          "/kei.jpg",
          "/icon-192.png",
          "/icon-512.png"
        ])
      )
    );
  });
  
  self.addEventListener("fetch", (e) => {
    e.respondWith(
      caches.match(e.request).then((response) => response || fetch(e.request))
    );
  });
  