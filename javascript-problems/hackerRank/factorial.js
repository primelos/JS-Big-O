// Sample Input 0

// 4
// Sample Output 0

// 24
// Explanation 0

// We return the value of  4!= 4*3*2*1

function factorial(n){
    if (n === 0 || n === 1){
        return 1
    } else {
        return factorial(n -1) * n
    }
}