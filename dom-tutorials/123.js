//event object


// const furstButton=document.querySelector("#one")
// // console.log(furstButton)
// furstButton.addEventListener('click',function(event){
//     console.log(event)
// })

//when on any element event listener will be added
//js Engine--line by line execute
//browser-- js Engine + extra features
//browser-- js Engine + WebAPI

//when we perform any event then browser does two thing:
  // give the callback function to js Engine
 // whatever event user performed,it will give information of that event also

 const allButtons=document.querySelectorAll(".my-buttons button")
 console.log(allButtons)

//  for(let button of allButtons){
//     button.addEventListener('click',function(){
//         console.log(this)
//      })
//  }

//  for(let button of allButtons){
//     button.addEventListener('click',(e)=>{
//         console.log(e)
//      })
//  }

// for(let button of allButtons){
//     button.addEventListener('click',(e)=>{
//         console.log(e.currentTarget)//for now currentTarget & target are same but there is difference which is discussed later
//      })
//  }

for(let button of allButtons){
    button.addEventListener('click',(e)=>{
        console.log(e.currentTarget.textContent)//for now currentTarget & target are same but there is difference which is discussed later
     })
 }