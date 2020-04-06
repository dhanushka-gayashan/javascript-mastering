// Send Dynamic number of Arguments
const printTeam1 = (teamName, coach, ...players) => {
    console.log(`Team: ${teamName}`)
    console.log(`Coach: ${coach}`)
    console.log(`Players: ${players.join(', ')}`)
}

const printTeam2 = (teamName, coach, playerOne, playerTwo) => {
    console.log(`Team: ${teamName}`)
    console.log(`Coach: ${coach}`)
    console.log(`Players: ${playerOne} and ${playerTwo}`)
}

const team = {
    name: 'Liberty',
    coach: 'Casey Penn',
    players: ['Marge', 'Aiden', 'Herbert', 'Sherry']
}
printTeam1(team.name, team.coach, ...team.players)
printTeam2(team.name, team.coach, ...team.players)


// Clone Array Elements
const cities1 = ['Barcelone', 'Cape Town', 'Bordeaux']

const citiesCopy1 = [...cities1]
console.log(citiesCopy1)

const citiesCopy2 = [...cities1]
citiesCopy2.push('Santiago')
console.log(citiesCopy2)

const citiesCopy3 = ['Santiago', ...cities1]
console.log(citiesCopy3)

const citiesCopy4 = [...cities1, 'Santiago']
console.log(citiesCopy4)


// Add Elements into Arrays
let cities2 = ['Barcelone', 'Cape Town', 'Bordeaux']
cities2 = [...cities2, 'Santiago']
console.log(cities2)

let cities3 = ['Barcelone', 'Cape Town', 'Bordeaux']
cities3 = ['Santiago', ...cities3]
console.log(cities3)