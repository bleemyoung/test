/**
 * @param {number[]} nums
 * @param {number} m
 * @param {number} k
 * @return {number}
 */
var maxSum = function (nums, m, k) {
    let n = nums.length;
    let sum = 0, maxSum = 0;
    let sameCount = 0;
    let map = new Map();
    for (let i = 0; i < k; i++) {
        let num = nums[i];
        sum += num;
        if (map.has(num)) {
            sameCount++;
            map.set(num, map.get(num) + 1);
        } else {
            map.set(num, 1);
        }
    }
    if (sameCount <= k - m) {
        maxSum = sum;
    }
    for (let i = k; i < n; i++) {
        let right = nums[i];
        let left = nums[i - k];
        sum += right - left;
        if (map.get(left) > 1) {
            sameCount--;
            map.set(left, map.get(left) - 1);
        } else if (map.get(left) == 1) {
            map.delete(left);
        }
        if (map.has(right)) {
            sameCount++;
            map.set(right, map.get(right) + 1);
        } else {
            map.set(right, 1);
        }
        if (sameCount <= k - m) {
            maxSum = Math.max(maxSum, sum);
        }
    }
    return maxSum;
};

console.log(maxSum([2, 6, 7, 3, 1, 7], 3, 4));//18
console.log(maxSum([5, 9, 9, 2, 4, 5, 4], 1, 3));//23
console.log(maxSum([1, 2, 2], 2, 2));//3