// // horrible O(n^2)
// function getProductsOfAllIntsExceptAtIndex(intArray) {
//   // Make a list of the products
//   console.log("");
//   let product = [];
//   let temp = 1;
//   let j = 0;
//   for (let i = 0; i < intArray.length; i++) {
//     for (let j = 0; j < intArray.length; j++) {
//       if (i !== j) {
//         temp *= intArray[j];
//         console.log(temp)
//       }
//     }
//     product.push(temp);
//     temp = 1
//   }

//   return product;
// }

// console.log(getProductsOfAllIntsExceptAtIndex([1,2,3]));
//
//
function getProductsOfAllIntsExceptAtIndex(intArray) {
  // Make a list of the products
  let product = [];
  let temp;
  let total = 0;
  for (let i = 0; i < intArray.length; i++) {
    total *= intArray[i];
  }
  console.log(total);
  for (let j = 0; j < intArray.length; j++) {
    temp = total / intArray[j];
    product.push(temp);
  }
  return product;
}

console.log(getProductsOfAllIntsExceptAtIndex([8, 2, 4, 3, 1, 5]));
// [6, 3, 2];
