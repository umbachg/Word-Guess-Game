
var possibleWords = ["America", "Spain", "France", "Lithuania", "Argentina", "Russia", "PuertoRico", "Turkey", "Brazil", "Australia"];

var maxGuess = 15;
var pauseGame = false;
var guessedLetters = [];
var guessingWord = [];
var wordToMatch;
var numGuess;
var wins = 0;
// i dont know why but it will not let me use the normal way of attaching a file. im going to try again in the morning.
var lose = new Audio("C:\Users\panth\Desktop\HOMEWORK\HW4\Word-Guess-Game\assets\sounds\front-desk-bells-daniel_simon (1).mp3");
var win = new Audio("C:\Users\panth\Desktop\HOMEWORK\HW4\Word-Guess-Game\assets\sounds\foghorn-daniel_simon.mp3");
resetGame();

document.onkeypress = function (event) {

    if (isAlpha(event.key) && !pauseGame) {
        checkForLetter(event.key.toUpperCase());
    }
}

function checkForLetter(letter) {
    var foundLetter = false;

    for (var i = 0, j = wordToMatch.length; i < j; i++) {
        if (letter === wordToMatch[i]) {
            guessingWord[i] = letter;
            foundLetter = true;


            if (guessingWord.join("") === wordToMatch) {
                win.play();
                wins++;
                pauseGame = true;
                updateDisplay();
                setTimeout(resetGame, 3000);
            }
        }
    }

    if (!foundLetter) {

        if (!guessedLetters.includes(letter)) {
            guessedLetters.push(letter);
            numGuess--;
        }
        if (numGuess === 0) {
            lose.play();
            guessingWord = wordToMatch.split();
            pauseGame = true;
            setTimeout(resetGame, 3000);
        }
    }
    updateDisplay();
}

function isAlpha(ch) {
    return /^[A-Z]$/i.test(ch);
}

function resetGame() {
    numGuess = maxGuess;
    pauseGame = false;

    wordToMatch = possibleWords[Math.floor(Math.random() * possibleWords.length)].toUpperCase();
    console.log(wordToMatch);

    guessedLetters = [];
    guessingWord = [];


    for (var i = 0, j = wordToMatch.length; i < j; i++) {

        if (wordToMatch[i] === " ") {
            guessingWord.push(" ");
        } else {
            guessingWord.push("_");
        }
    }
    updateDisplay();
}

function updateDisplay() {
    document.getElementById("totalWins").innerHTML = wins;
    document.getElementById("currentWord").innerHTML = guessingWord.join("");
    document.getElementById("remainingGuesses").innerHTML = numGuess;
    document.getElementById("guessedLetters").innerHTML = guessedLetters.join(" ");
}