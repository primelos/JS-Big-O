// You are given an array of integers. On each move you are allowed to increase exactly one of its element by one. Find the minimal number of moves required to obtain a strictly increasing sequence from the input.

// Example

// For inputArray = [1, 1, 1], the output should be
// solution(inputArray) = 3.

// Input/Output

// [execution time limit] 4 seconds (js)

// [input] array.integer inputArray

// Guaranteed constraints:
// 3 ≤ inputArray.length ≤ 105,
// -105 ≤ inputArray[i] ≤ 105.

// [output] integer

// The minimal number of moves needed to obtain a strictly increasing sequence from inputArray.
// It's guaranteed that for the given test cases the answer always fits signed 32-bit integer type.

function solution(inputArray) {
  let count = 0;
  let resultArr = [inputArray[0]];

  for (let i = 1; i < inputArray.length; i += 1) {
    if (resultArr[i - 1] < inputArray[i]) {
      resultArr.push(inputArray[i]);
    } else {
      resultArr.push(resultArr[i - 1] + 1);
    }
  }
  for (let j = 0; j < resultArr.length; j += 1) {
    if (inputArray[j] !== resultArr[j]) {
      count += Math.abs(inputArray[j] - resultArr[j]);
    }
  }
  return count;
  //     [-1000, 0, -2, 0]
  //     [-1000, 0,  1, 2]
  //     [    0, 0,  1, 2] = 3

  //   [2, 1, 10, 1]
  //   [2, 3, 10, 11]
  //   [0, 2,  0, 10] = 12
}
