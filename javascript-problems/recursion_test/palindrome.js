// write a recursive function  which returns true if the string is
// a palindrome otherwise returns false


function isPalindrome(a){
    if(a.length === 1) return true
    if(a.length === 2) return a[0] === a[1]
    if(a[0] === a.slice(-1)) return isPalindrome(a.slice(1, -1))
    return false

}
let b = '12344321'
console.log(isPalindrome(b))