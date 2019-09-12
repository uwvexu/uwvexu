webpackHotUpdate("static/development/pages/index.js",{

/***/ "./components/Event.jsx":
/*!******************************!*\
  !*** ./components/Event.jsx ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var _CalendarIcon__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./CalendarIcon */ "./components/CalendarIcon.jsx");
var _jsxFileName = "/Users/alexgirard/Documents/VEXU/uwvexu.ca/components/Event.jsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;




var getMonthFullName = function getMonthFullName(monthNumber) {
  if (monthNumber < 1 || monthNumber > 12) {
    throw "Month number is out of range (expected between 1 and 12, got ".concat(monthNumber, ")");
  }

  return ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'][monthNumber - 1];
};

var getDayFullName = function getDayFullName(dayNumber) {
  if (dayNumber < 1 || dayNumber > 31) {
    throw "Day number is out of range (expected between 1 and 31, got ".concat(dayNumber, ")");
  }

  switch (dayNumber) {
    case 1:
    case 21:
    case 31:
      return "".concat(dayNumber, "st");

    case 2:
    case 22:
      return "".concat(dayNumber, "nd");

    case 3:
    case 23:
      return "".concat(dayNumber, "rd");

    default:
      return "".concat(dayNumber, "th");
  }
};

var Container = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div.withConfig({
  displayName: "Event__Container",
  componentId: "sc-1rrmtcw-0"
})(["display:flex;"]);
var CalendarIconContainer = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div.withConfig({
  displayName: "Event__CalendarIconContainer",
  componentId: "sc-1rrmtcw-1"
})(["margin-right:2rem;"]);
var DateHeader = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].span.withConfig({
  displayName: "Event__DateHeader",
  componentId: "sc-1rrmtcw-2"
})(["font-weight:bold;"]);
/**
 * @param {{
 *   month: number;
 *   day: number;
 *   dayOfWeek: string;
 *   children: React.ReactNode;
 * }} props
 */

/* harmony default export */ __webpack_exports__["default"] = (function (props) {
  return __jsx(Container, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 67
    },
    __self: this
  }, __jsx(CalendarIconContainer, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 68
    },
    __self: this
  }, __jsx(_CalendarIcon__WEBPACK_IMPORTED_MODULE_2__["default"], {
    month: props.month,
    day: props.day,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 69
    },
    __self: this
  })), __jsx("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 71
    },
    __self: this
  }, __jsx(DateHeader, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 72
    },
    __self: this
  }, props.dayOfWeek, ", ", getMonthFullName(props.month), ' ', getDayFullName(props.day)), __jsx("br", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 76
    },
    __self: this
  }), props.children), props.space && __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx("br", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 79
    },
    __self: this
  }), __jsx("br", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 79
    },
    __self: this
  })));
});

/***/ })

})
//# sourceMappingURL=index.js.3c95c35f18dd3f8f744f.hot-update.js.map