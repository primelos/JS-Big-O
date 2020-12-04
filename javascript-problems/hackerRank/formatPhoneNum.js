function phone(s) {
  let removeChar = "";
  let newPhone = "";
  for (let i = 0; i < s.length; i++) {
    if (!isNaN(Number(s[i]))) {
      removeChar += s[i];
    }
  }
  let length = Math.min(removeChar.length, 10);
  for (let i = 0; i < length; i++) {
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
