// Type Coercion : String, Number, Boolean

// String
console.log('5' + 5) // 55

// Number
console.log('5' - 5) // 0

// Boolean
console.log(5 === 5) // true

// ==
console.log(5 == 5) // true
console.log('5' == 5) // true
console.log('5' === 5) // false


// Check Type
let type = typeof 123
console.log(type)

type = typeof '123'
console.log(type)

type = typeof true
console.log(type)

type = typeof {}
console.log(type)

type = typeof []
console.log(type)


const value = true + 14
type = typeof value
console.log(value)
console.log(type)