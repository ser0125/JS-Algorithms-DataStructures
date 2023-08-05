class MaxBinaryHeap {
  constructor() {
    this.values = [];
  }
  insert(value) {
    this.values.push(value);
    let index = this.values.length - 1;
    while (index > 0) {
      let parentIndex = Math.floor((index - 1) / 2);
      let parent = this.values[parentIndex];
      if (parent >= value) break;
      this.values[parentIndex] = value;
      this.values[index] = parent;
      index = parentIndex;
    }
    return this;
  }
  extractMax() {
    const max = this.values[0];
    const last = this.values.pop();
    if (this.value.length > 0) {
      this.values[0] = last;
      this.sinkDown(last);
    }
    return max;
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
        if (leftChild > last) {
          swap = leftChildIndex;
        }
      }
      if (rightChildIndex < length) {
        rightChild = this.values[rightChildIndex];
        if (
          (swap === null && rightChild > last) ||
          (swap !== null && rightChild > leftChild)
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

const newHeap = new MaxBinaryHeap();
newHeap.values.push(100);
newHeap.values.push(19);
newHeap.values.push(36);
newHeap.values.push(17);
newHeap.values.push(12);
newHeap.values.push(25);
newHeap.insert(45);
newHeap.extractMax();
newHeap.insert(46);
newHeap.insert(44);
newHeap.insert(49);
newHeap.extractMax();
newHeap.extractMax();
console.log(newHeap);
