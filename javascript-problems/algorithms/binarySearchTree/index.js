class BSTNode {
  constructor(key, value) {
    this.key = key;
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

class BST {
  constructor() {
    this.root = new BSTNode(null, null);

    this.insert.bind(this);
    this.find.bind(this);
    this.remove.bind(this);
    this.isEmpty.bind(this);
  }
  insert(key, value) {}

  find(key) {}

  remove(key) {}

  isEmpty() {
    return this.root.key === null;
  }
}
///////

const tree = new BST();

tree.insert(
  "NodeJS",
  "Node.js is an open-source, cross-platform JavaScript run-time environment that executes JavaScript code outside of a browser."
);
tree.insert(
  "Python",
  "Python is an interpreted, high-level, general-purpose programming language."
);
tree.insert("C++", "C++ is a general-purpose programming language.");
tree.insert(
  "Ruby",
  "Ruby is a dynamic, interpreted, reflective, object-oriented, general-purpose programming language."
);
tree.insert(
  "Haskell",
  "Haskell is a standardized, general-purpose, purely functional programming language with non-strict semantics and strong static typing."
);

tree.remove("C++");

console.log(`\nNodeJS Definition: ${tree.find("NodeJS")}\n`);
console.log(`\nTree: ${JSON.stringify(tree, null, 2)}\n`);
