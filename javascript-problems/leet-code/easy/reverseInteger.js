
// Given a signed 32-bit integer x, return x with its digits reversed. If reversing x causes the value to go outside the signed 32-bit integer range [-231, 231 - 1], then return 0.

// Assume the environment does not allow you to store 64-bit integers (signed or unsigned).


// Example 1:

// Input: x = 123
// Output: 321
// Example 2:

// Input: x = -123
// Output: -321
// Example 3:

// Input: x = 120
// Output: 21
// Example 4:

// Input: x = 0
// Output: 0
 

// Constraints:

// -231 <= x <= 231 - 1

var reverse = function (x) {
  let rev = [...`${x}`];
  let a = 0;
  let b = "";
  if (rev[0] === "-") {
    b = rev.shift();
  }
  a = `${rev.reverse().join("")}`;
  if (a > 2 ** 31) {
    return 0;
  }
  return `${b}${a}`;
};


var reverse = function (x) {
  const sign = Math.sign(x);

  let rest = Math.abs(x);

  let reversed = 0;
  while (rest > 0) {
    // Gets the rightmost digit
    const rightmostDigit = rest % 10;

    // Moves the decimal to the left and floor cuts the right most digit off
    // This gets the next rightmost digit ready.
    rest = Math.floor(rest / 10);

    //Move the current digits to the left to make room for the rightmost digit.
    reversed *= 10;
    reversed += rightmostDigit;

    if (reversed > 2 ** 31) {
      return 0;
    }
  }
  return reversed * sign;
};
