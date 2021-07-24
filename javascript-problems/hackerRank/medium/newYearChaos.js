// It is New Year's Day and people are in line for the Wonderland rollercoaster ride. Each person wears a sticker indicating their initial position in the queue from  to . Any person can bribe the person directly in front of them to swap positions, but they still wear their original sticker. One person can bribe at most two others.

// Determine the minimum number of bribes that took place to get to a given queue order. Print the number of bribes, or, if anyone has bribed more than two people, print Too chaotic.

// Sample Input

// STDIN       Function
// -----       --------
// 2           t = 2
// 5           n = 5
// 2 1 5 3 4   q = [2, 1, 5, 3, 4]
// 5           n = 5
// 2 5 1 3 4   q = [2, 5, 1, 3, 4]
// Sample Output

// 3
// Too chaotic

input;
// 8
// 5 1 2 3 7 8 6 4
// 8
// 1 2 5 3 7 8 6 4
output;
// Too chaotic
// 7

// O(nlogn)
function minimumBribes(q) {
  // Write your code here
  const toChaotic = "Too chaotic";
  let count = 0;
  for (let currentPos = 0; currentPos < q.length; currentPos++) {
    const originalPositions = q[currentPos] - 1;

    const diff = originalPositions - currentPos;
    if (diff > 2) {
      return console.log(toChaotic);
    }
    if (diff <= 0) {
      for (let i = Math.max(0, originalPositions - 1); i < currentPos; i++) {
        const startPosOfForwardPerson = q[i] - 1;
        if (startPosOfForwardPerson > originalPositions) {
          count++;
        }
      }
    }
  }
  console.log(count);
}

// O(n)
function minimumBribes(q) {
  let swaps = 0;
  let min = q.length;
  for (var i = q.length - 1; i >= 0; i--) {
    if (q[i] - i > 3) {
      return `Too chaotic`;
    }
    if (q[i] > i + 1) {
      swaps += q[i] - (i + 1);
    } else {
      if (min > q[i]) {
        min = q[i];
      } else if (q[i] != min) {
        swaps++;
      }
    }
  }

  return swaps;
}
