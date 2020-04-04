const myFunction = () => {
    const message = 'This is the message'

    const printMessage = () => {
        console.log(message)
    }

    return printMessage
}

const printMessage = myFunction()
printMessage()