/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, "html, body, main{\n    height: 100%;\n}\n\nbody {\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    background-color: rgba(0, 153, 255, 0.61);\n}\n\n#content {\n    display: flex;\n    flex-direction: column;\n    height: 60vh;\n    width: 60vw;\n    border: 4px solid black;\n}\n\n/* Header */\n\nheader {\n    display: flex;\n    background-color: rgba(143, 5, 1, 0.61);\n}\n\n.logo {\n    display: flex;\n    background-color: red;\n    background:\n        linear-gradient(-45deg, transparent 30%, red 0);\n}\n\n.icon {\n    border-radius: 50%;\n    height: 100px;\n    width: 100px;\n    /* position: relative;\n    top: -10vh;\n    left: -5vw;\n    transform: scale(0.3); */\n}\n\n.subtitle {\n    height: 50%;\n    width: 100%;\n    background-color: rgb(255, 145, 0);\n}\n\n/* Main: Sidebar and Project Display */\n\nmain {\n    display: flex;\n    align-items: stretch;\n}\n\nmain > * {\n    padding: 1em;\n}\n\n/* Sidebar */\n\n.sidebar {\n    width: 15vw;\n    border: 4px solid white;\n}\n\n.sidebar > * {\n    margin: 1em;\n}\n\n.general-tab:hover, .sidebar-project:hover {\n    text-shadow: 2px 2px white;\n}\n\n.sidebar-project {\n    display: flex;\n    justify-content: space-between;\n    margin: 0 1em;\n    cursor: default;\n}\n\n.project-form {\n    display: none;\n}\n\n.add-project {\n    margin: 0 1em;\n}\n\n.delete-project {\n    display: none;\n}\n\n.sidebar-project:hover .delete-project {\n    display: block;\n}\n\n.delete-project:hover {\n    cursor: pointer;\n}\n\n.onDisplay {\n    background-color: rgba(122, 0, 153, 0.637);\n}\n\n/* Project Display */\n\n.task {\n    border: 2px solid white;\n}\n\n.task-header {\n    display: flex;\n    cursor: pointer;\n}\n\n.show-detail {\n    background-color: red;\n}\n\n.task-detail {\n    display: none;\n    overflow: hidden;\n    padding: 0 18px;\n    background-color: #f1f1f1;\n}\n\n.labels {\n    display: flex;\n}\n\n.notes {\n    display: flex;\n}\n\n.task-form {\n    display: none;\n}\n\n/* body {\n    font-family:'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;\n    height: 100vh;\n    display: flex;\n    align-items: stretch;\n    overflow-y:hidden;\n}\n\nhr {\n    border: #315a83 4px solid;\n}\n\nul {\n    padding-left: 0;\n    font-size: 28px;\n}\n\nli {\n    display: flex;\n    flex-direction: column;\n}\n.sidebar {\n    display: flex;\n    flex-direction: column;\n    background-color: #7b1800;\n    width: 450px;\n    overflow-x: hidden;\n    transition: 0.5s;\n}\n\n.sidebar-item {\n    font-size: 28px;\n    color: #aaa5a5;\n    display: block;\n    transition: 0.3s;\n    padding: 10px 38px;\n    border-bottom: #315a83 4px solid;\n}\n\n.sidebar-item:hover {\n    color: #efe74a;\n    background-color: #3184C6;\n    cursor: pointer;\n}\n\n.sidebar-title {\n    text-align: center;\n    background-color: #BC1828;\n    color: #ddd2d2;\n    padding: 10px;\n    font-size: 40px;\n}\n\n.main {\n    background-color: #6BB5E7;\n    width: 100%;\n    padding: 50px;\n}\n\n.project-container {\n    padding: 5px 26px;\n}\n\n.project-title {\n    font-size: 40px;\n}\n\n.project-list-item {\n    display: flex;\n    align-items: center;\n}\n\n.project-list-item:hover {\n    border: #315a83 4px solid;\n    cursor: pointer;\n}\n\n.quick-info-container {\n    display: flex;\n    width: 100%;\n    align-items: center;\n    padding: 10px;\n}\n\n.quickinfo-subcontainer {\n    display:flex;\n    width: 100%;\n    justify-content: space-between;\n}\n\n.new-todo-input {\n    font-size: 28px;\n    width: 100%;\n}\n\n.labels-container {\n    display: flex;\n}\n\n.priority-0 {\n    background-color: white;\n}\n\n.priority-1 {\n    background-color: #ffc552;\n}\n\n.priority-2 {\n    background-color: #e67b7b;\n}\n\n.priority-3 {\n    background-color: #7b1800;\n    color: white;\n}\n\nbutton {\n    font-size: 24px;\n    border-radius: 20px;\n    background-color: #3184C6;\n}\n\n#add-todo-button {\n    text-align: center;\n    justify-content: center;\n    width: 100%;\n    padding: 10px;\n}\n\n.new-project-input {\n    background-color: #7b1800;\n    border-width: 0px;\n    font-size: 28px;\n    color: #aaa5a5;\n    width: 100%;\n}\n\ninput:focus, textarea:focus, select:focus {\n    outline: none;\n} */", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"AAAA;IACI,YAAY;AAChB;;AAEA;IACI,aAAa;IACb,uBAAuB;IACvB,mBAAmB;IACnB,yCAAyC;AAC7C;;AAEA;IACI,aAAa;IACb,sBAAsB;IACtB,YAAY;IACZ,WAAW;IACX,uBAAuB;AAC3B;;AAEA,WAAW;;AAEX;IACI,aAAa;IACb,uCAAuC;AAC3C;;AAEA;IACI,aAAa;IACb,qBAAqB;IACrB;uDACmD;AACvD;;AAEA;IACI,kBAAkB;IAClB,aAAa;IACb,YAAY;IACZ;;;4BAGwB;AAC5B;;AAEA;IACI,WAAW;IACX,WAAW;IACX,kCAAkC;AACtC;;AAEA,sCAAsC;;AAEtC;IACI,aAAa;IACb,oBAAoB;AACxB;;AAEA;IACI,YAAY;AAChB;;AAEA,YAAY;;AAEZ;IACI,WAAW;IACX,uBAAuB;AAC3B;;AAEA;IACI,WAAW;AACf;;AAEA;IACI,0BAA0B;AAC9B;;AAEA;IACI,aAAa;IACb,8BAA8B;IAC9B,aAAa;IACb,eAAe;AACnB;;AAEA;IACI,aAAa;AACjB;;AAEA;IACI,aAAa;AACjB;;AAEA;IACI,aAAa;AACjB;;AAEA;IACI,cAAc;AAClB;;AAEA;IACI,eAAe;AACnB;;AAEA;IACI,0CAA0C;AAC9C;;AAEA,oBAAoB;;AAEpB;IACI,uBAAuB;AAC3B;;AAEA;IACI,aAAa;IACb,eAAe;AACnB;;AAEA;IACI,qBAAqB;AACzB;;AAEA;IACI,aAAa;IACb,gBAAgB;IAChB,eAAe;IACf,yBAAyB;AAC7B;;AAEA;IACI,aAAa;AACjB;;AAEA;IACI,aAAa;AACjB;;AAEA;IACI,aAAa;AACjB;;AAEA;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;GA2IG","sourcesContent":["html, body, main{\n    height: 100%;\n}\n\nbody {\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    background-color: rgba(0, 153, 255, 0.61);\n}\n\n#content {\n    display: flex;\n    flex-direction: column;\n    height: 60vh;\n    width: 60vw;\n    border: 4px solid black;\n}\n\n/* Header */\n\nheader {\n    display: flex;\n    background-color: rgba(143, 5, 1, 0.61);\n}\n\n.logo {\n    display: flex;\n    background-color: red;\n    background:\n        linear-gradient(-45deg, transparent 30%, red 0);\n}\n\n.icon {\n    border-radius: 50%;\n    height: 100px;\n    width: 100px;\n    /* position: relative;\n    top: -10vh;\n    left: -5vw;\n    transform: scale(0.3); */\n}\n\n.subtitle {\n    height: 50%;\n    width: 100%;\n    background-color: rgb(255, 145, 0);\n}\n\n/* Main: Sidebar and Project Display */\n\nmain {\n    display: flex;\n    align-items: stretch;\n}\n\nmain > * {\n    padding: 1em;\n}\n\n/* Sidebar */\n\n.sidebar {\n    width: 15vw;\n    border: 4px solid white;\n}\n\n.sidebar > * {\n    margin: 1em;\n}\n\n.general-tab:hover, .sidebar-project:hover {\n    text-shadow: 2px 2px white;\n}\n\n.sidebar-project {\n    display: flex;\n    justify-content: space-between;\n    margin: 0 1em;\n    cursor: default;\n}\n\n.project-form {\n    display: none;\n}\n\n.add-project {\n    margin: 0 1em;\n}\n\n.delete-project {\n    display: none;\n}\n\n.sidebar-project:hover .delete-project {\n    display: block;\n}\n\n.delete-project:hover {\n    cursor: pointer;\n}\n\n.onDisplay {\n    background-color: rgba(122, 0, 153, 0.637);\n}\n\n/* Project Display */\n\n.task {\n    border: 2px solid white;\n}\n\n.task-header {\n    display: flex;\n    cursor: pointer;\n}\n\n.show-detail {\n    background-color: red;\n}\n\n.task-detail {\n    display: none;\n    overflow: hidden;\n    padding: 0 18px;\n    background-color: #f1f1f1;\n}\n\n.labels {\n    display: flex;\n}\n\n.notes {\n    display: flex;\n}\n\n.task-form {\n    display: none;\n}\n\n/* body {\n    font-family:'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;\n    height: 100vh;\n    display: flex;\n    align-items: stretch;\n    overflow-y:hidden;\n}\n\nhr {\n    border: #315a83 4px solid;\n}\n\nul {\n    padding-left: 0;\n    font-size: 28px;\n}\n\nli {\n    display: flex;\n    flex-direction: column;\n}\n.sidebar {\n    display: flex;\n    flex-direction: column;\n    background-color: #7b1800;\n    width: 450px;\n    overflow-x: hidden;\n    transition: 0.5s;\n}\n\n.sidebar-item {\n    font-size: 28px;\n    color: #aaa5a5;\n    display: block;\n    transition: 0.3s;\n    padding: 10px 38px;\n    border-bottom: #315a83 4px solid;\n}\n\n.sidebar-item:hover {\n    color: #efe74a;\n    background-color: #3184C6;\n    cursor: pointer;\n}\n\n.sidebar-title {\n    text-align: center;\n    background-color: #BC1828;\n    color: #ddd2d2;\n    padding: 10px;\n    font-size: 40px;\n}\n\n.main {\n    background-color: #6BB5E7;\n    width: 100%;\n    padding: 50px;\n}\n\n.project-container {\n    padding: 5px 26px;\n}\n\n.project-title {\n    font-size: 40px;\n}\n\n.project-list-item {\n    display: flex;\n    align-items: center;\n}\n\n.project-list-item:hover {\n    border: #315a83 4px solid;\n    cursor: pointer;\n}\n\n.quick-info-container {\n    display: flex;\n    width: 100%;\n    align-items: center;\n    padding: 10px;\n}\n\n.quickinfo-subcontainer {\n    display:flex;\n    width: 100%;\n    justify-content: space-between;\n}\n\n.new-todo-input {\n    font-size: 28px;\n    width: 100%;\n}\n\n.labels-container {\n    display: flex;\n}\n\n.priority-0 {\n    background-color: white;\n}\n\n.priority-1 {\n    background-color: #ffc552;\n}\n\n.priority-2 {\n    background-color: #e67b7b;\n}\n\n.priority-3 {\n    background-color: #7b1800;\n    color: white;\n}\n\nbutton {\n    font-size: 24px;\n    border-radius: 20px;\n    background-color: #3184C6;\n}\n\n#add-todo-button {\n    text-align: center;\n    justify-content: center;\n    width: 100%;\n    padding: 10px;\n}\n\n.new-project-input {\n    background-color: #7b1800;\n    border-width: 0px;\n    font-size: 28px;\n    color: #aaa5a5;\n    width: 100%;\n}\n\ninput:focus, textarea:focus, select:focus {\n    outline: none;\n} */"],"sourceRoot":""}]);
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
  var list = []; // return the list of modules as css string

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
  }; // import a list of modules into the list


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
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || "").concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join("\n");
  }

  return [content].join("\n");
};

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
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
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./src/style.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


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
    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

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
  } // For old IE

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

