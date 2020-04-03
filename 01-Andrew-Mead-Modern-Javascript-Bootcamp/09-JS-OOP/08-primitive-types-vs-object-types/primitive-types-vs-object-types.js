// Primitive Types
//      - string  -> JS wrapping an Object to Primitive Value
//      - number  -> JS wrapping an Object to Primitive Value
//      - boolean -> JS wrapping an Object to Primitive Value
//      - null
//      - undefine


// Object Type and Prototype Chain
// myObject --> Object.prototype --> null
const myObject = {
    name: 'Dhanushka',
    age: 33
}
console.log(myObject)



// Arrya Type and Prototype Chain
// myArray --> Array.prototype --> Object.prototype --> null
const myArray1 = new Array(['Dhanushka', 'Gayashan'])
console.log(myArray1)

const myArray2 = ['Chamari', 'Nimalka']
console.log(myArray2)
console.log(myArray2.hasOwnProperty('length'))
console.log(myArray2.hasOwnProperty('filter'))



// Function Type and Prototype Chain
// myFunction --> Function.prototype --> Object.prototype --> null
const myFunction = () => 1
console.log(myFunction)



// String Type and Prototype Chain
// myString --> String.prototype --> Object.prototype --> null

// -- Create a String with an Object Wrapper : JS create an Object when calling an Object Prototype methods
const myString1 = 'Dhanushka'
console.log(myString1)
console.log(myString1.split(''))

// -- Create a String as an Object
const myString2 = new String('Gayashan')
console.log(myString2)
console.log(myString2.split(' '))



// Number Type and Prototype Chain
// myNumber --> Number.prototype --> Object.prototype --> null

// -- Create a Number with an Object Wrapper : JS create an Object when calling an Object Prototype methods
const myNumber1 = 33
console.log(myNumber1)

// -- Create a Number as an Object
const myNumber2 = new Number(32)
console.log(myNumber2)



// Boolean Type and Prototype Chain
// myBoolean --> Boolean.prototype --> Object.prototype --> null

// -- Create a Boolean with an Object Wrapper : JS create an Object when calling an Object Prototype methods
const myBoolean1 = true
console.log(myBoolean1)

// -- Create a Boolean as an Object
const myBoolean2 = new Boolean(false)
console.log(myBoolean2)