// Given a string, find out if its characters can be rearranged to form a palindrome.

// Example

// For inputString = "aabb", the output should be
// solution(inputString) = true.

// We can rearrange "aabb" to make "abba", which is a palindrome.

// Input/Output

// [execution time limit] 4 seconds (js)

// [input] string inputString

// A string consisting of lowercase English letters.

// Guaranteed constraints:
// 1 ≤ inputString.length ≤ 50.

// [output] boolean

// true if the characters of the inputString can be rearranged to form a palindrome, false otherwise.

function solution(inputString) {
  let count = 0;
  let counter = 0;
  let letterCount = {};
  for (let i = 0; i < inputString.length; i += 1) {
    if (letterCount[inputString[i]] === undefined) {
      letterCount[inputString[i]] = 1;
    } else {
      letterCount[inputString[i]] += 1;
    }
  }
  for (let even in letterCount) {
    if (letterCount[even] === 1) {
      count += 1;
    }
    if (letterCount[even] % 2 !== 0) {
      counter += 1;
    }
  }
  return counter > 1 || count > 1 ? false : true;
}
