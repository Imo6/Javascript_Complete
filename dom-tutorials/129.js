const todoForm= document.querySelector(".form-todo") 
// console.log(todoForm)
// todoForm.addEventListener("submit",()=>{
//     console.log("form submitted");
// })


// todoForm.addEventListener("submit",(e)=>{
//     e.preventDefault() //preventDefault==>it prevent the page to refresh again
//     console.log("form submitted");
// })


// const todoInput= document.querySelector(".form-todo input[type='text']")
// todoForm.addEventListener("submit",(e)=>{
//     e.preventDefault() //preventDefault==>it prevent the page to refresh again
//     console.log(todoInput.value);
// })


// const todoInput= document.querySelector(".form-todo input[type='text']")
// todoForm.addEventListener("submit",(e)=>{
//     e.preventDefault() //preventDefault==>it prevent the page to refresh again
//     console.log(todoInput.value);
//     todoInput.value=""
// })


// const todoInput= document.querySelector(".form-todo input[type='text']")
// const todoList= document.querySelector(".todo-List")
// todoForm.addEventListener("submit",(e)=>{
//     e.preventDefault() //preventDefault==>it prevent the page to refresh again
//     const newtodoText= todoInput.value
//     const newLi= document.createElement("li")
//     const newLiInnerHtml= `
//     <span class="text">${newtodoText}</span>
//           <div>
//             <button class="todo-btn done">Done</button>
//             <button class="todo-btn remove">Remove</button>
//           </div>
//     `
//     newLi.innerHTML=newLiInnerHtml
//     todoList.append(newLi)
//     todoInput.value=""
// })


// const todoInput= document.querySelector(".form-todo input[type='text']")
// const todoList= document.querySelector(".todo-List")
// todoForm.addEventListener("submit",(e)=>{
//     e.preventDefault() //preventDefault==>it prevent the page to refresh again
//     const newtodoText= todoInput.value
//     const newLi= document.createElement("li")
//     const newLiInnerHtml= `
//     <span class="text">${newtodoText}</span>
//           <div>
//             <button class="todo-btn done">Done</button>
//             <button class="todo-btn remove">Remove</button>
//           </div>
//     `
//     newLi.innerHTML=newLiInnerHtml
//     todoList.append(newLi)
//     todoInput.value=""
// })
// todoList.addEventListener("click",(e)=>{
//     // console.log(e.target)
//     if(e.target.classList.contains("remove")){
//         console.log("you want to remove something ?")
//     }
//     if(e.target.classList.contains("done")){
//         console.log("great!!!!")
//     }
// })



const todoInput= document.querySelector(".form-todo input[type='text']")
const todoList= document.querySelector(".todo-List")
todoForm.addEventListener("submit",(e)=>{
    e.preventDefault() //preventDefault==>it prevent the page to refresh again
    const newtodoText= todoInput.value
    const newLi= document.createElement("li")
    const newLiInnerHtml= `
    <span class="text">${newtodoText}</span>
          <div>
            <button class="todo-btn done">Done</button>
            <button class="todo-btn remove">Remove</button>
          </div>
    `
    newLi.innerHTML=newLiInnerHtml
    todoList.append(newLi)
    todoInput.value=""
})
todoList.addEventListener("click",(e)=>{
    if(e.target.classList.contains("remove")){
        const targetedLi= e.target.parentNode.parentNode
        // console.log(targetedLi)
        targetedLi.remove()
    }
    if(e.target.classList.contains("done")){
        const liSpan=e.target.parentNode.previousElementSibling
        liSpan.style.textDecoration="line-through"
    }
})

