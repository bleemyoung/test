/**
 * @param {number[][]} nums
 * @return {number}
 */
var numberOfPoints = function (nums) {
    let max = 0
    for (let interval of nums) {
        max = Math.max(interval[1], max)
    }
    let count = new Array(max + 1).fill(0)
    for (const interval of nums) {
        for (let i = interval[0]; i <= interval[1]; i++) {
            count[i] += 1
        }
    }
    let result = 0
    for (let i = 1; i <= count.length; i++) {
        if (count[i] > 0) {
            result++
        }
    }
    return result
};


// https://leetcode.cn/problems/points-that-intersect-with-cars/
console.log(numberOfPoints([[3, 6], [1, 5], [4, 7]]));//7 
console.log(numberOfPoints([[1, 3], [5, 8]]));//7