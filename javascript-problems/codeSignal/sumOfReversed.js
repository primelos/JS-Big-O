const sumOfReversed = (arr) => {
  let result = 0;

  for (let i = 0; i < arr.length; i++) {
    let value = String(arr[i]).split("").reverse();
    console.log(value);
  }
};

console.log(sumOfReversed([7, 234, 58100]));
