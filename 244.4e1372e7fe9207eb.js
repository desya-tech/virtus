"use strict";(self.webpackChunkappdemo_ng12=self.webpackChunkappdemo_ng12||[]).push([[244],{5244:(ie,_,a)=>{a.r(_),a.d(_,{QueryViewModule:()=>te});var d=a(9808),o=a(4182),l=a(8266),c=a(7224),m=a(8745),e=a(9863),g=a(1165),h=a(1914);function b(t,r){1&t&&(e.TgZ(0,"h4",26),e._uU(1,"New Query View"),e.qZA())}function w(t,r){1&t&&(e.TgZ(0,"h4",26),e._uU(1,"Edit Query View"),e.qZA())}function T(t,r){if(1&t&&(e.TgZ(0,"option",31),e._uU(1),e.qZA()),2&t){const i=r.$implicit;e.s9C("value",i.TYPE_ID),e.xp6(1),e.Oqu(i.TYPE_NAME)}}function Z(t,r){1&t&&(e.TgZ(0,"div",18),e._uU(1,"*Type required"),e.qZA())}function Q(t,r){if(1&t&&(e.TgZ(0,"div"),e.YNc(1,Z,2,0,"div",32),e.qZA()),2&t){const i=e.oxw(2);e.xp6(1),e.Q6J("ngIf",i.f.TYPE_ID.errors.required)}}const p=function(t){return{"is-invalid":t}};function E(t,r){if(1&t){const i=e.EpF();e.TgZ(0,"div",27)(1,"label"),e._uU(2,"Type Point"),e.qZA(),e.TgZ(3,"div",28)(4,"select",29),e.NdJ("change",function(u){return e.CHM(i),e.oxw().onSelectClick(u.target.value)}),e.YNc(5,T,2,2,"option",30),e.qZA()(),e.YNc(6,Q,2,1,"div",13),e.qZA()}if(2&t){const i=e.oxw();e.xp6(4),e.Q6J("ngClass",e.VKq(3,p,i.submitted&&i.f.TYPE_ID.errors)),e.xp6(1),e.Q6J("ngForOf",i.type),e.xp6(1),e.Q6J("ngIf",i.submitted&&i.f.TYPE_ID.errors)}}function q(t,r){if(1&t&&(e.TgZ(0,"div",11)(1,"label"),e._uU(2,"Query Name/Table View Name"),e.qZA(),e._UZ(3,"input",33),e.qZA()),2&t){const i=e.oxw();e.xp6(3),e.Q6J("ngClass",e.VKq(1,p,i.submitted&&i.f.QUERY_VIEW_NAME.errors))}}function x(t,r){1&t&&(e.TgZ(0,"div",18),e._uU(1,"*required"),e.qZA())}function V(t,r){if(1&t&&(e.TgZ(0,"div"),e.YNc(1,x,2,0,"div",32),e.qZA()),2&t){const i=e.oxw(2);e.xp6(1),e.Q6J("ngIf",i.f.QUERY_VIEW_NAME.errors.required)}}function C(t,r){1&t&&(e.TgZ(0,"div",18),e._uU(1,"*name sudah digunakan"),e.qZA())}function N(t,r){1&t&&(e.TgZ(0,"div",18),e._uU(1,"*tidak boleh space&special character exept _ "),e.qZA())}function U(t,r){if(1&t&&(e.TgZ(0,"div",11)(1,"label"),e._uU(2,"Query Name/Table View Name"),e.qZA(),e._UZ(3,"input",34),e.YNc(4,V,2,1,"div",13),e.YNc(5,C,2,0,"div",32),e.YNc(6,N,2,0,"div",32),e.qZA()),2&t){const i=e.oxw();e.xp6(3),e.Q6J("ngClass",e.VKq(4,p,i.submitted&&i.f.QUERY_VIEW_NAME.errors)),e.xp6(1),e.Q6J("ngIf",i.submitted&&i.f.QUERY_VIEW_NAME.errors),e.xp6(1),e.Q6J("ngIf",!0===i.notuniqueTableName),e.xp6(1),e.Q6J("ngIf",!0===i.forformatTableName)}}function Y(t,r){1&t&&(e.TgZ(0,"div",18),e._uU(1,"*query required"),e.qZA())}function I(t,r){if(1&t&&(e.TgZ(0,"div"),e.YNc(1,Y,2,0,"div",32),e.qZA()),2&t){const i=e.oxw();e.xp6(1),e.Q6J("ngIf",i.f.QUERY.errors.required)}}function M(t,r){1&t&&(e.TgZ(0,"div",35),e._uU(1," Query Succesfuly! but not required column"),e.qZA())}function J(t,r){1&t&&(e.TgZ(0,"div",36),e._uU(1," Query Succesfuly!"),e.qZA())}function S(t,r){1&t&&(e.TgZ(0,"div",37),e._uU(1," Query Failed!"),e.qZA())}function P(t,r){1&t&&(e.TgZ(0,"div"),e._uU(1,"table must have column : EMAIL, COMPANY_NAME, VALUE"),e.qZA())}function R(t,r){1&t&&(e.TgZ(0,"div"),e._uU(1,"table must have column : COMPANY_NAME, VALUE"),e.qZA())}function O(t,r){1&t&&e._UZ(0,"span")}function F(t,r){if(1&t){const i=e.EpF();e.TgZ(0,"button",38),e.NdJ("click",function(){return e.CHM(i),e.oxw().onNextClick()}),e.YNc(1,O,1,0,"span",13),e._uU(2," \xa0Save\xa0 "),e.qZA()}if(2&t){const i=e.oxw();e.Q6J("disabled",i.loading),e.xp6(1),e.Q6J("ngIf",i.loading)}}function k(t,r){if(1&t&&(e.TgZ(0,"th")(1,"h6"),e._uU(2),e.qZA()()),2&t){const i=r.$implicit;e.xp6(2),e.Oqu(i)}}function L(t,r){if(1&t&&(e.TgZ(0,"td",40)(1,"p"),e._uU(2),e.qZA()()),2&t){const i=r.$implicit,n=e.oxw().$implicit,u=e.oxw();e.xp6(2),e.Oqu(u.getvalue(i,n))}}function D(t,r){if(1&t&&(e.TgZ(0,"tr"),e.YNc(1,L,3,1,"td",39),e.qZA()),2&t){const i=e.oxw();e.xp6(1),e.Q6J("ngForOf",i.fieldlist)}}let v=(()=>{class t{constructor(i,n,u,s,A){this.formBuilder=i,this.route=n,this.router=u,this.queryViewService=s,this.alertService=A,this.subs=new m.Y,this.loading=!1,this.submitted=!1,this.data=null,this.value=null,this.fieldlist=null,this.tablename=null,this.type=[{TYPE_ID:1,TYPE_NAME:"USER"},{TYPE_ID:2,TYPE_NAME:"COMPANY"}],this.tablelist=null}ngOnInit(){this.id=this.route.snapshot.params.id,this.isAddMode=!this.id,this.form=this.formBuilder.group({QUERY_VIEW_NAME:["",o.kI.required],QUERY:["",o.kI.required],TYPE_ID:["",o.kI.required]}),this.subs.add(this.queryViewService.getByTableName().subscribe(i=>{this.tablelist=i})),this.isAddMode||this.subs.add(this.queryViewService.getById(this.id).pipe((0,c.P)()).subscribe(i=>{this.form.patchValue(i),this.note=1===i.TYPE_ID}))}get f(){return this.form.controls}onSubmit(){if(this.nextClicked){if(this.submitted=!0,this.alertService.clear(),this.isAddMode){if(this.uniqueTableName(this.tablelist,this.form.value.QUERY_VIEW_NAME),this.formatTableName(this.form.value.QUERY_VIEW_NAME),console.log(this.notuniqueTableName,"tablenameuniq"),console.log(this.forformatTableName,"tableformat"),this.form.invalid||!0===this.notuniqueTableName||!0===this.forformatTableName)return}else if(this.form.invalid)return;this.loading=!0,this.isAddMode?this.create():this.update()}else{if(this.submitted=!0,this.form.invalid)return;this.querytesting(this.note)}}create(){this.subs.add(this.queryViewService.create(this.form.value).pipe((0,c.P)()).subscribe({next:()=>{this.alertService.success(),this.router.navigate(["../"],{relativeTo:this.route})},error:i=>{this.alertService.error(i),this.loading=!1}}))}update(){this.alertService.loading(),this.subs.add(this.queryViewService.update(this.id,this.form.value).pipe((0,c.P)()).subscribe({next:()=>{this.alertService.success(),this.router.navigate(["../../"],{relativeTo:this.route})},error:i=>{this.alertService.error(i),this.loading=!1}}))}querytesting(i){this.subs.add(this.queryViewService.querytesting(this.form.value).pipe((0,c.P)()).subscribe(n=>{this.value=n,this.fieldlist=Object.keys(n[0]);const u=this.fieldlist.filter(function(s){return 1==i?"EMAIL"===s||"VALUE"===s||"COMPANY_NAME"===s:0==i?"VALUE"===s||"COMPANY_NAME"===s:void 0});3===u.length&&!0===i||2===u.length&&!1===i?(this.queryviewstatus=!0,this.queryviewstatuswarning=null):(this.queryviewstatuswarning=!0,this.queryviewstatus=null)},n=>{this.queryviewstatus=!1,this.queryviewstatuswarning=!1,this.value=null,this.fieldlist=null}))}onNextClick(){this.nextClicked=!0}onPreviousClick(){this.nextClicked=!1}onSelectClick(i){""!=this.form.value.QUERY&&(this.value=null,this.fieldlist=null,this.queryviewstatuswarning=!1,this.queryviewstatus=null),1===parseInt(i)&&(this.note=!0),2===parseInt(i)&&(this.note=!1)}getvalue(i,n){return n[i]}uniqueTableName(i,n){i.forEach(u=>{this.notuniqueTableName=u.QUERY_VIEW_NAME==n})}formatTableName(i){this.forformatTableName=!!/[ `!@#$%^&*()+\-=\[\]{};':"\\|,.<>\/?~]/.test(i)}ngOnDestroy(){this.subs.unsubscribe()}}return t.\u0275fac=function(i){return new(i||t)(e.Y36(o.qu),e.Y36(l.gz),e.Y36(l.F0),e.Y36(g.b),e.Y36(h.c9))},t.\u0275cmp=e.Xpm({type:t,selectors:[["app-add-edit-query-view"]],decls:49,vars:18,consts:[[1,"title","d-flex","align-items-center","flex-wrap","mb-30"],["class","mr-40",4,"ngIf"],["routerLink","/query-view",1,"main-btn","primary-btn","rounded-btn","btn-hover","btn-sm"],[1,"lni","lni-chevron-left","mr-5"],[1,"row"],[1,"col-lg-6"],[1,"card-style","mb-30"],[3,"formGroup","ngSubmit"],[1,"divider"],["class","select-style-1",4,"ngIf"],["class","input-style-1",4,"ngIf"],[1,"input-style-1"],["formControlName","QUERY","placeholder","Postgresql Query","rows","5",3,"ngClass"],[4,"ngIf"],["class","alert alert-warning",4,"ngIf"],["class","alert alert-success",4,"ngIf"],["class","alert alert-danger",4,"ngIf"],["type","submit",1,"main-btn","secondary-btn","rounded-btn","btn-hover","btn-sm",3,"click"],[2,"color","red"],["routerLink","/query-view",1,"main-btn","primary-btn-outline","rounded-btn","btn-hover","btn-sm"],["type","submit","class","main-btn primary-btn rounded-btn btn-hover btn-sm",3,"disabled","click",4,"ngIf"],[1,"mb-10"],[1,"text-sm","mb-20"],[1,"table-wrapper","table-responsive"],[1,"table","striped-table"],[4,"ngFor","ngForOf"],[1,"mr-40"],[1,"select-style-1"],[1,"select-position"],["formControlName","TYPE_ID",3,"ngClass","change"],[3,"value",4,"ngFor","ngForOf"],[3,"value"],["style","color:red",4,"ngIf"],["type","text","formControlName","QUERY_VIEW_NAME","disabled","",3,"ngClass"],["type","text","formControlName","QUERY_VIEW_NAME",3,"ngClass"],[1,"alert","alert-warning"],[1,"alert","alert-success"],[1,"alert","alert-danger"],["type","submit",1,"main-btn","primary-btn","rounded-btn","btn-hover","btn-sm",3,"disabled","click"],["class","min-width",4,"ngFor","ngForOf"],[1,"min-width"]],template:function(i,n){1&i&&(e.TgZ(0,"div",0),e.YNc(1,b,2,0,"h4",1),e.YNc(2,w,2,0,"h4",1),e.TgZ(3,"button",2),e._UZ(4,"i",3),e._uU(5,"Back"),e.qZA()(),e.TgZ(6,"div",4)(7,"div",5)(8,"div",6)(9,"form",7),e.NdJ("ngSubmit",function(){return n.onSubmit()}),e.TgZ(10,"span",8),e._UZ(11,"hr"),e.qZA(),e.YNc(12,E,7,5,"div",9),e.YNc(13,q,4,3,"div",10),e.YNc(14,U,7,6,"div",10),e.TgZ(15,"div",11)(16,"label"),e._uU(17,"Query"),e.qZA(),e._UZ(18,"textarea",12),e.YNc(19,I,2,1,"div",13),e.YNc(20,M,2,0,"div",14),e.YNc(21,J,2,0,"div",15),e.YNc(22,S,2,0,"div",16),e.TgZ(23,"button",17),e.NdJ("click",function(){return n.onPreviousClick()}),e._uU(24," \xa0Query Testing\xa0 "),e.qZA()(),e.TgZ(25,"div",18),e._uU(26,"*Note"),e.qZA(),e.YNc(27,P,2,0,"div",13),e.YNc(28,R,2,0,"div",13),e.TgZ(29,"span",8),e._UZ(30,"hr"),e.qZA(),e.TgZ(31,"div")(32,"button",19),e._uU(33," Cancel "),e.qZA(),e._uU(34,"\xa0 "),e.YNc(35,F,3,2,"button",20),e.qZA()()()(),e.TgZ(36,"div",5)(37,"div",6)(38,"h6",21),e._uU(39,"Query Result"),e.qZA(),e.TgZ(40,"p",22),e._uU(41," limit result 10 row "),e.qZA(),e.TgZ(42,"div",23)(43,"table",24)(44,"thead")(45,"tr"),e.YNc(46,k,3,1,"th",25),e.qZA()(),e.TgZ(47,"tbody"),e.YNc(48,D,2,1,"tr",25),e.qZA()()()()()()),2&i&&(e.xp6(1),e.Q6J("ngIf",n.isAddMode),e.xp6(1),e.Q6J("ngIf",!n.isAddMode),e.xp6(7),e.Q6J("formGroup",n.form),e.xp6(3),e.Q6J("ngIf",n.isAddMode),e.xp6(1),e.Q6J("ngIf",!n.isAddMode),e.xp6(1),e.Q6J("ngIf",n.isAddMode),e.xp6(4),e.Q6J("ngClass",e.VKq(16,p,n.submitted&&n.f.QUERY.errors)),e.xp6(1),e.Q6J("ngIf",n.submitted&&n.f.QUERY.errors),e.xp6(1),e.Q6J("ngIf",n.queryviewstatuswarning),e.xp6(1),e.Q6J("ngIf",n.queryviewstatus),e.xp6(1),e.Q6J("ngIf",!1===n.queryviewstatus),e.xp6(5),e.Q6J("ngIf",n.note),e.xp6(1),e.Q6J("ngIf",!1===n.note),e.xp6(7),e.Q6J("ngIf",n.queryviewstatus),e.xp6(11),e.Q6J("ngForOf",n.fieldlist),e.xp6(2),e.Q6J("ngForOf",n.value))},directives:[d.O5,l.rH,o._Y,o.JL,o.sg,o.EJ,o.JJ,o.u,d.mk,d.sg,o.YN,o.Kr,o.Fj],styles:[""]}),t})(),W=(()=>{class t{constructor(){}ngOnInit(){}}return t.\u0275fac=function(i){return new(i||t)},t.\u0275cmp=e.Xpm({type:t,selectors:[["app-query-view-layout"]],decls:1,vars:0,template:function(i,n){1&i&&e._UZ(0,"router-outlet")},directives:[l.lC],styles:[""]}),t})();var B=a(2454),j=a.n(B),f=a(8567),y=a(3189);function $(t,r){1&t&&(e.TgZ(0,"div")(1,"p"),e._uU(2,"User"),e.qZA()())}function H(t,r){1&t&&(e.TgZ(0,"p"),e._uU(1,"Company"),e.qZA())}function K(t,r){1&t&&(e.TgZ(0,"span"),e._UZ(1,"i",32),e.qZA())}function X(t,r){if(1&t){const i=e.EpF();e.TgZ(0,"tr")(1,"td",24),e.YNc(2,$,3,0,"div",25),e.YNc(3,H,2,0,"ng-template",null,26,e.W1O),e.qZA(),e.TgZ(5,"td",24)(6,"p"),e._uU(7),e.qZA()(),e.TgZ(8,"td",24)(9,"p"),e._uU(10),e.qZA()(),e.TgZ(11,"td")(12,"div",27)(13,"button",28),e._UZ(14,"i",29),e.qZA(),e._uU(15,"\xa0 "),e.TgZ(16,"button",30),e.NdJ("click",function(){const s=e.CHM(i).$implicit;return e.oxw().confirmBox("delete",s,s.QUERY_VIEW_NAME)}),e.YNc(17,K,2,0,"span",31),e.qZA()()()()}if(2&t){const i=r.$implicit,n=e.MAs(4);e.xp6(2),e.Q6J("ngIf",1===i.TYPE_ID)("ngIfElse",n),e.xp6(5),e.Oqu(i.QUERY_VIEW_NAME),e.xp6(3),e.Oqu(i.QUERY),e.xp6(3),e.MGl("routerLink","edit/",i.QUERY_VIEW_ID,""),e.xp6(3),e.Q6J("disabled",i.isDeleting),e.xp6(1),e.Q6J("ngIf",!i.isDeleting)}}const z=function(t,r){return{itemsPerPage:t,currentPage:r}},G=[{path:"query-view",component:W,children:[{path:"",component:(()=>{class t{constructor(i,n){this.queryViewService=i,this.alertService=n,this.subs=new m.Y,this.isManaging=!1,this.gridLayout=!0,this.activities=null,this.queryview=null,this.p=1,this.count=10,this.countdata=null}ngOnInit(){this.subs.add(this.queryViewService.getAll().pipe((0,c.P)()).subscribe(i=>{this.queryview=i,this.countdata=this.queryview.length}))}delete(i,n){this.alertService.loading();const u=this.queryview.find(s=>s.QUERY_VIEW_ID===i.QUERY_VIEW_ID);this.subs.add(this.queryViewService.delete(i.QUERY_VIEW_ID,n).pipe((0,c.P)()).subscribe(()=>{u.isDeleting=!0,this.queryview=this.queryview.filter(s=>s.QUERY_VIEW_ID!==i.QUERY_VIEW_ID),this.countdata=this.queryview.length,this.alertService.success()},s=>{this.alertService.error(s)}))}onCBChanged(i){this.isManaging=i}confirmBox(i,n,u){"delete"==i&&j().fire({title:"Are you sure want to delete?",text:n.QUERY_VIEW_NAME,icon:"warning",showCancelButton:!0,confirmButtonText:"Yes, delete it!",cancelButtonText:"Cancel"}).then(s=>{s.value&&this.delete(n,u)})}ngOnDestroy(){this.subs.unsubscribe()}}return t.\u0275fac=function(i){return new(i||t)(e.Y36(g.b),e.Y36(h.c9))},t.\u0275cmp=e.Xpm({type:t,selectors:[["app-query-view"]],decls:51,vars:12,consts:[[1,"title","d-flex","align-items-center","flex-wrap","mb-30"],[1,"mr-40"],["routerLink","add",1,"main-btn","primary-btn","btn-hover","btn-sm"],[1,"lni","lni-plus","mr-5"],[1,"tables-wrapper"],[1,"row"],[1,"col-lg-12"],[1,"card-style","mb-30"],[1,"row","align-items-center"],[1,"col-md-6"],[1,"d-flex","flex-wrap","justify-content-between","align-items-center","py-3"],[1,"left"],[1,"right"],[1,"table-search","d-flex"],["action","#"],["type","text","name","something","placeholder","Search...",3,"ngModel","ngModelChange"],[1,"lni","lni-search-alt"],[1,"table-wrapper","table-responsive"],[1,"table"],[4,"ngFor","ngForOf"],[1,"pt-10","d-flex","flex-wrap","justify-content-between"],[1,"text-sm","text-gray"],[1,"text-right"],[3,"pageChange"],[1,"min-width"],[4,"ngIf","ngIfElse"],["off",""],[1,"action"],[1,"text-primary",2,"cursor","pointer",3,"routerLink"],[1,"lni","lni-pencil-alt"],[1,"text-danger",3,"disabled","click"],[4,"ngIf"],[1,"lni","lni-trash-can"]],template:function(i,n){1&i&&(e.TgZ(0,"div",0)(1,"h4",1),e._uU(2,"Query View"),e.qZA(),e.TgZ(3,"button",2),e._UZ(4,"i",3),e._uU(5," Add "),e.qZA()(),e.TgZ(6,"div",4)(7,"div",5)(8,"div",6)(9,"div",7)(10,"div",8),e._UZ(11,"div",9),e.qZA(),e.TgZ(12,"div",10)(13,"div",11)(14,"p"),e._uU(15,"Show "),e.TgZ(16,"span"),e._uU(17,"10"),e.qZA(),e._uU(18," entries"),e.qZA()(),e.TgZ(19,"div",12)(20,"div",13)(21,"form",14)(22,"input",15),e.NdJ("ngModelChange",function(s){return n.filterdata=s}),e.qZA(),e.TgZ(23,"button"),e._UZ(24,"i",16),e.qZA()()()()(),e.TgZ(25,"div",17)(26,"table",18)(27,"thead")(28,"tr")(29,"th")(30,"h6"),e._uU(31,"Type"),e.qZA()(),e.TgZ(32,"th")(33,"h6"),e._uU(34,"Query Name/table_name"),e.qZA()(),e.TgZ(35,"th")(36,"h6"),e._uU(37,"Query"),e.qZA()(),e.TgZ(38,"th")(39,"h6"),e._uU(40,"Action"),e.qZA()()()(),e.TgZ(41,"tbody"),e.YNc(42,X,18,7,"tr",19),e.ALo(43,"paginate"),e.ALo(44,"filter"),e.qZA()()(),e.TgZ(45,"div",20)(46,"div",11)(47,"p",21),e._uU(48),e.qZA()(),e.TgZ(49,"div",22)(50,"pagination-controls",23),e.NdJ("pageChange",function(s){return n.p=s}),e.qZA()()()()()()()),2&i&&(e.xp6(22),e.Q6J("ngModel",n.filterdata),e.xp6(20),e.Q6J("ngForOf",e.xi3(43,3,e.xi3(44,6,n.queryview,n.filterdata),e.WLB(9,z,n.count,n.p))),e.xp6(6),e.hij("Total ",n.countdata," users"))},directives:[l.rH,o._Y,o.JL,o.F,o.Fj,o.JJ,o.On,d.sg,d.O5,f.LS],pipes:[f._s,y.Z],styles:[""]}),t})()},{path:"add",component:v},{path:"edit/:id",component:v}]}];let ee=(()=>{class t{}return t.\u0275fac=function(i){return new(i||t)},t.\u0275mod=e.oAB({type:t}),t.\u0275inj=e.cJS({imports:[[l.Bz.forChild(G)],l.Bz]}),t})(),te=(()=>{class t{}return t.\u0275fac=function(i){return new(i||t)},t.\u0275mod=e.oAB({type:t}),t.\u0275inj=e.cJS({imports:[[d.ez,o.UX,ee,f.JX,y.h,o.u5]]}),t})()}}]);