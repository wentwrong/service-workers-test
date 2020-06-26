self.addEventListener('fetch', event => {
    console.log("Print self object from service worker `fetch` event");
    console.log(self);
    event.respondWith(
        new Response(`self.location.origin is ${self.location.origin}`, { headers: { 'Content-Type': 'text/html' } })
    );
});

self.addEventListener('activate', event => {
    console.log("Print self object from service worker `activate` event");
    console.log(self);
});
