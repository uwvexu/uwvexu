(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{"+iuc":function(t,e,n){n("wgeU"),n("FlQf"),n("bBy9"),n("B9jh"),n("dL40"),n("xvv9"),n("V+O7"),t.exports=n("WEpk").Set},"0tVQ":function(t,e,n){n("FlQf"),n("VJsP"),t.exports=n("WEpk").Array.from},"1TCz":function(t,e,n){"use strict";n.r(e);var r=n("hfKm"),o=n.n(r);function u(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),o()(t,r.key,r)}}var a=n("XVgq"),i=n.n(a),c=n("Z7t5"),f=n.n(c);function l(t){return(l="function"===typeof f.a&&"symbol"===typeof i.a?function(t){return typeof t}:function(t){return t&&"function"===typeof f.a&&t.constructor===f.a&&t!==f.a.prototype?"symbol":typeof t})(t)}function s(t){return(s="function"===typeof f.a&&"symbol"===l(i.a)?function(t){return l(t)}:function(t){return t&&"function"===typeof f.a&&t.constructor===f.a&&t!==f.a.prototype?"symbol":l(t)})(t)}function p(t,e){return!e||"object"!==s(e)&&"function"!==typeof e?function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t):e}var d=n("Bhuq"),h=n.n(d),v=n("TRZx"),y=n.n(v);function m(t){return(m=y.a?h.a:function(t){return t.__proto__||h()(t)})(t)}var w=n("SqZg"),b=n.n(w);function g(t,e){return(g=y.a||function(t,e){return t.__proto__=e,t})(t,e)}var _=n("q1tI"),P=n.n(_),x=n("8Bbg"),C=n.n(x),k=n("m/Pd"),S=n.n(k),E=P.a.createElement,I=function(t){function e(){return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,e),p(this,m(e).apply(this,arguments))}var n,r,o;return function(t,e){if("function"!==typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=b()(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&g(t,e)}(e,C.a),n=e,(r=[{key:"render",value:function(){var t=this.props,e=t.Component,n=t.pageProps;return E(x.Container,null,E(S.a,null,E("title",null,"UW VEXU Robotics")),E(e,n))}}])&&u(n.prototype,r),o&&u(n,o),e}();e.default=I},"2PDY":function(t,e){t.exports=function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}},"3JuP":function(t,e,n){"use strict";var r=n("hfKm"),o=this&&this.__importStar||function(t){if(t&&t.__esModule)return t;var e={};if(null!=t)for(var n in t)Object.hasOwnProperty.call(t,n)&&(e[n]=t[n]);return e.default=t,e};r(e,"__esModule",{value:!0});var u=o(n("q1tI"));e.AmpStateContext=u.createContext({})},"4hZ1":function(t,e,n){"use strict";var r=n("/HRN"),o=n("ZDA2"),u=n("/+P4"),a=n("K47E"),i=n("WaGi"),c=n("N9n2"),f=n("TbGu"),l=n("ttDY");n("hfKm")(e,"__esModule",{value:!0});var s=n("q1tI"),p=!1;e.default=function(){var t,e=new l;function n(n){t=n.props.reduceComponentsToState(f(e),n.props),n.props.handleStateChange&&n.props.handleStateChange(t)}return function(f){function l(t){var i;return r(this,l),i=o(this,u(l).call(this,t)),p&&(e.add(a(i)),n(a(i))),i}return c(l,f),i(l,null,[{key:"rewind",value:function(){var n=t;return t=void 0,e.clear(),n}}]),i(l,[{key:"componentDidMount",value:function(){e.add(this),n(this)}},{key:"componentDidUpdate",value:function(){n(this)}},{key:"componentWillUnmount",value:function(){e.delete(this),n(this)}},{key:"render",value:function(){return null}}]),l}(s.Component)}},"8Bbg":function(t,e,n){t.exports=n("B5Ud")},B5Ud:function(t,e,n){"use strict";var r=n("/HRN"),o=n("WaGi"),u=n("ZDA2"),a=n("/+P4"),i=n("N9n2"),c=n("ln6h"),f=n("KI45");e.__esModule=!0,e.Container=function(t){0;return t.children},e.createUrl=b,e.default=void 0;var l=f(n("htGi")),s=f(n("+oT+")),p=f(n("q1tI")),d=f(n("17x9")),h=n("Bu4q");e.AppInitialProps=h.AppInitialProps;var v=n("nOHt");function y(t){return m.apply(this,arguments)}function m(){return(m=(0,s.default)(c.mark(function t(e){var n,r,o;return c.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return n=e.Component,r=e.ctx,t.next=3,(0,h.loadGetInitialProps)(n,r);case 3:return o=t.sent,t.abrupt("return",{pageProps:o});case 5:case"end":return t.stop()}},t)}))).apply(this,arguments)}var w=function(t){function e(){return r(this,e),u(this,a(e).apply(this,arguments))}return i(e,t),o(e,[{key:"getChildContext",value:function(){return{router:(0,v.makePublicRouterInstance)(this.props.router)}}},{key:"componentDidCatch",value:function(t,e){throw t}},{key:"render",value:function(){var t=this.props,e=t.router,n=t.Component,r=t.pageProps,o=b(e);return p.default.createElement(n,(0,l.default)({},r,{url:o}))}}]),e}(p.default.Component);function b(t){var e=t.pathname,n=t.asPath,r=t.query;return{get query(){return r},get pathname(){return e},get asPath(){return n},back:function(){t.back()},push:function(e,n){return t.push(e,n)},pushTo:function(e,n){var r=n?e:"",o=n||e;return t.push(r,o)},replace:function(e,n){return t.replace(e,n)},replaceTo:function(e,n){var r=n?e:"",o=n||e;return t.replace(r,o)}}}e.default=w,w.childContextTypes={router:d.default.object},w.origGetInitialProps=y,w.getInitialProps=y},B9jh:function(t,e,n){"use strict";var r=n("Wu5q"),o=n("n3ko");t.exports=n("raTm")("Set",function(t){return function(){return t(this,arguments.length>0?arguments[0]:void 0)}},{add:function(t){return r.def(o(this,"Set"),t=0===t?0:t,t)}},r)},GcxT:function(t,e,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/_app",function(){var t=n("1TCz");return{page:t.default||t}}])},IP1Z:function(t,e,n){"use strict";var r=n("2faE"),o=n("rr1i");t.exports=function(t,e,n){e in t?r.f(t,e,o(0,n)):t[e]=n}},PQJW:function(t,e,n){var r=n("d04V"),o=n("yLu3");t.exports=function(t){if(o(Object(t))||"[object Arguments]"===Object.prototype.toString.call(t))return r(t)}},TbGu:function(t,e,n){var r=n("fGSI"),o=n("PQJW"),u=n("2PDY");t.exports=function(t){return r(t)||o(t)||u()}},"V+O7":function(t,e,n){n("aPfg")("Set")},VJsP:function(t,e,n){"use strict";var r=n("2GTP"),o=n("Y7ZC"),u=n("JB68"),a=n("sNwI"),i=n("NwJ3"),c=n("tEej"),f=n("IP1Z"),l=n("fNZA");o(o.S+o.F*!n("TuGD")(function(t){Array.from(t)}),"Array",{from:function(t){var e,n,o,s,p=u(t),d="function"==typeof this?this:Array,h=arguments.length,v=h>1?arguments[1]:void 0,y=void 0!==v,m=0,w=l(p);if(y&&(v=r(v,h>2?arguments[2]:void 0,2)),void 0==w||d==Array&&i(w))for(n=new d(e=c(p.length));e>m;m++)f(n,m,y?v(p[m],m):p[m]);else for(s=w.call(p),n=new d;!(o=s.next()).done;m++)f(n,m,y?a(s,v,[o.value,m],!0):o.value);return n.length=m,n}})},VKFn:function(t,e,n){n("bBy9"),n("FlQf"),t.exports=n("ldVq")},Wziy:function(t,e,n){"use strict";var r=n("hfKm"),o=this&&this.__importDefault||function(t){return t&&t.__esModule?t:{default:t}};r(e,"__esModule",{value:!0});var u=o(n("q1tI")),a=n("3JuP");function i(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},e=t.ampFirst,n=void 0!==e&&e,r=t.hybrid,o=void 0!==r&&r,u=t.hasQuery;return n||o&&(void 0!==u&&u)}e.isInAmpMode=i,e.useAmp=function(){return i(u.default.useContext(a.AmpStateContext))}},d04V:function(t,e,n){t.exports=n("0tVQ")},dL40:function(t,e,n){var r=n("Y7ZC");r(r.P+r.R,"Set",{toJSON:n("8iia")("Set")})},fGSI:function(t,e,n){var r=n("p0XB");t.exports=function(t){if(r(t)){for(var e=0,n=new Array(t.length);e<t.length;e++)n[e]=t[e];return n}}},ldVq:function(t,e,n){var r=n("QMMT"),o=n("UWiX")("iterator"),u=n("SBuE");t.exports=n("WEpk").isIterable=function(t){var e=Object(t);return void 0!==e[o]||"@@iterator"in e||u.hasOwnProperty(r(e))}},"m/Pd":function(t,e,n){"use strict";var r=n("ttDY"),o=n("hfKm"),u=this&&this.__importDefault||function(t){return t&&t.__esModule?t:{default:t}};o(e,"__esModule",{value:!0});var a=u(n("q1tI")),i=u(n("4hZ1")),c=n("3JuP"),f=n("IClC"),l=n("Wziy");function s(){var t=arguments.length>0&&void 0!==arguments[0]&&arguments[0],e=[a.default.createElement("meta",{key:"charSet",charSet:"utf-8"})];return t||e.push(a.default.createElement("meta",{key:"viewport",name:"viewport",content:"width=device-width,minimum-scale=1,initial-scale=1"})),e}function p(t,e){return"string"===typeof e||"number"===typeof e?t:e.type===a.default.Fragment?t.concat(a.default.Children.toArray(e.props.children).reduce(function(t,e){return"string"===typeof e||"number"===typeof e?t:t.concat(e)},[])):t.concat(e)}e.defaultHead=s;var d=["name","httpEquiv","charSet","itemProp"];function h(t,e){return t.reduce(function(t,e){var n=a.default.Children.toArray(e.props.children);return t.concat(n)},[]).reduce(p,[]).reverse().concat(s(e.inAmpMode)).filter(function(){var t=new r,e=new r,n=new r,o={};return function(u){if(u.key&&"number"!==typeof u.key&&0===u.key.indexOf(".$"))return!t.has(u.key)&&(t.add(u.key),!0);switch(u.type){case"title":case"base":if(e.has(u.type))return!1;e.add(u.type);break;case"meta":for(var a=0,i=d.length;a<i;a++){var c=d[a];if(u.props.hasOwnProperty(c))if("charSet"===c){if(n.has(c))return!1;n.add(c)}else{var f=u.props[c],l=o[c]||new r;if(l.has(f))return!1;l.add(f),o[c]=l}}}return!0}}()).reverse().map(function(t,e){var n=t.key||e;return a.default.cloneElement(t,{key:n})})}var v=i.default();function y(t){var e=t.children;return a.default.createElement(c.AmpStateContext.Consumer,null,function(t){return a.default.createElement(f.HeadManagerContext.Consumer,null,function(n){return a.default.createElement(v,{reduceComponentsToState:h,handleStateChange:n,inAmpMode:l.isInAmpMode(t)},e)})})}y.rewind=v.rewind,e.default=y},ttDY:function(t,e,n){t.exports=n("+iuc")},xvv9:function(t,e,n){n("cHUd")("Set")},yLu3:function(t,e,n){t.exports=n("VKFn")}},[["GcxT",1,0]]]);