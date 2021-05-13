function findRepeat(numbers) {
  // Find a number that appears more than once
  let dup = new Map();

  for (let i = 0; i < numbers.length; i++) {
    if (dup.has(numbers[i])) {
      let count = dup.get(numbers[i]) + 1;
      dup.set(numbers[i], count);
    } else {
      dup.set(numbers[i], 1);
    }
  }
  for (let double of dup) {
    // console.log(double)
    if (double[1] >= 2) {
      return double[0];
    }
  }
}

console.log(findRepeat([8,3,6,1,7,2,7,4])); 
//returns 7