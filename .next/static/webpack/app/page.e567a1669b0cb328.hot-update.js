"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/page",{

/***/ "(app-client)/./src/app/components/MailBox.tsx":
/*!****************************************!*\
  !*** ./src/app/components/MailBox.tsx ***!
  \****************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-client)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n\nconst MailBox = (param)=>{\n    let { email , subject , message , time  } = param;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"mailboxcontainer hover:bg-[#0099FF] hover:bg-opacity-20 hover:cursor-pointer border border-blue-100 border-l-2 border-l-[#0099FF] h-fit m-5 p-2 \",\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                    className: \"text-xs opacity-70 font-medium\",\n                    children: email\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\level sony\\\\Downloads\\\\FakeMailGenerator-master\\\\FakeMailGenerator-master\\\\src\\\\app\\\\components\\\\MailBox.tsx\",\n                    lineNumber: 6,\n                    columnNumber: 11\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                    className: \"text-sm font-medium\",\n                    children: subject\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\level sony\\\\Downloads\\\\FakeMailGenerator-master\\\\FakeMailGenerator-master\\\\src\\\\app\\\\components\\\\MailBox.tsx\",\n                    lineNumber: 7,\n                    columnNumber: 11\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"w-full flex justify-between\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                            className: \"text-[12px] opacity-70 font-medium\",\n                            children: message\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\level sony\\\\Downloads\\\\FakeMailGenerator-master\\\\FakeMailGenerator-master\\\\src\\\\app\\\\components\\\\MailBox.tsx\",\n                            lineNumber: 9,\n                            columnNumber: 13\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                            className: \"text-xs opacity-70 font-medium\",\n                            children: time\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\level sony\\\\Downloads\\\\FakeMailGenerator-master\\\\FakeMailGenerator-master\\\\src\\\\app\\\\components\\\\MailBox.tsx\",\n                            lineNumber: 12,\n                            columnNumber: 13\n                        }, undefined)\n                    ]\n                }, void 0, true, {\n                    fileName: \"C:\\\\Users\\\\level sony\\\\Downloads\\\\FakeMailGenerator-master\\\\FakeMailGenerator-master\\\\src\\\\app\\\\components\\\\MailBox.tsx\",\n                    lineNumber: 8,\n                    columnNumber: 11\n                }, undefined)\n            ]\n        }, void 0, true, {\n            fileName: \"C:\\\\Users\\\\level sony\\\\Downloads\\\\FakeMailGenerator-master\\\\FakeMailGenerator-master\\\\src\\\\app\\\\components\\\\MailBox.tsx\",\n            lineNumber: 5,\n            columnNumber: 9\n        }, undefined)\n    }, void 0, false);\n};\n_c = MailBox;\n/* harmony default export */ __webpack_exports__[\"default\"] = (MailBox);\nvar _c;\n$RefreshReg$(_c, \"MailBox\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1jbGllbnQpLy4vc3JjL2FwcC9jb21wb25lbnRzL01haWxCb3gudHN4IiwibWFwcGluZ3MiOiI7OztBQUNBLE1BQU1BLFVBQVU7UUFBQyxFQUFFQyxNQUFLLEVBQUVDLFFBQU8sRUFBRUMsUUFBTyxFQUFFQyxLQUFJLEVBQU87SUFDckQscUJBQ0U7a0JBQ0ksNEVBQUNDO1lBQUlDLFdBQVU7OzhCQUNiLDhEQUFDQztvQkFBS0QsV0FBVTs4QkFBa0NMOzs7Ozs7OEJBQ2xELDhEQUFDTztvQkFBRUYsV0FBVTs4QkFBdUJKOzs7Ozs7OEJBQ3BDLDhEQUFDRztvQkFBSUMsV0FBVTs7c0NBQ2IsOERBQUNDOzRCQUFLRCxXQUFVO3NDQUNiSDs7Ozs7O3NDQUVILDhEQUFDSzs0QkFBRUYsV0FBVTtzQ0FBa0NGOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBSzNEO0tBZk1KO0FBaUJOLCtEQUFlQSxPQUFPQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9hcHAvY29tcG9uZW50cy9NYWlsQm94LnRzeD8zOGU1Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBJbWFnZSBmcm9tIFwibmV4dC9pbWFnZVwiO1xuY29uc3QgTWFpbEJveCA9ICh7IGVtYWlsLCBzdWJqZWN0LCBtZXNzYWdlLCB0aW1lIH06IGFueSkgPT4ge1xuICByZXR1cm4gKFxuICAgIDw+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWFpbGJveGNvbnRhaW5lciBob3ZlcjpiZy1bIzAwOTlGRl0gaG92ZXI6Ymctb3BhY2l0eS0yMCBob3ZlcjpjdXJzb3ItcG9pbnRlciBib3JkZXIgYm9yZGVyLWJsdWUtMTAwIGJvcmRlci1sLTIgYm9yZGVyLWwtWyMwMDk5RkZdIGgtZml0IG0tNSBwLTIgXCI+XG4gICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwidGV4dC14cyBvcGFjaXR5LTcwIGZvbnQtbWVkaXVtXCI+e2VtYWlsfTwvc3Bhbj5cbiAgICAgICAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0LXNtIGZvbnQtbWVkaXVtXCI+e3N1YmplY3R9PC9wPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidy1mdWxsIGZsZXgganVzdGlmeS1iZXR3ZWVuXCI+XG4gICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJ0ZXh0LVsxMnB4XSBvcGFjaXR5LTcwIGZvbnQtbWVkaXVtXCI+XG4gICAgICAgICAgICAgIHttZXNzYWdlfVxuICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dC14cyBvcGFjaXR5LTcwIGZvbnQtbWVkaXVtXCI+e3RpbWV9PC9wPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICA8Lz5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IE1haWxCb3g7XG4iXSwibmFtZXMiOlsiTWFpbEJveCIsImVtYWlsIiwic3ViamVjdCIsIm1lc3NhZ2UiLCJ0aW1lIiwiZGl2IiwiY2xhc3NOYW1lIiwic3BhbiIsInAiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-client)/./src/app/components/MailBox.tsx\n"));

/***/ })

});