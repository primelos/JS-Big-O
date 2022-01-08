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

  isEmpty() {}
}

module.exports = BST;
