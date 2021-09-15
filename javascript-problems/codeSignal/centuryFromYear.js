// if you know math then
function centuryFromYear(year) {
  return Math.ceil(year / 100);
}

// if your not good with math then
function centuryFromYear(year) {
  let yearNum = String(year).split("");

  if (yearNum.length === 1) {
    if (yearNum[1] === 0) {
      return yearNum[0];
    } else {
      return 1;
    }
  }
  if (yearNum.length === 2) {
    if (yearNum[1] === 0) {
      return yearNum[0];
    } else {
      return 1;
    }
  }
  if (yearNum.length === 3) {
    console.log(yearNum[0]);
    if (Number(yearNum[1]) === 0 && Number(yearNum[2]) === 0) {
      return Number(yearNum[0]);
    } else {
      return Number(String(yearNum[0])) + 1;
    }
  }
  if (yearNum.length === 4) {
    if (Number(yearNum[2]) === 0 && Number(yearNum[3]) === 0) {
      return Number(String(yearNum[0]) + String(yearNum[1]));
    } else {
      // if()
      let one = Number(String(yearNum[0]));
      let two = "1";
      let check = Number(String(yearNum[0]) + String(yearNum[1]));
      return check + 1;
    }
  }
}

console.log(centuryFromYear(1905)); //20
console.log(centuryFromYear(2001)); //21
console.log(centuryFromYear(1988)); //20
console.log(centuryFromYear(1805)); //19

console.log(centuryFromYear(45)); //1
console.log(centuryFromYear(8)); //1
