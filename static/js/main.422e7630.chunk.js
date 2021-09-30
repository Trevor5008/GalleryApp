(this["webpackJsonpreact-gallery-app"]=this["webpackJsonpreact-gallery-app"]||[]).push([[0],{36:function(t,e,n){},62:function(t,e,n){"use strict";n.r(e);var r=n(1),c=n.n(r),a=n(29),s=n.n(a),o=(n(36),n(10)),i=n(11),h=n(13),l=n(12),j=n(8),p=n(2),d=n(15),u=n.n(d),b=n(0),f=function(t){Object(h.a)(n,t);var e=Object(l.a)(n);function n(){var t;Object(o.a)(this,n);for(var r=arguments.length,c=new Array(r),a=0;a<r;a++)c[a]=arguments[a];return(t=e.call.apply(e,[this].concat(c))).state={searchText:""},t.handleChange=function(e){var n=e.target.value;t.setState({searchText:n})},t.handleSubmit=function(e){e.preventDefault();var n,r=t.state.searchText;t.props.onSearch(r),n=t.props.location.pathname.includes("/search")?r:"search/".concat(r),t.props.history.push(n),e.currentTarget.reset()},t}return Object(i.a)(n,[{key:"componentDidUpdate",value:function(t){if(t.location.pathname!==this.props.location.pathname&&this.props.location.pathname.includes("/search")){var e=this.props.location.pathname.replace("/search/","");this.props.onSearch(e)}}},{key:"render",value:function(){return Object(b.jsxs)("form",{className:"search-form",onSubmit:this.handleSubmit,children:[Object(b.jsx)("input",{type:"search",name:"search",onChange:this.handleChange,placeholder:"Search",required:!0}),Object(b.jsx)("button",{type:"submit",className:"search-button",children:Object(b.jsxs)("svg",{fill:"#fff",height:"24",viewBox:"0 0 23 23",width:"24",xmlns:"http://www.w3.org/2000/svg",children:[Object(b.jsx)("path",{d:"M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"}),Object(b.jsx)("path",{d:"M0 0h24v24H0z",fill:"none"})]})})]})}}]),n}(r.Component),O=Object(p.g)(f),m=function(){return Object(b.jsx)("nav",{className:"main-nav",children:Object(b.jsxs)("ul",{children:[Object(b.jsx)("li",{children:Object(b.jsx)(j.c,{to:"/Cats",children:"Cats"})}),Object(b.jsx)("li",{children:Object(b.jsx)(j.c,{to:"/Dogs",children:"Dogs"})}),Object(b.jsx)("li",{children:Object(b.jsx)(j.c,{to:"/Computers",children:"Computers"})})]})})},g=function(t){var e=t.id,n=t.server,r=t.secret,c=t.title;return Object(b.jsx)("li",{children:Object(b.jsx)("img",{src:"https://live.staticflickr.com/".concat(n,"/").concat(e,"_").concat(r,".jpg"),alt:c})})},v=function(){return Object(b.jsxs)("div",{id:"no-results",children:[Object(b.jsx)("h3",{children:"No Results found"}),Object(b.jsx)("p",{children:"That search did not return any results, please try again"})]})},x=function(t){Object(h.a)(n,t);var e=Object(l.a)(n);function n(){return Object(o.a)(this,n),e.apply(this,arguments)}return Object(i.a)(n,[{key:"render",value:function(){var t,e=this.props.data,n=e.length>0;t=n?e.map((function(t,e){return Object(b.jsx)(g,{id:t.id,server:t.server,secret:t.secret,title:t.title},e.toString())})):Object(b.jsx)(v,{});var r=this.props.title.replace(/s$/,"");return Object(b.jsxs)("div",{className:"photo-container",children:[Object(b.jsx)("h2",{children:n?r+" Gifs":""}),Object(b.jsx)("ul",{children:t})]})}}]),n}(r.Component),y=x,C=function(){return Object(b.jsxs)("div",{id:"four_four",className:"main-nav",children:[Object(b.jsx)("img",{src:"https://st3.depositphotos.com/5545370/36826/v/600/depositphotos_368260244-stock-video-retro-cute-cartoon-glitch-screen.jpg",alt:"desert 404"}),Object(b.jsx)("div",{children:Object(b.jsx)(j.b,{to:"/",children:"Return Home"})})]})},k="f5716bff29535be6968166f216d14d9f",w={},S={},T={};["cats","dogs","computers"].forEach((function(t){return e=t,void u.a.get("https://www.flickr.com/services/rest",{params:{method:"flickr.photos.search",tags:e,api_key:k,per_page:24,format:"json",nojsoncallback:1}}).then((function(t){var n=t.data.photos.photo;"cats"===e?w=n:"dogs"===e?S=n:T=n})).catch((function(t){return console.log("There was an error fetching and retrieving data",t)}));var e}));var D=function(t){Object(h.a)(n,t);var e=Object(l.a)(n);function n(){var t;Object(o.a)(this,n);for(var r=arguments.length,c=new Array(r),a=0;a<r;a++)c[a]=arguments[a];return(t=e.call.apply(e,[this].concat(c))).state={images:[],title:"",loading:!0},t.performSearch=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"ducks";t.setState({loading:!0}),u.a.get("https://www.flickr.com/services/rest",{params:{method:"flickr.photos.search",tags:e,api_key:k,per_page:24,format:"json",nojsoncallback:1}}).then((function(n){var r=n.data.photos.photo;t.setState({images:r,title:e,loading:!1})})).catch((function(t){return console.log("There was an error fetching and retrieving data",t)}))},t}return Object(i.a)(n,[{key:"componentDidMount",value:function(){this.performSearch()}},{key:"render",value:function(){var t=this;return Object(b.jsx)(j.a,{basename:"/GalleryApp",children:Object(b.jsxs)("div",{className:"container",children:[Object(b.jsx)(O,{onSearch:this.performSearch}),Object(b.jsx)(m,{}),this.state.loading?Object(b.jsx)("h3",{id:"loading",children:" Loading... "}):Object(b.jsxs)(p.d,{children:[Object(b.jsx)(p.b,{exact:!0,path:"/",render:function(){return Object(b.jsx)(p.a,{to:"/Cats"})}}),Object(b.jsx)(p.b,{path:"/Cats",render:function(){return Object(b.jsx)(y,{title:"Cat",data:w})}}),Object(b.jsx)(p.b,{path:"/Dogs",render:function(){return Object(b.jsx)(y,{title:"Dog",data:S})}}),Object(b.jsx)(p.b,{path:"/Computers",render:function(){return Object(b.jsx)(y,{title:"Computer",data:T})}}),Object(b.jsx)(p.b,{path:"/search/:term",render:function(){return Object(b.jsx)(y,{title:t.state.title,data:t.state.images})}}),Object(b.jsx)(p.b,{path:"*",component:C})]})]})})}}]),n}(r.Component),N=D,_=function(t){t&&t instanceof Function&&n.e(3).then(n.bind(null,63)).then((function(e){var n=e.getCLS,r=e.getFID,c=e.getFCP,a=e.getLCP,s=e.getTTFB;n(t),r(t),c(t),a(t),s(t)}))};s.a.render(Object(b.jsx)(c.a.StrictMode,{children:Object(b.jsx)(N,{})}),document.getElementById("root")),_()}},[[62,1,2]]]);
//# sourceMappingURL=main.422e7630.chunk.js.map