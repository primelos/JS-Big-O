const airports = 'PHX BKK OKC JFK LAX MEX EZE HEL LOS LAP LIM'.split(' ')

const routes = [
  ["PHX", "LAX"],
  ['PHX', "JFK"],
  ["JFK", "OKC"],
  ["JFK", "HEL"],
  ["JFK", "LOS"],
  ["MEX", "LAX"],
  ["MEX", "BKK"],
  ["MEX", "LIM"],
  ["MEX", "EZE"],
  ["LIM", "BKK"]
];

const adjacencyList = new Map()
// console.log(adjacencyList);

function addNode(airport){
    adjacencyList.set(airport, [])    
}
function addEdge( origin, destination) {
    adjacencyList.get(origin).push(destination)
    adjacencyList.get(destination).push(origin)
}

airports.forEach(addNode)
routes.forEach(route => addEdge(...route))

console.log(adjacencyList)
// console.log(airports)

function dfs(start, visited = new Set()){
    // console.log(start);
    visited.add(start)
    // console.log(visited);
    let steps = 0

    const destinations = adjacencyList.get(start)
    console.log(destinations);
    for(let i of destinations){
        steps++;                   
        if(i === 'BKK'){
            console.log(`found in ${steps}`);
            return 
        }
        console.log(visited);
        steps++;
        if(!visited.has(i)){
            dfs(i, visited)
            
        }
    }
    
}

console.log(dfs('PHX'))