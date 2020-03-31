// Read exising notes from localStoroge 
const getSavedNotes = function () {
    const notesJSON = localStorage.getItem('notes')

    if (notesJSON !== null) {
        return JSON.parse(notesJSON)
    } else {
        return []
    }
}

// Find and Remove Notes from Array List
const removeNote = function (id) {
    const noteIndex = notes.findIndex(function (note) {
        return note.id === id
    })
    if (noteIndex > -1) {
        notes.splice(noteIndex, 1)
    }    
}

// Genereate DOM Note Element
const generateNoteDOM = function (note) {
    const div = document.createElement('div')
    const textSpan = document.createElement('span')
    const removeButton = document.createElement('button')
    
    removeButton.textContent = 'X'
    div.appendChild(removeButton)
    removeButton.addEventListener('click', function (event) {
        removeNote(note.id)
        saveNotes(notes)
        renderNotes(notes, filters)
    })

    if (note.title.length > 0) {
        textSpan.textContent = note.title
    } else {
        textSpan.textContent = 'Title Empty'
    }
    div.appendChild(textSpan)

    return div
} 

// Render DOM Note Elements
const renderNotes = function (notes, filters) {
    const filteredNotes = notes.filter(function (note) {
        return note.title.toLowerCase().includes(filters.searchText.toLowerCase())
    })

    document.querySelector('#notes').innerHTML = ''

    filteredNotes.forEach(function (note) {
        const div = generateNoteDOM(note)
        document.querySelector('#notes').appendChild(div)
    })
}

// Save Notes into LocalStorage
const saveNotes = function (notes) {
    localStorage.setItem('notes', JSON.stringify(notes))
}