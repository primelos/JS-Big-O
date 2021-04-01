// A bracket is considered to be any one of the following characters: (, ), {, }, [, or ].

// Two brackets are considered to be a matched pair if the an opening bracket (i.e., (, [, or {) occurs to the left of a closing bracket (i.e., ), ], or }) of the exact same type. There are three types of matched pairs of brackets: [], {}, and ().

// A matching pair of brackets is not balanced if the set of brackets it encloses are not matched. For example, {[(])} is not balanced because the contents in between { and } are not balanced. The pair of square brackets encloses a single, unbalanced opening bracket, (, and the pair of parentheses encloses a single, unbalanced closing square bracket, ].

// By this logic, we say a sequence of brackets is balanced if the following conditions are met:

// It contains no unmatched brackets.
// The subset of brackets enclosed within the confines of a matched pair of brackets is also a matched pair of brackets.

// Sample Input

// {[()]}
// {[(])}
// {{[[(())]]}}
// Sample Output

// YES
// NO
// YES

function isBalanced(s) {
//     // MUTATES the array
//     // NO STACK
//     let n = -1;
//     console.log('s', s.length)
//     while (s.length != n) {
//         n = s.length;
//         s = s.replace('[]', '');
//         console.log('s1',s)
//         s = s.replace('()', '');
//         console.log('s2',s)
//         s = s.replace('{}', '');
//         console.log('s3',s, s.length)
//     }
//     if (s.length == 0)
//         return "YES"
//     else 
//         return "NO"

    // STACK AND MAP
    let stack = []
    let closed = new Map([ [')','('], [']','['], ['}','{'] ])
    console.log(closed);
    for(let bracket of s){
        console.log(closed.has(bracket));
        if (closed.has(bracket)){
            if (closed.get(bracket) !== stack[stack.length -1]){
                return 'NO'
            } else {
                stack.pop()
            }
        } else {
            stack.push(bracket)
        }
    }
    if(stack.length){
        return 'NO'
    } 
    return 'YES'
    
}

console.log(isBalanced('({()})[]{}'))


// USING STACK AND SET
// function isValid(code) {
//   // Determine if the input code is valid

//   const openersToClosers = {
//     "(": ")",
//     "[": "]",
//     "{": "}",
//   };
//   // ([]{[]})[]{{}()}
//   const openers = new Set(["(", "[", "{"]);
//   const closers = new Set([")", "]", "}"]);
//   const openerStack = [];
//   let i;
//   for (i = 0; i < code.length; i++) {
//     const char = code[i];

//     if (openers.has(char)) {
//       openerStack.push(char);
//     } else if (closers.has(char)) {
//       if (!openerStack.length) {
//         return false;
//       }
//       const lastOpener = openerStack.pop();
//       if (openersToClosers[lastOpener] !== char) {
//         return false;
//       }
//     }
//   }
//   return openerStack.length === 0;
// }