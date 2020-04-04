// async always return a Promise
const processData = async () => {
    return 12
}

processData().then((data) => {
    console.log('Data', data);
})