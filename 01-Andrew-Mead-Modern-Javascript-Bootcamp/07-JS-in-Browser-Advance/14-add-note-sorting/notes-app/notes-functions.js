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
    
    const removeButton = document.createElement('button')    
    removeButton.textContent = 'X'
    div.appendChild(removeButton)
    removeButton.addEventListener('click', function (event) {
        removeNote(note.id)
        saveNotes(notes)
        renderNotes(notes, filters)
    })

    const textAnchor = document.createElement('a')
    note.title.length > 0 ? textAnchor.textContent = note.title : textAnchor.textContent = 'New Note'
    textAnchor.href = `edit.html#${note.id}`
    div.appendChild(textAnchor)

    return div
} 

// Sort Values: A-Z
const sortValuesAZ = function (valueA, valueB) {
    if (valueA < valueB) {
        return -1
    } else if (valueA > valueB) {
        return 1
    } else {
        return 0
    }
}

// Sort Values: Z-A
const sortValuesZA = function (valueA, valueB) {
    if (valueA > valueB) {
        return -1
    } else if (valueA < valueB) {
        return 1
    } else {
        return 0
    }
}

// Sort notes by one of three ways
const sortNotes = function (notes, sortBy) {
    if (sortBy === 'byEdited') {
        return notes.sort(function (a, b) {
            return sortValuesZA(a.updatedAt, b.updatedAt)
        })
    } else if (sortBy === 'byCreated') {
        return notes.sort(function (a, b) {
            return sortValuesZA(a.createdAt, b.createdAt)
        })
    } else {
        return notes.sort(function (a, b) {
            return sortValuesAZ(a.title, b.title)
        })
    }
}

// Render DOM Note Elements
const renderNotes = function (notes, filters) {
    const filteredNotes = notes.filter(function (note) {
        return note.title.toLowerCase().includes(filters.searchText.toLowerCase())
    })

    document.querySelector('#notes').innerHTML = ''

    const softedNotes = sortNotes(filteredNotes, filters.sortBy)

    softedNotes.forEach(function (note) {
        const div = generateNoteDOM(note)
        document.querySelector('#notes').appendChild(div)
    })
}

// Save Notes into LocalStorage
const saveNotes = function (notes) {
    localStorage.setItem('notes', JSON.stringify(notes))
}

// Generte Last Edited Message 
const generateLastEdited = function (timestamp) {
    return `Last edited ${moment(timestamp).fromNow()}`
}