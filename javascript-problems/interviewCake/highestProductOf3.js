// Done incorrectly finds the highest sum of 2 numbers
// function highestProductOf3(arrayOfInts) {
//   // Calculate the highest product of three numbers
//   let total = 0;
//   let sum = 0;
//   for (let i = 0; i < arrayOfInts.length; i++) {
//     let j = i - 1;
//     while (j !== arrayOfInts.length) {
//       if (j !== i) {
//         sum = arrayOfInts[j] + arrayOfInts[i];

//         if (!Number.isNaN(sum)) total = Math.max(total, sum);
//       }
//       j++;
//     }
//   }
//   return total;
// }
// console.log(highestProductOf3([1, 9, 1, 4, 10]));

// console.log(highestProductOf3([2, 6, 1, 9, 8]));
// //  want 6 and 8 = 14

// O(n) time and O(1)O(1) additional space.
function highestProductOf3(arrayOfInts) {
  // Calculate the highest product of three numbers
  if (arrayOfInts.length < 3) {
    throw new Error("less than 3 items!");
  }

  let highest = Math.max(arrayOfInts[0], arrayOfInts[1]);
  let lowest = Math.min(arrayOfInts[0], arrayOfInts[1]);

  let highestProductOf2 = arrayOfInts[0] * arrayOfInts[1];
  let lowestProductOf2 = arrayOfInts[0] * arrayOfInts[1];

  let productOf3 = arrayOfInts[0] * arrayOfInts[1] * arrayOfInts[2];
  for (let i = 2; i < arrayOfInts.length; i++) {
    let current = arrayOfInts[i];
    // [2, 6, 1, 9, 8]

    productOf3 = Math.max(
      productOf3,
      current * highestProductOf2,
      current * lowestProductOf2
    );
    console.log(productOf3);

    highestProductOf2 = Math.max(
      highestProductOf2,
      current * highest,
      current * lowest
    );
    console.log(highestProductOf2);

    lowestProductOf2 = Math.min(
      lowestProductOf2,
      current * highest,
      current * lowest
    );
    console.log(lowestProductOf2);

    highest = Math.max(highest, current);
    console.log(highest);

    lowest = Math.min(lowest, current);
    console.log(lowest);
  }

  return productOf3;
}

console.log(highestProductOf3([2, 6, 1, 9, 8]));
