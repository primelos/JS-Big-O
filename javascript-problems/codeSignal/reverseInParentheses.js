// Write a function that reverses characters in (possibly nested) parentheses in the input string.

// Input strings will always be well-formed with matching ()s.

// Example

// For inputString = "(bar)", the output should be
// solution(inputString) = "rab";
// For inputString = "foo(bar)baz", the output should be
// solution(inputString) = "foorabbaz";
// For inputString = "foo(bar)baz(blim)", the output should be
// solution(inputString) = "foorabbazmilb";
// For inputString = "foo(bar(baz))blim", the output should be
// solution(inputString) = "foobazrabblim".
// Because "foo(bar(baz))blim" becomes "foo(barzab)blim" and then "foobazrabblim".
// Input/Output

// [execution time limit] 4 seconds (js)

// [input] string inputString

// A string consisting of lowercase English letters and the characters ( and ). It is guaranteed that all parentheses in inputString form a regular bracket sequence.

// Guaranteed constraints:
// 0 ≤ inputString.length ≤ 50.

function solution(s) {
  if (s.includes("(")) {
    return solution(reverseOnce(s));
  } else {
    return s;
  }
}

function reverseOnce(s) {
  var regexp = /\(([^()]*)\)/i;
  var subStr = regexp.exec(s)[1];
  console.log(subStr);
  subStr = subStr.split("").reverse().join("");
  return s.replace(regexp, subStr);
}

// Input:
// inputString: "(bar)"
// Output:
// "rab"
// Expected Output:
// "rab"
