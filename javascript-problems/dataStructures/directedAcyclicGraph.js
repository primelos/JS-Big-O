function DAG() {
  this.nodes = [];
  this.vertices = {};
}

DAG.prototype.add = function (node) {
  if (!node) {
    return;
  }
  if (this.vertices[node]) {
    return this.vertices[node];
  }
  const vertex = {
    node: node,
    incoming: {},
    incomingNodes: [],
    hasOutgoing: false,
    value: null,
  };
  this.vertices[node] = vertex;
  this.nodes.push(node);
  return vertex;
};

function visit(vertex, fn, visited, path) {
  const name = vertex.name,
  vertices = vertex.incoming,
  names = vertex.incomingNames,
  len = names.length,
  i;
  if (!visited) {
    visited = {};
  }
  if (!path) {
    path = [];
  }
  if (visited.hasOwnProperty(name)) {
    return;
  }
  path.push(name);
  visited[name] = true;
  for (i = 0; i < len; i++) {
    visit(vertices[names[i]], fn, visited, path);
  }
  fn(vertex, path);
  path.pop();
}

DAG.prototype.addEdge = function(fromName, toName) {
  if (!fromName || !toName || fromName === toName) {
  return;
  }
  const from = this.add(fromName)
  const to = this.add(toName);
  if (to.incoming.hasOwnProperty(fromName)) {
  return;
  }
  function checkCycle(vertex, path) {
    if (vertex.name === toName) {
    throw new Error(“Theres a cycle foo!!!!!“));
    }
  }
  visit(from, checkCycle);
  from.hasOutgoing = true;
  to.incoming[fromName] = from;
  to.incomingNames.push(fromName);
};