// function findRotationPoint(words) {
//    let front = [...words].sort()[0];
//    let b = words.indexOf(front);
//    return b;
// }

function findRotationPoint(words) {
  let firstWord = words[0]
  let floorIndex = 0
  let ceilingIndex = words.length - 1
  while(floorIndex < ceilingIndex){
    const guessIndex = Math.floor(floorIndex + ((ceilingIndex - floorIndex)/2))
    
    if(words[guessIndex] >= firstWord) {
      floorIndex = guessIndex
    } else {
      ceilingIndex = guessIndex
    }
    if(floorIndex + 1 === ceilingIndex){
      break;
    } 
  }
  return ceilingIndex;
}


let arr = [
  "ptolemaic", //0
  "retrograde",
  "supplant",
  "undulate",
  "xenoepist",
  "asymptote", // <-- rotates here! 5
  "babka",
  "banoffee",
  "engender",
  "karpatka",
  "othellolagkage", // 10
];
console.log(findRotationPoint(arr)); // should return 5