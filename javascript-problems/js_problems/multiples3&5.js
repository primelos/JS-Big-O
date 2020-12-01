function multiples(a, b){
    let arr = []
    for(let i in 1000){
        console.log(i)
        if (i % a === 0 || i % b === 0){
            arr.push(i)
        }
    }
    return arr
}


console.log(multiples(3,5));