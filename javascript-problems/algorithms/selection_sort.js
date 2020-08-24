// function selection_sort(arr){
//     for(let i=0; i < arr.length; i++){
//         let smallest = i
//         for (let j = i+1; j < arr.length; j++){
//             console.log(i, j)
//             if(arr[j] < arr[smallest]){
//                 smallest = j
//             }
//         } 
//         console.log('done')
//         console.log('s',smallest)
//         if( i !== smallest) {
//             let temp = arr[i]
//             arr[i] = arr[smallest]
//             arr[smallest] = temp
            
//         }
//     }
//     return arr
// }     

// console.log(selection_sort([34,22,10,19,17]))

// newer way of writing this es2105

function selection_sort(arr){
    const swap = (arr, i1, i2) => 
    (    [arr[i1], arr[i2]] = [arr[i2], arr[i1]]
    ) 
    for(let i=0; i < arr.length; i++){
        let smallest = i
        for (let j = i+1; j < arr.length; j++){
            console.log(i, j)
            if(arr[smallest] > arr[j]){
                smallest = j
            }
        } 
        if(i !== smallest) swap(arr, i, smallest)
    }
    return arr
}     

console.log(selection_sort([0,2,34,22,10,19,17]))