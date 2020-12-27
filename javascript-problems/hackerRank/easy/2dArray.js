// Given a 6x6 2D Array, arr:

// An hourglass in A is a subset of values with indices falling in this pattern in arr's graphical representation:

// a b c
//   d
// e f g


function hourGlassSum(arr){
  // console.log(arr);
  let sumArr = []
  let i = 0
  let j = 0
  // console.log(arr[i][j]);
  let x = 0
   while(x < 16){
     if(x == 4 || x === 8 || x === 12){
      i++
      j = 0   
    }
    const sum = 
     arr[i][j] + arr[i][j+1] + arr[i][j+2] + 
     arr[i+1][j+1] +
     arr[i+2][j] + arr[i+2][j+1] + arr[i+2][j+2]
    sumArr.push(sum)
    j++
    x++
   }
   console.log(sumArr);
   return Math.max(...sumArr)
}

// console.log(
//   hourGlassSum([
//     [1, 1, 1, 0, 0, 0],
//     [0, 1, 0, 0, 0, 0],
//     [1, 1, 1, 0, 0, 0],
//     [0, 0, 2, 4, 4, 0],
//     [0, 0, 0, 2, 0, 0],
//     [0, 0, 1, 2, 4, 0],
//   ])
// ); //expects 19

console.log(
  hourGlassSum([
    [-9, -9, -9,  1,  1,  1],
    [ 0, -9,  0,  4,  3,  2],
    [-9, -9, -9,  1,  2,  3],
    [ 0,  0,  8,  6,  6,  0],
    [ 0,  0,  0, -2,  0,  0],
    [ 0,  0,  1,  2,  4,  0 ]
  ])
) //expects 28