'use strict'

// Read exising notes from localStoroge 
const getSavedNotes = () => {
    const notesJSON = localStorage.getItem('notes')

    try {
        return notesJSON ? JSON.parse(notesJSON) : [] 
    } catch (error) {
        console.log('Encounter an error while fetching data from localStorage....')
        return []
    }    
}

// Find and Remove Notes from Array List
const removeNote = (id) => {
    const noteIndex = notes.findIndex((note) => note.id === id)
    if (noteIndex > -1) {
        notes.splice(noteIndex, 1)
    }    
}

// Genereate DOM Note Element
const generateNoteDOM = (note) => {
    const noteEL = document.createElement('a') 
    const textEL = document.createElement('p')   
    const statusEL = document.createElement('p')
    
    noteEL.href = `edit.html#${note.id}`
    noteEL.classList.add('list-item')

    note.title.length > 0 ? textEL.textContent = note.title : textEL.textContent = 'New Note' 
    textEL.classList.add('list-item__title')   
    noteEL.appendChild(textEL)  

    statusEL.textContent = generateLastEdited(note.updatedAt)
    statusEL.classList.add('list-item__subtitle')    
    noteEL.appendChild(statusEL)

    return noteEL
} 

// Sort Values: A-Z
const sortValuesAZ = (valueA, valueB) => {
    if (valueA < valueB) {
        return -1
    } else if (valueA > valueB) {
        return 1
    } else {
        return 0
    }
}

// Sort Values: Z-A
const sortValuesZA = (valueA, valueB) => {
    if (valueA > valueB) {
        return -1
    } else if (valueA < valueB) {
        return 1
    } else {
        return 0
    }
}

// Sort notes by one of three ways
const sortNotes = (notes, sortBy) => {
    if (sortBy === 'byEdited') {
        return notes.sort((a, b) => sortValuesZA(a.updatedAt, b.updatedAt))
    } else if (sortBy === 'byCreated') {
        return notes.sort((a, b) => sortValuesZA(a.createdAt, b.createdAt))
    } else {
        return notes.sort((a, b) => sortValuesAZ(a.title, b.title))
    }
}

// Render DOM Note Elements
const renderNotes = (notes, filters) => {   
    const notesEl = document.querySelector('#notes')
    notesEl.innerHTML = ''

    const filteredNotes = notes.filter((note) => note.title.toLowerCase().includes(filters.searchText.toLowerCase()))
    if (filteredNotes.length > 0) {
        sortNotes(filteredNotes, filters.sortBy).forEach((note) => {
            const div = generateNoteDOM(note)
            notesEl.appendChild(div)
        })
    } else {
        const emptyMessage = document.createElement('p')
        emptyMessage.textContent = 'No notes to show'
        emptyMessage.classList.add('empty-message')
        notesEl.appendChild(emptyMessage)
    }    
}

// Save Notes into LocalStorage
const saveNotes = (notes) => {
    localStorage.setItem('notes', JSON.stringify(notes))
}

// Generte Last Edited Message 
const generateLastEdited = (timestamp) => `Last edited ${moment(timestamp).fromNow()}`