/*
  Binary Search Tree (BST)
  Binary trees are a type of tree in which each node has a maximum of two children.
*/
// We create a class for each node within the tree
class Node{
  // Each node has three properties, its value, a pointer that indicates the node to its left and a pointer that indicates the node to its right
  constructor(value){
    this.value = value;
    this.left = null;
    this.right = null;
  }
}