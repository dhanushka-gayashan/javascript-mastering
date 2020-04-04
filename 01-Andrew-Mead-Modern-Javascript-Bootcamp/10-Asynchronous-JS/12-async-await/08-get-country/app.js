const nameEL = document.querySelector('#name')

getCurrentCountry().then((country) => {
    nameEL.textContent = country.name
}, (error) => {
    nameEL.textContent = error 
})