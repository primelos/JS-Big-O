class Stack {
  constructor(){
    this.items = []
  }
  push(item){
    this.items.push(item)
  }
  pop(){
    if(!this.items.length){
      return null
    }
    return this.items.pop()
  }
  peek(){
    if(!this.items.length){
      return null
    }
    return this.items[this.items.length - 1]
  }
}

class GetMax {
  constructor(){
    this.maxStack = new Stack()
    this.stack = new Stack()
  }
  push(item){
    // console.log(this.maxStack);
    this.stack.push(item)
    if(this.maxStack.peek() === null || item >= this.maxStack.peek()){
      this.maxStack.push(item)
    }
  }
  pop(){
    const item = this.stack.pop()
    if(item === this.maxStack.peek()){
      this.maxStack.pop()
    }
  }
  getMax(item){
    return this.maxStack.peek()
  
}
}

const a = new GetMax()
a.push(42)
a.push(34)
a.push(56);
a.push(18);
a.push(10);
// a.pop()
console.log(a);

console.log(a.getMax());

const b = new Stack();
b.push(42);
b.push(34);
b.push(56);
b.push(18);
b.push(10);
console.log(b.peek());
// b.pop()
// a.items.forEach(x => {
//   console.log(x);
// })


// function isPrimeBruteForce(n) {
//   const highestPossibleFactor = Math.floor(Math.sqrt(n));
//   console.log(highestPossibleFactor);
//   for (
//     let potentialFactor = 2;
//     potentialFactor <= highestPossibleFactor;
//     potentialFactor++
//   ) {
//     if (n % potentialFactor === 0) {
//       return false;
//     }
//   }
//   return true;
// }

// function isPrime(n) {
//   return isPrimeBruteForce(n);
// }

//   console.log(isPrime(6));