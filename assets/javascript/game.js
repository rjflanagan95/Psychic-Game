var computerOptions = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var computerChoice = computerOptions[Math.floor(Math.random() * computerOptions.length)];
console.log("Computer choice: " + computerChoice);

var numWins = 0;
var numLosses = 0;
var initialGuesses = 9;
var letter = "";

document.onkeyup = function(event) {
    var letter = event.key.toLowerCase();
    console.log("User input: " + letter);

    
    if (letter === computerChoice) {
        numWins += 1;
        console.log("numWins: " + numWins);
        initialGuesses = 9;
    } else {
        initialGuesses -= 1;
        console.log("Guesses left: " + initialGuesses);
    }
    if (initialGuesses === 0) {
        numLosses += 1;
        console.log("numLosses: " + numLosses);
        initialGuesses = 9;
    }
}
