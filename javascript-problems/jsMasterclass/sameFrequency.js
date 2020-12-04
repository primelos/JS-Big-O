function sameFrequency(a, b) {
  let newA = a.toString().split("");
  let newB = b.toString().split("");
  if (newA.length !== newB.length) return false;
  // console.log(newA)

  for (let i = 0; i < newA.length; i++) {
    if (!newA.includes(newB[i])) {
      return false;
    }
  }
  return true;
}

sameFrequency(182, 281);
freqSame(34, 14);
freqSame(22, 222);