// Write a function called "modulo".

// Given 2 numbers, "modulo" returns the remainder after dividing num1 by num2.

// It should behave as described in the canonical documentation (MDN) for the JavaScript remainder operator: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Arithmetic_Operators#Remainder_()

// Notes:

// Do NOT use the actual built-in modulo (aka "remainder") operator (%) in your implementation.
// 0 % ANYNUMBER = 0.
// ANYNUMBER % 0 = NaN.
// If either operand is NaN, then the result is NaN.
// Modulo always returns the sign of the first number, even if the remainder is 0.

function modulo(num1, num2) {
  // your code here
  if (num1 === 0) return 0;
  if (num2 === 0) return NaN;
  if (isNaN(num1) || isNaN(num2)) return NaN;

  let positive = true;
  if (num1 < 0) {
    positive = false;
  }

  num1 = Math.abs(num1);
  num2 = Math.abs(num2);

  while (num1 >= num2) {
    num1 = num1 - num2;
  }

  if (positive) {
    return num1;
  } else {
    return -num1;
  }
}
var output = modulo(25, 4);
console.log(output); // --> 1
