// Note: This is a simple, albeit temporarily incorrect implementation of the standard Array method "every()":
// https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/Array/every

// FUNCTION DEFINITION(S)
function every(array, callbackFunction) {
  var doesEveryElementMatch = true;

  for (var i = 0; i < array.length; i++) {
    doesEveryElementMatch = callbackFunction(array[i]);
    if (!doesEveryElementMatch) {
      return doesEveryElementMatch;
    }
  }

  return doesEveryElementMatch;
}

// ASSERTION FUNCTION(S) TO BE USED
function assertEqual(actual, expected, message) {
  if (actual === expected) {
    console.log("passed");
  } else {
    console.log(`fail, ${message}`);
  }
}

// TESTS CASES
const array1 = [1, 30, 2, 29, 10, 13];
const array2 = [1, 204, 2, 29, 10, 13];
const isBelowThreshold = (currentValue) => currentValue < 40;

let testTrue = every(array1, isBelowThreshold);
assertEqual(testTrue, true, "should equal true array is under 40");

let testFalse = every(array2, isBelowThreshold);
assertEqual(testFalse, false, "expected false but got true");
