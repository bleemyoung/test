/**
 * @param {number[]} days
 * @param {number[]} costs
 * @return {number}
 */
var mincostTickets = function (days, costs) {
    const isNullValue = (value) => {
        if (value === null || value === undefined) return 0
        return value

    }
    let msxDate = days[days.length - 1]
    let dp = new Array(msxDate + 1).fill(0)
    dp[0] = 0
    let dayCount = days.reduce(
        (acc, cur) => {
            if (cur <= msxDate) {
                acc[cur] = 1
            }
            return acc
        },
        new Array(msxDate + 1).fill(0)
    )
    for (let i = 1; i <= msxDate; i++) {
        if (dayCount[i] === 0) {
            dp[i] = dp[i - 1]
        } else {
            dp[i] = Math.min(
                isNullValue(dp[i - 1] + costs[0]),
                isNullValue(dp[Math.max(0, i - 7)] + costs[1]),
                isNullValue(dp[Math.max(0, i - 30)] + costs[2])
            )
        }
    }
    return dp[msxDate]
};

console.log(mincostTickets([1, 4, 6, 7, 8, 20], [2, 7, 15]));
// Output: 11
console.log(mincostTickets([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 30, 31], [2, 7, 15]));
// Output: 17

// 思路：dp[i]表示第i天的最低票价，状态转移方程为：
// dp[i] = min(dp[i-1] + costs[0], dp[max(0, i-7)] + costs[1], dp[max(0, i-30)] + costs[2])
// 其中，max(0, i-7)表示第i天之前7天的最低票价，max(0, i-30)表示第i天之前30天的最低票价。

// 