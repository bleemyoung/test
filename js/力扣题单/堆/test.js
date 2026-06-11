const { Heap } = require('@datastructures-js/heap');

const minHeap = new Heap((a, b) => a - b);

minHeap.insert(3);
minHeap.insert(1);
minHeap.insert(2);

console.log(minHeap.root());    // 1
console.log(minHeap.extractRoot()); // 1
console.log(minHeap.root());    // 2