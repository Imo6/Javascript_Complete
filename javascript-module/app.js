//way-1
/*
import firstName from './utils/fname.js'
import {age} from './utils/age.js'

console.log(firstName, age)
*/


// //way-1
// //if you want to give alais
// import {firstName as fname} from './utils/fname.js'
// import age from './utils/age.js'

// console.log(fname, age)


//way-2
import firstName from './utils/fname.js'
import age from './utils/age.js'
import {Person} from './utils/Person.js'

console.log(firstName, age)
const p=new Person("John", "Doe", 23)

//Below work for Person class
