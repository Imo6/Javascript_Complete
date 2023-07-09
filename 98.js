//closures
//when function return from some other function then it returns with local memory
// variables of that function also, is known as closures.

// function can return functions

// function outerFunction(){
//     function innerFunction(){
//         console.log("hello world")
//     }
//     return innerFunction;
// }

// const ans = outerFunction();
// // console.log(ans);
// ans();


function printFullName(firstName, lastName){
    function printName(){
        console.log(firstName, lastName);
    }
    return printName;
}
const res=printFullName('Md','Imran')
res()  