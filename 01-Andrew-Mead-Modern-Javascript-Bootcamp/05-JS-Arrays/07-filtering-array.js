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

// Filter Array Elements
const findNodes = function (notes, query) {
    return notes.filter(function (note, index) {
        const isTitleMatch = note.title.toLocaleLowerCase().includes(query)
        const isBodyMatch = note.body.toLocaleLowerCase().includes(query)
        return isTitleMatch || isBodyMatch
    })
}

const filteredNotes = findNodes(notes, 'office')
console.log(filteredNotes)
