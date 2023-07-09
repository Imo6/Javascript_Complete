//function returning promise


function ricePromise(){
    const bucket=["cofee","chips","vegetables","salt","rice"]
    return new Promise((resolve, reject)=>{
        if(bucket.includes("vegetables") && bucket.includes("salts") && bucket.includes("rice")){
            resolve("friderice")
        }else{
            reject("can't do it...")
        }
    })
} 

ricePromise().then((resolve)=>{
    console.log(`lets eat ${resolve}`)
}).catch((error)=>{
    console.log(error)
})