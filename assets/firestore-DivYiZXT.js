var _a=n=>{throw TypeError(n)};var Os=(n,t,e)=>t.has(n)||_a("Cannot "+e);var k=(n,t,e)=>(Os(n,t,"read from private field"),e?e.call(n):t.get(n)),ft=(n,t,e)=>t.has(n)?_a("Cannot add the same private member more than once"):t instanceof WeakSet?t.add(n):t.set(n,e),tt=(n,t,e,r)=>(Os(n,t,"write to private field"),r?r.call(n,e):t.set(n,e),e),ot=(n,t,e)=>(Os(n,t,"access private method"),e);import{S as Nh,p as ya,h as Ft,s as Ks,i as kn,n as Qs,k as Ws,l as Ea,t as xh,m as Oh,o as Mh,q as Ta,v as $u,a as Kt,w as Lh,x as Fh,e as Uh}from"./index-Btt7aoZE.js";var Ct,H,Kn,bt,Se,Ke,se,ie,Qn,Qe,We,Pe,Ve,oe,Xe,W,Sn,Xs,Ys,Js,Zs,ti,ei,ni,qu,ju,Bh=(ju=class extends Nh{constructor(t,e){super();ft(this,W);ft(this,Ct);ft(this,H);ft(this,Kn);ft(this,bt);ft(this,Se);ft(this,Ke);ft(this,se);ft(this,ie);ft(this,Qn);ft(this,Qe);ft(this,We);ft(this,Pe);ft(this,Ve);ft(this,oe);ft(this,Xe,new Set);this.options=e,tt(this,Ct,t),tt(this,ie,null),tt(this,se,ya()),this.options.experimental_prefetchInRender||k(this,se).reject(new Error("experimental_prefetchInRender feature flag is not enabled")),this.bindMethods(),this.setOptions(e)}bindMethods(){this.refetch=this.refetch.bind(this)}onSubscribe(){this.listeners.size===1&&(k(this,H).addObserver(this),va(k(this,H),this.options)?ot(this,W,Sn).call(this):this.updateResult(),ot(this,W,Zs).call(this))}onUnsubscribe(){this.hasListeners()||this.destroy()}shouldFetchOnReconnect(){return ri(k(this,H),this.options,this.options.refetchOnReconnect)}shouldFetchOnWindowFocus(){return ri(k(this,H),this.options,this.options.refetchOnWindowFocus)}destroy(){this.listeners=new Set,ot(this,W,ti).call(this),ot(this,W,ei).call(this),k(this,H).removeObserver(this)}setOptions(t){const e=this.options,r=k(this,H);if(this.options=k(this,Ct).defaultQueryOptions(t),this.options.enabled!==void 0&&typeof this.options.enabled!="boolean"&&typeof this.options.enabled!="function"&&typeof Ft(this.options.enabled,k(this,H))!="boolean")throw new Error("Expected enabled to be a boolean or a callback that returns a boolean");ot(this,W,ni).call(this),k(this,H).setOptions(this.options),e._defaulted&&!Ks(this.options,e)&&k(this,Ct).getQueryCache().notify({type:"observerOptionsUpdated",query:k(this,H),observer:this});const s=this.hasListeners();s&&Ia(k(this,H),r,this.options,e)&&ot(this,W,Sn).call(this),this.updateResult(),s&&(k(this,H)!==r||Ft(this.options.enabled,k(this,H))!==Ft(e.enabled,k(this,H))||kn(this.options.staleTime,k(this,H))!==kn(e.staleTime,k(this,H)))&&ot(this,W,Xs).call(this);const o=ot(this,W,Ys).call(this);s&&(k(this,H)!==r||Ft(this.options.enabled,k(this,H))!==Ft(e.enabled,k(this,H))||o!==k(this,oe))&&ot(this,W,Js).call(this,o)}getOptimisticResult(t){const e=k(this,Ct).getQueryCache().build(k(this,Ct),t),r=this.createResult(e,t);return $h(this,r)&&(tt(this,bt,r),tt(this,Ke,this.options),tt(this,Se,k(this,H).state)),r}getCurrentResult(){return k(this,bt)}trackResult(t,e){return new Proxy(t,{get:(r,s)=>(this.trackProp(s),e==null||e(s),Reflect.get(r,s))})}trackProp(t){k(this,Xe).add(t)}getCurrentQuery(){return k(this,H)}refetch({...t}={}){return this.fetch({...t})}fetchOptimistic(t){const e=k(this,Ct).defaultQueryOptions(t),r=k(this,Ct).getQueryCache().build(k(this,Ct),e);return r.fetch().then(()=>this.createResult(r,e))}fetch(t){return ot(this,W,Sn).call(this,{...t,cancelRefetch:t.cancelRefetch??!0}).then(()=>(this.updateResult(),k(this,bt)))}createResult(t,e){var _;const r=k(this,H),s=this.options,o=k(this,bt),a=k(this,Se),c=k(this,Ke),d=t!==r?t.state:k(this,Kn),{state:m}=t;let E={...m},I=!1,b;if(e._optimisticResults){const y=this.hasListeners(),T=!y&&va(t,e),A=y&&Ia(t,r,e,s);(T||A)&&(E={...E,...Mh(m.data,t.options)}),e._optimisticResults==="isRestoring"&&(E.fetchStatus="idle")}let{error:V,errorUpdatedAt:x,status:P}=E;b=E.data;let z=!1;if(e.placeholderData!==void 0&&b===void 0&&P==="pending"){let y;o!=null&&o.isPlaceholderData&&e.placeholderData===(c==null?void 0:c.placeholderData)?(y=o.data,z=!0):y=typeof e.placeholderData=="function"?e.placeholderData((_=k(this,We))==null?void 0:_.state.data,k(this,We)):e.placeholderData,y!==void 0&&(P="success",b=Ta(o==null?void 0:o.data,y,e),I=!0)}if(e.select&&b!==void 0&&!z)if(o&&b===(a==null?void 0:a.data)&&e.select===k(this,Qn))b=k(this,Qe);else try{tt(this,Qn,e.select),b=e.select(b),b=Ta(o==null?void 0:o.data,b,e),tt(this,Qe,b),tt(this,ie,null)}catch(y){tt(this,ie,y)}k(this,ie)&&(V=k(this,ie),b=k(this,Qe),x=Date.now(),P="error");const B=E.fetchStatus==="fetching",$=P==="pending",Z=P==="error",Nt=$&&B,it=b!==void 0,p={status:P,fetchStatus:E.fetchStatus,isPending:$,isSuccess:P==="success",isError:Z,isInitialLoading:Nt,isLoading:Nt,data:b,dataUpdatedAt:E.dataUpdatedAt,error:V,errorUpdatedAt:x,failureCount:E.fetchFailureCount,failureReason:E.fetchFailureReason,errorUpdateCount:E.errorUpdateCount,isFetched:E.dataUpdateCount>0||E.errorUpdateCount>0,isFetchedAfterMount:E.dataUpdateCount>d.dataUpdateCount||E.errorUpdateCount>d.errorUpdateCount,isFetching:B,isRefetching:B&&!$,isLoadingError:Z&&!it,isPaused:E.fetchStatus==="paused",isPlaceholderData:I,isRefetchError:Z&&it,isStale:bi(t,e),refetch:this.refetch,promise:k(this,se)};if(this.options.experimental_prefetchInRender){const y=g=>{p.status==="error"?g.reject(p.error):p.data!==void 0&&g.resolve(p.data)},T=()=>{const g=tt(this,se,p.promise=ya());y(g)},A=k(this,se);switch(A.status){case"pending":t.queryHash===r.queryHash&&y(A);break;case"fulfilled":(p.status==="error"||p.data!==A.value)&&T();break;case"rejected":(p.status!=="error"||p.error!==A.reason)&&T();break}}return p}updateResult(){const t=k(this,bt),e=this.createResult(k(this,H),this.options);if(tt(this,Se,k(this,H).state),tt(this,Ke,this.options),k(this,Se).data!==void 0&&tt(this,We,k(this,H)),Ks(e,t))return;tt(this,bt,e);const r=()=>{if(!t)return!0;const{notifyOnChangeProps:s}=this.options,o=typeof s=="function"?s():s;if(o==="all"||!o&&!k(this,Xe).size)return!0;const a=new Set(o??k(this,Xe));return this.options.throwOnError&&a.add("error"),Object.keys(k(this,bt)).some(c=>{const h=c;return k(this,bt)[h]!==t[h]&&a.has(h)})};ot(this,W,qu).call(this,{listeners:r()})}onQueryUpdate(){this.updateResult(),this.hasListeners()&&ot(this,W,Zs).call(this)}},Ct=new WeakMap,H=new WeakMap,Kn=new WeakMap,bt=new WeakMap,Se=new WeakMap,Ke=new WeakMap,se=new WeakMap,ie=new WeakMap,Qn=new WeakMap,Qe=new WeakMap,We=new WeakMap,Pe=new WeakMap,Ve=new WeakMap,oe=new WeakMap,Xe=new WeakMap,W=new WeakSet,Sn=function(t){ot(this,W,ni).call(this);let e=k(this,H).fetch(this.options,t);return t!=null&&t.throwOnError||(e=e.catch(Qs)),e},Xs=function(){ot(this,W,ti).call(this);const t=kn(this.options.staleTime,k(this,H));if(Ws||k(this,bt).isStale||!Ea(t))return;const r=xh(k(this,bt).dataUpdatedAt,t)+1;tt(this,Pe,setTimeout(()=>{k(this,bt).isStale||this.updateResult()},r))},Ys=function(){return(typeof this.options.refetchInterval=="function"?this.options.refetchInterval(k(this,H)):this.options.refetchInterval)??!1},Js=function(t){ot(this,W,ei).call(this),tt(this,oe,t),!(Ws||Ft(this.options.enabled,k(this,H))===!1||!Ea(k(this,oe))||k(this,oe)===0)&&tt(this,Ve,setInterval(()=>{(this.options.refetchIntervalInBackground||Oh.isFocused())&&ot(this,W,Sn).call(this)},k(this,oe)))},Zs=function(){ot(this,W,Xs).call(this),ot(this,W,Js).call(this,ot(this,W,Ys).call(this))},ti=function(){k(this,Pe)&&(clearTimeout(k(this,Pe)),tt(this,Pe,void 0))},ei=function(){k(this,Ve)&&(clearInterval(k(this,Ve)),tt(this,Ve,void 0))},ni=function(){const t=k(this,Ct).getQueryCache().build(k(this,Ct),this.options);if(t===k(this,H))return;const e=k(this,H);tt(this,H,t),tt(this,Kn,t.state),this.hasListeners()&&(e==null||e.removeObserver(this),t.addObserver(this))},qu=function(t){$u.batch(()=>{t.listeners&&this.listeners.forEach(e=>{e(k(this,bt))}),k(this,Ct).getQueryCache().notify({query:k(this,H),type:"observerResultsUpdated"})})},ju);function jh(n,t){return Ft(t.enabled,n)!==!1&&n.state.data===void 0&&!(n.state.status==="error"&&t.retryOnMount===!1)}function va(n,t){return jh(n,t)||n.state.data!==void 0&&ri(n,t,t.refetchOnMount)}function ri(n,t,e){if(Ft(t.enabled,n)!==!1&&kn(t.staleTime,n)!=="static"){const r=typeof e=="function"?e(n):e;return r==="always"||r!==!1&&bi(n,t)}return!1}function Ia(n,t,e,r){return(n!==t||Ft(r.enabled,n)===!1)&&(!e.suspense||n.state.status!=="error")&&bi(n,e)}function bi(n,t){return Ft(t.enabled,n)!==!1&&n.isStaleByTime(kn(t.staleTime,n))}function $h(n,t){return!Ks(n.getCurrentResult(),t)}var zu=Kt.createContext(!1),qh=()=>Kt.useContext(zu);zu.Provider;function zh(){let n=!1;return{clearReset:()=>{n=!1},reset:()=>{n=!0},isReset:()=>n}}var Hh=Kt.createContext(zh()),Gh=()=>Kt.useContext(Hh),Kh=(n,t)=>{(n.suspense||n.throwOnError||n.experimental_prefetchInRender)&&(t.isReset()||(n.retryOnMount=!1))},Qh=n=>{Kt.useEffect(()=>{n.clearReset()},[n])},Wh=({result:n,errorResetBoundary:t,throwOnError:e,query:r,suspense:s})=>n.isError&&!t.isReset()&&!n.isFetching&&r&&(s&&n.data===void 0||Lh(e,[n.error,r])),Xh=n=>{if(n.suspense){const t=r=>r==="static"?r:Math.max(r??1e3,1e3),e=n.staleTime;n.staleTime=typeof e=="function"?(...r)=>t(e(...r)):t(e),typeof n.gcTime=="number"&&(n.gcTime=Math.max(n.gcTime,1e3))}},Yh=(n,t)=>n.isLoading&&n.isFetching&&!t,Jh=(n,t)=>(n==null?void 0:n.suspense)&&t.isPending,wa=(n,t,e)=>t.fetchOptimistic(n).catch(()=>{e.clearReset()});function Zh(n,t,e){var E,I,b,V,x;const r=qh(),s=Gh(),o=Fh(),a=o.defaultQueryOptions(n);(I=(E=o.getDefaultOptions().queries)==null?void 0:E._experimental_beforeQuery)==null||I.call(E,a),a._optimisticResults=r?"isRestoring":"optimistic",Xh(a),Kh(a,s),Qh(s);const c=!o.getQueryCache().get(a.queryHash),[h]=Kt.useState(()=>new t(o,a)),d=h.getOptimisticResult(a),m=!r&&n.subscribed!==!1;if(Kt.useSyncExternalStore(Kt.useCallback(P=>{const z=m?h.subscribe($u.batchCalls(P)):Qs;return h.updateResult(),z},[h,m]),()=>h.getCurrentResult(),()=>h.getCurrentResult()),Kt.useEffect(()=>{h.setOptions(a)},[a,h]),Jh(a,d))throw wa(a,h,s);if(Wh({result:d,errorResetBoundary:s,throwOnError:a.throwOnError,query:o.getQueryCache().get(a.queryHash),suspense:a.suspense}))throw d.error;if((V=(b=o.getDefaultOptions().queries)==null?void 0:b._experimental_afterQuery)==null||V.call(b,a,d),a.experimental_prefetchInRender&&!Ws&&Yh(d,r)){const P=c?wa(a,h,s):(x=o.getQueryCache().get(a.queryHash))==null?void 0:x.promise;P==null||P.catch(Qs).finally(()=>{h.updateResult()})}return a.notifyOnChangeProps?d:h.trackResult(d)}function td(n,t){return Zh(n,Bh)}const ed=()=>{};var Aa={};/**
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
 */const Hu=function(n){const t=[];let e=0;for(let r=0;r<n.length;r++){let s=n.charCodeAt(r);s<128?t[e++]=s:s<2048?(t[e++]=s>>6|192,t[e++]=s&63|128):(s&64512)===55296&&r+1<n.length&&(n.charCodeAt(r+1)&64512)===56320?(s=65536+((s&1023)<<10)+(n.charCodeAt(++r)&1023),t[e++]=s>>18|240,t[e++]=s>>12&63|128,t[e++]=s>>6&63|128,t[e++]=s&63|128):(t[e++]=s>>12|224,t[e++]=s>>6&63|128,t[e++]=s&63|128)}return t},nd=function(n){const t=[];let e=0,r=0;for(;e<n.length;){const s=n[e++];if(s<128)t[r++]=String.fromCharCode(s);else if(s>191&&s<224){const o=n[e++];t[r++]=String.fromCharCode((s&31)<<6|o&63)}else if(s>239&&s<365){const o=n[e++],a=n[e++],c=n[e++],h=((s&7)<<18|(o&63)<<12|(a&63)<<6|c&63)-65536;t[r++]=String.fromCharCode(55296+(h>>10)),t[r++]=String.fromCharCode(56320+(h&1023))}else{const o=n[e++],a=n[e++];t[r++]=String.fromCharCode((s&15)<<12|(o&63)<<6|a&63)}}return t.join("")},Gu={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(n,t){if(!Array.isArray(n))throw Error("encodeByteArray takes an array as a parameter");this.init_();const e=t?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let s=0;s<n.length;s+=3){const o=n[s],a=s+1<n.length,c=a?n[s+1]:0,h=s+2<n.length,d=h?n[s+2]:0,m=o>>2,E=(o&3)<<4|c>>4;let I=(c&15)<<2|d>>6,b=d&63;h||(b=64,a||(I=64)),r.push(e[m],e[E],e[I],e[b])}return r.join("")},encodeString(n,t){return this.HAS_NATIVE_SUPPORT&&!t?btoa(n):this.encodeByteArray(Hu(n),t)},decodeString(n,t){return this.HAS_NATIVE_SUPPORT&&!t?atob(n):nd(this.decodeStringToByteArray(n,t))},decodeStringToByteArray(n,t){this.init_();const e=t?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let s=0;s<n.length;){const o=e[n.charAt(s++)],c=s<n.length?e[n.charAt(s)]:0;++s;const d=s<n.length?e[n.charAt(s)]:64;++s;const E=s<n.length?e[n.charAt(s)]:64;if(++s,o==null||c==null||d==null||E==null)throw new rd;const I=o<<2|c>>4;if(r.push(I),d!==64){const b=c<<4&240|d>>2;if(r.push(b),E!==64){const V=d<<6&192|E;r.push(V)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let n=0;n<this.ENCODED_VALS.length;n++)this.byteToCharMap_[n]=this.ENCODED_VALS.charAt(n),this.charToByteMap_[this.byteToCharMap_[n]]=n,this.byteToCharMapWebSafe_[n]=this.ENCODED_VALS_WEBSAFE.charAt(n),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[n]]=n,n>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(n)]=n,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(n)]=n)}}};class rd extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const sd=function(n){const t=Hu(n);return Gu.encodeByteArray(t,!0)},Pr=function(n){return sd(n).replace(/\./g,"")},id=function(n){try{return Gu.decodeString(n,!0)}catch(t){console.error("base64Decode failed: ",t)}return null};/**
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
 */function od(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const ad=()=>od().__FIREBASE_DEFAULTS__,ud=()=>{if(typeof process>"u"||typeof Aa>"u")return;const n=Aa.__FIREBASE_DEFAULTS__;if(n)return JSON.parse(n)},cd=()=>{if(typeof document>"u")return;let n;try{n=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const t=n&&id(n[1]);return t&&JSON.parse(t)},Ci=()=>{try{return ed()||ad()||ud()||cd()}catch(n){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${n}`);return}},ld=n=>{var t,e;return(e=(t=Ci())===null||t===void 0?void 0:t.emulatorHosts)===null||e===void 0?void 0:e[n]},hd=n=>{const t=ld(n);if(!t)return;const e=t.lastIndexOf(":");if(e<=0||e+1===t.length)throw new Error(`Invalid host ${t} with no separate hostname and port!`);const r=parseInt(t.substring(e+1),10);return t[0]==="["?[t.substring(1,e-1),r]:[t.substring(0,e),r]},Ku=()=>{var n;return(n=Ci())===null||n===void 0?void 0:n.config};/**
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
 */class dd{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((t,e)=>{this.resolve=t,this.reject=e})}wrapCallback(t){return(e,r)=>{e?this.reject(e):this.resolve(r),typeof t=="function"&&(this.promise.catch(()=>{}),t.length===1?t(e):t(e,r))}}}/**
 * @license
 * Copyright 2025 Google LLC
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
 */function Si(n){return n.endsWith(".cloudworkstations.dev")}async function fd(n){return(await fetch(n,{credentials:"include"})).ok}/**
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
 */function pd(n,t){if(n.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const e={alg:"none",type:"JWT"},r=t||"demo-project",s=n.iat||0,o=n.sub||n.user_id;if(!o)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const a=Object.assign({iss:`https://securetoken.google.com/${r}`,aud:r,iat:s,exp:s+3600,auth_time:s,sub:o,user_id:o,firebase:{sign_in_provider:"custom",identities:{}}},n);return[Pr(JSON.stringify(e)),Pr(JSON.stringify(a)),""].join(".")}const Nn={};function md(){const n={prod:[],emulator:[]};for(const t of Object.keys(Nn))Nn[t]?n.emulator.push(t):n.prod.push(t);return n}function gd(n){let t=document.getElementById(n),e=!1;return t||(t=document.createElement("div"),t.setAttribute("id",n),e=!0),{created:e,element:t}}let Ra=!1;function _d(n,t){if(typeof window>"u"||typeof document>"u"||!Si(window.location.host)||Nn[n]===t||Nn[n]||Ra)return;Nn[n]=t;function e(I){return`__firebase__banner__${I}`}const r="__firebase__banner",o=md().prod.length>0;function a(){const I=document.getElementById(r);I&&I.remove()}function c(I){I.style.display="flex",I.style.background="#7faaf0",I.style.position="fixed",I.style.bottom="5px",I.style.left="5px",I.style.padding=".5em",I.style.borderRadius="5px",I.style.alignItems="center"}function h(I,b){I.setAttribute("width","24"),I.setAttribute("id",b),I.setAttribute("height","24"),I.setAttribute("viewBox","0 0 24 24"),I.setAttribute("fill","none"),I.style.marginLeft="-6px"}function d(){const I=document.createElement("span");return I.style.cursor="pointer",I.style.marginLeft="16px",I.style.fontSize="24px",I.innerHTML=" &times;",I.onclick=()=>{Ra=!0,a()},I}function m(I,b){I.setAttribute("id",b),I.innerText="Learn more",I.href="https://firebase.google.com/docs/studio/preview-apps#preview-backend",I.setAttribute("target","__blank"),I.style.paddingLeft="5px",I.style.textDecoration="underline"}function E(){const I=gd(r),b=e("text"),V=document.getElementById(b)||document.createElement("span"),x=e("learnmore"),P=document.getElementById(x)||document.createElement("a"),z=e("preprendIcon"),B=document.getElementById(z)||document.createElementNS("http://www.w3.org/2000/svg","svg");if(I.created){const $=I.element;c($),m(P,x);const Z=d();h(B,z),$.append(B,V,P,Z),document.body.appendChild($)}o?(V.innerText="Preview backend disconnected.",B.innerHTML=`<g clip-path="url(#clip0_6013_33858)">
<path d="M4.8 17.6L12 5.6L19.2 17.6H4.8ZM6.91667 16.4H17.0833L12 7.93333L6.91667 16.4ZM12 15.6C12.1667 15.6 12.3056 15.5444 12.4167 15.4333C12.5389 15.3111 12.6 15.1667 12.6 15C12.6 14.8333 12.5389 14.6944 12.4167 14.5833C12.3056 14.4611 12.1667 14.4 12 14.4C11.8333 14.4 11.6889 14.4611 11.5667 14.5833C11.4556 14.6944 11.4 14.8333 11.4 15C11.4 15.1667 11.4556 15.3111 11.5667 15.4333C11.6889 15.5444 11.8333 15.6 12 15.6ZM11.4 13.6H12.6V10.4H11.4V13.6Z" fill="#212121"/>
</g>
<defs>
<clipPath id="clip0_6013_33858">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>`):(B.innerHTML=`<g clip-path="url(#clip0_6083_34804)">
<path d="M11.4 15.2H12.6V11.2H11.4V15.2ZM12 10C12.1667 10 12.3056 9.94444 12.4167 9.83333C12.5389 9.71111 12.6 9.56667 12.6 9.4C12.6 9.23333 12.5389 9.09444 12.4167 8.98333C12.3056 8.86111 12.1667 8.8 12 8.8C11.8333 8.8 11.6889 8.86111 11.5667 8.98333C11.4556 9.09444 11.4 9.23333 11.4 9.4C11.4 9.56667 11.4556 9.71111 11.5667 9.83333C11.6889 9.94444 11.8333 10 12 10ZM12 18.4C11.1222 18.4 10.2944 18.2333 9.51667 17.9C8.73889 17.5667 8.05556 17.1111 7.46667 16.5333C6.88889 15.9444 6.43333 15.2611 6.1 14.4833C5.76667 13.7056 5.6 12.8778 5.6 12C5.6 11.1111 5.76667 10.2833 6.1 9.51667C6.43333 8.73889 6.88889 8.06111 7.46667 7.48333C8.05556 6.89444 8.73889 6.43333 9.51667 6.1C10.2944 5.76667 11.1222 5.6 12 5.6C12.8889 5.6 13.7167 5.76667 14.4833 6.1C15.2611 6.43333 15.9389 6.89444 16.5167 7.48333C17.1056 8.06111 17.5667 8.73889 17.9 9.51667C18.2333 10.2833 18.4 11.1111 18.4 12C18.4 12.8778 18.2333 13.7056 17.9 14.4833C17.5667 15.2611 17.1056 15.9444 16.5167 16.5333C15.9389 17.1111 15.2611 17.5667 14.4833 17.9C13.7167 18.2333 12.8889 18.4 12 18.4ZM12 17.2C13.4444 17.2 14.6722 16.6944 15.6833 15.6833C16.6944 14.6722 17.2 13.4444 17.2 12C17.2 10.5556 16.6944 9.32778 15.6833 8.31667C14.6722 7.30555 13.4444 6.8 12 6.8C10.5556 6.8 9.32778 7.30555 8.31667 8.31667C7.30556 9.32778 6.8 10.5556 6.8 12C6.8 13.4444 7.30556 14.6722 8.31667 15.6833C9.32778 16.6944 10.5556 17.2 12 17.2Z" fill="#212121"/>
</g>
<defs>
<clipPath id="clip0_6083_34804">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>`,V.innerText="Preview backend running in this workspace."),V.setAttribute("id",b)}document.readyState==="loading"?window.addEventListener("DOMContentLoaded",E):E()}/**
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
 */function yd(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function Ed(){var n;const t=(n=Ci())===null||n===void 0?void 0:n.forceEnvironment;if(t==="node")return!0;if(t==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function Qu(){const n=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof n=="object"&&n.id!==void 0}function Td(){return!Ed()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function Pi(){try{return typeof indexedDB=="object"}catch{return!1}}function Vi(){return new Promise((n,t)=>{try{let e=!0;const r="validate-browser-context-for-indexeddb-analytics-module",s=self.indexedDB.open(r);s.onsuccess=()=>{s.result.close(),e||self.indexedDB.deleteDatabase(r),n(!0)},s.onupgradeneeded=()=>{e=!1},s.onerror=()=>{var o;t(((o=s.error)===null||o===void 0?void 0:o.message)||"")}}catch(e){t(e)}})}function Wu(){return!(typeof navigator>"u"||!navigator.cookieEnabled)}/**
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
 */const vd="FirebaseError";class Ee extends Error{constructor(t,e,r){super(e),this.code=t,this.customData=r,this.name=vd,Object.setPrototypeOf(this,Ee.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Hr.prototype.create)}}class Hr{constructor(t,e,r){this.service=t,this.serviceName=e,this.errors=r}create(t,...e){const r=e[0]||{},s=`${this.service}/${t}`,o=this.errors[t],a=o?Id(o,r):"Error",c=`${this.serviceName}: ${a} (${s}).`;return new Ee(s,c,r)}}function Id(n,t){return n.replace(wd,(e,r)=>{const s=t[r];return s!=null?String(s):`<${r}?>`})}const wd=/\{\$([^}]+)}/g;function Ye(n,t){if(n===t)return!0;const e=Object.keys(n),r=Object.keys(t);for(const s of e){if(!r.includes(s))return!1;const o=n[s],a=t[s];if(ba(o)&&ba(a)){if(!Ye(o,a))return!1}else if(o!==a)return!1}for(const s of r)if(!e.includes(s))return!1;return!0}function ba(n){return n!==null&&typeof n=="object"}/**
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
 */const Ad=1e3,Rd=2,bd=4*60*60*1e3,Cd=.5;function Ca(n,t=Ad,e=Rd){const r=t*Math.pow(e,n),s=Math.round(Cd*r*(Math.random()-.5)*2);return Math.min(bd,r+s)}/**
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
 */function Wt(n){return n&&n._delegate?n._delegate:n}class Xt{constructor(t,e,r){this.name=t,this.instanceFactory=e,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(t){return this.instantiationMode=t,this}setMultipleInstances(t){return this.multipleInstances=t,this}setServiceProps(t){return this.serviceProps=t,this}setInstanceCreatedCallback(t){return this.onInstanceCreated=t,this}}/**
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
 */const Re="[DEFAULT]";/**
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
 */class Sd{constructor(t,e){this.name=t,this.container=e,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(t){const e=this.normalizeInstanceIdentifier(t);if(!this.instancesDeferred.has(e)){const r=new dd;if(this.instancesDeferred.set(e,r),this.isInitialized(e)||this.shouldAutoInitialize())try{const s=this.getOrInitializeService({instanceIdentifier:e});s&&r.resolve(s)}catch{}}return this.instancesDeferred.get(e).promise}getImmediate(t){var e;const r=this.normalizeInstanceIdentifier(t==null?void 0:t.identifier),s=(e=t==null?void 0:t.optional)!==null&&e!==void 0?e:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(o){if(s)return null;throw o}else{if(s)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(t){if(t.name!==this.name)throw Error(`Mismatching Component ${t.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=t,!!this.shouldAutoInitialize()){if(Vd(t))try{this.getOrInitializeService({instanceIdentifier:Re})}catch{}for(const[e,r]of this.instancesDeferred.entries()){const s=this.normalizeInstanceIdentifier(e);try{const o=this.getOrInitializeService({instanceIdentifier:s});r.resolve(o)}catch{}}}}clearInstance(t=Re){this.instancesDeferred.delete(t),this.instancesOptions.delete(t),this.instances.delete(t)}async delete(){const t=Array.from(this.instances.values());await Promise.all([...t.filter(e=>"INTERNAL"in e).map(e=>e.INTERNAL.delete()),...t.filter(e=>"_delete"in e).map(e=>e._delete())])}isComponentSet(){return this.component!=null}isInitialized(t=Re){return this.instances.has(t)}getOptions(t=Re){return this.instancesOptions.get(t)||{}}initialize(t={}){const{options:e={}}=t,r=this.normalizeInstanceIdentifier(t.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const s=this.getOrInitializeService({instanceIdentifier:r,options:e});for(const[o,a]of this.instancesDeferred.entries()){const c=this.normalizeInstanceIdentifier(o);r===c&&a.resolve(s)}return s}onInit(t,e){var r;const s=this.normalizeInstanceIdentifier(e),o=(r=this.onInitCallbacks.get(s))!==null&&r!==void 0?r:new Set;o.add(t),this.onInitCallbacks.set(s,o);const a=this.instances.get(s);return a&&t(a,s),()=>{o.delete(t)}}invokeOnInitCallbacks(t,e){const r=this.onInitCallbacks.get(e);if(r)for(const s of r)try{s(t,e)}catch{}}getOrInitializeService({instanceIdentifier:t,options:e={}}){let r=this.instances.get(t);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:Pd(t),options:e}),this.instances.set(t,r),this.instancesOptions.set(t,e),this.invokeOnInitCallbacks(r,t),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,t,r)}catch{}return r||null}normalizeInstanceIdentifier(t=Re){return this.component?this.component.multipleInstances?t:Re:t}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function Pd(n){return n===Re?void 0:n}function Vd(n){return n.instantiationMode==="EAGER"}/**
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
 */class Dd{constructor(t){this.name=t,this.providers=new Map}addComponent(t){const e=this.getProvider(t.name);if(e.isComponentSet())throw new Error(`Component ${t.name} has already been registered with ${this.name}`);e.setComponent(t)}addOrOverwriteComponent(t){this.getProvider(t.name).isComponentSet()&&this.providers.delete(t.name),this.addComponent(t)}getProvider(t){if(this.providers.has(t))return this.providers.get(t);const e=new Sd(t,this);return this.providers.set(t,e),e}getProviders(){return Array.from(this.providers.values())}}/**
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
 */var K;(function(n){n[n.DEBUG=0]="DEBUG",n[n.VERBOSE=1]="VERBOSE",n[n.INFO=2]="INFO",n[n.WARN=3]="WARN",n[n.ERROR=4]="ERROR",n[n.SILENT=5]="SILENT"})(K||(K={}));const kd={debug:K.DEBUG,verbose:K.VERBOSE,info:K.INFO,warn:K.WARN,error:K.ERROR,silent:K.SILENT},Nd=K.INFO,xd={[K.DEBUG]:"log",[K.VERBOSE]:"log",[K.INFO]:"info",[K.WARN]:"warn",[K.ERROR]:"error"},Od=(n,t,...e)=>{if(t<n.logLevel)return;const r=new Date().toISOString(),s=xd[t];if(s)console[s](`[${r}]  ${n.name}:`,...e);else throw new Error(`Attempted to log a message with an invalid logType (value: ${t})`)};class Di{constructor(t){this.name=t,this._logLevel=Nd,this._logHandler=Od,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(t){if(!(t in K))throw new TypeError(`Invalid value "${t}" assigned to \`logLevel\``);this._logLevel=t}setLogLevel(t){this._logLevel=typeof t=="string"?kd[t]:t}get logHandler(){return this._logHandler}set logHandler(t){if(typeof t!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=t}get userLogHandler(){return this._userLogHandler}set userLogHandler(t){this._userLogHandler=t}debug(...t){this._userLogHandler&&this._userLogHandler(this,K.DEBUG,...t),this._logHandler(this,K.DEBUG,...t)}log(...t){this._userLogHandler&&this._userLogHandler(this,K.VERBOSE,...t),this._logHandler(this,K.VERBOSE,...t)}info(...t){this._userLogHandler&&this._userLogHandler(this,K.INFO,...t),this._logHandler(this,K.INFO,...t)}warn(...t){this._userLogHandler&&this._userLogHandler(this,K.WARN,...t),this._logHandler(this,K.WARN,...t)}error(...t){this._userLogHandler&&this._userLogHandler(this,K.ERROR,...t),this._logHandler(this,K.ERROR,...t)}}const Md=(n,t)=>t.some(e=>n instanceof e);let Sa,Pa;function Ld(){return Sa||(Sa=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function Fd(){return Pa||(Pa=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const Xu=new WeakMap,si=new WeakMap,Yu=new WeakMap,Ms=new WeakMap,ki=new WeakMap;function Ud(n){const t=new Promise((e,r)=>{const s=()=>{n.removeEventListener("success",o),n.removeEventListener("error",a)},o=()=>{e(ue(n.result)),s()},a=()=>{r(n.error),s()};n.addEventListener("success",o),n.addEventListener("error",a)});return t.then(e=>{e instanceof IDBCursor&&Xu.set(e,n)}).catch(()=>{}),ki.set(t,n),t}function Bd(n){if(si.has(n))return;const t=new Promise((e,r)=>{const s=()=>{n.removeEventListener("complete",o),n.removeEventListener("error",a),n.removeEventListener("abort",a)},o=()=>{e(),s()},a=()=>{r(n.error||new DOMException("AbortError","AbortError")),s()};n.addEventListener("complete",o),n.addEventListener("error",a),n.addEventListener("abort",a)});si.set(n,t)}let ii={get(n,t,e){if(n instanceof IDBTransaction){if(t==="done")return si.get(n);if(t==="objectStoreNames")return n.objectStoreNames||Yu.get(n);if(t==="store")return e.objectStoreNames[1]?void 0:e.objectStore(e.objectStoreNames[0])}return ue(n[t])},set(n,t,e){return n[t]=e,!0},has(n,t){return n instanceof IDBTransaction&&(t==="done"||t==="store")?!0:t in n}};function jd(n){ii=n(ii)}function $d(n){return n===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(t,...e){const r=n.call(Ls(this),t,...e);return Yu.set(r,t.sort?t.sort():[t]),ue(r)}:Fd().includes(n)?function(...t){return n.apply(Ls(this),t),ue(Xu.get(this))}:function(...t){return ue(n.apply(Ls(this),t))}}function qd(n){return typeof n=="function"?$d(n):(n instanceof IDBTransaction&&Bd(n),Md(n,Ld())?new Proxy(n,ii):n)}function ue(n){if(n instanceof IDBRequest)return Ud(n);if(Ms.has(n))return Ms.get(n);const t=qd(n);return t!==n&&(Ms.set(n,t),ki.set(t,n)),t}const Ls=n=>ki.get(n);function Ju(n,t,{blocked:e,upgrade:r,blocking:s,terminated:o}={}){const a=indexedDB.open(n,t),c=ue(a);return r&&a.addEventListener("upgradeneeded",h=>{r(ue(a.result),h.oldVersion,h.newVersion,ue(a.transaction),h)}),e&&a.addEventListener("blocked",h=>e(h.oldVersion,h.newVersion,h)),c.then(h=>{o&&h.addEventListener("close",()=>o()),s&&h.addEventListener("versionchange",d=>s(d.oldVersion,d.newVersion,d))}).catch(()=>{}),c}const zd=["get","getKey","getAll","getAllKeys","count"],Hd=["put","add","delete","clear"],Fs=new Map;function Va(n,t){if(!(n instanceof IDBDatabase&&!(t in n)&&typeof t=="string"))return;if(Fs.get(t))return Fs.get(t);const e=t.replace(/FromIndex$/,""),r=t!==e,s=Hd.includes(e);if(!(e in(r?IDBIndex:IDBObjectStore).prototype)||!(s||zd.includes(e)))return;const o=async function(a,...c){const h=this.transaction(a,s?"readwrite":"readonly");let d=h.store;return r&&(d=d.index(c.shift())),(await Promise.all([d[e](...c),s&&h.done]))[0]};return Fs.set(t,o),o}jd(n=>({...n,get:(t,e,r)=>Va(t,e)||n.get(t,e,r),has:(t,e)=>!!Va(t,e)||n.has(t,e)}));/**
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
 */class Gd{constructor(t){this.container=t}getPlatformInfoString(){return this.container.getProviders().map(e=>{if(Kd(e)){const r=e.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(e=>e).join(" ")}}function Kd(n){const t=n.getComponent();return(t==null?void 0:t.type)==="VERSION"}const oi="@firebase/app",Da="0.13.1";/**
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
 */const Yt=new Di("@firebase/app"),Qd="@firebase/app-compat",Wd="@firebase/analytics-compat",Xd="@firebase/analytics",Yd="@firebase/app-check-compat",Jd="@firebase/app-check",Zd="@firebase/auth",tf="@firebase/auth-compat",ef="@firebase/database",nf="@firebase/data-connect",rf="@firebase/database-compat",sf="@firebase/functions",of="@firebase/functions-compat",af="@firebase/installations",uf="@firebase/installations-compat",cf="@firebase/messaging",lf="@firebase/messaging-compat",hf="@firebase/performance",df="@firebase/performance-compat",ff="@firebase/remote-config",pf="@firebase/remote-config-compat",mf="@firebase/storage",gf="@firebase/storage-compat",_f="@firebase/firestore",yf="@firebase/ai",Ef="@firebase/firestore-compat",Tf="firebase",vf="11.9.0";/**
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
 */const ai="[DEFAULT]",If={[oi]:"fire-core",[Qd]:"fire-core-compat",[Xd]:"fire-analytics",[Wd]:"fire-analytics-compat",[Jd]:"fire-app-check",[Yd]:"fire-app-check-compat",[Zd]:"fire-auth",[tf]:"fire-auth-compat",[ef]:"fire-rtdb",[nf]:"fire-data-connect",[rf]:"fire-rtdb-compat",[sf]:"fire-fn",[of]:"fire-fn-compat",[af]:"fire-iid",[uf]:"fire-iid-compat",[cf]:"fire-fcm",[lf]:"fire-fcm-compat",[hf]:"fire-perf",[df]:"fire-perf-compat",[ff]:"fire-rc",[pf]:"fire-rc-compat",[mf]:"fire-gcs",[gf]:"fire-gcs-compat",[_f]:"fire-fst",[Ef]:"fire-fst-compat",[yf]:"fire-vertex","fire-js":"fire-js",[Tf]:"fire-js-all"};/**
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
 */const Vr=new Map,wf=new Map,ui=new Map;function ka(n,t){try{n.container.addComponent(t)}catch(e){Yt.debug(`Component ${t.name} failed to register with FirebaseApp ${n.name}`,e)}}function de(n){const t=n.name;if(ui.has(t))return Yt.debug(`There were multiple attempts to register component ${t}.`),!1;ui.set(t,n);for(const e of Vr.values())ka(e,n);for(const e of wf.values())ka(e,n);return!0}function Wn(n,t){const e=n.container.getProvider("heartbeat").getImmediate({optional:!0});return e&&e.triggerHeartbeat(),n.container.getProvider(t)}function Af(n){return n==null?!1:n.settings!==void 0}/**
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
 */const Rf={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},ce=new Hr("app","Firebase",Rf);/**
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
 */class bf{constructor(t,e,r){this._isDeleted=!1,this._options=Object.assign({},t),this._config=Object.assign({},e),this._name=e.name,this._automaticDataCollectionEnabled=e.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new Xt("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(t){this.checkDestroyed(),this._automaticDataCollectionEnabled=t}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(t){this._isDeleted=t}checkDestroyed(){if(this.isDeleted)throw ce.create("app-deleted",{appName:this._name})}}/**
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
 */const Cf=vf;function Zu(n,t={}){let e=n;typeof t!="object"&&(t={name:t});const r=Object.assign({name:ai,automaticDataCollectionEnabled:!0},t),s=r.name;if(typeof s!="string"||!s)throw ce.create("bad-app-name",{appName:String(s)});if(e||(e=Ku()),!e)throw ce.create("no-options");const o=Vr.get(s);if(o){if(Ye(e,o.options)&&Ye(r,o.config))return o;throw ce.create("duplicate-app",{appName:s})}const a=new Dd(s);for(const h of ui.values())a.addComponent(h);const c=new bf(e,r,a);return Vr.set(s,c),c}function tc(n=ai){const t=Vr.get(n);if(!t&&n===ai&&Ku())return Zu();if(!t)throw ce.create("no-app",{appName:n});return t}function Ut(n,t,e){var r;let s=(r=If[n])!==null&&r!==void 0?r:n;e&&(s+=`-${e}`);const o=s.match(/\s|\//),a=t.match(/\s|\//);if(o||a){const c=[`Unable to register library "${s}" with version "${t}":`];o&&c.push(`library name "${s}" contains illegal characters (whitespace or "/")`),o&&a&&c.push("and"),a&&c.push(`version name "${t}" contains illegal characters (whitespace or "/")`),Yt.warn(c.join(" "));return}de(new Xt(`${s}-version`,()=>({library:s,version:t}),"VERSION"))}/**
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
 */const Sf="firebase-heartbeat-database",Pf=1,Un="firebase-heartbeat-store";let Us=null;function ec(){return Us||(Us=Ju(Sf,Pf,{upgrade:(n,t)=>{switch(t){case 0:try{n.createObjectStore(Un)}catch(e){console.warn(e)}}}}).catch(n=>{throw ce.create("idb-open",{originalErrorMessage:n.message})})),Us}async function Vf(n){try{const e=(await ec()).transaction(Un),r=await e.objectStore(Un).get(nc(n));return await e.done,r}catch(t){if(t instanceof Ee)Yt.warn(t.message);else{const e=ce.create("idb-get",{originalErrorMessage:t==null?void 0:t.message});Yt.warn(e.message)}}}async function Na(n,t){try{const r=(await ec()).transaction(Un,"readwrite");await r.objectStore(Un).put(t,nc(n)),await r.done}catch(e){if(e instanceof Ee)Yt.warn(e.message);else{const r=ce.create("idb-set",{originalErrorMessage:e==null?void 0:e.message});Yt.warn(r.message)}}}function nc(n){return`${n.name}!${n.options.appId}`}/**
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
 */const Df=1024,kf=30;class Nf{constructor(t){this.container=t,this._heartbeatsCache=null;const e=this.container.getProvider("app").getImmediate();this._storage=new Of(e),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){var t,e;try{const s=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),o=xa();if(((t=this._heartbeatsCache)===null||t===void 0?void 0:t.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===o||this._heartbeatsCache.heartbeats.some(a=>a.date===o))return;if(this._heartbeatsCache.heartbeats.push({date:o,agent:s}),this._heartbeatsCache.heartbeats.length>kf){const a=Mf(this._heartbeatsCache.heartbeats);this._heartbeatsCache.heartbeats.splice(a,1)}return this._storage.overwrite(this._heartbeatsCache)}catch(r){Yt.warn(r)}}async getHeartbeatsHeader(){var t;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((t=this._heartbeatsCache)===null||t===void 0?void 0:t.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const e=xa(),{heartbeatsToSend:r,unsentEntries:s}=xf(this._heartbeatsCache.heartbeats),o=Pr(JSON.stringify({version:2,heartbeats:r}));return this._heartbeatsCache.lastSentHeartbeatDate=e,s.length>0?(this._heartbeatsCache.heartbeats=s,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),o}catch(e){return Yt.warn(e),""}}}function xa(){return new Date().toISOString().substring(0,10)}function xf(n,t=Df){const e=[];let r=n.slice();for(const s of n){const o=e.find(a=>a.agent===s.agent);if(o){if(o.dates.push(s.date),Oa(e)>t){o.dates.pop();break}}else if(e.push({agent:s.agent,dates:[s.date]}),Oa(e)>t){e.pop();break}r=r.slice(1)}return{heartbeatsToSend:e,unsentEntries:r}}class Of{constructor(t){this.app=t,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return Pi()?Vi().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const e=await Vf(this.app);return e!=null&&e.heartbeats?e:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(t){var e;if(await this._canUseIndexedDBPromise){const s=await this.read();return Na(this.app,{lastSentHeartbeatDate:(e=t.lastSentHeartbeatDate)!==null&&e!==void 0?e:s.lastSentHeartbeatDate,heartbeats:t.heartbeats})}else return}async add(t){var e;if(await this._canUseIndexedDBPromise){const s=await this.read();return Na(this.app,{lastSentHeartbeatDate:(e=t.lastSentHeartbeatDate)!==null&&e!==void 0?e:s.lastSentHeartbeatDate,heartbeats:[...s.heartbeats,...t.heartbeats]})}else return}}function Oa(n){return Pr(JSON.stringify({version:2,heartbeats:n})).length}function Mf(n){if(n.length===0)return-1;let t=0,e=n[0].date;for(let r=1;r<n.length;r++)n[r].date<e&&(e=n[r].date,t=r);return t}/**
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
 */function Lf(n){de(new Xt("platform-logger",t=>new Gd(t),"PRIVATE")),de(new Xt("heartbeat",t=>new Nf(t),"PRIVATE")),Ut(oi,Da,n),Ut(oi,Da,"esm2017"),Ut("fire-js","")}Lf("");var Ma=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var le,rc;(function(){var n;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function t(v,p){function _(){}_.prototype=p.prototype,v.D=p.prototype,v.prototype=new _,v.prototype.constructor=v,v.C=function(y,T,A){for(var g=Array(arguments.length-2),zt=2;zt<arguments.length;zt++)g[zt-2]=arguments[zt];return p.prototype[T].apply(y,g)}}function e(){this.blockSize=-1}function r(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.B=Array(this.blockSize),this.o=this.h=0,this.s()}t(r,e),r.prototype.s=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function s(v,p,_){_||(_=0);var y=Array(16);if(typeof p=="string")for(var T=0;16>T;++T)y[T]=p.charCodeAt(_++)|p.charCodeAt(_++)<<8|p.charCodeAt(_++)<<16|p.charCodeAt(_++)<<24;else for(T=0;16>T;++T)y[T]=p[_++]|p[_++]<<8|p[_++]<<16|p[_++]<<24;p=v.g[0],_=v.g[1],T=v.g[2];var A=v.g[3],g=p+(A^_&(T^A))+y[0]+3614090360&4294967295;p=_+(g<<7&4294967295|g>>>25),g=A+(T^p&(_^T))+y[1]+3905402710&4294967295,A=p+(g<<12&4294967295|g>>>20),g=T+(_^A&(p^_))+y[2]+606105819&4294967295,T=A+(g<<17&4294967295|g>>>15),g=_+(p^T&(A^p))+y[3]+3250441966&4294967295,_=T+(g<<22&4294967295|g>>>10),g=p+(A^_&(T^A))+y[4]+4118548399&4294967295,p=_+(g<<7&4294967295|g>>>25),g=A+(T^p&(_^T))+y[5]+1200080426&4294967295,A=p+(g<<12&4294967295|g>>>20),g=T+(_^A&(p^_))+y[6]+2821735955&4294967295,T=A+(g<<17&4294967295|g>>>15),g=_+(p^T&(A^p))+y[7]+4249261313&4294967295,_=T+(g<<22&4294967295|g>>>10),g=p+(A^_&(T^A))+y[8]+1770035416&4294967295,p=_+(g<<7&4294967295|g>>>25),g=A+(T^p&(_^T))+y[9]+2336552879&4294967295,A=p+(g<<12&4294967295|g>>>20),g=T+(_^A&(p^_))+y[10]+4294925233&4294967295,T=A+(g<<17&4294967295|g>>>15),g=_+(p^T&(A^p))+y[11]+2304563134&4294967295,_=T+(g<<22&4294967295|g>>>10),g=p+(A^_&(T^A))+y[12]+1804603682&4294967295,p=_+(g<<7&4294967295|g>>>25),g=A+(T^p&(_^T))+y[13]+4254626195&4294967295,A=p+(g<<12&4294967295|g>>>20),g=T+(_^A&(p^_))+y[14]+2792965006&4294967295,T=A+(g<<17&4294967295|g>>>15),g=_+(p^T&(A^p))+y[15]+1236535329&4294967295,_=T+(g<<22&4294967295|g>>>10),g=p+(T^A&(_^T))+y[1]+4129170786&4294967295,p=_+(g<<5&4294967295|g>>>27),g=A+(_^T&(p^_))+y[6]+3225465664&4294967295,A=p+(g<<9&4294967295|g>>>23),g=T+(p^_&(A^p))+y[11]+643717713&4294967295,T=A+(g<<14&4294967295|g>>>18),g=_+(A^p&(T^A))+y[0]+3921069994&4294967295,_=T+(g<<20&4294967295|g>>>12),g=p+(T^A&(_^T))+y[5]+3593408605&4294967295,p=_+(g<<5&4294967295|g>>>27),g=A+(_^T&(p^_))+y[10]+38016083&4294967295,A=p+(g<<9&4294967295|g>>>23),g=T+(p^_&(A^p))+y[15]+3634488961&4294967295,T=A+(g<<14&4294967295|g>>>18),g=_+(A^p&(T^A))+y[4]+3889429448&4294967295,_=T+(g<<20&4294967295|g>>>12),g=p+(T^A&(_^T))+y[9]+568446438&4294967295,p=_+(g<<5&4294967295|g>>>27),g=A+(_^T&(p^_))+y[14]+3275163606&4294967295,A=p+(g<<9&4294967295|g>>>23),g=T+(p^_&(A^p))+y[3]+4107603335&4294967295,T=A+(g<<14&4294967295|g>>>18),g=_+(A^p&(T^A))+y[8]+1163531501&4294967295,_=T+(g<<20&4294967295|g>>>12),g=p+(T^A&(_^T))+y[13]+2850285829&4294967295,p=_+(g<<5&4294967295|g>>>27),g=A+(_^T&(p^_))+y[2]+4243563512&4294967295,A=p+(g<<9&4294967295|g>>>23),g=T+(p^_&(A^p))+y[7]+1735328473&4294967295,T=A+(g<<14&4294967295|g>>>18),g=_+(A^p&(T^A))+y[12]+2368359562&4294967295,_=T+(g<<20&4294967295|g>>>12),g=p+(_^T^A)+y[5]+4294588738&4294967295,p=_+(g<<4&4294967295|g>>>28),g=A+(p^_^T)+y[8]+2272392833&4294967295,A=p+(g<<11&4294967295|g>>>21),g=T+(A^p^_)+y[11]+1839030562&4294967295,T=A+(g<<16&4294967295|g>>>16),g=_+(T^A^p)+y[14]+4259657740&4294967295,_=T+(g<<23&4294967295|g>>>9),g=p+(_^T^A)+y[1]+2763975236&4294967295,p=_+(g<<4&4294967295|g>>>28),g=A+(p^_^T)+y[4]+1272893353&4294967295,A=p+(g<<11&4294967295|g>>>21),g=T+(A^p^_)+y[7]+4139469664&4294967295,T=A+(g<<16&4294967295|g>>>16),g=_+(T^A^p)+y[10]+3200236656&4294967295,_=T+(g<<23&4294967295|g>>>9),g=p+(_^T^A)+y[13]+681279174&4294967295,p=_+(g<<4&4294967295|g>>>28),g=A+(p^_^T)+y[0]+3936430074&4294967295,A=p+(g<<11&4294967295|g>>>21),g=T+(A^p^_)+y[3]+3572445317&4294967295,T=A+(g<<16&4294967295|g>>>16),g=_+(T^A^p)+y[6]+76029189&4294967295,_=T+(g<<23&4294967295|g>>>9),g=p+(_^T^A)+y[9]+3654602809&4294967295,p=_+(g<<4&4294967295|g>>>28),g=A+(p^_^T)+y[12]+3873151461&4294967295,A=p+(g<<11&4294967295|g>>>21),g=T+(A^p^_)+y[15]+530742520&4294967295,T=A+(g<<16&4294967295|g>>>16),g=_+(T^A^p)+y[2]+3299628645&4294967295,_=T+(g<<23&4294967295|g>>>9),g=p+(T^(_|~A))+y[0]+4096336452&4294967295,p=_+(g<<6&4294967295|g>>>26),g=A+(_^(p|~T))+y[7]+1126891415&4294967295,A=p+(g<<10&4294967295|g>>>22),g=T+(p^(A|~_))+y[14]+2878612391&4294967295,T=A+(g<<15&4294967295|g>>>17),g=_+(A^(T|~p))+y[5]+4237533241&4294967295,_=T+(g<<21&4294967295|g>>>11),g=p+(T^(_|~A))+y[12]+1700485571&4294967295,p=_+(g<<6&4294967295|g>>>26),g=A+(_^(p|~T))+y[3]+2399980690&4294967295,A=p+(g<<10&4294967295|g>>>22),g=T+(p^(A|~_))+y[10]+4293915773&4294967295,T=A+(g<<15&4294967295|g>>>17),g=_+(A^(T|~p))+y[1]+2240044497&4294967295,_=T+(g<<21&4294967295|g>>>11),g=p+(T^(_|~A))+y[8]+1873313359&4294967295,p=_+(g<<6&4294967295|g>>>26),g=A+(_^(p|~T))+y[15]+4264355552&4294967295,A=p+(g<<10&4294967295|g>>>22),g=T+(p^(A|~_))+y[6]+2734768916&4294967295,T=A+(g<<15&4294967295|g>>>17),g=_+(A^(T|~p))+y[13]+1309151649&4294967295,_=T+(g<<21&4294967295|g>>>11),g=p+(T^(_|~A))+y[4]+4149444226&4294967295,p=_+(g<<6&4294967295|g>>>26),g=A+(_^(p|~T))+y[11]+3174756917&4294967295,A=p+(g<<10&4294967295|g>>>22),g=T+(p^(A|~_))+y[2]+718787259&4294967295,T=A+(g<<15&4294967295|g>>>17),g=_+(A^(T|~p))+y[9]+3951481745&4294967295,v.g[0]=v.g[0]+p&4294967295,v.g[1]=v.g[1]+(T+(g<<21&4294967295|g>>>11))&4294967295,v.g[2]=v.g[2]+T&4294967295,v.g[3]=v.g[3]+A&4294967295}r.prototype.u=function(v,p){p===void 0&&(p=v.length);for(var _=p-this.blockSize,y=this.B,T=this.h,A=0;A<p;){if(T==0)for(;A<=_;)s(this,v,A),A+=this.blockSize;if(typeof v=="string"){for(;A<p;)if(y[T++]=v.charCodeAt(A++),T==this.blockSize){s(this,y),T=0;break}}else for(;A<p;)if(y[T++]=v[A++],T==this.blockSize){s(this,y),T=0;break}}this.h=T,this.o+=p},r.prototype.v=function(){var v=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);v[0]=128;for(var p=1;p<v.length-8;++p)v[p]=0;var _=8*this.o;for(p=v.length-8;p<v.length;++p)v[p]=_&255,_/=256;for(this.u(v),v=Array(16),p=_=0;4>p;++p)for(var y=0;32>y;y+=8)v[_++]=this.g[p]>>>y&255;return v};function o(v,p){var _=c;return Object.prototype.hasOwnProperty.call(_,v)?_[v]:_[v]=p(v)}function a(v,p){this.h=p;for(var _=[],y=!0,T=v.length-1;0<=T;T--){var A=v[T]|0;y&&A==p||(_[T]=A,y=!1)}this.g=_}var c={};function h(v){return-128<=v&&128>v?o(v,function(p){return new a([p|0],0>p?-1:0)}):new a([v|0],0>v?-1:0)}function d(v){if(isNaN(v)||!isFinite(v))return E;if(0>v)return P(d(-v));for(var p=[],_=1,y=0;v>=_;y++)p[y]=v/_|0,_*=4294967296;return new a(p,0)}function m(v,p){if(v.length==0)throw Error("number format error: empty string");if(p=p||10,2>p||36<p)throw Error("radix out of range: "+p);if(v.charAt(0)=="-")return P(m(v.substring(1),p));if(0<=v.indexOf("-"))throw Error('number format error: interior "-" character');for(var _=d(Math.pow(p,8)),y=E,T=0;T<v.length;T+=8){var A=Math.min(8,v.length-T),g=parseInt(v.substring(T,T+A),p);8>A?(A=d(Math.pow(p,A)),y=y.j(A).add(d(g))):(y=y.j(_),y=y.add(d(g)))}return y}var E=h(0),I=h(1),b=h(16777216);n=a.prototype,n.m=function(){if(x(this))return-P(this).m();for(var v=0,p=1,_=0;_<this.g.length;_++){var y=this.i(_);v+=(0<=y?y:4294967296+y)*p,p*=4294967296}return v},n.toString=function(v){if(v=v||10,2>v||36<v)throw Error("radix out of range: "+v);if(V(this))return"0";if(x(this))return"-"+P(this).toString(v);for(var p=d(Math.pow(v,6)),_=this,y="";;){var T=Z(_,p).g;_=z(_,T.j(p));var A=((0<_.g.length?_.g[0]:_.h)>>>0).toString(v);if(_=T,V(_))return A+y;for(;6>A.length;)A="0"+A;y=A+y}},n.i=function(v){return 0>v?0:v<this.g.length?this.g[v]:this.h};function V(v){if(v.h!=0)return!1;for(var p=0;p<v.g.length;p++)if(v.g[p]!=0)return!1;return!0}function x(v){return v.h==-1}n.l=function(v){return v=z(this,v),x(v)?-1:V(v)?0:1};function P(v){for(var p=v.g.length,_=[],y=0;y<p;y++)_[y]=~v.g[y];return new a(_,~v.h).add(I)}n.abs=function(){return x(this)?P(this):this},n.add=function(v){for(var p=Math.max(this.g.length,v.g.length),_=[],y=0,T=0;T<=p;T++){var A=y+(this.i(T)&65535)+(v.i(T)&65535),g=(A>>>16)+(this.i(T)>>>16)+(v.i(T)>>>16);y=g>>>16,A&=65535,g&=65535,_[T]=g<<16|A}return new a(_,_[_.length-1]&-2147483648?-1:0)};function z(v,p){return v.add(P(p))}n.j=function(v){if(V(this)||V(v))return E;if(x(this))return x(v)?P(this).j(P(v)):P(P(this).j(v));if(x(v))return P(this.j(P(v)));if(0>this.l(b)&&0>v.l(b))return d(this.m()*v.m());for(var p=this.g.length+v.g.length,_=[],y=0;y<2*p;y++)_[y]=0;for(y=0;y<this.g.length;y++)for(var T=0;T<v.g.length;T++){var A=this.i(y)>>>16,g=this.i(y)&65535,zt=v.i(T)>>>16,hn=v.i(T)&65535;_[2*y+2*T]+=g*hn,B(_,2*y+2*T),_[2*y+2*T+1]+=A*hn,B(_,2*y+2*T+1),_[2*y+2*T+1]+=g*zt,B(_,2*y+2*T+1),_[2*y+2*T+2]+=A*zt,B(_,2*y+2*T+2)}for(y=0;y<p;y++)_[y]=_[2*y+1]<<16|_[2*y];for(y=p;y<2*p;y++)_[y]=0;return new a(_,0)};function B(v,p){for(;(v[p]&65535)!=v[p];)v[p+1]+=v[p]>>>16,v[p]&=65535,p++}function $(v,p){this.g=v,this.h=p}function Z(v,p){if(V(p))throw Error("division by zero");if(V(v))return new $(E,E);if(x(v))return p=Z(P(v),p),new $(P(p.g),P(p.h));if(x(p))return p=Z(v,P(p)),new $(P(p.g),p.h);if(30<v.g.length){if(x(v)||x(p))throw Error("slowDivide_ only works with positive integers.");for(var _=I,y=p;0>=y.l(v);)_=Nt(_),y=Nt(y);var T=it(_,1),A=it(y,1);for(y=it(y,2),_=it(_,2);!V(y);){var g=A.add(y);0>=g.l(v)&&(T=T.add(_),A=g),y=it(y,1),_=it(_,1)}return p=z(v,T.j(p)),new $(T,p)}for(T=E;0<=v.l(p);){for(_=Math.max(1,Math.floor(v.m()/p.m())),y=Math.ceil(Math.log(_)/Math.LN2),y=48>=y?1:Math.pow(2,y-48),A=d(_),g=A.j(p);x(g)||0<g.l(v);)_-=y,A=d(_),g=A.j(p);V(A)&&(A=I),T=T.add(A),v=z(v,g)}return new $(T,v)}n.A=function(v){return Z(this,v).h},n.and=function(v){for(var p=Math.max(this.g.length,v.g.length),_=[],y=0;y<p;y++)_[y]=this.i(y)&v.i(y);return new a(_,this.h&v.h)},n.or=function(v){for(var p=Math.max(this.g.length,v.g.length),_=[],y=0;y<p;y++)_[y]=this.i(y)|v.i(y);return new a(_,this.h|v.h)},n.xor=function(v){for(var p=Math.max(this.g.length,v.g.length),_=[],y=0;y<p;y++)_[y]=this.i(y)^v.i(y);return new a(_,this.h^v.h)};function Nt(v){for(var p=v.g.length+1,_=[],y=0;y<p;y++)_[y]=v.i(y)<<1|v.i(y-1)>>>31;return new a(_,v.h)}function it(v,p){var _=p>>5;p%=32;for(var y=v.g.length-_,T=[],A=0;A<y;A++)T[A]=0<p?v.i(A+_)>>>p|v.i(A+_+1)<<32-p:v.i(A+_);return new a(T,v.h)}r.prototype.digest=r.prototype.v,r.prototype.reset=r.prototype.s,r.prototype.update=r.prototype.u,rc=r,a.prototype.add=a.prototype.add,a.prototype.multiply=a.prototype.j,a.prototype.modulo=a.prototype.A,a.prototype.compare=a.prototype.l,a.prototype.toNumber=a.prototype.m,a.prototype.toString=a.prototype.toString,a.prototype.getBits=a.prototype.i,a.fromNumber=d,a.fromString=m,le=a}).apply(typeof Ma<"u"?Ma:typeof self<"u"?self:typeof window<"u"?window:{});var Er=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var sc,Pn,ic,Ar,ci,oc,ac,uc;(function(){var n,t=typeof Object.defineProperties=="function"?Object.defineProperty:function(i,u,l){return i==Array.prototype||i==Object.prototype||(i[u]=l.value),i};function e(i){i=[typeof globalThis=="object"&&globalThis,i,typeof window=="object"&&window,typeof self=="object"&&self,typeof Er=="object"&&Er];for(var u=0;u<i.length;++u){var l=i[u];if(l&&l.Math==Math)return l}throw Error("Cannot find global object")}var r=e(this);function s(i,u){if(u)t:{var l=r;i=i.split(".");for(var f=0;f<i.length-1;f++){var w=i[f];if(!(w in l))break t;l=l[w]}i=i[i.length-1],f=l[i],u=u(f),u!=f&&u!=null&&t(l,i,{configurable:!0,writable:!0,value:u})}}function o(i,u){i instanceof String&&(i+="");var l=0,f=!1,w={next:function(){if(!f&&l<i.length){var R=l++;return{value:u(R,i[R]),done:!1}}return f=!0,{done:!0,value:void 0}}};return w[Symbol.iterator]=function(){return w},w}s("Array.prototype.values",function(i){return i||function(){return o(this,function(u,l){return l})}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var a=a||{},c=this||self;function h(i){var u=typeof i;return u=u!="object"?u:i?Array.isArray(i)?"array":u:"null",u=="array"||u=="object"&&typeof i.length=="number"}function d(i){var u=typeof i;return u=="object"&&i!=null||u=="function"}function m(i,u,l){return i.call.apply(i.bind,arguments)}function E(i,u,l){if(!i)throw Error();if(2<arguments.length){var f=Array.prototype.slice.call(arguments,2);return function(){var w=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(w,f),i.apply(u,w)}}return function(){return i.apply(u,arguments)}}function I(i,u,l){return I=Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?m:E,I.apply(null,arguments)}function b(i,u){var l=Array.prototype.slice.call(arguments,1);return function(){var f=l.slice();return f.push.apply(f,arguments),i.apply(this,f)}}function V(i,u){function l(){}l.prototype=u.prototype,i.aa=u.prototype,i.prototype=new l,i.prototype.constructor=i,i.Qb=function(f,w,R){for(var D=Array(arguments.length-2),Y=2;Y<arguments.length;Y++)D[Y-2]=arguments[Y];return u.prototype[w].apply(f,D)}}function x(i){const u=i.length;if(0<u){const l=Array(u);for(let f=0;f<u;f++)l[f]=i[f];return l}return[]}function P(i,u){for(let l=1;l<arguments.length;l++){const f=arguments[l];if(h(f)){const w=i.length||0,R=f.length||0;i.length=w+R;for(let D=0;D<R;D++)i[w+D]=f[D]}else i.push(f)}}class z{constructor(u,l){this.i=u,this.j=l,this.h=0,this.g=null}get(){let u;return 0<this.h?(this.h--,u=this.g,this.g=u.next,u.next=null):u=this.i(),u}}function B(i){return/^[\s\xa0]*$/.test(i)}function $(){var i=c.navigator;return i&&(i=i.userAgent)?i:""}function Z(i){return Z[" "](i),i}Z[" "]=function(){};var Nt=$().indexOf("Gecko")!=-1&&!($().toLowerCase().indexOf("webkit")!=-1&&$().indexOf("Edge")==-1)&&!($().indexOf("Trident")!=-1||$().indexOf("MSIE")!=-1)&&$().indexOf("Edge")==-1;function it(i,u,l){for(const f in i)u.call(l,i[f],f,i)}function v(i,u){for(const l in i)u.call(void 0,i[l],l,i)}function p(i){const u={};for(const l in i)u[l]=i[l];return u}const _="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function y(i,u){let l,f;for(let w=1;w<arguments.length;w++){f=arguments[w];for(l in f)i[l]=f[l];for(let R=0;R<_.length;R++)l=_[R],Object.prototype.hasOwnProperty.call(f,l)&&(i[l]=f[l])}}function T(i){var u=1;i=i.split(":");const l=[];for(;0<u&&i.length;)l.push(i.shift()),u--;return i.length&&l.push(i.join(":")),l}function A(i){c.setTimeout(()=>{throw i},0)}function g(){var i=hs;let u=null;return i.g&&(u=i.g,i.g=i.g.next,i.g||(i.h=null),u.next=null),u}class zt{constructor(){this.h=this.g=null}add(u,l){const f=hn.get();f.set(u,l),this.h?this.h.next=f:this.g=f,this.h=f}}var hn=new z(()=>new Jl,i=>i.reset());class Jl{constructor(){this.next=this.g=this.h=null}set(u,l){this.h=u,this.g=l,this.next=null}reset(){this.next=this.g=this.h=null}}let dn,fn=!1,hs=new zt,_o=()=>{const i=c.Promise.resolve(void 0);dn=()=>{i.then(Zl)}};var Zl=()=>{for(var i;i=g();){try{i.h.call(i.g)}catch(l){A(l)}var u=hn;u.j(i),100>u.h&&(u.h++,i.next=u.g,u.g=i)}fn=!1};function te(){this.s=this.s,this.C=this.C}te.prototype.s=!1,te.prototype.ma=function(){this.s||(this.s=!0,this.N())},te.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function _t(i,u){this.type=i,this.g=this.target=u,this.defaultPrevented=!1}_t.prototype.h=function(){this.defaultPrevented=!0};var th=function(){if(!c.addEventListener||!Object.defineProperty)return!1;var i=!1,u=Object.defineProperty({},"passive",{get:function(){i=!0}});try{const l=()=>{};c.addEventListener("test",l,u),c.removeEventListener("test",l,u)}catch{}return i}();function pn(i,u){if(_t.call(this,i?i.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,i){var l=this.type=i.type,f=i.changedTouches&&i.changedTouches.length?i.changedTouches[0]:null;if(this.target=i.target||i.srcElement,this.g=u,u=i.relatedTarget){if(Nt){t:{try{Z(u.nodeName);var w=!0;break t}catch{}w=!1}w||(u=null)}}else l=="mouseover"?u=i.fromElement:l=="mouseout"&&(u=i.toElement);this.relatedTarget=u,f?(this.clientX=f.clientX!==void 0?f.clientX:f.pageX,this.clientY=f.clientY!==void 0?f.clientY:f.pageY,this.screenX=f.screenX||0,this.screenY=f.screenY||0):(this.clientX=i.clientX!==void 0?i.clientX:i.pageX,this.clientY=i.clientY!==void 0?i.clientY:i.pageY,this.screenX=i.screenX||0,this.screenY=i.screenY||0),this.button=i.button,this.key=i.key||"",this.ctrlKey=i.ctrlKey,this.altKey=i.altKey,this.shiftKey=i.shiftKey,this.metaKey=i.metaKey,this.pointerId=i.pointerId||0,this.pointerType=typeof i.pointerType=="string"?i.pointerType:eh[i.pointerType]||"",this.state=i.state,this.i=i,i.defaultPrevented&&pn.aa.h.call(this)}}V(pn,_t);var eh={2:"touch",3:"pen",4:"mouse"};pn.prototype.h=function(){pn.aa.h.call(this);var i=this.i;i.preventDefault?i.preventDefault():i.returnValue=!1};var tr="closure_listenable_"+(1e6*Math.random()|0),nh=0;function rh(i,u,l,f,w){this.listener=i,this.proxy=null,this.src=u,this.type=l,this.capture=!!f,this.ha=w,this.key=++nh,this.da=this.fa=!1}function er(i){i.da=!0,i.listener=null,i.proxy=null,i.src=null,i.ha=null}function nr(i){this.src=i,this.g={},this.h=0}nr.prototype.add=function(i,u,l,f,w){var R=i.toString();i=this.g[R],i||(i=this.g[R]=[],this.h++);var D=fs(i,u,f,w);return-1<D?(u=i[D],l||(u.fa=!1)):(u=new rh(u,this.src,R,!!f,w),u.fa=l,i.push(u)),u};function ds(i,u){var l=u.type;if(l in i.g){var f=i.g[l],w=Array.prototype.indexOf.call(f,u,void 0),R;(R=0<=w)&&Array.prototype.splice.call(f,w,1),R&&(er(u),i.g[l].length==0&&(delete i.g[l],i.h--))}}function fs(i,u,l,f){for(var w=0;w<i.length;++w){var R=i[w];if(!R.da&&R.listener==u&&R.capture==!!l&&R.ha==f)return w}return-1}var ps="closure_lm_"+(1e6*Math.random()|0),ms={};function yo(i,u,l,f,w){if(Array.isArray(u)){for(var R=0;R<u.length;R++)yo(i,u[R],l,f,w);return null}return l=vo(l),i&&i[tr]?i.K(u,l,d(f)?!!f.capture:!1,w):sh(i,u,l,!1,f,w)}function sh(i,u,l,f,w,R){if(!u)throw Error("Invalid event type");var D=d(w)?!!w.capture:!!w,Y=_s(i);if(Y||(i[ps]=Y=new nr(i)),l=Y.add(u,l,f,D,R),l.proxy)return l;if(f=ih(),l.proxy=f,f.src=i,f.listener=l,i.addEventListener)th||(w=D),w===void 0&&(w=!1),i.addEventListener(u.toString(),f,w);else if(i.attachEvent)i.attachEvent(To(u.toString()),f);else if(i.addListener&&i.removeListener)i.addListener(f);else throw Error("addEventListener and attachEvent are unavailable.");return l}function ih(){function i(l){return u.call(i.src,i.listener,l)}const u=oh;return i}function Eo(i,u,l,f,w){if(Array.isArray(u))for(var R=0;R<u.length;R++)Eo(i,u[R],l,f,w);else f=d(f)?!!f.capture:!!f,l=vo(l),i&&i[tr]?(i=i.i,u=String(u).toString(),u in i.g&&(R=i.g[u],l=fs(R,l,f,w),-1<l&&(er(R[l]),Array.prototype.splice.call(R,l,1),R.length==0&&(delete i.g[u],i.h--)))):i&&(i=_s(i))&&(u=i.g[u.toString()],i=-1,u&&(i=fs(u,l,f,w)),(l=-1<i?u[i]:null)&&gs(l))}function gs(i){if(typeof i!="number"&&i&&!i.da){var u=i.src;if(u&&u[tr])ds(u.i,i);else{var l=i.type,f=i.proxy;u.removeEventListener?u.removeEventListener(l,f,i.capture):u.detachEvent?u.detachEvent(To(l),f):u.addListener&&u.removeListener&&u.removeListener(f),(l=_s(u))?(ds(l,i),l.h==0&&(l.src=null,u[ps]=null)):er(i)}}}function To(i){return i in ms?ms[i]:ms[i]="on"+i}function oh(i,u){if(i.da)i=!0;else{u=new pn(u,this);var l=i.listener,f=i.ha||i.src;i.fa&&gs(i),i=l.call(f,u)}return i}function _s(i){return i=i[ps],i instanceof nr?i:null}var ys="__closure_events_fn_"+(1e9*Math.random()>>>0);function vo(i){return typeof i=="function"?i:(i[ys]||(i[ys]=function(u){return i.handleEvent(u)}),i[ys])}function yt(){te.call(this),this.i=new nr(this),this.M=this,this.F=null}V(yt,te),yt.prototype[tr]=!0,yt.prototype.removeEventListener=function(i,u,l,f){Eo(this,i,u,l,f)};function At(i,u){var l,f=i.F;if(f)for(l=[];f;f=f.F)l.push(f);if(i=i.M,f=u.type||u,typeof u=="string")u=new _t(u,i);else if(u instanceof _t)u.target=u.target||i;else{var w=u;u=new _t(f,i),y(u,w)}if(w=!0,l)for(var R=l.length-1;0<=R;R--){var D=u.g=l[R];w=rr(D,f,!0,u)&&w}if(D=u.g=i,w=rr(D,f,!0,u)&&w,w=rr(D,f,!1,u)&&w,l)for(R=0;R<l.length;R++)D=u.g=l[R],w=rr(D,f,!1,u)&&w}yt.prototype.N=function(){if(yt.aa.N.call(this),this.i){var i=this.i,u;for(u in i.g){for(var l=i.g[u],f=0;f<l.length;f++)er(l[f]);delete i.g[u],i.h--}}this.F=null},yt.prototype.K=function(i,u,l,f){return this.i.add(String(i),u,!1,l,f)},yt.prototype.L=function(i,u,l,f){return this.i.add(String(i),u,!0,l,f)};function rr(i,u,l,f){if(u=i.i.g[String(u)],!u)return!0;u=u.concat();for(var w=!0,R=0;R<u.length;++R){var D=u[R];if(D&&!D.da&&D.capture==l){var Y=D.listener,dt=D.ha||D.src;D.fa&&ds(i.i,D),w=Y.call(dt,f)!==!1&&w}}return w&&!f.defaultPrevented}function Io(i,u,l){if(typeof i=="function")l&&(i=I(i,l));else if(i&&typeof i.handleEvent=="function")i=I(i.handleEvent,i);else throw Error("Invalid listener argument");return 2147483647<Number(u)?-1:c.setTimeout(i,u||0)}function wo(i){i.g=Io(()=>{i.g=null,i.i&&(i.i=!1,wo(i))},i.l);const u=i.h;i.h=null,i.m.apply(null,u)}class ah extends te{constructor(u,l){super(),this.m=u,this.l=l,this.h=null,this.i=!1,this.g=null}j(u){this.h=arguments,this.g?this.i=!0:wo(this)}N(){super.N(),this.g&&(c.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function mn(i){te.call(this),this.h=i,this.g={}}V(mn,te);var Ao=[];function Ro(i){it(i.g,function(u,l){this.g.hasOwnProperty(l)&&gs(u)},i),i.g={}}mn.prototype.N=function(){mn.aa.N.call(this),Ro(this)},mn.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var Es=c.JSON.stringify,uh=c.JSON.parse,ch=class{stringify(i){return c.JSON.stringify(i,void 0)}parse(i){return c.JSON.parse(i,void 0)}};function Ts(){}Ts.prototype.h=null;function bo(i){return i.h||(i.h=i.i())}function Co(){}var gn={OPEN:"a",kb:"b",Ja:"c",wb:"d"};function vs(){_t.call(this,"d")}V(vs,_t);function Is(){_t.call(this,"c")}V(Is,_t);var ve={},So=null;function sr(){return So=So||new yt}ve.La="serverreachability";function Po(i){_t.call(this,ve.La,i)}V(Po,_t);function _n(i){const u=sr();At(u,new Po(u))}ve.STAT_EVENT="statevent";function Vo(i,u){_t.call(this,ve.STAT_EVENT,i),this.stat=u}V(Vo,_t);function Rt(i){const u=sr();At(u,new Vo(u,i))}ve.Ma="timingevent";function Do(i,u){_t.call(this,ve.Ma,i),this.size=u}V(Do,_t);function yn(i,u){if(typeof i!="function")throw Error("Fn must not be null and must be a function");return c.setTimeout(function(){i()},u)}function En(){this.g=!0}En.prototype.xa=function(){this.g=!1};function lh(i,u,l,f,w,R){i.info(function(){if(i.g)if(R)for(var D="",Y=R.split("&"),dt=0;dt<Y.length;dt++){var Q=Y[dt].split("=");if(1<Q.length){var Et=Q[0];Q=Q[1];var Tt=Et.split("_");D=2<=Tt.length&&Tt[1]=="type"?D+(Et+"="+Q+"&"):D+(Et+"=redacted&")}}else D=null;else D=R;return"XMLHTTP REQ ("+f+") [attempt "+w+"]: "+u+`
`+l+`
`+D})}function hh(i,u,l,f,w,R,D){i.info(function(){return"XMLHTTP RESP ("+f+") [ attempt "+w+"]: "+u+`
`+l+`
`+R+" "+D})}function Fe(i,u,l,f){i.info(function(){return"XMLHTTP TEXT ("+u+"): "+fh(i,l)+(f?" "+f:"")})}function dh(i,u){i.info(function(){return"TIMEOUT: "+u})}En.prototype.info=function(){};function fh(i,u){if(!i.g)return u;if(!u)return null;try{var l=JSON.parse(u);if(l){for(i=0;i<l.length;i++)if(Array.isArray(l[i])){var f=l[i];if(!(2>f.length)){var w=f[1];if(Array.isArray(w)&&!(1>w.length)){var R=w[0];if(R!="noop"&&R!="stop"&&R!="close")for(var D=1;D<w.length;D++)w[D]=""}}}}return Es(l)}catch{return u}}var ir={NO_ERROR:0,gb:1,tb:2,sb:3,nb:4,rb:5,ub:6,Ia:7,TIMEOUT:8,xb:9},ko={lb:"complete",Hb:"success",Ja:"error",Ia:"abort",zb:"ready",Ab:"readystatechange",TIMEOUT:"timeout",vb:"incrementaldata",yb:"progress",ob:"downloadprogress",Pb:"uploadprogress"},ws;function or(){}V(or,Ts),or.prototype.g=function(){return new XMLHttpRequest},or.prototype.i=function(){return{}},ws=new or;function ee(i,u,l,f){this.j=i,this.i=u,this.l=l,this.R=f||1,this.U=new mn(this),this.I=45e3,this.H=null,this.o=!1,this.m=this.A=this.v=this.L=this.F=this.S=this.B=null,this.D=[],this.g=null,this.C=0,this.s=this.u=null,this.X=-1,this.J=!1,this.O=0,this.M=null,this.W=this.K=this.T=this.P=!1,this.h=new No}function No(){this.i=null,this.g="",this.h=!1}var xo={},As={};function Rs(i,u,l){i.L=1,i.v=lr(Ht(u)),i.m=l,i.P=!0,Oo(i,null)}function Oo(i,u){i.F=Date.now(),ar(i),i.A=Ht(i.v);var l=i.A,f=i.R;Array.isArray(f)||(f=[String(f)]),Wo(l.i,"t",f),i.C=0,l=i.j.J,i.h=new No,i.g=fa(i.j,l?u:null,!i.m),0<i.O&&(i.M=new ah(I(i.Y,i,i.g),i.O)),u=i.U,l=i.g,f=i.ca;var w="readystatechange";Array.isArray(w)||(w&&(Ao[0]=w.toString()),w=Ao);for(var R=0;R<w.length;R++){var D=yo(l,w[R],f||u.handleEvent,!1,u.h||u);if(!D)break;u.g[D.key]=D}u=i.H?p(i.H):{},i.m?(i.u||(i.u="POST"),u["Content-Type"]="application/x-www-form-urlencoded",i.g.ea(i.A,i.u,i.m,u)):(i.u="GET",i.g.ea(i.A,i.u,null,u)),_n(),lh(i.i,i.u,i.A,i.l,i.R,i.m)}ee.prototype.ca=function(i){i=i.target;const u=this.M;u&&Gt(i)==3?u.j():this.Y(i)},ee.prototype.Y=function(i){try{if(i==this.g)t:{const Tt=Gt(this.g);var u=this.g.Ba();const je=this.g.Z();if(!(3>Tt)&&(Tt!=3||this.g&&(this.h.h||this.g.oa()||na(this.g)))){this.J||Tt!=4||u==7||(u==8||0>=je?_n(3):_n(2)),bs(this);var l=this.g.Z();this.X=l;e:if(Mo(this)){var f=na(this.g);i="";var w=f.length,R=Gt(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){Ie(this),Tn(this);var D="";break e}this.h.i=new c.TextDecoder}for(u=0;u<w;u++)this.h.h=!0,i+=this.h.i.decode(f[u],{stream:!(R&&u==w-1)});f.length=0,this.h.g+=i,this.C=0,D=this.h.g}else D=this.g.oa();if(this.o=l==200,hh(this.i,this.u,this.A,this.l,this.R,Tt,l),this.o){if(this.T&&!this.K){e:{if(this.g){var Y,dt=this.g;if((Y=dt.g?dt.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!B(Y)){var Q=Y;break e}}Q=null}if(l=Q)Fe(this.i,this.l,l,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,Cs(this,l);else{this.o=!1,this.s=3,Rt(12),Ie(this),Tn(this);break t}}if(this.P){l=!0;let Ot;for(;!this.J&&this.C<D.length;)if(Ot=ph(this,D),Ot==As){Tt==4&&(this.s=4,Rt(14),l=!1),Fe(this.i,this.l,null,"[Incomplete Response]");break}else if(Ot==xo){this.s=4,Rt(15),Fe(this.i,this.l,D,"[Invalid Chunk]"),l=!1;break}else Fe(this.i,this.l,Ot,null),Cs(this,Ot);if(Mo(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),Tt!=4||D.length!=0||this.h.h||(this.s=1,Rt(16),l=!1),this.o=this.o&&l,!l)Fe(this.i,this.l,D,"[Invalid Chunked Response]"),Ie(this),Tn(this);else if(0<D.length&&!this.W){this.W=!0;var Et=this.j;Et.g==this&&Et.ba&&!Et.M&&(Et.j.info("Great, no buffering proxy detected. Bytes received: "+D.length),Ns(Et),Et.M=!0,Rt(11))}}else Fe(this.i,this.l,D,null),Cs(this,D);Tt==4&&Ie(this),this.o&&!this.J&&(Tt==4?ca(this.j,this):(this.o=!1,ar(this)))}else Dh(this.g),l==400&&0<D.indexOf("Unknown SID")?(this.s=3,Rt(12)):(this.s=0,Rt(13)),Ie(this),Tn(this)}}}catch{}finally{}};function Mo(i){return i.g?i.u=="GET"&&i.L!=2&&i.j.Ca:!1}function ph(i,u){var l=i.C,f=u.indexOf(`
`,l);return f==-1?As:(l=Number(u.substring(l,f)),isNaN(l)?xo:(f+=1,f+l>u.length?As:(u=u.slice(f,f+l),i.C=f+l,u)))}ee.prototype.cancel=function(){this.J=!0,Ie(this)};function ar(i){i.S=Date.now()+i.I,Lo(i,i.I)}function Lo(i,u){if(i.B!=null)throw Error("WatchDog timer not null");i.B=yn(I(i.ba,i),u)}function bs(i){i.B&&(c.clearTimeout(i.B),i.B=null)}ee.prototype.ba=function(){this.B=null;const i=Date.now();0<=i-this.S?(dh(this.i,this.A),this.L!=2&&(_n(),Rt(17)),Ie(this),this.s=2,Tn(this)):Lo(this,this.S-i)};function Tn(i){i.j.G==0||i.J||ca(i.j,i)}function Ie(i){bs(i);var u=i.M;u&&typeof u.ma=="function"&&u.ma(),i.M=null,Ro(i.U),i.g&&(u=i.g,i.g=null,u.abort(),u.ma())}function Cs(i,u){try{var l=i.j;if(l.G!=0&&(l.g==i||Ss(l.h,i))){if(!i.K&&Ss(l.h,i)&&l.G==3){try{var f=l.Da.g.parse(u)}catch{f=null}if(Array.isArray(f)&&f.length==3){var w=f;if(w[0]==0){t:if(!l.u){if(l.g)if(l.g.F+3e3<i.F)gr(l),pr(l);else break t;ks(l),Rt(18)}}else l.za=w[1],0<l.za-l.T&&37500>w[2]&&l.F&&l.v==0&&!l.C&&(l.C=yn(I(l.Za,l),6e3));if(1>=Bo(l.h)&&l.ca){try{l.ca()}catch{}l.ca=void 0}}else Ae(l,11)}else if((i.K||l.g==i)&&gr(l),!B(u))for(w=l.Da.g.parse(u),u=0;u<w.length;u++){let Q=w[u];if(l.T=Q[0],Q=Q[1],l.G==2)if(Q[0]=="c"){l.K=Q[1],l.ia=Q[2];const Et=Q[3];Et!=null&&(l.la=Et,l.j.info("VER="+l.la));const Tt=Q[4];Tt!=null&&(l.Aa=Tt,l.j.info("SVER="+l.Aa));const je=Q[5];je!=null&&typeof je=="number"&&0<je&&(f=1.5*je,l.L=f,l.j.info("backChannelRequestTimeoutMs_="+f)),f=l;const Ot=i.g;if(Ot){const yr=Ot.g?Ot.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(yr){var R=f.h;R.g||yr.indexOf("spdy")==-1&&yr.indexOf("quic")==-1&&yr.indexOf("h2")==-1||(R.j=R.l,R.g=new Set,R.h&&(Ps(R,R.h),R.h=null))}if(f.D){const xs=Ot.g?Ot.g.getResponseHeader("X-HTTP-Session-Id"):null;xs&&(f.ya=xs,J(f.I,f.D,xs))}}l.G=3,l.l&&l.l.ua(),l.ba&&(l.R=Date.now()-i.F,l.j.info("Handshake RTT: "+l.R+"ms")),f=l;var D=i;if(f.qa=da(f,f.J?f.ia:null,f.W),D.K){jo(f.h,D);var Y=D,dt=f.L;dt&&(Y.I=dt),Y.B&&(bs(Y),ar(Y)),f.g=D}else aa(f);0<l.i.length&&mr(l)}else Q[0]!="stop"&&Q[0]!="close"||Ae(l,7);else l.G==3&&(Q[0]=="stop"||Q[0]=="close"?Q[0]=="stop"?Ae(l,7):Ds(l):Q[0]!="noop"&&l.l&&l.l.ta(Q),l.v=0)}}_n(4)}catch{}}var mh=class{constructor(i,u){this.g=i,this.map=u}};function Fo(i){this.l=i||10,c.PerformanceNavigationTiming?(i=c.performance.getEntriesByType("navigation"),i=0<i.length&&(i[0].nextHopProtocol=="hq"||i[0].nextHopProtocol=="h2")):i=!!(c.chrome&&c.chrome.loadTimes&&c.chrome.loadTimes()&&c.chrome.loadTimes().wasFetchedViaSpdy),this.j=i?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}function Uo(i){return i.h?!0:i.g?i.g.size>=i.j:!1}function Bo(i){return i.h?1:i.g?i.g.size:0}function Ss(i,u){return i.h?i.h==u:i.g?i.g.has(u):!1}function Ps(i,u){i.g?i.g.add(u):i.h=u}function jo(i,u){i.h&&i.h==u?i.h=null:i.g&&i.g.has(u)&&i.g.delete(u)}Fo.prototype.cancel=function(){if(this.i=$o(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const i of this.g.values())i.cancel();this.g.clear()}};function $o(i){if(i.h!=null)return i.i.concat(i.h.D);if(i.g!=null&&i.g.size!==0){let u=i.i;for(const l of i.g.values())u=u.concat(l.D);return u}return x(i.i)}function gh(i){if(i.V&&typeof i.V=="function")return i.V();if(typeof Map<"u"&&i instanceof Map||typeof Set<"u"&&i instanceof Set)return Array.from(i.values());if(typeof i=="string")return i.split("");if(h(i)){for(var u=[],l=i.length,f=0;f<l;f++)u.push(i[f]);return u}u=[],l=0;for(f in i)u[l++]=i[f];return u}function _h(i){if(i.na&&typeof i.na=="function")return i.na();if(!i.V||typeof i.V!="function"){if(typeof Map<"u"&&i instanceof Map)return Array.from(i.keys());if(!(typeof Set<"u"&&i instanceof Set)){if(h(i)||typeof i=="string"){var u=[];i=i.length;for(var l=0;l<i;l++)u.push(l);return u}u=[],l=0;for(const f in i)u[l++]=f;return u}}}function qo(i,u){if(i.forEach&&typeof i.forEach=="function")i.forEach(u,void 0);else if(h(i)||typeof i=="string")Array.prototype.forEach.call(i,u,void 0);else for(var l=_h(i),f=gh(i),w=f.length,R=0;R<w;R++)u.call(void 0,f[R],l&&l[R],i)}var zo=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function yh(i,u){if(i){i=i.split("&");for(var l=0;l<i.length;l++){var f=i[l].indexOf("="),w=null;if(0<=f){var R=i[l].substring(0,f);w=i[l].substring(f+1)}else R=i[l];u(R,w?decodeURIComponent(w.replace(/\+/g," ")):"")}}}function we(i){if(this.g=this.o=this.j="",this.s=null,this.m=this.l="",this.h=!1,i instanceof we){this.h=i.h,ur(this,i.j),this.o=i.o,this.g=i.g,cr(this,i.s),this.l=i.l;var u=i.i,l=new wn;l.i=u.i,u.g&&(l.g=new Map(u.g),l.h=u.h),Ho(this,l),this.m=i.m}else i&&(u=String(i).match(zo))?(this.h=!1,ur(this,u[1]||"",!0),this.o=vn(u[2]||""),this.g=vn(u[3]||"",!0),cr(this,u[4]),this.l=vn(u[5]||"",!0),Ho(this,u[6]||"",!0),this.m=vn(u[7]||"")):(this.h=!1,this.i=new wn(null,this.h))}we.prototype.toString=function(){var i=[],u=this.j;u&&i.push(In(u,Go,!0),":");var l=this.g;return(l||u=="file")&&(i.push("//"),(u=this.o)&&i.push(In(u,Go,!0),"@"),i.push(encodeURIComponent(String(l)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),l=this.s,l!=null&&i.push(":",String(l))),(l=this.l)&&(this.g&&l.charAt(0)!="/"&&i.push("/"),i.push(In(l,l.charAt(0)=="/"?vh:Th,!0))),(l=this.i.toString())&&i.push("?",l),(l=this.m)&&i.push("#",In(l,wh)),i.join("")};function Ht(i){return new we(i)}function ur(i,u,l){i.j=l?vn(u,!0):u,i.j&&(i.j=i.j.replace(/:$/,""))}function cr(i,u){if(u){if(u=Number(u),isNaN(u)||0>u)throw Error("Bad port number "+u);i.s=u}else i.s=null}function Ho(i,u,l){u instanceof wn?(i.i=u,Ah(i.i,i.h)):(l||(u=In(u,Ih)),i.i=new wn(u,i.h))}function J(i,u,l){i.i.set(u,l)}function lr(i){return J(i,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),i}function vn(i,u){return i?u?decodeURI(i.replace(/%25/g,"%2525")):decodeURIComponent(i):""}function In(i,u,l){return typeof i=="string"?(i=encodeURI(i).replace(u,Eh),l&&(i=i.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),i):null}function Eh(i){return i=i.charCodeAt(0),"%"+(i>>4&15).toString(16)+(i&15).toString(16)}var Go=/[#\/\?@]/g,Th=/[#\?:]/g,vh=/[#\?]/g,Ih=/[#\?@]/g,wh=/#/g;function wn(i,u){this.h=this.g=null,this.i=i||null,this.j=!!u}function ne(i){i.g||(i.g=new Map,i.h=0,i.i&&yh(i.i,function(u,l){i.add(decodeURIComponent(u.replace(/\+/g," ")),l)}))}n=wn.prototype,n.add=function(i,u){ne(this),this.i=null,i=Ue(this,i);var l=this.g.get(i);return l||this.g.set(i,l=[]),l.push(u),this.h+=1,this};function Ko(i,u){ne(i),u=Ue(i,u),i.g.has(u)&&(i.i=null,i.h-=i.g.get(u).length,i.g.delete(u))}function Qo(i,u){return ne(i),u=Ue(i,u),i.g.has(u)}n.forEach=function(i,u){ne(this),this.g.forEach(function(l,f){l.forEach(function(w){i.call(u,w,f,this)},this)},this)},n.na=function(){ne(this);const i=Array.from(this.g.values()),u=Array.from(this.g.keys()),l=[];for(let f=0;f<u.length;f++){const w=i[f];for(let R=0;R<w.length;R++)l.push(u[f])}return l},n.V=function(i){ne(this);let u=[];if(typeof i=="string")Qo(this,i)&&(u=u.concat(this.g.get(Ue(this,i))));else{i=Array.from(this.g.values());for(let l=0;l<i.length;l++)u=u.concat(i[l])}return u},n.set=function(i,u){return ne(this),this.i=null,i=Ue(this,i),Qo(this,i)&&(this.h-=this.g.get(i).length),this.g.set(i,[u]),this.h+=1,this},n.get=function(i,u){return i?(i=this.V(i),0<i.length?String(i[0]):u):u};function Wo(i,u,l){Ko(i,u),0<l.length&&(i.i=null,i.g.set(Ue(i,u),x(l)),i.h+=l.length)}n.toString=function(){if(this.i)return this.i;if(!this.g)return"";const i=[],u=Array.from(this.g.keys());for(var l=0;l<u.length;l++){var f=u[l];const R=encodeURIComponent(String(f)),D=this.V(f);for(f=0;f<D.length;f++){var w=R;D[f]!==""&&(w+="="+encodeURIComponent(String(D[f]))),i.push(w)}}return this.i=i.join("&")};function Ue(i,u){return u=String(u),i.j&&(u=u.toLowerCase()),u}function Ah(i,u){u&&!i.j&&(ne(i),i.i=null,i.g.forEach(function(l,f){var w=f.toLowerCase();f!=w&&(Ko(this,f),Wo(this,w,l))},i)),i.j=u}function Rh(i,u){const l=new En;if(c.Image){const f=new Image;f.onload=b(re,l,"TestLoadImage: loaded",!0,u,f),f.onerror=b(re,l,"TestLoadImage: error",!1,u,f),f.onabort=b(re,l,"TestLoadImage: abort",!1,u,f),f.ontimeout=b(re,l,"TestLoadImage: timeout",!1,u,f),c.setTimeout(function(){f.ontimeout&&f.ontimeout()},1e4),f.src=i}else u(!1)}function bh(i,u){const l=new En,f=new AbortController,w=setTimeout(()=>{f.abort(),re(l,"TestPingServer: timeout",!1,u)},1e4);fetch(i,{signal:f.signal}).then(R=>{clearTimeout(w),R.ok?re(l,"TestPingServer: ok",!0,u):re(l,"TestPingServer: server error",!1,u)}).catch(()=>{clearTimeout(w),re(l,"TestPingServer: error",!1,u)})}function re(i,u,l,f,w){try{w&&(w.onload=null,w.onerror=null,w.onabort=null,w.ontimeout=null),f(l)}catch{}}function Ch(){this.g=new ch}function Sh(i,u,l){const f=l||"";try{qo(i,function(w,R){let D=w;d(w)&&(D=Es(w)),u.push(f+R+"="+encodeURIComponent(D))})}catch(w){throw u.push(f+"type="+encodeURIComponent("_badmap")),w}}function hr(i){this.l=i.Ub||null,this.j=i.eb||!1}V(hr,Ts),hr.prototype.g=function(){return new dr(this.l,this.j)},hr.prototype.i=function(i){return function(){return i}}({});function dr(i,u){yt.call(this),this.D=i,this.o=u,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.u=new Headers,this.h=null,this.B="GET",this.A="",this.g=!1,this.v=this.j=this.l=null}V(dr,yt),n=dr.prototype,n.open=function(i,u){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.B=i,this.A=u,this.readyState=1,Rn(this)},n.send=function(i){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const u={headers:this.u,method:this.B,credentials:this.m,cache:void 0};i&&(u.body=i),(this.D||c).fetch(new Request(this.A,u)).then(this.Sa.bind(this),this.ga.bind(this))},n.abort=function(){this.response=this.responseText="",this.u=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,An(this)),this.readyState=0},n.Sa=function(i){if(this.g&&(this.l=i,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=i.headers,this.readyState=2,Rn(this)),this.g&&(this.readyState=3,Rn(this),this.g)))if(this.responseType==="arraybuffer")i.arrayBuffer().then(this.Qa.bind(this),this.ga.bind(this));else if(typeof c.ReadableStream<"u"&&"body"in i){if(this.j=i.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.v=new TextDecoder;Xo(this)}else i.text().then(this.Ra.bind(this),this.ga.bind(this))};function Xo(i){i.j.read().then(i.Pa.bind(i)).catch(i.ga.bind(i))}n.Pa=function(i){if(this.g){if(this.o&&i.value)this.response.push(i.value);else if(!this.o){var u=i.value?i.value:new Uint8Array(0);(u=this.v.decode(u,{stream:!i.done}))&&(this.response=this.responseText+=u)}i.done?An(this):Rn(this),this.readyState==3&&Xo(this)}},n.Ra=function(i){this.g&&(this.response=this.responseText=i,An(this))},n.Qa=function(i){this.g&&(this.response=i,An(this))},n.ga=function(){this.g&&An(this)};function An(i){i.readyState=4,i.l=null,i.j=null,i.v=null,Rn(i)}n.setRequestHeader=function(i,u){this.u.append(i,u)},n.getResponseHeader=function(i){return this.h&&this.h.get(i.toLowerCase())||""},n.getAllResponseHeaders=function(){if(!this.h)return"";const i=[],u=this.h.entries();for(var l=u.next();!l.done;)l=l.value,i.push(l[0]+": "+l[1]),l=u.next();return i.join(`\r
`)};function Rn(i){i.onreadystatechange&&i.onreadystatechange.call(i)}Object.defineProperty(dr.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(i){this.m=i?"include":"same-origin"}});function Yo(i){let u="";return it(i,function(l,f){u+=f,u+=":",u+=l,u+=`\r
`}),u}function Vs(i,u,l){t:{for(f in l){var f=!1;break t}f=!0}f||(l=Yo(l),typeof i=="string"?l!=null&&encodeURIComponent(String(l)):J(i,u,l))}function nt(i){yt.call(this),this.headers=new Map,this.o=i||null,this.h=!1,this.v=this.g=null,this.D="",this.m=0,this.l="",this.j=this.B=this.u=this.A=!1,this.I=null,this.H="",this.J=!1}V(nt,yt);var Ph=/^https?$/i,Vh=["POST","PUT"];n=nt.prototype,n.Ha=function(i){this.J=i},n.ea=function(i,u,l,f){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+i);u=u?u.toUpperCase():"GET",this.D=i,this.l="",this.m=0,this.A=!1,this.h=!0,this.g=this.o?this.o.g():ws.g(),this.v=this.o?bo(this.o):bo(ws),this.g.onreadystatechange=I(this.Ea,this);try{this.B=!0,this.g.open(u,String(i),!0),this.B=!1}catch(R){Jo(this,R);return}if(i=l||"",l=new Map(this.headers),f)if(Object.getPrototypeOf(f)===Object.prototype)for(var w in f)l.set(w,f[w]);else if(typeof f.keys=="function"&&typeof f.get=="function")for(const R of f.keys())l.set(R,f.get(R));else throw Error("Unknown input type for opt_headers: "+String(f));f=Array.from(l.keys()).find(R=>R.toLowerCase()=="content-type"),w=c.FormData&&i instanceof c.FormData,!(0<=Array.prototype.indexOf.call(Vh,u,void 0))||f||w||l.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[R,D]of l)this.g.setRequestHeader(R,D);this.H&&(this.g.responseType=this.H),"withCredentials"in this.g&&this.g.withCredentials!==this.J&&(this.g.withCredentials=this.J);try{ea(this),this.u=!0,this.g.send(i),this.u=!1}catch(R){Jo(this,R)}};function Jo(i,u){i.h=!1,i.g&&(i.j=!0,i.g.abort(),i.j=!1),i.l=u,i.m=5,Zo(i),fr(i)}function Zo(i){i.A||(i.A=!0,At(i,"complete"),At(i,"error"))}n.abort=function(i){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.m=i||7,At(this,"complete"),At(this,"abort"),fr(this))},n.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),fr(this,!0)),nt.aa.N.call(this)},n.Ea=function(){this.s||(this.B||this.u||this.j?ta(this):this.bb())},n.bb=function(){ta(this)};function ta(i){if(i.h&&typeof a<"u"&&(!i.v[1]||Gt(i)!=4||i.Z()!=2)){if(i.u&&Gt(i)==4)Io(i.Ea,0,i);else if(At(i,"readystatechange"),Gt(i)==4){i.h=!1;try{const D=i.Z();t:switch(D){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var u=!0;break t;default:u=!1}var l;if(!(l=u)){var f;if(f=D===0){var w=String(i.D).match(zo)[1]||null;!w&&c.self&&c.self.location&&(w=c.self.location.protocol.slice(0,-1)),f=!Ph.test(w?w.toLowerCase():"")}l=f}if(l)At(i,"complete"),At(i,"success");else{i.m=6;try{var R=2<Gt(i)?i.g.statusText:""}catch{R=""}i.l=R+" ["+i.Z()+"]",Zo(i)}}finally{fr(i)}}}}function fr(i,u){if(i.g){ea(i);const l=i.g,f=i.v[0]?()=>{}:null;i.g=null,i.v=null,u||At(i,"ready");try{l.onreadystatechange=f}catch{}}}function ea(i){i.I&&(c.clearTimeout(i.I),i.I=null)}n.isActive=function(){return!!this.g};function Gt(i){return i.g?i.g.readyState:0}n.Z=function(){try{return 2<Gt(this)?this.g.status:-1}catch{return-1}},n.oa=function(){try{return this.g?this.g.responseText:""}catch{return""}},n.Oa=function(i){if(this.g){var u=this.g.responseText;return i&&u.indexOf(i)==0&&(u=u.substring(i.length)),uh(u)}};function na(i){try{if(!i.g)return null;if("response"in i.g)return i.g.response;switch(i.H){case"":case"text":return i.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in i.g)return i.g.mozResponseArrayBuffer}return null}catch{return null}}function Dh(i){const u={};i=(i.g&&2<=Gt(i)&&i.g.getAllResponseHeaders()||"").split(`\r
`);for(let f=0;f<i.length;f++){if(B(i[f]))continue;var l=T(i[f]);const w=l[0];if(l=l[1],typeof l!="string")continue;l=l.trim();const R=u[w]||[];u[w]=R,R.push(l)}v(u,function(f){return f.join(", ")})}n.Ba=function(){return this.m},n.Ka=function(){return typeof this.l=="string"?this.l:String(this.l)};function bn(i,u,l){return l&&l.internalChannelParams&&l.internalChannelParams[i]||u}function ra(i){this.Aa=0,this.i=[],this.j=new En,this.ia=this.qa=this.I=this.W=this.g=this.ya=this.D=this.H=this.m=this.S=this.o=null,this.Ya=this.U=0,this.Va=bn("failFast",!1,i),this.F=this.C=this.u=this.s=this.l=null,this.X=!0,this.za=this.T=-1,this.Y=this.v=this.B=0,this.Ta=bn("baseRetryDelayMs",5e3,i),this.cb=bn("retryDelaySeedMs",1e4,i),this.Wa=bn("forwardChannelMaxRetries",2,i),this.wa=bn("forwardChannelRequestTimeoutMs",2e4,i),this.pa=i&&i.xmlHttpFactory||void 0,this.Xa=i&&i.Tb||void 0,this.Ca=i&&i.useFetchStreams||!1,this.L=void 0,this.J=i&&i.supportsCrossDomainXhr||!1,this.K="",this.h=new Fo(i&&i.concurrentRequestLimit),this.Da=new Ch,this.P=i&&i.fastHandshake||!1,this.O=i&&i.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.Ua=i&&i.Rb||!1,i&&i.xa&&this.j.xa(),i&&i.forceLongPolling&&(this.X=!1),this.ba=!this.P&&this.X&&i&&i.detectBufferingProxy||!1,this.ja=void 0,i&&i.longPollingTimeout&&0<i.longPollingTimeout&&(this.ja=i.longPollingTimeout),this.ca=void 0,this.R=0,this.M=!1,this.ka=this.A=null}n=ra.prototype,n.la=8,n.G=1,n.connect=function(i,u,l,f){Rt(0),this.W=i,this.H=u||{},l&&f!==void 0&&(this.H.OSID=l,this.H.OAID=f),this.F=this.X,this.I=da(this,null,this.W),mr(this)};function Ds(i){if(sa(i),i.G==3){var u=i.U++,l=Ht(i.I);if(J(l,"SID",i.K),J(l,"RID",u),J(l,"TYPE","terminate"),Cn(i,l),u=new ee(i,i.j,u),u.L=2,u.v=lr(Ht(l)),l=!1,c.navigator&&c.navigator.sendBeacon)try{l=c.navigator.sendBeacon(u.v.toString(),"")}catch{}!l&&c.Image&&(new Image().src=u.v,l=!0),l||(u.g=fa(u.j,null),u.g.ea(u.v)),u.F=Date.now(),ar(u)}ha(i)}function pr(i){i.g&&(Ns(i),i.g.cancel(),i.g=null)}function sa(i){pr(i),i.u&&(c.clearTimeout(i.u),i.u=null),gr(i),i.h.cancel(),i.s&&(typeof i.s=="number"&&c.clearTimeout(i.s),i.s=null)}function mr(i){if(!Uo(i.h)&&!i.s){i.s=!0;var u=i.Ga;dn||_o(),fn||(dn(),fn=!0),hs.add(u,i),i.B=0}}function kh(i,u){return Bo(i.h)>=i.h.j-(i.s?1:0)?!1:i.s?(i.i=u.D.concat(i.i),!0):i.G==1||i.G==2||i.B>=(i.Va?0:i.Wa)?!1:(i.s=yn(I(i.Ga,i,u),la(i,i.B)),i.B++,!0)}n.Ga=function(i){if(this.s)if(this.s=null,this.G==1){if(!i){this.U=Math.floor(1e5*Math.random()),i=this.U++;const w=new ee(this,this.j,i);let R=this.o;if(this.S&&(R?(R=p(R),y(R,this.S)):R=this.S),this.m!==null||this.O||(w.H=R,R=null),this.P)t:{for(var u=0,l=0;l<this.i.length;l++){e:{var f=this.i[l];if("__data__"in f.map&&(f=f.map.__data__,typeof f=="string")){f=f.length;break e}f=void 0}if(f===void 0)break;if(u+=f,4096<u){u=l;break t}if(u===4096||l===this.i.length-1){u=l+1;break t}}u=1e3}else u=1e3;u=oa(this,w,u),l=Ht(this.I),J(l,"RID",i),J(l,"CVER",22),this.D&&J(l,"X-HTTP-Session-Id",this.D),Cn(this,l),R&&(this.O?u="headers="+encodeURIComponent(String(Yo(R)))+"&"+u:this.m&&Vs(l,this.m,R)),Ps(this.h,w),this.Ua&&J(l,"TYPE","init"),this.P?(J(l,"$req",u),J(l,"SID","null"),w.T=!0,Rs(w,l,null)):Rs(w,l,u),this.G=2}}else this.G==3&&(i?ia(this,i):this.i.length==0||Uo(this.h)||ia(this))};function ia(i,u){var l;u?l=u.l:l=i.U++;const f=Ht(i.I);J(f,"SID",i.K),J(f,"RID",l),J(f,"AID",i.T),Cn(i,f),i.m&&i.o&&Vs(f,i.m,i.o),l=new ee(i,i.j,l,i.B+1),i.m===null&&(l.H=i.o),u&&(i.i=u.D.concat(i.i)),u=oa(i,l,1e3),l.I=Math.round(.5*i.wa)+Math.round(.5*i.wa*Math.random()),Ps(i.h,l),Rs(l,f,u)}function Cn(i,u){i.H&&it(i.H,function(l,f){J(u,f,l)}),i.l&&qo({},function(l,f){J(u,f,l)})}function oa(i,u,l){l=Math.min(i.i.length,l);var f=i.l?I(i.l.Na,i.l,i):null;t:{var w=i.i;let R=-1;for(;;){const D=["count="+l];R==-1?0<l?(R=w[0].g,D.push("ofs="+R)):R=0:D.push("ofs="+R);let Y=!0;for(let dt=0;dt<l;dt++){let Q=w[dt].g;const Et=w[dt].map;if(Q-=R,0>Q)R=Math.max(0,w[dt].g-100),Y=!1;else try{Sh(Et,D,"req"+Q+"_")}catch{f&&f(Et)}}if(Y){f=D.join("&");break t}}}return i=i.i.splice(0,l),u.D=i,f}function aa(i){if(!i.g&&!i.u){i.Y=1;var u=i.Fa;dn||_o(),fn||(dn(),fn=!0),hs.add(u,i),i.v=0}}function ks(i){return i.g||i.u||3<=i.v?!1:(i.Y++,i.u=yn(I(i.Fa,i),la(i,i.v)),i.v++,!0)}n.Fa=function(){if(this.u=null,ua(this),this.ba&&!(this.M||this.g==null||0>=this.R)){var i=2*this.R;this.j.info("BP detection timer enabled: "+i),this.A=yn(I(this.ab,this),i)}},n.ab=function(){this.A&&(this.A=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.M=!0,Rt(10),pr(this),ua(this))};function Ns(i){i.A!=null&&(c.clearTimeout(i.A),i.A=null)}function ua(i){i.g=new ee(i,i.j,"rpc",i.Y),i.m===null&&(i.g.H=i.o),i.g.O=0;var u=Ht(i.qa);J(u,"RID","rpc"),J(u,"SID",i.K),J(u,"AID",i.T),J(u,"CI",i.F?"0":"1"),!i.F&&i.ja&&J(u,"TO",i.ja),J(u,"TYPE","xmlhttp"),Cn(i,u),i.m&&i.o&&Vs(u,i.m,i.o),i.L&&(i.g.I=i.L);var l=i.g;i=i.ia,l.L=1,l.v=lr(Ht(u)),l.m=null,l.P=!0,Oo(l,i)}n.Za=function(){this.C!=null&&(this.C=null,pr(this),ks(this),Rt(19))};function gr(i){i.C!=null&&(c.clearTimeout(i.C),i.C=null)}function ca(i,u){var l=null;if(i.g==u){gr(i),Ns(i),i.g=null;var f=2}else if(Ss(i.h,u))l=u.D,jo(i.h,u),f=1;else return;if(i.G!=0){if(u.o)if(f==1){l=u.m?u.m.length:0,u=Date.now()-u.F;var w=i.B;f=sr(),At(f,new Do(f,l)),mr(i)}else aa(i);else if(w=u.s,w==3||w==0&&0<u.X||!(f==1&&kh(i,u)||f==2&&ks(i)))switch(l&&0<l.length&&(u=i.h,u.i=u.i.concat(l)),w){case 1:Ae(i,5);break;case 4:Ae(i,10);break;case 3:Ae(i,6);break;default:Ae(i,2)}}}function la(i,u){let l=i.Ta+Math.floor(Math.random()*i.cb);return i.isActive()||(l*=2),l*u}function Ae(i,u){if(i.j.info("Error code "+u),u==2){var l=I(i.fb,i),f=i.Xa;const w=!f;f=new we(f||"//www.google.com/images/cleardot.gif"),c.location&&c.location.protocol=="http"||ur(f,"https"),lr(f),w?Rh(f.toString(),l):bh(f.toString(),l)}else Rt(2);i.G=0,i.l&&i.l.sa(u),ha(i),sa(i)}n.fb=function(i){i?(this.j.info("Successfully pinged google.com"),Rt(2)):(this.j.info("Failed to ping google.com"),Rt(1))};function ha(i){if(i.G=0,i.ka=[],i.l){const u=$o(i.h);(u.length!=0||i.i.length!=0)&&(P(i.ka,u),P(i.ka,i.i),i.h.i.length=0,x(i.i),i.i.length=0),i.l.ra()}}function da(i,u,l){var f=l instanceof we?Ht(l):new we(l);if(f.g!="")u&&(f.g=u+"."+f.g),cr(f,f.s);else{var w=c.location;f=w.protocol,u=u?u+"."+w.hostname:w.hostname,w=+w.port;var R=new we(null);f&&ur(R,f),u&&(R.g=u),w&&cr(R,w),l&&(R.l=l),f=R}return l=i.D,u=i.ya,l&&u&&J(f,l,u),J(f,"VER",i.la),Cn(i,f),f}function fa(i,u,l){if(u&&!i.J)throw Error("Can't create secondary domain capable XhrIo object.");return u=i.Ca&&!i.pa?new nt(new hr({eb:l})):new nt(i.pa),u.Ha(i.J),u}n.isActive=function(){return!!this.l&&this.l.isActive(this)};function pa(){}n=pa.prototype,n.ua=function(){},n.ta=function(){},n.sa=function(){},n.ra=function(){},n.isActive=function(){return!0},n.Na=function(){};function _r(){}_r.prototype.g=function(i,u){return new Vt(i,u)};function Vt(i,u){yt.call(this),this.g=new ra(u),this.l=i,this.h=u&&u.messageUrlParams||null,i=u&&u.messageHeaders||null,u&&u.clientProtocolHeaderRequired&&(i?i["X-Client-Protocol"]="webchannel":i={"X-Client-Protocol":"webchannel"}),this.g.o=i,i=u&&u.initMessageHeaders||null,u&&u.messageContentType&&(i?i["X-WebChannel-Content-Type"]=u.messageContentType:i={"X-WebChannel-Content-Type":u.messageContentType}),u&&u.va&&(i?i["X-WebChannel-Client-Profile"]=u.va:i={"X-WebChannel-Client-Profile":u.va}),this.g.S=i,(i=u&&u.Sb)&&!B(i)&&(this.g.m=i),this.v=u&&u.supportsCrossDomainXhr||!1,this.u=u&&u.sendRawJson||!1,(u=u&&u.httpSessionIdParam)&&!B(u)&&(this.g.D=u,i=this.h,i!==null&&u in i&&(i=this.h,u in i&&delete i[u])),this.j=new Be(this)}V(Vt,yt),Vt.prototype.m=function(){this.g.l=this.j,this.v&&(this.g.J=!0),this.g.connect(this.l,this.h||void 0)},Vt.prototype.close=function(){Ds(this.g)},Vt.prototype.o=function(i){var u=this.g;if(typeof i=="string"){var l={};l.__data__=i,i=l}else this.u&&(l={},l.__data__=Es(i),i=l);u.i.push(new mh(u.Ya++,i)),u.G==3&&mr(u)},Vt.prototype.N=function(){this.g.l=null,delete this.j,Ds(this.g),delete this.g,Vt.aa.N.call(this)};function ma(i){vs.call(this),i.__headers__&&(this.headers=i.__headers__,this.statusCode=i.__status__,delete i.__headers__,delete i.__status__);var u=i.__sm__;if(u){t:{for(const l in u){i=l;break t}i=void 0}(this.i=i)&&(i=this.i,u=u!==null&&i in u?u[i]:void 0),this.data=u}else this.data=i}V(ma,vs);function ga(){Is.call(this),this.status=1}V(ga,Is);function Be(i){this.g=i}V(Be,pa),Be.prototype.ua=function(){At(this.g,"a")},Be.prototype.ta=function(i){At(this.g,new ma(i))},Be.prototype.sa=function(i){At(this.g,new ga)},Be.prototype.ra=function(){At(this.g,"b")},_r.prototype.createWebChannel=_r.prototype.g,Vt.prototype.send=Vt.prototype.o,Vt.prototype.open=Vt.prototype.m,Vt.prototype.close=Vt.prototype.close,uc=function(){return new _r},ac=function(){return sr()},oc=ve,ci={mb:0,pb:1,qb:2,Jb:3,Ob:4,Lb:5,Mb:6,Kb:7,Ib:8,Nb:9,PROXY:10,NOPROXY:11,Gb:12,Cb:13,Db:14,Bb:15,Eb:16,Fb:17,ib:18,hb:19,jb:20},ir.NO_ERROR=0,ir.TIMEOUT=8,ir.HTTP_ERROR=6,Ar=ir,ko.COMPLETE="complete",ic=ko,Co.EventType=gn,gn.OPEN="a",gn.CLOSE="b",gn.ERROR="c",gn.MESSAGE="d",yt.prototype.listen=yt.prototype.K,Pn=Co,nt.prototype.listenOnce=nt.prototype.L,nt.prototype.getLastError=nt.prototype.Ka,nt.prototype.getLastErrorCode=nt.prototype.Ba,nt.prototype.getStatus=nt.prototype.Z,nt.prototype.getResponseJson=nt.prototype.Oa,nt.prototype.getResponseText=nt.prototype.oa,nt.prototype.send=nt.prototype.ea,nt.prototype.setWithCredentials=nt.prototype.Ha,sc=nt}).apply(typeof Er<"u"?Er:typeof self<"u"?self:typeof window<"u"?window:{});const La="@firebase/firestore",Fa="4.7.17";/**
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
 */class It{constructor(t){this.uid=t}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(t){return t.uid===this.uid}}It.UNAUTHENTICATED=new It(null),It.GOOGLE_CREDENTIALS=new It("google-credentials-uid"),It.FIRST_PARTY=new It("first-party-uid"),It.MOCK_USER=new It("mock-user");/**
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
 */let an="11.9.0";/**
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
 */const De=new Di("@firebase/firestore");function $e(){return De.logLevel}function N(n,...t){if(De.logLevel<=K.DEBUG){const e=t.map(Ni);De.debug(`Firestore (${an}): ${n}`,...e)}}function Jt(n,...t){if(De.logLevel<=K.ERROR){const e=t.map(Ni);De.error(`Firestore (${an}): ${n}`,...e)}}function Je(n,...t){if(De.logLevel<=K.WARN){const e=t.map(Ni);De.warn(`Firestore (${an}): ${n}`,...e)}}function Ni(n){if(typeof n=="string")return n;try{/**
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
 */function L(n,t,e){let r="Unexpected state";typeof t=="string"?r=t:e=t,cc(n,r,e)}function cc(n,t,e){let r=`FIRESTORE (${an}) INTERNAL ASSERTION FAILED: ${t} (ID: ${n.toString(16)})`;if(e!==void 0)try{r+=" CONTEXT: "+JSON.stringify(e)}catch{r+=" CONTEXT: "+e}throw Jt(r),new Error(r)}function X(n,t,e,r){let s="Unexpected state";typeof e=="string"?s=e:r=e,n||cc(t,s,r)}function U(n,t){return n}/**
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
 */const S={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class O extends Ee{constructor(t,e){super(t,e),this.code=t,this.message=e,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
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
 */class he{constructor(){this.promise=new Promise((t,e)=>{this.resolve=t,this.reject=e})}}/**
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
 */class lc{constructor(t,e){this.user=e,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${t}`)}}class Ff{getToken(){return Promise.resolve(null)}invalidateToken(){}start(t,e){t.enqueueRetryable(()=>e(It.UNAUTHENTICATED))}shutdown(){}}class Uf{constructor(t){this.token=t,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(t,e){this.changeListener=e,t.enqueueRetryable(()=>e(this.token.user))}shutdown(){this.changeListener=null}}class Bf{constructor(t){this.t=t,this.currentUser=It.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(t,e){X(this.o===void 0,42304);let r=this.i;const s=h=>this.i!==r?(r=this.i,e(h)):Promise.resolve();let o=new he;this.o=()=>{this.i++,this.currentUser=this.u(),o.resolve(),o=new he,t.enqueueRetryable(()=>s(this.currentUser))};const a=()=>{const h=o;t.enqueueRetryable(async()=>{await h.promise,await s(this.currentUser)})},c=h=>{N("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=h,this.o&&(this.auth.addAuthTokenListener(this.o),a())};this.t.onInit(h=>c(h)),setTimeout(()=>{if(!this.auth){const h=this.t.getImmediate({optional:!0});h?c(h):(N("FirebaseAuthCredentialsProvider","Auth not yet detected"),o.resolve(),o=new he)}},0),a()}getToken(){const t=this.i,e=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(e).then(r=>this.i!==t?(N("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):r?(X(typeof r.accessToken=="string",31837,{l:r}),new lc(r.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){const t=this.auth&&this.auth.getUid();return X(t===null||typeof t=="string",2055,{h:t}),new It(t)}}class jf{constructor(t,e,r){this.P=t,this.T=e,this.I=r,this.type="FirstParty",this.user=It.FIRST_PARTY,this.A=new Map}R(){return this.I?this.I():null}get headers(){this.A.set("X-Goog-AuthUser",this.P);const t=this.R();return t&&this.A.set("Authorization",t),this.T&&this.A.set("X-Goog-Iam-Authorization-Token",this.T),this.A}}class $f{constructor(t,e,r){this.P=t,this.T=e,this.I=r}getToken(){return Promise.resolve(new jf(this.P,this.T,this.I))}start(t,e){t.enqueueRetryable(()=>e(It.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class Ua{constructor(t){this.value=t,this.type="AppCheck",this.headers=new Map,t&&t.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class qf{constructor(t,e){this.V=e,this.forceRefresh=!1,this.appCheck=null,this.m=null,this.p=null,Af(t)&&t.settings.appCheckToken&&(this.p=t.settings.appCheckToken)}start(t,e){X(this.o===void 0,3512);const r=o=>{o.error!=null&&N("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${o.error.message}`);const a=o.token!==this.m;return this.m=o.token,N("FirebaseAppCheckTokenProvider",`Received ${a?"new":"existing"} token.`),a?e(o.token):Promise.resolve()};this.o=o=>{t.enqueueRetryable(()=>r(o))};const s=o=>{N("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=o,this.o&&this.appCheck.addTokenListener(this.o)};this.V.onInit(o=>s(o)),setTimeout(()=>{if(!this.appCheck){const o=this.V.getImmediate({optional:!0});o?s(o):N("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){if(this.p)return Promise.resolve(new Ua(this.p));const t=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(t).then(e=>e?(X(typeof e.token=="string",44558,{tokenResult:e}),this.m=e.token,new Ua(e.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}}/**
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
 */function zf(n){const t=typeof self<"u"&&(self.crypto||self.msCrypto),e=new Uint8Array(n);if(t&&typeof t.getRandomValues=="function")t.getRandomValues(e);else for(let r=0;r<n;r++)e[r]=Math.floor(256*Math.random());return e}/**
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
 */function hc(){return new TextEncoder}/**
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
 */class dc{static newId(){const t="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",e=62*Math.floor(4.129032258064516);let r="";for(;r.length<20;){const s=zf(40);for(let o=0;o<s.length;++o)r.length<20&&s[o]<e&&(r+=t.charAt(s[o]%62))}return r}}function j(n,t){return n<t?-1:n>t?1:0}function li(n,t){let e=0;for(;e<n.length&&e<t.length;){const r=n.codePointAt(e),s=t.codePointAt(e);if(r!==s){if(r<128&&s<128)return j(r,s);{const o=hc(),a=Hf(o.encode(Ba(n,e)),o.encode(Ba(t,e)));return a!==0?a:j(r,s)}}e+=r>65535?2:1}return j(n.length,t.length)}function Ba(n,t){return n.codePointAt(t)>65535?n.substring(t,t+2):n.substring(t,t+1)}function Hf(n,t){for(let e=0;e<n.length&&e<t.length;++e)if(n[e]!==t[e])return j(n[e],t[e]);return j(n.length,t.length)}function Ze(n,t,e){return n.length===t.length&&n.every((r,s)=>e(r,t[s]))}/**
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
 */const ja=-62135596800,$a=1e6;class ct{static now(){return ct.fromMillis(Date.now())}static fromDate(t){return ct.fromMillis(t.getTime())}static fromMillis(t){const e=Math.floor(t/1e3),r=Math.floor((t-1e3*e)*$a);return new ct(e,r)}constructor(t,e){if(this.seconds=t,this.nanoseconds=e,e<0)throw new O(S.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+e);if(e>=1e9)throw new O(S.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+e);if(t<ja)throw new O(S.INVALID_ARGUMENT,"Timestamp seconds out of range: "+t);if(t>=253402300800)throw new O(S.INVALID_ARGUMENT,"Timestamp seconds out of range: "+t)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/$a}_compareTo(t){return this.seconds===t.seconds?j(this.nanoseconds,t.nanoseconds):j(this.seconds,t.seconds)}isEqual(t){return t.seconds===this.seconds&&t.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const t=this.seconds-ja;return String(t).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
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
 */class F{static fromTimestamp(t){return new F(t)}static min(){return new F(new ct(0,0))}static max(){return new F(new ct(253402300799,999999999))}constructor(t){this.timestamp=t}compareTo(t){return this.timestamp._compareTo(t.timestamp)}isEqual(t){return this.timestamp.isEqual(t.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
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
 */const qa="__name__";class Lt{constructor(t,e,r){e===void 0?e=0:e>t.length&&L(637,{offset:e,range:t.length}),r===void 0?r=t.length-e:r>t.length-e&&L(1746,{length:r,range:t.length-e}),this.segments=t,this.offset=e,this.len=r}get length(){return this.len}isEqual(t){return Lt.comparator(this,t)===0}child(t){const e=this.segments.slice(this.offset,this.limit());return t instanceof Lt?t.forEach(r=>{e.push(r)}):e.push(t),this.construct(e)}limit(){return this.offset+this.length}popFirst(t){return t=t===void 0?1:t,this.construct(this.segments,this.offset+t,this.length-t)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(t){return this.segments[this.offset+t]}isEmpty(){return this.length===0}isPrefixOf(t){if(t.length<this.length)return!1;for(let e=0;e<this.length;e++)if(this.get(e)!==t.get(e))return!1;return!0}isImmediateParentOf(t){if(this.length+1!==t.length)return!1;for(let e=0;e<this.length;e++)if(this.get(e)!==t.get(e))return!1;return!0}forEach(t){for(let e=this.offset,r=this.limit();e<r;e++)t(this.segments[e])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(t,e){const r=Math.min(t.length,e.length);for(let s=0;s<r;s++){const o=Lt.compareSegments(t.get(s),e.get(s));if(o!==0)return o}return j(t.length,e.length)}static compareSegments(t,e){const r=Lt.isNumericId(t),s=Lt.isNumericId(e);return r&&!s?-1:!r&&s?1:r&&s?Lt.extractNumericId(t).compare(Lt.extractNumericId(e)):li(t,e)}static isNumericId(t){return t.startsWith("__id")&&t.endsWith("__")}static extractNumericId(t){return le.fromString(t.substring(4,t.length-2))}}class rt extends Lt{construct(t,e,r){return new rt(t,e,r)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...t){const e=[];for(const r of t){if(r.indexOf("//")>=0)throw new O(S.INVALID_ARGUMENT,`Invalid segment (${r}). Paths must not contain // in them.`);e.push(...r.split("/").filter(s=>s.length>0))}return new rt(e)}static emptyPath(){return new rt([])}}const Gf=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class mt extends Lt{construct(t,e,r){return new mt(t,e,r)}static isValidIdentifier(t){return Gf.test(t)}canonicalString(){return this.toArray().map(t=>(t=t.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),mt.isValidIdentifier(t)||(t="`"+t+"`"),t)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)===qa}static keyField(){return new mt([qa])}static fromServerFormat(t){const e=[];let r="",s=0;const o=()=>{if(r.length===0)throw new O(S.INVALID_ARGUMENT,`Invalid field path (${t}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);e.push(r),r=""};let a=!1;for(;s<t.length;){const c=t[s];if(c==="\\"){if(s+1===t.length)throw new O(S.INVALID_ARGUMENT,"Path has trailing escape character: "+t);const h=t[s+1];if(h!=="\\"&&h!=="."&&h!=="`")throw new O(S.INVALID_ARGUMENT,"Path has invalid escape sequence: "+t);r+=h,s+=2}else c==="`"?(a=!a,s++):c!=="."||a?(r+=c,s++):(o(),s++)}if(o(),a)throw new O(S.INVALID_ARGUMENT,"Unterminated ` in path: "+t);return new mt(e)}static emptyPath(){return new mt([])}}/**
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
 */class M{constructor(t){this.path=t}static fromPath(t){return new M(rt.fromString(t))}static fromName(t){return new M(rt.fromString(t).popFirst(5))}static empty(){return new M(rt.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(t){return this.path.length>=2&&this.path.get(this.path.length-2)===t}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(t){return t!==null&&rt.comparator(this.path,t.path)===0}toString(){return this.path.toString()}static comparator(t,e){return rt.comparator(t.path,e.path)}static isDocumentKey(t){return t.length%2==0}static fromSegments(t){return new M(new rt(t.slice()))}}/**
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
 */const Bn=-1;function Kf(n,t){const e=n.toTimestamp().seconds,r=n.toTimestamp().nanoseconds+1,s=F.fromTimestamp(r===1e9?new ct(e+1,0):new ct(e,r));return new fe(s,M.empty(),t)}function Qf(n){return new fe(n.readTime,n.key,Bn)}class fe{constructor(t,e,r){this.readTime=t,this.documentKey=e,this.largestBatchId=r}static min(){return new fe(F.min(),M.empty(),Bn)}static max(){return new fe(F.max(),M.empty(),Bn)}}function Wf(n,t){let e=n.readTime.compareTo(t.readTime);return e!==0?e:(e=M.comparator(n.documentKey,t.documentKey),e!==0?e:j(n.largestBatchId,t.largestBatchId))}/**
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
 */const Xf="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class Yf{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(t){this.onCommittedListeners.push(t)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(t=>t())}}/**
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
 */async function un(n){if(n.code!==S.FAILED_PRECONDITION||n.message!==Xf)throw n;N("LocalStore","Unexpectedly lost primary lease")}/**
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
 */class C{constructor(t){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,t(e=>{this.isDone=!0,this.result=e,this.nextCallback&&this.nextCallback(e)},e=>{this.isDone=!0,this.error=e,this.catchCallback&&this.catchCallback(e)})}catch(t){return this.next(void 0,t)}next(t,e){return this.callbackAttached&&L(59440),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(e,this.error):this.wrapSuccess(t,this.result):new C((r,s)=>{this.nextCallback=o=>{this.wrapSuccess(t,o).next(r,s)},this.catchCallback=o=>{this.wrapFailure(e,o).next(r,s)}})}toPromise(){return new Promise((t,e)=>{this.next(t,e)})}wrapUserFunction(t){try{const e=t();return e instanceof C?e:C.resolve(e)}catch(e){return C.reject(e)}}wrapSuccess(t,e){return t?this.wrapUserFunction(()=>t(e)):C.resolve(e)}wrapFailure(t,e){return t?this.wrapUserFunction(()=>t(e)):C.reject(e)}static resolve(t){return new C((e,r)=>{e(t)})}static reject(t){return new C((e,r)=>{r(t)})}static waitFor(t){return new C((e,r)=>{let s=0,o=0,a=!1;t.forEach(c=>{++s,c.next(()=>{++o,a&&o===s&&e()},h=>r(h))}),a=!0,o===s&&e()})}static or(t){let e=C.resolve(!1);for(const r of t)e=e.next(s=>s?C.resolve(s):r());return e}static forEach(t,e){const r=[];return t.forEach((s,o)=>{r.push(e.call(this,s,o))}),this.waitFor(r)}static mapArray(t,e){return new C((r,s)=>{const o=t.length,a=new Array(o);let c=0;for(let h=0;h<o;h++){const d=h;e(t[d]).next(m=>{a[d]=m,++c,c===o&&r(a)},m=>s(m))}})}static doWhile(t,e){return new C((r,s)=>{const o=()=>{t()===!0?e().next(()=>{o()},s):r()};o()})}}function Jf(n){const t=n.match(/Android ([\d.]+)/i),e=t?t[1].split(".").slice(0,2).join("."):"-1";return Number(e)}function cn(n){return n.name==="IndexedDbTransactionError"}/**
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
 */class Gr{constructor(t,e){this.previousValue=t,e&&(e.sequenceNumberHandler=r=>this.ue(r),this.ce=r=>e.writeSequenceNumber(r))}ue(t){return this.previousValue=Math.max(t,this.previousValue),this.previousValue}next(){const t=++this.previousValue;return this.ce&&this.ce(t),t}}Gr.le=-1;/**
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
 */const xi=-1;function Kr(n){return n==null}function Dr(n){return n===0&&1/n==-1/0}function Zf(n){return typeof n=="number"&&Number.isInteger(n)&&!Dr(n)&&n<=Number.MAX_SAFE_INTEGER&&n>=Number.MIN_SAFE_INTEGER}/**
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
 */const fc="";function tp(n){let t="";for(let e=0;e<n.length;e++)t.length>0&&(t=za(t)),t=ep(n.get(e),t);return za(t)}function ep(n,t){let e=t;const r=n.length;for(let s=0;s<r;s++){const o=n.charAt(s);switch(o){case"\0":e+="";break;case fc:e+="";break;default:e+=o}}return e}function za(n){return n+fc+""}/**
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
 */function Ha(n){let t=0;for(const e in n)Object.prototype.hasOwnProperty.call(n,e)&&t++;return t}function Te(n,t){for(const e in n)Object.prototype.hasOwnProperty.call(n,e)&&t(e,n[e])}function pc(n){for(const t in n)if(Object.prototype.hasOwnProperty.call(n,t))return!1;return!0}/**
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
 */class et{constructor(t,e){this.comparator=t,this.root=e||pt.EMPTY}insert(t,e){return new et(this.comparator,this.root.insert(t,e,this.comparator).copy(null,null,pt.BLACK,null,null))}remove(t){return new et(this.comparator,this.root.remove(t,this.comparator).copy(null,null,pt.BLACK,null,null))}get(t){let e=this.root;for(;!e.isEmpty();){const r=this.comparator(t,e.key);if(r===0)return e.value;r<0?e=e.left:r>0&&(e=e.right)}return null}indexOf(t){let e=0,r=this.root;for(;!r.isEmpty();){const s=this.comparator(t,r.key);if(s===0)return e+r.left.size;s<0?r=r.left:(e+=r.left.size+1,r=r.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(t){return this.root.inorderTraversal(t)}forEach(t){this.inorderTraversal((e,r)=>(t(e,r),!1))}toString(){const t=[];return this.inorderTraversal((e,r)=>(t.push(`${e}:${r}`),!1)),`{${t.join(", ")}}`}reverseTraversal(t){return this.root.reverseTraversal(t)}getIterator(){return new Tr(this.root,null,this.comparator,!1)}getIteratorFrom(t){return new Tr(this.root,t,this.comparator,!1)}getReverseIterator(){return new Tr(this.root,null,this.comparator,!0)}getReverseIteratorFrom(t){return new Tr(this.root,t,this.comparator,!0)}}class Tr{constructor(t,e,r,s){this.isReverse=s,this.nodeStack=[];let o=1;for(;!t.isEmpty();)if(o=e?r(t.key,e):1,e&&s&&(o*=-1),o<0)t=this.isReverse?t.left:t.right;else{if(o===0){this.nodeStack.push(t);break}this.nodeStack.push(t),t=this.isReverse?t.right:t.left}}getNext(){let t=this.nodeStack.pop();const e={key:t.key,value:t.value};if(this.isReverse)for(t=t.left;!t.isEmpty();)this.nodeStack.push(t),t=t.right;else for(t=t.right;!t.isEmpty();)this.nodeStack.push(t),t=t.left;return e}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const t=this.nodeStack[this.nodeStack.length-1];return{key:t.key,value:t.value}}}class pt{constructor(t,e,r,s,o){this.key=t,this.value=e,this.color=r??pt.RED,this.left=s??pt.EMPTY,this.right=o??pt.EMPTY,this.size=this.left.size+1+this.right.size}copy(t,e,r,s,o){return new pt(t??this.key,e??this.value,r??this.color,s??this.left,o??this.right)}isEmpty(){return!1}inorderTraversal(t){return this.left.inorderTraversal(t)||t(this.key,this.value)||this.right.inorderTraversal(t)}reverseTraversal(t){return this.right.reverseTraversal(t)||t(this.key,this.value)||this.left.reverseTraversal(t)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(t,e,r){let s=this;const o=r(t,s.key);return s=o<0?s.copy(null,null,null,s.left.insert(t,e,r),null):o===0?s.copy(null,e,null,null,null):s.copy(null,null,null,null,s.right.insert(t,e,r)),s.fixUp()}removeMin(){if(this.left.isEmpty())return pt.EMPTY;let t=this;return t.left.isRed()||t.left.left.isRed()||(t=t.moveRedLeft()),t=t.copy(null,null,null,t.left.removeMin(),null),t.fixUp()}remove(t,e){let r,s=this;if(e(t,s.key)<0)s.left.isEmpty()||s.left.isRed()||s.left.left.isRed()||(s=s.moveRedLeft()),s=s.copy(null,null,null,s.left.remove(t,e),null);else{if(s.left.isRed()&&(s=s.rotateRight()),s.right.isEmpty()||s.right.isRed()||s.right.left.isRed()||(s=s.moveRedRight()),e(t,s.key)===0){if(s.right.isEmpty())return pt.EMPTY;r=s.right.min(),s=s.copy(r.key,r.value,null,null,s.right.removeMin())}s=s.copy(null,null,null,null,s.right.remove(t,e))}return s.fixUp()}isRed(){return this.color}fixUp(){let t=this;return t.right.isRed()&&!t.left.isRed()&&(t=t.rotateLeft()),t.left.isRed()&&t.left.left.isRed()&&(t=t.rotateRight()),t.left.isRed()&&t.right.isRed()&&(t=t.colorFlip()),t}moveRedLeft(){let t=this.colorFlip();return t.right.left.isRed()&&(t=t.copy(null,null,null,null,t.right.rotateRight()),t=t.rotateLeft(),t=t.colorFlip()),t}moveRedRight(){let t=this.colorFlip();return t.left.left.isRed()&&(t=t.rotateRight(),t=t.colorFlip()),t}rotateLeft(){const t=this.copy(null,null,pt.RED,null,this.right.left);return this.right.copy(null,null,this.color,t,null)}rotateRight(){const t=this.copy(null,null,pt.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,t)}colorFlip(){const t=this.left.copy(null,null,!this.left.color,null,null),e=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,t,e)}checkMaxDepth(){const t=this.check();return Math.pow(2,t)<=this.size+1}check(){if(this.isRed()&&this.left.isRed())throw L(43730,{key:this.key,value:this.value});if(this.right.isRed())throw L(14113,{key:this.key,value:this.value});const t=this.left.check();if(t!==this.right.check())throw L(27949);return t+(this.isRed()?0:1)}}pt.EMPTY=null,pt.RED=!0,pt.BLACK=!1;pt.EMPTY=new class{constructor(){this.size=0}get key(){throw L(57766)}get value(){throw L(16141)}get color(){throw L(16727)}get left(){throw L(29726)}get right(){throw L(36894)}copy(t,e,r,s,o){return this}insert(t,e,r){return new pt(t,e)}remove(t,e){return this}isEmpty(){return!0}inorderTraversal(t){return!1}reverseTraversal(t){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
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
 */class lt{constructor(t){this.comparator=t,this.data=new et(this.comparator)}has(t){return this.data.get(t)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(t){return this.data.indexOf(t)}forEach(t){this.data.inorderTraversal((e,r)=>(t(e),!1))}forEachInRange(t,e){const r=this.data.getIteratorFrom(t[0]);for(;r.hasNext();){const s=r.getNext();if(this.comparator(s.key,t[1])>=0)return;e(s.key)}}forEachWhile(t,e){let r;for(r=e!==void 0?this.data.getIteratorFrom(e):this.data.getIterator();r.hasNext();)if(!t(r.getNext().key))return}firstAfterOrEqual(t){const e=this.data.getIteratorFrom(t);return e.hasNext()?e.getNext().key:null}getIterator(){return new Ga(this.data.getIterator())}getIteratorFrom(t){return new Ga(this.data.getIteratorFrom(t))}add(t){return this.copy(this.data.remove(t).insert(t,!0))}delete(t){return this.has(t)?this.copy(this.data.remove(t)):this}isEmpty(){return this.data.isEmpty()}unionWith(t){let e=this;return e.size<t.size&&(e=t,t=this),t.forEach(r=>{e=e.add(r)}),e}isEqual(t){if(!(t instanceof lt)||this.size!==t.size)return!1;const e=this.data.getIterator(),r=t.data.getIterator();for(;e.hasNext();){const s=e.getNext().key,o=r.getNext().key;if(this.comparator(s,o)!==0)return!1}return!0}toArray(){const t=[];return this.forEach(e=>{t.push(e)}),t}toString(){const t=[];return this.forEach(e=>t.push(e)),"SortedSet("+t.toString()+")"}copy(t){const e=new lt(this.comparator);return e.data=t,e}}class Ga{constructor(t){this.iter=t}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
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
 */class Mt{constructor(t){this.fields=t,t.sort(mt.comparator)}static empty(){return new Mt([])}unionWith(t){let e=new lt(mt.comparator);for(const r of this.fields)e=e.add(r);for(const r of t)e=e.add(r);return new Mt(e.toArray())}covers(t){for(const e of this.fields)if(e.isPrefixOf(t))return!0;return!1}isEqual(t){return Ze(this.fields,t.fields,(e,r)=>e.isEqual(r))}}/**
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
 */class mc extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
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
 */class gt{constructor(t){this.binaryString=t}static fromBase64String(t){const e=function(s){try{return atob(s)}catch(o){throw typeof DOMException<"u"&&o instanceof DOMException?new mc("Invalid base64 string: "+o):o}}(t);return new gt(e)}static fromUint8Array(t){const e=function(s){let o="";for(let a=0;a<s.length;++a)o+=String.fromCharCode(s[a]);return o}(t);return new gt(e)}[Symbol.iterator](){let t=0;return{next:()=>t<this.binaryString.length?{value:this.binaryString.charCodeAt(t++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(e){return btoa(e)}(this.binaryString)}toUint8Array(){return function(e){const r=new Uint8Array(e.length);for(let s=0;s<e.length;s++)r[s]=e.charCodeAt(s);return r}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(t){return j(this.binaryString,t.binaryString)}isEqual(t){return this.binaryString===t.binaryString}}gt.EMPTY_BYTE_STRING=new gt("");const np=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function pe(n){if(X(!!n,39018),typeof n=="string"){let t=0;const e=np.exec(n);if(X(!!e,46558,{timestamp:n}),e[1]){let s=e[1];s=(s+"000000000").substr(0,9),t=Number(s)}const r=new Date(n);return{seconds:Math.floor(r.getTime()/1e3),nanos:t}}return{seconds:st(n.seconds),nanos:st(n.nanos)}}function st(n){return typeof n=="number"?n:typeof n=="string"?Number(n):0}function me(n){return typeof n=="string"?gt.fromBase64String(n):gt.fromUint8Array(n)}/**
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
 */const gc="server_timestamp",_c="__type__",yc="__previous_value__",Ec="__local_write_time__";function Oi(n){var t,e;return((e=(((t=n==null?void 0:n.mapValue)===null||t===void 0?void 0:t.fields)||{})[_c])===null||e===void 0?void 0:e.stringValue)===gc}function Qr(n){const t=n.mapValue.fields[yc];return Oi(t)?Qr(t):t}function jn(n){const t=pe(n.mapValue.fields[Ec].timestampValue);return new ct(t.seconds,t.nanos)}/**
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
 */class rp{constructor(t,e,r,s,o,a,c,h,d,m){this.databaseId=t,this.appId=e,this.persistenceKey=r,this.host=s,this.ssl=o,this.forceLongPolling=a,this.autoDetectLongPolling=c,this.longPollingOptions=h,this.useFetchStreams=d,this.isUsingEmulator=m}}const kr="(default)";class $n{constructor(t,e){this.projectId=t,this.database=e||kr}static empty(){return new $n("","")}get isDefaultDatabase(){return this.database===kr}isEqual(t){return t instanceof $n&&t.projectId===this.projectId&&t.database===this.database}}/**
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
 */const Tc="__type__",sp="__max__",vr={mapValue:{}},vc="__vector__",Nr="value";function ge(n){return"nullValue"in n?0:"booleanValue"in n?1:"integerValue"in n||"doubleValue"in n?2:"timestampValue"in n?3:"stringValue"in n?5:"bytesValue"in n?6:"referenceValue"in n?7:"geoPointValue"in n?8:"arrayValue"in n?9:"mapValue"in n?Oi(n)?4:op(n)?9007199254740991:ip(n)?10:11:L(28295,{value:n})}function $t(n,t){if(n===t)return!0;const e=ge(n);if(e!==ge(t))return!1;switch(e){case 0:case 9007199254740991:return!0;case 1:return n.booleanValue===t.booleanValue;case 4:return jn(n).isEqual(jn(t));case 3:return function(s,o){if(typeof s.timestampValue=="string"&&typeof o.timestampValue=="string"&&s.timestampValue.length===o.timestampValue.length)return s.timestampValue===o.timestampValue;const a=pe(s.timestampValue),c=pe(o.timestampValue);return a.seconds===c.seconds&&a.nanos===c.nanos}(n,t);case 5:return n.stringValue===t.stringValue;case 6:return function(s,o){return me(s.bytesValue).isEqual(me(o.bytesValue))}(n,t);case 7:return n.referenceValue===t.referenceValue;case 8:return function(s,o){return st(s.geoPointValue.latitude)===st(o.geoPointValue.latitude)&&st(s.geoPointValue.longitude)===st(o.geoPointValue.longitude)}(n,t);case 2:return function(s,o){if("integerValue"in s&&"integerValue"in o)return st(s.integerValue)===st(o.integerValue);if("doubleValue"in s&&"doubleValue"in o){const a=st(s.doubleValue),c=st(o.doubleValue);return a===c?Dr(a)===Dr(c):isNaN(a)&&isNaN(c)}return!1}(n,t);case 9:return Ze(n.arrayValue.values||[],t.arrayValue.values||[],$t);case 10:case 11:return function(s,o){const a=s.mapValue.fields||{},c=o.mapValue.fields||{};if(Ha(a)!==Ha(c))return!1;for(const h in a)if(a.hasOwnProperty(h)&&(c[h]===void 0||!$t(a[h],c[h])))return!1;return!0}(n,t);default:return L(52216,{left:n})}}function qn(n,t){return(n.values||[]).find(e=>$t(e,t))!==void 0}function tn(n,t){if(n===t)return 0;const e=ge(n),r=ge(t);if(e!==r)return j(e,r);switch(e){case 0:case 9007199254740991:return 0;case 1:return j(n.booleanValue,t.booleanValue);case 2:return function(o,a){const c=st(o.integerValue||o.doubleValue),h=st(a.integerValue||a.doubleValue);return c<h?-1:c>h?1:c===h?0:isNaN(c)?isNaN(h)?0:-1:1}(n,t);case 3:return Ka(n.timestampValue,t.timestampValue);case 4:return Ka(jn(n),jn(t));case 5:return li(n.stringValue,t.stringValue);case 6:return function(o,a){const c=me(o),h=me(a);return c.compareTo(h)}(n.bytesValue,t.bytesValue);case 7:return function(o,a){const c=o.split("/"),h=a.split("/");for(let d=0;d<c.length&&d<h.length;d++){const m=j(c[d],h[d]);if(m!==0)return m}return j(c.length,h.length)}(n.referenceValue,t.referenceValue);case 8:return function(o,a){const c=j(st(o.latitude),st(a.latitude));return c!==0?c:j(st(o.longitude),st(a.longitude))}(n.geoPointValue,t.geoPointValue);case 9:return Qa(n.arrayValue,t.arrayValue);case 10:return function(o,a){var c,h,d,m;const E=o.fields||{},I=a.fields||{},b=(c=E[Nr])===null||c===void 0?void 0:c.arrayValue,V=(h=I[Nr])===null||h===void 0?void 0:h.arrayValue,x=j(((d=b==null?void 0:b.values)===null||d===void 0?void 0:d.length)||0,((m=V==null?void 0:V.values)===null||m===void 0?void 0:m.length)||0);return x!==0?x:Qa(b,V)}(n.mapValue,t.mapValue);case 11:return function(o,a){if(o===vr.mapValue&&a===vr.mapValue)return 0;if(o===vr.mapValue)return 1;if(a===vr.mapValue)return-1;const c=o.fields||{},h=Object.keys(c),d=a.fields||{},m=Object.keys(d);h.sort(),m.sort();for(let E=0;E<h.length&&E<m.length;++E){const I=li(h[E],m[E]);if(I!==0)return I;const b=tn(c[h[E]],d[m[E]]);if(b!==0)return b}return j(h.length,m.length)}(n.mapValue,t.mapValue);default:throw L(23264,{Pe:e})}}function Ka(n,t){if(typeof n=="string"&&typeof t=="string"&&n.length===t.length)return j(n,t);const e=pe(n),r=pe(t),s=j(e.seconds,r.seconds);return s!==0?s:j(e.nanos,r.nanos)}function Qa(n,t){const e=n.values||[],r=t.values||[];for(let s=0;s<e.length&&s<r.length;++s){const o=tn(e[s],r[s]);if(o)return o}return j(e.length,r.length)}function en(n){return hi(n)}function hi(n){return"nullValue"in n?"null":"booleanValue"in n?""+n.booleanValue:"integerValue"in n?""+n.integerValue:"doubleValue"in n?""+n.doubleValue:"timestampValue"in n?function(e){const r=pe(e);return`time(${r.seconds},${r.nanos})`}(n.timestampValue):"stringValue"in n?n.stringValue:"bytesValue"in n?function(e){return me(e).toBase64()}(n.bytesValue):"referenceValue"in n?function(e){return M.fromName(e).toString()}(n.referenceValue):"geoPointValue"in n?function(e){return`geo(${e.latitude},${e.longitude})`}(n.geoPointValue):"arrayValue"in n?function(e){let r="[",s=!0;for(const o of e.values||[])s?s=!1:r+=",",r+=hi(o);return r+"]"}(n.arrayValue):"mapValue"in n?function(e){const r=Object.keys(e.fields||{}).sort();let s="{",o=!0;for(const a of r)o?o=!1:s+=",",s+=`${a}:${hi(e.fields[a])}`;return s+"}"}(n.mapValue):L(61005,{value:n})}function Rr(n){switch(ge(n)){case 0:case 1:return 4;case 2:return 8;case 3:case 8:return 16;case 4:const t=Qr(n);return t?16+Rr(t):16;case 5:return 2*n.stringValue.length;case 6:return me(n.bytesValue).approximateByteSize();case 7:return n.referenceValue.length;case 9:return function(r){return(r.values||[]).reduce((s,o)=>s+Rr(o),0)}(n.arrayValue);case 10:case 11:return function(r){let s=0;return Te(r.fields,(o,a)=>{s+=o.length+Rr(a)}),s}(n.mapValue);default:throw L(13486,{value:n})}}function di(n){return!!n&&"integerValue"in n}function Mi(n){return!!n&&"arrayValue"in n}function Wa(n){return!!n&&"nullValue"in n}function Xa(n){return!!n&&"doubleValue"in n&&isNaN(Number(n.doubleValue))}function br(n){return!!n&&"mapValue"in n}function ip(n){var t,e;return((e=(((t=n==null?void 0:n.mapValue)===null||t===void 0?void 0:t.fields)||{})[Tc])===null||e===void 0?void 0:e.stringValue)===vc}function xn(n){if(n.geoPointValue)return{geoPointValue:Object.assign({},n.geoPointValue)};if(n.timestampValue&&typeof n.timestampValue=="object")return{timestampValue:Object.assign({},n.timestampValue)};if(n.mapValue){const t={mapValue:{fields:{}}};return Te(n.mapValue.fields,(e,r)=>t.mapValue.fields[e]=xn(r)),t}if(n.arrayValue){const t={arrayValue:{values:[]}};for(let e=0;e<(n.arrayValue.values||[]).length;++e)t.arrayValue.values[e]=xn(n.arrayValue.values[e]);return t}return Object.assign({},n)}function op(n){return(((n.mapValue||{}).fields||{}).__type__||{}).stringValue===sp}/**
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
 */class Dt{constructor(t){this.value=t}static empty(){return new Dt({mapValue:{}})}field(t){if(t.isEmpty())return this.value;{let e=this.value;for(let r=0;r<t.length-1;++r)if(e=(e.mapValue.fields||{})[t.get(r)],!br(e))return null;return e=(e.mapValue.fields||{})[t.lastSegment()],e||null}}set(t,e){this.getFieldsMap(t.popLast())[t.lastSegment()]=xn(e)}setAll(t){let e=mt.emptyPath(),r={},s=[];t.forEach((a,c)=>{if(!e.isImmediateParentOf(c)){const h=this.getFieldsMap(e);this.applyChanges(h,r,s),r={},s=[],e=c.popLast()}a?r[c.lastSegment()]=xn(a):s.push(c.lastSegment())});const o=this.getFieldsMap(e);this.applyChanges(o,r,s)}delete(t){const e=this.field(t.popLast());br(e)&&e.mapValue.fields&&delete e.mapValue.fields[t.lastSegment()]}isEqual(t){return $t(this.value,t.value)}getFieldsMap(t){let e=this.value;e.mapValue.fields||(e.mapValue={fields:{}});for(let r=0;r<t.length;++r){let s=e.mapValue.fields[t.get(r)];br(s)&&s.mapValue.fields||(s={mapValue:{fields:{}}},e.mapValue.fields[t.get(r)]=s),e=s}return e.mapValue.fields}applyChanges(t,e,r){Te(e,(s,o)=>t[s]=o);for(const s of r)delete t[s]}clone(){return new Dt(xn(this.value))}}function Ic(n){const t=[];return Te(n.fields,(e,r)=>{const s=new mt([e]);if(br(r)){const o=Ic(r.mapValue).fields;if(o.length===0)t.push(s);else for(const a of o)t.push(s.child(a))}else t.push(s)}),new Mt(t)}/**
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
 */class wt{constructor(t,e,r,s,o,a,c){this.key=t,this.documentType=e,this.version=r,this.readTime=s,this.createTime=o,this.data=a,this.documentState=c}static newInvalidDocument(t){return new wt(t,0,F.min(),F.min(),F.min(),Dt.empty(),0)}static newFoundDocument(t,e,r,s){return new wt(t,1,e,F.min(),r,s,0)}static newNoDocument(t,e){return new wt(t,2,e,F.min(),F.min(),Dt.empty(),0)}static newUnknownDocument(t,e){return new wt(t,3,e,F.min(),F.min(),Dt.empty(),2)}convertToFoundDocument(t,e){return!this.createTime.isEqual(F.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=t),this.version=t,this.documentType=1,this.data=e,this.documentState=0,this}convertToNoDocument(t){return this.version=t,this.documentType=2,this.data=Dt.empty(),this.documentState=0,this}convertToUnknownDocument(t){return this.version=t,this.documentType=3,this.data=Dt.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=F.min(),this}setReadTime(t){return this.readTime=t,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(t){return t instanceof wt&&this.key.isEqual(t.key)&&this.version.isEqual(t.version)&&this.documentType===t.documentType&&this.documentState===t.documentState&&this.data.isEqual(t.data)}mutableCopy(){return new wt(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
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
 */class xr{constructor(t,e){this.position=t,this.inclusive=e}}function Ya(n,t,e){let r=0;for(let s=0;s<n.position.length;s++){const o=t[s],a=n.position[s];if(o.field.isKeyField()?r=M.comparator(M.fromName(a.referenceValue),e.key):r=tn(a,e.data.field(o.field)),o.dir==="desc"&&(r*=-1),r!==0)break}return r}function Ja(n,t){if(n===null)return t===null;if(t===null||n.inclusive!==t.inclusive||n.position.length!==t.position.length)return!1;for(let e=0;e<n.position.length;e++)if(!$t(n.position[e],t.position[e]))return!1;return!0}/**
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
 */class Or{constructor(t,e="asc"){this.field=t,this.dir=e}}function ap(n,t){return n.dir===t.dir&&n.field.isEqual(t.field)}/**
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
 */class wc{}class ut extends wc{constructor(t,e,r){super(),this.field=t,this.op=e,this.value=r}static create(t,e,r){return t.isKeyField()?e==="in"||e==="not-in"?this.createKeyFieldInFilter(t,e,r):new cp(t,e,r):e==="array-contains"?new dp(t,r):e==="in"?new fp(t,r):e==="not-in"?new pp(t,r):e==="array-contains-any"?new mp(t,r):new ut(t,e,r)}static createKeyFieldInFilter(t,e,r){return e==="in"?new lp(t,r):new hp(t,r)}matches(t){const e=t.data.field(this.field);return this.op==="!="?e!==null&&e.nullValue===void 0&&this.matchesComparison(tn(e,this.value)):e!==null&&ge(this.value)===ge(e)&&this.matchesComparison(tn(e,this.value))}matchesComparison(t){switch(this.op){case"<":return t<0;case"<=":return t<=0;case"==":return t===0;case"!=":return t!==0;case">":return t>0;case">=":return t>=0;default:return L(47266,{operator:this.op})}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class qt extends wc{constructor(t,e){super(),this.filters=t,this.op=e,this.Te=null}static create(t,e){return new qt(t,e)}matches(t){return Ac(this)?this.filters.find(e=>!e.matches(t))===void 0:this.filters.find(e=>e.matches(t))!==void 0}getFlattenedFilters(){return this.Te!==null||(this.Te=this.filters.reduce((t,e)=>t.concat(e.getFlattenedFilters()),[])),this.Te}getFilters(){return Object.assign([],this.filters)}}function Ac(n){return n.op==="and"}function Rc(n){return up(n)&&Ac(n)}function up(n){for(const t of n.filters)if(t instanceof qt)return!1;return!0}function fi(n){if(n instanceof ut)return n.field.canonicalString()+n.op.toString()+en(n.value);if(Rc(n))return n.filters.map(t=>fi(t)).join(",");{const t=n.filters.map(e=>fi(e)).join(",");return`${n.op}(${t})`}}function bc(n,t){return n instanceof ut?function(r,s){return s instanceof ut&&r.op===s.op&&r.field.isEqual(s.field)&&$t(r.value,s.value)}(n,t):n instanceof qt?function(r,s){return s instanceof qt&&r.op===s.op&&r.filters.length===s.filters.length?r.filters.reduce((o,a,c)=>o&&bc(a,s.filters[c]),!0):!1}(n,t):void L(19439)}function Cc(n){return n instanceof ut?function(e){return`${e.field.canonicalString()} ${e.op} ${en(e.value)}`}(n):n instanceof qt?function(e){return e.op.toString()+" {"+e.getFilters().map(Cc).join(" ,")+"}"}(n):"Filter"}class cp extends ut{constructor(t,e,r){super(t,e,r),this.key=M.fromName(r.referenceValue)}matches(t){const e=M.comparator(t.key,this.key);return this.matchesComparison(e)}}class lp extends ut{constructor(t,e){super(t,"in",e),this.keys=Sc("in",e)}matches(t){return this.keys.some(e=>e.isEqual(t.key))}}class hp extends ut{constructor(t,e){super(t,"not-in",e),this.keys=Sc("not-in",e)}matches(t){return!this.keys.some(e=>e.isEqual(t.key))}}function Sc(n,t){var e;return(((e=t.arrayValue)===null||e===void 0?void 0:e.values)||[]).map(r=>M.fromName(r.referenceValue))}class dp extends ut{constructor(t,e){super(t,"array-contains",e)}matches(t){const e=t.data.field(this.field);return Mi(e)&&qn(e.arrayValue,this.value)}}class fp extends ut{constructor(t,e){super(t,"in",e)}matches(t){const e=t.data.field(this.field);return e!==null&&qn(this.value.arrayValue,e)}}class pp extends ut{constructor(t,e){super(t,"not-in",e)}matches(t){if(qn(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const e=t.data.field(this.field);return e!==null&&e.nullValue===void 0&&!qn(this.value.arrayValue,e)}}class mp extends ut{constructor(t,e){super(t,"array-contains-any",e)}matches(t){const e=t.data.field(this.field);return!(!Mi(e)||!e.arrayValue.values)&&e.arrayValue.values.some(r=>qn(this.value.arrayValue,r))}}/**
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
 */class gp{constructor(t,e=null,r=[],s=[],o=null,a=null,c=null){this.path=t,this.collectionGroup=e,this.orderBy=r,this.filters=s,this.limit=o,this.startAt=a,this.endAt=c,this.Ie=null}}function Za(n,t=null,e=[],r=[],s=null,o=null,a=null){return new gp(n,t,e,r,s,o,a)}function Li(n){const t=U(n);if(t.Ie===null){let e=t.path.canonicalString();t.collectionGroup!==null&&(e+="|cg:"+t.collectionGroup),e+="|f:",e+=t.filters.map(r=>fi(r)).join(","),e+="|ob:",e+=t.orderBy.map(r=>function(o){return o.field.canonicalString()+o.dir}(r)).join(","),Kr(t.limit)||(e+="|l:",e+=t.limit),t.startAt&&(e+="|lb:",e+=t.startAt.inclusive?"b:":"a:",e+=t.startAt.position.map(r=>en(r)).join(",")),t.endAt&&(e+="|ub:",e+=t.endAt.inclusive?"a:":"b:",e+=t.endAt.position.map(r=>en(r)).join(",")),t.Ie=e}return t.Ie}function Fi(n,t){if(n.limit!==t.limit||n.orderBy.length!==t.orderBy.length)return!1;for(let e=0;e<n.orderBy.length;e++)if(!ap(n.orderBy[e],t.orderBy[e]))return!1;if(n.filters.length!==t.filters.length)return!1;for(let e=0;e<n.filters.length;e++)if(!bc(n.filters[e],t.filters[e]))return!1;return n.collectionGroup===t.collectionGroup&&!!n.path.isEqual(t.path)&&!!Ja(n.startAt,t.startAt)&&Ja(n.endAt,t.endAt)}function pi(n){return M.isDocumentKey(n.path)&&n.collectionGroup===null&&n.filters.length===0}/**
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
 */class Wr{constructor(t,e=null,r=[],s=[],o=null,a="F",c=null,h=null){this.path=t,this.collectionGroup=e,this.explicitOrderBy=r,this.filters=s,this.limit=o,this.limitType=a,this.startAt=c,this.endAt=h,this.Ee=null,this.de=null,this.Ae=null,this.startAt,this.endAt}}function _p(n,t,e,r,s,o,a,c){return new Wr(n,t,e,r,s,o,a,c)}function Ui(n){return new Wr(n)}function tu(n){return n.filters.length===0&&n.limit===null&&n.startAt==null&&n.endAt==null&&(n.explicitOrderBy.length===0||n.explicitOrderBy.length===1&&n.explicitOrderBy[0].field.isKeyField())}function yp(n){return n.collectionGroup!==null}function On(n){const t=U(n);if(t.Ee===null){t.Ee=[];const e=new Set;for(const o of t.explicitOrderBy)t.Ee.push(o),e.add(o.field.canonicalString());const r=t.explicitOrderBy.length>0?t.explicitOrderBy[t.explicitOrderBy.length-1].dir:"asc";(function(a){let c=new lt(mt.comparator);return a.filters.forEach(h=>{h.getFlattenedFilters().forEach(d=>{d.isInequality()&&(c=c.add(d.field))})}),c})(t).forEach(o=>{e.has(o.canonicalString())||o.isKeyField()||t.Ee.push(new Or(o,r))}),e.has(mt.keyField().canonicalString())||t.Ee.push(new Or(mt.keyField(),r))}return t.Ee}function Bt(n){const t=U(n);return t.de||(t.de=Ep(t,On(n))),t.de}function Ep(n,t){if(n.limitType==="F")return Za(n.path,n.collectionGroup,t,n.filters,n.limit,n.startAt,n.endAt);{t=t.map(s=>{const o=s.dir==="desc"?"asc":"desc";return new Or(s.field,o)});const e=n.endAt?new xr(n.endAt.position,n.endAt.inclusive):null,r=n.startAt?new xr(n.startAt.position,n.startAt.inclusive):null;return Za(n.path,n.collectionGroup,t,n.filters,n.limit,e,r)}}function mi(n,t,e){return new Wr(n.path,n.collectionGroup,n.explicitOrderBy.slice(),n.filters.slice(),t,e,n.startAt,n.endAt)}function Xr(n,t){return Fi(Bt(n),Bt(t))&&n.limitType===t.limitType}function Pc(n){return`${Li(Bt(n))}|lt:${n.limitType}`}function qe(n){return`Query(target=${function(e){let r=e.path.canonicalString();return e.collectionGroup!==null&&(r+=" collectionGroup="+e.collectionGroup),e.filters.length>0&&(r+=`, filters: [${e.filters.map(s=>Cc(s)).join(", ")}]`),Kr(e.limit)||(r+=", limit: "+e.limit),e.orderBy.length>0&&(r+=`, orderBy: [${e.orderBy.map(s=>function(a){return`${a.field.canonicalString()} (${a.dir})`}(s)).join(", ")}]`),e.startAt&&(r+=", startAt: ",r+=e.startAt.inclusive?"b:":"a:",r+=e.startAt.position.map(s=>en(s)).join(",")),e.endAt&&(r+=", endAt: ",r+=e.endAt.inclusive?"a:":"b:",r+=e.endAt.position.map(s=>en(s)).join(",")),`Target(${r})`}(Bt(n))}; limitType=${n.limitType})`}function Yr(n,t){return t.isFoundDocument()&&function(r,s){const o=s.key.path;return r.collectionGroup!==null?s.key.hasCollectionId(r.collectionGroup)&&r.path.isPrefixOf(o):M.isDocumentKey(r.path)?r.path.isEqual(o):r.path.isImmediateParentOf(o)}(n,t)&&function(r,s){for(const o of On(r))if(!o.field.isKeyField()&&s.data.field(o.field)===null)return!1;return!0}(n,t)&&function(r,s){for(const o of r.filters)if(!o.matches(s))return!1;return!0}(n,t)&&function(r,s){return!(r.startAt&&!function(a,c,h){const d=Ya(a,c,h);return a.inclusive?d<=0:d<0}(r.startAt,On(r),s)||r.endAt&&!function(a,c,h){const d=Ya(a,c,h);return a.inclusive?d>=0:d>0}(r.endAt,On(r),s))}(n,t)}function Tp(n){return n.collectionGroup||(n.path.length%2==1?n.path.lastSegment():n.path.get(n.path.length-2))}function Vc(n){return(t,e)=>{let r=!1;for(const s of On(n)){const o=vp(s,t,e);if(o!==0)return o;r=r||s.field.isKeyField()}return 0}}function vp(n,t,e){const r=n.field.isKeyField()?M.comparator(t.key,e.key):function(o,a,c){const h=a.data.field(o),d=c.data.field(o);return h!==null&&d!==null?tn(h,d):L(42886)}(n.field,t,e);switch(n.dir){case"asc":return r;case"desc":return-1*r;default:return L(19790,{direction:n.dir})}}/**
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
 */class Oe{constructor(t,e){this.mapKeyFn=t,this.equalsFn=e,this.inner={},this.innerSize=0}get(t){const e=this.mapKeyFn(t),r=this.inner[e];if(r!==void 0){for(const[s,o]of r)if(this.equalsFn(s,t))return o}}has(t){return this.get(t)!==void 0}set(t,e){const r=this.mapKeyFn(t),s=this.inner[r];if(s===void 0)return this.inner[r]=[[t,e]],void this.innerSize++;for(let o=0;o<s.length;o++)if(this.equalsFn(s[o][0],t))return void(s[o]=[t,e]);s.push([t,e]),this.innerSize++}delete(t){const e=this.mapKeyFn(t),r=this.inner[e];if(r===void 0)return!1;for(let s=0;s<r.length;s++)if(this.equalsFn(r[s][0],t))return r.length===1?delete this.inner[e]:r.splice(s,1),this.innerSize--,!0;return!1}forEach(t){Te(this.inner,(e,r)=>{for(const[s,o]of r)t(s,o)})}isEmpty(){return pc(this.inner)}size(){return this.innerSize}}/**
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
 */const Ip=new et(M.comparator);function Zt(){return Ip}const Dc=new et(M.comparator);function Vn(...n){let t=Dc;for(const e of n)t=t.insert(e.key,e);return t}function kc(n){let t=Dc;return n.forEach((e,r)=>t=t.insert(e,r.overlayedDocument)),t}function be(){return Mn()}function Nc(){return Mn()}function Mn(){return new Oe(n=>n.toString(),(n,t)=>n.isEqual(t))}const wp=new et(M.comparator),Ap=new lt(M.comparator);function q(...n){let t=Ap;for(const e of n)t=t.add(e);return t}const Rp=new lt(j);function bp(){return Rp}/**
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
 */function Bi(n,t){if(n.useProto3Json){if(isNaN(t))return{doubleValue:"NaN"};if(t===1/0)return{doubleValue:"Infinity"};if(t===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:Dr(t)?"-0":t}}function xc(n){return{integerValue:""+n}}function Cp(n,t){return Zf(t)?xc(t):Bi(n,t)}/**
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
 */class Jr{constructor(){this._=void 0}}function Sp(n,t,e){return n instanceof Mr?function(s,o){const a={fields:{[_c]:{stringValue:gc},[Ec]:{timestampValue:{seconds:s.seconds,nanos:s.nanoseconds}}}};return o&&Oi(o)&&(o=Qr(o)),o&&(a.fields[yc]=o),{mapValue:a}}(e,t):n instanceof nn?Mc(n,t):n instanceof zn?Lc(n,t):function(s,o){const a=Oc(s,o),c=eu(a)+eu(s.Re);return di(a)&&di(s.Re)?xc(c):Bi(s.serializer,c)}(n,t)}function Pp(n,t,e){return n instanceof nn?Mc(n,t):n instanceof zn?Lc(n,t):e}function Oc(n,t){return n instanceof Lr?function(r){return di(r)||function(o){return!!o&&"doubleValue"in o}(r)}(t)?t:{integerValue:0}:null}class Mr extends Jr{}class nn extends Jr{constructor(t){super(),this.elements=t}}function Mc(n,t){const e=Fc(t);for(const r of n.elements)e.some(s=>$t(s,r))||e.push(r);return{arrayValue:{values:e}}}class zn extends Jr{constructor(t){super(),this.elements=t}}function Lc(n,t){let e=Fc(t);for(const r of n.elements)e=e.filter(s=>!$t(s,r));return{arrayValue:{values:e}}}class Lr extends Jr{constructor(t,e){super(),this.serializer=t,this.Re=e}}function eu(n){return st(n.integerValue||n.doubleValue)}function Fc(n){return Mi(n)&&n.arrayValue.values?n.arrayValue.values.slice():[]}/**
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
 */class Vp{constructor(t,e){this.field=t,this.transform=e}}function Dp(n,t){return n.field.isEqual(t.field)&&function(r,s){return r instanceof nn&&s instanceof nn||r instanceof zn&&s instanceof zn?Ze(r.elements,s.elements,$t):r instanceof Lr&&s instanceof Lr?$t(r.Re,s.Re):r instanceof Mr&&s instanceof Mr}(n.transform,t.transform)}class kp{constructor(t,e){this.version=t,this.transformResults=e}}class Qt{constructor(t,e){this.updateTime=t,this.exists=e}static none(){return new Qt}static exists(t){return new Qt(void 0,t)}static updateTime(t){return new Qt(t)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(t){return this.exists===t.exists&&(this.updateTime?!!t.updateTime&&this.updateTime.isEqual(t.updateTime):!t.updateTime)}}function Cr(n,t){return n.updateTime!==void 0?t.isFoundDocument()&&t.version.isEqual(n.updateTime):n.exists===void 0||n.exists===t.isFoundDocument()}class Zr{}function Uc(n,t){if(!n.hasLocalMutations||t&&t.fields.length===0)return null;if(t===null)return n.isNoDocument()?new jc(n.key,Qt.none()):new ts(n.key,n.data,Qt.none());{const e=n.data,r=Dt.empty();let s=new lt(mt.comparator);for(let o of t.fields)if(!s.has(o)){let a=e.field(o);a===null&&o.length>1&&(o=o.popLast(),a=e.field(o)),a===null?r.delete(o):r.set(o,a),s=s.add(o)}return new Me(n.key,r,new Mt(s.toArray()),Qt.none())}}function Np(n,t,e){n instanceof ts?function(s,o,a){const c=s.value.clone(),h=ru(s.fieldTransforms,o,a.transformResults);c.setAll(h),o.convertToFoundDocument(a.version,c).setHasCommittedMutations()}(n,t,e):n instanceof Me?function(s,o,a){if(!Cr(s.precondition,o))return void o.convertToUnknownDocument(a.version);const c=ru(s.fieldTransforms,o,a.transformResults),h=o.data;h.setAll(Bc(s)),h.setAll(c),o.convertToFoundDocument(a.version,h).setHasCommittedMutations()}(n,t,e):function(s,o,a){o.convertToNoDocument(a.version).setHasCommittedMutations()}(0,t,e)}function Ln(n,t,e,r){return n instanceof ts?function(o,a,c,h){if(!Cr(o.precondition,a))return c;const d=o.value.clone(),m=su(o.fieldTransforms,h,a);return d.setAll(m),a.convertToFoundDocument(a.version,d).setHasLocalMutations(),null}(n,t,e,r):n instanceof Me?function(o,a,c,h){if(!Cr(o.precondition,a))return c;const d=su(o.fieldTransforms,h,a),m=a.data;return m.setAll(Bc(o)),m.setAll(d),a.convertToFoundDocument(a.version,m).setHasLocalMutations(),c===null?null:c.unionWith(o.fieldMask.fields).unionWith(o.fieldTransforms.map(E=>E.field))}(n,t,e,r):function(o,a,c){return Cr(o.precondition,a)?(a.convertToNoDocument(a.version).setHasLocalMutations(),null):c}(n,t,e)}function xp(n,t){let e=null;for(const r of n.fieldTransforms){const s=t.data.field(r.field),o=Oc(r.transform,s||null);o!=null&&(e===null&&(e=Dt.empty()),e.set(r.field,o))}return e||null}function nu(n,t){return n.type===t.type&&!!n.key.isEqual(t.key)&&!!n.precondition.isEqual(t.precondition)&&!!function(r,s){return r===void 0&&s===void 0||!(!r||!s)&&Ze(r,s,(o,a)=>Dp(o,a))}(n.fieldTransforms,t.fieldTransforms)&&(n.type===0?n.value.isEqual(t.value):n.type!==1||n.data.isEqual(t.data)&&n.fieldMask.isEqual(t.fieldMask))}class ts extends Zr{constructor(t,e,r,s=[]){super(),this.key=t,this.value=e,this.precondition=r,this.fieldTransforms=s,this.type=0}getFieldMask(){return null}}class Me extends Zr{constructor(t,e,r,s,o=[]){super(),this.key=t,this.data=e,this.fieldMask=r,this.precondition=s,this.fieldTransforms=o,this.type=1}getFieldMask(){return this.fieldMask}}function Bc(n){const t=new Map;return n.fieldMask.fields.forEach(e=>{if(!e.isEmpty()){const r=n.data.field(e);t.set(e,r)}}),t}function ru(n,t,e){const r=new Map;X(n.length===e.length,32656,{Ve:e.length,me:n.length});for(let s=0;s<e.length;s++){const o=n[s],a=o.transform,c=t.data.field(o.field);r.set(o.field,Pp(a,c,e[s]))}return r}function su(n,t,e){const r=new Map;for(const s of n){const o=s.transform,a=e.data.field(s.field);r.set(s.field,Sp(o,a,t))}return r}class jc extends Zr{constructor(t,e){super(),this.key=t,this.precondition=e,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class Op extends Zr{constructor(t,e){super(),this.key=t,this.precondition=e,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
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
 */class Mp{constructor(t,e,r,s){this.batchId=t,this.localWriteTime=e,this.baseMutations=r,this.mutations=s}applyToRemoteDocument(t,e){const r=e.mutationResults;for(let s=0;s<this.mutations.length;s++){const o=this.mutations[s];o.key.isEqual(t.key)&&Np(o,t,r[s])}}applyToLocalView(t,e){for(const r of this.baseMutations)r.key.isEqual(t.key)&&(e=Ln(r,t,e,this.localWriteTime));for(const r of this.mutations)r.key.isEqual(t.key)&&(e=Ln(r,t,e,this.localWriteTime));return e}applyToLocalDocumentSet(t,e){const r=Nc();return this.mutations.forEach(s=>{const o=t.get(s.key),a=o.overlayedDocument;let c=this.applyToLocalView(a,o.mutatedFields);c=e.has(s.key)?null:c;const h=Uc(a,c);h!==null&&r.set(s.key,h),a.isValidDocument()||a.convertToNoDocument(F.min())}),r}keys(){return this.mutations.reduce((t,e)=>t.add(e.key),q())}isEqual(t){return this.batchId===t.batchId&&Ze(this.mutations,t.mutations,(e,r)=>nu(e,r))&&Ze(this.baseMutations,t.baseMutations,(e,r)=>nu(e,r))}}class ji{constructor(t,e,r,s){this.batch=t,this.commitVersion=e,this.mutationResults=r,this.docVersions=s}static from(t,e,r){X(t.mutations.length===r.length,58842,{fe:t.mutations.length,ge:r.length});let s=function(){return wp}();const o=t.mutations;for(let a=0;a<o.length;a++)s=s.insert(o[a].key,r[a].version);return new ji(t,e,r,s)}}/**
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
 */class Lp{constructor(t,e){this.largestBatchId=t,this.mutation=e}getKey(){return this.mutation.key}isEqual(t){return t!==null&&this.mutation===t.mutation}toString(){return`Overlay{
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
 */class Fp{constructor(t,e){this.count=t,this.unchangedNames=e}}/**
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
 */var at,G;function Up(n){switch(n){case S.OK:return L(64938);case S.CANCELLED:case S.UNKNOWN:case S.DEADLINE_EXCEEDED:case S.RESOURCE_EXHAUSTED:case S.INTERNAL:case S.UNAVAILABLE:case S.UNAUTHENTICATED:return!1;case S.INVALID_ARGUMENT:case S.NOT_FOUND:case S.ALREADY_EXISTS:case S.PERMISSION_DENIED:case S.FAILED_PRECONDITION:case S.ABORTED:case S.OUT_OF_RANGE:case S.UNIMPLEMENTED:case S.DATA_LOSS:return!0;default:return L(15467,{code:n})}}function $c(n){if(n===void 0)return Jt("GRPC error has no .code"),S.UNKNOWN;switch(n){case at.OK:return S.OK;case at.CANCELLED:return S.CANCELLED;case at.UNKNOWN:return S.UNKNOWN;case at.DEADLINE_EXCEEDED:return S.DEADLINE_EXCEEDED;case at.RESOURCE_EXHAUSTED:return S.RESOURCE_EXHAUSTED;case at.INTERNAL:return S.INTERNAL;case at.UNAVAILABLE:return S.UNAVAILABLE;case at.UNAUTHENTICATED:return S.UNAUTHENTICATED;case at.INVALID_ARGUMENT:return S.INVALID_ARGUMENT;case at.NOT_FOUND:return S.NOT_FOUND;case at.ALREADY_EXISTS:return S.ALREADY_EXISTS;case at.PERMISSION_DENIED:return S.PERMISSION_DENIED;case at.FAILED_PRECONDITION:return S.FAILED_PRECONDITION;case at.ABORTED:return S.ABORTED;case at.OUT_OF_RANGE:return S.OUT_OF_RANGE;case at.UNIMPLEMENTED:return S.UNIMPLEMENTED;case at.DATA_LOSS:return S.DATA_LOSS;default:return L(39323,{code:n})}}(G=at||(at={}))[G.OK=0]="OK",G[G.CANCELLED=1]="CANCELLED",G[G.UNKNOWN=2]="UNKNOWN",G[G.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",G[G.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",G[G.NOT_FOUND=5]="NOT_FOUND",G[G.ALREADY_EXISTS=6]="ALREADY_EXISTS",G[G.PERMISSION_DENIED=7]="PERMISSION_DENIED",G[G.UNAUTHENTICATED=16]="UNAUTHENTICATED",G[G.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",G[G.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",G[G.ABORTED=10]="ABORTED",G[G.OUT_OF_RANGE=11]="OUT_OF_RANGE",G[G.UNIMPLEMENTED=12]="UNIMPLEMENTED",G[G.INTERNAL=13]="INTERNAL",G[G.UNAVAILABLE=14]="UNAVAILABLE",G[G.DATA_LOSS=15]="DATA_LOSS";/**
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
 */const Bp=new le([4294967295,4294967295],0);function iu(n){const t=hc().encode(n),e=new rc;return e.update(t),new Uint8Array(e.digest())}function ou(n){const t=new DataView(n.buffer),e=t.getUint32(0,!0),r=t.getUint32(4,!0),s=t.getUint32(8,!0),o=t.getUint32(12,!0);return[new le([e,r],0),new le([s,o],0)]}class $i{constructor(t,e,r){if(this.bitmap=t,this.padding=e,this.hashCount=r,e<0||e>=8)throw new Dn(`Invalid padding: ${e}`);if(r<0)throw new Dn(`Invalid hash count: ${r}`);if(t.length>0&&this.hashCount===0)throw new Dn(`Invalid hash count: ${r}`);if(t.length===0&&e!==0)throw new Dn(`Invalid padding when bitmap length is 0: ${e}`);this.pe=8*t.length-e,this.ye=le.fromNumber(this.pe)}we(t,e,r){let s=t.add(e.multiply(le.fromNumber(r)));return s.compare(Bp)===1&&(s=new le([s.getBits(0),s.getBits(1)],0)),s.modulo(this.ye).toNumber()}be(t){return!!(this.bitmap[Math.floor(t/8)]&1<<t%8)}mightContain(t){if(this.pe===0)return!1;const e=iu(t),[r,s]=ou(e);for(let o=0;o<this.hashCount;o++){const a=this.we(r,s,o);if(!this.be(a))return!1}return!0}static create(t,e,r){const s=t%8==0?0:8-t%8,o=new Uint8Array(Math.ceil(t/8)),a=new $i(o,s,e);return r.forEach(c=>a.insert(c)),a}insert(t){if(this.pe===0)return;const e=iu(t),[r,s]=ou(e);for(let o=0;o<this.hashCount;o++){const a=this.we(r,s,o);this.Se(a)}}Se(t){const e=Math.floor(t/8),r=t%8;this.bitmap[e]|=1<<r}}class Dn extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
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
 */class es{constructor(t,e,r,s,o){this.snapshotVersion=t,this.targetChanges=e,this.targetMismatches=r,this.documentUpdates=s,this.resolvedLimboDocuments=o}static createSynthesizedRemoteEventForCurrentChange(t,e,r){const s=new Map;return s.set(t,Xn.createSynthesizedTargetChangeForCurrentChange(t,e,r)),new es(F.min(),s,new et(j),Zt(),q())}}class Xn{constructor(t,e,r,s,o){this.resumeToken=t,this.current=e,this.addedDocuments=r,this.modifiedDocuments=s,this.removedDocuments=o}static createSynthesizedTargetChangeForCurrentChange(t,e,r){return new Xn(r,e,q(),q(),q())}}/**
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
 */class Sr{constructor(t,e,r,s){this.De=t,this.removedTargetIds=e,this.key=r,this.ve=s}}class qc{constructor(t,e){this.targetId=t,this.Ce=e}}class zc{constructor(t,e,r=gt.EMPTY_BYTE_STRING,s=null){this.state=t,this.targetIds=e,this.resumeToken=r,this.cause=s}}class au{constructor(){this.Fe=0,this.Me=uu(),this.xe=gt.EMPTY_BYTE_STRING,this.Oe=!1,this.Ne=!0}get current(){return this.Oe}get resumeToken(){return this.xe}get Be(){return this.Fe!==0}get Le(){return this.Ne}ke(t){t.approximateByteSize()>0&&(this.Ne=!0,this.xe=t)}qe(){let t=q(),e=q(),r=q();return this.Me.forEach((s,o)=>{switch(o){case 0:t=t.add(s);break;case 2:e=e.add(s);break;case 1:r=r.add(s);break;default:L(38017,{changeType:o})}}),new Xn(this.xe,this.Oe,t,e,r)}Qe(){this.Ne=!1,this.Me=uu()}$e(t,e){this.Ne=!0,this.Me=this.Me.insert(t,e)}Ue(t){this.Ne=!0,this.Me=this.Me.remove(t)}Ke(){this.Fe+=1}We(){this.Fe-=1,X(this.Fe>=0,3241,{Fe:this.Fe})}Ge(){this.Ne=!0,this.Oe=!0}}class jp{constructor(t){this.ze=t,this.je=new Map,this.He=Zt(),this.Je=Ir(),this.Ye=Ir(),this.Ze=new et(j)}Xe(t){for(const e of t.De)t.ve&&t.ve.isFoundDocument()?this.et(e,t.ve):this.tt(e,t.key,t.ve);for(const e of t.removedTargetIds)this.tt(e,t.key,t.ve)}nt(t){this.forEachTarget(t,e=>{const r=this.rt(e);switch(t.state){case 0:this.it(e)&&r.ke(t.resumeToken);break;case 1:r.We(),r.Be||r.Qe(),r.ke(t.resumeToken);break;case 2:r.We(),r.Be||this.removeTarget(e);break;case 3:this.it(e)&&(r.Ge(),r.ke(t.resumeToken));break;case 4:this.it(e)&&(this.st(e),r.ke(t.resumeToken));break;default:L(56790,{state:t.state})}})}forEachTarget(t,e){t.targetIds.length>0?t.targetIds.forEach(e):this.je.forEach((r,s)=>{this.it(s)&&e(s)})}ot(t){const e=t.targetId,r=t.Ce.count,s=this._t(e);if(s){const o=s.target;if(pi(o))if(r===0){const a=new M(o.path);this.tt(e,a,wt.newNoDocument(a,F.min()))}else X(r===1,20013,{expectedCount:r});else{const a=this.ut(e);if(a!==r){const c=this.ct(t),h=c?this.lt(c,t,a):1;if(h!==0){this.st(e);const d=h===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Ze=this.Ze.insert(e,d)}}}}}ct(t){const e=t.Ce.unchangedNames;if(!e||!e.bits)return null;const{bits:{bitmap:r="",padding:s=0},hashCount:o=0}=e;let a,c;try{a=me(r).toUint8Array()}catch(h){if(h instanceof mc)return Je("Decoding the base64 bloom filter in existence filter failed ("+h.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw h}try{c=new $i(a,s,o)}catch(h){return Je(h instanceof Dn?"BloomFilter error: ":"Applying bloom filter failed: ",h),null}return c.pe===0?null:c}lt(t,e,r){return e.Ce.count===r-this.Tt(t,e.targetId)?0:2}Tt(t,e){const r=this.ze.getRemoteKeysForTarget(e);let s=0;return r.forEach(o=>{const a=this.ze.Pt(),c=`projects/${a.projectId}/databases/${a.database}/documents/${o.path.canonicalString()}`;t.mightContain(c)||(this.tt(e,o,null),s++)}),s}It(t){const e=new Map;this.je.forEach((o,a)=>{const c=this._t(a);if(c){if(o.current&&pi(c.target)){const h=new M(c.target.path);this.Et(h).has(a)||this.dt(a,h)||this.tt(a,h,wt.newNoDocument(h,t))}o.Le&&(e.set(a,o.qe()),o.Qe())}});let r=q();this.Ye.forEach((o,a)=>{let c=!0;a.forEachWhile(h=>{const d=this._t(h);return!d||d.purpose==="TargetPurposeLimboResolution"||(c=!1,!1)}),c&&(r=r.add(o))}),this.He.forEach((o,a)=>a.setReadTime(t));const s=new es(t,e,this.Ze,this.He,r);return this.He=Zt(),this.Je=Ir(),this.Ye=Ir(),this.Ze=new et(j),s}et(t,e){if(!this.it(t))return;const r=this.dt(t,e.key)?2:0;this.rt(t).$e(e.key,r),this.He=this.He.insert(e.key,e),this.Je=this.Je.insert(e.key,this.Et(e.key).add(t)),this.Ye=this.Ye.insert(e.key,this.At(e.key).add(t))}tt(t,e,r){if(!this.it(t))return;const s=this.rt(t);this.dt(t,e)?s.$e(e,1):s.Ue(e),this.Ye=this.Ye.insert(e,this.At(e).delete(t)),this.Ye=this.Ye.insert(e,this.At(e).add(t)),r&&(this.He=this.He.insert(e,r))}removeTarget(t){this.je.delete(t)}ut(t){const e=this.rt(t).qe();return this.ze.getRemoteKeysForTarget(t).size+e.addedDocuments.size-e.removedDocuments.size}Ke(t){this.rt(t).Ke()}rt(t){let e=this.je.get(t);return e||(e=new au,this.je.set(t,e)),e}At(t){let e=this.Ye.get(t);return e||(e=new lt(j),this.Ye=this.Ye.insert(t,e)),e}Et(t){let e=this.Je.get(t);return e||(e=new lt(j),this.Je=this.Je.insert(t,e)),e}it(t){const e=this._t(t)!==null;return e||N("WatchChangeAggregator","Detected inactive target",t),e}_t(t){const e=this.je.get(t);return e&&e.Be?null:this.ze.Rt(t)}st(t){this.je.set(t,new au),this.ze.getRemoteKeysForTarget(t).forEach(e=>{this.tt(t,e,null)})}dt(t,e){return this.ze.getRemoteKeysForTarget(t).has(e)}}function Ir(){return new et(M.comparator)}function uu(){return new et(M.comparator)}const $p={asc:"ASCENDING",desc:"DESCENDING"},qp={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},zp={and:"AND",or:"OR"};class Hp{constructor(t,e){this.databaseId=t,this.useProto3Json=e}}function gi(n,t){return n.useProto3Json||Kr(t)?t:{value:t}}function Fr(n,t){return n.useProto3Json?`${new Date(1e3*t.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+t.nanoseconds).slice(-9)}Z`:{seconds:""+t.seconds,nanos:t.nanoseconds}}function Hc(n,t){return n.useProto3Json?t.toBase64():t.toUint8Array()}function Gp(n,t){return Fr(n,t.toTimestamp())}function jt(n){return X(!!n,49232),F.fromTimestamp(function(e){const r=pe(e);return new ct(r.seconds,r.nanos)}(n))}function qi(n,t){return _i(n,t).canonicalString()}function _i(n,t){const e=function(s){return new rt(["projects",s.projectId,"databases",s.database])}(n).child("documents");return t===void 0?e:e.child(t)}function Gc(n){const t=rt.fromString(n);return X(Yc(t),10190,{key:t.toString()}),t}function yi(n,t){return qi(n.databaseId,t.path)}function Bs(n,t){const e=Gc(t);if(e.get(1)!==n.databaseId.projectId)throw new O(S.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+e.get(1)+" vs "+n.databaseId.projectId);if(e.get(3)!==n.databaseId.database)throw new O(S.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+e.get(3)+" vs "+n.databaseId.database);return new M(Qc(e))}function Kc(n,t){return qi(n.databaseId,t)}function Kp(n){const t=Gc(n);return t.length===4?rt.emptyPath():Qc(t)}function Ei(n){return new rt(["projects",n.databaseId.projectId,"databases",n.databaseId.database]).canonicalString()}function Qc(n){return X(n.length>4&&n.get(4)==="documents",29091,{key:n.toString()}),n.popFirst(5)}function cu(n,t,e){return{name:yi(n,t),fields:e.value.mapValue.fields}}function Qp(n,t){let e;if("targetChange"in t){t.targetChange;const r=function(d){return d==="NO_CHANGE"?0:d==="ADD"?1:d==="REMOVE"?2:d==="CURRENT"?3:d==="RESET"?4:L(39313,{state:d})}(t.targetChange.targetChangeType||"NO_CHANGE"),s=t.targetChange.targetIds||[],o=function(d,m){return d.useProto3Json?(X(m===void 0||typeof m=="string",58123),gt.fromBase64String(m||"")):(X(m===void 0||m instanceof Buffer||m instanceof Uint8Array,16193),gt.fromUint8Array(m||new Uint8Array))}(n,t.targetChange.resumeToken),a=t.targetChange.cause,c=a&&function(d){const m=d.code===void 0?S.UNKNOWN:$c(d.code);return new O(m,d.message||"")}(a);e=new zc(r,s,o,c||null)}else if("documentChange"in t){t.documentChange;const r=t.documentChange;r.document,r.document.name,r.document.updateTime;const s=Bs(n,r.document.name),o=jt(r.document.updateTime),a=r.document.createTime?jt(r.document.createTime):F.min(),c=new Dt({mapValue:{fields:r.document.fields}}),h=wt.newFoundDocument(s,o,a,c),d=r.targetIds||[],m=r.removedTargetIds||[];e=new Sr(d,m,h.key,h)}else if("documentDelete"in t){t.documentDelete;const r=t.documentDelete;r.document;const s=Bs(n,r.document),o=r.readTime?jt(r.readTime):F.min(),a=wt.newNoDocument(s,o),c=r.removedTargetIds||[];e=new Sr([],c,a.key,a)}else if("documentRemove"in t){t.documentRemove;const r=t.documentRemove;r.document;const s=Bs(n,r.document),o=r.removedTargetIds||[];e=new Sr([],o,s,null)}else{if(!("filter"in t))return L(11601,{Vt:t});{t.filter;const r=t.filter;r.targetId;const{count:s=0,unchangedNames:o}=r,a=new Fp(s,o),c=r.targetId;e=new qc(c,a)}}return e}function Wp(n,t){let e;if(t instanceof ts)e={update:cu(n,t.key,t.value)};else if(t instanceof jc)e={delete:yi(n,t.key)};else if(t instanceof Me)e={update:cu(n,t.key,t.data),updateMask:sm(t.fieldMask)};else{if(!(t instanceof Op))return L(16599,{ft:t.type});e={verify:yi(n,t.key)}}return t.fieldTransforms.length>0&&(e.updateTransforms=t.fieldTransforms.map(r=>function(o,a){const c=a.transform;if(c instanceof Mr)return{fieldPath:a.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(c instanceof nn)return{fieldPath:a.field.canonicalString(),appendMissingElements:{values:c.elements}};if(c instanceof zn)return{fieldPath:a.field.canonicalString(),removeAllFromArray:{values:c.elements}};if(c instanceof Lr)return{fieldPath:a.field.canonicalString(),increment:c.Re};throw L(20930,{transform:a.transform})}(0,r))),t.precondition.isNone||(e.currentDocument=function(s,o){return o.updateTime!==void 0?{updateTime:Gp(s,o.updateTime)}:o.exists!==void 0?{exists:o.exists}:L(27497)}(n,t.precondition)),e}function Xp(n,t){return n&&n.length>0?(X(t!==void 0,14353),n.map(e=>function(s,o){let a=s.updateTime?jt(s.updateTime):jt(o);return a.isEqual(F.min())&&(a=jt(o)),new kp(a,s.transformResults||[])}(e,t))):[]}function Yp(n,t){return{documents:[Kc(n,t.path)]}}function Jp(n,t){const e={structuredQuery:{}},r=t.path;let s;t.collectionGroup!==null?(s=r,e.structuredQuery.from=[{collectionId:t.collectionGroup,allDescendants:!0}]):(s=r.popLast(),e.structuredQuery.from=[{collectionId:r.lastSegment()}]),e.parent=Kc(n,s);const o=function(d){if(d.length!==0)return Xc(qt.create(d,"and"))}(t.filters);o&&(e.structuredQuery.where=o);const a=function(d){if(d.length!==0)return d.map(m=>function(I){return{field:ze(I.field),direction:em(I.dir)}}(m))}(t.orderBy);a&&(e.structuredQuery.orderBy=a);const c=gi(n,t.limit);return c!==null&&(e.structuredQuery.limit=c),t.startAt&&(e.structuredQuery.startAt=function(d){return{before:d.inclusive,values:d.position}}(t.startAt)),t.endAt&&(e.structuredQuery.endAt=function(d){return{before:!d.inclusive,values:d.position}}(t.endAt)),{gt:e,parent:s}}function Zp(n){let t=Kp(n.parent);const e=n.structuredQuery,r=e.from?e.from.length:0;let s=null;if(r>0){X(r===1,65062);const m=e.from[0];m.allDescendants?s=m.collectionId:t=t.child(m.collectionId)}let o=[];e.where&&(o=function(E){const I=Wc(E);return I instanceof qt&&Rc(I)?I.getFilters():[I]}(e.where));let a=[];e.orderBy&&(a=function(E){return E.map(I=>function(V){return new Or(He(V.field),function(P){switch(P){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(V.direction))}(I))}(e.orderBy));let c=null;e.limit&&(c=function(E){let I;return I=typeof E=="object"?E.value:E,Kr(I)?null:I}(e.limit));let h=null;e.startAt&&(h=function(E){const I=!!E.before,b=E.values||[];return new xr(b,I)}(e.startAt));let d=null;return e.endAt&&(d=function(E){const I=!E.before,b=E.values||[];return new xr(b,I)}(e.endAt)),_p(t,s,a,o,c,"F",h,d)}function tm(n,t){const e=function(s){switch(s){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return L(28987,{purpose:s})}}(t.purpose);return e==null?null:{"goog-listen-tags":e}}function Wc(n){return n.unaryFilter!==void 0?function(e){switch(e.unaryFilter.op){case"IS_NAN":const r=He(e.unaryFilter.field);return ut.create(r,"==",{doubleValue:NaN});case"IS_NULL":const s=He(e.unaryFilter.field);return ut.create(s,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const o=He(e.unaryFilter.field);return ut.create(o,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const a=He(e.unaryFilter.field);return ut.create(a,"!=",{nullValue:"NULL_VALUE"});case"OPERATOR_UNSPECIFIED":return L(61313);default:return L(60726)}}(n):n.fieldFilter!==void 0?function(e){return ut.create(He(e.fieldFilter.field),function(s){switch(s){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";case"OPERATOR_UNSPECIFIED":return L(58110);default:return L(50506)}}(e.fieldFilter.op),e.fieldFilter.value)}(n):n.compositeFilter!==void 0?function(e){return qt.create(e.compositeFilter.filters.map(r=>Wc(r)),function(s){switch(s){case"AND":return"and";case"OR":return"or";default:return L(1026)}}(e.compositeFilter.op))}(n):L(30097,{filter:n})}function em(n){return $p[n]}function nm(n){return qp[n]}function rm(n){return zp[n]}function ze(n){return{fieldPath:n.canonicalString()}}function He(n){return mt.fromServerFormat(n.fieldPath)}function Xc(n){return n instanceof ut?function(e){if(e.op==="=="){if(Xa(e.value))return{unaryFilter:{field:ze(e.field),op:"IS_NAN"}};if(Wa(e.value))return{unaryFilter:{field:ze(e.field),op:"IS_NULL"}}}else if(e.op==="!="){if(Xa(e.value))return{unaryFilter:{field:ze(e.field),op:"IS_NOT_NAN"}};if(Wa(e.value))return{unaryFilter:{field:ze(e.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:ze(e.field),op:nm(e.op),value:e.value}}}(n):n instanceof qt?function(e){const r=e.getFilters().map(s=>Xc(s));return r.length===1?r[0]:{compositeFilter:{op:rm(e.op),filters:r}}}(n):L(54877,{filter:n})}function sm(n){const t=[];return n.fields.forEach(e=>t.push(e.canonicalString())),{fieldPaths:t}}function Yc(n){return n.length>=4&&n.get(0)==="projects"&&n.get(2)==="databases"}/**
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
 */class ae{constructor(t,e,r,s,o=F.min(),a=F.min(),c=gt.EMPTY_BYTE_STRING,h=null){this.target=t,this.targetId=e,this.purpose=r,this.sequenceNumber=s,this.snapshotVersion=o,this.lastLimboFreeSnapshotVersion=a,this.resumeToken=c,this.expectedCount=h}withSequenceNumber(t){return new ae(this.target,this.targetId,this.purpose,t,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(t,e){return new ae(this.target,this.targetId,this.purpose,this.sequenceNumber,e,this.lastLimboFreeSnapshotVersion,t,null)}withExpectedCount(t){return new ae(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,t)}withLastLimboFreeSnapshotVersion(t){return new ae(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,t,this.resumeToken,this.expectedCount)}}/**
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
 */class im{constructor(t){this.wt=t}}function om(n){const t=Zp({parent:n.parent,structuredQuery:n.structuredQuery});return n.limitType==="LAST"?mi(t,t.limit,"L"):t}/**
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
 */class am{constructor(){this.Cn=new um}addToCollectionParentIndex(t,e){return this.Cn.add(e),C.resolve()}getCollectionParents(t,e){return C.resolve(this.Cn.getEntries(e))}addFieldIndex(t,e){return C.resolve()}deleteFieldIndex(t,e){return C.resolve()}deleteAllFieldIndexes(t){return C.resolve()}createTargetIndexes(t,e){return C.resolve()}getDocumentsMatchingTarget(t,e){return C.resolve(null)}getIndexType(t,e){return C.resolve(0)}getFieldIndexes(t,e){return C.resolve([])}getNextCollectionGroupToUpdate(t){return C.resolve(null)}getMinOffset(t,e){return C.resolve(fe.min())}getMinOffsetFromCollectionGroup(t,e){return C.resolve(fe.min())}updateCollectionGroup(t,e,r){return C.resolve()}updateIndexEntries(t,e){return C.resolve()}}class um{constructor(){this.index={}}add(t){const e=t.lastSegment(),r=t.popLast(),s=this.index[e]||new lt(rt.comparator),o=!s.has(r);return this.index[e]=s.add(r),o}has(t){const e=t.lastSegment(),r=t.popLast(),s=this.index[e];return s&&s.has(r)}getEntries(t){return(this.index[t]||new lt(rt.comparator)).toArray()}}/**
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
 */const lu={didRun:!1,sequenceNumbersCollected:0,targetsRemoved:0,documentsRemoved:0},Jc=41943040;class St{static withCacheSize(t){return new St(t,St.DEFAULT_COLLECTION_PERCENTILE,St.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}constructor(t,e,r){this.cacheSizeCollectionThreshold=t,this.percentileToCollect=e,this.maximumSequenceNumbersToCollect=r}}/**
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
 */St.DEFAULT_COLLECTION_PERCENTILE=10,St.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,St.DEFAULT=new St(Jc,St.DEFAULT_COLLECTION_PERCENTILE,St.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),St.DISABLED=new St(-1,0,0);/**
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
 */class rn{constructor(t){this.ur=t}next(){return this.ur+=2,this.ur}static cr(){return new rn(0)}static lr(){return new rn(-1)}}/**
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
 */const hu="LruGarbageCollector",cm=1048576;function du([n,t],[e,r]){const s=j(n,e);return s===0?j(t,r):s}class lm{constructor(t){this.Er=t,this.buffer=new lt(du),this.dr=0}Ar(){return++this.dr}Rr(t){const e=[t,this.Ar()];if(this.buffer.size<this.Er)this.buffer=this.buffer.add(e);else{const r=this.buffer.last();du(e,r)<0&&(this.buffer=this.buffer.delete(r).add(e))}}get maxValue(){return this.buffer.last()[0]}}class hm{constructor(t,e,r){this.garbageCollector=t,this.asyncQueue=e,this.localStore=r,this.Vr=null}start(){this.garbageCollector.params.cacheSizeCollectionThreshold!==-1&&this.mr(6e4)}stop(){this.Vr&&(this.Vr.cancel(),this.Vr=null)}get started(){return this.Vr!==null}mr(t){N(hu,`Garbage collection scheduled in ${t}ms`),this.Vr=this.asyncQueue.enqueueAfterDelay("lru_garbage_collection",t,async()=>{this.Vr=null;try{await this.localStore.collectGarbage(this.garbageCollector)}catch(e){cn(e)?N(hu,"Ignoring IndexedDB error during garbage collection: ",e):await un(e)}await this.mr(3e5)})}}class dm{constructor(t,e){this.gr=t,this.params=e}calculateTargetCount(t,e){return this.gr.pr(t).next(r=>Math.floor(e/100*r))}nthSequenceNumber(t,e){if(e===0)return C.resolve(Gr.le);const r=new lm(e);return this.gr.forEachTarget(t,s=>r.Rr(s.sequenceNumber)).next(()=>this.gr.yr(t,s=>r.Rr(s))).next(()=>r.maxValue)}removeTargets(t,e,r){return this.gr.removeTargets(t,e,r)}removeOrphanedDocuments(t,e){return this.gr.removeOrphanedDocuments(t,e)}collect(t,e){return this.params.cacheSizeCollectionThreshold===-1?(N("LruGarbageCollector","Garbage collection skipped; disabled"),C.resolve(lu)):this.getCacheSize(t).next(r=>r<this.params.cacheSizeCollectionThreshold?(N("LruGarbageCollector",`Garbage collection skipped; Cache size ${r} is lower than threshold ${this.params.cacheSizeCollectionThreshold}`),lu):this.wr(t,e))}getCacheSize(t){return this.gr.getCacheSize(t)}wr(t,e){let r,s,o,a,c,h,d;const m=Date.now();return this.calculateTargetCount(t,this.params.percentileToCollect).next(E=>(E>this.params.maximumSequenceNumbersToCollect?(N("LruGarbageCollector",`Capping sequence numbers to collect down to the maximum of ${this.params.maximumSequenceNumbersToCollect} from ${E}`),s=this.params.maximumSequenceNumbersToCollect):s=E,a=Date.now(),this.nthSequenceNumber(t,s))).next(E=>(r=E,c=Date.now(),this.removeTargets(t,r,e))).next(E=>(o=E,h=Date.now(),this.removeOrphanedDocuments(t,r))).next(E=>(d=Date.now(),$e()<=K.DEBUG&&N("LruGarbageCollector",`LRU Garbage Collection
	Counted targets in ${a-m}ms
	Determined least recently used ${s} in `+(c-a)+`ms
	Removed ${o} targets in `+(h-c)+`ms
	Removed ${E} documents in `+(d-h)+`ms
Total Duration: ${d-m}ms`),C.resolve({didRun:!0,sequenceNumbersCollected:s,targetsRemoved:o,documentsRemoved:E})))}}function fm(n,t){return new dm(n,t)}/**
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
 */class pm{constructor(){this.changes=new Oe(t=>t.toString(),(t,e)=>t.isEqual(e)),this.changesApplied=!1}addEntry(t){this.assertNotApplied(),this.changes.set(t.key,t)}removeEntry(t,e){this.assertNotApplied(),this.changes.set(t,wt.newInvalidDocument(t).setReadTime(e))}getEntry(t,e){this.assertNotApplied();const r=this.changes.get(e);return r!==void 0?C.resolve(r):this.getFromCache(t,e)}getEntries(t,e){return this.getAllFromCache(t,e)}apply(t){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(t)}assertNotApplied(){}}/**
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
 */class mm{constructor(t,e){this.overlayedDocument=t,this.mutatedFields=e}}/**
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
 */class gm{constructor(t,e,r,s){this.remoteDocumentCache=t,this.mutationQueue=e,this.documentOverlayCache=r,this.indexManager=s}getDocument(t,e){let r=null;return this.documentOverlayCache.getOverlay(t,e).next(s=>(r=s,this.remoteDocumentCache.getEntry(t,e))).next(s=>(r!==null&&Ln(r.mutation,s,Mt.empty(),ct.now()),s))}getDocuments(t,e){return this.remoteDocumentCache.getEntries(t,e).next(r=>this.getLocalViewOfDocuments(t,r,q()).next(()=>r))}getLocalViewOfDocuments(t,e,r=q()){const s=be();return this.populateOverlays(t,s,e).next(()=>this.computeViews(t,e,s,r).next(o=>{let a=Vn();return o.forEach((c,h)=>{a=a.insert(c,h.overlayedDocument)}),a}))}getOverlayedDocuments(t,e){const r=be();return this.populateOverlays(t,r,e).next(()=>this.computeViews(t,e,r,q()))}populateOverlays(t,e,r){const s=[];return r.forEach(o=>{e.has(o)||s.push(o)}),this.documentOverlayCache.getOverlays(t,s).next(o=>{o.forEach((a,c)=>{e.set(a,c)})})}computeViews(t,e,r,s){let o=Zt();const a=Mn(),c=function(){return Mn()}();return e.forEach((h,d)=>{const m=r.get(d.key);s.has(d.key)&&(m===void 0||m.mutation instanceof Me)?o=o.insert(d.key,d):m!==void 0?(a.set(d.key,m.mutation.getFieldMask()),Ln(m.mutation,d,m.mutation.getFieldMask(),ct.now())):a.set(d.key,Mt.empty())}),this.recalculateAndSaveOverlays(t,o).next(h=>(h.forEach((d,m)=>a.set(d,m)),e.forEach((d,m)=>{var E;return c.set(d,new mm(m,(E=a.get(d))!==null&&E!==void 0?E:null))}),c))}recalculateAndSaveOverlays(t,e){const r=Mn();let s=new et((a,c)=>a-c),o=q();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(t,e).next(a=>{for(const c of a)c.keys().forEach(h=>{const d=e.get(h);if(d===null)return;let m=r.get(h)||Mt.empty();m=c.applyToLocalView(d,m),r.set(h,m);const E=(s.get(c.batchId)||q()).add(h);s=s.insert(c.batchId,E)})}).next(()=>{const a=[],c=s.getReverseIterator();for(;c.hasNext();){const h=c.getNext(),d=h.key,m=h.value,E=Nc();m.forEach(I=>{if(!o.has(I)){const b=Uc(e.get(I),r.get(I));b!==null&&E.set(I,b),o=o.add(I)}}),a.push(this.documentOverlayCache.saveOverlays(t,d,E))}return C.waitFor(a)}).next(()=>r)}recalculateAndSaveOverlaysForDocumentKeys(t,e){return this.remoteDocumentCache.getEntries(t,e).next(r=>this.recalculateAndSaveOverlays(t,r))}getDocumentsMatchingQuery(t,e,r,s){return function(a){return M.isDocumentKey(a.path)&&a.collectionGroup===null&&a.filters.length===0}(e)?this.getDocumentsMatchingDocumentQuery(t,e.path):yp(e)?this.getDocumentsMatchingCollectionGroupQuery(t,e,r,s):this.getDocumentsMatchingCollectionQuery(t,e,r,s)}getNextDocuments(t,e,r,s){return this.remoteDocumentCache.getAllFromCollectionGroup(t,e,r,s).next(o=>{const a=s-o.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(t,e,r.largestBatchId,s-o.size):C.resolve(be());let c=Bn,h=o;return a.next(d=>C.forEach(d,(m,E)=>(c<E.largestBatchId&&(c=E.largestBatchId),o.get(m)?C.resolve():this.remoteDocumentCache.getEntry(t,m).next(I=>{h=h.insert(m,I)}))).next(()=>this.populateOverlays(t,d,o)).next(()=>this.computeViews(t,h,d,q())).next(m=>({batchId:c,changes:kc(m)})))})}getDocumentsMatchingDocumentQuery(t,e){return this.getDocument(t,new M(e)).next(r=>{let s=Vn();return r.isFoundDocument()&&(s=s.insert(r.key,r)),s})}getDocumentsMatchingCollectionGroupQuery(t,e,r,s){const o=e.collectionGroup;let a=Vn();return this.indexManager.getCollectionParents(t,o).next(c=>C.forEach(c,h=>{const d=function(E,I){return new Wr(I,null,E.explicitOrderBy.slice(),E.filters.slice(),E.limit,E.limitType,E.startAt,E.endAt)}(e,h.child(o));return this.getDocumentsMatchingCollectionQuery(t,d,r,s).next(m=>{m.forEach((E,I)=>{a=a.insert(E,I)})})}).next(()=>a))}getDocumentsMatchingCollectionQuery(t,e,r,s){let o;return this.documentOverlayCache.getOverlaysForCollection(t,e.path,r.largestBatchId).next(a=>(o=a,this.remoteDocumentCache.getDocumentsMatchingQuery(t,e,r,o,s))).next(a=>{o.forEach((h,d)=>{const m=d.getKey();a.get(m)===null&&(a=a.insert(m,wt.newInvalidDocument(m)))});let c=Vn();return a.forEach((h,d)=>{const m=o.get(h);m!==void 0&&Ln(m.mutation,d,Mt.empty(),ct.now()),Yr(e,d)&&(c=c.insert(h,d))}),c})}}/**
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
 */class _m{constructor(t){this.serializer=t,this.kr=new Map,this.qr=new Map}getBundleMetadata(t,e){return C.resolve(this.kr.get(e))}saveBundleMetadata(t,e){return this.kr.set(e.id,function(s){return{id:s.id,version:s.version,createTime:jt(s.createTime)}}(e)),C.resolve()}getNamedQuery(t,e){return C.resolve(this.qr.get(e))}saveNamedQuery(t,e){return this.qr.set(e.name,function(s){return{name:s.name,query:om(s.bundledQuery),readTime:jt(s.readTime)}}(e)),C.resolve()}}/**
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
 */class ym{constructor(){this.overlays=new et(M.comparator),this.Qr=new Map}getOverlay(t,e){return C.resolve(this.overlays.get(e))}getOverlays(t,e){const r=be();return C.forEach(e,s=>this.getOverlay(t,s).next(o=>{o!==null&&r.set(s,o)})).next(()=>r)}saveOverlays(t,e,r){return r.forEach((s,o)=>{this.St(t,e,o)}),C.resolve()}removeOverlaysForBatchId(t,e,r){const s=this.Qr.get(r);return s!==void 0&&(s.forEach(o=>this.overlays=this.overlays.remove(o)),this.Qr.delete(r)),C.resolve()}getOverlaysForCollection(t,e,r){const s=be(),o=e.length+1,a=new M(e.child("")),c=this.overlays.getIteratorFrom(a);for(;c.hasNext();){const h=c.getNext().value,d=h.getKey();if(!e.isPrefixOf(d.path))break;d.path.length===o&&h.largestBatchId>r&&s.set(h.getKey(),h)}return C.resolve(s)}getOverlaysForCollectionGroup(t,e,r,s){let o=new et((d,m)=>d-m);const a=this.overlays.getIterator();for(;a.hasNext();){const d=a.getNext().value;if(d.getKey().getCollectionGroup()===e&&d.largestBatchId>r){let m=o.get(d.largestBatchId);m===null&&(m=be(),o=o.insert(d.largestBatchId,m)),m.set(d.getKey(),d)}}const c=be(),h=o.getIterator();for(;h.hasNext()&&(h.getNext().value.forEach((d,m)=>c.set(d,m)),!(c.size()>=s)););return C.resolve(c)}St(t,e,r){const s=this.overlays.get(r.key);if(s!==null){const a=this.Qr.get(s.largestBatchId).delete(r.key);this.Qr.set(s.largestBatchId,a)}this.overlays=this.overlays.insert(r.key,new Lp(e,r));let o=this.Qr.get(e);o===void 0&&(o=q(),this.Qr.set(e,o)),this.Qr.set(e,o.add(r.key))}}/**
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
 */class Em{constructor(){this.sessionToken=gt.EMPTY_BYTE_STRING}getSessionToken(t){return C.resolve(this.sessionToken)}setSessionToken(t,e){return this.sessionToken=e,C.resolve()}}/**
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
 */class zi{constructor(){this.$r=new lt(ht.Ur),this.Kr=new lt(ht.Wr)}isEmpty(){return this.$r.isEmpty()}addReference(t,e){const r=new ht(t,e);this.$r=this.$r.add(r),this.Kr=this.Kr.add(r)}Gr(t,e){t.forEach(r=>this.addReference(r,e))}removeReference(t,e){this.zr(new ht(t,e))}jr(t,e){t.forEach(r=>this.removeReference(r,e))}Hr(t){const e=new M(new rt([])),r=new ht(e,t),s=new ht(e,t+1),o=[];return this.Kr.forEachInRange([r,s],a=>{this.zr(a),o.push(a.key)}),o}Jr(){this.$r.forEach(t=>this.zr(t))}zr(t){this.$r=this.$r.delete(t),this.Kr=this.Kr.delete(t)}Yr(t){const e=new M(new rt([])),r=new ht(e,t),s=new ht(e,t+1);let o=q();return this.Kr.forEachInRange([r,s],a=>{o=o.add(a.key)}),o}containsKey(t){const e=new ht(t,0),r=this.$r.firstAfterOrEqual(e);return r!==null&&t.isEqual(r.key)}}class ht{constructor(t,e){this.key=t,this.Zr=e}static Ur(t,e){return M.comparator(t.key,e.key)||j(t.Zr,e.Zr)}static Wr(t,e){return j(t.Zr,e.Zr)||M.comparator(t.key,e.key)}}/**
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
 */class Tm{constructor(t,e){this.indexManager=t,this.referenceDelegate=e,this.mutationQueue=[],this.nr=1,this.Xr=new lt(ht.Ur)}checkEmpty(t){return C.resolve(this.mutationQueue.length===0)}addMutationBatch(t,e,r,s){const o=this.nr;this.nr++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const a=new Mp(o,e,r,s);this.mutationQueue.push(a);for(const c of s)this.Xr=this.Xr.add(new ht(c.key,o)),this.indexManager.addToCollectionParentIndex(t,c.key.path.popLast());return C.resolve(a)}lookupMutationBatch(t,e){return C.resolve(this.ei(e))}getNextMutationBatchAfterBatchId(t,e){const r=e+1,s=this.ti(r),o=s<0?0:s;return C.resolve(this.mutationQueue.length>o?this.mutationQueue[o]:null)}getHighestUnacknowledgedBatchId(){return C.resolve(this.mutationQueue.length===0?xi:this.nr-1)}getAllMutationBatches(t){return C.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(t,e){const r=new ht(e,0),s=new ht(e,Number.POSITIVE_INFINITY),o=[];return this.Xr.forEachInRange([r,s],a=>{const c=this.ei(a.Zr);o.push(c)}),C.resolve(o)}getAllMutationBatchesAffectingDocumentKeys(t,e){let r=new lt(j);return e.forEach(s=>{const o=new ht(s,0),a=new ht(s,Number.POSITIVE_INFINITY);this.Xr.forEachInRange([o,a],c=>{r=r.add(c.Zr)})}),C.resolve(this.ni(r))}getAllMutationBatchesAffectingQuery(t,e){const r=e.path,s=r.length+1;let o=r;M.isDocumentKey(o)||(o=o.child(""));const a=new ht(new M(o),0);let c=new lt(j);return this.Xr.forEachWhile(h=>{const d=h.key.path;return!!r.isPrefixOf(d)&&(d.length===s&&(c=c.add(h.Zr)),!0)},a),C.resolve(this.ni(c))}ni(t){const e=[];return t.forEach(r=>{const s=this.ei(r);s!==null&&e.push(s)}),e}removeMutationBatch(t,e){X(this.ri(e.batchId,"removed")===0,55003),this.mutationQueue.shift();let r=this.Xr;return C.forEach(e.mutations,s=>{const o=new ht(s.key,e.batchId);return r=r.delete(o),this.referenceDelegate.markPotentiallyOrphaned(t,s.key)}).next(()=>{this.Xr=r})}sr(t){}containsKey(t,e){const r=new ht(e,0),s=this.Xr.firstAfterOrEqual(r);return C.resolve(e.isEqual(s&&s.key))}performConsistencyCheck(t){return this.mutationQueue.length,C.resolve()}ri(t,e){return this.ti(t)}ti(t){return this.mutationQueue.length===0?0:t-this.mutationQueue[0].batchId}ei(t){const e=this.ti(t);return e<0||e>=this.mutationQueue.length?null:this.mutationQueue[e]}}/**
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
 */class vm{constructor(t){this.ii=t,this.docs=function(){return new et(M.comparator)}(),this.size=0}setIndexManager(t){this.indexManager=t}addEntry(t,e){const r=e.key,s=this.docs.get(r),o=s?s.size:0,a=this.ii(e);return this.docs=this.docs.insert(r,{document:e.mutableCopy(),size:a}),this.size+=a-o,this.indexManager.addToCollectionParentIndex(t,r.path.popLast())}removeEntry(t){const e=this.docs.get(t);e&&(this.docs=this.docs.remove(t),this.size-=e.size)}getEntry(t,e){const r=this.docs.get(e);return C.resolve(r?r.document.mutableCopy():wt.newInvalidDocument(e))}getEntries(t,e){let r=Zt();return e.forEach(s=>{const o=this.docs.get(s);r=r.insert(s,o?o.document.mutableCopy():wt.newInvalidDocument(s))}),C.resolve(r)}getDocumentsMatchingQuery(t,e,r,s){let o=Zt();const a=e.path,c=new M(a.child("__id-9223372036854775808__")),h=this.docs.getIteratorFrom(c);for(;h.hasNext();){const{key:d,value:{document:m}}=h.getNext();if(!a.isPrefixOf(d.path))break;d.path.length>a.length+1||Wf(Qf(m),r)<=0||(s.has(m.key)||Yr(e,m))&&(o=o.insert(m.key,m.mutableCopy()))}return C.resolve(o)}getAllFromCollectionGroup(t,e,r,s){L(9500)}si(t,e){return C.forEach(this.docs,r=>e(r))}newChangeBuffer(t){return new Im(this)}getSize(t){return C.resolve(this.size)}}class Im extends pm{constructor(t){super(),this.Br=t}applyChanges(t){const e=[];return this.changes.forEach((r,s)=>{s.isValidDocument()?e.push(this.Br.addEntry(t,s)):this.Br.removeEntry(r)}),C.waitFor(e)}getFromCache(t,e){return this.Br.getEntry(t,e)}getAllFromCache(t,e){return this.Br.getEntries(t,e)}}/**
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
 */class wm{constructor(t){this.persistence=t,this.oi=new Oe(e=>Li(e),Fi),this.lastRemoteSnapshotVersion=F.min(),this.highestTargetId=0,this._i=0,this.ai=new zi,this.targetCount=0,this.ui=rn.cr()}forEachTarget(t,e){return this.oi.forEach((r,s)=>e(s)),C.resolve()}getLastRemoteSnapshotVersion(t){return C.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(t){return C.resolve(this._i)}allocateTargetId(t){return this.highestTargetId=this.ui.next(),C.resolve(this.highestTargetId)}setTargetsMetadata(t,e,r){return r&&(this.lastRemoteSnapshotVersion=r),e>this._i&&(this._i=e),C.resolve()}Tr(t){this.oi.set(t.target,t);const e=t.targetId;e>this.highestTargetId&&(this.ui=new rn(e),this.highestTargetId=e),t.sequenceNumber>this._i&&(this._i=t.sequenceNumber)}addTargetData(t,e){return this.Tr(e),this.targetCount+=1,C.resolve()}updateTargetData(t,e){return this.Tr(e),C.resolve()}removeTargetData(t,e){return this.oi.delete(e.target),this.ai.Hr(e.targetId),this.targetCount-=1,C.resolve()}removeTargets(t,e,r){let s=0;const o=[];return this.oi.forEach((a,c)=>{c.sequenceNumber<=e&&r.get(c.targetId)===null&&(this.oi.delete(a),o.push(this.removeMatchingKeysForTargetId(t,c.targetId)),s++)}),C.waitFor(o).next(()=>s)}getTargetCount(t){return C.resolve(this.targetCount)}getTargetData(t,e){const r=this.oi.get(e)||null;return C.resolve(r)}addMatchingKeys(t,e,r){return this.ai.Gr(e,r),C.resolve()}removeMatchingKeys(t,e,r){this.ai.jr(e,r);const s=this.persistence.referenceDelegate,o=[];return s&&e.forEach(a=>{o.push(s.markPotentiallyOrphaned(t,a))}),C.waitFor(o)}removeMatchingKeysForTargetId(t,e){return this.ai.Hr(e),C.resolve()}getMatchingKeysForTargetId(t,e){const r=this.ai.Yr(e);return C.resolve(r)}containsKey(t,e){return C.resolve(this.ai.containsKey(e))}}/**
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
 */class Zc{constructor(t,e){this.ci={},this.overlays={},this.li=new Gr(0),this.hi=!1,this.hi=!0,this.Pi=new Em,this.referenceDelegate=t(this),this.Ti=new wm(this),this.indexManager=new am,this.remoteDocumentCache=function(s){return new vm(s)}(r=>this.referenceDelegate.Ii(r)),this.serializer=new im(e),this.Ei=new _m(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.hi=!1,Promise.resolve()}get started(){return this.hi}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(t){return this.indexManager}getDocumentOverlayCache(t){let e=this.overlays[t.toKey()];return e||(e=new ym,this.overlays[t.toKey()]=e),e}getMutationQueue(t,e){let r=this.ci[t.toKey()];return r||(r=new Tm(e,this.referenceDelegate),this.ci[t.toKey()]=r),r}getGlobalsCache(){return this.Pi}getTargetCache(){return this.Ti}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Ei}runTransaction(t,e,r){N("MemoryPersistence","Starting transaction:",t);const s=new Am(this.li.next());return this.referenceDelegate.di(),r(s).next(o=>this.referenceDelegate.Ai(s).next(()=>o)).toPromise().then(o=>(s.raiseOnCommittedEvent(),o))}Ri(t,e){return C.or(Object.values(this.ci).map(r=>()=>r.containsKey(t,e)))}}class Am extends Yf{constructor(t){super(),this.currentSequenceNumber=t}}class Hi{constructor(t){this.persistence=t,this.Vi=new zi,this.mi=null}static fi(t){return new Hi(t)}get gi(){if(this.mi)return this.mi;throw L(60996)}addReference(t,e,r){return this.Vi.addReference(r,e),this.gi.delete(r.toString()),C.resolve()}removeReference(t,e,r){return this.Vi.removeReference(r,e),this.gi.add(r.toString()),C.resolve()}markPotentiallyOrphaned(t,e){return this.gi.add(e.toString()),C.resolve()}removeTarget(t,e){this.Vi.Hr(e.targetId).forEach(s=>this.gi.add(s.toString()));const r=this.persistence.getTargetCache();return r.getMatchingKeysForTargetId(t,e.targetId).next(s=>{s.forEach(o=>this.gi.add(o.toString()))}).next(()=>r.removeTargetData(t,e))}di(){this.mi=new Set}Ai(t){const e=this.persistence.getRemoteDocumentCache().newChangeBuffer();return C.forEach(this.gi,r=>{const s=M.fromPath(r);return this.pi(t,s).next(o=>{o||e.removeEntry(s,F.min())})}).next(()=>(this.mi=null,e.apply(t)))}updateLimboDocument(t,e){return this.pi(t,e).next(r=>{r?this.gi.delete(e.toString()):this.gi.add(e.toString())})}Ii(t){return 0}pi(t,e){return C.or([()=>C.resolve(this.Vi.containsKey(e)),()=>this.persistence.getTargetCache().containsKey(t,e),()=>this.persistence.Ri(t,e)])}}class Ur{constructor(t,e){this.persistence=t,this.yi=new Oe(r=>tp(r.path),(r,s)=>r.isEqual(s)),this.garbageCollector=fm(this,e)}static fi(t,e){return new Ur(t,e)}di(){}Ai(t){return C.resolve()}forEachTarget(t,e){return this.persistence.getTargetCache().forEachTarget(t,e)}pr(t){const e=this.br(t);return this.persistence.getTargetCache().getTargetCount(t).next(r=>e.next(s=>r+s))}br(t){let e=0;return this.yr(t,r=>{e++}).next(()=>e)}yr(t,e){return C.forEach(this.yi,(r,s)=>this.Dr(t,r,s).next(o=>o?C.resolve():e(s)))}removeTargets(t,e,r){return this.persistence.getTargetCache().removeTargets(t,e,r)}removeOrphanedDocuments(t,e){let r=0;const s=this.persistence.getRemoteDocumentCache(),o=s.newChangeBuffer();return s.si(t,a=>this.Dr(t,a,e).next(c=>{c||(r++,o.removeEntry(a,F.min()))})).next(()=>o.apply(t)).next(()=>r)}markPotentiallyOrphaned(t,e){return this.yi.set(e,t.currentSequenceNumber),C.resolve()}removeTarget(t,e){const r=e.withSequenceNumber(t.currentSequenceNumber);return this.persistence.getTargetCache().updateTargetData(t,r)}addReference(t,e,r){return this.yi.set(r,t.currentSequenceNumber),C.resolve()}removeReference(t,e,r){return this.yi.set(r,t.currentSequenceNumber),C.resolve()}updateLimboDocument(t,e){return this.yi.set(e,t.currentSequenceNumber),C.resolve()}Ii(t){let e=t.key.toString().length;return t.isFoundDocument()&&(e+=Rr(t.data.value)),e}Dr(t,e,r){return C.or([()=>this.persistence.Ri(t,e),()=>this.persistence.getTargetCache().containsKey(t,e),()=>{const s=this.yi.get(e);return C.resolve(s!==void 0&&s>r)}])}getCacheSize(t){return this.persistence.getRemoteDocumentCache().getSize(t)}}/**
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
 */class Gi{constructor(t,e,r,s){this.targetId=t,this.fromCache=e,this.ds=r,this.As=s}static Rs(t,e){let r=q(),s=q();for(const o of e.docChanges)switch(o.type){case 0:r=r.add(o.doc.key);break;case 1:s=s.add(o.doc.key)}return new Gi(t,e.fromCache,r,s)}}/**
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
 */class Rm{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(t){this._documentReadCount+=t}}/**
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
 */class bm{constructor(){this.Vs=!1,this.fs=!1,this.gs=100,this.ps=function(){return Td()?8:Jf(yd())>0?6:4}()}initialize(t,e){this.ys=t,this.indexManager=e,this.Vs=!0}getDocumentsMatchingQuery(t,e,r,s){const o={result:null};return this.ws(t,e).next(a=>{o.result=a}).next(()=>{if(!o.result)return this.bs(t,e,s,r).next(a=>{o.result=a})}).next(()=>{if(o.result)return;const a=new Rm;return this.Ss(t,e,a).next(c=>{if(o.result=c,this.fs)return this.Ds(t,e,a,c.size)})}).next(()=>o.result)}Ds(t,e,r,s){return r.documentReadCount<this.gs?($e()<=K.DEBUG&&N("QueryEngine","SDK will not create cache indexes for query:",qe(e),"since it only creates cache indexes for collection contains","more than or equal to",this.gs,"documents"),C.resolve()):($e()<=K.DEBUG&&N("QueryEngine","Query:",qe(e),"scans",r.documentReadCount,"local documents and returns",s,"documents as results."),r.documentReadCount>this.ps*s?($e()<=K.DEBUG&&N("QueryEngine","The SDK decides to create cache indexes for query:",qe(e),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(t,Bt(e))):C.resolve())}ws(t,e){if(tu(e))return C.resolve(null);let r=Bt(e);return this.indexManager.getIndexType(t,r).next(s=>s===0?null:(e.limit!==null&&s===1&&(e=mi(e,null,"F"),r=Bt(e)),this.indexManager.getDocumentsMatchingTarget(t,r).next(o=>{const a=q(...o);return this.ys.getDocuments(t,a).next(c=>this.indexManager.getMinOffset(t,r).next(h=>{const d=this.vs(e,c);return this.Cs(e,d,a,h.readTime)?this.ws(t,mi(e,null,"F")):this.Fs(t,d,e,h)}))})))}bs(t,e,r,s){return tu(e)||s.isEqual(F.min())?C.resolve(null):this.ys.getDocuments(t,r).next(o=>{const a=this.vs(e,o);return this.Cs(e,a,r,s)?C.resolve(null):($e()<=K.DEBUG&&N("QueryEngine","Re-using previous result from %s to execute query: %s",s.toString(),qe(e)),this.Fs(t,a,e,Kf(s,Bn)).next(c=>c))})}vs(t,e){let r=new lt(Vc(t));return e.forEach((s,o)=>{Yr(t,o)&&(r=r.add(o))}),r}Cs(t,e,r,s){if(t.limit===null)return!1;if(r.size!==e.size)return!0;const o=t.limitType==="F"?e.last():e.first();return!!o&&(o.hasPendingWrites||o.version.compareTo(s)>0)}Ss(t,e,r){return $e()<=K.DEBUG&&N("QueryEngine","Using full collection scan to execute query:",qe(e)),this.ys.getDocumentsMatchingQuery(t,e,fe.min(),r)}Fs(t,e,r,s){return this.ys.getDocumentsMatchingQuery(t,r,s).next(o=>(e.forEach(a=>{o=o.insert(a.key,a)}),o))}}/**
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
 */const Ki="LocalStore",Cm=3e8;class Sm{constructor(t,e,r,s){this.persistence=t,this.Ms=e,this.serializer=s,this.xs=new et(j),this.Os=new Oe(o=>Li(o),Fi),this.Ns=new Map,this.Bs=t.getRemoteDocumentCache(),this.Ti=t.getTargetCache(),this.Ei=t.getBundleCache(),this.Ls(r)}Ls(t){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(t),this.indexManager=this.persistence.getIndexManager(t),this.mutationQueue=this.persistence.getMutationQueue(t,this.indexManager),this.localDocuments=new gm(this.Bs,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.Bs.setIndexManager(this.indexManager),this.Ms.initialize(this.localDocuments,this.indexManager)}collectGarbage(t){return this.persistence.runTransaction("Collect garbage","readwrite-primary",e=>t.collect(e,this.xs))}}function Pm(n,t,e,r){return new Sm(n,t,e,r)}async function tl(n,t){const e=U(n);return await e.persistence.runTransaction("Handle user change","readonly",r=>{let s;return e.mutationQueue.getAllMutationBatches(r).next(o=>(s=o,e.Ls(t),e.mutationQueue.getAllMutationBatches(r))).next(o=>{const a=[],c=[];let h=q();for(const d of s){a.push(d.batchId);for(const m of d.mutations)h=h.add(m.key)}for(const d of o){c.push(d.batchId);for(const m of d.mutations)h=h.add(m.key)}return e.localDocuments.getDocuments(r,h).next(d=>({ks:d,removedBatchIds:a,addedBatchIds:c}))})})}function Vm(n,t){const e=U(n);return e.persistence.runTransaction("Acknowledge batch","readwrite-primary",r=>{const s=t.batch.keys(),o=e.Bs.newChangeBuffer({trackRemovals:!0});return function(c,h,d,m){const E=d.batch,I=E.keys();let b=C.resolve();return I.forEach(V=>{b=b.next(()=>m.getEntry(h,V)).next(x=>{const P=d.docVersions.get(V);X(P!==null,48541),x.version.compareTo(P)<0&&(E.applyToRemoteDocument(x,d),x.isValidDocument()&&(x.setReadTime(d.commitVersion),m.addEntry(x)))})}),b.next(()=>c.mutationQueue.removeMutationBatch(h,E))}(e,r,t,o).next(()=>o.apply(r)).next(()=>e.mutationQueue.performConsistencyCheck(r)).next(()=>e.documentOverlayCache.removeOverlaysForBatchId(r,s,t.batch.batchId)).next(()=>e.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(r,function(c){let h=q();for(let d=0;d<c.mutationResults.length;++d)c.mutationResults[d].transformResults.length>0&&(h=h.add(c.batch.mutations[d].key));return h}(t))).next(()=>e.localDocuments.getDocuments(r,s))})}function el(n){const t=U(n);return t.persistence.runTransaction("Get last remote snapshot version","readonly",e=>t.Ti.getLastRemoteSnapshotVersion(e))}function Dm(n,t){const e=U(n),r=t.snapshotVersion;let s=e.xs;return e.persistence.runTransaction("Apply remote event","readwrite-primary",o=>{const a=e.Bs.newChangeBuffer({trackRemovals:!0});s=e.xs;const c=[];t.targetChanges.forEach((m,E)=>{const I=s.get(E);if(!I)return;c.push(e.Ti.removeMatchingKeys(o,m.removedDocuments,E).next(()=>e.Ti.addMatchingKeys(o,m.addedDocuments,E)));let b=I.withSequenceNumber(o.currentSequenceNumber);t.targetMismatches.get(E)!==null?b=b.withResumeToken(gt.EMPTY_BYTE_STRING,F.min()).withLastLimboFreeSnapshotVersion(F.min()):m.resumeToken.approximateByteSize()>0&&(b=b.withResumeToken(m.resumeToken,r)),s=s.insert(E,b),function(x,P,z){return x.resumeToken.approximateByteSize()===0||P.snapshotVersion.toMicroseconds()-x.snapshotVersion.toMicroseconds()>=Cm?!0:z.addedDocuments.size+z.modifiedDocuments.size+z.removedDocuments.size>0}(I,b,m)&&c.push(e.Ti.updateTargetData(o,b))});let h=Zt(),d=q();if(t.documentUpdates.forEach(m=>{t.resolvedLimboDocuments.has(m)&&c.push(e.persistence.referenceDelegate.updateLimboDocument(o,m))}),c.push(km(o,a,t.documentUpdates).next(m=>{h=m.qs,d=m.Qs})),!r.isEqual(F.min())){const m=e.Ti.getLastRemoteSnapshotVersion(o).next(E=>e.Ti.setTargetsMetadata(o,o.currentSequenceNumber,r));c.push(m)}return C.waitFor(c).next(()=>a.apply(o)).next(()=>e.localDocuments.getLocalViewOfDocuments(o,h,d)).next(()=>h)}).then(o=>(e.xs=s,o))}function km(n,t,e){let r=q(),s=q();return e.forEach(o=>r=r.add(o)),t.getEntries(n,r).next(o=>{let a=Zt();return e.forEach((c,h)=>{const d=o.get(c);h.isFoundDocument()!==d.isFoundDocument()&&(s=s.add(c)),h.isNoDocument()&&h.version.isEqual(F.min())?(t.removeEntry(c,h.readTime),a=a.insert(c,h)):!d.isValidDocument()||h.version.compareTo(d.version)>0||h.version.compareTo(d.version)===0&&d.hasPendingWrites?(t.addEntry(h),a=a.insert(c,h)):N(Ki,"Ignoring outdated watch update for ",c,". Current version:",d.version," Watch version:",h.version)}),{qs:a,Qs:s}})}function Nm(n,t){const e=U(n);return e.persistence.runTransaction("Get next mutation batch","readonly",r=>(t===void 0&&(t=xi),e.mutationQueue.getNextMutationBatchAfterBatchId(r,t)))}function xm(n,t){const e=U(n);return e.persistence.runTransaction("Allocate target","readwrite",r=>{let s;return e.Ti.getTargetData(r,t).next(o=>o?(s=o,C.resolve(s)):e.Ti.allocateTargetId(r).next(a=>(s=new ae(t,a,"TargetPurposeListen",r.currentSequenceNumber),e.Ti.addTargetData(r,s).next(()=>s))))}).then(r=>{const s=e.xs.get(r.targetId);return(s===null||r.snapshotVersion.compareTo(s.snapshotVersion)>0)&&(e.xs=e.xs.insert(r.targetId,r),e.Os.set(t,r.targetId)),r})}async function Ti(n,t,e){const r=U(n),s=r.xs.get(t),o=e?"readwrite":"readwrite-primary";try{e||await r.persistence.runTransaction("Release target",o,a=>r.persistence.referenceDelegate.removeTarget(a,s))}catch(a){if(!cn(a))throw a;N(Ki,`Failed to update sequence numbers for target ${t}: ${a}`)}r.xs=r.xs.remove(t),r.Os.delete(s.target)}function fu(n,t,e){const r=U(n);let s=F.min(),o=q();return r.persistence.runTransaction("Execute query","readwrite",a=>function(h,d,m){const E=U(h),I=E.Os.get(m);return I!==void 0?C.resolve(E.xs.get(I)):E.Ti.getTargetData(d,m)}(r,a,Bt(t)).next(c=>{if(c)return s=c.lastLimboFreeSnapshotVersion,r.Ti.getMatchingKeysForTargetId(a,c.targetId).next(h=>{o=h})}).next(()=>r.Ms.getDocumentsMatchingQuery(a,t,e?s:F.min(),e?o:q())).next(c=>(Om(r,Tp(t),c),{documents:c,$s:o})))}function Om(n,t,e){let r=n.Ns.get(t)||F.min();e.forEach((s,o)=>{o.readTime.compareTo(r)>0&&(r=o.readTime)}),n.Ns.set(t,r)}class pu{constructor(){this.activeTargetIds=bp()}js(t){this.activeTargetIds=this.activeTargetIds.add(t)}Hs(t){this.activeTargetIds=this.activeTargetIds.delete(t)}zs(){const t={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(t)}}class Mm{constructor(){this.xo=new pu,this.Oo={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(t){}updateMutationState(t,e,r){}addLocalQueryTarget(t,e=!0){return e&&this.xo.js(t),this.Oo[t]||"not-current"}updateQueryState(t,e,r){this.Oo[t]=e}removeLocalQueryTarget(t){this.xo.Hs(t)}isLocalQueryTarget(t){return this.xo.activeTargetIds.has(t)}clearQueryState(t){delete this.Oo[t]}getAllActiveQueryTargets(){return this.xo.activeTargetIds}isActiveQueryTarget(t){return this.xo.activeTargetIds.has(t)}start(){return this.xo=new pu,Promise.resolve()}handleUserChange(t,e,r){}setOnlineState(t){}shutdown(){}writeSequenceNumber(t){}notifyBundleLoaded(t){}}/**
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
 */class Lm{No(t){}shutdown(){}}/**
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
 */const mu="ConnectivityMonitor";class gu{constructor(){this.Bo=()=>this.Lo(),this.ko=()=>this.qo(),this.Qo=[],this.$o()}No(t){this.Qo.push(t)}shutdown(){window.removeEventListener("online",this.Bo),window.removeEventListener("offline",this.ko)}$o(){window.addEventListener("online",this.Bo),window.addEventListener("offline",this.ko)}Lo(){N(mu,"Network connectivity changed: AVAILABLE");for(const t of this.Qo)t(0)}qo(){N(mu,"Network connectivity changed: UNAVAILABLE");for(const t of this.Qo)t(1)}static C(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
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
 */let wr=null;function vi(){return wr===null?wr=function(){return 268435456+Math.round(2147483648*Math.random())}():wr++,"0x"+wr.toString(16)}/**
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
 */const js="RestConnection",Fm={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};class Um{get Uo(){return!1}constructor(t){this.databaseInfo=t,this.databaseId=t.databaseId;const e=t.ssl?"https":"http",r=encodeURIComponent(this.databaseId.projectId),s=encodeURIComponent(this.databaseId.database);this.Ko=e+"://"+t.host,this.Wo=`projects/${r}/databases/${s}`,this.Go=this.databaseId.database===kr?`project_id=${r}`:`project_id=${r}&database_id=${s}`}zo(t,e,r,s,o){const a=vi(),c=this.jo(t,e.toUriEncodedString());N(js,`Sending RPC '${t}' ${a}:`,c,r);const h={"google-cloud-resource-prefix":this.Wo,"x-goog-request-params":this.Go};this.Ho(h,s,o);const{host:d}=new URL(c),m=Si(d);return this.Jo(t,c,h,r,m).then(E=>(N(js,`Received RPC '${t}' ${a}: `,E),E),E=>{throw Je(js,`RPC '${t}' ${a} failed with error: `,E,"url: ",c,"request:",r),E})}Yo(t,e,r,s,o,a){return this.zo(t,e,r,s,o)}Ho(t,e,r){t["X-Goog-Api-Client"]=function(){return"gl-js/ fire/"+an}(),t["Content-Type"]="text/plain",this.databaseInfo.appId&&(t["X-Firebase-GMPID"]=this.databaseInfo.appId),e&&e.headers.forEach((s,o)=>t[o]=s),r&&r.headers.forEach((s,o)=>t[o]=s)}jo(t,e){const r=Fm[t];return`${this.Ko}/v1/${e}:${r}`}terminate(){}}/**
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
 */class Bm{constructor(t){this.Zo=t.Zo,this.Xo=t.Xo}e_(t){this.t_=t}n_(t){this.r_=t}i_(t){this.s_=t}onMessage(t){this.o_=t}close(){this.Xo()}send(t){this.Zo(t)}__(){this.t_()}a_(){this.r_()}u_(t){this.s_(t)}c_(t){this.o_(t)}}/**
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
 */const vt="WebChannelConnection";class jm extends Um{constructor(t){super(t),this.l_=[],this.forceLongPolling=t.forceLongPolling,this.autoDetectLongPolling=t.autoDetectLongPolling,this.useFetchStreams=t.useFetchStreams,this.longPollingOptions=t.longPollingOptions}Jo(t,e,r,s,o){const a=vi();return new Promise((c,h)=>{const d=new sc;d.setWithCredentials(!0),d.listenOnce(ic.COMPLETE,()=>{try{switch(d.getLastErrorCode()){case Ar.NO_ERROR:const E=d.getResponseJson();N(vt,`XHR for RPC '${t}' ${a} received:`,JSON.stringify(E)),c(E);break;case Ar.TIMEOUT:N(vt,`RPC '${t}' ${a} timed out`),h(new O(S.DEADLINE_EXCEEDED,"Request time out"));break;case Ar.HTTP_ERROR:const I=d.getStatus();if(N(vt,`RPC '${t}' ${a} failed with status:`,I,"response text:",d.getResponseText()),I>0){let b=d.getResponseJson();Array.isArray(b)&&(b=b[0]);const V=b==null?void 0:b.error;if(V&&V.status&&V.message){const x=function(z){const B=z.toLowerCase().replace(/_/g,"-");return Object.values(S).indexOf(B)>=0?B:S.UNKNOWN}(V.status);h(new O(x,V.message))}else h(new O(S.UNKNOWN,"Server responded with status "+d.getStatus()))}else h(new O(S.UNAVAILABLE,"Connection failed."));break;default:L(9055,{h_:t,streamId:a,P_:d.getLastErrorCode(),T_:d.getLastError()})}}finally{N(vt,`RPC '${t}' ${a} completed.`)}});const m=JSON.stringify(s);N(vt,`RPC '${t}' ${a} sending request:`,s),d.send(e,"POST",m,r,15)})}I_(t,e,r){const s=vi(),o=[this.Ko,"/","google.firestore.v1.Firestore","/",t,"/channel"],a=uc(),c=ac(),h={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},d=this.longPollingOptions.timeoutSeconds;d!==void 0&&(h.longPollingTimeout=Math.round(1e3*d)),this.useFetchStreams&&(h.useFetchStreams=!0),this.Ho(h.initMessageHeaders,e,r),h.encodeInitMessageHeaders=!0;const m=o.join("");N(vt,`Creating RPC '${t}' stream ${s}: ${m}`,h);const E=a.createWebChannel(m,h);this.E_(E);let I=!1,b=!1;const V=new Bm({Zo:P=>{b?N(vt,`Not sending because RPC '${t}' stream ${s} is closed:`,P):(I||(N(vt,`Opening RPC '${t}' stream ${s} transport.`),E.open(),I=!0),N(vt,`RPC '${t}' stream ${s} sending:`,P),E.send(P))},Xo:()=>E.close()}),x=(P,z,B)=>{P.listen(z,$=>{try{B($)}catch(Z){setTimeout(()=>{throw Z},0)}})};return x(E,Pn.EventType.OPEN,()=>{b||(N(vt,`RPC '${t}' stream ${s} transport opened.`),V.__())}),x(E,Pn.EventType.CLOSE,()=>{b||(b=!0,N(vt,`RPC '${t}' stream ${s} transport closed`),V.u_(),this.d_(E))}),x(E,Pn.EventType.ERROR,P=>{b||(b=!0,Je(vt,`RPC '${t}' stream ${s} transport errored. Name:`,P.name,"Message:",P.message),V.u_(new O(S.UNAVAILABLE,"The operation could not be completed")))}),x(E,Pn.EventType.MESSAGE,P=>{var z;if(!b){const B=P.data[0];X(!!B,16349);const $=B,Z=($==null?void 0:$.error)||((z=$[0])===null||z===void 0?void 0:z.error);if(Z){N(vt,`RPC '${t}' stream ${s} received error:`,Z);const Nt=Z.status;let it=function(_){const y=at[_];if(y!==void 0)return $c(y)}(Nt),v=Z.message;it===void 0&&(it=S.INTERNAL,v="Unknown error status: "+Nt+" with message "+Z.message),b=!0,V.u_(new O(it,v)),E.close()}else N(vt,`RPC '${t}' stream ${s} received:`,B),V.c_(B)}}),x(c,oc.STAT_EVENT,P=>{P.stat===ci.PROXY?N(vt,`RPC '${t}' stream ${s} detected buffering proxy`):P.stat===ci.NOPROXY&&N(vt,`RPC '${t}' stream ${s} detected no buffering proxy`)}),setTimeout(()=>{V.a_()},0),V}terminate(){this.l_.forEach(t=>t.close()),this.l_=[]}E_(t){this.l_.push(t)}d_(t){this.l_=this.l_.filter(e=>e===t)}}function $s(){return typeof document<"u"?document:null}/**
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
 */function ns(n){return new Hp(n,!0)}/**
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
 */class nl{constructor(t,e,r=1e3,s=1.5,o=6e4){this.xi=t,this.timerId=e,this.A_=r,this.R_=s,this.V_=o,this.m_=0,this.f_=null,this.g_=Date.now(),this.reset()}reset(){this.m_=0}p_(){this.m_=this.V_}y_(t){this.cancel();const e=Math.floor(this.m_+this.w_()),r=Math.max(0,Date.now()-this.g_),s=Math.max(0,e-r);s>0&&N("ExponentialBackoff",`Backing off for ${s} ms (base delay: ${this.m_} ms, delay with jitter: ${e} ms, last attempt: ${r} ms ago)`),this.f_=this.xi.enqueueAfterDelay(this.timerId,s,()=>(this.g_=Date.now(),t())),this.m_*=this.R_,this.m_<this.A_&&(this.m_=this.A_),this.m_>this.V_&&(this.m_=this.V_)}b_(){this.f_!==null&&(this.f_.skipDelay(),this.f_=null)}cancel(){this.f_!==null&&(this.f_.cancel(),this.f_=null)}w_(){return(Math.random()-.5)*this.m_}}/**
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
 */const _u="PersistentStream";class rl{constructor(t,e,r,s,o,a,c,h){this.xi=t,this.S_=r,this.D_=s,this.connection=o,this.authCredentialsProvider=a,this.appCheckCredentialsProvider=c,this.listener=h,this.state=0,this.v_=0,this.C_=null,this.F_=null,this.stream=null,this.M_=0,this.x_=new nl(t,e)}O_(){return this.state===1||this.state===5||this.N_()}N_(){return this.state===2||this.state===3}start(){this.M_=0,this.state!==4?this.auth():this.B_()}async stop(){this.O_()&&await this.close(0)}L_(){this.state=0,this.x_.reset()}k_(){this.N_()&&this.C_===null&&(this.C_=this.xi.enqueueAfterDelay(this.S_,6e4,()=>this.q_()))}Q_(t){this.U_(),this.stream.send(t)}async q_(){if(this.N_())return this.close(0)}U_(){this.C_&&(this.C_.cancel(),this.C_=null)}K_(){this.F_&&(this.F_.cancel(),this.F_=null)}async close(t,e){this.U_(),this.K_(),this.x_.cancel(),this.v_++,t!==4?this.x_.reset():e&&e.code===S.RESOURCE_EXHAUSTED?(Jt(e.toString()),Jt("Using maximum backoff delay to prevent overloading the backend."),this.x_.p_()):e&&e.code===S.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.W_(),this.stream.close(),this.stream=null),this.state=t,await this.listener.i_(e)}W_(){}auth(){this.state=1;const t=this.G_(this.v_),e=this.v_;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([r,s])=>{this.v_===e&&this.z_(r,s)},r=>{t(()=>{const s=new O(S.UNKNOWN,"Fetching auth token failed: "+r.message);return this.j_(s)})})}z_(t,e){const r=this.G_(this.v_);this.stream=this.H_(t,e),this.stream.e_(()=>{r(()=>this.listener.e_())}),this.stream.n_(()=>{r(()=>(this.state=2,this.F_=this.xi.enqueueAfterDelay(this.D_,1e4,()=>(this.N_()&&(this.state=3),Promise.resolve())),this.listener.n_()))}),this.stream.i_(s=>{r(()=>this.j_(s))}),this.stream.onMessage(s=>{r(()=>++this.M_==1?this.J_(s):this.onNext(s))})}B_(){this.state=5,this.x_.y_(async()=>{this.state=0,this.start()})}j_(t){return N(_u,`close with error: ${t}`),this.stream=null,this.close(4,t)}G_(t){return e=>{this.xi.enqueueAndForget(()=>this.v_===t?e():(N(_u,"stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class $m extends rl{constructor(t,e,r,s,o,a){super(t,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",e,r,s,a),this.serializer=o}H_(t,e){return this.connection.I_("Listen",t,e)}J_(t){return this.onNext(t)}onNext(t){this.x_.reset();const e=Qp(this.serializer,t),r=function(o){if(!("targetChange"in o))return F.min();const a=o.targetChange;return a.targetIds&&a.targetIds.length?F.min():a.readTime?jt(a.readTime):F.min()}(t);return this.listener.Y_(e,r)}Z_(t){const e={};e.database=Ei(this.serializer),e.addTarget=function(o,a){let c;const h=a.target;if(c=pi(h)?{documents:Yp(o,h)}:{query:Jp(o,h).gt},c.targetId=a.targetId,a.resumeToken.approximateByteSize()>0){c.resumeToken=Hc(o,a.resumeToken);const d=gi(o,a.expectedCount);d!==null&&(c.expectedCount=d)}else if(a.snapshotVersion.compareTo(F.min())>0){c.readTime=Fr(o,a.snapshotVersion.toTimestamp());const d=gi(o,a.expectedCount);d!==null&&(c.expectedCount=d)}return c}(this.serializer,t);const r=tm(this.serializer,t);r&&(e.labels=r),this.Q_(e)}X_(t){const e={};e.database=Ei(this.serializer),e.removeTarget=t,this.Q_(e)}}class qm extends rl{constructor(t,e,r,s,o,a){super(t,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",e,r,s,a),this.serializer=o}get ea(){return this.M_>0}start(){this.lastStreamToken=void 0,super.start()}W_(){this.ea&&this.ta([])}H_(t,e){return this.connection.I_("Write",t,e)}J_(t){return X(!!t.streamToken,31322),this.lastStreamToken=t.streamToken,X(!t.writeResults||t.writeResults.length===0,55816),this.listener.na()}onNext(t){X(!!t.streamToken,12678),this.lastStreamToken=t.streamToken,this.x_.reset();const e=Xp(t.writeResults,t.commitTime),r=jt(t.commitTime);return this.listener.ra(r,e)}ia(){const t={};t.database=Ei(this.serializer),this.Q_(t)}ta(t){const e={streamToken:this.lastStreamToken,writes:t.map(r=>Wp(this.serializer,r))};this.Q_(e)}}/**
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
 */class zm{}class Hm extends zm{constructor(t,e,r,s){super(),this.authCredentials=t,this.appCheckCredentials=e,this.connection=r,this.serializer=s,this.sa=!1}oa(){if(this.sa)throw new O(S.FAILED_PRECONDITION,"The client has already been terminated.")}zo(t,e,r,s){return this.oa(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([o,a])=>this.connection.zo(t,_i(e,r),s,o,a)).catch(o=>{throw o.name==="FirebaseError"?(o.code===S.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),o):new O(S.UNKNOWN,o.toString())})}Yo(t,e,r,s,o){return this.oa(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([a,c])=>this.connection.Yo(t,_i(e,r),s,a,c,o)).catch(a=>{throw a.name==="FirebaseError"?(a.code===S.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),a):new O(S.UNKNOWN,a.toString())})}terminate(){this.sa=!0,this.connection.terminate()}}class Gm{constructor(t,e){this.asyncQueue=t,this.onlineStateHandler=e,this.state="Unknown",this._a=0,this.aa=null,this.ua=!0}ca(){this._a===0&&(this.la("Unknown"),this.aa=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.aa=null,this.ha("Backend didn't respond within 10 seconds."),this.la("Offline"),Promise.resolve())))}Pa(t){this.state==="Online"?this.la("Unknown"):(this._a++,this._a>=1&&(this.Ta(),this.ha(`Connection failed 1 times. Most recent error: ${t.toString()}`),this.la("Offline")))}set(t){this.Ta(),this._a=0,t==="Online"&&(this.ua=!1),this.la(t)}la(t){t!==this.state&&(this.state=t,this.onlineStateHandler(t))}ha(t){const e=`Could not reach Cloud Firestore backend. ${t}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.ua?(Jt(e),this.ua=!1):N("OnlineStateTracker",e)}Ta(){this.aa!==null&&(this.aa.cancel(),this.aa=null)}}/**
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
 */const ke="RemoteStore";class Km{constructor(t,e,r,s,o){this.localStore=t,this.datastore=e,this.asyncQueue=r,this.remoteSyncer={},this.Ia=[],this.Ea=new Map,this.da=new Set,this.Aa=[],this.Ra=o,this.Ra.No(a=>{r.enqueueAndForget(async()=>{Le(this)&&(N(ke,"Restarting streams for network reachability change."),await async function(h){const d=U(h);d.da.add(4),await Yn(d),d.Va.set("Unknown"),d.da.delete(4),await rs(d)}(this))})}),this.Va=new Gm(r,s)}}async function rs(n){if(Le(n))for(const t of n.Aa)await t(!0)}async function Yn(n){for(const t of n.Aa)await t(!1)}function sl(n,t){const e=U(n);e.Ea.has(t.targetId)||(e.Ea.set(t.targetId,t),Yi(e)?Xi(e):ln(e).N_()&&Wi(e,t))}function Qi(n,t){const e=U(n),r=ln(e);e.Ea.delete(t),r.N_()&&il(e,t),e.Ea.size===0&&(r.N_()?r.k_():Le(e)&&e.Va.set("Unknown"))}function Wi(n,t){if(n.ma.Ke(t.targetId),t.resumeToken.approximateByteSize()>0||t.snapshotVersion.compareTo(F.min())>0){const e=n.remoteSyncer.getRemoteKeysForTarget(t.targetId).size;t=t.withExpectedCount(e)}ln(n).Z_(t)}function il(n,t){n.ma.Ke(t),ln(n).X_(t)}function Xi(n){n.ma=new jp({getRemoteKeysForTarget:t=>n.remoteSyncer.getRemoteKeysForTarget(t),Rt:t=>n.Ea.get(t)||null,Pt:()=>n.datastore.serializer.databaseId}),ln(n).start(),n.Va.ca()}function Yi(n){return Le(n)&&!ln(n).O_()&&n.Ea.size>0}function Le(n){return U(n).da.size===0}function ol(n){n.ma=void 0}async function Qm(n){n.Va.set("Online")}async function Wm(n){n.Ea.forEach((t,e)=>{Wi(n,t)})}async function Xm(n,t){ol(n),Yi(n)?(n.Va.Pa(t),Xi(n)):n.Va.set("Unknown")}async function Ym(n,t,e){if(n.Va.set("Online"),t instanceof zc&&t.state===2&&t.cause)try{await async function(s,o){const a=o.cause;for(const c of o.targetIds)s.Ea.has(c)&&(await s.remoteSyncer.rejectListen(c,a),s.Ea.delete(c),s.ma.removeTarget(c))}(n,t)}catch(r){N(ke,"Failed to remove targets %s: %s ",t.targetIds.join(","),r),await Br(n,r)}else if(t instanceof Sr?n.ma.Xe(t):t instanceof qc?n.ma.ot(t):n.ma.nt(t),!e.isEqual(F.min()))try{const r=await el(n.localStore);e.compareTo(r)>=0&&await function(o,a){const c=o.ma.It(a);return c.targetChanges.forEach((h,d)=>{if(h.resumeToken.approximateByteSize()>0){const m=o.Ea.get(d);m&&o.Ea.set(d,m.withResumeToken(h.resumeToken,a))}}),c.targetMismatches.forEach((h,d)=>{const m=o.Ea.get(h);if(!m)return;o.Ea.set(h,m.withResumeToken(gt.EMPTY_BYTE_STRING,m.snapshotVersion)),il(o,h);const E=new ae(m.target,h,d,m.sequenceNumber);Wi(o,E)}),o.remoteSyncer.applyRemoteEvent(c)}(n,e)}catch(r){N(ke,"Failed to raise snapshot:",r),await Br(n,r)}}async function Br(n,t,e){if(!cn(t))throw t;n.da.add(1),await Yn(n),n.Va.set("Offline"),e||(e=()=>el(n.localStore)),n.asyncQueue.enqueueRetryable(async()=>{N(ke,"Retrying IndexedDB access"),await e(),n.da.delete(1),await rs(n)})}function al(n,t){return t().catch(e=>Br(n,e,t))}async function ss(n){const t=U(n),e=_e(t);let r=t.Ia.length>0?t.Ia[t.Ia.length-1].batchId:xi;for(;Jm(t);)try{const s=await Nm(t.localStore,r);if(s===null){t.Ia.length===0&&e.k_();break}r=s.batchId,Zm(t,s)}catch(s){await Br(t,s)}ul(t)&&cl(t)}function Jm(n){return Le(n)&&n.Ia.length<10}function Zm(n,t){n.Ia.push(t);const e=_e(n);e.N_()&&e.ea&&e.ta(t.mutations)}function ul(n){return Le(n)&&!_e(n).O_()&&n.Ia.length>0}function cl(n){_e(n).start()}async function tg(n){_e(n).ia()}async function eg(n){const t=_e(n);for(const e of n.Ia)t.ta(e.mutations)}async function ng(n,t,e){const r=n.Ia.shift(),s=ji.from(r,t,e);await al(n,()=>n.remoteSyncer.applySuccessfulWrite(s)),await ss(n)}async function rg(n,t){t&&_e(n).ea&&await async function(r,s){if(function(a){return Up(a)&&a!==S.ABORTED}(s.code)){const o=r.Ia.shift();_e(r).L_(),await al(r,()=>r.remoteSyncer.rejectFailedWrite(o.batchId,s)),await ss(r)}}(n,t),ul(n)&&cl(n)}async function yu(n,t){const e=U(n);e.asyncQueue.verifyOperationInProgress(),N(ke,"RemoteStore received new credentials");const r=Le(e);e.da.add(3),await Yn(e),r&&e.Va.set("Unknown"),await e.remoteSyncer.handleCredentialChange(t),e.da.delete(3),await rs(e)}async function sg(n,t){const e=U(n);t?(e.da.delete(2),await rs(e)):t||(e.da.add(2),await Yn(e),e.Va.set("Unknown"))}function ln(n){return n.fa||(n.fa=function(e,r,s){const o=U(e);return o.oa(),new $m(r,o.connection,o.authCredentials,o.appCheckCredentials,o.serializer,s)}(n.datastore,n.asyncQueue,{e_:Qm.bind(null,n),n_:Wm.bind(null,n),i_:Xm.bind(null,n),Y_:Ym.bind(null,n)}),n.Aa.push(async t=>{t?(n.fa.L_(),Yi(n)?Xi(n):n.Va.set("Unknown")):(await n.fa.stop(),ol(n))})),n.fa}function _e(n){return n.ga||(n.ga=function(e,r,s){const o=U(e);return o.oa(),new qm(r,o.connection,o.authCredentials,o.appCheckCredentials,o.serializer,s)}(n.datastore,n.asyncQueue,{e_:()=>Promise.resolve(),n_:tg.bind(null,n),i_:rg.bind(null,n),na:eg.bind(null,n),ra:ng.bind(null,n)}),n.Aa.push(async t=>{t?(n.ga.L_(),await ss(n)):(await n.ga.stop(),n.Ia.length>0&&(N(ke,`Stopping write stream with ${n.Ia.length} pending writes`),n.Ia=[]))})),n.ga}/**
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
 */class Ji{constructor(t,e,r,s,o){this.asyncQueue=t,this.timerId=e,this.targetTimeMs=r,this.op=s,this.removalCallback=o,this.deferred=new he,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(a=>{})}get promise(){return this.deferred.promise}static createAndSchedule(t,e,r,s,o){const a=Date.now()+r,c=new Ji(t,e,a,s,o);return c.start(r),c}start(t){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),t)}skipDelay(){return this.handleDelayElapsed()}cancel(t){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new O(S.CANCELLED,"Operation cancelled"+(t?": "+t:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(t=>this.deferred.resolve(t))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function Zi(n,t){if(Jt("AsyncQueue",`${t}: ${n}`),cn(n))return new O(S.UNAVAILABLE,`${t}: ${n}`);throw n}/**
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
 */class Ge{static emptySet(t){return new Ge(t.comparator)}constructor(t){this.comparator=t?(e,r)=>t(e,r)||M.comparator(e.key,r.key):(e,r)=>M.comparator(e.key,r.key),this.keyedMap=Vn(),this.sortedSet=new et(this.comparator)}has(t){return this.keyedMap.get(t)!=null}get(t){return this.keyedMap.get(t)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(t){const e=this.keyedMap.get(t);return e?this.sortedSet.indexOf(e):-1}get size(){return this.sortedSet.size}forEach(t){this.sortedSet.inorderTraversal((e,r)=>(t(e),!1))}add(t){const e=this.delete(t.key);return e.copy(e.keyedMap.insert(t.key,t),e.sortedSet.insert(t,null))}delete(t){const e=this.get(t);return e?this.copy(this.keyedMap.remove(t),this.sortedSet.remove(e)):this}isEqual(t){if(!(t instanceof Ge)||this.size!==t.size)return!1;const e=this.sortedSet.getIterator(),r=t.sortedSet.getIterator();for(;e.hasNext();){const s=e.getNext().key,o=r.getNext().key;if(!s.isEqual(o))return!1}return!0}toString(){const t=[];return this.forEach(e=>{t.push(e.toString())}),t.length===0?"DocumentSet ()":`DocumentSet (
  `+t.join(`  
`)+`
)`}copy(t,e){const r=new Ge;return r.comparator=this.comparator,r.keyedMap=t,r.sortedSet=e,r}}/**
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
 */class Eu{constructor(){this.pa=new et(M.comparator)}track(t){const e=t.doc.key,r=this.pa.get(e);r?t.type!==0&&r.type===3?this.pa=this.pa.insert(e,t):t.type===3&&r.type!==1?this.pa=this.pa.insert(e,{type:r.type,doc:t.doc}):t.type===2&&r.type===2?this.pa=this.pa.insert(e,{type:2,doc:t.doc}):t.type===2&&r.type===0?this.pa=this.pa.insert(e,{type:0,doc:t.doc}):t.type===1&&r.type===0?this.pa=this.pa.remove(e):t.type===1&&r.type===2?this.pa=this.pa.insert(e,{type:1,doc:r.doc}):t.type===0&&r.type===1?this.pa=this.pa.insert(e,{type:2,doc:t.doc}):L(63341,{Vt:t,ya:r}):this.pa=this.pa.insert(e,t)}wa(){const t=[];return this.pa.inorderTraversal((e,r)=>{t.push(r)}),t}}class sn{constructor(t,e,r,s,o,a,c,h,d){this.query=t,this.docs=e,this.oldDocs=r,this.docChanges=s,this.mutatedKeys=o,this.fromCache=a,this.syncStateChanged=c,this.excludesMetadataChanges=h,this.hasCachedResults=d}static fromInitialDocuments(t,e,r,s,o){const a=[];return e.forEach(c=>{a.push({type:0,doc:c})}),new sn(t,e,Ge.emptySet(e),a,r,s,!0,!1,o)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(t){if(!(this.fromCache===t.fromCache&&this.hasCachedResults===t.hasCachedResults&&this.syncStateChanged===t.syncStateChanged&&this.mutatedKeys.isEqual(t.mutatedKeys)&&Xr(this.query,t.query)&&this.docs.isEqual(t.docs)&&this.oldDocs.isEqual(t.oldDocs)))return!1;const e=this.docChanges,r=t.docChanges;if(e.length!==r.length)return!1;for(let s=0;s<e.length;s++)if(e[s].type!==r[s].type||!e[s].doc.isEqual(r[s].doc))return!1;return!0}}/**
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
 */class ig{constructor(){this.ba=void 0,this.Sa=[]}Da(){return this.Sa.some(t=>t.va())}}class og{constructor(){this.queries=Tu(),this.onlineState="Unknown",this.Ca=new Set}terminate(){(function(e,r){const s=U(e),o=s.queries;s.queries=Tu(),o.forEach((a,c)=>{for(const h of c.Sa)h.onError(r)})})(this,new O(S.ABORTED,"Firestore shutting down"))}}function Tu(){return new Oe(n=>Pc(n),Xr)}async function ag(n,t){const e=U(n);let r=3;const s=t.query;let o=e.queries.get(s);o?!o.Da()&&t.va()&&(r=2):(o=new ig,r=t.va()?0:1);try{switch(r){case 0:o.ba=await e.onListen(s,!0);break;case 1:o.ba=await e.onListen(s,!1);break;case 2:await e.onFirstRemoteStoreListen(s)}}catch(a){const c=Zi(a,`Initialization of query '${qe(t.query)}' failed`);return void t.onError(c)}e.queries.set(s,o),o.Sa.push(t),t.Fa(e.onlineState),o.ba&&t.Ma(o.ba)&&to(e)}async function ug(n,t){const e=U(n),r=t.query;let s=3;const o=e.queries.get(r);if(o){const a=o.Sa.indexOf(t);a>=0&&(o.Sa.splice(a,1),o.Sa.length===0?s=t.va()?0:1:!o.Da()&&t.va()&&(s=2))}switch(s){case 0:return e.queries.delete(r),e.onUnlisten(r,!0);case 1:return e.queries.delete(r),e.onUnlisten(r,!1);case 2:return e.onLastRemoteStoreUnlisten(r);default:return}}function cg(n,t){const e=U(n);let r=!1;for(const s of t){const o=s.query,a=e.queries.get(o);if(a){for(const c of a.Sa)c.Ma(s)&&(r=!0);a.ba=s}}r&&to(e)}function lg(n,t,e){const r=U(n),s=r.queries.get(t);if(s)for(const o of s.Sa)o.onError(e);r.queries.delete(t)}function to(n){n.Ca.forEach(t=>{t.next()})}var Ii,vu;(vu=Ii||(Ii={})).xa="default",vu.Cache="cache";class hg{constructor(t,e,r){this.query=t,this.Oa=e,this.Na=!1,this.Ba=null,this.onlineState="Unknown",this.options=r||{}}Ma(t){if(!this.options.includeMetadataChanges){const r=[];for(const s of t.docChanges)s.type!==3&&r.push(s);t=new sn(t.query,t.docs,t.oldDocs,r,t.mutatedKeys,t.fromCache,t.syncStateChanged,!0,t.hasCachedResults)}let e=!1;return this.Na?this.La(t)&&(this.Oa.next(t),e=!0):this.ka(t,this.onlineState)&&(this.qa(t),e=!0),this.Ba=t,e}onError(t){this.Oa.error(t)}Fa(t){this.onlineState=t;let e=!1;return this.Ba&&!this.Na&&this.ka(this.Ba,t)&&(this.qa(this.Ba),e=!0),e}ka(t,e){if(!t.fromCache||!this.va())return!0;const r=e!=="Offline";return(!this.options.Qa||!r)&&(!t.docs.isEmpty()||t.hasCachedResults||e==="Offline")}La(t){if(t.docChanges.length>0)return!0;const e=this.Ba&&this.Ba.hasPendingWrites!==t.hasPendingWrites;return!(!t.syncStateChanged&&!e)&&this.options.includeMetadataChanges===!0}qa(t){t=sn.fromInitialDocuments(t.query,t.docs,t.mutatedKeys,t.fromCache,t.hasCachedResults),this.Na=!0,this.Oa.next(t)}va(){return this.options.source!==Ii.Cache}}/**
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
 */class ll{constructor(t){this.key=t}}class hl{constructor(t){this.key=t}}class dg{constructor(t,e){this.query=t,this.Ha=e,this.Ja=null,this.hasCachedResults=!1,this.current=!1,this.Ya=q(),this.mutatedKeys=q(),this.Za=Vc(t),this.Xa=new Ge(this.Za)}get eu(){return this.Ha}tu(t,e){const r=e?e.nu:new Eu,s=e?e.Xa:this.Xa;let o=e?e.mutatedKeys:this.mutatedKeys,a=s,c=!1;const h=this.query.limitType==="F"&&s.size===this.query.limit?s.last():null,d=this.query.limitType==="L"&&s.size===this.query.limit?s.first():null;if(t.inorderTraversal((m,E)=>{const I=s.get(m),b=Yr(this.query,E)?E:null,V=!!I&&this.mutatedKeys.has(I.key),x=!!b&&(b.hasLocalMutations||this.mutatedKeys.has(b.key)&&b.hasCommittedMutations);let P=!1;I&&b?I.data.isEqual(b.data)?V!==x&&(r.track({type:3,doc:b}),P=!0):this.ru(I,b)||(r.track({type:2,doc:b}),P=!0,(h&&this.Za(b,h)>0||d&&this.Za(b,d)<0)&&(c=!0)):!I&&b?(r.track({type:0,doc:b}),P=!0):I&&!b&&(r.track({type:1,doc:I}),P=!0,(h||d)&&(c=!0)),P&&(b?(a=a.add(b),o=x?o.add(m):o.delete(m)):(a=a.delete(m),o=o.delete(m)))}),this.query.limit!==null)for(;a.size>this.query.limit;){const m=this.query.limitType==="F"?a.last():a.first();a=a.delete(m.key),o=o.delete(m.key),r.track({type:1,doc:m})}return{Xa:a,nu:r,Cs:c,mutatedKeys:o}}ru(t,e){return t.hasLocalMutations&&e.hasCommittedMutations&&!e.hasLocalMutations}applyChanges(t,e,r,s){const o=this.Xa;this.Xa=t.Xa,this.mutatedKeys=t.mutatedKeys;const a=t.nu.wa();a.sort((m,E)=>function(b,V){const x=P=>{switch(P){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return L(20277,{Vt:P})}};return x(b)-x(V)}(m.type,E.type)||this.Za(m.doc,E.doc)),this.iu(r),s=s!=null&&s;const c=e&&!s?this.su():[],h=this.Ya.size===0&&this.current&&!s?1:0,d=h!==this.Ja;return this.Ja=h,a.length!==0||d?{snapshot:new sn(this.query,t.Xa,o,a,t.mutatedKeys,h===0,d,!1,!!r&&r.resumeToken.approximateByteSize()>0),ou:c}:{ou:c}}Fa(t){return this.current&&t==="Offline"?(this.current=!1,this.applyChanges({Xa:this.Xa,nu:new Eu,mutatedKeys:this.mutatedKeys,Cs:!1},!1)):{ou:[]}}_u(t){return!this.Ha.has(t)&&!!this.Xa.has(t)&&!this.Xa.get(t).hasLocalMutations}iu(t){t&&(t.addedDocuments.forEach(e=>this.Ha=this.Ha.add(e)),t.modifiedDocuments.forEach(e=>{}),t.removedDocuments.forEach(e=>this.Ha=this.Ha.delete(e)),this.current=t.current)}su(){if(!this.current)return[];const t=this.Ya;this.Ya=q(),this.Xa.forEach(r=>{this._u(r.key)&&(this.Ya=this.Ya.add(r.key))});const e=[];return t.forEach(r=>{this.Ya.has(r)||e.push(new hl(r))}),this.Ya.forEach(r=>{t.has(r)||e.push(new ll(r))}),e}au(t){this.Ha=t.$s,this.Ya=q();const e=this.tu(t.documents);return this.applyChanges(e,!0)}uu(){return sn.fromInitialDocuments(this.query,this.Xa,this.mutatedKeys,this.Ja===0,this.hasCachedResults)}}const eo="SyncEngine";class fg{constructor(t,e,r){this.query=t,this.targetId=e,this.view=r}}class pg{constructor(t){this.key=t,this.cu=!1}}class mg{constructor(t,e,r,s,o,a){this.localStore=t,this.remoteStore=e,this.eventManager=r,this.sharedClientState=s,this.currentUser=o,this.maxConcurrentLimboResolutions=a,this.lu={},this.hu=new Oe(c=>Pc(c),Xr),this.Pu=new Map,this.Tu=new Set,this.Iu=new et(M.comparator),this.Eu=new Map,this.du=new zi,this.Au={},this.Ru=new Map,this.Vu=rn.lr(),this.onlineState="Unknown",this.mu=void 0}get isPrimaryClient(){return this.mu===!0}}async function gg(n,t,e=!0){const r=_l(n);let s;const o=r.hu.get(t);return o?(r.sharedClientState.addLocalQueryTarget(o.targetId),s=o.view.uu()):s=await dl(r,t,e,!0),s}async function _g(n,t){const e=_l(n);await dl(e,t,!0,!1)}async function dl(n,t,e,r){const s=await xm(n.localStore,Bt(t)),o=s.targetId,a=n.sharedClientState.addLocalQueryTarget(o,e);let c;return r&&(c=await yg(n,t,o,a==="current",s.resumeToken)),n.isPrimaryClient&&e&&sl(n.remoteStore,s),c}async function yg(n,t,e,r,s){n.fu=(E,I,b)=>async function(x,P,z,B){let $=P.view.tu(z);$.Cs&&($=await fu(x.localStore,P.query,!1).then(({documents:v})=>P.view.tu(v,$)));const Z=B&&B.targetChanges.get(P.targetId),Nt=B&&B.targetMismatches.get(P.targetId)!=null,it=P.view.applyChanges($,x.isPrimaryClient,Z,Nt);return wu(x,P.targetId,it.ou),it.snapshot}(n,E,I,b);const o=await fu(n.localStore,t,!0),a=new dg(t,o.$s),c=a.tu(o.documents),h=Xn.createSynthesizedTargetChangeForCurrentChange(e,r&&n.onlineState!=="Offline",s),d=a.applyChanges(c,n.isPrimaryClient,h);wu(n,e,d.ou);const m=new fg(t,e,a);return n.hu.set(t,m),n.Pu.has(e)?n.Pu.get(e).push(t):n.Pu.set(e,[t]),d.snapshot}async function Eg(n,t,e){const r=U(n),s=r.hu.get(t),o=r.Pu.get(s.targetId);if(o.length>1)return r.Pu.set(s.targetId,o.filter(a=>!Xr(a,t))),void r.hu.delete(t);r.isPrimaryClient?(r.sharedClientState.removeLocalQueryTarget(s.targetId),r.sharedClientState.isActiveQueryTarget(s.targetId)||await Ti(r.localStore,s.targetId,!1).then(()=>{r.sharedClientState.clearQueryState(s.targetId),e&&Qi(r.remoteStore,s.targetId),wi(r,s.targetId)}).catch(un)):(wi(r,s.targetId),await Ti(r.localStore,s.targetId,!0))}async function Tg(n,t){const e=U(n),r=e.hu.get(t),s=e.Pu.get(r.targetId);e.isPrimaryClient&&s.length===1&&(e.sharedClientState.removeLocalQueryTarget(r.targetId),Qi(e.remoteStore,r.targetId))}async function vg(n,t,e){const r=Sg(n);try{const s=await function(a,c){const h=U(a),d=ct.now(),m=c.reduce((b,V)=>b.add(V.key),q());let E,I;return h.persistence.runTransaction("Locally write mutations","readwrite",b=>{let V=Zt(),x=q();return h.Bs.getEntries(b,m).next(P=>{V=P,V.forEach((z,B)=>{B.isValidDocument()||(x=x.add(z))})}).next(()=>h.localDocuments.getOverlayedDocuments(b,V)).next(P=>{E=P;const z=[];for(const B of c){const $=xp(B,E.get(B.key).overlayedDocument);$!=null&&z.push(new Me(B.key,$,Ic($.value.mapValue),Qt.exists(!0)))}return h.mutationQueue.addMutationBatch(b,d,z,c)}).next(P=>{I=P;const z=P.applyToLocalDocumentSet(E,x);return h.documentOverlayCache.saveOverlays(b,P.batchId,z)})}).then(()=>({batchId:I.batchId,changes:kc(E)}))}(r.localStore,t);r.sharedClientState.addPendingMutation(s.batchId),function(a,c,h){let d=a.Au[a.currentUser.toKey()];d||(d=new et(j)),d=d.insert(c,h),a.Au[a.currentUser.toKey()]=d}(r,s.batchId,e),await Jn(r,s.changes),await ss(r.remoteStore)}catch(s){const o=Zi(s,"Failed to persist write");e.reject(o)}}async function fl(n,t){const e=U(n);try{const r=await Dm(e.localStore,t);t.targetChanges.forEach((s,o)=>{const a=e.Eu.get(o);a&&(X(s.addedDocuments.size+s.modifiedDocuments.size+s.removedDocuments.size<=1,22616),s.addedDocuments.size>0?a.cu=!0:s.modifiedDocuments.size>0?X(a.cu,14607):s.removedDocuments.size>0&&(X(a.cu,42227),a.cu=!1))}),await Jn(e,r,t)}catch(r){await un(r)}}function Iu(n,t,e){const r=U(n);if(r.isPrimaryClient&&e===0||!r.isPrimaryClient&&e===1){const s=[];r.hu.forEach((o,a)=>{const c=a.view.Fa(t);c.snapshot&&s.push(c.snapshot)}),function(a,c){const h=U(a);h.onlineState=c;let d=!1;h.queries.forEach((m,E)=>{for(const I of E.Sa)I.Fa(c)&&(d=!0)}),d&&to(h)}(r.eventManager,t),s.length&&r.lu.Y_(s),r.onlineState=t,r.isPrimaryClient&&r.sharedClientState.setOnlineState(t)}}async function Ig(n,t,e){const r=U(n);r.sharedClientState.updateQueryState(t,"rejected",e);const s=r.Eu.get(t),o=s&&s.key;if(o){let a=new et(M.comparator);a=a.insert(o,wt.newNoDocument(o,F.min()));const c=q().add(o),h=new es(F.min(),new Map,new et(j),a,c);await fl(r,h),r.Iu=r.Iu.remove(o),r.Eu.delete(t),no(r)}else await Ti(r.localStore,t,!1).then(()=>wi(r,t,e)).catch(un)}async function wg(n,t){const e=U(n),r=t.batch.batchId;try{const s=await Vm(e.localStore,t);ml(e,r,null),pl(e,r),e.sharedClientState.updateMutationState(r,"acknowledged"),await Jn(e,s)}catch(s){await un(s)}}async function Ag(n,t,e){const r=U(n);try{const s=await function(a,c){const h=U(a);return h.persistence.runTransaction("Reject batch","readwrite-primary",d=>{let m;return h.mutationQueue.lookupMutationBatch(d,c).next(E=>(X(E!==null,37113),m=E.keys(),h.mutationQueue.removeMutationBatch(d,E))).next(()=>h.mutationQueue.performConsistencyCheck(d)).next(()=>h.documentOverlayCache.removeOverlaysForBatchId(d,m,c)).next(()=>h.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(d,m)).next(()=>h.localDocuments.getDocuments(d,m))})}(r.localStore,t);ml(r,t,e),pl(r,t),r.sharedClientState.updateMutationState(t,"rejected",e),await Jn(r,s)}catch(s){await un(s)}}function pl(n,t){(n.Ru.get(t)||[]).forEach(e=>{e.resolve()}),n.Ru.delete(t)}function ml(n,t,e){const r=U(n);let s=r.Au[r.currentUser.toKey()];if(s){const o=s.get(t);o&&(e?o.reject(e):o.resolve(),s=s.remove(t)),r.Au[r.currentUser.toKey()]=s}}function wi(n,t,e=null){n.sharedClientState.removeLocalQueryTarget(t);for(const r of n.Pu.get(t))n.hu.delete(r),e&&n.lu.gu(r,e);n.Pu.delete(t),n.isPrimaryClient&&n.du.Hr(t).forEach(r=>{n.du.containsKey(r)||gl(n,r)})}function gl(n,t){n.Tu.delete(t.path.canonicalString());const e=n.Iu.get(t);e!==null&&(Qi(n.remoteStore,e),n.Iu=n.Iu.remove(t),n.Eu.delete(e),no(n))}function wu(n,t,e){for(const r of e)r instanceof ll?(n.du.addReference(r.key,t),Rg(n,r)):r instanceof hl?(N(eo,"Document no longer in limbo: "+r.key),n.du.removeReference(r.key,t),n.du.containsKey(r.key)||gl(n,r.key)):L(19791,{pu:r})}function Rg(n,t){const e=t.key,r=e.path.canonicalString();n.Iu.get(e)||n.Tu.has(r)||(N(eo,"New document in limbo: "+e),n.Tu.add(r),no(n))}function no(n){for(;n.Tu.size>0&&n.Iu.size<n.maxConcurrentLimboResolutions;){const t=n.Tu.values().next().value;n.Tu.delete(t);const e=new M(rt.fromString(t)),r=n.Vu.next();n.Eu.set(r,new pg(e)),n.Iu=n.Iu.insert(e,r),sl(n.remoteStore,new ae(Bt(Ui(e.path)),r,"TargetPurposeLimboResolution",Gr.le))}}async function Jn(n,t,e){const r=U(n),s=[],o=[],a=[];r.hu.isEmpty()||(r.hu.forEach((c,h)=>{a.push(r.fu(h,t,e).then(d=>{var m;if((d||e)&&r.isPrimaryClient){const E=d?!d.fromCache:(m=e==null?void 0:e.targetChanges.get(h.targetId))===null||m===void 0?void 0:m.current;r.sharedClientState.updateQueryState(h.targetId,E?"current":"not-current")}if(d){s.push(d);const E=Gi.Rs(h.targetId,d);o.push(E)}}))}),await Promise.all(a),r.lu.Y_(s),await async function(h,d){const m=U(h);try{await m.persistence.runTransaction("notifyLocalViewChanges","readwrite",E=>C.forEach(d,I=>C.forEach(I.ds,b=>m.persistence.referenceDelegate.addReference(E,I.targetId,b)).next(()=>C.forEach(I.As,b=>m.persistence.referenceDelegate.removeReference(E,I.targetId,b)))))}catch(E){if(!cn(E))throw E;N(Ki,"Failed to update sequence numbers: "+E)}for(const E of d){const I=E.targetId;if(!E.fromCache){const b=m.xs.get(I),V=b.snapshotVersion,x=b.withLastLimboFreeSnapshotVersion(V);m.xs=m.xs.insert(I,x)}}}(r.localStore,o))}async function bg(n,t){const e=U(n);if(!e.currentUser.isEqual(t)){N(eo,"User change. New user:",t.toKey());const r=await tl(e.localStore,t);e.currentUser=t,function(o,a){o.Ru.forEach(c=>{c.forEach(h=>{h.reject(new O(S.CANCELLED,a))})}),o.Ru.clear()}(e,"'waitForPendingWrites' promise is rejected due to a user change."),e.sharedClientState.handleUserChange(t,r.removedBatchIds,r.addedBatchIds),await Jn(e,r.ks)}}function Cg(n,t){const e=U(n),r=e.Eu.get(t);if(r&&r.cu)return q().add(r.key);{let s=q();const o=e.Pu.get(t);if(!o)return s;for(const a of o){const c=e.hu.get(a);s=s.unionWith(c.view.eu)}return s}}function _l(n){const t=U(n);return t.remoteStore.remoteSyncer.applyRemoteEvent=fl.bind(null,t),t.remoteStore.remoteSyncer.getRemoteKeysForTarget=Cg.bind(null,t),t.remoteStore.remoteSyncer.rejectListen=Ig.bind(null,t),t.lu.Y_=cg.bind(null,t.eventManager),t.lu.gu=lg.bind(null,t.eventManager),t}function Sg(n){const t=U(n);return t.remoteStore.remoteSyncer.applySuccessfulWrite=wg.bind(null,t),t.remoteStore.remoteSyncer.rejectFailedWrite=Ag.bind(null,t),t}class jr{constructor(){this.kind="memory",this.synchronizeTabs=!1}async initialize(t){this.serializer=ns(t.databaseInfo.databaseId),this.sharedClientState=this.bu(t),this.persistence=this.Su(t),await this.persistence.start(),this.localStore=this.Du(t),this.gcScheduler=this.vu(t,this.localStore),this.indexBackfillerScheduler=this.Cu(t,this.localStore)}vu(t,e){return null}Cu(t,e){return null}Du(t){return Pm(this.persistence,new bm,t.initialUser,this.serializer)}Su(t){return new Zc(Hi.fi,this.serializer)}bu(t){return new Mm}async terminate(){var t,e;(t=this.gcScheduler)===null||t===void 0||t.stop(),(e=this.indexBackfillerScheduler)===null||e===void 0||e.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}jr.provider={build:()=>new jr};class Pg extends jr{constructor(t){super(),this.cacheSizeBytes=t}vu(t,e){X(this.persistence.referenceDelegate instanceof Ur,46915);const r=this.persistence.referenceDelegate.garbageCollector;return new hm(r,t.asyncQueue,e)}Su(t){const e=this.cacheSizeBytes!==void 0?St.withCacheSize(this.cacheSizeBytes):St.DEFAULT;return new Zc(r=>Ur.fi(r,e),this.serializer)}}class Ai{async initialize(t,e){this.localStore||(this.localStore=t.localStore,this.sharedClientState=t.sharedClientState,this.datastore=this.createDatastore(e),this.remoteStore=this.createRemoteStore(e),this.eventManager=this.createEventManager(e),this.syncEngine=this.createSyncEngine(e,!t.synchronizeTabs),this.sharedClientState.onlineStateHandler=r=>Iu(this.syncEngine,r,1),this.remoteStore.remoteSyncer.handleCredentialChange=bg.bind(null,this.syncEngine),await sg(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(t){return function(){return new og}()}createDatastore(t){const e=ns(t.databaseInfo.databaseId),r=function(o){return new jm(o)}(t.databaseInfo);return function(o,a,c,h){return new Hm(o,a,c,h)}(t.authCredentials,t.appCheckCredentials,r,e)}createRemoteStore(t){return function(r,s,o,a,c){return new Km(r,s,o,a,c)}(this.localStore,this.datastore,t.asyncQueue,e=>Iu(this.syncEngine,e,0),function(){return gu.C()?new gu:new Lm}())}createSyncEngine(t,e){return function(s,o,a,c,h,d,m){const E=new mg(s,o,a,c,h,d);return m&&(E.mu=!0),E}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,t.initialUser,t.maxConcurrentLimboResolutions,e)}async terminate(){var t,e;await async function(s){const o=U(s);N(ke,"RemoteStore shutting down."),o.da.add(5),await Yn(o),o.Ra.shutdown(),o.Va.set("Unknown")}(this.remoteStore),(t=this.datastore)===null||t===void 0||t.terminate(),(e=this.eventManager)===null||e===void 0||e.terminate()}}Ai.provider={build:()=>new Ai};/**
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
 *//**
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
 */class Vg{constructor(t){this.observer=t,this.muted=!1}next(t){this.muted||this.observer.next&&this.Mu(this.observer.next,t)}error(t){this.muted||(this.observer.error?this.Mu(this.observer.error,t):Jt("Uncaught Error in snapshot listener:",t.toString()))}xu(){this.muted=!0}Mu(t,e){setTimeout(()=>{this.muted||t(e)},0)}}/**
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
 */const ye="FirestoreClient";class Dg{constructor(t,e,r,s,o){this.authCredentials=t,this.appCheckCredentials=e,this.asyncQueue=r,this.databaseInfo=s,this.user=It.UNAUTHENTICATED,this.clientId=dc.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this._uninitializedComponentsProvider=o,this.authCredentials.start(r,async a=>{N(ye,"Received user=",a.uid),await this.authCredentialListener(a),this.user=a}),this.appCheckCredentials.start(r,a=>(N(ye,"Received new app check token=",a),this.appCheckCredentialListener(a,this.user)))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(t){this.authCredentialListener=t}setAppCheckTokenChangeListener(t){this.appCheckCredentialListener=t}terminate(){this.asyncQueue.enterRestrictedMode();const t=new he;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),t.resolve()}catch(e){const r=Zi(e,"Failed to shutdown persistence");t.reject(r)}}),t.promise}}async function qs(n,t){n.asyncQueue.verifyOperationInProgress(),N(ye,"Initializing OfflineComponentProvider");const e=n.configuration;await t.initialize(e);let r=e.initialUser;n.setCredentialChangeListener(async s=>{r.isEqual(s)||(await tl(t.localStore,s),r=s)}),t.persistence.setDatabaseDeletedListener(()=>n.terminate()),n._offlineComponents=t}async function Au(n,t){n.asyncQueue.verifyOperationInProgress();const e=await kg(n);N(ye,"Initializing OnlineComponentProvider"),await t.initialize(e,n.configuration),n.setCredentialChangeListener(r=>yu(t.remoteStore,r)),n.setAppCheckTokenChangeListener((r,s)=>yu(t.remoteStore,s)),n._onlineComponents=t}async function kg(n){if(!n._offlineComponents)if(n._uninitializedComponentsProvider){N(ye,"Using user provided OfflineComponentProvider");try{await qs(n,n._uninitializedComponentsProvider._offline)}catch(t){const e=t;if(!function(s){return s.name==="FirebaseError"?s.code===S.FAILED_PRECONDITION||s.code===S.UNIMPLEMENTED:!(typeof DOMException<"u"&&s instanceof DOMException)||s.code===22||s.code===20||s.code===11}(e))throw e;Je("Error using user provided cache. Falling back to memory cache: "+e),await qs(n,new jr)}}else N(ye,"Using default OfflineComponentProvider"),await qs(n,new Pg(void 0));return n._offlineComponents}async function yl(n){return n._onlineComponents||(n._uninitializedComponentsProvider?(N(ye,"Using user provided OnlineComponentProvider"),await Au(n,n._uninitializedComponentsProvider._online)):(N(ye,"Using default OnlineComponentProvider"),await Au(n,new Ai))),n._onlineComponents}function Ng(n){return yl(n).then(t=>t.syncEngine)}async function xg(n){const t=await yl(n),e=t.eventManager;return e.onListen=gg.bind(null,t.syncEngine),e.onUnlisten=Eg.bind(null,t.syncEngine),e.onFirstRemoteStoreListen=_g.bind(null,t.syncEngine),e.onLastRemoteStoreUnlisten=Tg.bind(null,t.syncEngine),e}function Og(n,t,e={}){const r=new he;return n.asyncQueue.enqueueAndForget(async()=>function(o,a,c,h,d){const m=new Vg({next:I=>{m.xu(),a.enqueueAndForget(()=>ug(o,E));const b=I.docs.has(c);!b&&I.fromCache?d.reject(new O(S.UNAVAILABLE,"Failed to get document because the client is offline.")):b&&I.fromCache&&h&&h.source==="server"?d.reject(new O(S.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):d.resolve(I)},error:I=>d.reject(I)}),E=new hg(Ui(c.path),m,{includeMetadataChanges:!0,Qa:!0});return ag(o,E)}(await xg(n),n.asyncQueue,t,e,r)),r.promise}/**
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
 */function El(n){const t={};return n.timeoutSeconds!==void 0&&(t.timeoutSeconds=n.timeoutSeconds),t}/**
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
 */const Ru=new Map;/**
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
 */function Mg(n,t,e){if(!e)throw new O(S.INVALID_ARGUMENT,`Function ${n}() cannot be called with an empty ${t}.`)}function Lg(n,t,e,r){if(t===!0&&r===!0)throw new O(S.INVALID_ARGUMENT,`${n} and ${e} cannot be used together.`)}function bu(n){if(!M.isDocumentKey(n))throw new O(S.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${n} has ${n.length}.`)}function ro(n){if(n===void 0)return"undefined";if(n===null)return"null";if(typeof n=="string")return n.length>20&&(n=`${n.substring(0,20)}...`),JSON.stringify(n);if(typeof n=="number"||typeof n=="boolean")return""+n;if(typeof n=="object"){if(n instanceof Array)return"an array";{const t=function(r){return r.constructor?r.constructor.name:null}(n);return t?`a custom ${t} object`:"an object"}}return typeof n=="function"?"a function":L(12329,{type:typeof n})}function Hn(n,t){if("_delegate"in n&&(n=n._delegate),!(n instanceof t)){if(t.name===n.constructor.name)throw new O(S.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const e=ro(n);throw new O(S.INVALID_ARGUMENT,`Expected type '${t.name}', but it was: ${e}`)}}return n}/**
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
 */const Tl="firestore.googleapis.com",Cu=!0;class Su{constructor(t){var e,r;if(t.host===void 0){if(t.ssl!==void 0)throw new O(S.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host=Tl,this.ssl=Cu}else this.host=t.host,this.ssl=(e=t.ssl)!==null&&e!==void 0?e:Cu;if(this.isUsingEmulator=t.emulatorOptions!==void 0,this.credentials=t.credentials,this.ignoreUndefinedProperties=!!t.ignoreUndefinedProperties,this.localCache=t.localCache,t.cacheSizeBytes===void 0)this.cacheSizeBytes=Jc;else{if(t.cacheSizeBytes!==-1&&t.cacheSizeBytes<cm)throw new O(S.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=t.cacheSizeBytes}Lg("experimentalForceLongPolling",t.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",t.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!t.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:t.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!t.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=El((r=t.experimentalLongPollingOptions)!==null&&r!==void 0?r:{}),function(o){if(o.timeoutSeconds!==void 0){if(isNaN(o.timeoutSeconds))throw new O(S.INVALID_ARGUMENT,`invalid long polling timeout: ${o.timeoutSeconds} (must not be NaN)`);if(o.timeoutSeconds<5)throw new O(S.INVALID_ARGUMENT,`invalid long polling timeout: ${o.timeoutSeconds} (minimum allowed value is 5)`);if(o.timeoutSeconds>30)throw new O(S.INVALID_ARGUMENT,`invalid long polling timeout: ${o.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!t.useFetchStreams}isEqual(t){return this.host===t.host&&this.ssl===t.ssl&&this.credentials===t.credentials&&this.cacheSizeBytes===t.cacheSizeBytes&&this.experimentalForceLongPolling===t.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===t.experimentalAutoDetectLongPolling&&function(r,s){return r.timeoutSeconds===s.timeoutSeconds}(this.experimentalLongPollingOptions,t.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===t.ignoreUndefinedProperties&&this.useFetchStreams===t.useFetchStreams}}class so{constructor(t,e,r,s){this._authCredentials=t,this._appCheckCredentials=e,this._databaseId=r,this._app=s,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new Su({}),this._settingsFrozen=!1,this._emulatorOptions={},this._terminateTask="notTerminated"}get app(){if(!this._app)throw new O(S.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!=="notTerminated"}_setSettings(t){if(this._settingsFrozen)throw new O(S.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new Su(t),this._emulatorOptions=t.emulatorOptions||{},t.credentials!==void 0&&(this._authCredentials=function(r){if(!r)return new Ff;switch(r.type){case"firstParty":return new $f(r.sessionIndex||"0",r.iamToken||null,r.authTokenFactory||null);case"provider":return r.client;default:throw new O(S.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(t.credentials))}_getSettings(){return this._settings}_getEmulatorOptions(){return this._emulatorOptions}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask==="notTerminated"&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){this._terminateTask==="notTerminated"?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(e){const r=Ru.get(e);r&&(N("ComponentProvider","Removing Datastore"),Ru.delete(e),r.terminate())}(this),Promise.resolve()}}function Fg(n,t,e,r={}){var s;n=Hn(n,so);const o=Si(t),a=n._getSettings(),c=Object.assign(Object.assign({},a),{emulatorOptions:n._getEmulatorOptions()}),h=`${t}:${e}`;o&&(fd(`https://${h}`),_d("Firestore",!0)),a.host!==Tl&&a.host!==h&&Je("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used.");const d=Object.assign(Object.assign({},a),{host:h,ssl:o,emulatorOptions:r});if(!Ye(d,c)&&(n._setSettings(d),r.mockUserToken)){let m,E;if(typeof r.mockUserToken=="string")m=r.mockUserToken,E=It.MOCK_USER;else{m=pd(r.mockUserToken,(s=n._app)===null||s===void 0?void 0:s.options.projectId);const I=r.mockUserToken.sub||r.mockUserToken.user_id;if(!I)throw new O(S.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");E=new It(I)}n._authCredentials=new Uf(new lc(m,E))}}/**
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
 */class io{constructor(t,e,r){this.converter=e,this._query=r,this.type="query",this.firestore=t}withConverter(t){return new io(this.firestore,t,this._query)}}class xt{constructor(t,e,r){this.converter=e,this._key=r,this.type="document",this.firestore=t}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new Gn(this.firestore,this.converter,this._key.path.popLast())}withConverter(t){return new xt(this.firestore,t,this._key)}}class Gn extends io{constructor(t,e,r){super(t,e,Ui(r)),this._path=r,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const t=this._path.popLast();return t.isEmpty()?null:new xt(this.firestore,null,new M(t))}withConverter(t){return new Gn(this.firestore,t,this._path)}}function Ug(n,t,...e){if(n=Wt(n),arguments.length===1&&(t=dc.newId()),Mg("doc","path",t),n instanceof so){const r=rt.fromString(t,...e);return bu(r),new xt(n,null,new M(r))}{if(!(n instanceof xt||n instanceof Gn))throw new O(S.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=n._path.child(rt.fromString(t,...e));return bu(r),new xt(n.firestore,n instanceof Gn?n.converter:null,new M(r))}}/**
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
 */const Pu="AsyncQueue";class Vu{constructor(t=Promise.resolve()){this.Ju=[],this.Yu=!1,this.Zu=[],this.Xu=null,this.ec=!1,this.tc=!1,this.nc=[],this.x_=new nl(this,"async_queue_retry"),this.rc=()=>{const r=$s();r&&N(Pu,"Visibility state changed to "+r.visibilityState),this.x_.b_()},this.sc=t;const e=$s();e&&typeof e.addEventListener=="function"&&e.addEventListener("visibilitychange",this.rc)}get isShuttingDown(){return this.Yu}enqueueAndForget(t){this.enqueue(t)}enqueueAndForgetEvenWhileRestricted(t){this.oc(),this._c(t)}enterRestrictedMode(t){if(!this.Yu){this.Yu=!0,this.tc=t||!1;const e=$s();e&&typeof e.removeEventListener=="function"&&e.removeEventListener("visibilitychange",this.rc)}}enqueue(t){if(this.oc(),this.Yu)return new Promise(()=>{});const e=new he;return this._c(()=>this.Yu&&this.tc?Promise.resolve():(t().then(e.resolve,e.reject),e.promise)).then(()=>e.promise)}enqueueRetryable(t){this.enqueueAndForget(()=>(this.Ju.push(t),this.ac()))}async ac(){if(this.Ju.length!==0){try{await this.Ju[0](),this.Ju.shift(),this.x_.reset()}catch(t){if(!cn(t))throw t;N(Pu,"Operation failed with retryable error: "+t)}this.Ju.length>0&&this.x_.y_(()=>this.ac())}}_c(t){const e=this.sc.then(()=>(this.ec=!0,t().catch(r=>{throw this.Xu=r,this.ec=!1,Jt("INTERNAL UNHANDLED ERROR: ",Du(r)),r}).then(r=>(this.ec=!1,r))));return this.sc=e,e}enqueueAfterDelay(t,e,r){this.oc(),this.nc.indexOf(t)>-1&&(e=0);const s=Ji.createAndSchedule(this,t,e,r,o=>this.uc(o));return this.Zu.push(s),s}oc(){this.Xu&&L(47125,{cc:Du(this.Xu)})}verifyOperationInProgress(){}async lc(){let t;do t=this.sc,await t;while(t!==this.sc)}hc(t){for(const e of this.Zu)if(e.timerId===t)return!0;return!1}Pc(t){return this.lc().then(()=>{this.Zu.sort((e,r)=>e.targetTimeMs-r.targetTimeMs);for(const e of this.Zu)if(e.skipDelay(),t!=="all"&&e.timerId===t)break;return this.lc()})}Tc(t){this.nc.push(t)}uc(t){const e=this.Zu.indexOf(t);this.Zu.splice(e,1)}}function Du(n){let t=n.message||"";return n.stack&&(t=n.stack.includes(n.message)?n.stack:n.message+`
`+n.stack),t}class oo extends so{constructor(t,e,r,s){super(t,e,r,s),this.type="firestore",this._queue=new Vu,this._persistenceKey=(s==null?void 0:s.name)||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){const t=this._firestoreClient.terminate();this._queue=new Vu(t),this._firestoreClient=void 0,await t}}}function Bg(n,t){const e=typeof n=="object"?n:tc(),r=typeof n=="string"?n:kr,s=Wn(e,"firestore").getImmediate({identifier:r});if(!s._initialized){const o=hd("firestore");o&&Fg(s,...o)}return s}function vl(n){if(n._terminated)throw new O(S.FAILED_PRECONDITION,"The client has already been terminated.");return n._firestoreClient||jg(n),n._firestoreClient}function jg(n){var t,e,r;const s=n._freezeSettings(),o=function(c,h,d,m){return new rp(c,h,d,m.host,m.ssl,m.experimentalForceLongPolling,m.experimentalAutoDetectLongPolling,El(m.experimentalLongPollingOptions),m.useFetchStreams,m.isUsingEmulator)}(n._databaseId,((t=n._app)===null||t===void 0?void 0:t.options.appId)||"",n._persistenceKey,s);n._componentsProvider||!((e=s.localCache)===null||e===void 0)&&e._offlineComponentProvider&&(!((r=s.localCache)===null||r===void 0)&&r._onlineComponentProvider)&&(n._componentsProvider={_offline:s.localCache._offlineComponentProvider,_online:s.localCache._onlineComponentProvider}),n._firestoreClient=new Dg(n._authCredentials,n._appCheckCredentials,n._queue,o,n._componentsProvider&&function(c){const h=c==null?void 0:c._online.build();return{_offline:c==null?void 0:c._offline.build(h),_online:h}}(n._componentsProvider))}/**
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
 */class on{constructor(t){this._byteString=t}static fromBase64String(t){try{return new on(gt.fromBase64String(t))}catch(e){throw new O(S.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+e)}}static fromUint8Array(t){return new on(gt.fromUint8Array(t))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(t){return this._byteString.isEqual(t._byteString)}}/**
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
 */class is{constructor(...t){for(let e=0;e<t.length;++e)if(t[e].length===0)throw new O(S.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new mt(t)}isEqual(t){return this._internalPath.isEqual(t._internalPath)}}/**
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
 */class os{constructor(t){this._methodName=t}}/**
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
 */class ao{constructor(t,e){if(!isFinite(t)||t<-90||t>90)throw new O(S.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+t);if(!isFinite(e)||e<-180||e>180)throw new O(S.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+e);this._lat=t,this._long=e}get latitude(){return this._lat}get longitude(){return this._long}isEqual(t){return this._lat===t._lat&&this._long===t._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(t){return j(this._lat,t._lat)||j(this._long,t._long)}}/**
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
 */class uo{constructor(t){this._values=(t||[]).map(e=>e)}toArray(){return this._values.map(t=>t)}isEqual(t){return function(r,s){if(r.length!==s.length)return!1;for(let o=0;o<r.length;++o)if(r[o]!==s[o])return!1;return!0}(this._values,t._values)}}/**
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
 */const $g=/^__.*__$/;class Il{constructor(t,e,r){this.data=t,this.fieldMask=e,this.fieldTransforms=r}toMutation(t,e){return new Me(t,this.data,this.fieldMask,e,this.fieldTransforms)}}function wl(n){switch(n){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw L(40011,{Ic:n})}}class as{constructor(t,e,r,s,o,a){this.settings=t,this.databaseId=e,this.serializer=r,this.ignoreUndefinedProperties=s,o===void 0&&this.Ec(),this.fieldTransforms=o||[],this.fieldMask=a||[]}get path(){return this.settings.path}get Ic(){return this.settings.Ic}dc(t){return new as(Object.assign(Object.assign({},this.settings),t),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}Ac(t){var e;const r=(e=this.path)===null||e===void 0?void 0:e.child(t),s=this.dc({path:r,Rc:!1});return s.Vc(t),s}mc(t){var e;const r=(e=this.path)===null||e===void 0?void 0:e.child(t),s=this.dc({path:r,Rc:!1});return s.Ec(),s}fc(t){return this.dc({path:void 0,Rc:!0})}gc(t){return $r(t,this.settings.methodName,this.settings.yc||!1,this.path,this.settings.wc)}contains(t){return this.fieldMask.find(e=>t.isPrefixOf(e))!==void 0||this.fieldTransforms.find(e=>t.isPrefixOf(e.field))!==void 0}Ec(){if(this.path)for(let t=0;t<this.path.length;t++)this.Vc(this.path.get(t))}Vc(t){if(t.length===0)throw this.gc("Document fields must not be empty");if(wl(this.Ic)&&$g.test(t))throw this.gc('Document fields cannot begin and end with "__"')}}class qg{constructor(t,e,r){this.databaseId=t,this.ignoreUndefinedProperties=e,this.serializer=r||ns(t)}bc(t,e,r,s=!1){return new as({Ic:t,methodName:e,wc:r,path:mt.emptyPath(),Rc:!1,yc:s},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function zg(n){const t=n._freezeSettings(),e=ns(n._databaseId);return new qg(n._databaseId,!!t.ignoreUndefinedProperties,e)}class us extends os{_toFieldTransform(t){if(t.Ic!==2)throw t.Ic===1?t.gc(`${this._methodName}() can only appear at the top level of your update data`):t.gc(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return t.fieldMask.push(t.path),null}isEqual(t){return t instanceof us}}function Hg(n,t,e){return new as({Ic:3,wc:t.settings.wc,methodName:n._methodName,Rc:e},t.databaseId,t.serializer,t.ignoreUndefinedProperties)}class co extends os{constructor(t,e){super(t),this.Sc=e}_toFieldTransform(t){const e=Hg(this,t,!0),r=this.Sc.map(o=>Zn(o,e)),s=new nn(r);return new Vp(t.path,s)}isEqual(t){return t instanceof co&&Ye(this.Sc,t.Sc)}}function Gg(n,t,e,r){const s=n.bc(1,t,e);Rl("Data must be an object, but it was:",s,r);const o=[],a=Dt.empty();Te(r,(h,d)=>{const m=lo(t,h,e);d=Wt(d);const E=s.mc(m);if(d instanceof us)o.push(m);else{const I=Zn(d,E);I!=null&&(o.push(m),a.set(m,I))}});const c=new Mt(o);return new Il(a,c,s.fieldTransforms)}function Kg(n,t,e,r,s,o){const a=n.bc(1,t,e),c=[ku(t,r,e)],h=[s];if(o.length%2!=0)throw new O(S.INVALID_ARGUMENT,`Function ${t}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let I=0;I<o.length;I+=2)c.push(ku(t,o[I])),h.push(o[I+1]);const d=[],m=Dt.empty();for(let I=c.length-1;I>=0;--I)if(!Xg(d,c[I])){const b=c[I];let V=h[I];V=Wt(V);const x=a.mc(b);if(V instanceof us)d.push(b);else{const P=Zn(V,x);P!=null&&(d.push(b),m.set(b,P))}}const E=new Mt(d);return new Il(m,E,a.fieldTransforms)}function Zn(n,t){if(Al(n=Wt(n)))return Rl("Unsupported field value:",t,n),Qg(n,t);if(n instanceof os)return function(r,s){if(!wl(s.Ic))throw s.gc(`${r._methodName}() can only be used with update() and set()`);if(!s.path)throw s.gc(`${r._methodName}() is not currently supported inside arrays`);const o=r._toFieldTransform(s);o&&s.fieldTransforms.push(o)}(n,t),null;if(n===void 0&&t.ignoreUndefinedProperties)return null;if(t.path&&t.fieldMask.push(t.path),n instanceof Array){if(t.settings.Rc&&t.Ic!==4)throw t.gc("Nested arrays are not supported");return function(r,s){const o=[];let a=0;for(const c of r){let h=Zn(c,s.fc(a));h==null&&(h={nullValue:"NULL_VALUE"}),o.push(h),a++}return{arrayValue:{values:o}}}(n,t)}return function(r,s){if((r=Wt(r))===null)return{nullValue:"NULL_VALUE"};if(typeof r=="number")return Cp(s.serializer,r);if(typeof r=="boolean")return{booleanValue:r};if(typeof r=="string")return{stringValue:r};if(r instanceof Date){const o=ct.fromDate(r);return{timestampValue:Fr(s.serializer,o)}}if(r instanceof ct){const o=new ct(r.seconds,1e3*Math.floor(r.nanoseconds/1e3));return{timestampValue:Fr(s.serializer,o)}}if(r instanceof ao)return{geoPointValue:{latitude:r.latitude,longitude:r.longitude}};if(r instanceof on)return{bytesValue:Hc(s.serializer,r._byteString)};if(r instanceof xt){const o=s.databaseId,a=r.firestore._databaseId;if(!a.isEqual(o))throw s.gc(`Document reference is for database ${a.projectId}/${a.database} but should be for database ${o.projectId}/${o.database}`);return{referenceValue:qi(r.firestore._databaseId||s.databaseId,r._key.path)}}if(r instanceof uo)return function(a,c){return{mapValue:{fields:{[Tc]:{stringValue:vc},[Nr]:{arrayValue:{values:a.toArray().map(d=>{if(typeof d!="number")throw c.gc("VectorValues must only contain numeric values.");return Bi(c.serializer,d)})}}}}}}(r,s);throw s.gc(`Unsupported field value: ${ro(r)}`)}(n,t)}function Qg(n,t){const e={};return pc(n)?t.path&&t.path.length>0&&t.fieldMask.push(t.path):Te(n,(r,s)=>{const o=Zn(s,t.Ac(r));o!=null&&(e[r]=o)}),{mapValue:{fields:e}}}function Al(n){return!(typeof n!="object"||n===null||n instanceof Array||n instanceof Date||n instanceof ct||n instanceof ao||n instanceof on||n instanceof xt||n instanceof os||n instanceof uo)}function Rl(n,t,e){if(!Al(e)||!function(s){return typeof s=="object"&&s!==null&&(Object.getPrototypeOf(s)===Object.prototype||Object.getPrototypeOf(s)===null)}(e)){const r=ro(e);throw r==="an object"?t.gc(n+" a custom object"):t.gc(n+" "+r)}}function ku(n,t,e){if((t=Wt(t))instanceof is)return t._internalPath;if(typeof t=="string")return lo(n,t);throw $r("Field path arguments must be of type string or ",n,!1,void 0,e)}const Wg=new RegExp("[~\\*/\\[\\]]");function lo(n,t,e){if(t.search(Wg)>=0)throw $r(`Invalid field path (${t}). Paths must not contain '~', '*', '/', '[', or ']'`,n,!1,void 0,e);try{return new is(...t.split("."))._internalPath}catch{throw $r(`Invalid field path (${t}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,n,!1,void 0,e)}}function $r(n,t,e,r,s){const o=r&&!r.isEmpty(),a=s!==void 0;let c=`Function ${t}() called with invalid data`;e&&(c+=" (via `toFirestore()`)"),c+=". ";let h="";return(o||a)&&(h+=" (found",o&&(h+=` in field ${r}`),a&&(h+=` in document ${s}`),h+=")"),new O(S.INVALID_ARGUMENT,c+n+h)}function Xg(n,t){return n.some(e=>e.isEqual(t))}/**
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
 */class bl{constructor(t,e,r,s,o){this._firestore=t,this._userDataWriter=e,this._key=r,this._document=s,this._converter=o}get id(){return this._key.path.lastSegment()}get ref(){return new xt(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const t=new Yg(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(t)}return this._userDataWriter.convertValue(this._document.data.value)}}get(t){if(this._document){const e=this._document.data.field(Cl("DocumentSnapshot.get",t));if(e!==null)return this._userDataWriter.convertValue(e)}}}class Yg extends bl{data(){return super.data()}}function Cl(n,t){return typeof t=="string"?lo(n,t):t instanceof is?t._internalPath:t._delegate._internalPath}class Jg{convertValue(t,e="none"){switch(ge(t)){case 0:return null;case 1:return t.booleanValue;case 2:return st(t.integerValue||t.doubleValue);case 3:return this.convertTimestamp(t.timestampValue);case 4:return this.convertServerTimestamp(t,e);case 5:return t.stringValue;case 6:return this.convertBytes(me(t.bytesValue));case 7:return this.convertReference(t.referenceValue);case 8:return this.convertGeoPoint(t.geoPointValue);case 9:return this.convertArray(t.arrayValue,e);case 11:return this.convertObject(t.mapValue,e);case 10:return this.convertVectorValue(t.mapValue);default:throw L(62114,{value:t})}}convertObject(t,e){return this.convertObjectMap(t.fields,e)}convertObjectMap(t,e="none"){const r={};return Te(t,(s,o)=>{r[s]=this.convertValue(o,e)}),r}convertVectorValue(t){var e,r,s;const o=(s=(r=(e=t.fields)===null||e===void 0?void 0:e[Nr].arrayValue)===null||r===void 0?void 0:r.values)===null||s===void 0?void 0:s.map(a=>st(a.doubleValue));return new uo(o)}convertGeoPoint(t){return new ao(st(t.latitude),st(t.longitude))}convertArray(t,e){return(t.values||[]).map(r=>this.convertValue(r,e))}convertServerTimestamp(t,e){switch(e){case"previous":const r=Qr(t);return r==null?null:this.convertValue(r,e);case"estimate":return this.convertTimestamp(jn(t));default:return null}}convertTimestamp(t){const e=pe(t);return new ct(e.seconds,e.nanos)}convertDocumentKey(t,e){const r=rt.fromString(t);X(Yc(r),9688,{name:t});const s=new $n(r.get(1),r.get(3)),o=new M(r.popFirst(5));return s.isEqual(e)||Jt(`Document ${o} contains a document reference within a different database (${s.projectId}/${s.database}) which is not supported. It will be treated as a reference in the current database (${e.projectId}/${e.database}) instead.`),o}}/**
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
 */class Zg{constructor(t,e){this.hasPendingWrites=t,this.fromCache=e}isEqual(t){return this.hasPendingWrites===t.hasPendingWrites&&this.fromCache===t.fromCache}}class Sl extends bl{constructor(t,e,r,s,o,a){super(t,e,r,s,a),this._firestore=t,this._firestoreImpl=t,this.metadata=o}exists(){return super.exists()}data(t={}){if(this._document){if(this._converter){const e=new t_(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(e,t)}return this._userDataWriter.convertValue(this._document.data.value,t.serverTimestamps)}}get(t,e={}){if(this._document){const r=this._document.data.field(Cl("DocumentSnapshot.get",t));if(r!==null)return this._userDataWriter.convertValue(r,e.serverTimestamps)}}}class t_ extends Sl{data(t={}){return super.data(t)}}/**
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
 */function e_(n){n=Hn(n,xt);const t=Hn(n.firestore,oo);return Og(vl(t),n._key).then(e=>s_(t,n,e))}class n_ extends Jg{constructor(t){super(),this.firestore=t}convertBytes(t){return new on(t)}convertReference(t){const e=this.convertDocumentKey(t,this.firestore._databaseId);return new xt(this.firestore,null,e)}}function Ny(n,t,e,...r){n=Hn(n,xt);const s=Hn(n.firestore,oo),o=zg(s);let a;return a=typeof(t=Wt(t))=="string"||t instanceof is?Kg(o,"updateDoc",n._key,t,e,r):Gg(o,"updateDoc",n._key,t),r_(s,[a.toMutation(n._key,Qt.exists(!0))])}function r_(n,t){return function(r,s){const o=new he;return r.asyncQueue.enqueueAndForget(async()=>vg(await Ng(r),s,o)),o.promise}(vl(n),t)}function s_(n,t,e){const r=e.docs.get(t._key),s=new n_(n);return new Sl(n,s,t._key,r,new Zg(e.hasPendingWrites,e.fromCache),t.converter)}function xy(...n){return new co("arrayUnion",n)}(function(t,e=!0){(function(s){an=s})(Cf),de(new Xt("firestore",(r,{instanceIdentifier:s,options:o})=>{const a=r.getProvider("app").getImmediate(),c=new oo(new Bf(r.getProvider("auth-internal")),new qf(a,r.getProvider("app-check-internal")),function(d,m){if(!Object.prototype.hasOwnProperty.apply(d.options,["projectId"]))throw new O(S.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new $n(d.options.projectId,m)}(a,s),a);return o=Object.assign({useFetchStreams:e},o),c._setSettings(o),c},"PUBLIC").setMultipleInstances(!0)),Ut(La,Fa,t),Ut(La,Fa,"esm2017")})();var i_="firebase",o_="11.9.1";/**
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
 */Ut(i_,o_,"app");const Pl="@firebase/installations",ho="0.6.17";/**
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
 */const Vl=1e4,Dl=`w:${ho}`,kl="FIS_v2",a_="https://firebaseinstallations.googleapis.com/v1",u_=60*60*1e3,c_="installations",l_="Installations";/**
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
 */const h_={"missing-app-config-values":'Missing App configuration value: "{$valueName}"',"not-registered":"Firebase Installation is not registered.","installation-not-found":"Firebase Installation not found.","request-failed":'{$requestName} request failed with error "{$serverCode} {$serverStatus}: {$serverMessage}"',"app-offline":"Could not process request. Application offline.","delete-pending-registration":"Can't delete installation while there is a pending registration request."},Ne=new Hr(c_,l_,h_);function Nl(n){return n instanceof Ee&&n.code.includes("request-failed")}/**
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
 */function xl({projectId:n}){return`${a_}/projects/${n}/installations`}function Ol(n){return{token:n.token,requestStatus:2,expiresIn:f_(n.expiresIn),creationTime:Date.now()}}async function Ml(n,t){const r=(await t.json()).error;return Ne.create("request-failed",{requestName:n,serverCode:r.code,serverMessage:r.message,serverStatus:r.status})}function Ll({apiKey:n}){return new Headers({"Content-Type":"application/json",Accept:"application/json","x-goog-api-key":n})}function d_(n,{refreshToken:t}){const e=Ll(n);return e.append("Authorization",p_(t)),e}async function Fl(n){const t=await n();return t.status>=500&&t.status<600?n():t}function f_(n){return Number(n.replace("s","000"))}function p_(n){return`${kl} ${n}`}/**
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
 */async function m_({appConfig:n,heartbeatServiceProvider:t},{fid:e}){const r=xl(n),s=Ll(n),o=t.getImmediate({optional:!0});if(o){const d=await o.getHeartbeatsHeader();d&&s.append("x-firebase-client",d)}const a={fid:e,authVersion:kl,appId:n.appId,sdkVersion:Dl},c={method:"POST",headers:s,body:JSON.stringify(a)},h=await Fl(()=>fetch(r,c));if(h.ok){const d=await h.json();return{fid:d.fid||e,registrationStatus:2,refreshToken:d.refreshToken,authToken:Ol(d.authToken)}}else throw await Ml("Create Installation",h)}/**
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
 */function Ul(n){return new Promise(t=>{setTimeout(t,n)})}/**
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
 */function g_(n){return btoa(String.fromCharCode(...n)).replace(/\+/g,"-").replace(/\//g,"_")}/**
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
 */const __=/^[cdef][\w-]{21}$/,Ri="";function y_(){try{const n=new Uint8Array(17);(self.crypto||self.msCrypto).getRandomValues(n),n[0]=112+n[0]%16;const e=E_(n);return __.test(e)?e:Ri}catch{return Ri}}function E_(n){return g_(n).substr(0,22)}/**
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
 */function cs(n){return`${n.appName}!${n.appId}`}/**
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
 */const Bl=new Map;function jl(n,t){const e=cs(n);$l(e,t),T_(e,t)}function $l(n,t){const e=Bl.get(n);if(e)for(const r of e)r(t)}function T_(n,t){const e=v_();e&&e.postMessage({key:n,fid:t}),I_()}let Ce=null;function v_(){return!Ce&&"BroadcastChannel"in self&&(Ce=new BroadcastChannel("[Firebase] FID Change"),Ce.onmessage=n=>{$l(n.data.key,n.data.fid)}),Ce}function I_(){Bl.size===0&&Ce&&(Ce.close(),Ce=null)}/**
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
 */const w_="firebase-installations-database",A_=1,xe="firebase-installations-store";let zs=null;function fo(){return zs||(zs=Ju(w_,A_,{upgrade:(n,t)=>{switch(t){case 0:n.createObjectStore(xe)}}})),zs}async function qr(n,t){const e=cs(n),s=(await fo()).transaction(xe,"readwrite"),o=s.objectStore(xe),a=await o.get(e);return await o.put(t,e),await s.done,(!a||a.fid!==t.fid)&&jl(n,t.fid),t}async function ql(n){const t=cs(n),r=(await fo()).transaction(xe,"readwrite");await r.objectStore(xe).delete(t),await r.done}async function ls(n,t){const e=cs(n),s=(await fo()).transaction(xe,"readwrite"),o=s.objectStore(xe),a=await o.get(e),c=t(a);return c===void 0?await o.delete(e):await o.put(c,e),await s.done,c&&(!a||a.fid!==c.fid)&&jl(n,c.fid),c}/**
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
 */async function po(n){let t;const e=await ls(n.appConfig,r=>{const s=R_(r),o=b_(n,s);return t=o.registrationPromise,o.installationEntry});return e.fid===Ri?{installationEntry:await t}:{installationEntry:e,registrationPromise:t}}function R_(n){const t=n||{fid:y_(),registrationStatus:0};return zl(t)}function b_(n,t){if(t.registrationStatus===0){if(!navigator.onLine){const s=Promise.reject(Ne.create("app-offline"));return{installationEntry:t,registrationPromise:s}}const e={fid:t.fid,registrationStatus:1,registrationTime:Date.now()},r=C_(n,e);return{installationEntry:e,registrationPromise:r}}else return t.registrationStatus===1?{installationEntry:t,registrationPromise:S_(n)}:{installationEntry:t}}async function C_(n,t){try{const e=await m_(n,t);return qr(n.appConfig,e)}catch(e){throw Nl(e)&&e.customData.serverCode===409?await ql(n.appConfig):await qr(n.appConfig,{fid:t.fid,registrationStatus:0}),e}}async function S_(n){let t=await Nu(n.appConfig);for(;t.registrationStatus===1;)await Ul(100),t=await Nu(n.appConfig);if(t.registrationStatus===0){const{installationEntry:e,registrationPromise:r}=await po(n);return r||e}return t}function Nu(n){return ls(n,t=>{if(!t)throw Ne.create("installation-not-found");return zl(t)})}function zl(n){return P_(n)?{fid:n.fid,registrationStatus:0}:n}function P_(n){return n.registrationStatus===1&&n.registrationTime+Vl<Date.now()}/**
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
 */async function V_({appConfig:n,heartbeatServiceProvider:t},e){const r=D_(n,e),s=d_(n,e),o=t.getImmediate({optional:!0});if(o){const d=await o.getHeartbeatsHeader();d&&s.append("x-firebase-client",d)}const a={installation:{sdkVersion:Dl,appId:n.appId}},c={method:"POST",headers:s,body:JSON.stringify(a)},h=await Fl(()=>fetch(r,c));if(h.ok){const d=await h.json();return Ol(d)}else throw await Ml("Generate Auth Token",h)}function D_(n,{fid:t}){return`${xl(n)}/${t}/authTokens:generate`}/**
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
 */async function mo(n,t=!1){let e;const r=await ls(n.appConfig,o=>{if(!Hl(o))throw Ne.create("not-registered");const a=o.authToken;if(!t&&x_(a))return o;if(a.requestStatus===1)return e=k_(n,t),o;{if(!navigator.onLine)throw Ne.create("app-offline");const c=M_(o);return e=N_(n,c),c}});return e?await e:r.authToken}async function k_(n,t){let e=await xu(n.appConfig);for(;e.authToken.requestStatus===1;)await Ul(100),e=await xu(n.appConfig);const r=e.authToken;return r.requestStatus===0?mo(n,t):r}function xu(n){return ls(n,t=>{if(!Hl(t))throw Ne.create("not-registered");const e=t.authToken;return L_(e)?Object.assign(Object.assign({},t),{authToken:{requestStatus:0}}):t})}async function N_(n,t){try{const e=await V_(n,t),r=Object.assign(Object.assign({},t),{authToken:e});return await qr(n.appConfig,r),e}catch(e){if(Nl(e)&&(e.customData.serverCode===401||e.customData.serverCode===404))await ql(n.appConfig);else{const r=Object.assign(Object.assign({},t),{authToken:{requestStatus:0}});await qr(n.appConfig,r)}throw e}}function Hl(n){return n!==void 0&&n.registrationStatus===2}function x_(n){return n.requestStatus===2&&!O_(n)}function O_(n){const t=Date.now();return t<n.creationTime||n.creationTime+n.expiresIn<t+u_}function M_(n){const t={requestStatus:1,requestTime:Date.now()};return Object.assign(Object.assign({},n),{authToken:t})}function L_(n){return n.requestStatus===1&&n.requestTime+Vl<Date.now()}/**
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
 */async function F_(n){const t=n,{installationEntry:e,registrationPromise:r}=await po(t);return r?r.catch(console.error):mo(t).catch(console.error),e.fid}/**
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
 */async function U_(n,t=!1){const e=n;return await B_(e),(await mo(e,t)).token}async function B_(n){const{registrationPromise:t}=await po(n);t&&await t}/**
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
 */function j_(n){if(!n||!n.options)throw Hs("App Configuration");if(!n.name)throw Hs("App Name");const t=["projectId","apiKey","appId"];for(const e of t)if(!n.options[e])throw Hs(e);return{appName:n.name,projectId:n.options.projectId,apiKey:n.options.apiKey,appId:n.options.appId}}function Hs(n){return Ne.create("missing-app-config-values",{valueName:n})}/**
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
 */const Gl="installations",$_="installations-internal",q_=n=>{const t=n.getProvider("app").getImmediate(),e=j_(t),r=Wn(t,"heartbeat");return{app:t,appConfig:e,heartbeatServiceProvider:r,_delete:()=>Promise.resolve()}},z_=n=>{const t=n.getProvider("app").getImmediate(),e=Wn(t,Gl).getImmediate();return{getId:()=>F_(e),getToken:s=>U_(e,s)}};function H_(){de(new Xt(Gl,q_,"PUBLIC")),de(new Xt($_,z_,"PRIVATE"))}H_();Ut(Pl,ho);Ut(Pl,ho,"esm2017");/**
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
 */const zr="analytics",G_="firebase_id",K_="origin",Q_=60*1e3,W_="https://firebase.googleapis.com/v1alpha/projects/-/apps/{app-id}/webConfig",go="https://www.googletagmanager.com/gtag/js";/**
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
 */const Pt=new Di("@firebase/analytics");/**
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
 */const X_={"already-exists":"A Firebase Analytics instance with the appId {$id}  already exists. Only one Firebase Analytics instance can be created for each appId.","already-initialized":"initializeAnalytics() cannot be called again with different options than those it was initially called with. It can be called again with the same options to return the existing instance, or getAnalytics() can be used to get a reference to the already-initialized instance.","already-initialized-settings":"Firebase Analytics has already been initialized.settings() must be called before initializing any Analytics instanceor it will have no effect.","interop-component-reg-failed":"Firebase Analytics Interop Component failed to instantiate: {$reason}","invalid-analytics-context":"Firebase Analytics is not supported in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}","indexeddb-unavailable":"IndexedDB unavailable or restricted in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}","fetch-throttle":"The config fetch request timed out while in an exponential backoff state. Unix timestamp in milliseconds when fetch request throttling ends: {$throttleEndTimeMillis}.","config-fetch-failed":"Dynamic config fetch failed: [{$httpStatus}] {$responseMessage}","no-api-key":'The "apiKey" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid API key.',"no-app-id":'The "appId" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid app ID.',"no-client-id":'The "client_id" field is empty.',"invalid-gtag-resource":"Trusted Types detected an invalid gtag resource: {$gtagURL}."},kt=new Hr("analytics","Analytics",X_);/**
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
 */function Y_(n){if(!n.startsWith(go)){const t=kt.create("invalid-gtag-resource",{gtagURL:n});return Pt.warn(t.message),""}return n}function Kl(n){return Promise.all(n.map(t=>t.catch(e=>e)))}function J_(n,t){let e;return window.trustedTypes&&(e=window.trustedTypes.createPolicy(n,t)),e}function Z_(n,t){const e=J_("firebase-js-sdk-policy",{createScriptURL:Y_}),r=document.createElement("script"),s=`${go}?l=${n}&id=${t}`;r.src=e?e==null?void 0:e.createScriptURL(s):s,r.async=!0,document.head.appendChild(r)}function ty(n){let t=[];return Array.isArray(window[n])?t=window[n]:window[n]=t,t}async function ey(n,t,e,r,s,o){const a=r[s];try{if(a)await t[a];else{const h=(await Kl(e)).find(d=>d.measurementId===s);h&&await t[h.appId]}}catch(c){Pt.error(c)}n("config",s,o)}async function ny(n,t,e,r,s){try{let o=[];if(s&&s.send_to){let a=s.send_to;Array.isArray(a)||(a=[a]);const c=await Kl(e);for(const h of a){const d=c.find(E=>E.measurementId===h),m=d&&t[d.appId];if(m)o.push(m);else{o=[];break}}}o.length===0&&(o=Object.values(t)),await Promise.all(o),n("event",r,s||{})}catch(o){Pt.error(o)}}function ry(n,t,e,r){async function s(o,...a){try{if(o==="event"){const[c,h]=a;await ny(n,t,e,c,h)}else if(o==="config"){const[c,h]=a;await ey(n,t,e,r,c,h)}else if(o==="consent"){const[c,h]=a;n("consent",c,h)}else if(o==="get"){const[c,h,d]=a;n("get",c,h,d)}else if(o==="set"){const[c]=a;n("set",c)}else n(o,...a)}catch(c){Pt.error(c)}}return s}function sy(n,t,e,r,s){let o=function(...a){window[r].push(arguments)};return window[s]&&typeof window[s]=="function"&&(o=window[s]),window[s]=ry(o,n,t,e),{gtagCore:o,wrappedGtag:window[s]}}function iy(n){const t=window.document.getElementsByTagName("script");for(const e of Object.values(t))if(e.src&&e.src.includes(go)&&e.src.includes(n))return e;return null}/**
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
 */const oy=30,ay=1e3;class uy{constructor(t={},e=ay){this.throttleMetadata=t,this.intervalMillis=e}getThrottleMetadata(t){return this.throttleMetadata[t]}setThrottleMetadata(t,e){this.throttleMetadata[t]=e}deleteThrottleMetadata(t){delete this.throttleMetadata[t]}}const Ql=new uy;function cy(n){return new Headers({Accept:"application/json","x-goog-api-key":n})}async function ly(n){var t;const{appId:e,apiKey:r}=n,s={method:"GET",headers:cy(r)},o=W_.replace("{app-id}",e),a=await fetch(o,s);if(a.status!==200&&a.status!==304){let c="";try{const h=await a.json();!((t=h.error)===null||t===void 0)&&t.message&&(c=h.error.message)}catch{}throw kt.create("config-fetch-failed",{httpStatus:a.status,responseMessage:c})}return a.json()}async function hy(n,t=Ql,e){const{appId:r,apiKey:s,measurementId:o}=n.options;if(!r)throw kt.create("no-app-id");if(!s){if(o)return{measurementId:o,appId:r};throw kt.create("no-api-key")}const a=t.getThrottleMetadata(r)||{backoffCount:0,throttleEndTimeMillis:Date.now()},c=new py;return setTimeout(async()=>{c.abort()},Q_),Wl({appId:r,apiKey:s,measurementId:o},a,c,t)}async function Wl(n,{throttleEndTimeMillis:t,backoffCount:e},r,s=Ql){var o;const{appId:a,measurementId:c}=n;try{await dy(r,t)}catch(h){if(c)return Pt.warn(`Timed out fetching this Firebase app's measurement ID from the server. Falling back to the measurement ID ${c} provided in the "measurementId" field in the local Firebase config. [${h==null?void 0:h.message}]`),{appId:a,measurementId:c};throw h}try{const h=await ly(n);return s.deleteThrottleMetadata(a),h}catch(h){const d=h;if(!fy(d)){if(s.deleteThrottleMetadata(a),c)return Pt.warn(`Failed to fetch this Firebase app's measurement ID from the server. Falling back to the measurement ID ${c} provided in the "measurementId" field in the local Firebase config. [${d==null?void 0:d.message}]`),{appId:a,measurementId:c};throw h}const m=Number((o=d==null?void 0:d.customData)===null||o===void 0?void 0:o.httpStatus)===503?Ca(e,s.intervalMillis,oy):Ca(e,s.intervalMillis),E={throttleEndTimeMillis:Date.now()+m,backoffCount:e+1};return s.setThrottleMetadata(a,E),Pt.debug(`Calling attemptFetch again in ${m} millis`),Wl(n,E,r,s)}}function dy(n,t){return new Promise((e,r)=>{const s=Math.max(t-Date.now(),0),o=setTimeout(e,s);n.addEventListener(()=>{clearTimeout(o),r(kt.create("fetch-throttle",{throttleEndTimeMillis:t}))})})}function fy(n){if(!(n instanceof Ee)||!n.customData)return!1;const t=Number(n.customData.httpStatus);return t===429||t===500||t===503||t===504}class py{constructor(){this.listeners=[]}addEventListener(t){this.listeners.push(t)}abort(){this.listeners.forEach(t=>t())}}async function my(n,t,e,r,s){if(s&&s.global){n("event",e,r);return}else{const o=await t,a=Object.assign(Object.assign({},r),{send_to:o});n("event",e,a)}}/**
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
 */async function gy(){if(Pi())try{await Vi()}catch(n){return Pt.warn(kt.create("indexeddb-unavailable",{errorInfo:n==null?void 0:n.toString()}).message),!1}else return Pt.warn(kt.create("indexeddb-unavailable",{errorInfo:"IndexedDB is not available in this environment."}).message),!1;return!0}async function _y(n,t,e,r,s,o,a){var c;const h=hy(n);h.then(b=>{e[b.measurementId]=b.appId,n.options.measurementId&&b.measurementId!==n.options.measurementId&&Pt.warn(`The measurement ID in the local Firebase config (${n.options.measurementId}) does not match the measurement ID fetched from the server (${b.measurementId}). To ensure analytics events are always sent to the correct Analytics property, update the measurement ID field in the local config or remove it from the local config.`)}).catch(b=>Pt.error(b)),t.push(h);const d=gy().then(b=>{if(b)return r.getId()}),[m,E]=await Promise.all([h,d]);iy(o)||Z_(o,m.measurementId),s("js",new Date);const I=(c=a==null?void 0:a.config)!==null&&c!==void 0?c:{};return I[K_]="firebase",I.update=!0,E!=null&&(I[G_]=E),s("config",m.measurementId,I),m.measurementId}/**
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
 */class yy{constructor(t){this.app=t}_delete(){return delete Fn[this.app.options.appId],Promise.resolve()}}let Fn={},Ou=[];const Mu={};let Gs="dataLayer",Ey="gtag",Lu,Xl,Fu=!1;function Ty(){const n=[];if(Qu()&&n.push("This is a browser extension environment."),Wu()||n.push("Cookies are not available."),n.length>0){const t=n.map((r,s)=>`(${s+1}) ${r}`).join(" "),e=kt.create("invalid-analytics-context",{errorInfo:t});Pt.warn(e.message)}}function vy(n,t,e){Ty();const r=n.options.appId;if(!r)throw kt.create("no-app-id");if(!n.options.apiKey)if(n.options.measurementId)Pt.warn(`The "apiKey" field is empty in the local Firebase config. This is needed to fetch the latest measurement ID for this Firebase app. Falling back to the measurement ID ${n.options.measurementId} provided in the "measurementId" field in the local Firebase config.`);else throw kt.create("no-api-key");if(Fn[r]!=null)throw kt.create("already-exists",{id:r});if(!Fu){ty(Gs);const{wrappedGtag:o,gtagCore:a}=sy(Fn,Ou,Mu,Gs,Ey);Xl=o,Lu=a,Fu=!0}return Fn[r]=_y(n,Ou,Mu,t,Lu,Gs,e),new yy(n)}function Iy(n=tc()){n=Wt(n);const t=Wn(n,zr);return t.isInitialized()?t.getImmediate():wy(n)}function wy(n,t={}){const e=Wn(n,zr);if(e.isInitialized()){const s=e.getImmediate();if(Ye(t,e.getOptions()))return s;throw kt.create("already-initialized")}return e.initialize({options:t})}async function Ay(){if(Qu()||!Wu()||!Pi())return!1;try{return await Vi()}catch{return!1}}function Ry(n,t,e,r){n=Wt(n),my(Xl,Fn[n.app.options.appId],t,e,r).catch(s=>Pt.error(s))}const Uu="@firebase/analytics",Bu="0.10.16";function by(){de(new Xt(zr,(t,{options:e})=>{const r=t.getProvider("app").getImmediate(),s=t.getProvider("installations-internal").getImmediate();return vy(r,s,e)},"PUBLIC")),de(new Xt("analytics-internal",n,"PRIVATE")),Ut(Uu,Bu),Ut(Uu,Bu,"esm2017");function n(t){try{const e=t.getProvider(zr).getImmediate();return{logEvent:(r,s,o)=>Ry(e,r,s,o)}}catch(e){throw kt.create("interop-component-reg-failed",{reason:e})}}}by();const Cy={apiKey:"AIzaSyCm0mKPc_8_Tc1NzGWDbBYOpIKzBkglozs",authDomain:"portflio-a5b10.firebaseapp.com",projectId:"portflio-a5b10",storageBucket:"portflio-a5b10.firebasestorage.app",messagingSenderId:"1040313084668",appId:"1:1040313084668:web:68004bcaa079c235c58579",measurementId:"G-9ZWLDK4XN3"},Yl=Zu(Cy),Sy=Bg(Yl);Ay().then(n=>{n&&Iy(Yl)});const Oy=()=>{const n=Uh.c(1);let t;return n[0]===Symbol.for("react.memo_cache_sentinel")?(t={queryKey:["about"],queryFn:Py},n[0]=t):t=n[0],td(t)};async function Py(){const n=Ug(Sy,"users","Abdallah_Alqiran"),t=await e_(n);if(!t.exists())throw new Error("Document not found");return t.data()}export{Sy as a,Ny as b,xy as c,Ug as d,Oy as u};
