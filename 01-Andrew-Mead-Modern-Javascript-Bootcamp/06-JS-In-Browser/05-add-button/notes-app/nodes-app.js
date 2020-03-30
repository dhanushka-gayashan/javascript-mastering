const notes = [{
    title: 'My next trip',
    body: 'I would like to go to Sri Lanka'
}, {
    title: 'Habbits to work on',
    body: 'Exercise. Eating a bit better'
}, {
    title: 'Office modification',
    body: 'Get a new table'
}]


//Add Even Listeners
document.querySelector('button').addEventListener('click', function (event) {
    console.log('Click the button')
})

document.querySelectorAll('button')[0].addEventListener('mouseover', function (event) {
    event.target.textContent = 'Click now...'
})

document.querySelectorAll('button')[0].addEventListener('mouseout', function (event) {
    event.target.textContent = 'Create Note'
})