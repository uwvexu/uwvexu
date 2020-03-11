webpackHotUpdate("static/development/pages/index.js",{

/***/ "./components/Section.js":
/*!*******************************!*\
  !*** ./components/Section.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var _Styles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Styles */ "./components/Styles.js");
var _jsxFileName = "/Users/alexgirard/Documents/VEXU/uwvexu.ca/components/Section.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;



var SectionContainer = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div.withConfig({
  displayName: "Section__SectionContainer",
  componentId: "sc-11z9rzq-0"
})(["background-color:", ";padding:10rem 5rem;color:", ";@media screen and (max-width:", "px){padding:8rem 5rem;}@media screen and (max-width:", "px){padding:6rem 4rem;}@media screen and (max-width:", "px){padding:5rem 3rem;}@media screen and (max-width:", "px){padding:4rem 2rem;}@media screen and (max-width:", "px){padding:3rem 2rem;}"], function (props) {
  return props.bg;
}, function (props) {
  return props.bg === 'black' ? _Styles__WEBPACK_IMPORTED_MODULE_2__["yellow"] : 'black';
}, _Styles__WEBPACK_IMPORTED_MODULE_2__["responsiveSizes"].largeScreen, _Styles__WEBPACK_IMPORTED_MODULE_2__["responsiveSizes"].smallScreen, _Styles__WEBPACK_IMPORTED_MODULE_2__["responsiveSizes"].tablet, _Styles__WEBPACK_IMPORTED_MODULE_2__["responsiveSizes"].largeMobile, _Styles__WEBPACK_IMPORTED_MODULE_2__["responsiveSizes"].smallMobile);
var TitleUnderline = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div.withConfig({
  displayName: "Section__TitleUnderline",
  componentId: "sc-11z9rzq-1"
})(["width:50%;border-bottom:4px solid ", ";margin-bottom:", ";text-align:", ";margin-left:", ";@media screen and (max-width:", "px){width:100%;text-align:left;margin-left:0;}@media screen and (max-width:", "px){text-align:center;}"], function (props) {
  return props.bg === 'black' ? _Styles__WEBPACK_IMPORTED_MODULE_2__["yellow"] : 'black';
}, function (props) {
  return props.imagesUnderTitle ? 0 : '3rem';
}, function (props) {
  return props.rightTitle ? "right" : "left";
}, function (props) {
  return props.rightTitle ? "50%" : 0;
}, _Styles__WEBPACK_IMPORTED_MODULE_2__["responsiveSizes"].smallScreen, _Styles__WEBPACK_IMPORTED_MODULE_2__["responsiveSizes"].largeMobile);

var Section = function Section(_ref) {
  var id = _ref.id,
      title = _ref.title,
      bg = _ref.bg,
      rightTitle = _ref.rightTitle,
      imagesUnderTitle = _ref.imagesUnderTitle,
      children = _ref.children;
  return __jsx(SectionContainer, {
    id: id,
    bg: bg,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 50
    },
    __self: this
  }, __jsx(TitleUnderline, {
    bg: bg,
    rightTitle: rightTitle,
    imagesUnderTitle: imagesUnderTitle,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 51
    },
    __self: this
  }, __jsx("h2", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 52
    },
    __self: this
  }, title)), children);
};

/* harmony default export */ __webpack_exports__["default"] = (Section);

/***/ })

})
//# sourceMappingURL=index.js.d69e45b118e884774f29.hot-update.js.map