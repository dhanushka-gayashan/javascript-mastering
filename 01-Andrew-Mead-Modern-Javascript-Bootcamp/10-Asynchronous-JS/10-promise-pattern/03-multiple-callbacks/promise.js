// Thier is no any risk about call 'resolve' or 'reject' twice. 
// All ignore after first time call 'resolve' or 'reject;
const myPromise = new Promise ((resolve, reject) => {
    setTimeout(() => {
        reject('This is Promise Error')
        reject('This is Promise Error')
    }, 2000);
})

myPromise.then((data) => {
    console.log(data)
}, (err) => {
    console.log(err)
})