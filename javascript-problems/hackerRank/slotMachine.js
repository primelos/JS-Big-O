// 1 3 7
// 3 6 4
// 1 1 5
// 7 2 4

// 7 + 4 +3 = 14

function slotWheels(history) {
    // Write your code here
    console.log('history',history)
    let sortedSpins = []
    for(let i = 0; i < history.length; i++){
        // let container = Array.from(scenarios[i].split(' '), Number)
        sortedSpins.push(Array.from(history[i].split(''), Number).sort((a,b) => a-b))
    }
    console.log('sortedSpins',sortedSpins)
    let spinNum = history[0].length
    console.log('spinNum',spinNum)
    
    let wheels = []
    let totalStops = 0
    for(let j = 0; j < spinNum; j++){
        console.log('j', sortedSpins[j])
        for(let k = 0; k < sortedSpins.length; k++){
            console.log('sortedSpins[k][j]',sortedSpins[k][j])
            wheels.push(sortedSpins[k][j])
            
        }
        totalStops += Math.max(...wheels)
        console.log('wheels',wheels)
        wheels = []
    }
    // console.log('totalStops',totalStops)
    return totalStops
}