/***/ "./src/createInputBox.js":
/*!*******************************!*\
  !*** ./src/createInputBox.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ createInputBox)
/* harmony export */ });
function createInputBox(type) {
    let placeholderText;
    let textInputClass;
    const textInput = document.createElement('input');

    function inputFn() {
        
    };

    if (type == 'project') {
        placeholderText = 'New Project';
        textInputClass = 'new-project-input';
    } else if (type == 'todo') {
        placeholderText = 'New Todo';
        textInputClass = 'new-todo-input';
    };
    
    textInput.setAttribute('type', 'text');
    textInput.setAttribute('placeholder', placeholderText);
    textInput.classList.add(textInputClass);

    textInput.addEventListener('input', inputFn);

    return textInput;
};

/***/ }),

/***/ "./src/domManager.js":
/*!***************************!*\
  !*** ./src/domManager.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _project__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./project */ "./src/project.js");
/* harmony import */ var _task__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./task */ "./src/task.js");
/* harmony import */ var _createInputBox__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./createInputBox */ "./src/createInputBox.js");




const domManager = (function() {

    // DOM Elements
    const projectTab = document.getElementById('project-tab');
    const projectList = document.querySelector('.project-list');
    const addProject = document.querySelector('.add-project');
    const projectForm = document.querySelector('.project-form');
    const projectDisplay = document.querySelector('.project-container');
    
    let onDisplayIndex = 0;

    // Helpers
    function initDisplay() {
        displayProjectList();
        displayProject(0);

        const userInput = document.getElementById('new-project');

        // Eventlisteners
        //
        // Add project button
        addProject.addEventListener('click', function() {
            projectForm.style.display = 'block';
            userInput.select();
        });

        projectForm.addEventListener('submit', function(e) {
            projectList.append(createSidebarProject(userInput.value, _project__WEBPACK_IMPORTED_MODULE_0__["default"].projectCount));
            _project__WEBPACK_IMPORTED_MODULE_0__["default"].addProject(userInput.value);
            e.target.style.display ='none';
            userInput.value = '';
            e.preventDefault();
        });
    };

    function resetDisplay() {
        while (projectList.hasChildNodes()) {projectList.removeChild(projectList.firstChild)};
        displayProjectList();

        projectDisplay.removeChild(projectDisplay.firstChild);
        displayProject(onDisplayIndex);

        console.log(document.querySelector('.onDisplay'));
        // if (!document.querySelector('.onDisplay')) {
        //     document.querySelector(`[project-index="${onDisplayIndex}"]`).classList.add('onDisplay');
        // }
    }

    function createContainer(...args) {
        const container = document.createElement('div');
        args.forEach((element) => container.classList.add(element));
        return container;
    };
    
    function createTextContainer(text, className) {
        const textContainer = createContainer(className);
        textContainer.textContent = text;
        return textContainer;
    };

    // Sidebar Display functions
    function displayProjectList() {
        console.log(_project__WEBPACK_IMPORTED_MODULE_0__["default"].projectList);
        _project__WEBPACK_IMPORTED_MODULE_0__["default"].projectList.forEach((element, index) => {projectList.append(createSidebarProject(element.title, index))})
    };

    function createSidebarProject(title, index) {
        const container = createTextContainer(title, 'sidebar-project');
        container.setAttribute('project-index', index);
        if (index == onDisplayIndex) {container.classList.add('onDisplay')};

        container.addEventListener('click', function() {
            document.querySelector('.onDisplay').classList.remove('onDisplay');
            this.classList.add('onDisplay');
            onDisplayIndex = parseInt(this.getAttribute('project-index'));
            projectDisplay.removeChild(projectDisplay.firstChild);
            displayProject(onDisplayIndex);
        });

        const deleteProject = createTextContainer('delete', 'delete-project')
        
        deleteProject.addEventListener('click', function() {
            const parentElement = this.parentElement;
            const deleteIndex = parentElement.getAttribute('project-index');
            if (deleteIndex <= onDisplayIndex) {
                onDisplayIndex--;
                if (deleteIndex == onDisplayIndex == -1) {
                    onDisplayIndex = 0;
                }
            };
            
            _project__WEBPACK_IMPORTED_MODULE_0__["default"].deleteProject(deleteIndex);
            parentElement.classList.add('onDisplay');
            projectList.removeChild(parentElement);

            resetDisplay();
        });
        
        container.append(deleteProject);
        return container;
    };

    // Project Display functions
    function displayProject(index) {
        projectDisplay.append(createProjectElement(_project__WEBPACK_IMPORTED_MODULE_0__["default"].getProject(index)));

        if (projectDisplay.hasChildNodes()) {
            projectDisplay.removeChild(projectDisplay.firstChild);
        }
        projectDisplay.append(createProjectElement(_project__WEBPACK_IMPORTED_MODULE_0__["default"].projectList[index]));
    };

    function createProjectElement(project) {
        const container = createContainer('project-element');

        const titleElement = document.createElement('h2');
        titleElement.textContent = project.title;

        const taskList = document.createElement('div');
        for (let i = 0; i < project.itemCount; i++) {
            const element = createTaskElement(project.getTask(i));
            taskList.append(element);
        };
        
        const addTask = document.createElement('button');
        addTask.textContent = '+ Add Task';

        const taskForm = document.createElement('form');
        taskForm.classList.add('task-form');
        const textInput = document.createElement('input');
        textInput.type = 'text';
        textInput.placeholder = 'New Task';
        textInput.setAttribute('id', 'new-task');
        taskForm.append(textInput);
        addTask.addEventListener('click', function(){
            taskForm.style.display = 'block';
            textInput.select();
        });

        const submit = document.createElement('input');
        submit.style.display = 'none';

        taskForm.addEventListener('submit', function(e) {
            const userInput = document.getElementsById('new-task');
            const newTask = createTaskElement(userInput.value);

            taskList.append(newTask);
            e.preventDefault();
        })

        container.append(titleElement);
        container.append(document.createElement('hr'));
        container.append(taskList);
        container.append(taskForm);
        container.append(addTask);
        // container.append(createAddBtn('todo').button);
        return container;
    };

    function createTaskElement(task) {
        const container = createContainer('task', `priority-${task.priority}`);

        const taskHeader = createTaskHeader(task);
        taskHeader.addEventListener('click', toggleDetails);

        container.append(taskHeader);
        container.append(createTaskDetail(task));
        return container;
    };

    function toggleDetails() {
        this.classList.toggle('show-detail');
        let content = this.nextElementSibling;
        if (content.style.display === 'block') {
            content.style.display = 'none';
        } else {
            content.style.display = 'block';
        };
    }

    function createTaskHeader(task) {
        const container = createContainer('task-header');

        const checkbox = document.createElement('input');
        checkbox.type = 'checkbox';

        const title = document.createElement('div');
        title.textContent = task.title;

        const date = document.createElement('div');
        date.textContent = "Due: " + task.dueDate;

        const editTask = createTextContainer('Edit', 'task-edit');

        const deleteTask = createTextContainer('Delete', 'task-delete');

        container.append(checkbox);
        container.append(title);
        container.append(date);
        container.append(editTask);
        container.append(deleteTask);
        return container;
    };

    function createTaskDetail(task) {
        const container = document.createElement('div');
        container.classList.add('task-detail');

        const labelsElement = document.createElement('div');
        labelsElement.classList.add('labels');
        labelsElement.textContent = "Labels: ";
        if (task.labels) {
            task.labels.forEach((element) => {
                const label = createLabel(element);
                labelsElement.append(label);
            });
        }

        const notesElement = document.createElement('div');
        notesElement.classList.add('notes');
        notesElement.textContent = "Notes: "
        if (task.notes) { notesElement.append(createNoteText(task.notes)) };

        container.append(labelsElement);
        container.append(notesElement);
        return container;
    };

    function createLabel(string) {
        const label = document.createElement('div');
        label.classList.add('label');
        label.textContent = `[${string}]`;
        return label;
    };

    function createNoteText(string) {
        const noteText = document.createElement('div');
        noteText.classList.add('note-text');
        noteText.textContent = string;
        return noteText;
    };

    return {
        initDisplay,
        createProjectElement
    };
})();

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (domManager);

