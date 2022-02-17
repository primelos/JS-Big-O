// Given n pairs of parentheses, write a function to generate all combinations of well-formed parentheses.

// Example 1:

// Input: n = 3
// Output: ["((()))","(()())","(())()","()(())","()()()"]
// Example 2:

// Input: n = 1
// Output: ["()"]

// Constraints:

// 1 <= n <= 8

/**
 * @param {number} n
 * @return {string[]}
 */
var generateParenthesis = function (n) {
  let pos = [];

  function tracking(count, left, right) {
    console.log("start");
    if (left == 0 && right == 0) {
      pos.push(count);
      console.log("1", count, pos, left, right);
    }

    if (left > 0) {
      console.log("2", count, pos, left - 1, right);
      tracking(count + "(", left - 1, right);
      console.log("hi");
    }
    if (right > left) {
      console.log("3", count, pos, left, right - 1);
      tracking(count + ")", left, right - 1);
    }
  }

  tracking("", n, n);
  console.log("out");
  return pos;
};
