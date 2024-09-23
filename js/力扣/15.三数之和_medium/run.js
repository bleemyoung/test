/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function (nums) {
    let res = []
    let n = nums.length
    if (n < 3 || nums == null) return res
    nums.sort((a, b) => a - b)
    for (let i = 0; i < n; i++) {
        if (nums[i] > 0) break;
        if (i > 0 && nums[i] == nums[i - 1]) continue
        let left = i + 1
        let right = n - 1
        while (left < right) {
            let sum = nums[i] + nums[left] + nums[right]
            if (sum == 0) {
                res.push([nums[i], nums[left], nums[right]])
                while (left < right && nums[left] == nums[left + 1]) left++
                while (left < right && nums[right] == nums[right - 1]) right--
                left++
                right--
            } else if (sum > 0) {
                right--
            } else if (sum < 0) {
                left++
            }
        }
    }
    return res
};

console.log(threeSum([-1, 0, 1, 2, -1, -4]))
// 输出：[[-1,-1,2],[-1,0,1]]