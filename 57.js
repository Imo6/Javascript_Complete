//map method
//take input as a callback fuction
//always make new array when iterate 

// const arr=[12,3,1,5,7]
// const myfun=function(num){
//     return num*num
// }
// const resArray=arr.map(myfun)
// console.log(resArray)


// const arr=[12,3,1,5,7]
// const myfun=function(num){
//     console.log(num*num)
// }
// const resArray=arr.map(myfun)
// console.log(resArray)//o/p=>undefined because function doesn't return anything


// const arr=[12,3,1,5,7]
// const myfun=function(num,index){
//     return `index : ${index}, ${num*num}`
// }
// const resArray=arr.map(myfun)
// console.log(resArray)


// const arr=[12,3,1,5,7]

// const resArray=arr.map((num,index)=>{
//     return `index : ${index}, ${num*num}`
// })
// console.log(resArray)


const users=[
    {userId:1,userName:'harshit',gender:'male'},
    {userId:2,userName:'mohit',gender:'male'},
    {userId:3,userName:'kiran',gender:'female'},
]

const resArray=users.map((user)=>{
    return user.userName
})
console.log(resArray)