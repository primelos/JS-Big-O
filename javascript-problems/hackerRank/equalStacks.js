function equalStacks(h1, h2, h3) {
  // Write your code here

  let s1 = h1.reduce((x, y) => x + y);
  let s2 = h2.reduce((x, y) => x + y);
  let s3 = h3.reduce((x, y) => x + y);
  let stackOne = [s1];
  let stackTwo = [s2];
  let stackThree = [s3];

  for (let i of h1) {
    stackOne.push((s1 -= i));
  }
  for (let i of h2) {
    stackTwo.push((s2 -= i));
  }
  for (let i of h3) {
    stackThree.push((s3 -= i));
  }

  for (let i of stackOne) {
    if (stackTwo.includes(i) && stackThree.includes(i)) {
      return i;
    }
  }
  return 0;
}
// Sample Input

// 5 3 4

// 3 2 1 1 1 = 8 - 3 = 5
// 4 3 2     = 9 - 4 = 5
// 1 1 4 1   = 7 - 1 - 1 = 5
// Sample Output

// 5