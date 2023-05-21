"use strict";
(self["webpackChunkpubsub_to_dos_app"] = self["webpackChunkpubsub_to_dos_app"] || []).push([["index"],{

/***/ "./node_modules/css-loader/dist/cjs.js!./src/styles.css":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/styles.css ***!
  \**************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/getUrl.js */ "./node_modules/css-loader/dist/runtime/getUrl.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);
// Imports



var ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ./honeycomb.png */ "./src/honeycomb.png"), __webpack_require__.b);
var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, "* {\n    margin: 0;\n    padding: 0;\n    box-sizing: border-box;\n}\n\n:root {\n    --form_colour: rgb(255, 222, 162);\n}\n\nbody {\n    font-family:'Roboto', sans-serif;\n    width: 100vw;\n    height: 100vh;\n}\n\nmain {\n    display: flex;\n    flex-direction: column;\n    width: 100%;\n    height: 100vh;\n    margin: 0 auto;\n}\n\nheader {\n    margin: 2vh 5vw 0 auto;\n    height: 15vh;\n    max-width: 600px;\n    display: flex;\n    justify-content:flex-end; \n    align-items: center;\n}\n\nh1 {\n   text-decoration: underline;\n}\n\n#icon {\n    /* <a href=\"https://www.flaticon.com/free-icons/bee\" title=\"bee icons\">Bee icons created by Eucalyp - Flaticon</a> */\n    background: url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ");\n    width: 80px;\n    margin: 5px;\n}\n\nnav {\n    width: 50%;\n    display: flex;\n    flex-direction: row;\n    justify-content: center;\n}\n\nnav > div {\n    margin: 5px;\n    text-align: center;\n    padding-top: 20px;\n}\n\n#hexagon {\n    width: 100px;\n    height: 57.735px;\n    background: orange;\n    position: relative;\n  }\n  #hexagon::before {\n    content: \"\";\n    position: absolute;\n    top: -28.8675px;\n    left: 0;\n    width: 0;\n    height: 0;\n    border-left: 50px solid transparent;\n    border-right: 50px solid transparent;\n    border-bottom: 28.8675px solid orange;;\n  }\n  #hexagon::after {\n    content: \"\";\n    position: absolute;\n    bottom: -28.8675px;\n    left: 0;\n    width: 0;\n    height: 0;\n    border-left: 50px solid transparent;\n    border-right: 50px solid transparent;\n    border-top: 28.8675px solid orange;\n  }\n\narticle {\n    display: grid;\n    grid-template: auto / 6fr 2fr 2fr;\n    gap: 20px 10px;\n    margin: 2vh 5vw 0 5vw;\n}\n\narticle > div {\n    border: solid orange;\n    border-radius: 10px;\n    height: 60px;\n    padding: 10px 0 0 10px;\n}\n\n.titles {\n    font-size: 18px;\n    padding-top: 5px;\n    border: solid orange 5px;\n    height: 40px;\n    background: rgb(252, 205, 119);\n}\n\nform {\n    position: absolute;\n    bottom: 15vh;\n    right: 15vw;\n    margin-left: 15vw;\n    width: 70%;\n}\n\nfieldset {\n    display: flex;\n    flex-direction: column;\n    padding: 20px;\n    border-radius: 10px;\n    border: solid orange 2.5px;\n    background: var(--form_colour);\n}\n\nlabel {\n    margin-bottom: 5px;\n}\n\ninput {\n    width: 100%;\n    margin-top: 5px;\n    border-radius: 5px;\n    padding: 5px;\n}\n\ninput:last-of-type {\n    margin-bottom: 25px;\n}\n\nbutton {\n    padding: 5px;\n    border-radius: 5px;\n    margin-bottom: 10px;\n}\n\nfooter {\n    position: sticky;\n    top: 90vh;\n    margin: 2vh 5vw 0 5vw;\n    height: 15vh;\n    display: flex;\n    justify-content:flex-end; \n    align-items: center;\n}\n\n#add_circle {\n    width: 50px;\n    height: 50px;\n    border: solid orange;\n    background: orange;\n    border-radius: 50%;\n    font-size: 3.5rem;\n    line-height: 1.6rem;\n  }", "",{"version":3,"sources":["webpack://./src/styles.css"],"names":[],"mappings":"AAAA;IACI,SAAS;IACT,UAAU;IACV,sBAAsB;AAC1B;;AAEA;IACI,iCAAiC;AACrC;;AAEA;IACI,gCAAgC;IAChC,YAAY;IACZ,aAAa;AACjB;;AAEA;IACI,aAAa;IACb,sBAAsB;IACtB,WAAW;IACX,aAAa;IACb,cAAc;AAClB;;AAEA;IACI,sBAAsB;IACtB,YAAY;IACZ,gBAAgB;IAChB,aAAa;IACb,wBAAwB;IACxB,mBAAmB;AACvB;;AAEA;GACG,0BAA0B;AAC7B;;AAEA;IACI,oHAAoH;IACpH,mDAAkC;IAClC,WAAW;IACX,WAAW;AACf;;AAEA;IACI,UAAU;IACV,aAAa;IACb,mBAAmB;IACnB,uBAAuB;AAC3B;;AAEA;IACI,WAAW;IACX,kBAAkB;IAClB,iBAAiB;AACrB;;AAEA;IACI,YAAY;IACZ,gBAAgB;IAChB,kBAAkB;IAClB,kBAAkB;EACpB;EACA;IACE,WAAW;IACX,kBAAkB;IAClB,eAAe;IACf,OAAO;IACP,QAAQ;IACR,SAAS;IACT,mCAAmC;IACnC,oCAAoC;IACpC,qCAAqC;EACvC;EACA;IACE,WAAW;IACX,kBAAkB;IAClB,kBAAkB;IAClB,OAAO;IACP,QAAQ;IACR,SAAS;IACT,mCAAmC;IACnC,oCAAoC;IACpC,kCAAkC;EACpC;;AAEF;IACI,aAAa;IACb,iCAAiC;IACjC,cAAc;IACd,qBAAqB;AACzB;;AAEA;IACI,oBAAoB;IACpB,mBAAmB;IACnB,YAAY;IACZ,sBAAsB;AAC1B;;AAEA;IACI,eAAe;IACf,gBAAgB;IAChB,wBAAwB;IACxB,YAAY;IACZ,8BAA8B;AAClC;;AAEA;IACI,kBAAkB;IAClB,YAAY;IACZ,WAAW;IACX,iBAAiB;IACjB,UAAU;AACd;;AAEA;IACI,aAAa;IACb,sBAAsB;IACtB,aAAa;IACb,mBAAmB;IACnB,0BAA0B;IAC1B,8BAA8B;AAClC;;AAEA;IACI,kBAAkB;AACtB;;AAEA;IACI,WAAW;IACX,eAAe;IACf,kBAAkB;IAClB,YAAY;AAChB;;AAEA;IACI,mBAAmB;AACvB;;AAEA;IACI,YAAY;IACZ,kBAAkB;IAClB,mBAAmB;AACvB;;AAEA;IACI,gBAAgB;IAChB,SAAS;IACT,qBAAqB;IACrB,YAAY;IACZ,aAAa;IACb,wBAAwB;IACxB,mBAAmB;AACvB;;AAEA;IACI,WAAW;IACX,YAAY;IACZ,oBAAoB;IACpB,kBAAkB;IAClB,kBAAkB;IAClB,iBAAiB;IACjB,mBAAmB;EACrB","sourcesContent":["* {\n    margin: 0;\n    padding: 0;\n    box-sizing: border-box;\n}\n\n:root {\n    --form_colour: rgb(255, 222, 162);\n}\n\nbody {\n    font-family:'Roboto', sans-serif;\n    width: 100vw;\n    height: 100vh;\n}\n\nmain {\n    display: flex;\n    flex-direction: column;\n    width: 100%;\n    height: 100vh;\n    margin: 0 auto;\n}\n\nheader {\n    margin: 2vh 5vw 0 auto;\n    height: 15vh;\n    max-width: 600px;\n    display: flex;\n    justify-content:flex-end; \n    align-items: center;\n}\n\nh1 {\n   text-decoration: underline;\n}\n\n#icon {\n    /* <a href=\"https://www.flaticon.com/free-icons/bee\" title=\"bee icons\">Bee icons created by Eucalyp - Flaticon</a> */\n    background: url(\"./honeycomb.png\");\n    width: 80px;\n    margin: 5px;\n}\n\nnav {\n    width: 50%;\n    display: flex;\n    flex-direction: row;\n    justify-content: center;\n}\n\nnav > div {\n    margin: 5px;\n    text-align: center;\n    padding-top: 20px;\n}\n\n#hexagon {\n    width: 100px;\n    height: 57.735px;\n    background: orange;\n    position: relative;\n  }\n  #hexagon::before {\n    content: \"\";\n    position: absolute;\n    top: -28.8675px;\n    left: 0;\n    width: 0;\n    height: 0;\n    border-left: 50px solid transparent;\n    border-right: 50px solid transparent;\n    border-bottom: 28.8675px solid orange;;\n  }\n  #hexagon::after {\n    content: \"\";\n    position: absolute;\n    bottom: -28.8675px;\n    left: 0;\n    width: 0;\n    height: 0;\n    border-left: 50px solid transparent;\n    border-right: 50px solid transparent;\n    border-top: 28.8675px solid orange;\n  }\n\narticle {\n    display: grid;\n    grid-template: auto / 6fr 2fr 2fr;\n    gap: 20px 10px;\n    margin: 2vh 5vw 0 5vw;\n}\n\narticle > div {\n    border: solid orange;\n    border-radius: 10px;\n    height: 60px;\n    padding: 10px 0 0 10px;\n}\n\n.titles {\n    font-size: 18px;\n    padding-top: 5px;\n    border: solid orange 5px;\n    height: 40px;\n    background: rgb(252, 205, 119);\n}\n\nform {\n    position: absolute;\n    bottom: 15vh;\n    right: 15vw;\n    margin-left: 15vw;\n    width: 70%;\n}\n\nfieldset {\n    display: flex;\n    flex-direction: column;\n    padding: 20px;\n    border-radius: 10px;\n    border: solid orange 2.5px;\n    background: var(--form_colour);\n}\n\nlabel {\n    margin-bottom: 5px;\n}\n\ninput {\n    width: 100%;\n    margin-top: 5px;\n    border-radius: 5px;\n    padding: 5px;\n}\n\ninput:last-of-type {\n    margin-bottom: 25px;\n}\n\nbutton {\n    padding: 5px;\n    border-radius: 5px;\n    margin-bottom: 10px;\n}\n\nfooter {\n    position: sticky;\n    top: 90vh;\n    margin: 2vh 5vw 0 5vw;\n    height: 15vh;\n    display: flex;\n    justify-content:flex-end; \n    align-items: center;\n}\n\n#add_circle {\n    width: 50px;\n    height: 50px;\n    border: solid orange;\n    background: orange;\n    border-radius: 50%;\n    font-size: 3.5rem;\n    line-height: 1.6rem;\n  }"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = [];

  // return the list of modules as css string
  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";
      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }
      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }
      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }
      content += cssWithMappingToString(item);
      if (needLayer) {
        content += "}";
      }
      if (item[2]) {
        content += "}";
      }
      if (item[4]) {
        content += "}";
      }
      return content;
    }).join("");
  };

  // import a list of modules into the list
  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }
    var alreadyImportedModules = {};
    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];
        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }
    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);
      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }
      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }
      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }
      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }
      list.push(item);
    }
  };
  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/***/ ((module) => {



module.exports = function (url, options) {
  if (!options) {
    options = {};
  }
  if (!url) {
    return url;
  }
  url = String(url.__esModule ? url.default : url);

  // If url is already wrapped in quotes, remove them
  if (/^['"].*['"]$/.test(url)) {
    url = url.slice(1, -1);
  }
  if (options.hash) {
    url += options.hash;
  }

  // Should url be wrapped?
  // See https://drafts.csswg.org/css-values-3/#urls
  if (/["'() \t\n]|(%20)/.test(url) || options.needQuotes) {
    return "\"".concat(url.replace(/"/g, '\\"').replace(/\n/g, "\\n"), "\"");
  }
  return url;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];
  if (!cssMapping) {
    return content;
  }
  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    return [content].concat([sourceMapping]).join("\n");
  }
  return [content].join("\n");
};

/***/ }),

/***/ "./src/styles.css":
/*!************************!*\
  !*** ./src/styles.css ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./styles.css */ "./node_modules/css-loader/dist/cjs.js!./src/styles.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];
function getIndexByIdentifier(identifier) {
  var result = -1;
  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }
  return result;
}
function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];
  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };
    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }
    identifiers.push(identifier);
  }
  return identifiers;
}
function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);
  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }
      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };
  return updater;
}
module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];
    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }
    var newLastIdentifiers = modulesToDom(newList, options);
    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];
      var _index = getIndexByIdentifier(_identifier);
      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();
        stylesInDOM.splice(_index, 1);
      }
    }
    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};

