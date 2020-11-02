// Given an array of integers, calculate the ratios of its elements that are positive, negative, and zero. Print the decimal value of each fraction on a new line with 6 places after the decimal.

// Note: This challenge introduces precision problems. The test cases are scaled to six decimal places, though answers with absolute error of up to 10^-4 are acceptable.

// arr[1,1,0,-1,-1]
// 2/5 = 4.00000 , 2/5 = 4.00000, 1/5 = .200000


function plusMinus(arr) {
    let positive = 0
    let negative = 0
    let zero = 0
    for (let i of arr){
        if(i > 0){
            positive++
        } else if (i < 0){
            negative++
        } else {
            return zero++
        }
    }
}