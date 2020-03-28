let name = 'Dhanushka Gayashan'

// Length property
console.log(name.length)

// Convert to Upper Case
console.log(name.toUpperCase())

// Convert to Lower Case
console.log(name.toLowerCase())

// Includes Method
let password = 'abs123password098' 
console.log(password.includes('password'))
console.log(password.includes('xyz'))

// Trim Method
let city = ' Auckland '
console.log('=>' + city + '<=')
console.log('=>' + city.trim() + '<=')


let isValidPassword = function (password) {
    return (password.length > 8) && !(password.includes('password'))
}

console.log(isValidPassword('abcd'));
console.log(isValidPassword('abcdpassword'));
console.log(isValidPassword('abcd123456'));