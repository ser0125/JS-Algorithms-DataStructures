class Queue {
    constructor() {
        this.first = null;
        this.last = null;
        this.size = 0;
    }
}

class Node {
    constructor(val) {
        this.val = val;
        this.next = null;
    }
    enqueue(val) {
    let newNode = new Node(val);
    if(!this.length) {
        this.first = newNode;
        this.last = newNode;
    } else {
        this.last.next = newNode;
        this.last = newNode;
    }
    return ++this.size;
    }
    dequeue() {
        if(!this.length) return null;
        let temp = this.first;
        if(this.first === this.last) {
            this.last = null;
        }
        this.first = this.first.next;
        this.size--;
        return temp.value;
    }
}