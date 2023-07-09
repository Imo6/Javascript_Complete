//rest parameters

// function myFun(a,b,c){
//     console.log(`a= ${a}`)
//     console.log(`a= ${b}`)
//     console.log(`a= ${c}`)
//     // console.log(`a= ${d}`)//Uncaught ReferenceError: d is not defined
// }
// myFun(3,2,5)

// function myFun(a,b,c){
//     console.log(`a= ${a}`)
//     console.log(`a= ${b}`)
//     console.log(`a= ${c}`)
//     console.log(`a= ${d}`)
// }
// myFun(3,2,5,5,7,8)//Uncaught ReferenceError: d is not defined


// function myFun(a,b,c,...d){
//     console.log(`a= ${a}`)
//     console.log(`a= ${b}`)
//     console.log(`a= ${c}`)
//     console.log(`a= ${d}`)
// }
// myFun(3,2,5,10,5,7,8)


//function
//add all numbers
function myFun(...num){
    let total=0
    for(let nums of num){
        total+=nums
    }
   return total
}
const sum=myFun(3,2,5,10,5,7,8)
console.log(sum)