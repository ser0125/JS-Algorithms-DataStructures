class Node {
    constructor(val) {
        this.val = val;
        this.next = null;
    }
}

class SinglyLinkedList {
    constructor(){
        this.head = null;
        this.tail = null;
        this.length = 0;
    }
    push(val){
        let node = new Node(val);
        if(this.length === 0) {
            this.head = node;
            this.tail = node;
        } else {
            this.tail.next = node;
            this.tail = node;
        }
        this.length++;
        return this;
    }
     pop(){
        if(this.length === 0) return undefined;
        let current = this.head;
        let newTail = current;
        while(current.next) {
            newTail = current;
            current = current.next;
        }
        this.tail = newTail;
        this.tail.next = null;
        this.length--;
        if(this.length === 0){
            this.head = null;
            this.tail = null;
        }
        return current;


    }
    shift() {
        if(this.length === 0) return undefined;
        let currentHead = this.head;
        this.head = currentHead.next;
        this.length--;
        if(this.length === 0){
            this.head = null;
            this.tail = null;
        }
        return currentHead
    }
    unshift(val) {
        let newNode = new Node(val);
        if(this.length === 0){
            this.head = newNode;
            this.tail = newNode;
        } else {
            newNode.next = this.head;
            this.head = newNode;
        }
        this.length++
        return this
    }
    get(index) {
        if(index < 0 || index >= this.length) return null;
        let node = this.head;
        for(let i = 0; i < this.length; i++) {
            if(i === index){
                return node;
            } else {
                node = node.next;
            }
        }
    }
    set(index, val) {
        let foundNode = this.get(index);
        if(foundNode) {
            foundNode.val = val;
            return true;
        }
        return false;
    }
    insert(index, val) {
        if(index < 0 || index > this.length) return false;
        if(index === this.length) return !!this.push(val);
        if(index === 0) return !!this.unshift(val);
        const newNode = new Node(val);
        const previousNode = this.get(index-1);
        const nextNode = previousNode.next;
        previousNode.next = newNode;
        newNode.next = nextNode;
        this.length++;
        return true;
    }
    remove(index){
        if(index < 0 || index >= this.length) return undefined;
        if(index === this.length-1) return this.pop();
        if(index === 0) return this.shift();
        const previousNode = this.get(index-1);
        const removeNode = previousNode.next;
        previousNode.next = removeNode.next;
        this.length--;
        return removeNode
    }
    reverse() {
        let node = this.head;
        this.head = this.tail;
        this.tail = node;
        let next = this.tail.next;
        let prev = null;
        for(let i= 0; i < this.length; i++) {
            next = node.next;
            node.next = prev;
            prev = node;
            node = next;
        }
        return this;
    }
}

/* let first = new Node("Hi")
first.next = new Node("there")
first.next.next = new Node("How")
first.next.next.next = new Node("are")
first.next.next.next.next = new Node("you") */

let list = new SinglyLinkedList();
list.push("HELLO")
list.push("GOODBYE")
console.log(list.pop())
console.log(list.pop())
console.log(list)
list.push("Sergio")
list.push("Llanos")
console.log(list)
list.shift()
console.log(list)
list.unshift("karina")
list.unshift("Isabel")
console.log(list)
console.log(list.get(0))
console.log(list.set(0, 'Acosta'))
console.log(list)
list.insert(0,"Alexa")
list.insert(1,"SSSSS")
list.insert(5,"Alex")
console.log(list)
console.log(list.remove(0))
console.log(list.remove(4))
console.log(list)
console.log(list.reverse())