// const Queue = require('../../../utils/Queue');
const { Queue } = require('datastructures-js');
var maximumSafenessFactor = function(grid) {
    console.log(grid);
    const m = grid.length;
    const n = grid[0].length;
    if (grid[0][0] === 1 || grid[m-1][n-1] === 1) {
        return 0;
    }
    
    const dis = Array.from({ length: m }, () => Array(n).fill(-1));
    const dirs = [[-1, 0], [1, 0], [0, 1], [0, -1]];
    const q = new Queue();
    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            if (grid[i][j] === 1) {
                q.push([i, j]);
                dis[i][j] = 0;
            }
        }
    }
    
    while (!q.isEmpty()) {
        const [cx, cy] = q.dequeue();
        for (const [dx, dy] of dirs) {
            const nx = cx + dx;
            const ny = cy + dy;
            if (nx >= 0 && nx < m && ny >= 0 && ny < n && dis[nx][ny] === -1) {
                dis[nx][ny] = dis[cx][cy] + 1;
                q.push([nx, ny]);
            }
        }
    }
    
    const check = (limit) => {
        const visit = Array.from({ length: m }, () => Array(n).fill(false));
        const q = [[0, 0]];
        visit[0][0] = true;
        let head = 0;
        
        while (head < q.length) {
            const [cx, cy] = q[head++];
            if (cx === m - 1 && cy === n - 1) {
                return true;
            }
            for (const [dx, dy] of dirs) {
                const nx = cx + dx;
                const ny = cy + dy;
                if (nx >= 0 && nx < m && ny >= 0 && ny < n && 
                    !visit[nx][ny] && dis[nx][ny] >= limit) {
                    q.push([nx, ny]);
                    visit[nx][ny] = true;
                }
            }
        }
        return false;
    };
    
    let lo = 0, hi = Math.min(dis[0][0], dis[m-1][n-1]);
    let res = 0;
    while (lo <= hi) {
        const mid = Math.floor((lo + hi) / 2);
        if (check(mid)) {
            res = mid;
            lo = mid + 1;
        } else {
            hi = mid - 1;
        }
    }
    
    return res;
};

// 作者：力扣官方题解
// 链接：https://leetcode.cn/problems/find-the-safest-path-in-a-grid/solutions/3987423/zhao-chu-zui-an-quan-lu-jing-by-leetcode-xsop/
// 来源：力扣（LeetCode）
// 著作权归作者所有。商业转载请联系作者获得授权，非商业转载请注明出处。
// console.log(maximumSafenessFactor([[1,0,0],[0,0,0],[0,0,1]]));
console.log(maximumSafenessFactor([[0,0,1],[0,0,0],[0,0,0]]));