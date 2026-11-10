/**
 * @param {number} n
 * @param {number[]} costs
 * @return {number}
 */
var climbStairs = function (n, costs) {
    const dp = new Array(n + 1).fill(0);
    dp[0] = 0;
    dp[1] = costs[0] + 1;
    if (n > 1) {
        dp[2] = Math.min(dp[1] + 1, dp[0] + 4) + costs[1];
    }
    for (let i = 3; i <= n; i++) {
        dp[i] = Math.min(dp[i - 1] + 1, dp[i - 2] + 4, dp[i - 3] + 9) + costs[i-1];
    }
    return dp[n];
};

// console.log(climbStairs(4, [1, 2, 3, 4]));
console.log(climbStairs(2, [4,6]));