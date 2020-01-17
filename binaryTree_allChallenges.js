/* 
Data Structures: Binary Tree Challenges

!!!change the currentNode2 to Node!


Check if an Element is Present in a Binary Search Tree
Check if Tree is Binary Search Tree
Find the Minimum and Maximum Height of a Binary Search Tree
Use Depth First Search in a Binary Search Tree
Use Breadth First Search in a Binary Search Tree
Delete a Leaf Node in a Binary Search Tree
Delete a Node with One Child in a Binary Search Tree
Delete a Node with Two Children in a Binary Search Tree
Invert a Binary Tree
*/

function customNode2(value) {
  this.value = value;
  this.left = null;
  this.right = null;
}
function BinarySearchTree() {
  this.root = null;
  // change code below this line

  //Add a New Element to a Binary Search Tree
  this.add = function(int) {
    let currentNodeMain = this.root;

    let newNode = new customNode2(int);

    //if the root is empty
    if (this.root == null) {
      this.root = newNode;
      return;
    }

    recursive(currentNodeMain);

    function recursive(currentNode) {
      //not adding anything if the value is already present
      if (currentNode.value === int) {
        return null;
      }
      //checking the left branch first
      if (int < currentNode.value) {
        //adding node if the end of the tree is reached
        if (currentNode.left == null) {
          currentNode.left = newNode;
          return;
        }

        currentNode = currentNode.left;

        return recursive(currentNode);
      }
      //checking the right branch second
      if (int > currentNode.value) {
        //adding node if the end of the tree is reached
        if (currentNode.right == null) {
          currentNode.right = newNode;
          return;
        }

        currentNode = currentNode.right;
        return recursive(currentNode);
      }
    }
  };

  //Find the Minimum and Maximum Value in a Binary Search Tree
  this.findMin = function(subtree = null) {
    if (this.root == null) {
      return null;
    }

    let currentNodeMain = this.root;

    let result = recursive(currentNodeMain);

    function recursive(currentNode) {
      let lowestValue;

      lowestValue = currentNode.value;
      //console.log("TCL: this.findMin -> lowestValue", lowestValue);

      if (currentNode.left == null) {
        return lowestValue;
      }
      currentNode = currentNode.left;
      return recursive(currentNode);
    }

    return result;
  };

  //Find the Minimum and Maximum Value in a Binary Search Tree
  this.findMax = function() {
    if (this.root == null) {
      return null;
    }

    let currentNodeMain = this.root;

    let result = recursive(currentNodeMain);

    function recursive(currentNode) {
      let highestValue;

      highestValue = currentNode.value;
      //console.log("TCL: this.findMin -> lowestValue", highestValue);

      if (currentNode.right == null) {
        return highestValue;
      }
      currentNode = currentNode.right;
      return recursive(currentNode);
    }

    return result;
  };

  //Check if an Element is Present in a Binary Search Tree
  this.isPresent = function(int) {
    if (this.root == null) {
      return false;
    }

    let currentNodeMain = this.root;

    let result = recursive(currentNodeMain);

    //console.log(result)
    return result;

    function recursive(currentNode) {
      let isPresent;

      if (currentNode.value === int) {
        isPresent = true;
        return isPresent;
      }

      //taking the left or the right subtree depending on the value of the int

      if (int < currentNode.value && currentNode.left != null) {
        return recursive(currentNode.left);
      }

      if (int > currentNode.value && currentNode.right != null) {
        return recursive(currentNode.right);
      }

      isPresent = false;
      return isPresent;
    }
  };

  //Check if Tree is Binary Search
  //change from method to functio to pass freeCodeCamp test
  this.isBinarySearchTree = function(tree) {
    let currentNodeMain = tree.root;

    let result = recursive(currentNodeMain);

    console.log(result);
    return result;

    function recursive(currentNode) {
      let resultLeft;

      let resultRight;

      if (currentNode.value.left > currentNode.value) {
        resultLeft = false;
      } else if (currentNode.value.left == null) {
        resultLeft = true;
      } else {
        resultLeft = recursive(currentNode.left);
      }

      if (currentNode.value.right < currentNode.value) {
        resultRight = false;
      } else if (currentNode.value.right == null) {
        resultRight = true;
      } else {
        resultRight = recursive(currentNode.right);
      }

      //results from both recursive subtrees must be true
      //for the method to return true
      if (resultLeft && resultRight) {
        return true;
      } else {
        return false;
      }
    }
  };

  // Find the Minimum and Maximum Height of a Binary Search
  //creating array of all height in the tree
  this.createArrayOfHeights = function() {
    let currentNodeMain = this.root;

    if (currentNodeMain == null) {
      return -1;
    }
    let arrayOfHeights = [];

    recursive(currentNodeMain, 0);

    console.log(arrayOfHeights);
    return arrayOfHeights;

    function recursive(currentNode, i) {
      if (currentNode.left == null && currentNode.right == null) {
        arrayOfHeights.push(i);
        return i;
      }

      if (currentNode.left != null) {
        recursive(currentNode.left, i + 1);
      }

      if (currentNode.right != null) {
        recursive(currentNode.right, i + 1);
      }

      return;
    }
  };

  this.findMinHeight = function() {
    let currentNodeMain = this.root;

    if (currentNodeMain == null) {
      return -1;
    }

    let arrayOfHeights = this.createArrayOfHeights();

    let minimumHeight = Math.min(...arrayOfHeights);
    console.log("TCL: this.findMinHeight -> minimumHeight", minimumHeight);
    return minimumHeight;
  };

  //Find the Minimum and Maximum Height of a Binary Search
  this.findMaxHeight = function() {
    let currentNodeMain = this.root;

    if (currentNodeMain == null) {
      return -1;
    }

    let arrayOfHeights = this.createArrayOfHeights();

    let maximumHeight = Math.max(...arrayOfHeights);
    console.log("TCL: this.findMinHeight -> maximumHeight", maximumHeight);
    return maximumHeight;
  };

  //Find the Minimum and Maximum Height of a Binary Search
  this.isBalanced = function() {
    //if a tree is balanced, the minHeight & maxHeight can differ by only 1
    //absolute value of a number
    if (Math.abs(this.findMinHeight() - this.findMaxHeight) <= 1) {
      console.log(true);
      return true;
    } else {
      console.log(false);
      return false;
    }
  };

  //Use Depth First Search in a Binary Search TreePassed

  //inorder - Begin the search at the left-most node and end at the right-most node.
  //For a binary search tree, an inorder traversal returns the nodes in sorted order.
  this.inorder = function() {
    let currentNodeMain = this.root;

    if (this.root == null) {
      return null;
    }

    //method for deep cloning that not always work!!!
    //const objClone = JSON.parse(JSON.stringify(this.root))
    //console.log(JSON.stringify(objClone, null, 2))

    let result = recursive(currentNodeMain);

    console.log(JSON.stringify(currentNodeMain, null, 2));

    console.log("TCL: this.inorder -> result", result);
    return result;

    function recursive(currentNode) {
      let innerResult = [];
      //console.log('function run')

      if (currentNode == null) {
        return null;
      }

      if (currentNode.left == null && currentNode.right == null) {
        innerResult.push(currentNode.value);
        return innerResult;
      }

      //left side first
      innerResult = innerResult.concat(recursive(currentNode.left));
      innerResult.push(currentNode.value);
      innerResult = innerResult.concat(recursive(currentNode.right));

      return innerResult;
    }
  };
  //Use Depth First Search in a Binary Search TreePassed

  //preorder: explore all the roots before leaves
  this.preorder = function() {
    let currentNodeMain = this.root;

    if (this.root == null) {
      return null;
    }

    let result = recursive(currentNodeMain);

    //console.log(JSON.stringify(currentNodeMain, null, 2));

    console.log("TCL: this.preorder -> result", result);
    return result;

    function recursive(currentNode) {
      let innerResult = [];

      if (currentNode.left == null && currentNode.right == null) {
        innerResult.push(currentNode.value);
        return innerResult;
      }

      innerResult.push(currentNode.value);
      innerResult = innerResult.concat(recursive(currentNode.left));
      innerResult = innerResult.concat(recursive(currentNode.right));

      return innerResult;
    }
  };

  //Use Depth First Search in a Binary Search TreePassed

  //Post-order: Explore all the leaves before the roots.
  this.postorder = function() {
    let currentNodeMain = this.root;

    if (this.root == null) {
      return null;
    }

    let result = recursive(currentNodeMain);

    console.log("TCL: this.postorder -> result", result);
    return result;

    function recursive(currentNode) {
      let innerResult = [];

      if (currentNode.left == null && currentNode.right == null) {
        innerResult.push(currentNode.value);
        return innerResult;
      }

      innerResult = innerResult.concat(recursive(currentNode.left));
      innerResult = innerResult.concat(recursive(currentNode.right));
      innerResult.push(currentNode.value);

      return innerResult;
    }
  };

  //Use Breadth First Search in a Binary Search TreePassed
  //searches in the normal direction (light to right) at each level
  this.levelOrder = function() {
    let currentNodeMain = this.root;

    if (this.root == null) {
      return null;
    }

    let arrOfNodesMain = [];
    arrOfNodesMain.push(currentNodeMain);
    //node values
    let arrOfResult = [];
    //first function call: arrOfNodes contains only root node (1level)
    recursive(arrOfNodesMain);
    console.log("TCL: this.levelOrder -> arrOfResult", arrOfResult);

    return arrOfResult;

    function recursive(arrayOfNodes) {
      if (arrayOfNodes.length === 0) return;
      //array for the next recursive function call
      let arrOfNodesOut = [];

      for (let node of arrayOfNodes) {
        arrOfResult.push(node.value);

        if (node.left) {
          arrOfNodesOut.push(node.left);
        }

        if (node.right) {
          arrOfNodesOut.push(node.right);
        }
      }
      //2nd function call: arrOfNodes contains left & right children (2ndLevel)
      return recursive(arrOfNodesOut);
    }
  };

  //Use Breadth First Search in a Binary Search TreePassed
  //reverseLevelOrder searches in the reverse direction (right to left) at each level
  this.reverseLevelOrder = function() {
    let currentNodeMain = this.root;

    if (this.root == null) {
      return null;
    }

    let arrOfNodesMain = [];
    arrOfNodesMain.push(currentNodeMain);

    let arrOfResult = [];
    recursive(arrOfNodesMain);
    console.log("TCL: this.reverseLevelOrder -> arrOfResult", arrOfResult);

    return arrOfResult;

    function recursive(arrayOfNodes) {
      console.log(arrayOfNodes.forEach(el => console.log(el.value)));

      if (arrayOfNodes.length === 0) return;

      let arrOfNodesOut = [];

      for (let node of arrayOfNodes) {
        arrOfResult.push(node.value);
        //node.right is now pushed as a first el to arrOfNodesOut
        //!!! only difference between these two methods
        if (node.right) {
          arrOfNodesOut.push(node.right);
        }

        if (node.left) {
          arrOfNodesOut.push(node.left);
        }
      }

      recursive(arrOfNodesOut);
    }
  };

  //Delete a Leaf Node in a Binary Search
  //Delete a Node with One Child in a Binary Search TreePassed
  //Delete a Node with Two Children in a Binary Search Tree

  //Methods required by this.remove: this.isPresent, this.findMaxHeight,
  //this.createArrayOfHeights, this.findMin

  this.remove = function(int) {
    if (!this.isPresent(int)) {
      console.log("value not present");
      return null;
    }

    let currentNodeMain = this.root;
    //edge case: only one node in a tree with no children

    if (
      currentNodeMain.value === int &&
      currentNodeMain.left == null &&
      currentNodeMain.right == null
    ) {
      this.root = null;
      return;
    }

    //delete root when it has only 1 child edge case
    if (currentNodeMain.value == int && currentNodeMain.left == null) {
      this.root = currentNodeMain.right;
      return;
    }

    if (currentNodeMain.value == int && currentNodeMain.right == null) {
      this.root = currentNodeMain.left;
      return;
    }

    //edge case: delete root when it has only 2 children
    if (
      currentNodeMain.value === int &&
      currentNodeMain.left != null &&
      currentNodeMain.right != null &&
      this.findMaxHeight() == 1
    ) {
      currentNodeMain.value = currentNodeMain.left.value;
      currentNodeMain.left = null;

      console.log(JSON.stringify(currentNodeMain, null, 2));
      return;
    }

    //this must be binded, otherwise when this.findMin() will be called
    //in a recursive function "this" will refer to the recursive function!
    let bindedMin = this.findMin.bind(this);
    let bindedRemove = this.remove.bind(this);

    recursive(null, currentNodeMain, null);

    console.log(JSON.stringify(currentNodeMain, null, 2));
    //true if parent has it on the left
    function recursive(previousNode, currentNode, isLeft) {
      if (currentNode == null) {
        return;
      }

      //#1 leaf removal
      if (
        currentNode.value === int &&
        currentNode.left == null &&
        currentNode.right == null
      ) {
        if (isLeft) {
          previousNode.left = null;
          return;
        } else if (!isLeft) {
          previousNode.right = null;
          return;
        }
      }

      // #2 target has one child

      if (
        currentNode.value === int &&
        currentNode.left == null &&
        currentNode.right != null
      ) {
        if (isLeft) {
          previousNode.left = currentNode.right;
          return;
        } else if (!isLeft) {
          previousNode.right = currentNode.right;
          return;
        }
      }

      if (
        currentNode.value === int &&
        currentNode.left != null &&
        currentNode.right == null
      ) {
        if (isLeft) {
          previousNode.left = currentNode.left;
          return;
        } else if (!isLeft) {
          previousNode.right = currentNode.left;
          return;
        }
      }

      // #3 target has two children

      if (
        currentNode.value === int &&
        currentNode.left != null &&
        currentNode.right != null
      ) {
        //binded function used
        let minValInRightSubtree = bindedMin(currentNode.right);
        console.log(minValInRightSubtree);
        bindedRemove(minValInRightSubtree);
        currentNode.value = minValInRightSubtree;
        return;
      }

      // if the value is not found in this node(in this function call):

      //currentNode become previousNode(as named in funcion definition) in the next function call
      //true, currentNode.left is one left side of current node
      //left
      recursive(currentNode, currentNode.left, true);
      //right
      recursive(currentNode, currentNode.right, false);

      return;
    }
  };

  //Invert a Binary Tree (mirror imaga of a tree)
  //Methods required: this.levelOrder

  //ordering tree be levels, then runs function similar to this.add but inverted

  this.invert = function() {
    if (this.root == null) {
      return null;
    }

    let currentNodeMain = this.root;

    let arrOfLeveledInt = this.levelOrder();
    console.log(arrOfLeveledInt);

    currentNodeMain = null;

    for (let el of arrOfLeveledInt) {
      addInverted(el);
    }

    this.root = currentNodeMain;

    //similar as this.add but adds the other way around
    function addInverted(int) {
      let newNode = new customNode2(int);

      //if the root is empty
      if (currentNodeMain == null) {
        currentNodeMain = newNode;
        return;
      }

      recursive(currentNodeMain);

      function recursive(currentNode) {
        if (currentNode.value === int) {
          return null;
        }

        if (int < currentNode.value) {
          if (currentNode.right == null) {
            currentNode.right = newNode;
            return;
          }

          currentNode = currentNode.right;

          return recursive(currentNode);
        }

        if (int > currentNode.value) {
          if (currentNode.left == null) {
            currentNode.left = newNode;
            return;
          }

          currentNode = currentNode.left;
          return recursive(currentNode);
        }
      }
    }
  };
}

