/**
 * @param {number[]} landStartTime
 * @param {number[]} landDuration
 * @param {number[]} waterStartTime
 * @param {number[]} waterDuration
 * @return {number}
 */
var earliestFinishTime = function (landStartTime, landDuration, waterStartTime, waterDuration) {
    const solve = (start1, duration1, start2, duration2) => {
        let finish1 = Infinity;
        for (let i = 0; i < start1.length; i++) {
            finish1 = Math.min(finish1, start1[i] + duration1[i]); // 结束时间1
        }
        // console.log(finish1);
        let finish2 = Infinity;
        for (let i = 0; i < start2.length; i++) {
            let cal = Math.max(finish1, start2[i]) + duration2[i]
            finish2 = Math.min(finish2, cal); // 结束时间2
        }
        return finish2;
    }
    let landwater = solve(landStartTime, landDuration, waterStartTime, waterDuration);
    let waterland = solve(waterStartTime, waterDuration, landStartTime, landDuration);
    return Math.min(landwater, waterland);
};

console.log(earliestFinishTime([2, 8], [4, 1], [6], [3]));//9