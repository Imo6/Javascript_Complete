//splice method
//strat, delete, insert
//changes orginal array
//also return the deleted element if you want to see then you can


const arr=["item1","item2","item3"]

// //delete
// arr.splice(1,1)
// console.log(arr)

// //delete
// const deletedItem=arr.splice(1,2)
// console.log(deletedItem)
// console.log(arr)

// //insert
// arr.splice(2,0,"insertedItem1","insertedItem2")
// console.log(arr)

//insert & delete simulaneously
arr.splice(2,1,"insertedItem1","insertedItem2")
console.log(arr)