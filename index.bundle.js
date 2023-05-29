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
___CSS_LOADER_EXPORT___.push([module.id, "* {\n    margin: 0;\n    padding: 0;\n    box-sizing: border-box;\n}\n\n:root {\n    --form_colour: rgb(255, 222, 162);\n}\n\nbody {\n    font-family:'Roboto', sans-serif;\n    width: 100vw;\n    height: 100vh;\n}\n\nmain {\n    display: flex;\n    flex-direction: column;\n    width: 100%;\n    height: 100vh;\n    margin: 0 auto;\n}\n\nheader {\n    margin: 2vh 5vw 0 auto;\n    height: 15vh;\n    max-width: 600px;\n    display: flex;\n    justify-content:flex-end; \n    align-items: center;\n}\n\nh1 {\n   text-decoration: underline;\n}\n\n#icon {\n    /* <a href=\"https://www.flaticon.com/free-icons/bee\" title=\"bee icons\">Bee icons created by Eucalyp - Flaticon</a> */\n    background: url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ");\n    width: 80px;\n    margin: 5px;\n}\n\nnav {\n    width: 50%;\n    display: flex;\n    flex-direction: row;\n    justify-content: center;\n}\n\nnav > div {\n    margin: 5px;\n    text-align: center;\n    padding-top: 20px;\n}\n\n.hexagon {\n    width: 100px;\n    height: 57.735px;\n    background: orange;\n    position: relative;\n}\n\n.hexagon::before {\n    content: \"\";\n    position: absolute;\n    top: -28.8675px;\n    left: 0;\n    width: 0;\n    height: 0;\n    border-left: 50px solid transparent;\n    border-right: 50px solid transparent;\n    border-bottom: 28.8675px solid orange;;\n}\n\n.hexagon::after {\n    content: \"\";\n    position: absolute;\n    bottom: -28.8675px;\n    left: 0;\n    width: 0;\n    height: 0;\n    border-left: 50px solid transparent;\n    border-right: 50px solid transparent;\n    border-top: 28.8675px solid orange;\n}\n\n.proj_div {\n    border: solid orange 3px;\n    border-radius: 5px;\n    background-color:  rgb(255, 222, 162);\n    padding: 2px;\n}\n\n.proj_div:first-of-type {\n    margin-top: 50px;\n}\n\narticle {\n    display: grid;\n    grid-template: auto / 6fr 2fr 2fr;\n    gap: 20px 10px;\n    margin: 2vh 5vw 0 5vw;\n}\n\narticle > div {\n    border: solid orange;\n    border-radius: 10px;\n    height: 60px;\n    padding: 10px 0 0 10px;\n}\n\n.titles {\n    font-size: 18px;\n    padding-top: 5px;\n    border: solid orange 5px;\n    height: 40px;\n    background: rgb(252, 205, 119);\n}\n\nform {\n    position: absolute;\n    bottom: 15vh;\n    right: 15vw;\n    margin-left: 15vw;\n    width: 70%;\n}\n\nfieldset {\n    display: flex;\n    flex-direction: column;\n    padding: 20px;\n    border-radius: 10px;\n    border: solid orange 2.5px;\n    background: var(--form_colour);\n}\n\nlabel {\n    margin-bottom: 5px;\n}\n\ninput {\n    width: 100%;\n    margin-top: 5px;\n    border-radius: 5px;\n    padding: 5px;\n}\n\ninput:last-of-type {\n    margin-bottom: 25px;\n}\n\nbutton {\n    padding: 5px;\n    border-radius: 5px;\n    margin-bottom: 10px;\n}\n\nfooter {\n    position: sticky;\n    top: 90vh;\n    margin: 2vh 5vw 0 5vw;\n    height: 15vh;\n    display: flex;\n    justify-content:flex-end; \n    align-items: center;\n}\n\n#add_circle {\n    width: 50px;\n    height: 50px;\n    border: solid orange;\n    background: orange;\n    border-radius: 50%;\n    font-size: 3.5rem;\n    line-height: 1.6rem;\n  }", "",{"version":3,"sources":["webpack://./src/styles.css"],"names":[],"mappings":"AAAA;IACI,SAAS;IACT,UAAU;IACV,sBAAsB;AAC1B;;AAEA;IACI,iCAAiC;AACrC;;AAEA;IACI,gCAAgC;IAChC,YAAY;IACZ,aAAa;AACjB;;AAEA;IACI,aAAa;IACb,sBAAsB;IACtB,WAAW;IACX,aAAa;IACb,cAAc;AAClB;;AAEA;IACI,sBAAsB;IACtB,YAAY;IACZ,gBAAgB;IAChB,aAAa;IACb,wBAAwB;IACxB,mBAAmB;AACvB;;AAEA;GACG,0BAA0B;AAC7B;;AAEA;IACI,oHAAoH;IACpH,mDAAkC;IAClC,WAAW;IACX,WAAW;AACf;;AAEA;IACI,UAAU;IACV,aAAa;IACb,mBAAmB;IACnB,uBAAuB;AAC3B;;AAEA;IACI,WAAW;IACX,kBAAkB;IAClB,iBAAiB;AACrB;;AAEA;IACI,YAAY;IACZ,gBAAgB;IAChB,kBAAkB;IAClB,kBAAkB;AACtB;;AAEA;IACI,WAAW;IACX,kBAAkB;IAClB,eAAe;IACf,OAAO;IACP,QAAQ;IACR,SAAS;IACT,mCAAmC;IACnC,oCAAoC;IACpC,qCAAqC;AACzC;;AAEA;IACI,WAAW;IACX,kBAAkB;IAClB,kBAAkB;IAClB,OAAO;IACP,QAAQ;IACR,SAAS;IACT,mCAAmC;IACnC,oCAAoC;IACpC,kCAAkC;AACtC;;AAEA;IACI,wBAAwB;IACxB,kBAAkB;IAClB,qCAAqC;IACrC,YAAY;AAChB;;AAEA;IACI,gBAAgB;AACpB;;AAEA;IACI,aAAa;IACb,iCAAiC;IACjC,cAAc;IACd,qBAAqB;AACzB;;AAEA;IACI,oBAAoB;IACpB,mBAAmB;IACnB,YAAY;IACZ,sBAAsB;AAC1B;;AAEA;IACI,eAAe;IACf,gBAAgB;IAChB,wBAAwB;IACxB,YAAY;IACZ,8BAA8B;AAClC;;AAEA;IACI,kBAAkB;IAClB,YAAY;IACZ,WAAW;IACX,iBAAiB;IACjB,UAAU;AACd;;AAEA;IACI,aAAa;IACb,sBAAsB;IACtB,aAAa;IACb,mBAAmB;IACnB,0BAA0B;IAC1B,8BAA8B;AAClC;;AAEA;IACI,kBAAkB;AACtB;;AAEA;IACI,WAAW;IACX,eAAe;IACf,kBAAkB;IAClB,YAAY;AAChB;;AAEA;IACI,mBAAmB;AACvB;;AAEA;IACI,YAAY;IACZ,kBAAkB;IAClB,mBAAmB;AACvB;;AAEA;IACI,gBAAgB;IAChB,SAAS;IACT,qBAAqB;IACrB,YAAY;IACZ,aAAa;IACb,wBAAwB;IACxB,mBAAmB;AACvB;;AAEA;IACI,WAAW;IACX,YAAY;IACZ,oBAAoB;IACpB,kBAAkB;IAClB,kBAAkB;IAClB,iBAAiB;IACjB,mBAAmB;EACrB","sourcesContent":["* {\n    margin: 0;\n    padding: 0;\n    box-sizing: border-box;\n}\n\n:root {\n    --form_colour: rgb(255, 222, 162);\n}\n\nbody {\n    font-family:'Roboto', sans-serif;\n    width: 100vw;\n    height: 100vh;\n}\n\nmain {\n    display: flex;\n    flex-direction: column;\n    width: 100%;\n    height: 100vh;\n    margin: 0 auto;\n}\n\nheader {\n    margin: 2vh 5vw 0 auto;\n    height: 15vh;\n    max-width: 600px;\n    display: flex;\n    justify-content:flex-end; \n    align-items: center;\n}\n\nh1 {\n   text-decoration: underline;\n}\n\n#icon {\n    /* <a href=\"https://www.flaticon.com/free-icons/bee\" title=\"bee icons\">Bee icons created by Eucalyp - Flaticon</a> */\n    background: url(\"./honeycomb.png\");\n    width: 80px;\n    margin: 5px;\n}\n\nnav {\n    width: 50%;\n    display: flex;\n    flex-direction: row;\n    justify-content: center;\n}\n\nnav > div {\n    margin: 5px;\n    text-align: center;\n    padding-top: 20px;\n}\n\n.hexagon {\n    width: 100px;\n    height: 57.735px;\n    background: orange;\n    position: relative;\n}\n\n.hexagon::before {\n    content: \"\";\n    position: absolute;\n    top: -28.8675px;\n    left: 0;\n    width: 0;\n    height: 0;\n    border-left: 50px solid transparent;\n    border-right: 50px solid transparent;\n    border-bottom: 28.8675px solid orange;;\n}\n\n.hexagon::after {\n    content: \"\";\n    position: absolute;\n    bottom: -28.8675px;\n    left: 0;\n    width: 0;\n    height: 0;\n    border-left: 50px solid transparent;\n    border-right: 50px solid transparent;\n    border-top: 28.8675px solid orange;\n}\n\n.proj_div {\n    border: solid orange 3px;\n    border-radius: 5px;\n    background-color:  rgb(255, 222, 162);\n    padding: 2px;\n}\n\n.proj_div:first-of-type {\n    margin-top: 50px;\n}\n\narticle {\n    display: grid;\n    grid-template: auto / 6fr 2fr 2fr;\n    gap: 20px 10px;\n    margin: 2vh 5vw 0 5vw;\n}\n\narticle > div {\n    border: solid orange;\n    border-radius: 10px;\n    height: 60px;\n    padding: 10px 0 0 10px;\n}\n\n.titles {\n    font-size: 18px;\n    padding-top: 5px;\n    border: solid orange 5px;\n    height: 40px;\n    background: rgb(252, 205, 119);\n}\n\nform {\n    position: absolute;\n    bottom: 15vh;\n    right: 15vw;\n    margin-left: 15vw;\n    width: 70%;\n}\n\nfieldset {\n    display: flex;\n    flex-direction: column;\n    padding: 20px;\n    border-radius: 10px;\n    border: solid orange 2.5px;\n    background: var(--form_colour);\n}\n\nlabel {\n    margin-bottom: 5px;\n}\n\ninput {\n    width: 100%;\n    margin-top: 5px;\n    border-radius: 5px;\n    padding: 5px;\n}\n\ninput:last-of-type {\n    margin-bottom: 25px;\n}\n\nbutton {\n    padding: 5px;\n    border-radius: 5px;\n    margin-bottom: 10px;\n}\n\nfooter {\n    position: sticky;\n    top: 90vh;\n    margin: 2vh 5vw 0 5vw;\n    height: 15vh;\n    display: flex;\n    justify-content:flex-end; \n    align-items: center;\n}\n\n#add_circle {\n    width: 50px;\n    height: 50px;\n    border: solid orange;\n    background: orange;\n    border-radius: 50%;\n    font-size: 3.5rem;\n    line-height: 1.6rem;\n  }"],"sourceRoot":""}]);
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
        _events__WEBPACK_IMPORTED_MODULE_0__["default"].trigger("formDisplayToggle");
        _events__WEBPACK_IMPORTED_MODULE_0__["default"].trigger("addButtonToggle");
    });

    _events__WEBPACK_IMPORTED_MODULE_0__["default"].on("addButtonToggle", toggleBTNText)

    function toggleBTNText() {
        addButton.innerText === "+"
        ? addButton.innerText = "-"
        : addButton.innerText = "+";
    }

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
/* harmony import */ var _honeycomb_png__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./honeycomb.png */ "./src/honeycomb.png");
/* harmony import */ var _events__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./events */ "./src/events.js");
/* harmony import */ var _projects__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./projects */ "./src/projects.js");




