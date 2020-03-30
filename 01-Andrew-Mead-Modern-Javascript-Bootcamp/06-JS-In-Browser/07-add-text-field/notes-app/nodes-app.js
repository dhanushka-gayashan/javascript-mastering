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


document.querySelector('#create-note').addEventListener('click', function (event) {
    console.log('Click Create Note')
})

document.querySelector('#remove-all').addEventListener('click', function (event) {
    document.querySelectorAll('.note').forEach(function (note) {
        note.remove()
    })
})

document.querySelector('#search-text').addEventListener('input', function (event) {
    console.log(event.target.value)
})
