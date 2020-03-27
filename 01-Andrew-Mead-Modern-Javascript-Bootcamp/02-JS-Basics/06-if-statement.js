let temp = 180
if (temp <= 32) {
    console.log('It is freezing outside!')
}
if (temp >= 110) {
    console.log('It is way to hot outside!')
}


let age = 65
let isChild = age <= 7
let isSenior = age >= 65
if (isChild) {
    console.log('He is a Child')
}
if (isSenior) {
    console.log('He is a Senior')
}


let isAccountLocked = true
let userRole = 'admin'
if (isAccountLocked) {
    console.log('Account is locked')
} else {
    console.log('Welcome!!!')
}
if (isAccountLocked) {
    console.log('Account is locked')
} else if (userRole === 'admin') {
    console.log('Welcome Admin')
}else {
    console.log('Welcome!!!')
}


let temperature = 45
if (temperature <= 32) {
    console.log('It is freezing outside')
} else if (temperature >= 110) {
    console.log('It is hot outside')
} else {
    console.log('Go for it. It is pretty nice out')
}