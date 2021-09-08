// FUNCTION DEFINITION(S)

// USE THIS FUNCTION TO GENERATE A RANDOM NUMBER
function getRandomIntInclusive(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function decorateClassListWithAges(classList) {
  // creates an object for each string in the input array, with an age of 10 or 11
  // returns an array of these objects
  let arr = [];
  for (let i = 0; i < classList.length; i++) {
    let inObj = {};
    inObj.name = classList[i];
    let avgAge = getRandomIntInclusive(10, 11);
    inObj.age = avgAge;
    arr.push(inObj);
  }
  return arr;
}

// ASSERTION FUNCTION(S) TO BE USED

function assertWithinRange(low, high, actual) {
  if (low <= actual && high >= actual) {
    return true;
  } else {
    return false;
  }
}
function testDecorateStudentList(input, output) {
  for (let i = 0; i < input.length; i++) {
    if (input[i] !== output[i].name) {
      console.log(`Failed incorrect name at index ${i}`);
      return;
    }
    if (assertWithinRange(10, 11, input[i].age) === false) {
      console.log(`Failed incorrect age at index ${i}`);
      return;
    }
  }
  console.log("passed");
}

var classList = [
  "Joe",
  "Jack",
  "John",
  "Fred",
  "Frank",
  "Barry",
  "Larry",
  "Mary",
  "Harry",
  "Farrell",
  "Susan",
  "Monica",
  "Keira",
  "Caroline",
  "Harriet",
  "Erica",
  "Luann",
  "Cheryl",
  "Beth",
  "Rupa",
  "Linda",
  "Allison",
  "Nancy",
  "Dora",
];

let classListWithAges = decorateClassListWithAges(classList);
testDecorateStudentList(classList, classListWithAges);

// My Solution *_*_*_*_*_*_*_*_*_*_*_*_*_*_*_*_*_*_*_*_*_*_*_*_*_*_*_*_

// function assertArrObj(actual, expected, testName) {
//   let pass = true;
//   for (let i = 0; i < actual.length; i++) {
//     if (actual[i].age !== 10 && actual[i].age !== 11) {
//       console.log("hit");
//       pass = false;
//       break;
//     }
//   }
//   if (pass) {
//     console.log("passed");
//   } else {
//     console.log(`Fail ${testName} expected ${expected} `);
//   }
// }

//  // TESTS CASES

// let callOne = decorateClassListWithAges(classList);
// console.log(callOne);
// assertArrObj(callOne, true, "Objects age should be within 10 and 11");

// let callTwo = decorateClassListWithAges(classList)

let dataSample = [
  { name: "Joe", age: 11 },
  { name: "Jack", age: 10 },
  { name: "John", age: 20 },
  { name: "Fred", age: 10 },
  { name: "Frank", age: 10 },
  { name: "Barry", age: 11 },
  { name: "Larry", age: 11 },
  { name: "Mary", age: 11 },
  { name: "Harry", age: 10 },
  { name: "Farrell", age: 10 },
  { name: "Susan", age: 11 },
  { name: "Monica", age: 10 },
  { name: "Keira", age: 10 },
  { name: "Caroline", age: 11 },
  { name: "Harriet", age: 11 },
  { name: "Erica", age: 10 },
  { name: "Luann", age: 11 },
  { name: "Cheryl", age: 11 },
  { name: "Beth", age: 11 },
  { name: "Rupa", age: 10 },
  { name: "Linda", age: 11 },
  { name: "Allison", age: 10 },
  { name: "Nancy", age: 11 },
  { name: "Dora", age: 10 },
];
// assertArrObj(dataSample, true, "Objects age should be within 10 and 11");