function headerWithNav() {
    const header = document.createElement("header");
    const h1 = document.createElement("h1");
    const logo = document.createElement("img");
    const nav = document.createElement("nav");
    
    h1.innerText = "Bee Buzzy.";
    logo.src = _honeycomb_png__WEBPACK_IMPORTED_MODULE_0__;
    logo.setAttribute("id", "icon");
    
    // CREATE VIEW TABS
    (0,_projects__WEBPACK_IMPORTED_MODULE_2__["default"])();
    const divProjects = document.createElement("div");
    divProjects.setAttribute("id", "projects");
    divProjects.setAttribute("class", "hexagon");
    divProjects.innerText = "Projects";
    divProjects.addEventListener("click", (e) => {
        divProjects.children.length > 0
        ? _events__WEBPACK_IMPORTED_MODULE_1__["default"].trigger("removeProjDivs", e.target)
        : _events__WEBPACK_IMPORTED_MODULE_1__["default"].trigger("getProjectsList");
    });

    _events__WEBPACK_IMPORTED_MODULE_1__["default"].on("removeProjDivs", removeProjDivs)

    function removeProjDivs(target) {
        if (!target) {
            while (divProjects.firstChild) {
                divProjects.removeChild(divProjects.firstChild);
            }
            divProjects.innerText = "Projects";
        } else if (target.className === "proj_div") {
            _events__WEBPACK_IMPORTED_MODULE_1__["default"].trigger("getTasksByProject", target);
        }
    }

    _events__WEBPACK_IMPORTED_MODULE_1__["default"].on("showProjDivs", showProjDivs);

    function showProjDivs(allProjDivs) {
        divProjects.append(...allProjDivs);
    }

    const divTasks = document.createElement("div");
    divTasks.setAttribute("id", "tasks");
    divTasks.setAttribute("class", "hexagon");
    divTasks.innerText = "All tasks";
    divTasks.addEventListener("click", () => {
        _events__WEBPACK_IMPORTED_MODULE_1__["default"].trigger("getAllTasks", null);
    });

    // APPEND VIEW TABS INTO NAV
    nav.appendChild(divProjects);
    nav.appendChild(divTasks);

    header.appendChild(h1);
    header.appendChild(logo);
    header.appendChild(nav);

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
/* harmony import */ var _events__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./events */ "./src/events.js");


