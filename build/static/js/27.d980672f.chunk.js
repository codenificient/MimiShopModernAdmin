(this["webpackJsonpcoreui-free-react-admin-template"]=this["webpackJsonpcoreui-free-react-admin-template"]||[]).push([[27],{722:function(e,t,c){"use strict";c.d(t,"a",(function(){return o}));var n=c(1),a=c.n(n),r=c(745),l=c(744),s=c(741),i=c(120),j=(c(723),c(19));function o(e){return Object(j.jsx)(a.a.Fragment,{children:e.sidebar?Object(j.jsx)(r.a,{fluid:!0,className:"layoutRoot",children:Object(j.jsxs)(l.a,{children:[Object(j.jsx)(s.a,{md:2,className:"sidebar",children:Object(j.jsxs)("ul",{children:[Object(j.jsx)("li",{children:Object(j.jsx)(i.c,{exact:!0,to:"/",children:"Accueil"})}),Object(j.jsx)("li",{children:Object(j.jsx)(i.c,{to:"/page",children:"Pages"})}),Object(j.jsx)("li",{children:Object(j.jsx)(i.c,{to:"/category",children:"Cate\u0301gories"})}),Object(j.jsx)("li",{children:Object(j.jsx)(i.c,{to:"/products",children:"Produits"})}),Object(j.jsx)("li",{children:Object(j.jsx)(i.c,{to:"/orders",children:"Commandes"})})]})}),Object(j.jsx)(s.a,{md:10,style:{marginLeft:"auto",paddingTop:"60px"},children:e.children})]})}):e.children})}},723:function(e,t,c){},734:function(e,t,c){"use strict";c.d(t,"a",(function(){return r}));c(1);var n=c(977),a=c(19);function r(e){var t=null;switch(e.type){case"select":t=Object(a.jsxs)(n.a.Group,{children:[e.label&&Object(a.jsx)(n.a.Label,{children:e.label}),Object(a.jsxs)("select",{className:"form-control",value:e.value,onChange:e.onChange,children:[Object(a.jsx)("option",{value:"",children:e.placeholder}),e.options.length>0?e.options.map((function(e,t){return Object(a.jsx)("option",{value:e.value,children:e.name},t)})):null]})]});break;case"text":default:t=Object(a.jsxs)(n.a.Group,{children:[e.label&&Object(a.jsx)(n.a.Label,{children:e.label}),Object(a.jsx)(n.a.Control,{type:e.type,placeholder:e.placeholder,value:e.value,onChange:e.onChange}),Object(a.jsx)(n.a.Text,{className:"text-muted",children:e.errorMessage})]})}return t}},738:function(e,t,c){"use strict";c.d(t,"a",(function(){return l}));c(1);var n=c(976),a=c(750),r=c(19);function l(e){return Object(r.jsxs)(n.a,{size:e.size,show:e.show,onHide:e.handleClose,btnTitle:e.btnTitle,children:[Object(r.jsx)(n.a.Header,{closeButton:!0,children:Object(r.jsx)(n.a.Title,{children:e.modalTitle})}),Object(r.jsx)(n.a.Body,{children:e.children}),Object(r.jsx)(n.a.Footer,{children:e.buttons?e.buttons.map((function(e,t){return Object(r.jsx)(a.a,{variant:e.color,onClick:e.onClick,children:e.label},t)})):Object(r.jsxs)("div",{children:[Object(r.jsx)(a.a,{variant:"secondary",onClick:e.handleClose,children:"Annuler"}),Object(r.jsx)(a.a,{className:"infoButton",onClick:e.handleSubmit,children:e.btnTitle?e.btnTitle:"Sauvegarder"})]})})]})}},841:function(e,t,c){"use strict";var n=c(172);t.a=function e(t){var c,a=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[],r=Object(n.a)(t);try{for(r.s();!(c=r.n()).done;){var l=c.value;a.push({value:l._id,name:l.name,parentId:l.parentId,type:l.type}),l.children.length>0&&e(l.children,a)}}catch(s){r.e(s)}finally{r.f()}return a}},920:function(e,t,c){"use strict";c.r(t),c.d(t,"default",(function(){return p}));var n=c(122),a=c(715),r=c(1),l=c(745),s=c(744),i=c(741),j=c(750),o=c(70),d=c(121),u=(c(722),c(734)),b=c(738),h=c(841),O=c(857),x=(c(921),c(19));function p(e){var t=Object(o.c)((function(e){return e.category})),c=Object(o.c)((function(e){return e.page})),p=Object(r.useState)(!1),f=Object(a.a)(p,2),m=f[0],g=f[1],v=Object(r.useState)(""),C=Object(a.a)(v,2),y=C[0],N=C[1],S=Object(r.useState)(""),T=Object(a.a)(S,2),P=T[0],w=T[1],k=Object(r.useState)(""),I=Object(a.a)(k,2),B=I[0],A=I[1],D=Object(r.useState)([]),E=Object(a.a)(D,2),F=E[0],z=E[1],L=Object(r.useState)(""),G=Object(a.a)(L,2),H=G[0],J=G[1],q=Object(r.useState)([]),M=Object(a.a)(q,2),R=M[0],_=M[1],K=Object(r.useState)([]),Q=Object(a.a)(K,2),U=Q[0],V=Q[1],W=Object(o.b)();Object(r.useEffect)((function(){z(Object(h.a)(t.categories))}),[t]),Object(r.useEffect)((function(){c.loading||(g(!1),N(""),A(""),J(""),_([]),V([]),w(""))}),[c]);var X=function(e){var t=F.find((function(t){return t.value==e.target.value}));J(e.target.value),A(t.type)},Y=function(e){_([].concat(Object(n.a)(R),[e.target.files[0]]))},Z=function(e){V([].concat(Object(n.a)(U),[e.target.files[0]]))},$=function(e){var t=new FormData;if(""===y)return alert("Titre et Description sont r\xe9quis"),void g(!1);t.append("title",y),t.append("description",P),t.append("category",H),t.append("type",B),R.forEach((function(e,c){t.append("banners",e)})),U.forEach((function(e,c){t.append("products",e)})),W(Object(d.c)(t))};return Object(x.jsxs)(x.Fragment,{children:[Object(x.jsx)("h1",{style:{margin:"3rem",color:"white"},children:"Cre\u0301er une nouvelle page"}),Object(x.jsx)(b.a,{size:"lg",show:m,modalTitle:"Cr\xe9er une Nouvelle Page",handleClose:function(e){return g(!1)},handleSubmit:$,children:Object(x.jsxs)(l.a,{children:[Object(x.jsx)(s.a,{children:Object(x.jsxs)(i.a,{children:[Object(x.jsx)("p",{children:"Cate\u0301gorie de Page"}),Object(x.jsx)(u.a,{type:"select",value:H,onChange:X,options:F,placeholder:"Se\u0301lectionner Cate\u0301gorie de la Page"})]})}),Object(x.jsx)("br",{}),Object(x.jsx)(s.a,{children:Object(x.jsx)(i.a,{children:Object(x.jsx)(u.a,{className:"form-control",label:"Titre de Page",value:y,onChange:function(e){return N(e.target.value)},placeholder:"Ajouter Titre de la Page"})})}),Object(x.jsx)("br",{}),Object(x.jsx)(s.a,{children:Object(x.jsxs)(i.a,{children:[Object(x.jsx)("p",{children:"Description de la Page"}),Object(x.jsx)(u.a,{className:"form-control",rows:"4",value:P,onChange:function(e){return w(e.target.value)},placeholder:"Ajouter une Description"})]})}),Object(x.jsxs)("div",{className:"listImagesContainer",children:[Object(x.jsx)("br",{}),Object(x.jsx)("p",{children:"Se\u0301lectionner Bande\u0301role Publicitaire"}),Object(x.jsxs)(s.a,{children:[R.length>0?R.map((function(e,t){return Object(x.jsx)("div",{children:Object(x.jsx)(s.a,{className:"listImages",children:Object(x.jsx)(i.a,{children:e.name})},t)})})):null,Object(x.jsx)(i.a,{children:Object(x.jsx)(u.a,{className:"form-control",type:"file",name:"banners",onChange:Y})})]})]}),Object(x.jsxs)("div",{className:"listImagesContainer",children:[Object(x.jsx)("br",{}),Object(x.jsx)("p",{children:"Se\u0301lectionner Images pour la Page"}),Object(x.jsxs)(s.a,{children:[U.length>0?U.map((function(e,t){return Object(x.jsx)("div",{children:Object(x.jsx)(s.a,{className:"listImages",children:Object(x.jsx)(i.a,{children:e.name})},t)})})):null,Object(x.jsx)(i.a,{children:Object(x.jsx)(u.a,{className:"form-control",type:"file",name:"products",onChange:Z})}),Object(x.jsx)("br",{})]})]})]})}),Object(x.jsxs)(j.a,{variant:"success",className:"addButton",onClick:function(){return g(!0)},children:[Object(x.jsx)(O.a,{})," Cre\u0301er une Page"]}),e.children]})}},921:function(e,t,c){}}]);
//# sourceMappingURL=27.d980672f.chunk.js.map