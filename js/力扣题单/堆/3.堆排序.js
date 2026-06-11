class MaxHeap {
  constructor(arr = []) {
    this.heap = [...arr];
    this.buildHeap();
  }

  buildHeap() {
    for (let i = Math.floor(this.heap.length / 2) - 1; i >= 0; i--) {
      this.heapify(i, this.heap.length);
    }
  }

  heapify(i, n) {
    let largest = i;
    const left = 2 * i + 1;
    const right = 2 * i + 2;

    if (left < n && this.heap[left] > this.heap[largest]) {
      largest = left;
    }
    if (right < n && this.heap[right] > this.heap[largest]) {
      largest = right;
    }

    if (largest !== i) {
      [this.heap[i], this.heap[largest]] = [this.heap[largest], this.heap[i]];
      this.heapify(largest, n);
    }
  }

  sort() {
    const result = [...this.heap];
    for (let i = result.length - 1; i > 0; i--) {
      [result[0], result[i]] = [result[i], result[0]];
      this.heapifyForSort(result, 0, i);
    }
    return result;
  }

  heapifyForSort(arr, i, n) {
    let largest = i;
    const left = 2 * i + 1;
    const right = 2 * i + 2;

    if (left < n && arr[left] > arr[largest]) largest = left;
    if (right < n && arr[right] > arr[largest]) largest = right;

    if (largest !== i) {
      [arr[i], arr[largest]] = [arr[largest], arr[i]];
      this.heapifyForSort(arr, largest, n);
    }
  }
}

const arr = [12, 11, 13, 5, 6, 7];
const maxHeap = new MaxHeap(arr);
console.log('原数组:', arr);
console.log('排序后:', maxHeap.sort());