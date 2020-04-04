const nameEL = document.querySelector('#name')

const countryCode = 'NZ'
getCountry(countryCode).then((country) => {
    nameEL.textContent = country ? country.name : 'Country code is invalid baby..'  
}).catch((error) => {
    nameEL.textContent = error
})
