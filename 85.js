//Array is also a protoype

// // let arr=[1,2,3,4]
// //internally javascript treated as
// let arr=new Array(1,2,3,4)
// console.log(Array.prototype)

let arr=[1,2,3,4]
//now i want see prototype of above arr
console.log(Object.getPrototypeOf(arr)) 
// if you observe the above o/p you will see Array not Object
// but we know typeof Array is also a Object 
//if you want to check it is really an Array,you can
console.log(Array.isArray(Object.getPrototypeOf(arr)))//true


                            

