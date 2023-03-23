// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const polybiusModule = (function () {
    // you can add any code you want within this function scope
  /*create object variables that will be for enconding letters as keys and numbers as values and
   create object variable for decode with numbers as keys and letters as values
  */
  const decodeKeys = {11: "a", 21: "b", 31: "c", 41: "d", 51: "e", 12: "f", 22: "g", 32: "h", 42: 'i/j', 52: "k", 13: "l", 23: "m", 33: "n", 43: "o", 53: "p", 14: "q", 24: "r", 34: "s", 44: "t", 54: "u", 15: "v", 25: "w", 35: "x", 45: "y", 55: "z",}
  const encodeKeys = {a: 11, b: 21, c: 31, d: 41, e: 51, f: 12, g: 22, h: 32, i: 42, j: 42, k: 52, l: 13, m: 23, n: 33, o: 43, p: 53, q: 14, r: 24, s: 34, t: 44, u: 54, v: 15, w: 25, x: 35, y: 45, z: 55,}
    
    function polybius(input, encode = true) {
//turn input to lowercase to ignore caps
      input = input.toLowerCase();
// create an open variable for split strings
      let splitString;
//created a let veriable to access the encodekeys and change the value later to decodekeys
      let key = encodeKeys;
  
//check if encode is true and if so then make splitstring equal the input.split to turn splitString into an array of the split
      if(encode) {
        splitString = input.split("");
    } else {
//else use the decode key to do the same
        key = decodeKeys;
        splitString = input.split(" ");
//check if the new splitstring is odd by using reduce and the modulus remainder and if its odd then return false
        const isOdd = splitString.reduce((acc, element) => acc + element.length, 0) % 2;
        if(isOdd) {
          return false;
        }
//otherwise use .map on the splitString and seperate each section
        splitString = splitString.map(section => {
//then split each section into their own arrays seperating by commas in each array then reduce each split section and seperate by char,idx,and whole value
          return section.split("").reduce((acc, char, idx, whole) => {      
//check for spaces and push them into the accumulator
            if(char === " ") {
              acc.push(" ");
//check only the even index positions
            } else if(!(idx % 2)) {
//and take the char at each even idx position and add or (concat using the + operater since its a string) the char at next idx position.
              acc.push(char + whole[idx + 1]);
            }
//return the acc
            return acc;
          }, [])
//use .reduce to take the value of the previous function as an acc and take the code array from the reduce and concat them together also adding back any spaces between sections to get a final array filled with decodable strings.
        }).reduce((mapArray, codeArray) => mapArray.concat(" ",codeArray)); 
      }
//return the splitstring thats been transformed and map it to have char match the proper coding key or a space and join all the elements together
      return splitString.map(char => key[char] || " ").join("");
    }
    return {
      polybius,
    };
  })();



module.exports = { polybius: polybiusModule.polybius };
