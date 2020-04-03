// Properties are inheriate for it's all objectes

const Person = function (firstName, lastName, age) {
    this.firstName = firstName
    this.lastName = lastName
    this.age = age
}

Person.prototype.location = 'Sri Lanka'

const person1 = new Person('Dhanushka', 'Gayashan', 33)
console.log(person1.location)

const person2 = new Person('Chamari', 'Nimalka', 32)
console.log(person2.location)