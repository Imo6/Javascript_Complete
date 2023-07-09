//proprty==>classList
//methods==>
//add remove contains toggle
//tpggle==>if classes not exist then add but if exists the remove 


//How to add a class using javascript
// step-1: you have to add that class into Style.css
//step-2:below
// const sectionTodo=document.querySelector(".section-todo")
// // console.log(sectionTodo.classList)
// sectionTodo.classList.add('bg-dark')

// //How to remove a class using javascript
// const sectionTodo=document.querySelector(".section-todo")
// sectionTodo.classList.remove("container")

// // //How to check that class exists or not
// // const sectionTodo=document.querySelector(".section-todo")
// // sectionTodo.classList.add("container")
// // const ans=sectionTodo.classList.contains("container")
// // console.log(ans)//true
// const sectionTodo=document.querySelector(".section-todo")
// sectionTodo.classList.remove("container")
// const ans=sectionTodo.classList.contains("container")
// console.log(ans)//false


const sectionTodo=document.querySelector(".section-todo")
sectionTodo.classList.toggle("bg-dark")
sectionTodo.classList.toggle("bg-dark")


