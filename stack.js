/*
  Stack data structure
*/

class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class Stack {
  constructor() {
    this.first = null;
    this.last = null;
    this.size = 0;
  }
  
  push(val) {
    var newNode = new Node(val);
    if(!this.first) {
      this.first = newNode;
      this.last = newNode;
    }else {
      var temp = this.first;
      this.first = newNode;
      this.first.next = temp;
    }
    return ++this.size;
  }
  
  pop() {
    if(!this.first) return null;
    var temp = this.first
    if(this.first === this.last) {
      this.last = null;
    }
    this.first = this.first.next;
    this.size--;
    return temp.value;
  }
}

const myStack = new Stack;
myStack.push('value1');
myStack.push('value2');
myStack.push('value3');
myStack.push('value4');
//console.log(myStack.pop()); // pull 4 out of the stack
//console.log(myStack); // 3 left

console.log(myStack);