// Given five positive integers, find the minimum and maximum values that can be calculated by summing exactly four of the five integers. Then print the respective minimum and maximum values as a single line of two space-separated long integers.
// arr = [1,2,3,4,5]
// min = 1+2+3+4 = 10
// max = 2+3+4+5 = 14

// console.log 10, 14

function miniMaxSum(arr) {
    let high = 0
    let low = 0

    arr.sort((a,b) => (a-b))
    for(let i = 1; i < arr.length; i++){
        high += arr[i]
    }
    for(let i = 0; i < arr.length-1; i++){
        low += arr[i]
    }
    console.log(low, high)
}