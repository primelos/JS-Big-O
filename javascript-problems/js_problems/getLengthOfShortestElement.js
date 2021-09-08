function getLengthOfShortestElement(arr) {
  // your code here
  if (arr.length === 0) return 0;
  let endGame = Math.min(...arr.map(({ length }) => length));
  return endGame;
}

var output = getLengthOfShortestElement(["one", "two", "three"]);
console.log(output); // --> 3
