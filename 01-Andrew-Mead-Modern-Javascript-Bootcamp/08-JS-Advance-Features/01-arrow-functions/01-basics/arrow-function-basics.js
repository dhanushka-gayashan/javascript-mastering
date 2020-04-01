// Define Arrow Function
const squareLong = (num) => {
    return num * num
}
console.log(squareLong(5))

// Arrow Function : Short Hand Syntax 
// User Short hand Syntax only if 
//      - There is no any multi lines of code
//      - Should return value
const squareShort = (num) => num * num
console.log(squareShort(5))

// Pass Arrow Function
const people = [{
    name: 'Dhanushka',
    age: 33
}, {
    name: 'Gayashan',
    age: 29
}, {
    name: 'Nima',
    age: 22
}]

let under30 = people.filter(function (person) {
    return person.age < 30
})
console.log(under30)

under30 = people.filter((person) => person.age < 30)
console.log(under30)

under30 = people.filter(person => person.age < 30)
console.log(under30)

let age22Person = people.find(person => person.age === 22)
console.log(age22Person)