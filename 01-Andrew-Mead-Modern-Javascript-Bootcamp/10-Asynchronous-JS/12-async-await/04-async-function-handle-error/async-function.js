// async always return a Promise
const processData = async () => {
    throw new Error('Something went wrong...!!')
}

processData().then((data) => {
    console.log('Data', data);
}).catch((error) => {
    console.log('Error', error);    
})