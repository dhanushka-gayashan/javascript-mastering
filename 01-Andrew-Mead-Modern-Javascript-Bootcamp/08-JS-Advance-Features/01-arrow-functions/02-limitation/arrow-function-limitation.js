// Arguments Object not available for Arrow Functions
// Arrow Function do not bind arguments
const addWithParam = function (a, b) {
    console.log(arguments)
}
addWithParam(11, 22, 33, 44)

const addWithoutParam = function () {
    return arguments[0] + arguments[1]
}
console.log(addWithoutParam(11, 22, 33, 44))


// Arrow Function cannot define in Objects
// Arrow Function do not bind 'this'
let car = {
    color: 'Red',
    getSummary: function () {
        return `This car is ${this.color}`
    }
}
console.log(car.getSummary())

car = {
    color: 'Red',
    getSummary() {
        return `This car is ${this.color}`
    }
}
console.log(car.getSummary())