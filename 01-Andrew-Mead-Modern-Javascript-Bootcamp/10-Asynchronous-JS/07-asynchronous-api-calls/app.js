const countryCode = 'NZ'

getCountryName(countryCode, (error, country) => {
    if (error) {
        console.log(`Error: ${error}`)
    } else {
        console.log(`Country Name: ${country.name}`)
    }
})