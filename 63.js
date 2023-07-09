//some method
//input callback function
//return true if any one match condition 

const userCart=[
    {productId: 1, productName: "mobile",price:10000},
    {productId: 2, productName: "laptop",price:42000},
    {productId: 3, productName: "tv",price:15000}
]

const res=userCart.some(cartItem=>cartItem.price>40000)
console.log(res)