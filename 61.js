//find
//input as a callback function
//return first occurance

// const myarray=["elephent","cat","dog","Horse"]
// const res=myarray.find(name=>name.length===3)
// console.log(res)

const users=[
    {id:1,name:"David",age:23,gender:"male"},
    {id:2,name:"kim",age:13,gender:"female"},
    {id:3,name:"mona",age:20,gender:"female"},
    {id:4,name:"sona",age:16,gender:"female"}
]
const findUserById=users.find((user)=>user.id===3)
console.log(findUserById)
