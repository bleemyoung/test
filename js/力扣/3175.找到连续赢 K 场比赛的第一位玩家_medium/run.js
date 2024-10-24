/**
 * @param {number[]} skills
 * @param {number} k
 * @return {number}
 */
var findWinningPlayer = function (skills, k) {
    let n = skills.length;
    let max = skills[0]
    let count = 0
    let ans = 0
    for (let i = 0; i < n; i++) {
        if (skills[i] > max) {
            max = skills[i]
            count = 1
            ans = i
        } else if (i > 0) {
            count++
        }
        if (count === k) {
            // 在第一圈找到了连续赢 k 场比赛的第一位玩家
            return ans
        }
    }
    // 在第一圈没找到，此时skills[ans]为最大值，在若干圈后必然赢k次
    return ans
};

console.log(findWinningPlayer([4, 2, 6, 3, 9], 2));//2
console.log(findWinningPlayer([2, 5, 4], 3));//1
console.log(findWinningPlayer([4, 18, 17, 20, 15, 12, 8, 5], 1));//1