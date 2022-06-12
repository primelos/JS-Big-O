// Given a string containing digits from 2-9 inclusive, return all possible letter combinations that the number could represent. Return the answer in any order.

// A mapping of digit to letters (just like on the telephone buttons) is given below. Note that 1 does not map to any letters.

// Example 1:

// Input: digits = "23"
// Output: ["ad","ae","af","bd","be","bf","cd","ce","cf"]
// Example 2:

// Input: digits = ""
// Output: []
// Example 3:

// Input: digits = "2"
// Output: ["a","b","c"]

var letterCombinations = function (digits) {
  let phoneObj = {
    2: ["a", "b", "c"],
    3: ["d", "e", "f"],
    4: ["g", "h", "i"],
    5: ["j", "k", "l"],
    6: ["m", "n", "o"],
    7: ["p", "q", "r", "s"],
    8: ["t", "u", "v"],
    9: ["w", "x", "y", "z"],
  };
  if (digits.length === 0) return [];
  if (digits.length === 1) return phoneObj[digits];
  const numArray = digits.split("");
  let result = [];
  if (numArray.length === 2) {
    for (let i = 0; i < phoneObj[numArray[0]].length; i += 1) {
      for (let j = 0; j < phoneObj[numArray[1]].length; j += 1) {
        result.push(phoneObj[numArray[0]][i] + phoneObj[numArray[1]][j]);
      }
    }
  } else if (numArray.length === 3) {
    for (let i = 0; i < phoneObj[numArray[0]].length; i += 1) {
      for (let j = 0; j < phoneObj[numArray[1]].length; j += 1) {
        for (let k = 0; k < phoneObj[numArray[2]].length; k += 1) {
          result.push(
            phoneObj[numArray[0]][i] +
              phoneObj[numArray[1]][j] +
              phoneObj[numArray[2]][k]
          );
        }
      }
    }
  } else if (numArray.length === 4) {
    for (let i = 0; i < phoneObj[numArray[0]].length; i += 1) {
      for (let j = 0; j < phoneObj[numArray[1]].length; j += 1) {
        for (let k = 0; k < phoneObj[numArray[2]].length; k += 1) {
          for (let m = 0; m < phoneObj[numArray[3]].length; m += 1) {
            result.push(
              phoneObj[numArray[0]][i] +
                phoneObj[numArray[1]][j] +
                phoneObj[numArray[2]][k] +
                phoneObj[numArray[3]][m]
            );
          }
        }
      }
    }
  }

  return result;
};
