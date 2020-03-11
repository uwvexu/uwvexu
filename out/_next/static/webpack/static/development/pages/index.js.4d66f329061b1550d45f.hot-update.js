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
})(["display:flex;flex:1;justify-content:center;align-items:center;overflow:hidden;position:relative;"]);
var Image = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div.withConfig({
  displayName: "ImageSection__Image",
  componentId: "sc-8l8lqr-2"
})(["flex-shrink:0;min-width:100%;min-height:100%;transition:all 0.5s;z-index:0;background-image:url(", ");background-size:cover;background-repeat:no-repeat;background-position:", ";background-color:rgba(211,177,0,0);background-blend-mode:darken;:hover{}"], function (props) {
  return props.src;
}, function (props) {
  return props.pos || 'center';
});
var Overlay = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div.withConfig({
  displayName: "ImageSection__Overlay",
  componentId: "sc-8l8lqr-3"
})(["width:100%;height:100%;opacity:0;position:absolute;top:0px;left:0px;z-index:1;transition:all 0.5s;word-wrap:break-word;margin:2rem;> p{position:relative;color:black;font-weight:bold;}:hover{display:block;background-color:rgb(211,177,0);opacity:0.8;}"]);
var OverlayText = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div.withConfig({
  displayName: "ImageSection__OverlayText",
  componentId: "sc-8l8lqr-4"
})(["position:relative;"]);
/* harmony default export */ __webpack_exports__["default"] = (function (props) {
  return __jsx(FlexRow, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 83
    },
    __self: this
  }, props.imageUrls.map(function (_ref, index) {
    var _ref2 = Object(_babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_ref, 3),
        url = _ref2[0],
        msg = _ref2[1],
        pos = _ref2[2];

    return __jsx(ImageContainer, {
      key: index,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 86
      },
      __self: this
    }, __jsx(Image, {
      src: url,
      pos: pos,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 87
      },
      __self: this
    }), __jsx(Overlay, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 88
      },
      __self: this
    }, __jsx("p", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 88
      },
      __self: this
    }, msg)));
  }));
});

/***/ })

})
//# sourceMappingURL=index.js.4d66f329061b1550d45f.hot-update.js.map