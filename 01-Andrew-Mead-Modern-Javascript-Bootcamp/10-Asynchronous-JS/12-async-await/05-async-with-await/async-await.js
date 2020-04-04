const getData = (num) => new Promise((resolve, reject) => {
    setTimeout(() => {
        typeof num === 'number' ? resolve(num * 2) : reject('Number must be provided')
    }, 2000);
})

const processData = async () => {
    let data = await getData(2)
    data = await getData(data)
    return data
}

processData().then((data) => {
    console.log(data)
}, (error) => {
    console.log(error)
})

console.log('All went well...')
