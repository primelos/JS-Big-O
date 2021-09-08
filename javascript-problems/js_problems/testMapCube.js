// FUNCTION DEFINITION(S)
function map(array, callbackFunction) {
  var newArray = [];

  for (var i = 0; i < array.length; i++) {
    newArray.push(callbackFunction(array[i]));
  }
  console.log(newArray);
  return newArray;
}

function cubeAll(numbers) {
  return map(numbers, function (n) {
    return n * n * n;
  });
}

// ASSERTION FUNCTION(S) TO BE USED
function assertArraysEqual(actual, expected, message) {
  let same = true;
  for (let i = 0; i < actual.length; i++) {
    if (actual[i] !== expected[i]) {
      same = false;
      break;
    }
  }
  if (same) {
    console.log("pass");
  } else {
    console.log(`Fail, ${message}`);
  }
}
// TESTS CASES
function mapCallback(arg) {
  return arg + 1;
}

let testArr = [1, 2, 3];
let resultAddOne = [2, 3, 4];
let resultMapError = [11, 22, 33];
let addOne = map(testArr, mapCallback);
assertArraysEqual(addOne, resultAddOne, "should add one to array");
let addOneError = map(testArr, mapCallback);
assertArraysEqual(addOneError, resultMapError, "should not match");

let testCube = cubeAll(testArr);
let resultCubeAll = [1, 8, 27];
assertArraysEqual(testCube, resultCubeAll, "should cube everthing in array");
