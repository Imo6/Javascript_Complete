const URL ="https://jsonplaceholder.typicode.com/posts"

function sendRequest(method, url){
    return new Promise((resolve, reject)=>{
        const xhr= new XMLHttpRequest()
        xhr.open(method,url)
        xhr.onload= ()=>{
            if(xhr.status >=200 && xhr.status <300){
                resolve(xhr.response) // resolve(xhr.responseText)
            }else{
                reject(new Error("Something went wrong!"))
            }
        }
        xhr.onerror= ()=>{
            console.log("Network Error")
        }
        xhr.send()
    })
}

sendRequest('GET',URL).then((response)=>{
    // console.log("Hii.....")
    const data= JSON.parse(response)
    // console.log(data)
    return data
})
.then((response)=>{
    // console.log(response)
    const id= response[3].id
    // console.log(id)
    return id
})
.then((response)=>{
    const url=`${URL}/${response}1`
    // console.log(url)
    return sendRequest('GET',url)
})
.then((response)=>{
    const data= JSON.parse(response)
    console.log(data)
})
.catch((error)=>{
    console.log(error)
})