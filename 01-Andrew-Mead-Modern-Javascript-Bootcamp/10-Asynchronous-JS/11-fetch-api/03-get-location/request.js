const getCountry = (countryCode) => {
    return fetch('https://restcountries.eu/rest/v2/all', {}).then((response) => {
        if (response.status === 200) {
            return response.json()
        } else {
            throw new Error('Something went wrong. Plesae try again later....')
        }
    }).then((countries) => countries.find((country) => country.alpha2Code === countryCode))
}

const getLocation = () => {
    return fetch('http://ipinfo.io/json?token=<ipinfo_token>', {}).then((response) => {
        if (response.status === 200) {
            return response.json()
        } else {
            throw new Error('Something went wrong baby...')
        }
    })
}