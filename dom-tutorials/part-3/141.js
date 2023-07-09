// website ==> https://jsonplaceholder.typicode.com

// Error Hnadling
// onerror ==> it starts execute only when network connection problem occurs
// such as internet disconnect etc


// const URL ="https://jsonplaceholder.typicode.com/postss"
// const xhr=  new XMLHttpRequest()
// xhr.open('GET',URL)
// xhr.onload= ()=>{
//     if(xhr.status >=200 && xhr.status <300){
//         const data=JSON.parse(xhr.response)
//     console.log(data)
//     }else{
//         console.log("something went wrong!")
//     }
// }
// xhr.onerror= ()=>{
//     console.log("Network error!")
// }

// xhr.send()


const URL ="https://jsonplaceholder.typicode.com/posts"
const xhr=  new XMLHttpRequest()
xhr.open('GET',URL)
xhr.onload= ()=>{
    if(xhr.status >=200 && xhr.status <300){
        const data=JSON.parse(xhr.response)
        const id=data[3].id //as i want id only
        // console.log(id)
        const URL2= `${URL}/${id}`
        console.log(URL2)
        const xhr2= new XMLHttpRequest()
        xhr2.open('GET',URL2)
        xhr2.onload= ()=>{
            const data2=JSON.parse(xhr2.response)
            console.log(data2)
        }
        xhr2.send()
    }else{
        console.log("Something went wrong!")
    }
}
xhr.onerror= ()=>{
    console.log("Network error!")
}

xhr.send()