function isSubsequence(s1, s2){

  let i = 0
  let j = 0
  let counter = 0
  while(s2[j]){
    if(s1[i] === s2[j]){
      counter++
      i++
      j++
    } else {
      j++
    }
  }
  if(counter === s1.length){
    return true
  } else {
    return false
  }
}


console.log(isSubsequence('hello', 'hello carlos')) // true
console.log(isSubsequence('sing', 'sting')) // true
console.log(isSubsequence('abc', 'abracadabra'))  // true
console.log(isSubsequence('abc', 'acb'))  // false