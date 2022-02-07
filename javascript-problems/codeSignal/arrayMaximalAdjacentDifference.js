// Given an array of integers, find the maximal absolute difference between any two of its adjacent elements.

// Example

// For inputArray = [2, 4, 1, 0], the output should be
// solution(inputArray) = 3.

// Input/Output

// [execution time limit] 4 seconds (js)

// [input] array.integer inputArray

// Guaranteed constraints:
// 3 ≤ inputArray.length ≤ 10,
// -15 ≤ inputArray[i] ≤ 15.

// [output] integer

function solution(inputArray) {
  let maximal = 0;
  for (let i = 0; i < inputArray.length - 1; i += 1) {
    let spaceBetween = Math.abs(inputArray[i] - inputArray[i + 1]);
    maximal = Math.max(maximal, spaceBetween);
  }
  return maximal;
}
