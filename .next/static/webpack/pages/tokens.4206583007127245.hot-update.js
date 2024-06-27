"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/tokens",{

/***/ "./components/Header.js":
/*!******************************!*\
  !*** ./components/Header.js ***!
  \******************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _rainbow_me_rainbowkit__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @rainbow-me/rainbowkit */ \"./node_modules/@rainbow-me/rainbowkit/dist/index.js\");\n/* harmony import */ var wagmi__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! wagmi */ \"./node_modules/wagmi/dist/wagmi.esm.js\");\n/* harmony import */ var react_hot_toast__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-hot-toast */ \"./node_modules/react-hot-toast/dist/index.mjs\");\n/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./index */ \"./components/index.js\");\nvar _this = undefined;\n\n\n\n\n\n// INTERNAL IMPORTS\n\nvar _s = $RefreshSig$();\nvar Header = function() {\n    _s();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null), tokenBalComp = ref[0], setTokenBalComp = ref[1];\n    var address = (0,wagmi__WEBPACK_IMPORTED_MODULE_4__.useAccount)().address;\n    var notifyConnectWallet = function() {\n        return react_hot_toast__WEBPACK_IMPORTED_MODULE_2__[\"default\"].error(\"Connect wallet.\", {\n            duration: 2000\n        });\n    };\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function() {\n        if (address) {\n            setTokenBalComp(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_index__WEBPACK_IMPORTED_MODULE_3__.TokenBalance, {\n                        name: \"USD Coin\",\n                        walletAddress: address\n                    }, void 0, false, {\n                        fileName: \"U:\\\\uniswap\\\\components\\\\Header.js\",\n                        lineNumber: 20,\n                        columnNumber: 11\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_index__WEBPACK_IMPORTED_MODULE_3__.TokenBalance, {\n                        name: \"SHIBA INU\",\n                        walletAddress: address\n                    }, void 0, false, {\n                        fileName: \"U:\\\\uniswap\\\\components\\\\Header.js\",\n                        lineNumber: 22,\n                        columnNumber: 11\n                    }, _this)\n                ]\n            }, void 0, true));\n        } else {\n            setTokenBalComp(null);\n            notifyConnectWallet();\n        }\n    }, [\n        address\n    ]);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"header\", {\n        className: \"p-4 text-gray-100\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"container flex justify-between h-16 mx-auto\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"flex\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                                rel: \"noopener noreferrer\",\n                                href: \"#\",\n                                \"aria-label\": \"Back to homepage\",\n                                className: \"flex items-center p-2\",\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_index__WEBPACK_IMPORTED_MODULE_3__.Logo, {}, void 0, false, {\n                                    fileName: \"U:\\\\uniswap\\\\components\\\\Header.js\",\n                                    lineNumber: 41,\n                                    columnNumber: 13\n                                }, _this)\n                            }, void 0, false, {\n                                fileName: \"U:\\\\uniswap\\\\components\\\\Header.js\",\n                                lineNumber: 35,\n                                columnNumber: 11\n                            }, _this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n                                className: \"items-stretch hidden space-x-3 lg:flex\",\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                                        className: \"flex\",\n                                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                                            rel: \"noopener noreferrer\",\n                                            href: \"/\",\n                                            className: \"flex items-center px-4 -mb-1 dark:border-transparent text-[#7765F3] border-[#7765F3]\",\n                                            children: \"Swap\"\n                                        }, void 0, false, {\n                                            fileName: \"U:\\\\uniswap\\\\components\\\\Header.js\",\n                                            lineNumber: 45,\n                                            columnNumber: 15\n                                        }, _this)\n                                    }, void 0, false, {\n                                        fileName: \"U:\\\\uniswap\\\\components\\\\Header.js\",\n                                        lineNumber: 44,\n                                        columnNumber: 13\n                                    }, _this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                                        className: \"flex\",\n                                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                                            rel: \"noopener noreferrer\",\n                                            href: \"/tokens\",\n                                            className: \"flex items-center px-4 -mb-1 dark:border-transparent\",\n                                            children: \"Transaction History\"\n                                        }, void 0, false, {\n                                            fileName: \"U:\\\\uniswap\\\\components\\\\Header.js\",\n                                            lineNumber: 54,\n                                            columnNumber: 15\n                                        }, _this)\n                                    }, void 0, false, {\n                                        fileName: \"U:\\\\uniswap\\\\components\\\\Header.js\",\n                                        lineNumber: 53,\n                                        columnNumber: 13\n                                    }, _this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                                        className: \"flex\",\n                                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                                            rel: \"noopener noreferrer\",\n                                            href: \"#\",\n                                            className: \"flex items-center px-4 -mb-1 dark:border-transparent\",\n                                            children: \"\"\n                                        }, void 0, false, {\n                                            fileName: \"U:\\\\uniswap\\\\components\\\\Header.js\",\n                                            lineNumber: 63,\n                                            columnNumber: 15\n                                        }, _this)\n                                    }, void 0, false, {\n                                        fileName: \"U:\\\\uniswap\\\\components\\\\Header.js\",\n                                        lineNumber: 62,\n                                        columnNumber: 13\n                                    }, _this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                                        className: \"flex\",\n                                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                                            rel: \"noopener noreferrer\",\n                                            href: \"#\",\n                                            className: \"flex items-center px-4 -mb-1 dark:border-transparent\",\n                                            children: \"\"\n                                        }, void 0, false, {\n                                            fileName: \"U:\\\\uniswap\\\\components\\\\Header.js\",\n                                            lineNumber: 72,\n                                            columnNumber: 15\n                                        }, _this)\n                                    }, void 0, false, {\n                                        fileName: \"U:\\\\uniswap\\\\components\\\\Header.js\",\n                                        lineNumber: 71,\n                                        columnNumber: 13\n                                    }, _this)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"U:\\\\uniswap\\\\components\\\\Header.js\",\n                                lineNumber: 43,\n                                columnNumber: 11\n                            }, _this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"U:\\\\uniswap\\\\components\\\\Header.js\",\n                        lineNumber: 34,\n                        columnNumber: 9\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"items-center flex-shrink-0 hidden lg:flex\",\n                        children: [\n                            tokenBalComp,\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_rainbow_me_rainbowkit__WEBPACK_IMPORTED_MODULE_5__.ConnectButton, {}, void 0, false, {\n                                fileName: \"U:\\\\uniswap\\\\components\\\\Header.js\",\n                                lineNumber: 84,\n                                columnNumber: 11\n                            }, _this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"U:\\\\uniswap\\\\components\\\\Header.js\",\n                        lineNumber: 82,\n                        columnNumber: 9\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        className: \"p-4 lg:hidden\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_index__WEBPACK_IMPORTED_MODULE_3__.Menu, {}, void 0, false, {\n                            fileName: \"U:\\\\uniswap\\\\components\\\\Header.js\",\n                            lineNumber: 87,\n                            columnNumber: 11\n                        }, _this)\n                    }, void 0, false, {\n                        fileName: \"U:\\\\uniswap\\\\components\\\\Header.js\",\n                        lineNumber: 86,\n                        columnNumber: 9\n                    }, _this)\n                ]\n            }, void 0, true, {\n                fileName: \"U:\\\\uniswap\\\\components\\\\Header.js\",\n                lineNumber: 33,\n                columnNumber: 7\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_hot_toast__WEBPACK_IMPORTED_MODULE_2__.Toaster, {}, void 0, false, {\n                fileName: \"U:\\\\uniswap\\\\components\\\\Header.js\",\n                lineNumber: 90,\n                columnNumber: 7\n            }, _this)\n        ]\n    }, void 0, true, {\n        fileName: \"U:\\\\uniswap\\\\components\\\\Header.js\",\n        lineNumber: 32,\n        columnNumber: 5\n    }, _this);\n};\n_s(Header, \"eQmQkKz+jtinrV6tAk/fHCRMRLM=\", false, function() {\n    return [\n        wagmi__WEBPACK_IMPORTED_MODULE_4__.useAccount\n    ];\n});\n_c = Header;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Header);\nvar _c;\n$RefreshReg$(_c, \"Header\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFHOzs7Ozs7NkJBQ2I7a0NBQ04sOERBQUN5QixRQUFNO3dCQUFDUixTQUFTLEVBQUMsZUFBZTtrQ0FDL0IsNEVBQUNiLHdDQUFJOzs7O2lDQUFHOzs7Ozs2QkFDRDs7Ozs7O3FCQUNMOzBCQUNOLDhEQUFDRCxvREFBTzs7OztxQkFBRzs7Ozs7O2FBQ0osQ0FDVDtDQUNIO0dBcEZLSSxNQUFNOztRQUVVTiw2Q0FBVTs7O0FBRjFCTSxLQUFBQSxNQUFNO0FBc0ZaLCtEQUFlQSxNQUFNLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9IZWFkZXIuanM/NGRiYiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgeyBDb25uZWN0QnV0dG9uIH0gZnJvbSBcIkByYWluYm93LW1lL3JhaW5ib3draXRcIjtcclxuaW1wb3J0IHsgdXNlQWNjb3VudCB9IGZyb20gXCJ3YWdtaVwiO1xyXG5pbXBvcnQgdG9hc3QsIHsgVG9hc3RlciB9IGZyb20gXCJyZWFjdC1ob3QtdG9hc3RcIjtcclxuXHJcbi8vIElOVEVSTkFMIElNUE9SVFNcclxuaW1wb3J0IHsgTWVudSwgTG9nbywgVG9rZW5CYWxhbmNlIH0gZnJvbSBcIi4vaW5kZXhcIjtcclxuXHJcbmNvbnN0IEhlYWRlciA9ICgpID0+IHtcclxuICBjb25zdCBbdG9rZW5CYWxDb21wLCBzZXRUb2tlbkJhbENvbXBdID0gdXNlU3RhdGUobnVsbCk7XHJcbiAgY29uc3QgeyBhZGRyZXNzIH0gPSB1c2VBY2NvdW50KCk7XHJcblxyXG4gIGNvbnN0IG5vdGlmeUNvbm5lY3RXYWxsZXQgPSAoKSA9PlxyXG4gICAgdG9hc3QuZXJyb3IoXCJDb25uZWN0IHdhbGxldC5cIiwgeyBkdXJhdGlvbjogMjAwMCB9KTtcclxuXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGlmIChhZGRyZXNzKSB7XHJcbiAgICAgIHNldFRva2VuQmFsQ29tcChcclxuICAgICAgICA8PlxyXG4gICAgICAgICAgPFRva2VuQmFsYW5jZSBuYW1lPXtcIlVTRCBDb2luXCJ9IHdhbGxldEFkZHJlc3M9e2FkZHJlc3N9IC8+XHJcbiAgICAgICAgICB7LyogPFRva2VuQmFsYW5jZSBuYW1lPXtcIldyYXBwZWQgRXRoZXJcIn0gd2FsbGV0QWRkcmVzcz17YWRkcmVzc30gLz4gKi99XHJcbiAgICAgICAgICA8VG9rZW5CYWxhbmNlIG5hbWU9e1wiU0hJQkEgSU5VXCJ9IHdhbGxldEFkZHJlc3M9e2FkZHJlc3N9IC8+XHJcbiAgICAgICAgPC8+XHJcbiAgICAgICk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBzZXRUb2tlbkJhbENvbXAobnVsbCk7XHJcbiAgICAgIG5vdGlmeUNvbm5lY3RXYWxsZXQoKTtcclxuICAgIH1cclxuICB9LCBbYWRkcmVzc10pO1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPGhlYWRlciBjbGFzc05hbWU9XCJwLTQgdGV4dC1ncmF5LTEwMFwiPlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lciBmbGV4IGp1c3RpZnktYmV0d2VlbiBoLTE2IG14LWF1dG9cIj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXhcIj5cclxuICAgICAgICAgIDxhIFxyXG4gICAgICAgICAgICByZWw9XCJub29wZW5lciBub3JlZmVycmVyXCJcclxuICAgICAgICAgICAgaHJlZj1cIiNcIlxyXG4gICAgICAgICAgICBhcmlhLWxhYmVsPVwiQmFjayB0byBob21lcGFnZVwiXHJcbiAgICAgICAgICAgIGNsYXNzTmFtZT1cImZsZXggaXRlbXMtY2VudGVyIHAtMlwiXHJcbiAgICAgICAgICA+XHJcbiAgICAgICAgICAgIDxMb2dvIC8+XHJcbiAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICA8dWwgY2xhc3NOYW1lPVwiaXRlbXMtc3RyZXRjaCBoaWRkZW4gc3BhY2UteC0zIGxnOmZsZXhcIj5cclxuICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT1cImZsZXhcIj5cclxuICAgICAgICAgICAgICA8YVxyXG4gICAgICAgICAgICAgICAgcmVsPVwibm9vcGVuZXIgbm9yZWZlcnJlclwiXHJcbiAgICAgICAgICAgICAgICBocmVmPVwiL1wiXHJcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJmbGV4IGl0ZW1zLWNlbnRlciBweC00IC1tYi0xIGRhcms6Ym9yZGVyLXRyYW5zcGFyZW50IHRleHQtWyM3NzY1RjNdIGJvcmRlci1bIzc3NjVGM11cIlxyXG4gICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgIFN3YXBcclxuICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9XCJmbGV4XCI+XHJcbiAgICAgICAgICAgICAgPGEgXHJcbiAgICAgICAgICAgICAgICByZWw9XCJub29wZW5lciBub3JlZmVycmVyXCJcclxuICAgICAgICAgICAgICAgIGhyZWY9XCIvdG9rZW5zXCJcclxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImZsZXggaXRlbXMtY2VudGVyIHB4LTQgLW1iLTEgZGFyazpib3JkZXItdHJhbnNwYXJlbnRcIlxyXG4gICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgIFRyYW5zYWN0aW9uIEhpc3RvcnlcclxuICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9XCJmbGV4XCI+XHJcbiAgICAgICAgICAgICAgPGFcclxuICAgICAgICAgICAgICAgIHJlbD1cIm5vb3BlbmVyIG5vcmVmZXJyZXJcIlxyXG4gICAgICAgICAgICAgICAgaHJlZj1cIiNcIlxyXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiZmxleCBpdGVtcy1jZW50ZXIgcHgtNCAtbWItMSBkYXJrOmJvcmRlci10cmFuc3BhcmVudFwiXHJcbiAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgIHtcIlwifVxyXG4gICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT1cImZsZXhcIj5cclxuICAgICAgICAgICAgICA8YVxyXG4gICAgICAgICAgICAgICAgcmVsPVwibm9vcGVuZXIgbm9yZWZlcnJlclwiXHJcbiAgICAgICAgICAgICAgICBocmVmPVwiI1wiXHJcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJmbGV4IGl0ZW1zLWNlbnRlciBweC00IC1tYi0xIGRhcms6Ym9yZGVyLXRyYW5zcGFyZW50XCJcclxuICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgIHtcIlwifVxyXG4gICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgIDwvdWw+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJpdGVtcy1jZW50ZXIgZmxleC1zaHJpbmstMCBoaWRkZW4gbGc6ZmxleFwiPlxyXG4gICAgICAgICAge3Rva2VuQmFsQ29tcH1cclxuICAgICAgICAgIDxDb25uZWN0QnV0dG9uIC8+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJwLTQgbGc6aGlkZGVuXCI+XHJcbiAgICAgICAgICA8TWVudSAvPlxyXG4gICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICA8L2Rpdj5cclxuICAgICAgPFRvYXN0ZXIgLz5cclxuICAgIDwvaGVhZGVyPlxyXG4gICk7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IEhlYWRlcjtcclxuIl0sIm5hbWVzIjpbIlJlYWN0IiwidXNlRWZmZWN0IiwidXNlU3RhdGUiLCJDb25uZWN0QnV0dG9uIiwidXNlQWNjb3VudCIsInRvYXN0IiwiVG9hc3RlciIsIk1lbnUiLCJMb2dvIiwiVG9rZW5CYWxhbmNlIiwiSGVhZGVyIiwidG9rZW5CYWxDb21wIiwic2V0VG9rZW5CYWxDb21wIiwiYWRkcmVzcyIsIm5vdGlmeUNvbm5lY3RXYWxsZXQiLCJlcnJvciIsImR1cmF0aW9uIiwibmFtZSIsIndhbGxldEFkZHJlc3MiLCJoZWFkZXIiLCJjbGFzc05hbWUiLCJkaXYiLCJhIiwicmVsIiwiaHJlZiIsImFyaWEtbGFiZWwiLCJ1bCIsImxpIiwiYnV0dG9uIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/Header.js\n"));

/***/ })

});