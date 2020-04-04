const myPromise = new Promise ((resolve, reject) => {
    setTimeout(() => {
        reject('This is Promise Error')
    }, 2000);
})

myPromise.then((data) => {
    console.log(data)
}, (err) => {
    console.log(err)
})