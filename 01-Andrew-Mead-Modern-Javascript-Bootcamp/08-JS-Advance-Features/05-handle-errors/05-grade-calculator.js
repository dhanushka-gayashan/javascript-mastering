let getGrade = function (score, totalScore) {    
    
    if (typeof score !== 'number' || typeof totalScore !== 'number') {
        throw Error('Only accept number for arguments')
    }

    let percentage = (score / totalScore) * 100
    let grade = ''
    
    if (percentage >= 90) {
        grade = 'A'
    } else if (percentage >= 80) {
        grade = 'B'
    } else if (percentage >= 70) {
        grade = 'C'
    } else if (percentage >= 60) {
        grade = 'D'
    } else {
        grade = 'F'
    }

    return `You got a ${grade} (${percentage}%)!`   
}

try {
    let score = 'hekko'
    let totalScore = 20
    let grade = getGrade(score, totalScore)
    console.log(grade) 
} catch (error) {
    console.log(error.message)
    console.log('Please pass only numbers as parameters...')
}
