/**
 * @param {number[][]} piles
 * @param {number} k
 * @return {number}
 */
var maxValueOfCoins = function (piles, k) {
    const n = piles.length;
    const dp = new Array(n + 1).fill(0).map(() => new Array(k + 1).fill(-1));
    const preSum = new Array(n).fill(0).map(() => new Array());
    for (let i = 0; i < n; i++) {
        let sum = 0;
        const arr = piles[i];
        preSum[i].push(0);
        for (let j = 0; j < arr.length; j++) {
            sum += arr[j];
            preSum[i].push(sum);
        }
    }
    // console.log(preSum);
    const dfs = (i, c, memo) => {
        if (i >= n || c <= 0) {
            return 0
        }
        if (memo[i][c] !== -1) {
            return memo[i][c]
        }
        let ans = -Infinity;
        for (let j = 0; j <= Math.min(preSum[i].length - 1, c); j++) {
            ans = Math.max(ans, preSum[i][j] + dfs(i + 1, c - j, memo))
        }
        memo[i][c] = ans
        return memo[i][c]
    }
    return dfs(0, k, dp)
    // https://leetcode.cn/problems/maximum-value-of-k-coins-from-piles/
};
// console.log(maxValueOfCoins([[1, 100, 3], [7, 8, 9]], 2));//101
console.log(maxValueOfCoins([[100], [100], [100], [100], [100], [100], [1, 1, 1, 1, 1, 1, 700]], 7));//706