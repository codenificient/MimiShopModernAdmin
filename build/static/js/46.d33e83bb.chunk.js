(this["webpackJsonpmimishop-modern-admin"]=this["webpackJsonpmimishop-modern-admin"]||[]).push([[46],{719:function(t,e,c){"use strict";c.d(e,"a",(function(){return n}));var o=c(92);function n(t,e){return function(t){if(Array.isArray(t))return t}(t)||function(t,e){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(t)){var c=[],o=!0,n=!1,a=void 0;try{for(var s,r=t[Symbol.iterator]();!(o=(s=r.next()).done)&&(c.push(s.value),!e||c.length!==e);o=!0);}catch(i){n=!0,a=i}finally{try{o||null==r.return||r.return()}finally{if(n)throw a}}return c}}(t,e)||Object(o.a)(t,e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}},762:function(t,e,c){"use strict";c.d(e,"a",(function(){return h}));var o=c(3),n=c(93),a=c(1),s=c.n(a),r=c(717),i=c(19),l=function(t){var e=t.name,c=t.text,a=Object(n.a)(t,["name","text"]),s=e?"https://coreui.io/react/docs/components/".concat(e):t.href;return Object(i.jsx)("div",{className:"card-header-actions",children:Object(i.jsx)(r.M,Object(o.a)(Object(o.a)({},a),{},{href:s,rel:"noreferrer noopener",target:"_blank",className:"card-header-action",children:Object(i.jsx)("small",{className:"text-muted",children:c||"docs"})}))})},h=s.a.memo(l)},881:function(t,e,c){"use strict";c.r(e);var o=c(123),n=c(719),a=c(1),s=c(717),r=c(762),i=c(19);e.default=function(){var t=Object(a.useState)([{position:"static"},{position:"static"},{position:"top-right",autohide:3e3}]),e=Object(n.a)(t,2),c=e[0],l=e[1],h=Object(a.useState)("top-right"),j=Object(n.a)(h,2),u=j[0],b=j[1],d=Object(a.useState)(!0),m=Object(n.a)(d,2),O=m[0],f=m[1],x=Object(a.useState)(5e3),p=Object(n.a)(x,2),y=p[0],v=p[1],g=Object(a.useState)(!0),k=Object(n.a)(g,2),N=k[0],S=k[1],w=Object(a.useState)(!0),C=Object(n.a)(w,2),F=C[0],T=C[1],A=c.reduce((function(t,e){return t[e.position]=t[e.position]||[],t[e.position].push(e),t}),{});return Object(i.jsxs)(s.h,{children:[Object(i.jsxs)(s.l,{children:["Toasts.",Object(i.jsx)(r.a,{name:"-Toast"})]}),Object(i.jsx)(s.i,{children:Object(i.jsx)(s.o,{children:Object(i.jsxs)(s.U,{children:[Object(i.jsx)(s.m,{sm:"12",lg:"6",children:Object(i.jsxs)(s.x,{children:[Object(i.jsx)("h5",{children:"Add toast with following props:"}),Object(i.jsxs)(s.y,{variant:"custom-checkbox",className:"my-2 mt-4",children:[Object(i.jsx)(s.G,{id:"autohide",checked:O,onChange:function(t){f(t.target.checked)},custom:!0}),Object(i.jsx)(s.L,{variant:"custom-checkbox",htmlFor:"autohide",children:"Autohide of the toast"})]}),O&&Object(i.jsxs)(s.y,{className:"my-2",children:[Object(i.jsx)(s.L,{htmlFor:"ccyear",children:"Time to autohide"}),Object(i.jsx)(s.F,{type:"number",value:y,onChange:function(t){v(Number(t.target.value))}})]}),Object(i.jsxs)(s.y,{className:"my-2",children:[Object(i.jsx)(s.L,{htmlFor:"ccyear",children:"Position"}),Object(i.jsx)("select",{className:"form-control",value:u,onChange:function(t){b(t.target.value)},children:["static","top-left","top-center","top-right","top-full","bottom-left","bottom-center","bottom-right","bottom-full"].map((function(t,e){return Object(i.jsx)("option",{children:t},e)}))})]}),Object(i.jsxs)(s.y,{variant:"custom-checkbox",className:"my-2",children:[Object(i.jsx)(s.G,{id:"fade",checked:F,onChange:function(t){T(t.target.checked)},custom:!0}),Object(i.jsx)(s.L,{variant:"custom-checkbox",htmlFor:"fade",children:"fade"})]}),Object(i.jsxs)(s.y,{variant:"custom-checkbox",className:"my-2",children:[Object(i.jsx)(s.G,{id:"close",custom:!0,checked:N,onChange:function(t){S(t.target.checked)}}),Object(i.jsx)(s.L,{variant:"custom-checkbox",htmlFor:"close",children:"closeButton"})]}),Object(i.jsx)(s.e,{className:"mr-1 w-25",color:"success",onClick:function(){l([].concat(Object(o.a)(c),[{position:u,autohide:O&&y,closeButton:N,fade:F}]))},children:"Add toast"})]})}),Object(i.jsx)(s.m,{sm:"12",lg:"6",children:Object.keys(A).map((function(t){return Object(i.jsx)(s.hb,{position:t,children:A[t].map((function(e,c){return Object(i.jsxs)(s.eb,{show:!0,autohide:e.autohide,fade:e.fade,children:[Object(i.jsx)(s.gb,{closeButton:e.closeButton,children:"Toast title"}),Object(i.jsx)(s.fb,{children:"This is a toast in ".concat(t," positioned toaster number ").concat(c+1,".")})]},"toast"+c)}))},"toaster"+t)}))})]})})})]})}}}]);
//# sourceMappingURL=46.d33e83bb.chunk.js.map