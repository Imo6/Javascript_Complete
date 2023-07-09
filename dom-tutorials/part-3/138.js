
const heading1 = document.querySelector(".heading1")
const heading2 = document.querySelector(".heading2")
const heading3 = document.querySelector(".heading3")
const heading4 = document.querySelector(".heading4")
const heading5 = document.querySelector(".heading5")
const heading6 = document.querySelector(".heading6")
const heading7 = document.querySelector(".heading7")
const heading8 = document.querySelector(".heading8")
const heading9 = document.querySelector(".heading9")
const heading10 = document.querySelector(".heading10")

function changeText1(element, text, color, time){
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            if(element){
                element.textContent= text
                element.style.color= color
                resolve()
            }else{
                reject()
            }
        },time)
    })
}

changeText1(heading1, "One", "blue", 1000)
.then(()=> changeText1(heading2, "Two", "red", 1000))
.then(()=> changeText1(heading3, "Three", "aqua", 1000))
.then(()=> changeText1(heading4, "Four", "black", 1000))
.then(()=> changeText1(heading5, "Five", "yellow", 1000))
.then(()=> changeText1(heading6, "Six", "purple", 1000))
.then(()=> changeText1(heading7, "Seven", "green", 1000))
.then(()=> changeText1(heading8, "Eight", "cyan", 1000))
.then(()=> changeText1(heading9, "Nine", "orange", 1000))
.then(()=> changeText1(heading10, "Ten", "magenta", 1000))
.catch(error=>alert(error))
