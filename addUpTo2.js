// function addUpTo(n) {
//     return n * (n + 1) /2
// } 

// var  t1 = performance.now();
// addUpTo(1000000000)
// var  t2 = performance.now()
// console.log(`Time Elapsed: ${(t2 - t1) / 1000} seconds.`)


function validAnagram(str1, str2){
    // add whatever parameters you deem necessary - good luck!
    if (str1.length !== str2.length){
        return false
    }
    for (let i in str1){
        if(!(str2.includes(str1[i]))){
            return false
        }
    }
    return true
  }
  
  
  console.log(validAnagram('awesome', 'awesom'))