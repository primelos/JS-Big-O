function renderInventory(inventory) {
  let designerAvgCost = {};
  designerAvgCost["designers"] = [];
  for (let i = 0; i < inventory.length; i++) {
    let inventoryLine = "";
    inventoryLine = inventory[i].name;
    designerAvgCost["designers"].push(
      helper(inventoryLine, inventory[i].shoes)
    );
  }
  return designerAvgCost;
}

//Create helper functions if needed
function helper(title, shoes) {
  let line = {};
  let shoeAvg = 0;
  for (let j = 0; j < shoes.length; j++) {
    shoeAvg += shoes[j].price;
  }
  shoeAvg = shoeAvg / shoes.length;
  line["name"] = title;
  line["averagePrice"] = shoeAvg;
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
  if (JSON.stringify(actual) === JSON.stringify(expected)) {
    console.log("passed");
  } else {
    console.log(`Failed, ${testName}`);
  }
}

let callOne = renderInventory(currentInventory);
console.log(callOne);
let testExpected = {
  designers: [
    {
      name: "Brunello Cucinelli",
      averagePrice: 1025,
    },
    {
      name: "Gucci",
      averagePrice: 850,
    },
  ],
};
assertString(callOne, testExpected, "Objects should mirror each other");
console.log(testExpected);
