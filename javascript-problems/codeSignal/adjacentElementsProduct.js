function adjacentElementsProduct(arr) {
  return Math.max(...arr.slice(1).map((x, i) => [x * arr[i]]));
}

// My solution
function adjacentElementsProduct(inputArray) {
  let result = -Infinity;
  let j = 1;
  for (let i = 0; i < inputArray.length; i++) {
    if (inputArray[j] !== undefined) {
      let sum = inputArray[i] * inputArray[j];
      result = Math.max(result, sum);
      j++;
    }
  }
  return result;
}
