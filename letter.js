
var game = require("./game.js");

//controls if a letter in the word appears as the letter or as an 
//unguessed _ (blank)

function Letter(character) {
	this.character = character;
	this.appear = false;
	this.showCharacter = function() {
		if (this.character === " ") {
			this.appear = true;
			return " ";
		}
		if (this.appear === false) {
			return "_";
		}
		else {
			return this.character;
		}
	}
}

module.exports = Letter;