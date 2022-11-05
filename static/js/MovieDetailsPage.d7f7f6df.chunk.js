"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[971],{828:function(n,e,t){t.d(e,{Z:function(){return i}});var r,a=t(168),o=t(444).ZP.h1(r||(r=(0,a.Z)(["\npadding: 8px;\nmargin-top: 0;\nborder-radius: 8px;\ncolor: #fff;\nfont-size: 40px;\nfont-weight: 500;\ntext-align: center;\nbackground-image: repeating-linear-gradient(\n    -45deg,\n    #606dbc,\n    #606dbc 15px,\n    #465298 15px,\n    #465298 30px\n  );\n"]))),c=t(184);function i(n){var e=n.text;return(0,c.jsx)(o,{children:e})}},762:function(n,e,t){t.r(e),t.d(e,{default:function(){return w}});var r,a,o,c=t(885),i=t(168),s=t(444),u=s.ZP.button(r||(r=(0,i.Z)(["\ncursor: pointer;\nwidth: 80px;\ntext-align: center;\nfont-weight: bold;\npadding: 8px 15px;\nmargin-bottom: 15px;\nbox-shadow: 1px 2px 2px 0 rgb(0, 0, 0/0.5);\ntransition: box-shadow 250ms linear;\nborder-radius: 10px;\nborder: 1px solid #2196f3;\n\n:hover {\n    background-color: #2196f3;\n    color: white;\n  }\n"]))),l=s.ZP.p(a||(a=(0,i.Z)(["\n\ndisplay: inline-block;\npadding: 8px 15px;\nborder-radius: 10px;\nborder: 1px solid #2196f3;\nmargin-right: 30px;\ncolor: black;\nfont-weight: bold;\n:hover {\n    background-color: #2196f3;\n    color: white;\n \n"]))),d=s.ZP.p(o||(o=(0,i.Z)(["\n\ndisplay: inline-block;\npadding: 8px 28px;\nborder-radius: 10px;\nborder: 1px solid #2196f3;\ncolor: black;\nfont-weight: bold;\n:hover {\n    background-color: #2196f3;\n    color: white;\n \n"]))),p=t(842),f=t(791),h=t(731),x=t(689),g=t(207),v=t(828),b=t(184);function w(){var n=(0,f.useState)(null),e=(0,c.Z)(n,2),t=e[0],r=e[1],a=(0,f.useState)(null),o=(0,c.Z)(a,2),i=o[0],s=o[1],w=(0,f.useState)(!1),m=(0,c.Z)(w,2),k=m[0],Z=m[1],j=(0,x.UO)().movieId,_=(0,x.TH)(),y=(0,x.s0)();return(0,f.useEffect)((function(){Z(!0),(0,g.l2)(j).then((function(n){r(n)})).catch((function(n){s("Ooops. Something went wrong..."),console.log(n)})).finally((function(){return Z(!1)}))}),[j]),(0,b.jsx)(b.Fragment,{children:(0,b.jsxs)(p.Z,{children:[(0,b.jsx)(u,{onClick:function(){var n,e;return y(null!==(n=null===_||void 0===_||null===(e=_.state)||void 0===e?void 0:e.from)&&void 0!==n?n:"/")},children:"Go back"}),t&&(0,b.jsx)(v.Z,{text:t.title}),k&&"Loading ...",i&&(0,b.jsx)("div",{children:i}),t&&(0,b.jsxs)("div",{children:[(0,b.jsx)("img",{src:"https://image.tmdb.org/t/p/w300/".concat(t.poster_path),alt:t.title}),(0,b.jsx)("h3",{children:t.title}),(0,b.jsxs)("p",{children:["(",new Date(t.release_date).getFullYear(),")"]}),(0,b.jsxs)("p",{children:["User Score: ",t.popularity]}),(0,b.jsxs)("div",{children:[(0,b.jsx)("h3",{children:"Overview"}),(0,b.jsx)("p",{children:t.overview})]})]}),(0,b.jsx)("hr",{}),(0,b.jsxs)("div",{children:[(0,b.jsx)("h2",{children:"Additional Information"}),(0,b.jsx)(h.OL,{to:"/movies/".concat(j,"/reviews"),state:_.state,children:(0,b.jsx)(l,{children:"Reviews"})}),(0,b.jsx)(h.OL,{to:"/movies/".concat(j,"/cast"),state:_.state,children:(0,b.jsx)(d,{children:"Cast"})}),(0,b.jsx)("hr",{}),(0,b.jsx)(x.j3,{})]})]})})}},207:function(n,e,t){t.d(e,{Hq:function(){return h},XT:function(){return f},fU:function(){return g},l2:function(){return x},sv:function(){return v}});var r=t(861),a=t(757),o=t.n(a),c=t(44),i="6969c1c13baa49f777b714c28a585a8f";c.ZP.defaults.baseURL="https://api.themoviedb.org/3";var s="/trending/movie/week",u="/search/movie",l="/movie",d="/credits",p="/reviews",f=function(){var n=(0,r.Z)(o().mark((function n(){var e,t,r=arguments;return o().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return e=r.length>0&&void 0!==r[0]?r[0]:1,n.next=3,c.ZP.get("".concat(s,"?api_key=").concat(i,"&page=").concat(e,"&language=en-US&include_adult=false"),{});case 3:return t=n.sent,n.abrupt("return",t.data.results);case 5:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}(),h=function(){var n=(0,r.Z)(o().mark((function n(e){var t,r,a=arguments;return o().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return t=a.length>1&&void 0!==a[1]?a[1]:1,n.next=3,c.ZP.get("".concat(u,"?api_key=").concat(i,"&page=").concat(t,"&query=").concat(e,"&language=en-US&include_adult=false"));case 3:return r=n.sent,n.abrupt("return",r.data.results);case 5:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}(),x=function(){var n=(0,r.Z)(o().mark((function n(e){var t;return o().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,c.ZP.get("".concat(l,"/").concat(e,"?api_key=").concat(i,"&language=en-US"));case 2:return t=n.sent,n.abrupt("return",t.data);case 4:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}(),g=function(){var n=(0,r.Z)(o().mark((function n(e){var t;return o().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,c.ZP.get("/movie/".concat(e).concat(d,"?api_key=").concat(i,"&language=en-US"));case 2:return t=n.sent,n.abrupt("return",t.data.cast);case 4:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}(),v=function(){var n=(0,r.Z)(o().mark((function n(e){var t,r,a=arguments;return o().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return t=a.length>1&&void 0!==a[1]?a[1]:1,n.next=3,c.ZP.get("/movie/".concat(e).concat(p,"?api_key=").concat(i,"&language=en-US&page=").concat(t));case 3:return r=n.sent,n.abrupt("return",r.data.results);case 5:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}()}}]);
//# sourceMappingURL=MovieDetailsPage.d7f7f6df.chunk.js.map