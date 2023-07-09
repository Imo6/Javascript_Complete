//difference between dot and bracket notation

// const person={
//     name:"David",
//     age:22,
//     salary:10000,
//     "persion hobbies":["sleeping","playing cricket","guitar"] //error
// }

// // console.log(person.persion hobbies)//error
// // console.log(person."persion hobbies")//error

// //but using bracket notation possible
// // console.log(person[persion hobbies])//error
// console.log(person["persion hobbies"])


const key="email"
const person={
    name:"David",
    age:22,
    salary:10000,
    "persion hobbies":["sleeping","playing cricket","guitar"] //error
}
// person["key"]="david@123gmail.com" //but key should be eamil but it is keystill
// console.log(person)

person[key]="david@123gmail.com"  
console.log(person)