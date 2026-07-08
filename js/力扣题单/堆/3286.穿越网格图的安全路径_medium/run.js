// const { MaxPriorityQueue } = require('datastructures-js');
const {
    // PriorityQueue,
    MinPriorityQueue,
    // MaxPriorityQueue
} = require('@datastructures-js/priority-queue');
var findSafeWalk = function (grid, health) {
    const m = grid.length, n = grid[0].length;
    const dis = Array.from({ length: m }, () => new Array(n).fill(-1));
    const dirs = [[0, 1], [1, 0], [-1, 0], [0, -1]];

    const pq = new MinPriorityQueue({
        compare: (a, b) => a[0] - b[0]
    });
    pq.enqueue([grid[0][0], 0, 0]);
    let count = 0;
    while (!pq.isEmpty()) {
        const [val, cx, cy] = pq.dequeue();
        console.log('count:', ++count, val, cx, cy)
        if (dis[cx][cy] >= 0) {
            continue;
        }
        dis[cx][cy] = val;

        for (const [dx, dy] of dirs) {
            const nx = cx + dx;
            const ny = cy + dy;

            if (nx < 0 || ny < 0 || nx >= m || ny >= n || dis[nx][ny] >= 0) {
                continue;
            }
            console.log([val + grid[nx][ny], nx, ny]);
            pq.enqueue([val + grid[nx][ny], nx, ny]);
        }
    }

    return dis[m - 1][n - 1] < health;
};
console.log(findSafeWalk([[0, 1, 0, 0, 0], [0, 1, 0, 1, 0], [0, 0, 0, 1, 0]], 1));
// 作者：力扣官方题解
// 链接：https://leetcode.cn/problems/find-a-safe-walk-through-a-grid/solutions/3988214/chuan-yue-wang-ge-tu-de-an-quan-lu-jing-ygb08/
// 来源：力扣（LeetCode）
// 著作权归作者所有。商业转载请联系作者获得授权，非商业转载请注明出处。