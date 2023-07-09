// onreadystatechange ==> this method start executing whenever state will be changing
// onload ==> this method starts execution only when readyState will be 4
// JSON ==> Js Oject Notation ==> It is like a library
// JSON.parse() ==> conver json to js object




// const URL= "https://jsonplaceholder.typicode.com/posts"
// const xhr= new XMLHttpRequest()
// console.log(xhr.readyState) 
// // step=1
// xhr.open('GET',URL) 
// console.log(xhr.readyState)

// xhr.onreadystatechange= function(){
//     console.log(xhr.readyState)
// }
// xhr.send()


// const URL= "https://jsonplaceholder.typicode.com/posts"
// const xhr= new XMLHttpRequest()
// // step=1
// xhr.open('GET',URL) 

// xhr.onreadystatechange= function(){
//     if(xhr.readyState==4){
//         // console.log(xhr.response)
//         const xhrResponse= xhr.response
//         // console.log(typeof xhrResponse)
//         const data= JSON.parse(xhrResponse)
//         console.log(data)
//     }
// }
// xhr.send()




const URL= "https://jsonplaceholder.typicode.com/posts"
const xhr= new XMLHttpRequest()
// step=1
xhr.open('GET',URL) 

xhr.onload= function(){
        const xhrResponse= xhr.response
        const data= JSON.parse(xhrResponse)
        console.log(data)
}
xhr.send()