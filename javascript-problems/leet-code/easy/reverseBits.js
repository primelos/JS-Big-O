var reverseBits = function (n) {
  // console.log(n)
  let arr = n.toString(2).split("");
  // console.log(arr)
  arr.unshift(...new Array(32 - arr.length).fill(0));
  // console.log('unshift', arr)
  // console.log('noParse',arr.reverse().join(''))
  // console.log('Parse',parseInt(arr.reverse().join(''), 2))
  return parseInt(arr.reverse().join(""), 2);
  return n
};

console.log(reverseBits(43261596));