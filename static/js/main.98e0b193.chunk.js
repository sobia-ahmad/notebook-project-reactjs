(this["webpackJsonpnotebook-project-reactjs"]=this["webpackJsonpnotebook-project-reactjs"]||[]).push([[0],{13:function(t,e,n){},15:function(t,e,n){},16:function(t,e,n){"use strict";n.r(e);var s=n(1),c=n.n(s),j=n(3),i=n.n(j),o=(n(13),n(5)),r=n(6),b=n(2),a=n(8),d=n(7),x=n(0),l=function(t){Object(a.a)(n,t);var e=Object(d.a)(n);function n(){var t;return Object(o.a)(this,n),(t=e.call(this)).state={content:"Please write a note...",textEdit:0},t.delete=t.delete.bind(Object(b.a)(t)),t.edit=t.edit.bind(Object(b.a)(t)),t.saveEdits=t.saveEdits.bind(Object(b.a)(t)),t}return Object(r.a)(n,[{key:"componentDidUpdate",value:function(){this.state.edit&&this.refs.newText.select()}},{key:"shouldComponentUpdate",value:function(t,e){return this.state!==e}},{key:"edit",value:function(){this.setState({textEdit:1})}},{key:"saveEdits",value:function(){this.setState({content:this.refs.newText.value,textEdit:0})}},{key:"delete",value:function(){this.setState({content:""})}},{key:"noteComplete",value:function(){return Object(x.jsxs)("div",{className:"note",children:[Object(x.jsx)("p",{children:this.state.content}),Object(x.jsxs)("span",{children:[Object(x.jsx)("button",{onClick:this.edit,children:"Add Note"}),Object(x.jsx)("button",{onClick:this.delete,children:"Delete Note"})]})]})}},{key:"textEdit",value:function(){return Object(x.jsxs)("div",{className:"note",children:[Object(x.jsx)("textarea",{ref:"newText",cols:"82",rows:"10",defaultValue:this.state.content}),Object(x.jsx)("button",{onClick:this.saveEdits,children:"Save Note"})]})}},{key:"render",value:function(){return this.state.textEdit?this.textEdit():this.noteComplete()}}]),n}(c.a.Component);i.a.render(Object(x.jsx)(l,{}),document.querySelector("#root"));var u=l;n(15);var O=function(){return Object(x.jsx)("div",{className:"App",children:Object(x.jsxs)("header",{className:"App-header",children:[Object(x.jsx)("h1",{children:"Notes"}),Object(x.jsx)(u,{}),Object(x.jsx)("br",{}),Object(x.jsx)(u,{}),Object(x.jsx)("br",{}),Object(x.jsx)(u,{}),Object(x.jsx)("br",{}),Object(x.jsx)(u,{}),Object(x.jsx)("br",{}),Object(x.jsx)(u,{}),Object(x.jsx)("br",{}),Object(x.jsx)(u,{}),Object(x.jsx)("br",{}),Object(x.jsx)(u,{}),Object(x.jsx)("br",{}),Object(x.jsx)(u,{}),Object(x.jsx)("br",{}),Object(x.jsx)(u,{}),Object(x.jsx)("br",{}),Object(x.jsx)(u,{}),Object(x.jsx)("br",{}),Object(x.jsx)(u,{}),Object(x.jsx)("br",{}),Object(x.jsx)(u,{})]})})},h=function(t){t&&t instanceof Function&&n.e(3).then(n.bind(null,17)).then((function(e){var n=e.getCLS,s=e.getFID,c=e.getFCP,j=e.getLCP,i=e.getTTFB;n(t),s(t),c(t),j(t),i(t)}))};i.a.render(Object(x.jsx)(c.a.StrictMode,{children:Object(x.jsx)(O,{})}),document.getElementById("root")),h()}},[[16,1,2]]]);
//# sourceMappingURL=main.98e0b193.chunk.js.map