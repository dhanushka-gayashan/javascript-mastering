// 'this' key word can use to access the object inside the Constructor Function
const person = function () {
    console.log(this)
}
 
const me = new person()