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

// Add new Elements
notes.forEach(function (note) {
    const newDive = document.createElement('div')

    const title = document.createElement('h3')
    title.textContent = note.title

    const body = document.createElement('p')
    body.textContent = note.body

    newDive.appendChild(title)
    newDive.appendChild(body)

    document.querySelector('body').appendChild(newDive)
})