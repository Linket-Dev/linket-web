'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "legal/playstore.png": "510e63c84fcb82a6a5268fb7796f2863",
"legal/privacy-policy.css": "c3b1d2f59423b1887a666dc137bff0c2",
"legal/privacy-policy.html": "6ea62488ea4f7074761757db6306b2a0",
"legal/LinketText.png": "5d6a3ae568ccccc2bb56f4cdbdb81b1e",
"CNAME": "ad2c8645bf790a665bcc30b4208e42eb",
".git/objects/cf/ecf6b5c4e12ab402eae7dfacf75ffe5aa895b0": "f1ef87744e59caaa841ff0750a15916e",
".git/objects/8c/4925488e67bb8d483cfe4051d2c0be81ab3e59": "c7adfa2c828c5b56cf0ceef71286d506",
".git/objects/79/ba7ea0836b93b3f178067bcd0a0945dbc26b3f": "f3e31aec622d6cf63f619aa3a6023103",
".git/objects/05/a883b6e051dde746cf1d7c7c49e30221cbdbaf": "91ec05307e22ef41dc44a4540f3acd91",
".git/objects/38/fc1e9f9d176551feb239df9818ca5e4d57d38f": "4f965427bb85b75b27dc479d1ea87954",
".git/objects/4d/bd74d1b44d6d1dd7c6ef506014248729ebf55d": "91fab08e446b8846bf74df029f37322a",
".git/objects/2d/cf3542c874e33cd8ab86ceb6f0ec444228aa78": "66baad0ae5d874f09b6eee790095bc65",
".git/objects/4e/89617a3696bd10c155ec378f4a65a9f89e9e3a": "d8056e20bae90d092b619c895129e982",
".git/objects/5a/5478286ce5fa957949998468e5d2eb4de83247": "45df1174fbb11e1d1a770b207cbeaf9e",
".git/objects/16/eb037ee41f73a0682bfa874835a7cde07120ae": "b86b32f972fd4e57cd4983fe0aa2d25c",
".git/objects/e5/951dfb943474a56e611d9923405cd06c2dd28d": "c6fa51103d8db5478e1a43a661f6c68d",
".git/objects/46/4ab5882a2234c39b1a4dbad5feba0954478155": "2e52a767dc04391de7b4d0beb32e7fc4",
".git/objects/2b/11a2b1f9e84c2e7d5f6fd3ea5ecf325cf3247b": "b08ea9d19e90c3275146a104ffe27fa1",
".git/objects/24/b1f14dd348b07c9b8373758bde9ac14d16fd92": "dbf45d6c044044561758a334420e9569",
".git/objects/de/28db843d7df6ed23b8a7526f6b6b4a83425fe7": "797e4f7b3d8dced098c51679ff33e848",
".git/objects/02/c1f1fd1ace8eeb22196297cbf156687a8ceacd": "ebb66ebd18eca5905adebfc2ed9816c2",
".git/objects/02/0f5e56a927a04113ecb38d06238b0c2998ee52": "b74ec5f14b7d6eaa207cddb2b632edf0",
".git/objects/9e/1e1c0e655fbfaa683d95f401d343b887761931": "6a4bea7714c7799daff8e4cf0674b7a2",
".git/objects/a1/3837a12450aceaa5c8e807c32e781831d67a8f": "bfe4910ea01eb3d69e9520c3b42a0adf",
".git/objects/82/9b865742c0046da7f7ea0192cb2c9e1add579f": "0ba2cc9f2dd5d4f2a1f48c5d4f33a53c",
".git/objects/29/d02afc589ace49aeea96e0c296b39f21af72de": "4c569e4ffcdec785ae8db396d61e6a16",
".git/objects/71/8573f62aec9ff0b805884208ee6ef1dc42d8ca": "acac105e33a9b69bb4d7c4d62108470c",
".git/objects/e0/63d0aaf41d4a31d9256458680957b5f16b6b45": "93a906db0dda7e747743183cc465e7a6",
".git/objects/c8/e943a0cc555f846acd5ed49b33ee7e3ef45dfc": "4f88fe3a214f11adf0a4e5db799440c1",
".git/objects/56/b1e99c93da9e1c87abfd9e3e88c3502eb55610": "306ab95e9a4639214bf4eb9baeb69366",
".git/objects/e9/e575d0b36ebd696294496017834c26b62e1505": "8eca52e53d59927cc7c00a13888ea67b",
".git/objects/31/96bd921158c8c06f0aaaa4ab55d7eb761de97a": "529644858a8158559e2e8dd556b238c3",
".git/objects/ab/0e98497a51ead7821d1da35a24968ff314e50f": "557c35fe3928eb2af403d1b3926bb9ba",
".git/objects/76/0abaf77d7e2704dcf81f0a0dd0bf42049069d4": "6c71885b504d917d0be3e84c65ace357",
".git/objects/76/8651b2e249c2517c7b37bdbeea0a5d8bfbb707": "495b1c4fefa633f6afe4dc5840ebe18f",
".git/objects/76/3452a4431f39e35ed4a56fccd77b56bb69c468": "78847dd4ccd8a910fe010fc43b4249d9",
".git/objects/03/eaddffb9c0e55fb7b5f9b378d9134d8d75dd37": "87850ce0a3dd72f458581004b58ac0d6",
".git/objects/35/b43bd4af87bf0d10c7e4c8e8566e104e31c795": "408a489530e7a64880d957b8244f5961",
".git/objects/0d/0df08f7c3e147a8ae36017cf81a96e35b73717": "106e868f28a72727fb6fb0fa71123633",
".git/objects/cd/22076013ce8b84475eae9bb4cd6c60b5460fbe": "81c620e2d6cbe5638d6c90ee25886389",
".git/objects/61/05c7a02d659443c794074f8f6644a2ed53daae": "5cadef1d3ad96dc9b85232ffc5271333",
".git/logs/HEAD": "670166e56a50779ac2365d2571238d80",
".git/logs/refs/heads/master": "670166e56a50779ac2365d2571238d80",
".git/logs/refs/remotes/hub/master": "762d4a75a2f528f9a3dea6f3e5b5ee88",
".git/index": "570af1f1a6867e658194c0b20cb1997a",
".git/HEAD": "4cf2d64e44205fe628ddd534e1151b58",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/refs/heads/master": "4c16583b82d615ef050d1872c2d5376c",
".git/refs/remotes/hub/master": "4c16583b82d615ef050d1872c2d5376c",
".git/config": "af711fe2108f4ae3ca8bb1fbdae320c2",
".git/COMMIT_EDITMSG": "cedccf4bdd0a94efc8085e60e1a1be24",
".git/hooks/pre-push.sample": "3c5989301dd4b949dfa1f43738a22819",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/fsmonitor-watchman.sample": "db4d62db2039e4bec38baa7567788284",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/pre-commit.sample": "e4db8c12ee125a8a085907b757359ef0",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/update.sample": "517f14b9239689dff8bda3022ebd9004",
"index.html": "75d8343789e0ea8ade3b9851cdff3b13",
"/": "75d8343789e0ea8ade3b9851cdff3b13",
"icons/Icon-192.png": "aa4fee065dda78c8063e4cde7625d6f1",
"icons/Icon-maskable-512.png": "510e63c84fcb82a6a5268fb7796f2863",
"icons/Icon-512.png": "510e63c84fcb82a6a5268fb7796f2863",
"icons/Icon-maskable-192.png": "aa4fee065dda78c8063e4cde7625d6f1",
"main.dart.js": "835060b2e536e6c9edac6409dfcac91e",
"manifest.json": "f9aa19e7048cc0e8d1a45979d3920907",
"flutter.js": "eb2682e33f25cd8f1fc59011497c35f8",
"version.json": "7dfbdc56583236b19d90149d7760b872",
"canvaskit/canvaskit.js": "c2b4e5f3d7a3d82aed024e7249a78487",
"canvaskit/profiling/canvaskit.js": "ae2949af4efc61d28a4a80fffa1db900",
"canvaskit/profiling/canvaskit.wasm": "95e736ab31147d1b2c7b25f11d4c32cd",
"canvaskit/canvaskit.wasm": "4b83d89d9fecbea8ca46f2f760c5a9ba",
"favicon.png": "b8daf2eb093926827cb7dbde998dc61f",
"assets/AssetManifest.json": "2efbb41d7877d10aac9d091f58ccd7b9",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/NOTICES": "0fc41d661406006cb7a7fcd9a49cb50c",
"assets/fonts/MaterialIcons-Regular.otf": "95db9098c58fd6db106f1116bae85a0b",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "main.dart.js",
"index.html",
"assets/NOTICES",
"assets/AssetManifest.json",
"assets/FontManifest.json"];
// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});

// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});

// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache.
        return response || fetch(event.request).then((response) => {
          cache.put(event.request, response.clone());
          return response;
        });
      })
    })
  );
});

self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});

// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}

// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
