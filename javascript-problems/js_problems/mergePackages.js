// Given a package with a weight limit limit and an array of integers items of 
// where each integer represents the weight of an item, implement a function 
// merge_packages that finds the first two items in the items array whose sum 
// of weights equals the given weight limit limit.

// Your function should return a pair [i, j] of the indices of the item weights, 
// ordered such that i > j. If such a pair doesn’t exist, return an empty array.

// Examples:

// Input: items = [4, 6, 10, 15, 16], limit = 21
// Output: [3, 1]
// Explanation: The weight of the items at indices 3 and 1 sum up to the specified limit.

const mergePackage = (arr, limit) => {
    let hash = {}

    for(let i = 0; i < arr.length; i++){
        if(!hash.hasOwnProperty(limit - arr[i])){
            hash[arr[i]] = i
        } else {
            return [i, hash[limit - arr[i]]]
        }
        console.log(hash)
    }
}

let items = [4, 6 , 6, 10, 15, 16]
let limit = 21
console.log(mergePackage(items, limit))


// Output: [3, 1]