var isPalindrome = function (x) {
  var arr = x.toString(10).split("").reverse().join("");
  let newArr = x.toString(10).split("").join("");
  if (arr === newArr) {
    return true;
  } else {
    return false;
  }
};


console.log(isPalindrome(121));

// This solution accounts for numbers or strings to be checked if palindrome