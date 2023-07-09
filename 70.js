//Optional Chaining

// const person1={
//     firstName: "hatshit",
//     address: {houseNo:1234}
// }
// console.log(person1.firstName)
// console.log(person1.address)
// console.log(person1.address.houseNo)


// const person1={
//     firstName: "hatshit",
// }
// console.log(person1.firstName)
// console.log(person1.address)//undefined
// console.log(person1.address.houseNo)//error

const person1={
    firstName: "hatshit",
}
console.log(person1.firstName)
console.log(person1?.address)
console.log(person1?.address?.houseNo)//error