(this["webpackJsonpburger-de-maman"]=this["webpackJsonpburger-de-maman"]||[]).push([[0],{27:function(e,t,a){},28:function(e,t,a){},29:function(e,t,a){},31:function(e,t,a){},32:function(e,t,a){},38:function(e,t,a){},39:function(e,t,a){},40:function(e,t,a){},41:function(e,t,a){},42:function(e,t,a){},43:function(e,t,a){"use strict";a.r(t);var s=a(1),i=a.n(s),c=a(19),r=a.n(c),n=(a(27),a(21)),l=a(17),o=a(8),d=a(2),u=(a(28),a(29),a(0)),b=function(){var e=(new Date).getFullYear();return Object(u.jsxs)("div",{className:"footer",children:[Object(u.jsxs)("div",{className:"footer-social",children:[Object(u.jsx)("a",{className:"footer-social-link",href:"https://github.com/swann-martin/moms-burgers/tree/develop",target:"__blank",rel:"noreferer",children:Object(u.jsx)("i",{className:"fab fa-facebook-square"})}),Object(u.jsx)("a",{className:"footer-social-link",href:"https://github.com/swann-martin/moms-burgers/tree/develop",target:"__blank",rel:"noreferer",children:Object(u.jsx)("i",{className:"fab fa-twitter-square"})}),Object(u.jsx)("a",{className:"footer-social-link",href:"https://github.com/swann-martin/moms-burgers/tree/develop",target:"__blank",rel:"noreferer",children:Object(u.jsx)("i",{className:"fab fa-instagram-square"})}),Object(u.jsx)("a",{className:"footer-social-link",href:"https://github.com/swann-martin/moms-burgers/tree/develop",target:"__blank",rel:"noreferer",children:Object(u.jsx)("i",{className:"fab fa-linkedin"})})]}),Object(u.jsxs)("p",{className:"footer-copyright",children:["\xa9Swann Martin ",e," @home"]})]})},j=a(7),m=(a(31),function(e){var t=e.cart,a=e.removeFromCart,s=e.total,i=void 0===s?0:s,c=e.toggleOrderStatus,r=e.toggleFormStatus;return Object(u.jsxs)("section",{className:"cart",children:[Object(u.jsxs)("header",{className:"cart-header",children:[Object(u.jsx)("h2",{className:"cart-title",children:"Commande en cours : "}),Object(u.jsx)("span",{onClick:c,className:"food-btn",children:"x"})]}),Object(u.jsxs)("div",{className:"cart-content",children:[Object(u.jsx)("div",{className:"cart-content-list",children:t&&t.map((function(e){return Object(u.jsxs)("p",{className:"cart-content-list-element",children:[e.title,"\xa0:\xa0",Object(u.jsxs)("span",{className:"cart-content-list-element-price",children:[e.price,"\u20ac"]}),Object(u.jsx)("span",{title:"retirer du panier",className:"food-btn",onClick:function(){return a(e)},children:"-"})]},e.id)}))}),(null===t||void 0===t?void 0:t.length)>0?Object(u.jsxs)("div",{children:[Object(u.jsxs)("h4",{className:"cart-content-total",children:["Total \xa0:\xa0",i,"\u20ac"]}),Object(u.jsx)("span",{className:"food-btn cart-orderBtn",onClick:function(){c(),r()},children:"Commander"})]}):Object(u.jsx)("h4",{className:"cart-content",children:"Votre panier est vide"})]})]})}),h=(a(32),function(e){var t=e.cart,a=e.toggleMenuStatus,s=e.menuStatus,i=e.removeFromCart,c=e.total,r=e.toggleOrderStatus,n=e.toggleFormStatus,l=e.orderStatus;return Object(u.jsxs)("nav",{className:"nav",children:[Object(u.jsx)("div",{className:"nav-left",children:Object(u.jsx)(j.c,{to:"/",children:Object(u.jsx)("h1",{className:"nav-title",children:"Mom's Burgers"})})}),Object(u.jsxs)("div",{className:"nav-right",children:[Object(u.jsxs)("div",{className:"nav-right-burger",onClick:a,children:[!s&&Object(u.jsx)("i",{className:"fas fa-hamburger"}),s&&Object(u.jsx)("i",{className:"fas fa-times"})]}),Object(u.jsxs)("ul",{className:s?"nav-right-burger-list":"nav-right-burger-list nav-right-burger-list--closed",children:[Object(u.jsx)(j.c,{to:"/menu",className:"nav-right-burger-list-link",activeClassName:"nav-right-burger-list-link",children:"La carte"}),Object(u.jsx)(j.c,{to:"/values",className:"nav-right-burger-list-link",activeClassName:"nav-right-burger-list-link nav-right-burger-list-link--active",children:"Nos valeurs"}),Object(u.jsxs)("span",{className:"nav-right-burger-list-link nav-cart",onClick:r,children:["Mon panier ",Object(u.jsx)("i",{className:"fas fa-shopping-cart"}),Object(u.jsx)("span",{className:"nav-right-burger-list-link-badge",children:t.length})]}),Object(u.jsx)("li",{className:"nav-right-burger-list-element"})]}),Object(u.jsxs)("ul",{className:"nav-right-list",children:[Object(u.jsx)(j.c,{to:"/menu",className:"nav-right-list-link",activeClassName:"nav-right-list-link nav-right-list-link--active",children:"La carte"}),Object(u.jsx)(j.c,{to:"/values",className:"nav-right-list-link",activeClassName:"nav-right-list-link nav-right-list-link--active",children:"Nos valeurs"}),Object(u.jsxs)("span",{className:"nav-right-list-link  nav-cart",onClick:r,children:["Mon panier ",Object(u.jsx)("i",{className:"fas fa-shopping-cart"})," ",Object(u.jsx)("span",{className:"nav-right-list-link-badge",children:t.length})]})]})]}),l&&Object(u.jsx)("div",{className:"cart",children:Object(u.jsx)(m,{cart:t,removeFromCart:i,total:c,toggleOrderStatus:r,toggleFormStatus:n})})]})}),f=(a(38),function(){return Object(u.jsxs)("div",{className:"home",children:[Object(u.jsx)("h1",{children:"Les burgers de maman"}),Object(u.jsx)(j.b,{to:"/menu",className:"home-btn",children:"Voir nos burgers"})]})}),x=(a(39),function(e){var t=e.product,a=(e.addToCart,t.id,t.ingredients),s=t.image,i=t.title,c=t.price;return Object(u.jsxs)("div",{className:"card",children:[Object(u.jsx)("div",{className:"card-left",children:Object(u.jsx)("img",{src:s,alt:i,className:"card-picture"})}),Object(u.jsxs)("div",{className:"card-right",children:[Object(u.jsx)("h2",{className:"card-title",children:i}),Object(u.jsxs)("ul",{className:"card-list",children:[Object(u.jsxs)("li",{children:[c,"\u20ac"]}),a.map((function(e,t){return Object(u.jsx)("li",{className:"card-list-ingredient",children:e},"".concat(e).concat(t))}))]})]})]})}),p=(a(40),function(e){var t=e.products,a=(e.total,e.cart),i=e.addToCart;e.removeFromCart,e.orderStatus,e.toggleOrderStatus,e.handleSideChange,e.side;return Object(s.useEffect)((function(){}),[a]),Object(u.jsxs)("div",{className:"food",children:[Object(u.jsx)("h1",{className:"food-title",children:"La carte"}),Object(u.jsx)("h2",{className:"food-subttitle",children:"D\xe9couvrez nos burgers\xa0:"}),Object(u.jsx)("h2",{className:"food-subttitle",children:"* une alternative \xe0 galette v\xe9g\xe9 ou viande pour chaque burger"}),Object(u.jsx)("section",{className:"food-burgers",children:t&&t.map((function(e,t){return Object(u.jsxs)("div",{children:[Object(u.jsx)(x,{product:e,addToCart:i},e.id),Object(u.jsx)("button",{className:"food-btn food-btn--card",onClick:function(){return i(e)},children:"Ajouter au panier"})]},(null===e||void 0===e?void 0:e.id)?e.id:"product".concat(t))}))})]})}),g=(a(41),function(){return Object(u.jsxs)("div",{className:"values",children:[Object(u.jsx)("h1",{className:"values-title",children:"Nos Valeurs"}),Object(u.jsx)("div",{className:"values-main",children:Object(u.jsx)("ul",{className:"values-list",children:[{title:"Notre mission : vous rassasier",list:["Avec des produits de qualit\xe9","Avec des portions g\xe9n\xe9reuses","Avec un choix de formules vari\xe9 pour satisfaire tous les go\xfbts","Avec une alternative v\xe9g\xe9tarienne pour chaque burger"]},{title:"Transparence & tra\xe7abilit\xe9",list:["Avec des viande d'origine locales de bonne qualit\xe9","Avec des buns de pain faits maison et de la farine locale & bio","Avec des frites coup\xe9es et cuites sur place dont les patates sont cultiv\xe9es localement"]},{title:"Service du client et respect",list:["Nous prenons en compte vos suggestions pour am\xe9liorer nos recettes","Nous indiquons les ingr\xe9dients pour \xe9viter les risques d'allergie","Nous pronons le respet de la nature et fournissons des embalages en carton recycl\xe9"]}].map((function(e){return Object(u.jsxs)("div",{children:[Object(u.jsx)("h2",{className:"values-subtitle",children:e.title},e.title),e.list.map((function(e){return Object(u.jsx)("li",{children:e})}))]})}))})})]})}),O=a(44),v=[{id:Object(O.a)(),title:"Mama fran\xe7aise",image:"https://images.unsplash.com/photo-1603064752734-4c48eff53d05?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=634&q=80",ingredients:["buns","cantal","roquefort","boeuf ou galette v\xe9g\xe9","salade","tomate","sauce a\xefoli"],price:6},{id:Object(O.a)(),title:"Mama orientale",image:"https://images.unsplash.com/photo-1516774266634-15661f692c19?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=966&q=80",ingredients:["buns","salade","tomate","oignons","sauce piquante"],price:6},{id:Object(O.a)(),title:"Mama anglaise",image:"https://images.unsplash.com/photo-1565299507177-b0ac66763828?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=664&q=80",ingredients:["buns","stilton","cheddar","oeufs","bacon","oignons","sauce pickkles"],price:6},{id:Object(O.a)(),title:"Mama italienne ",image:"https://images.unsplash.com/photo-1513185158878-8d8c2a2a3da3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1050&q=80",ingredients:["buns","mozzarella","salade","tomate","oignons","sauce parmesan"],price:6},{id:Object(O.a)(),title:"Mama tradi ",image:"https://images.unsplash.com/photo-1596662951482-0c4ba74a6df6?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=633&q=80",ingredients:["pain","boeuf","salade","tomate","oignons","sauce mayo"],price:6},{id:Object(O.a)(),title:"Mama japonnaise",image:"https://images.unsplash.com/photo-1582196016295-f8c8bd4b3a99?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",ingredients:["Riz","boeuf","salade","tomate","avocat","oignons","sauce teryaki"],price:6},{id:Object(O.a)(),title:"Mama mexicaine",image:"https://images.unsplash.com/photo-1584947897558-4ee278fbbddf?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=633&q=80",ingredients:["Wrap","poulet","salade","tomate","avocat","oignons","sauce salsa"],price:6},{id:Object(O.a)(),title:"Mama veg\xe9",image:"https://images.unsplash.com/photo-1520072959219-c595dc870360?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1453&q=80",ingredients:["buns","quinoa","haloumi","salade","tomate","avocat","sauce pesto"],price:6},{id:Object(O.a)(),title:"Frites",image:"https://images.unsplash.com/photo-1598679253544-2c97992403ea?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80",ingredients:["patates","sel","paprika","mayo"],price:2.5},{id:Object(O.a)(),title:"Potatoes",image:"https://images.unsplash.com/photo-1576100246753-1c1b4fa73481?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80",ingredients:["patates","sel","paprika","sauce potatoes"],price:2.5},{id:Object(O.a)(),title:"Nuggets v\xe9g\xe9",image:"https://images.unsplash.com/photo-1585325701956-60dd9c8553bc?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=675&q=80",ingredients:["soja","chapelure"],price:2.5},{id:Object(O.a)(),title:"Limonade",image:"https://images.unsplash.com/photo-1580902777696-56e74256f83f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=634&q=80",ingredients:["citrons","soda"],price:1.5},{id:Object(O.a)(),title:"Donuts",image:"https://images.unsplash.com/photo-1551024601-bec78aea704b?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=700&q=80",ingredients:["Chocolat","pate","oeufs","gras"],price:1.5}],N=(a(42),function(e){var t=e.toggleFormStatus,a=function(){n(!0)},i=Object(s.useState)(!1),c=Object(o.a)(i,2),r=c[0],n=c[1];return Object(u.jsx)("div",{className:"form",children:Object(u.jsxs)("form",{autoComplete:"on",children:[Object(u.jsx)("span",{className:"closeBtn",onClick:t,children:"X"}),r?Object(u.jsx)("p",{children:"Merci pour votre commande, un livreur est en route"}):Object(u.jsxs)(u.Fragment,{children:[Object(u.jsx)("h2",{children:"Vos informations"}),Object(u.jsxs)("ul",{children:[Object(u.jsxs)("li",{children:[Object(u.jsx)("label",{htmlFor:"address",children:"Adresse"}),Object(u.jsx)("input",{type:"text",id:"address",placeholder:"ex : 11 rue du g\xe9n\xe9ral..."})]}),Object(u.jsxs)("li",{children:[Object(u.jsx)("label",{htmlFor:"name",children:"Nom"}),Object(u.jsx)("input",{type:"text",id:"name",placeholder:"ex :Dupont"})]}),Object(u.jsxs)("li",{children:[Object(u.jsx)("label",{htmlFor:"firstName",children:"Pr\xe9nom"}),Object(u.jsx)("input",{type:"text",id:"firstName",placeholder:"ex: Jean"})]}),Object(u.jsxs)("li",{children:[Object(u.jsx)("label",{htmlFor:"tel",children:"T\xe9l\xe9phone"}),Object(u.jsx)("input",{type:"digits",placeholder:"ex : 0456000000"})]}),Object(u.jsxs)("li",{children:[Object(u.jsx)("label",{htmlFor:"email",children:"Email"}),Object(u.jsx)("input",{type:"email",id:"email",placeholder:"ex : exemple@email.com"})]})]}),Object(u.jsxs)("div",{className:"form-btns",children:[Object(u.jsx)("button",{type:"button",className:"food-btn cancel",onClick:function(){t()},children:"Cancel"}),Object(u.jsx)("button",{type:"submit",className:"food-btn validate",onClick:function(e){e.preventDefault(),a(),setTimeout(t,2e3)},children:"Valider"})]})]})]})})}),w=function(){var e=Object(s.useState)([]),t=Object(o.a)(e,2),a=t[0],i=t[1],c=Object(s.useState)(0),r=Object(o.a)(c,2),j=r[0],m=r[1],x=Object(s.useState)(""),w=Object(o.a)(x,2),M=w[0],k=w[1],H=Object(s.useState)(v),S=Object(o.a)(H,2),C=S[0],D=(S[1],Object(s.useState)(!1)),B=Object(o.a)(D,2),y=B[0],G=B[1],q=Object(s.useState)(!1),A=Object(o.a)(q,2),F=A[0],V=A[1],W=Object(s.useState)(!1),Y=Object(o.a)(W,2),T=Y[0],_=Y[1],L=function(){G(!y)},z=function(){V(!F)},I=function(e){i(a.filter((function(t){return t.orderId!==e.orderId})));var t=j-e.price;m(t),j<0&&m(0)};return Object(u.jsxs)("div",{className:"app",children:[Object(u.jsx)(h,{cart:a,menuStatus:T,toggleMenuStatus:function(){_(!T)},removeFromCart:I,total:j,toggleOrderStatus:L,toggleFormStatus:z,orderStatus:y}),(null===a||void 0===a?void 0:a.length)>0&&F&&Object(u.jsx)(N,{toggleFormStatus:z}),Object(u.jsxs)(d.c,{children:[Object(u.jsx)(d.a,{path:"/menu",children:Object(u.jsx)(p,{products:C,cart:a,addToCart:function(e){var t=Object(l.a)(Object(l.a)({},e),{},{orderId:Object(O.a)()}),s=[].concat(Object(n.a)(a),[t]);i(s);var c=j+e.price;m(c)},removeFromCart:I,handleSideChange:function(e){k(e.value)},side:M,total:j,toggleOrderStatus:L,orderStatus:y})}),Object(u.jsx)(d.a,{path:"/values",component:g}),Object(u.jsx)(d.a,{path:"/",component:f})]}),Object(u.jsx)(b,{})]})};r.a.render(Object(u.jsx)(i.a.StrictMode,{children:Object(u.jsx)(j.a,{children:Object(u.jsx)(w,{})})}),document.getElementById("root"))}},[[43,1,2]]]);
//# sourceMappingURL=main.b7ac053e.chunk.js.map