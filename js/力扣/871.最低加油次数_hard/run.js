/**
 * @param {number} target
 * @param {number} startFuel
 * @param {number[][]} stations
 * @return {number}
 */
var minRefuelStops = function (target, startFuel, stations) {
    const n = stations.length;
    const dp = new Array(n + 1).fill(0);
    // dp[i] 表示到第 i 次加油能到达的最远距离
    dp[0] = startFuel;
    for (let i = 1; i <= n; i++) {
        const [position, fuel] = stations[i - 1];
        for (let j = i - 1; j >= 0; j--) {
            if (dp[j] >= position) {
                dp[j + 1] = Math.max(dp[j + 1], dp[j] + fuel);
            }
        }
    }
    for (let i = 0; i <= n; i++) {
        if (dp[i] >= target) {
            return i;
        }
    }
    return -1;
};

console.log(minRefuelStops(1, 1, []));
// Output: 0
console.log(minRefuelStops(100, 1, [[10, 100]]));
// Output: -1

console.log(minRefuelStops(100, 10, [[10, 60], [20, 30], [30, 30], [60, 40]]));
// Input: target = 100, startFuel = 10, stations = [[10,60],[20,30],[30,30],[60,40]]
// Output: 2
