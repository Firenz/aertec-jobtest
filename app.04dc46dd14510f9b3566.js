!function(e){function t(t){for(var r,o,c=t[0],l=t[1],s=t[2],m=0,f=[];m<c.length;m++)o=c[m],Object.prototype.hasOwnProperty.call(a,o)&&a[o]&&f.push(a[o][0]),a[o]=0;for(r in l)Object.prototype.hasOwnProperty.call(l,r)&&(e[r]=l[r]);for(u&&u(t);f.length;)f.shift()();return i.push.apply(i,s||[]),n()}function n(){for(var e,t=0;t<i.length;t++){for(var n=i[t],r=!0,c=1;c<n.length;c++){var l=n[c];0!==a[l]&&(r=!1)}r&&(i.splice(t--,1),e=o(o.s=n[0]))}return e}var r={},a={0:0},i=[];function o(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,o),n.l=!0,n.exports}o.m=e,o.c=r,o.d=function(e,t,n){o.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},o.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o.t=function(e,t){if(1&t&&(e=o(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(o.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)o.d(n,r,function(t){return e[t]}.bind(null,r));return n},o.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return o.d(t,"a",t),t},o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},o.p="/aertec-jobtest/";var c=window.webpackJsonp=window.webpackJsonp||[],l=c.push.bind(c);c.push=t,c=c.slice();for(var s=0;s<c.length;s++)t(c[s]);var u=l;i.push([67,1]),n()}({23:function(e,t,n){"use strict";(function(e){n.d(t,"f",(function(){return i})),n.d(t,"e",(function(){return o})),n.d(t,"g",(function(){return c})),n.d(t,"c",(function(){return l})),n.d(t,"b",(function(){return s})),n.d(t,"a",(function(){return u})),n.d(t,"d",(function(){return m}));var r="https://api.themoviedb.org/3",a=e.env.API_KEY,i="".concat(r,"/trending/all/day?api_key=").concat(a),o="".concat(r,"/genre/movie/list?api_key=").concat(a,"&language=").concat("en-US"),c="".concat(r,"/genre/tv/list?api_key=").concat(a,"&language=").concat("en-US"),l=function(e){return"".concat(r,"/search/multi?api_key=").concat(a,"&language=").concat("en-US","&query=").concat(e,"&page=1&include_adult=false")},s=function(e,t){return"".concat(r,"/").concat(e,"/").concat(t,"?api_key=").concat(a,"&language=").concat("en-US")},u=function(e){return null==e?"":"".concat("https://image.tmdb.org/t/p/w500").concat(e)},m=function(e,t){return"".concat(r,"/").concat(e,"/").concat(t,"/videos?api_key=").concat(a,"&language=").concat("en-US")}}).call(this,n(49))},42:function(e,t,n){"use strict";n.d(t,"h",(function(){return l})),n.d(t,"d",(function(){return s})),n.d(t,"e",(function(){return u})),n.d(t,"f",(function(){return m})),n.d(t,"b",(function(){return g})),n.d(t,"c",(function(){return h})),n.d(t,"a",(function(){return xe})),n.d(t,"g",(function(){return ke}));var r=n(53),a=n.n(r),i=n(54),o=n.n(i),c=n(23),l=new(function(){function e(){a()(this,e),this.movieGenreList=[],this.tvGenreList=[],this.currentDate=new Date,this.getMoviesGenre(),this.getTvGenre()}return o()(e,[{key:"getTrendingMedia",value:function(){var e=this;return fetch(c.f).then((function(t){return e.checkStatus(t)})).then((function(t){return e.parseJSON(t)})).then((function(t){return e.resolveMediaList(t)}))}},{key:"getMediaById",value:function(e,t){var n=this;return fetch(Object(c.b)(e,t)).then((function(e){return n.checkStatus(e)})).then((function(e){return n.parseJSON(e)})).then((function(e){return n.resolveMedia(e)}))}},{key:"getTrailerUrlById",value:function(e,t){var n=this;return fetch(Object(c.d)(e,t)).then((function(e){return n.checkStatus(e)})).then((function(e){return n.parseJSON(e)})).then((function(e){return n.resolveVideos(e)}))}},{key:"searchMediaByTerm",value:function(e){var t=this;return fetch(Object(c.c)(e)).then((function(e){return t.checkStatus(e)})).then((function(e){return t.parseJSON(e)})).then((function(e){return t.resolveMediaList(e)}))}},{key:"checkStatus",value:function(e){if(e.status>=200&&e.status<300)return Promise.resolve(e);throw new Error(e.statusText)}},{key:"getMoviesGenre",value:function(){var e=this;return fetch(c.e).then((function(t){return e.checkStatus(t)})).then((function(t){return e.parseJSON(t)})).then((function(t){return e.resolveGenres(t)})).then((function(t){return e.movieGenreList=t}))}},{key:"getTvGenre",value:function(){var e=this;return fetch(c.g).then((function(t){return e.checkStatus(t)})).then((function(t){return e.parseJSON(t)})).then((function(t){return e.resolveGenres(t)})).then((function(t){return e.tvGenreList=t}))}},{key:"parseJSON",value:function(e){return e.json()}},{key:"resolveMediaList",value:function(e){var t=this,n={results:[],total_results:0};return e.results.map((function(e){if("person"!==e.media_type&&!(new Date("".concat(e.release_date,"T00:00"))>t.currentDate))return n.results.push(t.parseMediaApiToMediaVm(e))})),n.total_results=n.results.length,Promise.resolve(n)}},{key:"resolveMedia",value:function(e){return Promise.resolve(this.parseMediaApiToMediaVm(e))}},{key:"resolveVideos",value:function(e){var t=e.results[0],n={id:(null==t?void 0:t.id)||"",width:(null==t?void 0:t.size)||0,key:(null==t?void 0:t.key)||"",videoUrl:null==t?"":"https://www.youtube.com/watch?v=".concat(t.key)};return Promise.resolve(n)}},{key:"resolveGenres",value:function(e){var t=[];return e.genres.map((function(e){var n={id:e.id,name:e.name};n.name&&t.push(n)})),Promise.resolve(t)}},{key:"getGenreNameById",value:function(e,t){var n,r;switch(e){case"tv":return(null===(n=this.tvGenreList.find((function(e){return e.id===t})))||void 0===n?void 0:n.name)||"";case"movie":return(null===(r=this.movieGenreList.find((function(e){return e.id===t})))||void 0===r?void 0:r.name)||"";default:return""}}},{key:"parseMediaApiToMediaVm",value:function(e){var t,n=this;return{id:e.id,media_type:e.media_type,title:e.title?e.title:e.name?e.name:e.original_name?e.original_name:"Title not found",rating:e.vote_average,overview:e.overview,poster_path:Object(c.a)(e.poster_path),release_year:e.release_date?parseInt(e.release_date.slice(0,4)):parseInt(e.first_air_date.slice(0,4)),genre_ids:(t=[],e.genres?e.genres.map((function(e){return e.name})):(e.genre_ids.map((function(r){n.getGenreNameById(e.media_type,r)&&t.push(n.getGenreNameById(e.media_type,r))})),t))}}}]),e}()),s=function(){return{id:-1,media_type:"",title:"",rating:0,overview:"",poster_path:"",release_year:-1,genre_ids:[""]}},u=function(){return{page:-1,results:[],total_results:-1,total_pages:-1}},m=function(){return{id:"",key:"",videoUrl:"",width:-1}},f=n(15),d=n.n(f),p=n(0),g=p.createContext({searchTerm:"if you are reading this, likely you forgot to add the provider on top of your app",setSearchTerm:function(){console.warn("if you are reading this, likely you forgot to add the provider on top of your app")}}),h=function(e){var t=p.useState(""),n=d()(t,2),r=n[0],a=n[1];return p.createElement(g.Provider,{value:{searchTerm:r,setSearchTerm:a}},e.children)},v=n(27),b=n(10),y=n(89),w=n(6),x=n.n(w),E=n(120),k=n(132),O=n(88),j=Object(E.a)((function(e){var t;return Object(k.a)({brandingTitle:(t={fontSize:"2rem"},x()(t,e.breakpoints.down(690),{fontSize:"1.5rem",margin:"1rem 0 0.2rem"}),x()(t,e.breakpoints.down(610),{fontSize:"1rem",margin:"1rem 0 0.2rem"}),t)})})),S=function(){var e=j();return p.createElement(O.a,{variant:"h6",component:"h1",className:e.brandingTitle},"Videoclub webapp")},_=n(58),T=n.n(_),I=Object(E.a)((function(e){return Object(k.a)({root:{padding:e.spacing(1),backgroundColor:e.palette.primary.dark,color:e.palette.text.secondary},footerLink:{color:e.palette.text.secondary,"&:hover":{opacity:.7}},footerIcon:{height:"1rem",width:"1.2rem",verticalAlign:"text-bottom"}})})),P=function(){var e=I();return p.createElement(O.a,{className:e.root,variant:"caption",component:"footer"},p.createElement("span",{role:"img","aria-label":"copyright"},"©")," 2020. Developed in React with ",p.createElement("span",{role:"img","aria-label":"love"},p.createElement(T.a,{className:e.footerIcon}))," by ",p.createElement("a",{className:e.footerLink,href:"mailto:alicia.guardenoalbertos@gmail.com"},"Alicia Guardeño"))},N=n(124),M=Object(E.a)((function(e){return Object(k.a)({circularProgress:{alignSelf:"center",margin:"auto 0"}})})),D=function(){var e=M();return p.createElement(N.a,{className:e.circularProgress,size:"10rem"})},z=function(e){return p.createElement(y.a,null,e.children,p.createElement(P,null))},A=Object(E.a)((function(e){return Object(k.a)({root:{textAlign:"left",backgroundColor:e.palette.background.default,color:e.palette.text.primary,padding:"0 1.2rem"},center:x()({width:"100%",maxWidth:e.spacing(150),margin:"0 auto",padding:e.spacing(1.25),display:"flex",flexDirection:"row",alignItems:"baseline",justifyContent:"space-between"},e.breakpoints.down("xs"),{flexDirection:"column",justifyContent:"flex-start",alignItems:"center",padding:"0.2rem"})})})),B=function(e){var t=A(e);return p.createElement("header",{className:t.root},p.createElement("div",{className:t.center},e.children))};function F(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function G(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?F(Object(n),!0).forEach((function(t){x()(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):F(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var C=Object(E.a)((function(e){return Object(k.a)({root:G(G({width:"100%",maxWidth:e.spacing(160),margin:"0 auto",padding:"0 ".concat(e.spacing(4),"px"),flexGrow:1,display:"flex",flexDirection:"column",color:e.palette.text.primary},e.typography.body1),{},x()({},e.breakpoints.down("sm"),{margin:0,padding:0}))})})),R=function(e){var t=C(e);return p.createElement("main",{className:t.root},e.children)},W=(n(59),n(125),n(126),n(131),n(127),n(128),n(83),Object(E.a)((function(e){return Object(k.a)({gridItem:x()({},e.breakpoints.down("sm"),{paddingLeft:"0 !important",paddingRight:"0 !important",margin:"1rem 0","&:first-child":{marginTop:0},"&:last-child":{marginBottom:0}}),card:x()({height:"60vh",border:"".concat(e.palette.primary.dark," solid 0.5rem")},e.breakpoints.down("sm"),{borderLeft:"none",borderRight:"none"}),actionArea:{width:"100%",height:"100%",position:"relative"},media:{height:"100%"},content:{width:"100%",height:"100%",position:"absolute",zIndex:1,bottom:0,display:"flex",flexDirection:"row",alignItems:"flex-end",justifyContent:"flex-start",color:e.palette.text.primary,boxShadow:"inset 0px -101px 40px -41px rgba(0,0,0,0.75)"},rating:{width:60,height:60,marginRight:e.spacing(2),paddingTop:"0.8rem",backgroundColor:e.palette.primary.dark,textAlign:"center"},info:{textAlign:"left",textOverflow:"ellipsis",whiteSpace:"nowrap",overflow:"hidden"},title:{margin:0,textOverflow:"ellipsis",whiteSpace:"nowrap",overflow:"hidden"},subtitle:{minHeight:"27px",color:e.palette.text.secondary,textOverflow:"ellipsis",whiteSpace:"nowrap",overflow:"hidden"}})})),Object(E.a)((function(e){return Object(k.a)({header:{opacity:.8},icon:{verticalAlign:"bottom",marginRight:"0.5rem"}})})),Object(E.a)((function(e){return Object(k.a)({grid:x()({alignSelf:"center",width:"100% !important",margin:"2rem 0 6rem",justifyContent:"center"},e.breakpoints.down("md"),{justifyContent:"center !important"})})})),n(130)),L=n(129),U=n(60),H=n.n(U),J=Object(E.a)((function(e){return Object(k.a)({search:x()({maxWidth:"20rem"},e.breakpoints.down("xs"),{margin:0})})})),V=function(e){var t=J(e),n=e.searchTerm,r=e.updateSearchTerm;return p.createElement(W.a,{className:t.search,id:"search-movie",variant:"standard",label:"Search Movie","aria-label":"Input text here to search movies by name",type:"text",placeholder:"Enter movie name",value:n,onChange:function(e){return r(e.target.value)},fullWidth:!0,margin:"normal",InputProps:{endAdornment:p.createElement(L.a,{position:"end"},p.createElement(H.a,null))}})},Y=function(){var e=p.useContext(g),t=p.useState(e.searchTerm),n=d()(t,2),r=n[0],a=n[1],i=function(e,t){var n=p.useState(e),r=d()(n,2),a=r[0],i=r[1];return p.useEffect((function(){var n=setTimeout((function(){i(e)}),t);return function(){clearTimeout(n)}}),[e,t]),a}(r,500);return p.useEffect((function(){e.setSearchTerm(r)}),[]),p.useEffect((function(){e.setSearchTerm(i)}),[i]),p.createElement(V,{searchTerm:r,updateSearchTerm:a})},K=function(){return p.createElement(z,null,p.createElement(B,null,p.createElement(S,null),p.createElement(Y,null)),p.createElement(R,null,p.createElement("h1",null,"Testing without API_KEY")))},q=n(61),Q=n.n(q),X=Object(E.a)((function(e){return Object(k.a)({movieRating:x()({alignSelf:"center",display:"flex",alignItems:"center"},e.breakpoints.down("xs"),{flexDirection:"row-reverse",margin:"".concat(e.spacing(1),"px 0"),"& .MuiTypography-h3":{fontSize:"1rem"}}),movieRatingIcon:x()({width:"3rem",height:"auto",marginLeft:e.spacing(1)},e.breakpoints.down("xs"),{width:"1.5rem",marginLeft:0,marginRitgh:e.spacing(1)})})})),Z=function(e){var t=X(e);return 0===e.rating?p.createElement(p.Fragment,null):p.createElement("div",{className:t.movieRating},p.createElement(O.a,{variant:"h3",component:"span"},e.rating),p.createElement(Q.a,{className:t.movieRatingIcon}))},$=Object(E.a)((function(e){var t;return Object(k.a)({movieGenres:(t={opacity:.8,fontSize:"1rem",marginTop:"0.5rem",marginBottom:"0.5rem"},x()(t,e.breakpoints.down("sm"),{fontSize:"0.85rem"}),x()(t,e.breakpoints.down("xs"),{fontSize:"0.8rem"}),t)})})),ee=function(e){var t=$(e);return 0===e.genres.length?p.createElement(p.Fragment,null):p.createElement(O.a,{className:t.movieGenres,variant:"body2",component:"h3"},e.genres.join(", "))},te=Object(E.a)((function(e){var t;return Object(k.a)({subtitle:(t={fontSize:"2.25rem",opacity:.7,paddingBottom:"0.2rem"},x()(t,e.breakpoints.down("sm"),{fontSize:"1.2rem",marginLeft:"0.4rem",paddingBottom:"0.2rem"}),x()(t,e.breakpoints.down("xs"),{fontSize:"1rem",paddingBottom:"0.1rem"}),t)})})),ne=function(e){var t=te();return""===e.subtitle?p.createElement(p.Fragment,null):p.createElement(O.a,{variant:"h5",component:"h2",className:t.subtitle},"(".concat(e.subtitle,")"))},re=Object(E.a)((function(e){var t;return Object(k.a)({title:(t={fontSize:"3rem",marginRight:e.spacing(2)},x()(t,e.breakpoints.down("sm"),{fontSize:"2rem",margin:"1rem 0 0 0.2rem"}),x()(t,e.breakpoints.down("xs"),{fontSize:"1.5rem",margin:"1rem 0 0 0.2rem"}),t)})})),ae=function(e){var t=re();return""===e.title?p.createElement(p.Fragment,null):p.createElement(O.a,{variant:"h5",component:"h2",className:t.title},"".concat(e.title))},ie=Object(E.a)((function(e){return Object(k.a)({movieHeader:x()({width:"100%",display:"flex",alignItems:"baseline",justifyContent:"space-between"},e.breakpoints.down("sm"),{marginBottom:e.spacing(1)}),movieInfoWrapper:x()({display:"flex",flexDirection:"column",alignItems:"flex-start"},e.breakpoints.down("sm"),{fontSize:"1rem"}),movieTitlesWrapper:x()({display:"flex",flexDirection:"row",alignItems:"flex-end"},e.breakpoints.down("sm"),{})})})),oe=function(e){var t=ie(),n=e.title,r=e.releaseYear,a=e.genres,i=e.rating;return p.createElement(B,null,p.createElement("div",{className:t.movieHeader},p.createElement("div",{className:t.movieInfoWrapper},p.createElement("div",{className:t.movieTitlesWrapper},p.createElement(ae,{title:n}),p.createElement(ne,{subtitle:r})),p.createElement(ee,{genres:a})),p.createElement(Z,{rating:i})))},ce=function(e){var t=e.imgPath,n=e.alt;return p.createElement("img",{style:{flex:1,height:"auto",width:"100%"},src:t,alt:n})},le=function(e){var t=e.title,n=e.youtubeId;return p.createElement("div",{className:"video",style:{position:"relative",paddingBottom:"56.25%",paddingTop:25,height:0}},p.createElement("iframe",{style:{position:"absolute",top:0,left:0,width:"100%",height:"100%",border:0},title:t,src:"https://www.youtube-nocookie.com/embed/".concat(n),frameBorder:"0",allow:"accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture",allowFullScreen:!0}))},se=Object(E.a)((function(e){return Object(k.a)({moviePoster:x()({flex:1,flexBasis:"28.365384615%"},e.breakpoints.down("sm"),{display:"none"}),onlyMoviePoster:x()({flex:0,flexGrow:.2,flexBasis:"28.365384615%"},e.breakpoints.down("xs"),{flexGrow:.5})})})),ue=function(e){var t=se(e);return""===e.title?p.createElement(p.Fragment,null):e.isPosterSingleDisplayingMedia?p.createElement("div",{className:t.onlyMoviePoster},p.createElement(ce,{imgPath:e.posterUrl,alt:"".concat(e.title," poster")})):p.createElement("div",{className:t.moviePoster},p.createElement(ce,{imgPath:e.posterUrl,alt:"".concat(e.title," poster")}))},me=Object(E.a)((function(e){return Object(k.a)({movieTrailer:x()({flex:1,flexBasis:"71.634615385%"},e.breakpoints.down("sm"),{flexBasis:"100%"})})})),fe=function(e){var t=me(e);return""===e.title?p.createElement(p.Fragment,null):p.createElement("div",{className:t.movieTrailer},p.createElement(le,{title:e.title,youtubeId:e.youtubeId}))},de=Object(E.a)((function(e){var t;return Object(k.a)({article:x()({maxWidth:"65rem",margin:"0 2rem",alignSelf:"center",flexGrow:1,display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"flex-start"},e.breakpoints.down("sm"),{margin:0}),articleMedia:{width:"100%",display:"flex",alignItems:"flex-start",justifyContent:"center"},articleContent:(t={padding:"5rem 4rem",textAlign:"left"},x()(t,e.breakpoints.down("sm"),{padding:"2rem 4rem 0"}),x()(t,e.breakpoints.down("xs"),{padding:"2rem 2rem 0"}),t),movieDescription:x()({},e.breakpoints.down("xs"),{fontSize:"1rem"}),link:{margin:e.spacing(6),padding:e.spacing(2),alignSelf:"center",justifySelf:"flex-end","&:-webkit-any-link":{color:e.palette.text.primary,"&:active":{color:e.palette.text.primary}}}})})),pe=function(e){var t=de(e),n=e.title,r=e.posterUrl,a=e.overview,i=e.videoDetails;return p.createElement(R,null,p.createElement("article",{className:t.article},(""!==r||""!==i.key)&&p.createElement("section",{className:t.articleMedia},p.createElement(ue,{title:"".concat(n," poster"),posterUrl:r,isPosterSingleDisplayingMedia:""===r||""!==i.key}),p.createElement(fe,{title:"".concat(n," trailer"),youtubeId:i.key})),p.createElement("section",{className:t.articleContent},p.createElement(O.a,{variant:"body2",component:"p",className:t.movieDescription},a))),p.createElement(v.b,{className:t.link,to:"/"},p.createElement(O.a,{color:"textPrimary",variant:"h6"},"Return to main")))},ge=function(e){var t=e.mediaDetails,n=e.videoDetails;return p.createElement(p.Fragment,null,p.createElement(oe,{title:t.title,releaseYear:t.release_year.toString(),genres:t.genre_ids,rating:t.rating}),p.createElement(pe,{title:t.title,posterUrl:t.poster_path,overview:t.overview,videoDetails:n}))},he=function(e){var t=p.useState(s()),n=d()(t,2),r=n[0],a=n[1],i=p.useState(m()),o=d()(i,2),c=o[0],u=o[1],f=p.useState(!1),g=d()(f,2),h=g[0],v=g[1];return p.useEffect((function(){v(!0),l.getMediaById(e.mediaType,parseInt(e.id)).then((function(e){a(e)})).finally((function(){return v(!1)}))}),[]),p.useEffect((function(){v(!0),l.getTrailerUrlById(e.mediaType,parseInt(e.id)).then((function(e){u(e)})).finally((function(){return v(!1)}))}),[]),h?p.createElement(D,null):p.createElement(ge,{mediaDetails:r,videoDetails:c})},ve=function(e){var t;return p.createElement(z,null,p.createElement(he,{mediaType:e.match.params.media,id:e.match.params.id,movieDetails:null===(t=e.location.state)||void 0===t?void 0:t.mediaDetails}))},be="/",ye="/list",we="/:media/:id",xe=function(){return p.createElement(v.a,null,p.createElement(b.c,null,p.createElement(b.a,{exact:!0,path:[be,ye],component:K}),p.createElement(b.a,{path:we,component:ve})))},Ee=n(62),ke=Object(Ee.a)({palette:{primary:{main:"#FFF",dark:"#23282E"},secondary:{main:"#505254"},info:{main:"#FFA800"},success:{main:"#00A356"},error:{main:"#E55353"},background:{default:"#000"},text:{primary:"#FFF",secondary:"#C4C4C4"}},typography:{fontFamily:["Roboto","Helvetica","Arial","sans-serif"].join(","),fontSize:16,fontWeightLight:"lighter",fontWeightRegular:"normal",fontWeightMedium:"bold",fontWeightBold:"bolder",h1:{fontFamily:["Oswald","Roboto","Helvetica","Arial","sans-serif"].join(","),fontSize:"5.125rem",fontWeight:"bold"},h2:{fontFamily:["Oswald","Roboto","Helvetica","Arial","sans-serif"].join(","),fontSize:"3.5rem",fontWeight:"bolder"},h3:{fontFamily:["Oswald","Roboto","Helvetica","Arial","sans-serif"].join(","),fontSize:"2.5rem",fontWeight:"normal"},h4:{fontFamily:["Oswald","Roboto","Helvetica","Arial","sans-serif"].join(","),fontSize:"2.125rem",fontWeight:"normal",textTransform:"uppercase"},h5:{fontFamily:["Oswald","Roboto","Helvetica","Arial","sans-serif"].join(",")},h6:{fontFamily:["Oswald","Roboto","Helvetica","Arial","sans-serif"].join(",")},body1:{fontSize:"1.2rem",fontWeight:"normal"},body2:{fontSize:"1.2rem",fontWeight:"normal"},button:{fontSize:"1rem",fontWeight:"normal",textTransform:"capitalize"}},breakpoints:{values:{xs:0,sm:450,md:840,lg:1280,xl:1920}},overrides:{MuiCssBaseline:{"@global":{"#root":{minHeight:"100vh",background:"linear-gradient(353deg, #23282E, #000) #000",display:"flex",flexDirection:"column",alignItems:"stretch",textAlign:"center"}}}}})},52:function(e,t,n){"use strict";(function(e){n.d(t,"a",(function(){return c}));var r=n(0),a=n(91),i=n(89),o=n(42),c=function(){return console.log(e.env.API_KEY),r.createElement(a.a,{theme:o.g},r.createElement(o.c,null,r.createElement(i.a,null,r.createElement(o.a,null))))}}).call(this,n(49))},67:function(e,t,n){n(68),e.exports=n(69)},69:function(e,t,n){"use strict";n.r(t);var r=n(0),a=n(8),i=n(52);a.render(r.createElement(i.a,null),document.getElementById("root"))},83:function(e,t,n){e.exports=n.p+"./media/not-found-image.302ec86419e42f1e5081608274164a96.jpg"}});