function mergeArrays(myArray, alicesArray) {
    // let mergeArr = [... myArray, ...alicesArray].sort(sorting)
    // function sorting(a,b){
    //     return a-b
    // }
    // console.log(mergeArr);

    let i = 0
    let j = 0 
    let length = (myArray.length + alicesArray.length)
    let mArr =[]
    console.log(length);
    
    while( mArr.length < length){
        console.log('hi')
        if(myArray[i] < alicesArray[j]){
            console.log('t1')
            mArr.push(myArray[i])
            i++
        } else if(alicesArray[j] < myArray[i]){
            console.log("t1");
            mArr.push(alicesArray[j])
            j++
        } else if (myArray[i]){
            console.log("t1");
            mArr.push(myArray[i])
            i++
        } else {
            console.log("t1");
            mArr.push(alicesArray[j])
            j++
        }
    }
    console.log(mArr)
}


const myArray = [3, 4, 6, 10, 11];
const alicesArray = [1, 5, 8, 12, 14, 19];
console.log(mergeArrays(myArray, alicesArray))