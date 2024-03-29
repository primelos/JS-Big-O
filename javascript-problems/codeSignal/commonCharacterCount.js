// Given two strings, find the number of common characters between them.

// Example

// For s1 = "aabcc" and s2 = "adcaa", the output should be
// commonCharacterCount(s1, s2) = 3.

// Strings have 3 common characters - 2 "a"s and 1 "c".

// Input/Output

// [execution time limit] 4 seconds (js)

// [input] string s1

// A string consisting of lowercase English letters.

// Guaranteed constraints:
// 1 ≤ s1.length < 15.

// [input] string s2

// A string consisting of lowercase English letters.

// Guaranteed constraints:
// 1 ≤ s2.length < 15.

// [output] integer

// [JavaScript] Syntax Tips

// // Prints help message to the console
// // Returns a string
// function helloWorld(name) {
//     console.log("This prints to the console when you Run Tests");
//     return "Hello, " + name;
// }

function commonCharacterCount(s1, s2) {
  s1Sorted = s1.split("");
  s2Sorted = s2.split("");
  let max = Math.max(s1.length, s2.length);
  let long = s1Sorted.length >= s2Sorted.length ? s1Sorted : s2Sorted;
  let short = s2Sorted.length <= s1Sorted.length ? s2Sorted : s1Sorted;
  let count = 0;
  for (let i = 0; i < max; i++) {
    if (short.includes(long[i])) {
      let index = short.indexOf(long[i]);
      short.splice(index, 1);
      count++;
    }
  }
  return count;
}
