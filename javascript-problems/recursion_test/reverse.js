
// Write a recursive function which accepts a string and returns
// a new string in reverse

function reverse(a){
    if(a.length <= 1) return a
    return reverse(a.slice(1)) + a[0]
}

console.log(reverse('cat'))