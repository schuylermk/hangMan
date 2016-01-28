function HangMan() {
  this.words = ["dog", "cat", "soccer", "earth", "food"];
  // this.guessedLetters = guessedLetters;
  // this.limbsLeft = 6;
}

HangMan.prototype.chooseWord = function() {
  var word = this.words[Math.floor(Math.random() * this.words.length)];
  return word;
};

HangMan.prototype.splitWord = function(word) {
  var arrayOne = word.split(["" [word.length]]);
  return arrayOne;
}

// for(var i = 0; i <= wordArray.length; i++) {
//   if wor
// }

//
// myGame.prototype.wordArray = function() {
//   return this.guessedLetters === charAt(i);
// }
//



// var hangMan =  function()

// var letters =
