//for in loop in array

// let fruits=["apple","mango","banana"]
// for(let index in fruits){
//     console.log(index)
// }
// console.log(fruits)

let fruits=["apple","mango","banana"]
let fruits2=[]
for(let index in fruits){
    fruits2.push(fruits[index])
}
console.log(fruits2)