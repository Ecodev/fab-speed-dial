var yv=Object.defineProperty,bv=Object.defineProperties;var _v=Object.getOwnPropertyDescriptors;var pu=Object.getOwnPropertySymbols;var Ev=Object.prototype.hasOwnProperty,wv=Object.prototype.propertyIsEnumerable;var mu=(e,n,t)=>n in e?yv(e,n,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[n]=t,w=(e,n)=>{for(var t in n||={})Ev.call(n,t)&&mu(e,t,n[t]);if(pu)for(var t of pu(n))wv.call(n,t)&&mu(e,t,n[t]);return e},U=(e,n)=>bv(e,_v(n));var Ce=null,fi=!1,sn=1,Sv=null,oe=Symbol("SIGNAL");function S(e){let n=Ce;return Ce=e,n}function pi(){return Ce}var jt={version:0,lastCleanEpoch:0,dirty:!1,producers:void 0,producersTail:void 0,consumers:void 0,consumersTail:void 0,recomputing:!1,consumerAllowSignalWrites:!1,consumerIsAlwaysLive:!1,kind:"unknown",producerMustRecompute:()=>!1,producerRecomputeValue:()=>{},consumerMarkedDirty:()=>{},consumerOnSignalRead:()=>{}};function ln(e){if(fi)throw new Error("");if(Ce===null)return;Ce.consumerOnSignalRead(e);let n=Ce.producersTail;if(n!==void 0&&n.producer===e)return;let t,r=Ce.recomputing;if(r&&(t=n!==void 0?n.nextProducer:Ce.producers,t!==void 0&&t.producer===e)){Ce.producersTail=t,t.lastReadVersion=e.version,t.knownValidAtEpoch=sn;return}let o=e.consumersTail;if(o!==void 0&&o.consumer===Ce&&(!r||o.knownValidAtEpoch===sn))return;let i=ir(Ce),s={producer:e,consumer:Ce,nextProducer:t,prevConsumer:void 0,knownValidAtEpoch:sn,lastReadVersion:e.version,nextConsumer:void 0};Ce.producersTail=s,n!==void 0?n.nextProducer=s:Ce.producers=s,i&&yu(e,s)}function hu(){sn++}function dn(e){if(!(ir(e)&&!e.dirty)&&!(!e.dirty&&e.lastCleanEpoch===sn)){if(!e.producerMustRecompute(e)&&!Jr(e)){or(e);return}e.producerRecomputeValue(e),or(e)}}function Na(e){if(e.consumers===void 0)return;let n=fi;fi=!0;try{for(let t=e.consumers;t!==void 0;t=t.nextConsumer){let r=t.consumer;r.dirty||Iv(r)}}finally{fi=n}}function Ta(){return Ce?.consumerAllowSignalWrites!==!1}function Iv(e){e.dirty=!0,Na(e),e.consumerMarkedDirty?.(e)}function or(e){e.dirty=!1,e.lastCleanEpoch=sn}function Bt(e){return e&&gu(e),S(e)}function gu(e){if(e.producersTail?.knownValidAtEpoch===sn){let n=e.producers;for(;n!==void 0;)n.knownValidAtEpoch=null,n=n.nextProducer}e.producersTail=void 0,e.recomputing=!0}function un(e,n){S(n),e&&vu(e)}function vu(e){e.recomputing=!1;let n=e.producersTail,t=n!==void 0?n.nextProducer:e.producers;if(t!==void 0){if(ir(e))do t=Ma(t);while(t!==void 0);n!==void 0?n.nextProducer=void 0:e.producers=void 0}}function Jr(e){for(let n=e.producers;n!==void 0;n=n.nextProducer){let t=n.producer,r=n.lastReadVersion;if(r!==t.version||(dn(t),r!==t.version))return!0}return!1}function fn(e){if(ir(e)){let n=e.producers;for(;n!==void 0;)n=Ma(n)}e.producers=void 0,e.producersTail=void 0,e.consumers=void 0,e.consumersTail=void 0}function yu(e,n){let t=e.consumersTail,r=ir(e);if(t!==void 0?(n.nextConsumer=t.nextConsumer,t.nextConsumer=n):(n.nextConsumer=void 0,e.consumers=n),n.prevConsumer=t,e.consumersTail=n,!r)for(let o=e.producers;o!==void 0;o=o.nextProducer)yu(o.producer,o)}function Ma(e){let n=e.producer,t=e.nextProducer,r=e.nextConsumer,o=e.prevConsumer;if(e.nextConsumer=void 0,e.prevConsumer=void 0,r!==void 0?r.prevConsumer=o:n.consumersTail=o,o!==void 0)o.nextConsumer=r;else if(n.consumers=r,!ir(n)){let i=n.producers;for(;i!==void 0;)i=Ma(i)}return t}function ir(e){return e.consumerIsAlwaysLive||e.consumers!==void 0}function eo(e){Sv?.(e)}function to(e,n){return Object.is(e,n)}function no(e,n){let t=Object.create(Dv);t.computation=e,n!==void 0&&(t.equal=n);let r=()=>{if(dn(t),ln(t),t.value===nt)throw t.error;return t.value};return r[oe]=t,eo(t),r}var an=Symbol("UNSET"),cn=Symbol("COMPUTING"),nt=Symbol("ERRORED"),Dv=U(w({},jt),{value:an,dirty:!0,error:null,equal:to,kind:"computed",producerMustRecompute(e){return e.value===an||e.value===cn},producerRecomputeValue(e){if(e.value===cn)throw new Error("");let n=e.value;e.value=cn;let t=Bt(e),r,o=!1;try{r=e.computation(),S(null),o=n!==an&&n!==nt&&r!==nt&&e.equal(n,r)}catch(i){r=nt,e.error=i}finally{un(e,t)}if(o){e.value=n;return}e.value=r,e.version++}});function Cv(){throw new Error}var bu=Cv;function _u(e){bu(e)}function xa(e){bu=e}var Nv=null;function Aa(e,n){let t=Object.create(hi);t.value=e,n!==void 0&&(t.equal=n);let r=()=>Eu(t);return r[oe]=t,eo(t),[r,s=>pn(t,s),s=>mi(t,s)]}function Eu(e){return ln(e),e.value}function pn(e,n){Ta()||_u(e),e.equal(e.value,n)||(e.value=n,Tv(e))}function mi(e,n){Ta()||_u(e),pn(e,n(e.value))}var hi=U(w({},jt),{equal:to,value:void 0,kind:"signal"});function Tv(e){e.version++,hu(),Na(e),Nv?.(e)}var Ra=U(w({},jt),{consumerIsAlwaysLive:!0,consumerAllowSignalWrites:!0,dirty:!0,kind:"effect"});function ka(e){if(e.dirty=!1,e.version>0&&!Jr(e))return;e.version++;let n=Bt(e);try{e.cleanup(),e.fn()}finally{un(e,n)}}var Oa;function gi(){return Oa}function rt(e){let n=Oa;return Oa=e,n}var wu=Symbol("NotFound");function sr(e){return e===wu||e?.name==="\u0275NotFound"}function Pa(e,n,t){let r=Object.create(Mv);r.source=e,r.computation=n,t!=null&&(r.equal=t);let i=()=>{if(dn(r),ln(r),r.value===nt)throw r.error;return r.value};return i[oe]=r,eo(r),i}function Fa(e,n){dn(e),pn(e,n),or(e)}function Su(e,n){if(dn(e),e.value===nt)throw e.error;mi(e,n),or(e)}var Mv=U(w({},jt),{value:an,dirty:!0,error:null,equal:to,kind:"linkedSignal",producerMustRecompute(e){return e.value===an||e.value===cn},producerRecomputeValue(e){if(e.value===cn)throw new Error("");let n=e.value;e.value=cn;let t=Bt(e),r,o=!1;try{let i=e.source(),s=n!==an&&n!==nt,a=s?{source:e.sourceValue,value:n}:void 0;r=e.computation(i,a),e.sourceValue=i,S(null),o=s&&r!==nt&&e.equal(n,r)}catch(i){r=nt,e.error=i}finally{un(e,t)}if(o){e.value=n;return}e.value=r,e.version++}});function Iu(e){let n=S(null);try{return e()}finally{S(n)}}function D(e){return typeof e=="function"}function vi(e){let t=e(r=>{Error.call(r),r.stack=new Error().stack});return t.prototype=Object.create(Error.prototype),t.prototype.constructor=t,t}var yi=vi(e=>function(t){e(this),this.message=t?`${t.length} errors occurred during unsubscription:
${t.map((r,o)=>`${o+1}) ${r.toString()}`).join(`
  `)}`:"",this.name="UnsubscriptionError",this.errors=t});function ro(e,n){if(e){let t=e.indexOf(n);0<=t&&e.splice(t,1)}}var le=class e{constructor(n){this.initialTeardown=n,this.closed=!1,this._parentage=null,this._finalizers=null}unsubscribe(){let n;if(!this.closed){this.closed=!0;let{_parentage:t}=this;if(t)if(this._parentage=null,Array.isArray(t))for(let i of t)i.remove(this);else t.remove(this);let{initialTeardown:r}=this;if(D(r))try{r()}catch(i){n=i instanceof yi?i.errors:[i]}let{_finalizers:o}=this;if(o){this._finalizers=null;for(let i of o)try{Du(i)}catch(s){n=n??[],s instanceof yi?n=[...n,...s.errors]:n.push(s)}}if(n)throw new yi(n)}}add(n){var t;if(n&&n!==this)if(this.closed)Du(n);else{if(n instanceof e){if(n.closed||n._hasParent(this))return;n._addParent(this)}(this._finalizers=(t=this._finalizers)!==null&&t!==void 0?t:[]).push(n)}}_hasParent(n){let{_parentage:t}=this;return t===n||Array.isArray(t)&&t.includes(n)}_addParent(n){let{_parentage:t}=this;this._parentage=Array.isArray(t)?(t.push(n),t):t?[t,n]:n}_removeParent(n){let{_parentage:t}=this;t===n?this._parentage=null:Array.isArray(t)&&ro(t,n)}remove(n){let{_finalizers:t}=this;t&&ro(t,n),n instanceof e&&n._removeParent(this)}};le.EMPTY=(()=>{let e=new le;return e.closed=!0,e})();var La=le.EMPTY;function bi(e){return e instanceof le||e&&"closed"in e&&D(e.remove)&&D(e.add)&&D(e.unsubscribe)}function Du(e){D(e)?e():e.unsubscribe()}var Ze={onUnhandledError:null,onStoppedNotification:null,Promise:void 0,useDeprecatedSynchronousErrorHandling:!1,useDeprecatedNextContext:!1};var ar={setTimeout(e,n,...t){let{delegate:r}=ar;return r?.setTimeout?r.setTimeout(e,n,...t):setTimeout(e,n,...t)},clearTimeout(e){let{delegate:n}=ar;return(n?.clearTimeout||clearTimeout)(e)},delegate:void 0};function _i(e){ar.setTimeout(()=>{let{onUnhandledError:n}=Ze;if(n)n(e);else throw e})}function oo(){}var Cu=Va("C",void 0,void 0);function Nu(e){return Va("E",void 0,e)}function Tu(e){return Va("N",e,void 0)}function Va(e,n,t){return{kind:e,value:n,error:t}}var mn=null;function cr(e){if(Ze.useDeprecatedSynchronousErrorHandling){let n=!mn;if(n&&(mn={errorThrown:!1,error:null}),e(),n){let{errorThrown:t,error:r}=mn;if(mn=null,t)throw r}}else e()}function Mu(e){Ze.useDeprecatedSynchronousErrorHandling&&mn&&(mn.errorThrown=!0,mn.error=e)}var hn=class extends le{constructor(n){super(),this.isStopped=!1,n?(this.destination=n,bi(n)&&n.add(this)):this.destination=Rv}static create(n,t,r){return new ht(n,t,r)}next(n){this.isStopped?Ba(Tu(n),this):this._next(n)}error(n){this.isStopped?Ba(Nu(n),this):(this.isStopped=!0,this._error(n))}complete(){this.isStopped?Ba(Cu,this):(this.isStopped=!0,this._complete())}unsubscribe(){this.closed||(this.isStopped=!0,super.unsubscribe(),this.destination=null)}_next(n){this.destination.next(n)}_error(n){try{this.destination.error(n)}finally{this.unsubscribe()}}_complete(){try{this.destination.complete()}finally{this.unsubscribe()}}},xv=Function.prototype.bind;function ja(e,n){return xv.call(e,n)}var Ha=class{constructor(n){this.partialObserver=n}next(n){let{partialObserver:t}=this;if(t.next)try{t.next(n)}catch(r){Ei(r)}}error(n){let{partialObserver:t}=this;if(t.error)try{t.error(n)}catch(r){Ei(r)}else Ei(n)}complete(){let{partialObserver:n}=this;if(n.complete)try{n.complete()}catch(t){Ei(t)}}},ht=class extends hn{constructor(n,t,r){super();let o;if(D(n)||!n)o={next:n??void 0,error:t??void 0,complete:r??void 0};else{let i;this&&Ze.useDeprecatedNextContext?(i=Object.create(n),i.unsubscribe=()=>this.unsubscribe(),o={next:n.next&&ja(n.next,i),error:n.error&&ja(n.error,i),complete:n.complete&&ja(n.complete,i)}):o=n}this.destination=new Ha(o)}};function Ei(e){Ze.useDeprecatedSynchronousErrorHandling?Mu(e):_i(e)}function Av(e){throw e}function Ba(e,n){let{onStoppedNotification:t}=Ze;t&&ar.setTimeout(()=>t(e,n))}var Rv={closed:!0,next:oo,error:Av,complete:oo};var lr=typeof Symbol=="function"&&Symbol.observable||"@@observable";function dr(e){return e}function xu(e){return e.length===0?dr:e.length===1?e[0]:function(t){return e.reduce((r,o)=>o(r),t)}}var O=class e{constructor(n){n&&(this._subscribe=n)}lift(n){let t=new e;return t.source=this,t.operator=n,t}subscribe(n,t,r){let o=Ov(n)?n:new ht(n,t,r);return cr(()=>{let{operator:i,source:s}=this;o.add(i?i.call(o,s):s?this._subscribe(o):this._trySubscribe(o))}),o}_trySubscribe(n){try{return this._subscribe(n)}catch(t){n.error(t)}}forEach(n,t){return t=Au(t),new t((r,o)=>{let i=new ht({next:s=>{try{n(s)}catch(a){o(a),i.unsubscribe()}},error:o,complete:r});this.subscribe(i)})}_subscribe(n){var t;return(t=this.source)===null||t===void 0?void 0:t.subscribe(n)}[lr](){return this}pipe(...n){return xu(n)(this)}toPromise(n){return n=Au(n),new n((t,r)=>{let o;this.subscribe(i=>o=i,i=>r(i),()=>t(o))})}};O.create=e=>new O(e);function Au(e){var n;return(n=e??Ze.Promise)!==null&&n!==void 0?n:Promise}function kv(e){return e&&D(e.next)&&D(e.error)&&D(e.complete)}function Ov(e){return e&&e instanceof hn||kv(e)&&bi(e)}function Pv(e){return D(e?.lift)}function Q(e){return n=>{if(Pv(n))return n.lift(function(t){try{return e(t,this)}catch(r){this.error(r)}});throw new TypeError("Unable to lift unknown Observable type")}}function ne(e,n,t,r,o){return new Ua(e,n,t,r,o)}var Ua=class extends hn{constructor(n,t,r,o,i,s){super(n),this.onFinalize=i,this.shouldUnsubscribe=s,this._next=t?function(a){try{t(a)}catch(c){n.error(c)}}:super._next,this._error=o?function(a){try{o(a)}catch(c){n.error(c)}finally{this.unsubscribe()}}:super._error,this._complete=r?function(){try{r()}catch(a){n.error(a)}finally{this.unsubscribe()}}:super._complete}unsubscribe(){var n;if(!this.shouldUnsubscribe||this.shouldUnsubscribe()){let{closed:t}=this;super.unsubscribe(),!t&&((n=this.onFinalize)===null||n===void 0||n.call(this))}}};var Ru=vi(e=>function(){e(this),this.name="ObjectUnsubscribedError",this.message="object unsubscribed"});var de=class extends O{constructor(){super(),this.closed=!1,this.currentObservers=null,this.observers=[],this.isStopped=!1,this.hasError=!1,this.thrownError=null}lift(n){let t=new wi(this,this);return t.operator=n,t}_throwIfClosed(){if(this.closed)throw new Ru}next(n){cr(()=>{if(this._throwIfClosed(),!this.isStopped){this.currentObservers||(this.currentObservers=Array.from(this.observers));for(let t of this.currentObservers)t.next(n)}})}error(n){cr(()=>{if(this._throwIfClosed(),!this.isStopped){this.hasError=this.isStopped=!0,this.thrownError=n;let{observers:t}=this;for(;t.length;)t.shift().error(n)}})}complete(){cr(()=>{if(this._throwIfClosed(),!this.isStopped){this.isStopped=!0;let{observers:n}=this;for(;n.length;)n.shift().complete()}})}unsubscribe(){this.isStopped=this.closed=!0,this.observers=this.currentObservers=null}get observed(){var n;return((n=this.observers)===null||n===void 0?void 0:n.length)>0}_trySubscribe(n){return this._throwIfClosed(),super._trySubscribe(n)}_subscribe(n){return this._throwIfClosed(),this._checkFinalizedStatuses(n),this._innerSubscribe(n)}_innerSubscribe(n){let{hasError:t,isStopped:r,observers:o}=this;return t||r?La:(this.currentObservers=null,o.push(n),new le(()=>{this.currentObservers=null,ro(o,n)}))}_checkFinalizedStatuses(n){let{hasError:t,thrownError:r,isStopped:o}=this;t?n.error(r):o&&n.complete()}asObservable(){let n=new O;return n.source=this,n}};de.create=(e,n)=>new wi(e,n);var wi=class extends de{constructor(n,t){super(),this.destination=n,this.source=t}next(n){var t,r;(r=(t=this.destination)===null||t===void 0?void 0:t.next)===null||r===void 0||r.call(t,n)}error(n){var t,r;(r=(t=this.destination)===null||t===void 0?void 0:t.error)===null||r===void 0||r.call(t,n)}complete(){var n,t;(t=(n=this.destination)===null||n===void 0?void 0:n.complete)===null||t===void 0||t.call(n)}_subscribe(n){var t,r;return(r=(t=this.source)===null||t===void 0?void 0:t.subscribe(n))!==null&&r!==void 0?r:La}};var gn=class extends de{constructor(n){super(),this._value=n}get value(){return this.getValue()}_subscribe(n){let t=super._subscribe(n);return!t.closed&&n.next(this._value),t}getValue(){let{hasError:n,thrownError:t,_value:r}=this;if(n)throw t;return this._throwIfClosed(),r}next(n){super.next(this._value=n)}};var ku=new O(e=>e.complete());function Ou(e){return e&&D(e.schedule)}function Pu(e){return e[e.length-1]}function Fu(e){return D(Pu(e))?e.pop():void 0}function Lu(e){return Ou(Pu(e))?e.pop():void 0}function ju(e,n,t,r){function o(i){return i instanceof t?i:new t(function(s){s(i)})}return new(t||(t=Promise))(function(i,s){function a(d){try{l(r.next(d))}catch(u){s(u)}}function c(d){try{l(r.throw(d))}catch(u){s(u)}}function l(d){d.done?i(d.value):o(d.value).then(a,c)}l((r=r.apply(e,n||[])).next())})}function Vu(e){var n=typeof Symbol=="function"&&Symbol.iterator,t=n&&e[n],r=0;if(t)return t.call(e);if(e&&typeof e.length=="number")return{next:function(){return e&&r>=e.length&&(e=void 0),{value:e&&e[r++],done:!e}}};throw new TypeError(n?"Object is not iterable.":"Symbol.iterator is not defined.")}function vn(e){return this instanceof vn?(this.v=e,this):new vn(e)}function Bu(e,n,t){if(!Symbol.asyncIterator)throw new TypeError("Symbol.asyncIterator is not defined.");var r=t.apply(e,n||[]),o,i=[];return o=Object.create((typeof AsyncIterator=="function"?AsyncIterator:Object).prototype),a("next"),a("throw"),a("return",s),o[Symbol.asyncIterator]=function(){return this},o;function s(f){return function(h){return Promise.resolve(h).then(f,u)}}function a(f,h){r[f]&&(o[f]=function(b){return new Promise(function(C,k){i.push([f,b,C,k])>1||c(f,b)})},h&&(o[f]=h(o[f])))}function c(f,h){try{l(r[f](h))}catch(b){m(i[0][3],b)}}function l(f){f.value instanceof vn?Promise.resolve(f.value.v).then(d,u):m(i[0][2],f)}function d(f){c("next",f)}function u(f){c("throw",f)}function m(f,h){f(h),i.shift(),i.length&&c(i[0][0],i[0][1])}}function Hu(e){if(!Symbol.asyncIterator)throw new TypeError("Symbol.asyncIterator is not defined.");var n=e[Symbol.asyncIterator],t;return n?n.call(e):(e=typeof Vu=="function"?Vu(e):e[Symbol.iterator](),t={},r("next"),r("throw"),r("return"),t[Symbol.asyncIterator]=function(){return this},t);function r(i){t[i]=e[i]&&function(s){return new Promise(function(a,c){s=e[i](s),o(a,c,s.done,s.value)})}}function o(i,s,a,c){Promise.resolve(c).then(function(l){i({value:l,done:a})},s)}}var ur=(e=>e&&typeof e.length=="number"&&typeof e!="function");function Si(e){return D(e?.then)}function Ii(e){return D(e[lr])}function Di(e){return Symbol.asyncIterator&&D(e?.[Symbol.asyncIterator])}function Ci(e){return new TypeError(`You provided ${e!==null&&typeof e=="object"?"an invalid object":`'${e}'`} where a stream was expected. You can provide an Observable, Promise, ReadableStream, Array, AsyncIterable, or Iterable.`)}function Fv(){return typeof Symbol!="function"||!Symbol.iterator?"@@iterator":Symbol.iterator}var Ni=Fv();function Ti(e){return D(e?.[Ni])}function Mi(e){return Bu(this,arguments,function*(){let t=e.getReader();try{for(;;){let{value:r,done:o}=yield vn(t.read());if(o)return yield vn(void 0);yield yield vn(r)}}finally{t.releaseLock()}})}function xi(e){return D(e?.getReader)}function re(e){if(e instanceof O)return e;if(e!=null){if(Ii(e))return Lv(e);if(ur(e))return Vv(e);if(Si(e))return jv(e);if(Di(e))return Uu(e);if(Ti(e))return Bv(e);if(xi(e))return Hv(e)}throw Ci(e)}function Lv(e){return new O(n=>{let t=e[lr]();if(D(t.subscribe))return t.subscribe(n);throw new TypeError("Provided object does not correctly implement Symbol.observable")})}function Vv(e){return new O(n=>{for(let t=0;t<e.length&&!n.closed;t++)n.next(e[t]);n.complete()})}function jv(e){return new O(n=>{e.then(t=>{n.closed||(n.next(t),n.complete())},t=>n.error(t)).then(null,_i)})}function Bv(e){return new O(n=>{for(let t of e)if(n.next(t),n.closed)return;n.complete()})}function Uu(e){return new O(n=>{Uv(e,n).catch(t=>n.error(t))})}function Hv(e){return Uu(Mi(e))}function Uv(e,n){var t,r,o,i;return ju(this,void 0,void 0,function*(){try{for(t=Hu(e);r=yield t.next(),!r.done;){let s=r.value;if(n.next(s),n.closed)return}}catch(s){o={error:s}}finally{try{r&&!r.done&&(i=t.return)&&(yield i.call(t))}finally{if(o)throw o.error}}n.complete()})}function je(e,n,t,r=0,o=!1){let i=n.schedule(function(){t(),o?e.add(this.schedule(null,r)):this.unsubscribe()},r);if(e.add(i),!o)return i}function Ai(e,n=0){return Q((t,r)=>{t.subscribe(ne(r,o=>je(r,e,()=>r.next(o),n),()=>je(r,e,()=>r.complete(),n),o=>je(r,e,()=>r.error(o),n)))})}function Ri(e,n=0){return Q((t,r)=>{r.add(e.schedule(()=>t.subscribe(r),n))})}function $u(e,n){return re(e).pipe(Ri(n),Ai(n))}function zu(e,n){return re(e).pipe(Ri(n),Ai(n))}function Gu(e,n){return new O(t=>{let r=0;return n.schedule(function(){r===e.length?t.complete():(t.next(e[r++]),t.closed||this.schedule())})})}function Wu(e,n){return new O(t=>{let r;return je(t,n,()=>{r=e[Ni](),je(t,n,()=>{let o,i;try{({value:o,done:i}=r.next())}catch(s){t.error(s);return}i?t.complete():t.next(o)},0,!0)}),()=>D(r?.return)&&r.return()})}function ki(e,n){if(!e)throw new Error("Iterable cannot be null");return new O(t=>{je(t,n,()=>{let r=e[Symbol.asyncIterator]();je(t,n,()=>{r.next().then(o=>{o.done?t.complete():t.next(o.value)})},0,!0)})})}function qu(e,n){return ki(Mi(e),n)}function Zu(e,n){if(e!=null){if(Ii(e))return $u(e,n);if(ur(e))return Gu(e,n);if(Si(e))return zu(e,n);if(Di(e))return ki(e,n);if(Ti(e))return Wu(e,n);if(xi(e))return qu(e,n)}throw Ci(e)}function io(e,n){return n?Zu(e,n):re(e)}function Ye(...e){let n=Lu(e);return io(e,n)}function $a(e,n){let t=D(e)?e:()=>e,r=o=>o.error(t());return new O(n?o=>n.schedule(r,0,o):r)}function ie(e,n){return Q((t,r)=>{let o=0;t.subscribe(ne(r,i=>{r.next(e.call(n,i,o++))}))})}var{isArray:$v}=Array;function zv(e,n){return $v(n)?e(...n):e(n)}function Oi(e){return ie(n=>zv(e,n))}var{isArray:Gv}=Array,{getPrototypeOf:Wv,prototype:qv,keys:Zv}=Object;function Yu(e){if(e.length===1){let n=e[0];if(Gv(n))return{args:n,keys:null};if(Yv(n)){let t=Zv(n);return{args:t.map(r=>n[r]),keys:t}}}return{args:e,keys:null}}function Yv(e){return e&&typeof e=="object"&&Wv(e)===qv}function Qu(e,n){return e.reduce((t,r,o)=>(t[r]=n[o],t),{})}function Ku(e,n,t,r,o,i,s,a){let c=[],l=0,d=0,u=!1,m=()=>{u&&!c.length&&!l&&n.complete()},f=b=>l<r?h(b):c.push(b),h=b=>{i&&n.next(b),l++;let C=!1;re(t(b,d++)).subscribe(ne(n,k=>{o?.(k),i?f(k):n.next(k)},()=>{C=!0},void 0,()=>{if(C)try{for(l--;c.length&&l<r;){let k=c.shift();s?je(n,s,()=>h(k)):h(k)}m()}catch(k){n.error(k)}}))};return e.subscribe(ne(n,f,()=>{u=!0,m()})),()=>{a?.()}}function fr(e,n,t=1/0){return D(n)?fr((r,o)=>ie((i,s)=>n(r,i,o,s))(re(e(r,o))),t):(typeof n=="number"&&(t=n),Q((r,o)=>Ku(r,o,e,t)))}function yn(...e){let n=Fu(e),{args:t,keys:r}=Yu(e),o=new O(i=>{let{length:s}=t;if(!s){i.complete();return}let a=new Array(s),c=s,l=s;for(let d=0;d<s;d++){let u=!1;re(t[d]).subscribe(ne(i,m=>{u||(u=!0,l--),a[d]=m},()=>c--,void 0,()=>{(!c||!u)&&(l||i.next(r?Qu(r,a):a),i.complete())}))}});return n?o.pipe(Oi(n)):o}var Qv=["addListener","removeListener"],Kv=["addEventListener","removeEventListener"],Xv=["on","off"];function so(e,n,t,r){if(D(t)&&(r=t,t=void 0),r)return so(e,n,t).pipe(Oi(r));let[o,i]=ty(e)?Kv.map(s=>a=>e[s](n,a,t)):Jv(e)?Qv.map(Xu(e,n)):ey(e)?Xv.map(Xu(e,n)):[];if(!o&&ur(e))return fr(s=>so(s,n,t))(re(e));if(!o)throw new TypeError("Invalid event target");return new O(s=>{let a=(...c)=>s.next(1<c.length?c:c[0]);return o(a),()=>i(a)})}function Xu(e,n){return t=>r=>e[t](n,r)}function Jv(e){return D(e.addListener)&&D(e.removeListener)}function ey(e){return D(e.on)&&D(e.off)}function ty(e){return D(e.addEventListener)&&D(e.removeEventListener)}function ao(e,n){return Q((t,r)=>{let o=0;t.subscribe(ne(r,i=>e.call(n,i,o++)&&r.next(i)))})}function Pi(e){return Q((n,t)=>{let r=null,o=!1,i;r=n.subscribe(ne(t,void 0,void 0,s=>{i=re(e(s,Pi(e)(n))),r?(r.unsubscribe(),r=null,i.subscribe(t)):o=!0})),o&&(r.unsubscribe(),r=null,i.subscribe(t))})}function za(e,n){return D(n)?fr(e,n,1):fr(e,1)}function co(e){return e<=0?()=>ku:Q((n,t)=>{let r=0;n.subscribe(ne(t,o=>{++r<=e&&(t.next(o),e<=r&&t.complete())}))})}function Ga(e,n=dr){return e=e??ny,Q((t,r)=>{let o,i=!0;t.subscribe(ne(r,s=>{let a=n(s);(i||!e(o,a))&&(i=!1,o=a,r.next(s))}))})}function ny(e,n){return e===n}function lo(e){return Q((n,t)=>{try{n.subscribe(t)}finally{t.add(e)}})}function qa(e={}){let{connector:n=()=>new de,resetOnError:t=!0,resetOnComplete:r=!0,resetOnRefCountZero:o=!0}=e;return i=>{let s,a,c,l=0,d=!1,u=!1,m=()=>{a?.unsubscribe(),a=void 0},f=()=>{m(),s=c=void 0,d=u=!1},h=()=>{let b=s;f(),b?.unsubscribe()};return Q((b,C)=>{l++,!u&&!d&&m();let k=c=c??n();C.add(()=>{l--,l===0&&!u&&!d&&(a=Wa(h,o))}),k.subscribe(C),!s&&l>0&&(s=new ht({next:be=>k.next(be),error:be=>{u=!0,m(),a=Wa(f,t,be),k.error(be)},complete:()=>{d=!0,m(),a=Wa(f,r),k.complete()}}),re(b).subscribe(s))})(i)}}function Wa(e,n,...t){if(n===!0){e();return}if(n===!1)return;let r=new ht({next:()=>{r.unsubscribe(),e()}});return re(n(...t)).subscribe(r)}function Za(e){return ao((n,t)=>e<=t)}function Ya(e){return Q((n,t)=>{re(e).subscribe(ne(t,()=>t.complete(),oo)),!t.closed&&n.subscribe(t)})}function uo(e,n,t){let r=D(e)||n||t?{next:e,error:n,complete:t}:e;return r?Q((o,i)=>{var s;(s=r.subscribe)===null||s===void 0||s.call(r);let a=!0;o.subscribe(ne(i,c=>{var l;(l=r.next)===null||l===void 0||l.call(r,c),i.next(c)},()=>{var c;a=!1,(c=r.complete)===null||c===void 0||c.call(r),i.complete()},c=>{var l;a=!1,(l=r.error)===null||l===void 0||l.call(r,c),i.error(c)},()=>{var c,l;a&&((c=r.unsubscribe)===null||c===void 0||c.call(r)),(l=r.finalize)===null||l===void 0||l.call(r)}))}):dr}var Ui="https://angular.dev/best-practices/security#preventing-cross-site-scripting-xss",_=class extends Error{code;constructor(n,t){super(In(n,t)),this.code=n}};function ry(e){return`NG0${Math.abs(e)}`}function In(e,n){return`${ry(e)}${n?": "+n:""}`}function $(e){for(let n in e)if(e[n]===$)return n;throw Error("")}function rf(e,n){for(let t in n)n.hasOwnProperty(t)&&!e.hasOwnProperty(t)&&(e[t]=n[t])}function $i(e){if(typeof e=="string")return e;if(Array.isArray(e))return`[${e.map($i).join(", ")}]`;if(e==null)return""+e;let n=e.overriddenName||e.name;if(n)return`${n}`;let t=e.toString();if(t==null)return""+t;let r=t.indexOf(`
`);return r>=0?t.slice(0,r):t}function zi(e,n){return e?n?`${e} ${n}`:e:n||""}var oy=$({__forward_ref__:$});function Be(e){return e.__forward_ref__=Be,e}function he(e){return cc(e)?e():e}function cc(e){return typeof e=="function"&&e.hasOwnProperty(oy)&&e.__forward_ref__===Be}function F(e){return{token:e.token,providedIn:e.providedIn||null,factory:e.factory,value:void 0}}function K(e){return{providers:e.providers||[],imports:e.imports||[]}}function Gi(e){return iy(e,Wi)}function iy(e,n){return e.hasOwnProperty(n)&&e[n]||null}function sy(e){let n=e?.[Wi]??null;return n||null}function Ka(e){return e&&e.hasOwnProperty(Li)?e[Li]:null}var Wi=$({\u0275prov:$}),Li=$({\u0275inj:$}),g=class{_desc;ngMetadataName="InjectionToken";\u0275prov;constructor(n,t){this._desc=n,this.\u0275prov=void 0,typeof t=="number"?this.__NG_ELEMENT_ID__=t:t!==void 0&&(this.\u0275prov=F({token:this,providedIn:t.providedIn||"root",factory:t.factory}))}get multi(){return this}toString(){return`InjectionToken ${this._desc}`}};function lc(e){return e&&!!e.\u0275providers}var vo=$({\u0275cmp:$}),yo=$({\u0275dir:$}),dc=$({\u0275pipe:$});var po=$({\u0275fac:$}),Dn=$({__NG_ELEMENT_ID__:$}),Ju=$({__NG_ENV_ID__:$});function Ut(e){return fc(e,"@Component"),e[vo]||null}function uc(e){return fc(e,"@Directive"),e[yo]||null}function of(e){return fc(e,"@Pipe"),e[dc]||null}function fc(e,n){if(e==null)throw new _(-919,!1)}function sf(e){return typeof e=="string"?e:e==null?"":String(e)}var af=$({ngErrorCode:$}),ay=$({ngErrorMessage:$}),cy=$({ngTokenPath:$});function pc(e,n){return cf("",-200,n)}function qi(e,n){throw new _(-201,!1)}function cf(e,n,t){let r=new _(n,e);return r[af]=n,r[ay]=e,t&&(r[cy]=t),r}function ly(e){return e[af]}var Xa;function lf(){return Xa}function Fe(e){let n=Xa;return Xa=e,n}function mc(e,n,t){let r=Gi(e);if(r&&r.providedIn=="root")return r.value===void 0?r.value=r.factory():r.value;if(t&8)return null;if(n!==void 0)return n;qi(e,"")}var hr=globalThis;var dy={},bn=dy,uy="__NG_DI_FLAG__",Ja=class{injector;constructor(n){this.injector=n}retrieve(n,t){let r=_n(t)||0;try{return this.injector.get(n,r&8?null:bn,r)}catch(o){if(sr(o))return o;throw o}}};function fy(e,n=0){let t=gi();if(t===void 0)throw new _(-203,!1);if(t===null)return mc(e,void 0,n);{let r=py(n),o=t.retrieve(e,r);if(sr(o)){if(r.optional)return null;throw o}return o}}function M(e,n=0){return(lf()||fy)(he(e),n)}function p(e,n){return M(e,_n(n))}function _n(e){return typeof e>"u"||typeof e=="number"?e:0|(e.optional&&8)|(e.host&&1)|(e.self&&2)|(e.skipSelf&&4)}function py(e){return{optional:!!(e&8),host:!!(e&1),self:!!(e&2),skipSelf:!!(e&4)}}function ec(e){let n=[];for(let t=0;t<e.length;t++){let r=he(e[t]);if(Array.isArray(r)){if(r.length===0)throw new _(900,!1);let o,i=0;for(let s=0;s<r.length;s++){let a=r[s],c=my(a);typeof c=="number"?c===-1?o=a.token:i|=c:o=a}n.push(M(o,i))}else n.push(M(r))}return n}function my(e){return e[uy]}function En(e,n){let t=e.hasOwnProperty(po);return t?e[po]:null}function df(e,n,t){if(e.length!==n.length)return!1;for(let r=0;r<e.length;r++){let o=e[r],i=n[r];if(t&&(o=t(o),i=t(i)),i!==o)return!1}return!0}function uf(e){return e.flat(Number.POSITIVE_INFINITY)}function Zi(e,n){e.forEach(t=>Array.isArray(t)?Zi(t,n):n(t))}function hc(e,n,t){n>=e.length?e.push(t):e.splice(n,0,t)}function bo(e,n){return n>=e.length-1?e.pop():e.splice(n,1)[0]}function ff(e,n){let t=[];for(let r=0;r<e;r++)t.push(n);return t}function pf(e,n,t,r){let o=e.length;if(o==n)e.push(t,r);else if(o===1)e.push(r,e[0]),e[0]=t;else{for(o--,e.push(e[o-1],e[o]);o>n;){let i=o-2;e[o]=e[i],o--}e[n]=t,e[n+1]=r}}function Yi(e,n,t){let r=gr(e,n);return r>=0?e[r|1]=t:(r=~r,pf(e,r,n,t)),r}function Qi(e,n){let t=gr(e,n);if(t>=0)return e[t|1]}function gr(e,n){return hy(e,n,1)}function hy(e,n,t){let r=0,o=e.length>>t;for(;o!==r;){let i=r+(o-r>>1),s=e[i<<t];if(n===s)return i<<t;s>n?o=i:r=i+1}return~(o<<t)}var $t={},_e=[],vr=new g(""),_o=new g("",-1),gc=new g(""),mr=class{get(n,t=bn){if(t===bn){let o=cf("",-201);throw o.name="\u0275NotFound",o}return t}};function yr(e){return{\u0275providers:e}}function mf(...e){return{\u0275providers:vc(!0,e),\u0275fromNgModule:!0}}function vc(e,...n){let t=[],r=new Set,o,i=s=>{t.push(s)};return Zi(n,s=>{let a=s;Vi(a,i,[],r)&&(o||=[],o.push(a))}),o!==void 0&&hf(o,i),t}function hf(e,n){for(let t=0;t<e.length;t++){let{ngModule:r,providers:o}=e[t];yc(o,i=>{n(i,r)})}}function Vi(e,n,t,r){if(e=he(e),!e)return!1;let o=null,i=Ka(e),s=!i&&Ut(e);if(!i&&!s){let c=e.ngModule;if(i=Ka(c),i)o=c;else return!1}else{if(s&&!s.standalone)return!1;o=e}let a=r.has(o);if(s){if(a)return!1;if(r.add(o),s.dependencies){let c=typeof s.dependencies=="function"?s.dependencies():s.dependencies;for(let l of c)Vi(l,n,t,r)}}else if(i){if(i.imports!=null&&!a){r.add(o);let l;Zi(i.imports,d=>{Vi(d,n,t,r)&&(l||=[],l.push(d))}),l!==void 0&&hf(l,n)}if(!a){let l=En(o)||(()=>new o);n({provide:o,useFactory:l,deps:_e},o),n({provide:gc,useValue:o,multi:!0},o),n({provide:vr,useValue:()=>M(o),multi:!0},o)}let c=i.providers;if(c!=null&&!a){let l=e;yc(c,d=>{n(d,l)})}}else return!1;return o!==e&&e.providers!==void 0}function yc(e,n){for(let t of e)lc(t)&&(t=t.\u0275providers),Array.isArray(t)?yc(t,n):n(t)}var gy=$({provide:String,useValue:$});function gf(e){return e!==null&&typeof e=="object"&&gy in e}function vy(e){return!!(e&&e.useExisting)}function yy(e){return!!(e&&e.useFactory)}function wn(e){return typeof e=="function"}function vf(e){return!!e.useClass}var Eo=new g(""),Fi={},ef={},Qa;function br(){return Qa===void 0&&(Qa=new mr),Qa}var ge=class{},Sn=class extends ge{parent;source;scopes;records=new Map;_ngOnDestroyHooks=new Set;_onDestroyHooks=[];get destroyed(){return this._destroyed}_destroyed=!1;injectorDefTypes;constructor(n,t,r,o){super(),this.parent=t,this.source=r,this.scopes=o,nc(n,s=>this.processProvider(s)),this.records.set(_o,pr(void 0,this)),o.has("environment")&&this.records.set(ge,pr(void 0,this));let i=this.records.get(Eo);i!=null&&typeof i.value=="string"&&this.scopes.add(i.value),this.injectorDefTypes=new Set(this.get(gc,_e,{self:!0}))}retrieve(n,t){let r=_n(t)||0;try{return this.get(n,bn,r)}catch(o){if(sr(o))return o;throw o}}destroy(){fo(this),this._destroyed=!0;let n=S(null);try{for(let r of this._ngOnDestroyHooks)r.ngOnDestroy();let t=this._onDestroyHooks;this._onDestroyHooks=[];for(let r of t)r()}finally{this.records.clear(),this._ngOnDestroyHooks.clear(),this.injectorDefTypes.clear(),S(n)}}onDestroy(n){return fo(this),this._onDestroyHooks.push(n),()=>this.removeOnDestroy(n)}runInContext(n){fo(this);let t=rt(this),r=Fe(void 0),o;try{return n()}finally{rt(t),Fe(r)}}get(n,t=bn,r){if(fo(this),n.hasOwnProperty(Ju))return n[Ju](this);let o=_n(r),i,s=rt(this),a=Fe(void 0);try{if(!(o&4)){let l=this.records.get(n);if(l===void 0){let d=Sy(n)&&Gi(n);d&&this.injectableDefInScope(d)?l=pr(tc(n),Fi):l=null,this.records.set(n,l)}if(l!=null)return this.hydrate(n,l,o)}let c=o&2?br():this.parent;return t=o&8&&t===bn?null:t,c.get(n,t)}catch(c){let l=ly(c);throw l===-200||l===-201?new _(l,null):c}finally{Fe(a),rt(s)}}resolveInjectorInitializers(){let n=S(null),t=rt(this),r=Fe(void 0),o;try{let i=this.get(vr,_e,{self:!0});for(let s of i)s()}finally{rt(t),Fe(r),S(n)}}toString(){return"R3Injector[...]"}processProvider(n){n=he(n);let t=wn(n)?n:he(n&&n.provide),r=_y(n);if(!wn(n)&&n.multi===!0){let o=this.records.get(t);o||(o=pr(void 0,Fi,!0),o.factory=()=>ec(o.multi),this.records.set(t,o)),t=n,o.multi.push(n)}this.records.set(t,r)}hydrate(n,t,r){let o=S(null);try{if(t.value===ef)throw pc("");return t.value===Fi&&(t.value=ef,t.value=t.factory(void 0,r)),typeof t.value=="object"&&t.value&&wy(t.value)&&this._ngOnDestroyHooks.add(t.value),t.value}finally{S(o)}}injectableDefInScope(n){if(!n.providedIn)return!1;let t=he(n.providedIn);return typeof t=="string"?t==="any"||this.scopes.has(t):this.injectorDefTypes.has(t)}removeOnDestroy(n){let t=this._onDestroyHooks.indexOf(n);t!==-1&&this._onDestroyHooks.splice(t,1)}};function tc(e){let n=Gi(e),t=n!==null?n.factory:En(e);if(t!==null)return t;if(e instanceof g)throw new _(-204,!1);if(e instanceof Function)return by(e);throw new _(-204,!1)}function by(e){if(e.length>0)throw new _(-204,!1);let t=sy(e);return t!==null?()=>t.factory(e):()=>new e}function _y(e){if(gf(e))return pr(void 0,e.useValue);{let n=bc(e);return pr(n,Fi)}}function bc(e,n,t){let r;if(wn(e)){let o=he(e);return En(o)||tc(o)}else if(gf(e))r=()=>he(e.useValue);else if(yy(e))r=()=>e.useFactory(...ec(e.deps||[]));else if(vy(e))r=(o,i)=>M(he(e.useExisting),i!==void 0&&i&8?8:void 0);else{let o=he(e&&(e.useClass||e.provide));if(Ey(e))r=()=>new o(...ec(e.deps));else return En(o)||tc(o)}return r}function fo(e){if(e.destroyed)throw new _(-205,!1)}function pr(e,n,t=!1){return{factory:e,value:n,multi:t?[]:void 0}}function Ey(e){return!!e.deps}function wy(e){return e!==null&&typeof e=="object"&&typeof e.ngOnDestroy=="function"}function Sy(e){return typeof e=="function"||typeof e=="object"&&e.ngMetadataName==="InjectionToken"}function nc(e,n){for(let t of e)Array.isArray(t)?nc(t,n):t&&lc(t)?nc(t.\u0275providers,n):n(t)}function _r(e,n){let t;e instanceof Sn?(fo(e),t=e):t=new Ja(e);let r,o=rt(t),i=Fe(void 0);try{return n()}finally{rt(o),Fe(i)}}function yf(){return lf()!==void 0||gi()!=null}var Qe=0,E=1,I=2,pe=3,He=4,we=5,Er=6,wr=7,Se=8,bt=9,ot=10,Z=11,Sr=12,_c=13,Cn=14,Ae=15,zt=16,Nn=17,it=18,_t=19,Ec=20,gt=21,Ki=22,Ht=23,Le=24,Tn=25,Gt=26,ue=27,bf=1;var Mn=7,wo=8,xn=9,ve=10;function Et(e){return Array.isArray(e)&&typeof e[bf]=="object"}function Ue(e){return Array.isArray(e)&&e[bf]===!0}function wc(e){return(e.flags&4)!==0}function wt(e){return e.componentOffset>-1}function Xi(e){return(e.flags&1)===1}function st(e){return!!e.template}function Ir(e){return(e[I]&512)!==0}function An(e){return(e[I]&256)===256}var Ie=(function(e){return e[e.NONE=0]="NONE",e[e.HTML=1]="HTML",e[e.STYLE=2]="STYLE",e[e.SCRIPT=3]="SCRIPT",e[e.URL=4]="URL",e[e.RESOURCE_URL=5]="RESOURCE_URL",e[e.ATTRIBUTE_NO_BINDING=6]="ATTRIBUTE_NO_BINDING",e})(Ie||{});var Sc="svg",_f="math";function ye(e){for(;Array.isArray(e);)e=e[Qe];return e}function Ef(e,n){return ye(n[e])}function $e(e,n){return ye(n[e.index])}function Ji(e,n){return e.data[n]}function wf(e,n){return e[n]}function ze(e,n){let t=n[e];return Et(t)?t:t[Qe]}function Sf(e){return(e[I]&4)===4}function es(e){return(e[I]&128)===128}function If(e){return Ue(e[pe])}function Wt(e,n){return n==null?null:e[n]}function Ic(e){e[Nn]=0}function Dc(e){e[I]&1024||(e[I]|=1024,es(e)&&Rn(e))}function So(e){return!!(e[I]&9216||e[Le]?.dirty)}function ts(e){e[ot].changeDetectionScheduler?.notify(8),e[I]&64&&(e[I]|=1024),So(e)&&Rn(e)}function Rn(e){e[ot].changeDetectionScheduler?.notify(0);let n=vt(e);for(;n!==null&&!(n[I]&8192||(n[I]|=8192,!es(n)));)n=vt(n)}function ns(e,n){if(An(e))throw new _(911,!1);e[gt]===null&&(e[gt]=[]),e[gt].push(n)}function Df(e,n){if(e[gt]===null)return;let t=e[gt].indexOf(n);t!==-1&&e[gt].splice(t,1)}function vt(e){let n=e[pe];return Ue(n)?n[pe]:n}function Cc(e){return e[wr]??=[]}function Nc(e){return e.cleanup??=[]}function Cf(e,n,t,r){let o=Cc(n);o.push(t),e.firstCreatePass&&Nc(e).push(r,o.length-1)}var A={lFrame:Vf(null),bindingsEnabled:!0,skipHydrationRootTNode:null};var rc=!1;function Nf(){return A.lFrame.elementDepthCount}function Tf(){A.lFrame.elementDepthCount++}function Tc(){A.lFrame.elementDepthCount--}function Mf(){return A.bindingsEnabled}function Mc(){return A.skipHydrationRootTNode!==null}function xc(e){return A.skipHydrationRootTNode===e}function Ac(){A.skipHydrationRootTNode=null}function x(){return A.lFrame.lView}function J(){return A.lFrame.tView}function St(e){return A.lFrame.contextLView=e,e[Se]}function It(e){return A.lFrame.contextLView=null,e}function me(){let e=Rc();for(;e!==null&&e.type===64;)e=e.parent;return e}function Rc(){return A.lFrame.currentTNode}function xf(){let e=A.lFrame,n=e.currentTNode;return e.isParent?n:n.parent}function Dr(e,n){let t=A.lFrame;t.currentTNode=e,t.isParent=n}function kc(){return A.lFrame.isParent}function Oc(){A.lFrame.isParent=!1}function Af(){return A.lFrame.contextLView}function Pc(){return rc}function mo(e){let n=rc;return rc=e,n}function Rf(e){return A.lFrame.bindingIndex=e}function Cr(){return A.lFrame.bindingIndex++}function Fc(e){let n=A.lFrame,t=n.bindingIndex;return n.bindingIndex=n.bindingIndex+e,t}function kf(){return A.lFrame.inI18n}function Of(e,n){let t=A.lFrame;t.bindingIndex=t.bindingRootIndex=e,rs(n)}function Pf(){return A.lFrame.currentDirectiveIndex}function rs(e){A.lFrame.currentDirectiveIndex=e}function Ff(e){let n=A.lFrame.currentDirectiveIndex;return n===-1?null:e[n]}function os(){return A.lFrame.currentQueryIndex}function Io(e){A.lFrame.currentQueryIndex=e}function Iy(e){let n=e[E];return n.type===2?n.declTNode:n.type===1?e[we]:null}function Lc(e,n,t){if(t&4){let o=n,i=e;for(;o=o.parent,o===null&&!(t&1);)if(o=Iy(i),o===null||(i=i[Cn],o.type&10))break;if(o===null)return!1;n=o,e=i}let r=A.lFrame=Lf();return r.currentTNode=n,r.lView=e,!0}function is(e){let n=Lf(),t=e[E];A.lFrame=n,n.currentTNode=t.firstChild,n.lView=e,n.tView=t,n.contextLView=e,n.bindingIndex=t.bindingStartIndex,n.inI18n=!1}function Lf(){let e=A.lFrame,n=e===null?null:e.child;return n===null?Vf(e):n}function Vf(e){let n={currentTNode:null,isParent:!0,lView:null,tView:null,selectedIndex:-1,contextLView:null,elementDepthCount:0,currentNamespace:null,currentDirectiveIndex:-1,bindingRootIndex:-1,bindingIndex:-1,currentQueryIndex:0,parent:e,child:null,inI18n:!1};return e!==null&&(e.child=n),n}function jf(){let e=A.lFrame;return A.lFrame=e.parent,e.currentTNode=null,e.lView=null,e}var Vc=jf;function ss(){let e=jf();e.isParent=!0,e.tView=null,e.selectedIndex=-1,e.contextLView=null,e.elementDepthCount=0,e.currentDirectiveIndex=-1,e.currentNamespace=null,e.bindingRootIndex=-1,e.bindingIndex=-1,e.currentQueryIndex=0}function kn(){return A.lFrame.selectedIndex}function qt(e){A.lFrame.selectedIndex=e}function Nr(){let e=A.lFrame;return Ji(e.tView,e.selectedIndex)}function as(){A.lFrame.currentNamespace=Sc}function jc(){return A.lFrame.currentNamespace}var Bf=!0;function cs(){return Bf}function ls(e){Bf=e}function oc(e,n=null,t=null,r){let o=Hf(e,n,t,r);return o.resolveInjectorInitializers(),o}function Hf(e,n=null,t=null,r,o=new Set){let i=[t||_e,mf(e)],s;return new Sn(i,n||br(),s||null,o)}var ae=class e{static THROW_IF_NOT_FOUND=bn;static NULL=new mr;static create(n,t){if(Array.isArray(n))return oc({name:""},t,n,"");{let r=n.name??"";return oc({name:r},n.parent,n.providers,r)}}static \u0275prov=F({token:e,providedIn:"any",factory:()=>M(_o)});static __NG_ELEMENT_ID__=-1},L=new g(""),xe=class{static __NG_ELEMENT_ID__=Dy;static __NG_ENV_ID__=n=>n},ji=class extends xe{_lView;constructor(n){super(),this._lView=n}get destroyed(){return An(this._lView)}onDestroy(n){let t=this._lView;return ns(t,n),()=>Df(t,n)}};function Dy(){return new ji(x())}var Uf=!1,$f=new g(""),On=(()=>{class e{taskId=0;pendingTasks=new Set;destroyed=!1;pendingTask=new gn(!1);debugTaskTracker=p($f,{optional:!0});get hasPendingTasks(){return this.destroyed?!1:this.pendingTask.value}get hasPendingTasksObservable(){return this.destroyed?new O(t=>{t.next(!1),t.complete()}):this.pendingTask}add(){!this.hasPendingTasks&&!this.destroyed&&this.pendingTask.next(!0);let t=this.taskId++;return this.pendingTasks.add(t),this.debugTaskTracker?.add(t),t}has(t){return this.pendingTasks.has(t)}remove(t){this.pendingTasks.delete(t),this.debugTaskTracker?.remove(t),this.pendingTasks.size===0&&this.hasPendingTasks&&this.pendingTask.next(!1)}ngOnDestroy(){this.pendingTasks.clear(),this.hasPendingTasks&&this.pendingTask.next(!1),this.destroyed=!0,this.pendingTask.unsubscribe()}static \u0275prov=F({token:e,providedIn:"root",factory:()=>new e})}return e})(),ic=class extends de{__isAsync;destroyRef=void 0;pendingTasks=void 0;constructor(n=!1){super(),this.__isAsync=n,yf()&&(this.destroyRef=p(xe,{optional:!0})??void 0,this.pendingTasks=p(On,{optional:!0})??void 0)}emit(n){let t=S(null);try{super.next(n)}finally{S(t)}}subscribe(n,t,r){let o=n,i=t||(()=>null),s=r;if(n&&typeof n=="object"){let c=n;o=c.next?.bind(c),i=c.error?.bind(c),s=c.complete?.bind(c)}this.__isAsync&&(i=this.wrapInTimeout(i),o&&(o=this.wrapInTimeout(o)),s&&(s=this.wrapInTimeout(s)));let a=super.subscribe({next:o,error:i,complete:s});return n instanceof le&&n.add(a),a}wrapInTimeout(n){return t=>{let r=this.pendingTasks?.add();setTimeout(()=>{try{n(t)}finally{r!==void 0&&this.pendingTasks?.remove(r)}})}}},se=ic;function Bi(...e){}function Bc(e){let n,t;function r(){e=Bi;try{t!==void 0&&typeof cancelAnimationFrame=="function"&&cancelAnimationFrame(t),n!==void 0&&clearTimeout(n)}catch{}}return n=setTimeout(()=>{e(),r()}),typeof requestAnimationFrame=="function"&&(t=requestAnimationFrame(()=>{e(),r()})),()=>r()}function zf(e){return queueMicrotask(()=>e()),()=>{e=Bi}}var Hc="isAngularZone",ho=Hc+"_ID",Cy=0,z=class e{hasPendingMacrotasks=!1;hasPendingMicrotasks=!1;isStable=!0;onUnstable=new se(!1);onMicrotaskEmpty=new se(!1);onStable=new se(!1);onError=new se(!1);constructor(n){let{enableLongStackTrace:t=!1,shouldCoalesceEventChangeDetection:r=!1,shouldCoalesceRunChangeDetection:o=!1,scheduleInRootZone:i=Uf}=n;if(typeof Zone>"u")throw new _(908,!1);Zone.assertZonePatched();let s=this;s._nesting=0,s._outer=s._inner=Zone.current,Zone.TaskTrackingZoneSpec&&(s._inner=s._inner.fork(new Zone.TaskTrackingZoneSpec)),t&&Zone.longStackTraceZoneSpec&&(s._inner=s._inner.fork(Zone.longStackTraceZoneSpec)),s.shouldCoalesceEventChangeDetection=!o&&r,s.shouldCoalesceRunChangeDetection=o,s.callbackScheduled=!1,s.scheduleInRootZone=i,My(s)}static isInAngularZone(){return typeof Zone<"u"&&Zone.current.get(Hc)===!0}static assertInAngularZone(){if(!e.isInAngularZone())throw new _(909,!1)}static assertNotInAngularZone(){if(e.isInAngularZone())throw new _(909,!1)}run(n,t,r){return this._inner.run(n,t,r)}runTask(n,t,r,o){let i=this._inner,s=i.scheduleEventTask("NgZoneEvent: "+o,n,Ny,Bi,Bi);try{return i.runTask(s,t,r)}finally{i.cancelTask(s)}}runGuarded(n,t,r){return this._inner.runGuarded(n,t,r)}runOutsideAngular(n){return this._outer.run(n)}},Ny={};function Uc(e){if(e._nesting==0&&!e.hasPendingMicrotasks&&!e.isStable)try{e._nesting++,e.onMicrotaskEmpty.emit(null)}finally{if(e._nesting--,!e.hasPendingMicrotasks)try{e.runOutsideAngular(()=>e.onStable.emit(null))}finally{e.isStable=!0}}}function Ty(e){if(e.isCheckStableRunning||e.callbackScheduled)return;e.callbackScheduled=!0;function n(){Bc(()=>{e.callbackScheduled=!1,sc(e),e.isCheckStableRunning=!0,Uc(e),e.isCheckStableRunning=!1})}e.scheduleInRootZone?Zone.root.run(()=>{n()}):e._outer.run(()=>{n()}),sc(e)}function My(e){let n=()=>{Ty(e)},t=Cy++;e._inner=e._inner.fork({name:"angular",properties:{[Hc]:!0,[ho]:t,[ho+t]:!0},onInvokeTask:(r,o,i,s,a,c)=>{if(xy(c))return r.invokeTask(i,s,a,c);try{return tf(e),r.invokeTask(i,s,a,c)}finally{(e.shouldCoalesceEventChangeDetection&&s.type==="eventTask"||e.shouldCoalesceRunChangeDetection)&&n(),nf(e)}},onInvoke:(r,o,i,s,a,c,l)=>{try{return tf(e),r.invoke(i,s,a,c,l)}finally{e.shouldCoalesceRunChangeDetection&&!e.callbackScheduled&&!Ay(c)&&n(),nf(e)}},onHasTask:(r,o,i,s)=>{r.hasTask(i,s),o===i&&(s.change=="microTask"?(e._hasPendingMicrotasks=s.microTask,sc(e),Uc(e)):s.change=="macroTask"&&(e.hasPendingMacrotasks=s.macroTask))},onHandleError:(r,o,i,s)=>(r.handleError(i,s),e.runOutsideAngular(()=>e.onError.emit(s)),!1)})}function sc(e){e._hasPendingMicrotasks||(e.shouldCoalesceEventChangeDetection||e.shouldCoalesceRunChangeDetection)&&e.callbackScheduled===!0?e.hasPendingMicrotasks=!0:e.hasPendingMicrotasks=!1}function tf(e){e._nesting++,e.isStable&&(e.isStable=!1,e.onUnstable.emit(null))}function nf(e){e._nesting--,Uc(e)}var go=class{hasPendingMicrotasks=!1;hasPendingMacrotasks=!1;isStable=!0;onUnstable=new se;onMicrotaskEmpty=new se;onStable=new se;onError=new se;run(n,t,r){return n.apply(t,r)}runGuarded(n,t,r){return n.apply(t,r)}runOutsideAngular(n){return n()}runTask(n,t,r,o){return n.apply(t,r)}};function xy(e){return Gf(e,"__ignore_ng_zone__")}function Ay(e){return Gf(e,"__scheduler_tick__")}function Gf(e,n){return!Array.isArray(e)||e.length!==1?!1:e[0]?.data?.[n]===!0}var Ee=class{_console=console;handleError(n){this._console.error("ERROR",n)}},Pn=new g("",{factory:()=>{let e=p(z),n=p(ge),t;return r=>{e.runOutsideAngular(()=>{n.destroyed&&!t?setTimeout(()=>{throw r}):(t??=n.get(Ee),t.handleError(r))})}}}),Wf={provide:vr,useValue:()=>{let e=p(Ee,{optional:!0})},multi:!0};function Ne(e,n){let[t,r,o]=Aa(e,n?.equal),i=t,s=i[oe];return i.set=r,i.update=o,i.asReadonly=ds.bind(i),i}function ds(){let e=this[oe];if(e.readonlyFn===void 0){let n=()=>this();n[oe]=e,e.readonlyFn=n}return e.readonlyFn}var Fn=new g("",{factory:()=>Ry}),Ry="ng";var us=new g(""),Ln=new g("",{providedIn:"platform",factory:()=>"unknown"}),$c=new g(""),Vn=new g("",{factory:()=>p(L).body?.querySelector("[ngCspNonce]")?.getAttribute("ngCspNonce")||null});var Do=(()=>{class e{view;node;constructor(t,r){this.view=t,this.node=r}static __NG_ELEMENT_ID__=ky}return e})();function ky(){return new Do(x(),me())}var yt=class{},Co=new g("",{factory:()=>!0});var zc=new g(""),fs=(()=>{class e{static \u0275prov=F({token:e,providedIn:"root",factory:()=>new ac})}return e})(),ac=class{dirtyEffectCount=0;queues=new Map;add(n){this.enqueue(n),this.schedule(n)}schedule(n){n.dirty&&this.dirtyEffectCount++}remove(n){let t=n.zone,r=this.queues.get(t);r.has(n)&&(r.delete(n),n.dirty&&this.dirtyEffectCount--)}enqueue(n){let t=n.zone;this.queues.has(t)||this.queues.set(t,new Set);let r=this.queues.get(t);r.has(n)||r.add(n)}flush(){for(;this.dirtyEffectCount>0;){let n=!1;for(let[t,r]of this.queues)t===null?n||=this.flushQueue(r):n||=t.run(()=>this.flushQueue(r));n||(this.dirtyEffectCount=0)}}flushQueue(n){let t=!1;for(let r of n)r.dirty&&(this.dirtyEffectCount--,t=!0,r.run());return t}},Hi=class{[oe];constructor(n){this[oe]=n}destroy(){this[oe].destroy()}};function Zt(e,n){let t=n?.injector??p(ae),r=n?.manualCleanup!==!0?t.get(xe):null,o,i=t.get(Do,null,{optional:!0}),s=t.get(yt);return i!==null?(o=Fy(i.view,s,e),r instanceof ji&&r._lView===i.view&&(r=null)):o=Ly(e,t.get(fs),s),o.injector=t,r!==null&&(o.onDestroyFns=[r.onDestroy(()=>o.destroy())]),new Hi(o)}var qf=U(w({},Ra),{cleanupFns:void 0,zone:null,onDestroyFns:null,run(){let e=mo(!1);try{ka(this)}finally{mo(e)}},cleanup(){if(!this.cleanupFns?.length)return;let e=S(null);try{for(;this.cleanupFns.length;)this.cleanupFns.pop()()}finally{this.cleanupFns=[],S(e)}}}),Oy=U(w({},qf),{consumerMarkedDirty(){this.scheduler.schedule(this),this.notifier.notify(12)},destroy(){if(fn(this),this.onDestroyFns!==null)for(let e of this.onDestroyFns)e();this.cleanup(),this.scheduler.remove(this)}}),Py=U(w({},qf),{consumerMarkedDirty(){this.view[I]|=8192,Rn(this.view),this.notifier.notify(13)},destroy(){if(fn(this),this.onDestroyFns!==null)for(let e of this.onDestroyFns)e();this.cleanup(),this.view[Ht]?.delete(this)}});function Fy(e,n,t){let r=Object.create(Py);return r.view=e,r.zone=typeof Zone<"u"?Zone.current:null,r.notifier=n,r.fn=Zf(r,t),e[Ht]??=new Set,e[Ht].add(r),r.consumerMarkedDirty(r),r}function Ly(e,n,t){let r=Object.create(Oy);return r.fn=Zf(r,e),r.scheduler=n,r.notifier=t,r.zone=typeof Zone<"u"?Zone.current:null,r.scheduler.add(r),r.notifier.notify(12),r}function Zf(e,n){return()=>{n(t=>(e.cleanupFns??=[]).push(t))}}function ps(e){return typeof e=="function"&&e[oe]!==void 0}function ms(e){return ps(e)&&typeof e.set=="function"}var No=(()=>{class e{internalPendingTasks=p(On);scheduler=p(yt);errorHandler=p(Pn);add(){let t=this.internalPendingTasks.add();return()=>{this.internalPendingTasks.has(t)&&(this.scheduler.notify(11),this.internalPendingTasks.remove(t))}}run(t){let r=this.add();try{t().catch(this.errorHandler).finally(r)}catch(o){this.errorHandler(o),r()}}static \u0275prov=F({token:e,providedIn:"root",factory:()=>new e})}return e})();function Fo(e){return{toString:e}.toString()}var P=(function(e){return e[e.TemplateCreateStart=0]="TemplateCreateStart",e[e.TemplateCreateEnd=1]="TemplateCreateEnd",e[e.TemplateUpdateStart=2]="TemplateUpdateStart",e[e.TemplateUpdateEnd=3]="TemplateUpdateEnd",e[e.LifecycleHookStart=4]="LifecycleHookStart",e[e.LifecycleHookEnd=5]="LifecycleHookEnd",e[e.OutputStart=6]="OutputStart",e[e.OutputEnd=7]="OutputEnd",e[e.BootstrapApplicationStart=8]="BootstrapApplicationStart",e[e.BootstrapApplicationEnd=9]="BootstrapApplicationEnd",e[e.BootstrapComponentStart=10]="BootstrapComponentStart",e[e.BootstrapComponentEnd=11]="BootstrapComponentEnd",e[e.ChangeDetectionStart=12]="ChangeDetectionStart",e[e.ChangeDetectionEnd=13]="ChangeDetectionEnd",e[e.ChangeDetectionSyncStart=14]="ChangeDetectionSyncStart",e[e.ChangeDetectionSyncEnd=15]="ChangeDetectionSyncEnd",e[e.AfterRenderHooksStart=16]="AfterRenderHooksStart",e[e.AfterRenderHooksEnd=17]="AfterRenderHooksEnd",e[e.ComponentStart=18]="ComponentStart",e[e.ComponentEnd=19]="ComponentEnd",e[e.DeferBlockStateStart=20]="DeferBlockStateStart",e[e.DeferBlockStateEnd=21]="DeferBlockStateEnd",e[e.DynamicComponentStart=22]="DynamicComponentStart",e[e.DynamicComponentEnd=23]="DynamicComponentEnd",e[e.HostBindingsUpdateStart=24]="HostBindingsUpdateStart",e[e.HostBindingsUpdateEnd=25]="HostBindingsUpdateEnd",e})(P||{}),ws=class{previousValue;currentValue;firstChange;constructor(n,t,r){this.previousValue=n,this.currentValue=t,this.firstChange=r}isFirstChange(){return this.firstChange}};function xp(e,n,t,r){n!==null?n.applyValueToInputSignal(n,r):e[t]=r}var Ap=null,Pr=(()=>{Ap=Yf;let e=()=>Yf;return e.ngInherit=!0,e})();function Ky(){return Ap}function Yf(e){return e.type.prototype.ngOnChanges&&(e.setInput=Jy),Xy}function Xy(){let e=Rp(this),n=e?.current;if(n){let t=e.previous;if(t===$t)e.previous=n;else for(let r in n)t[r]=n[r];e.current=null,this.ngOnChanges(n)}}function Jy(e,n,t,r,o){let i=this.declaredInputs[r],s=Rp(e)||eb(e,{previous:$t,current:null}),a=s.current||(s.current={}),c=s.previous,l=c[i];a[i]=new ws(l&&l.currentValue,t,c===$t),xp(e,n,o,t)}var el="__ngSimpleChanges__";function Rp(e){return Object.hasOwn(e,el)&&e[el]||null}function eb(e,n){return e[el]=n}var Qf=[];var V=function(e,n=null,t){for(let r=0;r<Qf.length;r++){let o=Qf[r];o(e,n,t)}};function tb(e,n,t){let{ngOnChanges:r,ngOnInit:o,ngDoCheck:i}=n.type.prototype;if(r){let s=Ky()(n);(t.preOrderHooks??=[]).push(e,s),(t.preOrderCheckHooks??=[]).push(e,s)}o&&(t.preOrderHooks??=[]).push(0-e,o),i&&((t.preOrderHooks??=[]).push(e,i),(t.preOrderCheckHooks??=[]).push(e,i))}function nb(e,n){for(let t=n.directiveStart,r=n.directiveEnd;t<r;t++){let i=e.data[t].type.prototype,{ngAfterContentInit:s,ngAfterContentChecked:a,ngAfterViewInit:c,ngAfterViewChecked:l,ngOnDestroy:d}=i;s&&(e.contentHooks??=[]).push(-t,s),a&&((e.contentHooks??=[]).push(t,a),(e.contentCheckHooks??=[]).push(t,a)),c&&(e.viewHooks??=[]).push(-t,c),l&&((e.viewHooks??=[]).push(t,l),(e.viewCheckHooks??=[]).push(t,l)),d!=null&&(e.destroyHooks??=[]).push(t,d)}}function ys(e,n,t){kp(e,n,3,t)}function bs(e,n,t,r){(e[I]&3)===t&&kp(e,n,t,r)}function Gc(e,n){let t=e[I];(t&3)===n&&(t&=16383,t+=1,e[I]=t)}function kp(e,n,t,r){let o=r!==void 0?e[Nn]&65535:0,i=r??-1,s=n.length-1,a=0;for(let c=o;c<s;c++)if(typeof n[c+1]=="number"){if(a=n[c],r!=null&&a>=r)break}else n[c]<0&&(e[Nn]+=65536),(a<i||i==-1)&&(rb(e,t,n,c),e[Nn]=(e[Nn]&4294901760)+c+2),c++}function Kf(e,n){V(P.LifecycleHookStart,e,n);let t=S(null);try{n.call(e)}finally{S(t),V(P.LifecycleHookEnd,e,n)}}function rb(e,n,t,r){let o=t[r]<0,i=t[r+1],s=o?-t[r]:t[r],a=e[s];o?e[I]>>14<e[Nn]>>16&&(e[I]&3)===n&&(e[I]+=16384,Kf(a,i)):Kf(a,i)}var Mr=-1,Bn=class{factory;name;injectImpl;resolving=!1;canSeeViewProviders;multi;componentProviders;index;providerFactory;constructor(n,t,r,o){this.factory=n,this.name=o,this.canSeeViewProviders=t,this.injectImpl=r}};function ob(e){return(e.flags&8)!==0}function ib(e){return(e.flags&16)!==0}function sb(e,n,t){let r=0;for(;r<t.length;){let o=t[r];if(typeof o=="number"){if(o!==0)break;r++;let i=t[r++],s=t[r++],a=t[r++];e.setAttribute(n,s,a,i)}else{let i=o,s=t[++r];ab(i)?e.setProperty(n,i,s):e.setAttribute(n,i,s),r++}}return r}function Op(e){return e===3||e===4||e===6}function ab(e){return e.charCodeAt(0)===64}function Ar(e,n){if(!(n===null||n.length===0))if(e===null||e.length===0)e=n.slice();else{let t=-1;for(let r=0;r<n.length;r++){let o=n[r];typeof o=="number"?t=o:t===0||(t===-1||t===2?Xf(e,t,o,null,n[++r]):Xf(e,t,o,null,null))}}return e}function Xf(e,n,t,r,o){let i=0,s=e.length;if(n===-1)s=-1;else for(;i<e.length;){let a=e[i++];if(typeof a=="number"){if(a===n){s=-1;break}else if(a>n){s=i-1;break}}}for(;i<e.length;){let a=e[i];if(typeof a=="number")break;if(a===t){o!==null&&(e[i+1]=o);return}i++,o!==null&&i++}s!==-1&&(e.splice(s,0,n),i=s+1),e.splice(i++,0,t),o!==null&&e.splice(i++,0,o)}function Pp(e){return e!==Mr}function Ss(e){return e&32767}function cb(e){return e>>16}function Is(e,n){let t=cb(e),r=n;for(;t>0;)r=r[Cn],t--;return r}var tl=!0;function Jf(e){let n=tl;return tl=e,n}var lb=256,Fp=lb-1,Lp=5,db=0,at={};function ub(e,n,t){let r;typeof t=="string"?r=t.charCodeAt(0)||0:t.hasOwnProperty(Dn)&&(r=t[Dn]),r==null&&(r=t[Dn]=db++);let o=r&Fp,i=1<<o;n.data[e+(o>>Lp)]|=i}function Ds(e,n){let t=Vp(e,n);if(t!==-1)return t;let r=n[E];r.firstCreatePass&&(e.injectorIndex=n.length,Wc(r.data,e),Wc(n,null),Wc(r.blueprint,null));let o=xl(e,n),i=e.injectorIndex;if(Pp(o)){let s=Ss(o),a=Is(o,n),c=a[E].data;for(let l=0;l<8;l++)n[i+l]=a[s+l]|c[s+l]}return n[i+8]=o,i}function Wc(e,n){e.push(0,0,0,0,0,0,0,0,n)}function Vp(e,n){return e.injectorIndex===-1||e.parent&&e.parent.injectorIndex===e.injectorIndex||n[e.injectorIndex+8]===null?-1:e.injectorIndex}function xl(e,n){if(e.parent&&e.parent.injectorIndex!==-1)return e.parent.injectorIndex;let t=0,r=null,o=n;for(;o!==null;){if(r=$p(o),r===null)return Mr;if(t++,o=o[Cn],r.injectorIndex!==-1)return r.injectorIndex|t<<16}return Mr}function nl(e,n,t){ub(e,n,t)}function fb(e,n){if(n==="class")return e.classes;if(n==="style")return e.styles;let t=e.attrs;if(t){let r=t.length,o=0;for(;o<r;){let i=t[o];if(Op(i))break;if(i===0)o=o+2;else if(typeof i=="number")for(o++;o<r&&typeof t[o]=="string";)o++;else{if(i===n)return t[o+1];o=o+2}}}return null}function jp(e,n,t){if(t&8||e!==void 0)return e;qi(n,"NodeInjector")}function Bp(e,n,t,r){if(t&8&&r===void 0&&(r=null),(t&3)===0){let o=e[bt],i=Fe(void 0);try{return o?o.get(n,r,t&8):mc(n,r,t&8)}finally{Fe(i)}}return jp(r,n,t)}function Hp(e,n,t,r=0,o){if(e!==null){if(n[I]&2048&&!(r&2)){let s=gb(e,n,t,r,at);if(s!==at)return s}let i=Up(e,n,t,r,at);if(i!==at)return i}return Bp(n,t,r,o)}function Up(e,n,t,r,o){let i=mb(t);if(typeof i=="function"){if(!Lc(n,e,r))return r&1?jp(o,t,r):Bp(n,t,r,o);try{let s;if(s=i(r),s==null&&!(r&8))qi(t);else return s}finally{Vc()}}else if(typeof i=="number"){let s=null,a=Vp(e,n),c=Mr,l=r&1?n[Ae][we]:null;for((a===-1||r&4)&&(c=a===-1?xl(e,n):n[a+8],c===Mr||!tp(r,!1)?a=-1:(s=n[E],a=Ss(c),n=Is(c,n)));a!==-1;){let d=n[E];if(ep(i,a,d.data)){let u=pb(a,n,t,s,r,l);if(u!==at)return u}c=n[a+8],c!==Mr&&tp(r,n[E].data[a+8]===l)&&ep(i,a,n)?(s=d,a=Ss(c),n=Is(c,n)):a=-1}}return o}function pb(e,n,t,r,o,i){let s=n[E],a=s.data[e+8],c=r==null?wt(a)&&tl:r!=s&&(a.type&3)!==0,l=o&1&&i===a,d=_s(a,s,t,c,l);return d!==null?Ao(n,s,d,a,o):at}function _s(e,n,t,r,o){let i=e.providerIndexes,s=n.data,a=i&1048575,c=e.directiveStart,l=e.directiveEnd,d=i>>20,u=r?a:a+d,m=o?a+d:l;for(let f=u;f<m;f++){let h=s[f];if(f<c&&t===h||f>=c&&h.type===t)return f}if(o){let f=s[c];if(f&&st(f)&&f.type===t)return c}return null}function Ao(e,n,t,r,o){let i=e[t],s=n.data;if(i instanceof Bn){let a=i;if(a.resolving)throw pc("");let c=Jf(a.canSeeViewProviders);a.resolving=!0;let l=s[t].type||s[t],d,u=a.injectImpl?Fe(a.injectImpl):null,m=Lc(e,r,0);try{i=e[t]=a.factory(void 0,o,s,e,r),n.firstCreatePass&&t>=r.directiveStart&&tb(t,s[t],n)}finally{u!==null&&Fe(u),Jf(c),a.resolving=!1,Vc()}}return i}function mb(e){if(typeof e=="string")return e.charCodeAt(0)||0;let n=e.hasOwnProperty(Dn)?e[Dn]:void 0;return typeof n=="number"?n>=0?n&Fp:hb:n}function ep(e,n,t){let r=1<<e;return!!(t[n+(e>>Lp)]&r)}function tp(e,n){return!(e&2)&&!(e&1&&n)}var Yt=class{_tNode;_lView;constructor(n,t){this._tNode=n,this._lView=t}get(n,t,r){return Hp(this._tNode,this._lView,n,_n(r),t)}};function hb(){return new Yt(me(),x())}function Vs(e){return Fo(()=>{let n=e.prototype.constructor,t=n[po]||rl(n),r=Object.prototype,o=Object.getPrototypeOf(e.prototype).constructor;for(;o&&o!==r;){let i=o[po]||rl(o);if(i&&i!==t)return i;o=Object.getPrototypeOf(o)}return i=>new i})}function rl(e){return cc(e)?()=>{let n=rl(he(e));return n&&n()}:En(e)}function gb(e,n,t,r,o){let i=e,s=n;for(;i!==null&&s!==null&&s[I]&2048&&!Ir(s);){let a=Up(i,s,t,r|2,at);if(a!==at)return a;let c=i.parent;if(!c){let l=s[Ec];if(l){let d=l.get(t,at,r&-5);if(d!==at)return d}c=$p(s),s=s[Cn]}i=c}return o}function $p(e){let n=e[E],t=n.type;return t===2?n.declTNode:t===1?e[we]:null}function zp(e){return fb(me(),e)}function Y(e){return{token:e.token,providedIn:e.autoProvided===!1?null:"root",factory:e.factory,value:void 0}}function vb(){return Fr(me(),x())}function Fr(e,n){return new q($e(e,n))}var q=(()=>{class e{nativeElement;constructor(t){this.nativeElement=t}static __NG_ELEMENT_ID__=vb}return e})();function Gp(e){return e instanceof q?e.nativeElement:e}function yb(){return this._results[Symbol.iterator]()}var Cs=class{_emitDistinctChangesOnly;dirty=!0;_onDirty=void 0;_results=[];_changesDetected=!1;_changes=void 0;length=0;first=void 0;last=void 0;get changes(){return this._changes??=new de}constructor(n=!1){this._emitDistinctChangesOnly=n}get(n){return this._results[n]}map(n){return this._results.map(n)}filter(n){return this._results.filter(n)}find(n){return this._results.find(n)}reduce(n,t){return this._results.reduce(n,t)}forEach(n){this._results.forEach(n)}some(n){return this._results.some(n)}toArray(){return this._results.slice()}toString(){return this._results.toString()}reset(n,t){this.dirty=!1;let r=uf(n);(this._changesDetected=!df(this._results,r,t))&&(this._results=r,this.length=r.length,this.last=r[this.length-1],this.first=r[0])}notifyOnChanges(){this._changes!==void 0&&(this._changesDetected||!this._emitDistinctChangesOnly)&&this._changes.next(this)}onDirty(n){this._onDirty=n}setDirty(){this.dirty=!0,this._onDirty?.()}destroy(){this._changes!==void 0&&(this._changes.complete(),this._changes.unsubscribe())}[Symbol.iterator]=yb};function Wp(e){return(e.flags&128)===128}var Al=(function(e){return e[e.OnPush=0]="OnPush",e[e.Eager=1]="Eager",e[e.Default=1]="Default",e})(Al||{}),qp=new Map,bb=0;function _b(){return bb++}function Eb(e){qp.set(e[_t],e)}function ol(e){qp.delete(e[_t])}var np="__ngContext__";function Rr(e,n){Et(n)?(e[np]=n[_t],Eb(n)):e[np]=n}function Zp(e){return Qp(e[Sr])}function Yp(e){return Qp(e[He])}function Qp(e){for(;e!==null&&!Ue(e);)e=e[He];return e}var il;function Rl(e){il=e}function Kp(){if(il!==void 0)return il;if(typeof document<"u")return document;throw new _(210,!1)}var Xp=!1,Jp=new g("",{factory:()=>Xp});var rp=new WeakMap;function wb(e,n){if(e==null||typeof e!="object")return;let t=rp.get(e);t||(t=new WeakSet,rp.set(e,t)),t.add(n)}var Sb=(e,n,t,r)=>{};function Ib(e,n,t,r){Sb(e,n,t,r)}function js(e){return(e.flags&32)===32}var Db=()=>null;function em(e,n,t=!1){return Db(e,n,t)}function tm(e,n){let t=e.contentQueries;if(t!==null){let r=S(null);try{for(let o=0;o<t.length;o+=2){let i=t[o],s=t[o+1];if(s!==-1){let a=e.data[s];Io(i),a.contentQueries(2,n[s],s)}}}finally{S(r)}}}function sl(e,n,t){Io(0);let r=S(null);try{n(e,t)}finally{S(r)}}function nm(e,n,t){if(wc(n)){let r=S(null);try{let o=n.directiveStart,i=n.directiveEnd;for(let s=o;s<i;s++){let a=e.data[s];if(a.contentQueries){let c=t[s];a.contentQueries(1,c,s)}}}finally{S(r)}}}var Je=(function(e){return e[e.Emulated=0]="Emulated",e[e.None=2]="None",e[e.ShadowDom=3]="ShadowDom",e[e.ExperimentalIsolatedShadowDom=4]="ExperimentalIsolatedShadowDom",e})(Je||{});var hs;function Cb(){if(hs===void 0&&(hs=null,hr.trustedTypes))try{hs=hr.trustedTypes.createPolicy("angular",{createHTML:e=>e,createScript:e=>e,createScriptURL:e=>e})}catch{}return hs}function Bs(e){return Cb()?.createHTML(e)||e}var Dt=class{changingThisBreaksApplicationSecurity;constructor(n){this.changingThisBreaksApplicationSecurity=n}toString(){return`SafeValue must use [property]=binding: ${this.changingThisBreaksApplicationSecurity} (see ${Ui})`}},al=class extends Dt{getTypeName(){return"HTML"}},cl=class extends Dt{getTypeName(){return"Style"}},ll=class extends Dt{getTypeName(){return"Script"}},dl=class extends Dt{getTypeName(){return"URL"}},ul=class extends Dt{getTypeName(){return"ResourceURL"}};function ct(e){return e instanceof Dt?e.changingThisBreaksApplicationSecurity:e}function zn(e,n){let t=rm(e);if(t!=null&&t!==n){if(t==="ResourceURL"&&n==="URL")return!0;throw new Error(`Required a safe ${n}, got a ${t} (see ${Ui})`)}return t===n}function rm(e){return e instanceof Dt&&e.getTypeName()||null}function kl(e){return new al(e)}function Ol(e){return new cl(e)}function Pl(e){return new ll(e)}function Fl(e){return new dl(e)}function Ll(e){return new ul(e)}function Nb(e){let n=new pl(e);return Tb()?new fl(n):n}var fl=class{inertDocumentHelper;constructor(n){this.inertDocumentHelper=n}getInertBodyElement(n){n="<body><remove></remove>"+n;try{let t=new window.DOMParser().parseFromString(Bs(n),"text/html").body;return t===null?this.inertDocumentHelper.getInertBodyElement(n):(t.firstChild?.remove(),t)}catch{return null}}},pl=class{defaultDoc;inertDocument;constructor(n){this.defaultDoc=n,this.inertDocument=this.defaultDoc.implementation.createHTMLDocument("sanitization-inert")}getInertBodyElement(n){let t=this.inertDocument.createElement("template");return t.innerHTML=Bs(n),t}};function Tb(){try{return!!new window.DOMParser().parseFromString(Bs(""),"text/html")}catch{return!1}}var Mb=/^(?!javascript:)(?:[a-z0-9+.-]+:|[^&:\/?#]*(?:[\/?#]|$))/i;function Hs(e){return e=String(e),e.match(Mb)?e:"unsafe:"+e}function Nt(e){let n={};for(let t of e.split(","))n[t]=!0;return n}function Lo(...e){let n={};for(let t of e)for(let r in t)t.hasOwnProperty(r)&&(n[r]=!0);return n}var om=Nt("area,br,col,hr,img,wbr"),im=Nt("colgroup,dd,dt,li,p,tbody,td,tfoot,th,thead,tr"),sm=Nt("rp,rt"),xb=Lo(sm,im),Ab=Lo(im,Nt("address,article,aside,blockquote,caption,center,del,details,dialog,dir,div,dl,figure,figcaption,footer,h1,h2,h3,h4,h5,h6,header,hgroup,hr,ins,main,map,menu,nav,ol,pre,section,summary,table,ul")),Rb=Lo(sm,Nt("a,abbr,acronym,audio,b,bdi,bdo,big,br,cite,code,del,dfn,em,font,i,img,ins,kbd,label,map,mark,picture,q,ruby,rp,rt,s,samp,small,source,span,strike,strong,sub,sup,time,track,tt,u,var,video")),op=Lo(om,Ab,Rb,xb),am=Nt("background,cite,href,itemtype,longdesc,poster,src,xlink:href"),kb=Nt("abbr,accesskey,align,alt,autoplay,axis,bgcolor,border,cellpadding,cellspacing,class,clear,color,cols,colspan,compact,controls,coords,datetime,default,dir,download,face,headers,height,hidden,hreflang,hspace,ismap,itemscope,itemprop,kind,label,lang,language,loop,media,muted,nohref,nowrap,open,preload,rel,rev,role,rows,rowspan,rules,scope,scrolling,shape,size,sizes,span,srclang,srcset,start,summary,tabindex,target,title,translate,type,usemap,valign,value,vspace,width"),Ob=Nt("aria-activedescendant,aria-atomic,aria-autocomplete,aria-busy,aria-checked,aria-colcount,aria-colindex,aria-colspan,aria-controls,aria-current,aria-describedby,aria-details,aria-disabled,aria-dropeffect,aria-errormessage,aria-expanded,aria-flowto,aria-grabbed,aria-haspopup,aria-hidden,aria-invalid,aria-keyshortcuts,aria-label,aria-labelledby,aria-level,aria-live,aria-modal,aria-multiline,aria-multiselectable,aria-orientation,aria-owns,aria-placeholder,aria-posinset,aria-pressed,aria-readonly,aria-relevant,aria-required,aria-roledescription,aria-rowcount,aria-rowindex,aria-rowspan,aria-selected,aria-setsize,aria-sort,aria-valuemax,aria-valuemin,aria-valuenow,aria-valuetext"),Pb=Lo(am,kb,Ob),Fb=Nt("script,style,template"),ml=class{sanitizedSomething=!1;buf=[];sanitizeChildren(n){let t=n.firstChild,r=!0,o=[];for(;t;){if(t.nodeType===Node.ELEMENT_NODE?r=this.startElement(t):t.nodeType===Node.TEXT_NODE?this.chars(t.nodeValue):this.sanitizedSomething=!0,r&&t.firstChild){o.push(t),t=jb(t);continue}for(;t;){t.nodeType===Node.ELEMENT_NODE&&this.endElement(t);let i=Vb(t);if(i){t=i;break}t=o.pop()}}return this.buf.join("")}startElement(n){let t=ip(n).toLowerCase();if(!op.hasOwnProperty(t))return this.sanitizedSomething=!0,!Fb.hasOwnProperty(t);this.buf.push("<"),this.buf.push(t);let r=n.attributes;for(let o=0;o<r.length;o++){let i=r.item(o),s=i.name,a=s.toLowerCase();if(!Pb.hasOwnProperty(a)){this.sanitizedSomething=!0;continue}let c=i.value;am[a]&&(c=Hs(c)),this.buf.push(" ",s,'="',sp(c),'"')}return this.buf.push(">"),!0}endElement(n){let t=ip(n).toLowerCase();op.hasOwnProperty(t)&&!om.hasOwnProperty(t)&&(this.buf.push("</"),this.buf.push(t),this.buf.push(">"))}chars(n){this.buf.push(sp(n))}};function Lb(e,n){return(e.compareDocumentPosition(n)&Node.DOCUMENT_POSITION_CONTAINED_BY)!==Node.DOCUMENT_POSITION_CONTAINED_BY}function Vb(e){let n=e.nextSibling;if(n&&e!==n.previousSibling)throw cm(n);return n}function jb(e){let n=e.firstChild;if(n&&Lb(e,n))throw cm(n);return n}function ip(e){let n=e.nodeName;return typeof n=="string"?n:"FORM"}function cm(e){return new Error(`Failed to sanitize html because the element is clobbered: ${e.outerHTML}`)}var Bb=/[\uD800-\uDBFF][\uDC00-\uDFFF]/g,Hb=/([^\#-~ |!])/g;function sp(e){return e.replace(/&/g,"&amp;").replace(Bb,function(n){let t=n.charCodeAt(0),r=n.charCodeAt(1);return"&#"+((t-55296)*1024+(r-56320)+65536)+";"}).replace(Hb,function(n){return"&#"+n.charCodeAt(0)+";"}).replace(/</g,"&lt;").replace(/>/g,"&gt;")}var gs;function Vl(e,n){let t=null;try{gs=gs||Nb(e);let r=n?String(n):"";t=gs.getInertBodyElement(r);let o=5,i=r;do{if(o===0)throw new Error("Failed to sanitize html because the input is unstable");o--,r=i,i=t.innerHTML,t=gs.getInertBodyElement(r)}while(r!==i);let a=new ml().sanitizeChildren(ap(t)||t);return Bs(a)}finally{if(t){let r=ap(t)||t;for(;r.firstChild;)r.firstChild.remove()}}}function ap(e){return"content"in e&&Ub(e)?e.content:null}function Ub(e){return e.nodeType===Node.ELEMENT_NODE&&e.nodeName==="TEMPLATE"}function $b(e,n){return e.createText(n)}function lm(e,n,t){return e.createElement(n,t)}function jn(e,n,t,r,o){e.insertBefore(n,t,r,o)}function dm(e,n,t){e.appendChild(n,t)}function cp(e,n,t,r,o){r!==null?jn(e,n,t,r,o):dm(e,n,t)}function zb(e,n,t,r){e.removeChild(null,n,t,r)}function Gb(e,n,t){e.setAttribute(n,"style",t)}function Wb(e,n,t){t===""?e.removeAttribute(n,"class"):e.setAttribute(n,"class",t)}function um(e,n,t){let{mergedAttrs:r,classes:o,styles:i}=t;r!==null&&sb(e,n,r),o!==null&&Wb(e,n,o),i!==null&&Gb(e,n,i)}function qb(e,n,t){let r=e.length;for(;;){let o=e.indexOf(n,t);if(o===-1)return o;if(o===0||e.charCodeAt(o-1)<=32){let i=n.length;if(o+i===r||e.charCodeAt(o+i)<=32)return o}t=o+1}}var fm="ng-template";function Zb(e,n,t,r){let o=0;if(r){for(;o<n.length&&typeof n[o]=="string";o+=2)if(n[o]==="class"&&qb(n[o+1].toLowerCase(),t,0)!==-1)return!0}else if(jl(e))return!1;if(o=n.indexOf(1,o),o>-1){let i;for(;++o<n.length&&typeof(i=n[o])=="string";)if(i.toLowerCase()===t)return!0}return!1}function jl(e){return e.type===4&&e.value!==fm}function Yb(e,n,t){let r=e.type===4&&!t?fm:e.value;return n===r}function Qb(e,n,t){let r=4,o=e.attrs,i=o!==null?Jb(o):0,s=!1;for(let a=0;a<n.length;a++){let c=n[a];if(typeof c=="number"){if(!s&&!Ke(r)&&!Ke(c))return!1;if(s&&Ke(c))continue;s=!1,r=c|r&1;continue}if(!s)if(r&4){if(r=2|r&1,c!==""&&!Yb(e,c,t)||c===""&&n.length===1){if(Ke(r))return!1;s=!0}}else if(r&8){if(o===null||!Zb(e,o,c,t)){if(Ke(r))return!1;s=!0}}else{let l=n[++a],d=Kb(c,o,jl(e),t);if(d===-1){if(Ke(r))return!1;s=!0;continue}if(l!==""){let u;if(d>i?u="":u=o[d+1].toLowerCase(),r&2&&l!==u){if(Ke(r))return!1;s=!0}}}}return Ke(r)||s}function Ke(e){return(e&1)===0}function Kb(e,n,t,r){if(n===null)return-1;let o=0;if(r||!t){let i=!1;for(;o<n.length;){let s=n[o];if(s===e)return o;if(s===3||s===6)i=!0;else if(s===1||s===2){let a=n[++o];for(;typeof a=="string";)a=n[++o];continue}else{if(s===4)break;if(s===0){o+=4;continue}}o+=i?1:2}return-1}else return e_(n,e)}function pm(e,n,t=!1){for(let r=0;r<n.length;r++)if(Qb(e,n[r],t))return!0;return!1}function Xb(e){let n=e.attrs;if(n!=null){let t=n.indexOf(5);if((t&1)===0)return n[t+1]}return null}function Jb(e){for(let n=0;n<e.length;n++){let t=e[n];if(Op(t))return n}return e.length}function e_(e,n){let t=e.indexOf(4);if(t>-1)for(t++;t<e.length;){let r=e[t];if(typeof r=="number")return-1;if(r===n)return t;t++}return-1}function t_(e,n){e:for(let t=0;t<n.length;t++){let r=n[t];if(e.length===r.length){for(let o=0;o<e.length;o++)if(e[o]!==r[o])continue e;return!0}}return!1}function lp(e,n){return e?":not("+n.trim()+")":n}function n_(e){let n=e[0],t=1,r=2,o="",i=!1;for(;t<e.length;){let s=e[t];if(typeof s=="string")if(r&2){let a=e[++t];o+="["+s+(a.length>0?'="'+a+'"':"")+"]"}else r&8?o+="."+s:r&4&&(o+=" "+s);else o!==""&&!Ke(s)&&(n+=lp(i,o),o=""),r=s,i=i||!Ke(r);t++}return o!==""&&(n+=lp(i,o)),n}function r_(e){return e.map(n_).join(",")}function o_(e){let n=[],t=[],r=1,o=2;for(;r<e.length;){let i=e[r];if(typeof i=="string")o===2?i!==""&&n.push(i,e[++r]):o===8&&t.push(i);else{if(!Ke(o))break;o=i}r++}return t.length&&n.push(1,...t),n}var Tt={},Ct=(function(e){return e[e.Important=1]="Important",e[e.DashCase=2]="DashCase",e})(Ct||{}),i_;function Bl(e,n){return i_(e,n)}var fA=typeof document<"u"&&typeof document?.documentElement?.getAnimations=="function";var hl=new WeakMap;function mm(e){return e?e[Cn]??e:null}var To=new WeakSet;function s_(e,n,t){let r=hl.get(e);if(!r||r.length===0)return;let o=n.parentNode,i=n.previousSibling,s=mm(t);for(let a=r.length-1;a>=0;a--){let{el:c,declarationView:l}=r[a],d=c.parentNode;c===n?(r.splice(a,1),To.add(c),c.dispatchEvent(new CustomEvent("animationend",{detail:{cancel:!0}}))):i&&c===i?(r.splice(a,1),c.dispatchEvent(new CustomEvent("animationend",{detail:{cancel:!0}})),c.parentNode?.removeChild(c)):d&&o&&d!==o&&(s===null||l===null||s===l)&&(r.splice(a,1),c.dispatchEvent(new CustomEvent("animationend",{detail:{cancel:!0}})),c.parentNode?.removeChild(c))}}function a_(e,n,t){let r=mm(t),o=hl.get(e);o?o.some(i=>i.el===n)||o.push({el:n,declarationView:r}):hl.set(e,[{el:n,declarationView:r}])}var Hn=new Set,Us=(function(e){return e[e.CHANGE_DETECTION=0]="CHANGE_DETECTION",e[e.AFTER_NEXT_RENDER=1]="AFTER_NEXT_RENDER",e})(Us||{}),Mt=new g(""),dp=new Set;function Kt(e){dp.has(e)||(dp.add(e),performance?.mark?.("mark_feature_usage",{detail:{feature:e}}))}var Hl=(()=>{class e{impl=null;execute(){this.impl?.execute()}static \u0275prov=F({token:e,providedIn:"root",factory:()=>new e})}return e})(),hm=[0,1,2,3],gm=(()=>{class e{ngZone=p(z);scheduler=p(yt);errorHandler=p(Ee,{optional:!0});sequences=new Set;deferredRegistrations=new Set;executing=!1;constructor(){p(Mt,{optional:!0})}execute(){let t=this.sequences.size>0;t&&V(P.AfterRenderHooksStart),this.executing=!0;for(let r of hm)for(let o of this.sequences)if(!(o.erroredOrDestroyed||!o.hooks[r]))try{o.pipelinedValue=this.ngZone.runOutsideAngular(()=>this.maybeTrace(()=>{let i=o.hooks[r];return i(o.pipelinedValue)},o.snapshot))}catch(i){o.erroredOrDestroyed=!0,this.errorHandler?.handleError(i)}this.executing=!1;for(let r of this.sequences)r.afterRun(),r.once&&(this.sequences.delete(r),r.destroy());for(let r of this.deferredRegistrations)this.sequences.add(r);this.deferredRegistrations.size>0&&this.scheduler.notify(7),this.deferredRegistrations.clear(),t&&V(P.AfterRenderHooksEnd)}register(t){let{view:r}=t;r!==void 0?((r[Tn]??=[]).push(t),Rn(r),r[I]|=8192):this.executing?this.deferredRegistrations.add(t):this.addSequence(t)}addSequence(t){this.sequences.add(t),this.scheduler.notify(7)}unregister(t){this.executing&&this.sequences.has(t)?(t.erroredOrDestroyed=!0,t.pipelinedValue=void 0,t.once=!0):(this.sequences.delete(t),this.deferredRegistrations.delete(t))}maybeTrace(t,r){return r?r.run(Us.AFTER_NEXT_RENDER,t):t()}static \u0275prov=F({token:e,providedIn:"root",factory:()=>new e})}return e})(),Ns=class{impl;hooks;view;once;snapshot;erroredOrDestroyed=!1;pipelinedValue=void 0;unregisterOnDestroy;constructor(n,t,r,o,i,s=null){this.impl=n,this.hooks=t,this.view=r,this.once=o,this.snapshot=s,this.unregisterOnDestroy=i?.onDestroy(()=>this.destroy())}afterRun(){this.erroredOrDestroyed=!1,this.pipelinedValue=void 0,this.snapshot?.dispose(),this.snapshot=null}destroy(){this.impl.unregister(this),this.unregisterOnDestroy?.();let n=this.view?.[Tn];n&&(this.view[Tn]=n.filter(t=>t!==this))}};function $s(e,n){let t=n?.injector??p(ae);return Kt("NgAfterNextRender"),l_(e,t,n,!0)}function c_(e){return e instanceof Function?[void 0,void 0,e,void 0]:[e.earlyRead,e.write,e.mixedReadWrite,e.read]}function l_(e,n,t,r){let o=n.get(Hl);o.impl??=n.get(gm);let i=n.get(Mt,null,{optional:!0}),s=t?.manualCleanup!==!0?n.get(xe):null,a=n.get(Do,null,{optional:!0}),c=new Ns(o.impl,c_(e),a?.view,r,s,i?.snapshot(null));return o.impl.register(c),c}var vm=new g("",{factory:()=>{let e=p(ge),n=new Set;return e.onDestroy(()=>n.clear()),{queue:n,isScheduled:!1,scheduler:null,injector:e}}});function ym(e,n,t){let r=e.get(vm);if(Array.isArray(n))for(let o of n)r.queue.add(o),t?.detachedLeaveAnimationFns?.push(o);else r.queue.add(n),t?.detachedLeaveAnimationFns?.push(n);r.scheduler&&r.scheduler(e)}function d_(e,n){let t=e.get(vm);if(Array.isArray(n))for(let r of n)t.queue.delete(r);else t.queue.delete(n)}function u_(e,n){for(let[t,r]of n)ym(e,r.animateFns)}function up(e,n,t,r){let o=e?.[Gt]?.enter;n!==null&&o&&o.has(t.index)&&u_(r,o)}function fp(e,n,t,r){try{t.get(_o)}catch{return r(!1)}let o=e?.[Gt];o?.enter?.has(n.index)&&d_(t,o.enter.get(n.index).animateFns);let i=f_(e,n,o);if(i.size===0){let s=!1;if(e){let a=[];zs(e,n,a),s=a.length>0}if(!s)return r(!1)}e&&Hn.add(e[_t]),ym(t,()=>p_(e,n,o||void 0,i,r),o||void 0)}function f_(e,n,t){let r=new Map,o=t?.leave;if(o&&o.has(n.index)&&r.set(n.index,o.get(n.index)),e&&o)for(let[i,s]of o){if(r.has(i))continue;let c=e[E].data[i].parent;for(;c;){if(c===n){r.set(i,s);break}c=c.parent}}return r}function p_(e,n,t,r,o){let i=[];if(t&&t.leave)for(let[s]of r){if(!t.leave.has(s))continue;let a=t.leave.get(s);for(let c of a.animateFns){let{promise:l}=c();i.push(l)}t.detachedLeaveAnimationFns=void 0}if(e&&zs(e,n,i),i.length>0){let s=t||e?.[Gt];if(s){let a=s.running;a&&i.push(a),s.running=Promise.allSettled(i),h_(e,s.running,o)}else Promise.allSettled(i).then(()=>{e&&Hn.delete(e[_t]),o(!0)})}else e&&Hn.delete(e[_t]),o(!1)}function zs(e,n,t){if(n.type&12){let o=e[n.index];if(Ue(o))for(let i=ve;i<o.length;i++){let s=o[i];s[E].type===2&&m_(s,t)}}let r=n.child;for(;r;)zs(e,r,t),r=r.next}function m_(e,n){let t=e[Gt];if(t&&t.leave)for(let o of t.leave.values())for(let i of o.animateFns){let{promise:s}=i();n.push(s)}let r=e[E].firstChild;for(;r;)zs(e,r,n),r=r.next}function h_(e,n,t){n.then(()=>{e[Gt]?.running===n&&(e[Gt].running=void 0,Hn.delete(e[_t])),t(!0)})}function Tr(e,n,t,r,o,i,s,a){if(o!=null){let c,l=!1;Ue(o)?c=o:Et(o)&&(l=!0,o=o[Qe]);let d=ye(o);e===0&&r!==null?(up(a,r,i,t),s==null?dm(n,r,d):jn(n,r,d,s||null,!0)):e===1&&r!==null?(up(a,r,i,t),jn(n,r,d,s||null,!0),s_(i,d,a)):e===2?(a?.[Gt]?.leave?.has(i.index)&&a_(i,d,a),To.delete(d),fp(a,i,t,u=>{if(To.has(d)){To.delete(d);return}zb(n,d,l,u)})):e===3&&(To.delete(d),fp(a,i,t,()=>{n.destroyNode(d)})),c!=null&&C_(n,e,t,c,i,r,s)}}function g_(e,n){bm(e,n),n[Qe]=null,n[we]=null}function v_(e,n,t,r,o,i){r[Qe]=o,r[we]=n,Gs(e,r,t,1,o,i)}function bm(e,n){n[ot].changeDetectionScheduler?.notify(9),Gs(e,n,n[Z],2,null,null)}function y_(e){let n=e[Sr];if(!n)return qc(e[E],e);for(;n;){let t=null;if(Et(n))t=n[Sr];else{let r=n[ve];r&&(t=r)}if(!t){for(;n&&!n[He]&&n!==e;)Et(n)&&qc(n[E],n),n=n[pe];n===null&&(n=e),Et(n)&&qc(n[E],n),t=n&&n[He]}n=t}}function Ul(e,n){let t=e[xn],r=t.indexOf(n);t.splice(r,1)}function $l(e,n){if(An(n))return;let t=n[Z];t.destroyNode&&Gs(e,n,t,3,null,null),y_(n)}function qc(e,n){if(An(n))return;let t=S(null);try{n[I]&=-129,n[I]|=256,n[Le]&&fn(n[Le]),__(e,n),b_(e,n),n[E].type===1&&n[Z].destroy();let r=n[zt];if(r!==null&&Ue(n[pe])){r!==n[pe]&&Ul(r,n);let o=n[it];o!==null&&o.detachView(e)}ol(n)}finally{S(t)}}function b_(e,n){let t=e.cleanup,r=n[wr];if(t!==null)for(let s=0;s<t.length-1;s+=2)if(typeof t[s]=="string"){let a=t[s+3];a>=0?r[a]():r[-a].unsubscribe(),s+=2}else{let a=r[t[s+1]];t[s].call(a)}r!==null&&(n[wr]=null);let o=n[gt];if(o!==null){n[gt]=null;for(let s=0;s<o.length;s++){let a=o[s];a()}}let i=n[Ht];if(i!==null){n[Ht]=null;for(let s of i)s.destroy()}}function __(e,n){let t;if(e!=null&&(t=e.destroyHooks)!=null)for(let r=0;r<t.length;r+=2){let o=n[t[r]];if(!(o instanceof Bn)){let i=t[r+1];if(Array.isArray(i))for(let s=0;s<i.length;s+=2){let a=o[i[s]],c=i[s+1];V(P.LifecycleHookStart,a,c);try{c.call(a)}finally{V(P.LifecycleHookEnd,a,c)}}else{V(P.LifecycleHookStart,o,i);try{i.call(o)}finally{V(P.LifecycleHookEnd,o,i)}}}}}function _m(e,n,t){return E_(e,n.parent,t)}function E_(e,n,t){let r=n;for(;r!==null&&r.type&168;)n=r,r=n.parent;if(r===null)return t[Qe];if(wt(r)){let{encapsulation:o}=e.data[r.directiveStart+r.componentOffset];if(o===Je.None||o===Je.Emulated)return null}return $e(r,t)}function Em(e,n,t){return S_(e,n,t)}function w_(e,n,t){return e.type&40?$e(e,t):null}var S_=w_,pp;function zl(e,n,t,r){let o=_m(e,r,n),i=n[Z],s=r.parent||n[we],a=Em(s,r,n);if(o!=null)if(Array.isArray(t))for(let c=0;c<t.length;c++)cp(i,o,t[c],a,!1);else cp(i,o,t,a,!1);pp!==void 0&&pp(i,r,n,t,o)}function Mo(e,n){if(n!==null){let t=n.type;if(t&3)return $e(n,e);if(t&4)return gl(-1,e[n.index]);if(t&8){let r=n.child;if(r!==null)return Mo(e,r);{let o=e[n.index];return Ue(o)?gl(-1,o):ye(o)}}else{if(t&128)return Mo(e,n.next);if(t&32)return Bl(n,e)()||ye(e[n.index]);{let r=wm(e,n);if(r!==null){if(Array.isArray(r))return r[0];let o=vt(e[Ae]);return Mo(o,r)}else return Mo(e,n.next)}}}return null}function wm(e,n){if(n!==null){let r=e[Ae][we],o=n.projection;return r.projection[o]}return null}function gl(e,n){let t=ve+e+1;if(t<n.length){let r=n[t],o=r[E].firstChild;if(o!==null)return Mo(r,o)}return n[Mn]}function Gl(e,n,t,r,o,i,s){for(;t!=null;){let a=r[bt];if(t.type===128){t=t.next;continue}let c=r[t.index],l=t.type;if(s&&n===0&&(c&&Rr(ye(c),r),t.flags|=2),!js(t))if(l&8)Gl(e,n,t.child,r,o,i,!1),Tr(n,e,a,o,c,t,i,r);else if(l&32){let d=Bl(t,r),u;for(;u=d();)Tr(n,e,a,o,u,t,i,r);Tr(n,e,a,o,c,t,i,r)}else l&16?Sm(e,n,r,t,o,i):Tr(n,e,a,o,c,t,i,r);t=s?t.projectionNext:t.next}}function Gs(e,n,t,r,o,i){e.type===3?I_(t,r,n,o,i):Gl(t,r,e.firstChild,n,o,i,!1)}function I_(e,n,t,r,o){let s=t[E].firstChild,a=s.next,c=ye(t[s.index]),l=ye(t[a.index]),d=a.index+1,u=t[d];if(n===1||n===0)r!==null&&(u&&u.hasChildNodes()?jn(e,r,u,o,!0):(jn(e,r,c,o,!0),jn(e,r,l,o,!0)));else if(n===2){if(u||(u=document.createDocumentFragment(),t[d]=u),c&&c.parentNode===u)return;let m=c;for(;m!==null;){let f=m.nextSibling;if(u.appendChild(m),m===l)break;m=f}}}function D_(e,n,t){let r=n[Z],o=_m(e,t,n),i=t.parent||n[we],s=Em(i,t,n);Sm(r,0,n,t,o,s)}function Sm(e,n,t,r,o,i){let s=t[Ae],c=s[we].projection[r.projection];if(Array.isArray(c))for(let l=0;l<c.length;l++){let d=c[l];Tr(n,e,t[bt],o,d,r,i,t)}else{let l=c,d=s[pe];Wp(r)&&(l.flags|=128),Gl(e,n,l,d,o,i,!0)}}function C_(e,n,t,r,o,i,s){let a=r[Mn],c=ye(r);if(a!==c&&Tr(n,e,t,i,a,o,s),(r[I]&4)===0)for(let l=ve;l<r.length;l++){let d=r[l];Gs(d[E],d,e,n,i,a)}}function N_(e,n,t,r,o){if(n)o?e.addClass(t,r):e.removeClass(t,r);else{let i=r.indexOf("-")===-1?void 0:Ct.DashCase;o==null?e.removeStyle(t,r,i):(typeof o=="string"&&o.endsWith("!important")&&(o=o.slice(0,-10),i|=Ct.Important),e.setStyle(t,r,o,i))}}function Wl(e,n,t,r,o,i,s,a,c,l,d){let u=ue+r,m=u+o,f=T_(u,m),h=typeof l=="function"?l():l;return f[E]={type:e,blueprint:f,template:t,queries:null,viewQuery:a,declTNode:n,data:f.slice().fill(null,u),bindingStartIndex:u,expandoStartIndex:m,hostBindingOpCodes:null,firstCreatePass:!0,firstUpdatePass:!0,staticViewQueries:!1,staticContentQueries:!1,preOrderHooks:null,preOrderCheckHooks:null,contentHooks:null,contentCheckHooks:null,viewHooks:null,viewCheckHooks:null,destroyHooks:null,cleanup:null,contentQueries:null,components:null,directiveRegistry:typeof i=="function"?i():i,pipeRegistry:typeof s=="function"?s():s,firstChild:null,schemas:c,consts:h,incompleteFirstPass:!1,ssrId:d}}function T_(e,n){let t=[];for(let r=0;r<n;r++)t.push(r<e?null:Tt);return t}function M_(e){let n=e.tView;return n===null||n.incompleteFirstPass?e.tView=Wl(1,null,e.template,e.decls,e.vars,e.directiveDefs,e.pipeDefs,e.viewQuery,e.schemas,e.consts,e.id):n}function ql(e,n,t,r,o,i,s,a,c,l,d){let u=n.blueprint.slice();return u[Qe]=o,u[I]=r|4|128|8|64|1024,(l!==null||e&&e[I]&2048)&&(u[I]|=2048),Ic(u),u[pe]=u[Cn]=e,u[Se]=t,u[ot]=s||e&&e[ot],u[Z]=a||e&&e[Z],u[bt]=c||e&&e[bt]||null,u[we]=i,u[_t]=_b(),u[Er]=d,u[Ec]=l,u[Ae]=n.type==2?e[Ae]:u,u}function x_(e,n,t){let r=$e(n,e),o=M_(t),i=e[ot].rendererFactory,s=Zl(e,ql(e,o,null,Im(t),r,n,null,i.createRenderer(r,t),null,null,null));return e[n.index]=s}function Im(e){let n=16;return e.signals?n=4096:e.onPush&&(n=64),n}function Dm(e,n,t,r){if(t===0)return-1;let o=n.length;for(let i=0;i<t;i++)n.push(r),e.blueprint.push(r),e.data.push(null);return o}function Zl(e,n){return e[Sr]?e[_c][He]=n:e[Sr]=n,e[_c]=n,n}function W(e=1){Cm(J(),x(),kn()+e,!1)}function Cm(e,n,t,r){if(!r)if((n[I]&3)===3){let i=e.preOrderCheckHooks;i!==null&&ys(n,i,t)}else{let i=e.preOrderHooks;i!==null&&bs(n,i,0,t)}qt(t)}var Ws=(function(e){return e[e.None=0]="None",e[e.SignalBased=1]="SignalBased",e[e.HasDecoratorInputTransform=2]="HasDecoratorInputTransform",e})(Ws||{});function Un(e,n,t,r){let o=S(null);try{let[i,s,a]=e.inputs[t],c=null;(s&Ws.SignalBased)!==0&&(c=n[i][oe]),c!==null&&c.transformFn!==void 0?r=c.transformFn(r):a!==null&&(r=a.call(n,r)),e.setInput!==null?e.setInput(n,c,r,t,i):xp(n,c,i,r)}finally{S(o)}}function Nm(e,n,t,r,o){let i=kn(),s=r&2;try{qt(-1),s&&n.length>ue&&Cm(e,n,ue,!1);let a=s?P.TemplateUpdateStart:P.TemplateCreateStart;V(a,o,t),t(r,o)}finally{qt(i);let a=s?P.TemplateUpdateEnd:P.TemplateCreateEnd;V(a,o,t)}}function Tm(e,n,t){F_(e,n,t),(t.flags&64)===64&&L_(e,n,t)}function Yl(e,n,t=$e){let r=n.localNames;if(r!==null){let o=n.index+1;for(let i=0;i<r.length;i+=2){let s=r[i+1],a=s===-1?t(n,e):e[s];e[o++]=a}}}function A_(e,n,t,r){let i=r.get(Jp,Xp)||t===Je.ShadowDom||t===Je.ExperimentalIsolatedShadowDom,s=e.selectRootElement(n,i);return R_(s),s}function R_(e){k_(e)}var k_=()=>null;function O_(e){return e==="class"?"className":e==="for"?"htmlFor":e==="formaction"?"formAction":e==="innerHtml"?"innerHTML":e==="readonly"?"readOnly":e==="tabindex"?"tabIndex":e}function Mm(e,n,t,r,o,i){let s=n[E];if(Ql(e,s,n,t,r)){wt(e)&&P_(n,e.index);return}e.type&3&&(t=O_(t)),xm(e,n,t,r,o,i)}function xm(e,n,t,r,o,i){if(e.type&3){let s=$e(e,n);r=i!=null?i(r,e.value||"",t):r,o.setProperty(s,t,r)}else e.type&12}function P_(e,n){let t=ze(n,e);t[I]&16||(t[I]|=64)}function F_(e,n,t){let r=t.directiveStart,o=t.directiveEnd;wt(t)&&x_(n,t,e.data[r+t.componentOffset]),e.firstCreatePass||Ds(t,n);let i=t.initialInputs;for(let s=r;s<o;s++){let a=e.data[s],c=Ao(n,e,s,t);if(Rr(c,n),i!==null&&U_(n,s-r,c,a,t,i),st(a)){let l=ze(t.index,n);l[Se]=Ao(n,e,s,t)}}}function L_(e,n,t){let r=t.directiveStart,o=t.directiveEnd,i=t.index,s=Pf();try{qt(i);for(let a=r;a<o;a++){let c=e.data[a],l=n[a];rs(a),(c.hostBindings!==null||c.hostVars!==0||c.hostAttrs!==null)&&V_(c,l)}}finally{qt(-1),rs(s)}}function V_(e,n){e.hostBindings!==null&&e.hostBindings(1,n)}function j_(e,n){let t=e.directiveRegistry,r=null;if(t)for(let o=0;o<t.length;o++){let i=t[o];pm(n,i.selectors,!1)&&(r??=[],st(i)?r.unshift(i):r.push(i))}return r}function B_(e,n,t,r,o,i){let s=$e(e,n);H_(n[Z],s,i,e.value,t,r,o)}function H_(e,n,t,r,o,i,s){if(i==null)s?.(i,r||"",o),e.removeAttribute(n,o,t);else{let a=s==null?sf(i):s(i,r||"",o);e.setAttribute(n,o,a,t)}}function U_(e,n,t,r,o,i){let s=i[n];if(s!==null)for(let a=0;a<s.length;a+=2){let c=s[a],l=s[a+1];Un(r,t,c,l)}}function Am(e,n,t,r,o){let i=ue+t,s=n[E],a=o(s,n,e,r,t);n[i]=a,Dr(e,!0);let c=e.type===2;return c?(um(n[Z],a,e),(Nf()===0||Xi(e))&&Rr(a,n),Tf()):Rr(a,n),cs()&&(!c||!js(e))&&zl(s,n,a,e),e}function Rm(e){let n=e;return kc()?Oc():(n=n.parent,Dr(n,!1)),n}function $_(e,n){let t=e[bt];if(!t)return;let r;try{r=t.get(Pn,null)}catch{r=null}r?.(n)}function Ql(e,n,t,r,o){let i=e.inputs?.[r],s=e.hostDirectiveInputs?.[r],a=!1;if(s)for(let c=0;c<s.length;c+=2){let l=s[c],d=s[c+1],u=n.data[l];Un(u,t[l],d,o),a=!0}if(i)for(let c of i){let l=t[c],d=n.data[c];Un(d,l,r,o),a=!0}return a}function z_(e,n,t,r,o,i){let s=null,a=null,c=null,l=!1,d=e.directiveToIndex.get(r.type);if(typeof d=="number"?s=d:[s,a,c]=d,a!==null&&c!==null&&e.hostDirectiveInputs?.hasOwnProperty(o)){let u=e.hostDirectiveInputs[o];for(let m=0;m<u.length;m+=2){let f=u[m];if(f>=a&&f<=c){let h=n.data[f],b=u[m+1];Un(h,t[f],b,i),l=!0}else if(f>c)break}}return s!==null&&r.inputs.hasOwnProperty(o)&&(Un(r,t[s],o,i),l=!0),l}function G_(e,n){let t=ze(n,e),r=t[E];W_(r,t);let o=t[Qe];o!==null&&t[Er]===null&&(t[Er]=em(o,t[bt])),V(P.ComponentStart);try{Kl(r,t,t[Se])}finally{V(P.ComponentEnd,t[Se])}}function W_(e,n){for(let t=n.length;t<e.blueprint.length;t++)n.push(e.blueprint[t])}function Kl(e,n,t){is(n);try{let r=e.viewQuery;r!==null&&sl(1,r,t);let o=e.template;o!==null&&Nm(e,n,o,1,t),e.firstCreatePass&&(e.firstCreatePass=!1),n[it]?.finishViewCreation(e),e.staticContentQueries&&tm(e,n),e.staticViewQueries&&sl(2,e.viewQuery,t);let i=e.components;i!==null&&q_(n,i)}catch(r){throw e.firstCreatePass&&(e.incompleteFirstPass=!0,e.firstCreatePass=!1),r}finally{n[I]&=-5,ss()}}function q_(e,n){for(let t=0;t<n.length;t++)G_(e,n[t])}function Xl(e,n,t,r){let o=S(null);try{let i=n.tView,a=e[I]&4096?4096:16,c=ql(e,i,t,a,null,n,null,null,r?.injector??null,r?.embeddedViewInjector??null,r?.dehydratedView??null),l=e[n.index];c[zt]=l;let d=e[it];return d!==null&&(c[it]=d.createEmbeddedView(i)),Kl(i,c,t),c}finally{S(o)}}function Ts(e,n){return!n||n.firstChild===null||Wp(e)}function Ro(e,n,t,r,o=!1){if(e.type===3){let i=e.firstChild,s=i.next,a=ye(n[i.index]),c=ye(n[s.index]),l=a;for(;l!==null&&(r.push(l),l!==c);)l=l.nextSibling;return r}for(;t!==null;){if(t.type===128){t=o?t.projectionNext:t.next;continue}let i=n[t.index];if(i!==null)if(Ue(i)){let a=i[Mn];a!==i[Qe]&&r.push(ye(i)),i[I]&4||km(i,r),r.push(a)}else r.push(ye(i));let s=t.type;if(s&8)Ro(e,n,t.child,r);else if(s&32){let a=Bl(t,n),c;for(;c=a();)r.push(c)}else if(s&16){let a=wm(n,t);if(Array.isArray(a))r.push(...a);else{let c=vt(n[Ae]);Ro(c[E],c,a,r,!0)}}t=o?t.projectionNext:t.next}return r}function km(e,n){for(let t=ve;t<e.length;t++){let r=e[t],o=r[E].firstChild;o!==null&&Ro(r[E],r,o,n)}}function Om(e){if(e[Tn]!==null){for(let n of e[Tn])n.impl.addSequence(n);e[Tn].length=0}}var Pm=[];function Z_(e){return e[Le]??Y_(e)}function Y_(e){let n=Pm.pop()??Object.create(K_);return n.lView=e,n}function Q_(e){e.lView[Le]!==e&&(e.lView=null,Pm.push(e))}var K_=U(w({},jt),{consumerIsAlwaysLive:!0,kind:"template",consumerMarkedDirty:e=>{Rn(e.lView)},consumerOnSignalRead(){this.lView[Le]=this}});function X_(e){let n=e[Le]??Object.create(J_);return n.lView=e,n}var J_=U(w({},jt),{consumerIsAlwaysLive:!0,kind:"template",consumerMarkedDirty:e=>{let n=vt(e.lView);for(;n&&!Fm(n[E]);)n=vt(n);n&&Dc(n)},consumerOnSignalRead(){this.lView[Le]=this}});function Fm(e){return e.type!==2}function Lm(e){if(e[Ht]===null)return;let n=!0;for(;n;){let t=!1;for(let r of e[Ht])r.dirty&&(t=!0,r.zone===null||Zone.current===r.zone?r.run():r.zone.run(()=>r.run()));n=t&&!!(e[I]&8192)}}var eE=100;function Vm(e,n=0){let r=e[ot].rendererFactory,o=!1;o||r.begin?.();try{tE(e,n)}finally{o||r.end?.()}}function tE(e,n){let t=Pc();try{mo(!0),vl(e,n);let r=0;for(;So(e);){if(r===eE)throw new _(103,!1);r++,vl(e,1)}}finally{mo(t)}}function nE(e,n,t,r){if(An(n))return;let o=n[I],i=!1,s=!1;is(n);let a=!0,c=null,l=null;i||(Fm(e)?(l=Z_(n),c=Bt(l)):pi()===null?(a=!1,l=X_(n),c=Bt(l)):n[Le]&&(fn(n[Le]),n[Le]=null));try{Ic(n),Rf(e.bindingStartIndex),t!==null&&Nm(e,n,t,2,r);let d=(o&3)===3;if(!i)if(d){let f=e.preOrderCheckHooks;f!==null&&ys(n,f,null)}else{let f=e.preOrderHooks;f!==null&&bs(n,f,0,null),Gc(n,0)}if(s||rE(n),Lm(n),jm(n,0),e.contentQueries!==null&&tm(e,n),!i)if(d){let f=e.contentCheckHooks;f!==null&&ys(n,f)}else{let f=e.contentHooks;f!==null&&bs(n,f,1),Gc(n,1)}iE(e,n);let u=e.components;u!==null&&Hm(n,u,0);let m=e.viewQuery;if(m!==null&&sl(2,m,r),!i)if(d){let f=e.viewCheckHooks;f!==null&&ys(n,f)}else{let f=e.viewHooks;f!==null&&bs(n,f,2),Gc(n,2)}if(e.firstUpdatePass===!0&&(e.firstUpdatePass=!1),n[Ki]){for(let f of n[Ki])f();n[Ki]=null}i||(Om(n),n[I]&=-73)}catch(d){throw i||Rn(n),d}finally{l!==null&&(un(l,c),a&&Q_(l)),ss()}}function jm(e,n){for(let t=Zp(e);t!==null;t=Yp(t))for(let r=ve;r<t.length;r++){let o=t[r];Bm(o,n)}}function rE(e){for(let n=Zp(e);n!==null;n=Yp(n)){if(!(n[I]&2))continue;let t=n[xn];for(let r=0;r<t.length;r++){let o=t[r];Dc(o)}}}function oE(e,n,t){V(P.ComponentStart);let r=ze(n,e);try{Bm(r,t)}finally{V(P.ComponentEnd,r[Se])}}function Bm(e,n){es(e)&&vl(e,n)}function vl(e,n){let r=e[E],o=e[I],i=e[Le],s=!!(n===0&&o&16);if(s||=!!(o&64&&n===0),s||=!!(o&1024),s||=!!(i?.dirty&&Jr(i)),s||=!1,i&&(i.dirty=!1),e[I]&=-9217,s)nE(r,e,r.template,e[Se]);else if(o&8192){let a=S(null);try{Lm(e),jm(e,1);let c=r.components;c!==null&&Hm(e,c,1),Om(e)}finally{S(a)}}}function Hm(e,n,t){for(let r=0;r<n.length;r++)oE(e,n[r],t)}function iE(e,n){let t=e.hostBindingOpCodes;if(t!==null)try{for(let r=0;r<t.length;r++){let o=t[r];if(o<0)qt(~o);else{let i=o,s=t[++r],a=t[++r];Of(s,i);let c=n[i];V(P.HostBindingsUpdateStart,c);try{a(2,c)}finally{V(P.HostBindingsUpdateEnd,c)}}}}finally{qt(-1)}}function Jl(e,n){let t=Pc()?64:1088;for(e[ot].changeDetectionScheduler?.notify(n);e;){e[I]|=t;let r=vt(e);if(Ir(e)&&!r)return e;e=r}return null}function Um(e,n,t,r){return[e,!0,0,n,null,r,null,t,null,null]}function sE(e,n){let t=ve+n;if(t<e.length)return e[t]}function ed(e,n,t,r=!0){let o=n[E];if(cE(o,n,e,t),r){let s=gl(t,e),a=n[Z],c=a.parentNode(e[Mn]);c!==null&&v_(o,e[we],a,n,c,s)}let i=n[Er];i!==null&&i.firstChild!==null&&(i.firstChild=null)}function aE(e,n){let t=Ms(e,n);return t!==void 0&&$l(t[E],t),t}function Ms(e,n){if(e.length<=ve)return;let t=ve+n,r=e[t];if(r){let o=r[zt];o!==null&&o!==e&&Ul(o,r),n>0&&(e[t-1][He]=r[He]);let i=bo(e,ve+n);g_(r[E],r);let s=i[it];s!==null&&s.detachView(i[E]),r[pe]=null,r[He]=null,r[I]&=-129}return r}function cE(e,n,t,r){let o=ve+r,i=t.length;r>0&&(t[o-1][He]=n),r<i-ve?(n[He]=t[o],hc(t,ve+r,n)):(t.push(n),n[He]=null),n[pe]=t;let s=n[zt];s!==null&&t!==s&&$m(s,n);let a=n[it];a!==null&&a.insertView(e),ts(n),n[I]|=128}function $m(e,n){let t=e[xn],r=n[pe];if(Et(r))e[I]|=2;else{let o=r[pe][Ae];n[Ae]!==o&&(e[I]|=2)}t===null?e[xn]=[n]:t.push(n)}var Qt=class{_lView;_cdRefInjectingView;_appRef=null;_attachedToViewContainer=!1;exhaustive;get rootNodes(){let n=this._lView,t=n[E];return Ro(t,n,t.firstChild,[])}constructor(n,t){this._lView=n,this._cdRefInjectingView=t}get context(){return this._lView[Se]}set context(n){this._lView[Se]=n}get destroyed(){return An(this._lView)}destroy(){if(this._appRef)this._appRef.detachView(this);else if(this._attachedToViewContainer){let n=this._lView[pe];if(Ue(n)){let t=n[wo],r=t?t.indexOf(this):-1;r>-1&&(Ms(n,r),bo(t,r))}this._attachedToViewContainer=!1}$l(this._lView[E],this._lView)}onDestroy(n){ns(this._lView,n)}markForCheck(){Jl(this._cdRefInjectingView||this._lView,4)}detach(){this._lView[I]&=-129}reattach(){ts(this._lView),this._lView[I]|=128}detectChanges(){this._lView[I]|=1024,Vm(this._lView)}checkNoChanges(){}attachToViewContainerRef(){if(this._appRef)throw new _(902,!1);this._attachedToViewContainer=!0}detachFromAppRef(){this._appRef=null;let n=Ir(this._lView),t=this._lView[zt];t!==null&&!n&&Ul(t,this._lView),bm(this._lView[E],this._lView)}attachToAppRef(n){if(this._attachedToViewContainer)throw new _(902,!1);this._appRef=n;let t=Ir(this._lView),r=this._lView[zt];r!==null&&!t&&$m(r,this._lView),ts(this._lView)}};var ko=(()=>{class e{_declarationLView;_declarationTContainer;elementRef;static __NG_ELEMENT_ID__=lE;constructor(t,r,o){this._declarationLView=t,this._declarationTContainer=r,this.elementRef=o}get ssrId(){return this._declarationTContainer.tView?.ssrId||null}createEmbeddedView(t,r){return this.createEmbeddedViewImpl(t,r)}createEmbeddedViewImpl(t,r,o){let i=Xl(this._declarationLView,this._declarationTContainer,t,{embeddedViewInjector:r,dehydratedView:o});return new Qt(i)}}return e})();function lE(){return td(me(),x())}function td(e,n){return e.type&4?new ko(n,e,Fr(e,n)):null}function Vo(e,n,t,r,o){let i=e.data[n];if(i===null)i=dE(e,n,t,r,o),kf()&&(i.flags|=32);else if(i.type&64){i.type=t,i.value=r,i.attrs=o;let s=xf();i.injectorIndex=s===null?-1:s.injectorIndex}return Dr(i,!0),i}function dE(e,n,t,r,o){let i=Rc(),s=kc(),a=s?i:i&&i.parent,c=e.data[n]=fE(e,a,t,n,r,o);return uE(e,c,i,s),c}function uE(e,n,t,r){e.firstChild===null&&(e.firstChild=n),t!==null&&(r?t.child==null&&n.parent!==null&&(t.child=n):t.next===null&&(t.next=n,n.prev=t))}function fE(e,n,t,r,o,i){let s=n?n.injectorIndex:-1,a=0;return Mc()&&(a|=128),{type:t,index:r,insertBeforeIndex:null,injectorIndex:s,directiveStart:-1,directiveEnd:-1,directiveStylingLast:-1,componentOffset:-1,controlDirectiveIndex:-1,customControlIndex:-1,propertyBindings:null,flags:a,providerIndexes:0,value:o,namespace:jc(),attrs:i,mergedAttrs:null,localNames:null,initialInputs:null,inputs:null,hostDirectiveInputs:null,outputs:null,hostDirectiveOutputs:null,directiveToIndex:null,tView:null,next:null,prev:null,projectionNext:null,child:null,parent:n,projection:null,styles:null,stylesWithoutHost:null,residualStyles:void 0,classes:null,classesWithoutHost:null,residualClasses:void 0,classBindings:0,styleBindings:0}}var pE=()=>null,mE=()=>null;function yl(e,n){return pE(e,n)}function hE(e,n,t){return mE(e,n,t)}var zm=class{},et=class{},Re=class{destroyNode=null;static __NG_ELEMENT_ID__=()=>gE()};function gE(){let e=x(),n=me(),t=ze(n.index,e);return(Et(t)?t:e)[Z]}var Gm=(()=>{class e{static \u0275prov=F({token:e,providedIn:"root",factory:()=>null})}return e})();function Wm(e){return e.debugInfo?.className||e.type.name||null}var Es={},xs=class{injector;parentInjector;constructor(n,t){this.injector=n,this.parentInjector=t}get(n,t,r){let o=this.injector.get(n,Es,r);return o!==Es||t===Es?o:this.parentInjector.get(n,t,r)}};function Gn(e,n,t){if(t===Tt)return!1;let r=e[n];return Object.is(r,t)?!1:(e[n]=t,!0)}function xr(e,n,t){return function r(o){let i=r.__ngNativeEl__;i!==void 0&&wb(o,i);let s=wt(e)?ze(e.index,n):n;Jl(s,5);let a=n[Se],c=mp(n,a,t,o),l=r.__ngNextListenerFn__;for(;l;)c=mp(n,a,l,o)&&c,l=l.__ngNextListenerFn__;return c}}function mp(e,n,t,r){let o=S(null);try{return V(P.OutputStart,n,t),t(r)!==!1}catch(i){return $_(e,i),!1}finally{V(P.OutputEnd,n,t),S(o)}}function qm(e,n,t,r,o,i,s,a){let c=Xi(e),l=!1,d=null;if(!r&&c&&(d=yE(n,t,i,e.index)),d!==null){let u=d.__ngLastListenerFn__||d;u.__ngNextListenerFn__=s,d.__ngLastListenerFn__=s,l=!0}else{let u=$e(e,t),m=r?r(u):u;Ib(t,m,i,a),r||(a.__ngNativeEl__=u);let f=o.listen(m,i,a);if(!vE(i)){let h=r?b=>r(ye(b[e.index])):e.index;Zm(h,n,t,i,a,f,!1)}}return l}function vE(e){return e.startsWith("animation")||e.startsWith("transition")}function yE(e,n,t,r){let o=e.cleanup;if(o!=null)for(let i=0;i<o.length-1;i+=2){let s=o[i];if(s===t&&o[i+1]===r){let a=n[wr],c=o[i+2];return a&&a.length>c?a[c]:null}typeof s=="string"&&(i+=2)}return null}function Zm(e,n,t,r,o,i,s){let a=n.firstCreatePass?Nc(n):null,c=Cc(t),l=c.length;c.push(o,i),a&&a.push(r,e,l,(l+1)*(s?-1:1))}function hp(e,n,t,r,o){let i=null,s=null,a=null,c=!1,l=e.directiveToIndex.get(t.type);if(typeof l=="number"?i=l:[i,s,a]=l,s!==null&&a!==null&&e.hostDirectiveOutputs?.hasOwnProperty(r)){let d=e.hostDirectiveOutputs[r];for(let u=0;u<d.length;u+=2){let m=d[u];if(m>=s&&m<=a)c=!0,As(e,n,m,d[u+1],r,o);else if(m>a)break}}return t.outputs.hasOwnProperty(r)&&(c=!0,As(e,n,i,r,r,o)),c}function As(e,n,t,r,o,i){let s=n[t],a=n[E],l=a.data[t].outputs[r],u=s[l].subscribe(i);Zm(e.index,a,n,o,i,u,!0)}function jo(){bE()}function bE(){let e=x(),n=J(),t=me();if(n.firstCreatePass&&EE(n,t),t.controlDirectiveIndex===-1)return;Kt("NgSignalForms");let r=e[t.controlDirectiveIndex];n.data[t.controlDirectiveIndex].controlDef.create(r,new Rs(e,n,t))}function Bo(){_E()}function _E(){let e=x(),n=J(),t=Nr();if(t.controlDirectiveIndex===-1)return;let r=n.data[t.controlDirectiveIndex].controlDef,o=e[t.controlDirectiveIndex];r.update(o,new Rs(e,n,t))}var Rs=class{lView;tView;tNode;hasPassThrough;constructor(n,t,r){this.lView=n,this.tView=t,this.tNode=r,this.hasPassThrough=!!(r.flags&4096)}get customControl(){return this.tNode.customControlIndex!==-1?this.lView[this.tNode.customControlIndex]:void 0}get nativeElement(){return $e(this.tNode,this.lView)}get descriptor(){return`<${this.tNode.value}>`}listenToCustomControlOutput(n,t){let r=this.tView.data[this.tNode.customControlIndex];hp(this.tNode,this.lView,r,n,xr(this.tNode,this.lView,t))}listenToCustomControlModel(n){let t=this.tNode.flags&1024?"valueChange":"checkedChange",r=this.tView.data[this.tNode.customControlIndex];hp(this.tNode,this.lView,r,t,xr(this.tNode,this.lView,n))}listenToDom(n,t){qm(this.tNode,this.tView,this.lView,void 0,this.lView[Z],n,t,xr(this.tNode,this.lView,t))}setInputOnDirectives(n,t){let r=this.tNode.inputs?.[n],o=this.tNode.hostDirectiveInputs?.[n];if(!r&&!o)return!1;let i=!1;if(r)for(let s of r){if(s===this.tNode.controlDirectiveIndex)continue;let a=this.tView.data[s],c=this.lView[s];Un(a,c,n,t),i=!0}if(o)for(let s=0;s<o.length;s+=2){let a=o[s];if(a===this.tNode.controlDirectiveIndex)continue;let c=o[s+1],l=this.tView.data[a],d=this.lView[a];Un(l,d,c,t),i=!0}return i}setCustomControlModelInput(n){let t=this.tView.data[this.tNode.customControlIndex],r=this.tNode.flags&1024?"value":"checked";z_(this.tNode,this.tView,this.lView,t,r,n)}customControlHasInput(n){if(this.tNode.customControlIndex===-1)return!1;let t=this.tView.data[this.tNode.customControlIndex];return(t.signalFormsInputPresence??=this._buildCustomControlInputCache(t))[n]===!0}_buildCustomControlInputCache(n){let t={};for(let r in n.inputs)t[r]=!0;if(n.hostDirectives!==null){let r=[...n.hostDirectives];for(;r.length>0;){let o=r.shift();if(typeof o!="function"){for(let s in o.inputs)t[o.inputs[s]]=!0;let i=gp(o.directive);i!==null&&r.push(...i);continue}for(let i of o()){if(typeof i=="function")continue;if(i.inputs)for(let a=0;a<i.inputs.length;a+=2){let c=i.inputs[a+1]||i.inputs[a];t[c]=!0}let s=gp(i.directive);s!==null&&r.push(...s)}}}return t}};function gp(e){return typeof e=="function"&&"\u0275dir"in e?e.\u0275dir.hostDirectives??null:null}function EE(e,n,t){for(let o=n.directiveStart;o<n.directiveEnd;o++)if(e.data[o].controlDef){n.controlDirectiveIndex=o;break}if(n.controlDirectiveIndex===-1)return;let r=e.data[n.controlDirectiveIndex].controlDef;if(r.passThroughInput&&(n.inputs?.[r.passThroughInput]?.length??0)>1){n.flags|=4096;return}wE(e,n)}function wE(e,n){for(let t=n.directiveStart;t<n.directiveEnd;t++){let r=e.data[t];if(!(n.directiveToIndex&&!n.directiveToIndex.has(r.type))){if(vp(r,"value")){n.flags|=1024,n.customControlIndex=t;return}if(vp(r,"checked")){n.flags|=2048,n.customControlIndex=t;return}}}if(n.hostDirectiveInputs!==null&&n.hostDirectiveOutputs!==null&&n.directiveToIndex!==null){let t=(r,o)=>{let i=n.hostDirectiveInputs[r],s=n.hostDirectiveOutputs[r+"Change"];if(!i||!s)return!1;for(let a=0;a<i.length;a+=2){let c=i[a];for(let l=0;l<s.length;l+=2){let d=s[l];if(c===d)for(let u of n.directiveToIndex.values()){if(!Array.isArray(u))continue;let[m,f,h]=u;if(c>=f&&c<=h)return n.flags|=o,n.customControlIndex=m,!0}}}return!1};if(t("value",1024)||t("checked",2048))return}}function vp(e,n){return SE(e,n)&&IE(e,n+"Change")}function SE(e,n){return n in e.inputs}function IE(e,n){return n in e.outputs}var bl=Symbol("BINDING");var Wn=new g("");function ks(e,n,t){let r=t?e.styles:null,o=t?e.classes:null,i=0;if(n!==null)for(let s=0;s<n.length;s++){let a=n[s];if(typeof a=="number")i=a;else if(i==1)o=zi(o,a);else if(i==2){let c=a,l=n[++s];r=zi(r,c+": "+l+";")}}t?e.styles=r:e.stylesWithoutHost=r,t?e.classes=o:e.classesWithoutHost=o}function fe(e,n=0){let t=x();if(t===null)return M(e,n);let r=me();return Hp(r,t,he(e),n)}function DE(e,n,t,r,o){let i=r===null?null:{"":-1},s=o(e,t);if(s!==null){let a=s,c=null,l=null;for(let d of s)if(d.resolveHostDirectives!==null){[a,c,l]=d.resolveHostDirectives(s);break}TE(e,n,t,a,i,c,l)}i!==null&&r!==null&&CE(t,r,i)}function CE(e,n,t){let r=e.localNames=[];for(let o=0;o<n.length;o+=2){let i=t[n[o+1]];if(i==null)throw new _(-301,!1);r.push(n[o],i)}}function NE(e,n,t){n.componentOffset=t,(e.components??=[]).push(n.index)}function TE(e,n,t,r,o,i,s){let a=r.length,c=null;for(let m=0;m<a;m++){let f=r[m];c===null&&st(f)&&(c=f,NE(e,t,m)),nl(Ds(t,n),e,f.type)}OE(t,e.data.length,a),c?.viewProvidersResolver&&c.viewProvidersResolver(c);for(let m=0;m<a;m++){let f=r[m];f.providersResolver&&f.providersResolver(f)}let l=!1,d=!1,u=Dm(e,n,a,null);a>0&&(t.directiveToIndex=new Map);for(let m=0;m<a;m++){let f=r[m];if(t.mergedAttrs=Ar(t.mergedAttrs,f.hostAttrs),xE(e,t,n,u,f),kE(u,f,o),s!==null&&s.has(f)){let[b,C]=s.get(f);t.directiveToIndex.set(f.type,[u,b+t.directiveStart,C+t.directiveStart])}else(i===null||!i.has(f))&&t.directiveToIndex.set(f.type,u);f.contentQueries!==null&&(t.flags|=4),(f.hostBindings!==null||f.hostAttrs!==null||f.hostVars!==0)&&(t.flags|=64);let h=f.type.prototype;!l&&(h.ngOnChanges||h.ngOnInit||h.ngDoCheck)&&((e.preOrderHooks??=[]).push(t.index),l=!0),!d&&(h.ngOnChanges||h.ngDoCheck)&&((e.preOrderCheckHooks??=[]).push(t.index),d=!0),u++}ME(e,t,i)}function ME(e,n,t){for(let r=n.directiveStart;r<n.directiveEnd;r++){let o=e.data[r];if(t===null||!t.has(o))yp(0,n,o,r),yp(1,n,o,r),_p(n,r,!1);else{let i=t.get(o);bp(0,n,i,r),bp(1,n,i,r),_p(n,r,!0)}}}function yp(e,n,t,r){let o=e===0?t.inputs:t.outputs;for(let i in o)if(o.hasOwnProperty(i)){let s;e===0?s=n.inputs??={}:s=n.outputs??={},s[i]??=[],s[i].push(r),Ym(n,i)}}function bp(e,n,t,r){let o=e===0?t.inputs:t.outputs;for(let i in o)if(o.hasOwnProperty(i)){let s=o[i],a;e===0?a=n.hostDirectiveInputs??={}:a=n.hostDirectiveOutputs??={},a[s]??=[],a[s].push(r,i),Ym(n,s)}}function Ym(e,n){n==="class"?e.flags|=8:n==="style"&&(e.flags|=16)}function _p(e,n,t){let{attrs:r,inputs:o,hostDirectiveInputs:i}=e;if(r===null||!t&&o===null||t&&i===null||jl(e)){e.initialInputs??=[],e.initialInputs.push(null);return}let s=null,a=0;for(;a<r.length;){let c=r[a];if(c===0){a+=4;continue}else if(c===5){a+=2;continue}else if(typeof c=="number")break;if(!t&&o.hasOwnProperty(c)){let l=o[c];for(let d of l)if(d===n){s??=[],s.push(c,r[a+1]);break}}else if(t&&i.hasOwnProperty(c)){let l=i[c];for(let d=0;d<l.length;d+=2)if(l[d]===n){s??=[],s.push(l[d+1],r[a+1]);break}}a+=2}e.initialInputs??=[],e.initialInputs.push(s)}function xE(e,n,t,r,o){e.data[r]=o;let i=o.factory||(o.factory=En(o.type,!0)),s=new Bn(i,st(o),fe,null);e.blueprint[r]=s,t[r]=s,AE(e,n,r,Dm(e,t,o.hostVars,Tt),o)}function AE(e,n,t,r,o){let i=o.hostBindings;if(i){let s=e.hostBindingOpCodes;s===null&&(s=e.hostBindingOpCodes=[]);let a=~n.index;RE(s)!=a&&s.push(a),s.push(t,r,i)}}function RE(e){let n=e.length;for(;n>0;){let t=e[--n];if(typeof t=="number"&&t<0)return t}return 0}function kE(e,n,t){if(t){if(n.exportAs)for(let r=0;r<n.exportAs.length;r++)t[n.exportAs[r]]=e;st(n)&&(t[""]=e)}}function OE(e,n,t){e.flags|=1,e.directiveStart=n,e.directiveEnd=n+t,e.providerIndexes=n}function Qm(e,n,t,r,o,i,s,a){let c=n[E],l=c.consts,d=Wt(l,s),u=Vo(c,e,t,r,d);return i&&DE(c,n,u,Wt(l,a),o),u.mergedAttrs=Ar(u.mergedAttrs,u.attrs),u.attrs!==null&&ks(u,u.attrs,!1),u.mergedAttrs!==null&&ks(u,u.mergedAttrs,!0),c.queries!==null&&c.queries.elementStart(c,u),u}function Km(e,n){nb(e,n),wc(n)&&e.queries.elementEnd(n)}function PE(e,n,t,r,o,i){let s=n.consts,a=Wt(s,o),c=Vo(n,e,t,r,a);if(c.mergedAttrs=Ar(c.mergedAttrs,c.attrs),i!=null){let l=Wt(s,i);c.localNames=[];for(let d=0;d<l.length;d+=2)c.localNames.push(l[d],-1)}return c.attrs!==null&&ks(c,c.attrs,!1),c.mergedAttrs!==null&&ks(c,c.mergedAttrs,!0),n.queries!==null&&n.queries.elementStart(n,c),c}var Xm=typeof ShadowRoot<"u",FE=typeof Document<"u";function LE(e){return Object.keys(e).map(n=>{let[t,r,o]=e[n],i={propName:t,templateName:n,isSignal:(r&Ws.SignalBased)!==0};return o&&(i.transform=o),i})}function VE(e){return Object.keys(e).map(n=>({propName:e[n],templateName:n}))}function jE(e,n,t){let r=n instanceof ge?n:n?.injector;return r&&e.getStandaloneInjector!==null&&(r=e.getStandaloneInjector(r)||r),r?new xs(t,r):t}function BE(e){let n=e.get(et,null);if(n===null)throw new _(407,!1);let t=e.get(Gm,null),r=e.get(yt,null),o=e.get(Mt,null,{optional:!0});return{rendererFactory:n,sanitizer:t,changeDetectionScheduler:r,ngReflect:!1,tracingService:o}}function HE(e,n){let t=Jm(e);return lm(n,t,t==="svg"?Sc:t==="math"?_f:null)}function UE(e){if(e?.toLowerCase()==="script")throw new _(905,!1)}function Jm(e){return(e.selectors[0][0]||"div").toLowerCase()}var kr=class{componentDef;ngModule;selector;componentType;ngContentSelectors;isBoundToModule;cachedInputs=null;cachedOutputs=null;get inputs(){return this.cachedInputs??=LE(this.componentDef.inputs),this.cachedInputs}get outputs(){return this.cachedOutputs??=VE(this.componentDef.outputs),this.cachedOutputs}constructor(n,t){this.componentDef=n,this.ngModule=t,this.componentType=n.type,this.selector=r_(n.selectors),this.ngContentSelectors=n.ngContentSelectors??[],this.isBoundToModule=!!t}create(n,t,r,o,i,s){V(P.DynamicComponentStart);let a=S(null);try{let c=this.componentDef,l=jE(c,o||this.ngModule,n),d=BE(l),u=d.tracingService;return u&&u.componentCreate?u.componentCreate(Wm(c),()=>this.createComponentRef(d,l,t,r,i,s)):this.createComponentRef(d,l,t,r,i,s)}finally{S(a)}}createComponentRef(n,t,r,o,i,s){let a=this.componentDef,c=$E(o,a,s,i),l=n.rendererFactory.createRenderer(null,a),d=o?A_(l,o,a.encapsulation,t):HE(a,l);UE(d?.tagName);let u=t.get(Wn,null),m=zE(d,()=>t.get(L,null)??Kp());u&&u.addHost(m);let f=s?.some(Ep)||i?.some(C=>typeof C!="function"&&C.bindings.some(Ep)),h=ql(null,c,null,512|Im(a),null,null,n,l,t,null,em(d,t,!0));u&&Xm&&m instanceof ShadowRoot&&ns(h,()=>{u.removeHost(m)}),h[ue]=d,is(h);let b=null;try{let C=Qm(ue,h,2,"#host",()=>c.directiveRegistry,!0,0);um(l,d,C),Rr(d,h),Tm(c,h,C),nm(c,C,h),Km(c,C),r!==void 0&&WE(C,this.ngContentSelectors,r),b=ze(C.index,h),h[Se]=b[Se],Kl(c,h,null)}catch(C){throw b!==null&&ol(b),ol(h),C}finally{V(P.DynamicComponentEnd),ss()}return new Os(this.componentType,h,!!f)}};function $E(e,n,t,r){let o=e?["ng-version","22.1.1"]:o_(n.selectors[0]),i=null,s=null,a=0;if(t)for(let d of t)a+=d[bl].requiredVars,d.create&&(d.targetIdx=0,(i??=[]).push(d)),d.update&&(d.targetIdx=0,(s??=[]).push(d));if(r)for(let d=0;d<r.length;d++){let u=r[d];if(typeof u!="function")for(let m of u.bindings){a+=m[bl].requiredVars;let f=d+1;m.create&&(m.targetIdx=f,(i??=[]).push(m)),m.update&&(m.targetIdx=f,(s??=[]).push(m))}}let c=[n];if(r)for(let d of r){let u=typeof d=="function"?d:d.type,m=uc(u);c.push(m)}return Wl(0,null,GE(i,s),1,a,c,null,null,null,[o],null)}function zE(e,n){let t=e.getRootNode?.();return FE&&t instanceof Document?t.head:t&&Xm&&t instanceof ShadowRoot?t:n().head}function GE(e,n){return!e&&!n?null:t=>{if(t&1&&e)for(let r of e)r.create();if(t&2&&n)for(let r of n)r.update()}}function Ep(e){let n=e[bl].kind;return n==="input"||n==="twoWay"}var Os=class extends zm{_rootLView;_hasInputBindings;instance;hostView;changeDetectorRef;componentType;location;previousInputValues=null;_tNode;constructor(n,t,r){super(),this._rootLView=t,this._hasInputBindings=r,this._tNode=Ji(t[E],ue),this.location=Fr(this._tNode,t),this.instance=ze(this._tNode.index,t)[Se],this.hostView=this.changeDetectorRef=new Qt(t,void 0),this.componentType=n}setInput(n,t){this._hasInputBindings;let r=this._tNode;if(this.previousInputValues??=new Map,this.previousInputValues.has(n)&&Object.is(this.previousInputValues.get(n),t))return;let o=this._rootLView,i=Ql(r,o[E],o,n,t);this.previousInputValues.set(n,t);let s=ze(r.index,o);Jl(s,1)}get injector(){return new Yt(this._tNode,this._rootLView)}destroy(){this.hostView.destroy()}onDestroy(n){this.hostView.onDestroy(n)}};function WE(e,n,t){let r=e.projection=[];for(let o=0;o<n.length;o++){let i=t[o];r.push(i!=null&&i.length?Array.from(i):null)}}var qs=(()=>{class e{static __NG_ELEMENT_ID__=qE}return e})();function qE(){let e=me();return eh(e,x())}var _l=class e extends qs{_lContainer;_hostTNode;_hostLView;constructor(n,t,r){super(),this._lContainer=n,this._hostTNode=t,this._hostLView=r}get element(){return Fr(this._hostTNode,this._hostLView)}get injector(){return new Yt(this._hostTNode,this._hostLView)}get parentInjector(){let n=xl(this._hostTNode,this._hostLView);if(Pp(n)){let t=Is(n,this._hostLView),r=Ss(n),o=t[E].data[r+8];return new Yt(o,t)}else return new Yt(null,this._hostLView)}clear(){for(;this.length>0;)this.remove(this.length-1)}get(n){let t=wp(this._lContainer);return t!==null&&t[n]||null}get length(){return this._lContainer.length-ve}createEmbeddedView(n,t,r){let o,i;typeof r=="number"?o=r:r!=null&&(o=r.index,i=r.injector);let s=yl(this._lContainer,n.ssrId),a=n.createEmbeddedViewImpl(t||{},i,s);return this.insertImpl(a,o,Ts(this._hostTNode,s)),a}createComponent(n,t,r,o,i,s,a){let c,l=t||{};c=l.index,r=l.injector,o=l.projectableNodes,i=l.environmentInjector||l.ngModuleRef,s=l.directives,a=l.bindings;let d=new kr(Ut(n)),u=r||this.parentInjector;if(!i&&d.ngModule==null){let k=this.parentInjector.get(ge,null);k&&(i=k)}let m=Ut(d.componentType??{}),f=yl(this._lContainer,m?.id??null),h=f?.firstChild??null,b=d.create(u,o,h,i,s,a);return this.insertImpl(b.hostView,c,Ts(this._hostTNode,f)),b}insert(n,t){return this.insertImpl(n,t,!0)}insertImpl(n,t,r){let o=n._lView;if(If(o)){let a=this.indexOf(n);if(a!==-1)this.detach(a);else{let c=o[pe],l=new e(c,c[we],c[pe]);l.detach(l.indexOf(n))}}let i=this._adjustIndex(t),s=this._lContainer;return ed(s,o,i,r),n.attachToViewContainerRef(),hc(Zc(s),i,n),n}move(n,t){return this.insert(n,t)}indexOf(n){let t=wp(this._lContainer);return t!==null?t.indexOf(n):-1}remove(n){let t=this._adjustIndex(n,-1),r=Ms(this._lContainer,t);r&&(bo(Zc(this._lContainer),t),$l(r[E],r))}detach(n){let t=this._adjustIndex(n,-1),r=Ms(this._lContainer,t);return r&&bo(Zc(this._lContainer),t)!=null?new Qt(r):null}_adjustIndex(n,t=0){return n??this.length+t}};function wp(e){return e[wo]}function Zc(e){return e[wo]||(e[wo]=[])}function eh(e,n){let t,r=n[e.index];return Ue(r)?t=r:(t=Um(r,n,null,e),n[e.index]=t,Zl(n,t)),YE(t,n,e,r),new _l(t,e,n)}function ZE(e,n){let t=e[Z],r=t.createComment(""),o=$e(n,e),i=t.parentNode(o);return jn(t,i,r,t.nextSibling(o),!1),r}var YE=XE,QE=()=>!1;function KE(e,n,t){return QE(e,n,t)}function XE(e,n,t,r){if(e[Mn])return;let o;t.type&8?o=ye(r):o=ZE(n,t),e[Mn]=o}var El=class e{queryList;matches=null;constructor(n){this.queryList=n}clone(){return new e(this.queryList)}setDirty(){this.queryList.setDirty()}},wl=class e{queries;constructor(n=[]){this.queries=n}createEmbeddedView(n){let t=n.queries;if(t!==null){let r=n.contentQueries!==null?n.contentQueries[0]:t.length,o=[];for(let i=0;i<r;i++){let s=t.getByIndex(i),a=this.queries[s.indexInDeclarationView];o.push(a.clone())}return new e(o)}return null}insertView(n){this.dirtyQueriesWithMatches(n)}detachView(n){this.dirtyQueriesWithMatches(n)}finishViewCreation(n){this.dirtyQueriesWithMatches(n)}dirtyQueriesWithMatches(n){for(let t=0;t<this.queries.length;t++)rd(n,t).matches!==null&&this.queries[t].setDirty()}},Ps=class{flags;read;predicate;constructor(n,t,r=null){this.flags=t,this.read=r,typeof n=="string"?this.predicate=ow(n):this.predicate=n}},Sl=class e{queries;constructor(n=[]){this.queries=n}elementStart(n,t){for(let r=0;r<this.queries.length;r++)this.queries[r].elementStart(n,t)}elementEnd(n){for(let t=0;t<this.queries.length;t++)this.queries[t].elementEnd(n)}embeddedTView(n){let t=null;for(let r=0;r<this.length;r++){let o=t!==null?t.length:0,i=this.getByIndex(r).embeddedTView(n,o);i&&(i.indexInDeclarationView=r,t!==null?t.push(i):t=[i])}return t!==null?new e(t):null}template(n,t){for(let r=0;r<this.queries.length;r++)this.queries[r].template(n,t)}getByIndex(n){return this.queries[n]}get length(){return this.queries.length}track(n){this.queries.push(n)}},Il=class e{metadata;matches=null;indexInDeclarationView=-1;crossesNgTemplate=!1;_declarationNodeIndex;_appliesToNextNode=!0;constructor(n,t=-1){this.metadata=n,this._declarationNodeIndex=t}elementStart(n,t){this.isApplyingToNode(t)&&this.matchTNode(n,t)}elementEnd(n){this._declarationNodeIndex===n.index&&(this._appliesToNextNode=!1)}template(n,t){this.elementStart(n,t)}embeddedTView(n,t){return this.isApplyingToNode(n)?(this.crossesNgTemplate=!0,this.addMatch(-n.index,t),new e(this.metadata)):null}isApplyingToNode(n){if(this._appliesToNextNode&&(this.metadata.flags&1)!==1){let t=this._declarationNodeIndex,r=n.parent;for(;r!==null&&r.type&8&&r.index!==t;)r=r.parent;return t===(r!==null?r.index:-1)}return this._appliesToNextNode}matchTNode(n,t){let r=this.metadata.predicate;if(Array.isArray(r))for(let o=0;o<r.length;o++){let i=r[o];this.matchTNodeWithReadOption(n,t,JE(t,i)),this.matchTNodeWithReadOption(n,t,_s(t,n,i,!1,!1))}else r===ko?t.type&4&&this.matchTNodeWithReadOption(n,t,-1):this.matchTNodeWithReadOption(n,t,_s(t,n,r,!1,!1))}matchTNodeWithReadOption(n,t,r){if(r!==null){let o=this.metadata.read;if(o!==null)if(o===q||o===qs||o===ko&&t.type&4)this.addMatch(t.index,-2);else{let i=_s(t,n,o,!1,!1);i!==null&&this.addMatch(t.index,i)}else this.addMatch(t.index,r)}}addMatch(n,t){this.matches===null?this.matches=[n,t]:this.matches.push(n,t)}};function JE(e,n){let t=e.localNames;if(t!==null){for(let r=0;r<t.length;r+=2)if(t[r]===n)return t[r+1]}return null}function ew(e,n){return e.type&11?Fr(e,n):e.type&4?td(e,n):null}function tw(e,n,t,r){return t===-1?ew(n,e):t===-2?nw(e,n,r):Ao(e,e[E],t,n)}function nw(e,n,t){if(t===q)return Fr(n,e);if(t===ko)return td(n,e);if(t===qs)return eh(n,e)}function th(e,n,t,r){let o=n[it].queries[r];if(o.matches===null){let i=e.data,s=t.matches,a=[];for(let c=0;s!==null&&c<s.length;c+=2){let l=s[c];if(l<0)a.push(null);else{let d=i[l];a.push(tw(n,d,s[c+1],t.metadata.read))}}o.matches=a}return o.matches}function Dl(e,n,t,r){let o=e.queries.getByIndex(t),i=o.matches;if(i!==null){let s=th(e,n,o,t);for(let a=0;a<i.length;a+=2){let c=i[a];if(c>0)r.push(s[a/2]);else{let l=i[a+1],d=n[-c];for(let u=ve;u<d.length;u++){let m=d[u];m[zt]===m[pe]&&Dl(m[E],m,l,r)}if(d[xn]!==null){let u=d[xn];for(let m=0;m<u.length;m++){let f=u[m];Dl(f[E],f,l,r)}}}}}return r}function nd(e,n){return e[it].queries[n].queryList}function nh(e,n,t){let r=new Cs((t&4)===4);return Cf(e,n,r,r.destroy),(n[it]??=new wl).queries.push(new El(r))-1}function rw(e,n,t){let r=J();return r.firstCreatePass&&(oh(r,new Ps(e,n,t),-1),(n&2)===2&&(r.staticViewQueries=!0)),nh(r,x(),n)}function rh(e,n,t,r){let o=J();if(o.firstCreatePass){let i=me();oh(o,new Ps(n,t,r),i.index),iw(o,e),(t&2)===2&&(o.staticContentQueries=!0)}return nh(o,x(),t)}function ow(e){return e.split(",").map(n=>n.trim())}function oh(e,n,t){e.queries===null&&(e.queries=new Sl),e.queries.track(new Il(n,t))}function iw(e,n){let t=e.contentQueries||(e.contentQueries=[]),r=t.length?t[t.length-1]:-1;n!==r&&t.push(e.queries.length-1,n)}function rd(e,n){return e.queries.getByIndex(n)}function ih(e,n){let t=e[E],r=rd(t,n);return r.crossesNgTemplate?Dl(t,e,n,[]):th(t,e,r,n)}function od(e,n,t){let r,o=no(()=>{r._dirtyCounter();let i=aw(r,e);if(n&&i===void 0)throw new _(-951,!1);return i});return r=o[oe],r._dirtyCounter=Ne(0),r._flatValue=void 0,o}function sh(e){return od(!0,!1,e)}function ah(e){return od(!0,!0,e)}function ch(e){return od(!1,!1,e)}function sw(e,n){let t=e[oe];t._lView=x(),t._queryIndex=n,t._queryList=nd(t._lView,n),t._queryList.onDirty(()=>t._dirtyCounter.update(r=>r+1))}function aw(e,n){let t=e._lView,r=e._queryIndex;if(t===void 0||r===void 0||t[I]&4)return n?void 0:_e;let o=nd(t,r),i=ih(t,r);return o.reset(i,Gp),n?o.first:o._changesDetected||e._flatValue===void 0?e._flatValue=o.toArray():e._flatValue}function Ho(e){return!!e&&typeof e.then=="function"}function lh(e){return!!e&&typeof e.subscribe=="function"}var Fs=class{};var Oo=class extends Fs{injector;instance=null;constructor(n){super();let t=new Sn([...n.providers,{provide:Fs,useValue:this}],n.parent||br(),n.debugName,new Set(["environment"]));this.injector=t,n.runEnvironmentInitializers&&t.resolveInjectorInitializers()}destroy(){this.injector.destroy()}onDestroy(n){this.injector.onDestroy(n)}};function dh(e,n,t=null){return new Oo({providers:e,parent:n,debugName:t,runEnvironmentInitializers:!0}).injector}var cw=(()=>{class e{_injector;cachedInjectors=new Map;constructor(t){this._injector=t}getOrCreateStandaloneInjector(t){if(!t.standalone)return null;if(!this.cachedInjectors.has(t)){let r=vc(!1,t.type),o=r.length>0?dh([r],this._injector,""):null;this.cachedInjectors.set(t,o)}return this.cachedInjectors.get(t)}ngOnDestroy(){try{for(let t of this.cachedInjectors.values())t!==null&&t.destroy()}finally{this.cachedInjectors.clear()}}static \u0275prov=F({token:e,providedIn:"environment",factory:()=>new e(M(ge))})}return e})();function H(e){return Fo(()=>{let n=uh(e),t=U(w({},n),{decls:e.decls,vars:e.vars,template:e.template,consts:e.consts||null,ngContentSelectors:e.ngContentSelectors,onPush:e.changeDetection!==Al.Eager,directiveDefs:null,pipeDefs:null,dependencies:n.standalone&&e.dependencies||null,getStandaloneInjector:n.standalone?o=>o.get(cw).getOrCreateStandaloneInjector(t):null,getExternalStyles:null,signals:e.signals??!1,data:e.data||{},encapsulation:e.encapsulation||Je.Emulated,styles:e.styles||_e,_:null,schemas:e.schemas||null,tView:null,id:""});n.standalone&&Kt("NgStandalone"),fh(t);let r=e.dependencies;return t.directiveDefs=Sp(r,lw),t.pipeDefs=Sp(r,of),t.id=fw(t),t})}function lw(e){return Ut(e)||uc(e)}function ee(e){return Fo(()=>({type:e.type,bootstrap:e.bootstrap||_e,declarations:e.declarations||_e,imports:e.imports||_e,exports:e.exports||_e,transitiveCompileScopes:null,schemas:e.schemas||null,id:e.id||null}))}function dw(e,n){if(e==null)return $t;let t={};for(let r in e)if(e.hasOwnProperty(r)){let o=e[r],i,s,a,c;Array.isArray(o)?(a=o[0],i=o[1],s=o[2]??i,c=o[3]||null):(i=o,s=o,a=Ws.None,c=null),t[i]=[r,a,c],n[i]=s}return t}function uw(e){if(e==null)return $t;let n={};for(let t in e)e.hasOwnProperty(t)&&(n[e[t]]=t);return n}function te(e){return Fo(()=>{let n=uh(e);return fh(n),n})}function uh(e){let n={};return{type:e.type,providersResolver:null,viewProvidersResolver:null,factory:null,hostBindings:e.hostBindings||null,hostVars:e.hostVars||0,hostAttrs:e.hostAttrs||null,contentQueries:e.contentQueries||null,declaredInputs:n,inputConfig:e.inputs||$t,exportAs:e.exportAs||null,standalone:e.standalone??!0,signals:e.signals===!0,selectors:e.selectors||_e,viewQuery:e.viewQuery||null,features:e.features||null,setInput:null,resolveHostDirectives:null,hostDirectives:null,controlDef:null,signalFormsInputPresence:null,inputs:dw(e.inputs,n),outputs:uw(e.outputs),debugInfo:null}}function fh(e){e.features?.forEach(n=>n(e))}function Sp(e,n){return e?()=>{let t=typeof e=="function"?e():e,r=[];for(let o of t){let i=n(o);i!==null&&r.push(i)}return r}:null}function fw(e){let n=0,t=typeof e.consts=="function"?"":e.consts,r=[e.selectors,e.ngContentSelectors,e.hostVars,e.hostAttrs,t,e.vars,e.decls,e.encapsulation,e.standalone,e.signals,e.exportAs,JSON.stringify(e.inputs),JSON.stringify(e.outputs),Object.getOwnPropertyNames(e.type.prototype),!!e.contentQueries,!!e.viewQuery];for(let i of r.join("|"))n=Math.imul(31,n)+i.charCodeAt(0)<<0;return n+=2147483648,"c"+n}var ph=new g("");var id=(()=>{class e{resolve;reject;initialized=!1;done=!1;donePromise=new Promise((t,r)=>{this.resolve=t,this.reject=r});appInits=p(ph,{optional:!0})??[];injector=p(ae);constructor(){}runInitializers(){if(this.initialized)return;let t=[];for(let o of this.appInits){let i=_r(this.injector,o);if(Ho(i))t.push(i);else if(lh(i)){let s=new Promise((a,c)=>{i.subscribe({complete:a,error:c})});t.push(s)}}let r=()=>{this.done=!0,this.resolve()};Promise.all(t).then(()=>{r()}).catch(o=>{this.reject(o)}),t.length===0&&r(),this.initialized=!0}static \u0275fac=function(r){return new(r||e)};static \u0275prov=Y({token:e,factory:e.\u0275fac})}return e})();function sd(e){return n=>{n.controlDef={create:(t,r)=>{t?.\u0275ngControlCreate(r)},update:(t,r)=>{t?.\u0275ngControlUpdate?.(r)},passThroughInput:e}}}function pw(e){return Object.getPrototypeOf(e.prototype).constructor}function Ve(e){let n=pw(e.type),t=!0,r=[e];for(;n&&n!==Function.prototype&&n!==Object.prototype;){let o,i=Object.hasOwn(n,vo)?n[vo]:void 0,s=Object.hasOwn(n,yo)?n[yo]:void 0;if(st(e))o=i??s;else{if(i)throw new _(903,!1);o=s}if(o){if(t){r.push(o);let c=e;c.inputs=Yc(e.inputs),c.declaredInputs=Yc(e.declaredInputs),c.outputs=Yc(e.outputs);let l=o.hostBindings;l&&yw(e,l);let d=o.viewQuery,u=o.contentQueries;if(d&&gw(e,d),u&&vw(e,u),mw(e,o),rf(e.outputs,o.outputs),st(o)&&o.data.animation){let m=e.data;m.animation=(m.animation||[]).concat(o.data.animation)}}let a=o.features;if(a)for(let c=0;c<a.length;c++){let l=a[c];l&&l.ngInherit&&l(e),l===Ve&&(t=!1)}}n=Object.getPrototypeOf(n)}hw(r)}function mw(e,n){for(let t in n.inputs){if(!n.inputs.hasOwnProperty(t)||e.inputs.hasOwnProperty(t))continue;let r=n.inputs[t];r!==void 0&&(e.inputs[t]=r,e.declaredInputs[t]=n.declaredInputs[t])}}function hw(e){let n=0,t=null;for(let r=e.length-1;r>=0;r--){let o=e[r];o.hostVars=n+=o.hostVars,o.hostAttrs=Ar(o.hostAttrs,t=Ar(t,o.hostAttrs))}}function Yc(e){return e===$t?{}:e===_e?[]:e}function gw(e,n){let t=e.viewQuery;t?e.viewQuery=(r,o)=>{n(r,o),t(r,o)}:e.viewQuery=n}function vw(e,n){let t=e.contentQueries;t?e.contentQueries=(r,o,i)=>{n(r,o,i),t(r,o,i)}:e.contentQueries=n}function yw(e,n){let t=e.hostBindings;t?e.hostBindings=(r,o)=>{n(r,o),t(r,o)}:e.hostBindings=n}function bw(e,n,t,r,o,i,s,a){if(t.firstCreatePass){e.mergedAttrs=Ar(e.mergedAttrs,e.attrs);let d=e.tView=Wl(2,e,o,i,s,t.directiveRegistry,t.pipeRegistry,null,t.schemas,t.consts,null);t.queries!==null&&(t.queries.template(t,e),d.queries=t.queries.embeddedTView(e))}a&&(e.flags|=a),Dr(e,!1);let c=_w(t,n,e,r);cs()&&zl(t,n,c,e),Rr(c,n);let l=Um(c,n,c,e);n[r+ue]=l,Zl(n,l),KE(l,e,n)}function ad(e,n,t,r,o,i,s,a,c,l,d){let u=t+ue,m;if(n.firstCreatePass){if(m=Vo(n,u,4,s||null,a||null),l!=null){let f=Wt(n.consts,l);m.localNames=[];for(let h=0;h<f.length;h+=2)m.localNames.push(f[h],-1)}}else m=n.data[u];return bw(m,e,n,t,r,o,i,c),l!=null&&Yl(e,m,d),m}var _w=Ew;function Ew(e,n,t,r){return ls(!0),n[Z].createComment("")}var cd=new g("");var ld=new g("");function mh(){xa(()=>{let e="";throw new _(600,e)})}var ww=10;var Xt=(()=>{class e{_runningTick=!1;_destroyed=!1;_destroyListeners=[];_views=[];internalErrorHandler=p(Pn);afterRenderManager=p(Hl);zonelessEnabled=p(Co);rootEffectScheduler=p(fs);dirtyFlags=0;tracingSnapshot=null;allTestViews=new Set;autoDetectTestViews=new Set;includeAllTestViews=!1;afterTick=new de;get allViews(){return[...(this.includeAllTestViews?this.allTestViews:this.autoDetectTestViews).keys(),...this._views]}get destroyed(){return this._destroyed}componentTypes=[];components=[];internalPendingTask=p(On);get isStable(){return this.internalPendingTask.hasPendingTasksObservable.pipe(ie(t=>!t))}constructor(){p(Mt,{optional:!0})}whenStable(){let t;return new Promise(r=>{t=this.isStable.subscribe({next:o=>{o&&r()}})}).finally(()=>{t.unsubscribe()})}_injector=p(ge);_rendererFactory=null;get injector(){return this._injector}bootstrap(t,r){return this.bootstrapImpl(t,r)}bootstrapImpl(t,r,o=ae.NULL){return this._injector.get(z).run(()=>{if(V(P.BootstrapComponentStart),!this._injector.get(id).done){let k="";throw new _(405,k)}let a=Ut(t),c=this._injector.get(Fs),l=new kr(a,c);this.componentTypes.push(t);let{hostElement:d,directives:u,bindings:m}=Sw(r),f=d||l.selector,h=l.create(o,[],f,c.injector,u,m),b=h.location.nativeElement,C=h.injector.get(cd,null);return C?.registerApplication(b),h.onDestroy(()=>{this.detachView(h.hostView),xo(this.components,h),C?.unregisterApplication(b)}),this._loadComponent(h),V(P.BootstrapComponentEnd,h),h})}tick(){this.zonelessEnabled||(this.dirtyFlags|=1),this._tick()}_tick(){V(P.ChangeDetectionStart),this.tracingSnapshot!==null?this.tracingSnapshot.run(Us.CHANGE_DETECTION,this.tickImpl):this.tickImpl()}tickImpl=()=>{if(this._runningTick)throw V(P.ChangeDetectionEnd),new _(101,!1);let t=S(null);try{this._runningTick=!0,this.synchronize()}finally{this._runningTick=!1,this.tracingSnapshot?.dispose(),this.tracingSnapshot=null,S(t),this.afterTick.next(),V(P.ChangeDetectionEnd)}};synchronize(){this._rendererFactory===null&&!this._injector.destroyed&&(this._rendererFactory=this._injector.get(et,null,{optional:!0}));let t=0;for(;this.dirtyFlags!==0&&t++<ww;){V(P.ChangeDetectionSyncStart);try{this.synchronizeOnce()}finally{V(P.ChangeDetectionSyncEnd)}}}synchronizeOnce(){this.dirtyFlags&16&&(this.dirtyFlags&=-17,this.rootEffectScheduler.flush());let t=!1;if(this.dirtyFlags&7){let r=!!(this.dirtyFlags&1);this.dirtyFlags&=-8,this.dirtyFlags|=8;for(let{_lView:o}of this.allViews){if(!r&&!So(o))continue;let i=r&&!this.zonelessEnabled?0:1;Vm(o,i),t=!0}if(this.dirtyFlags&=-5,this.syncDirtyFlagsWithViews(),this.dirtyFlags&23)return}t||(this._rendererFactory?.begin?.(),this._rendererFactory?.end?.()),this.dirtyFlags&8&&(this.dirtyFlags&=-9,this.afterRenderManager.execute()),this.syncDirtyFlagsWithViews()}syncDirtyFlagsWithViews(){if(this.allViews.some(({_lView:t})=>So(t))){this.dirtyFlags|=2;return}else this.dirtyFlags&=-8}attachView(t){let r=t;this._views.push(r),r.attachToAppRef(this)}detachView(t){let r=t;xo(this._views,r),r.detachFromAppRef()}_loadComponent(t){this.attachView(t.hostView);try{this.tick()}catch(o){this.internalErrorHandler(o)}this.components.push(t),this._injector.get(ld,[]).forEach(o=>o(t))}ngOnDestroy(){if(!this._destroyed)try{this._destroyListeners.forEach(t=>t()),this._views.slice().forEach(t=>t.destroy())}finally{this._destroyed=!0,this._views=[],this._destroyListeners=[]}}onDestroy(t){return this._destroyListeners.push(t),()=>xo(this._destroyListeners,t)}destroy(){if(this._destroyed)throw new _(406,!1);let t=this._injector;t.destroy&&!t.destroyed&&t.destroy()}get viewCount(){return this._views.length}static \u0275fac=function(r){return new(r||e)};static \u0275prov=Y({token:e,factory:e.\u0275fac})}return e})();function Sw(e){return e===void 0||typeof e=="string"||e instanceof Element?{hostElement:e}:e}function xo(e,n){let t=e.indexOf(n);t>-1&&e.splice(t,1)}function De(e,n,t,r){let o=x(),i=Cr();if(Gn(o,i,n)){let s=J(),a=Nr();B_(a,o,e,n,t,r)}return De}function lt(e,n,t,r,o,i,s,a){Kt("NgControlFlow");let c=x(),l=J(),d=Wt(l.consts,i);return ad(c,l,e,n,t,r,o,d,256,s,a),dd}function dd(e,n,t,r,o,i,s,a){Kt("NgControlFlow");let c=x(),l=J(),d=Wt(l.consts,i);return ad(c,l,e,n,t,r,o,d,512,s,a),dd}function dt(e,n){Kt("NgControlFlow");let t=x(),r=Cr(),o=t[r]!==Tt?t[r]:-1,i=o!==-1?Ip(t,ue+o):void 0,s=0;if(Gn(t,r,e)){let a=S(null);try{if(i!==void 0&&aE(i,s),e!==-1){let c=ue+e,l=Ip(t,c),d=Iw(t[E],c),u=hE(l,d,t),m=Xl(t,d,n,{dehydratedView:u});ed(l,m,s,Ts(d,u))}}finally{S(a)}}else if(i!==void 0){let a=sE(i,s);a!==void 0&&(a[Se]=n)}}function Ip(e,n){return e[n]}function Iw(e,n){return Ji(e,n)}function ce(e,n,t){let r=x(),o=Cr();if(Gn(r,o,n)){let i=J(),s=Nr();Mm(s,r,e,n,r[Z],t)}return ce}function Cl(e,n,t,r,o){Ql(n,e,t,o?"class":"style",r)}function v(e,n,t,r){let o=x(),i=o[E],s=e+ue,a=i.firstCreatePass?Qm(s,o,2,n,j_,Mf(),t,r):i.data[s];if(wt(a)){let c=o[ot].tracingService;if(c&&c.componentCreate){let l=i.data[a.directiveStart+a.componentOffset];return c.componentCreate(Wm(l),()=>(Dp(e,n,o,a,r),v))}}return Dp(e,n,o,a,r),v}function Dp(e,n,t,r,o){if(Am(r,t,e,n,hh),Xi(r)){let i=t[E];Tm(i,t,r),nm(i,r,t)}o!=null&&Yl(t,r)}function y(){let e=J(),n=me(),t=Rm(n);return e.firstCreatePass&&Km(e,t),xc(t)&&Ac(),Tc(),t.classesWithoutHost!=null&&ob(t)&&Cl(e,t,x(),t.classesWithoutHost,!0),t.stylesWithoutHost!=null&&ib(t)&&Cl(e,t,x(),t.stylesWithoutHost,!1),y}function N(e,n,t,r){return v(e,n,t,r),y(),N}function Te(e,n,t,r){let o=x(),i=o[E],s=e+ue,a=i.firstCreatePass?PE(s,i,2,n,t,r):i.data[s];return Am(a,o,e,n,hh),r!=null&&Yl(o,a),Te}function Me(){let e=me(),n=Rm(e);return xc(n)&&Ac(),Tc(),Me}function ut(e,n,t,r){return Te(e,n,t,r),Me(),ut}var hh=(e,n,t,r,o)=>(ls(!0),lm(n[Z],r,jc()));function ud(){return x()}function Zs(e,n,t){let r=x(),o=Cr();if(Gn(r,o,n)){let i=J(),s=Nr();xm(s,r,e,n,r[Z],t)}return Zs}var Uo="en-US";var Dw=Uo;function gh(e){typeof e=="string"&&(Dw=e.toLowerCase().replace(/_/g,"-"))}function T(e,n,t){let r=x(),o=J(),i=me();return vh(o,r,r[Z],i,e,n,t),T}function vh(e,n,t,r,o,i,s){let a=!0,c=null;if((r.type&3||s)&&(c??=xr(r,n,i),qm(r,e,n,s,t,o,i,c)&&(a=!1)),a){let l=r.outputs?.[o],d=r.hostDirectiveOutputs?.[o];if(d&&d.length)for(let u=0;u<d.length;u+=2){let m=d[u],f=d[u+1];c??=xr(r,n,i),As(r,n,m,f,o,c)}if(l&&l.length)for(let u of l)c??=xr(r,n,i),As(r,n,u,o,o,c)}}function Cw(e,n){let t=null,r=Xb(e);for(let o=0;o<n.length;o++){let i=n[o];if(i==="*"){t=o;continue}if(r===null?pm(e,i,!0):t_(r,i))return o}return t}function X(e){let n=x()[Ae][we];if(!n.projection){let t=e?e.length:1,r=n.projection=ff(t,null),o=r.slice(),i=n.child;for(;i!==null;){if(i.type!==128){let s=e?Cw(i,e):0;s!==null&&(o[s]?o[s].projectionNext=i:r[s]=i,o[s]=i)}i=i.next}}}function R(e,n=0,t,r,o,i){let s=x(),a=J(),c=r?e+1:null;c!==null&&ad(s,a,c,r,o,i,null,t);let l=Vo(a,ue+e,16,null,t||null);l.projection===null&&(l.projection=n),Oc();let u=!s[Er]||Mc();s[Ae][we].projection[l.projection]===null&&c!==null?Nw(s,a,c):u&&!js(l)&&D_(a,s,l)}function Nw(e,n,t){let r=ue+t,o=n.data[r],i=e[r],s=yl(i,o.tView.ssrId),a=Xl(e,o,void 0,{dehydratedView:s});ed(i,a,0,Ts(o,s))}function Lr(e,n,t,r){return rh(e,n,t,r),Lr}function Vr(e,n,t){return rw(e,n,t),Vr}function xt(e){let n=x(),t=J(),r=os();Io(r+1);let o=rd(t,r);if(e.dirty&&Sf(n)===((o.metadata.flags&2)===2)){if(o.matches===null)e.reset([]);else{let i=ih(n,r);e.reset(i,Gp),e.notifyOnChanges()}return!0}return!1}function At(){return nd(x(),os())}function $o(e,n,t,r,o){return sw(n,rh(e,t,r,o)),$o}function Ys(e=1){Io(os()+e)}function ft(e){let n=Af();return wf(n,ue+e)}function vs(e,n){return e<<17|n<<2}function $n(e){return e>>17&32767}function Tw(e){return(e&2)==2}function Mw(e,n){return e&131071|n<<17}function Nl(e){return e|2}function Or(e){return(e&131068)>>2}function Qc(e,n){return e&-131069|n<<2}function xw(e){return(e&1)===1}function Tl(e){return e|1}function Aw(e,n,t,r,o,i){let s=i?n.classBindings:n.styleBindings,a=$n(s),c=Or(s);e[r]=t;let l=!1,d;if(Array.isArray(t)){let u=t;d=u[1],(d===null||gr(u,d)>0)&&(l=!0)}else d=t;if(o)if(c!==0){let m=$n(e[a+1]);e[r+1]=vs(m,a),m!==0&&(e[m+1]=Qc(e[m+1],r)),e[a+1]=Mw(e[a+1],r)}else e[r+1]=vs(a,0),a!==0&&(e[a+1]=Qc(e[a+1],r)),a=r;else e[r+1]=vs(c,0),a===0?a=r:e[c+1]=Qc(e[c+1],r),c=r;l&&(e[r+1]=Nl(e[r+1])),Cp(e,d,r,!0),Cp(e,d,r,!1),Rw(n,d,e,r,i),s=vs(a,c),i?n.classBindings=s:n.styleBindings=s}function Rw(e,n,t,r,o){let i=o?e.residualClasses:e.residualStyles;i!=null&&typeof n=="string"&&gr(i,n)>=0&&(t[r+1]=Tl(t[r+1]))}function Cp(e,n,t,r){let o=e[t+1],i=n===null,s=r?$n(o):Or(o),a=!1;for(;s!==0&&(a===!1||i);){let c=e[s],l=e[s+1];kw(c,n)&&(a=!0,e[s+1]=r?Tl(l):Nl(l)),s=r?$n(l):Or(l)}a&&(e[t+1]=r?Nl(o):Tl(o))}function kw(e,n){return e===null||n==null||(Array.isArray(e)?e[1]:e)===n?!0:Array.isArray(e)&&typeof n=="string"?gr(e,n)>=0:!1}var Xe={textEnd:0,key:0,keyEnd:0,value:0,valueEnd:0};function Ow(e){return e.substring(Xe.key,Xe.keyEnd)}function Pw(e){return Fw(e),yh(e,bh(e,0,Xe.textEnd))}function yh(e,n){let t=Xe.textEnd;return t===n?-1:(n=Xe.keyEnd=Lw(e,Xe.key=n,t),bh(e,n,t))}function Fw(e){Xe.key=0,Xe.keyEnd=0,Xe.value=0,Xe.valueEnd=0,Xe.textEnd=e.length}function bh(e,n,t){for(;n<t&&e.charCodeAt(n)<=32;)n++;return n}function Lw(e,n,t){for(;n<t&&e.charCodeAt(n)>32;)n++;return n}function j(e,n){return jw(e,n,null,!0),j}function Rt(e){Bw(Ww,Vw,e,!0)}function Vw(e,n){for(let t=Pw(n);t>=0;t=yh(n,t))Yi(e,Ow(n),!0)}function jw(e,n,t,r){let o=x(),i=J(),s=Fc(2);if(i.firstUpdatePass&&Eh(i,e,s,r),n!==Tt&&Gn(o,s,n)){let a=i.data[kn()];wh(i,a,o,o[Z],e,o[s+1]=Zw(n,t),r,s)}}function Bw(e,n,t,r){let o=J(),i=Fc(2);o.firstUpdatePass&&Eh(o,null,i,r);let s=x();if(t!==Tt&&Gn(s,i,t)){let a=o.data[kn()];if(Sh(a,r)&&!_h(o,i)){let c=r?a.classesWithoutHost:a.stylesWithoutHost;c!==null&&(t=zi(c,t||"")),Cl(o,a,s,t,r)}else qw(o,a,s,s[Z],s[i+1],s[i+1]=Gw(e,n,t),r,i)}}function _h(e,n){return n>=e.expandoStartIndex}function Eh(e,n,t,r){let o=e.data;if(o[t+1]===null){let i=o[kn()],s=_h(e,t);Sh(i,r)&&n===null&&!s&&(n=!1),n=Hw(o,i,n,r),Aw(o,i,n,t,s,r)}}function Hw(e,n,t,r){let o=Ff(e),i=r?n.residualClasses:n.residualStyles;if(o===null)(r?n.classBindings:n.styleBindings)===0&&(t=Kc(null,e,n,t,r),t=Po(t,n.attrs,r),i=null);else{let s=n.directiveStylingLast;if(s===-1||e[s]!==o)if(t=Kc(o,e,n,t,r),i===null){let c=Uw(e,n,r);c!==void 0&&Array.isArray(c)&&(c=Kc(null,e,n,c[1],r),c=Po(c,n.attrs,r),$w(e,n,r,c))}else i=zw(e,n,r)}return i!==void 0&&(r?n.residualClasses=i:n.residualStyles=i),t}function Uw(e,n,t){let r=t?n.classBindings:n.styleBindings;if(Or(r)!==0)return e[$n(r)]}function $w(e,n,t,r){let o=t?n.classBindings:n.styleBindings;e[$n(o)]=r}function zw(e,n,t){let r,o=n.directiveEnd;for(let i=1+n.directiveStylingLast;i<o;i++){let s=e[i].hostAttrs;r=Po(r,s,t)}return Po(r,n.attrs,t)}function Kc(e,n,t,r,o){let i=null,s=t.directiveEnd,a=t.directiveStylingLast;for(a===-1?a=t.directiveStart:a++;a<s&&(i=n[a],r=Po(r,i.hostAttrs,o),i!==e);)a++;return e!==null&&(t.directiveStylingLast=a),r}function Po(e,n,t){let r=t?1:2,o=-1;if(n!==null)for(let i=0;i<n.length;i++){let s=n[i];typeof s=="number"?o=s:o===r&&(Array.isArray(e)||(e=e===void 0?[]:["",e]),Yi(e,s,t?!0:n[++i]))}return e===void 0?null:e}function Gw(e,n,t){if(t==null||t==="")return _e;let r=[],o=ct(t);if(Array.isArray(o))for(let i=0;i<o.length;i++)e(r,o[i],!0);else if(o instanceof Set)for(let i of o)e(r,i,!0);else if(typeof o=="object")for(let i in o)Object.hasOwn(o,i)&&e(r,i,o[i]);else typeof o=="string"&&n(r,o);return r}function Ww(e,n,t){let r=String(n);r!==""&&!r.includes(" ")&&Yi(e,r,t)}function qw(e,n,t,r,o,i,s,a){o===Tt&&(o=_e);let c=0,l=0,d=0<o.length?o[0]:null,u=0<i.length?i[0]:null;for(;d!==null||u!==null;){let m=c<o.length?o[c+1]:void 0,f=l<i.length?i[l+1]:void 0,h=null,b;d===u?(c+=2,l+=2,m!==f&&(h=u,b=f)):u===null||d!==null&&d<u?(c+=2,h=d):(l+=2,h=u,b=f),h!==null&&wh(e,n,t,r,h,b,s,a),d=c<o.length?o[c]:null,u=l<i.length?i[l]:null}}function wh(e,n,t,r,o,i,s,a){if(!(n.type&3))return;let c=e.data,l=c[a+1],d=xw(l)?Np(c,n,t,o,Or(l),s):void 0;if(!Ls(d)){Ls(i)||Tw(l)&&(i=Np(c,null,t,o,a,s));let u=Ef(kn(),t);N_(r,s,u,o,i)}}function Np(e,n,t,r,o,i){let s=n===null,a;for(;o>0;){let c=e[o],l=Array.isArray(c),d=l?c[1]:c,u=d===null,m=t[o+1];m===Tt&&(m=u?_e:void 0);let f=u?Qi(m,r):d===r?m:void 0;if(l&&!Ls(f)&&(f=Qi(c,r)),Ls(f)&&(a=f,s))return a;let h=e[o+1];o=s?$n(h):Or(h)}if(n!==null){let c=i?n.residualClasses:n.residualStyles;c!=null&&(a=Qi(c,r))}return a}function Ls(e){return e!==void 0}function Zw(e,n){return e==null||e===""||(typeof n=="string"?e=ct(e)+n:typeof e=="object"&&(e=$i(ct(e)))),e}function Sh(e,n){return(e.flags&(n?8:16))!==0}function ke(e,n=""){let t=x(),r=J(),o=e+ue,i=r.firstCreatePass?Vo(r,o,1,n,null):r.data[o],s=Yw(r,t,i,n);t[o]=s,cs()&&zl(r,t,s,i),Dr(i,!1)}var Yw=(e,n,t,r)=>(ls(!0),$b(n[Z],r));function qn(e,n,t){ms(n)&&(n=n());let r=x(),o=Cr();if(Gn(r,o,n)){let i=J(),s=Nr();Mm(s,r,e,n,r[Z],t)}return qn}function jr(e,n){let t=ms(e);return t&&e.set(n),t}function Zn(e,n){let t=x(),r=J(),o=me();return vh(r,t,t[Z],o,e,n),Zn}function Tp(e,n,t){let r=J();r.firstCreatePass&&Ih(n,r.data,r.blueprint,st(e),t)}function Ih(e,n,t,r,o){if(e=he(e),Array.isArray(e))for(let i=0;i<e.length;i++)Ih(e[i],n,t,r,o);else{let i=J(),s=x(),a=me(),c=wn(e)?e:he(e.provide),l=bc(e),d=a.providerIndexes&1048575,u=a.directiveStart,m=a.providerIndexes>>20;if(wn(e)||!e.multi){let f=new Bn(l,o,fe,null),h=Jc(c,n,o?d:d+m,u);h===-1?(nl(Ds(a,s),i,c),Xc(i,e,n.length),n.push(c),a.directiveStart++,a.directiveEnd++,o&&(a.providerIndexes+=1048576),t.push(f),s.push(f)):(t[h]=f,s[h]=f)}else{let f=Jc(c,n,d+m,u),h=Jc(c,n,d,d+m),b=f>=0&&t[f],C=h>=0&&t[h];if(o&&!C||!o&&!b){nl(Ds(a,s),i,c);let k=Xw(o?Kw:Qw,t.length,o,r,l,e);!o&&C&&(t[h].providerFactory=k),Xc(i,e,n.length,0),n.push(c),a.directiveStart++,a.directiveEnd++,o&&(a.providerIndexes+=1048576),t.push(k),s.push(k)}else{let k=Dh(t[o?h:f],l,!o&&r);Xc(i,e,f>-1?f:h,k)}!o&&r&&C&&t[h].componentProviders++}}}function Xc(e,n,t,r){let o=wn(n),i=vf(n);if(o||i){let c=(i?he(n.useClass):n).prototype.ngOnDestroy;if(c){let l=e.destroyHooks||(e.destroyHooks=[]);if(!o&&n.multi){let d=l.indexOf(t);d===-1?l.push(t,[r,c]):l[d+1].push(r,c)}else l.push(t,c)}}}function Dh(e,n,t){return t&&e.componentProviders++,e.multi.push(n)-1}function Jc(e,n,t,r){for(let o=t;o<r;o++)if(n[o]===e)return o;return-1}function Qw(e,n,t,r,o){return Ml(this.multi,[])}function Kw(e,n,t,r,o){let i=this.multi,s;if(this.providerFactory){let a=this.providerFactory.componentProviders,c=Ao(r,r[E],this.providerFactory.index,o);s=c.slice(0,a),Ml(i,s);for(let l=a;l<c.length;l++)s.push(c[l])}else s=[],Ml(i,s);return s}function Ml(e,n){for(let t=0;t<e.length;t++){let r=e[t];n.push(r())}return n}function Xw(e,n,t,r,o,i){let s=new Bn(e,t,fe,null);return s.multi=[],s.index=n,s.componentProviders=0,Dh(s,o,r&&!t),s}function pt(e,n){return t=>{t.providersResolver=(r,o)=>Tp(r,o?o(e):e,!1),n&&(t.viewProvidersResolver=(r,o)=>Tp(r,o?o(n):n,!0))}}var Ch=(()=>{class e{applicationErrorHandler=p(Pn);appRef=p(Xt);taskService=p(On);ngZone=p(z);zonelessEnabled=p(Co);tracing=p(Mt,{optional:!0});zoneIsDefined=typeof Zone<"u"&&!!Zone.root.run;schedulerTickApplyArgs=[{data:{__scheduler_tick__:!0}}];subscriptions=new le;angularZoneId=this.zoneIsDefined?this.ngZone._inner?.get(ho):null;scheduleInRootZone=!this.zonelessEnabled&&this.zoneIsDefined&&(p(zc,{optional:!0})??!1);cancelScheduledCallback=null;useMicrotaskScheduler=!1;runningTick=!1;pendingRenderTaskId=null;constructor(){this.subscriptions.add(this.appRef.afterTick.subscribe(()=>{let t=this.taskService.add();if(!this.runningTick&&(this.cleanup(),!this.zonelessEnabled||this.appRef.includeAllTestViews)){this.taskService.remove(t);return}this.switchToMicrotaskScheduler(),this.taskService.remove(t)})),this.subscriptions.add(this.ngZone.onUnstable.subscribe(()=>{this.runningTick||this.cleanup()}))}switchToMicrotaskScheduler(){this.ngZone.runOutsideAngular(()=>{let t=this.taskService.add();this.useMicrotaskScheduler=!0,queueMicrotask(()=>{this.useMicrotaskScheduler=!1,this.taskService.remove(t)})})}notify(t){if(!this.zonelessEnabled&&t===5)return;switch(t){case 0:case 2:{this.appRef.dirtyFlags|=2;break}case 3:case 4:case 5:case 1:{this.appRef.dirtyFlags|=4;break}case 6:{this.appRef.dirtyFlags|=2;break}case 12:{this.appRef.dirtyFlags|=16;break}case 13:{this.appRef.dirtyFlags|=2;break}case 11:break;default:this.appRef.dirtyFlags|=8}if(this.appRef.tracingSnapshot=this.tracing?.snapshot(this.appRef.tracingSnapshot)??null,!this.shouldScheduleTick())return;let r=this.useMicrotaskScheduler?zf:Bc;this.pendingRenderTaskId=this.taskService.add(),this.scheduleInRootZone?this.cancelScheduledCallback=Zone.root.run(()=>r(()=>this.tick())):this.cancelScheduledCallback=this.ngZone.runOutsideAngular(()=>r(()=>this.tick()))}shouldScheduleTick(){return!(this.appRef.destroyed||this.pendingRenderTaskId!==null||this.runningTick||this.appRef._runningTick||!this.zonelessEnabled&&this.zoneIsDefined&&Zone.current.get(ho+this.angularZoneId))}tick(){if(this.runningTick||this.appRef.destroyed)return;if(this.appRef.dirtyFlags===0){this.cleanup();return}!this.zonelessEnabled&&this.appRef.dirtyFlags&7&&(this.appRef.dirtyFlags|=1);let t=this.taskService.add();try{this.ngZone.run(()=>{this.runningTick=!0,this.appRef._tick()},void 0,this.schedulerTickApplyArgs)}catch(r){this.applicationErrorHandler(r)}finally{this.taskService.remove(t),this.cleanup()}}ngOnDestroy(){this.subscriptions.unsubscribe(),this.cleanup()}cleanup(){if(this.runningTick=!1,this.cancelScheduledCallback?.(),this.cancelScheduledCallback=null,this.pendingRenderTaskId!==null){let t=this.pendingRenderTaskId;this.pendingRenderTaskId=null,this.taskService.remove(t)}}static \u0275fac=function(r){return new(r||e)};static \u0275prov=Y({token:e,factory:e.\u0275fac})}return e})();function fd(){return Kt("NgZoneless"),yr([...pd(),[]])}function pd(){return[{provide:yt,useExisting:Ch},{provide:z,useClass:go},{provide:Co,useValue:!0}]}function Jw(){return typeof $localize<"u"&&$localize.locale||Uo}var md=new g("",{factory:()=>p(md,{optional:!0,skipSelf:!0})||Jw()});var Qs=class{destroyed=!1;listeners=null;errorHandler=p(Ee,{optional:!0});isEmitting=!1;hasNullListeners=!1;destroyRef=p(xe);constructor(){this.destroyRef.onDestroy(()=>{this.destroyed=!0,this.listeners=null})}subscribe(n){if(this.destroyed)throw new _(953,!1);return(this.listeners??=[]).push(n),{unsubscribe:()=>{let t=this.listeners?this.listeners.indexOf(n):-1;t>-1&&(this.isEmitting?(this.hasNullListeners=!0,this.listeners[t]=null):this.listeners.splice(t,1))}}}emit(n){if(this.destroyed){console.warn(In(953,!1));return}if(this.listeners===null)return;this.isEmitting=!0;let t=S(null);try{for(let r of this.listeners)try{r!==null&&r(n)}catch(o){this.errorHandler?.handleError(o)}}finally{this.hasNullListeners&&(this.hasNullListeners=!1,this.listeners&&eS(this.listeners)),S(t),this.isEmitting=!1}}};function eS(e){let n=e.length-1;for(;n>-1;)e[n]===null&&e.splice(n,1),n--}function Jt(e,n){return no(e,n?.equal)}function Oe(e){return Iu(e)}var Nh=class e extends Error{_brand;constructor(n){super(n)}static IDLE=new e("IDLE");static LOADING=new e("LOADING")},tS=e=>e;function hd(e,n){if(typeof e=="function"){let t=Pa(e,tS,n?.equal);return Th(t,n?.debugName,n?.set)}else{let t=Pa(e.source,e.computation,e.equal);return Th(t,e.debugName,e.set)}}function Th(e,n,t){let r=e[oe],o=e;if(t!==void 0){let i=s=>Fa(r,s);o.set=s=>t(s,i),o.update=s=>t(s(Oe(e)),i)}else o.set=i=>Fa(r,i),o.update=i=>Su(r,i);return o.asReadonly=ds.bind(e),o}var kh=Symbol("InputSignalNode#UNSET"),dS=U(w({},hi),{transformFn:void 0,applyValueToInputSignal(e,n){pn(e,n)}});function Oh(e,n){let t=Object.create(dS);t.value=e,t.transformFn=n?.transform;function r(){if(ln(t),t.value===kh){let o=null;throw new _(-950,o)}return t.value}return r[oe]=t,r}var en=class{attributeName;constructor(n){this.attributeName=n}__NG_ELEMENT_ID__=()=>zp(this.attributeName);toString(){return`HostAttributeToken ${this.attributeName}`}};function Ph(e){return new Qs}function Mh(e,n){return Oh(e,n)}function uS(e){return Oh(kh,e)}var Br=(Mh.required=uS,Mh);function xh(e,n){return sh(n)}function fS(e,n){return ah(n)}var Fh=(xh.required=fS,xh);function vd(e,n){return ch(n)}var pS=1e4;var KL=pS-1e3;var tn=(()=>{class e{static __NG_ELEMENT_ID__=mS}return e})();function mS(e){return hS(me(),x(),(e&16)===16)}function hS(e,n,t){if(wt(e)&&!t){let r=ze(e.index,n);return new Qt(r,r)}else if(e.type&175){let r=n[Ae];return new Qt(r,n)}return null}var gd=new g(""),gS=new g("");function zo(e){return!e.moduleRef}function vS(e){let n=zo(e)?e.r3Injector:e.moduleRef.injector,t=n.get(z);return t.run(()=>{zo(e)?e.r3Injector.resolveInjectorInitializers():e.moduleRef.resolveInjectorInitializers();let r=n.get(Pn),o;if(t.runOutsideAngular(()=>{o=t.onError.subscribe({next:r})}),zo(e)){let i=()=>n.destroy(),s=e.platformInjector.get(gd);s.add(i),n.onDestroy(()=>{o.unsubscribe(),s.delete(i)})}else{let i=()=>e.moduleRef.destroy(),s=e.platformInjector.get(gd);s.add(i),e.moduleRef.onDestroy(()=>{xo(e.allPlatformModules,e.moduleRef),o.unsubscribe(),s.delete(i)})}return bS(r,t,()=>{let i=n.get(On),s=i.add(),a=n.get(id);return a.runInitializers(),a.donePromise.then(()=>{let c=n.get(md,Uo);if(gh(c||Uo),!n.get(gS,!0))return zo(e)?n.get(Xt):(e.allPlatformModules.push(e.moduleRef),e.moduleRef);if(zo(e)){let d=n.get(Xt);return e.rootComponent!==void 0&&d.bootstrap(e.rootComponent),d}else return yS?.(e.moduleRef,e.allPlatformModules),e.moduleRef}).finally(()=>{i.remove(s)})})})}var yS;function bS(e,n,t){try{let r=t();return Ho(r)?r.catch(o=>{throw n.runOutsideAngular(()=>e(o)),o}):r}catch(r){throw n.runOutsideAngular(()=>e(r)),r}}var Ks=null;function _S(e=[],n){return ae.create({name:n,providers:[{provide:Eo,useValue:"platform"},{provide:gd,useValue:new Set([()=>Ks=null])},...e]})}function ES(e=[]){if(Ks)return Ks;let n=_S(e);return Ks=n,mh(),wS(n),n}function wS(e){let n=e.get(us,null);_r(e,()=>{n?.forEach(t=>t())})}function Lh(e){let{rootComponent:n,appProviders:t,platformProviders:r,platformRef:o}=e;V(P.BootstrapApplicationStart);try{let i=o?.injector??ES(r),s=[pd(),Wf,...t||[]],a=new Oo({providers:s,parent:i,debugName:"",runEnvironmentInitializers:!1});return vS({r3Injector:a.injector,platformInjector:i,rootComponent:n})}catch(i){return Promise.reject(i)}finally{V(P.BootstrapApplicationEnd)}}function B(e){return typeof e=="boolean"?e:e!=null&&e!=="false"}function Yn(e,n=NaN){return!isNaN(parseFloat(e))&&!isNaN(Number(e))?Number(e):n}function Vh(e,n){let t=Ut(e),r=n.elementInjector||br();return new kr(t).create(r,n.projectableNodes,n.hostElement,n.environmentInjector,n.directives,n.bindings)}var jh=null;function Ge(){return jh}function yd(e){jh??=e}var Go=class{},Xs=(()=>{class e{historyGo(t){throw new Error("")}static \u0275fac=function(r){return new(r||e)};static \u0275prov=F({token:e,factory:()=>p(Bh),providedIn:"platform"})}return e})();var Bh=(()=>{class e extends Xs{_location;_history;_doc=p(L);constructor(){super(),this._location=window.location,this._history=window.history}getBaseHrefFromDOM(){return Ge().getBaseHref(this._doc)}onPopState(t){let r=Ge().getGlobalEventTarget(this._doc,"window");return r.addEventListener("popstate",t,!1),()=>r.removeEventListener("popstate",t)}onHashChange(t){let r=Ge().getGlobalEventTarget(this._doc,"window");return r.addEventListener("hashchange",t,!1),()=>r.removeEventListener("hashchange",t)}get href(){return this._location.href}get protocol(){return this._location.protocol}get hostname(){return this._location.hostname}get port(){return this._location.port}get pathname(){return this._location.pathname}get search(){return this._location.search}get hash(){return this._location.hash}set pathname(t){this._location.pathname=t}pushState(t,r,o){this._history.pushState(t,r,o)}replaceState(t,r,o){this._history.replaceState(t,r,o)}forward(){this._history.forward()}back(){this._history.back()}historyGo(t=0){this._history.go(t)}getState(){return this._history.state}static \u0275fac=function(r){return new(r||e)};static \u0275prov=F({token:e,factory:()=>new e,providedIn:"platform"})}return e})();function Wo(e,n){n=encodeURIComponent(n);for(let t of e.split(";")){let r=t.indexOf("="),[o,i]=r==-1?[t,""]:[t.slice(0,r),t.slice(r+1)];if(o.trim()!==n)continue;let s=i;try{s=decodeURIComponent(i)}catch{}return s.length>1&&s[0]==='"'&&s[s.length-1]==='"'&&(s=s.slice(1,-1)),s}return null}var bd="browser";function Hh(e){return e===bd}var qo=class{_doc;constructor(n){this._doc=n}manager},Js=(()=>{class e extends qo{constructor(t){super(t)}supports(t){return!0}addEventListener(t,r,o,i){return t.addEventListener(r,o,i),()=>this.removeEventListener(t,r,o,i)}removeEventListener(t,r,o,i){return t.removeEventListener(r,o,i)}static \u0275fac=function(r){return new(r||e)(M(L))};static \u0275prov=F({token:e,factory:e.\u0275fac})}return e})(),na=new g(""),Sd=(()=>{class e{_zone;_plugins;_eventNameToPlugin=new Map;constructor(t,r){this._zone=r,t.forEach(s=>{s.manager=this});let o=t.filter(s=>!(s instanceof Js));this._plugins=o.slice().reverse();let i=t.find(s=>s instanceof Js);i&&this._plugins.push(i)}addEventListener(t,r,o,i){return this._findPluginFor(r).addEventListener(t,r,o,i)}getZone(){return this._zone}_findPluginFor(t){let r=this._eventNameToPlugin.get(t);if(r)return r;if(r=this._plugins.find(i=>i.supports(t)),!r)throw new _(-5101,!1);return this._eventNameToPlugin.set(t,r),r}static \u0275fac=function(r){return new(r||e)(M(na),M(z))};static \u0275prov=F({token:e,factory:e.\u0275fac})}return e})(),_d="ng-app-id";function Uh(e){for(let n of e)n.remove()}function $h(e,n){let t=n.createElement("style");return t.textContent=e,t}function IS(e,n,t,r){let o=e.head?.querySelectorAll(`style[${_d}="${n}"],link[${_d}="${n}"]`);if(!o||o.length===0)return!1;for(let i of o)i.removeAttribute(_d),i instanceof HTMLLinkElement?r.set(i.href.slice(i.href.lastIndexOf("/")+1),{usage:0,elements:[i]}):i.textContent&&t.set(i.textContent,{usage:0,elements:[i]});return!0}function wd(e,n){let t=n.createElement("link");return t.setAttribute("rel","stylesheet"),t.setAttribute("href",e),t}var Id=(()=>{class e{doc;appId;nonce;inline=new Map;external=new Map;hosts=new Set;constructor(t,r,o,i={}){this.doc=t,this.appId=r,this.nonce=o,IS(t,r,this.inline,this.external)&&this.hosts.add(t.head)}addStyles(t,r){for(let o of t)this.addUsage(o,this.inline,$h);r?.forEach(o=>this.addUsage(o,this.external,wd))}removeStyles(t,r){for(let o of t)this.removeUsage(o,this.inline);r?.forEach(o=>this.removeUsage(o,this.external))}addUsage(t,r,o){let i=r.get(t);i?i.usage++:r.set(t,{usage:1,elements:[...this.hosts].map(s=>this.addElement(s,o(t,this.doc)))})}removeUsage(t,r){let o=r.get(t);o&&(o.usage--,o.usage<=0&&(Uh(o.elements),r.delete(t)))}ngOnDestroy(){for(let[,{elements:t}]of[...this.inline,...this.external])Uh(t);this.hosts.clear()}addHost(t){if(!this.hosts.has(t)){this.hosts.add(t);for(let[r,{elements:o}]of this.inline)o.push(this.addElement(t,$h(r,this.doc)));for(let[r,{elements:o}]of this.external)o.push(this.addElement(t,wd(r,this.doc)))}}removeHost(t){this.hosts.delete(t);for(let r of[...this.inline.values(),...this.external.values()]){let o=[];for(let i of r.elements)i.parentNode===t?i.remove():o.push(i);r.elements=o}}addElement(t,r){return this.nonce&&r.setAttribute("nonce",this.nonce),t.appendChild(r)}static \u0275fac=function(r){return new(r||e)(M(L),M(Fn),M(Vn,8),M(Ln))};static \u0275prov=F({token:e,factory:e.\u0275fac})}return e})(),Ed={svg:"http://www.w3.org/2000/svg",xhtml:"http://www.w3.org/1999/xhtml",xlink:"http://www.w3.org/1999/xlink",xml:"http://www.w3.org/XML/1998/namespace",xmlns:"http://www.w3.org/2000/xmlns/",math:"http://www.w3.org/1998/Math/MathML"},Dd=/%COMP%/g;var Gh="%COMP%",DS=`_nghost-${Gh}`,CS=`_ngcontent-${Gh}`,NS=!0,TS=new g("",{factory:()=>NS}),MS=new g("");function xS(e){return CS.replace(Dd,e)}function AS(e){return DS.replace(Dd,e)}function Wh(e,n){return n.map(t=>t.replace(Dd,e))}var Cd=(()=>{class e{eventManager;sharedStylesHost;appId;removeStylesOnCompDestroy;doc;ngZone;nonce;tracingService;rendererByCompId=new Map;defaultRenderer;cssVarNamespace;constructor(t,r,o,i,s,a,c=null,l=null,d=null){this.eventManager=t,this.sharedStylesHost=r,this.appId=o,this.removeStylesOnCompDestroy=i,this.doc=s,this.ngZone=a,this.nonce=c,this.tracingService=l,this.cssVarNamespace=d??"",this.defaultRenderer=new Zo(t,s,a,this.tracingService,this.cssVarNamespace)}createRenderer(t,r){if(!t||!r)return this.defaultRenderer;let o=this.getOrCreateRenderer(t,r);return o instanceof ta?o.applyToHost(t):o instanceof Yo&&o.applyStyles(),o}getOrCreateRenderer(t,r){let o=this.rendererByCompId,i=o.get(r.id);if(!i){let s=this.doc,a=this.ngZone,c=this.eventManager,l=this.sharedStylesHost,d=this.removeStylesOnCompDestroy,u=this.tracingService;switch(r.encapsulation){case Je.Emulated:i=new ta(c,l,r,this.appId,d,s,a,u,this.cssVarNamespace);break;case Je.ShadowDom:return new ea(c,t,r,s,a,this.nonce,u,this.cssVarNamespace,l);case Je.ExperimentalIsolatedShadowDom:return new ea(c,t,r,s,a,this.nonce,u,this.cssVarNamespace);default:i=new Yo(c,l,r,d,s,a,u,this.cssVarNamespace);break}o.set(r.id,i)}return i}ngOnDestroy(){this.rendererByCompId.clear()}componentReplaced(t){this.rendererByCompId.delete(t)}static \u0275fac=function(r){return new(r||e)(M(Sd),M(Wn),M(Fn),M(TS),M(L),M(z),M(Vn),M(Mt,8),M(MS,8))};static \u0275prov=F({token:e,factory:e.\u0275fac})}return e})(),Zo=class{eventManager;doc;ngZone;tracingService;cssVarNamespace;data=Object.create(null);throwOnSyntheticProps=!0;constructor(n,t,r,o,i=""){this.eventManager=n,this.doc=t,this.ngZone=r,this.tracingService=o,this.cssVarNamespace=i}destroy(){}destroyNode=null;createElement(n,t){return t?this.doc.createElementNS(Ed[t]||t,n):this.doc.createElement(n)}createComment(n){return this.doc.createComment(n)}createText(n){return this.doc.createTextNode(n)}appendChild(n,t){(zh(n)?n.content:n).appendChild(t)}insertBefore(n,t,r){n&&(zh(n)?n.content:n).insertBefore(t,r)}removeChild(n,t){t.remove()}selectRootElement(n,t){let r=typeof n=="string"?this.doc.querySelector(n):n;if(!r)throw new _(-5104,!1);return t||(r.textContent=""),r}parentNode(n){return n.parentNode}nextSibling(n){return n.nextSibling}setAttribute(n,t,r,o){if(o){t=o+":"+t;let i=Ed[o];i?n.setAttributeNS(i,t,r):n.setAttribute(t,r)}else n.setAttribute(t,r)}removeAttribute(n,t,r){if(r){let o=Ed[r];o?n.removeAttributeNS(o,t):n.removeAttribute(`${r}:${t}`)}else n.removeAttribute(t)}addClass(n,t){n.classList.add(t)}removeClass(n,t){n.classList.remove(t)}setStyle(n,t,r,o){let i=t.startsWith("--");i&&(t=t.replace("%NS%",this.cssVarNamespace)),i||o&(Ct.DashCase|Ct.Important)?n.style.setProperty(t,r,o&Ct.Important?"important":""):n.style[t]=r}removeStyle(n,t,r){let o=t.startsWith("--");o&&(t=t.replace("%NS%",this.cssVarNamespace)),o||r&Ct.DashCase?n.style.removeProperty(t):n.style[t]=""}setProperty(n,t,r){n!=null&&(n[t]=r)}setValue(n,t){n.nodeValue=t}listen(n,t,r,o){if(typeof n=="string"&&(n=Ge().getGlobalEventTarget(this.doc,n),!n))throw new _(-5102,!1);let i=this.decoratePreventDefault(r);return this.tracingService?.wrapEventListener&&(i=this.tracingService.wrapEventListener(n,t,i)),this.eventManager.addEventListener(n,t,i,o)}decoratePreventDefault(n){return t=>{if(t==="__ngUnwrap__")return n;n(t)===!1&&t.preventDefault()}}};function zh(e){return e.tagName==="TEMPLATE"&&e.content!==void 0}var ea=class extends Zo{hostEl;sharedStylesHost;shadowRoot;constructor(n,t,r,o,i,s,a,c,l){super(n,o,i,a,c),this.hostEl=t,this.sharedStylesHost=l,this.shadowRoot=t.attachShadow({mode:"open"}),this.sharedStylesHost&&this.sharedStylesHost.addHost(this.shadowRoot);let d=r.styles;d=Wh(r.id,d).map(m=>m.replace(/%NS%/g,c));for(let m of d){let f=document.createElement("style");s&&f.setAttribute("nonce",s),f.textContent=m,this.shadowRoot.appendChild(f)}let u=r.getExternalStyles?.();if(u)for(let m of u){let f=wd(m,o);s&&f.setAttribute("nonce",s),this.shadowRoot.appendChild(f)}}nodeOrShadowRoot(n){return n===this.hostEl?this.shadowRoot:n}appendChild(n,t){return super.appendChild(this.nodeOrShadowRoot(n),t)}insertBefore(n,t,r){return super.insertBefore(this.nodeOrShadowRoot(n),t,r)}removeChild(n,t){return super.removeChild(null,t)}parentNode(n){return this.nodeOrShadowRoot(super.parentNode(this.nodeOrShadowRoot(n)))}destroy(){this.sharedStylesHost&&this.sharedStylesHost.removeHost(this.shadowRoot)}},Yo=class extends Zo{sharedStylesHost;removeStylesOnCompDestroy;styles;styleUrls;constructor(n,t,r,o,i,s,a,c,l){super(n,i,s,a,c),this.sharedStylesHost=t,this.removeStylesOnCompDestroy=o;let d=r.styles,u=l?Wh(l,d):d;this.styles=u.map(m=>m.replace(/%NS%/g,c)),this.styleUrls=r.getExternalStyles?.(l)}applyStyles(){this.sharedStylesHost.addStyles(this.styles,this.styleUrls)}destroy(){this.removeStylesOnCompDestroy&&Hn.size===0&&this.sharedStylesHost.removeStyles(this.styles,this.styleUrls)}},ta=class extends Yo{contentAttr;hostAttr;constructor(n,t,r,o,i,s,a,c,l){let d=o+"-"+r.id;super(n,t,r,i,s,a,c,l,d),this.contentAttr=xS(d),this.hostAttr=AS(d)}applyToHost(n){this.applyStyles(),this.setAttribute(n,this.hostAttr,"")}createElement(n,t){let r=super.createElement(n,t);return super.setAttribute(r,this.contentAttr,""),r}};var ra=class e extends Go{supportsDOMEvents=!0;static makeCurrent(){yd(new e)}onAndCancel(n,t,r,o){return n.addEventListener(t,r,o),()=>{n.removeEventListener(t,r,o)}}dispatchEvent(n,t){n.dispatchEvent(t)}remove(n){n.remove()}createElement(n,t){return t=t||this.getDefaultDocument(),t.createElement(n)}createHtmlDocument(){return document.implementation.createHTMLDocument("fakeTitle")}getDefaultDocument(){return document}isElementNode(n){return n.nodeType===Node.ELEMENT_NODE}isShadowRoot(n){return n instanceof DocumentFragment}getGlobalEventTarget(n,t){return t==="window"?window:t==="document"?n:t==="body"?n.body:null}getBaseHref(n){let t=RS();return t==null?null:kS(t)}resetBaseElement(){Qo=null}getUserAgent(){return window.navigator.userAgent}getCookie(n){return Wo(document.cookie,n)}},Qo=null;function RS(){return Qo=Qo||document.head.querySelector("base"),Qo?Qo.getAttribute("href"):null}function kS(e){return new URL(e,document.baseURI).pathname}var qh=["alt","control","meta","shift"],OS={"\b":"Backspace","	":"Tab","\x7F":"Delete","\x1B":"Escape",Del:"Delete",Esc:"Escape",Left:"ArrowLeft",Right:"ArrowRight",Up:"ArrowUp",Down:"ArrowDown",Menu:"ContextMenu",Scroll:"ScrollLock",Win:"OS"},PS={alt:e=>e.altKey,control:e=>e.ctrlKey,meta:e=>e.metaKey,shift:e=>e.shiftKey},Zh=(()=>{class e extends qo{constructor(t){super(t)}supports(t){return e.parseEventName(t)!=null}addEventListener(t,r,o,i){let s=e.parseEventName(r),a=e.eventCallback(s.fullKey,o,this.manager.getZone());return this.manager.getZone().runOutsideAngular(()=>Ge().onAndCancel(t,s.domEventName,a,i))}static parseEventName(t){let r=t.toLowerCase().split("."),o=r.shift();if(r.length===0||!(o==="keydown"||o==="keyup"))return null;let i=e._normalizeKey(r.pop()),s="",a=r.indexOf("code");if(a>-1&&(r.splice(a,1),s="code."),qh.forEach(l=>{let d=r.indexOf(l);d>-1&&(r.splice(d,1),s+=l+".")}),s+=i,r.length!=0||i.length===0)return null;let c={};return c.domEventName=o,c.fullKey=s,c}static matchEventFullKeyCode(t,r){let o=OS[t.key]||t.key,i="";return r.indexOf("code.")>-1&&(o=t.code,i="code."),o==null||!o?!1:(o=o.toLowerCase(),o===" "?o="space":o==="."&&(o="dot"),qh.forEach(s=>{if(s!==o){let a=PS[s];a(t)&&(i+=s+".")}}),i+=o,i===r)}static eventCallback(t,r,o){return i=>{e.matchEventFullKeyCode(i,t)&&o.runGuarded(()=>r(i))}}static _normalizeKey(t){return t==="esc"?"escape":t}static \u0275fac=function(r){return new(r||e)(M(L))};static \u0275prov=F({token:e,factory:e.\u0275fac})}return e})();async function Nd(e,n,t){let r=w({rootComponent:e},FS(n,t));return Lh(r)}function FS(e,n){return{platformRef:n?.platformRef,appProviders:[...HS,...e?.providers??[]],platformProviders:BS}}function LS(){ra.makeCurrent()}function VS(){return new Ee}function jS(){return Rl(document),document}var BS=[{provide:Ln,useValue:bd},{provide:us,useValue:LS,multi:!0},{provide:L,useFactory:jS}];var HS=[{provide:Eo,useValue:"root"},{provide:Ee,useFactory:VS},{provide:na,useClass:Js,multi:!0},{provide:na,useClass:Zh,multi:!0},Cd,{provide:Wn,useClass:Id},{provide:Id,useExisting:Wn},Sd,{provide:et,useExisting:Cd},[]];var Ot=class e{headers;normalizedNames=new Map;lazyInit;lazyUpdate=null;constructor(n){n?typeof n=="string"?this.lazyInit=()=>{this.headers=new Map,n.split(`
`).forEach(t=>{let r=t.indexOf(":");if(r>0){let o=t.slice(0,r),i=t.slice(r+1).trim();this.addHeaderEntry(o,i)}})}:typeof Headers<"u"&&n instanceof Headers?(this.headers=new Map,n.forEach((t,r)=>{this.addHeaderEntry(r,t)})):this.lazyInit=()=>{this.headers=new Map,Object.entries(n).forEach(([t,r])=>{this.setHeaderEntries(t,r)})}:this.headers=new Map}has(n){return this.init(),this.headers.has(n.toLowerCase())}get(n){this.init();let t=this.headers.get(n.toLowerCase());return t&&t.length>0?t[0]:null}keys(){return this.init(),Array.from(this.normalizedNames.values())}getAll(n){return this.init(),this.headers.get(n.toLowerCase())||null}append(n,t){return this.clone({name:n,value:t,op:"a"})}set(n,t){return this.clone({name:n,value:t,op:"s"})}delete(n,t){return this.clone({name:n,value:t,op:"d"})}maybeSetNormalizedName(n,t){this.normalizedNames.has(t)||this.normalizedNames.set(t,n)}init(){this.lazyInit&&(this.lazyInit instanceof e?this.copyFrom(this.lazyInit):this.lazyInit(),this.lazyInit=null,this.lazyUpdate&&(this.lazyUpdate.forEach(n=>this.applyUpdate(n)),this.lazyUpdate=null))}copyFrom(n){n.init();for(let[t,r]of n.headers.entries())this.headers.set(t,r),this.normalizedNames.set(t,n.normalizedNames.get(t))}clone(n){let t=new e;return t.lazyInit=this.lazyInit&&this.lazyInit instanceof e?this.lazyInit:this,t.lazyUpdate=(this.lazyUpdate||[]).concat([n]),t}applyUpdate(n){let t=n.name.toLowerCase();switch(n.op){case"a":case"s":let r=n.value;if(typeof r=="string"&&(r=[r]),r.length===0)return;this.maybeSetNormalizedName(n.name,t);let o=n.op==="a"?(this.headers.get(t)||[]).slice():[];o.push(...r),this.headers.set(t,o);break;case"d":let i=n.value;if(i===void 0)this.headers.delete(t),this.normalizedNames.delete(t);else{let s=Array.isArray(i)?i:[i],a=this.headers.get(t);if(!a)return;a=a.filter(c=>s.indexOf(c)===-1),a.length===0?(this.headers.delete(t),this.normalizedNames.delete(t)):this.headers.set(t,a)}break}}addHeaderEntry(n,t){let r=n.toLowerCase();this.maybeSetNormalizedName(n,r),this.headers.has(r)?this.headers.get(r).push(t):this.headers.set(r,[t])}setHeaderEntries(n,t){let r=(Array.isArray(t)?t:[t]).map(i=>i.toString()),o=n.toLowerCase();this.headers.set(o,r),this.maybeSetNormalizedName(n,o)}forEach(n){this.init(),Array.from(this.normalizedNames.keys()).forEach(t=>n(this.normalizedNames.get(t),this.headers.get(t)))}};var Ad=class{map=new Map;set(n,t){return this.map.set(n,t),this}get(n){return this.map.has(n)||this.map.set(n,n.defaultValue()),this.map.get(n)}delete(n){return this.map.delete(n),this}has(n){return this.map.has(n)}keys(){return this.map.keys()}},Rd=class{encodeKey(n){return Yh(n)}encodeValue(n){return Yh(n)}decodeKey(n){return decodeURIComponent(n)}decodeValue(n){return decodeURIComponent(n)}};function US(e,n){let t=new Map;return e.length>0&&e.replace(/^\?/,"").split("&").forEach(o=>{let i=o.indexOf("="),[s,a]=i==-1?[n.decodeKey(o),""]:[n.decodeKey(o.slice(0,i)),n.decodeValue(o.slice(i+1))],c=t.get(s)||[];c.push(a),t.set(s,c)}),t}var $S=/%(\d[a-f0-9])/gi,zS={40:"@","3A":":",24:"$","2C":",","3B":";","3D":"=","3F":"?","2F":"/"};function Yh(e){return encodeURIComponent(e).replace($S,(n,t)=>zS[t]??n)}function oa(e){return`${e}`}var kt=class e{map;encoder;updates=null;cloneFrom=null;constructor(n={}){if(this.encoder=n.encoder||new Rd,n.fromString){if(n.fromObject)throw new _(2805,!1);this.map=US(n.fromString,this.encoder)}else n.fromObject?(this.map=new Map,Object.keys(n.fromObject).forEach(t=>{let r=n.fromObject[t],o=Array.isArray(r)?r.map(oa):[oa(r)];this.map.set(t,o)})):this.map=null}has(n){return this.init(),this.map.has(n)}get(n){this.init();let t=this.map.get(n);return t?t[0]:null}getAll(n){return this.init(),this.map.get(n)||null}keys(){return this.init(),Array.from(this.map.keys())}append(n,t){return this.clone({param:n,value:t,op:"a"})}appendAll(n){let t=[];return Object.keys(n).forEach(r=>{let o=n[r];Array.isArray(o)?o.forEach(i=>{t.push({param:r,value:i,op:"a"})}):t.push({param:r,value:o,op:"a"})}),this.clone(t)}set(n,t){return this.clone({param:n,value:t,op:"s"})}delete(n,t){return this.clone({param:n,value:t,op:"d"})}toString(){return this.init(),this.keys().map(n=>{let t=this.encoder.encodeKey(n);return this.map.get(n).map(r=>t+"="+this.encoder.encodeValue(r)).join("&")}).filter(n=>n!=="").join("&")}clone(n){let t=new e({encoder:this.encoder});return t.cloneFrom=this.cloneFrom||this,t.updates=(this.updates||[]).concat(n),t}init(){if(this.map===null&&(this.map=new Map),this.cloneFrom!==null){this.cloneFrom.init();for(let[n,t]of this.cloneFrom.map.entries())this.map.set(n,t);this.updates.forEach(n=>{switch(n.op){case"a":case"s":let t=n.op==="a"?(this.map.get(n.param)||[]).slice():[];t.push(oa(n.value)),this.map.set(n.param,t);break;case"d":if(n.value!==void 0){let r=(this.map.get(n.param)||[]).slice(),o=r.indexOf(oa(n.value));o!==-1&&r.splice(o,1),r.length>0?this.map.set(n.param,r):this.map.delete(n.param)}else{this.map.delete(n.param);break}}}),this.cloneFrom=this.updates=null}}};function GS(e){switch(e){case"DELETE":case"GET":case"HEAD":case"OPTIONS":case"JSONP":return!1;default:return!0}}function Qh(e){return typeof ArrayBuffer<"u"&&e instanceof ArrayBuffer}function Kh(e){return typeof Blob<"u"&&e instanceof Blob}function Xh(e){return typeof FormData<"u"&&e instanceof FormData}function WS(e){return typeof URLSearchParams<"u"&&e instanceof URLSearchParams}var Td="Content-Type",Jh="Accept",tg="text/plain",ng="application/json",qS=`${ng}, ${tg}, */*`,Hr=class e{url;body=null;headers;context;reportProgress=!1;reportUploadProgress=!1;reportDownloadProgress=!1;withCredentials=!1;credentials;keepalive=!1;cache;priority;mode;redirect;referrer;integrity;referrerPolicy;responseType="json";method;params;urlWithParams;transferCache;timeout;constructor(n,t,r,o){this.url=t,this.method=n.toUpperCase();let i;if(GS(this.method)||o?(this.body=r!==void 0?r:null,i=o):i=r,i){if(this.reportProgress=!!i.reportProgress,this.reportUploadProgress=!!i.reportUploadProgress,this.reportDownloadProgress=!!i.reportDownloadProgress,this.withCredentials=!!i.withCredentials,this.keepalive=!!i.keepalive,i.responseType&&(this.responseType=i.responseType),i.headers&&(this.headers=i.headers),i.context&&(this.context=i.context),i.params&&(this.params=i.params),i.priority&&(this.priority=i.priority),i.cache&&(this.cache=i.cache),i.credentials&&(this.credentials=i.credentials),typeof i.timeout=="number"){if(i.timeout<1||!Number.isInteger(i.timeout))throw new _(2822,"");this.timeout=i.timeout}i.mode&&(this.mode=i.mode),i.redirect&&(this.redirect=i.redirect),i.integrity&&(this.integrity=i.integrity),i.referrer!==void 0&&(this.referrer=i.referrer),i.referrerPolicy&&(this.referrerPolicy=i.referrerPolicy),this.transferCache=i.transferCache}if(this.headers??=new Ot,this.context??=new Ad,!this.params)this.params=new kt,this.urlWithParams=t;else{let s=this.params.toString();if(s.length===0)this.urlWithParams=t;else{let a=t,c="",l=t.indexOf("#");l!==-1&&(c=t.substring(l),a=t.substring(0,l));let d=a.indexOf("?"),u=d===-1?"?":d<a.length-1?"&":"";this.urlWithParams=a+u+s+c}}}serializeBody(){return this.body===null?null:typeof this.body=="string"||Qh(this.body)||Kh(this.body)||Xh(this.body)||WS(this.body)?this.body:this.body instanceof kt?this.body.toString():typeof this.body=="object"||typeof this.body=="boolean"||Array.isArray(this.body)?JSON.stringify(this.body):this.body.toString()}detectContentTypeHeader(){return this.body===null||Xh(this.body)?null:Kh(this.body)?this.body.type||null:Qh(this.body)?null:typeof this.body=="string"?tg:this.body instanceof kt?"application/x-www-form-urlencoded;charset=UTF-8":typeof this.body=="object"||typeof this.body=="number"||typeof this.body=="boolean"?ng:null}clone(n={}){let t=n.method||this.method,r=n.url||this.url,o=n.responseType||this.responseType,i=n.keepalive??this.keepalive,s=n.priority||this.priority,a=n.cache||this.cache,c=n.mode||this.mode,l=n.redirect||this.redirect,d=n.credentials||this.credentials,u=n.referrer??this.referrer,m=n.integrity||this.integrity,f=n.referrerPolicy||this.referrerPolicy,h=n.transferCache??this.transferCache,b=n.timeout??this.timeout,C=n.body!==void 0?n.body:this.body,k=n.withCredentials??this.withCredentials,be=n.reportProgress??this.reportProgress,on=n.reportUploadProgress??this.reportUploadProgress,Qr=n.reportDownloadProgress??this.reportDownloadProgress,Lt=n.headers||this.headers,Kr=n.params||this.params,Xr=n.context??this.context;return n.setHeaders!==void 0&&(Lt=Object.keys(n.setHeaders).reduce((rr,Vt)=>rr.set(Vt,n.setHeaders[Vt]),Lt)),n.setParams&&(Kr=Object.keys(n.setParams).reduce((rr,Vt)=>rr.set(Vt,n.setParams[Vt]),Kr)),new e(t,r,C,{params:Kr,headers:Lt,context:Xr,reportProgress:be,reportUploadProgress:on,reportDownloadProgress:Qr,responseType:o,withCredentials:k,transferCache:h,keepalive:i,cache:a,priority:s,timeout:b,mode:c,redirect:l,credentials:d,referrer:u,integrity:m,referrerPolicy:f})}},Kn=(function(e){return e[e.Sent=0]="Sent",e[e.UploadProgress=1]="UploadProgress",e[e.ResponseHeader=2]="ResponseHeader",e[e.DownloadProgress=3]="DownloadProgress",e[e.Response=4]="Response",e[e.User=5]="User",e})(Kn||{}),Ko=class{headers;status;statusText;url;ok;type;redirected;responseType;constructor(n,t=200,r="OK"){this.headers=n.headers||new Ot,this.status=n.status!==void 0?n.status:t,this.statusText=n.statusText||r,this.url=n.url||null,this.redirected=n.redirected,this.responseType=n.responseType,this.ok=this.status>=200&&this.status<300}},kd=class e extends Ko{constructor(n={}){super(n)}type=Kn.ResponseHeader;clone(n={}){return new e({headers:n.headers||this.headers,status:n.status!==void 0?n.status:this.status,statusText:n.statusText||this.statusText,url:n.url||this.url||void 0})}},Xo=class e extends Ko{body;constructor(n={}){super(n),this.body=n.body!==void 0?n.body:null}type=Kn.Response;clone(n={}){return new e({body:n.body!==void 0?n.body:this.body,headers:n.headers||this.headers,status:n.status!==void 0?n.status:this.status,statusText:n.statusText||this.statusText,url:n.url||this.url||void 0,redirected:n.redirected??this.redirected,responseType:n.responseType??this.responseType})}},Qn=class extends Ko{name="HttpErrorResponse";message;error;ok=!1;constructor(n){super(n,0,"Unknown Error"),this.status>=200&&this.status<300?this.message=`Http failure during parsing for ${n.url||"(unknown url)"}`:this.message=`Http failure response for ${n.url||"(unknown url)"}: ${n.status} ${n.statusText}`,this.error=n.error||null}},ZS=200;var YS=/^\)\]\}',?\n/,$1=1024*1024,QS=new g("",{factory:()=>null}),KS=(()=>{class e{fetchImpl=p(Od,{optional:!0})?.fetch??((...t)=>globalThis.fetch(...t));ngZone=p(z);destroyRef=p(xe);maxResponseSize=p(QS);handle(t){return new O(r=>{let o=new AbortController,i=!1,s={next:c=>{c.type===Kn.Response&&(i=!0),r.next(c)},error:c=>{i=!0,r.error(c)},complete:()=>{i=!0,r.complete()}};this.doRequest(t,o.signal,s).then(Pd,c=>s.error(new Qn({error:c})));let a;return t.timeout&&(a=this.ngZone.runOutsideAngular(()=>setTimeout(()=>{o.signal.aborted||o.abort(new DOMException("signal timed out","TimeoutError"))},t.timeout))),()=>{a!==void 0&&clearTimeout(a),!i&&!o.signal.aborted&&o.abort()}})}async doRequest(t,r,o){let i=this.createRequestInit(t),s;try{let C=this.ngZone.runOutsideAngular(()=>this.fetchImpl(t.urlWithParams,w({signal:r},i)));XS(C),o.next({type:Kn.Sent}),s=await C}catch(C){o.error(new Qn({error:C,status:C.status??0,statusText:C.statusText,url:t.urlWithParams,headers:C.headers}));return}let a=new Ot(s.headers),c=s.statusText,l=s.url||t.urlWithParams,d=s.status,u=null,m=t.reportProgress||t.reportDownloadProgress;if(m&&o.next(new kd({headers:a,status:d,statusText:c,url:l})),s.body){let C=s.headers.get(Td)??"",k=s.headers.get("content-length"),be=k!==null?Number(k):NaN;this.maxResponseSize!==null&&Number.isFinite(be)&&be>this.maxResponseSize&&eg(this.maxResponseSize);let on=[],Qr=s.body.getReader(),Lt=0,Kr,Xr,rr=typeof Zone<"u"&&Zone.current,Vt=!1;if(await this.ngZone.runOutsideAngular(async()=>{for(;;){if(this.destroyRef.destroyed){await Qr.cancel(),Vt=!0;break}let{done:Da,value:Ca}=await Qr.read();if(Da)break;if(on.push(Ca),Lt+=Ca.length,this.maxResponseSize!==null&&Lt>this.maxResponseSize&&(await Qr.cancel(),eg(this.maxResponseSize)),m){Xr=t.responseType==="text"?(Xr??"")+(Kr??=Md(C)).decode(Ca,{stream:!0}):void 0;let fu=()=>o.next({type:Kn.DownloadProgress,total:Number.isFinite(be)?be:void 0,loaded:Lt,partialText:Xr});rr?rr.run(fu):fu()}}}),Vt){o.complete();return}let vv=this.concatChunks(on,Lt);try{u=this.parseBody(t,vv,C,d)}catch(Da){o.error(new Qn({error:Da,headers:new Ot(s.headers),status:s.status,statusText:s.statusText,url:s.url||t.urlWithParams}));return}}d===0&&(d=u?ZS:0);let f=d>=200&&d<300,h=s.redirected,b=s.type;f?(o.next(new Xo({body:u,headers:a,status:d,statusText:c,url:l,redirected:h,responseType:b})),o.complete()):o.error(new Qn({error:u,headers:a,status:d,statusText:c,url:l,redirected:h,responseType:b}))}parseBody(t,r,o,i){switch(t.responseType){case"json":let s=Md(o).decode(r).replace(YS,"");if(s==="")return null;try{return JSON.parse(s)}catch(a){if(i<200||i>=300)return s;throw a}case"text":return Md(o).decode(r);case"blob":return new Blob([r],{type:o});case"arraybuffer":return r.buffer}}createRequestInit(t){if(t.reportUploadProgress)throw new _(2824,!1);let r={},o;if(o=t.credentials,t.withCredentials&&(o="include"),t.headers.forEach((i,s)=>r[i]=s.join(",")),t.headers.has(Jh)||(r[Jh]=qS),!t.headers.has(Td)){let i=t.detectContentTypeHeader();i!==null&&(r[Td]=i)}return{body:t.serializeBody(),method:t.method,headers:r,credentials:o,keepalive:t.keepalive,cache:t.cache,priority:t.priority,mode:t.mode,redirect:t.redirect,referrer:t.referrer,integrity:t.integrity,referrerPolicy:t.referrerPolicy}}concatChunks(t,r){let o=new Uint8Array(r),i=0;for(let s of t)o.set(s,i),i+=s.length;return o}static \u0275fac=function(r){return new(r||e)};static \u0275prov=Y({token:e,factory:e.\u0275fac})}return e})(),Od=class{};function Pd(){}function XS(e){e.then(Pd,Pd)}function eg(e){throw new _(-2825,!1)}var JS=/charset=\s*["']?([^;"'\s]+)["']?/i;function Md(e){let n=e.match(JS);if(n!==null)try{return new TextDecoder(n[1])}catch{}return new TextDecoder}var eI=new g("",{factory:()=>!0}),tI="XSRF-TOKEN",nI=new g("",{factory:()=>tI}),rI="X-XSRF-TOKEN",oI=new g("",{factory:()=>rI}),iI=(()=>{class e{cookieName=p(nI);doc=p(L);lastCookieString="";lastToken=null;parseCount=0;getToken(){let t=this.doc.cookie||"";return t!==this.lastCookieString&&(this.parseCount++,this.lastToken=Wo(t,this.cookieName),this.lastCookieString=t),this.lastToken}static \u0275fac=function(r){return new(r||e)};static \u0275prov=Y({token:e,factory:e.\u0275fac})}return e})(),sI=(()=>{class e{static \u0275fac=function(r){return new(r||e)};static \u0275prov=F({token:e,factory:function(r){let o=null;return r?o=new(r||e):o=M(iI),o},providedIn:"root"})}return e})();function aI(e,n){if(!p(eI)||e.method==="GET"||e.method==="HEAD")return n(e);try{let o=p(Xs).href,{origin:i}=new URL(o),{origin:s}=new URL(e.url,i);if(i!==s)return n(e)}catch{return n(e)}let t=p(sI).getToken(),r=p(oI);return t!=null&&!e.headers.has(r)&&(e=e.clone({headers:e.headers.set(r,t)})),n(e)}function cI(e,n){return n(e)}function lI(e,n,t){return(r,o)=>_r(t,()=>n(r,i=>e(i,o)))}var dI=new g("",{factory:()=>[aI]}),rg=new g(""),uI=new g("",{factory:()=>!0});var fI=(()=>{class e{static \u0275fac=function(r){return new(r||e)};static \u0275prov=F({token:e,factory:function(r){let o=null;return r?o=new(r||e):o=M(KS),o},providedIn:"root"})}return e})();var pI=(()=>{class e{backend;injector;chain=null;pendingTasks=p(No);contributeToStability=p(uI);constructor(t,r){this.backend=t,this.injector=r}handle(t){if(this.chain===null){let o=this.injector.get(og,null,{skipSelf:!0}),i=o!==null&&this.backend===o,s=this.injector.get(rg,[],i?{self:!0}:void 0),a=Array.from(new Set([...this.injector.get(dI),...s]));this.chain=a.reduceRight((c,l)=>lI(c,l,this.injector),cI)}let r=this.chain;if(this.contributeToStability){let o=this.pendingTasks.add();return Oe(()=>r(t,i=>this.backend.handle(i))).pipe(lo(o))}else return Oe(()=>r(t,o=>this.backend.handle(o)))}static \u0275fac=function(r){return new(r||e)(M(fI),M(ge))};static \u0275prov=F({token:e,factory:e.\u0275fac,providedIn:"root"})}return e})(),og=(()=>{class e{static \u0275fac=function(r){return new(r||e)};static \u0275prov=F({token:e,factory:function(r){let o=null;return r?o=new(r||e):o=M(pI),o},providedIn:"root"})}return e})();function xd(e,n){return w({body:n},e)}var Fd=(()=>{class e{handler;constructor(t){this.handler=t}request(t,r,o={}){let i;if(t instanceof Hr)i=t;else{let c;o.headers instanceof Ot?c=o.headers:c=new Ot(o.headers);let l;o.params&&(o.params instanceof kt?l=o.params:l=new kt({fromObject:o.params})),i=new Hr(t,r,o.body!==void 0?o.body:null,{headers:c,context:o.context,params:l,reportProgress:o.reportProgress,reportUploadProgress:o.reportUploadProgress,reportDownloadProgress:o.reportDownloadProgress,responseType:o.responseType||"json",withCredentials:o.withCredentials,transferCache:o.transferCache,keepalive:o.keepalive,priority:o.priority,cache:o.cache,mode:o.mode,redirect:o.redirect,credentials:o.credentials,referrer:o.referrer,referrerPolicy:o.referrerPolicy,integrity:o.integrity,timeout:o.timeout})}let s=Ye(i).pipe(za(c=>this.handler.handle(c)));if(t instanceof Hr||o.observe==="events")return s;let a=s.pipe(ao(c=>c instanceof Xo));switch(o.observe||"body"){case"body":switch(i.responseType){case"arraybuffer":return a.pipe(ie(c=>{if(c.body!==null&&!(c.body instanceof ArrayBuffer))throw new _(2806,!1);return c.body}));case"blob":return a.pipe(ie(c=>{if(c.body!==null&&!(c.body instanceof Blob))throw new _(2807,!1);return c.body}));case"text":return a.pipe(ie(c=>{if(c.body!==null&&typeof c.body!="string")throw new _(2808,!1);return c.body}));default:return a.pipe(ie(c=>c.body))}case"response":return a;default:throw new _(2809,!1)}}delete(t,r={}){return this.request("DELETE",t,r)}get(t,r={}){return this.request("GET",t,r)}head(t,r={}){return this.request("HEAD",t,r)}jsonp(t,r){return this.request("JSONP",t,{params:new kt().append(r,"JSONP_CALLBACK"),observe:"body",responseType:"json"})}options(t,r={}){return this.request("OPTIONS",t,r)}patch(t,r,o={}){return this.request("PATCH",t,xd(o,r))}post(t,r,o={}){return this.request("POST",t,xd(o,r))}put(t,r,o={}){return this.request("PUT",t,xd(o,r))}static \u0275fac=function(r){return new(r||e)(M(og))};static \u0275prov=F({token:e,factory:e.\u0275fac,providedIn:"root"})}return e})();var Ld=(()=>{class e{static \u0275fac=function(r){return new(r||e)};static \u0275prov=F({token:e,factory:function(r){let o=null;return r?o=new(r||e):o=M(hI),o},providedIn:"root"})}return e})(),hI=(()=>{class e extends Ld{_doc=p(L);sanitize(t,r){if(r==null)return null;switch(t){case Ie.NONE:return r;case Ie.HTML:return zn(r,"HTML")?ct(r):Vl(this._doc,String(r)).toString();case Ie.STYLE:return zn(r,"Style")?ct(r):r;case Ie.SCRIPT:if(zn(r,"Script"))return ct(r);throw new _(5200,!1);case Ie.URL:return zn(r,"URL")?ct(r):Hs(String(r));case Ie.RESOURCE_URL:if(zn(r,"ResourceURL"))return ct(r);throw new _(-5201,!1);default:throw new _(5202,!1)}}bypassSecurityTrustHtml(t){return kl(t)}bypassSecurityTrustStyle(t){return Ol(t)}bypassSecurityTrustScript(t){return Pl(t)}bypassSecurityTrustUrl(t){return Fl(t)}bypassSecurityTrustResourceUrl(t){return Ll(t)}static \u0275fac=function(r){return new(r||e)};static \u0275prov=Y({token:e,factory:e.\u0275fac})}return e})();var ig={providers:[fd()]};function Jo(e){return e.buttons===0||e.detail===0}function ei(e){let n=e.touches&&e.touches[0]||e.changedTouches&&e.changedTouches[0];return!!n&&n.identifier===-1&&(n.radiusX==null||n.radiusX===1)&&(n.radiusY==null||n.radiusY===1)}var Vd;function sg(){if(Vd==null){let e=typeof document<"u"?document.head:null;Vd=!!(e&&(e.createShadowRoot||e.attachShadow))}return Vd}function jd(e){if(sg()){let n=e.getRootNode?e.getRootNode():null;if(typeof ShadowRoot<"u"&&ShadowRoot&&n instanceof ShadowRoot)return n}return null}function tt(e){if(e.composedPath)try{return e.composedPath()[0]}catch{}return e.target}var Bd;try{Bd=typeof Intl<"u"&&Intl.v8BreakIterator}catch{Bd=!1}var We=(()=>{class e{_platformId=p(Ln);isBrowser=this._platformId?Hh(this._platformId):typeof document=="object"&&!!document;EDGE=this.isBrowser&&/(edge)/i.test(navigator.userAgent);TRIDENT=this.isBrowser&&/(msie|trident)/i.test(navigator.userAgent);BLINK=this.isBrowser&&!!(window.chrome||Bd)&&typeof CSS<"u"&&!this.EDGE&&!this.TRIDENT;WEBKIT=this.isBrowser&&/AppleWebKit/i.test(navigator.userAgent)&&!this.BLINK&&!this.EDGE&&!this.TRIDENT;IOS=this.isBrowser&&/iPad|iPhone|iPod/.test(navigator.userAgent)&&!("MSStream"in window);FIREFOX=this.isBrowser&&/(firefox|minefield)/i.test(navigator.userAgent);ANDROID=this.isBrowser&&/android/i.test(navigator.userAgent)&&!this.TRIDENT;SAFARI=this.isBrowser&&/safari/i.test(navigator.userAgent)&&this.WEBKIT;static \u0275fac=function(r){return new(r||e)};static \u0275prov=Y({token:e,factory:e.\u0275fac})}return e})();var ti;function ag(){if(ti==null&&typeof window<"u")try{window.addEventListener("test",null,Object.defineProperty({},"passive",{get:()=>ti=!0}))}finally{ti=ti||!1}return ti}function Ur(e){return ag()?e:!!e.capture}function nn(e){return e instanceof q?e.nativeElement:e}var cg=new g("cdk-input-modality-detector-options"),lg={ignoreKeys:[18,17,224,91,16]},dg=650,Hd={passive:!0,capture:!0},ug=(()=>{class e{_platform=p(We);_listenerCleanups;modalityDetected;modalityChanged;get mostRecentModality(){return this._modality.value}_mostRecentTarget=null;_modality=new gn(null);_options;_lastTouchMs=0;_onKeydown=t=>{this._options?.ignoreKeys?.some(r=>r===t.keyCode)||(this._modality.next("keyboard"),this._mostRecentTarget=tt(t))};_onMousedown=t=>{Date.now()-this._lastTouchMs<dg||(this._modality.next(Jo(t)?"keyboard":"mouse"),this._mostRecentTarget=tt(t))};_onTouchstart=t=>{if(ei(t)){this._modality.next("keyboard");return}this._lastTouchMs=Date.now(),this._modality.next("touch"),this._mostRecentTarget=tt(t)};constructor(){let t=p(z),r=p(L),o=p(cg,{optional:!0});if(this._options=w(w({},lg),o),this.modalityDetected=this._modality.pipe(Za(1)),this.modalityChanged=this.modalityDetected.pipe(Ga()),this._platform.isBrowser){let i=p(et).createRenderer(null,null);this._listenerCleanups=t.runOutsideAngular(()=>[i.listen(r,"keydown",this._onKeydown,Hd),i.listen(r,"mousedown",this._onMousedown,Hd),i.listen(r,"touchstart",this._onTouchstart,Hd)])}}ngOnDestroy(){this._modality.complete(),this._listenerCleanups?.forEach(t=>t())}static \u0275fac=function(r){return new(r||e)};static \u0275prov=Y({token:e,factory:e.\u0275fac})}return e})(),ni=(function(e){return e[e.IMMEDIATE=0]="IMMEDIATE",e[e.EVENTUAL=1]="EVENTUAL",e})(ni||{}),fg=new g("cdk-focus-monitor-default-options"),ia=Ur({passive:!0,capture:!0}),Xn=(()=>{class e{_ngZone=p(z);_platform=p(We);_inputModalityDetector=p(ug);_origin=null;_lastFocusOrigin=null;_windowFocused=!1;_windowFocusTimeoutId;_originTimeoutId;_originFromTouchInteraction=!1;_elementInfo=new Map;_monitoredElementCount=0;_rootNodeFocusListenerCount=new Map;_detectionMode;_windowFocusListener=()=>{this._windowFocused=!0,this._windowFocusTimeoutId=setTimeout(()=>this._windowFocused=!1)};_document=p(L);_stopInputModalityDetector=new de;constructor(){let t=p(fg,{optional:!0});this._detectionMode=t?.detectionMode||ni.IMMEDIATE}_rootNodeFocusAndBlurListener=t=>{let r=tt(t);for(let o=r;o;o=o.parentElement)t.type==="focus"?this._onFocus(t,o):this._onBlur(t,o)};monitor(t,r=!1){let o=nn(t);if(!this._platform.isBrowser||o.nodeType!==1)return Ye();let i=jd(o)||this._document,s=this._elementInfo.get(o);if(s)return r&&(s.checkChildren=!0),s.subject;let a={checkChildren:r,subject:new de,rootNode:i};return this._elementInfo.set(o,a),this._registerGlobalListeners(a),a.subject}stopMonitoring(t){let r=nn(t),o=this._elementInfo.get(r);o&&(o.subject.complete(),this._setClasses(r),this._elementInfo.delete(r),this._removeGlobalListeners(o))}focusVia(t,r,o){let i=nn(t),s=this._document.activeElement;i===s?this._getClosestElementsInfo(i).forEach(([a,c])=>this._originChanged(a,r,c)):(this._setOrigin(r),typeof i.focus=="function"&&i.focus(o))}ngOnDestroy(){this._elementInfo.forEach((t,r)=>this.stopMonitoring(r))}_getWindow(){return this._document.defaultView||window}_getFocusOrigin(t){return this._origin?this._originFromTouchInteraction?this._shouldBeAttributedToTouch(t)?"touch":"program":this._origin:this._windowFocused&&this._lastFocusOrigin?this._lastFocusOrigin:t&&this._isLastInteractionFromInputLabel(t)?"mouse":"program"}_shouldBeAttributedToTouch(t){return this._detectionMode===ni.EVENTUAL||!!t?.contains(this._inputModalityDetector._mostRecentTarget)}_setClasses(t,r){t.classList.toggle("cdk-focused",!!r),t.classList.toggle("cdk-touch-focused",r==="touch"),t.classList.toggle("cdk-keyboard-focused",r==="keyboard"),t.classList.toggle("cdk-mouse-focused",r==="mouse"),t.classList.toggle("cdk-program-focused",r==="program")}_setOrigin(t,r=!1){this._ngZone.runOutsideAngular(()=>{if(this._origin=t,this._originFromTouchInteraction=t==="touch"&&r,this._detectionMode===ni.IMMEDIATE){clearTimeout(this._originTimeoutId);let o=this._originFromTouchInteraction?dg:1;this._originTimeoutId=setTimeout(()=>this._origin=null,o)}})}_onFocus(t,r){let o=this._elementInfo.get(r),i=tt(t);!o||!o.checkChildren&&r!==i||this._originChanged(r,this._getFocusOrigin(i),o)}_onBlur(t,r){let o=this._elementInfo.get(r);!o||o.checkChildren&&t.relatedTarget instanceof Node&&r.contains(t.relatedTarget)||(this._setClasses(r),this._emitOrigin(o,null))}_emitOrigin(t,r){t.subject.observers.length&&this._ngZone.run(()=>t.subject.next(r))}_registerGlobalListeners(t){if(!this._platform.isBrowser)return;let r=t.rootNode,o=this._rootNodeFocusListenerCount.get(r)||0;o||this._ngZone.runOutsideAngular(()=>{r.addEventListener("focus",this._rootNodeFocusAndBlurListener,ia),r.addEventListener("blur",this._rootNodeFocusAndBlurListener,ia)}),this._rootNodeFocusListenerCount.set(r,o+1),++this._monitoredElementCount===1&&(this._ngZone.runOutsideAngular(()=>{this._getWindow().addEventListener("focus",this._windowFocusListener)}),this._inputModalityDetector.modalityDetected.pipe(Ya(this._stopInputModalityDetector)).subscribe(i=>{this._setOrigin(i,!0)}))}_removeGlobalListeners(t){let r=t.rootNode;if(this._rootNodeFocusListenerCount.has(r)){let o=this._rootNodeFocusListenerCount.get(r);o>1?this._rootNodeFocusListenerCount.set(r,o-1):(r.removeEventListener("focus",this._rootNodeFocusAndBlurListener,ia),r.removeEventListener("blur",this._rootNodeFocusAndBlurListener,ia),this._rootNodeFocusListenerCount.delete(r))}--this._monitoredElementCount||(this._getWindow().removeEventListener("focus",this._windowFocusListener),this._stopInputModalityDetector.next(),clearTimeout(this._windowFocusTimeoutId),clearTimeout(this._originTimeoutId))}_originChanged(t,r,o){this._setClasses(t,r),this._emitOrigin(o,r),this._lastFocusOrigin=r}_getClosestElementsInfo(t){let r=[];return this._elementInfo.forEach((o,i)=>{(i===t||o.checkChildren&&i.contains(t))&&r.push([i,o])}),r}_isLastInteractionFromInputLabel(t){let{_mostRecentTarget:r,mostRecentModality:o}=this._inputModalityDetector;if(o!=="mouse"||!r||r===t||t.nodeName!=="INPUT"&&t.nodeName!=="TEXTAREA"||t.disabled)return!1;let i=t.labels;if(i){for(let s=0;s<i.length;s++)if(i[s].contains(r))return!0}return!1}static \u0275fac=function(r){return new(r||e)};static \u0275prov=Y({token:e,factory:e.\u0275fac})}return e})();var sa=new WeakMap,Pt=(()=>{class e{_appRef;_injector=p(ae);_environmentInjector=p(ge);load(t){let r=this._appRef=this._appRef||this._injector.get(Xt),o=sa.get(r);o||(o={loaders:new Set,refs:[]},sa.set(r,o),r.onDestroy(()=>{sa.get(r)?.refs.forEach(i=>i.destroy()),sa.delete(r)})),o.loaders.has(t)||(o.loaders.add(t),o.refs.push(Vh(t,{environmentInjector:this._environmentInjector})))}static \u0275fac=function(r){return new(r||e)};static \u0275prov=Y({token:e,factory:e.\u0275fac})}return e})();var aa;function vI(){if(aa===void 0&&(aa=null,typeof window<"u")){let e=window;if(e.trustedTypes!==void 0)try{aa=e.trustedTypes.createPolicy("angular#components",{createHTML:n=>n})}catch(n){console.error(n)}}return aa}function $r(e){return vI()?.createHTML(e)||e}var pg=new Set,Jn,Ud=(()=>{class e{_platform=p(We);_nonce=p(Vn,{optional:!0});_matchMedia;constructor(){this._matchMedia=this._platform.isBrowser&&window.matchMedia?window.matchMedia.bind(window):bI}matchMedia(t){return(this._platform.WEBKIT||this._platform.BLINK)&&yI(t,this._nonce),this._matchMedia(t)}static \u0275fac=function(r){return new(r||e)};static \u0275prov=Y({token:e,factory:e.\u0275fac})}return e})();function yI(e,n){if(!pg.has(e))try{Jn||(Jn=document.createElement("style"),n&&Jn.setAttribute("nonce",n),Jn.setAttribute("type","text/css"),document.head.appendChild(Jn)),Jn.sheet&&(Jn.sheet.insertRule(`@media ${e.replace(/[{}]/g,"")} {body{ }}`,0),pg.add(e))}catch(t){console.error(t)}}function bI(e){return{matches:e==="all"||e==="",media:e,addListener:()=>{},removeListener:()=>{}}}var mg=new Map,rn=class e{_appId=p(Fn);static _infix=`a${Math.floor(Math.random()*1e5).toString()}`;getId(n,t=!1){this._appId!=="ng"&&(n+=this._appId);let r=mg.get(n);return r===void 0?r=0:r++,mg.set(n,r),`${n}${t?e._infix+"-":""}${r}`}static \u0275fac=function(t){return new(t||e)};static \u0275prov=Y({token:e,factory:e.\u0275fac})};var _I=new g("MATERIAL_ANIMATIONS"),hg=null;function EI(){return p(_I,{optional:!0})?.animationsDisabled||p($c,{optional:!0})==="NoopAnimations"?"di-disabled":(hg??=p(Ud).matchMedia("(prefers-reduced-motion)").matches,hg?"reduced-motion":"enabled")}function mt(){return EI()!=="enabled"}var qe=(function(e){return e[e.FADING_IN=0]="FADING_IN",e[e.VISIBLE=1]="VISIBLE",e[e.FADING_OUT=2]="FADING_OUT",e[e.HIDDEN=3]="HIDDEN",e})(qe||{}),$d=class{_renderer;element;config;_animationForciblyDisabledThroughCss;state=qe.HIDDEN;constructor(n,t,r,o=!1){this._renderer=n,this.element=t,this.config=r,this._animationForciblyDisabledThroughCss=o}fadeOut(){this._renderer.fadeOutRipple(this)}},gg=Ur({passive:!0,capture:!0}),zd=class{_events=new Map;addHandler(n,t,r,o){let i=this._events.get(t);if(i){let s=i.get(r);s?s.add(o):i.set(r,new Set([o]))}else this._events.set(t,new Map([[r,new Set([o])]])),n.runOutsideAngular(()=>{document.addEventListener(t,this._delegateEventHandler,gg)})}removeHandler(n,t,r){let o=this._events.get(n);if(!o)return;let i=o.get(t);i&&(i.delete(r),i.size===0&&o.delete(t),o.size===0&&(this._events.delete(n),document.removeEventListener(n,this._delegateEventHandler,gg)))}_delegateEventHandler=n=>{let t=tt(n);t&&this._events.get(n.type)?.forEach((r,o)=>{(o===t||o.contains(t))&&r.forEach(i=>i.handleEvent(n))})}},ri={enterDuration:225,exitDuration:150},wI=800,vg=Ur({passive:!0,capture:!0}),yg=["mousedown","touchstart"],bg=["mouseup","mouseleave","touchend","touchcancel"],SI=(()=>{class e{static \u0275fac=function(r){return new(r||e)};static \u0275cmp=H({type:e,selectors:[["ng-component"]],hostAttrs:["mat-ripple-style-loader",""],decls:0,vars:0,template:function(r,o){},styles:[`.mat-ripple {
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
`],encapsulation:2})}return e})(),oi=class e{_target;_ngZone;_platform;_containerElement;_triggerElement=null;_isPointerDown=!1;_activeRipples=new Map;_mostRecentTransientRipple=null;_lastTouchStartEvent;_pointerUpEventsRegistered=!1;_containerRect=null;static _eventManager=new zd;constructor(n,t,r,o,i){this._target=n,this._ngZone=t,this._platform=o,o.isBrowser&&(this._containerElement=nn(r)),i&&i.get(Pt).load(SI)}fadeInRipple(n,t,r={}){let o=this._containerRect=this._containerRect||this._containerElement.getBoundingClientRect(),i=w(w({},ri),r.animation);r.centered&&(n=o.left+o.width/2,t=o.top+o.height/2);let s=r.radius||II(n,t,o),a=n-o.left,c=t-o.top,l=i.enterDuration,d=document.createElement("div");d.classList.add("mat-ripple-element"),d.style.left=`${a-s}px`,d.style.top=`${c-s}px`,d.style.height=`${s*2}px`,d.style.width=`${s*2}px`,r.color!=null&&(d.style.backgroundColor=r.color),d.style.transitionDuration=`${l}ms`,this._containerElement.appendChild(d);let u=window.getComputedStyle(d),m=u.transitionProperty,f=u.transitionDuration,h=m==="none"||f==="0s"||f==="0s, 0s"||o.width===0&&o.height===0,b=new $d(this,d,r,h);d.style.transform="scale3d(1, 1, 1)",b.state=qe.FADING_IN,r.persistent||(this._mostRecentTransientRipple=b);let C=null;return!h&&(l||i.exitDuration)&&this._ngZone.runOutsideAngular(()=>{let k=()=>{C&&(C.fallbackTimer=null),clearTimeout(on),this._finishRippleTransition(b)},be=()=>this._destroyRipple(b),on=setTimeout(be,l+100);d.addEventListener("transitionend",k),d.addEventListener("transitioncancel",be),C={onTransitionEnd:k,onTransitionCancel:be,fallbackTimer:on}}),this._activeRipples.set(b,C),(h||!l)&&this._finishRippleTransition(b),b}fadeOutRipple(n){if(n.state===qe.FADING_OUT||n.state===qe.HIDDEN)return;let t=n.element,r=w(w({},ri),n.config.animation);t.style.transitionDuration=`${r.exitDuration}ms`,t.style.opacity="0",n.state=qe.FADING_OUT,(n._animationForciblyDisabledThroughCss||!r.exitDuration)&&this._finishRippleTransition(n)}fadeOutAll(){this._getActiveRipples().forEach(n=>n.fadeOut())}fadeOutAllNonPersistent(){this._getActiveRipples().forEach(n=>{n.config.persistent||n.fadeOut()})}setupTriggerEvents(n){let t=nn(n);!this._platform.isBrowser||!t||t===this._triggerElement||(this._removeTriggerEvents(),this._triggerElement=t,yg.forEach(r=>{e._eventManager.addHandler(this._ngZone,r,t,this)}))}handleEvent(n){n.type==="mousedown"?this._onMousedown(n):n.type==="touchstart"?this._onTouchStart(n):this._onPointerUp(),this._pointerUpEventsRegistered||(this._ngZone.runOutsideAngular(()=>{bg.forEach(t=>{this._triggerElement.addEventListener(t,this,vg)})}),this._pointerUpEventsRegistered=!0)}_finishRippleTransition(n){n.state===qe.FADING_IN?this._startFadeOutTransition(n):n.state===qe.FADING_OUT&&this._destroyRipple(n)}_startFadeOutTransition(n){let t=n===this._mostRecentTransientRipple,{persistent:r}=n.config;n.state=qe.VISIBLE,!r&&(!t||!this._isPointerDown)&&n.fadeOut()}_destroyRipple(n){let t=this._activeRipples.get(n)??null;this._activeRipples.delete(n),this._activeRipples.size||(this._containerRect=null),n===this._mostRecentTransientRipple&&(this._mostRecentTransientRipple=null),n.state=qe.HIDDEN,t!==null&&(n.element.removeEventListener("transitionend",t.onTransitionEnd),n.element.removeEventListener("transitioncancel",t.onTransitionCancel),t.fallbackTimer!==null&&clearTimeout(t.fallbackTimer)),n.element.remove()}_onMousedown(n){let t=Jo(n),r=this._lastTouchStartEvent&&Date.now()<this._lastTouchStartEvent+wI;!this._target.rippleDisabled&&!t&&!r&&(this._isPointerDown=!0,this.fadeInRipple(n.clientX,n.clientY,this._target.rippleConfig))}_onTouchStart(n){if(!this._target.rippleDisabled&&!ei(n)){this._lastTouchStartEvent=Date.now(),this._isPointerDown=!0;let t=n.changedTouches;if(t)for(let r=0;r<t.length;r++)this.fadeInRipple(t[r].clientX,t[r].clientY,this._target.rippleConfig)}}_onPointerUp(){this._isPointerDown&&(this._isPointerDown=!1,this._getActiveRipples().forEach(n=>{let t=n.state===qe.VISIBLE||n.config.terminateOnPointerUp&&n.state===qe.FADING_IN;!n.config.persistent&&t&&n.fadeOut()}))}_getActiveRipples(){return Array.from(this._activeRipples.keys())}_removeTriggerEvents(){let n=this._triggerElement;n&&(yg.forEach(t=>e._eventManager.removeHandler(t,n,this)),this._pointerUpEventsRegistered&&(bg.forEach(t=>n.removeEventListener(t,this,vg)),this._pointerUpEventsRegistered=!1))}};function II(e,n,t){let r=Math.max(Math.abs(e-t.left),Math.abs(e-t.right)),o=Math.max(Math.abs(n-t.top),Math.abs(n-t.bottom));return Math.sqrt(r*r+o*o)}var Gd=new g("mat-ripple-global-options"),ca=(()=>{class e{_elementRef=p(q);_animationsDisabled=mt();color;unbounded=!1;centered=!1;radius=0;animation;get disabled(){return this._disabled}set disabled(t){t&&this.fadeOutAllNonPersistent(),this._disabled=t,this._setupTriggerEventsIfEnabled()}_disabled=!1;get trigger(){return this._trigger||this._elementRef.nativeElement}set trigger(t){this._trigger=t,this._setupTriggerEventsIfEnabled()}_trigger;_rippleRenderer;_globalOptions;_isInitialized=!1;constructor(){let t=p(z),r=p(We),o=p(Gd,{optional:!0}),i=p(ae);this._globalOptions=o||{},this._rippleRenderer=new oi(this,t,this._elementRef,r,i)}ngOnInit(){this._isInitialized=!0,this._setupTriggerEventsIfEnabled()}ngOnDestroy(){this._rippleRenderer._removeTriggerEvents()}fadeOutAll(){this._rippleRenderer.fadeOutAll()}fadeOutAllNonPersistent(){this._rippleRenderer.fadeOutAllNonPersistent()}get rippleConfig(){return{centered:this.centered,radius:this.radius,color:this.color,animation:w(w(w({},this._globalOptions.animation),this._animationsDisabled?{enterDuration:0,exitDuration:0}:{}),this.animation),terminateOnPointerUp:this._globalOptions.terminateOnPointerUp}}get rippleDisabled(){return this.disabled||!!this._globalOptions.disabled}_setupTriggerEventsIfEnabled(){!this.disabled&&this._isInitialized&&this._rippleRenderer.setupTriggerEvents(this.trigger)}launch(t,r=0,o){return typeof t=="number"?this._rippleRenderer.fadeInRipple(t,r,w(w({},this.rippleConfig),o)):this._rippleRenderer.fadeInRipple(0,0,w(w({},this.rippleConfig),t))}static \u0275fac=function(r){return new(r||e)};static \u0275dir=te({type:e,selectors:[["","mat-ripple",""],["","matRipple",""]],hostAttrs:[1,"mat-ripple"],hostVars:2,hostBindings:function(r,o){r&2&&j("mat-ripple-unbounded",o.unbounded)},inputs:{color:[0,"matRippleColor","color"],unbounded:[0,"matRippleUnbounded","unbounded"],centered:[0,"matRippleCentered","centered"],radius:[0,"matRippleRadius","radius"],animation:[0,"matRippleAnimation","animation"],disabled:[0,"matRippleDisabled","disabled"],trigger:[0,"matRippleTrigger","trigger"]},exportAs:["matRipple"]})}return e})();var DI={capture:!0},CI=["focus","mousedown","mouseenter","touchstart"],Wd="mat-ripple-loader-uninitialized",qd="mat-ripple-loader-class-name",_g="mat-ripple-loader-centered",la="mat-ripple-loader-disabled",Eg=(()=>{class e{_document=p(L);_animationsDisabled=mt();_globalRippleOptions=p(Gd,{optional:!0});_platform=p(We);_ngZone=p(z);_injector=p(ae);_eventCleanups;_hosts=new Map;constructor(){let t=p(et).createRenderer(null,null);this._eventCleanups=this._ngZone.runOutsideAngular(()=>CI.map(r=>t.listen(this._document,r,this._onInteraction,DI)))}ngOnDestroy(){let t=this._hosts.keys();for(let r of t)this.destroyRipple(r);this._eventCleanups.forEach(r=>r())}configureRipple(t,r){t.setAttribute(Wd,this._globalRippleOptions?.namespace??""),(r.className||!t.hasAttribute(qd))&&t.setAttribute(qd,r.className||""),r.centered&&t.setAttribute(_g,""),r.disabled&&t.setAttribute(la,"")}setDisabled(t,r){let o=this._hosts.get(t);o?(o.target.rippleDisabled=r,!r&&!o.hasSetUpEvents&&(o.hasSetUpEvents=!0,o.renderer.setupTriggerEvents(t))):r?t.setAttribute(la,""):t.removeAttribute(la)}_onInteraction=t=>{let r=tt(t);if(r instanceof HTMLElement){let o=r.closest(`[${Wd}="${this._globalRippleOptions?.namespace??""}"]`);o&&this._createRipple(o)}};_createRipple(t){if(!this._document||this._hosts.has(t))return;t.querySelector(".mat-ripple")?.remove();let r=this._document.createElement("span");r.classList.add("mat-ripple",t.getAttribute(qd)),t.append(r);let o=this._globalRippleOptions,i=this._animationsDisabled?0:o?.animation?.enterDuration??ri.enterDuration,s=this._animationsDisabled?0:o?.animation?.exitDuration??ri.exitDuration,a={rippleDisabled:this._animationsDisabled||o?.disabled||t.hasAttribute(la),rippleConfig:{centered:t.hasAttribute(_g),terminateOnPointerUp:o?.terminateOnPointerUp,animation:{enterDuration:i,exitDuration:s}}},c=new oi(a,this._ngZone,r,this._platform,this._injector),l=!a.rippleDisabled;l&&c.setupTriggerEvents(t),this._hosts.set(t,{target:a,renderer:c,hasSetUpEvents:l}),t.removeAttribute(Wd)}destroyRipple(t){let r=this._hosts.get(t);r&&(r.renderer._removeTriggerEvents(),this._hosts.delete(t))}static \u0275fac=function(r){return new(r||e)};static \u0275prov=Y({token:e,factory:e.\u0275fac})}return e})();var zr=(()=>{class e{static \u0275fac=function(r){return new(r||e)};static \u0275cmp=H({type:e,selectors:[["structural-styles"]],decls:0,vars:0,template:function(r,o){},styles:[`.mat-focus-indicator {
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
`],encapsulation:2})}return e})();var NI=new g("MAT_BUTTON_CONFIG");function wg(e){return e==null?void 0:Yn(e)}var da=(()=>{class e{_elementRef=p(q);_ngZone=p(z);_animationsDisabled=mt();_config=p(NI,{optional:!0});_focusMonitor=p(Xn);_cleanupClick;_renderer=p(Re);_rippleLoader=p(Eg);_isAnchor;_isFab=!1;color;get disableRipple(){return this._disableRipple}set disableRipple(t){this._disableRipple=t,this._updateRippleDisabled()}_disableRipple=!1;get disabled(){return this._disabled}set disabled(t){this._disabled=t,this._updateRippleDisabled()}_disabled=!1;ariaDisabled;disabledInteractive;tabIndex;set _tabindex(t){this.tabIndex=t}showProgress=Br(!1,{transform:B});constructor(){p(Pt).load(zr);let t=this._elementRef.nativeElement;this._isAnchor=t.tagName==="A",this.disabledInteractive=this._config?.disabledInteractive??!1,this.color=this._config?.color??null,this._rippleLoader?.configureRipple(t,{className:"mat-mdc-button-ripple"})}ngAfterViewInit(){this._focusMonitor.monitor(this._elementRef,!0),this._isAnchor&&this._setupAsAnchor()}ngOnDestroy(){this._cleanupClick?.(),this._focusMonitor.stopMonitoring(this._elementRef),this._rippleLoader?.destroyRipple(this._elementRef.nativeElement)}focus(t="program",r){t?this._focusMonitor.focusVia(this._elementRef.nativeElement,t,r):this._elementRef.nativeElement.focus(r)}_getAriaDisabled(){return this.ariaDisabled!=null?this.ariaDisabled:this._isAnchor?this.disabled||null:this.disabled&&this.disabledInteractive?!0:null}_getDisabledAttribute(){return this.disabledInteractive||!this.disabled?null:!0}_updateRippleDisabled(){this._rippleLoader?.setDisabled(this._elementRef.nativeElement,this.disableRipple||this.disabled)}_getTabIndex(){return this._isAnchor?this.disabled&&!this.disabledInteractive?-1:this.tabIndex:this.tabIndex}_setupAsAnchor(){this._cleanupClick=this._ngZone.runOutsideAngular(()=>this._renderer.listen(this._elementRef.nativeElement,"click",t=>{this.disabled&&(t.preventDefault(),t.stopImmediatePropagation())}))}static \u0275fac=function(r){return new(r||e)};static \u0275dir=te({type:e,hostAttrs:[1,"mat-mdc-button-base"],hostVars:15,hostBindings:function(r,o){r&2&&(De("disabled",o._getDisabledAttribute())("aria-disabled",o._getAriaDisabled())("tabindex",o._getTabIndex()),Rt(o.color?"mat-"+o.color:""),j("mat-mdc-button-progress-indicator-shown",o.showProgress())("mat-mdc-button-disabled",o.disabled)("mat-mdc-button-disabled-interactive",o.disabledInteractive)("mat-unthemed",!o.color)("_mat-animation-noopable",o._animationsDisabled))},inputs:{color:"color",disableRipple:[2,"disableRipple","disableRipple",B],disabled:[2,"disabled","disabled",B],ariaDisabled:[2,"aria-disabled","ariaDisabled",B],disabledInteractive:[2,"disabledInteractive","disabledInteractive",B],tabIndex:[2,"tabIndex","tabIndex",wg],_tabindex:[2,"tabindex","_tabindex",wg],showProgress:[1,"showProgress"]}})}return e})();var Pe=(()=>{class e{static \u0275fac=function(r){return new(r||e)};static \u0275mod=ee({type:e});static \u0275inj=K({})}return e})();var ua=(()=>{class e{static \u0275fac=function(r){return new(r||e)};static \u0275mod=ee({type:e});static \u0275inj=K({imports:[Pe]})}return e})();var Zd=[[["",8,"material-icons",3,"iconPositionEnd",""],["mat-icon",3,"iconPositionEnd",""],["","matButtonIcon","",3,"iconPositionEnd",""]],"*",[["","iconPositionEnd","",8,"material-icons"],["mat-icon","iconPositionEnd",""],["","matButtonIcon","","iconPositionEnd",""]],[["","progressIndicator",""]]],Yd=[".material-icons:not([iconPositionEnd]), mat-icon:not([iconPositionEnd]), [matButtonIcon]:not([iconPositionEnd])","*",".material-icons[iconPositionEnd], mat-icon[iconPositionEnd], [matButtonIcon][iconPositionEnd]","[progressIndicator]"];function TI(e,n){e&1&&(Te(0,"div",2),R(1,3),Me())}function MI(e,n){e&1&&(Te(0,"div",2),R(1,3),Me())}function xI(e,n){e&1&&(Te(0,"div",2),R(1,3),Me())}var AI=`.mat-mdc-fab-base {
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
`,Sg=new Map([["text",["mat-mdc-button"]],["filled",["mdc-button--unelevated","mat-mdc-unelevated-button"]],["elevated",["mdc-button--raised","mat-mdc-raised-button"]],["outlined",["mdc-button--outlined","mat-mdc-outlined-button"]],["tonal",["mat-tonal-button"]]]),Ig=(()=>{class e extends da{get appearance(){return this._appearance}set appearance(t){this.setAppearance(t||this._config?.defaultAppearance||"text")}_appearance=null;constructor(){super();let t=RI(this._elementRef.nativeElement);t&&this.setAppearance(t)}setAppearance(t){if(t===this._appearance)return;let r=this._elementRef.nativeElement.classList,o=this._appearance?Sg.get(this._appearance):null,i=Sg.get(t);o&&r.remove(...o),r.add(...i),this._appearance=t}static \u0275fac=function(r){return new(r||e)};static \u0275cmp=H({type:e,selectors:[["button","matButton",""],["a","matButton",""],["button","mat-button",""],["button","mat-raised-button",""],["button","mat-flat-button",""],["button","mat-stroked-button",""],["a","mat-button",""],["a","mat-raised-button",""],["a","mat-flat-button",""],["a","mat-stroked-button",""]],hostAttrs:[1,"mdc-button"],inputs:{appearance:[0,"matButton","appearance"]},exportAs:["matButton","matAnchor"],features:[Ve],ngContentSelectors:Yd,decls:8,vars:5,consts:[[1,"mat-mdc-button-persistent-ripple"],[1,"mdc-button__label"],[1,"mat-mdc-button-progress-indicator-container"],[1,"mat-focus-indicator"],[1,"mat-mdc-button-touch-target"]],template:function(r,o){r&1&&(X(Zd),ut(0,"span",0),R(1),Te(2,"span",1),R(3,1),Me(),R(4,2),lt(5,TI,2,0,"div",2),ut(6,"span",3)(7,"span",4)),r&2&&(j("mdc-button__ripple",!o._isFab)("mdc-fab__ripple",o._isFab),W(5),dt(o.showProgress()?5:-1))},styles:[`.mat-mdc-button-base {
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
`],encapsulation:2})}return e})();function RI(e){return e.hasAttribute("mat-raised-button")?"elevated":e.hasAttribute("mat-stroked-button")?"outlined":e.hasAttribute("mat-flat-button")?"filled":e.hasAttribute("mat-button")?"text":null}var Dg=new g("mat-mdc-fab-default-options",{providedIn:"root",factory:()=>ii}),ii={color:"accent"},Cg=(()=>{class e extends da{_options=p(Dg,{optional:!0});_isFab=!0;extended=!1;constructor(){super(),this._options=this._options||ii,this.color=this._options.color||ii.color}static \u0275fac=function(r){return new(r||e)};static \u0275cmp=H({type:e,selectors:[["button","mat-fab",""],["a","mat-fab",""],["button","matFab",""],["a","matFab",""]],hostAttrs:[1,"mdc-fab","mat-mdc-fab-base","mat-mdc-fab"],hostVars:4,hostBindings:function(r,o){r&2&&j("mdc-fab--extended",o.extended)("mat-mdc-extended-fab",o.extended)},inputs:{extended:[2,"extended","extended",B]},exportAs:["matButton","matAnchor"],features:[Ve],ngContentSelectors:Yd,decls:8,vars:5,consts:[[1,"mat-mdc-button-persistent-ripple"],[1,"mdc-button__label"],[1,"mat-mdc-button-progress-indicator-container"],[1,"mat-focus-indicator"],[1,"mat-mdc-button-touch-target"]],template:function(r,o){r&1&&(X(Zd),ut(0,"span",0),R(1),Te(2,"span",1),R(3,1),Me(),R(4,2),lt(5,MI,2,0,"div",2),ut(6,"span",3)(7,"span",4)),r&2&&(j("mdc-button__ripple",!o._isFab)("mdc-fab__ripple",o._isFab),W(5),dt(o.showProgress()?5:-1))},styles:[`.mat-mdc-fab-base {
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
`],encapsulation:2})}return e})(),Gr=(()=>{class e extends da{_options=p(Dg,{optional:!0});_isFab=!0;constructor(){super(),this._options=this._options||ii,this.color=this._options.color||ii.color}static \u0275fac=function(r){return new(r||e)};static \u0275cmp=H({type:e,selectors:[["button","mat-mini-fab",""],["a","mat-mini-fab",""],["button","matMiniFab",""],["a","matMiniFab",""]],hostAttrs:[1,"mdc-fab","mat-mdc-fab-base","mdc-fab--mini","mat-mdc-mini-fab"],exportAs:["matButton","matAnchor"],features:[Ve],ngContentSelectors:Yd,decls:8,vars:5,consts:[[1,"mat-mdc-button-persistent-ripple"],[1,"mdc-button__label"],[1,"mat-mdc-button-progress-indicator-container"],[1,"mat-focus-indicator"],[1,"mat-mdc-button-touch-target"]],template:function(r,o){r&1&&(X(Zd),ut(0,"span",0),R(1),Te(2,"span",1),R(3,1),Me(),R(4,2),lt(5,xI,2,0,"div",2),ut(6,"span",3)(7,"span",4)),r&2&&(j("mdc-button__ripple",!o._isFab)("mdc-fab__ripple",o._isFab),W(5),dt(o.showProgress()?5:-1))},styles:[AI],encapsulation:2})}return e})();var Qd=Gr,Ng=(()=>{class e{static \u0275fac=function(r){return new(r||e)};static \u0275mod=ee({type:e});static \u0275inj=K({imports:[ua,Pe]})}return e})();var OI=[[["","matMiniFab",""]]],PI=["[matMiniFab]"];function FI(e,n){e&1&&R(0)}var LI=[[["eco-fab-speed-dial-trigger"]],[["eco-fab-speed-dial-actions"]]],VI=["eco-fab-speed-dial-trigger","eco-fab-speed-dial-actions"],jI=[[["","matFab",""]]],BI=["[matFab]"],HI=23;function Kd(e){return e._elementRef.nativeElement}var er=class e{renderer=p(Re);parent=p(tr);buttons=vd(Gr);anchors=vd(Qd);miniFabs=Jt(()=>[...this.buttons(),...this.anchors()]);initMiniFabStates=Zt(()=>{this.miniFabs().forEach((n,t)=>{let r=Kd(n);this.renderer.addClass(r,"eco-fab-action-item"),this.changeElementStyle(r,"z-index",(HI-t).toString())}),this.parent.setActionsVisibility()});miniFabVisible=Ne(!1);showMiniFabAnimation;hideMiniFab=null;show(){this.resetAnimationState(),this.miniFabVisible.set(!0),this.showMiniFabAnimation=setTimeout(()=>{this.miniFabs().forEach((n,t)=>{let r=Kd(n);this.changeElementStyle(r,"transition-delay",this.transitionDelay(t)),this.changeElementStyle(r,"transform","scale(1)")})},50)}resetAnimationState(){clearTimeout(this.showMiniFabAnimation),this.hideMiniFab&&(this.hideMiniFab.unsubscribe(),this.hideMiniFab=null)}hide(){this.resetAnimationState();let n=this.miniFabs();if(!n.length){this.miniFabVisible.set(!1);return}let t=[...n].reverse().map((r,o)=>{let i=Kd(r);return this.changeElementStyle(i,"transition-delay",this.transitionDelay(o)),this.changeElementStyle(i,"transform","scale(0)"),so(i,"transitionend").pipe(co(1))});this.hideMiniFab=yn(t).subscribe(()=>this.miniFabVisible.set(!1))}transitionDelay(n){let r=this.miniFabs().length;return((r?100/r:0)*n).toString()+"ms"}changeElementStyle(n,t,r){this.renderer.setStyle(n,t,r)}static \u0275fac=function(t){return new(t||e)};static \u0275cmp=H({type:e,selectors:[["eco-fab-speed-dial-actions"]],contentQueries:function(t,r,o){t&1&&$o(o,r.buttons,Gr,4)(o,r.anchors,Qd,4),t&2&&Ys(2)},ngContentSelectors:PI,decls:1,vars:1,template:function(t,r){t&1&&(X(OI),lt(0,FI,1,0)),t&2&&dt(r.miniFabVisible()?0:-1)},encapsulation:2})},tr=class e{elementRef=p(q);renderer=p(Re);document=p(L);documentClickUnlistener=null;openInput=Br(!1,{alias:"open"});open=hd(this.openInput);processOpen=Zt(()=>{this.openChange.emit(this.open()),this.setActionsVisibility()});direction=Br("up");previousDirection=this.direction();processDirection=Zt(()=>{this.setElementClass(this.previousDirection,!1),this.setElementClass(this.direction(),!0),this.previousDirection=this.direction(),this.setActionsVisibility()});openChange=Ph();childActions=Fh.required(er);ngOnDestroy(){this.unsetDocumentClickListener()}toggle(){this.open.update(n=>!n)}onClick(){this.open()&&this.open.set(!1)}setActionsVisibility(){this.open()?this.childActions().show():this.childActions().hide(),this.processOutsideClickState()}setElementClass(n,t){let r=`eco-${n}`;t?this.renderer.addClass(this.elementRef.nativeElement,r):this.renderer.removeClass(this.elementRef.nativeElement,r)}processOutsideClickState(){this.open()?this.setDocumentClickListener():this.unsetDocumentClickListener()}setDocumentClickListener(){this.documentClickUnlistener||(this.documentClickUnlistener=this.renderer.listen(this.document,"click",()=>{this.open.set(!1)}))}unsetDocumentClickListener(){this.documentClickUnlistener&&(this.documentClickUnlistener(),this.documentClickUnlistener=null)}static \u0275fac=function(t){return new(t||e)};static \u0275cmp=H({type:e,selectors:[["eco-fab-speed-dial"]],contentQueries:function(t,r,o){t&1&&$o(o,r.childActions,er,5),t&2&&Ys()},hostVars:2,hostBindings:function(t,r){t&1&&T("click",function(){return r.onClick()}),t&2&&j("eco-opened",r.open())},inputs:{openInput:[1,"open","openInput"],direction:[1,"direction"]},outputs:{openChange:"openChange"},ngContentSelectors:VI,decls:3,vars:0,consts:[[1,"eco-fab-speed-dial-container"]],template:function(t,r){t&1&&(X(LI),Te(0,"div",0),R(1),R(2,1),Me())},styles:[`eco-fab-speed-dial{display:inline-block;z-index:500}eco-fab-speed-dial.eco-opened .eco-fab-speed-dial-container eco-fab-speed-dial-trigger.eco-spin .spin180{transform:rotate(180deg)}eco-fab-speed-dial.eco-opened .eco-fab-speed-dial-container eco-fab-speed-dial-trigger.eco-spin .spin360{transform:rotate(360deg)}eco-fab-speed-dial .eco-fab-speed-dial-container{position:relative;display:flex;align-items:center;z-index:20}eco-fab-speed-dial .eco-fab-speed-dial-container eco-fab-speed-dial-trigger{pointer-events:auto;z-index:24}eco-fab-speed-dial .eco-fab-speed-dial-container eco-fab-speed-dial-trigger.eco-spin .spin180,eco-fab-speed-dial .eco-fab-speed-dial-container eco-fab-speed-dial-trigger.eco-spin .spin360{transition:all .6s cubic-bezier(.4,0,.2,1)}eco-fab-speed-dial .eco-fab-speed-dial-container eco-fab-speed-dial-actions{display:flex;position:absolute;height:0;width:0}eco-fab-speed-dial .eco-fab-speed-dial-container eco-fab-speed-dial-actions .eco-fab-action-item{transform:scale(0);transition:all .3s cubic-bezier(.55,0,.55,.2);transition-duration:.14286s}eco-fab-speed-dial.eco-down eco-fab-speed-dial-actions{bottom:2px;left:7px}eco-fab-speed-dial.eco-down .eco-fab-speed-dial-container{flex-direction:column}eco-fab-speed-dial.eco-down .eco-fab-speed-dial-container eco-fab-speed-dial-trigger{order:1}eco-fab-speed-dial.eco-down .eco-fab-speed-dial-container eco-fab-speed-dial-actions{flex-direction:column;order:2}eco-fab-speed-dial.eco-down .eco-fab-speed-dial-container eco-fab-speed-dial-actions .eco-fab-action-item{margin-top:10px}eco-fab-speed-dial.eco-up eco-fab-speed-dial-actions{top:2px;left:7px}eco-fab-speed-dial.eco-up .eco-fab-speed-dial-container{flex-direction:column}eco-fab-speed-dial.eco-up .eco-fab-speed-dial-container eco-fab-speed-dial-trigger{order:2}eco-fab-speed-dial.eco-up .eco-fab-speed-dial-container eco-fab-speed-dial-actions{flex-direction:column-reverse;order:1}eco-fab-speed-dial.eco-up .eco-fab-speed-dial-container eco-fab-speed-dial-actions .eco-fab-action-item{margin-bottom:10px}eco-fab-speed-dial.eco-left eco-fab-speed-dial-actions{top:7px;left:2px}eco-fab-speed-dial.eco-left .eco-fab-speed-dial-container{flex-direction:row}eco-fab-speed-dial.eco-left .eco-fab-speed-dial-container eco-fab-speed-dial-trigger{order:2}eco-fab-speed-dial.eco-left .eco-fab-speed-dial-container eco-fab-speed-dial-actions{flex-direction:row-reverse;order:1}eco-fab-speed-dial.eco-left .eco-fab-speed-dial-container eco-fab-speed-dial-actions .eco-fab-action-item{margin-right:10px}eco-fab-speed-dial.eco-right eco-fab-speed-dial-actions{top:7px;right:2px}eco-fab-speed-dial.eco-right .eco-fab-speed-dial-container{flex-direction:row}eco-fab-speed-dial.eco-right .eco-fab-speed-dial-container eco-fab-speed-dial-trigger{order:1}eco-fab-speed-dial.eco-right .eco-fab-speed-dial-container eco-fab-speed-dial-actions{flex-direction:row;order:2}eco-fab-speed-dial.eco-right .eco-fab-speed-dial-container eco-fab-speed-dial-actions .eco-fab-action-item{margin-left:10px}
`],encapsulation:2})},si=class e{parent=p(tr);spin=Br(!1);onClick(n){this.parent.toggle(),n.stopPropagation()}static \u0275fac=function(t){return new(t||e)};static \u0275cmp=H({type:e,selectors:[["eco-fab-speed-dial-trigger"]],hostVars:2,hostBindings:function(t,r){t&1&&T("click",function(i){return r.onClick(i)}),t&2&&j("eco-spin",r.spin())},inputs:{spin:[1,"spin"]},ngContentSelectors:BI,decls:1,vars:0,template:function(t,r){t&1&&(X(jI),R(0))},encapsulation:2})};function Tg(e){return Error(`Unable to find icon with the name "${e}"`)}function UI(){return Error("Could not find HttpClient for use with Angular Material icons. Please add provideHttpClient() to your providers.")}function Mg(e){return Error(`The URL provided to MatIconRegistry was not trusted as a resource URL via Angular's DomSanitizer. Attempted URL was "${e}".`)}function xg(e){return Error(`The literal provided to MatIconRegistry was not trusted as safe HTML by Angular's DomSanitizer. Attempted literal was "${e}".`)}var Ft=class{url;svgText;options;svgElement=null;constructor(n,t,r){this.url=n,this.svgText=t,this.options=r}},Rg=(()=>{class e{_httpClient;_sanitizer;_errorHandler;_document;_svgIconConfigs=new Map;_iconSetConfigs=new Map;_cachedIconsByUrl=new Map;_inProgressUrlFetches=new Map;_fontCssClassesByAlias=new Map;_resolvers=[];_defaultFontSetClass=["material-icons","mat-ligature-font"];constructor(t,r,o,i){this._httpClient=t,this._sanitizer=r,this._errorHandler=i,this._document=o}addSvgIcon(t,r,o){return this.addSvgIconInNamespace("",t,r,o)}addSvgIconLiteral(t,r,o){return this.addSvgIconLiteralInNamespace("",t,r,o)}addSvgIconInNamespace(t,r,o,i){return this._addSvgIconConfig(t,r,new Ft(o,null,i))}addSvgIconResolver(t){return this._resolvers.push(t),this}addSvgIconLiteralInNamespace(t,r,o,i){let s=this._sanitizer.sanitize(Ie.HTML,o);if(!s)throw xg(o);let a=$r(s);return this._addSvgIconConfig(t,r,new Ft("",a,i))}addSvgIconSet(t,r){return this.addSvgIconSetInNamespace("",t,r)}addSvgIconSetLiteral(t,r){return this.addSvgIconSetLiteralInNamespace("",t,r)}addSvgIconSetInNamespace(t,r,o){return this._addSvgIconSetConfig(t,new Ft(r,null,o))}addSvgIconSetLiteralInNamespace(t,r,o){let i=this._sanitizer.sanitize(Ie.HTML,r);if(!i)throw xg(r);let s=$r(i);return this._addSvgIconSetConfig(t,new Ft("",s,o))}registerFontClassAlias(t,r=t){return this._fontCssClassesByAlias.set(t,r),this}classNameForFontAlias(t){return this._fontCssClassesByAlias.get(t)||t}setDefaultFontSetClass(...t){return this._defaultFontSetClass=t,this}getDefaultFontSetClass(){return this._defaultFontSetClass}getSvgIconFromUrl(t){let r=this._sanitizer.sanitize(Ie.RESOURCE_URL,t);if(!r)throw Mg(t);let o=this._cachedIconsByUrl.get(r);return o?Ye(fa(o)):this._loadSvgIconFromConfig(new Ft(t,null)).pipe(uo(i=>this._cachedIconsByUrl.set(r,i)),ie(i=>fa(i)))}getNamedSvgIcon(t,r=""){let o=Ag(r,t),i=this._svgIconConfigs.get(o);if(i)return this._getSvgFromConfig(i);if(i=this._getIconConfigFromResolvers(r,t),i)return this._svgIconConfigs.set(o,i),this._getSvgFromConfig(i);let s=this._iconSetConfigs.get(r);return s?this._getSvgFromIconSetConfigs(t,s):$a(Tg(o))}ngOnDestroy(){this._resolvers=[],this._svgIconConfigs.clear(),this._iconSetConfigs.clear(),this._cachedIconsByUrl.clear()}_getSvgFromConfig(t){return t.svgText?Ye(fa(this._svgElementFromConfig(t))):this._loadSvgIconFromConfig(t).pipe(ie(r=>fa(r)))}_getSvgFromIconSetConfigs(t,r){let o=this._extractIconWithNameFromAnySet(t,r);if(o)return Ye(o);let i=r.filter(s=>!s.svgText).map(s=>this._loadSvgIconSetFromConfig(s).pipe(Pi(a=>{let l=`Loading icon set URL: ${this._sanitizer.sanitize(Ie.RESOURCE_URL,s.url)} failed: ${a.message}`;return this._errorHandler.handleError(new Error(l)),Ye(null)})));return yn(i).pipe(ie(()=>{let s=this._extractIconWithNameFromAnySet(t,r);if(!s)throw Tg(t);return s}))}_extractIconWithNameFromAnySet(t,r){for(let o=r.length-1;o>=0;o--){let i=r[o];if(i.svgText&&i.svgText.toString().indexOf(t)>-1){let s=this._svgElementFromConfig(i),a=this._extractSvgIconFromSet(s,t,i.options);if(a)return a}}return null}_loadSvgIconFromConfig(t){return this._fetchIcon(t).pipe(uo(r=>t.svgText=r),ie(()=>this._svgElementFromConfig(t)))}_loadSvgIconSetFromConfig(t){return t.svgText?Ye(null):this._fetchIcon(t).pipe(uo(r=>t.svgText=r))}_extractSvgIconFromSet(t,r,o){let i=t.querySelector(`[id="${r}"]`);if(!i)return null;let s=i.cloneNode(!0);if(s.removeAttribute("id"),s.nodeName.toLowerCase()==="svg")return this._setSvgAttributes(s,o);if(s.nodeName.toLowerCase()==="symbol")return this._setSvgAttributes(this._toSvgElement(s),o);let a=this._svgElementFromString($r("<svg></svg>"));return a.appendChild(s),this._setSvgAttributes(a,o)}_svgElementFromString(t){let r=this._document.createElement("DIV");r.innerHTML=t;let o=r.querySelector("svg");if(!o)throw Error("<svg> tag not found");return o}_toSvgElement(t){let r=this._svgElementFromString($r("<svg></svg>")),o=t.attributes;for(let i=0;i<o.length;i++){let{name:s,value:a}=o[i];s!=="id"&&r.setAttribute(s,a)}for(let i=0;i<t.childNodes.length;i++)t.childNodes[i].nodeType===this._document.ELEMENT_NODE&&r.appendChild(t.childNodes[i].cloneNode(!0));return r}_setSvgAttributes(t,r){return t.setAttribute("fit",""),t.setAttribute("height","100%"),t.setAttribute("width","100%"),t.setAttribute("preserveAspectRatio","xMidYMid meet"),t.setAttribute("focusable","false"),r&&r.viewBox&&t.setAttribute("viewBox",r.viewBox),t}_fetchIcon(t){let{url:r,options:o}=t,i=o?.withCredentials??!1;if(!this._httpClient)throw UI();if(r==null)throw Error(`Cannot fetch icon from URL "${r}".`);let s=this._sanitizer.sanitize(Ie.RESOURCE_URL,r);if(!s)throw Mg(r);let a=this._inProgressUrlFetches.get(s);if(a)return a;let c=this._httpClient.get(s,{responseType:"text",withCredentials:i}).pipe(ie(l=>$r(l)),lo(()=>this._inProgressUrlFetches.delete(s)),qa());return this._inProgressUrlFetches.set(s,c),c}_addSvgIconConfig(t,r,o){return this._svgIconConfigs.set(Ag(t,r),o),this}_addSvgIconSetConfig(t,r){let o=this._iconSetConfigs.get(t);return o?o.push(r):this._iconSetConfigs.set(t,[r]),this}_svgElementFromConfig(t){if(!t.svgElement){let r=this._svgElementFromString(t.svgText);this._setSvgAttributes(r,t.options),t.svgElement=r}return t.svgElement}_getIconConfigFromResolvers(t,r){for(let o=0;o<this._resolvers.length;o++){let i=this._resolvers[o](r,t);if(i)return $I(i)?new Ft(i.url,null,i.options):new Ft(i,null)}}static \u0275fac=function(r){return new(r||e)(M(Fd,8),M(Ld),M(L,8),M(Ee))};static \u0275prov=F({token:e,factory:e.\u0275fac,providedIn:"root"})}return e})();function fa(e){return e.cloneNode(!0)}function Ag(e,n){return e+":"+n}function $I(e){return!!(e.url&&e.options)}var zI=["*"],GI=new g("MAT_ICON_DEFAULT_OPTIONS"),WI=new g("mat-icon-location",{providedIn:"root",factory:()=>{let e=p(L),n=e?e.location:null;return{getPathname:()=>n?n.pathname+n.search:""}}}),kg=["clip-path","color-profile","src","cursor","fill","filter","marker","marker-start","marker-mid","marker-end","mask","stroke"],qI=kg.map(e=>`[${e}]`).join(", "),ZI=/^url\(['"]?#(.*?)['"]?\)$/,Og=(()=>{class e{_elementRef=p(q);_iconRegistry=p(Rg);_location=p(WI);_errorHandler=p(Ee);_defaultColor;get color(){return this._color||this._defaultColor}set color(t){this._color=t}_color;inline=!1;get svgIcon(){return this._svgIcon}set svgIcon(t){t!==this._svgIcon&&(t?this._updateSvgIcon(t):this._svgIcon&&this._clearSvgElement(),this._svgIcon=t)}_svgIcon;get fontSet(){return this._fontSet}set fontSet(t){let r=this._cleanupFontValue(t);r!==this._fontSet&&(this._fontSet=r,this._updateFontIconClasses())}_fontSet;get fontIcon(){return this._fontIcon}set fontIcon(t){let r=this._cleanupFontValue(t);r!==this._fontIcon&&(this._fontIcon=r,this._updateFontIconClasses())}_fontIcon;_previousFontSetClass=[];_previousFontIconClass;_svgName=null;_svgNamespace=null;_previousPath;_elementsWithExternalReferences;_currentIconFetch=le.EMPTY;constructor(){let t=p(new en("aria-hidden"),{optional:!0}),r=p(GI,{optional:!0});r&&(r.color&&(this.color=this._defaultColor=r.color),r.fontSet&&(this.fontSet=r.fontSet)),t||this._elementRef.nativeElement.setAttribute("aria-hidden","true")}_splitIconName(t){if(!t)return["",""];let r=t.split(":");switch(r.length){case 1:return["",r[0]];case 2:return r;default:throw Error(`Invalid icon name: "${t}"`)}}ngOnInit(){this._updateFontIconClasses()}ngAfterViewChecked(){let t=this._elementsWithExternalReferences;if(t&&t.size){let r=this._location.getPathname();r!==this._previousPath&&(this._previousPath=r,this._prependPathToReferences(r))}}ngOnDestroy(){this._currentIconFetch.unsubscribe(),this._elementsWithExternalReferences&&this._elementsWithExternalReferences.clear()}_usingFontIcon(){return!this.svgIcon}_setSvgElement(t){this._clearSvgElement();let r=this._location.getPathname();this._previousPath=r,this._cacheChildrenWithExternalReferences(t),this._prependPathToReferences(r),this._elementRef.nativeElement.appendChild(t)}_clearSvgElement(){let t=this._elementRef.nativeElement,r=t.childNodes.length;for(this._elementsWithExternalReferences&&this._elementsWithExternalReferences.clear();r--;){let o=t.childNodes[r];(o.nodeType!==1||o.nodeName.toLowerCase()==="svg")&&o.remove()}}_updateFontIconClasses(){if(!this._usingFontIcon())return;let t=this._elementRef.nativeElement,r=(this.fontSet?this._iconRegistry.classNameForFontAlias(this.fontSet).split(/ +/):this._iconRegistry.getDefaultFontSetClass()).filter(o=>o.length>0);this._previousFontSetClass.forEach(o=>t.classList.remove(o)),r.forEach(o=>t.classList.add(o)),this._previousFontSetClass=r,this.fontIcon!==this._previousFontIconClass&&!r.includes("mat-ligature-font")&&(this._previousFontIconClass&&t.classList.remove(this._previousFontIconClass),this.fontIcon&&t.classList.add(this.fontIcon),this._previousFontIconClass=this.fontIcon)}_cleanupFontValue(t){return typeof t=="string"?t.trim().split(" ")[0]:t}_prependPathToReferences(t){let r=this._elementsWithExternalReferences;r&&r.forEach((o,i)=>{o.forEach(s=>{i.setAttribute(s.name,`url('${t}#${s.value}')`)})})}_cacheChildrenWithExternalReferences(t){let r=t.querySelectorAll(qI),o=this._elementsWithExternalReferences=this._elementsWithExternalReferences||new Map;for(let i=0;i<r.length;i++)kg.forEach(s=>{let a=r[i],c=a.getAttribute(s),l=c?c.match(ZI):null;if(l){let d=o.get(a);d||(d=[],o.set(a,d)),d.push({name:s,value:l[1]})}})}_updateSvgIcon(t){if(this._svgNamespace=null,this._svgName=null,this._currentIconFetch.unsubscribe(),t){let[r,o]=this._splitIconName(t);r&&(this._svgNamespace=r),o&&(this._svgName=o),this._currentIconFetch=this._iconRegistry.getNamedSvgIcon(o,r).pipe(co(1)).subscribe(i=>this._setSvgElement(i),i=>{let s=`Error retrieving icon ${r}:${o}! ${i.message}`;this._errorHandler.handleError(new Error(s))})}}static \u0275fac=function(r){return new(r||e)};static \u0275cmp=H({type:e,selectors:[["mat-icon"]],hostAttrs:["role","img",1,"mat-icon","notranslate"],hostVars:10,hostBindings:function(r,o){r&2&&(De("data-mat-icon-type",o._usingFontIcon()?"font":"svg")("data-mat-icon-name",o._svgName||o.fontIcon)("data-mat-icon-namespace",o._svgNamespace||o.fontSet)("fontIcon",o._usingFontIcon()?o.fontIcon:null),Rt(o.color?"mat-"+o.color:""),j("mat-icon-inline",o.inline)("mat-icon-no-color",o.color!=="primary"&&o.color!=="accent"&&o.color!=="warn"))},inputs:{color:"color",inline:[2,"inline","inline",B],svgIcon:"svgIcon",fontSet:"fontSet",fontIcon:"fontIcon"},exportAs:["matIcon"],ngContentSelectors:zI,decls:1,vars:0,template:function(r,o){r&1&&(X(),R(0))},styles:[`mat-icon, mat-icon.mat-primary, mat-icon.mat-accent, mat-icon.mat-warn {
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
`],encapsulation:2})}return e})(),Pg=(()=>{class e{static \u0275fac=function(r){return new(r||e)};static \u0275mod=ee({type:e});static \u0275inj=K({imports:[Pe]})}return e})();var zg=(()=>{class e{_renderer;_elementRef;onChange=t=>{};onTouched=()=>{};constructor(t,r){this._renderer=t,this._elementRef=r}setProperty(t,r){this._renderer.setProperty(this._elementRef.nativeElement,t,r)}registerOnTouched(t){this.onTouched=t}registerOnChange(t){this.onChange=t}setDisabledState(t){this.setProperty("disabled",t)}static \u0275fac=function(r){return new(r||e)(fe(Re),fe(q))};static \u0275dir=te({type:e})}return e})(),QI=(()=>{class e extends zg{static \u0275fac=(()=>{let t;return function(o){return(t||(t=Vs(e)))(o||e)}})();static \u0275dir=te({type:e,features:[Ve]})}return e})(),Yr=new g("");var KI={provide:Yr,useExisting:Be(()=>Gg),multi:!0};function XI(){let e=Ge()?Ge().getUserAgent():"";return/android (\d+)/.test(e.toLowerCase())}var JI=new g(""),Gg=(()=>{class e extends zg{_compositionMode;_composing=!1;constructor(t,r,o){super(t,r),this._compositionMode=o,this._compositionMode==null&&(this._compositionMode=!XI())}writeValue(t){let r=t??"";this.setProperty("value",r)}_handleInput(t){(!this._compositionMode||this._compositionMode&&!this._composing)&&this.onChange(t)}_compositionStart(){this._composing=!0}_compositionEnd(t){this._composing=!1,this._compositionMode&&this.onChange(t)}static \u0275fac=function(r){return new(r||e)(fe(Re),fe(q),fe(JI,8))};static \u0275dir=te({type:e,selectors:[["input","formControlName","",3,"type","checkbox",3,"ngNoCva",""],["textarea","formControlName","",3,"ngNoCva",""],["input","formControl","",3,"type","checkbox",3,"ngNoCva",""],["textarea","formControl","",3,"ngNoCva",""],["input","ngModel","",3,"type","checkbox",3,"ngNoCva",""],["textarea","ngModel","",3,"ngNoCva",""],["","ngDefaultControl",""]],hostBindings:function(r,o){r&1&&T("input",function(s){return o._handleInput(s.target.value)})("blur",function(){return o.onTouched()})("compositionstart",function(){return o._compositionStart()})("compositionend",function(s){return o._compositionEnd(s.target.value)})},standalone:!1,features:[pt([KI]),Ve]})}return e})();function ou(e){return e==null||iu(e)===0}function iu(e){return e==null?null:Array.isArray(e)||typeof e=="string"?e.length:e instanceof Set?e.size:null}var ya=new g(""),eD=new g(""),tD=/^(?=.{1,254}$)(?=.{1,64}@)[a-zA-Z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-zA-Z0-9!#$%&'*+/=?^_`{|}~-]+)*@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/,Xd=class{static min(n){return nD(n)}static max(n){return rD(n)}static required(n){return Wg(n)}static requiredTrue(n){return oD(n)}static email(n){return iD(n)}static minLength(n){return sD(n)}static maxLength(n){return aD(n)}static pattern(n){return cD(n)}static nullValidator(n){return ma()}static compose(n){return Xg(n)}static composeAsync(n){return ev(n)}};function nD(e){return n=>{if(n.value==null||e==null)return null;let t=parseFloat(n.value);return!isNaN(t)&&t<e?{min:{min:e,actual:n.value}}:null}}function rD(e){return n=>{if(n.value==null||e==null)return null;let t=parseFloat(n.value);return!isNaN(t)&&t>e?{max:{max:e,actual:n.value}}:null}}function Wg(e){return ou(e.value)?{required:!0}:null}function oD(e){return e.value===!0?null:{required:!0}}function iD(e){return ou(e.value)||tD.test(e.value)?null:{email:!0}}function sD(e){return n=>{let t=n.value?.length??iu(n.value);return t===null||t===0?null:t<e?{minlength:{requiredLength:e,actualLength:t}}:null}}function aD(e){return n=>{let t=n.value?.length??iu(n.value);return t!==null&&t>e?{maxlength:{requiredLength:e,actualLength:t}}:null}}function cD(e){if(!e)return ma;let n,t;return typeof e=="string"?(t="",e.charAt(0)!=="^"&&(t+="^"),t+=e,e.charAt(e.length-1)!=="$"&&(t+="$"),n=new RegExp(t)):(t=e.toString(),n=e),r=>{if(ou(r.value))return null;let o=r.value;return n.test(o)?null:{pattern:{requiredPattern:t,actualValue:o}}}}function ma(e){return null}function qg(e){return e!=null}function Zg(e){return Ho(e)?io(e):e}function Yg(e){let n={};return e.forEach(t=>{n=t!=null?w(w({},n),t):n}),Object.keys(n).length===0?null:n}function Qg(e,n){return n.map(t=>t(e))}function lD(e){return!e.validate}function Kg(e){return e.map(n=>lD(n)?n:t=>n.validate(t))}function Xg(e){if(!e)return null;let n=e.filter(qg);return n.length==0?null:function(t){return Yg(Qg(t,n))}}function Jg(e){return e!=null?Xg(Kg(e)):null}function ev(e){if(!e)return null;let n=e.filter(qg);return n.length==0?null:function(t){let r=Qg(t,n).map(Zg);return yn(r).pipe(ie(Yg))}}function tv(e){return e!=null?ev(Kg(e)):null}function Fg(e,n){return e===null?[n]:Array.isArray(e)?[...e,n]:[e,n]}function dD(e){return e._rawValidators}function uD(e){return e._rawAsyncValidators}function Jd(e){return e?Array.isArray(e)?e:[e]:[]}function ha(e,n){return Array.isArray(e)?e.includes(n):e===n}function Lg(e,n){let t=Jd(n);return Jd(e).forEach(o=>{ha(t,o)||t.push(o)}),t}function Vg(e,n){return Jd(n).filter(t=>!ha(e,t))}var ga=class{get value(){return this.control?this.control.value:null}get valid(){return this.control?this.control.valid:null}get invalid(){return this.control?this.control.invalid:null}get pending(){return this.control?this.control.pending:null}get disabled(){return this.control?this.control.disabled:null}get enabled(){return this.control?this.control.enabled:null}get errors(){return this.control?this.control.errors:null}get pristine(){return this.control?this.control.pristine:null}get dirty(){return this.control?this.control.dirty:null}get touched(){return this.control?this.control.touched:null}get status(){return this.control?this.control.status:null}get untouched(){return this.control?this.control.untouched:null}get statusChanges(){return this.control?this.control.statusChanges:null}get valueChanges(){return this.control?this.control.valueChanges:null}get path(){return null}_composedValidatorFn;_composedAsyncValidatorFn;_rawValidators=[];_rawAsyncValidators=[];_setValidators(n){this._rawValidators=n||[],this._composedValidatorFn=Jg(this._rawValidators)}_setAsyncValidators(n){this._rawAsyncValidators=n||[],this._composedAsyncValidatorFn=tv(this._rawAsyncValidators)}get validator(){return this._composedValidatorFn||null}get asyncValidator(){return this._composedAsyncValidatorFn||null}_onDestroyCallbacks=[];_registerOnDestroy(n){this._onDestroyCallbacks.push(n)}_invokeOnDestroyCallbacks(){this._onDestroyCallbacks.forEach(n=>n()),this._onDestroyCallbacks=[]}reset(n=void 0){this.control?.reset(n)}hasError(n,t){return this.control?this.control.hasError(n,t):!1}getError(n,t){return this.control?this.control.getError(n,t):null}},eu=class extends ga{name;get formDirective(){return null}get path(){return null}};var ai="VALID",pa="INVALID",Wr="PENDING",ci="DISABLED",nr=class{},va=class extends nr{value;source;constructor(n,t){super(),this.value=n,this.source=t}},li=class extends nr{pristine;source;constructor(n,t){super(),this.pristine=n,this.source=t}},di=class extends nr{touched;source;constructor(n,t){super(),this.touched=n,this.source=t}},qr=class extends nr{status;source;constructor(n,t){super(),this.status=n,this.source=t}};var ui=class extends nr{source;constructor(n){super(),this.source=n}};function fD(e){return(ba(e)?e.validators:e)||null}function pD(e){return Array.isArray(e)?Jg(e):e||null}function mD(e,n){return(ba(n)?n.asyncValidators:e)||null}function hD(e){return Array.isArray(e)?tv(e):e||null}function ba(e){return e!=null&&!Array.isArray(e)&&typeof e=="object"}var tu=class{_pendingDirty=!1;_hasOwnPendingAsyncValidator=null;_pendingTouched=!1;_onCollectionChange=()=>{};_updateOn;_hasRequired=Ne(!1);_parent=null;_asyncValidationSubscription;_composedValidatorFn;_composedAsyncValidatorFn;_rawValidators;_rawAsyncValidators;value;constructor(n,t){this._assignValidators(n),this._assignAsyncValidators(t)}get validator(){return this._composedValidatorFn}set validator(n){this._rawValidators=this._composedValidatorFn=n,this._updateHasRequiredValidator()}get asyncValidator(){return this._composedAsyncValidatorFn}set asyncValidator(n){this._rawAsyncValidators=this._composedAsyncValidatorFn=n}get parent(){return this._parent}get status(){return Oe(this.statusReactive)}set status(n){Oe(()=>this.statusReactive.set(n))}_status=Jt(()=>this.statusReactive());statusReactive=Ne(void 0);get valid(){return this.status===ai}get invalid(){return this.status===pa}get pending(){return this.status===Wr}get disabled(){return this.status===ci}get enabled(){return this.status!==ci}errors;get pristine(){return Oe(this.pristineReactive)}set pristine(n){Oe(()=>this.pristineReactive.set(n))}_pristine=Jt(()=>this.pristineReactive());pristineReactive=Ne(!0);get dirty(){return!this.pristine}get touched(){return Oe(this.touchedReactive)}set touched(n){Oe(()=>this.touchedReactive.set(n))}_touched=Jt(()=>this.touchedReactive());touchedReactive=Ne(!1);get untouched(){return!this.touched}_events=new de;events=this._events.asObservable();valueChanges;statusChanges;get updateOn(){return this._updateOn?this._updateOn:this.parent?this.parent.updateOn:"change"}setValidators(n){this._assignValidators(n)}setAsyncValidators(n){this._assignAsyncValidators(n)}addValidators(n){this.setValidators(Lg(n,this._rawValidators))}addAsyncValidators(n){this.setAsyncValidators(Lg(n,this._rawAsyncValidators))}removeValidators(n){this.setValidators(Vg(n,this._rawValidators))}removeAsyncValidators(n){this.setAsyncValidators(Vg(n,this._rawAsyncValidators))}hasValidator(n){return ha(this._rawValidators,n)}hasAsyncValidator(n){return ha(this._rawAsyncValidators,n)}clearValidators(){this.validator=null}clearAsyncValidators(){this.asyncValidator=null}markAsTouched(n={}){let t=this.touched===!1;this.touched=!0;let r=n.sourceControl??this;n.onlySelf||this._parent?.markAsTouched(U(w({},n),{sourceControl:r})),t&&n.emitEvent!==!1&&this._events.next(new di(!0,r))}markAllAsDirty(n={}){this.markAsDirty({onlySelf:!0,emitEvent:n.emitEvent,sourceControl:this}),this._forEachChild(t=>t.markAllAsDirty(n))}markAllAsTouched(n={}){this.markAsTouched({onlySelf:!0,emitEvent:n.emitEvent,sourceControl:this}),this._forEachChild(t=>t.markAllAsTouched(n))}markAsUntouched(n={}){let t=this.touched===!0;this.touched=!1,this._pendingTouched=!1;let r=n.sourceControl??this;this._forEachChild(o=>{o.markAsUntouched({onlySelf:!0,emitEvent:n.emitEvent,sourceControl:r})}),n.onlySelf||this._parent?._updateTouched(n,r),t&&n.emitEvent!==!1&&this._events.next(new di(!1,r))}markAsDirty(n={}){let t=this.pristine===!0;this.pristine=!1;let r=n.sourceControl??this;n.onlySelf||this._parent?.markAsDirty(U(w({},n),{sourceControl:r})),t&&n.emitEvent!==!1&&this._events.next(new li(!1,r))}markAsPristine(n={}){let t=this.pristine===!1;this.pristine=!0,this._pendingDirty=!1;let r=n.sourceControl??this;this._forEachChild(o=>{o.markAsPristine({onlySelf:!0,emitEvent:n.emitEvent})}),n.onlySelf||this._parent?._updatePristine(n,r),t&&n.emitEvent!==!1&&this._events.next(new li(!0,r))}markAsPending(n={}){this.status=Wr;let t=n.sourceControl??this;n.emitEvent!==!1&&(this._events.next(new qr(this.status,t)),this.statusChanges.emit(this.status)),n.onlySelf||this._parent?.markAsPending(U(w({},n),{sourceControl:t}))}disable(n={}){let t=this._parentMarkedDirty(n.onlySelf);this.status=ci,this.errors=null,this._forEachChild(o=>{o.disable(U(w({},n),{onlySelf:!0}))}),this._updateValue();let r=n.sourceControl??this;n.emitEvent!==!1&&(this._events.next(new va(this.value,r)),this._events.next(new qr(this.status,r)),this.valueChanges.emit(this.value),this.statusChanges.emit(this.status)),this._updateAncestors(U(w({},n),{skipPristineCheck:t}),this),this._onDisabledChange.forEach(o=>o(!0))}enable(n={}){let t=this._parentMarkedDirty(n.onlySelf);this.status=ai,this._forEachChild(r=>{r.enable(U(w({},n),{onlySelf:!0}))}),this.updateValueAndValidity({onlySelf:!0,emitEvent:n.emitEvent}),this._updateAncestors(U(w({},n),{skipPristineCheck:t}),this),this._onDisabledChange.forEach(r=>r(!1))}_updateAncestors(n,t){n.onlySelf||(this._parent?.updateValueAndValidity(n),n.skipPristineCheck||this._parent?._updatePristine({},t),this._parent?._updateTouched({},t))}setParent(n){this._parent=n}getRawValue(){return this.value}updateValueAndValidity(n={}){if(this._setInitialStatus(),this._updateValue(),this.enabled){let r=this._cancelExistingSubscription();this.errors=this._runValidator(),this.status=this._calculateStatus(),(this.status===ai||this.status===Wr)&&this._runAsyncValidator(r,n.emitEvent)}let t=n.sourceControl??this;n.emitEvent!==!1&&(this._events.next(new va(this.value,t)),this._events.next(new qr(this.status,t)),this.valueChanges.emit(this.value),this.statusChanges.emit(this.status)),n.onlySelf||this._parent?.updateValueAndValidity(U(w({},n),{sourceControl:t}))}_updateTreeValidity(n={emitEvent:!0}){this._forEachChild(t=>t._updateTreeValidity(n)),this.updateValueAndValidity({onlySelf:!0,emitEvent:n.emitEvent})}_setInitialStatus(){this.status=this._allControlsDisabled()?ci:ai}_runValidator(){return this.validator?this.validator(this):null}_runAsyncValidator(n,t){if(this.asyncValidator){this.status=Wr,this._hasOwnPendingAsyncValidator={emitEvent:t!==!1,shouldHaveEmitted:n!==!1};let r=Zg(this.asyncValidator(this));this._asyncValidationSubscription=r.subscribe(o=>{this._hasOwnPendingAsyncValidator=null,this.setErrors(o,{emitEvent:t,shouldHaveEmitted:n})})}}_cancelExistingSubscription(){if(this._asyncValidationSubscription){this._asyncValidationSubscription.unsubscribe();let n=(this._hasOwnPendingAsyncValidator?.emitEvent||this._hasOwnPendingAsyncValidator?.shouldHaveEmitted)??!1;return this._hasOwnPendingAsyncValidator=null,n}return!1}setErrors(n,t={}){this.errors=n,this._updateControlsErrors(t.emitEvent!==!1,this,t.shouldHaveEmitted)}get(n){let t=n;return t==null||(Array.isArray(t)||(t=t.split(".")),t.length===0)?null:t.reduce((r,o)=>r&&r._find(o),this)}getError(n,t){let r=t?this.get(t):this;return r?.errors?r.errors[n]:null}hasError(n,t){return!!this.getError(n,t)}get root(){let n=this;for(;n._parent;)n=n._parent;return n}_updateControlsErrors(n,t,r){this.status=this._calculateStatus(),n&&this.statusChanges.emit(this.status),(n||r)&&this._events.next(new qr(this.status,t)),this._parent&&this._parent._updateControlsErrors(n,t,r)}_initObservables(){this.valueChanges=new se,this.statusChanges=new se}_calculateStatus(){return this._allControlsDisabled()?ci:this.errors?pa:this._hasOwnPendingAsyncValidator||this._anyControlsHaveStatus(Wr)?Wr:this._anyControlsHaveStatus(pa)?pa:ai}_anyControlsHaveStatus(n){return this._anyControls(t=>t.status===n)}_anyControlsDirty(){return this._anyControls(n=>n.dirty)}_anyControlsTouched(){return this._anyControls(n=>n.touched)}_updatePristine(n,t){let r=!this._anyControlsDirty(),o=this.pristine!==r;this.pristine=r,n.onlySelf||this._parent?._updatePristine(n,t),o&&this._events.next(new li(this.pristine,t))}_updateTouched(n={},t){this.touched=this._anyControlsTouched(),this._events.next(new di(this.touched,t)),n.onlySelf||this._parent?._updateTouched(n,t)}_onDisabledChange=[];_registerOnCollectionChange(n){this._onCollectionChange=n}_setUpdateStrategy(n){ba(n)&&n.updateOn!=null&&(this._updateOn=n.updateOn)}_parentMarkedDirty(n){return!n&&!!this._parent?.dirty&&!this._parent._anyControlsDirty()}_find(n){return null}_assignValidators(n){this._rawValidators=Array.isArray(n)?n.slice():n,this._composedValidatorFn=pD(this._rawValidators),this._updateHasRequiredValidator()}_assignAsyncValidators(n){this._rawAsyncValidators=Array.isArray(n)?n.slice():n,this._composedAsyncValidatorFn=hD(this._rawAsyncValidators)}_updateHasRequiredValidator(){Oe(()=>this._hasRequired.set(this.hasValidator(Xd.required)))}};function gD(e){return e.tagName==="INPUT"||e.tagName==="SELECT"||e.tagName==="TEXTAREA"}function vD(e,n,t,r){switch(t){case"name":e.setAttribute(n,t,r);break;case"disabled":case"readonly":case"required":r?e.setAttribute(n,t,""):e.removeAttribute(n,t);break;case"max":case"min":case"minLength":case"maxLength":r!==void 0?e.setAttribute(n,t,r.toString()):e.removeAttribute(n,t);break}}var nu=class{kind;context;control;message;constructor({kind:n,context:t,control:r}){this.kind=n,this.context=t,this.control=r}};var yD=(()=>{class e{_validator=ma;_onChange;_enabled;ngOnChanges(t){if(this.inputName in t){let r=this.normalizeInput(t[this.inputName].currentValue);this._enabled=this.enabled(r),this._validator=this._enabled?this.createValidator(r):ma,this._onChange?.()}}validate(t){return this._validator(t)}registerOnValidatorChange(t){this._onChange=t}enabled(t){return t!=null}static \u0275fac=function(r){return new(r||e)};static \u0275dir=te({type:e,features:[Pr]})}return e})();var bD={provide:ya,useExisting:Be(()=>nv),multi:!0};var nv=(()=>{class e extends yD{required;inputName="required";normalizeInput=B;createValidator=t=>Wg;enabled(t){return t}static \u0275fac=(()=>{let t;return function(o){return(t||(t=Vs(e)))(o||e)}})();static \u0275dir=te({type:e,selectors:[["","required","","formControlName","",3,"type","checkbox"],["","required","","formControl","",3,"type","checkbox"],["","required","","ngModel","",3,"type","checkbox"]],hostVars:1,hostBindings:function(r,o){r&2&&De("required",o._enabled?"":null)},inputs:{required:"required"},standalone:!1,features:[pt([bD]),Ve]})}return e})();var _D=new g(""),rv=new g("",{factory:()=>su}),su="always";function ED(e,n){return[...n.path,e]}function jg(e,n,t=su){SD(e,n),n.valueAccessor.writeValue(e.value),(e.disabled||t==="always")&&n.valueAccessor.setDisabledState?.(e.disabled),ID(e,n),CD(e,n),DD(e,n),wD(e,n)}function Bg(e,n){e.forEach(t=>{t.registerOnValidatorChange&&t.registerOnValidatorChange(n)})}function wD(e,n){if(n.valueAccessor.setDisabledState){let t=r=>{n.valueAccessor.setDisabledState(r)};e.registerOnDisabledChange(t),n._registerOnDestroy(()=>{e._unregisterOnDisabledChange(t)})}}function SD(e,n){let t=dD(e);n.validator!==null?e.setValidators(Fg(t,n.validator)):typeof t=="function"&&e.setValidators([t]);let r=uD(e);n.asyncValidator!==null?e.setAsyncValidators(Fg(r,n.asyncValidator)):typeof r=="function"&&e.setAsyncValidators([r]);let o=()=>e.updateValueAndValidity();Bg(n._rawValidators,o),Bg(n._rawAsyncValidators,o)}function ID(e,n){n.valueAccessor.registerOnChange(t=>{e._pendingValue=t,e._pendingChange=!0,e._pendingDirty=!0,e.updateOn==="change"&&ov(e,n)})}function DD(e,n){n.valueAccessor.registerOnTouched(()=>{e._pendingTouched=!0,e.updateOn==="blur"&&e._pendingChange&&ov(e,n),e.updateOn!=="submit"&&e.markAsTouched()})}function ov(e,n){e._pendingDirty&&e.markAsDirty(),e.setValue(e._pendingValue,{emitModelToViewChange:!1}),n.viewToModelUpdate(e._pendingValue),e._pendingChange=!1}function CD(e,n){let t=(r,o)=>{n.valueAccessor.writeValue(r),o&&n.viewToModelUpdate(r)};e.registerOnChange(t),n._registerOnDestroy(()=>{e._unregisterOnChange(t)})}function ND(e,n){if(!e.hasOwnProperty("model"))return!1;let t=e.model;return t.isFirstChange()?!0:!Object.is(n,t.currentValue)}function TD(e){return Object.getPrototypeOf(e.constructor)===QI}function MD(e,n){if(!n)return null;Array.isArray(n);let t,r,o;return n.forEach(i=>{i.constructor===Gg?t=i:TD(i)?r=i:o=i}),o||r||t||null}var xD={provide:_D,useFactory:()=>{let e=p(Zr,{self:!0});return{setParseErrors:n=>{e.setParseErrorSource(n)},set onReset(n){e.onReset=n}}}},Zr=class extends ga{_parent=null;name=null;valueAccessor=null;isCustomControlBased=!1;userOnReset;resetSubscription;set onReset(n){this.userOnReset=n,this.resetSubscription?.unsubscribe(),this.resetSubscription=void 0,this.control&&(this.resetSubscription=this.control.events.subscribe(t=>{t instanceof ui&&this.control&&this.userOnReset?.(this.control.value)}),this.subscription?.add(this.resetSubscription))}isNativeFormElement=!1;rawValueAccessors;_selectedValueAccessor=null;get selectedValueAccessor(){return this._selectedValueAccessor??=MD(this,this.rawValueAccessors)}parseErrorsValidator=null;renderer;injector;requiredValidatorViaDi;subscription;customControlBindings=null;constructor(n,t,r){super(),this.injector=n,this.renderer=t,this.rawValueAccessors=r,this.injector?.get(xe)?.onDestroy(()=>{this.removeParseErrorsValidator(this.control),this.subscription?.unsubscribe()})}setupCustomControl(){this.subscription?.unsubscribe();let n=this.injector?.get(tn);if(!this.control||!n)return;let t=n.markForCheck.bind(n);this.subscription=new le,this.subscription.add(this.control.valueChanges.subscribe(t)),this.subscription.add(this.control.statusChanges.subscribe(t)),this.resetSubscription?.unsubscribe(),this.resetSubscription=void 0,this.userOnReset&&(this.resetSubscription=this.control.events.subscribe(r=>{r instanceof ui&&this.control&&this.userOnReset?.(this.control.value)}),this.subscription.add(this.resetSubscription)),this.parseErrorsValidator&&this.control.addValidators(this.parseErrorsValidator)}ngControlCreate(n){!n.nativeElement.hasAttribute?.("ngNoCva")&&(this.rawValueAccessors&&this.rawValueAccessors.length>0||this.valueAccessor!==null)||!n.customControl||(this.isCustomControlBased=!0,n.listenToCustomControlModel(o=>{this.control?.setValue(o,{emitModelToViewChange:!1}),this.control?.markAsDirty(),this.viewToModelUpdate(o)}),n.listenToCustomControlOutput("touch",()=>{this.control?.markAsTouched()}),this.customControlBindings={},this.isNativeFormElement=gD(n.nativeElement),this.requiredValidatorViaDi=this._rawValidators.find(o=>o instanceof nv))}ngControlUpdate(n,t){if(!this.isCustomControlBased)return;let r=this.control,o=this.customControlBindings;Object.is(o.value,r.value)||(o.value=r.value,n.setCustomControlModelInput(r.value)),this.bindControlProperty(n,o,"touched",r.touched),this.bindControlProperty(n,o,"dirty",r.dirty),this.bindControlProperty(n,o,"valid",r.valid),this.bindControlProperty(n,o,"invalid",r.invalid),this.bindControlProperty(n,o,"pending",r.pending),this.bindControlProperty(n,o,"disabled",r.disabled),this.shouldBindRequired&&this.bindControlProperty(n,o,"required",this.isRequired);let i=r.errors;if(o.errors!==i){o.errors=i;let s=this._convertErrors(i);n.setInputOnDirectives("errors",s)}}get isRequired(){return(this.requiredValidatorViaDi?._enabled||this.control?._hasRequired())??!1}get shouldBindRequired(){return!0}bindControlProperty(n,t,r,o){if(t[r]===o)return;t[r]=o;let i=n.setInputOnDirectives(r,o);this.isNativeFormElement&&!i&&(r==="disabled"||r==="required")&&this.renderer&&vD(this.renderer,n.nativeElement,r,o)}_convertErrors(n){if(n===null)return[];let t=this.control;return Object.entries(n).map(([r,o])=>new nu({context:o,kind:r,control:t}))}setParseErrorSource(n){if(n===void 0)return;let t=null,r=Jt(()=>{let o=n();return o.length===0?null:o.reduce((i,s)=>(i[s.kind]=s,i),{})});this.parseErrorsValidator=(()=>t).bind(this),Zt(()=>{t=r(),this.control?.updateValueAndValidity({emitEvent:!1})},{injector:this.injector})}removeParseErrorsValidator(n){this.parseErrorsValidator&&(n?.removeValidators(this.parseErrorsValidator),n?.updateValueAndValidity({emitEvent:!1}))}},ru=class{_cd;constructor(n){this._cd=n}get isTouched(){return this._cd?.control?._touched?.(),!!this._cd?.control?.touched}get isUntouched(){return!!this._cd?.control?.untouched}get isPristine(){return this._cd?.control?._pristine?.(),!!this._cd?.control?.pristine}get isDirty(){return!!this._cd?.control?.dirty}get isValid(){return this._cd?.control?._status?.(),!!this._cd?.control?.valid}get isInvalid(){return!!this._cd?.control?.invalid}get isPending(){return!!this._cd?.control?.pending}get isSubmitted(){return this._cd?._submitted?.(),!!this._cd?.submitted}};var iv=(()=>{class e extends ru{constructor(t){super(t)}static \u0275fac=function(r){return new(r||e)(fe(Zr,2))};static \u0275dir=te({type:e,selectors:[["","formControlName",""],["","ngModel",""],["","formControl",""]],hostVars:14,hostBindings:function(r,o){r&2&&j("ng-untouched",o.isUntouched)("ng-touched",o.isTouched)("ng-pristine",o.isPristine)("ng-dirty",o.isDirty)("ng-valid",o.isValid)("ng-invalid",o.isInvalid)("ng-pending",o.isPending)},standalone:!1,features:[Ve]})}return e})();function Hg(e,n){let t=e.indexOf(n);t>-1&&e.splice(t,1)}function Ug(e){return typeof e=="object"&&e!==null&&Object.keys(e).length===2&&"value"in e&&"disabled"in e}var AD=class extends tu{defaultValue=null;_onChange=[];_pendingValue;_pendingChange=!1;constructor(n=null,t,r){super(fD(t),mD(r,t)),this._applyFormState(n),this._setUpdateStrategy(t),this._initObservables(),this.updateValueAndValidity({onlySelf:!0,emitEvent:!!this.asyncValidator}),ba(t)&&(t.nonNullable||t.initialValueIsDefault)&&(Ug(n)?this.defaultValue=n.value:this.defaultValue=n)}setValue(n,t={}){Oe(()=>{this.value=this._pendingValue=n,this._onChange.length&&t.emitModelToViewChange!==!1&&this._onChange.forEach(r=>r(this.value,t.emitViewToModelChange!==!1)),this.updateValueAndValidity(t)})}patchValue(n,t={}){this.setValue(n,t)}reset(n=this.defaultValue,t={}){this._applyFormState(n),this.markAsPristine(t),this.markAsUntouched(t),this.setValue(this.value,t),t.overwriteDefaultValue&&(this.defaultValue=this.value),this._pendingChange=!1,t?.emitEvent!==!1&&this._events.next(new ui(this))}_updateValue(){}_anyControls(n){return!1}_allControlsDisabled(){return this.disabled}registerOnChange(n){this._onChange.push(n)}_unregisterOnChange(n){Hg(this._onChange,n)}registerOnDisabledChange(n){this._onDisabledChange.push(n)}_unregisterOnDisabledChange(n){Hg(this._onDisabledChange,n)}_forEachChild(n){}_syncPendingControls(){return this.updateOn==="submit"&&(this._pendingDirty&&this.markAsDirty(),this._pendingTouched&&this.markAsTouched(),this._pendingChange)?(this.setValue(this._pendingValue,{onlySelf:!0,emitModelToViewChange:!1}),!0):!1}_applyFormState(n){Ug(n)?(this.value=this._pendingValue=n.value,n.disabled?this.disable({onlySelf:!0,emitEvent:!1}):this.enable({onlySelf:!0,emitEvent:!1})):this.value=this._pendingValue=n}};var RD={provide:Zr,useExisting:Be(()=>au)},$g=Promise.resolve(),au=(()=>{class e extends Zr{_changeDetectorRef;callSetDisabledState;control=new AD;static ngAcceptInputType_isDisabled;_registered=!1;viewModel;name="";isDisabled;model;options;update=new se;constructor(t,r,o,i,s,a,c,l){super(c,l,i),this._changeDetectorRef=s,this.callSetDisabledState=a,this._parent=t,this._setValidators(r),this._setAsyncValidators(o)}ngOnChanges(t){if(this._checkForErrors(),!this._registered||"name"in t){if(this._registered&&(this._checkName(),this.formDirective)){let r=t.name.previousValue;this.formDirective.removeControl({name:r,path:this._getPath(r)})}this._setUpControl()}"isDisabled"in t&&this._updateDisabled(t),ND(t,this.viewModel)&&(this._updateValue(this.model),this.viewModel=this.model)}ngOnDestroy(){this.formDirective?.removeControl(this)}\u0275ngControlCreate(t){super.ngControlCreate(t)}\u0275ngControlUpdate(t){super.ngControlUpdate(t,!1)}get shouldBindRequired(){return!1}get path(){return this._getPath(this.name)}get formDirective(){return this._parent?this._parent.formDirective:null}viewToModelUpdate(t){this.viewModel=t,this.update.emit(t)}_setUpControl(){this._setUpdateStrategy(),this._isStandalone()?this._setUpStandalone():this.formDirective.addControl(this),this._registered=!0}_setUpdateStrategy(){this.options&&this.options.updateOn!=null&&(this.control._updateOn=this.options.updateOn)}_isStandalone(){return!this._parent||!!(this.options&&this.options.standalone)}_setUpStandalone(){this.isCustomControlBased?this.setupCustomControl():(this.valueAccessor??=this.selectedValueAccessor,jg(this.control,this,this.callSetDisabledState)),this.control.updateValueAndValidity({emitEvent:!1})}_setupWithForm(t){this.isCustomControlBased?this.setupCustomControl():(this.valueAccessor??=this.selectedValueAccessor,jg(this.control,this,t))}_checkForErrors(){this._checkName()}_checkName(){this.options&&this.options.name&&(this.name=this.options.name),!this._isStandalone()&&this.name}_updateValue(t){$g.then(()=>{this.control.setValue(t,{emitViewToModelChange:!1}),this._changeDetectorRef?.markForCheck()})}_updateDisabled(t){let r=t.isDisabled.currentValue,o=r!==0&&B(r);$g.then(()=>{o&&!this.control.disabled?this.control.disable():!o&&this.control.disabled&&this.control.enable(),this._changeDetectorRef?.markForCheck()})}_getPath(t){return this._parent?ED(t,this._parent):[t]}static \u0275fac=function(r){return new(r||e)(fe(eu,9),fe(ya,10),fe(eD,10),fe(Yr,10),fe(tn,8),fe(rv,8),fe(ae,8),fe(Re,8))};static \u0275dir=te({type:e,selectors:[["","ngModel","",3,"formControlName","",3,"formControl",""]],inputs:{name:"name",isDisabled:[0,"disabled","isDisabled"],model:[0,"ngModel","model"],options:[0,"ngModelOptions","options"]},outputs:{update:"ngModelChange"},exportAs:["ngModel"],standalone:!1,features:[pt([RD,xD]),Ve,Pr,sd(null)]})}return e})();var kD=(()=>{class e{static \u0275fac=function(r){return new(r||e)};static \u0275mod=ee({type:e});static \u0275inj=K({})}return e})();var sv=(()=>{class e{static withConfig(t){return{ngModule:e,providers:[{provide:rv,useValue:t.callSetDisabledState??su}]}}static \u0275fac=function(r){return new(r||e)};static \u0275mod=ee({type:e});static \u0275inj=K({imports:[kD]})}return e})();var PD=["*"],_a=(()=>{class e{labelPosition="after";static \u0275fac=function(r){return new(r||e)};static \u0275cmp=H({type:e,selectors:[["","mat-internal-form-field",""]],hostAttrs:[1,"mdc-form-field","mat-internal-form-field"],hostVars:2,hostBindings:function(r,o){r&2&&j("mdc-form-field--align-end",o.labelPosition==="before")},inputs:{labelPosition:"labelPosition"},ngContentSelectors:PD,decls:1,vars:0,template:function(r,o){r&1&&(X(),R(0))},styles:[`.mat-internal-form-field {
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
`],encapsulation:2})}return e})();var FD=["switch"],LD=["*"];function VD(e,n){e&1&&(v(0,"span",11),as(),v(1,"svg",13),N(2,"path",14),y(),v(3,"svg",15),N(4,"path",16),y()())}var jD=new g("mat-slide-toggle-default-options",{providedIn:"root",factory:()=>({disableToggleValue:!1,hideIcon:!1,disabledInteractive:!1})}),Ea=class{source;checked;constructor(n,t){this.source=n,this.checked=t}},cu=(()=>{class e{_elementRef=p(q);_focusMonitor=p(Xn);_changeDetectorRef=p(tn);defaults=p(jD);_onChange=t=>{};_onTouched=()=>{};_validatorOnChange=()=>{};_uniqueId;_checked=!1;_createChangeEvent(t){return new Ea(this,t)}_labelId;get buttonId(){return`${this.id||this._uniqueId}-button`}_switchElement;focus(){this._switchElement.nativeElement.focus()}_noopAnimations=mt();_focused=!1;name=null;id;labelPosition="after";ariaLabel=null;ariaLabelledby=null;ariaDescribedby;required=!1;color;disabled=!1;fullWidth=!1;disableRipple=!1;tabIndex=0;get checked(){return this._checked}set checked(t){this._checked=t,this._changeDetectorRef.markForCheck()}hideIcon;disabledInteractive;change=new se;toggleChange=new se;get inputId(){return`${this.id||this._uniqueId}-input`}constructor(){p(Pt).load(zr);let t=p(new en("tabindex"),{optional:!0}),r=this.defaults;this.tabIndex=t==null?0:parseInt(t)||0,this.color=r.color||"accent",this.id=this._uniqueId=p(rn).getId("mat-mdc-slide-toggle-"),this.hideIcon=r.hideIcon??!1,this.disabledInteractive=r.disabledInteractive??!1,this._labelId=this._uniqueId+"-label"}ngAfterContentInit(){this._focusMonitor.monitor(this._elementRef,!0).subscribe(t=>{t==="keyboard"||t==="program"?(this._focused=!0,this._changeDetectorRef.markForCheck()):t||Promise.resolve().then(()=>{this._focused=!1,this._onTouched(),this._changeDetectorRef.markForCheck()})})}ngOnChanges(t){t.required&&this._validatorOnChange()}ngOnDestroy(){this._focusMonitor.stopMonitoring(this._elementRef)}writeValue(t){this.checked=!!t}registerOnChange(t){this._onChange=t}registerOnTouched(t){this._onTouched=t}validate(t){return this.required&&t.value!==!0?{required:!0}:null}registerOnValidatorChange(t){this._validatorOnChange=t}setDisabledState(t){this.disabled=t,this._changeDetectorRef.markForCheck()}toggle(){this.checked=!this.checked,this._onChange(this.checked)}_emitChangeEvent(){this._onChange(this.checked),this.change.emit(this._createChangeEvent(this.checked))}_handleClick(){this.disabled||(this.toggleChange.emit(),this.defaults.disableToggleValue||(this.checked=!this.checked,this._onChange(this.checked),this.change.emit(new Ea(this,this.checked))))}_getAriaLabelledBy(){return this.ariaLabelledby?this.ariaLabelledby:this.ariaLabel?null:this._labelId}static \u0275fac=function(r){return new(r||e)};static \u0275cmp=H({type:e,selectors:[["mat-slide-toggle"]],viewQuery:function(r,o){if(r&1&&Vr(FD,5),r&2){let i;xt(i=At())&&(o._switchElement=i.first)}},hostAttrs:[1,"mat-mdc-slide-toggle"],hostVars:15,hostBindings:function(r,o){r&2&&(Zs("id",o.id),De("tabindex",null)("aria-label",null)("name",null)("aria-labelledby",null),Rt(o.color?"mat-"+o.color:""),j("mat-mdc-slide-toggle-focused",o._focused)("mat-mdc-slide-toggle-checked",o.checked)("mat-slide-toggle-full-width",o.fullWidth)("_mat-animation-noopable",o._noopAnimations))},inputs:{name:"name",id:"id",labelPosition:"labelPosition",ariaLabel:[0,"aria-label","ariaLabel"],ariaLabelledby:[0,"aria-labelledby","ariaLabelledby"],ariaDescribedby:[0,"aria-describedby","ariaDescribedby"],required:[2,"required","required",B],color:"color",disabled:[2,"disabled","disabled",B],fullWidth:[2,"fullWidth","fullWidth",B],disableRipple:[2,"disableRipple","disableRipple",B],tabIndex:[2,"tabIndex","tabIndex",t=>t==null?0:Yn(t)],checked:[2,"checked","checked",B],hideIcon:[2,"hideIcon","hideIcon",B],disabledInteractive:[2,"disabledInteractive","disabledInteractive",B]},outputs:{change:"change",toggleChange:"toggleChange"},exportAs:["matSlideToggle"],features:[pt([{provide:Yr,useExisting:Be(()=>e),multi:!0},{provide:ya,useExisting:e,multi:!0}]),Pr],ngContentSelectors:LD,decls:14,vars:27,consts:[["switch",""],["mat-internal-form-field","",3,"labelPosition"],["role","switch","type","button",1,"mdc-switch",3,"click","tabIndex","disabled"],[1,"mat-mdc-slide-toggle-touch-target"],[1,"mdc-switch__track"],[1,"mdc-switch__handle-track"],[1,"mdc-switch__handle"],[1,"mdc-switch__shadow"],[1,"mdc-elevation-overlay"],[1,"mdc-switch__ripple"],["mat-ripple","",1,"mat-mdc-slide-toggle-ripple","mat-focus-indicator",3,"matRippleTrigger","matRippleDisabled","matRippleCentered"],[1,"mdc-switch__icons"],[1,"mdc-label",3,"click","for"],["viewBox","0 0 24 24","aria-hidden","true",1,"mdc-switch__icon","mdc-switch__icon--on"],["d","M19.69,5.23L8.96,15.96l-4.23-4.23L2.96,13.5l6,6L21.46,7L19.69,5.23z"],["viewBox","0 0 24 24","aria-hidden","true",1,"mdc-switch__icon","mdc-switch__icon--off"],["d","M20 13H4v-2h16v2z"]],template:function(r,o){if(r&1&&(X(),v(0,"div",1)(1,"button",2,0),T("click",function(){return o._handleClick()}),N(3,"div",3)(4,"span",4),v(5,"span",5)(6,"span",6)(7,"span",7),N(8,"span",8),y(),v(9,"span",9),N(10,"span",10),y(),lt(11,VD,5,0,"span",11),y()()(),v(12,"label",12),T("click",function(s){return s.stopPropagation()}),R(13),y()()),r&2){let i=ft(2);ce("labelPosition",o.labelPosition),W(),j("mdc-switch--selected",o.checked)("mdc-switch--unselected",!o.checked)("mdc-switch--checked",o.checked)("mdc-switch--disabled",o.disabled)("mat-mdc-slide-toggle-disabled-interactive",o.disabledInteractive),ce("tabIndex",o.disabled&&!o.disabledInteractive?-1:o.tabIndex)("disabled",o.disabled&&!o.disabledInteractive),De("id",o.buttonId)("name",o.name)("aria-label",o.ariaLabel)("aria-labelledby",o._getAriaLabelledBy())("aria-describedby",o.ariaDescribedby)("aria-required",o.required||null)("aria-checked",o.checked)("aria-disabled",o.disabled&&o.disabledInteractive?"true":null),W(9),ce("matRippleTrigger",i)("matRippleDisabled",o.disableRipple||o.disabled)("matRippleCentered",!0),W(),dt(o.hideIcon?-1:11),W(),ce("for",o.buttonId),De("id",o._labelId)}},dependencies:[ca,_a],styles:[`.mdc-switch {
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
`],encapsulation:2})}return e})(),av=(()=>{class e{static \u0275fac=function(r){return new(r||e)};static \u0275mod=ee({type:e});static \u0275inj=K({imports:[cu,Pe]})}return e})();var lu=(()=>{class e{_listeners=[];notify(t,r){for(let o of this._listeners)o(t,r)}listen(t){return this._listeners.push(t),()=>{this._listeners=this._listeners.filter(r=>t!==r)}}ngOnDestroy(){this._listeners=[]}static \u0275fac=function(r){return new(r||e)};static \u0275prov=Y({token:e,factory:e.\u0275fac})}return e})();var HD=["input"],UD=["formField"],$D=["*"],wa=class{source;value;constructor(n,t){this.source=n,this.value=t}},zD={provide:Yr,useExisting:Be(()=>du),multi:!0},cv=new g("MatRadioGroup"),GD=new g("mat-radio-default-options",{providedIn:"root",factory:()=>({color:"accent",disabledInteractive:!1})}),du=(()=>{class e{_changeDetector=p(tn);_value=null;_name=p(rn).getId("mat-radio-group-");_selected=null;_isInitialized=!1;_labelPosition="after";_disabled=!1;_required=!1;_buttonChanges;_controlValueAccessorChangeFn=()=>{};onTouched=()=>{};change=new se;_radios;color;get name(){return this._name}set name(t){this._name=t,this._updateRadioButtonNames()}get labelPosition(){return this._labelPosition}set labelPosition(t){this._labelPosition=t==="before"?"before":"after",this._markRadiosForCheck()}get value(){return this._value}set value(t){this._value!==t&&(this._value=t,this._updateSelectedRadioFromValue(),this._checkSelectedRadioButton())}_checkSelectedRadioButton(){this._selected&&!this._selected.checked&&(this._selected.checked=!0)}get selected(){return this._selected}set selected(t){this._selected=t,this.value=t?t.value:null,this._checkSelectedRadioButton()}get disabled(){return this._disabled}set disabled(t){this._disabled=t,this._markRadiosForCheck()}get required(){return this._required}set required(t){this._required=t,this._markRadiosForCheck()}get disabledInteractive(){return this._disabledInteractive}set disabledInteractive(t){this._disabledInteractive=t,this._markRadiosForCheck()}_disabledInteractive=!1;ngAfterContentInit(){this._isInitialized=!0,this._buttonChanges=this._radios.changes.subscribe(()=>{this.selected&&!this._radios.find(t=>t===this.selected)&&(this._selected=null)})}ngOnDestroy(){this._buttonChanges?.unsubscribe()}_touch(){this.onTouched&&this.onTouched()}_updateRadioButtonNames(){this._radios&&this._radios.forEach(t=>{t.name=this.name,t._markForCheck()})}_updateSelectedRadioFromValue(){let t=this._selected!==null&&this._selected.value===this._value;this._radios&&!t&&(this._selected=null,this._radios.forEach(r=>{r.checked=this.value===r.value,r.checked&&(this._selected=r)}))}_emitChangeEvent(){this._isInitialized&&this.change.emit(new wa(this._selected,this._value))}_markRadiosForCheck(){this._radios&&this._radios.forEach(t=>t._markForCheck())}writeValue(t){this.value=t,this._changeDetector.markForCheck()}registerOnChange(t){this._controlValueAccessorChangeFn=t}registerOnTouched(t){this.onTouched=t}setDisabledState(t){this.disabled=t,this._changeDetector.markForCheck()}static \u0275fac=function(r){return new(r||e)};static \u0275dir=te({type:e,selectors:[["mat-radio-group"]],contentQueries:function(r,o,i){if(r&1&&Lr(i,Sa,5),r&2){let s;xt(s=At())&&(o._radios=s)}},hostAttrs:["role","radiogroup",1,"mat-mdc-radio-group"],inputs:{color:"color",name:"name",labelPosition:"labelPosition",value:"value",selected:"selected",disabled:[2,"disabled","disabled",B],required:[2,"required","required",B],disabledInteractive:[2,"disabledInteractive","disabledInteractive",B]},outputs:{change:"change"},exportAs:["matRadioGroup"],features:[pt([zD,{provide:cv,useExisting:e}])]})}return e})(),Sa=(()=>{class e{_elementRef=p(q);_changeDetector=p(tn);_focusMonitor=p(Xn);_radioDispatcher=p(lu);_defaultOptions=p(GD,{optional:!0});_ngZone=p(z);_renderer=p(Re);_uniqueId=p(rn).getId("mat-radio-");_cleanupClick;id=this._uniqueId;name;ariaLabel;ariaLabelledby;ariaDescribedby;disableRipple=!1;tabIndex=0;get checked(){return this._checked}set checked(t){this._checked!==t&&(this._checked=t,t&&this.radioGroup&&this.radioGroup.value!==this.value?this.radioGroup.selected=this:!t&&this.radioGroup&&this.radioGroup.value===this.value&&(this.radioGroup.selected=null),t&&this._radioDispatcher.notify(this.id,this.name),this._changeDetector.markForCheck())}get value(){return this._value}set value(t){this._value!==t&&(this._value=t,this.radioGroup!==null&&(this.checked||(this.checked=this.radioGroup.value===t),this.checked&&(this.radioGroup.selected=this)))}get labelPosition(){return this._labelPosition||this.radioGroup&&this.radioGroup.labelPosition||"after"}set labelPosition(t){this._labelPosition=t}_labelPosition;get disabled(){return this._disabled||this.radioGroup!==null&&this.radioGroup.disabled}set disabled(t){this._setDisabled(t)}get required(){return this._required||this.radioGroup&&this.radioGroup.required}set required(t){t!==this._required&&this._changeDetector.markForCheck(),this._required=t}get color(){return this._color||this.radioGroup&&this.radioGroup.color||this._defaultOptions&&this._defaultOptions.color||"accent"}set color(t){this._color=t}_color;get disabledInteractive(){return this._disabledInteractive||this.radioGroup!==null&&this.radioGroup.disabledInteractive}set disabledInteractive(t){this._disabledInteractive=t}_disabledInteractive;change=new se;radioGroup;get inputId(){return`${this.id||this._uniqueId}-input`}_checked=!1;_disabled=!1;_required=!1;_value=null;_removeUniqueSelectionListener=()=>{};_previousTabIndex;_inputElement;_rippleTrigger;_noopAnimations=mt();_injector=p(ae);constructor(){p(Pt).load(zr);let t=p(cv,{optional:!0}),r=p(new en("tabindex"),{optional:!0});this.radioGroup=t,this._disabledInteractive=this._defaultOptions?.disabledInteractive??!1,r&&(this.tabIndex=Yn(r,0))}focus(t,r){r?this._focusMonitor.focusVia(this._inputElement,r,t):this._inputElement.nativeElement.focus(t)}_markForCheck(){this._changeDetector.markForCheck()}ngOnInit(){this.radioGroup&&(this.checked=this.radioGroup.value===this._value,this.checked&&(this.radioGroup.selected=this),this.name=this.radioGroup.name),this._removeUniqueSelectionListener=this._radioDispatcher.listen((t,r)=>{t!==this.id&&r===this.name&&(this.checked=!1)})}ngDoCheck(){this._updateTabIndex()}ngAfterViewInit(){this._updateTabIndex(),this._focusMonitor.monitor(this._elementRef,!0).subscribe(t=>{!t&&this.radioGroup&&this.radioGroup._touch()}),this._ngZone.runOutsideAngular(()=>{this._cleanupClick=this._renderer.listen(this._inputElement.nativeElement,"click",this._onInputClick)})}ngOnDestroy(){this._cleanupClick?.(),this._focusMonitor.stopMonitoring(this._elementRef),this._removeUniqueSelectionListener()}_emitChangeEvent(){this.change.emit(new wa(this,this._value))}_isRippleDisabled(){return this.disableRipple||this.disabled}_onInputInteraction(t){if(t.stopPropagation(),!this.checked&&!this.disabled){let r=this.radioGroup&&this.value!==this.radioGroup.value;this.checked=!0,this._emitChangeEvent(),this.radioGroup&&(this.radioGroup._controlValueAccessorChangeFn(this.value),r&&this.radioGroup._emitChangeEvent())}}_setDisabled(t){this._disabled!==t&&(this._disabled=t,this._changeDetector.markForCheck())}_onInputClick=t=>{this.disabled&&this.disabledInteractive&&t.preventDefault()};_updateTabIndex(){let t=this.radioGroup,r;if(!t||!t.selected||this.disabled?r=this.tabIndex:r=t.selected===this?this.tabIndex:-1,r!==this._previousTabIndex){let o=this._inputElement?.nativeElement;o&&(o.setAttribute("tabindex",r+""),this._previousTabIndex=r,$s(()=>{queueMicrotask(()=>{t&&t.selected&&t.selected!==this&&document.activeElement===o&&(t.selected?._inputElement.nativeElement.focus(),document.activeElement===o&&this._inputElement.nativeElement.blur())})},{injector:this._injector}))}}static \u0275fac=function(r){return new(r||e)};static \u0275cmp=H({type:e,selectors:[["mat-radio-button"]],viewQuery:function(r,o){if(r&1&&Vr(HD,5)(UD,7,q),r&2){let i;xt(i=At())&&(o._inputElement=i.first),xt(i=At())&&(o._rippleTrigger=i.first)}},hostAttrs:[1,"mat-mdc-radio-button"],hostVars:19,hostBindings:function(r,o){r&1&&T("focus",function(){return o._inputElement.nativeElement.focus()}),r&2&&(De("id",o.id)("tabindex",null)("aria-label",null)("aria-labelledby",null)("aria-describedby",null),j("mat-primary",o.color==="primary")("mat-accent",o.color==="accent")("mat-warn",o.color==="warn")("mat-mdc-radio-checked",o.checked)("mat-mdc-radio-disabled",o.disabled)("mat-mdc-radio-disabled-interactive",o.disabledInteractive)("_mat-animation-noopable",o._noopAnimations))},inputs:{id:"id",name:"name",ariaLabel:[0,"aria-label","ariaLabel"],ariaLabelledby:[0,"aria-labelledby","ariaLabelledby"],ariaDescribedby:[0,"aria-describedby","ariaDescribedby"],disableRipple:[2,"disableRipple","disableRipple",B],tabIndex:[2,"tabIndex","tabIndex",t=>t==null?0:Yn(t)],checked:[2,"checked","checked",B],value:"value",labelPosition:"labelPosition",disabled:[2,"disabled","disabled",B],required:[2,"required","required",B],color:"color",disabledInteractive:[2,"disabledInteractive","disabledInteractive",B]},outputs:{change:"change"},exportAs:["matRadioButton"],ngContentSelectors:$D,decls:13,vars:17,consts:[["formField",""],["input",""],["mat-internal-form-field","",3,"labelPosition","for"],[1,"mdc-radio"],[1,"mat-mdc-radio-touch-target"],["type","radio","aria-invalid","false",1,"mdc-radio__native-control",3,"change","id","checked","disabled","required"],["aria-hidden","true",1,"mdc-radio__background"],[1,"mdc-radio__outer-circle"],[1,"mdc-radio__inner-circle"],["mat-ripple","","aria-hidden","true",1,"mat-radio-ripple","mat-focus-indicator",3,"matRippleTrigger","matRippleDisabled","matRippleCentered"],[1,"mat-ripple-element","mat-radio-persistent-ripple"],[1,"mat-internal-form-field-label","mdc-label"]],template:function(r,o){r&1&&(X(),v(0,"label",2,0)(2,"span",3),N(3,"span",4),v(4,"input",5,1),T("change",function(s){return o._onInputInteraction(s)}),y(),v(6,"span",6),N(7,"span",7)(8,"span",8),y(),v(9,"span",9),N(10,"span",10),y()(),v(11,"span",11),R(12),y()()),r&2&&(ce("labelPosition",o.labelPosition)("for",o.inputId),W(2),j("mdc-radio--disabled",o.disabled),W(2),ce("id",o.inputId)("checked",o.checked)("disabled",o.disabled&&!o.disabledInteractive)("required",o.required),De("name",o.name)("value",o.value)("aria-label",o.ariaLabel)("aria-labelledby",o.ariaLabelledby)("aria-describedby",o.ariaDescribedby)("aria-disabled",o.disabled&&o.disabledInteractive?"true":null),W(5),ce("matRippleTrigger",o._rippleTrigger.nativeElement)("matRippleDisabled",o._isRippleDisabled())("matRippleCentered",!0))},dependencies:[ca,_a],styles:[`.mat-mdc-radio-button {
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
`],encapsulation:2})}return e})(),lv=(()=>{class e{static \u0275fac=function(r){return new(r||e)};static \u0275mod=ee({type:e});static \u0275inj=K({imports:[ua,Sa,Pe]})}return e})();var qD=["*"];var ZD=[[["","mat-card-avatar",""],["","matCardAvatar",""]],[["mat-card-title"],["mat-card-subtitle"],["","mat-card-title",""],["","mat-card-subtitle",""],["","matCardTitle",""],["","matCardSubtitle",""]],"*"],YD=["[mat-card-avatar], [matCardAvatar]",`mat-card-title, mat-card-subtitle,
      [mat-card-title], [mat-card-subtitle],
      [matCardTitle], [matCardSubtitle]`,"*"],QD=new g("MAT_CARD_CONFIG"),dv=(()=>{class e{appearance;constructor(){let t=p(QD,{optional:!0});this.appearance=t?.appearance||"raised"}static \u0275fac=function(r){return new(r||e)};static \u0275cmp=H({type:e,selectors:[["mat-card"]],hostAttrs:[1,"mat-mdc-card","mdc-card"],hostVars:8,hostBindings:function(r,o){r&2&&j("mat-mdc-card-outlined",o.appearance==="outlined")("mdc-card--outlined",o.appearance==="outlined")("mat-mdc-card-filled",o.appearance==="filled")("mdc-card--filled",o.appearance==="filled")},inputs:{appearance:"appearance"},exportAs:["matCard"],ngContentSelectors:qD,decls:1,vars:0,template:function(r,o){r&1&&(X(),R(0))},styles:[`.mat-mdc-card {
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
`],encapsulation:2})}return e})(),uv=(()=>{class e{static \u0275fac=function(r){return new(r||e)};static \u0275dir=te({type:e,selectors:[["mat-card-title"],["","mat-card-title",""],["","matCardTitle",""]],hostAttrs:[1,"mat-mdc-card-title"]})}return e})();var fv=(()=>{class e{static \u0275fac=function(r){return new(r||e)};static \u0275dir=te({type:e,selectors:[["mat-card-content"]],hostAttrs:[1,"mat-mdc-card-content"]})}return e})();var pv=(()=>{class e{static \u0275fac=function(r){return new(r||e)};static \u0275cmp=H({type:e,selectors:[["mat-card-header"]],hostAttrs:[1,"mat-mdc-card-header"],ngContentSelectors:YD,decls:4,vars:0,consts:[[1,"mat-mdc-card-header-text"]],template:function(r,o){r&1&&(X(ZD),R(0),Te(1,"div",0),R(2,1),Me(),R(3,2))},encapsulation:2})}return e})();var mv=(()=>{class e{static \u0275fac=function(r){return new(r||e)};static \u0275mod=ee({type:e});static \u0275inj=K({imports:[Pe]})}return e})();var XD=["*",[["mat-toolbar-row"]]],JD=["*","mat-toolbar-row"],uu=(()=>{class e{static \u0275fac=function(r){return new(r||e)};static \u0275dir=te({type:e,selectors:[["mat-toolbar-row"]],hostAttrs:[1,"mat-toolbar-row"],exportAs:["matToolbarRow"]})}return e})(),hv=(()=>{class e{_elementRef=p(q);_platform=p(We);_document=p(L);color;_toolbarRows;ngAfterViewInit(){this._platform.isBrowser&&(this._checkToolbarMixedModes(),this._toolbarRows.changes.subscribe(()=>this._checkToolbarMixedModes()))}_checkToolbarMixedModes(){this._toolbarRows.length}static \u0275fac=function(r){return new(r||e)};static \u0275cmp=H({type:e,selectors:[["mat-toolbar"]],contentQueries:function(r,o,i){if(r&1&&Lr(i,uu,5),r&2){let s;xt(s=At())&&(o._toolbarRows=s)}},hostAttrs:[1,"mat-toolbar"],hostVars:6,hostBindings:function(r,o){r&2&&(Rt(o.color?"mat-"+o.color:""),j("mat-toolbar-multiple-rows",o._toolbarRows.length>0)("mat-toolbar-single-row",o._toolbarRows.length===0))},inputs:{color:"color"},exportAs:["matToolbar"],ngContentSelectors:JD,decls:2,vars:0,template:function(r,o){r&1&&(X(XD),R(0),R(1,1))},styles:[`.mat-toolbar {
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
`],encapsulation:2})}return e})();var gv=(()=>{class e{static \u0275fac=function(r){return new(r||e)};static \u0275mod=ee({type:e});static \u0275inj=K({imports:[Pe]})}return e})();var Ia=class e{open=Ne(!1);spin=Ne(!1);direction=Ne("up");stopPropagation(n){n.stopPropagation()}doAction(n){console.log(n)}static \u0275fac=function(t){return new(t||e)};static \u0275cmp=H({type:e,selectors:[["app-root"]],decls:117,vars:12,consts:[["myFab",""],["myFab2",""],["myFab3",""],[1,"example-spacer"],["matButton","","href","https://github.com/ecodev/fab-speed-dial"],["src","github-circle-transparent.svg","alt","GitHub logo",1,"github-logo"],[1,"fab-demo-actions"],[1,"mat-body-1"],["name","direction",3,"ngModelChange","ngModel"],["value","up"],["value","down"],["value","left"],["value","right"],[3,"ngModelChange","ngModel"],[1,"container-fab-demo"],[3,"ngModelChange","click","ngModel"],[3,"openChange","direction","open"],[3,"spin"],["matFab","",3,"click"],["fontIcon","add",1,"spin180"],["matMiniFab","",3,"click"],["fontIcon","search"],["fontIcon","edit"],["fontIcon","home"],["href","?param=value","matMiniFab",""],["fontIcon","link"],[3,"mouseenter","mouseleave"],[3,"direction"],["fontIcon","check",1,"spin360"],["fontIcon","add"],["fontIcon","menu"]],template:function(t,r){if(t&1){let o=ud();v(0,"mat-toolbar")(1,"mat-toolbar-row")(2,"span"),ke(3,"FAB Speed Dial"),y(),N(4,"span",3),v(5,"a",4),N(6,"img",5),ke(7," GitHub"),y()()(),v(8,"mat-card",6)(9,"mat-card-header")(10,"mat-card-title"),ke(11,"Options"),y()(),v(12,"mat-card-content",7)(13,"p"),ke(14," Direction: "),v(15,"mat-radio-group",8),Zn("ngModelChange",function(s){return St(o),jr(r.direction,s)||(r.direction=s),It(s)}),v(16,"mat-radio-button",9),ke(17,"Up"),y(),v(18,"mat-radio-button",10),ke(19,"Down"),y(),v(20,"mat-radio-button",11),ke(21,"Left"),y(),v(22,"mat-radio-button",12),ke(23,"Right"),y()(),jo(),y(),v(24,"p")(25,"mat-slide-toggle",13),Zn("ngModelChange",function(s){return St(o),jr(r.spin,s)||(r.spin=s),It(s)}),ke(26,"Enable Spinning"),y(),jo(),y()()(),v(27,"div",14)(28,"mat-card")(29,"mat-card-header")(30,"mat-card-title"),ke(31,"Click me"),y()(),v(32,"mat-card-content",7)(33,"mat-slide-toggle",15),Zn("ngModelChange",function(s){return St(o),jr(r.open,s)||(r.open=s),It(s)}),T("click",function(s){return r.stopPropagation(s)}),ke(34,"Open"),y(),jo(),v(35,"eco-fab-speed-dial",16),Zn("openChange",function(s){return St(o),jr(r.open,s)||(r.open=s),It(s)}),v(36,"eco-fab-speed-dial-trigger",17)(37,"button",18),T("click",function(){return r.doAction("trigger")}),N(38,"mat-icon",19),y()(),v(39,"eco-fab-speed-dial-actions")(40,"button",20),T("click",function(){return r.doAction("action1")}),N(41,"mat-icon",21),y(),v(42,"button",20),T("click",function(){return r.doAction("action2")}),N(43,"mat-icon",22),y(),v(44,"button",20),T("click",function(){return r.doAction("action3")}),N(45,"mat-icon",23),y(),v(46,"a",24),N(47,"mat-icon",25),y()()()()(),v(48,"mat-card",26),T("mouseenter",function(){St(o);let s=ft(54),a=ft(66),c=ft(82);return s.open.set(!0),a.open.set(!0),It(c.open.set(!0))})("mouseleave",function(){St(o);let s=ft(54),a=ft(66),c=ft(82);return s.open.set(!1),a.open.set(!1),It(c.open.set(!1))}),v(49,"mat-card-header")(50,"mat-card-title"),ke(51,"Hover me"),y()(),v(52,"mat-card-content",7)(53,"eco-fab-speed-dial",27,0)(55,"eco-fab-speed-dial-trigger",17)(56,"button",18),T("click",function(){return r.doAction("trigger")}),N(57,"mat-icon",28),y()(),v(58,"eco-fab-speed-dial-actions")(59,"button",20),T("click",function(){return r.doAction("action1")}),N(60,"mat-icon",29),y(),v(61,"button",20),T("click",function(){return r.doAction("action2")}),N(62,"mat-icon",22),y(),v(63,"button",20),T("click",function(){return r.doAction("action3")}),N(64,"mat-icon",30),y()()(),v(65,"eco-fab-speed-dial",27,1)(67,"eco-fab-speed-dial-trigger",17)(68,"button",18),T("click",function(){return r.doAction("trigger")}),N(69,"mat-icon",28),y()(),v(70,"eco-fab-speed-dial-actions")(71,"button",20),T("click",function(){return r.doAction("action1")}),N(72,"mat-icon",29),y(),v(73,"button",20),T("click",function(){return r.doAction("action2")}),N(74,"mat-icon",22),y(),v(75,"button",20),T("click",function(){return r.doAction("action3")}),N(76,"mat-icon",30),y(),v(77,"button",20),T("click",function(){return r.doAction("action1")}),N(78,"mat-icon",29),y(),v(79,"button",20),T("click",function(){return r.doAction("action2")}),N(80,"mat-icon",22),y()()(),v(81,"eco-fab-speed-dial",27,2)(83,"eco-fab-speed-dial-trigger",17)(84,"button",18),T("click",function(){return r.doAction("trigger")}),N(85,"mat-icon",28),y()(),v(86,"eco-fab-speed-dial-actions")(87,"button",20),T("click",function(){return r.doAction("action1")}),N(88,"mat-icon",29),y(),v(89,"button",20),T("click",function(){return r.doAction("action2")}),N(90,"mat-icon",22),y(),v(91,"button",20),T("click",function(){return r.doAction("action3")}),N(92,"mat-icon",30),y(),v(93,"button",20),T("click",function(){return r.doAction("action1")}),N(94,"mat-icon",29),y(),v(95,"button",20),T("click",function(){return r.doAction("action2")}),N(96,"mat-icon",22),y(),v(97,"button",20),T("click",function(){return r.doAction("action3")}),N(98,"mat-icon",30),y(),v(99,"button",20),T("click",function(){return r.doAction("action1")}),N(100,"mat-icon",29),y(),v(101,"button",20),T("click",function(){return r.doAction("action2")}),N(102,"mat-icon",22),y(),v(103,"button",20),T("click",function(){return r.doAction("action3")}),N(104,"mat-icon",30),y(),v(105,"button",20),T("click",function(){return r.doAction("action1")}),N(106,"mat-icon",29),y(),v(107,"button",20),T("click",function(){return r.doAction("action2")}),N(108,"mat-icon",22),y(),v(109,"button",20),T("click",function(){return r.doAction("action3")}),N(110,"mat-icon",30),y(),v(111,"button",20),T("click",function(){return r.doAction("action1")}),N(112,"mat-icon",29),y(),v(113,"button",20),T("click",function(){return r.doAction("action2")}),N(114,"mat-icon",22),y(),v(115,"button",20),T("click",function(){return r.doAction("action3")}),N(116,"mat-icon",30),y()()()()()()}t&2&&(W(15),qn("ngModel",r.direction),Bo(),W(10),qn("ngModel",r.spin),Bo(),W(8),qn("ngModel",r.open),Bo(),W(2),ce("direction",r.direction()),qn("open",r.open),W(),ce("spin",r.spin()),W(17),ce("direction",r.direction()),W(2),ce("spin",r.spin()),W(10),ce("direction",r.direction()),W(2),ce("spin",r.spin()),W(14),ce("direction",r.direction()),W(2),ce("spin",r.spin()))},dependencies:[gv,hv,uu,Ng,Ig,Gr,Cg,mv,dv,fv,pv,uv,lv,du,Sa,sv,iv,au,av,cu,Pg,Og,tr,si,er],styles:["mat-card[_ngcontent-%COMP%]{margin:15px}.container-fab-demo[_ngcontent-%COMP%]{width:100%;display:flex;flex-direction:row;flex-wrap:wrap;justify-content:flex-start;align-content:flex-start;align-items:flex-start}.container-fab-demo[_ngcontent-%COMP%]   mat-card[_ngcontent-%COMP%]{height:300px;padding:20px;flex-grow:1;flex-shrink:0;flex-basis:300px}.example-spacer[_ngcontent-%COMP%]{flex:1 1 auto}.github-logo[_ngcontent-%COMP%]{height:26px;margin:0 4px 3px 0;vertical-align:middle}eco-fab-speed-dial[_ngcontent-%COMP%]{margin:1em}"]})};Nd(Ia,ig).catch(e=>console.error(e));
