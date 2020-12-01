function getProductsOfAllIntsExceptAtIndex(arr){
    console.log(arr);
    const final = []
    let temp = 1
    for(let i = 0; i < arr.length; i++){
        final[i] = temp
        temp = temp * arr[i]
    }
    console.log(final);
    
    temp = 1
    for(let j = arr.length - 1; j >= 0; j--){
        final[j] *= temp
        temp *= arr[j]
    }
    return final
}

console.log(getProductsOfAllIntsExceptAtIndex([2, 7, 3, 4]));

// 1, 4, 12, 84
// 84, 12, 4, 1

// 42,  56, 24,  84

// 84, 24, 56, 42