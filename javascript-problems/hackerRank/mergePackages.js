// Given a package with a weight limit limit and an array of integers items of where each integer represents the weight of an item, implement a function merge_packages that finds the first two items in the items array whose sum of weights equals the given weight limit limit.

// Your function should return a pair [i, j] of the indices of the item weights, ordered such that i > j. If such a pair doesn’t exist, return an empty array.

// Examples:

// Input: items = [4, 6, 10, 15, 16], limit = 21
// Output: [3, 1]
// Explanation: The weight of the items at indices 3 and 1 sum up to the specified limit.
// Input: items = [1, 3, 15, 5, 7, 16, 9, 5, 22], limit = 10
// Output: [4, 1]
// Explanation: There are two possible answers for this one. The expected answer is `[4, 1]` instead of `[6, 0]` since 7 and 3 add up to 10 before we reach 9 in the array.


function mergePackage(items, limit){
    let hash = {} 
    let index = 0 
    console.log((hash));
    while(index < items.length){
        if (!(limit - items[index]) in hash){
            hash[items[index]] = index
            index++
        }
    }
    console.log(hash);


}


console.log(mergePackage([4,6,10,15,16], 21))