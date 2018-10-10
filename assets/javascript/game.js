// the computer will pick a random letter
var computerOptions = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var computerChoice = computerOptions[Math.floor(Math.random() * computerOptions.length)];
console.log("Computer choice: " + computerChoice);

// setting up variables
var numWins = 0;
var numLosses = 0;
var attempts = 9;

// the user's guess
var letter = "";
// this array will store the letters already guessed
var guesses = [];

// assigning variables to the HTML elements we're changing
var winsText = document.getElementById("wins");
var lossesText = document.getElementById("losses");
var attemptsText = document.getElementById("guesses-left");
var guessesText = document.getElementById("already-guessed");

// when a key is pressed, the letter is stored in the "letter" variable
document.onkeyup = function(event) {
    var letter = event.key.toLowerCase();
    console.log("User input: " + letter);

    
    if (letter == computerChoice) {
        numWins += 1;
        winsText.textContent = numWins;
        // console.log("numWins: " + numWins);
        attempts = 9;
        attemptsText.textContent = attempts;
        guesses = [];
        guessesText.textContent = guesses;
        
    } else {
        attempts -= 1;
        // console.log("Guesses left: " + attempts);
        attemptsText.textContent = attempts;
        guesses += letter;
        guessesText.textContent = guesses;
        
    }
    if (attempts === 0) {
        numLosses += 1;
        lossesText.textContent = numLosses;
        // console.log("numLosses: " + numLosses);
        attempts = 9;
        attemptsText.textContent = attempts;
        guesses = [];
        guessesText.textContent = guesses;
        // restarting the game
        var computerChoice = computerOptions[Math.floor(Math.random() * computerOptions.length)];
        console.log("Computer choice: " + computerChoice);
    }
}
