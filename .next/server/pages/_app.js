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
exports.id = "pages/_app";
exports.ids = ["pages/_app"];
exports.modules = {

/***/ "./pages/_app.js":
/*!***********************!*\
  !*** ./pages/_app.js ***!
  \***********************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../styles/globals.css */ \"./styles/globals.css\");\n/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_styles_globals_css__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var lodash_merge__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! lodash/merge */ \"lodash/merge\");\n/* harmony import */ var lodash_merge__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(lodash_merge__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _rainbow_me_rainbowkit__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @rainbow-me/rainbowkit */ \"@rainbow-me/rainbowkit\");\n/* harmony import */ var wagmi__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! wagmi */ \"wagmi\");\n/* harmony import */ var wagmi__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(wagmi__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var wagmi_providers_infura__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! wagmi/providers/infura */ \"wagmi/providers/infura\");\n/* harmony import */ var wagmi_providers_infura__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(wagmi_providers_infura__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var wagmi_providers_jsonRpc__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! wagmi/providers/jsonRpc */ \"wagmi/providers/jsonRpc\");\n/* harmony import */ var wagmi_providers_jsonRpc__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(wagmi_providers_jsonRpc__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var ethers_lib_utils__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ethers/lib/utils */ \"ethers/lib/utils\");\n/* harmony import */ var ethers_lib_utils__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(ethers_lib_utils__WEBPACK_IMPORTED_MODULE_7__);\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_rainbow_me_rainbowkit__WEBPACK_IMPORTED_MODULE_3__]);\n_rainbow_me_rainbowkit__WEBPACK_IMPORTED_MODULE_3__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];\n\n// import \"../styles/globals.css\";\n// import merge from \"lodash/merge\";\n// import \"@rainbow-me/rainbowkit/styles.css\";\n// import {\n//   getDefaultWallets,\n//   RainbowKitProvider,\n//   darkTheme,\n//   midnightTheme,\n// } from \"@rainbow-me/rainbowkit\";\n// import { chain, configureChains, createClient, WagmiConfig } from \"wagmi\";\n// import {infuraProvider} from \"wagmi/providers/infura\";\n// import { FunctionFragment } from \"ethers/lib/utils\";\n// const { chains, provider } = configureChains(\n//   [chain.sepolia],\n//   [infuraProvider({ apiKey: \"c285808037fb4d4bac7e081597376da8\", priority: 1 })]\n// );\n// const { connectors } = getDefaultWallets({\n//   appName: \"Custom Dex\",\n//   chains,\n// });\n// const wagmiClient = createClient({\n//   autoConnect: true,\n//   connectors,\n//   providers,\n// });\n// const myTheme = merge(midnightTheme(), {\n//   colors :{\n//     accentColor: \"#18181b\",\n//     accentColorForeground: \"#fff\",\n//   }\n// });\n// function MyApp ({ Component, pageProps }){\n//   return (\n//     <WagmiConfig client = {wagmiClient} >\n//       <RainbowKitProvider chains={chains} theme={myTheme}>\n//         <Component {...pageProps} />\n//       </RainbowKitProvider>\n//     </WagmiConfig>\n//   )\n// }\n// export default MyApp;\n\n\n\n\n\n\n\n\n// Sepolia chain configuration\nconst sepolia = {\n    id: 11155111,\n    name: \"Sepolia\",\n    network: \"sepolia\",\n    nativeCurrency: {\n        name: \"Sepolia ETH\",\n        symbol: \"ETH\",\n        decimals: 18\n    },\n    rpcUrls: {\n        default: \"https://sepolia.infura.io/v3/c285808037fb4d4bac7e081597376da8\"\n    },\n    blockExplorers: {\n        default: {\n            name: \"Etherscan\",\n            url: \"https://sepolia.etherscan.io\"\n        }\n    },\n    testnet: true\n};\nconst { chains , provider  } = (0,wagmi__WEBPACK_IMPORTED_MODULE_4__.configureChains)([\n    sepolia\n], [\n    (0,wagmi_providers_infura__WEBPACK_IMPORTED_MODULE_5__.infuraProvider)({\n        apiKey: \"c285808037fb4d4bac7e081597376da8\",\n        priority: 1\n    }),\n    (0,wagmi_providers_jsonRpc__WEBPACK_IMPORTED_MODULE_6__.jsonRpcProvider)({\n        rpc: (chain)=>({\n                http: chain.rpcUrls.default\n            })\n    })\n]);\nconst { connectors  } = (0,_rainbow_me_rainbowkit__WEBPACK_IMPORTED_MODULE_3__.getDefaultWallets)({\n    appName: \"Custom Dex\",\n    chains\n});\nconst wagmiClient = (0,wagmi__WEBPACK_IMPORTED_MODULE_4__.createClient)({\n    autoConnect: true,\n    connectors,\n    provider\n});\nconst myTheme = lodash_merge__WEBPACK_IMPORTED_MODULE_2___default()((0,_rainbow_me_rainbowkit__WEBPACK_IMPORTED_MODULE_3__.midnightTheme)(), {\n    colors: {\n        accentColor: \"#18181b\",\n        accentColorForeground: \"#fff\"\n    }\n});\nfunction MyApp({ Component , pageProps  }) {\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(wagmi__WEBPACK_IMPORTED_MODULE_4__.WagmiConfig, {\n        client: wagmiClient,\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_rainbow_me_rainbowkit__WEBPACK_IMPORTED_MODULE_3__.RainbowKitProvider, {\n            chains: chains,\n            theme: myTheme,\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Component, {\n                ...pageProps\n            }, void 0, false, {\n                fileName: \"U:\\\\uniswap\\\\pages\\\\_app.js\",\n                lineNumber: 120,\n                columnNumber: 9\n            }, this)\n        }, void 0, false, {\n            fileName: \"U:\\\\uniswap\\\\pages\\\\_app.js\",\n            lineNumber: 119,\n            columnNumber: 7\n        }, this)\n    }, void 0, false, {\n        fileName: \"U:\\\\uniswap\\\\pages\\\\_app.js\",\n        lineNumber: 118,\n        columnNumber: 5\n    }, this);\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (MyApp);\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUVELGlFQUFlRixLQUFLLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly91bmlzd2FwLXRva2VuLW1hcmtldHBsYWNlLy4vcGFnZXMvX2FwcC5qcz9lMGFkIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIGltcG9ydCBcIi4uL3N0eWxlcy9nbG9iYWxzLmNzc1wiO1xyXG5cclxuLy8gaW1wb3J0IG1lcmdlIGZyb20gXCJsb2Rhc2gvbWVyZ2VcIjtcclxuLy8gaW1wb3J0IFwiQHJhaW5ib3ctbWUvcmFpbmJvd2tpdC9zdHlsZXMuY3NzXCI7XHJcblxyXG4vLyBpbXBvcnQge1xyXG4vLyAgIGdldERlZmF1bHRXYWxsZXRzLFxyXG4vLyAgIFJhaW5ib3dLaXRQcm92aWRlcixcclxuLy8gICBkYXJrVGhlbWUsXHJcbi8vICAgbWlkbmlnaHRUaGVtZSxcclxuLy8gfSBmcm9tIFwiQHJhaW5ib3ctbWUvcmFpbmJvd2tpdFwiO1xyXG5cclxuLy8gaW1wb3J0IHsgY2hhaW4sIGNvbmZpZ3VyZUNoYWlucywgY3JlYXRlQ2xpZW50LCBXYWdtaUNvbmZpZyB9IGZyb20gXCJ3YWdtaVwiO1xyXG4vLyBpbXBvcnQge2luZnVyYVByb3ZpZGVyfSBmcm9tIFwid2FnbWkvcHJvdmlkZXJzL2luZnVyYVwiO1xyXG4vLyBpbXBvcnQgeyBGdW5jdGlvbkZyYWdtZW50IH0gZnJvbSBcImV0aGVycy9saWIvdXRpbHNcIjtcclxuXHJcbi8vIGNvbnN0IHsgY2hhaW5zLCBwcm92aWRlciB9ID0gY29uZmlndXJlQ2hhaW5zKFxyXG4vLyAgIFtjaGFpbi5zZXBvbGlhXSxcclxuLy8gICBbaW5mdXJhUHJvdmlkZXIoeyBhcGlLZXk6IFwiYzI4NTgwODAzN2ZiNGQ0YmFjN2UwODE1OTczNzZkYThcIiwgcHJpb3JpdHk6IDEgfSldXHJcbi8vICk7XHJcblxyXG4vLyBjb25zdCB7IGNvbm5lY3RvcnMgfSA9IGdldERlZmF1bHRXYWxsZXRzKHtcclxuLy8gICBhcHBOYW1lOiBcIkN1c3RvbSBEZXhcIixcclxuLy8gICBjaGFpbnMsXHJcbi8vIH0pO1xyXG5cclxuLy8gY29uc3Qgd2FnbWlDbGllbnQgPSBjcmVhdGVDbGllbnQoe1xyXG4vLyAgIGF1dG9Db25uZWN0OiB0cnVlLFxyXG4vLyAgIGNvbm5lY3RvcnMsXHJcbi8vICAgcHJvdmlkZXJzLFxyXG4vLyB9KTtcclxuXHJcbi8vIGNvbnN0IG15VGhlbWUgPSBtZXJnZShtaWRuaWdodFRoZW1lKCksIHtcclxuLy8gICBjb2xvcnMgOntcclxuLy8gICAgIGFjY2VudENvbG9yOiBcIiMxODE4MWJcIixcclxuLy8gICAgIGFjY2VudENvbG9yRm9yZWdyb3VuZDogXCIjZmZmXCIsXHJcbi8vICAgfVxyXG4vLyB9KTtcclxuXHJcbi8vIGZ1bmN0aW9uIE15QXBwICh7IENvbXBvbmVudCwgcGFnZVByb3BzIH0pe1xyXG4vLyAgIHJldHVybiAoXHJcbi8vICAgICA8V2FnbWlDb25maWcgY2xpZW50ID0ge3dhZ21pQ2xpZW50fSA+XHJcbi8vICAgICAgIDxSYWluYm93S2l0UHJvdmlkZXIgY2hhaW5zPXtjaGFpbnN9IHRoZW1lPXtteVRoZW1lfT5cclxuLy8gICAgICAgICA8Q29tcG9uZW50IHsuLi5wYWdlUHJvcHN9IC8+XHJcbi8vICAgICAgIDwvUmFpbmJvd0tpdFByb3ZpZGVyPlxyXG4vLyAgICAgPC9XYWdtaUNvbmZpZz5cclxuLy8gICApXHJcbi8vIH1cclxuXHJcbi8vIGV4cG9ydCBkZWZhdWx0IE15QXBwO1xyXG5cclxuXHJcblxyXG5pbXBvcnQgXCIuLi9zdHlsZXMvZ2xvYmFscy5jc3NcIjtcclxuXHJcbmltcG9ydCBtZXJnZSBmcm9tIFwibG9kYXNoL21lcmdlXCI7XHJcbmltcG9ydCBcIkByYWluYm93LW1lL3JhaW5ib3draXQvc3R5bGVzLmNzc1wiO1xyXG5cclxuaW1wb3J0IHtcclxuICBnZXREZWZhdWx0V2FsbGV0cyxcclxuICBSYWluYm93S2l0UHJvdmlkZXIsXHJcbiAgZGFya1RoZW1lLFxyXG4gIG1pZG5pZ2h0VGhlbWUsXHJcbn0gZnJvbSBcIkByYWluYm93LW1lL3JhaW5ib3draXRcIjtcclxuXHJcbmltcG9ydCB7IGNoYWluLCBjb25maWd1cmVDaGFpbnMsIGNyZWF0ZUNsaWVudCwgV2FnbWlDb25maWcgfSBmcm9tIFwid2FnbWlcIjtcclxuaW1wb3J0IHsgaW5mdXJhUHJvdmlkZXIgfSBmcm9tIFwid2FnbWkvcHJvdmlkZXJzL2luZnVyYVwiO1xyXG5pbXBvcnQgeyBqc29uUnBjUHJvdmlkZXIgfSBmcm9tIFwid2FnbWkvcHJvdmlkZXJzL2pzb25ScGNcIjtcclxuaW1wb3J0IHsgRnVuY3Rpb25GcmFnbWVudCB9IGZyb20gXCJldGhlcnMvbGliL3V0aWxzXCI7XHJcblxyXG4vLyBTZXBvbGlhIGNoYWluIGNvbmZpZ3VyYXRpb25cclxuY29uc3Qgc2Vwb2xpYSA9IHtcclxuICBpZDogMTExNTUxMTEsIC8vIFNlcG9saWEgY2hhaW4gSURcclxuICBuYW1lOiAnU2Vwb2xpYScsXHJcbiAgbmV0d29yazogJ3NlcG9saWEnLFxyXG4gIG5hdGl2ZUN1cnJlbmN5OiB7XHJcbiAgICBuYW1lOiAnU2Vwb2xpYSBFVEgnLFxyXG4gICAgc3ltYm9sOiAnRVRIJyxcclxuICAgIGRlY2ltYWxzOiAxOCxcclxuICB9LFxyXG4gIHJwY1VybHM6IHtcclxuICAgIGRlZmF1bHQ6ICdodHRwczovL3NlcG9saWEuaW5mdXJhLmlvL3YzL2MyODU4MDgwMzdmYjRkNGJhYzdlMDgxNTk3Mzc2ZGE4JyxcclxuICB9LFxyXG4gIGJsb2NrRXhwbG9yZXJzOiB7XHJcbiAgICBkZWZhdWx0OiB7IG5hbWU6ICdFdGhlcnNjYW4nLCB1cmw6ICdodHRwczovL3NlcG9saWEuZXRoZXJzY2FuLmlvJyB9LFxyXG4gIH0sXHJcbiAgdGVzdG5ldDogdHJ1ZSxcclxufTtcclxuXHJcbmNvbnN0IHsgY2hhaW5zLCBwcm92aWRlciB9ID0gY29uZmlndXJlQ2hhaW5zKFxyXG4gIFtzZXBvbGlhXSxcclxuICBbXHJcbiAgICBpbmZ1cmFQcm92aWRlcih7IGFwaUtleTogXCJjMjg1ODA4MDM3ZmI0ZDRiYWM3ZTA4MTU5NzM3NmRhOFwiLCBwcmlvcml0eTogMSB9KSxcclxuICAgIGpzb25ScGNQcm92aWRlcih7IHJwYzogKGNoYWluKSA9PiAoeyBodHRwOiBjaGFpbi5ycGNVcmxzLmRlZmF1bHQgfSkgfSlcclxuICBdXHJcbik7XHJcblxyXG5jb25zdCB7IGNvbm5lY3RvcnMgfSA9IGdldERlZmF1bHRXYWxsZXRzKHtcclxuICBhcHBOYW1lOiBcIkN1c3RvbSBEZXhcIixcclxuICBjaGFpbnMsXHJcbn0pO1xyXG5cclxuY29uc3Qgd2FnbWlDbGllbnQgPSBjcmVhdGVDbGllbnQoe1xyXG4gIGF1dG9Db25uZWN0OiB0cnVlLFxyXG4gIGNvbm5lY3RvcnMsXHJcbiAgcHJvdmlkZXIsXHJcbn0pO1xyXG5cclxuY29uc3QgbXlUaGVtZSA9IG1lcmdlKG1pZG5pZ2h0VGhlbWUoKSwge1xyXG4gIGNvbG9ycyA6e1xyXG4gICAgYWNjZW50Q29sb3I6IFwiIzE4MTgxYlwiLFxyXG4gICAgYWNjZW50Q29sb3JGb3JlZ3JvdW5kOiBcIiNmZmZcIixcclxuICB9XHJcbn0pO1xyXG5cclxuZnVuY3Rpb24gTXlBcHAgKHsgQ29tcG9uZW50LCBwYWdlUHJvcHMgfSl7XHJcbiAgcmV0dXJuIChcclxuICAgIDxXYWdtaUNvbmZpZyBjbGllbnQ9e3dhZ21pQ2xpZW50fT5cclxuICAgICAgPFJhaW5ib3dLaXRQcm92aWRlciBjaGFpbnM9e2NoYWluc30gdGhlbWU9e215VGhlbWV9PlxyXG4gICAgICAgIDxDb21wb25lbnQgey4uLnBhZ2VQcm9wc30gLz5cclxuICAgICAgPC9SYWluYm93S2l0UHJvdmlkZXI+XHJcbiAgICA8L1dhZ21pQ29uZmlnPlxyXG4gIClcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgTXlBcHA7XHJcblxyXG5cclxuXHJcblxyXG4iXSwibmFtZXMiOlsibWVyZ2UiLCJnZXREZWZhdWx0V2FsbGV0cyIsIlJhaW5ib3dLaXRQcm92aWRlciIsImRhcmtUaGVtZSIsIm1pZG5pZ2h0VGhlbWUiLCJjaGFpbiIsImNvbmZpZ3VyZUNoYWlucyIsImNyZWF0ZUNsaWVudCIsIldhZ21pQ29uZmlnIiwiaW5mdXJhUHJvdmlkZXIiLCJqc29uUnBjUHJvdmlkZXIiLCJGdW5jdGlvbkZyYWdtZW50Iiwic2Vwb2xpYSIsImlkIiwibmFtZSIsIm5ldHdvcmsiLCJuYXRpdmVDdXJyZW5jeSIsInN5bWJvbCIsImRlY2ltYWxzIiwicnBjVXJscyIsImRlZmF1bHQiLCJibG9ja0V4cGxvcmVycyIsInVybCIsInRlc3RuZXQiLCJjaGFpbnMiLCJwcm92aWRlciIsImFwaUtleSIsInByaW9yaXR5IiwicnBjIiwiaHR0cCIsImNvbm5lY3RvcnMiLCJhcHBOYW1lIiwid2FnbWlDbGllbnQiLCJhdXRvQ29ubmVjdCIsIm15VGhlbWUiLCJjb2xvcnMiLCJhY2NlbnRDb2xvciIsImFjY2VudENvbG9yRm9yZWdyb3VuZCIsIk15QXBwIiwiQ29tcG9uZW50IiwicGFnZVByb3BzIiwiY2xpZW50IiwidGhlbWUiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/_app.js\n");

