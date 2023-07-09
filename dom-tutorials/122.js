const allButtons=document.querySelectorAll(".my-buttons button")
// console.log(allButtons)

// for(let button of allButtons){
//     button.addEventListener('click',function(){
//         console.log(this)
//     })
// }

// for(let i=0;i<allButtons.length;i++){
//     allButtons[i].addEventListener('click',function(){
//         console.log(this)
//     })
// }

allButtons.forEach(function(button){
    button.addEventListener('click',function(){
       console.log(this)
    })
})



/*
//const allButtons = document.querySelectorAll(".my-buttons button")
//In this code, document.querySelectorAll(".my-buttons button") selects all the <button> 
elements that are descendants of elements with the class "my-buttons". This means it will 
return a NodeList or an array-like object containing all the matching <button> elements. 
//Each element will be separately accessible in the returned collection
*/

/*
//const allButtons = document.querySelectorAll(".my-buttons")
//Here, document.querySelectorAll(".my-buttons") selects all the elements that have the class
 "my-buttons". This includes any element (not just buttons) that has the specified class. 
 The returned collection will be a NodeList or an array-like object containing all the 
 matching elements, but not specifically the buttons themselves.
*/