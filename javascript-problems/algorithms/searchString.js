function naiveSearch(long, pattern){
    
    let count = 0
    for(let i = 0; i < long.length; i++){
        for(let j = 0; j < pattern.length; j++){
            console.log(`j ${j} i ${i}`)
            console.log(pattern[j], long[i+j])
            if(pattern[j] !== long[i+j]){
                console.log('break')
                break
            }
            if(j === pattern.length -1){
                console.log('found match')
                count++
            }
        }
    }
    return `found ${count} of '${pattern}' in sentence`

}

console.log(naiveSearch('thcarth isth blueth', 'th'))