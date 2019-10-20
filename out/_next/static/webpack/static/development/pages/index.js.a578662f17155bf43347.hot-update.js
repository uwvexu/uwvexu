webpackHotUpdate("static/development/pages/index.js",{

/***/ "./components/ImageGrid.jsx":
/*!**********************************!*\
  !*** ./components/ImageGrid.jsx ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var _BodySection__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./BodySection */ "./components/BodySection.jsx");
var _jsxFileName = "/Users/alexgirard/Documents/VEXU/uwvexu.ca/components/ImageGrid.jsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;



var Container = Object(styled_components__WEBPACK_IMPORTED_MODULE_1__["default"])(_BodySection__WEBPACK_IMPORTED_MODULE_2__["default"]).withConfig({
  displayName: "ImageGrid__Container",
  componentId: "sc-1uh8uch-0"
})(["display:flex;flex-wrap:wrap;justify-content:center;"]);
var Image = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].img.withConfig({
  displayName: "ImageGrid__Image",
  componentId: "sc-1uh8uch-1"
})(["max-height:150px;height:100%;width:auto;margin:3rem;media (max-width:", "px){max-height:100px;}"], responsiveSizes.tablet);
/**
 * @param {{ imageUrls: string[] }} props
 */

/* harmony default export */ __webpack_exports__["default"] = (function (props) {
  return __jsx(Container, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27
    },
    __self: this
  }, props.imageUrls.map(function (imageUrl, index) {
    return __jsx(Image, {
      key: index,
      src: imageUrl,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 29
      },
      __self: this
    });
  }));
});

/***/ })

})
//# sourceMappingURL=index.js.a578662f17155bf43347.hot-update.js.map