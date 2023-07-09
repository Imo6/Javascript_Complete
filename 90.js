class Animal{
    constructor(name, age){
        this.name= name
        this.age= age
    }

    //getter
    get animalProp(){
        return `${this.name} ${this.age}`
    }

    //setter // A 'setter'must have exactly one parameter in js
    set animalProp(allProp){
        const [name, age]= allProp.split(" ")
        this.name= name
        this.age= age
    }
    eat(){
        return `${this.name} is eating`
    }
}

const obj1= new Animal("Dog", 6)
console.log(obj1.animalProp) //get
obj1.animalProp= "Cat 8" //set
console.log(obj1.animalProp)// get