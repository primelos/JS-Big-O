// Big O


// O(N)
function foo(arr){
  let sum = 0 
  product = 1
  for(let i = 0; i < arr.length; i++){
    sum += arr[i]
  }
  for(let i = 0; i < arr.length; i++){
    product *= arr[i]
  }
  return {sum, product}
}
console.log(foo([1,2,3,4]))


// O(n^2)
function printPairs(arr) {
  let sum = 0
  for(let i = 0; i < arr.length; i++){
      for(let j = 0; j < arr.length; j++){
        console.log(arr[i],arr[j])
        sum += arr[i] + arr[j]
      }
  }
  return sum
}
console.log(printPairs([1,2,3,4]));


// O(n^2)
function printunorderedPairs(array) {
  let sum = 0
  for (let i = 0; i < array.length; i++) { 
    for (let j = i + 1; j < array.length; j++) {
      console.log(i + "," + j);
      sum += array[i] + array[j];
      }
  }
  return sum
 }
 console.log(printunorderedPairs([1,2,3,4,5,6,7,8]));

// O(ab) => O(n)
function printUnorderedPair(arrayA, arrayB) {
  for (let i = 0; i < arrayA.length; i++) { 
    for (let j = 0; j < arrayB.length; j++) { 
      if (arrayA[i] < arrayB[j]) { 
        console.log(arrayA[i] + "," + arrayB[j]);
      }
    }
  }
}
console.log(printUnorderedPair([1,2,3,4], [1,2,3,4]));

// O(ab1000) => O(ab) => O(n)
function printUnorderedPair2(arrayA, arrayB) {
  for (let i = 0; i < arrayA.length; i++) { 
    for (let j = 0; j < arrayB.length; j++) { 
      for (let k = 0; k < 1000; k++) { 
        console.log(arrayA[i] + "," + arrayB[j])
      }
    }
  }
}
console.log(printUnorderedPair2([1,2,3,4], [1,2,3,4]));

// O(n) even though it only goes through half of the array
function reverse(arr) {
  for(let i = 0; i < arr.length / 2; i++){
    let other = arr.length - i - 1
    console.log(other);
    let temp = arr[i]
    arr[i] = arr[other]
    arr[other] = temp
  }
  return arr
}
console.log(reverse([1,2,3,4,5,6,7,8,9,10]));


// 0 (N + P), where P < N/2 => O(N)

// O(2N) => O(N)

// O(N + log N) => O(N) dominatesO(log N),sowecandroptheO(log N) => O(N)
// O(N+M) => O(N+M)