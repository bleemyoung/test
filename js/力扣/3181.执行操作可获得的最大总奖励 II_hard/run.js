/**
 * @param {number[]} rewardValues
 * @return {number}
 */
var maxTotalReward = function (rewardValues) {
    rewardValues.sort((a, b) => a - b)
    const m = rewardValues[rewardValues.length - 1]
    const dp = Array(2 * m).fill(0)
    dp[0] = 1
    for (let x of rewardValues) {
        for (let k = 2 * x - 1; k >= x; k--) {
            if (dp[k - x] == 1) {
                dp[k] = 1
            }
        }
    }
    let res = 0
    for (let i = 0; i < dp.length; i++) {
        if (dp[i] === 1) {
            res = i
        }
    }
    return res
};

console.log(maxTotalReward([1, 1, 3, 3]));