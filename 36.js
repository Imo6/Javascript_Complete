//Object
//Object is a refrence type

// const person={name:"David",age:22,salary:10000}
// console.log(person)
// console.log(typeof person) //object
// console.log(person.age)
// console.log(person.salary)

const person={
    name:"David",
    age:22,
    salary:10000,
    hobbies:["sleeping","playing cricket","guitar"]
}
console.log(person)
console.log(typeof person) //object
console.log(person.age)
console.log(person.salary)
console.log(person.hobbies)

//how to add key value pair to object
person.gender="male"
console.log(person)

//in javascript key bydefault in String
// console.log(person[name]) //error
console.log(person["name"])

//how to add key value pair to object
person["status"]="married"
console.log(person)
