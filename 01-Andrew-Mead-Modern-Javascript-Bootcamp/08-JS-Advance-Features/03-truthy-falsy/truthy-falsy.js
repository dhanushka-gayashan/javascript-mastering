// Check whether something Exist or Not
// Cannot use for comparison like 1 === x

// Traditional Way
const products = ['Apple']
const product1 = products[0]
const product2 = products[1]

if (product1 !== undefined) {
    console.log('Product found')
} else {
    console.log('Product not found')
}

if (product2 !== undefined) {
    console.log('Product found')
} else {
    console.log('Product not found')
}

// Truthy Values
if ('apple') {
    console.log('Product found')
} else {
    console.log('Product not found')
}

if ([]) {
    console.log('Product found')
} else {
    console.log('Product not found')
}

if ({}) {
    console.log('Product found')
} else {
    console.log('Product not found')
}

if (product1) {
    console.log('Product found')
} else {
    console.log('Product not found')
}

// Falsy Values
if (false) {
    console.log('Product found')
} else {
    console.log('Product not found')
}

if (0) {
    console.log('Product found')
} else {
    console.log('Product not found')
}

if ('') {
    console.log('Product found')
} else {
    console.log('Product not found')
}

if (null) {
    console.log('Product found')
} else {
    console.log('Product not found')
}

if (undefined) {
    console.log('Product found')
} else {
    console.log('Product not found')
}

if (NaN) {
    console.log('Product found')
} else {
    console.log('Product not found')
}

if (product2) {
    console.log('Product found')
} else {
    console.log('Product not found')
}
