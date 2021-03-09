// 14. Longest Common Prefix
// Easy

// 3796

// 2149

// Add to List

// Share
// Write a function to find the longest common prefix string amongst an array of strings.

// If there is no common prefix, return an empty string "".

 

// Example 1:

// Input: strs = ["flower","flow","flight"]
// Output: "fl"
// Example 2:

// Input: strs = ["dog","racecar","car"]
// Output: ""
// Explanation: There is no common prefix among the input strings.
 
// var longestCommonPrefix = function(strs) {
    // let newSet = new Set();
    // let hash = {};
    // let arr = [];
    // let j = 0;
    // let k = 1;
    // let count = 0;
    // for (let i = 0; i < strs.length; i++) {
    //   console.log("hit");
    //   let temp = strs[i].length;
    //   while (temp + 1 > 0) {
    //     // hash[count] = (strs[i].slice(0, k))
    //     arr.push(strs[i].slice(0, k));
    //     count++;
    //     k++;
    //     temp--;
    //     j++;
    //   }
    //   j = 0;
    //   k = 1;
    // }
    // console.log(arr);
// }


var longestCommonPrefix = function (strs) {
  if (!strs[0]) {
    return "";
  }
  var preprefix = "",
      prefix = "";

  for (var index = 0; index < strs[0].length; index++) {
    console.log(strs[0][index]);
    prefix += strs[0][index];
    for (var i = 0; i < strs.length; i++) {
      console.log(strs[i], prefix);
      if (!strs[i].startsWith(prefix)) {
        return preprefix;
      }
    }
    preprefix = prefix;
  }
  return prefix;
};

console.log(longestCommonPrefix(["flower", "flow", "flight"]));