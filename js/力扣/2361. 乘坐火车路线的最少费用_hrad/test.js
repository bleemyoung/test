function minimumCosts(regular, express, expressCost) {
    const n = regular.length;
    const f = new Array(n + 1).fill(0);
    const g = new Array(n + 1).fill(0);
    g[0] = 1 << 30;
    const cost = new Array(n).fill(0);
    for (let i = 1; i <= n; ++i) {
        const [a, b] = [regular[i - 1], express[i - 1]];
        f[i] = Math.min(f[i - 1] + a, g[i - 1] + a);
        g[i] = Math.min(f[i - 1] + expressCost + b, g[i - 1] + b);
        cost[i - 1] = Math.min(f[i], g[i]);
    }
    return cost;
}
console.log(minimumCosts([1, 6, 9, 5], [5, 2, 3, 10], 8));//[1,7,14,19]
console.log(minimumCosts([11, 5, 13], [7, 10, 6], 3));//[10,15,24]