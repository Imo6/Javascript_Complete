//get and set Attributes

const link=document.querySelector("a")//I am selecting anchor tag "a"
// console.log(link)//o/p==>anchor tag
// console.log(link.getAttribute("href"))//#home
// //but i don't want #
// console.log(link.getAttribute("href").slice(1))//home

//to set the attributes
link.setAttribute("href","https://codeprog.com")
console.log(link.getAttribute("href"))

const inputElement=document.querySelector(".form-todo input")
console.log(inputElement.getAttribute("type"))