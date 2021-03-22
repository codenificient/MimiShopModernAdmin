/*! For license information please see 12.d629abae.chunk.js.LICENSE.txt */
(this["webpackJsonpcoreui-free-react-admin-template"]=this["webpackJsonpcoreui-free-react-admin-template"]||[]).push([[12,13],{655:function(e,t,r){var n;!function(){"use strict";var r={}.hasOwnProperty;function a(){for(var e=[],t=0;t<arguments.length;t++){var n=arguments[t];if(n){var c=typeof n;if("string"===c||"number"===c)e.push(n);else if(Array.isArray(n)&&n.length){var s=a.apply(null,n);s&&e.push(s)}else if("object"===c)for(var i in n)r.call(n,i)&&n[i]&&e.push(i)}}return e.join(" ")}e.exports?(a.default=a,e.exports=a):void 0===(n=function(){return a}.apply(t,[]))||(e.exports=n)}()},664:function(e,t,r){"use strict";r.d(t,"a",(function(){return s}));r(16);var n=r(1),a=r.n(n),c=a.a.createContext({});c.Consumer,c.Provider;function s(e,t){var r=Object(n.useContext)(c);return e||r[t]||t}},673:function(e,t,r){"use strict";r.d(t,"a",(function(){return a}));var n=r(92);function a(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(e)){var r=[],n=!0,a=!1,c=void 0;try{for(var s,i=e[Symbol.iterator]();!(n=(s=i.next()).done)&&(r.push(s.value),!t||r.length!==t);n=!0);}catch(l){a=!0,c=l}finally{try{n||null==i.return||i.return()}finally{if(a)throw c}}return r}}(e,t)||Object(n.a)(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}},683:function(e,t,r){"use strict";r.d(t,"a",(function(){return d}));var n=r(1),a=r.n(n),c=r(723),s=r(737),i=r(722),l=r(119),o=(r(684),r(18));function d(e){return Object(o.jsx)(a.a.Fragment,{children:e.sidebar?Object(o.jsx)(c.a,{fluid:!0,className:"layoutRoot",children:Object(o.jsxs)(s.a,{children:[Object(o.jsx)(i.a,{md:2,className:"sidebar",children:Object(o.jsxs)("ul",{children:[Object(o.jsx)("li",{children:Object(o.jsx)(l.c,{exact:!0,to:"/",children:"Accueil"})}),Object(o.jsx)("li",{children:Object(o.jsx)(l.c,{to:"/page",children:"Pages"})}),Object(o.jsx)("li",{children:Object(o.jsx)(l.c,{to:"/category",children:"Cate\u0301gories"})}),Object(o.jsx)("li",{children:Object(o.jsx)(l.c,{to:"/products",children:"Produits"})}),Object(o.jsx)("li",{children:Object(o.jsx)(l.c,{to:"/orders",children:"Commandes"})})]})}),Object(o.jsx)(i.a,{md:10,style:{marginLeft:"auto",paddingTop:"60px"},children:e.children})]})}):e.children})}},684:function(e,t,r){},713:function(e,t,r){"use strict";var n=r(3),a=(r(1),r(714),r(18));t.a=function(e){return Object(a.jsxs)("div",Object(n.a)(Object(n.a)({className:"cardOne"},e),{},{children:[(e.headerLeft||e.headerRight)&&Object(a.jsxs)("div",{className:"cardHeader",children:[e.headerLeft&&Object(a.jsx)("div",{style:{alignSelf:"center",fontSize:"20px",fontWeight:"600"},children:e.headerLeft}),e.headerRight&&e.headerRight]}),e.children]}))}},714:function(e,t,r){},722:function(e,t,r){"use strict";var n=r(16),a=r(34),c=r(655),s=r.n(c),i=r(1),l=r.n(i),o=r(664),d=["xl","lg","md","sm","xs"],u=l.a.forwardRef((function(e,t){var r=e.bsPrefix,c=e.className,i=e.as,u=void 0===i?"div":i,f=Object(a.a)(e,["bsPrefix","className","as"]),j=Object(o.a)(r,"col"),b=[],p=[];return d.forEach((function(e){var t,r,n,a=f[e];if(delete f[e],"object"===typeof a&&null!=a){var c=a.span;t=void 0===c||c,r=a.offset,n=a.order}else t=a;var s="xs"!==e?"-"+e:"";t&&b.push(!0===t?""+j+s:""+j+s+"-"+t),null!=n&&p.push("order"+s+"-"+n),null!=r&&p.push("offset"+s+"-"+r)})),b.length||b.push(j),l.a.createElement(u,Object(n.a)({},f,{ref:t,className:s.a.apply(void 0,[c].concat(b,p))}))}));u.displayName="Col",t.a=u},723:function(e,t,r){"use strict";var n=r(16),a=r(34),c=r(655),s=r.n(c),i=r(1),l=r.n(i),o=r(664),d=l.a.forwardRef((function(e,t){var r=e.bsPrefix,c=e.fluid,i=e.as,d=void 0===i?"div":i,u=e.className,f=Object(a.a)(e,["bsPrefix","fluid","as","className"]),j=Object(o.a)(r,"container"),b="string"===typeof c?"-"+c:"-fluid";return l.a.createElement(d,Object(n.a)({ref:t},f,{className:s()(u,c?""+j+b:j)}))}));d.displayName="Container",d.defaultProps={fluid:!1},t.a=d},737:function(e,t,r){"use strict";var n=r(16),a=r(34),c=r(655),s=r.n(c),i=r(1),l=r.n(i),o=r(664),d=["xl","lg","md","sm","xs"],u=l.a.forwardRef((function(e,t){var r=e.bsPrefix,c=e.className,i=e.noGutters,u=e.as,f=void 0===u?"div":u,j=Object(a.a)(e,["bsPrefix","className","noGutters","as"]),b=Object(o.a)(r,"row"),p=b+"-cols",h=[];return d.forEach((function(e){var t,r=j[e];delete j[e];var n="xs"!==e?"-"+e:"";null!=(t=null!=r&&"object"===typeof r?r.cols:r)&&h.push(""+p+n+"-"+t)})),l.a.createElement(f,Object(n.a)({ref:t},j,{className:s.a.apply(void 0,[c,b,i&&"no-gutters"].concat(h))}))}));u.displayName="Row",u.defaultProps={noGutters:!1},t.a=u},771:function(e,t,r){"use strict";var n=r(16),a=r(34),c=r(655),s=r.n(c),i=r(1),l=r.n(i),o=r(664);var d=function(){for(var e=arguments.length,t=new Array(e),r=0;r<e;r++)t[r]=arguments[r];return t.filter((function(e){return null!=e})).reduce((function(e,t){if("function"!==typeof t)throw new Error("Invalid Argument Type, must only provide functions, undefined, or null.");return null===e?t:function(){for(var r=arguments.length,n=new Array(r),a=0;a<r;a++)n[a]=arguments[a];e.apply(this,n),t.apply(this,n)}}),null)};function u(e){return!e||"#"===e.trim()}var f=l.a.forwardRef((function(e,t){var r=e.as,c=void 0===r?"a":r,s=e.disabled,i=e.onKeyDown,o=Object(a.a)(e,["as","disabled","onKeyDown"]),f=function(e){var t=o.href,r=o.onClick;(s||u(t))&&e.preventDefault(),s?e.stopPropagation():r&&r(e)};return u(o.href)&&(o.role=o.role||"button",o.href=o.href||"#"),s&&(o.tabIndex=-1,o["aria-disabled"]=!0),l.a.createElement(c,Object(n.a)({ref:t},o,{onClick:f,onKeyDown:d((function(e){" "===e.key&&(e.preventDefault(),f(e))}),i)}))}));f.displayName="SafeAnchor";var j=f,b=l.a.forwardRef((function(e,t){var r=e.bsPrefix,c=e.variant,i=e.size,d=e.active,u=e.className,f=e.block,b=e.type,p=e.as,h=Object(a.a)(e,["bsPrefix","variant","size","active","className","block","type","as"]),v=Object(o.a)(r,"btn"),m=s()(u,v,d&&"active",c&&v+"-"+c,f&&v+"-block",i&&v+"-"+i);if(h.href)return l.a.createElement(j,Object(n.a)({},h,{as:p,ref:t,className:s()(m,h.disabled&&"disabled")}));t&&(h.ref=t),b?h.type=b:p||(h.type="button");var x=p||"button";return l.a.createElement(x,Object(n.a)({},h,{className:m}))}));b.displayName="Button",b.defaultProps={variant:"primary",active:!1,disabled:!1};t.a=b},784:function(e,t,r){"use strict";r.r(t),r.d(t,"default",(function(){return f}));var n=r(673),a=r(1),c=r.n(a),s=r(771),i=r(68),l=r(120),o=r(713),d=r(683),u=(r(785),r(18));function f(e){var t=Object(i.c)((function(e){return e.order})),r=Object(i.b)(),f=Object(a.useState)(""),j=Object(n.a)(f,2),b=j[0],p=j[1],h=Object(a.useState)(""),v=Object(n.a)(h,2),m=(v[0],v[1],function(e){if(e){var t=new Date(e);return"".concat(t.getMonth()+1,"-").concat(t.getDate(),"-").concat(t.getFullYear())}return""});return Object(u.jsxs)(d.a,{children:[Object(u.jsx)("h1",{style:{margin:"3rem",color:"#d16767"},children:"Les Achats en Cours"}),t.orders&&t.orders.map((function(e,t){return Object(u.jsxs)(o.a,{style:{margin:"60px auto",color:"#d16767"},headerLeft:"ACTIVES DE COMMANDE - ".concat(e._id),children:[Object(u.jsxs)("div",{style:{display:"flex",justifyContent:"space-between",padding:"30px 20px",alignItems:"center"},children:[Object(u.jsxs)("div",{children:[Object(u.jsx)("div",{className:"title",children:"Items"}),e&&e.items.map((function(e,t){return Object(u.jsx)("div",{className:"value",children:e.productId.name},t)}))]}),Object(u.jsxs)("div",{children:[Object(u.jsx)("span",{className:"title",children:"Montant Total"}),Object(u.jsx)("br",{}),Object(u.jsx)("span",{className:"value",children:e.totalAmount})]}),Object(u.jsxs)("div",{children:[Object(u.jsx)("span",{className:"title",children:"Type de Paiement"})," ",Object(u.jsx)("br",{}),Object(u.jsx)("span",{className:"value",children:e.paymentType})]}),Object(u.jsxs)("div",{children:[Object(u.jsx)("span",{className:"title",children:"Status de Paiement"})," ",Object(u.jsx)("br",{}),Object(u.jsx)("span",{className:"value",children:e.paymentStatus})]})]}),Object(u.jsxs)("div",{style:{boxSizing:"border-box",padding:"100px",display:"flex",alignItems:"center"},children:[Object(u.jsx)("div",{className:"orderTrack",children:e.orderStatus.map((function(e){return Object(u.jsxs)("div",{className:"orderStatus ".concat(e.isCompleted?"active":""),children:[Object(u.jsx)("div",{className:"point ".concat(e.isCompleted?"active":"")}),Object(u.jsxs)("div",{className:"orderInfo",children:[Object(u.jsx)("div",{className:"status",children:e.type}),Object(u.jsx)("div",{className:"statusDate",children:m(e.date)})]})]})}))}),Object(u.jsx)("div",{style:{paddingLeft:"50px",boxSizing:"border-box"},children:Object(u.jsxs)("select",{onChange:function(e){return p(e.target.value)},children:[Object(u.jsx)("option",{value:"",children:"Mise \xe0 Jour du Status"}),e.orderStatus.map((function(e){return Object(u.jsx)(c.a.Fragment,{children:e.isCompleted?null:Object(u.jsx)("option",{value:e.type,children:e.type},e.type)})}))]})}),Object(u.jsx)("div",{style:{paddingLeft:"40px",boxSizing:"border-box"},children:Object(u.jsx)(s.a,{className:"confirmOrderButton btn btn-info",onClick:function(){return function(e){var t={orderId:e,type:b};r(Object(l.k)(t))}(e._id)},children:"Confirmer"})})]})]},t)}))]})}},785:function(e,t,r){}}]);
//# sourceMappingURL=12.d629abae.chunk.js.map