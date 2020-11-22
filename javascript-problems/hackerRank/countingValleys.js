// Sample Input

// 8
// UDDDUDUU
// Sample Output

// 1
// Explanation

// If we represent _ as sea level, a step up as /, and a step down as \, the hike can be drawn as:

// _/\      _
//    \    /
//     \/\/
// The hiker enters and leaves one valley.

function countingValleys(steps, path) {
  // Write your code here
  console.log(steps, path);
  let count = 0;
  let level = 0;
  let hit = 0;
  for (let i = 0; i < steps; i++) {
    // console.log(path[i])
    if (path[i] === "U") {
      count++;
      if (count === level) {
        hit++;
      }
    } else if (path[i] === "D") {
      count--;
    }
  }
  return hit;
}
