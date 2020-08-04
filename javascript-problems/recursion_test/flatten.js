// write a recursive function that accepts an array of arrays and returns
// a new array with all the values flattened

function flatten(a){
    let newArr = []

    for(let i = 0; i < a.length; i++){
        if (Array.isArray(a[i])){
            console.log('check', Array.isArray(a[i]))
            newArr = newArr.concat(flatten(a[i]))
            console.log('newArr', newArr)

        } else {
            newArr.push(a[i])
            console.log('newArrPUSH', newArr)
        }
    }
    return newArr;
}

// console.log(flatten([1, 2, 3, [4, 5] ])) // [1, 2, 3, 4, 5]
// flatten([1, [2, [3, 4], [[5]]]]) // [1, 2, 3, 4, 5]
// flatten([[1],[2],[3]]) // [1,2,3]
console.log(flatten([ [ [ [1], [ [ [2] ] ], [[[[[[[3]]]]]]] ] ] ])) // [1,2,3