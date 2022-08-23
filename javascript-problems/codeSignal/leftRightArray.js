// You are given an array of integers numbers and two integers left and right. You task is to calculate a boolean array result, where result[i] = true if there exists an integer x, such that numbers[i] = (i + 1) * x and left ≤ x ≤ right. Otherwise, result[i] should be set to false.

// Example

// For numbers = [8, 5, 6, 16, 5], left = 1, and right = 3, the output should be solution(numbers, left, right) = [false, false, true, false, true].

// For numbers[0] = 8, we need to find a value of x such that 1 * x = 8, but the only value that would work is x = 8 which doesn't satisfy the boundaries 1 ≤ x ≤ 3, so result[0] = false.
// For numbers[1] = 5, we need to find a value of x such that 2 * x = 5, but there is no integer value that would satisfy this equation, so result[1] = false.
// For numbers[2] = 6, we can choose x = 2 because 3 * 2 = 6 and 1 ≤ 2 ≤ 3, so result[2] = true.
// For numbers[3] = 16, there is no an integer 1 ≤ x ≤ 3, such that 4 * x = 16, so result[3] = false.
// For numbers[4] = 5, we can choose x = 1 because 5 * 1 = 5 and 1 ≤ 1 ≤ 3, so result[4] = true.


function solution(numbers, left, right) {
    // let result = numbers.filter((num, i) => {
    //     if((i+1) *  (i+1) !== num[i] )
    // })
    let result= []
    let j = 1
    let check = false
    for(let i = 0, j = 1; i < numbers.length; i++){
       if(j)
       
    }
    return result
}


{/*

Input:
numbers: [8, 5, 6, 16, 5]
left: 1
right: 3
Output:
[]
Expected Output:
[false, false, true, false, true]

Input:
numbers: [100]
left: 1
right: 1000
Output:
[]
Expected Output:
[true]

Input:
numbers: [1, 2, 3, 4, 5]
left: 1
right: 1
Output:
[]
Expected Output:
[true, true, true, true, true]


Input:
numbers: [1, 2, 3, 4, 5]
left: 2
right: 10000
Output:
[]
Expected Output:
[false, false, false, false, false]

Input:
numbers: [1000000, 20000]
left: 10000
right: 10000
Output:
[]
Expected Output:
[false, true]
*/}