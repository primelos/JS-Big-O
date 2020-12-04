// TWITTER CHALLENGE

// 10 2 5
// 12 4 4
// 6  2 2
// result
// 6
// 3
// 5
function maximumContainers(scenarios) {
    // Write your code here
    // console.log('1',scenarios[0])
    for(let i = 0; i < scenarios.length; i++){
        let container = Array.from(scenarios[i].split(' '), Number)
        console.log(container)
        let containerTotal = Math.floor(container[0] / container[1])
        console.log(containerTotal)
        let compareWith = containerTotal
        console.log(compareWith);
        
        while(Math.floor(compareWith/container[2]) > 0){
            containerTotal += Math.floor(compareWith/container[2])
            compareWith = Math.floor(compareWith/container[2] + (compareWith % container[2]))
        }   
        console.log(containerTotal)
        }
    }

    console.log(maximumContainers(["10 2 5", "12 4 4", "6 2 2"]));
    