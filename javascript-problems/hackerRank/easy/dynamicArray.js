/*
 * Complete the 'dynamicArray' function below.
 *
 * The function is expected to return an INTEGER_ARRAY.
 * The function accepts following parameters:
 *  1. INTEGER n
 *  2. 2D_INTEGER_ARRAY queries
 */

function dynamicArray(n, queries) {
  // Write your code here
  // console.log(n , queries)
  let lastAnswer = 0;
  let result = [];
  let seqList = new Array(n);
  seqList.fill([]);
  // for(let i = 0; i<n; i++){
  //     seqList[i] = new Array()
  // }
  // console.log(seqList)
  for (let i = 0; i < queries.length; i++) {
    let x = queries[i][1];
    let y = queries[i][2];
    // console.log(x,y)

    if (queries[i][0] === 1) {
      let index = (x ^ lastAnswer) % n;
      seqList[index].push(y);
      console.log(seqList);
    }

    if (queries[i][0] === 2) {
      let ind = (x ^ lastAnswer) % n;
      let size = seqList[ind].length;
      // console.log('s',size)
      lastAnswer = y % size;
      result.push(seqList[ind][lastAnswer]);
      lastAnswer = seqList[ind][lastAnswer];
    }
  }
  return result;
}
