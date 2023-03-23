// Write your tests here!
const { expect } = require("chai");
const substitutionModule = require("../src/substitution");

describe("substitution", () => {
  it("should encode a message", () => {
        const actual = substitutionModule.substitution("Master Sword", "xoyqmcgrukswaflnthdjpzibev");
    const expected = "axdjmh dilhq";
        expect(actual).to.eql(expected);
  });
  it("should encode a message that has spaces in it", () => {
        const actual = substitutionModule.substitution("You are an excellent warrior", "xoyqmcgrukswaflnthdjpzibev");
    const expected = "elp xhm xf mbymwwmfj ixhhulh";
        expect(actual).to.eql(expected);
  });
  it("should ignores capital letters", () => {
        const actual = substitutionModule.substitution("You are an excellent warrior Link", "xoyqmcgrukswaflnthdjpzibev");
    const expected = "elp xhm xf mbymwwmfj ixhhulh wufs";
        expect(actual).to.eql(expected);
  });
  it("should decode a message", () => {
        const actual = substitutionModule.substitution("idvvj jd& &p&", "$wae&zrdxtfcygvuhbijnokmpl", false);
    const expected = "shoot the eye";
        expect(actual).to.eql(expected);
  });
  it("should decode a message that has spaces in it", () => {
        const actual = substitutionModule.substitution("idvvj jd& &p&", "$wae&zrdxtfcygvuhbijnokmpl", false);
    const expected = "shoot the eye";
        expect(actual).to.eql(expected);
  });
      it("should return false if the alphabet parameter isn't exactly 26 characters", () => {
        const actual = substitutionModule.substitution("green rupee", "abc");
    expect(actual).to.be.false;
      });
  it("should return false if the alphabet parameter has duplicate characters", () => {
        const actual = substitutionModule.substitution("red rupee", "abcabc");
    expect(actual).to.be.false;
  });
});