function kangaroo(x1, v1, x2, v2) {
    for(let i = 1; i <= 10000; i++){
        if((v1*i)+x1 === (v2*i)+x2){
            return 'YES'
        }
    }
    return 'NO'
}