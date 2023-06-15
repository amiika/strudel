"use strict";

var _context4, _context5, _context6, _context7, _context8;
var _typeof = require("@babel/runtime-corejs3/helpers/typeof");
var _WeakMap = require("@babel/runtime-corejs3/core-js-stable/weak-map");
var _Object$defineProperty = require("@babel/runtime-corejs3/core-js-stable/object/define-property");
var _Object$getOwnPropertyDescriptor = require("@babel/runtime-corejs3/core-js-stable/object/get-own-property-descriptor");
var _forEachInstanceProperty = require("@babel/runtime-corejs3/core-js-stable/instance/for-each");
var _Object$keys = require("@babel/runtime-corejs3/core-js-stable/object/keys");
var _interopRequireDefault = require("@babel/runtime-corejs3/helpers/interopRequireDefault");
_Object$defineProperty(exports, "__esModule", {
  value: true
});
var _exportNames = {
  defaultPrebake: true,
  initStrudel: true,
  hush: true,
  evaluate: true
};
exports.defaultPrebake = defaultPrebake;
exports.evaluate = evaluate;
exports.hush = hush;
exports.initStrudel = initStrudel;
var _promise = _interopRequireDefault(require("@babel/runtime-corejs3/core-js-stable/promise"));
require("core-js/modules/es.error.cause.js");
require("core-js/modules/es.error.to-string.js");
require("core-js/modules/es.array.iterator.js");
require("core-js/modules/es.object.to-string.js");
require("core-js/modules/es.promise.js");
require("core-js/modules/es.string.iterator.js");
require("core-js/modules/web.dom-collections.iterator.js");
var _regenerator = _interopRequireDefault(require("@babel/runtime-corejs3/regenerator"));
var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime-corejs3/helpers/esm/objectWithoutProperties"));
var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime-corejs3/helpers/esm/asyncToGenerator"));
var _core = require("@strudel.cycles/core");
_forEachInstanceProperty(_context4 = _Object$keys(_core)).call(_context4, function (key) {
  if (key === "default" || key === "__esModule") return;
  if (Object.prototype.hasOwnProperty.call(_exportNames, key)) return;
  if (key in exports && exports[key] === _core[key]) return;
  _Object$defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _core[key];
    }
  });
});
var _webaudio = require("@strudel.cycles/webaudio");
_forEachInstanceProperty(_context5 = _Object$keys(_webaudio)).call(_context5, function (key) {
  if (key === "default" || key === "__esModule") return;
  if (Object.prototype.hasOwnProperty.call(_exportNames, key)) return;
  if (key in exports && exports[key] === _webaudio[key]) return;
  _Object$defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _webaudio[key];
    }
  });
});
var _transpiler = require("@strudel.cycles/transpiler");
_forEachInstanceProperty(_context6 = _Object$keys(_transpiler)).call(_context6, function (key) {
  if (key === "default" || key === "__esModule") return;
  if (Object.prototype.hasOwnProperty.call(_exportNames, key)) return;
  if (key in exports && exports[key] === _transpiler[key]) return;
  _Object$defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _transpiler[key];
    }
  });
});
var _mini = require("@strudel.cycles/mini");
_forEachInstanceProperty(_context7 = _Object$keys(_mini)).call(_context7, function (key) {
  if (key === "default" || key === "__esModule") return;
  if (Object.prototype.hasOwnProperty.call(_exportNames, key)) return;
  if (key in exports && exports[key] === _mini[key]) return;
  _Object$defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _mini[key];
    }
  });
});
var _tonal = require("@strudel.cycles/tonal");
_forEachInstanceProperty(_context8 = _Object$keys(_tonal)).call(_context8, function (key) {
  if (key === "default" || key === "__esModule") return;
  if (Object.prototype.hasOwnProperty.call(_exportNames, key)) return;
  if (key in exports && exports[key] === _tonal[key]) return;
  _Object$defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _tonal[key];
    }
  });
});
var _excluded = ["prebake"]; //export * from '@strudel.cycles/soundfonts';
// import { registerSoundfonts } from '@strudel.cycles/soundfonts';
function _getRequireWildcardCache(nodeInterop) { if (typeof _WeakMap !== "function") return null; var cacheBabelInterop = new _WeakMap(); var cacheNodeInterop = new _WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = _Object$defineProperty && _Object$getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? _Object$getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { _Object$defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
// init logic
function defaultPrebake() {
  return _defaultPrebake.apply(this, arguments);
} // when this function finishes, everything is initialized
function _defaultPrebake() {
  _defaultPrebake = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee2() {
    var loadModules;
    return _regenerator["default"].wrap(function _callee2$(_context2) {
      while (1) switch (_context2.prev = _context2.next) {
        case 0:
          loadModules = (0, _core.evalScope)(_core.evalScope, _core.controls, _promise["default"].resolve().then(function () {
            return _interopRequireWildcard(require('@strudel.cycles/core'));
          }), _promise["default"].resolve().then(function () {
            return _interopRequireWildcard(require('@strudel.cycles/mini'));
          }), _promise["default"].resolve().then(function () {
            return _interopRequireWildcard(require('@strudel.cycles/tonal'));
          }), _promise["default"].resolve().then(function () {
            return _interopRequireWildcard(require('@strudel.cycles/webaudio'));
          }), {
            hush: hush,
            evaluate: evaluate
          });
          _context2.next = 3;
          return _promise["default"].all([loadModules, (0, _webaudio.registerSynthSounds)() /* , registerSoundfonts() */]);
        case 3:
        case "end":
          return _context2.stop();
      }
    }, _callee2);
  }));
  return _defaultPrebake.apply(this, arguments);
}
var initDone;
var scheduler;
function initStrudel() {
  var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  (0, _webaudio.initAudioOnFirstClick)();
  (0, _mini.miniAllStrings)();
  var prebake = options.prebake,
    schedulerOptions = (0, _objectWithoutProperties2["default"])(options, _excluded);
  initDone = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee() {
    return _regenerator["default"].wrap(function _callee$(_context) {
      while (1) switch (_context.prev = _context.next) {
        case 0:
          _context.next = 2;
          return defaultPrebake();
        case 2:
          _context.next = 4;
          return prebake === null || prebake === void 0 ? void 0 : prebake();
        case 4:
        case "end":
          return _context.stop();
      }
    }, _callee);
  }))();
  scheduler = (0, _webaudio.webaudioScheduler)(schedulerOptions);
}
window.initStrudel = initStrudel;

// this method will play the pattern on the default scheduler
_core.Pattern.prototype.play = function () {
  var _this = this;
  if (!scheduler) {
    throw new Error('.play: no scheduler found. Have you called init?');
  }
  initDone.then(function () {
    scheduler.setPattern(_this, true);
  });
  return this;
};

// stop playback
function hush() {
  scheduler.stop();
}

// evaluate and play the given code using the transpiler
function evaluate(_x) {
  return _evaluate2.apply(this, arguments);
}
function _evaluate2() {
  _evaluate2 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee3(code) {
    var autoplay,
      _yield$_evaluate,
      pattern,
      _args3 = arguments;
    return _regenerator["default"].wrap(function _callee3$(_context3) {
      while (1) switch (_context3.prev = _context3.next) {
        case 0:
          autoplay = _args3.length > 1 && _args3[1] !== undefined ? _args3[1] : true;
          _context3.next = 3;
          return (0, _transpiler.evaluate)(code);
        case 3:
          _yield$_evaluate = _context3.sent;
          pattern = _yield$_evaluate.pattern;
          autoplay && pattern.play();
        case 6:
        case "end":
          return _context3.stop();
      }
    }, _callee3);
  }));
  return _evaluate2.apply(this, arguments);
}
