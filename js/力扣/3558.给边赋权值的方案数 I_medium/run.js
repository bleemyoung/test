/**
 * @param {number[][]} edges
 * @return {number}
 */
var assignEdgeWeights = function(edges) {
    const MOD = 1000000007n;
    // 二进制快速幂（Binary Exponentiation）
    const qpow = (x, y) => {
        let res = 1n;
        let base = BigInt(x);
        let exp = y;
        while (exp > 0) {
            if (exp & 1) {
                res = (res * base) % MOD;
            }
            base = (base * base) % MOD;
            exp >>= 1;
        }
        return Number(res);
    };
    
    const dfs = (g, x, f) => {
        let maxDep = 0;
        for (const y of g[x]) {
            if (y === f) continue;
            maxDep = Math.max(maxDep, dfs(g, y, x) + 1);
        }
        return maxDep;
    };
    
    const n = edges.length + 1;
    const g = Array.from({ length: n + 1 }, () => []);
    
    for (let i = 0; i < edges.length; i++) {
        const u = edges[i][0];
        const v = edges[i][1];
        g[u].push(v);
        g[v].push(u);
    }
    
    const maxDep = dfs(g, 1, 0);
    return qpow(2, maxDep - 1);
};
console.log(assignEdgeWeights([[1,2],[1,3],[3,4],[3,5]]));//2
// 作者：力扣官方题解
// 链接：https://leetcode.cn/problems/number-of-ways-to-assign-edge-weights-i/solutions/3981974/gei-bian-fu-quan-zhi-de-fang-an-shu-i-by-7coj/
// 来源：力扣（LeetCode）
// 著作权归作者所有。商业转载请联系作者获得授权，非商业转载请注明出处。