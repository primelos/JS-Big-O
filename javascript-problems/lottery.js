function lottery() {
  let lotteryNums = [];
  let megaNumber = [];

  while (lotteryNums.length < 5) {
    let lotNum = Math.floor(Math.random() * 1000);
    if (lotNum > 0 && lotNum <= 47 && !lotteryNums.includes(lotNum)) {
      lotteryNums.push(lotNum);
    }
  }
  while (megaNumber.length < 1) {
    let mega = Math.floor(Math.random() * 1000);
    if (mega > 0 && mega <= 27) {
      megaNumber.push(mega);
    }
  }
  return { lotteryNums, megaNumber };
}

console.log(lottery());
