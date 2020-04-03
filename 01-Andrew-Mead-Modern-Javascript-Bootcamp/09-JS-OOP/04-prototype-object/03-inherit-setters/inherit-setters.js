const Person = function (firstName, lastName, age) {
    this.firstName = firstName
    this.lastName = lastName
    this.age = age
}

Person.prototype.setName = function (fullName) {
    const names = fullName.split(' ')
    this.firstName = names[0]
    this.lastName = names[1]
}

Person.prototype.getBio = function () {
    return `First Name: ${this.firstName} Last Name: ${this.lastName} Age: ${this.age}`
}

const person1 = new Person()
person1.setName('Dhanushka Gayashan')
person1.age = 33
console.log(person1.getBio())