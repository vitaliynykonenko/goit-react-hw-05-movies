"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[460],{828:function(n,t,e){e.d(t,{Z:function(){return i}});var r,a=e(168),c=e(444).ZP.h1(r||(r=(0,a.Z)(["\npadding: 8px;\nmargin-top: 0;\nborder-radius: 8px;\ncolor: #fff;\nfont-size: 40px;\nfont-weight: 500;\ntext-align: center;\nbackground-image: repeating-linear-gradient(\n    -45deg,\n    #606dbc,\n    #606dbc 15px,\n    #465298 15px,\n    #465298 30px\n  );\n"]))),o=e(184);function i(n){var t=n.text;return(0,o.jsx)(c,{children:t})}},150:function(n,t,e){e.d(t,{Z:function(){return x}});var r,a,c,o,i=e(731),u=e(312),s=e(168),f=e(444),p=f.ZP.li(r||(r=(0,s.Z)(["\n\n  flex-direction: column;\n  display: flex;\n  flex-wrap: wrap;\n  align-items: center;\n  align-content: space-around;\n  justify-content: center;\n  font-size: 20px;\n  font-weight: 500;\n  margin: 10px;\n\n"]))),l=f.ZP.img(a||(a=(0,s.Z)(["\n  margin-bottom: 5px;\n \n"]))),d=f.ZP.ul(c||(c=(0,s.Z)(["\n  color: black;\n  display: flex;\n  flex-wrap: wrap;\n"]))),g=f.ZP.h3(o||(o=(0,s.Z)(["\n\n  display: flex;\n  justify-content: space-around;\n  color: black;\n  font-size: 20px;\n  :hover {\n    color: #2196f3;\n"]))),v=e(184),x=function(n){var t=n.movies,e=n.prevLocation;return(0,v.jsx)(v.Fragment,{children:(0,v.jsx)(d,{children:t.map((function(n){var r=n.id,a=n.original_title,c=n.poster_path;return(0,v.jsx)(p,{children:(0,v.jsxs)(i.rU,{to:"/movies/".concat(r),state:{from:e},children:[(0,v.jsx)(l,{src:c?"https://image.tmdb.org/t/p/w300".concat(c):u,alt:"".concat(t.title," portrait")}),(0,v.jsx)(g,{children:a})]})},r)}))})})}},715:function(n,t,e){e.r(t),e.d(t,{default:function(){return l}});var r=e(885),a=e(842),c=e(828),o=e(150),i=e(791),u=e(207),s=e(731),f=e(184);function p(){return(0,f.jsxs)("h1",{children:["Page is not found :( Go to ",(0,f.jsx)(s.rU,{to:"/",children:"Home page"})," "]})}function l(){var n=(0,i.useState)([]),t=(0,r.Z)(n,2),e=t[0],s=t[1],l=(0,i.useState)(null),d=(0,r.Z)(l,2),g=d[0],v=d[1],x=(0,i.useState)(!1),h=(0,r.Z)(x,2),m=h[0],Z=h[1];(0,i.useEffect)((function(){Z(!0),(0,u.XT)().then((function(n){s(n)})).catch((function(n){v("Ooops. Something went wrong..."),console.log(n)})).finally((function(){return Z(!1)}))}),[]);var w=!m&&!e.length;return(0,f.jsx)(f.Fragment,{children:(0,f.jsxs)(a.Z,{children:[(0,f.jsx)(c.Z,{text:"Trending Movies"}),m&&"Loading ...",w&&(0,f.jsx)(p,{}),g&&(0,f.jsx)("div",{children:g}),e&&(0,f.jsx)(o.Z,{movies:e})]})})}},207:function(n,t,e){e.d(t,{Hq:function(){return g},XT:function(){return d},fU:function(){return x},l2:function(){return v},sv:function(){return h}});var r=e(861),a=e(757),c=e.n(a),o=e(44),i="6969c1c13baa49f777b714c28a585a8f";o.ZP.defaults.baseURL="https://api.themoviedb.org/3";var u="/trending/movie/week",s="/search/movie",f="/movie",p="/credits",l="/reviews",d=function(){var n=(0,r.Z)(c().mark((function n(){var t,e,r=arguments;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return t=r.length>0&&void 0!==r[0]?r[0]:1,n.next=3,o.ZP.get("".concat(u,"?api_key=").concat(i,"&page=").concat(t,"&language=en-US&include_adult=false"),{});case 3:return e=n.sent,n.abrupt("return",e.data.results);case 5:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}(),g=function(){var n=(0,r.Z)(c().mark((function n(t){var e,r,a=arguments;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return e=a.length>1&&void 0!==a[1]?a[1]:1,n.next=3,o.ZP.get("".concat(s,"?api_key=").concat(i,"&page=").concat(e,"&query=").concat(t,"&language=en-US&include_adult=false"));case 3:return r=n.sent,n.abrupt("return",r.data.results);case 5:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}(),v=function(){var n=(0,r.Z)(c().mark((function n(t){var e;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,o.ZP.get("".concat(f,"/").concat(t,"?api_key=").concat(i,"&language=en-US"));case 2:return e=n.sent,n.abrupt("return",e.data);case 4:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}(),x=function(){var n=(0,r.Z)(c().mark((function n(t){var e;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,o.ZP.get("/movie/".concat(t).concat(p,"?api_key=").concat(i,"&language=en-US"));case 2:return e=n.sent,n.abrupt("return",e.data.cast);case 4:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}(),h=function(){var n=(0,r.Z)(c().mark((function n(t){var e,r,a=arguments;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return e=a.length>1&&void 0!==a[1]?a[1]:1,n.next=3,o.ZP.get("/movie/".concat(t).concat(l,"?api_key=").concat(i,"&language=en-US&page=").concat(e));case 3:return r=n.sent,n.abrupt("return",r.data.results);case 5:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}()},312:function(n,t,e){n.exports=e.p+"static/media/broken_img.d25e8d14857edd0cff6b.png"}}]);
//# sourceMappingURL=HomePage.ec183a95.chunk.js.map