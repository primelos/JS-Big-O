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
// console.log(insertionSort([3,1,5,76,2,38,18,9]))
//                          j i

function insertionSort(arr){
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
// console.log(insertionSort([3, 1, 5, 76, 2, 38, 18, 9]));

// OR
// function insertionSort(array){
//     for(let i = 1; i < array.length; i++){
//         for(let j = 1; i > 0; i--) {
//             if(array[j + 1] < array[j]){
//                 [array[j], array[j+1]] = [array[j+1], array[j]]
//             } else {
//                 break
//             }
//         }
//     }
//     return array
// }
console.log(insertionSort([3,1,5,76,2,38,18,7]))


// WITH 3 PARAMETERS TO HELP SORT
// var insert = function (array, rightIndex, value) {
//   var i;
//   for (i = rightIndex; i >= 0 && array[i] > value; i--) {
//     array[i + 1] = array[i];
//   }
//   array[i + 1] = value;
// };

// var array = [3, 5, 7, 11, 13, 2, 9, 6];


module.exports = insertionSort;