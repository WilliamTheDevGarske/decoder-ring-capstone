// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const substitutionModule = (function () {
  // you can add any code you want within this function scope
  const lookUp = "abcdefghijklmnopqrstuvwxyz";

  function substitution(input, alphabet, encode = true) {
    // your solution code here
    const checkUnique = new Set(alphabet);
    if (alphabet === undefined ||alphabet.length !== 26 || [...checkUnique].length < 26) return false;
    
    const inputArray = input.split(" ");
    
    if (encode) {
      let newArray = inputArray.map((inputs) => {
        let output = "";
        for (let i = 0; i < inputs.length; i++) {
          const letter = inputs[i].toLowerCase();
          const indexInt = lookUp.indexOf(letter);
          const newChar = `${alphabet.charAt(indexInt)}`;
          output += newChar;
        }
        return output;
      });
      return newArray.join(" ");
    } else {
      let newArray = inputArray.map((inputs) => {
        let output = "";
        for (let i = 0; i < inputs.length; i++) {
          const letter = inputs[i].toLowerCase();
          const indexInt = alphabet.indexOf(letter);
          const newChar = `${lookUp.charAt(indexInt)}`;
          output += newChar;
        }
        return output;
      });
      return newArray.join(" ");
    }
  }

  return {
    substitution,
  };
})();

module.exports = { substitution: substitutionModule.substitution };
