"use strict";
/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(self["webpackChunkcapstone_2"] = self["webpackChunkcapstone_2"] || []).push([["index"],{

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/style.scss":
/*!*****************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/style.scss ***!
  \*****************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n// Imports\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \"* {\\n  text-decoration: none;\\n  list-style: none;\\n  margin: 0;\\n  padding: 0;\\n}\\n\\nbutton,\\ninput[type=submit],\\ninput[type=reset] {\\n  background: none;\\n  color: inherit;\\n  border: none;\\n  padding: 0;\\n  font: inherit;\\n  cursor: pointer;\\n  outline: inherit;\\n}\\n\\nbody {\\n  font-family: cinzel decorative;\\n  background-color: rgba(255, 182, 193, 0.6666666667);\\n}\\nbody section {\\n  display: none;\\n  position: fixed;\\n  top: 0;\\n  left: 0;\\n  width: 100%;\\n  height: 100%;\\n  overflow: auto;\\n  text-align: center;\\n  background-color: rgba(176, 224, 230, 0.7);\\n  z-index: 1;\\n}\\nbody section #modal-window {\\n  display: flex;\\n  place-content: center;\\n  place-items: center;\\n  gap: 30px;\\n  flex-direction: column;\\n  background-color: lightpink;\\n  margin: 10% auto;\\n  width: 25%;\\n  padding: 30px;\\n  box-shadow: 0 5px 20px 0 rgba(0, 0, 0, 0.5), 0 7px 50px 0 rgba(0, 0, 0, 0.7);\\n  border-radius: 10px;\\n}\\nbody section #modal-window span {\\n  width: 90%;\\n}\\nbody section #modal-window span i {\\n  cursor: pointer;\\n  display: flex;\\n  justify-content: flex-end;\\n}\\nbody section #modal-window #modal-body h2 {\\n  padding: 10px;\\n}\\nbody section #modal-window #modal-body p {\\n  padding: 10px;\\n}\\nbody section #modal-window #modal-body span {\\n  padding: 10px;\\n}\\nbody section #modal-window #modal-form {\\n  display: flex;\\n  place-content: center;\\n  place-items: center;\\n  flex-direction: column;\\n}\\nbody section #modal-window #modal-form h3 {\\n  padding: 10px;\\n}\\nbody section #modal-window #modal-form form {\\n  display: flex;\\n  place-content: center;\\n  place-items: center;\\n  flex-direction: column;\\n}\\nbody section #modal-window #modal-form form input {\\n  padding-inline: 5px;\\n  padding-block: 10px;\\n  border-radius: 3px;\\n  margin-bottom: 20px;\\n  font-size: 18px;\\n  border: 5px dotted rgba(255, 182, 193, 0.6666666667);\\n}\\nbody section #modal-window #modal-form form textarea {\\n  padding-inline: 5px;\\n  padding-block: 10px;\\n  border-radius: 3px;\\n  margin-bottom: 20px;\\n  font-size: 18px;\\n  border: 5px dotted rgba(255, 182, 193, 0.6666666667);\\n}\\nbody section #modal-window #modal-form form button {\\n  border: 1px solid lightblue;\\n  background-color: lightpink;\\n  box-shadow: 10px 10px lightblue;\\n  height: 50px;\\n  width: 150px;\\n}\\nbody nav {\\n  background-color: lightblue;\\n  height: 5vh;\\n}\\nbody nav ul {\\n  display: flex;\\n  place-content: center;\\n  place-items: center;\\n  gap: 5%;\\n  font-weight: 700;\\n  width: 100%;\\n  padding-block: 0.5%;\\n}\\nbody nav ul li .logo {\\n  font-size: 28px;\\n}\\n\\nmain {\\n  display: grid;\\n  grid-template-columns: repeat(3, 1fr);\\n  padding: 2%;\\n  max-width: 70%;\\n  margin: 0 auto;\\n}\\nmain .card {\\n  display: flex;\\n  place-content: center;\\n  place-items: center;\\n  flex-direction: column;\\n}\\nmain .card .card-body .movie-name {\\n  cursor: pointer;\\n}\\nmain .card .card-body .like-button {\\n  cursor: pointer;\\n}\\nmain .card .comment-button {\\n  border: 1px solid lightblue;\\n  background-color: lightpink;\\n  box-shadow: 10px 10px lightblue;\\n  height: 50px;\\n  width: 150px;\\n  margin-bottom: 20px;\\n}\\n\\nfooter {\\n  display: flex;\\n  place-content: center;\\n  place-items: center;\\n  background-color: lightblue;\\n  gap: 0.2%;\\n  height: 5vh;\\n  font-weight: 700;\\n}\", \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://capstone-2/./src/style.scss?./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = [];\n\n  // return the list of modules as css string\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n      content += cssWithMappingToString(item);\n      if (needLayer) {\n        content += \"}\";\n      }\n      if (item[2]) {\n        content += \"}\";\n      }\n      if (item[4]) {\n        content += \"}\";\n      }\n      return content;\n    }).join(\"\");\n  };\n\n  // import a list of modules into the list\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n    var alreadyImportedModules = {};\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n      list.push(item);\n    }\n  };\n  return list;\n};\n\n//# sourceURL=webpack://capstone-2/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://capstone-2/./node_modules/css-loader/dist/runtime/noSourceMaps.js?");

/***/ }),

/***/ "./src/style.scss":
/*!************************!*\
  !*** ./src/style.scss ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_style_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!../node_modules/sass-loader/dist/cjs.js!./style.scss */ \"./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/style.scss\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\n\n      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\n    \noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_style_scss__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_style_scss__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_style_scss__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_style_scss__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://capstone-2/./src/style.scss?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

eval("\n\nvar stylesInDOM = [];\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n  return result;\n}\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n    identifiers.push(identifier);\n  }\n  return identifiers;\n}\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n  return updater;\n}\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n    var newLastIdentifiers = modulesToDom(newList, options);\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n      var _index = getIndexByIdentifier(_identifier);\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://capstone-2/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

eval("\n\nvar memo = {};\n\n/* istanbul ignore next  */\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target);\n\n    // Special case to return head of iframe instead of iframe itself\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n    memo[target] = styleTarget;\n  }\n  return memo[target];\n}\n\n/* istanbul ignore next  */\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n  target.appendChild(style);\n}\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://capstone-2/./node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://capstone-2/./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://capstone-2/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n  var needLayer = typeof obj.layer !== \"undefined\";\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n  css += obj.css;\n  if (needLayer) {\n    css += \"}\";\n  }\n  if (obj.media) {\n    css += \"}\";\n  }\n  if (obj.supports) {\n    css += \"}\";\n  }\n  var sourceMap = obj.sourceMap;\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  }\n\n  // For old IE\n  /* istanbul ignore if  */\n  options.styleTagTransform(css, styleElement, options.options);\n}\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n  styleElement.parentNode.removeChild(styleElement);\n}\n\n/* istanbul ignore next  */\nfunction domAPI(options) {\n  if (typeof document === \"undefined\") {\n    return {\n      update: function update() {},\n      remove: function remove() {}\n    };\n  }\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://capstone-2/./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://capstone-2/./node_modules/style-loader/dist/runtime/styleTagTransform.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _modules_involvementStore_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/involvementStore.js */ \"./src/modules/involvementStore.js\");\n/* harmony import */ var _modules_movieStore_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/movieStore.js */ \"./src/modules/movieStore.js\");\n/* harmony import */ var _modules_toggleModal_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/toggleModal.js */ \"./src/modules/toggleModal.js\");\n/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./style.scss */ \"./src/style.scss\");\n\r\n\r\n\r\n\r\n\r\n\r\nconst movieStore = new _modules_movieStore_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"]();\r\nawait movieStore.getData();\r\nconst involvementStore = new _modules_involvementStore_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"]();\r\n\r\nconst closeModal = document.getElementById('close-button');\r\nconst main = document.querySelector('main');\r\nmain.innerHTML = movieStore.render();\r\n\r\ndocument.addEventListener('click', async (e) => {\r\n  e.preventDefault();\r\n\r\n  if (e.target.classList.contains('comment-button')) {\r\n    (0,_modules_toggleModal_js__WEBPACK_IMPORTED_MODULE_2__.renderModal)(e);\r\n    const movieIndex = e.target.id - 1;\r\n    (0,_modules_toggleModal_js__WEBPACK_IMPORTED_MODULE_2__.createModal)(movieIndex, movieStore);\r\n  }\r\n\r\n  if (e.target.classList.contains('fa-heart')) {\r\n    await involvementStore.addLike(e.target.dataset.id);\r\n    await involvementStore.getLikes();\r\n  }\r\n});\r\n\r\ncloseModal.addEventListener('click', () => {\r\n  (0,_modules_toggleModal_js__WEBPACK_IMPORTED_MODULE_2__.hideModal)();\r\n});\r\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } }, 1);\n\n//# sourceURL=webpack://capstone-2/./src/index.js?");

/***/ }),

