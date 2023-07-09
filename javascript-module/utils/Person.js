export class Person{
    constructor(firstName, lastName, age){
        this.firstName= firstName
        this.lastName= lastName
        this.age= age
    }

    display(){
        console.log(this.firstName, this.lastName, this.age)
    }
}