/* istanbul ignore next  */
function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target);

    // Special case to return head of iframe instead of iframe itself
    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }
    memo[target] = styleTarget;
  }
  return memo[target];
}

/* istanbul ignore next  */
function insertBySelector(insert, style) {
  var target = getTarget(insert);
  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }
  target.appendChild(style);
}
module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}
module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;
  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}
module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";
  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }
  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }
  var needLayer = typeof obj.layer !== "undefined";
  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }
  css += obj.css;
  if (needLayer) {
    css += "}";
  }
  if (obj.media) {
    css += "}";
  }
  if (obj.supports) {
    css += "}";
  }
  var sourceMap = obj.sourceMap;
  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  }

  // For old IE
  /* istanbul ignore if  */
  options.styleTagTransform(css, styleElement, options.options);
}
function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }
  styleElement.parentNode.removeChild(styleElement);
}

/* istanbul ignore next  */
function domAPI(options) {
  if (typeof document === "undefined") {
    return {
      update: function update() {},
      remove: function remove() {}
    };
  }
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}
module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }
    styleElement.appendChild(document.createTextNode(css));
  }
}
module.exports = styleTagTransform;

/***/ }),

/***/ "./src/events.js":
/*!***********************!*\
  !*** ./src/events.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
class Events {
    constructor() {
        this.events = {};
    }

    on(eventName, callBack) {
        this.events[eventName] = this.events[eventName] || [];
        this.events[eventName].push(callBack);
    }

    trigger(eventName, data) {
        if (this.events[eventName]) {
            this.events[eventName].forEach(func => {
                func(data);
            });
        }
    }

    list() {
        console.log(this.events);
    }
};

const event = new Events();

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (event);



/***/ }),

/***/ "./src/footer.js":
/*!***********************!*\
  !*** ./src/footer.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ footer)
/* harmony export */ });
/* harmony import */ var _events__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./events */ "./src/events.js");


function footer() {
    const footer = document.createElement("footer");
    const addButton = document.createElement("button");

    addButton.setAttribute("id", "add_circle");
    addButton.innerText = "+";

    addButton.addEventListener('click', () => {
        _events__WEBPACK_IMPORTED_MODULE_0__["default"].trigger("formDisplayToggle", null);
    });

    footer.appendChild(addButton);

    return footer;

}


/***/ }),

/***/ "./src/headerWithNav.js":
/*!******************************!*\
  !*** ./src/headerWithNav.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ headerWithNav)
/* harmony export */ });
/* harmony import */ var _projects__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./projects */ "./src/projects.js");
/* harmony import */ var _honeycomb_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./honeycomb.png */ "./src/honeycomb.png");
/* harmony import */ var _renderTasks__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./renderTasks */ "./src/renderTasks.js");




function headerWithNav() {
    
    const modules = {
        projects: (0,_projects__WEBPACK_IMPORTED_MODULE_0__["default"])(),
        renderTasks: (0,_renderTasks__WEBPACK_IMPORTED_MODULE_2__["default"])()
    };

    const header = document.createElement("header");
      const h1 = document.createElement("h1");
      const logo = document.createElement("img");
      const nav = document.createElement("nav");
    
    h1.innerText = "Bee Buzzy.";
    logo.src = _honeycomb_png__WEBPACK_IMPORTED_MODULE_1__;
    logo.setAttribute("id", "icon");
    
    // CREATE VIEW TABS
    const divProjects = document.createElement("div");
    divProjects.setAttribute("id", "projects");
    divProjects.setAttribute("id", "hexagon");
    divProjects.innerText = "Projects";

    const divTasks = document.createElement("div");
    divTasks.setAttribute("id", "tasks");
    divTasks.setAttribute("id", "hexagon");
    divTasks.innerText = "Tasks";

    // APPEND VIEW TABS INTO NAV
    nav.appendChild(divProjects);
    nav.appendChild(divTasks);

    header.appendChild(h1);
    header.appendChild(logo);
    header.appendChild(nav);

    // ADD LISTENERS TO APPEND SECTIONS & TOGGLE VIEW
    const divs = nav.querySelectorAll("div");
    divs.forEach(div => {
        div.addEventListener("click", (e) =>{
            if ( document.querySelector("section") != null ) {
                const section = document.querySelector("section");
                section.remove();
            }
            document.body.appendChild( modules[e.target.id] );
        })
    });
    
    return header;
}

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _styles_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./styles.css */ "./src/styles.css");
/* harmony import */ var _headerWithNav__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./headerWithNav */ "./src/headerWithNav.js");
/* harmony import */ var _footer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./footer */ "./src/footer.js");
/* harmony import */ var _renderTasks__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./renderTasks */ "./src/renderTasks.js");
/* harmony import */ var _taskForm__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./taskForm */ "./src/taskForm.js");






