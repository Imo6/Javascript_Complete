//to add new element in HTML using javascript,maximum developer prefer below methods

//document.createElement()
//append
//prepend
// remove


//before
//after

// const newNodeItem=document.createElement("li")
// // console.log(newNodeItem)
// const newNodeItemText=document.createTextNode("Tech Students")
// newNodeItem.append(newNodeItemText)
// console.log(newNodeItem)

////way-1
// const newNodeItem=document.createElement("li")
// // console.log(newNodeItem)
// const newNodeItemText=document.createTextNode("Tech Students")
// newNodeItem.append(newNodeItemText)
// const todoList=document.querySelector(".todo-List")
// // todoList.append(newNodeItem)
// todoList.prepend(newNodeItem)
// console.log(todoList)


// //way-2
// const newNodeItem=document.createElement("li")
// // console.log(newNodeItem)
// newNodeItem.textContent="Tech Students"
// const todoList=document.querySelector(".todo-List")
// // todoList.append(newNodeItem)
// todoList.prepend(newNodeItem)
// console.log(todoList)


// //remove
// const todo1=document.querySelector(".todo-List li")
// // console.log(todo1)
// todo1.remove()

// const newNodeItem=document.createElement("li")
// newNodeItem.textContent="Tech Students"
// const todoList=document.querySelector(".todo-List")
// // todoList.after(newNodeItem)
// todoList.before(newNodeItem)