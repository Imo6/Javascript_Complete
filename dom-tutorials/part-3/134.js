// Promise
// means future value
//it is like an objcet
/*
Promise(executor: (resolve: (value: any) => void, reject: (reason?: any) => void) => 
void): Promise<any>
A callback used to initialize the promise. This callback is passed two arguments: a resolve 
callback used to resolve the promise with a value or the result of another promise, and a 
reject callback used to reject the promise with a provided reason or error.

Creates a new Promise.
*/
//Promise is the feature of Browser
// Microtask queue has more priority than callback queue
// Promise add into ==> Microtask queue
// setTimeout ==> callback queue

// const bucket=["cofee","chips","vegetables","salt","rice"]

// const friedRicePromise= new Promise((resolve, reject)=>{
//     if(bucket.includes("vegetables") && bucket.includes("salts") && bucket.includes("rice")){
//         resolve("fride rice")
//     }else{
//         reject("couldn't do it")
//     }
// })

// //Produce

// //Consume
// friedRicePromise.then((resolve)=>{
//     console.log(`lets eat ${resolve}`)
// },(error)=>{
//     console.log(error)
// })



// const bucket=["cofee","chips","vegetables","salt","rice"]

// const friedRicePromise= new Promise((resolve, reject)=>{
//     if(bucket.includes("vegetables") && bucket.includes("salt") && bucket.includes("rice")){
//         resolve({value:"friderice"})
//     }else{
//         reject("couldn't do it")
//     }
// })

// //Produce

// //Consume
// friedRicePromise.then((myfriedrice)=>{
//     console.log("lets eat", myfriedrice)
// }).catch((error)=>{
//     console.log(error)
// })


console.log('script start')
const bucket=["cofee","chips","vegetables","salt","rice"]

const friedRicePromise= new Promise((resolve, reject)=>{
    if(bucket.includes("vegetables") && bucket.includes("salt") && bucket.includes("rice")){
        resolve({value:"friderice"})
    }else{
        reject("couldn't do it")
    }
})

friedRicePromise.then((myfriedrice)=>{
    console.log("lets eat", myfriedrice)
}).catch((error)=>{
    console.log(error)
})

setTimeout(()=>{
    console.log("Hello from setTimeout...")
})

for(let i=0;i<=50;i++){
    console.log(`value of i ${i}`)
}

console.log('script end...')



