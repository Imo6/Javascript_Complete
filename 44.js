//function

// //function
// //input: string
// //output:first character
// function fun1(str){
//    return str[0]
// }
// const t=fun1("abc")
// console.log(t)


//function
//input: array,target
//output:index of target
function fun2(array,target){
    for(let i=0;i<array.length;i++){
        if(array[i]===target){
            return i
        }
    }
    return -1
}
const arr=[4,2,7,19,12]
const t=fun2(arr,73)
console.log(t)
