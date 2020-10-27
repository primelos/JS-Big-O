function rotateLeft(arr, rotations){
    const rotatedArray = arr.concat()
    for(let i = 0; i < rotations; i++) {
        let frontItem = rotatedArray.shift()
        rotatedArray.push(frontItem)
    }
    return rotatedArray
}

const rotation = 6
const testArray = [1,2,3,4,5]

console.log(rotateLeft(testArray, rotation))
