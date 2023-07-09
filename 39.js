const key1="objkey1"
const key2="objkey2"

const val1="objval1"
const val2="objval2"

// //I want to construct like this type of array of object
// const obj={
//     objkey1:"objval1",
//     objkey2:"objval"
// }

// const obj={
//     key1: val1,
//     key2: val2
// }
// console.log(obj)//observe "key1" is as it is but i want "key" as "objkey1"

const obj={
    [key1]: val1,
    [key2]: val2
}
console.log(obj)