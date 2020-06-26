self.addEventListener('fetch', event => {
    console.log(event);
    
    event.respondWith(
        new Response(`self.location.origin is ${self.location.origin}`, { headers: { 'Content-Type': 'text/html' } })
    );
});