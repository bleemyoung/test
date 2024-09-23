/**
 * @param {number[]} values
 * @return {number}
 */
var maxScoreSightseeingPair = function (values) {
    let n = values.length
    let res = -1
    let mx = values[0] + 0
    for (let j = 1; j < n; j++) {
        res = Math.max(res, values[j] - j + mx)
        mx = Math.max(mx, values[j] + j)
    }
    return res
};
// var maxScoreSightseeingPair = function (values) {
//     let n = values.length
//     let res = -1
//     for (let i = 1; i <= n - 1 && i <= 2000; i++) {
//         for (let j = 0; j < n - i; j++) {
//             res = Math.max(res, values[j] + values[j + i] - i)
//         }
//     }
//     return res
// };

console.log(maxScoreSightseeingPair([8, 1, 5, 2, 6])) // 11
console.log(maxScoreSightseeingPair([1, 2])) // 2
