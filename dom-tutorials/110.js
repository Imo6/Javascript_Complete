//innerHTML

const headLine=document.querySelector(".headline")
// console.log(headLine)
// console.log(headLine.innerHTML)
headLine.innerHTML="<h1>Inner html is changed</h1>"
//i want to add in above innerHTML
// headLine.innerHTML+="<button>Learn More</button>"
//i want to add class also in above innerHTML
headLine.innerHTML+="<button class= \"btn\">Learn More</button>"//\==>for escape sequence 
                                                    //because i cant use "" within ""
console.log(headLine.innerHTML)                                                   




