if(!self.define){let e,s={};const i=(i,n)=>(i=new URL(i+".js",n).href,s[i]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=i,e.onload=s,document.head.appendChild(e)}else e=i,importScripts(i),s()})).then((()=>{let e=s[i];if(!e)throw new Error(`Module ${i} didn’t register its module`);return e})));self.define=(n,o)=>{const r=e||("document"in self?document.currentScript.src:"")||location.href;if(s[r])return;let t={};const l=e=>i(e,r),c={module:{uri:r},exports:t,require:l};s[r]=Promise.all(n.map((e=>c[e]||l(e)))).then((e=>(o(...e),t)))}}define(["./workbox-5ffe50d4"],(function(e){"use strict";self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"assets/index-BHBS2FFD.js",revision:null},{url:"assets/index-sUKP3aPY.css",revision:null},{url:"assets/workbox-window.prod.es5-B9K5rw8f.js",revision:null},{url:"index.html",revision:"b783b0aa39ae73a536c94c37a1665bd1"},{url:"cookie_192.png",revision:"4025cddcf2e2e0c8994da83b7f0da5c4"},{url:"cookie_512.png",revision:"bab26b229a9c9dcaf0a163813212b7fb"},{url:"manifest.webmanifest",revision:"f614044524ff14f6c962951dc22d3959"}],{}),e.cleanupOutdatedCaches(),e.registerRoute(new e.NavigationRoute(e.createHandlerBoundToURL("index.html")))}));
