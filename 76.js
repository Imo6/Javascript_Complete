// const user1={
//     firstName: "harshit",
//     age: 7,
//     about: function(){
//         console.log(this.firstName,this.age)
//     }
// }
// user1.about(user1)


//i can write above functin as below also
const user1={
    firstName: "harshit",
    age: 7,
    about(){
        console.log(this.firstName,this.age)
    }
}
user1.about(user1)