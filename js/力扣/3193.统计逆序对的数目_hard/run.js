/**
 * @param {number} n
 * @param {number[][]} requirements
 * @return {number}
 */
var numberOfPermutations = function (n, requirements) {
    const MOD = 1e9 + 7;
    let maxCount = 0;
    let reqMap = { 0: 0 }
    for (const [end, count] of requirements) {
        reqMap[end] = count;
        maxCount = Math.max(maxCount, count)
    }
    if (reqMap[0] !== 0) {
        return 0;
    }
    let dp = new Array(n).fill(0).map(() => new Array(maxCount + 1).fill(-1));
    // console.log(reqMap);
    // console.log(dp);
    function dfs(end, count) {
        if (end === 0) {
            return 1;
        }
        if (dp[end][count] !== -1) {
            return dp[end][count];
        }
        if (reqMap.hasOwnProperty(end - 1)) {
            let r = reqMap[end - 1];
            //  r 表示 end-1 的逆序数量
            //  count-r 表示 前end-1个数与end形成的逆序数量
            //  若0<=r<=count-r<=end，则满足条件，并记录。否则dfs值为0
            if (r <= count && count <= end + r) {
                dp[end][count] = dfs(end - 1, r)
                return dp[end][count];
            }
            return 0
        }
        let toSum = 0;
        for (let i = 0; i <= Math.min(count, end); i++) {
            toSum = (toSum + dfs(end - 1, count - i)) % MOD;
        }
        dp[end][count] = toSum;
        return dp[end][count];
    }

    return dfs(n - 1, reqMap[n - 1])
};


console.log(numberOfPermutations(3, [[2, 2], [0, 0]]));
console.log(numberOfPermutations(3, [[2, 2], [1, 1], [0, 0]]));