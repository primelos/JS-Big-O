// We define the usage of capitals in a word to be right when one of the following cases holds:
// All letters in this word are capitals, like "USA".
// All letters in this word are not capitals, like "leetcode".
// Only the first letter in this word is capital, like "Google".
// Otherwise, we define that this word doesn't use capitals in a right way.
 
// Example 1:
// Input: "USA"
// Output: True
 
// Example 2:
// Input: "FlaG"
// Output: False

let detectCapitalUse = function(word) {
    let capital = 0

    for (let i = 0; i < word.length; i++){
        let letter = word[i]
        if(letter === letter.toUpperCase()){
            capital += 1
        }
    }
    return (capital === word.length || capital === 0 || (word[0] === word[0].toUpperCase() && capital === 1)
    )
};

console.log(detectCapitalUse('tiger'))

// time complexity O(n)
// space O(1)

