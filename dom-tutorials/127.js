//keypress 
//mouseover

// const body=document.body
// console.log(button)
// body.addEventListener('keypress',(e)=>{
//     // console.log(e)
//     console.log(e.key)
// })

const mainbutton=document.querySelector(".btn-headline")
mainbutton.addEventListener('mouseover',()=>{
    console.log("mouseover event occured!!!!")
})
mainbutton.addEventListener('mouseleave',()=>{
    console.log("mouseleave event occured!!!!")
})

