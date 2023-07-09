//function
//add key value pair
//return object

function createUser(name,age,salary){
    const user={}
    user.name=name
    user.age=age
    user.salary=salary
    user.about=()=>{
     return `${name} is ${age} years old!`
    }
    user.is18=()=>{
        if(age>=18){
            return "yes"
        }
        return "no"
    }
    return user
}
const user1=createUser('Imran',7,500000)
console.log(user1)
const res1=user1.about()
console.log(res1)
const res2=user1.is18()
console.log(res2)

