//
// Data Structures: Depth-First Search
//

var exDFSGraph = [
  [0, 1, 0, 0],
  [1, 0, 1, 0],
  [0, 1, 0, 1],
  [0, 0, 1, 0]
];

let result = dfs(exDFSGraph, 1);
console.log("TCL: result", result);

//depthFirstSearch
function dfs(graph, root) {
  //will be 1,0,2,3 - order doesn't matter
  let resultArr = [];
  //first it will contain all indices which will be gradually removed
  let arrOfIndexes = [];

  for (let i = 0; i < graph.length; i++) {
    arrOfIndexes[i] = i;
  }

  recursive(root);

  function recursive(node) {
    arrOfIndexes.splice(arrOfIndexes.indexOf(node), 1);

    resultArr.push(node);

    let currentNode = graph[node];
    console.log("TCL: recursive -> currentNode", currentNode);

    //[0, 2]
    let indexesToRunOnNextFuncCall = [];

    //saving indices of nodes that are connected to the currendNode (1s in the currentNode array)
    for (let i = 0; i < currentNode.length; i++) {
      if (currentNode[i] === 1) {
        indexesToRunOnNextFuncCall.push(i);
      }
    }

    for (let el of indexesToRunOnNextFuncCall) {
      //if el is present in arrOfIndexes
      if (arrOfIndexes.indexOf(el) !== -1) {
        recursive(el);
      }
    }

    return;
  }

  return resultArr;
}
