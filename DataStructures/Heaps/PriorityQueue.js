class Node {
  constructor(val, priority) {
    this.val = val;
    this.priority = priority;
  }
}

class PriorityQueue {
  constructor() {
    this.values = [];
  }
  enqueue(val, priority) {
    const newNode = new Node(val, priority);
    this.values.push(newNode);
    let index = this.values.length - 1;
    while (index > 0) {
      let parentNodeIndex = Math.floor((index - 1) / 2);
      let parentNode = this.values[parentNodeIndex];
      if (parentNode.priority > newNode.priority) {
        this.values[parentNodeIndex] = newNode;
        this.values[index] = parentNode;
        index = parentNodeIndex;
      } else {
        break;
      }
    }
    return this;
  }
  dequeue() {
    const min = this.values[0];
    const last = this.values.pop();
    if (this.values.length > 0) {
      this.values[0] = last;
      this.sinkDown(last);
    }
    return min;
  }
  sinkDown(last) {
    let count = 0;
    const length = this.values.length;
    while (true) {
      const leftChildIndex = 2 * count + 1;
      const rightChildIndex = 2 * count + 2;
      let leftChild, rightChild;
      let swap = null;
      if (leftChildIndex < length) {
        leftChild = this.values[leftChildIndex];
        if (leftChild.priority < last.priority) {
          swap = leftChildIndex;
        }
      }
      if (rightChildIndex < length) {
        rightChild = this.values[rightChildIndex];
        if (
          (swap === null && rightChild.priority < last.priority) ||
          (swap !== null && rightChild.priority < leftChild.priority)
        ) {
          swap = rightChildIndex;
        }
      }
      if (swap === null) break;
      this.values[count] = this.values[swap];
      this.values[swap] = last;
      count = swap;
    }
  }
}

const priorityQueue = new PriorityQueue();
priorityQueue.values.push(new Node(7, 3));
priorityQueue.values.push(new Node(2, 6));
priorityQueue.values.push(new Node(10, 5));
priorityQueue.values.push(new Node(19, 8));
priorityQueue.values.push(new Node(77, 9));
priorityQueue.enqueue(45, 4);
console.log(priorityQueue.dequeue());
console.log(priorityQueue.dequeue());
console.log(priorityQueue);
