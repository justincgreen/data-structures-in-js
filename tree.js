/* 
  Basic Tree Data Structure
  https://adrianmejia.com/data-structures-for-beginners-trees-binary-search-tree-tutorial/
*/
class TreeNode {
  constructor(value) {
    this.value = value;
    this.children = [];
  }
}

// Create nodes
const root = new TreeNode("A");
const nodeB = new TreeNode("B");
const nodeC = new TreeNode("C");
const nodeD = new TreeNode("D");
const nodeE = new TreeNode("E");

// Build the tree
root.children.push(nodeB, nodeC, nodeD, nodeE);

console.log(root);

// console.log(root.children[1].value);