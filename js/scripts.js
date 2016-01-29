function HangMan() {
  this.words = ["dog"];
  // this.words = ["dog", "cat", "soccer", "earth", "food"];
  // this.guessedLetters = guessedLetters;
  // this.limbsLeft = 6;
}

HangMan.prototype.chooseWord = function() {
  this.word = this.words[Math.floor(Math.random() * this.words.length)];
};

HangMan.prototype.splitWord = function() {
  this.wordLetters = this.word.split("");
};

HangMan.prototype.makeBlank = function() {
  this.blankSpaces = [];
  for (var i = 0; i < this.word.length; i++) {
    this.blankSpaces.push("_");
  }
};

HangMan.prototype.letterFind = function() {
  this.wordLetters = [];
  for (var i = 0; i < this.word.length; i++) {
    if(this.wordLetters.charAt(i);
  }
};

  // if(this.wordLetters = "") {
  //   return "_";
  // }
  // this.blankSpaces =

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
