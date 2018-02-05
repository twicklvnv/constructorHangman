function game() {
//creates an array of words for the computer to randomly choose from
var randomWord = ["azurite", "malachite", "rhodochrosite", "quartz", 
	"dioptase", "halite", "gypsum", "tourmaline", "olivine", 
	"barite", "chrysocolla", "fluorite", "pyrite", "orthoclase", 
	"hornblende"];

//randomly chooses a word from the randomWord array
function chosenWord() {

var randomChoice = randomWord[Math.floor(Math.random()
	* randomWord.length)];
//console.log(randomChoice);
}
chosenWord();
}
module.exports = game;