function boundedRatio(a, l, r) {
  let result = [];
  for (let i = 0; i < a.length; i++) {
    let x = 0;
    let b = i + 1;
    let value = a[i];
    while (true) {
      if (b * x === value) {
        if (l <= x && x <= r) {
          result.push(true);
          break;
        } else {
          result.push(false);
          break;
        }
      } else if (b * x > value) {
        result.push(false);
        break;
      }
      x++;
    }
  }
  console.log(result);
  //                    [ false, false, true, false, true]
  return result;
}

let a = [8, 5, 6, 16, 5];
console.log(boundedRatio(a, 1, 3));
