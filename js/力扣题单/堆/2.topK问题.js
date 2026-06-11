const { PriorityQueue } = require('./class');
// 题目描述，找打出数组中最大的k个数
// 例如，数组 [3, 2, 1, 5, 6, 4, 7, 8, 9, 10]，k = 3，输出 [10, 9, 8] ；


function findTopK(arr, k) {
  const minHeap = new PriorityQueue((a, b) => a < b);// 最小堆
  
  for (let num of arr) {
    minHeap.push(num);
    if (minHeap.size() > k) {
      minHeap.remove();//移除最小堆的堆顶
    }
  }
  
  const result = [];
  while (minHeap.size() > 0) {
    result.push(minHeap.remove());
  }
  return result;
}

const arr = [3, 2, 1, 5, 6, 4, 7, 8, 9, 10];
const k = 3;
console.log(`数组: [${arr}]`);
console.log(`Top ${k}: [${findTopK(arr, k)}]`);