/***/ }),

/***/ "./styles/globals.css":
/*!****************************!*\
  !*** ./styles/globals.css ***!
  \****************************/
/***/ (() => {



/***/ }),

/***/ "ethers/lib/utils":
/*!***********************************!*\
  !*** external "ethers/lib/utils" ***!
  \***********************************/
/***/ ((module) => {

"use strict";
module.exports = require("ethers/lib/utils");

/***/ }),

/***/ "lodash/merge":
/*!*******************************!*\
  !*** external "lodash/merge" ***!
  \*******************************/
/***/ ((module) => {

"use strict";
module.exports = require("lodash/merge");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-dev-runtime");

/***/ }),

/***/ "wagmi":
/*!************************!*\
  !*** external "wagmi" ***!
  \************************/
/***/ ((module) => {

"use strict";
module.exports = require("wagmi");

/***/ }),

/***/ "wagmi/providers/infura":
/*!*****************************************!*\
  !*** external "wagmi/providers/infura" ***!
  \*****************************************/
/***/ ((module) => {

"use strict";
module.exports = require("wagmi/providers/infura");

/***/ }),

/***/ "wagmi/providers/jsonRpc":
/*!******************************************!*\
  !*** external "wagmi/providers/jsonRpc" ***!
  \******************************************/
/***/ ((module) => {

"use strict";
module.exports = require("wagmi/providers/jsonRpc");

/***/ }),

/***/ "@rainbow-me/rainbowkit":
/*!*****************************************!*\
  !*** external "@rainbow-me/rainbowkit" ***!
  \*****************************************/
/***/ ((module) => {

"use strict";
module.exports = import("@rainbow-me/rainbowkit");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/_app.js"));
module.exports = __webpack_exports__;

})();