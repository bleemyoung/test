/**
 * @param {number[]} nums
 * @return {number}
 */
var rob = function (nums) {
    let dp = new Array(nums.length + 1).fill(0)
    if (nums.length === 1) return nums[0]
    if (nums.length === 2) return Math.max(nums[0], nums[1])
    dp[0] = nums[0]
    dp[1] = Math.max(nums[0], nums[1])
    for (let i = 2; i < nums.length; i++) {
        dp[i] = Math.max(dp[i - 1], dp[i - 2] + nums[i])
    }
    return dp[nums.length - 1]
};



// https://leetcode.cn/problems/house-robber/solutions/263856/da-jia-jie-she-by-leetcode-solution/?envType=study-plan-v2&envId=dynamic-programming
console.log(rob([2, 7, 9, 3, 1])); // 12