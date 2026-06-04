/**
 * @param {number[]} landStartTime
 * @param {number[]} landDuration
 * @param {number[]} waterStartTime
 * @param {number[]} waterDuration
 * @return {number}
 */
var earliestFinishTime = function (landStartTime, landDuration, waterStartTime, waterDuration) {
    const n = landStartTime.length;
    const m = waterStartTime.length;
    let res = Infinity;
    for (let i = 0; i < n; i++) {
        for (let j = 0; j < m; j++) {
            // 先陆再水
            let timeLand = landStartTime[i] + landDuration[i];
            let landWater =Math.max(timeLand, waterStartTime[j]) + waterDuration[j];
            res = Math.min(res, landWater);
            // 先水再陆
            let timeWater = waterStartTime[j] + waterDuration[j];
            let waterLand = Math.max(timeWater, landStartTime[i]) + landDuration[i];
            res = Math.min(res, waterLand);
        }
    }
    return res;
};

console.log(earliestFinishTime([2, 8], [4, 1], [6], [3]));//9