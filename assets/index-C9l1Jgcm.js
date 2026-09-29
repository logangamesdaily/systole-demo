(function(){let e=document.createElement(`link`).relList;if(e&&e.supports&&e.supports(`modulepreload`))return;for(let e of document.querySelectorAll(`link[rel="modulepreload"]`))n(e);new MutationObserver(e=>{for(let t of e)if(t.type===`childList`)for(let e of t.addedNodes)e.tagName===`LINK`&&e.rel===`modulepreload`&&n(e)}).observe(document,{childList:!0,subtree:!0});function t(e){let t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),t.credentials=e.crossOrigin===`use-credentials`?`include`:e.crossOrigin===`anonymous`?`omit`:`same-origin`,t}function n(e){if(e.ep)return;e.ep=!0;let n=t(e);fetch(e.href,n)}})();var e=Array.isArray,t=Array.prototype.indexOf,n=Array.prototype.includes,r=Array.from,i=Object.defineProperty,a=Object.getOwnPropertyDescriptor,o=Object.getOwnPropertyDescriptors,s=Object.prototype,c=Array.prototype,l=Object.getPrototypeOf,u=Object.isExtensible,d=()=>{};function f(e){return e()}function p(e){for(var t=0;t<e.length;t++)e[t]()}function m(){var e,t;return{promise:new Promise((n,r)=>{e=n,t=r}),resolve:e,reject:t}}var h=1024,g=2048,_=4096,v=8192,y=16384,b=32768,x=1<<25,S=65536,ee=1<<19,te=1<<20,ne=1<<25,re=65536,ie=1<<21,ae=1<<22,oe=1<<23,se=Symbol(`$state`),ce=Symbol(`component`),le=Symbol(`legacy props`),ue=Symbol(``),de=Symbol(`attributes`),fe=Symbol(`class`),pe=Symbol(`style`),me=Symbol(`text`),he=new class extends Error{name=`StaleReactionError`;message="The reaction that called `getAbortSignal()` was re-run or destroyed"},ge=!!globalThis.document?.contentType&&globalThis.document.contentType.includes(`xml`),_e={},C=Symbol(`uninitialized`),ve=`http://www.w3.org/1999/xhtml`;function ye(){console.warn(`https://svelte.dev/e/derived_inert`)}function be(e){console.warn(`https://svelte.dev/e/hydration_mismatch`)}function xe(){console.warn(`https://svelte.dev/e/svelte_boundary_reset_noop`)}var w=!1;function Se(e){w=e}var T;function E(e){if(e===null)throw be(),_e;return T=e}function Ce(){return E(Qt(T))}function D(e){if(w){if(Qt(T)!==null)throw be(),_e;T=e}}function we(e=1){if(w){for(var t=e,n=T;t--;)n=Qt(n);T=n}}function Te(e=!0){for(var t=0,n=T;;){if(n.nodeType===8){var r=n.data;if(r===`]`){if(t===0)return n;--t}else(r===`[`||r===`[!`||r[0]===`[`&&!isNaN(Number(r.slice(1))))&&(t+=1)}var i=Qt(n);e&&n.remove(),n=i}}function Ee(e){if(!e||e.nodeType!==8)throw be(),_e;return e.data}function De(e){return e===this.v}function Oe(e,t){return e==e?e!==t||typeof e==`object`&&!!e||typeof e==`function`:t==t}function ke(e){return!Oe(e,this.v)}function Ae(e){throw Error(`https://svelte.dev/e/lifecycle_outside_component`)}function je(){throw Error(`https://svelte.dev/e/async_derived_orphan`)}function Me(e,t,n){throw Error(`https://svelte.dev/e/each_key_duplicate`)}function Ne(e){throw Error(`https://svelte.dev/e/effect_in_teardown`)}function Pe(){throw Error(`https://svelte.dev/e/effect_in_unowned_derived`)}function Fe(e){throw Error(`https://svelte.dev/e/effect_orphan`)}function Ie(){throw Error(`https://svelte.dev/e/effect_update_depth_exceeded`)}function Le(e){throw Error(`https://svelte.dev/e/props_invalid_value`)}function Re(){throw Error(`https://svelte.dev/e/state_descriptors_fixed`)}function ze(){throw Error(`https://svelte.dev/e/state_prototype_fixed`)}function Be(){throw Error(`https://svelte.dev/e/state_unsafe_mutation`)}function Ve(){throw Error(`https://svelte.dev/e/svelte_boundary_reset_onerror`)}var He=!1;function Ue(){He=!0}var O=null;function We(e){O=e}function Ge(e,t=!1,n){O={p:O,i:!1,c:null,e:null,s:e,x:null,r:H,l:He&&!t?{s:null,u:null,$:[]}:null}}function Ke(e){var t=O,n=t.e;if(n!==null){t.e=null;for(var r of n)mn(r)}return e!==void 0&&(t.x=e),t.i=!0,O=t.p,qe(e)}function qe(e={}){return i(e,ce,{value:!0}),e}function Je(){return!He||O!==null&&O.l===null}var Ye=[];function Xe(){var e=Ye;Ye=[],p(e)}function Ze(e){if(Ye.length===0&&!St){var t=Ye;queueMicrotask(()=>{t===Ye&&Xe()})}Ye.push(e)}function Qe(){for(;Ye.length>0;)Xe()}var $e=~(g|_|h);function k(e,t){e.f=e.f&$e|t}function et(e){e.f&512||e.deps===null?k(e,h):k(e,_)}function tt(e){if(e!==null)for(let t of e)!(t.f&2)||!(t.f&65536)||(t.f^=re,tt(t.deps))}function nt(e,t,n){e.f&2048?t.add(e):e.f&4096&&n.add(e),tt(e.deps),k(e,h)}var rt=!1;function it(e){var t=rt;try{return rt=!1,[e(),rt]}finally{rt=t}}function at(e){var t=z,n=H;V(null),In(null);try{return e()}finally{V(t),In(n)}}function ot(e,t,n,r){let i=Je()?ut:pt;var a=e.filter(e=>!e.settled),o=t.map(i);if(n.length===0&&a.length===0){r(o);return}var s=H,c=st(),l=a.length===1?a[0].promise:a.length>1?Promise.all(a.map(e=>e.promise)):null;function u(e){if(!(s.f&16384)){c();try{r([...o,...e])}catch(e){sn(e,s)}ct()}}var d=lt();if(n.length===0){l.then(()=>u([])).finally(d);return}function f(){Promise.all(n.map(e=>ft(e))).then(u).catch(e=>sn(e,s)).finally(d)}l?l.then(()=>{c(),f(),ct()}):f()}function st(){var e=H,t=z,n=O,r=A;return function(i=!0){In(e),V(t),We(n),i&&!(e.f&16384)&&(r?.activate(),r?.apply())}}function ct(e=!0){In(null),V(null),We(null),e&&A?.deactivate()}function lt(){var e=H,t=e.b,n=A,r=!!t?.is_rendered();return t?.update_pending_count(1,n),n.increment(r,e),()=>{t?.update_pending_count(-1,n),n.decrement(r,e)}}function ut(e){var t=2|g;return H!==null&&(H.f|=ee),{ctx:O,deps:null,effects:null,equals:De,f:t,fn:e,reactions:null,rv:0,v:C,wv:0,parent:H,ac:null}}var dt=Symbol(`obsolete`);function ft(e,t,n){let r=H;r===null&&je();var i=void 0,a=zt(C),o=!z,s=new Set;return vn(()=>{var t=H,n=m();i=n.promise;try{Promise.resolve(e()).then(n.resolve,e=>{e!==he&&n.reject(e)}).finally(ct)}catch(e){n.reject(e),ct()}var c=A;if(o){if(t.f&32768)var l=lt();if(r.b?.is_rendered())c.async_deriveds.get(t)?.reject(dt);else for(let e of s.values())e.reject(dt);s.add(n),c.async_deriveds.set(t,n)}let u=(e,t=void 0)=>{l?.(),s.delete(n),t!==dt&&(c.activate(),t?(a.f|=oe,Vt(a,t)):(a.f&8388608&&(a.f^=oe),Vt(a,e)),c.deactivate())};n.promise.then(u,e=>u(null,e||`unknown`))}),fn(()=>{for(let e of s)e.reject(dt)}),new Promise(e=>{function t(n){function r(){n===i?e(a):t(i)}n.then(r,r)}t(i)})}function pt(e){let t=ut(e);return t.equals=ke,t}function mt(e){var t=e.effects;if(t!==null){e.effects=null;for(var n=0;n<t.length;n+=1)R(t[n])}}function ht(e){var t,n=H,r=e.parent;if(!Pn&&r!==null&&e.v!==C&&r.f&24576)return ye(),e.v;In(r);try{e.f&=~re,mt(e),t=qn(e)}finally{In(n)}return t}function gt(e){var t=ht(e);if(!e.equals(t)&&(e.wv=Wn(),(!A?.is_fork||e.deps===null)&&(A===null?e.v=t:(A.capture(e,t,!0),bt?.capture(e,t,!0)),e.deps===null))){k(e,h);return}Pn||(j===null?et(e):(dn()||A?.is_fork)&&j.set(e,t))}function _t(e){if(e.effects!==null)for(let t of e.effects)(t.teardown||t.ac)&&(t.teardown?.(),t.ac!==null&&at(()=>{t.ac.abort(he),t.ac=null}),t.fn!==null&&(t.teardown=d),Xn(t,0),Cn(t))}function vt(e){if(e.effects!==null)for(let t of e.effects)t.teardown&&t.fn!==null&&Zn(t)}var yt=null,A=null,bt=null,j=null,xt=null,St=!1,Ct=!1,wt=null,Tt=null,Et=0,Dt=1,Ot=class e{id=Dt++;#e=!1;linked=!0;#t=null;#n=null;async_deriveds=new Map;current=new Map;previous=new Map;#r=new Set;#i=new Set;#a=0;#o=new Map;#s=null;#c=[];#l=[];#u=new Set;#d=new Set;#f=new Map;#p=new Set;is_fork=!1;#m=!1;constructor(){yt===null?yt=this:(yt.#n=this,this.#t=yt),yt=this}#h(){if(this.is_fork)return!0;for(let n of this.#o.keys()){for(var e=n,t=!1;e.parent!==null;){if(this.#f.has(e)){t=!0;break}e=e.parent}if(!t)return!0}return!1}skip_effect(e){this.#f.has(e)||this.#f.set(e,{d:[],m:[]}),this.#p.delete(e)}unskip_effect(e,t=e=>this.schedule(e)){var n=this.#f.get(e);if(n){this.#f.delete(e);for(var r of n.d)k(r,g),t(r);for(r of n.m)k(r,_),t(r)}this.#p.add(e)}#g(){this.#e=!0,Et++>1e3&&(this.#x(),At());for(let e of this.#u)this.#d.delete(e),k(e,g),this.schedule(e);for(let e of this.#d)k(e,_),this.schedule(e);let t=this.#c;this.#c=[],this.apply();var n=wt=[],r=[],i=Tt=[];for(let e of t)try{this.#_(e,n,r)}catch(t){throw Ft(e),this.#h()||this.discard(),t}if(A=null,i.length>0){var a=e.ensure();for(let e of i)a.schedule(e)}if(wt=null,Tt=null,this.#h()){this.#b(r),this.#b(n);for(let[e,t]of this.#f)Pt(e,t);i.length>0&&A.#g();return}let o=this.#v();if(o){this.#b(r),this.#b(n),o.#y(this);return}this.#u.clear(),this.#d.clear();for(let e of this.#r)e(this);this.#r.clear(),bt=this,Mt(r),Mt(n),bt=null,this.#s?.resolve();var s=A;if(this.#a===0&&(this.#c.length===0||s!==null)&&this.#x(),this.#c.length>0){if(s!==null){let e=s;e.#c.push(...this.#c.filter(t=>!e.#c.includes(t)))}else s=this}s!==null&&(Lt.clear(),s.#g())}#_(e,t,n){e.f^=h;for(var r=e.first;r!==null;){var i=r.f,a=!!(i&96);if(!(a&&i&1024||i&8192||this.#f.has(r))&&r.fn!==null){a?r.f^=h:i&4?t.push(r):Gn(r)&&(i&16&&this.#d.add(r),Zn(r));var o=r.first;if(o!==null){r=o;continue}}for(;r!==null;){var s=r.next;if(s!==null){r=s;break}r=r.parent}}}#v(){for(var e=this.#t;e!==null;){if(!e.is_fork){for(let[t,[,n]]of this.current)if(e.current.has(t)&&!n)return e}e=e.#t}return null}#y(e){for(let[t,n]of e.current)!this.previous.has(t)&&e.previous.has(t)&&this.previous.set(t,e.previous.get(t)),this.current.set(t,n);for(let[t,n]of e.async_deriveds){let e=this.async_deriveds.get(t);e&&n.promise.then(e.resolve).catch(e.reject)}e.async_deriveds.clear(),this.transfer_effects(e.#u,e.#d);let t=e=>{var n=e.reactions;if(n!==null&&!(e.f&2&&!(e.f&6144)))for(let e of n){var r=e.f;if(r&2)t(e);else{var i=e;r&4194320&&!this.async_deriveds.has(i)&&(this.#d.delete(i),k(i,g),this.schedule(i))}}};for(let e of this.current.keys())t(e);this.oncommit(()=>e.discard()),e.#x(),A=this,this.#g()}#b(e){for(var t=0;t<e.length;t+=1)nt(e[t],this.#u,this.#d)}capture(e,t,n=!1){e.v!==C&&!this.previous.has(e)&&this.previous.set(e,e.v),e.f&8388608||(this.current.set(e,[t,n]),j?.set(e,t)),this.is_fork||(e.v=t)}activate(){A=this}deactivate(){A=null,j=null}flush(){try{Ct=!0,A=this,this.#g()}finally{Et=0,xt=null,wt=null,Tt=null,Ct=!1,A=null,j=null,Lt.clear()}}discard(){for(let e of this.#i)e(this);this.#i.clear();for(let e of this.async_deriveds.values())e.reject(dt);this.#x(),this.#s?.resolve()}register_created_effect(e){this.#l.push(e)}increment(e,t){if(this.#a+=1,e){let e=this.#o.get(t)??0;this.#o.set(t,e+1)}}decrement(e,t){if(--this.#a,e){let e=this.#o.get(t)??0;e===1?this.#o.delete(t):this.#o.set(t,e-1)}this.#m||(this.#m=!0,Ze(()=>{this.#m=!1,this.linked&&this.flush()}))}transfer_effects(e,t){for(let t of e)this.#u.add(t);for(let e of t)this.#d.add(e);e.clear(),t.clear()}oncommit(e){this.#r.add(e)}ondiscard(e){this.#i.add(e)}settled(){return(this.#s??=m()).promise}static ensure(){if(A===null){let t=A=new e;!Ct&&!St&&Ze(()=>{t.#e||t.flush()})}return A}apply(){j=null}schedule(e){if(xt=e,e.b?.is_pending&&e.f&16777228&&!(e.f&32768)){e.b.defer_effect(e);return}for(var t=e;t.parent!==null;){t=t.parent;var n=t.f;if(wt!==null&&t===H&&(z===null||!(z.f&2)))return;if(n&96){if(!(n&1024))return;t.f^=h}}this.#c.push(t)}#x(){if(this.linked){var e=this.#t,t=this.#n;e===null||(e.#n=t),t===null?yt=e:t.#t=e,this.linked=!1}}};function kt(e){var t=St;St=!0;try{var n;for(e&&(A!==null&&!A.is_fork&&A.flush(),n=e());;){if(Qe(),A===null)return n;A.flush()}}finally{St=t}}function At(){try{Ie()}catch(e){sn(e,xt)}}var jt=null;function Mt(e){var t=e.length;if(t!==0){for(var n=0;n<t;){var r=e[n++];if(!(r.f&24576)&&Gn(r)&&(jt=new Set,Zn(r),r.deps===null&&r.first===null&&r.nodes===null&&r.teardown===null&&r.ac===null&&En(r),jt?.size>0)){Lt.clear();for(let e of jt){if(e.f&24576)continue;let t=[e],n=e.parent;for(;n!==null;)jt.has(n)&&(jt.delete(n),t.push(n)),n=n.parent;for(let e=t.length-1;e>=0;e--){let n=t[e];n.f&24576||Zn(n)}}jt.clear()}}jt=null}}function Nt(e){A.schedule(e)}function Pt(e,t){if(!(e.f&32&&e.f&1024)){e.f&2048?t.d.push(e):e.f&4096&&t.m.push(e),k(e,h);for(var n=e.first;n!==null;)Pt(n,t),n=n.next}}function Ft(e){k(e,h);for(var t=e.first;t!==null;)Ft(t),t=t.next}var It=new Set,Lt=new Map,Rt=!1;function zt(e,t){return{f:0,v:e,reactions:null,equals:De,rv:0,wv:0}}function Bt(e,t){let n=zt(e,t);return Rn(n),n}function M(e,t=!1,n=!0){let r=zt(e);return t||(r.equals=ke),He&&n&&O!==null&&O.l!==null&&(O.l.s??=[]).push(r),r}function N(e,t,n=!1){return z!==null&&(!B||z.f&131072)&&Je()&&z.f&4325394&&(Ln===null||!Ln.has(e))&&Be(),Vt(e,n?Gt(t):t,Tt)}function Vt(e,t,n=null){if(!e.equals(t)){Pn?Lt.set(e,t):Lt.has(e)||Lt.set(e,e.v);var r=Ot.ensure();if(r.capture(e,t),e.f&2){let t=e;e.f&2048&&ht(t),j===null&&et(t)}e.wv=Wn(),Wt(e,g,n),Je()&&H!==null&&H.f&1024&&!(H.f&96)&&(G===null?zn([e]):G.push(e)),!r.is_fork&&It.size>0&&!Rt&&Ht()}return t}function Ht(){Rt=!1;for(let e of It){e.f&1024&&k(e,_);let t;try{t=Gn(e)}catch{t=!0}t&&Zn(e)}It.clear()}function Ut(e){N(e,e.v+1)}function Wt(e,t,n){var r=e.reactions;if(r!==null)for(var i=Je(),a=r.length,o=0;o<a;o++){var s=r[o],c=s.f;if(!(!i&&s===H)){var l=(c&g)===0;if(l&&k(s,t),c&131072)It.add(s);else if(c&2){var u=s;j?.delete(u),c&65536||(c&512&&(H===null||!(H.f&2097152))&&(s.f|=re),Wt(u,_,n))}else if(l){var d=s;c&16&&jt!==null&&jt.add(d),n===null?Nt(d):n.push(d)}}}}function Gt(t){if(typeof t!=`object`||!t||se in t||ce in t)return t;let n=l(t);if(n!==s&&n!==c)return t;var r=new Map,i=e(t),o=Bt(0),u=null,d=Hn,f=e=>{if(Hn===d)return e();var t=z,n=Hn;V(null),Un(d);var r=e();return V(t),Un(n),r};return i&&r.set(`length`,Bt(t.length,u)),new Proxy(t,{defineProperty(e,t,n){(!(`value`in n)||n.configurable===!1||n.enumerable===!1||n.writable===!1)&&Re();var i=r.get(t);return i===void 0?f(()=>{var e=Bt(n.value,u);return r.set(t,e),e}):N(i,n.value,!0),!0},deleteProperty(e,t){var n=r.get(t);if(n===void 0){if(t in e){let e=f(()=>Bt(C,u));r.set(t,e),Ut(o)}}else N(n,C),Ut(o);return!0},get(e,n,i){if(n===se)return t;var o=r.get(n),s=n in e;if(o===void 0&&(!s||a(e,n)?.writable)&&(o=f(()=>Bt(Gt(s?e[n]:C),u)),r.set(n,o)),o!==void 0){var c=K(o);return c===C?void 0:c}return Reflect.get(e,n,i)},getOwnPropertyDescriptor(e,t){var n=Reflect.getOwnPropertyDescriptor(e,t);if(n&&`value`in n){var i=r.get(t);i&&(n.value=K(i))}else if(n===void 0){var a=r.get(t),o=a?.v;if(a!==void 0&&o!==C)return{enumerable:!0,configurable:!0,value:o,writable:!0}}return n},has(e,t){if(t===se)return!0;var n=r.get(t),i=n!==void 0&&n.v!==C||Reflect.has(e,t);return(n!==void 0||H!==null&&(!i||a(e,t)?.writable))&&(n===void 0&&(n=f(()=>Bt(i?Gt(e[t]):C,u)),r.set(t,n)),K(n)===C)?!1:i},set(e,t,n,s){var c=r.get(t),l=t in e;if(i&&t===`length`)for(var d=n;d<c.v;d+=1){var p=r.get(d+``);p===void 0?d in e&&(p=f(()=>Bt(C,u)),r.set(d+``,p)):N(p,C)}if(c===void 0)(!l||a(e,t)?.writable)&&(c=f(()=>Bt(void 0,u)),N(c,Gt(n)),r.set(t,c));else{l=c.v!==C;var m=f(()=>Gt(n));N(c,m)}var h=Reflect.getOwnPropertyDescriptor(e,t);if(h?.set&&h.set.call(s,n),!l){if(i&&typeof t==`string`){var g=r.get(`length`),_=Number(t);Number.isInteger(_)&&_>=g.v&&N(g,_+1)}Ut(o)}return!0},ownKeys(e){K(o);var t=Reflect.ownKeys(e).filter(e=>{var t=r.get(e);return t===void 0||t.v!==C});for(var[n,i]of r)i.v!==C&&!(n in e)&&t.push(n);return t},setPrototypeOf(){ze()}})}var Kt,qt,Jt,Yt;function Xt(){if(Kt===void 0){Kt=window,qt=/Firefox/.test(navigator.userAgent);var e=Element.prototype,t=Node.prototype,n=Text.prototype;Jt=a(t,`firstChild`).get,Yt=a(t,`nextSibling`).get,u(e)&&(e[fe]=void 0,e[de]=null,e[pe]=void 0,e.__e=void 0),u(n)&&(n[me]=void 0)}}function P(e=``){return document.createTextNode(e)}function Zt(e){return Jt.call(e)}function Qt(e){return Yt.call(e)}function F(e,t){if(!w)return Zt(e);var n=Zt(T);if(n===null)n=T.appendChild(P());else if(t&&n.nodeType!==3){var r=P();return n?.before(r),E(r),r}return t&&an(n),E(n),n}function $t(e,t=!1){if(!w){var n=Zt(e);return n instanceof Comment&&n.data===``?Qt(n):n}if(t){if(T?.nodeType!==3){var r=P();return T?.before(r),E(r),r}an(T)}return T}function en(e,t=!1){if(!w)return Zt(e);var n=F(e,t);return D(e),n}function I(e,t=1,n=!1){let r=w?T:e;for(var i;t--;)i=r,r=Qt(r);if(!w)return r;if(n){if(r?.nodeType!==3){var a=P();return r===null?i?.after(a):r.before(a),E(a),a}an(r)}return E(r),r}function tn(e){e.textContent=``}function nn(){return!1}function rn(e,t,n){return t==null||t===`http://www.w3.org/1999/xhtml`?n?document.createElement(e,{is:n}):document.createElement(e):n?document.createElementNS(t,e,{is:n}):document.createElementNS(t,e)}function an(e){if(e.nodeValue.length<65536)return;let t=e.nextSibling;for(;t!==null&&t.nodeType===3;)t.remove(),e.nodeValue+=t.nodeValue,t=e.nextSibling}function on(e){var t=H;if(t===null)return z.f|=oe,e;if(!(t.f&32768)&&!(t.f&4))throw e;sn(e,t)}function sn(e,t){if(!(t!==null&&t.f&16384)){for(;t!==null;){if(t.f&128&&!(t.f&33570816)){if(!(t.f&32768))throw e;try{t.b.error(e);return}catch(t){e=t}}t=t.parent}throw e}}function cn(e){H===null&&(z===null&&Fe(e),Pe()),Pn&&Ne(e)}function ln(e,t){var n=t.last;n===null?t.last=t.first=e:(n.next=e,e.prev=n,t.last=e)}function un(e,t){var n=H;n!==null&&n.f&8192&&(e|=v);var r={ctx:O,deps:null,nodes:null,f:e|g|512,first:null,fn:t,last:null,next:null,parent:n,b:n&&n.b,prev:null,teardown:null,wv:0,ac:null};A?.register_created_effect(r);var i=r;if(e&4)wt===null?Ot.ensure().schedule(r):wt.push(r);else if(t!==null){try{Zn(r)}catch(e){throw R(r),e}i.deps===null&&i.teardown===null&&i.nodes===null&&i.first===i.last&&!(i.f&524288)&&(i=i.first,e&16&&e&65536&&i!==null&&(i.f|=S))}if(i!==null&&(i.parent=n,n!==null&&ln(i,n),z!==null&&z.f&2&&!(e&64))){var a=z;(a.effects??=[]).push(i)}return r}function dn(){return z!==null&&!B}function fn(e){let t=un(8,null);return k(t,h),t.teardown=e,t}function pn(e){cn(`$effect`);var t=H.f;if(!z&&t&32&&O!==null&&!O.i){var n=O;(n.e??=[]).push(e)}else return mn(e)}function mn(e){return un(4|te,e)}function hn(e){return cn(`$effect.pre`),un(8|te,e)}function gn(e){Ot.ensure();let t=un(64|ee,e);return(e={})=>new Promise(n=>{e.outro?Dn(t,()=>{R(t),n(void 0)}):(R(t),n(void 0))})}function _n(e){return un(4,e)}function vn(e){return un(ae|ee,e)}function yn(e,t=0){return un(8|t,e)}function bn(e,t=[],n=[],r=[]){ot(r,t,n,t=>{un(8,()=>{e(...t.map(K))})})}function xn(e,t=0){return un(16|t,e)}function L(e){return un(32|ee,e)}function Sn(e){var t=e.teardown;if(t!==null){let n=Pn,r=z;Fn(!0),V(null);try{t.call(null)}catch(t){sn(t,e.parent)}finally{Fn(n),V(r)}}}function Cn(e,t=!1){var n=e.first;for(e.first=e.last=null;n!==null;){let e=n.ac;e!==null&&at(()=>{e.abort(he)});var r=n.next;n.f&64?n.parent=null:R(n,t),n=r}}function wn(e){for(var t=e.first;t!==null;){var n=t.next;t.f&32||R(t),t=n}}function R(e,t=!0){var n=!1;(t||e.f&262144)&&e.nodes!==null&&e.nodes.end!==null&&(Tn(e.nodes.start,e.nodes.end),n=!0),e.f|=x,Cn(e,t&&!n),Xn(e,0);var r=e.nodes&&e.nodes.t;if(r!==null)for(let e of r)e.stop();Sn(e),e.f^=x,e.f|=y;var i=e.parent;i!==null&&i.first!==null&&En(e),e.next=e.prev=e.teardown=e.ctx=e.deps=e.fn=e.nodes=e.ac=e.b=null}function Tn(e,t){for(;e!==null;){var n=e===t?null:Qt(e);e.remove(),e=n}}function En(e){var t=e.parent,n=e.prev,r=e.next;n!==null&&(n.next=r),r!==null&&(r.prev=n),t!==null&&(t.first===e&&(t.first=r),t.last===e&&(t.last=n))}function Dn(e,t,n=!0){var r=[];e.f|=256,On(e,r,!0);var i=()=>{n&&R(e),t&&t()},a=r.length;if(a>0){var o=()=>--a||i();for(var s of r)s.out(o)}else i()}function On(e,t,n){if(!(e.f&8192)){e.f^=v;var r=e.nodes&&e.nodes.t;if(r!==null)for(let e of r)(e.is_global||n)&&t.push(e);for(var i=e.first;i!==null;){var a=i.next;if(!(i.f&64)){var o=!!(i.f&65536)||!!(i.f&32)&&!!(e.f&16);On(i,t,o?n:!1)}i=a}}}function kn(e){e.f&=-257,An(e,!0)}function An(e,t){if(!(e.f&256)&&e.f&8192){e.f^=v,e.f&1024||(k(e,g),Ot.ensure().schedule(e));for(var n=e.first;n!==null;){var r=n.next,i=!!(n.f&65536)||!!(n.f&32);An(n,i?t:!1),n=r}var a=e.nodes&&e.nodes.t;if(a!==null)for(let e of a)(e.is_global||t)&&e.in()}}function jn(e,t){if(e.nodes)for(var n=e.nodes.start,r=e.nodes.end;n!==null;){var i=n===r?null:Qt(n);t.append(n),n=i}}var Mn=null,Nn=!1,Pn=!1;function Fn(e){Pn=e}var z=null,B=!1;function V(e){z=e}var H=null;function In(e){H=e}var Ln=null;function Rn(e){z!==null&&(Ln??=new Set).add(e)}var U=null,W=0,G=null;function zn(e){G=e}var Bn=1,Vn=0,Hn=Vn;function Un(e){Hn=e}function Wn(){return++Bn}function Gn(e){var t=e.f;if(t&2048)return!0;if(t&2&&(e.f&=~re),t&4096){for(var n=e.deps,r=n.length,i=0;i<r;i++){var a=n[i];if(Gn(a)&&gt(a),a.wv>e.wv)return!0}t&512&&j===null&&k(e,h)}return!1}function Kn(e,t,n=!0){var r=e.reactions;if(r!==null&&!(Ln!==null&&Ln.has(e)))for(var i=0;i<r.length;i++){var a=r[i];a.f&2?Kn(a,t,!1):t===a&&(n?k(a,g):a.f&1024&&k(a,_),Nt(a))}}function qn(e){var t=U,n=W,r=G,i=z,a=Ln,o=O,s=B,c=Hn,l=e.f;U=null,W=0,G=null,z=l&96?null:e,Ln=null,We(e.ctx),B=!1,Hn=++Vn,e.ac!==null&&(at(()=>{e.ac.abort(he)}),e.ac=null);try{e.f|=ie;var u=e.fn,d=u();e.f|=b;var f=Jn(e);if(Je()&&G!==null&&!B&&f!==null&&!(e.f&6146))for(var p=0;p<G.length;p++)Kn(G[p],e);if(i!==null&&i!==e){if(Vn++,i.deps!==null)for(let e=0;e<n;e+=1)i.deps[e].rv=Vn;if(t!==null)for(let e of t)e.rv=Vn;G!==null&&(r===null?r=G:r.push(...G))}return e.f&8388608&&(e.f^=oe),d}catch(t){return Jn(e),on(t)}finally{e.f^=ie,U=t,W=n,G=r,z=i,Ln=a,We(o),B=s,Hn=c}}function Jn(e){var t=e.deps,n=A?.is_fork;if(U!==null){var r;if(n||Xn(e,W),t!==null&&W>0)for(t.length=W+U.length,r=0;r<U.length;r++)t[W+r]=U[r];else e.deps=t=U;if(dn()&&e.f&512)for(r=W;r<t.length;r++)(t[r].reactions??=[]).push(e)}else!n&&t!==null&&W<t.length&&(Xn(e,W),t.length=W);return t}function Yn(e,r){let i=r.reactions;if(i!==null){var a=t.call(i,e);if(a!==-1){var o=i.length-1;o===0?i=r.reactions=null:(i[a]=i[o],i.pop())}}if(i===null&&r.f&2&&(U===null||!n.call(U,r))){var s=r;s.f&512&&(s.f^=512,s.f&=~re),s.v!==C&&et(s),s.ac!==null&&at(()=>{s.ac.abort(he),s.ac=null,k(s,g)}),_t(s),Xn(s,0)}}function Xn(e,t){var n=e.deps;if(n!==null)for(var r=t;r<n.length;r++)Yn(e,n[r])}function Zn(e){var t=e.f;if(!(t&16384)){k(e,h);var n=H,r=Nn;H=e,Nn=!(t&96);try{t&16777232?wn(e):Cn(e),Sn(e);var i=qn(e);e.teardown=typeof i==`function`?i:null,e.wv=Bn}finally{Nn=r,H=n}}}async function Qn(){await Promise.resolve(),kt()}function K(e){var t=!!(e.f&2);if(Mn?.add(e),z!==null&&!B&&!(H!==null&&H.f&16384)&&(Ln===null||!Ln.has(e))){var r=z.deps;if(z.f&2097152)e.rv<Vn&&(e.rv=Vn,U===null&&r!==null&&r[W]===e?W++:U===null?U=[e]:U.push(e));else{z.deps??=[],n.call(z.deps,e)||z.deps.push(e);var i=e.reactions;i===null?e.reactions=[z]:n.call(i,z)||i.push(z)}}if(Pn&&Lt.has(e))return Lt.get(e);if(t){var a=e;if(Pn){var o=a.v;return(!(a.f&1024)&&a.reactions!==null||er(a))&&(o=ht(a)),Lt.set(a,o),o}var s=!(a.f&512)&&!B&&z!==null&&(Nn||!!(z.f&512)),c=(a.f&b)===0;Gn(a)&&(s&&(a.f|=512),gt(a)),s&&!c&&(vt(a),$n(a))}if(j?.has(e))return j.get(e);if(e.f&8388608)throw e.v;return e.v}function $n(e){if(e.f|=512,e.deps!==null)for(let t of e.deps)(t.reactions??=[]).push(e),t.f&2&&!(t.f&512)&&(vt(t),$n(t))}function er(e){if(e.v===C)return!0;if(e.deps===null)return!1;for(let t of e.deps)if(Lt.has(t)||t.f&2&&er(t))return!0;return!1}function q(e){var t=B;try{return B=!0,e()}finally{B=t}}function tr(e){if(!(typeof e!=`object`||!e||e instanceof EventTarget)){if(se in e)nr(e);else if(!Array.isArray(e))for(let t in e){let n=e[t];typeof n==`object`&&n&&se in n&&nr(n)}}}function nr(e,t=new Set){if(typeof e==`object`&&e&&!(e instanceof EventTarget)&&!t.has(e)){t.add(e),e instanceof Date&&e.getTime();for(let n in e)try{nr(e[n],t)}catch{}let n=l(e);if(n!==Object.prototype&&n!==Array.prototype&&n!==Map.prototype&&n!==Set.prototype&&n!==Date.prototype){let t=o(n);for(let n in t){let r=t[n].get;if(r)try{r.call(e)}catch{}}}}}[...`allowfullscreen.async.autofocus.autoplay.checked.controls.default.disabled.formnovalidate.indeterminate.inert.ismap.loop.multiple.muted.nomodule.novalidate.open.playsinline.readonly.required.reversed.seamless.selected.webkitdirectory.defer.disablepictureinpicture.disableremoteplayback`.split(`.`)];var rr=[`touchstart`,`touchmove`];function ir(e){return rr.includes(e)}var ar=Symbol(`events`),or=new Set,sr=new Set;function cr(e,t,n,r={}){function i(e){if(r.capture||fr.call(t,e),!e.cancelBubble)return at(()=>n?.call(this,e))}return e.startsWith(`pointer`)||e.startsWith(`touch`)||e===`wheel`?Ze(()=>{t.addEventListener(e,i,r)}):t.addEventListener(e,i,r),i}function lr(e,t,n,r,i){var a={capture:r,passive:i},o=cr(e,t,n,a);(t===document.body||t===window||t===document||t instanceof HTMLMediaElement)&&fn(()=>{t.removeEventListener(e,o,a)})}var ur=null,dr=!1;function fr(e){var t=this,n=t.ownerDocument,r=e.type,a=e.composedPath?.()||[],o=a[0]||e.target;ur=e,dr||(dr=!0,setTimeout(()=>{dr=!1,ur=null}));var s=0,c=ur===e&&e[ar];if(c){var l=a.indexOf(c);if(l!==-1&&(t===document||t===window)){e[ar]=t;return}var u=a.indexOf(t);if(u===-1)return;l<=u&&(s=l)}if(o=a[s]||e.target,o!==t){i(e,`currentTarget`,{configurable:!0,get(){return o||n}});var d=z,f=H;V(null),In(null);try{for(var p,m=[];o!==null&&o!==t;){try{var h=o[ar]?.[r];h!=null&&(!o.disabled||e.target===o)&&h.call(o,e)}catch(e){p?m.push(e):p=e}if(e.cancelBubble)break;s++,o=s<a.length?a[s]:null}if(p){for(let e of m)queueMicrotask(()=>{throw e});throw p}}finally{e[ar]=t,delete e.currentTarget,V(d),In(f)}}}var pr=globalThis?.window?.trustedTypes&&globalThis.window.trustedTypes.createPolicy(`svelte-trusted-html`,{createHTML:e=>e});function mr(e){return pr?.createHTML(e)??e}function hr(e){var t=rn(`template`);return t.innerHTML=mr(e.replaceAll(`<!>`,`<!---->`)),t.content}function gr(e,t){var n=H;n.nodes===null&&(n.nodes={start:e,end:t,a:null,t:null})}function J(e,t){var n=!!(t&1),r=!!(t&2),i,a=!e.startsWith(`<!>`);return()=>{if(w)return gr(T,null),T;i===void 0&&(i=hr(a?e:`<!>`+e),n||(i=Zt(i)));var t=r||qt?document.importNode(i,!0):i.cloneNode(!0);if(n){var o=Zt(t),s=t.lastChild;gr(o,s)}else gr(t,t);return t}}function _r(){if(w)return gr(T,null),T;var e=document.createDocumentFragment(),t=document.createComment(``),n=P();return e.append(t,n),gr(t,n),e}function Y(e,t){if(w){var n=H;(!(n.f&32768)||n.nodes.end===null)&&(n.nodes.end=T),Ce();return}e!==null&&e.before(t)}function vr(e){let t=0,n=zt(0),r;return()=>{dn()&&(K(n),yn(()=>(t===0&&(r=q(()=>e(()=>Ut(n)))),t+=1,()=>{Ze(()=>{--t,t===0&&(r?.(),r=void 0,Ut(n))})})))}}var yr=S|ee;function br(e,t,n,r){new xr(e,t,n,r)}var xr=class{parent;is_pending=!1;transform_error;#e;#t=w?T:null;#n;#r;#i;#a=null;#o=null;#s=null;#c=null;#l=0;#u=0;#d=!1;#f=new Set;#p=new Set;#m=null;#h=vr(()=>(this.#m=zt(this.#l),()=>{this.#m=null}));constructor(e,t,n,r){this.#e=e,this.#n=t,this.#r=e=>{var t=H;t.b=this,t.f|=128,n(e)},this.parent=H.b,this.transform_error=r??this.parent?.transform_error??(e=>e),this.#i=xn(()=>{if(w){let e=this.#t;Ce();let t=e.data===`[!`;if(e.data.startsWith(`[?`)){let t=JSON.parse(e.data.slice(2));this.#_(t)}else t?this.#y():this.#g()}else this.#b()},yr),w&&(this.#e=T)}#g(){try{this.#a=L(()=>this.#r(this.#e))}catch(e){this.error(e)}}#_(e){let t=this.#n.failed,{reset:n,invoke_onerror:r}=this.#v(e);Ze(r),t&&(this.#s=L(()=>{t(this.#e,()=>e,()=>n)}))}#v(e){var t=!1,n=!1;let r=()=>{if(t){xe();return}t=!0,n&&Ve(),this.#s!==null&&Dn(this.#s,()=>{this.#s=null}),this.#S(()=>{this.#b()})};return{reset:r,invoke_onerror:()=>{try{n=!0,this.#n.onerror?.(e,r),n=!1}catch(e){sn(e,this.#i&&this.#i.parent)}}}}#y(){let e=this.#n.pending;e&&(this.is_pending=!0,this.#o=L(()=>e(this.#e)),Ze(()=>{var e=this.#c=document.createDocumentFragment(),t=P(),n=!1;if(e.append(t),this.#a=this.#S(()=>{try{return L(()=>this.#r(t))}catch(e){try{this.error(e),n=!0}catch(e){sn(e,this.#i.parent)}return null}}),this.#a===null){this.#c=null,n&&this.#x(A);return}this.#u===0&&(this.#e.before(e),this.#c=null,Dn(this.#o,()=>{this.#o=null}),this.#x(A))}))}#b(){try{if(this.is_pending=this.has_pending_snippet(),this.#u=0,this.#l=0,this.#a=L(()=>{this.#r(this.#e)}),this.#u>0){var e=this.#c=document.createDocumentFragment();jn(this.#a,e);let t=this.#n.pending;this.#o=L(()=>t(this.#e))}else this.#x(A)}catch(e){this.error(e)}}#x(e){this.is_pending=!1,e.transfer_effects(this.#f,this.#p)}defer_effect(e){nt(e,this.#f,this.#p)}is_rendered(){return!this.is_pending&&(!this.parent||this.parent.is_rendered())}has_pending_snippet(){return!!this.#n.pending}#S(e){var t=H,n=z,r=O;In(this.#i),V(this.#i),We(this.#i.ctx);try{return Ot.ensure(),e()}finally{In(t),V(n),We(r)}}#C(e,t){if(!this.has_pending_snippet()){this.parent&&this.parent.#C(e,t);return}this.#u+=e,this.#u===0&&(this.#x(t),this.#o&&Dn(this.#o,()=>{this.#o=null}),this.#c&&=(this.#e.before(this.#c),null))}update_pending_count(e,t){this.#C(e,t),this.#l+=e,!(!this.#m||this.#d)&&(this.#d=!0,Ze(()=>{this.#d=!1,this.#m&&Vt(this.#m,this.#l)}))}get_effect_pending(){return this.#h(),K(this.#m)}error(e){if(!this.#n.onerror&&!this.#n.failed)throw e;A?.is_fork?(this.#a&&A.skip_effect(this.#a),this.#o&&A.skip_effect(this.#o),this.#s&&A.skip_effect(this.#s),A.oncommit(()=>{this.#w(e)})):this.#w(e)}#w(e){this.#a&&=(R(this.#a),null),this.#o&&=(R(this.#o),null),this.#s&&=(R(this.#s),null),w&&(E(this.#t),we(),E(Te()));let t=this.#n.failed,n=e=>{let{reset:n,invoke_onerror:r}=this.#v(e);r(),t&&(this.#s=this.#S(()=>{try{return L(()=>{var r=H;r.b=this,r.f|=128,t(this.#e,()=>e,()=>n)})}catch(e){return sn(e,this.#i.parent),null}}))};Ze(()=>{var t;try{t=this.transform_error(e)}catch(e){sn(e,this.#i&&this.#i.parent);return}typeof t==`object`&&t&&typeof t.then==`function`?t.then(n,e=>sn(e,this.#i&&this.#i.parent)):n(t)})}};function X(e,t){var n=t==null?``:typeof t==`object`?`${t}`:t;n!==(e[me]??=e.nodeValue)&&(e[me]=n,e.nodeValue=`${n}`)}function Sr(e,t){return wr(e,t)}var Cr=new Map;function wr(e,{target:t,anchor:n,props:i={},events:a,context:o,intro:s=!0,transformError:c}){Xt();var l=void 0,u=gn(()=>{var s=n??t.appendChild(P());br(s,{pending:()=>{}},t=>{Ge({});var n=O;if(o&&(n.c=o),a&&(i.$$events=a),w&&gr(t,null),l=e(t,i)||qe(),w&&(H.nodes.end=T,T===null||T.nodeType!==8||T.data!==`]`))throw be(),_e;Ke()},c);var u=new Set,d=e=>{for(var n=0;n<e.length;n++){var r=e[n];if(!u.has(r)){u.add(r);var i=ir(r);for(let e of[t,document]){var a=Cr.get(e);a===void 0&&(a=new Map,Cr.set(e,a));var o=a.get(r);o===void 0?(e.addEventListener(r,fr,{passive:i}),a.set(r,1)):a.set(r,o+1)}}}};return d(r(or)),sr.add(d),()=>{for(var e of u)for(let n of[t,document]){var r=Cr.get(n),i=r.get(e);--i==0?(n.removeEventListener(e,fr),r.delete(e),r.size===0&&Cr.delete(n)):r.set(e,i)}sr.delete(d),s!==n&&s.parentNode?.removeChild(s)}});return Tr.set(l,u),l}var Tr=new WeakMap,Er=class{anchor;#e=new Map;#t=new Map;#n=new Map;#r=new Set;#i=!0;constructor(e,t=!0){this.anchor=e,this.#i=t}#a=e=>{if(this.#e.has(e)){var t=this.#e.get(e),n=this.#t.get(t);if(n)kn(n),this.#r.delete(t);else{var r=this.#n.get(t);r&&(kn(r.effect),this.#t.set(t,r.effect),this.#n.delete(t),r.fragment.lastChild.remove(),this.anchor.before(r.fragment),n=r.effect)}for(let[t,n]of this.#e){if(this.#e.delete(t),t===e)break;let r=this.#n.get(n);r&&(R(r.effect),this.#n.delete(n))}for(let[e,r]of this.#t){if(e===t||this.#r.has(e))continue;let i=()=>{if(Array.from(this.#e.values()).includes(e)){var t=document.createDocumentFragment();jn(r,t),t.append(P()),this.#n.set(e,{effect:r,fragment:t})}else R(r);this.#r.delete(e),this.#t.delete(e)};this.#i||!n?(this.#r.add(e),Dn(r,i,!1)):i()}}};#o=e=>{this.#e.delete(e);let t=Array.from(this.#e.values());for(let[e,n]of this.#n)t.includes(e)||(R(n.effect),this.#n.delete(e))};ensure(e,t){var n=A,r=nn();if(t&&!this.#t.has(e)&&!this.#n.has(e)){if(r){var i=document.createDocumentFragment(),a=P();i.append(a),this.#n.set(e,{effect:L(()=>t(a)),fragment:i})}else this.#t.set(e,L(()=>t(this.anchor)))}if(this.#e.set(n,e),r){for(let[t,r]of this.#t)t===e?n.unskip_effect(r):n.skip_effect(r);for(let[t,r]of this.#n)t===e?n.unskip_effect(r.effect):n.skip_effect(r.effect);n.oncommit(this.#a),n.ondiscard(this.#o)}else w&&(this.anchor=T),this.#a(n)}};function Dr(e,t,n=!1){var r;w&&(r=T,Ce());var i=new Er(e),a=n?S:0;function o(e,t){if(w){var n=Ee(r);if(e!==parseInt(n.substring(1))){var a=Te();E(a),i.anchor=a,Se(!1),i.ensure(e,t),Se(!0);return}}i.ensure(e,t)}xn(()=>{var e=!1;t((t,n=0)=>{e=!0,o(n,t)}),e||o(-1,null)},a)}function Or(e,t){return t}function kr(e,t,n){for(var i=[],a=t.length,o,s=t.length,c=0;c<a;c++){let n=t[c];Dn(n,()=>{if(o){if(o.pending.delete(n),o.done.add(n),o.pending.size===0){var t=e.outrogroups;Ar(e,r(o.done)),t.delete(o),t.size===0&&(e.outrogroups=null)}}else--s},!1)}if(s===0){var l=i.length===0&&n!==null&&e.pending.size===0;if(l){var u=n,d=u.parentNode;tn(d),d.append(u),e.items.clear()}Ar(e,t,!l)}else o={pending:new Set(t),done:new Set},(e.outrogroups??=new Set).add(o)}function Ar(e,t,n=!0){var r;if(e.pending.size>0){r=new Set;for(let t of e.pending.values())for(let n of t)r.add(e.items.get(n).e)}for(var i=0;i<t.length;i++){var a=t[i];r?.has(a)?(a.f|=ne,jn(a,document.createDocumentFragment())):R(t[i],n)}}var jr;function Mr(t,n,i,a,o,s=null){var c=t,l=new Map;if(n&4){var u=t;c=w?E(Zt(u)):u.appendChild(P())}w&&Ce();var d=null,f=pt(()=>{var t=i();return e(t)?t:t==null?[]:r(t)}),p,m=new Map,h=!0;function g(e){v.effect.f&16384||(v.pending.delete(e),v.fallback=d,Pr(v,p,c,n,a),d!==null&&(p.length===0?d.f&33554432?(d.f^=ne,Ir(d,null,c)):kn(d):Dn(d,()=>{d=null})))}function _(e){v.pending.delete(e)}var v={effect:xn(()=>{p=K(f);var e=p.length;let t=!1;w&&Ee(c)===`[!`!=(e===0)&&(c=Te(),E(c),Se(!1),t=!0);for(var r=new Set,u=A,v=nn(),y=0;y<e;y+=1){w&&T.nodeType===8&&T.data===`]`&&(c=T,t=!0,Se(!1));var b=p[y],x=a(b,y),S=h?null:l.get(x);S?(S.v&&Vt(S.v,b),S.i&&Vt(S.i,y),v&&u.unskip_effect(S.e)):(S=Fr(l,h?c:jr??=P(),b,x,y,o,n,i),h||(S.e.f|=ne),l.set(x,S)),r.add(x)}if(e===0&&s&&!d&&(h?d=L(()=>s(c)):(d=L(()=>s(jr??=P())),d.f|=ne)),e>r.size&&Me(``,``,``),w&&e>0&&E(Te()),!h){if(m.set(u,r),v){for(let[e,t]of l)r.has(e)||u.skip_effect(t.e);u.oncommit(g),u.ondiscard(_)}else g(u)}t&&Se(!0),K(f)}),flags:n,items:l,pending:m,outrogroups:null,fallback:d};h=!1,w&&(c=T)}function Nr(e){for(;e!==null&&!(e.f&32);)e=e.next;return e}function Pr(e,t,n,i,a){var o=!!(i&8),s=t.length,c=e.items,l=Nr(e.effect.first),u,d=null,f,p=[],m=[],h,g,_,v;if(o)for(v=0;v<s;v+=1)h=t[v],g=a(h,v),_=c.get(g).e,_.f&33554432||(_.nodes?.a?.measure(),(f??=new Set).add(_));for(v=0;v<s;v+=1){if(h=t[v],g=a(h,v),_=c.get(g).e,e.outrogroups!==null)for(let t of e.outrogroups)t.pending.delete(_),t.done.delete(_);if(_.f&8192&&(kn(_),o&&(_.nodes?.a?.unfix(),(f??=new Set).delete(_))),_.f&33554432){if(_.f^=ne,_===l)Ir(_,null,n);else{var y=d?d.next:l;_===e.effect.last&&(e.effect.last=_.prev),_.prev&&(_.prev.next=_.next),_.next&&(_.next.prev=_.prev),Lr(e,d,_),Lr(e,_,y),Ir(_,y,n),d=_,p=[],m=[],l=Nr(d.next);continue}}if(_!==l){if(u!==void 0&&u.has(_)){if(p.length<m.length){var b=m[0],x;d=b.prev;var S=p[0],ee=p[p.length-1];for(x=0;x<p.length;x+=1)Ir(p[x],b,n);for(x=0;x<m.length;x+=1)u.delete(m[x]);Lr(e,S.prev,ee.next),Lr(e,d,S),Lr(e,ee,b),l=b,d=ee,--v,p=[],m=[]}else u.delete(_),Ir(_,l,n),Lr(e,_.prev,_.next),Lr(e,_,d===null?e.effect.first:d.next),Lr(e,d,_),d=_;continue}for(p=[],m=[];l!==null&&l!==_;)(u??=new Set).add(l),m.push(l),l=Nr(l.next);if(l===null)continue}_.f&33554432||p.push(_),d=_,l=Nr(_.next)}if(e.outrogroups!==null){for(let t of e.outrogroups)t.pending.size===0&&(Ar(e,r(t.done)),e.outrogroups?.delete(t));e.outrogroups.size===0&&(e.outrogroups=null)}if(l!==null||u!==void 0){var te=[];if(u!==void 0)for(_ of u)_.f&8192||te.push(_);for(;l!==null;)!(l.f&8192)&&l!==e.fallback&&te.push(l),l=Nr(l.next);var re=te.length;if(re>0){var ie=i&4&&s===0?n:null;if(o){for(v=0;v<re;v+=1)te[v].nodes?.a?.measure();for(v=0;v<re;v+=1)te[v].nodes?.a?.fix()}kr(e,te,ie)}}o&&Ze(()=>{if(f!==void 0)for(_ of f)_.nodes?.a?.apply()})}function Fr(e,t,n,r,i,a,o,s){var c=o&1?o&16?zt(n):M(n,!1,!1):null,l=o&2?zt(i):null;return{v:c,i:l,e:L(()=>(a(t,c??n,l??i,s),()=>{e.delete(r)}))}}function Ir(e,t,n){if(e.nodes)for(var r=e.nodes.start,i=e.nodes.end,a=t&&!(t.f&33554432)?t.nodes.start:n;r!==null;){var o=Qt(r);if(a.before(r),r===i)return;r=o}}function Lr(e,t,n){t===null?e.effect.first=n:t.next=n,n===null?e.effect.last=t:n.prev=t}function Rr(e){var t,n,r=``;if(typeof e==`string`||typeof e==`number`)r+=e;else if(typeof e==`object`){if(Array.isArray(e)){var i=e.length;for(t=0;t<i;t++)e[t]&&(n=Rr(e[t]))&&(r&&(r+=` `),r+=n)}else for(n in e)e[n]&&(r&&(r+=` `),r+=n)}return r}function zr(){for(var e,t,n=0,r=``,i=arguments.length;n<i;n++)(e=arguments[n])&&(t=Rr(e))&&(r&&(r+=` `),r+=t);return r}function Br(e){return typeof e==`object`?zr(e):e??``}var Vr=[...` 	
\r\f\xA0\v﻿`];function Hr(e,t,n){var r=e==null?``:``+e;if(t&&(r=r?r+` `+t:t),n){for(var i of Object.keys(n))if(n[i])r=r?r+` `+i:i;else if(r.length)for(var a=i.length,o=0;(o=r.indexOf(i,o))>=0;){var s=o+a;(o===0||Vr.includes(r[o-1]))&&(s===r.length||Vr.includes(r[s]))?r=(o===0?``:r.substring(0,o))+r.substring(s+1):o=s}}return r===``?null:r}function Z(e,t,n,r,i,a){var o=e[fe];if(w||o!==n||o===void 0){var s=Hr(n,r,a);(!w||s!==e.getAttribute(`class`))&&(s==null?e.removeAttribute(`class`):t?e.className=s:e.setAttribute(`class`,s)),e[fe]=n}else if(a&&i!==a)for(var c in a){var l=!!a[c];(i==null||l!==!!i[c])&&e.classList.toggle(c,l)}return a}var Ur=Symbol(`is custom element`),Wr=Symbol(`is html`),Gr=ge?`link`:`LINK`;function Kr(e,t,n,r){var i=qr(e);w&&(i[t]=e.getAttribute(t),t===`src`||t===`srcset`||t===`href`&&e.nodeName===Gr)||i[t]!==(i[t]=n)&&(t===`loading`&&(e[ue]=n),n==null?e.removeAttribute(t):typeof n!=`string`&&Yr(e).has(t)?e[t]=n:e.setAttribute(t,n))}function qr(e){return e[de]??={[Ur]:e.nodeName.includes(`-`),[Wr]:e.namespaceURI===ve}}var Jr=new Map;function Yr(e){var t=e.getAttribute(`is`)||e.nodeName,n=Jr.get(t);if(n)return n;Jr.set(t,n=new Set);for(var r,i=e,a=Element.prototype;a!==i;){for(var s in r=o(i),r)r[s].set&&s!==`innerHTML`&&s!==`textContent`&&s!==`innerText`&&n.add(s);i=l(i)}return n}function Xr(e,t,n){var r=a(e,t);r&&r.set&&(e[t]=n,fn(()=>{e[t]=null}))}function Zr(e,t){return e===t||e?.[se]===t}function Qr(e=qe(),t,n,r){var i=O.r,a=H;return _n(()=>{var o,s;return yn(()=>{o=s,s=r?.()||[],q(()=>{Zr(n(...s),e)||(t(e,...s),o&&Zr(n(...o),e)&&t(null,...o))})}),()=>{let r=a;for(;r!==i&&r.parent!==null&&r.parent.f&33554432;)r=r.parent;let o=()=>{s&&Zr(n(...s),e)&&t(null,...s)},c=r.teardown;r.teardown=()=>{o(),c?.()}}}),e}function $r(e=!1){let t=O,n=t.l.u;if(!n)return;let r=()=>tr(t.s);if(e){let e=0,n={},i=ut(()=>{let r=!1,i=t.s;for(let e in i)i[e]!==n[e]&&(n[e]=i[e],r=!0);return r&&e++,e});r=()=>K(i)}n.b.length&&hn(()=>{ei(t,r),p(n.b)}),pn(()=>{let e=q(()=>n.m.map(f));return()=>{for(let t of e)typeof t==`function`&&t()}}),n.a.length&&pn(()=>{ei(t,r),p(n.a)})}function ei(e,t){if(e.l.s)for(let t of e.l.s)K(t);t()}function Q(e,t,n,r){var i=!He||!!(n&2),o=!!(n&8),s=!!(n&16),c=r,l=!0,u=void 0,d=()=>s&&i?(u??=ut(r),K(u)):(l&&(l=!1,c=s?q(r):r),c);let f;if(o){var p=se in e||le in e;f=a(e,t)?.set??(p&&t in e?n=>e[t]=n:void 0)}var m,h=!1;o?[m,h]=it(()=>e[t]):m=e[t],m===void 0&&r!==void 0&&(m=d(),f&&(i&&Le(t),f(m)));var g=i?()=>{var n=e[t];return n===void 0?d():(l=!0,n)}:()=>{var n=e[t];return n!==void 0&&(c=void 0),n===void 0?c:n};if(i&&!(n&4))return g;if(f){var _=e.$$legacy;return(function(e,t){return arguments.length>0?((!i||!t||_||h)&&f(t?g():e),e):g()})}var v=!1,y=(n&1?ut:pt)(()=>(v=!1,g()));o&&K(y);var b=H;return(function(e,t){if(arguments.length>0){let n=t?K(y):i&&o?Gt(e):e;return N(y,n),v=!0,c!==void 0&&(c=n),e}return Pn&&v||b.f&16384?y.v:K(y)})}function ti(e){O===null&&Ae(`onMount`),He&&O.l!==null?ni(O).m.push(e):pn(()=>{let t=q(e);if(typeof t==`function`)return t})}function ni(e){var t=e.l;return t.u??={a:[],b:[],m:[]}}typeof window<`u`&&((window.__svelte??={}).v??=new Set).add(`5`),Ue();var ri=`/assets/wfte-qemyNI4r.mp3`,ii=`[
    {
        "lyric": "Yeah",
        "startTime": 13.74,
        "endTime": 19.36,
        "type": "original",
        "align": "right"
    },
    {
        "lyric": "Yo",
        "startTime": 19.36,
        "endTime": 22.55,
        "type": "original",
        "align": "right"
    },
    {
        "lyric": "This is not the end, this is not the beginning",
        "startTime": 22.55,
        "endTime": 25.03,
        "type": "original",
        "align": "right"
    },
    {
        "lyric": "Just a voice like a riot rocking every revision",
        "startTime": 25.03,
        "endTime": 27.89,
        "type": "original",
        "align": "right"
    },
    {
        "lyric": "But you listen to the tone and the violent rhythm",
        "startTime": 27.89,
        "endTime": 30.52,
        "type": "original",
        "align": "right"
    },
    {
        "lyric": "And though the words sound steady, somethin' empty's within 'em",
        "startTime": 30.52,
        "endTime": 33.33,
        "type": "original",
        "align": "right"
    },
    {
        "lyric": "We say, yeah, with fists flying up in the air",
        "startTime": 33.33,
        "endTime": 36.34,
        "type": "original",
        "align": "right"
    },
    {
        "lyric": "Like we're holding onto something that's invisible there",
        "startTime": 36.34,
        "endTime": 39.15,
        "type": "original",
        "align": "right"
    },
    {
        "lyric": "'Cause we're living at the mercy of the pain and the fear",
        "startTime": 39.15,
        "endTime": 41.86,
        "type": "original",
        "align": "right"
    },
    {
        "lyric": "Until we dead it, forget it, let it all disappear",
        "startTime": 41.86,
        "endTime": 45.13,
        "type": "original",
        "align": "right"
    },
    {
        "lyric": "Waiting for the end to come",
        "startTime": 45.13,
        "endTime": 49.36,
        "type": "original",
        "align": "left"
    },
    {
        "lyric": "Wishing I had strength to stand",
        "startTime": 49.36,
        "endTime": 54.96,
        "type": "original",
        "align": "left"
    },
    {
        "lyric": "This is not what I had planned",
        "startTime": 54.96,
        "endTime": 60.37,
        "type": "original",
        "align": "left"
    },
    {
        "lyric": "It's out of my control",
        "startTime": 60.37,
        "endTime": 67.67,
        "type": "original",
        "align": "left"
    },
    {
        "lyric": "Flying at the speed of light",
        "startTime": 67.67,
        "endTime": 71.95,
        "type": "original",
        "align": "left"
    },
    {
        "lyric": "Thoughts were spinning in my head",
        "startTime": 71.95,
        "endTime": 77.19,
        "type": "original",
        "align": "left"
    },
    {
        "lyric": "So many things were left unsaid",
        "startTime": 77.19,
        "endTime": 82.89,
        "type": "original",
        "align": "left"
    },
    {
        "lyric": "It's hard to let you go",
        "startTime": 82.89,
        "endTime": 91.08,
        "type": "original",
        "align": "left"
    },
    {
        "lyric": "I know what it takes to move on",
        "startTime": 91.08,
        "endTime": 96.68,
        "type": "original",
        "align": "left"
    },
    {
        "lyric": "I know how it feels to lie",
        "startTime": 96.68,
        "endTime": 102.44,
        "type": "original",
        "align": "left"
    },
    {
        "lyric": "All I wanna do is trade this life for something new",
        "startTime": 102.44,
        "endTime": 107.3,
        "type": "original",
        "align": "left"
    },
    {
        "lyric": "Holding on to what I haven't got",
        "startTime": 107.3,
        "endTime": 115.67,
        "type": "original",
        "align": "left"
    },
    {
        "lyric": "Sitting in an empty room",
        "startTime": 115.67,
        "endTime": 119.8,
        "type": "original",
        "align": "left"
    },
    {
        "lyric": "Trying to forget the past",
        "startTime": 119.8,
        "endTime": 125.53,
        "type": "original",
        "align": "left"
    },
    {
        "lyric": "This was never meant to last",
        "startTime": 125.53,
        "endTime": 130.82,
        "type": "original",
        "align": "left"
    },
    {
        "lyric": "I wish it wasn't so",
        "startTime": 130.82,
        "endTime": 139.07,
        "type": "original",
        "align": "left"
    },
    {
        "lyric": "I know what it takes to move on",
        "startTime": 139.07,
        "endTime": 144.76,
        "type": "original",
        "align": "left"
    },
    {
        "lyric": "I know how it feels to lie",
        "startTime": 144.76,
        "endTime": 150.43,
        "type": "original",
        "align": "left"
    },
    {
        "lyric": "All I wanna do is trade this life for something new",
        "startTime": 150.43,
        "endTime": 155.27,
        "type": "original",
        "align": "left"
    },
    {
        "lyric": "Holding on to what I haven't got",
        "startTime": 155.27,
        "endTime": 161.93,
        "type": "original",
        "align": "left"
    },
    {
        "lyric": "Yo, yo, what was left when that fire was gone?",
        "startTime": 159.93,
        "endTime": 163.59,
        "type": "original",
        "align": "right"
    },
    {
        "lyric": "I thought it felt right, but that right was wrong",
        "startTime": 163.59,
        "endTime": 166.55,
        "type": "original",
        "align": "right"
    },
    {
        "lyric": "All caught up in the eye of the storm",
        "startTime": 166.55,
        "endTime": 169.31,
        "type": "original",
        "align": "right"
    },
    {
        "lyric": "And trying to figure out what it's like moving on",
        "startTime": 169.31,
        "endTime": 172.12,
        "type": "original",
        "align": "right"
    },
    {
        "lyric": "And I don't even know what kind of things I've said",
        "startTime": 172.12,
        "endTime": 174.91,
        "type": "original",
        "align": "right"
    },
    {
        "lyric": "My mouth kept moving, and my mind went dead",
        "startTime": 174.91,
        "endTime": 177.49,
        "type": "original",
        "align": "right"
    },
    {
        "lyric": "So, I'm picking up the pieces now, where to begin",
        "startTime": 177.49,
        "endTime": 180.52,
        "type": "original",
        "align": "right"
    },
    {
        "lyric": "The hardest part of ending is starting again",
        "startTime": 180.52,
        "endTime": 190.55,
        "type": "original",
        "align": "right"
    },
    {
        "lyric": "All I wanna do is trade this life for something new",
        "startTime": 195.55,
        "endTime": 200.42000000000002,
        "type": "original",
        "align": "left"
    },
    {
        "lyric": "Holding on to what I haven't got",
        "startTime": 200.42000000000002,
        "endTime": 207.3,
        "type": "original",
        "align": "left"
    },
    {
        "lyric": "This is not the end, this is not the beginning",
        "startTime": 206.1,
        "endTime": 208.57,
        "type": "original",
        "align": "right"
    },
    {
        "lyric": "Just a voice like a riot rocking every revision",
        "startTime": 208.57,
        "endTime": 211.42000000000002,
        "type": "original",
        "align": "right"
    },
    {
        "lyric": "But you listen to the tone and the violent rhythm",
        "startTime": 211.42000000000002,
        "endTime": 215.48,
        "type": "original",
        "align": "right"
    },
    {
        "lyric": "I'm holding on to what I haven't got",
        "startTime": 211.48,
        "endTime": 221.3,
        "type": "original",
        "align": "left"
    },
    {
        "lyric": "And though the words sound steady, somethin' empty's within 'em",
        "startTime": 214.1,
        "endTime": 216.92000000000002,
        "type": "original",
        "align": "right"
    },
    {
        "lyric": "We say, yeah, with fists flying up in the air",
        "startTime": 216.92000000000002,
        "endTime": 219.87,
        "type": "original",
        "align": "right"
    },
    {
        "lyric": "Like we're holding onto something that's invisible there",
        "startTime": 219.87,
        "endTime": 222.69,
        "type": "original",
        "align": "right"
    },
    {
        "lyric": "'Cause we're living at the mercy of the pain and the fear",
        "startTime": 222.69,
        "endTime": 226.02,
        "type": "original",
        "align": "right"
    },
    {
        "lyric": "Holding on to what I haven't got",
        "startTime": 223.02,
        "endTime": 230.38,
        "type": "original",
        "align": "left"
    },
    {
        "lyric": "Until we get it, forget it, let it all disappear",
        "startTime": 225.38,
        "endTime": 228.38,
        "type": "original",
        "align": "right"
    }
]`,ai=`/assets/image-DoBOp9kW.png`,oi=`/assets/idol-CFQ3vV5n.mp3`,si=`/assets/song-Dxk_WJcy.mp3`,ci=`/assets/cover-BPHTv7jB.png`,li=`/assets/cover-DNdSTavz.jpeg`,ui=`[{"lyric":"無敵の笑顔で荒らすメディア","type":"original","startTime":0.6,"endTime":3.31,"pronunciation":"Muteki no egao de arasu media","translation":"Couldn't beat her smile; it stirred up all the media"},{"lyric":"知りたいその秘密ミステリアス","type":"original","startTime":3.31,"endTime":5.92,"pronunciation":"Shiritai sono himitsu misuteriasu","translation":"Secret side, I wanna know it"},{"lyric":"抜けてるとこさえ彼女のエリア","type":"original","startTime":5.92,"endTime":9.12,"pronunciation":"Nuketeru toko sae kanojo no eria","translation":"Even that elusive side, part of her controlled area"},{"lyric":"完璧で嘘つきな君は","type":"original","startTime":9.12,"endTime":11.8,"pronunciation":"Kanpeki de usotsuki na kimi wa","translation":"Complete and perfect, all you say is a bunch of lies"},{"lyric":"天才的なアイドル様","type":"original","startTime":11.8,"endTime":14.79,"pronunciation":"Tensaiteki na aidoru-sama","translation":"Dear miss genius idol, unmatched"},{"lyric":"You're my savior, you're my saving grace","type":"original","startTime":14.79,"endTime":18.26,"align":"right"},{"lyric":"今日何食べた？","type":"original","startTime":17.26,"endTime":18.76,"pronunciation":"Kyō nani tabeta?","translation":"What did you eat today?"},{"lyric":"好きな本は？","type":"original","startTime":18.76,"endTime":20.34,"pronunciation":"Suki na hon wa?","translation":"What book do you love?"},{"lyric":"遊びに行くならどこに行くの？","type":"original","startTime":20.34,"endTime":23.01,"pronunciation":"Asobi ni iku nara doko ni iku no?","translation":"Whenever you go out for fun, tell me, where do you go?"},{"lyric":"何も食べてない","type":"original","startTime":23.01,"endTime":24.67,"pronunciation":"Nani mo tabetenai","translation":"Haven't eaten anything"},{"lyric":"それは内緒","type":"original","startTime":24.67,"endTime":26.11,"pronunciation":"Sore wa naisho","translation":"It's a secret, unknown"},{"lyric":"何を聞かれても","type":"original","startTime":26.11,"endTime":27.62,"pronunciation":"Nani o kikarete mo","translation":"Any questions you're facing"},{"lyric":"のらりくらり","type":"original","startTime":27.62,"endTime":28.74,"pronunciation":"Norari kurari","translation":"Always acting so vaguely"},{"lyric":"そう淡々と","type":"original","startTime":28.74,"endTime":30.04,"pronunciation":"Sō tantan to","translation":"So unconcerned"},{"lyric":"だけど燦々と","type":"original","startTime":30.04,"endTime":31.51,"pronunciation":"Dakedo sansan to","translation":"Although you brightly glow"},{"lyric":"見えそうで見えない秘密は蜜の味","type":"original","startTime":31.51,"endTime":34.55,"pronunciation":"Miesō de mienai himitsu wa mitsu no aji","translation":"Any seemingly unveiled secrets are as sweet as honey"},{"lyric":"あれもないないない","type":"original","startTime":34.55,"endTime":35.78,"pronunciation":"Are mo nai nai nai","translation":"Confusing, why, why, why?"},{"lyric":"これもないないない","type":"original","startTime":35.78,"endTime":37.23,"pronunciation":"Kore mo nai nai nai","translation":"Essential lie, lie, lie"},{"lyric":"好きなタイプは？","type":"original","startTime":37.23,"endTime":38.56,"pronunciation":"Suki na taipu wa?","translation":"So, what is your type of guy?"},{"lyric":"相手は？","type":"original","startTime":38.56,"endTime":39.15,"pronunciation":"Aite wa?","translation":"Any partner?"},{"lyric":"さあ答えて","type":"original","startTime":39.15,"endTime":40.3,"pronunciation":"Sā kotaete","translation":"So, now, answer this"},{"lyric":"「誰かを好きになることなんて私分からなくてさ」","type":"original","startTime":40.3,"endTime":46.12,"pronunciation":"Dareka o suki ni naru koto nante watashi wakaranakute sa","translation":"\\"I don't have any idea how I could love anyone\\" / \\"I don't seem to know what it signifies\\""},{"lyric":"嘘か本当か知り得ない","type":"original","startTime":46.12,"endTime":48.96,"pronunciation":"Uso ka hontō ka shiri enai","translation":"Cannot find out if it's true or it's a lie"},{"lyric":"そんな言葉にまた一人堕ちる","type":"original","startTime":48.96,"endTime":52.87,"pronunciation":"Sonna kotoba ni mata hitori ochiru","translation":"Once again, there's somebody who's fallen for the words and cues"},{"lyric":"また好きにさせる","type":"original","startTime":52.87,"endTime":54.75,"pronunciation":"Mata suki ni saseru","translation":"Made him lose his head over you"},{"lyric":"誰もが目を奪われていく","type":"original","startTime":54.75,"endTime":57.76,"pronunciation":"Daremo ga me o ubawarete iku","translation":"That emotion melts all hearts, all eyes on you"},{"lyric":"君は完璧で究極のアイドル","type":"original","startTime":57.76,"endTime":60.9,"pronunciation":"Kimi wa kanpeki de kyūkyoku no aidoru","translation":"'Cause you are perfect, the most ultimate idol"},{"lyric":"金輪際現れない","type":"original","startTime":60.9,"endTime":63.47,"pronunciation":"Konrinzai arawarenai","translation":"Unrivalled, will not appear again"},{"lyric":"一番星の生まれ変わり","type":"original","startTime":63.47,"endTime":66.43,"pronunciation":"Ichibanboshi no umarekawari","translation":"It's the brightest star reborn, yes, indeed"},{"lyric":"ああ その笑顔で愛してるで","type":"original","startTime":66.43,"endTime":69.91,"pronunciation":"Ā sono egao de aishiteru de","translation":"Aa-ah, using that smiling face, that \\"I love you\\" again"},{"lyric":"誰も彼も虜にしていく","type":"original","startTime":69.91,"endTime":72.97,"pronunciation":"Daremo karemo toriko ni shite iku","translation":"Now, everybody is lured and captivated by you"},{"lyric":"その瞳がその言葉が","type":"original","startTime":72.97,"endTime":75.35,"pronunciation":"Sono hitomi ga sono kotoba ga","translation":"The pupil that you got, the words you vocalise"},{"lyric":"嘘でもそれは完全なアイ","type":"original","startTime":75.35,"endTime":78.53,"pronunciation":"Uso demo sore wa kanzen na Ai","translation":"Even when untrue, it's your perfected \\"Ai\\""},{"lyric":"はいはいあの子は特別です","type":"original","startTime":78.53,"endTime":81.41,"pronunciation":"Hai hai ano ko wa tokubetsu desu","translation":"Right, right, we all know she's very special, yes"},{"lyric":"我々はハナからおまけです","type":"original","startTime":81.41,"endTime":84.15,"pronunciation":"Wareware wa hana kara omake desu","translation":"We had lost the fight before it started, so impressed"},{"lyric":"お星様の引き立て役Bです","type":"original","startTime":84.15,"endTime":87.31,"pronunciation":"Ohoshisama no hikitateyaku B desu","translation":"Miss, I'm such a star / We're serving as support to her grace"},{"lyric":"全てがあの子のお陰なわけない","type":"original","startTime":87.31,"endTime":90.27,"pronunciation":"Subete ga ano ko no okage na wake nai","translation":"Cannot tell me everything was because of her"},{"lyric":"洒落臭い","type":"original","startTime":90.27,"endTime":91.01,"pronunciation":"Sharekusai","translation":"No, it's not right / Out of line"},{"lyric":"妬み嫉妬なんてないわけがない","type":"original","startTime":91.01,"endTime":93.26,"pronunciation":"Netami shitto nante nai wake ga nai","translation":"How can we not feel jealous while being around?"},{"lyric":"これはネタじゃない","type":"original","startTime":93.26,"endTime":94.28,"pronunciation":"Kore wa neta janai","translation":"It's not a joke, you know, right?"},{"lyric":"からこそ許せない","type":"original","startTime":94.28,"endTime":95.39,"pronunciation":"Kara koso yurusenai","translation":"So, I cannot forgive you for that"},{"lyric":"完璧じゃない君じゃ許せない","type":"original","startTime":95.39,"endTime":97.37,"pronunciation":"Kanpeki janai kimi ja yurusenai","translation":"Completely deny, imperfect you that I sight"},{"lyric":"自分を許せない","type":"original","startTime":97.37,"endTime":98.4,"pronunciation":"Jibun o yurusenai","translation":"Myself, no pardon allowed"},{"lyric":"誰よりも強い君以外は認めない","type":"original","startTime":98.4,"endTime":101.03,"pronunciation":"Dare yori mo tsuyoi kimi igai wa mitomenai","translation":"I won't allow anyone if it's not you, strongest of all"},{"lyric":"誰もが信じ崇めてる","type":"original","startTime":101.03,"endTime":104.01,"pronunciation":"Daremo ga shinji agameru","translation":"That emotion seized all hearts worshipping you"},{"lyric":"まさに最強で無敵のアイドル","type":"original","startTime":104.01,"endTime":107.21,"pronunciation":"Masani saikyō de muteki no aidoru","translation":"So strong, it's you, unrivalled idol"},{"lyric":"弱点なんて見当たらない","type":"original","startTime":107.21,"endTime":109.68,"pronunciation":"Jakuten nante miataranai","translation":"There cannot be weaknesses to find"},{"lyric":"一番星を宿している","type":"original","startTime":109.68,"endTime":112.8,"pronunciation":"Ichibanboshi o yadoshite iru","translation":"The brightest star is residing in you"},{"lyric":"弱いとこなんて見せちゃダメダメ","type":"original","startTime":112.8,"endTime":115.85,"pronunciation":"Yowai toko nante misecha dame dame","translation":"The gaps and shortcomings don't show 'em"},{"lyric":"知りたくないとこは見せずに","type":"original","startTime":115.85,"endTime":118.85,"pronunciation":"Shiritakunai toko wa misezu ni","translation":"Dammit, dammit, parts nobody wants to know should remain hidden"},{"lyric":"唯一無二じゃなくちゃイヤイヤ","type":"original","startTime":118.85,"endTime":121.65,"pronunciation":"Yuiitsu muni janakucha iya iya","translation":"One and only, if it's different, no way, no way"},{"lyric":"それこそ本物のアイ","type":"original","startTime":121.65,"endTime":125.15,"pronunciation":"Sore koso honmono no Ai","translation":"Such a true love, it's the realest \\"Ai\\""},{"lyric":"得意の笑顔で沸かすメディア","type":"original","startTime":125.15,"endTime":128.38,"pronunciation":"Tokui no egao de wakasu media","translation":"Showing this smile, my own weapon, boiling media"},{"lyric":"隠しきるこの秘密だけは","type":"original","startTime":128.38,"endTime":131.02,"pronunciation":"Kakushikiru kono himitsu dake wa","translation":"Keeping everything about my secret deep inside"},{"lyric":"愛してるって嘘で積むキャリア","type":"original","startTime":131.02,"endTime":134.62,"pronunciation":"Aishiteru tte uso de tsumu kyaria","translation":"\\"I'm in love with you,\\" my career is built on such a lie"},{"lyric":"これこそ私なりの愛だ","type":"original","startTime":134.62,"endTime":137.94,"pronunciation":"Kore koso watashi nari no ai da","translation":"It's the way I know to show my love, without a doubt"},{"lyric":"流れる汗も綺麗なアクア","type":"original","startTime":137.94,"endTime":140.98,"pronunciation":"Nagareru ase mo kirei na akua","translation":"Running down, my sweat is flowing, cleanest aqua, right?"},{"lyric":"ルビーを隠したこの瞼","type":"original","startTime":140.98,"endTime":143.83,"pronunciation":"Rubī o kakushita kono mabuta","translation":"Ruby hidden under my eyelids, where it resides"},{"lyric":"歌い踊り舞う私はマリア","type":"original","startTime":143.83,"endTime":147.3,"pronunciation":"Utai odori mau watashi wa Maria","translation":"I sing and dance around, look at me, I'm Maria"},{"lyric":"そう嘘はとびきりの愛だ","type":"original","startTime":147.3,"endTime":151.32,"pronunciation":"Sō uso wa tobikiri no ai da","translation":"So, lying surely is the greatest kind of love"},{"lyric":"誰かに愛されたことも","type":"original","startTime":151.32,"endTime":154.53,"pronunciation":"Dareka ni aisareta koto mo","translation":"I recall no one that loved me whole before"},{"lyric":"誰かのこと愛したこともない","type":"original","startTime":154.53,"endTime":157.98,"pronunciation":"Dareka no koto aishita koto mo nai","translation":"And I've not been in love with anybody before"},{"lyric":"そんな私の嘘がいつか本当になること","type":"original","startTime":157.98,"endTime":163.67,"pronunciation":"Sonna watashi no uso ga itsuka hontō ni naru koto","translation":"Now, the lies I'm making up, I'm hoping that a day comes when they all become true"},{"lyric":"信じてる","type":"original","startTime":163.67,"endTime":164.75,"align":"right","pronunciation":"Shinjiteru","translation":"I keep wishing they do"},{"lyric":"いつかきっと全部手に入れる","type":"original","startTime":164.75,"endTime":167.99,"pronunciation":"Itsuka kitto zenbu te ni ireru","translation":"One day, I will hold everything that I pursue"},{"lyric":"私はそう欲張りなアイドル","type":"original","startTime":167.99,"endTime":171.13,"pronunciation":"Watashi wa sō yokubari na aidoru","translation":"Yes, I am so greedy, true voracious idol"},{"lyric":"等身大でみんなのこと","type":"original","startTime":171.13,"endTime":173.77,"pronunciation":"Tōshindai de minna no koto","translation":"So, sincerely, what I'm wishing for is to love each of you with all my heart"},{"lyric":"ちゃんと愛したいから","type":"original","startTime":173.77,"endTime":176.56,"pronunciation":"Chanto aishitai kara","translation":"So, sincerely, what I'm wishing for is to love each of you with all my heart"},{"lyric":"今日も嘘をつくの","type":"original","startTime":176.56,"endTime":179.05,"pronunciation":"Kyō mo uso o tsuku no","translation":"And so, today, I lie again"},{"lyric":"この言葉がいつか本当になる日を願って","type":"original","startTime":179.05,"endTime":183.23,"pronunciation":"Kono kotoba ga itsuka hontō ni naru hi o negatte","translation":"The words I vocalise inside of me, I'm wishing that one day they come true"},{"lyric":"それでもまだ","type":"original","startTime":183.23,"endTime":184.75,"pronunciation":"Sore demo mada","translation":"Up to this day, I've not been able to let you"},{"lyric":"君と君にだけは言えずにいたけど","type":"original","startTime":184.75,"endTime":188.54,"pronunciation":"Kimi to kimi ni dake wa iezu ni ita kedo","translation":"And you hear me saying those meaningful words"},{"lyric":"ああ やっと言えた","type":"original","startTime":188.54,"endTime":190.6,"pronunciation":"Ā yatto ieta","translation":"Ah, I said it at last"},{"lyric":"これは絶対嘘じゃない","type":"original","startTime":190.6,"endTime":192.76,"pronunciation":"Kore wa zettai uso janai","translation":"I know it's not a lie as I'm voicing these words"},{"lyric":"愛してる","type":"original","startTime":192.76,"endTime":195.66,"pronunciation":"Aishiteru","translation":"\\"I love you\\""},{"lyric":"You're my savior, my true savior, my saving grace","type":"original","startTime":205.97,"endTime":209.52,"align":"right"}]`,di=`[
    {
        "lyric": "I hold on so nervously to me and my drink",
        "startTime": 23.73,
        "endTime": 29.98,
        "type": "original",
        "align": "left"
    },
    {
        "lyric": "I wish it was coolin' me",
        "startTime": 29.98,
        "endTime": 32.95,
        "type": "original",
        "align": "left"
    },
    {
        "lyric": "But so far has not been good",
        "startTime": 32.95,
        "endTime": 36.12,
        "type": "original",
        "align": "left"
    },
    {
        "lyric": "It's been shitty, and I feel awkward as I should",
        "startTime": 36.12,
        "endTime": 42.13,
        "type": "original",
        "align": "left"
    },
    {
        "lyric": "This club has got to be the most pretentious thing",
        "startTime": 42.13,
        "endTime": 48.28,
        "type": "original",
        "align": "left"
    },
    {
        "lyric": "Since I thought you and me",
        "startTime": 48.28,
        "endTime": 50.89,
        "type": "original",
        "align": "left"
    },
    {
        "lyric": "Well, I am imagining a dark lit place",
        "startTime": 50.89,
        "endTime": 56.2,
        "type": "original",
        "align": "left"
    },
    {
        "lyric": "Or your place or my place",
        "startTime": 56.2,
        "endTime": 58.54,
        "type": "original",
        "align": "left"
    },
    {
        "lyric": "Well, I'm not paralyzed, but I seem to be struck by you",
        "startTime": 58.54,
        "endTime": 64.16,
        "type": "original",
        "align": "left"
    },
    {
        "lyric": "I wanna make you move because you're standin' still",
        "startTime": 64.16,
        "endTime": 68.86,
        "type": "original",
        "align": "left"
    },
    {
        "lyric": "If your body matches what your eyes can do",
        "startTime": 68.86,
        "endTime": 72.1,
        "type": "original",
        "align": "left"
    },
    {
        "lyric": "You'll probably move right through me on my way to you",
        "startTime": 72.1,
        "endTime": 78.02,
        "type": "original",
        "align": "left"
    },
    {
        "lyric": "I hold out for one more drink, before I think",
        "startTime": 78.02,
        "endTime": 84.48,
        "type": "original",
        "align": "left"
    },
    {
        "lyric": "I'm lookin' too desperately",
        "startTime": 84.48,
        "endTime": 87.19,
        "type": "original",
        "align": "left"
    },
    {
        "lyric": "But so far has not been fun, I should just stay home",
        "startTime": 87.19,
        "endTime": 93.56,
        "type": "original",
        "align": "left"
    },
    {
        "lyric": "If one thing really means one",
        "startTime": 93.56,
        "endTime": 96.53,
        "type": "original",
        "align": "left"
    },
    {
        "lyric": "This club will hopefully be closed in three weeks",
        "startTime": 96.53,
        "endTime": 102.33,
        "type": "original",
        "align": "left"
    },
    {
        "lyric": "That would be cool with me",
        "startTime": 102.33,
        "endTime": 105.34,
        "type": "original",
        "align": "left"
    },
    {
        "lyric": "Well, I'm still imagining a dark lit place",
        "startTime": 105.34,
        "endTime": 110.88,
        "type": "original",
        "align": "left"
    },
    {
        "lyric": "Or your place or my place",
        "startTime": 110.88,
        "endTime": 112.85,
        "type": "original",
        "align": "left"
    },
    {
        "lyric": "Well, I'm not paralyzed, but I seem to be struck by you",
        "startTime": 112.85,
        "endTime": 118.28999999999999,
        "type": "original",
        "align": "left"
    },
    {
        "lyric": "I wanna make you move because you're standin' still",
        "startTime": 118.28999999999999,
        "endTime": 123.29,
        "type": "original",
        "align": "left"
    },
    {
        "lyric": "If your body matches what your eyes can do",
        "startTime": 123.29,
        "endTime": 127.34,
        "type": "original",
        "align": "left"
    },
    {
        "lyric": "You'll probably move right through me on my way to you",
        "startTime": 127.34,
        "endTime": 132.85,
        "type": "original",
        "align": "left"
    },
    {
        "lyric": "Well, I'm not paralyzed, but I seem to be struck by you",
        "startTime": 149.07,
        "endTime": 154.5,
        "type": "original",
        "align": "left"
    },
    {
        "lyric": "I wanna make you move because you're standin' still",
        "startTime": 154.5,
        "endTime": 159.48,
        "type": "original",
        "align": "left"
    },
    {
        "lyric": "If your body matches what your eyes can do",
        "startTime": 159.48,
        "endTime": 163.59,
        "type": "original",
        "align": "left"
    },
    {
        "lyric": "You'll probably move right through me on my way to you",
        "startTime": 163.59,
        "endTime": 168.12,
        "type": "original",
        "align": "left"
    },
    {
        "lyric": "Not paralyzed, but I seem to be struck by you",
        "startTime": 168.12,
        "endTime": 172.68,
        "type": "original",
        "align": "left"
    },
    {
        "lyric": "I wanna make you move because you're standin' still",
        "startTime": 172.68,
        "endTime": 177.6,
        "type": "original",
        "align": "left"
    },
    {
        "lyric": "If your body matches what your eyes can do",
        "startTime": 177.6,
        "endTime": 181.85,
        "type": "original",
        "align": "left"
    },
    {
        "lyric": "You'll probably move right through me on my way to you",
        "startTime": 181.85,
        "endTime": 187.34,
        "type": "original",
        "align": "left"
    },
    {
        "lyric": "You'll probably move right through me on my way to you",
        "startTime": 190.95,
        "endTime": 196.95,
        "type": "original",
        "align": "left"
    },
    {
        "lyric": "You'll probably move right through me on my way to you",
        "startTime": 199.85,
        "endTime": 203.96,
        "type": "original",
        "align": "left"
    }
]`,fi=`/assets/Aria%20Math%20arrange-BnKdIwkL.mp3`,pi=`/assets/cover-CzQbItht.jpg`,mi=`[
    {"lyric": "This song has no lyrics.", "startTime":0.00, "endTime":0.00, "translation":"I do not know who made this song. If you could help me out in finding them, that would be ace!!"}
]`,hi=`/assets/image-DruJGwMj.png`,gi=`/assets/song-DvC2_qew.mp3`,_i=`[
    {
        "lyric": "Blegh!",
        "startTime": 5.02,
        "endTime": 15.4,
        "type": "original",
        "align": "left"
    },
    {
        "lyric": "Hi! Are you looking for the other side?",
        "startTime": 25.65,
        "endTime": 29.07,
        "type": "original",
        "align": "left"
    },
    {
        "lyric": "Feeling nothing ever seems quite right?",
        "startTime": 29.07,
        "endTime": 31.77,
        "type": "original",
        "align": "left"
    },
    {
        "lyric": "Are you circling a drain pipe? Getting off on pain like",
        "startTime": 31.77,
        "endTime": 34.7,
        "type": "original",
        "align": "left"
    },
    {
        "lyric": "You're corrupted?!",
        "startTime": 34.7,
        "endTime": 36.08,
        "type": "original",
        "align": "left"
    },
    {
        "lyric": "I need to know where your loyalties lie",
        "startTime": 36.08,
        "endTime": 39.43,
        "type": "original",
        "align": "left"
    },
    {
        "lyric": "Tell me, are you gonna bark or bite?",
        "startTime": 39.43,
        "endTime": 42.03,
        "type": "original",
        "align": "left"
    },
    {
        "lyric": "Do you really wanna twist a knife in the belly",
        "startTime": 42.03,
        "endTime": 45.28,
        "type": "original",
        "align": "left"
    },
    {
        "lyric": "Of the monster?!",
        "startTime": 45.28,
        "endTime": 46.58,
        "type": "original",
        "align": "left"
    },
    {
        "lyric": "Get the fuck up, wake the fuck up!",
        "startTime": 46.58,
        "endTime": 48.91,
        "type": "original",
        "align": "left"
    },
    {
        "lyric": "Wipe the system and back the fuck up!",
        "startTime": 48.91,
        "endTime": 51.51,
        "type": "original",
        "align": "left"
    },
    {
        "lyric": "You're a puppet when they cut your strings off!",
        "startTime": 51.51,
        "endTime": 54.27,
        "type": "original",
        "align": "left"
    },
    {
        "lyric": "Don't come crawling back!",
        "startTime": 54.27,
        "endTime": 56.34,
        "type": "original",
        "align": "left"
    },
    {
        "lyric": "Kingslayer! Destroying castles in the sky",
        "startTime": 56.34,
        "endTime": 61.37,
        "type": "original",
        "align": "right"
    },
    {
        "lyric": "Kingslayer! Forevermore the apple of my eye",
        "startTime": 61.37,
        "endTime": 66.53,
        "type": "original",
        "align": "right"
    },
    {
        "lyric": "I'd sacrifice my life to find you, angel of the blade",
        "startTime": 66.53,
        "endTime": 71.56,
        "type": "original",
        "align": "right"
    },
    {
        "lyric": "Kingslayer! Come and collect us from the night!",
        "startTime": 71.56,
        "endTime": 77.7,
        "type": "right",
        "align": "right"
    },
    {
        "lyric": "暗い、この見えない世界",
        "startTime": 87.96000000000001,
        "endTime": 91.48,
        "type": "original",
        "align": "right",
        "translation": "Dark, this invisible world",
        "pronunciation": "kurai, kono mienai sekai"
    },
    {
        "lyric": "まだ消えない未来",
        "startTime": 91.48,
        "endTime": 94.07,
        "type": "original",
        "align": "right",
        "translation": "The future that has not yet disappeared",
        "pronunciation": "mada kienai mirai"
    },
    {
        "lyric": "ただ手に入れたい another world",
        "startTime": 94.07,
        "endTime": 96.96000000000001,
        "type": "original",
        "align": "right",
        "translation": "I just want to get another world",
        "pronunciation": "tada te ni iretai another world"
    },
    {
        "lyric": "System failure!",
        "startTime": 96.96000000000001,
        "endTime": 98.57,
        "type": "original",
        "align": "left"
    },
    {
        "lyric": "Life is encrypted, you are modified",
        "startTime": 98.57,
        "endTime": 101.96000000000001,
        "type": "original",
        "align": "right"
    },
    {
        "lyric": "Like a virus in a lullaby",
        "startTime": 101.96000000000001,
        "endTime": 104.53,
        "type": "original",
        "align": "right"
    },
    {
        "lyric": "Artificial till the day you die, silly programme",
        "startTime": 104.53,
        "endTime": 107.42,
        "type": "original",
        "align": "right"
    },
    {
        "lyric": "You're corrupted!",
        "startTime": 107.42,
        "endTime": 108.75,
        "type": "original",
        "align": "right"
    },
    {
        "lyric": "You're corrupted!",
        "startTime": 107.42,
        "endTime": 108.75,
        "type": "original",
        "align": "left"
    },
    {
        "lyric": "Get the fuck up, wake the fuck up!",
        "startTime": 108.75,
        "endTime": 111.15,
        "type": "original",
        "align": "left"
    },
    {
        "lyric": "Wipe the system and back the fuck up!",
        "startTime": 111.15,
        "endTime": 113.89,
        "type": "original",
        "align": "left"
    },
    {
        "lyric": "You're a puppet when they cut your strings off!",
        "startTime": 113.89,
        "endTime": 116.45,
        "type": "original",
        "align": "left"
    },
    {
        "lyric": "Don't come crawling back, you're on your own!",
        "startTime": 116.45,
        "endTime": 120.9,
        "type": "original",
        "align": "left"
    },
    {
        "lyric": "さあ時の",
        "startTime": 119.9,
        "endTime": 123.03,
        "type": "original",
        "align": "right",
        "translation": "Now, the time's",
        "pronunciation": "saa toki no"
    },
    {
        "lyric": "扉を開けて行こうよ",
        "startTime": 123.03,
        "endTime": 128.88,
        "type": "original",
        "align": "right",
        "translation": "Let's open the door and go",
        "pronunciation": "tobira o akete ikou yo"
    },
    {
        "lyric": "Kingslayer, destroying castles in the sky",
        "startTime": 128.88,
        "endTime": 134.03,
        "type": "original",
        "align": "right"
    },
    {
        "lyric": "Kingslayer, I'll fight for you until I die!",
        "startTime": 134.03,
        "endTime": 139.38,
        "type": "original",
        "align": "right"
    },
    {
        "lyric": "Kingslayer! Destroying castles in the sky",
        "startTime": 139.38,
        "endTime": 144.36,
        "type": "original",
        "align": "right"
    },
    {
        "lyric": "Kingslayer! Forevermore the apple of my eye",
        "startTime": 144.36,
        "endTime": 149.64,
        "type": "original",
        "align": "right"
    },
    {
        "lyric": "I'd sacrifice it all to guide you, never have to battle alone!",
        "startTime": 149.64,
        "endTime": 154.67000000000002,
        "type": "original",
        "align": "right"
    },
    {
        "lyric": "Kingslayer! Come and collect us from the night!",
        "startTime": 154.67000000000002,
        "endTime": 160.73,
        "type": "original",
        "align": "right"
    },
    {
        "lyric": "This is your wake up call",
        "startTime": 173.07999999999998,
        "endTime": 175.76,
        "type": "original",
        "align": "left"
    },
    {
        "lyric": "We're going down the rabbit hole",
        "startTime": 175.76,
        "endTime": 178.06,
        "type": "original",
        "align": "left"
    },
    {
        "lyric": "Are you ready?",
        "startTime": 178.06,
        "endTime": 179.97,
        "type": "original",
        "align": "left"
    },
    {
        "lyric": "I can't feel you!",
        "startTime": 179.97,
        "endTime": 191.25,
        "type": "original",
        "align": "left"
    },
    {
        "lyric": "Oh, yeah!",
        "startTime": 191.25,
        "endTime": 197.64,
        "type": "original",
        "align": "left"
    },
    {
        "lyric": "Is this what you want?!",
        "startTime": 203.77,
        "endTime": 206.32999999999998,
        "type": "original",
        "align": "left"
    },
    {
        "lyric": "This is what you'll fucking get!",
        "startTime": 206.32999999999998,
        "endTime": 210.1,
        "type": "original",
        "align": "left"
    },
    {
        "lyric": "You motherfucking shit!",
        "startTime": 210.1,
        "endTime": 213.23,
        "type": "original",
        "align": "left"
    }
]`,vi=`/favicon.svg`;function yi(e){let t=e.split(`:`),n=parseFloat(t[0]),r=parseFloat(t[1]);return n*60+r}function bi(e){let t=e.split(`
`),n=/^\[([^\]]+)\]\s*(.+)/,r=[];for(let e=0;e<t.length;e++){let i=t[e].trim();if(!i)continue;let a=i.match(n);if(a){let i=yi(a[1]),o=a[2],s=t[e+1],c;if(s){let e=s.match(n);e&&(c=yi(e[1]))}c||=i+5,r.push({lyric:o,startTime:i,endTime:c,type:`original`,align:`left`})}}return console.log(JSON.stringify(r)),r}var xi=[{lyric:`Loading lyrics...`,startTime:0,endTime:5,type:`original`,align:`left`}];function Si(){return xi}function Ci(e=``){try{xi=JSON.parse(e)}catch{xi=bi(e)}}var wi=(e,t)=>{let n=[...e].reverse();return e.length-n.findIndex(e=>e.startTime<t&&(e.type===`original`||!e.type))},Ti=J(`<span> </span>`),Ei=J(`<div><span> </span> <!> <!></div>`),Di=J(`<main></main>`);function Oi(e,t){Ge(t,!1);let n=M(Si()),r=Vi(),i=Q(t,`lyricsOpen`,8,!1),a=0,o=0;function s(e=!0){r=e,o=-1,r=Vi()}let c=M(document.createElement(`main`)),l=M(Li()),u=0;function d(){N(n,Si()),N(l,Li()),Qn();let e=wi(Si(),Li());if(r){a=0;for(let t=0;t<=e;t++)K(n)[t]&&K(n)[t].startTime<K(l)&&K(n)[t].endTime>K(l)&&K(n)[t].type==`original`&&(a+=1);for(let t=1+a;t<e;t++){let r=K(n)[e-t];try{if(!r||r.startTime>K(n)[e].startTime){u=0;break}if(r.type===`original`){u=e-t,K(c).childNodes[u-1].innerHeight+K(c).childNodes[u].innerHeight<K(c).innerHeight/5&&--u;break}}catch{u=e}}try{let e=K(c).childNodes[u];e===void 0&&(e=K(c).childNodes[0]);let t=e.offsetTop;o!=t&&(K(c).scrollTo({left:0,top:t,behavior:`smooth`}),o=t)}catch{return}}f=requestAnimationFrame(d)}let f;ti(()=>{requestAnimationFrame(d),K(c).addEventListener(`scroll`,()=>{setTimeout(()=>{},5e3),r=Vi()})});var p={setScrollActive:s};$r();var m=Di();return Mr(m,5,()=>K(n),Or,(e,t)=>{var n=Ei(),r=F(n),i=en(r,!0),a=I(r,2),o=e=>{var n=Ti(),r=en(n,!0);bn(()=>{Z(n,1,`sec ${K(t),K(l),q(()=>K(t).startTime<=K(l)&&K(t).endTime>=K(l)?`playing`:``)??``} ${K(t),q(()=>K(t).align==`right`?`right`:`left`)??``}`,`svelte-18httxf`),X(r,(K(t),q(()=>K(t).pronunciation)))}),Y(e,n)};Dr(a,e=>{K(t),q(()=>K(t).pronunciation!=null)&&e(o)});var s=I(a,2),c=e=>{var n=Ti(),r=en(n,!0);bn(()=>{Z(n,1,`tert ${K(t),K(l),q(()=>K(t).startTime<=K(l)&&K(t).endTime>=K(l)?`playing`:``)??``} ${K(t),q(()=>K(t).align==`right`?`right`:`left`)??``}`,`svelte-18httxf`),X(r,(K(t),q(()=>K(t).translation)))}),Y(e,n)};Dr(s,e=>{K(t),q(()=>K(t).translation!=null)&&e(c)}),D(n),bn(()=>{Z(n,1,`lyricContainer
                  ${K(t),q(()=>K(t).align==`right`?`right`:`left`)??``}`,`svelte-18httxf`),Z(r,1,`${K(t),K(l),q(()=>K(t).startTime<=K(l)&&K(t).endTime>=K(l)?`playing`:``)??``} ${K(t),q(()=>K(t).align==`right`?`right`:`left`)??``}`,`svelte-18httxf`),X(i,(K(t),q(()=>K(t).lyric)))}),lr(`click`,n,()=>{Ni(K(t).startTime)}),Y(e,n)}),D(m),Qr(m,e=>N(c,e),()=>K(c)),bn(()=>Z(m,1,`lyrics ${i()?`lyricsOpen`:`lyricsClosed`}`,`svelte-18httxf`)),Y(e,m),Xr(t,`setScrollActive`,s),Ke(p)}var ki=!1;function Ai(){ki=!0,$.addEventListener(`canplay`,()=>{ki&&=($.play(),!1)})}var $=document.createElement(`audio`),ji=!1;document.body.appendChild($);var Mi={title:`Paralyzer`,artist:`Finger Eleven`,albumCover:li,album:`Paralyzer - Single`,audioPath:si,lyrics:di};Ci(Mi.lyrics);function Ni(e){$.currentTime=e}function Pi(e){Mi=e,Ci(Mi.lyrics),$.src=Mi.audioPath,ji=!1,Ii()}$.src=Mi.audioPath;function Fi(){return Mi}function Ii(){`mediaSession`in navigator&&(navigator.mediaSession.metadata=new MediaMetadata({title:Mi.title,artist:Mi.artist,album:Mi.album,artwork:[{src:Mi.albumCover,sizes:`512x512`,type:`image/png`}]}),navigator.mediaSession.setActionHandler(`play`,()=>{$.play(),ji=!0}),navigator.mediaSession.setActionHandler(`pause`,()=>{$.pause(),ji=!1}),navigator.mediaSession.setActionHandler(`previoustrack`,()=>{zi()}),navigator.mediaSession.setActionHandler(`nexttrack`,()=>{}))}function Li(){return $.currentTime}function Ri(){ji?$.pause():$.readyState===0?Ai():$.play(),ji=!ji,Ii()}function zi(){$.currentTime>5&&($.currentTime=0)}function Bi(){}function Vi(){return ji}$.addEventListener(`play`,()=>{ji=!0,Ii()}),$.addEventListener(`pause`,()=>{ji=!1,Ii()});var Hi=J(`<main class="svelte-1o5y2lx"><div><span> </span> <button>Dismiss</button></div></main>`);function Ui(e,t){let n=M(!1);function r(){N(n,!0)}let i=Q(t,`message`,8,`This is a popup message.`);var a=_r(),o=$t(a),s=e=>{var t=Hi(),a=F(t);let o;var s=F(a),c=en(s,!0),l=I(s,2);D(a),D(t),bn(()=>{o=Z(a,1,`popup svelte-1o5y2lx`,null,o,{isDismissed:K(n)}),X(c,i())}),lr(`click`,l,r),Y(e,t)};Dr(o,e=>{K(n)||e(s)}),Y(e,a)}var Wi=J(`<!> <div class="section svelte-mqnx2g"><h2>Demo Mode</h2> <p>Systole is in Demo Mode. <br/> This means that you can only play songs that we've put into the demo! <br/> Soon, we'll be up and running with songs from artists, and have playlists, accounts and more! See you soon! For now, check out the basis of what we're doing by selecting a song below.</p></div>`,1),Gi=J(`<div class="song svelte-mqnx2g"><img class="svelte-mqnx2g"/> <span class="metadata"> <br/> </span></div>`),Ki=J(`<div class="section svelte-mqnx2g"><h2> </h2> <div class="songs svelte-mqnx2g"></div></div>`),qi=J(`<main class="svelte-mqnx2g"><h1>Home</h1> <!> <!> <p>Have any issues or queries? <a href="mailto:systolemusic@outlook.com">Contact us</a></p></main>`);function Ji(e,t){Ge(t,!1);let n=Q(t,`isDemo`,8,!0),r=[{name:`Demo Songs`,songs:[{title:`Paralyzer`,album:`Paralyzer - Single`,artist:`Finger Eleven`,albumCover:li,audioPath:si,lyrics:di},{title:`Idol`,album:`Idol - Single`,artist:`YOASOBI`,albumCover:ci,audioPath:oi,lyrics:ui},{title:`Aria Math Memory Arrange`,album:`Aria Math Memory Arrange`,artist:`[???]`,albumCover:pi,audioPath:fi,lyrics:mi},{title:`Waiting for the End`,album:`A Thousand Suns`,artist:`LINKIN PARK`,albumCover:ai,audioPath:ri,lyrics:ii},{title:`Kingslayer`,album:`Post Human: Survival Horror - EP`,artist:`Bring Me The Horizon`,albumCover:hi,audioPath:gi,lyrics:_i}]}];$r();var i=qi(),a=I(F(i),2),o=e=>{var t=Wi();Ui($t(t),{message:`Systole is in Demo Mode. This means that you can only play songs that we've put into the demo! Soon, we'll be up and running with songs from artists, and have playlists, accounts and more! See you soon! For now, check out the basis of what we're doing by selecting a song below.`}),we(2),Y(e,t)};Dr(a,e=>{n()&&e(o)}),Mr(I(a,2),1,()=>r,Or,(e,t)=>{var n=Ki(),r=F(n),i=en(r,!0),a=I(r,2);Mr(a,5,()=>(K(t),q(()=>K(t).songs)),Or,(e,t)=>{var n=Gi(),r=F(n),i=I(r,2),a=F(i),o=I(a,2);D(i),D(n),bn(()=>{Kr(r,`src`,(K(t),q(()=>K(t).albumCover))),Kr(r,`alt`,`${K(t),q(()=>K(t).album)??``} album cover`),X(a,`${K(t),q(()=>K(t).title)??``} `),X(o,` ${K(t),q(()=>K(t).artist)??``}`)}),lr(`click`,n,()=>{Pi(K(t)),Vi()||Ri()}),Y(e,n)}),D(a),D(n),bn(()=>X(i,(K(t),q(()=>K(t).name)))),Y(e,n)}),we(2),D(i),Y(e,i),Ke()}var Yi=J(`<link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200"/>`);function Xi(e){Y(e,Yi())}var Zi=J(`<main><div class="top svelte-16aahzw"><button class="svelte-16aahzw"><span class="material-symbols-outlined svelte-16aahzw">skip_previous</span></button> <button class="svelte-16aahzw"><span class="material-symbols-outlined svelte-16aahzw"> </span></button> <button class="svelte-16aahzw"><span class="material-symbols-outlined svelte-16aahzw">skip_next</span></button></div> <div class="bottom svelte-16aahzw"><button class="lyricsButton svelte-16aahzw"><span>chat</span></button> <button class="lyricsButton svelte-16aahzw" disabled=""><span>list</span></button></div></main>`);function Qi(e,t){Ge(t,!1);let n=Q(t,`togglePlay`,8,()=>{}),r=Q(t,`forwards`,8,()=>{}),i=Q(t,`backwards`,8,()=>{}),a=Q(t,`toggleLyrics`,8,()=>{}),o=Q(t,`playing`,8,!1),s=Q(t,`isMini`,8,!0),c=Q(t,`lyricsOpen`,8,!0);$r();var l=Zi(),u=F(l),d=F(u),f=I(d,2),p=en(F(f),!0);D(f);var m=I(f,2);D(u);var h=I(u,2),g=F(h),_=en(g),v=I(g,2);Z(F(v),1,`material-symbols-outlined outlined svelte-16aahzw`),D(v),D(h),D(l),bn(()=>{Z(l,1,`${s()?`mini`:`player`} ${c()?`lyricsOpen`:``}`,`svelte-16aahzw`),X(p,o()?`pause`:`play_arrow`),Z(_,1,`material-symbols-outlined ${c()?``:`outlined`}`,`svelte-16aahzw`)}),lr(`click`,d,function(...e){i()?.apply(this,e)}),lr(`click`,f,function(...e){n()?.apply(this,e)}),lr(`click`,m,function(...e){r()?.apply(this,e)}),lr(`click`,g,()=>{a()()}),Y(e,l),Ke()}var $i=J(`<div class="playerControls plcB svelte-15krbn2"><!></div>`),ea=J(`<div class="lyrics svelte-15krbn2"><!></div>`),ta=J(`<div class="right svelte-15krbn2"><div class="playerControls svelte-15krbn2"><!></div></div>`),na=J(`<div class="playerControls plcA svelte-15krbn2"><!></div>`),ra=J(`<main><div class="inside svelte-15krbn2"><div class="left svelte-15krbn2"><img alt="Album cover" class="svelte-15krbn2"/> <div class="svelte-15krbn2"><div class="title svelte-15krbn2"> </div> <div class="artist svelte-15krbn2"> </div></div> <!></div> <div><button class="svelte-15krbn2"><span class="material-symbols-outlined svelte-15krbn2"> </span></button></div> <!> <!></div> <!></main>`);function ia(e,t){Ge(t,!1);let n=Q(t,`isDemo`,8,!0),r=M(!0),i=zi,a=Bi,o=M(Fi()),s=M(!0);n();let c=M(!1);function l(){return N(r,!K(r)),K(r)}setInterval(()=>{if(Vi()!=K(c))try{K(u)(Vi())}catch{}N(c,Vi()),N(o,Fi())},80);let u=M((e=!0)=>{});ti(()=>{}),$r();var d=ra(),f=F(d),p=F(f),m=F(p),h=I(m,2),g=F(h),_=en(g,!0),v=en(I(g,2),!0);D(h);var y=I(h,2),b=e=>{var t=$i();Qi(F(t),{get togglePlay(){return Ri},get playing(){return K(c)},get isMini(){return K(s)},toggleLyrics:l,get lyricsOpen(){return K(r)},get backwards(){return i},get forwards(){return a}}),D(t),Y(e,t)};Dr(y,e=>{K(s)||e(b)}),D(p);var x=I(p,2),S=F(x),ee=en(F(S),!0);D(S),D(x);var te=I(x,2),ne=e=>{var t=ea();Oi(F(t),{get lyricsOpen(){return K(r)},get setScrollActive(){return K(u)},set setScrollActive(e){N(u,e)},$$legacy:!0}),D(t),Y(e,t)};Dr(te,e=>{K(s)||e(ne)});var re=I(te,2),ie=e=>{var t=ta(),n=F(t);Qi(F(n),{get togglePlay(){return Ri},get playing(){return K(c)},get isMini(){return K(s)},toggleLyrics:l,get lyricsOpen(){return K(r)},get backwards(){return i},get forwards(){return a}}),D(n),D(t),Y(e,t)};Dr(re,e=>{K(s)&&e(ie)}),D(f);var ae=I(f,2),oe=e=>{var t=na();Qi(F(t),{get togglePlay(){return Ri},get playing(){return K(c)},get isMini(){return K(s)},toggleLyrics:l,get lyricsOpen(){return K(r)},get backwards(){return i},get forwards(){return a}}),D(t),Y(e,t)};Dr(ae,e=>{K(s)||e(oe)}),D(d),bn(()=>{Z(d,1,`${K(s)?`mini`:``}player ${K(r)?`lyrics`:``}`,`svelte-15krbn2`),Kr(m,`src`,(K(o),q(()=>K(o).albumCover))),X(_,(K(o),q(()=>K(o).title))),X(v,(K(o),q(()=>K(o).artist))),Z(x,1,Br(K(s)?`centre`:`right`),`svelte-15krbn2`),X(ee,K(s)?`keyboard_arrow_up`:`keyboard_arrow_down`)}),lr(`click`,S,()=>{if(N(s,!K(s)),!K(s))try{K(u)(Vi())}catch{}}),Y(e,d),Ke()}var aa=J(`<span class="demo svelte-gwjq7z">Demo</span>`),oa=J(`<main class="svelte-gwjq7z"><span class="left svelte-gwjq7z"><img class="logo svelte-gwjq7z" alt="Systole logo"/> <h2 class="svelte-gwjq7z">Systole</h2> <!></span></main>`);function sa(e,t){let n=Q(t,`isDemo`,8,!0);var r=oa(),i=F(r),a=F(i),o=I(a,4),s=e=>{Y(e,aa())};Dr(o,e=>{n()&&e(s)}),D(i),D(r),bn(()=>Kr(a,`src`,vi)),Y(e,r)}var ca=J(`<!> <!> <!> <!>`,1);function la(e){let t=M(!0);var n=ca(),r=$t(n);Ji(r,{get isDemo(){return K(t)},set isDemo(e){N(t,e)},$$legacy:!0});var i=I(r,2);sa(i,{get isDemo(){return K(t)},set isDemo(e){N(t,e)},$$legacy:!0});var a=I(i,2);ia(a,{get isDemo(){return K(t)},set isDemo(e){N(t,e)},$$legacy:!0}),Xi(I(a,2),{}),Y(e,n)}Sr(la,{target:document.getElementById(`app`)});