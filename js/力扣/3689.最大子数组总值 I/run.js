/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var maxTotalValue = function(nums, k) {
    let min = Infinity;
    let max = -Infinity;
    for(let i = 0; i < nums.length; i++) {
        min = Math.min(min, nums[i]);
        max = Math.max(max, nums[i]);
    }
    return max * k - min * k;
};
// 思路：脑筋急转弯，取最大值和最小值，分别乘以k，相减即可。
// 时间复杂度：O(n)。空间复杂度：O(1)。
console.log(maxTotalValue([1,3,2], 2)); // 4