//querySelectorAll
//i can use all below things
//simple for loop
//for of loop
//forEach loop
// we can't use forEach method to iterate through NodeList also

let navItems=document.getElementsByTagName("a")
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

navItems=Array.from(navItems)
navItems.forEach(navItem=>{
    navItem.style.backgroundColor="#fff"
    navItem.style.color="blue"
    navItem.style.fontWeight="bold"
})