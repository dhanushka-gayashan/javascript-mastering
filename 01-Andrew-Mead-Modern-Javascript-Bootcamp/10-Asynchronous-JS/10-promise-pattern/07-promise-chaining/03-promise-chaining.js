const getDataPromise = (data) => new Promise((resolve, reject) => {
    setTimeout(() => {
        typeof data === 'number' ? resolve(data * 2) : reject(`Someting went wrong`)
    }, 2000);
})

getDataPromise(100).then((data) => {
    return getDataPromise(data)
}).then((data) => {
    return getDataPromise(data)
}).then((data) => {
    console.log(data)
})