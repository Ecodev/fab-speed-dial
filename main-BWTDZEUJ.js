var Ev=Object.defineProperty,wv=Object.defineProperties;var Sv=Object.getOwnPropertyDescriptors;var pu=Object.getOwnPropertySymbols;var Iv=Object.prototype.hasOwnProperty,Dv=Object.prototype.propertyIsEnumerable;var mu=(e,t,n)=>t in e?Ev(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,w=(e,t)=>{for(var n in t||={})Iv.call(t,n)&&mu(e,n,t[n]);if(pu)for(var n of pu(t))Dv.call(t,n)&&mu(e,n,t[n]);return e},U=(e,t)=>wv(e,Sv(t));var Ce=null,mi=!1,cn=1,Cv=null,ne=Symbol("SIGNAL");function S(e){let t=Ce;return Ce=e,t}function hi(){return Ce}var Ht={version:0,lastCleanEpoch:0,dirty:!1,producers:void 0,producersTail:void 0,consumers:void 0,consumersTail:void 0,recomputing:!1,consumerAllowSignalWrites:!1,consumerIsAlwaysLive:!1,kind:"unknown",producerMustRecompute:()=>!1,producerRecomputeValue:()=>{},consumerMarkedDirty:()=>{},consumerOnSignalRead:()=>{}};function un(e){if(mi)throw new Error("");if(Ce===null)return;Ce.consumerOnSignalRead(e);let t=Ce.producersTail;if(t!==void 0&&t.producer===e)return;let n,r=Ce.recomputing;if(r&&(n=t!==void 0?t.nextProducer:Ce.producers,n!==void 0&&n.producer===e)){Ce.producersTail=n,n.lastReadVersion=e.version,n.knownValidAtEpoch=cn;return}let o=e.consumersTail;if(o!==void 0&&o.consumer===Ce&&(!r||o.knownValidAtEpoch===cn))return;let i=ir(Ce),s={producer:e,consumer:Ce,nextProducer:n,prevConsumer:void 0,knownValidAtEpoch:cn,lastReadVersion:e.version,nextConsumer:void 0};Ce.producersTail=s,t!==void 0?t.nextProducer=s:Ce.producers=s,i&&bu(e,s)}function hu(){cn++}function fn(e){if(!(ir(e)&&!e.dirty)&&!(!e.dirty&&e.lastCleanEpoch===cn)){if(!e.producerMustRecompute(e)&&!Jr(e)){or(e);return}e.producerRecomputeValue(e),or(e)}}function Ta(e){if(e.consumers===void 0)return;let t=mi;mi=!0;try{for(let n=e.consumers;n!==void 0;n=n.nextConsumer){let r=n.consumer;r.dirty||Nv(r)}}finally{mi=t}}function Ma(){return Ce?.consumerAllowSignalWrites!==!1}function Nv(e){e.dirty=!0,Ta(e),e.consumerMarkedDirty?.(e)}function or(e){e.dirty=!1,e.lastCleanEpoch=cn}function Bt(e){return e&&gu(e),S(e)}function gu(e){if(e.producersTail?.knownValidAtEpoch===cn){let t=e.producers;for(;t!==void 0;)t.knownValidAtEpoch=null,t=t.nextProducer}e.producersTail=void 0,e.recomputing=!0}function pn(e,t){S(t),e&&vu(e)}function vu(e){e.recomputing=!1;let t=e.producersTail,n=t!==void 0?t.nextProducer:e.producers;if(n!==void 0){if(ir(e))do n=xa(n);while(n!==void 0);t!==void 0?t.nextProducer=void 0:e.producers=void 0}}function Jr(e){for(let t=e.producers;t!==void 0;t=t.nextProducer){let n=t.producer,r=t.lastReadVersion;if(r!==n.version||(fn(n),r!==n.version))return!0}return!1}function mn(e){if(ir(e)){let t=e.producers;for(;t!==void 0;)t=xa(t)}e.producers=void 0,e.producersTail=void 0,e.consumers=void 0,e.consumersTail=void 0}function bu(e,t){let n=e.consumersTail,r=ir(e);if(n!==void 0?(t.nextConsumer=n.nextConsumer,n.nextConsumer=t):(t.nextConsumer=void 0,e.consumers=t),t.prevConsumer=n,e.consumersTail=t,!r)for(let o=e.producers;o!==void 0;o=o.nextProducer)bu(o.producer,o)}function xa(e){let t=e.producer,n=e.nextProducer,r=e.nextConsumer,o=e.prevConsumer;if(e.nextConsumer=void 0,e.prevConsumer=void 0,r!==void 0?r.prevConsumer=o:t.consumersTail=o,o!==void 0)o.nextConsumer=r;else if(t.consumers=r,!ir(t)){let i=t.producers;for(;i!==void 0;)i=xa(i)}return n}function ir(e){return e.consumerIsAlwaysLive||e.consumers!==void 0}function eo(e){Cv?.(e)}function to(e,t){return Object.is(e,t)}function no(e,t){let n=Object.create(Tv);n.computation=e,t!==void 0&&(n.equal=t);let r=()=>{if(fn(n),un(n),n.value===nt)throw n.error;return n.value};return r[ne]=n,eo(n),r}var ln=Symbol("UNSET"),dn=Symbol("COMPUTING"),nt=Symbol("ERRORED"),Tv=U(w({},Ht),{value:ln,dirty:!0,error:null,equal:to,kind:"computed",producerMustRecompute(e){return e.value===ln||e.value===dn},producerRecomputeValue(e){if(e.value===dn)throw new Error("");let t=e.value;e.value=dn;let n=Bt(e),r,o=!1;try{r=e.computation(),S(null),o=t!==ln&&t!==nt&&r!==nt&&e.equal(t,r)}catch(i){r=nt,e.error=i}finally{pn(e,n)}if(o){e.value=t;return}e.value=r,e.version++}});function Mv(){throw new Error}var yu=Mv;function _u(e){yu(e)}function Aa(e){yu=e}var xv=null;function Ra(e,t){let n=Object.create(ro);n.value=e,t!==void 0&&(n.equal=t);let r=()=>Eu(n);return r[ne]=n,eo(n),[r,s=>Ut(n,s),s=>gi(n,s)]}function Eu(e){return un(e),e.value}function Ut(e,t){Ma()||_u(e),e.equal(e.value,t)||(e.value=t,Av(e))}function gi(e,t){Ma()||_u(e),Ut(e,t(e.value))}var ro=U(w({},Ht),{equal:to,value:void 0,kind:"signal"});function Av(e){e.version++,hu(),Ta(e),xv?.(e)}var ka=U(w({},Ht),{consumerIsAlwaysLive:!0,consumerAllowSignalWrites:!0,dirty:!0,kind:"effect"});function Oa(e){if(e.dirty=!1,e.version>0&&!Jr(e))return;e.version++;let t=Bt(e);try{e.cleanup(),e.fn()}finally{pn(e,t)}}var Pa;function vi(){return Pa}function rt(e){let t=Pa;return Pa=e,t}var wu=Symbol("NotFound");function sr(e){return e===wu||e?.name==="\u0275NotFound"}function Fa(e,t,n){let r=Object.create(Rv);r.source=e,r.computation=t,n!=null&&(r.equal=n);let i=()=>{if(fn(r),un(r),r.value===nt)throw r.error;return r.value};return i[ne]=r,eo(r),i}function La(e,t){fn(e),Ut(e,t),or(e)}function Su(e,t){if(fn(e),e.value===nt)throw e.error;gi(e,t),or(e)}var Rv=U(w({},Ht),{value:ln,dirty:!0,error:null,equal:to,kind:"linkedSignal",producerMustRecompute(e){return e.value===ln||e.value===dn},producerRecomputeValue(e){if(e.value===dn)throw new Error("");let t=e.value;e.value=dn;let n=Bt(e),r,o=!1;try{let i=e.source(),s=t!==ln&&t!==nt,a=s?{source:e.sourceValue,value:t}:void 0;r=e.computation(i,a),e.sourceValue=i,S(null),o=s&&r!==nt&&e.equal(t,r)}catch(i){r=nt,e.error=i}finally{pn(e,n)}if(o){e.value=t;return}e.value=r,e.version++}});function Iu(e){let t=S(null);try{return e()}finally{S(t)}}function D(e){return typeof e=="function"}function bi(e){let n=e(r=>{Error.call(r),r.stack=new Error().stack});return n.prototype=Object.create(Error.prototype),n.prototype.constructor=n,n}var yi=bi(e=>function(n){e(this),this.message=n?`${n.length} errors occurred during unsubscription:
${n.map((r,o)=>`${o+1}) ${r.toString()}`).join(`
  `)}`:"",this.name="UnsubscriptionError",this.errors=n});function oo(e,t){if(e){let n=e.indexOf(t);0<=n&&e.splice(n,1)}}var le=class e{constructor(t){this.initialTeardown=t,this.closed=!1,this._parentage=null,this._finalizers=null}unsubscribe(){let t;if(!this.closed){this.closed=!0;let{_parentage:n}=this;if(n)if(this._parentage=null,Array.isArray(n))for(let i of n)i.remove(this);else n.remove(this);let{initialTeardown:r}=this;if(D(r))try{r()}catch(i){t=i instanceof yi?i.errors:[i]}let{_finalizers:o}=this;if(o){this._finalizers=null;for(let i of o)try{Du(i)}catch(s){t=t??[],s instanceof yi?t=[...t,...s.errors]:t.push(s)}}if(t)throw new yi(t)}}add(t){var n;if(t&&t!==this)if(this.closed)Du(t);else{if(t instanceof e){if(t.closed||t._hasParent(this))return;t._addParent(this)}(this._finalizers=(n=this._finalizers)!==null&&n!==void 0?n:[]).push(t)}}_hasParent(t){let{_parentage:n}=this;return n===t||Array.isArray(n)&&n.includes(t)}_addParent(t){let{_parentage:n}=this;this._parentage=Array.isArray(n)?(n.push(t),n):n?[n,t]:t}_removeParent(t){let{_parentage:n}=this;n===t?this._parentage=null:Array.isArray(n)&&oo(n,t)}remove(t){let{_finalizers:n}=this;n&&oo(n,t),t instanceof e&&t._removeParent(this)}};le.EMPTY=(()=>{let e=new le;return e.closed=!0,e})();var Va=le.EMPTY;function _i(e){return e instanceof le||e&&"closed"in e&&D(e.remove)&&D(e.add)&&D(e.unsubscribe)}function Du(e){D(e)?e():e.unsubscribe()}var Ze={onUnhandledError:null,onStoppedNotification:null,Promise:void 0,useDeprecatedSynchronousErrorHandling:!1,useDeprecatedNextContext:!1};var ar={setTimeout(e,t,...n){let{delegate:r}=ar;return r?.setTimeout?r.setTimeout(e,t,...n):setTimeout(e,t,...n)},clearTimeout(e){let{delegate:t}=ar;return(t?.clearTimeout||clearTimeout)(e)},delegate:void 0};function Ei(e){ar.setTimeout(()=>{let{onUnhandledError:t}=Ze;if(t)t(e);else throw e})}function io(){}var Cu=ja("C",void 0,void 0);function Nu(e){return ja("E",void 0,e)}function Tu(e){return ja("N",e,void 0)}function ja(e,t,n){return{kind:e,value:t,error:n}}var hn=null;function cr(e){if(Ze.useDeprecatedSynchronousErrorHandling){let t=!hn;if(t&&(hn={errorThrown:!1,error:null}),e(),t){let{errorThrown:n,error:r}=hn;if(hn=null,n)throw r}}else e()}function Mu(e){Ze.useDeprecatedSynchronousErrorHandling&&hn&&(hn.errorThrown=!0,hn.error=e)}var gn=class extends le{constructor(t){super(),this.isStopped=!1,t?(this.destination=t,_i(t)&&t.add(this)):this.destination=Pv}static create(t,n,r){return new ht(t,n,r)}next(t){this.isStopped?Ba(Tu(t),this):this._next(t)}error(t){this.isStopped?Ba(Nu(t),this):(this.isStopped=!0,this._error(t))}complete(){this.isStopped?Ba(Cu,this):(this.isStopped=!0,this._complete())}unsubscribe(){this.closed||(this.isStopped=!0,super.unsubscribe(),this.destination=null)}_next(t){this.destination.next(t)}_error(t){try{this.destination.error(t)}finally{this.unsubscribe()}}_complete(){try{this.destination.complete()}finally{this.unsubscribe()}}},kv=Function.prototype.bind;function Ha(e,t){return kv.call(e,t)}var Ua=class{constructor(t){this.partialObserver=t}next(t){let{partialObserver:n}=this;if(n.next)try{n.next(t)}catch(r){wi(r)}}error(t){let{partialObserver:n}=this;if(n.error)try{n.error(t)}catch(r){wi(r)}else wi(t)}complete(){let{partialObserver:t}=this;if(t.complete)try{t.complete()}catch(n){wi(n)}}},ht=class extends gn{constructor(t,n,r){super();let o;if(D(t)||!t)o={next:t??void 0,error:n??void 0,complete:r??void 0};else{let i;this&&Ze.useDeprecatedNextContext?(i=Object.create(t),i.unsubscribe=()=>this.unsubscribe(),o={next:t.next&&Ha(t.next,i),error:t.error&&Ha(t.error,i),complete:t.complete&&Ha(t.complete,i)}):o=t}this.destination=new Ua(o)}};function wi(e){Ze.useDeprecatedSynchronousErrorHandling?Mu(e):Ei(e)}function Ov(e){throw e}function Ba(e,t){let{onStoppedNotification:n}=Ze;n&&ar.setTimeout(()=>n(e,t))}var Pv={closed:!0,next:io,error:Ov,complete:io};var lr=typeof Symbol=="function"&&Symbol.observable||"@@observable";function dr(e){return e}function xu(e){return e.length===0?dr:e.length===1?e[0]:function(n){return e.reduce((r,o)=>o(r),n)}}var O=class e{constructor(t){t&&(this._subscribe=t)}lift(t){let n=new e;return n.source=this,n.operator=t,n}subscribe(t,n,r){let o=Lv(t)?t:new ht(t,n,r);return cr(()=>{let{operator:i,source:s}=this;o.add(i?i.call(o,s):s?this._subscribe(o):this._trySubscribe(o))}),o}_trySubscribe(t){try{return this._subscribe(t)}catch(n){t.error(n)}}forEach(t,n){return n=Au(n),new n((r,o)=>{let i=new ht({next:s=>{try{t(s)}catch(a){o(a),i.unsubscribe()}},error:o,complete:r});this.subscribe(i)})}_subscribe(t){var n;return(n=this.source)===null||n===void 0?void 0:n.subscribe(t)}[lr](){return this}pipe(...t){return xu(t)(this)}toPromise(t){return t=Au(t),new t((n,r)=>{let o;this.subscribe(i=>o=i,i=>r(i),()=>n(o))})}};O.create=e=>new O(e);function Au(e){var t;return(t=e??Ze.Promise)!==null&&t!==void 0?t:Promise}function Fv(e){return e&&D(e.next)&&D(e.error)&&D(e.complete)}function Lv(e){return e&&e instanceof gn||Fv(e)&&_i(e)}function Vv(e){return D(e?.lift)}function Y(e){return t=>{if(Vv(t))return t.lift(function(n){try{return e(n,this)}catch(r){this.error(r)}});throw new TypeError("Unable to lift unknown Observable type")}}function re(e,t,n,r,o){return new $a(e,t,n,r,o)}var $a=class extends gn{constructor(t,n,r,o,i,s){super(t),this.onFinalize=i,this.shouldUnsubscribe=s,this._next=n?function(a){try{n(a)}catch(c){t.error(c)}}:super._next,this._error=o?function(a){try{o(a)}catch(c){t.error(c)}finally{this.unsubscribe()}}:super._error,this._complete=r?function(){try{r()}catch(a){t.error(a)}finally{this.unsubscribe()}}:super._complete}unsubscribe(){var t;if(!this.shouldUnsubscribe||this.shouldUnsubscribe()){let{closed:n}=this;super.unsubscribe(),!n&&((t=this.onFinalize)===null||t===void 0||t.call(this))}}};var Ru=bi(e=>function(){e(this),this.name="ObjectUnsubscribedError",this.message="object unsubscribed"});var de=class extends O{constructor(){super(),this.closed=!1,this.currentObservers=null,this.observers=[],this.isStopped=!1,this.hasError=!1,this.thrownError=null}lift(t){let n=new Si(this,this);return n.operator=t,n}_throwIfClosed(){if(this.closed)throw new Ru}next(t){cr(()=>{if(this._throwIfClosed(),!this.isStopped){this.currentObservers||(this.currentObservers=Array.from(this.observers));for(let n of this.currentObservers)n.next(t)}})}error(t){cr(()=>{if(this._throwIfClosed(),!this.isStopped){this.hasError=this.isStopped=!0,this.thrownError=t;let{observers:n}=this;for(;n.length;)n.shift().error(t)}})}complete(){cr(()=>{if(this._throwIfClosed(),!this.isStopped){this.isStopped=!0;let{observers:t}=this;for(;t.length;)t.shift().complete()}})}unsubscribe(){this.isStopped=this.closed=!0,this.observers=this.currentObservers=null}get observed(){var t;return((t=this.observers)===null||t===void 0?void 0:t.length)>0}_trySubscribe(t){return this._throwIfClosed(),super._trySubscribe(t)}_subscribe(t){return this._throwIfClosed(),this._checkFinalizedStatuses(t),this._innerSubscribe(t)}_innerSubscribe(t){let{hasError:n,isStopped:r,observers:o}=this;return n||r?Va:(this.currentObservers=null,o.push(t),new le(()=>{this.currentObservers=null,oo(o,t)}))}_checkFinalizedStatuses(t){let{hasError:n,thrownError:r,isStopped:o}=this;n?t.error(r):o&&t.complete()}asObservable(){let t=new O;return t.source=this,t}};de.create=(e,t)=>new Si(e,t);var Si=class extends de{constructor(t,n){super(),this.destination=t,this.source=n}next(t){var n,r;(r=(n=this.destination)===null||n===void 0?void 0:n.next)===null||r===void 0||r.call(n,t)}error(t){var n,r;(r=(n=this.destination)===null||n===void 0?void 0:n.error)===null||r===void 0||r.call(n,t)}complete(){var t,n;(n=(t=this.destination)===null||t===void 0?void 0:t.complete)===null||n===void 0||n.call(t)}_subscribe(t){var n,r;return(r=(n=this.source)===null||n===void 0?void 0:n.subscribe(t))!==null&&r!==void 0?r:Va}};var vn=class extends de{constructor(t){super(),this._value=t}get value(){return this.getValue()}_subscribe(t){let n=super._subscribe(t);return!n.closed&&t.next(this._value),n}getValue(){let{hasError:t,thrownError:n,_value:r}=this;if(t)throw n;return this._throwIfClosed(),r}next(t){super.next(this._value=t)}};var ku=new O(e=>e.complete());function Ou(e){return e&&D(e.schedule)}function Pu(e){return e[e.length-1]}function Fu(e){return D(Pu(e))?e.pop():void 0}function Lu(e){return Ou(Pu(e))?e.pop():void 0}function ju(e,t,n,r){function o(i){return i instanceof n?i:new n(function(s){s(i)})}return new(n||(n=Promise))(function(i,s){function a(d){try{l(r.next(d))}catch(u){s(u)}}function c(d){try{l(r.throw(d))}catch(u){s(u)}}function l(d){d.done?i(d.value):o(d.value).then(a,c)}l((r=r.apply(e,t||[])).next())})}function Vu(e){var t=typeof Symbol=="function"&&Symbol.iterator,n=t&&e[t],r=0;if(n)return n.call(e);if(e&&typeof e.length=="number")return{next:function(){return e&&r>=e.length&&(e=void 0),{value:e&&e[r++],done:!e}}};throw new TypeError(t?"Object is not iterable.":"Symbol.iterator is not defined.")}function bn(e){return this instanceof bn?(this.v=e,this):new bn(e)}function Hu(e,t,n){if(!Symbol.asyncIterator)throw new TypeError("Symbol.asyncIterator is not defined.");var r=n.apply(e,t||[]),o,i=[];return o=Object.create((typeof AsyncIterator=="function"?AsyncIterator:Object).prototype),a("next"),a("throw"),a("return",s),o[Symbol.asyncIterator]=function(){return this},o;function s(f){return function(h){return Promise.resolve(h).then(f,u)}}function a(f,h){r[f]&&(o[f]=function(b){return new Promise(function(x,C){i.push([f,b,x,C])>1||c(f,b)})},h&&(o[f]=h(o[f])))}function c(f,h){try{l(r[f](h))}catch(b){m(i[0][3],b)}}function l(f){f.value instanceof bn?Promise.resolve(f.value.v).then(d,u):m(i[0][2],f)}function d(f){c("next",f)}function u(f){c("throw",f)}function m(f,h){f(h),i.shift(),i.length&&c(i[0][0],i[0][1])}}function Bu(e){if(!Symbol.asyncIterator)throw new TypeError("Symbol.asyncIterator is not defined.");var t=e[Symbol.asyncIterator],n;return t?t.call(e):(e=typeof Vu=="function"?Vu(e):e[Symbol.iterator](),n={},r("next"),r("throw"),r("return"),n[Symbol.asyncIterator]=function(){return this},n);function r(i){n[i]=e[i]&&function(s){return new Promise(function(a,c){s=e[i](s),o(a,c,s.done,s.value)})}}function o(i,s,a,c){Promise.resolve(c).then(function(l){i({value:l,done:a})},s)}}var ur=(e=>e&&typeof e.length=="number"&&typeof e!="function");function Ii(e){return D(e?.then)}function Di(e){return D(e[lr])}function Ci(e){return Symbol.asyncIterator&&D(e?.[Symbol.asyncIterator])}function Ni(e){return new TypeError(`You provided ${e!==null&&typeof e=="object"?"an invalid object":`'${e}'`} where a stream was expected. You can provide an Observable, Promise, ReadableStream, Array, AsyncIterable, or Iterable.`)}function jv(){return typeof Symbol!="function"||!Symbol.iterator?"@@iterator":Symbol.iterator}var Ti=jv();function Mi(e){return D(e?.[Ti])}function xi(e){return Hu(this,arguments,function*(){let n=e.getReader();try{for(;;){let{value:r,done:o}=yield bn(n.read());if(o)return yield bn(void 0);yield yield bn(r)}}finally{n.releaseLock()}})}function Ai(e){return D(e?.getReader)}function oe(e){if(e instanceof O)return e;if(e!=null){if(Di(e))return Hv(e);if(ur(e))return Bv(e);if(Ii(e))return Uv(e);if(Ci(e))return Uu(e);if(Mi(e))return $v(e);if(Ai(e))return zv(e)}throw Ni(e)}function Hv(e){return new O(t=>{let n=e[lr]();if(D(n.subscribe))return n.subscribe(t);throw new TypeError("Provided object does not correctly implement Symbol.observable")})}function Bv(e){return new O(t=>{for(let n=0;n<e.length&&!t.closed;n++)t.next(e[n]);t.complete()})}function Uv(e){return new O(t=>{e.then(n=>{t.closed||(t.next(n),t.complete())},n=>t.error(n)).then(null,Ei)})}function $v(e){return new O(t=>{for(let n of e)if(t.next(n),t.closed)return;t.complete()})}function Uu(e){return new O(t=>{Gv(e,t).catch(n=>t.error(n))})}function zv(e){return Uu(xi(e))}function Gv(e,t){var n,r,o,i;return ju(this,void 0,void 0,function*(){try{for(n=Bu(e);r=yield n.next(),!r.done;){let s=r.value;if(t.next(s),t.closed)return}}catch(s){o={error:s}}finally{try{r&&!r.done&&(i=n.return)&&(yield i.call(n))}finally{if(o)throw o.error}}t.complete()})}function je(e,t,n,r=0,o=!1){let i=t.schedule(function(){n(),o?e.add(this.schedule(null,r)):this.unsubscribe()},r);if(e.add(i),!o)return i}function Ri(e,t=0){return Y((n,r)=>{n.subscribe(re(r,o=>je(r,e,()=>r.next(o),t),()=>je(r,e,()=>r.complete(),t),o=>je(r,e,()=>r.error(o),t)))})}function ki(e,t=0){return Y((n,r)=>{r.add(e.schedule(()=>n.subscribe(r),t))})}function $u(e,t){return oe(e).pipe(ki(t),Ri(t))}function zu(e,t){return oe(e).pipe(ki(t),Ri(t))}function Gu(e,t){return new O(n=>{let r=0;return t.schedule(function(){r===e.length?n.complete():(n.next(e[r++]),n.closed||this.schedule())})})}function Wu(e,t){return new O(n=>{let r;return je(n,t,()=>{r=e[Ti](),je(n,t,()=>{let o,i;try{({value:o,done:i}=r.next())}catch(s){n.error(s);return}i?n.complete():n.next(o)},0,!0)}),()=>D(r?.return)&&r.return()})}function Oi(e,t){if(!e)throw new Error("Iterable cannot be null");return new O(n=>{je(n,t,()=>{let r=e[Symbol.asyncIterator]();je(n,t,()=>{r.next().then(o=>{o.done?n.complete():n.next(o.value)})},0,!0)})})}function qu(e,t){return Oi(xi(e),t)}function Zu(e,t){if(e!=null){if(Di(e))return $u(e,t);if(ur(e))return Gu(e,t);if(Ii(e))return zu(e,t);if(Ci(e))return Oi(e,t);if(Mi(e))return Wu(e,t);if(Ai(e))return qu(e,t)}throw Ni(e)}function so(e,t){return t?Zu(e,t):oe(e)}function Qe(...e){let t=Lu(e);return so(e,t)}function za(e,t){let n=D(e)?e:()=>e,r=o=>o.error(n());return new O(t?o=>t.schedule(r,0,o):r)}function ie(e,t){return Y((n,r)=>{let o=0;n.subscribe(re(r,i=>{r.next(e.call(t,i,o++))}))})}var{isArray:Wv}=Array;function qv(e,t){return Wv(t)?e(...t):e(t)}function Pi(e){return ie(t=>qv(e,t))}var{isArray:Zv}=Array,{getPrototypeOf:Qv,prototype:Yv,keys:Kv}=Object;function Qu(e){if(e.length===1){let t=e[0];if(Zv(t))return{args:t,keys:null};if(Xv(t)){let n=Kv(t);return{args:n.map(r=>t[r]),keys:n}}}return{args:e,keys:null}}function Xv(e){return e&&typeof e=="object"&&Qv(e)===Yv}function Yu(e,t){return e.reduce((n,r,o)=>(n[r]=t[o],n),{})}function Ku(e,t,n,r,o,i,s,a){let c=[],l=0,d=0,u=!1,m=()=>{u&&!c.length&&!l&&t.complete()},f=b=>l<r?h(b):c.push(b),h=b=>{i&&t.next(b),l++;let x=!1;oe(n(b,d++)).subscribe(re(t,C=>{o?.(C),i?f(C):t.next(C)},()=>{x=!0},void 0,()=>{if(x)try{for(l--;c.length&&l<r;){let C=c.shift();s?je(t,s,()=>h(C)):h(C)}m()}catch(C){t.error(C)}}))};return e.subscribe(re(t,f,()=>{u=!0,m()})),()=>{a?.()}}function fr(e,t,n=1/0){return D(t)?fr((r,o)=>ie((i,s)=>t(r,i,o,s))(oe(e(r,o))),n):(typeof t=="number"&&(n=t),Y((r,o)=>Ku(r,o,e,n)))}function yn(...e){let t=Fu(e),{args:n,keys:r}=Qu(e),o=new O(i=>{let{length:s}=n;if(!s){i.complete();return}let a=new Array(s),c=s,l=s;for(let d=0;d<s;d++){let u=!1;oe(n[d]).subscribe(re(i,m=>{u||(u=!0,l--),a[d]=m},()=>c--,void 0,()=>{(!c||!u)&&(l||i.next(r?Yu(r,a):a),i.complete())}))}});return t?o.pipe(Pi(t)):o}var Jv=["addListener","removeListener"],eb=["addEventListener","removeEventListener"],tb=["on","off"];function ao(e,t,n,r){if(D(n)&&(r=n,n=void 0),r)return ao(e,t,n).pipe(Pi(r));let[o,i]=ob(e)?eb.map(s=>a=>e[s](t,a,n)):nb(e)?Jv.map(Xu(e,t)):rb(e)?tb.map(Xu(e,t)):[];if(!o&&ur(e))return fr(s=>ao(s,t,n))(oe(e));if(!o)throw new TypeError("Invalid event target");return new O(s=>{let a=(...c)=>s.next(1<c.length?c:c[0]);return o(a),()=>i(a)})}function Xu(e,t){return n=>r=>e[n](t,r)}function nb(e){return D(e.addListener)&&D(e.removeListener)}function rb(e){return D(e.on)&&D(e.off)}function ob(e){return D(e.addEventListener)&&D(e.removeEventListener)}function co(e,t){return Y((n,r)=>{let o=0;n.subscribe(re(r,i=>e.call(t,i,o++)&&r.next(i)))})}function Fi(e){return Y((t,n)=>{let r=null,o=!1,i;r=t.subscribe(re(n,void 0,void 0,s=>{i=oe(e(s,Fi(e)(t))),r?(r.unsubscribe(),r=null,i.subscribe(n)):o=!0})),o&&(r.unsubscribe(),r=null,i.subscribe(n))})}function Ga(e,t){return D(t)?fr(e,t,1):fr(e,1)}function lo(e){return e<=0?()=>ku:Y((t,n)=>{let r=0;t.subscribe(re(n,o=>{++r<=e&&(n.next(o),e<=r&&n.complete())}))})}function Wa(e,t=dr){return e=e??ib,Y((n,r)=>{let o,i=!0;n.subscribe(re(r,s=>{let a=t(s);(i||!e(o,a))&&(i=!1,o=a,r.next(s))}))})}function ib(e,t){return e===t}function uo(e){return Y((t,n)=>{try{t.subscribe(n)}finally{n.add(e)}})}function Za(e={}){let{connector:t=()=>new de,resetOnError:n=!0,resetOnComplete:r=!0,resetOnRefCountZero:o=!0}=e;return i=>{let s,a,c,l=0,d=!1,u=!1,m=()=>{a?.unsubscribe(),a=void 0},f=()=>{m(),s=c=void 0,d=u=!1},h=()=>{let b=s;f(),b?.unsubscribe()};return Y((b,x)=>{l++,!u&&!d&&m();let C=c=c??t();x.add(()=>{l--,l===0&&!u&&!d&&(a=qa(h,o))}),C.subscribe(x),!s&&l>0&&(s=new ht({next:_e=>C.next(_e),error:_e=>{u=!0,m(),a=qa(f,n,_e),C.error(_e)},complete:()=>{d=!0,m(),a=qa(f,r),C.complete()}}),oe(b).subscribe(s))})(i)}}function qa(e,t,...n){if(t===!0){e();return}if(t===!1)return;let r=new ht({next:()=>{r.unsubscribe(),e()}});return oe(t(...n)).subscribe(r)}function Qa(e){return co((t,n)=>e<=n)}function Ya(e){return Y((t,n)=>{oe(e).subscribe(re(n,()=>n.complete(),io)),!n.closed&&t.subscribe(n)})}function fo(e,t,n){let r=D(e)||t||n?{next:e,error:t,complete:n}:e;return r?Y((o,i)=>{var s;(s=r.subscribe)===null||s===void 0||s.call(r);let a=!0;o.subscribe(re(i,c=>{var l;(l=r.next)===null||l===void 0||l.call(r,c),i.next(c)},()=>{var c;a=!1,(c=r.complete)===null||c===void 0||c.call(r),i.complete()},c=>{var l;a=!1,(l=r.error)===null||l===void 0||l.call(r,c),i.error(c)},()=>{var c,l;a&&((c=r.unsubscribe)===null||c===void 0||c.call(r)),(l=r.finalize)===null||l===void 0||l.call(r)}))}):dr}var $i="https://angular.dev/best-practices/security#preventing-cross-site-scripting-xss",_=class extends Error{code;constructor(t,n){super($t(t,n)),this.code=t}};function sb(e){return`NG0${Math.abs(e)}`}function $t(e,t){return`${sb(e)}${t?": "+t:""}`}function $(e){for(let t in e)if(e[t]===$)return t;throw Error("")}function rf(e,t){for(let n in t)Object.hasOwn(t,n)&&!Object.hasOwn(e,n)&&(e[n]=t[n])}function zi(e){if(typeof e=="string")return e;if(Array.isArray(e))return`[${e.map(zi).join(", ")}]`;if(e==null)return""+e;let t=e.overriddenName||e.name;if(t)return`${t}`;let n=e.toString();if(n==null)return""+n;let r=n.indexOf(`
`);return r>=0?n.slice(0,r):n}function Gi(e,t){return e?t?`${e} ${t}`:e:t||""}var ab=$({__forward_ref__:$});function He(e){return e.__forward_ref__=He,e}function he(e){return lc(e)?e():e}function lc(e){return typeof e=="function"&&Object.hasOwn(e,ab)&&e.__forward_ref__===He}function F(e){return{token:e.token,providedIn:e.providedIn||null,factory:e.factory,value:void 0}}function K(e){return{providers:e.providers||[],imports:e.imports||[]}}function Wi(e){return cb(e,qi)}function cb(e,t){return Object.hasOwn(e,t)&&e[t]||null}function lb(e){let t=e?.[qi]??null;return t||null}function Xa(e){return e&&Object.hasOwn(e,Vi)?e[Vi]:null}var qi=$({\u0275prov:$}),Vi=$({\u0275inj:$}),g=class{_desc;ngMetadataName="InjectionToken";\u0275prov;constructor(t,n){this._desc=t,this.\u0275prov=void 0,typeof n=="number"?this.__NG_ELEMENT_ID__=n:n!==void 0&&(this.\u0275prov=F({token:this,providedIn:n.providedIn||"root",factory:n.factory}))}get multi(){return this}toString(){return`InjectionToken ${this._desc}`}};function dc(e){return e&&!!e.\u0275providers}var bo=$({\u0275cmp:$}),yo=$({\u0275dir:$}),uc=$({\u0275pipe:$});var mo=$({\u0275fac:$}),Dn=$({__NG_ELEMENT_ID__:$}),Ju=$({__NG_ENV_ID__:$});function zt(e){return pc(e,"@Component"),e[bo]||null}function fc(e){return pc(e,"@Directive"),e[yo]||null}function of(e){return pc(e,"@Pipe"),e[uc]||null}function pc(e,t){if(e==null)throw new _(-919,!1)}function sf(e){return typeof e=="string"?e:e==null?"":String(e)}var af=$({ngErrorCode:$}),db=$({ngErrorMessage:$}),ub=$({ngTokenPath:$});function mc(e,t){return cf("",-200,t)}function Zi(e,t){throw new _(-201,!1)}function cf(e,t,n){let r=new _(t,e);return r[af]=t,r[db]=e,n&&(r[ub]=n),r}function fb(e){return e[af]}var Ja;function lf(){return Ja}function Fe(e){let t=Ja;return Ja=e,t}function hc(e,t,n){let r=Wi(e);if(r&&r.providedIn=="root")return r.value===void 0?r.value=r.factory():r.value;if(n&8)return null;if(t!==void 0)return t;Zi(e,"")}var hr=globalThis;var pb={},_n=pb,mb="__NG_DI_FLAG__",ec=class{injector;constructor(t){this.injector=t}retrieve(t,n){let r=En(n)||0;try{return this.injector.get(t,r&8?null:_n,r)}catch(o){if(sr(o))return o;throw o}}};function hb(e,t=0){let n=vi();if(n===void 0)throw new _(-203,!1);if(n===null)return hc(e,void 0,t);{let r=gb(t),o=n.retrieve(e,r);if(sr(o)){if(r.optional)return null;throw o}return o}}function M(e,t=0){return(lf()||hb)(he(e),t)}function p(e,t){return M(e,En(t))}function En(e){return typeof e>"u"||typeof e=="number"?e:0|(e.optional&&8)|(e.host&&1)|(e.self&&2)|(e.skipSelf&&4)}function gb(e){return{optional:!!(e&8),host:!!(e&1),self:!!(e&2),skipSelf:!!(e&4)}}function tc(e){let t=[];for(let n=0;n<e.length;n++){let r=he(e[n]);if(Array.isArray(r)){if(r.length===0)throw new _(900,!1);let o,i=0;for(let s=0;s<r.length;s++){let a=r[s],c=vb(a);typeof c=="number"?c===-1?o=a.token:i|=c:o=a}t.push(M(o,i))}else t.push(M(r))}return t}function vb(e){return e[mb]}function wn(e,t){let n=Object.hasOwn(e,mo);return n?e[mo]:null}function df(e,t,n){if(e.length!==t.length)return!1;for(let r=0;r<e.length;r++){let o=e[r],i=t[r];if(n&&(o=n(o),i=n(i)),i!==o)return!1}return!0}function uf(e){return e.flat(Number.POSITIVE_INFINITY)}function Qi(e,t){e.forEach(n=>Array.isArray(n)?Qi(n,t):t(n))}function gc(e,t,n){t>=e.length?e.push(n):e.splice(t,0,n)}function _o(e,t){return t>=e.length-1?e.pop():e.splice(t,1)[0]}function ff(e,t){let n=[];for(let r=0;r<e;r++)n.push(t);return n}function pf(e,t,n,r){let o=e.length;if(o==t)e.push(n,r);else if(o===1)e.push(r,e[0]),e[0]=n;else{for(o--,e.push(e[o-1],e[o]);o>t;){let i=o-2;e[o]=e[i],o--}e[t]=n,e[t+1]=r}}function Yi(e,t,n){let r=gr(e,t);return r>=0?e[r|1]=n:(r=~r,pf(e,r,t,n)),r}function Ki(e,t){let n=gr(e,t);if(n>=0)return e[n|1]}function gr(e,t){return bb(e,t,1)}function bb(e,t,n){let r=0,o=e.length>>n;for(;o!==r;){let i=r+(o-r>>1),s=e[i<<n];if(t===s)return i<<n;s>t?o=i:r=i+1}return~(o<<n)}var Gt={},Ee=[],vr=new g(""),Eo=new g("",-1),vc=new g(""),mr=class{get(t,n=_n){if(n===_n){let o=cf("",-201);throw o.name="\u0275NotFound",o}return n}};function br(e){return{\u0275providers:e}}function mf(...e){return{\u0275providers:bc(!0,e),\u0275fromNgModule:!0}}function bc(e,...t){let n=[],r=new Set,o,i=s=>{n.push(s)};return Qi(t,s=>{let a=s;ji(a,i,[],r)&&(o||=[],o.push(a))}),o!==void 0&&hf(o,i),n}function hf(e,t){for(let n=0;n<e.length;n++){let{ngModule:r,providers:o}=e[n];yc(o,i=>{t(i,r)})}}function ji(e,t,n,r){if(e=he(e),!e)return!1;let o=null,i=Xa(e),s=!i&&zt(e);if(!i&&!s){let c=e.ngModule;if(i=Xa(c),i)o=c;else return!1}else{if(s&&!s.standalone)return!1;o=e}let a=r.has(o);if(s){if(a)return!1;if(r.add(o),s.dependencies){let c=typeof s.dependencies=="function"?s.dependencies():s.dependencies;for(let l of c)ji(l,t,n,r)}}else if(i){if(i.imports!=null&&!a){r.add(o);let l;Qi(i.imports,d=>{ji(d,t,n,r)&&(l||=[],l.push(d))}),l!==void 0&&hf(l,t)}if(!a){let l=wn(o)||(()=>new o);t({provide:o,useFactory:l,deps:Ee},o),t({provide:vc,useValue:o,multi:!0},o),t({provide:vr,useValue:()=>M(o),multi:!0},o)}let c=i.providers;if(c!=null&&!a){let l=e;yc(c,d=>{t(d,l)})}}else return!1;return o!==e&&e.providers!==void 0}function yc(e,t){for(let n of e)dc(n)&&(n=n.\u0275providers),Array.isArray(n)?yc(n,t):t(n)}var yb=$({provide:String,useValue:$});function gf(e){return e!==null&&typeof e=="object"&&yb in e}function _b(e){return!!(e&&e.useExisting)}function Eb(e){return!!(e&&e.useFactory)}function Sn(e){return typeof e=="function"}function vf(e){return!!e.useClass}var wo=new g(""),Li={},ef={},Ka;function yr(){return Ka===void 0&&(Ka=new mr),Ka}var ge=class{},In=class extends ge{parent;source;scopes;records=new Map;_ngOnDestroyHooks=new Set;_onDestroyHooks=[];get destroyed(){return this._destroyed}_destroyed=!1;injectorDefTypes;constructor(t,n,r,o){super(),this.parent=n,this.source=r,this.scopes=o,rc(t,s=>this.processProvider(s)),this.records.set(Eo,pr(void 0,this)),o.has("environment")&&this.records.set(ge,pr(void 0,this));let i=this.records.get(wo);i!=null&&typeof i.value=="string"&&this.scopes.add(i.value),this.injectorDefTypes=new Set(this.get(vc,Ee,{self:!0}))}retrieve(t,n){let r=En(n)||0;try{return this.get(t,_n,r)}catch(o){if(sr(o))return o;throw o}}destroy(){po(this),this._destroyed=!0;let t=S(null);try{for(let r of this._ngOnDestroyHooks)r.ngOnDestroy();let n=this._onDestroyHooks;this._onDestroyHooks=[];for(let r of n)r()}finally{this.records.clear(),this._ngOnDestroyHooks.clear(),this.injectorDefTypes.clear(),S(t)}}onDestroy(t){return po(this),this._onDestroyHooks.push(t),()=>this.removeOnDestroy(t)}runInContext(t){po(this);let n=rt(this),r=Fe(void 0),o;try{return t()}finally{rt(n),Fe(r)}}get(t,n=_n,r){if(po(this),Object.hasOwn(t,Ju))return t[Ju](this);let o=En(r),i,s=rt(this),a=Fe(void 0);try{if(!(o&4)){let l=this.records.get(t);if(l===void 0){let d=Cb(t)&&Wi(t);d&&this.injectableDefInScope(d)?l=pr(nc(t),Li):l=null,this.records.set(t,l)}if(l!=null)return this.hydrate(t,l,o)}let c=o&2?yr():this.parent;return n=o&8&&n===_n?null:n,c.get(t,n)}catch(c){let l=fb(c);throw l===-200||l===-201?new _(l,null):c}finally{Fe(a),rt(s)}}resolveInjectorInitializers(){let t=S(null),n=rt(this),r=Fe(void 0),o;try{let i=this.get(vr,Ee,{self:!0});for(let s of i)s()}finally{rt(n),Fe(r),S(t)}}toString(){return"R3Injector[...]"}processProvider(t){t=he(t);let n=Sn(t)?t:he(t&&t.provide),r=Sb(t);if(!Sn(t)&&t.multi===!0){let o=this.records.get(n);o||(o=pr(void 0,Li,!0),o.factory=()=>tc(o.multi),this.records.set(n,o)),n=t,o.multi.push(t)}this.records.set(n,r)}hydrate(t,n,r){let o=S(null);try{if(n.value===ef)throw mc("");return n.value===Li&&(n.value=ef,n.value=n.factory(void 0,r)),typeof n.value=="object"&&n.value&&Db(n.value)&&this._ngOnDestroyHooks.add(n.value),n.value}finally{S(o)}}injectableDefInScope(t){if(!t.providedIn)return!1;let n=he(t.providedIn);return typeof n=="string"?n==="any"||this.scopes.has(n):this.injectorDefTypes.has(n)}removeOnDestroy(t){let n=this._onDestroyHooks.indexOf(t);n!==-1&&this._onDestroyHooks.splice(n,1)}};function nc(e){let t=Wi(e),n=t!==null?t.factory:wn(e);if(n!==null)return n;if(e instanceof g)throw new _(-204,!1);if(e instanceof Function)return wb(e);throw new _(-204,!1)}function wb(e){if(e.length>0)throw new _(-204,!1);let n=lb(e);return n!==null?()=>n.factory(e):()=>new e}function Sb(e){if(gf(e))return pr(void 0,e.useValue);{let t=_c(e);return pr(t,Li)}}function _c(e,t,n){let r;if(Sn(e)){let o=he(e);return wn(o)||nc(o)}else if(gf(e))r=()=>he(e.useValue);else if(Eb(e))r=()=>e.useFactory(...tc(e.deps||[]));else if(_b(e))r=(o,i)=>M(he(e.useExisting),i!==void 0&&i&8?8:void 0);else{let o=he(e&&(e.useClass||e.provide));if(Ib(e))r=()=>new o(...tc(e.deps));else return wn(o)||nc(o)}return r}function po(e){if(e.destroyed)throw new _(-205,!1)}function pr(e,t,n=!1){return{factory:e,value:t,multi:n?[]:void 0}}function Ib(e){return!!e.deps}function Db(e){return e!==null&&typeof e=="object"&&typeof e.ngOnDestroy=="function"}function Cb(e){return typeof e=="function"||typeof e=="object"&&e.ngMetadataName==="InjectionToken"}function rc(e,t){for(let n of e)Array.isArray(n)?rc(n,t):n&&dc(n)?rc(n.\u0275providers,t):t(n)}function _r(e,t){let n;e instanceof In?(po(e),n=e):n=new ec(e);let r,o=rt(n),i=Fe(void 0);try{return t()}finally{rt(o),Fe(i)}}function bf(){return lf()!==void 0||vi()!=null}var Ye=0,E=1,I=2,pe=3,Be=4,ve=5,Er=6,wr=7,Se=8,_t=9,ot=10,Z=11,Sr=12,Ec=13,Cn=14,Ae=15,Wt=16,Nn=17,it=18,Et=19,wc=20,gt=21,Xi=22,vt=23,Le=24,Tn=25,qt=26,ue=27,yf=1;var Mn=7,So=8,xn=9,be=10;function wt(e){return Array.isArray(e)&&typeof e[yf]=="object"}function Ue(e){return Array.isArray(e)&&e[yf]===!0}function Sc(e){return(e.flags&4)!==0}function St(e){return e.componentOffset>-1}function Ji(e){return(e.flags&1)===1}function st(e){return!!e.template}function Ir(e){return(e[I]&512)!==0}function An(e){return(e[I]&256)===256}var Ie=(function(e){return e[e.NONE=0]="NONE",e[e.HTML=1]="HTML",e[e.STYLE=2]="STYLE",e[e.SCRIPT=3]="SCRIPT",e[e.URL=4]="URL",e[e.RESOURCE_URL=5]="RESOURCE_URL",e[e.ATTRIBUTE_NO_BINDING=6]="ATTRIBUTE_NO_BINDING",e})(Ie||{});var Ic="svg",_f="math";function ye(e){for(;Array.isArray(e);)e=e[Ye];return e}function Ef(e,t){return ye(t[e])}function $e(e,t){return ye(t[e.index])}function es(e,t){return e.data[t]}function wf(e,t){return e[t]}function ze(e,t){let n=t[e];return wt(n)?n:n[Ye]}function Sf(e){return(e[I]&4)===4}function ts(e){return(e[I]&128)===128}function If(e){return Ue(e[pe])}function Zt(e,t){return t==null?null:e[t]}function Dc(e){e[Nn]=0}function Cc(e){e[I]&1024||(e[I]|=1024,ts(e)&&Rn(e))}function Io(e){return!!(e[I]&9216||e[Le]?.dirty)}function ns(e){e[ot].changeDetectionScheduler?.notify(8),e[I]&64&&(e[I]|=1024),Io(e)&&Rn(e)}function Rn(e){e[ot].changeDetectionScheduler?.notify(0);let t=bt(e);for(;t!==null&&!(t[I]&8192||(t[I]|=8192,!ts(t)));)t=bt(t)}function rs(e,t){if(An(e))throw new _(911,!1);e[gt]===null&&(e[gt]=[]),e[gt].push(t)}function Df(e,t){if(e[gt]===null)return;let n=e[gt].indexOf(t);n!==-1&&e[gt].splice(n,1)}function bt(e){let t=e[pe];return Ue(t)?t[pe]:t}function Nc(e){return e[wr]??=[]}function Tc(e){return e.cleanup??=[]}function Cf(e,t,n,r){let o=Nc(t);o.push(n),e.firstCreatePass&&Tc(e).push(r,o.length-1)}var R={lFrame:Vf(null),bindingsEnabled:!0,skipHydrationRootTNode:null};var oc=!1;function Nf(){return R.lFrame.elementDepthCount}function Tf(){R.lFrame.elementDepthCount++}function Mc(){R.lFrame.elementDepthCount--}function Mf(){return R.bindingsEnabled}function xc(){return R.skipHydrationRootTNode!==null}function Ac(e){return R.skipHydrationRootTNode===e}function Rc(){R.skipHydrationRootTNode=null}function A(){return R.lFrame.lView}function J(){return R.lFrame.tView}function It(e){return R.lFrame.contextLView=e,e[Se]}function Dt(e){return R.lFrame.contextLView=null,e}function me(){let e=kc();for(;e!==null&&e.type===64;)e=e.parent;return e}function kc(){return R.lFrame.currentTNode}function xf(){let e=R.lFrame,t=e.currentTNode;return e.isParent?t:t.parent}function Dr(e,t){let n=R.lFrame;n.currentTNode=e,n.isParent=t}function Oc(){return R.lFrame.isParent}function Pc(){R.lFrame.isParent=!1}function Af(){return R.lFrame.contextLView}function Fc(){return oc}function ho(e){let t=oc;return oc=e,t}function Rf(e){return R.lFrame.bindingIndex=e}function Cr(){return R.lFrame.bindingIndex++}function Lc(e){let t=R.lFrame,n=t.bindingIndex;return t.bindingIndex=t.bindingIndex+e,n}function kf(){return R.lFrame.inI18n}function Of(e,t){let n=R.lFrame;n.bindingIndex=n.bindingRootIndex=e,os(t)}function Pf(){return R.lFrame.currentDirectiveIndex}function os(e){R.lFrame.currentDirectiveIndex=e}function Ff(e){let t=R.lFrame.currentDirectiveIndex;return t===-1?null:e[t]}function is(){return R.lFrame.currentQueryIndex}function Do(e){R.lFrame.currentQueryIndex=e}function Nb(e){let t=e[E];return t.type===2?t.declTNode:t.type===1?e[ve]:null}function Vc(e,t,n){if(n&4){let o=t,i=e;for(;o=o.parent,o===null&&!(n&1);)if(o=Nb(i),o===null||(i=i[Cn],o.type&10))break;if(o===null)return!1;t=o,e=i}let r=R.lFrame=Lf();return r.currentTNode=t,r.lView=e,!0}function ss(e){let t=Lf(),n=e[E];R.lFrame=t,t.currentTNode=n.firstChild,t.lView=e,t.tView=n,t.contextLView=e,t.bindingIndex=n.bindingStartIndex,t.inI18n=!1}function Lf(){let e=R.lFrame,t=e===null?null:e.child;return t===null?Vf(e):t}function Vf(e){let t={currentTNode:null,isParent:!0,lView:null,tView:null,selectedIndex:-1,contextLView:null,elementDepthCount:0,currentNamespace:null,currentDirectiveIndex:-1,bindingRootIndex:-1,bindingIndex:-1,currentQueryIndex:0,parent:e,child:null,inI18n:!1};return e!==null&&(e.child=t),t}function jf(){let e=R.lFrame;return R.lFrame=e.parent,e.currentTNode=null,e.lView=null,e}var jc=jf;function as(){let e=jf();e.isParent=!0,e.tView=null,e.selectedIndex=-1,e.contextLView=null,e.elementDepthCount=0,e.currentDirectiveIndex=-1,e.currentNamespace=null,e.bindingRootIndex=-1,e.bindingIndex=-1,e.currentQueryIndex=0}function kn(){return R.lFrame.selectedIndex}function Qt(e){R.lFrame.selectedIndex=e}function Nr(){let e=R.lFrame;return es(e.tView,e.selectedIndex)}function cs(){R.lFrame.currentNamespace=Ic}function Hc(){return R.lFrame.currentNamespace}var Hf=!0;function ls(){return Hf}function ds(e){Hf=e}function ic(e,t=null,n=null,r){let o=Bf(e,t,n,r);return o.resolveInjectorInitializers(),o}function Bf(e,t=null,n=null,r,o=new Set){let i=[n||Ee,mf(e)],s;return new In(i,t||yr(),s||null,o)}var ae=class e{static THROW_IF_NOT_FOUND=_n;static NULL=new mr;static create(t,n){if(Array.isArray(t))return ic({name:""},n,t,"");{let r=t.name??"";return ic({name:r},t.parent,t.providers,r)}}static \u0275prov=F({token:e,providedIn:"any",factory:()=>M(Eo)});static __NG_ELEMENT_ID__=-1},L=new g(""),xe=class{static __NG_ELEMENT_ID__=Tb;static __NG_ENV_ID__=t=>t},Hi=class extends xe{_lView;constructor(t){super(),this._lView=t}get destroyed(){return An(this._lView)}onDestroy(t){let n=this._lView;return rs(n,t),()=>Df(n,t)}};function Tb(){return new Hi(A())}var Uf=!1,$f=new g(""),On=(()=>{class e{taskId=0;pendingTasks=new Set;destroyed=!1;pendingTask=new vn(!1);debugTaskTracker=p($f,{optional:!0});get hasPendingTasks(){return this.destroyed?!1:this.pendingTask.value}get hasPendingTasksObservable(){return this.destroyed?new O(n=>{n.next(!1),n.complete()}):this.pendingTask}add(){!this.hasPendingTasks&&!this.destroyed&&this.pendingTask.next(!0);let n=this.taskId++;return this.pendingTasks.add(n),this.debugTaskTracker?.add(n),n}has(n){return this.pendingTasks.has(n)}remove(n){this.pendingTasks.delete(n),this.debugTaskTracker?.remove(n),this.pendingTasks.size===0&&this.hasPendingTasks&&this.pendingTask.next(!1)}ngOnDestroy(){this.pendingTasks.clear(),this.hasPendingTasks&&this.pendingTask.next(!1),this.destroyed=!0,this.pendingTask.unsubscribe()}static \u0275prov=F({token:e,providedIn:"root",factory:()=>new e})}return e})(),sc=class extends de{__isAsync;destroyRef=void 0;pendingTasks=void 0;constructor(t=!1){super(),this.__isAsync=t,bf()&&(this.destroyRef=p(xe,{optional:!0})??void 0,this.pendingTasks=p(On,{optional:!0})??void 0)}emit(t){let n=S(null);try{super.next(t)}finally{S(n)}}subscribe(t,n,r){let o=t,i=n||(()=>null),s=r;if(t&&typeof t=="object"){let c=t;o=c.next?.bind(c),i=c.error?.bind(c),s=c.complete?.bind(c)}this.__isAsync&&(i=this.wrapInTimeout(i),o&&(o=this.wrapInTimeout(o)),s&&(s=this.wrapInTimeout(s)));let a=super.subscribe({next:o,error:i,complete:s});return t instanceof le&&t.add(a),a}wrapInTimeout(t){return n=>{let r=this.pendingTasks?.add();setTimeout(()=>{try{t(n)}finally{r!==void 0&&this.pendingTasks?.remove(r)}})}}},se=sc;function Bi(...e){}function Bc(e){let t,n;function r(){e=Bi;try{n!==void 0&&typeof cancelAnimationFrame=="function"&&cancelAnimationFrame(n),t!==void 0&&clearTimeout(t)}catch{}}return t=setTimeout(()=>{e(),r()}),typeof requestAnimationFrame=="function"&&(n=requestAnimationFrame(()=>{e(),r()})),()=>r()}function zf(e){return queueMicrotask(()=>e()),()=>{e=Bi}}var Uc="isAngularZone",go=Uc+"_ID",Mb=0,z=class e{hasPendingMacrotasks=!1;hasPendingMicrotasks=!1;isStable=!0;onUnstable=new se(!1);onMicrotaskEmpty=new se(!1);onStable=new se(!1);onError=new se(!1);constructor(t){let{enableLongStackTrace:n=!1,shouldCoalesceEventChangeDetection:r=!1,shouldCoalesceRunChangeDetection:o=!1,scheduleInRootZone:i=Uf}=t;if(typeof Zone>"u")throw new _(908,!1);Zone.assertZonePatched();let s=this;s._nesting=0,s._outer=s._inner=Zone.current,Zone.TaskTrackingZoneSpec&&(s._inner=s._inner.fork(new Zone.TaskTrackingZoneSpec)),n&&Zone.longStackTraceZoneSpec&&(s._inner=s._inner.fork(Zone.longStackTraceZoneSpec)),s.shouldCoalesceEventChangeDetection=!o&&r,s.shouldCoalesceRunChangeDetection=o,s.callbackScheduled=!1,s.scheduleInRootZone=i,Rb(s)}static isInAngularZone(){return typeof Zone<"u"&&Zone.current.get(Uc)===!0}static assertInAngularZone(){if(!e.isInAngularZone())throw new _(909,!1)}static assertNotInAngularZone(){if(e.isInAngularZone())throw new _(909,!1)}run(t,n,r){return this._inner.run(t,n,r)}runTask(t,n,r,o){let i=this._inner,s=i.scheduleEventTask("NgZoneEvent: "+o,t,xb,Bi,Bi);try{return i.runTask(s,n,r)}finally{i.cancelTask(s)}}runGuarded(t,n,r){return this._inner.runGuarded(t,n,r)}runOutsideAngular(t){return this._outer.run(t)}},xb={};function $c(e){if(e._nesting==0&&!e.hasPendingMicrotasks&&!e.isStable)try{e._nesting++,e.onMicrotaskEmpty.emit(null)}finally{if(e._nesting--,!e.hasPendingMicrotasks)try{e.runOutsideAngular(()=>e.onStable.emit(null))}finally{e.isStable=!0}}}function Ab(e){if(e.isCheckStableRunning||e.callbackScheduled)return;e.callbackScheduled=!0;function t(){Bc(()=>{e.callbackScheduled=!1,ac(e),e.isCheckStableRunning=!0,$c(e),e.isCheckStableRunning=!1})}e.scheduleInRootZone?Zone.root.run(()=>{t()}):e._outer.run(()=>{t()}),ac(e)}function Rb(e){let t=()=>{Ab(e)},n=Mb++;e._inner=e._inner.fork({name:"angular",properties:{[Uc]:!0,[go]:n,[go+n]:!0},onInvokeTask:(r,o,i,s,a,c)=>{if(kb(c))return r.invokeTask(i,s,a,c);try{return tf(e),r.invokeTask(i,s,a,c)}finally{(e.shouldCoalesceEventChangeDetection&&s.type==="eventTask"||e.shouldCoalesceRunChangeDetection)&&t(),nf(e)}},onInvoke:(r,o,i,s,a,c,l)=>{try{return tf(e),r.invoke(i,s,a,c,l)}finally{e.shouldCoalesceRunChangeDetection&&!e.callbackScheduled&&!Ob(c)&&t(),nf(e)}},onHasTask:(r,o,i,s)=>{r.hasTask(i,s),o===i&&(s.change=="microTask"?(e._hasPendingMicrotasks=s.microTask,ac(e),$c(e)):s.change=="macroTask"&&(e.hasPendingMacrotasks=s.macroTask))},onHandleError:(r,o,i,s)=>(r.handleError(i,s),e.runOutsideAngular(()=>e.onError.emit(s)),!1)})}function ac(e){e._hasPendingMicrotasks||(e.shouldCoalesceEventChangeDetection||e.shouldCoalesceRunChangeDetection)&&e.callbackScheduled===!0?e.hasPendingMicrotasks=!0:e.hasPendingMicrotasks=!1}function tf(e){e._nesting++,e.isStable&&(e.isStable=!1,e.onUnstable.emit(null))}function nf(e){e._nesting--,$c(e)}var vo=class{hasPendingMicrotasks=!1;hasPendingMacrotasks=!1;isStable=!0;onUnstable=new se;onMicrotaskEmpty=new se;onStable=new se;onError=new se;run(t,n,r){return t.apply(n,r)}runGuarded(t,n,r){return t.apply(n,r)}runOutsideAngular(t){return t()}runTask(t,n,r,o){return t.apply(n,r)}};function kb(e){return Gf(e,"__ignore_ng_zone__")}function Ob(e){return Gf(e,"__scheduler_tick__")}function Gf(e,t){return!Array.isArray(e)||e.length!==1?!1:e[0]?.data?.[t]===!0}var we=class{_console=console;handleError(t){this._console.error("ERROR",t)}},Pn=new g("",{factory:()=>{let e=p(z),t=p(ge),n;return r=>{e.runOutsideAngular(()=>{t.destroyed&&!n?setTimeout(()=>{throw r}):(n??=t.get(we),n.handleError(r))})}}}),Wf={provide:vr,useValue:()=>{let e=p(we,{optional:!0})},multi:!0};function Ne(e,t){let[n,r,o]=Ra(e,t?.equal),i=n,s=i[ne];return i.set=r,i.update=o,i.asReadonly=us.bind(i),i}function us(){let e=this[ne];if(e.readonlyFn===void 0){let t=()=>this();t[ne]=e,e.readonlyFn=t}return e.readonlyFn}var Fn=new g("",{factory:()=>Pb}),Pb="ng";var fs=new g(""),Ln=new g("",{providedIn:"platform",factory:()=>"unknown"}),zc=new g(""),Vn=new g("",{factory:()=>p(L).body?.querySelector("[ngCspNonce]")?.getAttribute("ngCspNonce")||null});var Co=(()=>{class e{view;node;constructor(n,r){this.view=n,this.node=r}static __NG_ELEMENT_ID__=Fb}return e})();function Fb(){return new Co(A(),me())}var yt=class{},No=new g("",{factory:()=>!0});var Gc=new g(""),ps=(()=>{class e{static \u0275prov=F({token:e,providedIn:"root",factory:()=>new cc})}return e})(),cc=class{dirtyEffectCount=0;queues=new Map;add(t){this.enqueue(t),this.schedule(t)}schedule(t){t.dirty&&this.dirtyEffectCount++}remove(t){let n=t.zone,r=this.queues.get(n);r.has(t)&&(r.delete(t),t.dirty&&this.dirtyEffectCount--)}enqueue(t){let n=t.zone;this.queues.has(n)||this.queues.set(n,new Set);let r=this.queues.get(n);r.has(t)||r.add(t)}flush(){for(;this.dirtyEffectCount>0;){let t=!1;for(let[n,r]of this.queues)n===null?t||=this.flushQueue(r):t||=n.run(()=>this.flushQueue(r));t||(this.dirtyEffectCount=0)}}flushQueue(t){let n=!1;for(let r of t)r.dirty&&(this.dirtyEffectCount--,n=!0,r.run());return n}},Ui=class{[ne];constructor(t){this[ne]=t}destroy(){this[ne].destroy()}};function Yt(e,t){let n=t?.injector??p(ae),r=t?.manualCleanup!==!0?n.get(xe):null,o,i=n.get(Co,null,{optional:!0}),s=n.get(yt);return i!==null?(o=Zf(i.view,s,e),r instanceof Hi&&r._lView===i.view&&(r=null)):o=jb(e,n.get(ps),s),o.injector=n,r!==null&&(o.onDestroyFns=[r.onDestroy(()=>o.destroy())]),new Ui(o)}var qf=U(w({},ka),{cleanupFns:void 0,zone:null,onDestroyFns:null,run(){let e=ho(!1);try{Oa(this)}finally{ho(e)}},cleanup(){if(!this.cleanupFns?.length)return;let e=S(null);try{for(;this.cleanupFns.length;)this.cleanupFns.pop()()}finally{this.cleanupFns=[],S(e)}}}),Lb=U(w({},qf),{consumerMarkedDirty(){this.scheduler.schedule(this),this.notifier.notify(12)},destroy(){if(mn(this),this.onDestroyFns!==null)for(let e of this.onDestroyFns)e();this.cleanup(),this.scheduler.remove(this)}}),Vb=U(w({},qf),{consumerMarkedDirty(){this.view[I]|=8192,Rn(this.view),this.notifier.notify(13)},destroy(){if(mn(this),this.onDestroyFns!==null)for(let e of this.onDestroyFns)e();this.cleanup(),this.view[vt]?.delete(this)}});function Zf(e,t,n){let r=Object.create(Vb);return r.view=e,r.zone=typeof Zone<"u"?Zone.current:null,r.notifier=t,r.fn=Qf(r,n),e[vt]??=new Set,e[vt].add(r),r.consumerMarkedDirty(r),r}function jb(e,t,n){let r=Object.create(Lb);return r.fn=Qf(r,e),r.scheduler=t,r.notifier=n,r.zone=typeof Zone<"u"?Zone.current:null,r.scheduler.add(r),r.notifier.notify(12),r}function Qf(e,t){return()=>{t(n=>(e.cleanupFns??=[]).push(n))}}function ms(e){return typeof e=="function"&&e[ne]!==void 0}function hs(e){return ms(e)&&typeof e.set=="function"}var To=(()=>{class e{internalPendingTasks=p(On);scheduler=p(yt);errorHandler=p(Pn);add(){let n=this.internalPendingTasks.add();return()=>{this.internalPendingTasks.has(n)&&(this.scheduler.notify(11),this.internalPendingTasks.remove(n))}}run(n){let r=this.add();try{n().catch(this.errorHandler).finally(r)}catch(o){this.errorHandler(o),r()}}static \u0275prov=F({token:e,providedIn:"root",factory:()=>new e})}return e})();var js=Symbol("InputSignalNode#UNSET"),Rp=U(w({},ro),{transformFn:void 0,applyValueToInputSignal(e,t){Ut(e,t)}});function Lo(e){return{toString:e}.toString()}var P=(function(e){return e[e.TemplateCreateStart=0]="TemplateCreateStart",e[e.TemplateCreateEnd=1]="TemplateCreateEnd",e[e.TemplateUpdateStart=2]="TemplateUpdateStart",e[e.TemplateUpdateEnd=3]="TemplateUpdateEnd",e[e.LifecycleHookStart=4]="LifecycleHookStart",e[e.LifecycleHookEnd=5]="LifecycleHookEnd",e[e.OutputStart=6]="OutputStart",e[e.OutputEnd=7]="OutputEnd",e[e.BootstrapApplicationStart=8]="BootstrapApplicationStart",e[e.BootstrapApplicationEnd=9]="BootstrapApplicationEnd",e[e.BootstrapComponentStart=10]="BootstrapComponentStart",e[e.BootstrapComponentEnd=11]="BootstrapComponentEnd",e[e.ChangeDetectionStart=12]="ChangeDetectionStart",e[e.ChangeDetectionEnd=13]="ChangeDetectionEnd",e[e.ChangeDetectionSyncStart=14]="ChangeDetectionSyncStart",e[e.ChangeDetectionSyncEnd=15]="ChangeDetectionSyncEnd",e[e.AfterRenderHooksStart=16]="AfterRenderHooksStart",e[e.AfterRenderHooksEnd=17]="AfterRenderHooksEnd",e[e.ComponentStart=18]="ComponentStart",e[e.ComponentEnd=19]="ComponentEnd",e[e.DeferBlockStateStart=20]="DeferBlockStateStart",e[e.DeferBlockStateEnd=21]="DeferBlockStateEnd",e[e.DynamicComponentStart=22]="DynamicComponentStart",e[e.DynamicComponentEnd=23]="DynamicComponentEnd",e[e.HostBindingsUpdateStart=24]="HostBindingsUpdateStart",e[e.HostBindingsUpdateEnd=25]="HostBindingsUpdateEnd",e})(P||{}),Ss=class{previousValue;currentValue;firstChange;constructor(t,n,r){this.previousValue=t,this.currentValue=n,this.firstChange=r}isFirstChange(){return this.firstChange}};function kp(e,t,n,r){t!==null?t.applyValueToInputSignal(t,r):e[n]=r}var Op=null,Pr=(()=>{Op=Yf;let e=()=>Yf;return e.ngInherit=!0,e})();function Jb(){return Op}function Yf(e){return e.type.prototype.ngOnChanges&&(e.setInput=ty),ey}function ey(){let e=Pp(this),t=e?.current;if(t){let n=e.previous;if(n===Gt)e.previous=t;else for(let r in t)n[r]=t[r];e.current=null,this.ngOnChanges(t)}}function ty(e,t,n,r,o){let i=this.declaredInputs[r],s=Pp(e)||ny(e,{previous:Gt,current:null}),a=s.current||(s.current={}),c=s.previous,l=c[i];a[i]=new Ss(l&&l.currentValue,n,c===Gt),kp(e,t,o,n)}var tl="__ngSimpleChanges__";function Pp(e){return Object.hasOwn(e,tl)&&e[tl]||null}function ny(e,t){return e[tl]=t}var Kf=[];var V=function(e,t=null,n){for(let r=0;r<Kf.length;r++){let o=Kf[r];o(e,t,n)}};function ry(e,t,n){let{ngOnChanges:r,ngOnInit:o,ngDoCheck:i}=t.type.prototype;if(r){let s=Jb()(t);(n.preOrderHooks??=[]).push(e,s),(n.preOrderCheckHooks??=[]).push(e,s)}o&&(n.preOrderHooks??=[]).push(0-e,o),i&&((n.preOrderHooks??=[]).push(e,i),(n.preOrderCheckHooks??=[]).push(e,i))}function oy(e,t){for(let n=t.directiveStart,r=t.directiveEnd;n<r;n++){let i=e.data[n].type.prototype,{ngAfterContentInit:s,ngAfterContentChecked:a,ngAfterViewInit:c,ngAfterViewChecked:l,ngOnDestroy:d}=i;s&&(e.contentHooks??=[]).push(-n,s),a&&((e.contentHooks??=[]).push(n,a),(e.contentCheckHooks??=[]).push(n,a)),c&&(e.viewHooks??=[]).push(-n,c),l&&((e.viewHooks??=[]).push(n,l),(e.viewCheckHooks??=[]).push(n,l)),d!=null&&(e.destroyHooks??=[]).push(n,d)}}function ys(e,t,n){Fp(e,t,3,n)}function _s(e,t,n,r){(e[I]&3)===n&&Fp(e,t,n,r)}function Wc(e,t){let n=e[I];(n&3)===t&&(n&=16383,n+=1,e[I]=n)}function Fp(e,t,n,r){let o=r!==void 0?e[Nn]&65535:0,i=r??-1,s=t.length-1,a=0;for(let c=o;c<s;c++)if(typeof t[c+1]=="number"){if(a=t[c],r!=null&&a>=r)break}else t[c]<0&&(e[Nn]+=65536),(a<i||i==-1)&&(iy(e,n,t,c),e[Nn]=(e[Nn]&4294901760)+c+2),c++}function Xf(e,t){V(P.LifecycleHookStart,e,t);let n=S(null);try{t.call(e)}finally{S(n),V(P.LifecycleHookEnd,e,t)}}function iy(e,t,n,r){let o=n[r]<0,i=n[r+1],s=o?-n[r]:n[r],a=e[s];o?e[I]>>14<e[Nn]>>16&&(e[I]&3)===t&&(e[I]+=16384,Xf(a,i)):Xf(a,i)}var Mr=-1,Hn=class{factory;name;injectImpl;resolving=!1;canSeeViewProviders;multi;componentProviders;index;providerFactory;constructor(t,n,r,o){this.factory=t,this.name=o,this.canSeeViewProviders=n,this.injectImpl=r}};function sy(e){return(e.flags&8)!==0}function ay(e){return(e.flags&16)!==0}function cy(e,t,n){let r=0;for(;r<n.length;){let o=n[r];if(typeof o=="number"){if(o!==0)break;r++;let i=n[r++],s=n[r++],a=n[r++];e.setAttribute(t,s,a,i)}else{let i=o,s=n[++r];ly(i)?e.setProperty(t,i,s):e.setAttribute(t,i,s),r++}}return r}function Lp(e){return e===3||e===4||e===6}function ly(e){return e.charCodeAt(0)===64}function Ar(e,t){if(!(t===null||t.length===0))if(e===null||e.length===0)e=t.slice();else{let n=-1;for(let r=0;r<t.length;r++){let o=t[r];typeof o=="number"?n=o:n===0||(n===-1||n===2?Jf(e,n,o,null,t[++r]):Jf(e,n,o,null,null))}}return e}function Jf(e,t,n,r,o){let i=0,s=e.length;if(t===-1)s=-1;else for(;i<e.length;){let a=e[i++];if(typeof a=="number"){if(a===t){s=-1;break}else if(a>t){s=i-1;break}}}for(;i<e.length;){let a=e[i];if(typeof a=="number")break;if(a===n){o!==null&&(e[i+1]=o);return}i++,o!==null&&i++}s!==-1&&(e.splice(s,0,t),i=s+1),e.splice(i++,0,n),o!==null&&e.splice(i++,0,o)}function Vp(e){return e!==Mr}function Is(e){return e&32767}function dy(e){return e>>16}function Ds(e,t){let n=dy(e),r=t;for(;n>0;)r=r[Cn],n--;return r}var nl=!0;function ep(e){let t=nl;return nl=e,t}var uy=256,jp=uy-1,Hp=5,fy=0,at={};function py(e,t,n){let r;typeof n=="string"?r=n.charCodeAt(0)||0:Object.hasOwn(n,Dn)&&(r=n[Dn]),r==null&&(r=n[Dn]=fy++);let o=r&jp,i=1<<o;t.data[e+(o>>Hp)]|=i}function Cs(e,t){let n=Bp(e,t);if(n!==-1)return n;let r=t[E];r.firstCreatePass&&(e.injectorIndex=t.length,qc(r.data,e),qc(t,null),qc(r.blueprint,null));let o=Al(e,t),i=e.injectorIndex;if(Vp(o)){let s=Is(o),a=Ds(o,t),c=a[E].data;for(let l=0;l<8;l++)t[i+l]=a[s+l]|c[s+l]}return t[i+8]=o,i}function qc(e,t){e.push(0,0,0,0,0,0,0,0,t)}function Bp(e,t){return e.injectorIndex===-1||e.parent&&e.parent.injectorIndex===e.injectorIndex||t[e.injectorIndex+8]===null?-1:e.injectorIndex}function Al(e,t){if(e.parent&&e.parent.injectorIndex!==-1)return e.parent.injectorIndex;let n=0,r=null,o=t;for(;o!==null;){if(r=Wp(o),r===null)return Mr;if(n++,o=o[Cn],r.injectorIndex!==-1)return r.injectorIndex|n<<16}return Mr}function rl(e,t,n){py(e,t,n)}function my(e,t){if(t==="class")return e.classes;if(t==="style")return e.styles;let n=e.attrs;if(n){let r=n.length,o=0;for(;o<r;){let i=n[o];if(Lp(i))break;if(i===0)o=o+2;else if(typeof i=="number")for(o++;o<r&&typeof n[o]=="string";)o++;else{if(i===t)return n[o+1];o=o+2}}}return null}function Up(e,t,n){if(n&8||e!==void 0)return e;Zi(t,"NodeInjector")}function $p(e,t,n,r){if(n&8&&r===void 0&&(r=null),(n&3)===0){let o=e[_t],i=Fe(void 0);try{return o?o.get(t,r,n&8):hc(t,r,n&8)}finally{Fe(i)}}return Up(r,t,n)}function zp(e,t,n,r=0,o){if(e!==null){if(t[I]&2048&&!(r&2)){let s=by(e,t,n,r,at);if(s!==at)return s}let i=Gp(e,t,n,r,at);if(i!==at)return i}return $p(t,n,r,o)}function Gp(e,t,n,r,o){let i=gy(n);if(typeof i=="function"){if(!Vc(t,e,r))return r&1?Up(o,n,r):$p(t,n,r,o);try{let s;if(s=i(r),s==null&&!(r&8))Zi(n);else return s}finally{jc()}}else if(typeof i=="number"){let s=null,a=Bp(e,t),c=Mr,l=r&1?t[Ae][ve]:null;for((a===-1||r&4)&&(c=a===-1?Al(e,t):t[a+8],c===Mr||!np(r,!1)?a=-1:(s=t[E],a=Is(c),t=Ds(c,t)));a!==-1;){let d=t[E];if(tp(i,a,d.data)){let u=hy(a,t,n,s,r,l);if(u!==at)return u}c=t[a+8],c!==Mr&&np(r,t[E].data[a+8]===l)&&tp(i,a,t)?(s=d,a=Is(c),t=Ds(c,t)):a=-1}}return o}function hy(e,t,n,r,o,i){let s=t[E],a=s.data[e+8],c=r==null?St(a)&&nl:r!=s&&(a.type&3)!==0,l=o&1&&i===a,d=Es(a,s,n,c,l);return d!==null?Ro(t,s,d,a,o):at}function Es(e,t,n,r,o){let i=e.providerIndexes,s=t.data,a=i&1048575,c=e.directiveStart,l=e.directiveEnd,d=i>>20,u=r?a:a+d,m=o?a+d:l;for(let f=u;f<m;f++){let h=s[f];if(f<c&&n===h||f>=c&&h.type===n)return f}if(o){let f=s[c];if(f&&st(f)&&f.type===n)return c}return null}function Ro(e,t,n,r,o){let i=e[n],s=t.data;if(i instanceof Hn){let a=i;if(a.resolving)throw mc("");let c=ep(a.canSeeViewProviders);a.resolving=!0;let l=s[n].type||s[n],d,u=a.injectImpl?Fe(a.injectImpl):null,m=Vc(e,r,0);try{i=e[n]=a.factory(void 0,o,s,e,r),t.firstCreatePass&&n>=r.directiveStart&&ry(n,s[n],t)}finally{u!==null&&Fe(u),ep(c),a.resolving=!1,jc()}}return i}function gy(e){if(typeof e=="string")return e.charCodeAt(0)||0;let t=Object.hasOwn(e,Dn)?e[Dn]:void 0;return typeof t=="number"?t>=0?t&jp:vy:t}function tp(e,t,n){let r=1<<e;return!!(n[t+(e>>Hp)]&r)}function np(e,t){return!(e&2)&&!(e&1&&t)}var Kt=class{_tNode;_lView;constructor(t,n){this._tNode=t,this._lView=n}get(t,n,r){return zp(this._tNode,this._lView,t,En(r),n)}};function vy(){return new Kt(me(),A())}function Hs(e){return Lo(()=>{let t=e.prototype.constructor,n=t[mo]||ol(t),r=Object.prototype,o=Object.getPrototypeOf(e.prototype).constructor;for(;o&&o!==r;){let i=o[mo]||ol(o);if(i&&i!==n)return i;o=Object.getPrototypeOf(o)}return i=>new i})}function ol(e){return lc(e)?()=>{let t=ol(he(e));return t&&t()}:wn(e)}function by(e,t,n,r,o){let i=e,s=t;for(;i!==null&&s!==null&&s[I]&2048&&!Ir(s);){let a=Gp(i,s,n,r|2,at);if(a!==at)return a;r&=-5;let c=i.parent;if(!c){let l=s[wc];if(l){let d=l.get(n,at,r);if(d!==at)return d}c=Wp(s),s=s[Cn]}i=c}return o}function Wp(e){let t=e[E],n=t.type;return n===2?t.declTNode:n===1?e[ve]:null}function qp(e){return my(me(),e)}function Q(e){return{token:e.token,providedIn:e.autoProvided===!1?null:"root",factory:e.factory,value:void 0}}function yy(){return Fr(me(),A())}function Fr(e,t){return new q($e(e,t))}var q=(()=>{class e{nativeElement;constructor(n){this.nativeElement=n}static __NG_ELEMENT_ID__=yy}return e})();function Zp(e){return e instanceof q?e.nativeElement:e}function _y(){return this._results[Symbol.iterator]()}var Ns=class{_emitDistinctChangesOnly;dirty=!0;_onDirty=void 0;_results=[];_changesDetected=!1;_changes=void 0;length=0;first=void 0;last=void 0;get changes(){return this._changes??=new de}constructor(t=!1){this._emitDistinctChangesOnly=t}get(t){return this._results[t]}map(t){return this._results.map(t)}filter(t){return this._results.filter(t)}find(t){return this._results.find(t)}reduce(t,n){return this._results.reduce(t,n)}forEach(t){this._results.forEach(t)}some(t){return this._results.some(t)}toArray(){return this._results.slice()}toString(){return this._results.toString()}reset(t,n){this.dirty=!1;let r=uf(t);(this._changesDetected=!df(this._results,r,n))&&(this._results=r,this.length=r.length,this.last=r[this.length-1],this.first=r[0])}notifyOnChanges(){this._changes!==void 0&&(this._changesDetected||!this._emitDistinctChangesOnly)&&this._changes.next(this)}onDirty(t){this._onDirty=t}setDirty(){this.dirty=!0,this._onDirty?.()}destroy(){this._changes!==void 0&&(this._changes.complete(),this._changes.unsubscribe())}[Symbol.iterator]=_y};function Qp(e){return(e.flags&128)===128}var Rl=(function(e){return e[e.OnPush=0]="OnPush",e[e.Eager=1]="Eager",e[e.Default=1]="Default",e})(Rl||{}),Yp=new Map,Ey=0;function wy(){return Ey++}function Sy(e){Yp.set(e[Et],e)}function il(e){Yp.delete(e[Et])}var rp="__ngContext__";function Rr(e,t){wt(t)?(e[rp]=t[Et],Sy(t)):e[rp]=t}function Kp(e){return Jp(e[Sr])}function Xp(e){return Jp(e[Be])}function Jp(e){for(;e!==null&&!Ue(e);)e=e[Be];return e}var sl;function kl(e){sl=e}function em(){if(sl!==void 0)return sl;if(typeof document<"u")return document;throw new _(210,!1)}var tm=!1,nm=new g("",{factory:()=>tm});var op=new WeakMap;function Iy(e,t){if(e==null||typeof e!="object")return;let n=op.get(e);n||(n=new WeakSet,op.set(e,n)),n.add(t)}var Dy=(e,t,n,r)=>{};function Cy(e,t,n,r){Dy(e,t,n,r)}function Bs(e){return(e.flags&32)===32}var Ny=()=>null;function rm(e,t,n=!1){return Ny(e,t,n)}function om(e,t){let n=e.contentQueries;if(n!==null){let r=S(null);try{for(let o=0;o<n.length;o+=2){let i=n[o],s=n[o+1];if(s!==-1){let a=e.data[s];Do(i),a.contentQueries(2,t[s],s)}}}finally{S(r)}}}function al(e,t,n){Do(0);let r=S(null);try{t(e,n)}finally{S(r)}}function im(e,t,n){if(Sc(t)){let r=S(null);try{let o=t.directiveStart,i=t.directiveEnd;for(let s=o;s<i;s++){let a=e.data[s];if(a.contentQueries){let c=n[s];a.contentQueries(1,c,s)}}}finally{S(r)}}}var Je=(function(e){return e[e.Emulated=0]="Emulated",e[e.None=2]="None",e[e.ShadowDom=3]="ShadowDom",e[e.ExperimentalIsolatedShadowDom=4]="ExperimentalIsolatedShadowDom",e})(Je||{});var gs;function Ty(){if(gs===void 0&&(gs=null,hr.trustedTypes))try{gs=hr.trustedTypes.createPolicy("angular",{createHTML:e=>e,createScript:e=>e,createScriptURL:e=>e})}catch{}return gs}function Us(e){return Ty()?.createHTML(e)||e}var Ct=class{changingThisBreaksApplicationSecurity;constructor(t){this.changingThisBreaksApplicationSecurity=t}toString(){return`SafeValue must use [property]=binding: ${this.changingThisBreaksApplicationSecurity} (see ${$i})`}},cl=class extends Ct{getTypeName(){return"HTML"}},ll=class extends Ct{getTypeName(){return"Style"}},dl=class extends Ct{getTypeName(){return"Script"}},ul=class extends Ct{getTypeName(){return"URL"}},fl=class extends Ct{getTypeName(){return"ResourceURL"}};function ct(e){return e instanceof Ct?e.changingThisBreaksApplicationSecurity:e}function zn(e,t){let n=sm(e);if(n!=null&&n!==t){if(n==="ResourceURL"&&t==="URL")return!0;throw new Error(`Required a safe ${t}, got a ${n} (see ${$i})`)}return n===t}function sm(e){return e instanceof Ct&&e.getTypeName()||null}function Ol(e){return new cl(e)}function Pl(e){return new ll(e)}function Fl(e){return new dl(e)}function Ll(e){return new ul(e)}function Vl(e){return new fl(e)}function My(e){let t=new ml(e);return xy()?new pl(t):t}var pl=class{inertDocumentHelper;constructor(t){this.inertDocumentHelper=t}getInertBodyElement(t){t="<body><remove></remove>"+t;try{let n=new window.DOMParser().parseFromString(Us(t),"text/html").body;return n===null?this.inertDocumentHelper.getInertBodyElement(t):(n.firstChild?.remove(),n)}catch{return null}}},ml=class{defaultDoc;inertDocument;constructor(t){this.defaultDoc=t,this.inertDocument=this.defaultDoc.implementation.createHTMLDocument("sanitization-inert")}getInertBodyElement(t){let n=this.inertDocument.createElement("template");return n.innerHTML=Us(t),n}};function xy(){try{return!!new window.DOMParser().parseFromString(Us(""),"text/html")}catch{return!1}}var Ay=/^(?!javascript:)(?:[a-z0-9+.-]+:|[^&:\/?#]*(?:[\/?#]|$))/i;function $s(e){return e=String(e),e.match(Ay)?e:"unsafe:"+e}function Tt(e){let t=Object.create(null);for(let n of e.split(","))t[n]=!0;return t}function Vo(...e){let t=Object.create(null);for(let n of e)for(let r in n)Object.hasOwn(n,r)&&(t[r]=!0);return t}var am=Tt("area,br,col,hr,img,wbr"),cm=Tt("colgroup,dd,dt,li,p,tbody,td,tfoot,th,thead,tr"),lm=Tt("rp,rt"),Ry=Vo(lm,cm),ky=Vo(cm,Tt("address,article,aside,blockquote,caption,center,del,details,dialog,dir,div,dl,figure,figcaption,footer,h1,h2,h3,h4,h5,h6,header,hgroup,hr,ins,main,map,menu,nav,ol,pre,section,summary,table,ul")),Oy=Vo(lm,Tt("a,abbr,acronym,audio,b,bdi,bdo,big,br,cite,code,del,dfn,em,font,i,img,ins,kbd,label,map,mark,picture,q,ruby,rp,rt,s,samp,small,source,span,strike,strong,sub,sup,time,track,tt,u,var,video")),ip=Vo(am,ky,Oy,Ry),dm=Tt("background,cite,href,itemtype,longdesc,poster,src,xlink:href"),Py=Tt("abbr,accesskey,align,alt,autoplay,axis,bgcolor,border,cellpadding,cellspacing,class,clear,color,cols,colspan,compact,controls,coords,datetime,default,dir,download,face,headers,height,hidden,hreflang,hspace,ismap,itemscope,itemprop,kind,label,lang,language,loop,media,muted,nohref,nowrap,open,preload,rel,rev,role,rows,rowspan,rules,scope,scrolling,shape,size,sizes,span,srclang,srcset,start,summary,tabindex,target,title,translate,type,usemap,valign,value,vspace,width"),Fy=Tt("aria-activedescendant,aria-atomic,aria-autocomplete,aria-busy,aria-checked,aria-colcount,aria-colindex,aria-colspan,aria-controls,aria-current,aria-describedby,aria-details,aria-disabled,aria-dropeffect,aria-errormessage,aria-expanded,aria-flowto,aria-grabbed,aria-haspopup,aria-hidden,aria-invalid,aria-keyshortcuts,aria-label,aria-labelledby,aria-level,aria-live,aria-modal,aria-multiline,aria-multiselectable,aria-orientation,aria-owns,aria-placeholder,aria-posinset,aria-pressed,aria-readonly,aria-relevant,aria-required,aria-roledescription,aria-rowcount,aria-rowindex,aria-rowspan,aria-selected,aria-setsize,aria-sort,aria-valuemax,aria-valuemin,aria-valuenow,aria-valuetext"),Ly=Vo(dm,Py,Fy),Vy=Tt("script,style,template"),hl=class{sanitizedSomething=!1;buf=[];sanitizeChildren(t){let n=t.firstChild,r=!0,o=[];for(;n;){if(n.nodeType===Node.ELEMENT_NODE?r=this.startElement(n):n.nodeType===Node.TEXT_NODE?this.chars(n.nodeValue):this.sanitizedSomething=!0,r&&n.firstChild){o.push(n),n=By(n);continue}for(;n;){n.nodeType===Node.ELEMENT_NODE&&this.endElement(n);let i=Hy(n);if(i){n=i;break}n=o.pop()}}return this.buf.join("")}startElement(t){let n=sp(t).toLowerCase();if(!Object.hasOwn(ip,n))return this.sanitizedSomething=!0,!Object.hasOwn(Vy,n);this.buf.push("<"),this.buf.push(n);let r=t.attributes;for(let o=0;o<r.length;o++){let i=r.item(o),s=i.name,a=s.toLowerCase();if(!Object.hasOwn(Ly,a)){this.sanitizedSomething=!0;continue}let c=i.value;dm[a]&&(c=$s(c)),this.buf.push(" ",s,'="',ap(c),'"')}return this.buf.push(">"),!0}endElement(t){let n=sp(t).toLowerCase();Object.hasOwn(ip,n)&&!Object.hasOwn(am,n)&&(this.buf.push("</"),this.buf.push(n),this.buf.push(">"))}chars(t){this.buf.push(ap(t))}};function jy(e,t){return(e.compareDocumentPosition(t)&Node.DOCUMENT_POSITION_CONTAINED_BY)!==Node.DOCUMENT_POSITION_CONTAINED_BY}function Hy(e){let t=e.nextSibling;if(t&&e!==t.previousSibling)throw um(t);return t}function By(e){let t=e.firstChild;if(t&&jy(e,t))throw um(t);return t}function sp(e){let t=e.nodeName;return typeof t=="string"?t:"FORM"}function um(e){return new Error(`Failed to sanitize html because the element is clobbered: ${e.outerHTML}`)}var Uy=/[\uD800-\uDBFF][\uDC00-\uDFFF]/g,$y=/([^\#-~ |!])/g;function ap(e){return e.replace(/&/g,"&amp;").replace(Uy,function(t){let n=t.charCodeAt(0),r=t.charCodeAt(1);return"&#"+((n-55296)*1024+(r-56320)+65536)+";"}).replace($y,function(t){return"&#"+t.charCodeAt(0)+";"}).replace(/</g,"&lt;").replace(/>/g,"&gt;")}var vs;function jl(e,t){let n=null;try{vs=vs||My(e);let r=t?String(t):"";n=vs.getInertBodyElement(r);let o=5,i=r;do{if(o===0)throw new Error("Failed to sanitize html because the input is unstable");o--,r=i,i=n.innerHTML,n=vs.getInertBodyElement(r)}while(r!==i);let a=new hl().sanitizeChildren(cp(n)||n);return Us(a)}finally{if(n){let r=cp(n)||n;for(;r.firstChild;)r.firstChild.remove()}}}function cp(e){return"content"in e&&zy(e)?e.content:null}function zy(e){return e.nodeType===Node.ELEMENT_NODE&&e.nodeName==="TEMPLATE"}function Gy(e,t){return e.createText(t)}function fm(e,t,n){return e.createElement(t,n)}function jn(e,t,n,r,o){e.insertBefore(t,n,r,o)}function pm(e,t,n){e.appendChild(t,n)}function lp(e,t,n,r,o){r!==null?jn(e,t,n,r,o):pm(e,t,n)}function Wy(e,t,n,r){e.removeChild(null,t,n,r)}function qy(e,t,n){e.setAttribute(t,"style",n)}function Zy(e,t,n){n===""?e.removeAttribute(t,"class"):e.setAttribute(t,"class",n)}function mm(e,t,n){let{mergedAttrs:r,classes:o,styles:i}=n;r!==null&&cy(e,t,r),o!==null&&Zy(e,t,o),i!==null&&qy(e,t,i)}function Qy(e,t,n){let r=e.length;for(;;){let o=e.indexOf(t,n);if(o===-1)return o;if(o===0||e.charCodeAt(o-1)<=32){let i=t.length;if(o+i===r||e.charCodeAt(o+i)<=32)return o}n=o+1}}var hm="ng-template";function Yy(e,t,n,r){let o=0;if(r){for(;o<t.length&&typeof t[o]=="string";o+=2)if(t[o]==="class"&&Qy(t[o+1].toLowerCase(),n,0)!==-1)return!0}else if(Hl(e))return!1;if(o=t.indexOf(1,o),o>-1){let i;for(;++o<t.length&&typeof(i=t[o])=="string";)if(i.toLowerCase()===n)return!0}return!1}function Hl(e){return e.type===4&&e.value!==hm}function Ky(e,t,n){let r=e.type===4&&!n?hm:e.value;return t===r}function Xy(e,t,n){let r=4,o=e.attrs,i=o!==null?t_(o):0,s=!1;for(let a=0;a<t.length;a++){let c=t[a];if(typeof c=="number"){if(!s&&!Ke(r)&&!Ke(c))return!1;if(s&&Ke(c))continue;s=!1,r=c|r&1;continue}if(!s)if(r&4){if(r=2|r&1,c!==""&&!Ky(e,c,n)||c===""&&t.length===1){if(Ke(r))return!1;s=!0}}else if(r&8){if(o===null||!Yy(e,o,c,n)){if(Ke(r))return!1;s=!0}}else{let l=t[++a],d=Jy(c,o,Hl(e),n);if(d===-1){if(Ke(r))return!1;s=!0;continue}if(l!==""){let u;if(d>i?u="":u=o[d+1].toLowerCase(),r&2&&l!==u){if(Ke(r))return!1;s=!0}}}}return Ke(r)||s}function Ke(e){return(e&1)===0}function Jy(e,t,n,r){if(t===null)return-1;let o=0;if(r||!n){let i=!1;for(;o<t.length;){let s=t[o];if(s===e)return o;if(s===3||s===6)i=!0;else if(s===1||s===2){let a=t[++o];for(;typeof a=="string";)a=t[++o];continue}else{if(s===4)break;if(s===0){o+=4;continue}}o+=i?1:2}return-1}else return n_(t,e)}function gm(e,t,n=!1){for(let r=0;r<t.length;r++)if(Xy(e,t[r],n))return!0;return!1}function e_(e){let t=e.attrs;if(t!=null){let n=t.indexOf(5);if((n&1)===0)return t[n+1]}return null}function t_(e){for(let t=0;t<e.length;t++){let n=e[t];if(Lp(n))return t}return e.length}function n_(e,t){let n=e.indexOf(4);if(n>-1)for(n++;n<e.length;){let r=e[n];if(typeof r=="number")return-1;if(r===t)return n;n++}return-1}function r_(e,t){e:for(let n=0;n<t.length;n++){let r=t[n];if(e.length===r.length){for(let o=0;o<e.length;o++)if(e[o]!==r[o])continue e;return!0}}return!1}function dp(e,t){return e?":not("+t.trim()+")":t}function o_(e){let t=e[0],n=1,r=2,o="",i=!1;for(;n<e.length;){let s=e[n];if(typeof s=="string")if(r&2){let a=e[++n];o+="["+s+(a.length>0?'="'+a+'"':"")+"]"}else r&8?o+="."+s:r&4&&(o+=" "+s);else o!==""&&!Ke(s)&&(t+=dp(i,o),o=""),r=s,i=i||!Ke(r);n++}return o!==""&&(t+=dp(i,o)),t}function i_(e){return e.map(o_).join(",")}function s_(e){let t=[],n=[],r=1,o=2;for(;r<e.length;){let i=e[r];if(typeof i=="string")o===2?i!==""&&t.push(i,e[++r]):o===8&&n.push(i);else{if(!Ke(o))break;o=i}r++}return n.length&&t.push(1,...n),t}var Mt={},Nt=(function(e){return e[e.Important=1]="Important",e[e.DashCase=2]="DashCase",e})(Nt||{}),a_;function Bl(e,t){return a_(e,t)}var Bn=new Set;var pA=typeof document<"u"&&typeof document?.documentElement?.getAnimations=="function";var gl=new WeakMap;function vm(e){return e?e[Cn]??e:null}var Mo=new WeakSet;function c_(e,t,n){let r=gl.get(e);if(!r||r.length===0)return;let o=t.parentNode,i=t.previousSibling,s=vm(n);for(let a=r.length-1;a>=0;a--){let{el:c,declarationView:l}=r[a],d=c.parentNode;c===t?(r.splice(a,1),Mo.add(c),c.dispatchEvent(new CustomEvent("animationend",{detail:{cancel:!0}}))):i&&c===i?(r.splice(a,1),c.dispatchEvent(new CustomEvent("animationend",{detail:{cancel:!0}})),c.parentNode?.removeChild(c)):d&&o&&d!==o&&(s===null||l===null||s===l)&&(r.splice(a,1),c.dispatchEvent(new CustomEvent("animationend",{detail:{cancel:!0}})),c.parentNode?.removeChild(c))}}function l_(e,t,n){let r=vm(n),o=gl.get(e);o?o.some(i=>i.el===t)||o.push({el:t,declarationView:r}):gl.set(e,[{el:t,declarationView:r}])}var zs=(function(e){return e[e.CHANGE_DETECTION=0]="CHANGE_DETECTION",e[e.AFTER_NEXT_RENDER=1]="AFTER_NEXT_RENDER",e})(zs||{}),xt=new g(""),up=new Set;function Jt(e){up.has(e)||(up.add(e),performance?.mark?.("mark_feature_usage",{detail:{feature:e}}))}var Ul=(()=>{class e{impl=null;execute(){this.impl?.execute()}static \u0275prov=F({token:e,providedIn:"root",factory:()=>new e})}return e})(),bm=[0,1,2,3],ym=(()=>{class e{ngZone=p(z);scheduler=p(yt);errorHandler=p(we,{optional:!0});sequences=new Set;deferredRegistrations=new Set;executing=!1;constructor(){p(xt,{optional:!0})}execute(){let n=this.sequences.size>0;n&&V(P.AfterRenderHooksStart),this.executing=!0;for(let r of bm)for(let o of this.sequences)if(!(o.erroredOrDestroyed||!o.hooks[r]))try{o.pipelinedValue=this.ngZone.runOutsideAngular(()=>this.maybeTrace(()=>{let i=o.hooks[r];return i(o.pipelinedValue)},o.snapshot))}catch(i){o.erroredOrDestroyed=!0,this.errorHandler?.handleError(i)}this.executing=!1;for(let r of this.sequences)r.afterRun(),r.once&&(this.sequences.delete(r),r.destroy());for(let r of this.deferredRegistrations)this.sequences.add(r);this.deferredRegistrations.size>0&&this.scheduler.notify(7),this.deferredRegistrations.clear(),n&&V(P.AfterRenderHooksEnd)}register(n){let{view:r}=n;r!==void 0?((r[Tn]??=[]).push(n),Rn(r),r[I]|=8192):this.executing?this.deferredRegistrations.add(n):this.addSequence(n)}addSequence(n){this.sequences.add(n),this.scheduler.notify(7)}unregister(n){this.executing&&this.sequences.has(n)?(n.erroredOrDestroyed=!0,n.pipelinedValue=void 0,n.once=!0):(this.sequences.delete(n),this.deferredRegistrations.delete(n))}maybeTrace(n,r){return r?r.run(zs.AFTER_NEXT_RENDER,n):n()}static \u0275prov=F({token:e,providedIn:"root",factory:()=>new e})}return e})(),Ts=class{impl;hooks;view;once;snapshot;erroredOrDestroyed=!1;pipelinedValue=void 0;unregisterOnDestroy;constructor(t,n,r,o,i,s=null){this.impl=t,this.hooks=n,this.view=r,this.once=o,this.snapshot=s,this.unregisterOnDestroy=i?.onDestroy(()=>this.destroy())}afterRun(){this.erroredOrDestroyed=!1,this.pipelinedValue=void 0,this.snapshot?.dispose(),this.snapshot=null}destroy(){this.impl.unregister(this),this.unregisterOnDestroy?.();let t=this.view?.[Tn];t&&(this.view[Tn]=t.filter(n=>n!==this))}};function Gs(e,t){let n=t?.injector??p(ae);return Jt("NgAfterNextRender"),u_(e,n,t,!0)}function d_(e){return e instanceof Function?[void 0,void 0,e,void 0]:[e.earlyRead,e.write,e.mixedReadWrite,e.read]}function u_(e,t,n,r){let o=t.get(Ul);o.impl??=t.get(ym);let i=t.get(xt,null,{optional:!0}),s=n?.manualCleanup!==!0?t.get(xe):null,a=t.get(Co,null,{optional:!0}),c=new Ts(o.impl,d_(e),a?.view,r,s,i?.snapshot(null));return o.impl.register(c),c}var _m=new g("",{factory:()=>{let e=p(ge),t=new Set;return e.onDestroy(()=>t.clear()),{queue:t,isScheduled:!1,scheduler:null,injector:e}}});function Em(e,t,n){let r=e.get(_m);if(Array.isArray(t))for(let o of t)r.queue.add(o),n?.detachedLeaveAnimationFns?.push(o);else r.queue.add(t),n?.detachedLeaveAnimationFns?.push(t);r.scheduler&&r.scheduler(e)}function f_(e,t){let n=e.get(_m);if(Array.isArray(t))for(let r of t)n.queue.delete(r);else n.queue.delete(t)}function p_(e,t){for(let[n,r]of t)Em(e,r.animateFns)}function fp(e,t,n,r){let o=e?.[qt]?.enter;t!==null&&o&&o.has(n.index)&&p_(r,o)}function pp(e,t,n,r){try{n.get(Eo)}catch{return r(!1)}let o=e?.[qt];o?.enter?.has(t.index)&&f_(n,o.enter.get(t.index).animateFns);let i=m_(e,t,o);if(i.size===0){let s=!1;if(e){let a=[];Ws(e,t,a),s=a.length>0}if(!s)return r(!1)}e&&Bn.add(e[Et]),Em(n,()=>h_(e,t,o||void 0,i,r),o||void 0)}function m_(e,t,n){let r=new Map,o=n?.leave;if(o&&o.has(t.index)&&r.set(t.index,o.get(t.index)),e&&o)for(let[i,s]of o){if(r.has(i))continue;let c=e[E].data[i].parent;for(;c;){if(c===t){r.set(i,s);break}c=c.parent}}return r}function h_(e,t,n,r,o){let i=[];if(n&&n.leave)for(let[s]of r){if(!n.leave.has(s))continue;let a=n.leave.get(s);for(let c of a.animateFns){let{promise:l}=c();i.push(l)}n.detachedLeaveAnimationFns=void 0}if(e&&Ws(e,t,i),i.length>0){let s=n||e?.[qt];if(s){let a=s.running;a&&i.push(a),s.running=Promise.allSettled(i),v_(e,s.running,o)}else Promise.allSettled(i).then(()=>{e&&Bn.delete(e[Et]),o(!0)})}else e&&Bn.delete(e[Et]),o(!1)}function Ws(e,t,n){if(t.type&12){let o=e[t.index];if(Ue(o))for(let i=be;i<o.length;i++){let s=o[i];s[E].type===2&&g_(s,n)}}let r=t.child;for(;r;)Ws(e,r,n),r=r.next}function g_(e,t){let n=e[qt];if(n&&n.leave)for(let o of n.leave.values())for(let i of o.animateFns){let{promise:s}=i();t.push(s)}let r=e[E].firstChild;for(;r;)Ws(e,r,t),r=r.next}function v_(e,t,n){t.then(()=>{e[qt]?.running===t&&(e[qt].running=void 0,Bn.delete(e[Et])),n(!0)})}function Tr(e,t,n,r,o,i,s,a){if(o!=null){let c,l=!1;Ue(o)?c=o:wt(o)&&(l=!0,o=o[Ye]);let d=ye(o);e===0&&r!==null?(fp(a,r,i,n),s==null?pm(t,r,d):jn(t,r,d,s||null,!0)):e===1&&r!==null?(fp(a,r,i,n),jn(t,r,d,s||null,!0),c_(i,d,a)):e===2?(a?.[qt]?.leave?.has(i.index)&&l_(i,d,a),Mo.delete(d),pp(a,i,n,u=>{if(Mo.has(d)){Mo.delete(d);return}Wy(t,d,l,u)})):e===3&&(Mo.delete(d),pp(a,i,n,()=>{t.destroyNode(d)})),c!=null&&T_(t,e,n,c,i,r,s)}}function b_(e,t){wm(e,t),t[Ye]=null,t[ve]=null}function y_(e,t,n,r,o,i){r[Ye]=o,r[ve]=t,qs(e,r,n,1,o,i)}function wm(e,t){t[ot].changeDetectionScheduler?.notify(9),qs(e,t,t[Z],2,null,null)}function __(e){let t=e[Sr];if(!t)return Zc(e[E],e);for(;t;){let n=null;if(wt(t))n=t[Sr];else{let r=t[be];r&&(n=r)}if(!n){for(;t&&!t[Be]&&t!==e;)wt(t)&&Zc(t[E],t),t=t[pe];t===null&&(t=e),wt(t)&&Zc(t[E],t),n=t&&t[Be]}t=n}}function $l(e,t){let n=e[xn],r=n.indexOf(t);n.splice(r,1)}function zl(e,t){if(An(t))return;let n=t[Z];n.destroyNode&&qs(e,t,n,3,null,null),__(t)}function Zc(e,t){if(An(t))return;let n=S(null);try{t[I]&=-129,t[I]|=256,t[Le]&&mn(t[Le]),w_(e,t),E_(e,t),t[E].type===1&&t[Z].destroy();let r=t[Wt];if(r!==null&&Ue(t[pe])){r!==t[pe]&&$l(r,t);let o=t[it];o!==null&&o.detachView(e)}il(t)}finally{S(n)}}function E_(e,t){let n=e.cleanup,r=t[wr];if(n!==null)for(let s=0;s<n.length-1;s+=2)if(typeof n[s]=="string"){let a=n[s+3];a>=0?r[a]():r[-a].unsubscribe(),s+=2}else{let a=r[n[s+1]];n[s].call(a)}r!==null&&(t[wr]=null);let o=t[gt];if(o!==null){t[gt]=null;for(let s=0;s<o.length;s++){let a=o[s];a()}}let i=t[vt];if(i!==null){t[vt]=null;for(let s of i)s.destroy()}}function w_(e,t){let n;if(e!=null&&(n=e.destroyHooks)!=null)for(let r=0;r<n.length;r+=2){let o=t[n[r]];if(!(o instanceof Hn)){let i=n[r+1];if(Array.isArray(i))for(let s=0;s<i.length;s+=2){let a=o[i[s]],c=i[s+1];V(P.LifecycleHookStart,a,c);try{c.call(a)}finally{V(P.LifecycleHookEnd,a,c)}}else{V(P.LifecycleHookStart,o,i);try{i.call(o)}finally{V(P.LifecycleHookEnd,o,i)}}}}}function Sm(e,t,n){if(t===null)throw new _(510,!1);return S_(e,t.parent,n)}function S_(e,t,n){let r=t;for(;r!==null&&r.type&168;)t=r,r=t.parent;if(r===null)return n[Ye];if(St(r)){let{encapsulation:o}=e.data[r.directiveStart+r.componentOffset];if(o===Je.None||o===Je.Emulated)return null}return $e(r,n)}function Im(e,t,n){return D_(e,t,n)}function I_(e,t,n){return e.type&40?$e(e,n):null}var D_=I_,mp;function Gl(e,t,n,r){let o=Sm(e,r,t),i=t[Z],s=r.parent||t[ve],a=Im(s,r,t);if(o!=null)if(Array.isArray(n))for(let c=0;c<n.length;c++)lp(i,o,n[c],a,!1);else lp(i,o,n,a,!1);mp!==void 0&&mp(i,r,t,n,o)}function xo(e,t){if(t!==null){let n=t.type;if(n&3)return $e(t,e);if(n&4)return vl(-1,e[t.index]);if(n&8){let r=t.child;if(r!==null)return xo(e,r);{let o=e[t.index];return Ue(o)?vl(-1,o):ye(o)}}else{if(n&128)return xo(e,t.next);if(n&32)return Bl(t,e)()||ye(e[t.index]);{let r=Dm(e,t);if(r!==null){if(Array.isArray(r))return r[0];let o=bt(e[Ae]);return xo(o,r)}else return xo(e,t.next)}}}return null}function Dm(e,t){if(t!==null){let r=e[Ae][ve],o=t.projection;return r.projection[o]}return null}function vl(e,t){let n=be+e+1;if(n<t.length){let r=t[n],o=r[E].firstChild;if(o!==null)return xo(r,o)}return t[Mn]}function Wl(e,t,n,r,o,i,s){for(;n!=null;){let a=r[_t];if(n.type===128){n=n.next;continue}let c=r[n.index],l=n.type;if(s&&t===0&&(c&&Rr(ye(c),r),n.flags|=2),!Bs(n))if(l&8)Wl(e,t,n.child,r,o,i,!1),Tr(t,e,a,o,c,n,i,r);else if(l&32){let d=Bl(n,r),u;for(;u=d();)Tr(t,e,a,o,u,n,i,r);Tr(t,e,a,o,c,n,i,r)}else l&16?Cm(e,t,r,n,o,i):Tr(t,e,a,o,c,n,i,r);n=s?n.projectionNext:n.next}}function qs(e,t,n,r,o,i){e.type===3?C_(n,r,t,o,i):Wl(n,r,e.firstChild,t,o,i,!1)}function C_(e,t,n,r,o){let s=n[E].firstChild,a=s.next,c=ye(n[s.index]),l=ye(n[a.index]),d=a.index+1,u=n[d];if(t===1||t===0)r!==null&&(u&&u.hasChildNodes()?jn(e,r,u,o,!0):(jn(e,r,c,o,!0),jn(e,r,l,o,!0)));else if(t===2){if(u||(u=document.createDocumentFragment(),n[d]=u),c&&c.parentNode===u)return;let m=c;for(;m!==null;){let f=m.nextSibling;if(u.appendChild(m),m===l)break;m=f}}}function N_(e,t,n){let r=t[Z],o=Sm(e,n,t),i=n.parent||t[ve],s=Im(i,n,t);Cm(r,0,t,n,o,s)}function Cm(e,t,n,r,o,i){let s=n[Ae],c=s[ve].projection[r.projection];if(Array.isArray(c))for(let l=0;l<c.length;l++){let d=c[l];Tr(t,e,n[_t],o,d,r,i,n)}else{let l=c,d=s[pe];Qp(r)&&(l.flags|=128),Wl(e,t,l,d,o,i,!0)}}function T_(e,t,n,r,o,i,s){let a=r[Mn],c=ye(r);if(a!==c&&Tr(t,e,n,i,a,o,s),(r[I]&4)===0)for(let l=be;l<r.length;l++){let d=r[l];qs(d[E],d,e,t,i,a)}}function M_(e,t,n,r,o){if(t)o?e.addClass(n,r):e.removeClass(n,r);else{let i=r.indexOf("-")===-1?void 0:Nt.DashCase;o==null?e.removeStyle(n,r,i):(typeof o=="string"&&o.endsWith("!important")&&(o=o.slice(0,-10),i|=Nt.Important),e.setStyle(n,r,o,i))}}function ql(e,t,n,r,o,i,s,a,c,l,d){let u=ue+r,m=u+o,f=x_(u,m),h=typeof l=="function"?l():l;return f[E]={type:e,blueprint:f,template:n,queries:null,viewQuery:a,declTNode:t,data:f.slice().fill(null,u),bindingStartIndex:u,expandoStartIndex:m,hostBindingOpCodes:null,firstCreatePass:!0,firstUpdatePass:!0,staticViewQueries:!1,staticContentQueries:!1,preOrderHooks:null,preOrderCheckHooks:null,contentHooks:null,contentCheckHooks:null,viewHooks:null,viewCheckHooks:null,destroyHooks:null,cleanup:null,contentQueries:null,components:null,directiveRegistry:typeof i=="function"?i():i,pipeRegistry:typeof s=="function"?s():s,firstChild:null,schemas:c,consts:h,incompleteFirstPass:!1,ssrId:d}}function x_(e,t){let n=[];for(let r=0;r<t;r++)n.push(r<e?null:Mt);return n}function A_(e){let t=e.tView;return t===null||t.incompleteFirstPass?e.tView=ql(1,null,e.template,e.decls,e.vars,e.directiveDefs,e.pipeDefs,e.viewQuery,e.schemas,e.consts,e.id):t}function Zl(e,t,n,r,o,i,s,a,c,l,d){let u=t.blueprint.slice();return u[Ye]=o,u[I]=r|4|128|8|64|1024,(l!==null||e&&e[I]&2048)&&(u[I]|=2048),Dc(u),u[pe]=u[Cn]=e,u[Se]=n,u[ot]=s||e&&e[ot],u[Z]=a||e&&e[Z],u[_t]=c||e&&e[_t]||null,u[ve]=i,u[Et]=wy(),u[Er]=d,u[wc]=l,u[Ae]=t.type==2?e[Ae]:u,u}function R_(e,t,n){let r=$e(t,e),o=A_(n),i=e[ot].rendererFactory,s=Ql(e,Zl(e,o,null,Nm(n),r,t,null,i.createRenderer(r,n),null,null,null));return e[t.index]=s}function Nm(e){let t=16;return e.signals?t=4096:e.onPush&&(t=64),t}function Tm(e,t,n,r){if(n===0)return-1;let o=t.length;for(let i=0;i<n;i++)t.push(r),e.blueprint.push(r),e.data.push(null);return o}function Ql(e,t){return e[Sr]?e[Ec][Be]=t:e[Sr]=t,e[Ec]=t,t}function W(e=1){Mm(J(),A(),kn()+e,!1)}function Mm(e,t,n,r){if(!r)if((t[I]&3)===3){let i=e.preOrderCheckHooks;i!==null&&ys(t,i,n)}else{let i=e.preOrderHooks;i!==null&&_s(t,i,0,n)}Qt(n)}var jo=(function(e){return e[e.None=0]="None",e[e.SignalBased=1]="SignalBased",e[e.HasDecoratorInputTransform=2]="HasDecoratorInputTransform",e})(jo||{});function Un(e,t,n,r){let o=S(null);try{let[i,s,a]=e.inputs[n],c=null;(s&jo.SignalBased)!==0&&(c=t[i][ne]),c!==null&&c.transformFn!==void 0?r=c.transformFn(r):a!==null&&(r=a.call(t,r)),e.setInput!==null?e.setInput(t,c,r,n,i):kp(t,c,i,r)}finally{S(o)}}function xm(e,t,n,r,o){let i=kn(),s=r&2;try{Qt(-1),s&&t.length>ue&&Mm(e,t,ue,!1);let a=s?P.TemplateUpdateStart:P.TemplateCreateStart;V(a,o,n),n(r,o)}finally{Qt(i);let a=s?P.TemplateUpdateEnd:P.TemplateCreateEnd;V(a,o,n)}}function Am(e,t,n){V_(e,t,n),(n.flags&64)===64&&j_(e,t,n)}function Yl(e,t,n=$e){let r=t.localNames;if(r!==null){let o=t.index+1;for(let i=0;i<r.length;i+=2){let s=r[i+1],a=s===-1?n(t,e):e[s];e[o++]=a}}}function k_(e,t,n,r){let i=r.get(nm,tm)||n===Je.ShadowDom||n===Je.ExperimentalIsolatedShadowDom,s=e.selectRootElement(t,i);return O_(s),s}function O_(e){P_(e)}var P_=()=>null;function F_(e){return e==="class"?"className":e==="for"?"htmlFor":e==="formaction"?"formAction":e==="innerHtml"?"innerHTML":e==="readonly"?"readOnly":e==="tabindex"?"tabIndex":e}function Rm(e,t,n,r,o,i){let s=t[E];if(Kl(e,s,t,n,r)){St(e)&&L_(t,e.index);return}e.type&3&&(n=F_(n)),km(e,t,n,r,o,i)}function km(e,t,n,r,o,i){if(e.type&3){let s=$e(e,t);r=i!=null?i(r,e.value||"",n):r,o.setProperty(s,n,r)}else e.type&12}function L_(e,t){let n=ze(t,e);n[I]&16||(n[I]|=64)}function V_(e,t,n){let r=n.directiveStart,o=n.directiveEnd;St(n)&&R_(t,n,e.data[r+n.componentOffset]),e.firstCreatePass||Cs(n,t);let i=n.initialInputs;for(let s=r;s<o;s++){let a=e.data[s],c=Ro(t,e,s,n);if(Rr(c,t),i!==null&&z_(t,s-r,c,a,n,i),st(a)){let l=ze(n.index,t);l[Se]=Ro(t,e,s,n)}}}function j_(e,t,n){let r=n.directiveStart,o=n.directiveEnd,i=n.index,s=Pf();try{Qt(i);for(let a=r;a<o;a++){let c=e.data[a],l=t[a];os(a),(c.hostBindings!==null||c.hostVars!==0||c.hostAttrs!==null)&&H_(c,l)}}finally{Qt(-1),os(s)}}function H_(e,t){e.hostBindings!==null&&e.hostBindings(1,t)}function B_(e,t){let n=e.directiveRegistry,r=null;if(n)for(let o=0;o<n.length;o++){let i=n[o];gm(t,i.selectors,!1)&&(r??=[],st(i)?r.unshift(i):r.push(i))}return r}function U_(e,t,n,r,o,i){let s=$e(e,t);$_(t[Z],s,i,e.value,n,r,o)}function $_(e,t,n,r,o,i,s){if(i==null)s?.(i,r||"",o),e.removeAttribute(t,o,n);else{let a=s==null?sf(i):s(i,r||"",o);e.setAttribute(t,o,a,n)}}function z_(e,t,n,r,o,i){let s=i[t];if(s!==null)for(let a=0;a<s.length;a+=2){let c=s[a],l=s[a+1];Un(r,n,c,l)}}function Om(e,t,n,r,o){let i=ue+n,s=t[E],a=o(s,t,e,r,n);t[i]=a,Dr(e,!0);let c=e.type===2;return c?(mm(t[Z],a,e),(Nf()===0||Ji(e))&&Rr(a,t),Tf()):Rr(a,t),ls()&&(!c||!Bs(e))&&Gl(s,t,a,e),e}function Pm(e){let t=e;return Oc()?Pc():(t=t.parent,Dr(t,!1)),t}function G_(e,t){let n=e[_t];if(!n)return;let r;try{r=n.get(Pn,null)}catch{r=null}r?.(t)}function Kl(e,t,n,r,o){let i=e.inputs?.[r],s=e.hostDirectiveInputs?.[r],a=!1;if(s)for(let c=0;c<s.length;c+=2){let l=s[c],d=s[c+1],u=t.data[l];Un(u,n[l],d,o),a=!0}if(i)for(let c of i){let l=n[c],d=t.data[c];Un(d,l,r,o),a=!0}return a}function W_(e,t,n,r,o,i){let s=null,a=null,c=null,l=!1,d=e.directiveToIndex.get(r.type);if(typeof d=="number"?s=d:[s,a,c]=d,a!==null&&c!==null&&e.hostDirectiveInputs&&Object.hasOwn(e.hostDirectiveInputs,o)){let u=e.hostDirectiveInputs[o];for(let m=0;m<u.length;m+=2){let f=u[m];if(f>=a&&f<=c){let h=t.data[f],b=u[m+1];Un(h,n[f],b,i),l=!0}else if(f>c)break}}return s!==null&&Object.hasOwn(r.inputs,o)&&(Un(r,n[s],o,i),l=!0),l}function q_(e,t){let n=ze(t,e),r=n[E];Z_(r,n);let o=n[Ye];o!==null&&n[Er]===null&&(n[Er]=rm(o,n[_t])),V(P.ComponentStart);try{Xl(r,n,n[Se])}finally{V(P.ComponentEnd,n[Se])}}function Z_(e,t){for(let n=t.length;n<e.blueprint.length;n++)t.push(e.blueprint[n])}function Xl(e,t,n){ss(t);try{let r=e.viewQuery;r!==null&&al(1,r,n);let o=e.template;o!==null&&xm(e,t,o,1,n),e.firstCreatePass&&(e.firstCreatePass=!1),t[it]?.finishViewCreation(e),e.staticContentQueries&&om(e,t),e.staticViewQueries&&al(2,e.viewQuery,n);let i=e.components;i!==null&&Q_(t,i)}catch(r){throw e.firstCreatePass&&(e.incompleteFirstPass=!0,e.firstCreatePass=!1),r}finally{t[I]&=-5,as()}}function Q_(e,t){for(let n=0;n<t.length;n++)q_(e,t[n])}function Jl(e,t,n,r){let o=S(null);try{let i=t.tView,a=e[I]&4096?4096:16,c=Zl(e,i,n,a,null,t,null,null,r?.injector??null,r?.embeddedViewInjector??null,r?.dehydratedView??null),l=e[t.index];c[Wt]=l;let d=e[it];return d!==null&&(c[it]=d.createEmbeddedView(i)),Xl(i,c,n),c}finally{S(o)}}function Ms(e,t){return!t||t.firstChild===null||Qp(e)}function ko(e,t,n,r,o=!1){if(e.type===3){let i=e.firstChild,s=i.next,a=ye(t[i.index]),c=ye(t[s.index]),l=a;for(;l!==null&&(r.push(l),l!==c);)l=l.nextSibling;return r}for(;n!==null;){if(n.type===128){n=o?n.projectionNext:n.next;continue}let i=t[n.index];if(i!==null)if(Ue(i)){let a=i[Mn];a!==i[Ye]&&r.push(ye(i)),i[I]&4||Fm(i,r),r.push(a)}else r.push(ye(i));let s=n.type;if(s&8)ko(e,t,n.child,r);else if(s&32){let a=Bl(n,t),c;for(;c=a();)r.push(c)}else if(s&16){let a=Dm(t,n);if(Array.isArray(a))r.push(...a);else{let c=bt(t[Ae]);ko(c[E],c,a,r,!0)}}n=o?n.projectionNext:n.next}return r}function Fm(e,t){for(let n=be;n<e.length;n++){let r=e[n],o=r[E].firstChild;o!==null&&ko(r[E],r,o,t)}}function Lm(e){if(e[Tn]!==null){for(let t of e[Tn])t.impl.addSequence(t);e[Tn].length=0}}var Vm=[];function Y_(e){return e[Le]??K_(e)}function K_(e){let t=Vm.pop()??Object.create(J_);return t.lView=e,t}function X_(e){e.lView[Le]!==e&&(e.lView=null,Vm.push(e))}var J_=U(w({},Ht),{consumerIsAlwaysLive:!0,kind:"template",consumerMarkedDirty:e=>{Rn(e.lView)},consumerOnSignalRead(){this.lView[Le]=this}});function eE(e){let t=e[Le]??Object.create(tE);return t.lView=e,t}var tE=U(w({},Ht),{consumerIsAlwaysLive:!0,kind:"template",consumerMarkedDirty:e=>{let t=bt(e.lView);for(;t&&!jm(t[E]);)t=bt(t);t&&Cc(t)},consumerOnSignalRead(){this.lView[Le]=this}});function jm(e){return e.type!==2}function Hm(e){if(e[vt]===null)return;let t=!0;for(;t;){let n=!1;for(let r of e[vt])if(r.dirty&&(n=!0,r.zone===null||Zone.current===r.zone?r.run():r.zone.run(()=>r.run()),e[vt]===null))return;t=n&&!!(e[I]&8192)}}var nE=100;function Bm(e,t=0){let r=e[ot].rendererFactory,o=!1;o||r.begin?.();try{rE(e,t)}finally{o||r.end?.()}}function rE(e,t){let n=Fc();try{ho(!0),bl(e,t);let r=0;for(;Io(e);){if(r===nE)throw new _(103,!1);r++,bl(e,1)}}finally{ho(n)}}function oE(e,t,n,r){if(An(t))return;let o=t[I],i=!1,s=!1;ss(t);let a=!0,c=null,l=null;i||(jm(e)?(l=Y_(t),c=Bt(l)):hi()===null?(a=!1,l=eE(t),c=Bt(l)):t[Le]&&(mn(t[Le]),t[Le]=null));try{Dc(t),Rf(e.bindingStartIndex),n!==null&&xm(e,t,n,2,r);let d=(o&3)===3;if(!i)if(d){let f=e.preOrderCheckHooks;f!==null&&ys(t,f,null)}else{let f=e.preOrderHooks;f!==null&&_s(t,f,0,null),Wc(t,0)}if(s||iE(t),Hm(t),Um(t,0),e.contentQueries!==null&&om(e,t),!i)if(d){let f=e.contentCheckHooks;f!==null&&ys(t,f)}else{let f=e.contentHooks;f!==null&&_s(t,f,1),Wc(t,1)}aE(e,t);let u=e.components;u!==null&&zm(t,u,0);let m=e.viewQuery;if(m!==null&&al(2,m,r),!i)if(d){let f=e.viewCheckHooks;f!==null&&ys(t,f)}else{let f=e.viewHooks;f!==null&&_s(t,f,2),Wc(t,2)}if(e.firstUpdatePass===!0&&(e.firstUpdatePass=!1),t[Xi]){for(let f of t[Xi])f();t[Xi]=null}i||(Lm(t),t[I]&=-73)}catch(d){throw i||Rn(t),d}finally{l!==null&&(pn(l,c),a&&X_(l)),as()}}function Um(e,t){for(let n=Kp(e);n!==null;n=Xp(n))for(let r=be;r<n.length;r++){let o=n[r];$m(o,t)}}function iE(e){for(let t=Kp(e);t!==null;t=Xp(t)){if(!(t[I]&2))continue;let n=t[xn];for(let r=0;r<n.length;r++){let o=n[r];Cc(o)}}}function sE(e,t,n){V(P.ComponentStart);let r=ze(t,e);try{$m(r,n)}finally{V(P.ComponentEnd,r[Se])}}function $m(e,t){ts(e)&&bl(e,t)}function bl(e,t){let r=e[E],o=e[I],i=e[Le],s=!!(t===0&&o&16);if(s||=!!(o&64&&t===0),s||=!!(o&1024),s||=!!(i?.dirty&&Jr(i)),s||=!1,i&&(i.dirty=!1),e[I]&=-9217,s)oE(r,e,r.template,e[Se]);else if(o&8192){let a=S(null);try{Hm(e),Um(e,1);let c=r.components;c!==null&&zm(e,c,1),Lm(e)}finally{S(a)}}}function zm(e,t,n){for(let r=0;r<t.length;r++)sE(e,t[r],n)}function aE(e,t){let n=e.hostBindingOpCodes;if(n!==null)try{for(let r=0;r<n.length;r++){let o=n[r];if(o<0)Qt(~o);else{let i=o,s=n[++r],a=n[++r];Of(s,i);let c=t[i];V(P.HostBindingsUpdateStart,c);try{a(2,c)}finally{V(P.HostBindingsUpdateEnd,c)}}}}finally{Qt(-1)}}function ed(e,t){let n=Fc()?64:1088;for(e[ot].changeDetectionScheduler?.notify(t);e;){e[I]|=n;let r=bt(e);if(Ir(e)&&!r)return e;e=r}return null}function Gm(e,t,n,r){return[e,!0,0,t,null,r,null,n,null,null]}function cE(e,t){let n=be+t;if(n<e.length)return e[n]}function td(e,t,n,r=!0){let o=t[E];if(dE(o,t,e,n),r){let s=vl(n,e),a=t[Z],c=a.parentNode(e[Mn]);c!==null&&y_(o,e[ve],a,t,c,s)}let i=t[Er];i!==null&&i.firstChild!==null&&(i.firstChild=null)}function lE(e,t){let n=xs(e,t);return n!==void 0&&zl(n[E],n),n}function xs(e,t){if(e.length<=be)return;let n=be+t,r=e[n];if(r){let o=r[Wt];o!==null&&o!==e&&$l(o,r),t>0&&(e[n-1][Be]=r[Be]);let i=_o(e,be+t);b_(r[E],r);let s=i[it];s!==null&&s.detachView(i[E]),r[pe]=null,r[Be]=null,r[I]&=-129}return r}function dE(e,t,n,r){let o=be+r,i=n.length;r>0&&(n[o-1][Be]=t),r<i-be?(t[Be]=n[o],gc(n,be+r,t)):(n.push(t),t[Be]=null),t[pe]=n;let s=t[Wt];s!==null&&n!==s&&Wm(s,t);let a=t[it];a!==null&&a.insertView(e),ns(t),t[I]|=128}function Wm(e,t){let n=e[xn],r=t[pe];if(wt(r))e[I]|=2;else{let o=r[pe][Ae];t[Ae]!==o&&(e[I]|=2)}n===null?e[xn]=[t]:n.push(t)}var Xt=class{_lView;_cdRefInjectingView;_appRef=null;_attachedToViewContainer=!1;exhaustive;get rootNodes(){let t=this._lView,n=t[E];return ko(n,t,n.firstChild,[])}constructor(t,n){this._lView=t,this._cdRefInjectingView=n}get context(){return this._lView[Se]}set context(t){this._lView[Se]=t}get destroyed(){return An(this._lView)}destroy(){if(this._appRef)this._appRef.detachView(this);else if(this._attachedToViewContainer){let t=this._lView[pe];if(Ue(t)){let n=t[So],r=n?n.indexOf(this):-1;r>-1&&(xs(t,r),_o(n,r))}this._attachedToViewContainer=!1}zl(this._lView[E],this._lView)}onDestroy(t){rs(this._lView,t)}markForCheck(){ed(this._cdRefInjectingView||this._lView,4)}detach(){this._lView[I]&=-129}reattach(){ns(this._lView),this._lView[I]|=128}detectChanges(){this._lView[I]|=1024,Bm(this._lView)}checkNoChanges(){}attachToViewContainerRef(){if(this._appRef)throw new _(902,!1);this._attachedToViewContainer=!0}detachFromAppRef(){this._appRef=null;let t=Ir(this._lView),n=this._lView[Wt];n!==null&&!t&&$l(n,this._lView),wm(this._lView[E],this._lView)}attachToAppRef(t){if(this._attachedToViewContainer)throw new _(902,!1);this._appRef=t;let n=Ir(this._lView),r=this._lView[Wt];r!==null&&!n&&Wm(r,this._lView),ns(this._lView)}};var Oo=(()=>{class e{_declarationLView;_declarationTContainer;elementRef;static __NG_ELEMENT_ID__=uE;constructor(n,r,o){this._declarationLView=n,this._declarationTContainer=r,this.elementRef=o}get ssrId(){return this._declarationTContainer.tView?.ssrId||null}createEmbeddedView(n,r){return this.createEmbeddedViewImpl(n,r)}createEmbeddedViewImpl(n,r,o){let i=Jl(this._declarationLView,this._declarationTContainer,n,{embeddedViewInjector:r,dehydratedView:o});return new Xt(i)}}return e})();function uE(){return nd(me(),A())}function nd(e,t){return e.type&4?new Oo(t,e,Fr(e,t)):null}function Ho(e,t,n,r,o){let i=e.data[t];if(i===null)i=fE(e,t,n,r,o),kf()&&(i.flags|=32);else if(i.type&64){i.type=n,i.value=r,i.attrs=o;let s=xf();i.injectorIndex=s===null?-1:s.injectorIndex}return Dr(i,!0),i}function fE(e,t,n,r,o){let i=kc(),s=Oc(),a=s?i:i&&i.parent,c=e.data[t]=mE(e,a,n,t,r,o);return pE(e,c,i,s),c}function pE(e,t,n,r){e.firstChild===null&&(e.firstChild=t),n!==null&&(r?n.child==null&&t.parent!==null&&(n.child=t):n.next===null&&(n.next=t,t.prev=n))}function mE(e,t,n,r,o,i){let s=t?t.injectorIndex:-1,a=0;return xc()&&(a|=128),{type:n,index:r,insertBeforeIndex:null,injectorIndex:s,directiveStart:-1,directiveEnd:-1,directiveStylingLast:-1,componentOffset:-1,controlDirectiveIndex:-1,customControlIndex:-1,propertyBindings:null,flags:a,providerIndexes:0,value:o,namespace:Hc(),attrs:i,mergedAttrs:null,localNames:null,initialInputs:null,inputs:null,hostDirectiveInputs:null,outputs:null,hostDirectiveOutputs:null,directiveToIndex:null,tView:null,next:null,prev:null,projectionNext:null,child:null,parent:t,projection:null,styles:null,stylesWithoutHost:null,residualStyles:void 0,classes:null,classesWithoutHost:null,residualClasses:void 0,classBindings:0,styleBindings:0}}var hE=()=>null,gE=()=>null;function yl(e,t){return hE(e,t)}function vE(e,t,n){return gE(e,t,n)}var qm=class{},et=class{},Re=class{destroyNode=null;static __NG_ELEMENT_ID__=()=>bE()};function bE(){let e=A(),t=me(),n=ze(t.index,e);return(wt(n)?n:e)[Z]}var Zm=(()=>{class e{static \u0275prov=F({token:e,providedIn:"root",factory:()=>null})}return e})();function Qm(e){return e.debugInfo?.className||e.type.name||null}var ws={},As=class{injector;parentInjector;constructor(t,n){this.injector=t,this.parentInjector=n}get(t,n,r){let o=this.injector.get(t,ws,r);return o!==ws||n===ws?o:this.parentInjector.get(t,n,r)}};function Gn(e,t,n){if(n===Mt)return!1;let r=e[t];return Object.is(r,n)?!1:(e[t]=n,!0)}function xr(e,t,n){return function r(o){let i=r.__ngNativeEl__;i!==void 0&&Iy(o,i);let s=St(e)?ze(e.index,t):t;ed(s,5);let a=t[Se],c=hp(t,a,n,o),l=r.__ngNextListenerFn__;for(;l;)c=hp(t,a,l,o)&&c,l=l.__ngNextListenerFn__;return c}}function hp(e,t,n,r){let o=S(null);try{return V(P.OutputStart,t,n),n(r)!==!1}catch(i){return G_(e,i),!1}finally{V(P.OutputEnd,t,n),S(o)}}function Ym(e,t,n,r,o,i,s,a){let c=Ji(e),l=!1,d=null;if(!r&&c&&(d=_E(t,n,i,e.index)),d!==null){let u=d.__ngLastListenerFn__||d;u.__ngNextListenerFn__=s,d.__ngLastListenerFn__=s,l=!0}else{let u=$e(e,n),m=r?r(u):u;Cy(n,m,i,a),r||(a.__ngNativeEl__=u);let f=o.listen(m,i,a);if(!yE(i)){let h=r?b=>r(ye(b[e.index])):e.index;Km(h,t,n,i,a,f,!1)}}return l}function yE(e){return e.startsWith("animation")||e.startsWith("transition")}function _E(e,t,n,r){let o=e.cleanup;if(o!=null)for(let i=0;i<o.length-1;i+=2){let s=o[i];if(s===n&&o[i+1]===r){let a=t[wr],c=o[i+2];return a&&a.length>c?a[c]:null}typeof s=="string"&&(i+=2)}return null}function Km(e,t,n,r,o,i,s){let a=t.firstCreatePass?Tc(t):null,c=Nc(n),l=c.length;c.push(o,i),a&&a.push(r,e,l,(l+1)*(s?-1:1))}function gp(e,t,n,r,o){let i=null,s=null,a=null,c=!1,l=e.directiveToIndex.get(n.type);if(typeof l=="number"?i=l:[i,s,a]=l,s!==null&&a!==null&&e.hostDirectiveOutputs&&Object.hasOwn(e.hostDirectiveOutputs,r)){let d=e.hostDirectiveOutputs[r];for(let u=0;u<d.length;u+=2){let m=d[u];if(m>=s&&m<=a)c=!0,Rs(e,t,m,d[u+1],r,o);else if(m>a)break}}return Object.hasOwn(n.outputs,r)&&(c=!0,Rs(e,t,i,r,r,o)),c}function Rs(e,t,n,r,o,i){let s=t[n],a=t[E],l=a.data[n].outputs[r],u=s[l].subscribe(i);Km(e.index,a,t,o,i,u,!0)}function Bo(){EE()}function EE(){let e=A(),t=J(),n=me();if(t.firstCreatePass&&SE(t,n),n.controlDirectiveIndex===-1)return;Jt("NgSignalForms");let r=e[n.controlDirectiveIndex];t.data[n.controlDirectiveIndex].controlDef.create(r,new ks(e,t,n))}function Uo(){wE()}function wE(){let e=A(),t=J(),n=Nr();if(n.controlDirectiveIndex===-1)return;let r=t.data[n.controlDirectiveIndex].controlDef,o=e[n.controlDirectiveIndex];r.update(o,new ks(e,t,n))}var ks=class{lView;tView;tNode;hasPassThrough;constructor(t,n,r){this.lView=t,this.tView=n,this.tNode=r,this.hasPassThrough=!!(r.flags&4096)}get customControl(){return this.tNode.customControlIndex!==-1?this.lView[this.tNode.customControlIndex]:void 0}get nativeElement(){return $e(this.tNode,this.lView)}get descriptor(){return`<${this.tNode.value}>`}listenToCustomControlOutput(t,n){let r=this.tView.data[this.tNode.customControlIndex];gp(this.tNode,this.lView,r,t,xr(this.tNode,this.lView,n))}listenToCustomControlModel(t){let n=this.tNode.flags&1024?"valueChange":"checkedChange",r=this.tView.data[this.tNode.customControlIndex];gp(this.tNode,this.lView,r,n,xr(this.tNode,this.lView,t))}listenToDom(t,n){Ym(this.tNode,this.tView,this.lView,void 0,this.lView[Z],t,n,xr(this.tNode,this.lView,n))}setInputOnDirectives(t,n,r){let o=this.tNode.inputs?.[t],i=this.tNode.hostDirectiveInputs?.[t];if(!o&&!i)return!1;let s=!1;if(o)for(let a of o){if(a===this.tNode.controlDirectiveIndex)continue;let c=this.lView[a],l=this.tView.data[a];(!r||r(bp(c,l,t)))&&(Un(l,c,t,n),s=!0)}if(i)for(let a=0;a<i.length;a+=2){let c=i[a];if(c===this.tNode.controlDirectiveIndex)continue;let l=this.lView[c],d=i[a+1],u=this.tView.data[c];(!r||r(bp(l,u,t)))&&(Un(u,l,d,n),s=!0)}return s}setCustomControlModelInput(t){let n=this.tView.data[this.tNode.customControlIndex],r=this.tNode.flags&1024?"value":"checked";W_(this.tNode,this.tView,this.lView,n,r,t)}customControlHasInput(t){if(this.tNode.customControlIndex===-1)return!1;let n=this.tView.data[this.tNode.customControlIndex];return(n.signalFormsInputPresence??=this._buildCustomControlInputCache(n))[t]===!0}_buildCustomControlInputCache(t){let n={};for(let r in t.inputs)n[r]=!0;if(t.hostDirectives!==null){let r=[...t.hostDirectives];for(;r.length>0;){let o=r.shift();if(typeof o!="function"){for(let s in o.inputs)n[o.inputs[s]]=!0;let i=vp(o.directive);i!==null&&r.push(...i);continue}for(let i of o()){if(typeof i=="function")continue;if(i.inputs)for(let a=0;a<i.inputs.length;a+=2){let c=i.inputs[a+1]||i.inputs[a];n[c]=!0}let s=vp(i.directive);s!==null&&r.push(...s)}}}return n}};function vp(e){return typeof e=="function"&&"\u0275dir"in e?e.\u0275dir.hostDirectives??null:null}function bp(e,t,n){if(!t.inputs||!Object.hasOwn(t.inputs,n))return;let[r,o]=t.inputs[n];if((o&jo.SignalBased)!==0){let s=e[r][ne];return s.value===js?void 0:s.value}return e[r]}function SE(e,t,n){for(let o=t.directiveStart;o<t.directiveEnd;o++)if(e.data[o].controlDef){t.controlDirectiveIndex=o;break}if(t.controlDirectiveIndex===-1)return;let r=e.data[t.controlDirectiveIndex].controlDef;if(r.passThroughInput&&(t.inputs?.[r.passThroughInput]?.length??0)>1){t.flags|=4096;return}IE(e,t)}function IE(e,t){for(let n=t.directiveStart;n<t.directiveEnd;n++){let r=e.data[n];if(!(t.directiveToIndex&&!t.directiveToIndex.has(r.type))){if(yp(r,"value")){t.flags|=1024,t.customControlIndex=n;return}if(yp(r,"checked")){t.flags|=2048,t.customControlIndex=n;return}}}if(t.hostDirectiveInputs!==null&&t.hostDirectiveOutputs!==null&&t.directiveToIndex!==null){let n=(r,o)=>{let i=t.hostDirectiveInputs[r],s=t.hostDirectiveOutputs[r+"Change"];if(!i||!s)return!1;for(let a=0;a<i.length;a+=2){let c=i[a];for(let l=0;l<s.length;l+=2){let d=s[l];if(c===d)for(let u of t.directiveToIndex.values()){if(!Array.isArray(u))continue;let[m,f,h]=u;if(c>=f&&c<=h)return t.flags|=o,t.customControlIndex=m,!0}}}return!1};if(n("value",1024)||n("checked",2048))return}}function yp(e,t){return DE(e,t)&&CE(e,t+"Change")}function DE(e,t){return t in e.inputs}function CE(e,t){return t in e.outputs}var _l=Symbol("BINDING");var Wn=new g("");function Os(e,t,n){let r=n?e.styles:null,o=n?e.classes:null,i=0;if(t!==null)for(let s=0;s<t.length;s++){let a=t[s];if(typeof a=="number")i=a;else if(i==1)o=Gi(o,a);else if(i==2){let c=a,l=t[++s];r=Gi(r,c+": "+l+";")}}n?e.styles=r:e.stylesWithoutHost=r,n?e.classes=o:e.classesWithoutHost=o}function fe(e,t=0){let n=A();if(n===null)return M(e,t);let r=me();return zp(r,n,he(e),t)}function NE(e,t,n,r,o){let i=r===null?null:{"":-1},s=o(e,n);if(s!==null){let a=s,c=null,l=null;for(let d of s)if(d.resolveHostDirectives!==null){[a,c,l]=d.resolveHostDirectives(s);break}xE(e,t,n,a,i,c,l)}i!==null&&r!==null&&TE(n,r,i)}function TE(e,t,n){let r=e.localNames=[];for(let o=0;o<t.length;o+=2){let i=n[t[o+1]];if(i==null)throw new _(-301,!1);r.push(t[o],i)}}function ME(e,t,n){t.componentOffset=n,(e.components??=[]).push(t.index)}function xE(e,t,n,r,o,i,s){let a=r.length,c=null;for(let m=0;m<a;m++){let f=r[m];c===null&&st(f)&&(c=f,ME(e,n,m)),rl(Cs(n,t),e,f.type)}FE(n,e.data.length,a),c?.viewProvidersResolver&&c.viewProvidersResolver(c);for(let m=0;m<a;m++){let f=r[m];f.providersResolver&&f.providersResolver(f)}let l=!1,d=!1,u=Tm(e,t,a,null);a>0&&(n.directiveToIndex=new Map);for(let m=0;m<a;m++){let f=r[m];if(n.mergedAttrs=Ar(n.mergedAttrs,f.hostAttrs),RE(e,n,t,u,f),PE(u,f,o),s!==null&&s.has(f)){let[b,x]=s.get(f);n.directiveToIndex.set(f.type,[u,b+n.directiveStart,x+n.directiveStart])}else(i===null||!i.has(f))&&n.directiveToIndex.set(f.type,u);f.contentQueries!==null&&(n.flags|=4),(f.hostBindings!==null||f.hostAttrs!==null||f.hostVars!==0)&&(n.flags|=64);let h=f.type.prototype;!l&&(h.ngOnChanges||h.ngOnInit||h.ngDoCheck)&&((e.preOrderHooks??=[]).push(n.index),l=!0),!d&&(h.ngOnChanges||h.ngDoCheck)&&((e.preOrderCheckHooks??=[]).push(n.index),d=!0),u++}AE(e,n,i)}function AE(e,t,n){for(let r=t.directiveStart;r<t.directiveEnd;r++){let o=e.data[r];if(n===null||!n.has(o))_p(0,t,o,r),_p(1,t,o,r),wp(t,r,!1);else{let i=n.get(o);Ep(0,t,i,r),Ep(1,t,i,r),wp(t,r,!0)}}}function _p(e,t,n,r){let o=e===0?n.inputs:n.outputs;for(let i in o)if(Object.hasOwn(o,i)){let s;e===0?s=t.inputs??={}:s=t.outputs??={},s[i]??=[],s[i].push(r),Xm(t,i)}}function Ep(e,t,n,r){let o=e===0?n.inputs:n.outputs;for(let i in o)if(Object.hasOwn(o,i)){let s=o[i],a;e===0?a=t.hostDirectiveInputs??={}:a=t.hostDirectiveOutputs??={},a[s]??=[],a[s].push(r,i),Xm(t,s)}}function Xm(e,t){t==="class"?e.flags|=8:t==="style"&&(e.flags|=16)}function wp(e,t,n){let{attrs:r,inputs:o,hostDirectiveInputs:i}=e;if(r===null||!n&&o===null||n&&i===null||Hl(e)){e.initialInputs??=[],e.initialInputs.push(null);return}let s=null,a=0;for(;a<r.length;){let c=r[a];if(c===0){a+=4;continue}else if(c===5){a+=2;continue}else if(typeof c=="number")break;if(!n&&Object.hasOwn(o,c)){let l=o[c];for(let d of l)if(d===t){s??=[],s.push(c,r[a+1]);break}}else if(n&&Object.hasOwn(i,c)){let l=i[c];for(let d=0;d<l.length;d+=2)if(l[d]===t){s??=[],s.push(l[d+1],r[a+1]);break}}a+=2}e.initialInputs??=[],e.initialInputs.push(s)}function RE(e,t,n,r,o){e.data[r]=o;let i=o.factory||(o.factory=wn(o.type,!0)),s=new Hn(i,st(o),fe,null);e.blueprint[r]=s,n[r]=s,kE(e,t,r,Tm(e,n,o.hostVars,Mt),o)}function kE(e,t,n,r,o){let i=o.hostBindings;if(i){let s=e.hostBindingOpCodes;s===null&&(s=e.hostBindingOpCodes=[]);let a=~t.index;OE(s)!=a&&s.push(a),s.push(n,r,i)}}function OE(e){let t=e.length;for(;t>0;){let n=e[--t];if(typeof n=="number"&&n<0)return n}return 0}function PE(e,t,n){if(n){if(t.exportAs)for(let r=0;r<t.exportAs.length;r++)n[t.exportAs[r]]=e;st(t)&&(n[""]=e)}}function FE(e,t,n){e.flags|=1,e.directiveStart=t,e.directiveEnd=t+n,e.providerIndexes=t}function Jm(e,t,n,r,o,i,s,a){let c=t[E],l=c.consts,d=Zt(l,s),u=Ho(c,e,n,r,d);return i&&NE(c,t,u,Zt(l,a),o),u.mergedAttrs=Ar(u.mergedAttrs,u.attrs),u.attrs!==null&&Os(u,u.attrs,!1),u.mergedAttrs!==null&&Os(u,u.mergedAttrs,!0),c.queries!==null&&c.queries.elementStart(c,u),u}function eh(e,t){oy(e,t),Sc(t)&&e.queries.elementEnd(t)}function LE(e,t,n,r,o,i){let s=t.consts,a=Zt(s,o),c=Ho(t,e,n,r,a);if(c.mergedAttrs=Ar(c.mergedAttrs,c.attrs),i!=null){let l=Zt(s,i);c.localNames=[];for(let d=0;d<l.length;d+=2)c.localNames.push(l[d],-1)}return c.attrs!==null&&Os(c,c.attrs,!1),c.mergedAttrs!==null&&Os(c,c.mergedAttrs,!0),t.queries!==null&&t.queries.elementStart(t,c),c}var th=typeof ShadowRoot<"u",VE=typeof Document<"u";function jE(e){return Object.keys(e).map(t=>{let[n,r,o]=e[t],i={propName:n,templateName:t,isSignal:(r&jo.SignalBased)!==0};return o&&(i.transform=o),i})}function HE(e){return Object.keys(e).map(t=>({propName:e[t],templateName:t}))}function BE(e,t,n){let r=t instanceof ge?t:t?.injector;return r&&e.getStandaloneInjector!==null&&(r=e.getStandaloneInjector(r)||r),r?new As(n,r):n}function UE(e){let t=e.get(et,null);if(t===null)throw new _(407,!1);let n=e.get(Zm,null),r=e.get(yt,null),o=e.get(xt,null,{optional:!0});return{rendererFactory:t,sanitizer:n,changeDetectionScheduler:r,ngReflect:!1,tracingService:o}}function $E(e,t,n){let r=nh(e);return fm(t,r,r==="svg"?Ic:r==="math"?_f:n)}function zE(e){if((e&&"localName"in e&&typeof e.localName=="string"?e.localName:e?.tagName)?.toLowerCase()==="script")throw new _(905,!1)}function nh(e){return(e.selectors[0][0]||"div").toLowerCase()}var kr=class{componentDef;ngModule;selector;componentType;ngContentSelectors;isBoundToModule;cachedInputs=null;cachedOutputs=null;get inputs(){return this.cachedInputs??=jE(this.componentDef.inputs),this.cachedInputs}get outputs(){return this.cachedOutputs??=HE(this.componentDef.outputs),this.cachedOutputs}constructor(t,n){this.componentDef=t,this.ngModule=n,this.componentType=t.type,this.selector=i_(t.selectors),this.ngContentSelectors=t.ngContentSelectors??[],this.isBoundToModule=!!n}create(t,n,r,o,i,s,a){V(P.DynamicComponentStart);let c=S(null);try{let l=this.componentDef,d=BE(l,o||this.ngModule,t),u=UE(d),m=u.tracingService;return m&&m.componentCreate?m.componentCreate(Qm(l),()=>this.createComponentRef(u,d,n,r,i,s,a)):this.createComponentRef(u,d,n,r,i,s,a)}finally{S(c)}}createComponentRef(t,n,r,o,i,s,a){let c=this.componentDef,l=GE(o,c,s,i),d=t.rendererFactory.createRenderer(null,c),u=o?k_(d,o,c.encapsulation,n):$E(c,d,a??null);zE(u);let m=n.get(Wn,null),f=WE(u,()=>n.get(L,null)??em());m&&m.addHost(f);let h=s?.some(Sp)||i?.some(C=>typeof C!="function"&&C.bindings.some(Sp)),b=Zl(null,l,null,512|Nm(c),null,null,t,d,n,null,rm(u,n,!0));m&&th&&f instanceof ShadowRoot&&rs(b,()=>{m.removeHost(f)}),b[ue]=u,ss(b);let x=null;try{let C=Jm(ue,b,2,"#host",()=>l.directiveRegistry,!0,0);mm(d,u,C),Rr(u,b),Am(l,b,C),im(l,C,b),eh(l,C),r!==void 0&&ZE(C,this.ngContentSelectors,r),x=ze(C.index,b),b[Se]=x[Se],Xl(l,b,null)}catch(C){throw x!==null&&il(x),il(b),C}finally{V(P.DynamicComponentEnd),as()}return new Ps(this.componentType,b,!!h)}};function GE(e,t,n,r){let o=e?["ng-version","22.1.6"]:s_(t.selectors[0]),i=null,s=null,a=0;if(n)for(let d of n)a+=d[_l].requiredVars,d.create&&(d.targetIdx=0,(i??=[]).push(d)),d.update&&(d.targetIdx=0,(s??=[]).push(d));if(r)for(let d=0;d<r.length;d++){let u=r[d];if(typeof u!="function")for(let m of u.bindings){a+=m[_l].requiredVars;let f=d+1;m.create&&(m.targetIdx=f,(i??=[]).push(m)),m.update&&(m.targetIdx=f,(s??=[]).push(m))}}let c=[t];if(r)for(let d of r){let u=typeof d=="function"?d:d.type,m=fc(u);c.push(m)}return ql(0,null,qE(i,s),1,a,c,null,null,null,[o],null)}function WE(e,t){let n=e.getRootNode?.();return VE&&n instanceof Document?n.head:n&&th&&n instanceof ShadowRoot?n:t().head}function qE(e,t){return!e&&!t?null:n=>{if(n&1&&e)for(let r of e)r.create();if(n&2&&t)for(let r of t)r.update()}}function Sp(e){let t=e[_l].kind;return t==="input"||t==="twoWay"}var Ps=class extends qm{_rootLView;_hasInputBindings;instance;hostView;changeDetectorRef;componentType;location;previousInputValues=null;_tNode;constructor(t,n,r){super(),this._rootLView=n,this._hasInputBindings=r,this._tNode=es(n[E],ue),this.location=Fr(this._tNode,n),this.instance=ze(this._tNode.index,n)[Se],this.hostView=this.changeDetectorRef=new Xt(n,void 0),this.componentType=t}setInput(t,n){this._hasInputBindings;let r=this._tNode;if(this.previousInputValues??=new Map,this.previousInputValues.has(t)&&Object.is(this.previousInputValues.get(t),n))return;let o=this._rootLView,i=Kl(r,o[E],o,t,n);this.previousInputValues.set(t,n);let s=ze(r.index,o);ed(s,1)}get injector(){return new Kt(this._tNode,this._rootLView)}destroy(){this.hostView.destroy()}onDestroy(t){this.hostView.onDestroy(t)}};function ZE(e,t,n){let r=e.projection=[];for(let o=0;o<t.length;o++){let i=n[o];r.push(i!=null&&i.length?Array.from(i):null)}}var Zs=(()=>{class e{static __NG_ELEMENT_ID__=QE}return e})();function QE(){let e=me();return rh(e,A())}var El=class e extends Zs{_lContainer;_hostTNode;_hostLView;constructor(t,n,r){super(),this._lContainer=t,this._hostTNode=n,this._hostLView=r}get element(){return Fr(this._hostTNode,this._hostLView)}get injector(){return new Kt(this._hostTNode,this._hostLView)}get parentInjector(){let t=Al(this._hostTNode,this._hostLView);if(Vp(t)){let n=Ds(t,this._hostLView),r=Is(t),o=n[E].data[r+8];return new Kt(o,n)}else return new Kt(null,this._hostLView)}clear(){for(;this.length>0;)this.remove(this.length-1)}get(t){let n=Ip(this._lContainer);return n!==null&&n[t]||null}get length(){return this._lContainer.length-be}createEmbeddedView(t,n,r){let o,i;typeof r=="number"?o=r:r!=null&&(o=r.index,i=r.injector);let s=yl(this._lContainer,t.ssrId),a=t.createEmbeddedViewImpl(n||{},i,s);return this.insertImpl(a,o,Ms(this._hostTNode,s)),a}createComponent(t,n,r,o,i,s,a){let c,l=n||{};c=l.index,r=l.injector,o=l.projectableNodes,i=l.environmentInjector||l.ngModuleRef,s=l.directives,a=l.bindings;let d=new kr(zt(t)),u=r||this.parentInjector;if(!i&&d.ngModule==null){let C=this.parentInjector.get(ge,null);C&&(i=C)}let m=zt(d.componentType??{}),f=yl(this._lContainer,m?.id??null),h=f?.firstChild??null,b=d.create(u,o,h,i,s,a,this._getHostElementNamespace());return this.insertImpl(b.hostView,c,Ms(this._hostTNode,f)),b}_getHostElementNamespace(){if(this._hostTNode.type&2){let t=this._hostTNode.parent??this._hostLView[ve];return t!==null&&t.type&2&&typeof t.value=="string"&&t.value.toLowerCase()==="foreignobject"?null:t?.namespace??null}return this._hostTNode.namespace}insert(t,n){return this.insertImpl(t,n,!0)}insertImpl(t,n,r){let o=t._lView;if(If(o)){let a=this.indexOf(t);if(a!==-1)this.detach(a);else{let c=o[pe],l=new e(c,c[ve],c[pe]);l.detach(l.indexOf(t))}}let i=this._adjustIndex(n),s=this._lContainer;return td(s,o,i,r),t.attachToViewContainerRef(),gc(Qc(s),i,t),t}move(t,n){return this.insert(t,n)}indexOf(t){let n=Ip(this._lContainer);return n!==null?n.indexOf(t):-1}remove(t){let n=this._adjustIndex(t,-1),r=xs(this._lContainer,n);r&&(_o(Qc(this._lContainer),n),zl(r[E],r))}detach(t){let n=this._adjustIndex(t,-1),r=xs(this._lContainer,n);return r&&_o(Qc(this._lContainer),n)!=null?new Xt(r):null}_adjustIndex(t,n=0){return t??this.length+n}};function Ip(e){return e[So]}function Qc(e){return e[So]||(e[So]=[])}function rh(e,t){let n,r=t[e.index];return Ue(r)?n=r:(n=Gm(r,t,null,e),t[e.index]=n,Ql(t,n)),KE(n,t,e,r),new El(n,e,t)}function YE(e,t){let n=e[Z],r=n.createComment(""),o=$e(t,e),i=n.parentNode(o);return jn(n,i,r,n.nextSibling(o),!1),r}var KE=ew,XE=()=>!1;function JE(e,t,n){return XE(e,t,n)}function ew(e,t,n,r){if(e[Mn])return;let o;n.type&8?o=ye(r):o=YE(t,n),e[Mn]=o}var wl=class e{queryList;matches=null;constructor(t){this.queryList=t}clone(){return new e(this.queryList)}setDirty(){this.queryList.setDirty()}},Sl=class e{queries;constructor(t=[]){this.queries=t}createEmbeddedView(t){let n=t.queries;if(n!==null){let r=t.contentQueries!==null?t.contentQueries[0]:n.length,o=[];for(let i=0;i<r;i++){let s=n.getByIndex(i),a=this.queries[s.indexInDeclarationView];o.push(a.clone())}return new e(o)}return null}insertView(t){this.dirtyQueriesWithMatches(t)}detachView(t){this.dirtyQueriesWithMatches(t)}finishViewCreation(t){this.dirtyQueriesWithMatches(t)}dirtyQueriesWithMatches(t){for(let n=0;n<this.queries.length;n++)od(t,n).matches!==null&&this.queries[n].setDirty()}},Fs=class{flags;read;predicate;constructor(t,n,r=null){this.flags=n,this.read=r,typeof t=="string"?this.predicate=sw(t):this.predicate=t}},Il=class e{queries;constructor(t=[]){this.queries=t}elementStart(t,n){for(let r=0;r<this.queries.length;r++)this.queries[r].elementStart(t,n)}elementEnd(t){for(let n=0;n<this.queries.length;n++)this.queries[n].elementEnd(t)}embeddedTView(t){let n=null;for(let r=0;r<this.length;r++){let o=n!==null?n.length:0,i=this.getByIndex(r).embeddedTView(t,o);i&&(i.indexInDeclarationView=r,n!==null?n.push(i):n=[i])}return n!==null?new e(n):null}template(t,n){for(let r=0;r<this.queries.length;r++)this.queries[r].template(t,n)}getByIndex(t){return this.queries[t]}get length(){return this.queries.length}track(t){this.queries.push(t)}},Dl=class e{metadata;matches=null;indexInDeclarationView=-1;crossesNgTemplate=!1;_declarationNodeIndex;_appliesToNextNode=!0;constructor(t,n=-1){this.metadata=t,this._declarationNodeIndex=n}elementStart(t,n){this.isApplyingToNode(n)&&this.matchTNode(t,n)}elementEnd(t){this._declarationNodeIndex===t.index&&(this._appliesToNextNode=!1)}template(t,n){this.elementStart(t,n)}embeddedTView(t,n){return this.isApplyingToNode(t)?(this.crossesNgTemplate=!0,this.addMatch(-t.index,n),new e(this.metadata)):null}isApplyingToNode(t){if(this._appliesToNextNode&&(this.metadata.flags&1)!==1){let n=this._declarationNodeIndex,r=t.parent;for(;r!==null&&r.type&8&&r.index!==n;)r=r.parent;return n===(r!==null?r.index:-1)}return this._appliesToNextNode}matchTNode(t,n){let r=this.metadata.predicate;if(Array.isArray(r))for(let o=0;o<r.length;o++){let i=r[o];this.matchTNodeWithReadOption(t,n,tw(n,i)),this.matchTNodeWithReadOption(t,n,Es(n,t,i,!1,!1))}else r===Oo?n.type&4&&this.matchTNodeWithReadOption(t,n,-1):this.matchTNodeWithReadOption(t,n,Es(n,t,r,!1,!1))}matchTNodeWithReadOption(t,n,r){if(r!==null){let o=this.metadata.read;if(o!==null)if(o===q||o===Zs||o===Oo&&n.type&4)this.addMatch(n.index,-2);else{let i=Es(n,t,o,!1,!1);i!==null&&this.addMatch(n.index,i)}else this.addMatch(n.index,r)}}addMatch(t,n){this.matches===null?this.matches=[t,n]:this.matches.push(t,n)}};function tw(e,t){let n=e.localNames;if(n!==null){for(let r=0;r<n.length;r+=2)if(n[r]===t)return n[r+1]}return null}function nw(e,t){return e.type&11?Fr(e,t):e.type&4?nd(e,t):null}function rw(e,t,n,r){return n===-1?nw(t,e):n===-2?ow(e,t,r):Ro(e,e[E],n,t)}function ow(e,t,n){if(n===q)return Fr(t,e);if(n===Oo)return nd(t,e);if(n===Zs)return rh(t,e)}function oh(e,t,n,r){let o=t[it].queries[r];if(o.matches===null){let i=e.data,s=n.matches,a=[];for(let c=0;s!==null&&c<s.length;c+=2){let l=s[c];if(l<0)a.push(null);else{let d=i[l];a.push(rw(t,d,s[c+1],n.metadata.read))}}o.matches=a}return o.matches}function Cl(e,t,n,r){let o=e.queries.getByIndex(n),i=o.matches;if(i!==null){let s=oh(e,t,o,n);for(let a=0;a<i.length;a+=2){let c=i[a];if(c>0)r.push(s[a/2]);else{let l=i[a+1],d=t[-c];for(let u=be;u<d.length;u++){let m=d[u];m[Wt]===m[pe]&&Cl(m[E],m,l,r)}if(d[xn]!==null){let u=d[xn];for(let m=0;m<u.length;m++){let f=u[m];Cl(f[E],f,l,r)}}}}}return r}function rd(e,t){return e[it].queries[t].queryList}function ih(e,t,n){let r=new Ns((n&4)===4);return Cf(e,t,r,r.destroy),(t[it]??=new Sl).queries.push(new wl(r))-1}function iw(e,t,n){let r=J();return r.firstCreatePass&&(ah(r,new Fs(e,t,n),-1),(t&2)===2&&(r.staticViewQueries=!0)),ih(r,A(),t)}function sh(e,t,n,r){let o=J();if(o.firstCreatePass){let i=me();ah(o,new Fs(t,n,r),i.index),aw(o,e),(n&2)===2&&(o.staticContentQueries=!0)}return ih(o,A(),n)}function sw(e){return e.split(",").map(t=>t.trim())}function ah(e,t,n){e.queries===null&&(e.queries=new Il),e.queries.track(new Dl(t,n))}function aw(e,t){let n=e.contentQueries||(e.contentQueries=[]),r=n.length?n[n.length-1]:-1;t!==r&&n.push(e.queries.length-1,t)}function od(e,t){return e.queries.getByIndex(t)}function ch(e,t){let n=e[E],r=od(n,t);return r.crossesNgTemplate?Cl(n,e,t,[]):oh(n,e,r,t)}function id(e,t,n){let r,o=no(()=>{r._dirtyCounter();let i=lw(r,e);if(t&&i===void 0)throw new _(-951,!1);return i});return r=o[ne],r._dirtyCounter=Ne(0),r._flatValue=void 0,o}function lh(e){return id(!0,!1,e)}function dh(e){return id(!0,!0,e)}function uh(e){return id(!1,!1,e)}function cw(e,t){let n=e[ne];n._lView=A(),n._queryIndex=t,n._queryList=rd(n._lView,t),n._queryList.onDirty(()=>n._dirtyCounter.update(r=>r+1))}function lw(e,t){let n=e._lView,r=e._queryIndex;if(n===void 0||r===void 0||n[I]&4)return t?void 0:Ee;let o=rd(n,r),i=ch(n,r);return o.reset(i,Zp),t?o.first:o._changesDetected||e._flatValue===void 0?e._flatValue=o.toArray():e._flatValue}function $o(e){return!!e&&typeof e.then=="function"}function fh(e){return!!e&&typeof e.subscribe=="function"}var Ls=class{};var Po=class extends Ls{injector;instance=null;constructor(t){super();let n=new In([...t.providers,{provide:Ls,useValue:this}],t.parent||yr(),t.debugName,new Set(["environment"]));this.injector=n,t.runEnvironmentInitializers&&n.resolveInjectorInitializers()}destroy(){this.injector.destroy()}onDestroy(t){this.injector.onDestroy(t)}};function ph(e,t,n=null){return new Po({providers:e,parent:t,debugName:n,runEnvironmentInitializers:!0}).injector}var dw=(()=>{class e{_injector;cachedInjectors=new Map;constructor(n){this._injector=n}getOrCreateStandaloneInjector(n){if(!n.standalone)return null;if(!this.cachedInjectors.has(n)){let r=bc(!1,n.type),o=r.length>0?ph([r],this._injector,""):null;this.cachedInjectors.set(n,o)}return this.cachedInjectors.get(n)}ngOnDestroy(){try{for(let n of this.cachedInjectors.values())n!==null&&n.destroy()}finally{this.cachedInjectors.clear()}}static \u0275prov=F({token:e,providedIn:"environment",factory:()=>new e(M(ge))})}return e})();function B(e){return Lo(()=>{let t=mh(e),n=U(w({},t),{decls:e.decls,vars:e.vars,template:e.template,consts:e.consts||null,ngContentSelectors:e.ngContentSelectors,onPush:e.changeDetection!==Rl.Eager,directiveDefs:null,pipeDefs:null,dependencies:t.standalone&&e.dependencies||null,getStandaloneInjector:t.standalone?o=>o.get(dw).getOrCreateStandaloneInjector(n):null,getExternalStyles:null,signals:e.signals??!1,data:e.data||{},encapsulation:e.encapsulation||Je.Emulated,styles:e.styles||Ee,_:null,schemas:e.schemas||null,tView:null,id:""});t.standalone&&Jt("NgStandalone"),hh(n);let r=e.dependencies;return n.directiveDefs=Dp(r,uw),n.pipeDefs=Dp(r,of),n.id=mw(n),n})}function uw(e){return zt(e)||fc(e)}function ee(e){return Lo(()=>({type:e.type,bootstrap:e.bootstrap||Ee,declarations:e.declarations||Ee,imports:e.imports||Ee,exports:e.exports||Ee,transitiveCompileScopes:null,schemas:e.schemas||null,id:e.id||null}))}function fw(e,t){if(e==null)return Gt;let n={};for(let r in e)if(Object.hasOwn(e,r)){let o=e[r],i,s,a,c;Array.isArray(o)?(a=o[0],i=o[1],s=o[2]??i,c=o[3]||null):(i=o,s=o,a=jo.None,c=null),n[i]=[r,a,c],t[i]=s}return n}function pw(e){if(e==null)return Gt;let t={};for(let n in e)Object.hasOwn(e,n)&&(t[e[n]]=n);return t}function te(e){return Lo(()=>{let t=mh(e);return hh(t),t})}function mh(e){let t={};return{type:e.type,providersResolver:null,viewProvidersResolver:null,factory:null,hostBindings:e.hostBindings||null,hostVars:e.hostVars||0,hostAttrs:e.hostAttrs||null,contentQueries:e.contentQueries||null,declaredInputs:t,inputConfig:e.inputs||Gt,exportAs:e.exportAs||null,standalone:e.standalone??!0,signals:e.signals===!0,selectors:e.selectors||Ee,viewQuery:e.viewQuery||null,features:e.features||null,setInput:null,resolveHostDirectives:null,hostDirectives:null,controlDef:null,signalFormsInputPresence:null,inputs:fw(e.inputs,t),outputs:pw(e.outputs),debugInfo:null}}function hh(e){e.features?.forEach(t=>t(e))}function Dp(e,t){return e?()=>{let n=typeof e=="function"?e():e,r=[];for(let o of n){let i=t(o);i!==null&&r.push(i)}return r}:null}function mw(e){let t=0,n=typeof e.consts=="function"?"":e.consts,r=[e.selectors,e.ngContentSelectors,e.hostVars,e.hostAttrs,n,e.vars,e.decls,e.encapsulation,e.standalone,e.signals,e.exportAs,JSON.stringify(e.inputs),JSON.stringify(e.outputs),Object.getOwnPropertyNames(e.type.prototype),!!e.contentQueries,!!e.viewQuery];for(let i of r.join("|"))t=Math.imul(31,t)+i.charCodeAt(0)<<0;return t+=2147483648,"c"+t}var gh=new g("");var sd=(()=>{class e{resolve;reject;initialized=!1;done=!1;donePromise=new Promise((n,r)=>{this.resolve=n,this.reject=r});appInits=p(gh,{optional:!0})??[];injector=p(ae);constructor(){}runInitializers(){if(this.initialized)return;let n=[];for(let o of this.appInits){let i=_r(this.injector,o);if($o(i))n.push(i);else if(fh(i)){let s=new Promise((a,c)=>{i.subscribe({complete:a,error:c})});n.push(s)}}let r=()=>{this.done=!0,this.resolve()};Promise.all(n).then(()=>{r()}).catch(o=>{this.reject(o)}),n.length===0&&r(),this.initialized=!0}static \u0275fac=function(r){return new(r||e)};static \u0275prov=Q({token:e,factory:e.\u0275fac})}return e})();function ad(e){return t=>{t.controlDef={create:(n,r)=>{n?.\u0275ngControlCreate(r)},update:(n,r)=>{n?.\u0275ngControlUpdate?.(r)},passThroughInput:e}}}function hw(e){return Object.getPrototypeOf(e.prototype).constructor}function Ve(e){let t=hw(e.type),n=!0,r=[e];for(;t&&t!==Function.prototype&&t!==Object.prototype;){let o,i=Object.hasOwn(t,bo)?t[bo]:void 0,s=Object.hasOwn(t,yo)?t[yo]:void 0;if(st(e))o=i??s;else{if(i)throw new _(903,!1);o=s}if(o){if(n){r.push(o);let c=e;c.inputs=Yc(e.inputs),c.declaredInputs=Yc(e.declaredInputs),c.outputs=Yc(e.outputs);let l=o.hostBindings;l&&_w(e,l);let d=o.viewQuery,u=o.contentQueries;if(d&&bw(e,d),u&&yw(e,u),gw(e,o),rf(e.outputs,o.outputs),st(o)&&o.data.animation){let m=e.data;m.animation=(m.animation||[]).concat(o.data.animation)}}let a=o.features;if(a)for(let c=0;c<a.length;c++){let l=a[c];l&&l.ngInherit&&l(e),l===Ve&&(n=!1)}}t=Object.getPrototypeOf(t)}vw(r)}function gw(e,t){for(let n in t.inputs){if(!Object.hasOwn(t.inputs,n)||Object.hasOwn(e.inputs,n))continue;let r=t.inputs[n];r!==void 0&&(e.inputs[n]=r,e.declaredInputs[n]=t.declaredInputs[n])}}function vw(e){let t=0,n=null;for(let r=e.length-1;r>=0;r--){let o=e[r];o.hostVars=t+=o.hostVars,o.hostAttrs=Ar(o.hostAttrs,n=Ar(n,o.hostAttrs))}}function Yc(e){return e===Gt?{}:e===Ee?[]:e}function bw(e,t){let n=e.viewQuery;n?e.viewQuery=(r,o)=>{t(r,o),n(r,o)}:e.viewQuery=t}function yw(e,t){let n=e.contentQueries;n?e.contentQueries=(r,o,i)=>{t(r,o,i),n(r,o,i)}:e.contentQueries=t}function _w(e,t){let n=e.hostBindings;n?e.hostBindings=(r,o)=>{t(r,o),n(r,o)}:e.hostBindings=t}function Ew(e,t,n,r,o,i,s,a){if(n.firstCreatePass){e.mergedAttrs=Ar(e.mergedAttrs,e.attrs);let d=e.tView=ql(2,e,o,i,s,n.directiveRegistry,n.pipeRegistry,null,n.schemas,n.consts,null);n.queries!==null&&(n.queries.template(n,e),d.queries=n.queries.embeddedTView(e))}a&&(e.flags|=a),Dr(e,!1);let c=ww(n,t,e,r);ls()&&Gl(n,t,c,e),Rr(c,t);let l=Gm(c,t,c,e);t[r+ue]=l,Ql(t,l),JE(l,e,t)}function cd(e,t,n,r,o,i,s,a,c,l,d){let u=n+ue,m;if(t.firstCreatePass){if(m=Ho(t,u,4,s||null,a||null),l!=null){let f=Zt(t.consts,l);m.localNames=[];for(let h=0;h<f.length;h+=2)m.localNames.push(f[h],-1)}}else m=t.data[u];return Ew(m,e,t,n,r,o,i,c),l!=null&&Yl(e,m,d),m}var ww=Sw;function Sw(e,t,n,r){return ds(!0),t[Z].createComment("")}var ld=new g("");var dd=new g("");function vh(){Aa(()=>{let e="";throw new _(600,e)})}var Iw=10;var en=(()=>{class e{_runningTick=!1;_destroyed=!1;_destroyListeners=[];_views=[];internalErrorHandler=p(Pn);afterRenderManager=p(Ul);zonelessEnabled=p(No);rootEffectScheduler=p(ps);dirtyFlags=0;tracingSnapshot=null;allTestViews=new Set;autoDetectTestViews=new Set;includeAllTestViews=!1;afterTick=new de;get allViews(){return[...(this.includeAllTestViews?this.allTestViews:this.autoDetectTestViews).keys(),...this._views]}get destroyed(){return this._destroyed}componentTypes=[];components=[];internalPendingTask=p(On);get isStable(){return this.internalPendingTask.hasPendingTasksObservable.pipe(ie(n=>!n))}constructor(){p(xt,{optional:!0})}whenStable(){let n;return new Promise(r=>{n=this.isStable.subscribe({next:o=>{o&&r()}})}).finally(()=>{n.unsubscribe()})}_injector=p(ge);_rendererFactory=null;get injector(){return this._injector}bootstrap(n,r){return this.bootstrapImpl(n,r)}bootstrapImpl(n,r,o=ae.NULL){return this._injector.get(z).run(()=>{if(V(P.BootstrapComponentStart),!this._injector.get(sd).done){let C="";throw new _(405,C)}let a=zt(n),c=this._injector.get(Ls),l=new kr(a,c);this.componentTypes.push(n);let{hostElement:d,directives:u,bindings:m}=Dw(r),f=d||l.selector,h=l.create(o,[],f,c.injector,u,m),b=h.location.nativeElement,x=h.injector.get(ld,null);return x?.registerApplication(b),h.onDestroy(()=>{this.detachView(h.hostView),Ao(this.components,h),x?.unregisterApplication(b)}),this._loadComponent(h),V(P.BootstrapComponentEnd,h),h})}tick(){this.zonelessEnabled||(this.dirtyFlags|=1),this._tick()}_tick(){V(P.ChangeDetectionStart),this.tracingSnapshot!==null?this.tracingSnapshot.run(zs.CHANGE_DETECTION,this.tickImpl):this.tickImpl()}tickImpl=()=>{if(this._runningTick)throw V(P.ChangeDetectionEnd),new _(101,!1);let n=S(null);try{this._runningTick=!0,this.synchronize()}finally{this._runningTick=!1,this.tracingSnapshot?.dispose(),this.tracingSnapshot=null,S(n),this.afterTick.next(),V(P.ChangeDetectionEnd)}};synchronize(){this._rendererFactory===null&&!this._injector.destroyed&&(this._rendererFactory=this._injector.get(et,null,{optional:!0}));let n=0;for(;this.dirtyFlags!==0&&n++<Iw;){V(P.ChangeDetectionSyncStart);try{this.synchronizeOnce()}finally{V(P.ChangeDetectionSyncEnd)}}}synchronizeOnce(){this.dirtyFlags&16&&(this.dirtyFlags&=-17,this.rootEffectScheduler.flush());let n=!1;if(this.dirtyFlags&7){let r=!!(this.dirtyFlags&1);this.dirtyFlags&=-8,this.dirtyFlags|=8;for(let{_lView:o}of this.allViews){if(!r&&!Io(o))continue;let i=r&&!this.zonelessEnabled?0:1;Bm(o,i),n=!0}if(this.dirtyFlags&=-5,this.syncDirtyFlagsWithViews(),this.dirtyFlags&23)return}n||(this._rendererFactory?.begin?.(),this._rendererFactory?.end?.()),this.dirtyFlags&8&&(this.dirtyFlags&=-9,this.afterRenderManager.execute()),this.syncDirtyFlagsWithViews()}syncDirtyFlagsWithViews(){if(this.allViews.some(({_lView:n})=>Io(n))){this.dirtyFlags|=2;return}else this.dirtyFlags&=-8}attachView(n){let r=n;this._views.push(r),r.attachToAppRef(this)}detachView(n){let r=n;Ao(this._views,r),r.detachFromAppRef()}_loadComponent(n){this.attachView(n.hostView);try{this.tick()}catch(o){this.internalErrorHandler(o)}this.components.push(n),this._injector.get(dd,[]).forEach(o=>o(n))}ngOnDestroy(){if(!this._destroyed)try{this._destroyListeners.forEach(n=>n()),this._views.slice().forEach(n=>n.destroy())}finally{this._destroyed=!0,this._views=[],this._destroyListeners=[]}}onDestroy(n){return this._destroyListeners.push(n),()=>Ao(this._destroyListeners,n)}destroy(){if(this._destroyed)throw new _(406,!1);let n=this._injector;n.destroy&&!n.destroyed&&n.destroy()}get viewCount(){return this._views.length}static \u0275fac=function(r){return new(r||e)};static \u0275prov=Q({token:e,factory:e.\u0275fac})}return e})();function Dw(e){return e===void 0||typeof e=="string"||e instanceof Element?{hostElement:e}:e}function Ao(e,t){let n=e.indexOf(t);n>-1&&e.splice(n,1)}function De(e,t,n,r){let o=A(),i=Cr();if(Gn(o,i,t)){let s=J(),a=Nr();U_(a,o,e,t,n,r)}return De}function lt(e,t,n,r,o,i,s,a){Jt("NgControlFlow");let c=A(),l=J(),d=Zt(l.consts,i);return cd(c,l,e,t,n,r,o,d,256,s,a),ud}function ud(e,t,n,r,o,i,s,a){Jt("NgControlFlow");let c=A(),l=J(),d=Zt(l.consts,i);return cd(c,l,e,t,n,r,o,d,512,s,a),ud}function dt(e,t){Jt("NgControlFlow");let n=A(),r=Cr(),o=n[r]!==Mt?n[r]:-1,i=o!==-1?Cp(n,ue+o):void 0,s=0;if(Gn(n,r,e)){let a=S(null);try{if(i!==void 0&&lE(i,s),e!==-1){let c=ue+e,l=Cp(n,c),d=Cw(n[E],c),u=vE(l,d,n),m=Jl(n,d,t,{dehydratedView:u});td(l,m,s,Ms(d,u))}}finally{S(a)}}else if(i!==void 0){let a=cE(i,s);a!==void 0&&(a[Se]=t)}}function Cp(e,t){return e[t]}function Cw(e,t){return es(e,t)}function ce(e,t,n){let r=A(),o=Cr();if(Gn(r,o,t)){let i=J(),s=Nr();Rm(s,r,e,t,r[Z],n)}return ce}function Nl(e,t,n,r,o){Kl(t,e,n,o?"class":"style",r)}function v(e,t,n,r){let o=A(),i=o[E],s=e+ue,a=i.firstCreatePass?Jm(s,o,2,t,B_,Mf(),n,r):i.data[s];if(St(a)){let c=o[ot].tracingService;if(c&&c.componentCreate){let l=i.data[a.directiveStart+a.componentOffset];return c.componentCreate(Qm(l),()=>(Np(e,t,o,a,r),v))}}return Np(e,t,o,a,r),v}function Np(e,t,n,r,o){if(Om(r,n,e,t,bh),Ji(r)){let i=n[E];Am(i,n,r),im(i,r,n)}o!=null&&Yl(n,r)}function y(){let e=J(),t=me(),n=Pm(t);return e.firstCreatePass&&eh(e,n),Ac(n)&&Rc(),Mc(),n.classesWithoutHost!=null&&sy(n)&&Nl(e,n,A(),n.classesWithoutHost,!0),n.stylesWithoutHost!=null&&ay(n)&&Nl(e,n,A(),n.stylesWithoutHost,!1),y}function N(e,t,n,r){return v(e,t,n,r),y(),N}function Te(e,t,n,r){let o=A(),i=o[E],s=e+ue,a=i.firstCreatePass?LE(s,i,2,t,n,r):i.data[s];return Om(a,o,e,t,bh),r!=null&&Yl(o,a),Te}function Me(){let e=me(),t=Pm(e);return Ac(t)&&Rc(),Mc(),Me}function ut(e,t,n,r){return Te(e,t,n,r),Me(),ut}var bh=(e,t,n,r,o)=>(ds(!0),fm(t[Z],r,Hc()));function fd(){return A()}function Qs(e,t,n){let r=A(),o=Cr();if(Gn(r,o,t)){let i=J(),s=Nr();km(s,r,e,t,r[Z],n)}return Qs}var zo="en-US";var Nw=zo;function yh(e){typeof e=="string"&&(Nw=e.toLowerCase().replace(/_/g,"-"))}function T(e,t,n){let r=A(),o=J(),i=me();return _h(o,r,r[Z],i,e,t,n),T}function _h(e,t,n,r,o,i,s){let a=!0,c=null;if((r.type&3||s)&&(c??=xr(r,t,i),Ym(r,e,t,s,n,o,i,c)&&(a=!1)),a){let l=r.outputs?.[o],d=r.hostDirectiveOutputs?.[o];if(d&&d.length)for(let u=0;u<d.length;u+=2){let m=d[u],f=d[u+1];c??=xr(r,t,i),Rs(r,t,m,f,o,c)}if(l&&l.length)for(let u of l)c??=xr(r,t,i),Rs(r,t,u,o,o,c)}}function Tw(e,t){let n=null,r=e_(e);for(let o=0;o<t.length;o++){let i=t[o];if(i==="*"){n=o;continue}if(r===null?gm(e,i,!0):r_(r,i))return o}return n}function X(e){let t=A()[Ae][ve];if(!t.projection){let n=e?e.length:1,r=t.projection=ff(n,null),o=r.slice(),i=t.child;for(;i!==null;){if(i.type!==128){let s=e?Tw(i,e):0;s!==null&&(o[s]?o[s].projectionNext=i:r[s]=i,o[s]=i)}i=i.next}}}function k(e,t=0,n,r,o,i){let s=A(),a=J(),c=r?e+1:null;c!==null&&cd(s,a,c,r,o,i,null,n);let l=Ho(a,ue+e,16,null,n||null);l.projection===null&&(l.projection=t),Pc();let u=!s[Er]||xc();s[Ae][ve].projection[l.projection]===null&&c!==null?Mw(s,a,c):u&&!Bs(l)&&N_(a,s,l)}function Mw(e,t,n){let r=ue+n,o=t.data[r],i=e[r],s=yl(i,o.tView.ssrId),a=Jl(e,o,void 0,{dehydratedView:s});td(i,a,0,Ms(o,s))}function Lr(e,t,n,r){return sh(e,t,n,r),Lr}function Vr(e,t,n){return iw(e,t,n),Vr}function At(e){let t=A(),n=J(),r=is();Do(r+1);let o=od(n,r);if(e.dirty&&Sf(t)===((o.metadata.flags&2)===2)){if(o.matches===null)e.reset([]);else{let i=ch(t,r);e.reset(i,Zp),e.notifyOnChanges()}return!0}return!1}function Rt(){return rd(A(),is())}function Go(e,t,n,r,o){return cw(t,sh(e,n,r,o)),Go}function Ys(e=1){Do(is()+e)}function ft(e){let t=Af();return wf(t,ue+e)}function bs(e,t){return e<<17|t<<2}function $n(e){return e>>17&32767}function xw(e){return(e&2)==2}function Aw(e,t){return e&131071|t<<17}function Tl(e){return e|2}function Or(e){return(e&131068)>>2}function Kc(e,t){return e&-131069|t<<2}function Rw(e){return(e&1)===1}function Ml(e){return e|1}function kw(e,t,n,r,o,i){let s=i?t.classBindings:t.styleBindings,a=$n(s),c=Or(s);e[r]=n;let l=!1,d;if(Array.isArray(n)){let u=n;d=u[1],(d===null||gr(u,d)>0)&&(l=!0)}else d=n;if(o)if(c!==0){let m=$n(e[a+1]);e[r+1]=bs(m,a),m!==0&&(e[m+1]=Kc(e[m+1],r)),e[a+1]=Aw(e[a+1],r)}else e[r+1]=bs(a,0),a!==0&&(e[a+1]=Kc(e[a+1],r)),a=r;else e[r+1]=bs(c,0),a===0?a=r:e[c+1]=Kc(e[c+1],r),c=r;l&&(e[r+1]=Tl(e[r+1])),Tp(e,d,r,!0),Tp(e,d,r,!1),Ow(t,d,e,r,i),s=bs(a,c),i?t.classBindings=s:t.styleBindings=s}function Ow(e,t,n,r,o){let i=o?e.residualClasses:e.residualStyles;i!=null&&typeof t=="string"&&gr(i,t)>=0&&(n[r+1]=Ml(n[r+1]))}function Tp(e,t,n,r){let o=e[n+1],i=t===null,s=r?$n(o):Or(o),a=!1;for(;s!==0&&(a===!1||i);){let c=e[s],l=e[s+1];Pw(c,t)&&(a=!0,e[s+1]=r?Ml(l):Tl(l)),s=r?$n(l):Or(l)}a&&(e[n+1]=r?Tl(o):Ml(o))}function Pw(e,t){return e===null||t==null||(Array.isArray(e)?e[1]:e)===t?!0:Array.isArray(e)&&typeof t=="string"?gr(e,t)>=0:!1}var Xe={textEnd:0,key:0,keyEnd:0,value:0,valueEnd:0};function Fw(e){return e.substring(Xe.key,Xe.keyEnd)}function Lw(e){return Vw(e),Eh(e,wh(e,0,Xe.textEnd))}function Eh(e,t){let n=Xe.textEnd;return n===t?-1:(t=Xe.keyEnd=jw(e,Xe.key=t,n),wh(e,t,n))}function Vw(e){Xe.key=0,Xe.keyEnd=0,Xe.value=0,Xe.valueEnd=0,Xe.textEnd=e.length}function wh(e,t,n){for(;t<n&&e.charCodeAt(t)<=32;)t++;return t}function jw(e,t,n){for(;t<n&&e.charCodeAt(t)>32;)t++;return t}function j(e,t){return Bw(e,t,null,!0),j}function kt(e){Uw(Zw,Hw,e,!0)}function Hw(e,t){for(let n=Lw(t);n>=0;n=Eh(t,n))Yi(e,Fw(t),!0)}function Bw(e,t,n,r){let o=A(),i=J(),s=Lc(2);if(i.firstUpdatePass&&Ih(i,e,s,r),t!==Mt&&Gn(o,s,t)){let a=i.data[kn()];Dh(i,a,o,o[Z],e,o[s+1]=Yw(t,n),r,s)}}function Uw(e,t,n,r){let o=J(),i=Lc(2);o.firstUpdatePass&&Ih(o,null,i,r);let s=A();if(n!==Mt&&Gn(s,i,n)){let a=o.data[kn()];if(Ch(a,r)&&!Sh(o,i)){let c=r?a.classesWithoutHost:a.stylesWithoutHost;c!==null&&(n=Gi(c,n||"")),Nl(o,a,s,n,r)}else Qw(o,a,s,s[Z],s[i+1],s[i+1]=qw(e,t,n),r,i)}}function Sh(e,t){return t>=e.expandoStartIndex}function Ih(e,t,n,r){let o=e.data;if(o[n+1]===null){let i=o[kn()],s=Sh(e,n);Ch(i,r)&&t===null&&!s&&(t=!1),t=$w(o,i,t,r),kw(o,i,t,n,s,r)}}function $w(e,t,n,r){let o=Ff(e),i=r?t.residualClasses:t.residualStyles;if(o===null)(r?t.classBindings:t.styleBindings)===0&&(n=Xc(null,e,t,n,r),n=Fo(n,t.attrs,r),i=null);else{let s=t.directiveStylingLast;if(s===-1||e[s]!==o)if(n=Xc(o,e,t,n,r),i===null){let c=zw(e,t,r);c!==void 0&&Array.isArray(c)&&(c=Xc(null,e,t,c[1],r),c=Fo(c,t.attrs,r),Gw(e,t,r,c))}else i=Ww(e,t,r)}return i!==void 0&&(r?t.residualClasses=i:t.residualStyles=i),n}function zw(e,t,n){let r=n?t.classBindings:t.styleBindings;if(Or(r)!==0)return e[$n(r)]}function Gw(e,t,n,r){let o=n?t.classBindings:t.styleBindings;e[$n(o)]=r}function Ww(e,t,n){let r,o=t.directiveEnd;for(let i=1+t.directiveStylingLast;i<o;i++){let s=e[i].hostAttrs;r=Fo(r,s,n)}return Fo(r,t.attrs,n)}function Xc(e,t,n,r,o){let i=null,s=n.directiveEnd,a=n.directiveStylingLast;for(a===-1?a=n.directiveStart:a++;a<s&&(i=t[a],r=Fo(r,i.hostAttrs,o),i!==e);)a++;return e!==null&&(n.directiveStylingLast=a),r}function Fo(e,t,n){let r=n?1:2,o=-1;if(t!==null)for(let i=0;i<t.length;i++){let s=t[i];typeof s=="number"?o=s:o===r&&(Array.isArray(e)||(e=e===void 0?[]:["",e]),Yi(e,s,n?!0:t[++i]))}return e===void 0?null:e}function qw(e,t,n){if(n==null||n==="")return Ee;let r=[],o=ct(n);if(Array.isArray(o))for(let i=0;i<o.length;i++)e(r,o[i],!0);else if(o instanceof Set)for(let i of o)e(r,i,!0);else if(typeof o=="object")for(let i in o)Object.hasOwn(o,i)&&e(r,i,o[i]);else typeof o=="string"&&t(r,o);return r}function Zw(e,t,n){let r=String(t);r!==""&&!r.includes(" ")&&Yi(e,r,n)}function Qw(e,t,n,r,o,i,s,a){o===Mt&&(o=Ee);let c=0,l=0,d=0<o.length?o[0]:null,u=0<i.length?i[0]:null;for(;d!==null||u!==null;){let m=c<o.length?o[c+1]:void 0,f=l<i.length?i[l+1]:void 0,h=null,b;d===u?(c+=2,l+=2,m!==f&&(h=u,b=f)):u===null||d!==null&&d<u?(c+=2,h=d):(l+=2,h=u,b=f),h!==null&&Dh(e,t,n,r,h,b,s,a),d=c<o.length?o[c]:null,u=l<i.length?i[l]:null}}function Dh(e,t,n,r,o,i,s,a){if(!(t.type&3))return;let c=e.data,l=c[a+1],d=Rw(l)?Mp(c,t,n,o,Or(l),s):void 0;if(!Vs(d)){Vs(i)||xw(l)&&(i=Mp(c,null,n,o,a,s));let u=Ef(kn(),n);M_(r,s,u,o,i)}}function Mp(e,t,n,r,o,i){let s=t===null,a;for(;o>0;){let c=e[o],l=Array.isArray(c),d=l?c[1]:c,u=d===null,m=n[o+1];m===Mt&&(m=u?Ee:void 0);let f=u?Ki(m,r):d===r?m:void 0;if(l&&!Vs(f)&&(f=Ki(c,r)),Vs(f)&&(a=f,s))return a;let h=e[o+1];o=s?$n(h):Or(h)}if(t!==null){let c=i?t.residualClasses:t.residualStyles;c!=null&&(a=Ki(c,r))}return a}function Vs(e){return e!==void 0}function Yw(e,t){return e==null||e===""||(typeof t=="string"?e=ct(e)+t:typeof e=="object"&&(e=zi(ct(e)))),e}function Ch(e,t){return(e.flags&(t?8:16))!==0}function ke(e,t=""){let n=A(),r=J(),o=e+ue,i=r.firstCreatePass?Ho(r,o,1,t,null):r.data[o],s=Kw(r,n,i,t);n[o]=s,ls()&&Gl(r,n,s,i),Dr(i,!1)}var Kw=(e,t,n,r)=>(ds(!0),Gy(t[Z],r));function qn(e,t,n){hs(t)&&(t=t());let r=A(),o=Cr();if(Gn(r,o,t)){let i=J(),s=Nr();Rm(s,r,e,t,r[Z],n)}return qn}function jr(e,t){let n=hs(e);return n&&e.set(t),n}function Zn(e,t){let n=A(),r=J(),o=me();return _h(r,n,n[Z],o,e,t),Zn}function xp(e,t,n){let r=J();r.firstCreatePass&&Nh(t,r.data,r.blueprint,st(e),n)}function Nh(e,t,n,r,o){if(e=he(e),Array.isArray(e))for(let i=0;i<e.length;i++)Nh(e[i],t,n,r,o);else{let i=J(),s=A(),a=me(),c=Sn(e)?e:he(e.provide),l=_c(e),d=a.providerIndexes&1048575,u=a.directiveStart,m=a.providerIndexes>>20;if(Sn(e)||!e.multi){let f=new Hn(l,o,fe,null),h=el(c,t,o?d:d+m,u);h===-1?(rl(Cs(a,s),i,c),Jc(i,e,t.length),t.push(c),a.directiveStart++,a.directiveEnd++,o&&(a.providerIndexes+=1048576),n.push(f),s.push(f)):(n[h]=f,s[h]=f)}else{let f=el(c,t,d+m,u),h=el(c,t,d,d+m),b=f>=0&&n[f],x=h>=0&&n[h];if(o&&!x||!o&&!b){rl(Cs(a,s),i,c);let C=eS(o?Jw:Xw,n.length,o,r,l,e);!o&&x&&(n[h].providerFactory=C),Jc(i,e,t.length,0),t.push(c),a.directiveStart++,a.directiveEnd++,o&&(a.providerIndexes+=1048576),n.push(C),s.push(C)}else{let C=Th(n[o?h:f],l,!o&&r);Jc(i,e,f>-1?f:h,C)}!o&&r&&x&&n[h].componentProviders++}}}function Jc(e,t,n,r){let o=Sn(t),i=vf(t);if(o||i){let c=(i?he(t.useClass):t).prototype.ngOnDestroy;if(c){let l=e.destroyHooks||(e.destroyHooks=[]);if(!o&&t.multi){let d=l.indexOf(n);d===-1?l.push(n,[r,c]):l[d+1].push(r,c)}else l.push(n,c)}}}function Th(e,t,n){return n&&e.componentProviders++,e.multi.push(t)-1}function el(e,t,n,r){for(let o=n;o<r;o++)if(t[o]===e)return o;return-1}function Xw(e,t,n,r,o){return xl(this.multi,[])}function Jw(e,t,n,r,o){let i=this.multi,s;if(this.providerFactory){let a=this.providerFactory.componentProviders,c=Ro(r,r[E],this.providerFactory.index,o);s=c.slice(0,a),xl(i,s);for(let l=a;l<c.length;l++)s.push(c[l])}else s=[],xl(i,s);return s}function xl(e,t){for(let n=0;n<e.length;n++){let r=e[n];t.push(r())}return t}function eS(e,t,n,r,o,i){let s=new Hn(e,n,fe,null);return s.multi=[],s.index=t,s.componentProviders=0,Th(s,o,r&&!n),s}function pt(e,t){return n=>{n.providersResolver=(r,o)=>xp(r,o?o(e):e,!1),t&&(n.viewProvidersResolver=(r,o)=>xp(r,o?o(t):t,!0))}}var Mh=(()=>{class e{applicationErrorHandler=p(Pn);appRef=p(en);taskService=p(On);ngZone=p(z);zonelessEnabled=p(No);tracing=p(xt,{optional:!0});zoneIsDefined=typeof Zone<"u"&&!!Zone.root.run;schedulerTickApplyArgs=[{data:{__scheduler_tick__:!0}}];subscriptions=new le;angularZoneId=this.zoneIsDefined?this.ngZone._inner?.get(go):null;scheduleInRootZone=!this.zonelessEnabled&&this.zoneIsDefined&&(p(Gc,{optional:!0})??!1);cancelScheduledCallback=null;useMicrotaskScheduler=!1;runningTick=!1;pendingRenderTaskId=null;constructor(){this.subscriptions.add(this.appRef.afterTick.subscribe(()=>{let n=this.taskService.add();if(!this.runningTick&&(this.cleanup(),!this.zonelessEnabled||this.appRef.includeAllTestViews)){this.taskService.remove(n);return}this.switchToMicrotaskScheduler(),this.taskService.remove(n)})),this.subscriptions.add(this.ngZone.onUnstable.subscribe(()=>{this.runningTick||this.cleanup()}))}switchToMicrotaskScheduler(){this.ngZone.runOutsideAngular(()=>{let n=this.taskService.add();this.useMicrotaskScheduler=!0,queueMicrotask(()=>{this.useMicrotaskScheduler=!1,this.taskService.remove(n)})})}notify(n){if(!this.zonelessEnabled&&n===5)return;switch(n){case 0:case 2:{this.appRef.dirtyFlags|=2;break}case 3:case 4:case 5:case 1:{this.appRef.dirtyFlags|=4;break}case 6:{this.appRef.dirtyFlags|=2;break}case 12:{this.appRef.dirtyFlags|=16;break}case 13:{this.appRef.dirtyFlags|=2;break}case 11:break;default:this.appRef.dirtyFlags|=8}if(this.appRef.tracingSnapshot=this.tracing?.snapshot(this.appRef.tracingSnapshot)??null,!this.shouldScheduleTick())return;let r=this.useMicrotaskScheduler?zf:Bc;this.pendingRenderTaskId=this.taskService.add(),this.scheduleInRootZone?this.cancelScheduledCallback=Zone.root.run(()=>r(()=>this.tick())):this.cancelScheduledCallback=this.ngZone.runOutsideAngular(()=>r(()=>this.tick()))}shouldScheduleTick(){return!(this.appRef.destroyed||this.pendingRenderTaskId!==null||this.runningTick||this.appRef._runningTick||!this.zonelessEnabled&&this.zoneIsDefined&&Zone.current.get(go+this.angularZoneId))}tick(){if(this.runningTick||this.appRef.destroyed)return;if(this.appRef.dirtyFlags===0){this.cleanup();return}!this.zonelessEnabled&&this.appRef.dirtyFlags&7&&(this.appRef.dirtyFlags|=1);let n=this.taskService.add();try{this.ngZone.run(()=>{this.runningTick=!0,this.appRef._tick()},void 0,this.schedulerTickApplyArgs)}catch(r){this.applicationErrorHandler(r)}finally{this.taskService.remove(n),this.cleanup()}}ngOnDestroy(){this.subscriptions.unsubscribe(),this.cleanup()}cleanup(){if(this.runningTick=!1,this.cancelScheduledCallback?.(),this.cancelScheduledCallback=null,this.pendingRenderTaskId!==null){let n=this.pendingRenderTaskId;this.pendingRenderTaskId=null,this.taskService.remove(n)}}static \u0275fac=function(r){return new(r||e)};static \u0275prov=Q({token:e,factory:e.\u0275fac})}return e})();function pd(){return Jt("NgZoneless"),br([...md(),[]])}function md(){return[{provide:yt,useExisting:Mh},{provide:z,useClass:vo},{provide:No,useValue:!0}]}function tS(){return typeof $localize<"u"&&$localize.locale||zo}var hd=new g("",{factory:()=>p(hd,{optional:!0,skipSelf:!0})||tS()});var Ks=class{destroyed=!1;listeners=null;errorHandler=p(we,{optional:!0});isEmitting=!1;hasNullListeners=!1;destroyRef=p(xe);constructor(){this.destroyRef.onDestroy(()=>{this.destroyed=!0,this.listeners=null})}subscribe(t){if(this.destroyed)throw new _(953,!1);return(this.listeners??=[]).push(t),{unsubscribe:()=>{let n=this.listeners?this.listeners.indexOf(t):-1;n>-1&&(this.isEmitting?(this.hasNullListeners=!0,this.listeners[n]=null):this.listeners.splice(n,1))}}}emit(t){if(this.destroyed){console.warn($t(953,!1));return}if(this.listeners===null)return;this.isEmitting=!0;let n=S(null);try{for(let r of this.listeners)try{r!==null&&r(t)}catch(o){this.errorHandler?.handleError(o)}}finally{this.hasNullListeners&&(this.hasNullListeners=!1,this.listeners&&nS(this.listeners)),S(n),this.isEmitting=!1}}};function nS(e){let t=e.length-1;for(;t>-1;)e[t]===null&&e.splice(t,1),t--}function tn(e,t){return no(e,t?.equal)}function Oe(e){return Iu(e)}var xh=class e extends Error{_brand;constructor(t){super(t)}static IDLE=new e("IDLE");static LOADING=new e("LOADING")},rS=e=>e;function gd(e,t){if(typeof e=="function"){let n=Fa(e,rS,t?.equal);return Ah(n,t?.debugName,t?.set)}else{let n=Fa(e.source,e.computation,e.equal);return Ah(n,e.debugName,e.set)}}function Ah(e,t,n){let r=e[ne],o=e;if(n!==void 0){let i=s=>La(r,s);o.set=s=>n(s,i),o.update=s=>n(s(Oe(e)),i)}else o.set=i=>La(r,i),o.update=i=>Su(r,i);return o.asReadonly=us.bind(e),o}function Fh(e,t){let n=Object.create(Rp);n.value=e,n.transformFn=t?.transform;function r(){if(un(n),n.value===js){let o=null;throw new _(-950,o)}return n.value}return r[ne]=n,r}var nn=class{attributeName;constructor(t){this.attributeName=t}__NG_ELEMENT_ID__=()=>qp(this.attributeName);toString(){return`HostAttributeToken ${this.attributeName}`}};function Lh(e){return new Ks}function Rh(e,t){return Fh(e,t)}function fS(e){return Fh(js,e)}var Hr=(Rh.required=fS,Rh);function kh(e,t){return lh(t)}function pS(e,t){return dh(t)}var Vh=(kh.required=pS,kh);function bd(e,t){return uh(t)}var mS=1e4;var JL=mS-1e3;var rn=(()=>{class e{static __NG_ELEMENT_ID__=hS}return e})();function hS(e){return gS(me(),A(),(e&16)===16)}function gS(e,t,n){if(St(e)&&!n){let r=ze(e.index,t);return new Xt(r,r)}else if(e.type&175){let r=t[Ae];return new Xt(r,t)}return null}var vd=new g(""),vS=new g("");function Wo(e){return!e.moduleRef}function bS(e){let t=Wo(e)?e.r3Injector:e.moduleRef.injector,n=t.get(z);return n.run(()=>{Wo(e)?e.r3Injector.resolveInjectorInitializers():e.moduleRef.resolveInjectorInitializers();let r=t.get(Pn),o;if(n.runOutsideAngular(()=>{o=n.onError.subscribe({next:r})}),Wo(e)){let i=()=>t.destroy(),s=e.platformInjector.get(vd);s.add(i),t.onDestroy(()=>{o.unsubscribe(),s.delete(i)})}else{let i=()=>e.moduleRef.destroy(),s=e.platformInjector.get(vd);s.add(i),e.moduleRef.onDestroy(()=>{Ao(e.allPlatformModules,e.moduleRef),o.unsubscribe(),s.delete(i)})}return _S(r,n,()=>{let i=t.get(On),s=i.add(),a=t.get(sd);return a.runInitializers(),a.donePromise.then(()=>{let c=t.get(hd,zo);if(yh(c||zo),!t.get(vS,!0))return Wo(e)?t.get(en):(e.allPlatformModules.push(e.moduleRef),e.moduleRef);if(Wo(e)){let d=t.get(en);return e.rootComponent!==void 0&&d.bootstrap(e.rootComponent),d}else return yS?.(e.moduleRef,e.allPlatformModules),e.moduleRef}).finally(()=>{i.remove(s)})})})}var yS;function _S(e,t,n){try{let r=n();return $o(r)?r.catch(o=>{throw t.runOutsideAngular(()=>e(o)),o}):r}catch(r){throw t.runOutsideAngular(()=>e(r)),r}}var Xs=null;function ES(e=[],t){return ae.create({name:t,providers:[{provide:wo,useValue:"platform"},{provide:vd,useValue:new Set([()=>Xs=null])},...e]})}function wS(e=[]){if(Xs)return Xs;let t=ES(e);return Xs=t,vh(),SS(t),t}function SS(e){let t=e.get(fs,null);_r(e,()=>{t?.forEach(n=>n())})}function jh(e){let{rootComponent:t,appProviders:n,platformProviders:r,platformRef:o}=e;V(P.BootstrapApplicationStart);try{let i=o?.injector??wS(r),s=[md(),Wf,...n||[]],a=new Po({providers:s,parent:i,debugName:"",runEnvironmentInitializers:!1});return bS({r3Injector:a.injector,platformInjector:i,rootComponent:t})}catch(i){return Promise.reject(i)}finally{V(P.BootstrapApplicationEnd)}}function H(e){return typeof e=="boolean"?e:e!=null&&e!=="false"}function Qn(e,t=NaN){return!isNaN(parseFloat(e))&&!isNaN(Number(e))?Number(e):t}function Hh(e,t){let n=zt(e),r=t.elementInjector||yr();return new kr(n).create(r,t.projectableNodes,t.hostElement,t.environmentInjector,t.directives,t.bindings)}var Bh=null;function Ge(){return Bh}function yd(e){Bh??=e}var qo=class{},Js=(()=>{class e{historyGo(n){throw new Error("")}static \u0275fac=function(r){return new(r||e)};static \u0275prov=F({token:e,factory:()=>p(Uh),providedIn:"platform"})}return e})();var Uh=(()=>{class e extends Js{_location;_history;_doc=p(L);constructor(){super(),this._location=window.location,this._history=window.history}getBaseHrefFromDOM(){return Ge().getBaseHref(this._doc)}onPopState(n){let r=Ge().getGlobalEventTarget(this._doc,"window");return r.addEventListener("popstate",n,!1),()=>r.removeEventListener("popstate",n)}onHashChange(n){let r=Ge().getGlobalEventTarget(this._doc,"window");return r.addEventListener("hashchange",n,!1),()=>r.removeEventListener("hashchange",n)}get href(){return this._location.href}get protocol(){return this._location.protocol}get hostname(){return this._location.hostname}get port(){return this._location.port}get pathname(){return this._location.pathname}get search(){return this._location.search}get hash(){return this._location.hash}set pathname(n){this._location.pathname=n}pushState(n,r,o){this._history.pushState(n,r,o)}replaceState(n,r,o){this._history.replaceState(n,r,o)}forward(){this._history.forward()}back(){this._history.back()}historyGo(n=0){this._history.go(n)}getState(){return this._history.state}static \u0275fac=function(r){return new(r||e)};static \u0275prov=F({token:e,factory:()=>new e,providedIn:"platform"})}return e})();function Zo(e,t){t=encodeURIComponent(t);for(let n of e.split(";")){let r=n.indexOf("="),[o,i]=r==-1?[n,""]:[n.slice(0,r),n.slice(r+1)];if(o.trim()!==t)continue;let s=i;try{s=decodeURIComponent(i)}catch{}return s.length>1&&s[0]==='"'&&s[s.length-1]==='"'&&(s=s.slice(1,-1)),s}return null}var _d="browser";function $h(e){return e===_d}var Qo=class{_doc;constructor(t){this._doc=t}manager},ea=(()=>{class e extends Qo{constructor(n){super(n)}supports(n){return!0}addEventListener(n,r,o,i){return n.addEventListener(r,o,i),()=>this.removeEventListener(n,r,o,i)}removeEventListener(n,r,o,i){return n.removeEventListener(r,o,i)}static \u0275fac=function(r){return new(r||e)(M(L))};static \u0275prov=F({token:e,factory:e.\u0275fac})}return e})(),ra=new g(""),Id=(()=>{class e{_zone;_plugins;_eventNameToPlugin=new Map;constructor(n,r){this._zone=r,n.forEach(s=>{s.manager=this});let o=n.filter(s=>!(s instanceof ea));this._plugins=o.slice().reverse();let i=n.find(s=>s instanceof ea);i&&this._plugins.push(i)}addEventListener(n,r,o,i){return this._findPluginFor(r).addEventListener(n,r,o,i)}getZone(){return this._zone}_findPluginFor(n){let r=this._eventNameToPlugin.get(n);if(r)return r;if(r=this._plugins.find(i=>i.supports(n)),!r)throw new _(-5101,!1);return this._eventNameToPlugin.set(n,r),r}static \u0275fac=function(r){return new(r||e)(M(ra),M(z))};static \u0275prov=F({token:e,factory:e.\u0275fac})}return e})(),Ed="ng-app-id";function zh(e){for(let t of e)t.remove()}function Gh(e,t){let n=t.createElement("style");return n.textContent=e,n}function DS(e,t,n,r){let o=e.head?.querySelectorAll(`style[${Ed}="${t}"],link[${Ed}="${t}"]`);if(!o||o.length===0)return!1;for(let i of o)i.removeAttribute(Ed),i instanceof HTMLLinkElement?r.set(i.href.slice(i.href.lastIndexOf("/")+1),{usage:0,elements:[i]}):i.textContent&&n.set(i.textContent,{usage:0,elements:[i]});return!0}function Sd(e,t){let n=t.createElement("link");return n.setAttribute("rel","stylesheet"),n.setAttribute("href",e),n}var Dd=(()=>{class e{doc;appId;nonce;inline=new Map;external=new Map;hosts=new Set;constructor(n,r,o,i={}){this.doc=n,this.appId=r,this.nonce=o,DS(n,r,this.inline,this.external)&&this.hosts.add(n.head)}addStyles(n,r){for(let o of n)this.addUsage(o,this.inline,Gh);r?.forEach(o=>this.addUsage(o,this.external,Sd))}removeStyles(n,r){for(let o of n)this.removeUsage(o,this.inline);r?.forEach(o=>this.removeUsage(o,this.external))}addUsage(n,r,o){let i=r.get(n);i?i.usage++:r.set(n,{usage:1,elements:[...this.hosts].map(s=>this.addElement(s,o(n,this.doc)))})}removeUsage(n,r){let o=r.get(n);o&&(o.usage--,o.usage<=0&&(zh(o.elements),r.delete(n)))}ngOnDestroy(){for(let[,{elements:n}]of[...this.inline,...this.external])zh(n);this.hosts.clear()}addHost(n){if(!this.hosts.has(n)){this.hosts.add(n);for(let[r,{elements:o}]of this.inline)o.push(this.addElement(n,Gh(r,this.doc)));for(let[r,{elements:o}]of this.external)o.push(this.addElement(n,Sd(r,this.doc)))}}removeHost(n){this.hosts.delete(n);for(let r of[...this.inline.values(),...this.external.values()]){let o=[];for(let i of r.elements)i.parentNode===n?i.remove():o.push(i);r.elements=o}}addElement(n,r){return this.nonce&&r.setAttribute("nonce",this.nonce),n.appendChild(r)}static \u0275fac=function(r){return new(r||e)(M(L),M(Fn),M(Vn,8),M(Ln))};static \u0275prov=F({token:e,factory:e.\u0275fac})}return e})(),wd={svg:"http://www.w3.org/2000/svg",xhtml:"http://www.w3.org/1999/xhtml",xlink:"http://www.w3.org/1999/xlink",xml:"http://www.w3.org/XML/1998/namespace",xmlns:"http://www.w3.org/2000/xmlns/",math:"http://www.w3.org/1998/Math/MathML"},Cd=/%COMP%/g;var qh="%COMP%",CS=`_nghost-${qh}`,NS=`_ngcontent-${qh}`,TS=!0,MS=new g("",{factory:()=>TS}),xS=new g("");function AS(e){return NS.replace(Cd,e)}function RS(e){return CS.replace(Cd,e)}function Zh(e,t){return t.map(n=>n.replace(Cd,e))}var Nd=(()=>{class e{eventManager;sharedStylesHost;appId;removeStylesOnCompDestroy;doc;ngZone;nonce;tracingService;rendererByCompId=new Map;defaultRenderer;cssVarNamespace;constructor(n,r,o,i,s,a,c=null,l=null,d=null){this.eventManager=n,this.sharedStylesHost=r,this.appId=o,this.removeStylesOnCompDestroy=i,this.doc=s,this.ngZone=a,this.nonce=c,this.tracingService=l,this.cssVarNamespace=d??"",this.defaultRenderer=new Yo(n,s,a,this.tracingService,this.cssVarNamespace)}createRenderer(n,r){if(!n||!r)return this.defaultRenderer;let o=this.getOrCreateRenderer(n,r);return o instanceof na?o.applyToHost(n):o instanceof Ko&&o.applyStyles(),o}getOrCreateRenderer(n,r){let o=this.rendererByCompId,i=o.get(r.id);if(!i){let s=this.doc,a=this.ngZone,c=this.eventManager,l=this.sharedStylesHost,d=this.removeStylesOnCompDestroy,u=this.tracingService;switch(r.encapsulation){case Je.Emulated:i=new na(c,l,r,this.appId,d,s,a,u,this.cssVarNamespace);break;case Je.ShadowDom:return new ta(c,n,r,s,a,this.nonce,u,this.cssVarNamespace,l);case Je.ExperimentalIsolatedShadowDom:return new ta(c,n,r,s,a,this.nonce,u,this.cssVarNamespace);default:i=new Ko(c,l,r,d,s,a,u,this.cssVarNamespace);break}o.set(r.id,i)}return i}ngOnDestroy(){this.rendererByCompId.clear()}componentReplaced(n){this.rendererByCompId.delete(n)}static \u0275fac=function(r){return new(r||e)(M(Id),M(Wn),M(Fn),M(MS),M(L),M(z),M(Vn),M(xt,8),M(xS,8))};static \u0275prov=F({token:e,factory:e.\u0275fac})}return e})(),Yo=class{eventManager;doc;ngZone;tracingService;cssVarNamespace;data=Object.create(null);throwOnSyntheticProps=!0;constructor(t,n,r,o,i=""){this.eventManager=t,this.doc=n,this.ngZone=r,this.tracingService=o,this.cssVarNamespace=i}destroy(){}destroyNode=null;createElement(t,n){return n?this.doc.createElementNS(wd[n]||n,t):this.doc.createElement(t)}createComment(t){return this.doc.createComment(t)}createText(t){return this.doc.createTextNode(t)}appendChild(t,n){(Wh(t)?t.content:t).appendChild(n)}insertBefore(t,n,r){if(t){let o=Wh(t)?t.content:t;if(r!=null&&r.parentNode!==o)throw new _(-5106,!1);o.insertBefore(n,r)}}removeChild(t,n){n.remove()}selectRootElement(t,n){let r=typeof t=="string"?this.doc.querySelector(t):t;if(!r)throw new _(-5104,!1);return n||(r.textContent=""),r}parentNode(t){return t.parentNode}nextSibling(t){return t.nextSibling}setAttribute(t,n,r,o){if(o){n=o+":"+n;let i=wd[o];i?t.setAttributeNS(i,n,r):t.setAttribute(n,r)}else t.setAttribute(n,r)}removeAttribute(t,n,r){if(r){let o=wd[r];o?t.removeAttributeNS(o,n):t.removeAttribute(`${r}:${n}`)}else t.removeAttribute(n)}addClass(t,n){t.classList.add(n)}removeClass(t,n){t.classList.remove(n)}setStyle(t,n,r,o){let i=n.startsWith("--");i&&(n=n.replace("%NS%",this.cssVarNamespace)),i||o&(Nt.DashCase|Nt.Important)?t.style.setProperty(n,r,o&Nt.Important?"important":""):t.style[n]=r}removeStyle(t,n,r){let o=n.startsWith("--");o&&(n=n.replace("%NS%",this.cssVarNamespace)),o||r&Nt.DashCase?t.style.removeProperty(n):t.style[n]=""}setProperty(t,n,r){t!=null&&(t[n]=r)}setValue(t,n){t.nodeValue=n}listen(t,n,r,o){if(typeof t=="string"&&(t=Ge().getGlobalEventTarget(this.doc,t),!t))throw new _(-5102,!1);let i=this.decoratePreventDefault(r);return this.tracingService?.wrapEventListener&&(i=this.tracingService.wrapEventListener(t,n,i)),this.eventManager.addEventListener(t,n,i,o)}decoratePreventDefault(t){return n=>{if(n==="__ngUnwrap__")return t;t(n)===!1&&n.preventDefault()}}};function Wh(e){return e.tagName==="TEMPLATE"&&e.content!==void 0}var ta=class extends Yo{hostEl;sharedStylesHost;shadowRoot;constructor(t,n,r,o,i,s,a,c,l){super(t,o,i,a,c),this.hostEl=n,this.sharedStylesHost=l,this.shadowRoot=n.attachShadow({mode:"open"}),this.sharedStylesHost&&this.sharedStylesHost.addHost(this.shadowRoot);let d=r.styles;d=Zh(r.id,d).map(m=>m.replace(/%NS%/g,c));for(let m of d){let f=document.createElement("style");s&&f.setAttribute("nonce",s),f.textContent=m,this.shadowRoot.appendChild(f)}let u=r.getExternalStyles?.();if(u)for(let m of u){let f=Sd(m,o);s&&f.setAttribute("nonce",s),this.shadowRoot.appendChild(f)}}nodeOrShadowRoot(t){return t===this.hostEl?this.shadowRoot:t}appendChild(t,n){return super.appendChild(this.nodeOrShadowRoot(t),n)}insertBefore(t,n,r){return super.insertBefore(this.nodeOrShadowRoot(t),n,r)}removeChild(t,n){return super.removeChild(null,n)}parentNode(t){return this.nodeOrShadowRoot(super.parentNode(this.nodeOrShadowRoot(t)))}destroy(){this.sharedStylesHost&&this.sharedStylesHost.removeHost(this.shadowRoot)}},Ko=class extends Yo{sharedStylesHost;removeStylesOnCompDestroy;styles;styleUrls;constructor(t,n,r,o,i,s,a,c,l){super(t,i,s,a,c),this.sharedStylesHost=n,this.removeStylesOnCompDestroy=o;let d=r.styles,u=l?Zh(l,d):d;this.styles=u.map(m=>m.replace(/%NS%/g,c)),this.styleUrls=r.getExternalStyles?.(l)}applyStyles(){this.sharedStylesHost.addStyles(this.styles,this.styleUrls)}destroy(){this.removeStylesOnCompDestroy&&Bn.size===0&&this.sharedStylesHost.removeStyles(this.styles,this.styleUrls)}},na=class extends Ko{contentAttr;hostAttr;constructor(t,n,r,o,i,s,a,c,l){let d=o+"-"+r.id;super(t,n,r,i,s,a,c,l,d),this.contentAttr=AS(d),this.hostAttr=RS(d)}applyToHost(t){this.applyStyles(),this.setAttribute(t,this.hostAttr,"")}createElement(t,n){let r=super.createElement(t,n);return super.setAttribute(r,this.contentAttr,""),r}};var oa=class e extends qo{supportsDOMEvents=!0;static makeCurrent(){yd(new e)}onAndCancel(t,n,r,o){return t.addEventListener(n,r,o),()=>{t.removeEventListener(n,r,o)}}dispatchEvent(t,n){t.dispatchEvent(n)}remove(t){t.remove()}createElement(t,n){return n=n||this.getDefaultDocument(),n.createElement(t)}createHtmlDocument(){return document.implementation.createHTMLDocument("fakeTitle")}getDefaultDocument(){return document}isElementNode(t){return t.nodeType===Node.ELEMENT_NODE}isShadowRoot(t){return t instanceof DocumentFragment}getGlobalEventTarget(t,n){return n==="window"?window:n==="document"?t:n==="body"?t.body:null}getBaseHref(t){let n=kS();return n==null?null:OS(n)}resetBaseElement(){Xo=null}getUserAgent(){return window.navigator.userAgent}getCookie(t){return Zo(document.cookie,t)}},Xo=null;function kS(){return Xo=Xo||document.head.querySelector("base"),Xo?Xo.getAttribute("href"):null}function OS(e){return new URL(e,document.baseURI).pathname}var Qh=["alt","control","meta","shift"],PS={"\b":"Backspace","	":"Tab","\x7F":"Delete","\x1B":"Escape",Del:"Delete",Esc:"Escape",Left:"ArrowLeft",Right:"ArrowRight",Up:"ArrowUp",Down:"ArrowDown",Menu:"ContextMenu",Scroll:"ScrollLock",Win:"OS"},FS={alt:e=>e.altKey,control:e=>e.ctrlKey,meta:e=>e.metaKey,shift:e=>e.shiftKey},Yh=(()=>{class e extends Qo{constructor(n){super(n)}supports(n){return e.parseEventName(n)!=null}addEventListener(n,r,o,i){let s=e.parseEventName(r),a=e.eventCallback(s.fullKey,o,this.manager.getZone());return this.manager.getZone().runOutsideAngular(()=>Ge().onAndCancel(n,s.domEventName,a,i))}static parseEventName(n){let r=n.toLowerCase().split("."),o=r.shift();if(r.length===0||!(o==="keydown"||o==="keyup"))return null;let i=e._normalizeKey(r.pop()),s="",a=r.indexOf("code");if(a>-1&&(r.splice(a,1),s="code."),Qh.forEach(l=>{let d=r.indexOf(l);d>-1&&(r.splice(d,1),s+=l+".")}),s+=i,r.length!=0||i.length===0)return null;let c={};return c.domEventName=o,c.fullKey=s,c}static matchEventFullKeyCode(n,r){let o=PS[n.key]||n.key,i="";return r.indexOf("code.")>-1&&(o=n.code,i="code."),o==null||!o?!1:(o=o.toLowerCase(),o===" "?o="space":o==="."&&(o="dot"),Qh.forEach(s=>{if(s!==o){let a=FS[s];a(n)&&(i+=s+".")}}),i+=o,i===r)}static eventCallback(n,r,o){return i=>{e.matchEventFullKeyCode(i,n)&&o.runGuarded(()=>r(i))}}static _normalizeKey(n){return n==="esc"?"escape":n}static \u0275fac=function(r){return new(r||e)(M(L))};static \u0275prov=F({token:e,factory:e.\u0275fac})}return e})();async function Td(e,t,n){let r=w({rootComponent:e},LS(t,n));return jh(r)}function LS(e,t){return{platformRef:t?.platformRef,appProviders:[...US,...e?.providers??[]],platformProviders:BS}}function VS(){oa.makeCurrent()}function jS(){return new we}function HS(){return kl(document),document}var BS=[{provide:Ln,useValue:_d},{provide:fs,useValue:VS,multi:!0},{provide:L,useFactory:HS}];var US=[{provide:wo,useValue:"root"},{provide:we,useFactory:jS},{provide:ra,useClass:ea,multi:!0},{provide:ra,useClass:Yh,multi:!0},Nd,{provide:Wn,useClass:Dd},{provide:Dd,useExisting:Wn},Id,{provide:et,useExisting:Nd},[]];var Pt=class e{headers;normalizedNames=new Map;lazyInit;lazyUpdate=null;constructor(t){t?typeof t=="string"?this.lazyInit=()=>{this.headers=new Map,t.split(`
`).forEach(n=>{let r=n.indexOf(":");if(r>0){let o=n.slice(0,r),i=n.slice(r+1).trim();this.addHeaderEntry(o,i)}})}:typeof Headers<"u"&&t instanceof Headers?(this.headers=new Map,t.forEach((n,r)=>{this.addHeaderEntry(r,n)})):this.lazyInit=()=>{this.headers=new Map,Object.entries(t).forEach(([n,r])=>{this.setHeaderEntries(n,r)})}:this.headers=new Map}has(t){return this.init(),this.headers.has(t.toLowerCase())}get(t){this.init();let n=this.headers.get(t.toLowerCase());return n&&n.length>0?n[0]:null}keys(){return this.init(),Array.from(this.normalizedNames.values())}getAll(t){return this.init(),this.headers.get(t.toLowerCase())||null}append(t,n){return this.clone({name:t,value:n,op:"a"})}set(t,n){return this.clone({name:t,value:n,op:"s"})}delete(t,n){return this.clone({name:t,value:n,op:"d"})}maybeSetNormalizedName(t,n){this.normalizedNames.has(n)||this.normalizedNames.set(n,t)}init(){this.lazyInit&&(this.lazyInit instanceof e?this.copyFrom(this.lazyInit):this.lazyInit(),this.lazyInit=null,this.lazyUpdate&&(this.lazyUpdate.forEach(t=>this.applyUpdate(t)),this.lazyUpdate=null))}copyFrom(t){t.init();for(let[n,r]of t.headers.entries())this.headers.set(n,r),this.normalizedNames.set(n,t.normalizedNames.get(n))}clone(t){let n=new e;return n.lazyInit=this.lazyInit&&this.lazyInit instanceof e?this.lazyInit:this,n.lazyUpdate=(this.lazyUpdate||[]).concat([t]),n}applyUpdate(t){let n=t.name.toLowerCase();switch(t.op){case"a":case"s":let r=t.value;if(typeof r=="string"&&(r=[r]),r.length===0)return;this.maybeSetNormalizedName(t.name,n);let o=t.op==="a"?(this.headers.get(n)||[]).slice():[];o.push(...r),this.headers.set(n,o);break;case"d":let i=t.value;if(i===void 0)this.headers.delete(n),this.normalizedNames.delete(n);else{let s=Array.isArray(i)?i:[i],a=this.headers.get(n);if(!a)return;a=a.filter(c=>s.indexOf(c)===-1),a.length===0?(this.headers.delete(n),this.normalizedNames.delete(n)):this.headers.set(n,a)}break}}addHeaderEntry(t,n){let r=t.toLowerCase();this.maybeSetNormalizedName(t,r),this.headers.has(r)?this.headers.get(r).push(n):this.headers.set(r,[n])}setHeaderEntries(t,n){let r=(Array.isArray(n)?n:[n]).map(i=>i.toString()),o=t.toLowerCase();this.headers.set(o,r),this.maybeSetNormalizedName(t,o)}forEach(t){this.init(),Array.from(this.normalizedNames.keys()).forEach(n=>t(this.normalizedNames.get(n),this.headers.get(n)))}};var Ad=class{map=new Map;set(t,n){return this.map.set(t,n),this}get(t){return this.map.has(t)||this.map.set(t,t.defaultValue()),this.map.get(t)}delete(t){return this.map.delete(t),this}has(t){return this.map.has(t)}keys(){return this.map.keys()}},Rd=class{encodeKey(t){return Kh(t)}encodeValue(t){return Kh(t)}decodeKey(t){return decodeURIComponent(t)}decodeValue(t){return decodeURIComponent(t)}};function $S(e,t){let n=new Map;return e.length>0&&e.replace(/^\?/,"").split("&").forEach(o=>{let i=o.indexOf("="),[s,a]=i==-1?[t.decodeKey(o),""]:[t.decodeKey(o.slice(0,i)),t.decodeValue(o.slice(i+1))],c=n.get(s)||[];c.push(a),n.set(s,c)}),n}var zS=/%(\d[a-f0-9])/gi,GS={40:"@","3A":":",24:"$","2C":",","3B":";","3D":"=","3F":"?","2F":"/"};function Kh(e){return encodeURIComponent(e).replace(zS,(t,n)=>GS[n]??t)}function ia(e){return`${e}`}var Ot=class e{map;encoder;updates=null;cloneFrom=null;constructor(t={}){if(this.encoder=t.encoder||new Rd,t.fromString){if(t.fromObject)throw new _(2805,!1);this.map=$S(t.fromString,this.encoder)}else t.fromObject?(this.map=new Map,Object.keys(t.fromObject).forEach(n=>{let r=t.fromObject[n],o=Array.isArray(r)?r.map(ia):[ia(r)];this.map.set(n,o)})):this.map=null}has(t){return this.init(),this.map.has(t)}get(t){this.init();let n=this.map.get(t);return n?n[0]:null}getAll(t){return this.init(),this.map.get(t)||null}keys(){return this.init(),Array.from(this.map.keys())}append(t,n){return this.clone({param:t,value:n,op:"a"})}appendAll(t){let n=[];return Object.keys(t).forEach(r=>{let o=t[r];Array.isArray(o)?o.forEach(i=>{n.push({param:r,value:i,op:"a"})}):n.push({param:r,value:o,op:"a"})}),this.clone(n)}set(t,n){return this.clone({param:t,value:n,op:"s"})}delete(t,n){return this.clone({param:t,value:n,op:"d"})}toString(){return this.init(),this.keys().map(t=>{let n=this.encoder.encodeKey(t);return this.map.get(t).map(r=>n+"="+this.encoder.encodeValue(r)).join("&")}).filter(t=>t!=="").join("&")}clone(t){let n=new e({encoder:this.encoder});return n.cloneFrom=this.cloneFrom||this,n.updates=(this.updates||[]).concat(t),n}init(){if(this.map===null&&(this.map=new Map),this.cloneFrom!==null){this.cloneFrom.init();for(let[t,n]of this.cloneFrom.map.entries())this.map.set(t,n);this.updates.forEach(t=>{switch(t.op){case"a":case"s":let n=t.op==="a"?(this.map.get(t.param)||[]).slice():[];n.push(ia(t.value)),this.map.set(t.param,n);break;case"d":if(t.value!==void 0){let r=(this.map.get(t.param)||[]).slice(),o=r.indexOf(ia(t.value));o!==-1&&r.splice(o,1),r.length>0?this.map.set(t.param,r):this.map.delete(t.param)}else{this.map.delete(t.param);break}}}),this.cloneFrom=this.updates=null}}};function WS(e){switch(e){case"DELETE":case"GET":case"HEAD":case"OPTIONS":case"JSONP":return!1;default:return!0}}function Xh(e){return typeof ArrayBuffer<"u"&&e instanceof ArrayBuffer}function Jh(e){return typeof Blob<"u"&&e instanceof Blob}function eg(e){return typeof FormData<"u"&&e instanceof FormData}function qS(e){return typeof URLSearchParams<"u"&&e instanceof URLSearchParams}var Md="Content-Type",tg="Accept",og="text/plain",ig="application/json",ZS=`${ig}, ${og}, */*`,Br=class e{url;body=null;headers;context;reportProgress=!1;reportUploadProgress=!1;reportDownloadProgress=!1;withCredentials=!1;credentials;keepalive=!1;cache;priority;mode;redirect;referrer;integrity;referrerPolicy;responseType="json";method;params;urlWithParams;transferCache;timeout;constructor(t,n,r,o){this.url=n,this.method=t.toUpperCase();let i;if(WS(this.method)||o?(this.body=r!==void 0?r:null,i=o):i=r,i){if(this.reportProgress=!!i.reportProgress,this.reportUploadProgress=!!i.reportUploadProgress,this.reportDownloadProgress=!!i.reportDownloadProgress,this.withCredentials=!!i.withCredentials,this.keepalive=!!i.keepalive,i.responseType&&(this.responseType=i.responseType),i.headers&&(this.headers=i.headers),i.context&&(this.context=i.context),i.params&&(this.params=i.params),i.priority&&(this.priority=i.priority),i.cache&&(this.cache=i.cache),i.credentials&&(this.credentials=i.credentials),typeof i.timeout=="number"){if(i.timeout<1||!Number.isInteger(i.timeout))throw new _(2822,"");this.timeout=i.timeout}i.mode&&(this.mode=i.mode),i.redirect&&(this.redirect=i.redirect),i.integrity&&(this.integrity=i.integrity),i.referrer!==void 0&&(this.referrer=i.referrer),i.referrerPolicy&&(this.referrerPolicy=i.referrerPolicy),this.transferCache=i.transferCache}if(this.headers??=new Pt,this.context??=new Ad,!this.params)this.params=new Ot,this.urlWithParams=n;else{let s=this.params.toString();if(s.length===0)this.urlWithParams=n;else{let a=n,c="",l=n.indexOf("#");l!==-1&&(c=n.substring(l),a=n.substring(0,l));let d=a.indexOf("?"),u=d===-1?"?":d<a.length-1?"&":"";this.urlWithParams=a+u+s+c}}}serializeBody(){return this.body===null?null:typeof this.body=="string"||Xh(this.body)||Jh(this.body)||eg(this.body)||qS(this.body)?this.body:this.body instanceof Ot?this.body.toString():typeof this.body=="object"||typeof this.body=="boolean"||Array.isArray(this.body)?JSON.stringify(this.body):this.body.toString()}detectContentTypeHeader(){return this.body===null||eg(this.body)?null:Jh(this.body)?this.body.type||null:Xh(this.body)?null:typeof this.body=="string"?og:this.body instanceof Ot?"application/x-www-form-urlencoded;charset=UTF-8":typeof this.body=="object"||typeof this.body=="number"||typeof this.body=="boolean"?ig:null}clone(t={}){let n=t.method||this.method,r=t.url||this.url,o=t.responseType||this.responseType,i=t.keepalive??this.keepalive,s=t.priority||this.priority,a=t.cache||this.cache,c=t.mode||this.mode,l=t.redirect||this.redirect,d=t.credentials||this.credentials,u=t.referrer??this.referrer,m=t.integrity||this.integrity,f=t.referrerPolicy||this.referrerPolicy,h=t.transferCache??this.transferCache,b=t.timeout??this.timeout,x=t.body!==void 0?t.body:this.body,C=t.withCredentials??this.withCredentials,_e=t.reportProgress??this.reportProgress,an=t.reportUploadProgress??this.reportUploadProgress,Yr=t.reportDownloadProgress??this.reportDownloadProgress,Vt=t.headers||this.headers,Kr=t.params||this.params,Xr=t.context??this.context;return t.setHeaders!==void 0&&(Vt=Object.keys(t.setHeaders).reduce((rr,jt)=>rr.set(jt,t.setHeaders[jt]),Vt)),t.setParams&&(Kr=Object.keys(t.setParams).reduce((rr,jt)=>rr.set(jt,t.setParams[jt]),Kr)),new e(n,r,x,{params:Kr,headers:Vt,context:Xr,reportProgress:_e,reportUploadProgress:an,reportDownloadProgress:Yr,responseType:o,withCredentials:C,transferCache:h,keepalive:i,cache:a,priority:s,timeout:b,mode:c,redirect:l,credentials:d,referrer:u,integrity:m,referrerPolicy:f})}},Kn=(function(e){return e[e.Sent=0]="Sent",e[e.UploadProgress=1]="UploadProgress",e[e.ResponseHeader=2]="ResponseHeader",e[e.DownloadProgress=3]="DownloadProgress",e[e.Response=4]="Response",e[e.User=5]="User",e})(Kn||{}),Jo=class{headers;status;statusText;url;ok;type;redirected;responseType;constructor(t,n=200,r="OK"){this.headers=t.headers||new Pt,this.status=t.status!==void 0?t.status:n,this.statusText=t.statusText||r,this.url=t.url||null,this.redirected=t.redirected,this.responseType=t.responseType,this.ok=this.status>=200&&this.status<300}},kd=class e extends Jo{constructor(t={}){super(t)}type=Kn.ResponseHeader;clone(t={}){return new e({headers:t.headers||this.headers,status:t.status!==void 0?t.status:this.status,statusText:t.statusText||this.statusText,url:t.url||this.url||void 0})}},ei=class e extends Jo{body;constructor(t={}){super(t),this.body=t.body!==void 0?t.body:null}type=Kn.Response;clone(t={}){return new e({body:t.body!==void 0?t.body:this.body,headers:t.headers||this.headers,status:t.status!==void 0?t.status:this.status,statusText:t.statusText||this.statusText,url:t.url||this.url||void 0,redirected:t.redirected??this.redirected,responseType:t.responseType??this.responseType})}},Yn=class extends Jo{name="HttpErrorResponse";message;error;ok=!1;constructor(t){super(t,0,"Unknown Error"),this.status>=200&&this.status<300?this.message=`Http failure during parsing for ${t.url||"(unknown url)"}`:this.message=`Http failure response for ${t.url||"(unknown url)"}: ${t.status} ${t.statusText}`,this.error=t.error||null}},QS=200;var YS=/^\)\]\}',?\n/,W1=1024*1024,KS=new g("",{factory:()=>null}),XS=(()=>{class e{fetchImpl=p(Od,{optional:!0})?.fetch??((...n)=>globalThis.fetch(...n));ngZone=p(z);destroyRef=p(xe);maxResponseSize=p(KS);handle(n){return new O(r=>{let o=new AbortController,i=!1,s={next:c=>{c.type===Kn.Response&&(i=!0),r.next(c)},error:c=>{i=!0,r.error(c)},complete:()=>{i=!0,r.complete()}};this.doRequest(n,o.signal,s).then(Pd,c=>s.error(new Yn({error:c})));let a;return n.timeout&&(a=this.ngZone.runOutsideAngular(()=>setTimeout(()=>{o.signal.aborted||o.abort(new DOMException("signal timed out","TimeoutError"))},n.timeout))),()=>{a!==void 0&&clearTimeout(a),!i&&!o.signal.aborted&&o.abort()}})}async doRequest(n,r,o){let i=this.createRequestInit(n),s;try{let x=this.ngZone.runOutsideAngular(()=>this.fetchImpl(n.urlWithParams,w({signal:r},i)));JS(x),o.next({type:Kn.Sent}),s=await x}catch(x){o.error(new Yn({error:x,status:x.status??0,statusText:x.statusText,url:n.urlWithParams,headers:x.headers}));return}let a=new Pt(s.headers),c=s.statusText,l=s.url||n.urlWithParams,d=s.status,u=null,m=n.reportProgress||n.reportDownloadProgress;if(m&&o.next(new kd({headers:a,status:d,statusText:c,url:l})),s.body){let x=s.headers.get(Md)??"",C=s.headers.get("content-length"),_e=C!==null?Number(C):NaN;this.maxResponseSize!==null&&Number.isFinite(_e)&&_e>this.maxResponseSize&&(await s.body.cancel(),ng(this.maxResponseSize));let an=[],Yr=s.body.getReader(),Vt=0,Kr,Xr,rr=typeof Zone<"u"&&Zone.current,jt=!1;if(await this.ngZone.runOutsideAngular(async()=>{for(;;){if(this.destroyRef.destroyed){await Yr.cancel(),jt=!0;break}let{done:Ca,value:Na}=await Yr.read();if(Ca)break;if(an.push(Na),Vt+=Na.length,this.maxResponseSize!==null&&Vt>this.maxResponseSize&&(await Yr.cancel(),ng(this.maxResponseSize)),m){Xr=n.responseType==="text"?(Xr??"")+(Kr??=rg(x)).decode(Na,{stream:!0}):void 0;let fu=()=>o.next({type:Kn.DownloadProgress,total:Number.isFinite(_e)?_e:void 0,loaded:Vt,partialText:Xr});rr?rr.run(fu):fu()}}}),jt){o.complete();return}let _v=this.concatChunks(an,Vt);try{u=this.parseBody(n,_v,x,d)}catch(Ca){o.error(new Yn({error:Ca,headers:new Pt(s.headers),status:s.status,statusText:s.statusText,url:s.url||n.urlWithParams}));return}}d===0&&(d=u?QS:0);let f=d>=200&&d<300,h=s.redirected,b=s.type;f?(o.next(new ei({body:u,headers:a,status:d,statusText:c,url:l,redirected:h,responseType:b})),o.complete()):o.error(new Yn({error:u,headers:a,status:d,statusText:c,url:l,redirected:h,responseType:b}))}parseBody(n,r,o,i){switch(n.responseType){case"json":let s=new TextDecoder().decode(r).replace(YS,"");if(s==="")return null;try{return JSON.parse(s)}catch(a){if(i<200||i>=300)return s;throw a}case"text":return rg(o).decode(r);case"blob":return new Blob([r],{type:o});case"arraybuffer":return r.buffer}}createRequestInit(n){if(n.reportUploadProgress)throw new _(2824,!1);let r={},o;if(o=n.credentials,n.withCredentials&&(o="include"),n.headers.forEach((i,s)=>r[i]=s.join(",")),n.headers.has(tg)||(r[tg]=ZS),!n.headers.has(Md)){let i=n.detectContentTypeHeader();i!==null&&(r[Md]=i)}return{body:n.serializeBody(),method:n.method,headers:r,credentials:o,keepalive:n.keepalive,cache:n.cache,priority:n.priority,mode:n.mode,redirect:n.redirect,referrer:n.referrer,integrity:n.integrity,referrerPolicy:n.referrerPolicy}}concatChunks(n,r){let o=new Uint8Array(r),i=0;for(let s of n)o.set(s,i),i+=s.length;return o}static \u0275fac=function(r){return new(r||e)};static \u0275prov=Q({token:e,factory:e.\u0275fac})}return e})(),Od=class{};function Pd(){}function JS(e){e.then(Pd,Pd)}function ng(e){throw new _(-2825,!1)}var eI=/charset=\s*["']?([^;"'\s]+)["']?/i;function rg(e){let t=e.match(eI);if(t!==null)try{return new TextDecoder(t[1])}catch{}return new TextDecoder}var tI=new g("",{factory:()=>!0}),nI="XSRF-TOKEN",rI=new g("",{factory:()=>nI}),oI="X-XSRF-TOKEN",iI=new g("",{factory:()=>oI}),sI=(()=>{class e{cookieName=p(rI);doc=p(L);lastCookieString="";lastToken=null;parseCount=0;getToken(){let n=this.doc.cookie||"";return n!==this.lastCookieString&&(this.parseCount++,this.lastToken=Zo(n,this.cookieName),this.lastCookieString=n),this.lastToken}static \u0275fac=function(r){return new(r||e)};static \u0275prov=Q({token:e,factory:e.\u0275fac})}return e})(),aI=(()=>{class e{static \u0275fac=function(r){return new(r||e)};static \u0275prov=F({token:e,factory:function(r){let o=null;return r?o=new(r||e):o=M(sI),o},providedIn:"root"})}return e})();function cI(e,t){if(!p(tI)||e.method==="GET"||e.method==="HEAD")return t(e);try{let o=p(Js).href,{origin:i}=new URL(o),{origin:s}=new URL(e.url,i);if(i!==s)return t(e)}catch{return t(e)}let n=p(aI).getToken(),r=p(iI);return n!=null&&!e.headers.has(r)&&(e=e.clone({headers:e.headers.set(r,n)})),t(e)}function lI(e,t){return t(e)}function dI(e,t,n){return(r,o)=>_r(n,()=>t(r,i=>e(i,o)))}var uI=new g("",{factory:()=>[cI]}),sg=new g(""),fI=new g("",{factory:()=>!0});var pI=(()=>{class e{static \u0275fac=function(r){return new(r||e)};static \u0275prov=F({token:e,factory:function(r){let o=null;return r?o=new(r||e):o=M(XS),o},providedIn:"root"})}return e})();var mI=(()=>{class e{backend;injector;chain=null;pendingTasks=p(To);contributeToStability=p(fI);constructor(n,r){this.backend=n,this.injector=r}handle(n){if(this.chain===null){let o=this.injector.get(ag,null,{skipSelf:!0}),i=o!==null&&this.backend===o,s=this.injector.get(sg,[],i?{self:!0}:void 0),a=Array.from(new Set([...this.injector.get(uI),...s]));this.chain=a.reduceRight((c,l)=>dI(c,l,this.injector),lI)}let r=this.chain;if(this.contributeToStability){let o=this.pendingTasks.add();return Oe(()=>r(n,i=>this.backend.handle(i))).pipe(uo(o))}else return Oe(()=>r(n,o=>this.backend.handle(o)))}static \u0275fac=function(r){return new(r||e)(M(pI),M(ge))};static \u0275prov=F({token:e,factory:e.\u0275fac,providedIn:"root"})}return e})(),ag=(()=>{class e{static \u0275fac=function(r){return new(r||e)};static \u0275prov=F({token:e,factory:function(r){let o=null;return r?o=new(r||e):o=M(mI),o},providedIn:"root"})}return e})();function xd(e,t){return w({body:t},e)}var Fd=(()=>{class e{handler;constructor(n){this.handler=n}request(n,r,o={}){let i;if(n instanceof Br)i=n;else{let c;o.headers instanceof Pt?c=o.headers:c=new Pt(o.headers);let l;o.params&&(o.params instanceof Ot?l=o.params:l=new Ot({fromObject:o.params})),i=new Br(n,r,o.body!==void 0?o.body:null,{headers:c,context:o.context,params:l,reportProgress:o.reportProgress,reportUploadProgress:o.reportUploadProgress,reportDownloadProgress:o.reportDownloadProgress,responseType:o.responseType||"json",withCredentials:o.withCredentials,transferCache:o.transferCache,keepalive:o.keepalive,priority:o.priority,cache:o.cache,mode:o.mode,redirect:o.redirect,credentials:o.credentials,referrer:o.referrer,referrerPolicy:o.referrerPolicy,integrity:o.integrity,timeout:o.timeout})}let s=Qe(i).pipe(Ga(c=>this.handler.handle(c)));if(n instanceof Br||o.observe==="events")return s;let a=s.pipe(co(c=>c instanceof ei));switch(o.observe||"body"){case"body":switch(i.responseType){case"arraybuffer":return a.pipe(ie(c=>{if(c.body!==null&&!(c.body instanceof ArrayBuffer))throw new _(2806,!1);return c.body}));case"blob":return a.pipe(ie(c=>{if(c.body!==null&&!(c.body instanceof Blob))throw new _(2807,!1);return c.body}));case"text":return a.pipe(ie(c=>{if(c.body!==null&&typeof c.body!="string")throw new _(2808,!1);return c.body}));default:return a.pipe(ie(c=>c.body))}case"response":return a;default:throw new _(2809,!1)}}delete(n,r={}){return this.request("DELETE",n,r)}get(n,r={}){return this.request("GET",n,r)}head(n,r={}){return this.request("HEAD",n,r)}jsonp(n,r){return this.request("JSONP",n,{params:new Ot().append(r,"JSONP_CALLBACK"),observe:"body",responseType:"json"})}options(n,r={}){return this.request("OPTIONS",n,r)}patch(n,r,o={}){return this.request("PATCH",n,xd(o,r))}post(n,r,o={}){return this.request("POST",n,xd(o,r))}put(n,r,o={}){return this.request("PUT",n,xd(o,r))}static \u0275fac=function(r){return new(r||e)(M(ag))};static \u0275prov=F({token:e,factory:e.\u0275fac,providedIn:"root"})}return e})();var Ld=(()=>{class e{static \u0275fac=function(r){return new(r||e)};static \u0275prov=F({token:e,factory:function(r){let o=null;return r?o=new(r||e):o=M(gI),o},providedIn:"root"})}return e})(),gI=(()=>{class e extends Ld{_doc=p(L);sanitize(n,r){if(r==null)return null;switch(n){case Ie.NONE:return r;case Ie.HTML:return zn(r,"HTML")?ct(r):jl(this._doc,String(r)).toString();case Ie.STYLE:return zn(r,"Style")?ct(r):r;case Ie.SCRIPT:if(zn(r,"Script"))return ct(r);throw new _(5200,!1);case Ie.URL:return zn(r,"URL")?ct(r):$s(String(r));case Ie.RESOURCE_URL:if(zn(r,"ResourceURL"))return ct(r);throw new _(-5201,!1);default:throw new _(5202,!1)}}bypassSecurityTrustHtml(n){return Ol(n)}bypassSecurityTrustStyle(n){return Pl(n)}bypassSecurityTrustScript(n){return Fl(n)}bypassSecurityTrustUrl(n){return Ll(n)}bypassSecurityTrustResourceUrl(n){return Vl(n)}static \u0275fac=function(r){return new(r||e)};static \u0275prov=Q({token:e,factory:e.\u0275fac})}return e})();var cg={providers:[pd()]};function ti(e){return e.buttons===0||e.detail===0}function ni(e){let t=e.touches&&e.touches[0]||e.changedTouches&&e.changedTouches[0];return!!t&&t.identifier===-1&&(t.radiusX==null||t.radiusX===1)&&(t.radiusY==null||t.radiusY===1)}var Vd;function lg(){if(Vd==null){let e=typeof document<"u"?document.head:null;Vd=!!(e&&(e.createShadowRoot||e.attachShadow))}return Vd}function jd(e){if(lg()){let t=e.getRootNode?e.getRootNode():null;if(typeof ShadowRoot<"u"&&ShadowRoot&&t instanceof ShadowRoot)return t}return null}function tt(e){if(e.composedPath)try{return e.composedPath()[0]}catch{}return e.target}var Hd;try{Hd=typeof Intl<"u"&&Intl.v8BreakIterator}catch{Hd=!1}var We=(()=>{class e{_platformId=p(Ln);isBrowser=this._platformId?$h(this._platformId):typeof document=="object"&&!!document;EDGE=this.isBrowser&&/(edge)/i.test(navigator.userAgent);TRIDENT=this.isBrowser&&/(msie|trident)/i.test(navigator.userAgent);BLINK=this.isBrowser&&!!(window.chrome||Hd)&&typeof CSS<"u"&&!this.EDGE&&!this.TRIDENT;WEBKIT=this.isBrowser&&/AppleWebKit/i.test(navigator.userAgent)&&!this.BLINK&&!this.EDGE&&!this.TRIDENT;IOS=this.isBrowser&&/iPad|iPhone|iPod/.test(navigator.userAgent)&&!("MSStream"in window);FIREFOX=this.isBrowser&&/(firefox|minefield)/i.test(navigator.userAgent);ANDROID=this.isBrowser&&/android/i.test(navigator.userAgent)&&!this.TRIDENT;SAFARI=this.isBrowser&&/safari/i.test(navigator.userAgent)&&this.WEBKIT;static \u0275fac=function(r){return new(r||e)};static \u0275prov=Q({token:e,factory:e.\u0275fac})}return e})();var ri;function dg(){if(ri==null&&typeof window<"u")try{window.addEventListener("test",null,Object.defineProperty({},"passive",{get:()=>ri=!0}))}finally{ri=ri||!1}return ri}function Ur(e){return dg()?e:!!e.capture}function on(e){return e instanceof q?e.nativeElement:e}var ug=new g("cdk-input-modality-detector-options"),fg={ignoreKeys:[18,17,224,91,16]},pg=650,Bd={passive:!0,capture:!0},mg=(()=>{class e{_platform=p(We);_listenerCleanups;modalityDetected;modalityChanged;get mostRecentModality(){return this._modality.value}_mostRecentTarget=null;_modality=new vn(null);_options;_lastTouchMs=0;_onKeydown=n=>{this._options?.ignoreKeys?.some(r=>r===n.keyCode)||(this._modality.next("keyboard"),this._mostRecentTarget=tt(n))};_onMousedown=n=>{Date.now()-this._lastTouchMs<pg||(this._modality.next(ti(n)?"keyboard":"mouse"),this._mostRecentTarget=tt(n))};_onTouchstart=n=>{if(ni(n)){this._modality.next("keyboard");return}this._lastTouchMs=Date.now(),this._modality.next("touch"),this._mostRecentTarget=tt(n)};constructor(){let n=p(z),r=p(L),o=p(ug,{optional:!0});if(this._options=w(w({},fg),o),this.modalityDetected=this._modality.pipe(Qa(1)),this.modalityChanged=this.modalityDetected.pipe(Wa()),this._platform.isBrowser){let i=p(et).createRenderer(null,null);this._listenerCleanups=n.runOutsideAngular(()=>[i.listen(r,"keydown",this._onKeydown,Bd),i.listen(r,"mousedown",this._onMousedown,Bd),i.listen(r,"touchstart",this._onTouchstart,Bd)])}}ngOnDestroy(){this._modality.complete(),this._listenerCleanups?.forEach(n=>n())}static \u0275fac=function(r){return new(r||e)};static \u0275prov=Q({token:e,factory:e.\u0275fac})}return e})(),oi=(function(e){return e[e.IMMEDIATE=0]="IMMEDIATE",e[e.EVENTUAL=1]="EVENTUAL",e})(oi||{}),hg=new g("cdk-focus-monitor-default-options"),sa=Ur({passive:!0,capture:!0}),Xn=(()=>{class e{_ngZone=p(z);_platform=p(We);_inputModalityDetector=p(mg);_origin=null;_lastFocusOrigin=null;_windowFocused=!1;_windowFocusTimeoutId;_originTimeoutId;_originFromTouchInteraction=!1;_elementInfo=new Map;_monitoredElementCount=0;_rootNodeFocusListenerCount=new Map;_detectionMode;_windowFocusListener=()=>{this._windowFocused=!0,this._windowFocusTimeoutId=setTimeout(()=>this._windowFocused=!1)};_document=p(L);_stopInputModalityDetector=new de;constructor(){let n=p(hg,{optional:!0});this._detectionMode=n?.detectionMode||oi.IMMEDIATE}_rootNodeFocusAndBlurListener=n=>{let r=tt(n);for(let o=r;o;o=o.parentElement)n.type==="focus"?this._onFocus(n,o):this._onBlur(n,o)};monitor(n,r=!1){let o=on(n);if(!this._platform.isBrowser||o.nodeType!==1)return Qe();let i=jd(o)||this._document,s=this._elementInfo.get(o);if(s)return r&&(s.checkChildren=!0),s.subject;let a={checkChildren:r,subject:new de,rootNode:i};return this._elementInfo.set(o,a),this._registerGlobalListeners(a),a.subject}stopMonitoring(n){let r=on(n),o=this._elementInfo.get(r);o&&(o.subject.complete(),this._setClasses(r),this._elementInfo.delete(r),this._removeGlobalListeners(o))}focusVia(n,r,o){let i=on(n),s=this._document.activeElement;i===s?this._getClosestElementsInfo(i).forEach(([a,c])=>this._originChanged(a,r,c)):(this._setOrigin(r),typeof i.focus=="function"&&i.focus(o))}ngOnDestroy(){this._elementInfo.forEach((n,r)=>this.stopMonitoring(r))}_getWindow(){return this._document.defaultView||window}_getFocusOrigin(n){return this._origin?this._originFromTouchInteraction?this._shouldBeAttributedToTouch(n)?"touch":"program":this._origin:this._windowFocused&&this._lastFocusOrigin?this._lastFocusOrigin:n&&this._isLastInteractionFromInputLabel(n)?"mouse":"program"}_shouldBeAttributedToTouch(n){return this._detectionMode===oi.EVENTUAL||!!n?.contains(this._inputModalityDetector._mostRecentTarget)}_setClasses(n,r){n.classList.toggle("cdk-focused",!!r),n.classList.toggle("cdk-touch-focused",r==="touch"),n.classList.toggle("cdk-keyboard-focused",r==="keyboard"),n.classList.toggle("cdk-mouse-focused",r==="mouse"),n.classList.toggle("cdk-program-focused",r==="program")}_setOrigin(n,r=!1){this._ngZone.runOutsideAngular(()=>{if(this._origin=n,this._originFromTouchInteraction=n==="touch"&&r,this._detectionMode===oi.IMMEDIATE){clearTimeout(this._originTimeoutId);let o=this._originFromTouchInteraction?pg:1;this._originTimeoutId=setTimeout(()=>this._origin=null,o)}})}_onFocus(n,r){let o=this._elementInfo.get(r),i=tt(n);!o||!o.checkChildren&&r!==i||this._originChanged(r,this._getFocusOrigin(i),o)}_onBlur(n,r){let o=this._elementInfo.get(r);!o||o.checkChildren&&n.relatedTarget instanceof Node&&r.contains(n.relatedTarget)||(this._setClasses(r),this._emitOrigin(o,null))}_emitOrigin(n,r){n.subject.observers.length&&this._ngZone.run(()=>n.subject.next(r))}_registerGlobalListeners(n){if(!this._platform.isBrowser)return;let r=n.rootNode,o=this._rootNodeFocusListenerCount.get(r)||0;o||this._ngZone.runOutsideAngular(()=>{r.addEventListener("focus",this._rootNodeFocusAndBlurListener,sa),r.addEventListener("blur",this._rootNodeFocusAndBlurListener,sa)}),this._rootNodeFocusListenerCount.set(r,o+1),++this._monitoredElementCount===1&&(this._ngZone.runOutsideAngular(()=>{this._getWindow().addEventListener("focus",this._windowFocusListener)}),this._inputModalityDetector.modalityDetected.pipe(Ya(this._stopInputModalityDetector)).subscribe(i=>{this._setOrigin(i,!0)}))}_removeGlobalListeners(n){let r=n.rootNode;if(this._rootNodeFocusListenerCount.has(r)){let o=this._rootNodeFocusListenerCount.get(r);o>1?this._rootNodeFocusListenerCount.set(r,o-1):(r.removeEventListener("focus",this._rootNodeFocusAndBlurListener,sa),r.removeEventListener("blur",this._rootNodeFocusAndBlurListener,sa),this._rootNodeFocusListenerCount.delete(r))}--this._monitoredElementCount||(this._getWindow().removeEventListener("focus",this._windowFocusListener),this._stopInputModalityDetector.next(),clearTimeout(this._windowFocusTimeoutId),clearTimeout(this._originTimeoutId))}_originChanged(n,r,o){this._setClasses(n,r),this._emitOrigin(o,r),this._lastFocusOrigin=r}_getClosestElementsInfo(n){let r=[];return this._elementInfo.forEach((o,i)=>{(i===n||o.checkChildren&&i.contains(n))&&r.push([i,o])}),r}_isLastInteractionFromInputLabel(n){let{_mostRecentTarget:r,mostRecentModality:o}=this._inputModalityDetector;if(o!=="mouse"||!r||r===n||n.nodeName!=="INPUT"&&n.nodeName!=="TEXTAREA"||n.disabled)return!1;let i=n.labels;if(i){for(let s=0;s<i.length;s++)if(i[s].contains(r))return!0}return!1}static \u0275fac=function(r){return new(r||e)};static \u0275prov=Q({token:e,factory:e.\u0275fac})}return e})();var aa=new WeakMap,Ft=(()=>{class e{_appRef;_injector=p(ae);_environmentInjector=p(ge);load(n){let r=this._appRef=this._appRef||this._injector.get(en),o=aa.get(r);o||(o={loaders:new Set,refs:[]},aa.set(r,o),r.onDestroy(()=>{aa.get(r)?.refs.forEach(i=>i.destroy()),aa.delete(r)})),o.loaders.has(n)||(o.loaders.add(n),o.refs.push(Hh(n,{environmentInjector:this._environmentInjector})))}static \u0275fac=function(r){return new(r||e)};static \u0275prov=Q({token:e,factory:e.\u0275fac})}return e})();var ca;function bI(){if(ca===void 0&&(ca=null,typeof window<"u")){let e=window;if(e.trustedTypes!==void 0)try{ca=e.trustedTypes.createPolicy("angular#components",{createHTML:t=>t})}catch(t){console.error(t)}}return ca}function $r(e){return bI()?.createHTML(e)||e}var gg=new Set,Jn,Ud=(()=>{class e{_platform=p(We);_nonce=p(Vn,{optional:!0});_matchMedia;constructor(){this._matchMedia=this._platform.isBrowser&&window.matchMedia?window.matchMedia.bind(window):_I}matchMedia(n){return(this._platform.WEBKIT||this._platform.BLINK)&&yI(n,this._nonce),this._matchMedia(n)}static \u0275fac=function(r){return new(r||e)};static \u0275prov=Q({token:e,factory:e.\u0275fac})}return e})();function yI(e,t){if(!gg.has(e))try{Jn||(Jn=document.createElement("style"),t&&Jn.setAttribute("nonce",t),Jn.setAttribute("type","text/css"),document.head.appendChild(Jn)),Jn.sheet&&(Jn.sheet.insertRule(`@media ${e.replace(/[{}]/g,"")} {body{ }}`,0),gg.add(e))}catch(n){console.error(n)}}function _I(e){return{matches:e==="all"||e==="",media:e,addListener:()=>{},removeListener:()=>{}}}var vg=new Map,sn=class e{_appId=p(Fn);static _infix=`a${Math.floor(Math.random()*1e5).toString()}`;getId(t,n=!1){this._appId!=="ng"&&(t+=this._appId);let r=vg.get(t);return r===void 0?r=0:r++,vg.set(t,r),`${t}${n?e._infix+"-":""}${r}`}static \u0275fac=function(n){return new(n||e)};static \u0275prov=Q({token:e,factory:e.\u0275fac})};var EI=new g("MATERIAL_ANIMATIONS"),bg=null;function wI(){return p(EI,{optional:!0})?.animationsDisabled||p(zc,{optional:!0})==="NoopAnimations"?"di-disabled":(bg??=p(Ud).matchMedia("(prefers-reduced-motion)").matches,bg?"reduced-motion":"enabled")}function mt(){return wI()!=="enabled"}var qe=(function(e){return e[e.FADING_IN=0]="FADING_IN",e[e.VISIBLE=1]="VISIBLE",e[e.FADING_OUT=2]="FADING_OUT",e[e.HIDDEN=3]="HIDDEN",e})(qe||{}),$d=class{_renderer;element;config;_animationForciblyDisabledThroughCss;state=qe.HIDDEN;constructor(t,n,r,o=!1){this._renderer=t,this.element=n,this.config=r,this._animationForciblyDisabledThroughCss=o}fadeOut(){this._renderer.fadeOutRipple(this)}},yg=Ur({passive:!0,capture:!0}),zd=class{_events=new Map;addHandler(t,n,r,o){let i=this._events.get(n);if(i){let s=i.get(r);s?s.add(o):i.set(r,new Set([o]))}else this._events.set(n,new Map([[r,new Set([o])]])),t.runOutsideAngular(()=>{document.addEventListener(n,this._delegateEventHandler,yg)})}removeHandler(t,n,r){let o=this._events.get(t);if(!o)return;let i=o.get(n);i&&(i.delete(r),i.size===0&&o.delete(n),o.size===0&&(this._events.delete(t),document.removeEventListener(t,this._delegateEventHandler,yg)))}_delegateEventHandler=t=>{let n=tt(t);n&&this._events.get(t.type)?.forEach((r,o)=>{(o===n||o.contains(n))&&r.forEach(i=>i.handleEvent(t))})}},ii={enterDuration:225,exitDuration:150},SI=800,_g=Ur({passive:!0,capture:!0}),Eg=["mousedown","touchstart"],wg=["mouseup","mouseleave","touchend","touchcancel"],II=(()=>{class e{static \u0275fac=function(r){return new(r||e)};static \u0275cmp=B({type:e,selectors:[["ng-component"]],hostAttrs:["mat-ripple-style-loader",""],decls:0,vars:0,template:function(r,o){},styles:[`.mat-ripple {
  overflow: hidden;
  position: relative;
}
.mat-ripple:not(:empty) {
  transform: translateZ(0);
}

.mat-ripple.mat-ripple-unbounded {
  overflow: visible;
}

.mat-ripple-element {
  position: absolute;
  border-radius: 50%;
  pointer-events: none;
  transition: opacity, transform 0ms cubic-bezier(0, 0, 0.2, 1);
  transform: scale3d(0, 0, 0);
  background-color: var(--%NS%mat-ripple-color, color-mix(in srgb, var(--%NS%mat-sys-on-surface) 10%, transparent));
}
@media (forced-colors: active) {
  .mat-ripple-element {
    display: none;
  }
}
.cdk-drag-preview .mat-ripple-element, .cdk-drag-placeholder .mat-ripple-element {
  display: none;
}
`],encapsulation:2})}return e})(),si=class e{_target;_ngZone;_platform;_containerElement;_triggerElement=null;_isPointerDown=!1;_activeRipples=new Map;_mostRecentTransientRipple=null;_lastTouchStartEvent;_pointerUpEventsRegistered=!1;_containerRect=null;static _eventManager=new zd;constructor(t,n,r,o,i){this._target=t,this._ngZone=n,this._platform=o,o.isBrowser&&(this._containerElement=on(r)),i&&i.get(Ft).load(II)}fadeInRipple(t,n,r={}){let o=this._containerRect=this._containerRect||this._containerElement.getBoundingClientRect(),i=w(w({},ii),r.animation);r.centered&&(t=o.left+o.width/2,n=o.top+o.height/2);let s=r.radius||DI(t,n,o),a=t-o.left,c=n-o.top,l=i.enterDuration,d=document.createElement("div");d.classList.add("mat-ripple-element"),d.style.left=`${a-s}px`,d.style.top=`${c-s}px`,d.style.height=`${s*2}px`,d.style.width=`${s*2}px`,r.color!=null&&(d.style.backgroundColor=r.color),d.style.transitionDuration=`${l}ms`,this._containerElement.appendChild(d);let u=window.getComputedStyle(d),m=u.transitionProperty,f=u.transitionDuration,h=m==="none"||f==="0s"||f==="0s, 0s"||o.width===0&&o.height===0,b=new $d(this,d,r,h);d.style.transform="scale3d(1, 1, 1)",b.state=qe.FADING_IN,r.persistent||(this._mostRecentTransientRipple=b);let x=null;return!h&&(l||i.exitDuration)&&this._ngZone.runOutsideAngular(()=>{let C=()=>{x&&(x.fallbackTimer=null),clearTimeout(an),this._finishRippleTransition(b)},_e=()=>this._destroyRipple(b),an=setTimeout(_e,l+100);d.addEventListener("transitionend",C),d.addEventListener("transitioncancel",_e),x={onTransitionEnd:C,onTransitionCancel:_e,fallbackTimer:an}}),this._activeRipples.set(b,x),(h||!l)&&this._finishRippleTransition(b),b}fadeOutRipple(t){if(t.state===qe.FADING_OUT||t.state===qe.HIDDEN)return;let n=t.element,r=w(w({},ii),t.config.animation);n.style.transitionDuration=`${r.exitDuration}ms`,n.style.opacity="0",t.state=qe.FADING_OUT,(t._animationForciblyDisabledThroughCss||!r.exitDuration)&&this._finishRippleTransition(t)}fadeOutAll(){this._getActiveRipples().forEach(t=>t.fadeOut())}fadeOutAllNonPersistent(){this._getActiveRipples().forEach(t=>{t.config.persistent||t.fadeOut()})}setupTriggerEvents(t){let n=on(t);!this._platform.isBrowser||!n||n===this._triggerElement||(this._removeTriggerEvents(),this._triggerElement=n,Eg.forEach(r=>{e._eventManager.addHandler(this._ngZone,r,n,this)}))}handleEvent(t){t.type==="mousedown"?this._onMousedown(t):t.type==="touchstart"?this._onTouchStart(t):this._onPointerUp(),this._pointerUpEventsRegistered||(this._ngZone.runOutsideAngular(()=>{wg.forEach(n=>{this._triggerElement.addEventListener(n,this,_g)})}),this._pointerUpEventsRegistered=!0)}_finishRippleTransition(t){t.state===qe.FADING_IN?this._startFadeOutTransition(t):t.state===qe.FADING_OUT&&this._destroyRipple(t)}_startFadeOutTransition(t){let n=t===this._mostRecentTransientRipple,{persistent:r}=t.config;t.state=qe.VISIBLE,!r&&(!n||!this._isPointerDown)&&t.fadeOut()}_destroyRipple(t){let n=this._activeRipples.get(t)??null;this._activeRipples.delete(t),this._activeRipples.size||(this._containerRect=null),t===this._mostRecentTransientRipple&&(this._mostRecentTransientRipple=null),t.state=qe.HIDDEN,n!==null&&(t.element.removeEventListener("transitionend",n.onTransitionEnd),t.element.removeEventListener("transitioncancel",n.onTransitionCancel),n.fallbackTimer!==null&&clearTimeout(n.fallbackTimer)),t.element.remove()}_onMousedown(t){let n=ti(t),r=this._lastTouchStartEvent&&Date.now()<this._lastTouchStartEvent+SI;!this._target.rippleDisabled&&!n&&!r&&(this._isPointerDown=!0,this.fadeInRipple(t.clientX,t.clientY,this._target.rippleConfig))}_onTouchStart(t){if(!this._target.rippleDisabled&&!ni(t)){this._lastTouchStartEvent=Date.now(),this._isPointerDown=!0;let n=t.changedTouches;if(n)for(let r=0;r<n.length;r++)this.fadeInRipple(n[r].clientX,n[r].clientY,this._target.rippleConfig)}}_onPointerUp(){this._isPointerDown&&(this._isPointerDown=!1,this._getActiveRipples().forEach(t=>{let n=t.state===qe.VISIBLE||t.config.terminateOnPointerUp&&t.state===qe.FADING_IN;!t.config.persistent&&n&&t.fadeOut()}))}_getActiveRipples(){return Array.from(this._activeRipples.keys())}_removeTriggerEvents(){let t=this._triggerElement;t&&(Eg.forEach(n=>e._eventManager.removeHandler(n,t,this)),this._pointerUpEventsRegistered&&(wg.forEach(n=>t.removeEventListener(n,this,_g)),this._pointerUpEventsRegistered=!1))}};function DI(e,t,n){let r=Math.max(Math.abs(e-n.left),Math.abs(e-n.right)),o=Math.max(Math.abs(t-n.top),Math.abs(t-n.bottom));return Math.sqrt(r*r+o*o)}var Gd=new g("mat-ripple-global-options"),la=(()=>{class e{_elementRef=p(q);_animationsDisabled=mt();color;unbounded=!1;centered=!1;radius=0;animation;get disabled(){return this._disabled}set disabled(n){n&&this.fadeOutAllNonPersistent(),this._disabled=n,this._setupTriggerEventsIfEnabled()}_disabled=!1;get trigger(){return this._trigger||this._elementRef.nativeElement}set trigger(n){this._trigger=n,this._setupTriggerEventsIfEnabled()}_trigger;_rippleRenderer;_globalOptions;_isInitialized=!1;constructor(){let n=p(z),r=p(We),o=p(Gd,{optional:!0}),i=p(ae);this._globalOptions=o||{},this._rippleRenderer=new si(this,n,this._elementRef,r,i)}ngOnInit(){this._isInitialized=!0,this._setupTriggerEventsIfEnabled()}ngOnDestroy(){this._rippleRenderer._removeTriggerEvents()}fadeOutAll(){this._rippleRenderer.fadeOutAll()}fadeOutAllNonPersistent(){this._rippleRenderer.fadeOutAllNonPersistent()}get rippleConfig(){return{centered:this.centered,radius:this.radius,color:this.color,animation:w(w(w({},this._globalOptions.animation),this._animationsDisabled?{enterDuration:0,exitDuration:0}:{}),this.animation),terminateOnPointerUp:this._globalOptions.terminateOnPointerUp}}get rippleDisabled(){return this.disabled||!!this._globalOptions.disabled}_setupTriggerEventsIfEnabled(){!this.disabled&&this._isInitialized&&this._rippleRenderer.setupTriggerEvents(this.trigger)}launch(n,r=0,o){return typeof n=="number"?this._rippleRenderer.fadeInRipple(n,r,w(w({},this.rippleConfig),o)):this._rippleRenderer.fadeInRipple(0,0,w(w({},this.rippleConfig),n))}static \u0275fac=function(r){return new(r||e)};static \u0275dir=te({type:e,selectors:[["","mat-ripple",""],["","matRipple",""]],hostAttrs:[1,"mat-ripple"],hostVars:2,hostBindings:function(r,o){r&2&&j("mat-ripple-unbounded",o.unbounded)},inputs:{color:[0,"matRippleColor","color"],unbounded:[0,"matRippleUnbounded","unbounded"],centered:[0,"matRippleCentered","centered"],radius:[0,"matRippleRadius","radius"],animation:[0,"matRippleAnimation","animation"],disabled:[0,"matRippleDisabled","disabled"],trigger:[0,"matRippleTrigger","trigger"]},exportAs:["matRipple"]})}return e})();var CI={capture:!0},NI=["focus","mousedown","mouseenter","touchstart"],Wd="mat-ripple-loader-uninitialized",qd="mat-ripple-loader-class-name",Sg="mat-ripple-loader-centered",da="mat-ripple-loader-disabled",Ig=(()=>{class e{_document=p(L);_animationsDisabled=mt();_globalRippleOptions=p(Gd,{optional:!0});_platform=p(We);_ngZone=p(z);_injector=p(ae);_eventCleanups;_hosts=new Map;constructor(){let n=p(et).createRenderer(null,null);this._eventCleanups=this._ngZone.runOutsideAngular(()=>NI.map(r=>n.listen(this._document,r,this._onInteraction,CI)))}ngOnDestroy(){let n=this._hosts.keys();for(let r of n)this.destroyRipple(r);this._eventCleanups.forEach(r=>r())}configureRipple(n,r){n.setAttribute(Wd,this._globalRippleOptions?.namespace??""),(r.className||!n.hasAttribute(qd))&&n.setAttribute(qd,r.className||""),r.centered&&n.setAttribute(Sg,""),r.disabled&&n.setAttribute(da,"")}setDisabled(n,r){let o=this._hosts.get(n);o?(o.target.rippleDisabled=r,!r&&!o.hasSetUpEvents&&(o.hasSetUpEvents=!0,o.renderer.setupTriggerEvents(n))):r?n.setAttribute(da,""):n.removeAttribute(da)}_onInteraction=n=>{let r=tt(n);if(r instanceof HTMLElement){let o=r.closest(`[${Wd}="${this._globalRippleOptions?.namespace??""}"]`);o&&this._createRipple(o)}};_createRipple(n){if(!this._document||this._hosts.has(n))return;n.querySelector(".mat-ripple")?.remove();let r=this._document.createElement("span");r.classList.add("mat-ripple",n.getAttribute(qd)),n.append(r);let o=this._globalRippleOptions,i=this._animationsDisabled?0:o?.animation?.enterDuration??ii.enterDuration,s=this._animationsDisabled?0:o?.animation?.exitDuration??ii.exitDuration,a={rippleDisabled:this._animationsDisabled||o?.disabled||n.hasAttribute(da),rippleConfig:{centered:n.hasAttribute(Sg),terminateOnPointerUp:o?.terminateOnPointerUp,animation:{enterDuration:i,exitDuration:s}}},c=new si(a,this._ngZone,r,this._platform,this._injector),l=!a.rippleDisabled;l&&c.setupTriggerEvents(n),this._hosts.set(n,{target:a,renderer:c,hasSetUpEvents:l}),n.removeAttribute(Wd)}destroyRipple(n){let r=this._hosts.get(n);r&&(r.renderer._removeTriggerEvents(),this._hosts.delete(n))}static \u0275fac=function(r){return new(r||e)};static \u0275prov=Q({token:e,factory:e.\u0275fac})}return e})();var zr=(()=>{class e{static \u0275fac=function(r){return new(r||e)};static \u0275cmp=B({type:e,selectors:[["structural-styles"]],decls:0,vars:0,template:function(r,o){},styles:[`.mat-focus-indicator {
  position: relative;
}
.mat-focus-indicator::before {
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  position: absolute;
  box-sizing: border-box;
  pointer-events: none;
  display: var(--%NS%mat-focus-indicator-display, none);
  border-width: var(--%NS%mat-focus-indicator-border-width, 3px);
  border-style: var(--%NS%mat-focus-indicator-border-style, solid);
  border-color: var(--%NS%mat-focus-indicator-border-color, transparent);
  border-radius: var(--%NS%mat-focus-indicator-border-radius, 4px);
}
.mat-focus-indicator:focus-visible::before {
  content: "";
}

@media (forced-colors: active) {
  html {
    --%NS%mat-focus-indicator-display: block;
    --%NS%mat-focus-indicator-fallback-border-style: none;
  }
}
`],encapsulation:2})}return e})();var TI=new g("MAT_BUTTON_CONFIG");function Dg(e){return e==null?void 0:Qn(e)}var ua=(()=>{class e{_elementRef=p(q);_ngZone=p(z);_animationsDisabled=mt();_config=p(TI,{optional:!0});_focusMonitor=p(Xn);_cleanupClick;_renderer=p(Re);_rippleLoader=p(Ig);_isAnchor;_isFab=!1;color;get disableRipple(){return this._disableRipple}set disableRipple(n){this._disableRipple=n,this._updateRippleDisabled()}_disableRipple=!1;get disabled(){return this._disabled}set disabled(n){this._disabled=n,this._updateRippleDisabled()}_disabled=!1;ariaDisabled;disabledInteractive;tabIndex;set _tabindex(n){this.tabIndex=n}showProgress=Hr(!1,{transform:H});constructor(){p(Ft).load(zr);let n=this._elementRef.nativeElement;this._isAnchor=n.tagName==="A",this.disabledInteractive=this._config?.disabledInteractive??!1,this.color=this._config?.color??null,this._rippleLoader?.configureRipple(n,{className:"mat-mdc-button-ripple"})}ngAfterViewInit(){this._focusMonitor.monitor(this._elementRef,!0),this._isAnchor&&this._setupAsAnchor()}ngOnDestroy(){this._cleanupClick?.(),this._focusMonitor.stopMonitoring(this._elementRef),this._rippleLoader?.destroyRipple(this._elementRef.nativeElement)}focus(n="program",r){n?this._focusMonitor.focusVia(this._elementRef.nativeElement,n,r):this._elementRef.nativeElement.focus(r)}_getAriaDisabled(){return this.ariaDisabled!=null?this.ariaDisabled:this._isAnchor?this.disabled||null:this.disabled&&this.disabledInteractive?!0:null}_getDisabledAttribute(){return this.disabledInteractive||!this.disabled?null:!0}_updateRippleDisabled(){this._rippleLoader?.setDisabled(this._elementRef.nativeElement,this.disableRipple||this.disabled)}_getTabIndex(){return this._isAnchor?this.disabled&&!this.disabledInteractive?-1:this.tabIndex:this.tabIndex}_setupAsAnchor(){this._cleanupClick=this._ngZone.runOutsideAngular(()=>this._renderer.listen(this._elementRef.nativeElement,"click",n=>{this.disabled&&(n.preventDefault(),n.stopImmediatePropagation())}))}static \u0275fac=function(r){return new(r||e)};static \u0275dir=te({type:e,hostAttrs:[1,"mat-mdc-button-base"],hostVars:15,hostBindings:function(r,o){r&2&&(De("disabled",o._getDisabledAttribute())("aria-disabled",o._getAriaDisabled())("tabindex",o._getTabIndex()),kt(o.color?"mat-"+o.color:""),j("mat-mdc-button-progress-indicator-shown",o.showProgress())("mat-mdc-button-disabled",o.disabled)("mat-mdc-button-disabled-interactive",o.disabledInteractive)("mat-unthemed",!o.color)("_mat-animation-noopable",o._animationsDisabled))},inputs:{color:"color",disableRipple:[2,"disableRipple","disableRipple",H],disabled:[2,"disabled","disabled",H],ariaDisabled:[2,"aria-disabled","ariaDisabled",H],disabledInteractive:[2,"disabledInteractive","disabledInteractive",H],tabIndex:[2,"tabIndex","tabIndex",Dg],_tabindex:[2,"tabindex","_tabindex",Dg],showProgress:[1,"showProgress"]}})}return e})();var Pe=(()=>{class e{static \u0275fac=function(r){return new(r||e)};static \u0275mod=ee({type:e});static \u0275inj=K({})}return e})();var fa=(()=>{class e{static \u0275fac=function(r){return new(r||e)};static \u0275mod=ee({type:e});static \u0275inj=K({imports:[Pe]})}return e})();var Zd=[[["",8,"material-icons",3,"iconPositionEnd",""],["mat-icon",3,"iconPositionEnd",""],["","matButtonIcon","",3,"iconPositionEnd",""]],"*",[["","iconPositionEnd","",8,"material-icons"],["mat-icon","iconPositionEnd",""],["","matButtonIcon","","iconPositionEnd",""]],[["","progressIndicator",""]]],Qd=[".material-icons:not([iconPositionEnd]), mat-icon:not([iconPositionEnd]), [matButtonIcon]:not([iconPositionEnd])","*",".material-icons[iconPositionEnd], mat-icon[iconPositionEnd], [matButtonIcon][iconPositionEnd]","[progressIndicator]"];function MI(e,t){e&1&&(Te(0,"div",2),k(1,3),Me())}function xI(e,t){e&1&&(Te(0,"div",2),k(1,3),Me())}function AI(e,t){e&1&&(Te(0,"div",2),k(1,3),Me())}var RI=`.mat-mdc-fab-base {
  -webkit-user-select: none;
  user-select: none;
  position: relative;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  box-sizing: border-box;
  width: 56px;
  height: 56px;
  padding: 0;
  border: none;
  fill: currentColor;
  text-decoration: none;
  cursor: pointer;
  -moz-appearance: none;
  -webkit-appearance: none;
  overflow: visible;
  transition: box-shadow 280ms cubic-bezier(0.4, 0, 0.2, 1), opacity 15ms linear 30ms, transform 270ms 0ms cubic-bezier(0, 0, 0.2, 1);
  flex-shrink: 0;
  -webkit-tap-highlight-color: transparent;
}
.mat-mdc-fab-base .mat-mdc-button-ripple,
.mat-mdc-fab-base .mat-mdc-button-persistent-ripple,
.mat-mdc-fab-base .mat-mdc-button-persistent-ripple::before {
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  position: absolute;
  pointer-events: none;
  border-radius: inherit;
}
.mat-mdc-fab-base .mat-mdc-button-ripple {
  overflow: hidden;
}
.mat-mdc-fab-base .mat-mdc-button-persistent-ripple::before {
  content: "";
  opacity: 0;
}
.mat-mdc-fab-base .mdc-button__label,
.mat-mdc-fab-base .mat-icon {
  z-index: 1;
  position: relative;
}
.mat-mdc-fab-base .mat-focus-indicator {
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  position: absolute;
}
.mat-mdc-fab-base:focus-visible > .mat-focus-indicator::before {
  content: "";
}
.mat-mdc-fab-base._mat-animation-noopable {
  transition: none !important;
  animation: none !important;
}
.mat-mdc-fab-base::before {
  position: absolute;
  box-sizing: border-box;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  border: 1px solid transparent;
  border-radius: inherit;
  content: "";
  pointer-events: none;
}
.mat-mdc-fab-base[hidden] {
  display: none;
}
.mat-mdc-fab-base::-moz-focus-inner {
  padding: 0;
  border: 0;
}
.mat-mdc-fab-base:active, .mat-mdc-fab-base:focus {
  outline: none;
}
.mat-mdc-fab-base:hover {
  cursor: pointer;
}
.mat-mdc-fab-base > svg {
  width: 100%;
}
.mat-mdc-fab-base .mat-icon, .mat-mdc-fab-base .material-icons {
  transition: transform 180ms 90ms cubic-bezier(0, 0, 0.2, 1);
  fill: currentColor;
  will-change: transform;
}
.mat-mdc-fab-base .mat-focus-indicator::before {
  margin: calc(calc(var(--%NS%mat-focus-indicator-border-width, 3px) + 2px) * -1);
  border-radius: calc(var(--%NS%mat-fab-container-shape, var(--%NS%mat-sys-corner-large)) + calc(var(--%NS%mat-focus-indicator-border-width, 3px) + 2px));
}
.mat-mdc-fab-base[disabled], .mat-mdc-fab-base.mat-mdc-button-disabled {
  cursor: default;
  pointer-events: none;
}
.mat-mdc-fab-base[disabled], .mat-mdc-fab-base[disabled]:focus, .mat-mdc-fab-base.mat-mdc-button-disabled, .mat-mdc-fab-base.mat-mdc-button-disabled:focus {
  box-shadow: none;
}
.mat-mdc-fab-base.mat-mdc-button-disabled-interactive {
  pointer-events: auto;
}

.mat-mdc-fab {
  background-color: var(--%NS%mat-fab-container-color, var(--%NS%mat-sys-primary-container));
  border-radius: var(--%NS%mat-fab-container-shape, var(--%NS%mat-sys-corner-large));
  color: var(--%NS%mat-fab-foreground-color, var(--%NS%mat-sys-on-primary-container, inherit));
  box-shadow: var(--%NS%mat-fab-container-elevation-shadow, var(--%NS%mat-sys-level3));
}
@media (hover: hover) {
  .mat-mdc-fab:hover {
    box-shadow: var(--%NS%mat-fab-hover-container-elevation-shadow, var(--%NS%mat-sys-level4));
  }
}
.mat-mdc-fab:focus {
  box-shadow: var(--%NS%mat-fab-focus-container-elevation-shadow, var(--%NS%mat-sys-level3));
}
.mat-mdc-fab:active, .mat-mdc-fab:focus:active {
  box-shadow: var(--%NS%mat-fab-pressed-container-elevation-shadow, var(--%NS%mat-sys-level3));
}
.mat-mdc-fab[disabled], .mat-mdc-fab.mat-mdc-button-disabled {
  cursor: default;
  pointer-events: none;
  color: var(--%NS%mat-fab-disabled-state-foreground-color, color-mix(in srgb, var(--%NS%mat-sys-on-surface) 38%, transparent));
  background-color: var(--%NS%mat-fab-disabled-state-container-color, color-mix(in srgb, var(--%NS%mat-sys-on-surface) 12%, transparent));
}
.mat-mdc-fab.mat-mdc-button-disabled-interactive {
  pointer-events: auto;
}
.mat-mdc-fab .mat-mdc-button-touch-target {
  position: absolute;
  top: 50%;
  height: var(--%NS%mat-fab-touch-target-size, 48px);
  display: var(--%NS%mat-fab-touch-target-display, block);
  left: 50%;
  width: var(--%NS%mat-fab-touch-target-size, 48px);
  transform: translate(-50%, -50%);
}
.mat-mdc-fab .mat-ripple-element {
  background-color: var(--%NS%mat-fab-ripple-color, color-mix(in srgb, var(--%NS%mat-sys-on-primary-container) calc(var(--%NS%mat-sys-pressed-state-layer-opacity) * 100%), transparent));
}
.mat-mdc-fab .mat-mdc-button-persistent-ripple::before {
  background-color: var(--%NS%mat-fab-state-layer-color, var(--%NS%mat-sys-on-primary-container));
}
.mat-mdc-fab.mat-mdc-button-disabled .mat-mdc-button-persistent-ripple::before {
  background-color: var(--%NS%mat-fab-disabled-state-layer-color);
}
.mat-mdc-fab:hover > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--%NS%mat-fab-hover-state-layer-opacity, var(--%NS%mat-sys-hover-state-layer-opacity));
}
.mat-mdc-fab.cdk-program-focused > .mat-mdc-button-persistent-ripple::before, .mat-mdc-fab.cdk-keyboard-focused > .mat-mdc-button-persistent-ripple::before, .mat-mdc-fab.mat-mdc-button-disabled-interactive:focus > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--%NS%mat-fab-focus-state-layer-opacity, var(--%NS%mat-sys-focus-state-layer-opacity));
}
.mat-mdc-fab:active > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--%NS%mat-fab-pressed-state-layer-opacity, var(--%NS%mat-sys-pressed-state-layer-opacity));
}

.mat-mdc-mini-fab {
  width: 40px;
  height: 40px;
  background-color: var(--%NS%mat-fab-small-container-color, var(--%NS%mat-sys-primary-container));
  border-radius: var(--%NS%mat-fab-small-container-shape, var(--%NS%mat-sys-corner-medium));
  color: var(--%NS%mat-fab-small-foreground-color, var(--%NS%mat-sys-on-primary-container, inherit));
  box-shadow: var(--%NS%mat-fab-small-container-elevation-shadow, var(--%NS%mat-sys-level3));
}
@media (hover: hover) {
  .mat-mdc-mini-fab:hover {
    box-shadow: var(--%NS%mat-fab-small-hover-container-elevation-shadow, var(--%NS%mat-sys-level4));
  }
}
.mat-mdc-mini-fab:focus {
  box-shadow: var(--%NS%mat-fab-small-focus-container-elevation-shadow, var(--%NS%mat-sys-level3));
}
.mat-mdc-mini-fab:active, .mat-mdc-mini-fab:focus:active {
  box-shadow: var(--%NS%mat-fab-small-pressed-container-elevation-shadow, var(--%NS%mat-sys-level3));
}
.mat-mdc-mini-fab .mat-focus-indicator::before {
  border-radius: calc(var(--%NS%mat-fab-small-container-shape, var(--%NS%mat-sys-corner-medium)) + calc(var(--%NS%mat-focus-indicator-border-width, 3px) + 2px));
}
.mat-mdc-mini-fab[disabled], .mat-mdc-mini-fab.mat-mdc-button-disabled {
  cursor: default;
  pointer-events: none;
  color: var(--%NS%mat-fab-small-disabled-state-foreground-color, color-mix(in srgb, var(--%NS%mat-sys-on-surface) 38%, transparent));
  background-color: var(--%NS%mat-fab-small-disabled-state-container-color, color-mix(in srgb, var(--%NS%mat-sys-on-surface) 12%, transparent));
}
.mat-mdc-mini-fab.mat-mdc-button-disabled-interactive {
  pointer-events: auto;
}
.mat-mdc-mini-fab .mat-mdc-button-touch-target {
  position: absolute;
  top: 50%;
  height: var(--%NS%mat-fab-small-touch-target-size, 48px);
  display: var(--%NS%mat-fab-small-touch-target-display);
  left: 50%;
  width: var(--%NS%mat-fab-small-touch-target-size, 48px);
  transform: translate(-50%, -50%);
}
.mat-mdc-mini-fab .mat-ripple-element {
  background-color: var(--%NS%mat-fab-small-ripple-color, color-mix(in srgb, var(--%NS%mat-sys-on-primary-container) calc(var(--%NS%mat-sys-pressed-state-layer-opacity) * 100%), transparent));
}
.mat-mdc-mini-fab .mat-mdc-button-persistent-ripple::before {
  background-color: var(--%NS%mat-fab-small-state-layer-color, var(--%NS%mat-sys-on-primary-container));
}
.mat-mdc-mini-fab.mat-mdc-button-disabled .mat-mdc-button-persistent-ripple::before {
  background-color: var(--%NS%mat-fab-small-disabled-state-layer-color);
}
.mat-mdc-mini-fab:hover > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--%NS%mat-fab-small-hover-state-layer-opacity, var(--%NS%mat-sys-hover-state-layer-opacity));
}
.mat-mdc-mini-fab.cdk-program-focused > .mat-mdc-button-persistent-ripple::before, .mat-mdc-mini-fab.cdk-keyboard-focused > .mat-mdc-button-persistent-ripple::before, .mat-mdc-mini-fab.mat-mdc-button-disabled-interactive:focus > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--%NS%mat-fab-small-focus-state-layer-opacity, var(--%NS%mat-sys-focus-state-layer-opacity));
}
.mat-mdc-mini-fab:active > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--%NS%mat-fab-small-pressed-state-layer-opacity, var(--%NS%mat-sys-pressed-state-layer-opacity));
}

.mat-mdc-extended-fab {
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  padding-left: 20px;
  padding-right: 20px;
  width: auto;
  max-width: 100%;
  line-height: normal;
  box-shadow: var(--%NS%mat-fab-extended-container-elevation-shadow, var(--%NS%mat-sys-level3));
  height: var(--%NS%mat-fab-extended-container-height, 56px);
  border-radius: var(--%NS%mat-fab-extended-container-shape, var(--%NS%mat-sys-corner-large));
  font-family: var(--%NS%mat-fab-extended-label-text-font, var(--%NS%mat-sys-label-large-font));
  font-size: var(--%NS%mat-fab-extended-label-text-size, var(--%NS%mat-sys-label-large-size));
  font-weight: var(--%NS%mat-fab-extended-label-text-weight, var(--%NS%mat-sys-label-large-weight));
  letter-spacing: var(--%NS%mat-fab-extended-label-text-tracking, var(--%NS%mat-sys-label-large-tracking));
}
@media (hover: hover) {
  .mat-mdc-extended-fab:hover {
    box-shadow: var(--%NS%mat-fab-extended-hover-container-elevation-shadow, var(--%NS%mat-sys-level4));
  }
}
.mat-mdc-extended-fab:focus {
  box-shadow: var(--%NS%mat-fab-extended-focus-container-elevation-shadow, var(--%NS%mat-sys-level3));
}
.mat-mdc-extended-fab:active, .mat-mdc-extended-fab:focus:active {
  box-shadow: var(--%NS%mat-fab-extended-pressed-container-elevation-shadow, var(--%NS%mat-sys-level3));
}
.mat-mdc-extended-fab[disabled], .mat-mdc-extended-fab.mat-mdc-button-disabled {
  cursor: default;
  pointer-events: none;
}
.mat-mdc-extended-fab[disabled], .mat-mdc-extended-fab[disabled]:focus, .mat-mdc-extended-fab.mat-mdc-button-disabled, .mat-mdc-extended-fab.mat-mdc-button-disabled:focus {
  box-shadow: none;
}
.mat-mdc-extended-fab.mat-mdc-button-disabled-interactive {
  pointer-events: auto;
}
[dir=rtl] .mat-mdc-extended-fab .mdc-button__label + .mat-icon, [dir=rtl] .mat-mdc-extended-fab .mdc-button__label + .material-icons,
.mat-mdc-extended-fab > .mat-icon,
.mat-mdc-extended-fab > .material-icons {
  margin-left: -8px;
  margin-right: 12px;
}
.mat-mdc-extended-fab .mdc-button__label + .mat-icon,
.mat-mdc-extended-fab .mdc-button__label + .material-icons, [dir=rtl] .mat-mdc-extended-fab > .mat-icon, [dir=rtl] .mat-mdc-extended-fab > .material-icons {
  margin-left: 12px;
  margin-right: -8px;
}
.mat-mdc-extended-fab .mat-mdc-button-touch-target {
  width: 100%;
}

.mat-mdc-button-progress-indicator-container {
  position: absolute;
  inset-inline-start: 0;
  margin-block-start: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  box-sizing: border-box;
}

.mat-mdc-button-progress-indicator-shown mat-icon,
.mat-mdc-button-progress-indicator-shown [matButtonIcon],
.mat-mdc-button-progress-indicator-shown .mdc-button__label {
  visibility: hidden;
}
`,Cg=new Map([["text",["mat-mdc-button"]],["filled",["mdc-button--unelevated","mat-mdc-unelevated-button"]],["elevated",["mdc-button--raised","mat-mdc-raised-button"]],["outlined",["mdc-button--outlined","mat-mdc-outlined-button"]],["tonal",["mat-tonal-button"]]]),Ng=(()=>{class e extends ua{get appearance(){return this._appearance}set appearance(n){this.setAppearance(n||this._config?.defaultAppearance||"text")}_appearance=null;constructor(){super();let n=kI(this._elementRef.nativeElement);n&&this.setAppearance(n)}setAppearance(n){if(n===this._appearance)return;let r=this._elementRef.nativeElement.classList,o=this._appearance?Cg.get(this._appearance):null,i=Cg.get(n);o&&r.remove(...o),r.add(...i),this._appearance=n}static \u0275fac=function(r){return new(r||e)};static \u0275cmp=B({type:e,selectors:[["button","matButton",""],["a","matButton",""],["button","mat-button",""],["button","mat-raised-button",""],["button","mat-flat-button",""],["button","mat-stroked-button",""],["a","mat-button",""],["a","mat-raised-button",""],["a","mat-flat-button",""],["a","mat-stroked-button",""]],hostAttrs:[1,"mdc-button"],inputs:{appearance:[0,"matButton","appearance"]},exportAs:["matButton","matAnchor"],features:[Ve],ngContentSelectors:Qd,decls:8,vars:5,consts:[[1,"mat-mdc-button-persistent-ripple"],[1,"mdc-button__label"],[1,"mat-mdc-button-progress-indicator-container"],[1,"mat-focus-indicator"],[1,"mat-mdc-button-touch-target"]],template:function(r,o){r&1&&(X(Zd),ut(0,"span",0),k(1),Te(2,"span",1),k(3,1),Me(),k(4,2),lt(5,MI,2,0,"div",2),ut(6,"span",3)(7,"span",4)),r&2&&(j("mdc-button__ripple",!o._isFab)("mdc-fab__ripple",o._isFab),W(5),dt(o.showProgress()?5:-1))},styles:[`.mat-mdc-button-base {
  text-decoration: none;
}
.mat-mdc-button-base .mat-icon {
  min-height: fit-content;
  flex-shrink: 0;
}
@media (hover: none) {
  .mat-mdc-button-base:hover > span.mat-mdc-button-persistent-ripple::before {
    opacity: 0;
  }
}

.mdc-button {
  -webkit-user-select: none;
  user-select: none;
  position: relative;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  box-sizing: border-box;
  min-width: 64px;
  border: none;
  outline: none;
  line-height: inherit;
  -webkit-appearance: none;
  overflow: visible;
  vertical-align: middle;
  background: transparent;
  padding: 0 8px;
}
.mdc-button::-moz-focus-inner {
  padding: 0;
  border: 0;
}
.mdc-button:active {
  outline: none;
}
.mdc-button:hover {
  cursor: pointer;
}
.mdc-button:disabled {
  cursor: default;
  pointer-events: none;
}
.mdc-button[hidden] {
  display: none;
}
.mdc-button .mdc-button__label {
  position: relative;
}

.mat-mdc-button {
  padding: 0 var(--%NS%mat-button-text-horizontal-padding, 12px);
  height: var(--%NS%mat-button-text-container-height, 40px);
  font-family: var(--%NS%mat-button-text-label-text-font, var(--%NS%mat-sys-label-large-font));
  font-size: var(--%NS%mat-button-text-label-text-size, var(--%NS%mat-sys-label-large-size));
  letter-spacing: var(--%NS%mat-button-text-label-text-tracking, var(--%NS%mat-sys-label-large-tracking));
  text-transform: var(--%NS%mat-button-text-label-text-transform);
  font-weight: var(--%NS%mat-button-text-label-text-weight, var(--%NS%mat-sys-label-large-weight));
}
.mat-mdc-button, .mat-mdc-button .mdc-button__ripple {
  border-radius: var(--%NS%mat-button-text-container-shape, var(--%NS%mat-sys-corner-full));
}
.mat-mdc-button:not(:disabled) {
  color: var(--%NS%mat-button-text-label-text-color, var(--%NS%mat-sys-primary));
}
.mat-mdc-button[disabled], .mat-mdc-button.mat-mdc-button-disabled {
  cursor: default;
  pointer-events: none;
  color: var(--%NS%mat-button-text-disabled-label-text-color, color-mix(in srgb, var(--%NS%mat-sys-on-surface) 38%, transparent));
}
.mat-mdc-button.mat-mdc-button-disabled-interactive {
  pointer-events: auto;
}
.mat-mdc-button:has(.material-icons, mat-icon, [matButtonIcon]) {
  padding: 0 var(--%NS%mat-button-text-with-icon-horizontal-padding, 16px);
}
.mat-mdc-button > .mat-icon {
  margin-right: var(--%NS%mat-button-text-icon-spacing, 8px);
  margin-left: var(--%NS%mat-button-text-icon-offset, -4px);
}
[dir=rtl] .mat-mdc-button > .mat-icon {
  margin-right: var(--%NS%mat-button-text-icon-offset, -4px);
  margin-left: var(--%NS%mat-button-text-icon-spacing, 8px);
}
.mat-mdc-button .mdc-button__label + .mat-icon {
  margin-right: var(--%NS%mat-button-text-icon-offset, -4px);
  margin-left: var(--%NS%mat-button-text-icon-spacing, 8px);
}
[dir=rtl] .mat-mdc-button .mdc-button__label + .mat-icon {
  margin-right: var(--%NS%mat-button-text-icon-spacing, 8px);
  margin-left: var(--%NS%mat-button-text-icon-offset, -4px);
}
.mat-mdc-button .mat-ripple-element {
  background-color: var(--%NS%mat-button-text-ripple-color, color-mix(in srgb, var(--%NS%mat-sys-primary) calc(var(--%NS%mat-sys-pressed-state-layer-opacity) * 100%), transparent));
}
.mat-mdc-button .mat-mdc-button-persistent-ripple::before {
  background-color: var(--%NS%mat-button-text-state-layer-color, var(--%NS%mat-sys-primary));
}
.mat-mdc-button.mat-mdc-button-disabled .mat-mdc-button-persistent-ripple::before {
  background-color: var(--%NS%mat-button-text-disabled-state-layer-color, var(--%NS%mat-sys-on-surface-variant));
}
.mat-mdc-button:hover > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--%NS%mat-button-text-hover-state-layer-opacity, var(--%NS%mat-sys-hover-state-layer-opacity));
}
.mat-mdc-button.cdk-program-focused > .mat-mdc-button-persistent-ripple::before, .mat-mdc-button.cdk-keyboard-focused > .mat-mdc-button-persistent-ripple::before, .mat-mdc-button.mat-mdc-button-disabled-interactive:focus > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--%NS%mat-button-text-focus-state-layer-opacity, var(--%NS%mat-sys-focus-state-layer-opacity));
}
.mat-mdc-button:active > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--%NS%mat-button-text-pressed-state-layer-opacity, var(--%NS%mat-sys-pressed-state-layer-opacity));
}
.mat-mdc-button .mat-mdc-button-touch-target {
  position: absolute;
  top: 50%;
  height: var(--%NS%mat-button-text-touch-target-size, 48px);
  display: var(--%NS%mat-button-text-touch-target-display, block);
  left: 0;
  right: 0;
  transform: translateY(-50%);
}

.mat-mdc-unelevated-button {
  transition: box-shadow 280ms cubic-bezier(0.4, 0, 0.2, 1);
  height: var(--%NS%mat-button-filled-container-height, 40px);
  font-family: var(--%NS%mat-button-filled-label-text-font, var(--%NS%mat-sys-label-large-font));
  font-size: var(--%NS%mat-button-filled-label-text-size, var(--%NS%mat-sys-label-large-size));
  letter-spacing: var(--%NS%mat-button-filled-label-text-tracking, var(--%NS%mat-sys-label-large-tracking));
  text-transform: var(--%NS%mat-button-filled-label-text-transform);
  font-weight: var(--%NS%mat-button-filled-label-text-weight, var(--%NS%mat-sys-label-large-weight));
  padding: 0 var(--%NS%mat-button-filled-horizontal-padding, 24px);
}
.mat-mdc-unelevated-button > .mat-icon {
  margin-right: var(--%NS%mat-button-filled-icon-spacing, 8px);
  margin-left: var(--%NS%mat-button-filled-icon-offset, -8px);
}
[dir=rtl] .mat-mdc-unelevated-button > .mat-icon {
  margin-right: var(--%NS%mat-button-filled-icon-offset, -8px);
  margin-left: var(--%NS%mat-button-filled-icon-spacing, 8px);
}
.mat-mdc-unelevated-button .mdc-button__label + .mat-icon {
  margin-right: var(--%NS%mat-button-filled-icon-offset, -8px);
  margin-left: var(--%NS%mat-button-filled-icon-spacing, 8px);
}
[dir=rtl] .mat-mdc-unelevated-button .mdc-button__label + .mat-icon {
  margin-right: var(--%NS%mat-button-filled-icon-spacing, 8px);
  margin-left: var(--%NS%mat-button-filled-icon-offset, -8px);
}
.mat-mdc-unelevated-button .mat-ripple-element {
  background-color: var(--%NS%mat-button-filled-ripple-color, color-mix(in srgb, var(--%NS%mat-sys-on-primary) calc(var(--%NS%mat-sys-pressed-state-layer-opacity) * 100%), transparent));
}
.mat-mdc-unelevated-button .mat-mdc-button-persistent-ripple::before {
  background-color: var(--%NS%mat-button-filled-state-layer-color, var(--%NS%mat-sys-on-primary));
}
.mat-mdc-unelevated-button.mat-mdc-button-disabled .mat-mdc-button-persistent-ripple::before {
  background-color: var(--%NS%mat-button-filled-disabled-state-layer-color, var(--%NS%mat-sys-on-surface-variant));
}
.mat-mdc-unelevated-button:hover > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--%NS%mat-button-filled-hover-state-layer-opacity, var(--%NS%mat-sys-hover-state-layer-opacity));
}
.mat-mdc-unelevated-button.cdk-program-focused > .mat-mdc-button-persistent-ripple::before, .mat-mdc-unelevated-button.cdk-keyboard-focused > .mat-mdc-button-persistent-ripple::before, .mat-mdc-unelevated-button.mat-mdc-button-disabled-interactive:focus > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--%NS%mat-button-filled-focus-state-layer-opacity, var(--%NS%mat-sys-focus-state-layer-opacity));
}
.mat-mdc-unelevated-button:active > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--%NS%mat-button-filled-pressed-state-layer-opacity, var(--%NS%mat-sys-pressed-state-layer-opacity));
}
.mat-mdc-unelevated-button .mat-mdc-button-touch-target {
  position: absolute;
  top: 50%;
  height: var(--%NS%mat-button-filled-touch-target-size, 48px);
  display: var(--%NS%mat-button-filled-touch-target-display, block);
  left: 0;
  right: 0;
  transform: translateY(-50%);
}
.mat-mdc-unelevated-button:not(:disabled) {
  color: var(--%NS%mat-button-filled-label-text-color, var(--%NS%mat-sys-on-primary));
  background-color: var(--%NS%mat-button-filled-container-color, var(--%NS%mat-sys-primary));
}
.mat-mdc-unelevated-button, .mat-mdc-unelevated-button .mdc-button__ripple {
  border-radius: var(--%NS%mat-button-filled-container-shape, var(--%NS%mat-sys-corner-full));
}
.mat-mdc-unelevated-button .mat-mdc-button-progress-indicator-container {
  --%NS%mat-progress-spinner-active-indicator-color: var(--%NS%mat-button-filled-progress-active-indicator-color, var(--%NS%mat-sys-on-primary));
}
.mat-mdc-unelevated-button[disabled], .mat-mdc-unelevated-button.mat-mdc-button-disabled {
  cursor: default;
  pointer-events: none;
  color: var(--%NS%mat-button-filled-disabled-label-text-color, color-mix(in srgb, var(--%NS%mat-sys-on-surface) 38%, transparent));
  background-color: var(--%NS%mat-button-filled-disabled-container-color, color-mix(in srgb, var(--%NS%mat-sys-on-surface) 12%, transparent));
}
.mat-mdc-unelevated-button.mat-mdc-button-disabled-interactive {
  pointer-events: auto;
}

.mat-mdc-raised-button {
  transition: box-shadow 280ms cubic-bezier(0.4, 0, 0.2, 1);
  box-shadow: var(--%NS%mat-button-protected-container-elevation-shadow, var(--%NS%mat-sys-level1));
  height: var(--%NS%mat-button-protected-container-height, 40px);
  font-family: var(--%NS%mat-button-protected-label-text-font, var(--%NS%mat-sys-label-large-font));
  font-size: var(--%NS%mat-button-protected-label-text-size, var(--%NS%mat-sys-label-large-size));
  letter-spacing: var(--%NS%mat-button-protected-label-text-tracking, var(--%NS%mat-sys-label-large-tracking));
  text-transform: var(--%NS%mat-button-protected-label-text-transform);
  font-weight: var(--%NS%mat-button-protected-label-text-weight, var(--%NS%mat-sys-label-large-weight));
  padding: 0 var(--%NS%mat-button-protected-horizontal-padding, 24px);
}
.mat-mdc-raised-button > .mat-icon {
  margin-right: var(--%NS%mat-button-protected-icon-spacing, 8px);
  margin-left: var(--%NS%mat-button-protected-icon-offset, -8px);
}
[dir=rtl] .mat-mdc-raised-button > .mat-icon {
  margin-right: var(--%NS%mat-button-protected-icon-offset, -8px);
  margin-left: var(--%NS%mat-button-protected-icon-spacing, 8px);
}
.mat-mdc-raised-button .mdc-button__label + .mat-icon {
  margin-right: var(--%NS%mat-button-protected-icon-offset, -8px);
  margin-left: var(--%NS%mat-button-protected-icon-spacing, 8px);
}
[dir=rtl] .mat-mdc-raised-button .mdc-button__label + .mat-icon {
  margin-right: var(--%NS%mat-button-protected-icon-spacing, 8px);
  margin-left: var(--%NS%mat-button-protected-icon-offset, -8px);
}
.mat-mdc-raised-button .mat-ripple-element {
  background-color: var(--%NS%mat-button-protected-ripple-color, color-mix(in srgb, var(--%NS%mat-sys-primary) calc(var(--%NS%mat-sys-pressed-state-layer-opacity) * 100%), transparent));
}
.mat-mdc-raised-button .mat-mdc-button-persistent-ripple::before {
  background-color: var(--%NS%mat-button-protected-state-layer-color, var(--%NS%mat-sys-primary));
}
.mat-mdc-raised-button.mat-mdc-button-disabled .mat-mdc-button-persistent-ripple::before {
  background-color: var(--%NS%mat-button-protected-disabled-state-layer-color, var(--%NS%mat-sys-on-surface-variant));
}
.mat-mdc-raised-button:hover > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--%NS%mat-button-protected-hover-state-layer-opacity, var(--%NS%mat-sys-hover-state-layer-opacity));
}
.mat-mdc-raised-button.cdk-program-focused > .mat-mdc-button-persistent-ripple::before, .mat-mdc-raised-button.cdk-keyboard-focused > .mat-mdc-button-persistent-ripple::before, .mat-mdc-raised-button.mat-mdc-button-disabled-interactive:focus > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--%NS%mat-button-protected-focus-state-layer-opacity, var(--%NS%mat-sys-focus-state-layer-opacity));
}
.mat-mdc-raised-button:active > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--%NS%mat-button-protected-pressed-state-layer-opacity, var(--%NS%mat-sys-pressed-state-layer-opacity));
}
.mat-mdc-raised-button .mat-mdc-button-touch-target {
  position: absolute;
  top: 50%;
  height: var(--%NS%mat-button-protected-touch-target-size, 48px);
  display: var(--%NS%mat-button-protected-touch-target-display, block);
  left: 0;
  right: 0;
  transform: translateY(-50%);
}
.mat-mdc-raised-button:not(:disabled) {
  color: var(--%NS%mat-button-protected-label-text-color, var(--%NS%mat-sys-primary));
  background-color: var(--%NS%mat-button-protected-container-color, var(--%NS%mat-sys-surface));
}
.mat-mdc-raised-button, .mat-mdc-raised-button .mdc-button__ripple {
  border-radius: var(--%NS%mat-button-protected-container-shape, var(--%NS%mat-sys-corner-full));
}
@media (hover: hover) {
  .mat-mdc-raised-button:hover {
    box-shadow: var(--%NS%mat-button-protected-hover-container-elevation-shadow, var(--%NS%mat-sys-level2));
  }
}
.mat-mdc-raised-button:focus {
  box-shadow: var(--%NS%mat-button-protected-focus-container-elevation-shadow, var(--%NS%mat-sys-level1));
}
.mat-mdc-raised-button:active, .mat-mdc-raised-button:focus:active {
  box-shadow: var(--%NS%mat-button-protected-pressed-container-elevation-shadow, var(--%NS%mat-sys-level1));
}
.mat-mdc-raised-button[disabled], .mat-mdc-raised-button.mat-mdc-button-disabled {
  cursor: default;
  pointer-events: none;
  color: var(--%NS%mat-button-protected-disabled-label-text-color, color-mix(in srgb, var(--%NS%mat-sys-on-surface) 38%, transparent));
  background-color: var(--%NS%mat-button-protected-disabled-container-color, color-mix(in srgb, var(--%NS%mat-sys-on-surface) 12%, transparent));
}
.mat-mdc-raised-button[disabled].mat-mdc-button-disabled, .mat-mdc-raised-button.mat-mdc-button-disabled.mat-mdc-button-disabled {
  box-shadow: var(--%NS%mat-button-protected-disabled-container-elevation-shadow, var(--%NS%mat-sys-level0));
}
.mat-mdc-raised-button.mat-mdc-button-disabled-interactive {
  pointer-events: auto;
}

.mat-mdc-outlined-button {
  border-style: solid;
  transition: border 280ms cubic-bezier(0.4, 0, 0.2, 1);
  height: var(--%NS%mat-button-outlined-container-height, 40px);
  font-family: var(--%NS%mat-button-outlined-label-text-font, var(--%NS%mat-sys-label-large-font));
  font-size: var(--%NS%mat-button-outlined-label-text-size, var(--%NS%mat-sys-label-large-size));
  letter-spacing: var(--%NS%mat-button-outlined-label-text-tracking, var(--%NS%mat-sys-label-large-tracking));
  text-transform: var(--%NS%mat-button-outlined-label-text-transform);
  font-weight: var(--%NS%mat-button-outlined-label-text-weight, var(--%NS%mat-sys-label-large-weight));
  border-radius: var(--%NS%mat-button-outlined-container-shape, var(--%NS%mat-sys-corner-full));
  border-width: var(--%NS%mat-button-outlined-outline-width, 1px);
  padding: 0 var(--%NS%mat-button-outlined-horizontal-padding, 24px);
}
.mat-mdc-outlined-button > .mat-icon {
  margin-right: var(--%NS%mat-button-outlined-icon-spacing, 8px);
  margin-left: var(--%NS%mat-button-outlined-icon-offset, -8px);
}
[dir=rtl] .mat-mdc-outlined-button > .mat-icon {
  margin-right: var(--%NS%mat-button-outlined-icon-offset, -8px);
  margin-left: var(--%NS%mat-button-outlined-icon-spacing, 8px);
}
.mat-mdc-outlined-button .mdc-button__label + .mat-icon {
  margin-right: var(--%NS%mat-button-outlined-icon-offset, -8px);
  margin-left: var(--%NS%mat-button-outlined-icon-spacing, 8px);
}
[dir=rtl] .mat-mdc-outlined-button .mdc-button__label + .mat-icon {
  margin-right: var(--%NS%mat-button-outlined-icon-spacing, 8px);
  margin-left: var(--%NS%mat-button-outlined-icon-offset, -8px);
}
.mat-mdc-outlined-button .mat-ripple-element {
  background-color: var(--%NS%mat-button-outlined-ripple-color, color-mix(in srgb, var(--%NS%mat-sys-primary) calc(var(--%NS%mat-sys-pressed-state-layer-opacity) * 100%), transparent));
}
.mat-mdc-outlined-button .mat-mdc-button-persistent-ripple::before {
  background-color: var(--%NS%mat-button-outlined-state-layer-color, var(--%NS%mat-sys-primary));
}
.mat-mdc-outlined-button.mat-mdc-button-disabled .mat-mdc-button-persistent-ripple::before {
  background-color: var(--%NS%mat-button-outlined-disabled-state-layer-color, var(--%NS%mat-sys-on-surface-variant));
}
.mat-mdc-outlined-button:hover > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--%NS%mat-button-outlined-hover-state-layer-opacity, var(--%NS%mat-sys-hover-state-layer-opacity));
}
.mat-mdc-outlined-button.cdk-program-focused > .mat-mdc-button-persistent-ripple::before, .mat-mdc-outlined-button.cdk-keyboard-focused > .mat-mdc-button-persistent-ripple::before, .mat-mdc-outlined-button.mat-mdc-button-disabled-interactive:focus > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--%NS%mat-button-outlined-focus-state-layer-opacity, var(--%NS%mat-sys-focus-state-layer-opacity));
}
.mat-mdc-outlined-button:active > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--%NS%mat-button-outlined-pressed-state-layer-opacity, var(--%NS%mat-sys-pressed-state-layer-opacity));
}
.mat-mdc-outlined-button .mat-mdc-button-touch-target {
  position: absolute;
  top: 50%;
  height: var(--%NS%mat-button-outlined-touch-target-size, 48px);
  display: var(--%NS%mat-button-outlined-touch-target-display, block);
  left: 0;
  right: 0;
  transform: translateY(-50%);
}
.mat-mdc-outlined-button:not(:disabled) {
  color: var(--%NS%mat-button-outlined-label-text-color, var(--%NS%mat-sys-primary));
  border-color: var(--%NS%mat-button-outlined-outline-color, var(--%NS%mat-sys-outline));
}
.mat-mdc-outlined-button[disabled], .mat-mdc-outlined-button.mat-mdc-button-disabled {
  cursor: default;
  pointer-events: none;
  color: var(--%NS%mat-button-outlined-disabled-label-text-color, color-mix(in srgb, var(--%NS%mat-sys-on-surface) 38%, transparent));
  border-color: var(--%NS%mat-button-outlined-disabled-outline-color, color-mix(in srgb, var(--%NS%mat-sys-on-surface) 12%, transparent));
}
.mat-mdc-outlined-button.mat-mdc-button-disabled-interactive {
  pointer-events: auto;
}

.mat-tonal-button {
  transition: box-shadow 280ms cubic-bezier(0.4, 0, 0.2, 1);
  height: var(--%NS%mat-button-tonal-container-height, 40px);
  font-family: var(--%NS%mat-button-tonal-label-text-font, var(--%NS%mat-sys-label-large-font));
  font-size: var(--%NS%mat-button-tonal-label-text-size, var(--%NS%mat-sys-label-large-size));
  letter-spacing: var(--%NS%mat-button-tonal-label-text-tracking, var(--%NS%mat-sys-label-large-tracking));
  text-transform: var(--%NS%mat-button-tonal-label-text-transform);
  font-weight: var(--%NS%mat-button-tonal-label-text-weight, var(--%NS%mat-sys-label-large-weight));
  padding: 0 var(--%NS%mat-button-tonal-horizontal-padding, 24px);
}
.mat-tonal-button:not(:disabled) {
  color: var(--%NS%mat-button-tonal-label-text-color, var(--%NS%mat-sys-on-secondary-container));
  background-color: var(--%NS%mat-button-tonal-container-color, var(--%NS%mat-sys-secondary-container));
}
.mat-tonal-button, .mat-tonal-button .mdc-button__ripple {
  border-radius: var(--%NS%mat-button-tonal-container-shape, var(--%NS%mat-sys-corner-full));
}
.mat-tonal-button[disabled], .mat-tonal-button.mat-mdc-button-disabled {
  cursor: default;
  pointer-events: none;
  color: var(--%NS%mat-button-tonal-disabled-label-text-color, color-mix(in srgb, var(--%NS%mat-sys-on-surface) 38%, transparent));
  background-color: var(--%NS%mat-button-tonal-disabled-container-color, color-mix(in srgb, var(--%NS%mat-sys-on-surface) 12%, transparent));
}
.mat-tonal-button.mat-mdc-button-disabled-interactive {
  pointer-events: auto;
}
.mat-tonal-button > .mat-icon {
  margin-right: var(--%NS%mat-button-tonal-icon-spacing, 8px);
  margin-left: var(--%NS%mat-button-tonal-icon-offset, -8px);
}
[dir=rtl] .mat-tonal-button > .mat-icon {
  margin-right: var(--%NS%mat-button-tonal-icon-offset, -8px);
  margin-left: var(--%NS%mat-button-tonal-icon-spacing, 8px);
}
.mat-tonal-button .mdc-button__label + .mat-icon {
  margin-right: var(--%NS%mat-button-tonal-icon-offset, -8px);
  margin-left: var(--%NS%mat-button-tonal-icon-spacing, 8px);
}
[dir=rtl] .mat-tonal-button .mdc-button__label + .mat-icon {
  margin-right: var(--%NS%mat-button-tonal-icon-spacing, 8px);
  margin-left: var(--%NS%mat-button-tonal-icon-offset, -8px);
}
.mat-tonal-button .mat-ripple-element {
  background-color: var(--%NS%mat-button-tonal-ripple-color, color-mix(in srgb, var(--%NS%mat-sys-on-secondary-container) calc(var(--%NS%mat-sys-pressed-state-layer-opacity) * 100%), transparent));
}
.mat-tonal-button .mat-mdc-button-persistent-ripple::before {
  background-color: var(--%NS%mat-button-tonal-state-layer-color, var(--%NS%mat-sys-on-secondary-container));
}
.mat-tonal-button.mat-mdc-button-disabled .mat-mdc-button-persistent-ripple::before {
  background-color: var(--%NS%mat-button-tonal-disabled-state-layer-color, var(--%NS%mat-sys-on-surface-variant));
}
.mat-tonal-button:hover > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--%NS%mat-button-tonal-hover-state-layer-opacity, var(--%NS%mat-sys-hover-state-layer-opacity));
}
.mat-tonal-button.cdk-program-focused > .mat-mdc-button-persistent-ripple::before, .mat-tonal-button.cdk-keyboard-focused > .mat-mdc-button-persistent-ripple::before, .mat-tonal-button.mat-mdc-button-disabled-interactive:focus > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--%NS%mat-button-tonal-focus-state-layer-opacity, var(--%NS%mat-sys-focus-state-layer-opacity));
}
.mat-tonal-button:active > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--%NS%mat-button-tonal-pressed-state-layer-opacity, var(--%NS%mat-sys-pressed-state-layer-opacity));
}
.mat-tonal-button .mat-mdc-button-touch-target {
  position: absolute;
  top: 50%;
  height: var(--%NS%mat-button-tonal-touch-target-size, 48px);
  display: var(--%NS%mat-button-tonal-touch-target-display, block);
  left: 0;
  right: 0;
  transform: translateY(-50%);
}

.mat-mdc-button,
.mat-mdc-unelevated-button,
.mat-mdc-raised-button,
.mat-mdc-outlined-button,
.mat-tonal-button {
  -webkit-tap-highlight-color: transparent;
}
.mat-mdc-button .mat-mdc-button-ripple,
.mat-mdc-button .mat-mdc-button-persistent-ripple,
.mat-mdc-button .mat-mdc-button-persistent-ripple::before,
.mat-mdc-unelevated-button .mat-mdc-button-ripple,
.mat-mdc-unelevated-button .mat-mdc-button-persistent-ripple,
.mat-mdc-unelevated-button .mat-mdc-button-persistent-ripple::before,
.mat-mdc-raised-button .mat-mdc-button-ripple,
.mat-mdc-raised-button .mat-mdc-button-persistent-ripple,
.mat-mdc-raised-button .mat-mdc-button-persistent-ripple::before,
.mat-mdc-outlined-button .mat-mdc-button-ripple,
.mat-mdc-outlined-button .mat-mdc-button-persistent-ripple,
.mat-mdc-outlined-button .mat-mdc-button-persistent-ripple::before,
.mat-tonal-button .mat-mdc-button-ripple,
.mat-tonal-button .mat-mdc-button-persistent-ripple,
.mat-tonal-button .mat-mdc-button-persistent-ripple::before {
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  position: absolute;
  pointer-events: none;
  border-radius: inherit;
}
.mat-mdc-button .mat-mdc-button-ripple,
.mat-mdc-unelevated-button .mat-mdc-button-ripple,
.mat-mdc-raised-button .mat-mdc-button-ripple,
.mat-mdc-outlined-button .mat-mdc-button-ripple,
.mat-tonal-button .mat-mdc-button-ripple {
  overflow: hidden;
}
.mat-mdc-button .mat-mdc-button-persistent-ripple::before,
.mat-mdc-unelevated-button .mat-mdc-button-persistent-ripple::before,
.mat-mdc-raised-button .mat-mdc-button-persistent-ripple::before,
.mat-mdc-outlined-button .mat-mdc-button-persistent-ripple::before,
.mat-tonal-button .mat-mdc-button-persistent-ripple::before {
  content: "";
  opacity: 0;
}
.mat-mdc-button .mdc-button__label,
.mat-mdc-button .mat-icon,
.mat-mdc-unelevated-button .mdc-button__label,
.mat-mdc-unelevated-button .mat-icon,
.mat-mdc-raised-button .mdc-button__label,
.mat-mdc-raised-button .mat-icon,
.mat-mdc-outlined-button .mdc-button__label,
.mat-mdc-outlined-button .mat-icon,
.mat-tonal-button .mdc-button__label,
.mat-tonal-button .mat-icon {
  z-index: 1;
  position: relative;
}
.mat-mdc-button .mat-focus-indicator,
.mat-mdc-unelevated-button .mat-focus-indicator,
.mat-mdc-raised-button .mat-focus-indicator,
.mat-mdc-outlined-button .mat-focus-indicator,
.mat-tonal-button .mat-focus-indicator {
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  position: absolute;
  border-radius: inherit;
}
.mat-mdc-button:focus-visible > .mat-focus-indicator::before,
.mat-mdc-unelevated-button:focus-visible > .mat-focus-indicator::before,
.mat-mdc-raised-button:focus-visible > .mat-focus-indicator::before,
.mat-mdc-outlined-button:focus-visible > .mat-focus-indicator::before,
.mat-tonal-button:focus-visible > .mat-focus-indicator::before {
  content: "";
  border-radius: inherit;
}
.mat-mdc-button._mat-animation-noopable,
.mat-mdc-unelevated-button._mat-animation-noopable,
.mat-mdc-raised-button._mat-animation-noopable,
.mat-mdc-outlined-button._mat-animation-noopable,
.mat-tonal-button._mat-animation-noopable {
  transition: none !important;
  animation: none !important;
}
.mat-mdc-button > .mat-icon,
.mat-mdc-unelevated-button > .mat-icon,
.mat-mdc-raised-button > .mat-icon,
.mat-mdc-outlined-button > .mat-icon,
.mat-tonal-button > .mat-icon {
  display: inline-block;
  position: relative;
  vertical-align: top;
  font-size: 1.125rem;
  height: 1.125rem;
  width: 1.125rem;
}

.mat-mdc-outlined-button .mat-mdc-button-ripple,
.mat-mdc-outlined-button .mdc-button__ripple {
  top: -1px;
  left: -1px;
  bottom: -1px;
  right: -1px;
}

.mat-mdc-unelevated-button .mat-focus-indicator::before,
.mat-tonal-button .mat-focus-indicator::before,
.mat-mdc-raised-button .mat-focus-indicator::before {
  margin: calc(calc(var(--%NS%mat-focus-indicator-border-width, 3px) + 2px) * -1);
}

.mat-mdc-outlined-button .mat-focus-indicator::before {
  margin: calc(calc(var(--%NS%mat-focus-indicator-border-width, 3px) + 3px) * -1);
}

.mat-mdc-button-progress-indicator-container {
  position: absolute;
  inset-inline-start: 0;
  inset-block-start: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  box-sizing: border-box;
}

.mat-mdc-button-progress-indicator-shown mat-icon,
.mat-mdc-button-progress-indicator-shown [matButtonIcon],
.mat-mdc-button-progress-indicator-shown .mdc-button__label {
  visibility: hidden;
}
`,`@media (forced-colors: active) {
  .mat-mdc-button:not(.mdc-button--outlined),
  .mat-mdc-unelevated-button:not(.mdc-button--outlined),
  .mat-mdc-raised-button:not(.mdc-button--outlined),
  .mat-mdc-outlined-button:not(.mdc-button--outlined),
  .mat-mdc-button-base.mat-tonal-button,
  .mat-mdc-icon-button.mat-mdc-icon-button,
  .mat-mdc-outlined-button .mdc-button__ripple {
    outline: solid 1px;
  }
}
`],encapsulation:2})}return e})();function kI(e){return e.hasAttribute("mat-raised-button")?"elevated":e.hasAttribute("mat-stroked-button")?"outlined":e.hasAttribute("mat-flat-button")?"filled":e.hasAttribute("mat-button")?"text":null}var Tg=new g("mat-mdc-fab-default-options",{providedIn:"root",factory:()=>ai}),ai={color:"accent"},Mg=(()=>{class e extends ua{_options=p(Tg,{optional:!0});_isFab=!0;extended=!1;constructor(){super(),this._options=this._options||ai,this.color=this._options.color||ai.color}static \u0275fac=function(r){return new(r||e)};static \u0275cmp=B({type:e,selectors:[["button","mat-fab",""],["a","mat-fab",""],["button","matFab",""],["a","matFab",""]],hostAttrs:[1,"mdc-fab","mat-mdc-fab-base","mat-mdc-fab"],hostVars:4,hostBindings:function(r,o){r&2&&j("mdc-fab--extended",o.extended)("mat-mdc-extended-fab",o.extended)},inputs:{extended:[2,"extended","extended",H]},exportAs:["matButton","matAnchor"],features:[Ve],ngContentSelectors:Qd,decls:8,vars:5,consts:[[1,"mat-mdc-button-persistent-ripple"],[1,"mdc-button__label"],[1,"mat-mdc-button-progress-indicator-container"],[1,"mat-focus-indicator"],[1,"mat-mdc-button-touch-target"]],template:function(r,o){r&1&&(X(Zd),ut(0,"span",0),k(1),Te(2,"span",1),k(3,1),Me(),k(4,2),lt(5,xI,2,0,"div",2),ut(6,"span",3)(7,"span",4)),r&2&&(j("mdc-button__ripple",!o._isFab)("mdc-fab__ripple",o._isFab),W(5),dt(o.showProgress()?5:-1))},styles:[`.mat-mdc-fab-base {
  -webkit-user-select: none;
  user-select: none;
  position: relative;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  box-sizing: border-box;
  width: 56px;
  height: 56px;
  padding: 0;
  border: none;
  fill: currentColor;
  text-decoration: none;
  cursor: pointer;
  -moz-appearance: none;
  -webkit-appearance: none;
  overflow: visible;
  transition: box-shadow 280ms cubic-bezier(0.4, 0, 0.2, 1), opacity 15ms linear 30ms, transform 270ms 0ms cubic-bezier(0, 0, 0.2, 1);
  flex-shrink: 0;
  -webkit-tap-highlight-color: transparent;
}
.mat-mdc-fab-base .mat-mdc-button-ripple,
.mat-mdc-fab-base .mat-mdc-button-persistent-ripple,
.mat-mdc-fab-base .mat-mdc-button-persistent-ripple::before {
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  position: absolute;
  pointer-events: none;
  border-radius: inherit;
}
.mat-mdc-fab-base .mat-mdc-button-ripple {
  overflow: hidden;
}
.mat-mdc-fab-base .mat-mdc-button-persistent-ripple::before {
  content: "";
  opacity: 0;
}
.mat-mdc-fab-base .mdc-button__label,
.mat-mdc-fab-base .mat-icon {
  z-index: 1;
  position: relative;
}
.mat-mdc-fab-base .mat-focus-indicator {
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  position: absolute;
}
.mat-mdc-fab-base:focus-visible > .mat-focus-indicator::before {
  content: "";
}
.mat-mdc-fab-base._mat-animation-noopable {
  transition: none !important;
  animation: none !important;
}
.mat-mdc-fab-base::before {
  position: absolute;
  box-sizing: border-box;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  border: 1px solid transparent;
  border-radius: inherit;
  content: "";
  pointer-events: none;
}
.mat-mdc-fab-base[hidden] {
  display: none;
}
.mat-mdc-fab-base::-moz-focus-inner {
  padding: 0;
  border: 0;
}
.mat-mdc-fab-base:active, .mat-mdc-fab-base:focus {
  outline: none;
}
.mat-mdc-fab-base:hover {
  cursor: pointer;
}
.mat-mdc-fab-base > svg {
  width: 100%;
}
.mat-mdc-fab-base .mat-icon, .mat-mdc-fab-base .material-icons {
  transition: transform 180ms 90ms cubic-bezier(0, 0, 0.2, 1);
  fill: currentColor;
  will-change: transform;
}
.mat-mdc-fab-base .mat-focus-indicator::before {
  margin: calc(calc(var(--%NS%mat-focus-indicator-border-width, 3px) + 2px) * -1);
  border-radius: calc(var(--%NS%mat-fab-container-shape, var(--%NS%mat-sys-corner-large)) + calc(var(--%NS%mat-focus-indicator-border-width, 3px) + 2px));
}
.mat-mdc-fab-base[disabled], .mat-mdc-fab-base.mat-mdc-button-disabled {
  cursor: default;
  pointer-events: none;
}
.mat-mdc-fab-base[disabled], .mat-mdc-fab-base[disabled]:focus, .mat-mdc-fab-base.mat-mdc-button-disabled, .mat-mdc-fab-base.mat-mdc-button-disabled:focus {
  box-shadow: none;
}
.mat-mdc-fab-base.mat-mdc-button-disabled-interactive {
  pointer-events: auto;
}

.mat-mdc-fab {
  background-color: var(--%NS%mat-fab-container-color, var(--%NS%mat-sys-primary-container));
  border-radius: var(--%NS%mat-fab-container-shape, var(--%NS%mat-sys-corner-large));
  color: var(--%NS%mat-fab-foreground-color, var(--%NS%mat-sys-on-primary-container, inherit));
  box-shadow: var(--%NS%mat-fab-container-elevation-shadow, var(--%NS%mat-sys-level3));
}
@media (hover: hover) {
  .mat-mdc-fab:hover {
    box-shadow: var(--%NS%mat-fab-hover-container-elevation-shadow, var(--%NS%mat-sys-level4));
  }
}
.mat-mdc-fab:focus {
  box-shadow: var(--%NS%mat-fab-focus-container-elevation-shadow, var(--%NS%mat-sys-level3));
}
.mat-mdc-fab:active, .mat-mdc-fab:focus:active {
  box-shadow: var(--%NS%mat-fab-pressed-container-elevation-shadow, var(--%NS%mat-sys-level3));
}
.mat-mdc-fab[disabled], .mat-mdc-fab.mat-mdc-button-disabled {
  cursor: default;
  pointer-events: none;
  color: var(--%NS%mat-fab-disabled-state-foreground-color, color-mix(in srgb, var(--%NS%mat-sys-on-surface) 38%, transparent));
  background-color: var(--%NS%mat-fab-disabled-state-container-color, color-mix(in srgb, var(--%NS%mat-sys-on-surface) 12%, transparent));
}
.mat-mdc-fab.mat-mdc-button-disabled-interactive {
  pointer-events: auto;
}
.mat-mdc-fab .mat-mdc-button-touch-target {
  position: absolute;
  top: 50%;
  height: var(--%NS%mat-fab-touch-target-size, 48px);
  display: var(--%NS%mat-fab-touch-target-display, block);
  left: 50%;
  width: var(--%NS%mat-fab-touch-target-size, 48px);
  transform: translate(-50%, -50%);
}
.mat-mdc-fab .mat-ripple-element {
  background-color: var(--%NS%mat-fab-ripple-color, color-mix(in srgb, var(--%NS%mat-sys-on-primary-container) calc(var(--%NS%mat-sys-pressed-state-layer-opacity) * 100%), transparent));
}
.mat-mdc-fab .mat-mdc-button-persistent-ripple::before {
  background-color: var(--%NS%mat-fab-state-layer-color, var(--%NS%mat-sys-on-primary-container));
}
.mat-mdc-fab.mat-mdc-button-disabled .mat-mdc-button-persistent-ripple::before {
  background-color: var(--%NS%mat-fab-disabled-state-layer-color);
}
.mat-mdc-fab:hover > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--%NS%mat-fab-hover-state-layer-opacity, var(--%NS%mat-sys-hover-state-layer-opacity));
}
.mat-mdc-fab.cdk-program-focused > .mat-mdc-button-persistent-ripple::before, .mat-mdc-fab.cdk-keyboard-focused > .mat-mdc-button-persistent-ripple::before, .mat-mdc-fab.mat-mdc-button-disabled-interactive:focus > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--%NS%mat-fab-focus-state-layer-opacity, var(--%NS%mat-sys-focus-state-layer-opacity));
}
.mat-mdc-fab:active > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--%NS%mat-fab-pressed-state-layer-opacity, var(--%NS%mat-sys-pressed-state-layer-opacity));
}

.mat-mdc-mini-fab {
  width: 40px;
  height: 40px;
  background-color: var(--%NS%mat-fab-small-container-color, var(--%NS%mat-sys-primary-container));
  border-radius: var(--%NS%mat-fab-small-container-shape, var(--%NS%mat-sys-corner-medium));
  color: var(--%NS%mat-fab-small-foreground-color, var(--%NS%mat-sys-on-primary-container, inherit));
  box-shadow: var(--%NS%mat-fab-small-container-elevation-shadow, var(--%NS%mat-sys-level3));
}
@media (hover: hover) {
  .mat-mdc-mini-fab:hover {
    box-shadow: var(--%NS%mat-fab-small-hover-container-elevation-shadow, var(--%NS%mat-sys-level4));
  }
}
.mat-mdc-mini-fab:focus {
  box-shadow: var(--%NS%mat-fab-small-focus-container-elevation-shadow, var(--%NS%mat-sys-level3));
}
.mat-mdc-mini-fab:active, .mat-mdc-mini-fab:focus:active {
  box-shadow: var(--%NS%mat-fab-small-pressed-container-elevation-shadow, var(--%NS%mat-sys-level3));
}
.mat-mdc-mini-fab .mat-focus-indicator::before {
  border-radius: calc(var(--%NS%mat-fab-small-container-shape, var(--%NS%mat-sys-corner-medium)) + calc(var(--%NS%mat-focus-indicator-border-width, 3px) + 2px));
}
.mat-mdc-mini-fab[disabled], .mat-mdc-mini-fab.mat-mdc-button-disabled {
  cursor: default;
  pointer-events: none;
  color: var(--%NS%mat-fab-small-disabled-state-foreground-color, color-mix(in srgb, var(--%NS%mat-sys-on-surface) 38%, transparent));
  background-color: var(--%NS%mat-fab-small-disabled-state-container-color, color-mix(in srgb, var(--%NS%mat-sys-on-surface) 12%, transparent));
}
.mat-mdc-mini-fab.mat-mdc-button-disabled-interactive {
  pointer-events: auto;
}
.mat-mdc-mini-fab .mat-mdc-button-touch-target {
  position: absolute;
  top: 50%;
  height: var(--%NS%mat-fab-small-touch-target-size, 48px);
  display: var(--%NS%mat-fab-small-touch-target-display);
  left: 50%;
  width: var(--%NS%mat-fab-small-touch-target-size, 48px);
  transform: translate(-50%, -50%);
}
.mat-mdc-mini-fab .mat-ripple-element {
  background-color: var(--%NS%mat-fab-small-ripple-color, color-mix(in srgb, var(--%NS%mat-sys-on-primary-container) calc(var(--%NS%mat-sys-pressed-state-layer-opacity) * 100%), transparent));
}
.mat-mdc-mini-fab .mat-mdc-button-persistent-ripple::before {
  background-color: var(--%NS%mat-fab-small-state-layer-color, var(--%NS%mat-sys-on-primary-container));
}
.mat-mdc-mini-fab.mat-mdc-button-disabled .mat-mdc-button-persistent-ripple::before {
  background-color: var(--%NS%mat-fab-small-disabled-state-layer-color);
}
.mat-mdc-mini-fab:hover > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--%NS%mat-fab-small-hover-state-layer-opacity, var(--%NS%mat-sys-hover-state-layer-opacity));
}
.mat-mdc-mini-fab.cdk-program-focused > .mat-mdc-button-persistent-ripple::before, .mat-mdc-mini-fab.cdk-keyboard-focused > .mat-mdc-button-persistent-ripple::before, .mat-mdc-mini-fab.mat-mdc-button-disabled-interactive:focus > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--%NS%mat-fab-small-focus-state-layer-opacity, var(--%NS%mat-sys-focus-state-layer-opacity));
}
.mat-mdc-mini-fab:active > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--%NS%mat-fab-small-pressed-state-layer-opacity, var(--%NS%mat-sys-pressed-state-layer-opacity));
}

.mat-mdc-extended-fab {
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  padding-left: 20px;
  padding-right: 20px;
  width: auto;
  max-width: 100%;
  line-height: normal;
  box-shadow: var(--%NS%mat-fab-extended-container-elevation-shadow, var(--%NS%mat-sys-level3));
  height: var(--%NS%mat-fab-extended-container-height, 56px);
  border-radius: var(--%NS%mat-fab-extended-container-shape, var(--%NS%mat-sys-corner-large));
  font-family: var(--%NS%mat-fab-extended-label-text-font, var(--%NS%mat-sys-label-large-font));
  font-size: var(--%NS%mat-fab-extended-label-text-size, var(--%NS%mat-sys-label-large-size));
  font-weight: var(--%NS%mat-fab-extended-label-text-weight, var(--%NS%mat-sys-label-large-weight));
  letter-spacing: var(--%NS%mat-fab-extended-label-text-tracking, var(--%NS%mat-sys-label-large-tracking));
}
@media (hover: hover) {
  .mat-mdc-extended-fab:hover {
    box-shadow: var(--%NS%mat-fab-extended-hover-container-elevation-shadow, var(--%NS%mat-sys-level4));
  }
}
.mat-mdc-extended-fab:focus {
  box-shadow: var(--%NS%mat-fab-extended-focus-container-elevation-shadow, var(--%NS%mat-sys-level3));
}
.mat-mdc-extended-fab:active, .mat-mdc-extended-fab:focus:active {
  box-shadow: var(--%NS%mat-fab-extended-pressed-container-elevation-shadow, var(--%NS%mat-sys-level3));
}
.mat-mdc-extended-fab[disabled], .mat-mdc-extended-fab.mat-mdc-button-disabled {
  cursor: default;
  pointer-events: none;
}
.mat-mdc-extended-fab[disabled], .mat-mdc-extended-fab[disabled]:focus, .mat-mdc-extended-fab.mat-mdc-button-disabled, .mat-mdc-extended-fab.mat-mdc-button-disabled:focus {
  box-shadow: none;
}
.mat-mdc-extended-fab.mat-mdc-button-disabled-interactive {
  pointer-events: auto;
}
[dir=rtl] .mat-mdc-extended-fab .mdc-button__label + .mat-icon, [dir=rtl] .mat-mdc-extended-fab .mdc-button__label + .material-icons,
.mat-mdc-extended-fab > .mat-icon,
.mat-mdc-extended-fab > .material-icons {
  margin-left: -8px;
  margin-right: 12px;
}
.mat-mdc-extended-fab .mdc-button__label + .mat-icon,
.mat-mdc-extended-fab .mdc-button__label + .material-icons, [dir=rtl] .mat-mdc-extended-fab > .mat-icon, [dir=rtl] .mat-mdc-extended-fab > .material-icons {
  margin-left: 12px;
  margin-right: -8px;
}
.mat-mdc-extended-fab .mat-mdc-button-touch-target {
  width: 100%;
}

.mat-mdc-button-progress-indicator-container {
  position: absolute;
  inset-inline-start: 0;
  margin-block-start: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  box-sizing: border-box;
}

.mat-mdc-button-progress-indicator-shown mat-icon,
.mat-mdc-button-progress-indicator-shown [matButtonIcon],
.mat-mdc-button-progress-indicator-shown .mdc-button__label {
  visibility: hidden;
}
`],encapsulation:2})}return e})(),Gr=(()=>{class e extends ua{_options=p(Tg,{optional:!0});_isFab=!0;constructor(){super(),this._options=this._options||ai,this.color=this._options.color||ai.color}static \u0275fac=function(r){return new(r||e)};static \u0275cmp=B({type:e,selectors:[["button","mat-mini-fab",""],["a","mat-mini-fab",""],["button","matMiniFab",""],["a","matMiniFab",""]],hostAttrs:[1,"mdc-fab","mat-mdc-fab-base","mdc-fab--mini","mat-mdc-mini-fab"],exportAs:["matButton","matAnchor"],features:[Ve],ngContentSelectors:Qd,decls:8,vars:5,consts:[[1,"mat-mdc-button-persistent-ripple"],[1,"mdc-button__label"],[1,"mat-mdc-button-progress-indicator-container"],[1,"mat-focus-indicator"],[1,"mat-mdc-button-touch-target"]],template:function(r,o){r&1&&(X(Zd),ut(0,"span",0),k(1),Te(2,"span",1),k(3,1),Me(),k(4,2),lt(5,AI,2,0,"div",2),ut(6,"span",3)(7,"span",4)),r&2&&(j("mdc-button__ripple",!o._isFab)("mdc-fab__ripple",o._isFab),W(5),dt(o.showProgress()?5:-1))},styles:[RI],encapsulation:2})}return e})();var Yd=Gr,xg=(()=>{class e{static \u0275fac=function(r){return new(r||e)};static \u0275mod=ee({type:e});static \u0275inj=K({imports:[fa,Pe]})}return e})();var PI=[[["","matMiniFab",""]]],FI=["[matMiniFab]"];function LI(e,t){e&1&&k(0)}var VI=[[["eco-fab-speed-dial-trigger"]],[["eco-fab-speed-dial-actions"]]],jI=["eco-fab-speed-dial-trigger","eco-fab-speed-dial-actions"],HI=[[["","matFab",""]]],BI=["[matFab]"],UI=23;function Kd(e){return e._elementRef.nativeElement}var er=class e{renderer=p(Re);parent=p(tr);buttons=bd(Gr);anchors=bd(Yd);miniFabs=tn(()=>[...this.buttons(),...this.anchors()]);initMiniFabStates=Yt(()=>{this.miniFabs().forEach((t,n)=>{let r=Kd(t);this.renderer.addClass(r,"eco-fab-action-item"),this.changeElementStyle(r,"z-index",(UI-n).toString())}),this.parent.setActionsVisibility()});miniFabVisible=Ne(!1);showMiniFabAnimation;hideMiniFab=null;show(){this.resetAnimationState(),this.miniFabVisible.set(!0),this.showMiniFabAnimation=setTimeout(()=>{this.miniFabs().forEach((t,n)=>{let r=Kd(t);this.changeElementStyle(r,"transition-delay",this.transitionDelay(n)),this.changeElementStyle(r,"transform","scale(1)")})},50)}resetAnimationState(){clearTimeout(this.showMiniFabAnimation),this.hideMiniFab&&(this.hideMiniFab.unsubscribe(),this.hideMiniFab=null)}hide(){this.resetAnimationState();let t=this.miniFabs();if(!t.length){this.miniFabVisible.set(!1);return}let n=[...t].reverse().map((r,o)=>{let i=Kd(r);return this.changeElementStyle(i,"transition-delay",this.transitionDelay(o)),this.changeElementStyle(i,"transform","scale(0)"),ao(i,"transitionend").pipe(lo(1))});this.hideMiniFab=yn(n).subscribe(()=>this.miniFabVisible.set(!1))}transitionDelay(t){let r=this.miniFabs().length;return((r?100/r:0)*t).toString()+"ms"}changeElementStyle(t,n,r){this.renderer.setStyle(t,n,r)}static \u0275fac=function(n){return new(n||e)};static \u0275cmp=B({type:e,selectors:[["eco-fab-speed-dial-actions"]],contentQueries:function(n,r,o){n&1&&Go(o,r.buttons,Gr,4)(o,r.anchors,Yd,4),n&2&&Ys(2)},ngContentSelectors:FI,decls:1,vars:1,template:function(n,r){n&1&&(X(PI),lt(0,LI,1,0)),n&2&&dt(r.miniFabVisible()?0:-1)},encapsulation:2})},tr=class e{elementRef=p(q);renderer=p(Re);document=p(L);documentClickUnlistener=null;openInput=Hr(!1,{alias:"open"});open=gd(this.openInput);processOpen=Yt(()=>{this.openChange.emit(this.open()),this.setActionsVisibility()});direction=Hr("up");previousDirection=this.direction();processDirection=Yt(()=>{this.setElementClass(this.previousDirection,!1),this.setElementClass(this.direction(),!0),this.previousDirection=this.direction(),this.setActionsVisibility()});openChange=Lh();childActions=Vh.required(er);ngOnDestroy(){this.unsetDocumentClickListener()}toggle(){this.open.update(t=>!t)}onClick(){this.open()&&this.open.set(!1)}setActionsVisibility(){this.open()?this.childActions().show():this.childActions().hide(),this.processOutsideClickState()}setElementClass(t,n){let r=`eco-${t}`;n?this.renderer.addClass(this.elementRef.nativeElement,r):this.renderer.removeClass(this.elementRef.nativeElement,r)}processOutsideClickState(){this.open()?this.setDocumentClickListener():this.unsetDocumentClickListener()}setDocumentClickListener(){this.documentClickUnlistener||(this.documentClickUnlistener=this.renderer.listen(this.document,"click",()=>{this.open.set(!1)}))}unsetDocumentClickListener(){this.documentClickUnlistener&&(this.documentClickUnlistener(),this.documentClickUnlistener=null)}static \u0275fac=function(n){return new(n||e)};static \u0275cmp=B({type:e,selectors:[["eco-fab-speed-dial"]],contentQueries:function(n,r,o){n&1&&Go(o,r.childActions,er,5),n&2&&Ys()},hostVars:2,hostBindings:function(n,r){n&1&&T("click",function(){return r.onClick()}),n&2&&j("eco-opened",r.open())},inputs:{openInput:[1,"open","openInput"],direction:[1,"direction"]},outputs:{openChange:"openChange"},ngContentSelectors:jI,decls:3,vars:0,consts:[[1,"eco-fab-speed-dial-container"]],template:function(n,r){n&1&&(X(VI),Te(0,"div",0),k(1),k(2,1),Me())},styles:[`eco-fab-speed-dial{display:inline-block;z-index:500}eco-fab-speed-dial.eco-opened .eco-fab-speed-dial-container eco-fab-speed-dial-trigger.eco-spin .spin180{transform:rotate(180deg)}eco-fab-speed-dial.eco-opened .eco-fab-speed-dial-container eco-fab-speed-dial-trigger.eco-spin .spin360{transform:rotate(360deg)}eco-fab-speed-dial .eco-fab-speed-dial-container{position:relative;display:flex;align-items:center;z-index:20}eco-fab-speed-dial .eco-fab-speed-dial-container eco-fab-speed-dial-trigger{pointer-events:auto;z-index:24}eco-fab-speed-dial .eco-fab-speed-dial-container eco-fab-speed-dial-trigger.eco-spin .spin180,eco-fab-speed-dial .eco-fab-speed-dial-container eco-fab-speed-dial-trigger.eco-spin .spin360{transition:all .6s cubic-bezier(.4,0,.2,1)}eco-fab-speed-dial .eco-fab-speed-dial-container eco-fab-speed-dial-actions{display:flex;position:absolute;height:0;width:0}eco-fab-speed-dial .eco-fab-speed-dial-container eco-fab-speed-dial-actions .eco-fab-action-item{transform:scale(0);transition:all .3s cubic-bezier(.55,0,.55,.2);transition-duration:.14286s}eco-fab-speed-dial.eco-down eco-fab-speed-dial-actions{bottom:2px;left:7px}eco-fab-speed-dial.eco-down .eco-fab-speed-dial-container{flex-direction:column}eco-fab-speed-dial.eco-down .eco-fab-speed-dial-container eco-fab-speed-dial-trigger{order:1}eco-fab-speed-dial.eco-down .eco-fab-speed-dial-container eco-fab-speed-dial-actions{flex-direction:column;order:2}eco-fab-speed-dial.eco-down .eco-fab-speed-dial-container eco-fab-speed-dial-actions .eco-fab-action-item{margin-top:10px}eco-fab-speed-dial.eco-up eco-fab-speed-dial-actions{top:2px;left:7px}eco-fab-speed-dial.eco-up .eco-fab-speed-dial-container{flex-direction:column}eco-fab-speed-dial.eco-up .eco-fab-speed-dial-container eco-fab-speed-dial-trigger{order:2}eco-fab-speed-dial.eco-up .eco-fab-speed-dial-container eco-fab-speed-dial-actions{flex-direction:column-reverse;order:1}eco-fab-speed-dial.eco-up .eco-fab-speed-dial-container eco-fab-speed-dial-actions .eco-fab-action-item{margin-bottom:10px}eco-fab-speed-dial.eco-left eco-fab-speed-dial-actions{top:7px;left:2px}eco-fab-speed-dial.eco-left .eco-fab-speed-dial-container{flex-direction:row}eco-fab-speed-dial.eco-left .eco-fab-speed-dial-container eco-fab-speed-dial-trigger{order:2}eco-fab-speed-dial.eco-left .eco-fab-speed-dial-container eco-fab-speed-dial-actions{flex-direction:row-reverse;order:1}eco-fab-speed-dial.eco-left .eco-fab-speed-dial-container eco-fab-speed-dial-actions .eco-fab-action-item{margin-right:10px}eco-fab-speed-dial.eco-right eco-fab-speed-dial-actions{top:7px;right:2px}eco-fab-speed-dial.eco-right .eco-fab-speed-dial-container{flex-direction:row}eco-fab-speed-dial.eco-right .eco-fab-speed-dial-container eco-fab-speed-dial-trigger{order:1}eco-fab-speed-dial.eco-right .eco-fab-speed-dial-container eco-fab-speed-dial-actions{flex-direction:row;order:2}eco-fab-speed-dial.eco-right .eco-fab-speed-dial-container eco-fab-speed-dial-actions .eco-fab-action-item{margin-left:10px}
`],encapsulation:2})},ci=class e{parent=p(tr);spin=Hr(!1);onClick(t){this.parent.toggle(),t.stopPropagation()}static \u0275fac=function(n){return new(n||e)};static \u0275cmp=B({type:e,selectors:[["eco-fab-speed-dial-trigger"]],hostVars:2,hostBindings:function(n,r){n&1&&T("click",function(i){return r.onClick(i)}),n&2&&j("eco-spin",r.spin())},inputs:{spin:[1,"spin"]},ngContentSelectors:BI,decls:1,vars:0,template:function(n,r){n&1&&(X(HI),k(0))},encapsulation:2})};function Ag(e){return Error(`Unable to find icon with the name "${e}"`)}function $I(){return Error("Could not find HttpClient for use with Angular Material icons. Please add provideHttpClient() to your providers.")}function Rg(e){return Error(`The URL provided to MatIconRegistry was not trusted as a resource URL via Angular's DomSanitizer. Attempted URL was "${e}".`)}function kg(e){return Error(`The literal provided to MatIconRegistry was not trusted as safe HTML by Angular's DomSanitizer. Attempted literal was "${e}".`)}var Lt=class{url;svgText;options;svgElement=null;constructor(t,n,r){this.url=t,this.svgText=n,this.options=r}},Pg=(()=>{class e{_httpClient;_sanitizer;_errorHandler;_document;_svgIconConfigs=new Map;_iconSetConfigs=new Map;_cachedIconsByUrl=new Map;_inProgressUrlFetches=new Map;_fontCssClassesByAlias=new Map;_resolvers=[];_defaultFontSetClass=["material-icons","mat-ligature-font"];constructor(n,r,o,i){this._httpClient=n,this._sanitizer=r,this._errorHandler=i,this._document=o}addSvgIcon(n,r,o){return this.addSvgIconInNamespace("",n,r,o)}addSvgIconLiteral(n,r,o){return this.addSvgIconLiteralInNamespace("",n,r,o)}addSvgIconInNamespace(n,r,o,i){return this._addSvgIconConfig(n,r,new Lt(o,null,i))}addSvgIconResolver(n){return this._resolvers.push(n),this}addSvgIconLiteralInNamespace(n,r,o,i){let s=this._sanitizer.sanitize(Ie.HTML,o);if(!s)throw kg(o);let a=$r(s);return this._addSvgIconConfig(n,r,new Lt("",a,i))}addSvgIconSet(n,r){return this.addSvgIconSetInNamespace("",n,r)}addSvgIconSetLiteral(n,r){return this.addSvgIconSetLiteralInNamespace("",n,r)}addSvgIconSetInNamespace(n,r,o){return this._addSvgIconSetConfig(n,new Lt(r,null,o))}addSvgIconSetLiteralInNamespace(n,r,o){let i=this._sanitizer.sanitize(Ie.HTML,r);if(!i)throw kg(r);let s=$r(i);return this._addSvgIconSetConfig(n,new Lt("",s,o))}registerFontClassAlias(n,r=n){return this._fontCssClassesByAlias.set(n,r),this}classNameForFontAlias(n){return this._fontCssClassesByAlias.get(n)||n}setDefaultFontSetClass(...n){return this._defaultFontSetClass=n,this}getDefaultFontSetClass(){return this._defaultFontSetClass}getSvgIconFromUrl(n){let r=this._sanitizer.sanitize(Ie.RESOURCE_URL,n);if(!r)throw Rg(n);let o=this._cachedIconsByUrl.get(r);return o?Qe(pa(o)):this._loadSvgIconFromConfig(new Lt(n,null)).pipe(fo(i=>this._cachedIconsByUrl.set(r,i)),ie(i=>pa(i)))}getNamedSvgIcon(n,r=""){let o=Og(r,n),i=this._svgIconConfigs.get(o);if(i)return this._getSvgFromConfig(i);if(i=this._getIconConfigFromResolvers(r,n),i)return this._svgIconConfigs.set(o,i),this._getSvgFromConfig(i);let s=this._iconSetConfigs.get(r);return s?this._getSvgFromIconSetConfigs(n,s):za(Ag(o))}ngOnDestroy(){this._resolvers=[],this._svgIconConfigs.clear(),this._iconSetConfigs.clear(),this._cachedIconsByUrl.clear()}_getSvgFromConfig(n){return n.svgText?Qe(pa(this._svgElementFromConfig(n))):this._loadSvgIconFromConfig(n).pipe(ie(r=>pa(r)))}_getSvgFromIconSetConfigs(n,r){let o=this._extractIconWithNameFromAnySet(n,r);if(o)return Qe(o);let i=r.filter(s=>!s.svgText).map(s=>this._loadSvgIconSetFromConfig(s).pipe(Fi(a=>{let l=`Loading icon set URL: ${this._sanitizer.sanitize(Ie.RESOURCE_URL,s.url)} failed: ${a.message}`;return this._errorHandler.handleError(new Error(l)),Qe(null)})));return yn(i).pipe(ie(()=>{let s=this._extractIconWithNameFromAnySet(n,r);if(!s)throw Ag(n);return s}))}_extractIconWithNameFromAnySet(n,r){for(let o=r.length-1;o>=0;o--){let i=r[o];if(i.svgText&&i.svgText.toString().indexOf(n)>-1){let s=this._svgElementFromConfig(i),a=this._extractSvgIconFromSet(s,n,i.options);if(a)return a}}return null}_loadSvgIconFromConfig(n){return this._fetchIcon(n).pipe(fo(r=>n.svgText=r),ie(()=>this._svgElementFromConfig(n)))}_loadSvgIconSetFromConfig(n){return n.svgText?Qe(null):this._fetchIcon(n).pipe(fo(r=>n.svgText=r))}_extractSvgIconFromSet(n,r,o){let i=n.querySelector(`[id="${r}"]`);if(!i)return null;let s=i.cloneNode(!0);if(s.removeAttribute("id"),s.nodeName.toLowerCase()==="svg")return this._setSvgAttributes(s,o);if(s.nodeName.toLowerCase()==="symbol")return this._setSvgAttributes(this._toSvgElement(s),o);let a=this._svgElementFromString($r("<svg></svg>"));return a.appendChild(s),this._setSvgAttributes(a,o)}_svgElementFromString(n){let r=this._document.createElement("DIV");r.innerHTML=n;let o=r.querySelector("svg");if(!o)throw Error("<svg> tag not found");return o}_toSvgElement(n){let r=this._svgElementFromString($r("<svg></svg>")),o=n.attributes;for(let i=0;i<o.length;i++){let{name:s,value:a}=o[i];s!=="id"&&r.setAttribute(s,a)}for(let i=0;i<n.childNodes.length;i++)n.childNodes[i].nodeType===this._document.ELEMENT_NODE&&r.appendChild(n.childNodes[i].cloneNode(!0));return r}_setSvgAttributes(n,r){return n.setAttribute("fit",""),n.setAttribute("height","100%"),n.setAttribute("width","100%"),n.setAttribute("preserveAspectRatio","xMidYMid meet"),n.setAttribute("focusable","false"),r&&r.viewBox&&n.setAttribute("viewBox",r.viewBox),n}_fetchIcon(n){let{url:r,options:o}=n,i=o?.withCredentials??!1;if(!this._httpClient)throw $I();if(r==null)throw Error(`Cannot fetch icon from URL "${r}".`);let s=this._sanitizer.sanitize(Ie.RESOURCE_URL,r);if(!s)throw Rg(r);let a=this._inProgressUrlFetches.get(s);if(a)return a;let c=this._httpClient.get(s,{responseType:"text",withCredentials:i}).pipe(ie(l=>$r(l)),uo(()=>this._inProgressUrlFetches.delete(s)),Za());return this._inProgressUrlFetches.set(s,c),c}_addSvgIconConfig(n,r,o){return this._svgIconConfigs.set(Og(n,r),o),this}_addSvgIconSetConfig(n,r){let o=this._iconSetConfigs.get(n);return o?o.push(r):this._iconSetConfigs.set(n,[r]),this}_svgElementFromConfig(n){if(!n.svgElement){let r=this._svgElementFromString(n.svgText);this._setSvgAttributes(r,n.options),n.svgElement=r}return n.svgElement}_getIconConfigFromResolvers(n,r){for(let o=0;o<this._resolvers.length;o++){let i=this._resolvers[o](r,n);if(i)return zI(i)?new Lt(i.url,null,i.options):new Lt(i,null)}}static \u0275fac=function(r){return new(r||e)(M(Fd,8),M(Ld),M(L,8),M(we))};static \u0275prov=F({token:e,factory:e.\u0275fac,providedIn:"root"})}return e})();function pa(e){return e.cloneNode(!0)}function Og(e,t){return e+":"+t}function zI(e){return!!(e.url&&e.options)}var GI=["*"],WI=new g("MAT_ICON_DEFAULT_OPTIONS"),qI=new g("mat-icon-location",{providedIn:"root",factory:()=>{let e=p(L),t=e?e.location:null;return{getPathname:()=>t?t.pathname+t.search:""}}}),Fg=["clip-path","color-profile","src","cursor","fill","filter","marker","marker-start","marker-mid","marker-end","mask","stroke"],ZI=Fg.map(e=>`[${e}]`).join(", "),QI=/^url\(['"]?#(.*?)['"]?\)$/,Lg=(()=>{class e{_elementRef=p(q);_iconRegistry=p(Pg);_location=p(qI);_errorHandler=p(we);_defaultColor;get color(){return this._color||this._defaultColor}set color(n){this._color=n}_color;inline=!1;get svgIcon(){return this._svgIcon}set svgIcon(n){n!==this._svgIcon&&(n?this._updateSvgIcon(n):this._svgIcon&&this._clearSvgElement(),this._svgIcon=n)}_svgIcon;get fontSet(){return this._fontSet}set fontSet(n){let r=this._cleanupFontValue(n);r!==this._fontSet&&(this._fontSet=r,this._updateFontIconClasses())}_fontSet;get fontIcon(){return this._fontIcon}set fontIcon(n){let r=this._cleanupFontValue(n);r!==this._fontIcon&&(this._fontIcon=r,this._updateFontIconClasses())}_fontIcon;_previousFontSetClass=[];_previousFontIconClass;_svgName=null;_svgNamespace=null;_previousPath;_elementsWithExternalReferences;_currentIconFetch=le.EMPTY;constructor(){let n=p(new nn("aria-hidden"),{optional:!0}),r=p(WI,{optional:!0});r&&(r.color&&(this.color=this._defaultColor=r.color),r.fontSet&&(this.fontSet=r.fontSet)),n||this._elementRef.nativeElement.setAttribute("aria-hidden","true")}_splitIconName(n){if(!n)return["",""];let r=n.split(":");switch(r.length){case 1:return["",r[0]];case 2:return r;default:throw Error(`Invalid icon name: "${n}"`)}}ngOnInit(){this._updateFontIconClasses()}ngAfterViewChecked(){let n=this._elementsWithExternalReferences;if(n&&n.size){let r=this._location.getPathname();r!==this._previousPath&&(this._previousPath=r,this._prependPathToReferences(r))}}ngOnDestroy(){this._currentIconFetch.unsubscribe(),this._elementsWithExternalReferences&&this._elementsWithExternalReferences.clear()}_usingFontIcon(){return!this.svgIcon}_setSvgElement(n){this._clearSvgElement();let r=this._location.getPathname();this._previousPath=r,this._cacheChildrenWithExternalReferences(n),this._prependPathToReferences(r),this._elementRef.nativeElement.appendChild(n)}_clearSvgElement(){let n=this._elementRef.nativeElement,r=n.childNodes.length;for(this._elementsWithExternalReferences&&this._elementsWithExternalReferences.clear();r--;){let o=n.childNodes[r];(o.nodeType!==1||o.nodeName.toLowerCase()==="svg")&&o.remove()}}_updateFontIconClasses(){if(!this._usingFontIcon())return;let n=this._elementRef.nativeElement,r=(this.fontSet?this._iconRegistry.classNameForFontAlias(this.fontSet).split(/ +/):this._iconRegistry.getDefaultFontSetClass()).filter(o=>o.length>0);this._previousFontSetClass.forEach(o=>n.classList.remove(o)),r.forEach(o=>n.classList.add(o)),this._previousFontSetClass=r,this.fontIcon!==this._previousFontIconClass&&!r.includes("mat-ligature-font")&&(this._previousFontIconClass&&n.classList.remove(this._previousFontIconClass),this.fontIcon&&n.classList.add(this.fontIcon),this._previousFontIconClass=this.fontIcon)}_cleanupFontValue(n){return typeof n=="string"?n.trim().split(" ")[0]:n}_prependPathToReferences(n){let r=this._elementsWithExternalReferences;r&&r.forEach((o,i)=>{o.forEach(s=>{i.setAttribute(s.name,`url('${n}#${s.value}')`)})})}_cacheChildrenWithExternalReferences(n){let r=n.querySelectorAll(ZI),o=this._elementsWithExternalReferences=this._elementsWithExternalReferences||new Map;for(let i=0;i<r.length;i++)Fg.forEach(s=>{let a=r[i],c=a.getAttribute(s),l=c?c.match(QI):null;if(l){let d=o.get(a);d||(d=[],o.set(a,d)),d.push({name:s,value:l[1]})}})}_updateSvgIcon(n){if(this._svgNamespace=null,this._svgName=null,this._currentIconFetch.unsubscribe(),n){let[r,o]=this._splitIconName(n);r&&(this._svgNamespace=r),o&&(this._svgName=o),this._currentIconFetch=this._iconRegistry.getNamedSvgIcon(o,r).pipe(lo(1)).subscribe(i=>this._setSvgElement(i),i=>{let s=`Error retrieving icon ${r}:${o}! ${i.message}`;this._errorHandler.handleError(new Error(s))})}}static \u0275fac=function(r){return new(r||e)};static \u0275cmp=B({type:e,selectors:[["mat-icon"]],hostAttrs:["role","img",1,"mat-icon","notranslate"],hostVars:10,hostBindings:function(r,o){r&2&&(De("data-mat-icon-type",o._usingFontIcon()?"font":"svg")("data-mat-icon-name",o._svgName||o.fontIcon)("data-mat-icon-namespace",o._svgNamespace||o.fontSet)("fontIcon",o._usingFontIcon()?o.fontIcon:null),kt(o.color?"mat-"+o.color:""),j("mat-icon-inline",o.inline)("mat-icon-no-color",o.color!=="primary"&&o.color!=="accent"&&o.color!=="warn"))},inputs:{color:"color",inline:[2,"inline","inline",H],svgIcon:"svgIcon",fontSet:"fontSet",fontIcon:"fontIcon"},exportAs:["matIcon"],ngContentSelectors:GI,decls:1,vars:0,template:function(r,o){r&1&&(X(),k(0))},styles:[`mat-icon, mat-icon.mat-primary, mat-icon.mat-accent, mat-icon.mat-warn {
  color: var(--%NS%mat-icon-color, inherit);
}

.mat-icon {
  -webkit-user-select: none;
  user-select: none;
  background-repeat: no-repeat;
  display: inline-block;
  fill: currentColor;
  height: 24px;
  width: 24px;
  overflow: hidden;
}
.mat-icon.mat-icon-inline {
  font-size: inherit;
  height: inherit;
  line-height: inherit;
  width: inherit;
}
.mat-icon.mat-ligature-font[fontIcon]::before {
  content: attr(fontIcon);
}

[dir=rtl] .mat-icon-rtl-mirror {
  transform: scale(-1, 1);
}

.mat-form-field:not(.mat-form-field-appearance-legacy) .mat-form-field-prefix .mat-icon,
.mat-form-field:not(.mat-form-field-appearance-legacy) .mat-form-field-suffix .mat-icon {
  display: block;
}
.mat-form-field:not(.mat-form-field-appearance-legacy) .mat-form-field-prefix .mat-icon-button .mat-icon,
.mat-form-field:not(.mat-form-field-appearance-legacy) .mat-form-field-suffix .mat-icon-button .mat-icon {
  margin: auto;
}
`],encapsulation:2})}return e})(),Vg=(()=>{class e{static \u0275fac=function(r){return new(r||e)};static \u0275mod=ee({type:e});static \u0275inj=K({imports:[Pe]})}return e})();var qg=(()=>{class e{_renderer;_elementRef;onChange=n=>{};onTouched=()=>{};constructor(n,r){this._renderer=n,this._elementRef=r}setProperty(n,r){this._renderer.setProperty(this._elementRef.nativeElement,n,r)}registerOnTouched(n){this.onTouched=n}registerOnChange(n){this.onChange=n}setDisabledState(n){this.setProperty("disabled",n)}static \u0275fac=function(r){return new(r||e)(fe(Re),fe(q))};static \u0275dir=te({type:e})}return e})(),KI=(()=>{class e extends qg{static \u0275fac=(()=>{let n;return function(o){return(n||(n=Hs(e)))(o||e)}})();static \u0275dir=te({type:e,features:[Ve]})}return e})(),Qr=new g("");var XI={provide:Qr,useExisting:He(()=>Zg),multi:!0};function JI(){let e=Ge()?Ge().getUserAgent():"";return/android (\d+)/.test(e.toLowerCase())}var eD=new g(""),Zg=(()=>{class e extends qg{_compositionMode;_composing=!1;constructor(n,r,o){super(n,r),this._compositionMode=o,this._compositionMode==null&&(this._compositionMode=!JI())}writeValue(n){let r=n??"";this.setProperty("value",r)}_handleInput(n){(!this._compositionMode||this._compositionMode&&!this._composing)&&this.onChange(n)}_compositionStart(){this._composing=!0}_compositionEnd(n){this._composing=!1,this._compositionMode&&this.onChange(n)}static \u0275fac=function(r){return new(r||e)(fe(Re),fe(q),fe(eD,8))};static \u0275dir=te({type:e,selectors:[["input","formControlName","",3,"type","checkbox",3,"ngNoCva",""],["textarea","formControlName","",3,"ngNoCva",""],["input","formControl","",3,"type","checkbox",3,"ngNoCva",""],["textarea","formControl","",3,"ngNoCva",""],["input","ngModel","",3,"type","checkbox",3,"ngNoCva",""],["textarea","ngModel","",3,"ngNoCva",""],["","ngDefaultControl",""]],hostBindings:function(r,o){r&1&&T("input",function(s){return o._handleInput(s.target.value)})("blur",function(){return o.onTouched()})("compositionstart",function(){return o._compositionStart()})("compositionend",function(s){return o._compositionEnd(s.target.value)})},standalone:!1,features:[pt([XI]),Ve]})}return e})();function ou(e){return e==null||iu(e)===0}function iu(e){return e==null?null:Array.isArray(e)||typeof e=="string"?e.length:e instanceof Set?e.size:null}var ya=new g(""),tD=new g(""),nD=/^(?=.{1,254}$)(?=.{1,64}@)[a-zA-Z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-zA-Z0-9!#$%&'*+/=?^_`{|}~-]+)*@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/,Xd=class{static min(t){return rD(t)}static max(t){return oD(t)}static required(t){return Qg(t)}static requiredTrue(t){return iD(t)}static email(t){return sD(t)}static minLength(t){return aD(t)}static maxLength(t){return cD(t)}static pattern(t){return lD(t)}static nullValidator(t){return ha()}static compose(t){return tv(t)}static composeAsync(t){return rv(t)}};function rD(e){return t=>{if(t.value==null||e==null)return null;let n=parseFloat(t.value);return!isNaN(n)&&n<e?{min:{min:e,actual:t.value}}:null}}function oD(e){return t=>{if(t.value==null||e==null)return null;let n=parseFloat(t.value);return!isNaN(n)&&n>e?{max:{max:e,actual:t.value}}:null}}function Qg(e){return ou(e.value)?{required:!0}:null}function iD(e){return e.value===!0?null:{required:!0}}function sD(e){return ou(e.value)||nD.test(e.value)?null:{email:!0}}function aD(e){return t=>{let n=t.value?.length??iu(t.value);return n===null||n===0?null:n<e?{minlength:{requiredLength:e,actualLength:n}}:null}}function cD(e){return t=>{let n=t.value?.length??iu(t.value);return n!==null&&n>e?{maxlength:{requiredLength:e,actualLength:n}}:null}}function lD(e){if(!e)return ha;let t,n;return typeof e=="string"?(n="",e.charAt(0)!=="^"&&(n+="^"),n+=e,e.charAt(e.length-1)!=="$"&&(n+="$"),t=new RegExp(n)):(n=e.toString(),t=e),r=>{if(ou(r.value))return null;let o=r.value;return t.test(o)?null:{pattern:{requiredPattern:n,actualValue:o}}}}function ha(e){return null}function Yg(e){return e!=null}function Kg(e){return $o(e)?so(e):e}function Xg(e){let t={};return e.forEach(n=>{t=n!=null?w(w({},t),n):t}),Object.keys(t).length===0?null:t}function Jg(e,t){return t.map(n=>n(e))}function dD(e){return!e.validate}function ev(e){return e.map(t=>dD(t)?t:n=>t.validate(n))}function tv(e){if(!e)return null;let t=e.filter(Yg);return t.length==0?null:function(n){return Xg(Jg(n,t))}}function nv(e){return e!=null?tv(ev(e)):null}function rv(e){if(!e)return null;let t=e.filter(Yg);return t.length==0?null:function(n){let r=Jg(n,t).map(Kg);return yn(r).pipe(ie(Xg))}}function ov(e){return e!=null?rv(ev(e)):null}function jg(e,t){return e===null?[t]:Array.isArray(e)?[...e,t]:[e,t]}function uD(e){return e._rawValidators}function fD(e){return e._rawAsyncValidators}function Jd(e){return e?Array.isArray(e)?e:[e]:[]}function ga(e,t){return Array.isArray(e)?e.includes(t):e===t}function Hg(e,t){let n=Jd(t);return Jd(e).forEach(o=>{ga(n,o)||n.push(o)}),n}function Bg(e,t){return Jd(t).filter(n=>!ga(e,n))}var va=class{get value(){return this.control?this.control.value:null}get valid(){return this.control?this.control.valid:null}get invalid(){return this.control?this.control.invalid:null}get pending(){return this.control?this.control.pending:null}get disabled(){return this.control?this.control.disabled:null}get enabled(){return this.control?this.control.enabled:null}get errors(){return this.control?this.control.errors:null}get pristine(){return this.control?this.control.pristine:null}get dirty(){return this.control?this.control.dirty:null}get touched(){return this.control?this.control.touched:null}get status(){return this.control?this.control.status:null}get untouched(){return this.control?this.control.untouched:null}get statusChanges(){return this.control?this.control.statusChanges:null}get valueChanges(){return this.control?this.control.valueChanges:null}get path(){return null}_composedValidatorFn;_composedAsyncValidatorFn;_rawValidators=[];_rawAsyncValidators=[];_setValidators(t){this._rawValidators=t||[],this._composedValidatorFn=nv(this._rawValidators)}_setAsyncValidators(t){this._rawAsyncValidators=t||[],this._composedAsyncValidatorFn=ov(this._rawAsyncValidators)}get validator(){return this._composedValidatorFn||null}get asyncValidator(){return this._composedAsyncValidatorFn||null}_onDestroyCallbacks=[];_registerOnDestroy(t){this._onDestroyCallbacks.push(t)}_invokeOnDestroyCallbacks(){this._onDestroyCallbacks.forEach(t=>t()),this._onDestroyCallbacks=[]}reset(t=void 0){this.control?.reset(t)}hasError(t,n){return this.control?this.control.hasError(t,n):!1}getError(t,n){return this.control?this.control.getError(t,n):null}},eu=class extends va{name;get formDirective(){return null}get path(){return null}};var li="VALID",ma="INVALID",Wr="PENDING",di="DISABLED",nr=class{},ba=class extends nr{value;source;constructor(t,n){super(),this.value=t,this.source=n}},ui=class extends nr{pristine;source;constructor(t,n){super(),this.pristine=t,this.source=n}},fi=class extends nr{touched;source;constructor(t,n){super(),this.touched=t,this.source=n}},qr=class extends nr{status;source;constructor(t,n){super(),this.status=t,this.source=n}};var pi=class extends nr{source;constructor(t){super(),this.source=t}};function pD(e){return(_a(e)?e.validators:e)||null}function mD(e){return Array.isArray(e)?nv(e):e||null}function hD(e,t){return(_a(t)?t.asyncValidators:e)||null}function gD(e){return Array.isArray(e)?ov(e):e||null}function _a(e){return e!=null&&!Array.isArray(e)&&typeof e=="object"}var tu=class{_pendingDirty=!1;_hasOwnPendingAsyncValidator=null;_pendingTouched=!1;_onCollectionChange=()=>{};_updateOn;_hasRequired=Ne(!1);_parent=null;_asyncValidationSubscription;_composedValidatorFn;_composedAsyncValidatorFn;_rawValidators;_rawAsyncValidators;value;constructor(t,n){this._assignValidators(t),this._assignAsyncValidators(n)}get validator(){return this._composedValidatorFn}set validator(t){this._rawValidators=this._composedValidatorFn=t,this._updateHasRequiredValidator()}get asyncValidator(){return this._composedAsyncValidatorFn}set asyncValidator(t){this._rawAsyncValidators=this._composedAsyncValidatorFn=t}get parent(){return this._parent}get status(){return Oe(this.statusReactive)}set status(t){Oe(()=>this.statusReactive.set(t))}_status=tn(()=>this.statusReactive());statusReactive=Ne(void 0);get valid(){return this.status===li}get invalid(){return this.status===ma}get pending(){return this.status===Wr}get disabled(){return this.status===di}get enabled(){return this.status!==di}errors;get pristine(){return Oe(this.pristineReactive)}set pristine(t){Oe(()=>this.pristineReactive.set(t))}_pristine=tn(()=>this.pristineReactive());pristineReactive=Ne(!0);get dirty(){return!this.pristine}get touched(){return Oe(this.touchedReactive)}set touched(t){Oe(()=>this.touchedReactive.set(t))}_touched=tn(()=>this.touchedReactive());touchedReactive=Ne(!1);get untouched(){return!this.touched}_events=new de;events=this._events.asObservable();valueChanges;statusChanges;get updateOn(){return this._updateOn?this._updateOn:this.parent?this.parent.updateOn:"change"}setValidators(t){this._assignValidators(t)}setAsyncValidators(t){this._assignAsyncValidators(t)}addValidators(t){this.setValidators(Hg(t,this._rawValidators))}addAsyncValidators(t){this.setAsyncValidators(Hg(t,this._rawAsyncValidators))}removeValidators(t){this.setValidators(Bg(t,this._rawValidators))}removeAsyncValidators(t){this.setAsyncValidators(Bg(t,this._rawAsyncValidators))}hasValidator(t){return ga(this._rawValidators,t)}hasAsyncValidator(t){return ga(this._rawAsyncValidators,t)}clearValidators(){this.validator=null}clearAsyncValidators(){this.asyncValidator=null}markAsTouched(t={}){let n=this.touched===!1;this.touched=!0;let r=t.sourceControl??this;t.onlySelf||this._parent?.markAsTouched(U(w({},t),{sourceControl:r})),n&&t.emitEvent!==!1&&this._events.next(new fi(!0,r))}markAllAsDirty(t={}){this.markAsDirty({onlySelf:!0,emitEvent:t.emitEvent,sourceControl:this}),this._forEachChild(n=>n.markAllAsDirty(t))}markAllAsTouched(t={}){this.markAsTouched({onlySelf:!0,emitEvent:t.emitEvent,sourceControl:this}),this._forEachChild(n=>n.markAllAsTouched(t))}markAsUntouched(t={}){let n=this.touched===!0;this.touched=!1,this._pendingTouched=!1;let r=t.sourceControl??this;this._forEachChild(o=>{o.markAsUntouched({onlySelf:!0,emitEvent:t.emitEvent,sourceControl:r})}),t.onlySelf||this._parent?._updateTouched(t,r),n&&t.emitEvent!==!1&&this._events.next(new fi(!1,r))}markAsDirty(t={}){let n=this.pristine===!0;this.pristine=!1;let r=t.sourceControl??this;t.onlySelf||this._parent?.markAsDirty(U(w({},t),{sourceControl:r})),n&&t.emitEvent!==!1&&this._events.next(new ui(!1,r))}markAsPristine(t={}){let n=this.pristine===!1;this.pristine=!0,this._pendingDirty=!1;let r=t.sourceControl??this;this._forEachChild(o=>{o.markAsPristine({onlySelf:!0,emitEvent:t.emitEvent})}),t.onlySelf||this._parent?._updatePristine(t,r),n&&t.emitEvent!==!1&&this._events.next(new ui(!0,r))}markAsPending(t={}){this.status=Wr;let n=t.sourceControl??this;t.emitEvent!==!1&&(this._events.next(new qr(this.status,n)),this.statusChanges.emit(this.status)),t.onlySelf||this._parent?.markAsPending(U(w({},t),{sourceControl:n}))}disable(t={}){let n=this._parentMarkedDirty(t.onlySelf);this.status=di,this.errors=null,this._forEachChild(o=>{o.disable(U(w({},t),{onlySelf:!0}))}),this._updateValue();let r=t.sourceControl??this;t.emitEvent!==!1&&(this._events.next(new ba(this.value,r)),this._events.next(new qr(this.status,r)),this.valueChanges.emit(this.value),this.statusChanges.emit(this.status)),this._updateAncestors(U(w({},t),{skipPristineCheck:n}),this),this._onDisabledChange.forEach(o=>o(!0))}enable(t={}){let n=this._parentMarkedDirty(t.onlySelf);this.status=li,this._forEachChild(r=>{r.enable(U(w({},t),{onlySelf:!0}))}),this.updateValueAndValidity({onlySelf:!0,emitEvent:t.emitEvent}),this._updateAncestors(U(w({},t),{skipPristineCheck:n}),this),this._onDisabledChange.forEach(r=>r(!1))}_updateAncestors(t,n){t.onlySelf||(this._parent?.updateValueAndValidity(t),t.skipPristineCheck||this._parent?._updatePristine({},n),this._parent?._updateTouched({},n))}setParent(t){this._parent=t}getRawValue(){return this.value}updateValueAndValidity(t={}){if(this._setInitialStatus(),this._updateValue(),this.enabled){let r=this._cancelExistingSubscription();this.errors=this._runValidator(),this.status=this._calculateStatus(),(this.status===li||this.status===Wr)&&this._runAsyncValidator(r,t.emitEvent)}let n=t.sourceControl??this;t.emitEvent!==!1&&(this._events.next(new ba(this.value,n)),this._events.next(new qr(this.status,n)),this.valueChanges.emit(this.value),this.statusChanges.emit(this.status)),t.onlySelf||this._parent?.updateValueAndValidity(U(w({},t),{sourceControl:n}))}_updateTreeValidity(t={emitEvent:!0}){this._forEachChild(n=>n._updateTreeValidity(t)),this.updateValueAndValidity({onlySelf:!0,emitEvent:t.emitEvent})}_setInitialStatus(){this.status=this._allControlsDisabled()?di:li}_runValidator(){return this.validator?this.validator(this):null}_runAsyncValidator(t,n){if(this.asyncValidator){this.status=Wr,this._hasOwnPendingAsyncValidator={emitEvent:n!==!1,shouldHaveEmitted:t!==!1};let r=Kg(this.asyncValidator(this));this._asyncValidationSubscription=r.subscribe(o=>{this._hasOwnPendingAsyncValidator=null,this.setErrors(o,{emitEvent:n,shouldHaveEmitted:t})})}}_cancelExistingSubscription(){if(this._asyncValidationSubscription){this._asyncValidationSubscription.unsubscribe();let t=(this._hasOwnPendingAsyncValidator?.emitEvent||this._hasOwnPendingAsyncValidator?.shouldHaveEmitted)??!1;return this._hasOwnPendingAsyncValidator=null,t}return!1}setErrors(t,n={}){this.errors=t,this._updateControlsErrors(n.emitEvent!==!1,this,n.shouldHaveEmitted)}get(t){let n=t;return n==null||(Array.isArray(n)||(n=n.split(".")),n.length===0)?null:n.reduce((r,o)=>r&&r._find(o),this)}getError(t,n){let r=n?this.get(n):this;return r?.errors?r.errors[t]:null}hasError(t,n){return!!this.getError(t,n)}get root(){let t=this;for(;t._parent;)t=t._parent;return t}_updateControlsErrors(t,n,r){this.status=this._calculateStatus(),t&&this.statusChanges.emit(this.status),(t||r)&&this._events.next(new qr(this.status,n)),this._parent&&this._parent._updateControlsErrors(t,n,r)}_initObservables(){this.valueChanges=new se,this.statusChanges=new se}_calculateStatus(){return this._allControlsDisabled()?di:this.errors?ma:this._hasOwnPendingAsyncValidator||this._anyControlsHaveStatus(Wr)?Wr:this._anyControlsHaveStatus(ma)?ma:li}_anyControlsHaveStatus(t){return this._anyControls(n=>n.status===t)}_anyControlsDirty(){return this._anyControls(t=>t.dirty)}_anyControlsTouched(){return this._anyControls(t=>t.touched)}_updatePristine(t,n){let r=!this._anyControlsDirty(),o=this.pristine!==r;this.pristine=r,t.onlySelf||this._parent?._updatePristine(t,n),o&&this._events.next(new ui(this.pristine,n))}_updateTouched(t={},n){this.touched=this._anyControlsTouched(),this._events.next(new fi(this.touched,n)),t.onlySelf||this._parent?._updateTouched(t,n)}_onDisabledChange=[];_registerOnCollectionChange(t){this._onCollectionChange=t}_setUpdateStrategy(t){_a(t)&&t.updateOn!=null&&(this._updateOn=t.updateOn)}_parentMarkedDirty(t){return!t&&!!this._parent?.dirty&&!this._parent._anyControlsDirty()}_find(t){return null}_assignValidators(t){this._rawValidators=Array.isArray(t)?t.slice():t,this._composedValidatorFn=mD(this._rawValidators),this._updateHasRequiredValidator()}_assignAsyncValidators(t){this._rawAsyncValidators=Array.isArray(t)?t.slice():t,this._composedAsyncValidatorFn=gD(this._rawAsyncValidators)}_updateHasRequiredValidator(){Oe(()=>this._hasRequired.set(this.hasValidator(Xd.required)))}};function vD(e){return e.tagName==="INPUT"||e.tagName==="SELECT"||e.tagName==="TEXTAREA"}function bD(e,t,n,r){switch(n){case"name":e.setAttribute(t,n,r);break;case"disabled":case"readonly":case"required":r?e.setAttribute(t,n,""):e.removeAttribute(t,n);break;case"max":case"min":case"minLength":case"maxLength":r!==void 0?e.setAttribute(t,n,r.toString()):e.removeAttribute(t,n);break}}var nu=class{kind;context;control;message;constructor({kind:t,context:n,control:r}){this.kind=t,this.context=n,this.control=r}};var yD=(()=>{class e{_validator=ha;_onChange;_enabled;ngOnChanges(n){if(this.inputName in n){let r=this.normalizeInput(n[this.inputName].currentValue);this._enabled=this.enabled(r),this._validator=this._enabled?this.createValidator(r):ha,this._onChange?.()}}validate(n){return this._validator(n)}registerOnValidatorChange(n){this._onChange=n}enabled(n){return n!=null}static \u0275fac=function(r){return new(r||e)};static \u0275dir=te({type:e,features:[Pr]})}return e})();var _D={provide:ya,useExisting:He(()=>iv),multi:!0};var iv=(()=>{class e extends yD{required;inputName="required";normalizeInput=H;createValidator=n=>Qg;enabled(n){return n}static \u0275fac=(()=>{let n;return function(o){return(n||(n=Hs(e)))(o||e)}})();static \u0275dir=te({type:e,selectors:[["","required","","formControlName","",3,"type","checkbox"],["","required","","formControl","",3,"type","checkbox"],["","required","","ngModel","",3,"type","checkbox"]],hostVars:1,hostBindings:function(r,o){r&2&&De("required",o._enabled?"":null)},inputs:{required:"required"},standalone:!1,features:[pt([_D]),Ve]})}return e})();var ED=new g(""),sv=new g("",{factory:()=>su}),su="always";function wD(e,t){return[...t.path,e]}function Ug(e,t,n=su){ID(e,t),t.valueAccessor.writeValue(e.value),(e.disabled||n==="always")&&t.valueAccessor.setDisabledState?.(e.disabled),DD(e,t),ND(e,t),CD(e,t),SD(e,t)}function $g(e,t){e.forEach(n=>{n.registerOnValidatorChange&&n.registerOnValidatorChange(t)})}function SD(e,t){if(t.valueAccessor.setDisabledState){let n=r=>{t.valueAccessor.setDisabledState(r)};e.registerOnDisabledChange(n),t._registerOnDestroy(()=>{e._unregisterOnDisabledChange(n)})}}function ID(e,t){let n=uD(e);t.validator!==null?e.setValidators(jg(n,t.validator)):typeof n=="function"&&e.setValidators([n]);let r=fD(e);t.asyncValidator!==null?e.setAsyncValidators(jg(r,t.asyncValidator)):typeof r=="function"&&e.setAsyncValidators([r]);let o=()=>e.updateValueAndValidity();$g(t._rawValidators,o),$g(t._rawAsyncValidators,o)}function DD(e,t){t.valueAccessor.registerOnChange(n=>{e._pendingValue=n,e._pendingChange=!0,e._pendingDirty=!0,e.updateOn==="change"&&av(e,t)})}function CD(e,t){t.valueAccessor.registerOnTouched(()=>{e._pendingTouched=!0,e.updateOn==="blur"&&e._pendingChange&&av(e,t),e.updateOn!=="submit"&&e.markAsTouched()})}function av(e,t){e._pendingDirty&&e.markAsDirty(),e.setValue(e._pendingValue,{emitModelToViewChange:!1}),t.viewToModelUpdate(e._pendingValue),e._pendingChange=!1}function ND(e,t){let n=(r,o)=>{t.valueAccessor.writeValue(r),o&&t.viewToModelUpdate(r)};e.registerOnChange(n),t._registerOnDestroy(()=>{e._unregisterOnChange(n)})}function TD(e,t){if(!Object.hasOwn(e,"model"))return!1;let n=e.model;return n.isFirstChange()?!0:!Object.is(t,n.currentValue)}function MD(e){return Object.getPrototypeOf(e.constructor)===KI}function xD(e,t){if(!t)return null;Array.isArray(t);let n,r,o;return t.forEach(i=>{i.constructor===Zg?n=i:MD(i)?r=i:o=i}),o||r||n||null}var AD={provide:ED,useFactory:()=>{let e=p(Zr,{self:!0});return{setParseErrors:t=>{e.setParseErrorSource(t)},set onReset(t){e.onReset=t}}}},Zr=class extends va{_parent=null;name=null;valueAccessor=null;isCustomControlBased=!1;userOnReset;resetSubscription;set onReset(t){this.userOnReset=t,this.resetSubscription?.unsubscribe(),this.resetSubscription=void 0,this.control&&(this.resetSubscription=this.control.events.subscribe(n=>{n instanceof pi&&this.control&&this.userOnReset?.(this.control.value)}),this.subscription?.add(this.resetSubscription))}isNativeFormElement=!1;rawValueAccessors;_selectedValueAccessor=null;get selectedValueAccessor(){return this._selectedValueAccessor??=xD(this,this.rawValueAccessors)}parseErrorsValidator=null;renderer;injector;requiredValidatorViaDi;subscription;customControlBindings=null;constructor(t,n,r){super(),this.injector=t,this.renderer=n,this.rawValueAccessors=r,this.injector?.get(xe)?.onDestroy(()=>{this.removeParseErrorsValidator(this.control),this.subscription?.unsubscribe()})}setupCustomControl(){this.subscription?.unsubscribe();let t=this.injector?.get(rn);if(!this.control||!t)return;let n=t.markForCheck.bind(t);this.subscription=new le,this.subscription.add(this.control.valueChanges.subscribe(n)),this.subscription.add(this.control.statusChanges.subscribe(n)),this.resetSubscription?.unsubscribe(),this.resetSubscription=void 0,this.userOnReset&&(this.resetSubscription=this.control.events.subscribe(r=>{r instanceof pi&&this.control&&this.userOnReset?.(this.control.value)}),this.subscription.add(this.resetSubscription)),this.parseErrorsValidator&&this.control.addValidators(this.parseErrorsValidator)}ngControlCreate(t){!t.nativeElement.hasAttribute?.("ngNoCva")&&(this.rawValueAccessors&&this.rawValueAccessors.length>0||this.valueAccessor!==null)||!t.customControl||(this.isCustomControlBased=!0,t.listenToCustomControlModel(o=>{this.control?.setValue(o,{emitModelToViewChange:!1}),this.control?.markAsDirty(),this.viewToModelUpdate(o)}),t.listenToCustomControlOutput("touch",()=>{this.control?.markAsTouched()}),this.customControlBindings={},this.isNativeFormElement=vD(t.nativeElement),this.requiredValidatorViaDi=this._rawValidators.find(o=>o instanceof iv))}ngControlUpdate(t,n){if(!this.isCustomControlBased)return;let r=this.control,o=this.customControlBindings;Object.is(o.value,r.value)||(o.value=r.value,t.setCustomControlModelInput(r.value)),this.bindControlProperty(t,o,"touched",r.touched),this.bindControlProperty(t,o,"dirty",r.dirty),this.bindControlProperty(t,o,"valid",r.valid),this.bindControlProperty(t,o,"invalid",r.invalid),this.bindControlProperty(t,o,"pending",r.pending),this.bindControlProperty(t,o,"disabled",r.disabled),this.shouldBindRequired&&this.bindControlProperty(t,o,"required",this.isRequired);let i=r.errors;if(o.errors!==i){o.errors=i;let s=this._convertErrors(i);t.setInputOnDirectives("errors",s)}}get isRequired(){return(this.requiredValidatorViaDi?._enabled||this.control?._hasRequired())??!1}get shouldBindRequired(){return!0}bindControlProperty(t,n,r,o){if(n[r]===o)return;n[r]=o;let i=t.setInputOnDirectives(r,o);this.isNativeFormElement&&!i&&(r==="disabled"||r==="required")&&this.renderer&&bD(this.renderer,t.nativeElement,r,o)}_convertErrors(t){if(t===null)return[];let n=this.control;return Object.entries(t).map(([r,o])=>new nu({context:o,kind:r,control:n}))}setParseErrorSource(t){if(t===void 0)return;let n=null,r=tn(()=>{let o=t();return o.length===0?null:o.reduce((i,s)=>(i[s.kind]=s,i),{})});this.parseErrorsValidator=(()=>n).bind(this),Yt(()=>{n=r(),this.control?.updateValueAndValidity({emitEvent:!1})},{injector:this.injector})}removeParseErrorsValidator(t){this.parseErrorsValidator&&(t?.removeValidators(this.parseErrorsValidator),t?.updateValueAndValidity({emitEvent:!1}))}},ru=class{_cd;constructor(t){this._cd=t}get isTouched(){return this._cd?.control?._touched?.(),!!this._cd?.control?.touched}get isUntouched(){return!!this._cd?.control?.untouched}get isPristine(){return this._cd?.control?._pristine?.(),!!this._cd?.control?.pristine}get isDirty(){return!!this._cd?.control?.dirty}get isValid(){return this._cd?.control?._status?.(),!!this._cd?.control?.valid}get isInvalid(){return!!this._cd?.control?.invalid}get isPending(){return!!this._cd?.control?.pending}get isSubmitted(){return this._cd?._submitted?.(),!!this._cd?.submitted}};var cv=(()=>{class e extends ru{constructor(n){super(n)}static \u0275fac=function(r){return new(r||e)(fe(Zr,2))};static \u0275dir=te({type:e,selectors:[["","formControlName",""],["","ngModel",""],["","formControl",""]],hostVars:14,hostBindings:function(r,o){r&2&&j("ng-untouched",o.isUntouched)("ng-touched",o.isTouched)("ng-pristine",o.isPristine)("ng-dirty",o.isDirty)("ng-valid",o.isValid)("ng-invalid",o.isInvalid)("ng-pending",o.isPending)},standalone:!1,features:[Ve]})}return e})();function zg(e,t){let n=e.indexOf(t);n>-1&&e.splice(n,1)}function Gg(e){return typeof e=="object"&&e!==null&&Object.keys(e).length===2&&"value"in e&&"disabled"in e}var RD=class extends tu{defaultValue=null;_onChange=[];_pendingValue;_pendingChange=!1;constructor(t=null,n,r){super(pD(n),hD(r,n)),this._applyFormState(t),this._setUpdateStrategy(n),this._initObservables(),this.updateValueAndValidity({onlySelf:!0,emitEvent:!!this.asyncValidator}),_a(n)&&(n.nonNullable||n.initialValueIsDefault)&&(Gg(t)?this.defaultValue=t.value:this.defaultValue=t)}setValue(t,n={}){Oe(()=>{this.value=this._pendingValue=t,this._onChange.length&&n.emitModelToViewChange!==!1&&this._onChange.forEach(r=>r(this.value,n.emitViewToModelChange!==!1)),this.updateValueAndValidity(n)})}patchValue(t,n={}){this.setValue(t,n)}reset(t=this.defaultValue,n={}){this._applyFormState(t),this.markAsPristine(n),this.markAsUntouched(n),this.setValue(this.value,n),n.overwriteDefaultValue&&(this.defaultValue=this.value),this._pendingChange=!1,n?.emitEvent!==!1&&this._events.next(new pi(this))}_updateValue(){}_anyControls(t){return!1}_allControlsDisabled(){return this.disabled}registerOnChange(t){this._onChange.push(t)}_unregisterOnChange(t){zg(this._onChange,t)}registerOnDisabledChange(t){this._onDisabledChange.push(t)}_unregisterOnDisabledChange(t){zg(this._onDisabledChange,t)}_forEachChild(t){}_syncPendingControls(){return this.updateOn==="submit"&&(this._pendingDirty&&this.markAsDirty(),this._pendingTouched&&this.markAsTouched(),this._pendingChange)?(this.setValue(this._pendingValue,{onlySelf:!0,emitModelToViewChange:!1}),!0):!1}_applyFormState(t){Gg(t)?(this.value=this._pendingValue=t.value,t.disabled?this.disable({onlySelf:!0,emitEvent:!1}):this.enable({onlySelf:!0,emitEvent:!1})):this.value=this._pendingValue=t}};var kD={provide:Zr,useExisting:He(()=>au)},Wg=Promise.resolve(),au=(()=>{class e extends Zr{_changeDetectorRef;callSetDisabledState;control=new RD;static ngAcceptInputType_isDisabled;_registered=!1;_ngModelInjector;viewModel;name="";isDisabled;model;options;update=new se;constructor(n,r,o,i,s,a,c,l){super(c,l,i),this._changeDetectorRef=s,this.callSetDisabledState=a,this._parent=n,this._setValidators(r),this._setAsyncValidators(o)}ngOnChanges(n){if(this._registered,this._checkForErrors(),!this._registered||"name"in n){if(this._registered&&(this._checkName(),this.formDirective)){let r=n.name.previousValue;this.formDirective.removeControl({name:r,path:this._getPath(r)})}this._setUpControl()}"isDisabled"in n&&this._updateDisabled(n),TD(n,this.viewModel)&&(this._updateValue(this.model),this.viewModel=this.model)}ngOnDestroy(){this.formDirective?.removeControl(this)}\u0275ngControlCreate(n){super.ngControlCreate(n)}\u0275ngControlUpdate(n){super.ngControlUpdate(n,!1)}get shouldBindRequired(){return!1}get path(){return this._getPath(this.name)}get formDirective(){return this._parent?this._parent.formDirective:null}viewToModelUpdate(n){this.viewModel=n,this.update.emit(n)}_setUpControl(){this._setUpdateStrategy(),this._isStandalone()?this._setUpStandalone():this.formDirective.addControl(this),this._registered=!0}_setUpdateStrategy(){this.options&&this.options.updateOn!=null&&(this.control._updateOn=this.options.updateOn)}_isStandalone(){return!this._parent||!!(this.options&&this.options.standalone)}_setUpStandalone(){this.isCustomControlBased?this.setupCustomControl():(this.valueAccessor??=this.selectedValueAccessor,Ug(this.control,this,this.callSetDisabledState)),this.control.updateValueAndValidity({emitEvent:!1})}_setupWithForm(n){this.isCustomControlBased?this.setupCustomControl():(this.valueAccessor??=this.selectedValueAccessor,Ug(this.control,this,n))}_checkForErrors(){this._checkName()}_checkName(){this.options&&this.options.name&&(this.name=this.options.name),!this._isStandalone()&&this.name}_updateValue(n){Wg.then(()=>{this.control.setValue(n,{emitViewToModelChange:!1}),this._changeDetectorRef?.markForCheck()})}_updateDisabled(n){let r=n.isDisabled.currentValue,o=r!==0&&H(r);Wg.then(()=>{o&&!this.control.disabled?this.control.disable():!o&&this.control.disabled&&this.control.enable(),this._changeDetectorRef?.markForCheck()})}_getPath(n){return this._parent?wD(n,this._parent):[n]}static \u0275fac=function(r){return new(r||e)(fe(eu,9),fe(ya,10),fe(tD,10),fe(Qr,10),fe(rn,8),fe(sv,8),fe(ae,8),fe(Re,8))};static \u0275dir=te({type:e,selectors:[["","ngModel","",3,"formControlName","",3,"formControl",""]],inputs:{name:"name",isDisabled:[0,"disabled","isDisabled"],model:[0,"ngModel","model"],options:[0,"ngModelOptions","options"]},outputs:{update:"ngModelChange"},exportAs:["ngModel"],standalone:!1,features:[pt([kD,AD]),Ve,Pr,ad(null)]})}return e})();var OD=(()=>{class e{static \u0275fac=function(r){return new(r||e)};static \u0275mod=ee({type:e});static \u0275inj=K({})}return e})();var lv=(()=>{class e{static withConfig(n){return{ngModule:e,providers:[{provide:sv,useValue:n.callSetDisabledState??su}]}}static \u0275fac=function(r){return new(r||e)};static \u0275mod=ee({type:e});static \u0275inj=K({imports:[OD]})}return e})();var FD=["*"],Ea=(()=>{class e{labelPosition="after";static \u0275fac=function(r){return new(r||e)};static \u0275cmp=B({type:e,selectors:[["","mat-internal-form-field",""]],hostAttrs:[1,"mdc-form-field","mat-internal-form-field"],hostVars:2,hostBindings:function(r,o){r&2&&j("mdc-form-field--align-end",o.labelPosition==="before")},inputs:{labelPosition:"labelPosition"},ngContentSelectors:FD,decls:1,vars:0,template:function(r,o){r&1&&(X(),k(0))},styles:[`.mat-internal-form-field {
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  display: inline-flex;
  align-items: center;
  vertical-align: middle;
}
.mat-internal-form-field > label, .mat-internal-form-field > .mat-internal-form-field-label {
  margin-left: 0;
  margin-right: auto;
  padding-left: 4px;
  padding-right: 0;
  order: 0;
}
[dir=rtl] .mat-internal-form-field > label, [dir=rtl] .mat-internal-form-field > .mat-internal-form-field-label {
  margin-left: auto;
  margin-right: 0;
  padding-left: 0;
  padding-right: 4px;
}

.mdc-form-field--align-end > label, .mdc-form-field--align-end > .mat-internal-form-field-label {
  margin-left: auto;
  margin-right: 0;
  padding-left: 0;
  padding-right: 4px;
  order: -1;
}
[dir=rtl] .mdc-form-field--align-end .mdc-form-field--align-end label, [dir=rtl] .mdc-form-field--align-end .mdc-form-field--align-end .mat-internal-form-field-label {
  margin-left: 0;
  margin-right: auto;
  padding-left: 4px;
  padding-right: 0;
}
`],encapsulation:2})}return e})();var LD=["switch"],VD=["*"];function jD(e,t){e&1&&(v(0,"span",11),cs(),v(1,"svg",13),N(2,"path",14),y(),v(3,"svg",15),N(4,"path",16),y()())}var HD=new g("mat-slide-toggle-default-options",{providedIn:"root",factory:()=>({disableToggleValue:!1,hideIcon:!1,disabledInteractive:!1})}),wa=class{source;checked;constructor(t,n){this.source=t,this.checked=n}},cu=(()=>{class e{_elementRef=p(q);_focusMonitor=p(Xn);_changeDetectorRef=p(rn);defaults=p(HD);_onChange=n=>{};_onTouched=()=>{};_validatorOnChange=()=>{};_uniqueId;_checked=!1;_createChangeEvent(n){return new wa(this,n)}_labelId;get buttonId(){return`${this.id||this._uniqueId}-button`}_switchElement;focus(){this._switchElement.nativeElement.focus()}_noopAnimations=mt();_focused=!1;name=null;id;labelPosition="after";ariaLabel=null;ariaLabelledby=null;ariaDescribedby;required=!1;color;disabled=!1;fullWidth=!1;disableRipple=!1;tabIndex=0;get checked(){return this._checked}set checked(n){this._checked=n,this._changeDetectorRef.markForCheck()}hideIcon;disabledInteractive;change=new se;toggleChange=new se;get inputId(){return`${this.id||this._uniqueId}-input`}constructor(){p(Ft).load(zr);let n=p(new nn("tabindex"),{optional:!0}),r=this.defaults;this.tabIndex=n==null?0:parseInt(n)||0,this.color=r.color||"accent",this.id=this._uniqueId=p(sn).getId("mat-mdc-slide-toggle-"),this.hideIcon=r.hideIcon??!1,this.disabledInteractive=r.disabledInteractive??!1,this._labelId=this._uniqueId+"-label"}ngAfterContentInit(){this._focusMonitor.monitor(this._elementRef,!0).subscribe(n=>{n==="keyboard"||n==="program"?(this._focused=!0,this._changeDetectorRef.markForCheck()):n||Promise.resolve().then(()=>{this._focused=!1,this._onTouched(),this._changeDetectorRef.markForCheck()})})}ngOnChanges(n){n.required&&this._validatorOnChange()}ngOnDestroy(){this._focusMonitor.stopMonitoring(this._elementRef)}writeValue(n){this.checked=!!n}registerOnChange(n){this._onChange=n}registerOnTouched(n){this._onTouched=n}validate(n){return this.required&&n.value!==!0?{required:!0}:null}registerOnValidatorChange(n){this._validatorOnChange=n}setDisabledState(n){this.disabled=n,this._changeDetectorRef.markForCheck()}toggle(){this.checked=!this.checked,this._onChange(this.checked)}_emitChangeEvent(){this._onChange(this.checked),this.change.emit(this._createChangeEvent(this.checked))}_handleClick(){this.disabled||(this.toggleChange.emit(),this.defaults.disableToggleValue||(this.checked=!this.checked,this._onChange(this.checked),this.change.emit(new wa(this,this.checked))))}_getAriaLabelledBy(){return this.ariaLabelledby?this.ariaLabelledby:this.ariaLabel?null:this._labelId}static \u0275fac=function(r){return new(r||e)};static \u0275cmp=B({type:e,selectors:[["mat-slide-toggle"]],viewQuery:function(r,o){if(r&1&&Vr(LD,5),r&2){let i;At(i=Rt())&&(o._switchElement=i.first)}},hostAttrs:[1,"mat-mdc-slide-toggle"],hostVars:15,hostBindings:function(r,o){r&2&&(Qs("id",o.id),De("tabindex",null)("aria-label",null)("name",null)("aria-labelledby",null),kt(o.color?"mat-"+o.color:""),j("mat-mdc-slide-toggle-focused",o._focused)("mat-mdc-slide-toggle-checked",o.checked)("mat-slide-toggle-full-width",o.fullWidth)("_mat-animation-noopable",o._noopAnimations))},inputs:{name:"name",id:"id",labelPosition:"labelPosition",ariaLabel:[0,"aria-label","ariaLabel"],ariaLabelledby:[0,"aria-labelledby","ariaLabelledby"],ariaDescribedby:[0,"aria-describedby","ariaDescribedby"],required:[2,"required","required",H],color:"color",disabled:[2,"disabled","disabled",H],fullWidth:[2,"fullWidth","fullWidth",H],disableRipple:[2,"disableRipple","disableRipple",H],tabIndex:[2,"tabIndex","tabIndex",n=>n==null?0:Qn(n)],checked:[2,"checked","checked",H],hideIcon:[2,"hideIcon","hideIcon",H],disabledInteractive:[2,"disabledInteractive","disabledInteractive",H]},outputs:{change:"change",toggleChange:"toggleChange"},exportAs:["matSlideToggle"],features:[pt([{provide:Qr,useExisting:He(()=>e),multi:!0},{provide:ya,useExisting:e,multi:!0}]),Pr],ngContentSelectors:VD,decls:14,vars:27,consts:[["switch",""],["mat-internal-form-field","",3,"labelPosition"],["role","switch","type","button",1,"mdc-switch",3,"click","tabIndex","disabled"],[1,"mat-mdc-slide-toggle-touch-target"],[1,"mdc-switch__track"],[1,"mdc-switch__handle-track"],[1,"mdc-switch__handle"],[1,"mdc-switch__shadow"],[1,"mdc-elevation-overlay"],[1,"mdc-switch__ripple"],["mat-ripple","",1,"mat-mdc-slide-toggle-ripple","mat-focus-indicator",3,"matRippleTrigger","matRippleDisabled","matRippleCentered"],[1,"mdc-switch__icons"],[1,"mdc-label",3,"click","for"],["viewBox","0 0 24 24","aria-hidden","true",1,"mdc-switch__icon","mdc-switch__icon--on"],["d","M19.69,5.23L8.96,15.96l-4.23-4.23L2.96,13.5l6,6L21.46,7L19.69,5.23z"],["viewBox","0 0 24 24","aria-hidden","true",1,"mdc-switch__icon","mdc-switch__icon--off"],["d","M20 13H4v-2h16v2z"]],template:function(r,o){if(r&1&&(X(),v(0,"div",1)(1,"button",2,0),T("click",function(){return o._handleClick()}),N(3,"div",3)(4,"span",4),v(5,"span",5)(6,"span",6)(7,"span",7),N(8,"span",8),y(),v(9,"span",9),N(10,"span",10),y(),lt(11,jD,5,0,"span",11),y()()(),v(12,"label",12),T("click",function(s){return s.stopPropagation()}),k(13),y()()),r&2){let i=ft(2);ce("labelPosition",o.labelPosition),W(),j("mdc-switch--selected",o.checked)("mdc-switch--unselected",!o.checked)("mdc-switch--checked",o.checked)("mdc-switch--disabled",o.disabled)("mat-mdc-slide-toggle-disabled-interactive",o.disabledInteractive),ce("tabIndex",o.disabled&&!o.disabledInteractive?-1:o.tabIndex)("disabled",o.disabled&&!o.disabledInteractive),De("id",o.buttonId)("name",o.name)("aria-label",o.ariaLabel)("aria-labelledby",o._getAriaLabelledBy())("aria-describedby",o.ariaDescribedby)("aria-required",o.required||null)("aria-checked",o.checked)("aria-disabled",o.disabled&&o.disabledInteractive?"true":null),W(9),ce("matRippleTrigger",i)("matRippleDisabled",o.disableRipple||o.disabled)("matRippleCentered",!0),W(),dt(o.hideIcon?-1:11),W(),ce("for",o.buttonId),De("id",o._labelId)}},dependencies:[la,Ea],styles:[`.mdc-switch {
  align-items: center;
  background: none;
  border: none;
  cursor: pointer;
  display: inline-flex;
  flex-shrink: 0;
  margin: 0;
  outline: none;
  overflow: visible;
  padding: 0;
  position: relative;
  width: var(--%NS%mat-slide-toggle-track-width, 52px);
}
.mdc-switch.mdc-switch--disabled {
  cursor: default;
  pointer-events: none;
}
.mdc-switch.mat-mdc-slide-toggle-disabled-interactive {
  pointer-events: auto;
}

.mdc-switch__track {
  overflow: hidden;
  position: relative;
  width: 100%;
  height: var(--%NS%mat-slide-toggle-track-height, 32px);
  border-radius: var(--%NS%mat-slide-toggle-track-shape, var(--%NS%mat-sys-corner-full));
}
.mdc-switch--disabled.mdc-switch .mdc-switch__track {
  opacity: var(--%NS%mat-slide-toggle-disabled-track-opacity, 0.12);
}
.mdc-switch__track::before, .mdc-switch__track::after {
  border: 1px solid transparent;
  border-radius: inherit;
  box-sizing: border-box;
  content: "";
  height: 100%;
  left: 0;
  position: absolute;
  width: 100%;
  border-width: var(--%NS%mat-slide-toggle-track-outline-width, 2px);
  border-color: var(--%NS%mat-slide-toggle-track-outline-color, var(--%NS%mat-sys-outline));
}
.mdc-switch--selected .mdc-switch__track::before, .mdc-switch--selected .mdc-switch__track::after {
  border-width: var(--%NS%mat-slide-toggle-selected-track-outline-width, 2px);
  border-color: var(--%NS%mat-slide-toggle-selected-track-outline-color, transparent);
}
.mdc-switch--disabled .mdc-switch__track::before, .mdc-switch--disabled .mdc-switch__track::after {
  border-width: var(--%NS%mat-slide-toggle-disabled-unselected-track-outline-width, 2px);
  border-color: var(--%NS%mat-slide-toggle-disabled-unselected-track-outline-color, var(--%NS%mat-sys-on-surface));
}
@media (forced-colors: active) {
  .mdc-switch__track {
    border-color: currentColor;
  }
}
.mdc-switch__track::before {
  transition: transform 75ms 0ms cubic-bezier(0, 0, 0.2, 1);
  transform: translateX(0);
  background: var(--%NS%mat-slide-toggle-unselected-track-color, var(--%NS%mat-sys-surface-variant));
}
.mdc-switch--selected .mdc-switch__track::before {
  transition: transform 75ms 0ms cubic-bezier(0.4, 0, 0.6, 1);
  transform: translateX(100%);
}
[dir=rtl] .mdc-switch--selected .mdc-switch--selected .mdc-switch__track::before {
  transform: translateX(-100%);
}
.mdc-switch--selected .mdc-switch__track::before {
  opacity: var(--%NS%mat-slide-toggle-hidden-track-opacity, 0);
  transition: var(--%NS%mat-slide-toggle-hidden-track-transition, opacity 75ms);
}
.mdc-switch--unselected .mdc-switch__track::before {
  opacity: var(--%NS%mat-slide-toggle-visible-track-opacity, 1);
  transition: var(--%NS%mat-slide-toggle-visible-track-transition, opacity 75ms);
}
.mdc-switch:enabled:hover:not(:focus):not(:active) .mdc-switch__track::before {
  background: var(--%NS%mat-slide-toggle-unselected-hover-track-color, var(--%NS%mat-sys-surface-variant));
}
.mdc-switch:enabled:focus:not(:active) .mdc-switch__track::before {
  background: var(--%NS%mat-slide-toggle-unselected-focus-track-color, var(--%NS%mat-sys-surface-variant));
}
.mdc-switch:enabled:active .mdc-switch__track::before {
  background: var(--%NS%mat-slide-toggle-unselected-pressed-track-color, var(--%NS%mat-sys-surface-variant));
}
.mat-mdc-slide-toggle-disabled-interactive.mdc-switch--%NS%disabled:hover:not(:focus):not(:active) .mdc-switch__track::before, .mat-mdc-slide-toggle-disabled-interactive.mdc-switch--%NS%disabled:focus:not(:active) .mdc-switch__track::before, .mat-mdc-slide-toggle-disabled-interactive.mdc-switch--%NS%disabled:active .mdc-switch__track::before, .mdc-switch.mdc-switch--disabled .mdc-switch__track::before {
  background: var(--%NS%mat-slide-toggle-disabled-unselected-track-color, var(--%NS%mat-sys-surface-variant));
}
.mdc-switch__track::after {
  transform: translateX(-100%);
  background: var(--%NS%mat-slide-toggle-selected-track-color, var(--%NS%mat-sys-primary));
}
[dir=rtl] .mdc-switch__track::after {
  transform: translateX(100%);
}
.mdc-switch--selected .mdc-switch__track::after {
  transform: translateX(0);
}
.mdc-switch--selected .mdc-switch__track::after {
  opacity: var(--%NS%mat-slide-toggle-visible-track-opacity, 1);
  transition: var(--%NS%mat-slide-toggle-visible-track-transition, opacity 75ms);
}
.mdc-switch--unselected .mdc-switch__track::after {
  opacity: var(--%NS%mat-slide-toggle-hidden-track-opacity, 0);
  transition: var(--%NS%mat-slide-toggle-hidden-track-transition, opacity 75ms);
}
.mdc-switch:enabled:hover:not(:focus):not(:active) .mdc-switch__track::after {
  background: var(--%NS%mat-slide-toggle-selected-hover-track-color, var(--%NS%mat-sys-primary));
}
.mdc-switch:enabled:focus:not(:active) .mdc-switch__track::after {
  background: var(--%NS%mat-slide-toggle-selected-focus-track-color, var(--%NS%mat-sys-primary));
}
.mdc-switch:enabled:active .mdc-switch__track::after {
  background: var(--%NS%mat-slide-toggle-selected-pressed-track-color, var(--%NS%mat-sys-primary));
}
.mat-mdc-slide-toggle-disabled-interactive.mdc-switch--%NS%disabled:hover:not(:focus):not(:active) .mdc-switch__track::after, .mat-mdc-slide-toggle-disabled-interactive.mdc-switch--%NS%disabled:focus:not(:active) .mdc-switch__track::after, .mat-mdc-slide-toggle-disabled-interactive.mdc-switch--%NS%disabled:active .mdc-switch__track::after, .mdc-switch.mdc-switch--disabled .mdc-switch__track::after {
  background: var(--%NS%mat-slide-toggle-disabled-selected-track-color, var(--%NS%mat-sys-on-surface));
}

.mdc-switch__handle-track {
  height: 100%;
  pointer-events: none;
  position: absolute;
  top: 0;
  transition: transform 75ms 0ms cubic-bezier(0.4, 0, 0.2, 1);
  left: 0;
  right: auto;
  transform: translateX(0);
  width: calc(100% - var(--%NS%mat-slide-toggle-handle-width));
}
[dir=rtl] .mdc-switch__handle-track {
  left: auto;
  right: 0;
}
.mdc-switch--selected .mdc-switch__handle-track {
  transform: translateX(100%);
}
[dir=rtl] .mdc-switch--selected .mdc-switch__handle-track {
  transform: translateX(-100%);
}

.mdc-switch__handle {
  display: flex;
  pointer-events: auto;
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  left: 0;
  right: auto;
  transition: width 75ms cubic-bezier(0.4, 0, 0.2, 1), height 75ms cubic-bezier(0.4, 0, 0.2, 1), margin 75ms cubic-bezier(0.4, 0, 0.2, 1);
  width: var(--%NS%mat-slide-toggle-handle-width);
  height: var(--%NS%mat-slide-toggle-handle-height);
  border-radius: var(--%NS%mat-slide-toggle-handle-shape, var(--%NS%mat-sys-corner-full));
}
[dir=rtl] .mdc-switch__handle {
  left: auto;
  right: 0;
}
.mat-mdc-slide-toggle .mdc-switch--unselected .mdc-switch__handle {
  width: var(--%NS%mat-slide-toggle-unselected-handle-size, 16px);
  height: var(--%NS%mat-slide-toggle-unselected-handle-size, 16px);
  margin: var(--%NS%mat-slide-toggle-unselected-handle-horizontal-margin, 0 8px);
}
.mat-mdc-slide-toggle .mdc-switch--unselected .mdc-switch__handle:has(.mdc-switch__icons) {
  margin: var(--%NS%mat-slide-toggle-unselected-with-icon-handle-horizontal-margin, 0 4px);
}
.mat-mdc-slide-toggle .mdc-switch--selected .mdc-switch__handle {
  width: var(--%NS%mat-slide-toggle-selected-handle-size, 24px);
  height: var(--%NS%mat-slide-toggle-selected-handle-size, 24px);
  margin: var(--%NS%mat-slide-toggle-selected-handle-horizontal-margin, 0 24px);
}
.mat-mdc-slide-toggle .mdc-switch--selected .mdc-switch__handle:has(.mdc-switch__icons) {
  margin: var(--%NS%mat-slide-toggle-selected-with-icon-handle-horizontal-margin, 0 24px);
}
.mat-mdc-slide-toggle .mdc-switch__handle:has(.mdc-switch__icons) {
  width: var(--%NS%mat-slide-toggle-with-icon-handle-size, 24px);
  height: var(--%NS%mat-slide-toggle-with-icon-handle-size, 24px);
}
.mat-mdc-slide-toggle .mdc-switch:active:not(.mdc-switch--disabled) .mdc-switch__handle {
  width: var(--%NS%mat-slide-toggle-pressed-handle-size, 28px);
  height: var(--%NS%mat-slide-toggle-pressed-handle-size, 28px);
}
.mat-mdc-slide-toggle .mdc-switch--%NS%selected:active:not(.mdc-switch--disabled) .mdc-switch__handle {
  margin: var(--%NS%mat-slide-toggle-selected-pressed-handle-horizontal-margin, 0 22px);
}
.mat-mdc-slide-toggle .mdc-switch--%NS%unselected:active:not(.mdc-switch--disabled) .mdc-switch__handle {
  margin: var(--%NS%mat-slide-toggle-unselected-pressed-handle-horizontal-margin, 0 2px);
}
.mdc-switch--disabled.mdc-switch--selected .mdc-switch__handle::after {
  opacity: var(--%NS%mat-slide-toggle-disabled-selected-handle-opacity, 1);
}
.mdc-switch--disabled.mdc-switch--unselected .mdc-switch__handle::after {
  opacity: var(--%NS%mat-slide-toggle-disabled-unselected-handle-opacity, 0.38);
}
.mdc-switch__handle::before, .mdc-switch__handle::after {
  border: 1px solid transparent;
  border-radius: inherit;
  box-sizing: border-box;
  content: "";
  width: 100%;
  height: 100%;
  left: 0;
  position: absolute;
  top: 0;
  transition: background-color 75ms 0ms cubic-bezier(0.4, 0, 0.2, 1), border-color 75ms 0ms cubic-bezier(0.4, 0, 0.2, 1);
  z-index: -1;
}
@media (forced-colors: active) {
  .mdc-switch__handle::before, .mdc-switch__handle::after {
    border-color: currentColor;
  }
}
.mdc-switch--%NS%selected:enabled .mdc-switch__handle::after {
  background: var(--%NS%mat-slide-toggle-selected-handle-color, var(--%NS%mat-sys-on-primary));
}
.mdc-switch--%NS%selected:enabled:hover:not(:focus):not(:active) .mdc-switch__handle::after {
  background: var(--%NS%mat-slide-toggle-selected-hover-handle-color, var(--%NS%mat-sys-primary-container));
}
.mdc-switch--%NS%selected:enabled:focus:not(:active) .mdc-switch__handle::after {
  background: var(--%NS%mat-slide-toggle-selected-focus-handle-color, var(--%NS%mat-sys-primary-container));
}
.mdc-switch--%NS%selected:enabled:active .mdc-switch__handle::after {
  background: var(--%NS%mat-slide-toggle-selected-pressed-handle-color, var(--%NS%mat-sys-primary-container));
}
.mat-mdc-slide-toggle-disabled-interactive.mdc-switch--disabled.mdc-switch--%NS%selected:hover:not(:focus):not(:active) .mdc-switch__handle::after, .mat-mdc-slide-toggle-disabled-interactive.mdc-switch--disabled.mdc-switch--%NS%selected:focus:not(:active) .mdc-switch__handle::after, .mat-mdc-slide-toggle-disabled-interactive.mdc-switch--disabled.mdc-switch--%NS%selected:active .mdc-switch__handle::after, .mdc-switch--selected.mdc-switch--disabled .mdc-switch__handle::after {
  background: var(--%NS%mat-slide-toggle-disabled-selected-handle-color, var(--%NS%mat-sys-surface));
}
.mdc-switch--%NS%unselected:enabled .mdc-switch__handle::after {
  background: var(--%NS%mat-slide-toggle-unselected-handle-color, var(--%NS%mat-sys-outline));
}
.mdc-switch--%NS%unselected:enabled:hover:not(:focus):not(:active) .mdc-switch__handle::after {
  background: var(--%NS%mat-slide-toggle-unselected-hover-handle-color, var(--%NS%mat-sys-on-surface-variant));
}
.mdc-switch--%NS%unselected:enabled:focus:not(:active) .mdc-switch__handle::after {
  background: var(--%NS%mat-slide-toggle-unselected-focus-handle-color, var(--%NS%mat-sys-on-surface-variant));
}
.mdc-switch--%NS%unselected:enabled:active .mdc-switch__handle::after {
  background: var(--%NS%mat-slide-toggle-unselected-pressed-handle-color, var(--%NS%mat-sys-on-surface-variant));
}
.mdc-switch--unselected.mdc-switch--disabled .mdc-switch__handle::after {
  background: var(--%NS%mat-slide-toggle-disabled-unselected-handle-color, var(--%NS%mat-sys-on-surface));
}
.mdc-switch__handle::before {
  background: var(--%NS%mat-slide-toggle-handle-surface-color);
}

.mdc-switch__shadow {
  border-radius: inherit;
  bottom: 0;
  left: 0;
  position: absolute;
  right: 0;
  top: 0;
}
.mdc-switch:enabled .mdc-switch__shadow {
  box-shadow: var(--%NS%mat-slide-toggle-handle-elevation-shadow);
}
.mat-mdc-slide-toggle-disabled-interactive.mdc-switch--%NS%disabled:hover:not(:focus):not(:active) .mdc-switch__shadow, .mat-mdc-slide-toggle-disabled-interactive.mdc-switch--%NS%disabled:focus:not(:active) .mdc-switch__shadow, .mat-mdc-slide-toggle-disabled-interactive.mdc-switch--%NS%disabled:active .mdc-switch__shadow, .mdc-switch.mdc-switch--disabled .mdc-switch__shadow {
  box-shadow: var(--%NS%mat-slide-toggle-disabled-handle-elevation-shadow);
}

.mdc-switch__ripple {
  left: 50%;
  position: absolute;
  top: 50%;
  transform: translate(-50%, -50%);
  z-index: -1;
  width: var(--%NS%mat-slide-toggle-state-layer-size, 40px);
  height: var(--%NS%mat-slide-toggle-state-layer-size, 40px);
}
.mdc-switch__ripple::after {
  content: "";
  opacity: 0;
}
.mdc-switch--disabled .mdc-switch__ripple::after {
  display: none;
}
.mat-mdc-slide-toggle-disabled-interactive .mdc-switch__ripple::after {
  display: block;
}
.mdc-switch:hover .mdc-switch__ripple::after {
  transition: 75ms opacity cubic-bezier(0, 0, 0.2, 1);
}
.mat-mdc-slide-toggle-disabled-interactive.mdc-switch--%NS%disabled:enabled:focus .mdc-switch__ripple::after, .mat-mdc-slide-toggle-disabled-interactive.mdc-switch--%NS%disabled:enabled:active .mdc-switch__ripple::after, .mat-mdc-slide-toggle-disabled-interactive.mdc-switch--%NS%disabled:enabled:hover:not(:focus) .mdc-switch__ripple::after, .mdc-switch--%NS%unselected:enabled:hover:not(:focus) .mdc-switch__ripple::after {
  background: var(--%NS%mat-slide-toggle-unselected-hover-state-layer-color, var(--%NS%mat-sys-on-surface));
  opacity: var(--%NS%mat-slide-toggle-unselected-hover-state-layer-opacity, var(--%NS%mat-sys-hover-state-layer-opacity));
}
.mdc-switch--%NS%unselected:enabled:focus .mdc-switch__ripple::after {
  background: var(--%NS%mat-slide-toggle-unselected-focus-state-layer-color, var(--%NS%mat-sys-on-surface));
  opacity: var(--%NS%mat-slide-toggle-unselected-focus-state-layer-opacity, var(--%NS%mat-sys-focus-state-layer-opacity));
}
.mdc-switch--%NS%unselected:enabled:active .mdc-switch__ripple::after {
  background: var(--%NS%mat-slide-toggle-unselected-pressed-state-layer-color, var(--%NS%mat-sys-on-surface));
  opacity: var(--%NS%mat-slide-toggle-unselected-pressed-state-layer-opacity, var(--%NS%mat-sys-pressed-state-layer-opacity));
  transition: opacity 75ms linear;
}
.mdc-switch--%NS%selected:enabled:hover:not(:focus) .mdc-switch__ripple::after {
  background: var(--%NS%mat-slide-toggle-selected-hover-state-layer-color, var(--%NS%mat-sys-primary));
  opacity: var(--%NS%mat-slide-toggle-selected-hover-state-layer-opacity, var(--%NS%mat-sys-hover-state-layer-opacity));
}
.mdc-switch--%NS%selected:enabled:focus .mdc-switch__ripple::after {
  background: var(--%NS%mat-slide-toggle-selected-focus-state-layer-color, var(--%NS%mat-sys-primary));
  opacity: var(--%NS%mat-slide-toggle-selected-focus-state-layer-opacity, var(--%NS%mat-sys-focus-state-layer-opacity));
}
.mdc-switch--%NS%selected:enabled:active .mdc-switch__ripple::after {
  background: var(--%NS%mat-slide-toggle-selected-pressed-state-layer-color, var(--%NS%mat-sys-primary));
  opacity: var(--%NS%mat-slide-toggle-selected-pressed-state-layer-opacity, var(--%NS%mat-sys-pressed-state-layer-opacity));
  transition: opacity 75ms linear;
}

.mdc-switch__icons {
  position: relative;
  height: 100%;
  width: 100%;
  z-index: 1;
  transform: translateZ(0);
}
.mdc-switch--disabled.mdc-switch--unselected .mdc-switch__icons {
  opacity: var(--%NS%mat-slide-toggle-disabled-unselected-icon-opacity, 0.38);
}
.mdc-switch--disabled.mdc-switch--selected .mdc-switch__icons {
  opacity: var(--%NS%mat-slide-toggle-disabled-selected-icon-opacity, 0.38);
}

.mdc-switch__icon {
  bottom: 0;
  left: 0;
  margin: auto;
  position: absolute;
  right: 0;
  top: 0;
  opacity: 0;
  transition: opacity 30ms 0ms cubic-bezier(0.4, 0, 1, 1);
}
.mdc-switch--unselected .mdc-switch__icon {
  width: var(--%NS%mat-slide-toggle-unselected-icon-size, 16px);
  height: var(--%NS%mat-slide-toggle-unselected-icon-size, 16px);
  fill: var(--%NS%mat-slide-toggle-unselected-icon-color, var(--%NS%mat-sys-surface-variant));
}
.mdc-switch--unselected.mdc-switch--disabled .mdc-switch__icon {
  fill: var(--%NS%mat-slide-toggle-disabled-unselected-icon-color, var(--%NS%mat-sys-surface-variant));
}
.mdc-switch--selected .mdc-switch__icon {
  width: var(--%NS%mat-slide-toggle-selected-icon-size, 16px);
  height: var(--%NS%mat-slide-toggle-selected-icon-size, 16px);
  fill: var(--%NS%mat-slide-toggle-selected-icon-color, var(--%NS%mat-sys-on-primary-container));
}
.mdc-switch--selected.mdc-switch--disabled .mdc-switch__icon {
  fill: var(--%NS%mat-slide-toggle-disabled-selected-icon-color, var(--%NS%mat-sys-on-surface));
}

.mdc-switch--selected .mdc-switch__icon--on,
.mdc-switch--unselected .mdc-switch__icon--off {
  opacity: 1;
  transition: opacity 45ms 30ms cubic-bezier(0, 0, 0.2, 1);
}

.mat-mdc-slide-toggle {
  -webkit-user-select: none;
  user-select: none;
  display: inline-block;
  -webkit-tap-highlight-color: transparent;
  outline: 0;
}
.mat-mdc-slide-toggle .mat-icon {
  min-height: fit-content;
  flex-shrink: 0;
}
.mat-mdc-slide-toggle .mat-mdc-slide-toggle-ripple,
.mat-mdc-slide-toggle .mdc-switch__ripple::after {
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  position: absolute;
  border-radius: 50%;
  pointer-events: none;
}
.mat-mdc-slide-toggle .mat-mdc-slide-toggle-ripple:not(:empty),
.mat-mdc-slide-toggle .mdc-switch__ripple::after:not(:empty) {
  transform: translateZ(0);
}
.mat-mdc-slide-toggle.mat-mdc-slide-toggle-focused .mat-focus-indicator::before {
  content: "";
}
.mat-mdc-slide-toggle .mat-internal-form-field {
  color: var(--%NS%mat-slide-toggle-label-text-color, var(--%NS%mat-sys-on-surface));
  font-family: var(--%NS%mat-slide-toggle-label-text-font, var(--%NS%mat-sys-body-medium-font));
  line-height: var(--%NS%mat-slide-toggle-label-text-line-height, var(--%NS%mat-sys-body-medium-line-height));
  font-size: var(--%NS%mat-slide-toggle-label-text-size, var(--%NS%mat-sys-body-medium-size));
  letter-spacing: var(--%NS%mat-slide-toggle-label-text-tracking, var(--%NS%mat-sys-body-medium-tracking));
  font-weight: var(--%NS%mat-slide-toggle-label-text-weight, var(--%NS%mat-sys-body-medium-weight));
}
.mat-mdc-slide-toggle .mat-ripple-element {
  opacity: 0.12;
}
.mat-mdc-slide-toggle .mat-focus-indicator::before {
  border-radius: 50%;
}
.mat-mdc-slide-toggle._mat-animation-noopable .mdc-switch__handle-track,
.mat-mdc-slide-toggle._mat-animation-noopable .mdc-switch__icon,
.mat-mdc-slide-toggle._mat-animation-noopable .mdc-switch__handle::before,
.mat-mdc-slide-toggle._mat-animation-noopable .mdc-switch__handle::after,
.mat-mdc-slide-toggle._mat-animation-noopable .mdc-switch__track::before,
.mat-mdc-slide-toggle._mat-animation-noopable .mdc-switch__track::after {
  transition: none;
}
.mat-mdc-slide-toggle .mdc-switch:enabled + .mdc-label {
  cursor: pointer;
}
.mat-mdc-slide-toggle .mdc-switch--disabled + label {
  color: var(--%NS%mat-slide-toggle-disabled-label-text-color, var(--%NS%mat-sys-on-surface));
}
.mat-mdc-slide-toggle label:empty {
  display: none;
}

.mat-slide-toggle-full-width {
  width: 100%;
}
.mat-slide-toggle-full-width .mat-internal-form-field {
  width: 100%;
  justify-content: space-between;
}
.mat-slide-toggle-full-width .mat-internal-form-field label {
  margin: 0;
  flex-grow: 1;
  text-align: end;
}
.mat-slide-toggle-full-width .mdc-form-field--align-end label {
  text-align: start;
}

.mat-mdc-slide-toggle-touch-target {
  position: absolute;
  top: 50%;
  left: 50%;
  height: var(--%NS%mat-slide-toggle-touch-target-size, 48px);
  width: 100%;
  transform: translate(-50%, -50%);
  display: var(--%NS%mat-slide-toggle-touch-target-display, block);
}
[dir=rtl] .mat-mdc-slide-toggle-touch-target {
  left: auto;
  right: 50%;
  transform: translate(50%, -50%);
}
`],encapsulation:2})}return e})(),dv=(()=>{class e{static \u0275fac=function(r){return new(r||e)};static \u0275mod=ee({type:e});static \u0275inj=K({imports:[cu,Pe]})}return e})();var lu=(()=>{class e{_listeners=[];notify(n,r){for(let o of this._listeners)o(n,r)}listen(n){return this._listeners.push(n),()=>{this._listeners=this._listeners.filter(r=>n!==r)}}ngOnDestroy(){this._listeners=[]}static \u0275fac=function(r){return new(r||e)};static \u0275prov=Q({token:e,factory:e.\u0275fac})}return e})();var UD=["input"],$D=["formField"],zD=["*"],Sa=class{source;value;constructor(t,n){this.source=t,this.value=n}},GD={provide:Qr,useExisting:He(()=>du),multi:!0},uv=new g("MatRadioGroup"),WD=new g("mat-radio-default-options",{providedIn:"root",factory:()=>({color:"accent",disabledInteractive:!1})}),du=(()=>{class e{_changeDetector=p(rn);_value=null;_name=p(sn).getId("mat-radio-group-");_selected=null;_isInitialized=!1;_labelPosition="after";_disabled=!1;_required=!1;_buttonChanges;_controlValueAccessorChangeFn=()=>{};onTouched=()=>{};change=new se;_radios;color;get name(){return this._name}set name(n){this._name=n,this._updateRadioButtonNames()}get labelPosition(){return this._labelPosition}set labelPosition(n){this._labelPosition=n==="before"?"before":"after",this._markRadiosForCheck()}get value(){return this._value}set value(n){this._value!==n&&(this._value=n,this._updateSelectedRadioFromValue(),this._checkSelectedRadioButton())}_checkSelectedRadioButton(){this._selected&&!this._selected.checked&&(this._selected.checked=!0)}get selected(){return this._selected}set selected(n){this._selected=n,this.value=n?n.value:null,this._checkSelectedRadioButton()}get disabled(){return this._disabled}set disabled(n){this._disabled=n,this._markRadiosForCheck()}get required(){return this._required}set required(n){this._required=n,this._markRadiosForCheck()}get disabledInteractive(){return this._disabledInteractive}set disabledInteractive(n){this._disabledInteractive=n,this._markRadiosForCheck()}_disabledInteractive=!1;ngAfterContentInit(){this._isInitialized=!0,this._buttonChanges=this._radios.changes.subscribe(()=>{this.selected&&!this._radios.find(n=>n===this.selected)&&(this._selected=null)})}ngOnDestroy(){this._buttonChanges?.unsubscribe()}_touch(){this.onTouched&&this.onTouched()}_updateRadioButtonNames(){this._radios&&this._radios.forEach(n=>{n.name=this.name,n._markForCheck()})}_updateSelectedRadioFromValue(){let n=this._selected!==null&&this._selected.value===this._value;this._radios&&!n&&(this._selected=null,this._radios.forEach(r=>{r.checked=this.value===r.value,r.checked&&(this._selected=r)}))}_emitChangeEvent(){this._isInitialized&&this.change.emit(new Sa(this._selected,this._value))}_markRadiosForCheck(){this._radios&&this._radios.forEach(n=>n._markForCheck())}writeValue(n){this.value=n,this._changeDetector.markForCheck()}registerOnChange(n){this._controlValueAccessorChangeFn=n}registerOnTouched(n){this.onTouched=n}setDisabledState(n){this.disabled=n,this._changeDetector.markForCheck()}static \u0275fac=function(r){return new(r||e)};static \u0275dir=te({type:e,selectors:[["mat-radio-group"]],contentQueries:function(r,o,i){if(r&1&&Lr(i,Ia,5),r&2){let s;At(s=Rt())&&(o._radios=s)}},hostAttrs:["role","radiogroup",1,"mat-mdc-radio-group"],inputs:{color:"color",name:"name",labelPosition:"labelPosition",value:"value",selected:"selected",disabled:[2,"disabled","disabled",H],required:[2,"required","required",H],disabledInteractive:[2,"disabledInteractive","disabledInteractive",H]},outputs:{change:"change"},exportAs:["matRadioGroup"],features:[pt([GD,{provide:uv,useExisting:e}])]})}return e})(),Ia=(()=>{class e{_elementRef=p(q);_changeDetector=p(rn);_focusMonitor=p(Xn);_radioDispatcher=p(lu);_defaultOptions=p(WD,{optional:!0});_ngZone=p(z);_renderer=p(Re);_uniqueId=p(sn).getId("mat-radio-");_cleanupClick;id=this._uniqueId;name;ariaLabel;ariaLabelledby;ariaDescribedby;disableRipple=!1;tabIndex=0;get checked(){return this._checked}set checked(n){this._checked!==n&&(this._checked=n,n&&this.radioGroup&&this.radioGroup.value!==this.value?this.radioGroup.selected=this:!n&&this.radioGroup&&this.radioGroup.value===this.value&&(this.radioGroup.selected=null),n&&this._radioDispatcher.notify(this.id,this.name),this._changeDetector.markForCheck())}get value(){return this._value}set value(n){this._value!==n&&(this._value=n,this.radioGroup!==null&&(this.checked||(this.checked=this.radioGroup.value===n),this.checked&&(this.radioGroup.selected=this)))}get labelPosition(){return this._labelPosition||this.radioGroup&&this.radioGroup.labelPosition||"after"}set labelPosition(n){this._labelPosition=n}_labelPosition;get disabled(){return this._disabled||this.radioGroup!==null&&this.radioGroup.disabled}set disabled(n){this._setDisabled(n)}get required(){return this._required||this.radioGroup&&this.radioGroup.required}set required(n){n!==this._required&&this._changeDetector.markForCheck(),this._required=n}get color(){return this._color||this.radioGroup&&this.radioGroup.color||this._defaultOptions&&this._defaultOptions.color||"accent"}set color(n){this._color=n}_color;get disabledInteractive(){return this._disabledInteractive||this.radioGroup!==null&&this.radioGroup.disabledInteractive}set disabledInteractive(n){this._disabledInteractive=n}_disabledInteractive;change=new se;radioGroup;get inputId(){return`${this.id||this._uniqueId}-input`}_checked=!1;_disabled=!1;_required=!1;_value=null;_removeUniqueSelectionListener=()=>{};_previousTabIndex;_inputElement;_rippleTrigger;_noopAnimations=mt();_injector=p(ae);constructor(){p(Ft).load(zr);let n=p(uv,{optional:!0}),r=p(new nn("tabindex"),{optional:!0});this.radioGroup=n,this._disabledInteractive=this._defaultOptions?.disabledInteractive??!1,r&&(this.tabIndex=Qn(r,0))}focus(n,r){r?this._focusMonitor.focusVia(this._inputElement,r,n):this._inputElement.nativeElement.focus(n)}_markForCheck(){this._changeDetector.markForCheck()}ngOnInit(){this.radioGroup&&(this.checked=this.radioGroup.value===this._value,this.checked&&(this.radioGroup.selected=this),this.name=this.radioGroup.name),this._removeUniqueSelectionListener=this._radioDispatcher.listen((n,r)=>{n!==this.id&&r===this.name&&(this.checked=!1)})}ngDoCheck(){this._updateTabIndex()}ngAfterViewInit(){this._updateTabIndex(),this._focusMonitor.monitor(this._elementRef,!0).subscribe(n=>{!n&&this.radioGroup&&this.radioGroup._touch()}),this._ngZone.runOutsideAngular(()=>{this._cleanupClick=this._renderer.listen(this._inputElement.nativeElement,"click",this._onInputClick)})}ngOnDestroy(){this._cleanupClick?.(),this._focusMonitor.stopMonitoring(this._elementRef),this._removeUniqueSelectionListener()}_emitChangeEvent(){this.change.emit(new Sa(this,this._value))}_isRippleDisabled(){return this.disableRipple||this.disabled}_onInputInteraction(n){if(n.stopPropagation(),!this.checked&&!this.disabled){let r=this.radioGroup&&this.value!==this.radioGroup.value;this.checked=!0,this._emitChangeEvent(),this.radioGroup&&(this.radioGroup._controlValueAccessorChangeFn(this.value),r&&this.radioGroup._emitChangeEvent())}}_setDisabled(n){this._disabled!==n&&(this._disabled=n,this._changeDetector.markForCheck())}_onInputClick=n=>{this.disabled&&this.disabledInteractive&&n.preventDefault()};_updateTabIndex(){let n=this.radioGroup,r;if(!n||!n.selected||this.disabled?r=this.tabIndex:r=n.selected===this?this.tabIndex:-1,r!==this._previousTabIndex){let o=this._inputElement?.nativeElement;o&&(o.setAttribute("tabindex",r+""),this._previousTabIndex=r,Gs(()=>{queueMicrotask(()=>{n&&n.selected&&n.selected!==this&&document.activeElement===o&&(n.selected?._inputElement.nativeElement.focus(),document.activeElement===o&&this._inputElement.nativeElement.blur())})},{injector:this._injector}))}}static \u0275fac=function(r){return new(r||e)};static \u0275cmp=B({type:e,selectors:[["mat-radio-button"]],viewQuery:function(r,o){if(r&1&&Vr(UD,5)($D,7,q),r&2){let i;At(i=Rt())&&(o._inputElement=i.first),At(i=Rt())&&(o._rippleTrigger=i.first)}},hostAttrs:[1,"mat-mdc-radio-button"],hostVars:19,hostBindings:function(r,o){r&1&&T("focus",function(){return o._inputElement.nativeElement.focus()}),r&2&&(De("id",o.id)("tabindex",null)("aria-label",null)("aria-labelledby",null)("aria-describedby",null),j("mat-primary",o.color==="primary")("mat-accent",o.color==="accent")("mat-warn",o.color==="warn")("mat-mdc-radio-checked",o.checked)("mat-mdc-radio-disabled",o.disabled)("mat-mdc-radio-disabled-interactive",o.disabledInteractive)("_mat-animation-noopable",o._noopAnimations))},inputs:{id:"id",name:"name",ariaLabel:[0,"aria-label","ariaLabel"],ariaLabelledby:[0,"aria-labelledby","ariaLabelledby"],ariaDescribedby:[0,"aria-describedby","ariaDescribedby"],disableRipple:[2,"disableRipple","disableRipple",H],tabIndex:[2,"tabIndex","tabIndex",n=>n==null?0:Qn(n)],checked:[2,"checked","checked",H],value:"value",labelPosition:"labelPosition",disabled:[2,"disabled","disabled",H],required:[2,"required","required",H],color:"color",disabledInteractive:[2,"disabledInteractive","disabledInteractive",H]},outputs:{change:"change"},exportAs:["matRadioButton"],ngContentSelectors:zD,decls:13,vars:17,consts:[["formField",""],["input",""],["mat-internal-form-field","",3,"labelPosition","for"],[1,"mdc-radio"],[1,"mat-mdc-radio-touch-target"],["type","radio","aria-invalid","false",1,"mdc-radio__native-control",3,"change","id","checked","disabled","required"],["aria-hidden","true",1,"mdc-radio__background"],[1,"mdc-radio__outer-circle"],[1,"mdc-radio__inner-circle"],["mat-ripple","","aria-hidden","true",1,"mat-radio-ripple","mat-focus-indicator",3,"matRippleTrigger","matRippleDisabled","matRippleCentered"],[1,"mat-ripple-element","mat-radio-persistent-ripple"],[1,"mat-internal-form-field-label","mdc-label"]],template:function(r,o){r&1&&(X(),v(0,"label",2,0)(2,"span",3),N(3,"span",4),v(4,"input",5,1),T("change",function(s){return o._onInputInteraction(s)}),y(),v(6,"span",6),N(7,"span",7)(8,"span",8),y(),v(9,"span",9),N(10,"span",10),y()(),v(11,"span",11),k(12),y()()),r&2&&(ce("labelPosition",o.labelPosition)("for",o.inputId),W(2),j("mdc-radio--disabled",o.disabled),W(2),ce("id",o.inputId)("checked",o.checked)("disabled",o.disabled&&!o.disabledInteractive)("required",o.required),De("name",o.name)("value",o.value)("aria-label",o.ariaLabel)("aria-labelledby",o.ariaLabelledby)("aria-describedby",o.ariaDescribedby)("aria-disabled",o.disabled&&o.disabledInteractive?"true":null),W(5),ce("matRippleTrigger",o._rippleTrigger.nativeElement)("matRippleDisabled",o._isRippleDisabled())("matRippleCentered",!0))},dependencies:[la,Ea],styles:[`.mat-mdc-radio-button {
  -webkit-tap-highlight-color: transparent;
}
.mat-mdc-radio-button .mdc-radio {
  display: inline-block;
  position: relative;
  flex: 0 0 auto;
  box-sizing: content-box;
  width: 20px;
  height: 20px;
  will-change: opacity, transform, border-color, color;
  padding: calc((var(--%NS%mat-radio-state-layer-size, 40px) - 20px) / 2);
  cursor: pointer;
}
.mat-mdc-radio-button .mdc-radio:hover > .mdc-radio__native-control:not([disabled]):not(:focus) ~ .mdc-radio__background::before {
  opacity: 0.04;
  transform: scale(1);
}
.mat-mdc-radio-button .mdc-radio:hover > .mdc-radio__native-control:not([disabled]) ~ .mdc-radio__background > .mdc-radio__outer-circle {
  border-color: var(--%NS%mat-radio-unselected-hover-icon-color, var(--%NS%mat-sys-on-surface));
}
.mat-mdc-radio-button .mdc-radio:hover > .mdc-radio__native-control:enabled:checked + .mdc-radio__background > .mdc-radio__outer-circle {
  border-color: var(--%NS%mat-radio-selected-hover-icon-color, var(--%NS%mat-sys-primary));
}
.mat-mdc-radio-button .mdc-radio:hover > .mdc-radio__native-control:enabled:checked + .mdc-radio__background > .mdc-radio__inner-circle {
  background-color: var(--%NS%mat-radio-selected-hover-icon-color, var(--%NS%mat-sys-primary, currentColor));
}
.mat-mdc-radio-button .mdc-radio:active > .mdc-radio__native-control:enabled:not(:checked) + .mdc-radio__background > .mdc-radio__outer-circle {
  border-color: var(--%NS%mat-radio-unselected-pressed-icon-color, var(--%NS%mat-sys-on-surface));
}
.mat-mdc-radio-button .mdc-radio:active > .mdc-radio__native-control:enabled:checked + .mdc-radio__background > .mdc-radio__outer-circle {
  border-color: var(--%NS%mat-radio-selected-pressed-icon-color, var(--%NS%mat-sys-primary));
}
.mat-mdc-radio-button .mdc-radio:active > .mdc-radio__native-control:enabled:checked + .mdc-radio__background > .mdc-radio__inner-circle {
  background-color: var(--%NS%mat-radio-selected-pressed-icon-color, var(--%NS%mat-sys-primary, currentColor));
}
.mat-mdc-radio-button .mdc-radio__background {
  display: inline-block;
  position: relative;
  box-sizing: border-box;
  width: 20px;
  height: 20px;
}
.mat-mdc-radio-button .mdc-radio__background::before {
  position: absolute;
  transform: scale(0, 0);
  border-radius: 50%;
  opacity: 0;
  pointer-events: none;
  content: "";
  transition: opacity 90ms cubic-bezier(0.4, 0, 0.6, 1), transform 90ms cubic-bezier(0.4, 0, 0.6, 1);
  width: var(--%NS%mat-radio-state-layer-size, 40px);
  height: var(--%NS%mat-radio-state-layer-size, 40px);
  top: calc(-1 * (var(--%NS%mat-radio-state-layer-size, 40px) - 20px) / 2);
  left: calc(-1 * (var(--%NS%mat-radio-state-layer-size, 40px) - 20px) / 2);
}
.mat-mdc-radio-button .mdc-radio__outer-circle {
  position: absolute;
  top: 0;
  left: 0;
  box-sizing: border-box;
  width: 100%;
  height: 100%;
  border-width: 2px;
  border-style: solid;
  border-radius: 50%;
  transition: border-color 90ms cubic-bezier(0.4, 0, 0.6, 1);
}
.mat-mdc-radio-button .mdc-radio__inner-circle {
  position: absolute;
  top: 0;
  left: 0;
  box-sizing: border-box;
  width: 100%;
  height: 100%;
  transform: scale(0);
  border-radius: 50%;
  transition: transform 90ms cubic-bezier(0.4, 0, 0.6, 1), background-color 90ms cubic-bezier(0.4, 0, 0.6, 1);
}
@media (forced-colors: active) {
  .mat-mdc-radio-button .mdc-radio__inner-circle {
    background-color: CanvasText !important;
  }
}
.mat-mdc-radio-button .mdc-radio__native-control {
  position: absolute;
  margin: 0;
  padding: 0;
  opacity: 0;
  top: 0;
  right: 0;
  left: 0;
  cursor: inherit;
  z-index: 1;
  width: var(--%NS%mat-radio-state-layer-size, 40px);
  height: var(--%NS%mat-radio-state-layer-size, 40px);
}
.mat-mdc-radio-button .mdc-radio__native-control:checked + .mdc-radio__background, .mat-mdc-radio-button .mdc-radio__native-control:disabled + .mdc-radio__background {
  transition: opacity 90ms cubic-bezier(0, 0, 0.2, 1), transform 90ms cubic-bezier(0, 0, 0.2, 1);
}
.mat-mdc-radio-button .mdc-radio__native-control:checked + .mdc-radio__background > .mdc-radio__outer-circle, .mat-mdc-radio-button .mdc-radio__native-control:disabled + .mdc-radio__background > .mdc-radio__outer-circle {
  transition: border-color 90ms cubic-bezier(0, 0, 0.2, 1);
}
.mat-mdc-radio-button .mdc-radio__native-control:checked + .mdc-radio__background > .mdc-radio__inner-circle, .mat-mdc-radio-button .mdc-radio__native-control:disabled + .mdc-radio__background > .mdc-radio__inner-circle {
  transition: transform 90ms cubic-bezier(0, 0, 0.2, 1), background-color 90ms cubic-bezier(0, 0, 0.2, 1);
}
.mat-mdc-radio-button .mdc-radio__native-control:focus + .mdc-radio__background::before {
  transform: scale(1);
  opacity: 0.12;
  transition: opacity 90ms cubic-bezier(0, 0, 0.2, 1), transform 90ms cubic-bezier(0, 0, 0.2, 1);
}
.mat-mdc-radio-button .mdc-radio__native-control:disabled:not(:checked) + .mdc-radio__background > .mdc-radio__outer-circle {
  border-color: var(--%NS%mat-radio-disabled-unselected-icon-color, var(--%NS%mat-sys-on-surface));
  opacity: var(--%NS%mat-radio-disabled-unselected-icon-opacity, 0.38);
}
.mat-mdc-radio-button .mdc-radio__native-control:disabled + .mdc-radio__background {
  cursor: default;
}
.mat-mdc-radio-button .mdc-radio__native-control:disabled + .mdc-radio__background > .mdc-radio__outer-circle {
  border-color: var(--%NS%mat-radio-disabled-selected-icon-color, var(--%NS%mat-sys-on-surface));
  opacity: var(--%NS%mat-radio-disabled-selected-icon-opacity, 0.38);
}
.mat-mdc-radio-button .mdc-radio__native-control:disabled + .mdc-radio__background > .mdc-radio__inner-circle {
  background-color: var(--%NS%mat-radio-disabled-selected-icon-color, var(--%NS%mat-sys-on-surface, currentColor));
  opacity: var(--%NS%mat-radio-disabled-selected-icon-opacity, 0.38);
}
.mat-mdc-radio-button .mdc-radio__native-control:enabled:not(:checked) + .mdc-radio__background > .mdc-radio__outer-circle {
  border-color: var(--%NS%mat-radio-unselected-icon-color, var(--%NS%mat-sys-on-surface-variant));
}
.mat-mdc-radio-button .mdc-radio__native-control:enabled:checked + .mdc-radio__background > .mdc-radio__outer-circle {
  border-color: var(--%NS%mat-radio-selected-icon-color, var(--%NS%mat-sys-primary));
}
.mat-mdc-radio-button .mdc-radio__native-control:enabled:checked + .mdc-radio__background > .mdc-radio__inner-circle {
  background-color: var(--%NS%mat-radio-selected-icon-color, var(--%NS%mat-sys-primary, currentColor));
}
.mat-mdc-radio-button .mdc-radio__native-control:enabled:focus:checked + .mdc-radio__background > .mdc-radio__outer-circle {
  border-color: var(--%NS%mat-radio-selected-focus-icon-color, var(--%NS%mat-sys-primary));
}
.mat-mdc-radio-button .mdc-radio__native-control:enabled:focus:checked + .mdc-radio__background > .mdc-radio__inner-circle {
  background-color: var(--%NS%mat-radio-selected-focus-icon-color, var(--%NS%mat-sys-primary, currentColor));
}
.mat-mdc-radio-button .mdc-radio__native-control:checked + .mdc-radio__background > .mdc-radio__inner-circle {
  transform: scale(0.5);
  transition: transform 90ms cubic-bezier(0, 0, 0.2, 1), background-color 90ms cubic-bezier(0, 0, 0.2, 1);
}
.mat-mdc-radio-button.mat-mdc-radio-disabled-interactive .mdc-radio--disabled {
  pointer-events: auto;
}
.mat-mdc-radio-button.mat-mdc-radio-disabled-interactive .mdc-radio--disabled .mdc-radio__native-control:not(:checked) + .mdc-radio__background > .mdc-radio__outer-circle {
  border-color: var(--%NS%mat-radio-disabled-unselected-icon-color, var(--%NS%mat-sys-on-surface));
  opacity: var(--%NS%mat-radio-disabled-unselected-icon-opacity, 0.38);
}
.mat-mdc-radio-button.mat-mdc-radio-disabled-interactive .mdc-radio--%NS%disabled:hover .mdc-radio__native-control:checked + .mdc-radio__background > .mdc-radio__outer-circle,
.mat-mdc-radio-button.mat-mdc-radio-disabled-interactive .mdc-radio--disabled .mdc-radio__native-control:checked:focus + .mdc-radio__background > .mdc-radio__outer-circle,
.mat-mdc-radio-button.mat-mdc-radio-disabled-interactive .mdc-radio--disabled .mdc-radio__native-control + .mdc-radio__background > .mdc-radio__outer-circle {
  border-color: var(--%NS%mat-radio-disabled-selected-icon-color, var(--%NS%mat-sys-on-surface));
  opacity: var(--%NS%mat-radio-disabled-selected-icon-opacity, 0.38);
}
.mat-mdc-radio-button.mat-mdc-radio-disabled-interactive .mdc-radio--%NS%disabled:hover .mdc-radio__native-control:checked + .mdc-radio__background > .mdc-radio__inner-circle,
.mat-mdc-radio-button.mat-mdc-radio-disabled-interactive .mdc-radio--disabled .mdc-radio__native-control:checked:focus + .mdc-radio__background > .mdc-radio__inner-circle,
.mat-mdc-radio-button.mat-mdc-radio-disabled-interactive .mdc-radio--disabled .mdc-radio__native-control + .mdc-radio__background > .mdc-radio__inner-circle {
  background-color: var(--%NS%mat-radio-disabled-selected-icon-color, var(--%NS%mat-sys-on-surface, currentColor));
  opacity: var(--%NS%mat-radio-disabled-selected-icon-opacity, 0.38);
}
.mat-mdc-radio-button._mat-animation-noopable .mdc-radio__background::before,
.mat-mdc-radio-button._mat-animation-noopable .mdc-radio__outer-circle,
.mat-mdc-radio-button._mat-animation-noopable .mdc-radio__inner-circle {
  transition: none !important;
}
.mat-mdc-radio-button .mat-internal-form-field-label:empty {
  display: none;
}
.mat-mdc-radio-button .mdc-radio__background::before {
  background-color: var(--%NS%mat-radio-ripple-color, var(--%NS%mat-sys-on-surface));
}
.mat-mdc-radio-button.mat-mdc-radio-checked .mat-ripple-element,
.mat-mdc-radio-button.mat-mdc-radio-checked .mdc-radio__background::before {
  background-color: var(--%NS%mat-radio-checked-ripple-color, var(--%NS%mat-sys-primary));
}
.mat-mdc-radio-button.mat-mdc-radio-disabled-interactive .mdc-radio--disabled .mat-ripple-element,
.mat-mdc-radio-button.mat-mdc-radio-disabled-interactive .mdc-radio--disabled .mdc-radio__background::before {
  background-color: var(--%NS%mat-radio-ripple-color, var(--%NS%mat-sys-on-surface));
}
.mat-mdc-radio-button .mat-internal-form-field {
  color: var(--%NS%mat-radio-label-text-color, var(--%NS%mat-sys-on-surface));
  font-family: var(--%NS%mat-radio-label-text-font, var(--%NS%mat-sys-body-medium-font));
  line-height: var(--%NS%mat-radio-label-text-line-height, var(--%NS%mat-sys-body-medium-line-height));
  font-size: var(--%NS%mat-radio-label-text-size, var(--%NS%mat-sys-body-medium-size));
  letter-spacing: var(--%NS%mat-radio-label-text-tracking, var(--%NS%mat-sys-body-medium-tracking));
  font-weight: var(--%NS%mat-radio-label-text-weight, var(--%NS%mat-sys-body-medium-weight));
  cursor: pointer;
}
.mat-mdc-radio-button .mdc-radio--disabled + .mat-internal-form-field-label {
  color: var(--%NS%mat-radio-disabled-label-color, color-mix(in srgb, var(--%NS%mat-sys-on-surface) 38%, transparent));
}
.mat-mdc-radio-button .mat-radio-ripple {
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  position: absolute;
  pointer-events: none;
  border-radius: 50%;
}
.mat-mdc-radio-button .mat-radio-ripple > .mat-ripple-element {
  opacity: 0.14;
}
.mat-mdc-radio-button .mat-radio-ripple::before {
  border-radius: 50%;
}
.mat-mdc-radio-button .mdc-radio > .mdc-radio__native-control:focus:enabled:not(:checked) ~ .mdc-radio__background > .mdc-radio__outer-circle {
  border-color: var(--%NS%mat-radio-unselected-focus-icon-color, var(--%NS%mat-sys-on-surface));
}
.mat-mdc-radio-button.cdk-focused .mat-focus-indicator::before {
  content: "";
}

.mat-mdc-radio-disabled {
  cursor: default;
  pointer-events: none;
}
.mat-mdc-radio-disabled.mat-mdc-radio-disabled-interactive {
  pointer-events: auto;
}

.mat-mdc-radio-touch-target {
  position: absolute;
  top: 50%;
  left: 50%;
  height: var(--%NS%mat-radio-touch-target-size, 48px);
  width: var(--%NS%mat-radio-touch-target-size, 48px);
  transform: translate(-50%, -50%);
  display: var(--%NS%mat-radio-touch-target-display, block);
}
[dir=rtl] .mat-mdc-radio-touch-target {
  left: auto;
  right: 50%;
  transform: translate(50%, -50%);
}
`],encapsulation:2})}return e})(),fv=(()=>{class e{static \u0275fac=function(r){return new(r||e)};static \u0275mod=ee({type:e});static \u0275inj=K({imports:[fa,Ia,Pe]})}return e})();var ZD=["*"];var QD=[[["","mat-card-avatar",""],["","matCardAvatar",""]],[["mat-card-title"],["mat-card-subtitle"],["","mat-card-title",""],["","mat-card-subtitle",""],["","matCardTitle",""],["","matCardSubtitle",""]],"*"],YD=["[mat-card-avatar], [matCardAvatar]",`mat-card-title, mat-card-subtitle,
      [mat-card-title], [mat-card-subtitle],
      [matCardTitle], [matCardSubtitle]`,"*"],KD=new g("MAT_CARD_CONFIG"),pv=(()=>{class e{appearance;constructor(){let n=p(KD,{optional:!0});this.appearance=n?.appearance||"raised"}static \u0275fac=function(r){return new(r||e)};static \u0275cmp=B({type:e,selectors:[["mat-card"]],hostAttrs:[1,"mat-mdc-card","mdc-card"],hostVars:8,hostBindings:function(r,o){r&2&&j("mat-mdc-card-outlined",o.appearance==="outlined")("mdc-card--outlined",o.appearance==="outlined")("mat-mdc-card-filled",o.appearance==="filled")("mdc-card--filled",o.appearance==="filled")},inputs:{appearance:"appearance"},exportAs:["matCard"],ngContentSelectors:ZD,decls:1,vars:0,template:function(r,o){r&1&&(X(),k(0))},styles:[`.mat-mdc-card {
  display: flex;
  flex-direction: column;
  box-sizing: border-box;
  position: relative;
  border-style: solid;
  border-width: 0;
  background-color: var(--%NS%mat-card-elevated-container-color, var(--%NS%mat-sys-surface-container-low));
  border-color: var(--%NS%mat-card-elevated-container-color, var(--%NS%mat-sys-surface-container-low));
  border-radius: var(--%NS%mat-card-elevated-container-shape, var(--%NS%mat-sys-corner-medium));
  box-shadow: var(--%NS%mat-card-elevated-container-elevation, var(--%NS%mat-sys-level1));
}
.mat-mdc-card::after {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  border: solid 1px transparent;
  content: "";
  display: block;
  pointer-events: none;
  box-sizing: border-box;
  border-radius: var(--%NS%mat-card-elevated-container-shape, var(--%NS%mat-sys-corner-medium));
}

.mat-mdc-card-outlined {
  background-color: var(--%NS%mat-card-outlined-container-color, var(--%NS%mat-sys-surface));
  border-radius: var(--%NS%mat-card-outlined-container-shape, var(--%NS%mat-sys-corner-medium));
  border-width: var(--%NS%mat-card-outlined-outline-width, 1px);
  border-color: var(--%NS%mat-card-outlined-outline-color, var(--%NS%mat-sys-outline-variant));
  box-shadow: var(--%NS%mat-card-outlined-container-elevation, var(--%NS%mat-sys-level0));
}
.mat-mdc-card-outlined::after {
  border: none;
}

.mat-mdc-card-filled {
  background-color: var(--%NS%mat-card-filled-container-color, var(--%NS%mat-sys-surface-container-highest));
  border-radius: var(--%NS%mat-card-filled-container-shape, var(--%NS%mat-sys-corner-medium));
  box-shadow: var(--%NS%mat-card-filled-container-elevation, var(--%NS%mat-sys-level0));
}

.mdc-card__media {
  position: relative;
  box-sizing: border-box;
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
}
.mdc-card__media::before {
  display: block;
  content: "";
}
.mdc-card__media:first-child {
  border-top-left-radius: inherit;
  border-top-right-radius: inherit;
}
.mdc-card__media:last-child {
  border-bottom-left-radius: inherit;
  border-bottom-right-radius: inherit;
}

.mat-mdc-card-actions {
  display: flex;
  flex-direction: row;
  align-items: center;
  box-sizing: border-box;
  min-height: 52px;
  padding: 8px;
}

.mat-mdc-card-title {
  font-family: var(--%NS%mat-card-title-text-font, var(--%NS%mat-sys-title-large-font));
  line-height: var(--%NS%mat-card-title-text-line-height, var(--%NS%mat-sys-title-large-line-height));
  font-size: var(--%NS%mat-card-title-text-size, var(--%NS%mat-sys-title-large-size));
  letter-spacing: var(--%NS%mat-card-title-text-tracking, var(--%NS%mat-sys-title-large-tracking));
  font-weight: var(--%NS%mat-card-title-text-weight, var(--%NS%mat-sys-title-large-weight));
}

.mat-mdc-card-subtitle {
  color: var(--%NS%mat-card-subtitle-text-color, var(--%NS%mat-sys-on-surface));
  font-family: var(--%NS%mat-card-subtitle-text-font, var(--%NS%mat-sys-title-medium-font));
  line-height: var(--%NS%mat-card-subtitle-text-line-height, var(--%NS%mat-sys-title-medium-line-height));
  font-size: var(--%NS%mat-card-subtitle-text-size, var(--%NS%mat-sys-title-medium-size));
  letter-spacing: var(--%NS%mat-card-subtitle-text-tracking, var(--%NS%mat-sys-title-medium-tracking));
  font-weight: var(--%NS%mat-card-subtitle-text-weight, var(--%NS%mat-sys-title-medium-weight));
}

.mat-mdc-card-title,
.mat-mdc-card-subtitle {
  display: block;
  margin: 0;
}
.mat-mdc-card-avatar ~ .mat-mdc-card-header-text .mat-mdc-card-title,
.mat-mdc-card-avatar ~ .mat-mdc-card-header-text .mat-mdc-card-subtitle {
  padding: 16px 16px 0;
}

.mat-mdc-card-header {
  display: flex;
  padding: 16px 16px 0;
}

.mat-mdc-card-content {
  display: block;
  padding: 0 16px;
}
.mat-mdc-card-content:first-child {
  padding-top: 16px;
}
.mat-mdc-card-content:last-child {
  padding-bottom: 16px;
}

.mat-mdc-card-title-group {
  display: flex;
  justify-content: space-between;
  width: 100%;
}

.mat-mdc-card-avatar {
  height: 40px;
  width: 40px;
  border-radius: 50%;
  flex-shrink: 0;
  margin-bottom: 16px;
  object-fit: cover;
}
.mat-mdc-card-avatar ~ .mat-mdc-card-header-text .mat-mdc-card-subtitle,
.mat-mdc-card-avatar ~ .mat-mdc-card-header-text .mat-mdc-card-title {
  line-height: normal;
}

.mat-mdc-card-sm-image {
  width: 80px;
  height: 80px;
}

.mat-mdc-card-md-image {
  width: 112px;
  height: 112px;
}

.mat-mdc-card-lg-image {
  width: 152px;
  height: 152px;
}

.mat-mdc-card-xl-image {
  width: 240px;
  height: 240px;
}

.mat-mdc-card-subtitle ~ .mat-mdc-card-title,
.mat-mdc-card-title ~ .mat-mdc-card-subtitle,
.mat-mdc-card-header .mat-mdc-card-header-text .mat-mdc-card-title,
.mat-mdc-card-header .mat-mdc-card-header-text .mat-mdc-card-subtitle,
.mat-mdc-card-title-group .mat-mdc-card-title,
.mat-mdc-card-title-group .mat-mdc-card-subtitle {
  padding-top: 0;
}

.mat-mdc-card-content > :last-child:not(.mat-mdc-card-footer) {
  margin-bottom: 0;
}

.mat-mdc-card-actions-align-end {
  justify-content: flex-end;
}
`],encapsulation:2})}return e})(),mv=(()=>{class e{static \u0275fac=function(r){return new(r||e)};static \u0275dir=te({type:e,selectors:[["mat-card-title"],["","mat-card-title",""],["","matCardTitle",""]],hostAttrs:[1,"mat-mdc-card-title"]})}return e})();var hv=(()=>{class e{static \u0275fac=function(r){return new(r||e)};static \u0275dir=te({type:e,selectors:[["mat-card-content"]],hostAttrs:[1,"mat-mdc-card-content"]})}return e})();var gv=(()=>{class e{static \u0275fac=function(r){return new(r||e)};static \u0275cmp=B({type:e,selectors:[["mat-card-header"]],hostAttrs:[1,"mat-mdc-card-header"],ngContentSelectors:YD,decls:4,vars:0,consts:[[1,"mat-mdc-card-header-text"]],template:function(r,o){r&1&&(X(QD),k(0),Te(1,"div",0),k(2,1),Me(),k(3,2))},encapsulation:2})}return e})();var vv=(()=>{class e{static \u0275fac=function(r){return new(r||e)};static \u0275mod=ee({type:e});static \u0275inj=K({imports:[Pe]})}return e})();var JD=["*",[["mat-toolbar-row"]]],eC=["*","mat-toolbar-row"],uu=(()=>{class e{static \u0275fac=function(r){return new(r||e)};static \u0275dir=te({type:e,selectors:[["mat-toolbar-row"]],hostAttrs:[1,"mat-toolbar-row"],exportAs:["matToolbarRow"]})}return e})(),bv=(()=>{class e{_elementRef=p(q);_platform=p(We);_document=p(L);color;_toolbarRows;ngAfterViewInit(){this._platform.isBrowser&&(this._checkToolbarMixedModes(),this._toolbarRows.changes.subscribe(()=>this._checkToolbarMixedModes()))}_checkToolbarMixedModes(){this._toolbarRows.length}static \u0275fac=function(r){return new(r||e)};static \u0275cmp=B({type:e,selectors:[["mat-toolbar"]],contentQueries:function(r,o,i){if(r&1&&Lr(i,uu,5),r&2){let s;At(s=Rt())&&(o._toolbarRows=s)}},hostAttrs:[1,"mat-toolbar"],hostVars:6,hostBindings:function(r,o){r&2&&(kt(o.color?"mat-"+o.color:""),j("mat-toolbar-multiple-rows",o._toolbarRows.length>0)("mat-toolbar-single-row",o._toolbarRows.length===0))},inputs:{color:"color"},exportAs:["matToolbar"],ngContentSelectors:eC,decls:2,vars:0,template:function(r,o){r&1&&(X(JD),k(0),k(1,1))},styles:[`.mat-toolbar {
  background: var(--%NS%mat-toolbar-container-background-color, var(--%NS%mat-sys-surface));
  color: var(--%NS%mat-toolbar-container-text-color, var(--%NS%mat-sys-on-surface));
}
.mat-toolbar, .mat-toolbar h1, .mat-toolbar h2, .mat-toolbar h3, .mat-toolbar h4, .mat-toolbar h5, .mat-toolbar h6 {
  font-family: var(--%NS%mat-toolbar-title-text-font, var(--%NS%mat-sys-title-large-font));
  font-size: var(--%NS%mat-toolbar-title-text-size, var(--%NS%mat-sys-title-large-size));
  line-height: var(--%NS%mat-toolbar-title-text-line-height, var(--%NS%mat-sys-title-large-line-height));
  font-weight: var(--%NS%mat-toolbar-title-text-weight, var(--%NS%mat-sys-title-large-weight));
  letter-spacing: var(--%NS%mat-toolbar-title-text-tracking, var(--%NS%mat-sys-title-large-tracking));
  margin: 0;
}
@media (forced-colors: active) {
  .mat-toolbar {
    outline: solid 1px;
  }
}
.mat-toolbar .mat-form-field-underline,
.mat-toolbar .mat-form-field-ripple,
.mat-toolbar .mat-focused .mat-form-field-ripple {
  background-color: currentColor;
}
.mat-toolbar .mat-form-field-label,
.mat-toolbar .mat-focused .mat-form-field-label,
.mat-toolbar .mat-select-value,
.mat-toolbar .mat-select-arrow,
.mat-toolbar .mat-form-field.mat-focused .mat-select-arrow {
  color: inherit;
}
.mat-toolbar .mat-input-element {
  caret-color: currentColor;
}
.mat-toolbar .mat-mdc-button-base.mat-mdc-button-base.mat-unthemed {
  --%NS%mat-button-text-label-text-color: var(--%NS%mat-toolbar-container-text-color, var(--%NS%mat-sys-on-surface));
  --%NS%mat-button-outlined-label-text-color: var(--%NS%mat-toolbar-container-text-color, var(--%NS%mat-sys-on-surface));
}

.mat-toolbar-row, .mat-toolbar-single-row {
  display: flex;
  box-sizing: border-box;
  padding: 0 16px;
  width: 100%;
  flex-direction: row;
  align-items: center;
  white-space: nowrap;
  height: var(--%NS%mat-toolbar-standard-height, 64px);
}
@media (max-width: 599px) {
  .mat-toolbar-row, .mat-toolbar-single-row {
    height: var(--%NS%mat-toolbar-mobile-height, 56px);
  }
}

.mat-toolbar-multiple-rows {
  display: flex;
  box-sizing: border-box;
  flex-direction: column;
  width: 100%;
  min-height: var(--%NS%mat-toolbar-standard-height, 64px);
}
@media (max-width: 599px) {
  .mat-toolbar-multiple-rows {
    min-height: var(--%NS%mat-toolbar-mobile-height, 56px);
  }
}
`],encapsulation:2})}return e})();var yv=(()=>{class e{static \u0275fac=function(r){return new(r||e)};static \u0275mod=ee({type:e});static \u0275inj=K({imports:[Pe]})}return e})();var Da=class e{open=Ne(!1);spin=Ne(!1);direction=Ne("up");stopPropagation(t){t.stopPropagation()}doAction(t){console.log(t)}static \u0275fac=function(n){return new(n||e)};static \u0275cmp=B({type:e,selectors:[["app-root"]],decls:117,vars:12,consts:[["myFab",""],["myFab2",""],["myFab3",""],[1,"example-spacer"],["matButton","","href","https://github.com/ecodev/fab-speed-dial"],["src","github-circle-transparent.svg","alt","GitHub logo",1,"github-logo"],[1,"fab-demo-actions"],[1,"mat-body-1"],["name","direction",3,"ngModelChange","ngModel"],["value","up"],["value","down"],["value","left"],["value","right"],[3,"ngModelChange","ngModel"],[1,"container-fab-demo"],[3,"ngModelChange","click","ngModel"],[3,"openChange","direction","open"],[3,"spin"],["matFab","",3,"click"],["fontIcon","add",1,"spin180"],["matMiniFab","",3,"click"],["fontIcon","search"],["fontIcon","edit"],["fontIcon","home"],["href","?param=value","matMiniFab",""],["fontIcon","link"],[3,"mouseenter","mouseleave"],[3,"direction"],["fontIcon","check",1,"spin360"],["fontIcon","add"],["fontIcon","menu"]],template:function(n,r){if(n&1){let o=fd();v(0,"mat-toolbar")(1,"mat-toolbar-row")(2,"span"),ke(3,"FAB Speed Dial"),y(),N(4,"span",3),v(5,"a",4),N(6,"img",5),ke(7," GitHub"),y()()(),v(8,"mat-card",6)(9,"mat-card-header")(10,"mat-card-title"),ke(11,"Options"),y()(),v(12,"mat-card-content",7)(13,"p"),ke(14," Direction: "),v(15,"mat-radio-group",8),Zn("ngModelChange",function(s){return It(o),jr(r.direction,s)||(r.direction=s),Dt(s)}),v(16,"mat-radio-button",9),ke(17,"Up"),y(),v(18,"mat-radio-button",10),ke(19,"Down"),y(),v(20,"mat-radio-button",11),ke(21,"Left"),y(),v(22,"mat-radio-button",12),ke(23,"Right"),y()(),Bo(),y(),v(24,"p")(25,"mat-slide-toggle",13),Zn("ngModelChange",function(s){return It(o),jr(r.spin,s)||(r.spin=s),Dt(s)}),ke(26,"Enable Spinning"),y(),Bo(),y()()(),v(27,"div",14)(28,"mat-card")(29,"mat-card-header")(30,"mat-card-title"),ke(31,"Click me"),y()(),v(32,"mat-card-content",7)(33,"mat-slide-toggle",15),Zn("ngModelChange",function(s){return It(o),jr(r.open,s)||(r.open=s),Dt(s)}),T("click",function(s){return r.stopPropagation(s)}),ke(34,"Open"),y(),Bo(),v(35,"eco-fab-speed-dial",16),Zn("openChange",function(s){return It(o),jr(r.open,s)||(r.open=s),Dt(s)}),v(36,"eco-fab-speed-dial-trigger",17)(37,"button",18),T("click",function(){return r.doAction("trigger")}),N(38,"mat-icon",19),y()(),v(39,"eco-fab-speed-dial-actions")(40,"button",20),T("click",function(){return r.doAction("action1")}),N(41,"mat-icon",21),y(),v(42,"button",20),T("click",function(){return r.doAction("action2")}),N(43,"mat-icon",22),y(),v(44,"button",20),T("click",function(){return r.doAction("action3")}),N(45,"mat-icon",23),y(),v(46,"a",24),N(47,"mat-icon",25),y()()()()(),v(48,"mat-card",26),T("mouseenter",function(){It(o);let s=ft(54),a=ft(66),c=ft(82);return s.open.set(!0),a.open.set(!0),Dt(c.open.set(!0))})("mouseleave",function(){It(o);let s=ft(54),a=ft(66),c=ft(82);return s.open.set(!1),a.open.set(!1),Dt(c.open.set(!1))}),v(49,"mat-card-header")(50,"mat-card-title"),ke(51,"Hover me"),y()(),v(52,"mat-card-content",7)(53,"eco-fab-speed-dial",27,0)(55,"eco-fab-speed-dial-trigger",17)(56,"button",18),T("click",function(){return r.doAction("trigger")}),N(57,"mat-icon",28),y()(),v(58,"eco-fab-speed-dial-actions")(59,"button",20),T("click",function(){return r.doAction("action1")}),N(60,"mat-icon",29),y(),v(61,"button",20),T("click",function(){return r.doAction("action2")}),N(62,"mat-icon",22),y(),v(63,"button",20),T("click",function(){return r.doAction("action3")}),N(64,"mat-icon",30),y()()(),v(65,"eco-fab-speed-dial",27,1)(67,"eco-fab-speed-dial-trigger",17)(68,"button",18),T("click",function(){return r.doAction("trigger")}),N(69,"mat-icon",28),y()(),v(70,"eco-fab-speed-dial-actions")(71,"button",20),T("click",function(){return r.doAction("action1")}),N(72,"mat-icon",29),y(),v(73,"button",20),T("click",function(){return r.doAction("action2")}),N(74,"mat-icon",22),y(),v(75,"button",20),T("click",function(){return r.doAction("action3")}),N(76,"mat-icon",30),y(),v(77,"button",20),T("click",function(){return r.doAction("action1")}),N(78,"mat-icon",29),y(),v(79,"button",20),T("click",function(){return r.doAction("action2")}),N(80,"mat-icon",22),y()()(),v(81,"eco-fab-speed-dial",27,2)(83,"eco-fab-speed-dial-trigger",17)(84,"button",18),T("click",function(){return r.doAction("trigger")}),N(85,"mat-icon",28),y()(),v(86,"eco-fab-speed-dial-actions")(87,"button",20),T("click",function(){return r.doAction("action1")}),N(88,"mat-icon",29),y(),v(89,"button",20),T("click",function(){return r.doAction("action2")}),N(90,"mat-icon",22),y(),v(91,"button",20),T("click",function(){return r.doAction("action3")}),N(92,"mat-icon",30),y(),v(93,"button",20),T("click",function(){return r.doAction("action1")}),N(94,"mat-icon",29),y(),v(95,"button",20),T("click",function(){return r.doAction("action2")}),N(96,"mat-icon",22),y(),v(97,"button",20),T("click",function(){return r.doAction("action3")}),N(98,"mat-icon",30),y(),v(99,"button",20),T("click",function(){return r.doAction("action1")}),N(100,"mat-icon",29),y(),v(101,"button",20),T("click",function(){return r.doAction("action2")}),N(102,"mat-icon",22),y(),v(103,"button",20),T("click",function(){return r.doAction("action3")}),N(104,"mat-icon",30),y(),v(105,"button",20),T("click",function(){return r.doAction("action1")}),N(106,"mat-icon",29),y(),v(107,"button",20),T("click",function(){return r.doAction("action2")}),N(108,"mat-icon",22),y(),v(109,"button",20),T("click",function(){return r.doAction("action3")}),N(110,"mat-icon",30),y(),v(111,"button",20),T("click",function(){return r.doAction("action1")}),N(112,"mat-icon",29),y(),v(113,"button",20),T("click",function(){return r.doAction("action2")}),N(114,"mat-icon",22),y(),v(115,"button",20),T("click",function(){return r.doAction("action3")}),N(116,"mat-icon",30),y()()()()()()}n&2&&(W(15),qn("ngModel",r.direction),Uo(),W(10),qn("ngModel",r.spin),Uo(),W(8),qn("ngModel",r.open),Uo(),W(2),ce("direction",r.direction()),qn("open",r.open),W(),ce("spin",r.spin()),W(17),ce("direction",r.direction()),W(2),ce("spin",r.spin()),W(10),ce("direction",r.direction()),W(2),ce("spin",r.spin()),W(14),ce("direction",r.direction()),W(2),ce("spin",r.spin()))},dependencies:[yv,bv,uu,xg,Ng,Gr,Mg,vv,pv,hv,gv,mv,fv,du,Ia,lv,cv,au,dv,cu,Vg,Lg,tr,ci,er],styles:["mat-card[_ngcontent-%COMP%]{margin:15px}.container-fab-demo[_ngcontent-%COMP%]{width:100%;display:flex;flex-direction:row;flex-wrap:wrap;justify-content:flex-start;align-content:flex-start;align-items:flex-start}.container-fab-demo[_ngcontent-%COMP%]   mat-card[_ngcontent-%COMP%]{height:300px;padding:20px;flex-grow:1;flex-shrink:0;flex-basis:300px}.example-spacer[_ngcontent-%COMP%]{flex:1 1 auto}.github-logo[_ngcontent-%COMP%]{height:26px;margin:0 4px 3px 0;vertical-align:middle}eco-fab-speed-dial[_ngcontent-%COMP%]{margin:1em}"]})};Td(Da,cg).catch(e=>console.error(e));
