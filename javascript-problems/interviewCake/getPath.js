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

function reconstructPath(howWeReachedNodes, startNode, endNode) {
  const reversedShortestPath = [];
  let currentNode = endNode;

  while (currentNode !== null) {
    reversedShortestPath.push(currentNode);
    currentNode = howWeReachedNodes[currentNode];
  }
  return reversedShortestPath.reverse();
}

function getPath(graph, startNode, endNode) {
  // console.log(graph['a'], endNode)
  if (!graph.hasOwnProperty(startNode)) {
    throw new Error("Start node in graph!");
  }
  if (!graph.hasOwnProperty(endNode)) {
    throw new Error("End node not in graph!");
  }

  let nodesToVisit = new Queue();
  nodesToVisit.enqueue(startNode);
  console.log(nodesToVisit);

  const howWeReachedNodes = {};
  howWeReachedNodes[startNode] = null;
  console.log("nodesToVisit", howWeReachedNodes);

  while (nodesToVisit.size > 0) {
    const currentNode = nodesToVisit.dequeue();
    if (currentNode === endNode) {
      return reconstructPath(howWeReachedNodes, startNode, endNode);
    }

    console.log("howWeReachedNodes", howWeReachedNodes);

    graph[currentNode].forEach((neighbor) => {
      if (!howWeReachedNodes.hasOwnProperty(neighbor)) {
        nodesToVisit.enqueue(neighbor);

        howWeReachedNodes[neighbor] = currentNode;
        console.log("HIT");
      }
    });
  }
  // Find the shortest route in the network between the two users

  return null;
}
