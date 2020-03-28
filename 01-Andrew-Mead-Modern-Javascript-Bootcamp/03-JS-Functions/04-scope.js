
// Global Scope (convertFahrenheitToCelsius, tmpOne, tmpTwo)
//      Local Scope (fahrenheit, celsius)
//          Local Scope (isFreezing)

let convertFahrenheitToCelsius = function (fahrenheit) {
    let celsius = (fahrenheit - 32) * (5 / 9)
    
    if (celsius <= 0) {
        let isFreezing = true
    }
    
    return celsius
}

let tmpOne = convertFahrenheitToCelsius(32)
let tmpTwo = convertFahrenheitToCelsius(68)

console.log(tmpOne)
console.log(tmpTwo)