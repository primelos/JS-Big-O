// You have a string s. Your task is to count the number
// of ways of splitting s into three non empty parts
// a, b and c (s = a + b + c) in such a way that a+b, b+c and c+a are
// all different strings

function countTheWaysToSplit(s) {
  let counter = 0;
  console.log("hit");

  for (let i = 1; i <= s.length - 2; i++) {
    for (let j = i + 1; j <= s.length - 1; j++) {
      let ab = s.substring(0, j);
      console.log(ab)
      let bc = s.substring(i, s.length);
      console.log(bc)
      let ca = s.substring(j, s.length);
      console.log(ca)
      if (!(ab === bc) || bc === ca || ca === ab) {
        counter++;
      }
      // console.log(ab);
    }
  }
  return counter;
}

console.log(countTheWaysToSplit("xzxzx"));
console.log("hit");
