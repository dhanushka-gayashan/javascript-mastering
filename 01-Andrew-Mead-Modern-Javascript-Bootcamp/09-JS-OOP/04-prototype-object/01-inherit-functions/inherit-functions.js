// Functions are inheriate for it's all objectes

const Person = function (firstName, lastName, age) {
    this.firstName = firstName
    this.lastName = lastName
    this.age = age
}

Person.prototype.getBio = function () {
    return `First Name: ${this.firstName} Last Name: ${this.lastName} Age: ${this.age}`
}

const person1 = new Person('Dhanushka', 'Gayashan', 33)
console.log(person1.getBio())

const person2 = new Person('Chamari', 'Nimalka', 32)
console.log(person2.getBio())