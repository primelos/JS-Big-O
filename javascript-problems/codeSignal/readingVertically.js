// you are given an array of strings arr. Your task is to construct a string from the
// words in arr. starting with the 0th character from each word in order
// as they appear in arr.

function readingVertically(arr) {
  let longestString = 0;
  for (let i = 0; i < arr.length; i++) {
    longestString = Math.max(longestString, arr[i].length);
  }
  let newStr = "";
  for (let i = 0; i < longestString; i++) {
    let j = 0;

    for (let k = 0; k < arr.length; k++) {
      console.log(arr.indexOf(arr[k]));
      if (arr[k][i] !== undefined) {
        newStr += arr[k][i];
      }
    }
  }
  return newStr;
}

console.log(readingVertically(["Daisy", "Rose", "Hyacinth", "Poppy"]));

// returns DRHPaoyoisapsecpyiynth
