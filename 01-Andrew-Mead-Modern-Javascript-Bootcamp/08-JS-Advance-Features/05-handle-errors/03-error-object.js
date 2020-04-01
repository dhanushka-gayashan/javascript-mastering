// Throw Error Object - For more information about the error
const getTipV4 = (amount) => {
    if (typeof amount === 'number') {
        amount * .25
    } else {
        throw Error('Argument must be a number')
    }
}
result = getTipV4(true)
console.log(result)