function getLongestElement(arr) {
  // your code here
  if (arr.length === 0) return "";
  let endGame = arr.reduce((a, b) => (a.length >= b.length ? a : b));
  return endGame;
}

var output = getLongestElement(["one", "two", "three"]);
console.log(output); // --> 'three'
