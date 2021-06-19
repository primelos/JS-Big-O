function getMaxProfit(stockPrices) {
  if (stockPrices.length < 2) {
    throw new Error("input incorrect");
  }
  let minPrice = stockPrices[0];
  let maxProfit = stockPrices[1] - stockPrices[0];

  for (let i = 1; i < stockPrices.length; i++) {
    const currentPrice = stockPrices[i];
    const potentialProfit = currentPrice - minPrice;
    maxProfit = Math.max(maxProfit, potentialProfit);
    minPrice = Math.min(minPrice, currentPrice);
  }
  return maxProfit;
}

// tests

const stockPrices = [10, 7, 5, 8, 11, 9];
console.log(getMaxProfit(stockPrices));

let desc = "price goes up then down";
let actual = getMaxProfit([1, 5, 3, 2]);
let expected = 4;
assertEqual(actual, expected, desc);

desc = "error with empty prices";
const onePrice = () => getMaxProfit([1]);
assertThrowsError(onePrice, desc);

function assertEqual(a, b, desc) {
  if (a === b) {
    console.log(`${desc} ... PASS`);
  } else {
    console.log(`${desc} ... FAIL: ${a} != ${b}`);
  }
}

function assertThrowsError(func, desc) {
  try {
    func();
    console.log(`${desc} ... FAIL`);
  } catch (e) {
    console.log(`${desc} ... PASS`);
  }
}
