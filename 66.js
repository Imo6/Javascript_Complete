//iterables
//jispe hum for of loop lga sakein
//string, array are iterable

//array Like object
//jinke pas length property hoti hai
//aur jinko hum index se access kr skte hain
//e.g string


// const names="Harshit"
// for(let char of names){
//     console.log(char)
// }

// const arr=['item1',"item2",'item3']
// for(let ele of arr){
//     console.log(ele)
// }


// const users=[
//     {id:1,name:"David",age:23,gender:"male"},
//     {id:2,name:"kim",age:13,gender:"female"},
//     {id:3,name:"mona",age:20,gender:"female"},
//     {id:4,name:"sona",age:16,gender:"female"}
// ]
// for(let user of users){
//     console.log(user)
// }

// const users={"key1": "value1","key2": "value1"}
// for(let user of users){
//     console.log(user)//66.js:28 Uncaught TypeError: users is not iterable
// }


//array Like object
const names="Harshit"
console.log(names.length)
console.log(names[1])