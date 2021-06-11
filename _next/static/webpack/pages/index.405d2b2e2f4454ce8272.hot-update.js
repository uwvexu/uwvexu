/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./components/Awards.js":
/*!******************************!*\
  !*** ./components/Awards.js ***!
  \******************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! styled-components */ \"./node_modules/styled-components/dist/styled-components.browser.esm.js\");\n/* harmony import */ var _Section__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Section */ \"./components/Section.js\");\n/* harmony import */ var _Styles__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Styles */ \"./components/Styles.js\");\n/* harmony import */ var _ImageSection__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./ImageSection */ \"./components/ImageSection.js\");\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\nvar _jsxFileName = \"/Users/alexgirard/Documents/VEXU/uwvexu/components/Awards.js\",\n    _this = undefined;\n\n\n\n\n\n\nvar StyledColumns = (0,styled_components__WEBPACK_IMPORTED_MODULE_5__.default)(_Styles__WEBPACK_IMPORTED_MODULE_3__.Columns).withConfig({\n  displayName: \"Awards__StyledColumns\",\n  componentId: \"sc-50i6gt-0\"\n})([\"@media screen and (max-width:\", \"px){display:none;}\"], _Styles__WEBPACK_IMPORTED_MODULE_3__.responsiveSizes.smallScreen);\n_c = StyledColumns;\nvar CompName = styled_components__WEBPACK_IMPORTED_MODULE_5__.default.h5.withConfig({\n  displayName: \"Awards__CompName\",\n  componentId: \"sc-50i6gt-1\"\n})([\"color:\", \";margin-top:\", \";\"], _Styles__WEBPACK_IMPORTED_MODULE_3__.yellow, function (props) {\n  return props.space ? '5rem' : 0;\n});\n_c2 = CompName;\nvar ListParent = styled_components__WEBPACK_IMPORTED_MODULE_5__.default.div.withConfig({\n  displayName: \"Awards__ListParent\",\n  componentId: \"sc-50i6gt-2\"\n})([\"text-align:center;\"]);\n_c3 = ListParent;\nvar ListWrapper = styled_components__WEBPACK_IMPORTED_MODULE_5__.default.div.withConfig({\n  displayName: \"Awards__ListWrapper\",\n  componentId: \"sc-50i6gt-3\"\n})([\"display:inline-block;text-align:left;\"]);\n_c4 = ListWrapper;\nvar ImgWrapper = styled_components__WEBPACK_IMPORTED_MODULE_5__.default.div.withConfig({\n  displayName: \"Awards__ImgWrapper\",\n  componentId: \"sc-50i6gt-4\"\n})([\"@media screen and (max-width:\", \"px){margin-bottom:3rem;}\"], _Styles__WEBPACK_IMPORTED_MODULE_3__.responsiveSizes.smallScreen);\n_c5 = ImgWrapper;\nvar MobileWrapper = styled_components__WEBPACK_IMPORTED_MODULE_5__.default.div.withConfig({\n  displayName: \"Awards__MobileWrapper\",\n  componentId: \"sc-50i6gt-5\"\n})([\"display:none;@media screen and (max-width:\", \"px){display:block;}\"], _Styles__WEBPACK_IMPORTED_MODULE_3__.responsiveSizes.smallScreen);\n_c6 = MobileWrapper;\n\nvar AwardsList = function AwardsList(_ref) {\n  var awards = _ref.awards;\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(ListParent, {\n    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(ListWrapper, {\n      children: awards.map(function (_ref2, index) {\n        var comp = _ref2.comp,\n            award = _ref2.award,\n            year = _ref2.year;\n        return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(CompName, {\n            space: index != 0,\n            children: comp\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 48,\n            columnNumber: 11\n          }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Styles__WEBPACK_IMPORTED_MODULE_3__.Color, {\n            color: \"white\",\n            children: [award.map(function (a) {\n              return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h4\", {\n                children: award\n              }, void 0, false, {\n                fileName: _jsxFileName,\n                lineNumber: 50,\n                columnNumber: 29\n              }, _this);\n            }), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h4\", {\n              children: year\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 51,\n              columnNumber: 13\n            }, _this)]\n          }, void 0, true, {\n            fileName: _jsxFileName,\n            lineNumber: 49,\n            columnNumber: 11\n          }, _this)]\n        }, index, true, {\n          fileName: _jsxFileName,\n          lineNumber: 47,\n          columnNumber: 9\n        }, _this);\n      })\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 45,\n      columnNumber: 5\n    }, _this)\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 44,\n    columnNumber: 3\n  }, _this);\n};\n\n_c7 = AwardsList;\n\nvar Images = function Images() {\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(ImgWrapper, {\n    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_ImageSection__WEBPACK_IMPORTED_MODULE_4__.default, {\n      imageUrls: [['static/awards.png', '2020 Awards'], ['static/robot-side.jpg', '24\" Robot']]\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 61,\n      columnNumber: 5\n    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_ImageSection__WEBPACK_IMPORTED_MODULE_4__.default, {\n      imageUrls: [['static/comp2.jpg', 'VEX U Canada Competition', '70% 70%'], ['static/intake.jpg', 'Intake Idea', 'top']]\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 62,\n      columnNumber: 5\n    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_ImageSection__WEBPACK_IMPORTED_MODULE_4__.default, {\n      imageUrls: [['static/robot-angle.jpg', 'Double Reverse 4 Bar', '10% 70%'], ['static/vexu-can.jpg', 'Robot + Design Journal', '90% 90%']]\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 63,\n      columnNumber: 5\n    }, _this)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 60,\n    columnNumber: 3\n  }, _this);\n};\n\n_c8 = Images;\n\nvar MobileImg = function MobileImg() {\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(ImgWrapper, {\n    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_ImageSection__WEBPACK_IMPORTED_MODULE_4__.default, {\n      imageUrls: [['static/awards.png', '2020 Awards', '60% 70%']]\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 67,\n      columnNumber: 37\n    }, _this)\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 67,\n    columnNumber: 25\n  }, _this);\n};\n\n_c9 = MobileImg;\n\nvar Awards = function Awards(_ref3) {\n  var awards = _ref3.awards;\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Section__WEBPACK_IMPORTED_MODULE_2__.default, {\n    id: \"awards\",\n    title: \"AWARDS\",\n    bg: \"black\",\n    imagesUnderTitle: true,\n    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(StyledColumns, {\n      cols: 2,\n      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Images, {}, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 73,\n        columnNumber: 9\n      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(AwardsList, {\n        awards: awards\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 74,\n        columnNumber: 9\n      }, _this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 72,\n      columnNumber: 7\n    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(MobileWrapper, {\n      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(MobileImg, {}, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 79,\n        columnNumber: 9\n      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(AwardsList, {\n        awards: awards\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 80,\n        columnNumber: 9\n      }, _this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 78,\n      columnNumber: 7\n    }, _this)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 70,\n    columnNumber: 3\n  }, _this);\n};\n\n_c10 = Awards;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Awards);\n\nvar _c, _c2, _c3, _c4, _c5, _c6, _c7, _c8, _c9, _c10;\n\n$RefreshReg$(_c, \"StyledColumns\");\n$RefreshReg$(_c2, \"CompName\");\n$RefreshReg$(_c3, \"ListParent\");\n$RefreshReg$(_c4, \"ListWrapper\");\n$RefreshReg$(_c5, \"ImgWrapper\");\n$RefreshReg$(_c6, \"MobileWrapper\");\n$RefreshReg$(_c7, \"AwardsList\");\n$RefreshReg$(_c8, \"Images\");\n$RefreshReg$(_c9, \"MobileImg\");\n$RefreshReg$(_c10, \"Awards\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9Bd2FyZHMuanM/MTRjNiJdLCJuYW1lcyI6WyJTdHlsZWRDb2x1bW5zIiwic3R5bGVkIiwiQ29sdW1ucyIsInJlc3BvbnNpdmVTaXplcyIsIkNvbXBOYW1lIiwieWVsbG93IiwicHJvcHMiLCJzcGFjZSIsIkxpc3RQYXJlbnQiLCJMaXN0V3JhcHBlciIsIkltZ1dyYXBwZXIiLCJNb2JpbGVXcmFwcGVyIiwiQXdhcmRzTGlzdCIsImF3YXJkcyIsIm1hcCIsImluZGV4IiwiY29tcCIsImF3YXJkIiwieWVhciIsImEiLCJJbWFnZXMiLCJNb2JpbGVJbWciLCJBd2FyZHMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQSxJQUFNQSxhQUFhLEdBQUdDLDBEQUFNLENBQUNDLDRDQUFELENBQVQ7QUFBQTtBQUFBO0FBQUEsNERBQ2VDLGdFQURmLENBQW5CO0tBQU1ILGE7QUFNTixJQUFNSSxRQUFRLEdBQUdILG9FQUFIO0FBQUE7QUFBQTtBQUFBLG9DQUNISSwyQ0FERyxFQUVFLFVBQUFDLEtBQUs7QUFBQSxTQUFJQSxLQUFLLENBQUNDLEtBQU4sR0FBYyxNQUFkLEdBQXVCLENBQTNCO0FBQUEsQ0FGUCxDQUFkO01BQU1ILFE7QUFLTixJQUFNSSxVQUFVLEdBQUdQLHFFQUFIO0FBQUE7QUFBQTtBQUFBLDBCQUFoQjtNQUFNTyxVO0FBSU4sSUFBTUMsV0FBVyxHQUFHUixxRUFBSDtBQUFBO0FBQUE7QUFBQSw2Q0FBakI7TUFBTVEsVztBQUtOLElBQU1DLFVBQVUsR0FBR1QscUVBQUg7QUFBQTtBQUFBO0FBQUEsa0VBR2tCRSxnRUFIbEIsQ0FBaEI7TUFBTU8sVTtBQVFOLElBQU1DLGFBQWEsR0FBR1YscUVBQUg7QUFBQTtBQUFBO0FBQUEsMEVBR2VFLGdFQUhmLENBQW5CO01BQU1RLGE7O0FBUU4sSUFBTUMsVUFBVSxHQUFHLFNBQWJBLFVBQWE7QUFBQSxNQUFH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QkFDRSw4REFBQyxTQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFERixlQUVFLDhEQUFDLFVBQUQ7QUFBWSxjQUFNLEVBQUVBO0FBQXBCO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFGRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFSSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FEYTtBQUFBLENBQWY7O09BQU1TLE07QUFnQk4sK0RBQWVBLE1BQWYiLCJmaWxlIjoiLi9jb21wb25lbnRzL0F3YXJkcy5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgc3R5bGVkIGZyb20gJ3N0eWxlZC1jb21wb25lbnRzJztcbmltcG9ydCBTZWN0aW9uIGZyb20gJy4vU2VjdGlvbic7XG5pbXBvcnQgeyB5ZWxsb3csIENvbHVtbnMsIENvbG9yLCByZXNwb25zaXZlU2l6ZXMgfSBmcm9tICcuL1N0eWxlcyc7XG5pbXBvcnQgSW1hZ2VTZWN0aW9uIGZyb20gJy4vSW1hZ2VTZWN0aW9uJztcblxuY29uc3QgU3R5bGVkQ29sdW1ucyA9IHN0eWxlZChDb2x1bW5zKWBcbiAgQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogJHtyZXNwb25zaXZlU2l6ZXMuc21hbGxTY3JlZW59cHgpIHtcbiAgICBkaXNwbGF5OiBub25lO1xuICB9XG5gO1xuXG5jb25zdCBDb21wTmFtZSA9IHN0eWxlZC5oNWBcbiAgY29sb3I6ICR7eWVsbG93fTtcbiAgbWFyZ2luLXRvcDogJHtwcm9wcyA9PiBwcm9wcy5zcGFjZSA/ICc1cmVtJyA6IDB9O1xuYDtcblxuY29uc3QgTGlzdFBhcmVudCA9IHN0eWxlZC5kaXZgXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbmA7XG5cbmNvbnN0IExpc3RXcmFwcGVyID0gc3R5bGVkLmRpdmBcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICB0ZXh0LWFsaWduOiBsZWZ0O1xuYDtcblxuY29uc3QgSW1nV3JhcHBlciA9IHN0eWxlZC5kaXZgXG4gIC8vIGZpbHRlcjogZ3JheXNjYWxlKDEwMCUpO1xuXG4gIEBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6ICR7cmVzcG9uc2l2ZVNpemVzLnNtYWxsU2NyZWVufXB4KSB7XG4gICAgbWFyZ2luLWJvdHRvbTogM3JlbTtcbiAgfVxuYDtcblxuY29uc3QgTW9iaWxlV3JhcHBlciA9IHN0eWxlZC5kaXZgXG4gIGRpc3BsYXk6IG5vbmU7XG5cbiAgQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogJHtyZXNwb25zaXZlU2l6ZXMuc21hbGxTY3JlZW59cHgpIHtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgfVxuYDtcblxuY29uc3QgQXdhcmRzTGlzdCA9ICh7IGF3YXJkcyB9KSA9PiAoXG4gIDxMaXN0UGFyZW50PlxuICAgIDxMaXN0V3JhcHBlcj5cbiAgICAgIHthd2FyZHMubWFwKCh7Y29tcCwgYXdhcmQsIHllYXJ9LCBpbmRleCkgPT4gKFxuICAgICAgICA8ZGl2IGtleT17aW5kZXh9PlxuICAgICAgICAgIDxDb21wTmFtZSBzcGFjZT17aW5kZXggIT0gMH0+e2NvbXB9PC9Db21wTmFtZT5cbiAgICAgICAgICA8Q29sb3IgY29sb3I9XCJ3aGl0ZVwiPlxuICAgICAgICAgICAge2F3YXJkLm1hcChhID0+IDxoND57YXdhcmR9PC9oND4pfVxuICAgICAgICAgICAgPGg0Pnt5ZWFyfTwvaDQ+XG4gICAgICAgICAgPC9Db2xvcj5cbiAgICAgICAgPC9kaXY+XG4gICAgICApKX1cbiAgICA8L0xpc3RXcmFwcGVyPlxuICA8L0xpc3RQYXJlbnQ+XG4pO1xuXG5jb25zdCBJbWFnZXMgPSAoKSA9PiAoXG4gIDxJbWdXcmFwcGVyPlxuICAgIDxJbWFnZVNlY3Rpb24gaW1hZ2VVcmxzPXtbWydzdGF0aWMvYXdhcmRzLnBuZycsICcyMDIwIEF3YXJkcyddLCBbJ3N0YXRpYy9yb2JvdC1zaWRlLmpwZycsICcyNFwiIFJvYm90J11dfSAvPlxuICAgIDxJbWFnZVNlY3Rpb24gaW1hZ2VVcmxzPXtbWydzdGF0aWMvY29tcDIuanBnJywgJ1ZFWCBVIENhbmFkYSBDb21wZXRpdGlvbicsICc3MCUgNzAlJ10sIFsnc3RhdGljL2ludGFrZS5qcGcnLCAnSW50YWtlIElkZWEnLCAndG9wJ11dfSAvPlxuICAgIDxJbWFnZVNlY3Rpb24gaW1hZ2VVcmxzPXtbWydzdGF0aWMvcm9ib3QtYW5nbGUuanBnJywgJ0RvdWJsZSBSZXZlcnNlIDQgQmFyJywgJzEwJSA3MCUnXSwgWydzdGF0aWMvdmV4dS1jYW4uanBnJywgJ1JvYm90ICsgRGVzaWduIEpvdXJuYWwnLCAnOTAlIDkwJSddXX0gLz5cbiAgPC9JbWdXcmFwcGVyPlxuKTtcblxuY29uc3QgTW9iaWxlSW1nID0gKCkgPT4gPEltZ1dyYXBwZXI+PEltYWdlU2VjdGlvbiBpbWFnZVVybHM9e1tbJ3N0YXRpYy9hd2FyZHMucG5nJywgJzIwMjAgQXdhcmRzJywgJzYwJSA3MCUnXV19IC8+PC9JbWdXcmFwcGVyPlxuXG5jb25zdCBBd2FyZHMgPSAoeyBhd2FyZHMgfSkgPT4gKFxuICA8U2VjdGlvbiBpZD1cImF3YXJkc1wiIHRpdGxlPVwiQVdBUkRTXCIgYmc9XCJibGFja1wiIGltYWdlc1VuZGVyVGl0bGU+XG4gICAgICB7Lyogc2NyZWVuID4gMTAyNCAqL31cbiAgICAgIDxTdHlsZWRDb2x1bW5zIGNvbHM9ezJ9PlxuICAgICAgICA8SW1hZ2VzIC8+XG4gICAgICAgIDxBd2FyZHNMaXN0IGF3YXJkcz17YXdhcmRzfSAvPlxuICAgICAgPC9TdHlsZWRDb2x1bW5zPlxuXG4gICAgICB7Lyogc2NyZWVuIDw9IDEwMjQgKi99XG4gICAgICA8TW9iaWxlV3JhcHBlcj5cbiAgICAgICAgPE1vYmlsZUltZyAvPlxuICAgICAgICA8QXdhcmRzTGlzdCBhd2FyZHM9e2F3YXJkc30gLz5cbiAgICAgIDwvTW9iaWxlV3JhcHBlcj5cbiAgPC9TZWN0aW9uPlxuKTtcblxuZXhwb3J0IGRlZmF1bHQgQXdhcmRzO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/Awards.js\n");

/***/ })

});