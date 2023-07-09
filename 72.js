// console.log(this)

// function myfun(){
//     console.log("hello world")
// }
// myfun()

// function myfun(){
//     console.log(this)//o/p window object==>myfun() aslo added into window object
// }
// myfun()
// //second way to call
// window.myfun()


//some times above code creates problem
'use strict'
function myfun(){
        console.log(this)//o/p window object==>myfun() aslo added into window object
}
myfun()//undefined as it true because as no any object defined yet 
//window.myfun()//window object=>o/p don't match expectation beacuse I want current object