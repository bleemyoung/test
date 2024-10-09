/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var minimumDifference = function (nums, k) {
    let ans = Infinity;
    for (let i = 0; i < nums.length; i++) {
        const x = nums[i]
        ans = Math.min(ans, Math.abs(x - k))
        for (let j = i - 1; j >= 0 && (nums[j] | x) !== nums[j]; j--) {
            nums[j] |= x
            ans = Math.min(ans, Math.abs(nums[j] - k))
        }
    }
    return ans
};
// 暴力解法超时
// var minimumDifference = function (nums, k) {
//     let ans = Infinity;
//     for (let i = 0; i < nums.length; i++) {
//         const x = nums[i]
//         ans = Math.min(ans, Math.abs(x - k))
//         for (let j = i - 1; j >= 0; j--) {
//             nums[j] |= x
//             ans = Math.min(ans, Math.abs(nums[j] - k))
//         }
//     }
//     return ans
// };

console.log(minimumDifference([1, 2, 4, 5], 3));//0
console.log(minimumDifference([1, 3, 1, 3], 2));//1