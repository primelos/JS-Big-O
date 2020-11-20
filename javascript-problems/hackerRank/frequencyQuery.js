function freqQuery(queries) {
  let m = new Map();
  let result = [];
  for (let i = 0; i < queries.length; i++) {
    // console.log(queries[i][0], queries[i+1])
    let operator = queries[i][0];
    let value = queries[i][1];
    // console.log(value)
    if (operator === 1) {
      typeof m[value] === "undefined" ? (m[value] = 1) : m[value]++;
    } else if (operator === 2) {
      m[value]--;
    } else if (operator === 3) {
      // console.log(m)
      // console.log(Object.values(m).includes(value))
      if (Object.values(m).includes(value)) {
        result.push(1);
      } else {
        result.push(0);
      }
    }
  }
  // console.log(count, m)
  return result;
}
