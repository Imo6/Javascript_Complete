//every method
//input as a callback function
//return True/False

// const arr=[2,4,6,20,24,64]
// const res=arr.every(num=>num%2===0)
// console.log(res)

// const arr=[2,4,6,21,24,64]
// const res=arr.every(num=>num%2===0)
// console.log(res)


const userCart=[
    {productId: 1, productName: "mobile",price:10000},
    {productId: 2, productName: "laptop",price:42000},
    {productId: 3, productName: "tv",price:15000}
]

const res=userCart.every(cartItem=>cartItem.price<45000)
console.log(res)
