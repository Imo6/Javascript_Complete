//callback function
//Highre order function

// function myFun2(){
//     console.log("inside myFun2")
// }

// function myFun(callback){
//     console.log(callback)
// }
// myFun(myFun2)


function myFun2(name){
    console.log(`inside myFun2 ${name}`)
}

function myFun(callback){
    console.log("inside myFun")
    callback("harshit")
}
myFun(myFun2)