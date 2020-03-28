let add = function (a, b, c) {
    let result = a + b + c
    return result
}
let result = add(10, 20, 30)
console.log(result)


let getScoreText = function (name = 'Anonymous', score = 0) {
    return 'Name: ' + name + ' Score: ' + score
}
result = getScoreText('Gayashan', 100)
console.log(result)

result = getScoreText()
console.log(result)

result = getScoreText('Dhanushka')
console.log(result)

result = getScoreText('Dhanushka', undefined)
console.log(result)

result = getScoreText(undefined, 99)
console.log(result)


let calculateTip = function (bill, tipPercent = 10) {
    return bill * (tipPercent / 100)
}
let bill = 1000
let tipPercent = 10
let tip = calculateTip(bill, tipPercent)
console.log('Bill: ' + bill + ' Tip: ' + tip)
