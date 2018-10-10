var computerOptions = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var computerChoice = computerOptions[Math.floor(Math.random() * computerOptions.length)];
console.log("Computer choice: " + computerChoice);

var numWins = 0;
var numLosses = 0;
var attempts = 9;
var letter = "";
var guesses = [];
var winsText = document.getElementById("wins");
var lossesText = document.getElementById("losses");
var attemptsText = document.getElementById("guesses-left");
var guessesText = document.getElementById("already-guessed");

document.onkeyup = function(event) {
    var letter = event.key.toLowerCase();
    console.log("User input: " + letter);

    
    if (letter === computerChoice) {
        numWins += 1;
        console.log("numWins: " + numWins);
        attempts = 9;
        winsText.textContent = numWins;
        attemptsText.textContent = attemptsText;
        
    } else {
        attempts -= 1;
        console.log("Guesses left: " + attempts);
        attemptsText.textContent = attempts;
        guesses += letter;
        guessesText.textContent = guesses;
        
    }
    if (attempts === 0) {
        numLosses += 1;
        console.log("numLosses: " + numLosses);
        attempts = 9;
        lossesText.textContent = numLosses;
        attemptsText.textContent = attempts;
        guesses = [];
        guessesText.textContent = guesses;
    }
}
