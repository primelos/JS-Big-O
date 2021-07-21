function phone(s) {
  let removeChar = "";
  let newPhone = "";
  for (let i = 0; i < s.length; i++) {
    if (!isNaN(Number(s[i]))) {
      removeChar += s[i];
    }
  }
  console.log(removeChar);
  let length = Math.min(removeChar.length, 10);
  console.log(length);
  for (let i = 0; i < 10; i++) {
    if (i === 0) {
      newPhone += "(" + removeChar[i];
    } else if (i === 3) {
      newPhone += ") " + removeChar[i];
    } else if (i === 6) {
      newPhone += "-" + removeChar[i];
    } else {
      newPhone += removeChar[i];
    }
  }
  return newPhone;
}

console.log(phone("415-902-6493"));
