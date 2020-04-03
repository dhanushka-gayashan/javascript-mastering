// Method Name should equal to Property Name

const data = {
    get location() {
        return this._location
    },
    set location(value) {
        this._location = value.trim() 
    }
}

data.location = 'Auckland'

console.log(data)

console.log(data.location)