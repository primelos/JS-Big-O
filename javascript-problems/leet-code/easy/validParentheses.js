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

console.log(letterCombinations("236"));

// recursive solution
// var letterCombinations = function (digits) {
//   if (digits.length === 0) {
//     return [];
//   }
//   const digitMap = {
//     2: ["a", "b", "c"],
//     3: ["d", "e", "f"],
//     4: ["g", "h", "i"],
//     5: ["j", "k", "l"],
//     6: ["m", "n", "o"],
//     7: ["p", "q", "r", "s"],
//     8: ["t", "u", "v"],
//     9: ["w", "x", "y", "z"],
//   };
//   if (digits.length > 1) {
//     const firstDigit = digits.slice(0, 1);
//     const otherDigits = digits.slice(1);
//     console.log(otherDigits);

//     const otherLetterCombinations = letterCombinations(otherDigits);
//     const firstDigitletters = digitMap[firstDigit];
//     let resultArr = [];
//     firstDigitletters.forEach((item1) => {
//       otherLetterCombinations.forEach((item2) => {
//         resultArr.push(item1 + item2);
//       });
//     });
//     return resultArr;
//   } else {
//     return digitMap[digits];
//   }
// };

// console.log(letterCombinations("273"));
