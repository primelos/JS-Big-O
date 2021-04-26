function highestProductOf3(arrayOfInts) {
  // Calculate the highest product of three numbers
  let total = 0;
  let j = 0;
  for (let i = 1; i < arrayOfInts.length; i++) {
    console.log(i);
    while(j !== arrayOfInts.length){
      if (j === i){
        ''
      } else {

        let sum = arrayOfInts[j] + arrayOfInts[i];
        console.log(sum);
        total = Math.max(total, sum)
        j++
      }
    }
   
  }

  return total;
}


console.log(highestProductOf3([2,6,1,9,8]));
//  want 6 and 8 = 14