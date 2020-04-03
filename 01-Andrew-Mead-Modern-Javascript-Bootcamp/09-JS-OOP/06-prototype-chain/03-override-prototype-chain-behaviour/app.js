// Prototype Chain:
// product --> Object.prototype --> null

// Override properties
const product = {
    name: 'Dhanushka'
}

Object.prototype.hasOwnProperty = () => 'This is new definition...'

console.log(product.hasOwnProperty('name'))
console.log(product.hasOwnProperty('age'))
