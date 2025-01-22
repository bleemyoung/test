/**
 * @param {number[][]} piles
 * @param {number} k
 * @return {number}
 */
var maxValueOfCoins = function (piles, k) {
    const n = piles.length;
    const dp = new Array(n + 1).fill(0).map(() => new Array(k + 1).fill(0));
    const prePiles = new Array(n).fill(0).map(() => new Array());
    for (let i = 0; i < n; i++) {
        const arr = piles[i];
        for (let j = 0; j < k; j++) {
            prePiles[i][j] = (prePiles[i][j - 1] ?? 0) + (arr[j] ?? 0);
        }
    }
    // console.log(prePiles);
    let ans = -Infinity
    for (let i = 1; i <= piles.length; i++) {
        for (let j = 1; j <= k; j++) {
            let temp = 0
            for (let l = 1; l <= j; l++) {
                temp = Math.max(
                    temp,
                    dp[i - 1][j - l] + prePiles[i - 1][l - 1]
                )
            }

            dp[i][j] = Math.max(
                dp[i - 1][j],
                prePiles[i - 1][j - 1] + (j >= piles[i - 1].length ? dp[i - 1][j - piles[i - 1].length] : 0),
                temp,
                dp[i][j]
            )
            ans = Math.max(dp[i][j], ans)
        }
    }
    return ans
    // 作者：HelKyle
    // 链接：https://leetcode.cn/problems/maximum-value-of-k-coins-from-piles/solutions/1372009/by-scnu_evan-tszb/
    // 来源：力扣（LeetCode）
    // 著作权归作者所有。商业转载请联系作者获得授权，非商业转载请注明出处。
};
// 此解超时
console.log(maxValueOfCoins([[1, 100, 3], [7, 8, 9]], 2));//101
// console.log(maxValueOfCoins([[100], [100], [100], [100], [100], [100], [1, 1, 1, 1, 1, 1, 700]], 7));//706