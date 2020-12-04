function areThereDuplicates(...args) {
  let hash = {};
  for (let i of args) {
    hash[i] = hash[i] + 1 || 1;
    if (hash[i] === 2) return true;
  }
  return false; // good luck. (supply any arguments you deem necessary.)
}



console.log(areThereDuplicates(1, 2, 3));
console.log(areThereDuplicates(1, 2, 2));
console.log(areThereDuplicates("a", "b", "c", "a"));