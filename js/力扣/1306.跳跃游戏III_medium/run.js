const Queue = require('../../../utils/Queue');
// const Queue = require('../utils/Queue');

/**
 * @param {number[]} arr
 * @param {number} start
 * @return {boolean}
 */
var canReach = function (arr, start) {
    if (arr[start] == 0) return true;
    const queue = new Queue()
    const visited = new Array(arr.length).fill(false);
    visited[start] = true;
    queue.enqueue(start);
    while (queue.length) {
        const curr = queue.dequeue();
        if (arr[curr] == 0) return true;
        for (let index of [curr + arr[curr], curr - arr[curr]]) {
            if (index >= 0 && index < arr.length && !visited[index]) {
                queue.enqueue(index);
                visited[index] = true;
                if (arr[index] == 0) return true;
            }
        }
    }
    return false
};

console.log(canReach([4, 2, 3, 0, 3, 1, 2], 5));//true
// console.log(canReach([4, 2, 3, 0, 3, 1, 2], 5));//true
// console.log(canReach([3, 0, 2, 1, 2], 5));//false
