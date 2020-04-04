// Different Function use sub-set of arguments
const createAdder = (a) => {
    return (b) => {
        return a + b
    }
}

const add10 = createAdder(10)
console.log(add10(-2))
console.log(add10(20))

const add100 = createAdder(100)
console.log(add100(-20))
console.log(add100(200))