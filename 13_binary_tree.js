class BinaryTree {
  constructor() {
    this.root = null;
  }

  add(value) {
    if (!this.root) {
      this.root = new TreeNode(value);
    } else {
      let node = this.root;
      let newNode = new TreeNode(value);

      while (node) {
        if (value > node.value) {
          //если нет правого поддерева
          if (!node.right) {
            break
          }

          //присваиваем текущей ноде правое поддерево
          node = node.right;
        } else {
          if (!node.left) {
            break
          }

          //присваиваем текущей ноде левое поддерево
          node = node.left;
        }

        //после цикла получаем ноду, которая распологаетс в самом низу дерева
      }
      if (value > node.value) {
        node.right = newNode;
      } else {
        node.left = newNode;
      }
    }
  }

  print(root = this.root) {
    if (!root) {
      return true;
    }

    console.log(root.value, root.left, root.right);
    this.print(root.left);
    this.print(root.right);
  }
}

class TreeNode{
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

const tree = new BinaryTree();
tree.add(5);
tree.add(2);
tree.add(6);
tree.add(2);
tree.add(1);
tree.print();