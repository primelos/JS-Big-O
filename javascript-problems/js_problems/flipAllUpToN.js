/* Flip every chunk of n characters in a string, where n is any positive integer greater than 1.

Note that this is intentionally very similar to the previous problem.

Please focus on getting a working solution with the tools you know well.

Practice the interactive/collaborative interview style that's described in the documentation.

Example:
var input = 'a short example';
var output = flipEveryNChars(input, 5);
console.log(output); // --> ohs axe trelpma

Breaking this example down piece by piece:
'a sho' -> 'ohs a'
'rt ex' -> 'xe tr'
'ample' -> 'elpma'

-> 'ohs axe trelpma'
*/

// function flipEveryNChars
function flipEveryNChars(input, n) {
  let str = "";
  for (let i = 0; i < input.length; i += n) {
    str += input
      .slice(i, i + n)
      .split("")
      .reverse()
      .join("");
  }
  console.log(str);
  return str;
}
// assertEquals
function assertEquals(actual, expected, testName) {
  if (actual === expected) {
    console.log("passed");
  } else {
    console.log(`failed, ${testName}`);
  }
}
// test case
let input1 = "a short example";
let expect1 = "ohs axe trelpma";
let str1 = flipEveryNChars(input1, 5);
assertEquals(str1, expect1, "should equal expected result");
