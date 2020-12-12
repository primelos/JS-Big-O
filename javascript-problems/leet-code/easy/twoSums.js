// Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.

// You may assume that each input would have exactly one solution, and you may not use the same element twice.

// You can return the answer in any order.

 

// Example 1:

// Input: nums = [2,7,11,15], target = 9
// Output: [0,1]
// Output: Because nums[0] + nums[1] == 9, we return [0, 1].
// Example 2:

// Input: nums = [3,2,4], target = 6
// Output: [1,2]
// Example 3:

// Input: nums = [3,3], target = 6
// Output: [0,1]

let twoSums = function(nums, target) {

    // let cache = {}
    // for(let i = 0; i < nums.length; i++){
    //     console.log(cache[nums[i]]);
    //     if(cache[nums[i]] >= 0){
    //         return [cache[nums[i]], i]
    //     }
    //     cache[target - nums[i]] = i
    // }

    // OR
     for (let i = 0; i < nums.length; i++) {
    //    console.log(cache[nums[i]]);
       let test = target - nums[i]
       if(nums.includes(test,i+1)){
           return [i, nums.indexOf(test, i+1)]
       }
     }

}

// console.log(twoSums([2, 7, 11, 15], 22)); // [1, 3]
console.log(twoSums([3,2,4], 6)); //[1, 2]
console.log(twoSums([3,3], 6)); // [0, 1]