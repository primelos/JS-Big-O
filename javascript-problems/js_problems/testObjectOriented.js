// Skeleton

// FUNCTION DEFINITION(S)
function PhoneNumberFormatter(numbers) {
  this.numbers = numbers;
}

PhoneNumberFormatter.prototype.render = function () {
  var string = "";
  // your code here
  string += this.parenthesize(this.getAreaCode());
  string += " " + this.getExchangeCode();
  string += "-" + this.getLineNumber();
  return string;
};

PhoneNumberFormatter.prototype.getAreaCode = function () {
  // your code here 415
  return this.slice(0, 3);
};

PhoneNumberFormatter.prototype.getExchangeCode = function () {
  // your code here 902
  return this.slice(3, 6);
};

PhoneNumberFormatter.prototype.getLineNumber = function () {
  // your code here 6493
  return this.slice(6, this.numbers.length);
};

PhoneNumberFormatter.prototype.parenthesize = function (string) {
  return "(" + string + ")";
};

PhoneNumberFormatter.prototype.slice = function (start, end) {
  return this.numbers.slice(start, end).join("");
};

// ASSERTION FUNCTION(S) TO BE USED
function assertObject(actual, expected, testName) {
  if (actual === expected) {
    console.log("passed");
  } else {
    console.log(`Failed, ${testName}`);
  }
}
// TESTS CASES

let phone = new PhoneNumberFormatter([4, 1, 5, 9, 0, 2, 6, 4, 9, 3]);

let areaCode = phone.getAreaCode();
assertObject(areaCode, "415", "should return areacode");

let exchangeNum = phone.getExchangeCode();
assertObject(exchangeNum, "902", "should get exchange number");

let lineNumber = phone.getLineNumber();
assertObject(lineNumber, "6493", "should match line number");

let fullNum = phone.render();
assertObject(fullNum, "(415) 902-6493", "should match phone number");
