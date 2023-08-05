class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
    this.prev = null;
  }
}

class DoublyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }
  push(val) {
    const newNode = new Node(val);
    if (this.length === 0) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      newNode.prev = this.tail;
      this.tail.next = newNode;
      this.tail = newNode;
    }
    this.length++;
    return this;
  }
  pop() {
    if (this.length === 0) return undefined;
    const tempTail = this.tail;
    if (this.length === 1) {
      this.head = null;
      this.tail = null;
    } else {
      this.tail = this.tail.prev;
      this.tail.next = null;
      tempTail.prev = null;
    }
    this.length--;
    return tempTail;
  }
  shift() {
    if (this.length === 0) return undefined;
    let temp = this.head;
    if (this.length === 1) {
      this.head = null;
      this.tail = null;
    } else {
      this.head = this.head.next;
      temp.next = null;
      this.head.prev = null;
    }
    this.length--;
    return temp;
  }
  unshift(val){
    const newNode = new Node(val);
    if (this.length === 0) {
        this.head = newNode;
        this.tail = newNode;
    } else {
        this.head.prev = newNode;
        newNode.next = this.head;
        this.head = newNode
    }
    this.length++;
    return this;
  }
  get(index){
    if(index < 0 || index >= this.length) return undefined;
    if(index <= this.length/2){
        let tempCurrent = this.head
        for(let i = 0; i <= this.length/2; i++) {
            if(i === index) {
                return tempCurrent;
            }
            tempCurrent = tempCurrent.next;
        }
    } else {
        for(let i = this.length-1; i > this.length/2; i++) {
            let tempCurrent = this.tail
            if(i === index) {
                return tempCurrent;
            }
            tempCurrent = tail.prev;
        }
    }
  }
  set(val,index) {
    let foundNode = this.get(index);
    if(foundNode) {
        foundNode.val = val;
        return true;
    }
    return false
  }
  insert(val, index) {
    if(index < 0 || index > this.length) return false;
    if(index === 0) !!this.unshift(val);
    if(index === this.length) !!this.push(val);

    const newNode = new Node(val);
    const getNode = this.get(index);

    newNode.prev = getNode.prev;
    getNode.prev.next = newNode;
    newNode.next = getNode;
    getNode.prev = newNode;

    this.length++;
    return true;

  }
  remove(index) {
    if(index < 0 || index > this.length) return undefined;
    if(index === 0) !!this.shift();
    if(index === this.length - 1) !!this.pop();
    
    const getNode = this.get(index);
    const afterNode = getNode.next
    const prevNode = getNode.prev

    afterNode.prev = prevNode;
    prevNode.next = afterNode;

    getNode.next = null;
    getNode.prev = null;

    this.length--;
    return getNode;
  }
}

let list = new DoublyLinkedList();
list.push(4);
list.push(18);
console.log(list.pop());
console.log(list.pop());
console.log(list.pop());
list.push(27);
list.push(13);
console.log(list.shift());
list.push(24);
list.unshift(2)
console.log(list)
console.log('----')
console.log(list.get(1));
console.log(list.set(77, 1));
console.log(list);
list.insert(34,2)
list.remove(2)
console.log(list)