//reduce method
//take input as a callback fuction

// const numbers=[1,6,3,5,10]
// const sum=numbers.reduce((accumulator,curentValue)=>{
//     return accumulator+curentValue
// })
// console.log(sum)

//accumulator,    curentValue,   return
//  1                6            7
//  7                3            10
//  10               5            15 
//  15               10           25


// //i can provide initial value to accumulator also
// const numbers=[1,6,3,5,10]
// const sum=numbers.reduce((accumulator,curentValue)=>{
//     return accumulator+curentValue
// },100)
// console.log(sum)

const userCart=[
    {productId: 1, productName: "mobile",price:10000},
    {productId: 2, productName: "laptop",price:42000},
    {productId: 3, productName: "tv",price:15000}
]

const totalAmount=userCart.reduce((totalPrice,currentProduct)=>{
    return totalPrice+currentProduct.price
},0)
console.log(totalAmount)

