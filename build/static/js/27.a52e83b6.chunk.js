(this["webpackJsonpcoreui-free-react-admin-template"]=this["webpackJsonpcoreui-free-react-admin-template"]||[]).push([[27],{710:function(e,t,r){"use strict";r.d(t,"a",(function(){return c}));r(16);var n=r(1),o=r.n(n),a=o.a.createContext({});a.Consumer,a.Provider;function c(e,t){var r=Object(n.useContext)(a);return e||r[t]||t}},741:function(e,t,r){"use strict";var n=r(16),o=r(34),a=r(712),c=r.n(a),s=r(1),i=r.n(s),l=r(710),d=["xl","lg","md","sm","xs"],u=i.a.forwardRef((function(e,t){var r=e.bsPrefix,a=e.className,s=e.as,u=void 0===s?"div":s,f=Object(o.a)(e,["bsPrefix","className","as"]),b=Object(l.a)(r,"col"),p=[],j=[];return d.forEach((function(e){var t,r,n,o=f[e];if(delete f[e],"object"===typeof o&&null!=o){var a=o.span;t=void 0===a||a,r=o.offset,n=o.order}else t=o;var c="xs"!==e?"-"+e:"";t&&p.push(!0===t?""+b+c:""+b+c+"-"+t),null!=n&&j.push("order"+c+"-"+n),null!=r&&j.push("offset"+c+"-"+r)})),p.length||p.push(b),i.a.createElement(u,Object(n.a)({},f,{ref:t,className:c.a.apply(void 0,[a].concat(p,j))}))}));u.displayName="Col",t.a=u},744:function(e,t,r){"use strict";var n=r(16),o=r(34),a=r(712),c=r.n(a),s=r(1),i=r.n(s),l=r(710),d=["xl","lg","md","sm","xs"],u=i.a.forwardRef((function(e,t){var r=e.bsPrefix,a=e.className,s=e.noGutters,u=e.as,f=void 0===u?"div":u,b=Object(o.a)(e,["bsPrefix","className","noGutters","as"]),p=Object(l.a)(r,"row"),j=p+"-cols",g=[];return d.forEach((function(e){var t,r=b[e];delete b[e];var n="xs"!==e?"-"+e:"";null!=(t=null!=r&&"object"===typeof r?r.cols:r)&&g.push(""+j+n+"-"+t)})),i.a.createElement(f,Object(n.a)({ref:t},b,{className:c.a.apply(void 0,[a,p,s&&"no-gutters"].concat(g))}))}));u.displayName="Row",u.defaultProps={noGutters:!1},t.a=u},745:function(e,t){!function(e,t){for(var r in t)e[r]=t[r]}(t,function(e){var t={};function r(n){if(t[n])return t[n].exports;var o=t[n]={i:n,l:!1,exports:{}};return e[n].call(o.exports,o,o.exports,r),o.l=!0,o.exports}return r.m=e,r.c=t,r.d=function(e,t,n){r.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},r.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(e,t){if(1&t&&(e=r(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)r.d(n,o,function(t){return e[t]}.bind(null,o));return n},r.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="",r(r.s=0)}([function(e,t,r){"use strict";r.r(t),r.d(t,"deepObjectsMerge",(function(){return n})),r.d(t,"getColor",(function(){return i})),r.d(t,"getStyle",(function(){return s})),r.d(t,"hexToRgb",(function(){return l})),r.d(t,"hexToRgba",(function(){return d})),r.d(t,"makeUid",(function(){return u})),r.d(t,"omitByKeys",(function(){return f})),r.d(t,"pickByKeys",(function(){return b})),r.d(t,"rgbToHex",(function(){return p}));var n=function e(t,r){for(var n=0,o=Object.keys(r);n<o.length;n++){var a=o[n];r[a]instanceof Object&&Object.assign(r[a],e(t[a],r[a]))}return Object.assign(t||{},r),t},o=function(){for(var e={},t=document.styleSheets,r="",n=t.length-1;n>-1;n--){for(var o=t[n].cssRules,a=o.length-1;a>-1;a--)if(".ie-custom-properties"===o[a].selectorText){r=o[a].cssText;break}if(r)break}return(r=r.substring(r.lastIndexOf("{")+1,r.lastIndexOf("}"))).split(";").forEach((function(t){if(t){var r=t.split(": ")[0],n=t.split(": ")[1];r&&n&&(e["--".concat(r.trim())]=n.trim())}})),e},a=function(){return Boolean(document.documentMode)&&document.documentMode>=10},c=function(e){return e.match(/^--.*/i)},s=function(e){var t,r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:document.body;if(c(e)&&a()){var n=o();t=n[e]}else t=window.getComputedStyle(r,null).getPropertyValue(e).replace(/^\s/,"");return t},i=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:document.body,r="--".concat(e),n=s(r,t);return n||e},l=function(e){if(void 0===e)throw new TypeError("Hex color is not defined");var t,r,n;if(!e.match(/^#(?:[0-9a-f]{3}){1,2}$/i))throw new Error("".concat(e," is not a valid hex color"));return 7===e.length?(t=parseInt(e.slice(1,3),16),r=parseInt(e.slice(3,5),16),n=parseInt(e.slice(5,7),16)):(t=parseInt(e.slice(1,2),16),r=parseInt(e.slice(2,3),16),n=parseInt(e.slice(3,5),16)),"rgba(".concat(t,", ").concat(r,", ").concat(n,")")},d=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:100;if(void 0===e)throw new TypeError("Hex color is not defined");var r,n,o,a=e.match(/^#(?:[0-9a-f]{3}){1,2}$/i);if(!a)throw new Error("".concat(e," is not a valid hex color"));return 7===e.length?(r=parseInt(e.slice(1,3),16),n=parseInt(e.slice(3,5),16),o=parseInt(e.slice(5,7),16)):(r=parseInt(e.slice(1,2),16),n=parseInt(e.slice(2,3),16),o=parseInt(e.slice(3,5),16)),"rgba(".concat(r,", ").concat(n,", ").concat(o,", ").concat(t/100,")")},u=function(){return"uid-"+Math.random().toString(36).substr(2)},f=function(e,t){for(var r={},n=Object.keys(e),o=0;o<n.length;o++)!t.includes(n[o])&&(r[n[o]]=e[n[o]]);return r},b=function(e,t){for(var r={},n=0;n<t.length;n++)r[t[n]]=e[t[n]];return r},p=function(e){if(void 0===e)throw new TypeError("Hex color is not defined");if("transparent"===e)return"#00000000";var t=e.match(/^rgba?[\s+]?\([\s+]?(\d+)[\s+]?,[\s+]?(\d+)[\s+]?,[\s+]?(\d+)[\s+]?/i);if(!t)throw new Error("".concat(e," is not a valid rgb color"));var r="0".concat(parseInt(t[1],10).toString(16)),n="0".concat(parseInt(t[2],10).toString(16)),o="0".concat(parseInt(t[3],10).toString(16));return"#".concat(r.slice(-2)).concat(n.slice(-2)).concat(o.slice(-2))},j={deepObjectsMerge:n,getColor:i,getStyle:s,hexToRgb:l,hexToRgba:d,makeUid:u,omitByKeys:f,pickByKeys:b,rgbToHex:p};t.default=j}]))},757:function(e,t,r){"use strict";var n=r(3),o=r(93),a=(r(1),r(745)),c=r(758),s=r(19),i=function(e){var t=e.borderColor,r=e.backgroundColor,i=e.pointHoverBackgroundColor,l=e.dataPoints,d=e.label,u=e.pointed,f=Object(o.a)(e,["borderColor","backgroundColor","pointHoverBackgroundColor","dataPoints","label","pointed"]),b=i||("transparent"!==r?r:t),p=[{data:l,borderColor:Object(a.getColor)(t),backgroundColor:Object(a.getColor)(r),pointBackgroundColor:Object(a.getColor)(b),pointHoverBackgroundColor:Object(a.getColor)(b),label:d}],j={scales:{xAxes:[{offset:!0,gridLines:{color:"transparent",zeroLineColor:"transparent"},ticks:{fontSize:2,fontColor:"transparent"}}],yAxes:[{display:!1,ticks:{display:!1,min:Math.min.apply(Math,l)-5,max:Math.max.apply(Math,l)+5}}]},elements:{line:{borderWidth:1},point:{radius:4,hitRadius:10,hoverRadius:4}}},g={scales:{xAxes:[{display:!1}],yAxes:[{display:!1}]},elements:{line:{borderWidth:2},point:{radius:0,hitRadius:10,hoverRadius:4}}},h=function(){var e=u?j:g;return Object.assign({},e,{maintainAspectRatio:!1,legend:{display:!1}})}(),m=Object(a.deepObjectsMerge)(p,f.datasets||{}),x=Object(a.deepObjectsMerge)(h,f.options||{});return Object(s.jsx)(c.c,Object(n.a)(Object(n.a)({},f),{},{datasets:m,options:x,labels:d}))};i.defaultProps={borderColor:"rgba(255,255,255,.55)",backgroundColor:"transparent",dataPoints:[10,22,34,46,58,70,46,23,45,78,34,12],label:"Sales"},t.a=i},915:function(e,t,r){"use strict";r.r(t),r.d(t,"default",(function(){return b}));var n=r(723),o=r(714),a=r(1),c=r.n(a),s=r(744),i=r(741),l=r(70),d=r(121),u=r(757),f=(r(916),r(19));function b(){var e=Object(l.c)((function(e){return e.page})),t=["success","danger","warning","primary"];return Object(f.jsxs)(c.a.Fragment,{children:[Object(f.jsx)(s.a,{children:Object(f.jsx)(i.a,{md:12,children:Object(f.jsx)("div",{style:{display:"flex",justifyContent:"space-between"},children:Object(f.jsx)("h1",{style:{margin:"3rem"},children:"Modifier des Pages "})})})}),Object(f.jsxs)(o.h,{children:[Object(f.jsxs)(o.i,{children:[Object(f.jsx)(o.l,{children:"Liste des Pages"}),e.allpages.length&&e.allpages.map((function(e,r){return Object(f.jsxs)(d.b,{children:[" ",Object(f.jsxs)(o.kb,{color:"gradient-".concat(t[r%5]),header:"Page Category - ".concat(e.category.name),text:e.title,footerSlot:Object(f.jsx)(u.a,{pointed:!0,className:"c-chart-wrapper mt-3 mx-3",style:{height:"70px"},dataPoints:[65,59,84,84,51,55,40],pointHoverBackgroundColor:t[r%5],label:"Pages",labels:"months"}),children:[Object(f.jsxs)(o.r,{children:[Object(f.jsx)(o.u,{color:"transparent",children:Object(f.jsx)(n.a,{name:"cil-settings"})}),Object(f.jsxs)(o.t,{className:"pt-0",placement:"bottom-end",children:[Object(f.jsx)(o.s,{children:"Action"}),Object(f.jsx)(o.s,{children:"Another action"}),Object(f.jsx)(o.s,{children:"Something else here..."}),Object(f.jsx)(o.s,{disabled:!0,children:"Disabled action"})]})]}),Object(f.jsx)(o.U,{children:Object(f.jsx)(o.m,{children:Object(f.jsx)("div",{className:"pageImageContainer flexRow sb",children:Object(f.jsx)("div",{children:e.description})})})}),Object(f.jsx)(o.U,{children:Object(f.jsx)(o.m,{children:Object(f.jsx)("div",{className:"pageImageContainer flexRow sb",children:Object(f.jsx)("div",{className:"imageContainer",children:Object(f.jsx)("img",{src:e.products[0].img,alt:e.products[0].img})})})})}),Object(f.jsx)(o.U,{children:Object(f.jsx)(o.m,{children:Object(f.jsx)("div",{className:"flexRow sb",children:Object(f.jsx)("div",{className:"imageContainer",children:Object(f.jsx)("img",{src:e.banners[0].img,alt:e.banners[0].img})})})})})]})]})}))]}),Object(f.jsx)(o.j,{className:"text-theme",align:"center",children:"Created By"})]})]})}},916:function(e,t,r){}}]);
//# sourceMappingURL=27.a52e83b6.chunk.js.map