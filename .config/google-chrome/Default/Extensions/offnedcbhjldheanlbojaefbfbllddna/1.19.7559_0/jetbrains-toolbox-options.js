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
  return __webpack_require__(__webpack_require__.s = 28);
})({
  28: function(module, exports) {
    var selectProtocolInput = function selectProtocolInput(protocol) {
      var protocolInput = document.querySelector('.js-protocol-input[value="'.concat(protocol, '"]'));
      if (protocolInput) protocolInput.checked = true;
    };
    chrome.runtime.sendMessage({
      type: "get-protocol"
    }, (function(data) {
      selectProtocolInput(data.protocol);
    }));
    chrome.runtime.sendMessage({
      type: "get-modify-pages"
    }, (function(data) {
      var modifyPagesInput = document.querySelector(".js-modify-pages-input");
      modifyPagesInput.checked = data.allow;
    }));
    document.querySelector(".js-protocol-input-group").addEventListener("change", (function(e) {
      chrome.runtime.sendMessage({
        type: "save-protocol",
        protocol: e.target.value
      });
    }));
    document.querySelector(".js-modify-pages-input").addEventListener("change", (function(e) {
      chrome.runtime.sendMessage({
        type: "save-modify-pages",
        allow: e.target.checked
      });
    }));
    chrome.runtime.onMessage.addListener((function(message) {
      switch (message.type) {
       case "protocol-changed":
        selectProtocolInput(message.newValue);
        break;
      }
    }));
  }
});