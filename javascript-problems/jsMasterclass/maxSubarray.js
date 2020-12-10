// Given an array of integers and a number, write a function called maxSubarray
// which finds the maximum sum of a subarray with the length of the number passed to the 
// function 
// subarray must consist of consecutive elements from the original array.

function maxSubarray(arr, len){
    if(arr.length < len) return null
    
    let total = 0
    for(let i = 0; i < len; i++){
        total += arr[i]
    }

    let compareTotal = total
    for(let i = len; i < arr.length; i++){
        compareTotal += arr[i] - arr[i-len]
        total = Math.max(total, compareTotal)
    }
    return total
}

console.log(maxSubarray([400,300,200,100], 2)) // 700
console.log(maxSubarray([1,4,2,10,23,3,1,0,20], 4)) // 39
console.log(maxSubarray([-3,4,0,-2,6,-1], 2)) // 5
console.log(maxSubarray([2,3], 3)) // null