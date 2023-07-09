
// const userMethod={
//     about: function(){
//         return `${this.name} is ${this.age} years old!`
//     },
//     is18: function(){
//         return this.age>=18
//     },
//     sing: function(){
//         return `la la la la he he he he`
//     }
// }

// function createUser(name,age,salary){
//     const user={}
//     user.name=name
//     user.age=age
//     user.salary=salary
//     user.about=userMethod.about
//     user.is18=userMethod.is18
//     user.sing=userMethod.sing
//     return user
// }
// const user1=createUser('Imran',7,500000)
// const user2=createUser('Harshit',9,700000)
// // console.log(user1)
// // console.log(user2)
// console.log(user2.about())
// console.log(user1.about())
// console.log(user1.sing())




const userMethod={
    about: function(){
        return `${this.name} is ${this.age} years old!`
    },
    is18: function(){
        return this.age>=18
    },
    sing: function(){
        return `la la la la he he he he`
    }
}

function createUser(name,age,salary){
    const user=Object.create(userMethod) //{}
    user.name=name
    user.age=age
    user.salary=salary
    return user
}
const user1=createUser('Imran',7,500000)
const user2=createUser('Harshit',9,700000)
// console.log(user1)
// console.log(user2)
console.log(user2.about())
console.log(user1.about())
console.log(user1.sing())



