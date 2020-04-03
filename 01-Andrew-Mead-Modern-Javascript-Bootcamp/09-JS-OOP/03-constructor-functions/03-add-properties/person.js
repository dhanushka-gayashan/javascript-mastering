// Constructor Function
const Person = function (firstName, lastName, age) {
    this.firstName = firstName
    this.lastName = lastName
    this.age = age
}
 

// Create Object
const person1 = new Person('Dhanushka', 'Gayashan', 33)
console.log(person1)


// Access Properties of the Object
console.log(person1.firstName)
console.log(person1.lastName)
console.log(person1.age)


// Set Values to Properties of the Object
person1.firstName = 'Chamari'
person1.lastName = 'Nimalka'
person1.age = 32
console.log(person1)

