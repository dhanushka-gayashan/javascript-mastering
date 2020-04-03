class Person {
    constructor(firstName, lastName, age, likes = []) {
        this.firstName = firstName
        this.lastName = lastName
        this.age = age
        this.likes = likes
    }

    getBio() {
        let bio = `First Name: ${this.firstName} is Age: ${this.age}. `

        this.likes.forEach(like => {
            bio += `${this.firstName} likes ${like}.`
        })

        return bio
    }
    
    setName(fullName) {
        const names = fullName.split(' ')
        this.firstName = names[0]
        this.lastName = names[1]
    }
}

const person = new Person('Dhanushka', 'Gayashan', 33, ['Learning', 'Cooking'])
console.log(person.getBio())

person.setName('Chamari Nimalka')
console.log(person.getBio())