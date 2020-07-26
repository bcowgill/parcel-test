// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles

// eslint-disable-next-line no-global-assign
parcelRequire = (function (modules, cache, entry, globalName) {
  // Save the require from previous bundle to this closure if any
  var previousRequire = typeof parcelRequire === 'function' && parcelRequire;
  var nodeRequire = typeof require === 'function' && require;

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire = typeof parcelRequire === 'function' && parcelRequire;
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error('Cannot find module \'' + name + '\'');
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;

      var module = cache[name] = new newRequire.Module(name);

      modules[name][0].call(module.exports, localRequire, module, module.exports, this);
    }

    return cache[name].exports;

    function localRequire(x){
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x){
      return modules[name][1][x] || x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [function (require, module) {
      module.exports = exports;
    }, {}];
  };

  for (var i = 0; i < entry.length; i++) {
    newRequire(entry[i]);
  }

  if (entry.length) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(entry[entry.length - 1]);

    // CommonJS
    if (typeof exports === "object" && typeof module !== "undefined") {
      module.exports = mainExports;

    // RequireJS
    } else if (typeof define === "function" && define.amd) {
     define(function () {
       return mainExports;
     });

    // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }

  // Override the current require with this new one
  return newRequire;
})({3:[function(require,module,exports) {

},{}],4:[function(require,module,exports) {
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
const thing = 'THING';
exports.default = thing;
const that = exports.that = 'THAT';
},{}],1:[function(require,module,exports) {
"use strict";

var __importDefault = this && this.__importDefault || function (mod) {
    return mod && mod.__esModule ? mod : { "default": mod };
};
exports.__esModule = true;
require("./styles.scss");
// sometimes this works
//import thing from './facade';
//   import { that } from './facade';
// and sometimes you have to import directly
var facade_1 = __importDefault(require("./facade/facade"));
var facade_2 = require("./facade/facade");
console.log("typescript. The " + facade_1["default"] + " is, I am " + facade_2.that + " guy!");
function getData() {
    return {
        framework: 'Typescript',
        packager: 'Parcel'
    };
}
var data = getData();
if (typeof document !== 'undefined') {
    var framework_1 = document.getElementById('tsapp');
    var render_1 = function render_1() {
        framework_1.style.color = '#ff3e96';
        framework_1.style.fontSize = '2rem';
        framework_1.style.fontWeight = 'bold';
        framework_1.innerHTML = "<h1>Hello from " + data.framework + " and " + data.packager + "!</h1><p>The " + facade_1["default"] + " is, I am " + facade_2.that + " guy!</p>";
    };
    window.addEventListener('load', function () {
        setTimeout(render_1, 1000);
    });
}
console.log("Hello from " + data.framework + " and " + data.packager + "!");
},{"./styles.scss":3,"./facade/facade":4}]},{},[1], null)
//# sourceMappingURL=/typescript.map