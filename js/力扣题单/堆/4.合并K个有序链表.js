const { PriorityQueue } = require('./class');

class ListNode {
  constructor(val = 0, next = null) {
    this.val = val;
    this.next = next;
  }
}

class MinHeapForMerge {
  constructor() {
    this.heap = [];
  }

  insert(node) {
    if (!node) return;
    this.heap.push(node);
    this.bubbleUp();
  }

  bubbleUp() {
    let index = this.heap.length - 1;
    while (index > 0) {
      const parentIndex = Math.floor((index - 1) / 2);
      if (this.heap[parentIndex].val > this.heap[index].val) {
        [this.heap[parentIndex], this.heap[index]] = [this.heap[index], this.heap[parentIndex]];
        index = parentIndex;
      } else {
        break;
      }
    }
  }

  remove() {
    if (this.heap.length === 0) return null;
    if (this.heap.length === 1) return this.heap.pop();

    const min = this.heap[0];
    this.heap[0] = this.heap.pop();
    this.bubbleDown();
    return min;
  }

  bubbleDown() {
    let index = 0;
    while (index < this.heap.length) {
      const left = 2 * index + 1;
      const right = 2 * index + 2;
      let smallest = index;

      if (left < this.heap.length && this.heap[left].val < this.heap[smallest].val) {
        smallest = left;
      }
      if (right < this.heap.length && this.heap[right].val < this.heap[smallest].val) {
        smallest = right;
      }

      if (smallest !== index) {
        [this.heap[index], this.heap[smallest]] = [this.heap[smallest], this.heap[index]];
        index = smallest;
      } else {
        break;
      }
    }
  }

  size() {
    return this.heap.length;
  }
}

function mergeKLists(lists) {
  const minHeap = new MinHeapForMerge();
  
  for (let head of lists) {
    if (head) minHeap.insert(head);
  }

  const dummy = new ListNode();
  let current = dummy;

  while (minHeap.size() > 0) {
    const node = minHeap.remove();
    current.next = node;
    current = current.next;
    if (node.next) {
      minHeap.insert(node.next);
    }
  }

  return dummy.next;
}

function arrayToList(arr) {
  const dummy = new ListNode();
  let current = dummy;
  for (let val of arr) {
    current.next = new ListNode(val);
    current = current.next;
  }
  return dummy.next;
}

function listToArray(head) {
  const result = [];
  while (head) {
    result.push(head.val);
    head = head.next;
  }
  return result;
}

const list1 = arrayToList([1, 4, 5]);
const list2 = arrayToList([1, 3, 4]);
const list3 = arrayToList([2, 6]);

const merged = mergeKLists([list1, list2, list3]);
console.log('合并结果:', listToArray(merged));