//
// Data Structures: "Breadth-First Search"
//

//adjacency Matrix
var exBFSGraph = [
  [0, 1, 0, 0],
  [1, 0, 1, 0],
  [0, 1, 0, 1],
  [0, 0, 1, 0]
];

let result = bfs(exBFSGraph, 1);
console.log("TCL: result", result);

//breadth-first-search
function bfs(graph, root) {
  // Distance object returned
  let nodesLen = {};
  //first it will contain all indices which will be gradually removed
  let arrOfIndexes = [];

  for (let i = 0; i < graph.length; i++) {
    //infinity if the node is unreachable from the root
    nodesLen[i] = Infinity;
    arrOfIndexes[i] = i;
  }

  //for root currentDistance === 0
  recursive(root, 0);

  function recursive(node, currentDistance) {
    arrOfIndexes.splice(arrOfIndexes.indexOf(node), 1);

    //nodesLen = {... ,1: 0,...}
    nodesLen[node] = currentDistance;
    // ..., [1, 0, 1, 0], ..., ...
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
        recursive(el, currentDistance + 1);
      }
    }

    return;
  }

  return nodesLen;
}
