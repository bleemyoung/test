/**
 * @param {number} k
 * @param {number} n
 * @return {number}
 */
var superEggDrop = function (k, n) {
    let record = new Array(n + 1).fill(-1)
    record[0]=0
    const dp = (i) => {
        if (record[i] >= 0) return record[i]
        let res = 100000
        for (let j = 1; j <= i; j++) {
            res = Math.min(res, Math.max(j, dp(i - j) + 1))
        }
        record[i] = res
        return res
    }
    return dp(n)
};

console.log(superEggDrop(1, 2));