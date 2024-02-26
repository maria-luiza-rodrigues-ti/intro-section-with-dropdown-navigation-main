/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/js/modules/menu-mobile.js":
/*!***************************************!*\
  !*** ./src/js/modules/menu-mobile.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ initMenuMobile)\n/* harmony export */ });\nfunction initMenuMobile() {\n  var openButton = document.querySelector('[data-menu=\"open\" ');\n  var nav = document.querySelector(\".nav\");\n  var closeButton = document.querySelector('[data-menu=\"close\"]');\n  function toggleMenu(event) {\n    event.preventDefault();\n    nav.classList.toggle(\"open\");\n  }\n  openButton.addEventListener(\"click\", toggleMenu);\n  closeButton.addEventListener(\"click\", toggleMenu);\n}\n\n//# sourceURL=webpack://intro-section-with-dropdown-navigation-main/./src/js/modules/menu-mobile.js?");

/***/ }),

/***/ "./src/js/modules/submenu.js":
/*!***********************************!*\
  !*** ./src/js/modules/submenu.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ initSubmenu)\n/* harmony export */ });\nfunction initSubmenu() {}\nvar buttons = document.querySelectorAll(\".has-submenu\");\nvar submenus = document.querySelectorAll(\".submenu\");\nfunction toggleSubmenu(event) {\n  var _this = this;\n  var submenu = event.target.nextElementSibling;\n  event.preventDefault();\n  submenu.classList.toggle(\"active\");\n  outsideClick(this, function () {\n    _this.classList.remove(\"active\");\n  });\n}\nfunction outsideClick(element, callback) {\n  var html = document.documentElement;\n  var outside = \"data-outside\";\n  if (!element.hasAttribute(outside)) {\n    html.addEventListener(\"click\", handleOutsideClick);\n  }\n  element.setAttribute(outside, \"\");\n  function handleOutsideClick(event) {\n    if (!element.contains(event.target)) {\n      element.removeAttribute(outside);\n      html.removeEventListener(\"click\", handleOutsideClick);\n      callback();\n    }\n  }\n}\nbuttons.forEach(function (button) {\n  button.addEventListener(\"click\", toggleSubmenu);\n});\n\n//# sourceURL=webpack://intro-section-with-dropdown-navigation-main/./src/js/modules/submenu.js?");

/***/ }),

/***/ "./src/js/script.js":
/*!**************************!*\
  !*** ./src/js/script.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _modules_menu_mobile_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/menu-mobile.js */ \"./src/js/modules/menu-mobile.js\");\n/* harmony import */ var _modules_submenu_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/submenu.js */ \"./src/js/modules/submenu.js\");\n\n\n(0,_modules_menu_mobile_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\n(0,_modules_submenu_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])();\n\n//# sourceURL=webpack://intro-section-with-dropdown-navigation-main/./src/js/script.js?");

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
/******/ 			// no module.id needed
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
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/js/script.js");
/******/ 	
/******/ })()
;