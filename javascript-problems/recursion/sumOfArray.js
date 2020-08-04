function productOfArray(num){
    if(num.length === 0){
        return 1
    }
    return num[0] * productOfArray(num.slice(1))
}


console.log(productOfArray([2,3,6,8]))