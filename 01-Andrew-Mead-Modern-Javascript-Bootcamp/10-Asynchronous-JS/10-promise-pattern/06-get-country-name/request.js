const getCountry = (countryCode) => new Promise((resolve, reject) => {
    const request = new XMLHttpRequest()

    request.addEventListener('readystatechange', (event) => {
        if (event.target.readyState === 4 && event.target.status === 200) {
            const data = JSON.parse(event.target.responseText)
            const country = data.find((country) => country.alpha2Code === countryCode)
            resolve(country)
        } else if (event.target.readyState === 4) {
            reject('Someting went wrong baby...')
        }
    })

    request.open('GET', 'https://restcountries.eu/rest/v2/all')
    request.send()
})
