//function inside function

function fun(){
    const app=()=>{
       console.log("inside app")
    }

    const myFun=(a,b)=>{
        console.log(a+b)
    }
    console.log("fun...")
    app()
    myFun(4,5)
}

fun()