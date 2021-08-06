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
  return __webpack_require__(__webpack_require__.s = 29);
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
  25: function(module, exports, __webpack_require__) {
    (function(module) {
      function _typeof(obj) {
        "@babel/helpers - typeof";
        if ("function" === typeof Symbol && "symbol" === typeof Symbol.iterator) _typeof = function _typeof(obj) {
          return typeof obj;
        }; else _typeof = function _typeof(obj) {
          return obj && "function" === typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
        };
        return _typeof(obj);
      }
      var runtime = function(exports) {
        "use strict";
        var Op = Object.prototype;
        var hasOwn = Op.hasOwnProperty;
        var undefined;
        var $Symbol = "function" === typeof Symbol ? Symbol : {};
        var iteratorSymbol = $Symbol.iterator || "@@iterator";
        var asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator";
        var toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag";
        function wrap(innerFn, outerFn, self, tryLocsList) {
          var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator;
          var generator = Object.create(protoGenerator.prototype);
          var context = new Context(tryLocsList || []);
          generator._invoke = makeInvokeMethod(innerFn, self, context);
          return generator;
        }
        exports.wrap = wrap;
        function tryCatch(fn, obj, arg) {
          try {
            return {
              type: "normal",
              arg: fn.call(obj, arg)
            };
          } catch (err) {
            return {
              type: "throw",
              arg: err
            };
          }
        }
        var GenStateSuspendedStart = "suspendedStart";
        var GenStateSuspendedYield = "suspendedYield";
        var GenStateExecuting = "executing";
        var GenStateCompleted = "completed";
        var ContinueSentinel = {};
        function Generator() {}
        function GeneratorFunction() {}
        function GeneratorFunctionPrototype() {}
        var IteratorPrototype = {};
        IteratorPrototype[iteratorSymbol] = function() {
          return this;
        };
        var getProto = Object.getPrototypeOf;
        var NativeIteratorPrototype = getProto && getProto(getProto(values([])));
        if (NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn.call(NativeIteratorPrototype, iteratorSymbol)) IteratorPrototype = NativeIteratorPrototype;
        var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(IteratorPrototype);
        GeneratorFunction.prototype = Gp.constructor = GeneratorFunctionPrototype;
        GeneratorFunctionPrototype.constructor = GeneratorFunction;
        GeneratorFunctionPrototype[toStringTagSymbol] = GeneratorFunction.displayName = "GeneratorFunction";
        function defineIteratorMethods(prototype) {
          [ "next", "throw", "return" ].forEach((function(method) {
            prototype[method] = function(arg) {
              return this._invoke(method, arg);
            };
          }));
        }
        exports.isGeneratorFunction = function(genFun) {
          var ctor = "function" === typeof genFun && genFun.constructor;
          return ctor ? ctor === GeneratorFunction || "GeneratorFunction" === (ctor.displayName || ctor.name) : false;
        };
        exports.mark = function(genFun) {
          if (Object.setPrototypeOf) Object.setPrototypeOf(genFun, GeneratorFunctionPrototype); else {
            genFun.__proto__ = GeneratorFunctionPrototype;
            if (!(toStringTagSymbol in genFun)) genFun[toStringTagSymbol] = "GeneratorFunction";
          }
          genFun.prototype = Object.create(Gp);
          return genFun;
        };
        exports.awrap = function(arg) {
          return {
            __await: arg
          };
        };
        function AsyncIterator(generator, PromiseImpl) {
          function invoke(method, arg, resolve, reject) {
            var record = tryCatch(generator[method], generator, arg);
            if ("throw" === record.type) reject(record.arg); else {
              var result = record.arg;
              var value = result.value;
              if (value && "object" === _typeof(value) && hasOwn.call(value, "__await")) return PromiseImpl.resolve(value.__await).then((function(value) {
                invoke("next", value, resolve, reject);
              }), (function(err) {
                invoke("throw", err, resolve, reject);
              }));
              return PromiseImpl.resolve(value).then((function(unwrapped) {
                result.value = unwrapped;
                resolve(result);
              }), (function(error) {
                return invoke("throw", error, resolve, reject);
              }));
            }
          }
          var previousPromise;
          function enqueue(method, arg) {
            function callInvokeWithMethodAndArg() {
              return new PromiseImpl((function(resolve, reject) {
                invoke(method, arg, resolve, reject);
              }));
            }
            return previousPromise = previousPromise ? previousPromise.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg();
          }
          this._invoke = enqueue;
        }
        defineIteratorMethods(AsyncIterator.prototype);
        AsyncIterator.prototype[asyncIteratorSymbol] = function() {
          return this;
        };
        exports.AsyncIterator = AsyncIterator;
        exports.async = function(innerFn, outerFn, self, tryLocsList, PromiseImpl) {
          if (void 0 === PromiseImpl) PromiseImpl = Promise;
          var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList), PromiseImpl);
          return exports.isGeneratorFunction(outerFn) ? iter : iter.next().then((function(result) {
            return result.done ? result.value : iter.next();
          }));
        };
        function makeInvokeMethod(innerFn, self, context) {
          var state = GenStateSuspendedStart;
          return function invoke(method, arg) {
            if (state === GenStateExecuting) throw new Error("Generator is already running");
            if (state === GenStateCompleted) {
              if ("throw" === method) throw arg;
              return doneResult();
            }
            context.method = method;
            context.arg = arg;
            while (true) {
              var delegate = context.delegate;
              if (delegate) {
                var delegateResult = maybeInvokeDelegate(delegate, context);
                if (delegateResult) {
                  if (delegateResult === ContinueSentinel) continue;
                  return delegateResult;
                }
              }
              if ("next" === context.method) context.sent = context._sent = context.arg; else if ("throw" === context.method) {
                if (state === GenStateSuspendedStart) {
                  state = GenStateCompleted;
                  throw context.arg;
                }
                context.dispatchException(context.arg);
              } else if ("return" === context.method) context.abrupt("return", context.arg);
              state = GenStateExecuting;
              var record = tryCatch(innerFn, self, context);
              if ("normal" === record.type) {
                state = context.done ? GenStateCompleted : GenStateSuspendedYield;
                if (record.arg === ContinueSentinel) continue;
                return {
                  value: record.arg,
                  done: context.done
                };
              } else if ("throw" === record.type) {
                state = GenStateCompleted;
                context.method = "throw";
                context.arg = record.arg;
              }
            }
          };
        }
        function maybeInvokeDelegate(delegate, context) {
          var method = delegate.iterator[context.method];
          if (method === undefined) {
            context.delegate = null;
            if ("throw" === context.method) {
              if (delegate.iterator["return"]) {
                context.method = "return";
                context.arg = undefined;
                maybeInvokeDelegate(delegate, context);
                if ("throw" === context.method) return ContinueSentinel;
              }
              context.method = "throw";
              context.arg = new TypeError("The iterator does not provide a 'throw' method");
            }
            return ContinueSentinel;
          }
          var record = tryCatch(method, delegate.iterator, context.arg);
          if ("throw" === record.type) {
            context.method = "throw";
            context.arg = record.arg;
            context.delegate = null;
            return ContinueSentinel;
          }
          var info = record.arg;
          if (!info) {
            context.method = "throw";
            context.arg = new TypeError("iterator result is not an object");
            context.delegate = null;
            return ContinueSentinel;
          }
          if (info.done) {
            context[delegate.resultName] = info.value;
            context.next = delegate.nextLoc;
            if ("return" !== context.method) {
              context.method = "next";
              context.arg = undefined;
            }
          } else return info;
          context.delegate = null;
          return ContinueSentinel;
        }
        defineIteratorMethods(Gp);
        Gp[toStringTagSymbol] = "Generator";
        Gp[iteratorSymbol] = function() {
          return this;
        };
        Gp.toString = function() {
          return "[object Generator]";
        };
        function pushTryEntry(locs) {
          var entry = {
            tryLoc: locs[0]
          };
          if (1 in locs) entry.catchLoc = locs[1];
          if (2 in locs) {
            entry.finallyLoc = locs[2];
            entry.afterLoc = locs[3];
          }
          this.tryEntries.push(entry);
        }
        function resetTryEntry(entry) {
          var record = entry.completion || {};
          record.type = "normal";
          delete record.arg;
          entry.completion = record;
        }
        function Context(tryLocsList) {
          this.tryEntries = [ {
            tryLoc: "root"
          } ];
          tryLocsList.forEach(pushTryEntry, this);
          this.reset(true);
        }
        exports.keys = function(object) {
          var keys = [];
          for (var key in object) keys.push(key);
          keys.reverse();
          return function next() {
            while (keys.length) {
              var key = keys.pop();
              if (key in object) {
                next.value = key;
                next.done = false;
                return next;
              }
            }
            next.done = true;
            return next;
          };
        };
        function values(iterable) {
          if (iterable) {
            var iteratorMethod = iterable[iteratorSymbol];
            if (iteratorMethod) return iteratorMethod.call(iterable);
            if ("function" === typeof iterable.next) return iterable;
            if (!isNaN(iterable.length)) {
              var i = -1, next = function next() {
                while (++i < iterable.length) if (hasOwn.call(iterable, i)) {
                  next.value = iterable[i];
                  next.done = false;
                  return next;
                }
                next.value = undefined;
                next.done = true;
                return next;
              };
              return next.next = next;
            }
          }
          return {
            next: doneResult
          };
        }
        exports.values = values;
        function doneResult() {
          return {
            value: undefined,
            done: true
          };
        }
        Context.prototype = {
          constructor: Context,
          reset: function reset(skipTempReset) {
            this.prev = 0;
            this.next = 0;
            this.sent = this._sent = undefined;
            this.done = false;
            this.delegate = null;
            this.method = "next";
            this.arg = undefined;
            this.tryEntries.forEach(resetTryEntry);
            if (!skipTempReset) for (var name in this) if ("t" === name.charAt(0) && hasOwn.call(this, name) && !isNaN(+name.slice(1))) this[name] = undefined;
          },
          stop: function stop() {
            this.done = true;
            var rootEntry = this.tryEntries[0];
            var rootRecord = rootEntry.completion;
            if ("throw" === rootRecord.type) throw rootRecord.arg;
            return this.rval;
          },
          dispatchException: function dispatchException(exception) {
            if (this.done) throw exception;
            var context = this;
            function handle(loc, caught) {
              record.type = "throw";
              record.arg = exception;
              context.next = loc;
              if (caught) {
                context.method = "next";
                context.arg = undefined;
              }
              return !!caught;
            }
            for (var i = this.tryEntries.length - 1; i >= 0; --i) {
              var entry = this.tryEntries[i];
              var record = entry.completion;
              if ("root" === entry.tryLoc) return handle("end");
              if (entry.tryLoc <= this.prev) {
                var hasCatch = hasOwn.call(entry, "catchLoc");
                var hasFinally = hasOwn.call(entry, "finallyLoc");
                if (hasCatch && hasFinally) {
                  if (this.prev < entry.catchLoc) return handle(entry.catchLoc, true); else if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc);
                } else if (hasCatch) {
                  if (this.prev < entry.catchLoc) return handle(entry.catchLoc, true);
                } else if (hasFinally) {
                  if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc);
                } else throw new Error("try statement without catch or finally");
              }
            }
          },
          abrupt: function abrupt(type, arg) {
            for (var i = this.tryEntries.length - 1; i >= 0; --i) {
              var entry = this.tryEntries[i];
              if (entry.tryLoc <= this.prev && hasOwn.call(entry, "finallyLoc") && this.prev < entry.finallyLoc) {
                var finallyEntry = entry;
                break;
              }
            }
            if (finallyEntry && ("break" === type || "continue" === type) && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc) finallyEntry = null;
            var record = finallyEntry ? finallyEntry.completion : {};
            record.type = type;
            record.arg = arg;
            if (finallyEntry) {
              this.method = "next";
              this.next = finallyEntry.finallyLoc;
              return ContinueSentinel;
            }
            return this.complete(record);
          },
          complete: function complete(record, afterLoc) {
            if ("throw" === record.type) throw record.arg;
            if ("break" === record.type || "continue" === record.type) this.next = record.arg; else if ("return" === record.type) {
              this.rval = this.arg = record.arg;
              this.method = "return";
              this.next = "end";
            } else if ("normal" === record.type && afterLoc) this.next = afterLoc;
            return ContinueSentinel;
          },
          finish: function finish(finallyLoc) {
            for (var i = this.tryEntries.length - 1; i >= 0; --i) {
              var entry = this.tryEntries[i];
              if (entry.finallyLoc === finallyLoc) {
                this.complete(entry.completion, entry.afterLoc);
                resetTryEntry(entry);
                return ContinueSentinel;
              }
            }
          },
          catch: function _catch(tryLoc) {
            for (var i = this.tryEntries.length - 1; i >= 0; --i) {
              var entry = this.tryEntries[i];
              if (entry.tryLoc === tryLoc) {
                var record = entry.completion;
                if ("throw" === record.type) {
                  var thrown = record.arg;
                  resetTryEntry(entry);
                }
                return thrown;
              }
            }
            throw new Error("illegal catch attempt");
          },
          delegateYield: function delegateYield(iterable, resultName, nextLoc) {
            this.delegate = {
              iterator: values(iterable),
              resultName: resultName,
              nextLoc: nextLoc
            };
            if ("next" === this.method) this.arg = undefined;
            return ContinueSentinel;
          }
        };
        return exports;
      }("object" === (false ? void 0 : _typeof(module)) ? module.exports : {});
      try {
        regeneratorRuntime = runtime;
      } catch (accidentalStrictMode) {
        Function("r", "regeneratorRuntime = r")(runtime);
      }
    }).call(this, __webpack_require__(5)(module));
  },
  26: function(module, exports, __webpack_require__) {
    "use strict";
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
    function _createForOfIteratorHelper(o, allowArrayLike) {
      var it;
      if ("undefined" === typeof Symbol || null == o[Symbol.iterator]) {
        if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && "number" === typeof o.length) {
          if (it) o = it;
          var i = 0;
          var F = function F() {};
          return {
            s: F,
            n: function n() {
              if (i >= o.length) return {
                done: true
              };
              return {
                done: false,
                value: o[i++]
              };
            },
            e: function e(_e) {
              throw _e;
            },
            f: F
          };
        }
        throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
      }
      var err, normalCompletion = true, didErr = false;
      return {
        s: function s() {
          it = o[Symbol.iterator]();
        },
        n: function n() {
          var step = it.next();
          normalCompletion = step.done;
          return step;
        },
        e: function e(_e2) {
          didErr = true;
          err = _e2;
        },
        f: function f() {
          try {
            if (!normalCompletion && null != it["return"]) it["return"]();
          } finally {
            if (didErr) throw err;
          }
        }
      };
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
    function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {
      try {
        var info = gen[key](arg);
        var value = info.value;
      } catch (error) {
        reject(error);
        return;
      }
      if (info.done) resolve(value); else Promise.resolve(value).then(_next, _throw);
    }
    function _asyncToGenerator(fn) {
      return function() {
        var self = this, args = arguments;
        return new Promise((function(resolve, reject) {
          var gen = fn.apply(self, args);
          function _next(value) {
            asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value);
          }
          function _throw(err) {
            asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err);
          }
          _next(void 0);
        }));
      };
    }
    function urlGlobToRegex(matchPattern) {
      return "^" + matchPattern.replace(/[.]/g, "\\.").replace(/[?]/, ".").replace(/^[*]:/, "https?").replace(/^(https[?]?:[/][/])[*]/, "$1[^/:]+").replace(/[/][*]/, "/?.+").replace(/[*]/g, ".+").replace(/[/]/g, "\\/");
    }
    function p(_x) {
      return _p.apply(this, arguments);
    }
    function _p() {
      _p = _asyncToGenerator(regeneratorRuntime.mark((function _callee4(fn) {
        var _len, args, _key, _args4 = arguments;
        return regeneratorRuntime.wrap((function _callee4$(_context4) {
          while (1) switch (_context4.prev = _context4.next) {
           case 0:
            for (_len = _args4.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) args[_key - 1] = _args4[_key];
            return _context4.abrupt("return", new Promise((function(resolve, reject) {
              fn.apply(void 0, args.concat([ function(result) {
                if (chrome.runtime.lastError) reject(chrome.runtime.lastError); else resolve(result);
              } ]));
            })));

           case 2:
           case "end":
            return _context4.stop();
          }
        }), _callee4);
      })));
      return _p.apply(this, arguments);
    }
    function isOriginPermitted(_x2) {
      return _isOriginPermitted.apply(this, arguments);
    }
    function _isOriginPermitted() {
      _isOriginPermitted = _asyncToGenerator(regeneratorRuntime.mark((function _callee5(url) {
        return regeneratorRuntime.wrap((function _callee5$(_context5) {
          while (1) switch (_context5.prev = _context5.next) {
           case 0:
            return _context5.abrupt("return", p(chrome.permissions.contains, {
              origins: [ new URL(url).origin + "/*" ]
            }));

           case 1:
           case "end":
            return _context5.stop();
          }
        }), _callee5);
      })));
      return _isOriginPermitted.apply(this, arguments);
    }
    function wasPreviouslyLoaded(_x3, _x4) {
      return _wasPreviouslyLoaded.apply(this, arguments);
    }
    function _wasPreviouslyLoaded() {
      _wasPreviouslyLoaded = _asyncToGenerator(regeneratorRuntime.mark((function _callee6(tabId, loadCheck) {
        var result;
        return regeneratorRuntime.wrap((function _callee6$(_context6) {
          while (1) switch (_context6.prev = _context6.next) {
           case 0:
            _context6.next = 2;
            return p(chrome.tabs.executeScript, tabId, {
              code: loadCheck,
              runAt: "document_start"
            });

           case 2:
            result = _context6.sent;
            return _context6.abrupt("return", result && result[0]);

           case 4:
           case "end":
            return _context6.stop();
          }
        }), _callee6);
      })));
      return _wasPreviouslyLoaded.apply(this, arguments);
    }
    if (!chrome.contentScripts) chrome.contentScripts = {
      register: function register(contentScriptOptions, callback) {
        return _asyncToGenerator(regeneratorRuntime.mark((function _callee3() {
          var _contentScriptOptions, js, _contentScriptOptions2, css, allFrames, matchAboutBlank, matches, runAt, loadCheck, matchesRegex, listener, registeredContentScript;
          return regeneratorRuntime.wrap((function _callee3$(_context3) {
            while (1) switch (_context3.prev = _context3.next) {
             case 0:
              _contentScriptOptions = contentScriptOptions.js, js = void 0 === _contentScriptOptions ? [] : _contentScriptOptions, 
              _contentScriptOptions2 = contentScriptOptions.css, css = void 0 === _contentScriptOptions2 ? [] : _contentScriptOptions2, 
              allFrames = contentScriptOptions.allFrames, matchAboutBlank = contentScriptOptions.matchAboutBlank, 
              matches = contentScriptOptions.matches, runAt = contentScriptOptions.runAt;
              loadCheck = "document[".concat(JSON.stringify(JSON.stringify({
                js: js,
                css: css
              })), "]");
              matchesRegex = new RegExp(matches.map(urlGlobToRegex).join("$") + "$");
              listener = function() {
                var _ref2 = _asyncToGenerator(regeneratorRuntime.mark((function _callee(tabId, _ref) {
                  var status, _yield$p, url, _iterator, _step, file, _iterator2, _step2, _file;
                  return regeneratorRuntime.wrap((function _callee$(_context) {
                    while (1) switch (_context.prev = _context.next) {
                     case 0:
                      status = _ref.status;
                      if (!("loading" !== status)) {
                        _context.next = 3;
                        break;
                      }
                      return _context.abrupt("return");

                     case 3:
                      _context.next = 5;
                      return p(chrome.tabs.get, tabId);

                     case 5:
                      _yield$p = _context.sent;
                      url = _yield$p.url;
                      _context.t1 = !url || !matchesRegex.test(url);
                      if (_context.t1) {
                        _context.next = 12;
                        break;
                      }
                      _context.next = 11;
                      return isOriginPermitted(url);

                     case 11:
                      _context.t1 = !_context.sent;

                     case 12:
                      _context.t0 = _context.t1;
                      if (_context.t0) {
                        _context.next = 17;
                        break;
                      }
                      _context.next = 16;
                      return wasPreviouslyLoaded(tabId, loadCheck);

                     case 16:
                      _context.t0 = _context.sent;

                     case 17:
                      if (!_context.t0) {
                        _context.next = 19;
                        break;
                      }
                      return _context.abrupt("return");

                     case 19:
                      _iterator = _createForOfIteratorHelper(css);
                      try {
                        for (_iterator.s(); !(_step = _iterator.n()).done; ) {
                          file = _step.value;
                          chrome.tabs.insertCSS(tabId, _objectSpread(_objectSpread({}, file), {}, {
                            matchAboutBlank: matchAboutBlank,
                            allFrames: allFrames,
                            runAt: runAt || "document_start"
                          }));
                        }
                      } catch (err) {
                        _iterator.e(err);
                      } finally {
                        _iterator.f();
                      }
                      _iterator2 = _createForOfIteratorHelper(js);
                      try {
                        for (_iterator2.s(); !(_step2 = _iterator2.n()).done; ) {
                          _file = _step2.value;
                          chrome.tabs.executeScript(tabId, _objectSpread(_objectSpread({}, _file), {}, {
                            matchAboutBlank: matchAboutBlank,
                            allFrames: allFrames,
                            runAt: runAt
                          }));
                        }
                      } catch (err) {
                        _iterator2.e(err);
                      } finally {
                        _iterator2.f();
                      }
                      chrome.tabs.executeScript(tabId, {
                        code: "".concat(loadCheck, " = true"),
                        runAt: "document_start",
                        allFrames: allFrames
                      });

                     case 24:
                     case "end":
                      return _context.stop();
                    }
                  }), _callee);
                })));
                return function listener(_x5, _x6) {
                  return _ref2.apply(this, arguments);
                };
              }();
              chrome.tabs.onUpdated.addListener(listener);
              registeredContentScript = {
                unregister: function unregister() {
                  return _asyncToGenerator(regeneratorRuntime.mark((function _callee2() {
                    return regeneratorRuntime.wrap((function _callee2$(_context2) {
                      while (1) switch (_context2.prev = _context2.next) {
                       case 0:
                        return _context2.abrupt("return", p(chrome.tabs.onUpdated.removeListener.bind(chrome.tabs.onUpdated), listener));

                       case 1:
                       case "end":
                        return _context2.stop();
                      }
                    }), _callee2);
                  })))();
                }
              };
              if ("function" === typeof callback) callback(registeredContentScript);
              return _context3.abrupt("return", Promise.resolve(registeredContentScript));

             case 8:
             case "end":
              return _context3.stop();
            }
          }), _callee3);
        })))();
      }
    };
  },
  29: function(module, __webpack_exports__, __webpack_require__) {
    "use strict";
    __webpack_require__.r(__webpack_exports__);
    var constants = __webpack_require__(0);
    function _defineProperty(obj, key, value) {
      if (key in obj) Object.defineProperty(obj, key, {
        value: value,
        enumerable: true,
        configurable: true,
        writable: true
      }); else obj[key] = value;
      return obj;
    }
    var STORAGE_ITEMS = {
      PROTOCOL: "protocol",
      MODIFY_PAGES: "modify-pages"
    };
    var DEFAULTS = {
      PROTOCOL: constants["a"].HTTPS,
      MODIFY_PAGES: true
    };
    var saveToStorage = function saveToStorage(key, value) {
      return new Promise((function(resolve, reject) {
        chrome.storage.local.set(_defineProperty({}, key, value), (function() {
          if (chrome.runtime.lastError) reject(chrome.runtime.lastError.message); else resolve();
        }));
      }));
    };
    var getFromStorage = function getFromStorage(key) {
      return new Promise((function(resolve, reject) {
        chrome.storage.local.get([ key ], (function(result) {
          if (chrome.runtime.lastError) reject(chrome.runtime.lastError.message); else resolve(result[key]);
        }));
      }));
    };
    function getProtocol() {
      return new Promise((function(resolve) {
        getFromStorage(STORAGE_ITEMS.PROTOCOL).then((function(protocol) {
          resolve(protocol || DEFAULTS.PROTOCOL);
        }))["catch"]((function() {
          resolve(DEFAULTS.PROTOCOL);
        }));
      }));
    }
    function saveProtocol(protocol) {
      return new Promise((function(resolve) {
        saveToStorage(STORAGE_ITEMS.PROTOCOL, protocol).then(resolve)["catch"]((function() {
          resolve();
        }));
      }));
    }
    function getModifyPages() {
      return new Promise((function(resolve) {
        getFromStorage(STORAGE_ITEMS.MODIFY_PAGES).then((function(allow) {
          resolve(null == allow ? DEFAULTS.MODIFY_PAGES : allow);
        }))["catch"]((function() {
          resolve(DEFAULTS.MODIFY_PAGES);
        }));
      }));
    }
    function saveModifyPages(allow) {
      return new Promise((function(resolve) {
        saveToStorage(STORAGE_ITEMS.MODIFY_PAGES, allow).then(resolve)["catch"]((function() {
          resolve();
        }));
      }));
    }
    __webpack_require__(25);
    __webpack_require__(26);
    function _createForOfIteratorHelper(o, allowArrayLike) {
      var it;
      if ("undefined" === typeof Symbol || null == o[Symbol.iterator]) {
        if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && "number" === typeof o.length) {
          if (it) o = it;
          var i = 0;
          var F = function F() {};
          return {
            s: F,
            n: function n() {
              if (i >= o.length) return {
                done: true
              };
              return {
                done: false,
                value: o[i++]
              };
            },
            e: function e(_e) {
              throw _e;
            },
            f: F
          };
        }
        throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
      }
      var err, normalCompletion = true, didErr = false;
      return {
        s: function s() {
          it = o[Symbol.iterator]();
        },
        n: function n() {
          var step = it.next();
          normalCompletion = step.done;
          return step;
        },
        e: function e(_e2) {
          didErr = true;
          err = _e2;
        },
        f: function f() {
          try {
            if (!normalCompletion && null != it["return"]) it["return"]();
          } finally {
            if (didErr) throw err;
          }
        }
      };
    }
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
    function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {
      try {
        var info = gen[key](arg);
        var value = info.value;
      } catch (error) {
        reject(error);
        return;
      }
      if (info.done) resolve(value); else Promise.resolve(value).then(_next, _throw);
    }
    function _asyncToGenerator(fn) {
      return function() {
        var self = this, args = arguments;
        return new Promise((function(resolve, reject) {
          var gen = fn.apply(self, args);
          function _next(value) {
            asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value);
          }
          function _throw(err) {
            asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err);
          }
          _next(void 0);
        }));
      };
    }
    function getManifestPermissions() {
      return _getManifestPermissions.apply(this, arguments);
    }
    function _getManifestPermissions() {
      _getManifestPermissions = _asyncToGenerator(regeneratorRuntime.mark((function _callee() {
        return regeneratorRuntime.wrap((function _callee$(_context) {
          while (1) switch (_context.prev = _context.next) {
           case 0:
            return _context.abrupt("return", getManifestPermissionsSync());

           case 1:
           case "end":
            return _context.stop();
          }
        }), _callee);
      })));
      return _getManifestPermissions.apply(this, arguments);
    }
    function getManifestPermissionsSync() {
      var _a, _b;
      var manifest = chrome.runtime.getManifest();
      var manifestPermissions = {
        origins: [],
        permissions: []
      };
      var list = new Set([].concat(_toConsumableArray(null !== (_a = manifest.permissions) && void 0 !== _a ? _a : []), _toConsumableArray((null !== (_b = manifest.content_scripts) && void 0 !== _b ? _b : []).flatMap((function(config) {
        var _a;
        return null !== (_a = config.matches) && void 0 !== _a ? _a : [];
      })))));
      var _step, _iterator = _createForOfIteratorHelper(list);
      try {
        for (_iterator.s(); !(_step = _iterator.n()).done; ) {
          var permission = _step.value;
          if (permission.includes("://")) manifestPermissions.origins.push(permission); else manifestPermissions.permissions.push(permission);
        }
      } catch (err) {
        _iterator.e(err);
      } finally {
        _iterator.f();
      }
      return manifestPermissions;
    }
    function getAdditionalPermissions() {
      return _getAdditionalPermissions.apply(this, arguments);
    }
    function _getAdditionalPermissions() {
      _getAdditionalPermissions = _asyncToGenerator(regeneratorRuntime.mark((function _callee2() {
        var manifestPermissions;
        return regeneratorRuntime.wrap((function _callee2$(_context2) {
          while (1) switch (_context2.prev = _context2.next) {
           case 0:
            manifestPermissions = getManifestPermissionsSync();
            return _context2.abrupt("return", new Promise((function(resolve) {
              chrome.permissions.getAll((function(currentPermissions) {
                var _a, _b;
                var additionalPermissions = {
                  origins: [],
                  permissions: []
                };
                var _step2, _iterator2 = _createForOfIteratorHelper(null !== (_a = currentPermissions.origins) && void 0 !== _a ? _a : []);
                try {
                  for (_iterator2.s(); !(_step2 = _iterator2.n()).done; ) {
                    var origin = _step2.value;
                    if (!manifestPermissions.origins.includes(origin)) additionalPermissions.origins.push(origin);
                  }
                } catch (err) {
                  _iterator2.e(err);
                } finally {
                  _iterator2.f();
                }
                var _step3, _iterator3 = _createForOfIteratorHelper(null !== (_b = currentPermissions.permissions) && void 0 !== _b ? _b : []);
                try {
                  for (_iterator3.s(); !(_step3 = _iterator3.n()).done; ) {
                    var permission = _step3.value;
                    if (!manifestPermissions.permissions.includes(permission)) additionalPermissions.permissions.push(permission);
                  }
                } catch (err) {
                  _iterator3.e(err);
                } finally {
                  _iterator3.f();
                }
                resolve(additionalPermissions);
              }));
            })));

           case 2:
           case "end":
            return _context2.stop();
          }
        }), _callee2);
      })));
      return _getAdditionalPermissions.apply(this, arguments);
    }
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
          menu_defineProperty(target, key, source[key]);
        })); else if (Object.getOwnPropertyDescriptors) Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); else ownKeys(Object(source)).forEach((function(key) {
          Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
        }));
      }
      return target;
    }
    function menu_defineProperty(obj, key, value) {
      if (key in obj) Object.defineProperty(obj, key, {
        value: value,
        enumerable: true,
        configurable: true,
        writable: true
      }); else obj[key] = value;
      return obj;
    }
    var MENU_ITEM_ID = "jetbrains-toolbox-toggle-domain";
    var DETECT_ENTERPRISE_CONTENT_SCRIPT = "jetbrains-toolbox-detect-enterprise.js";
    var contentScriptUnregistrators = new Map;
    var activeTabId = null;
    function getTabUrl(tabId) {
      return new Promise((function(resolve, reject) {
        chrome.tabs.executeScript(tabId, {
          code: "window.location.href"
        }, (function(result) {
          if (!chrome.runtime.lastError && result && result.length > 0) {
            var url = result[0];
            resolve(url);
          } else reject();
        }));
      }));
    }
    function getDomain(url) {
      var parsedUrl = new URL(url);
      return "".concat(parsedUrl.protocol, "//").concat(parsedUrl.hostname);
    }
    function reloadTab(tabId) {
      chrome.tabs.executeScript(tabId, {
        code: "window.location.reload()"
      }, (function() {
        return chrome.runtime.lastError;
      }));
    }
    function createMenu() {
      var createProperties = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
      return new Promise((function(resolve) {
        var contexts = [ chrome.contextMenus.ContextType.BROWSER_ACTION ];
        var documentUrlPatterns = [ "http://*/*", "https://*/*" ];
        chrome.contextMenus.removeAll((function() {
          void chrome.runtime.lastError;
          chrome.contextMenus.create(_objectSpread(_objectSpread({
            id: MENU_ITEM_ID,
            type: chrome.contextMenus.ItemType.CHECKBOX,
            title: "Enable on this domain"
          }, createProperties), {}, {
            contexts: contexts,
            documentUrlPatterns: documentUrlPatterns
          }), (function() {
            resolve();
          }));
        }));
      }));
    }
    function manifestPermissionGranted(url) {
      return new Promise((function(resolve, reject) {
        getManifestPermissions().then((function(manifestPermissions) {
          var domainMatch = generateDomainMatch(url);
          var granted = manifestPermissions.origins.includes(domainMatch);
          if (granted) resolve(); else reject();
        }))["catch"]((function() {
          reject();
        }));
      }));
    }
    function additionalPermissionGranted(url) {
      return new Promise((function(resolve, reject) {
        var permissions = generateDomainPermissions(url);
        chrome.permissions.contains(permissions, (function(result) {
          if (result) resolve(); else reject();
        }));
      }));
    }
    function generateDomainMatch(url) {
      var domain = getDomain(url);
      return "".concat(domain, "/*");
    }
    function generateDomainPermissions(url) {
      return {
        origins: [ generateDomainMatch(url) ]
      };
    }
    function updateMenuItem(updateProperties) {
      chrome.contextMenus.update(MENU_ITEM_ID, _objectSpread({
        type: chrome.contextMenus.ItemType.CHECKBOX
      }, updateProperties), (function() {
        void chrome.runtime.lastError;
      }));
    }
    function updateMenu(tabId) {
      getTabUrl(tabId).then((function(tabUrl) {
        manifestPermissionGranted(tabUrl).then((function() {
          updateMenuItem({
            enabled: false,
            checked: true
          });
        }))["catch"]((function() {
          additionalPermissionGranted(tabUrl).then((function() {
            updateMenuItem({
              enabled: true,
              checked: true
            });
          }))["catch"]((function() {
            updateMenuItem({
              enabled: true,
              checked: false
            });
          }));
        }));
      }))["catch"]((function() {
        updateMenuItem({
          enabled: true,
          checked: false
        });
      }));
    }
    function toggleDomainPermissions(request, url) {
      return new Promise((function(resolve, reject) {
        var permissions = generateDomainPermissions(url);
        var updatePermissions = request ? chrome.permissions.request : chrome.permissions.remove;
        updatePermissions(permissions, (function(success) {
          if (success) resolve(); else reject();
        }));
      }));
    }
    function handleMenuItemClick(info, tab) {
      if (info.menuItemId !== MENU_ITEM_ID) return;
      if (tab.url.startsWith("chrome://")) {
        updateMenu(tab.id);
        return;
      }
      var requestPermissions = info.checked;
      toggleDomainPermissions(requestPermissions, tab.url).then((function() {
        var domainMatch = generateDomainMatch(tab.url);
        if (requestPermissions) registerEnterpriseContentScripts(domainMatch).then((function() {
          reloadTab(tab.id);
        })); else {
          var unregistrator = contentScriptUnregistrators.get(domainMatch);
          unregistrator.unregister();
          contentScriptUnregistrators["delete"](tab.url);
          reloadTab(tab.id);
        }
      }))["catch"]((function() {
        updateMenu(tab.id);
      }));
    }
    function handleTabActivated(activeInfo) {
      activeTabId = activeInfo.tabId;
      updateMenu(activeInfo.tabId);
    }
    function handleTabUpdated(tabId, changeInfo) {
      if (activeTabId === tabId && "complete" === changeInfo.status) updateMenu(tabId);
    }
    function registerEnterpriseContentScripts(domainMatch) {
      return new Promise((function(resolve, reject) {
        var contentScriptOptions = {
          matches: [ domainMatch ],
          js: [ {
            file: DETECT_ENTERPRISE_CONTENT_SCRIPT
          } ]
        };
        (window.browser || window.chrome).contentScripts.register(contentScriptOptions).then((function(newUnregistrator) {
          if (contentScriptUnregistrators.has(domainMatch)) {
            var prevUnregistrator = contentScriptUnregistrators.get(domainMatch);
            prevUnregistrator.unregister();
          }
          contentScriptUnregistrators.set(domainMatch, newUnregistrator);
          resolve();
        }))["catch"]((function() {
          void chrome.runtime.lastError;
          reject();
        }));
      }));
    }
    function registerContentScripts() {
      getAdditionalPermissions().then((function(permissions) {
        permissions.origins.forEach((function(domainMatch) {
          registerEnterpriseContentScripts(domainMatch)["catch"]((function() {}));
        }));
      }));
    }
    function createExtensionMenu() {
      registerContentScripts();
      createMenu()["catch"]((function() {}));
      chrome.contextMenus.onClicked.addListener(handleMenuItemClick);
      chrome.tabs.onActivated.addListener(handleTabActivated);
      chrome.tabs.onUpdated.addListener(handleTabUpdated);
    }
    var handleInstalled = function handleInstalled() {
      var manifest = chrome.runtime.getManifest();
      var uninstallUrl = "https://www.jetbrains.com/toolbox-app/uninstall/extension/?version=".concat(manifest.version);
      chrome.runtime.setUninstallURL(uninstallUrl, (function() {
        void chrome.runtime.lastError;
      }));
    };
    var background_handleMessage = function handleMessage(message, sender, sendResponse) {
      switch (message.type) {
       case "enable-page-action":
        chrome.browserAction.setIcon({
          tabId: sender.tab.id,
          path: {
            128: "icon-128.png"
          }
        });
        var project = message.project, https = message.https, ssh = message.ssh;
        var uri = encodeURI("jetbrains-toolbox-clone-popup.html?project=".concat(project, "&https=").concat(https, "&ssh=").concat(ssh));
        chrome.browserAction.setPopup({
          tabId: sender.tab.id,
          popup: chrome.runtime.getURL(uri)
        });
        break;

       case "disable-page-action":
        chrome.browserAction.setIcon({
          tabId: sender.tab.id,
          path: {
            128: "icon-disabled-128.png"
          }
        });
        chrome.browserAction.setPopup({
          tabId: sender.tab.id,
          popup: chrome.runtime.getURL("jetbrains-toolbox-disabled-popup.html")
        });
        break;

       case "get-protocol":
        getProtocol().then((function(protocol) {
          sendResponse({
            protocol: protocol
          });
        }));
        return true;

       case "save-protocol":
        saveProtocol(message.protocol).then((function() {
          chrome.runtime.sendMessage({
            type: "protocol-changed",
            newValue: message.protocol
          });
        }))["catch"]((function() {}));
        break;

       case "get-modify-pages":
        getModifyPages().then((function(allow) {
          sendResponse({
            allow: allow
          });
        }));
        return true;

       case "save-modify-pages":
        saveModifyPages(message.allow).then((function() {
          chrome.tabs.query({}, (function(tabs) {
            tabs.forEach((function(t) {
              chrome.tabs.sendMessage(t.id, {
                type: "modify-pages-changed",
                newValue: message.allow
              });
            }));
          }));
        }))["catch"]((function() {}));
        break;
      }
      return;
    };
    chrome.runtime.onInstalled.addListener(handleInstalled);
    chrome.runtime.onMessage.addListener(background_handleMessage);
    createExtensionMenu();
  },
  5: function(module, exports) {
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
  }
});