// Pass wrong arguments
const getTipV1 = (amount) => {
    return amount * .25
}
let result = getTipV1(true)
console.log(result)


// Add type checking
const getTipV2 = (amount) => {
    return typeof amount === 'number' ? amount * .25 : 0
}
result = getTipV2(true)
console.log(result)