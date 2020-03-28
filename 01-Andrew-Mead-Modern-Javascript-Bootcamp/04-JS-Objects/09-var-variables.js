// constant: Not Allow Reassing
const age = 33
console.log(age)

// let: Allow Reassing. Not Allow Redefine
let name = 'Dhanushka'
console.log(name)


// var: Allow Reassing. Allow Redefine
var city = 'Auckland'
console.log(city)

var country = 'New Zealand'
country = 'Sri Lanka'
console.log(country)

var country = 'New Zealand'
console.log(country)


// var: Not Block Scope
if (true) {
    var firstName = 'Dhanushka'
}
console.log(firstName)


// var: Function Scope
const getName = function() {
    var firstName = 'Dhanushka'
    return firstName
}
console.log(getName())


// var: Allow access before declre
console.log(myAge)
var myAge = 32

var oldAge
newAge = 33
console.log(oldAge)

newAge = 34
console.log(newAge)
var newAge