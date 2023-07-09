//arrow function
//it doesn't have this
//it takes this  from surrounding means one level up
//for below function one level up i.e window

const user1={
    firstName: "harshit",
    age: 7,
    about: ()=>{
        console.log(this.firstName,this.age)
    }
}
user1.about(user1)//undefined undefined
