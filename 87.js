// class Animal{
//     constructor(name, age){
//         this.name= name
//         this.age= age
//     }

//     eat(){
//         return `${this.name} is eating`
//     }
//     isCute(){
//         return this.age <=1
//     }
// }

// class Dog extends Animal{
//     eat(){
//         return `${this.name} is eating!!!!`
//     }
// }

// const obj1= new Animal("Cat",1)
// console.log(obj1.eat())
// console.log(obj1.isCute())

// const obj2= new Dog("Tommy",2)
// console.log(obj2.eat())
// console.log(obj2.isCute())


class Animal{
    constructor(name, age){
        this.name= name
        this.age= age
    }

    eat(){
        return `${this.name} is eating`
    }
    isCute(){
        return this.age <=1
    }
}

class Dog extends Animal{
    constructor(name, age, speed){
        super(name, age) // super keyword
        this.speed= speed
    }
    eat(){
        return `${this.name} is eating!!!!`
    }
    run(){{
        return `${this.name} is running at ${this.speed} km/h`
    }}
}

const obj1= new Animal("Cat",1)
console.log(obj1.eat())
console.log(obj1.isCute())

const obj2= new Dog("Tommy",2, 45)
console.log(obj2.eat())
console.log(obj2.run())

