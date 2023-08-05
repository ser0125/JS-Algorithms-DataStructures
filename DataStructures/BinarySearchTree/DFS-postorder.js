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
  traverse() {
    if (!this.root) return undefined;
    let temp = this.root;
    let res = [];
    this.helperTraverse(temp, res);
    return res;
  }
  helperTraverse(node, res) {
    if (node.left) {
      this.helperTraverse(node.left, res);
    }
    if (node.right) {
      this.helperTraverse(node.right, res);
    }
    res.push(node.value);
  }
}

const tree = new BinarySearchTree();
const newNode = new Node(10);
newNode.right = new Node(15);
newNode.right.right = new Node(20);
newNode.left = new Node(6);
newNode.left.left = new Node(3);
newNode.left.right = new Node(8);
tree.root = newNode;
console.log(tree);
console.log(tree.traverse());
//
