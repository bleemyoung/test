var minScore = function(n, roads) {
    const vis = Array.from({ length: n + 1 }, () => false);
    const graph = Array.from({ length: n + 1 }, () => []);

    for (const [u, v, dis] of roads) {
        graph[u].push({ v, dis });
        graph[v].push({ v: u, dis });
    }

    let ans = Infinity;
    const dfs = (u) => {
        if (vis[u] === false) {
            vis[u] = true;
        }

        for (const { v, dis } of graph[u]) {
            ans = Math.min(ans, dis);
            if (vis[v] === false) {
                dfs(v);
            }
        }
    };

    dfs(1);
    return ans;
};

// 作者：力扣官方题解
// 链接：https://leetcode.cn/problems/minimum-score-of-a-path-between-two-cities/solutions/3988215/liang-ge-cheng-shi-jian-lu-jing-de-zui-x-knmj/

console.log(minScore(4,[[1,2,9],[2,3,6],[2,4,5],[1,4,7]]));

// 给你一个正整数 n ，表示总共有 n 个城市，城市从 1 到 n 编号。给你一个二维数组 roads ，其中 roads[i] = [ai, bi, distancei] 表示城市 ai 和 bi 之间有一条 双向 道路，道路距离为 distancei 。城市构成的图不一定是连通的。

// 两个城市之间一条路径的 分数 定义为这条路径中道路的 最小 距离。

// 返回城市 1 和城市 n 之间的所有路径的 最小 分数。

// 注意：

// 一条路径指的是两个城市之间的道路序列。
// 一条路径可以 多次 包含同一条道路，你也可以沿着路径多次到达城市 1 和城市 n 。