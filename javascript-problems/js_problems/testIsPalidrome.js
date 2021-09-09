// Skeleton

// FUNCTION DEFINITION(S)
function findLongestPalindrome(sentence) {
  // split sentence into words
  let splitSentence = sentence.split(" ");
  // iterate words and collect the palindromes
  let wordCheck = [];
  splitSentence.forEach((check) => {
    if (isPalindrome(check.toLowerCase()) === true) {
      wordCheck.push(check);
    }
  });
  // sort the list of palindromes by word length
  // return the largest item in the sorted list
  wordCheck.sort(sortAscendingByLength);
  return wordCheck.pop();
}

function reverseString(string) {
  let rev = string.split("").reverse().join("");
  return rev;
}

function isPalindrome(word) {
  // hint: you can detect palindromes by comparing a string to its reverse
  if (reverseString(word) === word) {
    return true;
  } else {
    return false;
  }
}

function sortAscendingByLength(a, b) {
  if (a.length > b.length) {
    return 1;
  } else if (a.length < b.length) {
    return -1;
  }
  return 0;
}

// ASSERTION FUNCTION(S) TO BE USED
function assertArray(actual, expected, testName) {
  if (actual === expected) {
    console.log("passed");
  } else {
    console.log(`Failed ${testName}`);
  }
}
// TESTS CASES

let palin = findLongestPalindrome("carraC crazt abba test a rogor");
assertArray(
  palin,
  "carraC",
  "should return longest palindrome case insenstive"
);

let palin2 = findLongestPalindrome("car crazt abba tsest a rogor");
assertArray(palin2, "rogor", "should return longest palindrome");
let palin3 = findLongestPalindrome("car crazt abba tsest a rogor");
assertArray(palin2, "rogor", "should return longest palindrome");
