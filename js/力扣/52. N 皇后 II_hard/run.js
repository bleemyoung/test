var totalNQueens = function(n) {
    const ans = [];
    const queens = Array(n).fill(0); // 皇后放在 (r,queens[r])
    const col = Array(n).fill(false);
    const diag1 = Array(n * 2 - 1).fill(false);
    const diag2 = Array(n * 2 - 1).fill(false);
    function dfs(r) {
        if (r === n) {
            ans.push(queens.map(c => '.'.repeat(c) + 'Q' + '.'.repeat(n - 1 - c)));
            return;
        }
        // 在 (r,c) 放皇后
        for (let c = 0; c < n; c++) {
            const rc = r - c + n - 1;
            if (!col[c] && !diag1[r + c] && !diag2[rc]) { // 判断能否放皇后
                queens[r] = c; // 直接覆盖，无需恢复现场
                col[c] = diag1[r + c] = diag2[rc] = true; // 皇后占用了 c 列和两条斜线
                dfs(r + 1);
                col[c] = diag1[r + c] = diag2[rc] = false; // 恢复现场
            }
        }
    }
    dfs(0);
    return ans.length;
};

// 作者：灵茶山艾府
// 链接：https://leetcode.cn/problems/n-queens/solutions/2079586/hui-su-tao-lu-miao-sha-nhuang-hou-shi-pi-mljv/
// 来源：力扣（LeetCode）
// 著作权归作者所有。商业转载请联系作者获得授权，非商业转载请注明出处。
console.log(totalNQueens(4));