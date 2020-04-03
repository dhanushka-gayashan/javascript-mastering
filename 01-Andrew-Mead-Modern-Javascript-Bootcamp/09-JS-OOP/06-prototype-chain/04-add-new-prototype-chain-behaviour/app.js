// Prototype Chain:
// product --> Object.prototype --> null

// Add Properties
const product = {
    name: 'Dhanushka'
}

Object.prototype.addNewBehaviou = () => 'This is a new behaviour...'

console.log(product.addNewBehaviou())