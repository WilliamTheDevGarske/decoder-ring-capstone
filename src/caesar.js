// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const caesarModule = (function () {
  // you can add any code you want within this function scope

  function caesar(input, shift, encode = true) {
    const lookUp = "abcdefghijklmnopqrstuvwxyz";
//create a gaurd clause to check if shift meets correct conitions
    if (shift < -25 || shift > 25 || shift === 0 || shift === undefined) {
      return false;
    }
//create a string variable to hold on to the output
    let result = "";
//check if encode is false and if so then shift * -1 to move that many in the opposite direction.
    if (encode === false) {
      shift = shift * -1;
    }
//create a for loop to loop through the input.length
    for (let i = 0; i < input.length; i++) {
//create a variable to hold onto each character and transform letters to lowercase
      const char = input[i].toLowerCase();
//now it needs to check if the lookUp includes any actual letter at each index
      if (lookUp.includes(char)) {
//create variables for both the index of the letters inside of the lookUp and the shifted version by taking the index inside of lookUp and adding shift amount
        const letterIndex = lookUp.indexOf(char);
        let shiftedIndex = letterIndex + shift;
//now if the shiftedIndex is larger than 25 letters it should add -26 to loop back
        if (shiftedIndex > 25) {
          shiftedIndex += -26;
        }
//and the opposite, if the shifted index is less than it should add 26
        if (shiftedIndex < 0) {
          shiftedIndex += 26;
        }
//create a variable to hold onto the shifted letter that equals the letter at the lookup[shiftedIndexAmount] and add that letter to the result then use else to add the special character to the result
        const shiftedLetter = lookUp[shiftedIndex];
        result += shiftedLetter;
      } else {
        result += char;
      }
    }
//return
    return result;
  }
  return {
    caesar,
  };
})();

module.exports = { caesar: caesarModule.caesar };
