class Hangman {
    constructor(correctWord, remainingGuesses) {
        this.correctWord = correctWord.split('');
        this.remainingGuesses = remainingGuesses;
        this.guessesMade = [];
        this.status = 'Playing';
    }

    get puzzle() {
        let puzzel = '';

        this.correctWord.forEach((letter) => {
            puzzel += this.guessesMade.includes(letter.toLowerCase()) || letter === ' ' ? letter : '*';
        });

        return puzzel;
    }

    get statusMessage() {
        if (this.status === 'Finished')
            return `Great work, you guessed the word:  ${this.correctWord.join('')}!`;
        else if (this.status === 'Playing')
            return `Remaining guesses:  ${this.remainingGuesses}`;
        else
            return `Nice try, the correct word was:  ${this.correctWord.join('')}!`;

    }

    makeGuess(character) {
        character = character.toLowerCase();
        const isUnique = !this.guessesMade.includes(character);
        const isBadGuess = !this.correctWord.includes(character);

        if (this.status !== 'Playing')
            return;

        if (isUnique) {
            //this.guessesMade.push(character.toLowerCase());
            this.guessesMade = [...this.guessesMade, character.toLowerCase()];
        }
        if (isUnique && isBadGuess) {
            this.remainingGuesses--;
        }

        this.recalculateStatus(this.correctWord, this.remainingGuesses, this.guessesMade);
    }

    recalculateStatus() {
        let hasAllCorrect;

        if (this.remainingGuesses === 0) {
            this.status = 'Failed';
        } else {
            hasAllCorrect = this.correctWord.every((correctLetter) => {
                return this.guessesMade.includes(correctLetter.toLowerCase()) || correctLetter === ' ';
            });
            this.status = hasAllCorrect ? 'Finished' : 'Playing';
        }
    }
}

export { Hangman as default }