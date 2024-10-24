/**
 * @param {number} k
 * @param {number} n
 * @return {number}
 */
var superEggDrop = function (k, n) {
    let record = new Array(n + 1).fill(0).map(() => new Array(k + 1).fill(0))
    record[0] = 0
    const dp = (i, j) => {
        let res = Infinity
        if (j == 1) {
            record[i][j] = i
            return i
        }
        if (i == 0 || i == 1) {
            record[i][j] = i
            return i
        }
        for (let x = 1; x <= i; x++) {
            res = Math.min(res, Math.max(dp(x - 1, j - 1) + 1, dp(i - x, j) + 1))
        }
        record[i][j] = res
        return res
    }
    return dp(n, k)
};

console.log(superEggDrop(1, 2));
console.log(superEggDrop(2, 6));
console.log(superEggDrop(3, 14));