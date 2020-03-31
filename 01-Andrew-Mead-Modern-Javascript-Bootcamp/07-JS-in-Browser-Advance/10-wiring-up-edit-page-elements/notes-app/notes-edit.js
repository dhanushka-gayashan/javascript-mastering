// Note ID coming as a part of the URL
// Get Node ID from Location Object.
// Remove # Character from ID
const nodeId = location.hash.substring(1)

// Find the Note belongs to ID
const notes = getSavedNotes()
const note = notes.find(function (note) {
    return note.id === nodeId
})
if (note === undefined) {
    location.assign('index.html')
}

// Select Elements
const titleElement = document.querySelector('#note-title')
const bodyElement = document.querySelector('#note-body')
const removeElement = document.querySelector('#remove-note')

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