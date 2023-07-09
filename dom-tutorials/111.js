
const rootNode=document.getRootNode()
// console.log(rootNode)
// const htmlElementNode=rootNode.childNodes
const htmlElementNode=rootNode.childNodes[0]
// console.log(htmlElementNode)//NodeList//it has only child i.e html
//if we want object repersentaion then 
// console.dir(htmlElementNode)
// console.log(htmlElementNode.childNodes)//NodeList(3) [head, text, body]
// const headElement=htmlElementNode.childNodes[0]
// console.log(headElement)
// const textElement=htmlElementNode.childNodes[1]
// console.log(textElement)
// const bodyElement=htmlElementNode.childNodes[1]
// console.log(bodyElement)

//siblings
// const headNextSibling=htmlElementNode.childNodes[0].nextSibling
// console.log(headNextSibling)
//OR
/*
const headNextSibling=headElement.nextSibling
console.log(headNextSibling)
*/
//const headElement=htmlElementNode.childNodes[0]
// const headNextNextSibling=headElement.nextSibling.nextSibling
// console.log(headNextNextSibling)

// const headElement=htmlElementNode.childNodes[0]
// const headNextNextSibling=headElement.nextElementSibling//nextElementSibling==>it ignores the text node 
//                                                      //and gives next element node
// console.log(headNextNextSibling)


// //I am selecting div tag and change the style
// const h1=document.querySelector("h1")
// console.log(h1.parentNode)
// const div=h1.parentNode
// // div.style.backgroundColor="black"
// // div.style.color="red"
// div.style.backgroundColor="#333"
// div.style.color="#efefef"


// //I am selecting body tag and change the style
// const h1=document.querySelector("h1")
// const body=h1.parentNode.parentNode
// // div.style.backgroundColor="black"
// // div.style.color="red"
// body.style.backgroundColor="#333"
// body.style.color="red"

// const head=document.querySelector("head")
// // console.log(head)
// const title=head.querySelector("title")
// console.log(title.childNodes)

const container=document.querySelector(".container")
console.log(container.childNodes)//[text, h1, text, p, text]
console.log(container.children)//[h1, p]


