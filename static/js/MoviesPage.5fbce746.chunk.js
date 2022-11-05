"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[410],{828:function(n,t,e){e.d(t,{Z:function(){return i}});var r,a=e(168),o=e(444).ZP.h1(r||(r=(0,a.Z)(["\npadding: 8px;\nmargin-top: 0;\nborder-radius: 8px;\ncolor: #fff;\nfont-size: 40px;\nfont-weight: 500;\ntext-align: center;\nbackground-image: repeating-linear-gradient(\n    -45deg,\n    #606dbc,\n    #606dbc 15px,\n    #465298 15px,\n    #465298 30px\n  );\n"]))),c=e(184);function i(n){var t=n.text;return(0,c.jsx)(o,{children:t})}},150:function(n,t,e){e.d(t,{Z:function(){return h}});var r,a,o,c,i=e(731),u=e(312),s=e(168),p=e(444),f=p.ZP.li(r||(r=(0,s.Z)(["\n\n  flex-direction: column;\n  display: flex;\n  flex-wrap: wrap;\n  align-items: center;\n  align-content: space-around;\n  justify-content: center;\n  font-size: 20px;\n  font-weight: 500;\n  margin: 10px;\n\n"]))),l=p.ZP.img(a||(a=(0,s.Z)(["\n  margin-bottom: 5px;\n \n"]))),d=p.ZP.ul(o||(o=(0,s.Z)(["\n  color: black;\n  display: flex;\n  flex-wrap: wrap;\n"]))),g=p.ZP.h3(c||(c=(0,s.Z)(["\n\n  display: flex;\n  justify-content: space-around;\n  color: black;\n  font-size: 20px;\n  :hover {\n    color: #2196f3;\n"]))),x=e(184),h=function(n){var t=n.movies,e=n.prevLocation;return(0,x.jsx)(x.Fragment,{children:(0,x.jsx)(d,{children:t.map((function(n){var r=n.id,a=n.original_title,o=n.poster_path;return(0,x.jsx)(f,{children:(0,x.jsxs)(i.rU,{to:"/movies/".concat(r),state:{from:e},children:[(0,x.jsx)(l,{src:o?"https://image.tmdb.org/t/p/w300".concat(o):u,alt:"".concat(t.title," portrait")}),(0,x.jsx)(g,{children:a})]})},r)}))})})}},759:function(n,t,e){e.r(t),e.d(t,{default:function(){return w}});var r,a,o,c=e(885),i=e(689),u=e(791),s=e(731),p=e(168),f=e(444),l=f.ZP.form(r||(r=(0,p.Z)(["\nmargin-left: 35%;\nmargin-right: 30%;\n"]))),d=f.ZP.input(a||(a=(0,p.Z)(["\npadding: 10px 15px;\nborder-radius: 10px;\nborder: 3px solid #2196f3;\nmargin-right: 20px;\nfont-size: 20px;\noutline: transparent;\n\n:hover {\n    background-color: #f4f8fa;\n"]))),g=f.ZP.button(o||(o=(0,p.Z)(["\ncursor: pointer;\npadding: 8px 15px;\nmargin-bottom: 15px;\nbox-shadow: 1px 2px 2px 0 rgb(0, 0, 0/0.5);\ntransition: box-shadow 250ms linear;\nborder-radius: 10px;\nborder: 3px solid #2196f3;\nfont-weight: bold;\n\n:hover {\n    background-color: #2196f3;\n    color: white;\n"]))),x=e(184),h=function(n){var t=n.onSearch,e=(0,u.useState)(""),r=(0,c.Z)(e,2),a=r[0],o=r[1];return(0,x.jsx)(x.Fragment,{children:(0,x.jsxs)(l,{onSubmit:function(n){n.preventDefault(),""===a.trim()&&alert("Enter the film title"),t(a),o("")},children:[(0,x.jsx)(d,{type:"text",name:"searchQuery",value:a,autoComplete:"off",autoFocus:!0,placeholder:"Search ...",onChange:function(n){o(n.target.value.toLowerCase())}}),(0,x.jsx)(g,{type:"submit",children:"Search"})]})})},v=e(207),m=e(150),Z=e(842),b=e(828),w=function(){var n=(0,s.lr)(),t=(0,c.Z)(n,2),e=t[0],r=t[1],a=(0,u.useState)([]),o=(0,c.Z)(a,2),p=o[0],f=o[1],l=(0,u.useState)(""),d=(0,c.Z)(l,2),g=d[0],w=d[1],y=(0,u.useState)(!1),k=(0,c.Z)(y,2),j=k[0],_=k[1],S=(0,i.TH)(),P=e.get("query");return(0,u.useEffect)((function(){if(P){_(!0),(0,v.Hq)(P).then((function(n){n.length||alert("No movies found!"),f(n)})).catch((function(n){w("Ooops. Something went wrong..."),console.log(n)})).finally(_(!1))}}),[P]),(0,x.jsx)(x.Fragment,{children:(0,x.jsxs)(Z.Z,{children:[(0,x.jsx)(b.Z,{text:"Movie Search"}),j&&"Loading ...",g&&(0,x.jsx)("div",{children:g}),(0,x.jsx)(h,{onSearch:function(n){r({query:"".concat(n)})}}),p&&(0,x.jsx)(m.Z,{movies:p,prevLocation:S})]})})}},207:function(n,t,e){e.d(t,{Hq:function(){return g},XT:function(){return d},fU:function(){return h},l2:function(){return x},sv:function(){return v}});var r=e(861),a=e(757),o=e.n(a),c=e(44),i="6969c1c13baa49f777b714c28a585a8f";c.ZP.defaults.baseURL="https://api.themoviedb.org/3";var u="/trending/movie/week",s="/search/movie",p="/movie",f="/credits",l="/reviews",d=function(){var n=(0,r.Z)(o().mark((function n(){var t,e,r=arguments;return o().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return t=r.length>0&&void 0!==r[0]?r[0]:1,n.next=3,c.ZP.get("".concat(u,"?api_key=").concat(i,"&page=").concat(t,"&language=en-US&include_adult=false"),{});case 3:return e=n.sent,n.abrupt("return",e.data.results);case 5:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}(),g=function(){var n=(0,r.Z)(o().mark((function n(t){var e,r,a=arguments;return o().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return e=a.length>1&&void 0!==a[1]?a[1]:1,n.next=3,c.ZP.get("".concat(s,"?api_key=").concat(i,"&page=").concat(e,"&query=").concat(t,"&language=en-US&include_adult=false"));case 3:return r=n.sent,n.abrupt("return",r.data.results);case 5:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}(),x=function(){var n=(0,r.Z)(o().mark((function n(t){var e;return o().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,c.ZP.get("".concat(p,"/").concat(t,"?api_key=").concat(i,"&language=en-US"));case 2:return e=n.sent,n.abrupt("return",e.data);case 4:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}(),h=function(){var n=(0,r.Z)(o().mark((function n(t){var e;return o().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,c.ZP.get("/movie/".concat(t).concat(f,"?api_key=").concat(i,"&language=en-US"));case 2:return e=n.sent,n.abrupt("return",e.data.cast);case 4:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}(),v=function(){var n=(0,r.Z)(o().mark((function n(t){var e,r,a=arguments;return o().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return e=a.length>1&&void 0!==a[1]?a[1]:1,n.next=3,c.ZP.get("/movie/".concat(t).concat(l,"?api_key=").concat(i,"&language=en-US&page=").concat(e));case 3:return r=n.sent,n.abrupt("return",r.data.results);case 5:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}()},312:function(n,t,e){n.exports=e.p+"static/media/broken_img.d25e8d14857edd0cff6b.png"}}]);
//# sourceMappingURL=MoviesPage.5fbce746.chunk.js.map