function component() {

    const main = document.createElement("main");
    
    main.appendChild( (0,_headerWithNav__WEBPACK_IMPORTED_MODULE_1__["default"])() );
    main.appendChild( (0,_renderTasks__WEBPACK_IMPORTED_MODULE_3__["default"])() );
    main.appendChild( (0,_footer__WEBPACK_IMPORTED_MODULE_2__["default"])() );
    main.appendChild( (0,_taskForm__WEBPACK_IMPORTED_MODULE_4__["default"])() );
    
    return main;

}

document.body.appendChild(component());


/***/ }),

/***/ "./src/projects.js":
/*!*************************!*\
  !*** ./src/projects.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ projects)
/* harmony export */ });
function projects() {

}


/***/ }),

/***/ "./src/renderTasks.js":
/*!****************************!*\
  !*** ./src/renderTasks.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ renderTasks)
/* harmony export */ });
/* harmony import */ var _events__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./events */ "./src/events.js");


function renderTasks() {
    const section = document.createElement("section");

    const titlesArticle = document.createElement("article");
    const taskTitle = document.createElement("div");
    const dueTitle = document.createElement("div");
    const compTitle = document.createElement("div");

    taskTitle.setAttribute("class", "titles");
    dueTitle.setAttribute("class","titles");
    compTitle.setAttribute("class","titles");
    taskTitle.innerHTML = "TASK - click item for full detail";
    dueTitle.innerHTML = "DUE";
    compTitle.innerHTML = "DONE?";

    titlesArticle.append( taskTitle, dueTitle, compTitle );
    section.append( titlesArticle );

    _events__WEBPACK_IMPORTED_MODULE_0__["default"].on("initData", renderTask);
    _events__WEBPACK_IMPORTED_MODULE_0__["default"].on("showTask", renderTask);
    _events__WEBPACK_IMPORTED_MODULE_0__["default"].on("updateTask", firstRemoveOldTask);

    function renderTask(task) {

        const taskArticle = document.createElement("article");
        taskArticle.setAttribute("id", task["id"]);

        const taskDiv = document.createElement("div");
        taskDiv.innerHTML = task["taskTitle"];
        taskDiv.addEventListener('click', () => {
            _events__WEBPACK_IMPORTED_MODULE_0__["default"].trigger("getTaskData", task["id"]);
        });
            
        const dueDiv = document.createElement("div");
        dueDiv.innerHTML = task["dueDate"];
            
        const compDiv = document.createElement("div");
        compDiv.innerHTML = task["complete"];

        taskArticle.append( taskDiv, dueDiv, compDiv );
        section.append( taskArticle );
    }

    function firstRemoveOldTask(task) {
        document.getElementById(task.id).remove();
        _events__WEBPACK_IMPORTED_MODULE_0__["default"].trigger("showTask", task);
    }

    return section;
}


/***/ }),

/***/ "./src/taskForm.js":
/*!*************************!*\
  !*** ./src/taskForm.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ taskForm)
/* harmony export */ });
/* harmony import */ var _events__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./events */ "./src/events.js");


function taskForm() {
    const root = document.documentElement;
    const taskForm = document.createElement("form");
    taskForm.setAttribute('novalidate', true);
    taskForm.style.display = "none";
    taskForm.innerHTML = `
        <fieldset>
            <label for="task_title">Task title
                <input type="text" name="taskTitle" id="task_title" required>
                <span class="error"></span>
            </label>

            <label for="description">Description
                <input type="text" name="description" id="description" required>
                <span class="error"></span>
            </label>

            <label for="due_date">Due date
                <input type="text" name="dueDate" id="due_date" required>
                <span class="error"></span>
            </label>

            <label for="rating">Rating
                <input type="text" name="rating" id="rating" required>
                <span class="error"></span>
            </label>

            <label for="project">Project
                <input type="text" name="project" id="project" required>
                <span class="error"></span>
            </label>
            <button type="submit" id="submit">Log Task</button>
        </fieldset>    
    `;

    _events__WEBPACK_IMPORTED_MODULE_0__["default"].on("formDisplayToggle", displayToggle);

    function displayToggle() {
        taskForm.style.display === "none" 
        ? taskForm.style.display = "block"
        : taskForm.style.display = "none";
    };

    taskForm.addEventListener('submit', (e) => {
        e.preventDefault();
        getFormDataToArrayAndSend(e.target[0].id); 
        resetForm();
    });

    function getFormDataToArrayAndSend(id) {
        const formData = new FormData(taskForm);
        const sendFormData = {};
        id !== "" ? sendFormData.id = id : sendFormData.id = null;
        for (const pair of formData.entries()) {
          sendFormData[pair[0]]=pair[1];
        }
        sendFormData.complete = "false";

        _events__WEBPACK_IMPORTED_MODULE_0__["default"].trigger("dataFromForm", sendFormData);
    }

    function resetForm() {
        setTimeout( () => {
            taskForm.reset();
            const fieldsetForID = document.querySelector("fieldset");
            fieldsetForID.removeAttribute("id");
            const btn = document.querySelector("#submit");
            btn.innerHTML = "Log Task";
            root.style.setProperty("--form_colour", "rgb(255, 222, 162)");
            displayToggle();
        }, 250);
    };

    _events__WEBPACK_IMPORTED_MODULE_0__["default"].on("showFormWithRetrievedData", formWithRetrievedData);

    function formWithRetrievedData(retrievedTaskData) {
        root.style.setProperty("--form_colour", "lightblue");
        displayToggle();

        const allInputs = document.querySelectorAll("input");
        const fieldsetForID = document.querySelector("fieldset");

        allInputs[0].value = retrievedTaskData.taskTitle;
        allInputs[1].value = retrievedTaskData.description;
        allInputs[2].value = retrievedTaskData.dueDate;
        allInputs[3].value = retrievedTaskData.rating;
        allInputs[4].value = retrievedTaskData.project;
        // Pass the taskID to the fieldset and retrieve when 
        // submitting the form to update corresponding record.
        fieldsetForID.setAttribute("id", retrievedTaskData.id);
    
        const btn = document.querySelector("#submit");
        btn.innerHTML = "Click to save any updates";
    }

    return taskForm;
}


/***/ }),

