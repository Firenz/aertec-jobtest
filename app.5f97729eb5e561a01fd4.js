!function(e){function t(t){for(var r,o,c=t[0],l=t[1],s=t[2],m=0,f=[];m<c.length;m++)o=c[m],Object.prototype.hasOwnProperty.call(a,o)&&a[o]&&f.push(a[o][0]),a[o]=0;for(r in l)Object.prototype.hasOwnProperty.call(l,r)&&(e[r]=l[r]);for(u&&u(t);f.length;)f.shift()();return i.push.apply(i,s||[]),n()}function n(){for(var e,t=0;t<i.length;t++){for(var n=i[t],r=!0,c=1;c<n.length;c++){var l=n[c];0!==a[l]&&(r=!1)}r&&(i.splice(t--,1),e=o(o.s=n[0]))}return e}var r={},a={0:0},i=[];function o(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,o),n.l=!0,n.exports}o.m=e,o.c=r,o.d=function(e,t,n){o.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},o.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o.t=function(e,t){if(1&t&&(e=o(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(o.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)o.d(n,r,function(t){return e[t]}.bind(null,r));return n},o.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return o.d(t,"a",t),t},o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},o.p="/codeko-jobtest/";var c=window.webpackJsonp=window.webpackJsonp||[],l=c.push.bind(c);c.push=t,c=c.slice();for(var s=0;s<c.length;s++)t(c[s]);var u=l;i.push([64,1]),n()}({23:function(e,t,n){"use strict";(function(e){n.d(t,"f",(function(){return i})),n.d(t,"e",(function(){return o})),n.d(t,"g",(function(){return c})),n.d(t,"c",(function(){return l})),n.d(t,"b",(function(){return s})),n.d(t,"a",(function(){return u})),n.d(t,"d",(function(){return m}));var r="https://api.themoviedb.org/3",a=e.env.API_KEY,i="".concat(r,"/trending/all/day?api_key=").concat(a),o="".concat(r,"/genre/movie/list?api_key=").concat(a,"&language=").concat("en-US"),c="".concat(r,"/genre/tv/list?api_key=").concat(a,"&language=").concat("en-US"),l=function(e){return"".concat(r,"/search/multi?api_key=").concat(a,"&language=").concat("en-US","&query=").concat(e,"&page=1&include_adult=false")},s=function(e,t){return"".concat(r,"/").concat(e,"/").concat(t,"?api_key=").concat(a,"&language=").concat("en-US")},u=function(e){return null==e?"":"".concat("https://image.tmdb.org/t/p/w500").concat(e)},m=function(e,t){return"".concat(r,"/").concat(e,"/").concat(t,"/videos?api_key=").concat(a,"&language=").concat("en-US")}}).call(this,n(70))},64:function(e,t,n){n(65),e.exports=n(83)},80:function(e,t,n){e.exports=n.p+"./media/not-found-image.302ec86419e42f1e5081608274164a96.jpg"},83:function(e,t,n){"use strict";n.r(t);var r=n(0),a=n(8),i=n(127),o=n(121),c=n(50),l=n.n(c),s=n(51),u=n.n(s),m=n(23),f=new(function(){function e(){l()(this,e),this.movieGenreList=[],this.tvGenreList=[],this.currentDate=new Date,this.getMoviesGenre(),this.getTvGenre()}return u()(e,[{key:"getTrendingMedia",value:function(){var e=this;return fetch(m.f).then((function(t){return e.checkStatus(t)})).then((function(t){return e.parseJSON(t)})).then((function(t){return e.resolveMediaList(t)}))}},{key:"getMediaById",value:function(e,t){var n=this;return fetch(Object(m.b)(e,t)).then((function(e){return n.checkStatus(e)})).then((function(e){return n.parseJSON(e)})).then((function(e){return n.resolveMedia(e)}))}},{key:"getTrailerUrlById",value:function(e,t){var n=this;return fetch(Object(m.d)(e,t)).then((function(e){return n.checkStatus(e)})).then((function(e){return n.parseJSON(e)})).then((function(e){return n.resolveVideos(e)}))}},{key:"searchMediaByTerm",value:function(e){var t=this;return fetch(Object(m.c)(e)).then((function(e){return t.checkStatus(e)})).then((function(e){return t.parseJSON(e)})).then((function(e){return t.resolveMediaList(e)}))}},{key:"checkStatus",value:function(e){if(e.status>=200&&e.status<300)return Promise.resolve(e);throw new Error(e.statusText)}},{key:"getMoviesGenre",value:function(){var e=this;return fetch(m.e).then((function(t){return e.checkStatus(t)})).then((function(t){return e.parseJSON(t)})).then((function(t){return e.resolveGenres(t)})).then((function(t){return e.movieGenreList=t}))}},{key:"getTvGenre",value:function(){var e=this;return fetch(m.g).then((function(t){return e.checkStatus(t)})).then((function(t){return e.parseJSON(t)})).then((function(t){return e.resolveGenres(t)})).then((function(t){return e.tvGenreList=t}))}},{key:"parseJSON",value:function(e){return e.json()}},{key:"resolveMediaList",value:function(e){var t=this,n={results:[],total_results:0};return e.results.map((function(e){if("person"!==e.media_type&&!(new Date("".concat(e.release_date,"T00:00"))>t.currentDate))return n.results.push(t.parseMediaApiToMediaVm(e))})),n.total_results=n.results.length,Promise.resolve(n)}},{key:"resolveMedia",value:function(e){return Promise.resolve(this.parseMediaApiToMediaVm(e))}},{key:"resolveVideos",value:function(e){var t=e.results[0],n={id:(null==t?void 0:t.id)||"",width:(null==t?void 0:t.size)||0,key:(null==t?void 0:t.key)||"",videoUrl:null==t?"":"https://www.youtube.com/watch?v=".concat(t.key)};return Promise.resolve(n)}},{key:"resolveGenres",value:function(e){var t=[];return e.genres.map((function(e){var n={id:e.id,name:e.name};n.name&&t.push(n)})),Promise.resolve(t)}},{key:"getGenreNameById",value:function(e,t){var n,r;switch(e){case"tv":return(null===(n=this.tvGenreList.find((function(e){return e.id===t})))||void 0===n?void 0:n.name)||"";case"movie":return(null===(r=this.movieGenreList.find((function(e){return e.id===t})))||void 0===r?void 0:r.name)||"";default:return""}}},{key:"parseMediaApiToMediaVm",value:function(e){var t,n=this;return{id:e.id,media_type:e.media_type,title:e.title?e.title:e.name?e.name:e.original_name?e.original_name:"Title not found",rating:e.vote_average,overview:e.overview,poster_path:Object(m.a)(e.poster_path),release_year:e.release_date?parseInt(e.release_date.slice(0,4)):parseInt(e.first_air_date.slice(0,4)),genre_ids:(t=[],e.genres?e.genres.map((function(e){return e.name})):(e.genre_ids.map((function(r){n.getGenreNameById(e.media_type,r)&&t.push(n.getGenreNameById(e.media_type,r))})),t))}}}]),e}()),d=n(15),p=n.n(d),g=r.createContext({searchTerm:"if you are reading this, likely you forgot to add the provider on top of your app",setSearchTerm:function(){console.warn("if you are reading this, likely you forgot to add the provider on top of your app")}}),h=function(e){var t=r.useState(""),n=p()(t,2),a=n[0],i=n[1];return r.createElement(g.Provider,{value:{searchTerm:a,setSearchTerm:i}},e.children)},v=n(27),b=n(10),y=n(6),E=n.n(y),w=n(116),x=n(130),k=n(86),O=Object(w.a)((function(e){var t;return Object(x.a)({brandingTitle:(t={fontSize:"2rem"},E()(t,e.breakpoints.down(690),{fontSize:"1.5rem",margin:"1rem 0 0.2rem"}),E()(t,e.breakpoints.down(610),{fontSize:"1rem",margin:"1rem 0 0.2rem"}),t)})})),j=function(){var e=O();return r.createElement(k.a,{variant:"h6",component:"h1",className:e.brandingTitle},"Videoclub webapp")},S=n(55),T=n.n(S),N=Object(w.a)((function(e){return Object(x.a)({root:{padding:e.spacing(1),backgroundColor:e.palette.primary.dark,color:e.palette.text.secondary},footerLink:{color:e.palette.text.secondary,"&:hover":{opacity:.7}},footerIcon:{height:"1rem",width:"1.2rem",verticalAlign:"text-bottom"}})})),_=function(){var e=N();return r.createElement(k.a,{className:e.root,variant:"caption",component:"footer"},r.createElement("span",{role:"img","aria-label":"copyright"},"©")," 2020. Developed in React with ",r.createElement("span",{role:"img","aria-label":"love"},r.createElement(T.a,{className:e.footerIcon}))," by ",r.createElement("a",{className:e.footerLink,href:"mailto:alicia.guardenoalbertos@gmail.com"},"Alicia Guardeño"))},I=n(120),P=Object(w.a)((function(e){return Object(x.a)({circularProgress:{alignSelf:"center",margin:"auto 0"}})})),M=function(){var e=P();return r.createElement(I.a,{className:e.circularProgress,size:"10rem"})},D=function(e){return r.createElement(o.a,null,e.children,r.createElement(_,null))},z=Object(w.a)((function(e){return Object(x.a)({root:{textAlign:"left",backgroundColor:e.palette.background.default,color:e.palette.text.primary,padding:"0 1.2rem"},center:E()({width:"100%",maxWidth:e.spacing(150),margin:"0 auto",padding:e.spacing(1.25),display:"flex",flexDirection:"row",alignItems:"baseline",justifyContent:"space-between"},e.breakpoints.down("xs"),{flexDirection:"column",justifyContent:"flex-start",alignItems:"center",padding:"0.2rem"})})})),F=function(e){var t=z(e);return r.createElement("header",{className:t.root},r.createElement("div",{className:t.center},e.children))};function A(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function B(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?A(Object(n),!0).forEach((function(t){E()(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):A(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var G=Object(w.a)((function(e){return Object(x.a)({root:B(B({width:"100%",maxWidth:e.spacing(160),margin:"0 auto",padding:"0 ".concat(e.spacing(4),"px"),flexGrow:1,display:"flex",flexDirection:"column",color:e.palette.text.primary},e.typography.body1),{},E()({},e.breakpoints.down("sm"),{margin:0,padding:0}))})})),C=function(e){var t=G(e);return r.createElement("main",{className:t.root},e.children)},L=n(56),R=n.n(L),W=n(122),U=n(123),H=n(129),J=n(124),V=n(125),Y=n(80),q=Object(w.a)((function(e){return Object(x.a)({gridItem:E()({},e.breakpoints.down("sm"),{paddingLeft:"0 !important",paddingRight:"0 !important",margin:"1rem 0","&:first-child":{marginTop:0},"&:last-child":{marginBottom:0}}),card:E()({height:"60vh",border:"".concat(e.palette.primary.dark," solid 0.5rem")},e.breakpoints.down("sm"),{borderLeft:"none",borderRight:"none"}),actionArea:{width:"100%",height:"100%",position:"relative"},media:{height:"100%"},content:{width:"100%",height:"100%",position:"absolute",zIndex:1,bottom:0,display:"flex",flexDirection:"row",alignItems:"flex-end",justifyContent:"flex-start",color:e.palette.text.primary,boxShadow:"inset 0px -101px 40px -41px rgba(0,0,0,0.75)"},rating:{width:60,height:60,marginRight:e.spacing(2),paddingTop:"0.8rem",backgroundColor:e.palette.primary.dark,textAlign:"center"},info:{textAlign:"left",textOverflow:"ellipsis",whiteSpace:"nowrap",overflow:"hidden"},title:{margin:0,textOverflow:"ellipsis",whiteSpace:"nowrap",overflow:"hidden"},subtitle:{minHeight:"27px",color:e.palette.text.secondary,textOverflow:"ellipsis",whiteSpace:"nowrap",overflow:"hidden"}})})),K=function(e){var t=q(e);return r.createElement(W.a,{item:!0,xl:4,lg:4,md:6,sm:12,xs:12,className:t.gridItem},r.createElement(U.a,{className:t.card},r.createElement(H.a,{className:t.actionArea},r.createElement(v.b,{to:"/".concat(e.media_type,"/").concat(e.id)},r.createElement(J.a,{className:t.media,component:"img",alt:"".concat(e.title," poster"),src:""===e.poster_path?Y:e.poster_path,title:e.title}),r.createElement(V.a,{className:t.content},r.createElement(k.a,{className:t.rating,variant:"h5",component:"h2"},e.rating<=0?"-":"".concat(e.rating)),r.createElement("div",{className:t.info},r.createElement(k.a,{className:t.title,variant:"h5",component:"h2"},e.title),r.createElement(k.a,{className:t.subtitle,variant:"body2",color:"textSecondary",component:"p"},0===e.genre_ids.length?" ":e.genre_ids.join(", "))))))))},Q=function(e){var t=e.movieData;return r.createElement(K,Object.assign({},t))},X=Object(w.a)((function(e){return Object(x.a)({header:{opacity:.8},icon:{verticalAlign:"bottom",marginRight:"0.5rem"}})})),Z=function(e){var t=X(e);return r.createElement(k.a,{className:t.header,variant:"h3",component:"h1"},null!=e.icon&&r.createElement(e.icon,{className:t.icon,fontSize:"large"}),e.text)},$=Object(w.a)((function(e){return Object(x.a)({grid:E()({alignSelf:"center",width:"100% !important",margin:"2rem 0 6rem",justifyContent:"center"},e.breakpoints.down("md"),{justifyContent:"center !important"})})})),ee=function(e){var t=$(e),n=e.movieList;return r.createElement(r.Fragment,null,r.createElement(W.a,{className:t.grid,container:!0,direction:"row",alignItems:"center",spacing:3},n.results.map((function(e){return r.createElement(Q,{key:e.id,movieData:e})}))))},te=function(){var e=r.useContext(g),t=r.useState({page:-1,results:[],total_results:-1,total_pages:-1}),n=p()(t,2),a=n[0],i=n[1],o=r.useState(!1),c=p()(o,2),l=c[0],s=c[1],u=function(){s(!0),""===e.searchTerm?f.getTrendingMedia().then((function(e){i(e)})).finally((function(){return s(!1)})):f.searchMediaByTerm(e.searchTerm).then((function(e){i(e)})).finally((function(){return s(!1)}))};return r.useEffect((function(){u()}),[]),r.useEffect((function(){u()}),[e.searchTerm]),l?r.createElement(M,null):""!==e.searchTerm?0===a.results.length?r.createElement(Z,{text:"No results found for '".concat(e.searchTerm,"'")}):r.createElement(r.Fragment,null,r.createElement(Z,{text:"Found results for '".concat(e.searchTerm,"'")}),r.createElement(ee,{movieList:a})):r.createElement(r.Fragment,null,r.createElement(Z,{text:"Trending",icon:R.a}),r.createElement(ee,{movieList:a}))},ne=n(128),re=n(126),ae=n(57),ie=n.n(ae),oe=Object(w.a)((function(e){return Object(x.a)({search:E()({maxWidth:"20rem"},e.breakpoints.down("xs"),{margin:0})})})),ce=function(e){var t=oe(e),n=e.searchTerm,a=e.updateSearchTerm;return r.createElement(ne.a,{className:t.search,id:"search-movie",variant:"standard",label:"Search Movie","aria-label":"Input text here to search movies by name",type:"text",placeholder:"Enter movie name",value:n,onChange:function(e){return a(e.target.value)},fullWidth:!0,margin:"normal",InputProps:{endAdornment:r.createElement(re.a,{position:"end"},r.createElement(ie.a,null))}})},le=function(){var e=r.useContext(g),t=r.useState(e.searchTerm),n=p()(t,2),a=n[0],i=n[1],o=function(e,t){var n=r.useState(e),a=p()(n,2),i=a[0],o=a[1];return r.useEffect((function(){var n=setTimeout((function(){o(e)}),t);return function(){clearTimeout(n)}}),[e,t]),i}(a,500);return r.useEffect((function(){e.setSearchTerm(a)}),[]),r.useEffect((function(){e.setSearchTerm(o)}),[o]),r.createElement(ce,{searchTerm:a,updateSearchTerm:i})},se=function(){return r.createElement(D,null,r.createElement(F,null,r.createElement(j,null),r.createElement(le,null)),r.createElement(C,null,r.createElement(te,null)))},ue=n(58),me=n.n(ue),fe=Object(w.a)((function(e){return Object(x.a)({movieRating:E()({alignSelf:"center",display:"flex",alignItems:"center"},e.breakpoints.down("xs"),{flexDirection:"row-reverse",margin:"".concat(e.spacing(1),"px 0"),"& .MuiTypography-h3":{fontSize:"1rem"}}),movieRatingIcon:E()({width:"3rem",height:"auto",marginLeft:e.spacing(1)},e.breakpoints.down("xs"),{width:"1.5rem",marginLeft:0,marginRitgh:e.spacing(1)})})})),de=function(e){var t=fe(e);return 0===e.rating?r.createElement(r.Fragment,null):r.createElement("div",{className:t.movieRating},r.createElement(k.a,{variant:"h3",component:"span"},e.rating),r.createElement(me.a,{className:t.movieRatingIcon}))},pe=Object(w.a)((function(e){var t;return Object(x.a)({movieGenres:(t={opacity:.8,fontSize:"1rem",marginTop:"0.5rem",marginBottom:"0.5rem"},E()(t,e.breakpoints.down("sm"),{fontSize:"0.85rem"}),E()(t,e.breakpoints.down("xs"),{fontSize:"0.8rem"}),t)})})),ge=function(e){var t=pe(e);return 0===e.genres.length?r.createElement(r.Fragment,null):r.createElement(k.a,{className:t.movieGenres,variant:"body2",component:"h3"},e.genres.join(", "))},he=Object(w.a)((function(e){var t;return Object(x.a)({subtitle:(t={fontSize:"2.25rem",opacity:.7,paddingBottom:"0.2rem"},E()(t,e.breakpoints.down("sm"),{fontSize:"1.2rem",marginLeft:"0.4rem",paddingBottom:"0.2rem"}),E()(t,e.breakpoints.down("xs"),{fontSize:"1rem",paddingBottom:"0.1rem"}),t)})})),ve=function(e){var t=he();return""===e.subtitle?r.createElement(r.Fragment,null):r.createElement(k.a,{variant:"h5",component:"h2",className:t.subtitle},"(".concat(e.subtitle,")"))},be=Object(w.a)((function(e){var t;return Object(x.a)({title:(t={fontSize:"3rem",marginRight:e.spacing(2)},E()(t,e.breakpoints.down("sm"),{fontSize:"2rem",margin:"1rem 0 0 0.2rem"}),E()(t,e.breakpoints.down("xs"),{fontSize:"1.5rem",margin:"1rem 0 0 0.2rem"}),t)})})),ye=function(e){var t=be();return""===e.title?r.createElement(r.Fragment,null):r.createElement(k.a,{variant:"h5",component:"h2",className:t.title},"".concat(e.title))},Ee=Object(w.a)((function(e){return Object(x.a)({movieHeader:E()({width:"100%",display:"flex",alignItems:"baseline",justifyContent:"space-between"},e.breakpoints.down("sm"),{marginBottom:e.spacing(1)}),movieInfoWrapper:E()({display:"flex",flexDirection:"column",alignItems:"flex-start"},e.breakpoints.down("sm"),{fontSize:"1rem"}),movieTitlesWrapper:E()({display:"flex",flexDirection:"row",alignItems:"flex-end"},e.breakpoints.down("sm"),{})})})),we=function(e){var t=Ee(),n=e.title,a=e.releaseYear,i=e.genres,o=e.rating;return r.createElement(F,null,r.createElement("div",{className:t.movieHeader},r.createElement("div",{className:t.movieInfoWrapper},r.createElement("div",{className:t.movieTitlesWrapper},r.createElement(ye,{title:n}),r.createElement(ve,{subtitle:a})),r.createElement(ge,{genres:i})),r.createElement(de,{rating:o})))},xe=function(e){var t=e.imgPath,n=e.alt;return r.createElement("img",{style:{flex:1,height:"auto",width:"100%"},src:t,alt:n})},ke=function(e){var t=e.title,n=e.youtubeId;return r.createElement("div",{className:"video",style:{position:"relative",paddingBottom:"56.25%",paddingTop:25,height:0}},r.createElement("iframe",{style:{position:"absolute",top:0,left:0,width:"100%",height:"100%",border:0},title:t,src:"https://www.youtube-nocookie.com/embed/".concat(n),frameBorder:"0",allow:"accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture",allowFullScreen:!0}))},Oe=Object(w.a)((function(e){return Object(x.a)({moviePoster:E()({flex:1,flexBasis:"28.365384615%"},e.breakpoints.down("sm"),{display:"none"}),onlyMoviePoster:E()({flex:0,flexGrow:.2,flexBasis:"28.365384615%"},e.breakpoints.down("xs"),{flexGrow:.5})})})),je=function(e){var t=Oe(e);return""===e.title?r.createElement(r.Fragment,null):e.isPosterSingleDisplayingMedia?r.createElement("div",{className:t.onlyMoviePoster},r.createElement(xe,{imgPath:e.posterUrl,alt:"".concat(e.title," poster")})):r.createElement("div",{className:t.moviePoster},r.createElement(xe,{imgPath:e.posterUrl,alt:"".concat(e.title," poster")}))},Se=Object(w.a)((function(e){return Object(x.a)({movieTrailer:E()({flex:1,flexBasis:"71.634615385%"},e.breakpoints.down("sm"),{flexBasis:"100%"})})})),Te=function(e){var t=Se(e);return""===e.title?r.createElement(r.Fragment,null):r.createElement("div",{className:t.movieTrailer},r.createElement(ke,{title:e.title,youtubeId:e.youtubeId}))},Ne=Object(w.a)((function(e){var t;return Object(x.a)({article:E()({maxWidth:"65rem",margin:"0 2rem",alignSelf:"center",flexGrow:1,display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"flex-start"},e.breakpoints.down("sm"),{margin:0}),articleMedia:{width:"100%",display:"flex",alignItems:"flex-start",justifyContent:"center"},articleContent:(t={padding:"5rem 4rem",textAlign:"left"},E()(t,e.breakpoints.down("sm"),{padding:"2rem 4rem 0"}),E()(t,e.breakpoints.down("xs"),{padding:"2rem 2rem 0"}),t),movieDescription:E()({},e.breakpoints.down("xs"),{fontSize:"1rem"}),link:{margin:e.spacing(6),padding:e.spacing(2),alignSelf:"center",justifySelf:"flex-end","&:-webkit-any-link":{color:e.palette.text.primary,"&:active":{color:e.palette.text.primary}}}})})),_e=function(e){var t=Ne(e),n=e.title,a=e.posterUrl,i=e.overview,o=e.videoDetails;return r.createElement(C,null,r.createElement("article",{className:t.article},(""!==a||""!==o.key)&&r.createElement("section",{className:t.articleMedia},r.createElement(je,{title:"".concat(n," poster"),posterUrl:a,isPosterSingleDisplayingMedia:""===a||""!==o.key}),r.createElement(Te,{title:"".concat(n," trailer"),youtubeId:o.key})),r.createElement("section",{className:t.articleContent},r.createElement(k.a,{variant:"body2",component:"p",className:t.movieDescription},i))),r.createElement(v.b,{className:t.link,to:"/"},r.createElement(k.a,{color:"textPrimary",variant:"h6"},"Return to main")))},Ie=function(e){var t=e.mediaDetails,n=e.videoDetails;return r.createElement(r.Fragment,null,r.createElement(we,{title:t.title,releaseYear:t.release_year.toString(),genres:t.genre_ids,rating:t.rating}),r.createElement(_e,{title:t.title,posterUrl:t.poster_path,overview:t.overview,videoDetails:n}))},Pe=function(e){var t=r.useState({id:-1,media_type:"",title:"",rating:0,overview:"",poster_path:"",release_year:-1,genre_ids:[""]}),n=p()(t,2),a=n[0],i=n[1],o=r.useState({id:"",key:"",videoUrl:"",width:-1}),c=p()(o,2),l=c[0],s=c[1],u=r.useState(!1),m=p()(u,2),d=m[0],g=m[1];return r.useEffect((function(){g(!0),f.getMediaById(e.mediaType,parseInt(e.id)).then((function(e){i(e)})).finally((function(){return g(!1)}))}),[]),r.useEffect((function(){g(!0),f.getTrailerUrlById(e.mediaType,parseInt(e.id)).then((function(e){s(e)})).finally((function(){return g(!1)}))}),[]),d?r.createElement(M,null):r.createElement(Ie,{mediaDetails:a,videoDetails:l})},Me=function(e){var t;return r.createElement(D,null,r.createElement(Pe,{mediaType:e.match.params.media,id:e.match.params.id,movieDetails:null===(t=e.location.state)||void 0===t?void 0:t.mediaDetails}))},De="/",ze="/list",Fe="/:media/:id",Ae=function(){return r.createElement(v.a,null,r.createElement(b.c,null,r.createElement(b.a,{exact:!0,path:[De,ze],component:se}),r.createElement(b.a,{path:Fe,component:Me})))},Be=n(59),Ge=Object(Be.a)({palette:{primary:{main:"#FFF",dark:"#23282E"},secondary:{main:"#505254"},info:{main:"#FFA800"},success:{main:"#00A356"},error:{main:"#E55353"},background:{default:"#000"},text:{primary:"#FFF",secondary:"#C4C4C4"}},typography:{fontFamily:["Roboto","Helvetica","Arial","sans-serif"].join(","),fontSize:16,fontWeightLight:"lighter",fontWeightRegular:"normal",fontWeightMedium:"bold",fontWeightBold:"bolder",h1:{fontFamily:["Oswald","Roboto","Helvetica","Arial","sans-serif"].join(","),fontSize:"5.125rem",fontWeight:"bold"},h2:{fontFamily:["Oswald","Roboto","Helvetica","Arial","sans-serif"].join(","),fontSize:"3.5rem",fontWeight:"bolder"},h3:{fontFamily:["Oswald","Roboto","Helvetica","Arial","sans-serif"].join(","),fontSize:"2.5rem",fontWeight:"normal"},h4:{fontFamily:["Oswald","Roboto","Helvetica","Arial","sans-serif"].join(","),fontSize:"2.125rem",fontWeight:"normal",textTransform:"uppercase"},h5:{fontFamily:["Oswald","Roboto","Helvetica","Arial","sans-serif"].join(",")},h6:{fontFamily:["Oswald","Roboto","Helvetica","Arial","sans-serif"].join(",")},body1:{fontSize:"1.2rem",fontWeight:"normal"},body2:{fontSize:"1.2rem",fontWeight:"normal"},button:{fontSize:"1rem",fontWeight:"normal",textTransform:"capitalize"}},breakpoints:{values:{xs:0,sm:450,md:840,lg:1280,xl:1920}},overrides:{MuiCssBaseline:{"@global":{"#root":{minHeight:"100vh",background:"linear-gradient(353deg, #23282E, #000) #000",display:"flex",flexDirection:"column",alignItems:"stretch",textAlign:"center"}}}}}),Ce=function(){return r.createElement(i.a,{theme:Ge},r.createElement(h,null,r.createElement(o.a,null,r.createElement(Ae,null))))};a.render(r.createElement(Ce,null),document.getElementById("root"))}});