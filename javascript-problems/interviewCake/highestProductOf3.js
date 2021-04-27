function highestProductOf3(arrayOfInts) {
  // Calculate the highest product of three numbers
  console.log('ij');
  let total = 0;
  let j = 0;
  for (let i = 1; i < arrayOfInts.length; i++) {
    console.log(i);
    while(j !== arrayOfInts.length){
      // if (j !== i){
      //   let sum = arrayOfInts[j] + arrayOfInts[i];
      //   console.log(sum);
      //   total = Math.max(total, sum);
      //   i++;
      // }
      console.log('hi');
    }
    j++
    
   
  }

  return total;
}


console.log(highestProductOf3([2,9,1,4,7]));
// //  want 6 and 8 = 14

// function highestProductOf3(arrayOfInts) {
//   // Calculate the highest product of three numbers
//   let total = 0;
//   let j = 0;
//   for (let i = 1; i < arrayOfInts.length; i++) {
//     if (i === j) {
//       ("");
//     } else {
//       let sum = arrayOfInts[j] + arrayOfInts[i];
//       console.log(sum);
//       total = Math.max(sum, total);
//       j++
//     }
//   }
//   console.log(total);

//   return total;
// }

// console.log(highestProductOf3([2, 9, 1, 4, 7]));






