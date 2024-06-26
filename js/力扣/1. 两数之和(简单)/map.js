/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {

    if (Array.isArray(nums)) {
        let map = {}
        for (let i = 0; i < nums.length; i++) {
            if (map[target - nums[i]] !== undefined) {
                return [map[target - nums[i]], i]
            } else {
                map[nums[i]] = i
            }
        }
    }
    return []
};

console.log(twoSum([2, 7, 11, 15], 9)) // [0, 1]
console.log(twoSum([3, 2, 4], 6)) // [1, 2]
console.log(twoSum([3, 3], 6)) // [0, 1]