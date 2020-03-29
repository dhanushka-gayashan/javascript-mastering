// Array of Objects
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


// JS is searching for exact same object reference. 
index = notes.indexOf({
    title: 'My next trip',
    body: 'I would like to go to Sri Lanka'
})
console.log(index)


// FindIndex for Objects
index = notes.findIndex(function (note, index) {
    return note.title === 'Habbits to work on'
})
console.log(index)


// Find Objects in an Array
let findNote = function (notes, noteTitle) {
    const index = notes.findIndex(function (note, index) {
        return note.title.toLowerCase() === noteTitle.toLowerCase()
    })
    return notes[index]
}

let note = findNote(notes, 'Habbits to work on')
console.log(note)


// Find on behalf of findIndex for Objects
findNote = function (notes, noteTitle) {
    return notes.find(function (note, index) {
        return note.title.toLowerCase() === noteTitle.toLowerCase()
    })
}

note = findNote(notes, 'Habbits to work on')
console.log(note)