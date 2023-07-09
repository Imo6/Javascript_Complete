//Arrow function

//function
//input: string
//output:first character
// const var1=function(str){
//     return str[0]
//  }

/*const var1=(str)=>{
    return str[0]
 }*/
const var1=(str)=> str[0]

const myvar1=var1("kiran")
console.log(myvar1)

//function
//isEvene
// const a=(num)=>{
//     return num%2===0
// }
const a=(num)=> num%2===0
const res=a(43)
console.log(res)


//function
//input: array,target
//output:index of target
const var2=(array,target)=>{
    for(let i=0;i<array.length;i++){
        if(array[i]===target){
            return i
        }
    }
    return -1
}
const arr=[4,2,7,19,12]
const t=var2(arr,19)
console.log(t)