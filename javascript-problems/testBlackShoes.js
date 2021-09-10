function listAllBlackShoes(inventory) {
  let shoeString = "";

  for (let i = 0; i < inventory.length; i++) {
    shoeString += helper(inventory[i].name, inventory[i].shoes);
  }
  return shoeString;
}

//Create helper functions if needed
function helper(name, shoes) {
  let line = "";
  for (let j = 0; j < shoes.length; j++) {
    if (shoes[j].name.includes("black")) {
      line += name + ", " + shoes[j].name + ", " + shoes[j].price + "\n";
    }
  }
  return line;
}

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
  if (actual === expected) {
    console.log("pass");
  } else {
    console.log(`Failed, ${testName}`);
  }
}

let blackOne = listAllBlackShoes(currentInventory);
console.log(blackOne);
let expectResult =
  "Brunello Cucinelli, tasselled black low-top lace-up, 1000\nGucci, black leather laced sneakers, 900\n";
assertString(blackOne, expectResult, "flat list should match expected");

// Brunello Cucinelli, tasselled black low-top lace-up, 1000
// Gucci, black leather laced sneakers, 900
