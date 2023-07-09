// const user1={
//     'key1':'value1',
//     'key2':'value2'
// }

// const user2={
//     'key3':'value3',
//     // 'key2':'value2'
// }
// console.log(user1.key1)
// console.log(user2.key3)
// console.log(user2.key1)//undefined but my requirement is
//                       // whenever key not present in 
//                     //user2 ,it will serch in user1 also


const user1={
    'key1':'value1',
    'key2':'value2'
}


//__proto__
//it is nothing but it simply a reference
//official ecmascript documentation
//[[prototype]]
//__proto__ , [[prototype]]

//prototype is different concept

// const user2={}
//there is one more way to create empty object in javascript
const user2=Object.create(user1)//{}
user2.key3='value3'
console.log(user2.key3)
console.log(user2.key1)//key1 is not present in user2 but
                       //it serch on it's proto
console.log(user2)//observe the o/p
console.log(user2.__proto__) //{key1: 'value1', key2: 'value2'}                      