/***/ }),

/***/ "./src/project.js":
/*!************************!*\
  !*** ./src/project.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _domManager__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./domManager */ "./src/domManager.js");


const Project = (function() {
    let projects = [];

    function createProject(title, desc=null) {
        let tasks = [];
        let itemCount = tasks.length;
        return {
            itemCount,
            addTask(item) {
                tasks.push(item);
                this.itemCount++;
            },
            removeTask(index) {
                tasks.splice(index, 1);
                this.itemCount--;
            },
            getTask(index) {
                return tasks[index];
            },
    
            get desc() {return desc},
            get title() {return title},
    
            set desc(string) {desc = string},
            set title(string) {title = string}
        }
    };

    function addProject(...args) {
        const project = createProject(args[0], args[1]);
        projects.push(project);
    };

    function deleteProject(index) {
        projects.splice(index, 1);
    };

    function getProject(index) {
        return projects[index];
    };

    return {
        get projectList() {return projects},
        get projectCount() {return projects.length},
        addProject,
        deleteProject,
        getProject
    }
})();

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Project);

/***/ }),

/***/ "./src/task.js":
/*!*********************!*\
  !*** ./src/task.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ createTask)
/* harmony export */ });
// import { format } from 'date-fns';

function createTask(title, ...args) {
    let completed = false;

    function toggleComplete() {completed = !completed};
    function toggleShowDetails() {detailShown = !detailShown};
    // function getDueDate() {return format(this.dueDate, 'MM/dd/yyyy')};
    // function setDueDate(month, day, year) {this.dueDate = new Date(year, month, day)};
    function saveNotes(input) {this.notes = input};
    function addLabel(label) {this.labels.push(label)};
    function removeLabel(index) {this.labels.splice(index,1)};

    return {
        title,
        dueDate: args[0],
        priority: args[1],
        labels: args[2],
        // dueDate: (args[0] ? new Date(args[0][0], args[0][1], args[0][2]) : null),
        // priority: (args[1] ? args[1] : 0),
        // labels: (args[2] ? args[2] : []),
        notes: args[3],
        completed,
        toggleComplete,
        toggleShowDetails,
        saveNotes,
        addLabel,
        removeLabel
    }
};

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _project_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./project.js */ "./src/project.js");
/* harmony import */ var _task_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./task.js */ "./src/task.js");
/* harmony import */ var _domManager_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./domManager.js */ "./src/domManager.js");
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./style.css */ "./src/style.css");



// import createAddBtn from './createAddBtn.js';



const todo = (0,_task_js__WEBPACK_IMPORTED_MODULE_1__["default"])("Create webpage", '23', 3, ['school', 'work', 'play'], "All my life");
// todo.setDueDate(2, 23, 2022);
const todo2 = (0,_task_js__WEBPACK_IMPORTED_MODULE_1__["default"])("Download more RAM", '42', 1, ['play'], "whats good");
const todo3 = (0,_task_js__WEBPACK_IMPORTED_MODULE_1__["default"])("Play Solitaire");

_project_js__WEBPACK_IMPORTED_MODULE_0__["default"].addProject("Web Programming");
_project_js__WEBPACK_IMPORTED_MODULE_0__["default"].addProject("Play Basketball");

const wp = _project_js__WEBPACK_IMPORTED_MODULE_0__["default"].getProject(0);
wp.addTask(todo);
wp.addTask(todo2);
wp.addTask(todo3);



