(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[820],{1287:function(e,n,r){"use strict";var t=r(5893),o=(r(7294),r(1664));n.Z=function(e){var n=e.href,r=e.children;return e.external?(0,t.jsx)("a",{href:n,target:"_blank",children:r}):(0,t.jsx)(o.default,{href:n,children:(0,t.jsx)("a",{children:r})})}},6071:function(e,n,r){"use strict";var t=r(3038),o=r(862);n.default=void 0;var a=o(r(7294)),c=r(1689),i=r(2441),u=r(5749),l={};function f(e,n,r,t){if(e&&(0,c.isLocalURL)(n)){e.prefetch(n,r,t).catch((function(e){0}));var o=t&&"undefined"!==typeof t.locale?t.locale:e&&e.locale;l[n+"%"+r+(o?"%"+o:"")]=!0}}var s=function(e){var n=!1!==e.prefetch,r=(0,i.useRouter)(),o=r&&r.asPath||"/",s=a.default.useMemo((function(){var n=(0,c.resolveHref)(o,e.href,!0),r=t(n,2),a=r[0],i=r[1];return{href:a,as:e.as?(0,c.resolveHref)(o,e.as):i||a}}),[o,e.href,e.as]),d=s.href,p=s.as,v=e.children,h=e.replace,g=e.shallow,y=e.scroll,_=e.locale;"string"===typeof v&&(v=a.default.createElement("a",null,v));var b=a.Children.only(v),E=b&&"object"===typeof b&&b.ref,w=(0,u.useIntersection)({rootMargin:"200px"}),L=t(w,2),k=L[0],m=L[1],x=a.default.useCallback((function(e){k(e),E&&("function"===typeof E?E(e):"object"===typeof E&&(E.current=e))}),[E,k]);(0,a.useEffect)((function(){var e=m&&n&&(0,c.isLocalURL)(d),t="undefined"!==typeof _?_:r&&r.locale,o=l[d+"%"+p+(t?"%"+t:"")];e&&!o&&f(r,d,p,{locale:t})}),[p,d,m,_,n,r]);var M={ref:x,onClick:function(e){b.props&&"function"===typeof b.props.onClick&&b.props.onClick(e),e.defaultPrevented||function(e,n,r,t,o,a,i,u){("A"!==e.currentTarget.nodeName||!function(e){var n=e.currentTarget.target;return n&&"_self"!==n||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey||e.nativeEvent&&2===e.nativeEvent.which}(e)&&(0,c.isLocalURL)(r))&&(e.preventDefault(),null==i&&(i=t.indexOf("#")<0),n[o?"replace":"push"](r,t,{shallow:a,locale:u,scroll:i}))}(e,r,d,p,h,g,y,_)},onMouseEnter:function(e){(0,c.isLocalURL)(d)&&(b.props&&"function"===typeof b.props.onMouseEnter&&b.props.onMouseEnter(e),f(r,d,p,{priority:!0}))}};if(e.passHref||"a"===b.type&&!("href"in b.props)){var j="undefined"!==typeof _?_:r&&r.locale,C=r&&r.isLocaleDomain&&(0,c.getDomainLocale)(p,j,r&&r.locales,r&&r.domainLocales);M.href=C||(0,c.addBasePath)((0,c.addLocale)(p,j,r&&r.defaultLocale))}return a.default.cloneElement(b,M)};n.default=s},5749:function(e,n,r){"use strict";var t=r(3038);n.__esModule=!0,n.useIntersection=function(e){var n=e.rootMargin,r=e.disabled||!c,u=(0,o.useRef)(),l=(0,o.useState)(!1),f=t(l,2),s=f[0],d=f[1],p=(0,o.useCallback)((function(e){u.current&&(u.current(),u.current=void 0),r||s||e&&e.tagName&&(u.current=function(e,n,r){var t=function(e){var n=e.rootMargin||"",r=i.get(n);if(r)return r;var t=new Map,o=new IntersectionObserver((function(e){e.forEach((function(e){var n=t.get(e.target),r=e.isIntersecting||e.intersectionRatio>0;n&&r&&n(r)}))}),e);return i.set(n,r={id:n,observer:o,elements:t}),r}(r),o=t.id,a=t.observer,c=t.elements;return c.set(e,n),a.observe(e),function(){c.delete(e),a.unobserve(e),0===c.size&&(a.disconnect(),i.delete(o))}}(e,(function(e){return e&&d(e)}),{rootMargin:n}))}),[r,n,s]);return(0,o.useEffect)((function(){if(!c&&!s){var e=(0,a.requestIdleCallback)((function(){return d(!0)}));return function(){return(0,a.cancelIdleCallback)(e)}}}),[s]),[p,s]};var o=r(7294),a=r(8391),c="undefined"!==typeof IntersectionObserver;var i=new Map},591:function(e,n,r){"use strict";r.r(n);var t=r(5893),o=(r(7294),r(1287));n.default=function(){return(0,t.jsx)("section",{children:(0,t.jsxs)("div",{children:[(0,t.jsx)("h2",{children:"\u26a0\ufe0f Page Not Found \u26a0\ufe0f"}),(0,t.jsx)("p",{children:"Sorry, we couldn't find that page!"}),(0,t.jsx)(o.Z,{href:"/",children:"return to homepage"})]})})}},6582:function(e,n,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/_error",function(){return r(591)}])},1664:function(e,n,r){e.exports=r(6071)}},function(e){e.O(0,[774,888,179],(function(){return n=6582,e(e.s=n);var n}));var n=e.O();_N_E=n}]);