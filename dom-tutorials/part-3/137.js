//Promise.resolve
//Promise chaining

//then()
//then() always return promise
//then you might say what is the benefit of that?
//benefits of that is we can create a chain of promise

// const myPromise= Promise.resolve(5)
// myPromise.then((resolve)=>{
//     console.log(resolve)
// })


// Promise.resolve(25).then((resolve)=>{
//     console.log(resolve)
// })



const myPromise=new Promise(resolve=>{
    resolve("foo")
})
myPromise.then((value)=>{
    let val= value
    val+=" bar"
    return val
    //internally javascript return below syntax
    // return Promise.resolve(val)
    /*
    if you do not write return then js bydefault returned undefined
    return Promise.resolve(undefined)
    */
})
.then(value=>{
    console.log(value)
})