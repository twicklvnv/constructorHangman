
var inquirer = require("inquirer");
var letter = require("./letter.js");
var word = require("./word.js");
var game = require("./game.js");
var guessesRemaining = 10;
var guessedLetters = [];


function startGame() {
	console.log("Let's play Hangman. All words are mineral names.");
	//clearing guessed letters for a new game
	if (guessedLetters.length > 0) {
		guessedLetters = [];
	}
	//resetting guesses remaining back to 10
	guessesRemaining = 10;

	//prompt if user wants to play or not
	inquirer.prompt([
	{
		type: "confirm",
		message: "Are you ready?",
		name: "play"
	}
		])
	.then(function(answer) {
		if (answer.play) {
			console.log("You have 10 guesses to get the mineral.");
			newGame();
		}
		else {
			console.log("Maybe another time.");
		}
	})
}

function newGame() {
	this.currentWord = game.randomChoice;
	console.log(currentWord);
	this.currentWord.word.getLetters;
	this.promptUser();

}

function promptUser() {
	inquirer.prompt([
	{
		type: "input",
		message: "Choose a letter",
		name: "chosenLetter"
	}
		])
	.then(function(character) {
		var letterReturned = (character.chosenLetter).toLowerCase();
		var guessAlready = false;
		for (var i = 0; i < guessedLetters.length; i++) {
			if(letterReturned === guessedLetters[i]) {
				guessAlready = true;
				console.log ("That letter has already been guessed");
			}
		}
		if (guessAlready === false) {
			guessedLetters.push(letterReturned);
			var found = currentWord.checkLetter(letterReturned);
			if (found === 0) {
				console.log("Nope. Guess again.");
				guessesRemaining--;
				console.log(guessesRemaining + " guesses left.");
			}
			else {
				console.log("Yep.");
				console.log(currentWord.wordRender());
			}
		}

		if (guessesRemaining > 0 && currentWord.wordFound === false) {
			promptUser();
		}
		else if (guessesRemaining === 0) {
			console.log("Sorry, you're guesses are up. The correct word was " + 
				currentWord.word);
		}
	})
	
}
startGame();