// DOM - Document Object Model
//============================

// Query and Read Text
const pr = document.querySelector('p')
console.log(pr.textContent)

// Query All and Read All
const pra = document.querySelectorAll('p')
pra.forEach(function (p) {
    console.log(p.textContent)
})

// Query and Remove
const pd = document.querySelector('p')
pd.remove()

// Query All and Remove All
const pda = document.querySelectorAll('p')
pda.forEach(function (p) {
    p.remove()
})

// Update Content
const hua = document.querySelectorAll('h2')
hua.forEach(function (h) {
    h.textContent = '+++++' + h.textContent + '+++++'
})
