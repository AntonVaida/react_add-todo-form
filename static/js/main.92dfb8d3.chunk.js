(this["webpackJsonpreact_add-todo-form"]=this["webpackJsonpreact_add-todo-form"]||[]).push([[0],{13:function(e,t,n){},15:function(e,t,n){"use strict";n.r(t);var a=n(6),i=n.n(a),r=n(8),c=n(3),s=(n(13),n(1)),l=[{id:1,name:"Leanne Graham",username:"Bret",email:"Sincere@april.biz"},{id:2,name:"Ervin Howell",username:"Antonette",email:"Shanna@melissa.tv"},{id:3,name:"Clementine Bauch",username:"Samantha",email:"Nathan@yesenia.net"},{id:4,name:"Patricia Lebsack",username:"Karianne",email:"Julianne.OConner@kory.org"},{id:5,name:"Chelsey Dietrich",username:"Kamren",email:"Lucio_Hettinger@annie.ca"},{id:6,name:"Mrs. Dennis Schulist",username:"Leopoldo_Corkery",email:"Karley_Dach@jasper.info"},{id:7,name:"Kurtis Weissnat",username:"Elwyn.Skiles",email:"Telly.Hoeger@billy.biz"},{id:8,name:"Nicholas Runolfsdottir V",username:"Maxime_Nienow",email:"Sherwood@rosamond.me"},{id:9,name:"Glenna Reichert",username:"Delphine",email:"Chaim_McDermott@dana.io"},{id:10,name:"Clementina DuBuque",username:"Moriah.Stanton",email:"Rey.Padberg@karina.biz"}],o=[{id:1,title:"delectus aut autem",completed:!0,userId:1},{id:15,title:"some other todo",completed:!1,userId:1},{id:2,title:"quis ut nam facilis et officia qui",completed:!1,userId:4}],d=n(7),u=n.n(d),m=n(0),j=function(e){var t=e.user,n=t.name,a=t.email;return Object(m.jsx)("a",{href:"mailto:".concat(a),className:"UserInfo",children:n})},b=function(e){var t=e.todo,n=t.title,a=t.completed,i=t.userId,r=l.find((function(e){return i===e.id}));return Object(m.jsxs)("article",{"data-id":t.id,className:u()("TodoInfo",{"TodoInfo--completed":a}),children:[Object(m.jsx)("h2",{className:"TodoInfo__title",children:n}),r&&Object(m.jsx)(j,{user:r})]})},h=function(e){var t=e.todos;return Object(m.jsx)("section",{className:"TodoList",children:t.map((function(e){return Object(m.jsx)(b,{todo:e})}))})},f=function(){var e=Object(s.useState)("0"),t=Object(c.a)(e,2),n=t[0],a=t[1],i=Object(s.useState)(""),d=Object(c.a)(i,2),u=d[0],j=d[1],b=Object(s.useState)(o),f=Object(c.a)(b,2),O=f[0],p=f[1],x=Object(s.useState)(!0),v=Object(c.a)(x,2),y=v[0],N=v[1],S=u.trim(),I=O.reduce((function(e,t){return e.id>t.id?e:t})),C=function(e){return N(!1),e.preventDefault(),""!==S&&"0"!==n?(N(!0),function(){var e={id:I.id+1,title:S,completed:!1,userId:Number(n)};p((function(t){return[].concat(Object(r.a)(t),[e])})),j(""),a("0"),N(!0)}()):(N(!1),null)};return Object(m.jsxs)("div",{className:"App",children:[Object(m.jsx)("h1",{children:"Add todo form"}),Object(m.jsxs)("form",{children:[Object(m.jsxs)("div",{className:"field",children:[Object(m.jsx)("label",{htmlFor:"title",children:"Title:"}),Object(m.jsx)("input",{id:"title",type:"text","data-cy":"titleInput",placeholder:"Enter a title",value:u,onChange:function(e){return j(e.target.value)}}),S||y?null:Object(m.jsx)("span",{className:"error",children:"Please enter a title"})]}),Object(m.jsxs)("div",{className:"field",children:[Object(m.jsx)("label",{htmlFor:"user",children:"User:"}),Object(m.jsxs)("select",{id:"user","data-cy":"userSelect",name:"userSelect",value:n,onChange:function(e){return a(e.target.value)},children:[Object(m.jsx)("option",{value:"0",disabled:!0,children:"Choose a user"}),l.map((function(e){return Object(m.jsx)("option",{value:e.id,children:e.name})}))]}),"0"!==n||y?null:Object(m.jsx)("span",{className:"error",children:"Please choose a user"})]}),Object(m.jsx)("button",{type:"submit","data-cy":"submitButton",onClick:function(e){return C(e)},children:"Add"})]}),Object(m.jsx)(h,{todos:O})]})};i.a.render(Object(m.jsx)(f,{}),document.getElementById("root"))}},[[15,1,2]]]);
//# sourceMappingURL=main.92dfb8d3.chunk.js.map