// Prototype Chain:
// product --> Object.prototype --> null

// Access Prototype Chain
const product = {
    name: 'Dhanushka'
}

console.log(product)

console.log(product.__proto__);

console.log(product.__proto__.__proto__);
