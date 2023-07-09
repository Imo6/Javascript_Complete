
// ele.insertAdjacentHTML(where, html)
//beforebegin ==>equivalent to before
//afterbegin ==>equivalent to prepend
//beforeend ==>equivalent to append
//afterend ==>equivalent to after

const todoList=document.querySelector(".todo-List")
todoList.insertAdjacentHTML("afterbegin","<li>Tech Students</li>")
