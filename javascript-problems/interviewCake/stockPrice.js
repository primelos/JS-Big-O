// GREEDY ALGORITHM
// Write an efficient function that takes stockPrices and returns the best profit I could have made from one purchase and one sale of one share of Apple stock yesterday.

// const stockPrices = [10, 7, 5, 8, 11, 9];

// getMaxProfit(stockPrices);
// Returns 6 (buying for $5 and selling for $11)

function getMaxProfit(stockPrices) {
  // Calculate the max profit
  console.log(stockPrices);
  if(stockPrices.length < 2){
      throw new Error('You need 2 or more values')
    }
  let minPrice = stockPrices[0];
  let maxProfit = stockPrices[1] - stockPrices[0]


  for (let i = 1; i < stockPrices.length; i++) {
      
    const currentPrice = stockPrices[i];
    console.log(currentPrice);
    
    const potentialProfit = currentPrice - minPrice;
    console.log(potentialProfit)

    maxProfit = Math.max(maxProfit, potentialProfit);
    
    minPrice = Math.min(minPrice, currentPrice);
    console.log(minPrice);
    
  }
  return maxProfit;
}



// console.log(getMaxProfit([10, 7, 5, 8, 11, 9]));
console.log(getMaxProfit([10, 7, 5, 3, 2, 1]));