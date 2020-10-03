// Implement a program to Merge all the arrays and sort in ascending order.

// Input:

// 3 4

// 5 8 4 7

// 15 32 87 65

// 2 1 78 91

// // 3 - no of arrays to be merged // 4- no of elements in an array

// Output: 1 2 4 5 7 8 15 32 65 78 87 91

function processData(input) {
    
    let newStr = input.split(' ').join()
    let newArr = newStr.replace(/\n/g, ',').split(',')
    let removeSpace = newArr.filter(function(ent) { return ent.trim() != ' '})
    let code = []
    console.log(removeSpace)
    for(let i = 2 ; i < removeSpace.length; i++){
        if (removeSpace[i] !== ''){
            code.push(Number(removeSpace[i]))
        } 
    }
    code.sort((a,b) => a-b)
    console.log(code)
    return code
} 