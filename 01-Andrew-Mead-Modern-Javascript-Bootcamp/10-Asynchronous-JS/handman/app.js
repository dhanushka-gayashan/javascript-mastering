const puzzleEL = document.querySelector('#puzzle')
const guessesEL = document.querySelector('#guesses')

let game

const render = () => {
    puzzleEL.textContent = game.puzzle
    guessesEL.textContent = game.statusMessage
}

const startGame = async () => {
    const puzzle = await getPuzzle('2')
    game = new Hangman(puzzle, 5)
    render()    
}

window.addEventListener('keypress', (event) => {
    const guess = String.fromCharCode(event.charCode)
    game.makeGuess(guess)
    render()
})

document.querySelector('#reset').addEventListener('click', startGame)

startGame()