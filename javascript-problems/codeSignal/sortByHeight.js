// Some people are standing in a row in a park. There are trees between them which cannot be moved. Your task is to rearrange the people by their heights in a non-descending order without moving the trees. People can be very tall!

// Example

// For a = [-1, 150, 190, 170, -1, -1, 160, 180], the output should be
// sortByHeight(a) = [-1, 150, 160, 170, -1, -1, 180, 190].

// Input/Output

// [execution time limit] 4 seconds (js)

// [input] array.integer a

// If a[i] = -1, then the ith position is occupied by a tree. Otherwise a[i] is the height of a person standing in the ith position.

// Guaranteed constraints:
// 1 ≤ a.length ≤ 1000,
// -1 ≤ a[i] ≤ 1000.

// [output] array.integer

// Sorted array a with all the trees untouched.

// My code
function sortByHeight(a) {
  console.log("hi");
  let treeArr = [];
  for (let i = 0; i < a.length; i++) {
    if (a[i] === -1) {
      treeArr.push(i);
    }
  }
  let newA = a.filter((el) => el !== -1).sort((a, b) => a - b);
  for (let i = 0; i < treeArr.length; i++) {
    newA.splice(treeArr[i], 0, -1);
  }
  return newA;
}

// Other code
// function sortByHeight(a) {
//   let filtered = a.filter((val) => val !== -1).sort((a, b) => a - b);
//   return a.map((val) => (val === -1 ? -1 : filtered.shift()));
// }
console.log(sortByHeight([-1, 150, 190, 170, -1, -1, 160, 180]));
// Expected Output:[-1, 150, 160, 170, -1, -1, 180, 190]

function func(a) {
  if (a <= 0) {
    return 1;
  }
  if (a >= 14) {
    return 0;
  }
  if (a % 2 == 0) {
    return a;
  } else {
    return func(a - 1) + func(a - 2);
  }
}

console.log(func(7));
