//sort method
//it changes the original array
//javascript sort the element as String
//and consider it's ASCII Value

// const arr=["David","Kim","Kiran","Shristi","Alfaz"]
// arr.sort()
// console.log(arr)

// const arr=[5,3,7,2,67,23,72]
// arr.sort()
// console.log(arr)//don't give expected o/p

// const arr=[5,3,7,2,67,23,72]
// arr.sort((a,b)=>{
//     return a-b
// })
// console.log(arr)//expected o/p

const products=[
    {productId:3, productName:"mobile", price: 15000},
    {productId:4, productName:"laptop", price: 45000},
    {productId:1, productName:"tv", price: 18000},
    {productId:6, productName:"trimer", price: 1000},
    {productId:2, productName:"shoe", price: 3000},
    {productId:5, productName:"jeans", price: 2500},
]

// const sortByPrice=products.sort((a,b)=>{
//     return a.price-b.price
// })
// console.log(sortByPrice)

// const sortByPriceHighToLow=products.sort((a,b)=>{
//     return b.price-a.price
// })
// console.log(sortByPriceHighToLow)

//but above code changes the origunal array
const sortByPrice1=products.slice(0).sort((a,b)=>{
    return a.price-b.price
})
console.log(sortByPrice1)
console.log(products)