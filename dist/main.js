/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/client/index.js":
/*!*****************************!*\
  !*** ./src/client/index.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _js_nameChecker__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./js/nameChecker */ \"./src/client/js/nameChecker.js\");\n/* harmony import */ var _js_formHandler__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./js/formHandler */ \"./src/client/js/formHandler.js\");\n\r\n\r\n\r\nconsole.log(_js_nameChecker__WEBPACK_IMPORTED_MODULE_0__.checkForName, _js_formHandler__WEBPACK_IMPORTED_MODULE_1__.handleSubmit);\r\n\r\n// alert(\"I EXIST\")\r\nconsole.log(\"I Exist!\")//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY2xpZW50L2luZGV4LmpzLmpzIiwibWFwcGluZ3MiOiI7OztrQkFBK0M7a0JBQ0E7QUFDL0M7QUFDQSxZQUFZLHlEQUFZLEVBQUUseURBQVk7QUFDdEM7QUFDQTtBQUNBLHVCIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZXhhbXBsZS1wcm9qZWN0Ly4vc3JjL2NsaWVudC9pbmRleC5qcz8zYjVlIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGNoZWNrRm9yTmFtZSB9IGZyb20gJy4vanMvbmFtZUNoZWNrZXInXHJcbmltcG9ydCB7IGhhbmRsZVN1Ym1pdCB9IGZyb20gJy4vanMvZm9ybUhhbmRsZXInXHJcblxyXG5jb25zb2xlLmxvZyhjaGVja0Zvck5hbWUsIGhhbmRsZVN1Ym1pdCk7XHJcblxyXG4vLyBhbGVydChcIkkgRVhJU1RcIilcclxuY29uc29sZS5sb2coXCJJIEV4aXN0IVwiKSJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/client/index.js\n");

/***/ }),

/***/ "./src/client/js/formHandler.js":
/*!**************************************!*\
  !*** ./src/client/js/formHandler.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"handleSubmit\": () => (/* binding */ handleSubmit)\n/* harmony export */ });\n/* harmony import */ var _nameChecker__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./nameChecker */ \"./src/client/js/nameChecker.js\");\n\r\n\r\nfunction handleSubmit(event) {\r\n    event.preventDefault()\r\n\r\n    // check what text was put into the form field\r\n    let formText = document.getElementById('name').value\r\n    ;(0,_nameChecker__WEBPACK_IMPORTED_MODULE_0__.checkForName)(formText)\r\n\r\n    console.log(\"::: Form Submitted :::\")\r\n    fetch('http://localhost:8080/test')\r\n    .then(res => res.json())\r\n    .then(function(res) {\r\n        document.getElementById('results').innerHTML = res.message\r\n    })\r\n}\r\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY2xpZW50L2pzL2Zvcm1IYW5kbGVyLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7O2tCQUE0QztBQUM1QztjQUNPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJLDJEQUFZO0FBQ2hCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTCIsInNvdXJjZXMiOlsid2VicGFjazovL2V4YW1wbGUtcHJvamVjdC8uL3NyYy9jbGllbnQvanMvZm9ybUhhbmRsZXIuanM/N2I1MiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBjaGVja0Zvck5hbWUgfSBmcm9tICcuL25hbWVDaGVja2VyJ1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGhhbmRsZVN1Ym1pdChldmVudCkge1xyXG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKVxyXG5cclxuICAgIC8vIGNoZWNrIHdoYXQgdGV4dCB3YXMgcHV0IGludG8gdGhlIGZvcm0gZmllbGRcclxuICAgIGxldCBmb3JtVGV4dCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCduYW1lJykudmFsdWVcclxuICAgIGNoZWNrRm9yTmFtZShmb3JtVGV4dClcclxuXHJcbiAgICBjb25zb2xlLmxvZyhcIjo6OiBGb3JtIFN1Ym1pdHRlZCA6OjpcIilcclxuICAgIGZldGNoKCdodHRwOi8vbG9jYWxob3N0OjgwODAvdGVzdCcpXHJcbiAgICAudGhlbihyZXMgPT4gcmVzLmpzb24oKSlcclxuICAgIC50aGVuKGZ1bmN0aW9uKHJlcykge1xyXG4gICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdyZXN1bHRzJykuaW5uZXJIVE1MID0gcmVzLm1lc3NhZ2VcclxuICAgIH0pXHJcbn1cclxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/client/js/formHandler.js\n");

/***/ }),

/***/ "./src/client/js/nameChecker.js":
/*!**************************************!*\
  !*** ./src/client/js/nameChecker.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"checkForName\": () => (/* binding */ checkForName)\n/* harmony export */ });\nfunction checkForName(inputText) {\r\n    console.log(\"::: Running checkForName :::\", inputText);\r\n    let names = [\r\n        \"Picard\",\r\n        \"Janeway\",\r\n        \"Kirk\",\r\n        \"Archer\",\r\n        \"Georgiou\"\r\n    ]\r\n\r\n    if(names.includes(inputText)) {\r\n        alert(\"Welcome, Captain!\")\r\n    }\r\n}\r\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY2xpZW50L2pzL25hbWVDaGVja2VyLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Y0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZXhhbXBsZS1wcm9qZWN0Ly4vc3JjL2NsaWVudC9qcy9uYW1lQ2hlY2tlci5qcz9kNGI2Il0sInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBmdW5jdGlvbiBjaGVja0Zvck5hbWUoaW5wdXRUZXh0KSB7XHJcbiAgICBjb25zb2xlLmxvZyhcIjo6OiBSdW5uaW5nIGNoZWNrRm9yTmFtZSA6OjpcIiwgaW5wdXRUZXh0KTtcclxuICAgIGxldCBuYW1lcyA9IFtcclxuICAgICAgICBcIlBpY2FyZFwiLFxyXG4gICAgICAgIFwiSmFuZXdheVwiLFxyXG4gICAgICAgIFwiS2lya1wiLFxyXG4gICAgICAgIFwiQXJjaGVyXCIsXHJcbiAgICAgICAgXCJHZW9yZ2lvdVwiXHJcbiAgICBdXHJcblxyXG4gICAgaWYobmFtZXMuaW5jbHVkZXMoaW5wdXRUZXh0KSkge1xyXG4gICAgICAgIGFsZXJ0KFwiV2VsY29tZSwgQ2FwdGFpbiFcIilcclxuICAgIH1cclxufVxyXG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/client/js/nameChecker.js\n");

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
/******/ 	// This entry module can't be inlined because the eval-source-map devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/client/index.js");
/******/ 	
/******/ })()
;