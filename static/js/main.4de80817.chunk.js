(this.webpackJsonpmarit=this.webpackJsonpmarit||[]).push([[0],{110:function(e,t,n){},113:function(e,t,n){},114:function(e,t,n){},116:function(e,t,n){"use strict";n.r(t);var a=n(2),c=n(0),r=n.n(c),i=n(8),o=n.n(i),s=n(29),l=n(23),j=(n(110),n(89)),b=n(10),h=n(162),d=n(64),O=function(e){return e},u=Object(d.a)(O,(function(e){var t=e.list;return t?t.Result:[]})),p=Object(d.a)(O,(function(e){var t=e.list;return t?t.Total:[]})),x=function(e){return e.loading},m=function(e){return e.error},g=n(160),f=n(118),v=n(156),w=n(158),y=n(153),N=n(161),R=n(157),_=n(151),A=n(37),S=n(61),E=n.n(S),k=n(159),T=n(84),W=n.n(T),D=n(83),C=n.n(D),L=n(166),P=n(154),I=n(155),V=function(e){var t=e.open,n=e.row;return Object(a.jsx)(_.a,{children:Object(a.jsx)(y.a,{style:{padding:0,border:"none",backgroundColor:"#D7FFFE"},colSpan:7,children:Object(a.jsx)(P.a,{in:t,timeout:"auto",unmountOnExit:!0,children:Object(a.jsxs)(L.a,{children:[Object(a.jsx)(I.a,{variant:"h5",gutterBottom:!0,component:"div",style:{textAlign:"center"},children:"\u0410\u043d\u0430\u043b\u043e\u0433\u0438"}),Object(a.jsxs)(v.a,{size:"small","aria-label":"purchases",children:[Object(a.jsx)(R.a,{children:Object(a.jsx)(_.a,{children:J.map((function(e){return Object(a.jsx)(y.a,{align:e.align,style:{minWidth:e.minWidth,maxWidth:e.maxWidth},children:"\u0410\u043d\u0430\u043b\u043e\u0433\u0438"===e.label?"":e.label},e.id)}))})}),Object(a.jsx)(w.a,{children:n.analogs.map((function(e){return Object(a.jsxs)(_.a,{style:{width:"100%"},children:[Object(a.jsx)(y.a,{component:"th",scope:"row"}),Object(a.jsx)(y.a,{component:"th",scope:"row",children:Object(a.jsx)("img",{src:"./images/part.svg",alt:"img"})}),Object(a.jsx)(y.a,{align:"left",children:e.Number}),Object(a.jsx)(y.a,{align:"left",children:e.DescriptionUkr}),Object(a.jsx)(y.a,{align:"left",children:e.Rests.length>0?e.Rests[0].Value:0}),Object(a.jsx)(y.a,{align:"left",children:e.Price}),Object(a.jsx)(y.a,{children:Object(a.jsx)(k.a,{color:"primary",children:Object(a.jsx)(E.a,{})})})]},e.Card)}))})]})]})})})})},G=Object(g.a)({root:{"& > *":{borderBottom:"unset"}}}),M=function(e){var t=e.row,n=r.a.useState(!1),c=Object(A.a)(n,2),i=c[0],o=c[1],s=G();return Object(a.jsxs)(a.Fragment,{children:[Object(a.jsxs)(_.a,{className:s.root,children:[0!==t.analogs.length?Object(a.jsx)(y.a,{children:Object(a.jsx)(k.a,{"aria-label":"expand row",size:"small",onClick:function(){return o(!i)},children:i?Object(a.jsx)(C.a,{}):Object(a.jsx)(W.a,{})})}):Object(a.jsx)(y.a,{children:""}),Object(a.jsx)(y.a,{component:"th",scope:"row",children:Object(a.jsx)("img",{src:"./images/part.svg",alt:"img"})}),Object(a.jsx)(y.a,{align:"left",children:t.code}),Object(a.jsx)(y.a,{component:"th",scope:"row",children:t.name}),Object(a.jsx)(y.a,{align:"left",children:t.rest}),Object(a.jsx)(y.a,{align:"left",children:t.price}),Object(a.jsx)(y.a,{align:"left",children:Object(a.jsx)(k.a,{color:"primary",children:Object(a.jsx)(E.a,{})})})]}),t.analogs.length>0?Object(a.jsx)(V,{open:i,row:t}):null]})},B=n(18),z=n(171),U=n(168),F=function(){return Object(a.jsx)(b.a,{initialEntries:["/inbox"],initialIndex:0,children:Object(a.jsx)(b.c,{children:function(e){var t=e.location,n=new URLSearchParams(t.search),c=parseInt(n.get("page")||"1",10);return Object(a.jsx)(z.a,{page:c,count:10,renderItem:function(e){return Object(a.jsx)(U.a,Object(B.a)({component:s.b,to:"/inbox".concat(1===e.page?"":"?page=".concat(e.page))},e))}})}})})},J=[{id:"analogs",label:"\u0410\u043d\u0430\u043b\u043e\u0433\u0438",minWidth:50,maxWidth:100},{id:"photo",label:"\u0424\u043e\u0442\u043e",minWidth:50,maxWidth:100},{id:"code",label:"\u041a\u043e\u0434/\u0410\u043d\u0430\u043b\u043e\u0433\u0438",minWidth:150,maxWidth:200},{id:"name",label:"\u041d\u0430\u0437\u0432\u0430 \u0442\u043e\u0432\u0430\u0440\u0443",minWidth:250,maxWidth:300,align:"left"},{id:"rest",label:"\u041d\u0430\u044f\u0432\u043d\u0456\u0441\u0442\u044c",minWidth:50,maxWidth:100,align:"left"},{id:"price",label:"\u0426\u0456\u043d\u0430",minWidth:80,maxWidth:100,align:"left"},{id:"buttons",label:"",minWidth:170,maxWidth:"100%",align:"right"}];var K=Object(g.a)({root:{width:"100%"},container:{maxHeight:440}}),H=function(){var e=Object(l.c)(u),t=null===e||void 0===e?void 0:e.map((function(e){return t=e.photo||null,n=e.Number,a=e.DescriptionUkr,c=e.Rests[0].Value||0,r=e.CustomerPrice,i=e.Analogs||[],{photo:t,code:n,rest:c,name:a,price:r,analogs:i};var t,n,a,c,r,i})),n=K();return Object(a.jsxs)(f.a,{className:n.root,children:[Object(a.jsx)(N.a,{className:n.container,children:Object(a.jsxs)(v.a,{stickyHeader:!0,"aria-label":"sticky table",children:[Object(a.jsx)(R.a,{children:Object(a.jsx)(_.a,{children:J.map((function(e){return Object(a.jsx)(y.a,{align:e.align,style:{minWidth:e.minWidth,maxWidth:e.maxWidth},children:e.label},e.id)}))})}),Object(a.jsx)(w.a,{children:null===t||void 0===t?void 0:t.map((function(e){return Object(a.jsx)(M,{row:e})}))})]})}),Object(a.jsx)(F,{})]})},X=function(){var e=Object(l.c)(x),t=Object(l.c)(m),n=Object(l.c)(p);return console.log(n),e?Object(a.jsx)(h.a,{}):t?Object(a.jsx)("h1",{children:t}):Object(a.jsx)(H,{})},q=n(24),Y=n(16),Q=Object(g.a)((function(e){return{grow:{flexGrow:1,paddingBottom:e.spacing(8)},menuButton:{marginRight:e.spacing(2)},title:Object(q.a)({display:"none"},e.breakpoints.up("sm"),{display:"block"}),search:Object(q.a)({position:"relative",borderRadius:e.shape.borderRadius,backgroundColor:Object(Y.b)(e.palette.common.white,.15),"&:hover":{backgroundColor:Object(Y.b)(e.palette.common.white,.25)},marginRight:e.spacing(2),marginLeft:0,width:"100%"},e.breakpoints.up("sm"),{marginLeft:e.spacing(3),width:"auto"}),sectionDesktop:Object(q.a)({display:"none"},e.breakpoints.up("md"),{display:"flex"}),sectionMobile:Object(q.a)({display:"flex"},e.breakpoints.up("md"),{display:"none"})}})),Z=n(169),$=n(85),ee=n.n($),te={SAVE_DATA:"SAVE_DATA",START_LOADING:"START_LOADING",STOP_LOADING:"STOP_LOADING",SAVE_ERROR:"SAVE_ERROR"},ne=function(e){return{type:te.SAVE_ERROR,payload:e}},ae=function(e,t){return function(n){n({type:te.START_LOADING}),function(e,t){var n={SearchPhrase:"".concat(e),Rest:1,From:0,Count:"".concat(t),Key:"E65UWV8MoqwJKKrpjf8RtL2KYrin68ia"},a={method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(n)};return fetch("https://public.omega.page/public/api/v1.0/product/search",a).then((function(e){return e.json()}))}(e,t).then((function(e){return e.hasOwnProperty("Errors")?n(ne(e.Errors[0].Description)):0===e.Result.length?n(ne("No mach found")):(n(ne("")),n({type:te.SAVE_DATA,payload:e}))})).catch((function(e){return console.log(e)})).finally((function(){return n({type:te.STOP_LOADING})}))}},ce=Object(g.a)((function(e){return{grow:{display:"flex"},search:Object(q.a)({position:"relative",width:"100%",borderRadius:e.shape.borderRadius,backgroundColor:Object(Y.b)(e.palette.common.white,.15),"&:hover":{backgroundColor:Object(Y.b)(e.palette.common.white,.25)},marginLeft:0},e.breakpoints.up("sm"),{marginLeft:e.spacing(4),width:"auto"}),inputRoot:{color:"inherit"},inputInput:Object(q.a)({padding:e.spacing(1),transition:e.transitions.create("width"),width:"100%"},e.breakpoints.up("sm"),{width:"30ch","&:focus":{width:"40ch"}})}})),re=function(){var e=ce(),t=Object(c.useState)(""),n=Object(A.a)(t,2),r=n[0],i=n[1],o=Object(l.b)(),s=Object(b.h)(),j=Object(b.i)(),h=new URLSearchParams(j.search),d=h.get("simple_search")||"";console.log(d),Object(c.useEffect)((function(){return o(ae(d,10))}),[o,d]);return Object(a.jsxs)("form",{className:e.grow,onSubmit:function(e){return function(e){h.set("simple_search",r),s.push({pathname:"/search",search:h.toString()}),e.preventDefault(),o(ae(r,5)),i("")}(e)},children:[Object(a.jsx)(Z.a,{className:e.search,placeholder:"\u0412\u0432\u0435\u0434\u0456\u0442\u044c \u043d\u0430\u0437\u0432\u0443 \u0430\u0431\u043e \u043a\u043e\u0434 \u0437\u0430\u043f\u0447\u0430\u0441\u0442\u0438\u043d\u0438",classes:{root:e.inputRoot,input:e.inputInput},inputProps:{"aria-label":"search"},value:r,onChange:function(e){return i(e.target.value)}}),Object(a.jsx)(k.a,{type:"submit",children:Object(a.jsx)(ee.a,{style:{color:"white"}})})]})},ie=n(164),oe=n(165),se=n(163),le=n(170),je=n(167),be=n(86),he=n.n(be),de=n(69),Oe=n.n(de),ue=n(67),pe=n.n(ue),xe=n(68),me=n.n(xe),ge=n(87),fe=n.n(ge),ve=function(){var e=Q(),t=r.a.useState(null),n=Object(A.a)(t,2),c=n[0],i=n[1],o=r.a.useState(null),l=Object(A.a)(o,2),j=l[0],b=l[1],h=Boolean(c),d=Boolean(j),O=function(e){i(e.currentTarget)},u=function(){b(null)},p=function(){i(null),u()},x="primary-search-account-menu",m=Object(a.jsxs)(je.a,{anchorEl:c,anchorOrigin:{vertical:"top",horizontal:"right"},id:x,keepMounted:!0,transformOrigin:{vertical:"top",horizontal:"right"},open:h,onClose:p,children:[Object(a.jsx)(le.a,{onClick:p,children:"Profile"}),Object(a.jsx)(le.a,{onClick:p,children:"My account"})]}),g="primary-search-account-menu-mobile",f=Object(a.jsxs)(je.a,{anchorEl:j,anchorOrigin:{vertical:"top",horizontal:"right"},id:g,keepMounted:!0,transformOrigin:{vertical:"top",horizontal:"right"},open:d,onClose:u,children:[Object(a.jsxs)(le.a,{children:[Object(a.jsx)(k.a,{"aria-label":"show 4 new mails",color:"inherit",children:Object(a.jsx)(se.a,{badgeContent:4,color:"secondary",children:Object(a.jsx)(pe.a,{})})}),Object(a.jsx)("p",{children:"Messages"})]}),Object(a.jsxs)(le.a,{children:[Object(a.jsx)(k.a,{"aria-label":"show 11 new notifications",color:"inherit",children:Object(a.jsx)(se.a,{badgeContent:11,color:"secondary",children:Object(a.jsx)(me.a,{})})}),Object(a.jsx)("p",{children:"Notifications"})]}),Object(a.jsxs)(le.a,{onClick:O,children:[Object(a.jsx)(k.a,{"aria-label":"account of current user","aria-controls":"primary-search-account-menu","aria-haspopup":"true",color:"inherit",children:Object(a.jsx)(Oe.a,{})}),Object(a.jsx)("p",{children:"Profile"})]})]});return Object(a.jsxs)("div",{className:e.grow,children:[Object(a.jsx)(ie.a,{position:"fixed",children:Object(a.jsxs)(oe.a,{children:[Object(a.jsx)(k.a,{edge:"start",className:e.menuButton,color:"inherit","aria-label":"open drawer",children:Object(a.jsx)(he.a,{})}),Object(a.jsx)(s.b,{to:"/",children:Object(a.jsx)(I.a,{className:e.title,variant:"h6",noWrap:!0,children:"LOGO"})}),Object(a.jsx)(re,{}),Object(a.jsx)("div",{className:e.grow}),Object(a.jsxs)("div",{className:e.sectionDesktop,children:[Object(a.jsx)(k.a,{"aria-label":"show 4 new mails",color:"inherit",children:Object(a.jsx)(se.a,{badgeContent:4,color:"secondary",children:Object(a.jsx)(pe.a,{})})}),Object(a.jsx)(k.a,{"aria-label":"show 17 new notifications",color:"inherit",children:Object(a.jsx)(se.a,{badgeContent:17,color:"secondary",children:Object(a.jsx)(me.a,{})})}),Object(a.jsx)(k.a,{edge:"end","aria-label":"account of current user","aria-controls":x,"aria-haspopup":"true",onClick:O,color:"inherit",children:Object(a.jsx)(Oe.a,{})})]}),Object(a.jsx)("div",{className:e.sectionMobile,children:Object(a.jsx)(k.a,{"aria-label":"show more","aria-controls":g,"aria-haspopup":"true",onClick:function(e){b(e.currentTarget)},color:"inherit",children:Object(a.jsx)(fe.a,{})})})]})}),f,m]})},we=function(){return Object(a.jsx)("div",{className:"container",children:Object(a.jsx)("h1",{children:"HOME PAGE"})})},ye=(n(113),function(){return Object(a.jsx)("footer",{className:"header",children:Object(a.jsx)("div",{className:"content",children:Object(a.jsxs)("div",{className:"header__inner",children:[Object(a.jsx)("a",{href:"#/",children:Object(a.jsx)("img",{className:"header__logo",src:"./images/Logo.svg",alt:"logo"})}),Object(a.jsx)("div",{className:"header__delivery-info"}),Object(a.jsx)("div",{className:"header__toggle-buttons"})]})})})}),Ne=(n(114),function(){return Object(a.jsx)("h1",{children:"TEST"})}),Re=function(){var e=Object(b.i)(),t=Object(b.h)();return console.log(e,t),Object(a.jsxs)("div",{className:"App",children:[Object(a.jsx)(j.a,{}),Object(a.jsx)(ve,{}),Object(a.jsx)(b.e,{children:Object(a.jsxs)("main",{className:"page",children:[Object(a.jsx)(b.c,{path:"/",exact:!0,component:we}),Object(a.jsx)(b.b,{from:"/home",to:"/"}),Object(a.jsx)(b.c,{path:"/search",component:X}),Object(a.jsx)(b.c,{path:"/xxx",component:Ne}),"."]})}),Object(a.jsx)(ye,{})]})},_e=n(43),Ae=n(88),Se=n(90),Ee={list:{},loading:!1,error:""};var ke=[Ae.a],Te=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||_e.c,We=Object(_e.d)((function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Ee,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case te.SAVE_DATA:var n=t.payload;return Object(B.a)(Object(B.a)({},e),{},{list:n});case te.START_LOADING:return Object(B.a)(Object(B.a)({},e),{},{loading:!0});case te.STOP_LOADING:return Object(B.a)(Object(B.a)({},e),{},{loading:!1});case te.SAVE_ERROR:var a=t.payload;return Object(B.a)(Object(B.a)({},e),{},{error:a});case te.ADD_NEW_PERSON:var c=t.race,r=t.name,i={id:Date.now(),name:r,race:c};return Object(B.a)(Object(B.a)({},e),{},{list:[].concat(Object(Se.a)(e.list),[i])});default:return e}}),Te(_e.a.apply(void 0,ke)));o.a.render(Object(a.jsx)(l.a,{store:We,children:Object(a.jsx)(s.a,{children:Object(a.jsx)(Re,{})})}),document.getElementById("root"))}},[[116,1,2]]]);
//# sourceMappingURL=main.4de80817.chunk.js.map