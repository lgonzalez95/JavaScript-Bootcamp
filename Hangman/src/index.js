import Hangman from './hangman';
import getPuzzle from './http-requests-handler';

const remainingGuessesElement = document.querySelector('#remaining-guesses');
const gameStatus = document.querySelector('#game-status');
const wordElement = document.querySelector('#word');
let game1

window.addEventListener('keypress', (e) => {
    game1.makeGuess(e.key);
    render();
});

const render = () => {
    gameStatus.textContent = game1.status;
    remainingGuessesElement.textContent = game1.statusMessage;
    wordElement.innerHTML = '';

    let myPuzzleArray = Array.from(game1.puzzle);
    myPuzzleArray.forEach((letter) => {
        const letterElement = document.createElement('span');
        letterElement.textContent = letter;
        wordElement.append(letterElement);
    })
}

const startGame = async () => {
    const puzzle = await getPuzzle(2);
    game1 = new Hangman(puzzle, 8);
    render();
}

document.querySelector('#reset-game').addEventListener('click', startGame);

startGame();
