// const user1={
//     firstName: "harshit",
//     age: 7,
//     about: function(){
//         //console.log(this)//window
//         console.log(this.firstName,this.age)
//     }
// }
// const myFun=user1.about
// myFun()//undefined undefined

/*
const myFun=user1.about
//meaning of above line is
const myFun=function(){
        console.log(this.firstName,this.age)
    }
//don't do this mistake
*/

const user1={
    firstName: "harshit",
    age: 7,
    about: function(){
        console.log(this.firstName,this.age)
    }
}
const myFun=user1.about.bind(user1)
myFun()