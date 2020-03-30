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

const incompleteTodos = todos.filter(function (todo) {
    return !todo.completed
})

const summary = document.createElement('h2')
summary.textContent = `You have ${incompleteTodos.length} todos left` 

const body = document.querySelector('body')
body.appendChild(summary)

todos.forEach(function (todo) {
    const todoP = document.createElement('p')
    todoP.textContent = todo.text
    body.appendChild(todoP)
})