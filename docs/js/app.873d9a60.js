(function(e){function t(t){for(var r,a,o=t[0],c=t[1],l=t[2],d=0,p=[];d<o.length;d++)a=o[d],Object.prototype.hasOwnProperty.call(i,a)&&i[a]&&p.push(i[a][0]),i[a]=0;for(r in c)Object.prototype.hasOwnProperty.call(c,r)&&(e[r]=c[r]);u&&u(t);while(p.length)p.shift()();return s.push.apply(s,l||[]),n()}function n(){for(var e,t=0;t<s.length;t++){for(var n=s[t],r=!0,o=1;o<n.length;o++){var c=n[o];0!==i[c]&&(r=!1)}r&&(s.splice(t--,1),e=a(a.s=n[0]))}return e}var r={},i={app:0},s=[];function a(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,a),n.l=!0,n.exports}a.m=e,a.c=r,a.d=function(e,t,n){a.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},a.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},a.t=function(e,t){if(1&t&&(e=a(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(a.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)a.d(n,r,function(t){return e[t]}.bind(null,r));return n},a.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return a.d(t,"a",t),t},a.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},a.p="";var o=window["webpackJsonp"]=window["webpackJsonp"]||[],c=o.push.bind(o);o.push=t,o=o.slice();for(var l=0;l<o.length;l++)t(o[l]);var u=c;s.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},1935:function(e,t,n){"use strict";n("e806")},3521:function(e,t,n){"use strict";n("e465")},"56d7":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var r=n("2b0e"),i=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"wrapper"},[n("div",{staticClass:"wrapper-content"},[n("section",[n("div",{staticClass:"container"},[n("newNote"),n("div",{staticClass:"note-header",staticStyle:{margin:"36px 0"}},[n("h1",[e._v(e._s(e.title))]),n("search",{attrs:{value:e.search,placeholder:"Find your note"},on:{search:function(t){e.search=t}}}),n("div",{staticClass:"icons"},[n("svg",{class:{active:e.grid},staticStyle:{cursor:"pointer"},attrs:{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round"},on:{click:function(t){e.grid=!0}}},[n("rect",{attrs:{x:"3",y:"3",width:"7",height:"7"}}),n("rect",{attrs:{x:"14",y:"3",width:"7",height:"7"}}),n("rect",{attrs:{x:"14",y:"14",width:"7",height:"7"}}),n("rect",{attrs:{x:"3",y:"14",width:"7",height:"7"}})]),n("svg",{class:{active:!e.grid},staticStyle:{cursor:"pointer"},attrs:{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round"},on:{click:function(t){e.grid=!1}}},[n("line",{attrs:{x1:"8",y1:"6",x2:"21",y2:"6"}}),n("line",{attrs:{x1:"8",y1:"12",x2:"21",y2:"12"}}),n("line",{attrs:{x1:"8",y1:"18",x2:"21",y2:"18"}}),n("line",{attrs:{x1:"3",y1:"6",x2:"3",y2:"6"}}),n("line",{attrs:{x1:"3",y1:"12",x2:"3",y2:"12"}}),n("line",{attrs:{x1:"3",y1:"18",x2:"3",y2:"18"}})])])],1),n("notes",{attrs:{notes:e.notesFilter,grid:e.grid}})],1)])])])},s=[],a=n("5530"),o=(n("ac1f"),n("841c"),n("498a"),n("4de4"),n("c975"),n("2f62")),c=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"notes"},e._l(e.notes,(function(t,r){return n("div",{key:r,staticClass:"note",class:[{full:!e.grid},t.selected]},[n("div",{staticClass:"note-header",class:{full:!e.grid}},[t.titleEdit?n("rewriteVal",{attrs:{editing:e.editing},on:{close:function(n){return e.resetValues(t,"title")}}}):n("p",{staticClass:"note-header note-header__item",on:{click:function(n){e.changeVal(t.title,r),e.editing.values.title=!0,t.titleEdit=!0}}},[e._v(e._s(t.title))]),n("div",{staticClass:"note-header__icons"},[e._m(0,!0),n("p",{staticClass:"note-header__cursor",staticStyle:{cursor:"pointer"},on:{click:function(t){return e.cancelNote(r)}}},[e._v("x")])])],1),n("div",{staticClass:"note-body"},[t.descrEdit?n("rewriteVal",{attrs:{editing:e.editing},on:{close:function(n){return e.resetValues(t,"descr")}}}):n("p",{staticClass:"note-body__item",on:{click:function(n){e.changeVal(t.descr,r),e.editing.values.descr=!0,t.descrEdit=!0}}},[e._v(e._s(t.descr))]),n("span",[e._v(e._s(t.date))])],1)])})),0)},l=[function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("p",{staticClass:"note-header__edit"},[r("img",{staticStyle:{"max-width":"20px"},attrs:{src:n("aa93"),alt:"edit.png"}})])}],u=(n("d3b7"),n("ddb0"),function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"rewrite-input"},[n("input",{directives:[{name:"model",rawName:"v-model",value:e.val,expression:"val"}],attrs:{type:"text"},domProps:{value:e.val},on:{keyup:[function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter")?null:e.newVal.apply(null,arguments)},function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"esc",27,t.key,["Esc","Escape"])?null:e.$emit("close")}],blur:function(t){return e.$emit("close")},input:function(t){t.target.composing||(e.val=t.target.value)}}})])}),d=[],p={props:{editing:{type:Object,required:!0}},data:function(){return{val:this.editing.value}},methods:{newVal:function(){this.$store.dispatch("changeNote",{value:this.val,index:this.editing.index,valTitle:this.editing.values.title,valDescr:this.editing.values.descr}),this.$emit("close")}}},f=p,v=(n("3521"),n("2877")),h=Object(v["a"])(f,u,d,!1,null,"34e8fe59",null),g=h.exports,m={components:{rewriteVal:g},props:{notes:{type:Array,required:!0},grid:{type:Boolean,required:!0}},data:function(){return{editing:{value:"",values:{title:!1,descr:!1},index:""}}},methods:Object(a["a"])(Object(a["a"])({},Object(o["b"])(["cancelNote"])),{},{changeVal:function(e,t){this.editing.value=e,this.editing.index=t},resetValues:function(e,t){"title"==t&&(e.titleEdit=!1),this.editing.values.title=!1,"descr"==t&&(e.descrEdit=!1),this.editing.values.descr=!1}})},w=m,y=(n("1935"),Object(v["a"])(w,c,l,!1,null,null,null)),x=y.exports,A=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"new-note"},[n("label",[e._v("Titel")]),e.message?n("message",{attrs:{message:e.message}}):e._e(),n("input",{directives:[{name:"model",rawName:"v-model",value:e.note.title,expression:"note.title"}],attrs:{type:"text"},domProps:{value:e.note.title},on:{input:function(t){t.target.composing||e.$set(e.note,"title",t.target.value)}}}),n("label",[e._v("Note importance")]),n("select",{directives:[{name:"model",rawName:"v-model",value:e.note.selected,expression:"note.selected"}],on:{change:function(t){var n=Array.prototype.filter.call(t.target.options,(function(e){return e.selected})).map((function(e){var t="_value"in e?e._value:e.value;return t}));e.$set(e.note,"selected",t.target.multiple?n:n[0])}}},e._l(e.priorites,(function(t){return n("option",{key:t.index,domProps:{value:t.value}},[e._v(e._s(t.text))])})),0),n("label",[e._v("Description")]),n("textarea",{directives:[{name:"model",rawName:"v-model",value:e.note.descr,expression:"note.descr"}],domProps:{value:e.note.descr},on:{input:function(t){t.target.composing||e.$set(e.note,"descr",t.target.value)}}}),n("button",{staticClass:"btn btnPrimary",on:{click:e.addNote}},[e._v("New note")])],1)},b=[],_=(n("0d03"),n("6eba"),function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"message",attrs:{message:e.message}},[n("p",[e._v(e._s(e.message))])])}),C=[],k={props:{message:{type:String,require:!0}}},N=k,O=(n("bff1"),Object(v["a"])(N,_,C,!1,null,"17e86c16",null)),j=O.exports,E={components:{message:j},data:function(){return{note:{title:"",descr:"",selected:"base",titleEdit:!1,descrEdit:!1},message:null,priorites:[{text:"Base",value:"base"},{text:"Important",value:"important"},{text:"Very Impotant",value:"veryImportant"}]}},methods:{addNote:function(){var e=this,t=this.note,n=t.title,r=t.descr,i=t.selected;if(""===n)return this.message="Title can`t be blank!",!1;var s={title:n,descr:r,date:new Date(Date.now()).toLocaleString(),selected:i,titleEdit:!1,descrEdit:!1};this.$store.dispatch("addNote",s).then((function(){e.message=null,e.note.title="",e.note.descr="",e.note.selected="base"}))["catch"]((function(t){return console.log(e.message)}))}}},S=E,V=(n("72c7"),Object(v["a"])(S,A,b,!1,null,null,null)),P=V.exports,B=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"wrapper__search"},[n("div",{staticClass:"search"},[n("div",{staticClass:"search-icon"},[n("svg",{staticClass:"feather feather-search",attrs:{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round"}},[n("circle",{attrs:{cx:"11",cy:"11",r:"8"}}),n("line",{attrs:{x1:"21",y1:"21",x2:"16.65",y2:"16.65"}})])])]),n("input",{directives:[{name:"model",rawName:"v-model",value:e.search,expression:"search"}],attrs:{type:"text",placeholder:e.placeholder},domProps:{value:e.search},on:{input:function(t){t.target.composing||(e.search=t.target.value)}}})])},D=[],$={props:{value:{type:String,require:!0},placeholder:{type:String,default:"Search"}},data:function(){return{search:this.value}},watch:{search:function(e){this.$emit("search",e)}}},Q=$,T=(n("f0a3"),Object(v["a"])(Q,B,D,!1,null,"24a5a3e8",null)),F=T.exports,I={components:{notes:x,newNote:P,search:F},data:function(){return{title:"Notes App",search:"",grid:!0}},computed:Object(a["a"])(Object(a["a"])({},Object(o["c"])({notes:function(e){return e.notes.notes}})),{},{notesFilter:function(){var e=this.notes,t=this.search;return t?(t=t.trim().toLowerCase(),e=e.filter((function(e){if(-1!==e.title.toLowerCase().indexOf(t))return e})),e):e}})},R=I,L=Object(v["a"])(R,i,s,!1,null,null,null),M=L.exports,W=(n("c1c3"),n("ade3")),q=(n("a434"),{state:{notes:[{title:"First Note",descr:"Description for first note",date:new Date(Date.now).toLocaleString(),titleEdit:!1,descrEdit:!1},{title:"Second Note",descr:"Description for first note",date:new Date(Date.now).toLocaleString(),titleEdit:!1,descrEdit:!1},{title:"Thrid Note",descr:"Description for first note",date:new Date(Date.now).toLocaleString(),titleEdit:!1,descrEdit:!1}]},mutations:Object(W["a"])({addNote:function(e,t){e.notes.push(t)},changedNote:function(e,t){var n=t.index,r=e.notes[n];t.valTitle&&(r.title=t.value),t.valDescr&&(r.descr=t.value)}},"changedNote",(function(e,t){e.notes.splice(t,1)})),actions:{addNote:function(e,t){var n=e.commit;n("addNote",t)},changeNote:function(e,t){var n=e.commit;n("changeNote",t)},cancelNote:function(e,t){var n=e.commit;n("cancelNote",t)}}});r["a"].use(o["a"]);var H=new o["a"].Store({modules:{notes:q}});r["a"].config.productionTip=!1,new r["a"]({store:H,render:function(e){return e(M)}}).$mount("#app")},"72c7":function(e,t,n){"use strict";n("e5f2")},"878d":function(e,t,n){},a4af:function(e,t,n){},aa93:function(e,t){e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAABHNCSVQICAgIfAhkiAAAAAlwSFlzAAAOxAAADsQBlSsOGwAAAalJREFUWIXt181LVFEYx/Hvc48Ghai94K5cFIJj85aTyxZJQtDCXUHr/qigP6DW7Yw2QYtohtsVnCAK1GVYCAVC07k/VyNX56rjeM9d+SzveeDz5WwOFy4m8FSr1asnnVtI/G6z2XKRW5PR7nn/4mscb5UWUKlUJsYvX/mB2QyA0A7Sk/VO51PwgIVG637k5AW3HPYGs0sAkn7Z/14rSZLN/m4UAneONcPeGWx79BTpH4CZXdfY+MvsfqEBB7jZtJldy4sAlur1+nThAVm8/y0n4qf3rCRJsnuwEwrPjqTfQo/83t63brf7N3t27hs4De87qTd3FIdz3sAwuKRd71nZ+NL+nHc+ckAR+MgBReEjBRSJnzmgaPxMASHwoQNC4UMFhMRPDQiNnxhQBn5sQFl4bkCZOOQ8Rs7pNTBZBj4QsLC4eBtslpRVSX9C4wMBkWwZiNfj9luPHmcjQuADAWYsm/gAsNHpfCT1zyWloXCAsawPPFRkU/V7LWQ8AJpgm97rWQj8UMB8o3HHzG4I7ci4aehVL03fd+P4ewg4d2q12hyB/5Yu5ujsA8hlO+CyIwIKAAAAAElFTkSuQmCC"},bff1:function(e,t,n){"use strict";n("878d")},c1c3:function(e,t,n){},e465:function(e,t,n){},e5f2:function(e,t,n){},e806:function(e,t,n){},f0a3:function(e,t,n){"use strict";n("a4af")}});