/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var minOperations = function (nums, k) {
    nums.sort((a, b) => a - b)
    // console.log(nums);
    let count = 0;
    if (nums[0] < k) return -1;
    let right = nums.length - 1
    while (0 < right) {
        if (right > 0 && nums[right] === nums[right - 1]) {
            right--;
            continue;
        } else {
            count++;
            // 替换操作，可省略
            // for (let i = right; i < nums.length; i++) {
            //     nums[i] = nums[right - 1]
            // }
            right--;
        }
    }
    if (right === 0 && nums[0] > k) count++
    return count
};


console.log(minOperations([5, 2, 5, 4, 5], 2));
console.log(minOperations([9, 7, 5, 3], 1));
// console.log(minOperations([2, 1, 2], 2));