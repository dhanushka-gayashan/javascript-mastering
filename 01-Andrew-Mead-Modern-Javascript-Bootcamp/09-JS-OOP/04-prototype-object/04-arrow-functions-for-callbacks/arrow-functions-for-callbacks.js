// By Default - Arrow Function do not bind 'this'. 
// Inside a Prototype Method, we can use 'this' inside of Arrow Function.
// It's becuase, parent of the Arrow Function has bind to 'this'.

const Person = function (firstName, lastName, age, likes = []) {
    this.firstName = firstName
    this.lastName = lastName
    this.age = age
    this.likes = likes
}


Person.prototype.setName = function (fullName) {
    const names = fullName.split(' ')
    this.firstName = names[0]
    this.lastName = names[1]
}


// Arrow Function able to bind 'this', becuase Parent have bind to 'this'
Person.prototype.getBio = function () {
    // Parent have access to 'this'
    let bio = `First Name: ${this.firstName} is Age: ${this.age}. `

    this.likes.forEach(like => {
      bio += `${this.firstName} likes ${like}.`  
    })

    return bio
}


// Default Function not able to bind 'this'.
Person.prototype.getBioBroken = function () {
    // Parent have access to 'this'
    let bio = `First Name: ${this.firstName} is Age: ${this.age}. `

    this.likes.forEach(function (like) {
        bio += `${this.firstName} likes ${like}.`
    })

    return bio
}


const person1 = new Person('Dhanushka', 'Gayashan', 33, ['Learning', 'Biking'])
const person2 = new Person('Chamari', 'Nimalka', 32)


console.log(person1.getBio())
console.log(person1.getBioBroken())

console.log(person2.getBio())
console.log(person2.getBioBroken())