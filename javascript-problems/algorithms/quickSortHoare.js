function swap (array, i, j){
    let temp = array[i]
    array[i] = array[j]
    array[j] = temp
}

function quicksortHoare(array, left, right){
    left = left || 0
    right = right || array.length - 1

    let pivot = partitionHoare(array, left, right);
    console.log();
    if(left < pivot - 1){
    console.log(pivot-1);

        quicksortHoare(array, left, pivot - 1)
    }
    if(right > pivot) {
    console.log(pivot);
        quicksortHoare(array, pivot, right)
    }
    return array
}

function partitionHoare(array, left, right){
    let pivot = Math.floor((left + right) / 2)
    console.log(arr[pivot]);
    while (left <= right) {
        while (array[left] < array[pivot]) {
            console.log(arr[pivot]);
            left++
        }
        while (array[right] > array[pivot]) {
            right--
        }
        if(left <= right) {
            console.log(left);
            console.log(right);
            swap(array, left, right)
            console.log(array);
            left++
            right--
        }
    }
    console.log(left);
    return left
}

let arr = [21, 45, 43, 11, 98, 59, 86, 81, 26, 56];
console.log(quicksortHoare(arr, 0, arr.length - 1));
console.log(arr.length -1);