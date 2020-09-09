// Given a string, find the first non-repeating character in it and return its 
// index. If it doesn't exist, return -1.

// Examples:

// s = "leetcode"
// return 0.

// s = "loveleetcode"
// return 2.

/**
 * @param {string} s
 * @return {number}
 */
var firstUniqChar = function(s) {
    let hash = {}
    let count = 1

    for(let i = 0; i < s.length; i++){
        let letter = s[i]
        if (hash.hasOwnProperty(letter)){
            hash[letter] = count + 1
        } else {
            hash[letter] = 0
        }
    }
    for(let letter in hash){
        if (hash[letter] === 0){
            return s.indexOf(letter)
        }
    }
    return -1

}