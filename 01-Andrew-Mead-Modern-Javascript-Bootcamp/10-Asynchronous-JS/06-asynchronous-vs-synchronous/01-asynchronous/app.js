getPuzzle((error, data) => {
    if (error) {
        console.log(`Error: ${error}`)
    } else {
        console.log(data)
    }
})

console.log('This is executed before finish getPuzzle() execution...!!')
