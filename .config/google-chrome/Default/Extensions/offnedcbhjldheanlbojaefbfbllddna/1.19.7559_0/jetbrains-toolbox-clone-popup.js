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
  return __webpack_require__(__webpack_require__.s = 27);
})({
  27: function(module, exports) {
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
    function createOpenToolAction(tool, project, httpsUrl, sshUrl) {
      var toolAction = document.createElement("button");
      toolAction.setAttribute("type", "button");
      toolAction.setAttribute("class", "tool-action");
      toolAction.dataset.https = httpsUrl;
      toolAction.dataset.ssh = sshUrl;
      toolAction.dataset.tag = tool.tag;
      setToolActionClickHandler(toolAction);
      var icon = document.createElement("img");
      icon.setAttribute("class", "tool-action__icon");
      icon.setAttribute("alt", tool.name);
      icon.setAttribute("src", tool.icon);
      var actionText = document.createElement("div");
      actionText.setAttribute("class", "tool-action__text");
      var toolName = document.createElement("div");
      toolName.setAttribute("class", "tool-action__tool");
      toolName.textContent = tool.name;
      actionText.appendChild(toolName);
      var projectName = document.createElement("div");
      projectName.setAttribute("class", "tool-action__project");
      projectName.textContent = project;
      actionText.appendChild(projectName);
      toolAction.append(icon);
      toolAction.append(actionText);
      return toolAction;
    }
    function setToolActionClickHandler(action) {
      action.addEventListener("click", (function(e) {
        e.preventDefault();
        var toolAction = e.currentTarget;
        chrome.tabs.query({
          active: true,
          currentWindow: true
        }, (function(tabs) {
          var toolTag = toolAction.dataset.tag;
          var protocolInput = document.querySelector(".js-protocol-input:checked");
          var protocol = protocolInput.value.toLowerCase();
          var cloneUrl = toolAction.dataset[protocol];
          chrome.tabs.sendMessage(tabs[0].id, {
            type: "perform-action",
            toolTag: toolTag,
            cloneUrl: cloneUrl
          });
        }));
      }));
    }
    var query = decodeURI(location.search).substring(1).split("&").reduce((function(acc, paramString) {
      var _paramString$split = paramString.split("="), _paramString$split2 = _slicedToArray(_paramString$split, 2), param = _paramString$split2[0], value = _paramString$split2[1];
      acc[param] = value;
      return acc;
    }), {});
    var inputs = document.querySelectorAll('input[type="radio"][name="protocol"]');
    inputs.forEach((function(input) {
      input.addEventListener("change", (function(e) {
        if (e.currentTarget.checked) chrome.runtime.sendMessage({
          type: "save-protocol",
          protocol: e.currentTarget.value
        });
      }));
    }));
    chrome.tabs.query({
      active: true,
      currentWindow: true
    }, (function(tabs) {
      chrome.runtime.sendMessage({
        type: "get-protocol"
      }, (function(data) {
        var protocolInput = document.querySelector('.js-protocol-input[value="'.concat(data.protocol, '"]'));
        protocolInput.checked = true;
      }));
      chrome.tabs.sendMessage(tabs[0].id, {
        type: "get-tools"
      }, (function(tools) {
        if (null == tools) return;
        var fragment = document.createDocumentFragment();
        tools.forEach((function(tool) {
          fragment.append(createOpenToolAction(tool, query.project, query.https, query.ssh));
        }));
        document.querySelector(".js-tool-action-placeholder").remove();
        document.querySelector(".js-tool-actions").append(fragment);
      }));
    }));
  }
});