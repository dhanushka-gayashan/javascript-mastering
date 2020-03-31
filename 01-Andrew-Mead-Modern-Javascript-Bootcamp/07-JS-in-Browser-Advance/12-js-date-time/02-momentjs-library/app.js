// Current Date Time
let now = moment()
console.log(now.toString())
console.log(now.year())
console.log(now.month() + 1)
console.log(now.date())
console.log(now.hour())
console.log(now.minute())
console.log(now.second())

// Set Date Time
now.minute(1)
console.log(now.toString())

// Manupulate Date Time
now.add(1, 'year')
console.log(now.toString())

now.subtract(20, 'days')
console.log(now.toString())

// Format Date Time
const unformat = now.format()
console.log(unformat.toString())

now = now.format('MMMM Do, YYYY') //Novermber 3rd, 2003
console.log(now.toString())

now = moment()
now.subtract(1, 'week').subtract(20, 'days')
console.log(now.format('MMMM Do, YYYY').toString())

// Working with Timestamp
now = moment()
const nowTimestamp = now.valueOf()
console.log(nowTimestamp)

// Create Moment Instance from Timestamp
now = moment(nowTimestamp)
console.log(now.toString())

// Print Birthday
const birthday = moment()
birthday.year(1987)
birthday.month(2)
birthday.date(13)
const formatBirthday = birthday.format('MMM D, YYYY')
console.log(formatBirthday)