// Restric create Leaked Global Variables
'use strict'

const processData = () => {
    data = '12345'
}

processData()

console.log(data)