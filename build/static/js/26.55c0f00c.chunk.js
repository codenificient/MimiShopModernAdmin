(this["webpackJsonpmimishop-modern-admin"]=this["webpackJsonpmimishop-modern-admin"]||[]).push([[26],{734:function(e,a,n){"use strict";n.d(a,"a",(function(){return s}));n(1);var c=n(978),t=n(19);function s(e){var a=null;switch(e.type){case"select":a=Object(t.jsxs)(c.a.Group,{children:[e.label&&Object(t.jsx)(c.a.Label,{children:e.label}),Object(t.jsxs)("select",{className:"form-control",value:e.value,onChange:e.onChange,children:[Object(t.jsx)("option",{value:"",children:e.placeholder}),e.options.length>0?e.options.map((function(e,a){return Object(t.jsx)("option",{value:e.value,children:e.name},a)})):null]})]});break;case"text":default:a=Object(t.jsxs)(c.a.Group,{children:[e.label&&Object(t.jsx)(c.a.Label,{children:e.label}),Object(t.jsx)(c.a.Control,{type:e.type,placeholder:e.placeholder,value:e.value,onChange:e.onChange}),Object(t.jsx)(c.a.Text,{className:"text-muted",children:e.errorMessage})]})}return a}},753:function(e,a,n){"use strict";var c=n(16),t=n(34),s=n(712),r=n.n(s),l=n(1),i=n.n(l),o=n(710);var d=function(){for(var e=arguments.length,a=new Array(e),n=0;n<e;n++)a[n]=arguments[n];return a.filter((function(e){return null!=e})).reduce((function(e,a){if("function"!==typeof a)throw new Error("Invalid Argument Type, must only provide functions, undefined, or null.");return null===e?a:function(){for(var n=arguments.length,c=new Array(n),t=0;t<n;t++)c[t]=arguments[t];e.apply(this,c),a.apply(this,c)}}),null)};function b(e){return!e||"#"===e.trim()}var j=i.a.forwardRef((function(e,a){var n=e.as,s=void 0===n?"a":n,r=e.disabled,l=e.onKeyDown,o=Object(t.a)(e,["as","disabled","onKeyDown"]),j=function(e){var a=o.href,n=o.onClick;(r||b(a))&&e.preventDefault(),r?e.stopPropagation():n&&n(e)};return b(o.href)&&(o.role=o.role||"button",o.href=o.href||"#"),r&&(o.tabIndex=-1,o["aria-disabled"]=!0),i.a.createElement(s,Object(c.a)({ref:a},o,{onClick:j,onKeyDown:d((function(e){" "===e.key&&(e.preventDefault(),j(e))}),l)}))}));j.displayName="SafeAnchor";var u=j,m=i.a.forwardRef((function(e,a){var n=e.bsPrefix,s=e.variant,l=e.size,d=e.active,b=e.className,j=e.block,m=e.type,h=e.as,p=Object(t.a)(e,["bsPrefix","variant","size","active","className","block","type","as"]),f=Object(o.a)(n,"btn"),x=r()(b,f,d&&"active",s&&f+"-"+s,j&&f+"-block",l&&f+"-"+l);if(p.href)return i.a.createElement(u,Object(c.a)({},p,{as:h,ref:a,className:r()(x,p.disabled&&"disabled")}));a&&(p.ref=a),m?p.type=m:h||(p.type="button");var v=h||"button";return i.a.createElement(v,Object(c.a)({},p,{className:x}))}));m.displayName="Button",m.defaultProps={variant:"primary",active:!1,disabled:!1};a.a=m},761:function(e,a,n){"use strict";var c=n(718),t=n(714),s=n(1),r=n.n(s),l=n(753),i=n(121),o=(n(821),n(19));a.a=function(e){var a=[{icon:"cil-inbox",href:"/messages",action:"R\xe9ception",color:"info",count:527},{icon:"cil-star",action:"\xc9toiles",href:"/messages/starred",color:"warning",count:7},{icon:"cil-notes",action:"Brouillons",href:"/messages/drafts",color:"success",count:24},{icon:"cil-transfer",href:"/messages/sent",action:"Envoy\xe9s",color:"secondary"},{icon:"cil-trash",action:"Corbeille",href:"/messages/archived",color:"danger"},{icon:"cil-tags",action:"Important",href:"/messages/important",color:"violet"},{icon:"cil-warning",action:"Spams",href:"/messages/junk",color:"warning"}],n=[{label:"A Regler",color:"primary"},{label:"Rembourser",color:"danger"},{label:"Commandes",color:"warning"},{label:"R\xe9gl\xe9",color:"success"},{label:"Partenaire",color:"info"}];return Object(o.jsx)(r.a.Fragment,{children:Object(o.jsx)("div",{className:"leftHand",children:Object(o.jsx)("div",{className:"card240",children:Object(o.jsx)("div",{className:"cards-body normalBg outline",children:Object(o.jsxs)("div",{className:"emailActions p-3",children:[Object(o.jsx)("div",{className:"m-2 pb-4 black",children:Object(o.jsx)(i.b,{to:"/messages/newemail",children:Object(o.jsx)(l.a,{className:"btn200 ",variant:"danger",children:"Composer"})})}),a&&a.map((function(e,a){return Object(o.jsx)(i.b,{to:e.href,className:"pt-4",children:Object(o.jsxs)("div",{className:"c-message-actions mb-2 p-2 secondary",children:[Object(o.jsx)("span",{className:"mr-3 ".concat(e.color),children:Object(o.jsx)(c.a,{size:"l",name:e.icon})}),Object(o.jsx)("span",{className:"",children:e.action}),Object(o.jsx)("span",{className:"right pl-3",children:Object(o.jsx)(t.a,{shape:"pill",color:e.color,children:e.count})})]})},a)})),Object(o.jsx)("h6",{className:"textLight bold mt-5 mb-3",children:"Labels"}),n&&n.map((function(e,a){return Object(o.jsx)("div",{className:"c-message-actions mb-2 p-2 secondary",children:Object(o.jsxs)("div",{children:[Object(o.jsxs)("span",{className:"mr-3 ".concat(e.color),children:[Object(o.jsx)(c.a,{size:"l",name:"cib-discover"})," "]}),Object(o.jsx)("span",{children:e.label})]})},a)}))]})})})})})}},821:function(e,a,n){},824:function(e,a,n){"use strict";n.r(a),n.d(a,"default",(function(){return o}));var c=n(714),t=n(1),s=n.n(t),r=n(761),l=n(734),i=(n(825),n(19));function o(e){return Object(i.jsx)(s.a.Fragment,{children:Object(i.jsxs)("div",{className:"flexRowMsg darkerBg",children:[Object(i.jsx)("div",{className:"leftHand",children:Object(i.jsx)(r.a,{})}),Object(i.jsx)("div",{className:"rightHand ml-2 normalBg outline",children:Object(i.jsxs)("div",{className:"",children:[Object(i.jsx)("h5",{className:"textLight mt-1",style:{textAlign:"center"},children:"Composez un Nouveau Couriel"}),Object(i.jsxs)("div",{className:"m-2 lightGrey2",children:[Object(i.jsx)(l.a,{type:"email",label:"Destinataire",placeholder:"email du destinataire"}),Object(i.jsx)(l.a,{type:"text",label:"Sujet",placeholder:"sujet du couriel"}),Object(i.jsxs)("div",{children:[Object(i.jsx)("label",{children:"M\xe9ssage"}),Object(i.jsx)("textarea",{type:"text",label:"Subject",rows:"19",style:{padding:"15px",width:"100%"},placeholder:"Contenu de votre message"})]}),Object(i.jsx)("div",{children:Object(i.jsxs)(c.f,{className:"sa mt-2",children:[Object(i.jsx)(c.e,{className:"mr-4 btn120",color:"primary",children:"Envoyer"}),Object(i.jsx)(c.e,{className:"mr-4 btn120",color:"success",children:"Brouillon"}),Object(i.jsx)(c.e,{className:"btn120",color:"danger",children:"Supprimer"})]})})]})]})})]})})}},825:function(e,a,n){}}]);
//# sourceMappingURL=26.55c0f00c.chunk.js.map