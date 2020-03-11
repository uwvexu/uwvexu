webpackHotUpdate("static/development/pages/index.js",{

/***/ "./components/Hero.js":
/*!****************************!*\
  !*** ./components/Hero.js ***!
  \****************************/
/*! exports provided: HeroBlock, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeroBlock", function() { return HeroBlock; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var _Styles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Styles */ "./components/Styles.js");
/* harmony import */ var _NavBar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./NavBar */ "./components/NavBar.js");
/* harmony import */ var _Chevron__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Chevron */ "./components/Chevron.js");
var _jsxFileName = "/Users/alexgirard/Documents/VEXU/uwvexu.ca/components/Hero.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;





var HeroBg = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div.withConfig({
  displayName: "Hero__HeroBg",
  componentId: "nhki0v-0"
})(["height:100vh;background-image:url(", ");background-size:cover;background-repeat:no-repeat;background-color:rgba(0,0,0,0.7);background-blend-mode:darken;background-position:bottom;color:white;"], function (props) {
  return props.img;
});
var HeroText = Object(styled_components__WEBPACK_IMPORTED_MODULE_1__["default"])(_Styles__WEBPACK_IMPORTED_MODULE_2__["CenteredDiv"]).withConfig({
  displayName: "Hero__HeroText",
  componentId: "nhki0v-1"
})(["padding-top:12vh;"]);
var Highlight = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div.withConfig({
  displayName: "Hero__Highlight",
  componentId: "nhki0v-2"
})(["background-color:", ";padding:1rem 2rem;color:white;width:max-content;height:auto;margin:auto auto;letter-spacing:0.5rem;@media screen and (max-width:", "px){}"], _Styles__WEBPACK_IMPORTED_MODULE_2__["yellow"], _Styles__WEBPACK_IMPORTED_MODULE_2__["responsiveSizes"].smallScreen);
var TagLine = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].h1.withConfig({
  displayName: "Hero__TagLine",
  componentId: "nhki0v-3"
})(["margin-bottom:", ";"], function (props) {
  return props.mb || '1rem';
});
var HeroBlock = function HeroBlock(_ref) {
  var children = _ref.children;
  return __jsx(Highlight, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42
    },
    __self: this
  }, __jsx(_Styles__WEBPACK_IMPORTED_MODULE_2__["Color"], {
    color: "white",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43
    },
    __self: this
  }, __jsx("h1", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43
    },
    __self: this
  }, children)));
};

var Hero = function Hero() {
  return __jsx(HeroBg, {
    img: "static/robots.png",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48
    },
    __self: this
  }, __jsx(_NavBar__WEBPACK_IMPORTED_MODULE_3__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49
    },
    __self: this
  }), __jsx(HeroText, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 50
    },
    __self: this
  }, __jsx(TagLine, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 51
    },
    __self: this
  }, "learn ", __jsx(_Styles__WEBPACK_IMPORTED_MODULE_2__["Color"], {
    color: _Styles__WEBPACK_IMPORTED_MODULE_2__["yellow"],
    __source: {
      fileName: _jsxFileName,
      lineNumber: 51
    },
    __self: this
  }, " / "), " build"), __jsx(TagLine, {
    mb: "2rem",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 52
    },
    __self: this
  }, "program ", __jsx(_Styles__WEBPACK_IMPORTED_MODULE_2__["Color"], {
    color: _Styles__WEBPACK_IMPORTED_MODULE_2__["yellow"],
    __source: {
      fileName: _jsxFileName,
      lineNumber: 52
    },
    __self: this
  }, " / "), " compete"), __jsx(HeroBlock, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 53
    },
    __self: this
  }, "U WAT VEX U ROBOTICS")), __jsx(_Chevron__WEBPACK_IMPORTED_MODULE_4__["default"], {
    href: "#about",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 55
    },
    __self: this
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (Hero);

/***/ })

})
//# sourceMappingURL=index.js.80776ae4a5d00aab17eb.hot-update.js.map