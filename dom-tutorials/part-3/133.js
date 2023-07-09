// callback, callback hell, pyramid of DOM
//asynchronous programing

// const heading1= document.querySelector(".heading1")
// const heading2= document.querySelector(".heading2")
// setTimeout(()=>{
//     heading1.textContent= "Heading 1"
//     heading1.style.color="aqua"
// },1000)
// setTimeout(()=>{
//     heading2.textContent= "Heading 2"
//     heading2.style.color="aqua"
// },1000)


// const heading1= document.querySelector(".heading1")
// const heading2= document.querySelector(".heading2")
// const heading3= document.querySelector(".heading3")
// const heading4= document.querySelector(".heading4")
// setTimeout(()=>{
//     heading1.textContent= "Heading 1"
//     heading1.style.color="aqua"
//     setTimeout(()=>{
//         heading2.textContent= "Heading 2"
//         heading2.style.color="red"
//         setTimeout(()=>{
//             heading3.textContent= "Heading 3"
//             heading3.style.color="green"
//             setTimeout(()=>{
//                 heading4.textContent= "Heading 4"
//                 heading4.style.color="purple"
//             },1000)
//         },2000)
//     },2000)
// },1000)


// const heading1 = document.querySelector(".heading1")
// const heading2 = document.querySelector(".heading2")
// function changeText1(element, text, color, time){
//     setTimeout(()=>{
//         element.textContent= text
//         element.style.color= color
//     },time)
// }
// changeText1(heading1, "One","aqua",2000)


//callback hell
//Pyramid of DOM
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
function changeText1(element, text, color, time, onSuccessCallback, onFailureCallback) {
    setTimeout(() => {
        if (element) {
            element.textContent = text
            element.style.color = color
            if (onSuccessCallback) {
                onSuccessCallback()
            }
        } else {
            if (onFailureCallback) {
                onFailureCallback()
            }
        }
    }, time)
}
changeText1(heading1, "One", "aqua", 2000, () => {
    changeText1(heading2, "Two", "red", 2000, () => {
        changeText1(heading3, "Three", "black", 2000, () => {
            changeText1(heading4, "Four", "green", 2000, () => {
                changeText1(heading5, "Five", "blue", 2000, () => {
                    changeText1(heading6, "Six", "purple", 2000, () => {
                        changeText1(heading7, "Seven", "pink", 2000, () => {
                            changeText1(heading8, "Eight", "yellow", 2000, () => {
                                changeText1(heading9, "Nine", "brown", 2000, () => {
                                    changeText1(heading10, "Ten", "cyan", 2000, () => {

                                    }, () => {
                                        console.log("heading10 doesn't exists..")
                                    })
                                }, () => {
                                    console.log("heading9 doesn't exists..")
                                })
                            }, () => {
                                console.log("heading8 doesn't exists..")
                            })
                        }, () => {
                            console.log("heading7 doesn't exists..")
                        })
                    }, () => {
                        console.log("heading6 doesn't exists..")
                    })
                }, () => {
                    console.log("heading5 doesn't exists..")
                })
            }, () => {
                console.log("heading4 doesn't exists..")
            })
        }, () => {
            console.log("heading3 doesn't exists..")
        })
    }, () => {
        console.log("heading2 doesn't exists..")
    })
}, () => {
    console.log("heading1 doesn't exists..")
})