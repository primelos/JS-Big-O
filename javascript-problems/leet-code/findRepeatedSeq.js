var findRepeatedDnaSequences = function(s) {
    let hash = {}
    let res = []
    let i = 0

    while(i + 10 <= s.length ){
        let portion = s.slice(i, i+10)
        hash[portion] = hash[portion] + 1 || 1
        if(hash[portion] === 2){
            res.push(portion)
        }
        i++
    }

    return res
}


console.log(findRepeatedDnaSequences("AAAAACCCCCAAAAACCCCCCAAAAAGGGTTT"));