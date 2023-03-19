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

/***/ "./pages/_app.tsx":
/*!************************!*\
  !*** ./pages/_app.tsx ***!
  \************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ App)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _styles_font_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../styles/font.css */ \"./styles/font.css\");\n/* harmony import */ var _styles_font_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_styles_font_css__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! styled-components */ \"styled-components\");\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _styles_GlobalStyle__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../styles/GlobalStyle */ \"./styles/GlobalStyle.tsx\");\n/* harmony import */ var _styles_theme__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../styles/theme */ \"./styles/theme.ts\");\n/* harmony import */ var react_toastify__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-toastify */ \"react-toastify\");\n/* harmony import */ var react_toastify_dist_ReactToastify_css__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-toastify/dist/ReactToastify.css */ \"./node_modules/react-toastify/dist/ReactToastify.css\");\n/* harmony import */ var react_toastify_dist_ReactToastify_css__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react_toastify_dist_ReactToastify_css__WEBPACK_IMPORTED_MODULE_7__);\n/* harmony import */ var _tanstack_react_query__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @tanstack/react-query */ \"@tanstack/react-query\");\n/* harmony import */ var _tanstack_react_query__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_tanstack_react_query__WEBPACK_IMPORTED_MODULE_8__);\n/* harmony import */ var _quries_queryClient__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../quries/queryClient */ \"./quries/queryClient.ts\");\n/* harmony import */ var _tanstack_react_query_devtools__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @tanstack/react-query-devtools */ \"@tanstack/react-query-devtools\");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([react_toastify__WEBPACK_IMPORTED_MODULE_6__, _tanstack_react_query_devtools__WEBPACK_IMPORTED_MODULE_10__]);\n([react_toastify__WEBPACK_IMPORTED_MODULE_6__, _tanstack_react_query_devtools__WEBPACK_IMPORTED_MODULE_10__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);\n\n\n\n\n\n\n\n\n\n\n\n\nfunction App({ Component , pageProps  }) {\n    const getLayout = Component.getLayout ?? ((page)=>page);\n    const [queryClient] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(()=>new _tanstack_react_query__WEBPACK_IMPORTED_MODULE_8__.QueryClient({\n            defaultOptions: _quries_queryClient__WEBPACK_IMPORTED_MODULE_9__.defaultQueryClientOptions\n        }));\n    // url이 my로 시작하거나 chat으로 시작하거나 notifications거나 add로 끝나거나 edit으로 끝나면 withAuth 적용\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_tanstack_react_query__WEBPACK_IMPORTED_MODULE_8__.QueryClientProvider, {\n            client: queryClient,\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(styled_components__WEBPACK_IMPORTED_MODULE_3__.ThemeProvider, {\n                    theme: _styles_theme__WEBPACK_IMPORTED_MODULE_5__.theme,\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_styles_GlobalStyle__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {}, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\Jeong\\\\Desktop\\\\Projects\\\\anabada\\\\pages\\\\_app.tsx\",\n                            lineNumber: 49,\n                            columnNumber: 11\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_tanstack_react_query__WEBPACK_IMPORTED_MODULE_8__.Hydrate, {\n                            state: pageProps.dehydratedState,\n                            children: [\n                                getLayout(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Component, {\n                                    ...pageProps\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\Jeong\\\\Desktop\\\\Projects\\\\anabada\\\\pages\\\\_app.tsx\",\n                                    lineNumber: 51,\n                                    columnNumber: 24\n                                }, this)),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_toastify__WEBPACK_IMPORTED_MODULE_6__.ToastContainer, {}, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\Jeong\\\\Desktop\\\\Projects\\\\anabada\\\\pages\\\\_app.tsx\",\n                                    lineNumber: 52,\n                                    columnNumber: 13\n                                }, this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"C:\\\\Users\\\\Jeong\\\\Desktop\\\\Projects\\\\anabada\\\\pages\\\\_app.tsx\",\n                            lineNumber: 50,\n                            columnNumber: 11\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"C:\\\\Users\\\\Jeong\\\\Desktop\\\\Projects\\\\anabada\\\\pages\\\\_app.tsx\",\n                    lineNumber: 48,\n                    columnNumber: 9\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_tanstack_react_query_devtools__WEBPACK_IMPORTED_MODULE_10__.ReactQueryDevtools, {\n                    initialIsOpen: false\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\Jeong\\\\Desktop\\\\Projects\\\\anabada\\\\pages\\\\_app.tsx\",\n                    lineNumber: 55,\n                    columnNumber: 9\n                }, this)\n            ]\n        }, void 0, true, {\n            fileName: \"C:\\\\Users\\\\Jeong\\\\Desktop\\\\Projects\\\\anabada\\\\pages\\\\_app.tsx\",\n            lineNumber: 47,\n            columnNumber: 7\n        }, this)\n    }, void 0, false);\n}\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9fYXBwLnRzeC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQTRCO0FBRXlDO0FBR25CO0FBQ0Y7QUFDUjtBQUNlO0FBQ1I7QUFLaEI7QUFDbUM7QUFDRTtBQUMxQztBQWtCWCxTQUFTVyxJQUFJLEVBQUVDLFVBQVMsRUFBRUMsVUFBUyxFQUFzQixFQUFFO0lBQ3hFLE1BQU1DLFlBQVlGLFVBQVVFLFNBQVMsSUFBSyxFQUFDQyxPQUFTQSxJQUFHO0lBRXZELE1BQU0sQ0FBQ0MsWUFBWSxHQUFHaEIsK0NBQVFBLENBQzVCLElBQU0sSUFBSU0sOERBQVdBLENBQUM7WUFBRVcsZ0JBQWdCVCwwRUFBeUJBO1FBQUM7SUFHcEUsK0VBQStFO0lBRS9FLHFCQUNFO2tCQUNFLDRFQUFDRCxzRUFBbUJBO1lBQUNXLFFBQVFGOzs4QkFDM0IsOERBQUNmLDREQUFhQTtvQkFBQ0UsT0FBT0EsZ0RBQUtBOztzQ0FDekIsOERBQUNELDJEQUFXQTs7Ozs7c0NBQ1osOERBQUNHLDBEQUFPQTs0QkFBQ2MsT0FBT04sVUFBVU8sZUFBZTs7Z0NBQ3RDTix3QkFBVSw4REFBQ0Y7b0NBQVcsR0FBR0MsU0FBUzs7Ozs7OzhDQUNuQyw4REFBQ1QsMERBQWNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs4QkFHbkIsOERBQUNLLCtFQUFrQkE7b0JBQUNZLGVBQWUsS0FBSzs7Ozs7Ozs7Ozs7OztBQUloRCxDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vYW5hYmFkYS8uL3BhZ2VzL19hcHAudHN4PzJmYmUiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICcuLi9zdHlsZXMvZm9udC5jc3MnO1xyXG5cclxuaW1wb3J0IHsgUmVhY3RFbGVtZW50LCBSZWFjdE5vZGUsIHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7IE5leHRQYWdlIH0gZnJvbSAnbmV4dCc7XHJcbmltcG9ydCB0eXBlIHsgQXBwUHJvcHMgfSBmcm9tICduZXh0L2FwcCc7XHJcbmltcG9ydCB7IFRoZW1lUHJvdmlkZXIgfSBmcm9tICdzdHlsZWQtY29tcG9uZW50cyc7XHJcbmltcG9ydCBHbG9iYWxTdHlsZSBmcm9tICcuLi9zdHlsZXMvR2xvYmFsU3R5bGUnO1xyXG5pbXBvcnQgeyB0aGVtZSB9IGZyb20gJy4uL3N0eWxlcy90aGVtZSc7XHJcbmltcG9ydCB7IFRvYXN0Q29udGFpbmVyLCB0b2FzdCB9IGZyb20gJ3JlYWN0LXRvYXN0aWZ5JztcclxuaW1wb3J0ICdyZWFjdC10b2FzdGlmeS9kaXN0L1JlYWN0VG9hc3RpZnkuY3NzJztcclxuaW1wb3J0IHtcclxuICBIeWRyYXRlLFxyXG4gIFF1ZXJ5Q2xpZW50LFxyXG4gIFF1ZXJ5Q2xpZW50UHJvdmlkZXJcclxufSBmcm9tICdAdGFuc3RhY2svcmVhY3QtcXVlcnknO1xyXG5pbXBvcnQgeyBkZWZhdWx0UXVlcnlDbGllbnRPcHRpb25zIH0gZnJvbSAnLi4vcXVyaWVzL3F1ZXJ5Q2xpZW50JztcclxuaW1wb3J0IHsgUmVhY3RRdWVyeURldnRvb2xzIH0gZnJvbSAnQHRhbnN0YWNrL3JlYWN0LXF1ZXJ5LWRldnRvb2xzJztcclxuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHsgQ29va2llcyB9IGZyb20gJ3JlYWN0LWNvb2tpZSc7XHJcbmltcG9ydCB1c2VVc2VyIGZyb20gJy4uL3F1cmllcy9ob29rcy91c2VyL3VzZVVzZXInO1xyXG5pbXBvcnQgeyB1c2VOb3RpZmljYXRpb25TdG9tcCB9IGZyb20gJy4uL2xpYi9ob29rcy9zb2NrZXQvdXNlTm90aWZpY2F0aW9uU3RvbXAnO1xyXG5pbXBvcnQgeyBub3RpZmljYXRpb25zQXBpIH0gZnJvbSAnLi4vc2VydmljZXMvYXBpJztcclxuaW1wb3J0IHdpdGhBdXRoIGZyb20gJy4uL2NvbXBvbmVudHMvaG9jL3dpdGhBdXRoJztcclxuXHJcbmV4cG9ydCB0eXBlIE5leHRQYWdlV2l0aExheW91dDxQID0gUmVjb3JkPHN0cmluZywgbmV2ZXI+LCBJUCA9IFA+ID0gTmV4dFBhZ2U8XHJcbiAgUCxcclxuICBJUFxyXG4+ICYge1xyXG4gIGdldExheW91dD86IChwYWdlOiBSZWFjdEVsZW1lbnQpID0+IFJlYWN0Tm9kZTtcclxufTtcclxuXHJcbnR5cGUgQXBwUHJvcHNXaXRoTGF5b3V0ID0gQXBwUHJvcHMgJiB7XHJcbiAgQ29tcG9uZW50OiBOZXh0UGFnZVdpdGhMYXlvdXQ7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBBcHAoeyBDb21wb25lbnQsIHBhZ2VQcm9wcyB9OiBBcHBQcm9wc1dpdGhMYXlvdXQpIHtcclxuICBjb25zdCBnZXRMYXlvdXQgPSBDb21wb25lbnQuZ2V0TGF5b3V0ID8/ICgocGFnZSkgPT4gcGFnZSk7XHJcblxyXG4gIGNvbnN0IFtxdWVyeUNsaWVudF0gPSB1c2VTdGF0ZShcclxuICAgICgpID0+IG5ldyBRdWVyeUNsaWVudCh7IGRlZmF1bHRPcHRpb25zOiBkZWZhdWx0UXVlcnlDbGllbnRPcHRpb25zIH0pXHJcbiAgKTtcclxuXHJcbiAgLy8gdXJs7J20IG1566GcIOyLnOyeke2VmOqxsOuCmCBjaGF07Jy866GcIOyLnOyeke2VmOqxsOuCmCBub3RpZmljYXRpb25z6rGw64KYIGFkZOuhnCDrgZ3rgpjqsbDrgpggZWRpdOycvOuhnCDrgZ3rgpjrqbQgd2l0aEF1dGgg7KCB7JqpXHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8PlxyXG4gICAgICA8UXVlcnlDbGllbnRQcm92aWRlciBjbGllbnQ9e3F1ZXJ5Q2xpZW50fT5cclxuICAgICAgICA8VGhlbWVQcm92aWRlciB0aGVtZT17dGhlbWV9PlxyXG4gICAgICAgICAgPEdsb2JhbFN0eWxlIC8+XHJcbiAgICAgICAgICA8SHlkcmF0ZSBzdGF0ZT17cGFnZVByb3BzLmRlaHlkcmF0ZWRTdGF0ZX0+XHJcbiAgICAgICAgICAgIHtnZXRMYXlvdXQoPENvbXBvbmVudCB7Li4ucGFnZVByb3BzfSAvPil9XHJcbiAgICAgICAgICAgIDxUb2FzdENvbnRhaW5lciAvPlxyXG4gICAgICAgICAgPC9IeWRyYXRlPlxyXG4gICAgICAgIDwvVGhlbWVQcm92aWRlcj5cclxuICAgICAgICA8UmVhY3RRdWVyeURldnRvb2xzIGluaXRpYWxJc09wZW49e2ZhbHNlfSAvPlxyXG4gICAgICA8L1F1ZXJ5Q2xpZW50UHJvdmlkZXI+XHJcbiAgICA8Lz5cclxuICApO1xyXG59XHJcbiJdLCJuYW1lcyI6WyJ1c2VTdGF0ZSIsIlRoZW1lUHJvdmlkZXIiLCJHbG9iYWxTdHlsZSIsInRoZW1lIiwiVG9hc3RDb250YWluZXIiLCJIeWRyYXRlIiwiUXVlcnlDbGllbnQiLCJRdWVyeUNsaWVudFByb3ZpZGVyIiwiZGVmYXVsdFF1ZXJ5Q2xpZW50T3B0aW9ucyIsIlJlYWN0UXVlcnlEZXZ0b29scyIsIlJlYWN0IiwiQXBwIiwiQ29tcG9uZW50IiwicGFnZVByb3BzIiwiZ2V0TGF5b3V0IiwicGFnZSIsInF1ZXJ5Q2xpZW50IiwiZGVmYXVsdE9wdGlvbnMiLCJjbGllbnQiLCJzdGF0ZSIsImRlaHlkcmF0ZWRTdGF0ZSIsImluaXRpYWxJc09wZW4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/_app.tsx\n");

