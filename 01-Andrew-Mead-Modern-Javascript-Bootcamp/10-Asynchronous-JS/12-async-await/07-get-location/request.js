const getCountry = async (countryCode) => {
    const response = await fetch('https://restcountries.eu/rest/v2/all', {})

    if (response.status === 200) {
        const countries = await response.json()
        return countries.find((country) => country.alpha2Code === countryCode) 
    } else {
        throw new Error('Something went wrong. Plesae try again later....')
    }    
}

const getLocation = async () => {
    const response = await fetch('http://ipinfo.io/json?token=<ipinfo_token>', {})

    if (response.status === 200) {
        return response.json()
    } else {
        throw new Error('Something went wrong baby...')
    }
}