//async await
//async always return promise


// const URL ="https://jsonplaceholder.typicode.com/posts"

// async function getPosts(){

// }

// const res=getPosts()
// console.log(res)


// const URL ="https://jsonplaceholder.typicode.com/posts"

// async function getPosts(){
//     const response= await fetch(URL)
//     const data= await response.json()
//     return data
// }

// const res=getPosts()
// console.log(res) // until we got promise, Below is the solution of this


// const URL ="https://jsonplaceholder.typicode.com/posts"

// async function getPosts(){
//     const response= await fetch(URL)
//     const data= await response.json()
//     return data
// }

// getPosts()
//     .then((response) => {
//         console.log(response)
//     })


// const URL ="https://jsonplaceholder.typicode.com/posts"

// const getPosts = async () => {
//     const response = await fetch(URL)
//     const data = await response.json()
//     return data
// }

// getPosts()
//     .then((response) => {
//         console.log(response)
//     })




// //if URL wrong,now catch block run
// const URL ="https://jsonplaceholder.typicode.com/posts"
// async function getPosts(){
//     const response= await fetch(URL)
//     if(!response.ok){
//         return new Error("Something went wrong!")
//     }
//     const data= await response.json()
//     return data
// }

// getPosts()
//     .then((response) => {
//         console.log(response)
//     })
//     .catch(error=>console.log(error))


//you might say work is going synchronously but work is goin on asynchronously
// if you don't beleive ,i will prove ,see below code
console.log("sript start...")

const URL ="https://jsonplaceholder.typicode.com/posts"
async function getPosts(){
    const response= await fetch(URL)
    if(!response.ok){
        return new Error("Something went wrong!")
    }
    const data= await response.json()
    return data
}

getPosts()
    .then((response) => {
        console.log(response)
    })
    .catch(error=>console.log(error))

console.log("sript end...")    