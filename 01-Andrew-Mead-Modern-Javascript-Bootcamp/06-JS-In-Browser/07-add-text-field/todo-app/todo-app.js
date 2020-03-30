const todos = [{
    text: 'Order cat food',
    completed: false
}, {
    text: 'Clean kitchen',
    completed: true
}, {
    text: 'Buy food',
    completed: true
}, {
    text: 'Do work',
    completed: false
}, {
    text: 'Exercise',
    completed: true
}]


document.querySelector('#add-todo').addEventListener('click', function (event) {
    console.log('Add Todo')
})

document.querySelector('#text-todo').addEventListener('input', function (event) {
    console.log(event.target.value)
})