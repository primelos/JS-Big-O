/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function (s) {
  if (s.length < 1 || s === null) return s;
  let longest = "";
  for (let i = 0; i < s.length; i++) {
    let odd = expandFromCenter(s, i, i);
    let even = expandFromCenter(s, i - 1, i);
    if (odd.length > longest.length) {
      longest = odd;
    }
    if (even.length > longest.length) {
      longest = even;
    }
  }
  return longest;
};
function expandFromCenter(s, left, right) {
  let i = 0;
  while (s[left - i] && s[left - i] === s[right + i]) {
    i++;
  }
  i--;
  
  return s.slice(left - i, right + i + 1);
}

console.log(longestPalindrome('rabbaa'))
// should find 'abba' longest substring
console.log(longestPalindrome("rbaabad"));
// should find 'baab' longest substring
