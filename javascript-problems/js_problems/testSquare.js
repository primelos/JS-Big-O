// FUNCTION DEFINITION(S)
function square(n) {
  let posNeg = true;
  if (n < 0) posNeg = false;

  if (posNeg) {
    return n * n;
  } else {
    return -(n * n);
  }
}

// ASSERTION FUNCTION(S) TO BE USED
function assertEqual(actual, expected, name) {
  if (expected === actual) {
    console.log("passed");
  } else {
    console.log(`Failed ${name}, expected ${actual} to be ${expected} `);
  }
}
// TESTS CASES
let test1 = square(2);
assertEqual(test1, 4, "should square the number");

let test2 = square(3);
assertEqual(test2, 10, "should error 10");

let test3 = square(-9);
assertEqual(test3, -81, "should square number but keep negative sign");
