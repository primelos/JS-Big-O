// You are given three integers in the form of strings: firstnum, secondnum, and thirdnum. Your task is to check whether it is possible to erase at most one digit from firstnum, so that the resulting string contains at least one digit, has no leading zeros and the value of thirdnum is equal to the sum of the values of firstnum and secondnum.

// Return true if it's possible, otherwise return false.

// Note: All three strings are provided without leading zeros.

// Example

// For firstnum = "10534", secondnum = "67", and thirdnum = "1120", the output should be solution(firstnum, secondnum, thirdnum) = true.

// By erasing the 5th digit of firstnum, the result is 1053, and 1053 + 67 = 1120. So the answer is true.

// For firstnum = "10000", secondnum = "67", and thirdnum = "1120", the output should be solution(firstnum, secondnum, thirdnum) = false.

// The only possible modified values of firstnum would be 10000 (nothing was deleted), 0000 (first digit was deleted), and 1000 (any zero was deleted); none of which would produce the required sum, so the answer is false.

// For firstnum = "1067", secondnum = "33", and thirdnum = "100", the output should be solution(firstnum, secondnum, thirdnum) = false.

// We could delete the first digit of firstnum, resulting in 067 (and 67 + 33 = 100), but since in this case new firstnum value has a leading zero, it's considered invalid. So the answer is false.

// For firstnum = "153", secondnum = "153", and thirdnum = "306", the output should be solution(firstnum, secondnum, thirdnum) = true.

// Because 153 + 153 = 306, there's no need to delete a digit from firstnum, and the result is true.

function solution(firstnum, secondnum, thirdnum) {
  console.log(parseInt(firstnum) + parseInt(secondnum));
  if (parseInt(firstnum) + parseInt(secondnum) === parseInt(thirdnum)) {
    return true;
  }
  for (let i = 0; i < firstnum.length; i++) {
    let num = [...firstnum];
    let tempNum = num.splice(i, 1);
    console.log(tempNum, num.join(""), num);
    if (num.length === 1) {
      //   console.log(num.length)
      if (parseInt(num.join("")) + parseInt(secondnum) === parseInt(thirdnum)) {
        return true;
      }
    }
    if (num[0] !== "0") {
      if (parseInt(num.join("")) + parseInt(secondnum) === parseInt(thirdnum)) {
        return true;
      }
    }
  }
  return false;
}

// Input:
// firstnum: "10534"
// secondnum: "67"
// thirdnum: "1120"
// Output:
// true
// Expected Output:
// true

// Input:
// firstnum: "1067"
// secondnum: "33"
// thirdnum: "100"
// Output:
// false
// Expected Output:
// false

// Input:
// firstnum: "10"
// secondnum: "0"
// thirdnum: "0"
// Output:
// false
// Expected Output:
// true

// Input:
// firstnum: "10"
// secondnum: "0"
// thirdnum: "10"
// Output:
// true
// Expected Output:
// true

// Input:
// firstnum: "60"
// secondnum: "123"
// thirdnum: "123"
// Output:
// false
// Expected Output:
// true
