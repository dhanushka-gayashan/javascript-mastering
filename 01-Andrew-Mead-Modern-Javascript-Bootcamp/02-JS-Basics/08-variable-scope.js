// Lexical Scope (Static Scope)
//  - Global Scope
//  - Local Scope
let globalVar = 'globalVar'
if (true) {
    console.log(globalVar)

    let localVar = 'localVar'
    console.log(localVar)
}
if (true) {
    let localVar = 'localVar'
    console.log(localVar)
}


// Variable Shadowing
let name = 'Dhanushka'
if (true) {
    let name = 'Gayashan'
    console.log(name)
}
if (true) {
    console.log(name)
}


// Reassign Value 
let age = 30
if (true) {
    let age = 40

    if (true) {
        age = 50
        console.log(age)
    }
}
if (true) {
    console.log(age)
}


// Leaked Global Variable
if (true) {
   if (true) {
        city = 'Galle'
        console.log(city)
    }
}
if (true) {
    console.log(city)
}