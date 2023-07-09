//event bubbling, capturing

//ctrl+shift+j ==> to open console in browser

// const grandPranet=document.querySelector(".grandparent")
// const parent=document.querySelector(".parent")
// const child=document.querySelector(".child")
// const body=document.body

// //event bubbling
// child.addEventListener('click',()=>{
//     console.log("bubble child!!!")
// })
// parent.addEventListener('click',()=>{
//     console.log("bubble parent!!!")
// })
// grandPranet.addEventListener('click',()=>{
//     console.log("bubble grandPranet!!!")
// })
// body.addEventListener('click',()=>{
//     console.log("bubble body!!!")
// })


// //event capturing
// child.addEventListener('click',()=>{
//     console.log("catured child!!!")
// },true)
// parent.addEventListener('click',()=>{
//     console.log("catured parent!!!")
// },true)
// grandPranet.addEventListener('click',()=>{
//     console.log("catured grandPranet!!!")
// },true)
// body.addEventListener('click',()=>{
//     console.log("bubble body!!!")
// },true)

//event delegation
const grandPranet=document.querySelector(".grandparent")
grandPranet.addEventListener('click',(e)=>{
    // console.log("you clicked on something!!!")
    // console.log(e)
    console.log(e.target)
    // console.log(e.target.textContent)
})




