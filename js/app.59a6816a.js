(function(e){function t(t){for(var a,s,u=t[0],o=t[1],i=t[2],d=0,l=[];d<u.length;d++)s=u[d],Object.prototype.hasOwnProperty.call(r,s)&&r[s]&&l.push(r[s][0]),r[s]=0;for(a in o)Object.prototype.hasOwnProperty.call(o,a)&&(e[a]=o[a]);m&&m(t);while(l.length)l.shift()();return c.push.apply(c,i||[]),n()}function n(){for(var e,t=0;t<c.length;t++){for(var n=c[t],a=!0,s=1;s<n.length;s++){var u=n[s];0!==r[u]&&(a=!1)}a&&(c.splice(t--,1),e=o(o.s=n[0]))}return e}var a={},s={app:0},r={app:0},c=[];function u(e){return o.p+"js/"+({}[e]||e)+"."+{"chunk-0426a614":"e2c39ee3","chunk-085b01da":"57b18b53","chunk-2341da1e":"0bcfdc79","chunk-2beca5a3":"3189229f","chunk-2d21a3d2":"4367f96a","chunk-2d22d746":"8e5cff31","chunk-60778778":"074b2e81","chunk-6507fd24":"29fd13e5","chunk-6657b382":"449b701a","chunk-7d600d14":"80babfcd","chunk-b72ca7ac":"88e9ea35","chunk-e66d3452":"ea65902a","chunk-252a090a":"4cb0240d","chunk-6c0851c2":"27707e72","chunk-7fd6283b":"ef0d56c3","chunk-71758126":"8c8e5f33","chunk-5450fb8e":"fb406bc5","chunk-17274d24":"4d86d1f7"}[e]+".js"}function o(t){if(a[t])return a[t].exports;var n=a[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,o),n.l=!0,n.exports}o.e=function(e){var t=[],n={"chunk-0426a614":1,"chunk-085b01da":1,"chunk-2341da1e":1,"chunk-2beca5a3":1,"chunk-60778778":1,"chunk-6507fd24":1,"chunk-6657b382":1,"chunk-7d600d14":1,"chunk-b72ca7ac":1,"chunk-e66d3452":1,"chunk-252a090a":1,"chunk-6c0851c2":1,"chunk-7fd6283b":1,"chunk-71758126":1,"chunk-5450fb8e":1};s[e]?t.push(s[e]):0!==s[e]&&n[e]&&t.push(s[e]=new Promise((function(t,n){for(var a="css/"+({}[e]||e)+"."+{"chunk-0426a614":"4955bf12","chunk-085b01da":"335d0748","chunk-2341da1e":"0e727315","chunk-2beca5a3":"ab728523","chunk-2d21a3d2":"31d6cfe0","chunk-2d22d746":"31d6cfe0","chunk-60778778":"8adff86e","chunk-6507fd24":"7afff184","chunk-6657b382":"740d8e45","chunk-7d600d14":"053d0eec","chunk-b72ca7ac":"740d8e45","chunk-e66d3452":"335d0748","chunk-252a090a":"2f9658fc","chunk-6c0851c2":"3c7cd25f","chunk-7fd6283b":"4e45686b","chunk-71758126":"f285260b","chunk-5450fb8e":"f5152186","chunk-17274d24":"31d6cfe0"}[e]+".css",r=o.p+a,c=document.getElementsByTagName("link"),u=0;u<c.length;u++){var i=c[u],d=i.getAttribute("data-href")||i.getAttribute("href");if("stylesheet"===i.rel&&(d===a||d===r))return t()}var l=document.getElementsByTagName("style");for(u=0;u<l.length;u++){i=l[u],d=i.getAttribute("data-href");if(d===a||d===r)return t()}var m=document.createElement("link");m.rel="stylesheet",m.type="text/css",m.onload=t,m.onerror=function(t){var a=t&&t.target&&t.target.src||r,c=new Error("Loading CSS chunk "+e+" failed.\n("+a+")");c.code="CSS_CHUNK_LOAD_FAILED",c.request=a,delete s[e],m.parentNode.removeChild(m),n(c)},m.href=r;var f=document.getElementsByTagName("head")[0];f.appendChild(m)})).then((function(){s[e]=0})));var a=r[e];if(0!==a)if(a)t.push(a[2]);else{var c=new Promise((function(t,n){a=r[e]=[t,n]}));t.push(a[2]=c);var i,d=document.createElement("script");d.charset="utf-8",d.timeout=120,o.nc&&d.setAttribute("nonce",o.nc),d.src=u(e);var l=new Error;i=function(t){d.onerror=d.onload=null,clearTimeout(m);var n=r[e];if(0!==n){if(n){var a=t&&("load"===t.type?"missing":t.type),s=t&&t.target&&t.target.src;l.message="Loading chunk "+e+" failed.\n("+a+": "+s+")",l.name="ChunkLoadError",l.type=a,l.request=s,n[1](l)}r[e]=void 0}};var m=setTimeout((function(){i({type:"timeout",target:d})}),12e4);d.onerror=d.onload=i,document.head.appendChild(d)}return Promise.all(t)},o.m=e,o.c=a,o.d=function(e,t,n){o.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},o.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o.t=function(e,t){if(1&t&&(e=o(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(o.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var a in e)o.d(n,a,function(t){return e[t]}.bind(null,a));return n},o.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return o.d(t,"a",t),t},o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},o.p="/",o.oe=function(e){throw console.error(e),e};var i=window["webpackJsonp"]=window["webpackJsonp"]||[],d=i.push.bind(i);i.push=t,i=i.slice();for(var l=0;l<i.length;l++)t(i[l]);var m=d;c.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"0405":function(e,t,n){},"53a2":function(e,t,n){"use strict";var a=n("0405"),s=n.n(a);s.a},"56d7":function(e,t,n){"use strict";n.r(t);n("d3b7"),n("e260"),n("e6cf"),n("cca6"),n("a79d");var a=n("2b0e"),s=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"app"}},[n("Navbar"),n("div",{staticClass:"content-area"},[n("div",{staticClass:"content"},[n("router-view",{staticClass:"content__main-box"}),this.$store.state.showExtraContentBox?n("div",{staticClass:"content__extra-box"},[e._m(0),n("div",{staticClass:"content__block",staticStyle:{padding:"50px 30px","text-align":"center"}},[e._v(" Место для вашей рекламы ")])]):e._e()],1)]),n("Notifications")],1)},r=[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"content__block"},[e._v(" Сайт находится в разработке."),n("br"),n("br"),e._v("Данные для связи: @lleballex - telegram ")])}],c={name:"App",components:{Navbar:function(){return n.e("chunk-0426a614").then(n.bind(null,"d178"))},Notifications:function(){return n.e("chunk-2beca5a3").then(n.bind(null,"e985"))}}},u=c,o=n("2877"),i=Object(o["a"])(u,s,r,!1,null,null,null),d=i.exports,l=n("2f62"),m=(n("b0c0"),n("b64b"),n("96cf"),n("1da1")),f=n("bc3a"),h=n.n(f),p={state:{isAuthenticated:!1,authToken:null,id:null,username:null,email:null,name:null,about:null,image:null,loadedUser:null},mutations:{setAuthToken:function(e,t){e.authToken=t,e.isAuthenticated=!0,localStorage.setItem("auth_token",t),h.a.defaults.headers.common["auth-token"]=t},setUserInfo:function(e,t){e.username=t.username,e.id=t.id,e.email=t.email,e.name=t.name,e.about=t.about,e.image=t.image},logout:function(e){e.authToken=null,e.isAuthenticated=!1,e.username=null,e.id=null,e.email=null,e.name=null,e.about=null,e.image=null,localStorage.removeItem("auth_token"),delete h.a.defaults.headers.common["auth-token"]},setLoadedUser:function(e,t){var n=t.username,a=t.image,s=t.about;e.loadedUser={username:n,image:a,about:s}}},actions:{checkAuthToken:function(e,t){return Object(m["a"])(regeneratorRuntime.mark((function n(){var a,s;return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return a=e.commit,s=t.token,n.abrupt("return",h.a.post("api/account/token/get_user/",{token:s}).then((function(e){return a("setAuthToken",s),a("setUserInfo",e.data),{success:!0}})).catch((function(e){return 400!=e.status||"Token is invalid or expired"!=e.detail&&"Token is invalid"!=e.detail?{success:!1,message:e.message}:{success:!1,message:"Твой токен доступа истек. Перезайди в аккаунт"}})));case 3:case"end":return n.stop()}}),n)})))()},getAuthToken:function(e,t){return Object(m["a"])(regeneratorRuntime.mark((function n(){var a,s,r;return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return a=e.commit,s=t.username,r=t.password,n.abrupt("return",h.a.post("api/account/token/get_auth_token/",{username:s,password:r}).then((function(e){return a("setAuthToken",e.data.token),a("setUserInfo",e.data.user),{success:!0,message:"Рад тебя видеть, ".concat(e.data.user.username)}})).catch((function(e){return 400==e.status&&"Username or password are invalid"==e.detail?{success:!1,message:"Кажется, ошибка в введенный данных"}:{success:!1,message:e.message}})));case 3:case"end":return n.stop()}}),n)})))()},userRegistration:function(e,t){return Object(m["a"])(regeneratorRuntime.mark((function e(){var n,a,s;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return n=t.username,a=t.email,s=t.password,e.abrupt("return",h.a.post("api/account/users/",{username:n,email:a,password:s}).then((function(){return{success:!0,message:"Поздравляю со вступлением в нашу команду. \n\t\t\t\t\t\t  Теперь ты может войти в аккаунт"}})).catch((function(e){if(400!=e.status)return{success:!1,message:e.message};switch(e.data[Object.keys(e.data)[0]][0]){case"Enter a valid email address.":var t="Лучше ввести корректный email";break;case"The password is too similar to the username.":t="Твой пароль уж очень напоминает введенный логин";break;case"The password is too similar to the email.":t="Твой пароль уж очень напоминает введеный email";break;case"This password is too short. It must contain at least 8 characters.":t="Посчитай, в пароле должно быть минимум 8 символов";break;case"This password is too common.":t="Даже я догодался бы до такого простого пароля";break;case"This password is entirely numeric.":t="Пароль только из цифр - плохой пароль";break;case"user with this username already exists.":t="Я уже знаю пользователя с таким логином. Не ты ли это?";break;case"user with this email already exists.":t="Это точно твой email? У нас уже есть один с такой почтой";break;default:t=e.data[Object.keys(e.data)[0]][0]}return{success:!1,message:t}})));case 2:case"end":return e.stop()}}),e)})))()},getUser:function(e,t){return Object(m["a"])(regeneratorRuntime.mark((function e(){var n;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return n=t.username,e.abrupt("return",h.a.get("api/account/users/".concat(n,"/")).then((function(e){return{success:!0,user:e.data}})).catch((function(){return{success:!1}})));case 2:case"end":return e.stop()}}),e)})))()},getUserOverview:function(e,t){return Object(m["a"])(regeneratorRuntime.mark((function e(){var n;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return n=t.username,e.abrupt("return",h.a.get("api/account/users/".concat(n,"/overview/")).then((function(e){return{success:!0,posts:e.data.posts}})).catch((function(e){return 404==e.status&&"Object not found"==e.detail?{success:!1,message:"Прости, но я не смог найти такого пользователя"}:{success:!1,message:e.message}})));case 2:case"end":return e.stop()}}),e)})))()},getUserPosts:function(e,t){return Object(m["a"])(regeneratorRuntime.mark((function e(){var n;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return n=t.username,e.abrupt("return",h.a.get("api/account/users/".concat(n,"/posts/")).then((function(e){return{success:!0,posts:e.data}})).catch((function(e){return 404==e.status&&"Object not found"==e.detail?{success:!1,message:"Прости, но я не смог найти такого пользователя"}:{success:!1,message:e.message}})));case 2:case"end":return e.stop()}}),e)})))()},updateUser:function(e,t){return Object(m["a"])(regeneratorRuntime.mark((function e(){var n,a,s,r,c,u,o,i,d;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return n=t.id,a=void 0===n?null:n,s=t.username,r=t.email,c=t.name,u=t.about,o=t.image,i={username:s,email:r,name:c,about:u,image:o},a?(i["id"]=a,d="api/account/users/".concat(a,"/")):d="api/account/users/".concat(s,"/"),e.abrupt("return",h.a.put(d,i).then((function(e){return{success:!0,message:"Готово! Твой профиль успешно обновлен",user:e.data}})).catch((function(e){if(400!=e.status)return{success:!1,message:e.message};switch(e.data[Object.keys(e.data)[0]][0]){case"Enter a valid email address.":var t="Лучше ввести корректный email";break;case"user with this username already exists.":t="Я уже знаю пользователя с таким логином";break;case"user with this email already exists.":t="Это точно твой email? У нас уже есть один с такой почтой";break;default:t=e.data[Object.keys(e.data)[0]][0]}return{success:!1,message:t}})));case 4:case"end":return e.stop()}}),e)})))()}},getters:{authToken:function(e){return e.authToken},isUserAuthenticated:function(e){return e.isAuthenticated},username:function(e){return e.username},userId:function(e){return e.id},userEmail:function(e){return e.email},userName:function(e){return e.name},userAbout:function(e){return e.about},userImage:function(e){return e.image},loadedUser:function(e){return e.loadedUser}}},g={state:{posts:null},mutations:{updatePosts:function(e,t){e.posts=t}},actions:{getPosts:function(){return h.a.get("api/posts/").then((function(e){return{success:!0,posts:e.data}})).catch((function(e){return{success:!1,message:e.message}}))},getPost:function(e,t){var n=t.id;return h.a.get("api/posts/".concat(n,"/")).then((function(e){return{success:!0,post:e.data}})).catch((function(e){return 404==e.status&&"Object not found"==e.detail?{success:!1,message:"Кажется, такого поста не существует"}:{success:!1,message:e.message}}))},createPost:function(e,t){var n=t.userId,a=t.title,s=t.content;return h.a.post("api/posts/",{user:n,title:a,content:s}).then((function(e){return{success:!0,message:"Готово! Посмотри теперь на свой пост",id:e.data.id}})).catch((function(e){return{success:!1,message:e.message}}))},deletePost:function(e,t){var n=t.id;return h.a.delete("api/posts/".concat(n,"/")).then((function(){return{success:!0,message:"Твой пост успешно удален!"}})).catch((function(e){return{success:!1,message:e.message}}))},dropPostRating:function(e,t){var n=t.id;return h.a.post("api/posts/".concat(n,"/drop_rating/")).then((function(e){return{success:!0,message:"Надеюсь, твоя оценка заслужена",rating:e.data.rating}})).catch((function(){return{success:!1}}))},raisePostRating:function(e,t){var n=t.id;return h.a.post("api/posts/".concat(n,"/raise_rating/")).then((function(e){return{success:!0,message:"Очень рад, что тебе понравился этот пост",rating:e.data.rating}})).catch((function(){return{success:!1}}))},restorePostRating:function(e,t){var n=t.id;return h.a.post("api/posts/".concat(n,"/restore_rating/")).then((function(e){return{success:!0,rating:e.data.rating}})).catch((function(){return{success:!1}}))},addPostToBookmarks:function(e,t){var n=t.id;return h.a.post("api/posts/".concat(n,"/add_to_bookmarks/")).then((function(e){return{success:!0,message:"Еще один пост в твоих закладках!",bookmarks:e.data.bookmarks}})).catch((function(){return{success:!1}}))},removePostFromBookmarks:function(e,t){var n=t.id;return h.a.post("api/posts/".concat(n,"/remove_from_bookmarks/")).then((function(e){return{success:!0,bookmarks:e.data.bookmarks}})).catch((function(){return{success:!1}}))},getComments:function(e,t){var n=t.post_id;return h.a.get("api/posts/".concat(n,"/comments/")).then((function(e){return{success:!0,comments:e.data}})).catch((function(e){return{success:!1,message:e.message}}))}},getters:{posts:function(e){return e.posts}}},b={state:{show:!1,type:null,message:null},mutations:{showNotification:function(e,t){e.show?(e.show=!1,setTimeout((function(){e.type=t.type,e.message=t.message,e.show=!0}),500)):(e.type=t.type,e.message=t.message,e.show=!0)},closeNotification:function(e){e.type=null,e.message=null,e.show=!1}},getters:{showNotification:function(e){return e.show},notificationType:function(e){return e.type},notificationMessage:function(e){return e.message}}};a["a"].use(l["a"]);var k=new l["a"].Store({state:{showExtraContentBox:!1},mutations:{showExtraContentBox:function(e){e.showExtraContentBox=!0},unshowExtraContentBox:function(e){e.showExtraContentBox=!1}},modules:{account:p,posts:g,notifications:b}}),v=n("8c4f");a["a"].use(v["a"]);var w=new v["a"]({mode:"history",linkActiveClass:"active",routes:[{path:"/",name:"Home",component:function(){return n.e("chunk-2d21a3d2").then(n.bind(null,"bb51"))}},{path:"/about",name:"About",component:function(){return n.e("chunk-2d22d746").then(n.bind(null,"f820"))}},{path:"/account/login",name:"Login",component:function(){return n.e("chunk-e66d3452").then(n.bind(null,"c58e"))},meta:{title:"Авторизация"}},{path:"/account/register",name:"Register",component:function(){return n.e("chunk-085b01da").then(n.bind(null,"6998"))},meta:{title:"Регистрация"}},{path:"/users/:username",name:"Profile",props:!0,component:function(){return n.e("chunk-6657b382").then(n.bind(null,"6d0f"))}},{path:"/users/:username/posts",name:"ProfilePosts",props:!0,component:function(){return n.e("chunk-b72ca7ac").then(n.bind(null,"4ace"))}},{path:"/users/:username/personal",name:"ProfilePersonal",component:function(){return n.e("chunk-2341da1e").then(n.bind(null,"8df3"))}},{path:"/posts",name:"Posts",component:function(){return n.e("chunk-6507fd24").then(n.bind(null,"cb8a"))},meta:{title:"Последние посты"}},{path:"/posts/new",name:"NewPost",component:function(){return n.e("chunk-60778778").then(n.bind(null,"fd96"))},meta:{title:"Новый пост"}},{path:"/posts/:id",name:"Post",props:!0,component:function(){return n.e("chunk-7d600d14").then(n.bind(null,"366c"))}}]}),y=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"loading"},[n("icon",{staticClass:"loading__icon",attrs:{icon:"bug",spin:""}})],1)},_=[],x={name:"Loading"},O=x,P=(n("53a2"),Object(o["a"])(O,y,_,!1,null,null,null)),j=P.exports,T=n("ecee"),C=n("ad3d"),E=n("c074"),R=n("b702");n("a2f0");T["c"].add(E["h"],R["d"]),T["c"].add(E["a"],R["a"]),T["c"].add(E["g"],R["b"]),T["c"].add(E["l"],E["e"],E["d"],E["b"],E["c"],E["k"]),T["c"].add(E["i"],E["f"],E["j"]),T["c"].add(R["c"],R["e"],E["m"]),a["a"].component("icon",C["a"]),a["a"].component("Loading",j),a["a"].config.productionTip=!1,h.a.defaults.baseURL="http://dallot.ru/",h.a.interceptors.response.use((function(e){return{data:e.data,status:e.status}}),(function(e){console.log("ERROR: ",e.response?e.response:e);try{var t={message:"Ой-ой! При загрузке данных что-то пошло не так",detail:e.response.data.detail,status:e.response.status,data:e.response.data}}catch(n){t={message:"Ой-ой! Что-то пошло вообще не так",detail:"Ой-ой! Что-то пошло вообще не так",status:500}}return Promise.reject(t)})),w.afterEach((function(e){document.title=e.meta.title?"".concat(e.meta.title," / Dallot"):"Dallot"}));var A=localStorage.getItem("auth_token");A?k.dispatch("checkAuthToken",{token:A}).then((function(e){new a["a"]({router:w,store:k,render:function(e){return e(d)}}).$mount("#app"),e.success||(localStorage.removeItem("auth_token"),k.commit("showNotification",{message:e.message,type:"error"}))})):new a["a"]({router:w,store:k,render:function(e){return e(d)}}).$mount("#app")},a2f0:function(e,t,n){}});
//# sourceMappingURL=app.59a6816a.js.map