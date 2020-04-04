const myPromise = new Promise ((resolve, reject) => {
    setTimeout(() => {
        resolve('This is Promise Data')
    }, 2000);
})

myPromise.then((data) => {
    console.log(data)
})