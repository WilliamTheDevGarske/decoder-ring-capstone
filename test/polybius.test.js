// Write your tests here!
const { expect } = require("chai");
const polybiusModule = require("../src/polybius");

describe("polybius", () => {
   it("should encode a message by translating each letter to each pair of numbers", () => {
     const actual = polybiusModule.polybius("Gannon"); 
     const expected = "221133334333";
    expect(actual).to.eql(expected);
   });
  
  it("should leave the spaces as is when encoding", () => {
     const actual = polybiusModule.polybius("hello hyrule"); 
     const expected = "3251131343 324524541351";
    expect(actual).to.eql(expected);
  });

it("should ignore capital letters", () => {
     const actual = polybiusModule.polybius("Hello Hyrule"); 
     const expected = "3251131343 324524541351";
    expect(actual).to.eql(expected);
  });
  it("should decode a message by translating each pair of numbers into a letter", () => {
    const actual = polybiusModule.polybius('343232 3432514252 4234 5551134111', false);
    const expected = "shh shei/jk i/js zelda";
        expect(actual).to.equal(expected);
  });
  it("should leave the spaces as is when decoding", () => {
     const actual = polybiusModule.polybius("343232 3432514252 4234 5551134111", false); 
     const expected = "shh shei/jk i/js zelda";
    expect(actual).to.eql(expected);
  });

  it("should translate 42 to i/j when decoding", () => {
     const actual = polybiusModule.polybius("25115251 5453 13423352", false); 
     const expected = "wake up li/jnk";
    expect(actual).to.eql(expected);
  });

  it("should translate i and j to 42 when encoding", () => {
     const actual = polybiusModule.polybius("Tingles jingle"); 
     const expected = "44423322135134 424233221351";
    expect(actual).to.eql(expected);
  });
  
  it("should return false if the number of characters in the string sans spaces is not even", () => {
    const actual = polybiusModule.polybius("32452454135", false);
    expect(actual).to.be.false;
  });
});