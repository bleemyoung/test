const { PriorityQueue } = require('./class');

// 默认大顶堆：(a, b) => a > b
// 小顶堆：传入 (a, b) => a < b
const pq = new PriorityQueue();//默认大顶堆
// const pq = new PriorityQueue((a, b) => a < b);// 小顶堆
// const pq = new PriorityQueue((a, b) => a > b);// 大顶堆

pq.insert(5);
pq.insert(3);
pq.insert(8);
pq.insert(1);
pq.insert(9);

console.log('堆顶元素:', pq.peek());
console.log('堆大小:', pq.size());

console.log('依次出队:');
while (pq.size() > 0) {
  console.log(pq.remove());
}

// 小顶堆用法：const pq = new PriorityQueue((a, b) => a < b);