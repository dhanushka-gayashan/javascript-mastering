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

const filters = {
    searchText: ''
}

const renderNotes = function (notes, filters) {
    const filteredNotes = notes.filter(function (note) {
        return note.title.toLowerCase().includes(filters.searchText.toLowerCase())
    })

    document.querySelector('#notes').innerHTML = ''

    filteredNotes.forEach(function (note) {
        const noteEl = document.createElement('p')
        noteEl.textContent = note.title
        document.querySelector('#notes').appendChild(noteEl)
    })
}

renderNotes(notes, filters)

document.querySelector('#create-note').addEventListener('click', function (event) {
    console.log('Click Create Note')
})

document.querySelector('#remove-all').addEventListener('click', function (event) {
    document.querySelectorAll('.note').forEach(function (note) {
        note.remove()
    })
})

document.querySelector('#search-text').addEventListener('input', function (event) {
    filters.searchText = event.target.value
    renderNotes(notes, filters)
})
