(window.webpackJsonp=window.webpackJsonp||[]).push([[19],{"6J83":function(e,n,t){"use strict";t.r(n);var c=t("uHuC"),i=t("nIj0"),o=t("j7lP"),a=t("PCNd"),l=t("sEIs"),r=t("EM62"),m=t("2kYt"),s=t("PBFl"),d=t("bFHC"),b=t("jrat");let u=(()=>{class e{constructor(e,n,t,c,i,o,a){this.document=e,this.renderer=n,this.vcr=t,this.cfr=c,this.cdr=i,this.template=o,this.elementsLoaderService=a,this.viewRef=null}ngOnInit(){var e;if(!this.tag||0===this.tag.length||!this.tag.includes("-"))throw new Error(`@angular-extensions/elements - Valid tag has to be specified when using *axLazyElementDynamic directive (use *axLazyElementDynamic="'some-tag'"), got: "${this.tag}"`);const n=this.elementsLoaderService.getElementConfig(this.tag)||{},t=this.elementsLoaderService.options,c=n.loadingComponent||t.loadingComponent;if(this.loadingTemplateRef)this.vcr.createEmbeddedView(this.loadingTemplateRef);else if(c){const e=this.cfr.resolveComponentFactory(c);this.vcr.createComponent(e)}this.elementsLoaderService.loadElement(this.url,this.tag,this.isModule,null===(e=n)||void 0===e?void 0:e.hooks).then(()=>{this.vcr.clear();const e=this.renderer.createElement;this.renderer.createElement=(e,n)=>("ax-lazy-element"===e&&(e=this.tag),this.document.createElement(e)),this.viewRef=this.vcr.createEmbeddedView(this.template),this.renderer.createElement=e,this.cdr.markForCheck()}).catch(e=>{const c=n.errorComponent||t.errorComponent;if(this.vcr.clear(),this.errorTemplateRef)this.vcr.createEmbeddedView(this.errorTemplateRef),this.cdr.markForCheck();else if(c){const e=this.cfr.resolveComponentFactory(c);this.vcr.createComponent(e),this.cdr.markForCheck()}else console.error(`@angular-extensions/elements - Loading of element <${this.tag}> failed, please provide <ng-template #error>Loading failed...</ng-template> and reference it in *axLazyElementDynamic="errorTemplate: error" to display customized error message in place of element\n\n`,e)})}destroyEmbeddedView(){this.viewRef&&!this.viewRef.destroyed&&(this.viewRef.detach(),this.viewRef.destroy(),this.viewRef=null)}}return e.\u0275fac=function(n){return new(n||e)(r.Nb(m.d),r.Nb(r.E),r.Nb(r.O),r.Nb(r.j),r.Nb(r.h),r.Nb(r.L),r.Nb(b.a))},e.\u0275dir=r.Ib({type:e,selectors:[["","axLazyElementDynamic",""]],inputs:{tag:["axLazyElementDynamic","tag"],url:["axLazyElementDynamicUrl","url"],loadingTemplateRef:["axLazyElementDynamicLoadingTemplate","loadingTemplateRef"],errorTemplateRef:["axLazyElementDynamicErrorTemplate","errorTemplateRef"],isModule:["axLazyElementDynamicModule","isModule"]}}),e})();var p=t("k8N0");function g(e,n){if(1&e){const e=r.Ub();r.Tb(0,"div",12),r.Tb(1,"button",13),r.bc("click",(function(n){return r.pc(e),r.fc().example1=!0})),r.Tb(2,"mat-icon"),r.yc(3,"play_arrow"),r.Sb(),r.yc(4," Run "),r.Sb(),r.Sb()}}function y(e,n){1&e&&r.yc(0,"Loading...")}function f(e,n){if(1&e){const e=r.Ub();r.Tb(0,"ax-lazy-element",18),r.bc("click",(function(n){return r.pc(e),r.fc(2).increment1()})),r.yc(1," Increment "),r.Sb()}if(2&e){const e=r.fc(2);r.kc("outlined",e.buttonTypeIsOutlined)("raised",!e.buttonTypeIsOutlined)}}function h(e,n){if(1&e){const e=r.Ub();r.Tb(0,"div",12),r.wc(1,y,1,0,"ng-template",null,14,r.xc),r.wc(3,f,2,2,"ax-lazy-element",15),r.Tb(4,"p"),r.yc(5),r.Sb(),r.Tb(6,"div",16),r.Tb(7,"span"),r.yc(8,"Raised button"),r.Sb(),r.Tb(9,"mat-slide-toggle",17),r.bc("ngModelChange",(function(n){return r.pc(e),r.fc().buttonTypeIsOutlined=n})),r.Sb(),r.Tb(10,"span"),r.yc(11,"Outline button"),r.Sb(),r.Sb(),r.Sb()}if(2&e){const e=r.oc(2),n=r.fc();r.Bb(3),r.kc("axLazyElementDynamic","mwc-button")("axLazyElementDynamicUrl","https://unpkg.com/@material/mwc-button@0.6.0/mwc-button.js?module")("axLazyElementDynamicLoadingTemplate",e)("axLazyElementDynamicModule",!0),r.Bb(2),r.Ac("Counter: ",n.counter1,""),r.Bb(4),r.kc("ngModel",n.buttonTypeIsOutlined)}}function w(e,n){if(1&e){const e=r.Ub();r.Tb(0,"div",12),r.Tb(1,"button",13),r.bc("click",(function(n){return r.pc(e),r.fc().example2=!0})),r.Tb(2,"mat-icon"),r.yc(3,"play_arrow"),r.Sb(),r.yc(4," Run "),r.Sb(),r.Sb()}}function x(e,n){1&e&&r.yc(0,"Loading...")}function T(e,n){if(1&e){const e=r.Ub();r.Tb(0,"ax-lazy-element",20),r.bc("click",(function(n){return r.pc(e),r.fc(2).increment2()})),r.yc(1," Increment "),r.Sb()}}function k(e,n){if(1&e&&(r.Tb(0,"div",12),r.wc(1,x,1,0,"ng-template",null,14,r.xc),r.wc(3,T,2,0,"ax-lazy-element",19),r.Tb(4,"p"),r.yc(5),r.Sb(),r.Sb()),2&e){const e=r.oc(2),n=r.fc();r.Bb(3),r.kc("axLazyElementDynamic","wired-button")("axLazyElementDynamicLoadingTemplate",e),r.Bb(2),r.Ac("Counter: ",n.counter2,"")}}function v(e,n){if(1&e){const e=r.Ub();r.Tb(0,"div",12),r.Tb(1,"button",13),r.bc("click",(function(n){return r.pc(e),r.fc().example3=!0})),r.Tb(2,"mat-icon"),r.yc(3,"play_arrow"),r.Sb(),r.yc(4," Run "),r.Sb(),r.Sb()}}function M(e,n){if(1&e&&r.yc(0),2&e){const e=r.fc().$implicit;r.Ac("Loading <",e.tag,">...\xa0\xa0")}}function C(e,n){if(1&e){const e=r.Ub();r.Tb(0,"ax-lazy-element",24),r.bc("click",(function(n){r.pc(e);const t=r.fc().$implicit;return r.fc(2).performAction(t.actionName)})),r.yc(1),r.Sb()}if(2&e){const e=r.fc().$implicit;r.Bb(1),r.Ac(" ",e.content," ")}}function O(e,n){if(1&e&&(r.Rb(0),r.wc(1,M,1,1,"ng-template",null,14,r.xc),r.wc(3,C,2,1,"ax-lazy-element",23),r.Qb()),2&e){const e=n.$implicit,t=r.oc(2);r.Bb(3),r.kc("axLazyElementDynamic",e.tag)("axLazyElementDynamicUrl",e.url)("axLazyElementDynamicModule",e.isModule)("axLazyElementDynamicLoadingTemplate",t)}}function E(e,n){if(1&e&&(r.Tb(0,"div",12),r.Tb(1,"div",21),r.wc(2,O,4,4,"ng-container",22),r.Sb(),r.Tb(3,"p"),r.yc(4),r.Sb(),r.Sb()),2&e){const e=r.fc();r.Bb(2),r.kc("ngForOf",e.dynamicConfigs),r.Bb(2),r.Ac("Counter: ",e.counter3,"")}}let S=(()=>{class e{constructor(){this.example1=!1,this.example2=!1,this.example3=!1,this.codeExample1=L,this.codeExample2module=_,this.codeExample2html=P,this.codeExample3html=z,this.buttonTypeIsOutlined=!0,this.counter1=0,this.counter2=0,this.counter3=0,this.dynamicConfigs=[{tag:"mwc-button",url:"https://unpkg.com/@material/mwc-button@0.6.0/mwc-button.js?module",isModule:!0,content:"Increment",actionName:"increment"},{tag:"wired-button",url:"https://unpkg.com/wired-elements@1.0.0/dist/wired-elements.bundled.js",content:"Decrement",actionName:"decrement"},{tag:"mwc-icon",url:"https://unpkg.com/@material/mwc-icon@0.6.0/mwc-icon.js?module",content:"replay",actionName:"reset"}]}ngOnInit(){}increment1(){this.counter1++}increment2(){this.counter2++}performAction(e){"increment"===e&&this.counter3++,"decrement"===e&&this.counter3--,"reset"===e&&(this.counter3=0)}}return e.\u0275fac=function(n){return new(n||e)},e.\u0275cmp=r.Hb({type:e,selectors:[["demo-dynamic"]],decls:87,vars:10,consts:[[1,"quick-nav"],["routerLink",".","fragment","dynamic-element-tag"],["routerLink",".","fragment","module-pre-configuration"],["routerLink",".","fragment","multiple-different-dynamic-elements"],[1,"wrapper"],["id","dynamic-element-tag"],[1,"content"],["class","implementation",4,"ngIf"],[1,"description"],[3,"highlight"],["id","module-pre-configuration"],["id","multiple-different-dynamic-elements"],[1,"implementation"],["mat-flat-button","","color","accent",3,"click"],["loading",""],[3,"outlined","raised","click",4,"axLazyElementDynamic","axLazyElementDynamicUrl","axLazyElementDynamicLoadingTemplate","axLazyElementDynamicModule"],[1,"controls"],[3,"ngModel","ngModelChange"],[3,"outlined","raised","click"],[3,"click",4,"axLazyElementDynamic","axLazyElementDynamicLoadingTemplate"],[3,"click"],[1,"actions"],[4,"ngFor","ngForOf"],["raised","",3,"click",4,"axLazyElementDynamic","axLazyElementDynamicUrl","axLazyElementDynamicModule","axLazyElementDynamicLoadingTemplate"],["raised","",3,"click"]],template:function(e,n){1&e&&(r.Tb(0,"div",0),r.Tb(1,"h3"),r.yc(2,"Quick navigation"),r.Sb(),r.Tb(3,"ul"),r.Tb(4,"li"),r.Tb(5,"a",1),r.yc(6,"Dynamic element tag"),r.Sb(),r.Sb(),r.Tb(7,"li"),r.Tb(8,"a",2),r.yc(9,"Dynamic element tag with module pre-configuration"),r.Sb(),r.Sb(),r.Tb(10,"li"),r.Tb(11,"a",3),r.yc(12,"Multiple different dynamic elements"),r.Sb(),r.Sb(),r.Sb(),r.Sb(),r.Tb(13,"div",4),r.Tb(14,"h1"),r.yc(15,"Dynamic"),r.Sb(),r.Tb(16,"p"),r.yc(17," These example explain how to configure element tag dynamically using "),r.Tb(18,"code"),r.yc(19,"*axLazyElementDynamic"),r.Sb(),r.yc(20," directive. This can be very useful if we want to retrieve element configuration from somewhere else (for example a backend or a json config file). Such a setup can enable us to develop fully dynamic and configurable microfrontend applications! "),r.Sb(),r.Tb(21,"h2",5),r.yc(22,"Dynamic element tag"),r.Sb(),r.Tb(23,"div",6),r.wc(24,g,5,0,"div",7),r.wc(25,h,12,6,"div",7),r.Tb(26,"div",8),r.Tb(27,"p"),r.yc(28," In this example we're loading "),r.Tb(29,"code"),r.yc(30,"<mwc-button>"),r.Sb(),r.yc(31," using the "),r.Tb(32,"code"),r.yc(33,"*axLazyElementDynamic"),r.Sb(),r.yc(34," directive. Please notice that the original HTML element used in the template is "),r.Tb(35,"code"),r.yc(36,"<ax-lazy-element>"),r.Sb(),r.yc(37," and we're specifying the desired tag as the first parameter of "),r.Tb(38,"code"),r.yc(39,"*axLazyElementDynamic='mwc-button'"),r.Sb(),r.yc(40,". Please, feel free to open your browsers dev tools to check resulting element tag! "),r.Sb(),r.Ob(41,"pre",9),r.Tb(42,"p"),r.yc(43," You might be asking why do we use "),r.Tb(44,"code"),r.yc(45,"<ax-lazy-element>"),r.Sb(),r.yc(46,". This is not a real custom element and that's exactly the point. We can provide any valid and unused custom element name. That way Angular won't complain if we use custom property and event binding which would be the case if we tried to bind "),r.Tb(47,"code"),r.yc(48,'<div [custom]="value">'),r.Sb(),r.yc(49,"... "),r.Sb(),r.Sb(),r.Sb(),r.Tb(50,"h2",10),r.yc(51," Dynamic element tag with module pre-configuration "),r.Sb(),r.Tb(52,"div",6),r.wc(53,w,5,0,"div",7),r.wc(54,k,6,3,"div",7),r.Tb(55,"div",8),r.Tb(56,"p"),r.yc(57," The "),r.Tb(58,"code"),r.yc(59,"*axLazyElementDynamic"),r.Sb(),r.yc(60," directive works also with the pre-configured "),r.Tb(61,"code"),r.yc(62,"LazyElementsModule"),r.Sb(),r.yc(63,". That way we don't have to specify url of the element in the template. Please notice that the original HTML element used in the template is "),r.Tb(64,"code"),r.yc(65,"<div>"),r.Sb(),r.yc(66," and we're specifying the desired tag as the first parameter of "),r.Tb(67,"code"),r.yc(68,"*axLazyElementDynamic='wired-button'"),r.Sb(),r.yc(69,". Please, feel free to open your browsers dev tools to check resulting element tag! "),r.Sb(),r.Ob(70,"pre",9),r.Ob(71,"pre",9),r.Sb(),r.Sb(),r.Tb(72,"h2",11),r.yc(73," Multiple different dynamic elements "),r.Sb(),r.Tb(74,"div",6),r.wc(75,v,5,0,"div",7),r.wc(76,E,5,2,"div",7),r.Tb(77,"div",8),r.Tb(78,"p"),r.yc(79," The "),r.Tb(80,"code"),r.yc(81,"*axLazyElementDynamic"),r.Sb(),r.yc(82," directive works also with "),r.Tb(83,"code"),r.yc(84,"*ngFor"),r.Sb(),r.yc(85," directive to render fully dynamic configuration which could have been retrieved from backend during the runtime in comparison to hard-coded into the template during build time! Please, feel free to open your browsers dev tools to check resulting element tags! "),r.Sb(),r.Ob(86,"pre",9),r.Sb(),r.Sb(),r.Sb()),2&e&&(r.Bb(24),r.kc("ngIf",!n.example1),r.Bb(1),r.kc("ngIf",n.example1),r.Bb(16),r.kc("highlight",n.codeExample1),r.Bb(12),r.kc("ngIf",!n.example2),r.Bb(1),r.kc("ngIf",n.example2),r.Bb(16),r.kc("highlight",n.codeExample2html),r.Bb(1),r.kc("highlight",n.codeExample2module),r.Bb(4),r.kc("ngIf",!n.example3),r.Bb(1),r.kc("ngIf",n.example3),r.Bb(10),r.kc("highlight",n.codeExample3html))},directives:[l.c,m.k,c.b,s.b,d.a,u,p.a,i.e,i.f,m.j],styles:["[_nghost-%COMP%]{position:relative}.quick-nav[_ngcontent-%COMP%]{display:none;position:fixed;top:105px;left:75%;right:0;padding:0 20px}.quick-nav[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]{font-size:16px;opacity:.5}.quick-nav[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]{list-style-type:none}.quick-nav[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{color:#000}.quick-nav[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:focus, .quick-nav[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover{color:#d32f2f}.wrapper[_ngcontent-%COMP%], .wrapper[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]{display:-webkit-box;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;flex-direction:column}.wrapper[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]{margin:0 0 50px}.wrapper[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .implementation[_ngcontent-%COMP%]{display:-webkit-box;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;flex-direction:column;-webkit-box-align:center;align-items:center;-webkit-box-pack:center;justify-content:center;-webkit-box-flex:1;flex:1;margin:0 20px 20px 0;border:2px solid #eee;padding:20px}.wrapper[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .implementation[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{margin:10px 0 0}.wrapper[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .implementation[_ngcontent-%COMP%]   wired-button[_ngcontent-%COMP%]{padding:10px 15px}.wrapper[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .implementation[_ngcontent-%COMP%]   .actions[_ngcontent-%COMP%]{display:-webkit-box;display:flex;-webkit-box-align:center;align-items:center}.wrapper[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .implementation[_ngcontent-%COMP%]   .actions[_ngcontent-%COMP%] > *[_ngcontent-%COMP%]{margin:10px}.wrapper[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .description[_ngcontent-%COMP%]{-webkit-box-flex:1.5;flex:1.5}.wrapper[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .controls[_ngcontent-%COMP%]{display:-webkit-box;display:flex;-webkit-box-align:center;align-items:center}.wrapper[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .controls[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{padding:20px}.responsive-large[_nghost-%COMP%]   .quick-nav[_ngcontent-%COMP%], .responsive-large   [_nghost-%COMP%]   .quick-nav[_ngcontent-%COMP%]{display:block}.responsive-large[_nghost-%COMP%]   .wrapper[_ngcontent-%COMP%], .responsive-large   [_nghost-%COMP%]   .wrapper[_ngcontent-%COMP%]{width:60%}"]}),e})();const L='\x3c!-- url = \'https://unpkg.com/@material/mwc-button@0.6.0/mwc-button.js?module\' --\x3e;\n<ax-lazy-element *axLazyElementDynamic="\'mwc-button\', url: url; module: true"\n     [outlined]="true"\n     (click)="increment()">\n  Increment\n</ax-lazy-element>\n\n\x3c!-- will be rendered as ...\n  <mwc-button outlined (click)="increment()">Increment</mwc-button>\n--\x3e',P='<ax-lazy-element *axLazyElementDynamic="\'wired-button\'" (click)="increment()">\n  Increment\n</ax-lazy-element>\n\n\x3c!-- will be rendered as ...\n  <wired-button (click)="increment()">Increment</wired-button>\n--\x3e',_="// pre-configured LazyElementsModule\nconst options: LazyElementModuleOptions = {\n  elementConfigs: [\n    { tag: 'wired-button', url: 'https://unpkg.com/wired-elements@1.0.0/dist/wired-elements.bundled.js' }\n  ]\n};\n\n@NgModule({\n  schemas: [CUSTOM_ELEMENTS_SCHEMA],\n  declarations: [FeatureComponent],\n  imports: [\n    LazyElementsModule.forFeature(options),\n  ]\n})\nexport class FeatureModule {}",z="<ng-container *ngFor=\"let c of dynamicConfigs\">\n  <ax-lazy-element\n    *axLazyElementDynamic=\"c.tag; url: c.url; module: c.isModule\"\n    (click)=\"performAction(c.actionName)\"\n    raised\n  >\n    {{ c.content }}\n  </ax-lazy-element>\n</ng-container>\n\n\x3c!--\ndynamicConfigs = [\n  {\n    tag: 'mwc-button',\n    url: 'https://unpkg.com/@material/mwc-button@0.6.0/mwc-button.js?module',\n    isModule: true,\n    content: 'Increment',\n    actionName: 'increment'\n  },\n  {\n    tag: 'wired-button',\n    url: 'https://unpkg.com/wired-elements@1.0.0/dist/wired-elements.bundled.js',\n    content: 'Decrement',\n    actionName: 'decrement'\n  },\n  {\n    tag: 'mwc-icon',\n    url: 'https://unpkg.com/@material/mwc-icon@0.6.0/mwc-icon.js?module',\n    content: 'replay',\n    actionName: 'reset'\n  }\n];\n--\x3e\n",D=[{path:"",component:S}];let I=(()=>{class e{}return e.\u0275mod=r.Lb({type:e}),e.\u0275inj=r.Kb({factory:function(n){return new(n||e)},imports:[[l.d.forChild(D)],l.d]}),e})();t.d(n,"DynamicModule",(function(){return R}));const B={elementConfigs:[{tag:"wired-button",url:"https://unpkg.com/wired-elements@1.0.0/dist/wired-elements.bundled.js"}]};let R=(()=>{class e{}return e.\u0275mod=r.Lb({type:e}),e.\u0275inj=r.Kb({factory:function(n){return new(n||e)},imports:[[c.c,i.b,o.a.forFeature(B),a.a,I]]}),e})()}}]);