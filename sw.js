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

importScripts("workbox-v4.3.1/workbox-sw.js");
workbox.setConfig({modulePathPrefix: "workbox-v4.3.1"});

workbox.core.setCacheNameDetails({prefix: "gatsby-plugin-offline"});

workbox.core.skipWaiting();

workbox.core.clientsClaim();

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "icons/icon-144x144.png",
    "revision": "470ee6ddd024a3a7686a39d86c639b9b"
  },
  {
    "url": "icons/icon-192x192.png",
    "revision": "0c1a5dded61389089b2d5aa94bd2c65a"
  },
  {
    "url": "icons/icon-256x256.png",
    "revision": "de27bf731e499851c976601f28bec0c6"
  },
  {
    "url": "icons/icon-384x384.png",
    "revision": "56966658e76a0ad4cf66a9aefd043848"
  },
  {
    "url": "icons/icon-48x48.png",
    "revision": "0f68a766f48115b02758e636582b3ba3"
  },
  {
    "url": "icons/icon-512x512.png",
    "revision": "9511f35d4bf549cdee65520815a26d24"
  },
  {
    "url": "icons/icon-72x72.png",
    "revision": "acc84e353e484679a69eb178e52c45cd"
  },
  {
    "url": "icons/icon-96x96.png",
    "revision": "5ea5e25a24db66d22aa18b7c5284de62"
  },
  {
    "url": "styles.b374a2f44cc08ac972df.css"
  },
  {
    "url": "styles-407fe62976dc5310c43e.js"
  },
  {
    "url": "framework-1bcdbcdd30f43763a25c.js"
  },
  {
    "url": "dc6a8720040df98778fe970bf6c000a41750d3ae-2c1f5d113ac405375097.js"
  },
  {
    "url": "app-ac8c1a9b0896bfa5c79d.js"
  },
  {
    "url": "offline-plugin-app-shell-fallback/index.html",
    "revision": "d070f0789d3e28a23846bb268051f065"
  },
  {
    "url": "webpack-runtime-f970a419a96a13b2cec7.js"
  },
  {
    "url": "component---cache-caches-gatsby-plugin-offline-app-shell-js-241020a1cf7d0f317bbe.js"
  },
  {
    "url": "assets/js/plugins.js"
  },
  {
    "url": "assets/js/main.js"
  },
  {
    "url": "polyfill-ee97526abd5958b83209.js"
  },
  {
    "url": "29107295-31903c7cd144f52709bf.js"
  },
  {
    "url": "22d9c17ac67b7a9de192fcde363acdcef9fbedaa-e495a628d5472f713822.js"
  },
  {
    "url": "component---src-templates-page-js-b0369c9f52c14971032a.js"
  },
  {
    "url": "page-data/about/page-data.json",
    "revision": "fc021ab6a7f6210c3a4df67d3d8ae2c2"
  },
  {
    "url": "page-data/app-data.json",
    "revision": "b5d6aba8cffd5df001224d69ab9253be"
  },
  {
    "url": "component---src-templates-advanced-js-6e988595e606763c9bec.js"
  },
  {
    "url": "page-data/contact/page-data.json",
    "revision": "5a0bd7d8eecb2bb5ed0a43ab78b6136c"
  },
  {
    "url": "page-data/thank-you/page-data.json",
    "revision": "658de9e1a3c60df1b2762b9202daeb52"
  },
  {
    "url": "component---src-templates-blog-js-2adbae196771c3e4fb0a.js"
  },
  {
    "url": "page-data/blog/page-data.json",
    "revision": "84f551c23b7140b710ca5911af94b1d7"
  },
  {
    "url": "component---src-templates-post-js-ae44cd5f9aff7effa95e.js"
  },
  {
    "url": "page-data/posts/welcome-to-raikusy/page-data.json",
    "revision": "2246d057254b55dcf5aa1841128151ca"
  },
  {
    "url": "page-data/index/page-data.json",
    "revision": "5e0a2f3add31e972a73475493963ce3c"
  },
  {
    "url": "manifest.json",
    "revision": "b773e901ef06ac93343dc05e67540787"
  },
  {
    "url": "manifest.webmanifest",
    "revision": "51d4a194fb999c2e3c56bb007ed65b86"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});

