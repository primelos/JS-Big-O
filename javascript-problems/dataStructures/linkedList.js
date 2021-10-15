var Node = function (val) {
  this.val = val;
  this.next = null;
};

var MyLinkedList = function (val) {
  this.head = val;
  this.tail = val;
  this.size = 0;
};

MyLinkedList.prototype.get = function (index) {
  if (index < 0 || index > this.size - 1 || this.size === 0) {
    return -1;
  }
  let cur = this.head;
  for (let i = 0; i < index; i++) {
    cur = cur.next;
  }
  return cur.val;
};

MyLinkedList.prototype.addAtHead = function (val) {
  let node = new Node(val);
  if (this.head !== null) {
    // temp = this.head
    node.next = this.head;
    // temp.next = this.tail
    this.head = node;
  }
  this.size += 1;
};

MyLinkedList.prototype.addAtTail = function (val) {
  let node = new Node(val);
  if (this.tail !== null) {
    this.tail.next = node;
    this.tail = node;
  } else {
    this.tail = node;
  }
  this.size += 1;
};

MyLinkedList.prototype.addAtIndex = function (index, val) {
  if (index < 0 || index > this.size) return;
  if (index === 0) {
    return this.addAtHead(val);
  }
  if (index === this.size) {
    return this.addAtTail(val);
  }
  let temp = this.head;
  let node = new Node(val);
  for (let i = 0; i < index - 1; i++) {
    temp = temp.next;
  }
  node.next = temp.next ? temp.next : null;
  temp.next = node;
  this.size += 1;
};

MyLinkedList.prototype.deleteAtIndex = function (index) {
  if (index < 0 || index > this.size) return;
  if (index === 0) {
    this.head = this.head.next;
    this.size--;
    return;
  }
  let temp = this.head;
  for (let i = 0; i < index - 1; i++) {
    let temp = temp.next;
  }
  temp.next = temp.next.next ? temp.next.next : null;
  if (!temp.next) {
    this.tail = temp;
  }
  this.size -= 1;
};

var test = new Node(2);

var lis = new MyLinkedList(test);

console.log(lis);
let p = lis.addAtHead(7);
// lis.addAtTail(8)
// lis.addAtIndex(1,10)

console.log(lis);

// practice // class linked list /////

class ListNode {
  constructor(data) {
    (this.data = data), (this.next = null);
  }
}

class LinkedList {
  constructor(head = null) {
    this.head = head;
  }

  size() {
    let count = 0;
    let node = this.head;
    while (node) {
      count++;
      node = node.next;
    }
    return count;
  }

  clear() {
    this.head = null;
  }

  getLast() {
    let node = this.head;
    if (node) {
      while (node.next) {
        node = node.next;
      }
    }
    return node;
  }

  getFirst() {
    return this.head;
  }

  insertHead(data) {
    let node = new ListNode(data);
    node.next = this.head;
    this.head = node;
    return this.head;
  }

  insertAtTail(data) {
    let node = new ListNode(data);
    let last = this.getLast();
    last.next = node;
    return last;
  }

  printAllNodes() {
    let node = this.head;

    while (node) {
      console.log(node.data);
      node = node.next;
    }
  }
}

let node1 = new ListNode(2);
let node2 = new ListNode(5);
node1.next = node2;
console.log();
console.log(node1);

let list = new LinkedList(node1);

// console.log(list)
// let node3 = new ListNode(22)
// node2.next = node3

list.insertHead(13);
// console.log('first ->', list.getFirst())

list.insertAtTail(7);
list.insertAtTail(56);
console.log("tail ->", list.getLast());

// console.log(list.size())

console.log("all", list.printAllNodes());
