//Map method
//map is an iterable
//store data in order fashion
//store key value pair like object
//duplicate keys are not allowed like objects
//in Map key will be of any type

//diferent between maps and objects
//objects can have only string or symbol as key
//but in map you can use anything as key like array,number,string

//key value pair
// const person=new Map()
// person.set("firstName","Harshit")
// person.set('age',7)
// person.set(1,'one')
// person.set([1,2,3,0],'one')
// person.set({1:'one'},'oneone')
// // console.log(person)

// //fetch all the key
// console.log(person.keys())
// //fetch value for specified key
// console.log(person.get(1))

// for(let key of person.keys()){
//     console.log(key, typeof key)
// }

// //map destructuring
// for(let [key,value] of person){
//     console.log(key, value)
// }


// const person2=new Map([['firstName','hatshit'],['age',7]])
// console.log(person2)

const perosn1={
    id:1,
    firstName: "hatshit"
}

//now I want to store some extra info about person1 object
const extraInfo=new Map()
extraInfo.set(perosn1,{'age':7,'gender':'male'})
console.log(extraInfo)
console.log(perosn1.id)
console.log(extraInfo.get(perosn1))
console.log(extraInfo.get(perosn1).gender)



