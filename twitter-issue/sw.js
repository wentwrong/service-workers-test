self.addEventListener('fetch', function(event) {
    console.log('fetch event in sw.js #1 with url', event.request.url);
});

importScripts('https://wentwrong.github.io/sw-fetch/one-more-service-worker.js');
