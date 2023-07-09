//callback

// function myfun1(callback){
//     console.log("Inside myfun1...")
//     callback()
// }

// function myfun2(){
//     console.log("Inside myfun2...")
// }
// myfun1(myfun2)


// function myfun1(num1, num2, callback){
//     callback(num1, num2)
// }

// function myfun2(num1, num2){
//     console.log(num1+num2)
// }
// myfun1(4,5,myfun2)


// function myfun1(num1, num2, callback){
//     if(typeof num1=== "number" && typeof num2==="number"){
//         callback(num1, num2)
//     }else{
//         console.log("Please enter valid data types")
//     }
// }

// function myfun2(num1, num2){
//     console.log(num1+num2)
// }
// myfun1(4,"34",myfun2)


// function myfun1(num1, num2, onSuccess, onFailure){
//     if(typeof num1=== "number" && typeof num2==="number"){
//         onSuccess(num1, num2)
//     }else{
//         onFailure()
//     }
// }

// myfun1(4,10, (num1, num2)=>{
//     console.log(num1+num2)
// },()=>{
//     console.log("wrong datatypes")
//     console.log("Please enter valid data types")
// })


function myfun1(num1, num2, onSuccess, onFailure){
    if(typeof num1=== "number" && typeof num2==="number"){
        onSuccess(num1, num2)
    }else{
        onFailure()
    }
}

function onSuccess(num1, num2){
    console.log(num1+num2)
}
function onFailure(){
    console.log("wrong datatypes")
    console.log("Please enter valid data types")
}
myfun1(4,"34",onSuccess, onFailure) 