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
  return __webpack_require__(__webpack_require__.s = 20);
})({
  0: function(module, __webpack_exports__, __webpack_require__) {
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
  },
  1: function(module, __webpack_exports__, __webpack_require__) {
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
  },
  20: function(module, __webpack_exports__, __webpack_require__) {
    "use strict";
    __webpack_require__.r(__webpack_exports__);
    var _gitlab__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9);
    if (!window.hasRun) {
      window.hasRun = true;
      Object(_gitlab__WEBPACK_IMPORTED_MODULE_0__["a"])();
    }
  },
  3: function(module, __webpack_exports__, __webpack_require__) {
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
  },
  9: function(module, __webpack_exports__, __webpack_require__) {
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
  }
});