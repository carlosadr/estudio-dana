// In production, we register a service worker to serve assets from local cache.

export default function register() {
  if (process.env.NODE_ENV === 'production' && 'serviceWorker' in navigator) {

    window.addEventListener('load', function() {
      navigator.serviceWorker.register('/sw.js').then(function(registration) {
        console.log(registration)
        // Registration was successful
        console.log('ServiceWorker registration successful');
      }, function(err) {
        // Registration failed
        console.log('ServiceWorker registration failed: ', err);
      });
    });
  }
}

export function unregister() {
  if ('serviceWorker' in navigator) {
    navigator.serviceWorker.ready.then(registration => {
      registration.unregister()
    })
  }
}