_domManager_js__WEBPACK_IMPORTED_MODULE_2__["default"].initDisplay();
// Display.header("../src/totodile-mini.jpg", "Tododile", "For all your project crunching needs!");
// Display.sidebar(categories, projectArr);
// Display.displayProject(project);
// Display.displayItemDetails(main, todo);
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7Ozs7Ozs7Ozs7OztBQ05tQztBQUNBO0FBQ007QUFDekM7QUFDcUI7OztBQUdyQixhQUFhLG9EQUFVO0FBQ3ZCO0FBQ0EsY0FBYyxvREFBVTtBQUN4QixjQUFjLG9EQUFVOztBQUV4Qiw4REFBa0I7QUFDbEIsOERBQWtCOztBQUVsQixXQUFXLDhEQUFrQjtBQUM3QjtBQUNBO0FBQ0E7Ozs7QUFJQSxrRUFBc0I7QUFDdEI7QUFDQTtBQUNBO0FBQ0EsMEMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvc3R5bGUuY3NzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL3N0eWxlLmNzcz83MTYzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL2NyZWF0ZUlucHV0Qm94LmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9kb21NYW5hZ2VyLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9wcm9qZWN0LmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy90YXNrLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCJodG1sLCBib2R5LCBtYWlue1xcbiAgICBoZWlnaHQ6IDEwMCU7XFxufVxcblxcbmJvZHkge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAxNTMsIDI1NSwgMC42MSk7XFxufVxcblxcbiNjb250ZW50IHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgaGVpZ2h0OiA2MHZoO1xcbiAgICB3aWR0aDogNjB2dztcXG4gICAgYm9yZGVyOiA0cHggc29saWQgYmxhY2s7XFxufVxcblxcbi8qIEhlYWRlciAqL1xcblxcbmhlYWRlciB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMTQzLCA1LCAxLCAwLjYxKTtcXG59XFxuXFxuLmxvZ28ge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZWQ7XFxuICAgIGJhY2tncm91bmQ6XFxuICAgICAgICBsaW5lYXItZ3JhZGllbnQoLTQ1ZGVnLCB0cmFuc3BhcmVudCAzMCUsIHJlZCAwKTtcXG59XFxuXFxuLmljb24ge1xcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XFxuICAgIGhlaWdodDogMTAwcHg7XFxuICAgIHdpZHRoOiAxMDBweDtcXG4gICAgLyogcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgICB0b3A6IC0xMHZoO1xcbiAgICBsZWZ0OiAtNXZ3O1xcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDAuMyk7ICovXFxufVxcblxcbi5zdWJ0aXRsZSB7XFxuICAgIGhlaWdodDogNTAlO1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDI1NSwgMTQ1LCAwKTtcXG59XFxuXFxuLyogTWFpbjogU2lkZWJhciBhbmQgUHJvamVjdCBEaXNwbGF5ICovXFxuXFxubWFpbiB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGFsaWduLWl0ZW1zOiBzdHJldGNoO1xcbn1cXG5cXG5tYWluID4gKiB7XFxuICAgIHBhZGRpbmc6IDFlbTtcXG59XFxuXFxuLyogU2lkZWJhciAqL1xcblxcbi5zaWRlYmFyIHtcXG4gICAgd2lkdGg6IDE1dnc7XFxuICAgIGJvcmRlcjogNHB4IHNvbGlkIHdoaXRlO1xcbn1cXG5cXG4uc2lkZWJhciA+ICoge1xcbiAgICBtYXJnaW46IDFlbTtcXG59XFxuXFxuLmdlbmVyYWwtdGFiOmhvdmVyLCAuc2lkZWJhci1wcm9qZWN0OmhvdmVyIHtcXG4gICAgdGV4dC1zaGFkb3c6IDJweCAycHggd2hpdGU7XFxufVxcblxcbi5zaWRlYmFyLXByb2plY3Qge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICAgIG1hcmdpbjogMCAxZW07XFxuICAgIGN1cnNvcjogZGVmYXVsdDtcXG59XFxuXFxuLnByb2plY3QtZm9ybSB7XFxuICAgIGRpc3BsYXk6IG5vbmU7XFxufVxcblxcbi5hZGQtcHJvamVjdCB7XFxuICAgIG1hcmdpbjogMCAxZW07XFxufVxcblxcbi5kZWxldGUtcHJvamVjdCB7XFxuICAgIGRpc3BsYXk6IG5vbmU7XFxufVxcblxcbi5zaWRlYmFyLXByb2plY3Q6aG92ZXIgLmRlbGV0ZS1wcm9qZWN0IHtcXG4gICAgZGlzcGxheTogYmxvY2s7XFxufVxcblxcbi5kZWxldGUtcHJvamVjdDpob3ZlciB7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuLm9uRGlzcGxheSB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMTIyLCAwLCAxNTMsIDAuNjM3KTtcXG59XFxuXFxuLyogUHJvamVjdCBEaXNwbGF5ICovXFxuXFxuLnRhc2sge1xcbiAgICBib3JkZXI6IDJweCBzb2xpZCB3aGl0ZTtcXG59XFxuXFxuLnRhc2staGVhZGVyIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG4uc2hvdy1kZXRhaWwge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZWQ7XFxufVxcblxcbi50YXNrLWRldGFpbCB7XFxuICAgIGRpc3BsYXk6IG5vbmU7XFxuICAgIG92ZXJmbG93OiBoaWRkZW47XFxuICAgIHBhZGRpbmc6IDAgMThweDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2YxZjFmMTtcXG59XFxuXFxuLmxhYmVscyB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxufVxcblxcbi5ub3RlcyB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxufVxcblxcbi50YXNrLWZvcm0ge1xcbiAgICBkaXNwbGF5OiBub25lO1xcbn1cXG5cXG4vKiBib2R5IHtcXG4gICAgZm9udC1mYW1pbHk6J1RyZWJ1Y2hldCBNUycsICdMdWNpZGEgU2FucyBVbmljb2RlJywgJ0x1Y2lkYSBHcmFuZGUnLCAnTHVjaWRhIFNhbnMnLCBBcmlhbCwgc2Fucy1zZXJpZjtcXG4gICAgaGVpZ2h0OiAxMDB2aDtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgYWxpZ24taXRlbXM6IHN0cmV0Y2g7XFxuICAgIG92ZXJmbG93LXk6aGlkZGVuO1xcbn1cXG5cXG5ociB7XFxuICAgIGJvcmRlcjogIzMxNWE4MyA0cHggc29saWQ7XFxufVxcblxcbnVsIHtcXG4gICAgcGFkZGluZy1sZWZ0OiAwO1xcbiAgICBmb250LXNpemU6IDI4cHg7XFxufVxcblxcbmxpIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG59XFxuLnNpZGViYXIge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjN2IxODAwO1xcbiAgICB3aWR0aDogNDUwcHg7XFxuICAgIG92ZXJmbG93LXg6IGhpZGRlbjtcXG4gICAgdHJhbnNpdGlvbjogMC41cztcXG59XFxuXFxuLnNpZGViYXItaXRlbSB7XFxuICAgIGZvbnQtc2l6ZTogMjhweDtcXG4gICAgY29sb3I6ICNhYWE1YTU7XFxuICAgIGRpc3BsYXk6IGJsb2NrO1xcbiAgICB0cmFuc2l0aW9uOiAwLjNzO1xcbiAgICBwYWRkaW5nOiAxMHB4IDM4cHg7XFxuICAgIGJvcmRlci1ib3R0b206ICMzMTVhODMgNHB4IHNvbGlkO1xcbn1cXG5cXG4uc2lkZWJhci1pdGVtOmhvdmVyIHtcXG4gICAgY29sb3I6ICNlZmU3NGE7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICMzMTg0QzY7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuLnNpZGViYXItdGl0bGUge1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNCQzE4Mjg7XFxuICAgIGNvbG9yOiAjZGRkMmQyO1xcbiAgICBwYWRkaW5nOiAxMHB4O1xcbiAgICBmb250LXNpemU6IDQwcHg7XFxufVxcblxcbi5tYWluIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzZCQjVFNztcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIHBhZGRpbmc6IDUwcHg7XFxufVxcblxcbi5wcm9qZWN0LWNvbnRhaW5lciB7XFxuICAgIHBhZGRpbmc6IDVweCAyNnB4O1xcbn1cXG5cXG4ucHJvamVjdC10aXRsZSB7XFxuICAgIGZvbnQtc2l6ZTogNDBweDtcXG59XFxuXFxuLnByb2plY3QtbGlzdC1pdGVtIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuLnByb2plY3QtbGlzdC1pdGVtOmhvdmVyIHtcXG4gICAgYm9yZGVyOiAjMzE1YTgzIDRweCBzb2xpZDtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG4ucXVpY2staW5mby1jb250YWluZXIge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgcGFkZGluZzogMTBweDtcXG59XFxuXFxuLnF1aWNraW5mby1zdWJjb250YWluZXIge1xcbiAgICBkaXNwbGF5OmZsZXg7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxufVxcblxcbi5uZXctdG9kby1pbnB1dCB7XFxuICAgIGZvbnQtc2l6ZTogMjhweDtcXG4gICAgd2lkdGg6IDEwMCU7XFxufVxcblxcbi5sYWJlbHMtY29udGFpbmVyIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG59XFxuXFxuLnByaW9yaXR5LTAge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXG59XFxuXFxuLnByaW9yaXR5LTEge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZjNTUyO1xcbn1cXG5cXG4ucHJpb3JpdHktMiB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNlNjdiN2I7XFxufVxcblxcbi5wcmlvcml0eS0zIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzdiMTgwMDtcXG4gICAgY29sb3I6IHdoaXRlO1xcbn1cXG5cXG5idXR0b24ge1xcbiAgICBmb250LXNpemU6IDI0cHg7XFxuICAgIGJvcmRlci1yYWRpdXM6IDIwcHg7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICMzMTg0QzY7XFxufVxcblxcbiNhZGQtdG9kby1idXR0b24ge1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgcGFkZGluZzogMTBweDtcXG59XFxuXFxuLm5ldy1wcm9qZWN0LWlucHV0IHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzdiMTgwMDtcXG4gICAgYm9yZGVyLXdpZHRoOiAwcHg7XFxuICAgIGZvbnQtc2l6ZTogMjhweDtcXG4gICAgY29sb3I6ICNhYWE1YTU7XFxuICAgIHdpZHRoOiAxMDAlO1xcbn1cXG5cXG5pbnB1dDpmb2N1cywgdGV4dGFyZWE6Zm9jdXMsIHNlbGVjdDpmb2N1cyB7XFxuICAgIG91dGxpbmU6IG5vbmU7XFxufSAqL1wiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZS5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7SUFDSSxZQUFZO0FBQ2hCOztBQUVBO0lBQ0ksYUFBYTtJQUNiLHVCQUF1QjtJQUN2QixtQkFBbUI7SUFDbkIseUNBQXlDO0FBQzdDOztBQUVBO0lBQ0ksYUFBYTtJQUNiLHNCQUFzQjtJQUN0QixZQUFZO0lBQ1osV0FBVztJQUNYLHVCQUF1QjtBQUMzQjs7QUFFQSxXQUFXOztBQUVYO0lBQ0ksYUFBYTtJQUNiLHVDQUF1QztBQUMzQzs7QUFFQTtJQUNJLGFBQWE7SUFDYixxQkFBcUI7SUFDckI7dURBQ21EO0FBQ3ZEOztBQUVBO0lBQ0ksa0JBQWtCO0lBQ2xCLGFBQWE7SUFDYixZQUFZO0lBQ1o7Ozs0QkFHd0I7QUFDNUI7O0FBRUE7SUFDSSxXQUFXO0lBQ1gsV0FBVztJQUNYLGtDQUFrQztBQUN0Qzs7QUFFQSxzQ0FBc0M7O0FBRXRDO0lBQ0ksYUFBYTtJQUNiLG9CQUFvQjtBQUN4Qjs7QUFFQTtJQUNJLFlBQVk7QUFDaEI7O0FBRUEsWUFBWTs7QUFFWjtJQUNJLFdBQVc7SUFDWCx1QkFBdUI7QUFDM0I7O0FBRUE7SUFDSSxXQUFXO0FBQ2Y7O0FBRUE7SUFDSSwwQkFBMEI7QUFDOUI7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsOEJBQThCO0lBQzlCLGFBQWE7SUFDYixlQUFlO0FBQ25COztBQUVBO0lBQ0ksYUFBYTtBQUNqQjs7QUFFQTtJQUNJLGFBQWE7QUFDakI7O0FBRUE7SUFDSSxhQUFhO0FBQ2pCOztBQUVBO0lBQ0ksY0FBYztBQUNsQjs7QUFFQTtJQUNJLGVBQWU7QUFDbkI7O0FBRUE7SUFDSSwwQ0FBMEM7QUFDOUM7O0FBRUEsb0JBQW9COztBQUVwQjtJQUNJLHVCQUF1QjtBQUMzQjs7QUFFQTtJQUNJLGFBQWE7SUFDYixlQUFlO0FBQ25COztBQUVBO0lBQ0kscUJBQXFCO0FBQ3pCOztBQUVBO0lBQ0ksYUFBYTtJQUNiLGdCQUFnQjtJQUNoQixlQUFlO0lBQ2YseUJBQXlCO0FBQzdCOztBQUVBO0lBQ0ksYUFBYTtBQUNqQjs7QUFFQTtJQUNJLGFBQWE7QUFDakI7O0FBRUE7SUFDSSxhQUFhO0FBQ2pCOztBQUVBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0dBMklHXCIsXCJzb3VyY2VzQ29udGVudFwiOltcImh0bWwsIGJvZHksIG1haW57XFxuICAgIGhlaWdodDogMTAwJTtcXG59XFxuXFxuYm9keSB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDE1MywgMjU1LCAwLjYxKTtcXG59XFxuXFxuI2NvbnRlbnQge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBoZWlnaHQ6IDYwdmg7XFxuICAgIHdpZHRoOiA2MHZ3O1xcbiAgICBib3JkZXI6IDRweCBzb2xpZCBibGFjaztcXG59XFxuXFxuLyogSGVhZGVyICovXFxuXFxuaGVhZGVyIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgxNDMsIDUsIDEsIDAuNjEpO1xcbn1cXG5cXG4ubG9nbyB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJlZDtcXG4gICAgYmFja2dyb3VuZDpcXG4gICAgICAgIGxpbmVhci1ncmFkaWVudCgtNDVkZWcsIHRyYW5zcGFyZW50IDMwJSwgcmVkIDApO1xcbn1cXG5cXG4uaWNvbiB7XFxuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcXG4gICAgaGVpZ2h0OiAxMDBweDtcXG4gICAgd2lkdGg6IDEwMHB4O1xcbiAgICAvKiBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICAgIHRvcDogLTEwdmg7XFxuICAgIGxlZnQ6IC01dnc7XFxuICAgIHRyYW5zZm9ybTogc2NhbGUoMC4zKTsgKi9cXG59XFxuXFxuLnN1YnRpdGxlIHtcXG4gICAgaGVpZ2h0OiA1MCU7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjU1LCAxNDUsIDApO1xcbn1cXG5cXG4vKiBNYWluOiBTaWRlYmFyIGFuZCBQcm9qZWN0IERpc3BsYXkgKi9cXG5cXG5tYWluIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgYWxpZ24taXRlbXM6IHN0cmV0Y2g7XFxufVxcblxcbm1haW4gPiAqIHtcXG4gICAgcGFkZGluZzogMWVtO1xcbn1cXG5cXG4vKiBTaWRlYmFyICovXFxuXFxuLnNpZGViYXIge1xcbiAgICB3aWR0aDogMTV2dztcXG4gICAgYm9yZGVyOiA0cHggc29saWQgd2hpdGU7XFxufVxcblxcbi5zaWRlYmFyID4gKiB7XFxuICAgIG1hcmdpbjogMWVtO1xcbn1cXG5cXG4uZ2VuZXJhbC10YWI6aG92ZXIsIC5zaWRlYmFyLXByb2plY3Q6aG92ZXIge1xcbiAgICB0ZXh0LXNoYWRvdzogMnB4IDJweCB3aGl0ZTtcXG59XFxuXFxuLnNpZGViYXItcHJvamVjdCB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gICAgbWFyZ2luOiAwIDFlbTtcXG4gICAgY3Vyc29yOiBkZWZhdWx0O1xcbn1cXG5cXG4ucHJvamVjdC1mb3JtIHtcXG4gICAgZGlzcGxheTogbm9uZTtcXG59XFxuXFxuLmFkZC1wcm9qZWN0IHtcXG4gICAgbWFyZ2luOiAwIDFlbTtcXG59XFxuXFxuLmRlbGV0ZS1wcm9qZWN0IHtcXG4gICAgZGlzcGxheTogbm9uZTtcXG59XFxuXFxuLnNpZGViYXItcHJvamVjdDpob3ZlciAuZGVsZXRlLXByb2plY3Qge1xcbiAgICBkaXNwbGF5OiBibG9jaztcXG59XFxuXFxuLmRlbGV0ZS1wcm9qZWN0OmhvdmVyIHtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG4ub25EaXNwbGF5IHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgxMjIsIDAsIDE1MywgMC42MzcpO1xcbn1cXG5cXG4vKiBQcm9qZWN0IERpc3BsYXkgKi9cXG5cXG4udGFzayB7XFxuICAgIGJvcmRlcjogMnB4IHNvbGlkIHdoaXRlO1xcbn1cXG5cXG4udGFzay1oZWFkZXIge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbi5zaG93LWRldGFpbCB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJlZDtcXG59XFxuXFxuLnRhc2stZGV0YWlsIHtcXG4gICAgZGlzcGxheTogbm9uZTtcXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcXG4gICAgcGFkZGluZzogMCAxOHB4O1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjFmMWYxO1xcbn1cXG5cXG4ubGFiZWxzIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG59XFxuXFxuLm5vdGVzIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG59XFxuXFxuLnRhc2stZm9ybSB7XFxuICAgIGRpc3BsYXk6IG5vbmU7XFxufVxcblxcbi8qIGJvZHkge1xcbiAgICBmb250LWZhbWlseTonVHJlYnVjaGV0IE1TJywgJ0x1Y2lkYSBTYW5zIFVuaWNvZGUnLCAnTHVjaWRhIEdyYW5kZScsICdMdWNpZGEgU2FucycsIEFyaWFsLCBzYW5zLXNlcmlmO1xcbiAgICBoZWlnaHQ6IDEwMHZoO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBhbGlnbi1pdGVtczogc3RyZXRjaDtcXG4gICAgb3ZlcmZsb3cteTpoaWRkZW47XFxufVxcblxcbmhyIHtcXG4gICAgYm9yZGVyOiAjMzE1YTgzIDRweCBzb2xpZDtcXG59XFxuXFxudWwge1xcbiAgICBwYWRkaW5nLWxlZnQ6IDA7XFxuICAgIGZvbnQtc2l6ZTogMjhweDtcXG59XFxuXFxubGkge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbn1cXG4uc2lkZWJhciB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICM3YjE4MDA7XFxuICAgIHdpZHRoOiA0NTBweDtcXG4gICAgb3ZlcmZsb3cteDogaGlkZGVuO1xcbiAgICB0cmFuc2l0aW9uOiAwLjVzO1xcbn1cXG5cXG4uc2lkZWJhci1pdGVtIHtcXG4gICAgZm9udC1zaXplOiAyOHB4O1xcbiAgICBjb2xvcjogI2FhYTVhNTtcXG4gICAgZGlzcGxheTogYmxvY2s7XFxuICAgIHRyYW5zaXRpb246IDAuM3M7XFxuICAgIHBhZGRpbmc6IDEwcHggMzhweDtcXG4gICAgYm9yZGVyLWJvdHRvbTogIzMxNWE4MyA0cHggc29saWQ7XFxufVxcblxcbi5zaWRlYmFyLWl0ZW06aG92ZXIge1xcbiAgICBjb2xvcjogI2VmZTc0YTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzMxODRDNjtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG4uc2lkZWJhci10aXRsZSB7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI0JDMTgyODtcXG4gICAgY29sb3I6ICNkZGQyZDI7XFxuICAgIHBhZGRpbmc6IDEwcHg7XFxuICAgIGZvbnQtc2l6ZTogNDBweDtcXG59XFxuXFxuLm1haW4ge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNkJCNUU3O1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgcGFkZGluZzogNTBweDtcXG59XFxuXFxuLnByb2plY3QtY29udGFpbmVyIHtcXG4gICAgcGFkZGluZzogNXB4IDI2cHg7XFxufVxcblxcbi5wcm9qZWN0LXRpdGxlIHtcXG4gICAgZm9udC1zaXplOiA0MHB4O1xcbn1cXG5cXG4ucHJvamVjdC1saXN0LWl0ZW0ge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG4ucHJvamVjdC1saXN0LWl0ZW06aG92ZXIge1xcbiAgICBib3JkZXI6ICMzMTVhODMgNHB4IHNvbGlkO1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbi5xdWljay1pbmZvLWNvbnRhaW5lciB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBwYWRkaW5nOiAxMHB4O1xcbn1cXG5cXG4ucXVpY2tpbmZvLXN1YmNvbnRhaW5lciB7XFxuICAgIGRpc3BsYXk6ZmxleDtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG59XFxuXFxuLm5ldy10b2RvLWlucHV0IHtcXG4gICAgZm9udC1zaXplOiAyOHB4O1xcbiAgICB3aWR0aDogMTAwJTtcXG59XFxuXFxuLmxhYmVscy1jb250YWluZXIge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbn1cXG5cXG4ucHJpb3JpdHktMCB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcbn1cXG5cXG4ucHJpb3JpdHktMSB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmM1NTI7XFxufVxcblxcbi5wcmlvcml0eS0yIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2U2N2I3YjtcXG59XFxuXFxuLnByaW9yaXR5LTMge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjN2IxODAwO1xcbiAgICBjb2xvcjogd2hpdGU7XFxufVxcblxcbmJ1dHRvbiB7XFxuICAgIGZvbnQtc2l6ZTogMjRweDtcXG4gICAgYm9yZGVyLXJhZGl1czogMjBweDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzMxODRDNjtcXG59XFxuXFxuI2FkZC10b2RvLWJ1dHRvbiB7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBwYWRkaW5nOiAxMHB4O1xcbn1cXG5cXG4ubmV3LXByb2plY3QtaW5wdXQge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjN2IxODAwO1xcbiAgICBib3JkZXItd2lkdGg6IDBweDtcXG4gICAgZm9udC1zaXplOiAyOHB4O1xcbiAgICBjb2xvcjogI2FhYTVhNTtcXG4gICAgd2lkdGg6IDEwMCU7XFxufVxcblxcbmlucHV0OmZvY3VzLCB0ZXh0YXJlYTpmb2N1cywgc2VsZWN0OmZvY3VzIHtcXG4gICAgb3V0bGluZTogbm9uZTtcXG59ICovXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdOyAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG5cbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuXG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuXG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG5cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTsgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcblxuXG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG5cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuXG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG5cbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcblxuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuXG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcblxuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuXG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICB2YXIgc291cmNlVVJMcyA9IGNzc01hcHBpbmcuc291cmNlcy5tYXAoZnVuY3Rpb24gKHNvdXJjZSkge1xuICAgICAgcmV0dXJuIFwiLyojIHNvdXJjZVVSTD1cIi5jb25jYXQoY3NzTWFwcGluZy5zb3VyY2VSb290IHx8IFwiXCIpLmNvbmNhdChzb3VyY2UsIFwiICovXCIpO1xuICAgIH0pO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KHNvdXJjZVVSTHMpLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cblxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcblxuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG5cbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG5cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuXG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuXG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiB1cGRhdGVyO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuXG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcblxuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuXG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuXG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuXG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTsgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcblxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuXG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuXG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuXG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcblxuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG5cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuXG4gIGNzcyArPSBvYmouY3NzO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuXG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfSAvLyBGb3Igb2xkIElFXG5cbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuXG5cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cblxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG5cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBjcmVhdGVJbnB1dEJveCh0eXBlKSB7XG4gICAgbGV0IHBsYWNlaG9sZGVyVGV4dDtcbiAgICBsZXQgdGV4dElucHV0Q2xhc3M7XG4gICAgY29uc3QgdGV4dElucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcblxuICAgIGZ1bmN0aW9uIGlucHV0Rm4oKSB7XG4gICAgICAgIFxuICAgIH07XG5cbiAgICBpZiAodHlwZSA9PSAncHJvamVjdCcpIHtcbiAgICAgICAgcGxhY2Vob2xkZXJUZXh0ID0gJ05ldyBQcm9qZWN0JztcbiAgICAgICAgdGV4dElucHV0Q2xhc3MgPSAnbmV3LXByb2plY3QtaW5wdXQnO1xuICAgIH0gZWxzZSBpZiAodHlwZSA9PSAndG9kbycpIHtcbiAgICAgICAgcGxhY2Vob2xkZXJUZXh0ID0gJ05ldyBUb2RvJztcbiAgICAgICAgdGV4dElucHV0Q2xhc3MgPSAnbmV3LXRvZG8taW5wdXQnO1xuICAgIH07XG4gICAgXG4gICAgdGV4dElucHV0LnNldEF0dHJpYnV0ZSgndHlwZScsICd0ZXh0Jyk7XG4gICAgdGV4dElucHV0LnNldEF0dHJpYnV0ZSgncGxhY2Vob2xkZXInLCBwbGFjZWhvbGRlclRleHQpO1xuICAgIHRleHRJbnB1dC5jbGFzc0xpc3QuYWRkKHRleHRJbnB1dENsYXNzKTtcblxuICAgIHRleHRJbnB1dC5hZGRFdmVudExpc3RlbmVyKCdpbnB1dCcsIGlucHV0Rm4pO1xuXG4gICAgcmV0dXJuIHRleHRJbnB1dDtcbn07IiwiaW1wb3J0IFByb2plY3QgZnJvbSBcIi4vcHJvamVjdFwiO1xuaW1wb3J0IGNyZWF0ZVRhc2sgZnJvbSBcIi4vdGFza1wiO1xuaW1wb3J0IGNyZWF0ZUlucHV0Qm94IGZyb20gXCIuL2NyZWF0ZUlucHV0Qm94XCI7XG5cbmNvbnN0IGRvbU1hbmFnZXIgPSAoZnVuY3Rpb24oKSB7XG5cbiAgICAvLyBET00gRWxlbWVudHNcbiAgICBjb25zdCBwcm9qZWN0VGFiID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3Byb2plY3QtdGFiJyk7XG4gICAgY29uc3QgcHJvamVjdExpc3QgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucHJvamVjdC1saXN0Jyk7XG4gICAgY29uc3QgYWRkUHJvamVjdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5hZGQtcHJvamVjdCcpO1xuICAgIGNvbnN0IHByb2plY3RGb3JtID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnByb2plY3QtZm9ybScpO1xuICAgIGNvbnN0IHByb2plY3REaXNwbGF5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnByb2plY3QtY29udGFpbmVyJyk7XG4gICAgXG4gICAgbGV0IG9uRGlzcGxheUluZGV4ID0gMDtcblxuICAgIC8vIEhlbHBlcnNcbiAgICBmdW5jdGlvbiBpbml0RGlzcGxheSgpIHtcbiAgICAgICAgZGlzcGxheVByb2plY3RMaXN0KCk7XG4gICAgICAgIGRpc3BsYXlQcm9qZWN0KDApO1xuXG4gICAgICAgIGNvbnN0IHVzZXJJbnB1dCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCduZXctcHJvamVjdCcpO1xuXG4gICAgICAgIC8vIEV2ZW50bGlzdGVuZXJzXG4gICAgICAgIC8vXG4gICAgICAgIC8vIEFkZCBwcm9qZWN0IGJ1dHRvblxuICAgICAgICBhZGRQcm9qZWN0LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICBwcm9qZWN0Rm9ybS5zdHlsZS5kaXNwbGF5ID0gJ2Jsb2NrJztcbiAgICAgICAgICAgIHVzZXJJbnB1dC5zZWxlY3QoKTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgcHJvamVjdEZvcm0uYWRkRXZlbnRMaXN0ZW5lcignc3VibWl0JywgZnVuY3Rpb24oZSkge1xuICAgICAgICAgICAgcHJvamVjdExpc3QuYXBwZW5kKGNyZWF0ZVNpZGViYXJQcm9qZWN0KHVzZXJJbnB1dC52YWx1ZSwgUHJvamVjdC5wcm9qZWN0Q291bnQpKTtcbiAgICAgICAgICAgIFByb2plY3QuYWRkUHJvamVjdCh1c2VySW5wdXQudmFsdWUpO1xuICAgICAgICAgICAgZS50YXJnZXQuc3R5bGUuZGlzcGxheSA9J25vbmUnO1xuICAgICAgICAgICAgdXNlcklucHV0LnZhbHVlID0gJyc7XG4gICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIH0pO1xuICAgIH07XG5cbiAgICBmdW5jdGlvbiByZXNldERpc3BsYXkoKSB7XG4gICAgICAgIHdoaWxlIChwcm9qZWN0TGlzdC5oYXNDaGlsZE5vZGVzKCkpIHtwcm9qZWN0TGlzdC5yZW1vdmVDaGlsZChwcm9qZWN0TGlzdC5maXJzdENoaWxkKX07XG4gICAgICAgIGRpc3BsYXlQcm9qZWN0TGlzdCgpO1xuXG4gICAgICAgIHByb2plY3REaXNwbGF5LnJlbW92ZUNoaWxkKHByb2plY3REaXNwbGF5LmZpcnN0Q2hpbGQpO1xuICAgICAgICBkaXNwbGF5UHJvamVjdChvbkRpc3BsYXlJbmRleCk7XG5cbiAgICAgICAgY29uc29sZS5sb2coZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm9uRGlzcGxheScpKTtcbiAgICAgICAgLy8gaWYgKCFkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcub25EaXNwbGF5JykpIHtcbiAgICAgICAgLy8gICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYFtwcm9qZWN0LWluZGV4PVwiJHtvbkRpc3BsYXlJbmRleH1cIl1gKS5jbGFzc0xpc3QuYWRkKCdvbkRpc3BsYXknKTtcbiAgICAgICAgLy8gfVxuICAgIH1cblxuICAgIGZ1bmN0aW9uIGNyZWF0ZUNvbnRhaW5lciguLi5hcmdzKSB7XG4gICAgICAgIGNvbnN0IGNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICBhcmdzLmZvckVhY2goKGVsZW1lbnQpID0+IGNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKGVsZW1lbnQpKTtcbiAgICAgICAgcmV0dXJuIGNvbnRhaW5lcjtcbiAgICB9O1xuICAgIFxuICAgIGZ1bmN0aW9uIGNyZWF0ZVRleHRDb250YWluZXIodGV4dCwgY2xhc3NOYW1lKSB7XG4gICAgICAgIGNvbnN0IHRleHRDb250YWluZXIgPSBjcmVhdGVDb250YWluZXIoY2xhc3NOYW1lKTtcbiAgICAgICAgdGV4dENvbnRhaW5lci50ZXh0Q29udGVudCA9IHRleHQ7XG4gICAgICAgIHJldHVybiB0ZXh0Q29udGFpbmVyO1xuICAgIH07XG5cbiAgICAvLyBTaWRlYmFyIERpc3BsYXkgZnVuY3Rpb25zXG4gICAgZnVuY3Rpb24gZGlzcGxheVByb2plY3RMaXN0KCkge1xuICAgICAgICBjb25zb2xlLmxvZyhQcm9qZWN0LnByb2plY3RMaXN0KTtcbiAgICAgICAgUHJvamVjdC5wcm9qZWN0TGlzdC5mb3JFYWNoKChlbGVtZW50LCBpbmRleCkgPT4ge3Byb2plY3RMaXN0LmFwcGVuZChjcmVhdGVTaWRlYmFyUHJvamVjdChlbGVtZW50LnRpdGxlLCBpbmRleCkpfSlcbiAgICB9O1xuXG4gICAgZnVuY3Rpb24gY3JlYXRlU2lkZWJhclByb2plY3QodGl0bGUsIGluZGV4KSB7XG4gICAgICAgIGNvbnN0IGNvbnRhaW5lciA9IGNyZWF0ZVRleHRDb250YWluZXIodGl0bGUsICdzaWRlYmFyLXByb2plY3QnKTtcbiAgICAgICAgY29udGFpbmVyLnNldEF0dHJpYnV0ZSgncHJvamVjdC1pbmRleCcsIGluZGV4KTtcbiAgICAgICAgaWYgKGluZGV4ID09IG9uRGlzcGxheUluZGV4KSB7Y29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ29uRGlzcGxheScpfTtcblxuICAgICAgICBjb250YWluZXIuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5vbkRpc3BsYXknKS5jbGFzc0xpc3QucmVtb3ZlKCdvbkRpc3BsYXknKTtcbiAgICAgICAgICAgIHRoaXMuY2xhc3NMaXN0LmFkZCgnb25EaXNwbGF5Jyk7XG4gICAgICAgICAgICBvbkRpc3BsYXlJbmRleCA9IHBhcnNlSW50KHRoaXMuZ2V0QXR0cmlidXRlKCdwcm9qZWN0LWluZGV4JykpO1xuICAgICAgICAgICAgcHJvamVjdERpc3BsYXkucmVtb3ZlQ2hpbGQocHJvamVjdERpc3BsYXkuZmlyc3RDaGlsZCk7XG4gICAgICAgICAgICBkaXNwbGF5UHJvamVjdChvbkRpc3BsYXlJbmRleCk7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIGNvbnN0IGRlbGV0ZVByb2plY3QgPSBjcmVhdGVUZXh0Q29udGFpbmVyKCdkZWxldGUnLCAnZGVsZXRlLXByb2plY3QnKVxuICAgICAgICBcbiAgICAgICAgZGVsZXRlUHJvamVjdC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgY29uc3QgcGFyZW50RWxlbWVudCA9IHRoaXMucGFyZW50RWxlbWVudDtcbiAgICAgICAgICAgIGNvbnN0IGRlbGV0ZUluZGV4ID0gcGFyZW50RWxlbWVudC5nZXRBdHRyaWJ1dGUoJ3Byb2plY3QtaW5kZXgnKTtcbiAgICAgICAgICAgIGlmIChkZWxldGVJbmRleCA8PSBvbkRpc3BsYXlJbmRleCkge1xuICAgICAgICAgICAgICAgIG9uRGlzcGxheUluZGV4LS07XG4gICAgICAgICAgICAgICAgaWYgKGRlbGV0ZUluZGV4ID09IG9uRGlzcGxheUluZGV4ID09IC0xKSB7XG4gICAgICAgICAgICAgICAgICAgIG9uRGlzcGxheUluZGV4ID0gMDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9O1xuICAgICAgICAgICAgXG4gICAgICAgICAgICBQcm9qZWN0LmRlbGV0ZVByb2plY3QoZGVsZXRlSW5kZXgpO1xuICAgICAgICAgICAgcGFyZW50RWxlbWVudC5jbGFzc0xpc3QuYWRkKCdvbkRpc3BsYXknKTtcbiAgICAgICAgICAgIHByb2plY3RMaXN0LnJlbW92ZUNoaWxkKHBhcmVudEVsZW1lbnQpO1xuXG4gICAgICAgICAgICByZXNldERpc3BsYXkoKTtcbiAgICAgICAgfSk7XG4gICAgICAgIFxuICAgICAgICBjb250YWluZXIuYXBwZW5kKGRlbGV0ZVByb2plY3QpO1xuICAgICAgICByZXR1cm4gY29udGFpbmVyO1xuICAgIH07XG5cbiAgICAvLyBQcm9qZWN0IERpc3BsYXkgZnVuY3Rpb25zXG4gICAgZnVuY3Rpb24gZGlzcGxheVByb2plY3QoaW5kZXgpIHtcbiAgICAgICAgcHJvamVjdERpc3BsYXkuYXBwZW5kKGNyZWF0ZVByb2plY3RFbGVtZW50KFByb2plY3QuZ2V0UHJvamVjdChpbmRleCkpKTtcblxuICAgICAgICBpZiAocHJvamVjdERpc3BsYXkuaGFzQ2hpbGROb2RlcygpKSB7XG4gICAgICAgICAgICBwcm9qZWN0RGlzcGxheS5yZW1vdmVDaGlsZChwcm9qZWN0RGlzcGxheS5maXJzdENoaWxkKTtcbiAgICAgICAgfVxuICAgICAgICBwcm9qZWN0RGlzcGxheS5hcHBlbmQoY3JlYXRlUHJvamVjdEVsZW1lbnQoUHJvamVjdC5wcm9qZWN0TGlzdFtpbmRleF0pKTtcbiAgICB9O1xuXG4gICAgZnVuY3Rpb24gY3JlYXRlUHJvamVjdEVsZW1lbnQocHJvamVjdCkge1xuICAgICAgICBjb25zdCBjb250YWluZXIgPSBjcmVhdGVDb250YWluZXIoJ3Byb2plY3QtZWxlbWVudCcpO1xuXG4gICAgICAgIGNvbnN0IHRpdGxlRWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gyJyk7XG4gICAgICAgIHRpdGxlRWxlbWVudC50ZXh0Q29udGVudCA9IHByb2plY3QudGl0bGU7XG5cbiAgICAgICAgY29uc3QgdGFza0xpc3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBwcm9qZWN0Lml0ZW1Db3VudDsgaSsrKSB7XG4gICAgICAgICAgICBjb25zdCBlbGVtZW50ID0gY3JlYXRlVGFza0VsZW1lbnQocHJvamVjdC5nZXRUYXNrKGkpKTtcbiAgICAgICAgICAgIHRhc2tMaXN0LmFwcGVuZChlbGVtZW50KTtcbiAgICAgICAgfTtcbiAgICAgICAgXG4gICAgICAgIGNvbnN0IGFkZFRhc2sgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICAgICAgYWRkVGFzay50ZXh0Q29udGVudCA9ICcrIEFkZCBUYXNrJztcblxuICAgICAgICBjb25zdCB0YXNrRm9ybSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2Zvcm0nKTtcbiAgICAgICAgdGFza0Zvcm0uY2xhc3NMaXN0LmFkZCgndGFzay1mb3JtJyk7XG4gICAgICAgIGNvbnN0IHRleHRJbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XG4gICAgICAgIHRleHRJbnB1dC50eXBlID0gJ3RleHQnO1xuICAgICAgICB0ZXh0SW5wdXQucGxhY2Vob2xkZXIgPSAnTmV3IFRhc2snO1xuICAgICAgICB0ZXh0SW5wdXQuc2V0QXR0cmlidXRlKCdpZCcsICduZXctdGFzaycpO1xuICAgICAgICB0YXNrRm9ybS5hcHBlbmQodGV4dElucHV0KTtcbiAgICAgICAgYWRkVGFzay5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uKCl7XG4gICAgICAgICAgICB0YXNrRm9ybS5zdHlsZS5kaXNwbGF5ID0gJ2Jsb2NrJztcbiAgICAgICAgICAgIHRleHRJbnB1dC5zZWxlY3QoKTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgY29uc3Qgc3VibWl0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcbiAgICAgICAgc3VibWl0LnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG5cbiAgICAgICAgdGFza0Zvcm0uYWRkRXZlbnRMaXN0ZW5lcignc3VibWl0JywgZnVuY3Rpb24oZSkge1xuICAgICAgICAgICAgY29uc3QgdXNlcklucHV0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUlkKCduZXctdGFzaycpO1xuICAgICAgICAgICAgY29uc3QgbmV3VGFzayA9IGNyZWF0ZVRhc2tFbGVtZW50KHVzZXJJbnB1dC52YWx1ZSk7XG5cbiAgICAgICAgICAgIHRhc2tMaXN0LmFwcGVuZChuZXdUYXNrKTtcbiAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgfSlcblxuICAgICAgICBjb250YWluZXIuYXBwZW5kKHRpdGxlRWxlbWVudCk7XG4gICAgICAgIGNvbnRhaW5lci5hcHBlbmQoZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaHInKSk7XG4gICAgICAgIGNvbnRhaW5lci5hcHBlbmQodGFza0xpc3QpO1xuICAgICAgICBjb250YWluZXIuYXBwZW5kKHRhc2tGb3JtKTtcbiAgICAgICAgY29udGFpbmVyLmFwcGVuZChhZGRUYXNrKTtcbiAgICAgICAgLy8gY29udGFpbmVyLmFwcGVuZChjcmVhdGVBZGRCdG4oJ3RvZG8nKS5idXR0b24pO1xuICAgICAgICByZXR1cm4gY29udGFpbmVyO1xuICAgIH07XG5cbiAgICBmdW5jdGlvbiBjcmVhdGVUYXNrRWxlbWVudCh0YXNrKSB7XG4gICAgICAgIGNvbnN0IGNvbnRhaW5lciA9IGNyZWF0ZUNvbnRhaW5lcigndGFzaycsIGBwcmlvcml0eS0ke3Rhc2sucHJpb3JpdHl9YCk7XG5cbiAgICAgICAgY29uc3QgdGFza0hlYWRlciA9IGNyZWF0ZVRhc2tIZWFkZXIodGFzayk7XG4gICAgICAgIHRhc2tIZWFkZXIuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCB0b2dnbGVEZXRhaWxzKTtcblxuICAgICAgICBjb250YWluZXIuYXBwZW5kKHRhc2tIZWFkZXIpO1xuICAgICAgICBjb250YWluZXIuYXBwZW5kKGNyZWF0ZVRhc2tEZXRhaWwodGFzaykpO1xuICAgICAgICByZXR1cm4gY29udGFpbmVyO1xuICAgIH07XG5cbiAgICBmdW5jdGlvbiB0b2dnbGVEZXRhaWxzKCkge1xuICAgICAgICB0aGlzLmNsYXNzTGlzdC50b2dnbGUoJ3Nob3ctZGV0YWlsJyk7XG4gICAgICAgIGxldCBjb250ZW50ID0gdGhpcy5uZXh0RWxlbWVudFNpYmxpbmc7XG4gICAgICAgIGlmIChjb250ZW50LnN0eWxlLmRpc3BsYXkgPT09ICdibG9jaycpIHtcbiAgICAgICAgICAgIGNvbnRlbnQuc3R5bGUuZGlzcGxheSA9ICdub25lJztcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGNvbnRlbnQuc3R5bGUuZGlzcGxheSA9ICdibG9jayc7XG4gICAgICAgIH07XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gY3JlYXRlVGFza0hlYWRlcih0YXNrKSB7XG4gICAgICAgIGNvbnN0IGNvbnRhaW5lciA9IGNyZWF0ZUNvbnRhaW5lcigndGFzay1oZWFkZXInKTtcblxuICAgICAgICBjb25zdCBjaGVja2JveCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XG4gICAgICAgIGNoZWNrYm94LnR5cGUgPSAnY2hlY2tib3gnO1xuXG4gICAgICAgIGNvbnN0IHRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIHRpdGxlLnRleHRDb250ZW50ID0gdGFzay50aXRsZTtcblxuICAgICAgICBjb25zdCBkYXRlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIGRhdGUudGV4dENvbnRlbnQgPSBcIkR1ZTogXCIgKyB0YXNrLmR1ZURhdGU7XG5cbiAgICAgICAgY29uc3QgZWRpdFRhc2sgPSBjcmVhdGVUZXh0Q29udGFpbmVyKCdFZGl0JywgJ3Rhc2stZWRpdCcpO1xuXG4gICAgICAgIGNvbnN0IGRlbGV0ZVRhc2sgPSBjcmVhdGVUZXh0Q29udGFpbmVyKCdEZWxldGUnLCAndGFzay1kZWxldGUnKTtcblxuICAgICAgICBjb250YWluZXIuYXBwZW5kKGNoZWNrYm94KTtcbiAgICAgICAgY29udGFpbmVyLmFwcGVuZCh0aXRsZSk7XG4gICAgICAgIGNvbnRhaW5lci5hcHBlbmQoZGF0ZSk7XG4gICAgICAgIGNvbnRhaW5lci5hcHBlbmQoZWRpdFRhc2spO1xuICAgICAgICBjb250YWluZXIuYXBwZW5kKGRlbGV0ZVRhc2spO1xuICAgICAgICByZXR1cm4gY29udGFpbmVyO1xuICAgIH07XG5cbiAgICBmdW5jdGlvbiBjcmVhdGVUYXNrRGV0YWlsKHRhc2spIHtcbiAgICAgICAgY29uc3QgY29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIGNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCd0YXNrLWRldGFpbCcpO1xuXG4gICAgICAgIGNvbnN0IGxhYmVsc0VsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgbGFiZWxzRWxlbWVudC5jbGFzc0xpc3QuYWRkKCdsYWJlbHMnKTtcbiAgICAgICAgbGFiZWxzRWxlbWVudC50ZXh0Q29udGVudCA9IFwiTGFiZWxzOiBcIjtcbiAgICAgICAgaWYgKHRhc2subGFiZWxzKSB7XG4gICAgICAgICAgICB0YXNrLmxhYmVscy5mb3JFYWNoKChlbGVtZW50KSA9PiB7XG4gICAgICAgICAgICAgICAgY29uc3QgbGFiZWwgPSBjcmVhdGVMYWJlbChlbGVtZW50KTtcbiAgICAgICAgICAgICAgICBsYWJlbHNFbGVtZW50LmFwcGVuZChsYWJlbCk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IG5vdGVzRWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICBub3Rlc0VsZW1lbnQuY2xhc3NMaXN0LmFkZCgnbm90ZXMnKTtcbiAgICAgICAgbm90ZXNFbGVtZW50LnRleHRDb250ZW50ID0gXCJOb3RlczogXCJcbiAgICAgICAgaWYgKHRhc2subm90ZXMpIHsgbm90ZXNFbGVtZW50LmFwcGVuZChjcmVhdGVOb3RlVGV4dCh0YXNrLm5vdGVzKSkgfTtcblxuICAgICAgICBjb250YWluZXIuYXBwZW5kKGxhYmVsc0VsZW1lbnQpO1xuICAgICAgICBjb250YWluZXIuYXBwZW5kKG5vdGVzRWxlbWVudCk7XG4gICAgICAgIHJldHVybiBjb250YWluZXI7XG4gICAgfTtcblxuICAgIGZ1bmN0aW9uIGNyZWF0ZUxhYmVsKHN0cmluZykge1xuICAgICAgICBjb25zdCBsYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICBsYWJlbC5jbGFzc0xpc3QuYWRkKCdsYWJlbCcpO1xuICAgICAgICBsYWJlbC50ZXh0Q29udGVudCA9IGBbJHtzdHJpbmd9XWA7XG4gICAgICAgIHJldHVybiBsYWJlbDtcbiAgICB9O1xuXG4gICAgZnVuY3Rpb24gY3JlYXRlTm90ZVRleHQoc3RyaW5nKSB7XG4gICAgICAgIGNvbnN0IG5vdGVUZXh0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIG5vdGVUZXh0LmNsYXNzTGlzdC5hZGQoJ25vdGUtdGV4dCcpO1xuICAgICAgICBub3RlVGV4dC50ZXh0Q29udGVudCA9IHN0cmluZztcbiAgICAgICAgcmV0dXJuIG5vdGVUZXh0O1xuICAgIH07XG5cbiAgICByZXR1cm4ge1xuICAgICAgICBpbml0RGlzcGxheSxcbiAgICAgICAgY3JlYXRlUHJvamVjdEVsZW1lbnRcbiAgICB9O1xufSkoKTtcblxuZXhwb3J0IGRlZmF1bHQgZG9tTWFuYWdlcjsiLCJpbXBvcnQgZG9tTWFuYWdlciBmcm9tIFwiLi9kb21NYW5hZ2VyXCI7XG5cbmNvbnN0IFByb2plY3QgPSAoZnVuY3Rpb24oKSB7XG4gICAgbGV0IHByb2plY3RzID0gW107XG5cbiAgICBmdW5jdGlvbiBjcmVhdGVQcm9qZWN0KHRpdGxlLCBkZXNjPW51bGwpIHtcbiAgICAgICAgbGV0IHRhc2tzID0gW107XG4gICAgICAgIGxldCBpdGVtQ291bnQgPSB0YXNrcy5sZW5ndGg7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBpdGVtQ291bnQsXG4gICAgICAgICAgICBhZGRUYXNrKGl0ZW0pIHtcbiAgICAgICAgICAgICAgICB0YXNrcy5wdXNoKGl0ZW0pO1xuICAgICAgICAgICAgICAgIHRoaXMuaXRlbUNvdW50Kys7XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgcmVtb3ZlVGFzayhpbmRleCkge1xuICAgICAgICAgICAgICAgIHRhc2tzLnNwbGljZShpbmRleCwgMSk7XG4gICAgICAgICAgICAgICAgdGhpcy5pdGVtQ291bnQtLTtcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBnZXRUYXNrKGluZGV4KSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRhc2tzW2luZGV4XTtcbiAgICAgICAgICAgIH0sXG4gICAgXG4gICAgICAgICAgICBnZXQgZGVzYygpIHtyZXR1cm4gZGVzY30sXG4gICAgICAgICAgICBnZXQgdGl0bGUoKSB7cmV0dXJuIHRpdGxlfSxcbiAgICBcbiAgICAgICAgICAgIHNldCBkZXNjKHN0cmluZykge2Rlc2MgPSBzdHJpbmd9LFxuICAgICAgICAgICAgc2V0IHRpdGxlKHN0cmluZykge3RpdGxlID0gc3RyaW5nfVxuICAgICAgICB9XG4gICAgfTtcblxuICAgIGZ1bmN0aW9uIGFkZFByb2plY3QoLi4uYXJncykge1xuICAgICAgICBjb25zdCBwcm9qZWN0ID0gY3JlYXRlUHJvamVjdChhcmdzWzBdLCBhcmdzWzFdKTtcbiAgICAgICAgcHJvamVjdHMucHVzaChwcm9qZWN0KTtcbiAgICB9O1xuXG4gICAgZnVuY3Rpb24gZGVsZXRlUHJvamVjdChpbmRleCkge1xuICAgICAgICBwcm9qZWN0cy5zcGxpY2UoaW5kZXgsIDEpO1xuICAgIH07XG5cbiAgICBmdW5jdGlvbiBnZXRQcm9qZWN0KGluZGV4KSB7XG4gICAgICAgIHJldHVybiBwcm9qZWN0c1tpbmRleF07XG4gICAgfTtcblxuICAgIHJldHVybiB7XG4gICAgICAgIGdldCBwcm9qZWN0TGlzdCgpIHtyZXR1cm4gcHJvamVjdHN9LFxuICAgICAgICBnZXQgcHJvamVjdENvdW50KCkge3JldHVybiBwcm9qZWN0cy5sZW5ndGh9LFxuICAgICAgICBhZGRQcm9qZWN0LFxuICAgICAgICBkZWxldGVQcm9qZWN0LFxuICAgICAgICBnZXRQcm9qZWN0XG4gICAgfVxufSkoKTtcblxuZXhwb3J0IGRlZmF1bHQgUHJvamVjdDsiLCIvLyBpbXBvcnQgeyBmb3JtYXQgfSBmcm9tICdkYXRlLWZucyc7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGNyZWF0ZVRhc2sodGl0bGUsIC4uLmFyZ3MpIHtcbiAgICBsZXQgY29tcGxldGVkID0gZmFsc2U7XG5cbiAgICBmdW5jdGlvbiB0b2dnbGVDb21wbGV0ZSgpIHtjb21wbGV0ZWQgPSAhY29tcGxldGVkfTtcbiAgICBmdW5jdGlvbiB0b2dnbGVTaG93RGV0YWlscygpIHtkZXRhaWxTaG93biA9ICFkZXRhaWxTaG93bn07XG4gICAgLy8gZnVuY3Rpb24gZ2V0RHVlRGF0ZSgpIHtyZXR1cm4gZm9ybWF0KHRoaXMuZHVlRGF0ZSwgJ01NL2RkL3l5eXknKX07XG4gICAgLy8gZnVuY3Rpb24gc2V0RHVlRGF0ZShtb250aCwgZGF5LCB5ZWFyKSB7dGhpcy5kdWVEYXRlID0gbmV3IERhdGUoeWVhciwgbW9udGgsIGRheSl9O1xuICAgIGZ1bmN0aW9uIHNhdmVOb3RlcyhpbnB1dCkge3RoaXMubm90ZXMgPSBpbnB1dH07XG4gICAgZnVuY3Rpb24gYWRkTGFiZWwobGFiZWwpIHt0aGlzLmxhYmVscy5wdXNoKGxhYmVsKX07XG4gICAgZnVuY3Rpb24gcmVtb3ZlTGFiZWwoaW5kZXgpIHt0aGlzLmxhYmVscy5zcGxpY2UoaW5kZXgsMSl9O1xuXG4gICAgcmV0dXJuIHtcbiAgICAgICAgdGl0bGUsXG4gICAgICAgIGR1ZURhdGU6IGFyZ3NbMF0sXG4gICAgICAgIHByaW9yaXR5OiBhcmdzWzFdLFxuICAgICAgICBsYWJlbHM6IGFyZ3NbMl0sXG4gICAgICAgIC8vIGR1ZURhdGU6IChhcmdzWzBdID8gbmV3IERhdGUoYXJnc1swXVswXSwgYXJnc1swXVsxXSwgYXJnc1swXVsyXSkgOiBudWxsKSxcbiAgICAgICAgLy8gcHJpb3JpdHk6IChhcmdzWzFdID8gYXJnc1sxXSA6IDApLFxuICAgICAgICAvLyBsYWJlbHM6IChhcmdzWzJdID8gYXJnc1syXSA6IFtdKSxcbiAgICAgICAgbm90ZXM6IGFyZ3NbM10sXG4gICAgICAgIGNvbXBsZXRlZCxcbiAgICAgICAgdG9nZ2xlQ29tcGxldGUsXG4gICAgICAgIHRvZ2dsZVNob3dEZXRhaWxzLFxuICAgICAgICBzYXZlTm90ZXMsXG4gICAgICAgIGFkZExhYmVsLFxuICAgICAgICByZW1vdmVMYWJlbFxuICAgIH1cbn07IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHRpZDogbW9kdWxlSWQsXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsImltcG9ydCBQcm9qZWN0IGZyb20gJy4vcHJvamVjdC5qcyc7XG5pbXBvcnQgY3JlYXRlVGFzayBmcm9tICcuL3Rhc2suanMnO1xuaW1wb3J0IGRvbU1hbmFnZXIgZnJvbSAnLi9kb21NYW5hZ2VyLmpzJztcbi8vIGltcG9ydCBjcmVhdGVBZGRCdG4gZnJvbSAnLi9jcmVhdGVBZGRCdG4uanMnO1xuaW1wb3J0ICcuL3N0eWxlLmNzcyc7XG5cblxuY29uc3QgdG9kbyA9IGNyZWF0ZVRhc2soXCJDcmVhdGUgd2VicGFnZVwiLCAnMjMnLCAzLCBbJ3NjaG9vbCcsICd3b3JrJywgJ3BsYXknXSwgXCJBbGwgbXkgbGlmZVwiKTtcbi8vIHRvZG8uc2V0RHVlRGF0ZSgyLCAyMywgMjAyMik7XG5jb25zdCB0b2RvMiA9IGNyZWF0ZVRhc2soXCJEb3dubG9hZCBtb3JlIFJBTVwiLCAnNDInLCAxLCBbJ3BsYXknXSwgXCJ3aGF0cyBnb29kXCIpO1xuY29uc3QgdG9kbzMgPSBjcmVhdGVUYXNrKFwiUGxheSBTb2xpdGFpcmVcIik7XG5cblByb2plY3QuYWRkUHJvamVjdChcIldlYiBQcm9ncmFtbWluZ1wiKTtcblByb2plY3QuYWRkUHJvamVjdChcIlBsYXkgQmFza2V0YmFsbFwiKTtcblxuY29uc3Qgd3AgPSBQcm9qZWN0LmdldFByb2plY3QoMCk7XG53cC5hZGRUYXNrKHRvZG8pO1xud3AuYWRkVGFzayh0b2RvMik7XG53cC5hZGRUYXNrKHRvZG8zKTtcblxuXG5cbmRvbU1hbmFnZXIuaW5pdERpc3BsYXkoKTtcbi8vIERpc3BsYXkuaGVhZGVyKFwiLi4vc3JjL3RvdG9kaWxlLW1pbmkuanBnXCIsIFwiVG9kb2RpbGVcIiwgXCJGb3IgYWxsIHlvdXIgcHJvamVjdCBjcnVuY2hpbmcgbmVlZHMhXCIpO1xuLy8gRGlzcGxheS5zaWRlYmFyKGNhdGVnb3JpZXMsIHByb2plY3RBcnIpO1xuLy8gRGlzcGxheS5kaXNwbGF5UHJvamVjdChwcm9qZWN0KTtcbi8vIERpc3BsYXkuZGlzcGxheUl0ZW1EZXRhaWxzKG1haW4sIHRvZG8pOyJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==