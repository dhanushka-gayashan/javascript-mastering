// Prototype Chain:
// product --> Object.prototype --> null

//hasOwnProperty -> check property availability in created object. Not in inherited properties
const product = {
    name: 'Dhanushka'
}

console.log(product.hasOwnProperty('name'))

console.log(product.hasOwnProperty('age'))

console.log(product)
