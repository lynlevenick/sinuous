!function(){"use strict";const e=[];let t,n;function r(r){function o(i){if(0===arguments.length)return t&&!o.o.has(t)&&(o.o.add(t),t.u.push(o)),r;if(n)return o.t===e&&n.push(o),o.t=i,i;r=i;const c=t;return t=void 0,o.i=new Set(o.o),o.i.forEach(e=>e.s=!1),o.i.forEach(e=>{e.s||e()}),t=c,r}return o.$o=!0,o.o=new Set,o.t=e,o}function o(e,n){function r(){const o=t;t&&t.__c.push(r);const i=r.__c;return c(r),r.s=!0,t=r,n=e(n),i.forEach(e=>{-1===r.__c.indexOf(e)&&(e.s=!0)}),function e(t){return t.reduce((t,n)=>t.concat(n,e(n.__c)),[])}(r.__c).forEach(e=>{e.s&&e.u.forEach(t=>{t.i&&t.i.delete(e)})}),t=o,n}return e.v=r,s(r),r(),function(){return r.s?r.u.forEach(e=>e()):n=r(),n}}function i(e){return o(e),()=>c(e.v)}function c(e){e.__c.forEach(c),e.u.forEach(t=>{t.o.delete(e)}),e.S.forEach(e=>e()),s(e)}function s(e){e.u=[],e.__c=[],e.S=[]}var l=Object.freeze({S:o,cleanup:function(e){return t&&t.S.push(e),e},computed:o,isListening:function(){return!!t},o:r,observable:r,root:function(e){const n=t,r=()=>{};t=r,s(r);const o=e(()=>{c(r),t=void 0});return t=n,o},sample:function(e){const n=t;t=void 0;const r=e();return t=n,r},subscribe:i,transaction:function(t){n=[];const r=t();let o=n;return n=void 0,o.forEach(t=>{if(t.t!==e){const n=t.t;t.t=e,t(n)}}),r},unsubscribe:function(e){c(e.v)}});const a={},u=[],f="__g";function d(e,t,n,r){if(n){if(t){if(!r){const t=(r=n.previousSibling||e.lastChild)[f];if(t)for(r=r.previousSibling;r&&r[f]!==t;)r=r.previousSibling}let t;for(;r&&r!==n;)t=r.nextSibling,e.removeChild(r),r[f]=0,r=t}}else e.textContent=""}let h=0;function p(e,t,n,r,o){e=n&&n.parentNode||e;const i=typeof t;return t===r||(!t&&0!==t||!0===t?(d(e,r,n,o),r=null):r&&"string"!=typeof r||!("string"===i||"number"===i&&(t+=""))?"function"===i?a.subscribe(function(){r=a.insert(e,t(),n,r)}):(d(e,r,n,o),t instanceof Node||(t=a.h(u,t)),11===t.nodeType&&t.firstChild!==t.lastChild&&(t.firstChild[f]=t.lastChild[f]=++h),e.insertBefore(t,n||null),r=t):(null!=r&&e.firstChild?n?(n.previousSibling||e.lastChild).data=t:e.firstChild.data=t:n?e.insertBefore(document.createTextNode(t),n):e.textContent=t,r=t)),r}function _(e,t,n,r,o){if(!e||"attrs"===e&&(r=!0))for(e in t)_(e,t[e],n,r,o);else"o"!==e[0]||"n"!==e[1]||t.$o?"function"==typeof t?t.$t?t.$t(2,_,n,e):a.subscribe(()=>{_(e,t(),n,r,o)}):o?n.style.setProperty(e,t):r||"data-"===e.slice(0,5)||"aria-"===e.slice(0,5)?n.setAttribute(e,t):"style"===e?"string"==typeof t?n.style.cssText=t:_(null,t,n,r,!0):("class"===e&&(e+="Name"),n[e]=t):function(e,t,n){t=t.slice(2);const r=a.cleanup(()=>e.removeEventListener(t,m));n?e.addEventListener(t,m):r(),(e.t||(e.t={}))[t]=n}(n,e,t)}function m(e){return this.t[e.type](e)}function y(e,t){for(let t in e)a[t]=e[t];function n(){const e=u.slice.call(arguments);let n;return e.forEach(function r(o){const i=typeof o;if(null==o);else if("string"===i)n?n.appendChild(document.createTextNode(o)):n=t?document.createElementNS("http://www.w3.org/2000/svg",o):document.createElement(o);else if(Array.isArray(o))n||(n=document.createDocumentFragment()),o.forEach(r);else if(o instanceof Node)n?n.appendChild(o):n=o;else if("object"===i)_(null,o,n,t);else if("function"===i)if(n){const e=n.appendChild(document.createTextNode(""));o.$t?o.$t(1,p,n,""):p(n,o,e)}else n=o.apply(null,e.splice(1));else n.appendChild(document.createTextNode(""+o))}),n}return a.insert=p,a.property=_,a.h=n,n}const v=y(l),b=y(l,!0),E=r,g=[],A={};let k;function C(e,t){const n=Array.isArray(e)?e:e.__c,r=[t,e.__p,n],o=e.t;let i,c;return r.forEach(function e(t){if(t instanceof Node)(i=t).o=i.o||0,c=g.slice.call(i.childNodes);else if(Array.isArray(t))t.forEach(e);else if(i){let e=S(c,i.o);if(e){if(t===A)i.o++;else if("string"==typeof t)e.data!==t&&(e.data=t),i.o++;else if("object"==typeof t)if(t.__c)C(t,e),i.o++;else for(let e in t)a.property(e,t[e],i,o);else if("function"==typeof t){let n,r,o,s=e.data;a.subscribe(function(){k=n;let l=t();n?s=a.insert(i,l,r,s,o):("string"==typeof l||"number"==typeof l?i.o++:(Array.isArray(l)&&(o=e,e=i),C(l,e),s=[]),r=i.insertBefore(document.createTextNode(""),S(c,i.o)||null)),k=!1,n=!0})}}else(o?b:v)(i,t)}}),i}function S(e,t){return e.filter(e=>3!==e.nodeType||e.data.trim())[t]}const w=function(e){return function(){if(k)return(e?b:v).apply(null,arguments);const t=g.slice.call(arguments),n={__c:[]};return t.forEach(function t(r){e&&(n.t=e),null==r||(r===A?n.__c.push(r):"string"==typeof r?n.__t?n.__c.push(r):n.__t=r:Array.isArray(r)?r.forEach(t):"object"==typeof r?r.__t?n.__c.push(r):n.__p=r:"function"==typeof r&&n.__c.push(r))}),n.__t?n:n.__c[1]?n.__c:n.__c[0]}}(),x={vanillajs:"#FFDD57",sinuous:"#70EDAC",solid:"#481B82",surplus:"#C559D4",ivi:"#FF3800",stage0:"#374838",domc:"#704B38",hyperapp:"#037FFF",preact:"#673AB8",react:"#61DAFB",mikado:"#59ABE9",inferno:"#E41E1D",wasm:"#644FF0",fidan:"#2B7489",vue:"#40B883",angular:"#A6130C",ember:"#E04E39",svelte:"#FF3E00",lit:"#FF6C6A",mithril:"#1E5799",sifrr:"#364F6B"},F=["01_run1k","02_replace1k","03_update10th1k_x16","04_select1k","05_swap1k","06_remove-one-1k","07_create10k","08_create1k-after1k_x2","09_clear1k_x8","21_ready-memory","22_run-memory","23_update5-memory","24_run5-memory","25_run-clear-memory","31_startup-ci","32_startup-bt","34_startup-totalbytes"];function B(e){return e.id||e.framework}function N(e){return B(e).split("-")[0]}function D(e){if(0===e.length)return 0;e.sort(function(e,t){return e-t});var t=Math.floor(e.length/2);return e.length%2?e[t]:(e[t-1]+e[t])/2}const T=E(document.querySelector(".load-input").value),j=E([]),$=E("#10-fastest"),q=o(()=>{const e=j().map(e=>e.benchmark);return function(e){return[...new Set(e)]}(e.length?e:F).sort()}),L=E(!1);function M(e){e.preventDefault(),document.getElementById(e.target.href.split("#")[1]).scrollIntoView({behavior:"smooth"})}async function I(){L(!0);const e=await fetch(T()),t=await e.json();j(Array.isArray(t)?t:t.results),L(!1)}function P(){q().forEach(e=>{let t=j().filter(e=>!B(e).includes("non-keyed")).filter(t=>t.benchmark===e).sort((e,t)=>D(e.values)>D(t.values)?1:-1);const n=$().match(/\d+/);n&&(t=t.slice(0,parseInt(n[0])));let r=[];const o=t.map(e=>(r=r.concat(e.values),{name:B(e),marker:{color:x[N(e)]},y:e.values,type:"box"})),i=e.startsWith("0")?"Duration in ms (lower is better)":e.startsWith("2")?"Memory in MB (lower is better)":e.startsWith("3")?"Startup metrics":"",c={title:e,yaxis:{title:i,range:[0,Math.max(...r)]}};Plotly.newPlot(e,o,c,{responsive:!0})})}C(w("div",null,w("div",{class:()=>"select is-small"+(L()?" is-loading":"")},w("select",{onchange:e=>T(e.target.value)}))),document.querySelector(".select-bench")),document.querySelectorAll(".filter-list a").forEach(e=>{C(w("a",{class:()=>e.href.includes($())?"is-active":""}),e)}),i(I),document.querySelector(".benchmarks-list").append(v([()=>q().map(e=>v("li",null,v("a",{onclick:M,href:"#"+e},e)))])),document.querySelector(".results").append(v([()=>q().map(e=>v("div",{class:"benchmark is-12 column"},v("div",{id:e})))])),i(P),window.addEventListener("hashchange",function(){location.hash&&$(location.hash)}),location.hash&&$(location.hash)}();
