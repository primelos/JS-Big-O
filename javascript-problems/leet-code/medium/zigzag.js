/**
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 */

//               "PAYPALISHIRING" 3
// var convert = function(s, numRows) {
//   if(numRows < 2 || s.length < 2){
//     return s
//   }   
//   let row = 1
//   let down = true
//   let zigzag = []

//   for(let i = 0; i < numRows; i++){
//     zigzag[i] = []
//   }
//   for(let i = 0; i < s.length; i++){
//     zigzag[row - 1].push(s[i])
//     if(down){
//       row++
//       if(row > numRows){
//         row = numRows - 1
//         down = false
//       }
//     } else {
//       row-- 
//       if(row < 1){
//         row = 2
//         down = true
//       }
//     }
//   }
//   let newString = ''
//   for(let i = 0; i < numRows; i++){
//     console.log(zigzag[i].join(''));
//     newString += zigzag[i].join("");
//   }
//   return newString;
// }


var convert = function(s, numRows) {
  const result = []
  console.log(s[13]);
  if(numRows < 2) {
    return s
  }
  for(let i = 0; i < numRows; i++){
    let j = i
    while(j < s.length){
      result.push(s[j])

      if(i !== 0 && i !== numRows - 1){
        const k = (numRows - i) * 2 - 1 - 1  + j
        if(k < s.length){
          result.push(s[k])
        }
      }
      j += numRows * 2 - 1 - 1
    }
  }
  return result.join('')
}


console.log(convert("PAYPALISHIRING", 3))
