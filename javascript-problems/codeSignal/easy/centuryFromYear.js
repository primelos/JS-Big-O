function centuryFromYear(year) {
  let myArr = String(year)
    .split("")
    .map((num) => {
      return Number(num);
    });

  if (myArr.length === 3) {
    if (myArr[1] === 0 && myArr[2] === 0) {
      console.log("hit");
      return Number(myArr.splice(0, 1).join(""));
    }
  }
  if (myArr[2] === 0 && myArr[3] === 0) {
    return Number(myArr.splice(0, 2).join(""));
  }

  return Math.ceil((year + 1) / 100) * 1;
}


//  OR 

function centuryFromYear(year) {
  return Math.ceil(year / 100);
}