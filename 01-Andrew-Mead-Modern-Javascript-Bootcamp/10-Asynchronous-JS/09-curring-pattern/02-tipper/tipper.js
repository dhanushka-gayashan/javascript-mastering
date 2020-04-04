const createTipper = (percentage) => {
    return (amount) => {
        return amount * percentage
    }
}

const tip10 = createTipper(.1)
console.log(tip10(100))
console.log(tip10(200))

const tip20 = createTipper(.2)
console.log(tip20(100))
console.log(tip20(200))