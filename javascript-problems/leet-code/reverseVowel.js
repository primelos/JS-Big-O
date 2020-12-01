// Write a function that takes a string as input and reverse only the vowels of a string.

// Example 1:

// Input: "hello"
// Output: "holle"
// Example 2:

// Input: "leetcode"
// Output: "leotcede"
// Note:
// The vowels does not include the letter "y".

 

var reverseVowels = function(s) {
// function reverseVowels(s) {
    let vowels = {}
    let charArr = s.split('')

    for(let i of 'aeiouAEIOU'){
        vowels[i] = true
    }
    console.log(vowels)

    let left = 0
    let right = s.length - 1

    while(left < right) {
        while(left < right && !(s[left] in vowels)) {
            left+=1
        }
        while(left < right && !(s[right] in vowels)){
            right-=1
        }
        // swap(charArr, left, right)
        [charArr[left], charArr[right]] = [charArr[right], charArr[left]]
        left+=1
        right-=1
    }
    return charArr.join('')
}

// function swap(arr, a , b){
//     [arr[a], arr[b]] = [arr[b], arr[a]]
// }

// let test = reverseVowels('leetcode')
// console.log(reverseVowels("leetcode"));
console.log(reverseVowels("leetcode"))

console.log('hi');