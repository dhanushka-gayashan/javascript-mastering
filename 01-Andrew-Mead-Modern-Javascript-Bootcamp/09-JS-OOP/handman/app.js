const game = new Hangman('black cat', 3)

const puzzleEL = document.querySelector('#puzzle')
const guessesEL = document.querySelector('#guesses')

puzzleEL.textContent = game.puzzle
guessesEL.textContent = game.statusMessage

window.addEventListener('keypress', function (event) {   
    const guess = String.fromCharCode(event.charCode)

    game.makeGuess(guess)

    puzzleEL.textContent = game.puzzle
    guessesEL.textContent = game.statusMessage 
})
