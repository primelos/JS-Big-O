// let arr = [
//     [1,2,3],
//     [4,5,6],
//     [7,8,10]
// ]
// 1+5+10 = 16
// 3+5+7 = 15
// |16 - 15| = 1



function diagonalDifference(arr) {
    let len = arr.length - 1
    let leftSum
    let rightSum

    for (let i = 0, j = len; i < len; i++, j--){
        leftsum += arr[i][j]
        rightSum += arr[i][j]
    }
    return Math.abs(leftSum - rightSum)
}