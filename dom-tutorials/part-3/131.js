//setInterval

// console.log("sript start..")
// setInterval(()=>{
//     console.log(Math.random())
// },500)
// console.log("sript end..")

const body= document.body
const setIntervalId= setInterval(()=>{
    const red=Math.floor(Math.random()*126)
    const green=Math.floor(Math.random()*126)
    const blue=Math.floor(Math.random()*126)
    // console.log(`${red} ${green} ${blue}`)
    const rgb=`rgb(${red}, ${green}, ${blue})`
    body.style.background= rgb
},1000)
const button= document.querySelector("button")
button.addEventListener("click",()=>{
    clearInterval(setIntervalId)
    button.textContent= body.style.background
})
