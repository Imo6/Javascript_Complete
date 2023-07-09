//static list vs live list

//querySelectorAll ==> gives static list // NodeList
//getElementsBySomething ==> gives live list // HTMLCollection

// const listofItems=document.querySelectorAll(".todo-List  li")
// const sixthli=document.createElement("li")
// sixthli.textContent= "Item 6"
// const ul=document.querySelector(".todo-List")
// ul.append(sixthli)
// console.log(listofItems)


const ul=document.querySelector(".todo-List")
const listofItems=ul.getElementsByTagName("li")
const sixthli=document.createElement("li")
sixthli.textContent= "Item 6"
ul.append(sixthli)
console.log(listofItems)

/*
//it serach the li tag within document
const listofItems=document.getElementsByTagName("li")

//it serach the li tag within ul
const listofItems=document.getElementsByTagName("li")
 */