/**
 * @param {number[]} nums
 * @return {number}
 */
var deleteAndEarn = function (nums) {
    // let dp = new Array(10001).fill(0);
    let max = Math.max(...nums);
    let dp = new Array(max + 1).fill(0);
    for (let num of nums) {
        dp[num] += num;
    }
    for (let i = 2; i <= max; i++) {
        dp[i] = Math.max(dp[i - 1], dp[i - 2] + dp[i]);
    }
    return dp[max];
};

// https://leetcode.cn/problems/delete-and-earn/?envType=study-plan-v2&envId=dynamic-programming
// 1 <= nums.length <= 2 * 104
// 1 <= nums[i] <= 104
console.log(deleteAndEarn([3, 4, 2])); // 6
// console.log(deleteAndEarn([2, 2, 3, 3, 3, 4])); // 9

// https://leetcode.cn/problems/delete-and-earn/submissions/731233120/?envType=study-plan-v2&envId=dynamic-programming