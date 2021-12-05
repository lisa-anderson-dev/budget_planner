(this.webpackJsonp20211201_budget_planner=this.webpackJsonp20211201_budget_planner||[]).push([[0],{14:function(e,t,n){},15:function(e,t,n){},17:function(e,t,n){"use strict";n.r(t);var s=n(1),a=n.n(s),i=n(3),c=n.n(i),d=(n(14),n(7)),u=n(4),r=n(5),l=n(6),o=n(9),p=n(8),h=(n(15),n(0));var b=function(e){var t=Object(h.jsxs)("div",{id:"budgetTotal",children:["Budget:\u2002$",e.budgetTotal,Object(h.jsx)("button",{className:"formBtn",onClick:e.switchBudgetMode,children:"Edit"})]}),n=Object(h.jsxs)("div",{id:"budgetTotal",children:[Object(h.jsx)("label",{htmlFor:"newBudget",children:"Budget:"}),Object(h.jsx)("input",{type:"number",name:"newBudget",id:"newBudget",min:"1",value:e.newBudget,onChange:e.handleChange}),Object(h.jsx)("button",{className:"iconBtn",onClick:e.saveNewBudget,children:Object(h.jsx)("i",{className:"fas fa-check-circle"})}),Object(h.jsx)("button",{className:"iconBtn",onClick:e.cancelNewBudget,children:Object(h.jsx)("i",{className:"fas fa-times-circle"})})]});return Object(h.jsxs)("div",{className:"Dashboard",children:[e.budgetMode?n:t,e.budgetRemaining>0?Object(h.jsxs)("div",{id:"budgetRemaining",children:["Remaining:\u2002$",e.budgetRemaining]}):Object(h.jsxs)("div",{id:"budgetRemaining",children:["Remaining:\u2002$",Object(h.jsxs)("span",{className:"negative",children:["(",Math.abs(e.budgetRemaining),")"]})]}),Object(h.jsxs)("div",{id:"budgetSpent",children:["Spent so far:\u2002$",e.budgetSpent]})]})};var x=function(e){return Object(h.jsxs)("div",{className:"ExpenseItem",children:[Object(h.jsx)("div",{children:e.name}),Object(h.jsxs)("div",{children:[Object(h.jsxs)("div",{className:"expenseCost",children:["$",e.cost]}),Object(h.jsx)("button",{className:"iconBtn",onClick:e.deleteExpense,children:Object(h.jsx)("i",{className:"fas fa-times-circle"})})]})]})};var j=function(e){var t=(e.searchMode?e.expenseList.filter((function(t){return t.name.toLowerCase().includes(e.inputSearch.toLowerCase())})):e.expenseList).map((function(t){return Object(h.jsx)("li",{children:Object(h.jsx)(x,{name:t.name,cost:t.cost,deleteExpense:e.deleteExpense})},t.name.toLowerCase().replace(/\s/g,"-"))}));return Object(h.jsxs)("div",{className:"ExpenseList",children:[Object(h.jsx)("h2",{children:"Expenses"}),Object(h.jsx)("input",{type:"text",name:"inputSearch",id:"inputSearch",placeholder:"Type to search...",value:e.inputSearch,onChange:e.searchExpense}),Object(h.jsx)("ul",{children:t})]})};var g=function(e){return Object(h.jsxs)("div",{className:"AddExpense",children:[Object(h.jsx)("h2",{children:"Add Expense"}),Object(h.jsxs)("ul",{children:[Object(h.jsxs)("li",{children:[Object(h.jsx)("label",{htmlFor:"inputExpenseName",children:"Name"}),Object(h.jsx)("input",{type:"text",name:"inputExpenseName",id:"inputExpenseName",value:e.inputExpenseName,onChange:e.handleChange})]}),Object(h.jsxs)("li",{children:[Object(h.jsx)("label",{htmlFor:"inputExpenseCost",children:"Cost"}),Object(h.jsx)("input",{type:"number",name:"inputExpenseCost",id:"inputExpenseCost",min:"1",value:e.inputExpenseCost,onChange:e.handleChange})]})]}),Object(h.jsx)("button",{className:"formBtn",onClick:e.addExpense,children:"Save"})]})},m=function(e){Object(o.a)(n,e);var t=Object(p.a)(n);function n(e){var s;return Object(r.a)(this,n),(s=t.call(this,e)).handleChange=function(e){s.setState(Object(u.a)({},e.target.name,e.target.value))},s.switchBudgetMode=function(){s.setState({budgetMode:!0})},s.saveNewBudget=function(){Number(s.state.newBudget)<1?alert("Budget must be at least $1"):s.setState({budgetTotal:Number(s.state.newBudget),budgetMode:!1})},s.cancelNewBudget=function(){s.setState({newBudget:s.state.budgetTotal,budgetMode:!1})},s.searchExpense=function(e){var t=!!e.target.value;s.setState({inputSearch:e.target.value,searchMode:t})},s.deleteExpense=function(e){if(window.confirm("Are you sure you want to delete this expense?")){var t=e.target.parentElement.parentElement.previousElementSibling.innerHTML,n=Number(e.target.parentElement.previousElementSibling.innerHTML.slice(1)),a=Object(d.a)(s.state.expenseList),i=a.findIndex((function(e){return e.name===t&&e.cost===n}));a.splice(i,1),s.setState({expenseList:a})}},s.addExpense=function(){if(s.state.inputExpenseName&&""!==s.state.inputExpenseCost)if(Number(s.state.inputExpenseCost)<1)alert("Cost must be at least $1");else{var e={name:s.state.inputExpenseName,cost:Number(s.state.inputExpenseCost)},t=s.state.expenseList;t.push(e),s.setState({expenseList:t,inputExpenseName:"",inputExpenseCost:""})}else alert("Cannot add expense without a name and cost")},s.state={budgetMode:!1,newBudget:2e3,budgetTotal:2e3,inputExpenseName:"",inputExpenseCost:"",inputSearch:"",searchMode:!1,expenseList:[{name:"Shopping",cost:50},{name:"Vacation",cost:300},{name:"Transportation",cost:70},{name:"Gas",cost:400},{name:"Child Care",cost:500}]},s}return Object(l.a)(n,[{key:"render",value:function(){var e=this.state.expenseList.reduce((function(e,t){return e+t.cost}),0),t=this.state.budgetTotal-e;return Object(h.jsxs)("div",{className:"App",children:[Object(h.jsx)("h1",{children:"My Budget Planner"}),Object(h.jsx)(b,{budgetMode:this.state.budgetMode,newBudget:this.state.newBudget,budgetTotal:this.state.budgetTotal,budgetRemaining:t,budgetSpent:e,handleChange:this.handleChange,switchBudgetMode:this.switchBudgetMode,cancelNewBudget:this.cancelNewBudget,saveNewBudget:this.saveNewBudget}),Object(h.jsx)(j,{searchMode:this.state.searchMode,inputSearch:this.state.inputSearch,expenseList:this.state.expenseList,searchExpense:this.searchExpense,deleteExpense:this.deleteExpense}),Object(h.jsx)(g,{inputExpenseName:this.state.inputExpenseName,inputExpenseCost:this.state.inputExpenseCost,handleChange:this.handleChange,addExpense:this.addExpense})]})}}]),n}(a.a.Component),O=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,18)).then((function(t){var n=t.getCLS,s=t.getFID,a=t.getFCP,i=t.getLCP,c=t.getTTFB;n(e),s(e),a(e),i(e),c(e)}))};c.a.render(Object(h.jsx)(a.a.StrictMode,{children:Object(h.jsx)(m,{})}),document.getElementById("root")),O()}},[[17,1,2]]]);
//# sourceMappingURL=main.4256670d.chunk.js.map