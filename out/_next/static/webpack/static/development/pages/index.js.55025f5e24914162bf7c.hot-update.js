webpackHotUpdate("static/development/pages/index.js",{

/***/ "./components/Button.jsx":
/*!*******************************!*\
  !*** ./components/Button.jsx ***!
  \*******************************/
/*! exports provided: Button, DarkButton */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Button", function() { return Button; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DarkButton", function() { return DarkButton; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var _components_NextLink__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/NextLink */ "./components/NextLink.js");
/* harmony import */ var _Styles__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Styles */ "./components/Styles.jsx");
var _jsxFileName = "/Users/alexgirard/Documents/VEXU/uwvexu.ca/components/Button.jsx";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;



var StyledButton = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div.withConfig({
  displayName: "Button__StyledButton",
  componentId: "cxv2rm-0"
})(["display:inline-block;font-size:20px;cursor:pointer;user-select:none;border:2px solid black;color:black;padding:0.8rem 5rem;transition:all 0.2s;:hover{background-color:black;border-color:black;color:white;}@media screen and (max-width:", "px){padding:0.6rem 4rem;}@media screen and (max-width:", "px){padding:0.5rem 3rem;font-size:16px;}@media screen and (max-width:", "px){padding:0.4rem 2rem;}@media screen and (max-width:", "px){padding:0.3rem 1.5rem;font-size:12px;}@media screen and (max-width:", "px){padding:0.2rem 1rem;}"], _Styles__WEBPACK_IMPORTED_MODULE_3__["responsiveSizes"].largeScreen, _Styles__WEBPACK_IMPORTED_MODULE_3__["responsiveSizes"].smallScreen, _Styles__WEBPACK_IMPORTED_MODULE_3__["responsiveSizes"].tablet, _Styles__WEBPACK_IMPORTED_MODULE_3__["responsiveSizes"].largeMobile, _Styles__WEBPACK_IMPORTED_MODULE_3__["responsiveSizes"].smallMobile);
var StyledDarkButton = Object(styled_components__WEBPACK_IMPORTED_MODULE_1__["default"])(StyledButton).withConfig({
  displayName: "Button__StyledDarkButton",
  componentId: "cxv2rm-1"
})(["border:2px solid white;color:white;:hover{background-color:white;border-color:white;color:black;}"]);
/**
 * @param {{
 *   children: React.ReactNode;
 *   href: string;
 *   external?: boolean;
 * }} props
 */

var Button = function Button(props) {
  return __jsx(_components_NextLink__WEBPACK_IMPORTED_MODULE_2__["default"], {
    href: props.href,
    external: props.external,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 62
    },
    __self: this
  }, __jsx(StyledButton, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 63
    },
    __self: this
  }, props.children));
};
var DarkButton = function DarkButton(props) {
  return __jsx(_components_NextLink__WEBPACK_IMPORTED_MODULE_2__["default"], {
    href: props.href,
    external: props.external,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 70
    },
    __self: this
  }, __jsx(StyledDarkButton, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 71
    },
    __self: this
  }, props.children));
};

/***/ })

})
//# sourceMappingURL=index.js.55025f5e24914162bf7c.hot-update.js.map