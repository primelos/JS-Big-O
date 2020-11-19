// function minimumStepsToOne(num) {
//   let count = 0;
//   if (num === 1) {
//     return 0;
//   }
//   while (num >1) {
//     console.log("top", num);
//     if (num % 2 === 0) {
//       num /= 2;
//       count++;
//     } else if (num % 3 === 0) {
//       num /= 3;
//       count++;
//     } else {
//       num -= 1;
//       count++;
//     }
//   }
//   console.log(count);
//   return count;
// }


// console.log(minimumStepsToOne(10));

// >?>?>?>>?>?>?>?>??>?>?>?>?>?>?>?>?>?>?>?>?>?>?>?>?>?>?>?>?>?>?>?>?
//                USING RECURSION
// function minRoute(n){
//     function recurse(curr){
//         if(curr === 1){
//             return 0
//         }
//         let steps = recurse(curr - 1)
//         if( curr % 2 === 0){
//             let divBy2 = recurse(curr/2)
//             steps = Math.min(steps, divBy2)
//         }

//         if (curr % 3 === 0) {
//           let divBy3 = recurse(curr / 3);
//           steps = Math.min(steps, divBy3);
//         }

//         let result = 1 + steps
//         return result 
//     }

//     let res =  recurse(n)
//     return res
// }

// console.time('time')
// console.log(minRoute(10))
// console.timeEnd('time')




function minRoute(n){
    let cache = {}
    let count = 0
    function recurse(curr){
        if(curr === 1){
            return 0
        }
        if(curr in cache){
            count++
            return cache[curr]
        }

        let steps = recurse(curr - 1)

        if( curr % 2 === 0){
            let divBy2 = recurse(curr/2)
            steps = Math.min(steps, divBy2)
        }

        if (curr % 3 === 0) {
          let divBy3 = recurse(curr / 3);
          steps = Math.min(steps, divBy3);
        }


        result = 1 + steps
        cache[curr]
    }
    return recurse(n)
}

console.time('time')
console.log(minRoute(10))
console.timeEnd('time')



// ----------------------------------------------------------------------------
function minStepsToOne(n) {
  
  function recurse(curr) {
    // Base case
    if(curr == 1) {
      return 0;
    }
    
    
    // Recursive operations
    // sub 1
    let steps = recurse(curr-1);
    
    
    // divby2
    if(curr % 2 == 0) {
      let divby2 = recurse(curr/2);
      steps = Math.min(steps, divby2);
    }
    
    // divby3
    if(curr % 3 == 0) {
      let divby3 = recurse(curr/3);
      steps = Math.min(steps, divby3);
    }
    
    
    
    // Return min # steps from `curr` to 1
    return 1+steps;
    
  }
  
  return recurse(n);
}

function minStepsToOneMemo(n) {
  let cache = {};
  let count = 0;
  
  function recurse(curr) {
    // Base case
    if(curr == 1) {
      return 0;
    }
    
    if(curr in cache) {
      count++;
      return cache[curr];
    }
    
    
    // Recursive operations
    // sub 1
    let steps = recurse(curr-1);
    
    
    // divby2
    if(curr % 2 == 0) {
      let divby2 = recurse(curr/2);
      steps = Math.min(steps, divby2);
    }
    
    // divby3
    if(curr % 3 == 0) {
      let divby3 = recurse(curr/3);
      steps = Math.min(steps, divby3);
    }
    
    
    
    // Return min # steps from `curr` to 1
    let result = 1+steps;
    cache[curr] = result;
    return result;
    
  }
  
  let res = recurse(n);
  // console.log("Cache access count: "+count);
  console.log(cache);
  return res;
}


function minStepsToOneTab(n) {
  // Init table
  let tab = new Array(n+1);
  
  // Apply base case tab
  tab[1] = 0;
  
  // Loop through filling in subproblem solutions
  for(let curr = 2; curr <= n; curr++) {
    // sub 1
    let steps = tab[curr-1];
    
    
    // divby2
    if(curr % 2 == 0) {
      let divby2 = tab[curr/2];
      steps = Math.min(steps, divby2);
    }
    
    // divby3
    if(curr % 3 == 0) {
      let divby3 = tab[curr/3];
      steps = Math.min(steps, divby3);
    }
    
    
    
    // Return min # steps from `curr` to 1
    let result = 1+steps;
    tab[curr] = result;
    
  }
  
  
  
  // Return last value in table
  return tab[n];
}


// console.time("Brute Force Recursion:");
// console.log(minStepsToOne(405));
// console.timeEnd("Brute Force Recursion:");


console.time("Memoization:");
console.log(minStepsToOneMemo(5678));
console.timeEnd("Memoization:");


console.time("Tabulation:");
console.log(minStepsToOneTab(5678));
console.timeEnd("Tabulation:");


// programswest@outco.co