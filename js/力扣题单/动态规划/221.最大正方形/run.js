// https://leetcode.cn/problems/maximal-square/description/?envType=study-plan-v2&envId=dynamic-programming
/**
 * @param {character[][]} matrix
 * @return {number}
 */
var maximalSquare = function (matrix) {
    let maxLen = -1
    const m = matrix.length, n = matrix[0].length
    if (m === 0 || n === 0) return 0
    const dp = new Array(m).fill(0).map(() => new Array(n).fill(0))
    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            if (matrix[i][j] === '1') {
                if (i === 0 || j === 0) {
                    dp[i][j] = 1
                } else {
                    dp[i][j] = Math.min(dp[i - 1][j], dp[i][j - 1], dp[i - 1][j - 1]) + 1
                }
            }
            maxLen = Math.max(maxLen, dp[i][j])
        }
    }
    return maxLen * maxLen
};

console.log(maximalSquare(
    [["1","0","1","0","0"],["1","0","1","1","1"],["1","1","1","1","1"],["1","0","0","1","0"]]
));
console.log(maximalSquare(
    [["0","1"],["1","0"]]
));
console.log(maximalSquare(
    [["0"]]
));