//function returning function 
//Highre order function

// function myfun2(){
//     function myfun(myfun2){
//         console.log("inside myfun..")
//     }
//     return myfun
// }
// const resfun=myfun2()
// resfun()



// function myfun2(){
//     function myfun(myfun2){
//         return "inside myfun.."
//     }
//     return myfun
// }
// const resfun=myfun2()
// console.log(resfun())


function myfun2(){
    return function myfun(myfun2){
        return "inside myfun..."
    }
}
const resfun=myfun2()
console.log(resfun())