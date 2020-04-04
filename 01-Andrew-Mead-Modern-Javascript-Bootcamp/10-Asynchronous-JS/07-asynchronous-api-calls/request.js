const getCountryName = (countryCode, callback) => {
    const request = new XMLHttpRequest()

    request.addEventListener('readystatechange', (event) => {
        if (event.target.readyState === 4 && event.target.status === 200) {
            const data = JSON.parse(event.target.responseText)
            const country = data.find((country) => country.alpha2Code === countryCode)
            callback(undefined, country)
        } else if (event.target.readyState === 4) {
            callback(new Error('Something went wrong....'), undefined)
        }
    })

    request.open('GET', 'https://restcountries.eu/rest/v2/all')
    request.send()
}
