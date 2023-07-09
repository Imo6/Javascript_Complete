// Promise & setTimeout

// I want to resolve or reject promise after 2 second

function myPromise(){
    const value=false
    return new Promise((resolve, reject)=>{
       setTimeout(()=>{
        if(value){
            resolve()
        }else{
            reject()
        }
       },2000)
    })
}

myPromise().then(()=>{
    console.log("resolved")
}).catch(()=>{
    console.log("rejected")
})
