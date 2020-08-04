function linearSearch(arr, val){
    for( let i = 0; i < arr.length; i++){
        console.log(arr[i])
        if(arr[i] === val) return i     
    }
    return -1
}



let arr = [22,34,55,76,2,47]
let val = 76
console.log('linearSearch',linearSearch(arr, val))