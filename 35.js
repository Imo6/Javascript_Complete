//array destructuring

// let arr=["item1","item2","item3"]
// let a=arr[0]
// let b=arr[1]
// console.log(a)
// console.log(b)

// let arr=["item1","item2","item3"]
// let [a,b]=arr
// console.log(a)
// console.log(b)


// let arr=["item1","item2","item3"]
// let [a, ,c]=arr
// console.log(a)
// console.log(c)

let arr=["item1","item2","item3","item4"]
let [a,b,...newarr]=arr
console.log(a)
console.log(b)
console.log(newarr)