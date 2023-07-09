//function expression

//function
//input: string
//output:first character
// function fun1(str){
//    return str[0]
// }
const var1=function(str){
    return str[0]
 }
const myvar1=var1("imran")
console.log(myvar1)


//function
//input: array,target
//output:index of target
const var2=function(array,target){
    for(let i=0;i<array.length;i++){
        if(array[i]===target){
            return i
        }
    }
    return -1
}
const arr=[4,2,7,19,12]
const t=var2(arr,12)
console.log(t)
