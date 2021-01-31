












importScripts("https://storage.googleapis.com/workbox-cdn/releases/3.6.3/workbox-sw.js");

importScripts(
    "precache-manifest.4b687815b81c9ca591a98a2ec8d0bbc0.js"
);

workbox.clientsClaim();






self.__precacheManifest = [].concat(self.__precacheManifest || []);
workbox.precaching.suppressWarnings();
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});

workbox.routing.registerNavigationRoute("/index.html", {

    blacklist: [/^\/_/,/\/[^\/]+\.[^\/]+$/],
});