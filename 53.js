//parameter destructuring

//object
//react

// const person={
//     name:"David",
//     gender:"male"
// }
//
// const myapp=(obj)=>{
//     console.log(obj.name)
//     console.log(obj.gender)
//     // console(obj.age)//error
// }
// myapp(person)


// const person={
//     name:"David",
//     gender:"male"
// }
// const myapp=({name,gender})=>{
//     console.log(name)
//     console.log(gender)
// }
// myapp(person)


// const person={
//     name:"David",
//     gender:"male"
    
// }
// const myapp=({name,gender,age})=>{
//     console.log(name)
//     console.log(gender)
//     console.log(age)//undefined
// }
// myapp(person)

const person={
    name:"David",
    gender:"male"
    
}
const myapp=({name:firstName,gender:gen})=>{
    console.log(firstName)
    console.log(gen)
}
myapp(person)