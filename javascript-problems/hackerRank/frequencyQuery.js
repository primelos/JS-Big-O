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




//     VERY SMART WAY TO SOLVE THE PROBLEM
// function freqQuery(arr) {
//   const result = [];
//   const hash = {};
//   const freq = [];

//   for (let i = 0; i < arr.length; i += 1) {
//     const [action, value] = arr[i];
//     const initValue = hash[value] || 0;
//     // console.log(action , value)
//     if (action === 1) {
//       hash[value] = initValue + 1;
//       console.log("initValue", initValue);
//       //   console.log('hash',hash)

//       freq[initValue] = (freq[initValue] || 0)--;
//       console.log("freq", freq);
//       freq[initValue + 1] = (freq[initValue + 1] || 0)++;
//       console.log("freq2", freq);
//     }

//     if (action === 2 && initValue > 0) {
//       hash[value]--;

//       freq[initValue - 1]++;

//       freq[initValue]--;
//       console.log(freq);
//     }

//     if (action === 3) result.push(freq[value] > 0 ? 1 : 0);
//   }

//   return result;
// }