// static method 
//static properties

class Animal{
    constructor(name, age){
        this.name= name
        this.age= age
    }

    //static propereties
    static val= "This is static properties"

    //static 
    static m1(){
        return `static method calling!`
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

console.log(Animal.val)
console.log(Animal.m1())

// const obj1= new Animal("Cat",1)
// console.log(obj1.eat())
// console.log(obj1.isCute())

// const obj2= new Dog("Tommy",2, 45)
// console.log(obj2.eat())
// console.log(obj2.run())