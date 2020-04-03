const data = {
    locations: [],
    
    get location() {
        return this._location
    },
    
    set location(value) {
        this._location = value.trim()
        this.locations.push(this._location)
    } 
}

data.location = 'Auckland'
data.location = 'Colombo'

console.log(data)

console.log(data.location)