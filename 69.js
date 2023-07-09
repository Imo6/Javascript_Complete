//cloning using Object.assign()

// const person1={
//     id:1,
//     firstName: "hatshit"
// }
// const person2=person1
// console.log(person1)
// console.log(person2)
// person1.gender='male'
// //after changes
// console.log(person1)
// console.log(person2)


// const person1={
//     id:1,
//     firstName: "hatshit"
// }
// const person2={...person1}
// console.log(person1)
// console.log(person2)
// person1.gender='male'
// //after changes
// console.log(person1)
// console.log(person2)


const person1={
    id:1,
    firstName: "hatshit"
}
const person2=Object.assign({},person1)
console.log(person1)
console.log(person2)
person1.gender='female'
//after changes
console.log(person1)
console.log(person2)