/***/ "./src/modules/involvementStore.js":
/*!*****************************************!*\
  !*** ./src/modules/involvementStore.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ InvolvementStore)\n/* harmony export */ });\n/* harmony import */ var _storage_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./storage.js */ \"./src/modules/storage.js\");\n\r\n\r\nconst BASE_URL =\r\n  'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps';\r\n\r\nclass InvolvementStore {\r\n  constructor() {\r\n    this.makeAppId();\r\n  }\r\n\r\n  async makeAppId() {\r\n    this.appId = (0,_storage_js__WEBPACK_IMPORTED_MODULE_0__.getStoredAppId)();\r\n    if (!this.appId) {\r\n      const response = await fetch(`${BASE_URL}`, {\r\n        method: 'POST',\r\n        headers: { 'Content-Type': 'application/json' },\r\n      });\r\n      this.appId = await response.text();\r\n      (0,_storage_js__WEBPACK_IMPORTED_MODULE_0__.storeAppId)(this.appId);\r\n    }\r\n  }\r\n\r\n  async getLikes() {\r\n    const likes = await fetch(`${BASE_URL}/${this.appId}/likes/`, {\r\n      method: 'GET',\r\n    });\r\n    const likesText = await likes.text();\r\n    if (likesText !== '') {\r\n      (0,_storage_js__WEBPACK_IMPORTED_MODULE_0__.storeLikes)(likesText);\r\n      return JSON.parse(likesText);\r\n    }\r\n    return likesText;\r\n  }\r\n\r\n  async addLike(movieId) {\r\n    const response = await fetch(`${BASE_URL}/${this.appId}/likes/`, {\r\n      method: 'POST',\r\n      headers: { 'Content-Type': 'application/json' },\r\n      body: JSON.stringify({\r\n        item_id: movieId,\r\n      }),\r\n    });\r\n    return response;\r\n  }\r\n}\r\n\n\n//# sourceURL=webpack://capstone-2/./src/modules/involvementStore.js?");

