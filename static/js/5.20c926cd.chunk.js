(this["webpackJsonpportfolio-app"]=this["webpackJsonpportfolio-app"]||[]).push([[5,10],{136:function(t,e,c){"use strict";var a=c(4),n=c(2),s=c(3),r=c(5),o=c.n(r),i=c(0),l=c(6),f=c(1),u=["as","bsPrefix","className"],j=["className"];var b=i.forwardRef((function(t,e){var c=function(t){var e=t.as,c=t.bsPrefix,a=t.className,r=Object(s.a)(t,u);c=Object(l.c)(c,"col");var i=Object(l.a)(),f=Object(l.b)(),j=[],b=[];return i.forEach((function(t){var e,a,n,s=r[t];delete r[t],"object"===typeof s&&null!=s?(e=s.span,a=s.offset,n=s.order):e=s;var o=t!==f?"-".concat(t):"";e&&j.push(!0===e?"".concat(c).concat(o):"".concat(c).concat(o,"-").concat(e)),null!=n&&b.push("order".concat(o,"-").concat(n)),null!=a&&b.push("offset".concat(o,"-").concat(a))})),[Object(n.a)(Object(n.a)({},r),{},{className:o.a.apply(void 0,[a].concat(j,b))}),{as:e,bsPrefix:c,spans:j}]}(t),r=Object(a.a)(c,2),i=r[0],b=i.className,d=Object(s.a)(i,j),p=r[1],O=p.as,h=void 0===O?"div":O,v=p.bsPrefix,x=p.spans;return Object(f.jsx)(h,Object(n.a)(Object(n.a)({},d),{},{ref:e,className:o()(b,!x.length&&v)}))}));b.displayName="Col",e.a=b},139:function(t,e,c){"use strict";var a=c(2),n=c(3),s=c(5),r=c.n(s),o=c(0),i=c(6),l=c(1),f=["bsPrefix","className","as"],u=o.forwardRef((function(t,e){var c=t.bsPrefix,s=t.className,o=t.as,u=void 0===o?"div":o,j=Object(n.a)(t,f),b=Object(i.c)(c,"row"),d=Object(i.a)(),p=Object(i.b)(),O="".concat(b,"-cols"),h=[];return d.forEach((function(t){var e,c=j[t];delete j[t],e=null!=c&&"object"===typeof c?c.cols:c;var a=t!==p?"-".concat(t):"";null!=e&&h.push("".concat(O).concat(a,"-").concat(e))})),Object(l.jsx)(u,Object(a.a)(Object(a.a)({ref:e},j),{},{className:r.a.apply(void 0,[s,b].concat(h))}))}));u.displayName="Row",e.a=u},84:function(t,e,c){"use strict";c.r(e);c(0),c(86);var a=c(1);e.default=function(t){var e=t.title;return Object(a.jsx)("div",{className:"header",children:e})}},88:function(t,e,c){"use strict";c.r(e);var a=c(4),n=c(0),s=c(190),r=c(131),o=c(139),i=c(136),l=c(66),f=c.n(l),u=c(84),j=c(24),b=c(31),d=c(1),p={introTextContainer:{margin:10,flexDirection:"column",whiteSpace:"pre-wrap",textAlign:"left",fontSize:"1.2em",fontWeight:500},introImageContainer:{margin:10,justifyContent:"center",alignItems:"center",display:"flex"}};e.default=function(t){var e,c=t.header,l=Object(n.useState)(null),O=Object(a.a)(l,2),h=O[0],v=O[1];return Object(n.useEffect)((function(){fetch(j.a.about,{method:"GET"}).then((function(t){return t.json()})).then((function(t){return v(t)})).catch((function(t){return t}))}),[]),Object(d.jsxs)(d.Fragment,{children:[Object(d.jsx)(u.default,{title:c}),Object(d.jsx)("div",{className:"section-content-container",style:{padding:"0 100"},children:Object(d.jsx)(r.a,{children:h?Object(d.jsx)(f.a,{children:Object(d.jsx)(o.a,{children:Object(d.jsx)(i.a,{style:p.introTextContainer,children:(e=h.about,Object(d.jsx)(s.a,{children:e}))})})}):Object(d.jsx)(b.default,{})})})]})}}}]);
//# sourceMappingURL=5.20c926cd.chunk.js.map