for (let index = 0; index < 5; index++) {
    console.log(`Count... ${index}`)
}


for (let index = 5; index >= 0; index--) {
    console.log(`Count... ${index}`)
}


const notes = ['Note 1', 'Note 2', 'Note 3']

for(let i = 0; i < notes.length; i++) {
    console.log(`index: ${i} - note: ${notes[i]}`)
}

for (let i = notes.length - 1; i >= 0; i--) {
    console.log(`index: ${i} - note: ${notes[i]}`)
}