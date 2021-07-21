// function swap (array, i, j){
//     [array[i], array[j]] = [array[j], array[i]]
// }

// function quicksortHoare(array, left, right){
//     left = left || 0
//     right = right || array.length - 1

//     let pivot = partitionHoare(array, left, right);
//     console.log();
//     if(left < pivot - 1){
//     console.log(pivot-1);

//         quicksortHoare(array, left, pivot - 1)
//     }
//     if(right > pivot) {
//     console.log(pivot);
//         quicksortHoare(array, pivot, right)
//     }
//     return array
// }

// function partitionHoare(array, left, right){
//     let pivot = Math.floor((left + right) / 2)
//     console.log(arr[pivot]);
//     while (left <= right) {
//         while (array[left] < array[pivot]) {
//             console.log(arr[pivot]);
//             left++
//         }
//         while (array[right] > array[pivot]) {
//             right--
//         }
//         if(left <= right) {
//             console.log(left);
//             console.log(right);
//             swap(array, left, right)
//             console.log(array);
//             left++
//             right--
//         }
//     }
//     console.log(left);
//     return left
// }

// let arr = [21, 45, 43, 11, 98, 59, 86, 81, 26, 56];
// console.log(quicksortHoare(arr, 0, arr.length - 1));
// console.log(arr.length -1);

function sort(arr, left, right) {
  left = left || 0;
  right = right || arr.length - 1;
  let pivot = partition(arr, left, right);
  if (left < pivot - 1) {
    sort(arr, left, pivot - 1);
  }
  if (right > pivot) {
    sort(arr, pivot, right);
  }
  return arr;
}
function partition(arr, left, right) {
  let pivot = Math.floor((left + right) / 2);
  while (left <= right) {
    while (arr[left] < arr[pivot]) {
      left++;
    }
    while (arr[right] > arr[pivot]) {
      right--;
    }
    if (left <= right) {
      console.log(left);
      console.log(right);
      swap(arr, left, right);
      left++;
      right--;
    }
  }
  console.log(left);
  return left;
}
function swap(arr, i, j) {
  [arr[i], arr[j]] = [arr[j], arr[i]];
}

array = [88, 22, 55, 11, 33];
let start = 0;
let len = array.length - 1;
console.log(sort(array));
