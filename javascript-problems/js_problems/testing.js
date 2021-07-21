function minMove(arr) {
  let temp = 0;
  let temp2 = 0;
  let counter = 0;
  let nextMove = 1;
  let counter0 = 0;
  let nextMove0 = 0;
  let starter = arr[0];

  for (let i = 1; i < arr.length; i++) {
    if (arr[i] === starter) {
      temp = i - nextMove;
      if (temp > 0) {
        counter = counter + temp;
        nextMove++;
      } else {
        nextMove = i + 1;
      }
    } else {
      temp2 = i - nextMove0;
      if (temp2 > 0) {
        counter0 = counter0 + temp2;
        nextMove0++;
      }
    }
  }
  console.log(counter, counter0);
  return Math.min(counter0, counter);
}

console.log(minMove([1, 1, 1, 1, 0, 0, 0, 0]));
