const calculateAverage = (thing, ...numbers) => {
    let sum = 0    
    numbers.forEach((num) => sum += num)    
    const average = sum / numbers.length
    return `The average ${thing} is ${average}`
}
console.log(calculateAverage('grade', 10, 20, 30, 40 , 50))


const printTeam = (teamName, coach, ...players) => {
    console.log(`Team: ${teamName}`)
    console.log(`Coach: ${coach}`)
    console.log(`Players: ${players.join(', ')}`)
}
printTeam('Liberty', 'Casey Penn', 'Marge', 'Aiden', 'Herbert', 'Sherry')