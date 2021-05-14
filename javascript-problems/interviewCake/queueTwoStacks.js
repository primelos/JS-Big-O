class Stack {
  constructor(){
    this.items = []
  }
  push(item){
    this.items.push(item)
  }
  pop(){
    if(this.items.length === 0){
      return null
    }
    return this.items.pop()
  }
  peek(){
    if(this.items.length === 0){
      return null
    }
    return this.items[this.items.length - 1]
  }
  length(){
    return this.items.length
  }
}

class Queue {
  constructor(){
    this.stack1 = new Stack()
    this.stack2 = new Stack()
  }
  enqueue(item){
    this.stack1.push(item)
  }
  dequeue(){
    if(this.stack2.length() === 0) {
      while(this.stack1.length() > 0){
        let moveToStack2 = this.stack1.pop()
        this.stack2.push(moveToStack2)
      }
      if(this.stack2.length() === 0){
        throw new Error('Queue Empty')
      }
    }
    return this.stack2.pop()
  }
}

let q = new Queue()
q.enqueue(1)
q.enqueue(2);
q.dequeue();

q.enqueue(3);
q.enqueue(4);

console.log(q);

q.dequeue()
q.dequeue();
q.enqueue(5);
q.enqueue(6);
q.enqueue(7);



console.log(q);