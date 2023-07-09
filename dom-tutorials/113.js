//How to create HTML element in javascript and add into web page

//Add new HTML elements to page

//innerHTML to add html element

//when to use innerHTML?
//Ans: When you want to change all the existing elements
//Also when you have entire html in text format and you want to change that tag 
//but change HTML using innerHTML is not good becuase of performance issue
//as when you change the HTML then entire elements get rendered again

const todoList=document.querySelector(".todo-List")
console.log(todoList.innerHTML)
// todoList.innerHTML="<li>New Todo</li>"//it changes all the innerHTML
//but I want to add new tdod in existing todo
todoList.innerHTML+="<li>New Todo</li>"
todoList.innerHTML+="<li>students teach</li>"