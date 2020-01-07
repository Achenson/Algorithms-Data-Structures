//
// Data Structures: Create a Trie Search Tree
//
var displayTree = tree => console.log(JSON.stringify(tree, null, 2));
var customNode = function() {
  this.keys = new Map();
  this.end = false;
  this.setEnd = function() {
    this.end = true;
  };
  this.isEnd = function() {
    return this.end;
  };
};
var Trie = function() {
  // change code below this line

  this.root = new customNode();
  this.add = function(word, currentNode = this.root) {
    //if word == null (if word was 1 letter long in previous func call)
    if (!word) {
      currentNode.setEnd();
      return;
    }

    let charToAdd = word[0];

    if (!currentNode.keys.has(charToAdd)) {
      currentNode.keys.set(charToAdd, new customNode());
    }

    if (word.length === 1) {
      return this.add(null, currentNode.keys.get(charToAdd));
    }

    return this.add(word.substring(1), currentNode.keys.get(charToAdd));
  };

  this.print = function() {
    let arrayOfResults = [];

    recursive(this.root);

    let newArrayOfResults = [];

    //making string out of arrays
    for (let el of arrayOfResults) {
      newArrayOfResults.push(el.join(""));
    }

    console.log("newArrayOfResults");
    console.log(newArrayOfResults);

    return newArrayOfResults;

    function recursive(currentNode, array = []) {
      for (let char of currentNode.keys.keys()) {
        let newArr = [...array];
        newArr.push(char);
        //!!!! this.end true or false in the next node counts!!!
        //this.end is true if key is null
        if (currentNode.keys.get(char).isEnd()) {
          arrayOfResults.push(newArr);
        }

        recursive(currentNode.keys.get(char), newArr);
      }
    }
  };

  this.isWord = function(word) {
    let arrOfWords = this.print();

    if (arrOfWords.indexOf(word) === -1) {
      console.log("false");
      return false;
    } else {
      console.log("true");
      return true;
    }
  };

  // change code above this line
};

let myTrie = new Trie();
myTrie.add("ball");
myTrie.add("bat");
myTrie.add("doll");
myTrie.add("dork");
myTrie.add("do");
myTrie.add("dorm");
myTrie.add("send");
myTrie.add("sense");

//myTrie.print();

myTrie.isWord("ball");
myTrie.isWord("notpresent");

/* 

[ 'ball', 'bat', 'doll', 'dork', 'dorm', 'do', 'send', 'sense' ]
console.log(JSON.stringify(myTrie, null ,2))
{
  "root": {
    "keys": {**},
    "end": false
  }
}

//trie - first nodes
[ 'b',
  Node {
    keys: Map { 'a' => [Node] },
    end: false,
    setEnd: [Function],
    isEnd: [Function] } ]
[ 'd',
  Node {
    keys: Map { 'o' => [Node] },
    end: false,
    setEnd: [Function],
    isEnd: [Function] } ]
[ 's',
  Node {
    keys: Map { 'e' => [Node] },
    end: false,
    setEnd: [Function],
    isEnd: [Function] } ]
 */
