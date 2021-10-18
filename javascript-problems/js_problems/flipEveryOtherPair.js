// Flip every pair of characters in a string.

// Example:
// var input = 'check out how interesting this problem is, it\'s insanely interesting!';
// var output = flipPairs(input);
// console.log(output); // --> hcce kuo toh wnietertsni ghtsip orlbmei ,si 't sniasenyli tnreseitgn!

// function reverse pair
function reversePair(string) {
  let newStr = "";
  let j = 1;
  for (let i = 0; i < string.length; i += 2) {
    if (string[j] === undefined) {
      newStr += string[i];
    } else {
      newStr += string[j] + string[i];
      j += 2;
    }
  }
  console.log(newStr);
  return newStr;
}

// assertion test
function assertString(actual, expected, testName) {
  if (actual === expected) {
    console.log("passed");
  } else {
    console.log(`failed, ${testName}`);
    console.log(expected);
  }
}
// Test Cases

console.log();
var input =
  "check out how interesting this problem is, it's insanely interesting!";
let reverseOne = reversePair(input);
let expected =
  "hcce kuo toh wnietertsni ghtsip orlbmei ,si 't sniasenyli tnreseitgn!";
// hcce kuo toh wnietertsni ghtsip orlbmei ,si 't sniasenyli tnreseitgn!
assertString(
  reverseOne,
  expected,
  "should reverse every other pair in string input"
);
