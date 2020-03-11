webpackHotUpdate("static/development/pages/index.js",{

/***/ "./components/Awards.js":
/*!******************************!*\
  !*** ./components/Awards.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var _Section__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Section */ "./components/Section.js");
/* harmony import */ var _Styles__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Styles */ "./components/Styles.js");
/* harmony import */ var _ImageSection__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./ImageSection */ "./components/ImageSection.js");
var _jsxFileName = "/Users/alexgirard/Documents/VEXU/uwvexu.ca/components/Awards.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;





var StyledColumns = Object(styled_components__WEBPACK_IMPORTED_MODULE_1__["default"])(_Styles__WEBPACK_IMPORTED_MODULE_3__["Columns"]).withConfig({
  displayName: "Awards__StyledColumns",
  componentId: "dx4r2b-0"
})(["@media screen and (max-width:", "px){display:none;}"], _Styles__WEBPACK_IMPORTED_MODULE_3__["responsiveSizes"].smallScreen);
var CompName = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].h2.withConfig({
  displayName: "Awards__CompName",
  componentId: "dx4r2b-1"
})(["color:", ";margin-top:", ";"], _Styles__WEBPACK_IMPORTED_MODULE_3__["yellow"], function (props) {
  return props.space ? '5rem' : 0;
});
var ListParent = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div.withConfig({
  displayName: "Awards__ListParent",
  componentId: "dx4r2b-2"
})(["text-align:center;"]);
var ListWrapper = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div.withConfig({
  displayName: "Awards__ListWrapper",
  componentId: "dx4r2b-3"
})(["display:inline-block;text-align:left;"]);
var ImgWrapper = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div.withConfig({
  displayName: "Awards__ImgWrapper",
  componentId: "dx4r2b-4"
})(["filter:grayscale(100%);@media screen and (max-width:", "px){margin-bottom:3rem;}"], _Styles__WEBPACK_IMPORTED_MODULE_3__["responsiveSizes"].smallScreen);

var AwardsList = function AwardsList(_ref) {
  var awards = _ref.awards;
  return __jsx(ListParent, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36
    },
    __self: this
  }, __jsx(ListWrapper, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37
    },
    __self: this
  }, awards.map(function (_ref2, index) {
    var comp = _ref2.comp,
        award = _ref2.award,
        year = _ref2.year;
    return __jsx("div", {
      key: index,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 39
      },
      __self: this
    }, __jsx(CompName, {
      space: index != 0,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 40
      },
      __self: this
    }, comp), __jsx(_Styles__WEBPACK_IMPORTED_MODULE_3__["Color"], {
      color: "white",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 41
      },
      __self: this
    }, __jsx("h4", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 42
      },
      __self: this
    }, award), __jsx("h4", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 43
      },
      __self: this
    }, year)));
  })));
};

var Images = function Images() {
  return __jsx(ImgWrapper, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 52
    },
    __self: this
  }, __jsx(_ImageSection__WEBPACK_IMPORTED_MODULE_4__["default"], {
    imageUrls: [['static/awards.png'], ['static/robot-side.jpg']],
    __source: {
      fileName: _jsxFileName,
      lineNumber: 53
    },
    __self: this
  }), __jsx(_ImageSection__WEBPACK_IMPORTED_MODULE_4__["default"], {
    imageUrls: [['static/comp2.jpg', '70% 70%'], ['static/intake.jpg', 'top']],
    __source: {
      fileName: _jsxFileName,
      lineNumber: 54
    },
    __self: this
  }), __jsx(_ImageSection__WEBPACK_IMPORTED_MODULE_4__["default"], {
    imageUrls: [['static/robot-angle.jpg', '10% 70%'], ['static/vexu-can.jpg', '90% 90%']],
    __source: {
      fileName: _jsxFileName,
      lineNumber: 55
    },
    __self: this
  }));
};

var MobileImg = function MobileImg() {
  return __jsx(ImgWrapper, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 59
    },
    __self: this
  }, __jsx(_ImageSection__WEBPACK_IMPORTED_MODULE_4__["default"], {
    imageUrls: [['static/awards.png', '60% 60%']],
    __source: {
      fileName: _jsxFileName,
      lineNumber: 59
    },
    __self: this
  }));
};

var Awards = function Awards(_ref3) {
  var awards = _ref3.awards;
  return __jsx(_Section__WEBPACK_IMPORTED_MODULE_2__["default"], {
    id: "awards",
    title: "AWARDS",
    bg: "black",
    imagesUnderTitle: true,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 62
    },
    __self: this
  }, __jsx(StyledColumns, {
    cols: 2,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 64
    },
    __self: this
  }, __jsx(Images, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 65
    },
    __self: this
  }), __jsx(AwardsList, {
    awards: awards,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 66
    },
    __self: this
  })), __jsx(MobileImg, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 70
    },
    __self: this
  }), __jsx(AwardsList, {
    awards: awards,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 71
    },
    __self: this
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (Awards);

/***/ })

})
//# sourceMappingURL=index.js.596a701f3b5105fe5c82.hot-update.js.map