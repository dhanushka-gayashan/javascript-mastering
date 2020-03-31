let todos = getSavedTodos()

const filters = {
    searchingText: '',
    hideCompleted: false
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
        id: uuidv4(),
        text: text.value,
        completed: todos.length % 2 == 0 ? true : false
    })

    saveTodos(todos)
    renderTodos(todos, filters)
    text.value = ''
})

document.querySelector('#hide-completed').addEventListener('change', function (event) {
    filters.hideCompleted = event.target.checked
    renderTodos(todos, filters)
})