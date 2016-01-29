describe("hangMan", function() {
  it("will create a HangMan object with a words array", function() {
    var testHangMan = new HangMan();
    expect(testHangMan.words).eql(["dog"]);
  });

  it("will get a word from the array", function() {
    var testHangMan = new HangMan();
    testHangMan.chooseWord();
    // expect(testHangMan.word).to.be.a('string');
    expect(testHangMan.word).to.equal('dog');
  });

  it("will split the words into letters", function() {
    var testHangMan = new HangMan();
    testHangMan.chooseWord();
    testHangMan.splitWord();
    expect(testHangMan.wordLetters).to.eql(["d","o","g"]);
  });
  it("will change letters to blanks", function() {
    var testHangMan = new HangMan();
    testHangMan.chooseWord();
    testHangMan.splitWord();
    testHangMan.makeBlank();
    expect(testHangMan.blankSpaces).to.eql(["_", "_", "_"]);
  });
  it("will identify if user guess is in the word", function() {
    var testHangMan = new HangMan();
    testHangMan.chooseWord();
    testHangMan.splitWord();
    testHangMan.makeBlank();
    testHangMan.letterFind();
    expect(testHangMan.guessMatch).to.equal(true);
  });


});


// it("will determine if a letter is in the word", function() {
//   expect(hangMan("a")).to.equal("a");
// });
