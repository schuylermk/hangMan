describe("hangMan", function() {
  it("will get a random word from an array", function() {
    var testHangMan = new HangMan();
    expect(testHangMan.chooseWord()).to.be.a('string');
  });
  it("will split the words into letters", function() {
    var testHangMan = new HangMan();
    expect(testHangMan.splitWord()).to.eql(["c","a","t"]);
  });
});


// it("will determine if a letter is in the word", function() {
//   expect(hangMan("a")).to.equal("a");
// });
