(this["webpackJsonpbasic-blog"]=this["webpackJsonpbasic-blog"]||[]).push([[0],{69:function(e,t,a){e.exports=a(98)},74:function(e,t,a){},98:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),i=a(18),l=a.n(i),c=(a(74),a(24)),o=a(27),s=a(6),u=a(8),d=a(123),m=a(124),p=a(129),b=a(38),f=a(130),E=a(121),v=a(20),h=a(56),y=a.n(h),O=a(58),k=a.n(O),g=a(57),N=a.n(g),j=a(34),I=a.n(j),S=a(35),w=a.n(S),R=a(19),C=function(e){return{type:"ALLPOST",payload:e}},x=Object(E.a)((function(e){return{root:{flexGrow:1},menuButton:{marginRight:e.spacing(2)},title:Object(o.a)({flexGrow:1,display:"none"},e.breakpoints.up("sm"),{display:"block"}),search:Object(o.a)({position:"relative",borderRadius:e.shape.borderRadius,backgroundColor:Object(v.b)(e.palette.common.white,.15),"&:hover":{backgroundColor:Object(v.b)(e.palette.common.white,.25)},marginLeft:0,width:"100%"},e.breakpoints.up("sm"),{marginLeft:e.spacing(1),width:"auto"}),searchIcon:{padding:e.spacing(0,2),height:"100%",position:"absolute",pointerEvents:"none",display:"flex",alignItems:"center",justifyContent:"center"},inputRoot:{color:"inherit"},inputInput:Object(o.a)({padding:e.spacing(1,1,1,0),paddingLeft:"calc(1em + ".concat(e.spacing(4),"px)"),transition:e.transitions.create("width"),width:"100%"},e.breakpoints.up("sm"),{width:"12ch","&:focus":{width:"20ch"}})}}));function T(){var e=x(),t=Object(s.f)(),a=r.a.useState(""),n=Object(c.a)(a,2),i=n[0],l=n[1],o=Object(u.c)((function(e){return e.allpost})),E=Object(u.b)();function v(e){var a;e.target.value?(E({type:"TURNONSEARCHMODE",payload:a}),t.push("/")):E(function(e){return{type:"TURNOFFSEARCHMODE",payload:e}}()),l(e.target.value),E(function(e){return{type:"SEARCH",payload:e}}(e.target.value)),function(){var e=o.filter((function(e){return JSON.stringify(e).toLowerCase().includes(i.toLowerCase())}));console.log(e),E((t=e,{type:"FILTERPOST",payload:t}));var t}()}return r.a.createElement("div",{className:e.root},r.a.createElement(d.a,{position:"static"},r.a.createElement(m.a,null,r.a.createElement(p.a,{edge:"start",className:e.menuButton,color:"inherit","aria-label":"open drawer"},r.a.createElement(y.a,null)),r.a.createElement(b.a,{className:e.title,variant:"h6",noWrap:!0},"CEA Assignment"),r.a.createElement(R.b,{exact:!0,to:"/",activeClassName:"activelink",className:"headerlink"},r.a.createElement(N.a,null)),r.a.createElement(R.b,{exact:!0,activeClassName:"activelink",to:"/likepost",className:"headerlink"},r.a.createElement(I.a,null)),r.a.createElement(R.b,{exact:!0,activeClassName:"activelink",to:"/dislikepost",className:"headerlink"},r.a.createElement(w.a,null)),r.a.createElement("div",{className:e.search},r.a.createElement("div",{className:e.searchIcon},r.a.createElement(k.a,null)),r.a.createElement(f.a,{onChange:function(e){v(e)},value:i,placeholder:"Search\u2026",classes:{root:e.inputRoot,input:e.inputInput},inputProps:{"aria-label":"search"}})))))}var A=a(125),L=a(126),D=a(127),_=a(128),J=a(131),P=a(37),F=a(59),H=a.n(F),M=a(60),U=a.n(M),X=Object(E.a)((function(e){return{root:{maxWidth:345},avatar:{backgroundColor:P.a[500]}}}));var B=function(e){var t=Object(s.f)(),a=X(),i=Object(u.c)((function(e){return e.allpost})),l=Object(n.useState)(e.like||!1),o=Object(c.a)(l,2),d=o[0],m=o[1],f=Object(n.useState)(e.dislike||!1),E=Object(c.a)(f,2),v=E[0],h=E[1],y=Object(u.b)(),O={userId:e.userId,title:e.title,body:e.body};return r.a.createElement(A.a,{className:a.root,style:{backgroundColor:"#d8d3cd",margin:"16px",float:"left"}},r.a.createElement(L.a,{avatar:r.a.createElement(J.a,{"aria-label":"recipe",className:a.avatar},e.userId),title:e.title}),r.a.createElement(D.a,null,r.a.createElement(b.a,{variant:"body2",color:"textSecondary",component:"p"},e.body)),r.a.createElement(_.a,{disableSpacing:!0},r.a.createElement(p.a,{"aria-label":"add to favorites"},d?r.a.createElement(I.a,{onClick:function(){!function(){m(!1);var e=i.filter((function(e){var t={userId:e.userId,title:e.title,body:e.body};return JSON.stringify(t)!==JSON.stringify(O)||(e.like=!1),e}));y(C(e))}()}}):r.a.createElement(H.a,{onClick:function(){!function(){m(!0);var e=i.filter((function(e){var t={userId:e.userId,title:e.title,body:e.body};return JSON.stringify(t)!==JSON.stringify(O)||(e.like=!0),e}));y(C(e))}()}})),r.a.createElement(p.a,{"aria-label":"add to dislike"},v?r.a.createElement(w.a,{onClick:function(){!function(){h(!1);var e=i.filter((function(e){var t={userId:e.userId,title:e.title,body:e.body};return JSON.stringify(t)!==JSON.stringify(O)||(e.dislike=!1),e}));y(C(e))}()}}):r.a.createElement(U.a,{onClick:function(){!function(){h(!0);var e=i.filter((function(e){var t={userId:e.userId,title:e.title,body:e.body};return JSON.stringify(t)!==JSON.stringify(O)||(e.dislike=!0),e}));y(C(e))}()}})),r.a.createElement("p",{style:{textDecoration:"underline"},onClick:function(){y({type:"READMOREPOST",payload:{userId:e.userId,id:e.id,title:e.title,body:e.body}}),t.push("/post/"+e.userId+"/"+e.id)}},"Read more")))};var G=function(){var e=Object(u.c)((function(e){return e.searchmode.mode})),t=Object(u.c)((function(e){return e.filteredpost})),a=Object(u.c)((function(e){return e.allpost}));return r.a.createElement("div",{className:"posts"},e?r.a.createElement("span",null,r.a.createElement("h3",null,"Filter Post"),r.a.createElement("div",{className:"containpost"},t.map((function(e,t){return r.a.createElement(B,{userId:e.userId,id:e.id,title:e.title,body:e.body,key:e.id,like:e.like||!1,dislike:e.dislike||!1})})))):r.a.createElement("span",null,r.a.createElement("h3",null,"All Post"),r.a.createElement("div",{className:"containpost"},a.map((function(e,t){return r.a.createElement(B,{userId:e.userId,title:e.title,body:e.body,key:e.id,id:e.id,like:e.like||!1,dislike:e.dislike||!1})})))))};var V=function(){var e=Object(u.c)((function(e){return e.allpost}));return r.a.createElement("div",{className:"posts"},r.a.createElement("h3",null,"Liked Post"),r.a.createElement("div",{className:"containpost"},e.map((function(e){return e.like?r.a.createElement(B,{userId:e.userId,id:e.id,title:e.title,body:e.body,key:e.id,like:e.like||!1,dislike:e.dislike||!1}):""}))))};var W=function(){var e=Object(u.c)((function(e){return e.allpost}));return r.a.createElement("div",{className:"posts"},r.a.createElement("h3",null,"Disliked Post"),r.a.createElement("div",{className:"containpost"},e.map((function(e){return e.dislike?r.a.createElement(B,{userId:e.userId,id:e.id,title:e.title,body:e.body,key:e.id,like:e.like||!1,dislike:e.dislike||!1}):""}))))};var q=function(){var e=Object(u.c)((function(e){return e.detailpost}));return r.a.createElement("div",{className:"detailpost"},r.a.createElement("h3",null,e.title),r.a.createElement("p",null,e.body))},z=a(61),K=a.n(z);var Q=function(){var e=Object(u.b)(),t=Object(n.useState)([]),a=Object(c.a)(t,2),i=(a[0],a[1]);return Object(n.useEffect)((function(){K.a.get("https://jsonplaceholder.typicode.com/posts").then((function(t){i(t.data),e(C(t.data))})).catch((function(e){console.log(e)}))}),[]),r.a.createElement("div",{className:"App"},r.a.createElement(R.a,null,r.a.createElement(T,null),r.a.createElement(s.c,null,r.a.createElement(s.a,{path:"/",exact:!0,component:G}),r.a.createElement(s.a,{path:"/post/:userId/:postId",exact:!0,component:q}),r.a.createElement(s.a,{path:"/likepost",exact:!0,component:V}),r.a.createElement(s.a,{path:"/dislikepost",exact:!0,component:W}))))},Y=a(25),Z=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"ALLPOST":return t.payload;default:return e}},$=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SEARCH":return t.payload;default:return e}},ee=a(31),te=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{mode:!1},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"TURNONSEARCHMODE":var a=Object(ee.a)(Object(ee.a)({},e),{},{mode:!0});return a;case"TURNOFFSEARCHMODE":var n=Object(ee.a)(Object(ee.a)({},e),{},{mode:!1});return n;default:var r=Object.assign({},e);return r}},ae=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"FILTERPOST":return t.payload;default:return e}},ne=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"READMOREPOST":return t.payload;default:return e}},re=Object(Y.b)({allpost:Z,searchterm:$,searchmode:te,filteredpost:ae,detailpost:ne}),ie=Object(Y.c)(re,window.__REDUX_DEVTOOLS_EXTENSION__&&window.__REDUX_DEVTOOLS_EXTENSION__());l.a.render(r.a.createElement(u.a,{store:ie},r.a.createElement(Q,null)),document.getElementById("root"))}},[[69,1,2]]]);
//# sourceMappingURL=main.3be126e4.chunk.js.map