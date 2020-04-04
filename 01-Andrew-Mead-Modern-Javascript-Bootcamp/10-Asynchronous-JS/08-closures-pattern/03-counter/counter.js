const createCounter = () => {
    let count = 0

    return {
        increment () {
            count++
        },
        decrement () {
            count--
        },
        getCount () {
            return count
        }
    }
}

const counter = createCounter()
counter.increment()
counter.increment()
counter.decrement()
console.log(counter.getCount())