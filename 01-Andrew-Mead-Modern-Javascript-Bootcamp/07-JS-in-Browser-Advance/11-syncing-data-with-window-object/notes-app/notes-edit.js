// Select Elements on Page
const titleElement = document.querySelector('#note-title')
const bodyElement = document.querySelector('#note-body')
const removeElement = document.querySelector('#remove-note')


// Note ID coming as a part of the URL
// Get Node ID from Location Object.
// Remove # Character from ID
const nodeId = location.hash.substring(1)

// Get Notes from LocalStorage Object
let notes = getSavedNotes()

// Find the Note belongs to ID
let note = notes.find(function (note) {
    return note.id === nodeId
})
if (note === undefined) {
    location.assign('index.html')
}

// Set Exist Values
titleElement.value = note.title
bodyElement.value = note.body

// Update Note with new values 
titleElement.addEventListener('input', function (event) {
    note.title = event.target.value
    saveNotes(notes)
})

bodyElement.addEventListener('input', function (event) {
    note.body = event.target.value
    saveNotes(notes)
})

// Remove Notes
removeElement.addEventListener('click', function (event) {
    removeNote(nodeId)
    saveNotes(notes)
    location.assign('index.html')
})

// Sync Data Across Pages with Window Object 
// If someone change title or body of a note, then it refect to edit page of others who open same note
// This code run on open Edit page of others
window.addEventListener('storage', function (event) {
    if (event.key === 'notes') {
        notes = JSON.parse(event.newValue)
        note = notes.find(function (note) {
            return note.id === nodeId
        })

        if (note === undefined) {
            location.assign('index.html')
        }

        titleElement.value = note.title
        bodyElement.value = note.body
    }
})