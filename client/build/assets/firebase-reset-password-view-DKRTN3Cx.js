import{j as V,D as Pc,B as Me,I as _n,G as Sc,f as bc,T as Cc,_ as Vi,z as bt,u as Ni,g as kc,r as ua,h as ha,i as Di,k as ue,L as gi,R as _i,p as xe,l as da,m as fa,n as Oi,F as Mi,o as pa,q as xi,t as Li,S as Vc,P as Nc,e as Dc}from"./index-CvkUPu6K.js";function ma({sx:n,label:t="OR"}){return V.jsx(Pc,{sx:{my:3,typography:"overline",color:"text.disabled","&::before, :after":{borderTopStyle:"dashed"},...n},children:t})}function ga({sx:n,signInWithGoogle:t,singInWithGithub:e,signInWithTwitter:r,...s}){return V.jsxs(Me,{gap:1.5,display:"flex",justifyContent:"center",sx:n,...s,children:[V.jsx(_n,{color:"inherit",onClick:t,children:V.jsx(Sc,{width:22})}),V.jsx(_n,{color:"inherit",onClick:e,children:V.jsx(bc,{width:22})}),V.jsx(_n,{color:"inherit",onClick:r,children:V.jsx(Cc,{width:22})})]})}var po={};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _a=function(n){const t=[];let e=0;for(let r=0;r<n.length;r++){let s=n.charCodeAt(r);s<128?t[e++]=s:s<2048?(t[e++]=s>>6|192,t[e++]=s&63|128):(s&64512)===55296&&r+1<n.length&&(n.charCodeAt(r+1)&64512)===56320?(s=65536+((s&1023)<<10)+(n.charCodeAt(++r)&1023),t[e++]=s>>18|240,t[e++]=s>>12&63|128,t[e++]=s>>6&63|128,t[e++]=s&63|128):(t[e++]=s>>12|224,t[e++]=s>>6&63|128,t[e++]=s&63|128)}return t},Oc=function(n){const t=[];let e=0,r=0;for(;e<n.length;){const s=n[e++];if(s<128)t[r++]=String.fromCharCode(s);else if(s>191&&s<224){const o=n[e++];t[r++]=String.fromCharCode((s&31)<<6|o&63)}else if(s>239&&s<365){const o=n[e++],l=n[e++],u=n[e++],h=((s&7)<<18|(o&63)<<12|(l&63)<<6|u&63)-65536;t[r++]=String.fromCharCode(55296+(h>>10)),t[r++]=String.fromCharCode(56320+(h&1023))}else{const o=n[e++],l=n[e++];t[r++]=String.fromCharCode((s&15)<<12|(o&63)<<6|l&63)}}return t.join("")},ya={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(n,t){if(!Array.isArray(n))throw Error("encodeByteArray takes an array as a parameter");this.init_();const e=t?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let s=0;s<n.length;s+=3){const o=n[s],l=s+1<n.length,u=l?n[s+1]:0,h=s+2<n.length,f=h?n[s+2]:0,I=o>>2,A=(o&3)<<4|u>>4;let P=(u&15)<<2|f>>6,C=f&63;h||(C=64,l||(P=64)),r.push(e[I],e[A],e[P],e[C])}return r.join("")},encodeString(n,t){return this.HAS_NATIVE_SUPPORT&&!t?btoa(n):this.encodeByteArray(_a(n),t)},decodeString(n,t){return this.HAS_NATIVE_SUPPORT&&!t?atob(n):Oc(this.decodeStringToByteArray(n,t))},decodeStringToByteArray(n,t){this.init_();const e=t?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let s=0;s<n.length;){const o=e[n.charAt(s++)],u=s<n.length?e[n.charAt(s)]:0;++s;const f=s<n.length?e[n.charAt(s)]:64;++s;const A=s<n.length?e[n.charAt(s)]:64;if(++s,o==null||u==null||f==null||A==null)throw new Mc;const P=o<<2|u>>4;if(r.push(P),f!==64){const C=u<<4&240|f>>2;if(r.push(C),A!==64){const k=f<<6&192|A;r.push(k)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let n=0;n<this.ENCODED_VALS.length;n++)this.byteToCharMap_[n]=this.ENCODED_VALS.charAt(n),this.charToByteMap_[this.byteToCharMap_[n]]=n,this.byteToCharMapWebSafe_[n]=this.ENCODED_VALS_WEBSAFE.charAt(n),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[n]]=n,n>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(n)]=n,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(n)]=n)}}};class Mc extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const xc=function(n){const t=_a(n);return ya.encodeByteArray(t,!0)},va=function(n){return xc(n).replace(/\./g,"")},Ea=function(n){try{return ya.decodeString(n,!0)}catch(t){console.error("base64Decode failed: ",t)}return null};/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Lc(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Fc=()=>Lc().__FIREBASE_DEFAULTS__,Uc=()=>{if(typeof process>"u"||typeof po>"u")return;const n=po.__FIREBASE_DEFAULTS__;if(n)return JSON.parse(n)},Bc=()=>{if(typeof document>"u")return;let n;try{n=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const t=n&&Ea(n[1]);return t&&JSON.parse(t)},Ia=()=>{try{return Fc()||Uc()||Bc()}catch(n){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${n}`);return}},jc=n=>{var t;return(t=Ia())===null||t===void 0?void 0:t[`_${n}`]};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Rt(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function $c(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(Rt())}function qc(){var n;const t=(n=Ia())===null||n===void 0?void 0:n.forceEnvironment;if(t==="node")return!0;if(t==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function Hc(){const n=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof n=="object"&&n.id!==void 0}function Gc(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function Kc(){return!qc()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function Wc(){try{return typeof indexedDB=="object"}catch{return!1}}function zc(){return new Promise((n,t)=>{try{let e=!0;const r="validate-browser-context-for-indexeddb-analytics-module",s=self.indexedDB.open(r);s.onsuccess=()=>{s.result.close(),e||self.indexedDB.deleteDatabase(r),n(!0)},s.onupgradeneeded=()=>{e=!1},s.onerror=()=>{var o;t(((o=s.error)===null||o===void 0?void 0:o.message)||"")}}catch(e){t(e)}})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Qc="FirebaseError";class Ht extends Error{constructor(t,e,r){super(e),this.code=t,this.customData=r,this.name=Qc,Object.setPrototypeOf(this,Ht.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Nn.prototype.create)}}class Nn{constructor(t,e,r){this.service=t,this.serviceName=e,this.errors=r}create(t,...e){const r=e[0]||{},s=`${this.service}/${t}`,o=this.errors[t],l=o?Xc(o,r):"Error",u=`${this.serviceName}: ${l} (${s}).`;return new Ht(s,u,r)}}function Xc(n,t){return n.replace(Jc,(e,r)=>{const s=t[r];return s!=null?String(s):`<${r}?>`})}const Jc=/\{\$([^}]+)}/g;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Fi(n){const t=[];for(const[e,r]of Object.entries(n))Array.isArray(r)?r.forEach(s=>{t.push(encodeURIComponent(e)+"="+encodeURIComponent(s))}):t.push(encodeURIComponent(e)+"="+encodeURIComponent(r));return t.length?"&"+t.join("&"):""}function pn(n){const t={};return n.replace(/^\?/,"").split("&").forEach(r=>{if(r){const[s,o]=r.split("=");t[decodeURIComponent(s)]=decodeURIComponent(o)}}),t}function mn(n){const t=n.indexOf("?");if(!t)return"";const e=n.indexOf("#",t);return n.substring(t,e>0?e:void 0)}function Yc(n,t){const e=new Zc(n,t);return e.subscribe.bind(e)}class Zc{constructor(t,e){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=e,this.task.then(()=>{t(this)}).catch(r=>{this.error(r)})}next(t){this.forEachObserver(e=>{e.next(t)})}error(t){this.forEachObserver(e=>{e.error(t)}),this.close(t)}complete(){this.forEachObserver(t=>{t.complete()}),this.close()}subscribe(t,e,r){let s;if(t===void 0&&e===void 0&&r===void 0)throw new Error("Missing Observer.");tu(t,["next","error","complete"])?s=t:s={next:t,error:e,complete:r},s.next===void 0&&(s.next=oi),s.error===void 0&&(s.error=oi),s.complete===void 0&&(s.complete=oi);const o=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?s.error(this.finalError):s.complete()}catch{}}),this.observers.push(s),o}unsubscribeOne(t){this.observers===void 0||this.observers[t]===void 0||(delete this.observers[t],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(t){if(!this.finalized)for(let e=0;e<this.observers.length;e++)this.sendOne(e,t)}sendOne(t,e){this.task.then(()=>{if(this.observers!==void 0&&this.observers[t]!==void 0)try{e(this.observers[t])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(t){this.finalized||(this.finalized=!0,t!==void 0&&(this.finalError=t),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function tu(n,t){if(typeof n!="object"||n===null)return!1;for(const e of t)if(e in n&&typeof n[e]=="function")return!0;return!1}function oi(){}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Pt(n){return n&&n._delegate?n._delegate:n}class Le{constructor(t,e,r){this.name=t,this.instanceFactory=e,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(t){return this.instantiationMode=t,this}setMultipleInstances(t){return this.multipleInstances=t,this}setServiceProps(t){return this.serviceProps=t,this}setInstanceCreatedCallback(t){return this.onInstanceCreated=t,this}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var F;(function(n){n[n.DEBUG=0]="DEBUG",n[n.VERBOSE=1]="VERBOSE",n[n.INFO=2]="INFO",n[n.WARN=3]="WARN",n[n.ERROR=4]="ERROR",n[n.SILENT=5]="SILENT"})(F||(F={}));const eu={debug:F.DEBUG,verbose:F.VERBOSE,info:F.INFO,warn:F.WARN,error:F.ERROR,silent:F.SILENT},nu=F.INFO,ru={[F.DEBUG]:"log",[F.VERBOSE]:"log",[F.INFO]:"info",[F.WARN]:"warn",[F.ERROR]:"error"},iu=(n,t,...e)=>{if(t<n.logLevel)return;const r=new Date().toISOString(),s=ru[t];if(s)console[s](`[${r}]  ${n.name}:`,...e);else throw new Error(`Attempted to log a message with an invalid logType (value: ${t})`)};class Ui{constructor(t){this.name=t,this._logLevel=nu,this._logHandler=iu,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(t){if(!(t in F))throw new TypeError(`Invalid value "${t}" assigned to \`logLevel\``);this._logLevel=t}setLogLevel(t){this._logLevel=typeof t=="string"?eu[t]:t}get logHandler(){return this._logHandler}set logHandler(t){if(typeof t!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=t}get userLogHandler(){return this._userLogHandler}set userLogHandler(t){this._userLogHandler=t}debug(...t){this._userLogHandler&&this._userLogHandler(this,F.DEBUG,...t),this._logHandler(this,F.DEBUG,...t)}log(...t){this._userLogHandler&&this._userLogHandler(this,F.VERBOSE,...t),this._logHandler(this,F.VERBOSE,...t)}info(...t){this._userLogHandler&&this._userLogHandler(this,F.INFO,...t),this._logHandler(this,F.INFO,...t)}warn(...t){this._userLogHandler&&this._userLogHandler(this,F.WARN,...t),this._logHandler(this,F.WARN,...t)}error(...t){this._userLogHandler&&this._userLogHandler(this,F.ERROR,...t),this._logHandler(this,F.ERROR,...t)}}const su=(n,t)=>t.some(e=>n instanceof e);let mo,go;function ou(){return mo||(mo=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function au(){return go||(go=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const Ta=new WeakMap,yi=new WeakMap,wa=new WeakMap,ai=new WeakMap,Bi=new WeakMap;function lu(n){const t=new Promise((e,r)=>{const s=()=>{n.removeEventListener("success",o),n.removeEventListener("error",l)},o=()=>{e(Yt(n.result)),s()},l=()=>{r(n.error),s()};n.addEventListener("success",o),n.addEventListener("error",l)});return t.then(e=>{e instanceof IDBCursor&&Ta.set(e,n)}).catch(()=>{}),Bi.set(t,n),t}function cu(n){if(yi.has(n))return;const t=new Promise((e,r)=>{const s=()=>{n.removeEventListener("complete",o),n.removeEventListener("error",l),n.removeEventListener("abort",l)},o=()=>{e(),s()},l=()=>{r(n.error||new DOMException("AbortError","AbortError")),s()};n.addEventListener("complete",o),n.addEventListener("error",l),n.addEventListener("abort",l)});yi.set(n,t)}let vi={get(n,t,e){if(n instanceof IDBTransaction){if(t==="done")return yi.get(n);if(t==="objectStoreNames")return n.objectStoreNames||wa.get(n);if(t==="store")return e.objectStoreNames[1]?void 0:e.objectStore(e.objectStoreNames[0])}return Yt(n[t])},set(n,t,e){return n[t]=e,!0},has(n,t){return n instanceof IDBTransaction&&(t==="done"||t==="store")?!0:t in n}};function uu(n){vi=n(vi)}function hu(n){return n===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(t,...e){const r=n.call(li(this),t,...e);return wa.set(r,t.sort?t.sort():[t]),Yt(r)}:au().includes(n)?function(...t){return n.apply(li(this),t),Yt(Ta.get(this))}:function(...t){return Yt(n.apply(li(this),t))}}function du(n){return typeof n=="function"?hu(n):(n instanceof IDBTransaction&&cu(n),su(n,ou())?new Proxy(n,vi):n)}function Yt(n){if(n instanceof IDBRequest)return lu(n);if(ai.has(n))return ai.get(n);const t=du(n);return t!==n&&(ai.set(n,t),Bi.set(t,n)),t}const li=n=>Bi.get(n);function fu(n,t,{blocked:e,upgrade:r,blocking:s,terminated:o}={}){const l=indexedDB.open(n,t),u=Yt(l);return r&&l.addEventListener("upgradeneeded",h=>{r(Yt(l.result),h.oldVersion,h.newVersion,Yt(l.transaction),h)}),e&&l.addEventListener("blocked",h=>e(h.oldVersion,h.newVersion,h)),u.then(h=>{o&&h.addEventListener("close",()=>o()),s&&h.addEventListener("versionchange",f=>s(f.oldVersion,f.newVersion,f))}).catch(()=>{}),u}const pu=["get","getKey","getAll","getAllKeys","count"],mu=["put","add","delete","clear"],ci=new Map;function _o(n,t){if(!(n instanceof IDBDatabase&&!(t in n)&&typeof t=="string"))return;if(ci.get(t))return ci.get(t);const e=t.replace(/FromIndex$/,""),r=t!==e,s=mu.includes(e);if(!(e in(r?IDBIndex:IDBObjectStore).prototype)||!(s||pu.includes(e)))return;const o=async function(l,...u){const h=this.transaction(l,s?"readwrite":"readonly");let f=h.store;return r&&(f=f.index(u.shift())),(await Promise.all([f[e](...u),s&&h.done]))[0]};return ci.set(t,o),o}uu(n=>({...n,get:(t,e,r)=>_o(t,e)||n.get(t,e,r),has:(t,e)=>!!_o(t,e)||n.has(t,e)}));/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gu{constructor(t){this.container=t}getPlatformInfoString(){return this.container.getProviders().map(e=>{if(_u(e)){const r=e.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(e=>e).join(" ")}}function _u(n){const t=n.getComponent();return(t==null?void 0:t.type)==="VERSION"}const Ei="@firebase/app",yo="0.10.9";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $t=new Ui("@firebase/app"),yu="@firebase/app-compat",vu="@firebase/analytics-compat",Eu="@firebase/analytics",Iu="@firebase/app-check-compat",Tu="@firebase/app-check",wu="@firebase/auth",Au="@firebase/auth-compat",Ru="@firebase/database",Pu="@firebase/database-compat",Su="@firebase/functions",bu="@firebase/functions-compat",Cu="@firebase/installations",ku="@firebase/installations-compat",Vu="@firebase/messaging",Nu="@firebase/messaging-compat",Du="@firebase/performance",Ou="@firebase/performance-compat",Mu="@firebase/remote-config",xu="@firebase/remote-config-compat",Lu="@firebase/storage",Fu="@firebase/storage-compat",Uu="@firebase/firestore",Bu="@firebase/vertexai-preview",ju="@firebase/firestore-compat",$u="firebase",qu="10.13.0",Hu={[Ei]:"fire-core",[yu]:"fire-core-compat",[Eu]:"fire-analytics",[vu]:"fire-analytics-compat",[Tu]:"fire-app-check",[Iu]:"fire-app-check-compat",[wu]:"fire-auth",[Au]:"fire-auth-compat",[Ru]:"fire-rtdb",[Pu]:"fire-rtdb-compat",[Su]:"fire-fn",[bu]:"fire-fn-compat",[Cu]:"fire-iid",[ku]:"fire-iid-compat",[Vu]:"fire-fcm",[Nu]:"fire-fcm-compat",[Du]:"fire-perf",[Ou]:"fire-perf-compat",[Mu]:"fire-rc",[xu]:"fire-rc-compat",[Lu]:"fire-gcs",[Fu]:"fire-gcs-compat",[Uu]:"fire-fst",[ju]:"fire-fst-compat",[Bu]:"fire-vertex","fire-js":"fire-js",[$u]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Gu=new Map,Ku=new Map,vo=new Map;function Eo(n,t){try{n.container.addComponent(t)}catch(e){$t.debug(`Component ${t.name} failed to register with FirebaseApp ${n.name}`,e)}}function Fe(n){const t=n.name;if(vo.has(t))return $t.debug(`There were multiple attempts to register component ${t}.`),!1;vo.set(t,n);for(const e of Gu.values())Eo(e,n);for(const e of Ku.values())Eo(e,n);return!0}function Ct(n){return n.settings!==void 0}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Wu={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},ji=new Nn("app","Firebase",Wu);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Pr=qu;function Zt(n,t,e){var r;let s=(r=Hu[n])!==null&&r!==void 0?r:n;e&&(s+=`-${e}`);const o=s.match(/\s|\//),l=t.match(/\s|\//);if(o||l){const u=[`Unable to register library "${s}" with version "${t}":`];o&&u.push(`library name "${s}" contains illegal characters (whitespace or "/")`),o&&l&&u.push("and"),l&&u.push(`version name "${t}" contains illegal characters (whitespace or "/")`),$t.warn(u.join(" "));return}Fe(new Le(`${s}-version`,()=>({library:s,version:t}),"VERSION"))}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const zu="firebase-heartbeat-database",Qu=1,wn="firebase-heartbeat-store";let ui=null;function Aa(){return ui||(ui=fu(zu,Qu,{upgrade:(n,t)=>{switch(t){case 0:try{n.createObjectStore(wn)}catch(e){console.warn(e)}}}}).catch(n=>{throw ji.create("idb-open",{originalErrorMessage:n.message})})),ui}async function Xu(n){try{const e=(await Aa()).transaction(wn),r=await e.objectStore(wn).get(Ra(n));return await e.done,r}catch(t){if(t instanceof Ht)$t.warn(t.message);else{const e=ji.create("idb-get",{originalErrorMessage:t==null?void 0:t.message});$t.warn(e.message)}}}async function Io(n,t){try{const r=(await Aa()).transaction(wn,"readwrite");await r.objectStore(wn).put(t,Ra(n)),await r.done}catch(e){if(e instanceof Ht)$t.warn(e.message);else{const r=ji.create("idb-set",{originalErrorMessage:e==null?void 0:e.message});$t.warn(r.message)}}}function Ra(n){return`${n.name}!${n.options.appId}`}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ju=1024,Yu=30*24*60*60*1e3;class Zu{constructor(t){this.container=t,this._heartbeatsCache=null;const e=this.container.getProvider("app").getImmediate();this._storage=new eh(e),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){var t,e,r;try{const o=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),l=To();return console.log("heartbeats",(t=this._heartbeatsCache)===null||t===void 0?void 0:t.heartbeats),((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((r=this._heartbeatsCache)===null||r===void 0?void 0:r.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===l||this._heartbeatsCache.heartbeats.some(u=>u.date===l)?void 0:(this._heartbeatsCache.heartbeats.push({date:l,agent:o}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(u=>{const h=new Date(u.date).valueOf();return Date.now()-h<=Yu}),this._storage.overwrite(this._heartbeatsCache))}catch(s){$t.warn(s)}}async getHeartbeatsHeader(){var t;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((t=this._heartbeatsCache)===null||t===void 0?void 0:t.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const e=To(),{heartbeatsToSend:r,unsentEntries:s}=th(this._heartbeatsCache.heartbeats),o=va(JSON.stringify({version:2,heartbeats:r}));return this._heartbeatsCache.lastSentHeartbeatDate=e,s.length>0?(this._heartbeatsCache.heartbeats=s,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),o}catch(e){return $t.warn(e),""}}}function To(){return new Date().toISOString().substring(0,10)}function th(n,t=Ju){const e=[];let r=n.slice();for(const s of n){const o=e.find(l=>l.agent===s.agent);if(o){if(o.dates.push(s.date),wo(e)>t){o.dates.pop();break}}else if(e.push({agent:s.agent,dates:[s.date]}),wo(e)>t){e.pop();break}r=r.slice(1)}return{heartbeatsToSend:e,unsentEntries:r}}class eh{constructor(t){this.app=t,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return Wc()?zc().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const e=await Xu(this.app);return e!=null&&e.heartbeats?e:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(t){var e;if(await this._canUseIndexedDBPromise){const s=await this.read();return Io(this.app,{lastSentHeartbeatDate:(e=t.lastSentHeartbeatDate)!==null&&e!==void 0?e:s.lastSentHeartbeatDate,heartbeats:t.heartbeats})}else return}async add(t){var e;if(await this._canUseIndexedDBPromise){const s=await this.read();return Io(this.app,{lastSentHeartbeatDate:(e=t.lastSentHeartbeatDate)!==null&&e!==void 0?e:s.lastSentHeartbeatDate,heartbeats:[...s.heartbeats,...t.heartbeats]})}else return}}function wo(n){return va(JSON.stringify({version:2,heartbeats:n})).length}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function nh(n){Fe(new Le("platform-logger",t=>new gu(t),"PRIVATE")),Fe(new Le("heartbeat",t=>new Zu(t),"PRIVATE")),Zt(Ei,yo,n),Zt(Ei,yo,"esm2017"),Zt("fire-js","")}nh("");var Ao=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var Pa;(function(){var n;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function t(v,p){function g(){}g.prototype=p.prototype,v.D=p.prototype,v.prototype=new g,v.prototype.constructor=v,v.C=function(_,y,T){for(var m=Array(arguments.length-2),Dt=2;Dt<arguments.length;Dt++)m[Dt-2]=arguments[Dt];return p.prototype[y].apply(_,m)}}function e(){this.blockSize=-1}function r(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.B=Array(this.blockSize),this.o=this.h=0,this.s()}t(r,e),r.prototype.s=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function s(v,p,g){g||(g=0);var _=Array(16);if(typeof p=="string")for(var y=0;16>y;++y)_[y]=p.charCodeAt(g++)|p.charCodeAt(g++)<<8|p.charCodeAt(g++)<<16|p.charCodeAt(g++)<<24;else for(y=0;16>y;++y)_[y]=p[g++]|p[g++]<<8|p[g++]<<16|p[g++]<<24;p=v.g[0],g=v.g[1],y=v.g[2];var T=v.g[3],m=p+(T^g&(y^T))+_[0]+3614090360&4294967295;p=g+(m<<7&4294967295|m>>>25),m=T+(y^p&(g^y))+_[1]+3905402710&4294967295,T=p+(m<<12&4294967295|m>>>20),m=y+(g^T&(p^g))+_[2]+606105819&4294967295,y=T+(m<<17&4294967295|m>>>15),m=g+(p^y&(T^p))+_[3]+3250441966&4294967295,g=y+(m<<22&4294967295|m>>>10),m=p+(T^g&(y^T))+_[4]+4118548399&4294967295,p=g+(m<<7&4294967295|m>>>25),m=T+(y^p&(g^y))+_[5]+1200080426&4294967295,T=p+(m<<12&4294967295|m>>>20),m=y+(g^T&(p^g))+_[6]+2821735955&4294967295,y=T+(m<<17&4294967295|m>>>15),m=g+(p^y&(T^p))+_[7]+4249261313&4294967295,g=y+(m<<22&4294967295|m>>>10),m=p+(T^g&(y^T))+_[8]+1770035416&4294967295,p=g+(m<<7&4294967295|m>>>25),m=T+(y^p&(g^y))+_[9]+2336552879&4294967295,T=p+(m<<12&4294967295|m>>>20),m=y+(g^T&(p^g))+_[10]+4294925233&4294967295,y=T+(m<<17&4294967295|m>>>15),m=g+(p^y&(T^p))+_[11]+2304563134&4294967295,g=y+(m<<22&4294967295|m>>>10),m=p+(T^g&(y^T))+_[12]+1804603682&4294967295,p=g+(m<<7&4294967295|m>>>25),m=T+(y^p&(g^y))+_[13]+4254626195&4294967295,T=p+(m<<12&4294967295|m>>>20),m=y+(g^T&(p^g))+_[14]+2792965006&4294967295,y=T+(m<<17&4294967295|m>>>15),m=g+(p^y&(T^p))+_[15]+1236535329&4294967295,g=y+(m<<22&4294967295|m>>>10),m=p+(y^T&(g^y))+_[1]+4129170786&4294967295,p=g+(m<<5&4294967295|m>>>27),m=T+(g^y&(p^g))+_[6]+3225465664&4294967295,T=p+(m<<9&4294967295|m>>>23),m=y+(p^g&(T^p))+_[11]+643717713&4294967295,y=T+(m<<14&4294967295|m>>>18),m=g+(T^p&(y^T))+_[0]+3921069994&4294967295,g=y+(m<<20&4294967295|m>>>12),m=p+(y^T&(g^y))+_[5]+3593408605&4294967295,p=g+(m<<5&4294967295|m>>>27),m=T+(g^y&(p^g))+_[10]+38016083&4294967295,T=p+(m<<9&4294967295|m>>>23),m=y+(p^g&(T^p))+_[15]+3634488961&4294967295,y=T+(m<<14&4294967295|m>>>18),m=g+(T^p&(y^T))+_[4]+3889429448&4294967295,g=y+(m<<20&4294967295|m>>>12),m=p+(y^T&(g^y))+_[9]+568446438&4294967295,p=g+(m<<5&4294967295|m>>>27),m=T+(g^y&(p^g))+_[14]+3275163606&4294967295,T=p+(m<<9&4294967295|m>>>23),m=y+(p^g&(T^p))+_[3]+4107603335&4294967295,y=T+(m<<14&4294967295|m>>>18),m=g+(T^p&(y^T))+_[8]+1163531501&4294967295,g=y+(m<<20&4294967295|m>>>12),m=p+(y^T&(g^y))+_[13]+2850285829&4294967295,p=g+(m<<5&4294967295|m>>>27),m=T+(g^y&(p^g))+_[2]+4243563512&4294967295,T=p+(m<<9&4294967295|m>>>23),m=y+(p^g&(T^p))+_[7]+1735328473&4294967295,y=T+(m<<14&4294967295|m>>>18),m=g+(T^p&(y^T))+_[12]+2368359562&4294967295,g=y+(m<<20&4294967295|m>>>12),m=p+(g^y^T)+_[5]+4294588738&4294967295,p=g+(m<<4&4294967295|m>>>28),m=T+(p^g^y)+_[8]+2272392833&4294967295,T=p+(m<<11&4294967295|m>>>21),m=y+(T^p^g)+_[11]+1839030562&4294967295,y=T+(m<<16&4294967295|m>>>16),m=g+(y^T^p)+_[14]+4259657740&4294967295,g=y+(m<<23&4294967295|m>>>9),m=p+(g^y^T)+_[1]+2763975236&4294967295,p=g+(m<<4&4294967295|m>>>28),m=T+(p^g^y)+_[4]+1272893353&4294967295,T=p+(m<<11&4294967295|m>>>21),m=y+(T^p^g)+_[7]+4139469664&4294967295,y=T+(m<<16&4294967295|m>>>16),m=g+(y^T^p)+_[10]+3200236656&4294967295,g=y+(m<<23&4294967295|m>>>9),m=p+(g^y^T)+_[13]+681279174&4294967295,p=g+(m<<4&4294967295|m>>>28),m=T+(p^g^y)+_[0]+3936430074&4294967295,T=p+(m<<11&4294967295|m>>>21),m=y+(T^p^g)+_[3]+3572445317&4294967295,y=T+(m<<16&4294967295|m>>>16),m=g+(y^T^p)+_[6]+76029189&4294967295,g=y+(m<<23&4294967295|m>>>9),m=p+(g^y^T)+_[9]+3654602809&4294967295,p=g+(m<<4&4294967295|m>>>28),m=T+(p^g^y)+_[12]+3873151461&4294967295,T=p+(m<<11&4294967295|m>>>21),m=y+(T^p^g)+_[15]+530742520&4294967295,y=T+(m<<16&4294967295|m>>>16),m=g+(y^T^p)+_[2]+3299628645&4294967295,g=y+(m<<23&4294967295|m>>>9),m=p+(y^(g|~T))+_[0]+4096336452&4294967295,p=g+(m<<6&4294967295|m>>>26),m=T+(g^(p|~y))+_[7]+1126891415&4294967295,T=p+(m<<10&4294967295|m>>>22),m=y+(p^(T|~g))+_[14]+2878612391&4294967295,y=T+(m<<15&4294967295|m>>>17),m=g+(T^(y|~p))+_[5]+4237533241&4294967295,g=y+(m<<21&4294967295|m>>>11),m=p+(y^(g|~T))+_[12]+1700485571&4294967295,p=g+(m<<6&4294967295|m>>>26),m=T+(g^(p|~y))+_[3]+2399980690&4294967295,T=p+(m<<10&4294967295|m>>>22),m=y+(p^(T|~g))+_[10]+4293915773&4294967295,y=T+(m<<15&4294967295|m>>>17),m=g+(T^(y|~p))+_[1]+2240044497&4294967295,g=y+(m<<21&4294967295|m>>>11),m=p+(y^(g|~T))+_[8]+1873313359&4294967295,p=g+(m<<6&4294967295|m>>>26),m=T+(g^(p|~y))+_[15]+4264355552&4294967295,T=p+(m<<10&4294967295|m>>>22),m=y+(p^(T|~g))+_[6]+2734768916&4294967295,y=T+(m<<15&4294967295|m>>>17),m=g+(T^(y|~p))+_[13]+1309151649&4294967295,g=y+(m<<21&4294967295|m>>>11),m=p+(y^(g|~T))+_[4]+4149444226&4294967295,p=g+(m<<6&4294967295|m>>>26),m=T+(g^(p|~y))+_[11]+3174756917&4294967295,T=p+(m<<10&4294967295|m>>>22),m=y+(p^(T|~g))+_[2]+718787259&4294967295,y=T+(m<<15&4294967295|m>>>17),m=g+(T^(y|~p))+_[9]+3951481745&4294967295,v.g[0]=v.g[0]+p&4294967295,v.g[1]=v.g[1]+(y+(m<<21&4294967295|m>>>11))&4294967295,v.g[2]=v.g[2]+y&4294967295,v.g[3]=v.g[3]+T&4294967295}r.prototype.u=function(v,p){p===void 0&&(p=v.length);for(var g=p-this.blockSize,_=this.B,y=this.h,T=0;T<p;){if(y==0)for(;T<=g;)s(this,v,T),T+=this.blockSize;if(typeof v=="string"){for(;T<p;)if(_[y++]=v.charCodeAt(T++),y==this.blockSize){s(this,_),y=0;break}}else for(;T<p;)if(_[y++]=v[T++],y==this.blockSize){s(this,_),y=0;break}}this.h=y,this.o+=p},r.prototype.v=function(){var v=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);v[0]=128;for(var p=1;p<v.length-8;++p)v[p]=0;var g=8*this.o;for(p=v.length-8;p<v.length;++p)v[p]=g&255,g/=256;for(this.u(v),v=Array(16),p=g=0;4>p;++p)for(var _=0;32>_;_+=8)v[g++]=this.g[p]>>>_&255;return v};function o(v,p){var g=u;return Object.prototype.hasOwnProperty.call(g,v)?g[v]:g[v]=p(v)}function l(v,p){this.h=p;for(var g=[],_=!0,y=v.length-1;0<=y;y--){var T=v[y]|0;_&&T==p||(g[y]=T,_=!1)}this.g=g}var u={};function h(v){return-128<=v&&128>v?o(v,function(p){return new l([p|0],0>p?-1:0)}):new l([v|0],0>v?-1:0)}function f(v){if(isNaN(v)||!isFinite(v))return A;if(0>v)return D(f(-v));for(var p=[],g=1,_=0;v>=g;_++)p[_]=v/g|0,g*=4294967296;return new l(p,0)}function I(v,p){if(v.length==0)throw Error("number format error: empty string");if(p=p||10,2>p||36<p)throw Error("radix out of range: "+p);if(v.charAt(0)=="-")return D(I(v.substring(1),p));if(0<=v.indexOf("-"))throw Error('number format error: interior "-" character');for(var g=f(Math.pow(p,8)),_=A,y=0;y<v.length;y+=8){var T=Math.min(8,v.length-y),m=parseInt(v.substring(y,y+T),p);8>T?(T=f(Math.pow(p,T)),_=_.j(T).add(f(m))):(_=_.j(g),_=_.add(f(m)))}return _}var A=h(0),P=h(1),C=h(16777216);n=l.prototype,n.m=function(){if(O(this))return-D(this).m();for(var v=0,p=1,g=0;g<this.g.length;g++){var _=this.i(g);v+=(0<=_?_:4294967296+_)*p,p*=4294967296}return v},n.toString=function(v){if(v=v||10,2>v||36<v)throw Error("radix out of range: "+v);if(k(this))return"0";if(O(this))return"-"+D(this).toString(v);for(var p=f(Math.pow(v,6)),g=this,_="";;){var y=Z(g,p).g;g=K(g,y.j(p));var T=((0<g.g.length?g.g[0]:g.h)>>>0).toString(v);if(g=y,k(g))return T+_;for(;6>T.length;)T="0"+T;_=T+_}},n.i=function(v){return 0>v?0:v<this.g.length?this.g[v]:this.h};function k(v){if(v.h!=0)return!1;for(var p=0;p<v.g.length;p++)if(v.g[p]!=0)return!1;return!0}function O(v){return v.h==-1}n.l=function(v){return v=K(this,v),O(v)?-1:k(v)?0:1};function D(v){for(var p=v.g.length,g=[],_=0;_<p;_++)g[_]=~v.g[_];return new l(g,~v.h).add(P)}n.abs=function(){return O(this)?D(this):this},n.add=function(v){for(var p=Math.max(this.g.length,v.g.length),g=[],_=0,y=0;y<=p;y++){var T=_+(this.i(y)&65535)+(v.i(y)&65535),m=(T>>>16)+(this.i(y)>>>16)+(v.i(y)>>>16);_=m>>>16,T&=65535,m&=65535,g[y]=m<<16|T}return new l(g,g[g.length-1]&-2147483648?-1:0)};function K(v,p){return v.add(D(p))}n.j=function(v){if(k(this)||k(v))return A;if(O(this))return O(v)?D(this).j(D(v)):D(D(this).j(v));if(O(v))return D(this.j(D(v)));if(0>this.l(C)&&0>v.l(C))return f(this.m()*v.m());for(var p=this.g.length+v.g.length,g=[],_=0;_<2*p;_++)g[_]=0;for(_=0;_<this.g.length;_++)for(var y=0;y<v.g.length;y++){var T=this.i(_)>>>16,m=this.i(_)&65535,Dt=v.i(y)>>>16,We=v.i(y)&65535;g[2*_+2*y]+=m*We,H(g,2*_+2*y),g[2*_+2*y+1]+=T*We,H(g,2*_+2*y+1),g[2*_+2*y+1]+=m*Dt,H(g,2*_+2*y+1),g[2*_+2*y+2]+=T*Dt,H(g,2*_+2*y+2)}for(_=0;_<p;_++)g[_]=g[2*_+1]<<16|g[2*_];for(_=p;_<2*p;_++)g[_]=0;return new l(g,0)};function H(v,p){for(;(v[p]&65535)!=v[p];)v[p+1]+=v[p]>>>16,v[p]&=65535,p++}function W(v,p){this.g=v,this.h=p}function Z(v,p){if(k(p))throw Error("division by zero");if(k(v))return new W(A,A);if(O(v))return p=Z(D(v),p),new W(D(p.g),D(p.h));if(O(p))return p=Z(v,D(p)),new W(D(p.g),p.h);if(30<v.g.length){if(O(v)||O(p))throw Error("slowDivide_ only works with positive integers.");for(var g=P,_=p;0>=_.l(v);)g=St(g),_=St(_);var y=et(g,1),T=et(_,1);for(_=et(_,2),g=et(g,2);!k(_);){var m=T.add(_);0>=m.l(v)&&(y=y.add(g),T=m),_=et(_,1),g=et(g,1)}return p=K(v,y.j(p)),new W(y,p)}for(y=A;0<=v.l(p);){for(g=Math.max(1,Math.floor(v.m()/p.m())),_=Math.ceil(Math.log(g)/Math.LN2),_=48>=_?1:Math.pow(2,_-48),T=f(g),m=T.j(p);O(m)||0<m.l(v);)g-=_,T=f(g),m=T.j(p);k(T)&&(T=P),y=y.add(T),v=K(v,m)}return new W(y,v)}n.A=function(v){return Z(this,v).h},n.and=function(v){for(var p=Math.max(this.g.length,v.g.length),g=[],_=0;_<p;_++)g[_]=this.i(_)&v.i(_);return new l(g,this.h&v.h)},n.or=function(v){for(var p=Math.max(this.g.length,v.g.length),g=[],_=0;_<p;_++)g[_]=this.i(_)|v.i(_);return new l(g,this.h|v.h)},n.xor=function(v){for(var p=Math.max(this.g.length,v.g.length),g=[],_=0;_<p;_++)g[_]=this.i(_)^v.i(_);return new l(g,this.h^v.h)};function St(v){for(var p=v.g.length+1,g=[],_=0;_<p;_++)g[_]=v.i(_)<<1|v.i(_-1)>>>31;return new l(g,v.h)}function et(v,p){var g=p>>5;p%=32;for(var _=v.g.length-g,y=[],T=0;T<_;T++)y[T]=0<p?v.i(T+g)>>>p|v.i(T+g+1)<<32-p:v.i(T+g);return new l(y,v.h)}r.prototype.digest=r.prototype.v,r.prototype.reset=r.prototype.s,r.prototype.update=r.prototype.u,l.prototype.add=l.prototype.add,l.prototype.multiply=l.prototype.j,l.prototype.modulo=l.prototype.A,l.prototype.compare=l.prototype.l,l.prototype.toNumber=l.prototype.m,l.prototype.toString=l.prototype.toString,l.prototype.getBits=l.prototype.i,l.fromNumber=f,l.fromString=I,Pa=l}).apply(typeof Ao<"u"?Ao:typeof self<"u"?self:typeof window<"u"?window:{});var rr=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var Sa,ba,gn,Ca,cr,Ii,ka,Va,Na;(function(){var n,t=typeof Object.defineProperties=="function"?Object.defineProperty:function(i,a,c){return i==Array.prototype||i==Object.prototype||(i[a]=c.value),i};function e(i){i=[typeof globalThis=="object"&&globalThis,i,typeof window=="object"&&window,typeof self=="object"&&self,typeof rr=="object"&&rr];for(var a=0;a<i.length;++a){var c=i[a];if(c&&c.Math==Math)return c}throw Error("Cannot find global object")}var r=e(this);function s(i,a){if(a)t:{var c=r;i=i.split(".");for(var d=0;d<i.length-1;d++){var E=i[d];if(!(E in c))break t;c=c[E]}i=i[i.length-1],d=c[i],a=a(d),a!=d&&a!=null&&t(c,i,{configurable:!0,writable:!0,value:a})}}function o(i,a){i instanceof String&&(i+="");var c=0,d=!1,E={next:function(){if(!d&&c<i.length){var w=c++;return{value:a(w,i[w]),done:!1}}return d=!0,{done:!0,value:void 0}}};return E[Symbol.iterator]=function(){return E},E}s("Array.prototype.values",function(i){return i||function(){return o(this,function(a,c){return c})}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var l=l||{},u=this||self;function h(i){var a=typeof i;return a=a!="object"?a:i?Array.isArray(i)?"array":a:"null",a=="array"||a=="object"&&typeof i.length=="number"}function f(i){var a=typeof i;return a=="object"&&i!=null||a=="function"}function I(i,a,c){return i.call.apply(i.bind,arguments)}function A(i,a,c){if(!i)throw Error();if(2<arguments.length){var d=Array.prototype.slice.call(arguments,2);return function(){var E=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(E,d),i.apply(a,E)}}return function(){return i.apply(a,arguments)}}function P(i,a,c){return P=Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?I:A,P.apply(null,arguments)}function C(i,a){var c=Array.prototype.slice.call(arguments,1);return function(){var d=c.slice();return d.push.apply(d,arguments),i.apply(this,d)}}function k(i,a){function c(){}c.prototype=a.prototype,i.aa=a.prototype,i.prototype=new c,i.prototype.constructor=i,i.Qb=function(d,E,w){for(var b=Array(arguments.length-2),$=2;$<arguments.length;$++)b[$-2]=arguments[$];return a.prototype[E].apply(d,b)}}function O(i){const a=i.length;if(0<a){const c=Array(a);for(let d=0;d<a;d++)c[d]=i[d];return c}return[]}function D(i,a){for(let c=1;c<arguments.length;c++){const d=arguments[c];if(h(d)){const E=i.length||0,w=d.length||0;i.length=E+w;for(let b=0;b<w;b++)i[E+b]=d[b]}else i.push(d)}}class K{constructor(a,c){this.i=a,this.j=c,this.h=0,this.g=null}get(){let a;return 0<this.h?(this.h--,a=this.g,this.g=a.next,a.next=null):a=this.i(),a}}function H(i){return/^[\s\xa0]*$/.test(i)}function W(){var i=u.navigator;return i&&(i=i.userAgent)?i:""}function Z(i){return Z[" "](i),i}Z[" "]=function(){};var St=W().indexOf("Gecko")!=-1&&!(W().toLowerCase().indexOf("webkit")!=-1&&W().indexOf("Edge")==-1)&&!(W().indexOf("Trident")!=-1||W().indexOf("MSIE")!=-1)&&W().indexOf("Edge")==-1;function et(i,a,c){for(const d in i)a.call(c,i[d],d,i)}function v(i,a){for(const c in i)a.call(void 0,i[c],c,i)}function p(i){const a={};for(const c in i)a[c]=i[c];return a}const g="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function _(i,a){let c,d;for(let E=1;E<arguments.length;E++){d=arguments[E];for(c in d)i[c]=d[c];for(let w=0;w<g.length;w++)c=g[w],Object.prototype.hasOwnProperty.call(d,c)&&(i[c]=d[c])}}function y(i){var a=1;i=i.split(":");const c=[];for(;0<a&&i.length;)c.push(i.shift()),a--;return i.length&&c.push(i.join(":")),c}function T(i){u.setTimeout(()=>{throw i},0)}function m(){var i=xr;let a=null;return i.g&&(a=i.g,i.g=i.g.next,i.g||(i.h=null),a.next=null),a}class Dt{constructor(){this.h=this.g=null}add(a,c){const d=We.get();d.set(a,c),this.h?this.h.next=d:this.g=d,this.h=d}}var We=new K(()=>new Gl,i=>i.reset());class Gl{constructor(){this.next=this.g=this.h=null}set(a,c){this.h=a,this.g=c,this.next=null}reset(){this.next=this.g=this.h=null}}let ze,Qe=!1,xr=new Dt,fs=()=>{const i=u.Promise.resolve(void 0);ze=()=>{i.then(Kl)}};var Kl=()=>{for(var i;i=m();){try{i.h.call(i.g)}catch(c){T(c)}var a=We;a.j(i),100>a.h&&(a.h++,i.next=a.g,a.g=i)}Qe=!1};function Kt(){this.s=this.s,this.C=this.C}Kt.prototype.s=!1,Kt.prototype.ma=function(){this.s||(this.s=!0,this.N())},Kt.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function ct(i,a){this.type=i,this.g=this.target=a,this.defaultPrevented=!1}ct.prototype.h=function(){this.defaultPrevented=!0};var Wl=function(){if(!u.addEventListener||!Object.defineProperty)return!1;var i=!1,a=Object.defineProperty({},"passive",{get:function(){i=!0}});try{const c=()=>{};u.addEventListener("test",c,a),u.removeEventListener("test",c,a)}catch{}return i}();function Xe(i,a){if(ct.call(this,i?i.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,i){var c=this.type=i.type,d=i.changedTouches&&i.changedTouches.length?i.changedTouches[0]:null;if(this.target=i.target||i.srcElement,this.g=a,a=i.relatedTarget){if(St){t:{try{Z(a.nodeName);var E=!0;break t}catch{}E=!1}E||(a=null)}}else c=="mouseover"?a=i.fromElement:c=="mouseout"&&(a=i.toElement);this.relatedTarget=a,d?(this.clientX=d.clientX!==void 0?d.clientX:d.pageX,this.clientY=d.clientY!==void 0?d.clientY:d.pageY,this.screenX=d.screenX||0,this.screenY=d.screenY||0):(this.clientX=i.clientX!==void 0?i.clientX:i.pageX,this.clientY=i.clientY!==void 0?i.clientY:i.pageY,this.screenX=i.screenX||0,this.screenY=i.screenY||0),this.button=i.button,this.key=i.key||"",this.ctrlKey=i.ctrlKey,this.altKey=i.altKey,this.shiftKey=i.shiftKey,this.metaKey=i.metaKey,this.pointerId=i.pointerId||0,this.pointerType=typeof i.pointerType=="string"?i.pointerType:zl[i.pointerType]||"",this.state=i.state,this.i=i,i.defaultPrevented&&Xe.aa.h.call(this)}}k(Xe,ct);var zl={2:"touch",3:"pen",4:"mouse"};Xe.prototype.h=function(){Xe.aa.h.call(this);var i=this.i;i.preventDefault?i.preventDefault():i.returnValue=!1};var Un="closure_listenable_"+(1e6*Math.random()|0),Ql=0;function Xl(i,a,c,d,E){this.listener=i,this.proxy=null,this.src=a,this.type=c,this.capture=!!d,this.ha=E,this.key=++Ql,this.da=this.fa=!1}function Bn(i){i.da=!0,i.listener=null,i.proxy=null,i.src=null,i.ha=null}function jn(i){this.src=i,this.g={},this.h=0}jn.prototype.add=function(i,a,c,d,E){var w=i.toString();i=this.g[w],i||(i=this.g[w]=[],this.h++);var b=Fr(i,a,d,E);return-1<b?(a=i[b],c||(a.fa=!1)):(a=new Xl(a,this.src,w,!!d,E),a.fa=c,i.push(a)),a};function Lr(i,a){var c=a.type;if(c in i.g){var d=i.g[c],E=Array.prototype.indexOf.call(d,a,void 0),w;(w=0<=E)&&Array.prototype.splice.call(d,E,1),w&&(Bn(a),i.g[c].length==0&&(delete i.g[c],i.h--))}}function Fr(i,a,c,d){for(var E=0;E<i.length;++E){var w=i[E];if(!w.da&&w.listener==a&&w.capture==!!c&&w.ha==d)return E}return-1}var Ur="closure_lm_"+(1e6*Math.random()|0),Br={};function ps(i,a,c,d,E){if(Array.isArray(a)){for(var w=0;w<a.length;w++)ps(i,a[w],c,d,E);return null}return c=_s(c),i&&i[Un]?i.K(a,c,f(d)?!!d.capture:!!d,E):Jl(i,a,c,!1,d,E)}function Jl(i,a,c,d,E,w){if(!a)throw Error("Invalid event type");var b=f(E)?!!E.capture:!!E,$=$r(i);if($||(i[Ur]=$=new jn(i)),c=$.add(a,c,d,b,w),c.proxy)return c;if(d=Yl(),c.proxy=d,d.src=i,d.listener=c,i.addEventListener)Wl||(E=b),E===void 0&&(E=!1),i.addEventListener(a.toString(),d,E);else if(i.attachEvent)i.attachEvent(gs(a.toString()),d);else if(i.addListener&&i.removeListener)i.addListener(d);else throw Error("addEventListener and attachEvent are unavailable.");return c}function Yl(){function i(c){return a.call(i.src,i.listener,c)}const a=Zl;return i}function ms(i,a,c,d,E){if(Array.isArray(a))for(var w=0;w<a.length;w++)ms(i,a[w],c,d,E);else d=f(d)?!!d.capture:!!d,c=_s(c),i&&i[Un]?(i=i.i,a=String(a).toString(),a in i.g&&(w=i.g[a],c=Fr(w,c,d,E),-1<c&&(Bn(w[c]),Array.prototype.splice.call(w,c,1),w.length==0&&(delete i.g[a],i.h--)))):i&&(i=$r(i))&&(a=i.g[a.toString()],i=-1,a&&(i=Fr(a,c,d,E)),(c=-1<i?a[i]:null)&&jr(c))}function jr(i){if(typeof i!="number"&&i&&!i.da){var a=i.src;if(a&&a[Un])Lr(a.i,i);else{var c=i.type,d=i.proxy;a.removeEventListener?a.removeEventListener(c,d,i.capture):a.detachEvent?a.detachEvent(gs(c),d):a.addListener&&a.removeListener&&a.removeListener(d),(c=$r(a))?(Lr(c,i),c.h==0&&(c.src=null,a[Ur]=null)):Bn(i)}}}function gs(i){return i in Br?Br[i]:Br[i]="on"+i}function Zl(i,a){if(i.da)i=!0;else{a=new Xe(a,this);var c=i.listener,d=i.ha||i.src;i.fa&&jr(i),i=c.call(d,a)}return i}function $r(i){return i=i[Ur],i instanceof jn?i:null}var qr="__closure_events_fn_"+(1e9*Math.random()>>>0);function _s(i){return typeof i=="function"?i:(i[qr]||(i[qr]=function(a){return i.handleEvent(a)}),i[qr])}function ut(){Kt.call(this),this.i=new jn(this),this.M=this,this.F=null}k(ut,Kt),ut.prototype[Un]=!0,ut.prototype.removeEventListener=function(i,a,c,d){ms(this,i,a,c,d)};function gt(i,a){var c,d=i.F;if(d)for(c=[];d;d=d.F)c.push(d);if(i=i.M,d=a.type||a,typeof a=="string")a=new ct(a,i);else if(a instanceof ct)a.target=a.target||i;else{var E=a;a=new ct(d,i),_(a,E)}if(E=!0,c)for(var w=c.length-1;0<=w;w--){var b=a.g=c[w];E=$n(b,d,!0,a)&&E}if(b=a.g=i,E=$n(b,d,!0,a)&&E,E=$n(b,d,!1,a)&&E,c)for(w=0;w<c.length;w++)b=a.g=c[w],E=$n(b,d,!1,a)&&E}ut.prototype.N=function(){if(ut.aa.N.call(this),this.i){var i=this.i,a;for(a in i.g){for(var c=i.g[a],d=0;d<c.length;d++)Bn(c[d]);delete i.g[a],i.h--}}this.F=null},ut.prototype.K=function(i,a,c,d){return this.i.add(String(i),a,!1,c,d)},ut.prototype.L=function(i,a,c,d){return this.i.add(String(i),a,!0,c,d)};function $n(i,a,c,d){if(a=i.i.g[String(a)],!a)return!0;a=a.concat();for(var E=!0,w=0;w<a.length;++w){var b=a[w];if(b&&!b.da&&b.capture==c){var $=b.listener,st=b.ha||b.src;b.fa&&Lr(i.i,b),E=$.call(st,d)!==!1&&E}}return E&&!d.defaultPrevented}function ys(i,a,c){if(typeof i=="function")c&&(i=P(i,c));else if(i&&typeof i.handleEvent=="function")i=P(i.handleEvent,i);else throw Error("Invalid listener argument");return 2147483647<Number(a)?-1:u.setTimeout(i,a||0)}function vs(i){i.g=ys(()=>{i.g=null,i.i&&(i.i=!1,vs(i))},i.l);const a=i.h;i.h=null,i.m.apply(null,a)}class tc extends Kt{constructor(a,c){super(),this.m=a,this.l=c,this.h=null,this.i=!1,this.g=null}j(a){this.h=arguments,this.g?this.i=!0:vs(this)}N(){super.N(),this.g&&(u.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function Je(i){Kt.call(this),this.h=i,this.g={}}k(Je,Kt);var Es=[];function Is(i){et(i.g,function(a,c){this.g.hasOwnProperty(c)&&jr(a)},i),i.g={}}Je.prototype.N=function(){Je.aa.N.call(this),Is(this)},Je.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var Hr=u.JSON.stringify,ec=u.JSON.parse,nc=class{stringify(i){return u.JSON.stringify(i,void 0)}parse(i){return u.JSON.parse(i,void 0)}};function Gr(){}Gr.prototype.h=null;function Ts(i){return i.h||(i.h=i.i())}function ws(){}var Ye={OPEN:"a",kb:"b",Ja:"c",wb:"d"};function Kr(){ct.call(this,"d")}k(Kr,ct);function Wr(){ct.call(this,"c")}k(Wr,ct);var oe={},As=null;function qn(){return As=As||new ut}oe.La="serverreachability";function Rs(i){ct.call(this,oe.La,i)}k(Rs,ct);function Ze(i){const a=qn();gt(a,new Rs(a))}oe.STAT_EVENT="statevent";function Ps(i,a){ct.call(this,oe.STAT_EVENT,i),this.stat=a}k(Ps,ct);function _t(i){const a=qn();gt(a,new Ps(a,i))}oe.Ma="timingevent";function Ss(i,a){ct.call(this,oe.Ma,i),this.size=a}k(Ss,ct);function tn(i,a){if(typeof i!="function")throw Error("Fn must not be null and must be a function");return u.setTimeout(function(){i()},a)}function en(){this.g=!0}en.prototype.xa=function(){this.g=!1};function rc(i,a,c,d,E,w){i.info(function(){if(i.g)if(w)for(var b="",$=w.split("&"),st=0;st<$.length;st++){var j=$[st].split("=");if(1<j.length){var ht=j[0];j=j[1];var dt=ht.split("_");b=2<=dt.length&&dt[1]=="type"?b+(ht+"="+j+"&"):b+(ht+"=redacted&")}}else b=null;else b=w;return"XMLHTTP REQ ("+d+") [attempt "+E+"]: "+a+`
`+c+`
`+b})}function ic(i,a,c,d,E,w,b){i.info(function(){return"XMLHTTP RESP ("+d+") [ attempt "+E+"]: "+a+`
`+c+`
`+w+" "+b})}function Pe(i,a,c,d){i.info(function(){return"XMLHTTP TEXT ("+a+"): "+oc(i,c)+(d?" "+d:"")})}function sc(i,a){i.info(function(){return"TIMEOUT: "+a})}en.prototype.info=function(){};function oc(i,a){if(!i.g)return a;if(!a)return null;try{var c=JSON.parse(a);if(c){for(i=0;i<c.length;i++)if(Array.isArray(c[i])){var d=c[i];if(!(2>d.length)){var E=d[1];if(Array.isArray(E)&&!(1>E.length)){var w=E[0];if(w!="noop"&&w!="stop"&&w!="close")for(var b=1;b<E.length;b++)E[b]=""}}}}return Hr(c)}catch{return a}}var Hn={NO_ERROR:0,gb:1,tb:2,sb:3,nb:4,rb:5,ub:6,Ia:7,TIMEOUT:8,xb:9},bs={lb:"complete",Hb:"success",Ja:"error",Ia:"abort",zb:"ready",Ab:"readystatechange",TIMEOUT:"timeout",vb:"incrementaldata",yb:"progress",ob:"downloadprogress",Pb:"uploadprogress"},zr;function Gn(){}k(Gn,Gr),Gn.prototype.g=function(){return new XMLHttpRequest},Gn.prototype.i=function(){return{}},zr=new Gn;function Wt(i,a,c,d){this.j=i,this.i=a,this.l=c,this.R=d||1,this.U=new Je(this),this.I=45e3,this.H=null,this.o=!1,this.m=this.A=this.v=this.L=this.F=this.S=this.B=null,this.D=[],this.g=null,this.C=0,this.s=this.u=null,this.X=-1,this.J=!1,this.O=0,this.M=null,this.W=this.K=this.T=this.P=!1,this.h=new Cs}function Cs(){this.i=null,this.g="",this.h=!1}var ks={},Qr={};function Xr(i,a,c){i.L=1,i.v=Qn(Ot(a)),i.m=c,i.P=!0,Vs(i,null)}function Vs(i,a){i.F=Date.now(),Kn(i),i.A=Ot(i.v);var c=i.A,d=i.R;Array.isArray(d)||(d=[String(d)]),Gs(c.i,"t",d),i.C=0,c=i.j.J,i.h=new Cs,i.g=co(i.j,c?a:null,!i.m),0<i.O&&(i.M=new tc(P(i.Y,i,i.g),i.O)),a=i.U,c=i.g,d=i.ca;var E="readystatechange";Array.isArray(E)||(E&&(Es[0]=E.toString()),E=Es);for(var w=0;w<E.length;w++){var b=ps(c,E[w],d||a.handleEvent,!1,a.h||a);if(!b)break;a.g[b.key]=b}a=i.H?p(i.H):{},i.m?(i.u||(i.u="POST"),a["Content-Type"]="application/x-www-form-urlencoded",i.g.ea(i.A,i.u,i.m,a)):(i.u="GET",i.g.ea(i.A,i.u,null,a)),Ze(),rc(i.i,i.u,i.A,i.l,i.R,i.m)}Wt.prototype.ca=function(i){i=i.target;const a=this.M;a&&Mt(i)==3?a.j():this.Y(i)},Wt.prototype.Y=function(i){try{if(i==this.g)t:{const dt=Mt(this.g);var a=this.g.Ba();const Ce=this.g.Z();if(!(3>dt)&&(dt!=3||this.g&&(this.h.h||this.g.oa()||Ys(this.g)))){this.J||dt!=4||a==7||(a==8||0>=Ce?Ze(3):Ze(2)),Jr(this);var c=this.g.Z();this.X=c;e:if(Ns(this)){var d=Ys(this.g);i="";var E=d.length,w=Mt(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){ae(this),nn(this);var b="";break e}this.h.i=new u.TextDecoder}for(a=0;a<E;a++)this.h.h=!0,i+=this.h.i.decode(d[a],{stream:!(w&&a==E-1)});d.length=0,this.h.g+=i,this.C=0,b=this.h.g}else b=this.g.oa();if(this.o=c==200,ic(this.i,this.u,this.A,this.l,this.R,dt,c),this.o){if(this.T&&!this.K){e:{if(this.g){var $,st=this.g;if(($=st.g?st.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!H($)){var j=$;break e}}j=null}if(c=j)Pe(this.i,this.l,c,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,Yr(this,c);else{this.o=!1,this.s=3,_t(12),ae(this),nn(this);break t}}if(this.P){c=!0;let It;for(;!this.J&&this.C<b.length;)if(It=ac(this,b),It==Qr){dt==4&&(this.s=4,_t(14),c=!1),Pe(this.i,this.l,null,"[Incomplete Response]");break}else if(It==ks){this.s=4,_t(15),Pe(this.i,this.l,b,"[Invalid Chunk]"),c=!1;break}else Pe(this.i,this.l,It,null),Yr(this,It);if(Ns(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),dt!=4||b.length!=0||this.h.h||(this.s=1,_t(16),c=!1),this.o=this.o&&c,!c)Pe(this.i,this.l,b,"[Invalid Chunked Response]"),ae(this),nn(this);else if(0<b.length&&!this.W){this.W=!0;var ht=this.j;ht.g==this&&ht.ba&&!ht.M&&(ht.j.info("Great, no buffering proxy detected. Bytes received: "+b.length),ii(ht),ht.M=!0,_t(11))}}else Pe(this.i,this.l,b,null),Yr(this,b);dt==4&&ae(this),this.o&&!this.J&&(dt==4?so(this.j,this):(this.o=!1,Kn(this)))}else Ac(this.g),c==400&&0<b.indexOf("Unknown SID")?(this.s=3,_t(12)):(this.s=0,_t(13)),ae(this),nn(this)}}}catch{}finally{}};function Ns(i){return i.g?i.u=="GET"&&i.L!=2&&i.j.Ca:!1}function ac(i,a){var c=i.C,d=a.indexOf(`
`,c);return d==-1?Qr:(c=Number(a.substring(c,d)),isNaN(c)?ks:(d+=1,d+c>a.length?Qr:(a=a.slice(d,d+c),i.C=d+c,a)))}Wt.prototype.cancel=function(){this.J=!0,ae(this)};function Kn(i){i.S=Date.now()+i.I,Ds(i,i.I)}function Ds(i,a){if(i.B!=null)throw Error("WatchDog timer not null");i.B=tn(P(i.ba,i),a)}function Jr(i){i.B&&(u.clearTimeout(i.B),i.B=null)}Wt.prototype.ba=function(){this.B=null;const i=Date.now();0<=i-this.S?(sc(this.i,this.A),this.L!=2&&(Ze(),_t(17)),ae(this),this.s=2,nn(this)):Ds(this,this.S-i)};function nn(i){i.j.G==0||i.J||so(i.j,i)}function ae(i){Jr(i);var a=i.M;a&&typeof a.ma=="function"&&a.ma(),i.M=null,Is(i.U),i.g&&(a=i.g,i.g=null,a.abort(),a.ma())}function Yr(i,a){try{var c=i.j;if(c.G!=0&&(c.g==i||Zr(c.h,i))){if(!i.K&&Zr(c.h,i)&&c.G==3){try{var d=c.Da.g.parse(a)}catch{d=null}if(Array.isArray(d)&&d.length==3){var E=d;if(E[0]==0){t:if(!c.u){if(c.g)if(c.g.F+3e3<i.F)tr(c),Yn(c);else break t;ri(c),_t(18)}}else c.za=E[1],0<c.za-c.T&&37500>E[2]&&c.F&&c.v==0&&!c.C&&(c.C=tn(P(c.Za,c),6e3));if(1>=xs(c.h)&&c.ca){try{c.ca()}catch{}c.ca=void 0}}else ce(c,11)}else if((i.K||c.g==i)&&tr(c),!H(a))for(E=c.Da.g.parse(a),a=0;a<E.length;a++){let j=E[a];if(c.T=j[0],j=j[1],c.G==2)if(j[0]=="c"){c.K=j[1],c.ia=j[2];const ht=j[3];ht!=null&&(c.la=ht,c.j.info("VER="+c.la));const dt=j[4];dt!=null&&(c.Aa=dt,c.j.info("SVER="+c.Aa));const Ce=j[5];Ce!=null&&typeof Ce=="number"&&0<Ce&&(d=1.5*Ce,c.L=d,c.j.info("backChannelRequestTimeoutMs_="+d)),d=c;const It=i.g;if(It){const nr=It.g?It.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(nr){var w=d.h;w.g||nr.indexOf("spdy")==-1&&nr.indexOf("quic")==-1&&nr.indexOf("h2")==-1||(w.j=w.l,w.g=new Set,w.h&&(ti(w,w.h),w.h=null))}if(d.D){const si=It.g?It.g.getResponseHeader("X-HTTP-Session-Id"):null;si&&(d.ya=si,z(d.I,d.D,si))}}c.G=3,c.l&&c.l.ua(),c.ba&&(c.R=Date.now()-i.F,c.j.info("Handshake RTT: "+c.R+"ms")),d=c;var b=i;if(d.qa=lo(d,d.J?d.ia:null,d.W),b.K){Ls(d.h,b);var $=b,st=d.L;st&&($.I=st),$.B&&(Jr($),Kn($)),d.g=b}else ro(d);0<c.i.length&&Zn(c)}else j[0]!="stop"&&j[0]!="close"||ce(c,7);else c.G==3&&(j[0]=="stop"||j[0]=="close"?j[0]=="stop"?ce(c,7):ni(c):j[0]!="noop"&&c.l&&c.l.ta(j),c.v=0)}}Ze(4)}catch{}}var lc=class{constructor(i,a){this.g=i,this.map=a}};function Os(i){this.l=i||10,u.PerformanceNavigationTiming?(i=u.performance.getEntriesByType("navigation"),i=0<i.length&&(i[0].nextHopProtocol=="hq"||i[0].nextHopProtocol=="h2")):i=!!(u.chrome&&u.chrome.loadTimes&&u.chrome.loadTimes()&&u.chrome.loadTimes().wasFetchedViaSpdy),this.j=i?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}function Ms(i){return i.h?!0:i.g?i.g.size>=i.j:!1}function xs(i){return i.h?1:i.g?i.g.size:0}function Zr(i,a){return i.h?i.h==a:i.g?i.g.has(a):!1}function ti(i,a){i.g?i.g.add(a):i.h=a}function Ls(i,a){i.h&&i.h==a?i.h=null:i.g&&i.g.has(a)&&i.g.delete(a)}Os.prototype.cancel=function(){if(this.i=Fs(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const i of this.g.values())i.cancel();this.g.clear()}};function Fs(i){if(i.h!=null)return i.i.concat(i.h.D);if(i.g!=null&&i.g.size!==0){let a=i.i;for(const c of i.g.values())a=a.concat(c.D);return a}return O(i.i)}function cc(i){if(i.V&&typeof i.V=="function")return i.V();if(typeof Map<"u"&&i instanceof Map||typeof Set<"u"&&i instanceof Set)return Array.from(i.values());if(typeof i=="string")return i.split("");if(h(i)){for(var a=[],c=i.length,d=0;d<c;d++)a.push(i[d]);return a}a=[],c=0;for(d in i)a[c++]=i[d];return a}function uc(i){if(i.na&&typeof i.na=="function")return i.na();if(!i.V||typeof i.V!="function"){if(typeof Map<"u"&&i instanceof Map)return Array.from(i.keys());if(!(typeof Set<"u"&&i instanceof Set)){if(h(i)||typeof i=="string"){var a=[];i=i.length;for(var c=0;c<i;c++)a.push(c);return a}a=[],c=0;for(const d in i)a[c++]=d;return a}}}function Us(i,a){if(i.forEach&&typeof i.forEach=="function")i.forEach(a,void 0);else if(h(i)||typeof i=="string")Array.prototype.forEach.call(i,a,void 0);else for(var c=uc(i),d=cc(i),E=d.length,w=0;w<E;w++)a.call(void 0,d[w],c&&c[w],i)}var Bs=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function hc(i,a){if(i){i=i.split("&");for(var c=0;c<i.length;c++){var d=i[c].indexOf("="),E=null;if(0<=d){var w=i[c].substring(0,d);E=i[c].substring(d+1)}else w=i[c];a(w,E?decodeURIComponent(E.replace(/\+/g," ")):"")}}}function le(i){if(this.g=this.o=this.j="",this.s=null,this.m=this.l="",this.h=!1,i instanceof le){this.h=i.h,Wn(this,i.j),this.o=i.o,this.g=i.g,zn(this,i.s),this.l=i.l;var a=i.i,c=new on;c.i=a.i,a.g&&(c.g=new Map(a.g),c.h=a.h),js(this,c),this.m=i.m}else i&&(a=String(i).match(Bs))?(this.h=!1,Wn(this,a[1]||"",!0),this.o=rn(a[2]||""),this.g=rn(a[3]||"",!0),zn(this,a[4]),this.l=rn(a[5]||"",!0),js(this,a[6]||"",!0),this.m=rn(a[7]||"")):(this.h=!1,this.i=new on(null,this.h))}le.prototype.toString=function(){var i=[],a=this.j;a&&i.push(sn(a,$s,!0),":");var c=this.g;return(c||a=="file")&&(i.push("//"),(a=this.o)&&i.push(sn(a,$s,!0),"@"),i.push(encodeURIComponent(String(c)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),c=this.s,c!=null&&i.push(":",String(c))),(c=this.l)&&(this.g&&c.charAt(0)!="/"&&i.push("/"),i.push(sn(c,c.charAt(0)=="/"?pc:fc,!0))),(c=this.i.toString())&&i.push("?",c),(c=this.m)&&i.push("#",sn(c,gc)),i.join("")};function Ot(i){return new le(i)}function Wn(i,a,c){i.j=c?rn(a,!0):a,i.j&&(i.j=i.j.replace(/:$/,""))}function zn(i,a){if(a){if(a=Number(a),isNaN(a)||0>a)throw Error("Bad port number "+a);i.s=a}else i.s=null}function js(i,a,c){a instanceof on?(i.i=a,_c(i.i,i.h)):(c||(a=sn(a,mc)),i.i=new on(a,i.h))}function z(i,a,c){i.i.set(a,c)}function Qn(i){return z(i,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),i}function rn(i,a){return i?a?decodeURI(i.replace(/%25/g,"%2525")):decodeURIComponent(i):""}function sn(i,a,c){return typeof i=="string"?(i=encodeURI(i).replace(a,dc),c&&(i=i.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),i):null}function dc(i){return i=i.charCodeAt(0),"%"+(i>>4&15).toString(16)+(i&15).toString(16)}var $s=/[#\/\?@]/g,fc=/[#\?:]/g,pc=/[#\?]/g,mc=/[#\?@]/g,gc=/#/g;function on(i,a){this.h=this.g=null,this.i=i||null,this.j=!!a}function zt(i){i.g||(i.g=new Map,i.h=0,i.i&&hc(i.i,function(a,c){i.add(decodeURIComponent(a.replace(/\+/g," ")),c)}))}n=on.prototype,n.add=function(i,a){zt(this),this.i=null,i=Se(this,i);var c=this.g.get(i);return c||this.g.set(i,c=[]),c.push(a),this.h+=1,this};function qs(i,a){zt(i),a=Se(i,a),i.g.has(a)&&(i.i=null,i.h-=i.g.get(a).length,i.g.delete(a))}function Hs(i,a){return zt(i),a=Se(i,a),i.g.has(a)}n.forEach=function(i,a){zt(this),this.g.forEach(function(c,d){c.forEach(function(E){i.call(a,E,d,this)},this)},this)},n.na=function(){zt(this);const i=Array.from(this.g.values()),a=Array.from(this.g.keys()),c=[];for(let d=0;d<a.length;d++){const E=i[d];for(let w=0;w<E.length;w++)c.push(a[d])}return c},n.V=function(i){zt(this);let a=[];if(typeof i=="string")Hs(this,i)&&(a=a.concat(this.g.get(Se(this,i))));else{i=Array.from(this.g.values());for(let c=0;c<i.length;c++)a=a.concat(i[c])}return a},n.set=function(i,a){return zt(this),this.i=null,i=Se(this,i),Hs(this,i)&&(this.h-=this.g.get(i).length),this.g.set(i,[a]),this.h+=1,this},n.get=function(i,a){return i?(i=this.V(i),0<i.length?String(i[0]):a):a};function Gs(i,a,c){qs(i,a),0<c.length&&(i.i=null,i.g.set(Se(i,a),O(c)),i.h+=c.length)}n.toString=function(){if(this.i)return this.i;if(!this.g)return"";const i=[],a=Array.from(this.g.keys());for(var c=0;c<a.length;c++){var d=a[c];const w=encodeURIComponent(String(d)),b=this.V(d);for(d=0;d<b.length;d++){var E=w;b[d]!==""&&(E+="="+encodeURIComponent(String(b[d]))),i.push(E)}}return this.i=i.join("&")};function Se(i,a){return a=String(a),i.j&&(a=a.toLowerCase()),a}function _c(i,a){a&&!i.j&&(zt(i),i.i=null,i.g.forEach(function(c,d){var E=d.toLowerCase();d!=E&&(qs(this,d),Gs(this,E,c))},i)),i.j=a}function yc(i,a){const c=new en;if(u.Image){const d=new Image;d.onload=C(Qt,c,"TestLoadImage: loaded",!0,a,d),d.onerror=C(Qt,c,"TestLoadImage: error",!1,a,d),d.onabort=C(Qt,c,"TestLoadImage: abort",!1,a,d),d.ontimeout=C(Qt,c,"TestLoadImage: timeout",!1,a,d),u.setTimeout(function(){d.ontimeout&&d.ontimeout()},1e4),d.src=i}else a(!1)}function vc(i,a){const c=new en,d=new AbortController,E=setTimeout(()=>{d.abort(),Qt(c,"TestPingServer: timeout",!1,a)},1e4);fetch(i,{signal:d.signal}).then(w=>{clearTimeout(E),w.ok?Qt(c,"TestPingServer: ok",!0,a):Qt(c,"TestPingServer: server error",!1,a)}).catch(()=>{clearTimeout(E),Qt(c,"TestPingServer: error",!1,a)})}function Qt(i,a,c,d,E){try{E&&(E.onload=null,E.onerror=null,E.onabort=null,E.ontimeout=null),d(c)}catch{}}function Ec(){this.g=new nc}function Ic(i,a,c){const d=c||"";try{Us(i,function(E,w){let b=E;f(E)&&(b=Hr(E)),a.push(d+w+"="+encodeURIComponent(b))})}catch(E){throw a.push(d+"type="+encodeURIComponent("_badmap")),E}}function an(i){this.l=i.Ub||null,this.j=i.eb||!1}k(an,Gr),an.prototype.g=function(){return new Xn(this.l,this.j)},an.prototype.i=function(i){return function(){return i}}({});function Xn(i,a){ut.call(this),this.D=i,this.o=a,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.u=new Headers,this.h=null,this.B="GET",this.A="",this.g=!1,this.v=this.j=this.l=null}k(Xn,ut),n=Xn.prototype,n.open=function(i,a){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.B=i,this.A=a,this.readyState=1,cn(this)},n.send=function(i){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const a={headers:this.u,method:this.B,credentials:this.m,cache:void 0};i&&(a.body=i),(this.D||u).fetch(new Request(this.A,a)).then(this.Sa.bind(this),this.ga.bind(this))},n.abort=function(){this.response=this.responseText="",this.u=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,ln(this)),this.readyState=0},n.Sa=function(i){if(this.g&&(this.l=i,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=i.headers,this.readyState=2,cn(this)),this.g&&(this.readyState=3,cn(this),this.g)))if(this.responseType==="arraybuffer")i.arrayBuffer().then(this.Qa.bind(this),this.ga.bind(this));else if(typeof u.ReadableStream<"u"&&"body"in i){if(this.j=i.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.v=new TextDecoder;Ks(this)}else i.text().then(this.Ra.bind(this),this.ga.bind(this))};function Ks(i){i.j.read().then(i.Pa.bind(i)).catch(i.ga.bind(i))}n.Pa=function(i){if(this.g){if(this.o&&i.value)this.response.push(i.value);else if(!this.o){var a=i.value?i.value:new Uint8Array(0);(a=this.v.decode(a,{stream:!i.done}))&&(this.response=this.responseText+=a)}i.done?ln(this):cn(this),this.readyState==3&&Ks(this)}},n.Ra=function(i){this.g&&(this.response=this.responseText=i,ln(this))},n.Qa=function(i){this.g&&(this.response=i,ln(this))},n.ga=function(){this.g&&ln(this)};function ln(i){i.readyState=4,i.l=null,i.j=null,i.v=null,cn(i)}n.setRequestHeader=function(i,a){this.u.append(i,a)},n.getResponseHeader=function(i){return this.h&&this.h.get(i.toLowerCase())||""},n.getAllResponseHeaders=function(){if(!this.h)return"";const i=[],a=this.h.entries();for(var c=a.next();!c.done;)c=c.value,i.push(c[0]+": "+c[1]),c=a.next();return i.join(`\r
`)};function cn(i){i.onreadystatechange&&i.onreadystatechange.call(i)}Object.defineProperty(Xn.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(i){this.m=i?"include":"same-origin"}});function Ws(i){let a="";return et(i,function(c,d){a+=d,a+=":",a+=c,a+=`\r
`}),a}function ei(i,a,c){t:{for(d in c){var d=!1;break t}d=!0}d||(c=Ws(c),typeof i=="string"?c!=null&&encodeURIComponent(String(c)):z(i,a,c))}function X(i){ut.call(this),this.headers=new Map,this.o=i||null,this.h=!1,this.v=this.g=null,this.D="",this.m=0,this.l="",this.j=this.B=this.u=this.A=!1,this.I=null,this.H="",this.J=!1}k(X,ut);var Tc=/^https?$/i,wc=["POST","PUT"];n=X.prototype,n.Ha=function(i){this.J=i},n.ea=function(i,a,c,d){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+i);a=a?a.toUpperCase():"GET",this.D=i,this.l="",this.m=0,this.A=!1,this.h=!0,this.g=this.o?this.o.g():zr.g(),this.v=this.o?Ts(this.o):Ts(zr),this.g.onreadystatechange=P(this.Ea,this);try{this.B=!0,this.g.open(a,String(i),!0),this.B=!1}catch(w){zs(this,w);return}if(i=c||"",c=new Map(this.headers),d)if(Object.getPrototypeOf(d)===Object.prototype)for(var E in d)c.set(E,d[E]);else if(typeof d.keys=="function"&&typeof d.get=="function")for(const w of d.keys())c.set(w,d.get(w));else throw Error("Unknown input type for opt_headers: "+String(d));d=Array.from(c.keys()).find(w=>w.toLowerCase()=="content-type"),E=u.FormData&&i instanceof u.FormData,!(0<=Array.prototype.indexOf.call(wc,a,void 0))||d||E||c.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[w,b]of c)this.g.setRequestHeader(w,b);this.H&&(this.g.responseType=this.H),"withCredentials"in this.g&&this.g.withCredentials!==this.J&&(this.g.withCredentials=this.J);try{Js(this),this.u=!0,this.g.send(i),this.u=!1}catch(w){zs(this,w)}};function zs(i,a){i.h=!1,i.g&&(i.j=!0,i.g.abort(),i.j=!1),i.l=a,i.m=5,Qs(i),Jn(i)}function Qs(i){i.A||(i.A=!0,gt(i,"complete"),gt(i,"error"))}n.abort=function(i){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.m=i||7,gt(this,"complete"),gt(this,"abort"),Jn(this))},n.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),Jn(this,!0)),X.aa.N.call(this)},n.Ea=function(){this.s||(this.B||this.u||this.j?Xs(this):this.bb())},n.bb=function(){Xs(this)};function Xs(i){if(i.h&&typeof l<"u"&&(!i.v[1]||Mt(i)!=4||i.Z()!=2)){if(i.u&&Mt(i)==4)ys(i.Ea,0,i);else if(gt(i,"readystatechange"),Mt(i)==4){i.h=!1;try{const b=i.Z();t:switch(b){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var a=!0;break t;default:a=!1}var c;if(!(c=a)){var d;if(d=b===0){var E=String(i.D).match(Bs)[1]||null;!E&&u.self&&u.self.location&&(E=u.self.location.protocol.slice(0,-1)),d=!Tc.test(E?E.toLowerCase():"")}c=d}if(c)gt(i,"complete"),gt(i,"success");else{i.m=6;try{var w=2<Mt(i)?i.g.statusText:""}catch{w=""}i.l=w+" ["+i.Z()+"]",Qs(i)}}finally{Jn(i)}}}}function Jn(i,a){if(i.g){Js(i);const c=i.g,d=i.v[0]?()=>{}:null;i.g=null,i.v=null,a||gt(i,"ready");try{c.onreadystatechange=d}catch{}}}function Js(i){i.I&&(u.clearTimeout(i.I),i.I=null)}n.isActive=function(){return!!this.g};function Mt(i){return i.g?i.g.readyState:0}n.Z=function(){try{return 2<Mt(this)?this.g.status:-1}catch{return-1}},n.oa=function(){try{return this.g?this.g.responseText:""}catch{return""}},n.Oa=function(i){if(this.g){var a=this.g.responseText;return i&&a.indexOf(i)==0&&(a=a.substring(i.length)),ec(a)}};function Ys(i){try{if(!i.g)return null;if("response"in i.g)return i.g.response;switch(i.H){case"":case"text":return i.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in i.g)return i.g.mozResponseArrayBuffer}return null}catch{return null}}function Ac(i){const a={};i=(i.g&&2<=Mt(i)&&i.g.getAllResponseHeaders()||"").split(`\r
`);for(let d=0;d<i.length;d++){if(H(i[d]))continue;var c=y(i[d]);const E=c[0];if(c=c[1],typeof c!="string")continue;c=c.trim();const w=a[E]||[];a[E]=w,w.push(c)}v(a,function(d){return d.join(", ")})}n.Ba=function(){return this.m},n.Ka=function(){return typeof this.l=="string"?this.l:String(this.l)};function un(i,a,c){return c&&c.internalChannelParams&&c.internalChannelParams[i]||a}function Zs(i){this.Aa=0,this.i=[],this.j=new en,this.ia=this.qa=this.I=this.W=this.g=this.ya=this.D=this.H=this.m=this.S=this.o=null,this.Ya=this.U=0,this.Va=un("failFast",!1,i),this.F=this.C=this.u=this.s=this.l=null,this.X=!0,this.za=this.T=-1,this.Y=this.v=this.B=0,this.Ta=un("baseRetryDelayMs",5e3,i),this.cb=un("retryDelaySeedMs",1e4,i),this.Wa=un("forwardChannelMaxRetries",2,i),this.wa=un("forwardChannelRequestTimeoutMs",2e4,i),this.pa=i&&i.xmlHttpFactory||void 0,this.Xa=i&&i.Tb||void 0,this.Ca=i&&i.useFetchStreams||!1,this.L=void 0,this.J=i&&i.supportsCrossDomainXhr||!1,this.K="",this.h=new Os(i&&i.concurrentRequestLimit),this.Da=new Ec,this.P=i&&i.fastHandshake||!1,this.O=i&&i.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.Ua=i&&i.Rb||!1,i&&i.xa&&this.j.xa(),i&&i.forceLongPolling&&(this.X=!1),this.ba=!this.P&&this.X&&i&&i.detectBufferingProxy||!1,this.ja=void 0,i&&i.longPollingTimeout&&0<i.longPollingTimeout&&(this.ja=i.longPollingTimeout),this.ca=void 0,this.R=0,this.M=!1,this.ka=this.A=null}n=Zs.prototype,n.la=8,n.G=1,n.connect=function(i,a,c,d){_t(0),this.W=i,this.H=a||{},c&&d!==void 0&&(this.H.OSID=c,this.H.OAID=d),this.F=this.X,this.I=lo(this,null,this.W),Zn(this)};function ni(i){if(to(i),i.G==3){var a=i.U++,c=Ot(i.I);if(z(c,"SID",i.K),z(c,"RID",a),z(c,"TYPE","terminate"),hn(i,c),a=new Wt(i,i.j,a),a.L=2,a.v=Qn(Ot(c)),c=!1,u.navigator&&u.navigator.sendBeacon)try{c=u.navigator.sendBeacon(a.v.toString(),"")}catch{}!c&&u.Image&&(new Image().src=a.v,c=!0),c||(a.g=co(a.j,null),a.g.ea(a.v)),a.F=Date.now(),Kn(a)}ao(i)}function Yn(i){i.g&&(ii(i),i.g.cancel(),i.g=null)}function to(i){Yn(i),i.u&&(u.clearTimeout(i.u),i.u=null),tr(i),i.h.cancel(),i.s&&(typeof i.s=="number"&&u.clearTimeout(i.s),i.s=null)}function Zn(i){if(!Ms(i.h)&&!i.s){i.s=!0;var a=i.Ga;ze||fs(),Qe||(ze(),Qe=!0),xr.add(a,i),i.B=0}}function Rc(i,a){return xs(i.h)>=i.h.j-(i.s?1:0)?!1:i.s?(i.i=a.D.concat(i.i),!0):i.G==1||i.G==2||i.B>=(i.Va?0:i.Wa)?!1:(i.s=tn(P(i.Ga,i,a),oo(i,i.B)),i.B++,!0)}n.Ga=function(i){if(this.s)if(this.s=null,this.G==1){if(!i){this.U=Math.floor(1e5*Math.random()),i=this.U++;const E=new Wt(this,this.j,i);let w=this.o;if(this.S&&(w?(w=p(w),_(w,this.S)):w=this.S),this.m!==null||this.O||(E.H=w,w=null),this.P)t:{for(var a=0,c=0;c<this.i.length;c++){e:{var d=this.i[c];if("__data__"in d.map&&(d=d.map.__data__,typeof d=="string")){d=d.length;break e}d=void 0}if(d===void 0)break;if(a+=d,4096<a){a=c;break t}if(a===4096||c===this.i.length-1){a=c+1;break t}}a=1e3}else a=1e3;a=no(this,E,a),c=Ot(this.I),z(c,"RID",i),z(c,"CVER",22),this.D&&z(c,"X-HTTP-Session-Id",this.D),hn(this,c),w&&(this.O?a="headers="+encodeURIComponent(String(Ws(w)))+"&"+a:this.m&&ei(c,this.m,w)),ti(this.h,E),this.Ua&&z(c,"TYPE","init"),this.P?(z(c,"$req",a),z(c,"SID","null"),E.T=!0,Xr(E,c,null)):Xr(E,c,a),this.G=2}}else this.G==3&&(i?eo(this,i):this.i.length==0||Ms(this.h)||eo(this))};function eo(i,a){var c;a?c=a.l:c=i.U++;const d=Ot(i.I);z(d,"SID",i.K),z(d,"RID",c),z(d,"AID",i.T),hn(i,d),i.m&&i.o&&ei(d,i.m,i.o),c=new Wt(i,i.j,c,i.B+1),i.m===null&&(c.H=i.o),a&&(i.i=a.D.concat(i.i)),a=no(i,c,1e3),c.I=Math.round(.5*i.wa)+Math.round(.5*i.wa*Math.random()),ti(i.h,c),Xr(c,d,a)}function hn(i,a){i.H&&et(i.H,function(c,d){z(a,d,c)}),i.l&&Us({},function(c,d){z(a,d,c)})}function no(i,a,c){c=Math.min(i.i.length,c);var d=i.l?P(i.l.Na,i.l,i):null;t:{var E=i.i;let w=-1;for(;;){const b=["count="+c];w==-1?0<c?(w=E[0].g,b.push("ofs="+w)):w=0:b.push("ofs="+w);let $=!0;for(let st=0;st<c;st++){let j=E[st].g;const ht=E[st].map;if(j-=w,0>j)w=Math.max(0,E[st].g-100),$=!1;else try{Ic(ht,b,"req"+j+"_")}catch{d&&d(ht)}}if($){d=b.join("&");break t}}}return i=i.i.splice(0,c),a.D=i,d}function ro(i){if(!i.g&&!i.u){i.Y=1;var a=i.Fa;ze||fs(),Qe||(ze(),Qe=!0),xr.add(a,i),i.v=0}}function ri(i){return i.g||i.u||3<=i.v?!1:(i.Y++,i.u=tn(P(i.Fa,i),oo(i,i.v)),i.v++,!0)}n.Fa=function(){if(this.u=null,io(this),this.ba&&!(this.M||this.g==null||0>=this.R)){var i=2*this.R;this.j.info("BP detection timer enabled: "+i),this.A=tn(P(this.ab,this),i)}},n.ab=function(){this.A&&(this.A=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.M=!0,_t(10),Yn(this),io(this))};function ii(i){i.A!=null&&(u.clearTimeout(i.A),i.A=null)}function io(i){i.g=new Wt(i,i.j,"rpc",i.Y),i.m===null&&(i.g.H=i.o),i.g.O=0;var a=Ot(i.qa);z(a,"RID","rpc"),z(a,"SID",i.K),z(a,"AID",i.T),z(a,"CI",i.F?"0":"1"),!i.F&&i.ja&&z(a,"TO",i.ja),z(a,"TYPE","xmlhttp"),hn(i,a),i.m&&i.o&&ei(a,i.m,i.o),i.L&&(i.g.I=i.L);var c=i.g;i=i.ia,c.L=1,c.v=Qn(Ot(a)),c.m=null,c.P=!0,Vs(c,i)}n.Za=function(){this.C!=null&&(this.C=null,Yn(this),ri(this),_t(19))};function tr(i){i.C!=null&&(u.clearTimeout(i.C),i.C=null)}function so(i,a){var c=null;if(i.g==a){tr(i),ii(i),i.g=null;var d=2}else if(Zr(i.h,a))c=a.D,Ls(i.h,a),d=1;else return;if(i.G!=0){if(a.o)if(d==1){c=a.m?a.m.length:0,a=Date.now()-a.F;var E=i.B;d=qn(),gt(d,new Ss(d,c)),Zn(i)}else ro(i);else if(E=a.s,E==3||E==0&&0<a.X||!(d==1&&Rc(i,a)||d==2&&ri(i)))switch(c&&0<c.length&&(a=i.h,a.i=a.i.concat(c)),E){case 1:ce(i,5);break;case 4:ce(i,10);break;case 3:ce(i,6);break;default:ce(i,2)}}}function oo(i,a){let c=i.Ta+Math.floor(Math.random()*i.cb);return i.isActive()||(c*=2),c*a}function ce(i,a){if(i.j.info("Error code "+a),a==2){var c=P(i.fb,i),d=i.Xa;const E=!d;d=new le(d||"//www.google.com/images/cleardot.gif"),u.location&&u.location.protocol=="http"||Wn(d,"https"),Qn(d),E?yc(d.toString(),c):vc(d.toString(),c)}else _t(2);i.G=0,i.l&&i.l.sa(a),ao(i),to(i)}n.fb=function(i){i?(this.j.info("Successfully pinged google.com"),_t(2)):(this.j.info("Failed to ping google.com"),_t(1))};function ao(i){if(i.G=0,i.ka=[],i.l){const a=Fs(i.h);(a.length!=0||i.i.length!=0)&&(D(i.ka,a),D(i.ka,i.i),i.h.i.length=0,O(i.i),i.i.length=0),i.l.ra()}}function lo(i,a,c){var d=c instanceof le?Ot(c):new le(c);if(d.g!="")a&&(d.g=a+"."+d.g),zn(d,d.s);else{var E=u.location;d=E.protocol,a=a?a+"."+E.hostname:E.hostname,E=+E.port;var w=new le(null);d&&Wn(w,d),a&&(w.g=a),E&&zn(w,E),c&&(w.l=c),d=w}return c=i.D,a=i.ya,c&&a&&z(d,c,a),z(d,"VER",i.la),hn(i,d),d}function co(i,a,c){if(a&&!i.J)throw Error("Can't create secondary domain capable XhrIo object.");return a=i.Ca&&!i.pa?new X(new an({eb:c})):new X(i.pa),a.Ha(i.J),a}n.isActive=function(){return!!this.l&&this.l.isActive(this)};function uo(){}n=uo.prototype,n.ua=function(){},n.ta=function(){},n.sa=function(){},n.ra=function(){},n.isActive=function(){return!0},n.Na=function(){};function er(){}er.prototype.g=function(i,a){return new Et(i,a)};function Et(i,a){ut.call(this),this.g=new Zs(a),this.l=i,this.h=a&&a.messageUrlParams||null,i=a&&a.messageHeaders||null,a&&a.clientProtocolHeaderRequired&&(i?i["X-Client-Protocol"]="webchannel":i={"X-Client-Protocol":"webchannel"}),this.g.o=i,i=a&&a.initMessageHeaders||null,a&&a.messageContentType&&(i?i["X-WebChannel-Content-Type"]=a.messageContentType:i={"X-WebChannel-Content-Type":a.messageContentType}),a&&a.va&&(i?i["X-WebChannel-Client-Profile"]=a.va:i={"X-WebChannel-Client-Profile":a.va}),this.g.S=i,(i=a&&a.Sb)&&!H(i)&&(this.g.m=i),this.v=a&&a.supportsCrossDomainXhr||!1,this.u=a&&a.sendRawJson||!1,(a=a&&a.httpSessionIdParam)&&!H(a)&&(this.g.D=a,i=this.h,i!==null&&a in i&&(i=this.h,a in i&&delete i[a])),this.j=new be(this)}k(Et,ut),Et.prototype.m=function(){this.g.l=this.j,this.v&&(this.g.J=!0),this.g.connect(this.l,this.h||void 0)},Et.prototype.close=function(){ni(this.g)},Et.prototype.o=function(i){var a=this.g;if(typeof i=="string"){var c={};c.__data__=i,i=c}else this.u&&(c={},c.__data__=Hr(i),i=c);a.i.push(new lc(a.Ya++,i)),a.G==3&&Zn(a)},Et.prototype.N=function(){this.g.l=null,delete this.j,ni(this.g),delete this.g,Et.aa.N.call(this)};function ho(i){Kr.call(this),i.__headers__&&(this.headers=i.__headers__,this.statusCode=i.__status__,delete i.__headers__,delete i.__status__);var a=i.__sm__;if(a){t:{for(const c in a){i=c;break t}i=void 0}(this.i=i)&&(i=this.i,a=a!==null&&i in a?a[i]:void 0),this.data=a}else this.data=i}k(ho,Kr);function fo(){Wr.call(this),this.status=1}k(fo,Wr);function be(i){this.g=i}k(be,uo),be.prototype.ua=function(){gt(this.g,"a")},be.prototype.ta=function(i){gt(this.g,new ho(i))},be.prototype.sa=function(i){gt(this.g,new fo)},be.prototype.ra=function(){gt(this.g,"b")},er.prototype.createWebChannel=er.prototype.g,Et.prototype.send=Et.prototype.o,Et.prototype.open=Et.prototype.m,Et.prototype.close=Et.prototype.close,Na=function(){return new er},Va=function(){return qn()},ka=oe,Ii={mb:0,pb:1,qb:2,Jb:3,Ob:4,Lb:5,Mb:6,Kb:7,Ib:8,Nb:9,PROXY:10,NOPROXY:11,Gb:12,Cb:13,Db:14,Bb:15,Eb:16,Fb:17,ib:18,hb:19,jb:20},Hn.NO_ERROR=0,Hn.TIMEOUT=8,Hn.HTTP_ERROR=6,cr=Hn,bs.COMPLETE="complete",Ca=bs,ws.EventType=Ye,Ye.OPEN="a",Ye.CLOSE="b",Ye.ERROR="c",Ye.MESSAGE="d",ut.prototype.listen=ut.prototype.K,gn=ws,ba=an,X.prototype.listenOnce=X.prototype.L,X.prototype.getLastError=X.prototype.Ka,X.prototype.getLastErrorCode=X.prototype.Ba,X.prototype.getStatus=X.prototype.Z,X.prototype.getResponseJson=X.prototype.Oa,X.prototype.getResponseText=X.prototype.oa,X.prototype.send=X.prototype.ea,X.prototype.setWithCredentials=X.prototype.Ha,Sa=X}).apply(typeof rr<"u"?rr:typeof self<"u"?self:typeof window<"u"?window:{});const Ro="@firebase/firestore";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yt{constructor(t){this.uid=t}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(t){return t.uid===this.uid}}yt.UNAUTHENTICATED=new yt(null),yt.GOOGLE_CREDENTIALS=new yt("google-credentials-uid"),yt.FIRST_PARTY=new yt("first-party-uid"),yt.MOCK_USER=new yt("mock-user");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let He="10.13.0";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _e=new Ui("@firebase/firestore");function dn(){return _e.logLevel}function N(n,...t){if(_e.logLevel<=F.DEBUG){const e=t.map($i);_e.debug(`Firestore (${He}): ${n}`,...e)}}function ye(n,...t){if(_e.logLevel<=F.ERROR){const e=t.map($i);_e.error(`Firestore (${He}): ${n}`,...e)}}function Ti(n,...t){if(_e.logLevel<=F.WARN){const e=t.map($i);_e.warn(`Firestore (${He}): ${n}`,...e)}}function $i(n){if(typeof n=="string")return n;try{/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/return function(e){return JSON.stringify(e)}(n)}catch{return n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function U(n="Unexpected state"){const t=`FIRESTORE (${He}) INTERNAL ASSERTION FAILED: `+n;throw ye(t),new Error(t)}function tt(n,t){n||U()}function G(n,t){return n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const S={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class M extends Ht{constructor(t,e){super(t,e),this.code=t,this.message=e,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pe{constructor(){this.promise=new Promise((t,e)=>{this.resolve=t,this.reject=e})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rh{constructor(t,e){this.user=e,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${t}`)}}class ih{getToken(){return Promise.resolve(null)}invalidateToken(){}start(t,e){t.enqueueRetryable(()=>e(yt.UNAUTHENTICATED))}shutdown(){}}class sh{constructor(t){this.t=t,this.currentUser=yt.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(t,e){let r=this.i;const s=h=>this.i!==r?(r=this.i,e(h)):Promise.resolve();let o=new pe;this.o=()=>{this.i++,this.currentUser=this.u(),o.resolve(),o=new pe,t.enqueueRetryable(()=>s(this.currentUser))};const l=()=>{const h=o;t.enqueueRetryable(async()=>{await h.promise,await s(this.currentUser)})},u=h=>{N("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=h,this.auth.addAuthTokenListener(this.o),l()};this.t.onInit(h=>u(h)),setTimeout(()=>{if(!this.auth){const h=this.t.getImmediate({optional:!0});h?u(h):(N("FirebaseAuthCredentialsProvider","Auth not yet detected"),o.resolve(),o=new pe)}},0),l()}getToken(){const t=this.i,e=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(e).then(r=>this.i!==t?(N("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):r?(tt(typeof r.accessToken=="string"),new rh(r.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.auth.removeAuthTokenListener(this.o)}u(){const t=this.auth&&this.auth.getUid();return tt(t===null||typeof t=="string"),new yt(t)}}class oh{constructor(t,e,r){this.l=t,this.h=e,this.P=r,this.type="FirstParty",this.user=yt.FIRST_PARTY,this.I=new Map}T(){return this.P?this.P():null}get headers(){this.I.set("X-Goog-AuthUser",this.l);const t=this.T();return t&&this.I.set("Authorization",t),this.h&&this.I.set("X-Goog-Iam-Authorization-Token",this.h),this.I}}class ah{constructor(t,e,r){this.l=t,this.h=e,this.P=r}getToken(){return Promise.resolve(new oh(this.l,this.h,this.P))}start(t,e){t.enqueueRetryable(()=>e(yt.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class lh{constructor(t){this.value=t,this.type="AppCheck",this.headers=new Map,t&&t.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class ch{constructor(t){this.A=t,this.forceRefresh=!1,this.appCheck=null,this.R=null}start(t,e){const r=o=>{o.error!=null&&N("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${o.error.message}`);const l=o.token!==this.R;return this.R=o.token,N("FirebaseAppCheckTokenProvider",`Received ${l?"new":"existing"} token.`),l?e(o.token):Promise.resolve()};this.o=o=>{t.enqueueRetryable(()=>r(o))};const s=o=>{N("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=o,this.appCheck.addTokenListener(this.o)};this.A.onInit(o=>s(o)),setTimeout(()=>{if(!this.appCheck){const o=this.A.getImmediate({optional:!0});o?s(o):N("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){const t=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(t).then(e=>e?(tt(typeof e.token=="string"),this.R=e.token,new lh(e.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.appCheck.removeTokenListener(this.o)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function uh(n){const t=typeof self<"u"&&(self.crypto||self.msCrypto),e=new Uint8Array(n);if(t&&typeof t.getRandomValues=="function")t.getRandomValues(e);else for(let r=0;r<n;r++)e[r]=Math.floor(256*Math.random());return e}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Da{static newId(){const t="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",e=Math.floor(256/t.length)*t.length;let r="";for(;r.length<20;){const s=uh(40);for(let o=0;o<s.length;++o)r.length<20&&s[o]<e&&(r+=t.charAt(s[o]%t.length))}return r}}function q(n,t){return n<t?-1:n>t?1:0}function Ue(n,t,e){return n.length===t.length&&n.every((r,s)=>e(r,t[s]))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class it{constructor(t,e){if(this.seconds=t,this.nanoseconds=e,e<0)throw new M(S.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+e);if(e>=1e9)throw new M(S.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+e);if(t<-62135596800)throw new M(S.INVALID_ARGUMENT,"Timestamp seconds out of range: "+t);if(t>=253402300800)throw new M(S.INVALID_ARGUMENT,"Timestamp seconds out of range: "+t)}static now(){return it.fromMillis(Date.now())}static fromDate(t){return it.fromMillis(t.getTime())}static fromMillis(t){const e=Math.floor(t/1e3),r=Math.floor(1e6*(t-1e3*e));return new it(e,r)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(t){return this.seconds===t.seconds?q(this.nanoseconds,t.nanoseconds):q(this.seconds,t.seconds)}isEqual(t){return t.seconds===this.seconds&&t.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const t=this.seconds- -62135596800;return String(t).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Q{constructor(t){this.timestamp=t}static fromTimestamp(t){return new Q(t)}static min(){return new Q(new it(0,0))}static max(){return new Q(new it(253402300799,999999999))}compareTo(t){return this.timestamp._compareTo(t.timestamp)}isEqual(t){return this.timestamp.isEqual(t.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class An{constructor(t,e,r){e===void 0?e=0:e>t.length&&U(),r===void 0?r=t.length-e:r>t.length-e&&U(),this.segments=t,this.offset=e,this.len=r}get length(){return this.len}isEqual(t){return An.comparator(this,t)===0}child(t){const e=this.segments.slice(this.offset,this.limit());return t instanceof An?t.forEach(r=>{e.push(r)}):e.push(t),this.construct(e)}limit(){return this.offset+this.length}popFirst(t){return t=t===void 0?1:t,this.construct(this.segments,this.offset+t,this.length-t)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(t){return this.segments[this.offset+t]}isEmpty(){return this.length===0}isPrefixOf(t){if(t.length<this.length)return!1;for(let e=0;e<this.length;e++)if(this.get(e)!==t.get(e))return!1;return!0}isImmediateParentOf(t){if(this.length+1!==t.length)return!1;for(let e=0;e<this.length;e++)if(this.get(e)!==t.get(e))return!1;return!0}forEach(t){for(let e=this.offset,r=this.limit();e<r;e++)t(this.segments[e])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(t,e){const r=Math.min(t.length,e.length);for(let s=0;s<r;s++){const o=t.get(s),l=e.get(s);if(o<l)return-1;if(o>l)return 1}return t.length<e.length?-1:t.length>e.length?1:0}}class J extends An{construct(t,e,r){return new J(t,e,r)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...t){const e=[];for(const r of t){if(r.indexOf("//")>=0)throw new M(S.INVALID_ARGUMENT,`Invalid segment (${r}). Paths must not contain // in them.`);e.push(...r.split("/").filter(s=>s.length>0))}return new J(e)}static emptyPath(){return new J([])}}const hh=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class lt extends An{construct(t,e,r){return new lt(t,e,r)}static isValidIdentifier(t){return hh.test(t)}canonicalString(){return this.toArray().map(t=>(t=t.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),lt.isValidIdentifier(t)||(t="`"+t+"`"),t)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)==="__name__"}static keyField(){return new lt(["__name__"])}static fromServerFormat(t){const e=[];let r="",s=0;const o=()=>{if(r.length===0)throw new M(S.INVALID_ARGUMENT,`Invalid field path (${t}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);e.push(r),r=""};let l=!1;for(;s<t.length;){const u=t[s];if(u==="\\"){if(s+1===t.length)throw new M(S.INVALID_ARGUMENT,"Path has trailing escape character: "+t);const h=t[s+1];if(h!=="\\"&&h!=="."&&h!=="`")throw new M(S.INVALID_ARGUMENT,"Path has invalid escape sequence: "+t);r+=h,s+=2}else u==="`"?(l=!l,s++):u!=="."||l?(r+=u,s++):(o(),s++)}if(o(),l)throw new M(S.INVALID_ARGUMENT,"Unterminated ` in path: "+t);return new lt(e)}static emptyPath(){return new lt([])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class L{constructor(t){this.path=t}static fromPath(t){return new L(J.fromString(t))}static fromName(t){return new L(J.fromString(t).popFirst(5))}static empty(){return new L(J.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(t){return this.path.length>=2&&this.path.get(this.path.length-2)===t}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(t){return t!==null&&J.comparator(this.path,t.path)===0}toString(){return this.path.toString()}static comparator(t,e){return J.comparator(t.path,e.path)}static isDocumentKey(t){return t.length%2==0}static fromSegments(t){return new L(new J(t.slice()))}}function dh(n,t){const e=n.toTimestamp().seconds,r=n.toTimestamp().nanoseconds+1,s=Q.fromTimestamp(r===1e9?new it(e+1,0):new it(e,r));return new ne(s,L.empty(),t)}function fh(n){return new ne(n.readTime,n.key,-1)}class ne{constructor(t,e,r){this.readTime=t,this.documentKey=e,this.largestBatchId=r}static min(){return new ne(Q.min(),L.empty(),-1)}static max(){return new ne(Q.max(),L.empty(),-1)}}function ph(n,t){let e=n.readTime.compareTo(t.readTime);return e!==0?e:(e=L.comparator(n.documentKey,t.documentKey),e!==0?e:q(n.largestBatchId,t.largestBatchId))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const mh="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class gh{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(t){this.onCommittedListeners.push(t)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(t=>t())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Oa(n){if(n.code!==S.FAILED_PRECONDITION||n.message!==mh)throw n;N("LocalStore","Unexpectedly lost primary lease")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class R{constructor(t){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,t(e=>{this.isDone=!0,this.result=e,this.nextCallback&&this.nextCallback(e)},e=>{this.isDone=!0,this.error=e,this.catchCallback&&this.catchCallback(e)})}catch(t){return this.next(void 0,t)}next(t,e){return this.callbackAttached&&U(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(e,this.error):this.wrapSuccess(t,this.result):new R((r,s)=>{this.nextCallback=o=>{this.wrapSuccess(t,o).next(r,s)},this.catchCallback=o=>{this.wrapFailure(e,o).next(r,s)}})}toPromise(){return new Promise((t,e)=>{this.next(t,e)})}wrapUserFunction(t){try{const e=t();return e instanceof R?e:R.resolve(e)}catch(e){return R.reject(e)}}wrapSuccess(t,e){return t?this.wrapUserFunction(()=>t(e)):R.resolve(e)}wrapFailure(t,e){return t?this.wrapUserFunction(()=>t(e)):R.reject(e)}static resolve(t){return new R((e,r)=>{e(t)})}static reject(t){return new R((e,r)=>{r(t)})}static waitFor(t){return new R((e,r)=>{let s=0,o=0,l=!1;t.forEach(u=>{++s,u.next(()=>{++o,l&&o===s&&e()},h=>r(h))}),l=!0,o===s&&e()})}static or(t){let e=R.resolve(!1);for(const r of t)e=e.next(s=>s?R.resolve(s):r());return e}static forEach(t,e){const r=[];return t.forEach((s,o)=>{r.push(e.call(this,s,o))}),this.waitFor(r)}static mapArray(t,e){return new R((r,s)=>{const o=t.length,l=new Array(o);let u=0;for(let h=0;h<o;h++){const f=h;e(t[f]).next(I=>{l[f]=I,++u,u===o&&r(l)},I=>s(I))}})}static doWhile(t,e){return new R((r,s)=>{const o=()=>{t()===!0?e().next(()=>{o()},s):r()};o()})}}function _h(n){const t=n.match(/Android ([\d.]+)/i),e=t?t[1].split(".").slice(0,2).join("."):"-1";return Number(e)}function Sr(n){return n.name==="IndexedDbTransactionError"}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ma{constructor(t,e){this.previousValue=t,e&&(e.sequenceNumberHandler=r=>this.ie(r),this.se=r=>e.writeSequenceNumber(r))}ie(t){return this.previousValue=Math.max(t,this.previousValue),this.previousValue}next(){const t=++this.previousValue;return this.se&&this.se(t),t}}Ma.oe=-1;function qi(n){return n==null}function fr(n){return n===0&&1/n==-1/0}function yh(n){return typeof n=="number"&&Number.isInteger(n)&&!fr(n)&&n<=Number.MAX_SAFE_INTEGER&&n>=Number.MIN_SAFE_INTEGER}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Po(n){let t=0;for(const e in n)Object.prototype.hasOwnProperty.call(n,e)&&t++;return t}function Dn(n,t){for(const e in n)Object.prototype.hasOwnProperty.call(n,e)&&t(e,n[e])}function xa(n){for(const t in n)if(Object.prototype.hasOwnProperty.call(n,t))return!1;return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vt{constructor(t,e){this.comparator=t,this.root=e||ot.EMPTY}insert(t,e){return new vt(this.comparator,this.root.insert(t,e,this.comparator).copy(null,null,ot.BLACK,null,null))}remove(t){return new vt(this.comparator,this.root.remove(t,this.comparator).copy(null,null,ot.BLACK,null,null))}get(t){let e=this.root;for(;!e.isEmpty();){const r=this.comparator(t,e.key);if(r===0)return e.value;r<0?e=e.left:r>0&&(e=e.right)}return null}indexOf(t){let e=0,r=this.root;for(;!r.isEmpty();){const s=this.comparator(t,r.key);if(s===0)return e+r.left.size;s<0?r=r.left:(e+=r.left.size+1,r=r.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(t){return this.root.inorderTraversal(t)}forEach(t){this.inorderTraversal((e,r)=>(t(e,r),!1))}toString(){const t=[];return this.inorderTraversal((e,r)=>(t.push(`${e}:${r}`),!1)),`{${t.join(", ")}}`}reverseTraversal(t){return this.root.reverseTraversal(t)}getIterator(){return new ir(this.root,null,this.comparator,!1)}getIteratorFrom(t){return new ir(this.root,t,this.comparator,!1)}getReverseIterator(){return new ir(this.root,null,this.comparator,!0)}getReverseIteratorFrom(t){return new ir(this.root,t,this.comparator,!0)}}class ir{constructor(t,e,r,s){this.isReverse=s,this.nodeStack=[];let o=1;for(;!t.isEmpty();)if(o=e?r(t.key,e):1,e&&s&&(o*=-1),o<0)t=this.isReverse?t.left:t.right;else{if(o===0){this.nodeStack.push(t);break}this.nodeStack.push(t),t=this.isReverse?t.right:t.left}}getNext(){let t=this.nodeStack.pop();const e={key:t.key,value:t.value};if(this.isReverse)for(t=t.left;!t.isEmpty();)this.nodeStack.push(t),t=t.right;else for(t=t.right;!t.isEmpty();)this.nodeStack.push(t),t=t.left;return e}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const t=this.nodeStack[this.nodeStack.length-1];return{key:t.key,value:t.value}}}class ot{constructor(t,e,r,s,o){this.key=t,this.value=e,this.color=r??ot.RED,this.left=s??ot.EMPTY,this.right=o??ot.EMPTY,this.size=this.left.size+1+this.right.size}copy(t,e,r,s,o){return new ot(t??this.key,e??this.value,r??this.color,s??this.left,o??this.right)}isEmpty(){return!1}inorderTraversal(t){return this.left.inorderTraversal(t)||t(this.key,this.value)||this.right.inorderTraversal(t)}reverseTraversal(t){return this.right.reverseTraversal(t)||t(this.key,this.value)||this.left.reverseTraversal(t)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(t,e,r){let s=this;const o=r(t,s.key);return s=o<0?s.copy(null,null,null,s.left.insert(t,e,r),null):o===0?s.copy(null,e,null,null,null):s.copy(null,null,null,null,s.right.insert(t,e,r)),s.fixUp()}removeMin(){if(this.left.isEmpty())return ot.EMPTY;let t=this;return t.left.isRed()||t.left.left.isRed()||(t=t.moveRedLeft()),t=t.copy(null,null,null,t.left.removeMin(),null),t.fixUp()}remove(t,e){let r,s=this;if(e(t,s.key)<0)s.left.isEmpty()||s.left.isRed()||s.left.left.isRed()||(s=s.moveRedLeft()),s=s.copy(null,null,null,s.left.remove(t,e),null);else{if(s.left.isRed()&&(s=s.rotateRight()),s.right.isEmpty()||s.right.isRed()||s.right.left.isRed()||(s=s.moveRedRight()),e(t,s.key)===0){if(s.right.isEmpty())return ot.EMPTY;r=s.right.min(),s=s.copy(r.key,r.value,null,null,s.right.removeMin())}s=s.copy(null,null,null,null,s.right.remove(t,e))}return s.fixUp()}isRed(){return this.color}fixUp(){let t=this;return t.right.isRed()&&!t.left.isRed()&&(t=t.rotateLeft()),t.left.isRed()&&t.left.left.isRed()&&(t=t.rotateRight()),t.left.isRed()&&t.right.isRed()&&(t=t.colorFlip()),t}moveRedLeft(){let t=this.colorFlip();return t.right.left.isRed()&&(t=t.copy(null,null,null,null,t.right.rotateRight()),t=t.rotateLeft(),t=t.colorFlip()),t}moveRedRight(){let t=this.colorFlip();return t.left.left.isRed()&&(t=t.rotateRight(),t=t.colorFlip()),t}rotateLeft(){const t=this.copy(null,null,ot.RED,null,this.right.left);return this.right.copy(null,null,this.color,t,null)}rotateRight(){const t=this.copy(null,null,ot.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,t)}colorFlip(){const t=this.left.copy(null,null,!this.left.color,null,null),e=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,t,e)}checkMaxDepth(){const t=this.check();return Math.pow(2,t)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw U();const t=this.left.check();if(t!==this.right.check())throw U();return t+(this.isRed()?0:1)}}ot.EMPTY=null,ot.RED=!0,ot.BLACK=!1;ot.EMPTY=new class{constructor(){this.size=0}get key(){throw U()}get value(){throw U()}get color(){throw U()}get left(){throw U()}get right(){throw U()}copy(t,e,r,s,o){return this}insert(t,e,r){return new ot(t,e)}remove(t,e){return this}isEmpty(){return!0}inorderTraversal(t){return!1}reverseTraversal(t){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mt{constructor(t){this.comparator=t,this.data=new vt(this.comparator)}has(t){return this.data.get(t)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(t){return this.data.indexOf(t)}forEach(t){this.data.inorderTraversal((e,r)=>(t(e),!1))}forEachInRange(t,e){const r=this.data.getIteratorFrom(t[0]);for(;r.hasNext();){const s=r.getNext();if(this.comparator(s.key,t[1])>=0)return;e(s.key)}}forEachWhile(t,e){let r;for(r=e!==void 0?this.data.getIteratorFrom(e):this.data.getIterator();r.hasNext();)if(!t(r.getNext().key))return}firstAfterOrEqual(t){const e=this.data.getIteratorFrom(t);return e.hasNext()?e.getNext().key:null}getIterator(){return new So(this.data.getIterator())}getIteratorFrom(t){return new So(this.data.getIteratorFrom(t))}add(t){return this.copy(this.data.remove(t).insert(t,!0))}delete(t){return this.has(t)?this.copy(this.data.remove(t)):this}isEmpty(){return this.data.isEmpty()}unionWith(t){let e=this;return e.size<t.size&&(e=t,t=this),t.forEach(r=>{e=e.add(r)}),e}isEqual(t){if(!(t instanceof mt)||this.size!==t.size)return!1;const e=this.data.getIterator(),r=t.data.getIterator();for(;e.hasNext();){const s=e.getNext().key,o=r.getNext().key;if(this.comparator(s,o)!==0)return!1}return!0}toArray(){const t=[];return this.forEach(e=>{t.push(e)}),t}toString(){const t=[];return this.forEach(e=>t.push(e)),"SortedSet("+t.toString()+")"}copy(t){const e=new mt(this.comparator);return e.data=t,e}}class So{constructor(t){this.iter=t}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class At{constructor(t){this.fields=t,t.sort(lt.comparator)}static empty(){return new At([])}unionWith(t){let e=new mt(lt.comparator);for(const r of this.fields)e=e.add(r);for(const r of t)e=e.add(r);return new At(e.toArray())}covers(t){for(const e of this.fields)if(e.isPrefixOf(t))return!0;return!1}isEqual(t){return Ue(this.fields,t.fields,(e,r)=>e.isEqual(r))}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vh extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vt{constructor(t){this.binaryString=t}static fromBase64String(t){const e=function(s){try{return atob(s)}catch(o){throw typeof DOMException<"u"&&o instanceof DOMException?new vh("Invalid base64 string: "+o):o}}(t);return new Vt(e)}static fromUint8Array(t){const e=function(s){let o="";for(let l=0;l<s.length;++l)o+=String.fromCharCode(s[l]);return o}(t);return new Vt(e)}[Symbol.iterator](){let t=0;return{next:()=>t<this.binaryString.length?{value:this.binaryString.charCodeAt(t++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(e){return btoa(e)}(this.binaryString)}toUint8Array(){return function(e){const r=new Uint8Array(e.length);for(let s=0;s<e.length;s++)r[s]=e.charCodeAt(s);return r}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(t){return q(this.binaryString,t.binaryString)}isEqual(t){return this.binaryString===t.binaryString}}Vt.EMPTY_BYTE_STRING=new Vt("");const Eh=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function ve(n){if(tt(!!n),typeof n=="string"){let t=0;const e=Eh.exec(n);if(tt(!!e),e[1]){let s=e[1];s=(s+"000000000").substr(0,9),t=Number(s)}const r=new Date(n);return{seconds:Math.floor(r.getTime()/1e3),nanos:t}}return{seconds:at(n.seconds),nanos:at(n.nanos)}}function at(n){return typeof n=="number"?n:typeof n=="string"?Number(n):0}function Rn(n){return typeof n=="string"?Vt.fromBase64String(n):Vt.fromUint8Array(n)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Hi(n){var t,e;return((e=(((t=n==null?void 0:n.mapValue)===null||t===void 0?void 0:t.fields)||{}).__type__)===null||e===void 0?void 0:e.stringValue)==="server_timestamp"}function La(n){const t=n.mapValue.fields.__previous_value__;return Hi(t)?La(t):t}function pr(n){const t=ve(n.mapValue.fields.__local_write_time__.timestampValue);return new it(t.seconds,t.nanos)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ih{constructor(t,e,r,s,o,l,u,h,f){this.databaseId=t,this.appId=e,this.persistenceKey=r,this.host=s,this.ssl=o,this.forceLongPolling=l,this.autoDetectLongPolling=u,this.longPollingOptions=h,this.useFetchStreams=f}}class mr{constructor(t,e){this.projectId=t,this.database=e||"(default)"}static empty(){return new mr("","")}get isDefaultDatabase(){return this.database==="(default)"}isEqual(t){return t instanceof mr&&t.projectId===this.projectId&&t.database===this.database}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const sr={mapValue:{fields:{__type__:{stringValue:"__max__"}}}};function Be(n){return"nullValue"in n?0:"booleanValue"in n?1:"integerValue"in n||"doubleValue"in n?2:"timestampValue"in n?3:"stringValue"in n?5:"bytesValue"in n?6:"referenceValue"in n?7:"geoPointValue"in n?8:"arrayValue"in n?9:"mapValue"in n?Hi(n)?4:wh(n)?9007199254740991:Th(n)?10:11:U()}function Nt(n,t){if(n===t)return!0;const e=Be(n);if(e!==Be(t))return!1;switch(e){case 0:case 9007199254740991:return!0;case 1:return n.booleanValue===t.booleanValue;case 4:return pr(n).isEqual(pr(t));case 3:return function(s,o){if(typeof s.timestampValue=="string"&&typeof o.timestampValue=="string"&&s.timestampValue.length===o.timestampValue.length)return s.timestampValue===o.timestampValue;const l=ve(s.timestampValue),u=ve(o.timestampValue);return l.seconds===u.seconds&&l.nanos===u.nanos}(n,t);case 5:return n.stringValue===t.stringValue;case 6:return function(s,o){return Rn(s.bytesValue).isEqual(Rn(o.bytesValue))}(n,t);case 7:return n.referenceValue===t.referenceValue;case 8:return function(s,o){return at(s.geoPointValue.latitude)===at(o.geoPointValue.latitude)&&at(s.geoPointValue.longitude)===at(o.geoPointValue.longitude)}(n,t);case 2:return function(s,o){if("integerValue"in s&&"integerValue"in o)return at(s.integerValue)===at(o.integerValue);if("doubleValue"in s&&"doubleValue"in o){const l=at(s.doubleValue),u=at(o.doubleValue);return l===u?fr(l)===fr(u):isNaN(l)&&isNaN(u)}return!1}(n,t);case 9:return Ue(n.arrayValue.values||[],t.arrayValue.values||[],Nt);case 10:case 11:return function(s,o){const l=s.mapValue.fields||{},u=o.mapValue.fields||{};if(Po(l)!==Po(u))return!1;for(const h in l)if(l.hasOwnProperty(h)&&(u[h]===void 0||!Nt(l[h],u[h])))return!1;return!0}(n,t);default:return U()}}function Pn(n,t){return(n.values||[]).find(e=>Nt(e,t))!==void 0}function je(n,t){if(n===t)return 0;const e=Be(n),r=Be(t);if(e!==r)return q(e,r);switch(e){case 0:case 9007199254740991:return 0;case 1:return q(n.booleanValue,t.booleanValue);case 2:return function(o,l){const u=at(o.integerValue||o.doubleValue),h=at(l.integerValue||l.doubleValue);return u<h?-1:u>h?1:u===h?0:isNaN(u)?isNaN(h)?0:-1:1}(n,t);case 3:return bo(n.timestampValue,t.timestampValue);case 4:return bo(pr(n),pr(t));case 5:return q(n.stringValue,t.stringValue);case 6:return function(o,l){const u=Rn(o),h=Rn(l);return u.compareTo(h)}(n.bytesValue,t.bytesValue);case 7:return function(o,l){const u=o.split("/"),h=l.split("/");for(let f=0;f<u.length&&f<h.length;f++){const I=q(u[f],h[f]);if(I!==0)return I}return q(u.length,h.length)}(n.referenceValue,t.referenceValue);case 8:return function(o,l){const u=q(at(o.latitude),at(l.latitude));return u!==0?u:q(at(o.longitude),at(l.longitude))}(n.geoPointValue,t.geoPointValue);case 9:return Co(n.arrayValue,t.arrayValue);case 10:return function(o,l){var u,h,f,I;const A=o.fields||{},P=l.fields||{},C=(u=A.value)===null||u===void 0?void 0:u.arrayValue,k=(h=P.value)===null||h===void 0?void 0:h.arrayValue,O=q(((f=C==null?void 0:C.values)===null||f===void 0?void 0:f.length)||0,((I=k==null?void 0:k.values)===null||I===void 0?void 0:I.length)||0);return O!==0?O:Co(C,k)}(n.mapValue,t.mapValue);case 11:return function(o,l){if(o===sr.mapValue&&l===sr.mapValue)return 0;if(o===sr.mapValue)return 1;if(l===sr.mapValue)return-1;const u=o.fields||{},h=Object.keys(u),f=l.fields||{},I=Object.keys(f);h.sort(),I.sort();for(let A=0;A<h.length&&A<I.length;++A){const P=q(h[A],I[A]);if(P!==0)return P;const C=je(u[h[A]],f[I[A]]);if(C!==0)return C}return q(h.length,I.length)}(n.mapValue,t.mapValue);default:throw U()}}function bo(n,t){if(typeof n=="string"&&typeof t=="string"&&n.length===t.length)return q(n,t);const e=ve(n),r=ve(t),s=q(e.seconds,r.seconds);return s!==0?s:q(e.nanos,r.nanos)}function Co(n,t){const e=n.values||[],r=t.values||[];for(let s=0;s<e.length&&s<r.length;++s){const o=je(e[s],r[s]);if(o)return o}return q(e.length,r.length)}function $e(n){return wi(n)}function wi(n){return"nullValue"in n?"null":"booleanValue"in n?""+n.booleanValue:"integerValue"in n?""+n.integerValue:"doubleValue"in n?""+n.doubleValue:"timestampValue"in n?function(e){const r=ve(e);return`time(${r.seconds},${r.nanos})`}(n.timestampValue):"stringValue"in n?n.stringValue:"bytesValue"in n?function(e){return Rn(e).toBase64()}(n.bytesValue):"referenceValue"in n?function(e){return L.fromName(e).toString()}(n.referenceValue):"geoPointValue"in n?function(e){return`geo(${e.latitude},${e.longitude})`}(n.geoPointValue):"arrayValue"in n?function(e){let r="[",s=!0;for(const o of e.values||[])s?s=!1:r+=",",r+=wi(o);return r+"]"}(n.arrayValue):"mapValue"in n?function(e){const r=Object.keys(e.fields||{}).sort();let s="{",o=!0;for(const l of r)o?o=!1:s+=",",s+=`${l}:${wi(e.fields[l])}`;return s+"}"}(n.mapValue):U()}function Ai(n){return!!n&&"integerValue"in n}function Gi(n){return!!n&&"arrayValue"in n}function ur(n){return!!n&&"mapValue"in n}function Th(n){var t,e;return((e=(((t=n==null?void 0:n.mapValue)===null||t===void 0?void 0:t.fields)||{}).__type__)===null||e===void 0?void 0:e.stringValue)==="__vector__"}function yn(n){if(n.geoPointValue)return{geoPointValue:Object.assign({},n.geoPointValue)};if(n.timestampValue&&typeof n.timestampValue=="object")return{timestampValue:Object.assign({},n.timestampValue)};if(n.mapValue){const t={mapValue:{fields:{}}};return Dn(n.mapValue.fields,(e,r)=>t.mapValue.fields[e]=yn(r)),t}if(n.arrayValue){const t={arrayValue:{values:[]}};for(let e=0;e<(n.arrayValue.values||[]).length;++e)t.arrayValue.values[e]=yn(n.arrayValue.values[e]);return t}return Object.assign({},n)}function wh(n){return(((n.mapValue||{}).fields||{}).__type__||{}).stringValue==="__max__"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wt{constructor(t){this.value=t}static empty(){return new wt({mapValue:{}})}field(t){if(t.isEmpty())return this.value;{let e=this.value;for(let r=0;r<t.length-1;++r)if(e=(e.mapValue.fields||{})[t.get(r)],!ur(e))return null;return e=(e.mapValue.fields||{})[t.lastSegment()],e||null}}set(t,e){this.getFieldsMap(t.popLast())[t.lastSegment()]=yn(e)}setAll(t){let e=lt.emptyPath(),r={},s=[];t.forEach((l,u)=>{if(!e.isImmediateParentOf(u)){const h=this.getFieldsMap(e);this.applyChanges(h,r,s),r={},s=[],e=u.popLast()}l?r[u.lastSegment()]=yn(l):s.push(u.lastSegment())});const o=this.getFieldsMap(e);this.applyChanges(o,r,s)}delete(t){const e=this.field(t.popLast());ur(e)&&e.mapValue.fields&&delete e.mapValue.fields[t.lastSegment()]}isEqual(t){return Nt(this.value,t.value)}getFieldsMap(t){let e=this.value;e.mapValue.fields||(e.mapValue={fields:{}});for(let r=0;r<t.length;++r){let s=e.mapValue.fields[t.get(r)];ur(s)&&s.mapValue.fields||(s={mapValue:{fields:{}}},e.mapValue.fields[t.get(r)]=s),e=s}return e.mapValue.fields}applyChanges(t,e,r){Dn(e,(s,o)=>t[s]=o);for(const s of r)delete t[s]}clone(){return new wt(yn(this.value))}}function Fa(n){const t=[];return Dn(n.fields,(e,r)=>{const s=new lt([e]);if(ur(r)){const o=Fa(r.mapValue).fields;if(o.length===0)t.push(s);else for(const l of o)t.push(s.child(l))}else t.push(s)}),new At(t)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Tt{constructor(t,e,r,s,o,l,u){this.key=t,this.documentType=e,this.version=r,this.readTime=s,this.createTime=o,this.data=l,this.documentState=u}static newInvalidDocument(t){return new Tt(t,0,Q.min(),Q.min(),Q.min(),wt.empty(),0)}static newFoundDocument(t,e,r,s){return new Tt(t,1,e,Q.min(),r,s,0)}static newNoDocument(t,e){return new Tt(t,2,e,Q.min(),Q.min(),wt.empty(),0)}static newUnknownDocument(t,e){return new Tt(t,3,e,Q.min(),Q.min(),wt.empty(),2)}convertToFoundDocument(t,e){return!this.createTime.isEqual(Q.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=t),this.version=t,this.documentType=1,this.data=e,this.documentState=0,this}convertToNoDocument(t){return this.version=t,this.documentType=2,this.data=wt.empty(),this.documentState=0,this}convertToUnknownDocument(t){return this.version=t,this.documentType=3,this.data=wt.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=Q.min(),this}setReadTime(t){return this.readTime=t,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(t){return t instanceof Tt&&this.key.isEqual(t.key)&&this.version.isEqual(t.version)&&this.documentType===t.documentType&&this.documentState===t.documentState&&this.data.isEqual(t.data)}mutableCopy(){return new Tt(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gr{constructor(t,e){this.position=t,this.inclusive=e}}function ko(n,t,e){let r=0;for(let s=0;s<n.position.length;s++){const o=t[s],l=n.position[s];if(o.field.isKeyField()?r=L.comparator(L.fromName(l.referenceValue),e.key):r=je(l,e.data.field(o.field)),o.dir==="desc"&&(r*=-1),r!==0)break}return r}function Vo(n,t){if(n===null)return t===null;if(t===null||n.inclusive!==t.inclusive||n.position.length!==t.position.length)return!1;for(let e=0;e<n.position.length;e++)if(!Nt(n.position[e],t.position[e]))return!1;return!0}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _r{constructor(t,e="asc"){this.field=t,this.dir=e}}function Ah(n,t){return n.dir===t.dir&&n.field.isEqual(t.field)}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ua{}class rt extends Ua{constructor(t,e,r){super(),this.field=t,this.op=e,this.value=r}static create(t,e,r){return t.isKeyField()?e==="in"||e==="not-in"?this.createKeyFieldInFilter(t,e,r):new Ph(t,e,r):e==="array-contains"?new Ch(t,r):e==="in"?new kh(t,r):e==="not-in"?new Vh(t,r):e==="array-contains-any"?new Nh(t,r):new rt(t,e,r)}static createKeyFieldInFilter(t,e,r){return e==="in"?new Sh(t,r):new bh(t,r)}matches(t){const e=t.data.field(this.field);return this.op==="!="?e!==null&&this.matchesComparison(je(e,this.value)):e!==null&&Be(this.value)===Be(e)&&this.matchesComparison(je(e,this.value))}matchesComparison(t){switch(this.op){case"<":return t<0;case"<=":return t<=0;case"==":return t===0;case"!=":return t!==0;case">":return t>0;case">=":return t>=0;default:return U()}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class re extends Ua{constructor(t,e){super(),this.filters=t,this.op=e,this.ae=null}static create(t,e){return new re(t,e)}matches(t){return Ba(this)?this.filters.find(e=>!e.matches(t))===void 0:this.filters.find(e=>e.matches(t))!==void 0}getFlattenedFilters(){return this.ae!==null||(this.ae=this.filters.reduce((t,e)=>t.concat(e.getFlattenedFilters()),[])),this.ae}getFilters(){return Object.assign([],this.filters)}}function Ba(n){return n.op==="and"}function ja(n){return Rh(n)&&Ba(n)}function Rh(n){for(const t of n.filters)if(t instanceof re)return!1;return!0}function Ri(n){if(n instanceof rt)return n.field.canonicalString()+n.op.toString()+$e(n.value);if(ja(n))return n.filters.map(t=>Ri(t)).join(",");{const t=n.filters.map(e=>Ri(e)).join(",");return`${n.op}(${t})`}}function $a(n,t){return n instanceof rt?function(r,s){return s instanceof rt&&r.op===s.op&&r.field.isEqual(s.field)&&Nt(r.value,s.value)}(n,t):n instanceof re?function(r,s){return s instanceof re&&r.op===s.op&&r.filters.length===s.filters.length?r.filters.reduce((o,l,u)=>o&&$a(l,s.filters[u]),!0):!1}(n,t):void U()}function qa(n){return n instanceof rt?function(e){return`${e.field.canonicalString()} ${e.op} ${$e(e.value)}`}(n):n instanceof re?function(e){return e.op.toString()+" {"+e.getFilters().map(qa).join(" ,")+"}"}(n):"Filter"}class Ph extends rt{constructor(t,e,r){super(t,e,r),this.key=L.fromName(r.referenceValue)}matches(t){const e=L.comparator(t.key,this.key);return this.matchesComparison(e)}}class Sh extends rt{constructor(t,e){super(t,"in",e),this.keys=Ha("in",e)}matches(t){return this.keys.some(e=>e.isEqual(t.key))}}class bh extends rt{constructor(t,e){super(t,"not-in",e),this.keys=Ha("not-in",e)}matches(t){return!this.keys.some(e=>e.isEqual(t.key))}}function Ha(n,t){var e;return(((e=t.arrayValue)===null||e===void 0?void 0:e.values)||[]).map(r=>L.fromName(r.referenceValue))}class Ch extends rt{constructor(t,e){super(t,"array-contains",e)}matches(t){const e=t.data.field(this.field);return Gi(e)&&Pn(e.arrayValue,this.value)}}class kh extends rt{constructor(t,e){super(t,"in",e)}matches(t){const e=t.data.field(this.field);return e!==null&&Pn(this.value.arrayValue,e)}}class Vh extends rt{constructor(t,e){super(t,"not-in",e)}matches(t){if(Pn(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const e=t.data.field(this.field);return e!==null&&!Pn(this.value.arrayValue,e)}}class Nh extends rt{constructor(t,e){super(t,"array-contains-any",e)}matches(t){const e=t.data.field(this.field);return!(!Gi(e)||!e.arrayValue.values)&&e.arrayValue.values.some(r=>Pn(this.value.arrayValue,r))}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Dh{constructor(t,e=null,r=[],s=[],o=null,l=null,u=null){this.path=t,this.collectionGroup=e,this.orderBy=r,this.filters=s,this.limit=o,this.startAt=l,this.endAt=u,this.ue=null}}function No(n,t=null,e=[],r=[],s=null,o=null,l=null){return new Dh(n,t,e,r,s,o,l)}function Ki(n){const t=G(n);if(t.ue===null){let e=t.path.canonicalString();t.collectionGroup!==null&&(e+="|cg:"+t.collectionGroup),e+="|f:",e+=t.filters.map(r=>Ri(r)).join(","),e+="|ob:",e+=t.orderBy.map(r=>function(o){return o.field.canonicalString()+o.dir}(r)).join(","),qi(t.limit)||(e+="|l:",e+=t.limit),t.startAt&&(e+="|lb:",e+=t.startAt.inclusive?"b:":"a:",e+=t.startAt.position.map(r=>$e(r)).join(",")),t.endAt&&(e+="|ub:",e+=t.endAt.inclusive?"a:":"b:",e+=t.endAt.position.map(r=>$e(r)).join(",")),t.ue=e}return t.ue}function Wi(n,t){if(n.limit!==t.limit||n.orderBy.length!==t.orderBy.length)return!1;for(let e=0;e<n.orderBy.length;e++)if(!Ah(n.orderBy[e],t.orderBy[e]))return!1;if(n.filters.length!==t.filters.length)return!1;for(let e=0;e<n.filters.length;e++)if(!$a(n.filters[e],t.filters[e]))return!1;return n.collectionGroup===t.collectionGroup&&!!n.path.isEqual(t.path)&&!!Vo(n.startAt,t.startAt)&&Vo(n.endAt,t.endAt)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class br{constructor(t,e=null,r=[],s=[],o=null,l="F",u=null,h=null){this.path=t,this.collectionGroup=e,this.explicitOrderBy=r,this.filters=s,this.limit=o,this.limitType=l,this.startAt=u,this.endAt=h,this.ce=null,this.le=null,this.he=null,this.startAt,this.endAt}}function Oh(n,t,e,r,s,o,l,u){return new br(n,t,e,r,s,o,l,u)}function Mh(n){return new br(n)}function Do(n){return n.filters.length===0&&n.limit===null&&n.startAt==null&&n.endAt==null&&(n.explicitOrderBy.length===0||n.explicitOrderBy.length===1&&n.explicitOrderBy[0].field.isKeyField())}function xh(n){return n.collectionGroup!==null}function vn(n){const t=G(n);if(t.ce===null){t.ce=[];const e=new Set;for(const o of t.explicitOrderBy)t.ce.push(o),e.add(o.field.canonicalString());const r=t.explicitOrderBy.length>0?t.explicitOrderBy[t.explicitOrderBy.length-1].dir:"asc";(function(l){let u=new mt(lt.comparator);return l.filters.forEach(h=>{h.getFlattenedFilters().forEach(f=>{f.isInequality()&&(u=u.add(f.field))})}),u})(t).forEach(o=>{e.has(o.canonicalString())||o.isKeyField()||t.ce.push(new _r(o,r))}),e.has(lt.keyField().canonicalString())||t.ce.push(new _r(lt.keyField(),r))}return t.ce}function me(n){const t=G(n);return t.le||(t.le=Lh(t,vn(n))),t.le}function Lh(n,t){if(n.limitType==="F")return No(n.path,n.collectionGroup,t,n.filters,n.limit,n.startAt,n.endAt);{t=t.map(s=>{const o=s.dir==="desc"?"asc":"desc";return new _r(s.field,o)});const e=n.endAt?new gr(n.endAt.position,n.endAt.inclusive):null,r=n.startAt?new gr(n.startAt.position,n.startAt.inclusive):null;return No(n.path,n.collectionGroup,t,n.filters,n.limit,e,r)}}function Pi(n,t,e){return new br(n.path,n.collectionGroup,n.explicitOrderBy.slice(),n.filters.slice(),t,e,n.startAt,n.endAt)}function Ga(n,t){return Wi(me(n),me(t))&&n.limitType===t.limitType}function Ka(n){return`${Ki(me(n))}|lt:${n.limitType}`}function fn(n){return`Query(target=${function(e){let r=e.path.canonicalString();return e.collectionGroup!==null&&(r+=" collectionGroup="+e.collectionGroup),e.filters.length>0&&(r+=`, filters: [${e.filters.map(s=>qa(s)).join(", ")}]`),qi(e.limit)||(r+=", limit: "+e.limit),e.orderBy.length>0&&(r+=`, orderBy: [${e.orderBy.map(s=>function(l){return`${l.field.canonicalString()} (${l.dir})`}(s)).join(", ")}]`),e.startAt&&(r+=", startAt: ",r+=e.startAt.inclusive?"b:":"a:",r+=e.startAt.position.map(s=>$e(s)).join(",")),e.endAt&&(r+=", endAt: ",r+=e.endAt.inclusive?"a:":"b:",r+=e.endAt.position.map(s=>$e(s)).join(",")),`Target(${r})`}(me(n))}; limitType=${n.limitType})`}function zi(n,t){return t.isFoundDocument()&&function(r,s){const o=s.key.path;return r.collectionGroup!==null?s.key.hasCollectionId(r.collectionGroup)&&r.path.isPrefixOf(o):L.isDocumentKey(r.path)?r.path.isEqual(o):r.path.isImmediateParentOf(o)}(n,t)&&function(r,s){for(const o of vn(r))if(!o.field.isKeyField()&&s.data.field(o.field)===null)return!1;return!0}(n,t)&&function(r,s){for(const o of r.filters)if(!o.matches(s))return!1;return!0}(n,t)&&function(r,s){return!(r.startAt&&!function(l,u,h){const f=ko(l,u,h);return l.inclusive?f<=0:f<0}(r.startAt,vn(r),s)||r.endAt&&!function(l,u,h){const f=ko(l,u,h);return l.inclusive?f>=0:f>0}(r.endAt,vn(r),s))}(n,t)}function Fh(n){return(t,e)=>{let r=!1;for(const s of vn(n)){const o=Uh(s,t,e);if(o!==0)return o;r=r||s.field.isKeyField()}return 0}}function Uh(n,t,e){const r=n.field.isKeyField()?L.comparator(t.key,e.key):function(o,l,u){const h=l.data.field(o),f=u.data.field(o);return h!==null&&f!==null?je(h,f):U()}(n.field,t,e);switch(n.dir){case"asc":return r;case"desc":return-1*r;default:return U()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ge{constructor(t,e){this.mapKeyFn=t,this.equalsFn=e,this.inner={},this.innerSize=0}get(t){const e=this.mapKeyFn(t),r=this.inner[e];if(r!==void 0){for(const[s,o]of r)if(this.equalsFn(s,t))return o}}has(t){return this.get(t)!==void 0}set(t,e){const r=this.mapKeyFn(t),s=this.inner[r];if(s===void 0)return this.inner[r]=[[t,e]],void this.innerSize++;for(let o=0;o<s.length;o++)if(this.equalsFn(s[o][0],t))return void(s[o]=[t,e]);s.push([t,e]),this.innerSize++}delete(t){const e=this.mapKeyFn(t),r=this.inner[e];if(r===void 0)return!1;for(let s=0;s<r.length;s++)if(this.equalsFn(r[s][0],t))return r.length===1?delete this.inner[e]:r.splice(s,1),this.innerSize--,!0;return!1}forEach(t){Dn(this.inner,(e,r)=>{for(const[s,o]of r)t(s,o)})}isEmpty(){return xa(this.inner)}size(){return this.innerSize}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Bh=new vt(L.comparator);function yr(){return Bh}const Wa=new vt(L.comparator);function or(...n){let t=Wa;for(const e of n)t=t.insert(e.key,e);return t}function za(n){let t=Wa;return n.forEach((e,r)=>t=t.insert(e,r.overlayedDocument)),t}function he(){return En()}function Qa(){return En()}function En(){return new Ge(n=>n.toString(),(n,t)=>n.isEqual(t))}const jh=new vt(L.comparator),$h=new mt(L.comparator);function pt(...n){let t=$h;for(const e of n)t=t.add(e);return t}const qh=new mt(q);function Hh(){return qh}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Qi(n,t){if(n.useProto3Json){if(isNaN(t))return{doubleValue:"NaN"};if(t===1/0)return{doubleValue:"Infinity"};if(t===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:fr(t)?"-0":t}}function Xa(n){return{integerValue:""+n}}function Gh(n,t){return yh(t)?Xa(t):Qi(n,t)}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Cr{constructor(){this._=void 0}}function Kh(n,t,e){return n instanceof vr?function(s,o){const l={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:s.seconds,nanos:s.nanoseconds}}}};return o&&Hi(o)&&(o=La(o)),o&&(l.fields.__previous_value__=o),{mapValue:l}}(e,t):n instanceof Sn?Ya(n,t):n instanceof bn?Za(n,t):function(s,o){const l=Ja(s,o),u=Oo(l)+Oo(s.Pe);return Ai(l)&&Ai(s.Pe)?Xa(u):Qi(s.serializer,u)}(n,t)}function Wh(n,t,e){return n instanceof Sn?Ya(n,t):n instanceof bn?Za(n,t):e}function Ja(n,t){return n instanceof Er?function(r){return Ai(r)||function(o){return!!o&&"doubleValue"in o}(r)}(t)?t:{integerValue:0}:null}class vr extends Cr{}class Sn extends Cr{constructor(t){super(),this.elements=t}}function Ya(n,t){const e=tl(t);for(const r of n.elements)e.some(s=>Nt(s,r))||e.push(r);return{arrayValue:{values:e}}}class bn extends Cr{constructor(t){super(),this.elements=t}}function Za(n,t){let e=tl(t);for(const r of n.elements)e=e.filter(s=>!Nt(s,r));return{arrayValue:{values:e}}}class Er extends Cr{constructor(t,e){super(),this.serializer=t,this.Pe=e}}function Oo(n){return at(n.integerValue||n.doubleValue)}function tl(n){return Gi(n)&&n.arrayValue.values?n.arrayValue.values.slice():[]}function zh(n,t){return n.field.isEqual(t.field)&&function(r,s){return r instanceof Sn&&s instanceof Sn||r instanceof bn&&s instanceof bn?Ue(r.elements,s.elements,Nt):r instanceof Er&&s instanceof Er?Nt(r.Pe,s.Pe):r instanceof vr&&s instanceof vr}(n.transform,t.transform)}class Qh{constructor(t,e){this.version=t,this.transformResults=e}}class jt{constructor(t,e){this.updateTime=t,this.exists=e}static none(){return new jt}static exists(t){return new jt(void 0,t)}static updateTime(t){return new jt(t)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(t){return this.exists===t.exists&&(this.updateTime?!!t.updateTime&&this.updateTime.isEqual(t.updateTime):!t.updateTime)}}function hr(n,t){return n.updateTime!==void 0?t.isFoundDocument()&&t.version.isEqual(n.updateTime):n.exists===void 0||n.exists===t.isFoundDocument()}class kr{}function el(n,t){if(!n.hasLocalMutations||t&&t.fields.length===0)return null;if(t===null)return n.isNoDocument()?new rl(n.key,jt.none()):new On(n.key,n.data,jt.none());{const e=n.data,r=wt.empty();let s=new mt(lt.comparator);for(let o of t.fields)if(!s.has(o)){let l=e.field(o);l===null&&o.length>1&&(o=o.popLast(),l=e.field(o)),l===null?r.delete(o):r.set(o,l),s=s.add(o)}return new Ae(n.key,r,new At(s.toArray()),jt.none())}}function Xh(n,t,e){n instanceof On?function(s,o,l){const u=s.value.clone(),h=xo(s.fieldTransforms,o,l.transformResults);u.setAll(h),o.convertToFoundDocument(l.version,u).setHasCommittedMutations()}(n,t,e):n instanceof Ae?function(s,o,l){if(!hr(s.precondition,o))return void o.convertToUnknownDocument(l.version);const u=xo(s.fieldTransforms,o,l.transformResults),h=o.data;h.setAll(nl(s)),h.setAll(u),o.convertToFoundDocument(l.version,h).setHasCommittedMutations()}(n,t,e):function(s,o,l){o.convertToNoDocument(l.version).setHasCommittedMutations()}(0,t,e)}function In(n,t,e,r){return n instanceof On?function(o,l,u,h){if(!hr(o.precondition,l))return u;const f=o.value.clone(),I=Lo(o.fieldTransforms,h,l);return f.setAll(I),l.convertToFoundDocument(l.version,f).setHasLocalMutations(),null}(n,t,e,r):n instanceof Ae?function(o,l,u,h){if(!hr(o.precondition,l))return u;const f=Lo(o.fieldTransforms,h,l),I=l.data;return I.setAll(nl(o)),I.setAll(f),l.convertToFoundDocument(l.version,I).setHasLocalMutations(),u===null?null:u.unionWith(o.fieldMask.fields).unionWith(o.fieldTransforms.map(A=>A.field))}(n,t,e,r):function(o,l,u){return hr(o.precondition,l)?(l.convertToNoDocument(l.version).setHasLocalMutations(),null):u}(n,t,e)}function Jh(n,t){let e=null;for(const r of n.fieldTransforms){const s=t.data.field(r.field),o=Ja(r.transform,s||null);o!=null&&(e===null&&(e=wt.empty()),e.set(r.field,o))}return e||null}function Mo(n,t){return n.type===t.type&&!!n.key.isEqual(t.key)&&!!n.precondition.isEqual(t.precondition)&&!!function(r,s){return r===void 0&&s===void 0||!(!r||!s)&&Ue(r,s,(o,l)=>zh(o,l))}(n.fieldTransforms,t.fieldTransforms)&&(n.type===0?n.value.isEqual(t.value):n.type!==1||n.data.isEqual(t.data)&&n.fieldMask.isEqual(t.fieldMask))}class On extends kr{constructor(t,e,r,s=[]){super(),this.key=t,this.value=e,this.precondition=r,this.fieldTransforms=s,this.type=0}getFieldMask(){return null}}class Ae extends kr{constructor(t,e,r,s,o=[]){super(),this.key=t,this.data=e,this.fieldMask=r,this.precondition=s,this.fieldTransforms=o,this.type=1}getFieldMask(){return this.fieldMask}}function nl(n){const t=new Map;return n.fieldMask.fields.forEach(e=>{if(!e.isEmpty()){const r=n.data.field(e);t.set(e,r)}}),t}function xo(n,t,e){const r=new Map;tt(n.length===e.length);for(let s=0;s<e.length;s++){const o=n[s],l=o.transform,u=t.data.field(o.field);r.set(o.field,Wh(l,u,e[s]))}return r}function Lo(n,t,e){const r=new Map;for(const s of n){const o=s.transform,l=e.data.field(s.field);r.set(s.field,Kh(o,l,t))}return r}class rl extends kr{constructor(t,e){super(),this.key=t,this.precondition=e,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class Yh extends kr{constructor(t,e){super(),this.key=t,this.precondition=e,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zh{constructor(t,e,r,s){this.batchId=t,this.localWriteTime=e,this.baseMutations=r,this.mutations=s}applyToRemoteDocument(t,e){const r=e.mutationResults;for(let s=0;s<this.mutations.length;s++){const o=this.mutations[s];o.key.isEqual(t.key)&&Xh(o,t,r[s])}}applyToLocalView(t,e){for(const r of this.baseMutations)r.key.isEqual(t.key)&&(e=In(r,t,e,this.localWriteTime));for(const r of this.mutations)r.key.isEqual(t.key)&&(e=In(r,t,e,this.localWriteTime));return e}applyToLocalDocumentSet(t,e){const r=Qa();return this.mutations.forEach(s=>{const o=t.get(s.key),l=o.overlayedDocument;let u=this.applyToLocalView(l,o.mutatedFields);u=e.has(s.key)?null:u;const h=el(l,u);h!==null&&r.set(s.key,h),l.isValidDocument()||l.convertToNoDocument(Q.min())}),r}keys(){return this.mutations.reduce((t,e)=>t.add(e.key),pt())}isEqual(t){return this.batchId===t.batchId&&Ue(this.mutations,t.mutations,(e,r)=>Mo(e,r))&&Ue(this.baseMutations,t.baseMutations,(e,r)=>Mo(e,r))}}class Xi{constructor(t,e,r,s){this.batch=t,this.commitVersion=e,this.mutationResults=r,this.docVersions=s}static from(t,e,r){tt(t.mutations.length===r.length);let s=function(){return jh}();const o=t.mutations;for(let l=0;l<o.length;l++)s=s.insert(o[l].key,r[l].version);return new Xi(t,e,r,s)}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class td{constructor(t,e){this.largestBatchId=t,this.mutation=e}getKey(){return this.mutation.key}isEqual(t){return t!==null&&this.mutation===t.mutation}toString(){return`Overlay{
      largestBatchId: ${this.largestBatchId},
      mutation: ${this.mutation.toString()}
    }`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Y,B;function ed(n){switch(n){default:return U();case S.CANCELLED:case S.UNKNOWN:case S.DEADLINE_EXCEEDED:case S.RESOURCE_EXHAUSTED:case S.INTERNAL:case S.UNAVAILABLE:case S.UNAUTHENTICATED:return!1;case S.INVALID_ARGUMENT:case S.NOT_FOUND:case S.ALREADY_EXISTS:case S.PERMISSION_DENIED:case S.FAILED_PRECONDITION:case S.ABORTED:case S.OUT_OF_RANGE:case S.UNIMPLEMENTED:case S.DATA_LOSS:return!0}}function nd(n){if(n===void 0)return ye("GRPC error has no .code"),S.UNKNOWN;switch(n){case Y.OK:return S.OK;case Y.CANCELLED:return S.CANCELLED;case Y.UNKNOWN:return S.UNKNOWN;case Y.DEADLINE_EXCEEDED:return S.DEADLINE_EXCEEDED;case Y.RESOURCE_EXHAUSTED:return S.RESOURCE_EXHAUSTED;case Y.INTERNAL:return S.INTERNAL;case Y.UNAVAILABLE:return S.UNAVAILABLE;case Y.UNAUTHENTICATED:return S.UNAUTHENTICATED;case Y.INVALID_ARGUMENT:return S.INVALID_ARGUMENT;case Y.NOT_FOUND:return S.NOT_FOUND;case Y.ALREADY_EXISTS:return S.ALREADY_EXISTS;case Y.PERMISSION_DENIED:return S.PERMISSION_DENIED;case Y.FAILED_PRECONDITION:return S.FAILED_PRECONDITION;case Y.ABORTED:return S.ABORTED;case Y.OUT_OF_RANGE:return S.OUT_OF_RANGE;case Y.UNIMPLEMENTED:return S.UNIMPLEMENTED;case Y.DATA_LOSS:return S.DATA_LOSS;default:return U()}}(B=Y||(Y={}))[B.OK=0]="OK",B[B.CANCELLED=1]="CANCELLED",B[B.UNKNOWN=2]="UNKNOWN",B[B.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",B[B.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",B[B.NOT_FOUND=5]="NOT_FOUND",B[B.ALREADY_EXISTS=6]="ALREADY_EXISTS",B[B.PERMISSION_DENIED=7]="PERMISSION_DENIED",B[B.UNAUTHENTICATED=16]="UNAUTHENTICATED",B[B.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",B[B.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",B[B.ABORTED=10]="ABORTED",B[B.OUT_OF_RANGE=11]="OUT_OF_RANGE",B[B.UNIMPLEMENTED=12]="UNIMPLEMENTED",B[B.INTERNAL=13]="INTERNAL",B[B.UNAVAILABLE=14]="UNAVAILABLE",B[B.DATA_LOSS=15]="DATA_LOSS";/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */new Pa([4294967295,4294967295],0);class rd{constructor(t,e){this.databaseId=t,this.useProto3Json=e}}function Si(n,t){return n.useProto3Json?`${new Date(1e3*t.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+t.nanoseconds).slice(-9)}Z`:{seconds:""+t.seconds,nanos:t.nanoseconds}}function id(n,t){return n.useProto3Json?t.toBase64():t.toUint8Array()}function sd(n,t){return Si(n,t.toTimestamp())}function Ve(n){return tt(!!n),Q.fromTimestamp(function(e){const r=ve(e);return new it(r.seconds,r.nanos)}(n))}function il(n,t){return bi(n,t).canonicalString()}function bi(n,t){const e=function(s){return new J(["projects",s.projectId,"databases",s.database])}(n).child("documents");return t===void 0?e:e.child(t)}function od(n){const t=J.fromString(n);return tt(pd(t)),t}function Ci(n,t){return il(n.databaseId,t.path)}function ad(n){const t=od(n);return t.length===4?J.emptyPath():cd(t)}function ld(n){return new J(["projects",n.databaseId.projectId,"databases",n.databaseId.database]).canonicalString()}function cd(n){return tt(n.length>4&&n.get(4)==="documents"),n.popFirst(5)}function Fo(n,t,e){return{name:Ci(n,t),fields:e.value.mapValue.fields}}function ud(n,t){let e;if(t instanceof On)e={update:Fo(n,t.key,t.value)};else if(t instanceof rl)e={delete:Ci(n,t.key)};else if(t instanceof Ae)e={update:Fo(n,t.key,t.data),updateMask:fd(t.fieldMask)};else{if(!(t instanceof Yh))return U();e={verify:Ci(n,t.key)}}return t.fieldTransforms.length>0&&(e.updateTransforms=t.fieldTransforms.map(r=>function(o,l){const u=l.transform;if(u instanceof vr)return{fieldPath:l.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(u instanceof Sn)return{fieldPath:l.field.canonicalString(),appendMissingElements:{values:u.elements}};if(u instanceof bn)return{fieldPath:l.field.canonicalString(),removeAllFromArray:{values:u.elements}};if(u instanceof Er)return{fieldPath:l.field.canonicalString(),increment:u.Pe};throw U()}(0,r))),t.precondition.isNone||(e.currentDocument=function(s,o){return o.updateTime!==void 0?{updateTime:sd(s,o.updateTime)}:o.exists!==void 0?{exists:o.exists}:U()}(n,t.precondition)),e}function hd(n,t){return n&&n.length>0?(tt(t!==void 0),n.map(e=>function(s,o){let l=s.updateTime?Ve(s.updateTime):Ve(o);return l.isEqual(Q.min())&&(l=Ve(o)),new Qh(l,s.transformResults||[])}(e,t))):[]}function dd(n){let t=ad(n.parent);const e=n.structuredQuery,r=e.from?e.from.length:0;let s=null;if(r>0){tt(r===1);const I=e.from[0];I.allDescendants?s=I.collectionId:t=t.child(I.collectionId)}let o=[];e.where&&(o=function(A){const P=sl(A);return P instanceof re&&ja(P)?P.getFilters():[P]}(e.where));let l=[];e.orderBy&&(l=function(A){return A.map(P=>function(k){return new _r(ke(k.field),function(D){switch(D){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(k.direction))}(P))}(e.orderBy));let u=null;e.limit&&(u=function(A){let P;return P=typeof A=="object"?A.value:A,qi(P)?null:P}(e.limit));let h=null;e.startAt&&(h=function(A){const P=!!A.before,C=A.values||[];return new gr(C,P)}(e.startAt));let f=null;return e.endAt&&(f=function(A){const P=!A.before,C=A.values||[];return new gr(C,P)}(e.endAt)),Oh(t,s,l,o,u,"F",h,f)}function sl(n){return n.unaryFilter!==void 0?function(e){switch(e.unaryFilter.op){case"IS_NAN":const r=ke(e.unaryFilter.field);return rt.create(r,"==",{doubleValue:NaN});case"IS_NULL":const s=ke(e.unaryFilter.field);return rt.create(s,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const o=ke(e.unaryFilter.field);return rt.create(o,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const l=ke(e.unaryFilter.field);return rt.create(l,"!=",{nullValue:"NULL_VALUE"});default:return U()}}(n):n.fieldFilter!==void 0?function(e){return rt.create(ke(e.fieldFilter.field),function(s){switch(s){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return U()}}(e.fieldFilter.op),e.fieldFilter.value)}(n):n.compositeFilter!==void 0?function(e){return re.create(e.compositeFilter.filters.map(r=>sl(r)),function(s){switch(s){case"AND":return"and";case"OR":return"or";default:return U()}}(e.compositeFilter.op))}(n):U()}function ke(n){return lt.fromServerFormat(n.fieldPath)}function fd(n){const t=[];return n.fields.forEach(e=>t.push(e.canonicalString())),{fieldPaths:t}}function pd(n){return n.length>=4&&n.get(0)==="projects"&&n.get(2)==="databases"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class md{constructor(t){this.ct=t}}function gd(n){const t=dd({parent:n.parent,structuredQuery:n.structuredQuery});return n.limitType==="LAST"?Pi(t,t.limit,"L"):t}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _d{constructor(){this.un=new yd}addToCollectionParentIndex(t,e){return this.un.add(e),R.resolve()}getCollectionParents(t,e){return R.resolve(this.un.getEntries(e))}addFieldIndex(t,e){return R.resolve()}deleteFieldIndex(t,e){return R.resolve()}deleteAllFieldIndexes(t){return R.resolve()}createTargetIndexes(t,e){return R.resolve()}getDocumentsMatchingTarget(t,e){return R.resolve(null)}getIndexType(t,e){return R.resolve(0)}getFieldIndexes(t,e){return R.resolve([])}getNextCollectionGroupToUpdate(t){return R.resolve(null)}getMinOffset(t,e){return R.resolve(ne.min())}getMinOffsetFromCollectionGroup(t,e){return R.resolve(ne.min())}updateCollectionGroup(t,e,r){return R.resolve()}updateIndexEntries(t,e){return R.resolve()}}class yd{constructor(){this.index={}}add(t){const e=t.lastSegment(),r=t.popLast(),s=this.index[e]||new mt(J.comparator),o=!s.has(r);return this.index[e]=s.add(r),o}has(t){const e=t.lastSegment(),r=t.popLast(),s=this.index[e];return s&&s.has(r)}getEntries(t){return(this.index[t]||new mt(J.comparator)).toArray()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qe{constructor(t){this.Ln=t}next(){return this.Ln+=2,this.Ln}static Bn(){return new qe(0)}static kn(){return new qe(-1)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vd{constructor(){this.changes=new Ge(t=>t.toString(),(t,e)=>t.isEqual(e)),this.changesApplied=!1}addEntry(t){this.assertNotApplied(),this.changes.set(t.key,t)}removeEntry(t,e){this.assertNotApplied(),this.changes.set(t,Tt.newInvalidDocument(t).setReadTime(e))}getEntry(t,e){this.assertNotApplied();const r=this.changes.get(e);return r!==void 0?R.resolve(r):this.getFromCache(t,e)}getEntries(t,e){return this.getAllFromCache(t,e)}apply(t){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(t)}assertNotApplied(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ed{constructor(t,e){this.overlayedDocument=t,this.mutatedFields=e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Id{constructor(t,e,r,s){this.remoteDocumentCache=t,this.mutationQueue=e,this.documentOverlayCache=r,this.indexManager=s}getDocument(t,e){let r=null;return this.documentOverlayCache.getOverlay(t,e).next(s=>(r=s,this.remoteDocumentCache.getEntry(t,e))).next(s=>(r!==null&&In(r.mutation,s,At.empty(),it.now()),s))}getDocuments(t,e){return this.remoteDocumentCache.getEntries(t,e).next(r=>this.getLocalViewOfDocuments(t,r,pt()).next(()=>r))}getLocalViewOfDocuments(t,e,r=pt()){const s=he();return this.populateOverlays(t,s,e).next(()=>this.computeViews(t,e,s,r).next(o=>{let l=or();return o.forEach((u,h)=>{l=l.insert(u,h.overlayedDocument)}),l}))}getOverlayedDocuments(t,e){const r=he();return this.populateOverlays(t,r,e).next(()=>this.computeViews(t,e,r,pt()))}populateOverlays(t,e,r){const s=[];return r.forEach(o=>{e.has(o)||s.push(o)}),this.documentOverlayCache.getOverlays(t,s).next(o=>{o.forEach((l,u)=>{e.set(l,u)})})}computeViews(t,e,r,s){let o=yr();const l=En(),u=function(){return En()}();return e.forEach((h,f)=>{const I=r.get(f.key);s.has(f.key)&&(I===void 0||I.mutation instanceof Ae)?o=o.insert(f.key,f):I!==void 0?(l.set(f.key,I.mutation.getFieldMask()),In(I.mutation,f,I.mutation.getFieldMask(),it.now())):l.set(f.key,At.empty())}),this.recalculateAndSaveOverlays(t,o).next(h=>(h.forEach((f,I)=>l.set(f,I)),e.forEach((f,I)=>{var A;return u.set(f,new Ed(I,(A=l.get(f))!==null&&A!==void 0?A:null))}),u))}recalculateAndSaveOverlays(t,e){const r=En();let s=new vt((l,u)=>l-u),o=pt();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(t,e).next(l=>{for(const u of l)u.keys().forEach(h=>{const f=e.get(h);if(f===null)return;let I=r.get(h)||At.empty();I=u.applyToLocalView(f,I),r.set(h,I);const A=(s.get(u.batchId)||pt()).add(h);s=s.insert(u.batchId,A)})}).next(()=>{const l=[],u=s.getReverseIterator();for(;u.hasNext();){const h=u.getNext(),f=h.key,I=h.value,A=Qa();I.forEach(P=>{if(!o.has(P)){const C=el(e.get(P),r.get(P));C!==null&&A.set(P,C),o=o.add(P)}}),l.push(this.documentOverlayCache.saveOverlays(t,f,A))}return R.waitFor(l)}).next(()=>r)}recalculateAndSaveOverlaysForDocumentKeys(t,e){return this.remoteDocumentCache.getEntries(t,e).next(r=>this.recalculateAndSaveOverlays(t,r))}getDocumentsMatchingQuery(t,e,r,s){return function(l){return L.isDocumentKey(l.path)&&l.collectionGroup===null&&l.filters.length===0}(e)?this.getDocumentsMatchingDocumentQuery(t,e.path):xh(e)?this.getDocumentsMatchingCollectionGroupQuery(t,e,r,s):this.getDocumentsMatchingCollectionQuery(t,e,r,s)}getNextDocuments(t,e,r,s){return this.remoteDocumentCache.getAllFromCollectionGroup(t,e,r,s).next(o=>{const l=s-o.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(t,e,r.largestBatchId,s-o.size):R.resolve(he());let u=-1,h=o;return l.next(f=>R.forEach(f,(I,A)=>(u<A.largestBatchId&&(u=A.largestBatchId),o.get(I)?R.resolve():this.remoteDocumentCache.getEntry(t,I).next(P=>{h=h.insert(I,P)}))).next(()=>this.populateOverlays(t,f,o)).next(()=>this.computeViews(t,h,f,pt())).next(I=>({batchId:u,changes:za(I)})))})}getDocumentsMatchingDocumentQuery(t,e){return this.getDocument(t,new L(e)).next(r=>{let s=or();return r.isFoundDocument()&&(s=s.insert(r.key,r)),s})}getDocumentsMatchingCollectionGroupQuery(t,e,r,s){const o=e.collectionGroup;let l=or();return this.indexManager.getCollectionParents(t,o).next(u=>R.forEach(u,h=>{const f=function(A,P){return new br(P,null,A.explicitOrderBy.slice(),A.filters.slice(),A.limit,A.limitType,A.startAt,A.endAt)}(e,h.child(o));return this.getDocumentsMatchingCollectionQuery(t,f,r,s).next(I=>{I.forEach((A,P)=>{l=l.insert(A,P)})})}).next(()=>l))}getDocumentsMatchingCollectionQuery(t,e,r,s){let o;return this.documentOverlayCache.getOverlaysForCollection(t,e.path,r.largestBatchId).next(l=>(o=l,this.remoteDocumentCache.getDocumentsMatchingQuery(t,e,r,o,s))).next(l=>{o.forEach((h,f)=>{const I=f.getKey();l.get(I)===null&&(l=l.insert(I,Tt.newInvalidDocument(I)))});let u=or();return l.forEach((h,f)=>{const I=o.get(h);I!==void 0&&In(I.mutation,f,At.empty(),it.now()),zi(e,f)&&(u=u.insert(h,f))}),u})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Td{constructor(t){this.serializer=t,this.hr=new Map,this.Pr=new Map}getBundleMetadata(t,e){return R.resolve(this.hr.get(e))}saveBundleMetadata(t,e){return this.hr.set(e.id,function(s){return{id:s.id,version:s.version,createTime:Ve(s.createTime)}}(e)),R.resolve()}getNamedQuery(t,e){return R.resolve(this.Pr.get(e))}saveNamedQuery(t,e){return this.Pr.set(e.name,function(s){return{name:s.name,query:gd(s.bundledQuery),readTime:Ve(s.readTime)}}(e)),R.resolve()}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wd{constructor(){this.overlays=new vt(L.comparator),this.Ir=new Map}getOverlay(t,e){return R.resolve(this.overlays.get(e))}getOverlays(t,e){const r=he();return R.forEach(e,s=>this.getOverlay(t,s).next(o=>{o!==null&&r.set(s,o)})).next(()=>r)}saveOverlays(t,e,r){return r.forEach((s,o)=>{this.ht(t,e,o)}),R.resolve()}removeOverlaysForBatchId(t,e,r){const s=this.Ir.get(r);return s!==void 0&&(s.forEach(o=>this.overlays=this.overlays.remove(o)),this.Ir.delete(r)),R.resolve()}getOverlaysForCollection(t,e,r){const s=he(),o=e.length+1,l=new L(e.child("")),u=this.overlays.getIteratorFrom(l);for(;u.hasNext();){const h=u.getNext().value,f=h.getKey();if(!e.isPrefixOf(f.path))break;f.path.length===o&&h.largestBatchId>r&&s.set(h.getKey(),h)}return R.resolve(s)}getOverlaysForCollectionGroup(t,e,r,s){let o=new vt((f,I)=>f-I);const l=this.overlays.getIterator();for(;l.hasNext();){const f=l.getNext().value;if(f.getKey().getCollectionGroup()===e&&f.largestBatchId>r){let I=o.get(f.largestBatchId);I===null&&(I=he(),o=o.insert(f.largestBatchId,I)),I.set(f.getKey(),f)}}const u=he(),h=o.getIterator();for(;h.hasNext()&&(h.getNext().value.forEach((f,I)=>u.set(f,I)),!(u.size()>=s)););return R.resolve(u)}ht(t,e,r){const s=this.overlays.get(r.key);if(s!==null){const l=this.Ir.get(s.largestBatchId).delete(r.key);this.Ir.set(s.largestBatchId,l)}this.overlays=this.overlays.insert(r.key,new td(e,r));let o=this.Ir.get(e);o===void 0&&(o=pt(),this.Ir.set(e,o)),this.Ir.set(e,o.add(r.key))}}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ad{constructor(){this.sessionToken=Vt.EMPTY_BYTE_STRING}getSessionToken(t){return R.resolve(this.sessionToken)}setSessionToken(t,e){return this.sessionToken=e,R.resolve()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ji{constructor(){this.Tr=new mt(nt.Er),this.dr=new mt(nt.Ar)}isEmpty(){return this.Tr.isEmpty()}addReference(t,e){const r=new nt(t,e);this.Tr=this.Tr.add(r),this.dr=this.dr.add(r)}Rr(t,e){t.forEach(r=>this.addReference(r,e))}removeReference(t,e){this.Vr(new nt(t,e))}mr(t,e){t.forEach(r=>this.removeReference(r,e))}gr(t){const e=new L(new J([])),r=new nt(e,t),s=new nt(e,t+1),o=[];return this.dr.forEachInRange([r,s],l=>{this.Vr(l),o.push(l.key)}),o}pr(){this.Tr.forEach(t=>this.Vr(t))}Vr(t){this.Tr=this.Tr.delete(t),this.dr=this.dr.delete(t)}yr(t){const e=new L(new J([])),r=new nt(e,t),s=new nt(e,t+1);let o=pt();return this.dr.forEachInRange([r,s],l=>{o=o.add(l.key)}),o}containsKey(t){const e=new nt(t,0),r=this.Tr.firstAfterOrEqual(e);return r!==null&&t.isEqual(r.key)}}class nt{constructor(t,e){this.key=t,this.wr=e}static Er(t,e){return L.comparator(t.key,e.key)||q(t.wr,e.wr)}static Ar(t,e){return q(t.wr,e.wr)||L.comparator(t.key,e.key)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rd{constructor(t,e){this.indexManager=t,this.referenceDelegate=e,this.mutationQueue=[],this.Sr=1,this.br=new mt(nt.Er)}checkEmpty(t){return R.resolve(this.mutationQueue.length===0)}addMutationBatch(t,e,r,s){const o=this.Sr;this.Sr++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const l=new Zh(o,e,r,s);this.mutationQueue.push(l);for(const u of s)this.br=this.br.add(new nt(u.key,o)),this.indexManager.addToCollectionParentIndex(t,u.key.path.popLast());return R.resolve(l)}lookupMutationBatch(t,e){return R.resolve(this.Dr(e))}getNextMutationBatchAfterBatchId(t,e){const r=e+1,s=this.vr(r),o=s<0?0:s;return R.resolve(this.mutationQueue.length>o?this.mutationQueue[o]:null)}getHighestUnacknowledgedBatchId(){return R.resolve(this.mutationQueue.length===0?-1:this.Sr-1)}getAllMutationBatches(t){return R.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(t,e){const r=new nt(e,0),s=new nt(e,Number.POSITIVE_INFINITY),o=[];return this.br.forEachInRange([r,s],l=>{const u=this.Dr(l.wr);o.push(u)}),R.resolve(o)}getAllMutationBatchesAffectingDocumentKeys(t,e){let r=new mt(q);return e.forEach(s=>{const o=new nt(s,0),l=new nt(s,Number.POSITIVE_INFINITY);this.br.forEachInRange([o,l],u=>{r=r.add(u.wr)})}),R.resolve(this.Cr(r))}getAllMutationBatchesAffectingQuery(t,e){const r=e.path,s=r.length+1;let o=r;L.isDocumentKey(o)||(o=o.child(""));const l=new nt(new L(o),0);let u=new mt(q);return this.br.forEachWhile(h=>{const f=h.key.path;return!!r.isPrefixOf(f)&&(f.length===s&&(u=u.add(h.wr)),!0)},l),R.resolve(this.Cr(u))}Cr(t){const e=[];return t.forEach(r=>{const s=this.Dr(r);s!==null&&e.push(s)}),e}removeMutationBatch(t,e){tt(this.Fr(e.batchId,"removed")===0),this.mutationQueue.shift();let r=this.br;return R.forEach(e.mutations,s=>{const o=new nt(s.key,e.batchId);return r=r.delete(o),this.referenceDelegate.markPotentiallyOrphaned(t,s.key)}).next(()=>{this.br=r})}On(t){}containsKey(t,e){const r=new nt(e,0),s=this.br.firstAfterOrEqual(r);return R.resolve(e.isEqual(s&&s.key))}performConsistencyCheck(t){return this.mutationQueue.length,R.resolve()}Fr(t,e){return this.vr(t)}vr(t){return this.mutationQueue.length===0?0:t-this.mutationQueue[0].batchId}Dr(t){const e=this.vr(t);return e<0||e>=this.mutationQueue.length?null:this.mutationQueue[e]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pd{constructor(t){this.Mr=t,this.docs=function(){return new vt(L.comparator)}(),this.size=0}setIndexManager(t){this.indexManager=t}addEntry(t,e){const r=e.key,s=this.docs.get(r),o=s?s.size:0,l=this.Mr(e);return this.docs=this.docs.insert(r,{document:e.mutableCopy(),size:l}),this.size+=l-o,this.indexManager.addToCollectionParentIndex(t,r.path.popLast())}removeEntry(t){const e=this.docs.get(t);e&&(this.docs=this.docs.remove(t),this.size-=e.size)}getEntry(t,e){const r=this.docs.get(e);return R.resolve(r?r.document.mutableCopy():Tt.newInvalidDocument(e))}getEntries(t,e){let r=yr();return e.forEach(s=>{const o=this.docs.get(s);r=r.insert(s,o?o.document.mutableCopy():Tt.newInvalidDocument(s))}),R.resolve(r)}getDocumentsMatchingQuery(t,e,r,s){let o=yr();const l=e.path,u=new L(l.child("")),h=this.docs.getIteratorFrom(u);for(;h.hasNext();){const{key:f,value:{document:I}}=h.getNext();if(!l.isPrefixOf(f.path))break;f.path.length>l.length+1||ph(fh(I),r)<=0||(s.has(I.key)||zi(e,I))&&(o=o.insert(I.key,I.mutableCopy()))}return R.resolve(o)}getAllFromCollectionGroup(t,e,r,s){U()}Or(t,e){return R.forEach(this.docs,r=>e(r))}newChangeBuffer(t){return new Sd(this)}getSize(t){return R.resolve(this.size)}}class Sd extends vd{constructor(t){super(),this.cr=t}applyChanges(t){const e=[];return this.changes.forEach((r,s)=>{s.isValidDocument()?e.push(this.cr.addEntry(t,s)):this.cr.removeEntry(r)}),R.waitFor(e)}getFromCache(t,e){return this.cr.getEntry(t,e)}getAllFromCache(t,e){return this.cr.getEntries(t,e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bd{constructor(t){this.persistence=t,this.Nr=new Ge(e=>Ki(e),Wi),this.lastRemoteSnapshotVersion=Q.min(),this.highestTargetId=0,this.Lr=0,this.Br=new Ji,this.targetCount=0,this.kr=qe.Bn()}forEachTarget(t,e){return this.Nr.forEach((r,s)=>e(s)),R.resolve()}getLastRemoteSnapshotVersion(t){return R.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(t){return R.resolve(this.Lr)}allocateTargetId(t){return this.highestTargetId=this.kr.next(),R.resolve(this.highestTargetId)}setTargetsMetadata(t,e,r){return r&&(this.lastRemoteSnapshotVersion=r),e>this.Lr&&(this.Lr=e),R.resolve()}Kn(t){this.Nr.set(t.target,t);const e=t.targetId;e>this.highestTargetId&&(this.kr=new qe(e),this.highestTargetId=e),t.sequenceNumber>this.Lr&&(this.Lr=t.sequenceNumber)}addTargetData(t,e){return this.Kn(e),this.targetCount+=1,R.resolve()}updateTargetData(t,e){return this.Kn(e),R.resolve()}removeTargetData(t,e){return this.Nr.delete(e.target),this.Br.gr(e.targetId),this.targetCount-=1,R.resolve()}removeTargets(t,e,r){let s=0;const o=[];return this.Nr.forEach((l,u)=>{u.sequenceNumber<=e&&r.get(u.targetId)===null&&(this.Nr.delete(l),o.push(this.removeMatchingKeysForTargetId(t,u.targetId)),s++)}),R.waitFor(o).next(()=>s)}getTargetCount(t){return R.resolve(this.targetCount)}getTargetData(t,e){const r=this.Nr.get(e)||null;return R.resolve(r)}addMatchingKeys(t,e,r){return this.Br.Rr(e,r),R.resolve()}removeMatchingKeys(t,e,r){this.Br.mr(e,r);const s=this.persistence.referenceDelegate,o=[];return s&&e.forEach(l=>{o.push(s.markPotentiallyOrphaned(t,l))}),R.waitFor(o)}removeMatchingKeysForTargetId(t,e){return this.Br.gr(e),R.resolve()}getMatchingKeysForTargetId(t,e){const r=this.Br.yr(e);return R.resolve(r)}containsKey(t,e){return R.resolve(this.Br.containsKey(e))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Cd{constructor(t,e){this.qr={},this.overlays={},this.Qr=new Ma(0),this.Kr=!1,this.Kr=!0,this.$r=new Ad,this.referenceDelegate=t(this),this.Ur=new bd(this),this.indexManager=new _d,this.remoteDocumentCache=function(s){return new Pd(s)}(r=>this.referenceDelegate.Wr(r)),this.serializer=new md(e),this.Gr=new Td(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.Kr=!1,Promise.resolve()}get started(){return this.Kr}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(t){return this.indexManager}getDocumentOverlayCache(t){let e=this.overlays[t.toKey()];return e||(e=new wd,this.overlays[t.toKey()]=e),e}getMutationQueue(t,e){let r=this.qr[t.toKey()];return r||(r=new Rd(e,this.referenceDelegate),this.qr[t.toKey()]=r),r}getGlobalsCache(){return this.$r}getTargetCache(){return this.Ur}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Gr}runTransaction(t,e,r){N("MemoryPersistence","Starting transaction:",t);const s=new kd(this.Qr.next());return this.referenceDelegate.zr(),r(s).next(o=>this.referenceDelegate.jr(s).next(()=>o)).toPromise().then(o=>(s.raiseOnCommittedEvent(),o))}Hr(t,e){return R.or(Object.values(this.qr).map(r=>()=>r.containsKey(t,e)))}}class kd extends gh{constructor(t){super(),this.currentSequenceNumber=t}}class Yi{constructor(t){this.persistence=t,this.Jr=new Ji,this.Yr=null}static Zr(t){return new Yi(t)}get Xr(){if(this.Yr)return this.Yr;throw U()}addReference(t,e,r){return this.Jr.addReference(r,e),this.Xr.delete(r.toString()),R.resolve()}removeReference(t,e,r){return this.Jr.removeReference(r,e),this.Xr.add(r.toString()),R.resolve()}markPotentiallyOrphaned(t,e){return this.Xr.add(e.toString()),R.resolve()}removeTarget(t,e){this.Jr.gr(e.targetId).forEach(s=>this.Xr.add(s.toString()));const r=this.persistence.getTargetCache();return r.getMatchingKeysForTargetId(t,e.targetId).next(s=>{s.forEach(o=>this.Xr.add(o.toString()))}).next(()=>r.removeTargetData(t,e))}zr(){this.Yr=new Set}jr(t){const e=this.persistence.getRemoteDocumentCache().newChangeBuffer();return R.forEach(this.Xr,r=>{const s=L.fromPath(r);return this.ei(t,s).next(o=>{o||e.removeEntry(s,Q.min())})}).next(()=>(this.Yr=null,e.apply(t)))}updateLimboDocument(t,e){return this.ei(t,e).next(r=>{r?this.Xr.delete(e.toString()):this.Xr.add(e.toString())})}Wr(t){return 0}ei(t,e){return R.or([()=>R.resolve(this.Jr.containsKey(e)),()=>this.persistence.getTargetCache().containsKey(t,e),()=>this.persistence.Hr(t,e)])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zi{constructor(t,e,r,s){this.targetId=t,this.fromCache=e,this.$i=r,this.Ui=s}static Wi(t,e){let r=pt(),s=pt();for(const o of e.docChanges)switch(o.type){case 0:r=r.add(o.doc.key);break;case 1:s=s.add(o.doc.key)}return new Zi(t,e.fromCache,r,s)}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vd{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(t){this._documentReadCount+=t}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Nd{constructor(){this.Gi=!1,this.zi=!1,this.ji=100,this.Hi=function(){return Kc()?8:_h(Rt())>0?6:4}()}initialize(t,e){this.Ji=t,this.indexManager=e,this.Gi=!0}getDocumentsMatchingQuery(t,e,r,s){const o={result:null};return this.Yi(t,e).next(l=>{o.result=l}).next(()=>{if(!o.result)return this.Zi(t,e,s,r).next(l=>{o.result=l})}).next(()=>{if(o.result)return;const l=new Vd;return this.Xi(t,e,l).next(u=>{if(o.result=u,this.zi)return this.es(t,e,l,u.size)})}).next(()=>o.result)}es(t,e,r,s){return r.documentReadCount<this.ji?(dn()<=F.DEBUG&&N("QueryEngine","SDK will not create cache indexes for query:",fn(e),"since it only creates cache indexes for collection contains","more than or equal to",this.ji,"documents"),R.resolve()):(dn()<=F.DEBUG&&N("QueryEngine","Query:",fn(e),"scans",r.documentReadCount,"local documents and returns",s,"documents as results."),r.documentReadCount>this.Hi*s?(dn()<=F.DEBUG&&N("QueryEngine","The SDK decides to create cache indexes for query:",fn(e),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(t,me(e))):R.resolve())}Yi(t,e){if(Do(e))return R.resolve(null);let r=me(e);return this.indexManager.getIndexType(t,r).next(s=>s===0?null:(e.limit!==null&&s===1&&(e=Pi(e,null,"F"),r=me(e)),this.indexManager.getDocumentsMatchingTarget(t,r).next(o=>{const l=pt(...o);return this.Ji.getDocuments(t,l).next(u=>this.indexManager.getMinOffset(t,r).next(h=>{const f=this.ts(e,u);return this.ns(e,f,l,h.readTime)?this.Yi(t,Pi(e,null,"F")):this.rs(t,f,e,h)}))})))}Zi(t,e,r,s){return Do(e)||s.isEqual(Q.min())?R.resolve(null):this.Ji.getDocuments(t,r).next(o=>{const l=this.ts(e,o);return this.ns(e,l,r,s)?R.resolve(null):(dn()<=F.DEBUG&&N("QueryEngine","Re-using previous result from %s to execute query: %s",s.toString(),fn(e)),this.rs(t,l,e,dh(s,-1)).next(u=>u))})}ts(t,e){let r=new mt(Fh(t));return e.forEach((s,o)=>{zi(t,o)&&(r=r.add(o))}),r}ns(t,e,r,s){if(t.limit===null)return!1;if(r.size!==e.size)return!0;const o=t.limitType==="F"?e.last():e.first();return!!o&&(o.hasPendingWrites||o.version.compareTo(s)>0)}Xi(t,e,r){return dn()<=F.DEBUG&&N("QueryEngine","Using full collection scan to execute query:",fn(e)),this.Ji.getDocumentsMatchingQuery(t,e,ne.min(),r)}rs(t,e,r,s){return this.Ji.getDocumentsMatchingQuery(t,r,s).next(o=>(e.forEach(l=>{o=o.insert(l.key,l)}),o))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Dd{constructor(t,e,r,s){this.persistence=t,this.ss=e,this.serializer=s,this.os=new vt(q),this._s=new Ge(o=>Ki(o),Wi),this.us=new Map,this.cs=t.getRemoteDocumentCache(),this.Ur=t.getTargetCache(),this.Gr=t.getBundleCache(),this.ls(r)}ls(t){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(t),this.indexManager=this.persistence.getIndexManager(t),this.mutationQueue=this.persistence.getMutationQueue(t,this.indexManager),this.localDocuments=new Id(this.cs,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.cs.setIndexManager(this.indexManager),this.ss.initialize(this.localDocuments,this.indexManager)}collectGarbage(t){return this.persistence.runTransaction("Collect garbage","readwrite-primary",e=>t.collect(e,this.os))}}function Od(n,t,e,r){return new Dd(n,t,e,r)}async function ol(n,t){const e=G(n);return await e.persistence.runTransaction("Handle user change","readonly",r=>{let s;return e.mutationQueue.getAllMutationBatches(r).next(o=>(s=o,e.ls(t),e.mutationQueue.getAllMutationBatches(r))).next(o=>{const l=[],u=[];let h=pt();for(const f of s){l.push(f.batchId);for(const I of f.mutations)h=h.add(I.key)}for(const f of o){u.push(f.batchId);for(const I of f.mutations)h=h.add(I.key)}return e.localDocuments.getDocuments(r,h).next(f=>({hs:f,removedBatchIds:l,addedBatchIds:u}))})})}function Md(n,t){const e=G(n);return e.persistence.runTransaction("Acknowledge batch","readwrite-primary",r=>{const s=t.batch.keys(),o=e.cs.newChangeBuffer({trackRemovals:!0});return function(u,h,f,I){const A=f.batch,P=A.keys();let C=R.resolve();return P.forEach(k=>{C=C.next(()=>I.getEntry(h,k)).next(O=>{const D=f.docVersions.get(k);tt(D!==null),O.version.compareTo(D)<0&&(A.applyToRemoteDocument(O,f),O.isValidDocument()&&(O.setReadTime(f.commitVersion),I.addEntry(O)))})}),C.next(()=>u.mutationQueue.removeMutationBatch(h,A))}(e,r,t,o).next(()=>o.apply(r)).next(()=>e.mutationQueue.performConsistencyCheck(r)).next(()=>e.documentOverlayCache.removeOverlaysForBatchId(r,s,t.batch.batchId)).next(()=>e.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(r,function(u){let h=pt();for(let f=0;f<u.mutationResults.length;++f)u.mutationResults[f].transformResults.length>0&&(h=h.add(u.batch.mutations[f].key));return h}(t))).next(()=>e.localDocuments.getDocuments(r,s))})}function xd(n){const t=G(n);return t.persistence.runTransaction("Get last remote snapshot version","readonly",e=>t.Ur.getLastRemoteSnapshotVersion(e))}function Ld(n,t){const e=G(n);return e.persistence.runTransaction("Get next mutation batch","readonly",r=>(t===void 0&&(t=-1),e.mutationQueue.getNextMutationBatchAfterBatchId(r,t)))}class Uo{constructor(){this.activeTargetIds=Hh()}fs(t){this.activeTargetIds=this.activeTargetIds.add(t)}gs(t){this.activeTargetIds=this.activeTargetIds.delete(t)}Vs(){const t={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(t)}}class Fd{constructor(){this.so=new Uo,this.oo={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(t){}updateMutationState(t,e,r){}addLocalQueryTarget(t){return this.so.fs(t),this.oo[t]||"not-current"}updateQueryState(t,e,r){this.oo[t]=e}removeLocalQueryTarget(t){this.so.gs(t)}isLocalQueryTarget(t){return this.so.activeTargetIds.has(t)}clearQueryState(t){delete this.oo[t]}getAllActiveQueryTargets(){return this.so.activeTargetIds}isActiveQueryTarget(t){return this.so.activeTargetIds.has(t)}start(){return this.so=new Uo,Promise.resolve()}handleUserChange(t,e,r){}setOnlineState(t){}shutdown(){}writeSequenceNumber(t){}notifyBundleLoaded(t){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ud{_o(t){}shutdown(){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bo{constructor(){this.ao=()=>this.uo(),this.co=()=>this.lo(),this.ho=[],this.Po()}_o(t){this.ho.push(t)}shutdown(){window.removeEventListener("online",this.ao),window.removeEventListener("offline",this.co)}Po(){window.addEventListener("online",this.ao),window.addEventListener("offline",this.co)}uo(){N("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const t of this.ho)t(0)}lo(){N("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const t of this.ho)t(1)}static D(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let ar=null;function hi(){return ar===null?ar=function(){return 268435456+Math.round(2147483648*Math.random())}():ar++,"0x"+ar.toString(16)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Bd={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jd{constructor(t){this.Io=t.Io,this.To=t.To}Eo(t){this.Ao=t}Ro(t){this.Vo=t}mo(t){this.fo=t}onMessage(t){this.po=t}close(){this.To()}send(t){this.Io(t)}yo(){this.Ao()}wo(){this.Vo()}So(t){this.fo(t)}bo(t){this.po(t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ft="WebChannelConnection";class $d extends class{constructor(e){this.databaseInfo=e,this.databaseId=e.databaseId;const r=e.ssl?"https":"http",s=encodeURIComponent(this.databaseId.projectId),o=encodeURIComponent(this.databaseId.database);this.Do=r+"://"+e.host,this.vo=`projects/${s}/databases/${o}`,this.Co=this.databaseId.database==="(default)"?`project_id=${s}`:`project_id=${s}&database_id=${o}`}get Fo(){return!1}Mo(e,r,s,o,l){const u=hi(),h=this.xo(e,r.toUriEncodedString());N("RestConnection",`Sending RPC '${e}' ${u}:`,h,s);const f={"google-cloud-resource-prefix":this.vo,"x-goog-request-params":this.Co};return this.Oo(f,o,l),this.No(e,h,f,s).then(I=>(N("RestConnection",`Received RPC '${e}' ${u}: `,I),I),I=>{throw Ti("RestConnection",`RPC '${e}' ${u} failed with error: `,I,"url: ",h,"request:",s),I})}Lo(e,r,s,o,l,u){return this.Mo(e,r,s,o,l)}Oo(e,r,s){e["X-Goog-Api-Client"]=function(){return"gl-js/ fire/"+He}(),e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),r&&r.headers.forEach((o,l)=>e[l]=o),s&&s.headers.forEach((o,l)=>e[l]=o)}xo(e,r){const s=Bd[e];return`${this.Do}/v1/${r}:${s}`}terminate(){}}{constructor(t){super(t),this.forceLongPolling=t.forceLongPolling,this.autoDetectLongPolling=t.autoDetectLongPolling,this.useFetchStreams=t.useFetchStreams,this.longPollingOptions=t.longPollingOptions}No(t,e,r,s){const o=hi();return new Promise((l,u)=>{const h=new Sa;h.setWithCredentials(!0),h.listenOnce(Ca.COMPLETE,()=>{try{switch(h.getLastErrorCode()){case cr.NO_ERROR:const I=h.getResponseJson();N(ft,`XHR for RPC '${t}' ${o} received:`,JSON.stringify(I)),l(I);break;case cr.TIMEOUT:N(ft,`RPC '${t}' ${o} timed out`),u(new M(S.DEADLINE_EXCEEDED,"Request time out"));break;case cr.HTTP_ERROR:const A=h.getStatus();if(N(ft,`RPC '${t}' ${o} failed with status:`,A,"response text:",h.getResponseText()),A>0){let P=h.getResponseJson();Array.isArray(P)&&(P=P[0]);const C=P==null?void 0:P.error;if(C&&C.status&&C.message){const k=function(D){const K=D.toLowerCase().replace(/_/g,"-");return Object.values(S).indexOf(K)>=0?K:S.UNKNOWN}(C.status);u(new M(k,C.message))}else u(new M(S.UNKNOWN,"Server responded with status "+h.getStatus()))}else u(new M(S.UNAVAILABLE,"Connection failed."));break;default:U()}}finally{N(ft,`RPC '${t}' ${o} completed.`)}});const f=JSON.stringify(s);N(ft,`RPC '${t}' ${o} sending request:`,s),h.send(e,"POST",f,r,15)})}Bo(t,e,r){const s=hi(),o=[this.Do,"/","google.firestore.v1.Firestore","/",t,"/channel"],l=Na(),u=Va(),h={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},f=this.longPollingOptions.timeoutSeconds;f!==void 0&&(h.longPollingTimeout=Math.round(1e3*f)),this.useFetchStreams&&(h.xmlHttpFactory=new ba({})),this.Oo(h.initMessageHeaders,e,r),h.encodeInitMessageHeaders=!0;const I=o.join("");N(ft,`Creating RPC '${t}' stream ${s}: ${I}`,h);const A=l.createWebChannel(I,h);let P=!1,C=!1;const k=new jd({Io:D=>{C?N(ft,`Not sending because RPC '${t}' stream ${s} is closed:`,D):(P||(N(ft,`Opening RPC '${t}' stream ${s} transport.`),A.open(),P=!0),N(ft,`RPC '${t}' stream ${s} sending:`,D),A.send(D))},To:()=>A.close()}),O=(D,K,H)=>{D.listen(K,W=>{try{H(W)}catch(Z){setTimeout(()=>{throw Z},0)}})};return O(A,gn.EventType.OPEN,()=>{C||(N(ft,`RPC '${t}' stream ${s} transport opened.`),k.yo())}),O(A,gn.EventType.CLOSE,()=>{C||(C=!0,N(ft,`RPC '${t}' stream ${s} transport closed`),k.So())}),O(A,gn.EventType.ERROR,D=>{C||(C=!0,Ti(ft,`RPC '${t}' stream ${s} transport errored:`,D),k.So(new M(S.UNAVAILABLE,"The operation could not be completed")))}),O(A,gn.EventType.MESSAGE,D=>{var K;if(!C){const H=D.data[0];tt(!!H);const W=H,Z=W.error||((K=W[0])===null||K===void 0?void 0:K.error);if(Z){N(ft,`RPC '${t}' stream ${s} received error:`,Z);const St=Z.status;let et=function(g){const _=Y[g];if(_!==void 0)return nd(_)}(St),v=Z.message;et===void 0&&(et=S.INTERNAL,v="Unknown error status: "+St+" with message "+Z.message),C=!0,k.So(new M(et,v)),A.close()}else N(ft,`RPC '${t}' stream ${s} received:`,H),k.bo(H)}}),O(u,ka.STAT_EVENT,D=>{D.stat===Ii.PROXY?N(ft,`RPC '${t}' stream ${s} detected buffering proxy`):D.stat===Ii.NOPROXY&&N(ft,`RPC '${t}' stream ${s} detected no buffering proxy`)}),setTimeout(()=>{k.wo()},0),k}}function di(){return typeof document<"u"?document:null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Vr(n){return new rd(n,!0)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class al{constructor(t,e,r=1e3,s=1.5,o=6e4){this.ui=t,this.timerId=e,this.ko=r,this.qo=s,this.Qo=o,this.Ko=0,this.$o=null,this.Uo=Date.now(),this.reset()}reset(){this.Ko=0}Wo(){this.Ko=this.Qo}Go(t){this.cancel();const e=Math.floor(this.Ko+this.zo()),r=Math.max(0,Date.now()-this.Uo),s=Math.max(0,e-r);s>0&&N("ExponentialBackoff",`Backing off for ${s} ms (base delay: ${this.Ko} ms, delay with jitter: ${e} ms, last attempt: ${r} ms ago)`),this.$o=this.ui.enqueueAfterDelay(this.timerId,s,()=>(this.Uo=Date.now(),t())),this.Ko*=this.qo,this.Ko<this.ko&&(this.Ko=this.ko),this.Ko>this.Qo&&(this.Ko=this.Qo)}jo(){this.$o!==null&&(this.$o.skipDelay(),this.$o=null)}cancel(){this.$o!==null&&(this.$o.cancel(),this.$o=null)}zo(){return(Math.random()-.5)*this.Ko}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qd{constructor(t,e,r,s,o,l,u,h){this.ui=t,this.Ho=r,this.Jo=s,this.connection=o,this.authCredentialsProvider=l,this.appCheckCredentialsProvider=u,this.listener=h,this.state=0,this.Yo=0,this.Zo=null,this.Xo=null,this.stream=null,this.e_=0,this.t_=new al(t,e)}n_(){return this.state===1||this.state===5||this.r_()}r_(){return this.state===2||this.state===3}start(){this.e_=0,this.state!==4?this.auth():this.i_()}async stop(){this.n_()&&await this.close(0)}s_(){this.state=0,this.t_.reset()}o_(){this.r_()&&this.Zo===null&&(this.Zo=this.ui.enqueueAfterDelay(this.Ho,6e4,()=>this.__()))}a_(t){this.u_(),this.stream.send(t)}async __(){if(this.r_())return this.close(0)}u_(){this.Zo&&(this.Zo.cancel(),this.Zo=null)}c_(){this.Xo&&(this.Xo.cancel(),this.Xo=null)}async close(t,e){this.u_(),this.c_(),this.t_.cancel(),this.Yo++,t!==4?this.t_.reset():e&&e.code===S.RESOURCE_EXHAUSTED?(ye(e.toString()),ye("Using maximum backoff delay to prevent overloading the backend."),this.t_.Wo()):e&&e.code===S.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.l_(),this.stream.close(),this.stream=null),this.state=t,await this.listener.mo(e)}l_(){}auth(){this.state=1;const t=this.h_(this.Yo),e=this.Yo;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([r,s])=>{this.Yo===e&&this.P_(r,s)},r=>{t(()=>{const s=new M(S.UNKNOWN,"Fetching auth token failed: "+r.message);return this.I_(s)})})}P_(t,e){const r=this.h_(this.Yo);this.stream=this.T_(t,e),this.stream.Eo(()=>{r(()=>this.listener.Eo())}),this.stream.Ro(()=>{r(()=>(this.state=2,this.Xo=this.ui.enqueueAfterDelay(this.Jo,1e4,()=>(this.r_()&&(this.state=3),Promise.resolve())),this.listener.Ro()))}),this.stream.mo(s=>{r(()=>this.I_(s))}),this.stream.onMessage(s=>{r(()=>++this.e_==1?this.E_(s):this.onNext(s))})}i_(){this.state=5,this.t_.Go(async()=>{this.state=0,this.start()})}I_(t){return N("PersistentStream",`close with error: ${t}`),this.stream=null,this.close(4,t)}h_(t){return e=>{this.ui.enqueueAndForget(()=>this.Yo===t?e():(N("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class Hd extends qd{constructor(t,e,r,s,o,l){super(t,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",e,r,s,l),this.serializer=o}get V_(){return this.e_>0}start(){this.lastStreamToken=void 0,super.start()}l_(){this.V_&&this.m_([])}T_(t,e){return this.connection.Bo("Write",t,e)}E_(t){return tt(!!t.streamToken),this.lastStreamToken=t.streamToken,tt(!t.writeResults||t.writeResults.length===0),this.listener.f_()}onNext(t){tt(!!t.streamToken),this.lastStreamToken=t.streamToken,this.t_.reset();const e=hd(t.writeResults,t.commitTime),r=Ve(t.commitTime);return this.listener.g_(r,e)}p_(){const t={};t.database=ld(this.serializer),this.a_(t)}m_(t){const e={streamToken:this.lastStreamToken,writes:t.map(r=>ud(this.serializer,r))};this.a_(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gd extends class{}{constructor(t,e,r,s){super(),this.authCredentials=t,this.appCheckCredentials=e,this.connection=r,this.serializer=s,this.y_=!1}w_(){if(this.y_)throw new M(S.FAILED_PRECONDITION,"The client has already been terminated.")}Mo(t,e,r,s){return this.w_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([o,l])=>this.connection.Mo(t,bi(e,r),s,o,l)).catch(o=>{throw o.name==="FirebaseError"?(o.code===S.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),o):new M(S.UNKNOWN,o.toString())})}Lo(t,e,r,s,o){return this.w_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([l,u])=>this.connection.Lo(t,bi(e,r),s,l,u,o)).catch(l=>{throw l.name==="FirebaseError"?(l.code===S.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),l):new M(S.UNKNOWN,l.toString())})}terminate(){this.y_=!0,this.connection.terminate()}}class Kd{constructor(t,e){this.asyncQueue=t,this.onlineStateHandler=e,this.state="Unknown",this.S_=0,this.b_=null,this.D_=!0}v_(){this.S_===0&&(this.C_("Unknown"),this.b_=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.b_=null,this.F_("Backend didn't respond within 10 seconds."),this.C_("Offline"),Promise.resolve())))}M_(t){this.state==="Online"?this.C_("Unknown"):(this.S_++,this.S_>=1&&(this.x_(),this.F_(`Connection failed 1 times. Most recent error: ${t.toString()}`),this.C_("Offline")))}set(t){this.x_(),this.S_=0,t==="Online"&&(this.D_=!1),this.C_(t)}C_(t){t!==this.state&&(this.state=t,this.onlineStateHandler(t))}F_(t){const e=`Could not reach Cloud Firestore backend. ${t}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.D_?(ye(e),this.D_=!1):N("OnlineStateTracker",e)}x_(){this.b_!==null&&(this.b_.cancel(),this.b_=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wd{constructor(t,e,r,s,o){this.localStore=t,this.datastore=e,this.asyncQueue=r,this.remoteSyncer={},this.O_=[],this.N_=new Map,this.L_=new Set,this.B_=[],this.k_=o,this.k_._o(l=>{r.enqueueAndForget(async()=>{xn(this)&&(N("RemoteStore","Restarting streams for network reachability change."),await async function(h){const f=G(h);f.L_.add(4),await Mn(f),f.q_.set("Unknown"),f.L_.delete(4),await Nr(f)}(this))})}),this.q_=new Kd(r,s)}}async function Nr(n){if(xn(n))for(const t of n.B_)await t(!0)}async function Mn(n){for(const t of n.B_)await t(!1)}function xn(n){return G(n).L_.size===0}async function ll(n,t,e){if(!Sr(t))throw t;n.L_.add(1),await Mn(n),n.q_.set("Offline"),e||(e=()=>xd(n.localStore)),n.asyncQueue.enqueueRetryable(async()=>{N("RemoteStore","Retrying IndexedDB access"),await e(),n.L_.delete(1),await Nr(n)})}function cl(n,t){return t().catch(e=>ll(n,e,t))}async function Dr(n){const t=G(n),e=ie(t);let r=t.O_.length>0?t.O_[t.O_.length-1].batchId:-1;for(;zd(t);)try{const s=await Ld(t.localStore,r);if(s===null){t.O_.length===0&&e.o_();break}r=s.batchId,Qd(t,s)}catch(s){await ll(t,s)}ul(t)&&hl(t)}function zd(n){return xn(n)&&n.O_.length<10}function Qd(n,t){n.O_.push(t);const e=ie(n);e.r_()&&e.V_&&e.m_(t.mutations)}function ul(n){return xn(n)&&!ie(n).n_()&&n.O_.length>0}function hl(n){ie(n).start()}async function Xd(n){ie(n).p_()}async function Jd(n){const t=ie(n);for(const e of n.O_)t.m_(e.mutations)}async function Yd(n,t,e){const r=n.O_.shift(),s=Xi.from(r,t,e);await cl(n,()=>n.remoteSyncer.applySuccessfulWrite(s)),await Dr(n)}async function Zd(n,t){t&&ie(n).V_&&await async function(r,s){if(function(l){return ed(l)&&l!==S.ABORTED}(s.code)){const o=r.O_.shift();ie(r).s_(),await cl(r,()=>r.remoteSyncer.rejectFailedWrite(o.batchId,s)),await Dr(r)}}(n,t),ul(n)&&hl(n)}async function jo(n,t){const e=G(n);e.asyncQueue.verifyOperationInProgress(),N("RemoteStore","RemoteStore received new credentials");const r=xn(e);e.L_.add(3),await Mn(e),r&&e.q_.set("Unknown"),await e.remoteSyncer.handleCredentialChange(t),e.L_.delete(3),await Nr(e)}async function tf(n,t){const e=G(n);t?(e.L_.delete(2),await Nr(e)):t||(e.L_.add(2),await Mn(e),e.q_.set("Unknown"))}function ie(n){return n.U_||(n.U_=function(e,r,s){const o=G(e);return o.w_(),new Hd(r,o.connection,o.authCredentials,o.appCheckCredentials,o.serializer,s)}(n.datastore,n.asyncQueue,{Eo:()=>Promise.resolve(),Ro:Xd.bind(null,n),mo:Zd.bind(null,n),f_:Jd.bind(null,n),g_:Yd.bind(null,n)}),n.B_.push(async t=>{t?(n.U_.s_(),await Dr(n)):(await n.U_.stop(),n.O_.length>0&&(N("RemoteStore",`Stopping write stream with ${n.O_.length} pending writes`),n.O_=[]))})),n.U_}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ts{constructor(t,e,r,s,o){this.asyncQueue=t,this.timerId=e,this.targetTimeMs=r,this.op=s,this.removalCallback=o,this.deferred=new pe,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(l=>{})}get promise(){return this.deferred.promise}static createAndSchedule(t,e,r,s,o){const l=Date.now()+r,u=new ts(t,e,l,s,o);return u.start(r),u}start(t){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),t)}skipDelay(){return this.handleDelayElapsed()}cancel(t){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new M(S.CANCELLED,"Operation cancelled"+(t?": "+t:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(t=>this.deferred.resolve(t))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function dl(n,t){if(ye("AsyncQueue",`${t}: ${n}`),Sr(n))return new M(S.UNAVAILABLE,`${t}: ${n}`);throw n}class ef{constructor(){this.queries=$o(),this.onlineState="Unknown",this.Y_=new Set}terminate(){(function(e,r){const s=G(e),o=s.queries;s.queries=$o(),o.forEach((l,u)=>{for(const h of u.j_)h.onError(r)})})(this,new M(S.ABORTED,"Firestore shutting down"))}}function $o(){return new Ge(n=>Ka(n),Ga)}function nf(n){n.Y_.forEach(t=>{t.next()})}var qo,Ho;(Ho=qo||(qo={})).ea="default",Ho.Cache="cache";class rf{constructor(t,e,r,s,o,l){this.localStore=t,this.remoteStore=e,this.eventManager=r,this.sharedClientState=s,this.currentUser=o,this.maxConcurrentLimboResolutions=l,this.Ca={},this.Fa=new Ge(u=>Ka(u),Ga),this.Ma=new Map,this.xa=new Set,this.Oa=new vt(L.comparator),this.Na=new Map,this.La=new Ji,this.Ba={},this.ka=new Map,this.qa=qe.kn(),this.onlineState="Unknown",this.Qa=void 0}get isPrimaryClient(){return this.Qa===!0}}async function sf(n,t,e){const r=cf(n);try{const s=await function(l,u){const h=G(l),f=it.now(),I=u.reduce((C,k)=>C.add(k.key),pt());let A,P;return h.persistence.runTransaction("Locally write mutations","readwrite",C=>{let k=yr(),O=pt();return h.cs.getEntries(C,I).next(D=>{k=D,k.forEach((K,H)=>{H.isValidDocument()||(O=O.add(K))})}).next(()=>h.localDocuments.getOverlayedDocuments(C,k)).next(D=>{A=D;const K=[];for(const H of u){const W=Jh(H,A.get(H.key).overlayedDocument);W!=null&&K.push(new Ae(H.key,W,Fa(W.value.mapValue),jt.exists(!0)))}return h.mutationQueue.addMutationBatch(C,f,K,u)}).next(D=>{P=D;const K=D.applyToLocalDocumentSet(A,O);return h.documentOverlayCache.saveOverlays(C,D.batchId,K)})}).then(()=>({batchId:P.batchId,changes:za(A)}))}(r.localStore,t);r.sharedClientState.addPendingMutation(s.batchId),function(l,u,h){let f=l.Ba[l.currentUser.toKey()];f||(f=new vt(q)),f=f.insert(u,h),l.Ba[l.currentUser.toKey()]=f}(r,s.batchId,e),await Or(r,s.changes),await Dr(r.remoteStore)}catch(s){const o=dl(s,"Failed to persist write");e.reject(o)}}function Go(n,t,e){const r=G(n);if(r.isPrimaryClient&&e===0||!r.isPrimaryClient&&e===1){const s=[];r.Fa.forEach((o,l)=>{const u=l.view.Z_(t);u.snapshot&&s.push(u.snapshot)}),function(l,u){const h=G(l);h.onlineState=u;let f=!1;h.queries.forEach((I,A)=>{for(const P of A.j_)P.Z_(u)&&(f=!0)}),f&&nf(h)}(r.eventManager,t),s.length&&r.Ca.d_(s),r.onlineState=t,r.isPrimaryClient&&r.sharedClientState.setOnlineState(t)}}async function of(n,t){const e=G(n),r=t.batch.batchId;try{const s=await Md(e.localStore,t);pl(e,r,null),fl(e,r),e.sharedClientState.updateMutationState(r,"acknowledged"),await Or(e,s)}catch(s){await Oa(s)}}async function af(n,t,e){const r=G(n);try{const s=await function(l,u){const h=G(l);return h.persistence.runTransaction("Reject batch","readwrite-primary",f=>{let I;return h.mutationQueue.lookupMutationBatch(f,u).next(A=>(tt(A!==null),I=A.keys(),h.mutationQueue.removeMutationBatch(f,A))).next(()=>h.mutationQueue.performConsistencyCheck(f)).next(()=>h.documentOverlayCache.removeOverlaysForBatchId(f,I,u)).next(()=>h.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(f,I)).next(()=>h.localDocuments.getDocuments(f,I))})}(r.localStore,t);pl(r,t,e),fl(r,t),r.sharedClientState.updateMutationState(t,"rejected",e),await Or(r,s)}catch(s){await Oa(s)}}function fl(n,t){(n.ka.get(t)||[]).forEach(e=>{e.resolve()}),n.ka.delete(t)}function pl(n,t,e){const r=G(n);let s=r.Ba[r.currentUser.toKey()];if(s){const o=s.get(t);o&&(e?o.reject(e):o.resolve(),s=s.remove(t)),r.Ba[r.currentUser.toKey()]=s}}async function Or(n,t,e){const r=G(n),s=[],o=[],l=[];r.Fa.isEmpty()||(r.Fa.forEach((u,h)=>{l.push(r.Ka(h,t,e).then(f=>{var I;if((f||e)&&r.isPrimaryClient){const A=f?!f.fromCache:(I=void 0)===null||I===void 0?void 0:I.current;r.sharedClientState.updateQueryState(h.targetId,A?"current":"not-current")}if(f){s.push(f);const A=Zi.Wi(h.targetId,f);o.push(A)}}))}),await Promise.all(l),r.Ca.d_(s),await async function(h,f){const I=G(h);try{await I.persistence.runTransaction("notifyLocalViewChanges","readwrite",A=>R.forEach(f,P=>R.forEach(P.$i,C=>I.persistence.referenceDelegate.addReference(A,P.targetId,C)).next(()=>R.forEach(P.Ui,C=>I.persistence.referenceDelegate.removeReference(A,P.targetId,C)))))}catch(A){if(!Sr(A))throw A;N("LocalStore","Failed to update sequence numbers: "+A)}for(const A of f){const P=A.targetId;if(!A.fromCache){const C=I.os.get(P),k=C.snapshotVersion,O=C.withLastLimboFreeSnapshotVersion(k);I.os=I.os.insert(P,O)}}}(r.localStore,o))}async function lf(n,t){const e=G(n);if(!e.currentUser.isEqual(t)){N("SyncEngine","User change. New user:",t.toKey());const r=await ol(e.localStore,t);e.currentUser=t,function(o,l){o.ka.forEach(u=>{u.forEach(h=>{h.reject(new M(S.CANCELLED,l))})}),o.ka.clear()}(e,"'waitForPendingWrites' promise is rejected due to a user change."),e.sharedClientState.handleUserChange(t,r.removedBatchIds,r.addedBatchIds),await Or(e,r.hs)}}function cf(n){const t=G(n);return t.remoteStore.remoteSyncer.applySuccessfulWrite=of.bind(null,t),t.remoteStore.remoteSyncer.rejectFailedWrite=af.bind(null,t),t}class Ko{constructor(){this.synchronizeTabs=!1}async initialize(t){this.serializer=Vr(t.databaseInfo.databaseId),this.sharedClientState=this.createSharedClientState(t),this.persistence=this.createPersistence(t),await this.persistence.start(),this.localStore=this.createLocalStore(t),this.gcScheduler=this.createGarbageCollectionScheduler(t,this.localStore),this.indexBackfillerScheduler=this.createIndexBackfillerScheduler(t,this.localStore)}createGarbageCollectionScheduler(t,e){return null}createIndexBackfillerScheduler(t,e){return null}createLocalStore(t){return Od(this.persistence,new Nd,t.initialUser,this.serializer)}createPersistence(t){return new Cd(Yi.Zr,this.serializer)}createSharedClientState(t){return new Fd}async terminate(){var t,e;(t=this.gcScheduler)===null||t===void 0||t.stop(),(e=this.indexBackfillerScheduler)===null||e===void 0||e.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}class uf{async initialize(t,e){this.localStore||(this.localStore=t.localStore,this.sharedClientState=t.sharedClientState,this.datastore=this.createDatastore(e),this.remoteStore=this.createRemoteStore(e),this.eventManager=this.createEventManager(e),this.syncEngine=this.createSyncEngine(e,!t.synchronizeTabs),this.sharedClientState.onlineStateHandler=r=>Go(this.syncEngine,r,1),this.remoteStore.remoteSyncer.handleCredentialChange=lf.bind(null,this.syncEngine),await tf(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(t){return function(){return new ef}()}createDatastore(t){const e=Vr(t.databaseInfo.databaseId),r=function(o){return new $d(o)}(t.databaseInfo);return function(o,l,u,h){return new Gd(o,l,u,h)}(t.authCredentials,t.appCheckCredentials,r,e)}createRemoteStore(t){return function(r,s,o,l,u){return new Wd(r,s,o,l,u)}(this.localStore,this.datastore,t.asyncQueue,e=>Go(this.syncEngine,e,0),function(){return Bo.D()?new Bo:new Ud}())}createSyncEngine(t,e){return function(s,o,l,u,h,f,I){const A=new rf(s,o,l,u,h,f);return I&&(A.Qa=!0),A}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,t.initialUser,t.maxConcurrentLimboResolutions,e)}async terminate(){var t,e;await async function(s){const o=G(s);N("RemoteStore","RemoteStore shutting down."),o.L_.add(5),await Mn(o),o.k_.shutdown(),o.q_.set("Unknown")}(this.remoteStore),(t=this.datastore)===null||t===void 0||t.terminate(),(e=this.eventManager)===null||e===void 0||e.terminate()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hf{constructor(t,e,r,s){this.authCredentials=t,this.appCheckCredentials=e,this.asyncQueue=r,this.databaseInfo=s,this.user=yt.UNAUTHENTICATED,this.clientId=Da.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this.authCredentials.start(r,async o=>{N("FirestoreClient","Received user=",o.uid),await this.authCredentialListener(o),this.user=o}),this.appCheckCredentials.start(r,o=>(N("FirestoreClient","Received new app check token=",o),this.appCheckCredentialListener(o,this.user)))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(t){this.authCredentialListener=t}setAppCheckTokenChangeListener(t){this.appCheckCredentialListener=t}verifyNotTerminated(){if(this.asyncQueue.isShuttingDown)throw new M(S.FAILED_PRECONDITION,"The client has already been terminated.")}terminate(){this.asyncQueue.enterRestrictedMode();const t=new pe;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),t.resolve()}catch(e){const r=dl(e,"Failed to shutdown persistence");t.reject(r)}}),t.promise}}async function fi(n,t){n.asyncQueue.verifyOperationInProgress(),N("FirestoreClient","Initializing OfflineComponentProvider");const e=n.configuration;await t.initialize(e);let r=e.initialUser;n.setCredentialChangeListener(async s=>{r.isEqual(s)||(await ol(t.localStore,s),r=s)}),t.persistence.setDatabaseDeletedListener(()=>n.terminate()),n._offlineComponents=t}async function Wo(n,t){n.asyncQueue.verifyOperationInProgress();const e=await ff(n);N("FirestoreClient","Initializing OnlineComponentProvider"),await t.initialize(e,n.configuration),n.setCredentialChangeListener(r=>jo(t.remoteStore,r)),n.setAppCheckTokenChangeListener((r,s)=>jo(t.remoteStore,s)),n._onlineComponents=t}function df(n){return n.name==="FirebaseError"?n.code===S.FAILED_PRECONDITION||n.code===S.UNIMPLEMENTED:!(typeof DOMException<"u"&&n instanceof DOMException)||n.code===22||n.code===20||n.code===11}async function ff(n){if(!n._offlineComponents)if(n._uninitializedComponentsProvider){N("FirestoreClient","Using user provided OfflineComponentProvider");try{await fi(n,n._uninitializedComponentsProvider._offline)}catch(t){const e=t;if(!df(e))throw e;Ti("Error using user provided cache. Falling back to memory cache: "+e),await fi(n,new Ko)}}else N("FirestoreClient","Using default OfflineComponentProvider"),await fi(n,new Ko);return n._offlineComponents}async function pf(n){return n._onlineComponents||(n._uninitializedComponentsProvider?(N("FirestoreClient","Using user provided OnlineComponentProvider"),await Wo(n,n._uninitializedComponentsProvider._online)):(N("FirestoreClient","Using default OnlineComponentProvider"),await Wo(n,new uf))),n._onlineComponents}function mf(n){return pf(n).then(t=>t.syncEngine)}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ml(n){const t={};return n.timeoutSeconds!==void 0&&(t.timeoutSeconds=n.timeoutSeconds),t}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const zo=new Map;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function gl(n,t,e){if(!e)throw new M(S.INVALID_ARGUMENT,`Function ${n}() cannot be called with an empty ${t}.`)}function gf(n,t,e,r){if(t===!0&&r===!0)throw new M(S.INVALID_ARGUMENT,`${n} and ${e} cannot be used together.`)}function Qo(n){if(!L.isDocumentKey(n))throw new M(S.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${n} has ${n.length}.`)}function Xo(n){if(L.isDocumentKey(n))throw new M(S.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${n} has ${n.length}.`)}function es(n){if(n===void 0)return"undefined";if(n===null)return"null";if(typeof n=="string")return n.length>20&&(n=`${n.substring(0,20)}...`),JSON.stringify(n);if(typeof n=="number"||typeof n=="boolean")return""+n;if(typeof n=="object"){if(n instanceof Array)return"an array";{const t=function(r){return r.constructor?r.constructor.name:null}(n);return t?`a custom ${t} object`:"an object"}}return typeof n=="function"?"a function":U()}function Jo(n,t){if("_delegate"in n&&(n=n._delegate),!(n instanceof t)){if(t.name===n.constructor.name)throw new M(S.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const e=es(n);throw new M(S.INVALID_ARGUMENT,`Expected type '${t.name}', but it was: ${e}`)}}return n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yo{constructor(t){var e,r;if(t.host===void 0){if(t.ssl!==void 0)throw new M(S.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=t.host,this.ssl=(e=t.ssl)===null||e===void 0||e;if(this.credentials=t.credentials,this.ignoreUndefinedProperties=!!t.ignoreUndefinedProperties,this.localCache=t.localCache,t.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(t.cacheSizeBytes!==-1&&t.cacheSizeBytes<1048576)throw new M(S.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=t.cacheSizeBytes}gf("experimentalForceLongPolling",t.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",t.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!t.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:t.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!t.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=ml((r=t.experimentalLongPollingOptions)!==null&&r!==void 0?r:{}),function(o){if(o.timeoutSeconds!==void 0){if(isNaN(o.timeoutSeconds))throw new M(S.INVALID_ARGUMENT,`invalid long polling timeout: ${o.timeoutSeconds} (must not be NaN)`);if(o.timeoutSeconds<5)throw new M(S.INVALID_ARGUMENT,`invalid long polling timeout: ${o.timeoutSeconds} (minimum allowed value is 5)`);if(o.timeoutSeconds>30)throw new M(S.INVALID_ARGUMENT,`invalid long polling timeout: ${o.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!t.useFetchStreams}isEqual(t){return this.host===t.host&&this.ssl===t.ssl&&this.credentials===t.credentials&&this.cacheSizeBytes===t.cacheSizeBytes&&this.experimentalForceLongPolling===t.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===t.experimentalAutoDetectLongPolling&&function(r,s){return r.timeoutSeconds===s.timeoutSeconds}(this.experimentalLongPollingOptions,t.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===t.ignoreUndefinedProperties&&this.useFetchStreams===t.useFetchStreams}}class ns{constructor(t,e,r,s){this._authCredentials=t,this._appCheckCredentials=e,this._databaseId=r,this._app=s,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new Yo({}),this._settingsFrozen=!1}get app(){if(!this._app)throw new M(S.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!==void 0}_setSettings(t){if(this._settingsFrozen)throw new M(S.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new Yo(t),t.credentials!==void 0&&(this._authCredentials=function(r){if(!r)return new ih;switch(r.type){case"firstParty":return new ah(r.sessionIndex||"0",r.iamToken||null,r.authTokenFactory||null);case"provider":return r.client;default:throw new M(S.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(t.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask||(this._terminateTask=this._terminate()),this._terminateTask}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(e){const r=zo.get(e);r&&(N("ComponentProvider","Removing Datastore"),zo.delete(e),r.terminate())}(this),Promise.resolve()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rs{constructor(t,e,r){this.converter=e,this._query=r,this.type="query",this.firestore=t}withConverter(t){return new rs(this.firestore,t,this._query)}}class kt{constructor(t,e,r){this.converter=e,this._key=r,this.type="document",this.firestore=t}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new te(this.firestore,this.converter,this._key.path.popLast())}withConverter(t){return new kt(this.firestore,t,this._key)}}class te extends rs{constructor(t,e,r){super(t,e,Mh(r)),this._path=r,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const t=this._path.popLast();return t.isEmpty()?null:new kt(this.firestore,null,new L(t))}withConverter(t){return new te(this.firestore,t,this._path)}}function _f(n,t,...e){if(n=Pt(n),gl("collection","path",t),n instanceof ns){const r=J.fromString(t,...e);return Xo(r),new te(n,null,r)}{if(!(n instanceof kt||n instanceof te))throw new M(S.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=n._path.child(J.fromString(t,...e));return Xo(r),new te(n.firestore,null,r)}}function yf(n,t,...e){if(n=Pt(n),arguments.length===1&&(t=Da.newId()),gl("doc","path",t),n instanceof ns){const r=J.fromString(t,...e);return Qo(r),new kt(n,null,new L(r))}{if(!(n instanceof kt||n instanceof te))throw new M(S.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=n._path.child(J.fromString(t,...e));return Qo(r),new kt(n.firestore,n instanceof te?n.converter:null,new L(r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vf{constructor(){this.au=Promise.resolve(),this.uu=[],this.cu=!1,this.lu=[],this.hu=null,this.Pu=!1,this.Iu=!1,this.Tu=[],this.t_=new al(this,"async_queue_retry"),this.Eu=()=>{const e=di();e&&N("AsyncQueue","Visibility state changed to "+e.visibilityState),this.t_.jo()};const t=di();t&&typeof t.addEventListener=="function"&&t.addEventListener("visibilitychange",this.Eu)}get isShuttingDown(){return this.cu}enqueueAndForget(t){this.enqueue(t)}enqueueAndForgetEvenWhileRestricted(t){this.du(),this.Au(t)}enterRestrictedMode(t){if(!this.cu){this.cu=!0,this.Iu=t||!1;const e=di();e&&typeof e.removeEventListener=="function"&&e.removeEventListener("visibilitychange",this.Eu)}}enqueue(t){if(this.du(),this.cu)return new Promise(()=>{});const e=new pe;return this.Au(()=>this.cu&&this.Iu?Promise.resolve():(t().then(e.resolve,e.reject),e.promise)).then(()=>e.promise)}enqueueRetryable(t){this.enqueueAndForget(()=>(this.uu.push(t),this.Ru()))}async Ru(){if(this.uu.length!==0){try{await this.uu[0](),this.uu.shift(),this.t_.reset()}catch(t){if(!Sr(t))throw t;N("AsyncQueue","Operation failed with retryable error: "+t)}this.uu.length>0&&this.t_.Go(()=>this.Ru())}}Au(t){const e=this.au.then(()=>(this.Pu=!0,t().catch(r=>{this.hu=r,this.Pu=!1;const s=function(l){let u=l.message||"";return l.stack&&(u=l.stack.includes(l.message)?l.stack:l.message+`
`+l.stack),u}(r);throw ye("INTERNAL UNHANDLED ERROR: ",s),r}).then(r=>(this.Pu=!1,r))));return this.au=e,e}enqueueAfterDelay(t,e,r){this.du(),this.Tu.indexOf(t)>-1&&(e=0);const s=ts.createAndSchedule(this,t,e,r,o=>this.Vu(o));return this.lu.push(s),s}du(){this.hu&&U()}verifyOperationInProgress(){}async mu(){let t;do t=this.au,await t;while(t!==this.au)}fu(t){for(const e of this.lu)if(e.timerId===t)return!0;return!1}gu(t){return this.mu().then(()=>{this.lu.sort((e,r)=>e.targetTimeMs-r.targetTimeMs);for(const e of this.lu)if(e.skipDelay(),t!=="all"&&e.timerId===t)break;return this.mu()})}pu(t){this.Tu.push(t)}Vu(t){const e=this.lu.indexOf(t);this.lu.splice(e,1)}}class _l extends ns{constructor(t,e,r,s){super(t,e,r,s),this.type="firestore",this._queue=function(){return new vf}(),this._persistenceKey=(s==null?void 0:s.name)||"[DEFAULT]"}_terminate(){return this._firestoreClient||yl(this),this._firestoreClient.terminate()}}function Ef(n){return n._firestoreClient||yl(n),n._firestoreClient.verifyNotTerminated(),n._firestoreClient}function yl(n){var t,e,r;const s=n._freezeSettings(),o=function(u,h,f,I){return new Ih(u,h,f,I.host,I.ssl,I.experimentalForceLongPolling,I.experimentalAutoDetectLongPolling,ml(I.experimentalLongPollingOptions),I.useFetchStreams)}(n._databaseId,((t=n._app)===null||t===void 0?void 0:t.options.appId)||"",n._persistenceKey,s);n._firestoreClient=new hf(n._authCredentials,n._appCheckCredentials,n._queue,o),!((e=s.localCache)===null||e===void 0)&&e._offlineComponentProvider&&(!((r=s.localCache)===null||r===void 0)&&r._onlineComponentProvider)&&(n._firestoreClient._uninitializedComponentsProvider={_offlineKind:s.localCache.kind,_offline:s.localCache._offlineComponentProvider,_online:s.localCache._onlineComponentProvider})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Cn{constructor(t){this._byteString=t}static fromBase64String(t){try{return new Cn(Vt.fromBase64String(t))}catch(e){throw new M(S.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+e)}}static fromUint8Array(t){return new Cn(Vt.fromUint8Array(t))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(t){return this._byteString.isEqual(t._byteString)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vl{constructor(...t){for(let e=0;e<t.length;++e)if(t[e].length===0)throw new M(S.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new lt(t)}isEqual(t){return this._internalPath.isEqual(t._internalPath)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class El{constructor(t){this._methodName=t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Il{constructor(t,e){if(!isFinite(t)||t<-90||t>90)throw new M(S.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+t);if(!isFinite(e)||e<-180||e>180)throw new M(S.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+e);this._lat=t,this._long=e}get latitude(){return this._lat}get longitude(){return this._long}isEqual(t){return this._lat===t._lat&&this._long===t._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(t){return q(this._lat,t._lat)||q(this._long,t._long)}}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Tl{constructor(t){this._values=(t||[]).map(e=>e)}toArray(){return this._values.map(t=>t)}isEqual(t){return function(r,s){if(r.length!==s.length)return!1;for(let o=0;o<r.length;++o)if(r[o]!==s[o])return!1;return!0}(this._values,t._values)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const If=/^__.*__$/;class Tf{constructor(t,e,r){this.data=t,this.fieldMask=e,this.fieldTransforms=r}toMutation(t,e){return this.fieldMask!==null?new Ae(t,this.data,this.fieldMask,e,this.fieldTransforms):new On(t,this.data,e,this.fieldTransforms)}}function wl(n){switch(n){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw U()}}class is{constructor(t,e,r,s,o,l){this.settings=t,this.databaseId=e,this.serializer=r,this.ignoreUndefinedProperties=s,o===void 0&&this.yu(),this.fieldTransforms=o||[],this.fieldMask=l||[]}get path(){return this.settings.path}get wu(){return this.settings.wu}Su(t){return new is(Object.assign(Object.assign({},this.settings),t),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}bu(t){var e;const r=(e=this.path)===null||e===void 0?void 0:e.child(t),s=this.Su({path:r,Du:!1});return s.vu(t),s}Cu(t){var e;const r=(e=this.path)===null||e===void 0?void 0:e.child(t),s=this.Su({path:r,Du:!1});return s.yu(),s}Fu(t){return this.Su({path:void 0,Du:!0})}Mu(t){return Ir(t,this.settings.methodName,this.settings.xu||!1,this.path,this.settings.Ou)}contains(t){return this.fieldMask.find(e=>t.isPrefixOf(e))!==void 0||this.fieldTransforms.find(e=>t.isPrefixOf(e.field))!==void 0}yu(){if(this.path)for(let t=0;t<this.path.length;t++)this.vu(this.path.get(t))}vu(t){if(t.length===0)throw this.Mu("Document fields must not be empty");if(wl(this.wu)&&If.test(t))throw this.Mu('Document fields cannot begin and end with "__"')}}class wf{constructor(t,e,r){this.databaseId=t,this.ignoreUndefinedProperties=e,this.serializer=r||Vr(t)}Nu(t,e,r,s=!1){return new is({wu:t,methodName:e,Ou:r,path:lt.emptyPath(),Du:!1,xu:s},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function Af(n){const t=n._freezeSettings(),e=Vr(n._databaseId);return new wf(n._databaseId,!!t.ignoreUndefinedProperties,e)}function Rf(n,t,e,r,s,o={}){const l=n.Nu(o.merge||o.mergeFields?2:0,t,e,s);Sl("Data must be an object, but it was:",l,r);const u=Rl(r,l);let h,f;if(o.merge)h=new At(l.fieldMask),f=l.fieldTransforms;else if(o.mergeFields){const I=[];for(const A of o.mergeFields){const P=Pf(t,A,e);if(!l.contains(P))throw new M(S.INVALID_ARGUMENT,`Field '${P}' is specified in your field mask but missing from your input data.`);Cf(I,P)||I.push(P)}h=new At(I),f=l.fieldTransforms.filter(A=>h.covers(A.field))}else h=null,f=l.fieldTransforms;return new Tf(new wt(u),h,f)}function Al(n,t){if(Pl(n=Pt(n)))return Sl("Unsupported field value:",t,n),Rl(n,t);if(n instanceof El)return function(r,s){if(!wl(s.wu))throw s.Mu(`${r._methodName}() can only be used with update() and set()`);if(!s.path)throw s.Mu(`${r._methodName}() is not currently supported inside arrays`);const o=r._toFieldTransform(s);o&&s.fieldTransforms.push(o)}(n,t),null;if(n===void 0&&t.ignoreUndefinedProperties)return null;if(t.path&&t.fieldMask.push(t.path),n instanceof Array){if(t.settings.Du&&t.wu!==4)throw t.Mu("Nested arrays are not supported");return function(r,s){const o=[];let l=0;for(const u of r){let h=Al(u,s.Fu(l));h==null&&(h={nullValue:"NULL_VALUE"}),o.push(h),l++}return{arrayValue:{values:o}}}(n,t)}return function(r,s){if((r=Pt(r))===null)return{nullValue:"NULL_VALUE"};if(typeof r=="number")return Gh(s.serializer,r);if(typeof r=="boolean")return{booleanValue:r};if(typeof r=="string")return{stringValue:r};if(r instanceof Date){const o=it.fromDate(r);return{timestampValue:Si(s.serializer,o)}}if(r instanceof it){const o=new it(r.seconds,1e3*Math.floor(r.nanoseconds/1e3));return{timestampValue:Si(s.serializer,o)}}if(r instanceof Il)return{geoPointValue:{latitude:r.latitude,longitude:r.longitude}};if(r instanceof Cn)return{bytesValue:id(s.serializer,r._byteString)};if(r instanceof kt){const o=s.databaseId,l=r.firestore._databaseId;if(!l.isEqual(o))throw s.Mu(`Document reference is for database ${l.projectId}/${l.database} but should be for database ${o.projectId}/${o.database}`);return{referenceValue:il(r.firestore._databaseId||s.databaseId,r._key.path)}}if(r instanceof Tl)return function(l,u){return{mapValue:{fields:{__type__:{stringValue:"__vector__"},value:{arrayValue:{values:l.toArray().map(h=>{if(typeof h!="number")throw u.Mu("VectorValues must only contain numeric values.");return Qi(u.serializer,h)})}}}}}}(r,s);throw s.Mu(`Unsupported field value: ${es(r)}`)}(n,t)}function Rl(n,t){const e={};return xa(n)?t.path&&t.path.length>0&&t.fieldMask.push(t.path):Dn(n,(r,s)=>{const o=Al(s,t.bu(r));o!=null&&(e[r]=o)}),{mapValue:{fields:e}}}function Pl(n){return!(typeof n!="object"||n===null||n instanceof Array||n instanceof Date||n instanceof it||n instanceof Il||n instanceof Cn||n instanceof kt||n instanceof El||n instanceof Tl)}function Sl(n,t,e){if(!Pl(e)||!function(s){return typeof s=="object"&&s!==null&&(Object.getPrototypeOf(s)===Object.prototype||Object.getPrototypeOf(s)===null)}(e)){const r=es(e);throw r==="an object"?t.Mu(n+" a custom object"):t.Mu(n+" "+r)}}function Pf(n,t,e){if((t=Pt(t))instanceof vl)return t._internalPath;if(typeof t=="string")return bf(n,t);throw Ir("Field path arguments must be of type string or ",n,!1,void 0,e)}const Sf=new RegExp("[~\\*/\\[\\]]");function bf(n,t,e){if(t.search(Sf)>=0)throw Ir(`Invalid field path (${t}). Paths must not contain '~', '*', '/', '[', or ']'`,n,!1,void 0,e);try{return new vl(...t.split("."))._internalPath}catch{throw Ir(`Invalid field path (${t}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,n,!1,void 0,e)}}function Ir(n,t,e,r,s){const o=r&&!r.isEmpty(),l=s!==void 0;let u=`Function ${t}() called with invalid data`;e&&(u+=" (via `toFirestore()`)"),u+=". ";let h="";return(o||l)&&(h+=" (found",o&&(h+=` in field ${r}`),l&&(h+=` in document ${s}`),h+=")"),new M(S.INVALID_ARGUMENT,u+n+h)}function Cf(n,t){return n.some(e=>e.isEqual(t))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function kf(n,t,e){let r;return r=n?n.toFirestore(t):t,r}function Vf(n,t,e){n=Jo(n,kt);const r=Jo(n.firestore,_l),s=kf(n.converter,t);return Nf(r,[Rf(Af(r),"setDoc",n._key,s,n.converter!==null,e).toMutation(n._key,jt.none())])}function Nf(n,t){return function(r,s){const o=new pe;return r.asyncQueue.enqueueAndForget(async()=>sf(await mf(r),s,o)),o.promise}(Ef(n),t)}(function(t,e=!0){(function(s){He=s})(Pr),Fe(new Le("firestore",(r,{instanceIdentifier:s,options:o})=>{const l=r.getProvider("app").getImmediate(),u=new _l(new sh(r.getProvider("auth-internal")),new ch(r.getProvider("app-check-internal")),function(f,I){if(!Object.prototype.hasOwnProperty.apply(f.options,["projectId"]))throw new M(S.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new mr(f.options.projectId,I)}(l,s),l);return o=Object.assign({useFetchStreams:e},o),u._setSettings(o),u},"PUBLIC").setMultipleInstances(!0)),Zt(Ro,"4.7.0",t),Zt(Ro,"4.7.0","esm2017")})();function bl(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const Df=bl,Cl=new Nn("auth","Firebase",bl());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Tr=new Ui("@firebase/auth");function Of(n,...t){Tr.logLevel<=F.WARN&&Tr.warn(`Auth (${Pr}): ${n}`,...t)}function dr(n,...t){Tr.logLevel<=F.ERROR&&Tr.error(`Auth (${Pr}): ${n}`,...t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function qt(n,...t){throw os(n,...t)}function ge(n,...t){return os(n,...t)}function ss(n,t,e){const r=Object.assign(Object.assign({},Df()),{[t]:e});return new Nn("auth","Firebase",r).create(t,{appName:n.name})}function ee(n){return ss(n,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function Mf(n,t,e){const r=e;if(!(t instanceof r))throw r.name!==t.constructor.name&&qt(n,"argument-error"),ss(n,"argument-error",`Type of ${t.constructor.name} does not match expected instance.Did you pass a reference from a different Auth SDK?`)}function os(n,...t){if(typeof n!="string"){const e=t[0],r=[...t.slice(1)];return r[0]&&(r[0].appName=n.name),n._errorFactory.create(e,...r)}return Cl.create(n,...t)}function x(n,t,...e){if(!n)throw os(t,...e)}function Ut(n){const t="INTERNAL ASSERTION FAILED: "+n;throw dr(t),new Error(t)}function Ee(n,t){n||Ut(t)}function xf(){return Zo()==="http:"||Zo()==="https:"}function Zo(){var n;return typeof self<"u"&&((n=self.location)===null||n===void 0?void 0:n.protocol)||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Lf(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(xf()||Hc()||"connection"in navigator)?navigator.onLine:!0}function Ff(){if(typeof navigator>"u")return null;const n=navigator;return n.languages&&n.languages[0]||n.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ln{constructor(t,e){this.shortDelay=t,this.longDelay=e,Ee(e>t,"Short delay should be less than long delay!"),this.isMobile=$c()||Gc()}get(){return Lf()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Uf(n,t){Ee(n.emulator,"Emulator should always be set here");const{url:e}=n.emulator;return t?`${e}${t.startsWith("/")?t.slice(1):t}`:e}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kl{static initialize(t,e,r){this.fetchImpl=t,e&&(this.headersImpl=e),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;Ut("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;Ut("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;Ut("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Bf={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const jf=new Ln(3e4,6e4);function Gt(n,t){return n.tenantId&&!t.tenantId?Object.assign(Object.assign({},t),{tenantId:n.tenantId}):t}async function se(n,t,e,r,s={}){return Vl(n,s,async()=>{let o={},l={};r&&(t==="GET"?l=r:o={body:JSON.stringify(r)});const u=Fi(Object.assign({key:n.config.apiKey},l)).slice(1),h=await n._getAdditionalHeaders();return h["Content-Type"]="application/json",n.languageCode&&(h["X-Firebase-Locale"]=n.languageCode),kl.fetch()(Nl(n,n.config.apiHost,e,u),Object.assign({method:t,headers:h,referrerPolicy:"no-referrer"},o))})}async function Vl(n,t,e){n._canInitEmulator=!1;const r=Object.assign(Object.assign({},Bf),t);try{const s=new qf(n),o=await Promise.race([e(),s.promise]);s.clearNetworkTimeout();const l=await o.json();if("needConfirmation"in l)throw lr(n,"account-exists-with-different-credential",l);if(o.ok&&!("errorMessage"in l))return l;{const u=o.ok?l.errorMessage:l.error.message,[h,f]=u.split(" : ");if(h==="FEDERATED_USER_ID_ALREADY_LINKED")throw lr(n,"credential-already-in-use",l);if(h==="EMAIL_EXISTS")throw lr(n,"email-already-in-use",l);if(h==="USER_DISABLED")throw lr(n,"user-disabled",l);const I=r[h]||h.toLowerCase().replace(/[_\s]+/g,"-");if(f)throw ss(n,I,f);qt(n,I)}}catch(s){if(s instanceof Ht)throw s;qt(n,"network-request-failed",{message:String(s)})}}async function Fn(n,t,e,r,s={}){const o=await se(n,t,e,r,s);return"mfaPendingCredential"in o&&qt(n,"multi-factor-auth-required",{_serverResponse:o}),o}function Nl(n,t,e,r){const s=`${t}${e}?${r}`;return n.config.emulator?Uf(n.config,s):`${n.config.apiScheme}://${s}`}function $f(n){switch(n){case"ENFORCE":return"ENFORCE";case"AUDIT":return"AUDIT";case"OFF":return"OFF";default:return"ENFORCEMENT_STATE_UNSPECIFIED"}}class qf{constructor(t){this.auth=t,this.timer=null,this.promise=new Promise((e,r)=>{this.timer=setTimeout(()=>r(ge(this.auth,"network-request-failed")),jf.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function lr(n,t,e){const r={appName:n.name};e.email&&(r.email=e.email),e.phoneNumber&&(r.phoneNumber=e.phoneNumber);const s=ge(n,t,r);return s.customData._tokenResponse=e,s}function ta(n){return n!==void 0&&n.enterprise!==void 0}class Hf{constructor(t){if(this.siteKey="",this.recaptchaEnforcementState=[],t.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=t.recaptchaKey.split("/")[3],this.recaptchaEnforcementState=t.recaptchaEnforcementState}getProviderEnforcementState(t){if(!this.recaptchaEnforcementState||this.recaptchaEnforcementState.length===0)return null;for(const e of this.recaptchaEnforcementState)if(e.provider&&e.provider===t)return $f(e.enforcementState);return null}isProviderEnabled(t){return this.getProviderEnforcementState(t)==="ENFORCE"||this.getProviderEnforcementState(t)==="AUDIT"}}async function Gf(n,t){return se(n,"GET","/v2/recaptchaConfig",Gt(n,t))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Kf(n,t){return se(n,"POST","/v1/accounts:delete",t)}async function Dl(n,t){return se(n,"POST","/v1/accounts:lookup",t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Tn(n){if(n)try{const t=new Date(Number(n));if(!isNaN(t.getTime()))return t.toUTCString()}catch{}}async function Wf(n,t=!1){const e=Pt(n),r=await e.getIdToken(t),s=as(r);x(s&&s.exp&&s.auth_time&&s.iat,e.auth,"internal-error");const o=typeof s.firebase=="object"?s.firebase:void 0,l=o==null?void 0:o.sign_in_provider;return{claims:s,token:r,authTime:Tn(pi(s.auth_time)),issuedAtTime:Tn(pi(s.iat)),expirationTime:Tn(pi(s.exp)),signInProvider:l||null,signInSecondFactor:(o==null?void 0:o.sign_in_second_factor)||null}}function pi(n){return Number(n)*1e3}function as(n){const[t,e,r]=n.split(".");if(t===void 0||e===void 0||r===void 0)return dr("JWT malformed, contained fewer than 3 sections"),null;try{const s=Ea(e);return s?JSON.parse(s):(dr("Failed to decode base64 JWT payload"),null)}catch(s){return dr("Caught error parsing JWT payload as JSON",s==null?void 0:s.toString()),null}}function ea(n){const t=as(n);return x(t,"internal-error"),x(typeof t.exp<"u","internal-error"),x(typeof t.iat<"u","internal-error"),Number(t.exp)-Number(t.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function kn(n,t,e=!1){if(e)return t;try{return await t}catch(r){throw r instanceof Ht&&zf(r)&&n.auth.currentUser===n&&await n.auth.signOut(),r}}function zf({code:n}){return n==="auth/user-disabled"||n==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qf{constructor(t){this.user=t,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(t){var e;if(t){const r=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),r}else{this.errorBackoff=3e4;const s=((e=this.user.stsTokenManager.expirationTime)!==null&&e!==void 0?e:0)-Date.now()-3e5;return Math.max(0,s)}}schedule(t=!1){if(!this.isRunning)return;const e=this.getInterval(t);this.timerId=setTimeout(async()=>{await this.iteration()},e)}async iteration(){try{await this.user.getIdToken(!0)}catch(t){(t==null?void 0:t.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ki{constructor(t,e){this.createdAt=t,this.lastLoginAt=e,this._initializeTime()}_initializeTime(){this.lastSignInTime=Tn(this.lastLoginAt),this.creationTime=Tn(this.createdAt)}_copy(t){this.createdAt=t.createdAt,this.lastLoginAt=t.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function wr(n){var t;const e=n.auth,r=await n.getIdToken(),s=await kn(n,Dl(e,{idToken:r}));x(s==null?void 0:s.users.length,e,"internal-error");const o=s.users[0];n._notifyReloadListener(o);const l=!((t=o.providerUserInfo)===null||t===void 0)&&t.length?Ol(o.providerUserInfo):[],u=Jf(n.providerData,l),h=n.isAnonymous,f=!(n.email&&o.passwordHash)&&!(u!=null&&u.length),I=h?f:!1,A={uid:o.localId,displayName:o.displayName||null,photoURL:o.photoUrl||null,email:o.email||null,emailVerified:o.emailVerified||!1,phoneNumber:o.phoneNumber||null,tenantId:o.tenantId||null,providerData:u,metadata:new ki(o.createdAt,o.lastLoginAt),isAnonymous:I};Object.assign(n,A)}async function Xf(n){const t=Pt(n);await wr(t),await t.auth._persistUserIfCurrent(t),t.auth._notifyListenersIfCurrent(t)}function Jf(n,t){return[...n.filter(r=>!t.some(s=>s.providerId===r.providerId)),...t]}function Ol(n){return n.map(t=>{var{providerId:e}=t,r=Vi(t,["providerId"]);return{providerId:e,uid:r.rawId||"",displayName:r.displayName||null,email:r.email||null,phoneNumber:r.phoneNumber||null,photoURL:r.photoUrl||null}})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Yf(n,t){const e=await Vl(n,{},async()=>{const r=Fi({grant_type:"refresh_token",refresh_token:t}).slice(1),{tokenApiHost:s,apiKey:o}=n.config,l=Nl(n,s,"/v1/token",`key=${o}`),u=await n._getAdditionalHeaders();return u["Content-Type"]="application/x-www-form-urlencoded",kl.fetch()(l,{method:"POST",headers:u,body:r})});return{accessToken:e.access_token,expiresIn:e.expires_in,refreshToken:e.refresh_token}}async function Zf(n,t){return se(n,"POST","/v2/accounts:revokeToken",Gt(n,t))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ne{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(t){x(t.idToken,"internal-error"),x(typeof t.idToken<"u","internal-error"),x(typeof t.refreshToken<"u","internal-error");const e="expiresIn"in t&&typeof t.expiresIn<"u"?Number(t.expiresIn):ea(t.idToken);this.updateTokensAndExpiration(t.idToken,t.refreshToken,e)}updateFromIdToken(t){x(t.length!==0,"internal-error");const e=ea(t);this.updateTokensAndExpiration(t,null,e)}async getToken(t,e=!1){return!e&&this.accessToken&&!this.isExpired?this.accessToken:(x(this.refreshToken,t,"user-token-expired"),this.refreshToken?(await this.refresh(t,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(t,e){const{accessToken:r,refreshToken:s,expiresIn:o}=await Yf(t,e);this.updateTokensAndExpiration(r,s,Number(o))}updateTokensAndExpiration(t,e,r){this.refreshToken=e||null,this.accessToken=t||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(t,e){const{refreshToken:r,accessToken:s,expirationTime:o}=e,l=new Ne;return r&&(x(typeof r=="string","internal-error",{appName:t}),l.refreshToken=r),s&&(x(typeof s=="string","internal-error",{appName:t}),l.accessToken=s),o&&(x(typeof o=="number","internal-error",{appName:t}),l.expirationTime=o),l}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(t){this.accessToken=t.accessToken,this.refreshToken=t.refreshToken,this.expirationTime=t.expirationTime}_clone(){return Object.assign(new Ne,this.toJSON())}_performRefresh(){return Ut("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Xt(n,t){x(typeof n=="string"||typeof n>"u","internal-error",{appName:t})}class Bt{constructor(t){var{uid:e,auth:r,stsTokenManager:s}=t,o=Vi(t,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new Qf(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=e,this.auth=r,this.stsTokenManager=s,this.accessToken=s.accessToken,this.displayName=o.displayName||null,this.email=o.email||null,this.emailVerified=o.emailVerified||!1,this.phoneNumber=o.phoneNumber||null,this.photoURL=o.photoURL||null,this.isAnonymous=o.isAnonymous||!1,this.tenantId=o.tenantId||null,this.providerData=o.providerData?[...o.providerData]:[],this.metadata=new ki(o.createdAt||void 0,o.lastLoginAt||void 0)}async getIdToken(t){const e=await kn(this,this.stsTokenManager.getToken(this.auth,t));return x(e,this.auth,"internal-error"),this.accessToken!==e&&(this.accessToken=e,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),e}getIdTokenResult(t){return Wf(this,t)}reload(){return Xf(this)}_assign(t){this!==t&&(x(this.uid===t.uid,this.auth,"internal-error"),this.displayName=t.displayName,this.photoURL=t.photoURL,this.email=t.email,this.emailVerified=t.emailVerified,this.phoneNumber=t.phoneNumber,this.isAnonymous=t.isAnonymous,this.tenantId=t.tenantId,this.providerData=t.providerData.map(e=>Object.assign({},e)),this.metadata._copy(t.metadata),this.stsTokenManager._assign(t.stsTokenManager))}_clone(t){const e=new Bt(Object.assign(Object.assign({},this),{auth:t,stsTokenManager:this.stsTokenManager._clone()}));return e.metadata._copy(this.metadata),e}_onReload(t){x(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=t,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(t){this.reloadListener?this.reloadListener(t):this.reloadUserInfo=t}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(t,e=!1){let r=!1;t.idToken&&t.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(t),r=!0),e&&await wr(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(Ct(this.auth.app))return Promise.reject(ee(this.auth));const t=await this.getIdToken();return await kn(this,Kf(this.auth,{idToken:t})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(t=>Object.assign({},t)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(t,e){var r,s,o,l,u,h,f,I;const A=(r=e.displayName)!==null&&r!==void 0?r:void 0,P=(s=e.email)!==null&&s!==void 0?s:void 0,C=(o=e.phoneNumber)!==null&&o!==void 0?o:void 0,k=(l=e.photoURL)!==null&&l!==void 0?l:void 0,O=(u=e.tenantId)!==null&&u!==void 0?u:void 0,D=(h=e._redirectEventId)!==null&&h!==void 0?h:void 0,K=(f=e.createdAt)!==null&&f!==void 0?f:void 0,H=(I=e.lastLoginAt)!==null&&I!==void 0?I:void 0,{uid:W,emailVerified:Z,isAnonymous:St,providerData:et,stsTokenManager:v}=e;x(W&&v,t,"internal-error");const p=Ne.fromJSON(this.name,v);x(typeof W=="string",t,"internal-error"),Xt(A,t.name),Xt(P,t.name),x(typeof Z=="boolean",t,"internal-error"),x(typeof St=="boolean",t,"internal-error"),Xt(C,t.name),Xt(k,t.name),Xt(O,t.name),Xt(D,t.name),Xt(K,t.name),Xt(H,t.name);const g=new Bt({uid:W,auth:t,email:P,emailVerified:Z,displayName:A,isAnonymous:St,photoURL:k,phoneNumber:C,tenantId:O,stsTokenManager:p,createdAt:K,lastLoginAt:H});return et&&Array.isArray(et)&&(g.providerData=et.map(_=>Object.assign({},_))),D&&(g._redirectEventId=D),g}static async _fromIdTokenResponse(t,e,r=!1){const s=new Ne;s.updateFromServerResponse(e);const o=new Bt({uid:e.localId,auth:t,stsTokenManager:s,isAnonymous:r});return await wr(o),o}static async _fromGetAccountInfoResponse(t,e,r){const s=e.users[0];x(s.localId!==void 0,"internal-error");const o=s.providerUserInfo!==void 0?Ol(s.providerUserInfo):[],l=!(s.email&&s.passwordHash)&&!(o!=null&&o.length),u=new Ne;u.updateFromIdToken(r);const h=new Bt({uid:s.localId,auth:t,stsTokenManager:u,isAnonymous:l}),f={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:o,metadata:new ki(s.createdAt,s.lastLoginAt),isAnonymous:!(s.email&&s.passwordHash)&&!(o!=null&&o.length)};return Object.assign(h,f),h}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const na=new Map;function de(n){Ee(n instanceof Function,"Expected a class definition");let t=na.get(n);return t?(Ee(t instanceof n,"Instance stored in cache mismatched with class"),t):(t=new n,na.set(n,t),t)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ml{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(t,e){this.storage[t]=e}async _get(t){const e=this.storage[t];return e===void 0?null:e}async _remove(t){delete this.storage[t]}_addListener(t,e){}_removeListener(t,e){}}Ml.type="NONE";const ra=Ml;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function mi(n,t,e){return`firebase:${n}:${t}:${e}`}class De{constructor(t,e,r){this.persistence=t,this.auth=e,this.userKey=r;const{config:s,name:o}=this.auth;this.fullUserKey=mi(this.userKey,s.apiKey,o),this.fullPersistenceKey=mi("persistence",s.apiKey,o),this.boundEventHandler=e._onStorageEvent.bind(e),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(t){return this.persistence._set(this.fullUserKey,t.toJSON())}async getCurrentUser(){const t=await this.persistence._get(this.fullUserKey);return t?Bt._fromJSON(this.auth,t):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(t){if(this.persistence===t)return;const e=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=t,e)return this.setCurrentUser(e)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(t,e,r="authUser"){if(!e.length)return new De(de(ra),t,r);const s=(await Promise.all(e.map(async f=>{if(await f._isAvailable())return f}))).filter(f=>f);let o=s[0]||de(ra);const l=mi(r,t.config.apiKey,t.name);let u=null;for(const f of e)try{const I=await f._get(l);if(I){const A=Bt._fromJSON(t,I);f!==o&&(u=A),o=f;break}}catch{}const h=s.filter(f=>f._shouldAllowMigration);return!o._shouldAllowMigration||!h.length?new De(o,t,r):(o=h[0],u&&await o._set(l,u.toJSON()),await Promise.all(e.map(async f=>{if(f!==o)try{await f._remove(l)}catch{}})),new De(o,t,r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ia(n){const t=n.toLowerCase();if(t.includes("opera/")||t.includes("opr/")||t.includes("opios/"))return"Opera";if(rp(t))return"IEMobile";if(t.includes("msie")||t.includes("trident/"))return"IE";if(t.includes("edge/"))return"Edge";if(tp(t))return"Firefox";if(t.includes("silk/"))return"Silk";if(sp(t))return"Blackberry";if(op(t))return"Webos";if(ep(t))return"Safari";if((t.includes("chrome/")||np(t))&&!t.includes("edge/"))return"Chrome";if(ip(t))return"Android";{const e=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=n.match(e);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function tp(n=Rt()){return/firefox\//i.test(n)}function ep(n=Rt()){const t=n.toLowerCase();return t.includes("safari/")&&!t.includes("chrome/")&&!t.includes("crios/")&&!t.includes("android")}function np(n=Rt()){return/crios\//i.test(n)}function rp(n=Rt()){return/iemobile/i.test(n)}function ip(n=Rt()){return/android/i.test(n)}function sp(n=Rt()){return/blackberry/i.test(n)}function op(n=Rt()){return/webos/i.test(n)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function xl(n,t=[]){let e;switch(n){case"Browser":e=ia(Rt());break;case"Worker":e=`${ia(Rt())}-${n}`;break;default:e=n}const r=t.length?t.join(","):"FirebaseCore-web";return`${e}/JsCore/${Pr}/${r}`}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ap{constructor(t){this.auth=t,this.queue=[]}pushCallback(t,e){const r=o=>new Promise((l,u)=>{try{const h=t(o);l(h)}catch(h){u(h)}});r.onAbort=e,this.queue.push(r);const s=this.queue.length-1;return()=>{this.queue[s]=()=>Promise.resolve()}}async runMiddleware(t){if(this.auth.currentUser===t)return;const e=[];try{for(const r of this.queue)await r(t),r.onAbort&&e.push(r.onAbort)}catch(r){e.reverse();for(const s of e)try{s()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r==null?void 0:r.message})}}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function lp(n,t={}){return se(n,"GET","/v2/passwordPolicy",Gt(n,t))}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const cp=6;class up{constructor(t){var e,r,s,o;const l=t.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=(e=l.minPasswordLength)!==null&&e!==void 0?e:cp,l.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=l.maxPasswordLength),l.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=l.containsLowercaseCharacter),l.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=l.containsUppercaseCharacter),l.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=l.containsNumericCharacter),l.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=l.containsNonAlphanumericCharacter),this.enforcementState=t.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=(s=(r=t.allowedNonAlphanumericCharacters)===null||r===void 0?void 0:r.join(""))!==null&&s!==void 0?s:"",this.forceUpgradeOnSignin=(o=t.forceUpgradeOnSignin)!==null&&o!==void 0?o:!1,this.schemaVersion=t.schemaVersion}validatePassword(t){var e,r,s,o,l,u;const h={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(t,h),this.validatePasswordCharacterOptions(t,h),h.isValid&&(h.isValid=(e=h.meetsMinPasswordLength)!==null&&e!==void 0?e:!0),h.isValid&&(h.isValid=(r=h.meetsMaxPasswordLength)!==null&&r!==void 0?r:!0),h.isValid&&(h.isValid=(s=h.containsLowercaseLetter)!==null&&s!==void 0?s:!0),h.isValid&&(h.isValid=(o=h.containsUppercaseLetter)!==null&&o!==void 0?o:!0),h.isValid&&(h.isValid=(l=h.containsNumericCharacter)!==null&&l!==void 0?l:!0),h.isValid&&(h.isValid=(u=h.containsNonAlphanumericCharacter)!==null&&u!==void 0?u:!0),h}validatePasswordLengthOptions(t,e){const r=this.customStrengthOptions.minPasswordLength,s=this.customStrengthOptions.maxPasswordLength;r&&(e.meetsMinPasswordLength=t.length>=r),s&&(e.meetsMaxPasswordLength=t.length<=s)}validatePasswordCharacterOptions(t,e){this.updatePasswordCharacterOptionsStatuses(e,!1,!1,!1,!1);let r;for(let s=0;s<t.length;s++)r=t.charAt(s),this.updatePasswordCharacterOptionsStatuses(e,r>="a"&&r<="z",r>="A"&&r<="Z",r>="0"&&r<="9",this.allowedNonAlphanumericCharacters.includes(r))}updatePasswordCharacterOptionsStatuses(t,e,r,s,o){this.customStrengthOptions.containsLowercaseLetter&&(t.containsLowercaseLetter||(t.containsLowercaseLetter=e)),this.customStrengthOptions.containsUppercaseLetter&&(t.containsUppercaseLetter||(t.containsUppercaseLetter=r)),this.customStrengthOptions.containsNumericCharacter&&(t.containsNumericCharacter||(t.containsNumericCharacter=s)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(t.containsNonAlphanumericCharacter||(t.containsNonAlphanumericCharacter=o))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hp{constructor(t,e,r,s){this.app=t,this.heartbeatServiceProvider=e,this.appCheckServiceProvider=r,this.config=s,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new sa(this),this.idTokenSubscription=new sa(this),this.beforeStateQueue=new ap(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=Cl,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=t.name,this.clientVersion=s.sdkClientVersion}_initializeWithPersistence(t,e){return e&&(this._popupRedirectResolver=de(e)),this._initializationPromise=this.queue(async()=>{var r,s;if(!this._deleted&&(this.persistenceManager=await De.create(this,t),!this._deleted)){if(!((r=this._popupRedirectResolver)===null||r===void 0)&&r._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(e),this.lastNotifiedUid=((s=this.currentUser)===null||s===void 0?void 0:s.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const t=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!t)){if(this.currentUser&&t&&this.currentUser.uid===t.uid){this._currentUser._assign(t),await this.currentUser.getIdToken();return}await this._updateCurrentUser(t,!0)}}async initializeCurrentUserFromIdToken(t){try{const e=await Dl(this,{idToken:t}),r=await Bt._fromGetAccountInfoResponse(this,e,t);await this.directlySetCurrentUser(r)}catch(e){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",e),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(t){var e;if(Ct(this.app)){const l=this.app.settings.authIdToken;return l?new Promise(u=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(l).then(u,u))}):this.directlySetCurrentUser(null)}const r=await this.assertedPersistence.getCurrentUser();let s=r,o=!1;if(t&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const l=(e=this.redirectUser)===null||e===void 0?void 0:e._redirectEventId,u=s==null?void 0:s._redirectEventId,h=await this.tryRedirectSignIn(t);(!l||l===u)&&(h!=null&&h.user)&&(s=h.user,o=!0)}if(!s)return this.directlySetCurrentUser(null);if(!s._redirectEventId){if(o)try{await this.beforeStateQueue.runMiddleware(s)}catch(l){s=r,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(l))}return s?this.reloadAndSetCurrentUserOrClear(s):this.directlySetCurrentUser(null)}return x(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===s._redirectEventId?this.directlySetCurrentUser(s):this.reloadAndSetCurrentUserOrClear(s)}async tryRedirectSignIn(t){let e=null;try{e=await this._popupRedirectResolver._completeRedirectFn(this,t,!0)}catch{await this._setRedirectUser(null)}return e}async reloadAndSetCurrentUserOrClear(t){try{await wr(t)}catch(e){if((e==null?void 0:e.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(t)}useDeviceLanguage(){this.languageCode=Ff()}async _delete(){this._deleted=!0}async updateCurrentUser(t){if(Ct(this.app))return Promise.reject(ee(this));const e=t?Pt(t):null;return e&&x(e.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(e&&e._clone(this))}async _updateCurrentUser(t,e=!1){if(!this._deleted)return t&&x(this.tenantId===t.tenantId,this,"tenant-id-mismatch"),e||await this.beforeStateQueue.runMiddleware(t),this.queue(async()=>{await this.directlySetCurrentUser(t),this.notifyAuthListeners()})}async signOut(){return Ct(this.app)?Promise.reject(ee(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(t){return Ct(this.app)?Promise.reject(ee(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(de(t))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(t){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const e=this._getPasswordPolicyInternal();return e.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):e.validatePassword(t)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const t=await lp(this),e=new up(t);this.tenantId===null?this._projectPasswordPolicy=e:this._tenantPasswordPolicies[this.tenantId]=e}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(t){this._errorFactory=new Nn("auth","Firebase",t())}onAuthStateChanged(t,e,r){return this.registerStateListener(this.authStateSubscription,t,e,r)}beforeAuthStateChanged(t,e){return this.beforeStateQueue.pushCallback(t,e)}onIdTokenChanged(t,e,r){return this.registerStateListener(this.idTokenSubscription,t,e,r)}authStateReady(){return new Promise((t,e)=>{if(this.currentUser)t();else{const r=this.onAuthStateChanged(()=>{r(),t()},e)}})}async revokeAccessToken(t){if(this.currentUser){const e=await this.currentUser.getIdToken(),r={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:t,idToken:e};this.tenantId!=null&&(r.tenantId=this.tenantId),await Zf(this,r)}}toJSON(){var t;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(t=this._currentUser)===null||t===void 0?void 0:t.toJSON()}}async _setRedirectUser(t,e){const r=await this.getOrInitRedirectPersistenceManager(e);return t===null?r.removeCurrentUser():r.setCurrentUser(t)}async getOrInitRedirectPersistenceManager(t){if(!this.redirectPersistenceManager){const e=t&&de(t)||this._popupRedirectResolver;x(e,this,"argument-error"),this.redirectPersistenceManager=await De.create(this,[de(e._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(t){var e,r;return this._isInitialized&&await this.queue(async()=>{}),((e=this._currentUser)===null||e===void 0?void 0:e._redirectEventId)===t?this._currentUser:((r=this.redirectUser)===null||r===void 0?void 0:r._redirectEventId)===t?this.redirectUser:null}async _persistUserIfCurrent(t){if(t===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(t))}_notifyListenersIfCurrent(t){t===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var t,e;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const r=(e=(t=this.currentUser)===null||t===void 0?void 0:t.uid)!==null&&e!==void 0?e:null;this.lastNotifiedUid!==r&&(this.lastNotifiedUid=r,this.authStateSubscription.next(this.currentUser))}registerStateListener(t,e,r,s){if(this._deleted)return()=>{};const o=typeof e=="function"?e:e.next.bind(e);let l=!1;const u=this._isInitialized?Promise.resolve():this._initializationPromise;if(x(u,this,"internal-error"),u.then(()=>{l||o(this.currentUser)}),typeof e=="function"){const h=t.addObserver(e,r,s);return()=>{l=!0,h()}}else{const h=t.addObserver(e);return()=>{l=!0,h()}}}async directlySetCurrentUser(t){this.currentUser&&this.currentUser!==t&&this._currentUser._stopProactiveRefresh(),t&&this.isProactiveRefreshEnabled&&t._startProactiveRefresh(),this.currentUser=t,t?await this.assertedPersistence.setCurrentUser(t):await this.assertedPersistence.removeCurrentUser()}queue(t){return this.operations=this.operations.then(t,t),this.operations}get assertedPersistence(){return x(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(t){!t||this.frameworks.includes(t)||(this.frameworks.push(t),this.frameworks.sort(),this.clientVersion=xl(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var t;const e={"X-Client-Version":this.clientVersion};this.app.options.appId&&(e["X-Firebase-gmpid"]=this.app.options.appId);const r=await((t=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||t===void 0?void 0:t.getHeartbeatsHeader());r&&(e["X-Firebase-Client"]=r);const s=await this._getAppCheckToken();return s&&(e["X-Firebase-AppCheck"]=s),e}async _getAppCheckToken(){var t;const e=await((t=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||t===void 0?void 0:t.getToken());return e!=null&&e.error&&Of(`Error while retrieving App Check token: ${e.error}`),e==null?void 0:e.token}}function Re(n){return Pt(n)}class sa{constructor(t){this.auth=t,this.observer=null,this.addObserver=Yc(e=>this.observer=e)}get next(){return x(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let ls={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function dp(n){ls=n}function fp(n){return ls.loadJS(n)}function pp(){return ls.recaptchaEnterpriseScript}const mp="recaptcha-enterprise",gp="NO_RECAPTCHA";class _p{constructor(t){this.type=mp,this.auth=Re(t)}async verify(t="verify",e=!1){async function r(o){if(!e){if(o.tenantId==null&&o._agentRecaptchaConfig!=null)return o._agentRecaptchaConfig.siteKey;if(o.tenantId!=null&&o._tenantRecaptchaConfigs[o.tenantId]!==void 0)return o._tenantRecaptchaConfigs[o.tenantId].siteKey}return new Promise(async(l,u)=>{Gf(o,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(h=>{if(h.recaptchaKey===void 0)u(new Error("recaptcha Enterprise site key undefined"));else{const f=new Hf(h);return o.tenantId==null?o._agentRecaptchaConfig=f:o._tenantRecaptchaConfigs[o.tenantId]=f,l(f.siteKey)}}).catch(h=>{u(h)})})}function s(o,l,u){const h=window.grecaptcha;ta(h)?h.enterprise.ready(()=>{h.enterprise.execute(o,{action:t}).then(f=>{l(f)}).catch(()=>{l(gp)})}):u(Error("No reCAPTCHA enterprise script loaded."))}return new Promise((o,l)=>{r(this.auth).then(u=>{if(!e&&ta(window.grecaptcha))s(u,o,l);else{if(typeof window>"u"){l(new Error("RecaptchaVerifier is only supported in browser"));return}let h=pp();h.length!==0&&(h+=u),fp(h).then(()=>{s(u,o,l)}).catch(f=>{l(f)})}}).catch(u=>{l(u)})})}}async function oa(n,t,e,r=!1){const s=new _p(n);let o;try{o=await s.verify(e)}catch{o=await s.verify(e,!0)}const l=Object.assign({},t);return r?Object.assign(l,{captchaResp:o}):Object.assign(l,{captchaResponse:o}),Object.assign(l,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(l,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),l}async function Ar(n,t,e,r){var s;if(!((s=n._getRecaptchaConfig())===null||s===void 0)&&s.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")){const o=await oa(n,t,e,e==="getOobCode");return r(n,o)}else return r(n,t).catch(async o=>{if(o.code==="auth/missing-recaptcha-token"){console.log(`${e} is protected by reCAPTCHA Enterprise for this project. Automatically triggering the reCAPTCHA flow and restarting the flow.`);const l=await oa(n,t,e,e==="getOobCode");return r(n,l)}else return Promise.reject(o)})}function yp(n,t){const e=(t==null?void 0:t.persistence)||[],r=(Array.isArray(e)?e:[e]).map(de);t!=null&&t.errorMap&&n._updateErrorMap(t.errorMap),n._initializeWithPersistence(r,t==null?void 0:t.popupRedirectResolver)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cs{constructor(t,e){this.providerId=t,this.signInMethod=e}toJSON(){return Ut("not implemented")}_getIdTokenResponse(t){return Ut("not implemented")}_linkToIdToken(t,e){return Ut("not implemented")}_getReauthenticationResolver(t){return Ut("not implemented")}}async function vp(n,t){return se(n,"POST","/v1/accounts:signUp",t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Ep(n,t){return Fn(n,"POST","/v1/accounts:signInWithPassword",Gt(n,t))}async function Ll(n,t){return se(n,"POST","/v1/accounts:sendOobCode",Gt(n,t))}async function Ip(n,t){return Ll(n,t)}async function Tp(n,t){return Ll(n,t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function wp(n,t){return Fn(n,"POST","/v1/accounts:signInWithEmailLink",Gt(n,t))}async function Ap(n,t){return Fn(n,"POST","/v1/accounts:signInWithEmailLink",Gt(n,t))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vn extends cs{constructor(t,e,r,s=null){super("password",r),this._email=t,this._password=e,this._tenantId=s}static _fromEmailAndPassword(t,e){return new Vn(t,e,"password")}static _fromEmailAndCode(t,e,r=null){return new Vn(t,e,"emailLink",r)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(t){const e=typeof t=="string"?JSON.parse(t):t;if(e!=null&&e.email&&(e!=null&&e.password)){if(e.signInMethod==="password")return this._fromEmailAndPassword(e.email,e.password);if(e.signInMethod==="emailLink")return this._fromEmailAndCode(e.email,e.password,e.tenantId)}return null}async _getIdTokenResponse(t){switch(this.signInMethod){case"password":const e={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return Ar(t,e,"signInWithPassword",Ep);case"emailLink":return wp(t,{email:this._email,oobCode:this._password});default:qt(t,"internal-error")}}async _linkToIdToken(t,e){switch(this.signInMethod){case"password":const r={idToken:e,returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return Ar(t,r,"signUpPassword",vp);case"emailLink":return Ap(t,{idToken:e,email:this._email,oobCode:this._password});default:qt(t,"internal-error")}}_getReauthenticationResolver(t){return this._getIdTokenResponse(t)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Oe(n,t){return Fn(n,"POST","/v1/accounts:signInWithIdp",Gt(n,t))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Rp="http://localhost";class Ie extends cs{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(t){const e=new Ie(t.providerId,t.signInMethod);return t.idToken||t.accessToken?(t.idToken&&(e.idToken=t.idToken),t.accessToken&&(e.accessToken=t.accessToken),t.nonce&&!t.pendingToken&&(e.nonce=t.nonce),t.pendingToken&&(e.pendingToken=t.pendingToken)):t.oauthToken&&t.oauthTokenSecret?(e.accessToken=t.oauthToken,e.secret=t.oauthTokenSecret):qt("argument-error"),e}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(t){const e=typeof t=="string"?JSON.parse(t):t,{providerId:r,signInMethod:s}=e,o=Vi(e,["providerId","signInMethod"]);if(!r||!s)return null;const l=new Ie(r,s);return l.idToken=o.idToken||void 0,l.accessToken=o.accessToken||void 0,l.secret=o.secret,l.nonce=o.nonce,l.pendingToken=o.pendingToken||null,l}_getIdTokenResponse(t){const e=this.buildRequest();return Oe(t,e)}_linkToIdToken(t,e){const r=this.buildRequest();return r.idToken=e,Oe(t,r)}_getReauthenticationResolver(t){const e=this.buildRequest();return e.autoCreate=!1,Oe(t,e)}buildRequest(){const t={requestUri:Rp,returnSecureToken:!0};if(this.pendingToken)t.pendingToken=this.pendingToken;else{const e={};this.idToken&&(e.id_token=this.idToken),this.accessToken&&(e.access_token=this.accessToken),this.secret&&(e.oauth_token_secret=this.secret),e.providerId=this.providerId,this.nonce&&!this.pendingToken&&(e.nonce=this.nonce),t.postBody=Fi(e)}return t}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Pp(n){switch(n){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function Sp(n){const t=pn(mn(n)).link,e=t?pn(mn(t)).deep_link_id:null,r=pn(mn(n)).deep_link_id;return(r?pn(mn(r)).link:null)||r||e||t||n}class us{constructor(t){var e,r,s,o,l,u;const h=pn(mn(t)),f=(e=h.apiKey)!==null&&e!==void 0?e:null,I=(r=h.oobCode)!==null&&r!==void 0?r:null,A=Pp((s=h.mode)!==null&&s!==void 0?s:null);x(f&&I&&A,"argument-error"),this.apiKey=f,this.operation=A,this.code=I,this.continueUrl=(o=h.continueUrl)!==null&&o!==void 0?o:null,this.languageCode=(l=h.languageCode)!==null&&l!==void 0?l:null,this.tenantId=(u=h.tenantId)!==null&&u!==void 0?u:null}static parseLink(t){const e=Sp(t);try{return new us(e)}catch{return null}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ke{constructor(){this.providerId=Ke.PROVIDER_ID}static credential(t,e){return Vn._fromEmailAndPassword(t,e)}static credentialWithLink(t,e){const r=us.parseLink(e);return x(r,"argument-error"),Vn._fromEmailAndCode(t,r.code,r.tenantId)}}Ke.PROVIDER_ID="password";Ke.EMAIL_PASSWORD_SIGN_IN_METHOD="password";Ke.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fl{constructor(t){this.providerId=t,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(t){this.defaultLanguageCode=t}setCustomParameters(t){return this.customParameters=t,this}getCustomParameters(){return this.customParameters}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mr extends Fl{constructor(){super(...arguments),this.scopes=[]}addScope(t){return this.scopes.includes(t)||this.scopes.push(t),this}getScopes(){return[...this.scopes]}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jt extends Mr{constructor(){super("facebook.com")}static credential(t){return Ie._fromParams({providerId:Jt.PROVIDER_ID,signInMethod:Jt.FACEBOOK_SIGN_IN_METHOD,accessToken:t})}static credentialFromResult(t){return Jt.credentialFromTaggedObject(t)}static credentialFromError(t){return Jt.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t||!("oauthAccessToken"in t)||!t.oauthAccessToken)return null;try{return Jt.credential(t.oauthAccessToken)}catch{return null}}}Jt.FACEBOOK_SIGN_IN_METHOD="facebook.com";Jt.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xt extends Mr{constructor(){super("google.com"),this.addScope("profile")}static credential(t,e){return Ie._fromParams({providerId:xt.PROVIDER_ID,signInMethod:xt.GOOGLE_SIGN_IN_METHOD,idToken:t,accessToken:e})}static credentialFromResult(t){return xt.credentialFromTaggedObject(t)}static credentialFromError(t){return xt.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t)return null;const{oauthIdToken:e,oauthAccessToken:r}=t;if(!e&&!r)return null;try{return xt.credential(e,r)}catch{return null}}}xt.GOOGLE_SIGN_IN_METHOD="google.com";xt.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Lt extends Mr{constructor(){super("github.com")}static credential(t){return Ie._fromParams({providerId:Lt.PROVIDER_ID,signInMethod:Lt.GITHUB_SIGN_IN_METHOD,accessToken:t})}static credentialFromResult(t){return Lt.credentialFromTaggedObject(t)}static credentialFromError(t){return Lt.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t||!("oauthAccessToken"in t)||!t.oauthAccessToken)return null;try{return Lt.credential(t.oauthAccessToken)}catch{return null}}}Lt.GITHUB_SIGN_IN_METHOD="github.com";Lt.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ft extends Mr{constructor(){super("twitter.com")}static credential(t,e){return Ie._fromParams({providerId:Ft.PROVIDER_ID,signInMethod:Ft.TWITTER_SIGN_IN_METHOD,oauthToken:t,oauthTokenSecret:e})}static credentialFromResult(t){return Ft.credentialFromTaggedObject(t)}static credentialFromError(t){return Ft.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t)return null;const{oauthAccessToken:e,oauthTokenSecret:r}=t;if(!e||!r)return null;try{return Ft.credential(e,r)}catch{return null}}}Ft.TWITTER_SIGN_IN_METHOD="twitter.com";Ft.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function bp(n,t){return Fn(n,"POST","/v1/accounts:signUp",Gt(n,t))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Te{constructor(t){this.user=t.user,this.providerId=t.providerId,this._tokenResponse=t._tokenResponse,this.operationType=t.operationType}static async _fromIdTokenResponse(t,e,r,s=!1){const o=await Bt._fromIdTokenResponse(t,r,s),l=aa(r);return new Te({user:o,providerId:l,_tokenResponse:r,operationType:e})}static async _forOperation(t,e,r){await t._updateTokensIfNecessary(r,!0);const s=aa(r);return new Te({user:t,providerId:s,_tokenResponse:r,operationType:e})}}function aa(n){return n.providerId?n.providerId:"phoneNumber"in n?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rr extends Ht{constructor(t,e,r,s){var o;super(e.code,e.message),this.operationType=r,this.user=s,Object.setPrototypeOf(this,Rr.prototype),this.customData={appName:t.name,tenantId:(o=t.tenantId)!==null&&o!==void 0?o:void 0,_serverResponse:e.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(t,e,r,s){return new Rr(t,e,r,s)}}function Ul(n,t,e,r){return(t==="reauthenticate"?e._getReauthenticationResolver(n):e._getIdTokenResponse(n)).catch(o=>{throw o.code==="auth/multi-factor-auth-required"?Rr._fromErrorAndOperation(n,o,t,r):o})}async function Cp(n,t,e=!1){const r=await kn(n,t._linkToIdToken(n.auth,await n.getIdToken()),e);return Te._forOperation(n,"link",r)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function kp(n,t,e=!1){const{auth:r}=n;if(Ct(r.app))return Promise.reject(ee(r));const s="reauthenticate";try{const o=await kn(n,Ul(r,s,t,n),e);x(o.idToken,r,"internal-error");const l=as(o.idToken);x(l,r,"internal-error");const{sub:u}=l;return x(n.uid===u,r,"user-mismatch"),Te._forOperation(n,s,o)}catch(o){throw(o==null?void 0:o.code)==="auth/user-not-found"&&qt(r,"user-mismatch"),o}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Bl(n,t,e=!1){if(Ct(n.app))return Promise.reject(ee(n));const r="signIn",s=await Ul(n,r,t),o=await Te._fromIdTokenResponse(n,r,s);return e||await n._updateCurrentUser(o.user),o}async function Vp(n,t){return Bl(Re(n),t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function jl(n){const t=Re(n);t._getPasswordPolicyInternal()&&await t._updatePasswordPolicy()}async function Np(n,t,e){const r=Re(n);await Ar(r,{requestType:"PASSWORD_RESET",email:t,clientType:"CLIENT_TYPE_WEB"},"getOobCode",Tp)}async function Dp(n,t,e){if(Ct(n.app))return Promise.reject(ee(n));const r=Re(n),l=await Ar(r,{returnSecureToken:!0,email:t,password:e,clientType:"CLIENT_TYPE_WEB"},"signUpPassword",bp).catch(h=>{throw h.code==="auth/password-does-not-meet-requirements"&&jl(n),h}),u=await Te._fromIdTokenResponse(r,"signIn",l);return await r._updateCurrentUser(u.user),u}function Op(n,t,e){return Ct(n.app)?Promise.reject(ee(n)):Vp(Pt(n),Ke.credential(t,e)).catch(async r=>{throw r.code==="auth/password-does-not-meet-requirements"&&jl(n),r})}async function Mp(n,t){const e=Pt(n),s={requestType:"VERIFY_EMAIL",idToken:await n.getIdToken()},{email:o}=await Ip(e.auth,s);o!==n.email&&await n.reload()}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function xp(n="",t=10){let e="";for(let r=0;r<t;r++)e+=Math.floor(Math.random()*10);return n+e}new Ln(3e4,6e4);/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Lp(n,t){return x(n._popupRedirectResolver,n,"argument-error"),n._popupRedirectResolver}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hs extends cs{constructor(t){super("custom","custom"),this.params=t}_getIdTokenResponse(t){return Oe(t,this._buildIdpRequest())}_linkToIdToken(t,e){return Oe(t,this._buildIdpRequest(e))}_getReauthenticationResolver(t){return Oe(t,this._buildIdpRequest())}_buildIdpRequest(t){const e={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return t&&(e.idToken=t),e}}function Fp(n){return Bl(n.auth,new hs(n),n.bypassAuthState)}function Up(n){const{auth:t,user:e}=n;return x(e,t,"internal-error"),kp(e,new hs(n),n.bypassAuthState)}async function Bp(n){const{auth:t,user:e}=n;return x(e,t,"internal-error"),Cp(e,new hs(n),n.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jp{constructor(t,e,r,s,o=!1){this.auth=t,this.resolver=r,this.user=s,this.bypassAuthState=o,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(e)?e:[e]}execute(){return new Promise(async(t,e)=>{this.pendingPromise={resolve:t,reject:e};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(t){const{urlResponse:e,sessionId:r,postBody:s,tenantId:o,error:l,type:u}=t;if(l){this.reject(l);return}const h={auth:this.auth,requestUri:e,sessionId:r,tenantId:o||void 0,postBody:s||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(u)(h))}catch(f){this.reject(f)}}onError(t){this.reject(t)}getIdpTask(t){switch(t){case"signInViaPopup":case"signInViaRedirect":return Fp;case"linkViaPopup":case"linkViaRedirect":return Bp;case"reauthViaPopup":case"reauthViaRedirect":return Up;default:qt(this.auth,"internal-error")}}resolve(t){Ee(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(t),this.unregisterAndCleanUp()}reject(t){Ee(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(t),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $p=new Ln(2e3,1e4);async function ds(n,t,e){if(Ct(n.app))return Promise.reject(ge(n,"operation-not-supported-in-this-environment"));const r=Re(n);Mf(n,t,Fl);const s=Lp(r);return new fe(r,"signInViaPopup",t,s).executeNotNull()}class fe extends jp{constructor(t,e,r,s,o){super(t,e,s,o),this.provider=r,this.authWindow=null,this.pollId=null,fe.currentPopupAction&&fe.currentPopupAction.cancel(),fe.currentPopupAction=this}async executeNotNull(){const t=await this.execute();return x(t,this.auth,"internal-error"),t}async onExecution(){Ee(this.filter.length===1,"Popup operations only handle one event");const t=xp();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],t),this.authWindow.associatedEvent=t,this.resolver._originValidation(this.auth).catch(e=>{this.reject(e)}),this.resolver._isIframeWebStorageSupported(this.auth,e=>{e||this.reject(ge(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var t;return((t=this.authWindow)===null||t===void 0?void 0:t.associatedEvent)||null}cancel(){this.reject(ge(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,fe.currentPopupAction=null}pollUserCancellation(){const t=()=>{var e,r;if(!((r=(e=this.authWindow)===null||e===void 0?void 0:e.window)===null||r===void 0)&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(ge(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(t,$p.get())};t()}}fe.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */new Ln(3e4,6e4);/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */new Ln(5e3,15e3);var la="@firebase/auth",ca="1.7.7";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qp{constructor(t){this.auth=t,this.internalListeners=new Map}getUid(){var t;return this.assertAuthConfigured(),((t=this.auth.currentUser)===null||t===void 0?void 0:t.uid)||null}async getToken(t){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(t)}:null}addAuthTokenListener(t){if(this.assertAuthConfigured(),this.internalListeners.has(t))return;const e=this.auth.onIdTokenChanged(r=>{t((r==null?void 0:r.stsTokenManager.accessToken)||null)});this.internalListeners.set(t,e),this.updateProactiveRefresh()}removeAuthTokenListener(t){this.assertAuthConfigured();const e=this.internalListeners.get(t);e&&(this.internalListeners.delete(t),e(),this.updateProactiveRefresh())}assertAuthConfigured(){x(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Hp(n){switch(n){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function Gp(n){Fe(new Le("auth",(t,{options:e})=>{const r=t.getProvider("app").getImmediate(),s=t.getProvider("heartbeat"),o=t.getProvider("app-check-internal"),{apiKey:l,authDomain:u}=r.options;x(l&&!l.includes(":"),"invalid-api-key",{appName:r.name});const h={apiKey:l,authDomain:u,clientPlatform:n,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:xl(n)},f=new hp(r,s,o,h);return yp(f,e),f},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((t,e,r)=>{t.getProvider("auth-internal").initialize()})),Fe(new Le("auth-internal",t=>{const e=Re(t.getProvider("auth").getImmediate());return(r=>new qp(r))(e)},"PRIVATE").setInstantiationMode("EXPLICIT")),Zt(la,ca,Hp(n)),Zt(la,ca,"esm2017")}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Kp=5*60;jc("authIdTokenMaxAge");function Wp(){var n,t;return(t=(n=document.getElementsByTagName("head"))===null||n===void 0?void 0:n[0])!==null&&t!==void 0?t:document}dp({loadJS(n){return new Promise((t,e)=>{const r=document.createElement("script");r.setAttribute("src",n),r.onload=t,r.onerror=s=>{const o=ge("internal-error");o.customData=s,e(o)},r.type="text/javascript",r.charset="UTF-8",Wp().appendChild(r)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});Gp("Browser");var zp="firebase",Qp="10.13.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Zt(zp,Qp,"app");const we={},Xp={},Jp=async({email:n,password:t})=>{try{await Op(we,n,t);const e=we.currentUser;if(!(e!=null&&e.emailVerified))throw new Error("Email not verified!")}catch(e){throw console.error("Error during sign in with password:",e),e}},$l=async()=>{const n=new xt;await ds(we,n)},ql=async()=>{const n=new Lt;await ds(we,n)},Hl=async()=>{const n=new Ft;await ds(we,n)},Yp=async({email:n,password:t,firstName:e,lastName:r})=>{var s,o;try{const l=await Dp(we,n,t);await Mp(l.user);const u=yf(_f(Xp,"users"),(s=l.user)==null?void 0:s.uid);await Vf(u,{uid:(o=l.user)==null?void 0:o.uid,email:n,displayName:`${e} ${r}`})}catch(l){throw console.error("Error during sign up:",l),l}},Zp=async({email:n})=>{await Np(we,n)},tm=bt.object({email:bt.string().min(1,{message:"Email is required!"}).email({message:"Email must be a valid email address!"}),password:bt.string().min(1,{message:"Password is required!"}).min(6,{message:"Password must be at least 6 characters!"})});function am(){const n=Ni(),{checkUserSession:t}=kc(),[e,r]=ua.useState(""),s=ha(),o={email:"",password:""},l=Di({resolver:Li(tm),defaultValues:o}),{handleSubmit:u,formState:{isSubmitting:h}}=l,f=u(async k=>{try{await Jp({email:k.email,password:k.password}),await(t==null?void 0:t()),n.refresh()}catch(O){console.error(O),r(typeof O=="string"?O:O.message)}}),I=async()=>{try{await $l()}catch(k){console.error(k)}},A=async()=>{try{await ql()}catch(k){console.error(k)}},P=async()=>{try{await Hl()}catch(k){console.error(k)}},C=V.jsxs(Me,{gap:3,display:"flex",flexDirection:"column",children:[V.jsx(ue.Text,{name:"email",label:"Email address",InputLabelProps:{shrink:!0}}),V.jsxs(Me,{gap:1.5,display:"flex",flexDirection:"column",children:[V.jsx(gi,{component:_i,href:xe.auth.firebase.resetPassword,variant:"body2",color:"inherit",sx:{alignSelf:"flex-end"},children:"Forgot password?"}),V.jsx(ue.Text,{name:"password",label:"Password",placeholder:"6+ characters",type:s.value?"text":"password",InputLabelProps:{shrink:!0},InputProps:{endAdornment:V.jsx(da,{position:"end",children:V.jsx(_n,{onClick:s.onToggle,edge:"end",children:V.jsx(fa,{icon:s.value?"solar:eye-bold":"solar:eye-closed-bold"})})})}})]}),V.jsx(Oi,{fullWidth:!0,color:"inherit",size:"large",type:"submit",variant:"contained",loading:h,loadingIndicator:"Sign in...",children:"Sign in"})]});return V.jsxs(V.Fragment,{children:[V.jsx(Mi,{title:"Sign in to your account",description:V.jsxs(V.Fragment,{children:["Don’t have an account? ",V.jsx(gi,{component:_i,href:xe.auth.firebase.signUp,variant:"subtitle2",children:"Get started"})]}),sx:{textAlign:{xs:"center",md:"left"}}}),!!e&&V.jsx(pa,{severity:"error",sx:{mb:3},children:e}),V.jsx(xi,{methods:l,onSubmit:f,children:C}),V.jsx(ma,{}),V.jsx(ga,{signInWithGoogle:I,singInWithGithub:A,signInWithTwitter:P})]})}const em=bt.object({firstName:bt.string().min(1,{message:"First name is required!"}),lastName:bt.string().min(1,{message:"Last name is required!"}),email:bt.string().min(1,{message:"Email is required!"}).email({message:"Email must be a valid email address!"}),password:bt.string().min(1,{message:"Password is required!"}).min(6,{message:"Password must be at least 6 characters!"})});function lm(){const[n,t]=ua.useState(""),e=Ni(),r=ha(),s={firstName:"",lastName:"",email:"",password:""},o=Di({resolver:Li(em),defaultValues:s}),{handleSubmit:l,formState:{isSubmitting:u}}=o,h=l(async C=>{try{await Yp({email:C.email,password:C.password,firstName:C.firstName,lastName:C.lastName});const k=new URLSearchParams({email:C.email}).toString(),O=`${xe.auth.firebase.verify}?${k}`;e.push(O)}catch(k){console.error(k),t(typeof k=="string"?k:k.message)}}),f=async()=>{try{await $l()}catch(C){console.error(C)}},I=async()=>{try{await ql()}catch(C){console.error(C)}},A=async()=>{try{await Hl()}catch(C){console.error(C)}},P=V.jsxs(Me,{gap:3,display:"flex",flexDirection:"column",children:[V.jsxs(Me,{display:"flex",gap:{xs:3,sm:2},flexDirection:{xs:"column",sm:"row"},children:[V.jsx(ue.Text,{name:"firstName",label:"First name",InputLabelProps:{shrink:!0}}),V.jsx(ue.Text,{name:"lastName",label:"Last name",InputLabelProps:{shrink:!0}})]}),V.jsx(ue.Text,{name:"email",label:"Email address",InputLabelProps:{shrink:!0}}),V.jsx(ue.Text,{name:"password",label:"Password",placeholder:"6+ characters",type:r.value?"text":"password",InputLabelProps:{shrink:!0},InputProps:{endAdornment:V.jsx(da,{position:"end",children:V.jsx(_n,{onClick:r.onToggle,edge:"end",children:V.jsx(fa,{icon:r.value?"solar:eye-bold":"solar:eye-closed-bold"})})})}}),V.jsx(Oi,{fullWidth:!0,color:"inherit",size:"large",type:"submit",variant:"contained",loading:u,loadingIndicator:"Create account...",children:"Create account"})]});return V.jsxs(V.Fragment,{children:[V.jsx(Mi,{title:"Get started absolutely free",description:V.jsxs(V.Fragment,{children:["Already have an account? ",V.jsx(gi,{component:_i,href:xe.auth.firebase.signIn,variant:"subtitle2",children:"Get started"})]}),sx:{textAlign:{xs:"center",md:"left"}}}),!!n&&V.jsx(pa,{severity:"error",sx:{mb:3},children:n}),V.jsx(xi,{methods:o,onSubmit:h,children:P}),V.jsx(Vc,{}),V.jsx(ma,{}),V.jsx(ga,{signInWithGoogle:f,singInWithGithub:I,signInWithTwitter:A})]})}const nm=bt.object({email:bt.string().min(1,{message:"Email is required!"}).email({message:"Email must be a valid email address!"})});function cm(){const n=Ni(),t={email:""},e=Di({resolver:Li(nm),defaultValues:t}),{handleSubmit:r,formState:{isSubmitting:s}}=e,o=r(async u=>{try{await Zp({email:u.email});const h=new URLSearchParams({email:u.email}).toString(),f=`${xe.auth.firebase.verify}?${h}`;n.push(f)}catch(h){console.error(h)}}),l=V.jsxs(Me,{gap:3,display:"flex",flexDirection:"column",children:[V.jsx(ue.Text,{autoFocus:!0,name:"email",label:"Email address",placeholder:"example@gmail.com",InputLabelProps:{shrink:!0}}),V.jsx(Oi,{fullWidth:!0,size:"large",type:"submit",variant:"contained",loading:s,loadingIndicator:"Send request...",children:"Send request"})]});return V.jsxs(V.Fragment,{children:[V.jsx(Mi,{icon:V.jsx(Nc,{}),title:"Forgot your password?",description:"Please enter the email address associated with your account and we'll email you a link to reset your password."}),V.jsx(xi,{methods:e,onSubmit:o,children:l}),V.jsx(Dc,{href:xe.auth.firebase.signIn})]})}export{am as F,lm as a,cm as b};