/***/ }),

/***/ "./quries/queryClient.ts":
/*!*******************************!*\
  !*** ./quries/queryClient.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"defaultQueryClientOptions\": () => (/* binding */ defaultQueryClientOptions),\n/* harmony export */   \"queryClient\": () => (/* binding */ queryClient)\n/* harmony export */ });\n/* harmony import */ var _tanstack_react_query__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @tanstack/react-query */ \"@tanstack/react-query\");\n/* harmony import */ var _tanstack_react_query__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_tanstack_react_query__WEBPACK_IMPORTED_MODULE_0__);\n\nconst queryErrorHandler = (error)=>{\n    const title = error instanceof Error ? error.message : \"error connecting to server\";\n    console.log(title, \"error 핸들링여기서 해봄\");\n// TODO: 토스트 UI 만들기\n};\nconst defaultQueryClientOptions = {\n    queries: {\n        onError: queryErrorHandler,\n        staleTime: 600000,\n        cacheTime: 900000,\n        refetchOnMount: false,\n        refetchOnWindowFocus: false,\n        refetchOnReconnect: false,\n        suspense: true\n    },\n    // TODO: mutation 옵션 설정\n    mutations: {\n        onError: queryErrorHandler\n    }\n};\nconst queryClient = new _tanstack_react_query__WEBPACK_IMPORTED_MODULE_0__.QueryClient({\n    defaultOptions: defaultQueryClientOptions\n});\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9xdXJpZXMvcXVlcnlDbGllbnQudHMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUFvRDtBQUVwRCxNQUFNQyxvQkFBb0IsQ0FBQ0MsUUFBeUI7SUFDbEQsTUFBTUMsUUFDSkQsaUJBQWlCRSxRQUFRRixNQUFNRyxPQUFPLEdBQUcsNEJBQTRCO0lBQ3ZFQyxRQUFRQyxHQUFHLENBQUNKLE9BQU87QUFDbkIsbUJBQW1CO0FBQ3JCO0FBRU8sTUFBTUssNEJBQTRCO0lBQ3ZDQyxTQUFTO1FBQ1BDLFNBQVNUO1FBQ1RVLFdBQVc7UUFDWEMsV0FBVztRQUNYQyxnQkFBZ0IsS0FBSztRQUNyQkMsc0JBQXNCLEtBQUs7UUFDM0JDLG9CQUFvQixLQUFLO1FBQ3pCQyxVQUFVLElBQUk7SUFDaEI7SUFDQSx1QkFBdUI7SUFDdkJDLFdBQVc7UUFDVFAsU0FBU1Q7SUFDWDtBQUNGLEVBQUU7QUFFSyxNQUFNaUIsY0FBYyxJQUFJbEIsOERBQVdBLENBQUM7SUFDekNtQixnQkFBZ0JYO0FBQ2xCLEdBQUciLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9hbmFiYWRhLy4vcXVyaWVzL3F1ZXJ5Q2xpZW50LnRzPzk3ZDEiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgUXVlcnlDbGllbnQgfSBmcm9tICdAdGFuc3RhY2svcmVhY3QtcXVlcnknO1xyXG5cclxuY29uc3QgcXVlcnlFcnJvckhhbmRsZXIgPSAoZXJyb3I6IHVua25vd24pOiB2b2lkID0+IHtcclxuICBjb25zdCB0aXRsZSA9XHJcbiAgICBlcnJvciBpbnN0YW5jZW9mIEVycm9yID8gZXJyb3IubWVzc2FnZSA6ICdlcnJvciBjb25uZWN0aW5nIHRvIHNlcnZlcic7XHJcbiAgY29uc29sZS5sb2codGl0bGUsICdlcnJvciDtlbjrk6Trp4Hsl6zquLDshJwg7ZW067SEJyk7XHJcbiAgLy8gVE9ETzog7Yag7Iqk7Yq4IFVJIOunjOuTpOq4sFxyXG59O1xyXG5cclxuZXhwb3J0IGNvbnN0IGRlZmF1bHRRdWVyeUNsaWVudE9wdGlvbnMgPSB7XHJcbiAgcXVlcmllczoge1xyXG4gICAgb25FcnJvcjogcXVlcnlFcnJvckhhbmRsZXIsXHJcbiAgICBzdGFsZVRpbWU6IDYwMDAwMCwgLy8gMTBtaW51dGVzXHJcbiAgICBjYWNoZVRpbWU6IDkwMDAwMCwgLy8gMTVtaW51dGVzXHJcbiAgICByZWZldGNoT25Nb3VudDogZmFsc2UsXHJcbiAgICByZWZldGNoT25XaW5kb3dGb2N1czogZmFsc2UsXHJcbiAgICByZWZldGNoT25SZWNvbm5lY3Q6IGZhbHNlLFxyXG4gICAgc3VzcGVuc2U6IHRydWVcclxuICB9LFxyXG4gIC8vIFRPRE86IG11dGF0aW9uIOyYteyFmCDshKTsoJVcclxuICBtdXRhdGlvbnM6IHtcclxuICAgIG9uRXJyb3I6IHF1ZXJ5RXJyb3JIYW5kbGVyXHJcbiAgfVxyXG59O1xyXG5cclxuZXhwb3J0IGNvbnN0IHF1ZXJ5Q2xpZW50ID0gbmV3IFF1ZXJ5Q2xpZW50KHtcclxuICBkZWZhdWx0T3B0aW9uczogZGVmYXVsdFF1ZXJ5Q2xpZW50T3B0aW9uc1xyXG59KTtcclxuIl0sIm5hbWVzIjpbIlF1ZXJ5Q2xpZW50IiwicXVlcnlFcnJvckhhbmRsZXIiLCJlcnJvciIsInRpdGxlIiwiRXJyb3IiLCJtZXNzYWdlIiwiY29uc29sZSIsImxvZyIsImRlZmF1bHRRdWVyeUNsaWVudE9wdGlvbnMiLCJxdWVyaWVzIiwib25FcnJvciIsInN0YWxlVGltZSIsImNhY2hlVGltZSIsInJlZmV0Y2hPbk1vdW50IiwicmVmZXRjaE9uV2luZG93Rm9jdXMiLCJyZWZldGNoT25SZWNvbm5lY3QiLCJzdXNwZW5zZSIsIm11dGF0aW9ucyIsInF1ZXJ5Q2xpZW50IiwiZGVmYXVsdE9wdGlvbnMiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./quries/queryClient.ts\n");

