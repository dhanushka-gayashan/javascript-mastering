// Cannot use === to check the equality of dirrerent objects
console.log({} === {})


// Can use === to check the equality of references of the same object
let obj1 = {}
let obj2 = obj1
console.log(obj1 === obj2)