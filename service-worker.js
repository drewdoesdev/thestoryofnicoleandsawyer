"use strict";var precacheConfig=[["/thestoryofnicoleandsawyer/index.html","5b995b54242554f2aa6532383ea036e7"],["/thestoryofnicoleandsawyer/static/css/main.3661695f.css","9a9c9d77e4e3fc9a572dee70bb5baa1b"],["/thestoryofnicoleandsawyer/static/js/main.a0c217c6.js","449b947af21dcf87eb3b60b78f43a504"],["/thestoryofnicoleandsawyer/static/media/Chilis.0dde3093.jpg","0dde309337ddc494e6995b991bb31f1e"],["/thestoryofnicoleandsawyer/static/media/beach-sunset.dbd9a32b.jpg","dbd9a32b31dc9729f9ffbea458b753fe"],["/thestoryofnicoleandsawyer/static/media/beach.9f904c0f.jpg","9f904c0faa30e41384890c38f05c2fbe"],["/thestoryofnicoleandsawyer/static/media/bonnaroo.8681f5e6.jpg","8681f5e6b9b1084a30dccb8e0a022c8f"],["/thestoryofnicoleandsawyer/static/media/christmas-bar.f33bc3ca.jpg","f33bc3cadac5050b5335320518d57b70"],["/thestoryofnicoleandsawyer/static/media/clairvoyant.e4940fbe.jpg","e4940fbe537375915ccd0b7cef5176bc"],["/thestoryofnicoleandsawyer/static/media/copenhagen.0a589e58.jpg","0a589e58cd13e0336549b42cdbece620"],["/thestoryofnicoleandsawyer/static/media/engagement.dd043b81.jpg","dd043b819724c8ff3ec9cb61dab99d84"],["/thestoryofnicoleandsawyer/static/media/fontawesome-webfont.674f50d2.eot","674f50d287a8c48dc19ba404d20fe713"],["/thestoryofnicoleandsawyer/static/media/fontawesome-webfont.912ec66d.svg","912ec66d7572ff821749319396470bde"],["/thestoryofnicoleandsawyer/static/media/fontawesome-webfont.af7ae505.woff2","af7ae505a9eed503f8b8e6982036873e"],["/thestoryofnicoleandsawyer/static/media/fontawesome-webfont.b06871f2.ttf","b06871f281fee6b241d60582ae9369b9"],["/thestoryofnicoleandsawyer/static/media/fontawesome-webfont.fee66e71.woff","fee66e712a8a08eef5805a46892932ad"],["/thestoryofnicoleandsawyer/static/media/halloween-couple.f1a60e65.jpg","f1a60e6588232cfc09b12152389d695d"],["/thestoryofnicoleandsawyer/static/media/halloween.e66f8b1b.jpg","e66f8b1b2310d74ff4aca6e53214c590"],["/thestoryofnicoleandsawyer/static/media/kts-graph.576c13b9.jpg","576c13b91bd8c57ab8ca820889b8486d"],["/thestoryofnicoleandsawyer/static/media/logo.5d5d9eef.svg","5d5d9eefa31e5e13a6610d9fa7a283bb"],["/thestoryofnicoleandsawyer/static/media/mustaches.451f8fde.jpg","451f8fdeb24c4c39ce346b71333c175b"],["/thestoryofnicoleandsawyer/static/media/new-orleans.1e37f4f3.jpg","1e37f4f3c52e27163323f2b2c4d55eab"],["/thestoryofnicoleandsawyer/static/media/new-years.f5bb77cb.jpg","f5bb77cb5c65623ef1f379c8dd6ab970"],["/thestoryofnicoleandsawyer/static/media/paintings.9789ee98.jpg","9789ee9843472551b072b907d2dea98a"],["/thestoryofnicoleandsawyer/static/media/parthenon.1bbbd2f7.jpg","1bbbd2f7f4d4ba4f5aba20d7ede43a1a"],["/thestoryofnicoleandsawyer/static/media/puzzle.1187dbd9.jpg","1187dbd96f43b37d9ab7fb6f069c3dfa"],["/thestoryofnicoleandsawyer/static/media/scuba.549c22d5.jpg","549c22d51e458778375c51ef7c55df42"],["/thestoryofnicoleandsawyer/static/media/troy.8e89a607.jpg","8e89a607bd84c42325815865774a5ccb"],["/thestoryofnicoleandsawyer/static/media/washington-dc.85a7cadd.jpg","85a7caddf57e4fcf6b211e33442b2b7e"]],cacheName="sw-precache-v3-sw-precache-webpack-plugin-"+(self.registration?self.registration.scope:""),ignoreUrlParametersMatching=[/^utm_/],addDirectoryIndex=function(e,a){var t=new URL(e);return"/"===t.pathname.slice(-1)&&(t.pathname+=a),t.toString()},cleanResponse=function(e){return e.redirected?("body"in e?Promise.resolve(e.body):e.blob()).then(function(a){return new Response(a,{headers:e.headers,status:e.status,statusText:e.statusText})}):Promise.resolve(e)},createCacheKey=function(e,a,t,n){var r=new URL(e);return n&&r.pathname.match(n)||(r.search+=(r.search?"&":"")+encodeURIComponent(a)+"="+encodeURIComponent(t)),r.toString()},isPathWhitelisted=function(e,a){if(0===e.length)return!0;var t=new URL(a).pathname;return e.some(function(e){return t.match(e)})},stripIgnoredUrlParameters=function(e,a){var t=new URL(e);return t.hash="",t.search=t.search.slice(1).split("&").map(function(e){return e.split("=")}).filter(function(e){return a.every(function(a){return!a.test(e[0])})}).map(function(e){return e.join("=")}).join("&"),t.toString()},hashParamName="_sw-precache",urlsToCacheKeys=new Map(precacheConfig.map(function(e){var a=e[0],t=e[1],n=new URL(a,self.location),r=createCacheKey(n,hashParamName,t,/\.\w{8}\./);return[n.toString(),r]}));function setOfCachedUrls(e){return e.keys().then(function(e){return e.map(function(e){return e.url})}).then(function(e){return new Set(e)})}self.addEventListener("install",function(e){e.waitUntil(caches.open(cacheName).then(function(e){return setOfCachedUrls(e).then(function(a){return Promise.all(Array.from(urlsToCacheKeys.values()).map(function(t){if(!a.has(t)){var n=new Request(t,{credentials:"same-origin"});return fetch(n).then(function(a){if(!a.ok)throw new Error("Request for "+t+" returned a response with status "+a.status);return cleanResponse(a).then(function(a){return e.put(t,a)})})}}))})}).then(function(){return self.skipWaiting()}))}),self.addEventListener("activate",function(e){var a=new Set(urlsToCacheKeys.values());e.waitUntil(caches.open(cacheName).then(function(e){return e.keys().then(function(t){return Promise.all(t.map(function(t){if(!a.has(t.url))return e.delete(t)}))})}).then(function(){return self.clients.claim()}))}),self.addEventListener("fetch",function(e){if("GET"===e.request.method){var a,t=stripIgnoredUrlParameters(e.request.url,ignoreUrlParametersMatching),n="index.html";(a=urlsToCacheKeys.has(t))||(t=addDirectoryIndex(t,n),a=urlsToCacheKeys.has(t));var r="/thestoryofnicoleandsawyer/index.html";!a&&"navigate"===e.request.mode&&isPathWhitelisted(["^(?!\\/__).*"],e.request.url)&&(t=new URL(r,self.location).toString(),a=urlsToCacheKeys.has(t)),a&&e.respondWith(caches.open(cacheName).then(function(e){return e.match(urlsToCacheKeys.get(t)).then(function(e){if(e)return e;throw Error("The cached response that was expected is missing.")})}).catch(function(a){return console.warn('Couldn\'t serve response for "%s" from cache: %O',e.request.url,a),fetch(e.request)}))}});