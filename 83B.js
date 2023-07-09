//I create one function 
//and this will be called using new keyword
//then how other persong know that this function will be
// called with using new keyword
//concept is ,function name stared with Block letter


function CreateUser(name,age,salary){
    this.name=name
    this.age=age
    this.salary=salary
}

CreateUser.prototype.about=function(){
    return `${this.name} is ${this.age} years old!`
}
CreateUser.prototype.is18= function(){
    return this.age>=18
}
CreateUser.prototype.sing= function(){
    return `la la la la he he he he`
}
const user1=new CreateUser('Imran',7,500000)
const user2=new CreateUser('Harshit',9,700000)
console.log(user2.about())
console.log(user1.about())
console.log(user1.sing())



