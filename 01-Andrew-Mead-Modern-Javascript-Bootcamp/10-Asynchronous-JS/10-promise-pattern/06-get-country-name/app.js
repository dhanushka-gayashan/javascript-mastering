const nameEL = document.querySelector('#name')

const countryCode = 'NZ'
const getName = getCountry(countryCode)
getName.then((country) => {
    if (country) {
        nameEL.textContent = country.name
    } else {
        nameEL.textContent = 'Country code is invalid baby..'
    }    
}, (error) => {
    nameEL.textContent = error
})
