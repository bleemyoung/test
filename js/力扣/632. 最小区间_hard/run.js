const { MinPriorityQueue } = require('datastructures-js');
var smallestRange = function(nums) {
    let rangeLeft = 0, rangeRight = Number.MAX_SAFE_INTEGER;
    const size = nums.length;
    const next = new Array(size).fill(0);
    const pq = new MinPriorityQueue();
    let minValue = 0, maxValue = Number.MIN_SAFE_INTEGER;

    for (let i = 0; i < size; ++i) {
        pq.enqueue(i, nums[i][next[i]]);
        maxValue = Math.max(maxValue, nums[i][0]);
    }

    while (true) {
        const row = pq.dequeue();
        console.log(row);
        minValue = nums[row][next[row]];
        if (maxValue - minValue < rangeRight - rangeLeft) {
            rangeLeft = minValue;
            rangeRight = maxValue;
        }
        if (next[row] === nums[row].length - 1) {
            break;
        }
        ++next[row];
        maxValue = Math.max(maxValue, nums[row][next[row]]);
        pq.enqueue(row, nums[row][next[row]]);
    }

    return [rangeLeft, rangeRight];
};

// 作者：力扣官方题解
// 链接：https://leetcode.cn/problems/smallest-range-covering-elements-from-k-lists/solutions/355881/zui-xiao-qu-jian-by-leetcode-solution/
// 来源：力扣（LeetCode）
// 著作权归作者所有。商业转载请联系作者获得授权，非商业转载请注明出处。
console.log(smallestRange([[4,10,15,24,26], [0,9,12,20], [5,18,22,30]]));