const nameEL = document.querySelector('#name')

getLocation().then((location) => {
    return getCountry(location.country)
}).then((country) => {
    nameEL.textContent = country ? country.name : 'Country code is invalid baby..'  
}).catch((error) => {
    nameEL.textContent = error
})