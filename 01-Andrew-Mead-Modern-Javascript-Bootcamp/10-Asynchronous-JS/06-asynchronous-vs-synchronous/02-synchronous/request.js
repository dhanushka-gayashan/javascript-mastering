const getPuzzle = (callback) => {
    const request = new XMLHttpRequest()

    // 3rd Parameter 
    //  - async = true
    //  - for asyn, we need to set it as 'false'
    // This API delay the respose by 5 seconds. We cannot checked the check-box untill respose come back
    request.open('GET', 'http://puzzle.mead.io/slow-puzzle', false)
    request.send()

    if (request.readyState === 4 && request.status === 200) {
        const data = JSON.parse(request.responseText)
        return data.puzzle
    } else if (request.readyState === 4) {
        throw new Error('Something went wrong')
    }
}