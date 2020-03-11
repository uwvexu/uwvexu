webpackHotUpdate("static/development/pages/index.js",{

/***/ "./components/NavBar.js":
/*!******************************!*\
  !*** ./components/NavBar.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var _NextLink__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./NextLink */ "./components/NextLink.js");
/* harmony import */ var _Styles__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Styles */ "./components/Styles.js");
/* harmony import */ var _Logo__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Logo */ "./components/Logo.js");
var _jsxFileName = "/Users/alexgirard/Documents/VEXU/uwvexu.ca/components/NavBar.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;





var maxNav = 1150;
var NavContainer = Object(styled_components__WEBPACK_IMPORTED_MODULE_1__["default"])(_Styles__WEBPACK_IMPORTED_MODULE_3__["FlexContainer"]).withConfig({
  displayName: "NavBar__NavContainer",
  componentId: "sc-1bz2xti-0"
})(["margin-right:1rem;letter-spacing:0.1rem;@media (max-width:", "px){background-color:black;margin-right:0;}"], maxNav);
var MobileMenu = Object(styled_components__WEBPACK_IMPORTED_MODULE_1__["default"])(_Styles__WEBPACK_IMPORTED_MODULE_3__["FlexContainer"]).withConfig({
  displayName: "NavBar__MobileMenu",
  componentId: "sc-1bz2xti-1"
})(["flex-direction:column;text-align:center;background-color:black;transition:all 0.2s;padding-bottom:1rem;> div{padding-bottom:1rem;}"]);
var MenuText = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div.withConfig({
  displayName: "NavBar__MenuText",
  componentId: "sc-1bz2xti-2"
})(["margin-left:1.5rem;margin-right:1.5rem;font-size:20px;cursor:pointer;user-select:none;"]);
var MenuOption = Object(styled_components__WEBPACK_IMPORTED_MODULE_1__["default"])(MenuText).withConfig({
  displayName: "NavBar__MenuOption",
  componentId: "sc-1bz2xti-3"
})(["color:white;transition:all 0.2s;:hover{color:", ";}"], _Styles__WEBPACK_IMPORTED_MODULE_3__["yellow"]);
var MenuButton = Object(styled_components__WEBPACK_IMPORTED_MODULE_1__["default"])(MenuText).withConfig({
  displayName: "NavBar__MenuButton",
  componentId: "sc-1bz2xti-4"
})(["border:2px solid ", ";color:", ";padding-top:0.6rem;padding-bottom:0.6rem;padding-left:1.25rem;padding-right:1.25rem;margin-right:1rem;transition:all 0.2s;:hover{background-color:", ";color:black;}"], _Styles__WEBPACK_IMPORTED_MODULE_3__["yellow"], _Styles__WEBPACK_IMPORTED_MODULE_3__["yellow"], _Styles__WEBPACK_IMPORTED_MODULE_3__["yellow"]);
var TextMenu = Object(styled_components__WEBPACK_IMPORTED_MODULE_1__["default"])(_Styles__WEBPACK_IMPORTED_MODULE_3__["FlexContainer"]).withConfig({
  displayName: "NavBar__TextMenu",
  componentId: "sc-1bz2xti-5"
})(["@media (max-width:", "px){display:none;}"], maxNav);
var MenuIcon = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div.withConfig({
  displayName: "NavBar__MenuIcon",
  componentId: "sc-1bz2xti-6"
})(["unset:all;color:white;padding-right:1.5rem;font-size:30px;"]);
var ButtonMenu = Object(styled_components__WEBPACK_IMPORTED_MODULE_1__["default"])(_Styles__WEBPACK_IMPORTED_MODULE_3__["FlexContainer"]).withConfig({
  displayName: "NavBar__ButtonMenu",
  componentId: "sc-1bz2xti-7"
})(["display:none;@media (max-width:", "px){display:block;}"], maxNav);

var MenuOptions = __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx(MenuOption, {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 85
  },
  __self: undefined
}, __jsx("h6", {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 86
  },
  __self: undefined
}, __jsx("a", {
  href: "#about",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 86
  },
  __self: undefined
}, "ABOUT"))), __jsx(MenuOption, {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 89
  },
  __self: undefined
}, __jsx("h6", {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 90
  },
  __self: undefined
}, __jsx("a", {
  href: "#competitions",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 90
  },
  __self: undefined
}, "COMPETITIONS"))), __jsx(MenuOption, {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 93
  },
  __self: undefined
}, __jsx("h6", {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 94
  },
  __self: undefined
}, __jsx("a", {
  href: "#awards",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 94
  },
  __self: undefined
}, "AWARDS"))), __jsx(MenuOption, {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 97
  },
  __self: undefined
}, __jsx("h6", {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 98
  },
  __self: undefined
}, __jsx("a", {
  href: "#sponsor",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 98
  },
  __self: undefined
}, "SPONSORS"))), __jsx(MenuOption, {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 101
  },
  __self: undefined
}, __jsx("h6", {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 102
  },
  __self: undefined
}, __jsx("a", {
  href: "#contact",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 102
  },
  __self: undefined
}, "CONTACT"))), __jsx(_NextLink__WEBPACK_IMPORTED_MODULE_2__["default"], {
  href: "https://forms.gle/WGnEERX5HZF1xDwb7",
  external: true,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 105
  },
  __self: undefined
}, __jsx("h6", {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 106
  },
  __self: undefined
}, __jsx(MenuButton, {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 106
  },
  __self: undefined
}, "JOIN"))));

var NavBar = function NavBar() {
  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false),
      showMobileMenu = _useState[0],
      setShowMobileMenu = _useState[1];

  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx(NavContainer, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 115
    },
    __self: this
  }, __jsx(_NextLink__WEBPACK_IMPORTED_MODULE_2__["default"], {
    href: "/",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 116
    },
    __self: this
  }, __jsx(_Logo__WEBPACK_IMPORTED_MODULE_4__["default"], {
    color: "white",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 117
    },
    __self: this
  })), __jsx(_Styles__WEBPACK_IMPORTED_MODULE_3__["Spacer"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 119
    },
    __self: this
  }), __jsx(TextMenu, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 122
    },
    __self: this
  }, MenuOptions), __jsx(ButtonMenu, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 127
    },
    __self: this
  }, __jsx(MenuIcon, {
    onClick: function onClick() {
      return setShowMobileMenu(!showMobileMenu);
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 128
    },
    __self: this
  }, __jsx("i", {
    className: "fa fa-bars",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 129
    },
    __self: this
  })))), showMobileMenu && __jsx(MobileMenu, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 134
    },
    __self: this
  }, MenuOptions));
};

/* harmony default export */ __webpack_exports__["default"] = (NavBar);

/***/ })

})
//# sourceMappingURL=index.js.f630ce30d38506001e3c.hot-update.js.map