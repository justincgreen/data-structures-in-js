/*
  Queue data structure
*/

// Class for each node within the queue
class Node {
  constructor(value) {
    this.value = value;
    this.next = null
  }
}

// Class for the queue
class Queue {
  constructor(){
    this.first = null;
    this.last = null;
    this.size = 0;
  }
  
  // Enqueue method receives a value and adds it to the end of the queue
  enqueue(val) {
    var newNode = new Node(val);
    if(!this.first) {
      this.first = newNode;
      this.last = newNode;
    }else {
      this.last.next = newNode;
      this.last = newNode;
    }
    return ++this.size;
  }
  
  // The dequeue method eliminates the element at the beginning of the queue and returns its value
  dequeue() {
    if(!this.first) return null;
    
    var temp = this.first;
    if(this.first === this.last) {
      this.last = null;
    }
    this.first = this.first.next;
    this.size--;
    return temp.value;
  }
}

const quickQueue = new Queue;
quickQueue.enqueue('value1');
quickQueue.enqueue('value2');
console.log(quickQueue);
console.log(quickQueue.dequeue()); // remove first item in queue