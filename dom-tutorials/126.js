const mainButton=document.querySelector("button")
const body=document.body //I am selecting body because I want to change the color of body //nothing else
const currentColor=document.querySelector(".current-color")

function randomColorGenerator(){
    const red=Math.floor(Math.random()*256)
    const green=Math.floor(Math.random()*256)
    const blue=Math.floor(Math.random()*256)
    const randomColor=`rgb(${red},${green},${blue})`
    return randomColor
}
mainButton.addEventListener('click',()=>{
   const randomColor=randomColorGenerator()
//    console.log(randomColor)
  body.style.backgroundColor=randomColor
  currentColor.textContent=randomColor
})

