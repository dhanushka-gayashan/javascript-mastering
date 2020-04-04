const getDataCallback = (callback) => {
    setTimeout(() => {
        callback('Someting went wrong', undefined)
    }, 2000);
}

getDataCallback((error, data) => {
    if (error) {
        console.log(error)
    } else {
        console.log(data)
    }
})