
const myPromise = new Promise ((resolve, reject) => {
    setTimeout(() => {
        reject('This is Promise Error')
    }, 2000);
})

// Same Data 
myPromise.then((data) => {
    console.log(data)
}, (err) => {
    console.log(err)
})

// Same Data: Not going to run myPromise again
myPromise.then((data) => {
    console.log(data)
}, (err) => {
    console.log(err)
})