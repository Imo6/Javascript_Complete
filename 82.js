
function createUser(name,age,salary){
    const user=Object.create(createUser.prototype) //{}
    user.name=name
    user.age=age
    user.salary=salary
    return user
}

createUser.prototype.about=function(){
    return `${this.name} is ${this.age} years old!`
}
createUser.prototype.is18= function(){
    return this.age>=18
}
createUser.prototype.sing= function(){
    return `la la la la he he he he`
}
const user1=createUser('Imran',7,500000)
const user2=createUser('Harshit',9,700000)
console.log(user2.about())
console.log(user1.about())
console.log(user1.sing())



