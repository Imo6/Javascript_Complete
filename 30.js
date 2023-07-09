//how to clone two array
//how to concate two array

// let arr1=["item1","item2"]
// let arr2=arr1
// console.log(arr1===arr2)


// let arr1=["item1","item2"]
// // let arr2=["item1","item2"]
// // let arr2=arr1.slice(0)
// // let arr2=[].concat(arr1)
// //new way
// //spread operator
// let arr2=[...arr1]
// arr1.push("item3")
// console.log(arr1===arr2)
// console.log("arr1= ",arr1)
// console.log("arr2= ",arr2)


let arr1=["item1","item2"]
// let arr2=["item1","item2"]
// let arr2=arr1.slice(0).concat(["item3","item4"])
// let arr2=[].concat(arr1,"item3","item4")
//new way
//spread operator
let arr2=[...arr1,"item3","item4"]//way-1
/*
////way-2
let newarr=["item3","item4"]
let arr2=[...arr1,...newarr]
*/
arr1.push("item3")
console.log(arr1===arr2)
console.log("arr1= ",arr1)
console.log("arr2= ",arr2)
