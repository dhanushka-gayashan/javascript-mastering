let greetUser = function () {
    console.log('Welcome user!!!')
}

greetUser()


let squre = function (num) {
    let result = num * num
    return result
}

let value = squre(3)
console.log(value)


let convertFahrenheitToCelsius = function (fahrenheit) {
    let result = (fahrenheit - 32) * (5 / 9)
    return result 
}

let celsius = convertFahrenheitToCelsius(32)
console.log(celsius)

console.log(convertFahrenheitToCelsius(68))


