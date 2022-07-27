let num = 105.945;

// console.log(num.toFixed(2));
// console.log(Math.round(num));
// console.log(Math.floor(num));
// console.log(Math.ceil(num));

let min = 10;
let max = 20;

let randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;


// console.log(randomNumber);

//Challenge

let makeGuess = function (guess, min, max) {
    let randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;
    if (guess === randomNumber) return true
    else return false;
}

console.log(makeGuess(11, 10, 12));

