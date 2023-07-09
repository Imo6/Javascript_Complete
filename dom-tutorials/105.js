//Change text
//textContent and innerText
//textContent==>it is a property who gives the proprty name
//textContents==>textContents is all text contained by an element and all its children 
                //that are for formatting purposes only. 
//innerText==>innerText returns all text contained by an element and all its child elements.


//innerText
//It returns the visible text contained in a node.
//	It is defined only for HTMLElement objects.
//This property is not supported in IE9 and earlier.

//textContent
//It returns the full text.
//It is defined for all Node objects.
//This property is not supported in Internet Explorer 8 and earlier.

const mainHeading=document.getElementById("main-heading") 
console.log(mainHeading.textContent)// Manage your tasks Hello
// mainHeading.textContent="This is something else"
// console.log(mainHeading.textContent)//o/p=>This is something else

console.log(mainHeading.innerText)//o/p=>Manage your tasks
mainHeading.innerText="This is something else"
console.log(mainHeading.innerText)//o/p=>This is something else


