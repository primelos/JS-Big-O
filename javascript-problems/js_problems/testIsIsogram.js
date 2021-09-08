// Skeleton

// FUNCTION DEFINITION(S)
function isIsogram(text) {
  // add each char to a set
  if (text === "") return true;

  let mySet = new Set();
  for (let i = 0; i < text.length; i++) {
    mySet.add(text[i].toLowerCase());
  }
  // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Set
  // note: a set drops dup values
  // thus, to see if all the chars were unique,
  // check length of text and the size of the set
  if (mySet.size === text.length) {
    return true;
  } else {
    return false;
  }
}

// ASSERTION FUNCTION(S) TO BE USED
function testSize(test, set) {
  if (test === set) {
    return true;
  } else {
    return false;
  }
}
function assertSize(actual, expected, testName) {
  if (testSize(actual, expected) === true) {
    console.log("passed");
  } else {
    console.log(`Failed ${testName}`);
  }
}
// TESTS CASES

let test1 = "cArlOs";
let isogramCall = isIsogram(test1);
console.log(isogramCall);

assertSize(isogramCall, true, "Should return true with mixed case ");

let test2 = "carlos";
let isogramCall2 = isIsogram(test2);
console.log(isogramCall2);
assertSize(isogramCall2, true, "Should return true with lower case ");

let test3 = "Ccarlos";
let isogramCall3 = isIsogram(test3);
console.log(isogramCall3);
assertSize(
  isogramCall3,
  false,
  "Should return false with a non-isogram mixed case "
);

let test4 = "ccarlos";
let isogramCall4 = isIsogram(test4);
console.log(isogramCall4);
assertSize(
  isogramCall4,
  false,
  "Should return false with a non-isogram lower case "
);
