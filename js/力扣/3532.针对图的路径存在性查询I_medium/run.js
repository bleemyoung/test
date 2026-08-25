/**
 * @param {number} n
 * @param {number[]} nums
 * @param {number} maxDiff
 * @param {number[][]} queries
 * @return {boolean[]}
 */
var pathExistenceQueries = function (n, nums, maxDiff, queries) {
    let right = []
    for (let i = 1; i < n; i++) {
        if (nums[i] - nums[i - 1] > maxDiff) {
            right.push(i-1)
        }
    }
    right.push(n - 1)
    // console.log(right);
    // const findLeft = (arr, target) => {
    //     for (let i = 0; i < arr.length; i++) {
    //         if (arr[i] >= target) return i
    //     }
    //     return arr.length
    // }
    const findLeft = (arr, target) => {
        let left = 0, right = arr.length
        while (left < right) {
            let mid = Math.floor((left + right) / 2)
            if (arr[mid] < target) {
                left = mid + 1
            } else {
                right = mid
            }
        }
        return left
    }
    let ans = []
    for (let [i, j] of queries) {
        ans.push(findLeft(right, i) === findLeft(right, j))
    }
    return ans
};
console.log(pathExistenceQueries(4, [51151,60884,61687,95264], 954, [[2, 0]]))//[false]
console.log(pathExistenceQueries(2, [569,10949], 56389, [[0, 0], [0, 1]]))//[true,true]
// console.log(pathExistenceQueries(2, [1, 3], 1, [[0, 0], [0, 1]]))//[true,false]