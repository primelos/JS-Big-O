// divide and conquer 
// must be sorted
// O(log n)

function binary_search(arr, num){
    let left = 0
    let right = arr.length -1

    let middle = Math.floor((right + left) / 2)

    target = 0
    while(arr[middle] !== num && left < right){
        if ( num < arr[middle]){
            right = middle-1
        } else {
            left = middle+1
        }
        middle = Math.floor((right + left) / 2)
        console.log(left, right, middle)
    }
    return arr[middle] === num ? middle : -1
   
}
let a = [2,4,5,6,7,8,9,11,12,13,14,16]
//index  0 1 2 3 4 5 6  7  8  9  10 11

let item = 13
console.log(binary_search(a, item))