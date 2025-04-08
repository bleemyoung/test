/**
 * @param {number[]} coins
 * @param {number} amount
 * @return {number}
 */
var coinChange = function (coins, amount) {
    let memo = new Array(amount + 1).fill(-1);
    memo[0] = 0;
    for (let coin of coins) {
        memo[coin] = 1;
    }
    const dp = (amount) => {
        if (memo[amount] !== -1) {
            return memo[amount];
        }
        let min = -1;
        for (let coin of coins) {
            if (amount - coin >= 0) {
                min = Math.min(min, dp(amount - coin) + 1);
            }
        }
        memo[amount] = min;
        return min;
    }
    let ans = dp(amount);
    return ans == -1 ? -1 : ans;
};
// 此解法超时
// console.log(coinChange([1, 2, 5], 11));//3
console.log(coinChange([186, 419, 83, 408], 6249));//20