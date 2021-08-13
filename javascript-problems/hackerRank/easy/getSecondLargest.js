// from array return second largest value

// [1,2,3,4,5,6]
// returns 5

// [3,6,2,5,7,4,7]
// returns 6


function getSecondLargest(nums) {
  // Complete the function
  let num = nums.sort((a, b) => a - b);
  for (let i = nums.length - 1; i > 0; i--) {
    if (num[i] > num[i - 1]) {
      return num[i - 1];
    }
  }
}
