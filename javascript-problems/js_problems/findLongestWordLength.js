function findLongestWordLength(str) {
  let maxWord = 0;
  let newArr = str.split(" ");
  for (let i = 0; i < newArr.length; i++) {
    let check = String(newArr[i]);
    maxWord = Math.max(check.length, maxWord);
  }
  return maxWord;
}

console.log(
  findLongestWordLength("The quick brown fox jumped over the lazy dog")
);
