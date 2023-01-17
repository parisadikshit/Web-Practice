"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/register";
exports.ids = ["pages/register"];
exports.modules = {

/***/ "./pages/register.js":
/*!***************************!*\
  !*** ./pages/register.js ***!
  \***************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! axios */ \"axios\");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([axios__WEBPACK_IMPORTED_MODULE_2__]);\naxios__WEBPACK_IMPORTED_MODULE_2__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];\n\n\n\nconst Register = ()=>{\n    const [name, setName] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const [email, setEmail] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const [password, setPassword] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const handleSubmit = async (e)=>{\n        // console.log(e);\n        e.preventDefault();\n        // console.table({name,email,password});\n        const data = await axios__WEBPACK_IMPORTED_MODULE_2__[\"default\"].post(\"http://localhost:8080/api/register\", {\n            name,\n            email,\n            password\n        });\n        console.log(\"data:\", data);\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                className: \" jumbotron text-center bg-primary sqaure\",\n                children: \"Register\"\n            }, void 0, false, {\n                fileName: \"/home/shreya/NewSel/Web-Practice/client/pages/register.js\",\n                lineNumber: 19,\n                columnNumber: 4\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"container col-md-4 offset-md-4 pb-5\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n                    onSubmit: handleSubmit,\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                            type: \"text\",\n                            className: \"form-control mb-4 p-4\",\n                            value: name,\n                            onChange: (e)=>setName(e.target.value),\n                            placeholder: \"Enter Name\",\n                            required: true\n                        }, void 0, false, {\n                            fileName: \"/home/shreya/NewSel/Web-Practice/client/pages/register.js\",\n                            lineNumber: 22,\n                            columnNumber: 9\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                            type: \"text\",\n                            className: \"form-control mb-4 p-4\",\n                            value: email,\n                            onChange: (e)=>setEmail(e.target.value),\n                            placeholder: \"Enter Email\",\n                            required: true\n                        }, void 0, false, {\n                            fileName: \"/home/shreya/NewSel/Web-Practice/client/pages/register.js\",\n                            lineNumber: 28,\n                            columnNumber: 11\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                            type: \"text\",\n                            className: \"form-control mb-4 p-4\",\n                            value: password,\n                            onChange: (e)=>setPassword(e.target.value),\n                            placeholder: \"Enter password\",\n                            required: true\n                        }, void 0, false, {\n                            fileName: \"/home/shreya/NewSel/Web-Practice/client/pages/register.js\",\n                            lineNumber: 34,\n                            columnNumber: 11\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                            type: \"submit\",\n                            className: \"btn btn-block btn-primary\",\n                            children: \" Submit\"\n                        }, void 0, false, {\n                            fileName: \"/home/shreya/NewSel/Web-Practice/client/pages/register.js\",\n                            lineNumber: 41,\n                            columnNumber: 11\n                        }, undefined)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/home/shreya/NewSel/Web-Practice/client/pages/register.js\",\n                    lineNumber: 21,\n                    columnNumber: 5\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"/home/shreya/NewSel/Web-Practice/client/pages/register.js\",\n                lineNumber: 20,\n                columnNumber: 4\n            }, undefined)\n        ]\n    }, void 0, true);\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Register);\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9yZWdpc3Rlci5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFBQTtBQUErQjtBQUNMO0FBQzFCLE1BQU1FLFdBQVcsSUFBSztJQUNsQixNQUFNLENBQUNDLE1BQU1DLFFBQVEsR0FBR0osK0NBQVFBLENBQUM7SUFDakMsTUFBTSxDQUFDSyxPQUFPQyxTQUFTLEdBQUdOLCtDQUFRQSxDQUFDO0lBQ25DLE1BQU0sQ0FBQ08sVUFBVUMsWUFBWSxHQUFHUiwrQ0FBUUEsQ0FBQztJQUN6QyxNQUFNUyxlQUFlLE9BQU9DLElBQUs7UUFDN0Isa0JBQWtCO1FBQ2xCQSxFQUFFQyxjQUFjO1FBQ2hCLHdDQUF3QztRQUN4QyxNQUFNQyxPQUFPLE1BQU1YLGtEQUFVLENBQUMsc0NBQXFDO1lBQy9ERTtZQUNBRTtZQUNBRTtRQUNKO1FBQ0FPLFFBQVFDLEdBQUcsQ0FBQyxTQUFRSDtJQUN4QjtJQUNBLHFCQUFPOzswQkFDUiw4REFBQ0k7Z0JBQUdDLFdBQVU7MEJBQTJDOzs7Ozs7MEJBQ3pELDhEQUFDQztnQkFBSUQsV0FBVTswQkFDZCw0RUFBQ0U7b0JBQUtDLFVBQVVYOztzQ0FDWiw4REFBQ1k7NEJBQU1DLE1BQUs7NEJBQ1hMLFdBQVk7NEJBQ1pNLE9BQU9wQjs0QkFDTnFCLFVBQVUsQ0FBQ2QsSUFBSU4sUUFBUU0sRUFBRWUsTUFBTSxDQUFDRixLQUFLOzRCQUNyQ0csYUFBWTs0QkFDWkMsUUFBUTs7Ozs7O3NDQUNSLDhEQUFDTjs0QkFBTUMsTUFBSzs0QkFDYkwsV0FBWTs0QkFDWk0sT0FBT2xCOzRCQUNObUIsVUFBVSxDQUFDZCxJQUFJSixTQUFTSSxFQUFFZSxNQUFNLENBQUNGLEtBQUs7NEJBQ3RDRyxhQUFZOzRCQUNaQyxRQUFROzs7Ozs7c0NBQ1IsOERBQUNOOzRCQUFNQyxNQUFLOzRCQUNiTCxXQUFZOzRCQUNaTSxPQUFPaEI7NEJBQ05pQixVQUFVLENBQUNkLElBQUlGLFlBQVlFLEVBQUVlLE1BQU0sQ0FBQ0YsS0FBSzs0QkFDekNHLGFBQVk7NEJBQ1pDLFFBQVE7Ozs7OztzQ0FFUiw4REFBQ0M7NEJBQU9OLE1BQUs7NEJBQVNMLFdBQVU7c0NBQTRCOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBSXRFO0FBRUEsaUVBQWVmLFFBQVFBLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9jbGllbnQvLi9wYWdlcy9yZWdpc3Rlci5qcz9hMDk3Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7dXNlU3RhdGV9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBheGlvcyBmcm9tICdheGlvcyc7XG5jb25zdCBSZWdpc3RlciA9ICgpID0+e1xuICAgIGNvbnN0IFtuYW1lLCBzZXROYW1lXSA9IHVzZVN0YXRlKCcnKTtcbiAgICBjb25zdCBbZW1haWwsIHNldEVtYWlsXSA9IHVzZVN0YXRlKCcnKTtcbiAgICBjb25zdCBbcGFzc3dvcmQsIHNldFBhc3N3b3JkXSA9IHVzZVN0YXRlKCcnKTtcbiAgICBjb25zdCBoYW5kbGVTdWJtaXQgPSBhc3luYyAoZSkgPT57XG4gICAgICAgIC8vIGNvbnNvbGUubG9nKGUpO1xuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIC8vIGNvbnNvbGUudGFibGUoe25hbWUsZW1haWwscGFzc3dvcmR9KTtcbiAgICAgICAgY29uc3QgZGF0YSA9IGF3YWl0IGF4aW9zLnBvc3QoJ2h0dHA6Ly9sb2NhbGhvc3Q6ODA4MC9hcGkvcmVnaXN0ZXInLHtcbiAgICAgICAgICAgIG5hbWUsXG4gICAgICAgICAgICBlbWFpbCxcbiAgICAgICAgICAgIHBhc3N3b3JkXG4gICAgICAgIH0pXG4gICAgICAgIGNvbnNvbGUubG9nKCdkYXRhOicsZGF0YSlcbiAgICB9XG4gICAgcmV0dXJuIDw+XG4gICA8aDEgY2xhc3NOYW1lPVwiIGp1bWJvdHJvbiB0ZXh0LWNlbnRlciBiZy1wcmltYXJ5IHNxYXVyZVwiPlJlZ2lzdGVyPC9oMT5cbiAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyIGNvbC1tZC00IG9mZnNldC1tZC00IHBiLTVcIj5cbiAgICA8Zm9ybSBvblN1Ym1pdD17aGFuZGxlU3VibWl0fT5cbiAgICAgICAgPGlucHV0IHR5cGU9J3RleHQnXG4gICAgICAgICBjbGFzc05hbWUgPSAnZm9ybS1jb250cm9sIG1iLTQgcC00JyBcbiAgICAgICAgIHZhbHVlPXtuYW1lfVxuICAgICAgICAgIG9uQ2hhbmdlPXsoZSk9PnNldE5hbWUoZS50YXJnZXQudmFsdWUpfVxuICAgICAgICAgIHBsYWNlaG9sZGVyPSdFbnRlciBOYW1lJ1xuICAgICAgICAgIHJlcXVpcmVkLz5cbiAgICAgICAgICA8aW5wdXQgdHlwZT0ndGV4dCdcbiAgICAgICAgIGNsYXNzTmFtZSA9ICdmb3JtLWNvbnRyb2wgbWItNCBwLTQnIFxuICAgICAgICAgdmFsdWU9e2VtYWlsfVxuICAgICAgICAgIG9uQ2hhbmdlPXsoZSk9PnNldEVtYWlsKGUudGFyZ2V0LnZhbHVlKX1cbiAgICAgICAgICBwbGFjZWhvbGRlcj0nRW50ZXIgRW1haWwnXG4gICAgICAgICAgcmVxdWlyZWQvPlxuICAgICAgICAgIDxpbnB1dCB0eXBlPSd0ZXh0J1xuICAgICAgICAgY2xhc3NOYW1lID0gJ2Zvcm0tY29udHJvbCBtYi00IHAtNCcgXG4gICAgICAgICB2YWx1ZT17cGFzc3dvcmR9XG4gICAgICAgICAgb25DaGFuZ2U9eyhlKT0+c2V0UGFzc3dvcmQoZS50YXJnZXQudmFsdWUpfVxuICAgICAgICAgIHBsYWNlaG9sZGVyPSdFbnRlciBwYXNzd29yZCdcbiAgICAgICAgICByZXF1aXJlZC8+XG4gICAgICAgICBcbiAgICAgICAgICA8YnV0dG9uIHR5cGU9J3N1Ym1pdCcgY2xhc3NOYW1lPSdidG4gYnRuLWJsb2NrIGJ0bi1wcmltYXJ5Jz4gU3VibWl0PC9idXR0b24+XG4gICAgPC9mb3JtPlxuICAgPC9kaXY+XG4gICA8Lz5cbn1cblxuZXhwb3J0IGRlZmF1bHQgUmVnaXN0ZXI7Il0sIm5hbWVzIjpbInVzZVN0YXRlIiwiYXhpb3MiLCJSZWdpc3RlciIsIm5hbWUiLCJzZXROYW1lIiwiZW1haWwiLCJzZXRFbWFpbCIsInBhc3N3b3JkIiwic2V0UGFzc3dvcmQiLCJoYW5kbGVTdWJtaXQiLCJlIiwicHJldmVudERlZmF1bHQiLCJkYXRhIiwicG9zdCIsImNvbnNvbGUiLCJsb2ciLCJoMSIsImNsYXNzTmFtZSIsImRpdiIsImZvcm0iLCJvblN1Ym1pdCIsImlucHV0IiwidHlwZSIsInZhbHVlIiwib25DaGFuZ2UiLCJ0YXJnZXQiLCJwbGFjZWhvbGRlciIsInJlcXVpcmVkIiwiYnV0dG9uIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/register.js\n");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

module.exports = require("react/jsx-dev-runtime");

/***/ }),

/***/ "axios":
/*!************************!*\
  !*** external "axios" ***!
  \************************/
/***/ ((module) => {

module.exports = import("axios");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/register.js"));
module.exports = __webpack_exports__;

})();