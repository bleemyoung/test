/**
 * @param {number[][]} grid
 * @return {number}
 */
var minPathSum = function (grid) {
    let m = grid.length, n = grid[0].length
    let dp = new Array(m).fill(0).map(() => new Array(n).fill(0))
    dp[0][0] = grid[0][0]
    let temp = 0
    for (let i = 0; i < m; i++) {
        temp+=grid[i][0]
        dp[i][0] = temp
    }
    temp = 0
    for (let j = 0; j < n; j++) {
        temp += grid[0][j]
        dp[0][j] = temp
    }
    // console.log(dp);
    for (let i = 1; i < m; i++) {
        for (let j = 1; j < n; j++) {
            dp[i][j] = Math.min(dp[i - 1][j], dp[i][j - 1]) + grid[i][j]
        }
    }
    console.log(dp);
    return dp[m - 1][n - 1]
};
// https://leetcode.cn/problems/minimum-path-sum/submissions/731636596/?envType=study-plan-v2&envId=dynamic-programming

console.log(minPathSum([[1, 3, 1], [1, 5, 1], [4, 2, 1]]));