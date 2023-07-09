//Important method of Array
//forEach
//it doesn't give new array but map map method gives new array


// const arr=[2,4,1,5,7]
// function myfun(num,index){
//     console.log(`index is ${index}`)
//     console.log(`${num}*2 = ${num*2}`)
// }
// myfun(arr[3],0)


// //i want above pattern for all the element of array
// const arr=[2,4,1,5,7]
// function myfun(num,index){
//     // console.log(`index is ${index}`)
//     // console.log(`${num}*2 = ${num*2}`)
//     console.log(`index is ${index} number is ${num*2}`)
// }

// // for(let i=0;i<arr.length;i++){
// //     myfun(arr[i],i)
// // }

// //above traditional for lop can be replaced by forEach method
// arr.forEach(myfun)



// const arr=[2,4,1,5,7]

// arr.forEach(function(num,index){
//     console.log(`index is ${index} number is ${num*2}`)
// })



const arr=[2,4,1,5,7]

arr.forEach((num,index)=>{
    console.log(`index is ${index} number is ${num*2}`)
})



const users=[
    {name:"David",age:23,gender:"male"},
    {name:"kim",age:13,gender:"female"},
    {name:"mona",age:20,gender:"female"}
]

// users.forEach(user=>{
//     console.log(user.name)
// })

users.forEach((user,index)=>{
    console.log(user.name," ",index)
})

//I can use for of loop also
for(let user of users){
    console.log(user.name)
}