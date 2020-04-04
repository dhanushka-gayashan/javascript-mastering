const getDataPromise = (data) => new Promise((resolve, reject) => {
    setTimeout(() => {
        typeof data === 'number' ? resolve(data * 2) : reject(`Someting went wrong`)
    }, 2000);
})

getDataPromise(100).then((data) => {
    getDataPromise(data).then(() => {
        console.log(data)
    }, (error) => {
        console.log(error)
    })
}, (error) => {
    console.log(error)
})