// Given a rectangular matrix of characters, add a border of asterisks(*) to it.

// Example

// For

// picture = ["abc",
//            "ded"]
// the output should be

// solution(picture) = ["*****",
//                       "*abc*",
//                       "*ded*",
//                       "*****"]
// Input/Output

// [execution time limit] 4 seconds (js)

// [input] array.string picture

// A non-empty array of non-empty equal-length strings.

// Guaranteed constraints:
// 1 ≤ picture.length ≤ 100,
// 1 ≤ picture[i].length ≤ 100.

function solution(picture) {
  let addStar = picture.map((el) => "*" + el + "*");
  let temp = "";
  temp = temp.padStart(addStar[0].length, "*");
  addStar.unshift(temp);
  addStar.push(temp);
  return addStar;
}

// clever solution
function solution(picture) {
  var width = picture[0].length + 2;
  return [
    "*".repeat(width),
    ...picture.map((line) => `*${line}*`),
    "*".repeat(width),
  ];
}
