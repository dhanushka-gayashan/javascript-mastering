// Function wait till Callback Function call 
getPuzzle((error, data) => {
    if (error) {
        console.log(`Error: ${error}`)
    } else {
        console.log(data)
    }
})
