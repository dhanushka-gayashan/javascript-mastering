let name = 'Dhanushka'
let age = 33
let tmpStr = `
    Name : ${name}
    Age  : ${age}
`
console.log(tmpStr)


let getScoreText = function (name = 'Anonymous', score = 0) {
    return `Name: ${name} Score: ${score}`
}
let scoreText = getScoreText('Dhanushka', 100)
console.log(scoreText)


let getTip = function (total, tipPercent = .2) {
    return `A ${tipPercent * 100}% tip on $${total} would be $${total * tipPercent}`
}
let tip = getTip(40, .25)
console.log(tip)