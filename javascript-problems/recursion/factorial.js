// function factorial(num){
//     total = 1
//     for( let i = num; i > 1; i--){
//         total *= 1
//     }
// }

function factorial(num){
    if (num == 1){
        return 1
    }
    return num * factorial(num-1)
}
// function factorial(fact){
//     if(fact === 0) return 1
//     return fact * factorial(fact - 1)
//  }
console.log(factorial(4))
console.log(factorial(1)) // 1
console.log(factorial(2)) // 2
console.log(factorial(4)) // 24
console.log(factorial(7)) // 5040