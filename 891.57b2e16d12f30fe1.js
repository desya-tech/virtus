"use strict";(self.webpackChunkappdemo_ng12=self.webpackChunkappdemo_ng12||[]).push([[891],{7891:(Ut,A,a)=>{a.r(A),a.d(A,{PointModule:()=>Ct});var _=a(9808),s=a(4182),p=a(8266),t=a(9863);let P=(()=>{class i{constructor(){}ngOnInit(){}}return i.\u0275fac=function(e){return new(e||i)},i.\u0275cmp=t.Xpm({type:i,selectors:[["app-point-layout"]],decls:1,vars:0,template:function(e,n){1&e&&t._UZ(0,"router-outlet")},directives:[p.lC],styles:[""]}),i})();var u=a(7224),m=a(8745),N=a(2454),q=a.n(N),v=a(2340),f=a(8290),Z=a(1075),h=a(1914);function C(i,o){if(1&i&&(t.TgZ(0,"option",25),t._uU(1),t.qZA()),2&i){const e=o.$implicit;t.s9C("value",e.GROUP_POINT_ID),t.xp6(1),t.Oqu(e.GROUP_POINT_NAME)}}function I(i,o){1&i&&(t.TgZ(0,"span"),t._UZ(1,"i",32),t.qZA())}function U(i,o){if(1&i){const e=t.EpF();t.TgZ(0,"tr")(1,"td",26)(2,"p"),t._uU(3),t.qZA()(),t.TgZ(4,"td",26)(5,"p"),t._uU(6),t.qZA()(),t.TgZ(7,"td",26)(8,"p"),t._uU(9),t.qZA()(),t.TgZ(10,"td",26)(11,"p"),t._uU(12),t.qZA()(),t.TgZ(13,"td",26)(14,"p"),t._uU(15),t.qZA()(),t.TgZ(16,"td",26)(17,"p"),t._uU(18),t.qZA()(),t.TgZ(19,"td")(20,"div",27)(21,"button",28),t._UZ(22,"i",29),t.qZA(),t._uU(23,"\xa0 "),t.TgZ(24,"button",30),t.NdJ("click",function(){const d=t.CHM(e).$implicit;return t.oxw().confirmBox("delete",d)}),t.YNc(25,I,2,0,"span",31),t.qZA()()()()}if(2&i){const e=o.$implicit,n=o.index,r=t.oxw();t.xp6(3),t.Oqu(n+1),t.xp6(3),t.Oqu(e.POINT_CATEGORY_NAME),t.xp6(3),t.Oqu(e.TABLE_SOURCE),t.xp6(3),t.Oqu(e.TARGET),t.xp6(3),t.Oqu(e.PERCENTAGE),t.xp6(3),t.Oqu(e.GROUP_POINT_NAME),t.xp6(3),t.cQ8("routerLink","edit/",e.POINT_ID,"/",r.group_point_id,"/",r.group_point_name,""),t.xp6(3),t.Q6J("disabled",e.isDeleting),t.xp6(1),t.Q6J("ngIf",!e.isDeleting)}}function x(i,o){if(1&i&&(t.TgZ(0,"tr")(1,"td",26)(2,"p"),t._uU(3),t.qZA()()()),2&i){const e=o.$implicit;t.xp6(3),t.Oqu(e.GROUP_POINT_NAME)}}function O(i,o){1&i&&(t.TgZ(0,"span"),t._UZ(1,"i",32),t.qZA())}function S(i,o){if(1&i){const e=t.EpF();t.TgZ(0,"tr")(1,"td",26)(2,"p"),t._uU(3),t.qZA()(),t.TgZ(4,"td",26)(5,"p"),t._uU(6),t.qZA()(),t.TgZ(7,"td",26)(8,"p"),t._uU(9),t.qZA()(),t.TgZ(10,"td",26)(11,"p"),t._uU(12),t.qZA()(),t.TgZ(13,"td")(14,"div",33),t._UZ(15,"img",34),t.qZA()(),t.TgZ(16,"td")(17,"div",27)(18,"button",28),t._UZ(19,"i",29),t.qZA(),t._uU(20,"\xa0 "),t.TgZ(21,"button",30),t.NdJ("click",function(){const d=t.CHM(e).$implicit;return t.oxw().confirmBox("deletebadge",d)}),t.YNc(22,O,2,0,"span",31),t.qZA()()()()}if(2&i){const e=o.$implicit,n=o.index,r=t.oxw();t.xp6(3),t.Oqu(n+1),t.xp6(3),t.Oqu(e.BADGE_NAME),t.xp6(3),t.Oqu(e.START_POINT),t.xp6(3),t.Oqu(e.END_POINT),t.xp6(3),t.s9C("src",r.apiurl+e.PICTURE,t.LSH),t.xp6(3),t.MGl("routerLink","editbadge/",e.BADGE_ID,""),t.xp6(3),t.Q6J("disabled",e.isDeleting),t.xp6(1),t.Q6J("ngIf",!e.isDeleting)}}let y=(()=>{class i{constructor(e,n,r){this.pointService=e,this.groupPoint=n,this.alertService=r,this.subs=new m.Y,this.point=null,this.badge=null,this.group_point=null,this.group_point_id=null,this.group_point_name=null,this.apiurl=v.N.apiUrl+"/image/"}ngOnInit(){this.subs.add(this.pointService.getAllbadge().pipe((0,u.P)()).subscribe(e=>this.badge=e)),this.subs.add(this.groupPoint.getAll().subscribe(e=>{this.group_point=e,this.group_point_id=e[0].GROUP_POINT_ID,this.group_point_name=e[0].GROUP_POINT_NAME,this.subs.add(this.pointService.getByGroup(this.group_point_id).pipe((0,u.P)()).subscribe(n=>this.point=n))}))}delete(e){this.alertService.loading();const n=this.point.find(r=>r.POINT_ID===e.POINT_ID);this.subs.add(this.pointService.delete(e.POINT_ID).pipe((0,u.P)()).subscribe(()=>{n.isDeleting=!0,this.point=this.point.filter(r=>r.POINT_ID!==e.POINT_ID),this.alertService.success()},r=>{this.alertService.error(r)}))}deletebadge(e){this.alertService.loading();const n=this.badge.find(r=>r.BADGE_ID===e.BADGE_ID);this.subs.add(this.pointService.deletebadge(e.BADGE_ID).pipe((0,u.P)()).subscribe(()=>{n.isDeleting=!0,this.badge=this.badge.filter(r=>r.BADGE_ID!==e.BADGE_ID),this.alertService.success()},r=>{this.alertService.error(r)}))}onSelectClick(e){this.group_point_id=e,this.group_point_name=this.group_point.filter(n=>n.GROUP_POINT_ID===parseInt(e))[0].GROUP_POINT_NAME,this.subs.add(this.pointService.getByGroup(e).pipe((0,u.P)()).subscribe(n=>this.point=n))}confirmBox(e,n){let r;"delete"==e&&(r=n.POINT_CATEGORY_NAME),"deletebadge"==e&&(r=n.BADGE_NAME),q().fire({title:"Are you sure want to delete?",text:r,icon:"warning",showCancelButton:!0,confirmButtonText:"Yes, delete it!",cancelButtonText:"Cancel"}).then(d=>{d.value&&("delete"==e&&this.delete(n),"deletebadge"==e&&this.deletebadge(n))})}ngOnDestroy(){this.subs.unsubscribe()}}return i.\u0275fac=function(e){return new(e||i)(t.Y36(f.H),t.Y36(Z.T),t.Y36(h.c9))},i.\u0275cmp=t.Xpm({type:i,selectors:[["app-point"]],decls:93,vars:6,consts:[[1,"title","d-flex","align-items-center","flex-wrap","mb-30"],[1,"mr-40"],[1,"main-btn","primary-btn","btn-hover","btn-sm",3,"routerLink"],[1,"lni","lni-plus","mr-5"],[1,"row"],[1,"col-lg-9"],[1,"card-style","mb-30"],[1,"title","d-flex","flex-wrap","justify-content-between"],[1,"left"],[1,"text-medium","mb-10"],[1,"right"],[1,"select-style-1"],[1,"select-position","select-sm"],[1,"light-bg",3,"change"],[3,"value",4,"ngFor","ngForOf"],[1,"table-wrapper","table-responsive"],[1,"table","striped-table"],[4,"ngFor","ngForOf"],[1,"col-lg-3"],["routerLink","addbadge",1,"main-btn","primary-btn","btn-hover","btn-sm"],[1,"tables-wrapper"],[1,"col-lg-12"],[1,"row","align-items-center"],[1,"col-md-6"],[1,"table"],[3,"value"],[1,"min-width"],[1,"action"],[1,"text-primary",2,"cursor","pointer",3,"routerLink"],[1,"lni","lni-pencil-alt"],[1,"text-danger",3,"disabled","click"],[4,"ngIf"],[1,"lni","lni-trash-can"],[1,"employee-image"],["alt","",3,"src"]],template:function(e,n){1&e&&(t.TgZ(0,"div",0)(1,"h4",1),t._uU(2,"Point Management"),t.qZA(),t.TgZ(3,"button",2),t._UZ(4,"i",3),t._uU(5," Add "),t.qZA()(),t.TgZ(6,"div",4)(7,"div",5)(8,"div",6)(9,"div",7)(10,"div",8)(11,"h6",9),t._uU(12,"Point PerGroup"),t.qZA()(),t.TgZ(13,"div",10)(14,"div",11)(15,"div",12)(16,"select",13),t.NdJ("change",function(d){return n.onSelectClick(d.target.value)}),t.YNc(17,C,2,2,"option",14),t.qZA()()()()(),t._UZ(18,"br"),t.TgZ(19,"div",15)(20,"table",16)(21,"thead")(22,"tr")(23,"th")(24,"h6"),t._uU(25,"#"),t.qZA()(),t.TgZ(26,"th")(27,"h6"),t._uU(28,"Point Name"),t.qZA()(),t.TgZ(29,"th")(30,"h6"),t._uU(31,"Source Table"),t.qZA()(),t.TgZ(32,"th")(33,"h6"),t._uU(34,"Target"),t.qZA()(),t.TgZ(35,"th")(36,"h6"),t._uU(37,"%"),t.qZA()(),t.TgZ(38,"th")(39,"h6"),t._uU(40,"Group"),t.qZA()(),t.TgZ(41,"th")(42,"h6"),t._uU(43,"Action"),t.qZA()()()(),t.TgZ(44,"tbody"),t.YNc(45,U,26,11,"tr",17),t.qZA()()()()(),t.TgZ(46,"div",18)(47,"div",6)(48,"div",15)(49,"table",16)(50,"thead")(51,"tr")(52,"th")(53,"h6"),t._uU(54,"Group Name"),t.qZA()()()(),t.TgZ(55,"tbody"),t.YNc(56,x,4,1,"tr",17),t.qZA()()()()()(),t.TgZ(57,"div",0)(58,"h4",1),t._uU(59,"Badge Management"),t.qZA(),t.TgZ(60,"button",19),t._UZ(61,"i",3),t._uU(62," Add "),t.qZA()(),t.TgZ(63,"div",20)(64,"div",4)(65,"div",21)(66,"div",6)(67,"div",22),t._UZ(68,"div",23),t.qZA(),t.TgZ(69,"div",15)(70,"table",24)(71,"thead")(72,"tr")(73,"th")(74,"h6"),t._uU(75,"#"),t.qZA()(),t.TgZ(76,"th")(77,"h6"),t._uU(78,"Badge Name"),t.qZA()(),t.TgZ(79,"th")(80,"h6"),t._uU(81,"Start Point"),t.qZA()(),t.TgZ(82,"th")(83,"h6"),t._uU(84,"End Point"),t.qZA()(),t.TgZ(85,"th")(86,"h6"),t._uU(87,"Image"),t.qZA()(),t.TgZ(88,"th")(89,"h6"),t._uU(90,"Action"),t.qZA()()()(),t.TgZ(91,"tbody"),t.YNc(92,S,23,8,"tr",17),t.qZA()()()()()()()),2&e&&(t.xp6(3),t.hYB("routerLink","add/",n.group_point_id,"/",n.group_point_name,""),t.xp6(14),t.Q6J("ngForOf",n.group_point),t.xp6(28),t.Q6J("ngForOf",n.point),t.xp6(11),t.Q6J("ngForOf",n.group_point),t.xp6(36),t.Q6J("ngForOf",n.badge))},directives:[p.rH,_.sg,s.YN,s.Kr,_.O5],styles:[""]}),i})();var R=a(1165);function Y(i,o){1&i&&(t.TgZ(0,"h4",21),t._uU(1,"New Point"),t.qZA())}function G(i,o){1&i&&(t.TgZ(0,"h4",21),t._uU(1,"Edit Point"),t.qZA())}function J(i,o){1&i&&(t.TgZ(0,"div"),t._uU(1,"*group point required"),t.qZA())}function B(i,o){if(1&i&&(t.TgZ(0,"div"),t.YNc(1,J,2,0,"div",12),t.qZA()),2&i){const e=t.oxw(2);t.xp6(1),t.Q6J("ngIf",e.f.GROUP_POINT_NAME.errors.required)}}const c=function(i){return{"is-invalid":i}};function Q(i,o){if(1&i&&(t.TgZ(0,"div",10)(1,"label"),t._uU(2,"Group Point"),t.qZA(),t._UZ(3,"input",22),t.YNc(4,B,2,1,"div",12),t.qZA()),2&i){const e=t.oxw();t.xp6(3),t.Q6J("ngClass",t.VKq(2,c,e.submitted&&e.f.GROUP_POINT_NAME.errors)),t.xp6(1),t.Q6J("ngIf",e.submitted&&e.f.GROUP_POINT_NAME.errors)}}function M(i,o){if(1&i&&(t.TgZ(0,"option",27),t._uU(1),t.qZA()),2&i){const e=o.$implicit;t.s9C("value",e.GROUP_POINT_ID),t.xp6(1),t.Oqu(e.GROUP_POINT_NAME)}}function w(i,o){1&i&&(t.TgZ(0,"div",29),t._uU(1,"*group point required"),t.qZA())}function D(i,o){if(1&i&&(t.TgZ(0,"div"),t.YNc(1,w,2,0,"div",28),t.qZA()),2&i){const e=t.oxw(2);t.xp6(1),t.Q6J("ngIf",e.f.GROUP_POINT_ID.errors.required)}}function F(i,o){if(1&i){const e=t.EpF();t.TgZ(0,"div",23)(1,"label"),t._uU(2,"Group Point"),t.qZA(),t.TgZ(3,"div",24)(4,"select",25),t.NdJ("change",function(r){return t.CHM(e),t.oxw().onSelectClick(r.target.value)}),t.YNc(5,M,2,2,"option",26),t.qZA()(),t.YNc(6,D,2,1,"div",12),t.qZA()}if(2&i){const e=t.oxw();t.xp6(4),t.Q6J("ngClass",t.VKq(3,c,e.submitted&&e.f.GROUP_POINT_ID.errors)),t.xp6(1),t.Q6J("ngForOf",e.group_point),t.xp6(1),t.Q6J("ngIf",e.submitted&&e.f.GROUP_POINT_ID.errors)}}function L(i,o){1&i&&(t.TgZ(0,"div",29),t._uU(1,"*Point Name required"),t.qZA())}function k(i,o){if(1&i&&(t.TgZ(0,"div"),t.YNc(1,L,2,0,"div",28),t.qZA()),2&i){const e=t.oxw();t.xp6(1),t.Q6J("ngIf",e.f.POINT_CATEGORY_NAME.errors.required)}}function V(i,o){1&i&&(t.TgZ(0,"div",10)(1,"label"),t._uU(2,"Source Table"),t.qZA(),t._UZ(3,"input",30),t.qZA())}function K(i,o){if(1&i&&(t.TgZ(0,"option",27),t._uU(1),t.qZA()),2&i){const e=o.$implicit;t.s9C("value",e.TABLE_NAME),t.xp6(1),t.Oqu(e.TABLE_NAME)}}function H(i,o){1&i&&(t.TgZ(0,"div",29),t._uU(1,"*table required"),t.qZA())}function $(i,o){if(1&i&&(t.TgZ(0,"div"),t.YNc(1,H,2,0,"div",28),t.qZA()),2&i){const e=t.oxw(2);t.xp6(1),t.Q6J("ngIf",e.f.TABLE_SOURCE.errors.required)}}function j(i,o){if(1&i){const e=t.EpF();t.TgZ(0,"div",23)(1,"label"),t._uU(2,"Source Table"),t.qZA(),t.TgZ(3,"div",24)(4,"select",31),t.NdJ("change",function(r){return t.CHM(e),t.oxw().onSelectClickTable(r.target.value)}),t.YNc(5,K,2,2,"option",26),t.qZA()(),t.YNc(6,$,2,1,"div",12),t.qZA()}if(2&i){const e=t.oxw();t.xp6(4),t.Q6J("ngClass",t.VKq(3,c,e.submitted&&e.f.TABLE_SOURCE.errors)),t.xp6(1),t.Q6J("ngForOf",e.gettable),t.xp6(1),t.Q6J("ngIf",e.submitted&&e.f.TABLE_SOURCE.errors)}}function X(i,o){1&i&&(t.TgZ(0,"div",29),t._uU(1,"*target required"),t.qZA())}function z(i,o){if(1&i&&(t.TgZ(0,"div"),t.YNc(1,X,2,0,"div",28),t.qZA()),2&i){const e=t.oxw();t.xp6(1),t.Q6J("ngIf",e.f.TARGET.errors.required)}}function W(i,o){1&i&&(t.TgZ(0,"div",29),t._uU(1,"*required"),t.qZA())}function tt(i,o){1&i&&(t.TgZ(0,"div",29),t._uU(1,"*max 100"),t.qZA())}function et(i,o){if(1&i&&(t.TgZ(0,"div"),t.YNc(1,W,2,0,"div",28),t.YNc(2,tt,2,0,"div",28),t.qZA()),2&i){const e=t.oxw(2);t.xp6(1),t.Q6J("ngIf",e.f.PERCENTAGE.errors.required),t.xp6(1),t.Q6J("ngIf",e.f.PERCENTAGE.errors.max)}}function it(i,o){1&i&&(t.TgZ(0,"div",29),t._uU(1,"*melebihi total Percentage"),t.qZA())}function nt(i,o){if(1&i&&(t.TgZ(0,"div",10)(1,"label"),t._uU(2,"Percentage"),t.qZA(),t._UZ(3,"input",32),t.YNc(4,et,3,2,"div",12),t.YNc(5,it,2,0,"div",28),t.qZA()),2&i){const e=t.oxw();t.xp6(3),t.Q6J("ngClass",t.VKq(3,c,e.submitted&&e.f.PERCENTAGE.errors)),t.xp6(1),t.Q6J("ngIf",e.submitted&&e.f.PERCENTAGE.errors),t.xp6(1),t.Q6J("ngIf",e.pass)}}function ot(i,o){1&i&&(t.TgZ(0,"div",10)(1,"label"),t._uU(2,"Percentage"),t.qZA(),t._UZ(3,"input",33),t.qZA())}function rt(i,o){1&i&&t._UZ(0,"span")}function st(i,o){if(1&i&&(t.TgZ(0,"tr")(1,"td",34)(2,"p"),t._uU(3),t.qZA()(),t.TgZ(4,"td",34)(5,"p"),t._uU(6),t.qZA()(),t.TgZ(7,"td",34)(8,"p"),t._uU(9),t.qZA()(),t.TgZ(10,"td",34)(11,"p"),t._uU(12),t.qZA()()()),2&i){const e=o.$implicit;t.xp6(3),t.Oqu(e.POINT_CATEGORY_NAME),t.xp6(3),t.Oqu(e.TABLE_SOURCE),t.xp6(3),t.Oqu(e.MAX_POINT),t.xp6(3),t.hij("",e.PERCENTAGE," %")}}let b=(()=>{class i{constructor(e,n,r,d,l,T,It){this.formBuilder=e,this.route=n,this.router=r,this.pointService=d,this.alertService=l,this.groupPoint=T,this.queryviewService=It,this.subs=new m.Y,this.loading=!1,this.submitted=!1,this.data=null,this.gettable=null,this.point=null,this.totalpercentage=0,this.pass=!1,this.temp=0,this.group_point=null,this.groupid=null,this.groupname=null,this.queryviewdata=null,this.type_queryview=null}ngOnInit(){this.id=this.route.snapshot.params.id,this.groupid=this.route.snapshot.params.groupid,this.groupname=this.route.snapshot.params.groupname,this.isAddMode=!this.id,this.form=this.formBuilder.group({POINT_CATEGORY_NAME:["",s.kI.required],TARGET:["",s.kI.required],PERCENTAGE:["",s.kI.required],TABLE_SOURCE:["",s.kI.required],GROUP_POINT_ID:[this.groupid],GROUP_POINT_NAME:[this.groupname]}),this.subs.add(this.queryviewService.getAll().subscribe(e=>this.queryviewdata=e)),this.isAddMode||this.subs.add(this.pointService.getById(this.id).pipe((0,u.P)()).subscribe(e=>{this.form.patchValue(e),this.temp=parseInt(e.PERCENTAGE),this.type_queryview=this.queryviewdata.find(n=>n.QUERY_VIEW_NAME==e.TABLE_SOURCE).TYPE_ID})),this.subs.add(this.pointService.getAlltable(this.groupid).subscribe(e=>this.gettable=e)),this.subs.add(this.pointService.getByGroup(this.groupid).pipe((0,u.P)()).subscribe(e=>{void 0===e||0==e.length?this.point=null:(this.totalpercentage=e.map(n=>parseInt(n.PERCENTAGE)).reduce(function(n,r){return n+r}),this.point=e)})),this.subs.add(this.groupPoint.getAll().subscribe(e=>this.group_point=e))}get f(){return this.form.controls}onSubmit(){if(this.isAddMode){if(this.totalpercentage+this.form.value.PERCENTAGE>=100)return void(this.pass=!0);this.pass=!1}else{if(this.totalpercentage-this.temp+parseInt(this.form.value.PERCENTAGE)>=100)return void(this.pass=!0);this.pass=!1}this.submitted=!0,this.alertService.clear(),!this.form.invalid&&(this.loading=!0,this.isAddMode?this.create():this.update())}create(){this.alertService.loading(),this.subs.add(this.pointService.create(this.form.value).pipe((0,u.P)()).subscribe({next:()=>{this.alertService.success(),this.router.navigate(["/point"],{relativeTo:this.route})},error:e=>{this.alertService.error(e),this.loading=!1}}))}update(){this.alertService.loading(),this.subs.add(this.pointService.update(this.id,this.form.value).pipe((0,u.P)()).subscribe({next:()=>{this.alertService.success(),this.router.navigate(["/point"],{relativeTo:this.route})},error:e=>{this.alertService.error(e),this.loading=!1}}))}onSelectClick(e){const n=this.group_point.filter(r=>r.GROUP_POINT_ID===parseInt(e))[0].GROUP_POINT_NAME;this.form.get("GROUP_POINT_NAME").setValue(n),this.subs.add(this.pointService.getAlltable(e).subscribe(r=>this.gettable=r)),this.subs.add(this.pointService.getByGroup(e).pipe((0,u.P)()).subscribe(r=>{void 0===r||0==r.length?(this.point=null,this.form.get("TABLE_SOURCE").setValue("")):(this.totalpercentage=r.map(d=>parseInt(d.PERCENTAGE)).reduce(function(d,l){return d+l}),this.point=r)}))}onSelectClickTable(e){this.type_queryview=this.queryviewdata.find(n=>n.QUERY_VIEW_NAME==e).TYPE_ID,2==parseInt(this.type_queryview)?this.form.get("PERCENTAGE").setValue("0"):this.form.get("PERCENTAGE").setValue("")}ngOnDestroy(){this.subs.unsubscribe()}}return i.\u0275fac=function(e){return new(e||i)(t.Y36(s.qu),t.Y36(p.gz),t.Y36(p.F0),t.Y36(f.H),t.Y36(h.c9),t.Y36(Z.T),t.Y36(R.b))},i.\u0275cmp=t.Xpm({type:i,selectors:[["app-point-add-edit"]],decls:57,vars:21,consts:[[1,"title","d-flex","align-items-center","flex-wrap","mb-30"],["class","mr-40",4,"ngIf"],["routerLink","/point",1,"main-btn","primary-btn","rounded-btn","btn-hover","btn-sm"],[1,"lni","lni-chevron-left","mr-5"],[1,"row"],[1,"col-lg-6"],[1,"card-style","mb-30"],[3,"formGroup","ngSubmit"],["class","input-style-1",4,"ngIf"],["class","select-style-1",4,"ngIf"],[1,"input-style-1"],["type","text","formControlName","POINT_CATEGORY_NAME",3,"ngClass"],[4,"ngIf"],["type","number","formControlName","TARGET","min","0",3,"ngClass"],[1,"divider"],["routerLink","/point",1,"main-btn","primary-btn-outline","rounded-btn","btn-hover","btn-sm"],[1,"main-btn","primary-btn","rounded-btn","btn-hover","btn-sm",3,"disabled"],[1,"mb-10"],[1,"table-wrapper","table-responsive"],[1,"table","striped-table"],[4,"ngFor","ngForOf"],[1,"mr-40"],["type","text","formControlName","GROUP_POINT_NAME","disabled","",3,"ngClass"],[1,"select-style-1"],[1,"select-position"],["formControlName","GROUP_POINT_ID",3,"ngClass","change"],[3,"value",4,"ngFor","ngForOf"],[3,"value"],["style","color:red",4,"ngIf"],[2,"color","red"],["type","text","formControlName","TABLE_SOURCE","disabled",""],["formControlName","TABLE_SOURCE",3,"ngClass","change"],["type","number","formControlName","PERCENTAGE","min","0","max","100",3,"ngClass"],["type","number","formControlName","PERCENTAGE","min","0","max","100","disabled",""],[1,"min-width"]],template:function(e,n){1&e&&(t.TgZ(0,"div",0),t.YNc(1,Y,2,0,"h4",1),t.YNc(2,G,2,0,"h4",1),t.TgZ(3,"button",2),t._UZ(4,"i",3),t._uU(5," Back "),t.qZA()(),t.TgZ(6,"div",4)(7,"div",5)(8,"div",6)(9,"form",7),t.NdJ("ngSubmit",function(){return n.onSubmit()}),t.YNc(10,Q,5,4,"div",8),t.YNc(11,F,7,5,"div",9),t.TgZ(12,"div",10)(13,"label"),t._uU(14,"Point Name"),t.qZA(),t._UZ(15,"input",11),t.YNc(16,k,2,1,"div",12),t.qZA(),t.YNc(17,V,4,0,"div",8),t.YNc(18,j,7,5,"div",9),t.TgZ(19,"div",10)(20,"label"),t._uU(21,"Target Point"),t.qZA(),t._UZ(22,"input",13),t.YNc(23,z,2,1,"div",12),t.qZA(),t.YNc(24,nt,6,5,"div",8),t.YNc(25,ot,4,0,"div",8),t.TgZ(26,"span",14),t._UZ(27,"hr"),t.qZA(),t.TgZ(28,"div")(29,"button",15),t._uU(30," Cancel "),t.qZA(),t._uU(31,"\xa0 "),t.TgZ(32,"button",16),t.YNc(33,rt,1,0,"span",12),t._uU(34," \xa0Save\xa0 "),t.qZA()()()()(),t.TgZ(35,"div",5)(36,"div",6)(37,"h6",17),t._uU(38),t.qZA(),t.TgZ(39,"div",18)(40,"table",19)(41,"thead")(42,"tr")(43,"th")(44,"h6"),t._uU(45,"Point Name"),t.qZA()(),t.TgZ(46,"th")(47,"h6"),t._uU(48,"Source Table"),t.qZA()(),t.TgZ(49,"th")(50,"h6"),t._uU(51,"Max Point"),t.qZA()(),t.TgZ(52,"th")(53,"h6"),t._uU(54,"Percent %"),t.qZA()()()(),t.TgZ(55,"tbody"),t.YNc(56,st,13,4,"tr",20),t.qZA()()()()()()),2&e&&(t.xp6(1),t.Q6J("ngIf",n.isAddMode),t.xp6(1),t.Q6J("ngIf",!n.isAddMode),t.xp6(7),t.Q6J("formGroup",n.form),t.xp6(1),t.Q6J("ngIf",!n.isAddMode),t.xp6(1),t.Q6J("ngIf",n.isAddMode),t.xp6(4),t.Q6J("ngClass",t.VKq(17,c,n.submitted&&n.f.POINT_CATEGORY_NAME.errors)),t.xp6(1),t.Q6J("ngIf",n.submitted&&n.f.POINT_CATEGORY_NAME.errors),t.xp6(1),t.Q6J("ngIf",!n.isAddMode),t.xp6(1),t.Q6J("ngIf",n.isAddMode),t.xp6(4),t.Q6J("ngClass",t.VKq(19,c,n.submitted&&n.f.TARGET.errors)),t.xp6(1),t.Q6J("ngIf",n.submitted&&n.f.TARGET.errors),t.xp6(1),t.Q6J("ngIf",1===n.type_queryview),t.xp6(1),t.Q6J("ngIf",2===n.type_queryview),t.xp6(7),t.Q6J("disabled",n.loading),t.xp6(1),t.Q6J("ngIf",n.loading),t.xp6(5),t.hij("Total Percentage : ",n.totalpercentage,"%"),t.xp6(18),t.Q6J("ngForOf",n.point))},directives:[_.O5,p.rH,s._Y,s.JL,s.sg,s.Fj,s.JJ,s.u,_.mk,s.EJ,_.sg,s.YN,s.Kr,s.wV,s.qQ,s.Fd],styles:[""]}),i})();var dt=a(328);function at(i,o){1&i&&(t.TgZ(0,"h4",20),t._uU(1,"New Badge"),t.qZA())}function ut(i,o){1&i&&(t.TgZ(0,"h4",20),t._uU(1,"Edit Badge"),t.qZA())}function lt(i,o){1&i&&(t.TgZ(0,"div",22),t._uU(1,"*Badge Name required"),t.qZA())}function pt(i,o){if(1&i&&(t.TgZ(0,"div"),t.YNc(1,lt,2,0,"div",21),t.qZA()),2&i){const e=t.oxw();t.xp6(1),t.Q6J("ngIf",e.f.BADGE_NAME.errors.required)}}function _t(i,o){1&i&&(t.TgZ(0,"div",22),t._uU(1,"*Start Point required"),t.qZA())}function ct(i,o){if(1&i&&(t.TgZ(0,"div"),t.YNc(1,_t,2,0,"div",21),t.qZA()),2&i){const e=t.oxw();t.xp6(1),t.Q6J("ngIf",e.f.START_POINT.errors.required)}}function gt(i,o){1&i&&(t.TgZ(0,"div",22),t._uU(1,"*End Point required"),t.qZA())}function mt(i,o){if(1&i&&(t.TgZ(0,"div"),t.YNc(1,gt,2,0,"div",21),t.qZA()),2&i){const e=t.oxw();t.xp6(1),t.Q6J("ngIf",e.f.END_POINT.errors.required)}}function ft(i,o){1&i&&(t.TgZ(0,"div",28),t._UZ(1,"div",29),t.qZA())}function ht(i,o){1&i&&(t.TgZ(0,"div",30),t._uU(1," Image Uploaded Succesfuly!"),t.qZA())}function Tt(i,o){1&i&&(t.TgZ(0,"div",31),t._uU(1," Image Upload Failed!"),t.qZA())}const At=function(i){return{"background-image":i}};function vt(i,o){if(1&i&&(t.TgZ(0,"div",23),t._UZ(1,"div",24),t.YNc(2,ft,2,0,"div",25),t.YNc(3,ht,2,0,"div",26),t.YNc(4,Tt,2,0,"div",27),t.qZA()),2&i){const e=t.oxw();t.xp6(1),t.Gre("img-preview","fail"===e.selectedFile.status?"-error":"",""),t.Q6J("ngStyle",t.VKq(7,At,"url("+e.selectedFile.src+")")),t.xp6(1),t.Q6J("ngIf",e.selectedFile.pending),t.xp6(1),t.Q6J("ngIf","ok"===e.selectedFile.status),t.xp6(1),t.Q6J("ngIf","fail"===e.selectedFile.status)}}function Zt(i,o){1&i&&(t.TgZ(0,"div",22),t._uU(1,"*Picture required"),t.qZA())}function bt(i,o){if(1&i&&(t.TgZ(0,"div"),t.YNc(1,Zt,2,0,"div",21),t.qZA()),2&i){const e=t.oxw();t.xp6(1),t.Q6J("ngIf",e.f.PICTURE.errors.required)}}function Et(i,o){1&i&&t._UZ(0,"span")}const g=function(i){return{"is-invalid":i}};class Pt{constructor(o,e){this.src=o,this.file=e,this.pending=!1,this.status="init"}}let E=(()=>{class i{constructor(e,n,r,d,l,T){this.formBuilder=e,this.route=n,this.router=r,this.pointService=d,this.alertService=l,this.imageService=T,this.subs=new m.Y,this.loading=!1,this.submitted=!1,this.data=null,this.apiurl=v.N.apiUrl,this.filenameimage=null}ngOnInit(){this.id=this.route.snapshot.params.id,this.isAddMode=!this.id,this.form=this.formBuilder.group({BADGE_NAME:["",s.kI.required],START_POINT:["",s.kI.required],END_POINT:["",s.kI.required],PICTURE:[""]}),this.isAddMode||this.subs.add(this.pointService.getByIdbadge(this.id).pipe((0,u.P)()).subscribe(e=>this.form.patchValue(e)))}get f(){return this.form.controls}onSubmit(){this.submitted=!0,this.alertService.clear(),!this.form.invalid&&(this.loading=!0,this.isAddMode?this.create():this.update())}create(){this.alertService.loading(),this.subs.add(this.pointService.createbadge(this.form.value).pipe((0,u.P)()).subscribe({next:()=>{this.alertService.success(),this.router.navigate(["../"],{relativeTo:this.route})},error:e=>{this.alertService.error(e),this.loading=!1}}))}update(){this.alertService.loading(),this.subs.add(this.pointService.updatebadge(this.id,this.form.value).pipe((0,u.P)()).subscribe({next:()=>{this.alertService.success(),this.router.navigate(["../../"],{relativeTo:this.route})},error:e=>{this.alertService.error(e),this.loading=!1}}))}onSuccess(){this.selectedFile.pending=!1,this.selectedFile.status="ok"}onError(){this.selectedFile.pending=!1,this.selectedFile.status="fail",this.selectedFile.src=""}processFile(e){const n=e.files[0],r=new FileReader;this.form.value.PICTURE&&this.imageService.deleteImage(this.form.value.PICTURE).pipe((0,u.P)()).subscribe(),r.addEventListener("load",d=>{this.selectedFile=new Pt(d.target.result,n),this.imageService.uploadImage(this.selectedFile.file).subscribe(l=>{this.form.get("PICTURE").setValue(l.filename),this.onSuccess()},l=>{this.onError()})}),r.readAsDataURL(n)}ngOnDestroy(){this.subs.unsubscribe()}}return i.\u0275fac=function(e){return new(e||i)(t.Y36(s.qu),t.Y36(p.gz),t.Y36(p.F0),t.Y36(f.H),t.Y36(h.c9),t.Y36(dt.C))},i.\u0275cmp=t.Xpm({type:i,selectors:[["app-badge-add-edit"]],decls:49,vars:22,consts:[[1,"title","d-flex","align-items-center","flex-wrap","mb-30"],["class","mr-40",4,"ngIf"],["routerLink","/point",1,"main-btn","primary-btn","rounded-btn","btn-hover","btn-sm"],[1,"lni","lni-chevron-left","mr-5"],[1,"row"],[3,"formGroup","ngSubmit"],[1,"col-lg-6"],[1,"card-style","mb-30"],[1,"divider"],[1,"input-style-1"],["type","text","formControlName","BADGE_NAME",3,"ngClass"],[4,"ngIf"],["type","number","formControlName","START_POINT",3,"ngClass"],["type","number","formControlName","END_POINT",3,"ngClass"],["type","file","accept","image/*",3,"change"],["imageInput",""],["class","img-preview-container",4,"ngIf"],["type","text","formControlName","PICTURE","disabled","",3,"ngClass"],["routerLink","/point",1,"main-btn","primary-btn-outline","rounded-btn","btn-hover","btn-sm"],[1,"main-btn","primary-btn","rounded-btn","btn-hover","btn-sm",3,"disabled"],[1,"mr-40"],["style","color:red",4,"ngIf"],[2,"color","red"],[1,"img-preview-container"],[3,"ngStyle"],["class","img-loading-overlay",4,"ngIf"],["class","alert alert-success",4,"ngIf"],["class","alert alert-danger",4,"ngIf"],[1,"img-loading-overlay"],[1,"img-spinning-circle"],[1,"alert","alert-success"],[1,"alert","alert-danger"]],template:function(e,n){if(1&e){const r=t.EpF();t.TgZ(0,"div",0),t.YNc(1,at,2,0,"h4",1),t.YNc(2,ut,2,0,"h4",1),t.TgZ(3,"button",2),t._UZ(4,"i",3),t._uU(5,"Back"),t.qZA()(),t.TgZ(6,"div",4)(7,"form",5),t.NdJ("ngSubmit",function(){return n.onSubmit()}),t.TgZ(8,"div",6)(9,"div",7)(10,"h5"),t._uU(11,"Badge Description"),t.qZA(),t.TgZ(12,"span",8),t._UZ(13,"hr"),t.qZA(),t.TgZ(14,"div",9)(15,"label"),t._uU(16,"Badge Name"),t.qZA(),t._UZ(17,"input",10),t.YNc(18,pt,2,1,"div",11),t.qZA(),t.TgZ(19,"div",9)(20,"label"),t._uU(21,"Start Point"),t.qZA(),t._UZ(22,"input",12),t.YNc(23,ct,2,1,"div",11),t.qZA(),t.TgZ(24,"div",9)(25,"label"),t._uU(26,"End Point"),t.qZA(),t._UZ(27,"input",13),t.YNc(28,mt,2,1,"div",11),t.qZA(),t.TgZ(29,"div",9)(30,"label"),t._uU(31,"Select Image"),t.qZA(),t.TgZ(32,"input",14,15),t.NdJ("change",function(){t.CHM(r);const l=t.MAs(33);return n.processFile(l)}),t.qZA()(),t.YNc(34,vt,5,9,"div",16),t.TgZ(35,"div",9)(36,"label"),t._uU(37,"PICTURE"),t.qZA(),t._UZ(38,"input",17),t.YNc(39,bt,2,1,"div",11),t.qZA(),t.TgZ(40,"span",8),t._UZ(41,"hr"),t.qZA(),t.TgZ(42,"div")(43,"button",18),t._uU(44," Cancel "),t.qZA(),t._uU(45,"\xa0 "),t.TgZ(46,"button",19),t.YNc(47,Et,1,0,"span",11),t._uU(48," \xa0Save\xa0 "),t.qZA()()()()()()}2&e&&(t.xp6(1),t.Q6J("ngIf",n.isAddMode),t.xp6(1),t.Q6J("ngIf",!n.isAddMode),t.xp6(5),t.Q6J("formGroup",n.form),t.xp6(10),t.Q6J("ngClass",t.VKq(14,g,n.submitted&&n.f.BADGE_NAME.errors)),t.xp6(1),t.Q6J("ngIf",n.submitted&&n.f.BADGE_NAME.errors),t.xp6(4),t.Q6J("ngClass",t.VKq(16,g,n.submitted&&n.f.START_POINT.errors)),t.xp6(1),t.Q6J("ngIf",n.submitted&&n.f.START_POINT.errors),t.xp6(4),t.Q6J("ngClass",t.VKq(18,g,n.submitted&&n.f.END_POINT.errors)),t.xp6(1),t.Q6J("ngIf",n.submitted&&n.f.END_POINT.errors),t.xp6(6),t.Q6J("ngIf",n.selectedFile),t.xp6(4),t.Q6J("ngClass",t.VKq(20,g,n.submitted&&n.f.PICTURE.errors)),t.xp6(1),t.Q6J("ngIf",n.submitted&&n.f.PICTURE.errors),t.xp6(7),t.Q6J("disabled",n.loading),t.xp6(1),t.Q6J("ngIf",n.loading))},directives:[_.O5,p.rH,s._Y,s.JL,s.sg,s.Fj,s.JJ,s.u,_.mk,s.wV,_.PC],styles:[""]}),i})();const Nt=[{path:"point",component:P,children:[{path:"",component:y},{path:"add/:groupid/:groupname",component:b},{path:"edit/:id/:groupid/:groupname",component:b},{path:"addbadge",component:E},{path:"editbadge/:id",component:E}]}];let qt=(()=>{class i{}return i.\u0275fac=function(e){return new(e||i)},i.\u0275mod=t.oAB({type:i}),i.\u0275inj=t.cJS({imports:[[p.Bz.forChild(Nt)],p.Bz]}),i})(),Ct=(()=>{class i{}return i.\u0275fac=function(e){return new(e||i)},i.\u0275mod=t.oAB({type:i}),i.\u0275inj=t.cJS({imports:[[_.ez,s.UX,qt]]}),i})()}}]);