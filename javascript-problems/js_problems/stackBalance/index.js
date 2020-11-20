// "use strict";
// const Stack = --require('./stack')
class Stack {
  constructor() {
    this.items = [];
    this.top = null;
  }
  getTop() {
    if (this.items.length == 0) {
        return null;
    }
    return this.top;
  }
  isEmpty() {
    return this.items.length == 0;
  }
  size() {
    return this.items.length;
  }
  push(element) {
    this.items.push(element);
    this.top = element;
  }
  pop() {
    if (this.items.length !== 0) {
      if (this.items.length == 1) {
        this.top = null;
        return this.items.pop();
      } else {
        this.top = this.items[this.items.length - 2];
        return this.items.pop();
      }
    } else {
      return null;
    }
  }
}

// let Stacks = new Stack()

function isBalanced(exp) {
    let myStack = new Stack()
        console.log(myStack);

    for(let i = 0; i < exp.length; i++){
        console.log(exp[i])
        if(exp[i] === '}' || exp[i] === ')' || exp[i] === ']') {
            if(myStack.isEmpty()) {
                console.log('hit')
                return false
            }
            let output = myStack.pop()
            console.log(output)
            if(((exp[i] == '}') && (output != '{')) || ((exp[i] == ')') && (output != '(')) || ((exp[i] == ']') && (output != '['))) {
                console.log('hit')
                return  false
            }
        } else {
            myStack.push(exp[i])
            console.log(exp[i])
        }
    }
    console.log(myStack)
    if(myStack.isEmpty() == false) {
        return false
    }
    return true
}

// let inputString = "{[()]}";
// console.log(inputString);
// console.log(isBalanced(inputString));

let inputString2 = "{}{[()]}";
console.log(inputString2);
console.log(isBalanced(inputString2));