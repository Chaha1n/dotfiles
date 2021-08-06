var $jscomp=$jscomp||{};$jscomp.scope={};$jscomp.arrayIteratorImpl=function(d){var c=0;return function(){return c<d.length?{done:!1,value:d[c++]}:{done:!0}}};$jscomp.arrayIterator=function(d){return{next:$jscomp.arrayIteratorImpl(d)}};$jscomp.makeIterator=function(d){var c="undefined"!=typeof Symbol&&Symbol.iterator&&d[Symbol.iterator];return c?c.call(d):$jscomp.arrayIterator(d)};$jscomp.arrayFromIterator=function(d){for(var c,m=[];!(c=d.next()).done;)m.push(c.value);return m};
$jscomp.arrayFromIterable=function(d){return d instanceof Array?d:$jscomp.arrayFromIterator($jscomp.makeIterator(d))};$jscomp.ASSUME_ES5=!1;$jscomp.ASSUME_NO_NATIVE_MAP=!1;$jscomp.ASSUME_NO_NATIVE_SET=!1;$jscomp.SIMPLE_FROUND_POLYFILL=!1;$jscomp.ISOLATE_POLYFILLS=!1;$jscomp.FORCE_POLYFILL_PROMISE=!1;$jscomp.FORCE_POLYFILL_PROMISE_WHEN_NO_UNHANDLED_REJECTION=!1;
$jscomp.defineProperty=$jscomp.ASSUME_ES5||"function"==typeof Object.defineProperties?Object.defineProperty:function(d,c,m){if(d==Array.prototype||d==Object.prototype)return d;d[c]=m.value;return d};$jscomp.getGlobal=function(d){d=["object"==typeof globalThis&&globalThis,d,"object"==typeof window&&window,"object"==typeof self&&self,"object"==typeof global&&global];for(var c=0;c<d.length;++c){var m=d[c];if(m&&m.Math==Math)return m}throw Error("Cannot find global object");};$jscomp.global=$jscomp.getGlobal(this);
$jscomp.IS_SYMBOL_NATIVE="function"===typeof Symbol&&"symbol"===typeof Symbol("x");$jscomp.TRUST_ES6_POLYFILLS=!$jscomp.ISOLATE_POLYFILLS||$jscomp.IS_SYMBOL_NATIVE;$jscomp.polyfills={};$jscomp.propertyToPolyfillSymbol={};$jscomp.POLYFILL_PREFIX="$jscp$";var $jscomp$lookupPolyfilledValue=function(d,c){var m=$jscomp.propertyToPolyfillSymbol[c];if(null==m)return d[c];m=d[m];return void 0!==m?m:d[c]};
$jscomp.polyfill=function(d,c,m,l){c&&($jscomp.ISOLATE_POLYFILLS?$jscomp.polyfillIsolated(d,c,m,l):$jscomp.polyfillUnisolated(d,c,m,l))};$jscomp.polyfillUnisolated=function(d,c,m,l){m=$jscomp.global;d=d.split(".");for(l=0;l<d.length-1;l++){var h=d[l];if(!(h in m))return;m=m[h]}d=d[d.length-1];l=m[d];c=c(l);c!=l&&null!=c&&$jscomp.defineProperty(m,d,{configurable:!0,writable:!0,value:c})};
$jscomp.polyfillIsolated=function(d,c,m,l){var h=d.split(".");d=1===h.length;l=h[0];l=!d&&l in $jscomp.polyfills?$jscomp.polyfills:$jscomp.global;for(var p=0;p<h.length-1;p++){var u=h[p];if(!(u in l))return;l=l[u]}h=h[h.length-1];m=$jscomp.IS_SYMBOL_NATIVE&&"es6"===m?l[h]:null;c=c(m);null!=c&&(d?$jscomp.defineProperty($jscomp.polyfills,h,{configurable:!0,writable:!0,value:c}):c!==m&&(void 0===$jscomp.propertyToPolyfillSymbol[h]&&(m=1E9*Math.random()>>>0,$jscomp.propertyToPolyfillSymbol[h]=$jscomp.IS_SYMBOL_NATIVE?
$jscomp.global.Symbol(h):$jscomp.POLYFILL_PREFIX+m+"$"+h),$jscomp.defineProperty(l,$jscomp.propertyToPolyfillSymbol[h],{configurable:!0,writable:!0,value:c})))};$jscomp.initSymbol=function(){};
$jscomp.polyfill("Symbol",function(d){if(d)return d;var c=function(p,u){this.$jscomp$symbol$id_=p;$jscomp.defineProperty(this,"description",{configurable:!0,writable:!0,value:u})};c.prototype.toString=function(){return this.$jscomp$symbol$id_};var m="jscomp_symbol_"+(1E9*Math.random()>>>0)+"_",l=0,h=function(p){if(this instanceof h)throw new TypeError("Symbol is not a constructor");return new c(m+(p||"")+"_"+l++,p)};return h},"es6","es3");
$jscomp.polyfill("Symbol.iterator",function(d){if(d)return d;d=Symbol("Symbol.iterator");for(var c="Array Int8Array Uint8Array Uint8ClampedArray Int16Array Uint16Array Int32Array Uint32Array Float32Array Float64Array".split(" "),m=0;m<c.length;m++){var l=$jscomp.global[c[m]];"function"===typeof l&&"function"!=typeof l.prototype[d]&&$jscomp.defineProperty(l.prototype,d,{configurable:!0,writable:!0,value:function(){return $jscomp.iteratorPrototype($jscomp.arrayIteratorImpl(this))}})}return d},"es6",
"es3");$jscomp.iteratorPrototype=function(d){d={next:d};d[Symbol.iterator]=function(){return this};return d};$jscomp.iteratorFromArray=function(d,c){d instanceof String&&(d+="");var m=0,l=!1,h={next:function(){if(!l&&m<d.length){var p=m++;return{value:c(p,d[p]),done:!1}}l=!0;return{done:!0,value:void 0}}};h[Symbol.iterator]=function(){return h};return h};$jscomp.polyfill("Array.prototype.keys",function(d){return d?d:function(){return $jscomp.iteratorFromArray(this,function(c){return c})}},"es6","es3");
$jscomp.checkEs6ConformanceViaProxy=function(){try{var d={},c=Object.create(new $jscomp.global.Proxy(d,{get:function(m,l,h){return m==d&&"q"==l&&h==c}}));return!0===c.q}catch(m){return!1}};$jscomp.USE_PROXY_FOR_ES6_CONFORMANCE_CHECKS=!1;$jscomp.ES6_CONFORMANCE=$jscomp.USE_PROXY_FOR_ES6_CONFORMANCE_CHECKS&&$jscomp.checkEs6ConformanceViaProxy();$jscomp.owns=function(d,c){return Object.prototype.hasOwnProperty.call(d,c)};
$jscomp.polyfill("WeakMap",function(d){function c(){if(!d||!Object.seal)return!1;try{var e=Object.seal({}),a=Object.seal({}),b=new d([[e,2],[a,3]]);if(2!=b.get(e)||3!=b.get(a))return!1;b.delete(e);b.set(a,4);return!b.has(e)&&4==b.get(a)}catch(k){return!1}}function m(){}function l(e){var a=typeof e;return"object"===a&&null!==e||"function"===a}function h(e){if(!$jscomp.owns(e,u)){var a=new m;$jscomp.defineProperty(e,u,{value:a})}}function p(e){if(!$jscomp.ISOLATE_POLYFILLS){var a=Object[e];a&&(Object[e]=
function(b){if(b instanceof m)return b;Object.isExtensible(b)&&h(b);return a(b)})}}if($jscomp.USE_PROXY_FOR_ES6_CONFORMANCE_CHECKS){if(d&&$jscomp.ES6_CONFORMANCE)return d}else if(c())return d;var u="$jscomp_hidden_"+Math.random();p("freeze");p("preventExtensions");p("seal");var r=0,f=function(e){this.id_=(r+=Math.random()+1).toString();if(e){e=$jscomp.makeIterator(e);for(var a;!(a=e.next()).done;)a=a.value,this.set(a[0],a[1])}};f.prototype.set=function(e,a){if(!l(e))throw Error("Invalid WeakMap key");
h(e);if(!$jscomp.owns(e,u))throw Error("WeakMap key fail: "+e);e[u][this.id_]=a;return this};f.prototype.get=function(e){return l(e)&&$jscomp.owns(e,u)?e[u][this.id_]:void 0};f.prototype.has=function(e){return l(e)&&$jscomp.owns(e,u)&&$jscomp.owns(e[u],this.id_)};f.prototype.delete=function(e){return l(e)&&$jscomp.owns(e,u)&&$jscomp.owns(e[u],this.id_)?delete e[u][this.id_]:!1};return f},"es6","es3");$jscomp.MapEntry=function(){};
$jscomp.polyfill("Map",function(d){function c(){if($jscomp.ASSUME_NO_NATIVE_MAP||!d||"function"!=typeof d||!d.prototype.entries||"function"!=typeof Object.seal)return!1;try{var f=Object.seal({x:4}),e=new d($jscomp.makeIterator([[f,"s"]]));if("s"!=e.get(f)||1!=e.size||e.get({x:4})||e.set({x:4},"t")!=e||2!=e.size)return!1;var a=e.entries(),b=a.next();if(b.done||b.value[0]!=f||"s"!=b.value[1])return!1;b=a.next();return b.done||4!=b.value[0].x||"t"!=b.value[1]||!a.next().done?!1:!0}catch(k){return!1}}
if($jscomp.USE_PROXY_FOR_ES6_CONFORMANCE_CHECKS){if(d&&$jscomp.ES6_CONFORMANCE)return d}else if(c())return d;var m=new WeakMap,l=function(f){this.data_={};this.head_=u();this.size=0;if(f){f=$jscomp.makeIterator(f);for(var e;!(e=f.next()).done;)e=e.value,this.set(e[0],e[1])}};l.prototype.set=function(f,e){f=0===f?0:f;var a=h(this,f);a.list||(a.list=this.data_[a.id]=[]);a.entry?a.entry.value=e:(a.entry={next:this.head_,previous:this.head_.previous,head:this.head_,key:f,value:e},a.list.push(a.entry),
this.head_.previous.next=a.entry,this.head_.previous=a.entry,this.size++);return this};l.prototype.delete=function(f){f=h(this,f);return f.entry&&f.list?(f.list.splice(f.index,1),f.list.length||delete this.data_[f.id],f.entry.previous.next=f.entry.next,f.entry.next.previous=f.entry.previous,f.entry.head=null,this.size--,!0):!1};l.prototype.clear=function(){this.data_={};this.head_=this.head_.previous=u();this.size=0};l.prototype.has=function(f){return!!h(this,f).entry};l.prototype.get=function(f){return(f=
h(this,f).entry)&&f.value};l.prototype.entries=function(){return p(this,function(f){return[f.key,f.value]})};l.prototype.keys=function(){return p(this,function(f){return f.key})};l.prototype.values=function(){return p(this,function(f){return f.value})};l.prototype.forEach=function(f,e){for(var a=this.entries(),b;!(b=a.next()).done;)b=b.value,f.call(e,b[1],b[0],this)};l.prototype[Symbol.iterator]=l.prototype.entries;var h=function(f,e){var a=e&&typeof e;"object"==a||"function"==a?m.has(e)?a=m.get(e):
(a=""+ ++r,m.set(e,a)):a="p_"+e;var b=f.data_[a];if(b&&$jscomp.owns(f.data_,a))for(f=0;f<b.length;f++){var k=b[f];if(e!==e&&k.key!==k.key||e===k.key)return{id:a,list:b,index:f,entry:k}}return{id:a,list:b,index:-1,entry:void 0}},p=function(f,e){var a=f.head_;return $jscomp.iteratorPrototype(function(){if(a){for(;a.head!=f.head_;)a=a.previous;for(;a.next!=a.head;)return a=a.next,{done:!1,value:e(a)};a=null}return{done:!0,value:void 0}})},u=function(){var f={};return f.previous=f.next=f.head=f},r=0;
return l},"es6","es3");window.subtitlesForLL={};subtitlesForLL.common=new SubtitlesForLLCommon;subtitlesForLL.languageCode=new SubtitlesForLLLanguageCode;
(function(){function d(a){a=a?JSON.parse(JSON.stringify(a)):{};a.userIdentifier=a.userIdentifier||btoa(String.fromCharCode.apply(String,$jscomp.arrayFromIterable(crypto.getRandomValues(new Uint8Array(32))))).substring(0,32);if(null==a.nativeLanguage||null==a.learningLanguage){console.warn("defaultConfigs() - \u8a00\u8a9e\u8a2d\u5b9a\u304c\u3042\u308a\u307e\u305b\u3093(\u4f8b\u5916)");var b=window.navigator.languages&&window.navigator.languages[0]||window.navigator.language||window.navigator.userLanguage||
window.navigator.browserLanguage;a.nativeLanguage=subtitlesForLL.languageCode.codes[b]?b:"en";a.learningLanguage="en"!=a.nativeLanguage?"en":"ja"}null==a.amazonRegion&&console.warn("defaultConfigs() - amazon\u30c9\u30e1\u30a4\u30f3\u8a2d\u5b9a\u304c\u3042\u308a\u307e\u305b\u3093(\u4f8b\u5916)");return a}function c(){var a=this;this.wordSeparater=this.kuromojiTokenizer=this.googleDict=this.subtitleViewerAPIPostSubtitleInfo=this.subtitleViewerAPIGetVideoInfo=null;this.init=function(){f&&f.learningLanguage&&
f.nativeLanguage&&(a.wordSeparater=new SubtitlesForLLWordSeparater,a.wordSeparater.init(f.learningLanguage,f.nativeLanguage,function(b){}),a.setupDictionary(function(b){}));chrome.runtime.onConnect.addListener(function(b){var k=!1;b.onDisconnect.addListener(function(g){k=!0});b.onMessage.addListener(function(g){if("tokenize"==g.type)a.wordSeparater.separate(g.word,g.from,g.to,function(n){b.postMessage({index:g.index,words:n})});else if("searchWord"==g.type){if(subtitlesForLL.common.availableLocalTranslate(g.data.from,
g.data.to)){var v=a.dicLoader.get(g.data.word,g.options,null);if(v&&0<v.length){b.postMessage({type:"local",words:v});return}}(function(){null==this.googleDict&&(this.googleDict=new SubtitlesForLLGoogleDict);this.googleDict.search(g.data,function(n,t){t={type:"googleDict",responseURL:n.responseURL,status:n.status,isError:"error"==t.type};if(200==n.status)try{t.response=JSON.parse(n.responseText)}catch(w){console.error(w)}else n.responseText&&(t.responseText=n.responseText);b.postMessage(t)})})(b,
g)}else if("subtitleViewerAPIGetVideoInfo"==g.type)null==a.subtitleViewerAPIGetVideoInfo&&(a.subtitleViewerAPIGetVideoInfo=new SubtitlesForLLAPI),g.data.version=e.version,a.subtitleViewerAPIGetVideoInfo.getVideoInfo(g.data,function(n,t,w){if(n)console.error(n),b.postMessage(null);else{n={responseURL:t.responseURL,status:t.status};if(200==t.status)try{n.responseNotEscape=JSON.parse(t.responseText),n.response=JSON.parse(t.responseText)}catch(x){console.error(x)}b.postMessage(n)}});else if("subtitleViewerAPIPostSubtitleInfo"==
g.type)null==a.subtitleViewerAPIPostSubtitleInfo&&(a.subtitleViewerAPIPostSubtitleInfo=new SubtitlesForLLAPI),a.subtitleViewerAPIPostSubtitleInfo.postSubtitleInfo({info:g.info,version:e.version},function(n,t){0==k&&b.postMessage({responseURL:n.responseURL,status:n.status})});else if("readFile"==g.type)l(g.filePath,function(n){null==n?b.postMessage(null):b.postMessage({text:n})});else if("readSubtitleFile"==g.type)l(g.filePath+".srt",function(n){null!=n?b.postMessage({text:n,type:"srt"}):l(g.filePath+
".ass",function(t){null==t?b.postMessage(null):b.postMessage({text:t,type:"ssa"})})});else if("saveFile"==g.type)h(g.filePath,g.text,function(n){0==k&&b.postMessage({result:n})}),b.postMessage({});else if("removeFile"==g.type)p(g.filePath,function(){b.postMessage({})});else if("removeAllFiles"==g.type)u(function(n){b.postMessage({result:n})});else if("download"==g.type||"searchOpenSubtitlesOrgAPI"==g.type||"downloadGZIP"==g.type){var q=new XMLHttpRequest;q.open("GET",g.url,!0);q.timeout=15E3;"downloadGZIP"==
g.type?q.responseType="arraybuffer":"searchOpenSubtitlesOrgAPI"==g.type&&(q.setRequestHeader("X-User-Agent","SubtitlesForLearningLanguage v1.1"),q.setRequestHeader("Pragma","no-cache"),q.setRequestHeader("Cache-Control","no-cache"),q.setRequestHeader("If-Modified-Since","Thu, 01 Jun 1970 00:00:00 GMT"));q.onloadend=function(n){if("downloadGZIP"==g.type){if(200==q.status){n=new Uint8Array(q.response);n=(new Zlib.Gunzip(n)).decompress();var t=new FileReader;t.onload=function(y){x={responseURL:q.responseURL,
status:q.status,response:y.target.result};b.postMessage(x)};if(g.encoding&&0<g.encoding.length){var w=g.encoding.replace(/:[0-9]+$/m,"");w.match(/^CP950$/im)&&(w="big5");t.readAsText(new Blob([n]),w)}else t.readAsText(new Blob([n]));return}var x={responseURL:q.responseURL,status:q.status,response:q.response}}else x={responseURL:q.responseURL,status:q.status,response:q.response,responseText:q.responseText};b.postMessage(x)};q.send()}else"setupDictionary"==g.type?a.setupDictionary(function(n){b.postMessage({})}):
"installed"==g.type||"setupDictionary"==g.type?(f=d(g.configs),chrome.storage.sync.set(f),a.wordSeparater=new SubtitlesForLLWordSeparater,a.wordSeparater.init(f.learningLanguage,f.nativeLanguage,function(n){}),a.setupDictionary(function(n){}),b.postMessage({})):console.warn("background.js - \u4e0d\u660e\u306atype = "+g.type)})})};this.setupDictionary=function(b){a.isLoading=!0;chrome.storage.sync.get(function(k){f=k;null==f||null==f.nativeLanguage||null==f.learningLanguage?b(null):f.learningLanguage&&
0<f.learningLanguage.length&&f.nativeLanguage&&0<f.nativeLanguage.length&&(a.dicLoader=new SubtitlesForLLDictionaryLoader,a.dicLoader.load(f.learningLanguage,f.nativeLanguage,function(g){}),a.wordSeparater.dicLoader=a.dicLoader)})}}function m(a){}function l(a,b){navigator.webkitTemporaryStorage.requestQuota(5242880,function(k){window.requestFileSystem(window.TEMPORARY,k,function(g){g.root.getFile(a,{create:!1},function(v){v.file(function(q){var n=new FileReader;n.onloadend=function(t){t=t.target.result;
b&&b(t)};n.onerror=function(t){console.error("FileReader onerror()");b&&b(str)};n.readAsText(q)},function(q){console.error("fileEntry onerror()");b&&b(null)})},function(v){b&&b(null)})},function(g){console.error("requestQuota() onerror()");b&&b(null)})})}function h(a,b,k){navigator.webkitTemporaryStorage.requestQuota(5242880,function(g){window.requestFileSystem(window.TEMPORARY,g,function(v){v.root.getFile(a,{create:!0},function(q){q.createWriter(function(n){n.onwriteend=function(t){0==n.length&&
(t=new Blob([b]),n.write(t));k&&k(!0)};n.onerror=function(t){console.error("\u66f8\u304d\u8fbc\u307f\u30a8\u30e9\u30fc: filePath = "+a+", "+t.toString());k&&k(!1)};n.truncate(0)},m)},m)})})}function p(a,b){navigator.webkitTemporaryStorage.requestQuota(5242880,function(k){window.requestFileSystem(window.TEMPORARY,k,function(g){g.root.getFile(a,{create:!1},function(v){v.remove(function(){})},m);b&&b()})})}function u(a){r(function(b){if(null==b)console.warn("\u30d5\u30a1\u30a4\u30eb\u30ea\u30b9\u30c8\u3092\u53d6\u5f97\u3067\u304d\u306a\u304b\u3063\u305f\u306e\u3067\u5168\u524a\u9664\u51fa\u6765\u307e\u305b\u3093\u3002"),
a&&a(!1);else{for(var k=0;k<b.length;k++)p(b[k].fullPath);a&&a(!0)}})}function r(a){navigator.webkitTemporaryStorage.requestQuota(5242880,function(b){window.requestFileSystem(window.TEMPORARY,b,function(k){var g=k.root.createReader(),v=[],q=function(){g.readEntries(function(n){if(n.length){for(var t=0;t<n.length;t++)v.push({fullPath:n[t].fullPath,isDirectory:n[t].isDirectory,isFile:n[t].isFile,name:n[t].name});q()}else a&&a(v)},function(n){a&&a(null)})};q()},function(k){a&&a(null)})})}var f=null,
e=chrome.runtime.getManifest();chrome.storage.sync.get(function(a){null==a||0>=Object.keys(a).length?chrome.tabs.create({url:"install.html"}):f=d(a);(new c).init()});window.requestFileSystem=window.requestFileSystem||window.webkitRequestFileSystem;(function(a){navigator.webkitTemporaryStorage.queryUsageAndQuota(function(b,k){a&&a({usedBytes:b,grantedBytes:k})},function(b){a&&a(null)})})()})();function SubtitlesForLLDictionaryLoader(){function d(h){h&&2<h.length&&(null!=h[0].order?h.sort(function(p,u){return p.order>=u.order?1:-1}):null!=h[0].orderDesc&&h.sort(function(p,u){return p.orderDesc<=u.orderDesc?1:-1}));return h}var c=this;this.words=new Map;this.toLang=this.fromLang=null;var m=[{regex:/^(.+)s$/m,replace:"$1"},{regex:/^(.+)es$/m,replace:"$1"},{regex:/^(.+)is$/m,replace:"$1y"},{regex:/^(.+)ron$/m,replace:"$1r"},{regex:/^(.+)o$/m,replace:"$1ar"},{regex:/^(.+)a$/m,replace:"$1ar"},
{regex:/^(.+)o$/m,replace:"$1er"},{regex:/^(.+)e$/m,replace:"$1er"},{regex:/^(.+)o$/m,replace:"$1ir"},{regex:/^(.+)e$/m,replace:"$1ir"},{regex:/^(.+)\u00e9is$/m,replace:"$1"},{regex:/^(.+)los$/m,replace:"$1"},{regex:/^(.+)zco$/m,replace:"$1cer"},{regex:/^(.+)zco$/m,replace:"$1cir"},{regex:/^(.+)as$/m,replace:"$1ar"},{regex:/^(.+)es$/m,replace:"$1er"},{regex:/^(.+)es$/m,replace:"$1ir"},{regex:/^(.+)an$/m,replace:"$1ar"},{regex:/^(.+)en$/m,replace:"$1er"},{regex:/^(.+)en$/m,replace:"$1ir"},{regex:/^(.+)amos$/m,
replace:"$1ar"},{regex:/^(.+)\u00e1is$/m,replace:"$1ar"},{regex:/^(.+)emos$/m,replace:"$1er"},{regex:/^(.+)\u00e9is$/m,replace:"$1er"},{regex:/^(.+)imos$/m,replace:"$1ir"},{regex:/^(.+)\u00eds$/m,replace:"$1ir"},{regex:/^(.+)\u00edamos$/m,replace:"$1er"},{regex:/^(.+)gamos$/m,replace:"$1er"},{regex:/^(.+)ado[s]?$/m,replace:"$1ar"},{regex:/^(.+)ada[s]?$/m,replace:"$1ar"},{regex:/^(.+)ido[s]?$/m,replace:"$1er"},{regex:/^(.+)ida[s]?$/m,replace:"$1er"},{regex:/^(.+)ido[s]?$/m,replace:"$1ir"},{regex:/^(.+)ida[s]?$/m,
replace:"$1ir"},{regex:/^(.+)ndo[s]$/m,replace:"$1r"},{regex:/^(.+)endo[s]$/m,replace:"$1r"},{regex:/^(.+)dos$/m,replace:"$1ar"}],l={en:[{regex:/^(.{2,})'s$/m,replace:"$1"},{regex:/^(?!was$|has$|his$|ass$|this$)(.{2,})s$/m,replace:"$1"},{regex:/^(.{2,})es$/m,replace:"$1"},{regex:/^(.+)ies$/m,replace:"$1y"},{regex:/^(.+)es$/m,replace:"$1is"},{regex:/^(.{2,})us$/m,replace:"$1i"},{regex:/^(?!sold$)(.{3,})d$/m,replace:"$1"},{regex:/^(.{3,})ed$/m,replace:"$1"},{regex:/^(.{2,})i[e]?d$/m,replace:"$1y"},
{regex:/^(.+)([a-z])\2ed$/m,replace:"$1$2"},{regex:/^(?!thing$|bring$|doing$)(.{2,})ing$/m,replace:"$1e"},{regex:/^(?!thing$|bring$|using$)(.{2,})ing$/m,replace:"$1"},{regex:/^(.+)ying$/m,replace:"$1ie"},{regex:/^(.+)([a-z])\2ing$/m,replace:"$1$2"},{regex:/^(.{2,})er$/m,replace:"$1e"},{regex:/^(.{2,})er$/m,replace:"$1"},{regex:/^(.{2,})or$/m,replace:"$1"},{regex:/^(.{2,})ier$/m,replace:"$1y"},{regex:/^(.{2,})ist$/m,replace:"$1"},{regex:/^(.{2,})ist$/m,replace:"$1e"},{regex:/^(.{2,})est$/m,replace:"$1e"},
{regex:/^(.{2,})est$/m,replace:"$1"},{regex:/^(.{2,})iest$/m,replace:"$1y"},{regex:/^(.{2,})ly$/m,replace:"$1e"},{regex:/^(.{2,})ly$/m,replace:"$1"},{regex:/^(.{2,})lly$/m,replace:"$1ll"},{regex:/^(.{2,})ingly$/m,replace:"$1e"},{regex:/^(.{2,})ingly$/m,replace:"$1"}],es:m,"es-419":m,ar:{regex:/^\u0648(.+)$/m,replace:"$1"},ja:[{regex:/^(.+)(?:\u304b|\u304d|\u3051|\u3053\u3046|\u3044[\u305f\u3066])$/m,replace:"$1\u304f"},{regex:/^(.+)(?:\u3055|\u3057|\u305b|\u305d\u3046|\u3057[\u305f\u3066])$/m,replace:"$1\u3059"},
{regex:/^(.+)(?:\u305f|\u3061|\u3066|\u3068\u3046|\u3063[\u305f\u3066])$/m,replace:"$1\u3064"},{regex:/^(.+)(?:\u306a|\u306b|\u306d|\u306e\u3046|\u3093[\u3060\u3067])$/m,replace:"$1\u306c"},{regex:/^(.+)(?:\u3070|\u3073|\u3079|\u307c\u3046|\u3093[\u3060\u3067])$/m,replace:"$1\u3076"},{regex:/^(.+)(?:\u307e|\u307f|\u3081|\u3082\u3046|\u3093[\u3060\u3067])$/m,replace:"$1\u3080"},{regex:/^(.+?)(?:\u3089|\u308a|\u308c|\u308d\u3046|[\u3063]?[\u305f\u3066])$/m,replace:"$1\u308b"},{regex:/^(.+)(?:\u308f|\u3044|\u3048|\u304a\u3046|\u3063[\u305f\u3066])$/m,
replace:"$1\u3046"},{regex:/^(.+)\u3079$/m,replace:"$1\u3079\u308b"},{regex:/^(.+)(?:\u304b\u3063\u305f|\u304f\u3066)$/m,replace:"$1\u3044"},{regex:/^\u3057(?:\u305f|\u3066[\u308b]?)$/m,replace:"\u3059\u308b"},{regex:/^\u3084(?:\u3063\u305f|\u3063\u3066|\u308a)$/m,replace:"\u884c\u308b"}]};this.get=function(h,p,u,r,f){if(null==r||0==r)h=h.toLowerCase(),r=0;return subtitlesForLL.languageCode.isNotSeparateLanguage(c.fromLang)&&"ja"!=c.fromLang&&"en"==c.toLang?0==c.words.has(h)?1<h.length&&(!p||null==
p.recursiveSearch||1==p.recursiveSearch)?c.get(h.substring(0,h.length-1),p,u):null:d(c.words.get(h)):p&&null!=p.recursiveSearch&&1!=p.recursiveSearch?d(c.words.get(h)):c.getByRegex(h,p,u,r,f)};this.getByRegex=function(h,p,u,r,f,e){if(null==r||0==r)h=h.toLowerCase(),r=0;null==f&&(f=h);c.words.has(h)&&(null==e&&(e=[]),e=e.concat(d(c.words.get(h))));if(l[c.fromLang]){for(;r<l[c.fromLang].length;r++)if(h=l[c.fromLang][r],f.match(h.regex))return h=f.replace(h.regex,h.replace),c.getByRegex(h,p,u,r+1,f,
e);if(r>=l[c.fromLang].length&&p&&p.enableDecreaseSearch&&1<f.length)return r=f.substring(0,f.length-1),c.getByRegex(r,p,u,0,r,e)}return e};this.load=function(h,p,u){c.fromLang=h;c.toLang=p;c.words=new Map;console.time("DictionaryLoader.load() \u8f9e\u66f8\u30d5\u30a1\u30a4\u30eb\u8aad\u307f\u8fbc\u307f");var r=subtitlesForLL.common.availableTokenizeLocalDictionaryName(h,p);if(null==r)console.warn("\u8aad\u307f\u8fbc\u3081\u308b\u8f9e\u66f8\u304c\u3042\u308a\u307e\u305b\u3093\u3002fromLang = "+h+
", toLang="+p),u(null);else{p=chrome.extension.getURL("/dic/"+r+".txt");var f=new XMLHttpRequest;f.open("GET",p);f.onloadend=function(e){if(200!=f.status)console.error("\u8f9e\u66f8\u30d5\u30a1\u30a4\u30eb\u8aad\u307f\u8fbc\u307f\u30a8\u30e9\u30fc"),u(null);else{console.timeEnd("DictionaryLoader.load() \u8f9e\u66f8\u30d5\u30a1\u30a4\u30eb\u8aad\u307f\u8fbc\u307f");console.time("DictionaryLoader.load() \u30d1\u30fc\u30b9");var a=f.response;switch(r){case "EJDict-hand":var b=a.split("\n");for(e=0;e<
b.length;e++)if(!(null==b[e]||0>=b[e].length||(a=b[e].split("\t"),null==a||2>a.length)))for(var k=a[0].split(","),g=void 0,v=0;v<k.length;v++)if(!(null==k[v]||0>=k[v].length)){var q=k[v].toLowerCase().replace(/\.$/m,"");if(!(0>=q.length||1<=v&&q==g)){g=q;var n={};n.word=q;n.originalWord=a[0]||"";n.meaning=a[1]||"";n.orderDesc=Number(a[2])||0;c.words.has(q)?c.words.get(q).push(n):c.words.set(q,[n])}}break;case "EDict":b=a.split("\n");e=/^([^ ]+?) (?:\[([^\]]+?)\] )?\/(.*)\/EntL([0-9]+)X?\/$/m;for(a=
0;a<b.length;a++)if(!(null==b[a]||0>=b[a].length))if(v=b[a].match(e),null==v)console.warn("\u6b63\u898f\u8868\u73fe\u306b\u30de\u30c3\u30c1\u3057\u306a\u3044\u884c\u304c\u3042\u308a\u307e\u3057\u305f\u3002i="+a+", array[i]="+b[a]);else if(null==v[1]||null==v[3])console.error("\u30ef\u30fc\u30c9\u304cnull\u3067\u3059\u3002array[i]="+b[a]+", m[1]="+v[1]+", m[3]="+v[3]);else{g=void 0;k=v[1].split(";");for(q=0;q<k.length;q++)k[q]=k[q].replace(/\(.*\)$/m,"").toLowerCase();if(v[2]){g=v[2].split(";");for(q=
0;q<g.length;q++)k.push(g[q].replace(/\(.*\)$/m,""));g=v[2]}q=v[1];meaning=v[3];v=v[4];for(n=0;n<k.length;n++){var t={};t.word=k[n];t.reading=g;t.originalWord=q;t.meaning=meaning;t.order=v;c.words.has(k[n])?c.words.get(k[n]).push(t):c.words.set(k[n],[t])}}break;case "CC-CEDict":e=/^(?!#)([^ \n]+) ([^ \n]+) \[([^\]\n]+)\] \/(.+)\/$/m;b=a.split("\n");for(a=0;a<b.length;a++)if(!(null==b[a]||0>=b[a].length))if(g=b[a].match(e),null==g)console.warn("\u6b63\u898f\u8868\u73fe\u306b\u30de\u30c3\u30c1\u3057\u306a\u3044\u884c\u304c\u3042\u308a\u307e\u3057\u305f\u3002i="+
a+", array[i]="+b[a]);else if("zh-hant"==h&&null==g[1]||"zh"==h&&null==g[2]||null==g[3]||null==g[4])console.error("\u6b63\u898f\u8868\u73fe\u306b\u3088\u308b\u30c7\u30fc\u30bf\u62bd\u51fa\u304c\u6b63\u3057\u304f\u3067\u304d\u3066\u3044\u307e\u305b\u3093\u3002array[i] = "+b[a]),console.error("  m = "+JSON.stringify(g));else for(k={},k.originalWord="zh-hant"==h?g[1]:g[2],k.reading=g[3],k.meaning=g[4],g=k.originalWord.split("\uff0c"),v=0;v<g.length;v++)0>=g[v].length||(k.word=g[v].toLowerCase(),c.words.has(k.word)?
c.words.get(k.word).push(k):c.words.set(k.word,[k]));break;case "KEngDic":b=a.split("\n");e=/^([0-9]+)\t([^\t]+)\t[^\t]*\t([^\t]*)\t[^\t]*\t[^\t]*\t[^\t]*\t[^\t]*\t([0-9]*|NULL)\t([^\t]*)/m;for(a=0;a<b.length;a++)null==b[a]||0>=b[a].length||(k=b[a].match(e),null==k?console.warn("\u6b63\u898f\u8868\u73fe\u306b\u30de\u30c3\u30c1\u3057\u306a\u3044\u884c\u304c\u3042\u308a\u307e\u3057\u305f\u3002i="+a+", array[i]="+b[a]):null==k[2]||"NULL"==k[2]?console.error("\u97d3\u56fd\u8a9e\u304cnull\u3067\u3059"):
(g={},g.word=k[2].toLowerCase(),g.originalWord=k[2],k[1]&&(g.order=k[1]),k[3]&&"NULL"!=k[3]&&(g.meaning=k[3]),k[4]&&"NULL"!=k[4]&&(g.pos=k[4]),k[5]&&"NULL"!=k[5]&&(g.kanji=k[5]),c.words.has(g.word)?c.words.get(g.word).push(g):c.words.set(g.word,[g])));break;case "Yaitron-en-th":case "Yaitron-th-en":b=JSON.parse(a);for(e=0;e<b.length;e++)a=b[e],"en"==h&&(a.originalWord=a.word,a.word=a.word.toLowerCase()),c.words.has(a.word)?c.words.get(a.word).push(a):c.words.set(a.word,[a]);break;case "en-es-en-Dic-en-es":case "en-es-en-Dic-es-en":for(e=
/<c>(.+?)<\/c>[\s]*<d>(.+?)<\/d>[\s]*(?:<t>(.+?)<\/t>)?/g;k=e.exec(a);)null==k?console.warn("\u6b63\u898f\u8868\u73fe\u306b\u30de\u30c3\u30c1\u3057\u306a\u3044\u884c\u304c\u3042\u308a\u307e\u3057\u305f\u3002i="+i+", array[i]="+b[i]):null==k[1]||0>=k[1].length?console.error("\u82f1\u8a9e\u304b\u30b9\u30da\u30a4\u30f3\u8a9e\u3001\u3044\u305a\u308c\u304b\u304cnull\u3067\u3059"):k[3]&&k[3].match("{phrase}")||(k[1]=k[1].replace(/^(-)|(-)$/gm,""),g={},g.originalWord=k[1],g.word=k[1].toLowerCase(),g.meaning=
k[2],g.pos=k[3],c.words.has(g.word)?c.words.get(g.word).push(g):c.words.set(g.word,[g]));break;case "en_ar_dict":b=a.split("\n");e=/^([^\t]+)\t([^\t]+)\t([^\t]+)\t([^\t]+)$/m;for(a=0;a<b.length;a++)null==b[a]||0>=b[a].length||(k=b[a].match(e),null==k?console.warn("\u6b63\u898f\u8868\u73fe\u306b\u30de\u30c3\u30c1\u3057\u306a\u3044\u884c\u304c\u3042\u308a\u307e\u3057\u305f\u3002i="+a+", array[i]="+b[a]):null==k[1]||null==k[3]||null==k[4]?console.error("null\u306e\u30ef\u30fc\u30c9\u304c\u3042\u308a\u307e\u3059"):
(g={},g.originalWord=k[3],g.word=k[3].toLowerCase(),g.meaning=k[4].replace(" :: "," / "),c.words.has(g.word)?c.words.get(g.word).push(g):c.words.set(g.word,[g])));break;case "English-Hindi-Dictionary":for(b=JSON.parse(a),e=0;e<b.length;e++)null==b[e]||0>=b[e].length||c.words.set(b[e][0],b[e][1])}console.timeEnd("DictionaryLoader.load() \u30d1\u30fc\u30b9");u&&u(c.words)}};f.send()}}};function SubtitlesForLLGoogleDict(){this.search=function(d,c){var m="https://clients5.google.com/translate_a/t?client=dict-chrome-ex&sl="+encodeURIComponent(subtitlesForLL.languageCode.toGoogleLangCode(d.from));m+="&tl="+encodeURIComponent(subtitlesForLL.languageCode.toGoogleLangCode(d.to));m+="&q="+encodeURIComponent(d.word);d.inputEncoding&&(m+="&ie="+encodeURIComponent(d.inputEncoding));var l=new XMLHttpRequest;l.open("GET",m,!0);l.onloadend=function(h){null!=c&&c&&c(l,h)};l.onerror=function(h){console.error(h);
c(l,h);c=null};l.send()}};function SubtitlesForLLAPI(){var d=this;this.dicReq=null;this.getDictionary=function(c,m){var l="https://api2.subtitlesfll.com/v1/dictionary?from="+encodeURIComponent(c.from);l+="&to="+encodeURIComponent(c.to);l+="&word="+encodeURIComponent(c.word);d.dicReq&&d.dicReq.abort();d.dicReq=new XMLHttpRequest;d.dicReq.open("GET",l,!0);d.dicReq.timeout=5E3;d.setXUserAgent(d.dicReq,c.version);d.dicReq.onloadend=function(h){null!=m&&m&&m(d.dicReq,h)};d.dicReq.onerror=function(h){console.error(h);m(d.dicReq,
h);m=null};d.dicReq.send()};this.getVideoInfo=function(c,m){var l="https://api2.subtitlesfll.com/v1/info?";if(null==c.catalogId||10>c.catalogId.length)console.warn("\u5f15\u6570catalogId\u306e\u5024\u304c\u60f3\u5b9a\u5916\u3067\u3059\u3002catalogId="+catalogId),m("\u5f15\u6570catalogId\u306e\u5024\u304c\u60f3\u5b9a\u5916\u3067\u3059\u3002catalogId="+c.catalogId);else{l+="catalogId="+encodeURIComponent(c.catalogId);c.isEpisode&&(l+="&isEpisode="+(1==c.isEpisode||1<=c.isEpisode?1:0));c.lang&&(l+="&lang="+
encodeURIComponent(subtitlesForLL.languageCode.toOpensubtitlesOrgLangCode(c.lang.toLowerCase())));var h=new XMLHttpRequest;h.open("GET",l,!0);h.timeout=5E3;d.setXUserAgent(h,c.version);h.setRequestHeader("Cache-Control","no-cache");h.onloadend=function(p){m&&m(null,h,p)};h.send()}};this.postSubtitleInfo=function(c,m){if(!(null==c||null==c.info||0>=Object.keys(c.info).length)){var l=new XMLHttpRequest;l.open("POST","https://api2.subtitlesfll.com/v1/info",!0);l.timeout=5E3;d.setXUserAgent(l,c.version);
l.setRequestHeader("Content-Type","application/json");l.onloadend=function(h){m&&m(l,h)};l.send(JSON.stringify(c.info))}};this.setXUserAgent=function(c,m){null!=m?c.setRequestHeader("X-User-Agent","SubtitlesForLearningLanguage(AmazonPrime)/"+m):c.setRequestHeader("X-User-Agent","SubtitlesForLearningLanguage(AmazonPrime)")}};var SubtitlesForLLWordSeparater=function(){var d=this;this.kuromojiTokenizer=null;this.loadingTokenizer=!1;this.dicLoader=null;this.init=function(l,h,p){"ja"==l&&(console.time("kuromoji builder&build\u7d42\u4e86"),d.loadingTokenizer=!0,kuromoji.builder({dicPath:"js/background/lib/kuromoji_dict"}).build(function(u,r){console.timeEnd("kuromoji builder&build\u7d42\u4e86");d.loadingTokenizer=!1;u?(console.error(u),p&&p(null)):(d.kuromojiTokenizer=r,p&&p(r))}))};var c=/(<i>|<\/i>|<b>|<\/b>|<u>|<\/u>|<br(?:[ ]?\/)?>|<ruby>|<\/ruby>|<rt>.*?<\/rt>|<font color="[#0-9a-fA-F]*">|<\/font>)|(<[^>]*?>)|([^<]+|[<])/gi,
m=new RegExp("([^"+subtitlesForLL.common.separatorRegexNotHyphenApos+"]+(?:[-'][^"+subtitlesForLL.common.separatorRegexNotHyphenApos+"]+)*)(?<!-)|(["+subtitlesForLL.common.separatorRegexNotHyphenApos+"]+)","g");this.separate=function(l,h,p,u){if(d.loadingTokenizer)setTimeout(d.separate,1E3,l,h,p,u);else{for(var r,f=[];null!=(r=c.exec(l));)if(r[1])f.push({tag:r[1]});else if(r[2])f.push({ignore:subtitlesForLL.common.escapeHTML(r[2])});else if(r[3])if(r=r[3],"ja"==h&&d.kuromojiTokenizer){r=d.kuromojiTokenizer.tokenize(r);
for(var e=0;e<r.length;e++)f.push({word:subtitlesForLL.common.escapeHTML(r[e].surface_form)})}else if(subtitlesForLL.common.availableTokenizeLocalDictionaryName(h))for(var a;a=m.exec(r);)if(a[1]){e=a[1];a=a[1].toLowerCase();for(var b=0;b<a.length;)for(var k=b+8<a.length?b+8:a.length;k>b;){var g=a.substring(b,k);if("ja"==h?null!=d.dicLoader.getByRegex(g):d.dicLoader.words.has(g)){f.push({word:subtitlesForLL.common.escapeHTML(e.substring(b,k))});b+=k-b;break}else{if(k-1<=b){f.push({word:subtitlesForLL.common.escapeHTML(e.substring(b,
k))});b++;break}k--}}}else a[2]&&f.push({separate:subtitlesForLL.common.escapeHTML(a[2])});else if(subtitlesForLL.languageCode.isNotSeparateLanguage(h)&&"en"==p)for(e=0;e<r.length;e++)f.push({word:subtitlesForLL.common.escapeHTML(r.charAt(e))});else for(;e=m.exec(r);)e[1]?f.push({word:subtitlesForLL.common.escapeHTML(e[1])}):e[2]&&f.push({separate:subtitlesForLL.common.escapeHTML(e[2])});u(f)}}};