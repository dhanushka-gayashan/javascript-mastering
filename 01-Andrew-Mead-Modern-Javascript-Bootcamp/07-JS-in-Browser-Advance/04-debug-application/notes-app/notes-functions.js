// Read exising notes from localStoroge 
const getSavedNotes = function () {
    const notesJSON = localStorage.getItem('notes')

    if (notesJSON !== null) {
        return JSON.parse(notesJSON)
    } else {
        return []
    }
}

// Genereate DOM Note Element
const generateNoteDOM = function (note) {
    const noteEl = document.createElement('p')

    if (note.title.length > 0) {
        noteEl.textContent = note.title
    } else {
        noteEl.textContent = 'Title Empty'
    }

    return noteEl
} 

// Render DOM Note Elements
const renderNotes = function (notes, filters) {
    const filteredNotes = notes.filter(function (note) {
        return note.title.toLowerCase().includes(filters.searchText.toLowerCase())
    })

    document.querySelector('#notes').innerHTML = ''

    filteredNotes.forEach(function (note) {
        const noteEL = generateNoteDOM(note)
        document.querySelector('#notes').appendChild(noteEL)
    })
}

// Save Notes into LocalStorage
const saveNotes = function (notes) {
    localStorage.setItem('notes', JSON.stringify(notes))
}