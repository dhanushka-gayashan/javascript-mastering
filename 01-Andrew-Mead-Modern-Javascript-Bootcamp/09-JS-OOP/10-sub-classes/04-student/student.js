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

class Student extends Person {
    constructor(firstName, lastName, age, grade, likes) {
        super(firstName, lastName, age, likes)
        this.grade = grade
    }

    getBio() {
        const status = this.grade >= 70 ? 'passing' : 'failing'
        return `${this.firstName} is ${status} the class`
    }

    updateGrade(change) {
        this.grade += change
    }
}

const student = new Student('Dhanushka', 'Gayashan', 33, 65, ['Biking', 'Hiking']) 

console.log(student.getBio())
student.updateGrade(10)
console.log(student.getBio())