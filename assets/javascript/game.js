// the computer will pick a random letter
var computerOptions = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var computerChoice = computerOptions[Math.floor(Math.random() * computerOptions.length)];

// for verifying functionality
console.log("Computer choice: " + computerChoice);

// setting up variables
var numWins = 0;
var numLosses = 0;
var attempts = 9;

// this array will store the letters already guessed
var guesses = [];

// this function will reset the game after a win or loss
function resetGame() {
    attempts = 9;
    attemptsText.textContent = attempts;
    guesses = [];
    guessesText.textContent = guesses;
    computerChoice = computerOptions[Math.floor(Math.random() * computerOptions.length)];
    console.log(computerChoice);
}

// assigning variables to the HTML elements we're changing
var winsText = document.getElementById("wins");
var lossesText = document.getElementById("losses");
var attemptsText = document.getElementById("guesses-left");
var guessesText = document.getElementById("already-guessed");

// when a key is pressed, the letter is stored in the "letter" variable
document.onkeyup = function(event) {
    var letter = event.key.toLowerCase();

    // can only play using letters of the alphabet, so this will check that the input exists in the array computerOptions
    if (computerOptions.indexOf(letter) > -1) {
        // conditions for a win, else lose an attempt
        if (letter == computerChoice) {
            numWins += 1;
            winsText.textContent = numWins;
            resetGame();

        } else {
            attempts -= 1;
            attemptsText.textContent = attempts;
            guesses += letter;
            guessesText.textContent = guesses;
        }

        // conditions for a loss
        if (attempts === 0) {
            numLosses += 1;
            lossesText.textContent = numLosses;
            resetGame();
        }
    }
}
