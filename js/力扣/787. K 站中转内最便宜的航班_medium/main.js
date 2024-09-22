/**
 * @param {number} n
 * @param {number[][]} flights
 * @param {number} src
 * @param {number} dst
 * @param {number} k
 * @return {number}
 */
var findCheapestPrice = function (n, flights, src, dst, k) {
    const INF = 10000 * 101 + 1
    const f = new Array(k + 2).fill(0).map(() => new Array(n).fill(INF))
    f[0][src] = 0
    for (let t = 1; t <= k + 1; t++) {
        for (const flight of flights) {
            const from = flight[0]
            const to = flight[1]
            const cost = flight[2]
            f[t][to] = Math.min(f[t][to], f[t - 1][from] + cost)
        }
    }

    let ans = INF
    for (let t = 1; t <= k + 1; t++) {
        ans = Math.min(ans, f[t][dst])
    }
    return ans === INF ? -1 : ans
};

console.log(findCheapestPrice(4, [[0, 1, 100], [1, 2, 100], [2, 0, 100], [1, 3, 600], [2, 3, 200]], 0, 3, 1));
// Output: 700