// create everything for this problem, functions, assertion function, and test cases
// call your function "generateLaceDetails", and let it take the inventory as its parameter
const findLaceStrings = (inventory) => {
  let brandArr = [];
  for (let i = 0; i < inventory.length; i++) {
    helper(brandArr, inventory[i].shoes);
  }
  return brandArr;
};

const helper = (line, shoes) => {
  for (let j = 0; j < shoes.length; j++) {
    let wordLine = {};
    console.log(shoes[j].name, shoes[j].name.indexOf("lace"));
    if (shoes[j].name.includes("lace")) {
      let check = shoes[j].name.split(" ");
      wordLine["nameWords"] = check;
      let index = 0;
      check.filter((w, i) => (String(w).includes("lace") ? (index = i) : ""));
      wordLine["targetWordIndex"] = index;
    }
    if (Object.keys(wordLine).length !== 0) {
      line.push(wordLine);
    }
  }
  return line;
};

var currentInventory = [
  {
    name: "Brunello Cucinelli",
    shoes: [
      { name: "tasselled black low-top lace-up", price: 1000 },
      { name: "tasselled green low-top lace-up", price: 1100 },
      { name: "plain beige suede moccasin", price: 950 },
      { name: "plain olive suede moccasin", price: 1050 },
    ],
  },
  {
    name: "Gucci",
    shoes: [
      { name: "red leather laced sneakers", price: 800 },
      { name: "black leather laced sneakers", price: 900 },
    ],
  },
];

function assertString(actual, expected, testName) {
  if (JSON.stringify(actual) === JSON.stringify(expected)) {
    console.log("pass");
  } else {
    console.log(`Failed, ${testName}`);
  }
}

let laceOne = findLaceStrings(currentInventory);
console.log("look", laceOne);

var expectedResult = [
  {
    nameWords: ["tasselled", "black", "low-top", "lace-up"],
    targetWordIndex: 3,
  },
  {
    nameWords: ["tasselled", "green", "low-top", "lace-up"],
    targetWordIndex: 3,
  },
  {
    nameWords: ["red", "leather", "laced", "sneakers"],
    targetWordIndex: 2,
  },
  {
    nameWords: ["black", "leather", "laced", "sneakers"],
    targetWordIndex: 2,
  },
];
assertString(laceOne, expectedResult, "flat list should match expected");
