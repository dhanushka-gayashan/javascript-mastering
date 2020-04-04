// fetch return a Promise
// fetch api does not works with NodeJS
// NodeJs have node-fetch api
fetch('http://puzzle.mead.io/puzzle', {}).then((response) => {
    if (response.status === 200) {
        return response.json()
    } else {
        throw new Error('Unable to fetch the puzzle')
    }
}).then((data) => {
    console.log(data)
}).catch((error) => {
    console.log(error)
})