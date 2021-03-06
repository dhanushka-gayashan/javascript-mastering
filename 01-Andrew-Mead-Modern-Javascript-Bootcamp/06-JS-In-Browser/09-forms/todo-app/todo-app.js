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

const renderTodos = function (todos, filters) {
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

    filteredTodos.forEach(function (todo) {
        let todoEL = document.createElement('p')
        todoEL.textContent = todo.text
        mainDiv.appendChild(todoEL)
    })
}

renderTodos(todos, filters)

document.querySelector('#filter-todo').addEventListener('input', function (event) {
    filters.searchingText = event.target.value
    renderTodos(todos, filters)
})

document.querySelector('#new-todo').addEventListener('submit', function (event) {
    event.preventDefault()

    const text = event.target.elements.text

    todos.push({
        text: text.value,
        completed: todos.length % 2 == 0 ? true : false
    })

    text.value = ''

    renderTodos(todos, filters)
})