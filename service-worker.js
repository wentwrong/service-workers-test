self.addEventListener('fetch', event => {
    event.respondWith(
        new Response(`self.location.origin is ${self.location.origin}`, { headers: { 'Content-Type': 'text/html' } })
    );
});