let myTree4 = new BinarySearchTree();

/* 
myTree4.add(8);
myTree4.add(3);
myTree4.add(10);
myTree4.add(1);
myTree4.add(6);
myTree4.add(14);
myTree4.add(4);
myTree4.add(7);
myTree4.add(13);
*/

myTree4.add(4);
myTree4.add(1);
myTree4.add(7);
myTree4.add(87);
myTree4.add(34);
myTree4.add(8);
myTree4.add(45);
myTree4.add(73);

console.log(JSON.stringify(myTree4, null, 2));

//myTree4.invert();
//console.log(JSON.stringify(myTree4, null, 2));

//let minResult = myTree4.findMin();
//console.log("TCL: minResult", minResult);

//let maxResult2 = myTree4.findMax();
//console.log("TCL: maxResult2", maxResult2);

//myTree4.isBinarySearchTree(myTree4);

//myTree4.findMinHeight();
//myTree4.findMaxHeight();
//myTree4.isBalanced();
//myTree4.inorder();
//myTree4.preorder();
//myTree4.postorder();
//myTree4.levelOrder();
//myTree4.reverseLevelOrder();

//myTree4.remove(8);

/* 
  
  {
  "value": 4,
  "left": {
    "value": 1,
    "left": null,
    "right": null
  },
  "right": {
    "value": 7,
    "left": null,
    "right": {
      "value": 87,
      "left": {
        "value": 34,
        "left": {
          "value": 8,
          "left": null,
          "right": null
        },
        "right": {
          "value": 45,
          "left": null,
          "right": {
            "value": 73,
            "left": null,
            "right": null
          }
        }
      },
      "right": null
    }
  }
}
  
  */
