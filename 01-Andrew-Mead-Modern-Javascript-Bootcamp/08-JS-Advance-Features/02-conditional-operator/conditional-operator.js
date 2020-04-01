// Traditional IF-ELSE
const myAge1 = 27
let message1 
if (myAge1 >= 18) {
    message1 = 'You can vote!'
} else {
    message1 = 'You cannot vote.'
}
console.log(message1)


// Conditional Operator - Ternary
const myAge2 = 27
const messasge2 = myAge2 >= 18 ? 'You can vote!' : 'You cannot vote.'
console.log(messasge2)


// Call Functions
const myAge3 = 27
const showPage = () => {
    console.log('Show the page')
}
const showErrorPage = () => {
    console.log('Show the error page')
}
myAge3 >= 21 ? showPage() : showErrorPage()


// Call Functions and get Return Values
const myAge4 = 27
const getAllowMessage = () => 'Show the page'
const getErrorMessage = () => 'Show the error page'
const message4 = myAge3 >= 21 ? getAllowMessage() : getErrorMessage()
console.log(message4)


// Select Team Size
const team = ['Tyler', 'Porter']
console.log(team.length <= 4 ? `Team size: ${team.length}` : 'Too many people on your team')