workbox.routing.registerRoute(/(\.js$|\.css$|static\/)/, new workbox.strategies.CacheFirst(), 'GET');
workbox.routing.registerRoute(/^https?:.*\/page-data\/.*\.json/, new workbox.strategies.StaleWhileRevalidate(), 'GET');
workbox.routing.registerRoute(/^https?:.*\.(png|jpg|jpeg|webp|svg|gif|tiff|js|woff|woff2|json|css)$/, new workbox.strategies.StaleWhileRevalidate(), 'GET');
workbox.routing.registerRoute(/^https?:\/\/fonts\.googleapis\.com\/css/, new workbox.strategies.StaleWhileRevalidate(), 'GET');

/* global importScripts, workbox, idbKeyval */
importScripts(`idb-keyval-3.2.0-iife.min.js`)

const { NavigationRoute } = workbox.routing

let lastNavigationRequest = null
let offlineShellEnabled = true

// prefer standard object syntax to support more browsers
const MessageAPI = {
  setPathResources: (event, { path, resources }) => {
    event.waitUntil(idbKeyval.set(`resources:${path}`, resources))
  },

  clearPathResources: event => {
    event.waitUntil(idbKeyval.clear())
  },

  enableOfflineShell: () => {
    offlineShellEnabled = true
  },

  disableOfflineShell: () => {
    offlineShellEnabled = false
  },
}

self.addEventListener(`message`, event => {
  const { gatsbyApi: api } = event.data
  if (api) MessageAPI[api](event, event.data)
})

function handleAPIRequest({ event }) {
  const { pathname } = new URL(event.request.url)

  const params = pathname.match(/:(.+)/)[1]
  const data = {}

  if (params.includes(`=`)) {
    params.split(`&`).forEach(param => {
      const [key, val] = param.split(`=`)
      data[key] = val
    })
  } else {
    data.api = params
  }

  if (MessageAPI[data.api] !== undefined) {
    MessageAPI[data.api]()
  }

  if (!data.redirect) {
    return new Response()
  }

  return new Response(null, {
    status: 302,
    headers: {
      Location: lastNavigationRequest,
    },
  })
}

const navigationRoute = new NavigationRoute(async ({ event }) => {
  // handle API requests separately to normal navigation requests, so do this
  // check first
  if (event.request.url.match(/\/.gatsby-plugin-offline:.+/)) {
    return handleAPIRequest({ event })
  }

  if (!offlineShellEnabled) {
    return await fetch(event.request)
  }

  lastNavigationRequest = event.request.url

  let { pathname } = new URL(event.request.url)
  pathname = pathname.replace(new RegExp(`^`), ``)

  // Check for resources + the app bundle
  // The latter may not exist if the SW is updating to a new version
  const resources = await idbKeyval.get(`resources:${pathname}`)
  if (!resources || !(await caches.match(`/app-ac8c1a9b0896bfa5c79d.js`))) {
    return await fetch(event.request)
  }

  for (const resource of resources) {
    // As soon as we detect a failed resource, fetch the entire page from
    // network - that way we won't risk being in an inconsistent state with
    // some parts of the page failing.
    if (!(await caches.match(resource))) {
      return await fetch(event.request)
    }
  }

  const offlineShell = `/offline-plugin-app-shell-fallback/index.html`
  const offlineShellWithKey = workbox.precaching.getCacheKeyForURL(offlineShell)
  return await caches.match(offlineShellWithKey)
})

workbox.routing.registerRoute(navigationRoute)

// this route is used when performing a non-navigation request (e.g. fetch)
workbox.routing.registerRoute(/\/.gatsby-plugin-offline:.+/, handleAPIRequest)
