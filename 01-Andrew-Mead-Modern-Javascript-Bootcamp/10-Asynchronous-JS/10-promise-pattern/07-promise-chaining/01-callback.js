const getDataCallback = (num, callback) => {
    setTimeout(() => {
        if (typeof num === 'number') {
            callback(undefined, num * 2)
        } else (
            callback('Number must ba provided', undefined)
        )
    }, 2000);
}

getDataCallback(10, (error, data) => {
    if (error) {
        console.log(error)
    } else {
        getDataCallback(data, (error, data) => {
            if (error) {
                console.log(error)
            } else {
                console.log(data)
            }
        })
    }
})