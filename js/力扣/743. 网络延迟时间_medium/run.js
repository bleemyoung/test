/**
 * @param {number[][]} times
 * @param {number} n
 * @param {number} k
 * @return {number}
 */
var networkDelayTime = function (times, n, k) {
    const INF = Number.MAX_SAFE_INTEGER;
    const g = new Array(n).fill(INF).map(() => new Array(n).fill(INF));
    for (const [u, v, w] of times) {
        g[u - 1][v - 1] = w;
    }
    const dist = new Array(n).fill(INF);
    dist[k - 1] = 0;
    const used = new Array(n).fill(false);
    for (let i = 0; i < n; i++) {
        let node = -1;
        for (let j = 0; j < n; j++) {
            if (!used[j] && (node === -1 || dist[j] < dist[node])) {
                node = j;
            }
        }
        used[node] = true;
        for (let j = 0; j < n; j++) {
            dist[j] = Math.min(dist[j], dist[node] + g[node][j])
        }

    }
    let ans = Math.max(...dist);
    return ans === INF ? -1 : ans;
};

console.log(networkDelayTime([[2, 1, 1], [2, 3, 1], [3, 4, 1]], 4, 2));