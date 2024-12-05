var minCost = function (n, cuts) {
    cuts.push(0);
    cuts.push(n);
    cuts.sort((a, b) => a - b);

    const m = cuts.length;
    const memo = Array.from({ length: m }, () => Array(m));
    function dfs(i, j) {
        if (i + 1 === j) { // 无需切割
            return 0;
        }
        if (memo[i][j]) { // 之前计算过
            return memo[i][j];
        }
        let res = Infinity;
        for (let k = i + 1; k < j; k++) {
            res = Math.min(res, dfs(i, k) + dfs(k, j));
        }
        memo[i][j] = res + cuts[j] - cuts[i];
        return memo[i][j]
    }
    return dfs(0, m - 1);
};

// 作者：灵茶山艾府
// 链接：https://leetcode.cn/problems/minimum-cost-to-cut-a-stick/solutions/2982639/jiao-ni-yi-bu-bu-si-kao-qu-jian-dpcong-j-f8px/
// 来源：力扣（LeetCode）
// 著作权归作者所有。商业转载请联系作者获得授权，非商业转载请注明出处。

// console.log(minCost(7, [1, 3, 4, 5]));
console.log(minCost(9, [5, 6, 1, 4, 2]));

let arr = [1, 3, 4, 5];
// console.log(arr.slice(0, 1));
// console.log(arr.slice(2));