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

// Select Elements
// -- Single --
//  p                : element type
//  #delete-button   : element id
//  .item            : css class
//
// -- Multiple --
//  p#order
//  button.inventory
//  h1#title.aaplication
//  h1.application#title

document.querySelector('#create-note').addEventListener('click', function (event) {
    console.log('Click Create Note')
})

document.querySelector('#remove-all').addEventListener('click', function (event) {
    document.querySelectorAll('.note').forEach(function (note) {
        note.remove()
    })
})


