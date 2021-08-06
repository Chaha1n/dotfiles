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
  return __webpack_require__(__webpack_require__.s = 19);
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
}, , , function(module, __webpack_exports__, __webpack_require__) {
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
}, , , , , , , , , , , function(module, __webpack_exports__, __webpack_require__) {
  "use strict";
  __webpack_require__.r(__webpack_exports__);
  var _github__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(7);
  if (!window.hasRun) {
    window.hasRun = true;
    Object(_github__WEBPACK_IMPORTED_MODULE_0__["a"])();
  }
} ]);