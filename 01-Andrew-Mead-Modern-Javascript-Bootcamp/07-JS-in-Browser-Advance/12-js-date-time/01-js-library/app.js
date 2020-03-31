// Current Date
const now = new Date()
console.log(now.toString())
console.log(`Year ${now.getFullYear()}`)
console.log(`Month ${now.getMonth() + 1}`)
console.log(`Date ${now.getDate()}`)
console.log(`Hour ${now.getHours()}`)
console.log(`Minute ${now.getMinutes()}`)
console.log(`Second ${now.getSeconds()}`)

/// Custom Date
const date = new Date('30 January 2019 14:44:55')
console.log(date.toString())
console.log(`Year ${date.getFullYear()}`)
console.log(`Month ${date.getMonth() + 1}`)
console.log(`Date ${date.getDate()}`)
console.log(`Hour ${date.getHours()}`)
console.log(`Minute ${date.getMinutes()}`)
console.log(`Second ${date.getSeconds()}`)

// Epoch Date
const timeStamp = now.getTime()
const myDate = new Date(timeStamp)
console.log(myDate)

// Compare Dates
const dateOne = new Date('6 March 1987')
const dateTwo = new Date('13 March 1987')

const dateOneTimestamp = dateOne.getTime()
const dateTwoTimestamp = dateTwo.getTime()

const largeDate = dateOneTimestamp < dateTwoTimestamp ? dateTwo : dateOne
console.log(largeDate.toString())