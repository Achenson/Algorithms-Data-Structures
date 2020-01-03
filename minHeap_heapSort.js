//
//Data Structures: "Implement Heap Sort with a Min Heap"
//

var MinHeap = function() {
  // change code below this line

  this.root = [null];

  this.insert = function(el) {
    //adding element(child) to the end of the array,
    // switching el with its parent if the el is smaller
    //and not in the root position (1)

    let heapArray = this.root;

    heapArray.push(el);

    let indexOfChild = heapArray.length - 1;
    let indexOfParent = Math.floor(indexOfChild / 2);

    swapArray(heapArray, indexOfChild, indexOfParent);

    function swapArray(array, indexOfChild, indexOfParent) {
      if (array[indexOfChild] < array[indexOfParent] && indexOfChild >= 2) {
        let elToPutAtTheEnd = array[indexOfParent];
        //removing child and inserting parrent at the child's position
        let removed = array.splice(indexOfChild, 1, elToPutAtTheEnd);
        //putting child in parent's position
        array.splice(indexOfParent, 1, removed[0]);

        //index of current parent will become index of child in next function call
        return swapArray(
          heapArray,
          indexOfParent,
          Math.floor(indexOfParent / 2)
        );
      }
      return;
    }
  };

  this.remove = function() {
    //extracting root value
    //swaping it with last el of the heap array
    //if either of children has lesser value than parent:
    // swap the root with the lesser child, repeat

    let heapArray = this.root;

    if (heapArray.length === 1) {
      return null;
    }
    //if there is only root
    if (heapArray.length === 2) {
      let deleted = heapArray.pop();
      return deleted;
    }

    let firstElement = heapArray[1];
    let lastElement = heapArray.pop();

    heapArray[1] = lastElement;
    //indices of root and it's two children
    swapArray(heapArray, 1, [2, 3]);

    function swapArray(array, indexOfParent, arrayOfChildren) {
      //return if the last level is reached (there are no children anymore)
      if (!array[arrayOfChildren[0]]) {
        return;
      }

      if (
        array[indexOfParent] > array[arrayOfChildren[0]] ||
        array[indexOfParent] > array[arrayOfChildren[1]]
      ) {
        let smallerChildIndex;

        if (array[arrayOfChildren[0]] > array[arrayOfChildren[1]]) {
          smallerChildIndex = arrayOfChildren[1];
        } else {
          smallerChildIndex = arrayOfChildren[0];
        }

        let elToPutLower = array[indexOfParent];
        //replacing child with parent
        let removedLowerEl = array.splice(smallerChildIndex, 1, elToPutLower);
        //replacing parent with child
        array.splice(indexOfParent, 1, removedLowerEl[0]);

        //smallerChildIndex now refers to position of recently switched parent
        return swapArray(heapArray, smallerChildIndex, [
          smallerChildIndex * 2,
          smallerChildIndex * 2 + 1
        ]);
      }

      return;
    }

    return firstElement;
  };

  this.sort = function() {
    //removing element from the heap and adding it to array
    // (this will be always the smaller el in minHeap,
    // this is how this.remove works)
    let heapArray = this.root;

    let result = [];

    let removed;
    while (heapArray.length > 1) {
      console.log(heapArray.length);
      removed = this.remove();
      result.push(removed);
    }

    console.log(result);
    return result;
  };

  // change code above this line
};

let myMinHeap = new MinHeap();

console.log(myMinHeap.root);

let arrayToAdd = [66, 13, 11, 3, 1, 55];

myMinHeap.insert(66);
myMinHeap.insert(13);
myMinHeap.insert(11);
myMinHeap.insert(3);
myMinHeap.insert(1);
myMinHeap.insert(55);

console.log(myMinHeap.root);

//myMinHeap.remove();
//console.log(myMinHeap.root);

myMinHeap.sort();
