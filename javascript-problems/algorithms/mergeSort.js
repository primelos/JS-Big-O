function mergeSort(arrToSort){
  console.log(arrToSort);
  if(arrToSort.length === 1) {
    return arrToSort
  }
  const midIdx = Math.floor(arrToSort.length / 2)
  console.log(midIdx);

  const  left = arrToSort.slice(0, midIdx)
  console.log(left);
  const right = arrToSort.slice(midIdx)
  console.log(right);

  const sortedLeft = mergeSort(left)
  console.log(sortedLeft)
  const sortedRight = mergeSort(right)
  console.log(sortedRight);
  const sortedArr = []
  let currentLeftIdx = 0
  let currentRightIdx = 0

  while(sortedArr.length < left.length + right.length){
    console.log(right.length);
    if( currentLeftIdx < left.length && (currentRightIdx === right.length || sortedLeft[currentLeftIdx] < sortedRight[currentRightIdx])){
      sortedArr.push(sortedLeft[currentLeftIdx])
      currentLeftIdx += 1
    } else {
      sortedArr.push(sortedRight[currentRightIdx])
      currentRightIdx += 1
    }
  }
  return sortedArr
}

console.log(mergeSort([22,4,11,3,1,20]))
// console.log(mergeSort([22]));