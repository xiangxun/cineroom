function wo(i,e){const t=Object.create(null),n=i.split(",");for(let s=0;s<n.length;s++)t[n[s]]=!0;return e?s=>!!t[s.toLowerCase()]:s=>!!t[s]}const Rf="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",Pf=wo(Rf);function Pl(i){return!!i||i===""}function To(i){if(Fe(i)){const e={};for(let t=0;t<i.length;t++){const n=i[t],s=gt(n)?Ff(n):To(n);if(s)for(const r in s)e[r]=s[r]}return e}else{if(gt(i))return i;if(Et(i))return i}}const If=/;(?![^(]*\))/g,Df=/:(.+)/;function Ff(i){const e={};return i.split(If).forEach(t=>{if(t){const n=t.split(Df);n.length>1&&(e[n[0].trim()]=n[1].trim())}}),e}function Eo(i){let e="";if(gt(i))e=i;else if(Fe(i))for(let t=0;t<i.length;t++){const n=Eo(i[t]);n&&(e+=n+" ")}else if(Et(i))for(const t in i)i[t]&&(e+=t+" ");return e.trim()}const et={},Ni=[],jt=()=>{},Nf=()=>!1,Of=/^on[^a-z]/,fr=i=>Of.test(i),Ao=i=>i.startsWith("onUpdate:"),mt=Object.assign,Co=(i,e)=>{const t=i.indexOf(e);t>-1&&i.splice(t,1)},Uf=Object.prototype.hasOwnProperty,ke=(i,e)=>Uf.call(i,e),Fe=Array.isArray,Rs=i=>dr(i)==="[object Map]",zf=i=>dr(i)==="[object Set]",Oe=i=>typeof i=="function",gt=i=>typeof i=="string",Lo=i=>typeof i=="symbol",Et=i=>i!==null&&typeof i=="object",Il=i=>Et(i)&&Oe(i.then)&&Oe(i.catch),Bf=Object.prototype.toString,dr=i=>Bf.call(i),kf=i=>dr(i).slice(8,-1),Hf=i=>dr(i)==="[object Object]",Ro=i=>gt(i)&&i!=="NaN"&&i[0]!=="-"&&""+parseInt(i,10)===i,pr=wo(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),mr=i=>{const e=Object.create(null);return t=>e[t]||(e[t]=i(t))},Vf=/-(\w)/g,Oi=mr(i=>i.replace(Vf,(e,t)=>t?t.toUpperCase():"")),Gf=/\B([A-Z])/g,Ui=mr(i=>i.replace(Gf,"-$1").toLowerCase()),Dl=mr(i=>i.charAt(0).toUpperCase()+i.slice(1)),Po=mr(i=>i?`on${Dl(i)}`:""),Ps=(i,e)=>!Object.is(i,e),Io=(i,e)=>{for(let t=0;t<i.length;t++)i[t](e)},gr=(i,e,t)=>{Object.defineProperty(i,e,{configurable:!0,enumerable:!1,value:t})},Wf=i=>{const e=parseFloat(i);return isNaN(e)?i:e};let Fl;const jf=()=>Fl||(Fl=typeof globalThis!="undefined"?globalThis:typeof self!="undefined"?self:typeof window!="undefined"?window:typeof global!="undefined"?global:{});let an;class Nl{constructor(e=!1){this.active=!0,this.effects=[],this.cleanups=[],!e&&an&&(this.parent=an,this.index=(an.scopes||(an.scopes=[])).push(this)-1)}run(e){if(this.active){const t=an;try{return an=this,e()}finally{an=t}}}on(){an=this}off(){an=this.parent}stop(e){if(this.active){let t,n;for(t=0,n=this.effects.length;t<n;t++)this.effects[t].stop();for(t=0,n=this.cleanups.length;t<n;t++)this.cleanups[t]();if(this.scopes)for(t=0,n=this.scopes.length;t<n;t++)this.scopes[t].stop(!0);if(this.parent&&!e){const s=this.parent.scopes.pop();s&&s!==this&&(this.parent.scopes[this.index]=s,s.index=this.index)}this.active=!1}}}function Xf(i){return new Nl(i)}function qf(i,e=an){e&&e.active&&e.effects.push(i)}const Do=i=>{const e=new Set(i);return e.w=0,e.n=0,e},Ol=i=>(i.w&Pn)>0,Ul=i=>(i.n&Pn)>0,Yf=({deps:i})=>{if(i.length)for(let e=0;e<i.length;e++)i[e].w|=Pn},Kf=i=>{const{deps:e}=i;if(e.length){let t=0;for(let n=0;n<e.length;n++){const s=e[n];Ol(s)&&!Ul(s)?s.delete(i):e[t++]=s,s.w&=~Pn,s.n&=~Pn}e.length=t}},Fo=new WeakMap;let Is=0,Pn=1;const No=30;let Xt;const $n=Symbol(""),Oo=Symbol("");class Uo{constructor(e,t=null,n){this.fn=e,this.scheduler=t,this.active=!0,this.deps=[],this.parent=void 0,qf(this,n)}run(){if(!this.active)return this.fn();let e=Xt,t=In;for(;e;){if(e===this)return;e=e.parent}try{return this.parent=Xt,Xt=this,In=!0,Pn=1<<++Is,Is<=No?Yf(this):zl(this),this.fn()}finally{Is<=No&&Kf(this),Pn=1<<--Is,Xt=this.parent,In=t,this.parent=void 0,this.deferStop&&this.stop()}}stop(){Xt===this?this.deferStop=!0:this.active&&(zl(this),this.onStop&&this.onStop(),this.active=!1)}}function zl(i){const{deps:e}=i;if(e.length){for(let t=0;t<e.length;t++)e[t].delete(i);e.length=0}}let In=!0;const Bl=[];function zi(){Bl.push(In),In=!1}function Bi(){const i=Bl.pop();In=i===void 0?!0:i}function Nt(i,e,t){if(In&&Xt){let n=Fo.get(i);n||Fo.set(i,n=new Map);let s=n.get(t);s||n.set(t,s=Do()),kl(s)}}function kl(i,e){let t=!1;Is<=No?Ul(i)||(i.n|=Pn,t=!Ol(i)):t=!i.has(Xt),t&&(i.add(Xt),Xt.deps.push(i))}function mn(i,e,t,n,s,r){const o=Fo.get(i);if(!o)return;let a=[];if(e==="clear")a=[...o.values()];else if(t==="length"&&Fe(i))o.forEach((l,c)=>{(c==="length"||c>=n)&&a.push(l)});else switch(t!==void 0&&a.push(o.get(t)),e){case"add":Fe(i)?Ro(t)&&a.push(o.get("length")):(a.push(o.get($n)),Rs(i)&&a.push(o.get(Oo)));break;case"delete":Fe(i)||(a.push(o.get($n)),Rs(i)&&a.push(o.get(Oo)));break;case"set":Rs(i)&&a.push(o.get($n));break}if(a.length===1)a[0]&&zo(a[0]);else{const l=[];for(const c of a)c&&l.push(...c);zo(Do(l))}}function zo(i,e){const t=Fe(i)?i:[...i];for(const n of t)n.computed&&Hl(n);for(const n of t)n.computed||Hl(n)}function Hl(i,e){(i!==Xt||i.allowRecurse)&&(i.scheduler?i.scheduler():i.run())}const Zf=wo("__proto__,__v_isRef,__isVue"),Vl=new Set(Object.getOwnPropertyNames(Symbol).filter(i=>i!=="arguments"&&i!=="caller").map(i=>Symbol[i]).filter(Lo)),$f=Bo(),Qf=Bo(!1,!0),Jf=Bo(!0),Gl=ed();function ed(){const i={};return["includes","indexOf","lastIndexOf"].forEach(e=>{i[e]=function(...t){const n=We(this);for(let r=0,o=this.length;r<o;r++)Nt(n,"get",r+"");const s=n[e](...t);return s===-1||s===!1?n[e](...t.map(We)):s}}),["push","pop","shift","unshift","splice"].forEach(e=>{i[e]=function(...t){zi();const n=We(this)[e].apply(this,t);return Bi(),n}}),i}function Bo(i=!1,e=!1){return function(n,s,r){if(s==="__v_isReactive")return!i;if(s==="__v_isReadonly")return i;if(s==="__v_isShallow")return e;if(s==="__v_raw"&&r===(i?e?gd:Ql:e?$l:Zl).get(n))return n;const o=Fe(n);if(!i&&o&&ke(Gl,s))return Reflect.get(Gl,s,r);const a=Reflect.get(n,s,r);return(Lo(s)?Vl.has(s):Zf(s))||(i||Nt(n,"get",s),e)?a:_t(a)?o&&Ro(s)?a:a.value:Et(a)?i?Jl(a):Vo(a):a}}const td=Wl(),nd=Wl(!0);function Wl(i=!1){return function(t,n,s,r){let o=t[n];if(Ds(o)&&_t(o)&&!_t(s))return!1;if(!i&&!Ds(s)&&(Wo(s)||(s=We(s),o=We(o)),!Fe(t)&&_t(o)&&!_t(s)))return o.value=s,!0;const a=Fe(t)&&Ro(n)?Number(n)<t.length:ke(t,n),l=Reflect.set(t,n,s,r);return t===We(r)&&(a?Ps(s,o)&&mn(t,"set",n,s):mn(t,"add",n,s)),l}}function id(i,e){const t=ke(i,e);i[e];const n=Reflect.deleteProperty(i,e);return n&&t&&mn(i,"delete",e,void 0),n}function sd(i,e){const t=Reflect.has(i,e);return(!Lo(e)||!Vl.has(e))&&Nt(i,"has",e),t}function rd(i){return Nt(i,"iterate",Fe(i)?"length":$n),Reflect.ownKeys(i)}const jl={get:$f,set:td,deleteProperty:id,has:sd,ownKeys:rd},od={get:Jf,set(i,e){return!0},deleteProperty(i,e){return!0}},ad=mt({},jl,{get:Qf,set:nd}),ko=i=>i,_r=i=>Reflect.getPrototypeOf(i);function xr(i,e,t=!1,n=!1){i=i.__v_raw;const s=We(i),r=We(e);t||(e!==r&&Nt(s,"get",e),Nt(s,"get",r));const{has:o}=_r(s),a=n?ko:t?Xo:Fs;if(o.call(s,e))return a(i.get(e));if(o.call(s,r))return a(i.get(r));i!==s&&i.get(e)}function vr(i,e=!1){const t=this.__v_raw,n=We(t),s=We(i);return e||(i!==s&&Nt(n,"has",i),Nt(n,"has",s)),i===s?t.has(i):t.has(i)||t.has(s)}function yr(i,e=!1){return i=i.__v_raw,!e&&Nt(We(i),"iterate",$n),Reflect.get(i,"size",i)}function Xl(i){i=We(i);const e=We(this);return _r(e).has.call(e,i)||(e.add(i),mn(e,"add",i,i)),this}function ql(i,e){e=We(e);const t=We(this),{has:n,get:s}=_r(t);let r=n.call(t,i);r||(i=We(i),r=n.call(t,i));const o=s.call(t,i);return t.set(i,e),r?Ps(e,o)&&mn(t,"set",i,e):mn(t,"add",i,e),this}function Yl(i){const e=We(this),{has:t,get:n}=_r(e);let s=t.call(e,i);s||(i=We(i),s=t.call(e,i)),n&&n.call(e,i);const r=e.delete(i);return s&&mn(e,"delete",i,void 0),r}function Kl(){const i=We(this),e=i.size!==0,t=i.clear();return e&&mn(i,"clear",void 0,void 0),t}function Mr(i,e){return function(n,s){const r=this,o=r.__v_raw,a=We(o),l=e?ko:i?Xo:Fs;return!i&&Nt(a,"iterate",$n),o.forEach((c,u)=>n.call(s,l(c),l(u),r))}}function br(i,e,t){return function(...n){const s=this.__v_raw,r=We(s),o=Rs(r),a=i==="entries"||i===Symbol.iterator&&o,l=i==="keys"&&o,c=s[i](...n),u=t?ko:e?Xo:Fs;return!e&&Nt(r,"iterate",l?Oo:$n),{next(){const{value:h,done:f}=c.next();return f?{value:h,done:f}:{value:a?[u(h[0]),u(h[1])]:u(h),done:f}},[Symbol.iterator](){return this}}}}function Dn(i){return function(...e){return i==="delete"?!1:this}}function ld(){const i={get(r){return xr(this,r)},get size(){return yr(this)},has:vr,add:Xl,set:ql,delete:Yl,clear:Kl,forEach:Mr(!1,!1)},e={get(r){return xr(this,r,!1,!0)},get size(){return yr(this)},has:vr,add:Xl,set:ql,delete:Yl,clear:Kl,forEach:Mr(!1,!0)},t={get(r){return xr(this,r,!0)},get size(){return yr(this,!0)},has(r){return vr.call(this,r,!0)},add:Dn("add"),set:Dn("set"),delete:Dn("delete"),clear:Dn("clear"),forEach:Mr(!0,!1)},n={get(r){return xr(this,r,!0,!0)},get size(){return yr(this,!0)},has(r){return vr.call(this,r,!0)},add:Dn("add"),set:Dn("set"),delete:Dn("delete"),clear:Dn("clear"),forEach:Mr(!0,!0)};return["keys","values","entries",Symbol.iterator].forEach(r=>{i[r]=br(r,!1,!1),t[r]=br(r,!0,!1),e[r]=br(r,!1,!0),n[r]=br(r,!0,!0)}),[i,t,e,n]}const[cd,ud,hd,fd]=ld();function Ho(i,e){const t=e?i?fd:hd:i?ud:cd;return(n,s,r)=>s==="__v_isReactive"?!i:s==="__v_isReadonly"?i:s==="__v_raw"?n:Reflect.get(ke(t,s)&&s in n?t:n,s,r)}const dd={get:Ho(!1,!1)},pd={get:Ho(!1,!0)},md={get:Ho(!0,!1)},Zl=new WeakMap,$l=new WeakMap,Ql=new WeakMap,gd=new WeakMap;function _d(i){switch(i){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function xd(i){return i.__v_skip||!Object.isExtensible(i)?0:_d(kf(i))}function Vo(i){return Ds(i)?i:Go(i,!1,jl,dd,Zl)}function vd(i){return Go(i,!1,ad,pd,$l)}function Jl(i){return Go(i,!0,od,md,Ql)}function Go(i,e,t,n,s){if(!Et(i)||i.__v_raw&&!(e&&i.__v_isReactive))return i;const r=s.get(i);if(r)return r;const o=xd(i);if(o===0)return i;const a=new Proxy(i,o===2?n:t);return s.set(i,a),a}function ki(i){return Ds(i)?ki(i.__v_raw):!!(i&&i.__v_isReactive)}function Ds(i){return!!(i&&i.__v_isReadonly)}function Wo(i){return!!(i&&i.__v_isShallow)}function ec(i){return ki(i)||Ds(i)}function We(i){const e=i&&i.__v_raw;return e?We(e):i}function jo(i){return gr(i,"__v_skip",!0),i}const Fs=i=>Et(i)?Vo(i):i,Xo=i=>Et(i)?Jl(i):i;function tc(i){In&&Xt&&(i=We(i),kl(i.dep||(i.dep=Do())))}function nc(i,e){i=We(i),i.dep&&zo(i.dep)}function _t(i){return!!(i&&i.__v_isRef===!0)}function yd(i){return Md(i,!1)}function Md(i,e){return _t(i)?i:new bd(i,e)}class bd{constructor(e,t){this.__v_isShallow=t,this.dep=void 0,this.__v_isRef=!0,this._rawValue=t?e:We(e),this._value=t?e:Fs(e)}get value(){return tc(this),this._value}set value(e){e=this.__v_isShallow?e:We(e),Ps(e,this._rawValue)&&(this._rawValue=e,this._value=this.__v_isShallow?e:Fs(e),nc(this))}}function Sd(i){return _t(i)?i.value:i}const wd={get:(i,e,t)=>Sd(Reflect.get(i,e,t)),set:(i,e,t,n)=>{const s=i[e];return _t(s)&&!_t(t)?(s.value=t,!0):Reflect.set(i,e,t,n)}};function ic(i){return ki(i)?i:new Proxy(i,wd)}class Td{constructor(e,t,n,s){this._setter=t,this.dep=void 0,this.__v_isRef=!0,this._dirty=!0,this.effect=new Uo(e,()=>{this._dirty||(this._dirty=!0,nc(this))}),this.effect.computed=this,this.effect.active=this._cacheable=!s,this.__v_isReadonly=n}get value(){const e=We(this);return tc(e),(e._dirty||!e._cacheable)&&(e._dirty=!1,e._value=e.effect.run()),e._value}set value(e){this._setter(e)}}function Ed(i,e,t=!1){let n,s;const r=Oe(i);return r?(n=i,s=jt):(n=i.get,s=i.set),new Td(n,s,r||!s,t)}function Fn(i,e,t,n){let s;try{s=n?i(...n):i()}catch(r){Sr(r,e,t)}return s}function Bt(i,e,t,n){if(Oe(i)){const r=Fn(i,e,t,n);return r&&Il(r)&&r.catch(o=>{Sr(o,e,t)}),r}const s=[];for(let r=0;r<i.length;r++)s.push(Bt(i[r],e,t,n));return s}function Sr(i,e,t,n=!0){const s=e?e.vnode:null;if(e){let r=e.parent;const o=e.proxy,a=t;for(;r;){const c=r.ec;if(c){for(let u=0;u<c.length;u++)if(c[u](i,o,a)===!1)return}r=r.parent}const l=e.appContext.config.errorHandler;if(l){Fn(l,null,10,[i,o,a]);return}}Ad(i,t,s,n)}function Ad(i,e,t,n=!0){console.error(i)}let wr=!1,qo=!1;const Ot=[];let gn=0;const Ns=[];let Os=null,Hi=0;const Us=[];let Nn=null,Vi=0;const sc=Promise.resolve();let Yo=null,Ko=null;function Cd(i){const e=Yo||sc;return i?e.then(this?i.bind(this):i):e}function Ld(i){let e=gn+1,t=Ot.length;for(;e<t;){const n=e+t>>>1;zs(Ot[n])<i?e=n+1:t=n}return e}function rc(i){(!Ot.length||!Ot.includes(i,wr&&i.allowRecurse?gn+1:gn))&&i!==Ko&&(i.id==null?Ot.push(i):Ot.splice(Ld(i.id),0,i),oc())}function oc(){!wr&&!qo&&(qo=!0,Yo=sc.then(cc))}function Rd(i){const e=Ot.indexOf(i);e>gn&&Ot.splice(e,1)}function ac(i,e,t,n){Fe(i)?t.push(...i):(!e||!e.includes(i,i.allowRecurse?n+1:n))&&t.push(i),oc()}function Pd(i){ac(i,Os,Ns,Hi)}function Id(i){ac(i,Nn,Us,Vi)}function Tr(i,e=null){if(Ns.length){for(Ko=e,Os=[...new Set(Ns)],Ns.length=0,Hi=0;Hi<Os.length;Hi++)Os[Hi]();Os=null,Hi=0,Ko=null,Tr(i,e)}}function lc(i){if(Tr(),Us.length){const e=[...new Set(Us)];if(Us.length=0,Nn){Nn.push(...e);return}for(Nn=e,Nn.sort((t,n)=>zs(t)-zs(n)),Vi=0;Vi<Nn.length;Vi++)Nn[Vi]();Nn=null,Vi=0}}const zs=i=>i.id==null?1/0:i.id;function cc(i){qo=!1,wr=!0,Tr(i),Ot.sort((t,n)=>zs(t)-zs(n));const e=jt;try{for(gn=0;gn<Ot.length;gn++){const t=Ot[gn];t&&t.active!==!1&&Fn(t,null,14)}}finally{gn=0,Ot.length=0,lc(),wr=!1,Yo=null,(Ot.length||Ns.length||Us.length)&&cc(i)}}function Dd(i,e,...t){if(i.isUnmounted)return;const n=i.vnode.props||et;let s=t;const r=e.startsWith("update:"),o=r&&e.slice(7);if(o&&o in n){const u=`${o==="modelValue"?"model":o}Modifiers`,{number:h,trim:f}=n[u]||et;f&&(s=t.map(m=>m.trim())),h&&(s=t.map(Wf))}let a,l=n[a=Po(e)]||n[a=Po(Oi(e))];!l&&r&&(l=n[a=Po(Ui(e))]),l&&Bt(l,i,6,s);const c=n[a+"Once"];if(c){if(!i.emitted)i.emitted={};else if(i.emitted[a])return;i.emitted[a]=!0,Bt(c,i,6,s)}}function uc(i,e,t=!1){const n=e.emitsCache,s=n.get(i);if(s!==void 0)return s;const r=i.emits;let o={},a=!1;if(!Oe(i)){const l=c=>{const u=uc(c,e,!0);u&&(a=!0,mt(o,u))};!t&&e.mixins.length&&e.mixins.forEach(l),i.extends&&l(i.extends),i.mixins&&i.mixins.forEach(l)}return!r&&!a?(n.set(i,null),null):(Fe(r)?r.forEach(l=>o[l]=null):mt(o,r),n.set(i,o),o)}function Er(i,e){return!i||!fr(e)?!1:(e=e.slice(2).replace(/Once$/,""),ke(i,e[0].toLowerCase()+e.slice(1))||ke(i,Ui(e))||ke(i,e))}let ln=null,Ar=null;function Cr(i){const e=ln;return ln=i,Ar=i&&i.type.__scopeId||null,e}function kM(i){Ar=i}function HM(){Ar=null}function Fd(i,e=ln,t){if(!e||i._n)return i;const n=(...s)=>{n._d&&Uc(-1);const r=Cr(e),o=i(...s);return Cr(r),n._d&&Uc(1),o};return n._n=!0,n._c=!0,n._d=!0,n}function Zo(i){const{type:e,vnode:t,proxy:n,withProxy:s,props:r,propsOptions:[o],slots:a,attrs:l,emit:c,render:u,renderCache:h,data:f,setupState:m,ctx:g,inheritAttrs:p}=i;let d,_;const M=Cr(i);try{if(t.shapeFlag&4){const b=s||n;d=un(u.call(b,b,h,r,m,f,g)),_=l}else{const b=e;d=un(b.length>1?b(r,{attrs:l,slots:a,emit:c}):b(r,null)),_=e.props?l:Nd(l)}}catch(b){Bs.length=0,Sr(b,i,1),d=ni(xn)}let T=d;if(_&&p!==!1){const b=Object.keys(_),{shapeFlag:w}=T;b.length&&w&(1|6)&&(o&&b.some(Ao)&&(_=Od(_,o)),T=On(T,_))}return t.dirs&&(T=On(T),T.dirs=T.dirs?T.dirs.concat(t.dirs):t.dirs),t.transition&&(T.transition=t.transition),d=T,Cr(M),d}const Nd=i=>{let e;for(const t in i)(t==="class"||t==="style"||fr(t))&&((e||(e={}))[t]=i[t]);return e},Od=(i,e)=>{const t={};for(const n in i)(!Ao(n)||!(n.slice(9)in e))&&(t[n]=i[n]);return t};function Ud(i,e,t){const{props:n,children:s,component:r}=i,{props:o,children:a,patchFlag:l}=e,c=r.emitsOptions;if(e.dirs||e.transition)return!0;if(t&&l>=0){if(l&1024)return!0;if(l&16)return n?hc(n,o,c):!!o;if(l&8){const u=e.dynamicProps;for(let h=0;h<u.length;h++){const f=u[h];if(o[f]!==n[f]&&!Er(c,f))return!0}}}else return(s||a)&&(!a||!a.$stable)?!0:n===o?!1:n?o?hc(n,o,c):!0:!!o;return!1}function hc(i,e,t){const n=Object.keys(e);if(n.length!==Object.keys(i).length)return!0;for(let s=0;s<n.length;s++){const r=n[s];if(e[r]!==i[r]&&!Er(t,r))return!0}return!1}function zd({vnode:i,parent:e},t){for(;e&&e.subTree===i;)(i=e.vnode).el=t,e=e.parent}const Bd=i=>i.__isSuspense;function kd(i,e){e&&e.pendingBranch?Fe(i)?e.effects.push(...i):e.effects.push(i):Id(i)}function Hd(i,e){if(dt){let t=dt.provides;const n=dt.parent&&dt.parent.provides;n===t&&(t=dt.provides=Object.create(n)),t[i]=e}}function $o(i,e,t=!1){const n=dt||ln;if(n){const s=n.parent==null?n.vnode.appContext&&n.vnode.appContext.provides:n.parent.provides;if(s&&i in s)return s[i];if(arguments.length>1)return t&&Oe(e)?e.call(n.proxy):e}}const fc={};function Qo(i,e,t){return dc(i,e,t)}function dc(i,e,{immediate:t,deep:n,flush:s,onTrack:r,onTrigger:o}=et){const a=dt;let l,c=!1,u=!1;if(_t(i)?(l=()=>i.value,c=Wo(i)):ki(i)?(l=()=>i,n=!0):Fe(i)?(u=!0,c=i.some(_=>ki(_)||Wo(_)),l=()=>i.map(_=>{if(_t(_))return _.value;if(ki(_))return Gi(_);if(Oe(_))return Fn(_,a,2)})):Oe(i)?e?l=()=>Fn(i,a,2):l=()=>{if(!(a&&a.isUnmounted))return h&&h(),Bt(i,a,3,[f])}:l=jt,e&&n){const _=l;l=()=>Gi(_())}let h,f=_=>{h=d.onStop=()=>{Fn(_,a,4)}};if(Hs)return f=jt,e?t&&Bt(e,a,3,[l(),u?[]:void 0,f]):l(),jt;let m=u?[]:fc;const g=()=>{if(!!d.active)if(e){const _=d.run();(n||c||(u?_.some((M,T)=>Ps(M,m[T])):Ps(_,m)))&&(h&&h(),Bt(e,a,3,[_,m===fc?void 0:m,f]),m=_)}else d.run()};g.allowRecurse=!!e;let p;s==="sync"?p=g:s==="post"?p=()=>It(g,a&&a.suspense):p=()=>Pd(g);const d=new Uo(l,p);return e?t?g():m=d.run():s==="post"?It(d.run.bind(d),a&&a.suspense):d.run(),()=>{d.stop(),a&&a.scope&&Co(a.scope.effects,d)}}function Vd(i,e,t){const n=this.proxy,s=gt(i)?i.includes(".")?pc(n,i):()=>n[i]:i.bind(n,n);let r;Oe(e)?r=e:(r=e.handler,t=e);const o=dt;Wi(this);const a=dc(s,r.bind(n),t);return o?Wi(o):ii(),a}function pc(i,e){const t=e.split(".");return()=>{let n=i;for(let s=0;s<t.length&&n;s++)n=n[t[s]];return n}}function Gi(i,e){if(!Et(i)||i.__v_skip||(e=e||new Set,e.has(i)))return i;if(e.add(i),_t(i))Gi(i.value,e);else if(Fe(i))for(let t=0;t<i.length;t++)Gi(i[t],e);else if(zf(i)||Rs(i))i.forEach(t=>{Gi(t,e)});else if(Hf(i))for(const t in i)Gi(i[t],e);return i}function Gd(){const i={isMounted:!1,isLeaving:!1,isUnmounting:!1,leavingVNodes:new Map};return vc(()=>{i.isMounted=!0}),yc(()=>{i.isUnmounting=!0}),i}const kt=[Function,Array],Wd={name:"BaseTransition",props:{mode:String,appear:Boolean,persisted:Boolean,onBeforeEnter:kt,onEnter:kt,onAfterEnter:kt,onEnterCancelled:kt,onBeforeLeave:kt,onLeave:kt,onAfterLeave:kt,onLeaveCancelled:kt,onBeforeAppear:kt,onAppear:kt,onAfterAppear:kt,onAppearCancelled:kt},setup(i,{slots:e}){const t=Rp(),n=Gd();let s;return()=>{const r=e.default&&_c(e.default(),!0);if(!r||!r.length)return;let o=r[0];if(r.length>1){for(const p of r)if(p.type!==xn){o=p;break}}const a=We(i),{mode:l}=a;if(n.isLeaving)return ea(o);const c=gc(o);if(!c)return ea(o);const u=Jo(c,a,n,t);ta(c,u);const h=t.subTree,f=h&&gc(h);let m=!1;const{getTransitionKey:g}=c.type;if(g){const p=g();s===void 0?s=p:p!==s&&(s=p,m=!0)}if(f&&f.type!==xn&&(!ti(c,f)||m)){const p=Jo(f,a,n,t);if(ta(f,p),l==="out-in")return n.isLeaving=!0,p.afterLeave=()=>{n.isLeaving=!1,t.update()},ea(o);l==="in-out"&&c.type!==xn&&(p.delayLeave=(d,_,M)=>{const T=mc(n,f);T[String(f.key)]=f,d._leaveCb=()=>{_(),d._leaveCb=void 0,delete u.delayedLeave},u.delayedLeave=M})}return o}}},jd=Wd;function mc(i,e){const{leavingVNodes:t}=i;let n=t.get(e.type);return n||(n=Object.create(null),t.set(e.type,n)),n}function Jo(i,e,t,n){const{appear:s,mode:r,persisted:o=!1,onBeforeEnter:a,onEnter:l,onAfterEnter:c,onEnterCancelled:u,onBeforeLeave:h,onLeave:f,onAfterLeave:m,onLeaveCancelled:g,onBeforeAppear:p,onAppear:d,onAfterAppear:_,onAppearCancelled:M}=e,T=String(i.key),b=mc(t,i),w=(x,C)=>{x&&Bt(x,n,9,C)},R=(x,C)=>{const N=C[1];w(x,C),Fe(x)?x.every(U=>U.length<=1)&&N():x.length<=1&&N()},D={mode:r,persisted:o,beforeEnter(x){let C=a;if(!t.isMounted)if(s)C=p||a;else return;x._leaveCb&&x._leaveCb(!0);const N=b[T];N&&ti(i,N)&&N.el._leaveCb&&N.el._leaveCb(),w(C,[x])},enter(x){let C=l,N=c,U=u;if(!t.isMounted)if(s)C=d||l,N=_||c,U=M||u;else return;let Z=!1;const te=x._enterCb=O=>{Z||(Z=!0,O?w(U,[x]):w(N,[x]),D.delayedLeave&&D.delayedLeave(),x._enterCb=void 0)};C?R(C,[x,te]):te()},leave(x,C){const N=String(i.key);if(x._enterCb&&x._enterCb(!0),t.isUnmounting)return C();w(h,[x]);let U=!1;const Z=x._leaveCb=te=>{U||(U=!0,C(),te?w(g,[x]):w(m,[x]),x._leaveCb=void 0,b[N]===i&&delete b[N])};b[N]=i,f?R(f,[x,Z]):Z()},clone(x){return Jo(x,e,t,n)}};return D}function ea(i){if(Rr(i))return i=On(i),i.children=null,i}function gc(i){return Rr(i)?i.children?i.children[0]:void 0:i}function ta(i,e){i.shapeFlag&6&&i.component?ta(i.component.subTree,e):i.shapeFlag&128?(i.ssContent.transition=e.clone(i.ssContent),i.ssFallback.transition=e.clone(i.ssFallback)):i.transition=e}function _c(i,e=!1,t){let n=[],s=0;for(let r=0;r<i.length;r++){let o=i[r];const a=t==null?o.key:String(t)+String(o.key!=null?o.key:r);o.type===cn?(o.patchFlag&128&&s++,n=n.concat(_c(o.children,e,a))):(e||o.type!==xn)&&n.push(a!=null?On(o,{key:a}):o)}if(s>1)for(let r=0;r<n.length;r++)n[r].patchFlag=-2;return n}function VM(i){return Oe(i)?{setup:i,name:i.name}:i}const Lr=i=>!!i.type.__asyncLoader,Rr=i=>i.type.__isKeepAlive;function Xd(i,e){xc(i,"a",e)}function qd(i,e){xc(i,"da",e)}function xc(i,e,t=dt){const n=i.__wdc||(i.__wdc=()=>{let s=t;for(;s;){if(s.isDeactivated)return;s=s.parent}return i()});if(Pr(e,n,t),t){let s=t.parent;for(;s&&s.parent;)Rr(s.parent.vnode)&&Yd(n,e,t,s),s=s.parent}}function Yd(i,e,t,n){const s=Pr(e,i,n,!0);Mc(()=>{Co(n[e],s)},t)}function Pr(i,e,t=dt,n=!1){if(t){const s=t[i]||(t[i]=[]),r=e.__weh||(e.__weh=(...o)=>{if(t.isUnmounted)return;zi(),Wi(t);const a=Bt(e,t,i,o);return ii(),Bi(),a});return n?s.unshift(r):s.push(r),r}}const _n=i=>(e,t=dt)=>(!Hs||i==="sp")&&Pr(i,e,t),Kd=_n("bm"),vc=_n("m"),Zd=_n("bu"),$d=_n("u"),yc=_n("bum"),Mc=_n("um"),Qd=_n("sp"),Jd=_n("rtg"),ep=_n("rtc");function tp(i,e=dt){Pr("ec",i,e)}function Qn(i,e,t,n){const s=i.dirs,r=e&&e.dirs;for(let o=0;o<s.length;o++){const a=s[o];r&&(a.oldValue=r[o].value);let l=a.dir[n];l&&(zi(),Bt(l,t,8,[i.el,a,i,e]),Bi())}}const np=Symbol(),na=i=>i?kc(i)?ha(i)||i.proxy:na(i.parent):null,Ir=mt(Object.create(null),{$:i=>i,$el:i=>i.vnode.el,$data:i=>i.data,$props:i=>i.props,$attrs:i=>i.attrs,$slots:i=>i.slots,$refs:i=>i.refs,$parent:i=>na(i.parent),$root:i=>na(i.root),$emit:i=>i.emit,$options:i=>wc(i),$forceUpdate:i=>i.f||(i.f=()=>rc(i.update)),$nextTick:i=>i.n||(i.n=Cd.bind(i.proxy)),$watch:i=>Vd.bind(i)}),ip={get({_:i},e){const{ctx:t,setupState:n,data:s,props:r,accessCache:o,type:a,appContext:l}=i;let c;if(e[0]!=="$"){const m=o[e];if(m!==void 0)switch(m){case 1:return n[e];case 2:return s[e];case 4:return t[e];case 3:return r[e]}else{if(n!==et&&ke(n,e))return o[e]=1,n[e];if(s!==et&&ke(s,e))return o[e]=2,s[e];if((c=i.propsOptions[0])&&ke(c,e))return o[e]=3,r[e];if(t!==et&&ke(t,e))return o[e]=4,t[e];ia&&(o[e]=0)}}const u=Ir[e];let h,f;if(u)return e==="$attrs"&&Nt(i,"get",e),u(i);if((h=a.__cssModules)&&(h=h[e]))return h;if(t!==et&&ke(t,e))return o[e]=4,t[e];if(f=l.config.globalProperties,ke(f,e))return f[e]},set({_:i},e,t){const{data:n,setupState:s,ctx:r}=i;return s!==et&&ke(s,e)?(s[e]=t,!0):n!==et&&ke(n,e)?(n[e]=t,!0):ke(i.props,e)||e[0]==="$"&&e.slice(1)in i?!1:(r[e]=t,!0)},has({_:{data:i,setupState:e,accessCache:t,ctx:n,appContext:s,propsOptions:r}},o){let a;return!!t[o]||i!==et&&ke(i,o)||e!==et&&ke(e,o)||(a=r[0])&&ke(a,o)||ke(n,o)||ke(Ir,o)||ke(s.config.globalProperties,o)},defineProperty(i,e,t){return t.get!=null?i._.accessCache[e]=0:ke(t,"value")&&this.set(i,e,t.value,null),Reflect.defineProperty(i,e,t)}};let ia=!0;function sp(i){const e=wc(i),t=i.proxy,n=i.ctx;ia=!1,e.beforeCreate&&bc(e.beforeCreate,i,"bc");const{data:s,computed:r,methods:o,watch:a,provide:l,inject:c,created:u,beforeMount:h,mounted:f,beforeUpdate:m,updated:g,activated:p,deactivated:d,beforeDestroy:_,beforeUnmount:M,destroyed:T,unmounted:b,render:w,renderTracked:R,renderTriggered:D,errorCaptured:x,serverPrefetch:C,expose:N,inheritAttrs:U,components:Z,directives:te,filters:O}=e;if(c&&rp(c,n,null,i.appContext.config.unwrapInjectedRef),o)for(const G in o){const W=o[G];Oe(W)&&(n[G]=W.bind(t))}if(s){const G=s.call(t,t);Et(G)&&(i.data=Vo(G))}if(ia=!0,r)for(const G in r){const W=r[G],B=Oe(W)?W.bind(t,t):Oe(W.get)?W.get.bind(t,t):jt,q=!Oe(W)&&Oe(W.set)?W.set.bind(t):jt,le=Op({get:B,set:q});Object.defineProperty(n,G,{enumerable:!0,configurable:!0,get:()=>le.value,set:ne=>le.value=ne})}if(a)for(const G in a)Sc(a[G],n,t,G);if(l){const G=Oe(l)?l.call(t):l;Reflect.ownKeys(G).forEach(W=>{Hd(W,G[W])})}u&&bc(u,i,"c");function z(G,W){Fe(W)?W.forEach(B=>G(B.bind(t))):W&&G(W.bind(t))}if(z(Kd,h),z(vc,f),z(Zd,m),z($d,g),z(Xd,p),z(qd,d),z(tp,x),z(ep,R),z(Jd,D),z(yc,M),z(Mc,b),z(Qd,C),Fe(N))if(N.length){const G=i.exposed||(i.exposed={});N.forEach(W=>{Object.defineProperty(G,W,{get:()=>t[W],set:B=>t[W]=B})})}else i.exposed||(i.exposed={});w&&i.render===jt&&(i.render=w),U!=null&&(i.inheritAttrs=U),Z&&(i.components=Z),te&&(i.directives=te)}function rp(i,e,t=jt,n=!1){Fe(i)&&(i=sa(i));for(const s in i){const r=i[s];let o;Et(r)?"default"in r?o=$o(r.from||s,r.default,!0):o=$o(r.from||s):o=$o(r),_t(o)&&n?Object.defineProperty(e,s,{enumerable:!0,configurable:!0,get:()=>o.value,set:a=>o.value=a}):e[s]=o}}function bc(i,e,t){Bt(Fe(i)?i.map(n=>n.bind(e.proxy)):i.bind(e.proxy),e,t)}function Sc(i,e,t,n){const s=n.includes(".")?pc(t,n):()=>t[n];if(gt(i)){const r=e[i];Oe(r)&&Qo(s,r)}else if(Oe(i))Qo(s,i.bind(t));else if(Et(i))if(Fe(i))i.forEach(r=>Sc(r,e,t,n));else{const r=Oe(i.handler)?i.handler.bind(t):e[i.handler];Oe(r)&&Qo(s,r,i)}}function wc(i){const e=i.type,{mixins:t,extends:n}=e,{mixins:s,optionsCache:r,config:{optionMergeStrategies:o}}=i.appContext,a=r.get(e);let l;return a?l=a:!s.length&&!t&&!n?l=e:(l={},s.length&&s.forEach(c=>Dr(l,c,o,!0)),Dr(l,e,o)),r.set(e,l),l}function Dr(i,e,t,n=!1){const{mixins:s,extends:r}=e;r&&Dr(i,r,t,!0),s&&s.forEach(o=>Dr(i,o,t,!0));for(const o in e)if(!(n&&o==="expose")){const a=op[o]||t&&t[o];i[o]=a?a(i[o],e[o]):e[o]}return i}const op={data:Tc,props:Jn,emits:Jn,methods:Jn,computed:Jn,beforeCreate:At,created:At,beforeMount:At,mounted:At,beforeUpdate:At,updated:At,beforeDestroy:At,beforeUnmount:At,destroyed:At,unmounted:At,activated:At,deactivated:At,errorCaptured:At,serverPrefetch:At,components:Jn,directives:Jn,watch:lp,provide:Tc,inject:ap};function Tc(i,e){return e?i?function(){return mt(Oe(i)?i.call(this,this):i,Oe(e)?e.call(this,this):e)}:e:i}function ap(i,e){return Jn(sa(i),sa(e))}function sa(i){if(Fe(i)){const e={};for(let t=0;t<i.length;t++)e[i[t]]=i[t];return e}return i}function At(i,e){return i?[...new Set([].concat(i,e))]:e}function Jn(i,e){return i?mt(mt(Object.create(null),i),e):e}function lp(i,e){if(!i)return e;if(!e)return i;const t=mt(Object.create(null),i);for(const n in e)t[n]=At(i[n],e[n]);return t}function cp(i,e,t,n=!1){const s={},r={};gr(r,Fr,1),i.propsDefaults=Object.create(null),Ec(i,e,s,r);for(const o in i.propsOptions[0])o in s||(s[o]=void 0);t?i.props=n?s:vd(s):i.type.props?i.props=s:i.props=r,i.attrs=r}function up(i,e,t,n){const{props:s,attrs:r,vnode:{patchFlag:o}}=i,a=We(s),[l]=i.propsOptions;let c=!1;if((n||o>0)&&!(o&16)){if(o&8){const u=i.vnode.dynamicProps;for(let h=0;h<u.length;h++){let f=u[h];if(Er(i.emitsOptions,f))continue;const m=e[f];if(l)if(ke(r,f))m!==r[f]&&(r[f]=m,c=!0);else{const g=Oi(f);s[g]=ra(l,a,g,m,i,!1)}else m!==r[f]&&(r[f]=m,c=!0)}}}else{Ec(i,e,s,r)&&(c=!0);let u;for(const h in a)(!e||!ke(e,h)&&((u=Ui(h))===h||!ke(e,u)))&&(l?t&&(t[h]!==void 0||t[u]!==void 0)&&(s[h]=ra(l,a,h,void 0,i,!0)):delete s[h]);if(r!==a)for(const h in r)(!e||!ke(e,h)&&!0)&&(delete r[h],c=!0)}c&&mn(i,"set","$attrs")}function Ec(i,e,t,n){const[s,r]=i.propsOptions;let o=!1,a;if(e)for(let l in e){if(pr(l))continue;const c=e[l];let u;s&&ke(s,u=Oi(l))?!r||!r.includes(u)?t[u]=c:(a||(a={}))[u]=c:Er(i.emitsOptions,l)||(!(l in n)||c!==n[l])&&(n[l]=c,o=!0)}if(r){const l=We(t),c=a||et;for(let u=0;u<r.length;u++){const h=r[u];t[h]=ra(s,l,h,c[h],i,!ke(c,h))}}return o}function ra(i,e,t,n,s,r){const o=i[t];if(o!=null){const a=ke(o,"default");if(a&&n===void 0){const l=o.default;if(o.type!==Function&&Oe(l)){const{propsDefaults:c}=s;t in c?n=c[t]:(Wi(s),n=c[t]=l.call(null,e),ii())}else n=l}o[0]&&(r&&!a?n=!1:o[1]&&(n===""||n===Ui(t))&&(n=!0))}return n}function Ac(i,e,t=!1){const n=e.propsCache,s=n.get(i);if(s)return s;const r=i.props,o={},a=[];let l=!1;if(!Oe(i)){const u=h=>{l=!0;const[f,m]=Ac(h,e,!0);mt(o,f),m&&a.push(...m)};!t&&e.mixins.length&&e.mixins.forEach(u),i.extends&&u(i.extends),i.mixins&&i.mixins.forEach(u)}if(!r&&!l)return n.set(i,Ni),Ni;if(Fe(r))for(let u=0;u<r.length;u++){const h=Oi(r[u]);Cc(h)&&(o[h]=et)}else if(r)for(const u in r){const h=Oi(u);if(Cc(h)){const f=r[u],m=o[h]=Fe(f)||Oe(f)?{type:f}:f;if(m){const g=Pc(Boolean,m.type),p=Pc(String,m.type);m[0]=g>-1,m[1]=p<0||g<p,(g>-1||ke(m,"default"))&&a.push(h)}}}const c=[o,a];return n.set(i,c),c}function Cc(i){return i[0]!=="$"}function Lc(i){const e=i&&i.toString().match(/^\s*function (\w+)/);return e?e[1]:i===null?"null":""}function Rc(i,e){return Lc(i)===Lc(e)}function Pc(i,e){return Fe(e)?e.findIndex(t=>Rc(t,i)):Oe(e)&&Rc(e,i)?0:-1}const Ic=i=>i[0]==="_"||i==="$stable",oa=i=>Fe(i)?i.map(un):[un(i)],hp=(i,e,t)=>{if(e._n)return e;const n=Fd((...s)=>oa(e(...s)),t);return n._c=!1,n},Dc=(i,e,t)=>{const n=i._ctx;for(const s in i){if(Ic(s))continue;const r=i[s];if(Oe(r))e[s]=hp(s,r,n);else if(r!=null){const o=oa(r);e[s]=()=>o}}},Fc=(i,e)=>{const t=oa(e);i.slots.default=()=>t},fp=(i,e)=>{if(i.vnode.shapeFlag&32){const t=e._;t?(i.slots=We(e),gr(e,"_",t)):Dc(e,i.slots={})}else i.slots={},e&&Fc(i,e);gr(i.slots,Fr,1)},dp=(i,e,t)=>{const{vnode:n,slots:s}=i;let r=!0,o=et;if(n.shapeFlag&32){const a=e._;a?t&&a===1?r=!1:(mt(s,e),!t&&a===1&&delete s._):(r=!e.$stable,Dc(e,s)),o=e}else e&&(Fc(i,e),o={default:1});if(r)for(const a in s)!Ic(a)&&!(a in o)&&delete s[a]};function Nc(){return{app:null,config:{isNativeTag:Nf,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let pp=0;function mp(i,e){return function(n,s=null){Oe(n)||(n=Object.assign({},n)),s!=null&&!Et(s)&&(s=null);const r=Nc(),o=new Set;let a=!1;const l=r.app={_uid:pp++,_component:n,_props:s,_container:null,_context:r,_instance:null,version:Up,get config(){return r.config},set config(c){},use(c,...u){return o.has(c)||(c&&Oe(c.install)?(o.add(c),c.install(l,...u)):Oe(c)&&(o.add(c),c(l,...u))),l},mixin(c){return r.mixins.includes(c)||r.mixins.push(c),l},component(c,u){return u?(r.components[c]=u,l):r.components[c]},directive(c,u){return u?(r.directives[c]=u,l):r.directives[c]},mount(c,u,h){if(!a){const f=ni(n,s);return f.appContext=r,u&&e?e(f,c):i(f,c,h),a=!0,l._container=c,c.__vue_app__=l,ha(f.component)||f.component.proxy}},unmount(){a&&(i(null,l._container),delete l._container.__vue_app__)},provide(c,u){return r.provides[c]=u,l}};return l}}function aa(i,e,t,n,s=!1){if(Fe(i)){i.forEach((f,m)=>aa(f,e&&(Fe(e)?e[m]:e),t,n,s));return}if(Lr(n)&&!s)return;const r=n.shapeFlag&4?ha(n.component)||n.component.proxy:n.el,o=s?null:r,{i:a,r:l}=i,c=e&&e.r,u=a.refs===et?a.refs={}:a.refs,h=a.setupState;if(c!=null&&c!==l&&(gt(c)?(u[c]=null,ke(h,c)&&(h[c]=null)):_t(c)&&(c.value=null)),Oe(l))Fn(l,a,12,[o,u]);else{const f=gt(l),m=_t(l);if(f||m){const g=()=>{if(i.f){const p=f?u[l]:l.value;s?Fe(p)&&Co(p,r):Fe(p)?p.includes(r)||p.push(r):f?(u[l]=[r],ke(h,l)&&(h[l]=u[l])):(l.value=[r],i.k&&(u[i.k]=l.value))}else f?(u[l]=o,ke(h,l)&&(h[l]=o)):m&&(l.value=o,i.k&&(u[i.k]=o))};o?(g.id=-1,It(g,t)):g()}}}const It=kd;function gp(i){return _p(i)}function _p(i,e){const t=jf();t.__VUE__=!0;const{insert:n,remove:s,patchProp:r,createElement:o,createText:a,createComment:l,setText:c,setElementText:u,parentNode:h,nextSibling:f,setScopeId:m=jt,cloneNode:g,insertStaticContent:p}=i,d=(A,I,V,J=null,ee=null,re=null,oe=!1,ae=null,ce=!!I.dynamicChildren)=>{if(A===I)return;A&&!ti(A,I)&&(J=Re(A),de(A,ee,re,!0),A=null),I.patchFlag===-2&&(ce=!1,I.dynamicChildren=null);const{type:y,ref:v,shapeFlag:F}=I;switch(y){case la:_(A,I,V,J);break;case xn:M(A,I,V,J);break;case ca:A==null&&T(I,V,J,oe);break;case cn:te(A,I,V,J,ee,re,oe,ae,ce);break;default:F&1?R(A,I,V,J,ee,re,oe,ae,ce):F&6?O(A,I,V,J,ee,re,oe,ae,ce):(F&64||F&128)&&y.process(A,I,V,J,ee,re,oe,ae,ce,_e)}v!=null&&ee&&aa(v,A&&A.ref,re,I||A,!I)},_=(A,I,V,J)=>{if(A==null)n(I.el=a(I.children),V,J);else{const ee=I.el=A.el;I.children!==A.children&&c(ee,I.children)}},M=(A,I,V,J)=>{A==null?n(I.el=l(I.children||""),V,J):I.el=A.el},T=(A,I,V,J)=>{[A.el,A.anchor]=p(A.children,I,V,J,A.el,A.anchor)},b=({el:A,anchor:I},V,J)=>{let ee;for(;A&&A!==I;)ee=f(A),n(A,V,J),A=ee;n(I,V,J)},w=({el:A,anchor:I})=>{let V;for(;A&&A!==I;)V=f(A),s(A),A=V;s(I)},R=(A,I,V,J,ee,re,oe,ae,ce)=>{oe=oe||I.type==="svg",A==null?D(I,V,J,ee,re,oe,ae,ce):N(A,I,ee,re,oe,ae,ce)},D=(A,I,V,J,ee,re,oe,ae)=>{let ce,y;const{type:v,props:F,shapeFlag:H,transition:$,patchFlag:se,dirs:ve}=A;if(A.el&&g!==void 0&&se===-1)ce=A.el=g(A.el);else{if(ce=A.el=o(A.type,re,F&&F.is,F),H&8?u(ce,A.children):H&16&&C(A.children,ce,null,J,ee,re&&v!=="foreignObject",oe,ae),ve&&Qn(A,null,J,"created"),F){for(const Y in F)Y!=="value"&&!pr(Y)&&r(ce,Y,null,F[Y],re,A.children,J,ee,je);"value"in F&&r(ce,"value",null,F.value),(y=F.onVnodeBeforeMount)&&hn(y,J,A)}x(ce,A,A.scopeId,oe,J)}ve&&Qn(A,null,J,"beforeMount");const S=(!ee||ee&&!ee.pendingBranch)&&$&&!$.persisted;S&&$.beforeEnter(ce),n(ce,I,V),((y=F&&F.onVnodeMounted)||S||ve)&&It(()=>{y&&hn(y,J,A),S&&$.enter(ce),ve&&Qn(A,null,J,"mounted")},ee)},x=(A,I,V,J,ee)=>{if(V&&m(A,V),J)for(let re=0;re<J.length;re++)m(A,J[re]);if(ee){let re=ee.subTree;if(I===re){const oe=ee.vnode;x(A,oe,oe.scopeId,oe.slotScopeIds,ee.parent)}}},C=(A,I,V,J,ee,re,oe,ae,ce=0)=>{for(let y=ce;y<A.length;y++){const v=A[y]=ae?Un(A[y]):un(A[y]);d(null,v,I,V,J,ee,re,oe,ae)}},N=(A,I,V,J,ee,re,oe)=>{const ae=I.el=A.el;let{patchFlag:ce,dynamicChildren:y,dirs:v}=I;ce|=A.patchFlag&16;const F=A.props||et,H=I.props||et;let $;V&&ei(V,!1),($=H.onVnodeBeforeUpdate)&&hn($,V,I,A),v&&Qn(I,A,V,"beforeUpdate"),V&&ei(V,!0);const se=ee&&I.type!=="foreignObject";if(y?U(A.dynamicChildren,y,ae,V,J,se,re):oe||B(A,I,ae,null,V,J,se,re,!1),ce>0){if(ce&16)Z(ae,I,F,H,V,J,ee);else if(ce&2&&F.class!==H.class&&r(ae,"class",null,H.class,ee),ce&4&&r(ae,"style",F.style,H.style,ee),ce&8){const ve=I.dynamicProps;for(let S=0;S<ve.length;S++){const Y=ve[S],ue=F[Y],he=H[Y];(he!==ue||Y==="value")&&r(ae,Y,ue,he,ee,A.children,V,J,je)}}ce&1&&A.children!==I.children&&u(ae,I.children)}else!oe&&y==null&&Z(ae,I,F,H,V,J,ee);(($=H.onVnodeUpdated)||v)&&It(()=>{$&&hn($,V,I,A),v&&Qn(I,A,V,"updated")},J)},U=(A,I,V,J,ee,re,oe)=>{for(let ae=0;ae<I.length;ae++){const ce=A[ae],y=I[ae],v=ce.el&&(ce.type===cn||!ti(ce,y)||ce.shapeFlag&(6|64))?h(ce.el):V;d(ce,y,v,null,J,ee,re,oe,!0)}},Z=(A,I,V,J,ee,re,oe)=>{if(V!==J){for(const ae in J){if(pr(ae))continue;const ce=J[ae],y=V[ae];ce!==y&&ae!=="value"&&r(A,ae,y,ce,oe,I.children,ee,re,je)}if(V!==et)for(const ae in V)!pr(ae)&&!(ae in J)&&r(A,ae,V[ae],null,oe,I.children,ee,re,je);"value"in J&&r(A,"value",V.value,J.value)}},te=(A,I,V,J,ee,re,oe,ae,ce)=>{const y=I.el=A?A.el:a(""),v=I.anchor=A?A.anchor:a("");let{patchFlag:F,dynamicChildren:H,slotScopeIds:$}=I;$&&(ae=ae?ae.concat($):$),A==null?(n(y,V,J),n(v,V,J),C(I.children,V,v,ee,re,oe,ae,ce)):F>0&&F&64&&H&&A.dynamicChildren?(U(A.dynamicChildren,H,V,ee,re,oe,ae),(I.key!=null||ee&&I===ee.subTree)&&Oc(A,I,!0)):B(A,I,V,v,ee,re,oe,ae,ce)},O=(A,I,V,J,ee,re,oe,ae,ce)=>{I.slotScopeIds=ae,A==null?I.shapeFlag&512?ee.ctx.activate(I,V,J,oe,ce):j(I,V,J,ee,re,oe,ce):z(A,I,ce)},j=(A,I,V,J,ee,re,oe)=>{const ae=A.component=Lp(A,J,ee);if(Rr(A)&&(ae.ctx.renderer=_e),Pp(ae),ae.asyncDep){if(ee&&ee.registerDep(ae,G),!A.el){const ce=ae.subTree=ni(xn);M(null,ce,I,V)}return}G(ae,A,I,V,ee,re,oe)},z=(A,I,V)=>{const J=I.component=A.component;if(Ud(A,I,V))if(J.asyncDep&&!J.asyncResolved){W(J,I,V);return}else J.next=I,Rd(J.update),J.update();else I.el=A.el,J.vnode=I},G=(A,I,V,J,ee,re,oe)=>{const ae=()=>{if(A.isMounted){let{next:v,bu:F,u:H,parent:$,vnode:se}=A,ve=v,S;ei(A,!1),v?(v.el=se.el,W(A,v,oe)):v=se,F&&Io(F),(S=v.props&&v.props.onVnodeBeforeUpdate)&&hn(S,$,v,se),ei(A,!0);const Y=Zo(A),ue=A.subTree;A.subTree=Y,d(ue,Y,h(ue.el),Re(ue),A,ee,re),v.el=Y.el,ve===null&&zd(A,Y.el),H&&It(H,ee),(S=v.props&&v.props.onVnodeUpdated)&&It(()=>hn(S,$,v,se),ee)}else{let v;const{el:F,props:H}=I,{bm:$,m:se,parent:ve}=A,S=Lr(I);if(ei(A,!1),$&&Io($),!S&&(v=H&&H.onVnodeBeforeMount)&&hn(v,ve,I),ei(A,!0),F&&Pe){const Y=()=>{A.subTree=Zo(A),Pe(F,A.subTree,A,ee,null)};S?I.type.__asyncLoader().then(()=>!A.isUnmounted&&Y()):Y()}else{const Y=A.subTree=Zo(A);d(null,Y,V,J,A,ee,re),I.el=Y.el}if(se&&It(se,ee),!S&&(v=H&&H.onVnodeMounted)){const Y=I;It(()=>hn(v,ve,Y),ee)}(I.shapeFlag&256||ve&&Lr(ve.vnode)&&ve.vnode.shapeFlag&256)&&A.a&&It(A.a,ee),A.isMounted=!0,I=V=J=null}},ce=A.effect=new Uo(ae,()=>rc(y),A.scope),y=A.update=()=>ce.run();y.id=A.uid,ei(A,!0),y()},W=(A,I,V)=>{I.component=A;const J=A.vnode.props;A.vnode=I,A.next=null,up(A,I.props,J,V),dp(A,I.children,V),zi(),Tr(void 0,A.update),Bi()},B=(A,I,V,J,ee,re,oe,ae,ce=!1)=>{const y=A&&A.children,v=A?A.shapeFlag:0,F=I.children,{patchFlag:H,shapeFlag:$}=I;if(H>0){if(H&128){le(y,F,V,J,ee,re,oe,ae,ce);return}else if(H&256){q(y,F,V,J,ee,re,oe,ae,ce);return}}$&8?(v&16&&je(y,ee,re),F!==y&&u(V,F)):v&16?$&16?le(y,F,V,J,ee,re,oe,ae,ce):je(y,ee,re,!0):(v&8&&u(V,""),$&16&&C(F,V,J,ee,re,oe,ae,ce))},q=(A,I,V,J,ee,re,oe,ae,ce)=>{A=A||Ni,I=I||Ni;const y=A.length,v=I.length,F=Math.min(y,v);let H;for(H=0;H<F;H++){const $=I[H]=ce?Un(I[H]):un(I[H]);d(A[H],$,V,null,ee,re,oe,ae,ce)}y>v?je(A,ee,re,!0,!1,F):C(I,V,J,ee,re,oe,ae,ce,F)},le=(A,I,V,J,ee,re,oe,ae,ce)=>{let y=0;const v=I.length;let F=A.length-1,H=v-1;for(;y<=F&&y<=H;){const $=A[y],se=I[y]=ce?Un(I[y]):un(I[y]);if(ti($,se))d($,se,V,null,ee,re,oe,ae,ce);else break;y++}for(;y<=F&&y<=H;){const $=A[F],se=I[H]=ce?Un(I[H]):un(I[H]);if(ti($,se))d($,se,V,null,ee,re,oe,ae,ce);else break;F--,H--}if(y>F){if(y<=H){const $=H+1,se=$<v?I[$].el:J;for(;y<=H;)d(null,I[y]=ce?Un(I[y]):un(I[y]),V,se,ee,re,oe,ae,ce),y++}}else if(y>H)for(;y<=F;)de(A[y],ee,re,!0),y++;else{const $=y,se=y,ve=new Map;for(y=se;y<=H;y++){const be=I[y]=ce?Un(I[y]):un(I[y]);be.key!=null&&ve.set(be.key,y)}let S,Y=0;const ue=H-se+1;let he=!1,P=0;const fe=new Array(ue);for(y=0;y<ue;y++)fe[y]=0;for(y=$;y<=F;y++){const be=A[y];if(Y>=ue){de(be,ee,re,!0);continue}let me;if(be.key!=null)me=ve.get(be.key);else for(S=se;S<=H;S++)if(fe[S-se]===0&&ti(be,I[S])){me=S;break}me===void 0?de(be,ee,re,!0):(fe[me-se]=y+1,me>=P?P=me:he=!0,d(be,I[me],V,null,ee,re,oe,ae,ce),Y++)}const pe=he?xp(fe):Ni;for(S=pe.length-1,y=ue-1;y>=0;y--){const be=se+y,me=I[be],Se=be+1<v?I[be+1].el:J;fe[y]===0?d(null,me,V,Se,ee,re,oe,ae,ce):he&&(S<0||y!==pe[S]?ne(me,V,Se,2):S--)}}},ne=(A,I,V,J,ee=null)=>{const{el:re,type:oe,transition:ae,children:ce,shapeFlag:y}=A;if(y&6){ne(A.component.subTree,I,V,J);return}if(y&128){A.suspense.move(I,V,J);return}if(y&64){oe.move(A,I,V,_e);return}if(oe===cn){n(re,I,V);for(let F=0;F<ce.length;F++)ne(ce[F],I,V,J);n(A.anchor,I,V);return}if(oe===ca){b(A,I,V);return}if(J!==2&&y&1&&ae)if(J===0)ae.beforeEnter(re),n(re,I,V),It(()=>ae.enter(re),ee);else{const{leave:F,delayLeave:H,afterLeave:$}=ae,se=()=>n(re,I,V),ve=()=>{F(re,()=>{se(),$&&$()})};H?H(re,se,ve):ve()}else n(re,I,V)},de=(A,I,V,J=!1,ee=!1)=>{const{type:re,props:oe,ref:ae,children:ce,dynamicChildren:y,shapeFlag:v,patchFlag:F,dirs:H}=A;if(ae!=null&&aa(ae,null,V,A,!0),v&256){I.ctx.deactivate(A);return}const $=v&1&&H,se=!Lr(A);let ve;if(se&&(ve=oe&&oe.onVnodeBeforeUnmount)&&hn(ve,I,A),v&6)Q(A.component,V,J);else{if(v&128){A.suspense.unmount(V,J);return}$&&Qn(A,null,I,"beforeUnmount"),v&64?A.type.remove(A,I,V,ee,_e,J):y&&(re!==cn||F>0&&F&64)?je(y,I,V,!1,!0):(re===cn&&F&(128|256)||!ee&&v&16)&&je(ce,I,V),J&&Me(A)}(se&&(ve=oe&&oe.onVnodeUnmounted)||$)&&It(()=>{ve&&hn(ve,I,A),$&&Qn(A,null,I,"unmounted")},V)},Me=A=>{const{type:I,el:V,anchor:J,transition:ee}=A;if(I===cn){we(V,J);return}if(I===ca){w(A);return}const re=()=>{s(V),ee&&!ee.persisted&&ee.afterLeave&&ee.afterLeave()};if(A.shapeFlag&1&&ee&&!ee.persisted){const{leave:oe,delayLeave:ae}=ee,ce=()=>oe(V,re);ae?ae(A.el,re,ce):ce()}else re()},we=(A,I)=>{let V;for(;A!==I;)V=f(A),s(A),A=V;s(I)},Q=(A,I,V)=>{const{bum:J,scope:ee,update:re,subTree:oe,um:ae}=A;J&&Io(J),ee.stop(),re&&(re.active=!1,de(oe,A,I,V)),ae&&It(ae,I),It(()=>{A.isUnmounted=!0},I),I&&I.pendingBranch&&!I.isUnmounted&&A.asyncDep&&!A.asyncResolved&&A.suspenseId===I.pendingId&&(I.deps--,I.deps===0&&I.resolve())},je=(A,I,V,J=!1,ee=!1,re=0)=>{for(let oe=re;oe<A.length;oe++)de(A[oe],I,V,J,ee)},Re=A=>A.shapeFlag&6?Re(A.component.subTree):A.shapeFlag&128?A.suspense.next():f(A.anchor||A.el),Ee=(A,I,V)=>{A==null?I._vnode&&de(I._vnode,null,null,!0):d(I._vnode||null,A,I,null,null,null,V),lc(),I._vnode=A},_e={p:d,um:de,m:ne,r:Me,mt:j,mc:C,pc:B,pbc:U,n:Re,o:i};let Be,Pe;return e&&([Be,Pe]=e(_e)),{render:Ee,hydrate:Be,createApp:mp(Ee,Be)}}function ei({effect:i,update:e},t){i.allowRecurse=e.allowRecurse=t}function Oc(i,e,t=!1){const n=i.children,s=e.children;if(Fe(n)&&Fe(s))for(let r=0;r<n.length;r++){const o=n[r];let a=s[r];a.shapeFlag&1&&!a.dynamicChildren&&((a.patchFlag<=0||a.patchFlag===32)&&(a=s[r]=Un(s[r]),a.el=o.el),t||Oc(o,a))}}function xp(i){const e=i.slice(),t=[0];let n,s,r,o,a;const l=i.length;for(n=0;n<l;n++){const c=i[n];if(c!==0){if(s=t[t.length-1],i[s]<c){e[n]=s,t.push(n);continue}for(r=0,o=t.length-1;r<o;)a=r+o>>1,i[t[a]]<c?r=a+1:o=a;c<i[t[r]]&&(r>0&&(e[n]=t[r-1]),t[r]=n)}}for(r=t.length,o=t[r-1];r-- >0;)t[r]=o,o=e[o];return t}const vp=i=>i.__isTeleport,cn=Symbol(void 0),la=Symbol(void 0),xn=Symbol(void 0),ca=Symbol(void 0),Bs=[];let qt=null;function GM(i=!1){Bs.push(qt=i?null:[])}function yp(){Bs.pop(),qt=Bs[Bs.length-1]||null}let ks=1;function Uc(i){ks+=i}function Mp(i){return i.dynamicChildren=ks>0?qt||Ni:null,yp(),ks>0&&qt&&qt.push(i),i}function WM(i,e,t,n,s,r){return Mp(Bc(i,e,t,n,s,r,!0))}function bp(i){return i?i.__v_isVNode===!0:!1}function ti(i,e){return i.type===e.type&&i.key===e.key}const Fr="__vInternal",zc=({key:i})=>i!=null?i:null,Nr=({ref:i,ref_key:e,ref_for:t})=>i!=null?gt(i)||_t(i)||Oe(i)?{i:ln,r:i,k:e,f:!!t}:i:null;function Bc(i,e=null,t=null,n=0,s=null,r=i===cn?0:1,o=!1,a=!1){const l={__v_isVNode:!0,__v_skip:!0,type:i,props:e,key:e&&zc(e),ref:e&&Nr(e),scopeId:Ar,slotScopeIds:null,children:t,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetAnchor:null,staticCount:0,shapeFlag:r,patchFlag:n,dynamicProps:s,dynamicChildren:null,appContext:null};return a?(ua(l,t),r&128&&i.normalize(l)):t&&(l.shapeFlag|=gt(t)?8:16),ks>0&&!o&&qt&&(l.patchFlag>0||r&6)&&l.patchFlag!==32&&qt.push(l),l}const ni=Sp;function Sp(i,e=null,t=null,n=0,s=null,r=!1){if((!i||i===np)&&(i=xn),bp(i)){const a=On(i,e,!0);return t&&ua(a,t),ks>0&&!r&&qt&&(a.shapeFlag&6?qt[qt.indexOf(i)]=a:qt.push(a)),a.patchFlag|=-2,a}if(Np(i)&&(i=i.__vccOpts),e){e=wp(e);let{class:a,style:l}=e;a&&!gt(a)&&(e.class=Eo(a)),Et(l)&&(ec(l)&&!Fe(l)&&(l=mt({},l)),e.style=To(l))}const o=gt(i)?1:Bd(i)?128:vp(i)?64:Et(i)?4:Oe(i)?2:0;return Bc(i,e,t,n,s,o,r,!0)}function wp(i){return i?ec(i)||Fr in i?mt({},i):i:null}function On(i,e,t=!1){const{props:n,ref:s,patchFlag:r,children:o}=i,a=e?Ep(n||{},e):n;return{__v_isVNode:!0,__v_skip:!0,type:i.type,props:a,key:a&&zc(a),ref:e&&e.ref?t&&s?Fe(s)?s.concat(Nr(e)):[s,Nr(e)]:Nr(e):s,scopeId:i.scopeId,slotScopeIds:i.slotScopeIds,children:o,target:i.target,targetAnchor:i.targetAnchor,staticCount:i.staticCount,shapeFlag:i.shapeFlag,patchFlag:e&&i.type!==cn?r===-1?16:r|16:r,dynamicProps:i.dynamicProps,dynamicChildren:i.dynamicChildren,appContext:i.appContext,dirs:i.dirs,transition:i.transition,component:i.component,suspense:i.suspense,ssContent:i.ssContent&&On(i.ssContent),ssFallback:i.ssFallback&&On(i.ssFallback),el:i.el,anchor:i.anchor}}function Tp(i=" ",e=0){return ni(la,null,i,e)}function un(i){return i==null||typeof i=="boolean"?ni(xn):Fe(i)?ni(cn,null,i.slice()):typeof i=="object"?Un(i):ni(la,null,String(i))}function Un(i){return i.el===null||i.memo?i:On(i)}function ua(i,e){let t=0;const{shapeFlag:n}=i;if(e==null)e=null;else if(Fe(e))t=16;else if(typeof e=="object")if(n&(1|64)){const s=e.default;s&&(s._c&&(s._d=!1),ua(i,s()),s._c&&(s._d=!0));return}else{t=32;const s=e._;!s&&!(Fr in e)?e._ctx=ln:s===3&&ln&&(ln.slots._===1?e._=1:(e._=2,i.patchFlag|=1024))}else Oe(e)?(e={default:e,_ctx:ln},t=32):(e=String(e),n&64?(t=16,e=[Tp(e)]):t=8);i.children=e,i.shapeFlag|=t}function Ep(...i){const e={};for(let t=0;t<i.length;t++){const n=i[t];for(const s in n)if(s==="class")e.class!==n.class&&(e.class=Eo([e.class,n.class]));else if(s==="style")e.style=To([e.style,n.style]);else if(fr(s)){const r=e[s],o=n[s];o&&r!==o&&!(Fe(r)&&r.includes(o))&&(e[s]=r?[].concat(r,o):o)}else s!==""&&(e[s]=n[s])}return e}function hn(i,e,t,n=null){Bt(i,e,7,[t,n])}const Ap=Nc();let Cp=0;function Lp(i,e,t){const n=i.type,s=(e?e.appContext:i.appContext)||Ap,r={uid:Cp++,vnode:i,type:n,parent:e,appContext:s,root:null,next:null,subTree:null,effect:null,update:null,scope:new Nl(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:e?e.provides:Object.create(s.provides),accessCache:null,renderCache:[],components:null,directives:null,propsOptions:Ac(n,s),emitsOptions:uc(n,s),emit:null,emitted:null,propsDefaults:et,inheritAttrs:n.inheritAttrs,ctx:et,data:et,props:et,attrs:et,slots:et,refs:et,setupState:et,setupContext:null,suspense:t,suspenseId:t?t.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return r.ctx={_:r},r.root=e?e.root:r,r.emit=Dd.bind(null,r),i.ce&&i.ce(r),r}let dt=null;const Rp=()=>dt||ln,Wi=i=>{dt=i,i.scope.on()},ii=()=>{dt&&dt.scope.off(),dt=null};function kc(i){return i.vnode.shapeFlag&4}let Hs=!1;function Pp(i,e=!1){Hs=e;const{props:t,children:n}=i.vnode,s=kc(i);cp(i,t,s,e),fp(i,n);const r=s?Ip(i,e):void 0;return Hs=!1,r}function Ip(i,e){const t=i.type;i.accessCache=Object.create(null),i.proxy=jo(new Proxy(i.ctx,ip));const{setup:n}=t;if(n){const s=i.setupContext=n.length>1?Fp(i):null;Wi(i),zi();const r=Fn(n,i,0,[i.props,s]);if(Bi(),ii(),Il(r)){if(r.then(ii,ii),e)return r.then(o=>{Hc(i,o,e)}).catch(o=>{Sr(o,i,0)});i.asyncDep=r}else Hc(i,r,e)}else Gc(i,e)}function Hc(i,e,t){Oe(e)?i.type.__ssrInlineRender?i.ssrRender=e:i.render=e:Et(e)&&(i.setupState=ic(e)),Gc(i,t)}let Vc;function Gc(i,e,t){const n=i.type;if(!i.render){if(!e&&Vc&&!n.render){const s=n.template;if(s){const{isCustomElement:r,compilerOptions:o}=i.appContext.config,{delimiters:a,compilerOptions:l}=n,c=mt(mt({isCustomElement:r,delimiters:a},o),l);n.render=Vc(s,c)}}i.render=n.render||jt}Wi(i),zi(),sp(i),Bi(),ii()}function Dp(i){return new Proxy(i.attrs,{get(e,t){return Nt(i,"get","$attrs"),e[t]}})}function Fp(i){const e=n=>{i.exposed=n||{}};let t;return{get attrs(){return t||(t=Dp(i))},slots:i.slots,emit:i.emit,expose:e}}function ha(i){if(i.exposed)return i.exposeProxy||(i.exposeProxy=new Proxy(ic(jo(i.exposed)),{get(e,t){if(t in e)return e[t];if(t in Ir)return Ir[t](i)}}))}function Np(i){return Oe(i)&&"__vccOpts"in i}const Op=(i,e)=>Ed(i,e,Hs),Up="3.2.37",zp="http://www.w3.org/2000/svg",si=typeof document!="undefined"?document:null,Wc=si&&si.createElement("template"),Bp={insert:(i,e,t)=>{e.insertBefore(i,t||null)},remove:i=>{const e=i.parentNode;e&&e.removeChild(i)},createElement:(i,e,t,n)=>{const s=e?si.createElementNS(zp,i):si.createElement(i,t?{is:t}:void 0);return i==="select"&&n&&n.multiple!=null&&s.setAttribute("multiple",n.multiple),s},createText:i=>si.createTextNode(i),createComment:i=>si.createComment(i),setText:(i,e)=>{i.nodeValue=e},setElementText:(i,e)=>{i.textContent=e},parentNode:i=>i.parentNode,nextSibling:i=>i.nextSibling,querySelector:i=>si.querySelector(i),setScopeId(i,e){i.setAttribute(e,"")},cloneNode(i){const e=i.cloneNode(!0);return"_value"in i&&(e._value=i._value),e},insertStaticContent(i,e,t,n,s,r){const o=t?t.previousSibling:e.lastChild;if(s&&(s===r||s.nextSibling))for(;e.insertBefore(s.cloneNode(!0),t),!(s===r||!(s=s.nextSibling)););else{Wc.innerHTML=n?`<svg>${i}</svg>`:i;const a=Wc.content;if(n){const l=a.firstChild;for(;l.firstChild;)a.appendChild(l.firstChild);a.removeChild(l)}e.insertBefore(a,t)}return[o?o.nextSibling:e.firstChild,t?t.previousSibling:e.lastChild]}};function kp(i,e,t){const n=i._vtc;n&&(e=(e?[e,...n]:[...n]).join(" ")),e==null?i.removeAttribute("class"):t?i.setAttribute("class",e):i.className=e}function Hp(i,e,t){const n=i.style,s=gt(t);if(t&&!s){for(const r in t)fa(n,r,t[r]);if(e&&!gt(e))for(const r in e)t[r]==null&&fa(n,r,"")}else{const r=n.display;s?e!==t&&(n.cssText=t):e&&i.removeAttribute("style"),"_vod"in i&&(n.display=r)}}const jc=/\s*!important$/;function fa(i,e,t){if(Fe(t))t.forEach(n=>fa(i,e,n));else if(t==null&&(t=""),e.startsWith("--"))i.setProperty(e,t);else{const n=Vp(i,e);jc.test(t)?i.setProperty(Ui(n),t.replace(jc,""),"important"):i[n]=t}}const Xc=["Webkit","Moz","ms"],da={};function Vp(i,e){const t=da[e];if(t)return t;let n=Oi(e);if(n!=="filter"&&n in i)return da[e]=n;n=Dl(n);for(let s=0;s<Xc.length;s++){const r=Xc[s]+n;if(r in i)return da[e]=r}return e}const qc="http://www.w3.org/1999/xlink";function Gp(i,e,t,n,s){if(n&&e.startsWith("xlink:"))t==null?i.removeAttributeNS(qc,e.slice(6,e.length)):i.setAttributeNS(qc,e,t);else{const r=Pf(e);t==null||r&&!Pl(t)?i.removeAttribute(e):i.setAttribute(e,r?"":t)}}function Wp(i,e,t,n,s,r,o){if(e==="innerHTML"||e==="textContent"){n&&o(n,s,r),i[e]=t==null?"":t;return}if(e==="value"&&i.tagName!=="PROGRESS"&&!i.tagName.includes("-")){i._value=t;const l=t==null?"":t;(i.value!==l||i.tagName==="OPTION")&&(i.value=l),t==null&&i.removeAttribute(e);return}let a=!1;if(t===""||t==null){const l=typeof i[e];l==="boolean"?t=Pl(t):t==null&&l==="string"?(t="",a=!0):l==="number"&&(t=0,a=!0)}try{i[e]=t}catch{}a&&i.removeAttribute(e)}const[Yc,jp]=(()=>{let i=Date.now,e=!1;if(typeof window!="undefined"){Date.now()>document.createEvent("Event").timeStamp&&(i=performance.now.bind(performance));const t=navigator.userAgent.match(/firefox\/(\d+)/i);e=!!(t&&Number(t[1])<=53)}return[i,e]})();let pa=0;const Xp=Promise.resolve(),qp=()=>{pa=0},Yp=()=>pa||(Xp.then(qp),pa=Yc());function Kp(i,e,t,n){i.addEventListener(e,t,n)}function Zp(i,e,t,n){i.removeEventListener(e,t,n)}function $p(i,e,t,n,s=null){const r=i._vei||(i._vei={}),o=r[e];if(n&&o)o.value=n;else{const[a,l]=Qp(e);if(n){const c=r[e]=Jp(n,s);Kp(i,a,c,l)}else o&&(Zp(i,a,o,l),r[e]=void 0)}}const Kc=/(?:Once|Passive|Capture)$/;function Qp(i){let e;if(Kc.test(i)){e={};let t;for(;t=i.match(Kc);)i=i.slice(0,i.length-t[0].length),e[t[0].toLowerCase()]=!0}return[Ui(i.slice(2)),e]}function Jp(i,e){const t=n=>{const s=n.timeStamp||Yc();(jp||s>=t.attached-1)&&Bt(em(n,t.value),e,5,[n])};return t.value=i,t.attached=Yp(),t}function em(i,e){if(Fe(e)){const t=i.stopImmediatePropagation;return i.stopImmediatePropagation=()=>{t.call(i),i._stopped=!0},e.map(n=>s=>!s._stopped&&n&&n(s))}else return e}const Zc=/^on[a-z]/,tm=(i,e,t,n,s=!1,r,o,a,l)=>{e==="class"?kp(i,n,s):e==="style"?Hp(i,t,n):fr(e)?Ao(e)||$p(i,e,t,n,o):(e[0]==="."?(e=e.slice(1),!0):e[0]==="^"?(e=e.slice(1),!1):nm(i,e,n,s))?Wp(i,e,n,r,o,a,l):(e==="true-value"?i._trueValue=n:e==="false-value"&&(i._falseValue=n),Gp(i,e,n,s))};function nm(i,e,t,n){return n?!!(e==="innerHTML"||e==="textContent"||e in i&&Zc.test(e)&&Oe(t)):e==="spellcheck"||e==="draggable"||e==="translate"||e==="form"||e==="list"&&i.tagName==="INPUT"||e==="type"&&i.tagName==="TEXTAREA"||Zc.test(e)&&gt(t)?!1:e in i}const im={name:String,type:String,css:{type:Boolean,default:!0},duration:[String,Number,Object],enterFromClass:String,enterActiveClass:String,enterToClass:String,appearFromClass:String,appearActiveClass:String,appearToClass:String,leaveFromClass:String,leaveActiveClass:String,leaveToClass:String};jd.props;const sm=mt({patchProp:tm},Bp);let $c;function rm(){return $c||($c=gp(sm))}const jM=(...i)=>{const e=rm().createApp(...i),{mount:t}=e;return e.mount=n=>{const s=om(n);if(!s)return;const r=e._component;!Oe(r)&&!r.render&&!r.template&&(r.template=s.innerHTML),s.innerHTML="";const o=t(s,!1,s instanceof SVGElement);return s instanceof Element&&(s.removeAttribute("v-cloak"),s.setAttribute("data-v-app","")),o},e};function om(i){return gt(i)?document.querySelector(i):i}var am=!1;/*!
  * pinia v2.0.16
  * (c) 2022 Eduardo San Martin Morote
  * @license MIT
  */const lm=Symbol();var Qc;(function(i){i.direct="direct",i.patchObject="patch object",i.patchFunction="patch function"})(Qc||(Qc={}));function XM(){const i=Xf(!0),e=i.run(()=>yd({}));let t=[],n=[];const s=jo({install(r){s._a=r,r.provide(lm,s),r.config.globalProperties.$pinia=s,n.forEach(o=>t.push(o)),n=[]},use(r){return!this._a&&!am?n.push(r):t.push(r),this},_p:t,_a:null,_e:i,_s:new Map,state:e});return s}/**
 * @license
 * Copyright 2010-2022 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const ma="142",ji={LEFT:0,MIDDLE:1,RIGHT:2,ROTATE:0,DOLLY:1,PAN:2},Xi={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},cm=0,Jc=1,um=2,eu=1,hm=2,Vs=3,qi=0,Yt=1,zn=2,fm=1,Bn=0,Yi=1,tu=2,nu=3,iu=4,dm=5,Ki=100,pm=101,mm=102,su=103,ru=104,gm=200,_m=201,xm=202,vm=203,ou=204,au=205,ym=206,Mm=207,bm=208,Sm=209,wm=210,Tm=0,Em=1,Am=2,ga=3,Cm=4,Lm=5,Rm=6,Pm=7,_a=0,Im=1,Dm=2,vn=0,Fm=1,Nm=2,Om=3,Um=4,zm=5,lu=300,Zi=301,$i=302,xa=303,va=304,Or=306,Qi=1e3,Ht=1001,Ur=1002,pt=1003,ya=1004,Ma=1005,xt=1006,cu=1007,Ji=1008,ri=1009,Bm=1010,km=1011,uu=1012,Hm=1013,oi=1014,kn=1015,Gs=1016,Vm=1017,Gm=1018,es=1020,Wm=1021,jm=1022,Kt=1023,Xm=1024,qm=1025,ai=1026,ts=1027,Ym=1028,Km=1029,Zm=1030,$m=1031,Qm=1033,ba=33776,Sa=33777,wa=33778,Ta=33779,hu=35840,fu=35841,du=35842,pu=35843,Jm=36196,mu=37492,gu=37496,_u=37808,xu=37809,vu=37810,yu=37811,Mu=37812,bu=37813,Su=37814,wu=37815,Tu=37816,Eu=37817,Au=37818,Cu=37819,Lu=37820,Ru=37821,Pu=36492,Ws=2300,ns=2301,Ea=2302,Iu=2400,Du=2401,Fu=2402,eg=2500,tg=2501,ng=1,Nu=2,li=3e3,Ze=3001,ig=3200,sg=3201,Aa=0,rg=1,yn="srgb",ci="srgb-linear",Ca=7680,og=519,La=35044,Ou="300 es",Ra=1035;class ui{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;const n=this._listeners;return n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;const s=this._listeners[e];if(s!==void 0){const r=s.indexOf(t);r!==-1&&s.splice(r,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const n=this._listeners[e.type];if(n!==void 0){e.target=this;const s=n.slice(0);for(let r=0,o=s.length;r<o;r++)s[r].call(this,e);e.target=null}}}const vt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let Uu=1234567;const js=Math.PI/180,Xs=180/Math.PI;function Zt(){const i=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(vt[i&255]+vt[i>>8&255]+vt[i>>16&255]+vt[i>>24&255]+"-"+vt[e&255]+vt[e>>8&255]+"-"+vt[e>>16&15|64]+vt[e>>24&255]+"-"+vt[t&63|128]+vt[t>>8&255]+"-"+vt[t>>16&255]+vt[t>>24&255]+vt[n&255]+vt[n>>8&255]+vt[n>>16&255]+vt[n>>24&255]).toLowerCase()}function yt(i,e,t){return Math.max(e,Math.min(t,i))}function Pa(i,e){return(i%e+e)%e}function ag(i,e,t,n,s){return n+(i-e)*(s-n)/(t-e)}function lg(i,e,t){return i!==e?(t-i)/(e-i):0}function qs(i,e,t){return(1-t)*i+t*e}function cg(i,e,t,n){return qs(i,e,1-Math.exp(-t*n))}function ug(i,e=1){return e-Math.abs(Pa(i,e*2)-e)}function hg(i,e,t){return i<=e?0:i>=t?1:(i=(i-e)/(t-e),i*i*(3-2*i))}function fg(i,e,t){return i<=e?0:i>=t?1:(i=(i-e)/(t-e),i*i*i*(i*(i*6-15)+10))}function dg(i,e){return i+Math.floor(Math.random()*(e-i+1))}function pg(i,e){return i+Math.random()*(e-i)}function mg(i){return i*(.5-Math.random())}function gg(i){i!==void 0&&(Uu=i);let e=Uu+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function _g(i){return i*js}function xg(i){return i*Xs}function Ia(i){return(i&i-1)==0&&i!==0}function zu(i){return Math.pow(2,Math.ceil(Math.log(i)/Math.LN2))}function zr(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function vg(i,e,t,n,s){const r=Math.cos,o=Math.sin,a=r(t/2),l=o(t/2),c=r((e+n)/2),u=o((e+n)/2),h=r((e-n)/2),f=o((e-n)/2),m=r((n-e)/2),g=o((n-e)/2);switch(s){case"XYX":i.set(a*u,l*h,l*f,a*c);break;case"YZY":i.set(l*f,a*u,l*h,a*c);break;case"ZXZ":i.set(l*h,l*f,a*u,a*c);break;case"XZX":i.set(a*u,l*g,l*m,a*c);break;case"YXY":i.set(l*m,a*u,l*g,a*c);break;case"ZYZ":i.set(l*g,l*m,a*u,a*c);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+s)}}function yg(i,e){switch(e.constructor){case Float32Array:return i;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function Mg(i,e){switch(e.constructor){case Float32Array:return i;case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("Invalid component type.")}}var Da=Object.freeze({__proto__:null,DEG2RAD:js,RAD2DEG:Xs,generateUUID:Zt,clamp:yt,euclideanModulo:Pa,mapLinear:ag,inverseLerp:lg,lerp:qs,damp:cg,pingpong:ug,smoothstep:hg,smootherstep:fg,randInt:dg,randFloat:pg,randFloatSpread:mg,seededRandom:gg,degToRad:_g,radToDeg:xg,isPowerOfTwo:Ia,ceilPowerOfTwo:zu,floorPowerOfTwo:zr,setQuaternionFromProperEuler:vg,normalize:Mg,denormalize:yg});class Te{constructor(e=0,t=0){Te.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e,t){return t!==void 0?(console.warn("THREE.Vector2: .add() now only accepts one argument. Use .addVectors( a, b ) instead."),this.addVectors(e,t)):(this.x+=e.x,this.y+=e.y,this)}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e,t){return t!==void 0?(console.warn("THREE.Vector2: .sub() now only accepts one argument. Use .subVectors( a, b ) instead."),this.subVectors(e,t)):(this.x-=e.x,this.y-=e.y,this)}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,n=this.y,s=e.elements;return this.x=s[0]*t+s[3]*n+s[6],this.y=s[1]*t+s[4]*n+s[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t,n){return n!==void 0&&console.warn("THREE.Vector2: offset has been removed from .fromBufferAttribute()."),this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const n=Math.cos(t),s=Math.sin(t),r=this.x-e.x,o=this.y-e.y;return this.x=r*n-o*s+e.x,this.y=r*s+o*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Vt{constructor(){Vt.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],arguments.length>0&&console.error("THREE.Matrix3: the constructor no longer reads arguments. use .set() instead.")}set(e,t,n,s,r,o,a,l,c){const u=this.elements;return u[0]=e,u[1]=s,u[2]=a,u[3]=t,u[4]=r,u[5]=l,u[6]=n,u[7]=o,u[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,s=t.elements,r=this.elements,o=n[0],a=n[3],l=n[6],c=n[1],u=n[4],h=n[7],f=n[2],m=n[5],g=n[8],p=s[0],d=s[3],_=s[6],M=s[1],T=s[4],b=s[7],w=s[2],R=s[5],D=s[8];return r[0]=o*p+a*M+l*w,r[3]=o*d+a*T+l*R,r[6]=o*_+a*b+l*D,r[1]=c*p+u*M+h*w,r[4]=c*d+u*T+h*R,r[7]=c*_+u*b+h*D,r[2]=f*p+m*M+g*w,r[5]=f*d+m*T+g*R,r[8]=f*_+m*b+g*D,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8];return t*o*u-t*a*c-n*r*u+n*a*l+s*r*c-s*o*l}invert(){const e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8],h=u*o-a*c,f=a*l-u*r,m=c*r-o*l,g=t*h+n*f+s*m;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const p=1/g;return e[0]=h*p,e[1]=(s*c-u*n)*p,e[2]=(a*n-s*o)*p,e[3]=f*p,e[4]=(u*t-s*l)*p,e[5]=(s*r-a*t)*p,e[6]=m*p,e[7]=(n*l-c*t)*p,e[8]=(o*t-n*r)*p,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,s,r,o,a){const l=Math.cos(r),c=Math.sin(r);return this.set(n*l,n*c,-n*(l*o+c*a)+o+e,-s*c,s*l,-s*(-c*o+l*a)+a+t,0,0,1),this}scale(e,t){const n=this.elements;return n[0]*=e,n[3]*=e,n[6]*=e,n[1]*=t,n[4]*=t,n[7]*=t,this}rotate(e){const t=Math.cos(e),n=Math.sin(e),s=this.elements,r=s[0],o=s[3],a=s[6],l=s[1],c=s[4],u=s[7];return s[0]=t*r+n*l,s[3]=t*o+n*c,s[6]=t*a+n*u,s[1]=-n*r+t*l,s[4]=-n*o+t*c,s[7]=-n*a+t*u,this}translate(e,t){const n=this.elements;return n[0]+=e*n[2],n[3]+=e*n[5],n[6]+=e*n[8],n[1]+=t*n[2],n[4]+=t*n[5],n[7]+=t*n[8],this}equals(e){const t=this.elements,n=e.elements;for(let s=0;s<9;s++)if(t[s]!==n[s])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}}function Bu(i){for(let e=i.length-1;e>=0;--e)if(i[e]>65535)return!0;return!1}function Ys(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function hi(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function Br(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}const Fa={[yn]:{[ci]:hi},[ci]:{[yn]:Br}},$t={legacyMode:!0,get workingColorSpace(){return ci},set workingColorSpace(i){console.warn("THREE.ColorManagement: .workingColorSpace is readonly.")},convert:function(i,e,t){if(this.legacyMode||e===t||!e||!t)return i;if(Fa[e]&&Fa[e][t]!==void 0){const n=Fa[e][t];return i.r=n(i.r),i.g=n(i.g),i.b=n(i.b),i}throw new Error("Unsupported color space conversion.")},fromWorkingColorSpace:function(i,e){return this.convert(i,this.workingColorSpace,e)},toWorkingColorSpace:function(i,e){return this.convert(i,e,this.workingColorSpace)}},ku={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},ut={r:0,g:0,b:0},Qt={h:0,s:0,l:0},kr={h:0,s:0,l:0};function Na(i,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?i+(e-i)*6*t:t<1/2?e:t<2/3?i+(e-i)*6*(2/3-t):i}function Hr(i,e){return e.r=i.r,e.g=i.g,e.b=i.b,e}class Ce{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,t===void 0&&n===void 0?this.set(e):this.setRGB(e,t,n)}set(e){return e&&e.isColor?this.copy(e):typeof e=="number"?this.setHex(e):typeof e=="string"&&this.setStyle(e),this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=yn){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,$t.toWorkingColorSpace(this,t),this}setRGB(e,t,n,s=ci){return this.r=e,this.g=t,this.b=n,$t.toWorkingColorSpace(this,s),this}setHSL(e,t,n,s=ci){if(e=Pa(e,1),t=yt(t,0,1),n=yt(n,0,1),t===0)this.r=this.g=this.b=n;else{const r=n<=.5?n*(1+t):n+t-n*t,o=2*n-r;this.r=Na(o,r,e+1/3),this.g=Na(o,r,e),this.b=Na(o,r,e-1/3)}return $t.toWorkingColorSpace(this,s),this}setStyle(e,t=yn){function n(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let s;if(s=/^((?:rgb|hsl)a?)\(([^\)]*)\)/.exec(e)){let r;const o=s[1],a=s[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return this.r=Math.min(255,parseInt(r[1],10))/255,this.g=Math.min(255,parseInt(r[2],10))/255,this.b=Math.min(255,parseInt(r[3],10))/255,$t.toWorkingColorSpace(this,t),n(r[4]),this;if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return this.r=Math.min(100,parseInt(r[1],10))/100,this.g=Math.min(100,parseInt(r[2],10))/100,this.b=Math.min(100,parseInt(r[3],10))/100,$t.toWorkingColorSpace(this,t),n(r[4]),this;break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a)){const l=parseFloat(r[1])/360,c=parseInt(r[2],10)/100,u=parseInt(r[3],10)/100;return n(r[4]),this.setHSL(l,c,u,t)}break}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(e)){const r=s[1],o=r.length;if(o===3)return this.r=parseInt(r.charAt(0)+r.charAt(0),16)/255,this.g=parseInt(r.charAt(1)+r.charAt(1),16)/255,this.b=parseInt(r.charAt(2)+r.charAt(2),16)/255,$t.toWorkingColorSpace(this,t),this;if(o===6)return this.r=parseInt(r.charAt(0)+r.charAt(1),16)/255,this.g=parseInt(r.charAt(2)+r.charAt(3),16)/255,this.b=parseInt(r.charAt(4)+r.charAt(5),16)/255,$t.toWorkingColorSpace(this,t),this}return e&&e.length>0?this.setColorName(e,t):this}setColorName(e,t=yn){const n=ku[e.toLowerCase()];return n!==void 0?this.setHex(n,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=hi(e.r),this.g=hi(e.g),this.b=hi(e.b),this}copyLinearToSRGB(e){return this.r=Br(e.r),this.g=Br(e.g),this.b=Br(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=yn){return $t.fromWorkingColorSpace(Hr(this,ut),e),yt(ut.r*255,0,255)<<16^yt(ut.g*255,0,255)<<8^yt(ut.b*255,0,255)<<0}getHexString(e=yn){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=ci){$t.fromWorkingColorSpace(Hr(this,ut),t);const n=ut.r,s=ut.g,r=ut.b,o=Math.max(n,s,r),a=Math.min(n,s,r);let l,c;const u=(a+o)/2;if(a===o)l=0,c=0;else{const h=o-a;switch(c=u<=.5?h/(o+a):h/(2-o-a),o){case n:l=(s-r)/h+(s<r?6:0);break;case s:l=(r-n)/h+2;break;case r:l=(n-s)/h+4;break}l/=6}return e.h=l,e.s=c,e.l=u,e}getRGB(e,t=ci){return $t.fromWorkingColorSpace(Hr(this,ut),t),e.r=ut.r,e.g=ut.g,e.b=ut.b,e}getStyle(e=yn){return $t.fromWorkingColorSpace(Hr(this,ut),e),e!==yn?`color(${e} ${ut.r} ${ut.g} ${ut.b})`:`rgb(${ut.r*255|0},${ut.g*255|0},${ut.b*255|0})`}offsetHSL(e,t,n){return this.getHSL(Qt),Qt.h+=e,Qt.s+=t,Qt.l+=n,this.setHSL(Qt.h,Qt.s,Qt.l),this}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(Qt),e.getHSL(kr);const n=qs(Qt.h,kr.h,t),s=qs(Qt.s,kr.s,t),r=qs(Qt.l,kr.l,t);return this.setHSL(n,s,r),this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),e.normalized===!0&&(this.r/=255,this.g/=255,this.b/=255),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}Ce.NAMES=ku;let is;class Hu{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement=="undefined")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{is===void 0&&(is=Ys("canvas")),is.width=e.width,is.height=e.height;const n=is.getContext("2d");e instanceof ImageData?n.putImageData(e,0,0):n.drawImage(e,0,0,e.width,e.height),t=is}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement!="undefined"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement!="undefined"&&e instanceof HTMLCanvasElement||typeof ImageBitmap!="undefined"&&e instanceof ImageBitmap){const t=Ys("canvas");t.width=e.width,t.height=e.height;const n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);const s=n.getImageData(0,0,e.width,e.height),r=s.data;for(let o=0;o<r.length;o++)r[o]=hi(r[o]/255)*255;return n.putImageData(s,0,0),t}else if(e.data){const t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(hi(t[n]/255)*255):t[n]=hi(t[n]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}class Vu{constructor(e=null){this.isSource=!0,this.uuid=Zt(),this.data=e,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let o=0,a=s.length;o<a;o++)s[o].isDataTexture?r.push(Oa(s[o].image)):r.push(Oa(s[o]))}else r=Oa(s);n.url=r}return t||(e.images[this.uuid]=n),n}}function Oa(i){return typeof HTMLImageElement!="undefined"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement!="undefined"&&i instanceof HTMLCanvasElement||typeof ImageBitmap!="undefined"&&i instanceof ImageBitmap?Hu.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let bg=0;class Mt extends ui{constructor(e=Mt.DEFAULT_IMAGE,t=Mt.DEFAULT_MAPPING,n=Ht,s=Ht,r=xt,o=Ji,a=Kt,l=ri,c=1,u=li){super();this.isTexture=!0,Object.defineProperty(this,"id",{value:bg++}),this.uuid=Zt(),this.name="",this.source=new Vu(e),this.mipmaps=[],this.mapping=t,this.wrapS=n,this.wrapT=s,this.magFilter=r,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new Te(0,0),this.repeat=new Te(1,1),this.center=new Te(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Vt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.encoding=u,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.needsPMREMUpdate=!1}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.encoding=e.encoding,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const n={metadata:{version:4.5,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,type:this.type,encoding:this.encoding,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return JSON.stringify(this.userData)!=="{}"&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==lu)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Qi:e.x=e.x-Math.floor(e.x);break;case Ht:e.x=e.x<0?0:1;break;case Ur:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Qi:e.y=e.y-Math.floor(e.y);break;case Ht:e.y=e.y<0?0:1;break;case Ur:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}}Mt.DEFAULT_IMAGE=null;Mt.DEFAULT_MAPPING=lu;class Qe{constructor(e=0,t=0,n=0,s=1){Qe.prototype.isVector4=!0,this.x=e,this.y=t,this.z=n,this.w=s}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,s){return this.x=e,this.y=t,this.z=n,this.w=s,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e,t){return t!==void 0?(console.warn("THREE.Vector4: .add() now only accepts one argument. Use .addVectors( a, b ) instead."),this.addVectors(e,t)):(this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this)}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e,t){return t!==void 0?(console.warn("THREE.Vector4: .sub() now only accepts one argument. Use .subVectors( a, b ) instead."),this.subVectors(e,t)):(this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this)}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,n=this.y,s=this.z,r=this.w,o=e.elements;return this.x=o[0]*t+o[4]*n+o[8]*s+o[12]*r,this.y=o[1]*t+o[5]*n+o[9]*s+o[13]*r,this.z=o[2]*t+o[6]*n+o[10]*s+o[14]*r,this.w=o[3]*t+o[7]*n+o[11]*s+o[15]*r,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,s,r;const o=.01,a=.1,l=e.elements,c=l[0],u=l[4],h=l[8],f=l[1],m=l[5],g=l[9],p=l[2],d=l[6],_=l[10];if(Math.abs(u-f)<o&&Math.abs(h-p)<o&&Math.abs(g-d)<o){if(Math.abs(u+f)<a&&Math.abs(h+p)<a&&Math.abs(g+d)<a&&Math.abs(c+m+_-3)<a)return this.set(1,0,0,0),this;t=Math.PI;const T=(c+1)/2,b=(m+1)/2,w=(_+1)/2,R=(u+f)/4,D=(h+p)/4,x=(g+d)/4;return T>b&&T>w?T<o?(n=0,s=.707106781,r=.707106781):(n=Math.sqrt(T),s=R/n,r=D/n):b>w?b<o?(n=.707106781,s=0,r=.707106781):(s=Math.sqrt(b),n=R/s,r=x/s):w<o?(n=.707106781,s=.707106781,r=0):(r=Math.sqrt(w),n=D/r,s=x/r),this.set(n,s,r,t),this}let M=Math.sqrt((d-g)*(d-g)+(h-p)*(h-p)+(f-u)*(f-u));return Math.abs(M)<.001&&(M=1),this.x=(d-g)/M,this.y=(h-p)/M,this.z=(f-u)/M,this.w=Math.acos((c+m+_-1)/2),this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this.z=this.z<0?Math.ceil(this.z):Math.floor(this.z),this.w=this.w<0?Math.ceil(this.w):Math.floor(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t,n){return n!==void 0&&console.warn("THREE.Vector4: offset has been removed from .fromBufferAttribute()."),this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class fi extends ui{constructor(e,t,n={}){super();this.isWebGLRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new Qe(0,0,e,t),this.scissorTest=!1,this.viewport=new Qe(0,0,e,t);const s={width:e,height:t,depth:1};this.texture=new Mt(s,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.encoding),this.texture.isRenderTargetTexture=!0,this.texture.flipY=!1,this.texture.generateMipmaps=n.generateMipmaps!==void 0?n.generateMipmaps:!1,this.texture.internalFormat=n.internalFormat!==void 0?n.internalFormat:null,this.texture.minFilter=n.minFilter!==void 0?n.minFilter:xt,this.depthBuffer=n.depthBuffer!==void 0?n.depthBuffer:!0,this.stencilBuffer=n.stencilBuffer!==void 0?n.stencilBuffer:!1,this.depthTexture=n.depthTexture!==void 0?n.depthTexture:null,this.samples=n.samples!==void 0?n.samples:0}setSize(e,t,n=1){(this.width!==e||this.height!==t||this.depth!==n)&&(this.width=e,this.height=t,this.depth=n,this.texture.image.width=e,this.texture.image.height=t,this.texture.image.depth=n,this.dispose()),this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.viewport.copy(e.viewport),this.texture=e.texture.clone(),this.texture.isRenderTargetTexture=!0;const t=Object.assign({},e.texture.image);return this.texture.source=new Vu(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Gu extends Mt{constructor(e=null,t=1,n=1,s=1){super(null);this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:s},this.magFilter=pt,this.minFilter=pt,this.wrapR=Ht,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Sg extends Mt{constructor(e=null,t=1,n=1,s=1){super(null);this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:s},this.magFilter=pt,this.minFilter=pt,this.wrapR=Ht,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class rt{constructor(e=0,t=0,n=0,s=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=s}static slerp(e,t,n,s){return console.warn("THREE.Quaternion: Static .slerp() has been deprecated. Use qm.slerpQuaternions( qa, qb, t ) instead."),n.slerpQuaternions(e,t,s)}static slerpFlat(e,t,n,s,r,o,a){let l=n[s+0],c=n[s+1],u=n[s+2],h=n[s+3];const f=r[o+0],m=r[o+1],g=r[o+2],p=r[o+3];if(a===0){e[t+0]=l,e[t+1]=c,e[t+2]=u,e[t+3]=h;return}if(a===1){e[t+0]=f,e[t+1]=m,e[t+2]=g,e[t+3]=p;return}if(h!==p||l!==f||c!==m||u!==g){let d=1-a;const _=l*f+c*m+u*g+h*p,M=_>=0?1:-1,T=1-_*_;if(T>Number.EPSILON){const w=Math.sqrt(T),R=Math.atan2(w,_*M);d=Math.sin(d*R)/w,a=Math.sin(a*R)/w}const b=a*M;if(l=l*d+f*b,c=c*d+m*b,u=u*d+g*b,h=h*d+p*b,d===1-a){const w=1/Math.sqrt(l*l+c*c+u*u+h*h);l*=w,c*=w,u*=w,h*=w}}e[t]=l,e[t+1]=c,e[t+2]=u,e[t+3]=h}static multiplyQuaternionsFlat(e,t,n,s,r,o){const a=n[s],l=n[s+1],c=n[s+2],u=n[s+3],h=r[o],f=r[o+1],m=r[o+2],g=r[o+3];return e[t]=a*g+u*h+l*m-c*f,e[t+1]=l*g+u*f+c*h-a*m,e[t+2]=c*g+u*m+a*f-l*h,e[t+3]=u*g-a*h-l*f-c*m,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,s){return this._x=e,this._y=t,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t){if(!(e&&e.isEuler))throw new Error("THREE.Quaternion: .setFromEuler() now expects an Euler rotation rather than a Vector3 and order.");const n=e._x,s=e._y,r=e._z,o=e._order,a=Math.cos,l=Math.sin,c=a(n/2),u=a(s/2),h=a(r/2),f=l(n/2),m=l(s/2),g=l(r/2);switch(o){case"XYZ":this._x=f*u*h+c*m*g,this._y=c*m*h-f*u*g,this._z=c*u*g+f*m*h,this._w=c*u*h-f*m*g;break;case"YXZ":this._x=f*u*h+c*m*g,this._y=c*m*h-f*u*g,this._z=c*u*g-f*m*h,this._w=c*u*h+f*m*g;break;case"ZXY":this._x=f*u*h-c*m*g,this._y=c*m*h+f*u*g,this._z=c*u*g+f*m*h,this._w=c*u*h-f*m*g;break;case"ZYX":this._x=f*u*h-c*m*g,this._y=c*m*h+f*u*g,this._z=c*u*g-f*m*h,this._w=c*u*h+f*m*g;break;case"YZX":this._x=f*u*h+c*m*g,this._y=c*m*h+f*u*g,this._z=c*u*g-f*m*h,this._w=c*u*h-f*m*g;break;case"XZY":this._x=f*u*h-c*m*g,this._y=c*m*h-f*u*g,this._z=c*u*g+f*m*h,this._w=c*u*h+f*m*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return t!==!1&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const n=t/2,s=Math.sin(n);return this._x=e.x*s,this._y=e.y*s,this._z=e.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,n=t[0],s=t[4],r=t[8],o=t[1],a=t[5],l=t[9],c=t[2],u=t[6],h=t[10],f=n+a+h;if(f>0){const m=.5/Math.sqrt(f+1);this._w=.25/m,this._x=(u-l)*m,this._y=(r-c)*m,this._z=(o-s)*m}else if(n>a&&n>h){const m=2*Math.sqrt(1+n-a-h);this._w=(u-l)/m,this._x=.25*m,this._y=(s+o)/m,this._z=(r+c)/m}else if(a>h){const m=2*Math.sqrt(1+a-n-h);this._w=(r-c)/m,this._x=(s+o)/m,this._y=.25*m,this._z=(l+u)/m}else{const m=2*Math.sqrt(1+h-n-a);this._w=(o-s)/m,this._x=(r+c)/m,this._y=(l+u)/m,this._z=.25*m}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<Number.EPSILON?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(yt(this.dot(e),-1,1)))}rotateTowards(e,t){const n=this.angleTo(e);if(n===0)return this;const s=Math.min(1,t/n);return this.slerp(e,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e,t){return t!==void 0?(console.warn("THREE.Quaternion: .multiply() now only accepts one argument. Use .multiplyQuaternions( a, b ) instead."),this.multiplyQuaternions(e,t)):this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const n=e._x,s=e._y,r=e._z,o=e._w,a=t._x,l=t._y,c=t._z,u=t._w;return this._x=n*u+o*a+s*c-r*l,this._y=s*u+o*l+r*a-n*c,this._z=r*u+o*c+n*l-s*a,this._w=o*u-n*a-s*l-r*c,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const n=this._x,s=this._y,r=this._z,o=this._w;let a=o*e._w+n*e._x+s*e._y+r*e._z;if(a<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,a=-a):this.copy(e),a>=1)return this._w=o,this._x=n,this._y=s,this._z=r,this;const l=1-a*a;if(l<=Number.EPSILON){const m=1-t;return this._w=m*o+t*this._w,this._x=m*n+t*this._x,this._y=m*s+t*this._y,this._z=m*r+t*this._z,this.normalize(),this._onChangeCallback(),this}const c=Math.sqrt(l),u=Math.atan2(c,a),h=Math.sin((1-t)*u)/c,f=Math.sin(t*u)/c;return this._w=o*h+this._w*f,this._x=n*h+this._x*f,this._y=s*h+this._y*f,this._z=r*h+this._z*f,this._onChangeCallback(),this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){const e=Math.random(),t=Math.sqrt(1-e),n=Math.sqrt(e),s=2*Math.PI*Math.random(),r=2*Math.PI*Math.random();return this.set(t*Math.cos(s),n*Math.sin(r),n*Math.cos(r),t*Math.sin(s))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class L{constructor(e=0,t=0,n=0){L.prototype.isVector3=!0,this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e,t){return t!==void 0?(console.warn("THREE.Vector3: .add() now only accepts one argument. Use .addVectors( a, b ) instead."),this.addVectors(e,t)):(this.x+=e.x,this.y+=e.y,this.z+=e.z,this)}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e,t){return t!==void 0?(console.warn("THREE.Vector3: .sub() now only accepts one argument. Use .subVectors( a, b ) instead."),this.subVectors(e,t)):(this.x-=e.x,this.y-=e.y,this.z-=e.z,this)}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e,t){return t!==void 0?(console.warn("THREE.Vector3: .multiply() now only accepts one argument. Use .multiplyVectors( a, b ) instead."),this.multiplyVectors(e,t)):(this.x*=e.x,this.y*=e.y,this.z*=e.z,this)}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return e&&e.isEuler||console.error("THREE.Vector3: .applyEuler() now expects an Euler rotation rather than a Vector3 and order."),this.applyQuaternion(Wu.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Wu.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,n=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6]*s,this.y=r[1]*t+r[4]*n+r[7]*s,this.z=r[2]*t+r[5]*n+r[8]*s,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,n=this.y,s=this.z,r=e.elements,o=1/(r[3]*t+r[7]*n+r[11]*s+r[15]);return this.x=(r[0]*t+r[4]*n+r[8]*s+r[12])*o,this.y=(r[1]*t+r[5]*n+r[9]*s+r[13])*o,this.z=(r[2]*t+r[6]*n+r[10]*s+r[14])*o,this}applyQuaternion(e){const t=this.x,n=this.y,s=this.z,r=e.x,o=e.y,a=e.z,l=e.w,c=l*t+o*s-a*n,u=l*n+a*t-r*s,h=l*s+r*n-o*t,f=-r*t-o*n-a*s;return this.x=c*l+f*-r+u*-a-h*-o,this.y=u*l+f*-o+h*-r-c*-a,this.z=h*l+f*-a+c*-o-u*-r,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,n=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[4]*n+r[8]*s,this.y=r[1]*t+r[5]*n+r[9]*s,this.z=r[2]*t+r[6]*n+r[10]*s,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this.z=this.z<0?Math.ceil(this.z):Math.floor(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e,t){return t!==void 0?(console.warn("THREE.Vector3: .cross() now only accepts one argument. Use .crossVectors( a, b ) instead."),this.crossVectors(e,t)):this.crossVectors(this,e)}crossVectors(e,t){const n=e.x,s=e.y,r=e.z,o=t.x,a=t.y,l=t.z;return this.x=s*l-r*a,this.y=r*o-n*l,this.z=n*a-s*o,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return Ua.copy(this).projectOnVector(e),this.sub(Ua)}reflect(e){return this.sub(Ua.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(yt(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y,s=this.z-e.z;return t*t+n*n+s*s}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){const s=Math.sin(t)*e;return this.x=s*Math.sin(n),this.y=Math.cos(t)*e,this.z=s*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),s=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=s,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t,n){return n!==void 0&&console.warn("THREE.Vector3: offset has been removed from .fromBufferAttribute()."),this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=(Math.random()-.5)*2,t=Math.random()*Math.PI*2,n=Math.sqrt(1-e**2);return this.x=n*Math.cos(t),this.y=n*Math.sin(t),this.z=e,this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Ua=new L,Wu=new rt;class ss{constructor(e=new L(1/0,1/0,1/0),t=new L(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){let t=1/0,n=1/0,s=1/0,r=-1/0,o=-1/0,a=-1/0;for(let l=0,c=e.length;l<c;l+=3){const u=e[l],h=e[l+1],f=e[l+2];u<t&&(t=u),h<n&&(n=h),f<s&&(s=f),u>r&&(r=u),h>o&&(o=h),f>a&&(a=f)}return this.min.set(t,n,s),this.max.set(r,o,a),this}setFromBufferAttribute(e){let t=1/0,n=1/0,s=1/0,r=-1/0,o=-1/0,a=-1/0;for(let l=0,c=e.count;l<c;l++){const u=e.getX(l),h=e.getY(l),f=e.getZ(l);u<t&&(t=u),h<n&&(n=h),f<s&&(s=f),u>r&&(r=u),h>o&&(o=h),f>a&&(a=f)}return this.min.set(t,n,s),this.max.set(r,o,a),this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const n=di.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const n=e.geometry;if(n!==void 0)if(t&&n.attributes!=null&&n.attributes.position!==void 0){const r=n.attributes.position;for(let o=0,a=r.count;o<a;o++)di.fromBufferAttribute(r,o).applyMatrix4(e.matrixWorld),this.expandByPoint(di)}else n.boundingBox===null&&n.computeBoundingBox(),za.copy(n.boundingBox),za.applyMatrix4(e.matrixWorld),this.union(za);const s=e.children;for(let r=0,o=s.length;r<o;r++)this.expandByObject(s[r],t);return this}containsPoint(e){return!(e.x<this.min.x||e.x>this.max.x||e.y<this.min.y||e.y>this.max.y||e.z<this.min.z||e.z>this.max.z)}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return!(e.max.x<this.min.x||e.min.x>this.max.x||e.max.y<this.min.y||e.min.y>this.max.y||e.max.z<this.min.z||e.min.z>this.max.z)}intersectsSphere(e){return this.clampPoint(e.center,di),di.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Ks),Vr.subVectors(this.max,Ks),rs.subVectors(e.a,Ks),os.subVectors(e.b,Ks),as.subVectors(e.c,Ks),Hn.subVectors(os,rs),Vn.subVectors(as,os),pi.subVectors(rs,as);let t=[0,-Hn.z,Hn.y,0,-Vn.z,Vn.y,0,-pi.z,pi.y,Hn.z,0,-Hn.x,Vn.z,0,-Vn.x,pi.z,0,-pi.x,-Hn.y,Hn.x,0,-Vn.y,Vn.x,0,-pi.y,pi.x,0];return!Ba(t,rs,os,as,Vr)||(t=[1,0,0,0,1,0,0,0,1],!Ba(t,rs,os,as,Vr))?!1:(Gr.crossVectors(Hn,Vn),t=[Gr.x,Gr.y,Gr.z],Ba(t,rs,os,as,Vr))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return di.copy(e).clamp(this.min,this.max).sub(e).length()}getBoundingSphere(e){return this.getCenter(e.center),e.radius=this.getSize(di).length()*.5,e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Mn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Mn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Mn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Mn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Mn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Mn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Mn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Mn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Mn),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const Mn=[new L,new L,new L,new L,new L,new L,new L,new L],di=new L,za=new ss,rs=new L,os=new L,as=new L,Hn=new L,Vn=new L,pi=new L,Ks=new L,Vr=new L,Gr=new L,mi=new L;function Ba(i,e,t,n,s){for(let r=0,o=i.length-3;r<=o;r+=3){mi.fromArray(i,r);const a=s.x*Math.abs(mi.x)+s.y*Math.abs(mi.y)+s.z*Math.abs(mi.z),l=e.dot(mi),c=t.dot(mi),u=n.dot(mi);if(Math.max(-Math.max(l,c,u),Math.min(l,c,u))>a)return!1}return!0}const wg=new ss,ju=new L,Wr=new L,ka=new L;class ls{constructor(e=new L,t=-1){this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const n=this.center;t!==void 0?n.copy(t):wg.setFromPoints(e).getCenter(n);let s=0;for(let r=0,o=e.length;r<o;r++)s=Math.max(s,n.distanceToSquared(e[r]));return this.radius=Math.sqrt(s),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){ka.subVectors(e,this.center);const t=ka.lengthSq();if(t>this.radius*this.radius){const n=Math.sqrt(t),s=(n-this.radius)*.5;this.center.add(ka.multiplyScalar(s/n)),this.radius+=s}return this}union(e){return this.center.equals(e.center)===!0?Wr.set(0,0,1).multiplyScalar(e.radius):Wr.subVectors(e.center,this.center).normalize().multiplyScalar(e.radius),this.expandByPoint(ju.copy(e.center).add(Wr)),this.expandByPoint(ju.copy(e.center).sub(Wr)),this}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const bn=new L,Ha=new L,jr=new L,Gn=new L,Va=new L,Xr=new L,Ga=new L;class qr{constructor(e=new L,t=new L(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.direction).multiplyScalar(e).add(this.origin)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,bn)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.direction).multiplyScalar(n).add(this.origin)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=bn.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(bn.copy(this.direction).multiplyScalar(t).add(this.origin),bn.distanceToSquared(e))}distanceSqToSegment(e,t,n,s){Ha.copy(e).add(t).multiplyScalar(.5),jr.copy(t).sub(e).normalize(),Gn.copy(this.origin).sub(Ha);const r=e.distanceTo(t)*.5,o=-this.direction.dot(jr),a=Gn.dot(this.direction),l=-Gn.dot(jr),c=Gn.lengthSq(),u=Math.abs(1-o*o);let h,f,m,g;if(u>0)if(h=o*l-a,f=o*a-l,g=r*u,h>=0)if(f>=-g)if(f<=g){const p=1/u;h*=p,f*=p,m=h*(h+o*f+2*a)+f*(o*h+f+2*l)+c}else f=r,h=Math.max(0,-(o*f+a)),m=-h*h+f*(f+2*l)+c;else f=-r,h=Math.max(0,-(o*f+a)),m=-h*h+f*(f+2*l)+c;else f<=-g?(h=Math.max(0,-(-o*r+a)),f=h>0?-r:Math.min(Math.max(-r,-l),r),m=-h*h+f*(f+2*l)+c):f<=g?(h=0,f=Math.min(Math.max(-r,-l),r),m=f*(f+2*l)+c):(h=Math.max(0,-(o*r+a)),f=h>0?r:Math.min(Math.max(-r,-l),r),m=-h*h+f*(f+2*l)+c);else f=o>0?-r:r,h=Math.max(0,-(o*f+a)),m=-h*h+f*(f+2*l)+c;return n&&n.copy(this.direction).multiplyScalar(h).add(this.origin),s&&s.copy(jr).multiplyScalar(f).add(Ha),m}intersectSphere(e,t){bn.subVectors(e.center,this.origin);const n=bn.dot(this.direction),s=bn.dot(bn)-n*n,r=e.radius*e.radius;if(s>r)return null;const o=Math.sqrt(r-s),a=n-o,l=n+o;return a<0&&l<0?null:a<0?this.at(l,t):this.at(a,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){const n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,s,r,o,a,l;const c=1/this.direction.x,u=1/this.direction.y,h=1/this.direction.z,f=this.origin;return c>=0?(n=(e.min.x-f.x)*c,s=(e.max.x-f.x)*c):(n=(e.max.x-f.x)*c,s=(e.min.x-f.x)*c),u>=0?(r=(e.min.y-f.y)*u,o=(e.max.y-f.y)*u):(r=(e.max.y-f.y)*u,o=(e.min.y-f.y)*u),n>o||r>s||((r>n||n!==n)&&(n=r),(o<s||s!==s)&&(s=o),h>=0?(a=(e.min.z-f.z)*h,l=(e.max.z-f.z)*h):(a=(e.max.z-f.z)*h,l=(e.min.z-f.z)*h),n>l||a>s)||((a>n||n!==n)&&(n=a),(l<s||s!==s)&&(s=l),s<0)?null:this.at(n>=0?n:s,t)}intersectsBox(e){return this.intersectBox(e,bn)!==null}intersectTriangle(e,t,n,s,r){Va.subVectors(t,e),Xr.subVectors(n,e),Ga.crossVectors(Va,Xr);let o=this.direction.dot(Ga),a;if(o>0){if(s)return null;a=1}else if(o<0)a=-1,o=-o;else return null;Gn.subVectors(this.origin,e);const l=a*this.direction.dot(Xr.crossVectors(Gn,Xr));if(l<0)return null;const c=a*this.direction.dot(Va.cross(Gn));if(c<0||l+c>o)return null;const u=-a*Gn.dot(Ga);return u<0?null:this.at(u/o,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class He{constructor(){He.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],arguments.length>0&&console.error("THREE.Matrix4: the constructor no longer reads arguments. use .set() instead.")}set(e,t,n,s,r,o,a,l,c,u,h,f,m,g,p,d){const _=this.elements;return _[0]=e,_[4]=t,_[8]=n,_[12]=s,_[1]=r,_[5]=o,_[9]=a,_[13]=l,_[2]=c,_[6]=u,_[10]=h,_[14]=f,_[3]=m,_[7]=g,_[11]=p,_[15]=d,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new He().fromArray(this.elements)}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){const t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,n=e.elements,s=1/cs.setFromMatrixColumn(e,0).length(),r=1/cs.setFromMatrixColumn(e,1).length(),o=1/cs.setFromMatrixColumn(e,2).length();return t[0]=n[0]*s,t[1]=n[1]*s,t[2]=n[2]*s,t[3]=0,t[4]=n[4]*r,t[5]=n[5]*r,t[6]=n[6]*r,t[7]=0,t[8]=n[8]*o,t[9]=n[9]*o,t[10]=n[10]*o,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){e&&e.isEuler||console.error("THREE.Matrix4: .makeRotationFromEuler() now expects a Euler rotation rather than a Vector3 and order.");const t=this.elements,n=e.x,s=e.y,r=e.z,o=Math.cos(n),a=Math.sin(n),l=Math.cos(s),c=Math.sin(s),u=Math.cos(r),h=Math.sin(r);if(e.order==="XYZ"){const f=o*u,m=o*h,g=a*u,p=a*h;t[0]=l*u,t[4]=-l*h,t[8]=c,t[1]=m+g*c,t[5]=f-p*c,t[9]=-a*l,t[2]=p-f*c,t[6]=g+m*c,t[10]=o*l}else if(e.order==="YXZ"){const f=l*u,m=l*h,g=c*u,p=c*h;t[0]=f+p*a,t[4]=g*a-m,t[8]=o*c,t[1]=o*h,t[5]=o*u,t[9]=-a,t[2]=m*a-g,t[6]=p+f*a,t[10]=o*l}else if(e.order==="ZXY"){const f=l*u,m=l*h,g=c*u,p=c*h;t[0]=f-p*a,t[4]=-o*h,t[8]=g+m*a,t[1]=m+g*a,t[5]=o*u,t[9]=p-f*a,t[2]=-o*c,t[6]=a,t[10]=o*l}else if(e.order==="ZYX"){const f=o*u,m=o*h,g=a*u,p=a*h;t[0]=l*u,t[4]=g*c-m,t[8]=f*c+p,t[1]=l*h,t[5]=p*c+f,t[9]=m*c-g,t[2]=-c,t[6]=a*l,t[10]=o*l}else if(e.order==="YZX"){const f=o*l,m=o*c,g=a*l,p=a*c;t[0]=l*u,t[4]=p-f*h,t[8]=g*h+m,t[1]=h,t[5]=o*u,t[9]=-a*u,t[2]=-c*u,t[6]=m*h+g,t[10]=f-p*h}else if(e.order==="XZY"){const f=o*l,m=o*c,g=a*l,p=a*c;t[0]=l*u,t[4]=-h,t[8]=c*u,t[1]=f*h+p,t[5]=o*u,t[9]=m*h-g,t[2]=g*h-m,t[6]=a*u,t[10]=p*h+f}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(Tg,e,Eg)}lookAt(e,t,n){const s=this.elements;return Ut.subVectors(e,t),Ut.lengthSq()===0&&(Ut.z=1),Ut.normalize(),Wn.crossVectors(n,Ut),Wn.lengthSq()===0&&(Math.abs(n.z)===1?Ut.x+=1e-4:Ut.z+=1e-4,Ut.normalize(),Wn.crossVectors(n,Ut)),Wn.normalize(),Yr.crossVectors(Ut,Wn),s[0]=Wn.x,s[4]=Yr.x,s[8]=Ut.x,s[1]=Wn.y,s[5]=Yr.y,s[9]=Ut.y,s[2]=Wn.z,s[6]=Yr.z,s[10]=Ut.z,this}multiply(e,t){return t!==void 0?(console.warn("THREE.Matrix4: .multiply() now only accepts one argument. Use .multiplyMatrices( a, b ) instead."),this.multiplyMatrices(e,t)):this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,s=t.elements,r=this.elements,o=n[0],a=n[4],l=n[8],c=n[12],u=n[1],h=n[5],f=n[9],m=n[13],g=n[2],p=n[6],d=n[10],_=n[14],M=n[3],T=n[7],b=n[11],w=n[15],R=s[0],D=s[4],x=s[8],C=s[12],N=s[1],U=s[5],Z=s[9],te=s[13],O=s[2],j=s[6],z=s[10],G=s[14],W=s[3],B=s[7],q=s[11],le=s[15];return r[0]=o*R+a*N+l*O+c*W,r[4]=o*D+a*U+l*j+c*B,r[8]=o*x+a*Z+l*z+c*q,r[12]=o*C+a*te+l*G+c*le,r[1]=u*R+h*N+f*O+m*W,r[5]=u*D+h*U+f*j+m*B,r[9]=u*x+h*Z+f*z+m*q,r[13]=u*C+h*te+f*G+m*le,r[2]=g*R+p*N+d*O+_*W,r[6]=g*D+p*U+d*j+_*B,r[10]=g*x+p*Z+d*z+_*q,r[14]=g*C+p*te+d*G+_*le,r[3]=M*R+T*N+b*O+w*W,r[7]=M*D+T*U+b*j+w*B,r[11]=M*x+T*Z+b*z+w*q,r[15]=M*C+T*te+b*G+w*le,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[4],s=e[8],r=e[12],o=e[1],a=e[5],l=e[9],c=e[13],u=e[2],h=e[6],f=e[10],m=e[14],g=e[3],p=e[7],d=e[11],_=e[15];return g*(+r*l*h-s*c*h-r*a*f+n*c*f+s*a*m-n*l*m)+p*(+t*l*m-t*c*f+r*o*f-s*o*m+s*c*u-r*l*u)+d*(+t*c*h-t*a*m-r*o*h+n*o*m+r*a*u-n*c*u)+_*(-s*a*u-t*l*h+t*a*f+s*o*h-n*o*f+n*l*u)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){const s=this.elements;return e.isVector3?(s[12]=e.x,s[13]=e.y,s[14]=e.z):(s[12]=e,s[13]=t,s[14]=n),this}invert(){const e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8],h=e[9],f=e[10],m=e[11],g=e[12],p=e[13],d=e[14],_=e[15],M=h*d*c-p*f*c+p*l*m-a*d*m-h*l*_+a*f*_,T=g*f*c-u*d*c-g*l*m+o*d*m+u*l*_-o*f*_,b=u*p*c-g*h*c+g*a*m-o*p*m-u*a*_+o*h*_,w=g*h*l-u*p*l-g*a*f+o*p*f+u*a*d-o*h*d,R=t*M+n*T+s*b+r*w;if(R===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const D=1/R;return e[0]=M*D,e[1]=(p*f*r-h*d*r-p*s*m+n*d*m+h*s*_-n*f*_)*D,e[2]=(a*d*r-p*l*r+p*s*c-n*d*c-a*s*_+n*l*_)*D,e[3]=(h*l*r-a*f*r-h*s*c+n*f*c+a*s*m-n*l*m)*D,e[4]=T*D,e[5]=(u*d*r-g*f*r+g*s*m-t*d*m-u*s*_+t*f*_)*D,e[6]=(g*l*r-o*d*r-g*s*c+t*d*c+o*s*_-t*l*_)*D,e[7]=(o*f*r-u*l*r+u*s*c-t*f*c-o*s*m+t*l*m)*D,e[8]=b*D,e[9]=(g*h*r-u*p*r-g*n*m+t*p*m+u*n*_-t*h*_)*D,e[10]=(o*p*r-g*a*r+g*n*c-t*p*c-o*n*_+t*a*_)*D,e[11]=(u*a*r-o*h*r-u*n*c+t*h*c+o*n*m-t*a*m)*D,e[12]=w*D,e[13]=(u*p*s-g*h*s+g*n*f-t*p*f-u*n*d+t*h*d)*D,e[14]=(g*a*s-o*p*s-g*n*l+t*p*l+o*n*d-t*a*d)*D,e[15]=(o*h*s-u*a*s+u*n*l-t*h*l-o*n*f+t*a*f)*D,this}scale(e){const t=this.elements,n=e.x,s=e.y,r=e.z;return t[0]*=n,t[4]*=s,t[8]*=r,t[1]*=n,t[5]*=s,t[9]*=r,t[2]*=n,t[6]*=s,t[10]*=r,t[3]*=n,t[7]*=s,t[11]*=r,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],s=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,s))}makeTranslation(e,t,n){return this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const n=Math.cos(t),s=Math.sin(t),r=1-n,o=e.x,a=e.y,l=e.z,c=r*o,u=r*a;return this.set(c*o+n,c*a-s*l,c*l+s*a,0,c*a+s*l,u*a+n,u*l-s*o,0,c*l-s*a,u*l+s*o,r*l*l+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,s,r,o){return this.set(1,n,r,0,e,1,o,0,t,s,1,0,0,0,0,1),this}compose(e,t,n){const s=this.elements,r=t._x,o=t._y,a=t._z,l=t._w,c=r+r,u=o+o,h=a+a,f=r*c,m=r*u,g=r*h,p=o*u,d=o*h,_=a*h,M=l*c,T=l*u,b=l*h,w=n.x,R=n.y,D=n.z;return s[0]=(1-(p+_))*w,s[1]=(m+b)*w,s[2]=(g-T)*w,s[3]=0,s[4]=(m-b)*R,s[5]=(1-(f+_))*R,s[6]=(d+M)*R,s[7]=0,s[8]=(g+T)*D,s[9]=(d-M)*D,s[10]=(1-(f+p))*D,s[11]=0,s[12]=e.x,s[13]=e.y,s[14]=e.z,s[15]=1,this}decompose(e,t,n){const s=this.elements;let r=cs.set(s[0],s[1],s[2]).length();const o=cs.set(s[4],s[5],s[6]).length(),a=cs.set(s[8],s[9],s[10]).length();this.determinant()<0&&(r=-r),e.x=s[12],e.y=s[13],e.z=s[14],Jt.copy(this);const c=1/r,u=1/o,h=1/a;return Jt.elements[0]*=c,Jt.elements[1]*=c,Jt.elements[2]*=c,Jt.elements[4]*=u,Jt.elements[5]*=u,Jt.elements[6]*=u,Jt.elements[8]*=h,Jt.elements[9]*=h,Jt.elements[10]*=h,t.setFromRotationMatrix(Jt),n.x=r,n.y=o,n.z=a,this}makePerspective(e,t,n,s,r,o){o===void 0&&console.warn("THREE.Matrix4: .makePerspective() has been redefined and has a new signature. Please check the docs.");const a=this.elements,l=2*r/(t-e),c=2*r/(n-s),u=(t+e)/(t-e),h=(n+s)/(n-s),f=-(o+r)/(o-r),m=-2*o*r/(o-r);return a[0]=l,a[4]=0,a[8]=u,a[12]=0,a[1]=0,a[5]=c,a[9]=h,a[13]=0,a[2]=0,a[6]=0,a[10]=f,a[14]=m,a[3]=0,a[7]=0,a[11]=-1,a[15]=0,this}makeOrthographic(e,t,n,s,r,o){const a=this.elements,l=1/(t-e),c=1/(n-s),u=1/(o-r),h=(t+e)*l,f=(n+s)*c,m=(o+r)*u;return a[0]=2*l,a[4]=0,a[8]=0,a[12]=-h,a[1]=0,a[5]=2*c,a[9]=0,a[13]=-f,a[2]=0,a[6]=0,a[10]=-2*u,a[14]=-m,a[3]=0,a[7]=0,a[11]=0,a[15]=1,this}equals(e){const t=this.elements,n=e.elements;for(let s=0;s<16;s++)if(t[s]!==n[s])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}}const cs=new L,Jt=new He,Tg=new L(0,0,0),Eg=new L(1,1,1),Wn=new L,Yr=new L,Ut=new L,Xu=new He,qu=new rt;class us{constructor(e=0,t=0,n=0,s=us.DefaultOrder){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=s}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,s=this._order){return this._x=e,this._y=t,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){const s=e.elements,r=s[0],o=s[4],a=s[8],l=s[1],c=s[5],u=s[9],h=s[2],f=s[6],m=s[10];switch(t){case"XYZ":this._y=Math.asin(yt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-u,m),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(f,c),this._z=0);break;case"YXZ":this._x=Math.asin(-yt(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(a,m),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-h,r),this._z=0);break;case"ZXY":this._x=Math.asin(yt(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-h,m),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-yt(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(f,m),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(yt(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,c),this._y=Math.atan2(-h,r)):(this._x=0,this._y=Math.atan2(a,m));break;case"XZY":this._z=Math.asin(-yt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(f,c),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-u,m),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return Xu.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Xu,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return qu.setFromEuler(this),this.setFromQuaternion(qu,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}toVector3(){console.error("THREE.Euler: .toVector3() has been removed. Use Vector3.setFromEuler() instead")}}us.DefaultOrder="XYZ";us.RotationOrders=["XYZ","YZX","ZXY","XZY","YXZ","ZYX"];class Wa{constructor(){this.mask=1|0}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=4294967295|0}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!=0}isEnabled(e){return(this.mask&(1<<e|0))!=0}}let Ag=0;const Yu=new L,hs=new rt,Sn=new He,Kr=new L,Zs=new L,Cg=new L,Lg=new rt,Ku=new L(1,0,0),Zu=new L(0,1,0),$u=new L(0,0,1),Rg={type:"added"},Qu={type:"removed"};class tt extends ui{constructor(){super();this.isObject3D=!0,Object.defineProperty(this,"id",{value:Ag++}),this.uuid=Zt(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=tt.DefaultUp.clone();const e=new L,t=new us,n=new rt,s=new L(1,1,1);function r(){n.setFromEuler(t,!1)}function o(){t.setFromQuaternion(n,void 0,!1)}t._onChange(r),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new He},normalMatrix:{value:new Vt}}),this.matrix=new He,this.matrixWorld=new He,this.matrixAutoUpdate=tt.DefaultMatrixAutoUpdate,this.matrixWorldNeedsUpdate=!1,this.layers=new Wa,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return hs.setFromAxisAngle(e,t),this.quaternion.multiply(hs),this}rotateOnWorldAxis(e,t){return hs.setFromAxisAngle(e,t),this.quaternion.premultiply(hs),this}rotateX(e){return this.rotateOnAxis(Ku,e)}rotateY(e){return this.rotateOnAxis(Zu,e)}rotateZ(e){return this.rotateOnAxis($u,e)}translateOnAxis(e,t){return Yu.copy(e).applyQuaternion(this.quaternion),this.position.add(Yu.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Ku,e)}translateY(e){return this.translateOnAxis(Zu,e)}translateZ(e){return this.translateOnAxis($u,e)}localToWorld(e){return e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return e.applyMatrix4(Sn.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?Kr.copy(e):Kr.set(e,t,n);const s=this.parent;this.updateWorldMatrix(!0,!1),Zs.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Sn.lookAt(Zs,Kr,this.up):Sn.lookAt(Kr,Zs,this.up),this.quaternion.setFromRotationMatrix(Sn),s&&(Sn.extractRotation(s.matrixWorld),hs.setFromRotationMatrix(Sn),this.quaternion.premultiply(hs.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.parent!==null&&e.parent.remove(e),e.parent=this,this.children.push(e),e.dispatchEvent(Rg)):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(Qu)),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){for(let e=0;e<this.children.length;e++){const t=this.children[e];t.parent=null,t.dispatchEvent(Qu)}return this.children.length=0,this}attach(e){return this.updateWorldMatrix(!0,!1),Sn.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Sn.multiply(e.parent.matrixWorld)),e.applyMatrix4(Sn),this.add(e),e.updateWorldMatrix(!1,!0),this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,s=this.children.length;n<s;n++){const o=this.children[n].getObjectByProperty(e,t);if(o!==void 0)return o}}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Zs,e,Cg),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Zs,Lg,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t){const n=this.parent;if(e===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),t===!0){const s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].updateWorldMatrix(!1,!0)}}toJSON(e){const t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.5,type:"Object",generator:"Object3D.toJSON"});const s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),JSON.stringify(this.userData)!=="{}"&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON()));function r(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&(s.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(e.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const l=a.shapes;if(Array.isArray(l))for(let c=0,u=l.length;c<u;c++){const h=l[c];r(e.shapes,h)}else r(e.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(r(e.materials,this.material[l]));s.material=a}else s.material=r(e.materials,this.material);if(this.children.length>0){s.children=[];for(let a=0;a<this.children.length;a++)s.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){s.animations=[];for(let a=0;a<this.animations.length;a++){const l=this.animations[a];s.animations.push(r(e.animations,l))}}if(t){const a=o(e.geometries),l=o(e.materials),c=o(e.textures),u=o(e.images),h=o(e.shapes),f=o(e.skeletons),m=o(e.animations),g=o(e.nodes);a.length>0&&(n.geometries=a),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),u.length>0&&(n.images=u),h.length>0&&(n.shapes=h),f.length>0&&(n.skeletons=f),m.length>0&&(n.animations=m),g.length>0&&(n.nodes=g)}return n.object=s,n;function o(a){const l=[];for(const c in a){const u=a[c];delete u.metadata,l.push(u)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){const s=e.children[n];this.add(s.clone())}return this}}tt.DefaultUp=new L(0,1,0);tt.DefaultMatrixAutoUpdate=!0;const en=new L,wn=new L,ja=new L,Tn=new L,fs=new L,ds=new L,Ju=new L,Xa=new L,qa=new L,Ya=new L;class En{constructor(e=new L,t=new L,n=new L){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,s){s.subVectors(n,t),en.subVectors(e,t),s.cross(en);const r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(e,t,n,s,r){en.subVectors(s,t),wn.subVectors(n,t),ja.subVectors(e,t);const o=en.dot(en),a=en.dot(wn),l=en.dot(ja),c=wn.dot(wn),u=wn.dot(ja),h=o*c-a*a;if(h===0)return r.set(-2,-1,-1);const f=1/h,m=(c*l-a*u)*f,g=(o*u-a*l)*f;return r.set(1-m-g,g,m)}static containsPoint(e,t,n,s){return this.getBarycoord(e,t,n,s,Tn),Tn.x>=0&&Tn.y>=0&&Tn.x+Tn.y<=1}static getUV(e,t,n,s,r,o,a,l){return this.getBarycoord(e,t,n,s,Tn),l.set(0,0),l.addScaledVector(r,Tn.x),l.addScaledVector(o,Tn.y),l.addScaledVector(a,Tn.z),l}static isFrontFacing(e,t,n,s){return en.subVectors(n,t),wn.subVectors(e,t),en.cross(wn).dot(s)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,s){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[s]),this}setFromAttributeAndIndices(e,t,n,s){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,s),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return en.subVectors(this.c,this.b),wn.subVectors(this.a,this.b),en.cross(wn).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return En.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return En.getBarycoord(e,this.a,this.b,this.c,t)}getUV(e,t,n,s,r){return En.getUV(e,this.a,this.b,this.c,t,n,s,r)}containsPoint(e){return En.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return En.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const n=this.a,s=this.b,r=this.c;let o,a;fs.subVectors(s,n),ds.subVectors(r,n),Xa.subVectors(e,n);const l=fs.dot(Xa),c=ds.dot(Xa);if(l<=0&&c<=0)return t.copy(n);qa.subVectors(e,s);const u=fs.dot(qa),h=ds.dot(qa);if(u>=0&&h<=u)return t.copy(s);const f=l*h-u*c;if(f<=0&&l>=0&&u<=0)return o=l/(l-u),t.copy(n).addScaledVector(fs,o);Ya.subVectors(e,r);const m=fs.dot(Ya),g=ds.dot(Ya);if(g>=0&&m<=g)return t.copy(r);const p=m*c-l*g;if(p<=0&&c>=0&&g<=0)return a=c/(c-g),t.copy(n).addScaledVector(ds,a);const d=u*g-m*h;if(d<=0&&h-u>=0&&m-g>=0)return Ju.subVectors(r,s),a=(h-u)/(h-u+(m-g)),t.copy(s).addScaledVector(Ju,a);const _=1/(d+p+f);return o=p*_,a=f*_,t.copy(n).addScaledVector(fs,o).addScaledVector(ds,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}let Pg=0;class tn extends ui{constructor(){super();this.isMaterial=!0,Object.defineProperty(this,"id",{value:Pg++}),this.uuid=Zt(),this.name="",this.type="Material",this.blending=Yi,this.side=qi,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.blendSrc=ou,this.blendDst=au,this.blendEquation=Ki,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.depthFunc=ga,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=og,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Ca,this.stencilZFail=Ca,this.stencilZPass=Ca,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const n=e[t];if(n===void 0){console.warn("THREE.Material: '"+t+"' parameter is undefined.");continue}if(t==="shading"){console.warn("THREE."+this.type+": .shading has been removed. Use the boolean .flatShading instead."),this.flatShading=n===fm;continue}const s=this[t];if(s===void 0){console.warn("THREE."+this.type+": '"+t+"' is not a property of this material.");continue}s&&s.isColor?s.set(n):s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const n={metadata:{version:4.5,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==Yi&&(n.blending=this.blending),this.side!==qi&&(n.side=this.side),this.vertexColors&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=this.transparent),n.depthFunc=this.depthFunc,n.depthTest=this.depthTest,n.depthWrite=this.depthWrite,n.colorWrite=this.colorWrite,n.stencilWrite=this.stencilWrite,n.stencilWriteMask=this.stencilWriteMask,n.stencilFunc=this.stencilFunc,n.stencilRef=this.stencilRef,n.stencilFuncMask=this.stencilFuncMask,n.stencilFail=this.stencilFail,n.stencilZFail=this.stencilZFail,n.stencilZPass=this.stencilZPass,this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaToCoverage===!0&&(n.alphaToCoverage=this.alphaToCoverage),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=this.premultipliedAlpha),this.wireframe===!0&&(n.wireframe=this.wireframe),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=this.flatShading),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),JSON.stringify(this.userData)!=="{}"&&(n.userData=this.userData);function s(r){const o=[];for(const a in r){const l=r[a];delete l.metadata,o.push(l)}return o}if(t){const r=s(e.textures),o=s(e.images);r.length>0&&(n.textures=r),o.length>0&&(n.images=o)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let n=null;if(t!==null){const s=t.length;n=new Array(s);for(let r=0;r!==s;++r)n[r]=t[r].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class An extends tn{constructor(e){super();this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Ce(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=_a,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const lt=new L,Zr=new Te;class Ct{constructor(e,t,n){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n===!0,this.usage=La,this.updateRange={offset:0,count:-1},this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[e+s]=t.array[n+s];return this}copyArray(e){return this.array.set(e),this}copyColorsArray(e){const t=this.array;let n=0;for(let s=0,r=e.length;s<r;s++){let o=e[s];o===void 0&&(console.warn("THREE.BufferAttribute.copyColorsArray(): color is undefined",s),o=new Ce),t[n++]=o.r,t[n++]=o.g,t[n++]=o.b}return this}copyVector2sArray(e){const t=this.array;let n=0;for(let s=0,r=e.length;s<r;s++){let o=e[s];o===void 0&&(console.warn("THREE.BufferAttribute.copyVector2sArray(): vector is undefined",s),o=new Te),t[n++]=o.x,t[n++]=o.y}return this}copyVector3sArray(e){const t=this.array;let n=0;for(let s=0,r=e.length;s<r;s++){let o=e[s];o===void 0&&(console.warn("THREE.BufferAttribute.copyVector3sArray(): vector is undefined",s),o=new L),t[n++]=o.x,t[n++]=o.y,t[n++]=o.z}return this}copyVector4sArray(e){const t=this.array;let n=0;for(let s=0,r=e.length;s<r;s++){let o=e[s];o===void 0&&(console.warn("THREE.BufferAttribute.copyVector4sArray(): vector is undefined",s),o=new Qe),t[n++]=o.x,t[n++]=o.y,t[n++]=o.z,t[n++]=o.w}return this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)Zr.fromBufferAttribute(this,t),Zr.applyMatrix3(e),this.setXY(t,Zr.x,Zr.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)lt.fromBufferAttribute(this,t),lt.applyMatrix3(e),this.setXYZ(t,lt.x,lt.y,lt.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)lt.fromBufferAttribute(this,t),lt.applyMatrix4(e),this.setXYZ(t,lt.x,lt.y,lt.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)lt.fromBufferAttribute(this,t),lt.applyNormalMatrix(e),this.setXYZ(t,lt.x,lt.y,lt.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)lt.fromBufferAttribute(this,t),lt.transformDirection(e),this.setXYZ(t,lt.x,lt.y,lt.z);return this}set(e,t=0){return this.array.set(e,t),this}getX(e){return this.array[e*this.itemSize]}setX(e,t){return this.array[e*this.itemSize]=t,this}getY(e){return this.array[e*this.itemSize+1]}setY(e,t){return this.array[e*this.itemSize+1]=t,this}getZ(e){return this.array[e*this.itemSize+2]}setZ(e,t){return this.array[e*this.itemSize+2]=t,this}getW(e){return this.array[e*this.itemSize+3]}setW(e,t){return this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,s){return e*=this.itemSize,this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=s,this}setXYZW(e,t,n,s,r){return e*=this.itemSize,this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=s,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==La&&(e.usage=this.usage),(this.updateRange.offset!==0||this.updateRange.count!==-1)&&(e.updateRange=this.updateRange),e}}class eh extends Ct{constructor(e,t,n){super(new Uint16Array(e),t,n)}}class th extends Ct{constructor(e,t,n){super(new Uint32Array(e),t,n)}}class nt extends Ct{constructor(e,t,n){super(new Float32Array(e),t,n)}}let Ig=0;const Gt=new He,Ka=new tt,ps=new L,zt=new ss,$s=new ss,ht=new L;class ft extends ui{constructor(){super();this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Ig++}),this.uuid=Zt(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Bu(e)?th:eh)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const r=new Vt().getNormalMatrix(e);n.applyNormalMatrix(r),n.needsUpdate=!0}const s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(e),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Gt.makeRotationFromQuaternion(e),this.applyMatrix4(Gt),this}rotateX(e){return Gt.makeRotationX(e),this.applyMatrix4(Gt),this}rotateY(e){return Gt.makeRotationY(e),this.applyMatrix4(Gt),this}rotateZ(e){return Gt.makeRotationZ(e),this.applyMatrix4(Gt),this}translate(e,t,n){return Gt.makeTranslation(e,t,n),this.applyMatrix4(Gt),this}scale(e,t,n){return Gt.makeScale(e,t,n),this.applyMatrix4(Gt),this}lookAt(e){return Ka.lookAt(e),Ka.updateMatrix(),this.applyMatrix4(Ka.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(ps).negate(),this.translate(ps.x,ps.y,ps.z),this}setFromPoints(e){const t=[];for(let n=0,s=e.length;n<s;n++){const r=e[n];t.push(r.x,r.y,r.z||0)}return this.setAttribute("position",new nt(t,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new ss);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingBox.set(new L(-1/0,-1/0,-1/0),new L(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,s=t.length;n<s;n++){const r=t[n];zt.setFromBufferAttribute(r),this.morphTargetsRelative?(ht.addVectors(this.boundingBox.min,zt.min),this.boundingBox.expandByPoint(ht),ht.addVectors(this.boundingBox.max,zt.max),this.boundingBox.expandByPoint(ht)):(this.boundingBox.expandByPoint(zt.min),this.boundingBox.expandByPoint(zt.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new ls);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingSphere.set(new L,1/0);return}if(e){const n=this.boundingSphere.center;if(zt.setFromBufferAttribute(e),t)for(let r=0,o=t.length;r<o;r++){const a=t[r];$s.setFromBufferAttribute(a),this.morphTargetsRelative?(ht.addVectors(zt.min,$s.min),zt.expandByPoint(ht),ht.addVectors(zt.max,$s.max),zt.expandByPoint(ht)):(zt.expandByPoint($s.min),zt.expandByPoint($s.max))}zt.getCenter(n);let s=0;for(let r=0,o=e.count;r<o;r++)ht.fromBufferAttribute(e,r),s=Math.max(s,n.distanceToSquared(ht));if(t)for(let r=0,o=t.length;r<o;r++){const a=t[r],l=this.morphTargetsRelative;for(let c=0,u=a.count;c<u;c++)ht.fromBufferAttribute(a,c),l&&(ps.fromBufferAttribute(e,c),ht.add(ps)),s=Math.max(s,n.distanceToSquared(ht))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=e.array,s=t.position.array,r=t.normal.array,o=t.uv.array,a=s.length/3;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Ct(new Float32Array(4*a),4));const l=this.getAttribute("tangent").array,c=[],u=[];for(let N=0;N<a;N++)c[N]=new L,u[N]=new L;const h=new L,f=new L,m=new L,g=new Te,p=new Te,d=new Te,_=new L,M=new L;function T(N,U,Z){h.fromArray(s,N*3),f.fromArray(s,U*3),m.fromArray(s,Z*3),g.fromArray(o,N*2),p.fromArray(o,U*2),d.fromArray(o,Z*2),f.sub(h),m.sub(h),p.sub(g),d.sub(g);const te=1/(p.x*d.y-d.x*p.y);!isFinite(te)||(_.copy(f).multiplyScalar(d.y).addScaledVector(m,-p.y).multiplyScalar(te),M.copy(m).multiplyScalar(p.x).addScaledVector(f,-d.x).multiplyScalar(te),c[N].add(_),c[U].add(_),c[Z].add(_),u[N].add(M),u[U].add(M),u[Z].add(M))}let b=this.groups;b.length===0&&(b=[{start:0,count:n.length}]);for(let N=0,U=b.length;N<U;++N){const Z=b[N],te=Z.start,O=Z.count;for(let j=te,z=te+O;j<z;j+=3)T(n[j+0],n[j+1],n[j+2])}const w=new L,R=new L,D=new L,x=new L;function C(N){D.fromArray(r,N*3),x.copy(D);const U=c[N];w.copy(U),w.sub(D.multiplyScalar(D.dot(U))).normalize(),R.crossVectors(x,U);const te=R.dot(u[N])<0?-1:1;l[N*4]=w.x,l[N*4+1]=w.y,l[N*4+2]=w.z,l[N*4+3]=te}for(let N=0,U=b.length;N<U;++N){const Z=b[N],te=Z.start,O=Z.count;for(let j=te,z=te+O;j<z;j+=3)C(n[j+0]),C(n[j+1]),C(n[j+2])}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new Ct(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let f=0,m=n.count;f<m;f++)n.setXYZ(f,0,0,0);const s=new L,r=new L,o=new L,a=new L,l=new L,c=new L,u=new L,h=new L;if(e)for(let f=0,m=e.count;f<m;f+=3){const g=e.getX(f+0),p=e.getX(f+1),d=e.getX(f+2);s.fromBufferAttribute(t,g),r.fromBufferAttribute(t,p),o.fromBufferAttribute(t,d),u.subVectors(o,r),h.subVectors(s,r),u.cross(h),a.fromBufferAttribute(n,g),l.fromBufferAttribute(n,p),c.fromBufferAttribute(n,d),a.add(u),l.add(u),c.add(u),n.setXYZ(g,a.x,a.y,a.z),n.setXYZ(p,l.x,l.y,l.z),n.setXYZ(d,c.x,c.y,c.z)}else for(let f=0,m=t.count;f<m;f+=3)s.fromBufferAttribute(t,f+0),r.fromBufferAttribute(t,f+1),o.fromBufferAttribute(t,f+2),u.subVectors(o,r),h.subVectors(s,r),u.cross(h),n.setXYZ(f+0,u.x,u.y,u.z),n.setXYZ(f+1,u.x,u.y,u.z),n.setXYZ(f+2,u.x,u.y,u.z);this.normalizeNormals(),n.needsUpdate=!0}}merge(e,t){if(!(e&&e.isBufferGeometry)){console.error("THREE.BufferGeometry.merge(): geometry not an instance of THREE.BufferGeometry.",e);return}t===void 0&&(t=0,console.warn("THREE.BufferGeometry.merge(): Overwriting original geometry, starting at offset=0. Use BufferGeometryUtils.mergeBufferGeometries() for lossless merge."));const n=this.attributes;for(const s in n){if(e.attributes[s]===void 0)continue;const o=n[s].array,a=e.attributes[s],l=a.array,c=a.itemSize*t,u=Math.min(l.length,o.length-c);for(let h=0,f=c;h<u;h++,f++)o[f]=l[h]}return this}normalizeNormals(){const e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)ht.fromBufferAttribute(e,t),ht.normalize(),e.setXYZ(t,ht.x,ht.y,ht.z)}toNonIndexed(){function e(a,l){const c=a.array,u=a.itemSize,h=a.normalized,f=new c.constructor(l.length*u);let m=0,g=0;for(let p=0,d=l.length;p<d;p++){a.isInterleavedBufferAttribute?m=l[p]*a.data.stride+a.offset:m=l[p]*u;for(let _=0;_<u;_++)f[g++]=c[m++]}return new Ct(f,u,h)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new ft,n=this.index.array,s=this.attributes;for(const a in s){const l=s[a],c=e(l,n);t.setAttribute(a,c)}const r=this.morphAttributes;for(const a in r){const l=[],c=r[a];for(let u=0,h=c.length;u<h;u++){const f=c[u],m=e(f,n);l.push(m)}t.morphAttributes[a]=l}t.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,l=o.length;a<l;a++){const c=o[a];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){const e={metadata:{version:4.5,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const n=this.attributes;for(const l in n){const c=n[l];e.data.attributes[l]=c.toJSON(e.data)}const s={};let r=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],u=[];for(let h=0,f=c.length;h<f;h++){const m=c[h];u.push(m.toJSON(e.data))}u.length>0&&(s[l]=u,r=!0)}r&&(e.data.morphAttributes=s,e.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(e.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const n=e.index;n!==null&&this.setIndex(n.clone(t));const s=e.attributes;for(const c in s){const u=s[c];this.setAttribute(c,u.clone(t))}const r=e.morphAttributes;for(const c in r){const u=[],h=r[c];for(let f=0,m=h.length;f<m;f++)u.push(h[f].clone(t));this.morphAttributes[c]=u}this.morphTargetsRelative=e.morphTargetsRelative;const o=e.groups;for(let c=0,u=o.length;c<u;c++){const h=o[c];this.addGroup(h.start,h.count,h.materialIndex)}const a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,e.parameters!==void 0&&(this.parameters=Object.assign({},e.parameters)),this}dispose(){this.dispatchEvent({type:"dispose"})}}const nh=new He,ms=new qr,Za=new ls,jn=new L,Xn=new L,qn=new L,$a=new L,Qa=new L,Ja=new L,$r=new L,Qr=new L,Jr=new L,eo=new Te,to=new Te,no=new Te,el=new L,io=new L;class ye extends tt{constructor(e=new ft,t=new An){super();this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){const a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}raycast(e,t){const n=this.geometry,s=this.material,r=this.matrixWorld;if(s===void 0||(n.boundingSphere===null&&n.computeBoundingSphere(),Za.copy(n.boundingSphere),Za.applyMatrix4(r),e.ray.intersectsSphere(Za)===!1)||(nh.copy(r).invert(),ms.copy(e.ray).applyMatrix4(nh),n.boundingBox!==null&&ms.intersectsBox(n.boundingBox)===!1))return;let o;const a=n.index,l=n.attributes.position,c=n.morphAttributes.position,u=n.morphTargetsRelative,h=n.attributes.uv,f=n.attributes.uv2,m=n.groups,g=n.drawRange;if(a!==null)if(Array.isArray(s))for(let p=0,d=m.length;p<d;p++){const _=m[p],M=s[_.materialIndex],T=Math.max(_.start,g.start),b=Math.min(a.count,Math.min(_.start+_.count,g.start+g.count));for(let w=T,R=b;w<R;w+=3){const D=a.getX(w),x=a.getX(w+1),C=a.getX(w+2);o=so(this,M,e,ms,l,c,u,h,f,D,x,C),o&&(o.faceIndex=Math.floor(w/3),o.face.materialIndex=_.materialIndex,t.push(o))}}else{const p=Math.max(0,g.start),d=Math.min(a.count,g.start+g.count);for(let _=p,M=d;_<M;_+=3){const T=a.getX(_),b=a.getX(_+1),w=a.getX(_+2);o=so(this,s,e,ms,l,c,u,h,f,T,b,w),o&&(o.faceIndex=Math.floor(_/3),t.push(o))}}else if(l!==void 0)if(Array.isArray(s))for(let p=0,d=m.length;p<d;p++){const _=m[p],M=s[_.materialIndex],T=Math.max(_.start,g.start),b=Math.min(l.count,Math.min(_.start+_.count,g.start+g.count));for(let w=T,R=b;w<R;w+=3){const D=w,x=w+1,C=w+2;o=so(this,M,e,ms,l,c,u,h,f,D,x,C),o&&(o.faceIndex=Math.floor(w/3),o.face.materialIndex=_.materialIndex,t.push(o))}}else{const p=Math.max(0,g.start),d=Math.min(l.count,g.start+g.count);for(let _=p,M=d;_<M;_+=3){const T=_,b=_+1,w=_+2;o=so(this,s,e,ms,l,c,u,h,f,T,b,w),o&&(o.faceIndex=Math.floor(_/3),t.push(o))}}}}function Dg(i,e,t,n,s,r,o,a){let l;if(e.side===Yt?l=n.intersectTriangle(o,r,s,!0,a):l=n.intersectTriangle(s,r,o,e.side!==zn,a),l===null)return null;io.copy(a),io.applyMatrix4(i.matrixWorld);const c=t.ray.origin.distanceTo(io);return c<t.near||c>t.far?null:{distance:c,point:io.clone(),object:i}}function so(i,e,t,n,s,r,o,a,l,c,u,h){jn.fromBufferAttribute(s,c),Xn.fromBufferAttribute(s,u),qn.fromBufferAttribute(s,h);const f=i.morphTargetInfluences;if(r&&f){$r.set(0,0,0),Qr.set(0,0,0),Jr.set(0,0,0);for(let g=0,p=r.length;g<p;g++){const d=f[g],_=r[g];d!==0&&($a.fromBufferAttribute(_,c),Qa.fromBufferAttribute(_,u),Ja.fromBufferAttribute(_,h),o?($r.addScaledVector($a,d),Qr.addScaledVector(Qa,d),Jr.addScaledVector(Ja,d)):($r.addScaledVector($a.sub(jn),d),Qr.addScaledVector(Qa.sub(Xn),d),Jr.addScaledVector(Ja.sub(qn),d)))}jn.add($r),Xn.add(Qr),qn.add(Jr)}i.isSkinnedMesh&&(i.boneTransform(c,jn),i.boneTransform(u,Xn),i.boneTransform(h,qn));const m=Dg(i,e,t,n,jn,Xn,qn,el);if(m){a&&(eo.fromBufferAttribute(a,c),to.fromBufferAttribute(a,u),no.fromBufferAttribute(a,h),m.uv=En.getUV(el,jn,Xn,qn,eo,to,no,new Te)),l&&(eo.fromBufferAttribute(l,c),to.fromBufferAttribute(l,u),no.fromBufferAttribute(l,h),m.uv2=En.getUV(el,jn,Xn,qn,eo,to,no,new Te));const g={a:c,b:u,c:h,normal:new L,materialIndex:0};En.getNormal(jn,Xn,qn,g.normal),m.face=g}return m}class ct extends ft{constructor(e=1,t=1,n=1,s=1,r=1,o=1){super();this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:s,heightSegments:r,depthSegments:o};const a=this;s=Math.floor(s),r=Math.floor(r),o=Math.floor(o);const l=[],c=[],u=[],h=[];let f=0,m=0;g("z","y","x",-1,-1,n,t,e,o,r,0),g("z","y","x",1,-1,n,t,-e,o,r,1),g("x","z","y",1,1,e,n,t,s,o,2),g("x","z","y",1,-1,e,n,-t,s,o,3),g("x","y","z",1,-1,e,t,n,s,r,4),g("x","y","z",-1,-1,e,t,-n,s,r,5),this.setIndex(l),this.setAttribute("position",new nt(c,3)),this.setAttribute("normal",new nt(u,3)),this.setAttribute("uv",new nt(h,2));function g(p,d,_,M,T,b,w,R,D,x,C){const N=b/D,U=w/x,Z=b/2,te=w/2,O=R/2,j=D+1,z=x+1;let G=0,W=0;const B=new L;for(let q=0;q<z;q++){const le=q*U-te;for(let ne=0;ne<j;ne++){const de=ne*N-Z;B[p]=de*M,B[d]=le*T,B[_]=O,c.push(B.x,B.y,B.z),B[p]=0,B[d]=0,B[_]=R>0?1:-1,u.push(B.x,B.y,B.z),h.push(ne/D),h.push(1-q/x),G+=1}}for(let q=0;q<x;q++)for(let le=0;le<D;le++){const ne=f+le+j*q,de=f+le+j*(q+1),Me=f+(le+1)+j*(q+1),we=f+(le+1)+j*q;l.push(ne,de,we),l.push(de,Me,we),W+=6}a.addGroup(m,W,C),m+=W,f+=G}}static fromJSON(e){return new ct(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function gs(i){const e={};for(const t in i){e[t]={};for(const n in i[t]){const s=i[t][n];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?e[t][n]=s.clone():Array.isArray(s)?e[t][n]=s.slice():e[t][n]=s}}return e}function bt(i){const e={};for(let t=0;t<i.length;t++){const n=gs(i[t]);for(const s in n)e[s]=n[s]}return e}const Fg={clone:gs,merge:bt};var Ng=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Og=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class gi extends tn{constructor(e){super();this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.vertexShader=Ng,this.fragmentShader=Og,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv2:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&(e.attributes!==void 0&&console.error("THREE.ShaderMaterial: attributes should now be defined in THREE.BufferGeometry instead."),this.setValues(e))}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=gs(e.uniforms),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const s in this.uniforms){const o=this.uniforms[s].value;o&&o.isTexture?t.uniforms[s]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?t.uniforms[s]={type:"c",value:o.getHex()}:o&&o.isVector2?t.uniforms[s]={type:"v2",value:o.toArray()}:o&&o.isVector3?t.uniforms[s]={type:"v3",value:o.toArray()}:o&&o.isVector4?t.uniforms[s]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?t.uniforms[s]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?t.uniforms[s]={type:"m4",value:o.toArray()}:t.uniforms[s]={value:o}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader;const n={};for(const s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}}class ih extends tt{constructor(){super();this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new He,this.projectionMatrix=new He,this.projectionMatrixInverse=new He}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(-t[8],-t[9],-t[10]).normalize()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}class Dt extends ih{constructor(e=50,t=1,n=.1,s=2e3){super();this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=Xs*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(js*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Xs*2*Math.atan(Math.tan(js*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}setViewOffset(e,t,n,s,r,o){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(js*.5*this.fov)/this.zoom,n=2*t,s=this.aspect*n,r=-.5*s;const o=this.view;if(this.view!==null&&this.view.enabled){const l=o.fullWidth,c=o.fullHeight;r+=o.offsetX*s/l,t-=o.offsetY*n/c,s*=o.width/l,n*=o.height/c}const a=this.filmOffset;a!==0&&(r+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,t,t-n,e,this.far),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const _s=90,xs=1;class Ug extends tt{constructor(e,t,n){super();if(this.type="CubeCamera",n.isWebGLCubeRenderTarget!==!0){console.error("THREE.CubeCamera: The constructor now expects an instance of WebGLCubeRenderTarget as third parameter.");return}this.renderTarget=n;const s=new Dt(_s,xs,e,t);s.layers=this.layers,s.up.set(0,-1,0),s.lookAt(new L(1,0,0)),this.add(s);const r=new Dt(_s,xs,e,t);r.layers=this.layers,r.up.set(0,-1,0),r.lookAt(new L(-1,0,0)),this.add(r);const o=new Dt(_s,xs,e,t);o.layers=this.layers,o.up.set(0,0,1),o.lookAt(new L(0,1,0)),this.add(o);const a=new Dt(_s,xs,e,t);a.layers=this.layers,a.up.set(0,0,-1),a.lookAt(new L(0,-1,0)),this.add(a);const l=new Dt(_s,xs,e,t);l.layers=this.layers,l.up.set(0,-1,0),l.lookAt(new L(0,0,1)),this.add(l);const c=new Dt(_s,xs,e,t);c.layers=this.layers,c.up.set(0,-1,0),c.lookAt(new L(0,0,-1)),this.add(c)}update(e,t){this.parent===null&&this.updateMatrixWorld();const n=this.renderTarget,[s,r,o,a,l,c]=this.children,u=e.getRenderTarget(),h=e.toneMapping,f=e.xr.enabled;e.toneMapping=vn,e.xr.enabled=!1;const m=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,e.setRenderTarget(n,0),e.render(t,s),e.setRenderTarget(n,1),e.render(t,r),e.setRenderTarget(n,2),e.render(t,o),e.setRenderTarget(n,3),e.render(t,a),e.setRenderTarget(n,4),e.render(t,l),n.texture.generateMipmaps=m,e.setRenderTarget(n,5),e.render(t,c),e.setRenderTarget(u),e.toneMapping=h,e.xr.enabled=f,n.texture.needsPMREMUpdate=!0}}class sh extends Mt{constructor(e,t,n,s,r,o,a,l,c,u){e=e!==void 0?e:[],t=t!==void 0?t:Zi;super(e,t,n,s,r,o,a,l,c,u);this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class zg extends fi{constructor(e,t={}){super(e,e,t);this.isWebGLCubeRenderTarget=!0;const n={width:e,height:e,depth:1},s=[n,n,n,n,n,n];this.texture=new sh(s,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.encoding),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:xt}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.encoding=t.encoding,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},s=new ct(5,5,5),r=new gi({name:"CubemapFromEquirect",uniforms:gs(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Yt,blending:Bn});r.uniforms.tEquirect.value=t;const o=new ye(s,r),a=t.minFilter;return t.minFilter===Ji&&(t.minFilter=xt),new Ug(1,10,this).update(e,o),t.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,t,n,s){const r=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(t,n,s);e.setRenderTarget(r)}}const tl=new L,Bg=new L,kg=new Vt;class _i{constructor(e=new L(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,s){return this.normal.set(e,t,n),this.constant=s,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){const s=tl.subVectors(n,t).cross(Bg.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(s,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(this.normal).multiplyScalar(-this.distanceToPoint(e)).add(e)}intersectLine(e,t){const n=e.delta(tl),s=this.normal.dot(n);if(s===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const r=-(e.start.dot(this.normal)+this.constant)/s;return r<0||r>1?null:t.copy(n).multiplyScalar(r).add(e.start)}intersectsLine(e){const t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const n=t||kg.getNormalMatrix(e),s=this.coplanarPoint(tl).applyMatrix4(e),r=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const vs=new ls,ro=new L;class nl{constructor(e=new _i,t=new _i,n=new _i,s=new _i,r=new _i,o=new _i){this.planes=[e,t,n,s,r,o]}set(e,t,n,s,r,o){const a=this.planes;return a[0].copy(e),a[1].copy(t),a[2].copy(n),a[3].copy(s),a[4].copy(r),a[5].copy(o),this}copy(e){const t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e){const t=this.planes,n=e.elements,s=n[0],r=n[1],o=n[2],a=n[3],l=n[4],c=n[5],u=n[6],h=n[7],f=n[8],m=n[9],g=n[10],p=n[11],d=n[12],_=n[13],M=n[14],T=n[15];return t[0].setComponents(a-s,h-l,p-f,T-d).normalize(),t[1].setComponents(a+s,h+l,p+f,T+d).normalize(),t[2].setComponents(a+r,h+c,p+m,T+_).normalize(),t[3].setComponents(a-r,h-c,p-m,T-_).normalize(),t[4].setComponents(a-o,h-u,p-g,T-M).normalize(),t[5].setComponents(a+o,h+u,p+g,T+M).normalize(),this}intersectsObject(e){const t=e.geometry;return t.boundingSphere===null&&t.computeBoundingSphere(),vs.copy(t.boundingSphere).applyMatrix4(e.matrixWorld),this.intersectsSphere(vs)}intersectsSprite(e){return vs.center.set(0,0,0),vs.radius=.7071067811865476,vs.applyMatrix4(e.matrixWorld),this.intersectsSphere(vs)}intersectsSphere(e){const t=this.planes,n=e.center,s=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(n)<s)return!1;return!0}intersectsBox(e){const t=this.planes;for(let n=0;n<6;n++){const s=t[n];if(ro.x=s.normal.x>0?e.max.x:e.min.x,ro.y=s.normal.y>0?e.max.y:e.min.y,ro.z=s.normal.z>0?e.max.z:e.min.z,s.distanceToPoint(ro)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function rh(){let i=null,e=!1,t=null,n=null;function s(r,o){t(r,o),n=i.requestAnimationFrame(s)}return{start:function(){e!==!0&&t!==null&&(n=i.requestAnimationFrame(s),e=!0)},stop:function(){i.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(r){t=r},setContext:function(r){i=r}}}function Hg(i,e){const t=e.isWebGL2,n=new WeakMap;function s(c,u){const h=c.array,f=c.usage,m=i.createBuffer();i.bindBuffer(u,m),i.bufferData(u,h,f),c.onUploadCallback();let g;if(h instanceof Float32Array)g=5126;else if(h instanceof Uint16Array)if(c.isFloat16BufferAttribute)if(t)g=5131;else throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");else g=5123;else if(h instanceof Int16Array)g=5122;else if(h instanceof Uint32Array)g=5125;else if(h instanceof Int32Array)g=5124;else if(h instanceof Int8Array)g=5120;else if(h instanceof Uint8Array)g=5121;else if(h instanceof Uint8ClampedArray)g=5121;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+h);return{buffer:m,type:g,bytesPerElement:h.BYTES_PER_ELEMENT,version:c.version}}function r(c,u,h){const f=u.array,m=u.updateRange;i.bindBuffer(h,c),m.count===-1?i.bufferSubData(h,0,f):(t?i.bufferSubData(h,m.offset*f.BYTES_PER_ELEMENT,f,m.offset,m.count):i.bufferSubData(h,m.offset*f.BYTES_PER_ELEMENT,f.subarray(m.offset,m.offset+m.count)),m.count=-1)}function o(c){return c.isInterleavedBufferAttribute&&(c=c.data),n.get(c)}function a(c){c.isInterleavedBufferAttribute&&(c=c.data);const u=n.get(c);u&&(i.deleteBuffer(u.buffer),n.delete(c))}function l(c,u){if(c.isGLBufferAttribute){const f=n.get(c);(!f||f.version<c.version)&&n.set(c,{buffer:c.buffer,type:c.type,bytesPerElement:c.elementSize,version:c.version});return}c.isInterleavedBufferAttribute&&(c=c.data);const h=n.get(c);h===void 0?n.set(c,s(c,u)):h.version<c.version&&(r(h.buffer,c,u),h.version=c.version)}return{get:o,remove:a,update:l}}class oo extends ft{constructor(e=1,t=1,n=1,s=1){super();this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:s};const r=e/2,o=t/2,a=Math.floor(n),l=Math.floor(s),c=a+1,u=l+1,h=e/a,f=t/l,m=[],g=[],p=[],d=[];for(let _=0;_<u;_++){const M=_*f-o;for(let T=0;T<c;T++){const b=T*h-r;g.push(b,-M,0),p.push(0,0,1),d.push(T/a),d.push(1-_/l)}}for(let _=0;_<l;_++)for(let M=0;M<a;M++){const T=M+c*_,b=M+c*(_+1),w=M+1+c*(_+1),R=M+1+c*_;m.push(T,b,R),m.push(b,w,R)}this.setIndex(m),this.setAttribute("position",new nt(g,3)),this.setAttribute("normal",new nt(p,3)),this.setAttribute("uv",new nt(d,2))}static fromJSON(e){return new oo(e.width,e.height,e.widthSegments,e.heightSegments)}}var Vg=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vUv ).g;
#endif`,Gg=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Wg=`#ifdef USE_ALPHATEST
	if ( diffuseColor.a < alphaTest ) discard;
#endif`,jg=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Xg=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vUv2 ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometry.normal, geometry.viewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,qg=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Yg="vec3 transformed = vec3( position );",Kg=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Zg=`vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 f0, const in float f90, const in float roughness ) {
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
	float D = D_GGX( alpha, dotNH );
	return F * ( V * D );
}
#ifdef USE_IRIDESCENCE
vec3 BRDF_GGX_Iridescence( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 f0, const in float f90, const in float iridescence, const in vec3 iridescenceFresnel, const in float roughness ) {
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = mix(F_Schlick( f0, f90, dotVH ), iridescenceFresnel, iridescence);
	float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
	float D = D_GGX( alpha, dotNH );
	return F * ( V * D );
}
#endif
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif`,$g=`#ifdef USE_IRIDESCENCE
const mat3 XYZ_TO_REC709 = mat3(
    3.2404542, -0.9692660,  0.0556434,
   -1.5371385,  1.8760108, -0.2040259,
   -0.4985314,  0.0415560,  1.0572252
);
vec3 Fresnel0ToIor( vec3 fresnel0 ) {
   vec3 sqrtF0 = sqrt( fresnel0 );
   return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
}
vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
   return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
}
float IorToFresnel0( float transmittedIor, float incidentIor ) {
   return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
}
vec3 evalSensitivity( float OPD, vec3 shift ) {
   float phase = 2.0 * PI * OPD * 1.0e-9;
   vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
   vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
   vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
   vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( -pow2( phase ) * var );
   xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[0] ) * exp( -4.5282e+09 * pow2( phase ) );
   xyz /= 1.0685e-7;
   vec3 srgb = XYZ_TO_REC709 * xyz;
   return srgb;
}
vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
   vec3 I;
   float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
   float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
   float cosTheta2Sq = 1.0 - sinTheta2Sq;
   if ( cosTheta2Sq < 0.0 ) {
       return vec3( 1.0 );
   }
   float cosTheta2 = sqrt( cosTheta2Sq );
   float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
   float R12 = F_Schlick( R0, 1.0, cosTheta1 );
   float R21 = R12;
   float T121 = 1.0 - R12;
   float phi12 = 0.0;
   if ( iridescenceIOR < outsideIOR ) phi12 = PI;
   float phi21 = PI - phi12;
   vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );   vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
   vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
   vec3 phi23 = vec3( 0.0 );
   if ( baseIOR[0] < iridescenceIOR ) phi23[0] = PI;
   if ( baseIOR[1] < iridescenceIOR ) phi23[1] = PI;
   if ( baseIOR[2] < iridescenceIOR ) phi23[2] = PI;
   float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
   vec3 phi = vec3( phi21 ) + phi23;
   vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
   vec3 r123 = sqrt( R123 );
   vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
   vec3 C0 = R12 + Rs;
   I = C0;
   vec3 Cm = Rs - T121;
   for ( int m = 1; m <= 2; ++m ) {
       Cm *= r123;
       vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
       I += Cm * Sm;
   }
   return max( I, vec3( 0.0 ) );
}
#endif`,Qg=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vUv );
		vec2 dSTdy = dFdy( vUv );
		float Hll = bumpScale * texture2D( bumpMap, vUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = vec3( dFdx( surf_pos.x ), dFdx( surf_pos.y ), dFdx( surf_pos.z ) );
		vec3 vSigmaY = vec3( dFdy( surf_pos.x ), dFdy( surf_pos.y ), dFdy( surf_pos.z ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,Jg=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#pragma unroll_loop_start
	for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
		plane = clippingPlanes[ i ];
		if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
	}
	#pragma unroll_loop_end
	#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
		bool clipped = true;
		#pragma unroll_loop_start
		for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
		}
		#pragma unroll_loop_end
		if ( clipped ) discard;
	#endif
#endif`,e_=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,t_=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,n_=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,i_=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,s_=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,r_=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,o_=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,a_=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 color ) { return dot( color, vec3( 0.3333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
struct GeometricContext {
	vec3 position;
	vec3 normal;
	vec3 viewDir;
#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal;
#endif
};
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
float linearToRelativeLuminance( const in vec3 color ) {
	vec3 weights = vec3( 0.2126, 0.7152, 0.0722 );
	return dot( weights, color.rgb );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}`,l_=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define r0 1.0
	#define v0 0.339
	#define m0 - 2.0
	#define r1 0.8
	#define v1 0.276
	#define m1 - 1.0
	#define r4 0.4
	#define v4 0.046
	#define m4 2.0
	#define r5 0.305
	#define v5 0.016
	#define m5 3.0
	#define r6 0.21
	#define v6 0.0038
	#define m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= r1 ) {
			mip = ( r0 - roughness ) * ( m1 - m0 ) / ( r0 - r1 ) + m0;
		} else if ( roughness >= r4 ) {
			mip = ( r1 - roughness ) * ( m4 - m1 ) / ( r1 - r4 ) + m1;
		} else if ( roughness >= r5 ) {
			mip = ( r4 - roughness ) * ( m5 - m4 ) / ( r4 - r5 ) + m4;
		} else if ( roughness >= r6 ) {
			mip = ( r5 - roughness ) * ( m6 - m5 ) / ( r5 - r6 ) + m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,c_=`vec3 transformedNormal = objectNormal;
#ifdef USE_INSTANCING
	mat3 m = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( m[ 0 ], m[ 0 ] ), dot( m[ 1 ], m[ 1 ] ), dot( m[ 2 ], m[ 2 ] ) );
	transformedNormal = m * transformedNormal;
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	vec3 transformedTangent = ( modelViewMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,u_=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,h_=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vUv ).x * displacementScale + displacementBias );
#endif`,f_=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,d_=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,p_="gl_FragColor = linearToOutputTexel( gl_FragColor );",m_=`vec4 LinearToLinear( in vec4 value ) {
	return value;
}
vec4 LinearTosRGB( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,g_=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 envColor = textureCubeUV( envMap, reflectVec, 0.0 );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,__=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,x_=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,v_=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) ||defined( PHONG )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,y_=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,M_=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,b_=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,S_=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,w_=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,T_=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		return ( coord.x < 0.7 ) ? vec3( 0.7 ) : vec3( 1.0 );
	#endif
}`,E_=`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vUv2 );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,A_=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,C_=`vec3 diffuse = vec3( 1.0 );
GeometricContext geometry;
geometry.position = mvPosition.xyz;
geometry.normal = normalize( transformedNormal );
geometry.viewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( -mvPosition.xyz );
GeometricContext backGeometry;
backGeometry.position = geometry.position;
backGeometry.normal = -geometry.normal;
backGeometry.viewDir = geometry.viewDir;
vLightFront = vec3( 0.0 );
vIndirectFront = vec3( 0.0 );
#ifdef DOUBLE_SIDED
	vLightBack = vec3( 0.0 );
	vIndirectBack = vec3( 0.0 );
#endif
IncidentLight directLight;
float dotNL;
vec3 directLightColor_Diffuse;
vIndirectFront += getAmbientLightIrradiance( ambientLightColor );
vIndirectFront += getLightProbeIrradiance( lightProbe, geometry.normal );
#ifdef DOUBLE_SIDED
	vIndirectBack += getAmbientLightIrradiance( ambientLightColor );
	vIndirectBack += getLightProbeIrradiance( lightProbe, backGeometry.normal );
#endif
#if NUM_POINT_LIGHTS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		getPointLightInfo( pointLights[ i ], geometry, directLight );
		dotNL = dot( geometry.normal, directLight.direction );
		directLightColor_Diffuse = directLight.color;
		vLightFront += saturate( dotNL ) * directLightColor_Diffuse;
		#ifdef DOUBLE_SIDED
			vLightBack += saturate( - dotNL ) * directLightColor_Diffuse;
		#endif
	}
	#pragma unroll_loop_end
#endif
#if NUM_SPOT_LIGHTS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		getSpotLightInfo( spotLights[ i ], geometry, directLight );
		dotNL = dot( geometry.normal, directLight.direction );
		directLightColor_Diffuse = directLight.color;
		vLightFront += saturate( dotNL ) * directLightColor_Diffuse;
		#ifdef DOUBLE_SIDED
			vLightBack += saturate( - dotNL ) * directLightColor_Diffuse;
		#endif
	}
	#pragma unroll_loop_end
#endif
#if NUM_DIR_LIGHTS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		getDirectionalLightInfo( directionalLights[ i ], geometry, directLight );
		dotNL = dot( geometry.normal, directLight.direction );
		directLightColor_Diffuse = directLight.color;
		vLightFront += saturate( dotNL ) * directLightColor_Diffuse;
		#ifdef DOUBLE_SIDED
			vLightBack += saturate( - dotNL ) * directLightColor_Diffuse;
		#endif
	}
	#pragma unroll_loop_end
#endif
#if NUM_HEMI_LIGHTS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
		vIndirectFront += getHemisphereLightIrradiance( hemisphereLights[ i ], geometry.normal );
		#ifdef DOUBLE_SIDED
			vIndirectBack += getHemisphereLightIrradiance( hemisphereLights[ i ], backGeometry.normal );
		#endif
	}
	#pragma unroll_loop_end
#endif`,L_=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
uniform vec3 lightProbe[ 9 ];
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	#if defined ( PHYSICALLY_CORRECT_LIGHTS )
		float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
		if ( cutoffDistance > 0.0 ) {
			distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
		}
		return distanceFalloff;
	#else
		if ( cutoffDistance > 0.0 && decayExponent > 0.0 ) {
			return pow( saturate( - lightDistance / cutoffDistance + 1.0 ), decayExponent );
		}
		return 1.0;
	#endif
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, const in GeometricContext geometry, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in GeometricContext geometry, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometry.position;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in GeometricContext geometry, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometry.position;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,R_=`#if defined( USE_ENVMAP )
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#if defined( ENVMAP_TYPE_CUBE_UV )
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#if defined( ENVMAP_TYPE_CUBE_UV )
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
#endif`,P_=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,I_=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in GeometricContext geometry, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometry.normal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in GeometricContext geometry, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon
#define Material_LightProbeLOD( material )	(0)`,D_=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,F_=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in GeometricContext geometry, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometry.normal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometry.viewDir, geometry.normal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in GeometricContext geometry, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong
#define Material_LightProbeLOD( material )	(0)`,N_=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( geometryNormal ) ), abs( dFdy( geometryNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	#ifdef SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULARINTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vUv ).a;
		#endif
		#ifdef USE_SPECULARCOLORMAP
			specularColorFactor *= texture2D( specularColorMap, vUv ).rgb;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( ior - 1.0 ) / ( ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEENCOLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEENROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vUv ).a;
	#endif
#endif`,O_=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
};
vec3 clearcoatSpecular = vec3( 0.0 );
vec3 sheenSpecular = vec3( 0.0 );
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometry.normal;
		vec3 viewDir = geometry.viewDir;
		vec3 position = geometry.position;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometry.normal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometry.clearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecular += ccIrradiance * BRDF_GGX( directLight.direction, geometry.viewDir, geometry.clearcoatNormal, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecular += irradiance * BRDF_Sheen( directLight.direction, geometry.viewDir, geometry.normal, material.sheenColor, material.sheenRoughness );
	#endif
	#ifdef USE_IRIDESCENCE
		reflectedLight.directSpecular += irradiance * BRDF_GGX_Iridescence( directLight.direction, geometry.viewDir, geometry.normal, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness );
	#else
		reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometry.viewDir, geometry.normal, material.specularColor, material.specularF90, material.roughness );
	#endif
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecular += clearcoatRadiance * EnvironmentBRDF( geometry.clearcoatNormal, geometry.viewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecular += irradiance * material.sheenColor * IBLSheenBRDF( geometry.normal, geometry.viewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometry.normal, geometry.viewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometry.normal, geometry.viewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,U_=`
GeometricContext geometry;
geometry.position = - vViewPosition;
geometry.normal = normal;
geometry.viewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
#ifdef USE_CLEARCOAT
	geometry.clearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
float dotNVi = saturate( dot( normal, geometry.viewDir ) );
if ( material.iridescenceThickness == 0.0 ) {
	material.iridescence = 0.0;
} else {
	material.iridescence = saturate( material.iridescence );
}
if ( material.iridescence > 0.0 ) {
	material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
	material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometry, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= all( bvec2( directLight.visible, receiveShadow ) ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometry, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= all( bvec2( directLight.visible, receiveShadow ) ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, geometry, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= all( bvec2( directLight.visible, receiveShadow ) ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	irradiance += getLightProbeIrradiance( lightProbe, geometry.normal );
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometry.normal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,z_=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vUv2 );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometry.normal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	radiance += getIBLRadiance( geometry.viewDir, geometry.normal, material.roughness );
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometry.viewDir, geometry.clearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,B_=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometry, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometry, material, reflectedLight );
#endif`,k_=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,H_=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,V_=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`,G_=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`,W_=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,j_=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,X_=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,q_=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	uniform mat3 uvTransform;
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Y_=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vUv );
	metalnessFactor *= texelMetalness.b;
#endif`,K_=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Z_=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,$_=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		objectNormal += morphNormal0 * morphTargetInfluences[ 0 ];
		objectNormal += morphNormal1 * morphTargetInfluences[ 1 ];
		objectNormal += morphNormal2 * morphTargetInfluences[ 2 ];
		objectNormal += morphNormal3 * morphTargetInfluences[ 3 ];
	#endif
#endif`,Q_=`#ifdef USE_MORPHTARGETS
	uniform float morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
		uniform sampler2DArray morphTargetsTexture;
		uniform ivec2 morphTargetsTextureSize;
		vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
			int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
			int y = texelIndex / morphTargetsTextureSize.x;
			int x = texelIndex - y * morphTargetsTextureSize.x;
			ivec3 morphUV = ivec3( x, y, morphTargetIndex );
			return texelFetch( morphTargetsTexture, morphUV, 0 );
		}
	#else
		#ifndef USE_MORPHNORMALS
			uniform float morphTargetInfluences[ 8 ];
		#else
			uniform float morphTargetInfluences[ 4 ];
		#endif
	#endif
#endif`,J_=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		transformed += morphTarget0 * morphTargetInfluences[ 0 ];
		transformed += morphTarget1 * morphTargetInfluences[ 1 ];
		transformed += morphTarget2 * morphTargetInfluences[ 2 ];
		transformed += morphTarget3 * morphTargetInfluences[ 3 ];
		#ifndef USE_MORPHNORMALS
			transformed += morphTarget4 * morphTargetInfluences[ 4 ];
			transformed += morphTarget5 * morphTargetInfluences[ 5 ];
			transformed += morphTarget6 * morphTargetInfluences[ 6 ];
			transformed += morphTarget7 * morphTargetInfluences[ 7 ];
		#endif
	#endif
#endif`,e0=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = vec3( dFdx( vViewPosition.x ), dFdx( vViewPosition.y ), dFdx( vViewPosition.z ) );
	vec3 fdy = vec3( dFdy( vViewPosition.x ), dFdy( vViewPosition.y ), dFdy( vViewPosition.z ) );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	#ifdef USE_TANGENT
		vec3 tangent = normalize( vTangent );
		vec3 bitangent = normalize( vBitangent );
		#ifdef DOUBLE_SIDED
			tangent = tangent * faceDirection;
			bitangent = bitangent * faceDirection;
		#endif
		#if defined( TANGENTSPACE_NORMALMAP ) || defined( USE_CLEARCOAT_NORMALMAP )
			mat3 vTBN = mat3( tangent, bitangent, normal );
		#endif
	#endif
#endif
vec3 geometryNormal = normal;`,t0=`#ifdef OBJECTSPACE_NORMALMAP
	normal = texture2D( normalMap, vUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( TANGENTSPACE_NORMALMAP )
	vec3 mapN = texture2D( normalMap, vUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	#ifdef USE_TANGENT
		normal = normalize( vTBN * mapN );
	#else
		normal = perturbNormal2Arb( - vViewPosition, normal, mapN, faceDirection );
	#endif
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,n0=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,i0=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,s0=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,r0=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef OBJECTSPACE_NORMALMAP
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( TANGENTSPACE_NORMALMAP ) || defined ( USE_CLEARCOAT_NORMALMAP ) )
	vec3 perturbNormal2Arb( vec3 eye_pos, vec3 surf_norm, vec3 mapN, float faceDirection ) {
		vec3 q0 = vec3( dFdx( eye_pos.x ), dFdx( eye_pos.y ), dFdx( eye_pos.z ) );
		vec3 q1 = vec3( dFdy( eye_pos.x ), dFdy( eye_pos.y ), dFdy( eye_pos.z ) );
		vec2 st0 = dFdx( vUv.st );
		vec2 st1 = dFdy( vUv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : faceDirection * inversesqrt( det );
		return normalize( T * ( mapN.x * scale ) + B * ( mapN.y * scale ) + N * mapN.z );
	}
#endif`,o0=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = geometryNormal;
#endif`,a0=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	#ifdef USE_TANGENT
		clearcoatNormal = normalize( vTBN * clearcoatMapN );
	#else
		clearcoatNormal = perturbNormal2Arb( - vViewPosition, clearcoatNormal, clearcoatMapN, faceDirection );
	#endif
#endif`,l0=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif`,c0=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,u0=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= transmissionAlpha + 0.1;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,h0=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;
const vec3 PackFactors = vec3( 256. * 256. * 256., 256. * 256., 256. );
const vec4 UnpackFactors = UnpackDownscale / vec4( PackFactors, 1. );
const float ShiftRight8 = 1. / 256.;
vec4 packDepthToRGBA( const in float v ) {
	vec4 r = vec4( fract( v * PackFactors ), v );
	r.yzw -= r.xyz * ShiftRight8;	return r * PackUpscale;
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors );
}
vec4 pack2HalfToRGBA( vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float linearClipZ, const in float near, const in float far ) {
	return linearClipZ * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float invClipZ, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * invClipZ - far );
}`,f0=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,d0=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,p0=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,m0=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,g0=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vUv );
	roughnessFactor *= texelRoughness.g;
#endif`,_0=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,x0=`#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		varying vec4 vSpotShadowCoord[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bvec4 inFrustumVec = bvec4 ( shadowCoord.x >= 0.0, shadowCoord.x <= 1.0, shadowCoord.y >= 0.0, shadowCoord.y <= 1.0 );
		bool inFrustum = all( inFrustumVec );
		bvec2 frustumTestVec = bvec2( inFrustum, shadowCoord.z <= 1.0 );
		bool frustumTest = all( frustumTestVec );
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ), 
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ), 
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ), 
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ), 
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ), 
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ), 
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return shadow;
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
		vec3 lightToPosition = shadowCoord.xyz;
		float dp = ( length( lightToPosition ) - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );		dp += shadowBias;
		vec3 bd3D = normalize( lightToPosition );
		#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
			vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
			return (
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
			) * ( 1.0 / 9.0 );
		#else
			return texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
		#endif
	}
#endif`,v0=`#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform mat4 spotShadowMatrix[ NUM_SPOT_LIGHT_SHADOWS ];
		varying vec4 vSpotShadowCoord[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,y0=`#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SPOT_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0
		vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		vec4 shadowWorldPosition;
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
		vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias, 0 );
		vSpotShadowCoord[ i ] = spotShadowMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
		vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
	#endif
#endif`,M0=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowBias, spotLight.shadowRadius, vSpotShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,b0=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,S0=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	uniform int boneTextureSize;
	mat4 getBoneMatrix( const in float i ) {
		float j = i * 4.0;
		float x = mod( j, float( boneTextureSize ) );
		float y = floor( j / float( boneTextureSize ) );
		float dx = 1.0 / float( boneTextureSize );
		float dy = 1.0 / float( boneTextureSize );
		y = dy * ( y + 0.5 );
		vec4 v1 = texture2D( boneTexture, vec2( dx * ( x + 0.5 ), y ) );
		vec4 v2 = texture2D( boneTexture, vec2( dx * ( x + 1.5 ), y ) );
		vec4 v3 = texture2D( boneTexture, vec2( dx * ( x + 2.5 ), y ) );
		vec4 v4 = texture2D( boneTexture, vec2( dx * ( x + 3.5 ), y ) );
		mat4 bone = mat4( v1, v2, v3, v4 );
		return bone;
	}
#endif`,w0=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,T0=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,E0=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,A0=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,C0=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,L0=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return toneMappingExposure * color;
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 OptimizedCineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,R0=`#ifdef USE_TRANSMISSION
	float transmissionAlpha = 1.0;
	float transmissionFactor = transmission;
	float thicknessFactor = thickness;
	#ifdef USE_TRANSMISSIONMAP
		transmissionFactor *= texture2D( transmissionMap, vUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		thicknessFactor *= texture2D( thicknessMap, vUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmission = getIBLVolumeRefraction(
		n, v, roughnessFactor, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, ior, thicknessFactor,
		attenuationColor, attenuationDistance );
	totalDiffuse = mix( totalDiffuse, transmission.rgb, transmissionFactor );
	transmissionAlpha = mix( transmissionAlpha, transmission.a, transmissionFactor );
#endif`,P0=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float framebufferLod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		#ifdef texture2DLodEXT
			return texture2DLodEXT( transmissionSamplerMap, fragCoord.xy, framebufferLod );
		#else
			return texture2D( transmissionSamplerMap, fragCoord.xy, framebufferLod );
		#endif
	}
	vec3 applyVolumeAttenuation( const in vec3 radiance, const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( attenuationDistance == 0.0 ) {
			return radiance;
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance * radiance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
		vec3 refractedRayExit = position + transmissionRay;
		vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
		vec2 refractionCoords = ndcPos.xy / ndcPos.w;
		refractionCoords += 1.0;
		refractionCoords /= 2.0;
		vec4 transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
		vec3 attenuatedColor = applyVolumeAttenuation( transmittedLight.rgb, length( transmissionRay ), attenuationColor, attenuationDistance );
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		return vec4( ( 1.0 - F ) * attenuatedColor * diffuseColor, transmittedLight.a );
	}
#endif`,I0=`#if ( defined( USE_UV ) && ! defined( UVS_VERTEX_ONLY ) )
	varying vec2 vUv;
#endif`,D0=`#ifdef USE_UV
	#ifdef UVS_VERTEX_ONLY
		vec2 vUv;
	#else
		varying vec2 vUv;
	#endif
	uniform mat3 uvTransform;
#endif`,F0=`#ifdef USE_UV
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
#endif`,N0=`#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )
	varying vec2 vUv2;
#endif`,O0=`#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )
	attribute vec2 uv2;
	varying vec2 vUv2;
	uniform mat3 uv2Transform;
#endif`,U0=`#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )
	vUv2 = ( uv2Transform * vec3( uv2, 1 ) ).xy;
#endif`,z0=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION )
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const B0=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,k0=`uniform sampler2D t2D;
varying vec2 vUv;
void main() {
	gl_FragColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		gl_FragColor = vec4( mix( pow( gl_FragColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), gl_FragColor.rgb * 0.0773993808, vec3( lessThanEqual( gl_FragColor.rgb, vec3( 0.04045 ) ) ) ), gl_FragColor.w );
	#endif
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,H0=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,V0=`#include <envmap_common_pars_fragment>
uniform float opacity;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	vec3 vReflect = vWorldDirection;
	#include <envmap_fragment>
	gl_FragColor = envColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,G0=`#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <skinbase_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,W0=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#endif
}`,j0=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <skinbase_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,X0=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,q0=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Y0=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,K0=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Z0=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,$0=`#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <uv2_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,Q0=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vUv2 );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,J0=`#define LAMBERT
varying vec3 vLightFront;
varying vec3 vIndirectFront;
#ifdef DOUBLE_SIDED
	varying vec3 vLightBack;
	varying vec3 vIndirectBack;
#endif
#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
#include <envmap_pars_vertex>
#include <bsdfs>
#include <lights_pars_begin>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <uv2_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <lights_lambert_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,ex=`uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
varying vec3 vLightFront;
varying vec3 vIndirectFront;
#ifdef DOUBLE_SIDED
	varying vec3 vLightBack;
	varying vec3 vIndirectBack;
#endif
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <fog_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <specularmap_fragment>
	#include <emissivemap_fragment>
	#ifdef DOUBLE_SIDED
		reflectedLight.indirectDiffuse += ( gl_FrontFacing ) ? vIndirectFront : vIndirectBack;
	#else
		reflectedLight.indirectDiffuse += vIndirectFront;
	#endif
	#include <lightmap_fragment>
	reflectedLight.indirectDiffuse *= BRDF_Lambert( diffuseColor.rgb );
	#ifdef DOUBLE_SIDED
		reflectedLight.directDiffuse = ( gl_FrontFacing ) ? vLightFront : vLightBack;
	#else
		reflectedLight.directDiffuse = vLightFront;
	#endif
	reflectedLight.directDiffuse *= BRDF_Lambert( diffuseColor.rgb ) * getShadowMask();
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,tx=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,nx=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,ix=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( TANGENTSPACE_NORMALMAP )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( TANGENTSPACE_NORMALMAP )
	vViewPosition = - mvPosition.xyz;
#endif
}`,sx=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( TANGENTSPACE_NORMALMAP )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), opacity );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,rx=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <uv2_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,ox=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,ax=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <uv2_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,lx=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULARINTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
	#ifdef USE_SPECULARCOLORMAP
		uniform sampler2D specularColorMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEENCOLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEENROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <bsdfs>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecular;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometry.clearcoatNormal, geometry.viewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + clearcoatSpecular * material.clearcoat;
	#endif
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,cx=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <uv2_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,ux=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,hx=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,fx=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,dx=`#include <common>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,px=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
}`,mx=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix * vec4( 0.0, 0.0, 0.0, 1.0 );
	vec2 scale;
	scale.x = length( vec3( modelMatrix[ 0 ].x, modelMatrix[ 0 ].y, modelMatrix[ 0 ].z ) );
	scale.y = length( vec3( modelMatrix[ 1 ].x, modelMatrix[ 1 ].y, modelMatrix[ 1 ].z ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,gx=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
}`,Ue={alphamap_fragment:Vg,alphamap_pars_fragment:Gg,alphatest_fragment:Wg,alphatest_pars_fragment:jg,aomap_fragment:Xg,aomap_pars_fragment:qg,begin_vertex:Yg,beginnormal_vertex:Kg,bsdfs:Zg,iridescence_fragment:$g,bumpmap_pars_fragment:Qg,clipping_planes_fragment:Jg,clipping_planes_pars_fragment:e_,clipping_planes_pars_vertex:t_,clipping_planes_vertex:n_,color_fragment:i_,color_pars_fragment:s_,color_pars_vertex:r_,color_vertex:o_,common:a_,cube_uv_reflection_fragment:l_,defaultnormal_vertex:c_,displacementmap_pars_vertex:u_,displacementmap_vertex:h_,emissivemap_fragment:f_,emissivemap_pars_fragment:d_,encodings_fragment:p_,encodings_pars_fragment:m_,envmap_fragment:g_,envmap_common_pars_fragment:__,envmap_pars_fragment:x_,envmap_pars_vertex:v_,envmap_physical_pars_fragment:R_,envmap_vertex:y_,fog_vertex:M_,fog_pars_vertex:b_,fog_fragment:S_,fog_pars_fragment:w_,gradientmap_pars_fragment:T_,lightmap_fragment:E_,lightmap_pars_fragment:A_,lights_lambert_vertex:C_,lights_pars_begin:L_,lights_toon_fragment:P_,lights_toon_pars_fragment:I_,lights_phong_fragment:D_,lights_phong_pars_fragment:F_,lights_physical_fragment:N_,lights_physical_pars_fragment:O_,lights_fragment_begin:U_,lights_fragment_maps:z_,lights_fragment_end:B_,logdepthbuf_fragment:k_,logdepthbuf_pars_fragment:H_,logdepthbuf_pars_vertex:V_,logdepthbuf_vertex:G_,map_fragment:W_,map_pars_fragment:j_,map_particle_fragment:X_,map_particle_pars_fragment:q_,metalnessmap_fragment:Y_,metalnessmap_pars_fragment:K_,morphcolor_vertex:Z_,morphnormal_vertex:$_,morphtarget_pars_vertex:Q_,morphtarget_vertex:J_,normal_fragment_begin:e0,normal_fragment_maps:t0,normal_pars_fragment:n0,normal_pars_vertex:i0,normal_vertex:s0,normalmap_pars_fragment:r0,clearcoat_normal_fragment_begin:o0,clearcoat_normal_fragment_maps:a0,clearcoat_pars_fragment:l0,iridescence_pars_fragment:c0,output_fragment:u0,packing:h0,premultiplied_alpha_fragment:f0,project_vertex:d0,dithering_fragment:p0,dithering_pars_fragment:m0,roughnessmap_fragment:g0,roughnessmap_pars_fragment:_0,shadowmap_pars_fragment:x0,shadowmap_pars_vertex:v0,shadowmap_vertex:y0,shadowmask_pars_fragment:M0,skinbase_vertex:b0,skinning_pars_vertex:S0,skinning_vertex:w0,skinnormal_vertex:T0,specularmap_fragment:E0,specularmap_pars_fragment:A0,tonemapping_fragment:C0,tonemapping_pars_fragment:L0,transmission_fragment:R0,transmission_pars_fragment:P0,uv_pars_fragment:I0,uv_pars_vertex:D0,uv_vertex:F0,uv2_pars_fragment:N0,uv2_pars_vertex:O0,uv2_vertex:U0,worldpos_vertex:z0,background_vert:B0,background_frag:k0,cube_vert:H0,cube_frag:V0,depth_vert:G0,depth_frag:W0,distanceRGBA_vert:j0,distanceRGBA_frag:X0,equirect_vert:q0,equirect_frag:Y0,linedashed_vert:K0,linedashed_frag:Z0,meshbasic_vert:$0,meshbasic_frag:Q0,meshlambert_vert:J0,meshlambert_frag:ex,meshmatcap_vert:tx,meshmatcap_frag:nx,meshnormal_vert:ix,meshnormal_frag:sx,meshphong_vert:rx,meshphong_frag:ox,meshphysical_vert:ax,meshphysical_frag:lx,meshtoon_vert:cx,meshtoon_frag:ux,points_vert:hx,points_frag:fx,shadow_vert:dx,shadow_frag:px,sprite_vert:mx,sprite_frag:gx},xe={common:{diffuse:{value:new Ce(16777215)},opacity:{value:1},map:{value:null},uvTransform:{value:new Vt},uv2Transform:{value:new Vt},alphaMap:{value:null},alphaTest:{value:0}},specularmap:{specularMap:{value:null}},envmap:{envMap:{value:null},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1}},emissivemap:{emissiveMap:{value:null}},bumpmap:{bumpMap:{value:null},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalScale:{value:new Te(1,1)}},displacementmap:{displacementMap:{value:null},displacementScale:{value:1},displacementBias:{value:0}},roughnessmap:{roughnessMap:{value:null}},metalnessmap:{metalnessMap:{value:null}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Ce(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotShadowMap:{value:[]},spotShadowMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Ce(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaTest:{value:0},uvTransform:{value:new Vt}},sprite:{diffuse:{value:new Ce(16777215)},opacity:{value:1},center:{value:new Te(.5,.5)},rotation:{value:0},map:{value:null},alphaMap:{value:null},alphaTest:{value:0},uvTransform:{value:new Vt}}},fn={basic:{uniforms:bt([xe.common,xe.specularmap,xe.envmap,xe.aomap,xe.lightmap,xe.fog]),vertexShader:Ue.meshbasic_vert,fragmentShader:Ue.meshbasic_frag},lambert:{uniforms:bt([xe.common,xe.specularmap,xe.envmap,xe.aomap,xe.lightmap,xe.emissivemap,xe.fog,xe.lights,{emissive:{value:new Ce(0)}}]),vertexShader:Ue.meshlambert_vert,fragmentShader:Ue.meshlambert_frag},phong:{uniforms:bt([xe.common,xe.specularmap,xe.envmap,xe.aomap,xe.lightmap,xe.emissivemap,xe.bumpmap,xe.normalmap,xe.displacementmap,xe.fog,xe.lights,{emissive:{value:new Ce(0)},specular:{value:new Ce(1118481)},shininess:{value:30}}]),vertexShader:Ue.meshphong_vert,fragmentShader:Ue.meshphong_frag},standard:{uniforms:bt([xe.common,xe.envmap,xe.aomap,xe.lightmap,xe.emissivemap,xe.bumpmap,xe.normalmap,xe.displacementmap,xe.roughnessmap,xe.metalnessmap,xe.fog,xe.lights,{emissive:{value:new Ce(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Ue.meshphysical_vert,fragmentShader:Ue.meshphysical_frag},toon:{uniforms:bt([xe.common,xe.aomap,xe.lightmap,xe.emissivemap,xe.bumpmap,xe.normalmap,xe.displacementmap,xe.gradientmap,xe.fog,xe.lights,{emissive:{value:new Ce(0)}}]),vertexShader:Ue.meshtoon_vert,fragmentShader:Ue.meshtoon_frag},matcap:{uniforms:bt([xe.common,xe.bumpmap,xe.normalmap,xe.displacementmap,xe.fog,{matcap:{value:null}}]),vertexShader:Ue.meshmatcap_vert,fragmentShader:Ue.meshmatcap_frag},points:{uniforms:bt([xe.points,xe.fog]),vertexShader:Ue.points_vert,fragmentShader:Ue.points_frag},dashed:{uniforms:bt([xe.common,xe.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Ue.linedashed_vert,fragmentShader:Ue.linedashed_frag},depth:{uniforms:bt([xe.common,xe.displacementmap]),vertexShader:Ue.depth_vert,fragmentShader:Ue.depth_frag},normal:{uniforms:bt([xe.common,xe.bumpmap,xe.normalmap,xe.displacementmap,{opacity:{value:1}}]),vertexShader:Ue.meshnormal_vert,fragmentShader:Ue.meshnormal_frag},sprite:{uniforms:bt([xe.sprite,xe.fog]),vertexShader:Ue.sprite_vert,fragmentShader:Ue.sprite_frag},background:{uniforms:{uvTransform:{value:new Vt},t2D:{value:null}},vertexShader:Ue.background_vert,fragmentShader:Ue.background_frag},cube:{uniforms:bt([xe.envmap,{opacity:{value:1}}]),vertexShader:Ue.cube_vert,fragmentShader:Ue.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Ue.equirect_vert,fragmentShader:Ue.equirect_frag},distanceRGBA:{uniforms:bt([xe.common,xe.displacementmap,{referencePosition:{value:new L},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Ue.distanceRGBA_vert,fragmentShader:Ue.distanceRGBA_frag},shadow:{uniforms:bt([xe.lights,xe.fog,{color:{value:new Ce(0)},opacity:{value:1}}]),vertexShader:Ue.shadow_vert,fragmentShader:Ue.shadow_frag}};fn.physical={uniforms:bt([fn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatNormalScale:{value:new Te(1,1)},clearcoatNormalMap:{value:null},iridescence:{value:0},iridescenceMap:{value:null},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},sheen:{value:0},sheenColor:{value:new Ce(0)},sheenColorMap:{value:null},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},transmission:{value:0},transmissionMap:{value:null},transmissionSamplerSize:{value:new Te},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},attenuationDistance:{value:0},attenuationColor:{value:new Ce(0)},specularIntensity:{value:1},specularIntensityMap:{value:null},specularColor:{value:new Ce(1,1,1)},specularColorMap:{value:null}}]),vertexShader:Ue.meshphysical_vert,fragmentShader:Ue.meshphysical_frag};function _x(i,e,t,n,s,r){const o=new Ce(0);let a=s===!0?0:1,l,c,u=null,h=0,f=null;function m(p,d){let _=!1,M=d.isScene===!0?d.background:null;M&&M.isTexture&&(M=e.get(M));const T=i.xr,b=T.getSession&&T.getSession();b&&b.environmentBlendMode==="additive"&&(M=null),M===null?g(o,a):M&&M.isColor&&(g(M,1),_=!0),(i.autoClear||_)&&i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil),M&&(M.isCubeTexture||M.mapping===Or)?(c===void 0&&(c=new ye(new ct(1,1,1),new gi({name:"BackgroundCubeMaterial",uniforms:gs(fn.cube.uniforms),vertexShader:fn.cube.vertexShader,fragmentShader:fn.cube.fragmentShader,side:Yt,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),c.geometry.deleteAttribute("uv"),c.onBeforeRender=function(w,R,D){this.matrixWorld.copyPosition(D.matrixWorld)},Object.defineProperty(c.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),n.update(c)),c.material.uniforms.envMap.value=M,c.material.uniforms.flipEnvMap.value=M.isCubeTexture&&M.isRenderTargetTexture===!1?-1:1,(u!==M||h!==M.version||f!==i.toneMapping)&&(c.material.needsUpdate=!0,u=M,h=M.version,f=i.toneMapping),c.layers.enableAll(),p.unshift(c,c.geometry,c.material,0,0,null)):M&&M.isTexture&&(l===void 0&&(l=new ye(new oo(2,2),new gi({name:"BackgroundMaterial",uniforms:gs(fn.background.uniforms),vertexShader:fn.background.vertexShader,fragmentShader:fn.background.fragmentShader,side:qi,depthTest:!1,depthWrite:!1,fog:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),n.update(l)),l.material.uniforms.t2D.value=M,M.matrixAutoUpdate===!0&&M.updateMatrix(),l.material.uniforms.uvTransform.value.copy(M.matrix),(u!==M||h!==M.version||f!==i.toneMapping)&&(l.material.needsUpdate=!0,u=M,h=M.version,f=i.toneMapping),l.layers.enableAll(),p.unshift(l,l.geometry,l.material,0,0,null))}function g(p,d){t.buffers.color.setClear(p.r,p.g,p.b,d,r)}return{getClearColor:function(){return o},setClearColor:function(p,d=1){o.set(p),a=d,g(o,a)},getClearAlpha:function(){return a},setClearAlpha:function(p){a=p,g(o,a)},render:m}}function xx(i,e,t,n){const s=i.getParameter(34921),r=n.isWebGL2?null:e.get("OES_vertex_array_object"),o=n.isWebGL2||r!==null,a={},l=d(null);let c=l,u=!1;function h(O,j,z,G,W){let B=!1;if(o){const q=p(G,z,j);c!==q&&(c=q,m(c.object)),B=_(O,G,z,W),B&&M(O,G,z,W)}else{const q=j.wireframe===!0;(c.geometry!==G.id||c.program!==z.id||c.wireframe!==q)&&(c.geometry=G.id,c.program=z.id,c.wireframe=q,B=!0)}W!==null&&t.update(W,34963),(B||u)&&(u=!1,x(O,j,z,G),W!==null&&i.bindBuffer(34963,t.get(W).buffer))}function f(){return n.isWebGL2?i.createVertexArray():r.createVertexArrayOES()}function m(O){return n.isWebGL2?i.bindVertexArray(O):r.bindVertexArrayOES(O)}function g(O){return n.isWebGL2?i.deleteVertexArray(O):r.deleteVertexArrayOES(O)}function p(O,j,z){const G=z.wireframe===!0;let W=a[O.id];W===void 0&&(W={},a[O.id]=W);let B=W[j.id];B===void 0&&(B={},W[j.id]=B);let q=B[G];return q===void 0&&(q=d(f()),B[G]=q),q}function d(O){const j=[],z=[],G=[];for(let W=0;W<s;W++)j[W]=0,z[W]=0,G[W]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:j,enabledAttributes:z,attributeDivisors:G,object:O,attributes:{},index:null}}function _(O,j,z,G){const W=c.attributes,B=j.attributes;let q=0;const le=z.getAttributes();for(const ne in le)if(le[ne].location>=0){const Me=W[ne];let we=B[ne];if(we===void 0&&(ne==="instanceMatrix"&&O.instanceMatrix&&(we=O.instanceMatrix),ne==="instanceColor"&&O.instanceColor&&(we=O.instanceColor)),Me===void 0||Me.attribute!==we||we&&Me.data!==we.data)return!0;q++}return c.attributesNum!==q||c.index!==G}function M(O,j,z,G){const W={},B=j.attributes;let q=0;const le=z.getAttributes();for(const ne in le)if(le[ne].location>=0){let Me=B[ne];Me===void 0&&(ne==="instanceMatrix"&&O.instanceMatrix&&(Me=O.instanceMatrix),ne==="instanceColor"&&O.instanceColor&&(Me=O.instanceColor));const we={};we.attribute=Me,Me&&Me.data&&(we.data=Me.data),W[ne]=we,q++}c.attributes=W,c.attributesNum=q,c.index=G}function T(){const O=c.newAttributes;for(let j=0,z=O.length;j<z;j++)O[j]=0}function b(O){w(O,0)}function w(O,j){const z=c.newAttributes,G=c.enabledAttributes,W=c.attributeDivisors;z[O]=1,G[O]===0&&(i.enableVertexAttribArray(O),G[O]=1),W[O]!==j&&((n.isWebGL2?i:e.get("ANGLE_instanced_arrays"))[n.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](O,j),W[O]=j)}function R(){const O=c.newAttributes,j=c.enabledAttributes;for(let z=0,G=j.length;z<G;z++)j[z]!==O[z]&&(i.disableVertexAttribArray(z),j[z]=0)}function D(O,j,z,G,W,B){n.isWebGL2===!0&&(z===5124||z===5125)?i.vertexAttribIPointer(O,j,z,W,B):i.vertexAttribPointer(O,j,z,G,W,B)}function x(O,j,z,G){if(n.isWebGL2===!1&&(O.isInstancedMesh||G.isInstancedBufferGeometry)&&e.get("ANGLE_instanced_arrays")===null)return;T();const W=G.attributes,B=z.getAttributes(),q=j.defaultAttributeValues;for(const le in B){const ne=B[le];if(ne.location>=0){let de=W[le];if(de===void 0&&(le==="instanceMatrix"&&O.instanceMatrix&&(de=O.instanceMatrix),le==="instanceColor"&&O.instanceColor&&(de=O.instanceColor)),de!==void 0){const Me=de.normalized,we=de.itemSize,Q=t.get(de);if(Q===void 0)continue;const je=Q.buffer,Re=Q.type,Ee=Q.bytesPerElement;if(de.isInterleavedBufferAttribute){const _e=de.data,Be=_e.stride,Pe=de.offset;if(_e.isInstancedInterleavedBuffer){for(let A=0;A<ne.locationSize;A++)w(ne.location+A,_e.meshPerAttribute);O.isInstancedMesh!==!0&&G._maxInstanceCount===void 0&&(G._maxInstanceCount=_e.meshPerAttribute*_e.count)}else for(let A=0;A<ne.locationSize;A++)b(ne.location+A);i.bindBuffer(34962,je);for(let A=0;A<ne.locationSize;A++)D(ne.location+A,we/ne.locationSize,Re,Me,Be*Ee,(Pe+we/ne.locationSize*A)*Ee)}else{if(de.isInstancedBufferAttribute){for(let _e=0;_e<ne.locationSize;_e++)w(ne.location+_e,de.meshPerAttribute);O.isInstancedMesh!==!0&&G._maxInstanceCount===void 0&&(G._maxInstanceCount=de.meshPerAttribute*de.count)}else for(let _e=0;_e<ne.locationSize;_e++)b(ne.location+_e);i.bindBuffer(34962,je);for(let _e=0;_e<ne.locationSize;_e++)D(ne.location+_e,we/ne.locationSize,Re,Me,we*Ee,we/ne.locationSize*_e*Ee)}}else if(q!==void 0){const Me=q[le];if(Me!==void 0)switch(Me.length){case 2:i.vertexAttrib2fv(ne.location,Me);break;case 3:i.vertexAttrib3fv(ne.location,Me);break;case 4:i.vertexAttrib4fv(ne.location,Me);break;default:i.vertexAttrib1fv(ne.location,Me)}}}}R()}function C(){Z();for(const O in a){const j=a[O];for(const z in j){const G=j[z];for(const W in G)g(G[W].object),delete G[W];delete j[z]}delete a[O]}}function N(O){if(a[O.id]===void 0)return;const j=a[O.id];for(const z in j){const G=j[z];for(const W in G)g(G[W].object),delete G[W];delete j[z]}delete a[O.id]}function U(O){for(const j in a){const z=a[j];if(z[O.id]===void 0)continue;const G=z[O.id];for(const W in G)g(G[W].object),delete G[W];delete z[O.id]}}function Z(){te(),u=!0,c!==l&&(c=l,m(c.object))}function te(){l.geometry=null,l.program=null,l.wireframe=!1}return{setup:h,reset:Z,resetDefaultState:te,dispose:C,releaseStatesOfGeometry:N,releaseStatesOfProgram:U,initAttributes:T,enableAttribute:b,disableUnusedAttributes:R}}function vx(i,e,t,n){const s=n.isWebGL2;let r;function o(c){r=c}function a(c,u){i.drawArrays(r,c,u),t.update(u,r,1)}function l(c,u,h){if(h===0)return;let f,m;if(s)f=i,m="drawArraysInstanced";else if(f=e.get("ANGLE_instanced_arrays"),m="drawArraysInstancedANGLE",f===null){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}f[m](r,c,u,h),t.update(u,r,h)}this.setMode=o,this.render=a,this.renderInstances=l}function yx(i,e,t){let n;function s(){if(n!==void 0)return n;if(e.has("EXT_texture_filter_anisotropic")===!0){const D=e.get("EXT_texture_filter_anisotropic");n=i.getParameter(D.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else n=0;return n}function r(D){if(D==="highp"){if(i.getShaderPrecisionFormat(35633,36338).precision>0&&i.getShaderPrecisionFormat(35632,36338).precision>0)return"highp";D="mediump"}return D==="mediump"&&i.getShaderPrecisionFormat(35633,36337).precision>0&&i.getShaderPrecisionFormat(35632,36337).precision>0?"mediump":"lowp"}const o=typeof WebGL2RenderingContext!="undefined"&&i instanceof WebGL2RenderingContext||typeof WebGL2ComputeRenderingContext!="undefined"&&i instanceof WebGL2ComputeRenderingContext;let a=t.precision!==void 0?t.precision:"highp";const l=r(a);l!==a&&(console.warn("THREE.WebGLRenderer:",a,"not supported, using",l,"instead."),a=l);const c=o||e.has("WEBGL_draw_buffers"),u=t.logarithmicDepthBuffer===!0,h=i.getParameter(34930),f=i.getParameter(35660),m=i.getParameter(3379),g=i.getParameter(34076),p=i.getParameter(34921),d=i.getParameter(36347),_=i.getParameter(36348),M=i.getParameter(36349),T=f>0,b=o||e.has("OES_texture_float"),w=T&&b,R=o?i.getParameter(36183):0;return{isWebGL2:o,drawBuffers:c,getMaxAnisotropy:s,getMaxPrecision:r,precision:a,logarithmicDepthBuffer:u,maxTextures:h,maxVertexTextures:f,maxTextureSize:m,maxCubemapSize:g,maxAttributes:p,maxVertexUniforms:d,maxVaryings:_,maxFragmentUniforms:M,vertexTextures:T,floatFragmentTextures:b,floatVertexTextures:w,maxSamples:R}}function Mx(i){const e=this;let t=null,n=0,s=!1,r=!1;const o=new _i,a=new Vt,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(h,f,m){const g=h.length!==0||f||n!==0||s;return s=f,t=u(h,m,0),n=h.length,g},this.beginShadows=function(){r=!0,u(null)},this.endShadows=function(){r=!1,c()},this.setState=function(h,f,m){const g=h.clippingPlanes,p=h.clipIntersection,d=h.clipShadows,_=i.get(h);if(!s||g===null||g.length===0||r&&!d)r?u(null):c();else{const M=r?0:n,T=M*4;let b=_.clippingState||null;l.value=b,b=u(g,f,T,m);for(let w=0;w!==T;++w)b[w]=t[w];_.clippingState=b,this.numIntersection=p?this.numPlanes:0,this.numPlanes+=M}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function u(h,f,m,g){const p=h!==null?h.length:0;let d=null;if(p!==0){if(d=l.value,g!==!0||d===null){const _=m+p*4,M=f.matrixWorldInverse;a.getNormalMatrix(M),(d===null||d.length<_)&&(d=new Float32Array(_));for(let T=0,b=m;T!==p;++T,b+=4)o.copy(h[T]).applyMatrix4(M,a),o.normal.toArray(d,b),d[b+3]=o.constant}l.value=d,l.needsUpdate=!0}return e.numPlanes=p,e.numIntersection=0,d}}function bx(i){let e=new WeakMap;function t(o,a){return a===xa?o.mapping=Zi:a===va&&(o.mapping=$i),o}function n(o){if(o&&o.isTexture&&o.isRenderTargetTexture===!1){const a=o.mapping;if(a===xa||a===va)if(e.has(o)){const l=e.get(o).texture;return t(l,o.mapping)}else{const l=o.image;if(l&&l.height>0){const c=new zg(l.height/2);return c.fromEquirectangularTexture(i,o),e.set(o,c),o.addEventListener("dispose",s),t(c.texture,o.mapping)}else return null}}return o}function s(o){const a=o.target;a.removeEventListener("dispose",s);const l=e.get(a);l!==void 0&&(e.delete(a),l.dispose())}function r(){e=new WeakMap}return{get:n,dispose:r}}class il extends ih{constructor(e=-1,t=1,n=1,s=-1,r=.1,o=2e3){super();this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=s,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,s,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2;let r=n-e,o=n+e,a=s+t,l=s-t;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,o=r+c*this.view.width,a-=u*this.view.offsetY,l=a-u*this.view.height}this.projectionMatrix.makeOrthographic(r,o,a,l,this.near,this.far),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}const ys=4,oh=[.125,.215,.35,.446,.526,.582],xi=20,sl=new il,ah=new Ce;let rl=null;const vi=(1+Math.sqrt(5))/2,Ms=1/vi,lh=[new L(1,1,1),new L(-1,1,1),new L(1,1,-1),new L(-1,1,-1),new L(0,vi,Ms),new L(0,vi,-Ms),new L(Ms,0,vi),new L(-Ms,0,vi),new L(vi,Ms,0),new L(-vi,Ms,0)];class ch{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,n=.1,s=100){rl=this._renderer.getRenderTarget(),this._setSize(256);const r=this._allocateTargets();return r.depthBuffer=!0,this._sceneToCubeUV(e,n,s,r),t>0&&this._blur(r,0,0,t),this._applyPMREM(r),this._cleanup(r),r}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=fh(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=hh(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(rl),e.scissorTest=!1,ao(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===Zi||e.mapping===$i?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),rl=this._renderer.getRenderTarget();const n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const e=3*Math.max(this._cubeSize,16*7),t=4*this._cubeSize,n={magFilter:xt,minFilter:xt,generateMipmaps:!1,type:Gs,format:Kt,encoding:li,depthBuffer:!1},s=uh(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=uh(e,t,n);const{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=Sx(r)),this._blurMaterial=wx(r,e,t)}return s}_compileMaterial(e){const t=new ye(this._lodPlanes[0],e);this._renderer.compile(t,sl)}_sceneToCubeUV(e,t,n,s){const r=90,o=1,a=new Dt(r,o,t,n),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],u=this._renderer,h=u.autoClear,f=u.toneMapping;u.getClearColor(ah),u.toneMapping=vn,u.autoClear=!1;const m=new An({name:"PMREM.Background",side:Yt,depthWrite:!1,depthTest:!1}),g=new ye(new ct,m);let p=!1;const d=e.background;d?d.isColor&&(m.color.copy(d),e.background=null,p=!0):(m.color.copy(ah),p=!0);for(let _=0;_<6;_++){const M=_%3;M===0?(a.up.set(0,l[_],0),a.lookAt(c[_],0,0)):M===1?(a.up.set(0,0,l[_]),a.lookAt(0,c[_],0)):(a.up.set(0,l[_],0),a.lookAt(0,0,c[_]));const T=this._cubeSize;ao(s,M*T,_>2?T:0,T,T),u.setRenderTarget(s),p&&u.render(g,a),u.render(e,a)}g.geometry.dispose(),g.material.dispose(),u.toneMapping=f,u.autoClear=h,e.background=d}_textureToCubeUV(e,t){const n=this._renderer,s=e.mapping===Zi||e.mapping===$i;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=fh()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=hh());const r=s?this._cubemapMaterial:this._equirectMaterial,o=new ye(this._lodPlanes[0],r),a=r.uniforms;a.envMap.value=e;const l=this._cubeSize;ao(t,0,0,3*l,2*l),n.setRenderTarget(t),n.render(o,sl)}_applyPMREM(e){const t=this._renderer,n=t.autoClear;t.autoClear=!1;for(let s=1;s<this._lodPlanes.length;s++){const r=Math.sqrt(this._sigmas[s]*this._sigmas[s]-this._sigmas[s-1]*this._sigmas[s-1]),o=lh[(s-1)%lh.length];this._blur(e,s-1,s,r,o)}t.autoClear=n}_blur(e,t,n,s,r){const o=this._pingPongRenderTarget;this._halfBlur(e,o,t,n,s,"latitudinal",r),this._halfBlur(o,e,n,n,s,"longitudinal",r)}_halfBlur(e,t,n,s,r,o,a){const l=this._renderer,c=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const u=3,h=new ye(this._lodPlanes[s],c),f=c.uniforms,m=this._sizeLods[n]-1,g=isFinite(r)?Math.PI/(2*m):2*Math.PI/(2*xi-1),p=r/g,d=isFinite(r)?1+Math.floor(u*p):xi;d>xi&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${d} samples when the maximum is set to ${xi}`);const _=[];let M=0;for(let D=0;D<xi;++D){const x=D/p,C=Math.exp(-x*x/2);_.push(C),D===0?M+=C:D<d&&(M+=2*C)}for(let D=0;D<_.length;D++)_[D]=_[D]/M;f.envMap.value=e.texture,f.samples.value=d,f.weights.value=_,f.latitudinal.value=o==="latitudinal",a&&(f.poleAxis.value=a);const{_lodMax:T}=this;f.dTheta.value=g,f.mipInt.value=T-n;const b=this._sizeLods[s],w=3*b*(s>T-ys?s-T+ys:0),R=4*(this._cubeSize-b);ao(t,w,R,3*b,2*b),l.setRenderTarget(t),l.render(h,sl)}}function Sx(i){const e=[],t=[],n=[];let s=i;const r=i-ys+1+oh.length;for(let o=0;o<r;o++){const a=Math.pow(2,s);t.push(a);let l=1/a;o>i-ys?l=oh[o-i+ys-1]:o===0&&(l=0),n.push(l);const c=1/(a-2),u=-c,h=1+c,f=[u,u,h,u,h,h,u,u,h,h,u,h],m=6,g=6,p=3,d=2,_=1,M=new Float32Array(p*g*m),T=new Float32Array(d*g*m),b=new Float32Array(_*g*m);for(let R=0;R<m;R++){const D=R%3*2/3-1,x=R>2?0:-1,C=[D,x,0,D+2/3,x,0,D+2/3,x+1,0,D,x,0,D+2/3,x+1,0,D,x+1,0];M.set(C,p*g*R),T.set(f,d*g*R);const N=[R,R,R,R,R,R];b.set(N,_*g*R)}const w=new ft;w.setAttribute("position",new Ct(M,p)),w.setAttribute("uv",new Ct(T,d)),w.setAttribute("faceIndex",new Ct(b,_)),e.push(w),s>ys&&s--}return{lodPlanes:e,sizeLods:t,sigmas:n}}function uh(i,e,t){const n=new fi(i,e,t);return n.texture.mapping=Or,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function ao(i,e,t,n,s){i.viewport.set(e,t,n,s),i.scissor.set(e,t,n,s)}function wx(i,e,t){const n=new Float32Array(xi),s=new L(0,1,0);return new gi({name:"SphericalGaussianBlur",defines:{n:xi,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:ol(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:Bn,depthTest:!1,depthWrite:!1})}function hh(){return new gi({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:ol(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:Bn,depthTest:!1,depthWrite:!1})}function fh(){return new gi({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:ol(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Bn,depthTest:!1,depthWrite:!1})}function ol(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function Tx(i){let e=new WeakMap,t=null;function n(a){if(a&&a.isTexture){const l=a.mapping,c=l===xa||l===va,u=l===Zi||l===$i;if(c||u)if(a.isRenderTargetTexture&&a.needsPMREMUpdate===!0){a.needsPMREMUpdate=!1;let h=e.get(a);return t===null&&(t=new ch(i)),h=c?t.fromEquirectangular(a,h):t.fromCubemap(a,h),e.set(a,h),h.texture}else{if(e.has(a))return e.get(a).texture;{const h=a.image;if(c&&h&&h.height>0||u&&h&&s(h)){t===null&&(t=new ch(i));const f=c?t.fromEquirectangular(a):t.fromCubemap(a);return e.set(a,f),a.addEventListener("dispose",r),f.texture}else return null}}}return a}function s(a){let l=0;const c=6;for(let u=0;u<c;u++)a[u]!==void 0&&l++;return l===c}function r(a){const l=a.target;l.removeEventListener("dispose",r);const c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function o(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:n,dispose:o}}function Ex(i){const e={};function t(n){if(e[n]!==void 0)return e[n];let s;switch(n){case"WEBGL_depth_texture":s=i.getExtension("WEBGL_depth_texture")||i.getExtension("MOZ_WEBGL_depth_texture")||i.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":s=i.getExtension("EXT_texture_filter_anisotropic")||i.getExtension("MOZ_EXT_texture_filter_anisotropic")||i.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":s=i.getExtension("WEBGL_compressed_texture_s3tc")||i.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":s=i.getExtension("WEBGL_compressed_texture_pvrtc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:s=i.getExtension(n)}return e[n]=s,s}return{has:function(n){return t(n)!==null},init:function(n){n.isWebGL2?t("EXT_color_buffer_float"):(t("WEBGL_depth_texture"),t("OES_texture_float"),t("OES_texture_half_float"),t("OES_texture_half_float_linear"),t("OES_standard_derivatives"),t("OES_element_index_uint"),t("OES_vertex_array_object"),t("ANGLE_instanced_arrays")),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture")},get:function(n){const s=t(n);return s===null&&console.warn("THREE.WebGLRenderer: "+n+" extension not supported."),s}}}function Ax(i,e,t,n){const s={},r=new WeakMap;function o(h){const f=h.target;f.index!==null&&e.remove(f.index);for(const g in f.attributes)e.remove(f.attributes[g]);f.removeEventListener("dispose",o),delete s[f.id];const m=r.get(f);m&&(e.remove(m),r.delete(f)),n.releaseStatesOfGeometry(f),f.isInstancedBufferGeometry===!0&&delete f._maxInstanceCount,t.memory.geometries--}function a(h,f){return s[f.id]===!0||(f.addEventListener("dispose",o),s[f.id]=!0,t.memory.geometries++),f}function l(h){const f=h.attributes;for(const g in f)e.update(f[g],34962);const m=h.morphAttributes;for(const g in m){const p=m[g];for(let d=0,_=p.length;d<_;d++)e.update(p[d],34962)}}function c(h){const f=[],m=h.index,g=h.attributes.position;let p=0;if(m!==null){const M=m.array;p=m.version;for(let T=0,b=M.length;T<b;T+=3){const w=M[T+0],R=M[T+1],D=M[T+2];f.push(w,R,R,D,D,w)}}else{const M=g.array;p=g.version;for(let T=0,b=M.length/3-1;T<b;T+=3){const w=T+0,R=T+1,D=T+2;f.push(w,R,R,D,D,w)}}const d=new(Bu(f)?th:eh)(f,1);d.version=p;const _=r.get(h);_&&e.remove(_),r.set(h,d)}function u(h){const f=r.get(h);if(f){const m=h.index;m!==null&&f.version<m.version&&c(h)}else c(h);return r.get(h)}return{get:a,update:l,getWireframeAttribute:u}}function Cx(i,e,t,n){const s=n.isWebGL2;let r;function o(f){r=f}let a,l;function c(f){a=f.type,l=f.bytesPerElement}function u(f,m){i.drawElements(r,m,a,f*l),t.update(m,r,1)}function h(f,m,g){if(g===0)return;let p,d;if(s)p=i,d="drawElementsInstanced";else if(p=e.get("ANGLE_instanced_arrays"),d="drawElementsInstancedANGLE",p===null){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}p[d](r,m,a,f*l,g),t.update(m,r,g)}this.setMode=o,this.setIndex=c,this.render=u,this.renderInstances=h}function Lx(i){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,o,a){switch(t.calls++,o){case 4:t.triangles+=a*(r/3);break;case 1:t.lines+=a*(r/2);break;case 3:t.lines+=a*(r-1);break;case 2:t.lines+=a*r;break;case 0:t.points+=a*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function s(){t.frame++,t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:s,update:n}}function Rx(i,e){return i[0]-e[0]}function Px(i,e){return Math.abs(e[1])-Math.abs(i[1])}function al(i,e){let t=1;const n=e.isInterleavedBufferAttribute?e.data.array:e.array;n instanceof Int8Array?t=127:n instanceof Uint8Array?t=255:n instanceof Uint16Array?t=65535:n instanceof Int16Array?t=32767:n instanceof Int32Array?t=2147483647:console.error("THREE.WebGLMorphtargets: Unsupported morph attribute data type: ",n),i.divideScalar(t)}function Ix(i,e,t){const n={},s=new Float32Array(8),r=new WeakMap,o=new Qe,a=[];for(let c=0;c<8;c++)a[c]=[c,0];function l(c,u,h,f){const m=c.morphTargetInfluences;if(e.isWebGL2===!0){const g=u.morphAttributes.position||u.morphAttributes.normal||u.morphAttributes.color,p=g!==void 0?g.length:0;let d=r.get(u);if(d===void 0||d.count!==p){let j=function(){te.dispose(),r.delete(u),u.removeEventListener("dispose",j)};d!==void 0&&d.texture.dispose();const T=u.morphAttributes.position!==void 0,b=u.morphAttributes.normal!==void 0,w=u.morphAttributes.color!==void 0,R=u.morphAttributes.position||[],D=u.morphAttributes.normal||[],x=u.morphAttributes.color||[];let C=0;T===!0&&(C=1),b===!0&&(C=2),w===!0&&(C=3);let N=u.attributes.position.count*C,U=1;N>e.maxTextureSize&&(U=Math.ceil(N/e.maxTextureSize),N=e.maxTextureSize);const Z=new Float32Array(N*U*4*p),te=new Gu(Z,N,U,p);te.type=kn,te.needsUpdate=!0;const O=C*4;for(let z=0;z<p;z++){const G=R[z],W=D[z],B=x[z],q=N*U*4*z;for(let le=0;le<G.count;le++){const ne=le*O;T===!0&&(o.fromBufferAttribute(G,le),G.normalized===!0&&al(o,G),Z[q+ne+0]=o.x,Z[q+ne+1]=o.y,Z[q+ne+2]=o.z,Z[q+ne+3]=0),b===!0&&(o.fromBufferAttribute(W,le),W.normalized===!0&&al(o,W),Z[q+ne+4]=o.x,Z[q+ne+5]=o.y,Z[q+ne+6]=o.z,Z[q+ne+7]=0),w===!0&&(o.fromBufferAttribute(B,le),B.normalized===!0&&al(o,B),Z[q+ne+8]=o.x,Z[q+ne+9]=o.y,Z[q+ne+10]=o.z,Z[q+ne+11]=B.itemSize===4?o.w:1)}}d={count:p,texture:te,size:new Te(N,U)},r.set(u,d),u.addEventListener("dispose",j)}let _=0;for(let T=0;T<m.length;T++)_+=m[T];const M=u.morphTargetsRelative?1:1-_;f.getUniforms().setValue(i,"morphTargetBaseInfluence",M),f.getUniforms().setValue(i,"morphTargetInfluences",m),f.getUniforms().setValue(i,"morphTargetsTexture",d.texture,t),f.getUniforms().setValue(i,"morphTargetsTextureSize",d.size)}else{const g=m===void 0?0:m.length;let p=n[u.id];if(p===void 0||p.length!==g){p=[];for(let b=0;b<g;b++)p[b]=[b,0];n[u.id]=p}for(let b=0;b<g;b++){const w=p[b];w[0]=b,w[1]=m[b]}p.sort(Px);for(let b=0;b<8;b++)b<g&&p[b][1]?(a[b][0]=p[b][0],a[b][1]=p[b][1]):(a[b][0]=Number.MAX_SAFE_INTEGER,a[b][1]=0);a.sort(Rx);const d=u.morphAttributes.position,_=u.morphAttributes.normal;let M=0;for(let b=0;b<8;b++){const w=a[b],R=w[0],D=w[1];R!==Number.MAX_SAFE_INTEGER&&D?(d&&u.getAttribute("morphTarget"+b)!==d[R]&&u.setAttribute("morphTarget"+b,d[R]),_&&u.getAttribute("morphNormal"+b)!==_[R]&&u.setAttribute("morphNormal"+b,_[R]),s[b]=D,M+=D):(d&&u.hasAttribute("morphTarget"+b)===!0&&u.deleteAttribute("morphTarget"+b),_&&u.hasAttribute("morphNormal"+b)===!0&&u.deleteAttribute("morphNormal"+b),s[b]=0)}const T=u.morphTargetsRelative?1:1-M;f.getUniforms().setValue(i,"morphTargetBaseInfluence",T),f.getUniforms().setValue(i,"morphTargetInfluences",s)}}return{update:l}}function Dx(i,e,t,n){let s=new WeakMap;function r(l){const c=n.render.frame,u=l.geometry,h=e.get(l,u);return s.get(h)!==c&&(e.update(h),s.set(h,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),t.update(l.instanceMatrix,34962),l.instanceColor!==null&&t.update(l.instanceColor,34962)),h}function o(){s=new WeakMap}function a(l){const c=l.target;c.removeEventListener("dispose",a),t.remove(c.instanceMatrix),c.instanceColor!==null&&t.remove(c.instanceColor)}return{update:r,dispose:o}}const dh=new Mt,ph=new Gu,mh=new Sg,gh=new sh,_h=[],xh=[],vh=new Float32Array(16),yh=new Float32Array(9),Mh=new Float32Array(4);function bs(i,e,t){const n=i[0];if(n<=0||n>0)return i;const s=e*t;let r=_h[s];if(r===void 0&&(r=new Float32Array(s),_h[s]=r),e!==0){n.toArray(r,0);for(let o=1,a=0;o!==e;++o)a+=t,i[o].toArray(r,a)}return r}function Lt(i,e){if(i.length!==e.length)return!1;for(let t=0,n=i.length;t<n;t++)if(i[t]!==e[t])return!1;return!0}function Rt(i,e){for(let t=0,n=e.length;t<n;t++)i[t]=e[t]}function lo(i,e){let t=xh[e];t===void 0&&(t=new Int32Array(e),xh[e]=t);for(let n=0;n!==e;++n)t[n]=i.allocateTextureUnit();return t}function Fx(i,e){const t=this.cache;t[0]!==e&&(i.uniform1f(this.addr,e),t[0]=e)}function Nx(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Lt(t,e))return;i.uniform2fv(this.addr,e),Rt(t,e)}}function Ox(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(i.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(Lt(t,e))return;i.uniform3fv(this.addr,e),Rt(t,e)}}function Ux(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Lt(t,e))return;i.uniform4fv(this.addr,e),Rt(t,e)}}function zx(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(Lt(t,e))return;i.uniformMatrix2fv(this.addr,!1,e),Rt(t,e)}else{if(Lt(t,n))return;Mh.set(n),i.uniformMatrix2fv(this.addr,!1,Mh),Rt(t,n)}}function Bx(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(Lt(t,e))return;i.uniformMatrix3fv(this.addr,!1,e),Rt(t,e)}else{if(Lt(t,n))return;yh.set(n),i.uniformMatrix3fv(this.addr,!1,yh),Rt(t,n)}}function kx(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(Lt(t,e))return;i.uniformMatrix4fv(this.addr,!1,e),Rt(t,e)}else{if(Lt(t,n))return;vh.set(n),i.uniformMatrix4fv(this.addr,!1,vh),Rt(t,n)}}function Hx(i,e){const t=this.cache;t[0]!==e&&(i.uniform1i(this.addr,e),t[0]=e)}function Vx(i,e){const t=this.cache;Lt(t,e)||(i.uniform2iv(this.addr,e),Rt(t,e))}function Gx(i,e){const t=this.cache;Lt(t,e)||(i.uniform3iv(this.addr,e),Rt(t,e))}function Wx(i,e){const t=this.cache;Lt(t,e)||(i.uniform4iv(this.addr,e),Rt(t,e))}function jx(i,e){const t=this.cache;t[0]!==e&&(i.uniform1ui(this.addr,e),t[0]=e)}function Xx(i,e){const t=this.cache;Lt(t,e)||(i.uniform2uiv(this.addr,e),Rt(t,e))}function qx(i,e){const t=this.cache;Lt(t,e)||(i.uniform3uiv(this.addr,e),Rt(t,e))}function Yx(i,e){const t=this.cache;Lt(t,e)||(i.uniform4uiv(this.addr,e),Rt(t,e))}function Kx(i,e,t){const n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTexture2D(e||dh,s)}function Zx(i,e,t){const n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTexture3D(e||mh,s)}function $x(i,e,t){const n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTextureCube(e||gh,s)}function Qx(i,e,t){const n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTexture2DArray(e||ph,s)}function Jx(i){switch(i){case 5126:return Fx;case 35664:return Nx;case 35665:return Ox;case 35666:return Ux;case 35674:return zx;case 35675:return Bx;case 35676:return kx;case 5124:case 35670:return Hx;case 35667:case 35671:return Vx;case 35668:case 35672:return Gx;case 35669:case 35673:return Wx;case 5125:return jx;case 36294:return Xx;case 36295:return qx;case 36296:return Yx;case 35678:case 36198:case 36298:case 36306:case 35682:return Kx;case 35679:case 36299:case 36307:return Zx;case 35680:case 36300:case 36308:case 36293:return $x;case 36289:case 36303:case 36311:case 36292:return Qx}}function ev(i,e){i.uniform1fv(this.addr,e)}function tv(i,e){const t=bs(e,this.size,2);i.uniform2fv(this.addr,t)}function nv(i,e){const t=bs(e,this.size,3);i.uniform3fv(this.addr,t)}function iv(i,e){const t=bs(e,this.size,4);i.uniform4fv(this.addr,t)}function sv(i,e){const t=bs(e,this.size,4);i.uniformMatrix2fv(this.addr,!1,t)}function rv(i,e){const t=bs(e,this.size,9);i.uniformMatrix3fv(this.addr,!1,t)}function ov(i,e){const t=bs(e,this.size,16);i.uniformMatrix4fv(this.addr,!1,t)}function av(i,e){i.uniform1iv(this.addr,e)}function lv(i,e){i.uniform2iv(this.addr,e)}function cv(i,e){i.uniform3iv(this.addr,e)}function uv(i,e){i.uniform4iv(this.addr,e)}function hv(i,e){i.uniform1uiv(this.addr,e)}function fv(i,e){i.uniform2uiv(this.addr,e)}function dv(i,e){i.uniform3uiv(this.addr,e)}function pv(i,e){i.uniform4uiv(this.addr,e)}function mv(i,e,t){const n=e.length,s=lo(t,n);i.uniform1iv(this.addr,s);for(let r=0;r!==n;++r)t.setTexture2D(e[r]||dh,s[r])}function gv(i,e,t){const n=e.length,s=lo(t,n);i.uniform1iv(this.addr,s);for(let r=0;r!==n;++r)t.setTexture3D(e[r]||mh,s[r])}function _v(i,e,t){const n=e.length,s=lo(t,n);i.uniform1iv(this.addr,s);for(let r=0;r!==n;++r)t.setTextureCube(e[r]||gh,s[r])}function xv(i,e,t){const n=e.length,s=lo(t,n);i.uniform1iv(this.addr,s);for(let r=0;r!==n;++r)t.setTexture2DArray(e[r]||ph,s[r])}function vv(i){switch(i){case 5126:return ev;case 35664:return tv;case 35665:return nv;case 35666:return iv;case 35674:return sv;case 35675:return rv;case 35676:return ov;case 5124:case 35670:return av;case 35667:case 35671:return lv;case 35668:case 35672:return cv;case 35669:case 35673:return uv;case 5125:return hv;case 36294:return fv;case 36295:return dv;case 36296:return pv;case 35678:case 36198:case 36298:case 36306:case 35682:return mv;case 35679:case 36299:case 36307:return gv;case 35680:case 36300:case 36308:case 36293:return _v;case 36289:case 36303:case 36311:case 36292:return xv}}class yv{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.setValue=Jx(t.type)}}class Mv{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.size=t.size,this.setValue=vv(t.type)}}class bv{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){const s=this.seq;for(let r=0,o=s.length;r!==o;++r){const a=s[r];a.setValue(e,t[a.id],n)}}}const ll=/(\w+)(\])?(\[|\.)?/g;function bh(i,e){i.seq.push(e),i.map[e.id]=e}function Sv(i,e,t){const n=i.name,s=n.length;for(ll.lastIndex=0;;){const r=ll.exec(n),o=ll.lastIndex;let a=r[1];const l=r[2]==="]",c=r[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===s){bh(t,c===void 0?new yv(a,i,e):new Mv(a,i,e));break}else{let h=t.map[a];h===void 0&&(h=new bv(a),bh(t,h)),t=h}}}class co{constructor(e,t){this.seq=[],this.map={};const n=e.getProgramParameter(t,35718);for(let s=0;s<n;++s){const r=e.getActiveUniform(t,s),o=e.getUniformLocation(t,r.name);Sv(r,o,this)}}setValue(e,t,n,s){const r=this.map[t];r!==void 0&&r.setValue(e,n,s)}setOptional(e,t,n){const s=t[n];s!==void 0&&this.setValue(e,n,s)}static upload(e,t,n,s){for(let r=0,o=t.length;r!==o;++r){const a=t[r],l=n[a.id];l.needsUpdate!==!1&&a.setValue(e,l.value,s)}}static seqWithValue(e,t){const n=[];for(let s=0,r=e.length;s!==r;++s){const o=e[s];o.id in t&&n.push(o)}return n}}function Sh(i,e,t){const n=i.createShader(e);return i.shaderSource(n,t),i.compileShader(n),n}let wv=0;function Tv(i,e){const t=i.split(`
`),n=[],s=Math.max(e-6,0),r=Math.min(e+6,t.length);for(let o=s;o<r;o++){const a=o+1;n.push(`${a===e?">":" "} ${a}: ${t[o]}`)}return n.join(`
`)}function Ev(i){switch(i){case li:return["Linear","( value )"];case Ze:return["sRGB","( value )"];default:return console.warn("THREE.WebGLProgram: Unsupported encoding:",i),["Linear","( value )"]}}function wh(i,e,t){const n=i.getShaderParameter(e,35713),s=i.getShaderInfoLog(e).trim();if(n&&s==="")return"";const r=/ERROR: 0:(\d+)/.exec(s);if(r){const o=parseInt(r[1]);return t.toUpperCase()+`

`+s+`

`+Tv(i.getShaderSource(e),o)}else return s}function Av(i,e){const t=Ev(e);return"vec4 "+i+"( vec4 value ) { return LinearTo"+t[0]+t[1]+"; }"}function Cv(i,e){let t;switch(e){case Fm:t="Linear";break;case Nm:t="Reinhard";break;case Om:t="OptimizedCineon";break;case Um:t="ACESFilmic";break;case zm:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+i+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}function Lv(i){return[i.extensionDerivatives||!!i.envMapCubeUVHeight||i.bumpMap||i.tangentSpaceNormalMap||i.clearcoatNormalMap||i.flatShading||i.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(i.extensionFragDepth||i.logarithmicDepthBuffer)&&i.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",i.extensionDrawBuffers&&i.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(i.extensionShaderTextureLOD||i.envMap||i.transmission)&&i.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(Qs).join(`
`)}function Rv(i){const e=[];for(const t in i){const n=i[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function Pv(i,e){const t={},n=i.getProgramParameter(e,35721);for(let s=0;s<n;s++){const r=i.getActiveAttrib(e,s),o=r.name;let a=1;r.type===35674&&(a=2),r.type===35675&&(a=3),r.type===35676&&(a=4),t[o]={type:r.type,location:i.getAttribLocation(e,o),locationSize:a}}return t}function Qs(i){return i!==""}function Th(i,e){return i.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Eh(i,e){return i.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const Iv=/^[ \t]*#include +<([\w\d./]+)>/gm;function cl(i){return i.replace(Iv,Dv)}function Dv(i,e){const t=Ue[e];if(t===void 0)throw new Error("Can not resolve #include <"+e+">");return cl(t)}const Fv=/#pragma unroll_loop[\s]+?for \( int i \= (\d+)\; i < (\d+)\; i \+\+ \) \{([\s\S]+?)(?=\})\}/g,Nv=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Ah(i){return i.replace(Nv,Ch).replace(Fv,Ov)}function Ov(i,e,t,n){return console.warn("WebGLProgram: #pragma unroll_loop shader syntax is deprecated. Please use #pragma unroll_loop_start syntax instead."),Ch(i,e,t,n)}function Ch(i,e,t,n){let s="";for(let r=parseInt(e);r<parseInt(t);r++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function Lh(i){let e="precision "+i.precision+` float;
precision `+i.precision+" int;";return i.precision==="highp"?e+=`
#define HIGH_PRECISION`:i.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:i.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function Uv(i){let e="SHADOWMAP_TYPE_BASIC";return i.shadowMapType===eu?e="SHADOWMAP_TYPE_PCF":i.shadowMapType===hm?e="SHADOWMAP_TYPE_PCF_SOFT":i.shadowMapType===Vs&&(e="SHADOWMAP_TYPE_VSM"),e}function zv(i){let e="ENVMAP_TYPE_CUBE";if(i.envMap)switch(i.envMapMode){case Zi:case $i:e="ENVMAP_TYPE_CUBE";break;case Or:e="ENVMAP_TYPE_CUBE_UV";break}return e}function Bv(i){let e="ENVMAP_MODE_REFLECTION";if(i.envMap)switch(i.envMapMode){case $i:e="ENVMAP_MODE_REFRACTION";break}return e}function kv(i){let e="ENVMAP_BLENDING_NONE";if(i.envMap)switch(i.combine){case _a:e="ENVMAP_BLENDING_MULTIPLY";break;case Im:e="ENVMAP_BLENDING_MIX";break;case Dm:e="ENVMAP_BLENDING_ADD";break}return e}function Hv(i){const e=i.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),7*16)),texelHeight:n,maxMip:t}}function Vv(i,e,t,n){const s=i.getContext(),r=t.defines;let o=t.vertexShader,a=t.fragmentShader;const l=Uv(t),c=zv(t),u=Bv(t),h=kv(t),f=Hv(t),m=t.isWebGL2?"":Lv(t),g=Rv(r),p=s.createProgram();let d,_,M=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(d=[g].filter(Qs).join(`
`),d.length>0&&(d+=`
`),_=[m,g].filter(Qs).join(`
`),_.length>0&&(_+=`
`)):(d=[Lh(t),"#define SHADER_NAME "+t.shaderName,g,t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.supportsVertexTextures?"#define VERTEX_TEXTURES":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMap&&t.objectSpaceNormalMap?"#define OBJECTSPACE_NORMALMAP":"",t.normalMap&&t.tangentSpaceNormalMap?"#define TANGENTSPACE_NORMALMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.displacementMap&&t.supportsVertexTextures?"#define USE_DISPLACEMENTMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularIntensityMap?"#define USE_SPECULARINTENSITYMAP":"",t.specularColorMap?"#define USE_SPECULARCOLORMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEENCOLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEENROUGHNESSMAP":"",t.vertexTangents?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUvs?"#define USE_UV":"",t.uvsVertexOnly?"#define UVS_VERTEX_ONLY":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors&&t.isWebGL2?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Qs).join(`
`),_=[m,Lh(t),"#define SHADER_NAME "+t.shaderName,g,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+u:"",t.envMap?"#define "+h:"",f?"#define CUBEUV_TEXEL_WIDTH "+f.texelWidth:"",f?"#define CUBEUV_TEXEL_HEIGHT "+f.texelHeight:"",f?"#define CUBEUV_MAX_MIP "+f.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMap&&t.objectSpaceNormalMap?"#define OBJECTSPACE_NORMALMAP":"",t.normalMap&&t.tangentSpaceNormalMap?"#define TANGENTSPACE_NORMALMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularIntensityMap?"#define USE_SPECULARINTENSITYMAP":"",t.specularColorMap?"#define USE_SPECULARCOLORMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEENCOLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEENROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.vertexTangents?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUvs?"#define USE_UV":"",t.uvsVertexOnly?"#define UVS_VERTEX_ONLY":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.physicallyCorrectLights?"#define PHYSICALLY_CORRECT_LIGHTS":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==vn?"#define TONE_MAPPING":"",t.toneMapping!==vn?Ue.tonemapping_pars_fragment:"",t.toneMapping!==vn?Cv("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",Ue.encodings_pars_fragment,Av("linearToOutputTexel",t.outputEncoding),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Qs).join(`
`)),o=cl(o),o=Th(o,t),o=Eh(o,t),a=cl(a),a=Th(a,t),a=Eh(a,t),o=Ah(o),a=Ah(a),t.isWebGL2&&t.isRawShaderMaterial!==!0&&(M=`#version 300 es
`,d=["precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+d,_=["#define varying in",t.glslVersion===Ou?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Ou?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+_);const T=M+d+o,b=M+_+a,w=Sh(s,35633,T),R=Sh(s,35632,b);if(s.attachShader(p,w),s.attachShader(p,R),t.index0AttributeName!==void 0?s.bindAttribLocation(p,0,t.index0AttributeName):t.morphTargets===!0&&s.bindAttribLocation(p,0,"position"),s.linkProgram(p),i.debug.checkShaderErrors){const C=s.getProgramInfoLog(p).trim(),N=s.getShaderInfoLog(w).trim(),U=s.getShaderInfoLog(R).trim();let Z=!0,te=!0;if(s.getProgramParameter(p,35714)===!1){Z=!1;const O=wh(s,w,"vertex"),j=wh(s,R,"fragment");console.error("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(p,35715)+`

Program Info Log: `+C+`
`+O+`
`+j)}else C!==""?console.warn("THREE.WebGLProgram: Program Info Log:",C):(N===""||U==="")&&(te=!1);te&&(this.diagnostics={runnable:Z,programLog:C,vertexShader:{log:N,prefix:d},fragmentShader:{log:U,prefix:_}})}s.deleteShader(w),s.deleteShader(R);let D;this.getUniforms=function(){return D===void 0&&(D=new co(s,p)),D};let x;return this.getAttributes=function(){return x===void 0&&(x=Pv(s,p)),x},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(p),this.program=void 0},this.name=t.shaderName,this.id=wv++,this.cacheKey=e,this.usedTimes=1,this.program=p,this.vertexShader=w,this.fragmentShader=R,this}let Gv=0;class Wv{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,n=e.fragmentShader,s=this._getShaderStage(t),r=this._getShaderStage(n),o=this._getShaderCacheForMaterial(e);return o.has(s)===!1&&(o.add(s),s.usedTimes++),o.has(r)===!1&&(o.add(r),r.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;return t.has(e)===!1&&t.set(e,new Set),t.get(e)}_getShaderStage(e){const t=this.shaderCache;if(t.has(e)===!1){const n=new jv(e);t.set(e,n)}return t.get(e)}}class jv{constructor(e){this.id=Gv++,this.code=e,this.usedTimes=0}}function Xv(i,e,t,n,s,r,o){const a=new Wa,l=new Wv,c=[],u=s.isWebGL2,h=s.logarithmicDepthBuffer,f=s.vertexTextures;let m=s.precision;const g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function p(x,C,N,U,Z){const te=U.fog,O=Z.geometry,j=x.isMeshStandardMaterial?U.environment:null,z=(x.isMeshStandardMaterial?t:e).get(x.envMap||j),G=!!z&&z.mapping===Or?z.image.height:null,W=g[x.type];x.precision!==null&&(m=s.getMaxPrecision(x.precision),m!==x.precision&&console.warn("THREE.WebGLProgram.getParameters:",x.precision,"not supported, using",m,"instead."));const B=O.morphAttributes.position||O.morphAttributes.normal||O.morphAttributes.color,q=B!==void 0?B.length:0;let le=0;O.morphAttributes.position!==void 0&&(le=1),O.morphAttributes.normal!==void 0&&(le=2),O.morphAttributes.color!==void 0&&(le=3);let ne,de,Me,we;if(W){const Be=fn[W];ne=Be.vertexShader,de=Be.fragmentShader}else ne=x.vertexShader,de=x.fragmentShader,l.update(x),Me=l.getVertexShaderID(x),we=l.getFragmentShaderID(x);const Q=i.getRenderTarget(),je=x.alphaTest>0,Re=x.clearcoat>0,Ee=x.iridescence>0;return{isWebGL2:u,shaderID:W,shaderName:x.type,vertexShader:ne,fragmentShader:de,defines:x.defines,customVertexShaderID:Me,customFragmentShaderID:we,isRawShaderMaterial:x.isRawShaderMaterial===!0,glslVersion:x.glslVersion,precision:m,instancing:Z.isInstancedMesh===!0,instancingColor:Z.isInstancedMesh===!0&&Z.instanceColor!==null,supportsVertexTextures:f,outputEncoding:Q===null?i.outputEncoding:Q.isXRRenderTarget===!0?Q.texture.encoding:li,map:!!x.map,matcap:!!x.matcap,envMap:!!z,envMapMode:z&&z.mapping,envMapCubeUVHeight:G,lightMap:!!x.lightMap,aoMap:!!x.aoMap,emissiveMap:!!x.emissiveMap,bumpMap:!!x.bumpMap,normalMap:!!x.normalMap,objectSpaceNormalMap:x.normalMapType===rg,tangentSpaceNormalMap:x.normalMapType===Aa,decodeVideoTexture:!!x.map&&x.map.isVideoTexture===!0&&x.map.encoding===Ze,clearcoat:Re,clearcoatMap:Re&&!!x.clearcoatMap,clearcoatRoughnessMap:Re&&!!x.clearcoatRoughnessMap,clearcoatNormalMap:Re&&!!x.clearcoatNormalMap,iridescence:Ee,iridescenceMap:Ee&&!!x.iridescenceMap,iridescenceThicknessMap:Ee&&!!x.iridescenceThicknessMap,displacementMap:!!x.displacementMap,roughnessMap:!!x.roughnessMap,metalnessMap:!!x.metalnessMap,specularMap:!!x.specularMap,specularIntensityMap:!!x.specularIntensityMap,specularColorMap:!!x.specularColorMap,opaque:x.transparent===!1&&x.blending===Yi,alphaMap:!!x.alphaMap,alphaTest:je,gradientMap:!!x.gradientMap,sheen:x.sheen>0,sheenColorMap:!!x.sheenColorMap,sheenRoughnessMap:!!x.sheenRoughnessMap,transmission:x.transmission>0,transmissionMap:!!x.transmissionMap,thicknessMap:!!x.thicknessMap,combine:x.combine,vertexTangents:!!x.normalMap&&!!O.attributes.tangent,vertexColors:x.vertexColors,vertexAlphas:x.vertexColors===!0&&!!O.attributes.color&&O.attributes.color.itemSize===4,vertexUvs:!!x.map||!!x.bumpMap||!!x.normalMap||!!x.specularMap||!!x.alphaMap||!!x.emissiveMap||!!x.roughnessMap||!!x.metalnessMap||!!x.clearcoatMap||!!x.clearcoatRoughnessMap||!!x.clearcoatNormalMap||!!x.iridescenceMap||!!x.iridescenceThicknessMap||!!x.displacementMap||!!x.transmissionMap||!!x.thicknessMap||!!x.specularIntensityMap||!!x.specularColorMap||!!x.sheenColorMap||!!x.sheenRoughnessMap,uvsVertexOnly:!(!!x.map||!!x.bumpMap||!!x.normalMap||!!x.specularMap||!!x.alphaMap||!!x.emissiveMap||!!x.roughnessMap||!!x.metalnessMap||!!x.clearcoatNormalMap||!!x.iridescenceMap||!!x.iridescenceThicknessMap||x.transmission>0||!!x.transmissionMap||!!x.thicknessMap||!!x.specularIntensityMap||!!x.specularColorMap||x.sheen>0||!!x.sheenColorMap||!!x.sheenRoughnessMap)&&!!x.displacementMap,fog:!!te,useFog:x.fog===!0,fogExp2:te&&te.isFogExp2,flatShading:!!x.flatShading,sizeAttenuation:x.sizeAttenuation,logarithmicDepthBuffer:h,skinning:Z.isSkinnedMesh===!0,morphTargets:O.morphAttributes.position!==void 0,morphNormals:O.morphAttributes.normal!==void 0,morphColors:O.morphAttributes.color!==void 0,morphTargetsCount:q,morphTextureStride:le,numDirLights:C.directional.length,numPointLights:C.point.length,numSpotLights:C.spot.length,numRectAreaLights:C.rectArea.length,numHemiLights:C.hemi.length,numDirLightShadows:C.directionalShadowMap.length,numPointLightShadows:C.pointShadowMap.length,numSpotLightShadows:C.spotShadowMap.length,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:x.dithering,shadowMapEnabled:i.shadowMap.enabled&&N.length>0,shadowMapType:i.shadowMap.type,toneMapping:x.toneMapped?i.toneMapping:vn,physicallyCorrectLights:i.physicallyCorrectLights,premultipliedAlpha:x.premultipliedAlpha,doubleSided:x.side===zn,flipSided:x.side===Yt,useDepthPacking:!!x.depthPacking,depthPacking:x.depthPacking||0,index0AttributeName:x.index0AttributeName,extensionDerivatives:x.extensions&&x.extensions.derivatives,extensionFragDepth:x.extensions&&x.extensions.fragDepth,extensionDrawBuffers:x.extensions&&x.extensions.drawBuffers,extensionShaderTextureLOD:x.extensions&&x.extensions.shaderTextureLOD,rendererExtensionFragDepth:u||n.has("EXT_frag_depth"),rendererExtensionDrawBuffers:u||n.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:u||n.has("EXT_shader_texture_lod"),customProgramCacheKey:x.customProgramCacheKey()}}function d(x){const C=[];if(x.shaderID?C.push(x.shaderID):(C.push(x.customVertexShaderID),C.push(x.customFragmentShaderID)),x.defines!==void 0)for(const N in x.defines)C.push(N),C.push(x.defines[N]);return x.isRawShaderMaterial===!1&&(_(C,x),M(C,x),C.push(i.outputEncoding)),C.push(x.customProgramCacheKey),C.join()}function _(x,C){x.push(C.precision),x.push(C.outputEncoding),x.push(C.envMapMode),x.push(C.envMapCubeUVHeight),x.push(C.combine),x.push(C.vertexUvs),x.push(C.fogExp2),x.push(C.sizeAttenuation),x.push(C.morphTargetsCount),x.push(C.morphAttributeCount),x.push(C.numDirLights),x.push(C.numPointLights),x.push(C.numSpotLights),x.push(C.numHemiLights),x.push(C.numRectAreaLights),x.push(C.numDirLightShadows),x.push(C.numPointLightShadows),x.push(C.numSpotLightShadows),x.push(C.shadowMapType),x.push(C.toneMapping),x.push(C.numClippingPlanes),x.push(C.numClipIntersection),x.push(C.depthPacking)}function M(x,C){a.disableAll(),C.isWebGL2&&a.enable(0),C.supportsVertexTextures&&a.enable(1),C.instancing&&a.enable(2),C.instancingColor&&a.enable(3),C.map&&a.enable(4),C.matcap&&a.enable(5),C.envMap&&a.enable(6),C.lightMap&&a.enable(7),C.aoMap&&a.enable(8),C.emissiveMap&&a.enable(9),C.bumpMap&&a.enable(10),C.normalMap&&a.enable(11),C.objectSpaceNormalMap&&a.enable(12),C.tangentSpaceNormalMap&&a.enable(13),C.clearcoat&&a.enable(14),C.clearcoatMap&&a.enable(15),C.clearcoatRoughnessMap&&a.enable(16),C.clearcoatNormalMap&&a.enable(17),C.iridescence&&a.enable(18),C.iridescenceMap&&a.enable(19),C.iridescenceThicknessMap&&a.enable(20),C.displacementMap&&a.enable(21),C.specularMap&&a.enable(22),C.roughnessMap&&a.enable(23),C.metalnessMap&&a.enable(24),C.gradientMap&&a.enable(25),C.alphaMap&&a.enable(26),C.alphaTest&&a.enable(27),C.vertexColors&&a.enable(28),C.vertexAlphas&&a.enable(29),C.vertexUvs&&a.enable(30),C.vertexTangents&&a.enable(31),C.uvsVertexOnly&&a.enable(32),C.fog&&a.enable(33),x.push(a.mask),a.disableAll(),C.useFog&&a.enable(0),C.flatShading&&a.enable(1),C.logarithmicDepthBuffer&&a.enable(2),C.skinning&&a.enable(3),C.morphTargets&&a.enable(4),C.morphNormals&&a.enable(5),C.morphColors&&a.enable(6),C.premultipliedAlpha&&a.enable(7),C.shadowMapEnabled&&a.enable(8),C.physicallyCorrectLights&&a.enable(9),C.doubleSided&&a.enable(10),C.flipSided&&a.enable(11),C.useDepthPacking&&a.enable(12),C.dithering&&a.enable(13),C.specularIntensityMap&&a.enable(14),C.specularColorMap&&a.enable(15),C.transmission&&a.enable(16),C.transmissionMap&&a.enable(17),C.thicknessMap&&a.enable(18),C.sheen&&a.enable(19),C.sheenColorMap&&a.enable(20),C.sheenRoughnessMap&&a.enable(21),C.decodeVideoTexture&&a.enable(22),C.opaque&&a.enable(23),x.push(a.mask)}function T(x){const C=g[x.type];let N;if(C){const U=fn[C];N=Fg.clone(U.uniforms)}else N=x.uniforms;return N}function b(x,C){let N;for(let U=0,Z=c.length;U<Z;U++){const te=c[U];if(te.cacheKey===C){N=te,++N.usedTimes;break}}return N===void 0&&(N=new Vv(i,C,x,r),c.push(N)),N}function w(x){if(--x.usedTimes==0){const C=c.indexOf(x);c[C]=c[c.length-1],c.pop(),x.destroy()}}function R(x){l.remove(x)}function D(){l.dispose()}return{getParameters:p,getProgramCacheKey:d,getUniforms:T,acquireProgram:b,releaseProgram:w,releaseShaderCache:R,programs:c,dispose:D}}function qv(){let i=new WeakMap;function e(r){let o=i.get(r);return o===void 0&&(o={},i.set(r,o)),o}function t(r){i.delete(r)}function n(r,o,a){i.get(r)[o]=a}function s(){i=new WeakMap}return{get:e,remove:t,update:n,dispose:s}}function Yv(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.material.id!==e.material.id?i.material.id-e.material.id:i.z!==e.z?i.z-e.z:i.id-e.id}function Rh(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.z!==e.z?e.z-i.z:i.id-e.id}function Ph(){const i=[];let e=0;const t=[],n=[],s=[];function r(){e=0,t.length=0,n.length=0,s.length=0}function o(h,f,m,g,p,d){let _=i[e];return _===void 0?(_={id:h.id,object:h,geometry:f,material:m,groupOrder:g,renderOrder:h.renderOrder,z:p,group:d},i[e]=_):(_.id=h.id,_.object=h,_.geometry=f,_.material=m,_.groupOrder=g,_.renderOrder=h.renderOrder,_.z=p,_.group=d),e++,_}function a(h,f,m,g,p,d){const _=o(h,f,m,g,p,d);m.transmission>0?n.push(_):m.transparent===!0?s.push(_):t.push(_)}function l(h,f,m,g,p,d){const _=o(h,f,m,g,p,d);m.transmission>0?n.unshift(_):m.transparent===!0?s.unshift(_):t.unshift(_)}function c(h,f){t.length>1&&t.sort(h||Yv),n.length>1&&n.sort(f||Rh),s.length>1&&s.sort(f||Rh)}function u(){for(let h=e,f=i.length;h<f;h++){const m=i[h];if(m.id===null)break;m.id=null,m.object=null,m.geometry=null,m.material=null,m.group=null}}return{opaque:t,transmissive:n,transparent:s,init:r,push:a,unshift:l,finish:u,sort:c}}function Kv(){let i=new WeakMap;function e(n,s){let r;return i.has(n)===!1?(r=new Ph,i.set(n,[r])):s>=i.get(n).length?(r=new Ph,i.get(n).push(r)):r=i.get(n)[s],r}function t(){i=new WeakMap}return{get:e,dispose:t}}function Zv(){const i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new L,color:new Ce};break;case"SpotLight":t={position:new L,direction:new L,color:new Ce,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new L,color:new Ce,distance:0,decay:0};break;case"HemisphereLight":t={direction:new L,skyColor:new Ce,groundColor:new Ce};break;case"RectAreaLight":t={color:new Ce,position:new L,halfWidth:new L,halfHeight:new L};break}return i[e.id]=t,t}}}function $v(){const i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Te};break;case"SpotLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Te};break;case"PointLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Te,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[e.id]=t,t}}}let Qv=0;function Jv(i,e){return(e.castShadow?1:0)-(i.castShadow?1:0)}function ey(i,e){const t=new Zv,n=$v(),s={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotShadow:[],spotShadowMap:[],spotShadowMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[]};for(let u=0;u<9;u++)s.probe.push(new L);const r=new L,o=new He,a=new He;function l(u,h){let f=0,m=0,g=0;for(let C=0;C<9;C++)s.probe[C].set(0,0,0);let p=0,d=0,_=0,M=0,T=0,b=0,w=0,R=0;u.sort(Jv);const D=h!==!0?Math.PI:1;for(let C=0,N=u.length;C<N;C++){const U=u[C],Z=U.color,te=U.intensity,O=U.distance,j=U.shadow&&U.shadow.map?U.shadow.map.texture:null;if(U.isAmbientLight)f+=Z.r*te*D,m+=Z.g*te*D,g+=Z.b*te*D;else if(U.isLightProbe)for(let z=0;z<9;z++)s.probe[z].addScaledVector(U.sh.coefficients[z],te);else if(U.isDirectionalLight){const z=t.get(U);if(z.color.copy(U.color).multiplyScalar(U.intensity*D),U.castShadow){const G=U.shadow,W=n.get(U);W.shadowBias=G.bias,W.shadowNormalBias=G.normalBias,W.shadowRadius=G.radius,W.shadowMapSize=G.mapSize,s.directionalShadow[p]=W,s.directionalShadowMap[p]=j,s.directionalShadowMatrix[p]=U.shadow.matrix,b++}s.directional[p]=z,p++}else if(U.isSpotLight){const z=t.get(U);if(z.position.setFromMatrixPosition(U.matrixWorld),z.color.copy(Z).multiplyScalar(te*D),z.distance=O,z.coneCos=Math.cos(U.angle),z.penumbraCos=Math.cos(U.angle*(1-U.penumbra)),z.decay=U.decay,U.castShadow){const G=U.shadow,W=n.get(U);W.shadowBias=G.bias,W.shadowNormalBias=G.normalBias,W.shadowRadius=G.radius,W.shadowMapSize=G.mapSize,s.spotShadow[_]=W,s.spotShadowMap[_]=j,s.spotShadowMatrix[_]=U.shadow.matrix,R++}s.spot[_]=z,_++}else if(U.isRectAreaLight){const z=t.get(U);z.color.copy(Z).multiplyScalar(te),z.halfWidth.set(U.width*.5,0,0),z.halfHeight.set(0,U.height*.5,0),s.rectArea[M]=z,M++}else if(U.isPointLight){const z=t.get(U);if(z.color.copy(U.color).multiplyScalar(U.intensity*D),z.distance=U.distance,z.decay=U.decay,U.castShadow){const G=U.shadow,W=n.get(U);W.shadowBias=G.bias,W.shadowNormalBias=G.normalBias,W.shadowRadius=G.radius,W.shadowMapSize=G.mapSize,W.shadowCameraNear=G.camera.near,W.shadowCameraFar=G.camera.far,s.pointShadow[d]=W,s.pointShadowMap[d]=j,s.pointShadowMatrix[d]=U.shadow.matrix,w++}s.point[d]=z,d++}else if(U.isHemisphereLight){const z=t.get(U);z.skyColor.copy(U.color).multiplyScalar(te*D),z.groundColor.copy(U.groundColor).multiplyScalar(te*D),s.hemi[T]=z,T++}}M>0&&(e.isWebGL2||i.has("OES_texture_float_linear")===!0?(s.rectAreaLTC1=xe.LTC_FLOAT_1,s.rectAreaLTC2=xe.LTC_FLOAT_2):i.has("OES_texture_half_float_linear")===!0?(s.rectAreaLTC1=xe.LTC_HALF_1,s.rectAreaLTC2=xe.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),s.ambient[0]=f,s.ambient[1]=m,s.ambient[2]=g;const x=s.hash;(x.directionalLength!==p||x.pointLength!==d||x.spotLength!==_||x.rectAreaLength!==M||x.hemiLength!==T||x.numDirectionalShadows!==b||x.numPointShadows!==w||x.numSpotShadows!==R)&&(s.directional.length=p,s.spot.length=_,s.rectArea.length=M,s.point.length=d,s.hemi.length=T,s.directionalShadow.length=b,s.directionalShadowMap.length=b,s.pointShadow.length=w,s.pointShadowMap.length=w,s.spotShadow.length=R,s.spotShadowMap.length=R,s.directionalShadowMatrix.length=b,s.pointShadowMatrix.length=w,s.spotShadowMatrix.length=R,x.directionalLength=p,x.pointLength=d,x.spotLength=_,x.rectAreaLength=M,x.hemiLength=T,x.numDirectionalShadows=b,x.numPointShadows=w,x.numSpotShadows=R,s.version=Qv++)}function c(u,h){let f=0,m=0,g=0,p=0,d=0;const _=h.matrixWorldInverse;for(let M=0,T=u.length;M<T;M++){const b=u[M];if(b.isDirectionalLight){const w=s.directional[f];w.direction.setFromMatrixPosition(b.matrixWorld),r.setFromMatrixPosition(b.target.matrixWorld),w.direction.sub(r),w.direction.transformDirection(_),f++}else if(b.isSpotLight){const w=s.spot[g];w.position.setFromMatrixPosition(b.matrixWorld),w.position.applyMatrix4(_),w.direction.setFromMatrixPosition(b.matrixWorld),r.setFromMatrixPosition(b.target.matrixWorld),w.direction.sub(r),w.direction.transformDirection(_),g++}else if(b.isRectAreaLight){const w=s.rectArea[p];w.position.setFromMatrixPosition(b.matrixWorld),w.position.applyMatrix4(_),a.identity(),o.copy(b.matrixWorld),o.premultiply(_),a.extractRotation(o),w.halfWidth.set(b.width*.5,0,0),w.halfHeight.set(0,b.height*.5,0),w.halfWidth.applyMatrix4(a),w.halfHeight.applyMatrix4(a),p++}else if(b.isPointLight){const w=s.point[m];w.position.setFromMatrixPosition(b.matrixWorld),w.position.applyMatrix4(_),m++}else if(b.isHemisphereLight){const w=s.hemi[d];w.direction.setFromMatrixPosition(b.matrixWorld),w.direction.transformDirection(_),d++}}}return{setup:l,setupView:c,state:s}}function Ih(i,e){const t=new ey(i,e),n=[],s=[];function r(){n.length=0,s.length=0}function o(h){n.push(h)}function a(h){s.push(h)}function l(h){t.setup(n,h)}function c(h){t.setupView(n,h)}return{init:r,state:{lightsArray:n,shadowsArray:s,lights:t},setupLights:l,setupLightsView:c,pushLight:o,pushShadow:a}}function ty(i,e){let t=new WeakMap;function n(r,o=0){let a;return t.has(r)===!1?(a=new Ih(i,e),t.set(r,[a])):o>=t.get(r).length?(a=new Ih(i,e),t.get(r).push(a)):a=t.get(r)[o],a}function s(){t=new WeakMap}return{get:n,dispose:s}}class ny extends tn{constructor(e){super();this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=ig,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class iy extends tn{constructor(e){super();this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.referencePosition=new L,this.nearDistance=1,this.farDistance=1e3,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.referencePosition.copy(e.referencePosition),this.nearDistance=e.nearDistance,this.farDistance=e.farDistance,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const sy=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,ry=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function oy(i,e,t){let n=new nl;const s=new Te,r=new Te,o=new Qe,a=new ny({depthPacking:sg}),l=new iy,c={},u=t.maxTextureSize,h={0:Yt,1:qi,2:zn},f=new gi({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Te},radius:{value:4}},vertexShader:sy,fragmentShader:ry}),m=f.clone();m.defines.HORIZONTAL_PASS=1;const g=new ft;g.setAttribute("position",new Ct(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const p=new ye(g,f),d=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=eu,this.render=function(b,w,R){if(d.enabled===!1||d.autoUpdate===!1&&d.needsUpdate===!1||b.length===0)return;const D=i.getRenderTarget(),x=i.getActiveCubeFace(),C=i.getActiveMipmapLevel(),N=i.state;N.setBlending(Bn),N.buffers.color.setClear(1,1,1,1),N.buffers.depth.setTest(!0),N.setScissorTest(!1);for(let U=0,Z=b.length;U<Z;U++){const te=b[U],O=te.shadow;if(O===void 0){console.warn("THREE.WebGLShadowMap:",te,"has no shadow.");continue}if(O.autoUpdate===!1&&O.needsUpdate===!1)continue;s.copy(O.mapSize);const j=O.getFrameExtents();if(s.multiply(j),r.copy(O.mapSize),(s.x>u||s.y>u)&&(s.x>u&&(r.x=Math.floor(u/j.x),s.x=r.x*j.x,O.mapSize.x=r.x),s.y>u&&(r.y=Math.floor(u/j.y),s.y=r.y*j.y,O.mapSize.y=r.y)),O.map===null){const G=this.type!==Vs?{minFilter:pt,magFilter:pt}:{};O.map=new fi(s.x,s.y,G),O.map.texture.name=te.name+".shadowMap",O.camera.updateProjectionMatrix()}i.setRenderTarget(O.map),i.clear();const z=O.getViewportCount();for(let G=0;G<z;G++){const W=O.getViewport(G);o.set(r.x*W.x,r.y*W.y,r.x*W.z,r.y*W.w),N.viewport(o),O.updateMatrices(te,G),n=O.getFrustum(),T(w,R,O.camera,te,this.type)}O.isPointLightShadow!==!0&&this.type===Vs&&_(O,R),O.needsUpdate=!1}d.needsUpdate=!1,i.setRenderTarget(D,x,C)};function _(b,w){const R=e.update(p);f.defines.VSM_SAMPLES!==b.blurSamples&&(f.defines.VSM_SAMPLES=b.blurSamples,m.defines.VSM_SAMPLES=b.blurSamples,f.needsUpdate=!0,m.needsUpdate=!0),b.mapPass===null&&(b.mapPass=new fi(s.x,s.y)),f.uniforms.shadow_pass.value=b.map.texture,f.uniforms.resolution.value=b.mapSize,f.uniforms.radius.value=b.radius,i.setRenderTarget(b.mapPass),i.clear(),i.renderBufferDirect(w,null,R,f,p,null),m.uniforms.shadow_pass.value=b.mapPass.texture,m.uniforms.resolution.value=b.mapSize,m.uniforms.radius.value=b.radius,i.setRenderTarget(b.map),i.clear(),i.renderBufferDirect(w,null,R,m,p,null)}function M(b,w,R,D,x,C){let N=null;const U=R.isPointLight===!0?b.customDistanceMaterial:b.customDepthMaterial;if(U!==void 0?N=U:N=R.isPointLight===!0?l:a,i.localClippingEnabled&&w.clipShadows===!0&&Array.isArray(w.clippingPlanes)&&w.clippingPlanes.length!==0||w.displacementMap&&w.displacementScale!==0||w.alphaMap&&w.alphaTest>0){const Z=N.uuid,te=w.uuid;let O=c[Z];O===void 0&&(O={},c[Z]=O);let j=O[te];j===void 0&&(j=N.clone(),O[te]=j),N=j}return N.visible=w.visible,N.wireframe=w.wireframe,C===Vs?N.side=w.shadowSide!==null?w.shadowSide:w.side:N.side=w.shadowSide!==null?w.shadowSide:h[w.side],N.alphaMap=w.alphaMap,N.alphaTest=w.alphaTest,N.clipShadows=w.clipShadows,N.clippingPlanes=w.clippingPlanes,N.clipIntersection=w.clipIntersection,N.displacementMap=w.displacementMap,N.displacementScale=w.displacementScale,N.displacementBias=w.displacementBias,N.wireframeLinewidth=w.wireframeLinewidth,N.linewidth=w.linewidth,R.isPointLight===!0&&N.isMeshDistanceMaterial===!0&&(N.referencePosition.setFromMatrixPosition(R.matrixWorld),N.nearDistance=D,N.farDistance=x),N}function T(b,w,R,D,x){if(b.visible===!1)return;if(b.layers.test(w.layers)&&(b.isMesh||b.isLine||b.isPoints)&&(b.castShadow||b.receiveShadow&&x===Vs)&&(!b.frustumCulled||n.intersectsObject(b))){b.modelViewMatrix.multiplyMatrices(R.matrixWorldInverse,b.matrixWorld);const U=e.update(b),Z=b.material;if(Array.isArray(Z)){const te=U.groups;for(let O=0,j=te.length;O<j;O++){const z=te[O],G=Z[z.materialIndex];if(G&&G.visible){const W=M(b,G,D,R.near,R.far,x);i.renderBufferDirect(R,null,U,W,b,z)}}}else if(Z.visible){const te=M(b,Z,D,R.near,R.far,x);i.renderBufferDirect(R,null,U,te,b,null)}}const N=b.children;for(let U=0,Z=N.length;U<Z;U++)T(N[U],w,R,D,x)}}function ay(i,e,t){const n=t.isWebGL2;function s(){let P=!1;const fe=new Qe;let pe=null;const be=new Qe(0,0,0,0);return{setMask:function(me){pe!==me&&!P&&(i.colorMask(me,me,me,me),pe=me)},setLocked:function(me){P=me},setClear:function(me,Se,ge,Le,qe){qe===!0&&(me*=Le,Se*=Le,ge*=Le),fe.set(me,Se,ge,Le),be.equals(fe)===!1&&(i.clearColor(me,Se,ge,Le),be.copy(fe))},reset:function(){P=!1,pe=null,be.set(-1,0,0,0)}}}function r(){let P=!1,fe=null,pe=null,be=null;return{setTest:function(me){me?we(2929):Q(2929)},setMask:function(me){fe!==me&&!P&&(i.depthMask(me),fe=me)},setFunc:function(me){if(pe!==me){if(me)switch(me){case Tm:i.depthFunc(512);break;case Em:i.depthFunc(519);break;case Am:i.depthFunc(513);break;case ga:i.depthFunc(515);break;case Cm:i.depthFunc(514);break;case Lm:i.depthFunc(518);break;case Rm:i.depthFunc(516);break;case Pm:i.depthFunc(517);break;default:i.depthFunc(515)}else i.depthFunc(515);pe=me}},setLocked:function(me){P=me},setClear:function(me){be!==me&&(i.clearDepth(me),be=me)},reset:function(){P=!1,fe=null,pe=null,be=null}}}function o(){let P=!1,fe=null,pe=null,be=null,me=null,Se=null,ge=null,Le=null,qe=null;return{setTest:function(Ye){P||(Ye?we(2960):Q(2960))},setMask:function(Ye){fe!==Ye&&!P&&(i.stencilMask(Ye),fe=Ye)},setFunc:function(Ye,wt,nn){(pe!==Ye||be!==wt||me!==nn)&&(i.stencilFunc(Ye,wt,nn),pe=Ye,be=wt,me=nn)},setOp:function(Ye,wt,nn){(Se!==Ye||ge!==wt||Le!==nn)&&(i.stencilOp(Ye,wt,nn),Se=Ye,ge=wt,Le=nn)},setLocked:function(Ye){P=Ye},setClear:function(Ye){qe!==Ye&&(i.clearStencil(Ye),qe=Ye)},reset:function(){P=!1,fe=null,pe=null,be=null,me=null,Se=null,ge=null,Le=null,qe=null}}}const a=new s,l=new r,c=new o;let u={},h={},f=new WeakMap,m=[],g=null,p=!1,d=null,_=null,M=null,T=null,b=null,w=null,R=null,D=!1,x=null,C=null,N=null,U=null,Z=null;const te=i.getParameter(35661);let O=!1,j=0;const z=i.getParameter(7938);z.indexOf("WebGL")!==-1?(j=parseFloat(/^WebGL (\d)/.exec(z)[1]),O=j>=1):z.indexOf("OpenGL ES")!==-1&&(j=parseFloat(/^OpenGL ES (\d)/.exec(z)[1]),O=j>=2);let G=null,W={};const B=i.getParameter(3088),q=i.getParameter(2978),le=new Qe().fromArray(B),ne=new Qe().fromArray(q);function de(P,fe,pe){const be=new Uint8Array(4),me=i.createTexture();i.bindTexture(P,me),i.texParameteri(P,10241,9728),i.texParameteri(P,10240,9728);for(let Se=0;Se<pe;Se++)i.texImage2D(fe+Se,0,6408,1,1,0,6408,5121,be);return me}const Me={};Me[3553]=de(3553,3553,1),Me[34067]=de(34067,34069,6),a.setClear(0,0,0,1),l.setClear(1),c.setClear(0),we(2929),l.setFunc(ga),I(!1),V(Jc),we(2884),Pe(Bn);function we(P){u[P]!==!0&&(i.enable(P),u[P]=!0)}function Q(P){u[P]!==!1&&(i.disable(P),u[P]=!1)}function je(P,fe){return h[P]!==fe?(i.bindFramebuffer(P,fe),h[P]=fe,n&&(P===36009&&(h[36160]=fe),P===36160&&(h[36009]=fe)),!0):!1}function Re(P,fe){let pe=m,be=!1;if(P)if(pe=f.get(fe),pe===void 0&&(pe=[],f.set(fe,pe)),P.isWebGLMultipleRenderTargets){const me=P.texture;if(pe.length!==me.length||pe[0]!==36064){for(let Se=0,ge=me.length;Se<ge;Se++)pe[Se]=36064+Se;pe.length=me.length,be=!0}}else pe[0]!==36064&&(pe[0]=36064,be=!0);else pe[0]!==1029&&(pe[0]=1029,be=!0);be&&(t.isWebGL2?i.drawBuffers(pe):e.get("WEBGL_draw_buffers").drawBuffersWEBGL(pe))}function Ee(P){return g!==P?(i.useProgram(P),g=P,!0):!1}const _e={[Ki]:32774,[pm]:32778,[mm]:32779};if(n)_e[su]=32775,_e[ru]=32776;else{const P=e.get("EXT_blend_minmax");P!==null&&(_e[su]=P.MIN_EXT,_e[ru]=P.MAX_EXT)}const Be={[gm]:0,[_m]:1,[xm]:768,[ou]:770,[wm]:776,[bm]:774,[ym]:772,[vm]:769,[au]:771,[Sm]:775,[Mm]:773};function Pe(P,fe,pe,be,me,Se,ge,Le){if(P===Bn){p===!0&&(Q(3042),p=!1);return}if(p===!1&&(we(3042),p=!0),P!==dm){if(P!==d||Le!==D){if((_!==Ki||b!==Ki)&&(i.blendEquation(32774),_=Ki,b=Ki),Le)switch(P){case Yi:i.blendFuncSeparate(1,771,1,771);break;case tu:i.blendFunc(1,1);break;case nu:i.blendFuncSeparate(0,769,0,1);break;case iu:i.blendFuncSeparate(0,768,0,770);break;default:console.error("THREE.WebGLState: Invalid blending: ",P);break}else switch(P){case Yi:i.blendFuncSeparate(770,771,1,771);break;case tu:i.blendFunc(770,1);break;case nu:i.blendFuncSeparate(0,769,0,1);break;case iu:i.blendFunc(0,768);break;default:console.error("THREE.WebGLState: Invalid blending: ",P);break}M=null,T=null,w=null,R=null,d=P,D=Le}return}me=me||fe,Se=Se||pe,ge=ge||be,(fe!==_||me!==b)&&(i.blendEquationSeparate(_e[fe],_e[me]),_=fe,b=me),(pe!==M||be!==T||Se!==w||ge!==R)&&(i.blendFuncSeparate(Be[pe],Be[be],Be[Se],Be[ge]),M=pe,T=be,w=Se,R=ge),d=P,D=null}function A(P,fe){P.side===zn?Q(2884):we(2884);let pe=P.side===Yt;fe&&(pe=!pe),I(pe),P.blending===Yi&&P.transparent===!1?Pe(Bn):Pe(P.blending,P.blendEquation,P.blendSrc,P.blendDst,P.blendEquationAlpha,P.blendSrcAlpha,P.blendDstAlpha,P.premultipliedAlpha),l.setFunc(P.depthFunc),l.setTest(P.depthTest),l.setMask(P.depthWrite),a.setMask(P.colorWrite);const be=P.stencilWrite;c.setTest(be),be&&(c.setMask(P.stencilWriteMask),c.setFunc(P.stencilFunc,P.stencilRef,P.stencilFuncMask),c.setOp(P.stencilFail,P.stencilZFail,P.stencilZPass)),ee(P.polygonOffset,P.polygonOffsetFactor,P.polygonOffsetUnits),P.alphaToCoverage===!0?we(32926):Q(32926)}function I(P){x!==P&&(P?i.frontFace(2304):i.frontFace(2305),x=P)}function V(P){P!==cm?(we(2884),P!==C&&(P===Jc?i.cullFace(1029):P===um?i.cullFace(1028):i.cullFace(1032))):Q(2884),C=P}function J(P){P!==N&&(O&&i.lineWidth(P),N=P)}function ee(P,fe,pe){P?(we(32823),(U!==fe||Z!==pe)&&(i.polygonOffset(fe,pe),U=fe,Z=pe)):Q(32823)}function re(P){P?we(3089):Q(3089)}function oe(P){P===void 0&&(P=33984+te-1),G!==P&&(i.activeTexture(P),G=P)}function ae(P,fe){G===null&&oe();let pe=W[G];pe===void 0&&(pe={type:void 0,texture:void 0},W[G]=pe),(pe.type!==P||pe.texture!==fe)&&(i.bindTexture(P,fe||Me[P]),pe.type=P,pe.texture=fe)}function ce(){const P=W[G];P!==void 0&&P.type!==void 0&&(i.bindTexture(P.type,null),P.type=void 0,P.texture=void 0)}function y(){try{i.compressedTexImage2D.apply(i,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function v(){try{i.texSubImage2D.apply(i,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function F(){try{i.texSubImage3D.apply(i,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function H(){try{i.compressedTexSubImage2D.apply(i,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function $(){try{i.texStorage2D.apply(i,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function se(){try{i.texStorage3D.apply(i,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function ve(){try{i.texImage2D.apply(i,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function S(){try{i.texImage3D.apply(i,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function Y(P){le.equals(P)===!1&&(i.scissor(P.x,P.y,P.z,P.w),le.copy(P))}function ue(P){ne.equals(P)===!1&&(i.viewport(P.x,P.y,P.z,P.w),ne.copy(P))}function he(){i.disable(3042),i.disable(2884),i.disable(2929),i.disable(32823),i.disable(3089),i.disable(2960),i.disable(32926),i.blendEquation(32774),i.blendFunc(1,0),i.blendFuncSeparate(1,0,1,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(513),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(519,0,4294967295),i.stencilOp(7680,7680,7680),i.clearStencil(0),i.cullFace(1029),i.frontFace(2305),i.polygonOffset(0,0),i.activeTexture(33984),i.bindFramebuffer(36160,null),n===!0&&(i.bindFramebuffer(36009,null),i.bindFramebuffer(36008,null)),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),u={},G=null,W={},h={},f=new WeakMap,m=[],g=null,p=!1,d=null,_=null,M=null,T=null,b=null,w=null,R=null,D=!1,x=null,C=null,N=null,U=null,Z=null,le.set(0,0,i.canvas.width,i.canvas.height),ne.set(0,0,i.canvas.width,i.canvas.height),a.reset(),l.reset(),c.reset()}return{buffers:{color:a,depth:l,stencil:c},enable:we,disable:Q,bindFramebuffer:je,drawBuffers:Re,useProgram:Ee,setBlending:Pe,setMaterial:A,setFlipSided:I,setCullFace:V,setLineWidth:J,setPolygonOffset:ee,setScissorTest:re,activeTexture:oe,bindTexture:ae,unbindTexture:ce,compressedTexImage2D:y,texImage2D:ve,texImage3D:S,texStorage2D:$,texStorage3D:se,texSubImage2D:v,texSubImage3D:F,compressedTexSubImage2D:H,scissor:Y,viewport:ue,reset:he}}function ly(i,e,t,n,s,r,o){const a=s.isWebGL2,l=s.maxTextures,c=s.maxCubemapSize,u=s.maxTextureSize,h=s.maxSamples,f=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,m=/OculusBrowser/g.test(navigator.userAgent),g=new WeakMap;let p;const d=new WeakMap;let _=!1;try{_=typeof OffscreenCanvas!="undefined"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function M(y,v){return _?new OffscreenCanvas(y,v):Ys("canvas")}function T(y,v,F,H){let $=1;if((y.width>H||y.height>H)&&($=H/Math.max(y.width,y.height)),$<1||v===!0)if(typeof HTMLImageElement!="undefined"&&y instanceof HTMLImageElement||typeof HTMLCanvasElement!="undefined"&&y instanceof HTMLCanvasElement||typeof ImageBitmap!="undefined"&&y instanceof ImageBitmap){const se=v?zr:Math.floor,ve=se($*y.width),S=se($*y.height);p===void 0&&(p=M(ve,S));const Y=F?M(ve,S):p;return Y.width=ve,Y.height=S,Y.getContext("2d").drawImage(y,0,0,ve,S),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+y.width+"x"+y.height+") to ("+ve+"x"+S+")."),Y}else return"data"in y&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+y.width+"x"+y.height+")."),y;return y}function b(y){return Ia(y.width)&&Ia(y.height)}function w(y){return a?!1:y.wrapS!==Ht||y.wrapT!==Ht||y.minFilter!==pt&&y.minFilter!==xt}function R(y,v){return y.generateMipmaps&&v&&y.minFilter!==pt&&y.minFilter!==xt}function D(y){i.generateMipmap(y)}function x(y,v,F,H,$=!1){if(a===!1)return v;if(y!==null){if(i[y]!==void 0)return i[y];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+y+"'")}let se=v;return v===6403&&(F===5126&&(se=33326),F===5131&&(se=33325),F===5121&&(se=33321)),v===33319&&(F===5126&&(se=33328),F===5131&&(se=33327),F===5121&&(se=33323)),v===6408&&(F===5126&&(se=34836),F===5131&&(se=34842),F===5121&&(se=H===Ze&&$===!1?35907:32856),F===32819&&(se=32854),F===32820&&(se=32855)),(se===33325||se===33326||se===33327||se===33328||se===34842||se===34836)&&e.get("EXT_color_buffer_float"),se}function C(y,v,F){return R(y,F)===!0||y.isFramebufferTexture&&y.minFilter!==pt&&y.minFilter!==xt?Math.log2(Math.max(v.width,v.height))+1:y.mipmaps!==void 0&&y.mipmaps.length>0?y.mipmaps.length:y.isCompressedTexture&&Array.isArray(y.image)?v.mipmaps.length:1}function N(y){return y===pt||y===ya||y===Ma?9728:9729}function U(y){const v=y.target;v.removeEventListener("dispose",U),te(v),v.isVideoTexture&&g.delete(v)}function Z(y){const v=y.target;v.removeEventListener("dispose",Z),j(v)}function te(y){const v=n.get(y);if(v.__webglInit===void 0)return;const F=y.source,H=d.get(F);if(H){const $=H[v.__cacheKey];$.usedTimes--,$.usedTimes===0&&O(y),Object.keys(H).length===0&&d.delete(F)}n.remove(y)}function O(y){const v=n.get(y);i.deleteTexture(v.__webglTexture);const F=y.source,H=d.get(F);delete H[v.__cacheKey],o.memory.textures--}function j(y){const v=y.texture,F=n.get(y),H=n.get(v);if(H.__webglTexture!==void 0&&(i.deleteTexture(H.__webglTexture),o.memory.textures--),y.depthTexture&&y.depthTexture.dispose(),y.isWebGLCubeRenderTarget)for(let $=0;$<6;$++)i.deleteFramebuffer(F.__webglFramebuffer[$]),F.__webglDepthbuffer&&i.deleteRenderbuffer(F.__webglDepthbuffer[$]);else{if(i.deleteFramebuffer(F.__webglFramebuffer),F.__webglDepthbuffer&&i.deleteRenderbuffer(F.__webglDepthbuffer),F.__webglMultisampledFramebuffer&&i.deleteFramebuffer(F.__webglMultisampledFramebuffer),F.__webglColorRenderbuffer)for(let $=0;$<F.__webglColorRenderbuffer.length;$++)F.__webglColorRenderbuffer[$]&&i.deleteRenderbuffer(F.__webglColorRenderbuffer[$]);F.__webglDepthRenderbuffer&&i.deleteRenderbuffer(F.__webglDepthRenderbuffer)}if(y.isWebGLMultipleRenderTargets)for(let $=0,se=v.length;$<se;$++){const ve=n.get(v[$]);ve.__webglTexture&&(i.deleteTexture(ve.__webglTexture),o.memory.textures--),n.remove(v[$])}n.remove(v),n.remove(y)}let z=0;function G(){z=0}function W(){const y=z;return y>=l&&console.warn("THREE.WebGLTextures: Trying to use "+y+" texture units while this GPU supports only "+l),z+=1,y}function B(y){const v=[];return v.push(y.wrapS),v.push(y.wrapT),v.push(y.magFilter),v.push(y.minFilter),v.push(y.anisotropy),v.push(y.internalFormat),v.push(y.format),v.push(y.type),v.push(y.generateMipmaps),v.push(y.premultiplyAlpha),v.push(y.flipY),v.push(y.unpackAlignment),v.push(y.encoding),v.join()}function q(y,v){const F=n.get(y);if(y.isVideoTexture&&ae(y),y.isRenderTargetTexture===!1&&y.version>0&&F.__version!==y.version){const H=y.image;if(H===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(H.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{Re(F,y,v);return}}t.activeTexture(33984+v),t.bindTexture(3553,F.__webglTexture)}function le(y,v){const F=n.get(y);if(y.version>0&&F.__version!==y.version){Re(F,y,v);return}t.activeTexture(33984+v),t.bindTexture(35866,F.__webglTexture)}function ne(y,v){const F=n.get(y);if(y.version>0&&F.__version!==y.version){Re(F,y,v);return}t.activeTexture(33984+v),t.bindTexture(32879,F.__webglTexture)}function de(y,v){const F=n.get(y);if(y.version>0&&F.__version!==y.version){Ee(F,y,v);return}t.activeTexture(33984+v),t.bindTexture(34067,F.__webglTexture)}const Me={[Qi]:10497,[Ht]:33071,[Ur]:33648},we={[pt]:9728,[ya]:9984,[Ma]:9986,[xt]:9729,[cu]:9985,[Ji]:9987};function Q(y,v,F){if(F?(i.texParameteri(y,10242,Me[v.wrapS]),i.texParameteri(y,10243,Me[v.wrapT]),(y===32879||y===35866)&&i.texParameteri(y,32882,Me[v.wrapR]),i.texParameteri(y,10240,we[v.magFilter]),i.texParameteri(y,10241,we[v.minFilter])):(i.texParameteri(y,10242,33071),i.texParameteri(y,10243,33071),(y===32879||y===35866)&&i.texParameteri(y,32882,33071),(v.wrapS!==Ht||v.wrapT!==Ht)&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),i.texParameteri(y,10240,N(v.magFilter)),i.texParameteri(y,10241,N(v.minFilter)),v.minFilter!==pt&&v.minFilter!==xt&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),e.has("EXT_texture_filter_anisotropic")===!0){const H=e.get("EXT_texture_filter_anisotropic");if(v.type===kn&&e.has("OES_texture_float_linear")===!1||a===!1&&v.type===Gs&&e.has("OES_texture_half_float_linear")===!1)return;(v.anisotropy>1||n.get(v).__currentAnisotropy)&&(i.texParameterf(y,H.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(v.anisotropy,s.getMaxAnisotropy())),n.get(v).__currentAnisotropy=v.anisotropy)}}function je(y,v){let F=!1;y.__webglInit===void 0&&(y.__webglInit=!0,v.addEventListener("dispose",U));const H=v.source;let $=d.get(H);$===void 0&&($={},d.set(H,$));const se=B(v);if(se!==y.__cacheKey){$[se]===void 0&&($[se]={texture:i.createTexture(),usedTimes:0},o.memory.textures++,F=!0),$[se].usedTimes++;const ve=$[y.__cacheKey];ve!==void 0&&($[y.__cacheKey].usedTimes--,ve.usedTimes===0&&O(v)),y.__cacheKey=se,y.__webglTexture=$[se].texture}return F}function Re(y,v,F){let H=3553;v.isDataArrayTexture&&(H=35866),v.isData3DTexture&&(H=32879);const $=je(y,v),se=v.source;if(t.activeTexture(33984+F),t.bindTexture(H,y.__webglTexture),se.version!==se.__currentVersion||$===!0){i.pixelStorei(37440,v.flipY),i.pixelStorei(37441,v.premultiplyAlpha),i.pixelStorei(3317,v.unpackAlignment),i.pixelStorei(37443,0);const ve=w(v)&&b(v.image)===!1;let S=T(v.image,ve,!1,u);S=ce(v,S);const Y=b(S)||a,ue=r.convert(v.format,v.encoding);let he=r.convert(v.type),P=x(v.internalFormat,ue,he,v.encoding,v.isVideoTexture);Q(H,v,Y);let fe;const pe=v.mipmaps,be=a&&v.isVideoTexture!==!0,me=se.__currentVersion===void 0||$===!0,Se=C(v,S,Y);if(v.isDepthTexture)P=6402,a?v.type===kn?P=36012:v.type===oi?P=33190:v.type===es?P=35056:P=33189:v.type===kn&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),v.format===ai&&P===6402&&v.type!==uu&&v.type!==oi&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),v.type=oi,he=r.convert(v.type)),v.format===ts&&P===6402&&(P=34041,v.type!==es&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),v.type=es,he=r.convert(v.type))),me&&(be?t.texStorage2D(3553,1,P,S.width,S.height):t.texImage2D(3553,0,P,S.width,S.height,0,ue,he,null));else if(v.isDataTexture)if(pe.length>0&&Y){be&&me&&t.texStorage2D(3553,Se,P,pe[0].width,pe[0].height);for(let ge=0,Le=pe.length;ge<Le;ge++)fe=pe[ge],be?t.texSubImage2D(3553,ge,0,0,fe.width,fe.height,ue,he,fe.data):t.texImage2D(3553,ge,P,fe.width,fe.height,0,ue,he,fe.data);v.generateMipmaps=!1}else be?(me&&t.texStorage2D(3553,Se,P,S.width,S.height),t.texSubImage2D(3553,0,0,0,S.width,S.height,ue,he,S.data)):t.texImage2D(3553,0,P,S.width,S.height,0,ue,he,S.data);else if(v.isCompressedTexture){be&&me&&t.texStorage2D(3553,Se,P,pe[0].width,pe[0].height);for(let ge=0,Le=pe.length;ge<Le;ge++)fe=pe[ge],v.format!==Kt?ue!==null?be?t.compressedTexSubImage2D(3553,ge,0,0,fe.width,fe.height,ue,fe.data):t.compressedTexImage2D(3553,ge,P,fe.width,fe.height,0,fe.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):be?t.texSubImage2D(3553,ge,0,0,fe.width,fe.height,ue,he,fe.data):t.texImage2D(3553,ge,P,fe.width,fe.height,0,ue,he,fe.data)}else if(v.isDataArrayTexture)be?(me&&t.texStorage3D(35866,Se,P,S.width,S.height,S.depth),t.texSubImage3D(35866,0,0,0,0,S.width,S.height,S.depth,ue,he,S.data)):t.texImage3D(35866,0,P,S.width,S.height,S.depth,0,ue,he,S.data);else if(v.isData3DTexture)be?(me&&t.texStorage3D(32879,Se,P,S.width,S.height,S.depth),t.texSubImage3D(32879,0,0,0,0,S.width,S.height,S.depth,ue,he,S.data)):t.texImage3D(32879,0,P,S.width,S.height,S.depth,0,ue,he,S.data);else if(v.isFramebufferTexture){if(me)if(be)t.texStorage2D(3553,Se,P,S.width,S.height);else{let ge=S.width,Le=S.height;for(let qe=0;qe<Se;qe++)t.texImage2D(3553,qe,P,ge,Le,0,ue,he,null),ge>>=1,Le>>=1}}else if(pe.length>0&&Y){be&&me&&t.texStorage2D(3553,Se,P,pe[0].width,pe[0].height);for(let ge=0,Le=pe.length;ge<Le;ge++)fe=pe[ge],be?t.texSubImage2D(3553,ge,0,0,ue,he,fe):t.texImage2D(3553,ge,P,ue,he,fe);v.generateMipmaps=!1}else be?(me&&t.texStorage2D(3553,Se,P,S.width,S.height),t.texSubImage2D(3553,0,0,0,ue,he,S)):t.texImage2D(3553,0,P,ue,he,S);R(v,Y)&&D(H),se.__currentVersion=se.version,v.onUpdate&&v.onUpdate(v)}y.__version=v.version}function Ee(y,v,F){if(v.image.length!==6)return;const H=je(y,v),$=v.source;if(t.activeTexture(33984+F),t.bindTexture(34067,y.__webglTexture),$.version!==$.__currentVersion||H===!0){i.pixelStorei(37440,v.flipY),i.pixelStorei(37441,v.premultiplyAlpha),i.pixelStorei(3317,v.unpackAlignment),i.pixelStorei(37443,0);const se=v.isCompressedTexture||v.image[0].isCompressedTexture,ve=v.image[0]&&v.image[0].isDataTexture,S=[];for(let ge=0;ge<6;ge++)!se&&!ve?S[ge]=T(v.image[ge],!1,!0,c):S[ge]=ve?v.image[ge].image:v.image[ge],S[ge]=ce(v,S[ge]);const Y=S[0],ue=b(Y)||a,he=r.convert(v.format,v.encoding),P=r.convert(v.type),fe=x(v.internalFormat,he,P,v.encoding),pe=a&&v.isVideoTexture!==!0,be=$.__currentVersion===void 0||H===!0;let me=C(v,Y,ue);Q(34067,v,ue);let Se;if(se){pe&&be&&t.texStorage2D(34067,me,fe,Y.width,Y.height);for(let ge=0;ge<6;ge++){Se=S[ge].mipmaps;for(let Le=0;Le<Se.length;Le++){const qe=Se[Le];v.format!==Kt?he!==null?pe?t.compressedTexSubImage2D(34069+ge,Le,0,0,qe.width,qe.height,he,qe.data):t.compressedTexImage2D(34069+ge,Le,fe,qe.width,qe.height,0,qe.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):pe?t.texSubImage2D(34069+ge,Le,0,0,qe.width,qe.height,he,P,qe.data):t.texImage2D(34069+ge,Le,fe,qe.width,qe.height,0,he,P,qe.data)}}}else{Se=v.mipmaps,pe&&be&&(Se.length>0&&me++,t.texStorage2D(34067,me,fe,S[0].width,S[0].height));for(let ge=0;ge<6;ge++)if(ve){pe?t.texSubImage2D(34069+ge,0,0,0,S[ge].width,S[ge].height,he,P,S[ge].data):t.texImage2D(34069+ge,0,fe,S[ge].width,S[ge].height,0,he,P,S[ge].data);for(let Le=0;Le<Se.length;Le++){const Ye=Se[Le].image[ge].image;pe?t.texSubImage2D(34069+ge,Le+1,0,0,Ye.width,Ye.height,he,P,Ye.data):t.texImage2D(34069+ge,Le+1,fe,Ye.width,Ye.height,0,he,P,Ye.data)}}else{pe?t.texSubImage2D(34069+ge,0,0,0,he,P,S[ge]):t.texImage2D(34069+ge,0,fe,he,P,S[ge]);for(let Le=0;Le<Se.length;Le++){const qe=Se[Le];pe?t.texSubImage2D(34069+ge,Le+1,0,0,he,P,qe.image[ge]):t.texImage2D(34069+ge,Le+1,fe,he,P,qe.image[ge])}}}R(v,ue)&&D(34067),$.__currentVersion=$.version,v.onUpdate&&v.onUpdate(v)}y.__version=v.version}function _e(y,v,F,H,$){const se=r.convert(F.format,F.encoding),ve=r.convert(F.type),S=x(F.internalFormat,se,ve,F.encoding);n.get(v).__hasExternalTextures||($===32879||$===35866?t.texImage3D($,0,S,v.width,v.height,v.depth,0,se,ve,null):t.texImage2D($,0,S,v.width,v.height,0,se,ve,null)),t.bindFramebuffer(36160,y),oe(v)?f.framebufferTexture2DMultisampleEXT(36160,H,$,n.get(F).__webglTexture,0,re(v)):i.framebufferTexture2D(36160,H,$,n.get(F).__webglTexture,0),t.bindFramebuffer(36160,null)}function Be(y,v,F){if(i.bindRenderbuffer(36161,y),v.depthBuffer&&!v.stencilBuffer){let H=33189;if(F||oe(v)){const $=v.depthTexture;$&&$.isDepthTexture&&($.type===kn?H=36012:$.type===oi&&(H=33190));const se=re(v);oe(v)?f.renderbufferStorageMultisampleEXT(36161,se,H,v.width,v.height):i.renderbufferStorageMultisample(36161,se,H,v.width,v.height)}else i.renderbufferStorage(36161,H,v.width,v.height);i.framebufferRenderbuffer(36160,36096,36161,y)}else if(v.depthBuffer&&v.stencilBuffer){const H=re(v);F&&oe(v)===!1?i.renderbufferStorageMultisample(36161,H,35056,v.width,v.height):oe(v)?f.renderbufferStorageMultisampleEXT(36161,H,35056,v.width,v.height):i.renderbufferStorage(36161,34041,v.width,v.height),i.framebufferRenderbuffer(36160,33306,36161,y)}else{const H=v.isWebGLMultipleRenderTargets===!0?v.texture:[v.texture];for(let $=0;$<H.length;$++){const se=H[$],ve=r.convert(se.format,se.encoding),S=r.convert(se.type),Y=x(se.internalFormat,ve,S,se.encoding),ue=re(v);F&&oe(v)===!1?i.renderbufferStorageMultisample(36161,ue,Y,v.width,v.height):oe(v)?f.renderbufferStorageMultisampleEXT(36161,ue,Y,v.width,v.height):i.renderbufferStorage(36161,Y,v.width,v.height)}}i.bindRenderbuffer(36161,null)}function Pe(y,v){if(v&&v.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(36160,y),!(v.depthTexture&&v.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!n.get(v.depthTexture).__webglTexture||v.depthTexture.image.width!==v.width||v.depthTexture.image.height!==v.height)&&(v.depthTexture.image.width=v.width,v.depthTexture.image.height=v.height,v.depthTexture.needsUpdate=!0),q(v.depthTexture,0);const H=n.get(v.depthTexture).__webglTexture,$=re(v);if(v.depthTexture.format===ai)oe(v)?f.framebufferTexture2DMultisampleEXT(36160,36096,3553,H,0,$):i.framebufferTexture2D(36160,36096,3553,H,0);else if(v.depthTexture.format===ts)oe(v)?f.framebufferTexture2DMultisampleEXT(36160,33306,3553,H,0,$):i.framebufferTexture2D(36160,33306,3553,H,0);else throw new Error("Unknown depthTexture format")}function A(y){const v=n.get(y),F=y.isWebGLCubeRenderTarget===!0;if(y.depthTexture&&!v.__autoAllocateDepthBuffer){if(F)throw new Error("target.depthTexture not supported in Cube render targets");Pe(v.__webglFramebuffer,y)}else if(F){v.__webglDepthbuffer=[];for(let H=0;H<6;H++)t.bindFramebuffer(36160,v.__webglFramebuffer[H]),v.__webglDepthbuffer[H]=i.createRenderbuffer(),Be(v.__webglDepthbuffer[H],y,!1)}else t.bindFramebuffer(36160,v.__webglFramebuffer),v.__webglDepthbuffer=i.createRenderbuffer(),Be(v.__webglDepthbuffer,y,!1);t.bindFramebuffer(36160,null)}function I(y,v,F){const H=n.get(y);v!==void 0&&_e(H.__webglFramebuffer,y,y.texture,36064,3553),F!==void 0&&A(y)}function V(y){const v=y.texture,F=n.get(y),H=n.get(v);y.addEventListener("dispose",Z),y.isWebGLMultipleRenderTargets!==!0&&(H.__webglTexture===void 0&&(H.__webglTexture=i.createTexture()),H.__version=v.version,o.memory.textures++);const $=y.isWebGLCubeRenderTarget===!0,se=y.isWebGLMultipleRenderTargets===!0,ve=b(y)||a;if($){F.__webglFramebuffer=[];for(let S=0;S<6;S++)F.__webglFramebuffer[S]=i.createFramebuffer()}else{if(F.__webglFramebuffer=i.createFramebuffer(),se)if(s.drawBuffers){const S=y.texture;for(let Y=0,ue=S.length;Y<ue;Y++){const he=n.get(S[Y]);he.__webglTexture===void 0&&(he.__webglTexture=i.createTexture(),o.memory.textures++)}}else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");if(a&&y.samples>0&&oe(y)===!1){const S=se?v:[v];F.__webglMultisampledFramebuffer=i.createFramebuffer(),F.__webglColorRenderbuffer=[],t.bindFramebuffer(36160,F.__webglMultisampledFramebuffer);for(let Y=0;Y<S.length;Y++){const ue=S[Y];F.__webglColorRenderbuffer[Y]=i.createRenderbuffer(),i.bindRenderbuffer(36161,F.__webglColorRenderbuffer[Y]);const he=r.convert(ue.format,ue.encoding),P=r.convert(ue.type),fe=x(ue.internalFormat,he,P,ue.encoding),pe=re(y);i.renderbufferStorageMultisample(36161,pe,fe,y.width,y.height),i.framebufferRenderbuffer(36160,36064+Y,36161,F.__webglColorRenderbuffer[Y])}i.bindRenderbuffer(36161,null),y.depthBuffer&&(F.__webglDepthRenderbuffer=i.createRenderbuffer(),Be(F.__webglDepthRenderbuffer,y,!0)),t.bindFramebuffer(36160,null)}}if($){t.bindTexture(34067,H.__webglTexture),Q(34067,v,ve);for(let S=0;S<6;S++)_e(F.__webglFramebuffer[S],y,v,36064,34069+S);R(v,ve)&&D(34067),t.unbindTexture()}else if(se){const S=y.texture;for(let Y=0,ue=S.length;Y<ue;Y++){const he=S[Y],P=n.get(he);t.bindTexture(3553,P.__webglTexture),Q(3553,he,ve),_e(F.__webglFramebuffer,y,he,36064+Y,3553),R(he,ve)&&D(3553)}t.unbindTexture()}else{let S=3553;(y.isWebGL3DRenderTarget||y.isWebGLArrayRenderTarget)&&(a?S=y.isWebGL3DRenderTarget?32879:35866:console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")),t.bindTexture(S,H.__webglTexture),Q(S,v,ve),_e(F.__webglFramebuffer,y,v,36064,S),R(v,ve)&&D(S),t.unbindTexture()}y.depthBuffer&&A(y)}function J(y){const v=b(y)||a,F=y.isWebGLMultipleRenderTargets===!0?y.texture:[y.texture];for(let H=0,$=F.length;H<$;H++){const se=F[H];if(R(se,v)){const ve=y.isWebGLCubeRenderTarget?34067:3553,S=n.get(se).__webglTexture;t.bindTexture(ve,S),D(ve),t.unbindTexture()}}}function ee(y){if(a&&y.samples>0&&oe(y)===!1){const v=y.isWebGLMultipleRenderTargets?y.texture:[y.texture],F=y.width,H=y.height;let $=16384;const se=[],ve=y.stencilBuffer?33306:36096,S=n.get(y),Y=y.isWebGLMultipleRenderTargets===!0;if(Y)for(let ue=0;ue<v.length;ue++)t.bindFramebuffer(36160,S.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(36160,36064+ue,36161,null),t.bindFramebuffer(36160,S.__webglFramebuffer),i.framebufferTexture2D(36009,36064+ue,3553,null,0);t.bindFramebuffer(36008,S.__webglMultisampledFramebuffer),t.bindFramebuffer(36009,S.__webglFramebuffer);for(let ue=0;ue<v.length;ue++){se.push(36064+ue),y.depthBuffer&&se.push(ve);const he=S.__ignoreDepthValues!==void 0?S.__ignoreDepthValues:!1;if(he===!1&&(y.depthBuffer&&($|=256),y.stencilBuffer&&($|=1024)),Y&&i.framebufferRenderbuffer(36008,36064,36161,S.__webglColorRenderbuffer[ue]),he===!0&&(i.invalidateFramebuffer(36008,[ve]),i.invalidateFramebuffer(36009,[ve])),Y){const P=n.get(v[ue]).__webglTexture;i.framebufferTexture2D(36009,36064,3553,P,0)}i.blitFramebuffer(0,0,F,H,0,0,F,H,$,9728),m&&i.invalidateFramebuffer(36008,se)}if(t.bindFramebuffer(36008,null),t.bindFramebuffer(36009,null),Y)for(let ue=0;ue<v.length;ue++){t.bindFramebuffer(36160,S.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(36160,36064+ue,36161,S.__webglColorRenderbuffer[ue]);const he=n.get(v[ue]).__webglTexture;t.bindFramebuffer(36160,S.__webglFramebuffer),i.framebufferTexture2D(36009,36064+ue,3553,he,0)}t.bindFramebuffer(36009,S.__webglMultisampledFramebuffer)}}function re(y){return Math.min(h,y.samples)}function oe(y){const v=n.get(y);return a&&y.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&v.__useRenderToTexture!==!1}function ae(y){const v=o.render.frame;g.get(y)!==v&&(g.set(y,v),y.update())}function ce(y,v){const F=y.encoding,H=y.format,$=y.type;return y.isCompressedTexture===!0||y.isVideoTexture===!0||y.format===Ra||F!==li&&(F===Ze?a===!1?e.has("EXT_sRGB")===!0&&H===Kt?(y.format=Ra,y.minFilter=xt,y.generateMipmaps=!1):v=Hu.sRGBToLinear(v):(H!==Kt||$!==ri)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture encoding:",F)),v}this.allocateTextureUnit=W,this.resetTextureUnits=G,this.setTexture2D=q,this.setTexture2DArray=le,this.setTexture3D=ne,this.setTextureCube=de,this.rebindTextures=I,this.setupRenderTarget=V,this.updateRenderTargetMipmap=J,this.updateMultisampleRenderTarget=ee,this.setupDepthRenderbuffer=A,this.setupFrameBufferTexture=_e,this.useMultisampledRTT=oe}function cy(i,e,t){const n=t.isWebGL2;function s(r,o=null){let a;if(r===ri)return 5121;if(r===Vm)return 32819;if(r===Gm)return 32820;if(r===Bm)return 5120;if(r===km)return 5122;if(r===uu)return 5123;if(r===Hm)return 5124;if(r===oi)return 5125;if(r===kn)return 5126;if(r===Gs)return n?5131:(a=e.get("OES_texture_half_float"),a!==null?a.HALF_FLOAT_OES:null);if(r===Wm)return 6406;if(r===Kt)return 6408;if(r===Xm)return 6409;if(r===qm)return 6410;if(r===ai)return 6402;if(r===ts)return 34041;if(r===Ym)return 6403;if(r===jm)return console.warn("THREE.WebGLRenderer: THREE.RGBFormat has been removed. Use THREE.RGBAFormat instead. https://github.com/mrdoob/three.js/pull/23228"),6408;if(r===Ra)return a=e.get("EXT_sRGB"),a!==null?a.SRGB_ALPHA_EXT:null;if(r===Km)return 36244;if(r===Zm)return 33319;if(r===$m)return 33320;if(r===Qm)return 36249;if(r===ba||r===Sa||r===wa||r===Ta)if(o===Ze)if(a=e.get("WEBGL_compressed_texture_s3tc_srgb"),a!==null){if(r===ba)return a.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(r===Sa)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(r===wa)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(r===Ta)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(a=e.get("WEBGL_compressed_texture_s3tc"),a!==null){if(r===ba)return a.COMPRESSED_RGB_S3TC_DXT1_EXT;if(r===Sa)return a.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(r===wa)return a.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(r===Ta)return a.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(r===hu||r===fu||r===du||r===pu)if(a=e.get("WEBGL_compressed_texture_pvrtc"),a!==null){if(r===hu)return a.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(r===fu)return a.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(r===du)return a.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(r===pu)return a.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(r===Jm)return a=e.get("WEBGL_compressed_texture_etc1"),a!==null?a.COMPRESSED_RGB_ETC1_WEBGL:null;if(r===mu||r===gu)if(a=e.get("WEBGL_compressed_texture_etc"),a!==null){if(r===mu)return o===Ze?a.COMPRESSED_SRGB8_ETC2:a.COMPRESSED_RGB8_ETC2;if(r===gu)return o===Ze?a.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:a.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(r===_u||r===xu||r===vu||r===yu||r===Mu||r===bu||r===Su||r===wu||r===Tu||r===Eu||r===Au||r===Cu||r===Lu||r===Ru)if(a=e.get("WEBGL_compressed_texture_astc"),a!==null){if(r===_u)return o===Ze?a.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:a.COMPRESSED_RGBA_ASTC_4x4_KHR;if(r===xu)return o===Ze?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:a.COMPRESSED_RGBA_ASTC_5x4_KHR;if(r===vu)return o===Ze?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:a.COMPRESSED_RGBA_ASTC_5x5_KHR;if(r===yu)return o===Ze?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:a.COMPRESSED_RGBA_ASTC_6x5_KHR;if(r===Mu)return o===Ze?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:a.COMPRESSED_RGBA_ASTC_6x6_KHR;if(r===bu)return o===Ze?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:a.COMPRESSED_RGBA_ASTC_8x5_KHR;if(r===Su)return o===Ze?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:a.COMPRESSED_RGBA_ASTC_8x6_KHR;if(r===wu)return o===Ze?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:a.COMPRESSED_RGBA_ASTC_8x8_KHR;if(r===Tu)return o===Ze?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:a.COMPRESSED_RGBA_ASTC_10x5_KHR;if(r===Eu)return o===Ze?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:a.COMPRESSED_RGBA_ASTC_10x6_KHR;if(r===Au)return o===Ze?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:a.COMPRESSED_RGBA_ASTC_10x8_KHR;if(r===Cu)return o===Ze?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:a.COMPRESSED_RGBA_ASTC_10x10_KHR;if(r===Lu)return o===Ze?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:a.COMPRESSED_RGBA_ASTC_12x10_KHR;if(r===Ru)return o===Ze?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:a.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(r===Pu)if(a=e.get("EXT_texture_compression_bptc"),a!==null){if(r===Pu)return o===Ze?a.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:a.COMPRESSED_RGBA_BPTC_UNORM_EXT}else return null;return r===es?n?34042:(a=e.get("WEBGL_depth_texture"),a!==null?a.UNSIGNED_INT_24_8_WEBGL:null):i[r]!==void 0?i[r]:null}return{convert:s}}class uy extends Dt{constructor(e=[]){super();this.isArrayCamera=!0,this.cameras=e}}class yi extends tt{constructor(){super();this.isGroup=!0,this.type="Group"}}const hy={type:"move"};class ul{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new yi,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new yi,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new L,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new L),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new yi,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new L,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new L),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let s=null,r=null,o=null;const a=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){o=!0;for(const p of e.hand.values()){const d=t.getJointPose(p,n);if(c.joints[p.jointName]===void 0){const M=new yi;M.matrixAutoUpdate=!1,M.visible=!1,c.joints[p.jointName]=M,c.add(M)}const _=c.joints[p.jointName];d!==null&&(_.matrix.fromArray(d.transform.matrix),_.matrix.decompose(_.position,_.rotation,_.scale),_.jointRadius=d.radius),_.visible=d!==null}const u=c.joints["index-finger-tip"],h=c.joints["thumb-tip"],f=u.position.distanceTo(h.position),m=.02,g=.005;c.inputState.pinching&&f>m+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&f<=m-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(r=t.getPose(e.gripSpace,n),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(s=t.getPose(e.targetRaySpace,n),s===null&&r!==null&&(s=r),s!==null&&(a.matrix.fromArray(s.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),s.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(s.linearVelocity)):a.hasLinearVelocity=!1,s.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(s.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(hy)))}return a!==null&&(a.visible=s!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=o!==null),this}}class fy extends Mt{constructor(e,t,n,s,r,o,a,l,c,u){if(u=u!==void 0?u:ai,u!==ai&&u!==ts)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&u===ai&&(n=oi),n===void 0&&u===ts&&(n=es);super(null,s,r,o,a,l,u,n,c);this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=a!==void 0?a:pt,this.minFilter=l!==void 0?l:pt,this.flipY=!1,this.generateMipmaps=!1}}class dy extends ui{constructor(e,t){super();const n=this;let s=null,r=1,o=null,a="local-floor",l=null,c=null,u=null,h=null,f=null,m=null;const g=t.getContextAttributes();let p=null,d=null;const _=[],M=[],T=new Dt;T.layers.enable(1),T.viewport=new Qe;const b=new Dt;b.layers.enable(2),b.viewport=new Qe;const w=[T,b],R=new uy;R.layers.enable(1),R.layers.enable(2);let D=null,x=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(B){let q=_[B];return q===void 0&&(q=new ul,_[B]=q),q.getTargetRaySpace()},this.getControllerGrip=function(B){let q=_[B];return q===void 0&&(q=new ul,_[B]=q),q.getGripSpace()},this.getHand=function(B){let q=_[B];return q===void 0&&(q=new ul,_[B]=q),q.getHandSpace()};function C(B){const q=M.indexOf(B.inputSource);if(q===-1)return;const le=_[q];le!==void 0&&le.dispatchEvent({type:B.type,data:B.inputSource})}function N(){s.removeEventListener("select",C),s.removeEventListener("selectstart",C),s.removeEventListener("selectend",C),s.removeEventListener("squeeze",C),s.removeEventListener("squeezestart",C),s.removeEventListener("squeezeend",C),s.removeEventListener("end",N),s.removeEventListener("inputsourceschange",U);for(let B=0;B<_.length;B++){const q=M[B];q!==null&&(M[B]=null,_[B].disconnect(q))}D=null,x=null,e.setRenderTarget(p),f=null,h=null,u=null,s=null,d=null,W.stop(),n.isPresenting=!1,n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(B){r=B,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(B){a=B,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||o},this.setReferenceSpace=function(B){l=B},this.getBaseLayer=function(){return h!==null?h:f},this.getBinding=function(){return u},this.getFrame=function(){return m},this.getSession=function(){return s},this.setSession=async function(B){if(s=B,s!==null){if(p=e.getRenderTarget(),s.addEventListener("select",C),s.addEventListener("selectstart",C),s.addEventListener("selectend",C),s.addEventListener("squeeze",C),s.addEventListener("squeezestart",C),s.addEventListener("squeezeend",C),s.addEventListener("end",N),s.addEventListener("inputsourceschange",U),g.xrCompatible!==!0&&await t.makeXRCompatible(),s.renderState.layers===void 0||e.capabilities.isWebGL2===!1){const q={antialias:s.renderState.layers===void 0?g.antialias:!0,alpha:g.alpha,depth:g.depth,stencil:g.stencil,framebufferScaleFactor:r};f=new XRWebGLLayer(s,t,q),s.updateRenderState({baseLayer:f}),d=new fi(f.framebufferWidth,f.framebufferHeight,{format:Kt,type:ri,encoding:e.outputEncoding})}else{let q=null,le=null,ne=null;g.depth&&(ne=g.stencil?35056:33190,q=g.stencil?ts:ai,le=g.stencil?es:oi);const de={colorFormat:32856,depthFormat:ne,scaleFactor:r};u=new XRWebGLBinding(s,t),h=u.createProjectionLayer(de),s.updateRenderState({layers:[h]}),d=new fi(h.textureWidth,h.textureHeight,{format:Kt,type:ri,depthTexture:new fy(h.textureWidth,h.textureHeight,le,void 0,void 0,void 0,void 0,void 0,void 0,q),stencilBuffer:g.stencil,encoding:e.outputEncoding,samples:g.antialias?4:0});const Me=e.properties.get(d);Me.__ignoreDepthValues=h.ignoreDepthValues}d.isXRRenderTarget=!0,this.setFoveation(1),l=null,o=await s.requestReferenceSpace(a),W.setContext(s),W.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}};function U(B){for(let q=0;q<B.removed.length;q++){const le=B.removed[q],ne=M.indexOf(le);ne>=0&&(M[ne]=null,_[ne].dispatchEvent({type:"disconnected",data:le}))}for(let q=0;q<B.added.length;q++){const le=B.added[q];let ne=M.indexOf(le);if(ne===-1){for(let Me=0;Me<_.length;Me++)if(Me>=M.length){M.push(le),ne=Me;break}else if(M[Me]===null){M[Me]=le,ne=Me;break}if(ne===-1)break}const de=_[ne];de&&de.dispatchEvent({type:"connected",data:le})}}const Z=new L,te=new L;function O(B,q,le){Z.setFromMatrixPosition(q.matrixWorld),te.setFromMatrixPosition(le.matrixWorld);const ne=Z.distanceTo(te),de=q.projectionMatrix.elements,Me=le.projectionMatrix.elements,we=de[14]/(de[10]-1),Q=de[14]/(de[10]+1),je=(de[9]+1)/de[5],Re=(de[9]-1)/de[5],Ee=(de[8]-1)/de[0],_e=(Me[8]+1)/Me[0],Be=we*Ee,Pe=we*_e,A=ne/(-Ee+_e),I=A*-Ee;q.matrixWorld.decompose(B.position,B.quaternion,B.scale),B.translateX(I),B.translateZ(A),B.matrixWorld.compose(B.position,B.quaternion,B.scale),B.matrixWorldInverse.copy(B.matrixWorld).invert();const V=we+A,J=Q+A,ee=Be-I,re=Pe+(ne-I),oe=je*Q/J*V,ae=Re*Q/J*V;B.projectionMatrix.makePerspective(ee,re,oe,ae,V,J)}function j(B,q){q===null?B.matrixWorld.copy(B.matrix):B.matrixWorld.multiplyMatrices(q.matrixWorld,B.matrix),B.matrixWorldInverse.copy(B.matrixWorld).invert()}this.updateCamera=function(B){if(s===null)return;R.near=b.near=T.near=B.near,R.far=b.far=T.far=B.far,(D!==R.near||x!==R.far)&&(s.updateRenderState({depthNear:R.near,depthFar:R.far}),D=R.near,x=R.far);const q=B.parent,le=R.cameras;j(R,q);for(let de=0;de<le.length;de++)j(le[de],q);R.matrixWorld.decompose(R.position,R.quaternion,R.scale),B.position.copy(R.position),B.quaternion.copy(R.quaternion),B.scale.copy(R.scale),B.matrix.copy(R.matrix),B.matrixWorld.copy(R.matrixWorld);const ne=B.children;for(let de=0,Me=ne.length;de<Me;de++)ne[de].updateMatrixWorld(!0);le.length===2?O(R,T,b):R.projectionMatrix.copy(T.projectionMatrix)},this.getCamera=function(){return R},this.getFoveation=function(){if(h!==null)return h.fixedFoveation;if(f!==null)return f.fixedFoveation},this.setFoveation=function(B){h!==null&&(h.fixedFoveation=B),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=B)};let z=null;function G(B,q){if(c=q.getViewerPose(l||o),m=q,c!==null){const le=c.views;f!==null&&(e.setRenderTargetFramebuffer(d,f.framebuffer),e.setRenderTarget(d));let ne=!1;le.length!==R.cameras.length&&(R.cameras.length=0,ne=!0);for(let de=0;de<le.length;de++){const Me=le[de];let we=null;if(f!==null)we=f.getViewport(Me);else{const je=u.getViewSubImage(h,Me);we=je.viewport,de===0&&(e.setRenderTargetTextures(d,je.colorTexture,h.ignoreDepthValues?void 0:je.depthStencilTexture),e.setRenderTarget(d))}let Q=w[de];Q===void 0&&(Q=new Dt,Q.layers.enable(de),Q.viewport=new Qe,w[de]=Q),Q.matrix.fromArray(Me.transform.matrix),Q.projectionMatrix.fromArray(Me.projectionMatrix),Q.viewport.set(we.x,we.y,we.width,we.height),de===0&&R.matrix.copy(Q.matrix),ne===!0&&R.cameras.push(Q)}}for(let le=0;le<_.length;le++){const ne=M[le],de=_[le];ne!==null&&de!==void 0&&de.update(ne,q,l||o)}z&&z(B,q),m=null}const W=new rh;W.setAnimationLoop(G),this.setAnimationLoop=function(B){z=B},this.dispose=function(){}}}function py(i,e){function t(p,d){p.fogColor.value.copy(d.color),d.isFog?(p.fogNear.value=d.near,p.fogFar.value=d.far):d.isFogExp2&&(p.fogDensity.value=d.density)}function n(p,d,_,M,T){d.isMeshBasicMaterial||d.isMeshLambertMaterial?s(p,d):d.isMeshToonMaterial?(s(p,d),u(p,d)):d.isMeshPhongMaterial?(s(p,d),c(p,d)):d.isMeshStandardMaterial?(s(p,d),h(p,d),d.isMeshPhysicalMaterial&&f(p,d,T)):d.isMeshMatcapMaterial?(s(p,d),m(p,d)):d.isMeshDepthMaterial?s(p,d):d.isMeshDistanceMaterial?(s(p,d),g(p,d)):d.isMeshNormalMaterial?s(p,d):d.isLineBasicMaterial?(r(p,d),d.isLineDashedMaterial&&o(p,d)):d.isPointsMaterial?a(p,d,_,M):d.isSpriteMaterial?l(p,d):d.isShadowMaterial?(p.color.value.copy(d.color),p.opacity.value=d.opacity):d.isShaderMaterial&&(d.uniformsNeedUpdate=!1)}function s(p,d){p.opacity.value=d.opacity,d.color&&p.diffuse.value.copy(d.color),d.emissive&&p.emissive.value.copy(d.emissive).multiplyScalar(d.emissiveIntensity),d.map&&(p.map.value=d.map),d.alphaMap&&(p.alphaMap.value=d.alphaMap),d.bumpMap&&(p.bumpMap.value=d.bumpMap,p.bumpScale.value=d.bumpScale,d.side===Yt&&(p.bumpScale.value*=-1)),d.displacementMap&&(p.displacementMap.value=d.displacementMap,p.displacementScale.value=d.displacementScale,p.displacementBias.value=d.displacementBias),d.emissiveMap&&(p.emissiveMap.value=d.emissiveMap),d.normalMap&&(p.normalMap.value=d.normalMap,p.normalScale.value.copy(d.normalScale),d.side===Yt&&p.normalScale.value.negate()),d.specularMap&&(p.specularMap.value=d.specularMap),d.alphaTest>0&&(p.alphaTest.value=d.alphaTest);const _=e.get(d).envMap;if(_&&(p.envMap.value=_,p.flipEnvMap.value=_.isCubeTexture&&_.isRenderTargetTexture===!1?-1:1,p.reflectivity.value=d.reflectivity,p.ior.value=d.ior,p.refractionRatio.value=d.refractionRatio),d.lightMap){p.lightMap.value=d.lightMap;const b=i.physicallyCorrectLights!==!0?Math.PI:1;p.lightMapIntensity.value=d.lightMapIntensity*b}d.aoMap&&(p.aoMap.value=d.aoMap,p.aoMapIntensity.value=d.aoMapIntensity);let M;d.map?M=d.map:d.specularMap?M=d.specularMap:d.displacementMap?M=d.displacementMap:d.normalMap?M=d.normalMap:d.bumpMap?M=d.bumpMap:d.roughnessMap?M=d.roughnessMap:d.metalnessMap?M=d.metalnessMap:d.alphaMap?M=d.alphaMap:d.emissiveMap?M=d.emissiveMap:d.clearcoatMap?M=d.clearcoatMap:d.clearcoatNormalMap?M=d.clearcoatNormalMap:d.clearcoatRoughnessMap?M=d.clearcoatRoughnessMap:d.iridescenceMap?M=d.iridescenceMap:d.iridescenceThicknessMap?M=d.iridescenceThicknessMap:d.specularIntensityMap?M=d.specularIntensityMap:d.specularColorMap?M=d.specularColorMap:d.transmissionMap?M=d.transmissionMap:d.thicknessMap?M=d.thicknessMap:d.sheenColorMap?M=d.sheenColorMap:d.sheenRoughnessMap&&(M=d.sheenRoughnessMap),M!==void 0&&(M.isWebGLRenderTarget&&(M=M.texture),M.matrixAutoUpdate===!0&&M.updateMatrix(),p.uvTransform.value.copy(M.matrix));let T;d.aoMap?T=d.aoMap:d.lightMap&&(T=d.lightMap),T!==void 0&&(T.isWebGLRenderTarget&&(T=T.texture),T.matrixAutoUpdate===!0&&T.updateMatrix(),p.uv2Transform.value.copy(T.matrix))}function r(p,d){p.diffuse.value.copy(d.color),p.opacity.value=d.opacity}function o(p,d){p.dashSize.value=d.dashSize,p.totalSize.value=d.dashSize+d.gapSize,p.scale.value=d.scale}function a(p,d,_,M){p.diffuse.value.copy(d.color),p.opacity.value=d.opacity,p.size.value=d.size*_,p.scale.value=M*.5,d.map&&(p.map.value=d.map),d.alphaMap&&(p.alphaMap.value=d.alphaMap),d.alphaTest>0&&(p.alphaTest.value=d.alphaTest);let T;d.map?T=d.map:d.alphaMap&&(T=d.alphaMap),T!==void 0&&(T.matrixAutoUpdate===!0&&T.updateMatrix(),p.uvTransform.value.copy(T.matrix))}function l(p,d){p.diffuse.value.copy(d.color),p.opacity.value=d.opacity,p.rotation.value=d.rotation,d.map&&(p.map.value=d.map),d.alphaMap&&(p.alphaMap.value=d.alphaMap),d.alphaTest>0&&(p.alphaTest.value=d.alphaTest);let _;d.map?_=d.map:d.alphaMap&&(_=d.alphaMap),_!==void 0&&(_.matrixAutoUpdate===!0&&_.updateMatrix(),p.uvTransform.value.copy(_.matrix))}function c(p,d){p.specular.value.copy(d.specular),p.shininess.value=Math.max(d.shininess,1e-4)}function u(p,d){d.gradientMap&&(p.gradientMap.value=d.gradientMap)}function h(p,d){p.roughness.value=d.roughness,p.metalness.value=d.metalness,d.roughnessMap&&(p.roughnessMap.value=d.roughnessMap),d.metalnessMap&&(p.metalnessMap.value=d.metalnessMap),e.get(d).envMap&&(p.envMapIntensity.value=d.envMapIntensity)}function f(p,d,_){p.ior.value=d.ior,d.sheen>0&&(p.sheenColor.value.copy(d.sheenColor).multiplyScalar(d.sheen),p.sheenRoughness.value=d.sheenRoughness,d.sheenColorMap&&(p.sheenColorMap.value=d.sheenColorMap),d.sheenRoughnessMap&&(p.sheenRoughnessMap.value=d.sheenRoughnessMap)),d.clearcoat>0&&(p.clearcoat.value=d.clearcoat,p.clearcoatRoughness.value=d.clearcoatRoughness,d.clearcoatMap&&(p.clearcoatMap.value=d.clearcoatMap),d.clearcoatRoughnessMap&&(p.clearcoatRoughnessMap.value=d.clearcoatRoughnessMap),d.clearcoatNormalMap&&(p.clearcoatNormalScale.value.copy(d.clearcoatNormalScale),p.clearcoatNormalMap.value=d.clearcoatNormalMap,d.side===Yt&&p.clearcoatNormalScale.value.negate())),d.iridescence>0&&(p.iridescence.value=d.iridescence,p.iridescenceIOR.value=d.iridescenceIOR,p.iridescenceThicknessMinimum.value=d.iridescenceThicknessRange[0],p.iridescenceThicknessMaximum.value=d.iridescenceThicknessRange[1],d.iridescenceMap&&(p.iridescenceMap.value=d.iridescenceMap),d.iridescenceThicknessMap&&(p.iridescenceThicknessMap.value=d.iridescenceThicknessMap)),d.transmission>0&&(p.transmission.value=d.transmission,p.transmissionSamplerMap.value=_.texture,p.transmissionSamplerSize.value.set(_.width,_.height),d.transmissionMap&&(p.transmissionMap.value=d.transmissionMap),p.thickness.value=d.thickness,d.thicknessMap&&(p.thicknessMap.value=d.thicknessMap),p.attenuationDistance.value=d.attenuationDistance,p.attenuationColor.value.copy(d.attenuationColor)),p.specularIntensity.value=d.specularIntensity,p.specularColor.value.copy(d.specularColor),d.specularIntensityMap&&(p.specularIntensityMap.value=d.specularIntensityMap),d.specularColorMap&&(p.specularColorMap.value=d.specularColorMap)}function m(p,d){d.matcap&&(p.matcap.value=d.matcap)}function g(p,d){p.referencePosition.value.copy(d.referencePosition),p.nearDistance.value=d.nearDistance,p.farDistance.value=d.farDistance}return{refreshFogUniforms:t,refreshMaterialUniforms:n}}function my(){const i=Ys("canvas");return i.style.display="block",i}function gy(i={}){this.isWebGLRenderer=!0;const e=i.canvas!==void 0?i.canvas:my(),t=i.context!==void 0?i.context:null,n=i.depth!==void 0?i.depth:!0,s=i.stencil!==void 0?i.stencil:!0,r=i.antialias!==void 0?i.antialias:!1,o=i.premultipliedAlpha!==void 0?i.premultipliedAlpha:!0,a=i.preserveDrawingBuffer!==void 0?i.preserveDrawingBuffer:!1,l=i.powerPreference!==void 0?i.powerPreference:"default",c=i.failIfMajorPerformanceCaveat!==void 0?i.failIfMajorPerformanceCaveat:!1;let u;t!==null?u=t.getContextAttributes().alpha:u=i.alpha!==void 0?i.alpha:!1;let h=null,f=null;const m=[],g=[];this.domElement=e,this.debug={checkShaderErrors:!0},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.outputEncoding=li,this.physicallyCorrectLights=!1,this.toneMapping=vn,this.toneMappingExposure=1,Object.defineProperties(this,{gammaFactor:{get:function(){return console.warn("THREE.WebGLRenderer: .gammaFactor has been removed."),2},set:function(){console.warn("THREE.WebGLRenderer: .gammaFactor has been removed.")}}});const p=this;let d=!1,_=0,M=0,T=null,b=-1,w=null;const R=new Qe,D=new Qe;let x=null,C=e.width,N=e.height,U=1,Z=null,te=null;const O=new Qe(0,0,C,N),j=new Qe(0,0,C,N);let z=!1;const G=new nl;let W=!1,B=!1,q=null;const le=new He,ne=new Te,de=new L,Me={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function we(){return T===null?U:1}let Q=t;function je(E,k){for(let K=0;K<E.length;K++){const X=E[K],ie=e.getContext(X,k);if(ie!==null)return ie}return null}try{const E={alpha:!0,depth:n,stencil:s,antialias:r,premultipliedAlpha:o,preserveDrawingBuffer:a,powerPreference:l,failIfMajorPerformanceCaveat:c};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${ma}`),e.addEventListener("webglcontextlost",P,!1),e.addEventListener("webglcontextrestored",fe,!1),e.addEventListener("webglcontextcreationerror",pe,!1),Q===null){const k=["webgl2","webgl","experimental-webgl"];if(p.isWebGL1Renderer===!0&&k.shift(),Q=je(k,E),Q===null)throw je(k)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}Q.getShaderPrecisionFormat===void 0&&(Q.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(E){throw console.error("THREE.WebGLRenderer: "+E.message),E}let Re,Ee,_e,Be,Pe,A,I,V,J,ee,re,oe,ae,ce,y,v,F,H,$,se,ve,S,Y;function ue(){Re=new Ex(Q),Ee=new yx(Q,Re,i),Re.init(Ee),S=new cy(Q,Re,Ee),_e=new ay(Q,Re,Ee),Be=new Lx,Pe=new qv,A=new ly(Q,Re,_e,Pe,Ee,S,Be),I=new bx(p),V=new Tx(p),J=new Hg(Q,Ee),Y=new xx(Q,Re,J,Ee),ee=new Ax(Q,J,Be,Y),re=new Dx(Q,ee,J,Be),$=new Ix(Q,Ee,A),v=new Mx(Pe),oe=new Xv(p,I,V,Re,Ee,Y,v),ae=new py(p,Pe),ce=new Kv,y=new ty(Re,Ee),H=new _x(p,I,_e,re,u,o),F=new oy(p,re,Ee),se=new vx(Q,Re,Be,Ee),ve=new Cx(Q,Re,Be,Ee),Be.programs=oe.programs,p.capabilities=Ee,p.extensions=Re,p.properties=Pe,p.renderLists=ce,p.shadowMap=F,p.state=_e,p.info=Be}ue();const he=new dy(p,Q);this.xr=he,this.getContext=function(){return Q},this.getContextAttributes=function(){return Q.getContextAttributes()},this.forceContextLoss=function(){const E=Re.get("WEBGL_lose_context");E&&E.loseContext()},this.forceContextRestore=function(){const E=Re.get("WEBGL_lose_context");E&&E.restoreContext()},this.getPixelRatio=function(){return U},this.setPixelRatio=function(E){E!==void 0&&(U=E,this.setSize(C,N,!1))},this.getSize=function(E){return E.set(C,N)},this.setSize=function(E,k,K){if(he.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}C=E,N=k,e.width=Math.floor(E*U),e.height=Math.floor(k*U),K!==!1&&(e.style.width=E+"px",e.style.height=k+"px"),this.setViewport(0,0,E,k)},this.getDrawingBufferSize=function(E){return E.set(C*U,N*U).floor()},this.setDrawingBufferSize=function(E,k,K){C=E,N=k,U=K,e.width=Math.floor(E*K),e.height=Math.floor(k*K),this.setViewport(0,0,E,k)},this.getCurrentViewport=function(E){return E.copy(R)},this.getViewport=function(E){return E.copy(O)},this.setViewport=function(E,k,K,X){E.isVector4?O.set(E.x,E.y,E.z,E.w):O.set(E,k,K,X),_e.viewport(R.copy(O).multiplyScalar(U).floor())},this.getScissor=function(E){return E.copy(j)},this.setScissor=function(E,k,K,X){E.isVector4?j.set(E.x,E.y,E.z,E.w):j.set(E,k,K,X),_e.scissor(D.copy(j).multiplyScalar(U).floor())},this.getScissorTest=function(){return z},this.setScissorTest=function(E){_e.setScissorTest(z=E)},this.setOpaqueSort=function(E){Z=E},this.setTransparentSort=function(E){te=E},this.getClearColor=function(E){return E.copy(H.getClearColor())},this.setClearColor=function(){H.setClearColor.apply(H,arguments)},this.getClearAlpha=function(){return H.getClearAlpha()},this.setClearAlpha=function(){H.setClearAlpha.apply(H,arguments)},this.clear=function(E=!0,k=!0,K=!0){let X=0;E&&(X|=16384),k&&(X|=256),K&&(X|=1024),Q.clear(X)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",P,!1),e.removeEventListener("webglcontextrestored",fe,!1),e.removeEventListener("webglcontextcreationerror",pe,!1),ce.dispose(),y.dispose(),Pe.dispose(),I.dispose(),V.dispose(),re.dispose(),Y.dispose(),oe.dispose(),he.dispose(),he.removeEventListener("sessionstart",qe),he.removeEventListener("sessionend",Ye),q&&(q.dispose(),q=null),wt.stop()};function P(E){E.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),d=!0}function fe(){console.log("THREE.WebGLRenderer: Context Restored."),d=!1;const E=Be.autoReset,k=F.enabled,K=F.autoUpdate,X=F.needsUpdate,ie=F.type;ue(),Be.autoReset=E,F.enabled=k,F.autoUpdate=K,F.needsUpdate=X,F.type=ie}function pe(E){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",E.statusMessage)}function be(E){const k=E.target;k.removeEventListener("dispose",be),me(k)}function me(E){Se(E),Pe.remove(E)}function Se(E){const k=Pe.get(E).programs;k!==void 0&&(k.forEach(function(K){oe.releaseProgram(K)}),E.isShaderMaterial&&oe.releaseShaderCache(E))}this.renderBufferDirect=function(E,k,K,X,ie,Ae){k===null&&(k=Me);const Ie=ie.isMesh&&ie.matrixWorld.determinant()<0,Ne=Af(E,k,K,X,ie);_e.setMaterial(X,Ie);let De=K.index;const Ke=K.attributes.position;if(De===null){if(Ke===void 0||Ke.count===0)return}else if(De.count===0)return;let Ve=1;X.wireframe===!0&&(De=ee.getWireframeAttribute(K),Ve=2),Y.setup(ie,X,Ne,K,De);let Ge,ot=se;De!==null&&(Ge=J.get(De),ot=ve,ot.setIndex(Ge));const Zn=De!==null?De.count:Ke.count,Ii=K.drawRange.start*Ve,Di=K.drawRange.count*Ve,sn=Ae!==null?Ae.start*Ve:0,Xe=Ae!==null?Ae.count*Ve:1/0,Fi=Math.max(Ii,sn),at=Math.min(Zn,Ii+Di,sn+Xe)-1,rn=Math.max(0,at-Fi+1);if(rn!==0){if(ie.isMesh)X.wireframe===!0?(_e.setLineWidth(X.wireframeLinewidth*we()),ot.setMode(1)):ot.setMode(4);else if(ie.isLine){let Rn=X.linewidth;Rn===void 0&&(Rn=1),_e.setLineWidth(Rn*we()),ie.isLineSegments?ot.setMode(1):ie.isLineLoop?ot.setMode(2):ot.setMode(3)}else ie.isPoints?ot.setMode(0):ie.isSprite&&ot.setMode(4);if(ie.isInstancedMesh)ot.renderInstances(Fi,rn,ie.count);else if(K.isInstancedBufferGeometry){const Rn=Math.min(K.instanceCount,K._maxInstanceCount);ot.renderInstances(Fi,rn,Rn)}else ot.render(Fi,rn)}},this.compile=function(E,k){f=y.get(E),f.init(),g.push(f),E.traverseVisible(function(K){K.isLight&&K.layers.test(k.layers)&&(f.pushLight(K),K.castShadow&&f.pushShadow(K))}),f.setupLights(p.physicallyCorrectLights),E.traverse(function(K){const X=K.material;if(X)if(Array.isArray(X))for(let ie=0;ie<X.length;ie++){const Ae=X[ie];Mo(Ae,E,K)}else Mo(X,E,K)}),g.pop(),f=null};let ge=null;function Le(E){ge&&ge(E)}function qe(){wt.stop()}function Ye(){wt.start()}const wt=new rh;wt.setAnimationLoop(Le),typeof self!="undefined"&&wt.setContext(self),this.setAnimationLoop=function(E){ge=E,he.setAnimationLoop(E),E===null?wt.stop():wt.start()},he.addEventListener("sessionstart",qe),he.addEventListener("sessionend",Ye),this.render=function(E,k){if(k!==void 0&&k.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(d===!0)return;E.autoUpdate===!0&&E.updateMatrixWorld(),k.parent===null&&k.updateMatrixWorld(),he.enabled===!0&&he.isPresenting===!0&&(he.cameraAutoUpdate===!0&&he.updateCamera(k),k=he.getCamera()),E.isScene===!0&&E.onBeforeRender(p,E,k,T),f=y.get(E,g.length),f.init(),g.push(f),le.multiplyMatrices(k.projectionMatrix,k.matrixWorldInverse),G.setFromProjectionMatrix(le),B=this.localClippingEnabled,W=v.init(this.clippingPlanes,B,k),h=ce.get(E,m.length),h.init(),m.push(h),nn(E,k,0,p.sortObjects),h.finish(),p.sortObjects===!0&&h.sort(Z,te),W===!0&&v.beginShadows();const K=f.state.shadowsArray;if(F.render(K,E,k),W===!0&&v.endShadows(),this.info.autoReset===!0&&this.info.reset(),H.render(h,E),f.setupLights(p.physicallyCorrectLights),k.isArrayCamera){const X=k.cameras;for(let ie=0,Ae=X.length;ie<Ae;ie++){const Ie=X[ie];Ll(h,E,Ie,Ie.viewport)}}else Ll(h,E,k);T!==null&&(A.updateMultisampleRenderTarget(T),A.updateRenderTargetMipmap(T)),E.isScene===!0&&E.onAfterRender(p,E,k),Y.resetDefaultState(),b=-1,w=null,g.pop(),g.length>0?f=g[g.length-1]:f=null,m.pop(),m.length>0?h=m[m.length-1]:h=null};function nn(E,k,K,X){if(E.visible===!1)return;if(E.layers.test(k.layers)){if(E.isGroup)K=E.renderOrder;else if(E.isLOD)E.autoUpdate===!0&&E.update(k);else if(E.isLight)f.pushLight(E),E.castShadow&&f.pushShadow(E);else if(E.isSprite){if(!E.frustumCulled||G.intersectsSprite(E)){X&&de.setFromMatrixPosition(E.matrixWorld).applyMatrix4(le);const Ie=re.update(E),Ne=E.material;Ne.visible&&h.push(E,Ie,Ne,K,de.z,null)}}else if((E.isMesh||E.isLine||E.isPoints)&&(E.isSkinnedMesh&&E.skeleton.frame!==Be.render.frame&&(E.skeleton.update(),E.skeleton.frame=Be.render.frame),!E.frustumCulled||G.intersectsObject(E))){X&&de.setFromMatrixPosition(E.matrixWorld).applyMatrix4(le);const Ie=re.update(E),Ne=E.material;if(Array.isArray(Ne)){const De=Ie.groups;for(let Ke=0,Ve=De.length;Ke<Ve;Ke++){const Ge=De[Ke],ot=Ne[Ge.materialIndex];ot&&ot.visible&&h.push(E,Ie,ot,K,de.z,Ge)}}else Ne.visible&&h.push(E,Ie,Ne,K,de.z,null)}}const Ae=E.children;for(let Ie=0,Ne=Ae.length;Ie<Ne;Ie++)nn(Ae[Ie],k,K,X)}function Ll(E,k,K,X){const ie=E.opaque,Ae=E.transmissive,Ie=E.transparent;f.setupLightsView(K),Ae.length>0&&Tf(ie,k,K),X&&_e.viewport(R.copy(X)),ie.length>0&&hr(ie,k,K),Ae.length>0&&hr(Ae,k,K),Ie.length>0&&hr(Ie,k,K),_e.buffers.depth.setTest(!0),_e.buffers.depth.setMask(!0),_e.buffers.color.setMask(!0),_e.setPolygonOffset(!1)}function Tf(E,k,K){const X=Ee.isWebGL2;q===null&&(q=new fi(1,1,{generateMipmaps:!0,type:Re.has("EXT_color_buffer_half_float")?Gs:ri,minFilter:Ji,samples:X&&r===!0?4:0})),p.getDrawingBufferSize(ne),X?q.setSize(ne.x,ne.y):q.setSize(zr(ne.x),zr(ne.y));const ie=p.getRenderTarget();p.setRenderTarget(q),p.clear();const Ae=p.toneMapping;p.toneMapping=vn,hr(E,k,K),p.toneMapping=Ae,A.updateMultisampleRenderTarget(q),A.updateRenderTargetMipmap(q),p.setRenderTarget(ie)}function hr(E,k,K){const X=k.isScene===!0?k.overrideMaterial:null;for(let ie=0,Ae=E.length;ie<Ae;ie++){const Ie=E[ie],Ne=Ie.object,De=Ie.geometry,Ke=X===null?Ie.material:X,Ve=Ie.group;Ne.layers.test(K.layers)&&Ef(Ne,k,K,De,Ke,Ve)}}function Ef(E,k,K,X,ie,Ae){E.onBeforeRender(p,k,K,X,ie,Ae),E.modelViewMatrix.multiplyMatrices(K.matrixWorldInverse,E.matrixWorld),E.normalMatrix.getNormalMatrix(E.modelViewMatrix),ie.onBeforeRender(p,k,K,X,E,Ae),ie.transparent===!0&&ie.side===zn?(ie.side=Yt,ie.needsUpdate=!0,p.renderBufferDirect(K,k,X,ie,E,Ae),ie.side=qi,ie.needsUpdate=!0,p.renderBufferDirect(K,k,X,ie,E,Ae),ie.side=zn):p.renderBufferDirect(K,k,X,ie,E,Ae),E.onAfterRender(p,k,K,X,ie,Ae)}function Mo(E,k,K){k.isScene!==!0&&(k=Me);const X=Pe.get(E),ie=f.state.lights,Ae=f.state.shadowsArray,Ie=ie.state.version,Ne=oe.getParameters(E,ie.state,Ae,k,K),De=oe.getProgramCacheKey(Ne);let Ke=X.programs;X.environment=E.isMeshStandardMaterial?k.environment:null,X.fog=k.fog,X.envMap=(E.isMeshStandardMaterial?V:I).get(E.envMap||X.environment),Ke===void 0&&(E.addEventListener("dispose",be),Ke=new Map,X.programs=Ke);let Ve=Ke.get(De);if(Ve!==void 0){if(X.currentProgram===Ve&&X.lightsStateVersion===Ie)return Rl(E,Ne),Ve}else Ne.uniforms=oe.getUniforms(E),E.onBuild(K,Ne,p),E.onBeforeCompile(Ne,p),Ve=oe.acquireProgram(Ne,De),Ke.set(De,Ve),X.uniforms=Ne.uniforms;const Ge=X.uniforms;(!E.isShaderMaterial&&!E.isRawShaderMaterial||E.clipping===!0)&&(Ge.clippingPlanes=v.uniform),Rl(E,Ne),X.needsLights=Lf(E),X.lightsStateVersion=Ie,X.needsLights&&(Ge.ambientLightColor.value=ie.state.ambient,Ge.lightProbe.value=ie.state.probe,Ge.directionalLights.value=ie.state.directional,Ge.directionalLightShadows.value=ie.state.directionalShadow,Ge.spotLights.value=ie.state.spot,Ge.spotLightShadows.value=ie.state.spotShadow,Ge.rectAreaLights.value=ie.state.rectArea,Ge.ltc_1.value=ie.state.rectAreaLTC1,Ge.ltc_2.value=ie.state.rectAreaLTC2,Ge.pointLights.value=ie.state.point,Ge.pointLightShadows.value=ie.state.pointShadow,Ge.hemisphereLights.value=ie.state.hemi,Ge.directionalShadowMap.value=ie.state.directionalShadowMap,Ge.directionalShadowMatrix.value=ie.state.directionalShadowMatrix,Ge.spotShadowMap.value=ie.state.spotShadowMap,Ge.spotShadowMatrix.value=ie.state.spotShadowMatrix,Ge.pointShadowMap.value=ie.state.pointShadowMap,Ge.pointShadowMatrix.value=ie.state.pointShadowMatrix);const ot=Ve.getUniforms(),Zn=co.seqWithValue(ot.seq,Ge);return X.currentProgram=Ve,X.uniformsList=Zn,Ve}function Rl(E,k){const K=Pe.get(E);K.outputEncoding=k.outputEncoding,K.instancing=k.instancing,K.skinning=k.skinning,K.morphTargets=k.morphTargets,K.morphNormals=k.morphNormals,K.morphColors=k.morphColors,K.morphTargetsCount=k.morphTargetsCount,K.numClippingPlanes=k.numClippingPlanes,K.numIntersection=k.numClipIntersection,K.vertexAlphas=k.vertexAlphas,K.vertexTangents=k.vertexTangents,K.toneMapping=k.toneMapping}function Af(E,k,K,X,ie){k.isScene!==!0&&(k=Me),A.resetTextureUnits();const Ae=k.fog,Ie=X.isMeshStandardMaterial?k.environment:null,Ne=T===null?p.outputEncoding:T.isXRRenderTarget===!0?T.texture.encoding:li,De=(X.isMeshStandardMaterial?V:I).get(X.envMap||Ie),Ke=X.vertexColors===!0&&!!K.attributes.color&&K.attributes.color.itemSize===4,Ve=!!X.normalMap&&!!K.attributes.tangent,Ge=!!K.morphAttributes.position,ot=!!K.morphAttributes.normal,Zn=!!K.morphAttributes.color,Ii=X.toneMapped?p.toneMapping:vn,Di=K.morphAttributes.position||K.morphAttributes.normal||K.morphAttributes.color,sn=Di!==void 0?Di.length:0,Xe=Pe.get(X),Fi=f.state.lights;if(W===!0&&(B===!0||E!==w)){const on=E===w&&X.id===b;v.setState(X,E,on)}let at=!1;X.version===Xe.__version?(Xe.needsLights&&Xe.lightsStateVersion!==Fi.state.version||Xe.outputEncoding!==Ne||ie.isInstancedMesh&&Xe.instancing===!1||!ie.isInstancedMesh&&Xe.instancing===!0||ie.isSkinnedMesh&&Xe.skinning===!1||!ie.isSkinnedMesh&&Xe.skinning===!0||Xe.envMap!==De||X.fog===!0&&Xe.fog!==Ae||Xe.numClippingPlanes!==void 0&&(Xe.numClippingPlanes!==v.numPlanes||Xe.numIntersection!==v.numIntersection)||Xe.vertexAlphas!==Ke||Xe.vertexTangents!==Ve||Xe.morphTargets!==Ge||Xe.morphNormals!==ot||Xe.morphColors!==Zn||Xe.toneMapping!==Ii||Ee.isWebGL2===!0&&Xe.morphTargetsCount!==sn)&&(at=!0):(at=!0,Xe.__version=X.version);let rn=Xe.currentProgram;at===!0&&(rn=Mo(X,k,ie));let Rn=!1,Cs=!1,bo=!1;const Tt=rn.getUniforms(),Ls=Xe.uniforms;if(_e.useProgram(rn.program)&&(Rn=!0,Cs=!0,bo=!0),X.id!==b&&(b=X.id,Cs=!0),Rn||w!==E){if(Tt.setValue(Q,"projectionMatrix",E.projectionMatrix),Ee.logarithmicDepthBuffer&&Tt.setValue(Q,"logDepthBufFC",2/(Math.log(E.far+1)/Math.LN2)),w!==E&&(w=E,Cs=!0,bo=!0),X.isShaderMaterial||X.isMeshPhongMaterial||X.isMeshToonMaterial||X.isMeshStandardMaterial||X.envMap){const on=Tt.map.cameraPosition;on!==void 0&&on.setValue(Q,de.setFromMatrixPosition(E.matrixWorld))}(X.isMeshPhongMaterial||X.isMeshToonMaterial||X.isMeshLambertMaterial||X.isMeshBasicMaterial||X.isMeshStandardMaterial||X.isShaderMaterial)&&Tt.setValue(Q,"isOrthographic",E.isOrthographicCamera===!0),(X.isMeshPhongMaterial||X.isMeshToonMaterial||X.isMeshLambertMaterial||X.isMeshBasicMaterial||X.isMeshStandardMaterial||X.isShaderMaterial||X.isShadowMaterial||ie.isSkinnedMesh)&&Tt.setValue(Q,"viewMatrix",E.matrixWorldInverse)}if(ie.isSkinnedMesh){Tt.setOptional(Q,ie,"bindMatrix"),Tt.setOptional(Q,ie,"bindMatrixInverse");const on=ie.skeleton;on&&(Ee.floatVertexTextures?(on.boneTexture===null&&on.computeBoneTexture(),Tt.setValue(Q,"boneTexture",on.boneTexture,A),Tt.setValue(Q,"boneTextureSize",on.boneTextureSize)):console.warn("THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required."))}const So=K.morphAttributes;return(So.position!==void 0||So.normal!==void 0||So.color!==void 0&&Ee.isWebGL2===!0)&&$.update(ie,K,X,rn),(Cs||Xe.receiveShadow!==ie.receiveShadow)&&(Xe.receiveShadow=ie.receiveShadow,Tt.setValue(Q,"receiveShadow",ie.receiveShadow)),Cs&&(Tt.setValue(Q,"toneMappingExposure",p.toneMappingExposure),Xe.needsLights&&Cf(Ls,bo),Ae&&X.fog===!0&&ae.refreshFogUniforms(Ls,Ae),ae.refreshMaterialUniforms(Ls,X,U,N,q),co.upload(Q,Xe.uniformsList,Ls,A)),X.isShaderMaterial&&X.uniformsNeedUpdate===!0&&(co.upload(Q,Xe.uniformsList,Ls,A),X.uniformsNeedUpdate=!1),X.isSpriteMaterial&&Tt.setValue(Q,"center",ie.center),Tt.setValue(Q,"modelViewMatrix",ie.modelViewMatrix),Tt.setValue(Q,"normalMatrix",ie.normalMatrix),Tt.setValue(Q,"modelMatrix",ie.matrixWorld),rn}function Cf(E,k){E.ambientLightColor.needsUpdate=k,E.lightProbe.needsUpdate=k,E.directionalLights.needsUpdate=k,E.directionalLightShadows.needsUpdate=k,E.pointLights.needsUpdate=k,E.pointLightShadows.needsUpdate=k,E.spotLights.needsUpdate=k,E.spotLightShadows.needsUpdate=k,E.rectAreaLights.needsUpdate=k,E.hemisphereLights.needsUpdate=k}function Lf(E){return E.isMeshLambertMaterial||E.isMeshToonMaterial||E.isMeshPhongMaterial||E.isMeshStandardMaterial||E.isShadowMaterial||E.isShaderMaterial&&E.lights===!0}this.getActiveCubeFace=function(){return _},this.getActiveMipmapLevel=function(){return M},this.getRenderTarget=function(){return T},this.setRenderTargetTextures=function(E,k,K){Pe.get(E.texture).__webglTexture=k,Pe.get(E.depthTexture).__webglTexture=K;const X=Pe.get(E);X.__hasExternalTextures=!0,X.__hasExternalTextures&&(X.__autoAllocateDepthBuffer=K===void 0,X.__autoAllocateDepthBuffer||Re.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),X.__useRenderToTexture=!1))},this.setRenderTargetFramebuffer=function(E,k){const K=Pe.get(E);K.__webglFramebuffer=k,K.__useDefaultFramebuffer=k===void 0},this.setRenderTarget=function(E,k=0,K=0){T=E,_=k,M=K;let X=!0;if(E){const De=Pe.get(E);De.__useDefaultFramebuffer!==void 0?(_e.bindFramebuffer(36160,null),X=!1):De.__webglFramebuffer===void 0?A.setupRenderTarget(E):De.__hasExternalTextures&&A.rebindTextures(E,Pe.get(E.texture).__webglTexture,Pe.get(E.depthTexture).__webglTexture)}let ie=null,Ae=!1,Ie=!1;if(E){const De=E.texture;(De.isData3DTexture||De.isDataArrayTexture)&&(Ie=!0);const Ke=Pe.get(E).__webglFramebuffer;E.isWebGLCubeRenderTarget?(ie=Ke[k],Ae=!0):Ee.isWebGL2&&E.samples>0&&A.useMultisampledRTT(E)===!1?ie=Pe.get(E).__webglMultisampledFramebuffer:ie=Ke,R.copy(E.viewport),D.copy(E.scissor),x=E.scissorTest}else R.copy(O).multiplyScalar(U).floor(),D.copy(j).multiplyScalar(U).floor(),x=z;if(_e.bindFramebuffer(36160,ie)&&Ee.drawBuffers&&X&&_e.drawBuffers(E,ie),_e.viewport(R),_e.scissor(D),_e.setScissorTest(x),Ae){const De=Pe.get(E.texture);Q.framebufferTexture2D(36160,36064,34069+k,De.__webglTexture,K)}else if(Ie){const De=Pe.get(E.texture),Ke=k||0;Q.framebufferTextureLayer(36160,36064,De.__webglTexture,K||0,Ke)}b=-1},this.readRenderTargetPixels=function(E,k,K,X,ie,Ae,Ie){if(!(E&&E.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ne=Pe.get(E).__webglFramebuffer;if(E.isWebGLCubeRenderTarget&&Ie!==void 0&&(Ne=Ne[Ie]),Ne){_e.bindFramebuffer(36160,Ne);try{const De=E.texture,Ke=De.format,Ve=De.type;if(Ke!==Kt&&S.convert(Ke)!==Q.getParameter(35739)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}const Ge=Ve===Gs&&(Re.has("EXT_color_buffer_half_float")||Ee.isWebGL2&&Re.has("EXT_color_buffer_float"));if(Ve!==ri&&S.convert(Ve)!==Q.getParameter(35738)&&!(Ve===kn&&(Ee.isWebGL2||Re.has("OES_texture_float")||Re.has("WEBGL_color_buffer_float")))&&!Ge){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}k>=0&&k<=E.width-X&&K>=0&&K<=E.height-ie&&Q.readPixels(k,K,X,ie,S.convert(Ke),S.convert(Ve),Ae)}finally{const De=T!==null?Pe.get(T).__webglFramebuffer:null;_e.bindFramebuffer(36160,De)}}},this.copyFramebufferToTexture=function(E,k,K=0){const X=Math.pow(2,-K),ie=Math.floor(k.image.width*X),Ae=Math.floor(k.image.height*X);A.setTexture2D(k,0),Q.copyTexSubImage2D(3553,K,0,0,E.x,E.y,ie,Ae),_e.unbindTexture()},this.copyTextureToTexture=function(E,k,K,X=0){const ie=k.image.width,Ae=k.image.height,Ie=S.convert(K.format),Ne=S.convert(K.type);A.setTexture2D(K,0),Q.pixelStorei(37440,K.flipY),Q.pixelStorei(37441,K.premultiplyAlpha),Q.pixelStorei(3317,K.unpackAlignment),k.isDataTexture?Q.texSubImage2D(3553,X,E.x,E.y,ie,Ae,Ie,Ne,k.image.data):k.isCompressedTexture?Q.compressedTexSubImage2D(3553,X,E.x,E.y,k.mipmaps[0].width,k.mipmaps[0].height,Ie,k.mipmaps[0].data):Q.texSubImage2D(3553,X,E.x,E.y,Ie,Ne,k.image),X===0&&K.generateMipmaps&&Q.generateMipmap(3553),_e.unbindTexture()},this.copyTextureToTexture3D=function(E,k,K,X,ie=0){if(p.isWebGL1Renderer){console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");return}const Ae=E.max.x-E.min.x+1,Ie=E.max.y-E.min.y+1,Ne=E.max.z-E.min.z+1,De=S.convert(X.format),Ke=S.convert(X.type);let Ve;if(X.isData3DTexture)A.setTexture3D(X,0),Ve=32879;else if(X.isDataArrayTexture)A.setTexture2DArray(X,0),Ve=35866;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}Q.pixelStorei(37440,X.flipY),Q.pixelStorei(37441,X.premultiplyAlpha),Q.pixelStorei(3317,X.unpackAlignment);const Ge=Q.getParameter(3314),ot=Q.getParameter(32878),Zn=Q.getParameter(3316),Ii=Q.getParameter(3315),Di=Q.getParameter(32877),sn=K.isCompressedTexture?K.mipmaps[0]:K.image;Q.pixelStorei(3314,sn.width),Q.pixelStorei(32878,sn.height),Q.pixelStorei(3316,E.min.x),Q.pixelStorei(3315,E.min.y),Q.pixelStorei(32877,E.min.z),K.isDataTexture||K.isData3DTexture?Q.texSubImage3D(Ve,ie,k.x,k.y,k.z,Ae,Ie,Ne,De,Ke,sn.data):K.isCompressedTexture?(console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: untested support for compressed srcTexture."),Q.compressedTexSubImage3D(Ve,ie,k.x,k.y,k.z,Ae,Ie,Ne,De,sn.data)):Q.texSubImage3D(Ve,ie,k.x,k.y,k.z,Ae,Ie,Ne,De,Ke,sn),Q.pixelStorei(3314,Ge),Q.pixelStorei(32878,ot),Q.pixelStorei(3316,Zn),Q.pixelStorei(3315,Ii),Q.pixelStorei(32877,Di),ie===0&&X.generateMipmaps&&Q.generateMipmap(Ve),_e.unbindTexture()},this.initTexture=function(E){E.isCubeTexture?A.setTextureCube(E,0):E.isData3DTexture?A.setTexture3D(E,0):E.isDataArrayTexture?A.setTexture2DArray(E,0):A.setTexture2D(E,0),_e.unbindTexture()},this.resetState=function(){_=0,M=0,T=null,_e.reset(),Y.reset()},typeof __THREE_DEVTOOLS__!="undefined"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}class _y extends gy{}_y.prototype.isWebGL1Renderer=!0;class qM extends tt{constructor(){super();this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.overrideMaterial=null,this.autoUpdate=!0,typeof __THREE_DEVTOOLS__!="undefined"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.autoUpdate=e.autoUpdate,this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),t}}class xy{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=La,this.updateRange={offset:0,count:-1},this.version=0,this.uuid=Zt()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,n){e*=this.stride,n*=t.stride;for(let s=0,r=this.stride;s<r;s++)this.array[e+s]=t.array[n+s];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Zt()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(t,this.stride);return n.setUsage(this.usage),n}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){return e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Zt()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}const Pt=new L;class hl{constructor(e,t,n,s=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=n,this.normalized=s===!0}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,n=this.data.count;t<n;t++)Pt.fromBufferAttribute(this,t),Pt.applyMatrix4(e),this.setXYZ(t,Pt.x,Pt.y,Pt.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)Pt.fromBufferAttribute(this,t),Pt.applyNormalMatrix(e),this.setXYZ(t,Pt.x,Pt.y,Pt.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)Pt.fromBufferAttribute(this,t),Pt.transformDirection(e),this.setXYZ(t,Pt.x,Pt.y,Pt.z);return this}setX(e,t){return this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){return this.data.array[e*this.data.stride+this.offset]}getY(e){return this.data.array[e*this.data.stride+this.offset+1]}getZ(e){return this.data.array[e*this.data.stride+this.offset+2]}getW(e){return this.data.array[e*this.data.stride+this.offset+3]}setXY(e,t,n){return e=e*this.data.stride+this.offset,this.data.array[e+0]=t,this.data.array[e+1]=n,this}setXYZ(e,t,n,s){return e=e*this.data.stride+this.offset,this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=s,this}setXYZW(e,t,n,s,r){return e=e*this.data.stride+this.offset,this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=s,this.data.array[e+3]=r,this}clone(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will deinterleave buffer data.");const t=[];for(let n=0;n<this.count;n++){const s=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[s+r])}return new Ct(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new hl(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will deinterleave buffer data.");const t=[];for(let n=0;n<this.count;n++){const s=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[s+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}const Dh=new L,Fh=new Qe,Nh=new Qe,vy=new L,Oh=new He;class yy extends ye{constructor(e,t){super(e,t);this.isSkinnedMesh=!0,this.type="SkinnedMesh",this.bindMode="attached",this.bindMatrix=new He,this.bindMatrixInverse=new He}copy(e,t){return super.copy(e,t),this.bindMode=e.bindMode,this.bindMatrix.copy(e.bindMatrix),this.bindMatrixInverse.copy(e.bindMatrixInverse),this.skeleton=e.skeleton,this}bind(e,t){this.skeleton=e,t===void 0&&(this.updateMatrixWorld(!0),this.skeleton.calculateInverses(),t=this.matrixWorld),this.bindMatrix.copy(t),this.bindMatrixInverse.copy(t).invert()}pose(){this.skeleton.pose()}normalizeSkinWeights(){const e=new Qe,t=this.geometry.attributes.skinWeight;for(let n=0,s=t.count;n<s;n++){e.fromBufferAttribute(t,n);const r=1/e.manhattanLength();r!==1/0?e.multiplyScalar(r):e.set(1,0,0,0),t.setXYZW(n,e.x,e.y,e.z,e.w)}}updateMatrixWorld(e){super.updateMatrixWorld(e),this.bindMode==="attached"?this.bindMatrixInverse.copy(this.matrixWorld).invert():this.bindMode==="detached"?this.bindMatrixInverse.copy(this.bindMatrix).invert():console.warn("THREE.SkinnedMesh: Unrecognized bindMode: "+this.bindMode)}boneTransform(e,t){const n=this.skeleton,s=this.geometry;Fh.fromBufferAttribute(s.attributes.skinIndex,e),Nh.fromBufferAttribute(s.attributes.skinWeight,e),Dh.copy(t).applyMatrix4(this.bindMatrix),t.set(0,0,0);for(let r=0;r<4;r++){const o=Nh.getComponent(r);if(o!==0){const a=Fh.getComponent(r);Oh.multiplyMatrices(n.bones[a].matrixWorld,n.boneInverses[a]),t.addScaledVector(vy.copy(Dh).applyMatrix4(Oh),o)}}return t.applyMatrix4(this.bindMatrixInverse)}}class Uh extends tt{constructor(){super();this.isBone=!0,this.type="Bone"}}class My extends Mt{constructor(e=null,t=1,n=1,s,r,o,a,l,c=pt,u=pt,h,f){super(null,o,a,l,c,u,s,r,h,f);this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const zh=new He,by=new He;class fl{constructor(e=[],t=[]){this.uuid=Zt(),this.bones=e.slice(0),this.boneInverses=t,this.boneMatrices=null,this.boneTexture=null,this.boneTextureSize=0,this.frame=-1,this.init()}init(){const e=this.bones,t=this.boneInverses;if(this.boneMatrices=new Float32Array(e.length*16),t.length===0)this.calculateInverses();else if(e.length!==t.length){console.warn("THREE.Skeleton: Number of inverse bone matrices does not match amount of bones."),this.boneInverses=[];for(let n=0,s=this.bones.length;n<s;n++)this.boneInverses.push(new He)}}calculateInverses(){this.boneInverses.length=0;for(let e=0,t=this.bones.length;e<t;e++){const n=new He;this.bones[e]&&n.copy(this.bones[e].matrixWorld).invert(),this.boneInverses.push(n)}}pose(){for(let e=0,t=this.bones.length;e<t;e++){const n=this.bones[e];n&&n.matrixWorld.copy(this.boneInverses[e]).invert()}for(let e=0,t=this.bones.length;e<t;e++){const n=this.bones[e];n&&(n.parent&&n.parent.isBone?(n.matrix.copy(n.parent.matrixWorld).invert(),n.matrix.multiply(n.matrixWorld)):n.matrix.copy(n.matrixWorld),n.matrix.decompose(n.position,n.quaternion,n.scale))}}update(){const e=this.bones,t=this.boneInverses,n=this.boneMatrices,s=this.boneTexture;for(let r=0,o=e.length;r<o;r++){const a=e[r]?e[r].matrixWorld:by;zh.multiplyMatrices(a,t[r]),zh.toArray(n,r*16)}s!==null&&(s.needsUpdate=!0)}clone(){return new fl(this.bones,this.boneInverses)}computeBoneTexture(){let e=Math.sqrt(this.bones.length*4);e=zu(e),e=Math.max(e,4);const t=new Float32Array(e*e*4);t.set(this.boneMatrices);const n=new My(t,e,e,Kt,kn);return n.needsUpdate=!0,this.boneMatrices=t,this.boneTexture=n,this.boneTextureSize=e,this}getBoneByName(e){for(let t=0,n=this.bones.length;t<n;t++){const s=this.bones[t];if(s.name===e)return s}}dispose(){this.boneTexture!==null&&(this.boneTexture.dispose(),this.boneTexture=null)}fromJSON(e,t){this.uuid=e.uuid;for(let n=0,s=e.bones.length;n<s;n++){const r=e.bones[n];let o=t[r];o===void 0&&(console.warn("THREE.Skeleton: No bone found with UUID:",r),o=new Uh),this.bones.push(o),this.boneInverses.push(new He().fromArray(e.boneInverses[n]))}return this.init(),this}toJSON(){const e={metadata:{version:4.5,type:"Skeleton",generator:"Skeleton.toJSON"},bones:[],boneInverses:[]};e.uuid=this.uuid;const t=this.bones,n=this.boneInverses;for(let s=0,r=t.length;s<r;s++){const o=t[s];e.bones.push(o.uuid);const a=n[s];e.boneInverses.push(a.toArray())}return e}}class Ss extends tn{constructor(e){super();this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Ce(16777215),this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const Bh=new L,kh=new L,Hh=new He,dl=new qr,uo=new ls;class Wt extends tt{constructor(e=new ft,t=new Ss){super();this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,n=[0];for(let s=1,r=t.count;s<r;s++)Bh.fromBufferAttribute(t,s-1),kh.fromBufferAttribute(t,s),n[s]=n[s-1],n[s]+=Bh.distanceTo(kh);e.setAttribute("lineDistance",new nt(n,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){const n=this.geometry,s=this.matrixWorld,r=e.params.Line.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),uo.copy(n.boundingSphere),uo.applyMatrix4(s),uo.radius+=r,e.ray.intersectsSphere(uo)===!1)return;Hh.copy(s).invert(),dl.copy(e.ray).applyMatrix4(Hh);const a=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=new L,u=new L,h=new L,f=new L,m=this.isLineSegments?2:1,g=n.index,d=n.attributes.position;if(g!==null){const _=Math.max(0,o.start),M=Math.min(g.count,o.start+o.count);for(let T=_,b=M-1;T<b;T+=m){const w=g.getX(T),R=g.getX(T+1);if(c.fromBufferAttribute(d,w),u.fromBufferAttribute(d,R),dl.distanceSqToSegment(c,u,f,h)>l)continue;f.applyMatrix4(this.matrixWorld);const x=e.ray.origin.distanceTo(f);x<e.near||x>e.far||t.push({distance:x,point:h.clone().applyMatrix4(this.matrixWorld),index:T,face:null,faceIndex:null,object:this})}}else{const _=Math.max(0,o.start),M=Math.min(d.count,o.start+o.count);for(let T=_,b=M-1;T<b;T+=m){if(c.fromBufferAttribute(d,T),u.fromBufferAttribute(d,T+1),dl.distanceSqToSegment(c,u,f,h)>l)continue;f.applyMatrix4(this.matrixWorld);const R=e.ray.origin.distanceTo(f);R<e.near||R>e.far||t.push({distance:R,point:h.clone().applyMatrix4(this.matrixWorld),index:T,face:null,faceIndex:null,object:this})}}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){const a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}}const Vh=new L,Gh=new L;class Wh extends Wt{constructor(e,t){super(e,t);this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,n=[];for(let s=0,r=t.count;s<r;s+=2)Vh.fromBufferAttribute(t,s),Gh.fromBufferAttribute(t,s+1),n[s]=s===0?0:n[s-1],n[s+1]=n[s]+Vh.distanceTo(Gh);e.setAttribute("lineDistance",new nt(n,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class Sy extends Wt{constructor(e,t){super(e,t);this.isLineLoop=!0,this.type="LineLoop"}}class jh extends tn{constructor(e){super();this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new Ce(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const Xh=new He,pl=new qr,ho=new ls,fo=new L;class wy extends tt{constructor(e=new ft,t=new jh){super();this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=e.material,this.geometry=e.geometry,this}raycast(e,t){const n=this.geometry,s=this.matrixWorld,r=e.params.Points.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),ho.copy(n.boundingSphere),ho.applyMatrix4(s),ho.radius+=r,e.ray.intersectsSphere(ho)===!1)return;Xh.copy(s).invert(),pl.copy(e.ray).applyMatrix4(Xh);const a=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=n.index,h=n.attributes.position;if(c!==null){const f=Math.max(0,o.start),m=Math.min(c.count,o.start+o.count);for(let g=f,p=m;g<p;g++){const d=c.getX(g);fo.fromBufferAttribute(h,d),qh(fo,d,l,s,e,t,this)}}else{const f=Math.max(0,o.start),m=Math.min(h.count,o.start+o.count);for(let g=f,p=m;g<p;g++)fo.fromBufferAttribute(h,g),qh(fo,g,l,s,e,t,this)}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){const a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}}function qh(i,e,t,n,s,r,o){const a=pl.distanceSqToPoint(i);if(a<t){const l=new L;pl.closestPointToPoint(i,l),l.applyMatrix4(n);const c=s.ray.origin.distanceTo(l);if(c<s.near||c>s.far)return;r.push({distance:c,distanceToRay:Math.sqrt(a),point:l,index:e,face:null,object:o})}}class YM extends Mt{constructor(e,t,n,s,r,o,a,l,c){super(e,t,n,s,r,o,a,l,c);this.isVideoTexture=!0,this.minFilter=o!==void 0?o:xt,this.magFilter=r!==void 0?r:xt,this.generateMipmaps=!1;const u=this;function h(){u.needsUpdate=!0,e.requestVideoFrameCallback(h)}"requestVideoFrameCallback"in e&&e.requestVideoFrameCallback(h)}clone(){return new this.constructor(this.image).copy(this)}update(){const e=this.image;"requestVideoFrameCallback"in e===!1&&e.readyState>=e.HAVE_CURRENT_DATA&&(this.needsUpdate=!0)}}class St extends ft{constructor(e=1,t=1,n=1,s=8,r=1,o=!1,a=0,l=Math.PI*2){super();this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:n,radialSegments:s,heightSegments:r,openEnded:o,thetaStart:a,thetaLength:l};const c=this;s=Math.floor(s),r=Math.floor(r);const u=[],h=[],f=[],m=[];let g=0;const p=[],d=n/2;let _=0;M(),o===!1&&(e>0&&T(!0),t>0&&T(!1)),this.setIndex(u),this.setAttribute("position",new nt(h,3)),this.setAttribute("normal",new nt(f,3)),this.setAttribute("uv",new nt(m,2));function M(){const b=new L,w=new L;let R=0;const D=(t-e)/n;for(let x=0;x<=r;x++){const C=[],N=x/r,U=N*(t-e)+e;for(let Z=0;Z<=s;Z++){const te=Z/s,O=te*l+a,j=Math.sin(O),z=Math.cos(O);w.x=U*j,w.y=-N*n+d,w.z=U*z,h.push(w.x,w.y,w.z),b.set(j,D,z).normalize(),f.push(b.x,b.y,b.z),m.push(te,1-N),C.push(g++)}p.push(C)}for(let x=0;x<s;x++)for(let C=0;C<r;C++){const N=p[C][x],U=p[C+1][x],Z=p[C+1][x+1],te=p[C][x+1];u.push(N,U,te),u.push(U,Z,te),R+=6}c.addGroup(_,R,0),_+=R}function T(b){const w=g,R=new Te,D=new L;let x=0;const C=b===!0?e:t,N=b===!0?1:-1;for(let Z=1;Z<=s;Z++)h.push(0,d*N,0),f.push(0,N,0),m.push(.5,.5),g++;const U=g;for(let Z=0;Z<=s;Z++){const O=Z/s*l+a,j=Math.cos(O),z=Math.sin(O);D.x=C*z,D.y=d*N,D.z=C*j,h.push(D.x,D.y,D.z),f.push(0,N,0),R.x=j*.5+.5,R.y=z*.5*N+.5,m.push(R.x,R.y),g++}for(let Z=0;Z<s;Z++){const te=w+Z,O=U+Z;b===!0?u.push(O,O+1,te):u.push(O+1,O,te),x+=3}c.addGroup(_,x,b===!0?1:2),_+=x}}static fromJSON(e){return new St(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class ml extends ft{constructor(e=[],t=[],n=1,s=0){super();this.type="PolyhedronGeometry",this.parameters={vertices:e,indices:t,radius:n,detail:s};const r=[],o=[];a(s),c(n),u(),this.setAttribute("position",new nt(r,3)),this.setAttribute("normal",new nt(r.slice(),3)),this.setAttribute("uv",new nt(o,2)),s===0?this.computeVertexNormals():this.normalizeNormals();function a(M){const T=new L,b=new L,w=new L;for(let R=0;R<t.length;R+=3)m(t[R+0],T),m(t[R+1],b),m(t[R+2],w),l(T,b,w,M)}function l(M,T,b,w){const R=w+1,D=[];for(let x=0;x<=R;x++){D[x]=[];const C=M.clone().lerp(b,x/R),N=T.clone().lerp(b,x/R),U=R-x;for(let Z=0;Z<=U;Z++)Z===0&&x===R?D[x][Z]=C:D[x][Z]=C.clone().lerp(N,Z/U)}for(let x=0;x<R;x++)for(let C=0;C<2*(R-x)-1;C++){const N=Math.floor(C/2);C%2==0?(f(D[x][N+1]),f(D[x+1][N]),f(D[x][N])):(f(D[x][N+1]),f(D[x+1][N+1]),f(D[x+1][N]))}}function c(M){const T=new L;for(let b=0;b<r.length;b+=3)T.x=r[b+0],T.y=r[b+1],T.z=r[b+2],T.normalize().multiplyScalar(M),r[b+0]=T.x,r[b+1]=T.y,r[b+2]=T.z}function u(){const M=new L;for(let T=0;T<r.length;T+=3){M.x=r[T+0],M.y=r[T+1],M.z=r[T+2];const b=d(M)/2/Math.PI+.5,w=_(M)/Math.PI+.5;o.push(b,1-w)}g(),h()}function h(){for(let M=0;M<o.length;M+=6){const T=o[M+0],b=o[M+2],w=o[M+4],R=Math.max(T,b,w),D=Math.min(T,b,w);R>.9&&D<.1&&(T<.2&&(o[M+0]+=1),b<.2&&(o[M+2]+=1),w<.2&&(o[M+4]+=1))}}function f(M){r.push(M.x,M.y,M.z)}function m(M,T){const b=M*3;T.x=e[b+0],T.y=e[b+1],T.z=e[b+2]}function g(){const M=new L,T=new L,b=new L,w=new L,R=new Te,D=new Te,x=new Te;for(let C=0,N=0;C<r.length;C+=9,N+=6){M.set(r[C+0],r[C+1],r[C+2]),T.set(r[C+3],r[C+4],r[C+5]),b.set(r[C+6],r[C+7],r[C+8]),R.set(o[N+0],o[N+1]),D.set(o[N+2],o[N+3]),x.set(o[N+4],o[N+5]),w.copy(M).add(T).add(b).divideScalar(3);const U=d(w);p(R,N+0,M,U),p(D,N+2,T,U),p(x,N+4,b,U)}}function p(M,T,b,w){w<0&&M.x===1&&(o[T]=M.x-1),b.x===0&&b.z===0&&(o[T]=w/2/Math.PI+.5)}function d(M){return Math.atan2(M.z,-M.x)}function _(M){return Math.atan2(-M.y,Math.sqrt(M.x*M.x+M.z*M.z))}}static fromJSON(e){return new ml(e.vertices,e.indices,e.radius,e.details)}}class ws extends ml{constructor(e=1,t=0){const n=[1,0,0,-1,0,0,0,1,0,0,-1,0,0,0,1,0,0,-1],s=[0,2,4,0,4,3,0,3,5,0,5,2,1,2,5,1,5,3,1,3,4,1,4,2];super(n,s,e,t);this.type="OctahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new ws(e.radius,e.detail)}}class gl extends ft{constructor(e=1,t=32,n=16,s=0,r=Math.PI*2,o=0,a=Math.PI){super();this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:n,phiStart:s,phiLength:r,thetaStart:o,thetaLength:a},t=Math.max(3,Math.floor(t)),n=Math.max(2,Math.floor(n));const l=Math.min(o+a,Math.PI);let c=0;const u=[],h=new L,f=new L,m=[],g=[],p=[],d=[];for(let _=0;_<=n;_++){const M=[],T=_/n;let b=0;_==0&&o==0?b=.5/t:_==n&&l==Math.PI&&(b=-.5/t);for(let w=0;w<=t;w++){const R=w/t;h.x=-e*Math.cos(s+R*r)*Math.sin(o+T*a),h.y=e*Math.cos(o+T*a),h.z=e*Math.sin(s+R*r)*Math.sin(o+T*a),g.push(h.x,h.y,h.z),f.copy(h).normalize(),p.push(f.x,f.y,f.z),d.push(R+b,1-T),M.push(c++)}u.push(M)}for(let _=0;_<n;_++)for(let M=0;M<t;M++){const T=u[_][M+1],b=u[_][M],w=u[_+1][M],R=u[_+1][M+1];(_!==0||o>0)&&m.push(T,b,R),(_!==n-1||l<Math.PI)&&m.push(b,w,R)}this.setIndex(m),this.setAttribute("position",new nt(g,3)),this.setAttribute("normal",new nt(p,3)),this.setAttribute("uv",new nt(d,2))}static fromJSON(e){return new gl(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}class Mi extends ft{constructor(e=1,t=.4,n=8,s=6,r=Math.PI*2){super();this.type="TorusGeometry",this.parameters={radius:e,tube:t,radialSegments:n,tubularSegments:s,arc:r},n=Math.floor(n),s=Math.floor(s);const o=[],a=[],l=[],c=[],u=new L,h=new L,f=new L;for(let m=0;m<=n;m++)for(let g=0;g<=s;g++){const p=g/s*r,d=m/n*Math.PI*2;h.x=(e+t*Math.cos(d))*Math.cos(p),h.y=(e+t*Math.cos(d))*Math.sin(p),h.z=t*Math.sin(d),a.push(h.x,h.y,h.z),u.x=e*Math.cos(p),u.y=e*Math.sin(p),f.subVectors(h,u).normalize(),l.push(f.x,f.y,f.z),c.push(g/s),c.push(m/n)}for(let m=1;m<=n;m++)for(let g=1;g<=s;g++){const p=(s+1)*m+g-1,d=(s+1)*(m-1)+g-1,_=(s+1)*(m-1)+g,M=(s+1)*m+g;o.push(p,d,M),o.push(d,_,M)}this.setIndex(o),this.setAttribute("position",new nt(a,3)),this.setAttribute("normal",new nt(l,3)),this.setAttribute("uv",new nt(c,2))}static fromJSON(e){return new Mi(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc)}}class po extends tn{constructor(e){super();this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.type="MeshStandardMaterial",this.color=new Ce(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Ce(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Aa,this.normalScale=new Te(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class bi extends po{constructor(e){super();this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new Te(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return yt(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(t){this.ior=(1+.4*t)/(1-.4*t)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new Ce(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=0,this.attenuationColor=new Ce(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new Ce(1,1,1),this.specularColorMap=null,this._sheen=0,this._clearcoat=0,this._iridescence=0,this._transmission=0,this.setValues(e)}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessRange=[...e.iridescenceThicknessRange],this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}}class KM extends tn{constructor(e){super();this.isMeshLambertMaterial=!0,this.type="MeshLambertMaterial",this.color=new Ce(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Ce(0),this.emissiveIntensity=1,this.emissiveMap=null,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=_a,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const it={arraySlice:function(i,e,t){return it.isTypedArray(i)?new i.constructor(i.subarray(e,t!==void 0?t:i.length)):i.slice(e,t)},convertArray:function(i,e,t){return!i||!t&&i.constructor===e?i:typeof e.BYTES_PER_ELEMENT=="number"?new e(i):Array.prototype.slice.call(i)},isTypedArray:function(i){return ArrayBuffer.isView(i)&&!(i instanceof DataView)},getKeyframeOrder:function(i){function e(s,r){return i[s]-i[r]}const t=i.length,n=new Array(t);for(let s=0;s!==t;++s)n[s]=s;return n.sort(e),n},sortedArray:function(i,e,t){const n=i.length,s=new i.constructor(n);for(let r=0,o=0;o!==n;++r){const a=t[r]*e;for(let l=0;l!==e;++l)s[o++]=i[a+l]}return s},flattenJSON:function(i,e,t,n){let s=1,r=i[0];for(;r!==void 0&&r[n]===void 0;)r=i[s++];if(r===void 0)return;let o=r[n];if(o!==void 0)if(Array.isArray(o))do o=r[n],o!==void 0&&(e.push(r.time),t.push.apply(t,o)),r=i[s++];while(r!==void 0);else if(o.toArray!==void 0)do o=r[n],o!==void 0&&(e.push(r.time),o.toArray(t,t.length)),r=i[s++];while(r!==void 0);else do o=r[n],o!==void 0&&(e.push(r.time),t.push(o)),r=i[s++];while(r!==void 0)},subclip:function(i,e,t,n,s=30){const r=i.clone();r.name=e;const o=[];for(let l=0;l<r.tracks.length;++l){const c=r.tracks[l],u=c.getValueSize(),h=[],f=[];for(let m=0;m<c.times.length;++m){const g=c.times[m]*s;if(!(g<t||g>=n)){h.push(c.times[m]);for(let p=0;p<u;++p)f.push(c.values[m*u+p])}}h.length!==0&&(c.times=it.convertArray(h,c.times.constructor),c.values=it.convertArray(f,c.values.constructor),o.push(c))}r.tracks=o;let a=1/0;for(let l=0;l<r.tracks.length;++l)a>r.tracks[l].times[0]&&(a=r.tracks[l].times[0]);for(let l=0;l<r.tracks.length;++l)r.tracks[l].shift(-1*a);return r.resetDuration(),r},makeClipAdditive:function(i,e=0,t=i,n=30){n<=0&&(n=30);const s=t.tracks.length,r=e/n;for(let o=0;o<s;++o){const a=t.tracks[o],l=a.ValueTypeName;if(l==="bool"||l==="string")continue;const c=i.tracks.find(function(_){return _.name===a.name&&_.ValueTypeName===l});if(c===void 0)continue;let u=0;const h=a.getValueSize();a.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline&&(u=h/3);let f=0;const m=c.getValueSize();c.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline&&(f=m/3);const g=a.times.length-1;let p;if(r<=a.times[0]){const _=u,M=h-u;p=it.arraySlice(a.values,_,M)}else if(r>=a.times[g]){const _=g*h+u,M=_+h-u;p=it.arraySlice(a.values,_,M)}else{const _=a.createInterpolant(),M=u,T=h-u;_.evaluate(r),p=it.arraySlice(_.resultBuffer,M,T)}l==="quaternion"&&new rt().fromArray(p).normalize().conjugate().toArray(p);const d=c.times.length;for(let _=0;_<d;++_){const M=_*m+f;if(l==="quaternion")rt.multiplyQuaternionsFlat(c.values,M,p,0,c.values,M);else{const T=m-f*2;for(let b=0;b<T;++b)c.values[M+b]-=p[b]}}}return i.blendMode=tg,i}};class Js{constructor(e,t,n,s){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=s!==void 0?s:new t.constructor(n),this.sampleValues=t,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(e){const t=this.parameterPositions;let n=this._cachedIndex,s=t[n],r=t[n-1];n:{e:{let o;t:{i:if(!(e<s)){for(let a=n+2;;){if(s===void 0){if(e<r)break i;return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===a)break;if(r=s,s=t[++n],e<s)break e}o=t.length;break t}if(!(e>=r)){const a=t[1];e<a&&(n=2,r=a);for(let l=n-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===l)break;if(s=r,r=t[--n-1],e>=r)break e}o=n,n=0;break t}break n}for(;n<o;){const a=n+o>>>1;e<t[a]?o=a:n=a+1}if(s=t[n],r=t[n-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(s===void 0)return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,r,s)}return this.interpolate_(n,r,e,s)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){const t=this.resultBuffer,n=this.sampleValues,s=this.valueSize,r=e*s;for(let o=0;o!==s;++o)t[o]=n[r+o];return t}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}}class Ty extends Js{constructor(e,t,n,s){super(e,t,n,s);this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:Iu,endingEnd:Iu}}intervalChanged_(e,t,n){const s=this.parameterPositions;let r=e-2,o=e+1,a=s[r],l=s[o];if(a===void 0)switch(this.getSettings_().endingStart){case Du:r=e,a=2*t-n;break;case Fu:r=s.length-2,a=t+s[r]-s[r+1];break;default:r=e,a=n}if(l===void 0)switch(this.getSettings_().endingEnd){case Du:o=e,l=2*n-t;break;case Fu:o=1,l=n+s[1]-s[0];break;default:o=e-1,l=t}const c=(n-t)*.5,u=this.valueSize;this._weightPrev=c/(t-a),this._weightNext=c/(l-n),this._offsetPrev=r*u,this._offsetNext=o*u}interpolate_(e,t,n,s){const r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=e*a,c=l-a,u=this._offsetPrev,h=this._offsetNext,f=this._weightPrev,m=this._weightNext,g=(n-t)/(s-t),p=g*g,d=p*g,_=-f*d+2*f*p-f*g,M=(1+f)*d+(-1.5-2*f)*p+(-.5+f)*g+1,T=(-1-m)*d+(1.5+m)*p+.5*g,b=m*d-m*p;for(let w=0;w!==a;++w)r[w]=_*o[u+w]+M*o[c+w]+T*o[l+w]+b*o[h+w];return r}}class Ey extends Js{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e,t,n,s){const r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=e*a,c=l-a,u=(n-t)/(s-t),h=1-u;for(let f=0;f!==a;++f)r[f]=o[c+f]*h+o[l+f]*u;return r}}class Ay extends Js{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e){return this.copySampleValue_(e-1)}}class dn{constructor(e,t,n,s){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=it.convertArray(t,this.TimeBufferType),this.values=it.convertArray(n,this.ValueBufferType),this.setInterpolation(s||this.DefaultInterpolation)}static toJSON(e){const t=e.constructor;let n;if(t.toJSON!==this.toJSON)n=t.toJSON(e);else{n={name:e.name,times:it.convertArray(e.times,Array),values:it.convertArray(e.values,Array)};const s=e.getInterpolation();s!==e.DefaultInterpolation&&(n.interpolation=s)}return n.type=e.ValueTypeName,n}InterpolantFactoryMethodDiscrete(e){return new Ay(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new Ey(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new Ty(this.times,this.values,this.getValueSize(),e)}setInterpolation(e){let t;switch(e){case Ws:t=this.InterpolantFactoryMethodDiscrete;break;case ns:t=this.InterpolantFactoryMethodLinear;break;case Ea:t=this.InterpolantFactoryMethodSmooth;break}if(t===void 0){const n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return console.warn("THREE.KeyframeTrack:",n),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return Ws;case this.InterpolantFactoryMethodLinear:return ns;case this.InterpolantFactoryMethodSmooth:return Ea}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){const t=this.times;for(let n=0,s=t.length;n!==s;++n)t[n]+=e}return this}scale(e){if(e!==1){const t=this.times;for(let n=0,s=t.length;n!==s;++n)t[n]*=e}return this}trim(e,t){const n=this.times,s=n.length;let r=0,o=s-1;for(;r!==s&&n[r]<e;)++r;for(;o!==-1&&n[o]>t;)--o;if(++o,r!==0||o!==s){r>=o&&(o=Math.max(o,1),r=o-1);const a=this.getValueSize();this.times=it.arraySlice(n,r,o),this.values=it.arraySlice(this.values,r*a,o*a)}return this}validate(){let e=!0;const t=this.getValueSize();t-Math.floor(t)!=0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),e=!1);const n=this.times,s=this.values,r=n.length;r===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),e=!1);let o=null;for(let a=0;a!==r;a++){const l=n[a];if(typeof l=="number"&&isNaN(l)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,a,l),e=!1;break}if(o!==null&&o>l){console.error("THREE.KeyframeTrack: Out of order keys.",this,a,l,o),e=!1;break}o=l}if(s!==void 0&&it.isTypedArray(s))for(let a=0,l=s.length;a!==l;++a){const c=s[a];if(isNaN(c)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,a,c),e=!1;break}}return e}optimize(){const e=it.arraySlice(this.times),t=it.arraySlice(this.values),n=this.getValueSize(),s=this.getInterpolation()===Ea,r=e.length-1;let o=1;for(let a=1;a<r;++a){let l=!1;const c=e[a],u=e[a+1];if(c!==u&&(a!==1||c!==e[0]))if(s)l=!0;else{const h=a*n,f=h-n,m=h+n;for(let g=0;g!==n;++g){const p=t[h+g];if(p!==t[f+g]||p!==t[m+g]){l=!0;break}}}if(l){if(a!==o){e[o]=e[a];const h=a*n,f=o*n;for(let m=0;m!==n;++m)t[f+m]=t[h+m]}++o}}if(r>0){e[o]=e[r];for(let a=r*n,l=o*n,c=0;c!==n;++c)t[l+c]=t[a+c];++o}return o!==e.length?(this.times=it.arraySlice(e,0,o),this.values=it.arraySlice(t,0,o*n)):(this.times=e,this.values=t),this}clone(){const e=it.arraySlice(this.times,0),t=it.arraySlice(this.values,0),n=this.constructor,s=new n(this.name,e,t);return s.createInterpolant=this.createInterpolant,s}}dn.prototype.TimeBufferType=Float32Array;dn.prototype.ValueBufferType=Float32Array;dn.prototype.DefaultInterpolation=ns;class Ts extends dn{}Ts.prototype.ValueTypeName="bool";Ts.prototype.ValueBufferType=Array;Ts.prototype.DefaultInterpolation=Ws;Ts.prototype.InterpolantFactoryMethodLinear=void 0;Ts.prototype.InterpolantFactoryMethodSmooth=void 0;class Yh extends dn{}Yh.prototype.ValueTypeName="color";class er extends dn{}er.prototype.ValueTypeName="number";class Cy extends Js{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e,t,n,s){const r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=(n-t)/(s-t);let c=e*a;for(let u=c+a;c!==u;c+=4)rt.slerpFlat(r,0,o,c-a,o,c,l);return r}}class Si extends dn{InterpolantFactoryMethodLinear(e){return new Cy(this.times,this.values,this.getValueSize(),e)}}Si.prototype.ValueTypeName="quaternion";Si.prototype.DefaultInterpolation=ns;Si.prototype.InterpolantFactoryMethodSmooth=void 0;class Es extends dn{}Es.prototype.ValueTypeName="string";Es.prototype.ValueBufferType=Array;Es.prototype.DefaultInterpolation=Ws;Es.prototype.InterpolantFactoryMethodLinear=void 0;Es.prototype.InterpolantFactoryMethodSmooth=void 0;class tr extends dn{}tr.prototype.ValueTypeName="vector";class Ly{constructor(e,t=-1,n,s=eg){this.name=e,this.tracks=n,this.duration=t,this.blendMode=s,this.uuid=Zt(),this.duration<0&&this.resetDuration()}static parse(e){const t=[],n=e.tracks,s=1/(e.fps||1);for(let o=0,a=n.length;o!==a;++o)t.push(Py(n[o]).scale(s));const r=new this(e.name,e.duration,t,e.blendMode);return r.uuid=e.uuid,r}static toJSON(e){const t=[],n=e.tracks,s={name:e.name,duration:e.duration,tracks:t,uuid:e.uuid,blendMode:e.blendMode};for(let r=0,o=n.length;r!==o;++r)t.push(dn.toJSON(n[r]));return s}static CreateFromMorphTargetSequence(e,t,n,s){const r=t.length,o=[];for(let a=0;a<r;a++){let l=[],c=[];l.push((a+r-1)%r,a,(a+1)%r),c.push(0,1,0);const u=it.getKeyframeOrder(l);l=it.sortedArray(l,1,u),c=it.sortedArray(c,1,u),!s&&l[0]===0&&(l.push(r),c.push(c[0])),o.push(new er(".morphTargetInfluences["+t[a].name+"]",l,c).scale(1/n))}return new this(e,-1,o)}static findByName(e,t){let n=e;if(!Array.isArray(e)){const s=e;n=s.geometry&&s.geometry.animations||s.animations}for(let s=0;s<n.length;s++)if(n[s].name===t)return n[s];return null}static CreateClipsFromMorphTargetSequences(e,t,n){const s={},r=/^([\w-]*?)([\d]+)$/;for(let a=0,l=e.length;a<l;a++){const c=e[a],u=c.name.match(r);if(u&&u.length>1){const h=u[1];let f=s[h];f||(s[h]=f=[]),f.push(c)}}const o=[];for(const a in s)o.push(this.CreateFromMorphTargetSequence(a,s[a],t,n));return o}static parseAnimation(e,t){if(!e)return console.error("THREE.AnimationClip: No animation in JSONLoader data."),null;const n=function(h,f,m,g,p){if(m.length!==0){const d=[],_=[];it.flattenJSON(m,d,_,g),d.length!==0&&p.push(new h(f,d,_))}},s=[],r=e.name||"default",o=e.fps||30,a=e.blendMode;let l=e.length||-1;const c=e.hierarchy||[];for(let h=0;h<c.length;h++){const f=c[h].keys;if(!(!f||f.length===0))if(f[0].morphTargets){const m={};let g;for(g=0;g<f.length;g++)if(f[g].morphTargets)for(let p=0;p<f[g].morphTargets.length;p++)m[f[g].morphTargets[p]]=-1;for(const p in m){const d=[],_=[];for(let M=0;M!==f[g].morphTargets.length;++M){const T=f[g];d.push(T.time),_.push(T.morphTarget===p?1:0)}s.push(new er(".morphTargetInfluence["+p+"]",d,_))}l=m.length*o}else{const m=".bones["+t[h].name+"]";n(tr,m+".position",f,"pos",s),n(Si,m+".quaternion",f,"rot",s),n(tr,m+".scale",f,"scl",s)}}return s.length===0?null:new this(r,l,s,a)}resetDuration(){const e=this.tracks;let t=0;for(let n=0,s=e.length;n!==s;++n){const r=this.tracks[n];t=Math.max(t,r.times[r.times.length-1])}return this.duration=t,this}trim(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].trim(0,this.duration);return this}validate(){let e=!0;for(let t=0;t<this.tracks.length;t++)e=e&&this.tracks[t].validate();return e}optimize(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].optimize();return this}clone(){const e=[];for(let t=0;t<this.tracks.length;t++)e.push(this.tracks[t].clone());return new this.constructor(this.name,this.duration,e,this.blendMode)}toJSON(){return this.constructor.toJSON(this)}}function Ry(i){switch(i.toLowerCase()){case"scalar":case"double":case"float":case"number":case"integer":return er;case"vector":case"vector2":case"vector3":case"vector4":return tr;case"color":return Yh;case"quaternion":return Si;case"bool":case"boolean":return Ts;case"string":return Es}throw new Error("THREE.KeyframeTrack: Unsupported typeName: "+i)}function Py(i){if(i.type===void 0)throw new Error("THREE.KeyframeTrack: track type undefined, can not parse");const e=Ry(i.type);if(i.times===void 0){const t=[],n=[];it.flattenJSON(i.keys,t,n,"value"),i.times=t,i.values=n}return e.parse!==void 0?e.parse(i):new e(i.name,i.times,i.values,i.interpolation)}const As={enabled:!1,files:{},add:function(i,e){this.enabled!==!1&&(this.files[i]=e)},get:function(i){if(this.enabled!==!1)return this.files[i]},remove:function(i){delete this.files[i]},clear:function(){this.files={}}};class Iy{constructor(e,t,n){const s=this;let r=!1,o=0,a=0,l;const c=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this.itemStart=function(u){a++,r===!1&&s.onStart!==void 0&&s.onStart(u,o,a),r=!0},this.itemEnd=function(u){o++,s.onProgress!==void 0&&s.onProgress(u,o,a),o===a&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(u){s.onError!==void 0&&s.onError(u)},this.resolveURL=function(u){return l?l(u):u},this.setURLModifier=function(u){return l=u,this},this.addHandler=function(u,h){return c.push(u,h),this},this.removeHandler=function(u){const h=c.indexOf(u);return h!==-1&&c.splice(h,2),this},this.getHandler=function(u){for(let h=0,f=c.length;h<f;h+=2){const m=c[h],g=c[h+1];if(m.global&&(m.lastIndex=0),m.test(u))return g}return null}}}const Dy=new Iy;class nr{constructor(e){this.manager=e!==void 0?e:Dy,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){const n=this;return new Promise(function(s,r){n.load(e,s,t,r)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}}const Cn={};class Kh extends nr{constructor(e){super(e)}load(e,t,n,s){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const r=As.get(e);if(r!==void 0)return this.manager.itemStart(e),setTimeout(()=>{t&&t(r),this.manager.itemEnd(e)},0),r;if(Cn[e]!==void 0){Cn[e].push({onLoad:t,onProgress:n,onError:s});return}Cn[e]=[],Cn[e].push({onLoad:t,onProgress:n,onError:s});const o=new Request(e,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin"}),a=this.mimeType,l=this.responseType;fetch(o).then(c=>{if(c.status===200||c.status===0){if(c.status===0&&console.warn("THREE.FileLoader: HTTP Status 0 received."),typeof ReadableStream=="undefined"||c.body===void 0||c.body.getReader===void 0)return c;const u=Cn[e],h=c.body.getReader(),f=c.headers.get("Content-Length"),m=f?parseInt(f):0,g=m!==0;let p=0;const d=new ReadableStream({start(_){M();function M(){h.read().then(({done:T,value:b})=>{if(T)_.close();else{p+=b.byteLength;const w=new ProgressEvent("progress",{lengthComputable:g,loaded:p,total:m});for(let R=0,D=u.length;R<D;R++){const x=u[R];x.onProgress&&x.onProgress(w)}_.enqueue(b),M()}})}}});return new Response(d)}else throw Error(`fetch for "${c.url}" responded with ${c.status}: ${c.statusText}`)}).then(c=>{switch(l){case"arraybuffer":return c.arrayBuffer();case"blob":return c.blob();case"document":return c.text().then(u=>new DOMParser().parseFromString(u,a));case"json":return c.json();default:if(a===void 0)return c.text();{const h=/charset="?([^;"\s]*)"?/i.exec(a),f=h&&h[1]?h[1].toLowerCase():void 0,m=new TextDecoder(f);return c.arrayBuffer().then(g=>m.decode(g))}}}).then(c=>{As.add(e,c);const u=Cn[e];delete Cn[e];for(let h=0,f=u.length;h<f;h++){const m=u[h];m.onLoad&&m.onLoad(c)}}).catch(c=>{const u=Cn[e];if(u===void 0)throw this.manager.itemError(e),c;delete Cn[e];for(let h=0,f=u.length;h<f;h++){const m=u[h];m.onError&&m.onError(c)}this.manager.itemError(e)}).finally(()=>{this.manager.itemEnd(e)}),this.manager.itemStart(e)}setResponseType(e){return this.responseType=e,this}setMimeType(e){return this.mimeType=e,this}}class Fy extends nr{constructor(e){super(e)}load(e,t,n,s){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const r=this,o=As.get(e);if(o!==void 0)return r.manager.itemStart(e),setTimeout(function(){t&&t(o),r.manager.itemEnd(e)},0),o;const a=Ys("img");function l(){u(),As.add(e,this),t&&t(this),r.manager.itemEnd(e)}function c(h){u(),s&&s(h),r.manager.itemError(e),r.manager.itemEnd(e)}function u(){a.removeEventListener("load",l,!1),a.removeEventListener("error",c,!1)}return a.addEventListener("load",l,!1),a.addEventListener("error",c,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(a.crossOrigin=this.crossOrigin),r.manager.itemStart(e),a.src=e,a}}class Ny extends nr{constructor(e){super(e)}load(e,t,n,s){const r=new Mt,o=new Fy(this.manager);return o.setCrossOrigin(this.crossOrigin),o.setPath(this.path),o.load(e,function(a){r.image=a,r.needsUpdate=!0,t!==void 0&&t(r)},n,s),r}}class mo extends tt{constructor(e,t=1){super();this.isLight=!0,this.type="Light",this.color=new Ce(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),t}}const Zh=new He,$h=new L,Qh=new L;class _l{constructor(e){this.camera=e,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Te(512,512),this.map=null,this.mapPass=null,this.matrix=new He,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new nl,this._frameExtents=new Te(1,1),this._viewportCount=1,this._viewports=[new Qe(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,n=this.matrix;$h.setFromMatrixPosition(e.matrixWorld),t.position.copy($h),Qh.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(Qh),t.updateMatrixWorld(),Zh.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Zh),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(t.projectionMatrix),n.multiply(t.matrixWorldInverse)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}class Oy extends _l{constructor(){super(new Dt(50,1,.5,500));this.isSpotLightShadow=!0,this.focus=1}updateMatrices(e){const t=this.camera,n=Xs*2*e.angle*this.focus,s=this.mapSize.width/this.mapSize.height,r=e.distance||t.far;(n!==t.fov||s!==t.aspect||r!==t.far)&&(t.fov=n,t.aspect=s,t.far=r,t.updateProjectionMatrix()),super.updateMatrices(e)}copy(e){return super.copy(e),this.focus=e.focus,this}}class Uy extends mo{constructor(e,t,n=0,s=Math.PI/3,r=0,o=1){super(e,t);this.isSpotLight=!0,this.type="SpotLight",this.position.copy(tt.DefaultUp),this.updateMatrix(),this.target=new tt,this.distance=n,this.angle=s,this.penumbra=r,this.decay=o,this.shadow=new Oy}get power(){return this.intensity*Math.PI}set power(e){this.intensity=e/Math.PI}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.angle=e.angle,this.penumbra=e.penumbra,this.decay=e.decay,this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}const Jh=new He,ir=new L,xl=new L;class zy extends _l{constructor(){super(new Dt(90,1,.5,500));this.isPointLightShadow=!0,this._frameExtents=new Te(4,2),this._viewportCount=6,this._viewports=[new Qe(2,1,1,1),new Qe(0,1,1,1),new Qe(3,1,1,1),new Qe(1,1,1,1),new Qe(3,0,1,1),new Qe(1,0,1,1)],this._cubeDirections=[new L(1,0,0),new L(-1,0,0),new L(0,0,1),new L(0,0,-1),new L(0,1,0),new L(0,-1,0)],this._cubeUps=[new L(0,1,0),new L(0,1,0),new L(0,1,0),new L(0,1,0),new L(0,0,1),new L(0,0,-1)]}updateMatrices(e,t=0){const n=this.camera,s=this.matrix,r=e.distance||n.far;r!==n.far&&(n.far=r,n.updateProjectionMatrix()),ir.setFromMatrixPosition(e.matrixWorld),n.position.copy(ir),xl.copy(n.position),xl.add(this._cubeDirections[t]),n.up.copy(this._cubeUps[t]),n.lookAt(xl),n.updateMatrixWorld(),s.makeTranslation(-ir.x,-ir.y,-ir.z),Jh.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Jh)}}class By extends mo{constructor(e,t,n=0,s=1){super(e,t);this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=s,this.shadow=new zy}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}}class ky extends _l{constructor(){super(new il(-5,5,5,-5,.5,500));this.isDirectionalLightShadow=!0}}class Hy extends mo{constructor(e,t){super(e,t);this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(tt.DefaultUp),this.updateMatrix(),this.target=new tt,this.shadow=new ky}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}class ZM extends mo{constructor(e,t){super(e,t);this.isAmbientLight=!0,this.type="AmbientLight"}}class wi{static decodeText(e){if(typeof TextDecoder!="undefined")return new TextDecoder().decode(e);let t="";for(let n=0,s=e.length;n<s;n++)t+=String.fromCharCode(e[n]);try{return decodeURIComponent(escape(t))}catch{return t}}static extractUrlBase(e){const t=e.lastIndexOf("/");return t===-1?"./":e.slice(0,t+1)}static resolveURL(e,t){return typeof e!="string"||e===""?"":(/^https?:\/\//i.test(t)&&/^\//.test(e)&&(t=t.replace(/(^https?:\/\/[^\/]+).*/i,"$1")),/^(https?:)?\/\//i.test(e)||/^data:.*,.*$/i.test(e)||/^blob:.*$/i.test(e)?e:t+e)}}class Vy extends nr{constructor(e){super(e);this.isImageBitmapLoader=!0,typeof createImageBitmap=="undefined"&&console.warn("THREE.ImageBitmapLoader: createImageBitmap() not supported."),typeof fetch=="undefined"&&console.warn("THREE.ImageBitmapLoader: fetch() not supported."),this.options={premultiplyAlpha:"none"}}setOptions(e){return this.options=e,this}load(e,t,n,s){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const r=this,o=As.get(e);if(o!==void 0)return r.manager.itemStart(e),setTimeout(function(){t&&t(o),r.manager.itemEnd(e)},0),o;const a={};a.credentials=this.crossOrigin==="anonymous"?"same-origin":"include",a.headers=this.requestHeader,fetch(e,a).then(function(l){return l.blob()}).then(function(l){return createImageBitmap(l,Object.assign(r.options,{colorSpaceConversion:"none"}))}).then(function(l){As.add(e,l),t&&t(l),r.manager.itemEnd(e)}).catch(function(l){s&&s(l),r.manager.itemError(e),r.manager.itemEnd(e)}),r.manager.itemStart(e)}}let go;const Gy={getContext:function(){return go===void 0&&(go=new(window.AudioContext||window.webkitAudioContext)),go},setContext:function(i){go=i}};class Wy{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=ef(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const t=ef();e=(t-this.oldTime)/1e3,this.oldTime=t,this.elapsedTime+=e}return e}}function ef(){return(typeof performance=="undefined"?Date:performance).now()}const Ti=new L,tf=new rt,jy=new L,Ei=new L;class $M extends tt{constructor(){super();this.type="AudioListener",this.context=Gy.getContext(),this.gain=this.context.createGain(),this.gain.connect(this.context.destination),this.filter=null,this.timeDelta=0,this._clock=new Wy}getInput(){return this.gain}removeFilter(){return this.filter!==null&&(this.gain.disconnect(this.filter),this.filter.disconnect(this.context.destination),this.gain.connect(this.context.destination),this.filter=null),this}getFilter(){return this.filter}setFilter(e){return this.filter!==null?(this.gain.disconnect(this.filter),this.filter.disconnect(this.context.destination)):this.gain.disconnect(this.context.destination),this.filter=e,this.gain.connect(this.filter),this.filter.connect(this.context.destination),this}getMasterVolume(){return this.gain.gain.value}setMasterVolume(e){return this.gain.gain.setTargetAtTime(e,this.context.currentTime,.01),this}updateMatrixWorld(e){super.updateMatrixWorld(e);const t=this.context.listener,n=this.up;if(this.timeDelta=this._clock.getDelta(),this.matrixWorld.decompose(Ti,tf,jy),Ei.set(0,0,-1).applyQuaternion(tf),t.positionX){const s=this.context.currentTime+this.timeDelta;t.positionX.linearRampToValueAtTime(Ti.x,s),t.positionY.linearRampToValueAtTime(Ti.y,s),t.positionZ.linearRampToValueAtTime(Ti.z,s),t.forwardX.linearRampToValueAtTime(Ei.x,s),t.forwardY.linearRampToValueAtTime(Ei.y,s),t.forwardZ.linearRampToValueAtTime(Ei.z,s),t.upX.linearRampToValueAtTime(n.x,s),t.upY.linearRampToValueAtTime(n.y,s),t.upZ.linearRampToValueAtTime(n.z,s)}else t.setPosition(Ti.x,Ti.y,Ti.z),t.setOrientation(Ei.x,Ei.y,Ei.z,n.x,n.y,n.z)}}class Xy extends tt{constructor(e){super();this.type="Audio",this.listener=e,this.context=e.context,this.gain=this.context.createGain(),this.gain.connect(e.getInput()),this.autoplay=!1,this.buffer=null,this.detune=0,this.loop=!1,this.loopStart=0,this.loopEnd=0,this.offset=0,this.duration=void 0,this.playbackRate=1,this.isPlaying=!1,this.hasPlaybackControl=!0,this.source=null,this.sourceType="empty",this._startedAt=0,this._progress=0,this._connected=!1,this.filters=[]}getOutput(){return this.gain}setNodeSource(e){return this.hasPlaybackControl=!1,this.sourceType="audioNode",this.source=e,this.connect(),this}setMediaElementSource(e){return this.hasPlaybackControl=!1,this.sourceType="mediaNode",this.source=this.context.createMediaElementSource(e),this.connect(),this}setMediaStreamSource(e){return this.hasPlaybackControl=!1,this.sourceType="mediaStreamNode",this.source=this.context.createMediaStreamSource(e),this.connect(),this}setBuffer(e){return this.buffer=e,this.sourceType="buffer",this.autoplay&&this.play(),this}play(e=0){if(this.isPlaying===!0){console.warn("THREE.Audio: Audio is already playing.");return}if(this.hasPlaybackControl===!1){console.warn("THREE.Audio: this Audio has no playback control.");return}this._startedAt=this.context.currentTime+e;const t=this.context.createBufferSource();return t.buffer=this.buffer,t.loop=this.loop,t.loopStart=this.loopStart,t.loopEnd=this.loopEnd,t.onended=this.onEnded.bind(this),t.start(this._startedAt,this._progress+this.offset,this.duration),this.isPlaying=!0,this.source=t,this.setDetune(this.detune),this.setPlaybackRate(this.playbackRate),this.connect()}pause(){if(this.hasPlaybackControl===!1){console.warn("THREE.Audio: this Audio has no playback control.");return}return this.isPlaying===!0&&(this._progress+=Math.max(this.context.currentTime-this._startedAt,0)*this.playbackRate,this.loop===!0&&(this._progress=this._progress%(this.duration||this.buffer.duration)),this.source.stop(),this.source.onended=null,this.isPlaying=!1),this}stop(){if(this.hasPlaybackControl===!1){console.warn("THREE.Audio: this Audio has no playback control.");return}return this._progress=0,this.source.stop(),this.source.onended=null,this.isPlaying=!1,this}connect(){if(this.filters.length>0){this.source.connect(this.filters[0]);for(let e=1,t=this.filters.length;e<t;e++)this.filters[e-1].connect(this.filters[e]);this.filters[this.filters.length-1].connect(this.getOutput())}else this.source.connect(this.getOutput());return this._connected=!0,this}disconnect(){if(this.filters.length>0){this.source.disconnect(this.filters[0]);for(let e=1,t=this.filters.length;e<t;e++)this.filters[e-1].disconnect(this.filters[e]);this.filters[this.filters.length-1].disconnect(this.getOutput())}else this.source.disconnect(this.getOutput());return this._connected=!1,this}getFilters(){return this.filters}setFilters(e){return e||(e=[]),this._connected===!0?(this.disconnect(),this.filters=e.slice(),this.connect()):this.filters=e.slice(),this}setDetune(e){if(this.detune=e,this.source.detune!==void 0)return this.isPlaying===!0&&this.source.detune.setTargetAtTime(this.detune,this.context.currentTime,.01),this}getDetune(){return this.detune}getFilter(){return this.getFilters()[0]}setFilter(e){return this.setFilters(e?[e]:[])}setPlaybackRate(e){if(this.hasPlaybackControl===!1){console.warn("THREE.Audio: this Audio has no playback control.");return}return this.playbackRate=e,this.isPlaying===!0&&this.source.playbackRate.setTargetAtTime(this.playbackRate,this.context.currentTime,.01),this}getPlaybackRate(){return this.playbackRate}onEnded(){this.isPlaying=!1}getLoop(){return this.hasPlaybackControl===!1?(console.warn("THREE.Audio: this Audio has no playback control."),!1):this.loop}setLoop(e){if(this.hasPlaybackControl===!1){console.warn("THREE.Audio: this Audio has no playback control.");return}return this.loop=e,this.isPlaying===!0&&(this.source.loop=this.loop),this}setLoopStart(e){return this.loopStart=e,this}setLoopEnd(e){return this.loopEnd=e,this}getVolume(){return this.gain.gain.value}setVolume(e){return this.gain.gain.setTargetAtTime(e,this.context.currentTime,.01),this}}const Ai=new L,nf=new rt,qy=new L,Ci=new L;class QM extends Xy{constructor(e){super(e);this.panner=this.context.createPanner(),this.panner.panningModel="HRTF",this.panner.connect(this.gain)}disconnect(){super.disconnect(),this.panner.disconnect(this.gain)}getOutput(){return this.panner}getRefDistance(){return this.panner.refDistance}setRefDistance(e){return this.panner.refDistance=e,this}getRolloffFactor(){return this.panner.rolloffFactor}setRolloffFactor(e){return this.panner.rolloffFactor=e,this}getDistanceModel(){return this.panner.distanceModel}setDistanceModel(e){return this.panner.distanceModel=e,this}getMaxDistance(){return this.panner.maxDistance}setMaxDistance(e){return this.panner.maxDistance=e,this}setDirectionalCone(e,t,n){return this.panner.coneInnerAngle=e,this.panner.coneOuterAngle=t,this.panner.coneOuterGain=n,this}updateMatrixWorld(e){if(super.updateMatrixWorld(e),this.hasPlaybackControl===!0&&this.isPlaying===!1)return;this.matrixWorld.decompose(Ai,nf,qy),Ci.set(0,0,1).applyQuaternion(nf);const t=this.panner;if(t.positionX){const n=this.context.currentTime+this.listener.timeDelta;t.positionX.linearRampToValueAtTime(Ai.x,n),t.positionY.linearRampToValueAtTime(Ai.y,n),t.positionZ.linearRampToValueAtTime(Ai.z,n),t.orientationX.linearRampToValueAtTime(Ci.x,n),t.orientationY.linearRampToValueAtTime(Ci.y,n),t.orientationZ.linearRampToValueAtTime(Ci.z,n)}else t.setPosition(Ai.x,Ai.y,Ai.z),t.setOrientation(Ci.x,Ci.y,Ci.z)}}const vl="\\[\\]\\.:\\/",Yy=new RegExp("["+vl+"]","g"),yl="[^"+vl+"]",Ky="[^"+vl.replace("\\.","")+"]",Zy=/((?:WC+[\/:])*)/.source.replace("WC",yl),$y=/(WCOD+)?/.source.replace("WCOD",Ky),Qy=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",yl),Jy=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",yl),eM=new RegExp("^"+Zy+$y+Qy+Jy+"$"),tM=["material","materials","bones"];class nM{constructor(e,t,n){const s=n||$e.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,s)}getValue(e,t){this.bind();const n=this._targetGroup.nCachedObjects_,s=this._bindings[n];s!==void 0&&s.getValue(e,t)}setValue(e,t){const n=this._bindings;for(let s=this._targetGroup.nCachedObjects_,r=n.length;s!==r;++s)n[s].setValue(e,t)}bind(){const e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].bind()}unbind(){const e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].unbind()}}class $e{constructor(e,t,n){this.path=t,this.parsedPath=n||$e.parseTrackName(t),this.node=$e.findNode(e,this.parsedPath.nodeName)||e,this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,n){return e&&e.isAnimationObjectGroup?new $e.Composite(e,t,n):new $e(e,t,n)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(Yy,"")}static parseTrackName(e){const t=eM.exec(e);if(t===null)throw new Error("PropertyBinding: Cannot parse trackName: "+e);const n={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},s=n.nodeName&&n.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){const r=n.nodeName.substring(s+1);tM.indexOf(r)!==-1&&(n.nodeName=n.nodeName.substring(0,s),n.objectName=r)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+e);return n}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){const n=e.skeleton.getBoneByName(t);if(n!==void 0)return n}if(e.children){const n=function(r){for(let o=0;o<r.length;o++){const a=r[o];if(a.name===t||a.uuid===t)return a;const l=n(a.children);if(l)return l}return null},s=n(e.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){const n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)e[t++]=n[s]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){const n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=e[t++]}_setValue_array_setNeedsUpdate(e,t){const n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){const n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node;const t=this.parsedPath,n=t.objectName,s=t.propertyName;let r=t.propertyIndex;if(e||(e=$e.findNode(this.rootNode,t.nodeName)||this.rootNode,this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){console.error("THREE.PropertyBinding: Trying to update node for track: "+this.path+" but it wasn't found.");return}if(n){let c=t.objectIndex;switch(n){case"materials":if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let u=0;u<e.length;u++)if(e[u].name===c){c=u;break}break;default:if(e[n]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[n]}if(c!==void 0){if(e[c]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[c]}}const o=e[s];if(o===void 0){const c=t.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+c+"."+s+" but it wasn't found.",e);return}let a=this.Versioning.None;this.targetObject=e,e.needsUpdate!==void 0?a=this.Versioning.NeedsUpdate:e.matrixWorldNeedsUpdate!==void 0&&(a=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(r!==void 0){if(s==="morphTargetInfluences"){if(!e.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[r]!==void 0&&(r=e.morphTargetDictionary[r])}l=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=r}else o.fromArray!==void 0&&o.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(l=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=s;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][a]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}}$e.Composite=nM;$e.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};$e.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};$e.prototype.GetterByBindingType=[$e.prototype._getValue_direct,$e.prototype._getValue_array,$e.prototype._getValue_arrayElement,$e.prototype._getValue_toArray];$e.prototype.SetterByBindingTypeAndVersioning=[[$e.prototype._setValue_direct,$e.prototype._setValue_direct_setNeedsUpdate,$e.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[$e.prototype._setValue_array,$e.prototype._setValue_array_setNeedsUpdate,$e.prototype._setValue_array_setMatrixWorldNeedsUpdate],[$e.prototype._setValue_arrayElement,$e.prototype._setValue_arrayElement_setNeedsUpdate,$e.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[$e.prototype._setValue_fromArray,$e.prototype._setValue_fromArray_setNeedsUpdate,$e.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];class iM{constructor(e,t,n=0,s=1/0){this.ray=new qr(e,t),this.near=n,this.far=s,this.camera=null,this.layers=new Wa,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,(t.near+t.far)/(t.near-t.far)).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):console.error("THREE.Raycaster: Unsupported camera type: "+t.type)}intersectObject(e,t=!0,n=[]){return Ml(e,this,n,t),n.sort(sf),n}intersectObjects(e,t=!0,n=[]){for(let s=0,r=e.length;s<r;s++)Ml(e[s],this,n,t);return n.sort(sf),n}}function sf(i,e){return i.distance-e.distance}function Ml(i,e,t,n){if(i.layers.test(e.layers)&&i.raycast(e,t),n===!0){const s=i.children;for(let r=0,o=s.length;r<o;r++)Ml(s[r],e,t,!0)}}class rf{constructor(e=1,t=0,n=0){return this.radius=e,this.phi=t,this.theta=n,this}set(e,t,n){return this.radius=e,this.phi=t,this.theta=n,this}copy(e){return this.radius=e.radius,this.phi=e.phi,this.theta=e.theta,this}makeSafe(){const e=1e-6;return this.phi=Math.max(e,Math.min(Math.PI-e,this.phi)),this}setFromVector3(e){return this.setFromCartesianCoords(e.x,e.y,e.z)}setFromCartesianCoords(e,t,n){return this.radius=Math.sqrt(e*e+t*t+n*n),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(e,n),this.phi=Math.acos(yt(t/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}class JM extends Wh{constructor(e,t=16776960){const n=new Uint16Array([0,1,1,2,2,3,3,0,4,5,5,6,6,7,7,4,0,4,1,5,2,6,3,7]),s=[1,1,1,-1,1,1,-1,-1,1,1,-1,1,1,1,-1,-1,1,-1,-1,-1,-1,1,-1,-1],r=new ft;r.setIndex(new Ct(n,1)),r.setAttribute("position",new nt(s,3));super(r,new Ss({color:t,toneMapped:!1}));this.box=e,this.type="Box3Helper",this.geometry.computeBoundingSphere()}updateMatrixWorld(e){const t=this.box;t.isEmpty()||(t.getCenter(this.position),t.getSize(this.scale),this.scale.multiplyScalar(.5),super.updateMatrixWorld(e))}}typeof __THREE_DEVTOOLS__!="undefined"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:ma}}));typeof window!="undefined"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=ma);const of={type:"change"},bl={type:"start"},af={type:"end"};class eb extends ui{constructor(e,t){super();t===void 0&&console.warn('THREE.OrbitControls: The second parameter "domElement" is now mandatory.'),t===document&&console.error('THREE.OrbitControls: "document" should not be used as the target "domElement". Please use "renderer.domElement" instead.'),this.object=e,this.domElement=t,this.domElement.style.touchAction="none",this.enabled=!0,this.target=new L,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:ji.ROTATE,MIDDLE:ji.DOLLY,RIGHT:ji.PAN},this.touches={ONE:Xi.ROTATE,TWO:Xi.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this.getPolarAngle=function(){return a.phi},this.getAzimuthalAngle=function(){return a.theta},this.getDistance=function(){return this.object.position.distanceTo(this.target)},this.listenToKeyEvents=function(S){S.addEventListener("keydown",ce),this._domElementKeyEvents=S},this.saveState=function(){n.target0.copy(n.target),n.position0.copy(n.object.position),n.zoom0=n.object.zoom},this.reset=function(){n.target.copy(n.target0),n.object.position.copy(n.position0),n.object.zoom=n.zoom0,n.object.updateProjectionMatrix(),n.dispatchEvent(of),n.update(),r=s.NONE},this.update=function(){const S=new L,Y=new rt().setFromUnitVectors(e.up,new L(0,1,0)),ue=Y.clone().invert(),he=new L,P=new rt,fe=2*Math.PI;return function(){const be=n.object.position;S.copy(be).sub(n.target),S.applyQuaternion(Y),a.setFromVector3(S),n.autoRotate&&r===s.NONE&&C(D()),n.enableDamping?(a.theta+=l.theta*n.dampingFactor,a.phi+=l.phi*n.dampingFactor):(a.theta+=l.theta,a.phi+=l.phi);let me=n.minAzimuthAngle,Se=n.maxAzimuthAngle;return isFinite(me)&&isFinite(Se)&&(me<-Math.PI?me+=fe:me>Math.PI&&(me-=fe),Se<-Math.PI?Se+=fe:Se>Math.PI&&(Se-=fe),me<=Se?a.theta=Math.max(me,Math.min(Se,a.theta)):a.theta=a.theta>(me+Se)/2?Math.max(me,a.theta):Math.min(Se,a.theta)),a.phi=Math.max(n.minPolarAngle,Math.min(n.maxPolarAngle,a.phi)),a.makeSafe(),a.radius*=c,a.radius=Math.max(n.minDistance,Math.min(n.maxDistance,a.radius)),n.enableDamping===!0?n.target.addScaledVector(u,n.dampingFactor):n.target.add(u),S.setFromSpherical(a),S.applyQuaternion(ue),be.copy(n.target).add(S),n.object.lookAt(n.target),n.enableDamping===!0?(l.theta*=1-n.dampingFactor,l.phi*=1-n.dampingFactor,u.multiplyScalar(1-n.dampingFactor)):(l.set(0,0,0),u.set(0,0,0)),c=1,h||he.distanceToSquared(n.object.position)>o||8*(1-P.dot(n.object.quaternion))>o?(n.dispatchEvent(of),he.copy(n.object.position),P.copy(n.object.quaternion),h=!1,!0):!1}}(),this.dispose=function(){n.domElement.removeEventListener("contextmenu",F),n.domElement.removeEventListener("pointerdown",I),n.domElement.removeEventListener("pointercancel",ee),n.domElement.removeEventListener("wheel",ae),n.domElement.removeEventListener("pointermove",V),n.domElement.removeEventListener("pointerup",J),n._domElementKeyEvents!==null&&n._domElementKeyEvents.removeEventListener("keydown",ce)};const n=this,s={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6};let r=s.NONE;const o=1e-6,a=new rf,l=new rf;let c=1;const u=new L;let h=!1;const f=new Te,m=new Te,g=new Te,p=new Te,d=new Te,_=new Te,M=new Te,T=new Te,b=new Te,w=[],R={};function D(){return 2*Math.PI/60/60*n.autoRotateSpeed}function x(){return Math.pow(.95,n.zoomSpeed)}function C(S){l.theta-=S}function N(S){l.phi-=S}const U=function(){const S=new L;return function(ue,he){S.setFromMatrixColumn(he,0),S.multiplyScalar(-ue),u.add(S)}}(),Z=function(){const S=new L;return function(ue,he){n.screenSpacePanning===!0?S.setFromMatrixColumn(he,1):(S.setFromMatrixColumn(he,0),S.crossVectors(n.object.up,S)),S.multiplyScalar(ue),u.add(S)}}(),te=function(){const S=new L;return function(ue,he){const P=n.domElement;if(n.object.isPerspectiveCamera){const fe=n.object.position;S.copy(fe).sub(n.target);let pe=S.length();pe*=Math.tan(n.object.fov/2*Math.PI/180),U(2*ue*pe/P.clientHeight,n.object.matrix),Z(2*he*pe/P.clientHeight,n.object.matrix)}else n.object.isOrthographicCamera?(U(ue*(n.object.right-n.object.left)/n.object.zoom/P.clientWidth,n.object.matrix),Z(he*(n.object.top-n.object.bottom)/n.object.zoom/P.clientHeight,n.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),n.enablePan=!1)}}();function O(S){n.object.isPerspectiveCamera?c/=S:n.object.isOrthographicCamera?(n.object.zoom=Math.max(n.minZoom,Math.min(n.maxZoom,n.object.zoom*S)),n.object.updateProjectionMatrix(),h=!0):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),n.enableZoom=!1)}function j(S){n.object.isPerspectiveCamera?c*=S:n.object.isOrthographicCamera?(n.object.zoom=Math.max(n.minZoom,Math.min(n.maxZoom,n.object.zoom/S)),n.object.updateProjectionMatrix(),h=!0):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),n.enableZoom=!1)}function z(S){f.set(S.clientX,S.clientY)}function G(S){M.set(S.clientX,S.clientY)}function W(S){p.set(S.clientX,S.clientY)}function B(S){m.set(S.clientX,S.clientY),g.subVectors(m,f).multiplyScalar(n.rotateSpeed);const Y=n.domElement;C(2*Math.PI*g.x/Y.clientHeight),N(2*Math.PI*g.y/Y.clientHeight),f.copy(m),n.update()}function q(S){T.set(S.clientX,S.clientY),b.subVectors(T,M),b.y>0?O(x()):b.y<0&&j(x()),M.copy(T),n.update()}function le(S){d.set(S.clientX,S.clientY),_.subVectors(d,p).multiplyScalar(n.panSpeed),te(_.x,_.y),p.copy(d),n.update()}function ne(S){S.deltaY<0?j(x()):S.deltaY>0&&O(x()),n.update()}function de(S){let Y=!1;switch(S.code){case n.keys.UP:te(0,n.keyPanSpeed),Y=!0;break;case n.keys.BOTTOM:te(0,-n.keyPanSpeed),Y=!0;break;case n.keys.LEFT:te(n.keyPanSpeed,0),Y=!0;break;case n.keys.RIGHT:te(-n.keyPanSpeed,0),Y=!0;break}Y&&(S.preventDefault(),n.update())}function Me(){if(w.length===1)f.set(w[0].pageX,w[0].pageY);else{const S=.5*(w[0].pageX+w[1].pageX),Y=.5*(w[0].pageY+w[1].pageY);f.set(S,Y)}}function we(){if(w.length===1)p.set(w[0].pageX,w[0].pageY);else{const S=.5*(w[0].pageX+w[1].pageX),Y=.5*(w[0].pageY+w[1].pageY);p.set(S,Y)}}function Q(){const S=w[0].pageX-w[1].pageX,Y=w[0].pageY-w[1].pageY,ue=Math.sqrt(S*S+Y*Y);M.set(0,ue)}function je(){n.enableZoom&&Q(),n.enablePan&&we()}function Re(){n.enableZoom&&Q(),n.enableRotate&&Me()}function Ee(S){if(w.length==1)m.set(S.pageX,S.pageY);else{const ue=ve(S),he=.5*(S.pageX+ue.x),P=.5*(S.pageY+ue.y);m.set(he,P)}g.subVectors(m,f).multiplyScalar(n.rotateSpeed);const Y=n.domElement;C(2*Math.PI*g.x/Y.clientHeight),N(2*Math.PI*g.y/Y.clientHeight),f.copy(m)}function _e(S){if(w.length===1)d.set(S.pageX,S.pageY);else{const Y=ve(S),ue=.5*(S.pageX+Y.x),he=.5*(S.pageY+Y.y);d.set(ue,he)}_.subVectors(d,p).multiplyScalar(n.panSpeed),te(_.x,_.y),p.copy(d)}function Be(S){const Y=ve(S),ue=S.pageX-Y.x,he=S.pageY-Y.y,P=Math.sqrt(ue*ue+he*he);T.set(0,P),b.set(0,Math.pow(T.y/M.y,n.zoomSpeed)),O(b.y),M.copy(T)}function Pe(S){n.enableZoom&&Be(S),n.enablePan&&_e(S)}function A(S){n.enableZoom&&Be(S),n.enableRotate&&Ee(S)}function I(S){n.enabled!==!1&&(w.length===0&&(n.domElement.setPointerCapture(S.pointerId),n.domElement.addEventListener("pointermove",V),n.domElement.addEventListener("pointerup",J)),H(S),S.pointerType==="touch"?y(S):re(S))}function V(S){n.enabled!==!1&&(S.pointerType==="touch"?v(S):oe(S))}function J(S){$(S),w.length===0&&(n.domElement.releasePointerCapture(S.pointerId),n.domElement.removeEventListener("pointermove",V),n.domElement.removeEventListener("pointerup",J)),n.dispatchEvent(af),r=s.NONE}function ee(S){$(S)}function re(S){let Y;switch(S.button){case 0:Y=n.mouseButtons.LEFT;break;case 1:Y=n.mouseButtons.MIDDLE;break;case 2:Y=n.mouseButtons.RIGHT;break;default:Y=-1}switch(Y){case ji.DOLLY:if(n.enableZoom===!1)return;G(S),r=s.DOLLY;break;case ji.ROTATE:if(S.ctrlKey||S.metaKey||S.shiftKey){if(n.enablePan===!1)return;W(S),r=s.PAN}else{if(n.enableRotate===!1)return;z(S),r=s.ROTATE}break;case ji.PAN:if(S.ctrlKey||S.metaKey||S.shiftKey){if(n.enableRotate===!1)return;z(S),r=s.ROTATE}else{if(n.enablePan===!1)return;W(S),r=s.PAN}break;default:r=s.NONE}r!==s.NONE&&n.dispatchEvent(bl)}function oe(S){if(n.enabled!==!1)switch(r){case s.ROTATE:if(n.enableRotate===!1)return;B(S);break;case s.DOLLY:if(n.enableZoom===!1)return;q(S);break;case s.PAN:if(n.enablePan===!1)return;le(S);break}}function ae(S){n.enabled===!1||n.enableZoom===!1||r!==s.NONE||(S.preventDefault(),n.dispatchEvent(bl),ne(S),n.dispatchEvent(af))}function ce(S){n.enabled===!1||n.enablePan===!1||de(S)}function y(S){switch(se(S),w.length){case 1:switch(n.touches.ONE){case Xi.ROTATE:if(n.enableRotate===!1)return;Me(),r=s.TOUCH_ROTATE;break;case Xi.PAN:if(n.enablePan===!1)return;we(),r=s.TOUCH_PAN;break;default:r=s.NONE}break;case 2:switch(n.touches.TWO){case Xi.DOLLY_PAN:if(n.enableZoom===!1&&n.enablePan===!1)return;je(),r=s.TOUCH_DOLLY_PAN;break;case Xi.DOLLY_ROTATE:if(n.enableZoom===!1&&n.enableRotate===!1)return;Re(),r=s.TOUCH_DOLLY_ROTATE;break;default:r=s.NONE}break;default:r=s.NONE}r!==s.NONE&&n.dispatchEvent(bl)}function v(S){switch(se(S),r){case s.TOUCH_ROTATE:if(n.enableRotate===!1)return;Ee(S),n.update();break;case s.TOUCH_PAN:if(n.enablePan===!1)return;_e(S),n.update();break;case s.TOUCH_DOLLY_PAN:if(n.enableZoom===!1&&n.enablePan===!1)return;Pe(S),n.update();break;case s.TOUCH_DOLLY_ROTATE:if(n.enableZoom===!1&&n.enableRotate===!1)return;A(S),n.update();break;default:r=s.NONE}}function F(S){n.enabled!==!1&&S.preventDefault()}function H(S){w.push(S)}function $(S){delete R[S.pointerId];for(let Y=0;Y<w.length;Y++)if(w[Y].pointerId==S.pointerId){w.splice(Y,1);return}}function se(S){let Y=R[S.pointerId];Y===void 0&&(Y=new Te,R[S.pointerId]=Y),Y.set(S.pageX,S.pageY)}function ve(S){const Y=S.pointerId===w[0].pointerId?w[1]:w[0];return R[Y.pointerId]}n.domElement.addEventListener("contextmenu",F),n.domElement.addEventListener("pointerdown",I),n.domElement.addEventListener("pointercancel",ee),n.domElement.addEventListener("wheel",ae,{passive:!1}),this.update()}}class tb extends nr{constructor(e){super(e);this.dracoLoader=null,this.ktx2Loader=null,this.meshoptDecoder=null,this.pluginCallbacks=[],this.register(function(t){return new lM(t)}),this.register(function(t){return new mM(t)}),this.register(function(t){return new gM(t)}),this.register(function(t){return new uM(t)}),this.register(function(t){return new hM(t)}),this.register(function(t){return new fM(t)}),this.register(function(t){return new dM(t)}),this.register(function(t){return new aM(t)}),this.register(function(t){return new pM(t)}),this.register(function(t){return new cM(t)}),this.register(function(t){return new rM(t)}),this.register(function(t){return new _M(t)})}load(e,t,n,s){const r=this;let o;this.resourcePath!==""?o=this.resourcePath:this.path!==""?o=this.path:o=wi.extractUrlBase(e),this.manager.itemStart(e);const a=function(c){s?s(c):console.error(c),r.manager.itemError(e),r.manager.itemEnd(e)},l=new Kh(this.manager);l.setPath(this.path),l.setResponseType("arraybuffer"),l.setRequestHeader(this.requestHeader),l.setWithCredentials(this.withCredentials),l.load(e,function(c){try{r.parse(c,o,function(u){t(u),r.manager.itemEnd(e)},a)}catch(u){a(u)}},n,a)}setDRACOLoader(e){return this.dracoLoader=e,this}setDDSLoader(){throw new Error('THREE.GLTFLoader: "MSFT_texture_dds" no longer supported. Please update to "KHR_texture_basisu".')}setKTX2Loader(e){return this.ktx2Loader=e,this}setMeshoptDecoder(e){return this.meshoptDecoder=e,this}register(e){return this.pluginCallbacks.indexOf(e)===-1&&this.pluginCallbacks.push(e),this}unregister(e){return this.pluginCallbacks.indexOf(e)!==-1&&this.pluginCallbacks.splice(this.pluginCallbacks.indexOf(e),1),this}parse(e,t,n,s){let r;const o={},a={};if(typeof e=="string")r=e;else if(wi.decodeText(new Uint8Array(e,0,4))===lf){try{o[ze.KHR_BINARY_GLTF]=new xM(e)}catch(h){s&&s(h);return}r=o[ze.KHR_BINARY_GLTF].content}else r=wi.decodeText(new Uint8Array(e));const l=JSON.parse(r);if(l.asset===void 0||l.asset.version[0]<2){s&&s(new Error("THREE.GLTFLoader: Unsupported asset. glTF versions >=2.0 are supported."));return}const c=new PM(l,{path:t||this.resourcePath||"",crossOrigin:this.crossOrigin,requestHeader:this.requestHeader,manager:this.manager,ktx2Loader:this.ktx2Loader,meshoptDecoder:this.meshoptDecoder});c.fileLoader.setRequestHeader(this.requestHeader);for(let u=0;u<this.pluginCallbacks.length;u++){const h=this.pluginCallbacks[u](c);a[h.name]=h,o[h.name]=!0}if(l.extensionsUsed)for(let u=0;u<l.extensionsUsed.length;++u){const h=l.extensionsUsed[u],f=l.extensionsRequired||[];switch(h){case ze.KHR_MATERIALS_UNLIT:o[h]=new oM;break;case ze.KHR_MATERIALS_PBR_SPECULAR_GLOSSINESS:o[h]=new MM;break;case ze.KHR_DRACO_MESH_COMPRESSION:o[h]=new vM(l,this.dracoLoader);break;case ze.KHR_TEXTURE_TRANSFORM:o[h]=new yM;break;case ze.KHR_MESH_QUANTIZATION:o[h]=new bM;break;default:f.indexOf(h)>=0&&a[h]===void 0&&console.warn('THREE.GLTFLoader: Unknown extension "'+h+'".')}}c.setExtensions(o),c.setPlugins(a),c.parse(n,s)}parseAsync(e,t){const n=this;return new Promise(function(s,r){n.parse(e,t,s,r)})}}function sM(){let i={};return{get:function(e){return i[e]},add:function(e,t){i[e]=t},remove:function(e){delete i[e]},removeAll:function(){i={}}}}const ze={KHR_BINARY_GLTF:"KHR_binary_glTF",KHR_DRACO_MESH_COMPRESSION:"KHR_draco_mesh_compression",KHR_LIGHTS_PUNCTUAL:"KHR_lights_punctual",KHR_MATERIALS_CLEARCOAT:"KHR_materials_clearcoat",KHR_MATERIALS_IOR:"KHR_materials_ior",KHR_MATERIALS_PBR_SPECULAR_GLOSSINESS:"KHR_materials_pbrSpecularGlossiness",KHR_MATERIALS_SHEEN:"KHR_materials_sheen",KHR_MATERIALS_SPECULAR:"KHR_materials_specular",KHR_MATERIALS_TRANSMISSION:"KHR_materials_transmission",KHR_MATERIALS_IRIDESCENCE:"KHR_materials_iridescence",KHR_MATERIALS_UNLIT:"KHR_materials_unlit",KHR_MATERIALS_VOLUME:"KHR_materials_volume",KHR_TEXTURE_BASISU:"KHR_texture_basisu",KHR_TEXTURE_TRANSFORM:"KHR_texture_transform",KHR_MESH_QUANTIZATION:"KHR_mesh_quantization",KHR_MATERIALS_EMISSIVE_STRENGTH:"KHR_materials_emissive_strength",EXT_TEXTURE_WEBP:"EXT_texture_webp",EXT_MESHOPT_COMPRESSION:"EXT_meshopt_compression"};class rM{constructor(e){this.parser=e,this.name=ze.KHR_LIGHTS_PUNCTUAL,this.cache={refs:{},uses:{}}}_markDefs(){const e=this.parser,t=this.parser.json.nodes||[];for(let n=0,s=t.length;n<s;n++){const r=t[n];r.extensions&&r.extensions[this.name]&&r.extensions[this.name].light!==void 0&&e._addNodeRef(this.cache,r.extensions[this.name].light)}}_loadLight(e){const t=this.parser,n="light:"+e;let s=t.cache.get(n);if(s)return s;const r=t.json,l=((r.extensions&&r.extensions[this.name]||{}).lights||[])[e];let c;const u=new Ce(16777215);l.color!==void 0&&u.fromArray(l.color);const h=l.range!==void 0?l.range:0;switch(l.type){case"directional":c=new Hy(u),c.target.position.set(0,0,-1),c.add(c.target);break;case"point":c=new By(u),c.distance=h;break;case"spot":c=new Uy(u),c.distance=h,l.spot=l.spot||{},l.spot.innerConeAngle=l.spot.innerConeAngle!==void 0?l.spot.innerConeAngle:0,l.spot.outerConeAngle=l.spot.outerConeAngle!==void 0?l.spot.outerConeAngle:Math.PI/4,c.angle=l.spot.outerConeAngle,c.penumbra=1-l.spot.innerConeAngle/l.spot.outerConeAngle,c.target.position.set(0,0,-1),c.add(c.target);break;default:throw new Error("THREE.GLTFLoader: Unexpected light type: "+l.type)}return c.position.set(0,0,0),c.decay=2,l.intensity!==void 0&&(c.intensity=l.intensity),c.name=t.createUniqueName(l.name||"light_"+e),s=Promise.resolve(c),t.cache.add(n,s),s}createNodeAttachment(e){const t=this,n=this.parser,r=n.json.nodes[e],a=(r.extensions&&r.extensions[this.name]||{}).light;return a===void 0?null:this._loadLight(a).then(function(l){return n._getNodeRef(t.cache,a,l)})}}class oM{constructor(){this.name=ze.KHR_MATERIALS_UNLIT}getMaterialType(){return An}extendParams(e,t,n){const s=[];e.color=new Ce(1,1,1),e.opacity=1;const r=t.pbrMetallicRoughness;if(r){if(Array.isArray(r.baseColorFactor)){const o=r.baseColorFactor;e.color.fromArray(o),e.opacity=o[3]}r.baseColorTexture!==void 0&&s.push(n.assignTexture(e,"map",r.baseColorTexture,Ze))}return Promise.all(s)}}class aM{constructor(e){this.parser=e,this.name=ze.KHR_MATERIALS_EMISSIVE_STRENGTH}extendMaterialParams(e,t){const s=this.parser.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const r=s.extensions[this.name].emissiveStrength;return r!==void 0&&(t.emissiveIntensity=r),Promise.resolve()}}class lM{constructor(e){this.parser=e,this.name=ze.KHR_MATERIALS_CLEARCOAT}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:bi}extendMaterialParams(e,t){const n=this.parser,s=n.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const r=[],o=s.extensions[this.name];if(o.clearcoatFactor!==void 0&&(t.clearcoat=o.clearcoatFactor),o.clearcoatTexture!==void 0&&r.push(n.assignTexture(t,"clearcoatMap",o.clearcoatTexture)),o.clearcoatRoughnessFactor!==void 0&&(t.clearcoatRoughness=o.clearcoatRoughnessFactor),o.clearcoatRoughnessTexture!==void 0&&r.push(n.assignTexture(t,"clearcoatRoughnessMap",o.clearcoatRoughnessTexture)),o.clearcoatNormalTexture!==void 0&&(r.push(n.assignTexture(t,"clearcoatNormalMap",o.clearcoatNormalTexture)),o.clearcoatNormalTexture.scale!==void 0)){const a=o.clearcoatNormalTexture.scale;t.clearcoatNormalScale=new Te(a,a)}return Promise.all(r)}}class cM{constructor(e){this.parser=e,this.name=ze.KHR_MATERIALS_IRIDESCENCE}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:bi}extendMaterialParams(e,t){const n=this.parser,s=n.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const r=[],o=s.extensions[this.name];return o.iridescenceFactor!==void 0&&(t.iridescence=o.iridescenceFactor),o.iridescenceTexture!==void 0&&r.push(n.assignTexture(t,"iridescenceMap",o.iridescenceTexture)),o.iridescenceIor!==void 0&&(t.iridescenceIOR=o.iridescenceIor),t.iridescenceThicknessRange===void 0&&(t.iridescenceThicknessRange=[100,400]),o.iridescenceThicknessMinimum!==void 0&&(t.iridescenceThicknessRange[0]=o.iridescenceThicknessMinimum),o.iridescenceThicknessMaximum!==void 0&&(t.iridescenceThicknessRange[1]=o.iridescenceThicknessMaximum),o.iridescenceThicknessTexture!==void 0&&r.push(n.assignTexture(t,"iridescenceThicknessMap",o.iridescenceThicknessTexture)),Promise.all(r)}}class uM{constructor(e){this.parser=e,this.name=ze.KHR_MATERIALS_SHEEN}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:bi}extendMaterialParams(e,t){const n=this.parser,s=n.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const r=[];t.sheenColor=new Ce(0,0,0),t.sheenRoughness=0,t.sheen=1;const o=s.extensions[this.name];return o.sheenColorFactor!==void 0&&t.sheenColor.fromArray(o.sheenColorFactor),o.sheenRoughnessFactor!==void 0&&(t.sheenRoughness=o.sheenRoughnessFactor),o.sheenColorTexture!==void 0&&r.push(n.assignTexture(t,"sheenColorMap",o.sheenColorTexture,Ze)),o.sheenRoughnessTexture!==void 0&&r.push(n.assignTexture(t,"sheenRoughnessMap",o.sheenRoughnessTexture)),Promise.all(r)}}class hM{constructor(e){this.parser=e,this.name=ze.KHR_MATERIALS_TRANSMISSION}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:bi}extendMaterialParams(e,t){const n=this.parser,s=n.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const r=[],o=s.extensions[this.name];return o.transmissionFactor!==void 0&&(t.transmission=o.transmissionFactor),o.transmissionTexture!==void 0&&r.push(n.assignTexture(t,"transmissionMap",o.transmissionTexture)),Promise.all(r)}}class fM{constructor(e){this.parser=e,this.name=ze.KHR_MATERIALS_VOLUME}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:bi}extendMaterialParams(e,t){const n=this.parser,s=n.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const r=[],o=s.extensions[this.name];t.thickness=o.thicknessFactor!==void 0?o.thicknessFactor:0,o.thicknessTexture!==void 0&&r.push(n.assignTexture(t,"thicknessMap",o.thicknessTexture)),t.attenuationDistance=o.attenuationDistance||0;const a=o.attenuationColor||[1,1,1];return t.attenuationColor=new Ce(a[0],a[1],a[2]),Promise.all(r)}}class dM{constructor(e){this.parser=e,this.name=ze.KHR_MATERIALS_IOR}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:bi}extendMaterialParams(e,t){const s=this.parser.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const r=s.extensions[this.name];return t.ior=r.ior!==void 0?r.ior:1.5,Promise.resolve()}}class pM{constructor(e){this.parser=e,this.name=ze.KHR_MATERIALS_SPECULAR}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:bi}extendMaterialParams(e,t){const n=this.parser,s=n.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const r=[],o=s.extensions[this.name];t.specularIntensity=o.specularFactor!==void 0?o.specularFactor:1,o.specularTexture!==void 0&&r.push(n.assignTexture(t,"specularIntensityMap",o.specularTexture));const a=o.specularColorFactor||[1,1,1];return t.specularColor=new Ce(a[0],a[1],a[2]),o.specularColorTexture!==void 0&&r.push(n.assignTexture(t,"specularColorMap",o.specularColorTexture,Ze)),Promise.all(r)}}class mM{constructor(e){this.parser=e,this.name=ze.KHR_TEXTURE_BASISU}loadTexture(e){const t=this.parser,n=t.json,s=n.textures[e];if(!s.extensions||!s.extensions[this.name])return null;const r=s.extensions[this.name],o=t.options.ktx2Loader;if(!o){if(n.extensionsRequired&&n.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setKTX2Loader must be called before loading KTX2 textures");return null}return t.loadTextureImage(e,r.source,o)}}class gM{constructor(e){this.parser=e,this.name=ze.EXT_TEXTURE_WEBP,this.isSupported=null}loadTexture(e){const t=this.name,n=this.parser,s=n.json,r=s.textures[e];if(!r.extensions||!r.extensions[t])return null;const o=r.extensions[t],a=s.images[o.source];let l=n.textureLoader;if(a.uri){const c=n.options.manager.getHandler(a.uri);c!==null&&(l=c)}return this.detectSupport().then(function(c){if(c)return n.loadTextureImage(e,o.source,l);if(s.extensionsRequired&&s.extensionsRequired.indexOf(t)>=0)throw new Error("THREE.GLTFLoader: WebP required by asset but unsupported.");return n.loadTexture(e)})}detectSupport(){return this.isSupported||(this.isSupported=new Promise(function(e){const t=new Image;t.src="data:image/webp;base64,UklGRiIAAABXRUJQVlA4IBYAAAAwAQCdASoBAAEADsD+JaQAA3AAAAAA",t.onload=t.onerror=function(){e(t.height===1)}})),this.isSupported}}class _M{constructor(e){this.name=ze.EXT_MESHOPT_COMPRESSION,this.parser=e}loadBufferView(e){const t=this.parser.json,n=t.bufferViews[e];if(n.extensions&&n.extensions[this.name]){const s=n.extensions[this.name],r=this.parser.getDependency("buffer",s.buffer),o=this.parser.options.meshoptDecoder;if(!o||!o.supported){if(t.extensionsRequired&&t.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setMeshoptDecoder must be called before loading compressed files");return null}return Promise.all([r,o.ready]).then(function(a){const l=s.byteOffset||0,c=s.byteLength||0,u=s.count,h=s.byteStride,f=new ArrayBuffer(u*h),m=new Uint8Array(a[0],l,c);return o.decodeGltfBuffer(new Uint8Array(f),u,h,m,s.mode,s.filter),f})}else return null}}const lf="glTF",sr=12,cf={JSON:1313821514,BIN:5130562};class xM{constructor(e){this.name=ze.KHR_BINARY_GLTF,this.content=null,this.body=null;const t=new DataView(e,0,sr);if(this.header={magic:wi.decodeText(new Uint8Array(e.slice(0,4))),version:t.getUint32(4,!0),length:t.getUint32(8,!0)},this.header.magic!==lf)throw new Error("THREE.GLTFLoader: Unsupported glTF-Binary header.");if(this.header.version<2)throw new Error("THREE.GLTFLoader: Legacy binary file detected.");const n=this.header.length-sr,s=new DataView(e,sr);let r=0;for(;r<n;){const o=s.getUint32(r,!0);r+=4;const a=s.getUint32(r,!0);if(r+=4,a===cf.JSON){const l=new Uint8Array(e,sr+r,o);this.content=wi.decodeText(l)}else if(a===cf.BIN){const l=sr+r;this.body=e.slice(l,l+o)}r+=o}if(this.content===null)throw new Error("THREE.GLTFLoader: JSON content not found.")}}class vM{constructor(e,t){if(!t)throw new Error("THREE.GLTFLoader: No DRACOLoader instance provided.");this.name=ze.KHR_DRACO_MESH_COMPRESSION,this.json=e,this.dracoLoader=t,this.dracoLoader.preload()}decodePrimitive(e,t){const n=this.json,s=this.dracoLoader,r=e.extensions[this.name].bufferView,o=e.extensions[this.name].attributes,a={},l={},c={};for(const u in o){const h=wl[u]||u.toLowerCase();a[h]=o[u]}for(const u in e.attributes){const h=wl[u]||u.toLowerCase();if(o[u]!==void 0){const f=n.accessors[e.attributes[u]],m=rr[f.componentType];c[h]=m,l[h]=f.normalized===!0}}return t.getDependency("bufferView",r).then(function(u){return new Promise(function(h){s.decodeDracoFile(u,function(f){for(const m in f.attributes){const g=f.attributes[m],p=l[m];p!==void 0&&(g.normalized=p)}h(f)},a,c)})})}}class yM{constructor(){this.name=ze.KHR_TEXTURE_TRANSFORM}extendTexture(e,t){return t.texCoord!==void 0&&console.warn('THREE.GLTFLoader: Custom UV sets in "'+this.name+'" extension not yet supported.'),t.offset===void 0&&t.rotation===void 0&&t.scale===void 0||(e=e.clone(),t.offset!==void 0&&e.offset.fromArray(t.offset),t.rotation!==void 0&&(e.rotation=t.rotation),t.scale!==void 0&&e.repeat.fromArray(t.scale),e.needsUpdate=!0),e}}class Sl extends po{constructor(e){super();this.isGLTFSpecularGlossinessMaterial=!0;const t=["#ifdef USE_SPECULARMAP","	uniform sampler2D specularMap;","#endif"].join(`
`),n=["#ifdef USE_GLOSSINESSMAP","	uniform sampler2D glossinessMap;","#endif"].join(`
`),s=["vec3 specularFactor = specular;","#ifdef USE_SPECULARMAP","	vec4 texelSpecular = texture2D( specularMap, vUv );","	// reads channel RGB, compatible with a glTF Specular-Glossiness (RGBA) texture","	specularFactor *= texelSpecular.rgb;","#endif"].join(`
`),r=["float glossinessFactor = glossiness;","#ifdef USE_GLOSSINESSMAP","	vec4 texelGlossiness = texture2D( glossinessMap, vUv );","	// reads channel A, compatible with a glTF Specular-Glossiness (RGBA) texture","	glossinessFactor *= texelGlossiness.a;","#endif"].join(`
`),o=["PhysicalMaterial material;","material.diffuseColor = diffuseColor.rgb * ( 1. - max( specularFactor.r, max( specularFactor.g, specularFactor.b ) ) );","vec3 dxy = max( abs( dFdx( geometryNormal ) ), abs( dFdy( geometryNormal ) ) );","float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );","material.roughness = max( 1.0 - glossinessFactor, 0.0525 ); // 0.0525 corresponds to the base mip of a 256 cubemap.","material.roughness += geometryRoughness;","material.roughness = min( material.roughness, 1.0 );","material.specularColor = specularFactor;"].join(`
`),a={specular:{value:new Ce().setHex(16777215)},glossiness:{value:1},specularMap:{value:null},glossinessMap:{value:null}};this._extraUniforms=a,this.onBeforeCompile=function(l){for(const c in a)l.uniforms[c]=a[c];l.fragmentShader=l.fragmentShader.replace("uniform float roughness;","uniform vec3 specular;").replace("uniform float metalness;","uniform float glossiness;").replace("#include <roughnessmap_pars_fragment>",t).replace("#include <metalnessmap_pars_fragment>",n).replace("#include <roughnessmap_fragment>",s).replace("#include <metalnessmap_fragment>",r).replace("#include <lights_physical_fragment>",o)},Object.defineProperties(this,{specular:{get:function(){return a.specular.value},set:function(l){a.specular.value=l}},specularMap:{get:function(){return a.specularMap.value},set:function(l){a.specularMap.value=l,l?this.defines.USE_SPECULARMAP="":delete this.defines.USE_SPECULARMAP}},glossiness:{get:function(){return a.glossiness.value},set:function(l){a.glossiness.value=l}},glossinessMap:{get:function(){return a.glossinessMap.value},set:function(l){a.glossinessMap.value=l,l?(this.defines.USE_GLOSSINESSMAP="",this.defines.USE_UV=""):(delete this.defines.USE_GLOSSINESSMAP,delete this.defines.USE_UV)}}}),delete this.metalness,delete this.roughness,delete this.metalnessMap,delete this.roughnessMap,this.setValues(e)}copy(e){return super.copy(e),this.specularMap=e.specularMap,this.specular.copy(e.specular),this.glossinessMap=e.glossinessMap,this.glossiness=e.glossiness,delete this.metalness,delete this.roughness,delete this.metalnessMap,delete this.roughnessMap,this}}class MM{constructor(){this.name=ze.KHR_MATERIALS_PBR_SPECULAR_GLOSSINESS,this.specularGlossinessParams=["color","map","lightMap","lightMapIntensity","aoMap","aoMapIntensity","emissive","emissiveIntensity","emissiveMap","bumpMap","bumpScale","normalMap","normalMapType","displacementMap","displacementScale","displacementBias","specularMap","specular","glossinessMap","glossiness","alphaMap","envMap","envMapIntensity"]}getMaterialType(){return Sl}extendParams(e,t,n){const s=t.extensions[this.name];e.color=new Ce(1,1,1),e.opacity=1;const r=[];if(Array.isArray(s.diffuseFactor)){const o=s.diffuseFactor;e.color.fromArray(o),e.opacity=o[3]}if(s.diffuseTexture!==void 0&&r.push(n.assignTexture(e,"map",s.diffuseTexture,Ze)),e.emissive=new Ce(0,0,0),e.glossiness=s.glossinessFactor!==void 0?s.glossinessFactor:1,e.specular=new Ce(1,1,1),Array.isArray(s.specularFactor)&&e.specular.fromArray(s.specularFactor),s.specularGlossinessTexture!==void 0){const o=s.specularGlossinessTexture;r.push(n.assignTexture(e,"glossinessMap",o)),r.push(n.assignTexture(e,"specularMap",o,Ze))}return Promise.all(r)}createMaterial(e){const t=new Sl(e);return t.fog=!0,t.color=e.color,t.map=e.map===void 0?null:e.map,t.lightMap=null,t.lightMapIntensity=1,t.aoMap=e.aoMap===void 0?null:e.aoMap,t.aoMapIntensity=1,t.emissive=e.emissive,t.emissiveIntensity=e.emissiveIntensity===void 0?1:e.emissiveIntensity,t.emissiveMap=e.emissiveMap===void 0?null:e.emissiveMap,t.bumpMap=e.bumpMap===void 0?null:e.bumpMap,t.bumpScale=1,t.normalMap=e.normalMap===void 0?null:e.normalMap,t.normalMapType=Aa,e.normalScale&&(t.normalScale=e.normalScale),t.displacementMap=null,t.displacementScale=1,t.displacementBias=0,t.specularMap=e.specularMap===void 0?null:e.specularMap,t.specular=e.specular,t.glossinessMap=e.glossinessMap===void 0?null:e.glossinessMap,t.glossiness=e.glossiness,t.alphaMap=null,t.envMap=e.envMap===void 0?null:e.envMap,t.envMapIntensity=1,t}}class bM{constructor(){this.name=ze.KHR_MESH_QUANTIZATION}}class uf extends Js{constructor(e,t,n,s){super(e,t,n,s)}copySampleValue_(e){const t=this.resultBuffer,n=this.sampleValues,s=this.valueSize,r=e*s*3+s;for(let o=0;o!==s;o++)t[o]=n[r+o];return t}interpolate_(e,t,n,s){const r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=a*2,c=a*3,u=s-t,h=(n-t)/u,f=h*h,m=f*h,g=e*c,p=g-c,d=-2*m+3*f,_=m-f,M=1-d,T=_-f+h;for(let b=0;b!==a;b++){const w=o[p+b+a],R=o[p+b+l]*u,D=o[g+b+a],x=o[g+b]*u;r[b]=M*w+T*R+d*D+_*x}return r}}const SM=new rt;class wM extends uf{interpolate_(e,t,n,s){const r=super.interpolate_(e,t,n,s);return SM.fromArray(r).normalize().toArray(r),r}}const Ln={FLOAT:5126,FLOAT_MAT3:35675,FLOAT_MAT4:35676,FLOAT_VEC2:35664,FLOAT_VEC3:35665,FLOAT_VEC4:35666,LINEAR:9729,REPEAT:10497,SAMPLER_2D:35678,POINTS:0,LINES:1,LINE_LOOP:2,LINE_STRIP:3,TRIANGLES:4,TRIANGLE_STRIP:5,TRIANGLE_FAN:6,UNSIGNED_BYTE:5121,UNSIGNED_SHORT:5123},rr={5120:Int8Array,5121:Uint8Array,5122:Int16Array,5123:Uint16Array,5125:Uint32Array,5126:Float32Array},hf={9728:pt,9729:xt,9984:ya,9985:cu,9986:Ma,9987:Ji},ff={33071:Ht,33648:Ur,10497:Qi},df={SCALAR:1,VEC2:2,VEC3:3,VEC4:4,MAT2:4,MAT3:9,MAT4:16},wl={POSITION:"position",NORMAL:"normal",TANGENT:"tangent",TEXCOORD_0:"uv",TEXCOORD_1:"uv2",COLOR_0:"color",WEIGHTS_0:"skinWeight",JOINTS_0:"skinIndex"},Yn={scale:"scale",translation:"position",rotation:"quaternion",weights:"morphTargetInfluences"},TM={CUBICSPLINE:void 0,LINEAR:ns,STEP:Ws},Tl={OPAQUE:"OPAQUE",MASK:"MASK",BLEND:"BLEND"};function EM(i){return i.DefaultMaterial===void 0&&(i.DefaultMaterial=new po({color:16777215,emissive:0,metalness:1,roughness:1,transparent:!1,depthTest:!0,side:qi})),i.DefaultMaterial}function or(i,e,t){for(const n in t.extensions)i[n]===void 0&&(e.userData.gltfExtensions=e.userData.gltfExtensions||{},e.userData.gltfExtensions[n]=t.extensions[n])}function Li(i,e){e.extras!==void 0&&(typeof e.extras=="object"?Object.assign(i.userData,e.extras):console.warn("THREE.GLTFLoader: Ignoring primitive type .extras, "+e.extras))}function AM(i,e,t){let n=!1,s=!1,r=!1;for(let c=0,u=e.length;c<u;c++){const h=e[c];if(h.POSITION!==void 0&&(n=!0),h.NORMAL!==void 0&&(s=!0),h.COLOR_0!==void 0&&(r=!0),n&&s&&r)break}if(!n&&!s&&!r)return Promise.resolve(i);const o=[],a=[],l=[];for(let c=0,u=e.length;c<u;c++){const h=e[c];if(n){const f=h.POSITION!==void 0?t.getDependency("accessor",h.POSITION):i.attributes.position;o.push(f)}if(s){const f=h.NORMAL!==void 0?t.getDependency("accessor",h.NORMAL):i.attributes.normal;a.push(f)}if(r){const f=h.COLOR_0!==void 0?t.getDependency("accessor",h.COLOR_0):i.attributes.color;l.push(f)}}return Promise.all([Promise.all(o),Promise.all(a),Promise.all(l)]).then(function(c){const u=c[0],h=c[1],f=c[2];return n&&(i.morphAttributes.position=u),s&&(i.morphAttributes.normal=h),r&&(i.morphAttributes.color=f),i.morphTargetsRelative=!0,i})}function CM(i,e){if(i.updateMorphTargets(),e.weights!==void 0)for(let t=0,n=e.weights.length;t<n;t++)i.morphTargetInfluences[t]=e.weights[t];if(e.extras&&Array.isArray(e.extras.targetNames)){const t=e.extras.targetNames;if(i.morphTargetInfluences.length===t.length){i.morphTargetDictionary={};for(let n=0,s=t.length;n<s;n++)i.morphTargetDictionary[t[n]]=n}else console.warn("THREE.GLTFLoader: Invalid extras.targetNames length. Ignoring names.")}}function LM(i){const e=i.extensions&&i.extensions[ze.KHR_DRACO_MESH_COMPRESSION];let t;return e?t="draco:"+e.bufferView+":"+e.indices+":"+pf(e.attributes):t=i.indices+":"+pf(i.attributes)+":"+i.mode,t}function pf(i){let e="";const t=Object.keys(i).sort();for(let n=0,s=t.length;n<s;n++)e+=t[n]+":"+i[t[n]]+";";return e}function El(i){switch(i){case Int8Array:return 1/127;case Uint8Array:return 1/255;case Int16Array:return 1/32767;case Uint16Array:return 1/65535;default:throw new Error("THREE.GLTFLoader: Unsupported normalized accessor component type.")}}function RM(i){return i.search(/\.jpe?g($|\?)/i)>0||i.search(/^data\:image\/jpeg/)===0?"image/jpeg":i.search(/\.webp($|\?)/i)>0||i.search(/^data\:image\/webp/)===0?"image/webp":"image/png"}class PM{constructor(e={},t={}){this.json=e,this.extensions={},this.plugins={},this.options=t,this.cache=new sM,this.associations=new Map,this.primitiveCache={},this.meshCache={refs:{},uses:{}},this.cameraCache={refs:{},uses:{}},this.lightCache={refs:{},uses:{}},this.sourceCache={},this.textureCache={},this.nodeNamesUsed={};const n=/^((?!chrome|android).)*safari/i.test(navigator.userAgent)===!0,s=navigator.userAgent.indexOf("Firefox")>-1,r=s?navigator.userAgent.match(/Firefox\/([0-9]+)\./)[1]:-1;typeof createImageBitmap=="undefined"||n||s&&r<98?this.textureLoader=new Ny(this.options.manager):this.textureLoader=new Vy(this.options.manager),this.textureLoader.setCrossOrigin(this.options.crossOrigin),this.textureLoader.setRequestHeader(this.options.requestHeader),this.fileLoader=new Kh(this.options.manager),this.fileLoader.setResponseType("arraybuffer"),this.options.crossOrigin==="use-credentials"&&this.fileLoader.setWithCredentials(!0)}setExtensions(e){this.extensions=e}setPlugins(e){this.plugins=e}parse(e,t){const n=this,s=this.json,r=this.extensions;this.cache.removeAll(),this._invokeAll(function(o){return o._markDefs&&o._markDefs()}),Promise.all(this._invokeAll(function(o){return o.beforeRoot&&o.beforeRoot()})).then(function(){return Promise.all([n.getDependencies("scene"),n.getDependencies("animation"),n.getDependencies("camera")])}).then(function(o){const a={scene:o[0][s.scene||0],scenes:o[0],animations:o[1],cameras:o[2],asset:s.asset,parser:n,userData:{}};or(r,a,s),Li(a,s),Promise.all(n._invokeAll(function(l){return l.afterRoot&&l.afterRoot(a)})).then(function(){e(a)})}).catch(t)}_markDefs(){const e=this.json.nodes||[],t=this.json.skins||[],n=this.json.meshes||[];for(let s=0,r=t.length;s<r;s++){const o=t[s].joints;for(let a=0,l=o.length;a<l;a++)e[o[a]].isBone=!0}for(let s=0,r=e.length;s<r;s++){const o=e[s];o.mesh!==void 0&&(this._addNodeRef(this.meshCache,o.mesh),o.skin!==void 0&&(n[o.mesh].isSkinnedMesh=!0)),o.camera!==void 0&&this._addNodeRef(this.cameraCache,o.camera)}}_addNodeRef(e,t){t!==void 0&&(e.refs[t]===void 0&&(e.refs[t]=e.uses[t]=0),e.refs[t]++)}_getNodeRef(e,t,n){if(e.refs[t]<=1)return n;const s=n.clone(),r=(o,a)=>{const l=this.associations.get(o);l!=null&&this.associations.set(a,l);for(const[c,u]of o.children.entries())r(u,a.children[c])};return r(n,s),s.name+="_instance_"+e.uses[t]++,s}_invokeOne(e){const t=Object.values(this.plugins);t.push(this);for(let n=0;n<t.length;n++){const s=e(t[n]);if(s)return s}return null}_invokeAll(e){const t=Object.values(this.plugins);t.unshift(this);const n=[];for(let s=0;s<t.length;s++){const r=e(t[s]);r&&n.push(r)}return n}getDependency(e,t){const n=e+":"+t;let s=this.cache.get(n);if(!s){switch(e){case"scene":s=this.loadScene(t);break;case"node":s=this.loadNode(t);break;case"mesh":s=this._invokeOne(function(r){return r.loadMesh&&r.loadMesh(t)});break;case"accessor":s=this.loadAccessor(t);break;case"bufferView":s=this._invokeOne(function(r){return r.loadBufferView&&r.loadBufferView(t)});break;case"buffer":s=this.loadBuffer(t);break;case"material":s=this._invokeOne(function(r){return r.loadMaterial&&r.loadMaterial(t)});break;case"texture":s=this._invokeOne(function(r){return r.loadTexture&&r.loadTexture(t)});break;case"skin":s=this.loadSkin(t);break;case"animation":s=this._invokeOne(function(r){return r.loadAnimation&&r.loadAnimation(t)});break;case"camera":s=this.loadCamera(t);break;default:throw new Error("Unknown type: "+e)}this.cache.add(n,s)}return s}getDependencies(e){let t=this.cache.get(e);if(!t){const n=this,s=this.json[e+(e==="mesh"?"es":"s")]||[];t=Promise.all(s.map(function(r,o){return n.getDependency(e,o)})),this.cache.add(e,t)}return t}loadBuffer(e){const t=this.json.buffers[e],n=this.fileLoader;if(t.type&&t.type!=="arraybuffer")throw new Error("THREE.GLTFLoader: "+t.type+" buffer type is not supported.");if(t.uri===void 0&&e===0)return Promise.resolve(this.extensions[ze.KHR_BINARY_GLTF].body);const s=this.options;return new Promise(function(r,o){n.load(wi.resolveURL(t.uri,s.path),r,void 0,function(){o(new Error('THREE.GLTFLoader: Failed to load buffer "'+t.uri+'".'))})})}loadBufferView(e){const t=this.json.bufferViews[e];return this.getDependency("buffer",t.buffer).then(function(n){const s=t.byteLength||0,r=t.byteOffset||0;return n.slice(r,r+s)})}loadAccessor(e){const t=this,n=this.json,s=this.json.accessors[e];if(s.bufferView===void 0&&s.sparse===void 0)return Promise.resolve(null);const r=[];return s.bufferView!==void 0?r.push(this.getDependency("bufferView",s.bufferView)):r.push(null),s.sparse!==void 0&&(r.push(this.getDependency("bufferView",s.sparse.indices.bufferView)),r.push(this.getDependency("bufferView",s.sparse.values.bufferView))),Promise.all(r).then(function(o){const a=o[0],l=df[s.type],c=rr[s.componentType],u=c.BYTES_PER_ELEMENT,h=u*l,f=s.byteOffset||0,m=s.bufferView!==void 0?n.bufferViews[s.bufferView].byteStride:void 0,g=s.normalized===!0;let p,d;if(m&&m!==h){const _=Math.floor(f/m),M="InterleavedBuffer:"+s.bufferView+":"+s.componentType+":"+_+":"+s.count;let T=t.cache.get(M);T||(p=new c(a,_*m,s.count*m/u),T=new xy(p,m/u),t.cache.add(M,T)),d=new hl(T,l,f%m/u,g)}else a===null?p=new c(s.count*l):p=new c(a,f,s.count*l),d=new Ct(p,l,g);if(s.sparse!==void 0){const _=df.SCALAR,M=rr[s.sparse.indices.componentType],T=s.sparse.indices.byteOffset||0,b=s.sparse.values.byteOffset||0,w=new M(o[1],T,s.sparse.count*_),R=new c(o[2],b,s.sparse.count*l);a!==null&&(d=new Ct(d.array.slice(),d.itemSize,d.normalized));for(let D=0,x=w.length;D<x;D++){const C=w[D];if(d.setX(C,R[D*l]),l>=2&&d.setY(C,R[D*l+1]),l>=3&&d.setZ(C,R[D*l+2]),l>=4&&d.setW(C,R[D*l+3]),l>=5)throw new Error("THREE.GLTFLoader: Unsupported itemSize in sparse BufferAttribute.")}}return d})}loadTexture(e){const t=this.json,n=this.options,r=t.textures[e].source,o=t.images[r];let a=this.textureLoader;if(o.uri){const l=n.manager.getHandler(o.uri);l!==null&&(a=l)}return this.loadTextureImage(e,r,a)}loadTextureImage(e,t,n){const s=this,r=this.json,o=r.textures[e],a=r.images[t],l=(a.uri||a.bufferView)+":"+o.sampler;if(this.textureCache[l])return this.textureCache[l];const c=this.loadImageSource(t,n).then(function(u){u.flipY=!1,o.name&&(u.name=o.name);const f=(r.samplers||{})[o.sampler]||{};return u.magFilter=hf[f.magFilter]||xt,u.minFilter=hf[f.minFilter]||Ji,u.wrapS=ff[f.wrapS]||Qi,u.wrapT=ff[f.wrapT]||Qi,s.associations.set(u,{textures:e}),u}).catch(function(){return null});return this.textureCache[l]=c,c}loadImageSource(e,t){const n=this,s=this.json,r=this.options;if(this.sourceCache[e]!==void 0)return this.sourceCache[e].then(h=>h.clone());const o=s.images[e],a=self.URL||self.webkitURL;let l=o.uri||"",c=!1;if(o.bufferView!==void 0)l=n.getDependency("bufferView",o.bufferView).then(function(h){c=!0;const f=new Blob([h],{type:o.mimeType});return l=a.createObjectURL(f),l});else if(o.uri===void 0)throw new Error("THREE.GLTFLoader: Image "+e+" is missing URI and bufferView");const u=Promise.resolve(l).then(function(h){return new Promise(function(f,m){let g=f;t.isImageBitmapLoader===!0&&(g=function(p){const d=new Mt(p);d.needsUpdate=!0,f(d)}),t.load(wi.resolveURL(h,r.path),g,void 0,m)})}).then(function(h){return c===!0&&a.revokeObjectURL(l),h.userData.mimeType=o.mimeType||RM(o.uri),h}).catch(function(h){throw console.error("THREE.GLTFLoader: Couldn't load texture",l),h});return this.sourceCache[e]=u,u}assignTexture(e,t,n,s){const r=this;return this.getDependency("texture",n.index).then(function(o){if(n.texCoord!==void 0&&n.texCoord!=0&&!(t==="aoMap"&&n.texCoord==1)&&console.warn("THREE.GLTFLoader: Custom UV set "+n.texCoord+" for texture "+t+" not yet supported."),r.extensions[ze.KHR_TEXTURE_TRANSFORM]){const a=n.extensions!==void 0?n.extensions[ze.KHR_TEXTURE_TRANSFORM]:void 0;if(a){const l=r.associations.get(o);o=r.extensions[ze.KHR_TEXTURE_TRANSFORM].extendTexture(o,a),r.associations.set(o,l)}}return s!==void 0&&(o.encoding=s),e[t]=o,o})}assignFinalMaterial(e){const t=e.geometry;let n=e.material;const s=t.attributes.tangent===void 0,r=t.attributes.color!==void 0,o=t.attributes.normal===void 0;if(e.isPoints){const a="PointsMaterial:"+n.uuid;let l=this.cache.get(a);l||(l=new jh,tn.prototype.copy.call(l,n),l.color.copy(n.color),l.map=n.map,l.sizeAttenuation=!1,this.cache.add(a,l)),n=l}else if(e.isLine){const a="LineBasicMaterial:"+n.uuid;let l=this.cache.get(a);l||(l=new Ss,tn.prototype.copy.call(l,n),l.color.copy(n.color),this.cache.add(a,l)),n=l}if(s||r||o){let a="ClonedMaterial:"+n.uuid+":";n.isGLTFSpecularGlossinessMaterial&&(a+="specular-glossiness:"),s&&(a+="derivative-tangents:"),r&&(a+="vertex-colors:"),o&&(a+="flat-shading:");let l=this.cache.get(a);l||(l=n.clone(),r&&(l.vertexColors=!0),o&&(l.flatShading=!0),s&&(l.normalScale&&(l.normalScale.y*=-1),l.clearcoatNormalScale&&(l.clearcoatNormalScale.y*=-1)),this.cache.add(a,l),this.associations.set(l,this.associations.get(n))),n=l}n.aoMap&&t.attributes.uv2===void 0&&t.attributes.uv!==void 0&&t.setAttribute("uv2",t.attributes.uv),e.material=n}getMaterialType(){return po}loadMaterial(e){const t=this,n=this.json,s=this.extensions,r=n.materials[e];let o;const a={},l=r.extensions||{},c=[];if(l[ze.KHR_MATERIALS_PBR_SPECULAR_GLOSSINESS]){const h=s[ze.KHR_MATERIALS_PBR_SPECULAR_GLOSSINESS];o=h.getMaterialType(),c.push(h.extendParams(a,r,t))}else if(l[ze.KHR_MATERIALS_UNLIT]){const h=s[ze.KHR_MATERIALS_UNLIT];o=h.getMaterialType(),c.push(h.extendParams(a,r,t))}else{const h=r.pbrMetallicRoughness||{};if(a.color=new Ce(1,1,1),a.opacity=1,Array.isArray(h.baseColorFactor)){const f=h.baseColorFactor;a.color.fromArray(f),a.opacity=f[3]}h.baseColorTexture!==void 0&&c.push(t.assignTexture(a,"map",h.baseColorTexture,Ze)),a.metalness=h.metallicFactor!==void 0?h.metallicFactor:1,a.roughness=h.roughnessFactor!==void 0?h.roughnessFactor:1,h.metallicRoughnessTexture!==void 0&&(c.push(t.assignTexture(a,"metalnessMap",h.metallicRoughnessTexture)),c.push(t.assignTexture(a,"roughnessMap",h.metallicRoughnessTexture))),o=this._invokeOne(function(f){return f.getMaterialType&&f.getMaterialType(e)}),c.push(Promise.all(this._invokeAll(function(f){return f.extendMaterialParams&&f.extendMaterialParams(e,a)})))}r.doubleSided===!0&&(a.side=zn);const u=r.alphaMode||Tl.OPAQUE;if(u===Tl.BLEND?(a.transparent=!0,a.depthWrite=!1):(a.transparent=!1,u===Tl.MASK&&(a.alphaTest=r.alphaCutoff!==void 0?r.alphaCutoff:.5)),r.normalTexture!==void 0&&o!==An&&(c.push(t.assignTexture(a,"normalMap",r.normalTexture)),a.normalScale=new Te(1,1),r.normalTexture.scale!==void 0)){const h=r.normalTexture.scale;a.normalScale.set(h,h)}return r.occlusionTexture!==void 0&&o!==An&&(c.push(t.assignTexture(a,"aoMap",r.occlusionTexture)),r.occlusionTexture.strength!==void 0&&(a.aoMapIntensity=r.occlusionTexture.strength)),r.emissiveFactor!==void 0&&o!==An&&(a.emissive=new Ce().fromArray(r.emissiveFactor)),r.emissiveTexture!==void 0&&o!==An&&c.push(t.assignTexture(a,"emissiveMap",r.emissiveTexture,Ze)),Promise.all(c).then(function(){let h;return o===Sl?h=s[ze.KHR_MATERIALS_PBR_SPECULAR_GLOSSINESS].createMaterial(a):h=new o(a),r.name&&(h.name=r.name),Li(h,r),t.associations.set(h,{materials:e}),r.extensions&&or(s,h,r),h})}createUniqueName(e){const t=$e.sanitizeNodeName(e||"");let n=t;for(let s=1;this.nodeNamesUsed[n];++s)n=t+"_"+s;return this.nodeNamesUsed[n]=!0,n}loadGeometries(e){const t=this,n=this.extensions,s=this.primitiveCache;function r(a){return n[ze.KHR_DRACO_MESH_COMPRESSION].decodePrimitive(a,t).then(function(l){return gf(l,a,t)})}const o=[];for(let a=0,l=e.length;a<l;a++){const c=e[a],u=LM(c),h=s[u];if(h)o.push(h.promise);else{let f;c.extensions&&c.extensions[ze.KHR_DRACO_MESH_COMPRESSION]?f=r(c):f=gf(new ft,c,t),s[u]={primitive:c,promise:f},o.push(f)}}return Promise.all(o)}loadMesh(e){const t=this,n=this.json,s=this.extensions,r=n.meshes[e],o=r.primitives,a=[];for(let l=0,c=o.length;l<c;l++){const u=o[l].material===void 0?EM(this.cache):this.getDependency("material",o[l].material);a.push(u)}return a.push(t.loadGeometries(o)),Promise.all(a).then(function(l){const c=l.slice(0,l.length-1),u=l[l.length-1],h=[];for(let m=0,g=u.length;m<g;m++){const p=u[m],d=o[m];let _;const M=c[m];if(d.mode===Ln.TRIANGLES||d.mode===Ln.TRIANGLE_STRIP||d.mode===Ln.TRIANGLE_FAN||d.mode===void 0)_=r.isSkinnedMesh===!0?new yy(p,M):new ye(p,M),_.isSkinnedMesh===!0&&!_.geometry.attributes.skinWeight.normalized&&_.normalizeSkinWeights(),d.mode===Ln.TRIANGLE_STRIP?_.geometry=_f(_.geometry,ng):d.mode===Ln.TRIANGLE_FAN&&(_.geometry=_f(_.geometry,Nu));else if(d.mode===Ln.LINES)_=new Wh(p,M);else if(d.mode===Ln.LINE_STRIP)_=new Wt(p,M);else if(d.mode===Ln.LINE_LOOP)_=new Sy(p,M);else if(d.mode===Ln.POINTS)_=new wy(p,M);else throw new Error("THREE.GLTFLoader: Primitive mode unsupported: "+d.mode);Object.keys(_.geometry.morphAttributes).length>0&&CM(_,r),_.name=t.createUniqueName(r.name||"mesh_"+e),Li(_,r),d.extensions&&or(s,_,d),t.assignFinalMaterial(_),h.push(_)}for(let m=0,g=h.length;m<g;m++)t.associations.set(h[m],{meshes:e,primitives:m});if(h.length===1)return h[0];const f=new yi;t.associations.set(f,{meshes:e});for(let m=0,g=h.length;m<g;m++)f.add(h[m]);return f})}loadCamera(e){let t;const n=this.json.cameras[e],s=n[n.type];if(!s){console.warn("THREE.GLTFLoader: Missing camera parameters.");return}return n.type==="perspective"?t=new Dt(Da.radToDeg(s.yfov),s.aspectRatio||1,s.znear||1,s.zfar||2e6):n.type==="orthographic"&&(t=new il(-s.xmag,s.xmag,s.ymag,-s.ymag,s.znear,s.zfar)),n.name&&(t.name=this.createUniqueName(n.name)),Li(t,n),Promise.resolve(t)}loadSkin(e){const t=this.json.skins[e],n={joints:t.joints};return t.inverseBindMatrices===void 0?Promise.resolve(n):this.getDependency("accessor",t.inverseBindMatrices).then(function(s){return n.inverseBindMatrices=s,n})}loadAnimation(e){const n=this.json.animations[e],s=[],r=[],o=[],a=[],l=[];for(let c=0,u=n.channels.length;c<u;c++){const h=n.channels[c],f=n.samplers[h.sampler],m=h.target,g=m.node!==void 0?m.node:m.id,p=n.parameters!==void 0?n.parameters[f.input]:f.input,d=n.parameters!==void 0?n.parameters[f.output]:f.output;s.push(this.getDependency("node",g)),r.push(this.getDependency("accessor",p)),o.push(this.getDependency("accessor",d)),a.push(f),l.push(m)}return Promise.all([Promise.all(s),Promise.all(r),Promise.all(o),Promise.all(a),Promise.all(l)]).then(function(c){const u=c[0],h=c[1],f=c[2],m=c[3],g=c[4],p=[];for(let _=0,M=u.length;_<M;_++){const T=u[_],b=h[_],w=f[_],R=m[_],D=g[_];if(T===void 0)continue;T.updateMatrix(),T.matrixAutoUpdate=!0;let x;switch(Yn[D.path]){case Yn.weights:x=er;break;case Yn.rotation:x=Si;break;case Yn.position:case Yn.scale:default:x=tr;break}const C=T.name?T.name:T.uuid,N=R.interpolation!==void 0?TM[R.interpolation]:ns,U=[];Yn[D.path]===Yn.weights?T.traverse(function(te){te.morphTargetInfluences&&U.push(te.name?te.name:te.uuid)}):U.push(C);let Z=w.array;if(w.normalized){const te=El(Z.constructor),O=new Float32Array(Z.length);for(let j=0,z=Z.length;j<z;j++)O[j]=Z[j]*te;Z=O}for(let te=0,O=U.length;te<O;te++){const j=new x(U[te]+"."+Yn[D.path],b.array,Z,N);R.interpolation==="CUBICSPLINE"&&(j.createInterpolant=function(G){const W=this instanceof Si?wM:uf;return new W(this.times,this.values,this.getValueSize()/3,G)},j.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline=!0),p.push(j)}}const d=n.name?n.name:"animation_"+e;return new Ly(d,void 0,p)})}createNodeMesh(e){const t=this.json,n=this,s=t.nodes[e];return s.mesh===void 0?null:n.getDependency("mesh",s.mesh).then(function(r){const o=n._getNodeRef(n.meshCache,s.mesh,r);return s.weights!==void 0&&o.traverse(function(a){if(!!a.isMesh)for(let l=0,c=s.weights.length;l<c;l++)a.morphTargetInfluences[l]=s.weights[l]}),o})}loadNode(e){const t=this.json,n=this.extensions,s=this,r=t.nodes[e],o=r.name?s.createUniqueName(r.name):"";return function(){const a=[],l=s._invokeOne(function(c){return c.createNodeMesh&&c.createNodeMesh(e)});return l&&a.push(l),r.camera!==void 0&&a.push(s.getDependency("camera",r.camera).then(function(c){return s._getNodeRef(s.cameraCache,r.camera,c)})),s._invokeAll(function(c){return c.createNodeAttachment&&c.createNodeAttachment(e)}).forEach(function(c){a.push(c)}),Promise.all(a)}().then(function(a){let l;if(r.isBone===!0?l=new Uh:a.length>1?l=new yi:a.length===1?l=a[0]:l=new tt,l!==a[0])for(let c=0,u=a.length;c<u;c++)l.add(a[c]);if(r.name&&(l.userData.name=r.name,l.name=o),Li(l,r),r.extensions&&or(n,l,r),r.matrix!==void 0){const c=new He;c.fromArray(r.matrix),l.applyMatrix4(c)}else r.translation!==void 0&&l.position.fromArray(r.translation),r.rotation!==void 0&&l.quaternion.fromArray(r.rotation),r.scale!==void 0&&l.scale.fromArray(r.scale);return s.associations.has(l)||s.associations.set(l,{}),s.associations.get(l).nodes=e,l})}loadScene(e){const t=this.json,n=this.extensions,s=this.json.scenes[e],r=this,o=new yi;s.name&&(o.name=r.createUniqueName(s.name)),Li(o,s),s.extensions&&or(n,o,s);const a=s.nodes||[],l=[];for(let c=0,u=a.length;c<u;c++)l.push(mf(a[c],o,t,r));return Promise.all(l).then(function(){const c=u=>{const h=new Map;for(const[f,m]of r.associations)(f instanceof tn||f instanceof Mt)&&h.set(f,m);return u.traverse(f=>{const m=r.associations.get(f);m!=null&&h.set(f,m)}),h};return r.associations=c(o),o})}}function mf(i,e,t,n){const s=t.nodes[i];return n.getDependency("node",i).then(function(r){if(s.skin===void 0)return r;let o;return n.getDependency("skin",s.skin).then(function(a){o=a;const l=[];for(let c=0,u=o.joints.length;c<u;c++)l.push(n.getDependency("node",o.joints[c]));return Promise.all(l)}).then(function(a){return r.traverse(function(l){if(!l.isMesh)return;const c=[],u=[];for(let h=0,f=a.length;h<f;h++){const m=a[h];if(m){c.push(m);const g=new He;o.inverseBindMatrices!==void 0&&g.fromArray(o.inverseBindMatrices.array,h*16),u.push(g)}else console.warn('THREE.GLTFLoader: Joint "%s" could not be found.',o.joints[h])}l.bind(new fl(c,u),l.matrixWorld)}),r})}).then(function(r){e.add(r);const o=[];if(s.children){const a=s.children;for(let l=0,c=a.length;l<c;l++){const u=a[l];o.push(mf(u,r,t,n))}}return Promise.all(o)})}function IM(i,e,t){const n=e.attributes,s=new ss;if(n.POSITION!==void 0){const a=t.json.accessors[n.POSITION],l=a.min,c=a.max;if(l!==void 0&&c!==void 0){if(s.set(new L(l[0],l[1],l[2]),new L(c[0],c[1],c[2])),a.normalized){const u=El(rr[a.componentType]);s.min.multiplyScalar(u),s.max.multiplyScalar(u)}}else{console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.");return}}else return;const r=e.targets;if(r!==void 0){const a=new L,l=new L;for(let c=0,u=r.length;c<u;c++){const h=r[c];if(h.POSITION!==void 0){const f=t.json.accessors[h.POSITION],m=f.min,g=f.max;if(m!==void 0&&g!==void 0){if(l.setX(Math.max(Math.abs(m[0]),Math.abs(g[0]))),l.setY(Math.max(Math.abs(m[1]),Math.abs(g[1]))),l.setZ(Math.max(Math.abs(m[2]),Math.abs(g[2]))),f.normalized){const p=El(rr[f.componentType]);l.multiplyScalar(p)}a.max(l)}else console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.")}}s.expandByVector(a)}i.boundingBox=s;const o=new ls;s.getCenter(o.center),o.radius=s.min.distanceTo(s.max)/2,i.boundingSphere=o}function gf(i,e,t){const n=e.attributes,s=[];function r(o,a){return t.getDependency("accessor",o).then(function(l){i.setAttribute(a,l)})}for(const o in n){const a=wl[o]||o.toLowerCase();a in i.attributes||s.push(r(n[o],a))}if(e.indices!==void 0&&!i.index){const o=t.getDependency("accessor",e.indices).then(function(a){i.setIndex(a)});s.push(o)}return Li(i,e),IM(i,e,t),Promise.all(s).then(function(){return e.targets!==void 0?AM(i,e.targets,t):i})}function _f(i,e){let t=i.getIndex();if(t===null){const o=[],a=i.getAttribute("position");if(a!==void 0){for(let l=0;l<a.count;l++)o.push(l);i.setIndex(o),t=i.getIndex()}else return console.error("THREE.GLTFLoader.toTrianglesDrawMode(): Undefined position attribute. Processing not possible."),i}const n=t.count-2,s=[];if(e===Nu)for(let o=1;o<=n;o++)s.push(t.getX(0)),s.push(t.getX(o)),s.push(t.getX(o+1));else for(let o=0;o<n;o++)o%2==0?(s.push(t.getX(o)),s.push(t.getX(o+1)),s.push(t.getX(o+2))):(s.push(t.getX(o+2)),s.push(t.getX(o+1)),s.push(t.getX(o)));s.length/3!==n&&console.error("THREE.GLTFLoader.toTrianglesDrawMode(): Unable to generate correct amount of triangles.");const r=i.clone();return r.setIndex(s),r}class nb extends Wt{constructor(e,t=1,n=16,s=2){const r=new ft,o=n+s*2,a=new Float32Array((o*3+3)*3);r.setAttribute("position",new Ct(a,3));const l=new Ss({color:65280}),c=new Ss({color:16776960});super(r,[c,l]);this.audio=e,this.range=t,this.divisionsInnerAngle=n,this.divisionsOuterAngle=s,this.type="PositionalAudioHelper",this.update()}update(){const e=this.audio,t=this.range,n=this.divisionsInnerAngle,s=this.divisionsOuterAngle,r=Da.degToRad(e.panner.coneInnerAngle),o=Da.degToRad(e.panner.coneOuterAngle),a=r/2,l=o/2;let c=0,u=0,h,f;const m=this.geometry,g=m.attributes.position;m.clearGroups();function p(d,_,M,T){const b=(_-d)/M;for(g.setXYZ(c,0,0,0),u++,h=d;h<_;h+=b)f=c+u,g.setXYZ(f,Math.sin(h)*t,0,Math.cos(h)*t),g.setXYZ(f+1,Math.sin(Math.min(h+b,_))*t,0,Math.cos(Math.min(h+b,_))*t),g.setXYZ(f+2,0,0,0),u+=3;m.addGroup(c,u,T),c+=u,u=0}p(-l,-a,s,0),p(-a,a,n,1),p(a,l,s,0),g.needsUpdate=!0,r===o&&(this.material[0].visible=!1)}dispose(){this.geometry.dispose(),this.material[0].dispose(),this.material[1].dispose()}}const Ri=new iM,Ft=new L,Kn=new L,st=new rt,xf={X:new L(1,0,0),Y:new L(0,1,0),Z:new L(0,0,1)},Al={type:"change"},vf={type:"mouseDown"},yf={type:"mouseUp",mode:null},Mf={type:"objectChange"};class ib extends tt{constructor(e,t){super();t===void 0&&(console.warn('THREE.TransformControls: The second parameter "domElement" is now mandatory.'),t=document),this.isTransformControls=!0,this.visible=!1,this.domElement=t,this.domElement.style.touchAction="none";const n=new zM;this._gizmo=n,this.add(n);const s=new BM;this._plane=s,this.add(s);const r=this;function o(M,T){let b=T;Object.defineProperty(r,M,{get:function(){return b!==void 0?b:T},set:function(w){b!==w&&(b=w,s[M]=w,n[M]=w,r.dispatchEvent({type:M+"-changed",value:w}),r.dispatchEvent(Al))}}),r[M]=T,s[M]=T,n[M]=T}o("camera",e),o("object",void 0),o("enabled",!0),o("axis",null),o("mode","translate"),o("translationSnap",null),o("rotationSnap",null),o("scaleSnap",null),o("space","world"),o("size",1),o("dragging",!1),o("showX",!0),o("showY",!0),o("showZ",!0);const a=new L,l=new L,c=new rt,u=new rt,h=new L,f=new rt,m=new L,g=new L,p=new L,d=0,_=new L;o("worldPosition",a),o("worldPositionStart",l),o("worldQuaternion",c),o("worldQuaternionStart",u),o("cameraPosition",h),o("cameraQuaternion",f),o("pointStart",m),o("pointEnd",g),o("rotationAxis",p),o("rotationAngle",d),o("eye",_),this._offset=new L,this._startNorm=new L,this._endNorm=new L,this._cameraScale=new L,this._parentPosition=new L,this._parentQuaternion=new rt,this._parentQuaternionInv=new rt,this._parentScale=new L,this._worldScaleStart=new L,this._worldQuaternionInv=new rt,this._worldScale=new L,this._positionStart=new L,this._quaternionStart=new rt,this._scaleStart=new L,this._getPointer=DM.bind(this),this._onPointerDown=NM.bind(this),this._onPointerHover=FM.bind(this),this._onPointerMove=OM.bind(this),this._onPointerUp=UM.bind(this),this.domElement.addEventListener("pointerdown",this._onPointerDown),this.domElement.addEventListener("pointermove",this._onPointerHover),this.domElement.addEventListener("pointerup",this._onPointerUp)}updateMatrixWorld(){this.object!==void 0&&(this.object.updateMatrixWorld(),this.object.parent===null?console.error("TransformControls: The attached 3D object must be a part of the scene graph."):this.object.parent.matrixWorld.decompose(this._parentPosition,this._parentQuaternion,this._parentScale),this.object.matrixWorld.decompose(this.worldPosition,this.worldQuaternion,this._worldScale),this._parentQuaternionInv.copy(this._parentQuaternion).invert(),this._worldQuaternionInv.copy(this.worldQuaternion).invert()),this.camera.updateMatrixWorld(),this.camera.matrixWorld.decompose(this.cameraPosition,this.cameraQuaternion,this._cameraScale),this.camera.isOrthographicCamera?this.camera.getWorldDirection(this.eye):this.eye.copy(this.cameraPosition).sub(this.worldPosition).normalize(),super.updateMatrixWorld(this)}pointerHover(e){if(this.object===void 0||this.dragging===!0)return;Ri.setFromCamera(e,this.camera);const t=Cl(this._gizmo.picker[this.mode],Ri);t?this.axis=t.object.name:this.axis=null}pointerDown(e){if(!(this.object===void 0||this.dragging===!0||e.button!==0)&&this.axis!==null){Ri.setFromCamera(e,this.camera);const t=Cl(this._plane,Ri,!0);t&&(this.object.updateMatrixWorld(),this.object.parent.updateMatrixWorld(),this._positionStart.copy(this.object.position),this._quaternionStart.copy(this.object.quaternion),this._scaleStart.copy(this.object.scale),this.object.matrixWorld.decompose(this.worldPositionStart,this.worldQuaternionStart,this._worldScaleStart),this.pointStart.copy(t.point).sub(this.worldPositionStart)),this.dragging=!0,vf.mode=this.mode,this.dispatchEvent(vf)}}pointerMove(e){const t=this.axis,n=this.mode,s=this.object;let r=this.space;if(n==="scale"?r="local":(t==="E"||t==="XYZE"||t==="XYZ")&&(r="world"),s===void 0||t===null||this.dragging===!1||e.button!==-1)return;Ri.setFromCamera(e,this.camera);const o=Cl(this._plane,Ri,!0);if(!!o){if(this.pointEnd.copy(o.point).sub(this.worldPositionStart),n==="translate")this._offset.copy(this.pointEnd).sub(this.pointStart),r==="local"&&t!=="XYZ"&&this._offset.applyQuaternion(this._worldQuaternionInv),t.indexOf("X")===-1&&(this._offset.x=0),t.indexOf("Y")===-1&&(this._offset.y=0),t.indexOf("Z")===-1&&(this._offset.z=0),r==="local"&&t!=="XYZ"?this._offset.applyQuaternion(this._quaternionStart).divide(this._parentScale):this._offset.applyQuaternion(this._parentQuaternionInv).divide(this._parentScale),s.position.copy(this._offset).add(this._positionStart),this.translationSnap&&(r==="local"&&(s.position.applyQuaternion(st.copy(this._quaternionStart).invert()),t.search("X")!==-1&&(s.position.x=Math.round(s.position.x/this.translationSnap)*this.translationSnap),t.search("Y")!==-1&&(s.position.y=Math.round(s.position.y/this.translationSnap)*this.translationSnap),t.search("Z")!==-1&&(s.position.z=Math.round(s.position.z/this.translationSnap)*this.translationSnap),s.position.applyQuaternion(this._quaternionStart)),r==="world"&&(s.parent&&s.position.add(Ft.setFromMatrixPosition(s.parent.matrixWorld)),t.search("X")!==-1&&(s.position.x=Math.round(s.position.x/this.translationSnap)*this.translationSnap),t.search("Y")!==-1&&(s.position.y=Math.round(s.position.y/this.translationSnap)*this.translationSnap),t.search("Z")!==-1&&(s.position.z=Math.round(s.position.z/this.translationSnap)*this.translationSnap),s.parent&&s.position.sub(Ft.setFromMatrixPosition(s.parent.matrixWorld))));else if(n==="scale"){if(t.search("XYZ")!==-1){let a=this.pointEnd.length()/this.pointStart.length();this.pointEnd.dot(this.pointStart)<0&&(a*=-1),Kn.set(a,a,a)}else Ft.copy(this.pointStart),Kn.copy(this.pointEnd),Ft.applyQuaternion(this._worldQuaternionInv),Kn.applyQuaternion(this._worldQuaternionInv),Kn.divide(Ft),t.search("X")===-1&&(Kn.x=1),t.search("Y")===-1&&(Kn.y=1),t.search("Z")===-1&&(Kn.z=1);s.scale.copy(this._scaleStart).multiply(Kn),this.scaleSnap&&(t.search("X")!==-1&&(s.scale.x=Math.round(s.scale.x/this.scaleSnap)*this.scaleSnap||this.scaleSnap),t.search("Y")!==-1&&(s.scale.y=Math.round(s.scale.y/this.scaleSnap)*this.scaleSnap||this.scaleSnap),t.search("Z")!==-1&&(s.scale.z=Math.round(s.scale.z/this.scaleSnap)*this.scaleSnap||this.scaleSnap))}else if(n==="rotate"){this._offset.copy(this.pointEnd).sub(this.pointStart);const a=20/this.worldPosition.distanceTo(Ft.setFromMatrixPosition(this.camera.matrixWorld));t==="E"?(this.rotationAxis.copy(this.eye),this.rotationAngle=this.pointEnd.angleTo(this.pointStart),this._startNorm.copy(this.pointStart).normalize(),this._endNorm.copy(this.pointEnd).normalize(),this.rotationAngle*=this._endNorm.cross(this._startNorm).dot(this.eye)<0?1:-1):t==="XYZE"?(this.rotationAxis.copy(this._offset).cross(this.eye).normalize(),this.rotationAngle=this._offset.dot(Ft.copy(this.rotationAxis).cross(this.eye))*a):(t==="X"||t==="Y"||t==="Z")&&(this.rotationAxis.copy(xf[t]),Ft.copy(xf[t]),r==="local"&&Ft.applyQuaternion(this.worldQuaternion),this.rotationAngle=this._offset.dot(Ft.cross(this.eye).normalize())*a),this.rotationSnap&&(this.rotationAngle=Math.round(this.rotationAngle/this.rotationSnap)*this.rotationSnap),r==="local"&&t!=="E"&&t!=="XYZE"?(s.quaternion.copy(this._quaternionStart),s.quaternion.multiply(st.setFromAxisAngle(this.rotationAxis,this.rotationAngle)).normalize()):(this.rotationAxis.applyQuaternion(this._parentQuaternionInv),s.quaternion.copy(st.setFromAxisAngle(this.rotationAxis,this.rotationAngle)),s.quaternion.multiply(this._quaternionStart).normalize())}this.dispatchEvent(Al),this.dispatchEvent(Mf)}}pointerUp(e){e.button===0&&(this.dragging&&this.axis!==null&&(yf.mode=this.mode,this.dispatchEvent(yf)),this.dragging=!1,this.axis=null)}dispose(){this.domElement.removeEventListener("pointerdown",this._onPointerDown),this.domElement.removeEventListener("pointermove",this._onPointerHover),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.traverse(function(e){e.geometry&&e.geometry.dispose(),e.material&&e.material.dispose()})}attach(e){return this.object=e,this.visible=!0,this}detach(){return this.object=void 0,this.visible=!1,this.axis=null,this}reset(){!this.enabled||this.dragging&&(this.object.position.copy(this._positionStart),this.object.quaternion.copy(this._quaternionStart),this.object.scale.copy(this._scaleStart),this.dispatchEvent(Al),this.dispatchEvent(Mf),this.pointStart.copy(this.pointEnd))}getRaycaster(){return Ri}getMode(){return this.mode}setMode(e){this.mode=e}setTranslationSnap(e){this.translationSnap=e}setRotationSnap(e){this.rotationSnap=e}setScaleSnap(e){this.scaleSnap=e}setSize(e){this.size=e}setSpace(e){this.space=e}update(){console.warn("THREE.TransformControls: update function has no more functionality and therefore has been deprecated.")}}function DM(i){if(this.domElement.ownerDocument.pointerLockElement)return{x:0,y:0,button:i.button};{const e=this.domElement.getBoundingClientRect();return{x:(i.clientX-e.left)/e.width*2-1,y:-(i.clientY-e.top)/e.height*2+1,button:i.button}}}function FM(i){if(!!this.enabled)switch(i.pointerType){case"mouse":case"pen":this.pointerHover(this._getPointer(i));break}}function NM(i){!this.enabled||(document.pointerLockElement||this.domElement.setPointerCapture(i.pointerId),this.domElement.addEventListener("pointermove",this._onPointerMove),this.pointerHover(this._getPointer(i)),this.pointerDown(this._getPointer(i)))}function OM(i){!this.enabled||this.pointerMove(this._getPointer(i))}function UM(i){!this.enabled||(this.domElement.releasePointerCapture(i.pointerId),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.pointerUp(this._getPointer(i)))}function Cl(i,e,t){const n=e.intersectObject(i,!0);for(let s=0;s<n.length;s++)if(n[s].object.visible||t)return n[s];return!1}const _o=new us,Je=new L(0,1,0),bf=new L(0,0,0),Sf=new He,xo=new rt,vo=new rt,pn=new L,wf=new He,ar=new L(1,0,0),Pi=new L(0,1,0),lr=new L(0,0,1),yo=new L,cr=new L,ur=new L;class zM extends tt{constructor(){super();this.isTransformControlsGizmo=!0,this.type="TransformControlsGizmo";const e=new An({depthTest:!1,depthWrite:!1,fog:!1,toneMapped:!1,transparent:!0}),t=new Ss({depthTest:!1,depthWrite:!1,fog:!1,toneMapped:!1,transparent:!0}),n=e.clone();n.opacity=.15;const s=t.clone();s.opacity=.5;const r=e.clone();r.color.setHex(16711680);const o=e.clone();o.color.setHex(65280);const a=e.clone();a.color.setHex(255);const l=e.clone();l.color.setHex(16711680),l.opacity=.5;const c=e.clone();c.color.setHex(65280),c.opacity=.5;const u=e.clone();u.color.setHex(255),u.opacity=.5;const h=e.clone();h.opacity=.25;const f=e.clone();f.color.setHex(16776960),f.opacity=.25,e.clone().color.setHex(16776960);const g=e.clone();g.color.setHex(7895160);const p=new St(0,.04,.1,12);p.translate(0,.05,0);const d=new ct(.08,.08,.08);d.translate(0,.04,0);const _=new ft;_.setAttribute("position",new nt([0,0,0,1,0,0],3));const M=new St(.0075,.0075,.5,3);M.translate(0,.25,0);function T(j,z){const G=new Mi(j,.0075,3,64,z*Math.PI*2);return G.rotateY(Math.PI/2),G.rotateX(Math.PI/2),G}function b(){const j=new ft;return j.setAttribute("position",new nt([0,0,0,1,1,1],3)),j}const w={X:[[new ye(p,r),[.5,0,0],[0,0,-Math.PI/2]],[new ye(p,r),[-.5,0,0],[0,0,Math.PI/2]],[new ye(M,r),[0,0,0],[0,0,-Math.PI/2]]],Y:[[new ye(p,o),[0,.5,0]],[new ye(p,o),[0,-.5,0],[Math.PI,0,0]],[new ye(M,o)]],Z:[[new ye(p,a),[0,0,.5],[Math.PI/2,0,0]],[new ye(p,a),[0,0,-.5],[-Math.PI/2,0,0]],[new ye(M,a),null,[Math.PI/2,0,0]]],XYZ:[[new ye(new ws(.1,0),h.clone()),[0,0,0]]],XY:[[new ye(new ct(.15,.15,.01),u.clone()),[.15,.15,0]]],YZ:[[new ye(new ct(.15,.15,.01),l.clone()),[0,.15,.15],[0,Math.PI/2,0]]],XZ:[[new ye(new ct(.15,.15,.01),c.clone()),[.15,0,.15],[-Math.PI/2,0,0]]]},R={X:[[new ye(new St(.2,0,.6,4),n),[.3,0,0],[0,0,-Math.PI/2]],[new ye(new St(.2,0,.6,4),n),[-.3,0,0],[0,0,Math.PI/2]]],Y:[[new ye(new St(.2,0,.6,4),n),[0,.3,0]],[new ye(new St(.2,0,.6,4),n),[0,-.3,0],[0,0,Math.PI]]],Z:[[new ye(new St(.2,0,.6,4),n),[0,0,.3],[Math.PI/2,0,0]],[new ye(new St(.2,0,.6,4),n),[0,0,-.3],[-Math.PI/2,0,0]]],XYZ:[[new ye(new ws(.2,0),n)]],XY:[[new ye(new ct(.2,.2,.01),n),[.15,.15,0]]],YZ:[[new ye(new ct(.2,.2,.01),n),[0,.15,.15],[0,Math.PI/2,0]]],XZ:[[new ye(new ct(.2,.2,.01),n),[.15,0,.15],[-Math.PI/2,0,0]]]},D={START:[[new ye(new ws(.01,2),s),null,null,null,"helper"]],END:[[new ye(new ws(.01,2),s),null,null,null,"helper"]],DELTA:[[new Wt(b(),s),null,null,null,"helper"]],X:[[new Wt(_,s.clone()),[-1e3,0,0],null,[1e6,1,1],"helper"]],Y:[[new Wt(_,s.clone()),[0,-1e3,0],[0,0,Math.PI/2],[1e6,1,1],"helper"]],Z:[[new Wt(_,s.clone()),[0,0,-1e3],[0,-Math.PI/2,0],[1e6,1,1],"helper"]]},x={XYZE:[[new ye(T(.5,1),g),null,[0,Math.PI/2,0]]],X:[[new ye(T(.5,.5),r)]],Y:[[new ye(T(.5,.5),o),null,[0,0,-Math.PI/2]]],Z:[[new ye(T(.5,.5),a),null,[0,Math.PI/2,0]]],E:[[new ye(T(.75,1),f),null,[0,Math.PI/2,0]]]},C={AXIS:[[new Wt(_,s.clone()),[-1e3,0,0],null,[1e6,1,1],"helper"]]},N={XYZE:[[new ye(new gl(.25,10,8),n)]],X:[[new ye(new Mi(.5,.1,4,24),n),[0,0,0],[0,-Math.PI/2,-Math.PI/2]]],Y:[[new ye(new Mi(.5,.1,4,24),n),[0,0,0],[Math.PI/2,0,0]]],Z:[[new ye(new Mi(.5,.1,4,24),n),[0,0,0],[0,0,-Math.PI/2]]],E:[[new ye(new Mi(.75,.1,2,24),n)]]},U={X:[[new ye(d,r),[.5,0,0],[0,0,-Math.PI/2]],[new ye(M,r),[0,0,0],[0,0,-Math.PI/2]],[new ye(d,r),[-.5,0,0],[0,0,Math.PI/2]]],Y:[[new ye(d,o),[0,.5,0]],[new ye(M,o)],[new ye(d,o),[0,-.5,0],[0,0,Math.PI]]],Z:[[new ye(d,a),[0,0,.5],[Math.PI/2,0,0]],[new ye(M,a),[0,0,0],[Math.PI/2,0,0]],[new ye(d,a),[0,0,-.5],[-Math.PI/2,0,0]]],XY:[[new ye(new ct(.15,.15,.01),u),[.15,.15,0]]],YZ:[[new ye(new ct(.15,.15,.01),l),[0,.15,.15],[0,Math.PI/2,0]]],XZ:[[new ye(new ct(.15,.15,.01),c),[.15,0,.15],[-Math.PI/2,0,0]]],XYZ:[[new ye(new ct(.1,.1,.1),h.clone())]]},Z={X:[[new ye(new St(.2,0,.6,4),n),[.3,0,0],[0,0,-Math.PI/2]],[new ye(new St(.2,0,.6,4),n),[-.3,0,0],[0,0,Math.PI/2]]],Y:[[new ye(new St(.2,0,.6,4),n),[0,.3,0]],[new ye(new St(.2,0,.6,4),n),[0,-.3,0],[0,0,Math.PI]]],Z:[[new ye(new St(.2,0,.6,4),n),[0,0,.3],[Math.PI/2,0,0]],[new ye(new St(.2,0,.6,4),n),[0,0,-.3],[-Math.PI/2,0,0]]],XY:[[new ye(new ct(.2,.2,.01),n),[.15,.15,0]]],YZ:[[new ye(new ct(.2,.2,.01),n),[0,.15,.15],[0,Math.PI/2,0]]],XZ:[[new ye(new ct(.2,.2,.01),n),[.15,0,.15],[-Math.PI/2,0,0]]],XYZ:[[new ye(new ct(.2,.2,.2),n),[0,0,0]]]},te={X:[[new Wt(_,s.clone()),[-1e3,0,0],null,[1e6,1,1],"helper"]],Y:[[new Wt(_,s.clone()),[0,-1e3,0],[0,0,Math.PI/2],[1e6,1,1],"helper"]],Z:[[new Wt(_,s.clone()),[0,0,-1e3],[0,-Math.PI/2,0],[1e6,1,1],"helper"]]};function O(j){const z=new tt;for(const G in j)for(let W=j[G].length;W--;){const B=j[G][W][0].clone(),q=j[G][W][1],le=j[G][W][2],ne=j[G][W][3],de=j[G][W][4];B.name=G,B.tag=de,q&&B.position.set(q[0],q[1],q[2]),le&&B.rotation.set(le[0],le[1],le[2]),ne&&B.scale.set(ne[0],ne[1],ne[2]),B.updateMatrix();const Me=B.geometry.clone();Me.applyMatrix4(B.matrix),B.geometry=Me,B.renderOrder=1/0,B.position.set(0,0,0),B.rotation.set(0,0,0),B.scale.set(1,1,1),z.add(B)}return z}this.gizmo={},this.picker={},this.helper={},this.add(this.gizmo.translate=O(w)),this.add(this.gizmo.rotate=O(x)),this.add(this.gizmo.scale=O(U)),this.add(this.picker.translate=O(R)),this.add(this.picker.rotate=O(N)),this.add(this.picker.scale=O(Z)),this.add(this.helper.translate=O(D)),this.add(this.helper.rotate=O(C)),this.add(this.helper.scale=O(te)),this.picker.translate.visible=!1,this.picker.rotate.visible=!1,this.picker.scale.visible=!1}updateMatrixWorld(e){const n=(this.mode==="scale"?"local":this.space)==="local"?this.worldQuaternion:vo;this.gizmo.translate.visible=this.mode==="translate",this.gizmo.rotate.visible=this.mode==="rotate",this.gizmo.scale.visible=this.mode==="scale",this.helper.translate.visible=this.mode==="translate",this.helper.rotate.visible=this.mode==="rotate",this.helper.scale.visible=this.mode==="scale";let s=[];s=s.concat(this.picker[this.mode].children),s=s.concat(this.gizmo[this.mode].children),s=s.concat(this.helper[this.mode].children);for(let r=0;r<s.length;r++){const o=s[r];o.visible=!0,o.rotation.set(0,0,0),o.position.copy(this.worldPosition);let a;if(this.camera.isOrthographicCamera?a=(this.camera.top-this.camera.bottom)/this.camera.zoom:a=this.worldPosition.distanceTo(this.cameraPosition)*Math.min(1.9*Math.tan(Math.PI*this.camera.fov/360)/this.camera.zoom,7),o.scale.set(1,1,1).multiplyScalar(a*this.size/4),o.tag==="helper"){o.visible=!1,o.name==="AXIS"?(o.position.copy(this.worldPositionStart),o.visible=!!this.axis,this.axis==="X"&&(st.setFromEuler(_o.set(0,0,0)),o.quaternion.copy(n).multiply(st),Math.abs(Je.copy(ar).applyQuaternion(n).dot(this.eye))>.9&&(o.visible=!1)),this.axis==="Y"&&(st.setFromEuler(_o.set(0,0,Math.PI/2)),o.quaternion.copy(n).multiply(st),Math.abs(Je.copy(Pi).applyQuaternion(n).dot(this.eye))>.9&&(o.visible=!1)),this.axis==="Z"&&(st.setFromEuler(_o.set(0,Math.PI/2,0)),o.quaternion.copy(n).multiply(st),Math.abs(Je.copy(lr).applyQuaternion(n).dot(this.eye))>.9&&(o.visible=!1)),this.axis==="XYZE"&&(st.setFromEuler(_o.set(0,Math.PI/2,0)),Je.copy(this.rotationAxis),o.quaternion.setFromRotationMatrix(Sf.lookAt(bf,Je,Pi)),o.quaternion.multiply(st),o.visible=this.dragging),this.axis==="E"&&(o.visible=!1)):o.name==="START"?(o.position.copy(this.worldPositionStart),o.visible=this.dragging):o.name==="END"?(o.position.copy(this.worldPosition),o.visible=this.dragging):o.name==="DELTA"?(o.position.copy(this.worldPositionStart),o.quaternion.copy(this.worldQuaternionStart),Ft.set(1e-10,1e-10,1e-10).add(this.worldPositionStart).sub(this.worldPosition).multiplyScalar(-1),Ft.applyQuaternion(this.worldQuaternionStart.clone().invert()),o.scale.copy(Ft),o.visible=this.dragging):(o.quaternion.copy(n),this.dragging?o.position.copy(this.worldPositionStart):o.position.copy(this.worldPosition),this.axis&&(o.visible=this.axis.search(o.name)!==-1));continue}if(o.quaternion.copy(n),this.mode==="translate"||this.mode==="scale"){const l=.99,c=.2;o.name==="X"&&Math.abs(Je.copy(ar).applyQuaternion(n).dot(this.eye))>l&&(o.scale.set(1e-10,1e-10,1e-10),o.visible=!1),o.name==="Y"&&Math.abs(Je.copy(Pi).applyQuaternion(n).dot(this.eye))>l&&(o.scale.set(1e-10,1e-10,1e-10),o.visible=!1),o.name==="Z"&&Math.abs(Je.copy(lr).applyQuaternion(n).dot(this.eye))>l&&(o.scale.set(1e-10,1e-10,1e-10),o.visible=!1),o.name==="XY"&&Math.abs(Je.copy(lr).applyQuaternion(n).dot(this.eye))<c&&(o.scale.set(1e-10,1e-10,1e-10),o.visible=!1),o.name==="YZ"&&Math.abs(Je.copy(ar).applyQuaternion(n).dot(this.eye))<c&&(o.scale.set(1e-10,1e-10,1e-10),o.visible=!1),o.name==="XZ"&&Math.abs(Je.copy(Pi).applyQuaternion(n).dot(this.eye))<c&&(o.scale.set(1e-10,1e-10,1e-10),o.visible=!1)}else this.mode==="rotate"&&(xo.copy(n),Je.copy(this.eye).applyQuaternion(st.copy(n).invert()),o.name.search("E")!==-1&&o.quaternion.setFromRotationMatrix(Sf.lookAt(this.eye,bf,Pi)),o.name==="X"&&(st.setFromAxisAngle(ar,Math.atan2(-Je.y,Je.z)),st.multiplyQuaternions(xo,st),o.quaternion.copy(st)),o.name==="Y"&&(st.setFromAxisAngle(Pi,Math.atan2(Je.x,Je.z)),st.multiplyQuaternions(xo,st),o.quaternion.copy(st)),o.name==="Z"&&(st.setFromAxisAngle(lr,Math.atan2(Je.y,Je.x)),st.multiplyQuaternions(xo,st),o.quaternion.copy(st)));o.visible=o.visible&&(o.name.indexOf("X")===-1||this.showX),o.visible=o.visible&&(o.name.indexOf("Y")===-1||this.showY),o.visible=o.visible&&(o.name.indexOf("Z")===-1||this.showZ),o.visible=o.visible&&(o.name.indexOf("E")===-1||this.showX&&this.showY&&this.showZ),o.material._color=o.material._color||o.material.color.clone(),o.material._opacity=o.material._opacity||o.material.opacity,o.material.color.copy(o.material._color),o.material.opacity=o.material._opacity,this.enabled&&this.axis&&(o.name===this.axis||this.axis.split("").some(function(l){return o.name===l}))&&(o.material.color.setHex(16776960),o.material.opacity=1)}super.updateMatrixWorld(e)}}class BM extends ye{constructor(){super(new oo(1e5,1e5,2,2),new An({visible:!1,wireframe:!0,side:zn,transparent:!0,opacity:.1,toneMapped:!1}));this.isTransformControlsPlane=!0,this.type="TransformControlsPlane"}updateMatrixWorld(e){let t=this.space;switch(this.position.copy(this.worldPosition),this.mode==="scale"&&(t="local"),yo.copy(ar).applyQuaternion(t==="local"?this.worldQuaternion:vo),cr.copy(Pi).applyQuaternion(t==="local"?this.worldQuaternion:vo),ur.copy(lr).applyQuaternion(t==="local"?this.worldQuaternion:vo),Je.copy(cr),this.mode){case"translate":case"scale":switch(this.axis){case"X":Je.copy(this.eye).cross(yo),pn.copy(yo).cross(Je);break;case"Y":Je.copy(this.eye).cross(cr),pn.copy(cr).cross(Je);break;case"Z":Je.copy(this.eye).cross(ur),pn.copy(ur).cross(Je);break;case"XY":pn.copy(ur);break;case"YZ":pn.copy(yo);break;case"XZ":Je.copy(ur),pn.copy(cr);break;case"XYZ":case"E":pn.set(0,0,0);break}break;case"rotate":default:pn.set(0,0,0)}pn.length()===0?this.quaternion.copy(this.cameraQuaternion):(wf.lookAt(Ft.set(0,0,0),pn,Je),this.quaternion.setFromRotationMatrix(wf)),super.updateMatrixWorld(e)}}export{$M as A,ss as B,Ht as C,cn as F,tb as G,xt as L,KM as M,eb as O,Dt as P,iM as R,qM as S,ib as T,L as V,gy as W,YM as a,ye as b,ct as c,ji as d,Te as e,QM as f,nb as g,gl as h,An as i,JM as j,po as k,ZM as l,By as m,Uy as n,VM as o,vc as p,GM as q,yd as r,Ze as s,WM as t,Bc as u,kM as v,HM as w,jM as x,XM as y};