/***/ }),

/***/ "./styles/GlobalStyle.tsx":
/*!********************************!*\
  !*** ./styles/GlobalStyle.tsx ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ \"styled-components\");\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);\n\nconst GlobalStyle = styled_components__WEBPACK_IMPORTED_MODULE_0__.createGlobalStyle`\r\n/* http://meyerweb.com/eric/tools/css/reset/ \r\n   v2.0 | 20110126\r\n   License: none (public domain)\r\n*/\r\n\r\nhtml, body, div, span, applet, object, iframe,\r\nh1, h2, h3, h4, h5, h6, p, blockquote, pre,\r\na, abbr, acronym, address, big, cite, code,\r\ndel, dfn, em, img, ins, kbd, q, s, samp,\r\nsmall, strike, strong, sub, sup, tt, var,\r\nb, u, i, center,\r\ndl, dt, dd, ol, ul, li,\r\nfieldset, form, label, legend,\r\ntable, caption, tbody, tfoot, thead, tr, th, td,\r\narticle, aside, canvas, details, embed, \r\nfigure, figcaption, footer, header, hgroup, \r\nmenu, nav, output, ruby, section, summary,\r\ntime, mark, audio, video {\r\n\tmargin: 0;\r\n\tpadding: 0;\r\n\tborder: 0;\r\n\t\r\n\tfont: inherit;\r\n\tvertical-align: baseline;\r\n\t\r\n}\r\n/* HTML5 display-role reset for older browsers */\r\narticle, aside, details, figcaption, figure, \r\nfooter, header, hgroup, menu, nav, section {\r\n\tdisplay: block;\r\n}\r\nhtml {\r\n\tfont-family: 'Spoqa Han Sans Neo','Noto Sans KR', 'sans-serif'; \r\n\tfont-size: 14px;\r\n}\r\nbody {\r\n\tline-height: 1;\r\n}\r\nol, ul {\r\n\tlist-style: none;\r\n}\r\nblockquote, q {\r\n\tquotes: none;\r\n}\r\nblockquote:before, blockquote:after,\r\nq:before, q:after {\r\n\tcontent: '';\r\n\tcontent: none;\r\n}\r\ntable {\r\n\tborder-collapse: collapse;\r\n\tborder-spacing: 0;\r\n}\r\n`;\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (GlobalStyle);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zdHlsZXMvR2xvYmFsU3R5bGUudHN4LmpzIiwibWFwcGluZ3MiOiI7Ozs7OztBQUFzRDtBQUV0RCxNQUFNQyxjQUFjRCxnRUFBaUIsQ0FBQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBc0R0QyxDQUFDO0FBRUQsaUVBQWVDLFdBQVdBLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9hbmFiYWRhLy4vc3R5bGVzL0dsb2JhbFN0eWxlLnRzeD81M2IzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGNyZWF0ZUdsb2JhbFN0eWxlIH0gZnJvbSAnc3R5bGVkLWNvbXBvbmVudHMnO1xyXG5cclxuY29uc3QgR2xvYmFsU3R5bGUgPSBjcmVhdGVHbG9iYWxTdHlsZWBcclxuLyogaHR0cDovL21leWVyd2ViLmNvbS9lcmljL3Rvb2xzL2Nzcy9yZXNldC8gXHJcbiAgIHYyLjAgfCAyMDExMDEyNlxyXG4gICBMaWNlbnNlOiBub25lIChwdWJsaWMgZG9tYWluKVxyXG4qL1xyXG5cclxuaHRtbCwgYm9keSwgZGl2LCBzcGFuLCBhcHBsZXQsIG9iamVjdCwgaWZyYW1lLFxyXG5oMSwgaDIsIGgzLCBoNCwgaDUsIGg2LCBwLCBibG9ja3F1b3RlLCBwcmUsXHJcbmEsIGFiYnIsIGFjcm9ueW0sIGFkZHJlc3MsIGJpZywgY2l0ZSwgY29kZSxcclxuZGVsLCBkZm4sIGVtLCBpbWcsIGlucywga2JkLCBxLCBzLCBzYW1wLFxyXG5zbWFsbCwgc3RyaWtlLCBzdHJvbmcsIHN1Yiwgc3VwLCB0dCwgdmFyLFxyXG5iLCB1LCBpLCBjZW50ZXIsXHJcbmRsLCBkdCwgZGQsIG9sLCB1bCwgbGksXHJcbmZpZWxkc2V0LCBmb3JtLCBsYWJlbCwgbGVnZW5kLFxyXG50YWJsZSwgY2FwdGlvbiwgdGJvZHksIHRmb290LCB0aGVhZCwgdHIsIHRoLCB0ZCxcclxuYXJ0aWNsZSwgYXNpZGUsIGNhbnZhcywgZGV0YWlscywgZW1iZWQsIFxyXG5maWd1cmUsIGZpZ2NhcHRpb24sIGZvb3RlciwgaGVhZGVyLCBoZ3JvdXAsIFxyXG5tZW51LCBuYXYsIG91dHB1dCwgcnVieSwgc2VjdGlvbiwgc3VtbWFyeSxcclxudGltZSwgbWFyaywgYXVkaW8sIHZpZGVvIHtcclxuXHRtYXJnaW46IDA7XHJcblx0cGFkZGluZzogMDtcclxuXHRib3JkZXI6IDA7XHJcblx0XHJcblx0Zm9udDogaW5oZXJpdDtcclxuXHR2ZXJ0aWNhbC1hbGlnbjogYmFzZWxpbmU7XHJcblx0XHJcbn1cclxuLyogSFRNTDUgZGlzcGxheS1yb2xlIHJlc2V0IGZvciBvbGRlciBicm93c2VycyAqL1xyXG5hcnRpY2xlLCBhc2lkZSwgZGV0YWlscywgZmlnY2FwdGlvbiwgZmlndXJlLCBcclxuZm9vdGVyLCBoZWFkZXIsIGhncm91cCwgbWVudSwgbmF2LCBzZWN0aW9uIHtcclxuXHRkaXNwbGF5OiBibG9jaztcclxufVxyXG5odG1sIHtcclxuXHRmb250LWZhbWlseTogJ1Nwb3FhIEhhbiBTYW5zIE5lbycsJ05vdG8gU2FucyBLUicsICdzYW5zLXNlcmlmJzsgXHJcblx0Zm9udC1zaXplOiAxNHB4O1xyXG59XHJcbmJvZHkge1xyXG5cdGxpbmUtaGVpZ2h0OiAxO1xyXG59XHJcbm9sLCB1bCB7XHJcblx0bGlzdC1zdHlsZTogbm9uZTtcclxufVxyXG5ibG9ja3F1b3RlLCBxIHtcclxuXHRxdW90ZXM6IG5vbmU7XHJcbn1cclxuYmxvY2txdW90ZTpiZWZvcmUsIGJsb2NrcXVvdGU6YWZ0ZXIsXHJcbnE6YmVmb3JlLCBxOmFmdGVyIHtcclxuXHRjb250ZW50OiAnJztcclxuXHRjb250ZW50OiBub25lO1xyXG59XHJcbnRhYmxlIHtcclxuXHRib3JkZXItY29sbGFwc2U6IGNvbGxhcHNlO1xyXG5cdGJvcmRlci1zcGFjaW5nOiAwO1xyXG59XHJcbmA7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBHbG9iYWxTdHlsZTtcclxuIl0sIm5hbWVzIjpbImNyZWF0ZUdsb2JhbFN0eWxlIiwiR2xvYmFsU3R5bGUiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./styles/GlobalStyle.tsx\n");

/***/ }),

/***/ "./styles/theme.ts":
/*!*************************!*\
  !*** ./styles/theme.ts ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"theme\": () => (/* binding */ theme)\n/* harmony export */ });\nconst theme = {\n    colors: {\n        primary1: \"#091e3b\",\n        primary2: \"#07162c\",\n        primary3: \"#3B8EF5\",\n        primary4: \"#0000aa\",\n        primary5: \"#ccccff\",\n        second1: \"#c30000\",\n        second2: \"#ffcdcd\",\n        white1: \"#ffffff\",\n        gray1: \"#d0d0d0\",\n        gray2: \"#333333\",\n        gray3: \"#f1f1f1\",\n        gray4: \"#e9e9e9\",\n        gray5: \"#777777\"\n    }\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zdHlsZXMvdGhlbWUudHMuanMiLCJtYXBwaW5ncyI6Ijs7OztBQUVPLE1BQU1BLFFBQXNCO0lBQ2pDQyxRQUFRO1FBQ05DLFVBQVU7UUFDVkMsVUFBVTtRQUNWQyxVQUFVO1FBQ1ZDLFVBQVU7UUFDVkMsVUFBVTtRQUNWQyxTQUFTO1FBQ1RDLFNBQVM7UUFDVEMsUUFBUTtRQUNSQyxPQUFPO1FBQ1BDLE9BQU87UUFDUEMsT0FBTztRQUNQQyxPQUFPO1FBQ1BDLE9BQU87SUFDVDtBQUNGLEVBQUUiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9hbmFiYWRhLy4vc3R5bGVzL3RoZW1lLnRzPzY5NmIiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRGVmYXVsdFRoZW1lIH0gZnJvbSAnc3R5bGVkLWNvbXBvbmVudHMnO1xyXG5cclxuZXhwb3J0IGNvbnN0IHRoZW1lOiBEZWZhdWx0VGhlbWUgPSB7XHJcbiAgY29sb3JzOiB7XHJcbiAgICBwcmltYXJ5MTogJyMwOTFlM2InLFxyXG4gICAgcHJpbWFyeTI6ICcjMDcxNjJjJyxcclxuICAgIHByaW1hcnkzOiAnIzNCOEVGNScsXHJcbiAgICBwcmltYXJ5NDogJyMwMDAwYWEnLFxyXG4gICAgcHJpbWFyeTU6ICcjY2NjY2ZmJyxcclxuICAgIHNlY29uZDE6ICcjYzMwMDAwJyxcclxuICAgIHNlY29uZDI6ICcjZmZjZGNkJyxcclxuICAgIHdoaXRlMTogJyNmZmZmZmYnLFxyXG4gICAgZ3JheTE6ICcjZDBkMGQwJyxcclxuICAgIGdyYXkyOiAnIzMzMzMzMycsXHJcbiAgICBncmF5MzogJyNmMWYxZjEnLFxyXG4gICAgZ3JheTQ6ICcjZTllOWU5JyxcclxuICAgIGdyYXk1OiAnIzc3Nzc3NydcclxuICB9XHJcbn07XHJcbiJdLCJuYW1lcyI6WyJ0aGVtZSIsImNvbG9ycyIsInByaW1hcnkxIiwicHJpbWFyeTIiLCJwcmltYXJ5MyIsInByaW1hcnk0IiwicHJpbWFyeTUiLCJzZWNvbmQxIiwic2Vjb25kMiIsIndoaXRlMSIsImdyYXkxIiwiZ3JheTIiLCJncmF5MyIsImdyYXk0IiwiZ3JheTUiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./styles/theme.ts\n");

/***/ }),

/***/ "./node_modules/react-toastify/dist/ReactToastify.css":
/*!************************************************************!*\
  !*** ./node_modules/react-toastify/dist/ReactToastify.css ***!
  \************************************************************/
/***/ (() => {



/***/ }),

/***/ "./styles/font.css":
/*!*************************!*\
  !*** ./styles/font.css ***!
  \*************************/
/***/ (() => {



/***/ }),

/***/ "@tanstack/react-query":
/*!****************************************!*\
  !*** external "@tanstack/react-query" ***!
  \****************************************/
/***/ ((module) => {

"use strict";
module.exports = require("@tanstack/react-query");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

"use strict";
module.exports = require("react");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-dev-runtime");

/***/ }),

/***/ "styled-components":
/*!************************************!*\
  !*** external "styled-components" ***!
  \************************************/
/***/ ((module) => {

"use strict";
module.exports = require("styled-components");

/***/ }),

/***/ "@tanstack/react-query-devtools":
/*!*************************************************!*\
  !*** external "@tanstack/react-query-devtools" ***!
  \*************************************************/
/***/ ((module) => {

"use strict";
module.exports = import("@tanstack/react-query-devtools");;

/***/ }),

/***/ "react-toastify":
/*!*********************************!*\
  !*** external "react-toastify" ***!
  \*********************************/
/***/ ((module) => {

"use strict";
module.exports = import("react-toastify");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/_app.tsx"));
module.exports = __webpack_exports__;

})();