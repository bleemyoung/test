// 超时，需要优化时间开销
/**
 * @param {string[]} classroom
 * @param {number} energy
 * @return {number}
 */
var minMoves = function (classroom, energy) {
    const m = classroom.length;
    const n = classroom[0].length;
    // 每个垃圾的 id
    // 不是垃圾的位置就是 -1
    const litterId = Array.from(
        { length: m },
        () => Array(n).fill(-1)
    );
    let startR = 0;
    let startC = 0;
    let litterCount = 0;
    // 1. 找起点，并给每个垃圾编号
    for (let r = 0; r < m; r++) {
        for (let c = 0; c < n; c++) {
            const ch = classroom[r][c];

            if (ch === 'S') {
                startR = r;
                startC = c;
            }

            if (ch === 'L') {
                litterId[r][c] = litterCount;
                litterCount++;
            }
        }
    }
    // 没有垃圾
    if (litterCount === 0) {
        return 0;
    }
    // 所有垃圾都捡完时的 mask
    // 比如有 3 个垃圾：111
    const targetMask = (1 << litterCount) - 1;

    // visited[r][c][energy][mask]
    const visited = Array.from(
        { length: m },
        () =>
            Array.from(
                { length: n },
                () =>
                    Array.from(
                        { length: energy + 1 },
                        () => new Uint8Array(1 << litterCount)
                    )
            )
    );

    // BFS 队列
    // [r, c, 剩余能量, mask]
    const queue = [];

    // 初始状态
    queue.push([
        startR,
        startC,
        energy,
        0
    ]);

    visited[startR][startC][energy][0] = 1;

    let head = 0;
    let moves = 0;

    const dirs = [
        [-1, 0],
        [1, 0],
        [0, -1],
        [0, 1]
    ];

    // BFS
    while (head < queue.length) {
        const size = queue.length - head;

        // 当前这一层 BFS
        for (let i = 0; i < size; i++) {
            const [r, c, curEnergy, mask] = queue[head++];

            // 所有垃圾已经捡完
            if (mask === targetMask) {
                return moves;
            }

            // 尝试四个方向
            for (const [dr, dc] of dirs) {
                const nr = r + dr;
                const nc = c + dc;

                // 越界
                if (
                    nr < 0 ||
                    nr >= m ||
                    nc < 0 ||
                    nc >= n
                ) {
                    continue;
                }

                // 障碍物
                if (classroom[nr][nc] === 'X') {
                    continue;
                }

                // 能量为 0，不能移动
                if (curEnergy === 0) {
                    continue;
                }

                // 移动一次，能量 -1
                let nextEnergy = curEnergy - 1;

                // mask 先继承
                let nextMask = mask;

                // 如果走到垃圾
                const id = litterId[nr][nc];

                if (id !== -1) {
                    nextMask |= (1 << id);
                }

                // 如果走到 R，能量恢复
                if (classroom[nr][nc] === 'R') {
                    nextEnergy = energy;
                }

                // 这个状态以前来过
                if (
                    visited[nr][nc][nextEnergy][nextMask]
                ) {
                    continue;
                }

                visited[nr][nc][nextEnergy][nextMask] = 1;

                queue.push([
                    nr,
                    nc,
                    nextEnergy,
                    nextMask
                ]);
            }
        }

        moves++;
    }

    return -1;
};

console.log(minMoves(["S.", "XL"], 2));
console.log(minMoves(["LS", "RL"], 4));