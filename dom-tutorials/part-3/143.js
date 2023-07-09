// website ==> https://jsonplaceholder.typicode.com

// fetch
//bydefault Get request
//fetch returns promise
// to parse the response 'json()' method is used
// fetch reject only when you have a network related issue
// JSON.stringify ==>convert object into JSON

// const URL ="https://jsonplaceholder.typicode.com/posts"

// const value= fetch(URL)
// console.log(value)

// fetch(URL)
//     .then((response) => {
//         console.log(response)
//     })


// fetch(URL)
//     .then((response) => {
//         console.log(response.json()) // it also returns promise
//     })

//response.json() returns promise then i want to know from which value it get resolve
// fetch(URL)
//     .then((response) => {
//         return response.json() // it also returns promise
//     })
//     .then((data)=>{
//         console.log(data)
//     })


// //catch block won't be execute in any case until you(developer) might throw error
// const URL ="https://jsonplaceholder.typicode.com/posts"
// fetch(URL)
//     .then((response) => {
//         console.log(response)//in case of wrong url value of 'ok' is 'false' otherwise 'true'
//         return response.json() // it also returns promise
//     })
//     .then((data)=>{
//         console.log(data)
//     })
//     .catch((error)=>{
//         console.log(error)
//     })


//now catch block will work bcz I explicitly throw an error
// const URL ="https://jsonplaceholder.typicode.com/postss"
// fetch(URL)
//     .then((response) => {
//         if(response.ok){
//             return response.json()
//         }else{
//             return new Error("Something went wrong!")
//         }
//     })
//     .then((data)=>{
//         console.log(data)
//     })
//     .catch((error)=>{
//         console.log(error)
//     })



const URL ="https://jsonplaceholder.typicode.com/posts"
fetch(URL,{
    method: 'POST',
    body: JSON.stringify({
      title: 'foo',
      body: 'bar',
      userId: 1,
    }),
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
    },
  })
    .then((response) => {
        if(response.ok){
            return response.json()
        }else{
            return new Error("Something went wrong!")
        }
    })
    .then((data)=>{
        console.log(data)
    })
    .catch((error)=>{
        console.log(error)
    })