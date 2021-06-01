(this.webpackJsonponlinecalcerror=this.webpackJsonponlinecalcerror||[]).push([[0],{366:function(e,t,a){e.exports=a(485)},371:function(e,t,a){},372:function(e,t,a){},379:function(e,t,a){},382:function(e,t){},384:function(e,t){},395:function(e,t,a){},397:function(e,t,a){},485:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(16),c=a.n(l),o=a(116),i=(a(371),a(91)),s=a(104),m=a(127),u=(a(372),function(){return r.a.createElement("div",{className:"header"},r.a.createElement("div",{className:"header-title"},r.a.createElement(s.a,null,r.a.createElement("h1",null,"Error Calculator"))),r.a.createElement("div",{className:"header-nav"},r.a.createElement(s.a,null,r.a.createElement(m.a,{justify:!0,variant:"pills",defaultActiveKey:"/"},r.a.createElement(m.a.Item,null,r.a.createElement(m.a.Link,{eventKey:"0",as:o.b,to:"/",exact:!0,activeClassName:"active"},"Calculator")),r.a.createElement(m.a.Item,null,r.a.createElement(m.a.Link,{eventKey:"1",as:o.b,to:"/ranking",activeClassName:"active",disabled:!0},"Ranking"))))),r.a.createElement("hr",null))}),d=(a(379),function(){return r.a.createElement("div",{className:"footer"},r.a.createElement(s.a,null,"Icons made by ",r.a.createElement("a",{href:"https://www.flaticon.com/authors/freepik",title:"Freepik"},"Freepik")," from ",r.a.createElement("a",{href:"https://www.flaticon.com/",title:"Flaticon"}," www.flaticon.com")))}),f=a(18),p=a(30),h=a(28),E=a(39),v=a(40),g=a(41),b=a(232),y=a(92),x=a.n(y),w=function(e,t){return t-e},N=function(e){for(var t=0,a=e.length-1;a>=0;a--)t+=e[a];return t/e.length},k=function(e,t){return N(function(e,t){for(var a=[],n=e.length-1;n>=0;n--)a.push(Math.pow(w(e[n],t[n]),2));return a}(e,t))},D=function(e,t){return 100*N(function(e,t){for(var a=[],n=e.length-1;n>=0;n--)a.push(Math.abs(w(e[n],t[n])/e[n]));return a}(e,t))},j=a(84),S=a(52),C=a(93),O=a(351),Y=(a(395),{header:!0,dynamicTyping:!0,skipEmptyLines:!0,transformHeader:function(e){return e.toLowerCase().replace(/\W/g,"_")}}),M=function(e){var t=e.handleForce;return r.a.createElement("div",{className:"react-csv"},r.a.createElement(b.a,{onFileLoaded:t,parserOptions:Y}))},F=a(244),I=a(241),T=function(e){var t=e.mape,a=e.nrmse;return r.a.createElement("div",null,r.a.createElement(j.a,{className:"align-items-center rmse"},r.a.createElement(S.a,{xs:12,className:"align-items-center score-type "},r.a.createElement(C.a,{pill:!0,variant:"danger"},"nRMSE"),r.a.createElement(F.a,{overlay:r.a.createElement(I.a,null,a)},r.a.createElement("span",{className:"score-value"},a.toFixed(2),"%")))),r.a.createElement(j.a,{className:"align-items-center mape"},r.a.createElement(S.a,{xs:12,className:"score-type"},r.a.createElement(C.a,{pill:!0,variant:"primary"},"\xa0MAPE\xa0"),r.a.createElement(F.a,{overlay:r.a.createElement(I.a,null,t)},r.a.createElement("span",{className:"score-value"},t.toFixed(2),"%")))))},P=(a(397),function(e){function t(){var e;return Object(p.a)(this,t),(e=Object(E.a)(this,Object(v.a)(t).call(this))).ajaxServerItemAdd=function(e){var t=e;fetch("http://localhost:3020/ranking",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(t)}).then((function(e){if(!e.ok)throw new Error(e.statusText);return e.json()})).then((function(e){alert("\u5132\u5b58\u6210\u529f")})).catch((function(e){console.error("error:",e)}))},e.getRealData=function(){return Object(f.a)(e.state.real)},e.getPredData=function(){return Object(f.a)(e.state.pred)},e.dataCleaning=function(e){var t=e.map((function(e){return""===e?"-":Number.isNaN(Number(e))?"-":Number(e)}));return console.log(t),t},e.calculateScore=function(t){t.preventDefault();var a=e.dataCleaning(e.getRealData()),n=e.dataCleaning(e.getPredData());if(a.length===n.length){for(var r=Object(f.a)(a),l=Object(f.a)(n),c=0;c<r.length;)"-"===r[c]?(r.splice(c,1),l.splice(c,1)):"-"===l[c]?(r.splice(c,1),l.splice(c,1)):c++;var o=function(e,t){return Math.sqrt(k(e,t))/N(e)*100}(r,l),i=D(r,l);e.setState({real:a,pred:n,isFileUpload:!0,nrmse:o,mape:i})}else alert("\u8cc7\u6599\u9577\u5ea6\u4e0d\u540c")},e.applyData=function(t,a){"pred"===t?e.setState({pred:a}):e.setState({real:a})},e.handleForce=function(t,a,n){var r,l=[".xlsx",".xls",".csv"],c=n.substring(n.lastIndexOf("."));if(l.indexOf(c)<0)alert("\u6a94\u6848\u985e\u578b\u932f\u8aa4\uff0c\u53ef\u63a5\u53d7\u7684\u526f\u6a94\u540d\u6709\uff1a"+l.toString());else{var o=(r=[]).concat.apply(r,Object(f.a)(a.data));isNaN(o[0])&&o.splice(0,1),e.applyData(t,o)}},e.handleTextareaChange=function(t,a){var n=String(a.target.value).split("\n");"pred"===t?e.setState({pred:n}):e.setState({real:n})},e.state={isFileUpload:!1,mape:0,nrmse:0,real:[],pred:[]},e}return Object(g.a)(t,e),Object(h.a)(t,[{key:"componentDidMount",value:function(){}},{key:"componentDidUpdate",value:function(){}},{key:"componentWillUnmount",value:function(){}},{key:"render",value:function(){var e=this;return r.a.createElement("div",{className:"Calculator"},r.a.createElement(j.a,null,r.a.createElement(S.a,{xs:12,md:6},r.a.createElement(j.a,{className:"align-items-center calculator-textarea"},r.a.createElement(S.a,{xs:12,className:"row-title"},r.a.createElement("h2",null,"Real Answer"),r.a.createElement("span",null,"Enter some numbers or upload a CSV file with data")),r.a.createElement(S.a,{xs:12,className:"row-textarea"},r.a.createElement("textarea",{value:this.state.real.join("\n"),placeholder:"Please enter some numbers, separated by line breaks.",className:"form-control",rows:10,onChange:function(t){return e.handleTextareaChange("real",t)}}),r.a.createElement(C.a,{pill:!0,variant:"primary"},this.state.real.length," Data Points")),r.a.createElement(S.a,{xs:12,className:"calculator-csv-reader"},r.a.createElement(M,{handleForce:function(){for(var t=arguments.length,a=new Array(t),n=0;n<t;n++)a[n]=arguments[n];return e.handleForce.apply(e,["real"].concat(a))}}),r.a.createElement(C.a,{pill:!0,variant:"secondary"},r.a.createElement("a",{href:"https://raw.githubusercontent.com/Chang-Siang/onlinecalcerror/master/public/template/Template(Real).csv",target:"_blank"},r.a.createElement("span",{className:"glyphicon glyphicon-download-alt","aria-hidden":"true"}),"File format template"))))),r.a.createElement(S.a,{xs:12,md:6},r.a.createElement(j.a,{className:"align-items-center calculator-textarea"},r.a.createElement(S.a,{xs:12,className:"row-title"},r.a.createElement("h2",null,"Predictive Value"),r.a.createElement("span",null,"Enter some numbers or upload a CSV file with data")),r.a.createElement(S.a,{xs:12,className:"row-textarea"},r.a.createElement("textarea",{value:this.state.pred.join("\n"),placeholder:"Please enter some numbers, separated by line breaks.",className:"form-control",rows:"10",onChange:function(t){return e.handleTextareaChange("pred",t)}}),r.a.createElement(C.a,{pill:!0,variant:"primary"},this.state.pred.length," Data Points")),r.a.createElement(S.a,{xs:12,className:"calculator-csv-reader"},r.a.createElement(M,{handleForce:function(){for(var t=arguments.length,a=new Array(t),n=0;n<t;n++)a[n]=arguments[n];return e.handleForce.apply(e,["pred"].concat(a))}}),r.a.createElement(C.a,{pill:!0,variant:"secondary"},r.a.createElement("a",{href:"https://raw.githubusercontent.com/Chang-Siang/onlinecalcerror/master/public/template/Template(Pred).csv",target:"_blank"},r.a.createElement("span",{className:"glyphicon glyphicon-download-alt","aria-hidden":"true"}),"File format template")))))),r.a.createElement("hr",null),r.a.createElement(j.a,{className:"align-items-center"},r.a.createElement(S.a,{xs:12,className:"row-title"},r.a.createElement(O.a,{variant:"btn btn-outline-primary btn-lg btn-block",onClick:this.calculateScore},"Calculate"))),r.a.createElement("hr",null),r.a.createElement(j.a,{className:"align-items-center calculator-score"},r.a.createElement(S.a,{xs:12},r.a.createElement(T,{nrmse:this.state.nrmse,mape:this.state.mape}))))}}]),t}(n.Component)),A=a(352),R=a.n(A),L=function(e){var t=e.rankingData,a=e.onItemDelClick;return r.a.createElement("div",{style:{maxWidth:"100%"}},r.a.createElement(R.a,{title:"Ranking",columns:[{title:"\u4e0a\u50b3\u8005",field:"name"},{title:"\u9810\u6e2c\u7bc4\u570d",field:"range",render:function(e){return r.a.createElement("div",null,"[",x()(e.from).format("YYYY-MM-DD"),"] - [",x()(e.to).format("YYYY-MM-DD"),"]")},customFilterAndSearch:function(e,t){return-1!==x()(t.from).format("YYYY-MM-DD").indexOf(e)||-1!==x()(t.to).format("YYYY-MM-DD").indexOf(e)}},{title:"RMSE",field:"rmse",type:"numeric",render:function(e){return r.a.createElement("div",null,e.rmse.toFixed(6))}},{title:"MAPE",field:"mape",type:"numeric",render:function(e){return r.a.createElement("div",null,e.mape.toFixed(6))}},{title:"\u4e0a\u50b3\u6642\u9593",field:"id",render:function(e){return r.a.createElement("div",null,x()(e.id).format("YYYY-MM-DD HH:mm"))},customFilterAndSearch:function(e,t){return-1!==x()(t.id).format("YYYY-MM-DD HH:mm").indexOf(e)}}],data:t,options:{actionsColumnIndex:-1,filtering:!0},editable:{onRowDelete:function(e){return new Promise((function(t,n){setTimeout((function(){a(e.tableData.id),t()}),1e3)}))}}}))},W=function(e){function t(){var e;return Object(p.a)(this,t),(e=Object(E.a)(this,Object(v.a)(t).call(this))).ajaxServerItemsLoad=function(){fetch("http://localhost:3020/ranking",{method:"GET"}).then((function(e){if(!e.ok)throw new Error(e.statusText);return e.json()})).then((function(t){var a=t.map((function(e){return Object.assign({},e,{range:new Date(e.to)-new Date(e.from)})}));console.log("items :",a),e.setState({items:a,loading:!1})})).catch((function(t){console.error(t),e.setState({loading:!1,error:!0})}))},e.ajaxServerItemDelete=function(e){var t=e.id;fetch("http://localhost:3020/"+"ranking/".concat(t),{method:"DELETE",headers:{"Content-Type":"application/json"}}).then((function(e){if(!e.ok)throw new Error(e.statusText);return e.json()})).then((function(e){console.log("item:",e)})).catch((function(e){console.error("error:",e)}))},e.handleDelItem=function(t){var a=Object(f.a)(e.state.items);e.ajaxServerItemDelete(a[t]),a.splice(t,1),e.setState({items:a})},e.state={items:[],loading:!1,error:!1},e}return Object(g.a)(t,e),Object(h.a)(t,[{key:"componentWillMount",value:function(){}},{key:"componentDidMount",value:function(){this.setState({loading:!0}),this.ajaxServerItemsLoad()}},{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement(L,{rankingData:this.state.items,onItemDelClick:this.handleDelItem}))}}]),t}(n.Component);a(483),a(484);var H=function(){return r.a.createElement("div",{className:"App"},r.a.createElement("div",{className:"main"},r.a.createElement(u,null),r.a.createElement(s.a,null,r.a.createElement(i.c,null,r.a.createElement(i.a,{exact:!0,path:"/",component:P}),r.a.createElement(i.a,{path:"/ranking",component:W})))),r.a.createElement(d,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(r.a.createElement(o.a,null,r.a.createElement(H,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[366,1,2]]]);
//# sourceMappingURL=main.fbc0e920.chunk.js.map