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

const filters = {
    searchingText: ''
}

const renderedTodos = function (todos, filters) {
    const mainDiv = document.querySelector('#todos')
    
    mainDiv.innerHTML = ''
    
    const filteredTodos = todos.filter(function (todo) {
        return todo.text.toLowerCase().includes(filters.searchingText.toLowerCase())
    })

    const incompleteTodos = filteredTodos.filter(function (todo) {
        return !todo.completed
    })

    const summary = document.createElement('h2')
    summary.textContent = `You have ${incompleteTodos.length} todos left`
    mainDiv.appendChild(summary)

    incompleteTodos.forEach(function (todo) {
        let todoEL = document.createElement('p')
        todoEL.textContent = todo.text
        mainDiv.appendChild(todoEL)
    })
}

renderNotes(todos, filters)

document.querySelector('#add-todo').addEventListener('click', function (event) {
    console.log('Add Todo')
})

document.querySelector('#filter-todo').addEventListener('input', function (event) {
    filters.searchingText = event.target.value
    renderedTodos(todos, filters)
})