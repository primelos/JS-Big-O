// Ticket numbers usually consist of an even number of digits. A ticket number is considered lucky if the sum of the first half of the digits is equal to the sum of the second half.

// Given a ticket number n, determine if it's lucky or not.

// Example

// For n = 1230, the output should be
// isLucky(n) = true;
// For n = 239017, the output should be
// isLucky(n) = false.
// Input/Output

// [execution time limit] 4 seconds (js)

// [input] integer n

// A ticket number represented as a positive integer with an even number of digits.

// Guaranteed constraints:
// 10 ≤ n < 106.

// [output] boolean

// true if n is a lucky ticket number, false otherwise.

function isLucky(n) {
  let len = String(n).length;
  let left = String(n)
    .split("")
    .slice(0, len / 2)
    .map((n) => Number(n))
    .reduce((a, b) => a + b, 0);
  let right = String(n)
    .split("")
    .slice(len / 2)
    .map((n) => Number(n))
    .reduce((a, b) => a + b, 0);
  return left === right;
}
