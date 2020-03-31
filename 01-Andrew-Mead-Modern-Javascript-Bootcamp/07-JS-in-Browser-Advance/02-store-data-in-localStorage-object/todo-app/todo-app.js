let todos = []

const filters = {
    searchingText: '',
    hideCompleted: false
}

const todosJSON = localStorage.getItem('todos')
if (todosJSON !== null) {
    todos = JSON.parse(todosJSON)
}

const renderTodos = function (todos, filters) {
    const mainDiv = document.querySelector('#todos')
    
    mainDiv.innerHTML = ''
    
    let filteredTodos = todos.filter(function (todo) {
        const searchTextMatch = todo.text.toLowerCase().includes(filters.searchingText.toLowerCase())
        const hideCompletedMatch = !filters.hideCompleted || !todo.completed
        return searchTextMatch && hideCompletedMatch
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

    localStorage.setItem('todos', JSON.stringify(todos))

    renderTodos(todos, filters)

    text.value = ''
})

document.querySelector('#hide-completed').addEventListener('change', function (event) {
    filters.hideCompleted = event.target.checked
    renderTodos(todos, filters)
})