const notes = ['Note 1', 'Note 2', 'Note 3']

// Push: Add new item to End
notes.push('Note 4')
console.log(notes)

// Pop: Remove last item
console.log(notes.pop())
console.log(notes)

// Shift: Remove first item
console.log(notes.shift())
console.log(notes)

// Unshift: Add item begin
notes.unshift('Note 1')
console.log(notes)

// Splice: Remove middle items
console.log(notes.splice(1, 2))
console.log(notes)

// Splice: Add items to end
notes.splice(1, 0, 'Note 2')
notes.splice(2, 0, 'Note 3')
console.log(notes)

// Splice: Replace item
notes.splice(2, 1, 'Note 4')
console.log(notes)

// Splice: Add item into middle
notes.splice(2, 0, 'Note 3')
console.log(notes)

// Assing new values
notes[3] = 'Note 44'
console.log(notes)