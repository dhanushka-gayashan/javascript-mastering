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

class Employee extends Person {
    constructor(firstName, lastName, age, position, likes) {
        super(firstName, lastName, age, likes)
        this.position = position
    }

    getBio() {
        return `${this.firstName} ${this.lastName} is a ${this.position}.`
    }

    getYearsLeft() {
        return 60 - this.age
    }
}

const empployee = new Employee('Dhanushka', 'Gayashan', 33, 'Developer', ['Learning', 'Cooking'])
console.log(empployee)
console.log(empployee.getBio())
console.log(empployee.getYearsLeft())