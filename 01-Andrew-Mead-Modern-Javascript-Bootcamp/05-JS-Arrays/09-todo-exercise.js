const todos = ['Wakeup', 'Exercise', 'Get Clean', 'Have Breakfast', 'Study', 'Sleep']

// Print the length
console.log(`You have ${todos.length} todos`)

// Pring 1st item
console.log(`Todo: ${todos[0]}`)

// Pring 2nd last item
console.log(`Todo: ${todos[todos.length - 2]}`)

// Delete 3rd item
todos.splice(2, 1)
console.log(todos)

// Add a new item onto the end
todos.push('Watch a movie')
console.log(todos)

// Remove the first item from the list
todos.shift()
console.log(todos)

// Loop over array
todos.forEach(function(item, index) {
    console.log(`${index + 1}. ${item}`)
})

// For Loop
for (let index = 0; index < todos.length; index++) {
    console.log(`${index + 1}. ${todos[index]}`)
}

for (let index = todos.length - 1; index >= 0; index--) {
    console.log(`${index + 1}. ${todos[index]}`)
}

// Convert array to array of objects
todos.forEach(function (todo, index) {
    const complate = index % 2 == 0 ? true : false    
    const obj = {
        text: todo,
        completed: complate
    }
    todos[index] = obj
})
console.log(todos)

// Delete element from array
const deleteTodo = function (todos, todo) {
    const index = todos.findIndex(function (item, index) {
        return item.text.toLowerCase() === todo.toLowerCase()
    })
    if (index > -1) {
        todos.splice(index, 1)
    }
}

deleteTodo(todos, 'Get Clean')
console.log(todos)

// Filter Array
const filterTodo = function (todos, query) {
    return todos.filter(function (todo, index) {
        return todo.completed === query
    })
}

const inprogressTodo = filterTodo(todos, false)
console.log(inprogressTodo)

// Sort Array
const sortTodos = function (todos) {
    return todos.sort(function (a, b) {
        if (a.completed < b.completed) {
            return -1
        } else if(b.completed < a.completed) {
            return 1
        } else {
            return 0
        }
    })
}

sortTodos(todos)
console.log(todos)