// 1. 优先队列
class PriorityQueue {
  // 默认大顶堆：(a, b) => a > b
  // 小顶堆：传入 (a, b) => a < b
  constructor(comparator = (a, b) => a > b) {
    this.heap = [];
    this.compare = comparator;
  }

  // 插入元素
  insert(element) {
    this.heap.push(element);
    this.bubbleUp();
  }

  // 上浮操作
  bubbleUp() {
    let index = this.heap.length - 1;
    while (index > 0) {
      let parentIndex = Math.floor((index - 1) / 2);
      if (this.compare(this.heap[index], this.heap[parentIndex])) {
        [this.heap[parentIndex], this.heap[index]] = [this.heap[index], this.heap[parentIndex]];
        index = parentIndex;
      } else {
        break;
      }
    }
  }

  // 删除元素
  remove() {
    if (this.heap.length === 0) {
      return null;
    }
    if (this.heap.length === 1) {
      return this.heap.pop();
    } else {
      let removedElement = this.heap[0];
      this.heap[0] = this.heap.pop();   // 将最后一个元素放到根节点
      this.bubbleDown();
      return removedElement;
    }
  }

  // 下浮操作
  bubbleDown() {
    let index = 0;
    while (index < this.heap.length) {
      let leftChildIndex = 2 * index + 1;
      let rightChildIndex = 2 * index + 2;
      let extremChildIndex = index;
        if (leftChildIndex < this.heap.length && this.compare(this.heap[leftChildIndex], this.heap[extremChildIndex])) {
          extremChildIndex = leftChildIndex;
        }
        if (rightChildIndex < this.heap.length && this.compare(this.heap[rightChildIndex], this.heap[extremChildIndex])) {
          extremChildIndex = rightChildIndex;
        }
        if (extremChildIndex !== index) {
          [this.heap[index], this.heap[extremChildIndex]] = [this.heap[extremChildIndex], this.heap[index]];
          index = extremChildIndex;
        } else {
          break;
        }
    }
  }

  // 获取堆顶元素
  peek() {
    return this.heap[0];
  }

  // 获取堆的大小
  size() {
    return this.heap.length;
  }
  // 获取堆的大小
  show() {
    return this.heap;
  }

}

module.exports = { PriorityQueue };