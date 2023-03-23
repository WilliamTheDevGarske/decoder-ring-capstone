// Write your tests here!
const { expect } = require("chai");
const caesarModule = require("../src/caesar");

describe("caesar", () => {
  it("should return the decoded message depending on the given shift value", () => {
        const actual = caesarModule.caesar("mx'w herkivsyw xs ks epsri!", 4, false);
    const expected = "it's dangerous to go alone!"; 
        expect(actual).to.eql(expected);
  });
  it("should return the encoded message depending on the given shift value", () => {
        const actual = caesarModule.caesar("It's dangerous to go alone!", 4);
    const expected = "mx'w herkivsyw xs ks epsri!";
    expect(actual).to.eql(expected);
  });
   it("should leave spaces as is", () => {
        const actual = caesarModule.caesar("Take this!", 4);
        const expected = " "
        expect(actual.charAt(4)).to.equal(expected);
    });
    it("should leave special characters as is", () => {
        const actual = caesarModule.caesar("Take this!", 4);
        const expected = "!"
        expect(actual.charAt(9)).to.equal(expected);
    });
    it("should wrap characters around when going past the letter 'z'", () => {
        const actual = caesarModule.caesar("Zelda", 3);
      const expected = "chogd";
        expect(actual).to.equal(expected);
    });
  it("should ignore capitalization of letters", () => {
    const actual = caesarModule.caesar("Link", 2);
    const expected = "nkpm";
    expect(actual).to.eql(expected);
  });
  it("should return false if the shift parameter is not present", () => {
    const actual = caesarModule.caesar("thinkful");
    expect(actual).to.be.false;
it("should return false if the shift is greater than 25", () => {
        const actual = caesarModule.caesar("mx'w herkivsyw xs ks epsri!", 56);
        expect(actual).to.be.false; 
    });
    it("should return false if the shift is less than -25", () => {
        const actual = caesarModule.caesar("mx'w herkivsyw xs ks epsri!", -75);
        expect(actual).to.be.false; 
    });
    it("should return false if the shift is 0", () => {
        const actual = caesarModule.caesar("mx'w herkivsyw xs ks epsri!", 0);
        expect(actual).to.be.false; 
    });
  });
});