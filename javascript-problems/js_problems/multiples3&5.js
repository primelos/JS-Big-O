function multiples(a, b){
    let arr = []
    console.log('hi');
    for(let i = 0; i < 1000; i++){
        // console.log(i)
        // console.log('bye');
        if (i % a === 0 || i % b === 0){
            arr.push(i)
        }
    }
    let test = arr.reduce((a,b) => {
        return a+b
    })
    console.log(test);
    return test
}


console.log(multiples(3,5));