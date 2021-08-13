function preferredRestsurant(pref) {
  let newMap = new Map();
  let newPref = pref[0];
  for (let i = 0; i < pref[0].length; i++) {
    newMap.set(newPref[i], 0);
  }
  for (let i = 0; i < pref.length; i++) {
    for (let j = 0; j < pref[0].length; j++) {
      let prefValue = pref[i][j];
      newMap.set(prefValue, newMap.get(prefValue) + pref[i].indexOf(prefValue));
    }
  }
  let m = pref.length;
  let temp;
  let tempArr = [];
  for (let c of newMap) {
    let k = c[0];
    let v = c[1];
    tempArr.push(c[1]);
    m = Math.min(m, v);
    if (m === v) {
      temp = k;
    }
  }
  if (tempArr.every((val, i, arr) => val === arr[0])) {
    return -1;
  }
  return temp;
}

console.log(
  preferredRestsurant([
    [1, 2, 3, 4],
    [3, 1, 4, 2],
    [4, 2, 1, 3],
  ])
);
