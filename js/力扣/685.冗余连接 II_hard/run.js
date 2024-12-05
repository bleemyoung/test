class UnionFind {
    constructor(n) {
        this.p = Array.from({ length: n }, (_, i) => i);
        this.size = Array(n).fill(1);
    }

    find(x) {
        if (this.p[x] !== x) {
            this.p[x] = this.find(this.p[x]);
        }
        return this.p[x];
    }

    union(a, b) {
        const pa = this.find(a);
        const pb = this.find(b);
        if (pa === pb) {
            return false;
        }
        if (this.size[pa] > this.size[pb]) {
            this.p[pb] = pa;
            this.size[pa] += this.size[pb];
        } else {
            this.p[pa] = pb;
            this.size[pb] += this.size[pa];
        }
        return true;
    }
}

/**
 * @param {number[][]} edges
 * @return {number[]}
 */
var findRedundantDirectedConnection = function (edges) {
    const n = edges.length;
    const ind = Array(n).fill(0);
    for (const [_, v] of edges) {
        ++ind[v - 1];
    }
    const dup = [];
    for (let i = 0; i < n; ++i) {
        if (ind[edges[i][1] - 1] === 2) {
            dup.push(i);
        }
    }
    const uf = new UnionFind(n);
    if (dup.length) {
        for (let i = 0; i < n; ++i) {
            if (i === dup[1]) {
                continue;
            }
            if (!uf.union(edges[i][0] - 1, edges[i][1] - 1)) {
                return edges[dup[0]];
            }
        }
        return edges[dup[1]];
    }
    for (let i = 0; ; ++i) {
        if (!uf.union(edges[i][0] - 1, edges[i][1] - 1)) {
            return edges[i];
        }
    }
};
console.log(findRedundantDirectedConnection([[1, 2], [1, 3], [2, 3]]));
// [2,3]
console.log(findRedundantDirectedConnection([[1, 2], [2, 3], [3, 4], [4, 1], [1, 5]]));
// [4,1]
// 作者：ylb
// 链接：https://leetcode.cn/problems/redundant-connection-ii/solutions/2968048/python3javacgotypescript-yi-ti-yi-jie-bi-yng0/
// 来源：力扣（LeetCode）
// 著作权归作者所有。商业转载请联系作者获得授权，非商业转载请注明出处。