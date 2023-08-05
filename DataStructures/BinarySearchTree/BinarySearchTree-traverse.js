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
    let temp = this.root;
    let queue = [];
    queue.push(temp);
    let visited = [];
    while (queue.length) {
      temp = queue.shift();
      visited.push(temp.value);
      if (temp.left) queue.push(temp.left);
      if (temp.right) queue.push(temp.right);
    }
    return visited;
  }
}

const tree = new BinarySearchTree();
const newNode = new Node(10);
newNode.right = new Node(6);
newNode.right.right = new Node(3);
newNode.left = new Node(143);
tree.root = newNode;
console.log(tree);
console.log(tree.traverse());
//
