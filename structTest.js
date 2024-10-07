const { MaxPriorityQueue } = require('datastructures-js');
 
// 创建一个优先队列
const pq = new MaxPriorityQueue()
 
// 添加元素
pq.enqueue('item1', 1);
pq.enqueue('item2', 2);
 
// 获取并移除队列中的最高优先级元素
const topItem = pq.dequeue();
console.log(topItem); // 输出: item2