var levenshtein = require('./../../build/utils/levenshtein').default;

describe("Testa função levenshtein", function() {
  it("Testa inserção", function() {
    var word = 'olx';
    var word2 = 'olxz';
    expect(levenshtein(word, word2)).toEqual(1);
  });

  it("Testa deleção", function() {
    var word = 'olx';
    var word2 = 'ol';
    expect(levenshtein(word, word2)).toEqual(1);
  });

  it("Testa substituição", function() {
    var word = 'olx';
    var word2 = 'olz';
    expect(levenshtein(word, word2)).toEqual(1);
  });

  it("Testa 3 edições", function() {
    var word = 'olxbr';
    var word2 = 'olxus_';
    expect(levenshtein(word, word2)).toEqual(3);
  });
});