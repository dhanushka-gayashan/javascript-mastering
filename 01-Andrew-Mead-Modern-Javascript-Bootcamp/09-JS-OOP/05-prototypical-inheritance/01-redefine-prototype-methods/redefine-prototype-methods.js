const Person = function (firstName, lastName, age, likes = []) {
    this.firstName = firstName
    this.lastName = lastName
    this.age = age
    this.likes = likes
}

Person.prototype.setName = function (fullName) {
    const names = fullName.split(' ')
    this.firstName = fullName[0]
    this.lastName = fullName[1]
}

Person.prototype.getBio = function () {
    let bio = `First Name: ${this.firstName} is Age: ${this.age}. `

    this.likes.forEach(like => {
      bio += `${this.firstName} likes ${like}.`  
    })

    return bio
}

const person1 = new Person('Dhanushka', 'Gayashan', 33, ['Learning', 'Biking'])
console.log(person1.getBio())

const person2 = new Person('Chamari', 'Nimalka', 32)

Person.prototype.getBio = function () {
    return 'This is new getBio() definition'
}

console.log(person2.getBio())