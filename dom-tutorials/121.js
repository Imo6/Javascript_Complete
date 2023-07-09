//this keyword
//a). In case of normal function, value of 'this' is whatever event you add on that

//b). In case of arrow function,value of 'this' is one level up
//one level up means for below function one level up is 'window'

// //a).
// const btn=document.querySelector(".btn-headline")
// btn.addEventListener('click',function(){
//     console.log("you clicked me!!!")
//     console.log("value of this")
//     console.log(this)
// })

//b).
const btn=document.querySelector(".btn-headline")
btn.addEventListener('click',()=>{
    console.log("you clicked me!!!")
    console.log("value of this")
    console.log(this)
})