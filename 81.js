//prototype
//it is simply an object

// function hello(){
//     console.log("hello world");
// }

// javascript function ===> function  + object

// console.log(hello.name); //it gives function name

// you can add your own properties 
// hello.myOwnProperty = "very unique value";
// console.log(hello.myOwnProperty);

// name property ---> tells function name;

// function provides more usefull properties.


// console.log(hello.prototype); // {}

//function gives us free space and that free sapce referred as prototype
//free sapce is an object and that obeject is known as prototype
// only functions provide prototype property

// function hello(){
//     console.log("hello world");
// }
// if(hello.prototype){
//     console.log("prototype is present")
// }else{
//     console.log("prototype is not present")
// }


// const hello={key1: "value1"}
// if(hello.prototype){
//     console.log("prototype is present")
// }else{
//     console.log("prototype is not present")
// }


function hello(){
    console.log("hello world");
}
hello.prototype.abc = "abc";
hello.prototype.xyz = "xyz";
hello.prototype.sing = function(){
    return "lalalla";
};
console.log(hello.prototype.sing());