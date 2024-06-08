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

/***/ "(app-client)/./src/app/page.tsx":
/*!**************************!*\
  !*** ./src/app/page.tsx ***!
  \**************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-client)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-client)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/image */ \"(app-client)/./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _components_Button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/Button */ \"(app-client)/./src/app/components/Button.tsx\");\n/* harmony import */ var _components_MailBox__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/MailBox */ \"(app-client)/./src/app/components/MailBox.tsx\");\n/* harmony import */ var _components_RandomEmailBox__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/RandomEmailBox */ \"(app-client)/./src/app/components/RandomEmailBox.tsx\");\n/* harmony import */ var _components_Title__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/Title */ \"(app-client)/./src/app/components/Title.tsx\");\n/* harmony import */ var _components_About__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/About */ \"(app-client)/./src/app/components/About.tsx\");\n/* harmony import */ var _components_MessagePageBox__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/MessagePageBox */ \"(app-client)/./src/app/components/MessagePageBox.tsx\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\n\nconst Home = ()=>{\n    _s();\n    const [refresh, setRefresh] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const [del, setDelete] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const [email, setEmail] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const [message, setMessageData] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);\n    const [username, setUsername] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const [domain, setDomain] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const [messageShow, setMessageShow] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const [messageSubject, setMessageSubject] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const [messageFrom, setMessageFrom] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const [messageTextBody, setMessageTextBody] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        let interval;\n        async function getEmail() {\n            const res = await fetch(\"https://www.1secmail.com/api/v1/?action=genRandomMailbox&count=1\");\n            const randomEmail = await res.json();\n            setEmail(randomEmail);\n            const email = randomEmail[0];\n            const atIndex = email.indexOf(\"@\");\n            const username = email.substring(0, atIndex);\n            setUsername(username);\n            const domain = email.substring(atIndex + 1);\n            setDomain(domain);\n            interval = setInterval(async ()=>{\n                try {\n                    const res2 = await fetch(\"https://www.1secmail.com/api/v1/?action=getMessages&login=\".concat(username, \"&domain=\").concat(domain));\n                    const messageData = await res2.json();\n                    setMessageData(messageData);\n                } catch (error) {\n                    console.log(\"Error fetching messages:\", error);\n                }\n            }, 10000); // Intervalle de 10 secondes\n        }\n        getEmail();\n        return ()=>{\n            clearInterval(interval);\n        };\n    }, [\n        del\n    ]);\n    async function refreshMessage() {\n        try {\n            const res2 = await fetch(\"https://www.1secmail.com/api/v1/?action=getMessages&login=\".concat(username, \"&domain=\").concat(domain));\n            const messageData = await res2.json();\n            setMessageData(messageData);\n        } catch (error) {\n            console.log(\"Error refreshing messages:\", error);\n        }\n    }\n    function copyToClipboard(email) {\n        const input = document.createElement(\"input\");\n        input.value = email;\n        document.body.appendChild(input);\n        input.select();\n        input.setSelectionRange(0, 99999);\n        document.execCommand(\"copy\");\n        document.body.removeChild(input);\n    }\n    function whichMessageClicked(d) {\n        fetch(\"https://www.1secmail.com/api/v1/?action=readMessage&login=\".concat(username, \"&domain=\").concat(domain, \"&id=\").concat(d.id)).then((res)=>res.json()).then((messagedata)=>{\n            setMessageFrom(messagedata.from);\n            setMessageTextBody(messagedata.textBody);\n            setMessageSubject(messagedata.subject);\n            setMessageShow(true);\n        }).catch((error)=>{\n            console.log(\"Error reading message:\", error);\n        });\n    }\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"w-[100%] h-screen\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"uppercontainer w-full h-[60%] bg-[#0099FF] md:rounded-b-full sm:rounded-b-3xl flex flex-col justify-center items-center gap-7\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Title__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {}, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\level sony\\\\Downloads\\\\FakeMailGenerator-master\\\\FakeMailGenerator-master\\\\src\\\\app\\\\page.tsx\",\n                        lineNumber: 101,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_RandomEmailBox__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n                        value: email\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\level sony\\\\Downloads\\\\FakeMailGenerator-master\\\\FakeMailGenerator-master\\\\src\\\\app\\\\page.tsx\",\n                        lineNumber: 102,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"buttoncontainer flex gap-5\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Button__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                                onClick: ()=>{\n                                    copyToClipboard(email);\n                                },\n                                label: \"Copy Email\",\n                                imgsrc: \"/copyicon.png\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\level sony\\\\Downloads\\\\FakeMailGenerator-master\\\\FakeMailGenerator-master\\\\src\\\\app\\\\page.tsx\",\n                                lineNumber: 104,\n                                columnNumber: 11\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Button__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                                onClick: ()=>{\n                                    window.location.reload();\n                                },\n                                label: \"generer un nouveau mail \",\n                                imgsrc: \"/loadingarro.png\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\level sony\\\\Downloads\\\\FakeMailGenerator-master\\\\FakeMailGenerator-master\\\\src\\\\app\\\\page.tsx\",\n                                lineNumber: 111,\n                                columnNumber: 11\n                            }, undefined)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\level sony\\\\Downloads\\\\FakeMailGenerator-master\\\\FakeMailGenerator-master\\\\src\\\\app\\\\page.tsx\",\n                        lineNumber: 103,\n                        columnNumber: 9\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\level sony\\\\Downloads\\\\FakeMailGenerator-master\\\\FakeMailGenerator-master\\\\src\\\\app\\\\page.tsx\",\n                lineNumber: 100,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"w-full flex justify-center items-center mt-5\",\n                children: !refresh ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_2___default()), {\n                    className: \"cursor-pointer\",\n                    src: \"/loadingarrowicon.png\",\n                    width: 50,\n                    height: 50,\n                    alt: \"\",\n                    onClick: ()=>{\n                        setRefresh(true);\n                        setTimeout(()=>{\n                            setRefresh(false);\n                            refreshMessage();\n                        }, 1000);\n                    }\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\level sony\\\\Downloads\\\\FakeMailGenerator-master\\\\FakeMailGenerator-master\\\\src\\\\app\\\\page.tsx\",\n                    lineNumber: 122,\n                    columnNumber: 11\n                }, undefined) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"w-[50px] h-[50px] bg-[#0099FF] rounded-full flex justify-center items-center\",\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_2___default()), {\n                        className: \"cursor-pointer\",\n                        src: \"/loadinganimation.svg\",\n                        width: 40,\n                        height: 40,\n                        alt: \"\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\level sony\\\\Downloads\\\\FakeMailGenerator-master\\\\FakeMailGenerator-master\\\\src\\\\app\\\\page.tsx\",\n                        lineNumber: 138,\n                        columnNumber: 13\n                    }, undefined)\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\level sony\\\\Downloads\\\\FakeMailGenerator-master\\\\FakeMailGenerator-master\\\\src\\\\app\\\\page.tsx\",\n                    lineNumber: 137,\n                    columnNumber: 11\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\level sony\\\\Downloads\\\\FakeMailGenerator-master\\\\FakeMailGenerator-master\\\\src\\\\app\\\\page.tsx\",\n                lineNumber: 120,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"bottomcontainer w-full h-[80%] flex justify-center items-center\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"w-[80%] h-[90%] border rounded-md overflow-y-scroll overflow-x-hidden custom-scrollbar border-[#000000] border-opacity-20 shadow-md\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"mailboxtitle flex m-2 gap-2 justify-center items-center\",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_2___default()), {\n                                    src: \"/mail.png\",\n                                    width: 30,\n                                    height: 30,\n                                    alt: \"mailbox\"\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\level sony\\\\Downloads\\\\FakeMailGenerator-master\\\\FakeMailGenerator-master\\\\src\\\\app\\\\page.tsx\",\n                                    lineNumber: 151,\n                                    columnNumber: 13\n                                }, undefined),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                    className: \"inbox text-lg opacity-80\",\n                                    children: !messageShow ? \"Inbox\" : \"Message Box\"\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\level sony\\\\Downloads\\\\FakeMailGenerator-master\\\\FakeMailGenerator-master\\\\src\\\\app\\\\page.tsx\",\n                                    lineNumber: 152,\n                                    columnNumber: 13\n                                }, undefined)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"C:\\\\Users\\\\level sony\\\\Downloads\\\\FakeMailGenerator-master\\\\FakeMailGenerator-master\\\\src\\\\app\\\\page.tsx\",\n                            lineNumber: 150,\n                            columnNumber: 11\n                        }, undefined),\n                        messageShow ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    onClick: ()=>{\n                                        setMessageShow(false);\n                                    },\n                                    className: \"w-full bg-[#0099FF] pt-5 pl-5\",\n                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Button__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                                        label: \"Go Back\",\n                                        imgsrc: \"/arrow.png\",\n                                        className: \"border\"\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\level sony\\\\Downloads\\\\FakeMailGenerator-master\\\\FakeMailGenerator-master\\\\src\\\\app\\\\page.tsx\",\n                                        lineNumber: 162,\n                                        columnNumber: 17\n                                    }, undefined)\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\level sony\\\\Downloads\\\\FakeMailGenerator-master\\\\FakeMailGenerator-master\\\\src\\\\app\\\\page.tsx\",\n                                    lineNumber: 156,\n                                    columnNumber: 15\n                                }, undefined),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_MessagePageBox__WEBPACK_IMPORTED_MODULE_8__[\"default\"], {\n                                    from: messageFrom,\n                                    subject: messageSubject,\n                                    body: messageTextBody\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\level sony\\\\Downloads\\\\FakeMailGenerator-master\\\\FakeMailGenerator-master\\\\src\\\\app\\\\page.tsx\",\n                                    lineNumber: 164,\n                                    columnNumber: 15\n                                }, undefined)\n                            ]\n                        }, void 0, true) : message.map((d)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                onClick: ()=>{\n                                    whichMessageClicked(d);\n                                },\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_MailBox__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                                    email: d.from,\n                                    subject: d.subject,\n                                    message: d.message,\n                                    time: d.date\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\level sony\\\\Downloads\\\\FakeMailGenerator-master\\\\FakeMailGenerator-master\\\\src\\\\app\\\\page.tsx\",\n                                    lineNumber: 178,\n                                    columnNumber: 17\n                                }, undefined)\n                            }, d.id, false, {\n                                fileName: \"C:\\\\Users\\\\level sony\\\\Downloads\\\\FakeMailGenerator-master\\\\FakeMailGenerator-master\\\\src\\\\app\\\\page.tsx\",\n                                lineNumber: 172,\n                                columnNumber: 15\n                            }, undefined))\n                    ]\n                }, void 0, true, {\n                    fileName: \"C:\\\\Users\\\\level sony\\\\Downloads\\\\FakeMailGenerator-master\\\\FakeMailGenerator-master\\\\src\\\\app\\\\page.tsx\",\n                    lineNumber: 149,\n                    columnNumber: 9\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\level sony\\\\Downloads\\\\FakeMailGenerator-master\\\\FakeMailGenerator-master\\\\src\\\\app\\\\page.tsx\",\n                lineNumber: 148,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"bottomcontainer w-full h-fit flex justify-center items-center\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_About__WEBPACK_IMPORTED_MODULE_7__[\"default\"], {}, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\level sony\\\\Downloads\\\\FakeMailGenerator-master\\\\FakeMailGenerator-master\\\\src\\\\app\\\\page.tsx\",\n                    lineNumber: 185,\n                    columnNumber: 9\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\level sony\\\\Downloads\\\\FakeMailGenerator-master\\\\FakeMailGenerator-master\\\\src\\\\app\\\\page.tsx\",\n                lineNumber: 184,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\level sony\\\\Downloads\\\\FakeMailGenerator-master\\\\FakeMailGenerator-master\\\\src\\\\app\\\\page.tsx\",\n        lineNumber: 99,\n        columnNumber: 5\n    }, undefined);\n};\n_s(Home, \"O5rq7UT959LhZ7y/aZVnzHcLkjc=\");\n_c = Home;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Home);\nvar _c;\n$RefreshReg$(_c, \"Home\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QVU7Ozs7Ozs7Ozs7Ozt3QkFFdEVBLDRCQUNDOzs4Q0FDRSw4REFBQzZDO29DQUNDRSxTQUFTO3dDQUNQOUMsZUFBZTtvQ0FDakI7b0NBQ0E2QyxXQUFVOzhDQUVWLDRFQUFDakUsMERBQU1BO3dDQUFDbUUsT0FBTTt3Q0FBVUMsUUFBTzt3Q0FBYUgsV0FBVTs7Ozs7Ozs7Ozs7OENBRXhELDhEQUFDNUQsa0VBQVlBO29DQUNYdUQsTUFBTXJDO29DQUNOdUMsU0FBU3pDO29DQUNUNEIsTUFBTXhCOzs7Ozs7OzJDQUlWWixRQUFRaUUsSUFBSSxDQUFDdEIsa0JBQ1gsOERBQUNRO2dDQUVDRSxTQUFTO29DQUNQWCxvQkFBb0JDO2dDQUN0QjswQ0FFQSw0RUFBQ3ZELDJEQUFPQTtvQ0FBQ1UsT0FBTzZDLEVBQUVJO29DQUFNRSxTQUFTTixFQUFFTTtvQ0FBU2pELFNBQVMyQyxFQUFFM0M7b0NBQVNrRSxNQUFNdkIsRUFBRXdCOzs7Ozs7K0JBTG5FeEIsRUFBRUM7Ozs7Ozs7Ozs7Ozs7Ozs7MEJBV2pCLDhEQUFDTztnQkFBSUMsV0FBVTswQkFDYiw0RUFBQzdELHlEQUFLQTs7Ozs7Ozs7Ozs7Ozs7OztBQUlkO0dBL0tNRTtLQUFBQTtBQWlMTiwrREFBZUEsSUFBSUEsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvYXBwL3BhZ2UudHN4P2Y2OGEiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2UgY2xpZW50XCI7XG5pbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IEltYWdlIGZyb20gXCJuZXh0L2ltYWdlXCI7XG5pbXBvcnQgQnV0dG9uIGZyb20gXCIuL2NvbXBvbmVudHMvQnV0dG9uXCI7XG5pbXBvcnQgTWFpbEJveCBmcm9tIFwiLi9jb21wb25lbnRzL01haWxCb3hcIjtcbmltcG9ydCBSYW5kb21FbWFpbEJveCBmcm9tIFwiLi9jb21wb25lbnRzL1JhbmRvbUVtYWlsQm94XCI7XG5pbXBvcnQgVGl0bGUgZnJvbSBcIi4vY29tcG9uZW50cy9UaXRsZVwiO1xuaW1wb3J0IEFib3V0IGZyb20gXCIuL2NvbXBvbmVudHMvQWJvdXRcIjtcbmltcG9ydCBNZXNzYWdlUGFnZUJveCBmcm9tIFwiLi9jb21wb25lbnRzL01lc3NhZ2VQYWdlQm94XCI7XG5pbXBvcnQgRW1haWxEaXNwbGF5IGZyb20gXCIuL2NvbXBvbmVudHMvTWVzc2FnZVBhZ2VCb3hcIjtcblxuXG5cbmNvbnN0IEhvbWU6IFJlYWN0LkZDID0gKCkgPT4ge1xuICBjb25zdCBbcmVmcmVzaCwgc2V0UmVmcmVzaF0gPSB1c2VTdGF0ZShmYWxzZSk7XG4gIGNvbnN0IFtkZWwsIHNldERlbGV0ZV0gPSB1c2VTdGF0ZShmYWxzZSk7XG4gIGNvbnN0IFtlbWFpbCwgc2V0RW1haWxdID0gdXNlU3RhdGU8c3RyaW5nPihcIlwiKTtcbiAgY29uc3QgW21lc3NhZ2UsIHNldE1lc3NhZ2VEYXRhXSA9IHVzZVN0YXRlPGFueVtdPihbXSk7XG4gIGNvbnN0IFt1c2VybmFtZSwgc2V0VXNlcm5hbWVdID0gdXNlU3RhdGU8c3RyaW5nPihcIlwiKTtcbiAgY29uc3QgW2RvbWFpbiwgc2V0RG9tYWluXSA9IHVzZVN0YXRlPHN0cmluZz4oXCJcIik7XG4gIGNvbnN0IFttZXNzYWdlU2hvdywgc2V0TWVzc2FnZVNob3ddID0gdXNlU3RhdGUoZmFsc2UpO1xuICBjb25zdCBbbWVzc2FnZVN1YmplY3QsIHNldE1lc3NhZ2VTdWJqZWN0XSA9IHVzZVN0YXRlPHN0cmluZz4oXCJcIik7XG4gIGNvbnN0IFttZXNzYWdlRnJvbSwgc2V0TWVzc2FnZUZyb21dID0gdXNlU3RhdGU8c3RyaW5nPihcIlwiKTtcbiAgY29uc3QgW21lc3NhZ2VUZXh0Qm9keSwgc2V0TWVzc2FnZVRleHRCb2R5XSA9IHVzZVN0YXRlPHN0cmluZz4oXCJcIik7XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBsZXQgaW50ZXJ2YWw6IE5vZGVKUy5UaW1lb3V0O1xuICAgIGFzeW5jIGZ1bmN0aW9uIGdldEVtYWlsKCkge1xuICAgICAgY29uc3QgcmVzID0gYXdhaXQgZmV0Y2goXG4gICAgICAgIFwiaHR0cHM6Ly93d3cuMXNlY21haWwuY29tL2FwaS92MS8/YWN0aW9uPWdlblJhbmRvbU1haWxib3gmY291bnQ9MVwiXG4gICAgICApO1xuICAgICAgY29uc3QgcmFuZG9tRW1haWwgPSBhd2FpdCByZXMuanNvbigpO1xuICAgICAgc2V0RW1haWwocmFuZG9tRW1haWwpO1xuICAgICAgY29uc3QgZW1haWwgPSByYW5kb21FbWFpbFswXTtcbiAgICAgIGNvbnN0IGF0SW5kZXggPSBlbWFpbC5pbmRleE9mKFwiQFwiKTtcbiAgICAgIGNvbnN0IHVzZXJuYW1lID0gZW1haWwuc3Vic3RyaW5nKDAsIGF0SW5kZXgpO1xuICAgICAgc2V0VXNlcm5hbWUodXNlcm5hbWUpO1xuICAgICAgY29uc3QgZG9tYWluID0gZW1haWwuc3Vic3RyaW5nKGF0SW5kZXggKyAxKTtcbiAgICAgIHNldERvbWFpbihkb21haW4pO1xuXG4gICAgICBpbnRlcnZhbCA9IHNldEludGVydmFsKGFzeW5jICgpID0+IHtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICBjb25zdCByZXMyID0gYXdhaXQgZmV0Y2goXG4gICAgICAgICAgICBgaHR0cHM6Ly93d3cuMXNlY21haWwuY29tL2FwaS92MS8/YWN0aW9uPWdldE1lc3NhZ2VzJmxvZ2luPSR7dXNlcm5hbWV9JmRvbWFpbj0ke2RvbWFpbn1gXG4gICAgICAgICAgKTtcbiAgICAgICAgICBjb25zdCBtZXNzYWdlRGF0YSA9IGF3YWl0IHJlczIuanNvbigpO1xuICAgICAgICAgIHNldE1lc3NhZ2VEYXRhKG1lc3NhZ2VEYXRhKTtcbiAgICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgICBjb25zb2xlLmxvZyhcIkVycm9yIGZldGNoaW5nIG1lc3NhZ2VzOlwiLCBlcnJvcik7XG4gICAgICAgIH1cbiAgICAgIH0sIDEwMDAwKTsgLy8gSW50ZXJ2YWxsZSBkZSAxMCBzZWNvbmRlc1xuICAgIH1cbiAgICBnZXRFbWFpbCgpO1xuXG4gICAgcmV0dXJuICgpID0+IHtcbiAgICAgIGNsZWFySW50ZXJ2YWwoaW50ZXJ2YWwpO1xuICAgIH07XG4gIH0sIFtkZWxdKTtcblxuICBhc3luYyBmdW5jdGlvbiByZWZyZXNoTWVzc2FnZSgpIHtcbiAgICB0cnkge1xuICAgICAgY29uc3QgcmVzMiA9IGF3YWl0IGZldGNoKFxuICAgICAgICBgaHR0cHM6Ly93d3cuMXNlY21haWwuY29tL2FwaS92MS8/YWN0aW9uPWdldE1lc3NhZ2VzJmxvZ2luPSR7dXNlcm5hbWV9JmRvbWFpbj0ke2RvbWFpbn1gXG4gICAgICApO1xuICAgICAgY29uc3QgbWVzc2FnZURhdGEgPSBhd2FpdCByZXMyLmpzb24oKTtcbiAgICAgIHNldE1lc3NhZ2VEYXRhKG1lc3NhZ2VEYXRhKTtcbiAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgY29uc29sZS5sb2coXCJFcnJvciByZWZyZXNoaW5nIG1lc3NhZ2VzOlwiLCBlcnJvcik7XG4gICAgfVxuICB9XG5cbiAgZnVuY3Rpb24gY29weVRvQ2xpcGJvYXJkKGVtYWlsOiBzdHJpbmcpIHtcbiAgICBjb25zdCBpbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiKTtcbiAgICBpbnB1dC52YWx1ZSA9IGVtYWlsO1xuICAgIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQoaW5wdXQpO1xuICAgIGlucHV0LnNlbGVjdCgpO1xuICAgIGlucHV0LnNldFNlbGVjdGlvblJhbmdlKDAsIDk5OTk5KTtcbiAgICBkb2N1bWVudC5leGVjQ29tbWFuZChcImNvcHlcIik7XG4gICAgZG9jdW1lbnQuYm9keS5yZW1vdmVDaGlsZChpbnB1dCk7XG4gIH1cblxuICBmdW5jdGlvbiB3aGljaE1lc3NhZ2VDbGlja2VkKGQ6IGFueSkge1xuICAgIGZldGNoKFxuICAgICAgYGh0dHBzOi8vd3d3LjFzZWNtYWlsLmNvbS9hcGkvdjEvP2FjdGlvbj1yZWFkTWVzc2FnZSZsb2dpbj0ke3VzZXJuYW1lfSZkb21haW49JHtkb21haW59JmlkPSR7ZC5pZH1gXG4gICAgKVxuICAgICAgLnRoZW4oKHJlcykgPT4gcmVzLmpzb24oKSlcbiAgICAgIC50aGVuKChtZXNzYWdlZGF0YSkgPT4ge1xuICAgICAgICBzZXRNZXNzYWdlRnJvbShtZXNzYWdlZGF0YS5mcm9tKTtcbiAgICAgICAgc2V0TWVzc2FnZVRleHRCb2R5KG1lc3NhZ2VkYXRhLnRleHRCb2R5KTtcbiAgICAgICAgc2V0TWVzc2FnZVN1YmplY3QobWVzc2FnZWRhdGEuc3ViamVjdCk7XG4gICAgICAgIHNldE1lc3NhZ2VTaG93KHRydWUpO1xuICAgICAgfSlcbiAgICAgIC5jYXRjaCgoZXJyb3IpID0+IHtcbiAgICAgICAgY29uc29sZS5sb2coXCJFcnJvciByZWFkaW5nIG1lc3NhZ2U6XCIsIGVycm9yKTtcbiAgICAgIH0pO1xuICB9XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT1cInctWzEwMCVdIGgtc2NyZWVuXCI+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cInVwcGVyY29udGFpbmVyIHctZnVsbCBoLVs2MCVdIGJnLVsjMDA5OUZGXSBtZDpyb3VuZGVkLWItZnVsbCBzbTpyb3VuZGVkLWItM3hsIGZsZXggZmxleC1jb2wganVzdGlmeS1jZW50ZXIgaXRlbXMtY2VudGVyIGdhcC03XCI+XG4gICAgICAgIDxUaXRsZSAvPlxuICAgICAgICA8UmFuZG9tRW1haWxCb3ggdmFsdWU9e2VtYWlsfSAvPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJ1dHRvbmNvbnRhaW5lciBmbGV4IGdhcC01XCI+XG4gICAgICAgICAgPEJ1dHRvblxuICAgICAgICAgICAgb25DbGljaz17KCkgPT4ge1xuICAgICAgICAgICAgICBjb3B5VG9DbGlwYm9hcmQoZW1haWwpO1xuICAgICAgICAgICAgfX1cbiAgICAgICAgICAgIGxhYmVsPXtcIkNvcHkgRW1haWxcIn1cbiAgICAgICAgICAgIGltZ3NyYz17XCIvY29weWljb24ucG5nXCJ9XG4gICAgICAgICAgLz5cbiAgICAgICAgICA8QnV0dG9uXG4gICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB7XG4gICAgICAgICAgICAgIHdpbmRvdy5sb2NhdGlvbi5yZWxvYWQoKTtcbiAgICAgICAgICAgIH19XG4gICAgICAgICAgICBsYWJlbD17XCJnZW5lcmVyIHVuIG5vdXZlYXUgbWFpbCBcIn1cbiAgICAgICAgICAgIGltZ3NyYz17XCIvbG9hZGluZ2Fycm8ucG5nXCJ9XG4gICAgICAgICAgLz5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwidy1mdWxsIGZsZXgganVzdGlmeS1jZW50ZXIgaXRlbXMtY2VudGVyIG10LTVcIj5cbiAgICAgICAgeyFyZWZyZXNoID8gKFxuICAgICAgICAgIDxJbWFnZVxuICAgICAgICAgICAgY2xhc3NOYW1lPVwiY3Vyc29yLXBvaW50ZXJcIlxuICAgICAgICAgICAgc3JjPXtcIi9sb2FkaW5nYXJyb3dpY29uLnBuZ1wifVxuICAgICAgICAgICAgd2lkdGg9ezUwfVxuICAgICAgICAgICAgaGVpZ2h0PXs1MH1cbiAgICAgICAgICAgIGFsdD1cIlwiXG4gICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB7XG4gICAgICAgICAgICAgIHNldFJlZnJlc2godHJ1ZSk7XG4gICAgICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgICAgICAgIHNldFJlZnJlc2goZmFsc2UpO1xuICAgICAgICAgICAgICAgIHJlZnJlc2hNZXNzYWdlKCk7XG4gICAgICAgICAgICAgIH0sIDEwMDApO1xuICAgICAgICAgICAgfX1cbiAgICAgICAgICAvPlxuICAgICAgICApIDogKFxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidy1bNTBweF0gaC1bNTBweF0gYmctWyMwMDk5RkZdIHJvdW5kZWQtZnVsbCBmbGV4IGp1c3RpZnktY2VudGVyIGl0ZW1zLWNlbnRlclwiPlxuICAgICAgICAgICAgPEltYWdlXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT1cImN1cnNvci1wb2ludGVyXCJcbiAgICAgICAgICAgICAgc3JjPXtcIi9sb2FkaW5nYW5pbWF0aW9uLnN2Z1wifVxuICAgICAgICAgICAgICB3aWR0aD17NDB9XG4gICAgICAgICAgICAgIGhlaWdodD17NDB9XG4gICAgICAgICAgICAgIGFsdD1cIlwiXG4gICAgICAgICAgICAvPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICApfVxuICAgICAgPC9kaXY+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImJvdHRvbWNvbnRhaW5lciB3LWZ1bGwgaC1bODAlXSBmbGV4IGp1c3RpZnktY2VudGVyIGl0ZW1zLWNlbnRlclwiPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInctWzgwJV0gaC1bOTAlXSBib3JkZXIgcm91bmRlZC1tZCBvdmVyZmxvdy15LXNjcm9sbCBvdmVyZmxvdy14LWhpZGRlbiBjdXN0b20tc2Nyb2xsYmFyIGJvcmRlci1bIzAwMDAwMF0gYm9yZGVyLW9wYWNpdHktMjAgc2hhZG93LW1kXCI+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtYWlsYm94dGl0bGUgZmxleCBtLTIgZ2FwLTIganVzdGlmeS1jZW50ZXIgaXRlbXMtY2VudGVyXCI+XG4gICAgICAgICAgICA8SW1hZ2Ugc3JjPXtcIi9tYWlsLnBuZ1wifSB3aWR0aD17MzB9IGhlaWdodD17MzB9IGFsdD1cIm1haWxib3hcIiAvPlxuICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiaW5ib3ggdGV4dC1sZyBvcGFjaXR5LTgwXCI+eyFtZXNzYWdlU2hvdyA/IFwiSW5ib3hcIiA6IFwiTWVzc2FnZSBCb3hcIn08L3NwYW4+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAge21lc3NhZ2VTaG93ID8gKFxuICAgICAgICAgICAgPD5cbiAgICAgICAgICAgICAgPGRpdlxuICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHtcbiAgICAgICAgICAgICAgICAgIHNldE1lc3NhZ2VTaG93KGZhbHNlKTtcbiAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInctZnVsbCBiZy1bIzAwOTlGRl0gcHQtNSBwbC01XCJcbiAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgIDxCdXR0b24gbGFiZWw9XCJHbyBCYWNrXCIgaW1nc3JjPVwiL2Fycm93LnBuZ1wiIGNsYXNzTmFtZT1cImJvcmRlclwiPjwvQnV0dG9uPlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgPEVtYWlsRGlzcGxheVxuICAgICAgICAgICAgICAgIGZyb209e21lc3NhZ2VGcm9tfVxuICAgICAgICAgICAgICAgIHN1YmplY3Q9e21lc3NhZ2VTdWJqZWN0fVxuICAgICAgICAgICAgICAgIGJvZHk9e21lc3NhZ2VUZXh0Qm9keX1cbiAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIDwvPlxuICAgICAgICAgICkgOiAoXG4gICAgICAgICAgICBtZXNzYWdlLm1hcCgoZCkgPT4gKFxuICAgICAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICAgICAga2V5PXtkLmlkfVxuICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHtcbiAgICAgICAgICAgICAgICAgIHdoaWNoTWVzc2FnZUNsaWNrZWQoZCk7XG4gICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgIDxNYWlsQm94IGVtYWlsPXtkLmZyb219IHN1YmplY3Q9e2Quc3ViamVjdH0gbWVzc2FnZT17ZC5tZXNzYWdlfSB0aW1lPXtkLmRhdGV9IC8+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgKSlcbiAgICAgICAgICApfVxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJib3R0b21jb250YWluZXIgdy1mdWxsIGgtZml0IGZsZXgganVzdGlmeS1jZW50ZXIgaXRlbXMtY2VudGVyXCI+XG4gICAgICAgIDxBYm91dCAvPlxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBIb21lO1xuIl0sIm5hbWVzIjpbIlJlYWN0IiwidXNlU3RhdGUiLCJ1c2VFZmZlY3QiLCJJbWFnZSIsIkJ1dHRvbiIsIk1haWxCb3giLCJSYW5kb21FbWFpbEJveCIsIlRpdGxlIiwiQWJvdXQiLCJFbWFpbERpc3BsYXkiLCJIb21lIiwicmVmcmVzaCIsInNldFJlZnJlc2giLCJkZWwiLCJzZXREZWxldGUiLCJlbWFpbCIsInNldEVtYWlsIiwibWVzc2FnZSIsInNldE1lc3NhZ2VEYXRhIiwidXNlcm5hbWUiLCJzZXRVc2VybmFtZSIsImRvbWFpbiIsInNldERvbWFpbiIsIm1lc3NhZ2VTaG93Iiwic2V0TWVzc2FnZVNob3ciLCJtZXNzYWdlU3ViamVjdCIsInNldE1lc3NhZ2VTdWJqZWN0IiwibWVzc2FnZUZyb20iLCJzZXRNZXNzYWdlRnJvbSIsIm1lc3NhZ2VUZXh0Qm9keSIsInNldE1lc3NhZ2VUZXh0Qm9keSIsImludGVydmFsIiwiZ2V0RW1haWwiLCJyZXMiLCJmZXRjaCIsInJhbmRvbUVtYWlsIiwianNvbiIsImF0SW5kZXgiLCJpbmRleE9mIiwic3Vic3RyaW5nIiwic2V0SW50ZXJ2YWwiLCJyZXMyIiwibWVzc2FnZURhdGEiLCJlcnJvciIsImNvbnNvbGUiLCJsb2ciLCJjbGVhckludGVydmFsIiwicmVmcmVzaE1lc3NhZ2UiLCJjb3B5VG9DbGlwYm9hcmQiLCJpbnB1dCIsImRvY3VtZW50IiwiY3JlYXRlRWxlbWVudCIsInZhbHVlIiwiYm9keSIsImFwcGVuZENoaWxkIiwic2VsZWN0Iiwic2V0U2VsZWN0aW9uUmFuZ2UiLCJleGVjQ29tbWFuZCIsInJlbW92ZUNoaWxkIiwid2hpY2hNZXNzYWdlQ2xpY2tlZCIsImQiLCJpZCIsInRoZW4iLCJtZXNzYWdlZGF0YSIsImZyb20iLCJ0ZXh0Qm9keSIsInN1YmplY3QiLCJjYXRjaCIsImRpdiIsImNsYXNzTmFtZSIsIm9uQ2xpY2siLCJsYWJlbCIsImltZ3NyYyIsIndpbmRvdyIsImxvY2F0aW9uIiwicmVsb2FkIiwic3JjIiwid2lkdGgiLCJoZWlnaHQiLCJhbHQiLCJzZXRUaW1lb3V0Iiwic3BhbiIsIm1hcCIsInRpbWUiLCJkYXRlIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-client)/./src/app/page.tsx\n"));

/***/ })

});