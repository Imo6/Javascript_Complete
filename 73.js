//call  apply  bind

// const user1={
//     firstName: "harshit",
//     age: 7,
//     about: function(){
//         console.log(this.firstName,this.age)
//     }
// }
// user1.about()


// //now i want about method inside user2 without writing
// const user1={
//     firstName: "harshit",
//     age: 7,
//     about: function(){
//         console.log(this.firstName,this.age)
//     }
// }
// const user2={
//     firstName: "mohit",
//     age: 9
// }
// user1.about.call(user2)
// //user1.about.call()//undefined undefined


// const user1={
//     firstName: "harshit",
//     age: 7,
//     about: function(gender,hobby){
//         console.log(this.firstName,this.age,gender,hobby)
//     }
// }
// const user2={
//     firstName: "mohit",
//     age: 9
// }
// // user1.about.call(user2)//undefined undefined
// user1.about.call(user2,"male")//mohit 9 male undefined
// user1.about.call(user2,"male","guitar")


// function fun1(gender,hobby){
//     console.log(this.firstName,this.age,gender,hobby)
// }
// const user1={
//     firstName: "harshit",
//     age: 7,
// }
// const user2={
//     firstName: "mohit",
//     age: 9
// }
// fun1.call(user2,"male","guitar")
// fun1.call(user1,"male","guitar")

//apply
// fun1.apply(user2,["male","guitar"])
// fun1.apply(user1,["male","guitar"])

function fun1(gender,hobby){
    console.log(this.firstName,this.age,gender,hobby)
}
const user1={
    firstName: "harshit",
    age: 7,
}
const user2={
    firstName: "mohit",
    age: 9
}
//bind
const resfun=fun1.bind(user2,"male","guitar")
resfun()



