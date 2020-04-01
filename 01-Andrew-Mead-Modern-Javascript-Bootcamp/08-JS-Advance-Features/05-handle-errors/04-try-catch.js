const getTipV5 = (amount) => {
    if (typeof amount === 'number') {
        amount * .25
    } else {
        throw Error('Argument must be a number')
    }
}

try {
    result = getTipV5(true)
    console.log(result)    
} catch (error) {
    console.log('catch block is running...')
}
