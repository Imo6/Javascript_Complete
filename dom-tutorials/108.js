//get multiple elements using getElements by class name
//get multiple items using using querySelectorAll
//Array like object==>indexing, length property

//i want to slelect all the classes of some specific name
// const navItems=document.getElementsByClassName("nav-item")
// console.log(navItems)//HTMLCollection ==> it is Array like object==>means you can perform indexing,iterate etc
// //supose i wznt 1st element
// console.log(navItems[0])
// console.log(typeof navItems)//object
// console.log(Array.isArray(navItems))//false


// const navItems=document.querySelectorAll(".nav-item")
// console.log(navItems)//NodeList ==> it is also Array like object
// console.log(navItems[0])

// const navItems=document.getElementsByTagName("a")
// console.log(navItems)


//i want to select all the elements and background color green
let navItems=document.getElementsByTagName("a")
// console.log(navItems)

//simple for loop
//for of loop
//forEach loop
//we can't use forEach method to iterate through HTMLCollection 
// for(let i=0;i<navItems.length;i++){
//     // console.log(navItems[i])
//     const navItem=navItems[i]
//     navItem.style.backgroundColor="#fff"
//     navItem.style.color="green"
//     navItem.style.fontWeight="bold"
// }

// for(let navItem of navItems){
//     navItem.style.backgroundColor="#fff"
//     navItem.style.color="red"
//     navItem.style.fontWeight="bold"
// }


//forEach method gives error for HTMLCollection
// navItems.forEach(navItem=>{
//     navItem.style.backgroundColor="#fff"
//     navItem.style.color="blue"
//     navItem.style.fontWeight="bold"
// })

//but above problem can be avoided
navItems=Array.from(navItems)
//i want to know that navItems is an array or not
// console.log(Array.isArray(navItems))//true
navItems.forEach(navItem=>{
    navItem.style.backgroundColor="#fff"
    navItem.style.color="blue"
    navItem.style.fontWeight="bold"
})


