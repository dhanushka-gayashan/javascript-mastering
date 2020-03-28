let undefined1 
console.log(undefined1)


let undefined2
if (undefined2 === undefined) {
    console.log('undefined2 is undefined')
} else {
    console.log(undefined2)
}


let undefined3 = function (num) {
    console.log(num)
}
undefined3()


let undefined4 = function (num) {
    let result = num 
}
let result = undefined4(4)
console.log(result)


let age = 27
age = undefined
console.log(age)
age = null
console.log(age)