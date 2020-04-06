let house = {
    bedrooms: 2,
    bathrooms: 1.5,
    yearbuild: 2017
}

// Clone Object
let newHouse = {
    basement: true,
    ...house,
    bedrooms: 3
}

console.log(house)
console.log(newHouse)

// Set new Value
newHouse.yearbuild = 2019

console.log(house)
console.log(newHouse)

// Add new Property
newHouse = {
    basement: true,
    ...house
}

console.log(house)
console.log(newHouse)

// Override exist Property value
newHouse = {
    basement: true,
    ...house,
    bedrooms: 5
}

console.log(house)
console.log(newHouse)

// Override Default Value
newHouse = {
    basement: true,    
    bedrooms: 5,
    ...house
}

console.log(house)
console.log(newHouse)


// Concat multiple Objects
const person = {
    name: 'Dhanushka',
    age: 33
}

const location = {
    ...person,
    city: 'Auckland',
    country: 'New Zealand'
}

const overview = {
    ...person,
    ...location,
}

console.log(person)
console.log(location)
console.log(overview)