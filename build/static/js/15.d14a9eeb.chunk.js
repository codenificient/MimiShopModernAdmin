(this["webpackJsonpcoreui-free-react-admin-template"]=this["webpackJsonpcoreui-free-react-admin-template"]||[]).push([[15,47],{715:function(e,t,a){"use strict";a.d(t,"a",(function(){return s}));var c=a(92);function s(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(e)){var a=[],c=!0,s=!1,r=void 0;try{for(var n,l=e[Symbol.iterator]();!(c=(n=l.next()).done)&&(a.push(n.value),!t||a.length!==t);c=!0);}catch(i){s=!0,r=i}finally{try{c||null==l.return||l.return()}finally{if(s)throw r}}return a}}(e,t)||Object(c.a)(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}},734:function(e,t,a){"use strict";a.d(t,"a",(function(){return r}));a(1);var c=a(977),s=a(19);function r(e){var t=null;switch(e.type){case"select":t=Object(s.jsxs)(c.a.Group,{children:[e.label&&Object(s.jsx)(c.a.Label,{children:e.label}),Object(s.jsxs)("select",{className:"form-control",value:e.value,onChange:e.onChange,children:[Object(s.jsx)("option",{value:"",children:e.placeholder}),e.options.length>0?e.options.map((function(e,t){return Object(s.jsx)("option",{value:e.value,children:e.name},t)})):null]})]});break;case"text":default:t=Object(s.jsxs)(c.a.Group,{children:[e.label&&Object(s.jsx)(c.a.Label,{children:e.label}),Object(s.jsx)(c.a.Control,{type:e.type,placeholder:e.placeholder,value:e.value,onChange:e.onChange}),Object(s.jsx)(c.a.Text,{className:"text-muted",children:e.errorMessage})]})}return t}},785:function(e,t,a){"use strict";a(3),a(719),a(1),a(19)},822:function(e,t,a){"use strict";a.r(t),a.d(t,"default",(function(){return j}));var c=a(714),s=a(1),r=a.n(s),n=a(70),l=a(734),i=a(19);function j(e){Object(n.c)((function(e){return e.page.allpages}));return Object(i.jsxs)(r.a.Fragment,{children:[Object(i.jsx)("h2",{className:"textLight",style:{margin:"1rem"},children:"Archives de Messages"}),Object(i.jsxs)(c.h,{children:[Object(i.jsxs)(c.i,{children:[Object(i.jsx)(l.a,{type:"email",label:"Receiver",placeholder:"email du destinataire"}),Object(i.jsx)(l.a,{type:"text",label:"Subject",placeholder:"sujet du couriel"}),Object(i.jsx)("label",{children:"Message"}),Object(i.jsx)("br",{}),Object(i.jsx)("textarea",{type:"text",label:"Subject",rows:"5",style:{padding:"10px",width:"100%"},placeholder:"contenu de votre message"})]}),Object(i.jsx)(c.j,{className:"darkenBg",align:"center",children:"Created By"})]})]})}},823:function(e,t,a){"use strict";a.r(t),a.d(t,"default",(function(){return j}));var c=a(714),s=a(1),r=a.n(s),n=(a(70),a(780)),l=(a(785),a(734)),i=(a(824),a(19));function j(e){return Object(i.jsx)(r.a.Fragment,{children:Object(i.jsxs)("div",{className:"row p-2 darkerBg",children:[Object(i.jsx)(n.a,{}),Object(i.jsx)("div",{className:"col-sm-9 ml-3 normalBg outline",children:Object(i.jsxs)("div",{className:"cards-body ",children:[Object(i.jsx)("h5",{className:"textLight",style:{margin:"1rem"},children:"Nouveau Couriel"}),Object(i.jsxs)("div",{className:"mt-4 dark",children:[Object(i.jsx)(l.a,{type:"email",label:"Destinataire",placeholder:"email du destinataire"}),Object(i.jsx)(l.a,{type:"text",label:"Sujet",placeholder:"sujet du couriel"}),Object(i.jsx)("label",{children:"M\xe9ssage"}),Object(i.jsx)("br",{}),Object(i.jsx)("textarea",{type:"text",label:"Subject",rows:"16",style:{padding:"15px",width:"100%"},placeholder:"Contenu de votre message"}),Object(i.jsxs)(c.f,{className:"sb mt-4",children:[Object(i.jsx)(c.e,{className:"mr-4 btn120",color:"primary",children:"Envoyer"}),Object(i.jsx)(c.e,{className:"mr-4 btn120",color:"dark",children:"Brouillon"}),Object(i.jsx)(c.e,{className:"btn120",color:"danger",children:"Supprimer"})]})]})]})})]})})}},824:function(e,t,a){},892:function(e,t,a){},893:function(e,t,a){},894:function(e,t,a){},895:function(e,t,a){},963:function(e,t,a){"use strict";a.r(t),a.d(t,"default",(function(){return b}));var c=a(715),s=(a(714),a(1)),r=a.n(s),n=(a(822),a(780)),l=(a(785),a(719)),i=a(171),j=(a(892),a(19));var o=function(e){return Object(j.jsx)(r.a.Fragment,{children:e.emails&&e.emails.map((function(e,t){return Object(j.jsxs)("div",{className:"c-message-details m-5 pt-2 flexRow",children:[Object(j.jsx)("span",{className:"mr-2",children:Object(j.jsx)("input",{type:"checkbox",className:"left"})}),Object(j.jsx)("span",{className:"icons pl-1",children:Object(j.jsx)(l.a,{name:"cil-star"})}),Object(j.jsx)("a",{href:"/messages/emaildetails/".concat(e.id),className:"c-message",children:Object(j.jsxs)("div",{className:"",children:[Object(j.jsxs)("span",{className:"mr-3 bold email-text pl1",children:[Object(j.jsx)(l.a,{name:"cil-user"}),"\xa0\xa0",e.name]}),Object(j.jsxs)("span",{className:"email-text text-center",children:[Object(j.jsx)(l.a,{name:"cil-envelope-closed"}),"\xa0\xa0",e.subject]}),Object(j.jsx)("span",{className:"r2 email-text posa",children:Object(i.c)(e.date)})]})},t)]})}))})},d=(a(893),a(855));function u(e){var t=Object(s.useState)(!1),a=Object(c.a)(t,2);a[0],a[1];return Object(j.jsx)(r.a.Fragment,{children:Object(j.jsxs)("div",{className:"row p-2 darkerBg",children:[Object(j.jsx)(n.a,{}),Object(j.jsx)("div",{className:"col-sm-9 ml-3 normalBg outline",children:Object(j.jsx)("div",{className:"cards-body",children:Object(j.jsx)("div",{className:"borderTop secondary",children:Object(j.jsx)(o,{icons:["cil-star"],emails:d.a})})})})]})})}a(823),a(70),a(894);a(895);function b(e){var t=Object(s.useState)(1),a=Object(c.a)(t,2);a[0],a[1];return Object(j.jsx)(r.a.Fragment,{children:Object(j.jsx)(u,{})})}}}]);
//# sourceMappingURL=15.d14a9eeb.chunk.js.map