function returnEven(n) {
// USING FILTER
    return n.filter((even) => even % 2 !== 0)
// USING A FOR LOOP
    //   let newArr = [];
//   for (let i of n) {
//     if (i % 2 !== 0) newArr.push(i);
//   }
//   return newArr;
}

console.log(returnEven([1, 2, 4, 5, 10, 6, 3]));
