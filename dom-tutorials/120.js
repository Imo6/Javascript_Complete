//intro events
//click
//Three ways to add event
//1).

const btn=document.querySelector(".btn-headline")
// console.dir(btn)

// //2).
// //I will not use this way because onclick event i can't assign more than once
// btn.onclick= function(){
//     console.log("you clicked me!!!")
// }

//3).
//addEventListener
//addEventListener() method attaches an event handler to a document.
//addEventListener takes two paramater 1st is 'event' and 2nd is 'callback function'

// function clickMe(){
//     console.log("you clicked me....")
// }
// btn.addEventListener('click',clickMe)


// btn.addEventListener('click',function(){
//     console.log("you clicked me....")
// })

btn.addEventListener('click',()=>{
    console.log("you clicked me....!!")
})