function projects() {
    _events__WEBPACK_IMPORTED_MODULE_0__["default"].on("makeProjDivs", showProjOptions);

    function showProjOptions(projects) {
        const allProjDivs = [];
        projects.forEach(project => {
            const projDiv = document.createElement("div");
            projDiv.setAttribute("class", "proj_div");
            projDiv.innerHTML = project;
            allProjDivs.push(projDiv);
        })
        _events__WEBPACK_IMPORTED_MODULE_0__["default"].trigger("showProjDivs", allProjDivs);
    }
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
    dueTitle.setAttribute("class", "titles");
    compTitle.setAttribute("class","titles");
    taskTitle.innerHTML = "TASK - click item for full detail";
    dueTitle.innerHTML = "DUE";
    compTitle.innerHTML = "DONE?";

    titlesArticle.append( taskTitle, dueTitle, compTitle );
    section.append( titlesArticle );

    
    _events__WEBPACK_IMPORTED_MODULE_0__["default"].on("showTask", renderTask);
    _events__WEBPACK_IMPORTED_MODULE_0__["default"].on("updateTask", firstRemoveOldTask);

    function renderTask(task) {

        const taskArticle = document.createElement("article");
        taskArticle.setAttribute("id", task.id);
        taskArticle.setAttribute("class", "task_article");
        taskArticle.dataset.proj_type = task.project;

        const taskDiv = document.createElement("div");
        taskDiv.setAttribute("class", "task");
        taskDiv.innerHTML = task["taskTitle"];
        taskDiv.addEventListener('click', () => {
            _events__WEBPACK_IMPORTED_MODULE_0__["default"].trigger("getTaskData", task.id);
        });
            
        const dueDiv = document.createElement("div");
        dueDiv.setAttribute("class", "task");
        dueDiv.innerHTML = task["dueDate"];
            
        const compDiv = document.createElement("div");
        compDiv.setAttribute("class", "task");
        compDiv.innerHTML = task["complete"];

        taskArticle.append( taskDiv, dueDiv, compDiv );
        section.append( taskArticle );
    }

    function firstRemoveOldTask(task) {
        const taskArticle = document.getElementById(task.id);
        const taskDivs = taskArticle.getElementsByClassName("task");
        taskDivs.forEach( div => div.remove() );

        const taskDiv = document.createElement("div");
        taskDiv.setAttribute("class", "task");
        taskDiv.innerHTML = task["taskTitle"];
        taskDiv.addEventListener('click', () => {
            _events__WEBPACK_IMPORTED_MODULE_0__["default"].trigger("getTaskData", task.id);
        });
            
        const dueDiv = document.createElement("div");
        dueDiv.setAttribute("class", "task");
        dueDiv.innerHTML = task.dueDate;
            
        const compDiv = document.createElement("div");
        compDiv.setAttribute("class", "task");
        compDiv.innerHTML = task.complete;

        taskArticle.append( taskDiv, dueDiv, compDiv );

    }

    _events__WEBPACK_IMPORTED_MODULE_0__["default"].on("showManyTasks", clearOldTasksThenShowNew);

    function clearOldTasksThenShowNew(manyTasks) {
        const allTaskArticles = document.getElementsByClassName("task_article");

        if (allTaskArticles.length > 0) {
            allTaskArticles.forEach( article => article.remove() );
        }

        manyTasks.map(task => {
            _events__WEBPACK_IMPORTED_MODULE_0__["default"].trigger("showTask", task);
        });

        _events__WEBPACK_IMPORTED_MODULE_0__["default"].trigger("removeProjDivs");
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
        resetForm();
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
            taskForm.style.display === "none";
        }, 250);
    };

    _events__WEBPACK_IMPORTED_MODULE_0__["default"].on("showFormWithRetrievedData", formWithRetrievedData);

    function formWithRetrievedData(retrievedTaskData) {
        
        // TOGGLES '+'/'-' WHEN EDIT FORM IS FIRST DISPLAYED ONLY
        const formColour = getComputedStyle(root).getPropertyValue("--form_colour");
        formColour === "rgb(255, 222, 162)" && taskForm.style.display === "none"
        ? _events__WEBPACK_IMPORTED_MODULE_0__["default"].trigger("addButtonToggle")
        : false;
        
        root.style.setProperty("--form_colour", "lightblue");
        taskForm.style.display = "block";

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBVSx1REFBYTtBQUN2QjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vcHVic3ViLXRvLWRvcy1hcHAvLi9zcmMvc3R5bGVzLmNzcyIsIndlYnBhY2s6Ly9wdWJzdWItdG8tZG9zLWFwcC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vcHVic3ViLXRvLWRvcy1hcHAvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VXJsLmpzIiwid2VicGFjazovL3B1YnN1Yi10by1kb3MtYXBwLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vcHVic3ViLXRvLWRvcy1hcHAvLi9zcmMvc3R5bGVzLmNzcz80NGIyIiwid2VicGFjazovL3B1YnN1Yi10by1kb3MtYXBwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL3B1YnN1Yi10by1kb3MtYXBwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly9wdWJzdWItdG8tZG9zLWFwcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly9wdWJzdWItdG8tZG9zLWFwcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly9wdWJzdWItdG8tZG9zLWFwcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL3B1YnN1Yi10by1kb3MtYXBwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vcHVic3ViLXRvLWRvcy1hcHAvLi9zcmMvZXZlbnRzLmpzIiwid2VicGFjazovL3B1YnN1Yi10by1kb3MtYXBwLy4vc3JjL2Zvb3Rlci5qcyIsIndlYnBhY2s6Ly9wdWJzdWItdG8tZG9zLWFwcC8uL3NyYy9oZWFkZXJXaXRoTmF2LmpzIiwid2VicGFjazovL3B1YnN1Yi10by1kb3MtYXBwLy4vc3JjL2luZGV4LmpzIiwid2VicGFjazovL3B1YnN1Yi10by1kb3MtYXBwLy4vc3JjL3Byb2plY3RzLmpzIiwid2VicGFjazovL3B1YnN1Yi10by1kb3MtYXBwLy4vc3JjL3JlbmRlclRhc2tzLmpzIiwid2VicGFjazovL3B1YnN1Yi10by1kb3MtYXBwLy4vc3JjL3Rhc2tGb3JtLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9nZXRVcmwuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyA9IG5ldyBVUkwoXCIuL2hvbmV5Y29tYi5wbmdcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCIqIHtcXG4gICAgbWFyZ2luOiAwO1xcbiAgICBwYWRkaW5nOiAwO1xcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbn1cXG5cXG46cm9vdCB7XFxuICAgIC0tZm9ybV9jb2xvdXI6IHJnYigyNTUsIDIyMiwgMTYyKTtcXG59XFxuXFxuYm9keSB7XFxuICAgIGZvbnQtZmFtaWx5OidSb2JvdG8nLCBzYW5zLXNlcmlmO1xcbiAgICB3aWR0aDogMTAwdnc7XFxuICAgIGhlaWdodDogMTAwdmg7XFxufVxcblxcbm1haW4ge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgaGVpZ2h0OiAxMDB2aDtcXG4gICAgbWFyZ2luOiAwIGF1dG87XFxufVxcblxcbmhlYWRlciB7XFxuICAgIG1hcmdpbjogMnZoIDV2dyAwIGF1dG87XFxuICAgIGhlaWdodDogMTV2aDtcXG4gICAgbWF4LXdpZHRoOiA2MDBweDtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OmZsZXgtZW5kOyBcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuaDEge1xcbiAgIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xcbn1cXG5cXG4jaWNvbiB7XFxuICAgIC8qIDxhIGhyZWY9XFxcImh0dHBzOi8vd3d3LmZsYXRpY29uLmNvbS9mcmVlLWljb25zL2JlZVxcXCIgdGl0bGU9XFxcImJlZSBpY29uc1xcXCI+QmVlIGljb25zIGNyZWF0ZWQgYnkgRXVjYWx5cCAtIEZsYXRpY29uPC9hPiAqL1xcbiAgICBiYWNrZ3JvdW5kOiB1cmwoXCIgKyBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19fICsgXCIpO1xcbiAgICB3aWR0aDogODBweDtcXG4gICAgbWFyZ2luOiA1cHg7XFxufVxcblxcbm5hdiB7XFxuICAgIHdpZHRoOiA1MCU7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbn1cXG5cXG5uYXYgPiBkaXYge1xcbiAgICBtYXJnaW46IDVweDtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgICBwYWRkaW5nLXRvcDogMjBweDtcXG59XFxuXFxuLmhleGFnb24ge1xcbiAgICB3aWR0aDogMTAwcHg7XFxuICAgIGhlaWdodDogNTcuNzM1cHg7XFxuICAgIGJhY2tncm91bmQ6IG9yYW5nZTtcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbn1cXG5cXG4uaGV4YWdvbjo6YmVmb3JlIHtcXG4gICAgY29udGVudDogXFxcIlxcXCI7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgdG9wOiAtMjguODY3NXB4O1xcbiAgICBsZWZ0OiAwO1xcbiAgICB3aWR0aDogMDtcXG4gICAgaGVpZ2h0OiAwO1xcbiAgICBib3JkZXItbGVmdDogNTBweCBzb2xpZCB0cmFuc3BhcmVudDtcXG4gICAgYm9yZGVyLXJpZ2h0OiA1MHB4IHNvbGlkIHRyYW5zcGFyZW50O1xcbiAgICBib3JkZXItYm90dG9tOiAyOC44Njc1cHggc29saWQgb3JhbmdlOztcXG59XFxuXFxuLmhleGFnb246OmFmdGVyIHtcXG4gICAgY29udGVudDogXFxcIlxcXCI7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgYm90dG9tOiAtMjguODY3NXB4O1xcbiAgICBsZWZ0OiAwO1xcbiAgICB3aWR0aDogMDtcXG4gICAgaGVpZ2h0OiAwO1xcbiAgICBib3JkZXItbGVmdDogNTBweCBzb2xpZCB0cmFuc3BhcmVudDtcXG4gICAgYm9yZGVyLXJpZ2h0OiA1MHB4IHNvbGlkIHRyYW5zcGFyZW50O1xcbiAgICBib3JkZXItdG9wOiAyOC44Njc1cHggc29saWQgb3JhbmdlO1xcbn1cXG5cXG4ucHJval9kaXYge1xcbiAgICBib3JkZXI6IHNvbGlkIG9yYW5nZSAzcHg7XFxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIHJnYigyNTUsIDIyMiwgMTYyKTtcXG4gICAgcGFkZGluZzogMnB4O1xcbn1cXG5cXG4ucHJval9kaXY6Zmlyc3Qtb2YtdHlwZSB7XFxuICAgIG1hcmdpbi10b3A6IDUwcHg7XFxufVxcblxcbmFydGljbGUge1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlOiBhdXRvIC8gNmZyIDJmciAyZnI7XFxuICAgIGdhcDogMjBweCAxMHB4O1xcbiAgICBtYXJnaW46IDJ2aCA1dncgMCA1dnc7XFxufVxcblxcbmFydGljbGUgPiBkaXYge1xcbiAgICBib3JkZXI6IHNvbGlkIG9yYW5nZTtcXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcXG4gICAgaGVpZ2h0OiA2MHB4O1xcbiAgICBwYWRkaW5nOiAxMHB4IDAgMCAxMHB4O1xcbn1cXG5cXG4udGl0bGVzIHtcXG4gICAgZm9udC1zaXplOiAxOHB4O1xcbiAgICBwYWRkaW5nLXRvcDogNXB4O1xcbiAgICBib3JkZXI6IHNvbGlkIG9yYW5nZSA1cHg7XFxuICAgIGhlaWdodDogNDBweDtcXG4gICAgYmFja2dyb3VuZDogcmdiKDI1MiwgMjA1LCAxMTkpO1xcbn1cXG5cXG5mb3JtIHtcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICBib3R0b206IDE1dmg7XFxuICAgIHJpZ2h0OiAxNXZ3O1xcbiAgICBtYXJnaW4tbGVmdDogMTV2dztcXG4gICAgd2lkdGg6IDcwJTtcXG59XFxuXFxuZmllbGRzZXQge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBwYWRkaW5nOiAyMHB4O1xcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xcbiAgICBib3JkZXI6IHNvbGlkIG9yYW5nZSAyLjVweDtcXG4gICAgYmFja2dyb3VuZDogdmFyKC0tZm9ybV9jb2xvdXIpO1xcbn1cXG5cXG5sYWJlbCB7XFxuICAgIG1hcmdpbi1ib3R0b206IDVweDtcXG59XFxuXFxuaW5wdXQge1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgbWFyZ2luLXRvcDogNXB4O1xcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XFxuICAgIHBhZGRpbmc6IDVweDtcXG59XFxuXFxuaW5wdXQ6bGFzdC1vZi10eXBlIHtcXG4gICAgbWFyZ2luLWJvdHRvbTogMjVweDtcXG59XFxuXFxuYnV0dG9uIHtcXG4gICAgcGFkZGluZzogNXB4O1xcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XFxuICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XFxufVxcblxcbmZvb3RlciB7XFxuICAgIHBvc2l0aW9uOiBzdGlja3k7XFxuICAgIHRvcDogOTB2aDtcXG4gICAgbWFyZ2luOiAydmggNXZ3IDAgNXZ3O1xcbiAgICBoZWlnaHQ6IDE1dmg7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDpmbGV4LWVuZDsgXFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbiNhZGRfY2lyY2xlIHtcXG4gICAgd2lkdGg6IDUwcHg7XFxuICAgIGhlaWdodDogNTBweDtcXG4gICAgYm9yZGVyOiBzb2xpZCBvcmFuZ2U7XFxuICAgIGJhY2tncm91bmQ6IG9yYW5nZTtcXG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xcbiAgICBmb250LXNpemU6IDMuNXJlbTtcXG4gICAgbGluZS1oZWlnaHQ6IDEuNnJlbTtcXG4gIH1cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGVzLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtJQUNJLFNBQVM7SUFDVCxVQUFVO0lBQ1Ysc0JBQXNCO0FBQzFCOztBQUVBO0lBQ0ksaUNBQWlDO0FBQ3JDOztBQUVBO0lBQ0ksZ0NBQWdDO0lBQ2hDLFlBQVk7SUFDWixhQUFhO0FBQ2pCOztBQUVBO0lBQ0ksYUFBYTtJQUNiLHNCQUFzQjtJQUN0QixXQUFXO0lBQ1gsYUFBYTtJQUNiLGNBQWM7QUFDbEI7O0FBRUE7SUFDSSxzQkFBc0I7SUFDdEIsWUFBWTtJQUNaLGdCQUFnQjtJQUNoQixhQUFhO0lBQ2Isd0JBQXdCO0lBQ3hCLG1CQUFtQjtBQUN2Qjs7QUFFQTtHQUNHLDBCQUEwQjtBQUM3Qjs7QUFFQTtJQUNJLG9IQUFvSDtJQUNwSCxtREFBa0M7SUFDbEMsV0FBVztJQUNYLFdBQVc7QUFDZjs7QUFFQTtJQUNJLFVBQVU7SUFDVixhQUFhO0lBQ2IsbUJBQW1CO0lBQ25CLHVCQUF1QjtBQUMzQjs7QUFFQTtJQUNJLFdBQVc7SUFDWCxrQkFBa0I7SUFDbEIsaUJBQWlCO0FBQ3JCOztBQUVBO0lBQ0ksWUFBWTtJQUNaLGdCQUFnQjtJQUNoQixrQkFBa0I7SUFDbEIsa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0ksV0FBVztJQUNYLGtCQUFrQjtJQUNsQixlQUFlO0lBQ2YsT0FBTztJQUNQLFFBQVE7SUFDUixTQUFTO0lBQ1QsbUNBQW1DO0lBQ25DLG9DQUFvQztJQUNwQyxxQ0FBcUM7QUFDekM7O0FBRUE7SUFDSSxXQUFXO0lBQ1gsa0JBQWtCO0lBQ2xCLGtCQUFrQjtJQUNsQixPQUFPO0lBQ1AsUUFBUTtJQUNSLFNBQVM7SUFDVCxtQ0FBbUM7SUFDbkMsb0NBQW9DO0lBQ3BDLGtDQUFrQztBQUN0Qzs7QUFFQTtJQUNJLHdCQUF3QjtJQUN4QixrQkFBa0I7SUFDbEIscUNBQXFDO0lBQ3JDLFlBQVk7QUFDaEI7O0FBRUE7SUFDSSxnQkFBZ0I7QUFDcEI7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsaUNBQWlDO0lBQ2pDLGNBQWM7SUFDZCxxQkFBcUI7QUFDekI7O0FBRUE7SUFDSSxvQkFBb0I7SUFDcEIsbUJBQW1CO0lBQ25CLFlBQVk7SUFDWixzQkFBc0I7QUFDMUI7O0FBRUE7SUFDSSxlQUFlO0lBQ2YsZ0JBQWdCO0lBQ2hCLHdCQUF3QjtJQUN4QixZQUFZO0lBQ1osOEJBQThCO0FBQ2xDOztBQUVBO0lBQ0ksa0JBQWtCO0lBQ2xCLFlBQVk7SUFDWixXQUFXO0lBQ1gsaUJBQWlCO0lBQ2pCLFVBQVU7QUFDZDs7QUFFQTtJQUNJLGFBQWE7SUFDYixzQkFBc0I7SUFDdEIsYUFBYTtJQUNiLG1CQUFtQjtJQUNuQiwwQkFBMEI7SUFDMUIsOEJBQThCO0FBQ2xDOztBQUVBO0lBQ0ksa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0ksV0FBVztJQUNYLGVBQWU7SUFDZixrQkFBa0I7SUFDbEIsWUFBWTtBQUNoQjs7QUFFQTtJQUNJLG1CQUFtQjtBQUN2Qjs7QUFFQTtJQUNJLFlBQVk7SUFDWixrQkFBa0I7SUFDbEIsbUJBQW1CO0FBQ3ZCOztBQUVBO0lBQ0ksZ0JBQWdCO0lBQ2hCLFNBQVM7SUFDVCxxQkFBcUI7SUFDckIsWUFBWTtJQUNaLGFBQWE7SUFDYix3QkFBd0I7SUFDeEIsbUJBQW1CO0FBQ3ZCOztBQUVBO0lBQ0ksV0FBVztJQUNYLFlBQVk7SUFDWixvQkFBb0I7SUFDcEIsa0JBQWtCO0lBQ2xCLGtCQUFrQjtJQUNsQixpQkFBaUI7SUFDakIsbUJBQW1CO0VBQ3JCXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIioge1xcbiAgICBtYXJnaW46IDA7XFxuICAgIHBhZGRpbmc6IDA7XFxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxufVxcblxcbjpyb290IHtcXG4gICAgLS1mb3JtX2NvbG91cjogcmdiKDI1NSwgMjIyLCAxNjIpO1xcbn1cXG5cXG5ib2R5IHtcXG4gICAgZm9udC1mYW1pbHk6J1JvYm90bycsIHNhbnMtc2VyaWY7XFxuICAgIHdpZHRoOiAxMDB2dztcXG4gICAgaGVpZ2h0OiAxMDB2aDtcXG59XFxuXFxubWFpbiB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBoZWlnaHQ6IDEwMHZoO1xcbiAgICBtYXJnaW46IDAgYXV0bztcXG59XFxuXFxuaGVhZGVyIHtcXG4gICAgbWFyZ2luOiAydmggNXZ3IDAgYXV0bztcXG4gICAgaGVpZ2h0OiAxNXZoO1xcbiAgICBtYXgtd2lkdGg6IDYwMHB4O1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6ZmxleC1lbmQ7IFxcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG5oMSB7XFxuICAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XFxufVxcblxcbiNpY29uIHtcXG4gICAgLyogPGEgaHJlZj1cXFwiaHR0cHM6Ly93d3cuZmxhdGljb24uY29tL2ZyZWUtaWNvbnMvYmVlXFxcIiB0aXRsZT1cXFwiYmVlIGljb25zXFxcIj5CZWUgaWNvbnMgY3JlYXRlZCBieSBFdWNhbHlwIC0gRmxhdGljb248L2E+ICovXFxuICAgIGJhY2tncm91bmQ6IHVybChcXFwiLi9ob25leWNvbWIucG5nXFxcIik7XFxuICAgIHdpZHRoOiA4MHB4O1xcbiAgICBtYXJnaW46IDVweDtcXG59XFxuXFxubmF2IHtcXG4gICAgd2lkdGg6IDUwJTtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxufVxcblxcbm5hdiA+IGRpdiB7XFxuICAgIG1hcmdpbjogNXB4O1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICAgIHBhZGRpbmctdG9wOiAyMHB4O1xcbn1cXG5cXG4uaGV4YWdvbiB7XFxuICAgIHdpZHRoOiAxMDBweDtcXG4gICAgaGVpZ2h0OiA1Ny43MzVweDtcXG4gICAgYmFja2dyb3VuZDogb3JhbmdlO1xcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxufVxcblxcbi5oZXhhZ29uOjpiZWZvcmUge1xcbiAgICBjb250ZW50OiBcXFwiXFxcIjtcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICB0b3A6IC0yOC44Njc1cHg7XFxuICAgIGxlZnQ6IDA7XFxuICAgIHdpZHRoOiAwO1xcbiAgICBoZWlnaHQ6IDA7XFxuICAgIGJvcmRlci1sZWZ0OiA1MHB4IHNvbGlkIHRyYW5zcGFyZW50O1xcbiAgICBib3JkZXItcmlnaHQ6IDUwcHggc29saWQgdHJhbnNwYXJlbnQ7XFxuICAgIGJvcmRlci1ib3R0b206IDI4Ljg2NzVweCBzb2xpZCBvcmFuZ2U7O1xcbn1cXG5cXG4uaGV4YWdvbjo6YWZ0ZXIge1xcbiAgICBjb250ZW50OiBcXFwiXFxcIjtcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICBib3R0b206IC0yOC44Njc1cHg7XFxuICAgIGxlZnQ6IDA7XFxuICAgIHdpZHRoOiAwO1xcbiAgICBoZWlnaHQ6IDA7XFxuICAgIGJvcmRlci1sZWZ0OiA1MHB4IHNvbGlkIHRyYW5zcGFyZW50O1xcbiAgICBib3JkZXItcmlnaHQ6IDUwcHggc29saWQgdHJhbnNwYXJlbnQ7XFxuICAgIGJvcmRlci10b3A6IDI4Ljg2NzVweCBzb2xpZCBvcmFuZ2U7XFxufVxcblxcbi5wcm9qX2RpdiB7XFxuICAgIGJvcmRlcjogc29saWQgb3JhbmdlIDNweDtcXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAgcmdiKDI1NSwgMjIyLCAxNjIpO1xcbiAgICBwYWRkaW5nOiAycHg7XFxufVxcblxcbi5wcm9qX2RpdjpmaXJzdC1vZi10eXBlIHtcXG4gICAgbWFyZ2luLXRvcDogNTBweDtcXG59XFxuXFxuYXJ0aWNsZSB7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtdGVtcGxhdGU6IGF1dG8gLyA2ZnIgMmZyIDJmcjtcXG4gICAgZ2FwOiAyMHB4IDEwcHg7XFxuICAgIG1hcmdpbjogMnZoIDV2dyAwIDV2dztcXG59XFxuXFxuYXJ0aWNsZSA+IGRpdiB7XFxuICAgIGJvcmRlcjogc29saWQgb3JhbmdlO1xcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xcbiAgICBoZWlnaHQ6IDYwcHg7XFxuICAgIHBhZGRpbmc6IDEwcHggMCAwIDEwcHg7XFxufVxcblxcbi50aXRsZXMge1xcbiAgICBmb250LXNpemU6IDE4cHg7XFxuICAgIHBhZGRpbmctdG9wOiA1cHg7XFxuICAgIGJvcmRlcjogc29saWQgb3JhbmdlIDVweDtcXG4gICAgaGVpZ2h0OiA0MHB4O1xcbiAgICBiYWNrZ3JvdW5kOiByZ2IoMjUyLCAyMDUsIDExOSk7XFxufVxcblxcbmZvcm0ge1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIGJvdHRvbTogMTV2aDtcXG4gICAgcmlnaHQ6IDE1dnc7XFxuICAgIG1hcmdpbi1sZWZ0OiAxNXZ3O1xcbiAgICB3aWR0aDogNzAlO1xcbn1cXG5cXG5maWVsZHNldCB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIHBhZGRpbmc6IDIwcHg7XFxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxuICAgIGJvcmRlcjogc29saWQgb3JhbmdlIDIuNXB4O1xcbiAgICBiYWNrZ3JvdW5kOiB2YXIoLS1mb3JtX2NvbG91cik7XFxufVxcblxcbmxhYmVsIHtcXG4gICAgbWFyZ2luLWJvdHRvbTogNXB4O1xcbn1cXG5cXG5pbnB1dCB7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBtYXJnaW4tdG9wOiA1cHg7XFxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcXG4gICAgcGFkZGluZzogNXB4O1xcbn1cXG5cXG5pbnB1dDpsYXN0LW9mLXR5cGUge1xcbiAgICBtYXJnaW4tYm90dG9tOiAyNXB4O1xcbn1cXG5cXG5idXR0b24ge1xcbiAgICBwYWRkaW5nOiA1cHg7XFxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcXG4gICAgbWFyZ2luLWJvdHRvbTogMTBweDtcXG59XFxuXFxuZm9vdGVyIHtcXG4gICAgcG9zaXRpb246IHN0aWNreTtcXG4gICAgdG9wOiA5MHZoO1xcbiAgICBtYXJnaW46IDJ2aCA1dncgMCA1dnc7XFxuICAgIGhlaWdodDogMTV2aDtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OmZsZXgtZW5kOyBcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuI2FkZF9jaXJjbGUge1xcbiAgICB3aWR0aDogNTBweDtcXG4gICAgaGVpZ2h0OiA1MHB4O1xcbiAgICBib3JkZXI6IHNvbGlkIG9yYW5nZTtcXG4gICAgYmFja2dyb3VuZDogb3JhbmdlO1xcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XFxuICAgIGZvbnQtc2l6ZTogMy41cmVtO1xcbiAgICBsaW5lLWhlaWdodDogMS42cmVtO1xcbiAgfVwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTtcblxuICAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTtcblxuICAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uICh1cmwsIG9wdGlvbnMpIHtcbiAgaWYgKCFvcHRpb25zKSB7XG4gICAgb3B0aW9ucyA9IHt9O1xuICB9XG4gIGlmICghdXJsKSB7XG4gICAgcmV0dXJuIHVybDtcbiAgfVxuICB1cmwgPSBTdHJpbmcodXJsLl9fZXNNb2R1bGUgPyB1cmwuZGVmYXVsdCA6IHVybCk7XG5cbiAgLy8gSWYgdXJsIGlzIGFscmVhZHkgd3JhcHBlZCBpbiBxdW90ZXMsIHJlbW92ZSB0aGVtXG4gIGlmICgvXlsnXCJdLipbJ1wiXSQvLnRlc3QodXJsKSkge1xuICAgIHVybCA9IHVybC5zbGljZSgxLCAtMSk7XG4gIH1cbiAgaWYgKG9wdGlvbnMuaGFzaCkge1xuICAgIHVybCArPSBvcHRpb25zLmhhc2g7XG4gIH1cblxuICAvLyBTaG91bGQgdXJsIGJlIHdyYXBwZWQ/XG4gIC8vIFNlZSBodHRwczovL2RyYWZ0cy5jc3N3Zy5vcmcvY3NzLXZhbHVlcy0zLyN1cmxzXG4gIGlmICgvW1wiJygpIFxcdFxcbl18KCUyMCkvLnRlc3QodXJsKSB8fCBvcHRpb25zLm5lZWRRdW90ZXMpIHtcbiAgICByZXR1cm4gXCJcXFwiXCIuY29uY2F0KHVybC5yZXBsYWNlKC9cIi9nLCAnXFxcXFwiJykucmVwbGFjZSgvXFxuL2csIFwiXFxcXG5cIiksIFwiXFxcIlwiKTtcbiAgfVxuICByZXR1cm4gdXJsO1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZXMuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZXMuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuICByZXR1cm4gcmVzdWx0O1xufVxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7XG5cbiAgICAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cbiAgY3NzICs9IG9iai5jc3M7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH1cblxuICAvLyBGb3Igb2xkIElFXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIGlmICh0eXBlb2YgZG9jdW1lbnQgPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICByZXR1cm4ge1xuICAgICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUoKSB7fSxcbiAgICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge31cbiAgICB9O1xuICB9XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCJjbGFzcyBFdmVudHMge1xuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICB0aGlzLmV2ZW50cyA9IHt9O1xuICAgIH1cblxuICAgIG9uKGV2ZW50TmFtZSwgY2FsbEJhY2spIHtcbiAgICAgICAgdGhpcy5ldmVudHNbZXZlbnROYW1lXSA9IHRoaXMuZXZlbnRzW2V2ZW50TmFtZV0gfHwgW107XG4gICAgICAgIHRoaXMuZXZlbnRzW2V2ZW50TmFtZV0ucHVzaChjYWxsQmFjayk7XG4gICAgfVxuXG4gICAgdHJpZ2dlcihldmVudE5hbWUsIGRhdGEpIHtcbiAgICAgICAgaWYgKHRoaXMuZXZlbnRzW2V2ZW50TmFtZV0pIHtcbiAgICAgICAgICAgIHRoaXMuZXZlbnRzW2V2ZW50TmFtZV0uZm9yRWFjaChmdW5jID0+IHtcbiAgICAgICAgICAgICAgICBmdW5jKGRhdGEpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBsaXN0KCkge1xuICAgICAgICBjb25zb2xlLmxvZyh0aGlzLmV2ZW50cyk7XG4gICAgfVxufTtcblxuY29uc3QgZXZlbnQgPSBuZXcgRXZlbnRzKCk7XG5cbmV4cG9ydCBkZWZhdWx0IGV2ZW50O1xuXG4iLCJpbXBvcnQgZXZlbnQgZnJvbSBcIi4vZXZlbnRzXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGZvb3RlcigpIHtcbiAgICBjb25zdCBmb290ZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZm9vdGVyXCIpO1xuICAgIGNvbnN0IGFkZEJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG5cbiAgICBhZGRCdXR0b24uc2V0QXR0cmlidXRlKFwiaWRcIiwgXCJhZGRfY2lyY2xlXCIpO1xuICAgIGFkZEJ1dHRvbi5pbm5lclRleHQgPSBcIitcIjtcblxuICAgIGFkZEJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgZXZlbnQudHJpZ2dlcihcImZvcm1EaXNwbGF5VG9nZ2xlXCIpO1xuICAgICAgICBldmVudC50cmlnZ2VyKFwiYWRkQnV0dG9uVG9nZ2xlXCIpO1xuICAgIH0pO1xuXG4gICAgZXZlbnQub24oXCJhZGRCdXR0b25Ub2dnbGVcIiwgdG9nZ2xlQlROVGV4dClcblxuICAgIGZ1bmN0aW9uIHRvZ2dsZUJUTlRleHQoKSB7XG4gICAgICAgIGFkZEJ1dHRvbi5pbm5lclRleHQgPT09IFwiK1wiXG4gICAgICAgID8gYWRkQnV0dG9uLmlubmVyVGV4dCA9IFwiLVwiXG4gICAgICAgIDogYWRkQnV0dG9uLmlubmVyVGV4dCA9IFwiK1wiO1xuICAgIH1cblxuICAgIGZvb3Rlci5hcHBlbmRDaGlsZChhZGRCdXR0b24pO1xuXG4gICAgcmV0dXJuIGZvb3RlcjtcblxufVxuIiwiaW1wb3J0IGhvbmV5Y29tYiBmcm9tIFwiLi9ob25leWNvbWIucG5nXCI7XG5pbXBvcnQgZXZlbnQgZnJvbSBcIi4vZXZlbnRzXCI7XG5pbXBvcnQgcHJvamVjdHMgZnJvbSBcIi4vcHJvamVjdHNcIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gaGVhZGVyV2l0aE5hdigpIHtcbiAgICBjb25zdCBoZWFkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaGVhZGVyXCIpO1xuICAgIGNvbnN0IGgxID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImgxXCIpO1xuICAgIGNvbnN0IGxvZ28gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW1nXCIpO1xuICAgIGNvbnN0IG5hdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJuYXZcIik7XG4gICAgXG4gICAgaDEuaW5uZXJUZXh0ID0gXCJCZWUgQnV6enkuXCI7XG4gICAgbG9nby5zcmMgPSBob25leWNvbWI7XG4gICAgbG9nby5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBcImljb25cIik7XG4gICAgXG4gICAgLy8gQ1JFQVRFIFZJRVcgVEFCU1xuICAgIHByb2plY3RzKCk7XG4gICAgY29uc3QgZGl2UHJvamVjdHMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIGRpdlByb2plY3RzLnNldEF0dHJpYnV0ZShcImlkXCIsIFwicHJvamVjdHNcIik7XG4gICAgZGl2UHJvamVjdHMuc2V0QXR0cmlidXRlKFwiY2xhc3NcIiwgXCJoZXhhZ29uXCIpO1xuICAgIGRpdlByb2plY3RzLmlubmVyVGV4dCA9IFwiUHJvamVjdHNcIjtcbiAgICBkaXZQcm9qZWN0cy5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGUpID0+IHtcbiAgICAgICAgZGl2UHJvamVjdHMuY2hpbGRyZW4ubGVuZ3RoID4gMFxuICAgICAgICA/IGV2ZW50LnRyaWdnZXIoXCJyZW1vdmVQcm9qRGl2c1wiLCBlLnRhcmdldClcbiAgICAgICAgOiBldmVudC50cmlnZ2VyKFwiZ2V0UHJvamVjdHNMaXN0XCIpO1xuICAgIH0pO1xuXG4gICAgZXZlbnQub24oXCJyZW1vdmVQcm9qRGl2c1wiLCByZW1vdmVQcm9qRGl2cylcblxuICAgIGZ1bmN0aW9uIHJlbW92ZVByb2pEaXZzKHRhcmdldCkge1xuICAgICAgICBpZiAoIXRhcmdldCkge1xuICAgICAgICAgICAgd2hpbGUgKGRpdlByb2plY3RzLmZpcnN0Q2hpbGQpIHtcbiAgICAgICAgICAgICAgICBkaXZQcm9qZWN0cy5yZW1vdmVDaGlsZChkaXZQcm9qZWN0cy5maXJzdENoaWxkKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGRpdlByb2plY3RzLmlubmVyVGV4dCA9IFwiUHJvamVjdHNcIjtcbiAgICAgICAgfSBlbHNlIGlmICh0YXJnZXQuY2xhc3NOYW1lID09PSBcInByb2pfZGl2XCIpIHtcbiAgICAgICAgICAgIGV2ZW50LnRyaWdnZXIoXCJnZXRUYXNrc0J5UHJvamVjdFwiLCB0YXJnZXQpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgZXZlbnQub24oXCJzaG93UHJvakRpdnNcIiwgc2hvd1Byb2pEaXZzKTtcblxuICAgIGZ1bmN0aW9uIHNob3dQcm9qRGl2cyhhbGxQcm9qRGl2cykge1xuICAgICAgICBkaXZQcm9qZWN0cy5hcHBlbmQoLi4uYWxsUHJvakRpdnMpO1xuICAgIH1cblxuICAgIGNvbnN0IGRpdlRhc2tzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBkaXZUYXNrcy5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBcInRhc2tzXCIpO1xuICAgIGRpdlRhc2tzLnNldEF0dHJpYnV0ZShcImNsYXNzXCIsIFwiaGV4YWdvblwiKTtcbiAgICBkaXZUYXNrcy5pbm5lclRleHQgPSBcIkFsbCB0YXNrc1wiO1xuICAgIGRpdlRhc2tzLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgICAgIGV2ZW50LnRyaWdnZXIoXCJnZXRBbGxUYXNrc1wiLCBudWxsKTtcbiAgICB9KTtcblxuICAgIC8vIEFQUEVORCBWSUVXIFRBQlMgSU5UTyBOQVZcbiAgICBuYXYuYXBwZW5kQ2hpbGQoZGl2UHJvamVjdHMpO1xuICAgIG5hdi5hcHBlbmRDaGlsZChkaXZUYXNrcyk7XG5cbiAgICBoZWFkZXIuYXBwZW5kQ2hpbGQoaDEpO1xuICAgIGhlYWRlci5hcHBlbmRDaGlsZChsb2dvKTtcbiAgICBoZWFkZXIuYXBwZW5kQ2hpbGQobmF2KTtcblxuICAgIHJldHVybiBoZWFkZXI7XG59XG4iLCJpbXBvcnQgXCIuL3N0eWxlcy5jc3NcIjtcbmltcG9ydCBoZWFkZXJXaXRoTmF2IGZyb20gXCIuL2hlYWRlcldpdGhOYXZcIjtcbmltcG9ydCBmb290ZXIgZnJvbSBcIi4vZm9vdGVyXCI7XG5pbXBvcnQgcmVuZGVyVGFza3MgZnJvbSBcIi4vcmVuZGVyVGFza3NcIjtcbmltcG9ydCB0YXNrRm9ybSBmcm9tIFwiLi90YXNrRm9ybVwiO1xuXG5cbmZ1bmN0aW9uIGNvbXBvbmVudCgpIHtcblxuICAgIGNvbnN0IG1haW4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibWFpblwiKTtcbiAgICBcbiAgICBtYWluLmFwcGVuZENoaWxkKCBoZWFkZXJXaXRoTmF2KCkgKTtcbiAgICBtYWluLmFwcGVuZENoaWxkKCByZW5kZXJUYXNrcygpICk7XG4gICAgbWFpbi5hcHBlbmRDaGlsZCggZm9vdGVyKCkgKTtcbiAgICBtYWluLmFwcGVuZENoaWxkKCB0YXNrRm9ybSgpICk7XG5cbiAgICByZXR1cm4gbWFpbjtcblxufVxuXG5kb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKGNvbXBvbmVudCgpKTtcbiIsImltcG9ydCBldmVudCBmcm9tIFwiLi9ldmVudHNcIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gcHJvamVjdHMoKSB7XG4gICAgZXZlbnQub24oXCJtYWtlUHJvakRpdnNcIiwgc2hvd1Byb2pPcHRpb25zKTtcblxuICAgIGZ1bmN0aW9uIHNob3dQcm9qT3B0aW9ucyhwcm9qZWN0cykge1xuICAgICAgICBjb25zdCBhbGxQcm9qRGl2cyA9IFtdO1xuICAgICAgICBwcm9qZWN0cy5mb3JFYWNoKHByb2plY3QgPT4ge1xuICAgICAgICAgICAgY29uc3QgcHJvakRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICAgICAgICBwcm9qRGl2LnNldEF0dHJpYnV0ZShcImNsYXNzXCIsIFwicHJval9kaXZcIik7XG4gICAgICAgICAgICBwcm9qRGl2LmlubmVySFRNTCA9IHByb2plY3Q7XG4gICAgICAgICAgICBhbGxQcm9qRGl2cy5wdXNoKHByb2pEaXYpO1xuICAgICAgICB9KVxuICAgICAgICBldmVudC50cmlnZ2VyKFwic2hvd1Byb2pEaXZzXCIsIGFsbFByb2pEaXZzKTtcbiAgICB9XG59XG4iLCJpbXBvcnQgZXZlbnQgZnJvbSBcIi4vZXZlbnRzXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHJlbmRlclRhc2tzKCkge1xuICAgIGNvbnN0IHNlY3Rpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic2VjdGlvblwiKTtcblxuICAgIGNvbnN0IHRpdGxlc0FydGljbGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYXJ0aWNsZVwiKTtcbiAgICBjb25zdCB0YXNrVGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIGNvbnN0IGR1ZVRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBjb25zdCBjb21wVGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuXG4gICAgdGFza1RpdGxlLnNldEF0dHJpYnV0ZShcImNsYXNzXCIsIFwidGl0bGVzXCIpO1xuICAgIGR1ZVRpdGxlLnNldEF0dHJpYnV0ZShcImNsYXNzXCIsIFwidGl0bGVzXCIpO1xuICAgIGNvbXBUaXRsZS5zZXRBdHRyaWJ1dGUoXCJjbGFzc1wiLFwidGl0bGVzXCIpO1xuICAgIHRhc2tUaXRsZS5pbm5lckhUTUwgPSBcIlRBU0sgLSBjbGljayBpdGVtIGZvciBmdWxsIGRldGFpbFwiO1xuICAgIGR1ZVRpdGxlLmlubmVySFRNTCA9IFwiRFVFXCI7XG4gICAgY29tcFRpdGxlLmlubmVySFRNTCA9IFwiRE9ORT9cIjtcblxuICAgIHRpdGxlc0FydGljbGUuYXBwZW5kKCB0YXNrVGl0bGUsIGR1ZVRpdGxlLCBjb21wVGl0bGUgKTtcbiAgICBzZWN0aW9uLmFwcGVuZCggdGl0bGVzQXJ0aWNsZSApO1xuXG4gICAgXG4gICAgZXZlbnQub24oXCJzaG93VGFza1wiLCByZW5kZXJUYXNrKTtcbiAgICBldmVudC5vbihcInVwZGF0ZVRhc2tcIiwgZmlyc3RSZW1vdmVPbGRUYXNrKTtcblxuICAgIGZ1bmN0aW9uIHJlbmRlclRhc2sodGFzaykge1xuXG4gICAgICAgIGNvbnN0IHRhc2tBcnRpY2xlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImFydGljbGVcIik7XG4gICAgICAgIHRhc2tBcnRpY2xlLnNldEF0dHJpYnV0ZShcImlkXCIsIHRhc2suaWQpO1xuICAgICAgICB0YXNrQXJ0aWNsZS5zZXRBdHRyaWJ1dGUoXCJjbGFzc1wiLCBcInRhc2tfYXJ0aWNsZVwiKTtcbiAgICAgICAgdGFza0FydGljbGUuZGF0YXNldC5wcm9qX3R5cGUgPSB0YXNrLnByb2plY3Q7XG5cbiAgICAgICAgY29uc3QgdGFza0RpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICAgIHRhc2tEaXYuc2V0QXR0cmlidXRlKFwiY2xhc3NcIiwgXCJ0YXNrXCIpO1xuICAgICAgICB0YXNrRGl2LmlubmVySFRNTCA9IHRhc2tbXCJ0YXNrVGl0bGVcIl07XG4gICAgICAgIHRhc2tEaXYuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgICAgICBldmVudC50cmlnZ2VyKFwiZ2V0VGFza0RhdGFcIiwgdGFzay5pZCk7XG4gICAgICAgIH0pO1xuICAgICAgICAgICAgXG4gICAgICAgIGNvbnN0IGR1ZURpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICAgIGR1ZURpdi5zZXRBdHRyaWJ1dGUoXCJjbGFzc1wiLCBcInRhc2tcIik7XG4gICAgICAgIGR1ZURpdi5pbm5lckhUTUwgPSB0YXNrW1wiZHVlRGF0ZVwiXTtcbiAgICAgICAgICAgIFxuICAgICAgICBjb25zdCBjb21wRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgICAgY29tcERpdi5zZXRBdHRyaWJ1dGUoXCJjbGFzc1wiLCBcInRhc2tcIik7XG4gICAgICAgIGNvbXBEaXYuaW5uZXJIVE1MID0gdGFza1tcImNvbXBsZXRlXCJdO1xuXG4gICAgICAgIHRhc2tBcnRpY2xlLmFwcGVuZCggdGFza0RpdiwgZHVlRGl2LCBjb21wRGl2ICk7XG4gICAgICAgIHNlY3Rpb24uYXBwZW5kKCB0YXNrQXJ0aWNsZSApO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIGZpcnN0UmVtb3ZlT2xkVGFzayh0YXNrKSB7XG4gICAgICAgIGNvbnN0IHRhc2tBcnRpY2xlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQodGFzay5pZCk7XG4gICAgICAgIGNvbnN0IHRhc2tEaXZzID0gdGFza0FydGljbGUuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZShcInRhc2tcIik7XG4gICAgICAgIHRhc2tEaXZzLmZvckVhY2goIGRpdiA9PiBkaXYucmVtb3ZlKCkgKTtcblxuICAgICAgICBjb25zdCB0YXNrRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgICAgdGFza0Rpdi5zZXRBdHRyaWJ1dGUoXCJjbGFzc1wiLCBcInRhc2tcIik7XG4gICAgICAgIHRhc2tEaXYuaW5uZXJIVE1MID0gdGFza1tcInRhc2tUaXRsZVwiXTtcbiAgICAgICAgdGFza0Rpdi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgICAgIGV2ZW50LnRyaWdnZXIoXCJnZXRUYXNrRGF0YVwiLCB0YXNrLmlkKTtcbiAgICAgICAgfSk7XG4gICAgICAgICAgICBcbiAgICAgICAgY29uc3QgZHVlRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgICAgZHVlRGl2LnNldEF0dHJpYnV0ZShcImNsYXNzXCIsIFwidGFza1wiKTtcbiAgICAgICAgZHVlRGl2LmlubmVySFRNTCA9IHRhc2suZHVlRGF0ZTtcbiAgICAgICAgICAgIFxuICAgICAgICBjb25zdCBjb21wRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgICAgY29tcERpdi5zZXRBdHRyaWJ1dGUoXCJjbGFzc1wiLCBcInRhc2tcIik7XG4gICAgICAgIGNvbXBEaXYuaW5uZXJIVE1MID0gdGFzay5jb21wbGV0ZTtcblxuICAgICAgICB0YXNrQXJ0aWNsZS5hcHBlbmQoIHRhc2tEaXYsIGR1ZURpdiwgY29tcERpdiApO1xuXG4gICAgfVxuXG4gICAgZXZlbnQub24oXCJzaG93TWFueVRhc2tzXCIsIGNsZWFyT2xkVGFza3NUaGVuU2hvd05ldyk7XG5cbiAgICBmdW5jdGlvbiBjbGVhck9sZFRhc2tzVGhlblNob3dOZXcobWFueVRhc2tzKSB7XG4gICAgICAgIGNvbnN0IGFsbFRhc2tBcnRpY2xlcyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoXCJ0YXNrX2FydGljbGVcIik7XG5cbiAgICAgICAgaWYgKGFsbFRhc2tBcnRpY2xlcy5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICBhbGxUYXNrQXJ0aWNsZXMuZm9yRWFjaCggYXJ0aWNsZSA9PiBhcnRpY2xlLnJlbW92ZSgpICk7XG4gICAgICAgIH1cblxuICAgICAgICBtYW55VGFza3MubWFwKHRhc2sgPT4ge1xuICAgICAgICAgICAgZXZlbnQudHJpZ2dlcihcInNob3dUYXNrXCIsIHRhc2spO1xuICAgICAgICB9KTtcblxuICAgICAgICBldmVudC50cmlnZ2VyKFwicmVtb3ZlUHJvakRpdnNcIik7XG4gICAgfVxuXG4gICAgcmV0dXJuIHNlY3Rpb247XG59XG4iLCJpbXBvcnQgZXZlbnQgZnJvbSBcIi4vZXZlbnRzXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHRhc2tGb3JtKCkge1xuICAgIGNvbnN0IHJvb3QgPSBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQ7XG4gICAgY29uc3QgdGFza0Zvcm0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZm9ybVwiKTtcbiAgICB0YXNrRm9ybS5zZXRBdHRyaWJ1dGUoJ25vdmFsaWRhdGUnLCB0cnVlKTtcbiAgICB0YXNrRm9ybS5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XG4gICAgdGFza0Zvcm0uaW5uZXJIVE1MID0gYFxuICAgICAgICA8ZmllbGRzZXQ+XG4gICAgICAgICAgICA8bGFiZWwgZm9yPVwidGFza190aXRsZVwiPlRhc2sgdGl0bGVcbiAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBuYW1lPVwidGFza1RpdGxlXCIgaWQ9XCJ0YXNrX3RpdGxlXCIgcmVxdWlyZWQ+XG4gICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJlcnJvclwiPjwvc3Bhbj5cbiAgICAgICAgICAgIDwvbGFiZWw+XG5cbiAgICAgICAgICAgIDxsYWJlbCBmb3I9XCJkZXNjcmlwdGlvblwiPkRlc2NyaXB0aW9uXG4gICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgbmFtZT1cImRlc2NyaXB0aW9uXCIgaWQ9XCJkZXNjcmlwdGlvblwiIHJlcXVpcmVkPlxuICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwiZXJyb3JcIj48L3NwYW4+XG4gICAgICAgICAgICA8L2xhYmVsPlxuXG4gICAgICAgICAgICA8bGFiZWwgZm9yPVwiZHVlX2RhdGVcIj5EdWUgZGF0ZVxuICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIG5hbWU9XCJkdWVEYXRlXCIgaWQ9XCJkdWVfZGF0ZVwiIHJlcXVpcmVkPlxuICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwiZXJyb3JcIj48L3NwYW4+XG4gICAgICAgICAgICA8L2xhYmVsPlxuXG4gICAgICAgICAgICA8bGFiZWwgZm9yPVwicmF0aW5nXCI+UmF0aW5nXG4gICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgbmFtZT1cInJhdGluZ1wiIGlkPVwicmF0aW5nXCIgcmVxdWlyZWQ+XG4gICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJlcnJvclwiPjwvc3Bhbj5cbiAgICAgICAgICAgIDwvbGFiZWw+XG5cbiAgICAgICAgICAgIDxsYWJlbCBmb3I9XCJwcm9qZWN0XCI+UHJvamVjdFxuICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIG5hbWU9XCJwcm9qZWN0XCIgaWQ9XCJwcm9qZWN0XCIgcmVxdWlyZWQ+XG4gICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJlcnJvclwiPjwvc3Bhbj5cbiAgICAgICAgICAgIDwvbGFiZWw+XG4gICAgICAgICAgICA8YnV0dG9uIHR5cGU9XCJzdWJtaXRcIiBpZD1cInN1Ym1pdFwiPkxvZyBUYXNrPC9idXR0b24+XG4gICAgICAgIDwvZmllbGRzZXQ+ICAgIFxuICAgIGA7XG5cbiAgICBldmVudC5vbihcImZvcm1EaXNwbGF5VG9nZ2xlXCIsIGRpc3BsYXlUb2dnbGUpO1xuXG4gICAgZnVuY3Rpb24gZGlzcGxheVRvZ2dsZSgpIHtcbiAgICAgICAgcmVzZXRGb3JtKCk7XG4gICAgICAgIHRhc2tGb3JtLnN0eWxlLmRpc3BsYXkgPT09IFwibm9uZVwiIFxuICAgICAgICA/IHRhc2tGb3JtLnN0eWxlLmRpc3BsYXkgPSBcImJsb2NrXCJcbiAgICAgICAgOiB0YXNrRm9ybS5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XG4gICAgfTtcblxuICAgIHRhc2tGb3JtLmFkZEV2ZW50TGlzdGVuZXIoJ3N1Ym1pdCcsIChlKSA9PiB7XG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgZ2V0Rm9ybURhdGFUb0FycmF5QW5kU2VuZChlLnRhcmdldFswXS5pZCk7IFxuICAgICAgICByZXNldEZvcm0oKTtcbiAgICB9KTtcblxuICAgIGZ1bmN0aW9uIGdldEZvcm1EYXRhVG9BcnJheUFuZFNlbmQoaWQpIHtcbiAgICAgICAgY29uc3QgZm9ybURhdGEgPSBuZXcgRm9ybURhdGEodGFza0Zvcm0pO1xuICAgICAgICBjb25zdCBzZW5kRm9ybURhdGEgPSB7fTtcbiAgICAgICAgaWQgIT09IFwiXCIgPyBzZW5kRm9ybURhdGEuaWQgPSBpZCA6IHNlbmRGb3JtRGF0YS5pZCA9IG51bGw7XG4gICAgICAgIGZvciAoY29uc3QgcGFpciBvZiBmb3JtRGF0YS5lbnRyaWVzKCkpIHtcbiAgICAgICAgICBzZW5kRm9ybURhdGFbcGFpclswXV09cGFpclsxXTtcbiAgICAgICAgfVxuICAgICAgICBzZW5kRm9ybURhdGEuY29tcGxldGUgPSBcImZhbHNlXCI7XG5cbiAgICAgICAgZXZlbnQudHJpZ2dlcihcImRhdGFGcm9tRm9ybVwiLCBzZW5kRm9ybURhdGEpO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIHJlc2V0Rm9ybSgpIHtcbiAgICAgICAgc2V0VGltZW91dCggKCkgPT4ge1xuICAgICAgICAgICAgdGFza0Zvcm0ucmVzZXQoKTtcbiAgICAgICAgICAgIGNvbnN0IGZpZWxkc2V0Rm9ySUQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiZmllbGRzZXRcIik7XG4gICAgICAgICAgICBmaWVsZHNldEZvcklELnJlbW92ZUF0dHJpYnV0ZShcImlkXCIpO1xuICAgICAgICAgICAgY29uc3QgYnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNzdWJtaXRcIik7XG4gICAgICAgICAgICBidG4uaW5uZXJIVE1MID0gXCJMb2cgVGFza1wiO1xuICAgICAgICAgICAgcm9vdC5zdHlsZS5zZXRQcm9wZXJ0eShcIi0tZm9ybV9jb2xvdXJcIiwgXCJyZ2IoMjU1LCAyMjIsIDE2MilcIik7XG4gICAgICAgICAgICB0YXNrRm9ybS5zdHlsZS5kaXNwbGF5ID09PSBcIm5vbmVcIjtcbiAgICAgICAgfSwgMjUwKTtcbiAgICB9O1xuXG4gICAgZXZlbnQub24oXCJzaG93Rm9ybVdpdGhSZXRyaWV2ZWREYXRhXCIsIGZvcm1XaXRoUmV0cmlldmVkRGF0YSk7XG5cbiAgICBmdW5jdGlvbiBmb3JtV2l0aFJldHJpZXZlZERhdGEocmV0cmlldmVkVGFza0RhdGEpIHtcbiAgICAgICAgXG4gICAgICAgIC8vIFRPR0dMRVMgJysnLyctJyBXSEVOIEVESVQgRk9STSBJUyBGSVJTVCBESVNQTEFZRUQgT05MWVxuICAgICAgICBjb25zdCBmb3JtQ29sb3VyID0gZ2V0Q29tcHV0ZWRTdHlsZShyb290KS5nZXRQcm9wZXJ0eVZhbHVlKFwiLS1mb3JtX2NvbG91clwiKTtcbiAgICAgICAgZm9ybUNvbG91ciA9PT0gXCJyZ2IoMjU1LCAyMjIsIDE2MilcIiAmJiB0YXNrRm9ybS5zdHlsZS5kaXNwbGF5ID09PSBcIm5vbmVcIlxuICAgICAgICA/IGV2ZW50LnRyaWdnZXIoXCJhZGRCdXR0b25Ub2dnbGVcIilcbiAgICAgICAgOiBmYWxzZTtcbiAgICAgICAgXG4gICAgICAgIHJvb3Quc3R5bGUuc2V0UHJvcGVydHkoXCItLWZvcm1fY29sb3VyXCIsIFwibGlnaHRibHVlXCIpO1xuICAgICAgICB0YXNrRm9ybS5zdHlsZS5kaXNwbGF5ID0gXCJibG9ja1wiO1xuXG4gICAgICAgIGNvbnN0IGFsbElucHV0cyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCJpbnB1dFwiKTtcbiAgICAgICAgY29uc3QgZmllbGRzZXRGb3JJRCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJmaWVsZHNldFwiKTtcblxuICAgICAgICBhbGxJbnB1dHNbMF0udmFsdWUgPSByZXRyaWV2ZWRUYXNrRGF0YS50YXNrVGl0bGU7XG4gICAgICAgIGFsbElucHV0c1sxXS52YWx1ZSA9IHJldHJpZXZlZFRhc2tEYXRhLmRlc2NyaXB0aW9uO1xuICAgICAgICBhbGxJbnB1dHNbMl0udmFsdWUgPSByZXRyaWV2ZWRUYXNrRGF0YS5kdWVEYXRlO1xuICAgICAgICBhbGxJbnB1dHNbM10udmFsdWUgPSByZXRyaWV2ZWRUYXNrRGF0YS5yYXRpbmc7XG4gICAgICAgIGFsbElucHV0c1s0XS52YWx1ZSA9IHJldHJpZXZlZFRhc2tEYXRhLnByb2plY3Q7XG4gICAgICAgIC8vIFBhc3MgdGhlIHRhc2tJRCB0byB0aGUgZmllbGRzZXQgYW5kIHJldHJpZXZlIHdoZW4gXG4gICAgICAgIC8vIHN1Ym1pdHRpbmcgdGhlIGZvcm0gdG8gdXBkYXRlIGNvcnJlc3BvbmRpbmcgcmVjb3JkLlxuICAgICAgICBmaWVsZHNldEZvcklELnNldEF0dHJpYnV0ZShcImlkXCIsIHJldHJpZXZlZFRhc2tEYXRhLmlkKTtcbiAgICBcbiAgICAgICAgY29uc3QgYnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNzdWJtaXRcIik7XG4gICAgICAgIGJ0bi5pbm5lckhUTUwgPSBcIkNsaWNrIHRvIHNhdmUgYW55IHVwZGF0ZXNcIjtcbiAgICB9XG5cbiAgICByZXR1cm4gdGFza0Zvcm07XG59XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=