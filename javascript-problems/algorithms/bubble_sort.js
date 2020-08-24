// function bubble_sort(arr){
   
//     for(let i = arr.length; i > 0; i--){
//         for(let j = 0; j < i-1; j++){
//             // console.log('i',i)
//             // console.log(arr, arr[j], arr[j+1])
//             if(arr[j] > arr[j+1]){
//                 let temp = arr[j]
//                 arr[j] = arr[j+1]
//                 arr[j+1] = temp
//                 // [arr[j], arr[j+1] = arr[j+1], arr[j]]
//             }
//         }
//     }
//     return arr
// }



// let my_arr = [22,3,8,5,77,45,23,76,43,56,12]
// console.log(bubble_sort(my_arr)) 

// OR //
// function bubble_sort(arr){
//     const swap = (arr, idx1, idx2) => {
//         [arr[idx1], arr[idx2]] = [arr[idx2], arr[idx1]]
//     }
//     for(let i = arr.length; i > 0; i--){
//         for(let j = 0; j < i - 1; j++){
//             if(arr[j] > arr[j + 1]){
//                 swap(arr, j, j + 1)
//             }
//         }
//     }
//     return arr
// }


// let my_arr = [22,3,8,5,77,45,23,76,43,56,12]
// console.log(bubble_sort(my_arr)) 

// avoids last loop noSwaps

function bubble_sort(arr){
    let noSwaps
    const swap = (arr, idx1, idx2) => {
        [arr[idx1], arr[idx2]] = [arr[idx2], arr[idx1]]
        noSwaps =false
    }
    for(let i = arr.length; i > 0; i--){
        noSwaps = true
        for(let j = 0; j < i - 1; j++){
            console.log(arr, arr[j], arr[j+1])

            if(arr[j] > arr[j + 1]){
                swap(arr, j, j + 1)
            }
        }
        if(noSwaps) break
    }
    return arr
}


let my_arr = [22,3,8,5,77,45,23,76,43,56,12]
console.log(bubble_sort(my_arr)) 