/***/ }),

/***/ "./src/modules/movieStore.js":
/*!***********************************!*\
  !*** ./src/modules/movieStore.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ MovieStore)\n/* harmony export */ });\nclass MovieStore {\r\n  async getData() {\r\n    const fetchResult = await fetch('https://api.tvmaze.com/shows');\r\n    const jsonResult = await fetchResult.json();\r\n    this.moviesArray = jsonResult.slice(0, 12);\r\n  }\r\n\r\n  get(index) {\r\n    return this.moviesArray[index];\r\n  }\r\n\r\n  render() {\r\n    let content = '';\r\n    this.moviesArray.forEach((movie) => {\r\n      content += `<div class=\"card\">\r\n        <img class=\"card-banner\" src=\"${movie.image.medium}\" />\r\n        <div class=\"card-body\">\r\n          <a class=\"movie-name\">${movie.name}</a>\r\n          <i class=\"like-button far fa-heart\" data-id=${movie.id}></i>\r\n        </div>\r\n        <p>5 likes</p>\r\n        <button class=\"comment-button\" id=${movie.id} data-target=\"#model-window\">Comments</button>\r\n      </div>`;\r\n    });\r\n\r\n    return content;\r\n  }\r\n}\r\n\n\n//# sourceURL=webpack://capstone-2/./src/modules/movieStore.js?");

/***/ }),

/***/ "./src/modules/storage.js":
/*!********************************!*\
  !*** ./src/modules/storage.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   getStoredAppId: () => (/* binding */ getStoredAppId),\n/* harmony export */   storeAppId: () => (/* binding */ storeAppId),\n/* harmony export */   storeLikes: () => (/* binding */ storeLikes)\n/* harmony export */ });\nconst storeAppId = (appId) => {\r\n  localStorage.setItem('JSCapstoneAppID', appId);\r\n};\r\n\r\nconst storeLikes = (likesText) => {\r\n  localStorage.setItem('likes', likesText);\r\n};\r\n\r\nconst getStoredAppId = () => localStorage.getItem('JSCapstoneAppID');\r\n\n\n//# sourceURL=webpack://capstone-2/./src/modules/storage.js?");

/***/ }),

/***/ "./src/modules/toggleModal.js":
/*!************************************!*\
  !*** ./src/modules/toggleModal.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   createModal: () => (/* binding */ createModal),\n/* harmony export */   hideModal: () => (/* binding */ hideModal),\n/* harmony export */   renderModal: () => (/* binding */ renderModal)\n/* harmony export */ });\nconst modal = document.querySelector('section');\r\n\r\nconst renderModal = (e) => {\r\n  e.target.className.includes('button');\r\n  if (e.target.className.includes('button')) {\r\n    modal.style.display = 'block';\r\n  }\r\n};\r\n\r\nconst hideModal = () => {\r\n  modal.style.display = 'none';\r\n};\r\n\r\nconst createModal = (i, movieStore) => {\r\n  const modalImage = document.getElementById('modal-image');\r\n  const modalName = document.getElementById('modal-name');\r\n  const modalSummary = document.getElementById('modal-summary');\r\n\r\n  const movie = movieStore.get(i);\r\n  const { id, summary, name, image } = movie;\r\n  const modalId = id;\r\n  modalImage.alt = modalId;\r\n\r\n  modalName.innerText = name;\r\n  modalSummary.innerHTML = summary;\r\n  const { medium } = image;\r\n  const mediumImage = medium;\r\n  modalImage.src = mediumImage;\r\n};\r\n\n\n//# sourceURL=webpack://capstone-2/./src/modules/toggleModal.js?");

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./src/index.js"));
/******/ }
]);