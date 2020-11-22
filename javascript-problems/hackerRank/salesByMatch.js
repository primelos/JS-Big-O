// Sample Input

// 9
// 10 20 20 10 10 30 50 10 20
// Sample Output

// 3


function sockMerchant(n, ar) {
  let hash = {};
  let count = 0;
  for (let i = 0; i < n; i++) {
    if (!hash.hasOwnProperty(ar[i])) {
      hash[ar[i]] = 1;
    } else {
      hash[ar[i]] += 1;
      if (hash[ar[i]] % 2 === 0) {
        count++;
      }
    }
  }
  return count;
}
