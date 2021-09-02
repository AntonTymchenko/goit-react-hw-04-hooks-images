(this["webpackJsonpgoit-react-hw-04-hooks-images"]=this["webpackJsonpgoit-react-hw-04-hooks-images"]||[]).push([[0],{10:function(e,t,n){},20:function(e,t,n){},22:function(e,t,n){},23:function(e,t,n){},24:function(e,t,n){},25:function(e,t,n){},47:function(e,t,n){},49:function(e,t,n){"use strict";n.r(t);var a=n(0),c=n.n(a),o=n(4),r=n.n(o),i=(n(10),n(9)),s=n(3),u=n(5),l=(n(20),n(1));var d=function(e){var t=e.handleInput,n=e.handleFormSubmit,a=e.imgName;return Object(l.jsxs)("form",{className:"SearchForm",onSubmit:n,children:[Object(l.jsx)("button",{type:"submit",className:"SearchForm-button",children:Object(l.jsx)("span",{className:"SearchForm-button-label",children:"Search"})}),Object(l.jsx)("input",{value:a,className:"SearchForm-input",type:"text",autoComplete:"off",autoFocus:!0,placeholder:"Search images and photos",onChange:t})]})};n(22);var j=function(e){var t=e.onSubmit,n=Object(a.useState)(""),c=Object(s.a)(n,2),o=c[0],r=c[1];return Object(l.jsx)("header",{className:"Searchbar",children:Object(l.jsx)(d,{handleFormSubmit:function(e){e.preventDefault(),""!==o.trim()?(t(o),r("")):u.b.error("\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u0441\u043b\u043e\u0432\u043e.")},handleInput:function(e){var t=e.currentTarget.value;r(t)},imgName:o})})};n(23);var m=function(e){var t=e.id,n=e.alt,a=e.webformatURL,c=e.largeImageURL,o=e.onClick,r=e.scrollStatus,i={id:t,alt:n,largeImageURL:c};return Object(l.jsxs)("li",{className:"ImageGalleryItem",onClick:function(){o(i)},children:[Object(l.jsx)("img",{src:a,alt:n,"data-imglarge":c,className:"ImageGalleryItem-image"}),r&&void setTimeout((function(){return window.scrollTo({top:document.documentElement.scrollHeight,behavior:"smooth"})}),100)]},t)};n(24);var b=function(e){var t=e.handleLoadMoreButton;return Object(l.jsx)("button",{type:"button",className:"Button",onClick:function(){return t()},children:"Load more"})},h=(n(25),n(11)),f=n.n(h);n(46);var g=function(e){var t=e.onCLickImg,n=e.onBtnClick,c=e.error,o=e.status,r=e.imgCards,i=Object(a.useState)(!1),u=Object(s.a)(i,2),d=u[0],j=u[1],h=function(e){t(e),j(!1)};return"idle"===o?null:"pending"===o?Object(l.jsx)("div",{className:"loader",children:Object(l.jsx)(f.a,{type:"Bars",color:"#00BFFF",height:80,width:80,timeout:3e3})}):"resolved"===o?Object(l.jsxs)(l.Fragment,{children:[Object(l.jsx)("ul",{className:"ImageGallery",children:r.map((function(e){var t=e.id,n=e.webformatURL,a=e.largeImageURL,c=e.tags;return Object(l.jsx)(m,{id:t,alt:c,webformatURL:n,largeImageURL:a,onClick:h,scrollStatus:d},t)}))}),Object(l.jsx)(b,{handleLoadMoreButton:function(){n(),j(!0)}})]}):"rejected"===o?Object(l.jsx)("h2",{children:c.message}):void 0},O=n(12),p=n(13),v=n(15),x=n(14),S=(n(47),document.querySelector("#modal-root")),y=function(e){Object(v.a)(n,e);var t=Object(x.a)(n);function n(){var e;Object(O.a)(this,n);for(var a=arguments.length,c=new Array(a),o=0;o<a;o++)c[o]=arguments[o];return(e=t.call.apply(t,[this].concat(c))).handleKeyDown=function(t){"Escape"===t.code&&e.props.onClose()},e.handleBackdropClick=function(t){t.currentTarget===t.target&&e.props.onClose()},e}return Object(p.a)(n,[{key:"componentDidMount",value:function(){window.addEventListener("keydown",this.handleKeyDown)}},{key:"componentWillUnmount",value:function(){window.removeEventListener("keydown",this.handleKeyDown)}},{key:"render",value:function(){var e=this.props.imgInfo;return Object(o.createPortal)(Object(l.jsx)("div",{className:"Overlay",onClick:this.handleBackdropClick,children:Object(l.jsx)("div",{className:"Modal",children:Object(l.jsx)("img",{src:e.largeImageURL,alt:e.alt})})}),S)}}]),n}(a.Component),k="https://pixabay.com/api",C="key=22260377-843feab13a68cee38d30608c2";var w=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.searchQuery,n=void 0===t?"":t,a=e.page,c=void 0===a?1:a,o=e.pageSize,r=void 0===o?12:o;return fetch("".concat(k,"/?q=").concat(n,"&page=").concat(c,"&").concat(C,"&image_type=photo&orientation=horizontal&per_page=").concat(r)).then((function(e){if(200===e.status)return e.json()}))},I=(n(48),"idle"),L="pending",F="resolved",N="rejected";var B=function(){var e=Object(a.useState)(""),t=Object(s.a)(e,2),n=t[0],c=t[1],o=Object(a.useState)(!1),r=Object(s.a)(o,2),d=r[0],m=r[1],b=Object(a.useState)(null),h=Object(s.a)(b,2),f=h[0],O=h[1],p=Object(a.useState)(1),v=Object(s.a)(p,2),x=v[0],S=v[1],k=Object(a.useState)([]),C=Object(s.a)(k,2),B=C[0],U=C[1],R=Object(a.useState)(null),D=Object(s.a)(R,2),E=D[0],T=D[1],M=Object(a.useState)(I),G=Object(s.a)(M,2),K=G[0],P=G[1],q=function(e){m(!d),O(e)};return Object(a.useEffect)((function(){if(n){P(L),w({searchQuery:n,page:x}).then((function(e){var t=e.hits;if(0===t.length)return P(I),u.b.error("\u041d\u0435 \u0442\u0430\u043a\u0438\u0445 \u043a\u0430\u0440\u0442\u0438\u043d\u043e\u043a !!!");U((function(e){return[].concat(Object(i.a)(e),Object(i.a)(t))})),P(F)})).catch((function(e){T(e),P(N)}))}}),[n,x]),Object(l.jsxs)("div",{className:"App",children:[d&&Object(l.jsx)(y,{onClose:q,imgInfo:f}),Object(l.jsx)(u.a,{autoClose:3e3}),Object(l.jsx)(j,{onSubmit:function(e){c(e),S(1),U([]),T(null)}}),Object(l.jsx)(g,{imgCards:B,error:E,status:K,onCLickImg:q,onBtnClick:function(){return S((function(e){return e+1}))}})]})},U=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,50)).then((function(t){var n=t.getCLS,a=t.getFID,c=t.getFCP,o=t.getLCP,r=t.getTTFB;n(e),a(e),c(e),o(e),r(e)}))};r.a.render(Object(l.jsx)(c.a.StrictMode,{children:Object(l.jsx)(B,{})}),document.getElementById("root")),U()}},[[49,1,2]]]);
//# sourceMappingURL=main.038b9105.chunk.js.map