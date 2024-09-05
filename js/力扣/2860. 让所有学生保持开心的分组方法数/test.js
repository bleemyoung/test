// 思路：k为选中人数，则有如下情况：1、nums[i] > k 不被选中； 2、nums[i] < k 被选中； 3、不存在nums[i]==k
// 因此，我们可以遍历所有可能的k，并统计满足条件的分组方法数。其中边界情况k==0或者k==n成立
// https://leetcode.cn/problems/happy-students/
/**
 * @param {number[]} nums
 *  思路：k为选中人数，则有如下情况：1、nums[i] > k 不被选中； 2、nums[i] < k 被选中； 3、不存在nums[i]==k
 * 因此，我们可以遍历所有可能的k，并统计满足条件的分组方法数。其中边界情况k==0或者k==n成立
 * @return {number}
 */
var countWays = function (nums) {
    const n = nums.length;
    let count = 0;
    nums.sort((a, b) => a - b);
    // return nums//test
    for (let k = 0; k <= n; k++) {
        if (k > 0 && nums[k - 1] >= k) {
            continue
        }
        if (k < n && nums[k] <= k) {
            continue
        }
        count++
    }
    return count

};
// 测试用例
console.log(countWays([1, 1]));//2
console.log(countWays([6, 0, 3, 3, 6, 7, 2, 7]));//3
// 2860. 让所有学生保持开心的分组方法数 2024-9-4每日一题