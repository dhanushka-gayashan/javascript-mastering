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

const removeTodo = function (id) {
    const todoIndex = todos.findIndex(function (todo) {
        return todo.id === id
    })
    if (todoIndex > -1) {
        todos.splice(todoIndex, 1)
    }
}

const toggleTodo = function (id) {
    const todo = todos.find(function (todo) {
        return todo.id === id
    })
    
    if (todo !== undefined) {
        todo.completed = !todo.completed
    }    
}

const generateTodoDOM = function (todo) {
    const div = document.createElement('div')

    const chkBox = document.createElement('input')
    chkBox.type = 'checkbox'
    chkBox.checked = todo.completed
    chkBox.addEventListener('change', function (event) {        
        toggleTodo(todo.id)
        saveTodos(todos)
        renderTodos(todos, filters)
    })
    div.appendChild(chkBox)

    const textSpan = document.createElement('span')
    textSpan.textContent = todo.text
    div.appendChild(textSpan)

    const removeBtn = document.createElement('button')
    removeBtn.textContent = 'X'
    removeBtn.addEventListener('click', function (event) {
        removeTodo(todo.id)
        saveTodos(todos)
        renderTodos(todos, filters)
    })
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