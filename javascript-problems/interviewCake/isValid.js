// USING STACK AND SET
function isValid(code) {
  // Determine if the input code is valid

  const openersToClosers = {
    "(": ")",
    "[": "]",
    "{": "}",
  };
  // ([]{[]})[]{{}()}
  const openers = new Set(["(", "[", "{"]);
  const closers = new Set([")", "]", "}"]);
  const openerStack = [];
  let i;
  for (i = 0; i < code.length; i++) {
    const char = code[i];

    if (openers.has(char)) {
      openerStack.push(char);
    } else if (closers.has(char)) {
      if (!openerStack.length) {
        return false;
      }
      const lastOpener = openerStack.pop();
      if (openersToClosers[lastOpener] !== char) {
        return false;
      }
    }
  }
  return openerStack.length === 0;
}

console.log(isValid("{[]()}")); //expect true