/**
 * @param {number[]} colors
 * @param {number} k
 * @return {number}
 */
var numberOfAlternatingGroups = function (colors, k) {
    const n = colors.length
    let ans = 0
    let count = 0
    for (let i = 1 - k; i < n; i++) {
        if (colors[(i + n) % n] !== colors[(i - 1 + n) % n]) {
            count++
        } else {
            count = 1
        }
        if (count >= k) {
            ans++
        }
    }
    return ans
};

console.log(numberOfAlternatingGroups([0, 1, 0, 0, 1, 0, 1], 6));//3
console.log(numberOfAlternatingGroups([0, 1, 0, 1, 0], 3));//3