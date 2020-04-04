const getDataPromise = (data) => new Promise((resolve, reject) => {
    setTimeout(() => {
        if (data) {
            resolve(`Data has been processed. ${data * 2}`)
        } else {
            reject(`Someting went wrong`)
        }
    }, 2000);
})

const myPromise1 = getDataPromise(100)
myPromise1.then((data) => {
    console.log(data)
}, (err) => {
    console.log(err)
})
