// Ratiorg got statues of different sizes as a present from CodeMaster for his birthday, each statue having an non-negative integer size. Since he likes to make things perfect, he wants to arrange them from smallest to largest so that each statue will be bigger than the previous one exactly by 1. He may need some additional statues to be able to accomplish that. Help him figure out the minimum number of additional statues needed.

// Example

// For statues = [6, 2, 3, 8], the output should be
// makeArrayConsecutive2(statues) = 3.

// Ratiorg needs statues of sizes 4, 5 and 7.

// Effiecent solution
function makeArrayConsecutive2(statues) {
  return Math.max(...statues) - Math.min(...statues) + 1 - statues.length;
}

// fails on large inputs
function makeArrayConsecutive2(statues) {
  let newArr = [...statues].sort((a, b) => a - b);
  let count = 0;

  for (let i = 0; i <= statues.length; i++) {
    if (newArr[i] + 1 !== newArr[i + 1] && newArr[i + 1] !== undefined) {
      newArr.splice(i + 1, 0, newArr[i] + 1);
      count++;
    }
  }
  return count;
}

console.log(makeArrayConsecutive2(6, 2, 3, 8));
