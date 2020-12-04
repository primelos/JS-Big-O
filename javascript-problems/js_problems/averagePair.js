// write a function called averagePair. Given a sorted array of integers and target averagePair,
// determine if there is a pair of values in the array where the average of the pair equals the 
// target average.

function averagePair(arr, average){
    // add whatever parameters you deem necessary - good luck!
    let start = 0
    let end = arr.length - 1
    while (start < end){
        let avg = (arr[start] + arr[end]) / 2
        if (avg === average){
            return true
        } else if(avg < average){
            start++
        } else {
           end-- 
        } 
    }
    return false
    }
    

  console.log(averagePair([1,2,3], 2.5))
  console.log('hi')