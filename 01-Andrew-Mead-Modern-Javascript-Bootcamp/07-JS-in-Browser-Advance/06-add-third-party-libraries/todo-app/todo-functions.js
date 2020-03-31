const getSavedTodos = function () {
    const todosJSON = localStorage.getItem('todos')
    if (todosJSON !== null) {
        return JSON.parse(todosJSON)
    } else {
        return []
    }
}

const saveTodos = function (todos) {
    localStorage.setItem('todos', JSON.stringify(todos))
}

const generateTodoDOM = function (todo) {
    const div = document.createElement('div')

    const chkBox = document.createElement('input')
    chkBox.type = 'checkbox'

    const textSpan = document.createElement('span')
    textSpan.textContent = todo.text

    const removeBtn = document.createElement('button')
    removeBtn.textContent = 'X'

    div.appendChild(chkBox)
    div.appendChild(textSpan)
    div.appendChild(removeBtn)
    
    return div
}

const generateSummaryDOM = function (incompleteTodos) {
    const summary = document.createElement('h2')
    summary.textContent = `You have ${incompleteTodos.length} todos left`
    return summary
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
    
    const summary = generateSummaryDOM(incompleteTodos)
    mainDiv.appendChild(summary)

    filteredTodos.forEach(function (todo) {
        const div = generateTodoDOM(todo)
        mainDiv.appendChild(div)
    })
}