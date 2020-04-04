const request = new XMLHttpRequest()

request.addEventListener('readystatechange', (event) => {
    if (event.target.readyState === 4 && event.target.status === 200) {
        const data = JSON.parse(event.target.responseText)
        console.log(data)
    }
})

request.open('GET', 'http://puzzle.mead.io/puzzle')
request.send()