/***/ "./src/honeycomb.png":
/*!***************************!*\
  !*** ./src/honeycomb.png ***!
  \***************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "2463a42feced53d8856b.png";

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./src/index.js"));
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsSUFBSSxrREFBUTs7QUFFWjtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLFFBQVEsdURBQWE7QUFDckI7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUOztBQUVBLElBQUksa0RBQVE7O0FBRVo7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9wdWJzdWItdG8tZG9zLWFwcC8uL3NyYy9zdHlsZXMuY3NzIiwid2VicGFjazovL3B1YnN1Yi10by1kb3MtYXBwLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly9wdWJzdWItdG8tZG9zLWFwcC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9nZXRVcmwuanMiLCJ3ZWJwYWNrOi8vcHVic3ViLXRvLWRvcy1hcHAvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly9wdWJzdWItdG8tZG9zLWFwcC8uL3NyYy9zdHlsZXMuY3NzPzQ0YjIiLCJ3ZWJwYWNrOi8vcHVic3ViLXRvLWRvcy1hcHAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vcHVic3ViLXRvLWRvcy1hcHAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL3B1YnN1Yi10by1kb3MtYXBwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL3B1YnN1Yi10by1kb3MtYXBwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL3B1YnN1Yi10by1kb3MtYXBwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vcHVic3ViLXRvLWRvcy1hcHAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly9wdWJzdWItdG8tZG9zLWFwcC8uL3NyYy9ldmVudHMuanMiLCJ3ZWJwYWNrOi8vcHVic3ViLXRvLWRvcy1hcHAvLi9zcmMvZm9vdGVyLmpzIiwid2VicGFjazovL3B1YnN1Yi10by1kb3MtYXBwLy4vc3JjL2hlYWRlcldpdGhOYXYuanMiLCJ3ZWJwYWNrOi8vcHVic3ViLXRvLWRvcy1hcHAvLi9zcmMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vcHVic3ViLXRvLWRvcy1hcHAvLi9zcmMvcHJvamVjdHMuanMiLCJ3ZWJwYWNrOi8vcHVic3ViLXRvLWRvcy1hcHAvLi9zcmMvcmVuZGVyVGFza3MuanMiLCJ3ZWJwYWNrOi8vcHVic3ViLXRvLWRvcy1hcHAvLi9zcmMvdGFza0Zvcm0uanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2dldFVybC5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fID0gbmV3IFVSTChcIi4vaG9uZXljb21iLnBuZ1wiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIioge1xcbiAgICBtYXJnaW46IDA7XFxuICAgIHBhZGRpbmc6IDA7XFxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxufVxcblxcbjpyb290IHtcXG4gICAgLS1mb3JtX2NvbG91cjogcmdiKDI1NSwgMjIyLCAxNjIpO1xcbn1cXG5cXG5ib2R5IHtcXG4gICAgZm9udC1mYW1pbHk6J1JvYm90bycsIHNhbnMtc2VyaWY7XFxuICAgIHdpZHRoOiAxMDB2dztcXG4gICAgaGVpZ2h0OiAxMDB2aDtcXG59XFxuXFxubWFpbiB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBoZWlnaHQ6IDEwMHZoO1xcbiAgICBtYXJnaW46IDAgYXV0bztcXG59XFxuXFxuaGVhZGVyIHtcXG4gICAgbWFyZ2luOiAydmggNXZ3IDAgYXV0bztcXG4gICAgaGVpZ2h0OiAxNXZoO1xcbiAgICBtYXgtd2lkdGg6IDYwMHB4O1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6ZmxleC1lbmQ7IFxcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG5oMSB7XFxuICAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XFxufVxcblxcbiNpY29uIHtcXG4gICAgLyogPGEgaHJlZj1cXFwiaHR0cHM6Ly93d3cuZmxhdGljb24uY29tL2ZyZWUtaWNvbnMvYmVlXFxcIiB0aXRsZT1cXFwiYmVlIGljb25zXFxcIj5CZWUgaWNvbnMgY3JlYXRlZCBieSBFdWNhbHlwIC0gRmxhdGljb248L2E+ICovXFxuICAgIGJhY2tncm91bmQ6IHVybChcIiArIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX18gKyBcIik7XFxuICAgIHdpZHRoOiA4MHB4O1xcbiAgICBtYXJnaW46IDVweDtcXG59XFxuXFxubmF2IHtcXG4gICAgd2lkdGg6IDUwJTtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxufVxcblxcbm5hdiA+IGRpdiB7XFxuICAgIG1hcmdpbjogNXB4O1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICAgIHBhZGRpbmctdG9wOiAyMHB4O1xcbn1cXG5cXG4jaGV4YWdvbiB7XFxuICAgIHdpZHRoOiAxMDBweDtcXG4gICAgaGVpZ2h0OiA1Ny43MzVweDtcXG4gICAgYmFja2dyb3VuZDogb3JhbmdlO1xcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICB9XFxuICAjaGV4YWdvbjo6YmVmb3JlIHtcXG4gICAgY29udGVudDogXFxcIlxcXCI7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgdG9wOiAtMjguODY3NXB4O1xcbiAgICBsZWZ0OiAwO1xcbiAgICB3aWR0aDogMDtcXG4gICAgaGVpZ2h0OiAwO1xcbiAgICBib3JkZXItbGVmdDogNTBweCBzb2xpZCB0cmFuc3BhcmVudDtcXG4gICAgYm9yZGVyLXJpZ2h0OiA1MHB4IHNvbGlkIHRyYW5zcGFyZW50O1xcbiAgICBib3JkZXItYm90dG9tOiAyOC44Njc1cHggc29saWQgb3JhbmdlOztcXG4gIH1cXG4gICNoZXhhZ29uOjphZnRlciB7XFxuICAgIGNvbnRlbnQ6IFxcXCJcXFwiO1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIGJvdHRvbTogLTI4Ljg2NzVweDtcXG4gICAgbGVmdDogMDtcXG4gICAgd2lkdGg6IDA7XFxuICAgIGhlaWdodDogMDtcXG4gICAgYm9yZGVyLWxlZnQ6IDUwcHggc29saWQgdHJhbnNwYXJlbnQ7XFxuICAgIGJvcmRlci1yaWdodDogNTBweCBzb2xpZCB0cmFuc3BhcmVudDtcXG4gICAgYm9yZGVyLXRvcDogMjguODY3NXB4IHNvbGlkIG9yYW5nZTtcXG4gIH1cXG5cXG5hcnRpY2xlIHtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZTogYXV0byAvIDZmciAyZnIgMmZyO1xcbiAgICBnYXA6IDIwcHggMTBweDtcXG4gICAgbWFyZ2luOiAydmggNXZ3IDAgNXZ3O1xcbn1cXG5cXG5hcnRpY2xlID4gZGl2IHtcXG4gICAgYm9yZGVyOiBzb2xpZCBvcmFuZ2U7XFxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxuICAgIGhlaWdodDogNjBweDtcXG4gICAgcGFkZGluZzogMTBweCAwIDAgMTBweDtcXG59XFxuXFxuLnRpdGxlcyB7XFxuICAgIGZvbnQtc2l6ZTogMThweDtcXG4gICAgcGFkZGluZy10b3A6IDVweDtcXG4gICAgYm9yZGVyOiBzb2xpZCBvcmFuZ2UgNXB4O1xcbiAgICBoZWlnaHQ6IDQwcHg7XFxuICAgIGJhY2tncm91bmQ6IHJnYigyNTIsIDIwNSwgMTE5KTtcXG59XFxuXFxuZm9ybSB7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgYm90dG9tOiAxNXZoO1xcbiAgICByaWdodDogMTV2dztcXG4gICAgbWFyZ2luLWxlZnQ6IDE1dnc7XFxuICAgIHdpZHRoOiA3MCU7XFxufVxcblxcbmZpZWxkc2V0IHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgcGFkZGluZzogMjBweDtcXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcXG4gICAgYm9yZGVyOiBzb2xpZCBvcmFuZ2UgMi41cHg7XFxuICAgIGJhY2tncm91bmQ6IHZhcigtLWZvcm1fY29sb3VyKTtcXG59XFxuXFxubGFiZWwge1xcbiAgICBtYXJnaW4tYm90dG9tOiA1cHg7XFxufVxcblxcbmlucHV0IHtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIG1hcmdpbi10b3A6IDVweDtcXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xcbiAgICBwYWRkaW5nOiA1cHg7XFxufVxcblxcbmlucHV0Omxhc3Qtb2YtdHlwZSB7XFxuICAgIG1hcmdpbi1ib3R0b206IDI1cHg7XFxufVxcblxcbmJ1dHRvbiB7XFxuICAgIHBhZGRpbmc6IDVweDtcXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xcbiAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xcbn1cXG5cXG5mb290ZXIge1xcbiAgICBwb3NpdGlvbjogc3RpY2t5O1xcbiAgICB0b3A6IDkwdmg7XFxuICAgIG1hcmdpbjogMnZoIDV2dyAwIDV2dztcXG4gICAgaGVpZ2h0OiAxNXZoO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6ZmxleC1lbmQ7IFxcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG4jYWRkX2NpcmNsZSB7XFxuICAgIHdpZHRoOiA1MHB4O1xcbiAgICBoZWlnaHQ6IDUwcHg7XFxuICAgIGJvcmRlcjogc29saWQgb3JhbmdlO1xcbiAgICBiYWNrZ3JvdW5kOiBvcmFuZ2U7XFxuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcXG4gICAgZm9udC1zaXplOiAzLjVyZW07XFxuICAgIGxpbmUtaGVpZ2h0OiAxLjZyZW07XFxuICB9XCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlcy5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7SUFDSSxTQUFTO0lBQ1QsVUFBVTtJQUNWLHNCQUFzQjtBQUMxQjs7QUFFQTtJQUNJLGlDQUFpQztBQUNyQzs7QUFFQTtJQUNJLGdDQUFnQztJQUNoQyxZQUFZO0lBQ1osYUFBYTtBQUNqQjs7QUFFQTtJQUNJLGFBQWE7SUFDYixzQkFBc0I7SUFDdEIsV0FBVztJQUNYLGFBQWE7SUFDYixjQUFjO0FBQ2xCOztBQUVBO0lBQ0ksc0JBQXNCO0lBQ3RCLFlBQVk7SUFDWixnQkFBZ0I7SUFDaEIsYUFBYTtJQUNiLHdCQUF3QjtJQUN4QixtQkFBbUI7QUFDdkI7O0FBRUE7R0FDRywwQkFBMEI7QUFDN0I7O0FBRUE7SUFDSSxvSEFBb0g7SUFDcEgsbURBQWtDO0lBQ2xDLFdBQVc7SUFDWCxXQUFXO0FBQ2Y7O0FBRUE7SUFDSSxVQUFVO0lBQ1YsYUFBYTtJQUNiLG1CQUFtQjtJQUNuQix1QkFBdUI7QUFDM0I7O0FBRUE7SUFDSSxXQUFXO0lBQ1gsa0JBQWtCO0lBQ2xCLGlCQUFpQjtBQUNyQjs7QUFFQTtJQUNJLFlBQVk7SUFDWixnQkFBZ0I7SUFDaEIsa0JBQWtCO0lBQ2xCLGtCQUFrQjtFQUNwQjtFQUNBO0lBQ0UsV0FBVztJQUNYLGtCQUFrQjtJQUNsQixlQUFlO0lBQ2YsT0FBTztJQUNQLFFBQVE7SUFDUixTQUFTO0lBQ1QsbUNBQW1DO0lBQ25DLG9DQUFvQztJQUNwQyxxQ0FBcUM7RUFDdkM7RUFDQTtJQUNFLFdBQVc7SUFDWCxrQkFBa0I7SUFDbEIsa0JBQWtCO0lBQ2xCLE9BQU87SUFDUCxRQUFRO0lBQ1IsU0FBUztJQUNULG1DQUFtQztJQUNuQyxvQ0FBb0M7SUFDcEMsa0NBQWtDO0VBQ3BDOztBQUVGO0lBQ0ksYUFBYTtJQUNiLGlDQUFpQztJQUNqQyxjQUFjO0lBQ2QscUJBQXFCO0FBQ3pCOztBQUVBO0lBQ0ksb0JBQW9CO0lBQ3BCLG1CQUFtQjtJQUNuQixZQUFZO0lBQ1osc0JBQXNCO0FBQzFCOztBQUVBO0lBQ0ksZUFBZTtJQUNmLGdCQUFnQjtJQUNoQix3QkFBd0I7SUFDeEIsWUFBWTtJQUNaLDhCQUE4QjtBQUNsQzs7QUFFQTtJQUNJLGtCQUFrQjtJQUNsQixZQUFZO0lBQ1osV0FBVztJQUNYLGlCQUFpQjtJQUNqQixVQUFVO0FBQ2Q7O0FBRUE7SUFDSSxhQUFhO0lBQ2Isc0JBQXNCO0lBQ3RCLGFBQWE7SUFDYixtQkFBbUI7SUFDbkIsMEJBQTBCO0lBQzFCLDhCQUE4QjtBQUNsQzs7QUFFQTtJQUNJLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLFdBQVc7SUFDWCxlQUFlO0lBQ2Ysa0JBQWtCO0lBQ2xCLFlBQVk7QUFDaEI7O0FBRUE7SUFDSSxtQkFBbUI7QUFDdkI7O0FBRUE7SUFDSSxZQUFZO0lBQ1osa0JBQWtCO0lBQ2xCLG1CQUFtQjtBQUN2Qjs7QUFFQTtJQUNJLGdCQUFnQjtJQUNoQixTQUFTO0lBQ1QscUJBQXFCO0lBQ3JCLFlBQVk7SUFDWixhQUFhO0lBQ2Isd0JBQXdCO0lBQ3hCLG1CQUFtQjtBQUN2Qjs7QUFFQTtJQUNJLFdBQVc7SUFDWCxZQUFZO0lBQ1osb0JBQW9CO0lBQ3BCLGtCQUFrQjtJQUNsQixrQkFBa0I7SUFDbEIsaUJBQWlCO0lBQ2pCLG1CQUFtQjtFQUNyQlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCIqIHtcXG4gICAgbWFyZ2luOiAwO1xcbiAgICBwYWRkaW5nOiAwO1xcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbn1cXG5cXG46cm9vdCB7XFxuICAgIC0tZm9ybV9jb2xvdXI6IHJnYigyNTUsIDIyMiwgMTYyKTtcXG59XFxuXFxuYm9keSB7XFxuICAgIGZvbnQtZmFtaWx5OidSb2JvdG8nLCBzYW5zLXNlcmlmO1xcbiAgICB3aWR0aDogMTAwdnc7XFxuICAgIGhlaWdodDogMTAwdmg7XFxufVxcblxcbm1haW4ge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgaGVpZ2h0OiAxMDB2aDtcXG4gICAgbWFyZ2luOiAwIGF1dG87XFxufVxcblxcbmhlYWRlciB7XFxuICAgIG1hcmdpbjogMnZoIDV2dyAwIGF1dG87XFxuICAgIGhlaWdodDogMTV2aDtcXG4gICAgbWF4LXdpZHRoOiA2MDBweDtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OmZsZXgtZW5kOyBcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuaDEge1xcbiAgIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xcbn1cXG5cXG4jaWNvbiB7XFxuICAgIC8qIDxhIGhyZWY9XFxcImh0dHBzOi8vd3d3LmZsYXRpY29uLmNvbS9mcmVlLWljb25zL2JlZVxcXCIgdGl0bGU9XFxcImJlZSBpY29uc1xcXCI+QmVlIGljb25zIGNyZWF0ZWQgYnkgRXVjYWx5cCAtIEZsYXRpY29uPC9hPiAqL1xcbiAgICBiYWNrZ3JvdW5kOiB1cmwoXFxcIi4vaG9uZXljb21iLnBuZ1xcXCIpO1xcbiAgICB3aWR0aDogODBweDtcXG4gICAgbWFyZ2luOiA1cHg7XFxufVxcblxcbm5hdiB7XFxuICAgIHdpZHRoOiA1MCU7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbn1cXG5cXG5uYXYgPiBkaXYge1xcbiAgICBtYXJnaW46IDVweDtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgICBwYWRkaW5nLXRvcDogMjBweDtcXG59XFxuXFxuI2hleGFnb24ge1xcbiAgICB3aWR0aDogMTAwcHg7XFxuICAgIGhlaWdodDogNTcuNzM1cHg7XFxuICAgIGJhY2tncm91bmQ6IG9yYW5nZTtcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgfVxcbiAgI2hleGFnb246OmJlZm9yZSB7XFxuICAgIGNvbnRlbnQ6IFxcXCJcXFwiO1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIHRvcDogLTI4Ljg2NzVweDtcXG4gICAgbGVmdDogMDtcXG4gICAgd2lkdGg6IDA7XFxuICAgIGhlaWdodDogMDtcXG4gICAgYm9yZGVyLWxlZnQ6IDUwcHggc29saWQgdHJhbnNwYXJlbnQ7XFxuICAgIGJvcmRlci1yaWdodDogNTBweCBzb2xpZCB0cmFuc3BhcmVudDtcXG4gICAgYm9yZGVyLWJvdHRvbTogMjguODY3NXB4IHNvbGlkIG9yYW5nZTs7XFxuICB9XFxuICAjaGV4YWdvbjo6YWZ0ZXIge1xcbiAgICBjb250ZW50OiBcXFwiXFxcIjtcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICBib3R0b206IC0yOC44Njc1cHg7XFxuICAgIGxlZnQ6IDA7XFxuICAgIHdpZHRoOiAwO1xcbiAgICBoZWlnaHQ6IDA7XFxuICAgIGJvcmRlci1sZWZ0OiA1MHB4IHNvbGlkIHRyYW5zcGFyZW50O1xcbiAgICBib3JkZXItcmlnaHQ6IDUwcHggc29saWQgdHJhbnNwYXJlbnQ7XFxuICAgIGJvcmRlci10b3A6IDI4Ljg2NzVweCBzb2xpZCBvcmFuZ2U7XFxuICB9XFxuXFxuYXJ0aWNsZSB7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtdGVtcGxhdGU6IGF1dG8gLyA2ZnIgMmZyIDJmcjtcXG4gICAgZ2FwOiAyMHB4IDEwcHg7XFxuICAgIG1hcmdpbjogMnZoIDV2dyAwIDV2dztcXG59XFxuXFxuYXJ0aWNsZSA+IGRpdiB7XFxuICAgIGJvcmRlcjogc29saWQgb3JhbmdlO1xcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xcbiAgICBoZWlnaHQ6IDYwcHg7XFxuICAgIHBhZGRpbmc6IDEwcHggMCAwIDEwcHg7XFxufVxcblxcbi50aXRsZXMge1xcbiAgICBmb250LXNpemU6IDE4cHg7XFxuICAgIHBhZGRpbmctdG9wOiA1cHg7XFxuICAgIGJvcmRlcjogc29saWQgb3JhbmdlIDVweDtcXG4gICAgaGVpZ2h0OiA0MHB4O1xcbiAgICBiYWNrZ3JvdW5kOiByZ2IoMjUyLCAyMDUsIDExOSk7XFxufVxcblxcbmZvcm0ge1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIGJvdHRvbTogMTV2aDtcXG4gICAgcmlnaHQ6IDE1dnc7XFxuICAgIG1hcmdpbi1sZWZ0OiAxNXZ3O1xcbiAgICB3aWR0aDogNzAlO1xcbn1cXG5cXG5maWVsZHNldCB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIHBhZGRpbmc6IDIwcHg7XFxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxuICAgIGJvcmRlcjogc29saWQgb3JhbmdlIDIuNXB4O1xcbiAgICBiYWNrZ3JvdW5kOiB2YXIoLS1mb3JtX2NvbG91cik7XFxufVxcblxcbmxhYmVsIHtcXG4gICAgbWFyZ2luLWJvdHRvbTogNXB4O1xcbn1cXG5cXG5pbnB1dCB7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBtYXJnaW4tdG9wOiA1cHg7XFxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcXG4gICAgcGFkZGluZzogNXB4O1xcbn1cXG5cXG5pbnB1dDpsYXN0LW9mLXR5cGUge1xcbiAgICBtYXJnaW4tYm90dG9tOiAyNXB4O1xcbn1cXG5cXG5idXR0b24ge1xcbiAgICBwYWRkaW5nOiA1cHg7XFxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcXG4gICAgbWFyZ2luLWJvdHRvbTogMTBweDtcXG59XFxuXFxuZm9vdGVyIHtcXG4gICAgcG9zaXRpb246IHN0aWNreTtcXG4gICAgdG9wOiA5MHZoO1xcbiAgICBtYXJnaW46IDJ2aCA1dncgMCA1dnc7XFxuICAgIGhlaWdodDogMTV2aDtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OmZsZXgtZW5kOyBcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuI2FkZF9jaXJjbGUge1xcbiAgICB3aWR0aDogNTBweDtcXG4gICAgaGVpZ2h0OiA1MHB4O1xcbiAgICBib3JkZXI6IHNvbGlkIG9yYW5nZTtcXG4gICAgYmFja2dyb3VuZDogb3JhbmdlO1xcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XFxuICAgIGZvbnQtc2l6ZTogMy41cmVtO1xcbiAgICBsaW5lLWhlaWdodDogMS42cmVtO1xcbiAgfVwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTtcblxuICAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTtcblxuICAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uICh1cmwsIG9wdGlvbnMpIHtcbiAgaWYgKCFvcHRpb25zKSB7XG4gICAgb3B0aW9ucyA9IHt9O1xuICB9XG4gIGlmICghdXJsKSB7XG4gICAgcmV0dXJuIHVybDtcbiAgfVxuICB1cmwgPSBTdHJpbmcodXJsLl9fZXNNb2R1bGUgPyB1cmwuZGVmYXVsdCA6IHVybCk7XG5cbiAgLy8gSWYgdXJsIGlzIGFscmVhZHkgd3JhcHBlZCBpbiBxdW90ZXMsIHJlbW92ZSB0aGVtXG4gIGlmICgvXlsnXCJdLipbJ1wiXSQvLnRlc3QodXJsKSkge1xuICAgIHVybCA9IHVybC5zbGljZSgxLCAtMSk7XG4gIH1cbiAgaWYgKG9wdGlvbnMuaGFzaCkge1xuICAgIHVybCArPSBvcHRpb25zLmhhc2g7XG4gIH1cblxuICAvLyBTaG91bGQgdXJsIGJlIHdyYXBwZWQ/XG4gIC8vIFNlZSBodHRwczovL2RyYWZ0cy5jc3N3Zy5vcmcvY3NzLXZhbHVlcy0zLyN1cmxzXG4gIGlmICgvW1wiJygpIFxcdFxcbl18KCUyMCkvLnRlc3QodXJsKSB8fCBvcHRpb25zLm5lZWRRdW90ZXMpIHtcbiAgICByZXR1cm4gXCJcXFwiXCIuY29uY2F0KHVybC5yZXBsYWNlKC9cIi9nLCAnXFxcXFwiJykucmVwbGFjZSgvXFxuL2csIFwiXFxcXG5cIiksIFwiXFxcIlwiKTtcbiAgfVxuICByZXR1cm4gdXJsO1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZXMuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZXMuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuICByZXR1cm4gcmVzdWx0O1xufVxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7XG5cbiAgICAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cbiAgY3NzICs9IG9iai5jc3M7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH1cblxuICAvLyBGb3Igb2xkIElFXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIGlmICh0eXBlb2YgZG9jdW1lbnQgPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICByZXR1cm4ge1xuICAgICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUoKSB7fSxcbiAgICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge31cbiAgICB9O1xuICB9XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCJjbGFzcyBFdmVudHMge1xuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICB0aGlzLmV2ZW50cyA9IHt9O1xuICAgIH1cblxuICAgIG9uKGV2ZW50TmFtZSwgY2FsbEJhY2spIHtcbiAgICAgICAgdGhpcy5ldmVudHNbZXZlbnROYW1lXSA9IHRoaXMuZXZlbnRzW2V2ZW50TmFtZV0gfHwgW107XG4gICAgICAgIHRoaXMuZXZlbnRzW2V2ZW50TmFtZV0ucHVzaChjYWxsQmFjayk7XG4gICAgfVxuXG4gICAgdHJpZ2dlcihldmVudE5hbWUsIGRhdGEpIHtcbiAgICAgICAgaWYgKHRoaXMuZXZlbnRzW2V2ZW50TmFtZV0pIHtcbiAgICAgICAgICAgIHRoaXMuZXZlbnRzW2V2ZW50TmFtZV0uZm9yRWFjaChmdW5jID0+IHtcbiAgICAgICAgICAgICAgICBmdW5jKGRhdGEpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBsaXN0KCkge1xuICAgICAgICBjb25zb2xlLmxvZyh0aGlzLmV2ZW50cyk7XG4gICAgfVxufTtcblxuY29uc3QgZXZlbnQgPSBuZXcgRXZlbnRzKCk7XG5cbmV4cG9ydCBkZWZhdWx0IGV2ZW50O1xuXG4iLCJpbXBvcnQgZXZlbnQgZnJvbSBcIi4vZXZlbnRzXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGZvb3RlcigpIHtcbiAgICBjb25zdCBmb290ZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZm9vdGVyXCIpO1xuICAgIGNvbnN0IGFkZEJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG5cbiAgICBhZGRCdXR0b24uc2V0QXR0cmlidXRlKFwiaWRcIiwgXCJhZGRfY2lyY2xlXCIpO1xuICAgIGFkZEJ1dHRvbi5pbm5lclRleHQgPSBcIitcIjtcblxuICAgIGFkZEJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgZXZlbnQudHJpZ2dlcihcImZvcm1EaXNwbGF5VG9nZ2xlXCIsIG51bGwpO1xuICAgIH0pO1xuXG4gICAgZm9vdGVyLmFwcGVuZENoaWxkKGFkZEJ1dHRvbik7XG5cbiAgICByZXR1cm4gZm9vdGVyO1xuXG59XG4iLCJpbXBvcnQgcHJvamVjdHMgZnJvbSBcIi4vcHJvamVjdHNcIjtcbmltcG9ydCBob25leWNvbWIgZnJvbSBcIi4vaG9uZXljb21iLnBuZ1wiO1xuaW1wb3J0IHJlbmRlclRhc2tzIGZyb20gXCIuL3JlbmRlclRhc2tzXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGhlYWRlcldpdGhOYXYoKSB7XG4gICAgXG4gICAgY29uc3QgbW9kdWxlcyA9IHtcbiAgICAgICAgcHJvamVjdHM6IHByb2plY3RzKCksXG4gICAgICAgIHJlbmRlclRhc2tzOiByZW5kZXJUYXNrcygpXG4gICAgfTtcblxuICAgIGNvbnN0IGhlYWRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoZWFkZXJcIik7XG4gICAgICBjb25zdCBoMSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoMVwiKTtcbiAgICAgIGNvbnN0IGxvZ28gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW1nXCIpO1xuICAgICAgY29uc3QgbmF2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcIm5hdlwiKTtcbiAgICBcbiAgICBoMS5pbm5lclRleHQgPSBcIkJlZSBCdXp6eS5cIjtcbiAgICBsb2dvLnNyYyA9IGhvbmV5Y29tYjtcbiAgICBsb2dvLnNldEF0dHJpYnV0ZShcImlkXCIsIFwiaWNvblwiKTtcbiAgICBcbiAgICAvLyBDUkVBVEUgVklFVyBUQUJTXG4gICAgY29uc3QgZGl2UHJvamVjdHMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIGRpdlByb2plY3RzLnNldEF0dHJpYnV0ZShcImlkXCIsIFwicHJvamVjdHNcIik7XG4gICAgZGl2UHJvamVjdHMuc2V0QXR0cmlidXRlKFwiaWRcIiwgXCJoZXhhZ29uXCIpO1xuICAgIGRpdlByb2plY3RzLmlubmVyVGV4dCA9IFwiUHJvamVjdHNcIjtcblxuICAgIGNvbnN0IGRpdlRhc2tzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBkaXZUYXNrcy5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBcInRhc2tzXCIpO1xuICAgIGRpdlRhc2tzLnNldEF0dHJpYnV0ZShcImlkXCIsIFwiaGV4YWdvblwiKTtcbiAgICBkaXZUYXNrcy5pbm5lclRleHQgPSBcIlRhc2tzXCI7XG5cbiAgICAvLyBBUFBFTkQgVklFVyBUQUJTIElOVE8gTkFWXG4gICAgbmF2LmFwcGVuZENoaWxkKGRpdlByb2plY3RzKTtcbiAgICBuYXYuYXBwZW5kQ2hpbGQoZGl2VGFza3MpO1xuXG4gICAgaGVhZGVyLmFwcGVuZENoaWxkKGgxKTtcbiAgICBoZWFkZXIuYXBwZW5kQ2hpbGQobG9nbyk7XG4gICAgaGVhZGVyLmFwcGVuZENoaWxkKG5hdik7XG5cbiAgICAvLyBBREQgTElTVEVORVJTIFRPIEFQUEVORCBTRUNUSU9OUyAmIFRPR0dMRSBWSUVXXG4gICAgY29uc3QgZGl2cyA9IG5hdi5xdWVyeVNlbGVjdG9yQWxsKFwiZGl2XCIpO1xuICAgIGRpdnMuZm9yRWFjaChkaXYgPT4ge1xuICAgICAgICBkaXYuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIChlKSA9PntcbiAgICAgICAgICAgIGlmICggZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcInNlY3Rpb25cIikgIT0gbnVsbCApIHtcbiAgICAgICAgICAgICAgICBjb25zdCBzZWN0aW9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcInNlY3Rpb25cIik7XG4gICAgICAgICAgICAgICAgc2VjdGlvbi5yZW1vdmUoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQoIG1vZHVsZXNbZS50YXJnZXQuaWRdICk7XG4gICAgICAgIH0pXG4gICAgfSk7XG4gICAgXG4gICAgcmV0dXJuIGhlYWRlcjtcbn0iLCJpbXBvcnQgXCIuL3N0eWxlcy5jc3NcIjtcbmltcG9ydCBoZWFkZXJXaXRoTmF2IGZyb20gXCIuL2hlYWRlcldpdGhOYXZcIjtcbmltcG9ydCBmb290ZXIgZnJvbSBcIi4vZm9vdGVyXCI7XG5pbXBvcnQgcmVuZGVyVGFza3MgZnJvbSBcIi4vcmVuZGVyVGFza3NcIjtcbmltcG9ydCB0YXNrRm9ybSBmcm9tIFwiLi90YXNrRm9ybVwiO1xuXG5mdW5jdGlvbiBjb21wb25lbnQoKSB7XG5cbiAgICBjb25zdCBtYWluID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcIm1haW5cIik7XG4gICAgXG4gICAgbWFpbi5hcHBlbmRDaGlsZCggaGVhZGVyV2l0aE5hdigpICk7XG4gICAgbWFpbi5hcHBlbmRDaGlsZCggcmVuZGVyVGFza3MoKSApO1xuICAgIG1haW4uYXBwZW5kQ2hpbGQoIGZvb3RlcigpICk7XG4gICAgbWFpbi5hcHBlbmRDaGlsZCggdGFza0Zvcm0oKSApO1xuICAgIFxuICAgIHJldHVybiBtYWluO1xuXG59XG5cbmRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQoY29tcG9uZW50KCkpO1xuIiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gcHJvamVjdHMoKSB7XG5cbn1cbiIsImltcG9ydCBldmVudCBmcm9tIFwiLi9ldmVudHNcIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gcmVuZGVyVGFza3MoKSB7XG4gICAgY29uc3Qgc2VjdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzZWN0aW9uXCIpO1xuXG4gICAgY29uc3QgdGl0bGVzQXJ0aWNsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJhcnRpY2xlXCIpO1xuICAgIGNvbnN0IHRhc2tUaXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgY29uc3QgZHVlVGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIGNvbnN0IGNvbXBUaXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG5cbiAgICB0YXNrVGl0bGUuc2V0QXR0cmlidXRlKFwiY2xhc3NcIiwgXCJ0aXRsZXNcIik7XG4gICAgZHVlVGl0bGUuc2V0QXR0cmlidXRlKFwiY2xhc3NcIixcInRpdGxlc1wiKTtcbiAgICBjb21wVGl0bGUuc2V0QXR0cmlidXRlKFwiY2xhc3NcIixcInRpdGxlc1wiKTtcbiAgICB0YXNrVGl0bGUuaW5uZXJIVE1MID0gXCJUQVNLIC0gY2xpY2sgaXRlbSBmb3IgZnVsbCBkZXRhaWxcIjtcbiAgICBkdWVUaXRsZS5pbm5lckhUTUwgPSBcIkRVRVwiO1xuICAgIGNvbXBUaXRsZS5pbm5lckhUTUwgPSBcIkRPTkU/XCI7XG5cbiAgICB0aXRsZXNBcnRpY2xlLmFwcGVuZCggdGFza1RpdGxlLCBkdWVUaXRsZSwgY29tcFRpdGxlICk7XG4gICAgc2VjdGlvbi5hcHBlbmQoIHRpdGxlc0FydGljbGUgKTtcblxuICAgIGV2ZW50Lm9uKFwiaW5pdERhdGFcIiwgcmVuZGVyVGFzayk7XG4gICAgZXZlbnQub24oXCJzaG93VGFza1wiLCByZW5kZXJUYXNrKTtcbiAgICBldmVudC5vbihcInVwZGF0ZVRhc2tcIiwgZmlyc3RSZW1vdmVPbGRUYXNrKTtcblxuICAgIGZ1bmN0aW9uIHJlbmRlclRhc2sodGFzaykge1xuXG4gICAgICAgIGNvbnN0IHRhc2tBcnRpY2xlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImFydGljbGVcIik7XG4gICAgICAgIHRhc2tBcnRpY2xlLnNldEF0dHJpYnV0ZShcImlkXCIsIHRhc2tbXCJpZFwiXSk7XG5cbiAgICAgICAgY29uc3QgdGFza0RpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICAgIHRhc2tEaXYuaW5uZXJIVE1MID0gdGFza1tcInRhc2tUaXRsZVwiXTtcbiAgICAgICAgdGFza0Rpdi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgICAgIGV2ZW50LnRyaWdnZXIoXCJnZXRUYXNrRGF0YVwiLCB0YXNrW1wiaWRcIl0pO1xuICAgICAgICB9KTtcbiAgICAgICAgICAgIFxuICAgICAgICBjb25zdCBkdWVEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgICBkdWVEaXYuaW5uZXJIVE1MID0gdGFza1tcImR1ZURhdGVcIl07XG4gICAgICAgICAgICBcbiAgICAgICAgY29uc3QgY29tcERpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICAgIGNvbXBEaXYuaW5uZXJIVE1MID0gdGFza1tcImNvbXBsZXRlXCJdO1xuXG4gICAgICAgIHRhc2tBcnRpY2xlLmFwcGVuZCggdGFza0RpdiwgZHVlRGl2LCBjb21wRGl2ICk7XG4gICAgICAgIHNlY3Rpb24uYXBwZW5kKCB0YXNrQXJ0aWNsZSApO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIGZpcnN0UmVtb3ZlT2xkVGFzayh0YXNrKSB7XG4gICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKHRhc2suaWQpLnJlbW92ZSgpO1xuICAgICAgICBldmVudC50cmlnZ2VyKFwic2hvd1Rhc2tcIiwgdGFzayk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHNlY3Rpb247XG59XG4iLCJpbXBvcnQgZXZlbnQgZnJvbSBcIi4vZXZlbnRzXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHRhc2tGb3JtKCkge1xuICAgIGNvbnN0IHJvb3QgPSBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQ7XG4gICAgY29uc3QgdGFza0Zvcm0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZm9ybVwiKTtcbiAgICB0YXNrRm9ybS5zZXRBdHRyaWJ1dGUoJ25vdmFsaWRhdGUnLCB0cnVlKTtcbiAgICB0YXNrRm9ybS5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XG4gICAgdGFza0Zvcm0uaW5uZXJIVE1MID0gYFxuICAgICAgICA8ZmllbGRzZXQ+XG4gICAgICAgICAgICA8bGFiZWwgZm9yPVwidGFza190aXRsZVwiPlRhc2sgdGl0bGVcbiAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBuYW1lPVwidGFza1RpdGxlXCIgaWQ9XCJ0YXNrX3RpdGxlXCIgcmVxdWlyZWQ+XG4gICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJlcnJvclwiPjwvc3Bhbj5cbiAgICAgICAgICAgIDwvbGFiZWw+XG5cbiAgICAgICAgICAgIDxsYWJlbCBmb3I9XCJkZXNjcmlwdGlvblwiPkRlc2NyaXB0aW9uXG4gICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgbmFtZT1cImRlc2NyaXB0aW9uXCIgaWQ9XCJkZXNjcmlwdGlvblwiIHJlcXVpcmVkPlxuICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwiZXJyb3JcIj48L3NwYW4+XG4gICAgICAgICAgICA8L2xhYmVsPlxuXG4gICAgICAgICAgICA8bGFiZWwgZm9yPVwiZHVlX2RhdGVcIj5EdWUgZGF0ZVxuICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIG5hbWU9XCJkdWVEYXRlXCIgaWQ9XCJkdWVfZGF0ZVwiIHJlcXVpcmVkPlxuICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwiZXJyb3JcIj48L3NwYW4+XG4gICAgICAgICAgICA8L2xhYmVsPlxuXG4gICAgICAgICAgICA8bGFiZWwgZm9yPVwicmF0aW5nXCI+UmF0aW5nXG4gICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgbmFtZT1cInJhdGluZ1wiIGlkPVwicmF0aW5nXCIgcmVxdWlyZWQ+XG4gICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJlcnJvclwiPjwvc3Bhbj5cbiAgICAgICAgICAgIDwvbGFiZWw+XG5cbiAgICAgICAgICAgIDxsYWJlbCBmb3I9XCJwcm9qZWN0XCI+UHJvamVjdFxuICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIG5hbWU9XCJwcm9qZWN0XCIgaWQ9XCJwcm9qZWN0XCIgcmVxdWlyZWQ+XG4gICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJlcnJvclwiPjwvc3Bhbj5cbiAgICAgICAgICAgIDwvbGFiZWw+XG4gICAgICAgICAgICA8YnV0dG9uIHR5cGU9XCJzdWJtaXRcIiBpZD1cInN1Ym1pdFwiPkxvZyBUYXNrPC9idXR0b24+XG4gICAgICAgIDwvZmllbGRzZXQ+ICAgIFxuICAgIGA7XG5cbiAgICBldmVudC5vbihcImZvcm1EaXNwbGF5VG9nZ2xlXCIsIGRpc3BsYXlUb2dnbGUpO1xuXG4gICAgZnVuY3Rpb24gZGlzcGxheVRvZ2dsZSgpIHtcbiAgICAgICAgdGFza0Zvcm0uc3R5bGUuZGlzcGxheSA9PT0gXCJub25lXCIgXG4gICAgICAgID8gdGFza0Zvcm0uc3R5bGUuZGlzcGxheSA9IFwiYmxvY2tcIlxuICAgICAgICA6IHRhc2tGb3JtLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcbiAgICB9O1xuXG4gICAgdGFza0Zvcm0uYWRkRXZlbnRMaXN0ZW5lcignc3VibWl0JywgKGUpID0+IHtcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICBnZXRGb3JtRGF0YVRvQXJyYXlBbmRTZW5kKGUudGFyZ2V0WzBdLmlkKTsgXG4gICAgICAgIHJlc2V0Rm9ybSgpO1xuICAgIH0pO1xuXG4gICAgZnVuY3Rpb24gZ2V0Rm9ybURhdGFUb0FycmF5QW5kU2VuZChpZCkge1xuICAgICAgICBjb25zdCBmb3JtRGF0YSA9IG5ldyBGb3JtRGF0YSh0YXNrRm9ybSk7XG4gICAgICAgIGNvbnN0IHNlbmRGb3JtRGF0YSA9IHt9O1xuICAgICAgICBpZCAhPT0gXCJcIiA/IHNlbmRGb3JtRGF0YS5pZCA9IGlkIDogc2VuZEZvcm1EYXRhLmlkID0gbnVsbDtcbiAgICAgICAgZm9yIChjb25zdCBwYWlyIG9mIGZvcm1EYXRhLmVudHJpZXMoKSkge1xuICAgICAgICAgIHNlbmRGb3JtRGF0YVtwYWlyWzBdXT1wYWlyWzFdO1xuICAgICAgICB9XG4gICAgICAgIHNlbmRGb3JtRGF0YS5jb21wbGV0ZSA9IFwiZmFsc2VcIjtcblxuICAgICAgICBldmVudC50cmlnZ2VyKFwiZGF0YUZyb21Gb3JtXCIsIHNlbmRGb3JtRGF0YSk7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gcmVzZXRGb3JtKCkge1xuICAgICAgICBzZXRUaW1lb3V0KCAoKSA9PiB7XG4gICAgICAgICAgICB0YXNrRm9ybS5yZXNldCgpO1xuICAgICAgICAgICAgY29uc3QgZmllbGRzZXRGb3JJRCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJmaWVsZHNldFwiKTtcbiAgICAgICAgICAgIGZpZWxkc2V0Rm9ySUQucmVtb3ZlQXR0cmlidXRlKFwiaWRcIik7XG4gICAgICAgICAgICBjb25zdCBidG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3N1Ym1pdFwiKTtcbiAgICAgICAgICAgIGJ0bi5pbm5lckhUTUwgPSBcIkxvZyBUYXNrXCI7XG4gICAgICAgICAgICByb290LnN0eWxlLnNldFByb3BlcnR5KFwiLS1mb3JtX2NvbG91clwiLCBcInJnYigyNTUsIDIyMiwgMTYyKVwiKTtcbiAgICAgICAgICAgIGRpc3BsYXlUb2dnbGUoKTtcbiAgICAgICAgfSwgMjUwKTtcbiAgICB9O1xuXG4gICAgZXZlbnQub24oXCJzaG93Rm9ybVdpdGhSZXRyaWV2ZWREYXRhXCIsIGZvcm1XaXRoUmV0cmlldmVkRGF0YSk7XG5cbiAgICBmdW5jdGlvbiBmb3JtV2l0aFJldHJpZXZlZERhdGEocmV0cmlldmVkVGFza0RhdGEpIHtcbiAgICAgICAgcm9vdC5zdHlsZS5zZXRQcm9wZXJ0eShcIi0tZm9ybV9jb2xvdXJcIiwgXCJsaWdodGJsdWVcIik7XG4gICAgICAgIGRpc3BsYXlUb2dnbGUoKTtcblxuICAgICAgICBjb25zdCBhbGxJbnB1dHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiaW5wdXRcIik7XG4gICAgICAgIGNvbnN0IGZpZWxkc2V0Rm9ySUQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiZmllbGRzZXRcIik7XG5cbiAgICAgICAgYWxsSW5wdXRzWzBdLnZhbHVlID0gcmV0cmlldmVkVGFza0RhdGEudGFza1RpdGxlO1xuICAgICAgICBhbGxJbnB1dHNbMV0udmFsdWUgPSByZXRyaWV2ZWRUYXNrRGF0YS5kZXNjcmlwdGlvbjtcbiAgICAgICAgYWxsSW5wdXRzWzJdLnZhbHVlID0gcmV0cmlldmVkVGFza0RhdGEuZHVlRGF0ZTtcbiAgICAgICAgYWxsSW5wdXRzWzNdLnZhbHVlID0gcmV0cmlldmVkVGFza0RhdGEucmF0aW5nO1xuICAgICAgICBhbGxJbnB1dHNbNF0udmFsdWUgPSByZXRyaWV2ZWRUYXNrRGF0YS5wcm9qZWN0O1xuICAgICAgICAvLyBQYXNzIHRoZSB0YXNrSUQgdG8gdGhlIGZpZWxkc2V0IGFuZCByZXRyaWV2ZSB3aGVuIFxuICAgICAgICAvLyBzdWJtaXR0aW5nIHRoZSBmb3JtIHRvIHVwZGF0ZSBjb3JyZXNwb25kaW5nIHJlY29yZC5cbiAgICAgICAgZmllbGRzZXRGb3JJRC5zZXRBdHRyaWJ1dGUoXCJpZFwiLCByZXRyaWV2ZWRUYXNrRGF0YS5pZCk7XG4gICAgXG4gICAgICAgIGNvbnN0IGJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjc3VibWl0XCIpO1xuICAgICAgICBidG4uaW5uZXJIVE1MID0gXCJDbGljayB0byBzYXZlIGFueSB1cGRhdGVzXCI7XG4gICAgfVxuXG4gICAgcmV0dXJuIHRhc2tGb3JtO1xufVxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9