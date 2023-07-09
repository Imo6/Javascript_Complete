
const userMethod={
    about: function(){
        return `${this.name} is ${this.age} years old!`
    },
    is18: function(){
        if(this.age>=18){
            return "yes"
        }
        return "no"
    }
}

function createUser(name,age,salary){
    const user={}
    user.name=name
    user.age=age
    user.salary=salary
    user.about=userMethod.about
    user.is18=userMethod.is18
    return user
}
const user1=createUser('Imran',7,500000)
const user2=createUser('Harshit',9,700000)
// console.log(user1)
// console.log(user2)
console.log(user2.about())
console.log(user1.about())

