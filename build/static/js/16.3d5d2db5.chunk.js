(this["webpackJsonpcoreui-free-react-admin-template"]=this["webpackJsonpcoreui-free-react-admin-template"]||[]).push([[16],{678:function(e,t,c){"use strict";c.d(t,"a",(function(){return l}));c(1);var n=c(911),a=c(806),r=c(24);function l(e){return Object(r.jsxs)(n.a,{size:e.size,show:e.show,onHide:e.handleClose,children:[Object(r.jsx)(n.a.Header,{closeButton:!0,children:Object(r.jsx)(n.a.Title,{children:e.modalTitle})}),Object(r.jsx)(n.a.Body,{children:e.children}),Object(r.jsx)(n.a.Footer,{children:e.buttons?e.buttons.map((function(e,t){return Object(r.jsx)(a.a,{variant:e.color,onClick:e.onClick,children:e.label},t)})):Object(r.jsxs)("div",{children:[Object(r.jsx)(a.a,{variant:"secondary",onClick:e.handleClose,children:"Annuler"}),Object(r.jsx)(a.a,{className:"infoButton",onClick:e.handleSubmit,children:"Sauvegarder"})]})})]})}},681:function(e,t,c){"use strict";c.d(t,"a",(function(){return r}));c(1);var n=c(912),a=c(24);function r(e){var t=null;switch(e.type){case"select":t=Object(a.jsxs)(n.a.Group,{children:[e.label&&Object(a.jsx)(n.a.Label,{children:e.label}),Object(a.jsxs)("select",{className:"form-control",value:e.value,onChange:e.onChange,children:[Object(a.jsx)("option",{value:"",children:e.placeholder}),e.options.length>0?e.options.map((function(e,t){return Object(a.jsx)("option",{value:e.value,children:e.name},t)})):null]})]});break;case"text":default:t=Object(a.jsxs)(n.a.Group,{children:[e.label&&Object(a.jsx)(n.a.Label,{children:e.label}),Object(a.jsx)(n.a.Control,{type:e.type,placeholder:e.placeholder,value:e.value,onChange:e.onChange}),Object(a.jsx)(n.a.Text,{className:"text-muted",children:e.errorMessage})]})}return t}},687:function(e,t,c){"use strict";c.d(t,"a",(function(){return o}));var n=c(1),a=c.n(n),r=c(727),l=c(747),s=c(732),i=c(167),j=(c(688),c(24));function o(e){return Object(j.jsx)(a.a.Fragment,{children:e.sidebar?Object(j.jsx)(r.a,{fluid:!0,className:"layoutRoot",children:Object(j.jsxs)(l.a,{children:[Object(j.jsx)(s.a,{md:2,className:"sidebar",children:Object(j.jsxs)("ul",{children:[Object(j.jsx)("li",{children:Object(j.jsx)(i.c,{exact:!0,to:"/",children:"Accueil"})}),Object(j.jsx)("li",{children:Object(j.jsx)(i.c,{to:"/page",children:"Pages"})}),Object(j.jsx)("li",{children:Object(j.jsx)(i.c,{to:"/category",children:"Cate\u0301gories"})}),Object(j.jsx)("li",{children:Object(j.jsx)(i.c,{to:"/products",children:"Produits"})}),Object(j.jsx)("li",{children:Object(j.jsx)(i.c,{to:"/orders",children:"Commandes"})})]})}),Object(j.jsx)(s.a,{md:10,style:{marginLeft:"auto",paddingTop:"60px"},children:e.children})]})}):e.children})}},688:function(e,t,c){},727:function(e,t,c){"use strict";var n=c(16),a=c(34),r=c(655),l=c.n(r),s=c(1),i=c.n(s),j=c(668),o=i.a.forwardRef((function(e,t){var c=e.bsPrefix,r=e.fluid,s=e.as,o=void 0===s?"div":s,d=e.className,u=Object(a.a)(e,["bsPrefix","fluid","as","className"]),b=Object(j.a)(c,"container"),h="string"===typeof r?"-"+r:"-fluid";return i.a.createElement(o,Object(n.a)({ref:t},u,{className:l()(d,r?""+b+h:b)}))}));o.displayName="Container",o.defaultProps={fluid:!1},t.a=o},804:function(e,t,c){"use strict";var n=c(169);t.a=function e(t){var c,a=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[],r=Object(n.a)(t);try{for(r.s();!(c=r.n()).done;){var l=c.value;a.push({value:l._id,name:l.name,parentId:l.parentId,type:l.type}),l.children.length>0&&e(l.children,a)}}catch(s){r.e(s)}finally{r.f()}return a}},826:function(e,t,c){"use strict";c.r(t),c.d(t,"default",(function(){return x}));var n=c(119),a=c(676),r=c(1),l=c(727),s=c(747),i=c(732),j=c(806),o=c(68),d=c(118),u=(c(687),c(681)),b=c(678),h=c(804),O=(c(859),c(24));function x(e){var t=Object(o.c)((function(e){return e.category})),c=Object(o.c)((function(e){return e.page})),x=Object(r.useState)(!1),f=Object(a.a)(x,2),p=f[0],m=f[1],g=Object(r.useState)(""),v=Object(a.a)(g,2),C=v[0],y=v[1],N=Object(r.useState)(""),P=Object(a.a)(N,2),S=P[0],w=P[1],k=Object(r.useState)(""),T=Object(a.a)(k,2),I=T[0],B=T[1],E=Object(r.useState)([]),A=Object(a.a)(E,2),D=A[0],F=A[1],z=Object(r.useState)(""),L=Object(a.a)(z,2),G=L[0],H=L[1],J=Object(r.useState)([]),R=Object(a.a)(J,2),q=R[0],M=R[1],_=Object(r.useState)([]),K=Object(a.a)(_,2),Q=K[0],U=K[1],V=Object(o.b)();Object(r.useEffect)((function(){F(Object(h.a)(t.categories))}),[t]),Object(r.useEffect)((function(){c.loading||(m(!1),y(""),B(""),H(""),M([]),U([]),w(""))}),[c]);var W=function(e){var t=D.find((function(t){return t.value==e.target.value}));H(e.target.value),B(t.type)},X=function(e){M([].concat(Object(n.a)(q),[e.target.files[0]]))},Y=function(e){U([].concat(Object(n.a)(Q),[e.target.files[0]]))},Z=function(e){var t=new FormData;if(""===C)return alert("Titre et Description sont r\xe9quis"),void m(!1);t.append("title",C),t.append("description",S),t.append("category",G),t.append("type",I),q.forEach((function(e,c){t.append("banners",e)})),Q.forEach((function(e,c){t.append("products",e)})),V(Object(d.c)(t))};return Object(O.jsxs)(O.Fragment,{children:[Object(O.jsx)("h1",{style:{margin:"3rem"},children:"Cre\u0301er une nouvelle page"}),Object(O.jsx)(b.a,{size:"lg",show:p,modalTitle:"Cr\xe9er une Nouvelle Page",handleClose:function(e){return m(!1)},handleSubmit:Z,children:Object(O.jsxs)(l.a,{children:[Object(O.jsx)(s.a,{children:Object(O.jsxs)(i.a,{children:[Object(O.jsx)("p",{children:"Cate\u0301gorie de Page"}),Object(O.jsx)(u.a,{type:"select",value:G,onChange:W,options:D,placeholder:"Se\u0301lectionner Cate\u0301gorie de la Page"})]})}),Object(O.jsx)("br",{}),Object(O.jsx)(s.a,{children:Object(O.jsx)(i.a,{children:Object(O.jsx)(u.a,{className:"form-control",label:"Titre de Page",value:C,onChange:function(e){return y(e.target.value)},placeholder:"Ajouter Titre de la Page"})})}),Object(O.jsx)("br",{}),Object(O.jsx)(s.a,{children:Object(O.jsxs)(i.a,{children:[Object(O.jsx)("p",{children:"Description de la Page"}),Object(O.jsx)(u.a,{className:"form-control",rows:"4",value:S,onChange:function(e){return w(e.target.value)},placeholder:"Ajouter une Description"})]})}),Object(O.jsxs)("div",{className:"listImagesContainer",children:[Object(O.jsx)("br",{}),Object(O.jsx)("p",{children:"Se\u0301lectionner Bande\u0301role Publicitaire"}),Object(O.jsxs)(s.a,{children:[q.length>0?q.map((function(e,t){return Object(O.jsx)("div",{children:Object(O.jsx)(s.a,{className:"listImages",children:Object(O.jsx)(i.a,{children:e.name})},t)})})):null,Object(O.jsx)(i.a,{children:Object(O.jsx)(u.a,{className:"form-control",type:"file",name:"banners",onChange:X})})]})]}),Object(O.jsxs)("div",{className:"listImagesContainer",children:[Object(O.jsx)("br",{}),Object(O.jsx)("p",{children:"Se\u0301lectionner Images pour la Page"}),Object(O.jsxs)(s.a,{children:[Q.length>0?Q.map((function(e,t){return Object(O.jsx)("div",{children:Object(O.jsx)(s.a,{className:"listImages",children:Object(O.jsx)(i.a,{children:e.name})},t)})})):null,Object(O.jsx)(i.a,{children:Object(O.jsx)(u.a,{className:"form-control",type:"file",name:"products",onChange:Y})}),Object(O.jsx)("br",{})]})]})]})}),Object(O.jsx)(j.a,{variant:"info",className:"infoButton",onClick:function(){return m(!0)},children:"Cre\u0301er une Page"}),e.children]})}},859:function(e,t,c){}}]);
//# sourceMappingURL=16.3d5d2db5.chunk.js.map