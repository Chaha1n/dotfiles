(function(modules) {
  var installedModules = {};
  function __webpack_require__(moduleId) {
    if (installedModules[moduleId]) return installedModules[moduleId].exports;
    var module = installedModules[moduleId] = {
      i: moduleId,
      l: false,
      exports: {}
    };
    modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
    module.l = true;
    return module.exports;
  }
  __webpack_require__.m = modules;
  __webpack_require__.c = installedModules;
  __webpack_require__.d = function(exports, name, getter) {
    if (!__webpack_require__.o(exports, name)) Object.defineProperty(exports, name, {
      enumerable: true,
      get: getter
    });
  };
  __webpack_require__.r = function(exports) {
    if ("undefined" !== typeof Symbol && Symbol.toStringTag) Object.defineProperty(exports, Symbol.toStringTag, {
      value: "Module"
    });
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
  };
  __webpack_require__.t = function(value, mode) {
    if (1 & mode) value = __webpack_require__(value);
    if (8 & mode) return value;
    if (4 & mode && "object" === typeof value && value && value.__esModule) return value;
    var ns = Object.create(null);
    __webpack_require__.r(ns);
    Object.defineProperty(ns, "default", {
      enumerable: true,
      value: value
    });
    if (2 & mode && "string" != typeof value) for (var key in value) __webpack_require__.d(ns, key, function(key) {
      return value[key];
    }.bind(null, key));
    return ns;
  };
  __webpack_require__.n = function(module) {
    var getter = module && module.__esModule ? function getDefault() {
      return module["default"];
    } : function getModuleExports() {
      return module;
    };
    __webpack_require__.d(getter, "a", getter);
    return getter;
  };
  __webpack_require__.o = function(object, property) {
    return Object.prototype.hasOwnProperty.call(object, property);
  };
  __webpack_require__.p = "";
  return __webpack_require__(__webpack_require__.s = 31);
})([ function(module, __webpack_exports__, __webpack_require__) {
  "use strict";
  __webpack_require__.d(__webpack_exports__, "b", (function() {
    return DEFAULT_LANGUAGE;
  }));
  __webpack_require__.d(__webpack_exports__, "h", (function() {
    return SUPPORTED_LANGUAGES;
  }));
  __webpack_require__.d(__webpack_exports__, "i", (function() {
    return SUPPORTED_TOOLS;
  }));
  __webpack_require__.d(__webpack_exports__, "j", (function() {
    return USAGE_THRESHOLD;
  }));
  __webpack_require__.d(__webpack_exports__, "d", (function() {
    return HUNDRED_PERCENT;
  }));
  __webpack_require__.d(__webpack_exports__, "e", (function() {
    return MAX_DECIMALS;
  }));
  __webpack_require__.d(__webpack_exports__, "g", (function() {
    return MIN_VALID_HTTP_STATUS;
  }));
  __webpack_require__.d(__webpack_exports__, "f", (function() {
    return MAX_VALID_HTTP_STATUS;
  }));
  __webpack_require__.d(__webpack_exports__, "c", (function() {
    return DEFAULT_LANGUAGE_SET;
  }));
  __webpack_require__.d(__webpack_exports__, "a", (function() {
    return CLONE_PROTOCOLS;
  }));
  var intellij_idea = __webpack_require__.p + "intellij-idea.svg";
  var appcode = __webpack_require__.p + "appcode.svg";
  var clion = __webpack_require__.p + "clion.svg";
  var pycharm = __webpack_require__.p + "pycharm.svg";
  var phpstorm = __webpack_require__.p + "phpstorm.svg";
  var rubymine = __webpack_require__.p + "rubymine.svg";
  var webstorm = __webpack_require__.p + "webstorm.svg";
  var rider = __webpack_require__.p + "rider.svg";
  var goland = __webpack_require__.p + "goland.svg";
  var _SUPPORTED_LANGUAGES;
  function _defineProperty(obj, key, value) {
    if (key in obj) Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    }); else obj[key] = value;
    return obj;
  }
  var DEFAULT_LANGUAGE = "java";
  var SUPPORTED_LANGUAGES = (_SUPPORTED_LANGUAGES = {}, _defineProperty(_SUPPORTED_LANGUAGES, DEFAULT_LANGUAGE, [ "idea" ]), 
  _defineProperty(_SUPPORTED_LANGUAGES, "kotlin", [ "idea" ]), _defineProperty(_SUPPORTED_LANGUAGES, "groovy", [ "idea" ]), 
  _defineProperty(_SUPPORTED_LANGUAGES, "scala", [ "idea" ]), _defineProperty(_SUPPORTED_LANGUAGES, "javascript", [ "webstorm", "phpstorm", "idea" ]), 
  _defineProperty(_SUPPORTED_LANGUAGES, "coffeescript", [ "webstorm", "phpstorm", "idea" ]), 
  _defineProperty(_SUPPORTED_LANGUAGES, "typescript", [ "webstorm", "phpstorm", "idea" ]), 
  _defineProperty(_SUPPORTED_LANGUAGES, "dart", [ "webstorm", "phpstorm", "idea" ]), 
  _defineProperty(_SUPPORTED_LANGUAGES, "go", [ "goland", "idea" ]), _defineProperty(_SUPPORTED_LANGUAGES, "css", [ "webstorm", "phpstorm", "idea" ]), 
  _defineProperty(_SUPPORTED_LANGUAGES, "html", [ "webstorm", "phpstorm", "idea" ]), 
  _defineProperty(_SUPPORTED_LANGUAGES, "python", [ "pycharm", "idea" ]), _defineProperty(_SUPPORTED_LANGUAGES, "jupyter notebook", [ "pycharm", "idea" ]), 
  _defineProperty(_SUPPORTED_LANGUAGES, "php", [ "phpstorm", "idea" ]), _defineProperty(_SUPPORTED_LANGUAGES, "c#", [ "rider" ]), 
  _defineProperty(_SUPPORTED_LANGUAGES, "f#", [ "rider" ]), _defineProperty(_SUPPORTED_LANGUAGES, "c++", [ "clion" ]), 
  _defineProperty(_SUPPORTED_LANGUAGES, "c", [ "clion" ]), _defineProperty(_SUPPORTED_LANGUAGES, "ruby", [ "rubymine", "idea" ]), 
  _defineProperty(_SUPPORTED_LANGUAGES, "rust", [ "clion", "idea" ]), _defineProperty(_SUPPORTED_LANGUAGES, "puppet", [ "rubymine", "idea" ]), 
  _defineProperty(_SUPPORTED_LANGUAGES, "objective-c", [ "appcode" ]), _defineProperty(_SUPPORTED_LANGUAGES, "swift", [ "appcode" ]), 
  _SUPPORTED_LANGUAGES);
  var SUPPORTED_TOOLS = {
    idea: {
      name: "IntelliJ IDEA",
      tag: "idea",
      icon: chrome.runtime.getURL(intellij_idea)
    },
    appcode: {
      name: "AppCode",
      tag: "appcode",
      icon: chrome.runtime.getURL(appcode)
    },
    clion: {
      name: "CLion",
      tag: "clion",
      icon: chrome.runtime.getURL(clion)
    },
    pycharm: {
      name: "PyCharm",
      tag: "pycharm",
      icon: chrome.runtime.getURL(pycharm)
    },
    phpstorm: {
      name: "PhpStorm",
      tag: "php-storm",
      icon: chrome.runtime.getURL(phpstorm)
    },
    rubymine: {
      name: "RubyMine",
      tag: "rubymine",
      icon: chrome.runtime.getURL(rubymine)
    },
    webstorm: {
      name: "WebStorm",
      tag: "web-storm",
      icon: chrome.runtime.getURL(webstorm)
    },
    rider: {
      name: "Rider",
      tag: "rd",
      icon: chrome.runtime.getURL(rider)
    },
    goland: {
      name: "GoLand",
      tag: "goland",
      icon: chrome.runtime.getURL(goland)
    }
  };
  var USAGE_THRESHOLD = .05;
  var HUNDRED_PERCENT = 100;
  var MAX_DECIMALS = 2;
  var MIN_VALID_HTTP_STATUS = 200;
  var MAX_VALID_HTTP_STATUS = 299;
  var DEFAULT_LANGUAGE_SET = _defineProperty({}, DEFAULT_LANGUAGE, HUNDRED_PERCENT);
  var CLONE_PROTOCOLS = {
    HTTPS: "HTTPS",
    SSH: "SSH"
  };
}, function(module, __webpack_exports__, __webpack_require__) {
  "use strict";
  __webpack_require__.d(__webpack_exports__, "c", (function() {
    return getToolboxURN;
  }));
  __webpack_require__.d(__webpack_exports__, "b", (function() {
    return getToolboxNavURN;
  }));
  __webpack_require__.d(__webpack_exports__, "a", (function() {
    return callToolbox;
  }));
  var convertNumberToIndex = function convertNumberToIndex(number) {
    return number - 1;
  };
  function getToolboxURN(toolTag, cloneUrl) {
    return "jetbrains://".concat(toolTag, "/checkout/git?checkout.repo=").concat(cloneUrl, "&idea.required.plugins.id=Git4Idea");
  }
  function getToolboxNavURN(toolTag, project, filePath) {
    var lineNumber = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null;
    var lineIndex = convertNumberToIndex(null == lineNumber ? 1 : lineNumber);
    var columnIndex = convertNumberToIndex(1);
    return "jetbrains://".concat(toolTag, "/navigate/reference?project=").concat(project, "&path=").concat(filePath, ":").concat(lineIndex, ":").concat(columnIndex);
  }
  function callToolbox(action) {
    var fakeAction = document.createElement("a");
    fakeAction.style.position = "absolute";
    fakeAction.style.left = "-9999em";
    fakeAction.href = action;
    document.body.appendChild(fakeAction);
    fakeAction.click();
    document.body.removeChild(fakeAction);
  }
}, function(module, __webpack_exports__, __webpack_require__) {
  "use strict";
  __webpack_require__.d(__webpack_exports__, "a", (function() {
    return observe;
  }));
  function _typeof(obj) {
    "@babel/helpers - typeof";
    if ("function" === typeof Symbol && "symbol" === typeof Symbol.iterator) _typeof = function _typeof(obj) {
      return typeof obj;
    }; else _typeof = function _typeof(obj) {
      return obj && "function" === typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
    };
    return _typeof(obj);
  }
  function SelectorSet() {
    if (!(this instanceof SelectorSet)) return new SelectorSet;
    this.size = 0;
    this.uid = 0;
    this.selectors = [];
    this.selectorObjects = {};
    this.indexes = Object.create(this.indexes);
    this.activeIndexes = [];
  }
  var docElem = window.document.documentElement;
  var matches = docElem.matches || docElem.webkitMatchesSelector || docElem.mozMatchesSelector || docElem.oMatchesSelector || docElem.msMatchesSelector;
  SelectorSet.prototype.matchesSelector = function(el, selector) {
    return matches.call(el, selector);
  };
  SelectorSet.prototype.querySelectorAll = function(selectors, context) {
    return context.querySelectorAll(selectors);
  };
  SelectorSet.prototype.indexes = [];
  var idRe = /^#((?:[\w\u00c0-\uFFFF\-]|\\.)+)/g;
  SelectorSet.prototype.indexes.push({
    name: "ID",
    selector: function matchIdSelector(sel) {
      var m;
      if (m = sel.match(idRe)) return m[0].slice(1);
    },
    element: function getElementId(el) {
      if (el.id) return [ el.id ];
    }
  });
  var classRe = /^\.((?:[\w\u00c0-\uFFFF\-]|\\.)+)/g;
  SelectorSet.prototype.indexes.push({
    name: "CLASS",
    selector: function matchClassSelector(sel) {
      var m;
      if (m = sel.match(classRe)) return m[0].slice(1);
    },
    element: function getElementClassNames(el) {
      var className = el.className;
      if (className) if ("string" === typeof className) return className.split(/\s/); else if ("object" === _typeof(className) && "baseVal" in className) return className.baseVal.split(/\s/);
    }
  });
  var tagRe = /^((?:[\w\u00c0-\uFFFF\-]|\\.)+)/g;
  SelectorSet.prototype.indexes.push({
    name: "TAG",
    selector: function matchTagSelector(sel) {
      var m;
      if (m = sel.match(tagRe)) return m[0].toUpperCase();
    },
    element: function getElementTagName(el) {
      return [ el.nodeName.toUpperCase() ];
    }
  });
  SelectorSet.prototype.indexes["default"] = {
    name: "UNIVERSAL",
    selector: function selector() {
      return true;
    },
    element: function element() {
      return [ true ];
    }
  };
  var Map;
  if ("function" === typeof window.Map) Map = window.Map; else Map = function() {
    function Map() {
      this.map = {};
    }
    Map.prototype.get = function(key) {
      return this.map[key + " "];
    };
    Map.prototype.set = function(key, value) {
      this.map[key + " "] = value;
    };
    return Map;
  }();
  var chunker = /((?:\((?:\([^()]+\)|[^()]+)+\)|\[(?:\[[^\[\]]*\]|['"][^'"]*['"]|[^\[\]'"]+)+\]|\\.|[^ >+~,(\[\\]+)+|[>+~])(\s*,\s*)?((?:.|\r|\n)*)/g;
  function parseSelectorIndexes(allIndexes, selector) {
    allIndexes = allIndexes.slice(0).concat(allIndexes["default"]);
    var i, j, m, dup, key, index, allIndexesLen = allIndexes.length, rest = selector, indexes = [];
    do {
      chunker.exec("");
      if (m = chunker.exec(rest)) {
        rest = m[3];
        if (m[2] || !rest) for (i = 0; i < allIndexesLen; i++) {
          index = allIndexes[i];
          if (key = index.selector(m[1])) {
            j = indexes.length;
            dup = false;
            while (j--) if (indexes[j].index === index && indexes[j].key === key) {
              dup = true;
              break;
            }
            if (!dup) indexes.push({
              index: index,
              key: key
            });
            break;
          }
        }
      }
    } while (m);
    return indexes;
  }
  function findByPrototype(ary, proto) {
    var i, len, item;
    for (i = 0, len = ary.length; i < len; i++) {
      item = ary[i];
      if (proto.isPrototypeOf(item)) return item;
    }
  }
  SelectorSet.prototype.logDefaultIndexUsed = function() {};
  SelectorSet.prototype.add = function(selector, data) {
    var obj, i, indexProto, key, index, objs, selectorIndexes, selectorIndex, indexes = this.activeIndexes, selectors = this.selectors, selectorObjects = this.selectorObjects;
    if ("string" !== typeof selector) return;
    obj = {
      id: this.uid++,
      selector: selector,
      data: data
    };
    selectorObjects[obj.id] = obj;
    selectorIndexes = parseSelectorIndexes(this.indexes, selector);
    for (i = 0; i < selectorIndexes.length; i++) {
      selectorIndex = selectorIndexes[i];
      key = selectorIndex.key;
      indexProto = selectorIndex.index;
      index = findByPrototype(indexes, indexProto);
      if (!index) {
        index = Object.create(indexProto);
        index.map = new Map;
        indexes.push(index);
      }
      if (indexProto === this.indexes["default"]) this.logDefaultIndexUsed(obj);
      objs = index.map.get(key);
      if (!objs) {
        objs = [];
        index.map.set(key, objs);
      }
      objs.push(obj);
    }
    this.size++;
    selectors.push(selector);
  };
  SelectorSet.prototype.remove = function(selector, data) {
    if ("string" !== typeof selector) return;
    var selectorIndexes, selectorIndex, i, j, k, selIndex, objs, obj, indexes = this.activeIndexes, selectors = this.selectors = [], selectorObjects = this.selectorObjects, removedIds = {}, removeAll = 1 === arguments.length;
    selectorIndexes = parseSelectorIndexes(this.indexes, selector);
    for (i = 0; i < selectorIndexes.length; i++) {
      selectorIndex = selectorIndexes[i];
      j = indexes.length;
      while (j--) {
        selIndex = indexes[j];
        if (selectorIndex.index.isPrototypeOf(selIndex)) {
          objs = selIndex.map.get(selectorIndex.key);
          if (objs) {
            k = objs.length;
            while (k--) {
              obj = objs[k];
              if (obj.selector === selector && (removeAll || obj.data === data)) {
                objs.splice(k, 1);
                removedIds[obj.id] = true;
              }
            }
          }
          break;
        }
      }
    }
    for (i in removedIds) {
      delete selectorObjects[i];
      this.size--;
    }
    for (i in selectorObjects) selectors.push(selectorObjects[i].selector);
  };
  function sortById(a, b) {
    return a.id - b.id;
  }
  SelectorSet.prototype.queryAll = function(context) {
    if (!this.selectors.length) return [];
    var matches = {}, results = [];
    var els = this.querySelectorAll(this.selectors.join(", "), context);
    var i, j, len, len2, el, m, match, obj;
    for (i = 0, len = els.length; i < len; i++) {
      el = els[i];
      m = this.matches(el);
      for (j = 0, len2 = m.length; j < len2; j++) {
        obj = m[j];
        if (!matches[obj.id]) {
          match = {
            id: obj.id,
            selector: obj.selector,
            data: obj.data,
            elements: []
          };
          matches[obj.id] = match;
          results.push(match);
        } else match = matches[obj.id];
        match.elements.push(el);
      }
    }
    return results.sort(sortById);
  };
  SelectorSet.prototype.matches = function(el) {
    if (!el) return [];
    var i, j, k, len, len2, len3, index, keys, objs, obj, id;
    var indexes = this.activeIndexes, matchedIds = {}, matches = [];
    for (i = 0, len = indexes.length; i < len; i++) {
      index = indexes[i];
      keys = index.element(el);
      if (keys) for (j = 0, len2 = keys.length; j < len2; j++) if (objs = index.map.get(keys[j])) for (k = 0, 
      len3 = objs.length; k < len3; k++) {
        obj = objs[k];
        id = obj.id;
        if (!matchedIds[id] && this.matchesSelector(el, obj.selector)) {
          matchedIds[id] = true;
          matches.push(obj);
        }
      }
    }
    return matches.sort(sortById);
  };
  function _typeof2(obj) {
    "@babel/helpers - typeof";
    if ("function" === typeof Symbol && "symbol" === typeof Symbol.iterator) _typeof2 = function _typeof2(obj) {
      return typeof obj;
    }; else _typeof2 = function _typeof2(obj) {
      return obj && "function" === typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
    };
    return _typeof2(obj);
  }
  var el = null;
  var observer = null;
  var queue = [];
  function scheduleBatch(document, callback) {
    var calls = [];
    function processBatchQueue() {
      var callsCopy = calls;
      calls = [];
      callback(callsCopy);
    }
    function scheduleBatchQueue() {
      for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) args[_key] = arguments[_key];
      calls.push(args);
      if (1 === calls.length) scheduleMacroTask(document, processBatchQueue);
    }
    return scheduleBatchQueue;
  }
  function scheduleMacroTask(document, callback) {
    if (!observer) observer = new MutationObserver(handleMutations);
    if (!el) {
      el = document.createElement("div");
      observer.observe(el, {
        attributes: true
      });
    }
    queue.push(callback);
    el.setAttribute("data-twiddle", "" + Date.now());
  }
  function handleMutations() {
    var callbacks = queue;
    queue = [];
    for (var i = 0; i < callbacks.length; i++) try {
      callbacks[i]();
    } catch (error) {
      setTimeout((function() {
        throw error;
      }), 0);
    }
  }
  var initMap = new WeakMap;
  var initializerMap = new WeakMap;
  var subscriptionMap = new WeakMap;
  var addMap = new WeakMap;
  function applyChanges(selectorObserver, changes) {
    for (var i = 0; i < changes.length; i++) {
      var change = changes[i];
      var type = change[0];
      var el = change[1];
      var observer = change[2];
      if (type === ADD) {
        runInit(observer, el);
        runAdd(observer, el);
      } else if (type === REMOVE) runRemove(observer, el); else if (type === REMOVE_ALL) runRemoveAll(selectorObserver.observers, el);
    }
  }
  function runInit(observer, el) {
    if (!(el instanceof observer.elementConstructor)) return;
    var initIds = initMap.get(el);
    if (!initIds) {
      initIds = [];
      initMap.set(el, initIds);
    }
    if (-1 === initIds.indexOf(observer.id)) {
      var initializer = void 0;
      if (observer.initialize) initializer = observer.initialize.call(void 0, el);
      if (initializer) {
        var initializers = initializerMap.get(el);
        if (!initializers) {
          initializers = {};
          initializerMap.set(el, initializers);
        }
        initializers["" + observer.id] = initializer;
      }
      initIds.push(observer.id);
    }
  }
  function runAdd(observer, el) {
    if (!(el instanceof observer.elementConstructor)) return;
    var addIds = addMap.get(el);
    if (!addIds) {
      addIds = [];
      addMap.set(el, addIds);
    }
    if (-1 === addIds.indexOf(observer.id)) {
      observer.elements.push(el);
      var initializers = initializerMap.get(el);
      var initializer = initializers ? initializers["" + observer.id] : null;
      if (initializer && initializer.add) initializer.add.call(void 0, el);
      if (observer.subscribe) {
        var subscription = observer.subscribe.call(void 0, el);
        if (subscription) {
          var subscriptions = subscriptionMap.get(el);
          if (!subscriptions) {
            subscriptions = {};
            subscriptionMap.set(el, subscriptions);
          }
          subscriptions["" + observer.id] = subscription;
        }
      }
      if (observer.add) observer.add.call(void 0, el);
      addIds.push(observer.id);
    }
  }
  function runRemove(observer, el) {
    if (!(el instanceof observer.elementConstructor)) return;
    var addIds = addMap.get(el);
    if (!addIds) return;
    var index = observer.elements.indexOf(el);
    if (-1 !== index) observer.elements.splice(index, 1);
    index = addIds.indexOf(observer.id);
    if (-1 !== index) {
      var initializers = initializerMap.get(el);
      var initializer = initializers ? initializers["" + observer.id] : null;
      if (initializer) if (initializer.remove) initializer.remove.call(void 0, el);
      if (observer.subscribe) {
        var subscriptions = subscriptionMap.get(el);
        var subscription = subscriptions ? subscriptions["" + observer.id] : null;
        if (subscription && subscription.unsubscribe) subscription.unsubscribe();
      }
      if (observer.remove) observer.remove.call(void 0, el);
      addIds.splice(index, 1);
    }
    if (0 === addIds.length) addMap["delete"](el);
  }
  function runRemoveAll(observers, el) {
    var addIds = addMap.get(el);
    if (!addIds) return;
    var ids = addIds.slice(0);
    for (var i = 0; i < ids.length; i++) {
      var observer = observers[ids[i]];
      if (!observer) continue;
      var index = observer.elements.indexOf(el);
      if (-1 !== index) observer.elements.splice(index, 1);
      var initializers = initializerMap.get(el);
      var initializer = initializers ? initializers["" + observer.id] : null;
      if (initializer && initializer.remove) initializer.remove.call(void 0, el);
      var subscriptions = subscriptionMap.get(el);
      var subscription = subscriptions ? subscriptions["" + observer.id] : null;
      if (subscription && subscription.unsubscribe) subscription.unsubscribe();
      if (observer.remove) observer.remove.call(void 0, el);
    }
    addMap["delete"](el);
  }
  var innerHTMLReplacementIsBuggy = null;
  function detectInnerHTMLReplacementBuggy(document) {
    if (null === innerHTMLReplacementIsBuggy) {
      var a = document.createElement("div");
      var b = document.createElement("div");
      var c = document.createElement("div");
      a.appendChild(b);
      b.appendChild(c);
      a.innerHTML = "";
      innerHTMLReplacementIsBuggy = c.parentNode !== b;
    }
    return innerHTMLReplacementIsBuggy;
  }
  function supportsSelectorMatching(node) {
    return "matches" in node || "webkitMatchesSelector" in node || "mozMatchesSelector" in node || "oMatchesSelector" in node || "msMatchesSelector" in node;
  }
  var ADD = 1;
  var REMOVE = 2;
  var REMOVE_ALL = 3;
  function handleMutations$1(selectorObserver, changes, mutations) {
    for (var i = 0; i < mutations.length; i++) {
      var mutation = mutations[i];
      if ("childList" === mutation.type) {
        addNodes(selectorObserver, changes, mutation.addedNodes);
        removeNodes(selectorObserver, changes, mutation.removedNodes);
      } else if ("attributes" === mutation.type) revalidateObservers(selectorObserver, changes, mutation.target);
    }
    if (detectInnerHTMLReplacementBuggy(selectorObserver.ownerDocument)) revalidateOrphanedElements(selectorObserver, changes);
  }
  function addNodes(selectorObserver, changes, nodes) {
    for (var i = 0; i < nodes.length; i++) {
      var node = nodes[i];
      if (supportsSelectorMatching(node)) {
        var matches = selectorObserver.selectorSet.matches(node);
        for (var j = 0; j < matches.length; j++) {
          var data = matches[j].data;
          changes.push([ ADD, node, data ]);
        }
      }
      if ("querySelectorAll" in node) {
        var matches2 = selectorObserver.selectorSet.queryAll(node);
        for (var _j = 0; _j < matches2.length; _j++) {
          var _matches2$_j = matches2[_j], _data = _matches2$_j.data, elements = _matches2$_j.elements;
          for (var k = 0; k < elements.length; k++) changes.push([ ADD, elements[k], _data ]);
        }
      }
    }
  }
  function removeNodes(selectorObserver, changes, nodes) {
    for (var i = 0; i < nodes.length; i++) {
      var node = nodes[i];
      if ("querySelectorAll" in node) {
        changes.push([ REMOVE_ALL, node ]);
        var descendants = node.querySelectorAll("*");
        for (var j = 0; j < descendants.length; j++) changes.push([ REMOVE_ALL, descendants[j] ]);
      }
    }
  }
  function revalidateObservers(selectorObserver, changes, node) {
    if (supportsSelectorMatching(node)) {
      var matches = selectorObserver.selectorSet.matches(node);
      for (var i = 0; i < matches.length; i++) {
        var data = matches[i].data;
        changes.push([ ADD, node, data ]);
      }
    }
    if ("querySelectorAll" in node) {
      var ids = addMap.get(node);
      if (ids) for (var _i = 0; _i < ids.length; _i++) {
        var observer = selectorObserver.observers[ids[_i]];
        if (observer) if (!selectorObserver.selectorSet.matchesSelector(node, observer.selector)) changes.push([ REMOVE, node, observer ]);
      }
    }
  }
  function revalidateDescendantObservers(selectorObserver, changes, node) {
    if ("querySelectorAll" in node) {
      revalidateObservers(selectorObserver, changes, node);
      var descendants = node.querySelectorAll("*");
      for (var i = 0; i < descendants.length; i++) revalidateObservers(selectorObserver, changes, descendants[i]);
    }
  }
  function revalidateInputObservers(selectorObserver, changes, inputs) {
    for (var i = 0; i < inputs.length; i++) {
      var input = inputs[i];
      var els = input.form ? input.form.elements : selectorObserver.rootNode.querySelectorAll("input");
      for (var j = 0; j < els.length; j++) revalidateObservers(selectorObserver, changes, els[j]);
    }
  }
  function revalidateOrphanedElements(selectorObserver, changes) {
    for (var i = 0; i < selectorObserver.observers.length; i++) {
      var observer = selectorObserver.observers[i];
      if (observer) {
        var elements = observer.elements;
        for (var j = 0; j < elements.length; j++) {
          var el = elements[j];
          if (!el.parentNode) changes.push([ REMOVE_ALL, el ]);
        }
      }
    }
  }
  function whenReady(document, callback) {
    var readyState = document.readyState;
    if ("interactive" === readyState || "complete" === readyState) scheduleMacroTask(document, callback); else document.addEventListener("DOMContentLoaded", scheduleMacroTask(document, callback));
  }
  var index_esm_typeof = "function" === typeof Symbol && "symbol" === _typeof2(Symbol.iterator) ? function(obj) {
    return _typeof2(obj);
  } : function(obj) {
    return obj && "function" === typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : _typeof2(obj);
  };
  var uid = 0;
  function SelectorObserver(rootNode) {
    this.rootNode = 9 === rootNode.nodeType ? rootNode.documentElement : rootNode;
    this.ownerDocument = 9 === rootNode.nodeType ? rootNode : rootNode.ownerDocument;
    this.observers = [];
    this.selectorSet = new SelectorSet;
    this.mutationObserver = new MutationObserver(handleRootMutations.bind(this, this));
    this._scheduleAddRootNodes = scheduleBatch(this.ownerDocument, addRootNodes.bind(this, this));
    this._handleThrottledChangedTargets = scheduleBatch(this.ownerDocument, handleChangedTargets.bind(this, this));
    this.rootNode.addEventListener("change", handleChangeEvents.bind(this, this), false);
    whenReady(this.ownerDocument, onReady.bind(this, this));
  }
  SelectorObserver.prototype.disconnect = function() {
    this.mutationObserver.disconnect();
  };
  SelectorObserver.prototype.observe = function(a, b) {
    var handlers = void 0;
    if ("function" === typeof b) handlers = {
      selector: a,
      initialize: b
    }; else if ("object" === ("undefined" === typeof b ? "undefined" : index_esm_typeof(b))) {
      handlers = b;
      handlers.selector = a;
    } else handlers = a;
    var self = this;
    var observer = {
      id: uid++,
      selector: handlers.selector,
      initialize: handlers.initialize,
      add: handlers.add,
      remove: handlers.remove,
      subscribe: handlers.subscribe,
      elements: [],
      elementConstructor: handlers.hasOwnProperty("constructor") ? handlers.constructor : this.ownerDocument.defaultView.Element,
      abort: function abort() {
        self._abortObserving(observer);
      }
    };
    this.selectorSet.add(observer.selector, observer);
    this.observers[observer.id] = observer;
    this._scheduleAddRootNodes();
    return observer;
  };
  SelectorObserver.prototype._abortObserving = function(observer) {
    var elements = observer.elements;
    for (var i = 0; i < elements.length; i++) runRemove(observer, elements[i]);
    this.selectorSet.remove(observer.selector, observer);
    delete this.observers[observer.id];
  };
  SelectorObserver.prototype.triggerObservers = function(container) {
    var changes = [];
    revalidateDescendantObservers(this, changes, container);
    applyChanges(this, changes);
  };
  function onReady(selectorObserver) {
    selectorObserver.mutationObserver.observe(selectorObserver.rootNode, {
      childList: true,
      attributes: true,
      subtree: true
    });
    selectorObserver._scheduleAddRootNodes();
  }
  function addRootNodes(selectorObserver) {
    var changes = [];
    addNodes(selectorObserver, changes, [ selectorObserver.rootNode ]);
    applyChanges(selectorObserver, changes);
  }
  function handleRootMutations(selectorObserver, mutations) {
    var changes = [];
    handleMutations$1(selectorObserver, changes, mutations);
    applyChanges(selectorObserver, changes);
  }
  function handleChangeEvents(selectorObserver, event) {
    selectorObserver._handleThrottledChangedTargets(event.target);
  }
  function handleChangedTargets(selectorObserver, inputs) {
    var changes = [];
    revalidateInputObservers(selectorObserver, changes, inputs);
    applyChanges(selectorObserver, changes);
  }
  var documentObserver = void 0;
  function getDocumentObserver() {
    if (!documentObserver) documentObserver = new SelectorObserver(window.document);
    return documentObserver;
  }
  function observe() {
    var _getDocumentObserver;
    return (_getDocumentObserver = getDocumentObserver()).observe.apply(_getDocumentObserver, arguments);
  }
}, function(module, __webpack_exports__, __webpack_require__) {
  "use strict";
  var support = {
    searchParams: "URLSearchParams" in self,
    iterable: "Symbol" in self && "iterator" in Symbol,
    blob: "FileReader" in self && "Blob" in self && function() {
      try {
        new Blob;
        return true;
      } catch (e) {
        return false;
      }
    }(),
    formData: "FormData" in self,
    arrayBuffer: "ArrayBuffer" in self
  };
  function isDataView(obj) {
    return obj && DataView.prototype.isPrototypeOf(obj);
  }
  if (support.arrayBuffer) {
    var viewClasses = [ "[object Int8Array]", "[object Uint8Array]", "[object Uint8ClampedArray]", "[object Int16Array]", "[object Uint16Array]", "[object Int32Array]", "[object Uint32Array]", "[object Float32Array]", "[object Float64Array]" ];
    var isArrayBufferView = ArrayBuffer.isView || function(obj) {
      return obj && viewClasses.indexOf(Object.prototype.toString.call(obj)) > -1;
    };
  }
  function normalizeName(name) {
    if ("string" !== typeof name) name = String(name);
    if (/[^a-z0-9\-#$%&'*+.^_`|~]/i.test(name)) throw new TypeError("Invalid character in header field name");
    return name.toLowerCase();
  }
  function normalizeValue(value) {
    if ("string" !== typeof value) value = String(value);
    return value;
  }
  function iteratorFor(items) {
    var iterator = {
      next: function next() {
        var value = items.shift();
        return {
          done: void 0 === value,
          value: value
        };
      }
    };
    if (support.iterable) iterator[Symbol.iterator] = function() {
      return iterator;
    };
    return iterator;
  }
  function Headers(headers) {
    this.map = {};
    if (headers instanceof Headers) headers.forEach((function(value, name) {
      this.append(name, value);
    }), this); else if (Array.isArray(headers)) headers.forEach((function(header) {
      this.append(header[0], header[1]);
    }), this); else if (headers) Object.getOwnPropertyNames(headers).forEach((function(name) {
      this.append(name, headers[name]);
    }), this);
  }
  Headers.prototype.append = function(name, value) {
    name = normalizeName(name);
    value = normalizeValue(value);
    var oldValue = this.map[name];
    this.map[name] = oldValue ? oldValue + ", " + value : value;
  };
  Headers.prototype["delete"] = function(name) {
    delete this.map[normalizeName(name)];
  };
  Headers.prototype.get = function(name) {
    name = normalizeName(name);
    return this.has(name) ? this.map[name] : null;
  };
  Headers.prototype.has = function(name) {
    return this.map.hasOwnProperty(normalizeName(name));
  };
  Headers.prototype.set = function(name, value) {
    this.map[normalizeName(name)] = normalizeValue(value);
  };
  Headers.prototype.forEach = function(callback, thisArg) {
    for (var name in this.map) if (this.map.hasOwnProperty(name)) callback.call(thisArg, this.map[name], name, this);
  };
  Headers.prototype.keys = function() {
    var items = [];
    this.forEach((function(value, name) {
      items.push(name);
    }));
    return iteratorFor(items);
  };
  Headers.prototype.values = function() {
    var items = [];
    this.forEach((function(value) {
      items.push(value);
    }));
    return iteratorFor(items);
  };
  Headers.prototype.entries = function() {
    var items = [];
    this.forEach((function(value, name) {
      items.push([ name, value ]);
    }));
    return iteratorFor(items);
  };
  if (support.iterable) Headers.prototype[Symbol.iterator] = Headers.prototype.entries;
  function consumed(body) {
    if (body.bodyUsed) return Promise.reject(new TypeError("Already read"));
    body.bodyUsed = true;
  }
  function fileReaderReady(reader) {
    return new Promise((function(resolve, reject) {
      reader.onload = function() {
        resolve(reader.result);
      };
      reader.onerror = function() {
        reject(reader.error);
      };
    }));
  }
  function readBlobAsArrayBuffer(blob) {
    var reader = new FileReader;
    var promise = fileReaderReady(reader);
    reader.readAsArrayBuffer(blob);
    return promise;
  }
  function readBlobAsText(blob) {
    var reader = new FileReader;
    var promise = fileReaderReady(reader);
    reader.readAsText(blob);
    return promise;
  }
  function readArrayBufferAsText(buf) {
    var view = new Uint8Array(buf);
    var chars = new Array(view.length);
    for (var i = 0; i < view.length; i++) chars[i] = String.fromCharCode(view[i]);
    return chars.join("");
  }
  function bufferClone(buf) {
    if (buf.slice) return buf.slice(0); else {
      var view = new Uint8Array(buf.byteLength);
      view.set(new Uint8Array(buf));
      return view.buffer;
    }
  }
  function Body() {
    this.bodyUsed = false;
    this._initBody = function(body) {
      this._bodyInit = body;
      if (!body) this._bodyText = ""; else if ("string" === typeof body) this._bodyText = body; else if (support.blob && Blob.prototype.isPrototypeOf(body)) this._bodyBlob = body; else if (support.formData && FormData.prototype.isPrototypeOf(body)) this._bodyFormData = body; else if (support.searchParams && URLSearchParams.prototype.isPrototypeOf(body)) this._bodyText = body.toString(); else if (support.arrayBuffer && support.blob && isDataView(body)) {
        this._bodyArrayBuffer = bufferClone(body.buffer);
        this._bodyInit = new Blob([ this._bodyArrayBuffer ]);
      } else if (support.arrayBuffer && (ArrayBuffer.prototype.isPrototypeOf(body) || isArrayBufferView(body))) this._bodyArrayBuffer = bufferClone(body); else this._bodyText = body = Object.prototype.toString.call(body);
      if (!this.headers.get("content-type")) if ("string" === typeof body) this.headers.set("content-type", "text/plain;charset=UTF-8"); else if (this._bodyBlob && this._bodyBlob.type) this.headers.set("content-type", this._bodyBlob.type); else if (support.searchParams && URLSearchParams.prototype.isPrototypeOf(body)) this.headers.set("content-type", "application/x-www-form-urlencoded;charset=UTF-8");
    };
    if (support.blob) {
      this.blob = function() {
        var rejected = consumed(this);
        if (rejected) return rejected;
        if (this._bodyBlob) return Promise.resolve(this._bodyBlob); else if (this._bodyArrayBuffer) return Promise.resolve(new Blob([ this._bodyArrayBuffer ])); else if (this._bodyFormData) throw new Error("could not read FormData body as blob"); else return Promise.resolve(new Blob([ this._bodyText ]));
      };
      this.arrayBuffer = function() {
        if (this._bodyArrayBuffer) return consumed(this) || Promise.resolve(this._bodyArrayBuffer); else return this.blob().then(readBlobAsArrayBuffer);
      };
    }
    this.text = function() {
      var rejected = consumed(this);
      if (rejected) return rejected;
      if (this._bodyBlob) return readBlobAsText(this._bodyBlob); else if (this._bodyArrayBuffer) return Promise.resolve(readArrayBufferAsText(this._bodyArrayBuffer)); else if (this._bodyFormData) throw new Error("could not read FormData body as text"); else return Promise.resolve(this._bodyText);
    };
    if (support.formData) this.formData = function() {
      return this.text().then(decode);
    };
    this.json = function() {
      return this.text().then(JSON.parse);
    };
    return this;
  }
  var methods = [ "DELETE", "GET", "HEAD", "OPTIONS", "POST", "PUT" ];
  function normalizeMethod(method) {
    var upcased = method.toUpperCase();
    return methods.indexOf(upcased) > -1 ? upcased : method;
  }
  function Request(input, options) {
    options = options || {};
    var body = options.body;
    if (input instanceof Request) {
      if (input.bodyUsed) throw new TypeError("Already read");
      this.url = input.url;
      this.credentials = input.credentials;
      if (!options.headers) this.headers = new Headers(input.headers);
      this.method = input.method;
      this.mode = input.mode;
      this.signal = input.signal;
      if (!body && null != input._bodyInit) {
        body = input._bodyInit;
        input.bodyUsed = true;
      }
    } else this.url = String(input);
    this.credentials = options.credentials || this.credentials || "same-origin";
    if (options.headers || !this.headers) this.headers = new Headers(options.headers);
    this.method = normalizeMethod(options.method || this.method || "GET");
    this.mode = options.mode || this.mode || null;
    this.signal = options.signal || this.signal;
    this.referrer = null;
    if (("GET" === this.method || "HEAD" === this.method) && body) throw new TypeError("Body not allowed for GET or HEAD requests");
    this._initBody(body);
  }
  Request.prototype.clone = function() {
    return new Request(this, {
      body: this._bodyInit
    });
  };
  function decode(body) {
    var form = new FormData;
    body.trim().split("&").forEach((function(bytes) {
      if (bytes) {
        var split = bytes.split("=");
        var name = split.shift().replace(/\+/g, " ");
        var value = split.join("=").replace(/\+/g, " ");
        form.append(decodeURIComponent(name), decodeURIComponent(value));
      }
    }));
    return form;
  }
  function parseHeaders(rawHeaders) {
    var headers = new Headers;
    var preProcessedHeaders = rawHeaders.replace(/\r?\n[\t ]+/g, " ");
    preProcessedHeaders.split(/\r?\n/).forEach((function(line) {
      var parts = line.split(":");
      var key = parts.shift().trim();
      if (key) {
        var value = parts.join(":").trim();
        headers.append(key, value);
      }
    }));
    return headers;
  }
  Body.call(Request.prototype);
  function Response(bodyInit, options) {
    if (!options) options = {};
    this.type = "default";
    this.status = void 0 === options.status ? 200 : options.status;
    this.ok = this.status >= 200 && this.status < 300;
    this.statusText = "statusText" in options ? options.statusText : "OK";
    this.headers = new Headers(options.headers);
    this.url = options.url || "";
    this._initBody(bodyInit);
  }
  Body.call(Response.prototype);
  Response.prototype.clone = function() {
    return new Response(this._bodyInit, {
      status: this.status,
      statusText: this.statusText,
      headers: new Headers(this.headers),
      url: this.url
    });
  };
  Response.error = function() {
    var response = new Response(null, {
      status: 0,
      statusText: ""
    });
    response.type = "error";
    return response;
  };
  var redirectStatuses = [ 301, 302, 303, 307, 308 ];
  Response.redirect = function(url, status) {
    if (-1 === redirectStatuses.indexOf(status)) throw new RangeError("Invalid status code");
    return new Response(null, {
      status: status,
      headers: {
        location: url
      }
    });
  };
  var DOMException = self.DOMException;
  try {
    new DOMException;
  } catch (err) {
    DOMException = function DOMException(message, name) {
      this.message = message;
      this.name = name;
      var error = Error(message);
      this.stack = error.stack;
    };
    DOMException.prototype = Object.create(Error.prototype);
    DOMException.prototype.constructor = DOMException;
  }
  function fetch(input, init) {
    return new Promise((function(resolve, reject) {
      var request = new Request(input, init);
      if (request.signal && request.signal.aborted) return reject(new DOMException("Aborted", "AbortError"));
      var xhr = new XMLHttpRequest;
      function abortXhr() {
        xhr.abort();
      }
      xhr.onload = function() {
        var options = {
          status: xhr.status,
          statusText: xhr.statusText,
          headers: parseHeaders(xhr.getAllResponseHeaders() || "")
        };
        options.url = "responseURL" in xhr ? xhr.responseURL : options.headers.get("X-Request-URL");
        var body = "response" in xhr ? xhr.response : xhr.responseText;
        resolve(new Response(body, options));
      };
      xhr.onerror = function() {
        reject(new TypeError("Network request failed"));
      };
      xhr.ontimeout = function() {
        reject(new TypeError("Network request failed"));
      };
      xhr.onabort = function() {
        reject(new DOMException("Aborted", "AbortError"));
      };
      xhr.open(request.method, request.url, true);
      if ("include" === request.credentials) xhr.withCredentials = true; else if ("omit" === request.credentials) xhr.withCredentials = false;
      if ("responseType" in xhr && support.blob) xhr.responseType = "blob";
      request.headers.forEach((function(value, name) {
        xhr.setRequestHeader(name, value);
      }));
      if (request.signal) {
        request.signal.addEventListener("abort", abortXhr);
        xhr.onreadystatechange = function() {
          if (4 === xhr.readyState) request.signal.removeEventListener("abort", abortXhr);
        };
      }
      xhr.send("undefined" === typeof request._bodyInit ? null : request._bodyInit);
    }));
  }
  fetch.polyfill = true;
  if (!self.fetch) {
    self.fetch = fetch;
    self.Headers = Headers;
    self.Request = Request;
    self.Response = Response;
  }
}, function(module, exports) {
  module.exports = isUrl;
  var protocolAndDomainRE = /^(?:\w+:)?\/\/(\S+)$/;
  var localhostDomainRE = /^localhost[\:?\d]*(?:[^\:?\d]\S*)?$/;
  var nonLocalhostDomainRE = /^[^\s\.]+\.\S{2,}$/;
  function isUrl(string) {
    if ("string" !== typeof string) return false;
    var match = string.match(protocolAndDomainRE);
    if (!match) return false;
    var everythingAfterProtocol = match[1];
    if (!everythingAfterProtocol) return false;
    if (localhostDomainRE.test(everythingAfterProtocol) || nonLocalhostDomainRE.test(everythingAfterProtocol)) return true;
    return false;
  }
}, function(module, exports) {
  module.exports = function(module) {
    if (!module.webpackPolyfill) {
      module.deprecate = function() {};
      module.paths = [];
      if (!module.children) module.children = [];
      Object.defineProperty(module, "loaded", {
        enumerable: true,
        get: function get() {
          return module.l;
        }
      });
      Object.defineProperty(module, "id", {
        enumerable: true,
        get: function get() {
          return module.i;
        }
      });
      module.webpackPolyfill = 1;
    }
    return module;
  };
}, function(module, exports) {
  (function(__webpack_amd_options__) {
    module.exports = __webpack_amd_options__;
  }).call(this, {});
}, , , , function(module, exports, __webpack_require__) {
  "use strict";
  function _typeof(obj) {
    "@babel/helpers - typeof";
    if ("function" === typeof Symbol && "symbol" === typeof Symbol.iterator) _typeof = function _typeof(obj) {
      return typeof obj;
    }; else _typeof = function _typeof(obj) {
      return obj && "function" === typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
    };
    return _typeof(obj);
  }
  var punycode = __webpack_require__(11);
  var util = __webpack_require__(13);
  exports.parse = urlParse;
  exports.resolve = urlResolve;
  exports.resolveObject = urlResolveObject;
  exports.format = urlFormat;
  exports.Url = Url;
  function Url() {
    this.protocol = null;
    this.slashes = null;
    this.auth = null;
    this.host = null;
    this.port = null;
    this.hostname = null;
    this.hash = null;
    this.search = null;
    this.query = null;
    this.pathname = null;
    this.path = null;
    this.href = null;
  }
  var protocolPattern = /^([a-z0-9.+-]+:)/i, portPattern = /:[0-9]*$/, simplePathPattern = /^(\/\/?(?!\/)[^\?\s]*)(\?[^\s]*)?$/, delims = [ "<", ">", '"', "`", " ", "\r", "\n", "\t" ], unwise = [ "{", "}", "|", "\\", "^", "`" ].concat(delims), autoEscape = [ "'" ].concat(unwise), nonHostChars = [ "%", "/", "?", ";", "#" ].concat(autoEscape), hostEndingChars = [ "/", "?", "#" ], hostnameMaxLen = 255, hostnamePartPattern = /^[+a-z0-9A-Z_-]{0,63}$/, hostnamePartStart = /^([+a-z0-9A-Z_-]{0,63})(.*)$/, unsafeProtocol = {
    javascript: true,
    "javascript:": true
  }, hostlessProtocol = {
    javascript: true,
    "javascript:": true
  }, slashedProtocol = {
    http: true,
    https: true,
    ftp: true,
    gopher: true,
    file: true,
    "http:": true,
    "https:": true,
    "ftp:": true,
    "gopher:": true,
    "file:": true
  }, querystring = __webpack_require__(14);
  function urlParse(url, parseQueryString, slashesDenoteHost) {
    if (url && util.isObject(url) && url instanceof Url) return url;
    var u = new Url;
    u.parse(url, parseQueryString, slashesDenoteHost);
    return u;
  }
  Url.prototype.parse = function(url, parseQueryString, slashesDenoteHost) {
    if (!util.isString(url)) throw new TypeError("Parameter 'url' must be a string, not " + _typeof(url));
    var queryIndex = url.indexOf("?"), splitter = -1 !== queryIndex && queryIndex < url.indexOf("#") ? "?" : "#", uSplit = url.split(splitter), slashRegex = /\\/g;
    uSplit[0] = uSplit[0].replace(slashRegex, "/");
    url = uSplit.join(splitter);
    var rest = url;
    rest = rest.trim();
    if (!slashesDenoteHost && 1 === url.split("#").length) {
      var simplePath = simplePathPattern.exec(rest);
      if (simplePath) {
        this.path = rest;
        this.href = rest;
        this.pathname = simplePath[1];
        if (simplePath[2]) {
          this.search = simplePath[2];
          if (parseQueryString) this.query = querystring.parse(this.search.substr(1)); else this.query = this.search.substr(1);
        } else if (parseQueryString) {
          this.search = "";
          this.query = {};
        }
        return this;
      }
    }
    var proto = protocolPattern.exec(rest);
    if (proto) {
      proto = proto[0];
      var lowerProto = proto.toLowerCase();
      this.protocol = lowerProto;
      rest = rest.substr(proto.length);
    }
    if (slashesDenoteHost || proto || rest.match(/^\/\/[^@\/]+@[^@\/]+/)) {
      var slashes = "//" === rest.substr(0, 2);
      if (slashes && !(proto && hostlessProtocol[proto])) {
        rest = rest.substr(2);
        this.slashes = true;
      }
    }
    if (!hostlessProtocol[proto] && (slashes || proto && !slashedProtocol[proto])) {
      var hostEnd = -1;
      for (var i = 0; i < hostEndingChars.length; i++) {
        var hec = rest.indexOf(hostEndingChars[i]);
        if (-1 !== hec && (-1 === hostEnd || hec < hostEnd)) hostEnd = hec;
      }
      var auth, atSign;
      if (-1 === hostEnd) atSign = rest.lastIndexOf("@"); else atSign = rest.lastIndexOf("@", hostEnd);
      if (-1 !== atSign) {
        auth = rest.slice(0, atSign);
        rest = rest.slice(atSign + 1);
        this.auth = decodeURIComponent(auth);
      }
      hostEnd = -1;
      for (i = 0; i < nonHostChars.length; i++) {
        hec = rest.indexOf(nonHostChars[i]);
        if (-1 !== hec && (-1 === hostEnd || hec < hostEnd)) hostEnd = hec;
      }
      if (-1 === hostEnd) hostEnd = rest.length;
      this.host = rest.slice(0, hostEnd);
      rest = rest.slice(hostEnd);
      this.parseHost();
      this.hostname = this.hostname || "";
      var ipv6Hostname = "[" === this.hostname[0] && "]" === this.hostname[this.hostname.length - 1];
      if (!ipv6Hostname) {
        var hostparts = this.hostname.split(/\./);
        i = 0;
        for (var l = hostparts.length; i < l; i++) {
          var part = hostparts[i];
          if (!part) continue;
          if (!part.match(hostnamePartPattern)) {
            var newpart = "";
            for (var j = 0, k = part.length; j < k; j++) if (part.charCodeAt(j) > 127) newpart += "x"; else newpart += part[j];
            if (!newpart.match(hostnamePartPattern)) {
              var validParts = hostparts.slice(0, i);
              var notHost = hostparts.slice(i + 1);
              var bit = part.match(hostnamePartStart);
              if (bit) {
                validParts.push(bit[1]);
                notHost.unshift(bit[2]);
              }
              if (notHost.length) rest = "/" + notHost.join(".") + rest;
              this.hostname = validParts.join(".");
              break;
            }
          }
        }
      }
      if (this.hostname.length > hostnameMaxLen) this.hostname = ""; else this.hostname = this.hostname.toLowerCase();
      if (!ipv6Hostname) this.hostname = punycode.toASCII(this.hostname);
      var p = this.port ? ":" + this.port : "";
      var h = this.hostname || "";
      this.host = h + p;
      this.href += this.host;
      if (ipv6Hostname) {
        this.hostname = this.hostname.substr(1, this.hostname.length - 2);
        if ("/" !== rest[0]) rest = "/" + rest;
      }
    }
    if (!unsafeProtocol[lowerProto]) for (i = 0, l = autoEscape.length; i < l; i++) {
      var ae = autoEscape[i];
      if (-1 === rest.indexOf(ae)) continue;
      var esc = encodeURIComponent(ae);
      if (esc === ae) esc = escape(ae);
      rest = rest.split(ae).join(esc);
    }
    var hash = rest.indexOf("#");
    if (-1 !== hash) {
      this.hash = rest.substr(hash);
      rest = rest.slice(0, hash);
    }
    var qm = rest.indexOf("?");
    if (-1 !== qm) {
      this.search = rest.substr(qm);
      this.query = rest.substr(qm + 1);
      if (parseQueryString) this.query = querystring.parse(this.query);
      rest = rest.slice(0, qm);
    } else if (parseQueryString) {
      this.search = "";
      this.query = {};
    }
    if (rest) this.pathname = rest;
    if (slashedProtocol[lowerProto] && this.hostname && !this.pathname) this.pathname = "/";
    if (this.pathname || this.search) {
      p = this.pathname || "";
      var s = this.search || "";
      this.path = p + s;
    }
    this.href = this.format();
    return this;
  };
  function urlFormat(obj) {
    if (util.isString(obj)) obj = urlParse(obj);
    if (!(obj instanceof Url)) return Url.prototype.format.call(obj);
    return obj.format();
  }
  Url.prototype.format = function() {
    var auth = this.auth || "";
    if (auth) {
      auth = encodeURIComponent(auth);
      auth = auth.replace(/%3A/i, ":");
      auth += "@";
    }
    var protocol = this.protocol || "", pathname = this.pathname || "", hash = this.hash || "", host = false, query = "";
    if (this.host) host = auth + this.host; else if (this.hostname) {
      host = auth + (-1 === this.hostname.indexOf(":") ? this.hostname : "[" + this.hostname + "]");
      if (this.port) host += ":" + this.port;
    }
    if (this.query && util.isObject(this.query) && Object.keys(this.query).length) query = querystring.stringify(this.query);
    var search = this.search || query && "?" + query || "";
    if (protocol && ":" !== protocol.substr(-1)) protocol += ":";
    if (this.slashes || (!protocol || slashedProtocol[protocol]) && false !== host) {
      host = "//" + (host || "");
      if (pathname && "/" !== pathname.charAt(0)) pathname = "/" + pathname;
    } else if (!host) host = "";
    if (hash && "#" !== hash.charAt(0)) hash = "#" + hash;
    if (search && "?" !== search.charAt(0)) search = "?" + search;
    pathname = pathname.replace(/[?#]/g, (function(match) {
      return encodeURIComponent(match);
    }));
    search = search.replace("#", "%23");
    return protocol + host + pathname + search + hash;
  };
  function urlResolve(source, relative) {
    return urlParse(source, false, true).resolve(relative);
  }
  Url.prototype.resolve = function(relative) {
    return this.resolveObject(urlParse(relative, false, true)).format();
  };
  function urlResolveObject(source, relative) {
    if (!source) return relative;
    return urlParse(source, false, true).resolveObject(relative);
  }
  Url.prototype.resolveObject = function(relative) {
    if (util.isString(relative)) {
      var rel = new Url;
      rel.parse(relative, false, true);
      relative = rel;
    }
    var result = new Url;
    var tkeys = Object.keys(this);
    for (var tk = 0; tk < tkeys.length; tk++) {
      var tkey = tkeys[tk];
      result[tkey] = this[tkey];
    }
    result.hash = relative.hash;
    if ("" === relative.href) {
      result.href = result.format();
      return result;
    }
    if (relative.slashes && !relative.protocol) {
      var rkeys = Object.keys(relative);
      for (var rk = 0; rk < rkeys.length; rk++) {
        var rkey = rkeys[rk];
        if ("protocol" !== rkey) result[rkey] = relative[rkey];
      }
      if (slashedProtocol[result.protocol] && result.hostname && !result.pathname) result.path = result.pathname = "/";
      result.href = result.format();
      return result;
    }
    if (relative.protocol && relative.protocol !== result.protocol) {
      if (!slashedProtocol[relative.protocol]) {
        var keys = Object.keys(relative);
        for (var v = 0; v < keys.length; v++) {
          var k = keys[v];
          result[k] = relative[k];
        }
        result.href = result.format();
        return result;
      }
      result.protocol = relative.protocol;
      if (!relative.host && !hostlessProtocol[relative.protocol]) {
        var relPath = (relative.pathname || "").split("/");
        while (relPath.length && !(relative.host = relPath.shift())) ;
        if (!relative.host) relative.host = "";
        if (!relative.hostname) relative.hostname = "";
        if ("" !== relPath[0]) relPath.unshift("");
        if (relPath.length < 2) relPath.unshift("");
        result.pathname = relPath.join("/");
      } else result.pathname = relative.pathname;
      result.search = relative.search;
      result.query = relative.query;
      result.host = relative.host || "";
      result.auth = relative.auth;
      result.hostname = relative.hostname || relative.host;
      result.port = relative.port;
      if (result.pathname || result.search) {
        var p = result.pathname || "";
        var s = result.search || "";
        result.path = p + s;
      }
      result.slashes = result.slashes || relative.slashes;
      result.href = result.format();
      return result;
    }
    var isSourceAbs = result.pathname && "/" === result.pathname.charAt(0), isRelAbs = relative.host || relative.pathname && "/" === relative.pathname.charAt(0), mustEndAbs = isRelAbs || isSourceAbs || result.host && relative.pathname, removeAllDots = mustEndAbs, srcPath = result.pathname && result.pathname.split("/") || [], psychotic = (relPath = relative.pathname && relative.pathname.split("/") || [], 
    result.protocol && !slashedProtocol[result.protocol]);
    if (psychotic) {
      result.hostname = "";
      result.port = null;
      if (result.host) if ("" === srcPath[0]) srcPath[0] = result.host; else srcPath.unshift(result.host);
      result.host = "";
      if (relative.protocol) {
        relative.hostname = null;
        relative.port = null;
        if (relative.host) if ("" === relPath[0]) relPath[0] = relative.host; else relPath.unshift(relative.host);
        relative.host = null;
      }
      mustEndAbs = mustEndAbs && ("" === relPath[0] || "" === srcPath[0]);
    }
    if (isRelAbs) {
      result.host = relative.host || "" === relative.host ? relative.host : result.host;
      result.hostname = relative.hostname || "" === relative.hostname ? relative.hostname : result.hostname;
      result.search = relative.search;
      result.query = relative.query;
      srcPath = relPath;
    } else if (relPath.length) {
      if (!srcPath) srcPath = [];
      srcPath.pop();
      srcPath = srcPath.concat(relPath);
      result.search = relative.search;
      result.query = relative.query;
    } else if (!util.isNullOrUndefined(relative.search)) {
      if (psychotic) {
        result.hostname = result.host = srcPath.shift();
        var authInHost = result.host && result.host.indexOf("@") > 0 ? result.host.split("@") : false;
        if (authInHost) {
          result.auth = authInHost.shift();
          result.host = result.hostname = authInHost.shift();
        }
      }
      result.search = relative.search;
      result.query = relative.query;
      if (!util.isNull(result.pathname) || !util.isNull(result.search)) result.path = (result.pathname ? result.pathname : "") + (result.search ? result.search : "");
      result.href = result.format();
      return result;
    }
    if (!srcPath.length) {
      result.pathname = null;
      if (result.search) result.path = "/" + result.search; else result.path = null;
      result.href = result.format();
      return result;
    }
    var last = srcPath.slice(-1)[0];
    var hasTrailingSlash = (result.host || relative.host || srcPath.length > 1) && ("." === last || ".." === last) || "" === last;
    var up = 0;
    for (var i = srcPath.length; i >= 0; i--) {
      last = srcPath[i];
      if ("." === last) srcPath.splice(i, 1); else if (".." === last) {
        srcPath.splice(i, 1);
        up++;
      } else if (up) {
        srcPath.splice(i, 1);
        up--;
      }
    }
    if (!mustEndAbs && !removeAllDots) for (;up--; up) srcPath.unshift("..");
    if (mustEndAbs && "" !== srcPath[0] && (!srcPath[0] || "/" !== srcPath[0].charAt(0))) srcPath.unshift("");
    if (hasTrailingSlash && "/" !== srcPath.join("/").substr(-1)) srcPath.push("");
    var isAbsolute = "" === srcPath[0] || srcPath[0] && "/" === srcPath[0].charAt(0);
    if (psychotic) {
      result.hostname = result.host = isAbsolute ? "" : srcPath.length ? srcPath.shift() : "";
      authInHost = result.host && result.host.indexOf("@") > 0 ? result.host.split("@") : false;
      if (authInHost) {
        result.auth = authInHost.shift();
        result.host = result.hostname = authInHost.shift();
      }
    }
    mustEndAbs = mustEndAbs || result.host && srcPath.length;
    if (mustEndAbs && !isAbsolute) srcPath.unshift("");
    if (!srcPath.length) {
      result.pathname = null;
      result.path = null;
    } else result.pathname = srcPath.join("/");
    if (!util.isNull(result.pathname) || !util.isNull(result.search)) result.path = (result.pathname ? result.pathname : "") + (result.search ? result.search : "");
    result.auth = relative.auth || result.auth;
    result.slashes = result.slashes || relative.slashes;
    result.href = result.format();
    return result;
  };
  Url.prototype.parseHost = function() {
    var host = this.host;
    var port = portPattern.exec(host);
    if (port) {
      port = port[0];
      if (":" !== port) this.port = port.substr(1);
      host = host.substr(0, host.length - port.length);
    }
    if (host) this.hostname = host;
  };
}, function(module, exports, __webpack_require__) {
  (function(module, global) {
    var __WEBPACK_AMD_DEFINE_RESULT__;
    function _typeof(obj) {
      "@babel/helpers - typeof";
      if ("function" === typeof Symbol && "symbol" === typeof Symbol.iterator) _typeof = function _typeof(obj) {
        return typeof obj;
      }; else _typeof = function _typeof(obj) {
        return obj && "function" === typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
      };
      return _typeof(obj);
    }
    (function(root) {
      var freeExports = "object" == (false ? void 0 : _typeof(exports)) && exports && !exports.nodeType && exports;
      var freeModule = "object" == (false ? void 0 : _typeof(module)) && module && !module.nodeType && module;
      var freeGlobal = "object" == ("undefined" === typeof global ? "undefined" : _typeof(global)) && global;
      if (freeGlobal.global === freeGlobal || freeGlobal.window === freeGlobal || freeGlobal.self === freeGlobal) root = freeGlobal;
      var punycode, key, maxInt = 2147483647, base = 36, tMin = 1, tMax = 26, skew = 38, damp = 700, initialBias = 72, initialN = 128, delimiter = "-", regexPunycode = /^xn--/, regexNonASCII = /[^\x20-\x7E]/, regexSeparators = /[\x2E\u3002\uFF0E\uFF61]/g, errors = {
        overflow: "Overflow: input needs wider integers to process",
        "not-basic": "Illegal input >= 0x80 (not a basic code point)",
        "invalid-input": "Invalid input"
      }, baseMinusTMin = base - tMin, floor = Math.floor, stringFromCharCode = String.fromCharCode;
      function error(type) {
        throw new RangeError(errors[type]);
      }
      function map(array, fn) {
        var length = array.length;
        var result = [];
        while (length--) result[length] = fn(array[length]);
        return result;
      }
      function mapDomain(string, fn) {
        var parts = string.split("@");
        var result = "";
        if (parts.length > 1) {
          result = parts[0] + "@";
          string = parts[1];
        }
        string = string.replace(regexSeparators, ".");
        var labels = string.split(".");
        var encoded = map(labels, fn).join(".");
        return result + encoded;
      }
      function ucs2decode(string) {
        var value, extra, output = [], counter = 0, length = string.length;
        while (counter < length) {
          value = string.charCodeAt(counter++);
          if (value >= 55296 && value <= 56319 && counter < length) {
            extra = string.charCodeAt(counter++);
            if (56320 == (64512 & extra)) output.push(((1023 & value) << 10) + (1023 & extra) + 65536); else {
              output.push(value);
              counter--;
            }
          } else output.push(value);
        }
        return output;
      }
      function ucs2encode(array) {
        return map(array, (function(value) {
          var output = "";
          if (value > 65535) {
            value -= 65536;
            output += stringFromCharCode(value >>> 10 & 1023 | 55296);
            value = 56320 | 1023 & value;
          }
          output += stringFromCharCode(value);
          return output;
        })).join("");
      }
      function basicToDigit(codePoint) {
        if (codePoint - 48 < 10) return codePoint - 22;
        if (codePoint - 65 < 26) return codePoint - 65;
        if (codePoint - 97 < 26) return codePoint - 97;
        return base;
      }
      function digitToBasic(digit, flag) {
        return digit + 22 + 75 * (digit < 26) - ((0 != flag) << 5);
      }
      function adapt(delta, numPoints, firstTime) {
        var k = 0;
        delta = firstTime ? floor(delta / damp) : delta >> 1;
        delta += floor(delta / numPoints);
        for (;delta > baseMinusTMin * tMax >> 1; k += base) delta = floor(delta / baseMinusTMin);
        return floor(k + (baseMinusTMin + 1) * delta / (delta + skew));
      }
      function decode(input) {
        var out, basic, j, index, oldi, w, k, digit, t, baseMinusT, output = [], inputLength = input.length, i = 0, n = initialN, bias = initialBias;
        basic = input.lastIndexOf(delimiter);
        if (basic < 0) basic = 0;
        for (j = 0; j < basic; ++j) {
          if (input.charCodeAt(j) >= 128) error("not-basic");
          output.push(input.charCodeAt(j));
        }
        for (index = basic > 0 ? basic + 1 : 0; index < inputLength; ) {
          for (oldi = i, w = 1, k = base; ;k += base) {
            if (index >= inputLength) error("invalid-input");
            digit = basicToDigit(input.charCodeAt(index++));
            if (digit >= base || digit > floor((maxInt - i) / w)) error("overflow");
            i += digit * w;
            t = k <= bias ? tMin : k >= bias + tMax ? tMax : k - bias;
            if (digit < t) break;
            baseMinusT = base - t;
            if (w > floor(maxInt / baseMinusT)) error("overflow");
            w *= baseMinusT;
          }
          out = output.length + 1;
          bias = adapt(i - oldi, out, 0 == oldi);
          if (floor(i / out) > maxInt - n) error("overflow");
          n += floor(i / out);
          i %= out;
          output.splice(i++, 0, n);
        }
        return ucs2encode(output);
      }
      function encode(input) {
        var n, delta, handledCPCount, basicLength, bias, j, m, q, k, t, currentValue, inputLength, handledCPCountPlusOne, baseMinusT, qMinusT, output = [];
        input = ucs2decode(input);
        inputLength = input.length;
        n = initialN;
        delta = 0;
        bias = initialBias;
        for (j = 0; j < inputLength; ++j) {
          currentValue = input[j];
          if (currentValue < 128) output.push(stringFromCharCode(currentValue));
        }
        handledCPCount = basicLength = output.length;
        if (basicLength) output.push(delimiter);
        while (handledCPCount < inputLength) {
          for (m = maxInt, j = 0; j < inputLength; ++j) {
            currentValue = input[j];
            if (currentValue >= n && currentValue < m) m = currentValue;
          }
          handledCPCountPlusOne = handledCPCount + 1;
          if (m - n > floor((maxInt - delta) / handledCPCountPlusOne)) error("overflow");
          delta += (m - n) * handledCPCountPlusOne;
          n = m;
          for (j = 0; j < inputLength; ++j) {
            currentValue = input[j];
            if (currentValue < n && ++delta > maxInt) error("overflow");
            if (currentValue == n) {
              for (q = delta, k = base; ;k += base) {
                t = k <= bias ? tMin : k >= bias + tMax ? tMax : k - bias;
                if (q < t) break;
                qMinusT = q - t;
                baseMinusT = base - t;
                output.push(stringFromCharCode(digitToBasic(t + qMinusT % baseMinusT, 0)));
                q = floor(qMinusT / baseMinusT);
              }
              output.push(stringFromCharCode(digitToBasic(q, 0)));
              bias = adapt(delta, handledCPCountPlusOne, handledCPCount == basicLength);
              delta = 0;
              ++handledCPCount;
            }
          }
          ++delta;
          ++n;
        }
        return output.join("");
      }
      function toUnicode(input) {
        return mapDomain(input, (function(string) {
          return regexPunycode.test(string) ? decode(string.slice(4).toLowerCase()) : string;
        }));
      }
      function toASCII(input) {
        return mapDomain(input, (function(string) {
          return regexNonASCII.test(string) ? "xn--" + encode(string) : string;
        }));
      }
      punycode = {
        version: "1.4.1",
        ucs2: {
          decode: ucs2decode,
          encode: ucs2encode
        },
        decode: decode,
        encode: encode,
        toASCII: toASCII,
        toUnicode: toUnicode
      };
      if (true && "object" == _typeof(__webpack_require__(6)) && __webpack_require__(6)) !(__WEBPACK_AMD_DEFINE_RESULT__ = function() {
        return punycode;
      }.call(exports, __webpack_require__, exports, module), void 0 !== __WEBPACK_AMD_DEFINE_RESULT__ && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__)); else if (freeExports && freeModule) if (module.exports == freeExports) freeModule.exports = punycode; else for (key in punycode) punycode.hasOwnProperty(key) && (freeExports[key] = punycode[key]); else root.punycode = punycode;
    })(this);
  }).call(this, __webpack_require__(5)(module), __webpack_require__(12));
}, function(module, exports) {
  function _typeof(obj) {
    "@babel/helpers - typeof";
    if ("function" === typeof Symbol && "symbol" === typeof Symbol.iterator) _typeof = function _typeof(obj) {
      return typeof obj;
    }; else _typeof = function _typeof(obj) {
      return obj && "function" === typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
    };
    return _typeof(obj);
  }
  var g;
  g = function() {
    return this;
  }();
  try {
    g = g || new Function("return this")();
  } catch (e) {
    if ("object" === ("undefined" === typeof window ? "undefined" : _typeof(window))) g = window;
  }
  module.exports = g;
}, function(module, exports, __webpack_require__) {
  "use strict";
  function _typeof(obj) {
    "@babel/helpers - typeof";
    if ("function" === typeof Symbol && "symbol" === typeof Symbol.iterator) _typeof = function _typeof(obj) {
      return typeof obj;
    }; else _typeof = function _typeof(obj) {
      return obj && "function" === typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
    };
    return _typeof(obj);
  }
  module.exports = {
    isString: function isString(arg) {
      return "string" === typeof arg;
    },
    isObject: function isObject(arg) {
      return "object" === _typeof(arg) && null !== arg;
    },
    isNull: function isNull(arg) {
      return null === arg;
    },
    isNullOrUndefined: function isNullOrUndefined(arg) {
      return null == arg;
    }
  };
}, function(module, exports, __webpack_require__) {
  "use strict";
  exports.decode = exports.parse = __webpack_require__(15);
  exports.encode = exports.stringify = __webpack_require__(16);
}, function(module, exports, __webpack_require__) {
  "use strict";
  function hasOwnProperty(obj, prop) {
    return Object.prototype.hasOwnProperty.call(obj, prop);
  }
  module.exports = function(qs, sep, eq, options) {
    sep = sep || "&";
    eq = eq || "=";
    var obj = {};
    if ("string" !== typeof qs || 0 === qs.length) return obj;
    var regexp = /\+/g;
    qs = qs.split(sep);
    var maxKeys = 1e3;
    if (options && "number" === typeof options.maxKeys) maxKeys = options.maxKeys;
    var len = qs.length;
    if (maxKeys > 0 && len > maxKeys) len = maxKeys;
    for (var i = 0; i < len; ++i) {
      var kstr, vstr, k, v, x = qs[i].replace(regexp, "%20"), idx = x.indexOf(eq);
      if (idx >= 0) {
        kstr = x.substr(0, idx);
        vstr = x.substr(idx + 1);
      } else {
        kstr = x;
        vstr = "";
      }
      k = decodeURIComponent(kstr);
      v = decodeURIComponent(vstr);
      if (!hasOwnProperty(obj, k)) obj[k] = v; else if (isArray(obj[k])) obj[k].push(v); else obj[k] = [ obj[k], v ];
    }
    return obj;
  };
  var isArray = Array.isArray || function(xs) {
    return "[object Array]" === Object.prototype.toString.call(xs);
  };
}, function(module, exports, __webpack_require__) {
  "use strict";
  function _typeof(obj) {
    "@babel/helpers - typeof";
    if ("function" === typeof Symbol && "symbol" === typeof Symbol.iterator) _typeof = function _typeof(obj) {
      return typeof obj;
    }; else _typeof = function _typeof(obj) {
      return obj && "function" === typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
    };
    return _typeof(obj);
  }
  var stringifyPrimitive = function stringifyPrimitive(v) {
    switch (_typeof(v)) {
     case "string":
      return v;

     case "boolean":
      return v ? "true" : "false";

     case "number":
      return isFinite(v) ? v : "";

     default:
      return "";
    }
  };
  module.exports = function(obj, sep, eq, name) {
    sep = sep || "&";
    eq = eq || "=";
    if (null === obj) obj = void 0;
    if ("object" === _typeof(obj)) return map(objectKeys(obj), (function(k) {
      var ks = encodeURIComponent(stringifyPrimitive(k)) + eq;
      if (isArray(obj[k])) return map(obj[k], (function(v) {
        return ks + encodeURIComponent(stringifyPrimitive(v));
      })).join(sep); else return ks + encodeURIComponent(stringifyPrimitive(obj[k]));
    })).join(sep);
    if (!name) return "";
    return encodeURIComponent(stringifyPrimitive(name)) + eq + encodeURIComponent(stringifyPrimitive(obj));
  };
  var isArray = Array.isArray || function(xs) {
    return "[object Array]" === Object.prototype.toString.call(xs);
  };
  function map(xs, f) {
    if (xs.map) return xs.map(f);
    var res = [];
    for (var i = 0; i < xs.length; i++) res.push(f(xs[i], i));
    return res;
  }
  var objectKeys = Object.keys || function(obj) {
    var res = [];
    for (var key in obj) if (Object.prototype.hasOwnProperty.call(obj, key)) res.push(key);
    return res;
  };
}, function(module, exports, __webpack_require__) {
  "use strict";
  var url = __webpack_require__(10);
  var util = __webpack_require__(21);
  var isUrl = __webpack_require__(4);
  module.exports = function(repo_url) {
    var obj = {};
    if (!repo_url) return null;
    var shorthand = repo_url.match(/^([\w-_]+)\/([\w-_\.]+)#?([\w-_\.]+)?$/);
    var mediumhand = repo_url.match(/^bitbucket:([\w-_]+)\/([\w-_\.]+)#?([\w-_\.]+)?$/);
    var antiquated = repo_url.match(/^git@[\w-_\.]+:([\w-_]+)\/([\w-_\.]+)$/);
    if (shorthand) {
      obj.user = shorthand[1];
      obj.repo = shorthand[2];
      obj.branch = shorthand[3] || "master";
    } else if (mediumhand) {
      obj.user = mediumhand[1];
      obj.repo = mediumhand[2];
      obj.branch = mediumhand[3] || "master";
    } else if (antiquated) {
      obj.user = antiquated[1];
      obj.repo = antiquated[2].replace(/\.git$/i, "");
      obj.branch = "master";
    } else {
      if (!isUrl(repo_url)) return null;
      var parsedURL = url.parse(repo_url);
      if ("bitbucket.org" != parsedURL.hostname) return null;
      var parts = parsedURL.pathname.match(/^\/([\w-_]+)\/([\w-_\.]+)/);
      if (!parts) return null;
      obj.user = parts[1];
      obj.repo = parts[2].replace(/\.git$/i, "");
      obj.branch = "master";
    }
    obj.tarball_url = util.format("https://bitbucket.org/%s/%s/get/%s.tar.gz", obj.user, obj.repo, obj.branch);
    obj.api_url = util.format("https://api.bitbucket.org/2.0/repositories/%s/%s", obj.user, obj.repo);
    if ("master" === obj.branch) {
      obj.https_url = util.format("https://bitbucket.org/%s/%s", obj.user, obj.repo);
      obj.travis_url = util.format("https://travis-ci.org/%s/%s", obj.user, obj.repo);
    } else {
      obj.https_url = util.format("https://bitbucket.org/%s/%s/branch/%s", obj.user, obj.repo, obj.branch);
      obj.travis_url = util.format("https://travis-ci.org/%s/%s?branch=%s", obj.user, obj.repo, obj.branch);
    }
    return obj;
  };
}, , , , function(module, exports, __webpack_require__) {
  (function(process) {
    function _typeof(obj) {
      "@babel/helpers - typeof";
      if ("function" === typeof Symbol && "symbol" === typeof Symbol.iterator) _typeof = function _typeof(obj) {
        return typeof obj;
      }; else _typeof = function _typeof(obj) {
        return obj && "function" === typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
      };
      return _typeof(obj);
    }
    var getOwnPropertyDescriptors = Object.getOwnPropertyDescriptors || function getOwnPropertyDescriptors(obj) {
      var keys = Object.keys(obj);
      var descriptors = {};
      for (var i = 0; i < keys.length; i++) descriptors[keys[i]] = Object.getOwnPropertyDescriptor(obj, keys[i]);
      return descriptors;
    };
    var formatRegExp = /%[sdj%]/g;
    exports.format = function(f) {
      if (!isString(f)) {
        var objects = [];
        for (var i = 0; i < arguments.length; i++) objects.push(inspect(arguments[i]));
        return objects.join(" ");
      }
      i = 1;
      var args = arguments;
      var len = args.length;
      var str = String(f).replace(formatRegExp, (function(x) {
        if ("%%" === x) return "%";
        if (i >= len) return x;
        switch (x) {
         case "%s":
          return String(args[i++]);

         case "%d":
          return Number(args[i++]);

         case "%j":
          try {
            return JSON.stringify(args[i++]);
          } catch (_) {
            return "[Circular]";
          }

         default:
          return x;
        }
      }));
      for (var x = args[i]; i < len; x = args[++i]) if (isNull(x) || !isObject(x)) str += " " + x; else str += " " + inspect(x);
      return str;
    };
    exports.deprecate = function(fn, msg) {
      if ("undefined" !== typeof process && true === process.noDeprecation) return fn;
      if ("undefined" === typeof process) return function() {
        return exports.deprecate(fn, msg).apply(this, arguments);
      };
      var warned = false;
      function deprecated() {
        if (!warned) {
          if (process.throwDeprecation) throw new Error(msg); else if (process.traceDeprecation) console.trace(msg); else console.error(msg);
          warned = true;
        }
        return fn.apply(this, arguments);
      }
      return deprecated;
    };
    var debugs = {};
    var debugEnviron;
    exports.debuglog = function(set) {
      if (isUndefined(debugEnviron)) debugEnviron = process.env.NODE_DEBUG || "";
      set = set.toUpperCase();
      if (!debugs[set]) if (new RegExp("\\b" + set + "\\b", "i").test(debugEnviron)) {
        var pid = process.pid;
        debugs[set] = function() {
          var msg = exports.format.apply(exports, arguments);
          console.error("%s %d: %s", set, pid, msg);
        };
      } else debugs[set] = function() {};
      return debugs[set];
    };
    function inspect(obj, opts) {
      var ctx = {
        seen: [],
        stylize: stylizeNoColor
      };
      if (arguments.length >= 3) ctx.depth = arguments[2];
      if (arguments.length >= 4) ctx.colors = arguments[3];
      if (isBoolean(opts)) ctx.showHidden = opts; else if (opts) exports._extend(ctx, opts);
      if (isUndefined(ctx.showHidden)) ctx.showHidden = false;
      if (isUndefined(ctx.depth)) ctx.depth = 2;
      if (isUndefined(ctx.colors)) ctx.colors = false;
      if (isUndefined(ctx.customInspect)) ctx.customInspect = true;
      if (ctx.colors) ctx.stylize = stylizeWithColor;
      return formatValue(ctx, obj, ctx.depth);
    }
    exports.inspect = inspect;
    inspect.colors = {
      bold: [ 1, 22 ],
      italic: [ 3, 23 ],
      underline: [ 4, 24 ],
      inverse: [ 7, 27 ],
      white: [ 37, 39 ],
      grey: [ 90, 39 ],
      black: [ 30, 39 ],
      blue: [ 34, 39 ],
      cyan: [ 36, 39 ],
      green: [ 32, 39 ],
      magenta: [ 35, 39 ],
      red: [ 31, 39 ],
      yellow: [ 33, 39 ]
    };
    inspect.styles = {
      special: "cyan",
      number: "yellow",
      boolean: "yellow",
      undefined: "grey",
      null: "bold",
      string: "green",
      date: "magenta",
      regexp: "red"
    };
    function stylizeWithColor(str, styleType) {
      var style = inspect.styles[styleType];
      if (style) return "[" + inspect.colors[style][0] + "m" + str + "[" + inspect.colors[style][1] + "m"; else return str;
    }
    function stylizeNoColor(str, styleType) {
      return str;
    }
    function arrayToHash(array) {
      var hash = {};
      array.forEach((function(val, idx) {
        hash[val] = true;
      }));
      return hash;
    }
    function formatValue(ctx, value, recurseTimes) {
      if (ctx.customInspect && value && isFunction(value.inspect) && value.inspect !== exports.inspect && !(value.constructor && value.constructor.prototype === value)) {
        var ret = value.inspect(recurseTimes, ctx);
        if (!isString(ret)) ret = formatValue(ctx, ret, recurseTimes);
        return ret;
      }
      var primitive = formatPrimitive(ctx, value);
      if (primitive) return primitive;
      var keys = Object.keys(value);
      var visibleKeys = arrayToHash(keys);
      if (ctx.showHidden) keys = Object.getOwnPropertyNames(value);
      if (isError(value) && (keys.indexOf("message") >= 0 || keys.indexOf("description") >= 0)) return formatError(value);
      if (0 === keys.length) {
        if (isFunction(value)) {
          var name = value.name ? ": " + value.name : "";
          return ctx.stylize("[Function" + name + "]", "special");
        }
        if (isRegExp(value)) return ctx.stylize(RegExp.prototype.toString.call(value), "regexp");
        if (isDate(value)) return ctx.stylize(Date.prototype.toString.call(value), "date");
        if (isError(value)) return formatError(value);
      }
      var base = "", array = false, braces = [ "{", "}" ];
      if (isArray(value)) {
        array = true;
        braces = [ "[", "]" ];
      }
      if (isFunction(value)) {
        var n = value.name ? ": " + value.name : "";
        base = " [Function" + n + "]";
      }
      if (isRegExp(value)) base = " " + RegExp.prototype.toString.call(value);
      if (isDate(value)) base = " " + Date.prototype.toUTCString.call(value);
      if (isError(value)) base = " " + formatError(value);
      if (0 === keys.length && (!array || 0 == value.length)) return braces[0] + base + braces[1];
      if (recurseTimes < 0) if (isRegExp(value)) return ctx.stylize(RegExp.prototype.toString.call(value), "regexp"); else return ctx.stylize("[Object]", "special");
      ctx.seen.push(value);
      var output;
      if (array) output = formatArray(ctx, value, recurseTimes, visibleKeys, keys); else output = keys.map((function(key) {
        return formatProperty(ctx, value, recurseTimes, visibleKeys, key, array);
      }));
      ctx.seen.pop();
      return reduceToSingleString(output, base, braces);
    }
    function formatPrimitive(ctx, value) {
      if (isUndefined(value)) return ctx.stylize("undefined", "undefined");
      if (isString(value)) {
        var simple = "'" + JSON.stringify(value).replace(/^"|"$/g, "").replace(/'/g, "\\'").replace(/\\"/g, '"') + "'";
        return ctx.stylize(simple, "string");
      }
      if (isNumber(value)) return ctx.stylize("" + value, "number");
      if (isBoolean(value)) return ctx.stylize("" + value, "boolean");
      if (isNull(value)) return ctx.stylize("null", "null");
    }
    function formatError(value) {
      return "[" + Error.prototype.toString.call(value) + "]";
    }
    function formatArray(ctx, value, recurseTimes, visibleKeys, keys) {
      var output = [];
      for (var i = 0, l = value.length; i < l; ++i) if (hasOwnProperty(value, String(i))) output.push(formatProperty(ctx, value, recurseTimes, visibleKeys, String(i), true)); else output.push("");
      keys.forEach((function(key) {
        if (!key.match(/^\d+$/)) output.push(formatProperty(ctx, value, recurseTimes, visibleKeys, key, true));
      }));
      return output;
    }
    function formatProperty(ctx, value, recurseTimes, visibleKeys, key, array) {
      var name, str, desc;
      desc = Object.getOwnPropertyDescriptor(value, key) || {
        value: value[key]
      };
      if (desc.get) if (desc.set) str = ctx.stylize("[Getter/Setter]", "special"); else str = ctx.stylize("[Getter]", "special"); else if (desc.set) str = ctx.stylize("[Setter]", "special");
      if (!hasOwnProperty(visibleKeys, key)) name = "[" + key + "]";
      if (!str) if (ctx.seen.indexOf(desc.value) < 0) {
        if (isNull(recurseTimes)) str = formatValue(ctx, desc.value, null); else str = formatValue(ctx, desc.value, recurseTimes - 1);
        if (str.indexOf("\n") > -1) if (array) str = str.split("\n").map((function(line) {
          return "  " + line;
        })).join("\n").substr(2); else str = "\n" + str.split("\n").map((function(line) {
          return "   " + line;
        })).join("\n");
      } else str = ctx.stylize("[Circular]", "special");
      if (isUndefined(name)) {
        if (array && key.match(/^\d+$/)) return str;
        name = JSON.stringify("" + key);
        if (name.match(/^"([a-zA-Z_][a-zA-Z_0-9]*)"$/)) {
          name = name.substr(1, name.length - 2);
          name = ctx.stylize(name, "name");
        } else {
          name = name.replace(/'/g, "\\'").replace(/\\"/g, '"').replace(/(^"|"$)/g, "'");
          name = ctx.stylize(name, "string");
        }
      }
      return name + ": " + str;
    }
    function reduceToSingleString(output, base, braces) {
      var numLinesEst = 0;
      var length = output.reduce((function(prev, cur) {
        numLinesEst++;
        if (cur.indexOf("\n") >= 0) numLinesEst++;
        return prev + cur.replace(/\u001b\[\d\d?m/g, "").length + 1;
      }), 0);
      if (length > 60) return braces[0] + ("" === base ? "" : base + "\n ") + " " + output.join(",\n  ") + " " + braces[1];
      return braces[0] + base + " " + output.join(", ") + " " + braces[1];
    }
    function isArray(ar) {
      return Array.isArray(ar);
    }
    exports.isArray = isArray;
    function isBoolean(arg) {
      return "boolean" === typeof arg;
    }
    exports.isBoolean = isBoolean;
    function isNull(arg) {
      return null === arg;
    }
    exports.isNull = isNull;
    function isNullOrUndefined(arg) {
      return null == arg;
    }
    exports.isNullOrUndefined = isNullOrUndefined;
    function isNumber(arg) {
      return "number" === typeof arg;
    }
    exports.isNumber = isNumber;
    function isString(arg) {
      return "string" === typeof arg;
    }
    exports.isString = isString;
    function isSymbol(arg) {
      return "symbol" === _typeof(arg);
    }
    exports.isSymbol = isSymbol;
    function isUndefined(arg) {
      return void 0 === arg;
    }
    exports.isUndefined = isUndefined;
    function isRegExp(re) {
      return isObject(re) && "[object RegExp]" === objectToString(re);
    }
    exports.isRegExp = isRegExp;
    function isObject(arg) {
      return "object" === _typeof(arg) && null !== arg;
    }
    exports.isObject = isObject;
    function isDate(d) {
      return isObject(d) && "[object Date]" === objectToString(d);
    }
    exports.isDate = isDate;
    function isError(e) {
      return isObject(e) && ("[object Error]" === objectToString(e) || e instanceof Error);
    }
    exports.isError = isError;
    function isFunction(arg) {
      return "function" === typeof arg;
    }
    exports.isFunction = isFunction;
    function isPrimitive(arg) {
      return null === arg || "boolean" === typeof arg || "number" === typeof arg || "string" === typeof arg || "symbol" === _typeof(arg) || "undefined" === typeof arg;
    }
    exports.isPrimitive = isPrimitive;
    exports.isBuffer = __webpack_require__(23);
    function objectToString(o) {
      return Object.prototype.toString.call(o);
    }
    function pad(n) {
      return n < 10 ? "0" + n.toString(10) : n.toString(10);
    }
    var months = [ "Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec" ];
    function timestamp() {
      var d = new Date;
      var time = [ pad(d.getHours()), pad(d.getMinutes()), pad(d.getSeconds()) ].join(":");
      return [ d.getDate(), months[d.getMonth()], time ].join(" ");
    }
    exports.log = function() {
      console.log("%s - %s", timestamp(), exports.format.apply(exports, arguments));
    };
    exports.inherits = __webpack_require__(24);
    exports._extend = function(origin, add) {
      if (!add || !isObject(add)) return origin;
      var keys = Object.keys(add);
      var i = keys.length;
      while (i--) origin[keys[i]] = add[keys[i]];
      return origin;
    };
    function hasOwnProperty(obj, prop) {
      return Object.prototype.hasOwnProperty.call(obj, prop);
    }
    var kCustomPromisifiedSymbol = "undefined" !== typeof Symbol ? Symbol("util.promisify.custom") : void 0;
    exports.promisify = function promisify(original) {
      if ("function" !== typeof original) throw new TypeError('The "original" argument must be of type Function');
      if (kCustomPromisifiedSymbol && original[kCustomPromisifiedSymbol]) {
        var fn = original[kCustomPromisifiedSymbol];
        if ("function" !== typeof fn) throw new TypeError('The "util.promisify.custom" argument must be of type Function');
        Object.defineProperty(fn, kCustomPromisifiedSymbol, {
          value: fn,
          enumerable: false,
          writable: false,
          configurable: true
        });
        return fn;
      }
      function fn() {
        var promiseResolve, promiseReject;
        var promise = new Promise((function(resolve, reject) {
          promiseResolve = resolve;
          promiseReject = reject;
        }));
        var args = [];
        for (var i = 0; i < arguments.length; i++) args.push(arguments[i]);
        args.push((function(err, value) {
          if (err) promiseReject(err); else promiseResolve(value);
        }));
        try {
          original.apply(this, args);
        } catch (err) {
          promiseReject(err);
        }
        return promise;
      }
      Object.setPrototypeOf(fn, Object.getPrototypeOf(original));
      if (kCustomPromisifiedSymbol) Object.defineProperty(fn, kCustomPromisifiedSymbol, {
        value: fn,
        enumerable: false,
        writable: false,
        configurable: true
      });
      return Object.defineProperties(fn, getOwnPropertyDescriptors(original));
    };
    exports.promisify.custom = kCustomPromisifiedSymbol;
    function callbackifyOnRejected(reason, cb) {
      if (!reason) {
        var newReason = new Error("Promise was rejected with a falsy value");
        newReason.reason = reason;
        reason = newReason;
      }
      return cb(reason);
    }
    function callbackify(original) {
      if ("function" !== typeof original) throw new TypeError('The "original" argument must be of type Function');
      function callbackified() {
        var args = [];
        for (var i = 0; i < arguments.length; i++) args.push(arguments[i]);
        var maybeCb = args.pop();
        if ("function" !== typeof maybeCb) throw new TypeError("The last argument must be of type Function");
        var self = this;
        var cb = function cb() {
          return maybeCb.apply(self, arguments);
        };
        original.apply(this, args).then((function(ret) {
          process.nextTick(cb, null, ret);
        }), (function(rej) {
          process.nextTick(callbackifyOnRejected, rej, cb);
        }));
      }
      Object.setPrototypeOf(callbackified, Object.getPrototypeOf(original));
      Object.defineProperties(callbackified, getOwnPropertyDescriptors(original));
      return callbackified;
    }
    exports.callbackify = callbackify;
  }).call(this, __webpack_require__(22));
}, function(module, exports) {
  var process = module.exports = {};
  var cachedSetTimeout;
  var cachedClearTimeout;
  function defaultSetTimout() {
    throw new Error("setTimeout has not been defined");
  }
  function defaultClearTimeout() {
    throw new Error("clearTimeout has not been defined");
  }
  (function() {
    try {
      if ("function" === typeof setTimeout) cachedSetTimeout = setTimeout; else cachedSetTimeout = defaultSetTimout;
    } catch (e) {
      cachedSetTimeout = defaultSetTimout;
    }
    try {
      if ("function" === typeof clearTimeout) cachedClearTimeout = clearTimeout; else cachedClearTimeout = defaultClearTimeout;
    } catch (e) {
      cachedClearTimeout = defaultClearTimeout;
    }
  })();
  function runTimeout(fun) {
    if (cachedSetTimeout === setTimeout) return setTimeout(fun, 0);
    if ((cachedSetTimeout === defaultSetTimout || !cachedSetTimeout) && setTimeout) {
      cachedSetTimeout = setTimeout;
      return setTimeout(fun, 0);
    }
    try {
      return cachedSetTimeout(fun, 0);
    } catch (e) {
      try {
        return cachedSetTimeout.call(null, fun, 0);
      } catch (e) {
        return cachedSetTimeout.call(this, fun, 0);
      }
    }
  }
  function runClearTimeout(marker) {
    if (cachedClearTimeout === clearTimeout) return clearTimeout(marker);
    if ((cachedClearTimeout === defaultClearTimeout || !cachedClearTimeout) && clearTimeout) {
      cachedClearTimeout = clearTimeout;
      return clearTimeout(marker);
    }
    try {
      return cachedClearTimeout(marker);
    } catch (e) {
      try {
        return cachedClearTimeout.call(null, marker);
      } catch (e) {
        return cachedClearTimeout.call(this, marker);
      }
    }
  }
  var queue = [];
  var draining = false;
  var currentQueue;
  var queueIndex = -1;
  function cleanUpNextTick() {
    if (!draining || !currentQueue) return;
    draining = false;
    if (currentQueue.length) queue = currentQueue.concat(queue); else queueIndex = -1;
    if (queue.length) drainQueue();
  }
  function drainQueue() {
    if (draining) return;
    var timeout = runTimeout(cleanUpNextTick);
    draining = true;
    var len = queue.length;
    while (len) {
      currentQueue = queue;
      queue = [];
      while (++queueIndex < len) if (currentQueue) currentQueue[queueIndex].run();
      queueIndex = -1;
      len = queue.length;
    }
    currentQueue = null;
    draining = false;
    runClearTimeout(timeout);
  }
  process.nextTick = function(fun) {
    var args = new Array(arguments.length - 1);
    if (arguments.length > 1) for (var i = 1; i < arguments.length; i++) args[i - 1] = arguments[i];
    queue.push(new Item(fun, args));
    if (1 === queue.length && !draining) runTimeout(drainQueue);
  };
  function Item(fun, array) {
    this.fun = fun;
    this.array = array;
  }
  Item.prototype.run = function() {
    this.fun.apply(null, this.array);
  };
  process.title = "browser";
  process.browser = true;
  process.env = {};
  process.argv = [];
  process.version = "";
  process.versions = {};
  function noop() {}
  process.on = noop;
  process.addListener = noop;
  process.once = noop;
  process.off = noop;
  process.removeListener = noop;
  process.removeAllListeners = noop;
  process.emit = noop;
  process.prependListener = noop;
  process.prependOnceListener = noop;
  process.listeners = function(name) {
    return [];
  };
  process.binding = function(name) {
    throw new Error("process.binding is not supported");
  };
  process.cwd = function() {
    return "/";
  };
  process.chdir = function(dir) {
    throw new Error("process.chdir is not supported");
  };
  process.umask = function() {
    return 0;
  };
}, function(module, exports) {
  function _typeof(obj) {
    "@babel/helpers - typeof";
    if ("function" === typeof Symbol && "symbol" === typeof Symbol.iterator) _typeof = function _typeof(obj) {
      return typeof obj;
    }; else _typeof = function _typeof(obj) {
      return obj && "function" === typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
    };
    return _typeof(obj);
  }
  module.exports = function isBuffer(arg) {
    return arg && "object" === _typeof(arg) && "function" === typeof arg.copy && "function" === typeof arg.fill && "function" === typeof arg.readUInt8;
  };
}, function(module, exports) {
  if ("function" === typeof Object.create) module.exports = function inherits(ctor, superCtor) {
    ctor.super_ = superCtor;
    ctor.prototype = Object.create(superCtor.prototype, {
      constructor: {
        value: ctor,
        enumerable: false,
        writable: true,
        configurable: true
      }
    });
  }; else module.exports = function inherits(ctor, superCtor) {
    ctor.super_ = superCtor;
    var TempCtor = function TempCtor() {};
    TempCtor.prototype = superCtor.prototype;
    ctor.prototype = new TempCtor;
    ctor.prototype.constructor = ctor;
  };
}, , , , , , , function(module, __webpack_exports__, __webpack_require__) {
  "use strict";
  __webpack_require__.r(__webpack_exports__);
  __webpack_require__(3);
  var index_esm = __webpack_require__(2);
  var bitbucket_url_to_object = __webpack_require__(17);
  var bitbucket_url_to_object_default = __webpack_require__.n(bitbucket_url_to_object);
  var constants = __webpack_require__(0);
  var toolbox = __webpack_require__(1);
  function ownKeys(object, enumerableOnly) {
    var keys = Object.keys(object);
    if (Object.getOwnPropertySymbols) {
      var symbols = Object.getOwnPropertySymbols(object);
      if (enumerableOnly) symbols = symbols.filter((function(sym) {
        return Object.getOwnPropertyDescriptor(object, sym).enumerable;
      }));
      keys.push.apply(keys, symbols);
    }
    return keys;
  }
  function _objectSpread(target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = null != arguments[i] ? arguments[i] : {};
      if (i % 2) ownKeys(Object(source), true).forEach((function(key) {
        _defineProperty(target, key, source[key]);
      })); else if (Object.getOwnPropertyDescriptors) Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); else ownKeys(Object(source)).forEach((function(key) {
        Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
      }));
    }
    return target;
  }
  function _defineProperty(obj, key, value) {
    if (key in obj) Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    }); else obj[key] = value;
    return obj;
  }
  var CLONE_BUTTON_PAGE_HEADER_WRAPPER_SELECTOR = '[data-qa="page-header-wrapper"] > div > div > div > div > div > div > button:last-child';
  var CLONE_BUTTON_CONTENT_SELECTOR = '#root [data-testid="Content"] > div > div > div > div > div > div > div > div + div > div:last-child > button:last-child';
  var CLONE_BUTTON_NARROW_PAGE_SELECTOR = "#root > div > div > div > header + div + div + div > div > div > div > div + div > div + div > button:last-child";
  var CLONE_BUTTON_NARROW_PAGE_SIDE_PANEL_OPEN = "#root > div > div > div > div:last-child > div > div > div > div + div > div:last-child > button:last-child";
  var cloneButtonSelectors = [ CLONE_BUTTON_CONTENT_SELECTOR, CLONE_BUTTON_PAGE_HEADER_WRAPPER_SELECTOR, CLONE_BUTTON_NARROW_PAGE_SELECTOR, CLONE_BUTTON_NARROW_PAGE_SIDE_PANEL_OPEN ];
  var CLONE_BUTTON_JS_CSS_CLASS = "js-toolbox-clone-button";
  var OPEN_BUTTON_JS_CSS_CLASS = "js-toolbox-open-button";
  var bitbucket_fetchMetadata = function fetchMetadata() {
    return new Promise((function(resolve, reject) {
      var metadata = bitbucket_url_to_object_default()(window.location.toString());
      if (metadata) {
        metadata.api_url = metadata.api_url.replace("api.bitbucket.org/2.0", "bitbucket.org/!api/2.0");
        fetch("".concat(metadata.api_url, "?fields=links.clone")).then((function(response) {
          return response.json();
        })).then((function(parsedResponse) {
          var extendedMetadata = _objectSpread(_objectSpread({}, metadata), {}, {
            links: parsedResponse.links
          });
          resolve(extendedMetadata);
        }))["catch"](reject);
      } else reject();
    }));
  };
  var fetchLanguages = function fetchLanguages(bitbucketMetadata) {
    return new Promise((function(resolve, reject) {
      fetch("".concat(bitbucketMetadata.api_url, "?fields=language")).then((function(response) {
        return response.json();
      })).then((function(parsedResponse) {
        resolve(parsedResponse.language);
      }))["catch"]((function() {
        reject();
      }));
    }));
  };
  var bitbucket_selectTools = function selectTools(language) {
    return new Promise((function(resolve) {
      var normalizedLanguage = "html/css" === language ? "html" : language;
      var toolIds = normalizedLanguage && constants["h"][normalizedLanguage.toLowerCase()];
      var normalizedToolIds = toolIds && toolIds.length > 0 ? toolIds : constants["h"][constants["b"]];
      var tools = normalizedToolIds.sort().map((function(toolId) {
        return constants["i"][toolId];
      }));
      resolve(tools);
    }));
  };
  var fetchTools = function fetchTools(bitbucketMetadata) {
    return fetchLanguages(bitbucketMetadata).then(bitbucket_selectTools);
  };
  var bitbucket_onMessageHandler = null;
  var bitbucket_renderPageAction = function renderPageAction(bitbucketMetadata) {
    return new Promise((function(resolve) {
      if (bitbucket_onMessageHandler && chrome.runtime.onMessage.hasListener(bitbucket_onMessageHandler)) chrome.runtime.onMessage.removeListener(bitbucket_onMessageHandler);
      bitbucket_onMessageHandler = function onMessageHandler(message, sender, sendResponse) {
        switch (message.type) {
         case "get-tools":
          fetchTools(bitbucketMetadata).then(sendResponse);
          return true;

         case "perform-action":
          var toolboxAction = Object(toolbox["c"])(message.toolTag, message.cloneUrl);
          Object(toolbox["a"])(toolboxAction);
          break;
        }
        return;
      };
      chrome.runtime.onMessage.addListener(bitbucket_onMessageHandler);
      resolve();
    }));
  };
  var getCloneUrl = function getCloneUrl(links, which) {
    var link = links.clone.find((function(l) {
      return l.name === which;
    }));
    return link ? link.href : "";
  };
  var getHttpsCloneUrl = function getHttpsCloneUrl(links) {
    return getCloneUrl(links, "https");
  };
  var getSshCloneUrl = function getSshCloneUrl(links) {
    return getCloneUrl(links, "ssh");
  };
  var addStyleSheet = function addStyleSheet() {
    var sheetId = "jt-bitbucket-style";
    if (document.getElementById(sheetId)) return;
    var styleSheet = document.createElement("style");
    styleSheet.setAttribute("id", sheetId);
    styleSheet.innerHTML = "\n  .jt-button-group {\n    display: inline-block;\n    margin: 0 2px;\n  }\n  .jt-button {\n    margin: 0 2px;\n  }\n  .jt-button:hover {\n    background: rgba(9, 30, 66, 0.08);\n    cursor: pointer;\n  }\n  .jt-button img {\n    align-self: center;\n    width: 18px;\n    height: 18px;\n  }\n";
    document.head.appendChild(styleSheet);
  };
  var createButtonTooltip = function createButtonTooltip(button, text) {
    var tooltip = document.createElement("div");
    tooltip.setAttribute("style", "background-color:rgb(23,43,77); border-radius:3px;" + "box-sizing: border-box; color:#fff; display:none; font-size: 12px; line-height: 15.6px; max-width: 240px;" + "padding:2px 6px; position:absolute; transform:translate3d(calc(-100% - 8px),-130%,0);");
    tooltip.textContent = text;
    var TOOLTIP_TIMEOUT = 450;
    button.addEventListener("mouseenter", (function() {
      button.setAttribute("style", "cursor:pointer; background:rgba(9,30,66,0.08);");
      setTimeout((function() {
        tooltip.style.display = "block";
      }), TOOLTIP_TIMEOUT);
    }));
    button.addEventListener("mouseleave", (function() {
      button.removeAttribute("style");
      setTimeout((function() {
        tooltip.style.display = "none";
      }), TOOLTIP_TIMEOUT);
    }));
    return tooltip;
  };
  var cloneButtonsRendered = function cloneButtonsRendered() {
    return document.getElementsByClassName(CLONE_BUTTON_JS_CSS_CLASS).length > 0;
  };
  var bitbucket_addCloneButtonEventHandler = function addCloneButtonEventHandler(btn, bitbucketMetadata) {
    btn.addEventListener("click", (function(e) {
      e.preventDefault();
      var toolTag = e.currentTarget.dataset.toolTag;
      chrome.runtime.sendMessage({
        type: "get-protocol"
      }, (function(_ref) {
        var protocol = _ref.protocol;
        var cloneUrl = protocol === constants["a"].HTTPS ? getHttpsCloneUrl(bitbucketMetadata.links) : getSshCloneUrl(bitbucketMetadata.links);
        var action = Object(toolbox["c"])(toolTag, cloneUrl);
        Object(toolbox["a"])(action);
      }));
    }));
  };
  var createCloneButton = function createCloneButton(tool, cloneButton, bitbucketMetadata) {
    var button = document.createElement("a");
    button.setAttribute("class", "".concat(cloneButton.className, " jt-button ").concat(CLONE_BUTTON_JS_CSS_CLASS));
    button.setAttribute("href", "#");
    button.dataset.toolTag = tool.tag;
    var buttonIcon = document.createElement("img");
    buttonIcon.setAttribute("alt", tool.name);
    buttonIcon.setAttribute("src", tool.icon);
    button.appendChild(buttonIcon);
    bitbucket_addCloneButtonEventHandler(button, bitbucketMetadata);
    return button;
  };
  var removeCloneButtons = function removeCloneButtons() {
    var buttonGroup = document.querySelector(".jt-button-group");
    if (buttonGroup) buttonGroup.parentElement.removeChild(buttonGroup);
  };
  var renderCloneButtons = function renderCloneButtons(tools, bitbucketMetadata) {
    var cloneButton = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null;
    if (cloneButtonsRendered()) return;
    if (!cloneButton) cloneButton = document.querySelector(cloneButtonSelectors.join(", "));
    if (!cloneButton || !cloneButton.textContent.includes("Clone")) return;
    addStyleSheet();
    var buttonGroup = document.createElement("div");
    buttonGroup.setAttribute("class", "jt-button-group");
    tools.forEach((function(tool) {
      var btn = createCloneButton(tool, cloneButton, bitbucketMetadata);
      buttonGroup.appendChild(btn);
      var tooltip = createButtonTooltip(btn, "Clone in ".concat(tool.name));
      buttonGroup.appendChild(tooltip);
    }));
    cloneButton.insertAdjacentElement("beforebegin", buttonGroup);
  };
  var removeOpenButtons = function removeOpenButtons() {
    document.querySelectorAll(".".concat(OPEN_BUTTON_JS_CSS_CLASS)).forEach((function(b) {
      b.remove();
    }));
  };
  var bitbucket_addOpenButtonEventHandler = function addOpenButtonEventHandler(domElement, tool, bitbucketMetadata) {
    domElement.addEventListener("click", (function(e) {
      e.preventDefault();
      var filePathIndex = 5;
      var filePath = location.pathname.split("/").splice(filePathIndex).join("/");
      var lineNumber = location.hash.replace("#lines-", "");
      if ("" === lineNumber) lineNumber = null;
      Object(toolbox["a"])(Object(toolbox["b"])(tool.tag, bitbucketMetadata.repo, filePath, lineNumber));
    }));
  };
  var createOpenButton = function createOpenButton(tool, sampleButton, bitbucketMetadata) {
    var button = sampleButton.cloneNode(true);
    button.classList.add(OPEN_BUTTON_JS_CSS_CLASS);
    var actionButton = button.querySelector("button");
    actionButton.removeAttribute("disabled");
    var actionSpan = actionButton.querySelector("span > span");
    while (actionSpan.firstChild) actionSpan.removeChild(actionSpan.lastChild);
    var buttonIcon = document.createElement("img");
    buttonIcon.setAttribute("alt", tool.name);
    buttonIcon.setAttribute("src", tool.icon);
    buttonIcon.setAttribute("width", "16");
    buttonIcon.setAttribute("height", "16");
    buttonIcon.setAttribute("style", "vertical-align:text-bottom");
    actionSpan.appendChild(buttonIcon);
    bitbucket_addOpenButtonEventHandler(actionButton, tool, bitbucketMetadata);
    var tooltip = createButtonTooltip(actionButton, "Open this file in ".concat(tool.name));
    button.appendChild(tooltip);
    return button;
  };
  var openButtonsRendered = function openButtonsRendered() {
    return document.getElementsByClassName(OPEN_BUTTON_JS_CSS_CLASS).length > 0;
  };
  var renderOpenButtons = function renderOpenButtons(tools, bitbucketMetadata) {
    if (openButtonsRendered()) return;
    var actionAnchorElement = document.querySelector('[data-qa="bk-file__actions"] > [data-qa="bk-file__action-button"]');
    if (actionAnchorElement) tools.forEach((function(tool) {
      var action = createOpenButton(tool, actionAnchorElement, bitbucketMetadata);
      actionAnchorElement.insertAdjacentElement("beforebegin", action);
    }));
  };
  var bitbucket_startTrackingDOMChanges = function startTrackingDOMChanges() {
    var cloneButtonsObserver = Object(index_esm["a"])(cloneButtonSelectors.join(", "), {
      add: function add(el) {
        if (el.textContent.includes("Clone")) bitbucket_fetchMetadata().then((function(metadata) {
          fetchTools(metadata).then((function(tools) {
            renderCloneButtons(tools, metadata, el);
          }));
        }));
      },
      remove: function remove() {
        removeCloneButtons();
      }
    });
    var openButtonsObserver = Object(index_esm["a"])('[data-qa="bk-file__header"] > div > [data-qa="bk-file__actions"]', {
      add: function add() {
        bitbucket_fetchMetadata().then((function(metadata) {
          fetchTools(metadata).then((function(tools) {
            renderOpenButtons(tools, metadata);
          }));
        }));
      },
      remove: function remove() {
        removeOpenButtons();
      }
    });
    return [ cloneButtonsObserver, openButtonsObserver ];
  };
  var stopTrackingDOMChanges = function stopTrackingDOMChanges(observers) {
    if (observers) observers.forEach((function(o) {
      o.abort();
    }));
  };
  var enablePageAction = function enablePageAction(bitbucketMetadata) {
    chrome.runtime.sendMessage({
      type: "enable-page-action",
      project: bitbucketMetadata.repo,
      https: getHttpsCloneUrl(bitbucketMetadata.links),
      ssh: getSshCloneUrl(bitbucketMetadata.links)
    });
  };
  var disablePageAction = function disablePageAction() {
    chrome.runtime.sendMessage({
      type: "disable-page-action"
    });
  };
  var refreshPageAction = function refreshPageAction() {
    bitbucket_fetchMetadata().then((function(metadata) {
      bitbucket_renderPageAction(metadata).then((function() {
        enablePageAction(metadata);
      }));
    }))["catch"]((function() {
      disablePageAction();
    }));
  };
  var startTrackingClientNavigation = function startTrackingClientNavigation() {
    var titleObserver = new MutationObserver((function() {
      refreshPageAction();
    }));
    titleObserver.observe(document.querySelector("title"), {
      childList: true
    });
  };
  var toolboxify = function toolboxify() {
    refreshPageAction();
    startTrackingClientNavigation();
    chrome.runtime.sendMessage({
      type: "get-modify-pages"
    }, (function(data) {
      var DOMObservers = null;
      if (data.allow) DOMObservers = bitbucket_startTrackingDOMChanges();
      chrome.runtime.onMessage.addListener((function(message) {
        switch (message.type) {
         case "modify-pages-changed":
          if (message.newValue) DOMObservers = bitbucket_startTrackingDOMChanges(); else stopTrackingDOMChanges(DOMObservers);
          break;
        }
      }));
    }));
  };
  var bitbucket = toolboxify;
  if (!window.hasRun) {
    window.hasRun = true;
    bitbucket();
  }
} ]);