(function(){"use strict";var e={2710:function(e,t,a){var s=a(9242),o=a(3396);function n(e,t,a,s,n,r){const i=(0,o.up)("TodoMain");return(0,o.wg)(),(0,o.j4)(i)}var r=a(7139);const i={class:"main_wrapper"};function c(e,t,a,s,n,c){const l=(0,o.up)("ModalWindow"),d=(0,o.up)("CategoriesTab"),g=(0,o.up)("router-view");return(0,o.wg)(),(0,o.iD)(o.HY,null,[n.modalIsSeen?((0,o.wg)(),(0,o.j4)(l,{key:0,onCloseModal:t[0]||(t[0]=e=>c.closeModal()),class:"modal"})):(0,o.kq)("",!0),(0,o._)("div",i,[(0,o.Wm)(d,{onOpenModal:c.openModal,onCloseTab:c.showCategoryTab,class:(0,r.C_)(["categories_tab",{categories_tab_active:n.tabIsSeen}])},null,8,["onOpenModal","onCloseTab","class"]),(0,o.Wm)(g,{onShowCategoryTab:c.showCategoryTab,tabIsSeen:n.tabIsSeen},null,8,["onShowCategoryTab","tabIsSeen"])])],64)}var l=a.p+"img/delete.ea02d895.svg";const d=e=>((0,o.dD)("data-v-5e4ede9b"),e=e(),(0,o.Cn)(),e),g={class:"shadow_back"},u={class:"modal_wrapper"},p=d((()=>(0,o._)("img",{class:"close_svg",src:l,alt:"X"},null,-1))),h=[p],k={key:0,class:"modal_form"},w={key:0,class:"empty_message"},m={class:"radio_btns"},y=["value","onUpdate:modelValue"],_={class:"atten_wrapper"},b={key:0,class:"attention_text"};function C(e,t,a,n,i,c){return(0,o.wg)(),(0,o.iD)("div",g,[(0,o._)("div",{class:"click_away",onClick:t[0]||(t[0]=e=>this.$emit("closeModal"))}),(0,o._)("div",u,[(0,o._)("button",{onClick:t[1]||(t[1]=e=>this.$emit("closeModal")),class:"close_button"},h),this.categoriesList.length<11?((0,o.wg)(),(0,o.iD)("div",k,[(0,o.wy)((0,o._)("input",{class:"input_task",type:"text","onUpdate:modelValue":t[2]||(t[2]=e=>i.newCategory.name=e),autofocus:"",maxlength:"15"},null,512),[[s.nr,i.newCategory.name]]),i.emptyFields?((0,o.wg)(),(0,o.iD)("span",w,"add the name and color of the new category")):(0,o.kq)("",!0),(0,o._)("form",null,[(0,o._)("div",m,[((0,o.wg)(!0),(0,o.iD)(o.HY,null,(0,o.Ko)(this.$store.state.colors,(e=>((0,o.wg)(),(0,o.iD)("div",{key:e,class:"color_radio"},[(0,o.wy)((0,o._)("input",{type:"radio",value:e,"onUpdate:modelValue":e=>i.newCategory.color=e,class:"color_radio_button"},null,8,y),[[s.G2,i.newCategory.color]]),(0,o._)("label",{class:"color_radio_label",style:(0,r.j5)({"border-bottom":`5px solid ${e}`})},(0,r.zw)(e),5)])))),128))])]),(0,o._)("button",{class:"send_btn",onClick:t[3]||(t[3]=(...e)=>c.addNewCategory&&c.addNewCategory(...e))},"create")])):(0,o.kq)("",!0),(0,o._)("div",_,[this.categoriesList.length>10?((0,o.wg)(),(0,o.iD)("span",b,"The maximum number of added categories is 10. Delete one of your categories to create a new one.")):(0,o.kq)("",!0)])])])}var v=a(2085),T={name:"ModalWindow",data(){return{newCategory:{name:"",color:"",slug:""},emptyFields:!1}},computed:{categoriesList(){return this.$store.state.categories}},methods:{addNewCategory(){""!==this.newCategory.name&&""!==this.newCategory.color?(this.newCategory.slug=this.newCategory.name.toLowerCase().trim().replace(/[^\w\s-]/g,"").replace(/[\s_-]+/g,"-").replace(/^-+|-+$/g,""),""==this.newCategory.slug&&(this.newCategory.slug=(0,v.Ng)(this.newCategory.name).toLowerCase().trim().replace(/[^\w\s-]/g,"").replace(/[\s_-]+/g,"-").replace(/^-+|-+$/g,"")),this.$store.dispatch("addNewCategory",this.newCategory),this.$emit("closeModal"),this.newCategory=null):this.emptyFields=!0}}},f=a(89);const D=(0,f.Z)(T,[["render",C],["__scopeId","data-v-5e4ede9b"]]);var I=D;const $={class:"category_wrapper"},N={style:{height:"100%"}};function x(e,t,a,s,n,i){const c=(0,o.up)("router-link");return(0,o.wg)(),(0,o.iD)("header",{class:(0,r.C_)(["tab_header",{tab_header_uncommon:this.categories.length>13}])},[(0,o._)("nav",$,[(0,o._)("ul",N,[(0,o._)("button",{class:"new_cat_btn",onClick:t[0]||(t[0]=e=>this.$emit("openModal"))}," Create a new category "),((0,o.wg)(!0),(0,o.iD)(o.HY,null,(0,o.Ko)(i.categories,(e=>((0,o.wg)(),(0,o.j4)(c,{class:"router_link",key:e.id,to:{name:"category.name",params:{id:e.id,slug:e.slug}},onClick:t[1]||(t[1]=e=>this.$emit("closeTab"))},{default:(0,o.w5)((()=>[(0,o._)("li",{class:(0,r.C_)(["category",{category_active:this.$route.params.id==e.id}])},[(0,o._)("span",{style:(0,r.j5)({background:`${e.color}`}),class:"circle"},null,4),(0,o._)("span",null,(0,r.zw)(e.name),1)],2)])),_:2},1032,["to"])))),128))])])],2)}var S={name:"CategoriesTab",data(){return{}},computed:{categories(){return this.$store.state.categories}},beforeCreate(){this.$store.dispatch("getCategories"),this.$store.dispatch("getTasks")}};const M=(0,f.Z)(S,[["render",x],["__scopeId","data-v-414abb02"]]);var O=M,U={name:"TodoMain",data(){return{modalIsSeen:!1,tabIsSeen:!1}},components:{CategoriesTab:O,ModalWindow:I},methods:{closeModal(){this.modalIsSeen=!this.modalIsSeen},showCategoryTab(){this.tabIsSeen=!this.tabIsSeen},openModal(){this.showCategoryTab(),this.modalIsSeen=!this.modalIsSeen}}};const W=(0,f.Z)(U,[["render",c],["__scopeId","data-v-6347a72c"]]);var j=W,H={name:"App",components:{TodoMain:j}};const L=(0,f.Z)(H,[["render",n]]);var P=L,q=a(65),B=a(6265),Z=a.n(B);const z=Z().create({baseURL:"https://bigtodo-server.herokuapp.com"});var A=z;class V{async getCategories(){const{data:e}=await A.get("/categories");return e}async postCategory(e){const t=await A.post("/categories",e);return t}async deleteCategory(e){const{status:t}=await A["delete"](`/categories/${e}`);return t}async getTasks(){const{data:e}=await A.get("/tasks");return e}async postTask(e,t){const a=await A.post(`/categories/${t}/tasks`,e);return a}async deleteTask(e){const{status:t}=await A["delete"](`/tasks/${e.id}`);return t}async changeTaskCondition(e){const t=await A.patch(`/tasks/${e.id}`,{isDone:!e.isDone});return t}}var F=new V,K=a(678);const Y={class:"work_space"},E={class:"category_settings"},X={class:"category_name"},G={class:"opts_btns"},R={class:"page_nav"},J={key:0},Q={class:"page_btns"};function ee(e,t,a,s,n,i){const c=(0,o.up)("InputTask"),l=(0,o.up)("TaskList");return(0,o.wg)(),(0,o.iD)("section",Y,[(0,o._)("div",{class:"burger_button",onClick:t[0]||(t[0]=(...e)=>i.openCategoryTab&&i.openCategoryTab(...e))},[(0,o._)("div",{class:(0,r.C_)(["bar1",{change_bar1:a.tabIsSeen}])},null,2),(0,o._)("div",{class:(0,r.C_)(["bar2",{change_bar2:a.tabIsSeen}])},null,2),(0,o._)("div",{class:(0,r.C_)(["bar3",{change_bar3:a.tabIsSeen}])},null,2)]),(0,o._)("div",E,[(0,o._)("p",X,(0,r.zw)(i.categoryName),1),(0,o._)("div",G,["white"!==i.category.color?((0,o.wg)(),(0,o.iD)("button",{key:0,class:"cat_opts_btn",onClick:t[1]||(t[1]=(...e)=>i.deleteCategory&&i.deleteCategory(...e))}," delete category ")):(0,o.kq)("",!0)])]),(0,o.Wm)(c,{onNewTaskHasBeenAdded:i.pushTaskIntoList},null,8,["onNewTaskHasBeenAdded"]),(0,o.Wm)(l,{tasks:this.selectedTasks,page:n.page,onPageDown:this.pageDown},null,8,["tasks","page","onPageDown"]),(0,o._)("div",R,[i.hasNextPage||n.page>1?((0,o.wg)(),(0,o.iD)("span",J,"page "+(0,r.zw)(this.page),1)):(0,o.kq)("",!0),(0,o._)("div",Q,[n.page>1?((0,o.wg)(),(0,o.iD)("button",{key:0,class:"page_btn",onClick:t[2]||(t[2]=(...e)=>i.pageDown&&i.pageDown(...e))},"prev")):(0,o.kq)("",!0),i.hasNextPage?((0,o.wg)(),(0,o.iD)("button",{key:1,class:(0,r.C_)(["page_btn",{page_btn_forw:1==n.page}]),onClick:t[3]||(t[3]=(...e)=>i.pageUp&&i.pageUp(...e))}," next ",2)):(0,o.kq)("",!0)])])])}const te={class:"task_input"};function ae(e,t,a,n,r,i){return(0,o.wg)(),(0,o.iD)("div",te,[(0,o.wy)((0,o._)("input",{type:"text",class:"input_data","onUpdate:modelValue":t[0]||(t[0]=e=>r.taskName=e),onKeydown:t[1]||(t[1]=(0,s.D2)(((...e)=>i.addNewTask&&i.addNewTask(...e)),["enter"])),placeholder:"type a task...",autofocus:"",maxlength:"50"},null,544),[[s.nr,r.taskName]]),(0,o._)("button",{class:"add_button",onClick:t[2]||(t[2]=(...e)=>i.addNewTask&&i.addNewTask(...e))},"ADD")])}var se={name:"InputTask",data(){return{taskName:""}},methods:{addNewTask(){""!==this.taskName&&(this.$emit("newTaskHasBeenAdded",this.taskName),this.taskName="")}}};const oe=(0,f.Z)(se,[["render",ae],["__scopeId","data-v-219101c3"]]);var ne=oe;const re=e=>((0,o.dD)("data-v-6c78a112"),e=e(),(0,o.Cn)(),e),ie={class:"task_list"},ce=["onClick"],le={class:"task_number"},de={class:"task_info"},ge=["onUpdate:modelValue"],ue=["onClick"],pe=re((()=>(0,o._)("img",{class:"delete_svg",src:l,alt:"X"},null,-1))),he=[pe];function ke(e,t,a,n,i,c){return(0,o.wg)(),(0,o.iD)("ul",ie,[((0,o.wg)(!0),(0,o.iD)(o.HY,null,(0,o.Ko)(a.tasks,((e,t)=>((0,o.wg)(),(0,o.iD)("li",{key:t,class:"task_box"},[(0,o._)("div",{class:"shadow_box",onClick:t=>this.$store.dispatch("changeTaskCondition",e)},null,8,ce),(0,o._)("div",le,"Task #"+(0,r.zw)(t+c.taskPage),1),(0,o._)("div",de,[(0,o.wy)((0,o._)("input",{class:"checkbox",type:"checkbox","onUpdate:modelValue":t=>e.isDone=t},null,8,ge),[[s.e8,e.isDone]]),(0,o._)("span",{class:(0,r.C_)([{task_is_done:e.isDone,long_task_name:e.name.length>15},"task_name"])},(0,r.zw)(e.name),3),(0,o._)("button",{class:"delete_button",onClick:a=>c.deleteTask(e,t)},he,8,ue)])])))),128))])}var we={name:"TaskList",props:{tasks:Array,page:Number},methods:{deleteTask(e){this.$store.dispatch("delTask",e),this.tasks.length%8==1&&this.page>1&&this.$emit("pageDown")}},computed:{taskPage(){return 1+8*(this.page-1)}}};const me=(0,f.Z)(we,[["render",ke],["__scopeId","data-v-6c78a112"]]);var ye=me,_e={name:"WorkSpace",data(){return{page:1}},components:{InputTask:ne,TaskList:ye},props:{categoryId:{type:Number,required:!0},tabIsSeen:Boolean},methods:{pushTaskIntoList(e){this.$store.dispatch("addNewTask",[{name:e,isDone:!1},this.categoryId]),this.selectedTasks.length%8==0&&0!==this.selectedTasks.length&&this.pageUp()},deleteCategory(){this.$store.dispatch("delCategory",this.category.id),this.$router.replace("/1/general")},openCategoryTab(){this.burgerClicked=!this.burgerClicked,this.$emit("showCategoryTab")},pageDown(){this.page-=1},pageUp(){this.page+=1}},computed:{category(){return this.$store.state.categories.find((e=>e.id===this.categoryId))},categoryName(){return this.category.name.toUpperCase()},startIndex(){return 8*(this.page-1)},endIndex(){return 8*this.page},curCategoryTasks(){return this.$store.state.tasks.filter((e=>e.categoryId==this.category.id))},selectedTasks(){return this.curCategoryTasks.slice(this.startIndex,this.endIndex)},hasNextPage(){return this.curCategoryTasks.length>this.endIndex}}};const be=(0,f.Z)(_e,[["render",ee],["__scopeId","data-v-735d57c8"]]);var Ce=be;const ve=[{path:"/",redirect:"/1/general"},{path:"/:id/:slug",component:Ce,name:"category.name",props:e=>({categoryId:parseInt(e.params.id)})}],Te=(0,K.p7)({history:(0,K.PO)(),routes:ve});var fe=Te;const De=(0,q.MT)({state(){return{categories:[],tasks:[],colors:["red","orange","yellow","green","lightblue","blue","purple"]}},mutations:{setCategories(e,t){e.categories=t},newCategoryWasCreated(e,t){199<t.status<300&&(e.categories.push(t.data),fe.push(`/${t.data.id}/${t.data.slug}`))},categoryHasBeenDeleted(e,t,a){199<a<300&&(e.categories=e.categories.filter((e=>e.id!==t)))},setTasks(e,t){e.tasks=t},newTaskWasCreated(e,t){199<t.status<300&&e.tasks.push(t.data)},taskHasBeenDeleted(e,t,a){199<a<300&&(e.tasks=e.tasks.filter((e=>e.id!==t.id)))},taskConditionChanged(e,t){199<t.status<300&&e.tasks.forEach((e=>e.id==t.data.id&&(e.isDone=t.data.isDone)))}},actions:{async getCategories({commit:e}){e("setCategories",await F.getCategories())},async addNewCategory({commit:e},t){e("newCategoryWasCreated",await F.postCategory(t))},async delCategory({commit:e},t){e("categoryHasBeenDeleted",t,await F.deleteCategory(t))},async getTasks({commit:e}){e("setTasks",await F.getTasks())},async addNewTask({commit:e},t){e("newTaskWasCreated",await F.postTask(t[0],t[1]))},async delTask({commit:e},t){e("taskHasBeenDeleted",t,await F.deleteTask(t))},async changeTaskCondition({commit:e},t){e("taskConditionChanged",await F.changeTaskCondition(t),t)}}});var Ie=De;const $e=(0,s.ri)(P);$e.use(Ie),$e.use(fe),$e.mount("#app")}},t={};function a(s){var o=t[s];if(void 0!==o)return o.exports;var n=t[s]={exports:{}};return e[s](n,n.exports,a),n.exports}a.m=e,function(){var e=[];a.O=function(t,s,o,n){if(!s){var r=1/0;for(d=0;d<e.length;d++){s=e[d][0],o=e[d][1],n=e[d][2];for(var i=!0,c=0;c<s.length;c++)(!1&n||r>=n)&&Object.keys(a.O).every((function(e){return a.O[e](s[c])}))?s.splice(c--,1):(i=!1,n<r&&(r=n));if(i){e.splice(d--,1);var l=o();void 0!==l&&(t=l)}}return t}n=n||0;for(var d=e.length;d>0&&e[d-1][2]>n;d--)e[d]=e[d-1];e[d]=[s,o,n]}}(),function(){a.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return a.d(t,{a:t}),t}}(),function(){a.d=function(e,t){for(var s in t)a.o(t,s)&&!a.o(e,s)&&Object.defineProperty(e,s,{enumerable:!0,get:t[s]})}}(),function(){a.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){a.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)}}(),function(){a.p="/"}(),function(){var e={143:0};a.O.j=function(t){return 0===e[t]};var t=function(t,s){var o,n,r=s[0],i=s[1],c=s[2],l=0;if(r.some((function(t){return 0!==e[t]}))){for(o in i)a.o(i,o)&&(a.m[o]=i[o]);if(c)var d=c(a)}for(t&&t(s);l<r.length;l++)n=r[l],a.o(e,n)&&e[n]&&e[n][0](),e[n]=0;return a.O(d)},s=self["webpackChunkbigtodo"]=self["webpackChunkbigtodo"]||[];s.forEach(t.bind(null,0)),s.push=t.bind(null,s.push.bind(s))}();var s=a.O(void 0,[998],(function(){return a(2710)}));s=a.O(s)})();
//# sourceMappingURL=app.cd2193da.js.map