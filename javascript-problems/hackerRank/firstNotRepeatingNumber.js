// Given a string s consisting of small English letters, find and return the first instance of a non-repeating character in it. If there is no such character, return '_'.

// Example

// For s = "abacabad", the output should be
// first_not_repeating_character(s) = 'c'.

// There are 2 non-repeating characters in the string: 'c' and 'd'. Return c since it appears in the string first.

// For s = "abacabaabacaba", the output should be
// first_not_repeating_character(s) = '_'.

// There are no characters in this string that do not repeat.

// [execution time limit] 4 seconds (py3)

// [input] string s

// A string that contains only lowercase English letters.

// [output] char

// The first non-repeating character in s of '_' if there are no characters that do not repeat.


function firstNotRepeatingNumber(s){
    let temp = []
    for(let i of s){
        if(!temp.includes(i)){
            temp.push(i)
        } else {
            let temp2 = temp.indexOf(i)
            temp.splice(temp2,1)
        }
    }
    return temp.length ? temp[0] : '_'
    console.log(temp);
}


console.log(firstNotRepeatingNumber('abacdabad'));