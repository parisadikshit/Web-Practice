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

eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! axios */ \"axios\");\n/* harmony import */ var react_toastify__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-toastify */ \"react-toastify\");\n/* harmony import */ var _ant_design_icons__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ant-design/icons */ \"@ant-design/icons\");\n/* harmony import */ var _ant_design_icons__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_ant_design_icons__WEBPACK_IMPORTED_MODULE_4__);\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([axios__WEBPACK_IMPORTED_MODULE_2__, react_toastify__WEBPACK_IMPORTED_MODULE_3__]);\n([axios__WEBPACK_IMPORTED_MODULE_2__, react_toastify__WEBPACK_IMPORTED_MODULE_3__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);\n\n\n\n\n\nconst Register = ()=>{\n    const [name, setName] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const [email, setEmail] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const [password, setPassword] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const [loading, isLoading] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const handleSubmit = async (e)=>{\n        // console.log(e);\n        e.preventDefault();\n        // console.table({name,email,password});\n        try {\n            isLoading(true);\n            const data = await axios__WEBPACK_IMPORTED_MODULE_2__[\"default\"].post(`${\"http://localhost:8080/api\"}/register`, {\n                name,\n                email,\n                password\n            });\n            console.log(\"data:\", data);\n            react_toastify__WEBPACK_IMPORTED_MODULE_3__.toast.success(\"Registration is successful. Please log in\");\n            isLoading(false);\n        } catch (err) {\n            isLoading(false);\n            react_toastify__WEBPACK_IMPORTED_MODULE_3__.toast.error(err.response.data);\n        }\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                className: \" jumbotron text-center bg-primary sqaure\",\n                children: \"Register\"\n            }, void 0, false, {\n                fileName: \"/home/shreya/NewSel/Web-Practice/client/pages/register.js\",\n                lineNumber: 38,\n                columnNumber: 4\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"container col-md-4 offset-md-4 pb-5\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n                    onSubmit: handleSubmit,\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                            type: \"text\",\n                            className: \"form-control mb-4 p-4\",\n                            value: name,\n                            onChange: (e)=>setName(e.target.value),\n                            placeholder: \"Enter Name\",\n                            required: true\n                        }, void 0, false, {\n                            fileName: \"/home/shreya/NewSel/Web-Practice/client/pages/register.js\",\n                            lineNumber: 41,\n                            columnNumber: 9\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                            type: \"text\",\n                            className: \"form-control mb-4 p-4\",\n                            value: email,\n                            onChange: (e)=>setEmail(e.target.value),\n                            placeholder: \"Enter Email\",\n                            required: true\n                        }, void 0, false, {\n                            fileName: \"/home/shreya/NewSel/Web-Practice/client/pages/register.js\",\n                            lineNumber: 47,\n                            columnNumber: 11\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                            type: \"text\",\n                            className: \"form-control mb-4 p-4\",\n                            value: password,\n                            onChange: (e)=>setPassword(e.target.value),\n                            placeholder: \"Enter password\",\n                            required: true\n                        }, void 0, false, {\n                            fileName: \"/home/shreya/NewSel/Web-Practice/client/pages/register.js\",\n                            lineNumber: 53,\n                            columnNumber: 11\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                            type: \"submit\",\n                            className: \"btn btn-block btn-primary\",\n                            disabled: !name || !email || !password,\n                            children: loading ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_ant_design_icons__WEBPACK_IMPORTED_MODULE_4__.SyncOutlined, {\n                                spin: true\n                            }, void 0, false, {\n                                fileName: \"/home/shreya/NewSel/Web-Practice/client/pages/register.js\",\n                                lineNumber: 61,\n                                columnNumber: 22\n                            }, undefined) : \"Submit\"\n                        }, void 0, false, {\n                            fileName: \"/home/shreya/NewSel/Web-Practice/client/pages/register.js\",\n                            lineNumber: 60,\n                            columnNumber: 11\n                        }, undefined)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/home/shreya/NewSel/Web-Practice/client/pages/register.js\",\n                    lineNumber: 40,\n                    columnNumber: 5\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"/home/shreya/NewSel/Web-Practice/client/pages/register.js\",\n                lineNumber: 39,\n                columnNumber: 4\n            }, undefined)\n        ]\n    }, void 0, true);\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Register);\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9yZWdpc3Rlci5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUErQjtBQUNMO0FBQ2E7QUFDVTtBQUVqRCxNQUFNSSxXQUFXLElBQUs7SUFDbEIsTUFBTSxDQUFDQyxNQUFNQyxRQUFRLEdBQUdOLCtDQUFRQSxDQUFDO0lBQ2pDLE1BQU0sQ0FBQ08sT0FBT0MsU0FBUyxHQUFHUiwrQ0FBUUEsQ0FBQztJQUNuQyxNQUFNLENBQUNTLFVBQVVDLFlBQVksR0FBR1YsK0NBQVFBLENBQUM7SUFDekMsTUFBTSxDQUFDVyxTQUFTQyxVQUFVLEdBQUdaLCtDQUFRQSxDQUFDLEtBQUs7SUFDM0MsTUFBTWEsZUFBZSxPQUFPQyxJQUFLO1FBQzdCLGtCQUFrQjtRQUNsQkEsRUFBRUMsY0FBYztRQUNoQix3Q0FBd0M7UUFFeEMsSUFBRztZQUNDSCxVQUFVLElBQUk7WUFDZCxNQUFNSSxPQUFPLE1BQU1mLGtEQUFVLENBQUMsQ0FBQyxFQUFFaUIsMkJBQTJCLENBQUMsU0FBUyxDQUFDLEVBQUM7Z0JBQ3BFYjtnQkFDQUU7Z0JBQ0FFO1lBQ0o7WUFDQVksUUFBUUMsR0FBRyxDQUFDLFNBQVFOO1lBRXBCZCx5REFBYSxDQUFDO1lBQ2RVLFVBQVUsS0FBSztRQUVuQixFQUVBLE9BQU1ZLEtBQUk7WUFDTlosVUFBVSxLQUFLO1lBQ2ZWLHVEQUFXLENBQUNzQixJQUFJRSxRQUFRLENBQUNWLElBQUk7UUFFakM7SUFFSjtJQUNBLHFCQUFPOzswQkFDUiw4REFBQ1c7Z0JBQUdDLFdBQVU7MEJBQTJDOzs7Ozs7MEJBQ3pELDhEQUFDQztnQkFBSUQsV0FBVTswQkFDZCw0RUFBQ0U7b0JBQUtDLFVBQVVsQjs7c0NBQ1osOERBQUNtQjs0QkFBTUMsTUFBSzs0QkFDWEwsV0FBWTs0QkFDWk0sT0FBTzdCOzRCQUNOOEIsVUFBVSxDQUFDckIsSUFBSVIsUUFBUVEsRUFBRXNCLE1BQU0sQ0FBQ0YsS0FBSzs0QkFDckNHLGFBQVk7NEJBQ1pDLFFBQVE7Ozs7OztzQ0FDUiw4REFBQ047NEJBQU1DLE1BQUs7NEJBQ2JMLFdBQVk7NEJBQ1pNLE9BQU8zQjs0QkFDTjRCLFVBQVUsQ0FBQ3JCLElBQUlOLFNBQVNNLEVBQUVzQixNQUFNLENBQUNGLEtBQUs7NEJBQ3RDRyxhQUFZOzRCQUNaQyxRQUFROzs7Ozs7c0NBQ1IsOERBQUNOOzRCQUFNQyxNQUFLOzRCQUNiTCxXQUFZOzRCQUNaTSxPQUFPekI7NEJBQ04wQixVQUFVLENBQUNyQixJQUFJSixZQUFZSSxFQUFFc0IsTUFBTSxDQUFDRixLQUFLOzRCQUN6Q0csYUFBWTs0QkFDWkMsUUFBUTs7Ozs7O3NDQUVSLDhEQUFDQzs0QkFBT04sTUFBSzs0QkFBU0wsV0FBVTs0QkFBNEJZLFVBQVUsQ0FBQ25DLFFBQVEsQ0FBQ0UsU0FBUyxDQUFDRTtzQ0FDekZFLHdCQUFVLDhEQUFDUiwyREFBWUE7Z0NBQUNzQyxJQUFJOzs7Ozs0Q0FBSyxRQUFROzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBSXBEO0FBRUEsaUVBQWVyQyxRQUFRQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vY2xpZW50Ly4vcGFnZXMvcmVnaXN0ZXIuanM/YTA5NyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge3VzZVN0YXRlfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgYXhpb3MgZnJvbSAnYXhpb3MnO1xuaW1wb3J0IHsgdG9hc3QgfSBmcm9tICdyZWFjdC10b2FzdGlmeSc7XG5pbXBvcnQgeyBTeW5jT3V0bGluZWQgfSBmcm9tICdAYW50LWRlc2lnbi9pY29ucyc7XG5cbmNvbnN0IFJlZ2lzdGVyID0gKCkgPT57XG4gICAgY29uc3QgW25hbWUsIHNldE5hbWVdID0gdXNlU3RhdGUoJycpO1xuICAgIGNvbnN0IFtlbWFpbCwgc2V0RW1haWxdID0gdXNlU3RhdGUoJycpO1xuICAgIGNvbnN0IFtwYXNzd29yZCwgc2V0UGFzc3dvcmRdID0gdXNlU3RhdGUoJycpO1xuICAgIGNvbnN0IFtsb2FkaW5nLCBpc0xvYWRpbmddID0gdXNlU3RhdGUoZmFsc2UpO1xuICAgIGNvbnN0IGhhbmRsZVN1Ym1pdCA9IGFzeW5jIChlKSA9PntcbiAgICAgICAgLy8gY29uc29sZS5sb2coZSk7XG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgLy8gY29uc29sZS50YWJsZSh7bmFtZSxlbWFpbCxwYXNzd29yZH0pO1xuICAgICAgICBcbiAgICAgICAgdHJ5e1xuICAgICAgICAgICAgaXNMb2FkaW5nKHRydWUpO1xuICAgICAgICAgICAgY29uc3QgZGF0YSA9IGF3YWl0IGF4aW9zLnBvc3QoYCR7cHJvY2Vzcy5lbnYuTkVYVF9QVUJMSUNfQVBJfS9yZWdpc3RlcmAse1xuICAgICAgICAgICAgICAgIG5hbWUsXG4gICAgICAgICAgICAgICAgZW1haWwsXG4gICAgICAgICAgICAgICAgcGFzc3dvcmRcbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgICBjb25zb2xlLmxvZygnZGF0YTonLGRhdGEpXG5cbiAgICAgICAgICAgIHRvYXN0LnN1Y2Nlc3MoJ1JlZ2lzdHJhdGlvbiBpcyBzdWNjZXNzZnVsLiBQbGVhc2UgbG9nIGluJylcbiAgICAgICAgICAgIGlzTG9hZGluZyhmYWxzZSk7XG5cbiAgICAgICAgfVxuXG4gICAgICAgIGNhdGNoKGVycil7XG4gICAgICAgICAgICBpc0xvYWRpbmcoZmFsc2UpO1xuICAgICAgICAgICAgdG9hc3QuZXJyb3IoZXJyLnJlc3BvbnNlLmRhdGEpO1xuXG4gICAgICAgIH1cbiAgICAgICBcbiAgICB9XG4gICAgcmV0dXJuIDw+XG4gICA8aDEgY2xhc3NOYW1lPVwiIGp1bWJvdHJvbiB0ZXh0LWNlbnRlciBiZy1wcmltYXJ5IHNxYXVyZVwiPlJlZ2lzdGVyPC9oMT5cbiAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyIGNvbC1tZC00IG9mZnNldC1tZC00IHBiLTVcIj5cbiAgICA8Zm9ybSBvblN1Ym1pdD17aGFuZGxlU3VibWl0fT5cbiAgICAgICAgPGlucHV0IHR5cGU9J3RleHQnXG4gICAgICAgICBjbGFzc05hbWUgPSAnZm9ybS1jb250cm9sIG1iLTQgcC00JyBcbiAgICAgICAgIHZhbHVlPXtuYW1lfVxuICAgICAgICAgIG9uQ2hhbmdlPXsoZSk9PnNldE5hbWUoZS50YXJnZXQudmFsdWUpfVxuICAgICAgICAgIHBsYWNlaG9sZGVyPSdFbnRlciBOYW1lJ1xuICAgICAgICAgIHJlcXVpcmVkLz5cbiAgICAgICAgICA8aW5wdXQgdHlwZT0ndGV4dCdcbiAgICAgICAgIGNsYXNzTmFtZSA9ICdmb3JtLWNvbnRyb2wgbWItNCBwLTQnIFxuICAgICAgICAgdmFsdWU9e2VtYWlsfVxuICAgICAgICAgIG9uQ2hhbmdlPXsoZSk9PnNldEVtYWlsKGUudGFyZ2V0LnZhbHVlKX1cbiAgICAgICAgICBwbGFjZWhvbGRlcj0nRW50ZXIgRW1haWwnXG4gICAgICAgICAgcmVxdWlyZWQvPlxuICAgICAgICAgIDxpbnB1dCB0eXBlPSd0ZXh0J1xuICAgICAgICAgY2xhc3NOYW1lID0gJ2Zvcm0tY29udHJvbCBtYi00IHAtNCcgXG4gICAgICAgICB2YWx1ZT17cGFzc3dvcmR9XG4gICAgICAgICAgb25DaGFuZ2U9eyhlKT0+c2V0UGFzc3dvcmQoZS50YXJnZXQudmFsdWUpfVxuICAgICAgICAgIHBsYWNlaG9sZGVyPSdFbnRlciBwYXNzd29yZCdcbiAgICAgICAgICByZXF1aXJlZC8+XG4gICAgICAgICBcbiAgICAgICAgICA8YnV0dG9uIHR5cGU9J3N1Ym1pdCcgY2xhc3NOYW1lPSdidG4gYnRuLWJsb2NrIGJ0bi1wcmltYXJ5JyBkaXNhYmxlZD17IW5hbWUgfHwgIWVtYWlsIHx8ICFwYXNzd29yZH0+IFxuICAgICAgICAgIHtsb2FkaW5nID8gPFN5bmNPdXRsaW5lZCBzcGluLz4gOiBcIlN1Ym1pdFwifTwvYnV0dG9uPlxuICAgIDwvZm9ybT5cbiAgIDwvZGl2PlxuICAgPC8+XG59XG5cbmV4cG9ydCBkZWZhdWx0IFJlZ2lzdGVyOyJdLCJuYW1lcyI6WyJ1c2VTdGF0ZSIsImF4aW9zIiwidG9hc3QiLCJTeW5jT3V0bGluZWQiLCJSZWdpc3RlciIsIm5hbWUiLCJzZXROYW1lIiwiZW1haWwiLCJzZXRFbWFpbCIsInBhc3N3b3JkIiwic2V0UGFzc3dvcmQiLCJsb2FkaW5nIiwiaXNMb2FkaW5nIiwiaGFuZGxlU3VibWl0IiwiZSIsInByZXZlbnREZWZhdWx0IiwiZGF0YSIsInBvc3QiLCJwcm9jZXNzIiwiZW52IiwiTkVYVF9QVUJMSUNfQVBJIiwiY29uc29sZSIsImxvZyIsInN1Y2Nlc3MiLCJlcnIiLCJlcnJvciIsInJlc3BvbnNlIiwiaDEiLCJjbGFzc05hbWUiLCJkaXYiLCJmb3JtIiwib25TdWJtaXQiLCJpbnB1dCIsInR5cGUiLCJ2YWx1ZSIsIm9uQ2hhbmdlIiwidGFyZ2V0IiwicGxhY2Vob2xkZXIiLCJyZXF1aXJlZCIsImJ1dHRvbiIsImRpc2FibGVkIiwic3BpbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/register.js\n");

/***/ }),

/***/ "@ant-design/icons":
/*!************************************!*\
  !*** external "@ant-design/icons" ***!
  \************************************/
/***/ ((module) => {

module.exports = require("@ant-design/icons");

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

/***/ }),

/***/ "react-toastify":
/*!*********************************!*\
  !*** external "react-toastify" ***!
  \*********************************/
/***/ ((module) => {

module.exports = import("react-toastify");;

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