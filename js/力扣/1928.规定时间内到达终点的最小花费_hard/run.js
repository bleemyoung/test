/**
 * @param {number} maxTime
 * @param {number[][]} edges
 * @param {number[]} passingFees
 * @return {number}
 */
var minCost = function (maxTime, edges, passingFees) {
    const n = passingFees.length;
    const f = new Array(maxTime + 1).fill(0).map(() => new Array(n).fill(Infinity));
    let res = Infinity
    f[0][0] = passingFees[0];
    for (let t = 1; t <= maxTime; t++) {
        for (const [i, j, cost] of edges) {
            if (t >= cost) {
                if (f[t - cost][j] !== Infinity) {
                    f[t][i] = Math.min(f[t][i], f[t - cost][j] + passingFees[i]);
                }
                if (f[t - cost][i] !== Infinity) {
                    f[t][j] = Math.min(f[t][j], f[t - cost][i] + passingFees[j]);
                }
            }
        }
    }
    // console.log(f);
    for (let t = 1; t <= maxTime; t++) {
        if (f[t][n - 1] !== Infinity) {
            res = Math.min(res, f[t][n - 1]);
        }
    }
    return res === Infinity ? -1 : res;
};

console.log(minCost(30,
    [[0, 1, 10], [1, 2, 10], [2, 5, 10], [0, 3, 1], [3, 4, 10], [4, 5, 15]],
    [5, 1, 2, 20, 20, 3]
));
// Output: 11
console.log(minCost(29,
    [[0, 1, 10], [1, 2, 10], [2, 5, 10], [0, 3, 1], [3, 4, 10], [4, 5, 15]],
    [5, 1, 2, 20, 20, 3]
));
// Output: 48
console.log(minCost(25,
    [[0, 1, 10], [1, 2, 10], [2, 5, 10], [0, 3, 1], [3, 4, 10], [4, 5, 15]],
    [5, 1, 2, 20, 20, 3]
));
// Output: -1