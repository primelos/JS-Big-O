// Given a string s, find the length of the longest substring without repeating characters.

 

// Example 1:

// Input: s = "abcabcbb"
// Output: 3
// Explanation: The answer is "abc", with the length of 3.
// Example 2:

// Input: s = "bbbbb"
// Output: 1
// Explanation: The answer is "b", with the length of 1.
// Example 3:

// Input: s = "pwwkew"
// Output: 3
// Explanation: The answer is "wke", with the length of 3.
// Notice that the answer must be a substring, "pwke" is a subsequence and not a substring.
// Example 4:

// Input: s = ""
// Output: 0
/**
 * @param {string} s
 * @return {number}
 */
// solution does not pass test case  space string ' '
var lengthOfLongestSubstring = function (s) {
  // console.log(s)
  if (s.length < 1) return "";
  let temp = 0;
  let hash = {};
  let temp3 = [];
  let temp4 = [];
  let newS = "";
  let longest = "";
  for (let i = 0; i < s.length; i++) {
    temp += 1;
    if (!(s[i] in hash)) {
      hash[s[i]] = s[i];
      console.log("hit");
      console.log(temp);
      console.log(hash);
    } else if (s[i] in hash && temp !== s.length - 1) {
      for (let i in hash) {
        temp3.push(i);
      }
      console.log(temp3);
      newS = temp3.join("");
      console.log("newS", newS);
      temp4.push(newS);
      longest = temp4.reduce(function (a, b) {
        return a.length > b.length ? a : b;
      });
      hash = {};
      hash[s[i]] = s[i];
      newS = "";
      temp3 = [];
      console.log("newSH", hash);
    }
  }
  // console.log('longest',longest)
  return longest.length;
};


// 
//  Very efficient solution **************
// function lengthOfLongestSubstring(s) {
//    let k = 0
//    let maxLength = 0
//    for(let i = 0; i < s.length; i++){
//        for(let j = k; j < i; j++){
//            if(s[i] === s[j]){
//              k = j + 1
//              break
//            }  
//        }
//        console.log('here', i, k, )
//        if(i - k + 1 > maxLength) {
//            maxLength = i - k + 1
//            // console.log('max', maxLength)
//        }
//    }
//     return maxLength
// };


//      Works easier to understand***********
// function lengthOfLongestSubstring(s) {
//    let hash = {},
//        currentMaxRange = 0,
//        lastRepIndex = 0,
//        i
//    for(i = 0; i < s.length; i++){
//        let currentChar = s[i]
//        if(typeof hash[currentChar] !== 'undefined'){
//            console.log('in')
//            currentMaxRange = Math.max(currentMaxRange, i - lastRepIndex)
//            lastRepIndex = Math.max(hash[currentChar], lastRepIndex)
//        }
       
//        hash[currentChar] = i + 1
//        console.log('out',hash)
//    }
//        return Math.max(currentMaxRange, i - lastRepIndex)
// };