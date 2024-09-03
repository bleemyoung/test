/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function (nums, target = 0) {
    nums.sort((a, b) => a - b);
    let result = [];
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] === nums[i - 1] && i > 0) continue
        let left = i + 1
        let right = nums.length - 1
        while (left < right) {
            let sum = nums[i] + nums[left] + nums[right]
            if (sum > target) {
                right--
            } else if (sum < target) {
                left++
            } else {
                result.push([nums[i], nums[left++], nums[right--]])
                while (nums[left] === nums[left - 1]) {
                    left++
                }
                while (nums[right] === nums[right + 1]) {
                    right--
                }
            }
        }
    }
    return result
};

console.log(threeSum([-1, 0, 1, 2, -1, -4]));
// https://leetcode.cn/problems/1fGaJU/