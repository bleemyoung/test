/**
 * @param {number[][]} nums
 * @return {number}
 */
var numberOfPoints = function (nums) {
    let map = new Map();
    for (let item of nums) {
        for (let i = item[0]; i <= item[1]; i++) {
            if (map.has(i)) {

            } else {
                map.set(i, true)
            }
        }
    }
    return map.size;
};




// https://leetcode.cn/problems/points-that-intersect-with-cars/
console.log(numberOfPoints([[3, 6], [1, 5], [4, 7]]));//7 
console.log(numberOfPoints([[1, 3], [5, 8]]));//7