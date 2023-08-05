class Node {
  constructor(val) {
    this.value = val;
    this.left = null;
    this.right = null;
  }
}

class BinarySearchTree {
  constructor() {
    this.root = null;
  }
  insert(val) {
    let newNode = new Node(val);
    if (!this.root) {
      this.root = newNode;
      return this;
    } else {
      let tempNode = this.root;
      while (true) {
        if (val === tempNode.value) return undefined;
        if (newNode.value > tempNode.value) {
          if (tempNode.right) {
            tempNode = tempNode.right;
          } else {
            tempNode.right = newNode;
            return this;
          }
        } else {
          if (tempNode.left) {
            tempNode = tempNode.left;
          } else {
            tempNode.left = newNode;
            return this;
          }
        }
      }
    }
  }

  find(val) {
    let newNode = new Node(val);
    if (!this.root) return false;
    let tempNode = this.root;
    while (tempNode) {
      if (val === tempNode.value) return true;
      if (newNode.value > tempNode.value) {
          tempNode = tempNode.right;
      } else {
          tempNode = tempNode.left;
      }
    }
    return false;
  }
}

let tree = new BinarySearchTree();
tree.insert(20);
tree.insert(12);
tree.insert(22);
tree.insert(2);

let tree2 = new BinarySearchTree();
console.log(tree2.find(20));
