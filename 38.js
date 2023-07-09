//How to iterate through object
//two ways
//for in loop and Object.keys

const person={
    name:"David",
    age:22,
    salary:10000,
    "persion hobbies":["sleeping","playing cricket","guitar"] //error
}

//for in loop
// for(let key in person){
//     console.log(key)
// }

// for(let key in person){
//     console.log(person.key)//o/p==>undefined bcz it serach "key" with the name "key"
// }

// for(let age in person){
//     console.log(person.age)//o/p==>22 four times
// }

// for(let key in person){
//     console.log(person[key])
// }

for(let key in person){
    // console.log(`${key}:${person[key]}`)
    console.log(key,":",person[key])
}


//Object.keys
// console.log(Object.keys(person))//return array of key
// console.log(typeof (Object.keys(person)))//object==>as type of array is object

// //if you want to check that is array or not
// //then using isArray method of Array,you cam check
// const val= Array.isArray(Object.keys(person))
// console.log(val)//true

for(let key of Object.keys(person)){
    // console.log(key)
    console.log(person[key])
}
