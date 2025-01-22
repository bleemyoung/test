/**
 * @param {number[]} nums
 * @return {number}
 */
var findClosestNumber = function (nums) {
    nums = nums.sort((a, b) => a - b)
    let res = nums[0];
    for (let i = 1; i < nums.length; i++) {
        if (Math.abs(nums[i]) <= Math.abs(res)) {
            res = nums[i];
        }
        if (nums[i] > 0){
            return res;
        }
    }
    return res;
};

console.log(findClosestNumber([-4, -2, 1, 4, 8]));