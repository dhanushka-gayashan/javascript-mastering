// Throw Error
const getTipV3 = (amount) => {
    if (typeof amount === 'number') {
        amount * .25
    } else {
        throw 'Argument must be a number'
    }
}
result = getTipV3(true)
console.log(result)