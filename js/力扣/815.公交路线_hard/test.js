/**
 * @param {number[][]} routes
 * @param {number} source
 * @param {number} target
 * @description 官方题解
 * @return {number}
 */
var numBusesToDestination = function (routes, source, target) {
    if (source === target) {
        return 0;
    }

    const n = routes.length;
    const edge = new Array(n).fill(0).map(() => new Array(n).fill(0));
    // console.log(edge);
    const rec = new Map();
    for (let i = 0; i < n; i++) {
        for (const site of routes[i]) {
            const list = (rec.get(site) || []);
            for (const j of list) {
                edge[i][j] = edge[j][i] = true;
            }
            list.push(i);
            rec.set(site, list);
        }
    }
    // console.log(edge);
    // console.log(rec);
    const dis = new Array(n).fill(-1);//从source到其他bus路线的距离，默认值-1，取不到
    const que = [];//包含source的bus路线
    for (const bus of (rec.get(source) || [])) {
        dis[bus] = 1;//第一条路线
        que.push(bus);//bus路线加入队列
    }
    while (que.length) {
        const x = que.shift();
        for (let y = 0; y < n; y++) {
            // x和y这两条路线是否有公交站点，并且y没有被访问过
            if (edge[x][y] && dis[y] === -1) {
                dis[y] = dis[x] + 1;//从当前x路线到y路线，距离+1
                que.push(y);//y路线加入队列
            }
        }
    }

    let ret = Number.MAX_VALUE;//取最大值，默认值
    // 找到所有到达target的路线
    for (const bus of (rec.get(target) || [])) {
        if (dis[bus] !== -1) {
            ret = Math.min(ret, dis[bus]);
        }
    }
    return ret === Number.MAX_VALUE ? -1 : ret;
};

console.log(numBusesToDestination([[1, 2, 7], [3, 6, 7]], 1, 6)); // 2