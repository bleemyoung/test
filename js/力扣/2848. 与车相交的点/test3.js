/**
 * @param {number[][]} nums
 * @return {number}
 */
var numberOfPoints = function (nums) {
    let max = 0
    for (let interval of nums) {
        max = Math.max(interval[1], max)
    }
    let diff = new Array(max + 2).fill(0)
    for (const interval of nums) {
        diff[interval[0]] += 1
        diff[interval[1] + 1] -= 1
    }
    let result = 0, count = 0
    for (let i = 1; i <= max; i++) {
        count += diff[i]
        if (count > 0) {
            result += 1
        }
    }
    return result
};


// https://leetcode.cn/problems/points-that-intersect-with-cars/
console.log(numberOfPoints([[3, 6], [1, 5], [4, 7]]));//7 
console.log(numberOfPoints([[1, 3], [5, 8]]));//7