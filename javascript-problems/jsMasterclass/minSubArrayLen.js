// Write a function minsSubArrayLen which accepts an array of positive integers and a positive integer.  This function should return the minimal length of a contiguous subarray of which 
// the sum is greater than or equal to the integer passed to the function.  If there isn't one
// return 0 instead




function minsSubArrayLen(arr, num){

    for(let i = 0; i < arr.length; i++){

    }

    return 0
}

console.log(minsSubArrayLen([2, 3, 1, 2, 4, 3], 7)); // 2 [4,3]
console.log(minsSubArrayLen([2,1, 6, 5, 4], 9));  // 2 [5,4]
console.log(minsSubArrayLen([3, 1, 7, 11, 2, 9, 8, 21, 62, 33, 19], 52)); // 1 [62] is greater than 52