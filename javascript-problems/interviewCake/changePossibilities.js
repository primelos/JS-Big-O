function changePossibilities(amountLeft, denominations) {
  // Calculate the number of ways to make change
  // console.log(amountLeft);
  // if (amountLeft === 0) return 1;

  const waysOfDoingNcents = new Array(amountLeft + 1).fill(0);
  console.log(waysOfDoingNcents);
  waysOfDoingNcents[0] = 1;

  denominations.forEach((coin) => {
    // console.log(coin);
    for (let higherAmount = coin; higherAmount <= amountLeft; higherAmount++) {
      const higherAmountRemainder = higherAmount - coin;
      waysOfDoingNcents[higherAmount] +=
        waysOfDoingNcents[higherAmountRemainder];
      console.log(waysOfDoingNcents);
    }
  });

  return waysOfDoingNcents[amountLeft];
}

console.log(changePossibilities(5, [1, 3]));
