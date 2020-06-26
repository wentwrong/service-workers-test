self.addEventListener('fetch', event => {
    console.log(event);
    console.log(self);
    event.respondWith(
        new Response(`self.location.origin is ${self.location.origin}`, { headers: { 'Content-Type': 'text/html' } })
    );
});

self.addEventListener('activate', event => {
    console.log(event);
    console.log(self);
});
