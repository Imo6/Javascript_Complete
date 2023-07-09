//new
//1. create empty object==>{}
//2.return this
//3. this keyword automatically will do this work 'Object.create(createUser.prototype)'


function createUser(name,age){
  this.name=name,
  this.age=age
}
createUser.prototype.about=function(){
    console.log(this.name,this.age)
}
const user1=new createUser("harshit",9)
// console.log(user1)
user1.about()


//bydefault new keyword set the value of prototo is equal to prototype
//proto is a reference and proto helps to reach out to prototype
// if js didn't find any thing any user then he further will goes to prototype