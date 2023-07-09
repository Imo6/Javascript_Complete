//filter method
//take input as a callback fuction

const arr=[12,3,6,5,7]

const resArray=arr.filter((num)=>{
    return num%2===0
})
console.log(resArray)