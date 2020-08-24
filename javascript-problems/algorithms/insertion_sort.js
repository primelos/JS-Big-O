// O(n^2)


// function insertion_sort(arr){
//     for(let i = 1; i < arr.length; i++){
//         let current = arr[i]
//         let j = i - 1
//         while(j >= 0 && arr[j] > current){
//             console.log(j)
//             arr[j + 1] = arr[j]
//             j = j - 1  
//         }
//         arr[j + 1] = current
//     }
//     return arr
// }
//                          0 1 2  3 4 5  6  7 
console.log(insertion_sort([3,1,5,76,2,38,18,9]))
//                          j i

function insertion_sort(arr){
    for(let i = 1; i < arr.length; i++){
        let current = arr[i]
        console.log('current',current)
        for(var j = i-1; j >= 0  && arr[j] > current; j--){
            console.log('j',j)
            arr[j + 1] = arr[j]  
            console.log(arr)
        }
        arr[j + 1] = current
        console.log(arr)
    }
    
    return arr

}

// console.log(insertion_sort([3,1,5,76,2,38,18,7]))