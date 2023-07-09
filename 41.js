//Object destructuring

const obj={
    name:"David",
    age:22,
    city:"India",
    hobby:"Singing"
}
// const {name,age}=obj
// console.log(name)
// console.log(age)

// const {name: name1,age:age1}=obj
// console.log(name1)
// console.log(age1)

const {name: name1,age:age1,...restprops}=obj
console.log(name1)
console.log(age1)
console.log(restprops)