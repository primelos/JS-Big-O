function commonCharacterCount(s1, s2) {
  s1Sorted = s1.split("");
  s2Sorted = s2.split("");
  let max = Math.max(s1.length, s2.length);
  let long = s1Sorted.length >= s2Sorted.length ? s1Sorted : s2Sorted;
  let short = s2Sorted.length <= s1Sorted.length ? s2Sorted : s1Sorted;
  let count = 0;
  let obj = {};
  let obj2 = {};
  // console.log( long, short)
  for (let i = 0; i < max; i++) {
    if (obj[s1Sorted[i]] === undefined) {
      obj[s1Sorted[i]] = 1;
    } else {
      obj[s1Sorted[i]]++;
    }
    if (obj2[s2Sorted[i]] === undefined) {
      obj2[s2Sorted[i]] = 1;
    } else {
      obj2[s2Sorted[i]]++;
    }
  }

  console.log(obj, obj2);
  return count;
}
