function quickSort(nums) {
  // PIVOT STARTS FROM INDEX 0
  if (nums.length < 2) {
    // console.log('nums', nums)
    return nums;
  }
  let left = [];
  let right = [];
  let pivot = nums[0];
  console.log("p", pivot);
  for (let i = 1; i < nums.length; i++) {
    if (nums[i] > pivot) {
      right.push(nums[i]);
      // console.log('right',right)
    } else {
      left.push(nums[i]);
      // console.log('left ',left)
    }
  }
  console.log("hit", left, pivot, right);
  console.log("concat", left.concat(pivot, right));
  return quickSort(left).concat(pivot, quickSort(right));
}

quickSort([63, 95, 63, -26, 76, 19, 65, 8, -63, 26]);
