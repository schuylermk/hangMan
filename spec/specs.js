describe("hangMan", function() {
  it("will get a random word from an array", function() {
    expect(hangMan("dog")).to.equal("dog");
  });
  it("will determine if a letter is in the word", function() {
    expect(hangMan("a")).to.equal("a");
  });
});
