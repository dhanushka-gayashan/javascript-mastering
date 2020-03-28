let num  = 123.456

// toFixed Method
console.log(num.toFixed(2))
console.log(num.toFixed(5))

// Math.Round 
console.log(Math.round(num))

// Math.Floor
console.log(Math.floor(num))

// Math.Ceil
console.log(Math.ceil(num))

// Math.Random
let randomNum = Math.random()
console.log(randomNum)

// Math.Random with Min and Max
let min = 10
let max = 20
let ranNum = Math.floor(Math.random() * (max - min + 1)) + min
console.log(ranNum)


let makeGuess = function (guess){
    let lower = 1
    let upper = 5
    let random = Math.floor(Math.random() * (upper - lower + 1)) + lower 
    return guess === random
}

console.log(makeGuess(3))