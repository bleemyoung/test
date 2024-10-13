/**
 * @param {number} n
 * @return {number}
 */
var twoEggDrop = function (n) {
    let dp = new Array(n + 1).fill(-1);
    dp[0] = 0;
    // dp[1] = 1;
    const dfs = i => {
        if (dp[i] >= 0) return dp[i];
        let res = Infinity;
        for (let j = 1; j <= i; j++) {
            res = Math.min(res, Math.max(j, dfs(i - j) + 1));
        }
        dp[i] = res;
        return res;
    }
    return dfs(n);
};

console.log(twoEggDrop(2)) // 2;
console.log(twoEggDrop(100)) // 14;