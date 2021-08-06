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
  return __webpack_require__(__webpack_require__.s = 30);
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
}, function(module, __webpack_exports__, __webpack_require__) {
  "use strict";
  __webpack_require__(3);
  var selector_observer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2);
  var github_url_to_object__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(8);
  var github_url_to_object__WEBPACK_IMPORTED_MODULE_2___default = __webpack_require__.n(github_url_to_object__WEBPACK_IMPORTED_MODULE_2__);
  var _constants__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(0);
  var _api_toolbox__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(1);
  function _toConsumableArray(arr) {
    return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread();
  }
  function _nonIterableSpread() {
    throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
  }
  function _unsupportedIterableToArray(o, minLen) {
    if (!o) return;
    if ("string" === typeof o) return _arrayLikeToArray(o, minLen);
    var n = Object.prototype.toString.call(o).slice(8, -1);
    if ("Object" === n && o.constructor) n = o.constructor.name;
    if ("Map" === n || "Set" === n) return Array.from(o);
    if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
  }
  function _iterableToArray(iter) {
    if ("undefined" !== typeof Symbol && Symbol.iterator in Object(iter)) return Array.from(iter);
  }
  function _arrayWithoutHoles(arr) {
    if (Array.isArray(arr)) return _arrayLikeToArray(arr);
  }
  function _arrayLikeToArray(arr, len) {
    if (null == len || len > arr.length) len = arr.length;
    for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i];
    return arr2;
  }
  var CLONE_BUTTON_GROUP_JS_CSS_CLASS = "js-toolbox-clone-button-group";
  var OPEN_BUTTON_JS_CSS_CLASS = "js-toolbox-open-button";
  var OPEN_MENU_ITEM_JS_CSS_CLASS = "js-toolbox-open-menu-item";
  var fetchMetadata = function fetchMetadata() {
    return new Promise((function(resolve, reject) {
      var metadata = github_url_to_object__WEBPACK_IMPORTED_MODULE_2___default()(window.location.toString(), {
        enterprise: true
      });
      if (metadata) resolve(metadata); else reject();
    }));
  };
  var checkResponseStatus = function checkResponseStatus(response) {
    return new Promise((function(resolve, reject) {
      if (response.status >= _constants__WEBPACK_IMPORTED_MODULE_3__["g"] && response.status <= _constants__WEBPACK_IMPORTED_MODULE_3__["f"]) resolve(response); else reject();
    }));
  };
  var parseResponse = function parseResponse(response) {
    return new Promise((function(resolve, reject) {
      response.json().then((function(result) {
        if (Object.keys(result).length > 0) resolve(result); else reject();
      }))["catch"]((function() {
        reject();
      }));
    }));
  };
  var convertBytesToPercents = function convertBytesToPercents(languages) {
    return new Promise((function(resolve) {
      var totalBytes = Object.values(languages).reduce((function(total, bytes) {
        return total + bytes;
      }), 0);
      Object.keys(languages).forEach((function(key) {
        var percentFloat = languages[key] / totalBytes * _constants__WEBPACK_IMPORTED_MODULE_3__["d"];
        var percentString = percentFloat.toFixed(_constants__WEBPACK_IMPORTED_MODULE_3__["e"]);
        languages[key] = parseFloat(percentString);
      }));
      resolve(languages);
    }));
  };
  var extractLanguagesFromPage = function extractLanguagesFromPage(githubMetadata) {
    return new Promise((function(resolve) {
      fetch(githubMetadata.clone_url).then((function(response) {
        return response.text();
      })).then((function(htmlString) {
        var parser = new DOMParser;
        var htmlDocument = parser.parseFromString(htmlString, "text/html");
        var languageElements = htmlDocument.querySelectorAll(".repository-lang-stats-numbers .lang");
        if (0 === languageElements.length) {
          var newLanguageElements = htmlDocument.querySelectorAll('[data-ga-click="Repository, language stats search click, location:repo overview"]');
          if (newLanguageElements.length > 0) {
            var allLanguages = Array.from(newLanguageElements).reduce((function(acc, el) {
              var langEl = el.querySelector("span");
              var percentEl = langEl.nextElementSibling;
              acc[langEl.textContent] = percentEl ? parseFloat(percentEl.textContent) : _constants__WEBPACK_IMPORTED_MODULE_3__["j"] + 1;
              return acc;
            }), {});
            if (Object.keys(allLanguages).length > 0) resolve(allLanguages); else resolve(_constants__WEBPACK_IMPORTED_MODULE_3__["c"]);
          } else resolve(_constants__WEBPACK_IMPORTED_MODULE_3__["c"]);
        } else {
          var _allLanguages = Array.from(languageElements).reduce((function(acc, el) {
            var percentEl = el.nextElementSibling;
            acc[el.textContent] = percentEl ? parseFloat(percentEl.textContent) : _constants__WEBPACK_IMPORTED_MODULE_3__["j"] + 1;
            return acc;
          }), {});
          resolve(_allLanguages);
        }
      }))["catch"]((function() {
        resolve(_constants__WEBPACK_IMPORTED_MODULE_3__["c"]);
      }));
    }));
  };
  var fetchLanguages = function fetchLanguages(githubMetadata) {
    return new Promise((function(resolve) {
      fetch("".concat(githubMetadata.api_url, "/languages")).then(checkResponseStatus).then(parseResponse).then(convertBytesToPercents).then(resolve)["catch"]((function() {
        extractLanguagesFromPage(githubMetadata).then(resolve);
      }));
    }));
  };
  var selectTools = function selectTools(languages) {
    return new Promise((function(resolve) {
      var overallPoints = Object.values(languages).reduce((function(overall, current) {
        return overall + current;
      }), 0);
      var filterLang = function filterLang(language) {
        return _constants__WEBPACK_IMPORTED_MODULE_3__["h"][language.toLowerCase()] && languages[language] / overallPoints > _constants__WEBPACK_IMPORTED_MODULE_3__["j"];
      };
      var selectedToolIds = Object.keys(languages).filter(filterLang).reduce((function(acc, key) {
        acc.push.apply(acc, _toConsumableArray(_constants__WEBPACK_IMPORTED_MODULE_3__["h"][key.toLowerCase()]));
        return acc;
      }), []);
      var normalizedToolIds = selectedToolIds.length > 0 ? Array.from(new Set(selectedToolIds)) : _constants__WEBPACK_IMPORTED_MODULE_3__["h"][_constants__WEBPACK_IMPORTED_MODULE_3__["b"]];
      var tools = normalizedToolIds.sort().map((function(toolId) {
        return _constants__WEBPACK_IMPORTED_MODULE_3__["i"][toolId];
      }));
      resolve(tools);
    }));
  };
  var fetchTools = function fetchTools(githubMetadata) {
    return fetchLanguages(githubMetadata).then(selectTools);
  };
  var getHttpsCloneUrl = function getHttpsCloneUrl(githubMetadata) {
    return "".concat(githubMetadata.clone_url, ".git");
  };
  var getSshCloneUrl = function getSshCloneUrl(githubMetadata) {
    return "git@".concat(githubMetadata.host, ":").concat(githubMetadata.user, "/").concat(githubMetadata.repo, ".git");
  };
  var handleMessage = null;
  var renderPageAction = function renderPageAction(githubMetadata) {
    return new Promise((function(resolve) {
      if (handleMessage && chrome.runtime.onMessage.hasListener(handleMessage)) chrome.runtime.onMessage.removeListener(handleMessage);
      handleMessage = function handleMessage(message, sender, sendResponse) {
        switch (message.type) {
         case "get-tools":
          fetchTools(githubMetadata).then(sendResponse);
          return true;

         case "perform-action":
          var toolboxAction = Object(_api_toolbox__WEBPACK_IMPORTED_MODULE_4__["c"])(message.toolTag, message.cloneUrl);
          Object(_api_toolbox__WEBPACK_IMPORTED_MODULE_4__["a"])(toolboxAction);
          break;
        }
        return;
      };
      chrome.runtime.onMessage.addListener(handleMessage);
      resolve();
    }));
  };
  var removeCloneButtons = function removeCloneButtons() {
    var cloneButtonGroup = document.querySelector(".".concat(CLONE_BUTTON_GROUP_JS_CSS_CLASS));
    if (cloneButtonGroup) cloneButtonGroup.parentElement.removeChild(cloneButtonGroup);
  };
  var addCloneButtonEventHandler = function addCloneButtonEventHandler(btn, githubMetadata) {
    btn.addEventListener("click", (function(e) {
      e.preventDefault();
      var toolTag = e.currentTarget.dataset.toolTag;
      chrome.runtime.sendMessage({
        type: "get-protocol"
      }, (function(_ref) {
        var protocol = _ref.protocol;
        var cloneUrl = protocol === _constants__WEBPACK_IMPORTED_MODULE_3__["a"].HTTPS ? getHttpsCloneUrl(githubMetadata) : getSshCloneUrl(githubMetadata);
        var action = Object(_api_toolbox__WEBPACK_IMPORTED_MODULE_4__["c"])(toolTag, cloneUrl);
        Object(_api_toolbox__WEBPACK_IMPORTED_MODULE_4__["a"])(action);
      }));
    }));
  };
  var createCloneButton = function createCloneButton(tool, githubMetadata) {
    var small = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : true;
    var button = document.createElement("a");
    button.setAttribute("class", "btn ".concat(small ? "btn-sm" : "", " tooltipped tooltipped-s tooltipped-multiline BtnGroup-item d-flex"));
    button.setAttribute("href", "#");
    button.setAttribute("aria-label", "Clone in ".concat(tool.name));
    button.setAttribute("style", "align-items:center");
    button.dataset.toolTag = tool.tag;
    var buttonIcon = document.createElement("img");
    buttonIcon.setAttribute("alt", tool.name);
    buttonIcon.setAttribute("src", tool.icon);
    buttonIcon.setAttribute("width", "16");
    buttonIcon.setAttribute("height", "16");
    buttonIcon.setAttribute("style", "vertical-align:text-top");
    button.appendChild(buttonIcon);
    addCloneButtonEventHandler(button, githubMetadata);
    return button;
  };
  var renderCloneButtons = function renderCloneButtons(tools, githubMetadata) {
    var getRepoController = document.querySelector(".BtnGroup + .d-flex > get-repo-controller");
    getRepoController = getRepoController ? getRepoController.parentElement : document.querySelector(".js-get-repo-select-menu");
    if (getRepoController) {
      var toolboxCloneButtonGroup = document.querySelector(".".concat(CLONE_BUTTON_GROUP_JS_CSS_CLASS));
      if (!toolboxCloneButtonGroup) {
        toolboxCloneButtonGroup = document.createElement("div");
        toolboxCloneButtonGroup.setAttribute("class", "BtnGroup ml-2 d-flex ".concat(CLONE_BUTTON_GROUP_JS_CSS_CLASS));
        tools.forEach((function(tool) {
          var btn = createCloneButton(tool, githubMetadata);
          toolboxCloneButtonGroup.appendChild(btn);
        }));
        getRepoController.insertAdjacentElement("beforebegin", toolboxCloneButtonGroup);
      }
    } else {
      getRepoController = document.querySelector("get-repo");
      if (getRepoController) {
        var _toolboxCloneButtonGroup = document.querySelector(".".concat(CLONE_BUTTON_GROUP_JS_CSS_CLASS));
        if (!_toolboxCloneButtonGroup) {
          _toolboxCloneButtonGroup = document.createElement("div");
          _toolboxCloneButtonGroup.setAttribute("class", "BtnGroup mr-2 d-flex ".concat(CLONE_BUTTON_GROUP_JS_CSS_CLASS));
          tools.forEach((function(tool) {
            var btn = createCloneButton(tool, githubMetadata, false);
            _toolboxCloneButtonGroup.appendChild(btn);
          }));
          getRepoController.insertAdjacentElement("beforebegin", _toolboxCloneButtonGroup);
        }
      }
    }
  };
  var addOpenButtonEventHandler = function addOpenButtonEventHandler(domElement, tool, githubMetadata) {
    domElement.addEventListener("click", (function(e) {
      e.preventDefault();
      var user = githubMetadata.user, repo = githubMetadata.repo, branch = githubMetadata.branch;
      var normalizedBranch = branch.split("/").shift();
      var filePath = location.pathname.replace("/".concat(user, "/").concat(repo, "/blob/").concat(normalizedBranch, "/"), "");
      var lineNumber = location.hash.replace("#L", "");
      if ("" === lineNumber) lineNumber = null;
      Object(_api_toolbox__WEBPACK_IMPORTED_MODULE_4__["a"])(Object(_api_toolbox__WEBPACK_IMPORTED_MODULE_4__["b"])(tool.tag, repo, filePath, lineNumber));
    }));
  };
  var removeOpenButtons = function removeOpenButtons() {
    var actions = document.querySelectorAll(".".concat(OPEN_BUTTON_JS_CSS_CLASS));
    actions.forEach((function(action) {
      action.parentElement.removeChild(action);
    }));
    var menuItems = document.querySelectorAll(".".concat(OPEN_MENU_ITEM_JS_CSS_CLASS));
    menuItems.forEach((function(item) {
      item.parentElement.removeChild(item);
    }));
  };
  var removePageButtons = function removePageButtons() {
    removeCloneButtons();
    removeOpenButtons();
  };
  var createOpenButton = function createOpenButton(tool, githubMetadata) {
    var action = document.createElement("a");
    action.setAttribute("class", "btn-octicon tooltipped tooltipped-nw ".concat(OPEN_BUTTON_JS_CSS_CLASS));
    action.setAttribute("aria-label", "Open this file in ".concat(tool.name));
    action.setAttribute("href", "#");
    var actionIcon = document.createElement("img");
    actionIcon.setAttribute("alt", tool.name);
    actionIcon.setAttribute("src", tool.icon);
    actionIcon.setAttribute("width", "16");
    actionIcon.setAttribute("height", "16");
    action.appendChild(actionIcon);
    addOpenButtonEventHandler(action, tool, githubMetadata);
    return action;
  };
  var createOpenMenuItem = function createOpenMenuItem(tool, first, githubMetadata) {
    var menuItem = document.createElement("a");
    menuItem.setAttribute("class", "dropdown-item");
    menuItem.setAttribute("role", "menu-item");
    menuItem.setAttribute("href", "#");
    if (first) menuItem.style.borderTop = "1px solid #eaecef";
    menuItem.textContent = "Open in ".concat(tool.name);
    addOpenButtonEventHandler(menuItem, tool, githubMetadata);
    menuItem.addEventListener("click", (function() {
      var blobToolbar = document.querySelector(".BlobToolbar");
      if (blobToolbar) blobToolbar.removeAttribute("open");
    }));
    var menuItemContainer = document.createElement("li");
    menuItemContainer.setAttribute("class", OPEN_MENU_ITEM_JS_CSS_CLASS);
    menuItemContainer.appendChild(menuItem);
    return menuItemContainer;
  };
  var renderOpenButtons = function renderOpenButtons(tools, githubMetadata) {
    var actionAnchorElement = document.querySelector(".repository-content .Box-header .BtnGroup + div");
    var actionAnchorFragment = document.createDocumentFragment();
    var blobToolbarDropdown = document.querySelector(".BlobToolbar-dropdown");
    tools.forEach((function(tool, toolIndex) {
      if (actionAnchorElement) {
        var action = createOpenButton(tool, githubMetadata);
        actionAnchorFragment.appendChild(action);
      }
      if (blobToolbarDropdown) {
        var menuItem = createOpenMenuItem(tool, 0 === toolIndex, githubMetadata);
        blobToolbarDropdown.appendChild(menuItem);
      }
    }));
    if (actionAnchorElement) actionAnchorElement.prepend(actionAnchorFragment);
  };
  var renderPageButtons = function renderPageButtons(githubMetadata) {
    fetchTools(githubMetadata).then((function(tools) {
      renderCloneButtons(tools, githubMetadata);
      renderOpenButtons(tools, githubMetadata);
    }))["catch"]((function() {}));
  };
  var startTrackingDOMChanges = function startTrackingDOMChanges(githubMetadata) {
    return Object(selector_observer__WEBPACK_IMPORTED_MODULE_1__["a"])(".new-discussion-timeline", {
      add: function add() {
        renderPageButtons(githubMetadata);
      },
      remove: function remove() {
        removePageButtons();
      }
    });
  };
  var stopTrackingDOMChanges = function stopTrackingDOMChanges(observer) {
    if (observer) observer.abort();
  };
  var enablePageAction = function enablePageAction(githubMetadata) {
    chrome.runtime.sendMessage({
      type: "enable-page-action",
      project: githubMetadata.repo,
      https: getHttpsCloneUrl(githubMetadata),
      ssh: getSshCloneUrl(githubMetadata)
    });
  };
  var disablePageAction = function disablePageAction() {
    chrome.runtime.sendMessage({
      type: "disable-page-action"
    });
  };
  var toolboxify = function toolboxify() {
    fetchMetadata().then((function(metadata) {
      renderPageAction(metadata).then((function() {
        enablePageAction(metadata);
      }));
      chrome.runtime.sendMessage({
        type: "get-modify-pages"
      }, (function(data) {
        var DOMObserver = null;
        if (data.allow) DOMObserver = startTrackingDOMChanges(metadata);
        chrome.runtime.onMessage.addListener((function(message) {
          switch (message.type) {
           case "modify-pages-changed":
            if (message.newValue) DOMObserver = startTrackingDOMChanges(metadata); else stopTrackingDOMChanges(DOMObserver);
            break;
          }
        }));
      }));
    }))["catch"]((function() {
      disablePageAction();
    }));
  };
  __webpack_exports__["a"] = toolboxify;
}, function(module, exports, __webpack_require__) {
  "use strict";
  var isUrl = __webpack_require__(4);
  var laxUrlRegex = /(?:(?:[^:]+:)?[/][/])?(?:.+@)?([^/]+)([/][^?#]+)/;
  module.exports = function(repoUrl, opts) {
    var obj = {};
    opts = opts || {};
    if (!repoUrl) return null;
    if (repoUrl.url) repoUrl = repoUrl.url;
    if ("string" !== typeof repoUrl) return null;
    var shorthand = repoUrl.match(/^([\w-_]+)\/([\w-_\.]+)(?:#([\w-_\.]+))?$/);
    var mediumhand = repoUrl.match(/^github:([\w-_]+)\/([\w-_\.]+)(?:#([\w-_\.]+))?$/);
    var antiquated = repoUrl.match(/^git@[\w-_\.]+:([\w-_]+)\/([\w-_\.]+)$/);
    if (shorthand) {
      obj.user = shorthand[1];
      obj.repo = shorthand[2];
      obj.branch = shorthand[3] || "master";
      obj.host = "github.com";
    } else if (mediumhand) {
      obj.user = mediumhand[1];
      obj.repo = mediumhand[2];
      obj.branch = mediumhand[3] || "master";
      obj.host = "github.com";
    } else if (antiquated) {
      obj.user = antiquated[1];
      obj.repo = antiquated[2].replace(/\.git$/i, "");
      obj.branch = "master";
      obj.host = "github.com";
    } else {
      repoUrl = repoUrl.replace(/^git\+/, "");
      if (!isUrl(repoUrl)) return null;
      var ref = repoUrl.match(laxUrlRegex) || [];
      var hostname = ref[1];
      var pathname = ref[2];
      if (!hostname) return null;
      if ("github.com" !== hostname && "www.github.com" !== hostname && !opts.enterprise) return null;
      var parts = pathname.match(/^\/([\w-_]+)\/([\w-_\.]+)(\/tree\/[\w-_\.\/]+)?(\/blob\/[\w-_\.\/]+)?/);
      if (!parts) return null;
      obj.user = parts[1];
      obj.repo = parts[2].replace(/\.git$/i, "");
      obj.host = hostname || "github.com";
      if (parts[3] && /^\/tree\/master\//.test(parts[3])) {
        obj.branch = "master";
        obj.path = parts[3].replace(/\/$/, "");
      } else if (parts[3]) obj.branch = parts[3].replace(/^\/tree\//, "").match(/[\w-_.]+\/{0,1}[\w-_]+/)[0]; else if (parts[4]) obj.branch = parts[4].replace(/^\/blob\//, "").match(/[\w-_.]+\/{0,1}[\w-_]+/)[0]; else obj.branch = "master";
    }
    if ("github.com" === obj.host) obj.apiHost = "api.github.com"; else obj.apiHost = obj.host + "/api/v3";
    obj.tarball_url = "https://" + obj.apiHost + "/repos/" + obj.user + "/" + obj.repo + "/tarball/" + obj.branch;
    obj.clone_url = "https://" + obj.host + "/" + obj.user + "/" + obj.repo;
    if ("master" === obj.branch) {
      obj.https_url = "https://" + obj.host + "/" + obj.user + "/" + obj.repo;
      obj.travis_url = "https://travis-ci.org/" + obj.user + "/" + obj.repo;
      obj.zip_url = "https://" + obj.host + "/" + obj.user + "/" + obj.repo + "/archive/master.zip";
    } else {
      obj.https_url = "https://" + obj.host + "/" + obj.user + "/" + obj.repo + "/blob/" + obj.branch;
      obj.travis_url = "https://travis-ci.org/" + obj.user + "/" + obj.repo + "?branch=" + obj.branch;
      obj.zip_url = "https://" + obj.host + "/" + obj.user + "/" + obj.repo + "/archive/" + obj.branch + ".zip";
    }
    if (obj.path) obj.https_url += obj.path;
    obj.api_url = "https://" + obj.apiHost + "/repos/" + obj.user + "/" + obj.repo;
    return obj;
  };
}, function(module, __webpack_exports__, __webpack_require__) {
  "use strict";
  __webpack_require__(3);
  var _constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(0);
  var _api_toolbox__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1);
  function _toConsumableArray(arr) {
    return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread();
  }
  function _nonIterableSpread() {
    throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
  }
  function _iterableToArray(iter) {
    if ("undefined" !== typeof Symbol && Symbol.iterator in Object(iter)) return Array.from(iter);
  }
  function _arrayWithoutHoles(arr) {
    if (Array.isArray(arr)) return _arrayLikeToArray(arr);
  }
  function _slicedToArray(arr, i) {
    return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest();
  }
  function _nonIterableRest() {
    throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
  }
  function _unsupportedIterableToArray(o, minLen) {
    if (!o) return;
    if ("string" === typeof o) return _arrayLikeToArray(o, minLen);
    var n = Object.prototype.toString.call(o).slice(8, -1);
    if ("Object" === n && o.constructor) n = o.constructor.name;
    if ("Map" === n || "Set" === n) return Array.from(o);
    if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
  }
  function _arrayLikeToArray(arr, len) {
    if (null == len || len > arr.length) len = arr.length;
    for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i];
    return arr2;
  }
  function _iterableToArrayLimit(arr, i) {
    if ("undefined" === typeof Symbol || !(Symbol.iterator in Object(arr))) return;
    var _arr = [];
    var _n = true;
    var _d = false;
    var _e = void 0;
    try {
      for (var _s, _i = arr[Symbol.iterator](); !(_n = (_s = _i.next()).done); _n = true) {
        _arr.push(_s.value);
        if (i && _arr.length === i) break;
      }
    } catch (err) {
      _d = true;
      _e = err;
    } finally {
      try {
        if (!_n && null != _i["return"]) _i["return"]();
      } finally {
        if (_d) throw _e;
      }
    }
    return _arr;
  }
  function _arrayWithHoles(arr) {
    if (Array.isArray(arr)) return arr;
  }
  var CLONE_BUTTON_JS_CSS_CLASS = "js-toolbox-clone-button";
  var OPEN_BUTTON_GROUP_JS_CSS_CLASS = "js-toolbox-open-button-group";
  var extractProjectIdFromPage = function extractProjectIdFromPage(document) {
    var dataProjectId = document.body.dataset.projectId;
    if (dataProjectId) return dataProjectId;
    var homePanelMetadataElement = document.querySelector(".home-panel-metadata") || {
      children: []
    };
    var projectIdElement = Array.prototype.find.call(homePanelMetadataElement.children, (function(c) {
      return c.textContent.includes("Project ID");
    }));
    return projectIdElement ? projectIdElement.textContent.replace("Project ID:", "").trim() : null;
  };
  var getProjectId = function getProjectId() {
    return new Promise((function(resolve, reject) {
      var projectId = extractProjectIdFromPage(document);
      if (projectId) resolve(projectId); else {
        var _document$body$datase = document.body.dataset, findFile = _document$body$datase.findFile, project = _document$body$datase.project;
        if (findFile && project) {
          var _findFile$split = findFile.split("/-/find_file/"), _findFile$split2 = _slicedToArray(_findFile$split, 1), repoPath = _findFile$split2[0];
          var repoUrl = "".concat(location.origin).concat(repoPath);
          fetch(repoUrl).then((function(response) {
            return response.text();
          })).then((function(htmlString) {
            var parser = new DOMParser;
            var htmlDocument = parser.parseFromString(htmlString, "text/html");
            projectId = extractProjectIdFromPage(htmlDocument);
            if (null === projectId) reject(); else resolve(projectId);
          }));
        } else reject();
      }
    }));
  };
  var fetchMetadata = function fetchMetadata() {
    return new Promise((function(resolve, reject) {
      getProjectId().then((function(id) {
        fetch("".concat(location.origin, "/api/v4/projects/").concat(id)).then((function(r) {
          return r.json();
        })).then((function(meta) {
          resolve({
            ssh: meta.ssh_url_to_repo,
            https: meta.http_url_to_repo,
            id: meta.id,
            repo: meta.path
          });
        }));
      }))["catch"]((function() {
        reject();
      }));
    }));
  };
  var fetchLanguages = function fetchLanguages(gitlabMetadata) {
    return new Promise((function(resolve) {
      fetch("".concat(location.origin, "/api/v4/projects/").concat(gitlabMetadata.id, "/languages")).then((function(response) {
        resolve(response.json());
      }))["catch"]((function() {
        resolve(_constants__WEBPACK_IMPORTED_MODULE_1__["c"]);
      }));
    }));
  };
  var selectTools = function selectTools(languages) {
    return new Promise((function(resolve) {
      var overallPoints = Object.values(languages).reduce((function(overall, current) {
        return overall + current;
      }), 0);
      var filterLang = function filterLang(language) {
        return _constants__WEBPACK_IMPORTED_MODULE_1__["h"][language.toLowerCase()] && languages[language] / overallPoints > _constants__WEBPACK_IMPORTED_MODULE_1__["j"];
      };
      var selectedToolIds = Object.keys(languages).filter(filterLang).reduce((function(acc, key) {
        acc.push.apply(acc, _toConsumableArray(_constants__WEBPACK_IMPORTED_MODULE_1__["h"][key.toLowerCase()]));
        return acc;
      }), []);
      var normalizedToolIds = selectedToolIds.length > 0 ? Array.from(new Set(selectedToolIds)) : _constants__WEBPACK_IMPORTED_MODULE_1__["h"][_constants__WEBPACK_IMPORTED_MODULE_1__["b"]];
      var tools = normalizedToolIds.sort().map((function(toolId) {
        return _constants__WEBPACK_IMPORTED_MODULE_1__["i"][toolId];
      }));
      resolve(tools);
    }));
  };
  var fetchTools = function fetchTools(gitlabMetadata) {
    return fetchLanguages(gitlabMetadata).then(selectTools);
  };
  var renderPageAction = function renderPageAction(gitlabMetadata) {
    return new Promise((function(resolve) {
      chrome.runtime.onMessage.addListener((function(message, sender, sendResponse) {
        switch (message.type) {
         case "get-tools":
          fetchTools(gitlabMetadata).then(sendResponse);
          return true;

         case "perform-action":
          var toolboxAction = Object(_api_toolbox__WEBPACK_IMPORTED_MODULE_2__["c"])(message.toolTag, message.cloneUrl);
          Object(_api_toolbox__WEBPACK_IMPORTED_MODULE_2__["a"])(toolboxAction);
          break;
        }
        return;
      }));
      resolve();
    }));
  };
  var removeCloneButtons = function removeCloneButtons() {
    document.querySelectorAll(".".concat(CLONE_BUTTON_JS_CSS_CLASS)).forEach((function(button) {
      button.remove();
    }));
  };
  var addCloneButtonEventHandler = function addCloneButtonEventHandler(button, gitlabMetadata) {
    button.addEventListener("click", (function(e) {
      e.preventDefault();
      var toolTag = e.currentTarget.dataset.toolTag;
      chrome.runtime.sendMessage({
        type: "get-protocol"
      }, (function(_ref) {
        var protocol = _ref.protocol;
        var cloneUrl = protocol === _constants__WEBPACK_IMPORTED_MODULE_1__["a"].HTTPS ? gitlabMetadata.https : gitlabMetadata.ssh;
        var action = Object(_api_toolbox__WEBPACK_IMPORTED_MODULE_2__["c"])(toolTag, cloneUrl);
        Object(_api_toolbox__WEBPACK_IMPORTED_MODULE_2__["a"])(action);
      }));
    }));
  };
  var createCloneButton = function createCloneButton(tool, gitlabMetadata) {
    var button = document.createElement("a");
    button.setAttribute("class", "gl-link btn has-tooltip ".concat(CLONE_BUTTON_JS_CSS_CLASS));
    button.setAttribute("style", "cursor:pointer");
    button.dataset.title = "Clone in ".concat(tool.name);
    button.dataset.originalTitle = button.dataset.title;
    button.dataset.toolTag = tool.tag;
    button.setAttribute("aria-label", button.dataset.title);
    var buttonIcon = document.createElement("img");
    buttonIcon.setAttribute("alt", tool.name);
    buttonIcon.setAttribute("src", tool.icon);
    buttonIcon.setAttribute("width", "16");
    buttonIcon.setAttribute("height", "16");
    buttonIcon.setAttribute("class", "square s16");
    button.appendChild(buttonIcon);
    addCloneButtonEventHandler(button, gitlabMetadata);
    return button;
  };
  var renderCloneButtons = function renderCloneButtons(tools, gitlabMetadata) {
    var gitCloneHolder = document.querySelector(".js-git-clone-holder");
    var gitCloneHolderParent = gitCloneHolder ? gitCloneHolder.parentElement : null;
    if (gitCloneHolderParent) tools.forEach((function(tool) {
      var button = createCloneButton(tool, gitlabMetadata);
      gitCloneHolderParent.insertAdjacentElement("beforebegin", button);
    }));
  };
  var addOpenButtonEventHandler = function addOpenButtonEventHandler(domElement, tool, gitlabMetadata) {
    domElement.addEventListener("click", (function(e) {
      e.preventDefault();
      var branchAndFilePath = location.pathname.split("/blob/")[1];
      var filePath = branchAndFilePath.split("/").splice(1).join("/");
      var lineNumber = location.hash.replace("#L", "");
      if ("" === lineNumber) lineNumber = null;
      Object(_api_toolbox__WEBPACK_IMPORTED_MODULE_2__["a"])(Object(_api_toolbox__WEBPACK_IMPORTED_MODULE_2__["b"])(tool.tag, gitlabMetadata.repo, filePath, lineNumber));
    }));
  };
  var removeOpenButtons = function removeOpenButtons() {
    var openButtonGroup = document.querySelector(".".concat(OPEN_BUTTON_GROUP_JS_CSS_CLASS));
    if (openButtonGroup) openButtonGroup.remove();
  };
  var removePageButtons = function removePageButtons() {
    removeCloneButtons();
    removeOpenButtons();
  };
  var createOpenButton = function createOpenButton(tool, gitlabMetadata) {
    var button = document.createElement("button");
    button.setAttribute("class", "btn btn-sm");
    button.setAttribute("type", "button");
    button.dataset.toggle = "tooltip";
    button.dataset.placement = "bottom";
    button.dataset.container = "body";
    button.dataset["class"] = "btn btn-sm";
    button.dataset.title = "Open this file in ".concat(tool.name);
    button.dataset.originalTitle = button.dataset.title;
    button.setAttribute("aria-label", button.dataset.title);
    var buttonIcon = document.createElement("img");
    buttonIcon.setAttribute("alt", tool.name);
    buttonIcon.setAttribute("src", tool.icon);
    buttonIcon.setAttribute("width", "15");
    buttonIcon.setAttribute("height", "15");
    buttonIcon.setAttribute("style", "position:relative;top:-2px");
    button.appendChild(buttonIcon);
    addOpenButtonEventHandler(button, tool, gitlabMetadata);
    return button;
  };
  var renderOpenButtons = function renderOpenButtons(tools, gitlabMetadata) {
    var buttonGroupAnchorElement = document.querySelector(".file-holder .file-actions .btn-group:last-child");
    if (buttonGroupAnchorElement) {
      var toolboxButtonGroup = document.createElement("div");
      toolboxButtonGroup.setAttribute("class", "btn-group ml-2 ".concat(OPEN_BUTTON_GROUP_JS_CSS_CLASS));
      toolboxButtonGroup.setAttribute("role", "group");
      tools.forEach((function(tool) {
        var action = createOpenButton(tool, gitlabMetadata);
        toolboxButtonGroup.appendChild(action);
      }));
      buttonGroupAnchorElement.insertAdjacentElement("beforebegin", toolboxButtonGroup);
      buttonGroupAnchorElement.insertAdjacentText("beforebegin", "\n");
    }
  };
  var renderPageButtons = function renderPageButtons(gitlabMetadata) {
    fetchTools(gitlabMetadata).then((function(tools) {
      renderCloneButtons(tools, gitlabMetadata);
      renderOpenButtons(tools, gitlabMetadata);
    }));
  };
  var enablePageAction = function enablePageAction(gitlabMetadata) {
    chrome.runtime.sendMessage({
      type: "enable-page-action",
      project: gitlabMetadata.repo,
      https: gitlabMetadata.https,
      ssh: gitlabMetadata.ssh
    });
  };
  var disablePageAction = function disablePageAction() {
    chrome.runtime.sendMessage({
      type: "disable-page-action"
    });
  };
  var toolboxify = function toolboxify() {
    fetchMetadata().then((function(metadata) {
      renderPageAction(metadata).then((function() {
        enablePageAction(metadata);
      }));
      chrome.runtime.sendMessage({
        type: "get-modify-pages"
      }, (function(data) {
        if (data.allow) renderPageButtons(metadata);
        chrome.runtime.onMessage.addListener((function(message) {
          switch (message.type) {
           case "modify-pages-changed":
            if (message.newValue) renderPageButtons(metadata); else removePageButtons();
            break;
          }
        }));
      }));
    }))["catch"]((function() {
      disablePageAction();
    }));
  };
  __webpack_exports__["a"] = toolboxify;
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
}, , function(module, exports, __webpack_require__) {
  "use strict";
  var url = __webpack_require__(10);
  var cache = {};
  module.exports = function parseBitbucketUrl(str) {
    return cache[str] || (cache[str] = parse(str));
  };
  function parse(str) {
    if ("string" !== typeof str || !str.length) return null;
    if (-1 !== str.indexOf("bitbucket.org/snippets") || -1 !== str.indexOf("bitbucket.com/snippets")) return null;
    var obj = url.parse(str, true);
    if ("string" !== typeof obj.path || !obj.path.length || "string" !== typeof obj.pathname || !obj.pathname.length) return null;
    obj.path = trimSlash(obj.path);
    obj.pathname = trimSlash(obj.pathname);
    var pathSegments = obj.path.split("/").filter(Boolean);
    var stashDetected = -1 !== str.indexOf("git@") && -1 === str.indexOf("git@bitbucket.org") && -1 === str.indexOf("git@bitbucket.com") || obj.hostname && !(obj.hostname.endsWith("bitbucket.org") || obj.hostname.endsWith("bitbucket.com")) && "projects" === pathSegments[0];
    if (stashDetected) if (-1 === str.indexOf("git@")) {
      if (pathSegments.length > 1) obj.owner = owner(pathSegments[1]); else obj.owner = null;
      if (pathSegments.length > 3 && "repos" === pathSegments[2]) obj.name = name(pathSegments[3]); else obj.name = null;
    } else if (3 === pathSegments.length) {
      obj.host = pathSegments[0].replace("git@", "");
      obj.owner = owner(pathSegments[1]);
      obj.name = name(pathSegments[2]);
    } else {
      obj.owner = owner(pathSegments[0]);
      obj.name = name(pathSegments[1]);
    } else {
      obj.owner = owner(pathSegments[0]);
      obj.name = name(pathSegments[1]);
    }
    if (pathSegments.length > 1 && obj.owner && obj.name) obj.repo = obj.owner + "/" + obj.name; else {
      var href = obj.href.split(":");
      if (2 === href.length && -1 === obj.href.indexOf("//")) {
        obj.repo = obj.repo || href[href.length - 1];
        var repoSegments = obj.repo.split("/");
        obj.owner = repoSegments[0];
        obj.name = repoSegments[1];
      } else if (false === obj.hasOwnProperty("owner")) {
        var match = obj.href.match(/\/([^\/]*)$/);
        obj.owner = match ? match[1] : null;
        obj.repo = null;
      }
      if (obj.repo && (!obj.owner || !obj.name)) {
        var segs = obj.repo.split("/");
        if (2 === segs.length) {
          obj.owner = segs[0];
          obj.name = segs[1];
        }
      }
    }
    if (pathSegments.length >= 3) switch (pathSegments[2]) {
     case "get":
      var fileName = null;
      if (pathSegments[3].endsWith(".tar.gz")) fileName = pathSegments[3].replace(".tar.gz", "");
      if (pathSegments[3].endsWith(".tar.bz2")) fileName = pathSegments[3].replace(".tar.bz2", "");
      if (pathSegments[3].endsWith(".zip")) fileName = pathSegments[3].replace(".zip", "");
      obj.branch = fileName;
      if ("tip" === obj.branch) obj.branch = void 0;
      break;

     case "raw":
     case "src":
      if (pathSegments.length < 5) break;
      var filepath = pathSegments.slice(4);
      if (filepath.length) {
        var file = filepath[filepath.length - 1];
        file = file.split("?")[0];
        filepath[filepath.length - 1] = file;
      }
      obj.filepath = filepath.join("/");
    }
    obj.branch = obj.branch || getBranch(obj, stashDetected);
    var res = {};
    res.host = obj.host || "bitbucket.org";
    res.owner = obj.owner || null;
    res.name = obj.name || null;
    res.repo = obj.repo;
    res.repository = res.repo;
    res.branch = obj.branch;
    res.filepath = obj.filepath || null;
    return res;
  }
  function getBranch(obj, stashMode) {
    var branch;
    var segs = obj.path.split("#");
    if (1 !== segs.length) branch = segs[segs.length - 1];
    if (!branch && obj.hash && "#" === obj.hash.charAt(0)) branch = obj.hash.slice(1);
    if (!branch && obj.query && obj.query.at) {
      branch = obj.query.at;
      if (branch && stashMode) branch = branch.replace("refs/heads/", "");
    }
    return branch || "master";
  }
  function trimSlash(path) {
    return "/" === path.charAt(0) ? path.slice(1) : path;
  }
  function name(str) {
    return str ? str.replace(/^\W+|\.git$/g, "") : null;
  }
  function owner(str) {
    if (!str) return null;
    var idx = str.indexOf(":");
    if (idx > -1) return str.slice(idx + 1);
    return str;
  }
}, , , , , , , , , , , , function(module, __webpack_exports__, __webpack_require__) {
  "use strict";
  __webpack_require__.r(__webpack_exports__);
  var github = __webpack_require__(7);
  var gitlab = __webpack_require__(9);
  __webpack_require__(3);
  var index_esm = __webpack_require__(2);
  var parse_bitbucket_url = __webpack_require__(18);
  var parse_bitbucket_url_default = __webpack_require__.n(parse_bitbucket_url);
  var constants = __webpack_require__(0);
  var toolbox = __webpack_require__(1);
  var OPEN_BUTTON_JS_CSS_CLASS = "js-toolbox-open-button";
  var bitbucket_server_fetchMetadata = function fetchMetadata() {
    return new Promise((function(resolve, reject) {
      var parsedStashUrl = document.querySelector("meta[name=application-name][content=Bitbucket]") && parse_bitbucket_url_default()(window.location.toString());
      if (!parsedStashUrl) {
        reject();
        return;
      }
      var metadata = {
        api_url: "".concat(location.origin, "/rest/api/latest/projects/").concat(parsedStashUrl.owner, "/repos/").concat(parsedStashUrl.name),
        branch: parsedStashUrl.branch,
        repo: parsedStashUrl.name,
        user: parsedStashUrl.owner
      };
      fetch(metadata.api_url).then((function(response) {
        return response.json();
      })).then((function(parsedResponse) {
        metadata.links = {
          clone: parsedResponse.links.clone
        };
        var httpLink = metadata.links.clone.find((function(l) {
          return "http" === l.name;
        }));
        if (httpLink) httpLink.name = "https";
        resolve(metadata);
      }))["catch"]((function() {
        reject();
      }));
    }));
  };
  var bitbucket_server_fetchLanguages = function fetchLanguages() {
    return new Promise((function(resolve) {
      resolve(constants["b"]);
    }));
  };
  var bitbucket_server_selectTools = function selectTools(language) {
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
    return bitbucket_server_fetchLanguages(bitbucketMetadata).then(bitbucket_server_selectTools);
  };
  var bitbucket_server_renderPageAction = function renderPageAction(bitbucketMetadata) {
    return new Promise((function(resolve) {
      chrome.runtime.onMessage.addListener((function(message, sender, sendResponse) {
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
      }));
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
  var bitbucket_server_addCloneButtonEventHandler = function addCloneButtonEventHandler(btn, bitbucketMetadata) {
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
  var createCloneButton = function createCloneButton(tool, bitbucketMetadata) {
    var title = "Clone in ".concat(tool.name);
    var button = document.createElement("a");
    button.setAttribute("class", "aui-nav-item");
    button.setAttribute("href", "#");
    button.setAttribute("original-title", title);
    button.dataset.toolTag = tool.tag;
    var buttonIcon = document.createElement("span");
    buttonIcon.setAttribute("class", "aui-icon toolbox-aui-icon");
    buttonIcon.setAttribute("style", "background-image:url(".concat(tool.icon, ");background-size:contain"));
    var buttonLabel = document.createElement("span");
    buttonLabel.setAttribute("class", "aui-nav-item-label");
    buttonLabel.textContent = title;
    button.appendChild(buttonIcon);
    button.appendChild(buttonLabel);
    bitbucket_server_addCloneButtonEventHandler(button, bitbucketMetadata);
    return button;
  };
  var renderCloneButtons = function renderCloneButtons(bitbucketMetadata) {
    var cloneElement = document.querySelector(".clone-repo");
    if (!cloneElement) return;
    fetchTools(bitbucketMetadata).then((function(tools) {
      tools.forEach((function(tool) {
        var buttonContainer = document.createElement("li");
        buttonContainer.setAttribute("class", "js-toolbox-clone-repo");
        var button = createCloneButton(tool, bitbucketMetadata);
        buttonContainer.appendChild(button);
        cloneElement.insertAdjacentElement("beforebegin", buttonContainer);
      }));
    }))["catch"]((function() {}));
  };
  var removeCloneButtons = function removeCloneButtons() {
    document.querySelectorAll(".js-toolbox-clone-repo").forEach((function(buttonContainer) {
      buttonContainer.remove();
    }));
  };
  var bitbucket_server_addOpenButtonEventHandler = function addOpenButtonEventHandler(domElement, tool, bitbucketMetadata) {
    domElement.addEventListener("click", (function(e) {
      e.preventDefault();
      var filePathIndex = 6;
      var filePath = location.pathname.split("/").splice(filePathIndex).join("/");
      var lineNumber = location.hash.replace("#", "");
      if ("" === lineNumber) lineNumber = null;
      Object(toolbox["a"])(Object(toolbox["b"])(tool.tag, bitbucketMetadata.repo, filePath, lineNumber));
    }));
  };
  var createOpenButton = function createOpenButton(tool, bitbucketMetadata) {
    var buttonContainer = document.createElement("div");
    buttonContainer.setAttribute("class", "aui-buttons ".concat(OPEN_BUTTON_JS_CSS_CLASS));
    var button = document.createElement("button");
    button.setAttribute("class", "aui-button");
    button.setAttribute("original-title", "Open this file in ".concat(tool.name));
    var buttonIcon = document.createElement("img");
    buttonIcon.setAttribute("alt", tool.name);
    buttonIcon.setAttribute("src", tool.icon);
    buttonIcon.setAttribute("width", "16");
    buttonIcon.setAttribute("height", "16");
    buttonIcon.setAttribute("style", "vertical-align:text-bottom");
    button.appendChild(buttonIcon);
    buttonContainer.append(button);
    bitbucket_server_addOpenButtonEventHandler(button, tool, bitbucketMetadata);
    return buttonContainer;
  };
  var setOpenButtonTooltips = function setOpenButtonTooltips() {
    var tooltipScript = document.createElement("script");
    tooltipScript.textContent = "jQuery('.".concat(OPEN_BUTTON_JS_CSS_CLASS, " > .aui-button:first-child').tipsy();");
    document.body.appendChild(tooltipScript);
  };
  var openButtonsRendered = function openButtonsRendered() {
    return document.getElementsByClassName(OPEN_BUTTON_JS_CSS_CLASS).length > 0;
  };
  var renderOpenButtons = function renderOpenButtons(bitbucketMetadata) {
    if (openButtonsRendered()) return;
    var anchorElement = document.querySelector(".file-toolbar > .secondary > .aui-buttons:first-child");
    if (anchorElement) fetchTools(bitbucketMetadata).then((function(tools) {
      tools.forEach((function(tool) {
        var action = createOpenButton(tool, bitbucketMetadata);
        anchorElement.insertAdjacentElement("beforebegin", action);
      }));
      setOpenButtonTooltips();
    }))["catch"]((function() {}));
  };
  var removeOpenButtons = function removeOpenButtons() {
    document.querySelectorAll(".".concat(OPEN_BUTTON_JS_CSS_CLASS)).forEach((function(button) {
      button.remove();
    }));
  };
  var bitbucket_server_startTrackingDOMChanges = function startTrackingDOMChanges(bitbucketMetadata) {
    return Object(index_esm["a"])("#file-content > .file-toolbar > .secondary > .aui-buttons > .file-blame", {
      add: function add() {
        renderOpenButtons(bitbucketMetadata);
      },
      remove: function remove() {
        removeOpenButtons();
      }
    });
  };
  var stopTrackingDOMChanges = function stopTrackingDOMChanges(observer) {
    if (observer) observer.abort();
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
  var toolboxify = function toolboxify() {
    bitbucket_server_fetchMetadata().then((function(metadata) {
      bitbucket_server_renderPageAction(metadata).then((function() {
        enablePageAction(metadata);
      }));
      chrome.runtime.sendMessage({
        type: "get-modify-pages"
      }, (function(data) {
        var DOMObserver = null;
        if (data.allow) {
          renderCloneButtons(metadata);
          DOMObserver = bitbucket_server_startTrackingDOMChanges(metadata);
        }
        chrome.runtime.onMessage.addListener((function(message) {
          switch (message.type) {
           case "modify-pages-changed":
            if (message.newValue) {
              renderCloneButtons(metadata);
              DOMObserver = bitbucket_server_startTrackingDOMChanges(metadata);
            } else {
              removeCloneButtons();
              stopTrackingDOMChanges(DOMObserver);
            }
            break;
          }
        }));
      }));
    }))["catch"]((function() {
      disablePageAction();
    }));
  };
  var bitbucket_server = toolboxify;
  (function detectEnterprise() {
    var nameMeta = document.querySelector('meta[property="og:site_name"]') || document.querySelector('meta[name="application-name"]');
    if (nameMeta) {
      var siteName = nameMeta.content;
      if (siteName.startsWith("GitHub")) Object(github["a"])(); else if (siteName.startsWith("GitLab")) Object(gitlab["a"])(); else if (siteName.startsWith("Bitbucket")) bitbucket_server();
    }
  })();
} ]);