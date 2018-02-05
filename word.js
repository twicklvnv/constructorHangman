
var letter = require("./letter.js");

function Word(targetWord) {
	this.targetWord = targetWord;
	this.letters = [];
	this.wordFound = false;

//takes letters and puts them in a letter array
	this.getLetters = function() {
		for (var i = 0; i < this.targetWord.length; i++) {
			var newLetter = new Letter(this.word[i]);
			this.letters.push(newLetter);
		}
	}

//checks if the word has been found or not
	this.checkWord = function() {
		if (this.letters.every(function (character) {
			return character.appear === true;
		}))
		{
			this.wordFound = true;
			return true;
		}
	}
//checks if guessed letter is in word
	this.checkLetter = function(guess) {
		for (var j = 0; j < this.letters.length; j++) {
			if (character.letter === guess) {
				character.appear = true;
			}
		}
	}
//displays correctly guessed letters
	this.wordRender = function() {
		var display = '';
	this.letters.forEach(function(character) {
		var currentLetter = character.showCharacter();
		display += currentLetter
	})
	return display
	}
}

module.exports = Word;