// A simple, somewhat inefficient queue implementation
class Queue {
  constructor() {
    this.queue = [];
    this.size = 0;
  }

  enqueue(item) {
    this.queue.unshift(item);
    this.size += 1;
  }

  dequeue() {
    this.size -= 1;
    return this.queue.pop();
  }
}

function getPath(graph, startNode, endNode) {
  console.log(graph);

  if (!graph.hasOwnProperty(startNode)) {
    throw new Error("start node not in graph");
  }
  if (!graph.hasOwnProperty(endNode)) {
    throw new Error("End node not in graph");
  }

  const nodesToVisit = new Queue();
  nodesToVisit.enqueue(startNode);

  // const nodesAlreadySeen = new Set([startNode])

  const howWeReachedNodes = {};
  howWeReachedNodes[startNode] = null;

  while (nodesToVisit.size > 0) {
    const currentNode = nodesToVisit.dequeue();
    console.log(currentNode);

    if (currentNode === endNode) {
      return reconsructPath(howWeReachedNodes, endNode);
    }
    graph[currentNode].forEach((neighbor) => {
      console.log(currentNode);
      console.log(graph[currentNode]);

      console.log(neighbor)
      if (!howWeReachedNodes.hasOwnProperty(neighbor)) {
        console.log(neighbor);

        nodesToVisit.enqueue(neighbor);
        console.log(nodesToVisit.queue);

        howWeReachedNodes[neighbor] = currentNode;
        console.log(howWeReachedNodes)
      }
    });
  }
  return null;
}


function reconsructPath(howWeReachedNodes, endNode) {
  console.log(howWeReachedNodes);

  const reversedShortestPath = [];
  let currentNode = endNode;
  while (currentNode !== null) {
    console.log(currentNode);
    reversedShortestPath.push(currentNode);
    currentNode = howWeReachedNodes[currentNode];
  }
  return reversedShortestPath.reverse();
}



const graph = {
  a: ["b", "c", "d"],
  b: ["a", "d"],
  c: ["a", "e"],
  d: ["a", "b"],
  e: ["c"],
  f: ["g"],
  g: ["f"],
};

console.log(getPath(graph, 'a', 'e'))