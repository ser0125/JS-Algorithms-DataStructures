class Stack {
    constructor() {
        this.first = null;
        this.last = null;
        this.size = 0;
    }
    push(val){
        const newNode = new Node(val);
        if(this.size === 0) {
            this.first = newNode
            this.last = newNode
        }
        let currentFirst = this.first;
        this.first = newNode;
        newNode.next = currentFirst
        return ++this.size;

    }
    pop() {
        if(!this.first) return null;
        let temp = this.first;
        if(this.first === this.last) {
            this.last = null
        }
        this.first = this.first.next;
        this.size--;
        return temp.value;
    }
}

class Node {
    constructor(val) {
        this.val = val;
        this.next = null;
    }
}

let stack = new Stack();
stack.push(34);
stack.push(22);
console.log(stack)