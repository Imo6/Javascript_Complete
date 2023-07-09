//select element using query selector
//for selecting id # is used
//for selecting class . is used
//you can't repeat id more than once
//but you can give of class as multiple

// const mainHeading=document.querySelector("#main-heading")
// const header=document.querySelector(".header")
// console.log(header)

// const navItem=document.querySelector(".nav-item")//it will print only first class that
//                                                  //class name as nav-item
// console.log(navItem)

const navAllItem=document.querySelectorAll(".nav-item")//it print's all the class
                                                       //o/p==> NodeList==>it is like an array
console.log(navAllItem)



