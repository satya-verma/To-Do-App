(this["webpackJsonptodo-app"]=this["webpackJsonptodo-app"]||[]).push([[0],{10:function(e,t,a){e.exports=a(38)},15:function(e,t,a){},17:function(e,t,a){},38:function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),o=a(4),l=a.n(o),r=(a(15),a(1)),s=a(5),i=a(6),m=a(9),u=a(8),d=(a(16),function(){return c.a.createElement("div",{className:"pa1  shadow-2",style:{width:"100%"}},c.a.createElement("h1",{className:"tc"},"To-Do"))}),h=function(e){var t=e.onclick,a=e.onchange;return c.a.createElement("div",{className:"ma3 tc"},c.a.createElement("input",{type:"text",placeholder:"Enter to-do",className:"pa2",onChange:a}),c.a.createElement("button",{type:"submit",className:"ma3 f6 fw6 ttu tracked pa2",onClick:t},"Add"))},p=(a(17),function(e){var t=e.text,a=e.id,n=e.itemdelete;return c.a.createElement("div",{className:"card db br2 pa2 ma3 shadow-3 "},c.a.createElement("div",null,c.a.createElement("input",{type:"checkbox",id:a,className:"ma2"}),c.a.createElement("label",{htmlFor:a}," ",t)),c.a.createElement("button",{className:"delete tc ma1 link pv1 ph2 dib white",onClick:function(){return n(a)}},"\u2717"))}),k=function(e){var t=e.list,a=e.onDelete,n=t.map((function(e,t){return c.a.createElement(p,{text:e,key:t,id:t,itemdelete:a})}));return c.a.createElement("div",{className:"ma3 pa1"},n)},f=a(7),v=function(e){Object(m.a)(a,e);var t=Object(u.a)(a);function a(){var e;return Object(s.a)(this,a),(e=t.call(this)).onclick=function(t){var a=e.state,n=a.tasks,c=a.textfield,o=Object(r.a)(n);o.push(c),e.setState({tasks:o})},e.onchange=function(t){e.setState({textfield:t.target.value})},e.ondelete=function(t){var a=e.state.tasks,n=Object(r.a)(a);n.splice(t,1),e.setState({tasks:n})},e.state={tasks:["task1","task2","task3"],textfield:""},e}return Object(i.a)(a,[{key:"render",value:function(){return c.a.createElement("div",{className:"tc"},c.a.createElement(d,null),c.a.createElement(h,{onchange:this.onchange,onclick:this.onclick}),c.a.createElement(f.Scrollbars,{style:{height:"70vh"}},c.a.createElement(k,{list:this.state.tasks,onDelete:this.ondelete})))}}]),a}(c.a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(c.a.createElement(c.a.StrictMode,null,c.a.createElement(v,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[10,1,2]]]);
//# sourceMappingURL=main.3620c448.chunk.js.map