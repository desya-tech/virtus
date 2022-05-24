"use strict";(self.webpackChunkappdemo_ng12=self.webpackChunkappdemo_ng12||[]).push([[647],{647:function(e,t,i){i.r(t),i.d(t,{RuleManagementModule:function(){return w}});var n=i(38583),r=i(51909),s=i(90665),o=i(28049),l=i(69545),a=i(88720),u=i(51382),c=i(13657);function g(e,t){1&e&&(a.TgZ(0,"div"),a.TgZ(1,"h4",23),a._uU(2,"New Rule"),a.qZA(),a.qZA())}function d(e,t){1&e&&(a.TgZ(0,"h4",23),a._uU(1,"Edit Rule"),a.qZA())}function Z(e,t){1&e&&(a.TgZ(0,"div",25),a._uU(1,"*rule name required"),a.qZA())}function h(e,t){if(1&e&&(a.TgZ(0,"div"),a.YNc(1,Z,2,0,"div",24),a.qZA()),2&e){const e=a.oxw();a.xp6(1),a.Q6J("ngIf",e.f.RULE_NAME.errors.required)}}function p(e,t){1&e&&a._UZ(0,"span")}const m=function(e){return{"is-invalid":e}};let A=(()=>{class e{constructor(e,t,i,n,r){this.formBuilder=e,this.route=t,this.router=i,this.ruleService=n,this.alertService=r,this.subs=new l.Y,this.loading=!1,this.submitted=!1}ngOnInit(){this.id=this.route.snapshot.params.id,this.isAddMode=!this.id,this.form=this.formBuilder.group({RULE_NAME:["",s.kI.required],USER_MGMT:[""],ACTIVITY_MGMT:[""],LEADERBOARDS_PAGE:[""],CONTENT_MGMT:[""],PIPELINES_PAGE:[""],REVENUE_LEADERBOARD:[""]}),this.isAddMode||this.subs.add(this.ruleService.getByID(this.id).subscribe(e=>this.form.patchValue(e)))}get f(){return this.form.controls}onSubmit(){this.submitted=!0,this.alertService.clear(),!this.form.invalid&&(this.loading=!0,this.isAddMode?this.createRole():this.updateRule())}createRole(){this.alertService.loading(),this.subs.add(this.ruleService.register(this.form.value).pipe((0,o.P)()).subscribe({next:()=>{this.alertService.success(),this.router.navigate(["../"],{relativeTo:this.route})},error:e=>{this.alertService.error(e),this.loading=!1}}))}updateRule(){this.alertService.loading(),this.subs.add(this.ruleService.update(this.id,this.form.value).pipe((0,o.P)()).subscribe({next:()=>{this.alertService.success(),this.router.navigate(["../../"],{relativeTo:this.route})},error:e=>{this.alertService.error(e),this.loading=!1}}))}getRandomInt(e){return Math.floor(Math.random()*e)}ngOnDestroy(){this.subs.unsubscribe()}}return e.\u0275fac=function(t){return new(t||e)(a.Y36(s.qu),a.Y36(r.gz),a.Y36(r.F0),a.Y36(u.P),a.Y36(c.c))},e.\u0275cmp=a.Xpm({type:e,selectors:[["ng-component"]],decls:59,vars:9,consts:[[1,"title","d-flex","align-items-center","flex-wrap","mb-30"],[4,"ngIf","ngIfElse"],["editMode",""],["routerLink","/rule-management",1,"main-btn","primary-btn","rounded-btn","btn-hover","btn-sm"],[1,"lni","lni-chevron-left","mr-5"],[1,"row"],[3,"formGroup","ngSubmit"],[1,"col-lg-6"],[1,"card-style","mb-30"],[1,"divider"],[1,"input-style-1"],["type","text","formControlName","RULE_NAME",3,"ngClass"],[4,"ngIf"],[1,"form-check","form-switch","toggle-switch","mb-30"],["formControlName","USER_MGMT","type","checkbox","id","toggleSwitch1",1,"form-check-input"],["for","toggleSwitch1",1,"form-check-label"],["formControlName","ACTIVITY_MGMT","type","checkbox","id","toggleSwitch1",1,"form-check-input"],["formControlName","CONTENT_MGMT","type","checkbox","id","toggleSwitch1",1,"form-check-input"],["formControlName","LEADERBOARDS_PAGE","type","checkbox","id","toggleSwitch1",1,"form-check-input"],["formControlName","PIPELINES_PAGE","type","checkbox","id","toggleSwitch1",1,"form-check-input"],["formControlName","REVENUE_LEADERBOARD","type","checkbox","id","toggleSwitch1",1,"form-check-input"],["routerLink","/rule-management",1,"main-btn","primary-btn-outline","rounded-btn","btn-hover","btn-sm"],[1,"main-btn","primary-btn","rounded-btn","btn-hover","btn-sm",3,"disabled"],[1,"mr-40"],["style","color:red",4,"ngIf"],[2,"color","red"]],template:function(e,t){if(1&e&&(a.TgZ(0,"div",0),a.YNc(1,g,3,0,"div",1),a.YNc(2,d,2,0,"ng-template",null,2,a.W1O),a.TgZ(4,"button",3),a._UZ(5,"i",4),a._uU(6,"Back"),a.qZA(),a.qZA(),a.TgZ(7,"div",5),a.TgZ(8,"form",6),a.NdJ("ngSubmit",function(){return t.onSubmit()}),a.TgZ(9,"div",7),a.TgZ(10,"div",8),a.TgZ(11,"h5"),a._uU(12,"Rule Description"),a.qZA(),a.TgZ(13,"span",9),a._UZ(14,"hr"),a.qZA(),a.TgZ(15,"div",10),a.TgZ(16,"label"),a._uU(17," Role Name "),a.qZA(),a._UZ(18,"input",11),a.YNc(19,h,2,1,"div",12),a.qZA(),a.TgZ(20,"span",9),a._UZ(21,"hr"),a.qZA(),a.TgZ(22,"h5"),a._uU(23,"Rule Privileges"),a.qZA(),a.TgZ(24,"span",9),a._UZ(25,"hr"),a.qZA(),a.TgZ(26,"div",13),a._UZ(27,"input",14),a.TgZ(28,"label",15),a._uU(29,"User Management"),a.qZA(),a.qZA(),a.TgZ(30,"div",13),a._UZ(31,"input",16),a.TgZ(32,"label",15),a._uU(33,"Activity Management"),a.qZA(),a.qZA(),a.TgZ(34,"div",13),a._UZ(35,"input",17),a.TgZ(36,"label",15),a._uU(37,"Content Management"),a.qZA(),a.qZA(),a.TgZ(38,"div",13),a._UZ(39,"input",18),a.TgZ(40,"label",15),a._uU(41,"Access Leaderboards"),a.qZA(),a.qZA(),a.TgZ(42,"div",13),a._UZ(43,"input",19),a.TgZ(44,"label",15),a._uU(45,"View Pipelines"),a.qZA(),a.qZA(),a.TgZ(46,"div",13),a._UZ(47,"input",20),a.TgZ(48,"label",15),a._uU(49,"View BP's Revenue Leaderboards"),a.qZA(),a.qZA(),a.TgZ(50,"span",9),a._UZ(51,"hr"),a.qZA(),a.TgZ(52,"div"),a.TgZ(53,"button",21),a._uU(54," Cancel "),a.qZA(),a._uU(55,"\xa0 "),a.TgZ(56,"button",22),a.YNc(57,p,1,0,"span",12),a._uU(58," \xa0Save\xa0 "),a.qZA(),a.qZA(),a.qZA(),a.qZA(),a.qZA(),a.qZA()),2&e){const e=a.MAs(3);a.xp6(1),a.Q6J("ngIf",!t.id)("ngIfElse",e),a.xp6(7),a.Q6J("formGroup",t.form),a.xp6(10),a.Q6J("ngClass",a.VKq(7,m,t.submitted&&t.f.RULE_NAME.errors)),a.xp6(1),a.Q6J("ngIf",t.submitted&&t.f.RULE_NAME.errors),a.xp6(37),a.Q6J("disabled",t.loading),a.xp6(1),a.Q6J("ngIf",t.loading)}},directives:[n.O5,r.rH,s._Y,s.JL,s.sg,s.Fj,s.JJ,s.u,n.mk,s.Wl],encapsulation:2}),e})(),f=(()=>{class e{}return e.\u0275fac=function(t){return new(t||e)},e.\u0275cmp=a.Xpm({type:e,selectors:[["ng-component"]],decls:1,vars:0,template:function(e,t){1&e&&a._UZ(0,"router-outlet")},directives:[r.lC],encapsulation:2}),e})();var b=i(86314),T=i.n(b),v=i(72553),q=i(72533),_=i(44981);function U(e,t){1&e&&(a.TgZ(0,"span"),a._UZ(1,"i",29),a.qZA())}function E(e,t){if(1&e){const e=a.EpF();a.TgZ(0,"tr"),a.TgZ(1,"td"),a.TgZ(2,"div",23),a.TgZ(3,"button",24),a._UZ(4,"i",25),a.qZA(),a._uU(5,"\xa0 "),a.TgZ(6,"button",26),a.NdJ("click",function(){const t=a.CHM(e).$implicit;return a.oxw().confirmBox("delete",t)}),a.YNc(7,U,2,0,"span",27),a.qZA(),a.qZA(),a.qZA(),a.TgZ(8,"td",28),a.TgZ(9,"p"),a._uU(10),a.qZA(),a.qZA(),a.qZA()}if(2&e){const e=t.$implicit;a.xp6(3),a.MGl("routerLink","edit/",e.RULE_ID,""),a.xp6(3),a.Q6J("disabled",e.isDeleting),a.xp6(1),a.Q6J("ngIf",!e.isDeleting),a.xp6(3),a.Oqu(e.RULE_NAME)}}const x=function(e,t){return{itemsPerPage:e,currentPage:t}},R=[{path:"rule-management",component:f,children:[{path:"",component:(()=>{class e{constructor(e,t){this.service=e,this.alertService=t,this.rules=null,this.subs=new l.Y,this.p=1,this.count=10,this.countdata=null}ngOnInit(){this.subs.add(this.service.getAll().subscribe(e=>{this.rules=e,this.countdata=this.rules.length}))}deleteRule(e){this.alertService.loading();const t=this.rules.find(t=>t.RULE_ID===e.RULE_ID);this.subs.add(this.service.delete(e.RULE_ID).subscribe(()=>{t.isDeleting=!0,this.rules=this.rules.filter(t=>t.RULE_ID!==e.RULE_ID),this.countdata=this.rules.length,this.alertService.success()},e=>{this.alertService.error(e)}))}confirmBox(e,t){"delete"==e&&T().fire({title:"Are you sure want to delete?",text:t.RULE_NAME,icon:"warning",showCancelButton:!0,confirmButtonText:"Yes!",cancelButtonText:"Cancel"}).then(e=>{e.value&&this.deleteRule(t)})}ngOnDestroy(){this.subs.unsubscribe()}}return e.\u0275fac=function(t){return new(t||e)(a.Y36(u.P),a.Y36(v.c9))},e.\u0275cmp=a.Xpm({type:e,selectors:[["app-rule-management"]],decls:44,vars:12,consts:[[1,"title","d-flex","align-items-center","flex-wrap","mb-30"],[1,"mr-40"],["routerLink","add",1,"main-btn","primary-btn","btn-hover","btn-sm"],[1,"lni","lni-plus","mr-5"],[1,"row"],[1,"col-lg-12"],[1,"card-style","mb-30"],[1,"row","align-items-center"],[1,"col-md-6"],[1,"d-flex","flex-wrap","justify-content-between","align-items-center","py-3"],[1,"left"],[1,"right"],[1,"table-search","d-flex"],["action","#"],["type","text","name","something","placeholder","Search...",3,"ngModel","ngModelChange"],[1,"lni","lni-search-alt"],[1,"table-wrapper","table-responsive"],[1,"table"],[4,"ngFor","ngForOf"],[1,"pt-10","d-flex","flex-wrap","justify-content-between"],[1,"text-sm","text-gray"],[1,"text-right"],[3,"pageChange"],[1,"action"],[1,"text-primary",2,"cursor","pointer",3,"routerLink"],[1,"lni","lni-pencil-alt"],[1,"text-danger",3,"disabled","click"],[4,"ngIf"],[1,"min-width"],[1,"lni","lni-trash-can"]],template:function(e,t){1&e&&(a.TgZ(0,"div",0),a.TgZ(1,"h4",1),a._uU(2,"Rule Management"),a.qZA(),a.TgZ(3,"button",2),a._UZ(4,"i",3),a._uU(5," Add "),a.qZA(),a.qZA(),a.TgZ(6,"div",4),a.TgZ(7,"div",5),a.TgZ(8,"div",6),a.TgZ(9,"div",7),a._UZ(10,"div",8),a.qZA(),a.TgZ(11,"div",9),a.TgZ(12,"div",10),a.TgZ(13,"p"),a._uU(14,"Show "),a.TgZ(15,"span"),a._uU(16,"10"),a.qZA(),a._uU(17," entries"),a.qZA(),a.qZA(),a.TgZ(18,"div",11),a.TgZ(19,"div",12),a.TgZ(20,"form",13),a.TgZ(21,"input",14),a.NdJ("ngModelChange",function(e){return t.filterdata=e}),a.qZA(),a.TgZ(22,"button"),a._UZ(23,"i",15),a.qZA(),a.qZA(),a.qZA(),a.qZA(),a.qZA(),a.TgZ(24,"div",16),a.TgZ(25,"table",17),a.TgZ(26,"thead"),a.TgZ(27,"tr"),a.TgZ(28,"th"),a.TgZ(29,"h6"),a._uU(30,"Action"),a.qZA(),a.qZA(),a.TgZ(31,"th"),a.TgZ(32,"h6"),a._uU(33,"Rule Name"),a.qZA(),a.qZA(),a.qZA(),a.qZA(),a.TgZ(34,"tbody"),a.YNc(35,E,11,4,"tr",18),a.ALo(36,"paginate"),a.ALo(37,"filter"),a.qZA(),a.qZA(),a.qZA(),a.TgZ(38,"div",19),a.TgZ(39,"div",10),a.TgZ(40,"p",20),a._uU(41),a.qZA(),a.qZA(),a.TgZ(42,"div",21),a.TgZ(43,"pagination-controls",22),a.NdJ("pageChange",function(e){return t.p=e}),a.qZA(),a.qZA(),a.qZA(),a.qZA(),a.qZA(),a.qZA()),2&e&&(a.xp6(21),a.Q6J("ngModel",t.filterdata),a.xp6(14),a.Q6J("ngForOf",a.xi3(36,3,a.xi3(37,6,t.rules,t.filterdata),a.WLB(9,x,t.count,t.p))),a.xp6(6),a.hij("Total ",t.countdata," Rule Data"))},directives:[r.rH,s._Y,s.JL,s.F,s.Fj,s.JJ,s.On,n.sg,q.LS,n.O5],pipes:[q._s,_.Z],styles:[""]}),e})()},{path:"add",component:A},{path:"edit/:id",component:A}]}];let S=(()=>{class e{}return e.\u0275fac=function(t){return new(t||e)},e.\u0275mod=a.oAB({type:e}),e.\u0275inj=a.cJS({imports:[[r.Bz.forChild(R)],r.Bz]}),e})(),w=(()=>{class e{}return e.\u0275fac=function(t){return new(t||e)},e.\u0275mod=a.oAB({type:e}),e.\u0275inj=a.cJS({imports:[[n.ez,S,s.UX,s.u5,q.JX,_.h]]}),e})()}}]);