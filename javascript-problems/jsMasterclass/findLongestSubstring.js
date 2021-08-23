function findLongestSubstring(str) {
  let longest = 0;
  let seen = {};
  let start = 0;

  for (let i = 0; i < str.length; i++) {
    let char = str[i];
    console.log(char);
    console.log(seen[char]);
    if (seen[char]) {
      start = Math.max(start, seen[char]);
      console.log(start);
    }
    console.log(longest);
    longest = Math.max(longest, i - start + 1);
    seen[char] = i + 1;
    console.log(seen[char]);
  }
  return longest;
}

// console.log(findLongestSubstring("rithmschool"));
console.log(findLongestSubstring("thyabewih"));
