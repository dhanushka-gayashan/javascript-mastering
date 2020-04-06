// ===== Destructuring Object =====

const todo = {
    id: 'aserhdbdfafagfr',
    text: 'Pay the bills',
    completed: false
}

// Traditional way to access Properties in Object
const todoText = todo.text
const todoCompleted = todo.completed

console.log(todoText)
console.log(todoCompleted)


// Destructuring
const { text, completed } = todo
console.log(text)
console.log(completed)


// Change Variable name
const { text: text1, completed: completed1 } = todo
console.log(text1)
console.log(completed1)


// New Object Properties 
const { text: text2, completed: completed2, details = "No details provided" } = todo
console.log(text2)
console.log(completed2)
console.log(details)


// New Object Properties with New Identifier
const { text: text3, completed: completed3, details: details3 = "No details provided" } = todo
console.log(text3)
console.log(completed3)
console.log(details3)


// Use Rest Operator to get Other Properties
const { text: text4, completed: completed4, details: details4 = "No details provided", ...others } = todo
console.log(text4)
console.log(completed4)
console.log(details4)
console.log(others)


// ===== Destructuring Array =====

const age = [65, 10, 45, 21]

// Access Elements
const [firstAge1, secondAge1] = age
console.log(firstAge1)
console.log(secondAge1)

// Skip Middle Elements
const [firstAge2, secondAge2,  , lastAge2] = age
console.log(firstAge2)
console.log(secondAge2)
console.log(lastAge2)

// Set Default Values for New Elements
const [firstAge3, secondAge3, , fourthAge3, lastAge3 = 123] = age
console.log(firstAge3)
console.log(secondAge3)
console.log(fourthAge3)
console.log(lastAge3)

// Use Rest Operator
const [firstAge4, ...otherAges4] = age
console.log(firstAge4)
console.log(otherAges4)


// ===== Destructuring Function =====
const printTodo = ({ text, completed}) => {
    console.log(`${text} - ${completed}`)
}
printTodo(todo)