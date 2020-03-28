let person = {
    name: 'Dhanushka Gayashan',
    age: 33,
    city: 'Auckland',
    show: function () {
        console.log(this)
    }
}

person.show()


let restaurant = {
    name: 'ASB',
    guestCapacity: 75,
    guestCount: 0,
    seatParty: function (partySize) {
        this.guestCount += partySize
    },
    removeParty: function (partySize) {
        this.guestCount -= partySize
    },
    checkAvailability: function (partySize) {
        let seatLeft = this.guestCapacity - this.guestCount
        return partySize <= seatLeft
    }
}

restaurant.seatParty(72)
console.log(restaurant.checkAvailability(4))

restaurant.removeParty(5)
console.log(restaurant.checkAvailability(4))