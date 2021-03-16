var romanToInt = function(s) {
  const hash = {I: 1, V: 5, X: 10, L: 50, C: 100, D: 500, M: 1000}
  let sum = 0

  const reverseArr = s.split('').reverse()
  let level = 0
  reverseArr.forEach(item => {
    const newLevel = hash[item]
    if(newLevel >= level) {
      sum += newLevel
      level = newLevel
    } else {
      sum -= newLevel
    }
  })
  return sum

}

console.log(romanToInt('XIV'))