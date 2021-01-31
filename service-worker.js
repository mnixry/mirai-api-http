/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js");

self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "404.html",
    "revision": "969a9b77897cf9c34881794213123618"
  },
  {
    "url": "API.html",
    "revision": "9e61a98fec3fcb90af1dec5f1d827c38"
  },
  {
    "url": "assets/css/0.styles.45f7acac.css",
    "revision": "6f93da2d879f20a7fcc7b72e5a4f1ee3"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/img/search.867d45d8.svg",
    "revision": "867d45d8f9c0da0e3e733dd5e7a8d263"
  },
  {
    "url": "assets/js/10.8e61afec.js",
    "revision": "7e19cb4d7c6861823a0a74355083caf7"
  },
  {
    "url": "assets/js/11.ea21d01e.js",
    "revision": "79a4dbe1799754eabfd4d62e168711ff"
  },
  {
    "url": "assets/js/12.f8af6b6c.js",
    "revision": "dca594107913fe283191e1f23a5ac54d"
  },
  {
    "url": "assets/js/2.c8f26a67.js",
    "revision": "dd289a34803255bcc630f2c930f3a61d"
  },
  {
    "url": "assets/js/3.0b16da2b.js",
    "revision": "f055399420474103cbc3b1b9db21a9b9"
  },
  {
    "url": "assets/js/4.976b37a7.js",
    "revision": "f3d801de5f535fd1121f0415005c8d4e"
  },
  {
    "url": "assets/js/5.06b6caf6.js",
    "revision": "4ddcf6e8e8b19d6f23293dd40ecfd1c4"
  },
  {
    "url": "assets/js/6.307f489f.js",
    "revision": "8e97927dae2b926631041f8bac1984b0"
  },
  {
    "url": "assets/js/7.3f3c9aac.js",
    "revision": "eba84800a5904ee7deb0301c9cbbf1ec"
  },
  {
    "url": "assets/js/8.94c1b6ba.js",
    "revision": "6bd0ec34990a570f28ed3ce372afb2b9"
  },
  {
    "url": "assets/js/9.ed01305e.js",
    "revision": "86b7ffcc5ee2a9a35f81154eedcf0450"
  },
  {
    "url": "assets/js/app.8cdec2fd.js",
    "revision": "a09fd0170e4f2915fada3cab381d7353"
  },
  {
    "url": "EventType.html",
    "revision": "4a66937092367dc4e5f850125361b34c"
  },
  {
    "url": "Heartbeat.html",
    "revision": "6626124866aeae3f409316853b237e6a"
  },
  {
    "url": "index.html",
    "revision": "0f2f36db91456aea836667a201cb6be2"
  },
  {
    "url": "MessageType.html",
    "revision": "b13e27fa06cd6b175f7d31cdf2d8fb0d"
  },
  {
    "url": "Report.html",
    "revision": "021b30619c49db0986b614c310eb3a6b"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
addEventListener('message', event => {
  const replyPort = event.ports[0]
  const message = event.data
  if (replyPort && message && message.type === 'skip-waiting') {
    event.waitUntil(
      self.skipWaiting().then(
        () => replyPort.postMessage({ error: null }),
        error => replyPort.postMessage({ error })
      )
    )
  }
})
