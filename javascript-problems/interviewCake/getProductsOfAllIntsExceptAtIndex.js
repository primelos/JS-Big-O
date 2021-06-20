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
//[6, 2, 3]
// This solution is O(n) but it doesn't account for zeros in the array
// function getProductsOfAllIntsExceptAtIndex(intArray) {
//   // Make a list of the products
//   let product = [];
//   let temp;
//   let total = 1;
//   for (let i = 0; i < intArray.length; i++) {
//     if (intArray[i] !== 0) {
//       total *= intArray[i];
//     }
//   }
//   console.log(total);
//   for (let j = 0; j < intArray.length; j++) {
//     temp = total / intArray[j];
//     product.push(temp);
//   }
//   return product;
// }

// console.log(getProductsOfAllIntsExceptAtIndex([8, 9, 4, 3, 1, 5]));
// // [6, 3, 2];

// O(n) time and O(n)O(n) space
function getProductsOfAllIntsExceptAtIndex(intArray) {
  // Make a list of the products
  if (intArray.length < 2) throw new Error("need 2 or more in array");

  let product = [];
  let total = 1;

  for (let i = 0; i < intArray.length; i++) {
    product[i] = total;
    console.log(product);
    total *= intArray[i];
    console.log(total);
  }
  console.log(product);
  total = 1;
  for (let j = intArray.length - 1; j >= 0; j--) {
    console.log(product[j]);
    product[j] *= total;
    total *= intArray[j];
  }
  return product;
}

console.log(getProductsOfAllIntsExceptAtIndex([8, 9, 0, 3, 1, 5]));
