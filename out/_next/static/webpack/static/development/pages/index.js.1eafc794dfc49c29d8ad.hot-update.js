webpackHotUpdate("static/development/pages/index.js",{

/***/ "./components/ImageSection.js":
/*!************************************!*\
  !*** ./components/ImageSection.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/slicedToArray */ "./node_modules/@babel/runtime-corejs2/helpers/esm/slicedToArray.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var _Styles__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Styles */ "./components/Styles.js");

var _jsxFileName = "/Users/alexgirard/Documents/VEXU/uwvexu.ca/components/ImageSection.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;



var FlexRow = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div.withConfig({
  displayName: "ImageSection__FlexRow",
  componentId: "sc-8l8lqr-0"
})(["display:flex;flex-direction:row;height:18.75rem;@media (max-width:", "px){>:nth-child(3){display:none;}}@media (max-width:576px){>:nth-child(2){display:none;}}"], _Styles__WEBPACK_IMPORTED_MODULE_3__["responsiveSizes"].smallScreen);
var ImageContainer = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div.withConfig({
  displayName: "ImageSection__ImageContainer",
  componentId: "sc-8l8lqr-1"
})(["display:flex;flex:1;justify-content:center;align-items:center;overflow:hidden;"]);
var Image = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div.withConfig({
  displayName: "ImageSection__Image",
  componentId: "sc-8l8lqr-2"
})(["flex-shrink:0;min-width:100%;min-height:100%;transition:all 0.5s;filter:grayscale(100%);background-image:url(", ");background-size:cover;background-repeat:no-repeat;background-position:", ";:hover{filter:grayscale(0%);background-color:rgba(211,177,0,0.85);background-blend-mode:darken;}"], function (props) {
  return props.src;
}, function (props) {
  return props.pos || 'center';
});
/* harmony default export */ __webpack_exports__["default"] = (function (props) {
  return __jsx(FlexRow, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 52
    },
    __self: this
  }, props.imageUrls.map(function (_ref, index) {
    var _ref2 = Object(_babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_ref, 2),
        url = _ref2[0],
        pos = _ref2[1];

    return __jsx(ImageContainer, {
      key: index,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 55
      },
      __self: this
    }, __jsx(Image, {
      src: url,
      pos: pos,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 56
      },
      __self: this
    }));
  }));
});

/***/ })

})
//# sourceMappingURL=index.js.1eafc794dfc49c29d8ad.hot-update.js.map