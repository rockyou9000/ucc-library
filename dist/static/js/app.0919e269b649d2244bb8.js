webpackJsonp([1],{"+rhx":function(e,t){},"/KQ8":function(e,t){},"77bY":function(e,t){},"8yxl":function(e,t){},"ANS/":function(e,t){},F78w:function(e,t){},NHnr:function(e,t,a){"use strict";function n(e){a("F78w")}function o(e){a("yEYE")}function r(e){var t="";for(var a in e){var n=void 0!==e[a]?e[a]:"";t+="&"+a+"="+encodeURIComponent(n)}return t?t.substring(1):""}function i(e,t,a){var n=null,o=void 0;return function(){var r=this,i=arguments,s=+new Date;clearTimeout(n),o||(o=s),s-o>=a?(e.apply(r,i),o=s):n=setTimeout(function(){e.apply(r,i)},t)}}function s(e){a("/KQ8")}function l(e){a("k71K")}function c(e){a("77bY")}function u(e){a("ANS/")}function d(e){a("8yxl")}function p(e){a("S1VT")}function m(e){a("zXMv")}Object.defineProperty(t,"__esModule",{value:!0});var h=(a("briU"),a("i8gr")),f=a("b13w"),v=a.n(f),b=(a("+rhx"),a("rZ9o"),{name:"app"}),g=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{attrs:{id:"app"}},[a("router-view")],1)},y=[],_={render:g,staticRenderFns:y},C=_,k=a("Z0/y"),x=n,w=k(b,C,!1,x,null,null),$=w.exports,I=a("zO6J"),E={name:"CommonHeader",props:{index:{type:String,required:!0}},methods:{handleSelect:function(e){this.$router.push({path:e})}}},S=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("el-menu",{staticClass:"el-menu-demo",attrs:{"default-active":e.index,mode:"horizontal"},on:{select:e.handleSelect}},[a("el-menu-item",{attrs:{index:"home"}},[e._v("首页")]),e._v(" "),a("el-menu-item",{attrs:{index:"new"}},[e._v("新书推荐")]),e._v(" "),a("el-menu-item",{attrs:{index:"login"}},[e._v("管理员入口")])],1)},P=[],F={render:S,staticRenderFns:P},R=F,N=a("Z0/y"),B=N(E,R,!1,null,null,null),L=B.exports,O={name:"HomeIndex",components:{CommonHeader:L},data:function(){return{input:"",value:"name",options:[{value:"name",label:"书名"},{value:"author",label:"作者"},{value:"publisher",label:"出版社"}]}},methods:{handleSearch:function(){var e=encodeURIComponent(this.input),t=encodeURIComponent(this.value);""===this.input.trim()?this.$router.push({path:"/result"}):this.$router.push({path:"/result/"+t+"/"+e})}}},A=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"home-wrap",on:{keydown:function(t){return"button"in t||!e._k(t.keyCode,"enter",13,t.key,"Enter")?e.handleSearch(t):null}}},[a("el-container",[a("el-header",[a("CommonHeader",{attrs:{index:"home"}})],1),e._v(" "),a("el-main",{staticClass:"main-content"},[a("h1",[e._v("UCC / 涌泉图书馆")]),e._v(" "),a("el-input",{staticClass:"search-input",attrs:{placeholder:"请输入搜索内容"},model:{value:e.input,callback:function(t){e.input=t},expression:"input"}}),e._v(" "),a("el-button",{staticClass:"search-btn",attrs:{type:"primary",plain:""},on:{click:e.handleSearch}},[e._v("搜索")]),e._v(" "),a("div",{staticClass:"search-type"},[a("h2",[e._v("搜索条件")]),e._v(" "),a("el-select",{staticClass:"selector",attrs:{placeholder:"请选择"},model:{value:e.value,callback:function(t){e.value=t},expression:"value"}},e._l(e.options,function(e){return a("el-option",{key:e.value,attrs:{label:e.label,value:e.value}})}))],1)],1)],1)],1)},D=[],T={render:A,staticRenderFns:D},Z=T,q=a("Z0/y"),H=o,j=q(O,Z,!1,H,"data-v-10b27654",null),z=j.exports,U=a("3cXf"),V=a.n(U),K=a("rVsN"),M=a.n(K),Y=a("2sCs"),X=a.n(Y),J=a("6yg2"),Q=a.n(J),G="http://47.98.213.177:8080/ucc/library",W={param:"callback",prefix:"__jsonp__"};X.a.defaults.timeout=5e3;var ee="";X.a.interceptors.request.use(function(e){return"post"===e.method&&e.data&&e.data.constructor!==FormData&&(e.headers["Content-Type"]="application/json"),ee=f.Loading.service({fullscreen:!0,background:"rgba(0, 0, 0, 0.1)"}),e},function(e){return M.a.reject(e)}),X.a.interceptors.response.use(function(e){return ee.close(),e},function(e){return M.a.reject(e)});var te={get:function(e,t){return X()({method:"get",url:G+e,params:t})},post:function(e,t){return X()({method:"post",url:G+e,data:V()(t)})},form:function(e,t){return X()({method:"post",url:G+e,data:t})},axios:function(e){return X()(e)},jsonp:function(e,t){return e+=(e.indexOf("?")<0?"?":"&")+r(t),new M.a(function(t,a){Q()(e,W,function(e,n){e?a(e):t(n)})})}},ae=function(e,t,a){var n={pageSize:20,pageNum:e};switch(t){case"name":n.name=a;break;case"author":n.author=a;break;case"publisher":n.publisher=a;break;case"categories":n.categories=a;break;case"locations":n.locations=a}return te.post("/book/query",n).catch(function(){f.Loading.service().close(),Object(f.Notification)({type:"error",title:"数据加载失败!",message:"请刷新重试",duration:0,offset:50})})},ne=function(e){return te.post("/book/delete",{id:e})},oe=function(e){return te.post("/book/add",e)},re=function(e){return te.post("/book/update",e)},ie=function(e){return te.post("/book/detail",{id:e})},se=a("hRKE"),le=a.n(se),ce={get:function(e){var t=""+document.cookie,a=t.indexOf(e+"=");if(-1==a||""==e)return"";var n=t.indexOf(";",a);return-1==n&&(n=t.length),unescape(t.substring(a+e.length+1,n))},set:function(e,t,a){a=void 0!==a?a:365;var n=new Date;n.setTime(n.getTime()+24*a*60*60*1e3),document.cookie=e+"="+escape(t)+";expires="+n.toGMTString()+"; path=/; "},delete:function(e){this.set(e,"",-1)}},ue=("client"!==Object({NODE_ENV:"production"}).VUE_ENV||!window||!window.localStorage||le()(window.localStorage),function(){try{document.createElement("canvas").toDataURL("image/webp").indexOf("data:image/webp")}catch(e){return!1}}(),function(){try{ce.get("bili_jct")}catch(e){return""}}(),a("ektt")),de=a.n(ue),pe={name:"SearchResult",props:["typeProp","infoProp"],created:function(){this.initSearch();var e=ce.get("library_admin"),t=ce.get("library_flag");!e||t!==de.a.cookieFlag||"/admin/dashboard"!==this.$route.path&&"/admin/dashboard/"!==this.$route.path||(this.isAdmin=!0),this.throttleFn=i(this.initSearch.bind(this),500,2e3)},data:function(){return{isAdmin:!1,type:"",info:"",pageNum:1,total:0,pages:0,tableData:[],throttleFn:function(){}}},watch:{infoProp:function(){this.throttleFn()}},methods:{initSearch:function(){this.type=this.typeProp?this.typeProp:this.$route.params.type||"",this.info=this.infoProp?this.infoProp:this.$route.params.info||"",this.queryBookList(this.pageNum,this.type,this.info)},queryBookList:function(e,t,a){var n=this;ae(e,t,a).then(function(e){document.getElementById("result").scrollIntoView(),n.renderPage(e)})},renderPage:function(e){e&&e.data&&"000"===e.data.respCode&&(this.tableData=e.data.bookInfoList,this.pages=+e.data.pages,this.total=+e.data.rowCount)},handleCurrentChange:function(e){this.pageNum=e,this.queryBookList(this.pageNum,this.type,this.info)},handleEdit:function(e,t){this.$router.push("/admin/add/"+t.id)},handleDelete:function(e,t){var a=this;console.log(e,t),this.$confirm("此操作将永久删除该文件, 是否继续?","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then(function(){ne(t.id).then(function(t){t&&t.data?"000"===t.data.respCode?(a.$message({type:"success",message:"删除成功!"}),a.tableData.splice(e,1)):"001"===t.data.respCode?a.$message({type:"error",message:"未找到相关记录"}):"999"===t.data.respCode&&a.$message({type:"error",message:"未知错误"}):a.$message({type:"error",message:"未知错误"})}).catch(function(e){a.$message({type:"error",message:"未知错误"})})}).catch(function(e){a.$message({type:"info",message:"已取消"})})},formatCategory:function(e,t,a){switch(a){case"1":return"未知分类";case"2":return"圣经研读";case"3":return"神学宗教";case"4":return"人物传记";case"5":return"灵命进深";case"6":return"婚姻家庭";case"7":return"诗歌敬拜";case"8":return"其他";case"9":return"查经布道";default:return"未知分类"}},formatLocation:function(e,t,a){switch(a){case"1":return"未知地点";case"2":return"涌泉教会";case"3":return"UCC";default:return"未知地点"}},formatEmpty:function(e,t,a){return a||"--"}}},me=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"search-result",attrs:{id:"result"}},[a("el-table",{staticStyle:{width:"100%","max-width":"1000px",margin:"0 auto"},attrs:{data:e.tableData,"row-class-name":"row-style",align:"center","empty-text":"查找没有结果"}},[a("el-table-column",{attrs:{prop:"category1",label:"分类",width:"50",align:"center",formatter:e.formatCategory}}),e._v(" "),a("el-table-column",{attrs:{prop:"name",label:"书名",align:"center"}}),e._v(" "),a("el-table-column",{attrs:{prop:"author",label:"作者",width:"120",align:"center",formatter:e.formatEmpty}}),e._v(" "),a("el-table-column",{attrs:{prop:"location",label:"位置",width:"70",align:"center",formatter:e.formatLocation}}),e._v(" "),e.isAdmin?a("el-table-column",{attrs:{prop:"publisher",label:"出版社",width:"150",align:"center",formatter:e.formatEmpty}}):e._e(),e._v(" "),e.isAdmin?a("el-table-column",{attrs:{label:"修改",width:"200",align:"center"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("el-button",{attrs:{size:"mini"},on:{click:function(a){e.handleEdit(t.$index,t.row)}}},[e._v("编辑")]),e._v(" "),a("el-button",{attrs:{size:"mini",type:"danger"},on:{click:function(a){e.handleDelete(t.$index,t.row)}}},[e._v("删除")])]}}])}):e._e()],1),e._v(" "),a("el-pagination",{staticClass:"paginator",attrs:{small:"",background:"","current-page":e.pageNum,"page-size":20,layout:"prev, pager, next",total:e.total},on:{"current-change":e.handleCurrentChange,"update:currentPage":function(t){e.pageNum=t}}})],1)},he=[],fe={render:me,staticRenderFns:he},ve=fe,be=a("Z0/y"),ge=s,ye=be(pe,ve,!1,ge,"data-v-a1b5eeec",null),_e=ye.exports,Ce={name:"NewBook",components:{CommonHeader:L},data:function(){return{}}},ke=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"new-book-wrapper"},[a("el-header",[a("CommonHeader",{attrs:{index:"new"}})],1),e._v(" "),a("h1",{staticClass:"developing"},[e._v("敬请期待...")])],1)},xe=[],we={render:ke,staticRenderFns:xe},$e=we,Ie=a("Z0/y"),Ee=l,Se=Ie(Ce,$e,!1,Ee,"data-v-5870d641",null),Pe=Se.exports,Fe=a("Kww8"),Re=a.n(Fe),Ne={name:"AdminLogin",components:{CommonHeader:L},data:function(){return{accountInput:"",password:""}},methods:{goLogin:function(){var e=!1;for(var t in de.a)t===this.accountInput&&de.a[t]===Re()(this.password)&&(e=!0,ce.set("library_admin",t,1),ce.set("library_flag",de.a.cookieFlag,1),this.$router.push("/admin/index"));e||this.$message({type:"error",message:"用户名或密码错误!"})}}},Be=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"login-wrapper",on:{keydown:function(t){return"button"in t||!e._k(t.keyCode,"enter",13,t.key,"Enter")?e.goLogin(t):null}}},[a("el-header",[a("CommonHeader",{attrs:{index:"login"}})],1),e._v(" "),a("h1",[e._v("管理员登录")]),e._v(" "),a("div",{staticClass:"label"},[e._v("\n    账号 "),a("el-input",{staticClass:"input",attrs:{clearable:"",placeholder:"请输入所属教会账号"},model:{value:e.accountInput,callback:function(t){e.accountInput=t},expression:"accountInput"}})],1),e._v(" "),a("div",{staticClass:"label"},[e._v("\n    密码 "),a("el-input",{staticClass:"input",attrs:{clearable:"",type:"password",placeholder:"请输入密码"},model:{value:e.password,callback:function(t){e.password=t},expression:"password"}})],1),e._v(" "),a("el-button",{staticClass:"login-btn",attrs:{type:"primary"},on:{click:e.goLogin}},[e._v("点击登录")])],1)},Le=[],Oe={render:Be,staticRenderFns:Le},Ae=Oe,De=a("Z0/y"),Te=c,Ze=De(Ne,Ae,!1,Te,"data-v-70a0e00a",null),qe=Ze.exports,He={name:"AdminIndex",created:function(){var e=ce.get("library_admin"),t=ce.get("library_flag");e&&t===de.a.cookieFlag||this.$router.push({path:"/"}),this.updateAcitve()},data:function(){return{index:""}},methods:{handleSelect:function(e){this.$router.push({path:"/admin/"+e})},updateAcitve:function(){var e=this.$route.path,t=e.match(/admin\/(.*)/),a=t?t[1]:"",n=void 0;/\//.test(a)&&(n=a.match(/(.*)?\//),a=n?n[1]:""),this.index=a}},watch:{$route:function(){this.updateAcitve()}}},je=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("el-container",{staticClass:"admin-wrap"},[a("el-header",[a("el-menu",{staticClass:"el-menu-demo",attrs:{"default-active":e.index,mode:"horizontal","background-color":"#545c64","text-color":"#fff","active-text-color":"#ffd04b"},on:{select:e.handleSelect}},[a("el-menu-item",{attrs:{index:"index"}},[e._v("首页")]),e._v(" "),a("el-menu-item",{attrs:{index:"dashboard"}},[e._v("图书控制台")]),e._v(" "),a("el-menu-item",{attrs:{index:"add"}},[e._v("录入图书")])],1)],1),e._v(" "),a("el-main",{staticClass:"main-content"},[a("router-view")],1)],1)},ze=[],Ue={render:je,staticRenderFns:ze},Ve=Ue,Ke=a("Z0/y"),Me=u,Ye=Ke(He,Ve,!1,Me,"data-v-2a28cef7",null),Xe=Ye.exports,Je={name:"",data:function(){return{}},methods:{addBook:function(){this.$router.push("/admin/add")},editBook:function(){this.$router.push("/admin/dashboard")}}},Qe=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"admin-index"},[a("h1",[e._v("欢迎进入图书管理页面")]),e._v(" "),a("el-button",{staticClass:"index-btn",attrs:{type:"success"},on:{click:e.addBook}},[e._v("录入图书")]),e._v(" "),a("el-button",{staticClass:"index-btn",attrs:{type:"primary"},on:{click:e.editBook}},[e._v("图书编辑")])],1)},Ge=[],We={render:Qe,staticRenderFns:Ge},et=We,tt=a("Z0/y"),at=d,nt=tt(Je,et,!1,at,"data-v-15aaf29b",null),ot=nt.exports,rt={name:"",components:{SearchResult:_e},data:function(){return{infoProp:"",typeProp:"name",options:[{value:"name",label:"书名"},{value:"author",label:"作者"},{value:"publisher",label:"出版社"}]}},methods:{}},it=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"admin-edit"},[a("div",{staticClass:"search-type"},[a("el-select",{staticClass:"selector",attrs:{placeholder:"请选择"},model:{value:e.typeProp,callback:function(t){e.typeProp=t},expression:"typeProp"}},e._l(e.options,function(e){return a("el-option",{key:e.value,attrs:{label:e.label,value:e.value}})}))],1),e._v(" "),a("el-input",{staticClass:"search-input",attrs:{placeholder:"请输入搜索内容"},model:{value:e.infoProp,callback:function(t){e.infoProp=t},expression:"infoProp"}}),e._v(" "),a("SearchResult",{attrs:{typeProp:e.typeProp,infoProp:e.infoProp}})],1)},st=[],lt={render:it,staticRenderFns:st},ct=lt,ut=a("Z0/y"),dt=p,pt=ut(rt,ct,!1,dt,"data-v-0392df98",null),mt=pt.exports,ht={name:"BookDetail",data:function(){return{isEdit:!1,bookId:void 0,name:"",author:"",publisher:"",location:"",category1:"",firstId:"",secondId:"",churchOptions:[{value:"3",label:"UCC"},{value:"2",label:"涌泉教会"},{value:"1",label:"未知"}],categoryOptions:[{value:"2",label:"圣经研读"},{value:"3",label:"神学宗教"},{value:"4",label:"人物传记"},{value:"5",label:"灵命进深"},{value:"6",label:"婚姻家庭"},{value:"7",label:"诗歌敬拜"},{value:"9",label:"查经布道"},{value:"8",label:"其他"}]}},created:function(){var e=this,t=this.$route.params.id;t&&(this.isEdit=!0,this.bookId=t,ie(t).then(function(t){if(t&&t.data&&"000"===t.data.respCode){var a=t.data;e.name=a.name,e.author=a.author,e.publisher=a.publisher,e.category1=a.category1,e.location=a.location,e.firstId=a.firstId,e.secondId=a.secondId}}))},methods:{handleClick:function(){var e=this;if(this.validateForm()){var t={name:this.name.trim(),author:this.author.trim(),category1:this.category1.trim(),location:this.location.trim()};this.publisher&&(t.publisher=this.publisher.trim()),this.firstId&&(t.firstId=this.firstId.trim()),this.secondId&&(t.secondId=this.secondId.trim()),this.$confirm("确认图书信息正确么? ","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then(function(){e.isEdit?(t.id=e.bookId.trim(),re(t).then(function(t){t&&t.data?"000"===t.data.respCode?(e.$message({type:"success",message:"编辑成功!"}),e.$router.push("/admin/dashboard")):"001"===t.data.respCode?e.$message({type:"error",message:"未找到相关记录"}):"999"===t.data.respCode&&e.$message({type:"error",message:"未知错误"}):e.$message({type:"error",message:"未知错误"})}).catch(function(t){console.log(t),e.$message({type:"error",message:"未知错误"})})):oe(t).then(function(t){t&&t.data?"000"===t.data.respCode?(e.$message({type:"success",message:"新增成功!"}),e.$router.push("/admin/dashboard")):"001"===t.data.respCode?e.$message({type:"error",message:"未找到相关记录"}):"999"===t.data.respCode&&e.$message({type:"error",message:"未知错误"}):e.$message({type:"error",message:"未知错误"})}).catch(function(t){console.log(t),e.$message({type:"error",message:"未知错误"})})}).catch(function(){e.$notify.info({title:"取消操作",message:""})})}},validateForm:function(){return!!(this.name&&this.author&&this.location&&this.category1)||(this.$notify.error({title:"错误",message:"请完善填写信息"}),!1)}}},ft=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"book-detail-wrap"},[a("div",{staticClass:"book-line"},[a("h1",[e._v(e._s(e.isEdit?"编辑图书":"新增图书"))])]),e._v(" "),a("div",{staticClass:"book-line"},[a("span",{staticClass:"require"},[e._v("书名 : ")]),a("el-input",{staticClass:"detail-input",model:{value:e.name,callback:function(t){e.name=t},expression:"name"}})],1),e._v(" "),a("div",{staticClass:"book-line"},[a("span",{staticClass:"require"},[e._v("作者 : ")]),a("el-input",{staticClass:"detail-input",model:{value:e.author,callback:function(t){e.author=t},expression:"author"}})],1),e._v(" "),a("div",{staticClass:"book-line"},[a("span",[e._v("出版社 : ")]),a("el-input",{staticClass:"detail-input",model:{value:e.publisher,callback:function(t){e.publisher=t},expression:"publisher"}})],1),e._v(" "),a("div",{staticClass:"book-line"},[a("span",{staticClass:"require"},[e._v("所属教会 : ")]),e._v(" "),a("el-select",{model:{value:e.location,callback:function(t){e.location=t},expression:"location"}},e._l(e.churchOptions,function(e){return a("el-option",{key:e.value,attrs:{label:e.label,value:e.value}})}))],1),e._v(" "),a("div",{staticClass:"book-line"},[a("span",{staticClass:"require"},[e._v("分类 : ")]),e._v(" "),a("el-select",{model:{value:e.category1,callback:function(t){e.category1=t},expression:"category1"}},e._l(e.categoryOptions,function(e){return a("el-option",{key:e.value,attrs:{label:e.label,value:e.value}})}))],1),e._v(" "),a("div",{staticClass:"book-line"},[a("span",[e._v("主编号 : ")]),a("el-input",{staticClass:"detail-input",model:{value:e.firstId,callback:function(t){e.firstId=t},expression:"firstId"}})],1),e._v(" "),a("div",{staticClass:"book-line"},[a("span",[e._v("单本编号 : ")]),a("el-input",{staticClass:"detail-input",model:{value:e.secondId,callback:function(t){e.secondId=t},expression:"secondId"}})],1),e._v(" "),a("div",{staticClass:"book-line"},[a("el-button",{staticClass:"confirm-btn",attrs:{type:"primary"},on:{click:e.handleClick}},[e._v(e._s(e.isEdit?"确认修改":"确认新增"))])],1)])},vt=[],bt={render:ft,staticRenderFns:vt},gt=bt,yt=a("Z0/y"),_t=m,Ct=yt(ht,gt,!1,_t,"data-v-ccd78e04",null),kt=Ct.exports;h.default.use(I.a);var xt=new I.a({mode:"hash",routes:[{path:"/",name:"home",component:z},{path:"/result",name:"resultAll",component:_e},{path:"/result/:type/:info",name:"result",component:_e},{path:"/login",name:"login",component:qe},{path:"/new",name:"new",component:Pe},{path:"/admin",name:"admin",component:Xe,children:[{path:"index",component:ot},{path:"dashboard",component:mt},{path:"add",component:kt},{path:"add/:id",component:kt}]},{path:"*",redirect:"/"}]});h.default.use(v.a),new h.default({el:"#app",router:xt,render:function(e){return e($)}})},S1VT:function(e,t){},ektt:function(e,t){e.exports={yongquan:"6b378b34c473c9e7456530b65fe22685",ucc:"bc7925967db796fea43b916fff0d2a09",cookieFlag:"ml8123$7asd&?sd_sd)dolklds#sd#dsd"}},k71K:function(e,t){},rZ9o:function(e,t){},yEYE:function(e,t){},zXMv:function(e,t){}},["NHnr"]);