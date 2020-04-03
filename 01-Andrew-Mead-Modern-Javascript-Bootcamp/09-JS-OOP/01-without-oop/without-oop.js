const person = {
    firstName: 'Dhanushka',
    lastName: 'Gayashan',
    age: 33,
    getBio() {
        return `First Name: ${this.firstName} Last Name: ${this.lastName} Age: ${this.age}`
    }
}

const bio = person.getBio()
console.log(bio)